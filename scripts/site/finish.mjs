import { parse, parseFragment, serialize } from 'parse5';
import { typesetTree } from 'bananamark/typography';
import { decodeLine, MARK_OPEN, markPattern } from 'bananamark/internal/source-lines.mjs';
import { typography } from '../shared/typography.mjs';
import { searchDocument } from '../search/document.mjs';

/**
 * What every page goes through after the templates, in one parse: the typography of the templates' text (titles,
 * the table of contents, links to categories…; the body, typeset by bananamark already, comes out as it is) and
 * the page's search document. TikZ diagrams come after, in the HTML (bananamark-tikz). The full build
 * (scripts/site.mjs, in worker threads) and the preview service share this, so their pages agree.
 *
 * KaTeX's HTML (half of a page) is taken out before parsing and put back after: typography leaves formulas
 * alone, and the search document reads their MathML.
 */

const katexHTML = '<span class="katex-html" aria-hidden="true">';

/** The end of the span that starts at start (after its closing tag). */
function spanEnd(html, start) {
  const tags = /<span\b|<\/span>/g;
  tags.lastIndex = start;
  let depth = 0;
  for (let match; (match = tags.exec(html));) {
    depth += match[0] === '</span>' ? -1 : 1;
    if (!depth) return tags.lastIndex;
  }
  throw new Error('KaTeX HTML without its end');
}

const setAsidePattern = /<span data-katex-html="(\d+)"><\/span>/g;

/** The HTML with KaTeX's HTML replaced by numbered empty spans, and what they stand for. */
function setAside(html) {
  const parts = [], kept = [];
  let last = 0;
  for (let start = html.indexOf(katexHTML); start >= 0; start = html.indexOf(katexHTML, last)) {
    const end = spanEnd(html, start);
    parts.push(html.slice(last, start), `<span data-katex-html="${kept.length}"></span>`);
    kept.push(html.slice(start, end));
    last = end;
  }
  parts.push(html.slice(last));
  return { html: parts.join(''), kept };
}

/**
 * A page's HTML from the templates, finished: { html, search }. entry: the page's search manifest entry (search is
 * then its search document); sourceLines (the editor's preview) turns the preprocessing's source-line marks into
 * empty <span data-source-line="N"> first.
 */
export function finishPage(raw, { entry, sourceLines = false, timer } = {}) {
  const time = timer ?? { timeSync: (_name, action) => action() };
  const { html, kept } = setAside(raw);
  const document = time.timeSync('parse', () => parse(html));
  if (sourceLines && raw.includes(MARK_OPEN)) placeSourceLines(document);
  // The template's text; the body (typeset by bananamark already) comes out as it is, its mark taken away. Not in the
  // editor's preview: bananamark typeset that body with the source-line marks in it, which part text a second pass
  // joins (a line break between two characters goes once the mark there is an empty span).
  time.timeSync('typography', () => typesetTree(document, { lang: 'zh-cn', typography, ...(sourceLines ? {} : { skip: typesetBody }) }));
  unwrapBodies(document);
  // The title's HTML in the search data as parse5 writes it, as when the whole page was parsed.
  const restore = html => html.replace(setAsidePattern, (_, index) => serialize(parseFragment(kept[index])));
  const search = entry ? time.timeSync('search document', () => searchDocument(document, entry, { restore })) : undefined;
  const finished = time.timeSync('serialize', () => serialize(document).replace(setAsidePattern, (_, index) => kept[index]));
  return { html: finished, search };
}

const typesetBody = node => node.attrs?.some(attribute => attribute.name === 'data-typeset-body');

/** Puts the children of each marked body (see the page template) in its place. */
function unwrapBodies(node) {
  const children = node.childNodes ?? [];
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    if (!typesetBody(child)) { unwrapBodies(child); continue; }
    for (const inner of child.childNodes) inner.parentNode = node;
    children.splice(index, 1, ...child.childNodes);
    index += child.childNodes.length - 1;
  }
}

const HTML = 'http://www.w3.org/1999/xhtml';

/** Marks in the body's text become empty spans; marks anywhere else (attributes, the head) are dropped. */
function placeSourceLines(node, inBody = false) {
  for (const attribute of node.attrs ?? []) if (attribute.value.includes(MARK_OPEN)) attribute.value = attribute.value.replace(markPattern, '');
  const body = inBody || node.nodeName === 'body';
  for (const child of [...node.childNodes ?? []]) {
    if (child.nodeName !== '#text') { placeSourceLines(child, body); continue; }
    if (!child.value.includes(MARK_OPEN)) continue;
    if (!body || ['script', 'style', 'textarea', 'title'].includes(node.nodeName)) { child.value = child.value.replace(markPattern, ''); continue; }
    const replacement = [];
    let last = 0;
    for (const match of child.value.matchAll(markPattern)) {
      if (match.index > last) replacement.push({ nodeName: '#text', value: child.value.slice(last, match.index), parentNode: node });
      replacement.push({ nodeName: 'span', tagName: 'span', namespaceURI: HTML, attrs: [{ name: 'data-source-line', value: String(decodeLine(match[1])) }], childNodes: [], parentNode: node });
      last = match.index + match[0].length;
    }
    if (last < child.value.length) replacement.push({ nodeName: '#text', value: child.value.slice(last), parentNode: node });
    node.childNodes.splice(node.childNodes.indexOf(child), 1, ...replacement);
  }
}
