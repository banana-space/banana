import { t } from '../shared/i18n.mjs';
/**
 * 页内参考文献的数据与排版层。
 * 读取 bibliography YAML 围栏：按字段表校验并规范化文献及其版本（versions，译本、再版等），保留源文件偏移；
 * 在全文范围分配引用文字与消歧后缀；把每条文献排成 Markdown，条目、版本、标签与外语片段由 shortcode 包住。
 * citationPolicy 控制正文标签，bibliographyFormats 控制各类文献的内容。
 * 不读取文件、不解析正文引用，也不决定文献块的位置；这些由结构层统一管理。
 */
import { parseDocument, isMap, isScalar } from 'yaml';
import { markdownText, markdownTextWithMath, normalizeTarget } from './markup.mjs';

const types = new Set(['book', 'article', 'incollection', 'thesis', 'preprint', 'online']);
const relations = new Set(['translation', 'original', 'edition', 'reprint', 'collected']);
/**
 * 字段表：类型决定校验与显示。text 为文字（只渲染行内公式）；prose 为行内 Markdown（百科链接、引用、公式），
 * 由页面的渲染函数转换；names 为姓名列表；id 为标识符，程序生成链接；versions 为同一作品的其他版本。
 */
const fieldKinds = {
  type: 'type', title: 'text', translatedtitle: 'text', shorttitle: 'text', label: 'label',
  author: 'names', editor: 'names', translator: 'names', year: 'year', edition: 'text',
  publisher: 'text', location: 'text', series: 'text', volume: 'text', number: 'text', pages: 'text',
  journaltitle: 'text', booktitle: 'text', institution: 'text', degree: 'text', site: 'text', language: 'language',
  doi: 'id', arxiv: 'id', zbmath: 'id', url: 'url', urldate: 'date', howpublished: 'prose', note: 'prose',
  versions: 'versions',
};
// 版本另有 relation（必填）与 key（可以引用时）；版本中不再嵌套 versions。
const versionKinds = { ...Object.fromEntries(Object.entries(fieldKinds).filter(([field]) => field !== 'versions')), relation: 'relation', key: 'key' };
const languageTag = /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;
// 不用拉丁字母书写的语言：标题是拉丁字母时（译名或转写），条目文字不标为这些语言。
const nonLatin = /^(?:ru|uk|be|bg|sr|mk|kk|el|grc|zh|ja|ko|ar|fa|he|hi|sa|th|ka|hy)(?:-|$)/;
const han = /\p{Script=Han}/u;
const inlineText = value => value.trim().replace(/\s+/gu, ' ');
const chineseLang = lang => /^zh(?:-|$)/.test(lang ?? '');
// 界面文字（i18n，如“编者”“英译”）的语言。
const uiLang = 'zh';

/**
 * 将单个姓名或姓名列表转换为 {family, given} / {literal} 对象数组。
 * 中文整体保留；西文支持逗号格式或末词为姓的简写。对象形式可加 page：作者条目的标题，或 false（不链接）。
 * 无效数据通过 fail 定位报错。
 */
export function normalizeNames(value, fail) {
  if (value === undefined) return [];
  const names = Array.isArray(value) ? value : [value];
  if (!names.length) fail(t('build_authors_empty'));
  return names.map(name => {
    if (typeof name === 'string' && name.trim()) {
      name = inlineText(name);
      if (han.test(name)) return { literal: name };
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
      const { page, ...rest } = name;
      if (page !== undefined && page !== false && !(typeof page === 'string' && page.trim())) fail(t('build_author_page'));
      const link = page === undefined ? {} : { page: page && inlineText(page) };
      const keys = Object.keys(rest);
      if (keys.length === 1 && typeof rest.literal === 'string' && rest.literal.trim()) return { literal: inlineText(rest.literal), ...link };
      if (keys.every(key => ['family', 'given'].includes(key)) && typeof rest.family === 'string' && rest.family.trim()
        && (rest.given === undefined || (typeof rest.given === 'string' && rest.given.trim()))) {
        return { family: inlineText(rest.family), ...(rest.given ? { given: inlineText(rest.given) } : {}), ...link };
      }
    }
    fail(t('build_author_invalid'));
  });
}

