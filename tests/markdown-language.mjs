import assert from 'node:assert/strict';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse as parseHTML } from 'parse5';
import { createProject, buildProject } from './helpers/project.mjs';
import { execFileSync } from 'node:child_process';
import { highlightTree } from '@lezer/highlight';
import { EditorState } from '@codemirror/state';
import { foldable } from '@codemirror/language';
import { bananaHighlighter, bananaMarkdown, bananaParser } from '../scripts/shared/markdown-language.mjs';
import { formulaRanges } from '../scripts/prebuild/source-lines.mjs';
import { readWiki } from '../scripts/prebuild/markup.mjs';
import { transformDocument } from '../scripts/prebuild/structure.mjs';

// The editor's grammar (scripts/shared/markdown-language.mjs): each piece of the dialect gets its classes.
/** The text's highlighted pieces, as [text, classes]. */
function pieces(text) {
  const result = [];
  highlightTree(bananaParser.parse(text), bananaHighlighter, (from, to, classes) => result.push([text.slice(from, to), classes]));
  return result;
}
const classesOf = (text, piece) => pieces(text).filter(([value]) => value === piece).map(([, classes]) => classes);
const nodes = text => {
  const found = [];
  bananaParser.parse(text).iterate({ enter: node => { found.push([node.name, text.slice(node.from, node.to)]); } });
  return found;
};
const has = (text, name, value) => nodes(text).some(([n, v]) => n === name && v === value);

const page = '---\ntitle: 群\ncategories: [群论]\n---\n\n## 定义 {@sec:def}\n\n在[[代数学]]中，**群**是 $G \\times G$，见 [[集合|集合 $S$]] 与 @thm:uct，{@def:group}。\n';
assert.deepEqual(classesOf(page, 'title'), ['hl-key'], 'front matter keys');
assert.deepEqual(classesOf(page, '##'), ['hl-heading hl-mark'], 'a heading\'s # marks stay with the markup');
assert.deepEqual(classesOf(page, 'sec:def'), ['hl-heading hl-reference'], 'a heading\'s label');
assert.deepEqual(classesOf(page, '{@'), ['hl-heading hl-reference-mark', 'hl-reference-mark'], 'a label\'s braces and @');
assert.deepEqual(classesOf(page, '代数学'), ['hl-wiki']);
assert.deepEqual(classesOf(page, '[['), ['hl-wiki hl-wiki-mark', 'hl-wiki hl-wiki-mark']);
assert.deepEqual(classesOf(page, '\\times'), ['hl-math hl-command']);
assert.deepEqual(classesOf(page, 'S'), ['hl-wiki hl-math hl-variable'], 'a formula in a link label');
assert.deepEqual(classesOf(page, '集合 '), ['hl-wiki'], 'a link label, shown: blue');
assert.deepEqual(classesOf(page, '集合'), ['hl-wiki hl-wiki-target'], 'the target behind it: grey');
assert.deepEqual(classesOf(page, '代数学'), ['hl-wiki'], 'a target without a label is shown');
// YAML numbers apart from strings, in the front matter and in YAML blocks.
assert.deepEqual(classesOf('---\ntitle: 2012\nyear: 2012\nname: 甲 2\n---\n', '2012'), ['hl-number', 'hl-number']);
assert.deepEqual(classesOf('```bibliography\na:\n  year: 1955\n```\n', '1955'), ['hl-number']);
assert.deepEqual(classesOf('---\nname: 甲 2\n---\n', '甲 2'), ['hl-yaml-value'], 'a value, not a number');
assert.deepEqual(classesOf(page, 'thm:uct'), ['hl-reference'], 'a bare reference without the trailing comma');
assert.deepEqual(classesOf(page, '@'), ['hl-reference-mark']);
assert.deepEqual(classesOf(page, 'def:group'), ['hl-reference']);
// Block structure apart from inline markup.
const blocks = '* 甲 **乙** `c`\n1. 丙\n> 丁\n\n---\n\n```text\nx\n```\n';
assert.deepEqual(['*', '1.', '>', '---', '```'].map(mark => classesOf(blocks, mark)), [['hl-structure'], ['hl-structure'], ['hl-quote hl-structure'], ['hl-structure'], ['hl-structure', 'hl-structure']]);
assert.deepEqual(['**', '`'].map(mark => classesOf(blocks, mark)), [['hl-strong hl-mark', 'hl-strong hl-mark'], ['hl-mark', 'hl-mark']]);
// References end as the build ends them; e-mail addresses are not references.
assert.ok(!nodes('写信到 a@b.org。').some(([name]) => name === 'Reference'));
assert.ok(has('见 @eq:x.', 'Reference', '@eq:x'));

