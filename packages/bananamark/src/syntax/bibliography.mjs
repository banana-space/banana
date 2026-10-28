import { languageName, messageLanguage, t, problem } from '../messages.mjs';
import { parseDocument, isMap, isScalar } from 'yaml';
import { markdownText, markdownTextWithMath, normalizeTarget, plainName, typesetText } from './markup.mjs';
import { nodeLink, nodeMarker } from './nodes.mjs';
import { languageTag } from './scan.mjs';

/**
 * A page's bibliography: its data and how it is written. ```bibliography blocks (YAML) are read: entries and their
 * versions (translations, editions…) checked against the fields' table and normalized, with where each is in the
 * source; citations and their letters (2020a) are given across the page (or book); each entry is written as Markdown,
 * its entry, versions, labels and pieces in other languages in nodes (nodes.mjs). citationPolicy says how citations
 * read, bibliographyFormats what each type of entry holds. Files, citations in the text and where blocks stand are the
 * structure's layer's (structure.mjs).
 */

/** An error in an entry: its message after where (the entry's key), with its code, and the entry among its values. */
const inEntry = (where, message, values) => typeof message === 'object' && message?.key
  ? { key: message.key, values: { ...values, ...message.values }, toString: () => where + message }
  : where + message;

const types = new Set(['book', 'article', 'incollection', 'thesis', 'preprint', 'online']);
const relations = new Set(['translation', 'original', 'edition', 'reprint', 'collected']);
/**
 * The fields, by kind (how each is checked and shown): text (literal, but inline formulas), prose (inline Markdown:
 * wiki links, references, formulas; converted as the page's text), names (a list of names), id (an identifier,
 * linked), versions (other versions of the same work).
 */
const fieldKinds = {
  type: 'type', title: 'text', translatedtitle: 'text', shorttitle: 'text', label: 'label',
  author: 'names', editor: 'names', translator: 'names', year: 'year', edition: 'text',
  publisher: 'text', location: 'text', series: 'text', volume: 'text', number: 'text', pages: 'text',
  journaltitle: 'text', booktitle: 'text', institution: 'text', degree: 'text', site: 'text', language: 'language',
  doi: 'id', arxiv: 'id', zbmath: 'id', url: 'url', urldate: 'date', howpublished: 'prose', note: 'prose',
  versions: 'versions',
};
// A version has a relation (required) and a key (to be cited) too; versions do not nest.
const versionKinds = { ...Object.fromEntries(Object.entries(fieldKinds).filter(([field]) => field !== 'versions')), relation: 'relation', key: 'key' };
// Languages not written in Latin letters: an entry whose title is in Latin letters (translated or transliterated) is not marked as in them.
const nonLatin = /^(?:ru|uk|be|bg|sr|mk|kk|el|grc|zh|ja|ko|ar|fa|he|hi|sa|th|ka|hy)(?:-|$)/;
const han = /\p{Script=Han}/u;
// The language of data in Han characters in a Western entry (a publisher, a Chinese name).
const hanLang = 'zh-cn';
const inlineText = value => value.trim().replace(/\s+/gu, ' ');
const chineseLang = lang => /^zh(?:-|$)/.test(lang ?? '');


/**
 * A name or a list of names as [{ family, given } or { literal }]: a Chinese name whole; a Western one "Family, Given"
 * or with the family name last. The object form may have page: the title of the person's article, or false (no
 * link). What is wrong is reported by fail.
 */
export function normalizeNames(value, fail) {
  if (value === undefined) return [];
  const names = Array.isArray(value) ? value : [value];
  if (!names.length) fail(problem('authors_empty'));
  return names.map(name => {
    if (typeof name === 'string' && name.trim()) {
      name = inlineText(name);
      if (han.test(name)) return { literal: name };
      const comma = name.indexOf(',');
      if (comma >= 0) {
        const family = name.slice(0, comma).trim(), given = name.slice(comma + 1).trim();
        if (!family || !given || given.includes(',')) fail(problem('author_complex'));
        return { family, given };
      }
      const parts = name.split(/\s+/u);
      return { family: parts.pop(), ...(parts.length ? { given: parts.join(' ') } : {}) };
    }
    if (name && typeof name === 'object' && !Array.isArray(name)) {
      const { page, ...rest } = name;
      if (page !== undefined && page !== false && !(typeof page === 'string' && page.trim())) fail(problem('author_page'));
      const link = page === undefined ? {} : { page: page && inlineText(page) };
      const keys = Object.keys(rest);
      if (keys.length === 1 && typeof rest.literal === 'string' && rest.literal.trim()) return { literal: inlineText(rest.literal), ...link };
      if (keys.every(key => ['family', 'given'].includes(key)) && typeof rest.family === 'string' && rest.family.trim()
        && (rest.given === undefined || (typeof rest.given === 'string' && rest.given.trim()))) {
        return { family: inlineText(rest.family), ...(rest.given ? { given: inlineText(rest.given) } : {}), ...link };
      }
    }
    fail(problem('author_invalid'));
  });
}