/** 按字段表读取一条文献或版本的字段，返回规范化后的字段（只含写出的字段）。 */
function readFields(item, kinds, invalid) {
  if (!item || typeof item !== 'object' || Array.isArray(item)) invalid(t('build_bibliography_fields'));
  const result = {};
  for (const [field, value] of Object.entries(item)) {
    const kind = kinds[field];
    if (!kind) invalid(t(field === 'versions' ? 'build_bibliography_versions_nested' : 'build_bibliography_unknown_field', { Field: field }), field);
    if (kind === 'versions') continue;
    if (kind === 'names') {
      result[field] = normalizeNames(value, message => invalid(message, field));
      continue;
    }
    if (kind === 'label' && typeof value !== 'string') invalid(t('build_bibliography_label'), field);
    if (!['string', 'number'].includes(typeof value) || !String(value).trim()) invalid(t(kind === 'label' ? 'build_bibliography_label' : 'build_field_text_or_number', { Field: field }), field);
    if (typeof value === 'number' && !Number.isFinite(value)) invalid(t('build_field_finite_number', { Field: field }), field);
    result[field] = inlineText(String(value));
  }
  if (result.type !== undefined && !types.has(result.type)) invalid(t('build_bibliography_type'), 'type');
  if (result.year !== undefined && !/^\d{4}$/.test(result.year)) invalid(t('build_bibliography_year'), 'year');
  if (result.language !== undefined && !languageTag.test(result.language)) invalid(t('build_bibliography_language'), 'language');
  if (result.relation !== undefined && !relations.has(result.relation)) invalid(t('build_bibliography_relation'), 'relation');
  if (result.url !== undefined) {
    try {
      const url = new URL(result.url);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch { invalid(t('build_bibliography_url'), 'url'); }
  }
  if (result.urldate !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(result.urldate)) invalid(t('build_bibliography_urldate'), 'urldate');
  return result;
}

const defined = object => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));

/**
 * 版本的完整数据：未写出的类型、作者与标题沿用所属文献（作者与标题用于引用，显示时省略），own 记下写出的字段。
 * collected（收入文集）默认是 incollection；译本的标题默认是原书的 translatedtitle。
 * 译本、原文不沿用语言与译者；收入文集不沿用编者（那是文集的编者）。
 */
function versionData(fields, entry) {
  const relation = fields.relation;
  const translated = ['translation', 'original'].includes(relation);
  return defined({
    ...fields,
    type: fields.type ?? (relation === 'collected' ? 'incollection' : entry.type),
    author: fields.author ?? entry.author,
    editor: fields.editor ?? (relation === 'collected' ? [] : entry.editor),
    translator: fields.translator ?? (translated ? [] : entry.translator),
    title: fields.title ?? (relation === 'translation' ? entry.translatedtitle ?? entry.title : entry.title),
    translatedtitle: translated ? fields.translatedtitle : fields.translatedtitle ?? entry.translatedtitle,
    shorttitle: fields.shorttitle ?? entry.shorttitle,
    site: fields.site ?? entry.site,
    language: fields.language ?? (translated ? undefined : entry.language),
    own: Object.keys(fields),
  });
}