// Environments: name, title (with its own markup) and label.
const environment = '::: theorem* [万有 $x$ 定理] {@thm:uct}\n正文。\n:::\n';
assert.deepEqual(classesOf(environment, 'theorem*'), ['hl-environment-name']);
assert.deepEqual(classesOf(environment, 'thm:uct'), ['hl-reference']);
assert.deepEqual(classesOf(environment, ':::'), ['hl-structure', 'hl-structure']);
assert.ok(has(environment, 'InlineMath', '$x$'));
assert.ok(has('::: remark* (寄语)\n正文\n:::\n', 'EnvironmentName', 'remark* (寄语)'));
assert.ok(has('::: definition (条件) [同 $x$ 分布] {@c}\n正文\n:::\n', 'EnvironmentName', 'definition (条件)'));
assert.ok(has('::: definition (条件) [同 $x$ 分布] {@c}\n正文\n:::\n', 'InlineMath', '$x$'));
// A closing ::: right after a paragraph line ends the paragraph.
assert.equal(nodes('正文。\n:::\n').filter(([name]) => name === 'EnvironmentFence').length, 1);

// Display formulas: their lines are TeX even when they look like Markdown (a lone "=" would underline a
// heading, "+ x" start a list), also in a list item and after a paragraph line; text after \] on the
// closing line stays in the paragraph.
for (const text of ['甲\n\\[\na\n=\nb\n\\]\n', '* 项目\n    \\[\n    + x\n    \\]\n', '$$\n# x\n$$\n', '设 $a\n=\nb$ 与 \\(f\n+ g\\)。\n']) {
  const formulas = [], markdown = [];
  bananaParser.parse(text).iterate({ enter: node => {
    if (node.name === 'InlineMath' || node.name === 'DisplayMath') formulas.push([node.from, node.to]);
    if (/Heading|ListItem/.test(node.name)) markdown.push(node.from);
  } });
  assert.ok(formulas.length, `a formula in ${JSON.stringify(text)}`);
  assert.ok(!markdown.some(position => formulas.some(([from, to]) => from < position && position < to)), `no Markdown inside formulas: ${JSON.stringify(text)}`);
}
assert.ok(!nodes('设 $a\n=\nb$。\n').some(([name]) => name.startsWith('SetextHeading')));
assert.ok(!nodes('设 \\(f\n+ g\\)。\n').some(([name]) => name === 'BulletList'));
assert.ok(has('\\[x\\]从而 $y$。\n', 'InlineMath', '$y$'), 'text after a display formula on its line');
assert.ok(has('知$$\n    a\n$$\n', 'DisplayMath', '$$\n    a\n$$'), 'a $$ line closing a formula the paragraph opened');
assert.deepEqual(classesOf('\\[ x % 注释\n\\]\n', '% 注释'), ['hl-math hl-comment']);
// Display formulas' delimiters look like a math block's fence (light orange), inline ones' like marks; numbers
// in formulas are the formula's text.
assert.deepEqual(['\\[', '\\]', '$$', '$', '\\(', '\\)'].map(piece => classesOf('\\[\nx^2\n\\]\n设 $$y$$ 与 $z$、\\(w\\)。\n', piece)[0]),
  ['hl-math hl-structure', 'hl-math hl-structure', 'hl-math hl-structure', 'hl-math hl-math-mark', 'hl-math hl-math-mark', 'hl-math hl-math-mark']);