/** An entry's or a version's fields, read by the fields' table: those written, normalized. */
function readFields(item, kinds, invalid) {
  if (!item || typeof item !== 'object' || Array.isArray(item)) invalid(problem('bibliography_fields'));
  const result = {};
  for (const [field, value] of Object.entries(item)) {
    const kind = kinds[field];
    if (!kind) invalid(problem(field === 'versions' ? 'bibliography_versions_nested' : 'bibliography_unknown_field', { field }), field);
    if (kind === 'versions') continue;
    if (kind === 'names') {
      result[field] = normalizeNames(value, message => invalid(message, field));
      continue;
    }
    if (kind === 'label' && typeof value !== 'string') invalid(problem('bibliography_label'), field);
    if (!['string', 'number'].includes(typeof value) || !String(value).trim()) invalid(problem(kind === 'label' ? 'bibliography_label' : 'field_text_or_number', { field }), field);
    if (typeof value === 'number' && !Number.isFinite(value)) invalid(problem('field_finite_number', { field }), field);
    result[field] = inlineText(String(value));
  }
  if (result.type !== undefined && !types.has(result.type)) invalid(problem('bibliography_type'), 'type');
  if (result.year !== undefined && !/^\d{4}$/.test(result.year)) invalid(problem('bibliography_year'), 'year');
  if (result.language !== undefined && !languageTag.test(result.language)) invalid(problem('bibliography_language_code'), 'language');
  if (result.relation !== undefined && !relations.has(result.relation)) invalid(problem('bibliography_relation'), 'relation');
  if (result.url !== undefined) {
    try {
      const url = new URL(result.url);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch { invalid(problem('bibliography_url'), 'url'); }
  }
  if (result.urldate !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(result.urldate)) invalid(problem('bibliography_urldate'), 'urldate');
  return result;
}

const defined = object => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));

/**
 * A version's data: its type, authors and title, where not written, its entry's (cited with, not shown); own: the
 * fields written. A collected version is an incollection by default; a translation's title is its entry's
 * translatedtitle by default. A translation or original does not take its entry's language or translators; a
 * collected version not its editors (they are the collection's).
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
 * The ```bibliography block at start: { end, entries }, or undefined. Its YAML, types and fields are checked, and where
 * each entry and field is in the source kept; Markdown in the data is not read here.
 */