/**
 * 从 start 读取完整 bibliography 围栏，返回 {end, entries}；未匹配时返回 undefined。
 * 校验 YAML、文献类型和字段，并保留每项及其字段的源文件偏移；不解析数据内的 Markdown。
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
  // A field's value in the source (or the item, without the field), and the offsets of all its fields.
  const position = (node, fallback) => field => bodyStart + (node?.items?.find(p => p.key?.value === field)?.value?.range?.[0] ?? fallback);
  const offsets = (item, at) => Object.fromEntries(Object.keys(item ?? {}).map(field => [field, at(field)]));
  const entries = doc.contents.items.map(pair => {
    const offset = bodyStart + (pair.key?.range?.[0] ?? 0);
    if (!isScalar(pair.key) || typeof pair.key.value !== 'string') fail(t('build_bibliography_key'), offset);
    const key = pair.key.value;
    const item = data[key];
    const at = position(pair.value, pair.key.range?.[0] ?? 0);
    const invalid = (message, field) => fail(`${key}: ${message}`, at(field));
    const fields = readFields(item, fieldKinds, invalid);
    if (!types.has(fields.type)) invalid(t('build_bibliography_type'), 'type');
    if (!fields.title && !fields.translatedtitle) invalid(t('build_bibliography_title'), 'title');
    if (fields.type === 'online' && (!fields.site || !fields.url)) invalid(t('build_bibliography_online'));
    const entry = { ...fields, author: fields.author ?? [], editor: fields.editor ?? [], translator: fields.translator ?? [] };
    const versionNodes = pair.value?.items?.find(p => p.key?.value === 'versions')?.value;
    entry.versions = item.versions === undefined ? [] : (() => {
      if (!Array.isArray(item.versions) || !item.versions.length) invalid(t('build_bibliography_versions'), 'versions');
      return item.versions.map((version, index) => {
        const node = versionNodes?.items?.[index];
        const vat = position(node, node?.range?.[0] ?? at('versions') - bodyStart);
        const vinvalid = (message, field) => fail(`${key}: versions ${index + 1}: ${message}`, vat(field));
        const fields = readFields(version, versionKinds, vinvalid);
        if (!fields.relation) vinvalid(t('build_bibliography_relation'), 'relation');
        if (fields.label && !fields.key) vinvalid(t('build_bibliography_version_label'), 'label');
        const result = { ...versionData(fields, entry), offset: vat('key'), offsets: offsets(version, vat) };
        if (fields.key) result.anchor = `bib-${fields.key.normalize('NFC')}`;
        return result;
      });
    })();
    return { ...entry, key, offset, offsets: offsets(item, at), anchor: `bib-${key.normalize('NFC')}` };
  });
  return { end: closing.index + closing[0].length, entries };
}

/** 文献的可保存数据（交给生成页面的 front matter）：去掉源文件偏移。 */
export function bibliographyData(entry) {
  const { offset, offsets, versions, ...data } = entry;
  return versions ? { ...data, versions: versions.map(bibliographyData) } : data;
}

const chineseName = name => han.test(name.family ?? '');
const fullName = name => name.literal ?? (chineseName(name) ? name.family + (name.given ?? '')
  : [name.family, name.given].filter(Boolean).join(', '));
const naturalName = name => name.literal ?? (chineseName(name) ? fullName(name)
  : [name.given, name.family].filter(Boolean).join(' '));
const shortName = name => name.literal ?? (chineseName(name) ? fullName(name) : name.family);
/** 姓名之间的分隔：有中文姓名时用顿号（张三、李四），否则用分号。 */
const nameSeparator = names => names.some(name => han.test(fullName(name))) ? '、' : '; ';
/** 一位：姓；两位：以连接号相连（Kulish–Reshetikhin），有中文姓名时用顿号；三位及以上：第一位加“等”。 */
function shortNames(names) {
  if (names.length > 2) return t('bibliography_others', { Name: shortName(names[0]) });
  const short = names.map(shortName);
  return short.join(short.some(name => han.test(name)) ? '、' : '–');
}

// 默认引用策略独立于字段解析；在线来源以站点为作者，空日期的消歧字母占日期位置。
// 以后增加用户样式时，可以替换策略与格式函数，无需改变文章的数据语法。
export const citationPolicy = {
  names: entry => entry.type === 'online' ? [] : entry.author.length ? entry.author : entry.editor,
  author: entry => entry.type === 'online' ? entry.site
    : shortNames(citationPolicy.names(entry)) || entry.shorttitle || entry.title || entry.translatedtitle,
  // 预印本以“预印本”代替年份（发表前的年份不作引用依据）；在线来源没有日期。
  date: entry => entry.type === 'online' ? '' : entry.type === 'preprint' ? t('bibliography_preprint') : entry.year ?? t('bibliography_no_date'),
  // “等”之后用逗号隔开年份：Sklyanin 等, 1979。
  label: (entry, date) => {
    const names = citationPolicy.names(entry);
    if (!date) return entry.citationAuthor;
    return names.length > 2 ? t('bibliography_others_date', { Name: shortName(names[0]), Date: date }) : `${entry.citationAuthor} ${date}`;
  },
};

/** 日期加消歧后缀：年份紧接（2020a），文字隔一个空格（预印本 a、无日期 a）。 */
const withSuffix = (date, suffix) => /\d$/.test(date) ? date + suffix : [date, suffix].filter(Boolean).join(' ');

/** 将从零开始的声明序号转换为 a…z、aa、ab 等消歧后缀。 */
function alphabetic(index) {
  let result = '';
  for (index++; index > 0; index = Math.floor((index - 1) / 26)) result = String.fromCharCode(97 + (index - 1) % 26) + result;
  return result;
}

/**
 * 为全文所有文献（及有 key 的版本）计算正文引用文字、日期及消歧后缀，原地写回。
 * 默认按作者/日期分组，声明顺序决定 a/b；显式 label 替代作者年份，重名 label 同样加后缀。
 * 没有 key 的版本不能引用，只显示年份。
 */
