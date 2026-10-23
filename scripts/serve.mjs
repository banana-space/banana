import { t } from './shared/i18n.mjs';
import { elapsed, headline } from './shared/timing.mjs';
import { readFileSync, rmSync, watch } from 'node:fs';
import { mkdir, readFile, readdir, rm, rmdir, stat, writeFile } from 'node:fs/promises';
import { createServer, request as httpRequest } from 'node:http';
import { spawn, execFile, fork } from 'node:child_process';
import { pipeWithoutKatexNoise } from './shared/hugo-log.mjs';
import { promisify } from 'node:util';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = join(root, '.build/preview');
const pageOutput = join(root, '.build/serve-pages');
const watchers = [], clients = new Set(), hugoArgs = [];
let port = 1313, bind = '127.0.0.1', api;
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const match = args[i].match(/^--(port|bind|api)(?:=(.*))?$/);
  if (match) {
    const value = match[2] ?? args[++i];
    if (match[1] === 'port') port = Number(value);
    else if (match[1] === 'api') api = new URL(value);
    else bind = value;
  } else hugoArgs.push(args[i]);
}
if (!Number.isInteger(port) || port < 1 || port > 65535 || !bind) throw new Error(t('serve_invalid_address'));
const origin = `http://${bind.includes(':') ? `[${bind}]` : bind}:${port}`;
// Two instances would build into the same directories and break each other's postbuild.
const lock = join(root, '.build/serve.lock');
await mkdir(dirname(lock), { recursive: true });
for (;;) {
  try { await writeFile(lock, String(process.pid), { flag: 'wx' }); break; } catch (error) { if (error.code !== 'EEXIST') throw error; }
  const owner = Number(await readFile(lock, 'utf8').catch(() => ''));
  const running = owner > 0 && (() => { try { process.kill(owner, 0); return true; } catch (error) { return error.code === 'EPERM'; } })();
  if (running) {
    console.error(t('serve_already_running', { Pid: owner }));
    process.exit(1);
  }
  await rm(lock, { force: true }); // Left behind by a process that no longer runs.
}
process.on('exit', () => {
  try { if (readFileSync(lock, 'utf8') === String(process.pid)) rmSync(lock); } catch {}
});
let timer, building = false, dirty = false, stopping = false, child, snapshot, revision = 0;
// The resident preview service (scripts/preview-service.mjs) keeps the prebuild state and a
// Hugo server; it is restarted after script changes so that it runs the current code.
let service, scriptsChanged = false;
// A full build's postbuild, still writing the search index after its pages were published.
let searching;
// Full rebuilds are needed until one succeeds, and after changes to templates, styles, scripts or settings.
let needFull = true, fullRequested = false, sources;
// A Git commit (dates) or a change to the category tree: preprocessed again, without a full build.
let siteRequested = false, categoriesChanged = false;
const pending = new Set(); // Changed paths under content/ and data/ since the last rebuild.
const revisions = new Map(); // Snapshot path -> revision in which its content last changed.
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.pdf': 'application/pdf', '.xml': 'application/xml', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg',
};
// The browser only reloads completed builds; all text formatting runs in postbuild.
// Each page subscribes with its own path and reloads only when that page changed.
const reloadScript = `const events = new EventSource('/__banana_events?path=' + encodeURIComponent(location.pathname));
events.addEventListener('build', event => {
  if (event.data !== document.documentElement.dataset.previewRevision) location.reload();
});`;

/** The snapshot file served for a URL path; missing pages are served by 404.html. */
function servedFile(path) {
  if (path.endsWith('/')) path += 'index.html';
  if (snapshot.has(path)) return path;
  if (snapshot.has(`${path}/index.html`)) return `${path}/index.html`;
  return '/404.html';
}
const fileRevision = file => String(revisions.get(file) ?? revision);
function notify(response) {
  let data = String(revision);
  if (snapshot && response.pagePath !== undefined) data = fileRevision(servedFile(response.pagePath));
  response.write(`event: build\ndata: ${data}\n\n`);
}

