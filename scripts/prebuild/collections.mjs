import { readdir, readFile } from 'node:fs/promises';
import { posix, relative, join } from 'node:path';
import { parseDocument } from 'yaml';
import { defaultNumbering, numbering, nextNumber, pageNumbering } from './numbering.mjs';
import { pageName, pageTitleMarkup } from './names.mjs';
import { transformDocument } from './structure.mjs';
import { prepareBibliography } from './bibliography.mjs';
import { normalizeReading } from './reading.mjs';
import { t } from '../shared/i18n.mjs';

const special = new Set(['wiki', 'missing', 'search', 'navboxes', 'notices']);
const mapping = value => value && typeof value === 'object' && !Array.isArray(value);
const maxDate = values => values.filter(Boolean).sort((a, b) => Date.parse(b) - Date.parse(a))[0];
const fail = (file, message) => { throw new Error(`${file}: 书册：${message}`); };

/** Discover roots by marker, independent of help/books names. */
export async function discoverCollections(source) {
  const roots = [];
  async function visit(directory, parentCollection) {
    const entries = await readdir(directory, { withFileTypes: true });
    const marker = entries.find(entry => entry.name === 'collection.yaml' && entry.isFile());
    if (marker) {
      if (parentCollection) fail(join(directory, marker.name), '不能嵌套书册');
      roots.push(directory);
      parentCollection = directory;
    }
    for (const entry of entries) if (entry.isDirectory() && !(directory === source && special.has(entry.name))) await visit(join(directory, entry.name), parentCollection);
  }
  await visit(source);
  return roots;
}

export function isPublished(metadata, args = process.argv.slice(2), now = new Date()) {
  const enabled = name => !args.includes(`--${name}=false`) && (args.includes(`--${name}`) || args.includes(`--${name}=true`) || /^(true|1)$/i.test(process.env[`HUGO_${name.toUpperCase()}`] ?? ''));
  if (metadata.build?.render === 'never') return false;
  if (metadata.draft && !enabled('buildDrafts')) return false;
  const future = metadata.publishDate ?? metadata.publishdate ?? metadata.date;
  if (future && Date.parse(future) > now.getTime() && !enabled('buildFuture')) return false;
  const expires = metadata.expiryDate ?? metadata.expirydate;
  return !(expires && Date.parse(expires) <= now.getTime() && !enabled('buildExpired'));
}

/**
 * Plan/collect every page before resolving references; keep paths as Hugo source identities.
 * roots limits preparation to these collection directories (default: all of them).
 */
