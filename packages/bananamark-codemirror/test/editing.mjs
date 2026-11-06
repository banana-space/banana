import assert from 'node:assert/strict';
import { EditorSelection, EditorState } from '@codemirror/state';
import { bananamarkLanguage, closeDisplayFormula, deleteFormulaDelimiters, pairFormulaDelimiters, wrapSelection } from 'bananamark-codemirror';

// Editing (src/editing.mjs) on a stand-in for a view: its state, and dispatch. In a text, "¦" marks a cursor and a
// pair of them a selection ("[" … "]" in what is shown back).

function editor(marked) {
  const marks = [];
  let doc = marked;
  for (let i; (i = doc.indexOf('¦')) >= 0;) { marks.push(i); doc = doc.slice(0, i) + doc.slice(i + 1); }
  const ranges = [];
  for (let k = 0; k < marks.length; k += 2) ranges.push(EditorSelection.range(marks[k], marks[k + 1] ?? marks[k]));
  let state = EditorState.create({ doc, selection: EditorSelection.create(ranges), extensions: [bananamarkLanguage({ wikiLinks: true }), EditorState.allowMultipleSelections.of(true)] });
  return { get state() { return state; }, dispatch(...specs) { state = specs[0]?.state ?? state.update(...specs).state; } };
}
function shown(view) {
  let text = view.state.doc.toString();
  for (const range of [...view.state.selection.ranges].sort((a, b) => b.from - a.from)) {
    text = range.empty ? text.slice(0, range.head) + '¦' + text.slice(range.head) : `${text.slice(0, range.from)}[${text.slice(range.from, range.to)}]${text.slice(range.to)}`;
  }
  return text;
}
/** The text after a command, or null where it does nothing. */
function after(command, marked) {
  const view = editor(marked);
  return command(view) ? shown(view) : null;
}
/** The text after typing text, or null where the input handler leaves it to the default. */
function typed(handler, marked, text) {
  const view = editor(marked), { from, to } = view.state.selection.main;
  return handler(view, from, to, text) ? shown(view) : null;
}

// Enter after a line's \[: the formula's line, and \] below, the pairing's \] moved there; at the line's
// indentation (a quotation's marks, a list item's text).
assert.equal(after(closeDisplayFormula, '\\[¦\\]'), '\\[\n¦\n\\]');
assert.equal(after(closeDisplayFormula, 'Hence\n\\[¦'), 'Hence\n\\[\n¦\n\\]');
assert.equal(after(closeDisplayFormula, '> Quote\n> \\[¦\\]'), '> Quote\n> \\[\n> ¦\n> \\]');
assert.equal(after(closeDisplayFormula, '- Item\n  \\[¦\\]'), '- Item\n  \\[\n  ¦\n  \\]');
// Closed already further down the paragraph: a plain Enter; but a later formula's \] is not this one's, and a
// blank line ends the paragraph.
assert.equal(after(closeDisplayFormula, 'A\n\\[¦\nx\n\\]\nB'), null);
assert.equal(after(closeDisplayFormula, 'A\n\\[¦\n\\\\[2pt] x\n\\]'), null, '\\\\[2pt] opens nothing');
assert.equal(after(closeDisplayFormula, 'A\n\\[¦\\]\nso that\n\\[\nx\n\\]\nholds.'), 'A\n\\[\n¦\n\\]\nso that\n\\[\nx\n\\]\nholds.');
assert.equal(after(closeDisplayFormula, 'A\n\\[¦\n\nx\n\\]'), 'A\n\\[\n¦\n\\]\n\nx\n\\]');
// Only a line holding \[ alone (and what the pairing added).
assert.equal(after(closeDisplayFormula, 'Hence \\[¦\\]'), null);
assert.equal(after(closeDisplayFormula, '\\[¦ x'), null);
assert.equal(after(closeDisplayFormula, '\\\\[¦'), null, 'an escaped backslash');
// $$ the same; not a $$ that closes a formula.
assert.equal(after(closeDisplayFormula, 'Hence\n$$¦'), 'Hence\n$$\n¦\n$$');
assert.equal(after(closeDisplayFormula, 'A\n$$¦\nx\n$$'), null);
assert.equal(after(closeDisplayFormula, 'A\n$$¦\nso that\n$$\ny\n$$\nholds.'), 'A\n$$\n¦\n$$\nso that\n$$\ny\n$$\nholds.');
assert.equal(after(closeDisplayFormula, 'A\n$$\nx\n$$¦\nB'), null);
assert.equal(after(closeDisplayFormula, 'A\n$$\nx\n$$¦'), null);
// Not in code or the front matter.
assert.equal(after(closeDisplayFormula, '```tex\n\\[¦\n```'), null);
assert.equal(after(closeDisplayFormula, '    \\[¦'), null, 'an indented code block');
assert.equal(after(closeDisplayFormula, '---\n$$¦\n---\n'), null);

