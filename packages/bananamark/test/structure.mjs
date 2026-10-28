import assert from 'node:assert/strict';
import { exampleTags, fixture, starFixture } from './fixtures.mjs';
import { headingId as anyHeadingId } from 'bananamark/internal/structure.mjs';
import { transformDocument as transform, zh } from './zh.mjs';

const headingId = (title, options) => anyHeadingId(title, { lang: 'zh-cn', ...options });
import { inspectDocument } from 'bananamark/internal/nodes.mjs';

// The document written out (inspectDocument): nodes as ⟦type field="…"⟧.
const transformDocument = (source, options) => inspectDocument(transform(source, options));
// A document's nodes where pattern finds them in its Markdown (their index the first group), in order.
const nodes = (document, pattern) => [...document.markdown.matchAll(pattern)].map(match => document.nodes[match[1]]);
const markers = /@@node:(\d+):node@@/g, links = /\]\(bananamark:(\d+)\)/g;
// The environments a page opens: kind, caption (“定理 1.2”: the reference text, number included), number, title.
const captions = document => nodes(document, markers).filter(node => node.type === 'environment')
  .map(({ kind, caption, title }) => ({ kind, caption, number: caption.match(/ (\S+)$/)?.[1] ?? '', title }));
// The references to the target id (text: the reference's text written by the syntax layer).
const references = (document, id) => nodes(document, links).filter(node => node.type === 'reference' && node.id === id);
const equations = document => nodes(document, markers).filter(node => node.type === 'math' && node.id !== undefined);
const converted = transform(fixture);
assert.deepEqual(captions(converted).map(c => [c.kind, c.number]), [
  ['definition', '1'], ['definition', '1.1'], ['theorem', '1.2'], ['proof', ''],
  ['lemma', '1.3'], ['proposition', '1.4'], ['corollary', '1.5'], ['example', '1.6'], ['remark', '1.7'], ['theorem', '2.1'],
]);
assert.equal(captions(converted)[2].caption, '定理 1.2');
assert.equal(captions(converted)[2].title, '**主要结论**');
assert.ok(references(converted, 'thm:key').some(reference => reference.text === '定理 1.2'));
assert.ok(references(converted, 'thm:key').some(reference => reference.caption));
assert.ok(references(converted, '第二节').some(reference => reference.text === '第 2 节'));
assert.ok(references(converted, 'eq:one').some(reference => reference.text === '(1.1)'));
assert.ok(references(converted, '小节-a').some(reference => reference.caption));
assert.match(inspectDocument(converted), /## 第二节 ⟦heading id="第二节" number="2"⟧/);
assert.deepEqual(equations(converted).map(e => [e.id, e.tex.match(/\\tag\{([^}]+)\}$/)[1]]), [
  ['eq:intro', '1'], ['eq:one', '1.1'], ['', '2.1'],
]);
assert.match(transformDocument('## 第一行\n\n第二行\n第三行\n---\n'), /## 第二行 第三行 ⟦heading id="第二行第三行" number="2"⟧/);
assert.deepEqual(references(transform('## café {@cafe\u0301}\n\n@café'), 'cafe').map(reference => reference.text), ['第 1 节']);
assert.doesNotMatch(inspectDocument(converted), /id="(?:sec:|sub)/);
// Heading IDs use the same formula keys as wiki lookup: H^1 and H_1 differ.
for (const [title, id] of [
  ['Über', 'uber'], ['U\u0308ber', 'uber'], ['Poincaré–Lefschetz', 'poincare-lefschetz'],
  [String.raw`$\infty$-范畴`, '∞-范畴'], [String.raw`$A \otimes B$`, 'a⊗b'], ['$H^1$ 的计算', 'h1-的计算'], ['$H_1$ 的计算', 'h_1-的计算'],
  [String.raw`\(\varnothing\)`, '∅'], [String.raw`\[\alpha\]`, 'α'],
  ['**[Über](https://example.com/ignored)**', 'uber'], ['[[文章|Poincaré–Lefschetz]]', 'poincare-lefschetz'],
  ['<em>Über</em> &ndash; &#x221e;', 'uber---∞'], ['!!!', 'heading'],
  // ASCII 符号不写进锚点（原来会使 Goldmark 的 {#…} 属性失效），例如公式中的 +、=。
  [String.raw`非零区域$\sigma\ge1-A/\log(|t|+2)$`, '非零区域-σ≥1−alog∣t∣2'], ['$a+b=c$ 与 $x^2$', 'abc-与-x2'],
]) assert.equal(headingId(title), id);
for (const title of ['`code`', '$A$', '[文字](https://example.com)']) {
  assert.match(transformDocument(`${title}\n---\n`), /number="1"⟧/);
}

const protectedSources = [
  '`@missing`', '```markdown\n# 一级标题\n::: theorem\n@missing\n```',
  '> ```\n> # 一级标题\n> @missing\n> ```',
  '    # 一级标题\n    ::: theorem\n    @missing\n',
  '<!--\n# 一级标题\n@missing\n::: theorem\n-->',
  '[文字](https://example.com/@missing)', '[id]: /@missing',
];
for (const source of protectedSources) assert.equal(transformDocument(source), source);
// A tag's parameters are not references.
// A parameter of the page's text (the spoiler's title) is converted as the page's text is.
assert.equal(transformDocument('## 节 {@s}\n\n<spoiler title="见 @s 与 $x$，`@s`">\n正文\n</spoiler>'), '## 节 ⟦heading id="节" number="1"⟧\n\n⟦spoiler title="见 [reference](⟦reference id=\\"节\\" text=\\"第 1 节\\"⟧) 与 ⟦math tex=\\"x\\"⟧，`@s`"⟧\n正文\n⟦/spoiler⟧');
assert.throws(() => transformDocument('\n<spoiler title="见 @missing">\n正文\n</spoiler>', { file: 'f.md' }), error => error.code === 'label_missing' && error.line === 2 && error.column === 19);

// HTML-style tags (bananamark's and a site's, exampleTags) become nodes; what they hold is Markdown as usual. Nothing else that reads as HTML passes,
// and parameters are plain text.
const tagged = transformDocument('<note>[[甲]]</note> 与 <lang grc-Latn>*x*</lang>，**米田 信夫** <person original="[米田]<よねだ>" lang="ja" years="1930--1996" />；甲 <person years="?">\n\n<align right>\n——某人\n</align>', { tags: exampleTags });
assert.equal(tagged, '⟦note⟧[甲](⟦wiki target="甲" name="甲"⟧)⟦/note⟧ 与 ⟦lang grc-Latn⟧*x*⟦/lang⟧，**米田 信夫**⟦person original="[米田]<よねだ>" lang="ja" years="1930--1996"⟧；甲⟦person years="?"⟧\n\n⟦align right⟧\n——某人\n⟦/align⟧');
for (const source of ['n<m 时，m>k', 'a < b', 'a<b, c>d', '<https://example.com>', '<a@example.com>', '`<script>`', '```\n<script>alert(1)</script>\n```', '<!-- <b> -->', '::: theorem [$a<b>c$ 与 `<x>`]\n甲\n:::']) {
  assert.doesNotThrow(() => transformDocument(source, { file: 'f.md', tags: exampleTags }), source);
}
for (const [source, error] of [
  ['<script>alert(1)</script>', /f.md:1: 不能使用 HTML 标签 <script>：页面中只能使用 <lang>、<align>、<spoiler>、<note>、<person>/],
  ['甲\n\n<img src=x onerror=alert(1)>', /f.md:3: 不能使用 HTML 标签 <img>/],
  ['<pre>\n代码\n</pre>', /不能使用 HTML 标签 <pre>/],
  ['<a\nhref="javascript:alert(1)">x</a>', /不能使用 HTML 标签 <a>/],
  ['<theorem-start>', /不能使用 HTML 标签 <theorem-start>/],
  ['::: theorem [<lang de>Satz</lang>]\n甲\n:::', /f.md:1: 环境的标题中不能使用标签 <lang>/],
  ['<note x>甲</note>', /<note> 不接受参数/],
  ['<note />', /<note> 需要结束标签 <\/note>/],
  ['<note>甲', /f.md:1: <note> 没有结束：缺少 <\/note>/],
  ['甲</note>', /<\/note> 前面没有对应的 <note>/],
  ['<note><lang en>甲</note></lang>', /<\/note> 与前面的 <lang> 不配对/],
  ['<lang en onclick="x">甲</lang>', /<lang> 的语言代码有误/],
  ['<lang EN>甲</lang>', /<lang> 的语言代码有误：“EN”/],
  ['<lang>甲</lang>', /<lang> 的语言代码有误/],
  ['<lang en">甲</lang>', /<\/lang> 前面没有对应的 <lang>/], // Not a tag: Markdown shows it as text.
  ['<align left>甲</align>', /<align> 的参数只能是 right 或 center/],
  ['<person years="1" wrong="x">', /<person> 没有参数 wrong：可以使用的有 original、lang、translit、ipa、years/],
  ['<person name="甲" years="1">', /<person> 没有参数 name/],
  ['<person lang="en">', /<person> 至少需要 original、translit、ipa、years 之一/],
  ['<person years="1" years="2">', /参数 years 重复/],
  ['<person years>', /参数 years 需要一个值/],
  ["<person years='1\"2'>", /参数 years 的值有误/],
  ['<person years="1\\2">', /参数 years 的值有误/],
  ['<person years="{{.Site}}">', /参数 years 的值有误/],
  ['<person years="<b>1</b>">', /参数 years 的值有误/],
  ['<person original="<script>">', /参数 original 的值有误/],
  ['<person years="1" lang="en x">', /<person> 的语言代码有误/],
  [`<person years="${'1'.repeat(301)}">`, /参数 years 的值有误/],
  ['</person>', /<person> 单独使用，没有结束标签/],
  ['<spoiler title="甲" open>乙</spoiler>', /<spoiler> 没有参数 open/],
]) assert.throws(() => transformDocument(source, { file: 'f.md', tags: exampleTags }), error, source);
// Without a site's tags, only bananamark's; a site may remove one of them.
assert.throws(() => transformDocument('<note>甲</note>', { file: 'f.md' }), /不能使用 HTML 标签 <note>：页面中只能使用 <lang>、<align>、<spoiler>；/);
assert.throws(() => transformDocument('<align right>甲</align>', { tags: { align: false } }), /页面中只能使用 <lang>、<spoiler>；/);
assert.throws(() => transformDocument('甲', { tags: { Note: { render: () => '' } } }), /HTML 式标签 Note 的设置无效/);
assert.throws(() => transformDocument('甲', { tags: { note: {} } }), /HTML 式标签 note 的设置无效/);
const opaque = transform(String.raw`\[
# not a heading
::: theorem
@missing
\]`);
assert.match(inspectDocument(opaque), /^⟦math tex="[^"]*" display=true⟧/);
assert.deepEqual(captions(opaque), []);
// 列表项中的 math 围栏可以比内容列多缩进；输出保留缩进（仍在列表项内），TeX 去掉缩进，标签照常注册。
const listed = transform('- 项\n\n    ```math {@y}\n    x\n    ```\n\n    见 @y。\n');
assert.match(inspectDocument(listed), /\n    ⟦math tex="x\\n\\\\tag\{1\}" display=true id="y"⟧/);
assert.equal(references(listed, 'y').length, 1);
assert.equal(equations(listed)[0].tex, 'x\n\\tag{1}');
// 引用块中的多行公式：续行的 > 标记属于引用块，不进入 TeX；公式中以 > 开头的行保留。行间公式的 TeX 去掉各行行首与首尾的
// 空白（源文件的排版不改变页面）。
const quotedMath = tex => nodes(transform(tex), markers).find(node => node.type === 'math' && node.display).tex;
assert.equal(quotedMath('> \\[\n> a\n> > b\n> \\]\n'), 'a\n> b');
assert.equal(quotedMath('\\[\na\n> b\n\\]\n'), 'a\n> b');
assert.equal(quotedMath('甲\n\\[  \n    a \\\\\n      b\n  \\]\n'), 'a \\\\\nb');
assert.equal(transformDocument(String.raw`\@missing`), String.raw`\@missing`);
assert.match(transformDocument('```math\nx=1 % \\tag{comment}\n```'), /\\tag\{1\}" display=true⟧/);

for (const [source, error] of [
  ['# 一级标题', /不能使用一级标题/], ['标题\n===', /不能使用一级标题/],
  ['多行\n一级标题\n===', /不能使用一级标题/],
  ['@missing', /引用标签不存在/],
  ['## 节 {@same}\n::: theorem {@same}\n::: ', /引用标签重复/],
  ['::: theorem {@}\n:::', /引用标签无效/],
  ['::: theorem', /缺少结束/], [':::', /结束围栏不匹配/],
  [':::: theorem\n:::', /结束围栏不匹配/],
  ['::: unknown\n:::', /未知定理环境/], ['::: theorem 标题\n:::', /标题应写成/],
  ['::: theorem\n## 新节\n:::', /环境内不能开始/],
  ['::: theorem\n::: proof\n证明\n:::\n:::', /证明必须独立/],
  ['::: proof\n::: theorem\n正文\n:::\n:::', /证明内部不能嵌套/],
  ['```math\nx=1', /缺少结束围栏/],
  ['```math\nx=1 \\tag{2}\n```', /不能手写/],
  ['```math\nx=1 \\tag*{2}\n```', /不能手写/],
  ['```math [标题]\nx=1\n```', /仅接受可选/],
]) assert.throws(() => transformDocument(source, { allowH1: false }), error);
assert.match(transformDocument('# 一级标题'), /^# 一级标题/, 'first-level headings are allowed by default');
assert.throws(() => transformDocument('\n@missing', { file: 'content/wiki/a/index.md', lineOffset: 5 }), /content\/wiki\/a\/index.md:7: 引用标签不存在/);
assert.throws(() => transformDocument('甲\n\n```\n@@node:0:node@@\n```', { file: 'f.md' }), /f.md:4: 页面中不能出现 bananamark 内部使用的写法：@@node:/);
// The block structure is the renderer's: a footnote's indented paragraphs are paragraphs, not code.
assert.equal(transformDocument('正文[^1]。\n\n[^1]: 甲\n\n    乙 $x$\n'), '正文[^1]。\n\n[^1]: 甲\n\n    乙 ⟦math tex="x"⟧\n');
assert.equal(transformDocument('正文\n\n    代码 $x$\n'), '正文\n\n    代码 $x$\n', 'indented code elsewhere');
// Hugo's shortcodes are text like any other.
assert.equal(transformDocument('{{< see >}} $x$ {{% y %}}'), '{{< see >}} ⟦math tex="x"⟧ {{% y %}}');
// The author's attributes of a heading go into its node; ones Goldmark could not read are an error.
assert.match(transformDocument('## 节 {.a key="v" @s}'), /⟦heading id="节" classes=\["a"\] attributes=\[\["key","v"\]\] number="1"⟧/);
assert.throws(() => transformDocument('## 节 {k=}', { file: 'f.md' }), /f.md:1: 标题的属性无法解析：k=/);
// A heading's id is its text's (references and the contents go by it): {#id} is an error that says how to refer to it.
assert.throws(() => transformDocument('## 节 {.a #b}', { file: 'f.md' }), error => error.code === 'heading_id' && error.params.id === 'b' && error.message === 'f.md:1: 标题的 id 由标题文字得到：引用它请写 {@标签}，不能写 {#b}');
// KaTeX's macros serve the names formulas give: a heading's id and a wiki link's target.
{
  const katex = { macros: { '\\RR': '\\mathbb{R}' } };
  assert.equal(transformDocument('## $\\RR$ 空间 {@sec:r}\n\n见 @sec:r 与 [[$\\RR$ 空间]]。', { katex }),
    '## ⟦math tex="\\\\RR"⟧ 空间 ⟦heading id="r-空间" number="1"⟧\n\n见 [reference](⟦reference id="r-空间" text="第 1 节"⟧) 与 [⟦math tex="\\\\RR"⟧ 空间](⟦wiki target="R 空间" name="ℝ 空间" source="$\\\\RR$ 空间"⟧)。');
  assert.throws(() => transformDocument('## $\\RR$ 空间'), error => error.code === 'math_invalid');
}
// A formula that does not close by the end of its paragraph is reported where it starts, not where its
// stray dollars pair up wrongly; \$ is a literal dollar.
assert.throws(() => transformDocument('正文。\n\n${$甲\n\n::: theorem\n乙\n:::\n', { file: 'f.md' }), error => error.message === 'f.md:3: 公式没有结束：“${$甲” 在段落结束之前没有闭合' && error.column === 1);
assert.throws(() => transformDocument('价格 $5。', { file: 'f.md' }), /f.md:1: 公式没有结束：“\$5。”/);
assert.throws(() => transformDocument('甲\n\n\\[[text]]\n\n乙 \\[x\\]\n', { file: 'f.md' }), error => /^f.md:3: 公式没有结束：“\\\[\[text\]\]”/.test(error.message) && error.column === 1);
assert.doesNotThrow(() => transformDocument('价格 \\$5，$x$。', { file: 'f.md' }));
// Empty formulas leave nothing (the passthrough would leave its marker).
assert.equal(transformDocument('甲\n\n\\[\\]\n\n$$$$ 与 $ $。'), '甲\n\n\n\n 与 。');
// The editor checks formulas with KaTeX first: an error names the formula's line.
assert.throws(() => transformDocument('甲\n\n$\\begin{alignedat}{1}a&b&c&d\\end{alignedat}$', { file: 'f.md', checkMath: true }), /f.md:3: 公式无法渲染：Too many math in a row/);
assert.throws(() => transformDocument('```math\n\\frac{1}\n```', { file: 'f.md', checkMath: true }), /f.md:1: 公式无法渲染/);
assert.doesNotThrow(() => transformDocument('$\\mathbb{1}$ $\\begin{tikzcd} A \\arrow[r] & B \\end{tikzcd}$', { file: 'f.md', checkMath: true }));
assert.doesNotThrow(() => transformDocument('$\\begin{alignedat}{1}a&b&c&d\\end{alignedat}$', { file: 'f.md' }), 'only in the editor');
// Likewise what would otherwise protect the rest of the page silently: a comment without -->, a code block
// without its closing fence.
for (const [source, error] of [
  ['甲\n\n<!-- 注释\n\n乙 $x$', /f.md:3: 注释没有结束/],
  ['甲\n\n```text\n代码\n\n乙', /f.md:3: 代码块没有结束：缺少与开头的 ``` 对应的结束围栏/],
]) assert.throws(() => transformDocument(source, { file: 'f.md' }), error);
for (const source of ['* 项\n  ```\n  代码\n  ```\n', '<align right>\n甲\n</align>', '<!-- 注释 -->\n甲']) assert.doesNotThrow(() => transformDocument(source, { file: 'f.md' }));

const stars = transform(starFixture), { sectionNumbers } = stars.meta;
assert.deepEqual(captions(stars).map(c => [c.kind, c.number]), [
  ['theorem', '1'], ['theorem', ''], ['lemma', ''], ['definition', '1.1'], ['theorem', '1.2'], ['theorem', ''],
]);
assert.deepEqual(equations(stars).map(e => e.tex.match(/\\tag\{([^}]+)\}$/)[1]), ['1', '1.1', '1.2']);
assert.deepEqual(sectionNumbers, { '前言': '', '第一节': '1', '插入说明': '', '附录': '', '字面星号': '2', '强调': '3' });
for (const [id, number] of [['a', '3'], ['b', '4'], ['child', '4.5'], ['grandchild', '4.5.1'], ['reset', '1'], ['quoted', '8'], ['zero', '0']]) {
  assert.ok(references(stars, id).some(reference => reference.text === number), id);
}
for (const [id, number] of [['formula-before', '1'], ['formula-after', '2'], ['block-inner', '1'], ['block-after', '1']]) {
  assert.ok(references(stars, id).some(reference => reference.text === number), id);
}
// An unnumbered environment is referred to by its name, with its title when it has one.
assert.ok(nodes(stars, links).some(node => node.type === 'reference' && node.text === '定理' && node.title));
assert.ok(nodes(stars, links).some(node => node.type === 'reference' && node.text === '引理' && !node.title));
assert.match(inspectDocument(stars), /## 字面星号 \\\* ⟦heading id="字面星号" number="2"⟧/);
assert.deepEqual(captions(transform('## 前言 *\n::: theorem\n正文\n:::\n::: theorem\n正文\n:::')).map(c => c.caption), ['定理 1', '定理 2']);
assert.deepEqual(captions(transform('## 第一节\n::: theorem*\n正文\n:::\n::: theorem\n正文\n:::')).map(c => c.caption), ['定理', '定理 1.1']);
for (const title of ['参考文献* {@ref}', '参考文献 * {@ref}', '参考文献 {@ref}*', '参考文献 {@ref} *']) {
  assert.match(transformDocument(`## ${title}\n\n@ref`), /## 参考文献 ⟦heading id="参考文献" unnumbered=true⟧/);
}
for (const title of [String.raw`字面星号\*`, '*斜体*', '**强调**', '`星号*`', '$x^*$']) {
  assert.match(transformDocument(`## ${title}`), /number="1"⟧/);
}
assert.match(transformDocument('## **强调***'), /## \*\*强调\*\* ⟦heading id="强调" unnumbered=true⟧/);
// Code and TeX can contain apparent list declarations without creating targets.
for (const source of [
  '```markdown\n1. {@missing} 示例\n```',
  '    1. {@missing} 缩进代码\n',
  '> ```markdown\n> 1. {@missing} 引用块中的代码\n> ```',
  '<!--\n1. {@missing} 注释\n-->',
]) assert.equal(transformDocument(source), source);
assert.doesNotThrow(() => transformDocument(String.raw`\[
1. {@missing} TeX
\]`));
assert.deepEqual(references(transform('1. 外层\n\n    1. {@inner} 内层\n\n        @inner'), 'inner').map(reference => reference.text), ['1.1']);
assert.match(transformDocument('1. {@a} A\n\n    ```\n    1. {@missing} code\n    ```\n\n1. {@b} B\n\n@b'), /⟦reference id="b" text="2"⟧/, 'item 2');
assert.match(transformDocument('1. A\n\n- 无序父项\n\n  3. {@a} 有序子项\n\n@a'), /⟦reference id="a" text="3"⟧/, 'item 3');
assert.match(transformDocument('1. {@cafe\u0301} A\n\n@café'), /⟦reference id="café" text="1"⟧/, 'item 1');
assert.throws(() => transformDocument('1. {@same} A\n1. {@same} B'), /引用标签重复/);
assert.throws(() => transformDocument('::: theorem {@same}\n内容\n:::\n\n1. {@same} A'), /引用标签重复/);
assert.throws(() => transformDocument('1. {@same} A\n\n::: theorem {@same}\n内容\n:::'), /<正文>:3: 引用标签重复：same（首次声明在第 1 行）/);
assert.throws(() => transformDocument('1. {@} A'), /引用标签无效/);
// Labelled list items: (a), iv), (A1), ($\ast$)… shown as written, as CommonMark list items of the same text
// column; a new labelled list does not interrupt a paragraph; references show the labels.
{
  const caption = (document, id) => references(document, id).find(reference => reference.caption).caption;
  const labelled = transform("前文\n\n(a) {@a} 甲\n(b) 乙\n    续行\n\n1. 外\n\n   (i) {@i} 内\n\n(T2'') 撇\niv) {@iv} 四\n\n@a @i @iv @-a");
  assert.match(inspectDocument(labelled), /^00\) ⟦itemLabel⟧\(a\)⟦itemLabelEnd⟧⟦itemTarget id="a"⟧甲$/m, 'the spaces after a label declaration go too');
  assert.match(inspectDocument(labelled), /^00\) ⟦itemLabel⟧\(b\)⟦itemLabelEnd⟧乙\n    续行$/m);
  assert.match(inspectDocument(labelled), /^   00\) ⟦itemLabel⟧\(i\)/m);
  assert.match(inspectDocument(labelled), /\(T2′′\)/, "' is a prime");
  assert.match(inspectDocument(labelled), /^00\) ⟦itemLabel⟧iv\)/m);
  assert.deepEqual(['a', 'i', 'iv'].map(id => caption(labelled, id)), ['(a)', '1 (i)', 'iv']);
  assert.equal(references(labelled, 'a').filter(reference => reference.caption === '(a)').length, 2, '@-a shows the label too');
  assert.equal(caption(transform('iv) 甲\n\n    (a) {@y} 乙\n\n@y'), 'y'), 'iv (a)');
  assert.equal(caption(transform('(2) 甲\n\n    1. {@z} 乙\n\n@z'), 'z'), '(2) 1');
  for (const source of ['文字\n(3) 说凝聚', '(1\\) 与 (3) 之间', '(见下文) 文字', '(a b) 文字', '(1)文字', '12) 编号', '(T2½) 文字', '(★) 文字', '(2$x$) 文字', '(3.1) 文字']) {
    assert.doesNotMatch(transformDocument(source), /⟦itemLabel/, source);
  }
  assert.match(transformDocument('(iiiiiiiiiiiiiiii) 甲\n              乙'), /^000000000\)    ⟦itemLabel⟧\(iiiiiiiiiiiiiiii\)⟦itemLabelEnd⟧甲\n {14}乙$/m, 'at most column 14');
  // Alone on its line, a space after the marker (or Markdown reads it as text); on one line, nested lists, the
  // outer labels written with the innermost item's, with how many lists out they are.
  // Alone on its line: the label at the start of the next line's text, or (no text there: a display formula)
  // beside the item.
  assert.match(transformDocument('A4)\n    甲'), /^00\) \n    ⟦itemLabel⟧A4\)⟦itemLabelEnd⟧甲$/m);
  assert.match(transformDocument('A4)\n    \\[x\\]'), /^00\) ⟦itemLabel block=true⟧A4\)/m);
  assert.match(transformDocument('(a) \\[x\\]'), /^00\) ⟦itemLabel block=true⟧\(a\)/m);
  // Alone on its line before a blank line: the label stays on the marker's line, so the item goes on to its
  // indented lines after the blank line (a list, not code), whose formulas are converted.
  const bare = transform('B4)\n\n    1. {@w} 设 $x$，\n       \\[\n       y\n       \\]\n\n    2. 乙 $z$\n\n@w');
  assert.match(inspectDocument(bare), /^00\) ⟦itemLabel block=true⟧B4\)/m);
  assert.match(inspectDocument(bare), /^    1\. ⟦itemTarget id="w"⟧设 ⟦math tex="x"⟧，\n       ⟦math tex="y" display=true⟧\n\n    2\. 乙 ⟦math tex="z"⟧$/m);
  assert.equal(caption(bare, 'w'), 'B4 1');
  const chain = transform('(3) (4) {@x} 甲\n\n(5) (a) (i)\n\n@x');
  assert.match(inspectDocument(chain), /^00\) 00\) ⟦itemLabel outer=1⟧\(3\)⟦itemLabelEnd⟧⟦itemLabel⟧\(4\)⟦itemLabelEnd⟧⟦itemTarget/m);
  assert.match(inspectDocument(chain), /^00\) 00\) 00\) ⟦itemLabel outer=2 block=true⟧\(5\)⟦itemLabelEnd⟧⟦itemLabel outer=1 block=true⟧\(a\)⟦itemLabelEnd⟧⟦itemLabel block=true⟧\(i\)/m);
  assert.equal(caption(chain, 'x'), '(3) (4)');
  assert.match(transformDocument('1) 甲\n(a) 乙'), /^1\) 甲\n00\. ⟦itemLabel⟧\(a\)/m, 'a labelled item after 1) starts its own list');
  assert.throws(() => transformDocument('1) 甲\n(a) 乙\n2. 丙'), /标签列表项目/);
}
assert.throws(() => transformDocument('::: theorem* [@self] {@self}\n内容\n:::\n\n@self'), /循环引用/);
// 旧写法 -remark [寄语] 报错并给出新写法 remark* (寄语)。
assert.throws(() => transformDocument('::: -remark [寄语]\n二\n:::'), /不再使用 - 前缀[\s\S]*remark\* \(寄语\)/);
// ::: definition (条件)：自定的名称代替类型名称，编号、计数器与颜色仍按类型。
{
  const custom = transform('::: theorem\n一\n:::\n\n::: definition (条件) [同分布] {@cond}\n二\n:::\n\n::: remark* (异议)\n三\n:::\n\n见 @cond。');
  assert.deepEqual(captions(custom).map(c => [c.kind, c.caption]), [['theorem', '定理 1'], ['definition', '条件 2'], ['remark', '异议']], 'A starred custom environment takes no number');
  assert.deepEqual(references(custom, 'cond').map(reference => reference.text), ['条件 2']);
  // 不编号的自定名称不占计数器；有标题时引用带标题。
  const wisdom = transform('::: remark\n一\n:::\n\n::: remark* (寄语) [给读者] {@wisdom}\n二\n:::\n\n::: remark\n三\n:::\n\n见 @wisdom。');
  assert.deepEqual(captions(wisdom).map(c => c.caption), ['注 1', '寄语', '注 2'], 'An unnumbered custom environment takes no number');
  assert.ok(references(wisdom, 'wisdom').every(reference => reference.text === '寄语' && reference.title));
  for (const header of ['definition ()', 'definition ($x$)', 'definition (a[b])', 'proof (证)']) {
    assert.throws(() => transformDocument(`::: ${header}\n二\n:::`), /圆括号中的名称/, header);
  }
}

console.log('structure: passed');
