// The dialect in an editor (CodeMirror): bananamark's grammar (bananamark/grammar, which the renderer also
// highlights code blocks with), with folding of the front matter and of environments, Enter continuing a line's
// indentation (newlineAndIndent), and Backspace removing list and quote markers.
import { LanguageSupport, ensureSyntaxTree, foldService, syntaxTree } from '@codemirror/language';
import { deleteMarkupBackward } from '@codemirror/lang-markdown';
import { EditorSelection, Prec } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { continuation, labelledWidth, markerPattern, readLabelledMarker } from 'bananamark/scan';
import { dialectSupport } from 'bananamark/grammar';

/**
 * Folding beyond headings: the front matter (between its --- lines) and environments (from ::: name to the
 * line before their closing :::, nested ones counted; fences in code are not fences).
 */
const folding = foldService.of((state, lineStart, lineEnd) => {
  const line = state.doc.lineAt(lineStart);
  if (line.number === 1 && line.text === '---') {
    for (let number = 2; number <= Math.min(state.doc.lines, 500); number++) {
      if (state.doc.line(number).text !== '---') continue;
      return number > 2 ? { from: lineEnd, to: state.doc.line(number - 1).to } : null;
    }
    return null;
  }
  if (!/^[ \t]*(?:>[ \t]*)*:::[ \t]*\S/.test(line.text)) return null;
  const tree = ensureSyntaxTree(state, state.doc.length, 50);
  if (!tree) return null;
  for (let node = tree.resolveInner(lineEnd, -1); node; node = node.parent) if (node.name === 'FencedCode') return null;
  let depth = 0, close = null;
  tree.iterate({
    from: lineStart,
    enter: node => {
      if (close || node.name === 'FencedCode') return false;
      if (node.name !== 'EnvironmentFence') return;
      const opening = node.node.getChild('EnvironmentName') !== null;
      depth += opening ? 1 : -1;
      if (depth === 0) close = state.doc.lineAt(node.from);
      return false;
    },
  });
  return close && close.number > line.number + 1 ? { from: lineEnd, to: state.doc.line(close.number - 1).to } : null;
});

/** Where a line's text starts (after indentation, quote and list markers), and the prefix of lines continuing it. */
function linePrefix(text) {
  const lead = text.match(markerPattern)[0], labelled = readLabelledMarker(text, lead.length);
  if (!labelled) return { start: lead.length, next: continuation(text) };
  return {
    start: labelled.end + text.slice(labelled.end).match(/^[ \t]*/)[0].length,
    next: continuation(text) + ' '.repeat(labelledWidth(text.slice(lead.length, labelled.end))),
  };
}
/**
 * Enter: a new line at the indentation of the cursor's line's text, as the formatter indents a block's continuation
 * lines (a list item's at its text, also from its first line; quote markers kept). No new list marker: list items in
 * this dialect often run over several lines, and lists are often loose. The spaces around the cursor go (a line of spaces is
 * left empty); in a line's markers, a plain line break. Not in the front matter, code or display formulas (CodeMirror's own Enter there).
 */
export function newlineAndIndent({ state, dispatch }) {
  for (const range of state.selection.ranges) {
    for (let node = syntaxTree(state).resolveInner(range.from, -1); node; node = node.parent) {
      if (/^(?:FrontMatter|FencedCode|CodeBlock|DisplayMath)$/.test(node.name)) return false;
    }
  }
  const changes = state.changeByRange(range => {
    const line = state.doc.lineAt(range.from), column = range.from - line.from;
    const { start, next } = linePrefix(line.text);
    if (column < start) return { range: EditorSelection.cursor(range.from + 1), changes: { from: range.from, to: range.to, insert: '\n' } };
    // A line of spaces alone is left empty.
    const from = /\S/.test(line.text.slice(0, column)) ? line.from + Math.max(start, column - line.text.slice(0, column).match(/[ \t]*$/)[0].length) : line.from;
    const to = range.to + state.sliceDoc(range.to, state.doc.lineAt(range.to).to).match(/^[ \t]*/)[0].length;
    return { range: EditorSelection.cursor(from + 1 + next.length), changes: { from, to, insert: `\n${next}` } };
  });
  dispatch(state.update(changes, { scrollIntoView: true, userEvent: 'input' }));
  return true;
}
// Backspace after a list marker or quote mark removes it (CodeMirror's markdown keymap, without its Enter).
const markupKeymap = Prec.high(keymap.of([{ key: 'Backspace', run: deleteMarkupBackward }]));

/**
 * The dialect's language for an editor: a LanguageSupport (highlight it with highlightClasses), with folding and
 * Backspace on markers. dialect: bananamark's defineDialect, whose grammar it takes (its code languages, wiki links on
 * or off); without one, codeLanguages (more languages of fenced code by name, CodeMirror Languages) and wikiLinks
 * (default false, as bananamark's).
 */
export function bananamarkLanguage({ dialect, codeLanguages, wikiLinks = false } = {}) {
  const support = dialect?.language ?? dialectSupport({ codeLanguages, wikiLinks });
  return new LanguageSupport(support.language, [support.support, folding, markupKeymap]);
}
