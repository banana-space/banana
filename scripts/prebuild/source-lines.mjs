import { blankLineAt, readMath } from '../shared/scan.mjs';

// Source-line marks for the online editor's preview (never in builds): the start of each source line of
// the previewed page carries its line number, so that the editor can tell where preview text comes from.
// Hugo passes marks through untouched; scripts/postbuild/page.mjs turns them into empty
// <span data-source-line="N">, or removes them from attributes, before the typography pass.
// A mark is private-use characters (digits U+E010 to U+E019) closed by U+2E3D, a punctuation mark no text
// uses: Markdown then still sees punctuation (as at a line start) before the line's own text, so emphasis
// such as **[[link]]** opens as it would without the mark.
export const MARK_OPEN = '\uE000', MARK_CLOSE = '\u2E3D';
const DIGIT_ZERO = 0xE010;
export const encodeLine = line => MARK_OPEN + [...String(line)].map(digit => String.fromCharCode(DIGIT_ZERO + Number(digit))).join('') + MARK_CLOSE;
export const markPattern = /\uE000([\uE010-\uE019]+)\u2E3D/g;
export const decodeLine = digits => Number([...digits].map(char => char.charCodeAt(0) - DIGIT_ZERO).join(''));

/**
 * The body with a mark at the start of each line that holds running text: after the indentation, list
 * and quote markers (and an item's {@label}). Lines whose syntax a mark would change are left alone: headings, environment
 * fences (:::), tables, thematic breaks, setext underlines, display math, link definitions, images
 * (one alone in a paragraph becomes a figure), lines starting with a tag (<align right>; they become
 * shortcodes), and lines that start inside a code
 * block, a code span or a formula. lineOffset is the number of lines before
 * the body (the front matter).
 */
export function markSourceLines(body, lineOffset = 0) {
  const { lines, starts, inFence, covered } = scan(body);
  const inside = offset => covered.some(([start, end]) => start < offset && offset < end);
  return lines.map((line, i) => {
    if (inFence.has(i) || inside(starts[i])) return line;
    const rest = line.trimStart();
    if (!rest
      || /^#{1,6}(\s|$)/.test(rest) || rest.startsWith(':::') || rest.startsWith('|') || rest.startsWith('<') || rest.startsWith('{')
      || /^([-*_])(\s*\1){2,}\s*$/.test(rest) || /^(=+|-+)\s*$/.test(rest)
      || /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(rest)
      || /^(\$\$|\\\[|\\begin\b)/.test(rest) || /^\[(?!\^)[^\]]+\]:/.test(rest)) return line;
    // After indentation, quote and list markers, a task box, a footnote's label, and an item's {@label}.
    const prefix = line.match(/^\s*(?:>\s*)*(?:(?:[-*+]|\d+[.)])\s+(?:\[[ xX]\]\s+)?|\[\^[^\]]+\]:\s*)?(?:\{@[^}\s]*\}\s*)?/)[0];
    const text = line.slice(prefix.length);
    if (!text || /^(\$\$|\\\[|\\begin\b|:::|#{1,6}\s|!\[|<[A-Za-z/])/.test(text)) return line;
    return prefix + encodeLine(lineOffset + i + 1) + text;
  }).join('\n');
}

/** Where formulas are in text: [{ from, to }] (offsets, delimiters included), outside code. */
export const formulaRanges = text => scan(text).formulas;

/** Lines and their offsets, the lines in fenced code blocks (at any indentation), and the code spans and formulas. */
function scan(body) {
  const lines = body.split('\n');
  const starts = [];
  for (let i = 0, offset = 0; i < lines.length; offset += lines[i].length + 1, i++) starts.push(offset);
  const inFence = new Set();
  let fence = null;
  lines.forEach((line, i) => {
    const marker = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})/)?.[1];
    if (fence) {
      inFence.add(i);
      if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null;
    } else if (marker) {
      inFence.add(i);
      fence = marker;
    }
  });
  const covered = [], formulas = [];
  for (let i = 0, line = 0; i < body.length; i++) {
    while (line + 1 < starts.length && starts[line + 1] <= i) line++;
    if (inFence.has(line)) { i = (starts[line + 1] ?? body.length) - 1; continue; }
    if (body[i] === '`') {
      const run = body.slice(i).match(/^`+/)[0];
      const end = codeSpanEnd(body, i, run);
      if (end < 0) { i += run.length - 1; continue; }
      covered.push([i, end + run.length]);
      i = end + run.length - 1;
      continue;
    }
    const math = readMath(body, i);
    if (math) {
      covered.push([i, math.end]);
      formulas.push({ from: i, to: math.end });
      i = math.end - 1;
    }
  }
  return { lines, starts, inFence, covered, formulas };
}

/** Where the code span opened by run at text[i] closes (the start of its closing run), or -1: within the paragraph. */
function codeSpanEnd(text, i, run) {
  for (let j = i + run.length; j < text.length; j++) {
    if (text[j] === '\n' && blankLineAt(text, j)) return -1;
    if (text[j] === '`') {
      const found = text.slice(j).match(/^`+/)[0];
      if (found === run) return j;
      j += found.length - 1;
    }
  }
  return -1;
}
