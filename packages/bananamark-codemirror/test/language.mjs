import assert from 'node:assert/strict';
import { EditorSelection, EditorState } from '@codemirror/state';
import { foldable } from '@codemirror/language';
import { highlightTree } from '@lezer/highlight';
import { yamlLanguage } from 'bananamark/grammar';
import { highlightClasses, bananamarkLanguage, newlineAndIndent } from 'bananamark-codemirror';

// The language (src/language.mjs): bananamark's grammar with folding and keys. The grammar itself is bananamark's
// (its highlighting is tested there and, on every page, by the site).
const bananaMarkdown = () => bananamarkLanguage({ wikiLinks: true });

// Enter: a new line at the indentation of the line's text (a list item's, also from its first line), no new list
// marker; CodeMirror's own Enter in the front matter, code and display formulas ("¦": the cursor).
function enter(text) {
  let state = EditorState.create({ doc: text.replace('¦', ''), extensions: bananaMarkdown(), selection: EditorSelection.cursor(text.indexOf('¦')) });
  if (!newlineAndIndent({ state, dispatch: transaction => { state = transaction.state; } })) return null;
  const doc = state.doc.toString(), head = state.selection.main.head;
  return doc.slice(0, head) + '¦' + doc.slice(head);
}
assert.equal(enter('- a¦\n\n- b'), '- a\n  ¦\n\n- b');
assert.equal(enter('- a\n  b¦'), '- a\n  b\n  ¦');
assert.equal(enter('1. a¦'), '1. a\n   ¦');
assert.equal(enter('10. a¦'), '10. a\n    ¦');
assert.equal(enter('- [ ] a¦'), '- [ ] a\n  ¦', 'at the text, not after the task box');
assert.equal(enter('- a\n\n  - b¦'), '- a\n\n  - b\n    ¦');
assert.equal(enter('(i) a¦'), '(i) a\n    ¦', 'a labelled item');
assert.equal(enter('- (i) a¦'), '- (i) a\n      ¦');
assert.equal(enter('[^1]: 注¦'), '[^1]: 注\n    ¦');
assert.equal(enter('> - a¦'), '> - a\n>   ¦');
assert.equal(enter('正文¦'), '正文\n¦');
assert.equal(enter('- a  ¦  b'), '- a\n  ¦b', 'the spaces around the cursor go');
assert.equal(enter('- a\n  ¦'), '- a\n\n  ¦', 'a line of spaces is left empty');
assert.equal(enter('¦- a'), '\n¦- a');
assert.equal(enter('---\ncategories:\n  - a¦\n---\n'), null);
assert.equal(enter('```\n- a¦\n```'), null);
assert.equal(enter('\\[\n- x¦\n\\]'), null);

// Folding: the front matter, and environments (nested ones counted, fences in code are not fences); each
// keeps its first and last lines.
{
  const state = EditorState.create({ doc: '---\ntitle: 甲\ncategories: []\n---\n\n::: theorem [A]\n甲\n::: proof\n乙\n:::\n丙\n:::\n\n```markdown\n::: remark\n```\n::: remark\n:::\n', extensions: [bananaMarkdown()] });
  const folds = [];
  for (let n = 1; n <= state.doc.lines; n++) {
    const line = state.doc.line(n), range = foldable(state, line.from, line.to);
    if (range) folds.push([n, state.doc.lineAt(range.from).number + 1, state.doc.lineAt(range.to).number]);
  }
  assert.deepEqual(folds, [[1, 2, 3], [6, 7, 11], [8, 9, 9], [14, 15, 16]]);
}

// codeLanguages: a fenced block of another name highlighted in that language.
{
  const classesOf = (language, text, word) => {
    const found = [];
    highlightTree(language.language.parser.parse(text), highlightClasses, (from, to, classes) => { if (text.slice(from, to) === word) found.push(classes); });
    return found;
  };
  assert.deepEqual(classesOf(bananamarkLanguage({ codeLanguages: { terms: yamlLanguage } }), '```terms\n群:\n  en: group\n```\n', 'en'), ['bm-hl-key']);
  assert.deepEqual(classesOf(bananamarkLanguage(), '```terms\n群:\n  en: group\n```\n', 'en'), []);
}

console.log('语言：回车的缩进、折叠、其他语言的代码块验证通过');