export function prepareBibliography(entries) {
  const groups = new Map();
  const versions = entries.flatMap(entry => entry.versions ?? []);
  for (const entry of [...entries, ...versions.filter(version => version.key)]) {
    entry.citationAuthor = citationPolicy.author(entry);
    entry.citationDate = citationPolicy.date(entry);
    const group = JSON.stringify(entry.label ? ['label', entry.label.normalize('NFC')] : ['author-date', entry.citationAuthor.normalize('NFC'), entry.citationDate]);
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(entry);
  }
  for (const group of groups.values()) group.forEach((entry, index) => {
    entry.suffix = group.length > 1 ? alphabetic(index) : '';
    entry.dateLabel = entry.label ? entry.citationDate : withSuffix(entry.citationDate, entry.suffix);
    entry.displayLabel = entry.label ? [entry.label, entry.suffix].filter(Boolean).join(' ') : '';
    entry.citationLabel = entry.displayLabel || citationPolicy.label(entry, entry.dateLabel);
  });
  for (const version of versions) if (!version.key) version.dateLabel = version.year ?? '';
}

/**
 * 传记条目的姓名索引，供文献作者链接到条目。people：[{ key, names }]，names 为条目标题与别名（匹配键）；
 * pages：全部（已发布）条目名，检查作者的 page 字段。match(name) 返回唯一匹配的条目，否则 undefined：
 * 全名与标题或别名相同；或者姓相同，名字依次相符（缩写 J.-P. 对应 Jean-Pierre，可省略中间名的缩写），且只有一个条目符合。
 */
