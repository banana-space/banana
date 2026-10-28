import { createMarkdownParser } from '../markdown/index.mjs';
import { protectedToken, readMath } from './markup.mjs';
import { labelText, readLabelledMarker } from './scan.mjs';

// The widest projected marker: nine digits, ")" and four spaces (CommonMark's limits).
const maxTextColumn = 14;

/** A block at a line's start (a formula, code, a list, a heading…): a label is not moved before such text. */
export const blockStart = /^(?:\\\[|\$\$|`{3,}|~{3,}|:::|[-+*][ \t]|\d{1,9}[.)](?:[ \t]|$)|#|>|\||<|\{\{)/;

/**
 * For a labelled marker with no text after it on its line (lineEnd: the line's end): where the next line's text
 * starts (after indentation and quote marks), when it is a paragraph's, for the label to go there; otherwise -1, the
 * label staying on the marker's line (structure.mjs).
 */
export function movedLabelStart(source, lineEnd) {
  if (lineEnd >= source.length) return -1;
  const next = lineEnd + 1 + source.slice(lineEnd + 1).match(/^[ \t>]*/)[0].length;
  return next < source.length && source[next] !== '\n' && !blockStart.test(source.slice(next, next + 10)) && !readLabelledMarker(source, next) ? next : -1;
}

/**
 * A labelled list item's marker ((a), (iii), A1)…) in the projection: an ordered list's marker as wide, 0), 00)…, so
 * that CommonMark decides the lists' structure: it does not start at 1, so a new list cannot interrupt a paragraph,
 * while the list's next items can. The item's text column (its continuation lines' indentation) is where the text
 * after the label starts, at most column 14. The marker read from marker; consumed: the length of the source
 * replaced; the result: the projection's marker.
 */
function projectedMarker(source, marker) {
  const width = [...source.slice(marker.start, marker.end)].length;
  const spaces = source.slice(marker.end).match(/^[ \t]*/)[0];
  const rest = source.slice(marker.end + spaces.length).match(/^[^\n]*/)[0];
  if (!rest) {
    // Nothing after the marker on its line: its text is on the next lines, one column after it. Unless that
    // text is a paragraph's, the label stays on the marker's line in the Markdown given to the renderer, so the item
    // does not start with a blank line (which would end it at a blank line, its indented lines becoming code
    // after the list): an opaque token stands for the label.
    const text = `${'0'.repeat(Math.min(9, Math.max(1, width - 1)))})`;
    const standIn = movedLabelStart(source, marker.end + spaces.length) < 0 ? ' @@node:0:node@@' : '';
    return { text, standIn, consumed: marker.end + spaces.length - marker.start };
  }
  // Five spaces or more: the item starts with indented code, one space after the marker (as in CommonMark).
  const after = spaces.length >= 5 ? 1 : spaces.length;
  const column = Math.min(width + after, maxTextColumn);
  const padding = Math.max(1, column - 10);
  return { text: `${'0'.repeat(column - 1 - padding)})${' '.repeat(padding)}`, consumed: marker.end - marker.start + after };
}

// The renderer's own parser (markdown-it as it emulates Goldmark), its block rules only: the structure found here
// is the one the page is rendered with (tables, footnotes and HTML blocks included).
const blockParser = createMarkdownParser();
const parseBlocks = text => {
  const tokens = [];
  blockParser.block.parse(text, blockParser, {}, tokens);
  return tokens;
};

/** Where the list markers of a line are (offsets in text), after its indentation and quote marks, in order. */
function markerOffsets(text, lineStart) {
  const offsets = [];
  for (let p = lineStart; ;) {
    p += text.slice(p, p + 100).match(/^[ \t]*/)[0].length;
    if (text[p] === '>') { p++; continue; }
    const marker = text.slice(p, p + 12).match(/^(?:[-+*]|\d{1,9}[.)])(?=[ \t\n]|$)/);
    if (!marker) return offsets;
    offsets.push(p);
    p += marker[0].length;
  }
}

/**
 * The block structure of Markdown text as the renderer parses it: a tree of nodes { type, token, children,
 * parent, marker? } from markdown-it's tokens (type: the token's type without _open, such as list_item,
 * ordered_list, blockquote, paragraph, fence, code_block; token.map: its lines, the last exclusive; marker: a list
 * item's marker's offset in text).
 */
export function blockTree(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === '\n') starts.push(i + 1);
  const root = { type: 'document', children: [] }, stack = [root];
  for (const token of parseBlocks(text)) {
    if (token.nesting === -1) { stack.pop(); continue; }
    const parent = stack.at(-1);
    const node = { type: token.type.replace(/_open$/, ''), token, children: [], parent };
    if (node.type === 'list_item') {
      // The item's marker: on its line, after those of the items around it that start there.
      const line = token.map[0];
      const before = stack.filter(open => open.type === 'list_item' && open.token.map[0] === line).length;
      node.marker = markerOffsets(text, starts[line])[before];
    }
    parent.children.push(node);
    if (token.nesting === 1) stack.push(node);
  }
  return root;
}
/** Calls visit on node and every node below it, in document order. */
export const walk = (node, visit) => { visit(node); for (const child of node.children) walk(child, visit); };

/**
 * The page's lists as Markdown reads them (their tree gives items their numbers, not the numbers written after the
 * first), from a projection of the source read for its block structure only (the renderer's parser), offsets mapped
 * back to the source. Formulas are opaque tokens in it, ::: fences boundaries like an HTML div's.
 *
 * labelled: the labelled markers that are list items: { start, end } (the span of the source replaced), marker (the
 * Markdown marker), standIn (what stands for the label after the marker in the projection, when its line has no
 * text; otherwise ''), label, parenthesized. problems: errors { key, offset }, for the caller to report. items: list
 * items declaring a label ({@label}); codeBlocks, mathFences, paragraphs: where those are.
 */
export function parseLists(source) {
  let projection = '', cursor = 0;
  const opaque = [], segments = [];
  const candidates = new Map(); // Where a labelled marker is in the projection → the marker.
  function append(value, sourceStart, literal = true) {
    if (!value) return;
    segments.push({ start: projection.length, end: projection.length + value.length, sourceStart, literal });
    projection += value;
  }
  function replace(start, end, value) {
    append(source.slice(cursor, start), cursor);
    append(value, start, false);
    cursor = end;
  }
  /** The labelled markers after a line's container markers (quotations, lists), as ordered lists' in the projection: where they end. */
  function labelledMarkers(lineStart) {
    let p = lineStart, found;
    for (;;) {
      const q = p + source.slice(p, p + 100).match(/^[ \t]*/)[0].length;
      if (source[q] === '>') { p = q + 1; continue; }
      const plain = source.slice(q, q + 12).match(/^(?:[-+*]|\d{1,9}[.)])(?=[ \t])/);
      if (plain) { p = q + plain[0].length; continue; }
      const marker = readLabelledMarker(source, q);
      if (!marker) return found;
      const projected = projectedMarker(source, { start: q, end: marker.end });
      append(source.slice(cursor, q), cursor);
      candidates.set(projection.length, { ...marker, start: q, end: q + projected.consumed, marker: projected.text, standIn: projected.standIn ?? '', delimiter: projection.length + projected.text.indexOf(')') });
      append(projected.text, q, false);
      cursor = found = p = q + projected.consumed;
      append(projected.standIn, cursor, false);
    }
  }
  for (let i = 0; i < source.length;) {
    if (i === 0 || source[i - 1] === '\n') {
      const end = labelledMarkers(i);
      if (end !== undefined) {
        i = end;
        continue;
      }
    }
    const protectedEnd = protectedToken(source, i, { indentedCode: false });
    if (protectedEnd) {
      opaque.push([i, protectedEnd]);
      i = protectedEnd;
      continue;
    }
    const math = readMath(source, i);
    if (math) {
      // In the Markdown written, a formula is a node (@@node:N:node@@): a blank line in its TeX does not end a list.
      replace(i, math.end, '@@node:0:node@@');
      i = math.end;
      continue;
    }
    if (i === 0 || source[i - 1] === '\n') {
      const fence = source.slice(i).match(/^ {0,3}:{3,}[^\n]*(?:\n|$)/);
      if (fence) {
        replace(i, i + fence[0].length, /^ {0,3}:{3,}\s*$/.test(fence[0]) ? '\n</div>\n\n' : '\n<div>\n\n');
        i += fence[0].length;
        continue;
      }
    }
    i++;
  }
  append(source.slice(cursor), cursor);
  const originalOffset = offset => {
    const segment = segments.find(part => offset >= part.start && offset < part.end);
    return segment ? segment.sourceStart + (segment.literal ? offset - segment.start : 0) : source.length;
  };
  const starts = [0];
  for (let i = 0; i < projection.length; i++) if (projection[i] === '\n') starts.push(i + 1);
  const ordered = node => node.type === 'ordered_list';
  const labelledItem = node => candidates.get(node.marker);
  /** Labelled items in a list with numbered ones (next to each other, with the same delimiter): their markers. */
  function mixed(document) {
    const found = [];
    walk(document, node => {
      if (!ordered(node)) return;
      const kinds = node.children.filter(item => item.type === 'list_item').map(labelledItem);
      if (kinds.some(Boolean) && !kinds.every(Boolean)) found.push(...kinds.filter(Boolean));
    });
    return found;
  }
  let document = blockTree(projection);
  const problems = [];
  // A labelled list is 0) …; right next to a 1) list it becomes 0. …, so that the two are different lists.
  const flipped = mixed(document);
  if (flipped.length) {
    for (const marker of flipped) {
      projection = projection.slice(0, marker.delimiter) + '.' + projection.slice(marker.delimiter + 1);
      marker.marker = marker.marker.replace(')', '.');
    }
    document = blockTree(projection);
    for (const marker of mixed(document)) problems.push({ key: 'labelled_list_mixed', offset: marker.start });
  }
  const items = [], labelled = [], codeBlocks = [], mathFences = new Set(), ordinals = new Map();
  const paragraphs = []; // [start of its first line, end of its last line] in the source (for a formatter).
  const lineStart = offset => source.lastIndexOf('\n', offset - 1) + 1;
  walk(document, node => {
    const { token } = node;
    if (node.type === 'code_block' || node.type === 'fence') {
      // With the container's prefix: the inline layer protects code that is code, not a nested list taken for indented code.
      const start = originalOffset(starts[token.map[0]]);
      codeBlocks.push([lineStart(start), originalOffset(starts[token.map[1]] ?? projection.length)]);
      // A math fence in a list item may be indented beyond the item's content: its line's start, for structure.mjs.
      if (node.type === 'fence' && /^math(?:\s|$)/.test(token.info ?? '')) mathFences.add(lineStart(start));
    }
    if (node.type === 'paragraph') {
      const start = originalOffset(starts[token.map[0]]);
      const last = originalOffset(starts[token.map[1] - 1]);
      const end = source.indexOf('\n', last);
      paragraphs.push([lineStart(start), end < 0 ? source.length : end]);
    }
    if (node.type !== 'list_item' || !ordered(node.parent)) return;
    const siblings = node.parent.children.filter(item => item.type === 'list_item');
    const previous = siblings[siblings.indexOf(node) - 1];
    const marker = labelledItem(node);
    if (marker) {
      ordinals.set(node, { label: labelText(marker.label), parenthesized: marker.parenthesized });
      labelled.push({ start: marker.start, end: marker.end, marker: marker.marker, standIn: marker.standIn, label: labelText(marker.label), parenthesized: marker.parenthesized });
    } else ordinals.set(node, (previous ? ordinals.get(previous) : Number(node.parent.token.attrGet('start') ?? 1) - 1) + 1);
    // A paragraph starting on the item's line: its text starts after the marker and the spaces after it.
    const paragraph = node.children[0];
    if (paragraph?.type !== 'paragraph' || paragraph.token.map[0] !== token.map[0] || node.marker === undefined) return;
    const markerEnd = node.marker + projection.slice(node.marker).match(/^(?:[-+*]|\d{1,9}[.)])/)[0].length;
    const start = originalOffset(markerEnd + projection.slice(markerEnd).match(/^[ \t]*/)[0].length);
    if (opaque.some(([begin, end]) => start >= begin && start < end)) return;
    const declaration = source.slice(start).match(/^\{@([^{}\s]*)\}(?=\s|$)/);
    if (!declaration) return;
    const path = [ordinals.get(node)];
    for (let parent = node.parent; parent; parent = parent.parent) {
      if (parent.type === 'list_item' && ordered(parent.parent)) path.unshift(ordinals.get(parent));
    }
    // Numbered items only: the number, 2.1; with labels, each level as written, joined by spaces: 2 (a), (2) i.
    const reference = path.every(part => typeof part === 'number')
      ? { number: path.join('.') }
      : { caption: path.map(part => typeof part === 'number' ? String(part) : part.parenthesized ? `(${part.label})` : part.label).join(' ') };
    items.push({ id: declaration[1], ...reference, start, end: start + declaration[0].length });
  });
  return { items, labelled, problems, codeBlocks, mathFences, paragraphs };
}
