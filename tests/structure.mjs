import { createProject, buildProject } from './helpers/project.mjs';
import assert from 'node:assert/strict';
import { parse, stringify } from 'yaml';
import { JSDOM } from 'jsdom';
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { headingId, transformDocument } from '../scripts/prebuild/structure.mjs';

const decode = value => Buffer.from(value, 'base64').toString();
const captions = result => [...result.matchAll(/kind="([^"]*)" group="[^"]*" name="([^"]*)" number="([^"]*)" title="([^"]*)"/g)]
  .map(match => ({ kind: match[1], name: match[2], number: match[3], title: decode(match[4]) }));
const equations = result => [...result.matchAll(/@@numberedmath:([^:]*):numberedmath@@/g)]
  .map(match => JSON.parse(decode(match[1]).slice('@@numbered:'.length)));
const fixture = String.raw`@thm:key [这个**定理**](@thm:key) @sec:second @eq:one @sub

::: definition [导言] {@intro}
导言的定义。
:::

~~~math {@eq:intro}
x = 0
~~~

## 第一节 {@sec:first}

::: definition [带 $A$ 的定义] {@def:key}
正文包含 [[顶点代数]] 和 $x$。

- 列表一
- 列表二
:::

:::: theorem [**主要结论**] {@thm:key}
@def:key
::::

::: proof [简证]
证明中的 @thm:key。

` + '```math {@eq:one}\n\\begin{aligned}\nx &= 1 \\\\\n  &= 1.\n\\end{aligned}\n```\n' + String.raw`
:::

::: lemma
引理正文。
:::
::: proposition
命题正文。
:::
::: corollary
推论正文。
:::
::: example
例子正文。
:::
::: remark
注的正文。
:::

### 小节 $A$ {@sub}

第二节 {@sec:second}
---------------------

::: theorem {@thm:second}
下一节重新计数。
:::

` + '```math\ny = 2\n```\n' + String.raw`

$$z = 3 \tag{custom}$$
`;
const converted = transformDocument(fixture);
assert.deepEqual(captions(converted).map(c => [c.kind, c.number]), [
  ['definition', '1'], ['definition', '1.1'], ['theorem', '1.2'], ['proof', ''],
  ['lemma', '1.3'], ['proposition', '1.4'], ['corollary', '1.5'], ['example', '1.6'], ['remark', '1.7'], ['theorem', '2.1'],
]);
assert.equal(captions(converted)[2].name, 'environment_theorem');
assert.equal(captions(converted)[2].title, '**主要结论**');
assert.match(converted, /reference:\?id=thm%3Akey&name=environment_theorem&number=1\.2/);
assert.ok(converted.includes('reference:?id=thm%3Akey&caption='));
assert.match(converted, /reference:\?id=%E7%AC%AC%E4%BA%8C%E8%8A%82&name=reference_section&number=2/);
assert.match(converted, /reference:\?id=eq%3Aone&name=reference_equation&number=1\.1/);
assert.ok(converted.includes('reference:?id=%E5%B0%8F%E8%8A%82-a&caption='));
assert.match(converted, /## 第二节 \{#第二节 data-section-number="2"\}/);
assert.deepEqual(equations(converted).map(e => [e.id, e.tex.match(/\\tag\{([^}]+)\}$/)[1]]), [
  ['eq:intro', '1'], ['eq:one', '1.1'], ['', '2.1'],
]);
assert.match(transformDocument('## 第一行\n\n第二行\n第三行\n---\n'), /## 第二行 第三行 \{#第二行第三行 data-section-number="2"\}/);
assert.match(transformDocument('## café {@cafe\u0301}\n\n@café'), /id=cafe&name=reference_section/);
assert.doesNotMatch(converted, /\{#(?:sec:|sub)/);
// Heading IDs use the same formula keys as wiki lookup: H^1 and H_1 differ.
for (const [title, id] of [
  ['Über', 'uber'], ['U\u0308ber', 'uber'], ['Poincaré–Lefschetz', 'poincare-lefschetz'],
  [String.raw`$\infty$-范畴`, '∞-范畴'], [String.raw`$A \otimes B$`, 'a⊗b'], ['$H^1$ 的计算', 'h1-的计算'], ['$H_1$ 的计算', 'h_1-的计算'],
  [String.raw`\(\varnothing\)`, '∅'], [String.raw`\[\alpha\]`, 'α'],
  ['**[Über](https://example.com/ignored)**', 'uber'], ['[[文章|Poincaré–Lefschetz]]', 'poincare-lefschetz'],
  ['<em>Über</em> &ndash; &#x221e;', 'uber---∞'], ['!!!', 'heading'],
  // ASCII 符号会使 Hugo 的 {#…} 属性失效，例如公式中的 +、=。
  [String.raw`非零区域$\sigma\ge1-A/\log(|t|+2)$`, '非零区域-σ≥1−alog∣t∣2'], ['$a+b=c$ 与 $x^2$', 'abc-与-x2'],
]) assert.equal(headingId(title), id);
for (const title of ['`code`', '$A$', '[文字](https://example.com)']) {
  assert.match(transformDocument(`${title}\n---\n`), /data-section-number="1"/);
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
assert.equal(transformDocument('<spoiler title="@missing">\n正文\n</spoiler>'), '{{< spoiler title="@missing" >}}\n正文\n{{< /spoiler >}}');

// Authors' tags become shortcodes; what they hold is Markdown as usual. Nothing else that reads as HTML passes,
// and parameters are plain text.
const tagged = transformDocument('<see>[[甲]]</see> 与 <lang grc-Latn>*x*</lang>，**米田 信夫** <person original="[米田]<よねだ>" lang="ja" years="1930--1996" />；甲 <person years="?">\n\n<align right>\n——某人\n</align>');
assert.equal(tagged, '{{< see >}}[甲](wiki:?title=%E7%94%B2&name=%E7%94%B2){{< /see >}} 与 {{< lang grc-Latn >}}*x*{{< /lang >}}，**米田 信夫**{{< person original="[米田]<よねだ>" lang="ja" years="1930--1996" >}}；甲{{< person years="?" >}}\n\n{{< align right >}}\n——某人\n{{< /align >}}');
for (const source of ['n<m 时，m>k', 'a < b', 'a<b, c>d', '<https://example.com>', '<a@example.com>', '`<script>`', '```\n<script>alert(1)</script>\n```', '<!-- <b> -->', '::: theorem [$a<b>c$ 与 `<x>`]\n甲\n:::']) {
  assert.doesNotThrow(() => transformDocument(source, { file: 'f.md' }), source);
}
for (const [source, error] of [
  ['<script>alert(1)</script>', /f.md:1: 不能使用 HTML 标签 <script>：页面中只能使用 <see>、<lang>、<align>、<person>、<spoiler>/],
  ['甲\n\n<img src=x onerror=alert(1)>', /f.md:3: 不能使用 HTML 标签 <img>/],
  ['<pre>\n代码\n</pre>', /不能使用 HTML 标签 <pre>/],
  ['<a\nhref="javascript:alert(1)">x</a>', /不能使用 HTML 标签 <a>/],
  ['<theorem-start>', /不能使用 HTML 标签 <theorem-start>/],
  ['::: theorem [<lang de>Satz</lang>]\n甲\n:::', /f.md:1: 环境的标题中不能使用标签 <lang>/],
  ['<see x>甲</see>', /<see> 不接受参数/],
  ['<see />', /<see> 需要结束标签 <\/see>/],
  ['<see>甲', /f.md:1: <see> 没有结束：缺少 <\/see>/],
  ['甲</see>', /<\/see> 前面没有对应的 <see>/],
  ['<see><lang en>甲</see></lang>', /<\/see> 与前面的 <lang> 不配对/],
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
]) assert.throws(() => transformDocument(source, { file: 'f.md' }), error, source);
const opaque = transformDocument(String.raw`\[
# not a heading
::: theorem
@missing
\]`);
assert.match(opaque, /^@@displaymath:/);
assert.deepEqual(captions(opaque), []);
// 列表项中的 math 围栏可以比内容列多缩进；输出保留缩进（仍在列表项内），TeX 去掉缩进，标签照常注册。
const listed = transformDocument('- 项\n\n    ```math {@y}\n    x\n    ```\n\n    见 @y。\n');
assert.match(listed, /\n    @@numberedmath:/);
assert.match(listed, /reference:\?id=y&/);
assert.match(Buffer.from(listed.match(/numberedmath:([^:]+):/)[1], 'base64').toString(), /"tex":"x\\n\\\\tag\{1\}"/);
// 引用块中的多行公式：续行的 > 标记属于引用块，不进入 TeX；公式中以 > 开头的行保留。行间公式的 TeX 去掉各行行首与首尾的
// 空白（源文件的排版不改变页面）。
const quotedMath = tex => Buffer.from(transformDocument(tex).match(/@@displaymath:([^:]+):/)[1], 'base64').toString();
assert.equal(quotedMath('> \\[\n> a\n> > b\n> \\]\n'), 'a\n> b');
assert.equal(quotedMath('\\[\na\n> b\n\\]\n'), 'a\n> b');
assert.equal(quotedMath('甲\n\\[  \n    a \\\\\n      b\n  \\]\n'), 'a \\\\\nb');
assert.equal(transformDocument(String.raw`\@missing`), String.raw`\@missing`);
assert.match(transformDocument('```math\nx=1 % \\tag{comment}\n```'), /@@numberedmath:/);

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
]) assert.throws(() => transformDocument(source), error);
assert.throws(() => transformDocument('\n@missing', { file: 'content/wiki/a/index.md', lineOffset: 5 }), /content\/wiki\/a\/index.md:7: 引用标签不存在/);
// A formula that does not close by the end of its paragraph is reported where it starts, not where its
// stray dollars pair up wrongly; \$ is a literal dollar.
assert.throws(() => transformDocument('正文。\n\n${$甲\n\n::: theorem\n乙\n:::\n', { file: 'f.md' }), error => error.message === 'f.md:3: 公式没有结束：“${$甲” 在段落结束之前没有闭合' && error.column === 1);
assert.throws(() => transformDocument('价格 $5。', { file: 'f.md' }), /f.md:1: 公式没有结束：“\$5。”/);
assert.throws(() => transformDocument('甲\n\n\\[[text]]\n\n乙 \\[x\\]\n', { file: 'f.md' }), error => /^f.md:3: 公式没有结束：“\\\[\[text\]\]”/.test(error.message) && error.column === 1);
assert.doesNotThrow(() => transformDocument('价格 \\$5，$x$。', { file: 'f.md' }));
// Empty formulas leave nothing (Hugo's passthrough would leave its marker).
assert.equal(transformDocument('甲\n\n\\[\\]\n\n$$$$ 与 $ $。'), '甲\n\n\n\n 与 。');
// The editor checks formulas with KaTeX first: an error names the formula's line, not Hugo's template.
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

const starFixture = String.raw`@intro @named @plain @appendix @literal @a @b @child @grandchild @reset @quoted @zero
[第二个条件](@b) [子条件](@child)

## 前言* {@preface}

::: theorem {@intro}
第一节之前的定理。
:::

::: theorem* [**存在性**与 $A$] {@named}
无编号定理。
:::

::: lemma* {@plain}
无标题的无编号引理。
:::

~~~math {@eq:intro}
x = 0
~~~

## 第一节 {@first}

::: definition
定义。
:::

~~~math
x = 1
~~~

## 插入说明 {@aside}*

::: theorem
接续第一节的计数。
:::

~~~math
x = 2
~~~

3. {@a} 条件 A。
9. {@b} 条件 B。

   延续段落，引用 @a。

   5. {@child} 子条件。
      1. {@grandchild} 更深的条件，引用 @b。
   1. 另一个子条件。

列表重新开始。

1) {@reset} 新列表。

> 7. 无标签的引用块项目。
> 1. {@quoted} 引用块第二项。

0. {@zero} 从零开始。

公式与环境相邻时的列表边界。

1. {@formula-before} 公式之前。
\[
x = 1
\\
y = 2
\]
1. {@formula-after} 公式之后。

@formula-before @formula-after

::: theorem*
1. {@block-inner} 环境内的列表。
:::
1. {@block-after} 环境后的列表。

@block-inner @block-after

附录* {@appendix}
-----------------

## 字面星号 \* {@literal}

## **强调**
`;
let sectionNumbers;
const stars = transformDocument(starFixture, { onSectionNumbers: numbers => { sectionNumbers = numbers; } });
assert.deepEqual(captions(stars).map(c => [c.kind, c.number]), [
  ['theorem', '1'], ['theorem', ''], ['lemma', ''], ['definition', '1.1'], ['theorem', '1.2'], ['theorem', ''],
]);
assert.deepEqual(equations(stars).map(e => e.tex.match(/\\tag\{([^}]+)\}$/)[1]), ['1', '1.1', '1.2']);
assert.deepEqual(sectionNumbers, { '前言': '', '第一节': '1', '插入说明': '', '附录': '', '字面星号': '2', '强调': '3' });
for (const [id, number] of [['a', '3'], ['b', '4'], ['child', '4.5'], ['grandchild', '4.5.1'], ['reset', '1'], ['quoted', '8'], ['zero', '0']]) {
  assert.ok(stars.includes(`id=${id}&name=reference_item&number=${number}`));
}
for (const [id, number] of [['formula-before', '1'], ['formula-after', '2'], ['block-inner', '1'], ['block-after', '1']]) {
  assert.ok(stars.includes(`id=${id}&name=reference_item&number=${number}`));
}
assert.match(stars, /name=environment_theorem&number=&title=/);
assert.match(stars, /name=environment_lemma&number=\)/);
assert.match(stars, /## 字面星号 \\\* \{#字面星号 data-section-number="2"\}/);
assert.match(transformDocument('## 前言 *\n::: theorem\n正文\n:::\n::: theorem\n正文\n:::'), /number="2"/);
assert.match(transformDocument('## 第一节\n::: theorem*\n正文\n:::\n::: theorem\n正文\n:::'), /number="1.1"/);
for (const title of ['参考文献* {@ref}', '参考文献 * {@ref}', '参考文献 {@ref}*', '参考文献 {@ref} *']) {
  assert.match(transformDocument(`## ${title}\n\n@ref`), /## 参考文献 \{#参考文献 data-section-unnumbered="true"\}/);
}
for (const title of [String.raw`字面星号\*`, '*斜体*', '**强调**', '`星号*`', '$x^*$']) {
  assert.match(transformDocument(`## ${title}`), /data-section-number="1"/);
}
assert.match(transformDocument('## **强调***'), /## \*\*强调\*\* \{#强调 data-section-unnumbered="true"\}/);
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
assert.match(transformDocument('1. 外层\n\n    1. {@inner} 内层\n\n        @inner'), /number=1.1/);
assert.match(transformDocument('1. {@a} A\n\n    ```\n    1. {@missing} code\n    ```\n\n1. {@b} B\n\n@b'), /id=b&name=reference_item&number=2/);
assert.match(transformDocument('1. A\n\n- 无序父项\n\n  3. {@a} 有序子项\n\n@a'), /id=a&name=reference_item&number=3/);
assert.match(transformDocument('1. {@cafe\u0301} A\n\n@café'), /id=caf%C3%A9&name=reference_item&number=1/);
assert.throws(() => transformDocument('1. {@same} A\n1. {@same} B'), /引用标签重复/);
assert.throws(() => transformDocument('::: theorem {@same}\n内容\n:::\n\n1. {@same} A'), /引用标签重复/);
assert.throws(() => transformDocument('1. {@same} A\n\n::: theorem {@same}\n内容\n:::'), /<正文>:3: 引用标签重复：same（首次声明在第 1 行）/);
assert.throws(() => transformDocument('1. {@} A'), /引用标签无效/);
// Labelled list items: (a), iv), (A1), ($\ast$)… shown as written, as CommonMark list items of the same text
// column; a new labelled list does not interrupt a paragraph; references show the labels.
{
  const caption = (html, id) => Buffer.from(decodeURIComponent(html.match(new RegExp(`reference:\\?id=${id}&caption=([^)&]*)`))[1]), 'base64').toString();
  const labelled = transformDocument("前文\n\n(a) {@a} 甲\n(b) 乙\n    续行\n\n1. 外\n\n   (i) {@i} 内\n\n(T2'') 撇\niv) {@iv} 四\n\n@a @i @iv @-a");
  assert.match(labelled, /^00\) \{\{< _item-label >\}\}\(a\)\{\{< \/_item-label >\}\}\{\{< _item-target id="YQ==" >\}\}甲$/m, 'the spaces after a label declaration go too');
  assert.match(labelled, /^00\) \{\{< _item-label >\}\}\(b\)\{\{< \/_item-label >\}\}乙\n    续行$/m);
  assert.match(labelled, /^   00\) \{\{< _item-label >\}\}\(i\)/m);
  assert.match(labelled, /\(T2′′\)/, "' is a prime");
  assert.match(labelled, /^00\) \{\{< _item-label >\}\}iv\)/m);
  assert.deepEqual(['a', 'i', 'iv'].map(id => caption(labelled, id)), ['(a)', '1 (i)', 'iv']);
  assert.equal((labelled.match(/caption=KGEp/g) ?? []).length, 2, '@-a shows the label too');
  assert.equal(caption(transformDocument('iv) 甲\n\n    (a) {@y} 乙\n\n@y'), 'y'), 'iv (a)');
  assert.equal(caption(transformDocument('(2) 甲\n\n    1. {@z} 乙\n\n@z'), 'z'), '(2) 1');
  for (const source of ['文字\n(3) 说凝聚', '(1\\) 与 (3) 之间', '(见下文) 文字', '(a b) 文字', '(1)文字', '12) 编号', '(T2½) 文字', '(★) 文字', '(2$x$) 文字', '(3.1) 文字']) {
    assert.doesNotMatch(transformDocument(source), /_item-label/, source);
  }
  assert.match(transformDocument('(iiiiiiiiiiiiiiii) 甲\n              乙'), /^000000000\)    \{\{< _item-label >\}\}\(iiiiiiiiiiiiiiii\)\{\{< \/_item-label >\}\}甲\n {14}乙$/m, 'at most column 14');
  // Alone on its line, a space after the marker (or Markdown reads it as text); on one line, nested lists, the
  // outer labels written with the innermost item's, with how many lists out they are.
  // Alone on its line: the label at the start of the next line's text, or (no text there: a display formula)
  // beside the item.
  assert.match(transformDocument('A4)\n    甲'), /^00\) \n    \{\{< _item-label >\}\}A4\)\{\{< \/_item-label >\}\}甲$/m);
  assert.match(transformDocument('A4)\n    \\[x\\]'), /^00\) \{\{< _item-label block="true" >\}\}A4\)/m);
  assert.match(transformDocument('(a) \\[x\\]'), /^00\) \{\{< _item-label block="true" >\}\}\(a\)/m);
  const chain = transformDocument('(3) (4) {@x} 甲\n\n(5) (a) (i)\n\n@x');
  assert.match(chain, /^00\) 00\) \{\{< _item-label outer="1" >\}\}\(3\)\{\{< \/_item-label >\}\}\{\{< _item-label >\}\}\(4\)\{\{< \/_item-label >\}\}\{\{< _item-target/m);
  assert.match(chain, /^00\) 00\) 00\) \{\{< _item-label outer="2" block="true" >\}\}\(5\)\{\{< \/_item-label >\}\}\{\{< _item-label outer="1" block="true" >\}\}\(a\)\{\{< \/_item-label >\}\}\{\{< _item-label block="true" >\}\}\(i\)/m);
  assert.equal(caption(chain, 'x'), '(3) (4)');
  assert.match(transformDocument('1) 甲\n(a) 乙'), /^1\) 甲\n00\. \{\{< _item-label >\}\}\(a\)/m, 'a labelled item after 1) starts its own list');
  assert.throws(() => transformDocument('1) 甲\n(a) 乙\n2. 丙'), /标签列表项目/);
}
assert.throws(() => transformDocument('::: theorem* [@self] {@self}\n内容\n:::\n\n@self'), /循环引用/);
// 旧写法 -remark [寄语] 报错并给出新写法 remark* (寄语)。
assert.throws(() => transformDocument('::: -remark [寄语]\n二\n:::'), /不再使用 - 前缀[\s\S]*remark\* \(寄语\)/);
// ::: definition (条件)：自定的名称代替类型名称，编号、计数器与颜色仍按类型。
{
  const custom = transformDocument('::: theorem\n一\n:::\n\n::: definition (条件) [同分布] {@cond}\n二\n:::\n\n::: remark* (异议)\n三\n:::\n\n见 @cond。');
  assert.match(custom, /kind="definition" group="definition" name="environment_custom" number="2" title="[^"]+" custom="5p2h5Lu2" id=/);
  assert.match(custom, /kind="remark" group="remark" name="environment_custom" number="" title="" custom="5byC6K6u"/, 'A starred custom environment takes no number');
  assert.match(custom, /\(reference:\?id=cond&name=environment_custom&number=2&custom=5p2h5Lu2\)/);
  // 不编号的自定名称不占计数器；有标题时引用带标题。
  const wisdom = transformDocument('::: remark\n一\n:::\n\n::: remark* (寄语) [给读者] {@wisdom}\n二\n:::\n\n::: remark\n三\n:::\n\n见 @wisdom。');
  assert.match(wisdom, /name="environment_remark" number="2" title=""/, 'An unnumbered custom environment takes no number');
  assert.match(wisdom, /\(reference:\?id=wisdom&name=environment_custom&number=&custom=5a%2BE6K%2Bt&title=[^)]+\)/);
  for (const header of ['definition ()', 'definition ($x$)', 'definition (a[b])', 'proof (证)']) {
    assert.throws(() => transformDocument(`::: ${header}\n二\n:::`), /圆括号中的名称/, header);
  }
}

