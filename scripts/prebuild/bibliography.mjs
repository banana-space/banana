import { t } from '../shared/i18n.mjs';
/**
 * 页内参考文献的数据与排版层。
 * 读取 bibliography YAML 围栏、规范化姓名并校验字段；在全文范围分配消歧后缀。
 * citationPolicy 控制正文标签，bibliographyFormats 控制各类文献的 Markdown 列表内容。
 * 不读取文件、不解析正文引用，也不决定文献块的位置；这些由结构层统一管理。
 */
import { parseDocument, isMap, isScalar } from 'yaml';
import { markdownTextWithMath } from './markup.mjs';

const types = new Set(['book', 'article', 'incollection', 'thesis', 'preprint', 'online']);
const fields = new Set(['type', 'title', 'author', 'editor', 'year', 'publisher', 'location', 'edition',
  'series', 'volume', 'number', 'pages', 'journaltitle', 'booktitle', 'doi', 'arxiv', 'zbmath',
  'url', 'site', 'urldate', 'shorttitle', 'howpublished', 'note', 'label', 'institution', 'degree']);
const inlineText = value => value.trim().replace(/\s+/gu, ' ');

/**
 * 将单个姓名或姓名列表转换为 {family, given} / {literal} 对象数组。
 * 中文整体保留；西文支持逗号格式或末词为姓的简写。无效数据通过 fail 定位报错。
 */
export function normalizeNames(value, fail) {
  if (value === undefined) return [];
  const names = Array.isArray(value) ? value : [value];
  if (!names.length) fail(t('build_authors_empty'));
  return names.map(name => {
    if (typeof name === 'string' && name.trim()) {
      name = inlineText(name);
      if (/\p{Script=Han}/u.test(name)) return { literal: name };
      const comma = name.indexOf(',');
      if (comma >= 0) {
        const family = name.slice(0, comma).trim(), given = name.slice(comma + 1).trim();
        if (!family || !given || given.includes(',')) fail(t('build_author_complex'));
        return { family, given };
      }
      const parts = name.split(/\s+/u);
      return { family: parts.pop(), ...(parts.length ? { given: parts.join(' ') } : {}) };
    }
    if (name && typeof name === 'object' && !Array.isArray(name)) {
      const keys = Object.keys(name);
      if (keys.length === 1 && typeof name.literal === 'string' && name.literal.trim()) return { literal: inlineText(name.literal) };
      if (keys.every(key => ['family', 'given'].includes(key)) && typeof name.family === 'string' && name.family.trim()
        && (name.given === undefined || (typeof name.given === 'string' && name.given.trim()))) {
        return { family: inlineText(name.family), ...(name.given ? { given: inlineText(name.given) } : {}) };
      }
    }
    fail(t('build_author_invalid'));
  });
}

/**
 * 从 start 读取完整 bibliography 围栏，返回 {end, entries}；未匹配时返回 undefined。
 * 校验 YAML、文献类型和字段，并保留每项的源文件偏移；不解析数据内的 Markdown。
 */