// A wiki alias's address redirects to its page, as Apache does with the same map (docs/deploy.md).
let aliasMap, aliasSource;
function aliasTarget(pathname) {
  const source = snapshot.get('/alias-redirects.txt');
  if (source !== aliasSource) {
    aliasSource = source;
    aliasMap = new Map();
    for (const line of source?.toString('utf8').split('\n') ?? []) {
      const [key, target] = line.split(' ');
      if (target && !aliasMap.has(key)) aliasMap.set(key, target);
    }
  }
  return aliasMap.get(decodeURIComponent(pathname).replace(/\/$/, ''));
}

const server = createServer((request, response) => {
  let path, url;
  try { url = new URL(request.url, origin); path = decodeURIComponent(url.pathname); }
  catch { response.writeHead(400).end(); return; }
  // --api: the online editor's /api/ (npm run editor-api), on the same origin as in production behind Apache.
  if (api && url.pathname.startsWith('/api/')) {
    const forward = httpRequest({ host: api.hostname, port: api.port, path: request.url, method: request.method, headers: { ...request.headers, host: api.host } }, answer => {
      response.writeHead(answer.statusCode, answer.headers);
      answer.pipe(response);
    });
    forward.on('error', error => { if (!response.headersSent) response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end(`editor-api: ${error.message}`); });
    request.pipe(forward);
    return;
  }
  if (path === '/__banana_events') {
    response.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    try { response.pagePath = url.searchParams.has('path') ? decodeURIComponent(url.searchParams.get('path')) : undefined; }
    catch { response.pagePath = undefined; }
    clients.add(response);
    notify(response);
    request.on('close', () => clients.delete(response));
    return;
  }
  if (path === '/__banana_reload.js') {
    response.writeHead(200, { 'Content-Type': mime['.js'], 'Cache-Control': 'no-store' }).end(reloadScript);
    return;
  }
  if (!snapshot) { response.writeHead(503).end(t('serve_building')); return; }
  if (path.endsWith('/')) path += 'index.html';
  if (!snapshot.has(path) && snapshot.has(`${path}/index.html`)) {
    // A header carries only Latin-1: redirect to the percent-encoded path.
    response.writeHead(302, { Location: `${url.pathname}/${url.search}` }).end();
    return;
  }
  const alias = !snapshot.has(path) && aliasTarget(url.pathname);
  if (alias) {
    response.writeHead(302, { Location: alias }).end();
    return;
  }
  const found = snapshot.has(path), file = found ? path : '/404.html';
  let content = snapshot.get(file) ?? Buffer.from(t('serve_not_found'));
  if (extname(file) === '.html') {
    content = Buffer.from(content.toString('utf8')
      .replace('<html ', `<html data-preview-revision="${fileRevision(file)}" `)
      .replace('</body>', '<script defer src="/__banana_reload.js"></script></body>'));
  }
  response.writeHead(found ? 200 : 404, {
    'Content-Type': mime[extname(file)] ?? 'application/octet-stream',
    'Content-Length': content.length, 'Cache-Control': 'no-store',
  });
  response.end(request.method === 'HEAD' ? undefined : content);
});

function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  clearTimeout(timer);
  for (const watcher of watchers) watcher.close();
  for (const client of clients) client.end();
  service?.child.kill('SIGTERM');
  searching?.child.kill('SIGTERM');
  server.close();
  server.closeAllConnections();
  if (child?.pid && child.exitCode === null && child.signalCode === null) {
    const current = child;
    current.kill('SIGTERM');
    const force = setTimeout(() => current.kill('SIGKILL'), 2000);
    force.unref();
    current.once('close', () => clearTimeout(force));
  }
}

/** Runs a build step; with capture, resolves to its standard output (or undefined on failure). */
async function run(command, args, { capture = false } = {}) {
  return new Promise(resolve => {
    child = spawn(command, args, { cwd: root, stdio: ['inherit', capture ? 'pipe' : 'inherit', 'pipe'] });
    pipeWithoutKatexNoise(child.stderr, process.stderr);
    let output = '';
    child.stdout?.on('data', chunk => { output += chunk; });
    child.once('error', error => { console.error(t('serve_start_failed', { Message: error.message })); resolve(capture ? undefined : false); });
    child.once('close', code => resolve(capture ? output : code === 0));
  });
}

