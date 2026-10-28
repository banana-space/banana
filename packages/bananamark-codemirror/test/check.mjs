import assert from 'node:assert/strict';
import { Text } from '@codemirror/state';
import { checkDocument as anyDocument, checkFile as anyFile, problemRange } from 'bananamark-codemirror';

// Chinese pages, errors in Chinese (English by default).
const checkDocument = (source, options) => anyDocument(source, { lang: 'zh-cn', locale: 'zh-cn', ...options });
const checkFile = (text, options) => anyFile(text, { lang: 'zh-cn', locale: 'zh-cn', ...options });
assert.deepEqual(anyDocument('See @nowhere.'), [{ line: 1, column: 5, message: 'no such label: nowhere', code: 'label_missing', params: { name: 'nowhere' } }], 'English by default');

// Checking (src/check.mjs): bananamark's first error as a problem, at its line and column.
assert.deepEqual(checkDocument('## 节\n\n见 @nowhere。'), [{ line: 3, column: 3, message: '引用标签不存在：nowhere', code: 'label_missing', params: { name: 'nowhere' } }]);
assert.deepEqual(checkDocument('正文 $x$。'), []);
// Formulas checked with KaTeX unless said otherwise; lineOffset counts the lines before the body.
assert.match(checkDocument('甲\n$\\frac{1}$', { lineOffset: 4 })[0].message, /公式无法渲染/);
assert.equal(checkDocument('甲\n$\\frac{1}$', { lineOffset: 4 })[0].line, 6);
assert.deepEqual(checkDocument('$\\frac{1}$', { checkMath: false }), []);
// bananamark's options: the locale of errors, a site's tags and data blocks.
assert.deepEqual(checkDocument('见 @x', { locale: 'en' }).map(problem => problem.message), ['no such label: x']);
// Not the page's: a wrong option is thrown, not marked in the page.
assert.throws(() => checkDocument('甲', { locale: 'fr' }), /unknown locale "fr"/);
const tags = { see: { paired: true, render: () => '' } };
assert.deepEqual(checkDocument('<see>甲</see>', { tags }), []);
assert.match(checkDocument('<see>甲</see>')[0].message, /不能使用 HTML 标签 <see>/);
assert.match(checkDocument('```notes\n```', { dataBlocks: { notes: { read: (source, { fail }) => fail('空的', 0) } } })[0].message, /空的/);
// A book's page: references to the book's other pages, by their labels, are not errors.
assert.deepEqual(checkDocument('见 @thm:basis。', { labels: [{ name: 'thm:basis', text: '定理 1.1', page: 'a' }] }), []);
assert.match(checkDocument('见 @thm:other。', { labels: [] })[0].message, /thm:other/);
// A whole file: its front matter skipped, lines counted from the file's first.
assert.deepEqual(checkFile('---\ntitle: 甲\nnote: $\n---\n\n见 @x。'), [{ line: 6, column: 3, message: '引用标签不存在：x', code: 'label_missing', params: { name: 'x' } }]);
assert.equal(checkFile('---\n\n见 @x。\n')[0].line, 3, 'a rule at the start that does not close is the body');

// Where a problem is marked: the word at its column (a [[link]] whole), or its line.
const doc = Text.of(['甲', '见 [[群论]] 与 x。']);
assert.deepEqual(problemRange(doc, 2, 3), { from: 4, to: 10 });
assert.deepEqual(problemRange(doc, 2, 12), { from: 13, to: 14 });
assert.deepEqual(problemRange(doc, 1), { from: 0, to: 1 });
assert.deepEqual(problemRange(doc, 9), { from: 2, to: 15 }, 'a line past the end: the last');
console.log('检查：第一个错误及其行列、KaTeX、选项、书中的页面、标出的范围验证通过');
