/** Pages shared by the package's tests and the site's (tests/structure.mjs, tests/references.mjs). */

export const fixture = String.raw`@thm:key [这个**定理**](@thm:key) @sec:second @eq:one @sub

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

export const starFixture = String.raw`@intro @named @plain @appendix @literal @a @b @child @grandchild @reset @quoted @zero
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

/** A bibliography block (```bibliography). */
export const bibliographyBlock = data => '```bibliography\n' + data + '\n```\n';

export const firstBibliography = bibliographyBlock(`book:
  type: book
  title: First book
  author: "Smith, Alice"
  year: 2020
  publisher: Press
  edition: 2
  doi: 10.1234/example
paper:
  type: article
  title: Published article
  author: [Alice Smith, "Jones, Bob"]
  year: 2021
  journaltitle: Test Journal
  volume: 2
  number: 3
  pages: 1–10
  arxiv: "2101.00001"
online:a:
  type: online
  title: First online page
  site: nLab
  url: https://example.com/page_(one)
  year: 2024
  author: Actual Contributor
  urldate: "2026-10-02"`);

export const secondBibliography = bibliographyBlock(`chapter:
  type: incollection
  title: Chapter
  author: 张三
  editor: {literal: Editor Group}
  booktitle: Collected papers
  publisher: Press
  year: 2022
  pages: 11–20
phd:
  type: thesis
  title: A thesis
  author: Carol Jones
  year: 2019
  degree: phd
  institution: University of Edinburgh
preprint:
  type: preprint
  title: A preprint
  author: Alice Smith
  year: 2023
  arxiv: "2301.00001"
online:b:
  type: online
  title: Second online page
  site: nLab
  url: https://example.com/two
otherbook:
  type: book
  title: Second book
  author: Alice Smith
  year: 2020`);

export const referenceFixture = `@thm:main, @eq:one. @sec:first; {@book}。第一同构定理（@-thm:main）。
[@book, §2; @otherbook; @paper; @chapter; @preprint; @online:a; @online:b]
[上述**定理**](@thm:main) [另一个页面](@online:b)

## 第一节 {@sec:first .accent}

::: theorem [参见 @book] {@thm:main}
证明前的引用： @eq:one。
:::

${'```math {@eq:one}\nx = 1\n```'}

${firstBibliography}
这段简介保持原位置，后面的来源是 @online:b。

${secondBibliography}`;

/**
 * HTML-style tags of a site's own (bananamark's tags option), for the tests: <note>…</note>, paired without
 * parameters, its label a message of the page's language; and <person … />, attached to what comes before, with
 * named parameters (a reading, a language code, at least one of four), as banana-space's own.
 */
export const exampleTags = {
  note: {
    paired: true,
    render: ({ inner, fragment, message, escape }) => `<div class="note"><span class="note-label">${escape(message('note_label'))}</span>${fragment(inner.trim())}</div>\n`,
  },
  person: {
    attachToPrevious: true,
    named: { original: { reading: true }, lang: { language: true }, translit: {}, ipa: {}, years: {} },
    requireOneOf: ['original', 'translit', 'ipa', 'years'],
    render: ({ parameters, escape }) => `<span class="person">${escape(Object.values(parameters.named).join('; '))}</span>`,
  },
};
export const exampleMessages = { 'zh-cn': { note_label: '注：' }, en: { note_label: 'Note: ' } };
