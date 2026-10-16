// The layout of the site's Markdown sources (npm run format; tests/format.mjs keeps content/ formatted). Only
// line breaks and indentation change, where they do not change the page:
// - one blank line between the front matter and the body;
// - unordered lists marked "-", one space after a list marker, and the lines continuing a list item at its text
//   (two spaces after "-", three after "1.", four after "(a)", at most fourteen), what is indented further
//   keeping its extra indentation;
// - display formulas (\[ … \], $$ … $$) on lines of their own: their delimiters alone on a line, their lines
//   at the indentation of the line they start on (the formula's own relative indentation kept);
// - lines of paragraphs at most 100 columns wide (a CJK character counts two), broken where the rendered page
//   has, or gets, whitespace that the site's typography handles alike: after 。, then after ，、；：, then
//   between text and a formula (where there is a space, or where one is added next to Han), then before a
//   <person /> tag. A line that cannot be broken so stays as short as these allow.
// Nothing else changes: code, formulas' contents, headings, tables, environment fences, the front matter.
import { Parser } from 'commonmark';
import { parseLists } from '../prebuild/lists.mjs';
import { protectedToken, readMarkdownLink, readMath, readReference, readReferenceGroup, readWiki } from '../prebuild/markup.mjs';
import { formulaRanges } from '../prebuild/source-lines.mjs';
import { escaped, labelledMarkerSource, readLabelledMarker, readTag } from '../shared/scan.mjs';

export const maxWidth = 100;

/** Columns a string takes: East Asian wide and fullwidth characters two, others one. */
export function textWidth(text) {
  let width = 0;
  for (const char of text) width += wide(char.codePointAt(0)) ? 2 : 1;
  return width;
}
const wide = code => (code >= 0x1100 && code <= 0x115f) || (code >= 0x2e80 && code <= 0x303e) || (code >= 0x3041 && code <= 0x33ff)
  || (code >= 0x3400 && code <= 0x4dbf) || (code >= 0x4e00 && code <= 0x9fff) || (code >= 0xa000 && code <= 0xa4cf)
  || (code >= 0xac00 && code <= 0xd7a3) || (code >= 0xf900 && code <= 0xfaff) || (code >= 0xfe30 && code <= 0xfe4f)
  || (code >= 0xff00 && code <= 0xff60) || (code >= 0xffe0 && code <= 0xffe6) || (code >= 0x20000 && code <= 0x3fffd);

/** A page's source, formatted. */
export function formatMarkdown(source) {
  const frontMatter = source.match(/^(?:﻿)?---\n[\s\S]*?\n---(?:\n|$)/);
  const head = frontMatter?.[0] ?? '';
  let body = source.slice(head.length);
  body = wrapParagraphs(displayFormulas(listLayout(body)));
  // One blank line after the front matter (a page with nothing after it stays so).
  if (head && body.trim()) body = `\n${body.replace(/^(?:[ \t]*\n)+/, '')}`;
  return head + body;
}

// A labelled list item's line: its marker, then the spaces after it.
const labelledItem = new RegExp(`^ {0,3}(${labelledMarkerSource})( *)`);

// What a line starts with before its text: indentation and quote markers.
const containerPattern = /^[ \t]*(?:>[ \t]?)*[ \t]*/;
// …and a list item's marker (with a task box) or a footnote's label.
const markerPattern = /^([ \t]*(?:>[ \t]?)*[ \t]*)((?:[-*+]|\d{1,9}[.)])[ \t]+(?:\[[ xX]\][ \t]+)?|\[\^[^\]\s]+\]:[ \t]*)?/;

/** The prefix for lines continuing a line's block: its indentation and quote markers, a list marker as spaces. */
function continuation(line) {
  const [, lead, marker = ''] = line.match(markerPattern);
  if (!marker) return lead;
  if (marker.startsWith('[^')) return `${lead}    `;
  return lead + ' '.repeat(marker.replace(/\[[ xX]\][ \t]+$/, '').length);
}

// Where a labelled list item's text is, from its marker's start: after the marker and a space, at most at
// column fourteen (scripts/prebuild/lists.mjs).
const labelledWidth = marker => Math.min([...marker].length + 1, 14);