export function readBibliography(text, start, fail) {
  const fence = text.slice(start).match(/^ {0,3}(`{3,}|~{3,})bibliography\b([^\n]*)(?:\n|$)/);
  if (!fence) return;
  if (fence[2].trim()) fail(problem('bibliography_parameters'), start);
  const close = new RegExp(`^ {0,3}${fence[1][0]}{${fence[1].length},}[ \\t]*(?:\\n|$)`, 'gm');
  const bodyStart = start + fence[0].length;
  close.lastIndex = bodyStart;
  const closing = close.exec(text);
  if (!closing) fail(problem('bibliography_unclosed'), start);
  const doc = parseDocument(text.slice(bodyStart, closing.index));
  if (doc.errors.length) fail(problem('bibliography_yaml', { message: doc.errors[0].message.split('\n')[0] }), bodyStart + (doc.errors[0].pos?.[0] ?? 0));
  if (!isMap(doc.contents) || !doc.contents.items.length) fail(problem('bibliography_mapping'), bodyStart);
  let data;
  try { data = doc.toJS({ maxAliasCount: 50 }); }
  catch (error) { fail(problem('bibliography_yaml', { message: error.message }), bodyStart); }
  // A field's value in the source (or the item, without the field), and the offsets of all its fields.
  const position = (node, fallback) => field => bodyStart + (node?.items?.find(p => p.key?.value === field)?.value?.range?.[0] ?? fallback);
  const offsets = (item, at) => Object.fromEntries(Object.keys(item ?? {}).map(field => [field, at(field)]));
  const entries = doc.contents.items.map(pair => {
    const offset = bodyStart + (pair.key?.range?.[0] ?? 0);
    if (!isScalar(pair.key) || typeof pair.key.value !== 'string') fail(problem('bibliography_key'), offset);
    const key = pair.key.value;
    const item = data[key];
    const at = position(pair.value, pair.key.range?.[0] ?? 0);
    const invalid = (message, field) => fail(inEntry(`${key}: `, message, { entry: key }), at(field));
    const fields = readFields(item, fieldKinds, invalid);
    if (!types.has(fields.type)) invalid(problem('bibliography_type'), 'type');
    if (!fields.title && !fields.translatedtitle) invalid(problem('bibliography_title'), 'title');
    if (fields.type === 'online' && (!fields.site || !fields.url)) invalid(problem('bibliography_online'));
    const entry = { ...fields, author: fields.author ?? [], editor: fields.editor ?? [], translator: fields.translator ?? [] };
    const versionNodes = pair.value?.items?.find(p => p.key?.value === 'versions')?.value;
    entry.versions = item.versions === undefined ? [] : (() => {
      if (!Array.isArray(item.versions) || !item.versions.length) invalid(problem('bibliography_versions'), 'versions');
      return item.versions.map((version, index) => {
        const node = versionNodes?.items?.[index];
        const vat = position(node, node?.range?.[0] ?? at('versions') - bodyStart);
        const vinvalid = (message, field) => fail(inEntry(`${key}: versions ${index + 1}: `, message, { entry: key, version: index + 1 }), vat(field));
        const fields = readFields(version, versionKinds, vinvalid);
        if (!fields.relation) vinvalid(problem('bibliography_relation'), 'relation');
        if (fields.label && !fields.key) vinvalid(problem('bibliography_version_label'), 'label');
        const result = { ...versionData(fields, entry), offset: vat('key'), offsets: offsets(version, vat) };
        if (fields.key) result.anchor = `bib-${fields.key.normalize('NFC')}`;
        return result;
      });
    })();
    return { ...entry, key, offset, offsets: offsets(item, at), anchor: `bib-${key.normalize('NFC')}` };
  });
  return { end: closing.index + closing[0].length, entries };
}

/** An entry's data to keep (document.meta.bibliography): without where it is in the source. */
export function bibliographyData(entry) {
  const { offset, offsets, versions, ...data } = entry;
  return versions ? { ...data, versions: versions.map(bibliographyData) } : data;
}

/** How a name is written (for resolvePersonLink): whether it is Chinese, "Family, Given" (a Chinese one together), in natural order. */
export const isChineseName = name => han.test(name.family ?? '');
export const fullName = name => name.literal ?? (isChineseName(name) ? name.family + (name.given ?? '')
  : [name.family, name.given].filter(Boolean).join(', '));
export const naturalName = name => name.literal ?? (isChineseName(name) ? fullName(name)
  : [name.given, name.family].filter(Boolean).join(' '));
const shortName = name => name.literal ?? (isChineseName(name) ? fullName(name) : name.family);
/** What separates names: 、 with a Chinese name among them (张三、李四), otherwise a semicolon. */
const nameSeparator = names => names.some(name => han.test(fullName(name))) ? '、' : '; ';
/** One name: the family name; two: joined by a dash (Kulish–Reshetikhin), by 、 with a Chinese one; more: the first and “et al.”. */
function shortNames(names) {
  if (names.length > 2) return t('bibliography_others', { name: shortName(names[0]) });
  const short = names.map(shortName);
  return short.join(short.some(name => han.test(name)) ? '、' : '–');
}

// How citations read, apart from how fields are read: an online source's site stands for its author, and with no date
// its letter stands where the date would. A style of a caller's would replace this and the formats, the data alike.
export const citationPolicy = {
  names: entry => entry.type === 'online' ? [] : entry.author.length ? entry.author : entry.editor,
  author: entry => entry.type === 'online' ? entry.site
    : shortNames(citationPolicy.names(entry)) || entry.shorttitle || entry.title || entry.translatedtitle,
  // A preprint: “preprint” for the year (a year before publication is not cited by); an online source: no date.
  date: entry => entry.type === 'online' ? '' : entry.type === 'preprint' ? t('bibliography_preprint') : entry.year ?? t('bibliography_no_date'),
  // After “et al.” a comma before the year: Sklyanin 等, 1979.
  label: (entry, date) => {
    const names = citationPolicy.names(entry);
    if (!date) return entry.citationAuthor;
    return names.length > 2 ? t('bibliography_others_date', { name: shortName(names[0]), date }) : `${entry.citationAuthor} ${date}`;
  },
};

/** A date with its letter: right after a year (2020a), after a space after words (预印本 a, n.d. a). */
const withSuffix = (date, suffix) => /\d$/.test(date) ? date + suffix : [date, suffix].filter(Boolean).join(' ');

/** A letter from an index from 0: a…z, aa, ab… */
function alphabetic(index) {
  let result = '';
  for (index++; index > 0; index = Math.floor((index - 1) / 26)) result = String.fromCharCode(97 + (index - 1) % 26) + result;
  return result;
}

/**
 * The citations of every entry of a page or book (and of versions with a key): their text, date and letter, written
 * on them. Entries with the same author and date are told apart by letters, in the order they are declared; a label
 * stands for author and date, and the same label is told apart alike. A version without a key is not cited: its year
 * alone is shown.
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

const text = value => value ? markdownTextWithMath(value) : '';
/** An address with what would break its Markdown encoded, meaning the same. */
function destination(value) {
  return String(value).replace(/[\s(){}<>\\]/gu, char => ['(', ')'].includes(char)
    ? '%' + char.charCodeAt(0).toString(16).toUpperCase() : encodeURIComponent(char));
}

/** An inline span: class bm-bibliography-<kind>, lang its text's language; boundary: typography adds no space across it. */
const span = (content, { kind, lang, boundary = false } = {}) => content
  ? nodeMarker({ type: 'bibliographySpan', class: kind, lang, boundary }) + content + nodeMarker({ type: 'bibliographySpanEnd' })
  : '';

/** A language's name without its “语” or “文” (ru → 俄, zh → 中), for “俄文”, “英译” (other languages' names as they are). */
function languageStem(code) {
  let name;
  try { name = languageName(code); } catch { name = code; }
  return name.replace(/[语文]$/u, '');
}

/** The title shown: a version's own title or translated title only. */
const shownTitle = entry => entry.own
  ? (entry.own.includes('title') ? entry.title : entry.own.includes('translatedtitle') ? entry.translatedtitle : undefined)
  : entry.title ?? entry.translatedtitle;
/** The text an entry's language is told from: its title; a version without one, its collection's, journal's or publisher's name. */
const sampleText = entry => shownTitle(entry)
  ?? (entry.own && ['booktitle', 'journaltitle', 'publisher'].filter(field => entry.own.includes(field)).map(field => entry[field])[0]);

/**
 * The language of an entry's text, which its lang and punctuation follow: a title with Han characters, Chinese
 * (Chinese punctuation, 《》); kana, Japanese; Hangul, Korean; Cyrillic or Greek letters, its language, or Russian or
 * Greek; Latin letters, its language (if written in them) or English. Without such text, its language.
 */
export function entryLanguage(entry) {
  const language = entry.language, title = sampleText(entry);
  if (!title) return language && (chineseLang(language) || /^(?:ja|ko)(?:-|$)/.test(language) || !nonLatin.test(language)) ? language : 'en';
  if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(title)) return 'ja';
  if (/\p{Script=Hangul}/u.test(title)) return 'ko';
  if (han.test(title)) return chineseLang(language) ? language : 'zh-cn';
  if (/\p{Script=Cyrillic}/u.test(title)) return language ?? 'ru';
  if (/\p{Script=Greek}/u.test(title)) return language ?? 'el';
  return language && !nonLatin.test(language) ? language : 'en';
}

/** The punctuation of Western and Chinese entries: within and at the end of a sentence, and titles (italic, or 《》). Names: nameSeparator. */
const styles = {
  western: { separator: ', ', stop: '.', title: value => `*${value}*` },
  chinese: { separator: '，', stop: '。', title: value => `《${value}》` },
};

/** An edition: a number as 2nd ed. (“第 2 版” in a Chinese entry), words as written. */
function edition(value, chinese) {
  if (!value) return '';
  if (!/^\d+$/.test(value)) return chinese ? text(value) : t('bibliography_edition', { edition: text(value) });
  if (chinese) return t('bibliography_edition_number', { edition: value });
  const n = Number(value);
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th');
  return t('bibliography_edition', { edition: `${n}${suffix}` });
}

/** A link's text: “pdf” for a PDF file, otherwise the host without www. */
function urlText(value) {
  const url = new URL(value);
  return /\.pdf$/i.test(url.pathname) ? t('bibliography_pdf') : url.hostname.replace(/^www\./, '');
}

/**
 * How an entry or version is written: lang (its text's language), style (its punctuation); ui(text): words of the
 * messages, marked with the messages' language in an entry in another (data with Han characters: field);
 * template(key, { slot: Markdown }): a message whose slots are data, the rest its words.
 */
function context(entry, options) {
  const lang = entryLanguage(entry);
  const chinese = chineseLang(lang);
  // The entry is in the language of the messages (a Chinese entry, with the Chinese messages): no marks needed.
  const sameLanguage = lang.split('-')[0] === messageLanguage().split('-')[0];
  const ui = value => {
    if (!value || sameLanguage) return value;
    const [, before, inner, after] = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    return inner ? before + span(inner, { lang: messageLanguage() }) + after : value;
  };
  const template = (key, slots) => {
    const marker = '\u0000';
    const parts = t(key, Object.fromEntries(Object.keys(slots).map(name => [name, marker + name + marker]))).split(marker);
    return parts.map((part, i) => i % 2 ? slots[part] : ui(part)).join('');
  };
  return { ...options, entry, lang, chinese, sameLanguage, style: chinese ? styles.chinese : styles.western, ui, template };
}

/** A piece of a sentence: its Markdown, its language to mark (undefined: the entry's), its last character (for the full stop). */
const piece = (md, lang, last) => md ? { md, lang, last: last ?? md.at(-1) } : undefined;

/**
 * A sentence: its pieces joined by commas, a full stop in the last piece's language at its end (“。” in Chinese,
 * which typography converts as the text's), none after punctuation that ends a sentence. A piece marked Chinese has
 * its full stop inside it, typeset with it.
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

/** A data field as a piece: in a Western entry, data with Han characters (a publisher, a note) is marked Chinese. */
function field(c, value, md = text(value)) {
  return piece(md, !c.chinese && han.test(value ?? '') ? hanLang : undefined, value?.at(-1));
}

/**
 * A person's link, or undefined: the article a page field names (page: false, none) is a wiki link; otherwise
 * resolvePersonLink(name) says: { target } (a wiki link's target, a name's key) or { url } (an address). Wiki links
 * are reported to onWikiLink(target, offset), as [[links]] in the text are.
 */
function personLink(c, name, role) {
  if (name.page === false) return;
  // Without wiki links, page fields and resolvePersonLink's { target } link nowhere.
  if (!c.wikiLinks && (name.page || !c.resolvePersonLink)) return;
  const offset = c.entry.offsets?.[role];
  if (name.page) {
    const target = normalizeTarget(name.page), shown = plainName(name.page), source = typesetText(String(name.page).trim());
    c.onWikiLink?.(target, offset);
    return { target, name: shown, ...(source !== shown ? { source } : {}) };
  }
  const found = c.resolvePersonLink?.(name);
  if (found?.target && c.wikiLinks) {
    c.onWikiLink?.(found.target, offset);
    return { target: found.target, name: found.target };
  }
  if (found?.url) return { url: found.url };
}
const linked = (label, link) => {
  if (!link) return label;
  if (link.url) return `[${label}](${destination(link.url)})`;
  return nodeLink(label, { type: 'wiki', target: link.target, name: link.name, source: link.source });
};

/** A name at an entry's start: the family name (a Chinese or literal name whole) in bold (not with a label), linked to the person's article. */
function leadName(c, name, bold, role) {
  const page = personLink(c, name, role);
  const link = value => linked(value, page);
  // Bold inside the link: ** right after the names' marker and before [ would not open emphasis.
  const strong = value => bold ? `**${value}**` : value;
  if (name.literal || isChineseName(name)) {
    const whole = link(strong(text(fullName(name))));
    return !c.chinese && han.test(fullName(name)) ? span(whole, { lang: hanLang }) : whole;
  }
  return link(strong(text(name.family))) + (name.given ? `, ${text(name.given)}` : '');
}
/** Names in a sentence, in natural order (editors, translators, an online source's authors). */
function nameList(c, names, role) {
  return names.map(name => {
    const shown = text(naturalName(name));
    const md = linked(shown, personLink(c, name, role));
    return !c.chinese && han.test(naturalName(name)) ? span(md, { lang: hanLang }) : md;
  }).join(nameSeparator(names));
}

/** The title as a piece: the title (in italics or 《》), the translated title in brackets, the work's language (in Russian). */
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
    parts.push(`(${c.ui(t('bibliography_language', { language: languageStem(entry.language) }))})`);
  }
  const last = parts.length > 1 ? parts.at(-1).at(-1) : entry.title ? entry.title.at(-1) : ']';
  return piece(parts.join(' '), undefined, last);
}

const publication = (c, entry) => [entry.publisher, entry.location].filter(Boolean).map(value => field(c, value));
const series = (c, entry) => entry.series ? field(c, entry.series, [text(entry.series), text(entry.volume)].filter(Boolean).join(' ')) : undefined;
const editorsBy = (c, entry) => entry.editor.length ? piece(c.template('bibliography_edited_by', { names: nameList(c, entry.editor, 'editor') })) : undefined;
const titled = (c, value) => value ? c.style.title(text(value)) : '';
const editors = (c, entry) => entry.editor.length ? piece(c.template('bibliography_editors', { names: nameList(c, entry.editor, 'editor') })) : undefined;

/**
 * Each type's sentences (each of pieces) from its fields; identity, citations and their letters are not changed here.
 * contained: “In” before an incollection's book (not for a collected version).
 */
export const bibliographyFormats = {
  // With authors, the editors after the title (without, the editors are at the entry's start).
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
  // A thesis: degree phd or master shown in the usual words, other words as written, none: Thesis.
  thesis: (c, entry) => [[titlePiece(c, entry, true)], [
    piece({ phd: t('bibliography_thesis_phd'), master: t('bibliography_thesis_master') }[entry.degree?.toLowerCase()]
      ?? (entry.degree ? text(entry.degree) : t('bibliography_thesis'))),
    field(c, entry.institution), field(c, entry.location),
  ]],
  preprint: (c, entry) => [[titlePiece(c, entry)]],
  // An online source starts with its site; its authors after the title, “by”; its address in the link.
  online: (c, entry) => [[titlePiece(c, entry)],
    [entry.author.length && !entry.own ? piece(c.template('bibliography_by', { names: nameList(c, entry.author, 'author') })) : undefined]],
};

/** What follows the sentences: translators, notes (inline Markdown), links and the date of access. */
function details(c, entry) {
  const own = name => !entry.own || entry.own.includes(name);
  const prose = name => entry[name] && own(name)
    ? field(c, entry[name], c.render && entry.offsets?.[name] !== undefined ? c.render(entry[name], entry.offsets[name]) : text(entry[name]))
    : undefined;
  const translators = entry.translator.length && own('translator')
    ? piece(c.template('bibliography_translated_by', { names: nameList(c, entry.translator, 'translator') })) : undefined;
  const links = [];
  if (entry.doi && own('doi')) links.push(`[doi](https://doi.org/${destination(entry.doi)})`);
  if (entry.arxiv && own('arxiv')) links.push(`[arXiv:${text(entry.arxiv)}](https://arxiv.org/abs/${destination(entry.arxiv)})`);
  if (entry.zbmath && own('zbmath')) links.push(`[zbMATH](https://zbmath.org/${destination(entry.zbmath)})`);
  if (entry.url && own('url')) links.push(`[${text(urlText(entry.url))}](${destination(entry.url)})`);
  if (entry.urldate && own('urldate')) links.push(c.ui(t('bibliography_accessed', { date: text(entry.urldate) })));
  return [sentence(c, [translators]), sentence(c, [prose('howpublished'), prose('note')]),
    span(links.join(' · '), { kind: 'links' })];
}

/** An entry's paragraph: its label, the names at its start (or its site or title), the date in parentheses, then its sentences, notes and links. */
function entryParagraph(entry, options) {
  const c = context(entry, options);
  const names = citationPolicy.names(entry);
  const label = entry.displayLabel ? span(text(entry.displayLabel), { kind: 'label', boundary: true }) : '';
  const lead = entry.type === 'online' ? `**${text(entry.site)}**`
    : names.length ? span(names.map(name => leadName(c, name, !label, entry.author.length ? 'author' : 'editor')).join(nameSeparator(names)), { kind: 'names' })
    : text(entry.shorttitle || entry.title || entry.translatedtitle);
  const last = entry.type === 'online' ? entry.site : names.length ? fullName(names.at(-1)) : entry.shorttitle || entry.title || entry.translatedtitle;
  // The date as the citation has it (words for a preprint or no date), only the letter for an online source; with a label, the letter is on the label.
  const suffix = entry.label ? '' : entry.suffix ?? '';
  const date = entry.type === 'online' ? suffix
    : entry.type !== 'preprint' && entry.year ? text(entry.year) + suffix
    : withSuffix(c.ui(entry.type === 'preprint' ? t('bibliography_preprint') : t('bibliography_no_date')), suffix);
  const heading = label + lead + (date ? ` (${date})${c.style.stop}` : /[.!?。．]$/u.test(last) ? '' : c.style.stop);
  return [heading, ...bibliographyFormats[entry.type](c, entry).map(pieces => sentence(c, pieces)), ...details(c, entry)].filter(Boolean).join(' ');
}

/** What a version is: “英译” (a translation), “俄文原文” (the original), “第 2 版” (an edition), “重印”, “收入”. */
function relationText(version) {
  const language = version.language && languageStem(version.language);
  switch (version.relation) {
    case 'translation': return language ? t('bibliography_translation', { language }) : t('bibliography_translation_unknown');
    case 'original': return language ? t('bibliography_original', { language }) : t('bibliography_original_unknown');
    case 'edition': return !version.edition ? t('bibliography_other_edition')
      : /^\d+$/.test(version.edition) ? t('bibliography_edition_number', { edition: version.edition }) : version.edition;
    case 'reprint': return t('bibliography_reprint');
    default: return t('bibliography_collected');
  }
}

/** A version's paragraph: what it is and its date in bold, then its own data only (not its entry's authors, title…). */
function versionParagraph(version, options) {
  const own = name => version.own.includes(name);
  const c = context(version, options);
  const label = version.displayLabel ? span(text(version.displayLabel), { kind: 'label', boundary: true }) : '';
  const relation = span(markdownText(relationText(version)), { kind: 'relation', lang: c.sameLanguage ? undefined : messageLanguage() });
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
 * A bibliography block's list, where the block is: each entry a container with its anchor and language and one
 * paragraph, each version a container after it. options: mark(entry), a source-line mark at its start (an editor's
 * preview, source-lines.mjs); render(value, offset), inline Markdown converted (notes); resolvePersonLink(name) and
 * onWikiLink(target, offset), people's links (personLink); fail(message, offset), an error.
 */
export function bibliographyMarkdown(entries, { mark = () => '', ...options } = {}) {
  const open = (item, version) => nodeMarker({ type: 'bibliographyEntry', kind: version ? 'version' : 'entry', id: item.anchor, lang: entryLanguage(item) }) + '\n\n';
  const close = () => nodeMarker({ type: 'bibliographyEntryEnd' }) + '\n\n';
  return '\n' + nodeMarker({ type: 'bibliography' }) + '\n\n' + entries.map(entry => {
    const own = { ...options, key: entry.key };
    return open(entry) + mark(entry) + entryParagraph(entry, own) + '\n\n'
      + entry.versions.map(version => open(version, true) + versionParagraph(version, own) + '\n\n' + close()).join('') + close();
  }).join('') + nodeMarker({ type: 'bibliographyEnd' }) + '\n\n';
}
