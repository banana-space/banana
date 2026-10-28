import { createHash } from 'node:crypto';
import { contentHash as hash } from './shared/content-hash.mjs';
import { copyFile, mkdir, readFile, readdir, rename, rm, rmdir, stat, writeFile } from 'node:fs/promises';
import { deserialize, serialize } from 'node:v8';
import { dirname, join, posix, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYAML } from 'yaml';
import { prebuild } from './prebuild/run.mjs';
import { publishPlan, writePages } from './prebuild/publish.mjs';
import { affectedPages } from './prebuild/affected.mjs';
import { pageURL } from './shared/pages.mjs';
import { pack, unpack } from './shared/compress.mjs';
import { setBaseURL } from './shared/urls.mjs';
import { elapsed, headline } from './shared/timing.mjs';
import { publishPages, publishShared, siteGenerator, writeSearchIndex } from './generator.mjs';
import { manifestEntries } from './search/index.mjs';
import { siteDiagrams } from './shared/diagrams.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));

/**
 * 常驻预览服务（见 docs/preview.md）：全站预处理结果留在内存里，页面由站点生成器（scripts/generator.mjs）渲染并
 * 完成，与完整构建相同。
 *
 * 两类请求。serve 的请求（结果成为新的全站状态，写入 output，返回写入与删除的文件）：buildSite 生成全站（serve 的
 * 完整构建）；render、renderPages 与 refreshSite 处理 content/ 中已保存的修改，重新渲染变化的页面与依赖它们的页面
 * （affected.mjs）；assets 只重新构建样式与脚本，staticFiles 只复制 static/ 中变化的文件，restartGenerator 让站点
 * 生成器载入新的代码。每个输出文件记下生成的 HTML 的哈希：与上次相同的文件不再完成、也不再写入。在线编辑的请求：
 * preview 与 check 处理稿件，不改变全站状态，也不写任何文件。请求依次处理。
 *
 * - baseURL：页面中的地址前缀（也用于预处理渲染的正文）。
 * - output：serve 的预览目录（写入页面与其他文件）；在线编辑只把 TikZ 字体复制到这里。
 * - content：生成目录（相对仓库根目录），默认 .build/content。
 * - environment：development 或 production；与对照的完整构建一致（资源的文件名），页面才逐字节相同。
 * - frontMatterOnly：内存中的页面只有 front matter，预览时只有被预览的页面有正文。生成目录不能再供完整构建使用，
 *   所以只用于在线编辑，不用于 serve。
 * - threads：站点生成器在 worker 线程中运行（serve：生成器的代码改了，重启线程即可，预处理的状态不丢）；在线编辑
 *   在本线程中运行，内存少些。
 * - jobs、cores：完成页面的线程数（默认最多 4 个）与运行模板的线程数（默认 1 个），见 generator.mjs。
 * - onSearch(result)：搜索索引在后台写好（或失败）时调用：{ ok, ms, error }。
 * - renderCache：预处理渲染好的正文保存的目录（见 prebuild 的 renderCache；serve 用）。
 * - outputsCache：每个输出文件的记录（生成的 HTML 的哈希与搜索文档）保存的文件：serve 再次启动时，output 中与记录相符
 *   的页面不必再完成、写入（完成页面的代码改了则作废）。
 * - tikzIdle：TikZ 编译进程在最后一次使用之后保留多久（毫秒）。启动一次约 0.5 s，运行时约占 370 MB。
 */