export async function prepareCollections({ source, records, dates, normalize, roots }) {
  roots ??= await discoverCollections(source);
  const configs = [];
  for (const directory of roots) {
    const rootKey = relative(source, directory).split('\\').join('/');
    const file = join(directory, 'collection.yaml');
    const document = parseDocument(await readFile(file, 'utf8'));
    if (document.errors.length) fail(file, document.errors[0].message);
    const config = document.toJS();
    if (!mapping(config)) fail(file, '配置必须是字段映射');
    for (const field of Object.keys(config)) if (!['title', 'sort', 'search', 'contents', 'numbering', 'referenceFormat'].includes(field)) fail(file, `未知字段 ${field}`);
    if (!Array.isArray(config.contents)) fail(file, 'contents 必须是列表');
    if (config.title !== undefined) pageName(config.title, file, 'title');
    const defaults = numbering(config.numbering ?? {}, defaultNumbering, file);
    const format = config.referenceFormat ?? '{number}';
    const validFormat = typeof format === 'string'
      || (Array.isArray(format) && format.every(item => typeof item === 'string'))
      || (mapping(format) && Object.entries(format).every(([key, value]) => (key === 'default' || /^[1-9]\d*$/.test(key)) && typeof value === 'string'));
    if (!validFormat) fail(file, 'referenceFormat 必须是字符串、按层级排列的字符串列表，或以正整数层级/default 为键的字符串映射');
    const referenceFormat = (number, depth) => {
      const template = typeof format === 'string' ? format
        : Array.isArray(format) ? format[Math.max(depth - 1, 0)] ?? '{number}'
        : format[depth] ?? format.default ?? '{number}';
      return template.replaceAll('{number}', number);
    };
    const findPage = async (key, children = false, title) => {
      const candidates = [`${key}/_index.md`, `${key}/index.md`, `${key}.md`].filter(path => records.has(path));
      if (candidates.length > 1) fail(file, `页面路径不唯一：${key}`);
      let record = records.get(candidates[0]);
      if (!record) {
        // Leaf typos are errors. Only declared parents/root may be generated.
        if (!children) fail(file, `页面不存在：${key}`);
        const relativeKey = `${key}/_index.md`;
        record = { relative: relativeKey, path: join(source, relativeKey), metadata: { title: title ?? posix.basename(key) }, body: '', lineOffset: 0, generated: true };
        records.set(relativeKey, record);
        await normalize(record);
      }
      if (title !== undefined && !record.titleProvided) {
        const name = pageName(title, file, 'title', { lang: record.metadata.lang ?? 'zh' });
        record.metadata.title = name.parts.map(part => part.text).join('');
        record.metadata.titleParts = name.parts;
      }
      if (children && !record.relative.endsWith('/_index.md')) fail(file, `有子页面的节点必须使用 _index.md：${key}`);
      return record;
    };
    const root = await findPage(rootKey, true, config.title);
    // The root page's own front matter takes precedence over collection.yaml.
    if (config.search !== undefined && config.search !== false) throw new Error(t('build_search_config', { File: file }));
    if (config.search === false) root.metadata.search = false;
    if (config.sort !== undefined && root.metadata.sort === undefined) root.metadata.sort = normalizeReading(config.sort, file);
    const used = new Set([root.relative]);
    const all = [root];
    async function tree(entries, parentPath, ancestry = []) {
      const children = [];
      for (const entry of entries) {
        if (!mapping(entry)) fail(file, 'contents 的项目必须是字段映射');
        for (const field of Object.keys(entry)) if (!['page', 'number', 'children'].includes(field)) fail(file, `未知章节字段 ${field}`);
        if (typeof entry.page !== 'string' || !entry.page.trim() || /[\\?#\u0000]/.test(entry.page)) fail(file, 'page 必须是目录路径');
        let value = entry.page.replace(/^\/+|\/+$/g, '');
        if (value.split('/').some(part => ['.', '..', ''].includes(part))) fail(file, `无效路径：${entry.page}`);
        // Bare component: parent-relative. A multi-component path: collection-relative.
        // Also accept content-relative full directory paths (including the root).
        const key = value === rootKey || value.startsWith(`${rootKey}/`) ? value : value.includes('/') ? `${rootKey}/${value}` : `${parentPath}/${value}`;
        if (!key.startsWith(`${rootKey}/`)) fail(file, `页面越出书册根目录：${entry.page}`);
        if (entry.children !== undefined && !Array.isArray(entry.children)) fail(file, 'children 必须是列表');
        nextNumber(entry.number, 0, file); // Validate even unpublished declarations.
        const record = await findPage(key, Boolean(entry.children?.length));
        if (used.has(record.relative)) fail(file, `页面重复：${key}`);
        used.add(record.relative);
        record.collectionPath = key;
        record.node = entry;
        record.ancestors = ancestry;
        all.push(record);
        record.children = await tree(entry.children ?? [], key, [...ancestry, record]);
        children.push(record);
      }
      return children;
    }
    root.collectionPath = rootKey;
    root.ancestors = [];
    root.children = await tree(config.contents, rootKey, [root]);
    for (const record of records.values()) {
      if (!record.relative.startsWith(`${rootKey}/`)) continue;
      if (!used.has(record.relative)) fail(file, `页面未列入 contents：${record.relative}`);
      if (record.metadata.categories !== undefined) fail(record.path, 'categories 仅用于 wiki 页面');
    }
    const context = { labels: new Map(), bibliography: [], resolving: new Set() };
    const counters = new Map(), reading = [];
    const configDate = await dates(file);
    const treeDate = await dates.tree(directory); // Includes tracked removals and attachments.
    // Shared outline, numbering and references make all source pages dependencies.
    const modified = maxDate([configDate, treeDate, ...all.map(record => record.metadata.gitLastmod)]);
    async function prepare(record, vector, depth, visible) {
      const metadata = record.metadata;
      const published = visible && isPublished(metadata);
      record.visible = published;
      record.vector = vector;
      const effective = numbering(metadata.numbering ?? {}, defaults, record.path);
      const ownNumber = record === root || record.node?.number === false || (record.node?.number === undefined && !effective.pages) ? '' : vector.join('.');
      Object.assign(metadata, {
        collectionRoot: rootKey, collectionTitle: root.metadata.title, collectionPage: record.collectionPath,
        collectionNumber: ownNumber, collectionDepth: depth, structuredPage: true,
        collectionHome: record === root, collectionKind: rootKey.startsWith('books/') ? 'lecture' : 'guide',
      });
      if (modified) metadata.gitLastmod = modified;
      if (!published) metadata.build = { ...(metadata.build ?? {}), render: 'never', list: 'never' };
      if (!published) return;
      reading.push(record);
      const page = { key: record.collectionPath, vector, number: ownNumber, depth, title: pageTitleMarkup(metadata) };
      const numbers = pageNumbering(page, effective, counters);
      record.finish = transformDocument(record.body, {
        ...record.options, page, numbers, context, referenceFormat, prepareOnly: true,
      });
      let cursor = numbers.childCursor;
      const siblingNumbers = new Set();
      for (const child of record.children) {
        if (!isPublished(child.metadata)) { await prepare(child, vector, depth + 1, false); continue; }
        const childConfig = numbering(child.metadata.numbering ?? {}, defaults, child.path);
        const numbered = child.node.number === undefined ? childConfig.pages : child.node.number !== false;
        const next = nextNumber(numbered ? child.node.number : false, cursor, file);
        cursor = next.cursor;
        const childVector = next.part === null ? vector : [...vector, next.part];
        const number = childVector.join('.');
        if (next.part !== null && siblingNumbers.has(number)) fail(file, `章节编号重复：${number}`);
        siblingNumbers.add(number);
        // A numbered inline heading occupies an earlier sibling position.
        if (next.part !== null && numbers.childNumbers.has(next.part)) fail(file, `章节编号与正文标题冲突：${number}`);
        await prepare(child, childVector, depth + 1, published);
      }
    }
    await prepare(root, [], 0, true);
    // Mark the complete excluded branch, including descendants not traversed above.
    for (const record of all) if (record.visible === undefined) {
      record.visible = false;
      Object.assign(record.metadata, { collectionRoot: rootKey, structuredPage: true, build: { render: 'never', list: 'never' } });
    }
    // Excluding the root from search excludes the whole collection.
    if (root.metadata.search === false) for (const record of all) record.metadata.search = false;
    prepareBibliography(context.bibliography);
    const serialize = record => ({ page: record.collectionPath, number: record.metadata.collectionNumber, children: record.children.filter(child => child.visible).map(serialize) });
    const outline = root.children.filter(child => child.visible).map(serialize);
    for (let i = 0; i < reading.length; i++) {
      const record = reading[i];
      record.metadata.collectionContents = outline;
      record.metadata.collectionChildren = record.children.filter(child => child.visible).map(serialize);
      record.metadata.collectionAncestors = record.ancestors.filter(parent => parent.visible).map(parent => parent.collectionPath);
      record.metadata.collectionPrevious = reading[i - 1]?.collectionPath ?? '';
      record.metadata.collectionNext = reading[i + 1]?.collectionPath ?? '';
      record.transformed = record.finish();
    }
    for (const record of all) if (!record.visible) record.transformed = '';
    root.referenceRegistry = context.labels; // The collection's labels, for the editor's completion.
    configs.push(root);
  }
  return configs;
}