export function personIndex(people, pages = new Set()) {
  const fold = value => value.normalize('NFD').replace(/\p{M}/gu, '').replace(/[’‘`]/g, "'").toLowerCase();
  const words = value => fold(value).split(/[\s‐-]+|(?<=\.)(?=\S)/u).filter(Boolean)
    .map(word => ({ text: word.replace(/\.$/, ''), short: word.endsWith('.') || word.length === 1 }));
  const exact = new Map(), parsed = [];
  for (const { key, names } of people) for (const name of names) {
    exact.set(fold(name), key);
    if (!han.test(name)) parsed.push({ key, words: words(name).map(word => word.text) });
  }
  // The author's given names in order among the page's, the first with the first; a middle initial may be missing.
  const fits = (given, rest) => {
    let j = 0;
    return given.every((word, i) => {
      const fit = page => word.short ? page.startsWith(word.text) : page === word.text;
      if (i === 0) return rest.length > 0 && fit(rest[j++]);
      const found = rest.slice(j).findIndex(fit);
      if (found >= 0) { j += found + 1; return true; }
      return word.short;
    });
  };
  return {
    exists: key => pages.has(key),
    match(name) {
      const whole = name.literal ?? (chineseName(name) ? fullName(name) : naturalName(name));
      const found = exact.get(fold(whole));
      if (found || name.literal || chineseName(name) || !name.given) return found;
      const family = words(name.family).map(word => word.text), given = words(name.given);
      const keys = new Set();
      for (const person of parsed) {
        const n = person.words.length - family.length;
        if (n > 0 && family.every((word, i) => person.words[n + i] === word) && fits(given, person.words.slice(0, n))) keys.add(person.key);
      }
      return keys.size === 1 ? [...keys][0] : undefined;
    },
  };
}

const text = value => value ? markdownTextWithMath(value) : '';
/** 编码链接中可能破坏 Markdown 或触发 shortcode 的字符，保留原地址的语义。 */
function destination(value) {
  return String(value).replace(/[\s(){}<>\\]/gu, char => ['(', ')'].includes(char)
    ? '%' + char.charCodeAt(0).toString(16).toUpperCase() : encodeURIComponent(char));
}
const base64 = value => Buffer.from(value).toString('base64');

/** 行内容器：class 为 bibliography-<kind>，lang 为其中文字的语言；boundary 阻止排版跨越它补空格。 */
const span = (content, { kind, lang, boundary } = {}) => content
  ? `{{< _bibliography-span${kind ? ` class="${kind}"` : ''}${lang ? ` lang="${lang}"` : ''}${boundary ? ' boundary="true"' : ''} >}}${content}{{< _bibliography-span-end >}}`
  : '';

let languageNames;
/** 语言名称去掉末尾的“语”“文”：ru → 俄，zh → 中；拼成“俄文”“英译”。 */
function languageStem(code) {
  languageNames ??= new Intl.DisplayNames([t('language_names_locale')], { type: 'language' });
  let name;
  try { name = languageNames.of(code) ?? code; } catch { name = code; }
  return name.replace(/[语文]$/u, '');
}

/** 显示的标题：版本只显示自己写出的标题或译名。 */
const shownTitle = entry => entry.own
  ? (entry.own.includes('title') ? entry.title : entry.own.includes('translatedtitle') ? entry.translatedtitle : undefined)
  : entry.title ?? entry.translatedtitle;
/** 判断条目语言的文字：标题；没有标题的版本用它的文集、期刊或出版社的名称。 */
const sampleText = entry => shownTitle(entry)
  ?? (entry.own && ['booktitle', 'journaltitle', 'publisher'].filter(field => entry.own.includes(field)).map(field => entry[field])[0]);

/**
 * 条目文字的语言，决定 lang 与标点：标题含汉字为中文条目（中文标点、书名号），假名为日文，谚文为韩文，
 * 西里尔字母、希腊字母为 language 或俄文、希腊文；拉丁字母为 language（以拉丁字母书写时）或英文。
 * 没有这些文字时按 language。
 */
export function entryLanguage(entry) {
  const language = entry.language, title = sampleText(entry);
  if (!title) return language && (chineseLang(language) || /^(?:ja|ko)(?:-|$)/.test(language) || !nonLatin.test(language)) ? language : 'en';
  if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(title)) return 'ja';
  if (/\p{Script=Hangul}/u.test(title)) return 'ko';
  if (han.test(title)) return chineseLang(language) ? language : 'zh';
  if (/\p{Script=Cyrillic}/u.test(title)) return language ?? 'ru';
  if (/\p{Script=Greek}/u.test(title)) return language ?? 'el';
  return language && !nonLatin.test(language) ? language : 'en';
}

/** 西文条目与中文条目的标点：句内分隔、句末，以及书名与刊名的写法（斜体或书名号）。姓名之间见 nameSeparator。 */
const styles = {
  western: { separator: ', ', stop: '.', title: value => `*${value}*` },
  chinese: { separator: '，', stop: '。', title: value => `《${value}》` },
};

/** 将数字版次显示为 2nd ed.（中文条目为“第 2 版”），文字版次保留原描述。 */
function edition(value, chinese) {
  if (!value) return '';
  if (!/^\d+$/.test(value)) return chinese ? text(value) : t('bibliography_edition', { Edition: text(value) });
  if (chinese) return t('bibliography_edition_number', { Edition: value });
  const n = Number(value);
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th');
  return t('bibliography_edition', { Edition: `${n}${suffix}` });
}

/** 资料链接的文字：PDF 文件为“pdf”，其他为不含 www. 的主机名。 */
function urlText(value) {
  const url = new URL(value);
  return /\.pdf$/i.test(url.pathname) ? t('bibliography_pdf') : url.hostname.replace(/^www\./, '');
}

/**
 * 一条文献或版本的排版上下文：lang 为条目文字的语言，style 为标点。
 * ui(文字)：界面文字，在非中文条目中标为中文（含汉字的数据见 field）。
 * template(key, {slot: Markdown})：i18n 文字中只有 slot 是数据，其余为界面文字。
 */
function context(entry, options) {
  const lang = entryLanguage(entry);
  const chinese = chineseLang(lang);
  const ui = value => {
    if (!value || chinese) return value;
    const [, before, inner, after] = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    return inner ? before + span(inner, { lang: uiLang }) + after : value;
  };
  const template = (key, slots) => {
    const marker = '\u0000';
    const parts = t(key, Object.fromEntries(Object.keys(slots).map(name => [name, marker + name + marker]))).split(marker);
    return parts.map((part, i) => i % 2 ? slots[part] : ui(part)).join('');
  };
  return { ...options, entry, lang, chinese, style: chinese ? styles.chinese : styles.western, ui, template };
}

/** 一段文字：Markdown、需要标出的语言（undefined 为条目语言）、最后一个字符（判断句末标点）。 */
const piece = (md, lang, last) => md ? { md, lang, last: last ?? md.at(-1) } : undefined;

/**
 * 一句：各段以逗号连接，句末按最后一段的语言加句号（中文为“。”，排版时随正文转换）；已有句末标点时不加。
 * 标为中文的一段，句号写在它里面，与它一同排版。
 */
function sentence(c, pieces) {
  pieces = pieces.filter(Boolean);
  if (!pieces.length) return '';
  return pieces.map((p, i) => {
    const lang = p.lang ?? c.lang;
    const stop = i < pieces.length - 1 || /[.!?。．！？]$/u.test(p.last) ? '' : chineseLang(lang) ? '。' : c.style.stop;
    return (p.lang && p.lang !== c.lang ? span(p.md + stop, { lang: p.lang }) : p.md + stop);
  }).join(c.style.separator);
}

/** 数据字段的一段：西文条目中含汉字的数据（出版社、附注等）标为中文。 */
function field(c, value, md = text(value)) {
  return piece(md, !c.chinese && han.test(value ?? '') ? uiLang : undefined, value?.at(-1));
}

/**
 * 作者条目链接（找不到或 page: false 时为 undefined）；page 指向不存在的条目时报错。
 * 不链接到文献所在的条目本身（people.self，如 Peter Dirichlet 条目中 Dirichlet 的著作）。
 */
function personPage(c, name, role) {
  if (name.page === false) return;
  let key;
  if (name.page) {
    key = normalizeTarget(name.page);
    if (c.people && !c.people.exists(key)) c.fail?.(`${c.key}: ${t('build_author_page_missing', { Name: name.page })}`, c.entry.offsets?.[role]);
  } else key = c.people?.match(name);
  return key === c.people?.self ? undefined : key;
}
const wikiLink = (label, key) => `[${label}](${destination(`wiki:?title=${encodeURIComponent(key)}&name=${encodeURIComponent(key)}`)})`;

/** 文献开头的姓名：姓（含中文全名、整体姓名）加粗（有 label 时不加粗），链接到作者条目。 */
function leadName(c, name, bold, role) {
  const page = personPage(c, name, role);
  const link = value => page ? wikiLink(value, page) : value;
  // Bold inside the link: ** right after the names' shortcode and before [ would not open emphasis.
  const strong = value => bold ? `**${value}**` : value;
  if (name.literal || chineseName(name)) {
    const whole = link(strong(text(fullName(name))));
    return !c.chinese && han.test(fullName(name)) ? span(whole, { lang: uiLang }) : whole;
  }
  return link(strong(text(name.family))) + (name.given ? `, ${text(name.given)}` : '');
}
/** 句中按自然语序列出的姓名（编者、译者、在线资料的作者）。 */
function nameList(c, names, role) {
  return names.map(name => {
    const page = personPage(c, name, role), shown = text(naturalName(name));
    const md = page ? wikiLink(shown, page) : shown;
    return !c.chinese && han.test(naturalName(name)) ? span(md, { lang: uiLang }) : md;
  }).join(nameSeparator(names));
}

/** 标题一段：标题（可为斜体或书名号）、方括号中的译名、作品语言（俄文）。 */
function titlePiece(c, entry, styled) {
  const shown = entry.own ? entry.own.includes('title') : true;
  const parts = [];
  if (entry.title && shown) parts.push(styled ? c.style.title(text(entry.title)) : text(entry.title));
  if (entry.translatedtitle && (!entry.own || entry.own.includes('translatedtitle'))) {
    const md = `&#91;${text(entry.translatedtitle)}&#93;`;
    parts.push(c.lang === 'en' ? md : span(md, { lang: 'en' }));
  }
  if (!parts.length) return;
  const language = entry.language && (!entry.own || entry.own.includes('language')) && !['translation', 'original'].includes(entry.relation);
  if (language && (entry.language.split('-')[0] !== c.lang.split('-')[0] || !['en', 'zh'].includes(entry.language.split('-')[0]))) {
    parts.push(`(${c.ui(t('bibliography_language', { Language: languageStem(entry.language) }))})`);
  }
  const last = parts.length > 1 ? parts.at(-1).at(-1) : entry.title ? entry.title.at(-1) : ']';
  return piece(parts.join(' '), undefined, last);
}

const publication = (c, entry) => [entry.publisher, entry.location].filter(Boolean).map(value => field(c, value));
const series = (c, entry) => entry.series ? field(c, entry.series, [text(entry.series), text(entry.volume)].filter(Boolean).join(' ')) : undefined;
const editorsBy = (c, entry) => entry.editor.length ? piece(c.template('bibliography_edited_by', { Names: nameList(c, entry.editor, 'editor') })) : undefined;
const titled = (c, value) => value ? c.style.title(text(value)) : '';
const editors = (c, entry) => entry.editor.length ? piece(c.template('bibliography_editors', { Names: nameList(c, entry.editor, 'editor') })) : undefined;

/**
 * 各类型把规范化字段组织为句子（每句为若干段）；不改动身份、引用文字和消歧结果。
 * contained：incollection 的文集前写“载于”（作为“收入”的版本时不写）。
 */
export const bibliographyFormats = {
  // 有作者时，编者写在标题之后（没有作者时，编者已在条目开头）。
  book: (c, entry) => [[titlePiece(c, entry, true), piece(edition(entry.edition, c.chinese))],
    [entry.author.length ? editorsBy(c, entry) : undefined],
    [series(c, entry), ...publication(c, entry)]],
  article: (c, entry) => [[titlePiece(c, entry)], [
    piece([titled(c, entry.journaltitle), text(entry.volume), entry.number ? `(${text(entry.number)})` : ''].filter(Boolean).join(' ')),
    field(c, entry.pages),
  ]],
  incollection: (c, entry, { contained = true } = {}) => [[titlePiece(c, entry)], [
    entry.booktitle ? piece([contained ? c.ui(t('bibliography_in')) : '', titled(c, entry.booktitle)].filter(Boolean).join(' ')) : undefined,
    editors(c, entry), field(c, entry.pages), series(c, entry), ...publication(c, entry),
  ]],
  // 学位论文：degree 写 phd、master 时显示为标准说法，其他文字原样显示，省略时为 Thesis。
  thesis: (c, entry) => [[titlePiece(c, entry, true)], [
    piece({ phd: t('bibliography_thesis_phd'), master: t('bibliography_thesis_master') }[entry.degree?.toLowerCase()]
      ?? (entry.degree ? text(entry.degree) : t('bibliography_thesis'))),
    field(c, entry.institution), field(c, entry.location),
  ]],
  preprint: (c, entry) => [[titlePiece(c, entry)]],
  // 在线来源以站点开头，作者写在标题之后，用“作者：”表明其身份；地址在资料链接中。
  online: (c, entry) => [[titlePiece(c, entry)],
    [entry.author.length && !entry.own ? piece(c.template('bibliography_by', { Names: nameList(c, entry.author, 'author') })) : undefined]],
};

/** 句子之后的共同部分：译者、附注（行内 Markdown），以及资料链接与访问日期。 */
function details(c, entry) {
  const own = name => !entry.own || entry.own.includes(name);
  const prose = name => entry[name] && own(name)
    ? field(c, entry[name], c.render && entry.offsets?.[name] !== undefined ? c.render(entry[name], entry.offsets[name]) : text(entry[name]))
    : undefined;
  const translators = entry.translator.length && own('translator')
    ? piece(c.template('bibliography_translated_by', { Names: nameList(c, entry.translator, 'translator') })) : undefined;
  const links = [];
  if (entry.doi && own('doi')) links.push(`[doi](https://doi.org/${destination(entry.doi)})`);
  if (entry.arxiv && own('arxiv')) links.push(`[arXiv:${text(entry.arxiv)}](https://arxiv.org/abs/${destination(entry.arxiv)})`);
  if (entry.zbmath && own('zbmath')) links.push(`[zbMATH](https://zbmath.org/${destination(entry.zbmath)})`);
  if (entry.url && own('url')) links.push(`[${text(urlText(entry.url))}](${destination(entry.url)})`);
  if (entry.urldate && own('urldate')) links.push(c.ui(t('bibliography_accessed', { Date: text(entry.urldate) })));
  return [sentence(c, [translators]), sentence(c, [prose('howpublished'), prose('note')]),
    span(links.join(' · '), { kind: 'links' })];
}

/** 文献的一段：标签、开头的姓名（或站点、标题）、括号中的日期，其后为各句、附注与资料链接。 */
function entryParagraph(entry, options) {
  const c = context(entry, options);
  const names = citationPolicy.names(entry);
  const label = entry.displayLabel ? span(text(entry.displayLabel), { kind: 'label', boundary: true }) : '';
  const lead = entry.type === 'online' ? `**${text(entry.site)}**`
    : names.length ? span(names.map(name => leadName(c, name, !label, entry.author.length ? 'author' : 'editor')).join(nameSeparator(names)), { kind: 'names' })
    : text(entry.shorttitle || entry.title || entry.translatedtitle);
  const last = entry.type === 'online' ? entry.site : names.length ? fullName(names.at(-1)) : entry.shorttitle || entry.title || entry.translatedtitle;
  // 与引用文字相同的日期（预印本、无日期为界面文字），在线来源只写消歧字母；有 label 时字母在 label 上。
  const suffix = entry.label ? '' : entry.suffix ?? '';
  const date = entry.type === 'online' ? suffix
    : entry.type !== 'preprint' && entry.year ? text(entry.year) + suffix
    : withSuffix(c.ui(entry.type === 'preprint' ? t('bibliography_preprint') : t('bibliography_no_date')), suffix);
  const heading = label + lead + (date ? ` (${date})${c.style.stop}` : /[.!?。．]$/u.test(last) ? '' : c.style.stop);
  return [heading, ...bibliographyFormats[entry.type](c, entry).map(pieces => sentence(c, pieces)), ...details(c, entry)].filter(Boolean).join(' ');
}

/** 版本的说明：译本为“英译”，原文为“俄文原文”，新版为“第 2 版”，以及“重印”“收入”。 */
function relationText(version) {
  const language = version.language && languageStem(version.language);
  switch (version.relation) {
    case 'translation': return language ? t('bibliography_translation', { Language: language }) : t('bibliography_translation_unknown');
    case 'original': return language ? t('bibliography_original', { Language: language }) : t('bibliography_original_unknown');
    case 'edition': return !version.edition ? t('bibliography_other_edition')
      : /^\d+$/.test(version.edition) ? t('bibliography_edition_number', { Edition: version.edition }) : version.edition;
    case 'reprint': return t('bibliography_reprint');
    default: return t('bibliography_collected');
  }
}

/** 版本的一段：加粗的说明与日期，其后只写版本自己的数据；作者、标题等沿用的数据不重复。 */
function versionParagraph(version, options) {
  const own = name => version.own.includes(name);
  const c = context(version, options);
  const label = version.displayLabel ? span(text(version.displayLabel), { kind: 'label', boundary: true }) : '';
  const relation = span(markdownText(relationText(version)), { kind: 'relation', lang: c.chinese ? undefined : uiLang });
  const names = own('author') ? span(version.author.map(name => leadName(c, name, false, 'author')).join(nameSeparator(version.author)), { kind: 'names' }) : '';
  const date = version.year ? text(version.year) + (version.label ? '' : version.suffix ?? '') : '';
  const heading = label + relation + (names ? ` ${names}` : '') + (date ? ` (${date})` : '') + c.style.stop;
  const shown = { ...version, edition: version.relation === 'edition' ? undefined : version.edition, editor: own('editor') ? version.editor : [] };
  const sentences = bibliographyFormats[version.type](c, shown, { contained: false }).map(pieces => sentence(c, pieces));
  // A reprint of an article is usually a book: its publisher is shown whatever type it keeps.
  if (!['book', 'incollection'].includes(version.type)) sentences.push(sentence(c, publication(c, version)));
  return [heading, ...sentences, ...details(c, version)].filter(Boolean).join(' ');
}

/**
 * 在文献块原位置生成文献列表：每条文献为带稳定锚点与语言的容器，其中一段文字，版本在其后各为一个容器。
 * options：mark(entry) 为条目开头的源码行号标记（只用于编辑器的预览，见 source-lines.mjs）；
 * render(value, offset) 渲染附注等行内 Markdown；people 为作者条目索引（personIndex）；fail(message, offset) 报错。
 */
export function bibliographyMarkdown(entries, { mark = () => '', ...options } = {}) {
  const open = (item, version) => `{{< _bibliography-entry${version ? ' kind="version"' : ''}${item.anchor ? ` id="${base64(item.anchor)}"` : ''} lang="${entryLanguage(item)}" >}}\n\n`;
  const close = '{{< _bibliography-entry-end >}}\n\n';
  return '\n{{< _bibliography-start >}}\n\n' + entries.map(entry => {
    const own = { ...options, key: entry.key };
    return open(entry) + mark(entry) + entryParagraph(entry, own) + '\n\n'
      + entry.versions.map(version => open(version, true) + versionParagraph(version, own) + '\n\n' + close).join('') + close;
  }).join('') + '{{< _bibliography-end >}}\n\n';
}