function startService() {
  const worker = fork(join(root, 'scripts/preview-service.mjs'), hugoArgs, {
    cwd: root, stdio: ['ignore', 'inherit', 'inherit', 'ipc'],
    env: { ...process.env, BANANA_PREVIEW_SERVICE: JSON.stringify({ baseURL: `${origin}/`, output: pageOutput }) },
  });
  const waiting = new Map();
  let next = 0;
  const instance = {
    child: worker,
    /** Resolves to the reply { ok, result } or { ok: false, error, log }. */
    request: (method, ...args) => new Promise(resolve => {
      if (!worker.connected) { resolve({ ok: false, error: 'the preview service is not running' }); return; }
      const id = next++;
      waiting.set(id, resolve);
      worker.send({ id, method, args });
    }),
  };
  worker.on('message', ({ id, ...reply }) => { waiting.get(id)?.(reply); waiting.delete(id); });
  worker.once('exit', code => {
    for (const resolve of waiting.values()) resolve({ ok: false, error: `the preview service exited (${code})` });
    waiting.clear();
    if (service === instance) service = undefined;
  });
  return instance;
}

/** Files under directory by their URL paths; skip leaves out paths (and the directories at them). */
async function readSnapshot(directory, files = new Map(), prefix = '', skip = () => false) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name), key = `${prefix}/${entry.name}`;
    if (skip(key)) continue;
    if (entry.isDirectory()) await readSnapshot(path, files, key, skip);
    else if (entry.isFile()) files.set(key, await readFile(path));
  }
  return files;
}

const frontMatter = text => text.match(/^(?:\uFEFF)?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)?.[0] ?? '';
/** Source files, directories and page front matter, relative to content/. */
async function readSources(directory = join(root, 'content'), state = { files: new Map(), directories: new Set(['']) }, prefix = '') {
  await Promise.all((await readdir(directory, { withFileTypes: true })).map(async entry => {
    const relative = prefix + entry.name, path = join(directory, entry.name);
    if (entry.isDirectory()) {
      state.directories.add(relative);
      await readSources(path, state, `${relative}/`);
    } else {
      state.files.set(relative, /\.md$/i.test(entry.name) ? { frontMatter: frontMatter(await readFile(path, 'utf8')) } : {});
    }
  }));
  return state;
}

/** The files under data/, relative to it: a path that neither exists nor existed is an editor's temporary file. */
async function readData() {
  return new Set((await readdir(join(root, 'data'), { recursive: true, withFileTypes: true }))
    .filter(entry => entry.isFile()).map(entry => join(entry.parentPath, entry.name).slice(join(root, 'data').length + 1).split('\\').join('/')));
}

/**
 * How changed paths (content/ and data/) can be handled, compared with the sources of the last update:
 * - body: pages whose bodies alone changed, rendered on their own (other pages depend only on front matter;
 *   a collection is rendered whole);
 * - pages: pages whose front matter changed, or new pages, rendered with the pages that depend on them;
 * - site: anything else in content/ (removed, renamed or new directories, attachments, component definitions,
 *   collection.yaml) or the category tree: preprocessed again in full, with only what changed rendered;
 * - full: other data files, which templates read.
 * Paths that neither exist nor existed are editors' temporary files. sources maps pages to their new front matter.
 */
async function classify(paths) {
  const plan = { body: [], pages: [], site: false, full: false, sources: new Map() };
  for (const path of paths) {
    const info = await stat(join(root, path)).catch(error => { if (error.code !== 'ENOENT') throw error; });
    if (path.startsWith('data/')) {
      const relative = path.slice('data/'.length);
      if (relative === 'categories.yaml') { plan.site = true; categoriesChanged = true; }
      else if (info?.isFile() || sources.data.has(relative)) plan.full = true;
      continue;
    }
    const relative = path.slice('content/'.length);
    const known = sources.files.get(relative);
    if (/^(?:notices|navboxes)(?:\/|$)/.test(relative)) {
      if (info || known || sources.directories.has(relative)) plan.site = true;
      continue;
    }
    if (!info) {
      if (known || sources.directories.has(relative)) plan.site = true;
      continue;
    }
    if (info.isDirectory()) {
      if (!sources.directories.has(relative)) plan.site = true;
      continue;
    }
    if (!/\.md$/i.test(relative)) { plan.site = true; continue; }
    const matter = frontMatter(await readFile(join(root, path), 'utf8'));
    plan.sources.set(relative, matter);
    if (known && matter === known.frontMatter) plan.body.push(path);
    else plan.pages.push(path);
  }
  return plan;
}

