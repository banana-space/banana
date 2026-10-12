import { createHash } from 'node:crypto';
import { copyFile, mkdir, readdir, readFile, rename, rm, stat, utimes, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { threadId, Worker } from 'node:worker_threads';
import { parse, parseFragment, serialize } from 'parse5';
import { t } from '../shared/i18n.mjs';
import { preambleFor } from '../tikz/preamble.mjs';

const require = createRequire(import.meta.url);
const packageRoot = dirname(require.resolve('node-tikzjax/package.json'));
const cacheRoot = fileURLToPath(new URL('../../.build/tikz-cache/', import.meta.url));
// The compiler's code and the engine version key every diagram; the preamble
// keys only the diagrams that use each optional definition (see preamble.mjs).
const recipe = createHash('sha256').update(readFileSync(new URL('../tikz/compiler.mjs', import.meta.url)))
  .update(readFileSync(new URL('../tikz/worker.mjs', import.meta.url)))
  .update(readFileSync(join(packageRoot, 'package.json'))).digest('hex');
/** A diagram's cache key: its input, with the compiler and the preamble it uses. */
export const diagramKey = input => createHash('sha256').update(recipe + preambleFor(input.tex) + JSON.stringify(input)).digest('hex');
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
function setAttr(node, name, value) {
  const found = node.attrs.find(item => item.name === name);
  if (found) found.value = value;
  else node.attrs.push({ name, value });
}
function* walk(node) {
  yield node;
  for (const child of node.childNodes ?? []) yield* walk(child);
}
/** Copies through a temporary file: renderers in several threads may copy the same font at once. */
async function copyInto(source, target) {
  const temporary = `${target}.${process.pid}-${threadId}.tmp`;
  await copyFile(source, temporary);
  await rename(temporary, target);
}
function appendHTML(parent, html) {
  const fragment = parseFragment(html);
  for (const node of fragment.childNodes) { node.parentNode = parent; parent.childNodes.push(node); }
}

// A diagram's cache file stays this long after it was last used, even when a full build no longer uses it:
// drafts in the online editor keep their diagrams across deployments.
const keepUnused = 7 * 24 * 3600 * 1000;
// Diagrams whose TeX failed, by key, so that a draft with a broken diagram does not compile it at every
// preview (the most recent ones; a timeout or a crashed worker may be transient and is not remembered).
const failures = new Map(), failureLimit = 200;
// The worker shared by renderers created with keepWorker (the preview service), stopped after idling.
const shared = { worker: undefined, timer: undefined };
// A TeX worker compiles one diagram at a time, and replies carry no request: compilations take turns.
let compiling = Promise.resolve();
function inTurn(action) {
  const result = compiling.then(action);
  compiling = result.catch(() => {});
  return result;
}
/** Whether a shared worker is running (for tests). */
export const sharedTikzWorker = () => shared.worker;

/**
 * keepWorker (ms): share one worker between renderers, kept for that long after the last renderer closes,
 * instead of starting a worker (about half a second, some 370 MB) for each. budget (ms): the time this
 * renderer may spend compiling in all (the preview service: a draft with many slow diagrams must not hold
 * the queue); diagrams beyond it fail. compile: compiles a diagram instead of this renderer (postbuild's
 * page workers hand diagrams to the main thread's renderer, which owns the cache, the TeX worker and the
 * record of diagrams in use for prune).
 */
export function tikzRenderer(destination, { timeout = 15000, keepWorker = 0, budget = Infinity, compile: delegate } = {}) {
  let worker, spent = 0;
  const copiedFonts = new Set(), results = new Map(), used = new Set();
  const pending = new Map(); // Key -> the diagram being loaded or compiled, for pages asking at once.
  function acquire() {
    if (!keepWorker) return worker ??= new Worker(new URL('../tikz/worker.mjs', import.meta.url));
    clearTimeout(shared.timer);
    if (!shared.worker) {
      shared.worker = new Worker(new URL('../tikz/worker.mjs', import.meta.url));
      shared.worker.unref(); // An idle worker does not keep the process alive.
    }
    return shared.worker;
  }
  function discard(current) {
    if (worker === current) worker = undefined;
    if (shared.worker === current) shared.worker = undefined;
    return current.terminate();
  }
  async function compile(input) {
    if (delegate) return delegate(input);
    const key = diagramKey(input);
    if (results.has(key)) return results.get(key);
    if (!pending.has(key)) pending.set(key, load(key, input).finally(() => pending.delete(key)));
    return pending.get(key);
  }
  async function load(key, input) {
    if (failures.has(key)) throw new Error(failures.get(key));
    used.add(key);
    const cacheFile = join(cacheRoot, key + '.json');
    try {
      const result = JSON.parse(await readFile(cacheFile, 'utf8'));
      if (typeof result.svg === 'string' && Array.isArray(result.fonts)) {
        results.set(key, result);
        // Used now: the file counts as recent for pruning (see keepUnused).
        const now = new Date();
        await utimes(cacheFile, now, now).catch(() => {});
        return result;
      }
    } catch (error) { if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error; }
    const result = await inTurn(() => compileTeX(key, input));
    await mkdir(cacheRoot, { recursive: true });
    await writeFile(cacheFile, JSON.stringify(result));
    results.set(key, result);
    return result;
  }
  async function compileTeX(key, input) {
    if (spent >= budget) throw new Error(t('build_tikz_budget', { Seconds: budget / 1000 }));
    const limit = Math.min(timeout, budget - spent), started = performance.now();
    const current = acquire();
    return new Promise((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timer);
        current.off('message', onMessage); current.off('error', onError); current.off('exit', onExit);
      };
      const onMessage = message => {
        cleanup();
        if (!message.error) { resolve(message.result); return; }
        failures.delete(key);
        failures.set(key, message.error);
        if (failures.size > failureLimit) failures.delete(failures.keys().next().value);
        reject(Object.assign(new Error(message.error), { tex: true }));
      };
      const onError = error => { cleanup(); reject(error); };
      const onExit = code => { cleanup(); reject(new Error(t('build_tikz_worker_exit', { Code: code }))); };
      const timer = setTimeout(() => {
        cleanup();
        void discard(current);
        reject(new Error(limit < timeout ? t('build_tikz_budget', { Seconds: budget / 1000 }) : t('build_tikz_timeout', { Seconds: timeout / 1000 })));
      }, limit);
      current.once('message', onMessage); current.once('error', onError); current.once('exit', onExit);
      current.postMessage(input);
    }).catch(async error => {
      // A TeX error leaves the worker usable; anything else may not.
      if (!error.tex) await discard(current);
      throw error;
    }).finally(() => { spent += performance.now() - started; });
  }
  const fontFolder = join(destination, 'fonts/tikzjax');
  /** Copies fonts (names) and their licence into the output, each font once per renderer. */
  async function copyFonts(fonts) {
    await mkdir(fontFolder, { recursive: true });
    for (const font of fonts) {
      if (!/^[a-z][a-z0-9]*$/.test(font)) throw new Error('Invalid TikZ font name');
      if (!copiedFonts.has(font)) {
        await copyInto(join(packageRoot, 'css/bakoma/ttf', font + '.ttf'), join(fontFolder, font + '.ttf'));
        copiedFonts.add(font);
      }
    }
    await copyInto(join(packageRoot, 'css/bakoma/LICENCE'), join(fontFolder, 'LICENCE'));
  }
  async function fontsForPage(fonts, path) {
    if (!fonts.size) return '';
    await copyFonts(fonts);
    const rules = [...fonts].sort().map(font => {
      const url = relative(dirname(path), join(fontFolder, font + '.ttf')).split('/').map(encodeURIComponent).join('/');
      return `@font-face{font-family:tikzjax-${font};src:url("${url}") format("truetype")}`;
    });
    return `<style data-tikz-fonts>${rules.join('')}</style>`;
  }
  return {
    /** A diagram's { svg, fonts, tagSvg, tagWidth } for { tex, display, mode }, from the cache or compiled. */
    compile,
    /**
     * Replace TikZ placeholders in a parsed parse5 document in place. record ({ fonts, diagrams }, sets):
     * collects the fonts the page uses and its diagrams' cache keys.
     */
    async renderDocument(document, path, record) {
      // Numbered per page, so that a page comes out the same whichever pages were rendered before it.
      const fonts = new Set();
      let count = 0;
      for (const node of walk(document)) {
        if (!attr(node, 'class')?.split(/\s+/).includes('tikz-source')) continue;
        const input = { tex: attr(node, 'data-tex'), display: attr(node, 'data-display') === 'true', mode: attr(node, 'data-tikz-mode') ?? 'math' };
        let rendered;
        try { rendered = await compile(input); }
        catch (error) { throw new Error(t('build_tikz_failed', { File: path, Message: error.message })); }
        for (const font of rendered.fonts) fonts.add(font);
        record?.diagrams.add(diagramKey(input));
        count++;
        setAttr(node, 'class', attr(node, 'class').replace(/\btikz-source\b/, 'tikz-rendered'));
        if (rendered.tagSvg) setAttr(node, 'style', `--tikz-tag-space: ${rendered.tagWidth / 10 + 1}em`);
        node.attrs = node.attrs.filter(item => item.name !== 'data-tikz-mode');
        node.childNodes = [];
        const body = `<span class="tikz-body">${rendered.svg}</span>`;
        appendHTML(node, rendered.tagSvg ? `<span class="tikz-layout">${body}<span class="tikz-tag">${rendered.tagSvg}</span></span>` : body);
        // Cached copies of one picture must not share clip/marker/gradient IDs.
        const ids = new Map();
        for (const child of walk(node)) {
          const id = attr(child, 'id');
          if (child !== node && id) { ids.set(id, `tikz-${count}-${id}`); setAttr(child, 'id', ids.get(id)); }
        }
        for (const child of walk(node)) for (const item of child.attrs ?? []) {
          if (item.name === 'id') continue;
          item.value = item.value.replace(/#([\w.-]+)/g, (match, id) => ids.has(id) ? '#' + ids.get(id) : match);
        }
      }
      const head = [...walk(document)].find(node => node.tagName === 'head');
      if (head && fonts.size) appendHTML(head, await fontsForPage(fonts, path));
      for (const font of fonts) record?.fonts.add(font);
      return document;
    },
    async render(html, path) {
      if (!html.includes('tikz-source')) return html;
      return serialize(await this.renderDocument(parse(html), path));
    },
    /** Copies fonts (names) into the output: pages finished from an earlier build's results. */
    copyFonts,
    /** Counts diagrams (cache keys) as used by this build, for prune: pages finished from an earlier build's results. */
    use(keys) { for (const key of keys) used.add(key); },
    /**
     * After a full build: delete cached diagrams this build did not use (old versions of edited diagrams,
     * removed pages), unless they were used recently (drafts being edited online; see keepUnused).
     * Returns the number deleted.
     */
    async prune() {
      let removed = 0;
      const before = Date.now() - keepUnused;
      for (const name of await readdir(cacheRoot).catch(() => [])) {
        if (!name.endsWith('.json') || used.has(name.slice(0, -5))) continue;
        const file = join(cacheRoot, name);
        if ((await stat(file).catch(() => null))?.mtimeMs > before) continue;
        await rm(file, { force: true });
        removed++;
      }
      return removed;
    },
    /** Stops the worker; a shared one (keepWorker) stops once it has idled that long. */
    async close() {
      if (worker) await discard(worker);
      if (keepWorker && shared.worker) {
        const idle = shared.worker;
        shared.timer = setTimeout(() => { if (shared.worker === idle) void discard(idle); }, keepWorker);
        shared.timer.unref();
      }
    },
  };
}