const root = await createProject('structure');
try {
  // 固定测试副本的项目引用样式，不限制作者在实际站点中自定义 i18n。
  const translationPath = join(root, 'i18n/zh-cn.yaml');
  const initialTranslations = parse(await readFile(translationPath, 'utf8'));
  initialTranslations.reference_item.other = '第 {{ .Number }} 项';
  await writeFile(translationPath, stringify(initialTranslations));
  const directory = join(root, 'content/wiki/structure-test');
  await mkdir(directory, { recursive: true });
  const original = `---\ntitle: 编号测试\n---\n${fixture}`;
  await writeFile(join(directory, 'index.md'), original);
  const starDirectory = join(root, 'content/wiki/star-test');
  await mkdir(starDirectory, { recursive: true });
  await writeFile(join(starDirectory, 'index.md'), `---\ntitle: 星号和列表引用\n---\n${starFixture}`);
  const customDirectory = join(root, 'content/wiki/custom-test');
  await mkdir(customDirectory, { recursive: true });
  await writeFile(join(customDirectory, 'index.md'), '---\ntitle: 自定义名称\n---\n::: theorem\n甲\n:::\n\n::: definition (条件) [同分布] {@cond}\n乙\n:::\n\n::: remark* (异议) {@objection}\n丙\n:::\n\n见 @cond 与 @objection。\n');
  const labelledDirectory = join(root, 'content/wiki/labelled-test');
  await mkdir(labelledDirectory, { recursive: true });
  await writeFile(join(labelledDirectory, 'index.md'), `---\ntitle: 标签列表\n---\n设\n\n(a) {@la} 甲\n(b) 乙\n\n    第二段\n\n($\\ast$) 星\n\n1. 外\n\n   (i) {@li} 内\n\n由 @la、@li 与 @-la。\n\n(3) (4)\n        嵌套\n`);
  const build = () => buildProject(root);
  build();
  const html = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.match(html, /href="#thm%3Akey">定理 1\.2<\/a>/);
  assert.match(html, /href="#thm%3Akey">这个<strong>定理<\/strong><\/a>/);
  assert.match(html, /id="eq:one" class="math-rendered math-display"/);
  assert.match(html, /\\tag\{1\.1\}/);
  assert.match(html, /<h2 id="第一节"><a class="heading-link"[^>]*>§<\/a><span class="section-number">1<\/span> 第一节/);
  assert.match(html, /<h3 id="小节-a"><a class="heading-link"[^>]*>§<\/a>小节 <span class="math-rendered"/);
  assert.match(html, /href="#%e7%ac%ac%e4%ba%8c%e8%8a%82"><span class="toc-section-number directory-number">2<\/span> <span class="toc-item-title directory-item-title">第二节<\/span><\/a>/);
  assert.match(html, /theorem-title">定理 1\.2（<strong>主要结论<\/strong>）/);
  for (const group of ['definition', 'theorem', 'example', 'remark', 'proof']) assert.ok(html.includes(`theorem-${group}`));
  assert.match(html, /environment-theorem[\s\S]*<\/div>\s*<\/div>\s*<div class="theorem-block theorem-proof/);
  assert.match(html, /<span class="theorem-title">简证\u3000<\/span><div class="theorem-content">/);
  assert.equal((html.match(/<div(?:\s|>)/g) ?? []).length, (html.match(/<\/div>/g) ?? []).length);
  assert.doesNotMatch(html, /raw HTML omitted|@@(?:math|displaymath|numberedmath):|::: theorem/);
  assert.equal(await readFile(join(directory, 'index.md'), 'utf8'), original);
  const customHtml = await readFile(join(root, 'public/wiki/custom-test/index.html'), 'utf8');
  assert.match(customHtml, /theorem-definition environment-definition" id="cond">\s*<p class="theorem-title">条件 2（同分布）<\/p>/);
  assert.match(customHtml, /theorem-remark environment-remark" id="objection">\s*<p class="theorem-title">异议<\/p>/);
  assert.match(customHtml, /href="#cond">条件 2<\/a>/);
  assert.match(customHtml, /href="#objection">异议<\/a>/);
  const starHtml = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.match(starHtml, /href="#intro">定理 1<\/a>/);
  assert.match(starHtml, /href="#named">定理（<strong>存在性<\/strong>与 <span class="math-rendered"/);
  assert.match(starHtml, /href="#plain">引理<\/a>/);
  assert.match(starHtml, /<h2 id="前言"><a class="heading-link"[^>]*>§<\/a>前言<\/h2>/);
  assert.match(starHtml, /<h2 id="附录"><a class="heading-link"[^>]*>§<\/a>附录<\/h2>/);
  assert.match(starHtml, /<h2 id="字面星号"><a class="heading-link"[^>]*>§<\/a><span class="section-number">2<\/span> 字面星号 \*/);
  const starToc = starHtml.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.ok(starToc.includes('>前言</span></a>'));
  assert.ok(starToc.includes('<span class="toc-section-number directory-number">1</span> <span class="toc-item-title directory-item-title">第一节</span></a>'));
  assert.ok(starToc.includes('>插入说明</span></a>'));
  assert.ok(starToc.includes('>附录</span></a>'));
  assert.ok(starToc.includes('<span class="toc-section-number directory-number">2</span> <span class="toc-item-title directory-item-title">字面星号 *</span></a>'));
  // Compare references with the actual ol starts and sibling positions emitted by Hugo.
  assert.match(starHtml, /<ol start="3">\s*<li>[\s\S]*?id="a"[\s\S]*?<\/li>\s*<li>[\s\S]*?id="b"/);
  assert.match(starHtml, /<ol start="5">\s*<li>[\s\S]*?id="child"[\s\S]*?<ol>\s*<li>[\s\S]*?id="grandchild"/);
  assert.match(starHtml, /<blockquote>\s*<ol start="7">[\s\S]*?id="quoted"/);
  assert.match(starHtml, /<ol start="0">\s*<li>[\s\S]*?id="zero"/);
  for (const [id, number] of [['a', '3'], ['b', '4'], ['child', '4.5'], ['grandchild', '4.5.1'], ['reset', '1'], ['quoted', '8'], ['zero', '0']]) {
    assert.ok(starHtml.includes(`href="#${id}">第 ${number} 项</a>`), `列表引用 ${id}: ${starHtml.match(new RegExp(`href="#${id}"[^>]*>[^<]*`))?.[0]}`);
    assert.ok(starHtml.includes(`id="${id}" class="item-target"`));
  }
  assert.ok(starHtml.includes('href="#b">第二个条件</a>'));
  assert.ok(starHtml.includes('href="#child">子条件</a>'));
  assert.match(starHtml, /id="formula-before"[\s\S]*?class="math-rendered math-display"[\s\S]*?<\/li>\s*<li>[\s\S]*?id="formula-after"/);
  assert.ok(starHtml.includes('href="#formula-after">第 2 项</a>'));
  for (const id of ['block-inner', 'block-after']) {
    assert.ok(starHtml.includes(`href="#${id}">第 1 项</a>`));
    assert.match(starHtml, new RegExp(`<ol>\\s*<li>[\\s\\S]*?id="${id}"`));
  }
  assert.doesNotMatch(starHtml, /raw HTML omitted|reference:\?|\{@|::: theorem|定理 0\.1|\\tag\{0\.1\}/);
  const labelledHtml = await readFile(join(root, 'public/wiki/labelled-test/index.html'), 'utf8');
  assert.match(labelledHtml, /<ol start="0">\s*<li>\s*<p><span class="item-label" style="--outer: 0"><span>\(a\)<\/span><\/span><span id="la" class="item-target"><\/span>甲<\/p>\s*<\/li>\s*<li>\s*<p><span class="item-label" style="--outer: 0"><span>\(b\)<\/span><\/span>乙<\/p>\s*<p>第二段<\/p>/);
  assert.match(labelledHtml, /<span class="item-label" style="--outer: 0"><span>\(<span class="math-rendered"[^>]*data-tex="\\ast"/);
  assert.match(labelledHtml, /<ol>\s*<li>\s*<p>外<\/p>\s*<ol start="0">\s*<li><span class="item-label" style="--outer: 0"><span>\(i\)<\/span><\/span>/);
  assert.ok(labelledHtml.includes('由 <a href="#la">(a)</a>、<a href="#li">1 (i)</a> 与 <a href="#la">(a)</a>。'));
  assert.match(labelledHtml, /<ol start="0">\s*<li>\s*<ol start="0">\s*<li><span class="item-label item-label-outer" style="--outer: 1"><span>\(3\)<\/span><\/span><span class="item-label" style="--outer: 0"><span>\(4\)<\/span><\/span>嵌套/);
  const singular = await readFile(join(root, 'public/wiki/奇异上同调/index.html'), 'utf8');
  assert.match(singular, /theorem-title">定义 1\.1（奇异上链复形）/);
  assert.match(singular, /theorem-title">定义 1\.2（奇异闭上链, 奇异边界上链, 奇异上同调）/);
  assert.doesNotMatch(singular, /theorem-title">[^<]*\d\s+（/);
  assert.match(singular, /href="#[^"]+">定理 3\.7<\/a>/);
  assert.match(singular, /href="#[^"]+">定义 3\.5<\/a>/);
  assert.match(singular, /id="eq:余边界"/);
  assert.equal((singular.match(/environment-proof/g) ?? []).length, 2);
  assert.equal((singular.match(/class="theorem-title"/g) ?? []).length, 20);
  assert.doesNotMatch(singular, /\\(?:ref|label|cite)\{|raw HTML omitted|\{\{主条目/);
  const ids = [...singular.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of singular.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(decodeURIComponent(match[1])), `缺失锚点：${match[1]}`);
  const cssPath = html.match(/href="([^"]*\/css\/site[^"]*\.css)"/)[1];
  const css = await readFile(join(root, 'public', cssPath), 'utf8');
  // Verify the four accent groups without freezing the author's chosen shades.
  const accents = ['definition', 'theorem', 'example', 'remark'].map(group => {
    const match = css.match(new RegExp(`\\.theorem-${group}\\s*\\{[^}]*--theorem-accent:\\s*(#[0-9a-f]+)`));
    assert.ok(match, `缺少颜色组：${group}`);
    return match[1];
  });
  assert.equal(new Set(accents).size, 4);
  assert.match(css, /border-left:\s*\d+px solid var\(--theorem-accent\)/);
  assert.match(css, /color:\s*var\(--theorem-accent\)/);
  // Name changes are made entirely in i18n, including default reference text.
  const translations = {
    environment_theorem: 'Theorem{{ with .Number }} {{ . }}{{ end }}',
    environment_definition: 'Definition{{ with .Number }} {{ . }}{{ end }}',
    environment_proof: 'Proof',
    environment_title: '{{ .Caption }} ({{ .Title }})',
    proof_heading: '{{ .Caption }}:',
    proof_title_separator: '',
    reference_section: 'Section {{ .Number }}',
    reference_equation: 'Equation ({{ .Number }})',
    reference_item: 'Item {{ .Number }}',
  };
  const chineseTranslations = await readFile(translationPath, 'utf8');
  const translatedTable = parse(chineseTranslations);
  for (const [key, other] of Object.entries(translations)) translatedTable[key] = { other };
  await writeFile(translationPath, stringify(translatedTable));
  build();
  const translated = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.match(translated, /href="#thm%3Akey">Theorem 1\.2<\/a>/);
  assert.match(translated, /theorem-title">Theorem 1\.2 \(<strong>主要结论<\/strong>\)/);
  assert.match(translated, /href="#%E7%AC%AC%E4%BA%8C%E8%8A%82">Section 2<\/a>/);
  assert.match(translated, /href="#eq%3Aone">Equation \(1\.1\)<\/a>/);
  assert.match(translated, /href="#thm%3Akey">这个<strong>定理<\/strong><\/a>/);
  assert.match(translated, /<span class="theorem-title">简证:<\/span>/);
  const translatedStars = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.match(translatedStars, /href="#b">Item 4<\/a>/);
  assert.match(translatedStars, /href="#named">Theorem \(<strong>存在性<\/strong>/);
  // Moving a label with its item updates every reference while retaining the anchor.
  await writeFile(join(starDirectory, 'index.md'), '---\ntitle: 星号和列表引用\n---\n@a @b\n\n1. {@b} B\n1. {@a} A\n');
  build();
  const reordered = await readFile(join(root, 'public/wiki/star-test/index.html'), 'utf8');
  assert.ok(reordered.includes('href="#a">Item 2</a>'));
  assert.ok(reordered.includes('href="#b">Item 1</a>'));
  await writeFile(translationPath, chineseTranslations);
  // Numbering must not alter IDs derived from the heading text.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## Stable\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h2 id="stable"><a class="heading-link"[^>]*>§<\/a><span class="section-number">1<\/span>/);
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## Inserted\n\n## Stable\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h2 id="stable"><a class="heading-link"[^>]*>§<\/a><span class="section-number">2<\/span>/);
  // Detect collisions between explicit environment labels and automatic IDs.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## same\n\n::: theorem {@same}\n正文\n:::');
  assert.throws(build, /引用标签与标题自动锚点重复/);
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n## same\n\n### 名称 {@same}\n');
  build();
  assert.match(await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8'), /<h3 id="名称">/);
  // Labels never override generated IDs, even for forward/custom links and duplicate titles.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@first [后一个](@second) @minor\n\n## 同名 {@first}\n\n## 同名 {@second}\n\n### 子节 {@minor}\n');
  build();
  const repeated = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const repeatedIds = [...repeated.matchAll(/<h[23] id="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(repeatedIds, ['同名', '同名-1', '子节']);
  for (const [id, caption] of [['同名', '第 1 节'], ['同名-1', '后一个'], ['子节', '子节']]) {
    assert.ok(repeated.includes(`href="#${encodeURIComponent(id)}">${caption}</a>`));
  }
  // Native headings in containers must not shift a later section reference.
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@last [引用中的标题](@quoted)\n\n## 开头\n\n> ### 引用标题 {@quoted}\n\n- #### 列表标题\n\n## 结尾 {@last}\n');
  build();
  const containers = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  assert.ok(containers.includes(`href="#${encodeURIComponent('结尾')}">第 2 节</a>`));
  assert.ok(containers.includes(`href="#${encodeURIComponent('引用标题')}">引用中的标题</a>`));
  assert.match(containers, /<blockquote>\s*<h3 id="引用标题">/);
  assert.match(containers, /<li>\s*<h4 id="列表标题">/);
  // Test normalization, suffix collisions, all heading styles and final Hugo links together.
  const normalizedBody = String.raw`@accent [含公式的标题](@math) @tensor @setext

## Über {@accent .accent-heading}

## Über

## uber-1

## Über

## Poincaré–Lefschetz $\infty$-范畴 {@math}

### $A \otimes B$ {@tensor}

Ångström $\varnothing$ {@setext}
------------------------------

## !!!

## ???
`;
  await writeFile(join(directory, 'index.md'), `---\ntitle: 编号测试\n---\n${normalizedBody}`);
  build();
  const normalized = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const normalizedIds = [...normalized.matchAll(/<h[23] id="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(normalizedIds, ['uber', 'uber-1', 'uber-1-1', 'uber-2', 'poincare-lefschetz-∞-范畴', 'a⊗b', 'angstrom-∅', 'heading', 'heading-1']);
  assert.match(normalized, /<h2 id="uber" class="accent-heading">/);
  for (const [id, caption] of [['uber', '第 1 节'], ['poincare-lefschetz-∞-范畴', '含公式的标题']]) {
    assert.ok(normalized.includes(`href="#${encodeURIComponent(id)}">${caption}</a>`));
  }
  // Links only: the inline logo's <use href="#…"> points into its own SVG.
  for (const match of normalized.matchAll(/<a [^>]*href="#([^"]+)"/g)) {
    assert.ok(normalizedIds.includes(decodeURIComponent(match[1])), `缺失标题锚点：${match[1]}`);
  }
  // Automatic directory generation, placement, and nesting.
  const directoryBody = '导言在目录之前。\n\n## 第一节\n\n### 小节\n\n#### 深层标题\n\n## 第二节\n';
  const directoryPage = metadata => `---\ntitle: 自动目录\n${metadata}---\n${directoryBody}`;
  await writeFile(join(directory, 'index.md'), directoryPage(''));
  build();
  const automatic = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
  const automaticToc = automatic.match(/<nav id="TableOfContents"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.equal((automaticToc.match(/<a /g) ?? []).length, 3);
  assert.match(automaticToc, /toc-level-2[\s\S]*<ul class="toc-list directory-tree"><li class="toc-level-3"/);
  assert.doesNotMatch(automaticToc, /深层标题/);
  const directoryDom = new JSDOM(automaticToc).window.document;
  const branch = directoryDom.querySelector('.toc-branch');
  assert.ok(branch.hasAttribute('open'), '本页目录子节默认展开');
  assert.equal(branch.querySelector('summary > a .toc-item-title').textContent, '第一节');
  assert.equal(branch.querySelector(':scope > ul a .toc-item-title').textContent, '小节');
  assert.ok(branch.querySelector('summary > .directory-chevron'), '展开控制与标题链接应分开');
  assert.equal(directoryDom.querySelectorAll('a a').length, 0);
  assert.ok(automatic.indexOf('导言在目录之前。') < automatic.indexOf('class="toc-shell"'));
  assert.ok(automatic.indexOf('class="toc-shell"') < automatic.indexOf('<h2 id="第一节"'));
  assert.match(automatic, /class="header-toc-button"/);
  for (const body of [directoryPage('toc: false\n'), '---\ntitle: 短页\n---\n## 唯一标题\n正文。\n', '---\ntitle: 无标题\n---\n正文。\n']) {
    await writeFile(join(directory, 'index.md'), body);
    build();
    const hidden = await readFile(join(root, 'public/wiki/structure-test/index.html'), 'utf8');
    assert.doesNotMatch(hidden, /id="TableOfContents"|class="header-toc-button"/);
  }
  for (const [body, message] of [['> # 引用块中的一级标题', /不能使用一级标题/], ['- # 列表中的一级标题', /不能使用一级标题/], ['> ## 引用块中的二级标题', /二级节标题必须位于正文层级/]]) {
    await writeFile(join(directory, 'index.md'), `---\ntitle: 编号测试\n---\n${body}\n`);
    assert.throws(build, message);
  }
  await writeFile(join(directory, 'index.md'), '---\ntitle: 编号测试\n---\n@missing\n');
  assert.throws(build, /content\/wiki\/structure-test\/index.md:4: 引用标签不存在/);
  console.log('节与统一环境编号、首节前整数编号、星号语法、嵌套列表引用与重排、独立证明、i18n、自动公式、错误定位、锚点稳定性及完整 KaTeX 验证通过');
} finally { await rm(root, { recursive: true, force: true }); }