/**
 * Runs postbuild on the full build's output: pages resolves to true once its pages are finished (the
 * search index comes after them), done to whether it succeeded.
 */
function startPostbuild() {
  // Pages whose Hugo HTML is unchanged since an earlier full build are taken from its results.
  const worker = fork(join(root, 'scripts/postbuild.mjs'), [destination, '--playground', '--prune-cache', '--cache', join(root, '.build/postbuild-cache')], {
    cwd: root, stdio: ['inherit', 'inherit', 'pipe', 'ipc'],
  });
  child = worker;
  pipeWithoutKatexNoise(worker.stderr, process.stderr);
  let pagesFinished;
  const pages = new Promise(resolve => { pagesFinished = resolve; });
  worker.on('message', message => { if (message.pages) pagesFinished(true); });
  const done = new Promise(resolve => {
    worker.once('error', error => { console.error(t('serve_start_failed', { Message: error.message })); resolve(false); });
    worker.once('close', code => resolve(code === 0));
  });
  void done.then(() => pagesFinished(false)); // Exited before finishing the pages.
  return { child: worker, pages, done };
}

/** Stops writing a search index that the next full build replaces anyway. */
async function stopSearching() {
  const current = searching;
  if (!current) return;
  searching = undefined;
  current.child.kill('SIGTERM');
  await current.done;
}

/** Serves a full build's search index once its postbuild has written it; until then the previous one. */
async function publishSearch(postbuild, start) {
  const ok = await postbuild.done;
  if (searching !== postbuild || stopping) return; // A full build replaced it, or serve stopped it.
  if (!ok) {
    searching = undefined;
    needFull = true;
    console.error(t('serve_search_failed'));
    return;
  }
  const index = await readSnapshot(join(destination, 'pagefind'), new Map(), '/pagefind').catch(error => error);
  // A full build that began meanwhile cleans the output; it publishes its own index.
  if (searching !== postbuild || stopping) return;
  searching = undefined;
  if (index instanceof Error) throw index;
  const next = new Map([...snapshot].filter(([file]) => !file.startsWith('/pagefind/')));
  revision++;
  for (const [file, content] of index) {
    if (!snapshot.get(file)?.equals(content)) revisions.set(file, revision);
    next.set(file, content);
  }
  snapshot = next;
  console.log(t('serve_search_complete', { Milliseconds: elapsed(start) }));
}

async function fullBuild() {
  needFull = true;
  await stopSearching();
  const start = performance.now();
  const state = await readSources(); // Before prebuild: later edits are pending changes.
  state.data = await readData();
  console.log(t('serve_prebuild_start'));
  if (!service || scriptsChanged) {
    service?.child.kill('SIGTERM');
    scriptsChanged = false;
    service = startService();
  }
  const prebuilt = await service.request('refresh');
  if (!prebuilt.ok) {
    console.error(prebuilt.error);
    console.error(t('serve_prebuild_failed'));
    return;
  }
  if (stopping) return;
  const hugoStart = performance.now();
  if (!await run('hugo', ['--cleanDestinationDir', '--environment', 'development', '--cacheDir', join(root, '.build/hugo-cache'), '--baseURL', `${origin}/`, ...hugoArgs, '--destination', destination])) {
    console.error(t('serve_hugo_failed'));
    return;
  }
  if (stopping) return;
  console.log(headline('hugo', 'rendered the preview', elapsed(hugoStart)));
  // The preview also writes Pagefind's diagnostic page to /pagefind/playground/.
  const postbuild = startPostbuild();
  if (!await postbuild.pages) {
    await postbuild.done;
    console.error(t('serve_postbuild_failed'));
    return;
  }
  if (stopping) return;
  // Publish an immutable snapshot once the pages are finished. Postbuild goes on to write the search
  // index (replacing /pagefind/ and removing the manifest): until then the previous index is served.
  const next = await readSnapshot(destination, new Map(), '', path => path === '/pagefind' || path === '/search-manifest.json');
  for (const [file, content] of snapshot ?? []) if (file.startsWith('/pagefind/')) next.set(file, content);
  revision++;
  for (const [file, content] of next) if (!snapshot?.get(file)?.equals(content)) revisions.set(file, revision);
  for (const file of revisions.keys()) if (!next.has(file)) revisions.delete(file);
  snapshot = next;
  sources = state;
  needFull = false;
  siteRequested = categoriesChanged = false;
  // Start Hugo, warm it up and record its output in the background; an edit meanwhile waits its turn.
  if (service) void service.request('startHugo').then(() => service?.request('warmUp')).then(() => service?.request('trackOutputs'));
  console.log(t('serve_full_complete', { Milliseconds: elapsed(start) }));
  searching = postbuild;
  void publishSearch(postbuild, start).catch(error => console.error(t('serve_update_failed', { Message: error.message })));
}