/**
 * The markers of labelled list items ((a), iv), …), by the offset of their line: { from, to } in the line. Only
 * those CommonMark reads as list items (scripts/prebuild/lists.mjs); a line can have more than one, the last
 * kept.
 */
function labelledMarkers(body) {
  const found = new Map();
  for (const { start } of parseLists(body).labelled) {
    const lineStart = body.lastIndexOf('\n', start - 1) + 1;
    found.set(lineStart, { from: start - lineStart, to: readLabelledMarker(body, start).end - lineStart });
  }
  return found;
}

/**
 * A line's prefix (indentation, quote and list markers) and the prefix for lines continuing its block: { lead,
 * next }. labelled: the labelled list item's marker on the line ({ from, to }), if any.
 */
function prefixes(line, labelled) {
  if (!labelled) return { lead: line.match(markerPattern)[0], next: continuation(line) };
  const spaces = line.slice(labelled.to).match(/^[ \t]*/)[0].length;
  return {
    lead: line.slice(0, labelled.to + spaces),
    next: line.slice(0, labelled.from).replace(/[^ \t>]/g, ' ') + ' '.repeat(labelledWidth(line.slice(labelled.from, labelled.to))),
  };
}

/**
 * Lists: "*" items marked "-", one space after each marker, and each item's continuation lines at its text: they
 * keep their indentation beyond the least of them (a formula's relative indentation, a nested block's). Code
 * keeps its indentation relative to the item (fenced code to that least indentation, indented code to the
 * marker's width, which keeps it code); lazy continuation lines and lines indented with tabs stay as they are.
 */
function listLayout(body) {
  // The block structure, formulas masked (their lines are not Markdown), labelled list items' markers as
  // CommonMark's (their width may differ: only the lines count).
  let masked = body;
  for (const { from, to } of formulaRanges(body)) masked = masked.slice(0, from) + body.slice(from, to).replace(/[^\n]/g, 'x') + masked.slice(to);
  const { labelled } = parseLists(body);
  for (const { start, end, marker, standIn } of [...labelled].reverse()) masked = masked.slice(0, start) + marker + standIn + masked.slice(end);
  // Each labelled item's marker, by its line and column in masked.
  const labelledAt = new Set(labelled.map(({ start }) => {
    const lineStart = body.lastIndexOf('\n', start - 1) + 1;
    return `${body.slice(0, lineStart).split('\n').length - 1}:${start - lineStart}`;
  }));
  const parser = new Parser();
  parser.processInlines = () => {};
  const walker = parser.parse(masked).walker();
  const containers = [], code = new Map();
  let event, depth = 0;
  while ((event = walker.next())) {
    const { node } = event;
    if (node.type === 'code_block') {
      if (event.entering) for (let line = node.sourcepos[0][0]; line <= node.sourcepos[1][0]; line++) code.set(line - 1, node._isFenced ? 'fenced' : 'indented');
      continue;
    }
    if (node.type !== 'item' && node.type !== 'block_quote') continue;
    if (!event.entering) { depth--; continue; }
    depth++;
    const container = { type: node.type, first: node.sourcepos[0][0] - 1, last: node.sourcepos[1][0] - 1, depth };
    if (node.type === 'item') {
      const data = node._listData;
      container.width = data.markerOffset + data.padding; // Where its text is, from its container's.
      container.marker = data.type === 'bullet' ? '-' : null;
      container.labelled = labelledAt.has(`${container.first}:${node.sourcepos[0][1] - 1}`);
    }
    containers.push(container);
  }
  if (!containers.length) return body;
  const lines = body.split('\n');
  const chainOf = i => containers.filter(c => c.first <= i && i <= c.last).sort((a, b) => a.depth - b.depth);
  // Where a line's text starts inside chain's containers (their columns known): { pos, prefix }, or null for a
  // lazy line.
  function consume(line, i, chain) {
    let pos = 0, prefix = '';
    for (const c of chain) {
      const rest = line.slice(pos);
      if (c.type === 'block_quote') {
        const quote = rest.match(/^ {0,3}>[ ]?/);
        if (!quote) return null;
        prefix += quote[0];
        pos += quote[0].length;
      } else if (i === c.first) {
        const item = rest.match(c.labelled ? labelledItem : /^ {0,3}([-+*]|\d{1,9}[.)])( *)/);
        if (!item) return null;
        const marker = c.marker ?? item[1], text = rest.slice(item[0].length);
        c.newWidth = c.labelled ? labelledWidth(marker) : marker.length + 1;
        // Five spaces or more: the item starts with indented code, whose indentation they are.
        prefix += !text ? marker : item[2].length >= 5 ? marker + item[2] : `${marker} `;
        pos += item[0].length;
      } else {
        const spaces = rest.match(/^ */)[0].length;
        if (spaces < c.width || c.column === undefined) return null;
        prefix += ' '.repeat(c.newWidth);
        pos += code.get(i) === 'indented' ? c.width : Math.min(spaces, c.column);
      }
    }
    return { pos, prefix };
  }
  // Each item's column: the least indentation of its continuation lines (inside its outer containers).
  for (const c of [...containers].sort((a, b) => a.depth - b.depth)) {
    if (c.type !== 'item') continue;
    const outer = i => chainOf(i).filter(o => o.depth < c.depth);
    consume(lines[c.first], c.first, [...outer(c.first), c]);
    let column = Infinity;
    for (let i = c.first + 1; i <= c.last; i++) {
      if (!lines[i].trim() || /^[ >]*\t/.test(lines[i]) || code.get(i) === 'indented') continue;
      const at = consume(lines[i], i, outer(i));
      const spaces = at && lines[i].slice(at.pos).match(/^ */)[0].length;
      if (at && spaces >= c.width) column = Math.min(column, spaces);
    }
    c.column = column === Infinity ? c.width : column;
  }
  return lines.map((line, i) => {
    if (!line.trim() || /^[ >]*\t/.test(line)) return line;
    const chain = chainOf(i);
    if (!chain.length) return line;
    const at = consume(line, i, chain);
    return at ? at.prefix + line.slice(at.pos) : line;
  }).join('\n');
}

