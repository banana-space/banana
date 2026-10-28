// Editing formulas in the dialect: "\[" and "\(" close as they are typed, Backspace removes an empty pair, and Enter
// after a line's "\[" opens a line for the formula and closes it below.
import { escaped, readMath } from 'bananamark/scan';

/**
 * "\[" and "\(" typed after a backslash (not an escaped one) close at once: "\[|\]", the cursor between.
 * For EditorView.inputHandler, ahead of the bracket pairing.
 */
export function pairFormulaDelimiters(view, from, to, text) {
  if ((text !== '[' && text !== '(') || from !== to) return false;
  const before = view.state.sliceDoc(Math.max(0, from - 100), from);
  if (!before.endsWith('\\') || escaped(before, before.length - 1)) return false;
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

/**
 * Enter after a line's "\[" (an opening it does not yet close): a line for the formula, indented, and "\]"
 * below it. A "\]" (or "]") the pairing added after "\[" moves there.
 */
export function closeDisplayFormula(view) {
  const { state } = view, range = state.selection.main;
  if (!range.empty) return false;
  const line = state.doc.lineAt(range.head), before = line.text.slice(0, range.head - line.from), after = line.text.slice(range.head - line.from);
  if (!/^[ \t>]*\\\[$/.test(before) || !/^(?:\\?\])?\s*$/.test(after)) return false;
  // Closed already, on a later line? (What follows on this line is the pairing's, and goes.)
  if (readMath('\\[' + state.sliceDoc(line.to, Math.min(state.doc.length, line.to + 5000)), 0)) return false;
  // The formula's lines at the indentation of the \[ line.
  const indent = before.match(/^[ \t>]*/)[0];
  view.dispatch({
    changes: { from: range.head, to: line.to, insert: `\n${indent}\n${indent}\\]` },
    selection: { anchor: range.head + 1 + indent.length },
  });
  return true;
}