/** Merges the pages the preview service wrote to <output>/public/ into the snapshot; removed: URL paths gone. */
async function mergePages(removed = []) {
  const rendered = await readSnapshot(join(pageOutput, 'public'));
  const changed = [...rendered].filter(([file, content]) => !snapshot.get(file)?.equals(content));
  const gone = removed.filter(file => snapshot.has(file) && !rendered.has(file));
  // Keep the on-disk preview in step with what is served.
  for (const [file, content] of changed) {
    await mkdir(dirname(join(destination, file)), { recursive: true });
    await writeFile(join(destination, file), content);
  }
  for (const file of gone) {
    await rm(join(destination, file), { force: true });
    // And the directories it leaves empty, as a full build would.
    for (let directory = dirname(file); directory !== '/'; directory = dirname(directory)) {
      if (!await rmdir(join(destination, directory)).then(() => true, () => false)) break;
    }
  }
  // Built after the writes: a search index published meanwhile stays in the snapshot.
  const next = new Map(snapshot);
  revision++;
  for (const file of gone) {
    next.delete(file);
    revisions.delete(file);
  }
  for (const [file, content] of changed) {
    next.set(file, content);
    revisions.set(file, revision);
  }
  snapshot = next;
}

const timingLine = timings => `  ${Object.entries(timings).map(([name, ms]) => `${name} ${ms} ms`).join(', ')}`;

/** Render only the given pages (bodies changed) and merge them into the snapshot. */
async function updateBodies(pages) {
  const start = performance.now();
  console.log(t('serve_page_start', { Pages: pages.join('、') }));
  const reply = await service.request('render', pages.map(path => path.slice('content/'.length)));
  if (stopping) return false;
  if (!reply.ok) {
    console.error(t('serve_page_failed', { Message: [reply.error, reply.log].filter(Boolean).join('\n') }));
    return false;
  }
  await mergePages();
  console.log(t('serve_page_complete', { Count: reply.result.pages, Milliseconds: elapsed(start) }));
  console.log(timingLine(reply.result.timings));
  return true;
}

/**
 * Pages whose front matter changed (or new pages), with the pages that depend on them; or, with pages
 * undefined, the whole of content/ preprocessed again (paths: the changed paths, for attachments). Resolves to true on success, 'site' when the pages
 * need the latter (a new category), false on failure: 'prebuild' failures (the sources' errors) change
 * nothing, others may leave the generated directory between states.
 */
async function updateSite(pages, paths = []) {
  const start = performance.now();
  if (pages) console.log(t('serve_pages_start', { Pages: pages.join('、') }));
  else console.log(t('serve_site_start'));
  const reply = pages
    ? await service.request('renderPages', pages.map(path => path.slice('content/'.length)))
    : await service.request('refreshSite', { categoriesChanged, paths: paths.filter(path => path.startsWith('content/')).map(path => path.slice('content/'.length)) });
  if (stopping) return false;
  if (!reply.ok) {
    const message = [reply.error, reply.log].filter(Boolean).join('\n');
    if (reply.stage !== 'prebuild') {
      console.error(t('serve_page_failed', { Message: message }));
      return 'full';
    }
    console.error(message);
    console.error(t('serve_prebuild_failed'));
    return false;
  }
  if (reply.result.site) return 'site';
  await mergePages(reply.result.removed);
  console.log(t('serve_update_complete', { Count: reply.result.pages, Touched: reply.result.touched, Removed: reply.result.removed.length, Milliseconds: elapsed(start) }));
  console.log(timingLine(reply.result.timings));
  return true;
}

