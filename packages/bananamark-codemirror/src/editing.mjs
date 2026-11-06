// Editing in the dialect: "\[" and "\(" close as they are typed, Backspace removes an empty pair, Enter after a
// line's "\[" or "$$" opens a line for the formula and closes it below, and markup typed over a selection wraps it.
import { syntaxTree } from '@codemirror/language';
import { EditorSelection } from '@codemirror/state';
import { escaped } from 'bananamark/scan';
import { inFormula } from './completion.mjs';

/**
 * "\[" and "\(" typed after a backslash (not an escaped one) close at once: "\[|\]", the cursor between. "\]" or
 * "\)" typed just before its closing steps over that closing rather than writing a second one. For
 * EditorView.inputHandler, ahead of the bracket pairing.
 */
export function pairFormulaDelimiters(view, from, to, text) {
  if (!['[', '(', ']', ')'].includes(text) || from !== to) return false;
  const before = view.state.sliceDoc(Math.max(0, from - 100), from);
  if (!before.endsWith('\\') || escaped(before, before.length - 1)) return false;
  if (text === ']' || text === ')') {
    if (view.state.sliceDoc(from, from + 2) !== `\\${text}`) return false;
    // The backslash just typed goes, and the cursor moves past the closing there.
    view.dispatch({ changes: { from: from - 1, to: from }, selection: { anchor: from + 1 }, userEvent: 'input.type' });
    return true;
  }
  view.dispatch({ changes: { from, insert: `${text}\\${text === '[' ? ']' : ')'}` }, selection: { anchor: from + 1 }, userEvent: 'input.type' });
  return true;
}
/** Backspace between "\[" and "\]" (or "\(" and "\)") with nothing between: both go. */
export function deleteFormulaDelimiters(view) {
  const { state } = view, range = state.selection.main;
  if (!range.empty) return false;
  const around = state.sliceDoc(Math.max(0, range.head - 2), range.head + 2);
  if (around !== '\\[\\]' && around !== '\\(\\)') return false;
  const before = state.sliceDoc(Math.max(0, range.head - 100), range.head);
  if (escaped(before, before.length - 2)) return false;
  view.dispatch({ changes: { from: range.head - 2, to: range.head + 2 }, userEvent: 'delete.backward' });
  return true;
}

/** The rest of a line's paragraph after it: from its end up to the next blank line (spaces and quote marks alone). */
function restOfParagraph(state, line) {
  const text = state.sliceDoc(line.to, Math.min(state.doc.length, line.to + 5000)), end = text.search(/\n[ \t>]*(?:\n|$)/);
  return end < 0 ? text : text.slice(0, end);
}
/**
 * Whether the display formula a line opens (opening, "\[" or "$$") closes already in the rest of its paragraph:
 * "\[" when the first "\[" or "\]" after it is a "\]" (a "\[" first opens a formula of its own, whose "\]" that is);
 * "$$" when an odd number of "$$" follow it.
 */
function closesLater(state, line, opening) {
  const rest = restOfParagraph(state, line);
  if (opening === '$$') return [...rest.matchAll(/\$\$/g)].filter(match => !escaped(rest, match.index)).length % 2 === 1;
  for (const match of rest.matchAll(/\\[[\]]/g)) if (!escaped(rest, match.index)) return match[0] === '\\]';
  return false;
}
/**
 * Enter after a line's "\[" or "$$" (an opening the paragraph does not yet close): a line for the formula,
 * indented, and the closing below it. A "\]" (or "]") the pairing added after "\[" moves there. Not in code, a
 * comment or the front matter, nor on a "$$" that closes a formula.
 */
export function closeDisplayFormula(view) {
  const { state } = view, range = state.selection.main;
  if (!range.empty) return false;
  const line = state.doc.lineAt(range.head), before = line.text.slice(0, range.head - line.from), after = line.text.slice(range.head - line.from);
  const opening = before.match(/^[ \t>]*(\\\[|\$\$)$/)?.[1];
  if (!opening || !(opening === '\\[' ? /^(?:\\?\])?\s*$/ : /^\s*$/).test(after)) return false;
  for (let node = syntaxTree(state).resolveInner(range.head, -1); node; node = node.parent) {
    if (/^(?:FencedCode|CodeBlock|Comment|FrontMatter)$/.test(node.name)) return false;
  }
  if (opening === '$$' && inFormula(state, range.head - 2)) return false;
  if (closesLater(state, line, opening)) return false;
  // The formula's lines at the indentation of the opening's line.
  const indent = before.match(/^[ \t>]*/)[0], closing = opening === '\\[' ? '\\]' : '$$';
  view.dispatch({
    changes: { from: range.head, to: line.to, insert: `\n${indent}\n${indent}${closing}` },
    selection: { anchor: range.head + 1 + indent.length },
    scrollIntoView: true,
    userEvent: 'input',
  });
  return true;
}

/** Whether pos is within (not at an end of) a formula, code, a comment or the front matter: where markup is not. */
function inVerbatim(state, pos) {
  for (let node = syntaxTree(state).resolveInner(pos, 0); node; node = node.parent) {
    if (/^(?:InlineMath|DisplayMath|InlineCode|FencedCode|CodeBlock|Comment|FrontMatter)$/.test(node.name)) return true;
  }
  return false;
}
/**
 * "*", "`" or "$" typed over selected text wraps it (each selection) rather than replacing it, and what was selected
 * stays selected, so that a second "*" makes it bold. Spaces at the selection's ends stay outside (a "*" before a
 * space opens nothing). The dialect reads "*…*" also between a letter and punctuation (文字*（注）*文字), so no spaces
 * are needed around it. Only in the text: in a formula, code, a comment or the front matter the character replaces
 * the selection, as usual. For EditorView.inputHandler.
 */
export function wrapSelection(view, from, to, text) {
  const { state } = view;
  if (!/^[*`$]$/.test(text) || view.compositionStarted || state.readOnly) return false;
  if (from !== state.selection.main.from || to !== state.selection.main.to) return false;
  // Each selection without the spaces at its ends.
  const trimmed = state.selection.ranges.map(range => {
    const selected = state.sliceDoc(range.from, range.to);
    return { range, from: range.from + selected.match(/^\s*/)[0].length, to: range.to - selected.match(/\s*$/)[0].length };
  });
  if (trimmed.some(({ from, to }) => from >= to || inVerbatim(state, from) || inVerbatim(state, to))) return false;
  const changes = state.changeByRange(range => {
    const { from, to } = trimmed.find(item => item.range === range), forward = range.anchor <= range.head;
    return {
      changes: [{ from, insert: text }, { from: to, insert: text }],
      range: EditorSelection.range((forward ? from : to) + 1, (forward ? to : from) + 1),
    };
  });
  view.dispatch(state.update(changes, { scrollIntoView: true, userEvent: 'input.type' }));
  return true;
}