export function previewService({ baseURL, output, content = '.build/content', environment = 'development', frontMatterOnly = false, threads = false, jobs, cores, onSearch = () => {}, renderCache, outputsCache, tikzIdle = 60000 }) {
  if (baseURL) setBaseURL(baseURL);
  const contentDir = resolve(root, content);
  const development = environment === 'development';
  const generator = siteGenerator({ development, threads, jobs, cores });
  let site;
  // What the generator's core holds: the prebuild's pages (synced lazily) and the assets' addresses.
  let pagesSynced = false, assetsBuilt = false;
  // Output path -> { hash, search? }: the generator's HTML of each file written to output, and its search document.
  let outputs = new Map();
  // The search index waits for the documents to settle; a newer change supersedes an index being written.
  let searchStale = true, searchRun = 0, manifest;
  let finishingVersion;
  let queue = Promise.resolve(), waiting = 0;
  /** Runs operations one at a time, in the order they were requested. */
  function exclusive(action) {
    waiting++;
    const result = queue.then(action).finally(() => { waiting--; });
    queue = result.catch(() => {});
    return result;
  }
  function ready() {
    if (!site) throw new Error('the preview service has no successful full prebuild yet');
  }
  const diagrams = (destination, budget = Infinity) => siteDiagrams(destination, { workerIdleTimeout: tikzIdle, totalTimeout: budget });

  /** A generated page as the generator's core takes it (see site/core.mjs). */
  const pageOf = (relative, file) => file.compressed ? { relative, params: file.metadata, compressed: file.compressed } : { relative, text: file.text };
  const isPage = (relative, file) => /\.md$/i.test(relative) && (file.compressed || typeof file.text === 'string');
  /** Hands the prebuild's pages to the generator, once after each full prebuild (or a restart of the generator). */
  async function syncPages() {
    if (!assetsBuilt) await buildAssets();
    if (pagesSynced) return;
    await generator.call('setPages', [...site.files].filter(([relative, file]) => isPage(relative, file)).map(([relative, file]) => pageOf(relative, file)));
    pagesSynced = true;
  }
  /** The generator's pages after these generated files (relative paths) changed in the prebuild's state. */
  async function updatePages(relatives) {
    if (!pagesSynced) return syncPages();
    await generator.call('updatePages', [...relatives].filter(relative => /\.md$/i.test(relative)).map(relative => {
      const file = site.files.get(relative);
      return [relative, file && isPage(relative, file) ? pageOf(relative, file) : null];
    }));
  }

  /** Builds the assets into output (the files whose content changed): { written, addressesChanged }. */
  let assetAddresses;
  async function buildAssets() {
    const { files, assets } = await generator.call('buildAssets');
    assetsBuilt = true;
    const written = [];
    for (const [path, content] of files) {
      const key = hash(content);
      if (outputs.get(path)?.hash === key) continue;
      await mkdir(dirname(join(output, path)), { recursive: true });
      await writeFile(join(output, path), content);
      outputs.set(path, { hash: key });
      written.push(path);
    }
    const addresses = JSON.stringify(assets), addressesChanged = assetAddresses !== undefined && assetAddresses !== addresses;
    assetAddresses = addresses;
    return { written, addressesChanged };
  }

  /** 完整预处理，写入生成目录；失败时之后的请求一律拒绝，直到再次成功。 */
  const refresh = () => exclusive(async () => {
    site = undefined;
    pagesSynced = false;
    const start = performance.now();
    const result = await prebuild({ destination: contentDir, frontMatterOnly, renderCache: renderCache && resolve(root, renderCache) });
    console.log(headline('prebuild', `${result.pages} pages -> ${content}`, elapsed(start)));
    for (const line of result.timings) console.log(line);
    site = result;
  });

  /**
   * Removes files from output (output paths), and the directories they leave empty, as a full build would not
   * have them.
   */
  async function removeOutputs(paths) {
    for (const path of paths) {
      outputs.delete(path);
      await rm(join(output, path), { force: true });
      for (let directory = posix.dirname(path); directory !== '.'; directory = posix.dirname(directory)) {
        if (!await rmdir(join(output, directory)).then(() => true, () => false)) break;
      }
    }
  }

  /**
   * Renders pages (generated relative paths) and the shared files into output; with all, every page, and the
   * files no page makes any more are removed. Returns { written, removed, unchanged, timings }.
   */
  async function generate(relatives, { all = false, attachments = [], timings = {} } = {}) {
    let start = performance.now();
    await syncPages();
    const shared = await generator.call('shared', [...site.files].filter(([, file]) => file.link).map(([relative]) => relative));
    if (JSON.stringify(shared.manifest) !== JSON.stringify(manifest)) searchStale = true;
    manifest = shared.manifest;
    const entries = manifestEntries(manifest);
    const before = all ? new Set([...outputs.keys()].filter(path => path.endsWith('.html'))) : undefined;
    const pages = all ? await generator.call('renderable') : relatives;
    const renderer = diagrams(output);
    let result;
    try {
      const produced = new Set();
      const cache = {
        get: path => { produced.add(path); return outputs.get(path); },
        set: (path, value) => {
          if (value.search !== outputs.get(path)?.search) searchStale = true;
          outputs.set(path, value);
        },
      };
      result = await publishPages(generator, pages, { destination: output, diagrams: renderer, cache, search: path => entries.get(path) });
      // Attachments changed in place (hard links to their sources) are published anew.
      for (const relative of attachments) for (const [path, source] of shared.resources) if (source === relative) outputs.delete(path);
      const sharedWritten = await publishShared(generator, shared, { destination: output, diagrams: renderer, cache, source: relative => site.files.get(relative).link });
      result.written.push(...sharedWritten);
      if (all) {
        for (const [path] of shared.files) produced.add(path);
        for (const [path] of shared.resources) produced.add(path);
      }
      result.removed = all ? [...before].filter(path => !produced.has(path)) : [];
      await removeOutputs(result.removed);
    } finally {
      await renderer.close();
    }
    timings.generate = elapsed(start);
    if (searchStale) scheduleSearch();
    scheduleSave();
    return { written: result.written, removed: result.removed, unchanged: result.unchanged, timings };
  }

  /** Writes the search index in the background, from the documents kept for every page, once the requests settle. */
  function scheduleSearch() {
    const run = ++searchRun;
    void queue.then(async () => {
      if (run !== searchRun || !searchStale) return;
      const start = performance.now();
      const documents = new Map([...outputs].filter(([, value]) => value.search !== undefined).map(([path, value]) => [path, value.search]));
      try {
        searchStale = false;
        await writeSearchIndex(output, manifest, documents, { playground: true });
        onSearch({ ok: run === searchRun, ms: elapsed(start) });
      } catch (error) {
        searchStale = true;
        onSearch({ ok: false, error: error.message });
      }
    });
  }

  /**
   * serve 的完整构建：资源、static/ 的文件（clean：先清空 output）与全部页面。返回 { written, removed, unchanged,
   * timings }（写入与删除的文件为 output 内的路径）。
   */
  const buildSite = ({ clean = false } = {}) => exclusive(async () => {
    ready();
    const timings = {};
    let start = performance.now();
    // A new service (serve's start, or a restart for new code) keeps the files of the last one, as far as the record of
    // them holds.
    if (!outputs.size && outputsCache && await loadOutputs()) {
      if (clean) await generator.call('copyStatic', output);
      clean = false;
    }
    if (clean) {
      await rm(output, { recursive: true, force: true });
      outputs = new Map();
      await generator.call('copyStatic', output);
      assetsBuilt = false;
    }
    const written = [];
    if (!assetsBuilt) written.push(...(await buildAssets()).written);
    timings.assets = elapsed(start);
    const result = await generate([], { all: true, timings });
    scheduleSave();
    return { ...result, written: [...written, ...result.written] };
  });

  /**
   * The record of the output files saved by an earlier run, if it was saved with the code that finishes pages as it
   * is now and output still has its files: then outputs holds it. Returns whether it did.
   */
  async function loadOutputs() {
    try {
      const saved = deserialize(unpack(await readFile(resolve(root, outputsCache))));
      if (saved.version !== await finishingCode()) return false;
      const kept = new Map();
      for (const [path, value] of saved.outputs) if (await stat(join(output, path)).then(info => info.isFile(), () => false)) kept.set(path, value);
      outputs = kept;
      searchStale = true;
      return kept.size > 0;
    } catch (error) {
      if (error.code === 'ENOENT') return false;
      console.error(`[preview] the saved record of the output is unusable: ${error.message}`);
      return false;
    }
  }
  /** Saves the record of the output files once the requests settle. */
  let saveRun = 0;
  function scheduleSave() {
    if (!outputsCache) return;
    const run = ++saveRun;
    void queue.then(async () => {
      if (run !== saveRun) return;
      const file = resolve(root, outputsCache), temporary = `${file}.${process.pid}.tmp`;
      await mkdir(dirname(file), { recursive: true });
      await writeFile(temporary, pack(serialize({ version: await finishingCode(), outputs: [...outputs] })));
      await rename(temporary, file);
    }).catch(error => console.error(`[preview] saving the record of the output failed: ${error.message}`));
  }

  /**
   * 只重新构建样式与脚本（assets/ 的修改）。返回 { written, pages }：写入的文件；pages 为 true 时资源的地址变了
   * （production 的指纹），页面也要重新生成（buildSite）。
   */
  const assets = () => exclusive(async () => {
    ready();
    const { written, addressesChanged } = await buildAssets();
    return { written, pages: addressesChanged };
  });

  /** 只复制 static/ 中变化的文件（相对 static/ 的路径）：不存在的从 output 中删除。返回 { written, removed }。 */
  const staticFiles = paths => exclusive(async () => {
    const written = [], removed = [];
    for (const path of paths) {
      const from = join(root, 'static', path), to = join(output, path);
      const info = await stat(from).catch(() => undefined);
      if (info?.isFile()) {
        await mkdir(dirname(to), { recursive: true });
        await copyFile(from, to);
        written.push(path);
      } else if (!info) {
        removed.push(path);
      }
    }
    await removeOutputs(removed);
    return { written, removed };
  });

  /**
   * 站点生成器（scripts/site/）的代码改了：重启它的线程，之后的请求载入新的代码。完成页面的代码也改了时，已完成
   * 页面的记录作废（都要重新完成）。
   */
  const restartGenerator = () => exclusive(async () => {
    await generator.restart();
    pagesSynced = assetsBuilt = false;
    const version = await finishingCode();
    if (finishingVersion !== undefined && version !== finishingVersion) for (const value of outputs.values()) value.hash = undefined;
    finishingVersion = version;
  });

  /** Marks errors of the sources (their preprocessing), which leave everything as it was: stage 'prebuild'. */
  const sourceErrors = promise => promise.catch(error => { throw Object.assign(error, { stage: 'prebuild' }); });
  /** The state renderPages and refreshSite compare: { pages, files, categories } (see affected.mjs). */
  const state = (result, files = result.files) => ({ pages: result.pageIndex(), files, categories: result.categoryNames() });
  const readSources = async pages => new Map(await Promise.all(pages.map(async page => [page, await readFile(join(root, 'content', page), 'utf8')])));
  /** Output paths (in output) for URL paths. */
  const outputPath = url => join(decodeURI(url), 'index.html').replace(/^\//, '');

  /** 重新渲染 content/ 中只有正文变化的页面（相对路径），结果成为全站状态。返回 { written, removed, timings }。 */
  const render = pages => exclusive(async () => {
    ready();
    const timings = {};
    const start = performance.now();
    const { files } = await site.update(await readSources(pages));
    await writePages(files, contentDir);
    await updatePages(files.keys());
    timings.prebuild = elapsed(start);
    return generate([...files.keys()], { timings });
  });

  /**
   * 重新渲染 content/ 中源文件（含 front matter）已变化的页面（相对路径，可以是新页面）及依赖它们的页面，
   * 结果成为全站状态。返回 { written, removed, touched, timings }；页面用到分类表中没有的分类时什么也不做，返回
   * { site: true }，应改用 refreshSite（只有完整预处理才生成分类页）。
   */
  const renderPages = pages => exclusive(async () => {
    ready();
    const timings = {};
    const start = performance.now();
    const sources = await readSources(pages);
    const trial = await sourceErrors(site.update(sources, { commit: false }));
    const known = site.categoryNames();
    if (trial.categories.some(name => !known.has(name))) return { site: true };
    const before = state(site, new Map(site.files));
    const previous = new Map([...trial.files.keys()].map(relative => [relative, site.generatedText(relative)]));
    const { files } = await site.update(sources);
    const after = state(site);
    const changed = new Set([...files].filter(([relative, text]) => previous.get(relative) !== text).map(([relative]) => relative));
    const { touch, removed } = affectedPages({ before, after, targets: site.linkTargets(), roots: site.collections, changed });
    // Dependent pages whose own text changes (a link to a renamed article) are written too.
    for (const [relative, text] of site.rerender(touch)) {
      files.set(relative, text);
      changed.add(relative);
    }
    await writePages(new Map([...changed].map(relative => [relative, files.get(relative)])), contentDir);
    await updatePages(changed);
    timings.prebuild = elapsed(start);
    const result = await generate([...changed, ...touch].filter(path => /\.md$/i.test(path)), { timings });
    const gone = [...removed].map(path => path.replace(/^\//, ''));
    await removeOutputs(gone);
    return { ...result, removed: gone, touched: touch.size };
  });

  /**
   * 完整预处理（content/ 中任何修改：新建、删除与改名、附件、组件、书册目录、分类树、Git 日期），把变化的生成文件写入
   * 生成目录，并重新渲染它们与依赖它们的页面。categoriesChanged：分类树有变化；paths：变化的源文件（content/ 内的
   * 相对路径），其中的附件一律重新发布。返回与 renderPages 相同；失败时抛出错误，全站状态不变（生成目录可能已部分
   * 写入，调用者应完整构建）。
   */
  const refreshSite = ({ categoriesChanged = false, paths = [] } = {}) => exclusive(async () => {
    ready();
    const timings = {};
    const start = performance.now();
    const next = await sourceErrors(prebuild({ destination: contentDir, frontMatterOnly, publish: false, renderCache: renderCache && resolve(root, renderCache) }));
    const before = state(site), after = state(next);
    const attachments = paths.filter(path => next.files.get(path)?.link !== undefined);
    const plan = await publishPlan(next.files, contentDir, { force: attachments }), changed = [...plan.removed, ...plan.written];
    const { touch, removed } = affectedPages({ before, after, targets: next.linkTargets(), roots: next.collections, changed: new Set(changed), categoriesChanged });
    site = next;
    await plan.run(changed);
    await updatePages(changed);
    timings.prebuild = elapsed(start);
    const result = await generate([...changed, ...touch].filter(path => /\.md$/i.test(path)), { attachments, timings });
    const gone = [...removed].map(path => path.replace(/^\//, ''));
    await removeOutputs(gone);
    return { ...result, removed: gone, touched: touch.size };
  });

  /**
   * 预览稿件：relative 为 content/ 内的相对路径（可以是新页面），text 为完整源文本。
   * 返回 { url, html, missingLinks, timings }。预处理与渲染的错误照常抛出（消息以 "文件:行号: " 开头）。
   */
  async function previewNow(relative, text) {
    ready();
    const timings = {};
    let start = performance.now();
    // The page's lines carry source-line marks, for the editor to match preview and source.
    const { files, links } = await site.update(new Map([[relative, text]]), { commit: false, marks: relative });
    timings.prebuild = elapsed(start);
    start = performance.now();
    await syncPages();
    const url = pageURL(relative, generatedMetadata(files.get(relative)));
    const path = url && outputPath(url);
    const rendered = url ? new Map(await generator.call('render', [relative], { drafts: [...files].map(([draft, generated]) => ({ relative: draft, text: generated })) })) : new Map();
    if (!rendered.has(path)) throw new Error(`content/${relative}: 页面未发布（草稿、未来日期或 build.render 为 never），没有可预览的输出`);
    timings.render = elapsed(start);
    start = performance.now();
    // A preview compiles its new diagrams in 20 s at most.
    const renderer = diagrams(output, 20000);
    let html;
    try { html = await renderer.render((await generator.finish(rendered.get(path), { sourceLines: true })).html, { outputPath: join(output, path) }); }
    finally { await renderer.close(); }
    timings.finish = elapsed(start);
    return { url, html, missingLinks: links.map(({ line, column, target }) => ({ line, column, target })), timings };
  }
  const preview = (relative, text) => exclusive(() => previewNow(relative, text));

  /**
   * 预热：预览一个临时的新页面（含缓存中没有的公式），让 KaTeX、站点生成器与完成页面的模块都先完成初始化，
   * 第一个真实请求不必承担。只预热一次；返回用时（毫秒），已预热过时为 0。
   */
  let warmed = false;
  const warmUp = () => exclusive(async () => {
    ready();
    if (warmed) return 0;
    const start = performance.now();
    const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    await previewNow(`wiki/__preview-warm-up-${token}/index.md`, `---\ntitle: 预览预热 ${token}\n---\n\n预热 $x_{\\mathrm{${token}}}$。\n`);
    warmed = true;
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

  /** 页面当前的网址路径；不存在或未发布的页面为 undefined。 */
  function url(relative) {
    ready();
    const file = site.files.get(relative);
    if (!file || !isPage(relative, file)) return undefined;
    return pageURL(relative, file.metadata ?? generatedMetadata(file.text));
  }

  /** 只检查稿件，不渲染：返回 { missingLinks }，错误照常抛出。 */
  const check = (relative, text) => exclusive(async () => {
    ready();
    const { links } = await site.update(new Map([[relative, text]]), { commit: false });
    return { missingLinks: links.map(({ line, column, target }) => ({ line, column, target })) };
  });

  return {
    refresh, buildSite, assets, staticFiles, restartGenerator, render, renderPages, refreshSite, preview, check, warmUp, source, labels, url,
    close: () => generator.restart(),
    /** Requests queued or running. */
    waiting: () => waiting,
  };
}

/** The front matter of a generated page's text. */
const generatedMetadata = text => parseYAML(text.match(/^---\n([\s\S]*?)---\n/)[1]) ?? {};

/**
 * A digest of the code that finishes pages (typography, search documents, TikZ in bananamark, and what they use), to tell whether
 * a page finished before would come out the same.
 */
async function finishingCode() {
  const digest = createHash('sha1');
  const add = async path => {
    digest.update(`${path}\0`);
    digest.update(await readFile(resolve(root, path)).catch(() => Buffer.alloc(0)));
  };
  const tree = async directory => {
    for (const entry of (await readdir(resolve(root, directory), { withFileTypes: true })).sort((a, b) => a.name < b.name ? -1 : 1)) {
      if (entry.isDirectory()) await tree(join(directory, entry.name));
      else await add(join(directory, entry.name));
    }
  };
  for (const path of ['scripts/site/finish.mjs', 'scripts/site/finish-worker.mjs', 'static/js/search-query.js', 'package-lock.json']) await add(path);
  // bananamark (core, and tikz, which finishes pages' diagrams) wherever it is installed (the workspace's packages/,
  // or a copy of the site without it).
  const packages = ['bananamark', 'bananamark-tikz'].map(name => dirname(fileURLToPath(import.meta.resolve(name))));
  for (const directory of ['scripts/search', 'scripts/shared', ...packages]) await tree(directory);
  return digest.digest('base64');
}

// Run as a child process (serve forks it): requests arrive as { id, method, args } messages
// (the service handles them one at a time); replies are { id, ok, result } or { id, ok: false, error, log };
// { event: 'search', ... } reports the search index written in the background.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const options = JSON.parse(process.env.BANANA_PREVIEW_SERVICE ?? '{}');
  const service = previewService({ ...options, onSearch: result => { if (process.connected) process.send({ event: 'search', ...result }); } });
  process.on('message', async ({ id, method, args = [] }) => {
    let reply;
    try { reply = { id, ok: true, result: await service[method](...args) }; }
    catch (error) { reply = { id, ok: false, error: error.message, log: error.log, stage: error.stage }; }
    if (process.connected) process.send(reply);
  });
  const stop = async () => { await service.close(); process.exit(); };
  process.on('disconnect', stop);
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, stop);
}