/** Display formulas on lines of their own, at the indentation of the line they start on. */
function displayFormulas(body) {
  const labelled = labelledMarkers(body);
  const formulas = formulaRanges(body).filter(({ from }) => body.startsWith('\\[', from) || body.startsWith('$$', from));
  for (const { from, to } of formulas.reverse()) {
    const lineStart = body.lastIndexOf('\n', from - 1) + 1;
    const lineEnd = body.indexOf('\n', to) < 0 ? body.length : body.indexOf('\n', to);
    const before = body.slice(lineStart, from), after = body.slice(to, lineEnd);
    const line = body.slice(lineStart, body.indexOf('\n', lineStart) < 0 ? body.length : body.indexOf('\n', lineStart));
    // Not in headings, tables or environment fences (where lines cannot break), nor in link text.
    const marked = prefixes(line, labelled.get(lineStart));
    const text = line.slice(marked.lead.length);
    if (/^(?:#|\||:::)/.test(text) || /\[[^\]]*$/.test(before)) continue;
    const inner = body.slice(from + 2, to - 2);
    if (!inner.trim()) continue;
    // Emphasis markers next to the delimiters (*\[ … \]*) stay with them: on a line of their own they would no
    // longer open or close anything.
    const opener = before.match(/(?<!\\)[*_~]*$/)[0], closer = after.match(/^[*_~]*/)[0];
    const lead = before.slice(0, before.length - opener.length), tail = after.slice(closer.length);
    // Alone at the start of its line (after indentation, quote markers, a list marker): stays there.
    const here = labelled.get(lineStart);
    const alone = here ? lead === marked.lead : markerPattern.exec(lead)[0].length === lead.length;
    const base = here ? marked.next : alone ? continuation(lead) : continuation(line);
    const quotes = (base.match(/>/g) ?? []).length;
    const unquote = value => {
      let rest = value;
      for (let k = 0; k < quotes; k++) rest = rest.replace(/^[ \t]*>[ \t]?/, '');
      return rest;
    };
    // The formula's lines: the rest of its first line, then its other lines without their container prefix.
    const lines = inner.split('\n');
    const first = lines[0].trim(), others = lines.slice(1).map(unquote);
    const indent = Math.min(...others.filter(value => value.trim()).map(value => value.match(/^[ \t]*/)[0].length));
    const content = [...(first ? [first] : []), ...others.map(value => value.trim() ? value.slice(indent).trimEnd() : '')];
    while (content.length && !content.at(-1)) content.pop();
    const open = body.slice(from, from + 2), close = body.slice(to - 2, to);
    const opening = alone ? before + open : `${lead.replace(/[ \t]+$/, '')}\n${base}${opener}${open}`;
    const closing = `${base}${close}${closer}${tail.trim() ? `\n${base}${tail.replace(/^[ \t]+/, '')}` : tail}`;
    const formula = [opening, ...content.map(value => value ? base + value : base.trimEnd()), closing].join('\n');
    body = body.slice(0, lineStart) + formula + body.slice(lineEnd);
  }
  return body;
}

// Closing punctuation that stays with what it closes (a break comes after it).
const closers = /[”’）」』】》〕〉)\]]/u;
const han = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;
// What a continuation line may not start with: it would begin a block (a list item, a quote, a heading, a
// rule or setext underline, a fence, a table, a footnote or link definition) or be read as a tag's line.
// A labelled list item's marker counts as well: in a list item it would start the next item.
const blockStart = new RegExp(`^(?:[-*+][ \\t]|\\d{1,9}[.)](?:[ \\t]|$)|${labelledMarkerSource}|>|#|=+[ \\t]*$|-+[ \\t]*$|[*_]{3,}|\`{3,}|~{3,}|:::|\\||\\[[^\\]]*\\]:|\\$\\$|\\\\\\[)`);

