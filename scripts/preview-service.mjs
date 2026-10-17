import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, rm, rmdir, stat, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { createInterface } from 'node:readline';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYAML } from 'yaml';
import { prebuild } from './prebuild/run.mjs';
import { publishPlan, touchPages, writePages } from './prebuild/publish.mjs';
import { affectedPages } from './prebuild/affected.mjs';
import { pageURL as pageURLOf } from './shared/pages.mjs';
import { elapsed, headline } from './shared/timing.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));

/**
 * 常驻预览服务（见 docs/preview.md）：全站预处理结果留在内存里，Hugo 以
 * `hugo server` 常驻。页面变化后只重新转换该页（书册页面为整组），
 * 写入生成目录，等 Hugo 增量重建后取回 HTML，在本进程内完成 postbuild。
 *
 * 两种请求：render、renderPages 与 refreshSite 处理 content/ 中已保存的修改（serve），结果成为新的全站状态；
 * preview 处理稿件，不改变全站状态。render 只处理正文的修改，取回这些页面；renderPages（front matter）与
 * refreshSite（其他修改）还重新渲染依赖它们的页面（affected.mjs），从 Hugo 的输出中找出变化的文件。稿件生成的页面写在它们的真实位置，直到下一次请求
 * （与那次的写入合并，Hugo 只重建一次）或空闲 idleRestore 毫秒后才换回全站的版本。
 * 请求依次处理，所以每次预览看到的都是全站加上这一份稿件。
 *
 * - baseURL：页面中的地址前缀。
 * - output：render 的结果写入 <output>/public/，目录结构与完整构建相同；TikZ 字体也复制到这里。
 *   Hugo 的输出在 <output>/hugo/。
 * - content：生成目录（相对仓库根目录），默认 .build/content。
 * - environment：Hugo 环境；与对照的完整构建一致，页面才逐字节相同。
 * - frontMatterOnly：生成目录中的页面只有 front matter，预览时只给被预览的页面写入正文。
 *   页面正文占 Hugo 绝大部分内存（2257 篇时约 1.9 GB → 约 0.4 GB），而渲染一个页面只需要
 *   其他页面的 front matter（书册的编号与引用已由预处理写进本页）。生成目录不能再供完整构建使用，
 *   所以只用于预览接口，不用于 serve。
 * - hugoArgs：额外的 Hugo 参数（如 --buildDrafts）。prebuild 从 process.argv 读取同样的参数，
 *   所以它们也必须是本进程的命令行参数。
 * - idleRestore：最后一个请求之后多久换回稿件占用的文件（毫秒）。
 * - tikzIdle：TikZ 编译进程在最后一次使用之后保留多久（毫秒）。启动一次约 0.5 s，运行时约占 370 MB。
 */
