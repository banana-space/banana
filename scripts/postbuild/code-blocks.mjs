import { parseFragment } from 'parse5';
import { highlightCodeHTML, highlightsLanguage } from '../shared/markdown-language.mjs';

// Code blocks in the site's Markdown dialect, YAML and TeX (layouts/partials/code-block.html leaves them as
// <pre class="code-block" data-highlight="…">), highlighted as the online editor highlights them: the same
// grammar, the same classes (assets/scss/_highlight.scss). Other languages are Chroma's, at build time.

function* walk(node) {
  yield node;
  for (const child of node.childNodes ?? []) yield* walk(child);
}
const textOf = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textOf).join('');

/** Highlights the document's marked code blocks in place. */
export function highlightCodeBlocks(document) {
  for (const node of walk(document)) {
    if (node.tagName !== 'pre') continue;
    const language = node.attrs.find(attr => attr.name === 'data-highlight')?.value;
    const code = node.childNodes.find(child => child.tagName === 'code');
    if (!language || !code || !highlightsLanguage(language)) continue;
    const fragment = parseFragment(highlightCodeHTML(textOf(code), language));
    for (const child of fragment.childNodes) child.parentNode = code;
    code.childNodes = fragment.childNodes;
  }
  return document;
}
