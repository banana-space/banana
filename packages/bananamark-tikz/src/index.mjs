import { createHash } from 'node:crypto';
import { copyFile, mkdir, readdir, readFile, rename, rm, stat, utimes, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { threadId, Worker } from 'node:worker_threads';
import { problem, sourceError, withLocale } from 'bananamark/messages';
import zhCN from './messages/zh-cn.mjs';
import en from './messages/en.mjs';
import { preambleFor } from './preamble.mjs';

/**
 * bananamark-tikz: TikZ diagrams for bananamark's pages (a plugin of bananamark, apart from it: node-tikzjax and
 * its TeX engine are heavy, and run in Node only). The renderer writes each diagram as a placeholder (<span
 * class="bm-math-rendered bm-tikz-source" data-tex="…">, with the source as its text; see the core's render/math.mjs);
 * this compiles the TeX with node-tikzjax in a worker thread and puts the SVG in its place. Compiled diagrams are
 * kept by the hash of their input (with the compiler and the preamble they get), on disk with the cache option.
 *
 *   const diagrams = tikz({ cache: 'cache/tikz', fonts: { directory: 'site/fonts' } });
 *   html = await diagrams.render(html, { outputPath: 'site/groups/index.html' });
 *
 * Or as a processor's plugin: createProcessor({ plugins: [diagrams] }) and processor.renderAsync(source, page).
 */

const require = createRequire(import.meta.url);
const packageRoot = dirname(require.resolve('node-tikzjax/package.json'));
// The compiler's code and the engine version key every diagram; the preamble
// keys only the diagrams that use each optional definition (see preamble.mjs).
const recipe = createHash('sha256').update(readFileSync(new URL('./compiler.mjs', import.meta.url)))
  .update(readFileSync(new URL('./worker.mjs', import.meta.url)))
  .update(readFileSync(join(packageRoot, 'package.json'))).digest('hex');
/** A diagram's cache key: its input, with the compiler and the preamble it uses. */
export const diagramKey = input => createHash('sha256').update(recipe + preambleFor(input.tex) + JSON.stringify(input)).digest('hex');
// A diagram's placeholder as bananamark's renderer writes it (its render/math.mjs) and parse5
// writes it back: an empty span with the TeX, whether it is displayed and how it is typeset.
const placeholder = /<span( id="[^"]*")? class="([^"]*\bbm-tikz-source\b[^"]*)" data-tex="([^"]*)" data-display="([^"]*)"(?: data-tikz-mode="([^"]*)")?>(?:<code class="bm-tikz-code">[^<]*<\/code>)?<\/span>/g;
// The entities an attribute value can hold (parse5 writes &amp;, &quot; and &nbsp;).
const entities = { amp: '&', quot: '"', nbsp: '\u00a0', lt: '<', gt: '>', apos: "'" };
const decode = value => value.replace(/&(?:#(\d+)|#x([0-9a-f]+)|(\w+));/gi, (match, decimal, hex, name) =>
  decimal ? String.fromCodePoint(Number(decimal)) : hex ? String.fromCodePoint(parseInt(hex, 16)) : entities[name] ?? match);
/**
 * The classes in a diagram's SVG as bananamark names them (bm-tikz-svg, bm-tikz-cjk). The compiler
 * and the preamble write them unprefixed: they are part of every diagram's cache key, so they stay as they were.
 */
const svgClasses = svg => svg.replace(/class="tikz-(svg|cjk)"/g, 'class="bm-tikz-$1"');
/** Gives the diagram's SVG ids the page's diagram number, so that cached copies of one picture share none. */
function renumber(svg, count) {
  const ids = new Map();
  for (const [, id] of svg.matchAll(/<[^>]*\sid="([^"]*)"[^>]*>/g)) ids.set(id, `tikz-${count}-${id}`);
  if (!ids.size) return svg;
  return svg.replace(/<[^>]*>/g, tag => tag.replace(/(\s[^\s=]+)="([^"]*)"/g, (_, name, value) => {
    if (name.trim() === 'id') return `${name}="${ids.get(value) ?? value}"`;
    return `${name}="${value.replace(/#([\w.-]+)/g, (match, id) => ids.has(id) ? `#${ids.get(id)}` : match)}"`;
  }));
}
/** Copies through a temporary file: renderers in several threads may copy the same font at once. */
async function copyInto(source, target) {
  const temporary = `${target}.${process.pid}-${threadId}.tmp`;
  await copyFile(source, temporary);
  await rename(temporary, target);
}