assert.deepEqual(classesOf('$x^{2.5}$\n', '2.5'), ['hl-math'], 'a number, as the formula\'s text');
// Text in a formula (\text and the like), and a formula in that text again; environment names; &.
{
  const text = '设 $a\\text{若 $b$ 则 {c} }c$ 与 $\\begin{aligned} x &= 1 \\end{aligned}$。\n';
  assert.deepEqual(pieces(text).filter(([, name]) => /math-mark|variable|tex-environment|command/.test(name)).map(([value, name]) => `${value}:${name.replace('hl-math ', '')}`),
    ['$:hl-math-mark', 'a:hl-variable', '\\text:hl-command', '$:hl-math-mark', 'b:hl-variable', '$:hl-math-mark', 'c:hl-variable', '$:hl-math-mark',
      '$:hl-math-mark', '\\begin:hl-command', 'aligned:hl-tex-environment', 'x:hl-variable', '&:hl-command', '\\end:hl-command', 'aligned:hl-tex-environment', '$:hl-math-mark']);
}

// Fenced code by language; footnotes; tags; tables split neither inside wiki links nor formulas.
assert.deepEqual(classesOf('```math {@eq:x}\nd^{n} \\circ d\n```\n', '\\circ'), ['hl-command']);
assert.deepEqual(classesOf('```terms\n群:\n  en: group\n```\n', 'en'), ['hl-key']);
// A fence's language and label.
assert.deepEqual(classesOf('```math {@eq:x}\nd\n```\n', 'math'), ['hl-code-language']);
assert.deepEqual(classesOf('```math {@eq:x}\nd\n```\n', 'eq:x'), ['hl-reference']);
assert.deepEqual(classesOf('```math {@eq:x}\nd\n```\n', '}'), ['hl-reference-mark']);
assert.deepEqual(classesOf('```tikz {caption="图"}\nd\n```\n', '图"}'), [], 'other attributes are not labels');
assert.deepEqual(classesOf('```bibliography\na: 1\n```\n', 'bibliography'), ['hl-code-language']);
// A formula that does not close by a blank line is not one: ${$ and \[[x]] do not take the next paragraphs.
assert.ok(!nodes('${$ 甲\n\n乙 } $x$\n').some(([name, value]) => name === 'InlineMath' && value !== '$x$'));
assert.ok(!nodes('\\[[text]]\n\n乙 \\[x\\]\n').some(([name, value]) => /Math$/.test(name) && value !== '\\[x\\]'));
assert.ok(has('\\[[E:K]=[E:L][L:K].\\]\n', 'DisplayMath', '\\[[E:K]=[E:L][L:K].\\]'));
// Brackets are links only with (url) or [label] after them: [text], [1], [@a, 注] and \\[[x]] are text.
for (const text of ['\\[[text]]', '[text] 甲', '[1]', '[@a, 注]']) assert.ok(!nodes(text + '\n').some(([name]) => name === 'Link'), text);
assert.ok(has('[文字](https://x.org) 与 [甲][乙]\n', 'Link', '[文字](https://x.org)') && has('[文字](https://x.org) 与 [甲][乙]\n', 'Link', '[甲][乙]'));
// Nor does a stray backtick make the next paragraph code.
assert.ok(has('`甲\n\n乙 $x$\n', 'InlineMath', '$x$'));
assert.ok(has('[^1]: 脚注 $x$。\n    续行 $y$。\n', 'InlineMath', '$y$'), 'a footnote and its indented continuation');
assert.ok(has('正文[^1]。\n', 'FootnoteMark', '[^1]'));
assert.deepEqual(['<', 'lang', 'grc', 'person', 'name', '"甲"', '</'].map(piece => classesOf('<lang grc>x</lang> <person name="甲">\n', piece)[0]),
  ['hl-structure', 'hl-code-language', 'hl-key', 'hl-code-language', 'hl-key', 'hl-yaml-value', 'hl-structure']);
