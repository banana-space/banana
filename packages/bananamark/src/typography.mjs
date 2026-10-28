import { parseFragment, serialize } from 'parse5';
import { normalizeTree } from './syntax/typography.mjs';

/**
 * The typography of Chinese text (syntax/typography.mjs) on HTML, through parse5: the renderer's output, or (a
 * site's own) a whole page. options: { lang (of the root, default en; lang attributes in the HTML over it),
 * typography: { convertFullStop, spaceQuotes } as the processor's option (false: nothing changes), skip } (skip(node):
 * an element left as it is, a parse5 node).
 */

/** normalizeTree's adapter for parse5's tree. */
export const parse5Adapter = {
  tag: node => node.tagName,
  text: node => node.nodeName === '#text' ? node.value : undefined,
  children: node => node.childNodes ?? [],
  attr: (node, name) => node.attrs.find(attr => attr.name === name)?.value,
  setAttr: (node, name, value) => {
    const attr = node.attrs.find(attr => attr.name === name);
    if (attr) attr.value = value;
    else node.attrs.push({ name, value });
  },
  setText: (node, text) => { node.value = text; },
  insertBefore: (parent, before, text) => {
    const node = { nodeName: '#text', value: text, parentNode: parent };
    parent.childNodes.splice(parent.childNodes.indexOf(before), 0, node);
  },
};

/** Typesets a parse5 tree (a document or a fragment) in place: the tree. */
export function typesetTree(tree, { lang = 'en', typography = {}, skip } = {}) {
  if (typography !== false) normalizeTree(tree, parse5Adapter, { ...typography, lang, skip });
  return tree;
}

/** Typesets HTML, a fragment of a page: the HTML as parse5 writes it. */
export function typesetHTML(html, options = {}) {
  return serialize(typesetTree(parseFragment(html), options));
}