export function previewService({ baseURL, output, content = '.build/content', environment = 'development', frontMatterOnly = false, hugoArgs = [], idleRestore = 30000, tikzIdle = 60000 }) {
  const contentDir = resolve(root, content);
  let site, hugo, idle;
  // URL path -> { raw, html }: Hugo's output and its postbuild result. A body edit in a
  // collection re-renders the whole collection, but most pages come out unchanged.
  // Least recently used first; a page takes about a megabyte, so the cache is bounded.
  let finished = new Map();
  const finishedLimit = 200;
  // Generated files that hold a draft's version rather than the site's.
  let occupied = new Set();
  // Output path (such as /wiki/甲/index.html) -> hash of Hugo's file: which files a rebuild changed.
  let outputs;
  let queue = Promise.resolve(), waiting = 0;
  /** Runs operations one at a time, in the order they were requested. */
  function exclusive(action) {
    waiting++;
    const result = queue.then(action).finally(() => { waiting--; });
    queue = result.catch(() => {});
    return result;
  }

  /** 完整预处理，写入生成目录（稿件占用的文件也随之换回）；失败时之后的请求一律拒绝，直到再次成功。 */
  const refresh = () => exclusive(async () => {
    site = undefined;
    finished = new Map();
    occupied = new Set();
    clearTimeout(idle);
    const start = performance.now();
    const result = await prebuild({ destination: contentDir, frontMatterOnly });
    console.log(headline('prebuild', `${result.pages} pages -> ${content}`, elapsed(start)));
    for (const line of result.timings) console.log(line);
    site = result;
  });

  /** 启动 Hugo（首次完整渲染需数秒）；已在运行时什么也不做。 */
  function ensureHugo() {
    hugo ??= launchHugo({ baseURL, environment, contentDir, destination: join(output, 'hugo'), hugoArgs, onExit: instance => { if (hugo === instance) hugo = undefined; } });
    hugo.ready.catch(() => {}); // Reported by the next request.
    return hugo;
  }

  function ready() {
    if (!site) throw new Error('the preview service has no successful full prebuild yet');
  }

  /**
   * Writes generated pages (relative path -> text) and puts back the site's version of files
   * a previous draft occupied, then waits for Hugo to rebuild them all. draft marks the
   * written pages as occupied; touch lists generated files to rewrite unchanged, so that Hugo renders them again.
   */
  async function apply(generated, { draft, touch = [] }) {
    const instance = ensureHugo();
    await instance.ready;
    const writes = new Map(generated), removals = [];
    for (const relative of occupied) {
      if (writes.has(relative)) continue;
      const text = site.generatedText(relative);
      if (text === undefined) removals.push(relative); // A draft of a new page.
      else writes.set(relative, text);
    }
    const changed = [];
    for (const [relative, text] of writes) {
      if (await readFile(join(contentDir, relative), 'utf8').catch(() => undefined) !== text) changed.push(relative);
    }
    const touched = [...touch].filter(relative => !changed.includes(relative));
    // Wait for every changed file: Hugo may split one save across rebuilds.
    const waited = [...changed, ...removals, ...touched];
    const rebuilt = waited.length ? instance.rebuilt(waited) : undefined;
    rebuilt?.catch(() => {}); // Awaited below, unless writing fails first.
    try {
      occupied = new Set([...occupied, ...generated.keys()]); // Until the writes succeed.
      await writePages(new Map(changed.map(relative => [relative, writes.get(relative)])), contentDir);
      await touchPages(touched, contentDir);
      for (const relative of removals) {
        await rm(join(contentDir, relative), { force: true });
        // Remove the directories a new page created, up to the first that is not empty.
        for (let directory = dirname(relative); directory !== '.'; directory = dirname(directory)) {
          if (!await rmdir(join(contentDir, directory)).then(() => true, () => false)) break;
        }
      }
    } finally {
      rebuilt?.written();
    }
    occupied = draft ? new Set(generated.keys()) : new Set();
    return await rebuilt;
  }

  /**
   * Hugo's HTML for a published page (relative, in content/) at a URL path. Hugo does not render a page
   * whose directory appeared together with it at the top of the content directory (a new section, such as
   * content/a/b/index.md) until the page changes again: then the file is written once more.
   * Still missing, the page is not where pageURL expects it: an error, not a silent skip.
   */
  async function fetchPublished(relative, path) {
    const raw = await fetchPage(path);
    if (raw !== undefined) return raw;
    const rebuilt = ensureHugo().rebuilt([relative]);
    rebuilt.catch(() => {});
    try {
      const file = join(contentDir, relative);
      await writeFile(file, await readFile(file));
    } finally { rebuilt.written(); }
    await rebuilt;
    const again = await fetchPage(path);
    if (again === undefined) throw new Error(`hugo server: ${relative} is not at ${path}`);
    return again;
  }

  /** Hugo's HTML for a URL path, or undefined when Hugo has no such page (drafts and the like). */
  async function fetchPage(path) {
    const response = await fetch(`${hugo.origin}${path.split('/').map(encodeURIComponent).join('/')}`);
    if (response.status === 404) return;
    if (!response.ok) throw new Error(`hugo server: ${response.status} for ${path}`);
    return response.text();
  }

  /**
   * postbuild for pages (URL path or output file path -> Hugo's HTML); destination is the output directory TikZ
   * fonts are copied to; see finishDocument for sourceLines.
   */
  async function finish(pages, destination, { sourceLines = false } = {}) {
    // Imported here so that a broken postbuild module fails rendering, not the full prebuild.
    const [{ parse, serialize }, { finishDocument }, { tikzRenderer }] = await Promise.all([
      import('parse5'), import('./postbuild/page.mjs'), import('./postbuild/tikz.mjs'),
    ]);
    // A preview compiles its new diagrams in 20 s at most (sourceLines: a preview, not the serve's pages).
    const diagrams = tikzRenderer(destination, { keepWorker: tikzIdle, budget: sourceLines ? 20000 : Infinity }), result = new Map();
    let processed = 0;
    try {
      for (const [path, raw] of pages) {
        let html = finished.get(path)?.raw === raw ? finished.get(path).html : undefined;
        if (html === undefined) {
          const document = parse(raw);
          await finishDocument(document, path.endsWith('.html') ? join(destination, path) : join(destination, path, 'index.html'), { text: raw, diagrams, sourceLines });
          html = serialize(document);
          processed++;
        }
        finished.delete(path);
        finished.set(path, { raw, html });
        if (finished.size > finishedLimit) finished.delete(finished.keys().next().value);
        result.set(path, html);
      }
    } finally {
      await diagrams.close();
    }
    return { pages: result, processed };
  }

  /** Restores the site's version of every occupied file once requests stop for a while. */
  function scheduleRestore() {
    clearTimeout(idle);
    idle = setTimeout(() => {
      exclusive(async () => { if (site && occupied.size) await apply(new Map(), { draft: false }); })
        .catch(error => console.error(`[preview] restoring drafted pages failed: ${error.message}`));
    }, idleRestore);
    idle.unref();
  }

  /** 重新渲染 content/ 中源文件已变化的页面（相对路径），结果成为全站状态。返回生成的页面数与各步用时。 */
  const render = pages => exclusive(async () => {
    ready();
    const timings = {};
    let start = performance.now();
    const sources = new Map();
    for (const page of pages) sources.set(page, await readFile(join(root, 'content', page), 'utf8'));
    const { files } = await site.update(sources);
    timings.prebuild = elapsed(start);
    start = performance.now();
    await apply(files, { draft: false });
    const raws = new Map();
    for (const [relative, text] of files) {
      const path = pageURL(relative, text);
      const raw = path && await fetchPublished(relative, path);
      if (raw !== undefined) raws.set(path, raw);
    }
    timings.hugo = elapsed(start);
    start = performance.now();
    const destination = join(output, 'public');
    await rm(destination, { recursive: true, force: true });
    const { pages: htmls, processed } = await finish(raws, destination);
    for (const [path, html] of htmls) {
      const file = join(destination, path, 'index.html');
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, html);
    }
    timings[`postbuild (${processed} changed)`] = elapsed(start);
    return { pages: htmls.size, timings };
  });

  /**
   * Hugo's output files written since a time (ms; 0: all of them) whose content changed since the last scan:
   * output path -> content. written collects every path written since then.
   */
  async function scanOutputs(since, written = new Set()) {
    const directory = join(output, 'hugo'), changed = new Map();
    outputs ??= new Map();
    for (const entry of await readdir(directory, { recursive: true, withFileTypes: true })) {
      if (!entry.isFile()) continue;
      const file = join(entry.parentPath, entry.name), path = file.slice(directory.length).split('\\').join('/');
      if (since && (await stat(file)).mtimeMs < since) continue;
      written.add(path);
      const content = await readFile(file), hash = createHash('sha1').update(content).digest('hex');
      if (outputs.get(path) === hash) continue;
      outputs.set(path, hash);
      changed.set(path, content);
    }
    return changed;
  }

  /** Records Hugo's output, so that the next renderPages or refreshSite finds what it changes. */
  const trackOutputs = () => exclusive(async () => {
    ready();
    await ensureHugo().ready;
    if (!outputs) await scanOutputs(0);
  });

  /**
   * After a rebuild that began at since (ms): finishes Hugo's changed output files into <output>/public/ (HTML
   * through postbuild, other files as they are). added maps generated pages that are new at their address to
   * it: should Hugo not have rendered one (a new section, see fetchPublished), it is written once more.
   */
  async function collect(since, added, timings) {
    let start = performance.now();
    const written = new Set(), changed = await scanOutputs(since, written);
    const missing = [...added].filter(([, url]) => !written.has(`${url}index.html`)).map(([relative]) => relative);
    if (missing.length) {
      const rebuilt = ensureHugo().rebuilt(missing);
      rebuilt.catch(() => {});
      try { await touchPages(missing, contentDir); } finally { rebuilt.written(); }
      await rebuilt;
      for (const [path, content] of await scanOutputs(since)) changed.set(path, content);
    }
    timings['hugo output'] = elapsed(start);
    start = performance.now();
    const destination = join(output, 'public'), pages = new Map(), files = [];
    await rm(destination, { recursive: true, force: true });
    await mkdir(destination, { recursive: true });
    for (const [path, content] of changed) {
      if (path.endsWith('.html')) pages.set(path, content.toString('utf8'));
      else if (path !== '/search-manifest.json') files.push([path, content]); // The search index waits for a full build.
    }
    const { pages: htmls, processed } = await finish(pages, destination);
    for (const [path, content] of [...htmls, ...files]) {
      await mkdir(dirname(join(destination, path)), { recursive: true });
      await writeFile(join(destination, path), content);
    }
    timings[`postbuild (${processed} changed)`] = elapsed(start);
    return htmls.size;
  }

  // Hugo rebuilds just the pages whose files changed while a change brings it at most some 50 file events
  // (noticed in about 0.35 s, rebuilt in 0.1–0.25 s); beyond that it pauses some 4 s and rebuilds the whole
  // site (5–9 s at 2257 pages). A file rewritten in place (touchPages, writePages for an existing file) is one or
  // two events, a file created or removed through a temporary file (writePages, publishContent) about three. So
  // changes are made in batches.
  const eventBudget = 40;
  /**
   * Makes the changes to the generated directory (changed: the paths that change; write(paths): changes these)
   * and has Hugo render touch (unchanged pages that depend on them, see affected.mjs) again, in batches small
   * enough for Hugo's partial rebuilds, each waited for. Pages changed in a batch before the last are rendered
   * again after it: what changed later may concern them. A rebuild of the whole site after the last changes
   * renders everything already. Returns Hugo's times added up: { notice, build }.
   */
  async function writeInBatches(changed, write, touch) {
    const instance = ensureHugo(), total = { notice: 0, build: 0 };
    const step = async (paths, action) => {
      const rebuilt = instance.rebuilt(paths);
      rebuilt.catch(() => {}); // Awaited below, unless writing fails first.
      try { await action(); } finally { rebuilt.written(); }
      const result = await rebuilt;
      total.notice += result.notice;
      total.build += result.build;
      return result;
    };
    const perBatch = Math.floor(eventBudget / 3), queue = [...touch];
    let last;
    for (let index = 0; index < changed.length; index += perBatch) {
      const batch = changed.slice(index, index + perBatch), final = index + perBatch >= changed.length;
      // The last batch takes the first touched pages along.
      const along = final ? queue.splice(0, eventBudget - 3 * batch.length) : [];
      last = await step([...batch, ...along], async () => {
        await write(batch);
        await touchPages(along, contentDir);
      });
    }
    if (last?.full) return total;
    if (changed.length > perBatch) queue.push(...changed.slice(0, -(changed.length % perBatch || perBatch)).filter(path => /\.md$/i.test(path)));
    for (let index = 0; index < queue.length; index += eventBudget) {
      const batch = queue.slice(index, index + eventBudget);
      if ((await step(batch, () => touchPages(batch, contentDir))).full) break;
    }
    return total;
  }

  /** Marks errors of the sources (their preprocessing), which leave everything as it was: stage 'prebuild'. */
  const sourceErrors = promise => promise.catch(error => { throw Object.assign(error, { stage: 'prebuild' }); });

  /** The state renderPages and refreshSite compare: { pages, files, categories } (see affected.mjs). */
  const state = (result, files = result.files) => ({ pages: result.pageIndex(), files, categories: result.categoryNames() });
  /** Generated pages new at their address: relative path -> URL path. */
  function moved(before, after) {
    const result = new Map();
    for (const [relative, { url }] of after.pages) if (url && before.pages.get(relative)?.url !== url) result.set(relative, url);
    return result;
  }

  /**
   * 重新渲染 content/ 中源文件（含 front matter）已变化的页面（相对路径，可以是新页面）及依赖它们的页面，
   * 结果成为全站状态。返回 { pages, touched, removed, timings }：写入 <output>/public/ 的页面数、重新渲染的
   * 依赖页面数、不再输出的文件（网址路径）；页面用到分类表中没有的分类时什么也不做，返回 { site: true }，
   * 应改用 refreshSite（只有完整预处理才生成分类页）。
   */
  const renderPages = pages => exclusive(async () => {
    ready();
    const timings = {};
    let start = performance.now();
    const sources = new Map();
    for (const page of pages) sources.set(page, await readFile(join(root, 'content', page), 'utf8'));
    const trial = await sourceErrors(site.update(sources, { commit: false }));
    const known = site.categoryNames();
    if (trial.categories.some(name => !known.has(name))) return { site: true };
    if (!outputs) await scanOutputs(0);
    const before = state(site, new Map(site.files));
    const previous = new Map([...trial.files.keys()].map(relative => [relative, site.generatedText(relative)]));
    const { files } = await site.update(sources);
    const after = state(site);
    const changed = new Set([...files].filter(([relative, text]) => previous.get(relative) !== text).map(([relative]) => relative));
    const { touch, removed } = affectedPages({ before, after, targets: site.linkTargets(), roots: site.collections, changed });
    timings.prebuild = elapsed(start);
    start = performance.now();
    const since = Date.now() - 1000;
    if (occupied.size) await apply(new Map(), { draft: false }); // Not in serve, which has no drafts.
    const rebuild = await writeInBatches([...changed], paths => writePages(new Map(paths.map(path => [path, files.get(path)])), contentDir), touch);
    timings.hugo = elapsed(start);
    Object.assign(timings, { 'hugo notice': rebuild.notice, 'hugo build': rebuild.build });
    const count = await collect(since, moved(before, after), timings);
    return { pages: count, touched: touch.size, removed: [...removed], timings };
  });

  /**
   * 完整预处理（content/ 中任何修改：新建、删除与改名、附件、组件、书册目录、分类树、Git 日期），只把变化的
   * 生成文件写给常驻的 Hugo，并重新渲染依赖它们的页面。categoriesChanged：分类树有变化；paths：变化的源文件
   * （content/ 内的相对路径），其中的附件一律重新发布（见 publishPlan 的 force）。
   * 返回与 renderPages 相同；失败时抛出错误，全站状态不变（生成目录可能已部分写入，调用者应完整构建）。
   */
  const refreshSite = ({ categoriesChanged = false, paths = [] } = {}) => exclusive(async () => {
    ready();
    const timings = {};
    let start = performance.now();
    const next = await sourceErrors(prebuild({ destination: contentDir, frontMatterOnly, publish: false }));
    timings.prebuild = elapsed(start);
    start = performance.now();
    const instance = ensureHugo();
    await instance.ready;
    if (!outputs) await scanOutputs(0);
    clearTimeout(idle);
    const before = state(site), after = state(next);
    const since = Date.now() - 1000;
    // Drafts' files are among those that change: publishing puts back the site's version.
    const attachments = paths.filter(path => next.files.get(path)?.link !== undefined);
    const plan = await publishPlan(next.files, contentDir, { force: attachments }), changed = [...plan.removed, ...plan.written];
    const { touch, removed } = affectedPages({ before, after, targets: next.linkTargets(), roots: next.collections, changed: new Set(changed), categoriesChanged });
    occupied = new Set();
    site = next;
    const rebuild = await writeInBatches(changed, paths => plan.run(paths), touch);
    timings.hugo = elapsed(start);
    Object.assign(timings, { 'hugo notice': rebuild.notice, 'hugo build': rebuild.build });
    const count = await collect(since, moved(before, after), timings);
    return { pages: count, touched: touch.size, removed: [...removed], timings };
  });

  /**
   * 预览稿件：relative 为 content/ 内的相对路径（可以是新页面），text 为完整源文本。
   * 返回 { url, html, missingLinks, timings }。预处理错误照常抛出（消息以 "文件:行号: " 开头）；
   * Hugo 的错误带有 log。
   */
  async function previewNow(relative, text) {
    ready();
    const timings = {};
    let start = performance.now();
    // The page's lines carry source-line marks, for the editor to match preview and source.
    const { files, links } = await site.update(new Map([[relative, text]]), { commit: false, marks: relative });
    // The rest of a collection changes only in front matter as far as this page's rendering goes.
    if (frontMatterOnly) for (const [path, generated] of files) if (path !== relative) files.set(path, generated.match(/^---\n[\s\S]*?\n---\n/)[0]);
    timings.prebuild = elapsed(start);
    start = performance.now();
    let rebuild;
    try { rebuild = await apply(files, { draft: true }); } finally { scheduleRestore(); }
    const url = pageURL(relative, files.get(relative));
    const raw = url && await fetchPublished(relative, url);
    if (raw === undefined) throw new Error(`content/${relative}: 页面未发布（草稿、未来日期或 build.render 为 never），没有可预览的输出`);
    timings.hugo = elapsed(start);
    // Where Hugo's time went: noticing the write (file events), building (its own "Total in"), the rest
    // (writing, fetching the page). A slow build with a quick notice points at Hugo or the machine's load.
    if (rebuild) Object.assign(timings, { 'hugo notice': rebuild.notice, 'hugo build': rebuild.build });
    start = performance.now();
    const { pages } = await finish(new Map([[url, raw]]), join(output, 'public'), { sourceLines: true });
    timings.postbuild = elapsed(start);
    return { url, html: pages.get(url), missingLinks: links.map(({ line, column, target }) => ({ line, column, target })), timings };
  }
  const preview = (relative, text) => exclusive(() => previewNow(relative, text));

  /**
   * 预热：预览一个临时的新页面（含缓存中没有的公式）再删除它，让文件监听、Hugo 的增量重建、
   * KaTeX 与 postbuild 模块都先完成初始化，第一个真实请求不必承担。每个 Hugo 进程只预热一次。
   * 返回用时（毫秒），已预热过时为 0。
   */
  const warmUp = () => exclusive(async () => {
    ready();
    const instance = ensureHugo();
    if (instance.warmed) return 0;
    await instance.ready; // Not counted: Hugo's first rendering of the site.
    const start = performance.now();
    const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    await previewNow(`wiki/__preview-warm-up-${token}/index.md`, `---\ntitle: 预览预热 ${token}\n---\n\n预热 $x_{\\mathrm{${token}}}$。\n`);
    clearTimeout(idle);
    await apply(new Map(), { draft: false });
    instance.warmed = true;
    const ms = elapsed(start);
    console.log(`[preview] warm-up done (${ms} ms)`);
    return ms;
  });

  /** 页面当前的源文本（content/ 内的相对路径）；不存在的页面为 undefined。 */
  function source(relative) {
    ready();
    return site.sourceText(relative);
  }

  /** 书册页面可以引用的、书中其他页面的标签（见 prebuild 的 collectionLabels）；书册之外为空。 */
  function labels(relative) {
    ready();
    return site.collectionLabels(relative);
  }

  /**
   * 页面当前的网址路径；不存在或未发布的页面为 undefined。生成的元数据很长（数 KB），解析它占了最近更改的大部分时间，
   * 所以按生成的文本缓存：文本变了才重新解析。
   */
  const urls = new Map(); // relative -> { text, url }
  function url(relative) {
    ready();
    const text = site.generatedText(relative);
    if (text === undefined) return undefined;
    const known = urls.get(relative);
    if (known?.text === text) return known.url;
    const result = pageURL(relative, text);
    urls.set(relative, { text, url: result });
    return result;
  }

    /** 只检查稿件，不渲染：返回 { missingLinks }，错误照常抛出。 */
  const check = (relative, text) => exclusive(async () => {
    ready();
    const { links } = await site.update(new Map([[relative, text]]), { commit: false });
    return { missingLinks: links.map(({ line, column, target }) => ({ line, column, target })) };
  });

  function close() {
    clearTimeout(idle);
    hugo?.close();
    hugo = undefined;
  }
  return {
    refresh, render, renderPages, refreshSite, trackOutputs, preview, check, warmUp, source, labels, url, close,
    startHugo: () => { ensureHugo(); },
    /** Resolves once Hugo has rendered the site. */
    hugoReady: () => ensureHugo().ready,
    /** Requests queued or running. */
    waiting: () => waiting,
  };
}

