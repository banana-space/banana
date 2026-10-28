import { problem } from '../messages.mjs';

/**
 * The syntax layer's output: a document, { markdown, nodes }. The Markdown is CommonMark (with GFM's tables,
 * strikethrough and footnotes, as markdown-it reads it); the dialect's own constructs are typed nodes in the table,
 * standing in the Markdown in one of two forms:
 *
 * - @@node:N:node@@, node N of the table: formulas (a display formula splits its paragraph, as a block), headings'
 *   numbers and anchors (after the heading's text), a TikZ figure's caption (after the fence's language), and
 *   everything the renderer writes as HTML of its own: environments, list labels and targets, bibliography
 *   containers, authors' tags. One alone in its paragraph stands without the paragraph. An author's paired tag
 *   (<see>…</see>) and a list label are an opening and a closing node, and what lies between is the node's inner
 *   text, rendered on its own.
 * - [text](bananamark:N): links (wiki links, references, citations), whose text is Markdown in its place.
 *
 * Text inside nodes (a link's caption, an environment's title) is Markdown of the same document, its nodes in the
 * same table.
 *
 * Node types:
 * - math { tex, display, id? } (id: a numbered formula's label);
 * - heading { id, classes, attributes, number?, unnumbered? } (attributes: [key, value] pairs the author wrote;
 *   unnumbered: a level-two heading without a number);
 * - caption { text } (a TikZ figure's);
 * - wiki { target, name, source?, caption? } (target: the lookup key; name: how a missing article is shown;
 *   source: the target as written, the title of the article should someone create it);
 * - reference { id, text?, caption?, title?, page? } and citation { id, key, caption?, page? } (page: the key of
 *   another page of the book);
 * - environment { kind, group, caption, title, bare, id } and environmentEnd;
 * - itemLabel { outer, block } and itemLabelEnd; itemTarget { id };
 * - bibliography and bibliographyEnd; bibliographyEntry { kind, id, lang } and bibliographyEntryEnd;
 *   bibliographySpan { class, lang, boundary } and bibliographySpanEnd;
 * - tag { name, closing, parameters: { positional, named, isNamed } } (an author's tag; a named parameter with
 *   markdown: true holds Markdown of the document).
 *
 * The table a node goes into is the one the entry point (transformDocument, transformFragment) runs with (withNodes).
 */

let table;

/** Runs action with nodes as the table new nodes go into; calls nest. */
export function withNodes(nodes, action) {
  const previous = table;
  table = nodes;
  try { return action(); } finally { table = previous; }
}

/** Runs action, which returns Markdown, with a new table: the document, { markdown, nodes }. */
export function newDocument(action) {
  const nodes = [];
  return { markdown: withNodes(nodes, action), nodes };
}

/** Adds node to the table: its index. */
export function addNode(node) {
  if (!table) throw new Error('bananamark: a node outside transformDocument or transformFragment');
  table.push(node);
  return table.length - 1;
}

export const marker = index => `@@node:${index}:node@@`;
/** Markers in Markdown, their index the first group. */
export const markerPattern = /@@node:(\d+):node@@/g;
/** A marker for a new node. */
export const nodeMarker = node => marker(addNode(node));
export const linkDestination = index => `bananamark:${index}`;
/** A link to a new node, its text label (Markdown). */
export const nodeLink = (label, node) => `[${label}](${linkDestination(addNode(node))})`;
/** The node a link's destination stands for (its index), or undefined. */
export const linkNode = destination => destination.match(/^bananamark:(\d+)$/)?.[1];

const reserved = /@@node:|bananamark:\d/;
/** Where text holds what only bananamark writes (the forms above): { offset, message }, or undefined. */
export function reservedNotation(text) {
  const match = reserved.exec(text);
  if (match) return { offset: match.index, message: problem('reserved_notation', { text: match[0] }) };
}

/**
 * The document with every node written out where it stands, for reading (tests, debugging): ⟦type field="…"⟧
 * (fields left out when empty, false or 0; an author's tag as ⟦name …⟧, ⟦/name⟧), with the Markdown in its fields
 * written out too.
 */
export function inspectDocument({ markdown, nodes }) {
  const expand = text => String(text)
    .replace(/\]\(bananamark:(\d+)\)/g, (_, index) => `](${show(nodes[index])})`)
    .replace(/@@node:(\d+):node@@/g, (_, index) => show(nodes[index]));
  const show = node => {
    if (!node) return '⟦missing⟧';
    if (node.type === 'tag') {
      const { positional, named } = node.parameters;
      return `⟦${node.closing ? '/' : ''}${node.name}${[...positional, ...Object.entries(named).map(([key, value]) => `${key}=${JSON.stringify(expand(value))}`)].map(part => ' ' + part).join('')}⟧`;
    }
    const { type, ...fields } = node;
    const shown = Object.entries(fields).filter(([, value]) => value !== undefined && value !== '' && value !== false && value !== 0 && !(Array.isArray(value) && !value.length))
      .map(([key, value]) => `${key}=${JSON.stringify(typeof value === 'string' ? expand(value) : value)}`);
    return `⟦${type}${shown.length ? ' ' + shown.join(' ') : ''}⟧`;
  };
  return expand(markdown);
}

/** Markdown of the document being written, described (inspectDocument): for comparing two pieces of it. */
export const describeMarkdown = markdown => inspectDocument({ markdown, nodes: table });
