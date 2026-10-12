import { parse, serialize } from 'parse5';
import { normalizeTree } from '../shared/typography.mjs';

/** Normalize a parsed parse5 document in place. */
export function normalizeDocument(document) {
  normalizeTree(document, {
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
  });
  return document;
}

export function normalizeHTML(html) {
  return serialize(normalizeDocument(parse(html)));
}
