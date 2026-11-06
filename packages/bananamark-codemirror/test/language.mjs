import assert from 'node:assert/strict';
import { EditorSelection, EditorState } from '@codemirror/state';
import { foldable } from '@codemirror/language';
import { highlightTree } from '@lezer/highlight';
import { renderDocument } from 'bananamark';
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

// Bare addresses: the editor marks what the renderer links.
{
  const parser = bananamarkLanguage().language.parser;
  const marked = text => {
    const found = [];
    parser.parse(text).iterate({ enter: node => { if (node.name === 'URL' && node.node.parent?.name !== 'Link') found.push(text.slice(node.from, node.to)); } });
    return found;
  };
  for (const text of ['见 https://example.org/a?b=1。', '见https://example.org/a和', 'https://zh.wikipedia.org/wiki/群', '(www.example.org)', 'a@example.org，b@example.org.',
    '[见 https://example.org](/a)', 'http://localhost:3000/ ftp://example.org/ xhttps://example.org', '"https://example.org/a"', 'https://example.org/a_(b)_c, 与 https://example.org/a).']) {
    const { html } = renderDocument(text, { typography: false });
    const linked = [...html.matchAll(/<a href="(?:https?:\/\/[^"]*|mailto:[^"]*)"[^>]*>([^<]*)<\/a>/g)].map(match => match[1]);
    assert.deepEqual(marked(text), linked, text);
  }
}

// Emphasis and bold: the editor marks as many as the renderer writes, also where the dialect lets a run of stars (any
// number) stand between a letter and punctuation, and none where it leaves the stars as text.
{
  const parser = bananamarkLanguage({ wikiLinks: true }).language.parser;
  const marked = text => {
    const counts = { em: 0, strong: 0 };
    parser.parse(text).iterate({ enter: node => { if (node.name === 'Emphasis') counts.em++; if (node.name === 'StrongEmphasis') counts.strong++; } });
    return counts;
  };
  const rendered = text => {
    const { html } = renderDocument(text, { wikiLinks: true });
    return { em: html.split('<em>').length - 1, strong: html.split('<strong>').length - 1 };
  };
  const contexts = [['', ''], ['文字', '文字'], ['word', 'word'], ['（', '）'], ['文字，', '。'], ['$x$', '$y$'], ['[[甲]]', '[[乙]]'], ['1', '2']];
  const insides = ['强调', 'emph', '（注）', '$z$', '[[丙]]', '`k`', '“引”', '强调。', '(1)'];
  const cases = ['C*-代数与 C*-代数', '注* 文字*（注）*文字', 'a * b * c', '*a *b* c*', '文字*（注）文字', '- K2**) 证明', '文字*（注） $a*b$ 文字', '*斜体* **粗体** ***两者***', 'Ti*k*Z',
    '文字*（注） *文字', '文字*（注）\n\n文字）*文字', '## 参考文献*\n\n文字', '**甲*乙*丙**', '*甲**乙**丙*', 'a**(b)**c', 'a***(b)***c', '****甲****', '***甲** 乙*',
    '**甲***乙*', '*甲***乙**', '## 文字*（注）*\n\n文字', '- 甲*（注）*乙', '**1*', '*（**', '**$x$*', '甲\n\n**1*'];
  for (const [before, after] of contexts) for (const inside of insides) for (const stars of ['*', '**', '***']) cases.push(before + stars + inside + stars + after);
  for (const text of cases) assert.deepEqual(marked(text), rendered(text), text);
}

// Comments: what the editor marks as one is what the renderer leaves out.
{
  const parser = bananamarkLanguage().language.parser;
  const visible = text => {
    let result = '', at = 0;
    parser.parse(text).iterate({ enter: node => {
      if (node.name !== 'Comment') return;
      result += text.slice(at, node.from);
      at = node.to;
    } });
    return (result + text.slice(at)).replace(/^[ \t]*(?:[->][ \t]*)*/gm, '').replace(/(^|\s)#+\s/g, '$1').replace(/[#|:*-]{2,}|\|/g, '').replace(/\s+/g, ' ').trim();
  };
  const rendered = text => renderDocument(text, { typography: false }).html.replace(/<a class="bm-heading-link"[\s\S]*?<\/a>/g, '').replace(/<[^>]*>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/[#|:*-]{2,}|\|/g, '').replace(/\s+/g, ' ').trim();
  const cases = ['<!-- 说明 -->', '<!-- 说明 --> 文字', '<!-- a --> <!-- b --> 文字', '文字 <!-- 说明 --> 文字', '文字 <!-- a\nb --> 文字', '文字\n<!-- 说明 -->\n文字', '  <!-- 说明 --> 文字',
    '<!-- a\nb -->\n文字', '<!-- a\nb --> 文字', '<!-- a\n\nb -->\n\n文字', '<!-- a -- b -->', '文字 <!-- a -- b --> 文字', '<!-- $x$ [[甲]] @缺 -->', '<!--\n# 甲\n@缺\n::: theorem\n-->\n文字', '<!-- 甲 -->     文字', '<!-- 甲 --> # 标题',
    '- <!-- 说明 --> 文字\n- 乙', '- <!-- a\n  b --> 文字\n- 乙', '> <!-- 说明 --> 文字', '> <!-- a\n> b --> 文字', '> <!-- a\nb --> 文字', '# 标题 <!-- 说明 -->', '| a |\n|---|\n| <!-- 说明 --> 文字 |', '**<!-- 说明 -->文字**',
    '<?说明?> 文字', '文字 <?说明?> 文字', '<!DOCTYPE html> 文字', '文字 <![CDATA[说明]]> 文字', '<![CDATA[说明]]>'];
  for (const text of cases) assert.equal(visible(text), rendered(text), text);
  // In a paragraph's text a comment ends with the paragraph: one still open there is no comment, to either.
  {
    const text = '文字 <!-- a\n\nb --> 文字';
    let marked = false;
    parser.parse(text).iterate({ enter: node => { if (node.name === 'Comment') marked = true; } });
    assert.equal(marked, false);
    assert.match(renderDocument(text, { typography: false }).html, /<p>文字 &lt;!– a<\/p>\n<p>b –&gt; 文字<\/p>/);
  }
  // Marked in the theme's colour for comments, however it is written.
  for (const text of ['<!-- a -- b -->', '<!-- a\n\nb -->', '文字 <!-- a -- b --> 文字', '<?说明?> 文字']) {
    const classes = [];
    highlightTree(parser.parse(text), highlightClasses, (from, to, name) => classes.push(name));
    assert.ok(classes.includes('bm-hl-comment'), text);
  }
}