/** Handles the changes since the last update, the cheapest way that gives the result of a full build. */
async function update(changed) {
  if (needFull || fullRequested) {
    fullRequested = false;
    return fullBuild();
  }
  const plan = await classify(changed);
  if (plan.full) return fullBuild();
  const site = plan.site || siteRequested;
  if (!site && !plan.pages.length) {
    if (!plan.body.length) return; // Only temporary files came and went.
    if (await updateBodies(plan.body)) for (const path of plan.body) sources.files.set(path.slice('content/'.length), { frontMatter: plan.sources.get(path.slice('content/'.length)) });
    return;
  }
  // The sources as preprocessed: read before, so that later edits are pending changes.
  const state = site ? await readSources() : undefined;
  let result = await updateSite(site ? undefined : [...plan.pages, ...plan.body], changed);
  if (result === 'site') result = await updateSite(undefined, changed);
  if (result === true) {
    if (state) {
      state.data = sources.data;
      sources = state;
      siteRequested = categoriesChanged = false;
    } else {
      for (const [relative, matter] of plan.sources) sources.files.set(relative, { frontMatter: matter });
    }
  } else if (result === 'full') {
    await fullBuild();
  } else {
    // The sources have errors: these changes are handled again with the next one.
    for (const path of changed) pending.add(path);
    if (site) siteRequested = true;
  }
}

async function rebuild() {
  if (building || stopping) return;
  dirty = false;
  building = true;
  const changed = [...pending];
  pending.clear();
  try {
    await update(changed);
    if (stopping || !snapshot) return;
    if (!server.listening) {
      server.listen(port, bind);
      await once(server, 'listening');
      console.log(t('serve_address', { Origin: origin }));
    }
    for (const client of clients) notify(client);
  } catch (error) {
    console.error(t('serve_update_failed', { Message: error.message }));
  } finally {
    building = false;
    if (dirty && !timer && !stopping) wake();
  }
}

/** Rebuilds soon; saves often come in bursts. */
function wake() {
  dirty = true;
  clearTimeout(timer);
  timer = setTimeout(() => { timer = undefined; void rebuild(); }, 150);
}

/** A changed path under content/ or data/; without one, the next rebuild is a full one. 'site': see siteRequested. */
function schedule(path) {
  if (path === undefined) fullRequested = true;
  else if (path === 'site') siteRequested = true;
  else pending.add(path);
  wake();
}

for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => stop());
server.on('error', error => { console.error(t('serve_server_failed', { Message: error.message })); stop(1); });
try {
  for (const directory of ['content', 'data', 'layouts', 'assets', 'static', 'i18n', 'scripts']) {
    const watcher = watch(join(root, directory), { recursive: true }, (_event, file) => {
      // Hugo rewrites assets/jsconfig.json on every build; reacting to it rebuilds forever.
      if (directory === 'assets' && String(file) === 'jsconfig.json') return;
      if (directory === 'scripts') scriptsChanged = true;
      schedule(['content', 'data'].includes(directory) && file ? `${directory}/${String(file).split('\\').join('/')}` : undefined);
    });
    watcher.on('error', error => { console.error(t('serve_watch_failed', { Message: error.message })); stop(1); });
    watchers.push(watcher);
  }
  // Watch the directory: editors replace config files during atomic saves.
  const configWatcher = watch(root, (_event, file) => { if (String(file) === 'hugo.toml') schedule(); });
  configWatcher.on('error', error => { console.error(t('serve_config_watch_failed', { Message: error.message })); stop(1); });
  watchers.push(configWatcher);
  // A commit changes derived dates even when no source file changes.
  const git = promisify(execFile);
  let gitDirectories = [];
  try {
    for (const option of ['--git-dir', '--git-common-dir']) {
      const { stdout } = await git('git', ['rev-parse', option], { cwd: root });
      gitDirectories.push(resolve(root, stdout.trim()));
    }
  } catch (error) { if (error.code !== 128) throw error; }
  for (const directory of new Set(gitDirectories)) {
    const watcher = watch(directory, { recursive: true }, (_event, file) => {
      if (/^(?:HEAD|packed-refs|logs\/HEAD|refs\/heads\/[^/]+)$/.test(String(file))) schedule('site');
    });
    watcher.on('error', error => { console.error(t('serve_git_watch_failed', { Message: error.message })); stop(1); });
    watchers.push(watcher);
  }
  console.log(t('serve_watching'));
  await rebuild();
} catch (error) {
  console.error(t('serve_start_failed', { Message: error.message }));
  stop(1);
}
