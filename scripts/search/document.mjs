import { serialize } from 'parse5';
import { mathText } from '../shared/math-text.mjs';
import { encodeSearchData } from './data.mjs';
import { titleFilters, titleKey } from '../../static/js/search-query.js';

/** Site-relative URL: the browser adds the directory pagefind.js is served from (e.g. /docs/). */
export const siteURL = (url, base) => url.startsWith(base) ? `/${url.slice(base.length)}` : url;

// Builds the search-only HTML for one published page. Pagefind indexes this
// document instead of the published HTML, so the site pages carry no search
// attributes or hidden text. The published parse5 tree is never mutated.

// Navigation, decoration and repeated components; these classes are produced by the templates.
export const EXCLUDED_CLASSES = [
  'toc-shell', 'navbox', 'notice', 'collection-sidebar', 'collection-navigation', 'collection-children',
  'collection-pagination', 'article-footer', 'heading-link', 'redirect-source', 'terms-title', 'term-language',
  'term-gender', 'tikz-rendered', 'tikz-source', 'category-ancestors', 'title-prefix',
];
const excludedTags = new Set(['script', 'style', 'svg', 'nav', 'button', 'template', 'noscript']);
const HTML = 'http://www.w3.org/1999/xhtml';

const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const classes = node => new Set((attr(node, 'class') ?? '').split(/\s+/).filter(Boolean));
const elements = node => (node.childNodes ?? []).filter(child => child.tagName);
function find(node, test) {
  if (test(node)) return node;
  for (const child of elements(node)) {
    const found = find(child, test);
    if (found) return found;
  }
}
const text = value => ({ nodeName: '#text', value });
const element = (tagName, attributes, childNodes = []) => ({
  nodeName: tagName, tagName, namespaceURI: HTML,
  attrs: Object.entries(attributes).filter(([, value]) => value !== undefined).map(([name, value]) => ({ name, value: String(value) })),
  childNodes,
});

/**
 * Copy a subtree in its search form: formulas become linear text, TikZ and
 * navigation disappear, theorem titles become headings so Pagefind returns
 * them as sub-results with their anchors.
 */
function searchCopy(node) {
  if (node.nodeName === '#text') return [text(node.value)];
  if (!node.tagName) return [];
  const names = classes(node);
  if (names.has('math-rendered')) {
    if (names.has('tikz-rendered') || names.has('tikz-source')) return [];
    const value = mathText(node);
    return value ? [text(` ${value} `)] : [];
  }
  if (excludedTags.has(node.tagName) || EXCLUDED_CLASSES.some(name => names.has(name))
    || attr(node, 'hidden') !== undefined || attr(node, 'aria-hidden') === 'true') return [];
  const children = (node.childNodes ?? []).flatMap(searchCopy);
  if (names.has('theorem-block')) {
    // The block's id moves to its title heading; the block keeps none.
    const id = attr(node, 'id');
    const title = children.find(child => child.tagName === 'p' && child.isTheoremTitle);
    if (title) Object.assign(title, element('h6', { id }, title.childNodes));
    return [element('div', {}, children)];
  }
  const copy = element(node.tagName, {}, children);
  if (names.has('theorem-title')) copy.isTheoremTitle = true;
  for (const name of ['id', 'lang', 'alt']) {
    const value = attr(node, name);
    if (value !== undefined) copy.attrs.push({ name, value });
  }
  if (names.has('bibliography')) copy.attrs.push({ name: 'data-pagefind-weight', value: '0.5' });
  return [copy];
}

// Chinese text is indexed one character per word. Pagefind's indexer would
// split it with its own dictionary into long words (奇异上同调), and since it
// matches query words only as prefixes, 上同调 or 同调 would never find them;
// splitting by Intl.Segmenter instead still depends on context (上同调和 splits
// as 上|同|调和). With single characters, static/js/search-query.js searches a
// Chinese term as an exact phrase of its characters, which is exactly
// substring matching. The separator is a zero-width space: Pagefind keeps it as
// a word boundary and drops it from excerpts; the browser removes it from titles.
export const WORD_SEPARATOR = '\u200b';
const cjk = '[\\p{Script=Han}\\u3000-\\u303f\\uff00-\\uffef]';
const boundaries = new RegExp(`(?<=\\S)(?=${cjk})|(?<=${cjk})(?=\\S)`, 'gu');

/** Separate every Chinese character (and full-width punctuation) from its neighbours. */
export const separateWords = value => value.replace(boundaries, WORD_SEPARATOR);
const separated = nodes => nodes.map(node => node.nodeName === '#text'
  ? text(separateWords(node.value))
  : { ...node, childNodes: separated(node.childNodes ?? []) });

const plain = nodes => nodes.map(node => node.nodeName === '#text' ? node.value : plain(node.childNodes ?? [])).join('');
const squash = value => value.replace(/\s+/g, ' ').trim();