// A diagram's cache file stays this long after it was last used (prune's default maxAge), even when a full build no
// longer uses it: drafts being edited keep their diagrams across builds.
const week = 7 * 24 * 3600 * 1000;
/** The fonts' file names (the BaKoMa fonts node-tikzjax draws text with), for the caller to publish. */
export const fontFile = font => join(packageRoot, 'css/bakoma/ttf', `${font}.ttf`);
// Diagrams whose TeX failed, by key, so that a draft with a broken diagram does not compile it at every
// preview (the most recent ones; a timeout or a crashed worker may be transient and is not remembered).
const failures = new Map(), failureLimit = 200;
// The worker shared by renderers created with workerIdleTimeout (a preview service), stopped after idling.
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
 * Options:
 * - cache: the directory compiled diagrams are kept in (one JSON file each); without it, only in memory.
 * - fonts: { directory, href }: the fonts a page's diagrams use are copied into directory (with their licence),
 *   and the page refers to them by href(font, outputPath), by default the path from the page's HTML file to the font.
 * - timeout (ms, default 15000): a diagram's longest compilation.
 * - totalTimeout (ms): the time this instance may spend compiling in all (a preview: a draft with many slow diagrams
 *   must not hold the queue); diagrams beyond it fail.
 * - workerIdleTimeout (ms): share one worker between instances, kept for that long after the last closes, instead of
 *   starting a worker (about half a second, some 370 MB) for each.
 * - locale, messages: the language of errors and the caller's messages, as bananamark's (this package's own
 *   errors are messages/zh-cn.mjs and messages/en.mjs); by default a page's (a processor gives its plugins its own).
 *
 * Errors in a page are bananamark's BananamarkError: file, code (tikz_failed, with TeX's error as params.message;
 * tikz_timeout, tikz_total_timeout, tikz_worker_exit), params, and the error under it as cause.
 */