// A line starting with a tag is a paragraph's, its Markdown read as usual (not an HTML block).
assert.ok(has('<align right>\n**甲** $x$\n</align>\n', 'InlineMath', '$x$'));
const table = '| 名称 | 公式 |\n| --- | --- |\n| [[同调群|同调]] | $|x|$ |\n';
assert.ok(has(table, 'WikiLink', '[[同调群|同调]]') && has(table, 'InlineMath', '$|x|$'));
assert.equal(nodes(table).filter(([name]) => name === 'TableCell').length, 4);
// Labelled list items: their marks, a formula in a label, paragraphs indented to an item's text (not code); a
// new labelled list does not interrupt a paragraph.
{
  const list = '($\\ast$) 乙\n(a) 甲\n\n    第二段\n';
  assert.ok(has(list, 'ListMark', '(a)') && has(list, 'InlineMath', '$\\ast$'));
  assert.equal(nodes(list).filter(([name]) => name === 'LabelledItem').length, 2);
  assert.ok(!nodes(list).some(([name]) => name === 'CodeBlock'));
  assert.ok(!nodes('文字\n(3) 说\n').some(([name]) => name === 'LabelledList'));
}
// No GFM extras the site does not have: ~x~ is text.
assert.ok(!nodes('a ~x~ b\n').some(([name]) => /Subscript|Strikethrough/.test(name)));

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