/** The URL path of a generated page from its text (see pages.mjs). */
const pageURL = (relative, text) => pageURLOf(relative, parseYAML(text.match(/^---\n([\s\S]*?)---\n/)[1]) ?? {});

async function freePort() {
  const server = createServer();
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const { port } = server.address();
  await new Promise(resolve => server.close(resolve));
  return port;
}

/**
 * What went wrong, from Hugo's error lines: the innermost cause of the first (Hugo wraps it in "render of …
 * failed: … execute of template failed: … error calling ToMath: …"), without file paths.
 */
export function hugoMessage(errors) {
  const line = errors[0]?.replace(/^ERROR\s+/, '') ?? '';
  const cause = line.match(/error calling [\w.]+:\s*(.*)$/)?.[1] ?? line.split(/(?:failed|error):\s+/).at(-1);
  return cause.replace(/"?\/[^"\s]*\/([^/"\s]+)"?/g, '$1').trim() || 'hugo failed';
}

/**
 * `hugo server` bound to 127.0.0.1, rendering into <output>/hugo/. Its log tells when a rebuild
 * starts ("Change detected"), which source files it covers ("Source changed /path"),
 * any errors and when it ends ("Total in").
 */
function launchHugo({ baseURL, environment, contentDir, destination, hugoArgs, onExit }) {
  let child, current, closed = false;
  const waiters = new Set();
  let markReady, failReady;
  const ready = new Promise((resolve, reject) => { markReady = resolve; failReady = reject; });
  const startupErrors = [];
  const instance = {
    ready,
    origin: undefined,
    /**
     * Resolves when Hugo's rebuilds have covered all of these paths (relative to the content
     * directory); rejects on their errors. Call before writing, and call written() on the
     * result once the writes are done. Should Hugo's log leave some path out, a waiter that
     * has seen part of its paths gives up on the rest once Hugo stays idle for a moment.
     */
    rebuilt(paths) {
      let waiter;
      const promise = new Promise((resolve, reject) => {
        waiter = { paths: new Set(paths.map(sourcePath)), errors: [], seen: false, written: false, build: 0, resolve, reject };
        waiter.timer = setTimeout(() => settle(waiter, new Error('hugo server did not rebuild within 30 s')), 30000);
        waiters.add(waiter);
      });
      promise.written = () => { waiter.written = true; waiter.writtenAt = performance.now(); };
      return promise;
    },
    close() {
      closed = true;
      if (child?.exitCode === null && child.signalCode === null) child.kill('SIGTERM');
    },
  };
  /** Hugo logs source paths lowercased, with spaces as hyphens. */
  function sourcePath(path) { return `/${path}`.toLowerCase().replace(/ /g, '-'); }
  /**
   * Whether a rebuild covered a path. Hugo watches only directories that existed when it
   * started; a new or removed directory is logged as its _index.md and covers everything in it.
   */
  function covered(build, path) {
    if (build.paths.has(path) || build.paths.has(`${path}/_index.md`)) return true;
    for (let end = path.lastIndexOf('/'); end > 0; end = path.lastIndexOf('/', end - 1)) {
      if (build.paths.has(`${path.slice(0, end)}/_index.md`)) return true;
    }
    return false;
  }
  function settle(waiter, error) {
    waiters.delete(waiter);
    clearTimeout(waiter.timer);
    clearTimeout(waiter.idle);
    if (error) waiter.reject(error);
    else if (waiter.errors.length) waiter.reject(Object.assign(new Error(hugoMessage(waiter.errors)), { log: waiter.errors.join('\n') }));
    // How long Hugo took to notice the write, its own time for the rebuilds that covered it (ms), and whether
    // one of them rebuilt the whole site.
    else waiter.resolve({ notice: Math.max(0, Math.round((waiter.noticed ?? waiter.writtenAt) - (waiter.writtenAt ?? waiter.noticed ?? 0))), build: waiter.build, full: Boolean(waiter.full) });
  }
  function fail(error) {
    failReady(error);
    for (const waiter of waiters) settle(waiter, error);
  }
  function line(text) {
    if (process.env.BANANA_PREVIEW_DEBUG) console.error(`[hugo server] ${text}`);
    if (/^Change detected\b/.test(text)) {
      // Many changes at once make Hugo rebuild everything without listing source files ("Rebuilt in"):
      // such a rebuild covers whatever was completely written before it started.
      current = { paths: new Set(), errors: [], written: new Set([...waiters].filter(waiter => waiter.written)) };
      for (const waiter of waiters) { clearTimeout(waiter.idle); if (waiter.written) waiter.noticed ??= performance.now(); }
    } else if (/^Change of config file detected\b/.test(text)) {
      // A configuration change rebuilds everything without listing source files: it covers
      // whatever was completely written before it started.
      current = { paths: new Set(), errors: [], covers: new Set([...waiters].filter(waiter => waiter.written)) };
      for (const waiter of waiters) { clearTimeout(waiter.idle); if (waiter.written) waiter.noticed ??= performance.now(); }
    }
    else if (current && text.startsWith('Source changed ')) current.paths.add(text.slice('Source changed '.length).trim());
    else if (/^ERROR\b/.test(text)) (current?.errors ?? startupErrors).push(text);
    else if (/^Web Server is available\b/.test(text)) markReady();
    else if (current && /^(?:Total|Rebuilt) in \d+ ms/.test(text)) {
      const build = current, ms = Number(text.match(/in (\d+) ms/)[1]);
      current = undefined;
      if (text.startsWith('Rebuilt') && !build.paths.size) build.covers ??= build.written;
      for (const waiter of waiters) {
        if (build.covers?.has(waiter)) {
          waiter.full = true;
          waiter.paths.clear();
          waiter.errors.push(...build.errors);
          waiter.build += ms;
        } else if ([...waiter.paths].some(path => covered(build, path))) {
          waiter.seen = true;
          waiter.build += ms;
          for (const path of waiter.paths) if (covered(build, path)) waiter.paths.delete(path);
          waiter.errors.push(...build.errors);
        } else if (build.covers) {
          // Still being written when the rebuild began: some of its files may be in it, unlisted.
          waiter.seen = true;
          waiter.build += ms;
          waiter.errors.push(...build.errors);
        }
        if (!waiter.paths.size) settle(waiter);
        else if (waiter.seen) {
          waiter.idle = setTimeout(() => {
            console.error(`[preview] hugo server's log did not list ${[...waiter.paths].join(', ')}; continuing`);
            settle(waiter);
          }, 1500);
        }
      }
    }
  }
  (async () => {
    const port = await freePort();
    instance.origin = `http://127.0.0.1:${port}`;
    if (closed) return fail(new Error('hugo server stopped'));
    child = spawn('hugo', [
      // Rendering to disk rather than memory: about 1 GB less at 2000-odd pages, rebuilds as fast.
      'server', '--destination', destination, '--cleanDestinationDir', '--disableLiveReload', '--bind', '127.0.0.1', '--port', String(port),
      '--baseURL', baseURL, '--appendPort=false', '--environment', environment, '--contentDir', contentDir,
      '--cacheDir', join(root, '.build/hugo-cache'), ...hugoArgs,
    ], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    for (const stream of [child.stdout, child.stderr]) createInterface({ input: stream }).on('line', line);
    child.once('error', fail);
    child.once('close', code => {
      onExit(instance);
      fail(Object.assign(new Error(`hugo server exited (${code})`), { log: startupErrors.join('\n') || undefined }));
    });
  })().catch(fail);
  return instance;
}

// Run as a child process (serve forks it): requests arrive as { id, method, args } messages
// (the service handles them one at a time); replies are { id, ok, result } or { id, ok: false, error, log }.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const options = JSON.parse(process.env.BANANA_PREVIEW_SERVICE ?? '{}');
  const service = previewService({ ...options, hugoArgs: process.argv.slice(2) });
  process.on('message', async ({ id, method, args = [] }) => {
    let reply;
    try { reply = { id, ok: true, result: await service[method](...args) }; }
    catch (error) { reply = { id, ok: false, error: error.message, log: error.log, stage: error.stage }; }
    if (process.connected) process.send(reply);
  });
  const stop = () => { service.close(); process.exit(); };
  process.on('disconnect', stop);
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, stop);
}
