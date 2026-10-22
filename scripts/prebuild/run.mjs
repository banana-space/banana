import { t } from '../shared/i18n.mjs';
import { authorTagNames, generatedShortcodeProblem, shortcodeOffset, shortcodeText } from './tags.mjs';
import { performance } from 'node:perf_hooks';
import { stepTimer } from '../shared/timing.mjs';
import { readFile, readlink, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parse, stringify } from 'yaml';
import { transformMarkup } from './markup.mjs';
import { pageName, nameList, pageTitleMarkup } from './names.mjs';
import { transformDocument } from './structure.mjs';
import { personIndex } from './bibliography.mjs';
import { eachLimit, publishContent } from './publish.mjs';
import { categoryTree } from './categories.mjs';
import { gitDates } from './git-dates.mjs';
import { pageHistories } from './page-history.mjs';
import { titleHTML } from '../shared/display-title.mjs';
import { defaultNumbering, numbering, pageNumbering } from './numbering.mjs';
import { discoverCollections, isPublished, lectureGroups, prepareCollections } from './collections.mjs';
import { componentLoader } from './components.mjs';
import { markPattern, markSourceLines } from './source-lines.mjs';
import { pageURL } from '../shared/pages.mjs';
import { loadReadingDictionary, normalizeReading, readingMetadata } from './reading.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));

/**
 * 预处理整站：content/ 是编辑来源，所有派生编号、标签元数据只写入生成目录。
 * 全部页面的 front matter 总会规范化，因为条目名索引、分类与书册依赖全站信息。
 * 结果先在内存中完成，全部成功后才发布：未变化的文件不会重写。
 *
 * - destination：生成目录，默认 .build/content。
 * - pages：只转换这些页面（content/ 内的相对路径）的正文，其余页面只保留 front matter，
 *   供只渲染少数页面的预览使用；书册页面之间互相引用，总是全部转换。
 * - check：收集所有错误而不是在第一个错误处停止，且不写入生成目录。
 * - frontMatterOnly：所有页面（包括书册页面）只写 front matter，正文留空；update() 仍返回完整页面。
 *   供预览接口的 Hugo 使用：页面正文占它绝大部分内存，而渲染一个页面只需要其他页面的 front matter。
 * - publish：为 false 时不写入生成目录，由调用者用 files 发布（常驻预览服务要在 Hugo 监听时先知道哪些文件会变）。
 * - history：页面历史的数据写入的目录（Hugo 将 .build/history 发布为 /history/data/），默认只有写入
 *   默认生成目录的完整预处理才写；为 false 时不写。
 *
 * 返回 { errors, links, collections, update }：errors 为错误对象列表（仅 check 模式），
 * links 为转换过的页面中指向不存在条目的链接 { file, line, target }，
 * collections 为各书册根目录（content/ 内的相对路径，以 / 结尾），
 * update 供常驻预览服务在页面源文件变化后增量转换（见下）。
 */
/**
 * Checks that the shortcode templates in directory not starting with "_" (those not internal) are exactly the
 * authors' tags: a new template must come with its tag and parameters here, or be internal.
 */
async function checkShortcodeTemplates(directory) {
  const names = (await readdir(directory)).filter(file => file.endsWith('.html')).map(file => file.slice(0, -5));
  const exposed = names.filter(name => !name.startsWith('_')).sort();
  const expected = [...authorTagNames].sort();
  if (exposed.join() !== expected.join()) {
    throw new Error(`layouts/shortcodes: the shortcodes not starting with "_" (${exposed.join(', ')}) must be the authors' tags in scripts/prebuild/tags.mjs (${expected.join(', ')})`);
  }
  return new Set(names);
}