// All pages: the grammar finds exactly the formulas the build finds, every wiki link and every environment fence.
const files = execFileSync('git', ['-c', 'core.quotepath=off', 'ls-files', 'content/*.md', 'content/**/*.md'], { encoding: 'utf8' }).trim().split('\n');
let formulas = 0, wikiLinks = 0, fences = 0, slowest = 0;
for (const file of files) {
  const text = await readFile(file, 'utf8');
  const front = text.match(/^---\n[\s\S]*?\n---\n/)?.[0].length ?? 0;
  const start = performance.now();
  const tree = bananaParser.parse(text);
  slowest = Math.max(slowest, performance.now() - start);
  const math = [], code = [], links = new Map(), fenceLines = new Set();
  tree.iterate({ enter: node => {
    if (node.name === 'InlineMath' || node.name === 'DisplayMath') math.push([node.from, node.to]);
    else if (['InlineCode', 'FencedCode', 'CodeBlock'].includes(node.name)) code.push([node.from, node.to]);
    else if (node.name === 'WikiLink') links.set(node.from, node.to);
    else if (node.name === 'EnvironmentFence') fenceLines.add(text.lastIndexOf('\n', node.from - 1) + 1);
  } });
  const expected = formulaRanges(text.slice(front)).map(({ from, to }) => `${from + front}-${to + front}`);
  assert.deepEqual(math.filter(([from]) => from >= front).map(([from, to]) => `${from}-${to}`), expected, `${file}: formulas`);
  formulas += expected.length;
  const inside = (ranges, position) => ranges.some(([from, to]) => from <= position && position < to);
  for (let i = text.indexOf('[[', front); i >= 0; i = text.indexOf('[[', i + 1)) {
    const wiki = !inside(code, i) && !inside(math, i) && readWiki(text, i);
    if (!wiki) continue;
    // In an environment's title [ … ], the link starts after the title's bracket.
    if (links.get(i) !== wiki.end && !links.has(i + 1) && !/^:::.*\[$/.test(text.slice(text.lastIndexOf('\n', i) + 1, i + 1).trim())) {
      assert.fail(`${file}:${text.slice(0, i).split('\n').length}: wiki link ${text.slice(i, wiki.end)}`);
    }
    wikiLinks++;
    i = wiki.end - 1;
  }
  let lineStart = front;
  for (const line of text.slice(front).split('\n')) {
    if (/^\s*(?:>\s*)*:::/.test(line) && !inside(code, lineStart)) {
      assert.ok(fenceLines.has(lineStart), `${file}:${text.slice(0, lineStart).split('\n').length}: environment fence`);
      fences++;
    }
    lineStart += line.length + 1;
  }
}
// The site's code blocks in the dialect, YAML and TeX are highlighted at build time as the editor highlights
// them (the text unchanged); other languages are Chroma's.
{
  const root = await createProject('code-blocks', ['scripts', 'layouts', 'assets', 'static', 'i18n', 'data', 'hugo.toml']);
  try {
    await mkdir(join(root, 'content/wiki/code'), { recursive: true });
    await writeFile(join(root, 'data/categories.yaml'), '数学: {}\n');
    const markdownExample = '---\ntitle: 群\n---\n见 [[集合]] 与 @thm:a，$x < y$ & 1。\n\n```math {@eq:x}\nd \\circ d = 0\n```';
    await writeFile(join(root, 'content/wiki/code/index.md'), '---\ntitle: 代码\ncategories: [数学]\n---\n````markdown\n' + markdownExample + '\n````\n\n```yaml\ntitle: 甲\n```\n\n```latex\n\\[\n    \\frac{1}{2}\n\\]\n```\n\n```sh\nnpm run check\n```\n');
    buildProject(root);
    execFileSync(process.execPath, ['scripts/postbuild.mjs'], { cwd: root, stdio: 'pipe' });
    const html = await readFile(join(root, 'public/wiki/code/index.html'), 'utf8');
    const all = [];
    const walk = node => { all.push(node); for (const child of node.childNodes ?? []) walk(child); };
    walk(parseHTML(html));
    const textOf = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textOf).join('');
    const block = language => all.find(node => node.tagName === 'pre' && node.attrs.some(item => item.name === 'data-highlight' && item.value === language));
    const classes = node => { const found = []; const visit = n => { const c = n.attrs?.find(item => item.name === 'class')?.value; if (c) found.push([textOf(n), c]); for (const child of n.childNodes ?? []) visit(child); }; visit(node); return found; };
    assert.equal(textOf(block('markdown')), markdownExample, 'the text of a highlighted block is the code');
    assert.ok(classes(block('markdown')).some(([value, name]) => value === '集合' && name === 'hl-wiki'));
    assert.ok(classes(block('markdown')).some(([value, name]) => value === 'thm:a' && name === 'hl-reference'));
    assert.ok(classes(block('markdown')).some(([value, name]) => value === '\\circ' && name === 'hl-command'), 'a fence inside the example');
    assert.ok(classes(block('yaml')).some(([value, name]) => value === 'title' && name === 'hl-key'));
    assert.ok(classes(block('latex')).some(([value, name]) => value === '\\frac' && name === 'hl-command'));
    assert.deepEqual(classes(block('latex')).filter(([, name]) => name === 'hl-math-mark').map(([value]) => value), ['\\[', '\\]'], 'a LaTeX block\'s formula delimiters');
    assert.match(html, /<pre[^>]*class="chroma"[^>]*><code class="language-sh"/, 'other languages: Chroma');
  } finally { await rm(root, { recursive: true, force: true }); }
}

assert.ok(slowest < 2000, `parsing a page took ${Math.round(slowest)} ms`);
// The editor checks formulas with KaTeX before Hugo (scripts/prebuild/katex-check.mjs): every formula on the
// site passes, as it does in Hugo's KaTeX.
for (const file of files.filter(file => /^content\/(?:wiki|books|help)\//.test(file))) {
  const text = await readFile(file, 'utf8');
  const front = text.match(/^---\n[\s\S]*?\n---\n/)?.[0] ?? '';
  try { transformDocument(text.slice(front.length), { file, lineOffset: front.split('\n').length - 1, checkMath: true, pageAnchor: true }); }
  catch (error) { assert.doesNotMatch(error.message, /公式无法渲染/); }
}
console.log(`编辑器语法：页面各部分的高亮、公式内的行、脚注、标签、表格、折叠、站点代码块的高亮，以及全部 ${files.length} 页的 ${formulas} 个公式（与构建一致）、${wikiLinks} 个百科链接、${fences} 个环境围栏验证通过`);