export function readBibliography(text, start, fail) {
  const fence = text.slice(start).match(/^ {0,3}(`{3,}|~{3,})bibliography\b([^\n]*)(?:\n|$)/);
  if (!fence) return;
  if (fence[2].trim()) fail(t('build_bibliography_parameters'), start);
  const close = new RegExp(`^ {0,3}${fence[1][0]}{${fence[1].length},}[ \\t]*(?:\\n|$)`, 'gm');
  const bodyStart = start + fence[0].length;
  close.lastIndex = bodyStart;
  const closing = close.exec(text);
  if (!closing) fail(t('build_bibliography_unclosed'), start);
  const doc = parseDocument(text.slice(bodyStart, closing.index));
  if (doc.errors.length) fail(t('build_bibliography_yaml', { Message: doc.errors[0].message.split('\n')[0] }), bodyStart + (doc.errors[0].pos?.[0] ?? 0));
  if (!isMap(doc.contents) || !doc.contents.items.length) fail(t('build_bibliography_mapping'), bodyStart);
  let data;
  try { data = doc.toJS({ maxAliasCount: 50 }); }
  catch (error) { fail(t('build_bibliography_yaml', { Message: error.message }), bodyStart); }
  const entries = doc.contents.items.map(pair => {
    const offset = bodyStart + (pair.key?.range?.[0] ?? 0);
    if (!isScalar(pair.key) || typeof pair.key.value !== 'string') fail(t('build_bibliography_key'), offset);
    const key = pair.key.value;
    const item = data[key];
    const at = field => bodyStart + (pair.value?.items?.find(p => p.key?.value === field)?.value?.range?.[0] ?? pair.key.range?.[0] ?? 0);
    const invalid = (message, field) => fail(`${key}: ${message}`, at(field));
    if (!item || typeof item !== 'object' || Array.isArray(item)) invalid(t('build_bibliography_fields'));
    for (const [field, value] of Object.entries(item)) {
      if (!fields.has(field)) invalid(t('build_bibliography_unknown_field', { Field: field }), field);
      if (['author', 'editor'].includes(field)) continue;
      if (!['string', 'number'].includes(typeof value) || !String(value).trim()) invalid(t('build_field_text_or_number', { Field: field }), field);
      if (typeof value === 'number' && !Number.isFinite(value)) invalid(t('build_field_finite_number', { Field: field }), field);
    }
    if (!types.has(item.type)) invalid(t('build_bibliography_type'), 'type');
    if (typeof item.title !== 'string' || !item.title.trim()) invalid(t('build_bibliography_title'), 'title');
    if (item.label !== undefined && (typeof item.label !== 'string' || !item.label.trim())) invalid(t('build_bibliography_label'), 'label');
    if (item.year !== undefined && !/^\d{4}$/.test(String(item.year))) invalid(t('build_bibliography_year'), 'year');
    if (item.type === 'online' && (!item.site || !item.url)) invalid(t('build_bibliography_online'));
    if (item.url !== undefined) {
      try {
        const url = new URL(String(item.url));
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
      } catch { invalid(t('build_bibliography_url'), 'url'); }
    }
    if (item.urldate !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(item.urldate))) invalid(t('build_bibliography_urldate'), 'urldate');
    const entry = Object.fromEntries(Object.entries(item).filter(([field]) => !['author', 'editor'].includes(field))
      .map(([field, value]) => [field, inlineText(String(value))]));
    entry.author = normalizeNames(item.author, message => invalid(message, 'author'));
    entry.editor = normalizeNames(item.editor, message => invalid(message, 'editor'));
    return { ...entry, key, offset, anchor: `bib-${key.normalize('NFC')}` };
  });
  return { end: closing.index + closing[0].length, entries };
}

const chineseName = name => /\p{Script=Han}/u.test(name.family ?? '');
const fullName = name => name.literal ?? (chineseName(name) ? name.family + (name.given ?? '')
  : [name.family, name.given].filter(Boolean).join(', '));
const naturalName = name => name.literal ?? (chineseName(name) ? fullName(name)
  : [name.given, name.family].filter(Boolean).join(' '));
const shortName = name => name.literal ?? (chineseName(name) ? fullName(name) : name.family);
const shortNames = names => names.length > 2 ? t('bibliography_others', { Name: shortName(names[0]) }) : names.map(shortName).join(', ');

// 默认引用策略独立于字段解析；在线来源以站点为作者，空日期的消歧字母占日期位置。
// 以后增加用户样式时，可以替换策略与格式函数，无需改变文章的数据语法。
export const citationPolicy = {
  author: entry => entry.type === 'online' ? entry.site
    : shortNames(entry.author.length ? entry.author : entry.editor) || entry.shorttitle || entry.title,
  date: entry => ['online', 'preprint'].includes(entry.type) ? '' : entry.year ?? t('bibliography_no_date'),
};

/** 将从零开始的声明序号转换为 a…z、aa、ab 等消歧后缀。 */
function alphabetic(index) {
  let result = '';
  for (index++; index > 0; index = Math.floor((index - 1) / 26)) result = String.fromCharCode(97 + (index - 1) % 26) + result;
  return result;
}

/**
 * 为全文所有文献计算正文引用文字、日期及消歧后缀，原地写回 entries。
 * 默认按作者/日期分组，声明顺序决定 a/b；显式 label 替代作者年份，重名 label 同样加后缀。
 */
export function prepareBibliography(entries) {
  const groups = new Map();
  for (const entry of entries) {
    entry.citationAuthor = citationPolicy.author(entry);
    entry.citationDate = citationPolicy.date(entry);
    const group = JSON.stringify(entry.label ? ['label', entry.label.normalize('NFC')] : ['author-date', entry.citationAuthor.normalize('NFC'), entry.citationDate]);
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(entry);
  }
  for (const group of groups.values()) group.forEach((entry, index) => {
    entry.suffix = group.length > 1 ? alphabetic(index) : '';
    entry.dateLabel = entry.label ? entry.citationDate : entry.citationDate + entry.suffix;
    entry.displayLabel = entry.label ? [entry.label, entry.suffix].filter(Boolean).join(' ') : '';
    entry.citationLabel = entry.displayLabel || [entry.citationAuthor, entry.dateLabel].filter(Boolean).join(' ');
  });
}

const text = value => value ? markdownTextWithMath(value) : '';
const italic = value => value ? `*${text(value)}*` : '';
const sentence = values => {
  const result = values.filter(Boolean).join(', ');
  return result && !/[.!?。]$/.test(result) ? result + '.' : result;
};
/** 将数字版次显示为 2nd ed. 等文字，文字版次保留原描述。 */
function edition(value) {
  if (!value) return '';
  if (!/^\d+$/.test(value)) return t('bibliography_edition', { Edition: text(value) });
  const n = Number(value);
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th');
  return t('bibliography_edition', { Edition: `${n}${suffix}` });
}
/** 按自然语序列出姓名，以分号分隔：A; B。 */
const nameList = names => names.map(naturalName).map(text).join('; ');
const publication = entry => [entry.publisher, entry.location].filter(Boolean).map(text).join(', ');
const series = entry => [entry.series, entry.series ? entry.volume : ''].filter(Boolean).map(text).join(' ');

/** 各类型把规范化字段组织为 Markdown 片段；不改动身份、引用文字和消歧结果。 */
export const bibliographyFormats = {
  // 有作者时，编者写在标题之后（没有作者时，编者已在条目开头）。
  book: entry => [sentence([italic(entry.title), edition(entry.edition)]),
    entry.author.length && entry.editor.length ? sentence([t('bibliography_edited_by', { Names: nameList(entry.editor) })]) : '',
    sentence([series(entry), publication(entry)])],
  article: entry => [sentence([text(entry.title)]), sentence([
    [italic(entry.journaltitle), text(entry.volume), entry.number ? `(${text(entry.number)})` : ''].filter(Boolean).join(' '), text(entry.pages),
  ])],
  incollection: entry => [sentence([text(entry.title)]), sentence([
    entry.editor.length ? entry.editor.map(fullName).map(text).join('; ') + (entry.editor.length === 1 ? t('bibliography_editor') : t('bibliography_editors')) : '',
    italic(entry.booktitle), text(entry.pages), series(entry), publication(entry),
  ])],
  // 学位论文：degree 写 phd、master 时显示为标准说法，其他文字原样显示，省略时为 Thesis。
  thesis: entry => [sentence([italic(entry.title)]), sentence([
    { phd: t('bibliography_thesis_phd'), master: t('bibliography_thesis_master') }[entry.degree?.toLowerCase()]
      ?? (entry.degree ? text(entry.degree) : t('bibliography_thesis')),
    text(entry.institution), text(entry.location),
  ])],
  preprint: entry => [sentence([text(entry.title)])],
  // 在线来源以站点开头，作者写在标题之后，用“作者：”表明其身份。
  online: entry => [sentence([`[${text(entry.title)}](${destination(entry.url)})`]),
    entry.author.length ? sentence([t('bibliography_by', { Names: nameList(entry.author) })]) : '',
    entry.urldate ? t('bibliography_accessed', { Date: text(entry.urldate) }) : ''],
};

/** 编码链接中可能破坏 Markdown 或触发 shortcode 的字符，保留原地址的语义。 */
function destination(value) {
  return String(value).replace(/[\s(){}<>\\]/gu, char => ['(', ')'].includes(char)
    ? '%' + char.charCodeAt(0).toString(16).toUpperCase() : encodeURIComponent(char));
}

/** 姓氏（含其后的逗号）加粗；中文/整体姓名加粗全名，其余名字保持普通字体。 */
function formattedName(name) {
  if (name.literal) return `**${text(name.literal)}**`;
  if (chineseName(name)) return `**${text(fullName(name))}**`;
  return `**${text(name.family)}${name.given ? ',' : ''}**${name.given ? ` ${text(name.given)}` : ''}`;
}

/**
 * 在文献块原位置生成带稳定锚点的 Markdown 无序列表。
 * 自定义 label 位于条目开头；作者只突出姓氏；资料链接各自带括号并以空格分隔。
 * mark(entry)：条目开头的源码行号标记（只用于编辑器的预览，见 source-lines.mjs）。
 */
export function bibliographyMarkdown(entries, mark = () => '') {
  return '\n{{< _bibliography-start >}}\n\n' + entries.map(entry => {
    const names = entry.author.length ? entry.author : entry.editor;
    const authors = entry.type === 'online' ? `**${text(entry.site)}**`
      : names.map(formattedName).join('; ') || text(entry.shorttitle || entry.title);
    const lastName = entry.type === 'online' ? entry.site : names.length ? fullName(names.at(-1)) : entry.title;
    const heading = `${authors}${entry.dateLabel ? ` (${text(entry.dateLabel)}).` : /[.!?。]$/.test(lastName) ? '' : '.'}`;
    const label = entry.displayLabel ? `&#91;**${text(entry.displayLabel)}**&#93;` : '';
    const links = [];
    if (entry.doi) links.push(`[doi](https://doi.org/${destination(entry.doi)})`);
    if (entry.arxiv) links.push(`[arXiv:${text(entry.arxiv)}](https://arxiv.org/abs/${destination(entry.arxiv)})`);
    if (entry.zbmath) links.push(`[zbMATH](https://zbmath.org/${destination(entry.zbmath)})`);
    if (entry.url && entry.type !== 'online') links.push(`[${text(t('bibliography_link'))}](${destination(entry.url)})`);
    const anchor = Buffer.from(entry.anchor).toString('base64');
    return `- ${mark(entry)}{{< _bibliography-anchor id="${anchor}" >}}${[
      label, heading, ...bibliographyFormats[entry.type](entry), sentence([text(entry.howpublished), text(entry.note)]), links.map(link => `(${link})`).join(' '),
    ].filter(Boolean).join(' ')}`;
  }).join('\n\n') + '\n\n{{< _bibliography-end >}}\n\n';
}
