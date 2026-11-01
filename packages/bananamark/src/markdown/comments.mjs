/**
 * What a page leaves out: comments, and processing instructions and declarations. In the renderer (./index.mjs) and in
 * the editor (../highlight/grammar.mjs) alike, one ends where it closes, and what follows it on the line is text.
 *
 * At the start of a line one is a block of its own, which ends a paragraph, and a comment may run over any lines
 * (commenting out a section). Elsewhere it is part of its paragraph's text, and ends with the paragraph.
 */

const other = /^<(?:\?[^]*?\?>|![A-Za-z][^>]*>|!\[CDATA\[[^]*?\]\]>)/;

/** The end of what is left out at start in text, or -1 where nothing is or it does not close. */
export function leftOutEnd(text, start) {
  if (text[start] !== '<') return -1;
  if (text.startsWith('<!--', start)) {
    const end = text.indexOf('-->', start + 4);
    return end < 0 ? -1 : end + 3;
  }
  const match = other.exec(text.slice(start, start + 2000));
  return match ? start + match[0].length : -1;
}

/** Block rule. */
export function leftOutBlock(state, startLine, endLine, silent) {
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  const start = state.bMarks[startLine] + state.tShift[startLine], comment = state.src.startsWith('<!--', start);
  if (state.src[start] !== '<') return false;
  // Other than a comment, it is on one line. A comment's end is in its container, or the container ends it.
  const end = leftOutEnd(comment ? state.src : state.src.slice(0, state.eMarks[startLine]), start);
  if (end < 0 && !comment) return false;
  if (silent) return true;
  let line = startLine;
  if (end < 0) line = endLine;
  else while (line < endLine && state.eMarks[line] < end) line++;
  if (line >= endLine) { state.line = endLine; return true; }
  // What follows it on its last line is read as a line, and on from there.
  let rest = end;
  while (rest < state.eMarks[line] && (state.src[rest] === ' ' || state.src[rest] === '\t')) rest++;
  if (rest >= state.eMarks[line]) { state.line = line + 1; return true; }
  state.bMarks[line] = rest;
  state.tShift[line] = 0;
  state.sCount[line] = state.blkIndent;
  state.md.block.tokenize(state, line, endLine);
  return true;
}