// \[ and \( close as they are typed; \] and \) typed before that closing step over it.
assert.equal(typed(pairFormulaDelimiters, 'Let \\¦', '['), 'Let \\[¦\\]');
assert.equal(typed(pairFormulaDelimiters, 'Let \\¦', '('), 'Let \\(¦\\)');
assert.equal(typed(pairFormulaDelimiters, 'Let \\\\¦', '['), null, 'after an escaped backslash');
assert.equal(typed(pairFormulaDelimiters, 'Let ¦', '['), null);
assert.equal(typed(pairFormulaDelimiters, '\\[ x \\¦\\] y', ']'), '\\[ x \\]¦ y');
assert.equal(typed(pairFormulaDelimiters, '\\( x \\¦\\) y', ')'), '\\( x \\)¦ y');
assert.equal(typed(pairFormulaDelimiters, '\\( x \\¦\\] y', ')'), null);
assert.equal(typed(pairFormulaDelimiters, '\\( x \\\\¦\\) y', ')'), null, 'after a line break, \\\\');
assert.equal(typed(pairFormulaDelimiters, '\\( x \\¦ y', ')'), null);
// Backspace in an empty pair removes both.
assert.equal(after(deleteFormulaDelimiters, 'Let \\[¦\\]'), 'Let ¦');
assert.equal(after(deleteFormulaDelimiters, 'Let \\[ ¦\\]'), null);

// *, ` and $ typed over a selection wrap it, every selection, and it stays selected: a second * makes it bold.
assert.equal(typed(wrapSelection, 'Say ¦hello¦ now', '*'), 'Say *[hello]* now');
{
  const view = editor('Say ¦hello¦ now');
  for (let i = 0; i < 2; i++) wrapSelection(view, view.state.selection.main.from, view.state.selection.main.to, '*');
  assert.equal(shown(view), 'Say **[hello]** now');
}
assert.equal(typed(wrapSelection, 'Say ¦hello¦ and ¦bye¦', '*'), 'Say *[hello]* and *[bye]*');
assert.equal(typed(wrapSelection, 'Run ¦make¦ now', '`'), 'Run `[make]` now');
assert.equal(typed(wrapSelection, 'Let ¦x^2¦ be', '$'), 'Let $[x^2]$ be');
assert.equal(typed(wrapSelection, 'Let ¦$x$¦ be', '*'), 'Let *[$x$]* be', 'a whole formula is the text\'s');
assert.equal(typed(wrapSelection, 'Say ¦hello¦', 'a'), null);
assert.equal(typed(wrapSelection, 'Say ¦hello¦', '_'), null, '_ replaces the selection');
// Spaces at the selection's ends stay outside; a selection of spaces alone is replaced.
assert.equal(typed(wrapSelection, 'Say¦ hello ¦now', '*'), 'Say *[hello]* now');
assert.equal(typed(wrapSelection, 'Let¦ x ¦be', '$'), 'Let $[x]$ be');
assert.equal(typed(wrapSelection, 'a¦  ¦b', '*'), null);
// No spaces around the marks: the dialect reads *…* also between a letter and punctuation.
assert.equal(typed(wrapSelection, '文字¦强调¦文字', '*'), '文字*[强调]*文字');
assert.equal(typed(wrapSelection, '文字¦（注）¦文字', '*'), '文字*[（注）]*文字');
assert.equal(typed(wrapSelection, '文字¦[[群]]¦。', '*'), '文字*[[[群]]]*。');
// The selection keeps its direction.
{
  const view = editor('¦文字强调文字');
  view.dispatch({ selection: { anchor: 4, head: 2 } });
  wrapSelection(view, 2, 4, '*');
  assert.deepEqual([view.state.selection.main.anchor, view.state.selection.main.head], [5, 3]);
}
// Not with a selection empty, nor in a formula, code, a comment or the front matter: the character replaces the
// selection there.
assert.equal(typed(wrapSelection, 'Say ¦hello', '*'), null);
assert.equal(typed(wrapSelection, 'Say ¦hello¦ and ¦¦bye', '*'), null);
assert.equal(typed(wrapSelection, 'Let $¦x¦+y$ be', '*'), null);
assert.equal(typed(wrapSelection, 'Let \\[ ¦x¦ \\] be', '*'), null);
assert.equal(typed(wrapSelection, 'Run `¦make¦` now', '*'), null);
assert.equal(typed(wrapSelection, '```\n¦a¦\n```', '*'), null);
assert.equal(typed(wrapSelection, '<!-- ¦a¦ -->', '*'), null);
assert.equal(typed(wrapSelection, '---\ntitle: ¦a¦\n---\n', '*'), null);