export async function prebuild({ destination: generated = `${root}.build/content`, pages, check = false, frontMatterOnly = false, publish = true, history } = {}) {
  history ??= generated === `${root}.build/content` && `${root}.build/history`;
  const errors = [];
  const attempt = async (action, file) => {
    if (!check) return action();
    try { return await action(); }
    catch (error) { errors.push({ file, error }); }
  };
  const timer = stepTimer();
  const prepareComponents = componentLoader(root);
  const shortcodeTemplates = await checkShortcodeTemplates(`${root}layouts/shortcodes`);
  const source = `${root}content`;
  const categories = await timer.time('readings, categories', async () => {
    await loadReadingDictionary(root);
    return attempt(() => categoryTree(root), `${root}data/categories.yaml`);
  });
  if (!categories) return { errors, links: [], collections: [], timings: timer.lines(), pages: 0 };
  const modifiedAt = await timer.time('git dates', () => gitDates(root));
  let wikiNames = new Map();
  let records = new Map();
  // Biographies (the published articles in 人物 and below) by name, so that bibliographies link their authors;
  // built when first needed, and again for the pages a change transforms (update()).
  let peopleIndex;
  const peopleIn = state => {
    const published = [...state.values()].filter(record => record.isWiki && record.normalized && isPublished(record.metadata));
    return personIndex(
      published.filter(record => record.metadata.categories?.includes('人物'))
        .map(record => ({ key: record.metadata.wikiName, names: [record.metadata.wikiName, ...record.metadata.wikiAliases] })),
      new Set(published.flatMap(record => [record.metadata.wikiName, ...record.metadata.wikiAliases])));
  };
  const people = {
    match: name => (peopleIndex ??= peopleIn(records)).match(name),
    exists: key => (peopleIndex ??= peopleIn(records)).exists(key),
  };
  const links = [];
  /**
   * names：条目名与别名 → 文件；增量更新时传入副本，成功后才替换。
   * register：遇到 data/categories.yaml 之外的分类时为它生成分类页；增量更新不改动分类。
   */
  async function normalize(record, names = wikiNames, register = true) {
    const { metadata, path: sourcePath, relative: relativePath } = record;
    if (Object.keys(metadata).some(key => /^(?:lastmod|gitlastmod)$/i.test(key))) throw new Error(t('build_manual_lastmod', { File: sourcePath }));
    if (metadata.urlAliases !== undefined) throw new Error(t('build_url_aliases', { File: sourcePath }));
    const date = record.generated ? undefined : await modifiedAt(sourcePath);
    if (date) metadata.gitLastmod = date;
    if (metadata.lang !== undefined && (typeof metadata.lang !== 'string' || !/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/i.test(metadata.lang))) throw new Error(t('build_language_code', { File: sourcePath }));
    if (metadata.typography !== undefined && (!metadata.typography || typeof metadata.typography !== 'object' || Array.isArray(metadata.typography)
      || Object.keys(metadata.typography).some(key => key !== 'convertChineseFullStop')
      || (metadata.typography.convertChineseFullStop !== undefined && typeof metadata.typography.convertChineseFullStop !== 'boolean'))) throw new Error(t('build_typography_config', { File: sourcePath }));
    if (metadata.search !== undefined && metadata.search !== false) throw new Error(t('build_search_config', { File: sourcePath }));
    if (metadata.sort !== undefined) metadata.sort = normalizeReading(metadata.sort, sourcePath);
    if (metadata.tocDepth !== undefined && (!Number.isInteger(metadata.tocDepth) || metadata.tocDepth < 0 || metadata.tocDepth > 5)) throw new Error(`${sourcePath}: tocDepth 必须是 0 至 5 的整数`);
    const isWiki = relativePath.startsWith('wiki/') && !relativePath.endsWith('/_index.md');
    record.isWiki = isWiki;
    // 页面的默认地址取目录路径，保留大小写和标点（Hugo 默认会转小写并删去部分字符，如「、」），
    // 空格改为下划线，与旧站一致。页面自己设置的 url 或 slug 优先。
    // 目录名中代替 * 的全角 ＊ 在网址中还原为 *（如 C*_代数）；Windows 不能写出含 * 的文件，保留 ＊。
    // A page's own address: within the site (Hugo writes the page there, under its output directory).
    for (const [key, pattern] of [['url', /^\/(?:[^\s"'<>\\?#]*)$/], ['slug', /^[^\s"'<>\\?#/]+$/]]) {
      const value = metadata[key];
      if (value !== undefined && (typeof value !== 'string' || !pattern.test(value) || value.split('/').some(part => part === '..' || part === '.') || value.includes('//'))) {
        throw new Error(t('build_page_address', { File: sourcePath, Key: key, Value: String(value) }));
      }
    }
    // 首页与顶层栏目页（如 /wiki/）沿用 Hugo 的地址。
    if (!/^(?:[^/]+\/)?_index\.md$/.test(relativePath) && metadata.url === undefined && metadata.slug === undefined) {
      const path = relativePath.replace(/\/(_?index)\.md$/, '').replace(/\.md$/, '');
      const url = path.replace(/\s+/g, '_');
      metadata.url = `/${process.platform === 'win32' ? url : url.replace(/＊/g, '*')}/`;
    }
    if (metadata.categories !== undefined && !isWiki) throw new Error(`${sourcePath}: categories 仅用于 wiki 页面`);
    if (metadata.categories) Object.assign(metadata, categories.membership(metadata.categories, sourcePath, { register }));
    const fallback = relativePath.endsWith('/index.md') || relativePath.endsWith('/_index.md') ? relativePath.split('/').at(-2) : relativePath.replace(/\.md$/i, '').split('/').at(-1);
    const title = pageName(metadata.title ?? fallback, sourcePath, 'title', { lang: metadata.lang ?? 'zh', typeset: metadata.title !== undefined });
    metadata.title = title.parts.map(part => part.text).join('');
    metadata.titleParts = title.parts;
    if (isWiki) {
      metadata.wikiName = title.key;
      metadata.wikiAliases = [...new Set(nameList(metadata.aliases, sourcePath, 'aliases', { lang: metadata.lang ?? 'zh', typeset: true }).map(alias => alias.key))].filter(name => name !== metadata.wikiName);
      for (const name of [metadata.wikiName, ...metadata.wikiAliases]) {
        if (names.has(name)) throw new Error(t('build_duplicate_article', { Name: name, FirstFile: names.get(name), File: sourcePath }));
        names.set(name, sourcePath);
      }
      delete metadata.aliases;
    } else if (metadata.aliases !== undefined) throw new Error(t('build_aliases_scope', { File: sourcePath }));
    const components = await prepareComponents(metadata, sourcePath, { isWiki });
    if (components.notices.length) metadata.resolvedNotices = components.notices;
    if (components.navboxes.length) metadata.resolvedNavboxes = components.navboxes;
    metadata.structuredPage = !['missing/', 'search/'].some(prefix => relativePath.startsWith(prefix));
    metadata.lectureIndex = relativePath === 'books/_index.md';
    const wikiLinks = new Map();
    record.wikiLinks = wikiLinks;
    record.options = {
      lang: metadata.lang ?? 'zh', file: sourcePath, lineOffset: record.lineOffset, pageAnchor: metadata.structuredPage,
      checkMath: record.checkMath,
      onLabels: labels => { metadata.referenceTargets = labels; },
      onBibliography: entries => { metadata.bibliographyEntries = entries; },
      onTerms: terms => { if (terms.length) metadata.termTranslations = terms; },
      onHeadings: headings => { metadata.referenceHeadings = headings; },
      onSectionNumbers: numbers => { metadata.sectionNumbers = numbers; },
      onWikiLink: (target, line, column) => { if (!wikiLinks.has(`${line}\0${target}`)) wikiLinks.set(`${line}\0${target}`, { line, column, target }); },
      // An article's bibliography does not link its own subject to the article itself.
      people: isWiki ? { ...people, self: metadata.wikiName } : people,
    };
  }
  // Generated directory contents, published only after every page succeeds.
  const files = new Map();
  /** Pages are read straight from content/; other files are published as hard links. */
  async function walk(directory, pagePaths) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = `${directory}/${entry.name}`;
      // Definitions live with source content, but are not Hugo pages or attachments.
      if (directory === source && ['notices', 'navboxes'].includes(entry.name)) continue;
      if (entry.isDirectory()) await walk(path, pagePaths);
      else if (/\.md$/i.test(entry.name)) pagePaths.push(path);
      else if (entry.isSymbolicLink()) files.set(path.slice(source.length + 1), { symlink: await readlink(path) });
      else if (entry.isFile()) files.set(path.slice(source.length + 1), { link: path });
    }
    return pagePaths;
  }
  /** 源文本解析为页面记录；source 保留原文，供增量更新重新准备书册。 */
  function parseRecord(path, text) {
    const match = text.match(/^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    // Otherwise the whole file would become the body, the front matter shown as text.
    if (!match && /^(?:\uFEFF)?---\r?\n/.test(text)) throw new Error(`${path}:1: ${t('build_front_matter_unclosed')}`);
    let metadata;
    try { metadata = match ? parse(match[1]) ?? {} : {}; }
    catch (error) {
      const line = error.linePos?.[0]?.line; // Counted from the line after the opening ---.
      throw new Error(`${path}${line ? `:${line + 1}` : ''}: ${error.message}`);
    }
    const start = match?.[0].length ?? 0;
    // No shortcodes anywhere, front matter included: only the preprocessing writes them (scripts/prebuild/tags.mjs).
    const shortcode = shortcodeOffset(text);
    if (shortcode >= 0) {
      const before = text.slice(0, shortcode), line = before.split('\n').length;
      throw Object.assign(new Error(`${path}:${line}: ${t('build_shortcode_syntax', { Text: shortcodeText(text, shortcode) })}`), { line, column: shortcode - before.lastIndexOf('\n') });
    }
    return { titleProvided: metadata.title !== undefined, path, relative: path.slice(source.length + 1), metadata, source: text, body: text.slice(start), lineOffset: text.slice(0, start).split('\n').length - 1 };
  }
  async function load() {
    const pagePaths = await walk(source, []);
    const texts = new Map();
    await eachLimit(pagePaths, async path => {
      try { texts.set(path, await readFile(path, 'utf8')); } catch (error) { texts.set(path, error); }
    });
    // Normalize in directory order: the first page keeps a duplicated name.
    for (const path of pagePaths) {
      await attempt(async () => {
        const text = texts.get(path);
        if (text instanceof Error) throw text;
        const record = parseRecord(path, text);
        records.set(record.relative, record);
        await normalize(record);
        record.normalized = true;
      }, path);
    }
  }

  await timer.time('read, front matter', load);
  // A failed collection page would make its numbering and references misleading;
  // skip the collection, whose pages cannot be transformed on their own.
  const roots = (await discoverCollections(source)).map(directory => `${directory.slice(source.length + 1)}/`);
  const inCollection = record => roots.some(prefix => record.relative.startsWith(prefix));
  let collectionsReady = ![...records.values()].some(record => !record.normalized && inCollection(record));
  if (collectionsReady) collectionsReady = await timer.time('collections', () => attempt(async () => {
    const collections = await prepareCollections({ source, records, dates: modifiedAt, normalize });
    for (const root of collections) files.delete(`${root.collectionPath}/collection.yaml`);
    if (collections.some(record => record.relative.startsWith('books/')) && !records.has('books/_index.md')) {
      const record = { path: `${source}/books/_index.md`, relative: 'books/_index.md', metadata: { title: t('lectures') }, body: '', lineOffset: 0, generated: true };
      records.set(record.relative, record);
      await normalize(record);
    }
    const groups = await lectureGroups(source, collections);
    files.delete('books/books.yaml');
    if (groups && records.has('books/_index.md')) records.get('books/_index.md').metadata.lectureGroups = groups;
    return true;
  }, source));
  /** The generated page: final metadata and transformed body (unless the body is not wanted). Runs once per record. */
  function transformRecord(record, wanted = !frontMatterOnly && (!pages || pages.has(record.relative))) {
    const metadata = record.metadata;
    const page = record.isWiki ? undefined : { key: record.relative.replace(/\/(?:_?index)\.md$/, '').replace(/\.md$/, ''), title: pageTitleMarkup(metadata), number: '', vector: [] };
    const numbers = !metadata.collectionRoot && (!record.isWiki || metadata.numbering !== undefined)
      ? pageNumbering(page ?? { key: record.relative, vector: [] }, numbering(metadata.numbering ?? {}, { ...defaultNumbering, pages: false }, record.path)) : undefined;
    // Titles are final only now: collection.yaml may rename a generated root.
    Object.assign(metadata, readingMetadata({ name: metadata.title, aliases: metadata.wikiAliases, manual: metadata.sort, file: record.path }));
    delete metadata.sort;
    // Collections are transformed whole: their pages keep bodies unless only front matter is wanted.
    const body = frontMatterOnly && !wanted ? '' : record.transformed ?? (!wanted ? '' : metadata.structuredPage ? transformDocument(record.body, {
      ...record.options, allowLevelOne: !record.isWiki, page, numbers,
    }) : transformMarkup(record.body));
    const problem = generatedShortcodeProblem(metadata, body, shortcodeTemplates);
    if (problem) throw new Error(`${record.path}:1: ${problem}`);
    return `---\n${stringify(metadata)}---\n${body}`;
  }
  const transformStart = performance.now();
  for (const record of records.values()) {
    if (!record.normalized && !record.generated) continue;
    if (!collectionsReady && inCollection(record)) continue;
    await attempt(async () => { files.set(record.relative, { text: transformRecord(record) }); }, record.path);
  }
  timer.add('transform pages', performance.now() - transformStart);
  // Drafts and other unpublished pages are missing from Hugo's article index.
  const published = new Set();
  for (const record of records.values()) {
    if (record.isWiki && record.normalized && isPublished(record.metadata)) {
      for (const name of [record.metadata.wikiName, ...record.metadata.wikiAliases]) published.add(name);
    }
  }
  for (const record of records.values()) {
    if (pages && !pages.has(record.relative)) continue;
    for (const link of record.wikiLinks?.values() ?? []) if (!published.has(link.target)) links.push({ file: record.path, ...link });
  }
  if (!check) await timer.time('publish', async () => {
    categories.publish(files);
    if (publish) await publishContent(files, generated);
  });
  if (!check && publish && history) await timer.time('page history', () => writePageHistories(history));

  /**
   * Each published page's history (page-history.mjs) as <content path>.json, with what the history page shows of
   * the page itself: its title (plain and with formulas rendered) and address.
   */
  async function writePageHistories(destination) {
    const repository = (await readFile(`${root}hugo.toml`, 'utf8')).match(/^repository\s*=\s*['"]([^'"]+)['"]/m)?.[1];
    const histories = await pageHistories(root, { repository });
    const output = new Map();
    for (const [path, { changes, legacy }] of histories) {
      const relative = path.slice('content/'.length), record = records.get(relative);
      const url = record && !record.generated && files.has(relative) ? pageURL(relative, record.metadata) : undefined;
      if (!url) continue;
      const { title, titleParts } = record.metadata;
      output.set(`${relative}.json`, { text: `${JSON.stringify({ path: relative, title, titleHTML: titleHTML(titleParts ?? [{ text: title }]), url, changes, legacy })}\n` });
    }
    await publishContent(output, destination);
  }
  links.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

  /**
   * 页面源文件变化后重新转换，供常驻预览服务使用；只在成功的完整预处理之后调用。
   * changes 把 content/ 内的相对路径映射到新的源文本，可以是新页面。书册页面重新准备整组书册。
   * 只转换这些页面（和所在书册）：其他页面若依赖它们的 front matter（链接颜色、分类页等），
   * 由调用者决定是否完整构建。front matter 中新出现的分类不生成分类页。
   *
   * commit 为 false 时只计算结果，不改变已有状态（预览稿件）；为 true 时结果成为新的状态。
   * marks 为一个页面的相对路径时，该页正文的每一行带上源码行号标记（source-lines.mjs，供编辑器预览），
   * 公式也先用 KaTeX 检查（katex-check.mjs），错误指向出错的公式；
   * 报告的错误与链接的列号仍按原始源码计算。
   * 失败时抛出错误，已有状态不变。返回 { files, links, categories }：files 为生成目录内的相对路径 → 页面文本，
   * links 为这些页面中指向不存在条目的链接 { file, line, column, target }，categories 为这些页面的分类
   * （含上级；不在分类表中的分类没有分类页，调用者应改用完整预处理）。
   */
  async function update(changes, { commit = true, marks } = {}) {
    let marked; // The record with source-line marks, and its marked body's lines.
    const parse = (path, text) => {
      const record = parseRecord(path, text);
      if (record.relative === marks) {
        // The previewed page: its formulas are checked with KaTeX too, so that an error points at its formula.
        record.checkMath = true;
        record.body = markSourceLines(record.body, record.lineOffset);
        marked = { record, lines: record.body.split('\n') };
      }
      return record;
    };
    /** A column in the marked page, counted in its source again. */
    const unmark = (line, column) => {
      const text = marked?.lines[line - marked.record.lineOffset - 1];
      const mark = text && !Number.isNaN(column) ? new RegExp(markPattern.source).exec(text) : null;
      return mark && column - 1 > mark.index ? column - mark[0].length : column;
    };
    try { return await apply(); }
    catch (error) {
      if (marked) {
        error.message = error.message.replace(markPattern, '');
        if (Number.isInteger(error.column) && error.message.startsWith(`${marked.record.path}:`)) error.column = unmark(error.line, error.column);
      }
      throw error;
    }
    async function apply() {
      const next = new Map(records), names = new Map(wikiNames), changed = [], whole = new Set();
      try { return await changePages(next, names, changed, whole); }
      finally { peopleIndex = undefined; }
    }
    async function changePages(next, names, changed, whole) {
      for (const [relative, text] of changes) {
        const collection = roots.find(prefix => relative.startsWith(prefix));
        if (collection) { whole.add(collection); continue; }
        const path = next.get(relative)?.path ?? `${source}/${relative}`;
        for (const [name, file] of names) if (file === path) names.delete(name);
        const record = parse(path, text);
        await normalize(record, names, false);
        record.normalized = true;
        next.set(relative, record);
        changed.push(record);
      }
      for (const prefix of whole) {
        // Collection preparation mutates every page of the collection: start from fresh records.
        for (const [relative, record] of [...next]) {
          if (!relative.startsWith(prefix)) continue;
          next.delete(relative);
          if (record.generated) continue; // Recreated by prepareCollections.
          const fresh = parse(record.path, changes.get(relative) ?? record.source);
          await normalize(fresh, names, false);
          fresh.normalized = true;
          next.set(relative, fresh);
        }
        for (const [relative, text] of changes) {
          if (!relative.startsWith(prefix) || next.has(relative)) continue;
          const added = parse(`${source}/${relative}`, text); // A new page; contents must list it.
          await normalize(added, names, false);
          added.normalized = true;
          next.set(relative, added);
        }
        await prepareCollections({ source, records: next, dates: modifiedAt, normalize, roots: [`${source}/${prefix.slice(0, -1)}`] });
        for (const [relative, record] of next) if (relative.startsWith(prefix)) changed.push(record);
      }
      peopleIndex = peopleIn(next);
      const result = new Map(changed.map(record => [record.relative, transformRecord(record, true)]));
      const published = new Set();
      for (const record of next.values()) {
        if (record.isWiki && record.normalized && isPublished(record.metadata)) {
          for (const name of [record.metadata.wikiName, ...record.metadata.wikiAliases]) published.add(name);
        }
      }
      const missing = changed.flatMap(record => [...record.wikiLinks?.values() ?? []]
        .filter(link => !published.has(link.target))
        .map(link => ({ file: record.path, ...link, ...(record === marked?.record ? { column: unmark(link.line, link.column) } : {}) })));
      if (commit) {
        records = next;
        wikiNames = names;
        for (const [relative, text] of result) files.set(relative, { text });
      }
      return { files: result, links: missing, categories: [...new Set(changed.flatMap(record => record.metadata.categories ?? []))] };
    }
  }
  /** 当前状态下生成目录中的页面文本；不存在的页面为 undefined。 */
  const generatedText = relative => files.get(relative)?.text;
  /** 当前状态下页面的源文本（content/ 内的相对路径）；不存在或自动生成的页面为 undefined。 */
  const sourceText = relative => records.get(relative)?.source;
  /**
   * The labels a book page can reference on the other pages of its book, in reading order: { name, detail,
   * page } (detail: how a reference shows it, such as "定理 2.3"; page: the page's title). Empty outside books.
   */
  function collectionLabels(relative) {
    const prefix = roots.find(prefix => relative.startsWith(prefix));
    const registry = prefix && records.get(`${prefix}_index.md`)?.referenceRegistry;
    if (!registry) return [];
    const own = records.get(relative)?.path ?? `${source}/${relative}`;
    const titles = new Map([...records.values()].filter(record => record.metadata?.collectionPage).map(record => [record.metadata.collectionPage, record.metadata.title]));
    const plain = text => String(text ?? '').replace(/\s+/g, ' ').trim();
    const shown = target => {
      if (target.kind === 'bibliography') return plain(target.entry?.citationLabel);
      if (target.referenceText !== undefined) return plain(target.referenceText);
      if (target.name) return t(target.name, { Number: target.number ?? '', Name: target.custom ?? '' }) + (target.title ? ` [${plain(target.title)}]` : '');
      return plain(target.label);
    };
    return [...registry]
      .filter(([, target]) => target.file !== own)
      .map(([name, target]) => ({ name, detail: shown(target), page: plain(titles.get(target.page) ?? target.page) }));
  }
  /**
   * 当前状态下的每个页面（生成目录内的相对路径）：{ url（发布的网址路径，未发布为 undefined）,
   * names（百科条目的名称与别名，[名称, 是否别名]）, categories（含上级分类）}。
   */
  function pageIndex() {
    const result = new Map();
    for (const [relative, record] of records) {
      if (!files.has(relative)) continue; // Failed (check mode) or skipped with its collection.
      const metadata = record.metadata;
      result.set(relative, {
        url: pageURL(relative, metadata),
        names: record.isWiki ? [[metadata.wikiName, false], ...metadata.wikiAliases.map(name => [name, true])] : [],
        categories: metadata.categories ?? [],
      });
    }
    return result;
  }
  const targetCache = new Map(); // Relative path -> { text, targets }, recomputed when the page changes.
  /**
   * 每个页面中百科链接的目标（匹配键的集合），包括提示与导航框中的链接：取自页面的元数据与转换后的正文。
   */
  function linkTargets() {
    const result = new Map();
    for (const [relative, record] of records) {
      const text = files.get(relative)?.text;
      if (text === undefined) continue;
      let cached = targetCache.get(relative);
      if (cached?.text !== text) {
        // The metadata in memory, not its YAML: long YAML strings are folded across lines.
        const searched = JSON.stringify(record.metadata) + text.slice(text.indexOf('\n---\n', 3) + 5);
        const targets = new Set();
        for (const match of searched.matchAll(/wiki:\?([^)\s"\\]*)/g)) {
          const target = new URLSearchParams(match[1]).get('title');
          if (target) targets.add(target);
        }
        cached = { text, targets };
        targetCache.set(relative, cached);
      }
      result.set(relative, cached.targets);
    }
    return result;
  }
  /** 分类表中的全部分类名称（含 front matter 中新出现、已生成分类页的）。 */
  const categoryNames = () => categories.names();
  return { errors, links, collections: roots, timings: timer.lines(), pages: records.size, files, update, generatedText, sourceText, collectionLabels, pageIndex, linkTargets, categoryNames };
}