/** Title, number and rendered title HTML from the page's <h1>. */
function pageTitle(heading) {
  const link = find(heading, node => classes(node).has('title-link')) ?? heading;
  const number = squash(plain(elements(link).filter(node => classes(node).has('section-number')).flatMap(searchCopy)));
  const parts = (link.childNodes ?? []).filter(node => !node.tagName || !['section-number', 'title-prefix'].some(name => classes(node).has(name)));
  const html = parts.map(node => serialize({ nodeName: '#document-fragment', childNodes: [node] })).join('').trim();
  return { number, title: squash(plain(parts.flatMap(searchCopy))), html };
}

/** Breadcrumb links shown above the page title: collection ancestors or parent categories. */
function breadcrumb(document, base) {
  const container = find(document, node => ['collection-breadcrumbs', 'category-ancestors'].some(name => classes(node).has(name)));
  if (!container) return [];
  const links = [];
  (function collect(node) {
    for (const child of elements(node)) {
      if (child.tagName === 'a') links.push({ title: squash(plain(searchCopy({ ...child, attrs: [] }))), url: siteURL(attr(child, 'href') ?? '', base) });
      else collect(child);
    }
  })(container);
  return links;
}

/**
 * Search document for a manifest entry. Returns undefined when the page has no
 * indexable container (which the caller reports as an error).
 */
export function searchDocument(document, entry) {
  const html = find(document, node => node.tagName === 'html');
  const lang = attr(html, 'lang') ?? 'zh';
  let heading, body;
  if (entry.kind === 'category') {
    const section = find(document, node => node.tagName === 'section' && classes(node).has('list'));
    if (!section) return;
    heading = find(section, node => node.tagName === 'h1');
    const description = find(section, node => classes(node).has('list-description'));
    body = description ? searchCopy(description) : [];
  } else {
    const article = find(document, node => node.tagName === 'article');
    if (!article) return;
    heading = find(article, node => node.tagName === 'h1');
    body = (article.childNodes ?? []).filter(node => node.tagName !== 'header').flatMap(searchCopy);
  }
  if (!heading) return;
  const { number, title, html: titleHTML } = pageTitle(heading);
  // Pagefind searches every metadata field. Only the title and the keywords
  // (readings) should match; display data is one encoded field (see data.mjs).
  const data = {
    number, kind: entry.kind, titleHTML, breadcrumb: breadcrumb(document, entry.base ?? '/'),
    aliases: entry.aliases, lead: squash(plain(body)).slice(0, 200),
  };
  // Aliases follow the title in the indexed <h1>: Pagefind's exact phrases (all
  // Chinese terms, see search-query.js) match page text only, never metadata.
  // The browser removes this line from excerpts (headingText in search.js).
  const headingText = [number, title, ...entry.aliases].filter(Boolean).join(' ');
  const meta = {
    title: separateWords(title), keywords: entry.readings.join(' '),
    data: encodeSearchData(data),
  };
  const head = [
    element('meta', { charset: 'utf-8' }),
    ...Object.entries(meta).map(([key, value]) => element('meta', { 'data-pagefind-meta': `${key}[content]`, content: value })),
    element('meta', { 'data-pagefind-filter': 'kind[content]', content: entry.kind }),
    // 百科条目的标题与别名：整名与前缀作为筛选值，搜索时开头匹配的条目排在最前（search-query.js）。
    // 标题与别名分开（exact、prefix 与 aliasexact、aliasprefix），标题匹配排在别名匹配之前；
    // 拼音读音（readingexact，如 guan、shangtongdiao）整个吻合的条目排在名称匹配之后、其他结果之前。
    ...(entry.kind === 'wiki' ? [...new Set([[title, ''], ...entry.aliases.map(alias => [alias, 'alias'])].flatMap(([name, kind]) => {
      const { exact, prefixes } = titleFilters(name);
      return [`${kind}exact\u0000${exact}`, ...prefixes.map(prefix => `${kind}prefix\u0000${prefix}`)];
    }).concat(entry.readings.map(reading => `readingexact\u0000${titleKey(reading)}`)))].filter(value => value.split('\u0000')[1]).map(value => {
      const [name, content] = value.split('\u0000');
      return element('meta', { 'data-pagefind-filter': `${name}[content]`, content });
    }) : []),
    ...entry.categories.map(category => element('meta', { 'data-pagefind-filter': 'category[content]', content: category })),
  ];
  const main = element('main', { 'data-pagefind-body': '' }, [
    element('h1', { id: 'page-title' }, [text(separateWords(headingText))]),
    ...separated(body),
  ]);
  const page = element('html', { lang }, [element('head', {}, head), element('body', {}, [main])]);
  return `<!doctype html>${serialize({ nodeName: '#document', childNodes: [page] })}`;
}
