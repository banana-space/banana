import { parse, serialize } from 'parse5';

/**
 * A page with the whitespace between blocks taken out, and any other whitespace alone (between inline elements)
 * as one space: the generator's templates and Hugo's lay out the same HTML differently (docs/compare.md).
 * Through parse5, which also writes entities and attributes one way.
 */

const blocks = new Set('html head body main article section header footer nav aside div p h1 h2 h3 h4 h5 h6 ul ol li dl dt dd table thead tbody tfoot tr th td blockquote figure figcaption details summary form label title meta link script style pre template dialog iframe noscript button input'.split(' '));

function trim(node) {
  const children = node.childNodes ?? node.content?.childNodes;
  if (!children) return;
  const block = child => child && blocks.has(child.nodeName);
  const container = blocks.has(node.nodeName) || node.nodeName === '#document' || node.nodeName === '#document-fragment';
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    const blank = child.nodeName === '#text' && !child.value.trim();
    if (blank && (block(children[i - 1]) || block(children[i + 1]) || ((i === 0 || i === children.length - 1) && container))) children.splice(i, 1);
    else if (blank && node.nodeName !== 'pre') child.value = ' ';
    else trim(child);
  }
}

export function normalizeWhitespace(html) {
  const document = parse(html);
  trim(document);
  return serialize(document);
}
