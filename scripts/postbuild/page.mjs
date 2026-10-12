import { normalizeDocument } from './typography-html.mjs';
import { decodeLine, MARK_OPEN, markPattern } from '../prebuild/source-lines.mjs';

/**
 * The passes every page goes through, in order, on its parse5 tree: TikZ diagrams,
 * then typography. postbuild and the preview service share them so their output agrees.
 * timer (optional) is a stepTimer from shared/timing.mjs. sourceLines (the editor's preview only)
 * turns the preprocessing's source-line marks into empty <span data-source-line="N"> first.
 * record (optional, { fonts, diagrams }, sets) collects the TikZ fonts and diagram cache keys the page uses.
 */
export async function finishDocument(document, file, { text, diagrams, timer, sourceLines = false, record }) {
  const time = timer ?? { time: (_name, action) => action(), timeSync: (_name, action) => action() };
  if (sourceLines && text.includes(MARK_OPEN)) placeSourceLines(document);
  if (text.includes('tikz-source')) await time.time('tikz', () => diagrams.renderDocument(document, file, record));
  // Imported only for pages with such code blocks (the help pages): the grammar is CodeMirror's.
  if (text.includes('data-highlight=')) {
    const { highlightCodeBlocks } = await import('./code-blocks.mjs');
    time.timeSync('code blocks', () => highlightCodeBlocks(document));
  }
  time.timeSync('typography', () => normalizeDocument(document));
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