/** The places a paragraph line's text may break: [{ at, end, rank }] (text before at, after end; rank 1 best). */
function breaks(text) {
  const found = [];
  const add = (at, end, rank) => { if (at > 0 && end < text.length) found.push({ at, end, rank }); };
  /** A break at i, taking the spaces around it. */
  const around = (i, rank) => {
    let at = i, end = i;
    while (at > 0 && /[ \t]/.test(text[at - 1])) at--;
    while (end < text.length && /[ \t]/.test(text[end])) end++;
    add(at, end, rank);
  };
  for (let i = 0; i < text.length;) {
    // Atoms: code, comments, tags and autolinks, formulas, links, references; never broken inside.
    const atomEnd = protectedToken(text, i) ?? readMath(text, i)?.end ?? readWiki(text, i)?.end ?? readMarkdownLink(text, i)?.end
      ?? readReferenceGroup(text, i)?.end ?? readReference(text, i)?.end;
    if (atomEnd && atomEnd > i) {
      const math = readMath(text, i);
      if (math) {
        // Text and a formula: where a space is, or where the typography adds one (next to Han).
        if (i > 0 && (/[ \t]/.test(text[i - 1]) || han.test(text[i - 1]))) around(i, 3);
        if (atomEnd < text.length && (/[ \t]/.test(text[atomEnd]) || han.test(text[atomEnd]))) around(atomEnd, 3);
      }
      const tag = text[i] === '<' ? readTag(text, i) : undefined;
      if (tag?.name === 'person' && !tag.closing) around(i, 4);
      i = atomEnd;
      continue;
    }
    if (text[i] === '\\') { i += 2; continue; }
    const rank = text[i] === '。' ? 1 : '，、；：'.includes(text[i]) ? 2 : 0;
    i++;
    if (rank && !escaped(text, i - 1)) {
      let end = i;
      while (end < text.length && closers.test(text[end])) end++;
      around(end, rank);
      i = end;
    }
  }
  // Each place once (its best rank), and only where the next line starts plainly, the line does not end in a
  // backslash (a hard break), and no emphasis marker is next to a break that has no space (whether it opens or
  // closes depends on what is next to it; a space and a line break count alike).
  const best = new Map();
  for (const place of found) {
    const rest = text.slice(place.end);
    if (blockStart.test(rest) || text[place.at - 1] === '\\') continue;
    if (place.at === place.end && (/[*_~]/.test(text[place.at - 1]) || /^[*_~]/.test(rest))) continue;
    // After punctuation the typography removes the line break only before text it reads: not before code, an
    // image or another tag (a space would show).
    if (place.rank <= 2 && (/^[`!]/.test(rest) || (rest[0] === '<' && !/^<(?:lang|person)\b/.test(rest)))) continue;
    if (!best.has(place.at) || best.get(place.at).rank > place.rank) best.set(place.at, place);
  }
  return [...best.values()].sort((a, b) => a.at - b.at);
}

/** A paragraph line in lines at most maxWidth wide (as nearly as its places to break allow). */
function wrapLine(line, labelled) {
  if (textWidth(line) <= maxWidth) return [line];
  const { lead: prefix, next } = prefixes(line, labelled);
  const text = line.slice(prefix.length), places = breaks(text);
  const lines = [];
  let start = 0, lead = prefix;
  for (;;) {
    const limit = maxWidth - textWidth(lead);
    if (textWidth(text.slice(start)) <= limit) break;
    const candidates = places.filter(place => place.at > start);
    if (!candidates.length) break;
    const fitting = candidates.filter(place => textWidth(text.slice(start, place.at)) <= limit);
    let chosen;
    for (const rank of [1, 2, 3, 4]) {
      const ranked = fitting.filter(place => place.rank === rank);
      if (ranked.length) { chosen = ranked.at(-1); break; }
    }
    chosen ??= candidates[0]; // Nothing fits: as short as possible.
    lines.push(lead + text.slice(start, chosen.at));
    start = chosen.end;
    lead = next;
  }
  lines.push(lead + text.slice(start));
  return lines;
}

/** Long lines of paragraphs wrapped; not lines of display formulas, comments or tables. */
function wrapParagraphs(body) {
  const { paragraphs, codeBlocks } = parseLists(body);
  const labelled = labelledMarkers(body);
  // A footnote's text without spaces reads as a link definition to CommonMark: its line, too.
  const inside = (ranges, offset) => ranges.some(([from, to]) => offset >= from && offset < to);
  for (const match of body.matchAll(/^[ \t>]*\[\^[^\]\s]+\]:[^\n]*/gm)) {
    if (!inside(paragraphs, match.index) && !inside(codeBlocks, match.index)) paragraphs.push([match.index, match.index + match[0].length]);
  }
  paragraphs.sort((a, b) => a[0] - b[0]);
  const skipped = [];
  for (const { from, to } of formulaRanges(body)) {
    if (body.startsWith('\\[', from) || body.startsWith('$$', from)) skipped.push([from, to]);
  }
  for (const match of body.matchAll(/<!--[\s\S]*?-->/g)) skipped.push([match.index, match.index + match[0].length]);
  // A tag continued on the next lines (<person … />): its lines as written (a break in a value would end it).
  for (const match of body.matchAll(/<[A-Za-z]/g)) {
    const tag = readTag(body, match.index);
    if (tag && body.slice(match.index, tag.end).includes('\n')) skipped.push([match.index, tag.end]);
  }
  let result = '', cursor = 0;
  for (const [start, end] of paragraphs) {
    const lines = body.slice(start, end).split('\n');
    // A table (a delimiter row): left alone.
    if (lines.some(line => line.includes('|') && /^[ \t>]*\|?[ \t]*:?-+:?[ \t]*(?:\|[ \t]*:?-+:?[ \t]*)*\|?[ \t]*$/.test(line))) continue;
    let offset = start;
    const wrapped = lines.map(line => {
      const lineStart = offset, lineEnd = offset + line.length;
      offset = lineEnd + 1;
      if (skipped.some(([from, to]) => from < lineEnd && to > lineStart)) return line;
      return wrapLine(line, labelled.get(lineStart)).join('\n');
    });
    result += body.slice(cursor, start) + wrapped.join('\n');
    cursor = end;
  }
  return result + body.slice(cursor);
}
