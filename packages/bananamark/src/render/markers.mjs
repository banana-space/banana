/**
 * A document's markers (../syntax/nodes.mjs: @@node:N:node@@) of nodes the renderer writes as HTML of its own,
 * around parsing (as Hugo treated its shortcodes' placeholders). Before: an opening marker of a node with inner text
 * (an author's paired tag, a list label) and what follows it up to its closing marker become the opening marker
 * alone, the text between kept as the node's inner, unparsed. After: each marker is replaced by its node's HTML, and
 * a marker that is a paragraph of its own with its <p> and </p>.
 */

const markerPattern = /@@node:(\d+):node@@/g;
const expandPattern = /(<p>)?@@node:(\d+):node@@(<\/p>\n?)?/g;

/**
 * What pairs a node's opening and closing markers ({ key, closing }), or undefined for a node that stands alone;
 * tags: the page's HTML-style tags (../syntax/tags.mjs), of which the paired ones pair.
 */
function pairing(node, tags) {
  if (node?.type === 'itemLabel' || node?.type === 'itemLabelEnd') return { key: 'itemLabel', closing: node.type === 'itemLabelEnd' };
  if (node?.type === 'tag' && tags[node.name]?.paired) return { key: node.name, closing: node.closing };
}

const nodeAt = (nodes, index) => {
  if (!nodes[index]) throw new Error(`bananamark: node ${index} is not in the document's table`);
  return nodes[index];
};

/** The Markdown with paired markers taken out: { text, inner }, inner mapping a node's index to its inner text. */
export function extractInner(markdown, nodes, tags) {
  const inner = new Map();
  let text = '', cursor = 0, match;
  const markers = new RegExp(markerPattern.source, 'g');
  while ((match = markers.exec(markdown))) {
    const index = Number(match[1]), pair = pairing(nodeAt(nodes, index), tags);
    if (!pair) continue;
    if (pair.closing) throw new Error(`bananamark: the closing marker of ${pair.key} without an opening one`);
    // The matching closing marker (of the same key, nested ones counted).
    let depth = 1, search;
    const rest = new RegExp(markerPattern.source, 'g');
    rest.lastIndex = match.index + match[0].length;
    while ((search = rest.exec(markdown))) {
      const other = pairing(nodeAt(nodes, Number(search[1])), tags);
      if (other?.key !== pair.key) continue;
      if (other.closing) { if (--depth === 0) break; } else depth++;
    }
    if (!search) throw new Error(`bananamark: ${pair.key} has no closing marker`);
    inner.set(index, markdown.slice(match.index + match[0].length, search.index));
    text += markdown.slice(cursor, match.index + match[0].length);
    cursor = search.index + search[0].length;
    markers.lastIndex = cursor;
  }
  return { text: text + markdown.slice(cursor), inner };
}

/** Puts each node's HTML (render(node, index)) in place of its marker in html. */
export function expandMarkers(html, nodes, render) {
  return html.replace(expandPattern, (match, open, index, close) => {
    const output = render(nodeAt(nodes, Number(index)), Number(index));
    // A paragraph of its own: the node's HTML in its place (its line break, when the HTML ends in one, once).
    if (open && close) return output.endsWith('\n') || !close.endsWith('\n') ? output : `${output}\n`;
    return (open ?? '') + output + (close ?? '');
  });
}