export function tikz({ cache, fonts: fontOptions = {}, timeout = 15000, workerIdleTimeout = 0, totalTimeout = Infinity, locale, messages } = {}) {
  let worker, spent = 0;
  /**
   * An error of a page (file, from the page's options page), in the locale and messages given, else the page's:
   * this package's messages under the caller's.
   */
  const pageError = (page, file, key, values, cause) => {
    const given = messages ?? page.messages;
    const tables = { ...given, 'zh-cn': { ...zhCN, ...given?.['zh-cn'] }, en: { ...en, ...given?.en } };
    return withLocale(locale ?? page.locale, undefined, () => sourceError(file ? `${file}: ` : '', problem(key, values), { ...(file ? { file } : {}), cause }), tables);
  };
  // An error of this package's while compiling (shared by the pages that ask for one diagram): its message's key and
  // values, put into words for the page in render().
  const failure = (key, values) => Object.assign(new Error(key), { tikzMessage: { key, values } });
  const copiedFonts = new Map(), results = new Map(), used = new Set();
  const pending = new Map(); // Key -> the diagram being loaded or compiled, for pages asking at once.
  function acquire() {
    if (!workerIdleTimeout) return worker ??= new Worker(new URL('./worker.mjs', import.meta.url));
    clearTimeout(shared.timer);
    if (!shared.worker) {
      shared.worker = new Worker(new URL('./worker.mjs', import.meta.url));
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
    const key = diagramKey(input);
    if (results.has(key)) return results.get(key);
    if (!pending.has(key)) pending.set(key, load(key, input).finally(() => pending.delete(key)));
    return pending.get(key);
  }
  async function load(key, input) {
    if (failures.has(key)) throw new Error(failures.get(key));
    used.add(key);
    if (!cache) {
      const result = await inTurn(() => compileTeX(key, input));
      results.set(key, result);
      return result;
    }
    const cacheFile = join(cache, key + '.json');
    try {
      const result = JSON.parse(await readFile(cacheFile, 'utf8'));
      if (typeof result.svg === 'string' && Array.isArray(result.fonts)) {
        results.set(key, result);
        // Used now: the file counts as recent for pruning.
        const now = new Date();
        await utimes(cacheFile, now, now).catch(() => {});
        return result;
      }
    } catch (error) { if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error; }
    const result = await inTurn(() => compileTeX(key, input));
    await mkdir(cache, { recursive: true });
    await writeFile(cacheFile, JSON.stringify(result));
    results.set(key, result);
    return result;
  }
  async function compileTeX(key, input) {
    if (spent >= totalTimeout) throw failure('tikz_total_timeout', { seconds: totalTimeout / 1000 });
    const limit = Math.min(timeout, totalTimeout - spent), started = performance.now();
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
      const onExit = code => { cleanup(); reject(failure('tikz_worker_exit', { code })); };
      const timer = setTimeout(() => {
        cleanup();
        void discard(current);
        reject(limit < timeout ? failure('tikz_total_timeout', { seconds: totalTimeout / 1000 }) : failure('tikz_timeout', { seconds: timeout / 1000 }));
      }, limit);
      current.once('message', onMessage); current.once('error', onError); current.once('exit', onExit);
      current.postMessage(input);
    }).catch(async error => {
      // A TeX error leaves the worker usable; anything else may not.
      if (!error.tex) await discard(current);
      throw error;
    }).finally(() => { spent += performance.now() - started; });
  }
  const fontFolder = fontOptions.directory;
  const href = fontOptions.href ?? ((font, outputPath) => {
    if (!outputPath) throw new Error('bananamark-tikz: a page with diagrams needs the path of its HTML file (outputPath) for the fonts\' addresses, or fonts.href');
    return relative(dirname(outputPath), join(fontFolder, `${font}.ttf`)).split('/').map(encodeURIComponent).join('/');
  });
  /** Copies a file of the fonts into the fonts' directory once per instance (pages are rendered concurrently). */
  const copyOnce = (name, source) => {
    if (!copiedFonts.has(name)) copiedFonts.set(name, mkdir(fontFolder, { recursive: true }).then(() => copyInto(source, join(fontFolder, name))));
    return copiedFonts.get(name);
  };
  /** Copies fonts (names) and their licence into the fonts' directory. */
  async function copyFonts(fonts) {
    for (const font of fonts) if (!/^[a-z][a-z0-9]*$/.test(font)) throw new Error('Invalid TikZ font name');
    if (!fontFolder) return;
    await Promise.all([...[...fonts].map(font => copyOnce(`${font}.ttf`, fontFile(font))), copyOnce('LICENCE', join(packageRoot, 'css/bakoma/LICENCE'))]);
  }
  async function fontsForPage(fonts, outputPath) {
    if (!fonts.size) return '';
    if (!fontFolder && !fontOptions.href) throw new Error('bananamark-tikz: diagrams with text need fonts.directory (or fonts.href)');
    await copyFonts(fonts);
    const rules = [...fonts].sort().map(font => `@font-face{font-family:tikzjax-${font};src:url("${href(font, outputPath)}") format("truetype")}`);
    return `<style data-tikz-fonts>${rules.join('')}</style>`;
  }
  /**
   * Replaces the TikZ placeholders in a page's HTML: the HTML. page: { outputPath, file, locale, messages } (outputPath:
   * the page's HTML file, which the fonts' addresses start from; file: its source, named in errors, by default
   * outputPath; locale and messages: for errors, under this instance's own).
   */
  async function render(html, page = {}) {
    const { outputPath, file = outputPath } = page;
    if (!html.includes('bm-tikz-source')) return html;
    // Numbered per page, so that a page comes out the same whichever pages were rendered before it.
    const fonts = new Set(), rendered = [];
    for (const match of html.matchAll(placeholder)) {
      const [, , , tex, display, mode = 'math'] = match;
      const input = { tex: decode(tex), display: display === 'true', mode: decode(mode) };
      let result;
      try { result = await compile(input); }
      catch (error) {
        const { key, values } = error.tikzMessage ?? { key: 'tikz_failed', values: { message: error.message } };
        throw pageError(page, file, key, values, error);
      }
      for (const font of result.fonts) fonts.add(font);
      rendered.push(result);
    }
    let count = 0;
    html = html.replace(placeholder, (_, id = '', classes, tex, display) => {
      const result = rendered[count++];
      const style = result.tagSvg ? ` style="--bm-tikz-tag-space: ${result.tagWidth / 10 + 1}em"` : '';
      const body = `<span class="bm-tikz-body">${svgClasses(renumber(result.svg, count))}</span>`;
      return `<span${id} class="${classes.replace(/\bbm-tikz-source\b/, 'bm-tikz-rendered')}" data-tex="${tex}" data-display="${display}"${style}>${result.tagSvg ? `<span class="bm-tikz-layout">${body}<span class="bm-tikz-tag">${svgClasses(renumber(result.tagSvg, count))}</span></span>` : body}</span>`;
    });
    // The fonts' @font-face rules: before </head> on a whole page, at the start of a body (as a plugin sees it).
    if (!fonts.size) return html;
    const style = await fontsForPage(fonts, outputPath), end = html.indexOf('</head>');
    return end >= 0 ? html.slice(0, end) + style + html.slice(end) : style + html;
  }
  return {
    name: 'tikz',
    /** A diagram's { svg, fonts, tagSvg, tagWidth } for { tex, display, mode }, from the cache or compiled. */
    compile,
    render,
    /** As a processor's plugin: render. */
    postprocess: render,
    /**
     * After a full build: delete cached diagrams this build did not use (old versions of edited diagrams,
     * removed pages), unless they were used within maxAge (ms, default a week: drafts being edited).
     * Returns the number deleted.
     */
    async prune({ maxAge = week } = {}) {
      if (!cache) return 0;
      let removed = 0;
      const before = Date.now() - maxAge;
      for (const name of await readdir(cache).catch(() => [])) {
        if (!name.endsWith('.json') || used.has(name.slice(0, -5))) continue;
        const file = join(cache, name);
        if ((await stat(file).catch(() => null))?.mtimeMs > before) continue;
        await rm(file, { force: true });
        removed++;
      }
      return removed;
    },
    /** Stops the worker; a shared one (workerIdleTimeout) stops once it has idled that long. */
    async close() {
      if (worker) await discard(worker);
      if (workerIdleTimeout && shared.worker) {
        const idle = shared.worker;
        shared.timer = setTimeout(() => { if (shared.worker === idle) void discard(idle); }, workerIdleTimeout);
        shared.timer.unref();
      }
    },
  };
}
