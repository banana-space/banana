---
title: 引用与参考文献
---

{@help:references}

本文介绍如何在文中引用定理、公式等，以及参考文献的写法。

## 标签

在标题、定理环境、带编号的公式、有序列表项和标签列表项上，可以用 `{@标签}` 声明一个标签：

````markdown
## 定义 {@sec:definition}

::: theorem [万有系数定理] {@thm:uct}
...
:::

```math {@eq:boundary}
d^{n+1} \circ d^n = 0
```

1. {@item:a} 条件 A。

1. {@item:b} 条件 B。

(a) {@item:c} 条件 C。
````

## 引用

在正文中写 `@标签` 引用它，显示为相应的编号，并链接到原处：

```markdown
由 @thm:uct 可知...
参见 @sec:definition。
结合 @eq:boundary，得到...
由 @item:b 可知...
```

| 引用类型 | 显示示例 |
| --- | --- |
| 定理、定义等 | 定理 1.2、定义 1.1 |
| 编号的节标题 | 第 1 节 |
| 不编号的节标题 | 标题文字 |
| 编号的公式 | (1.1) |
| 有序列表项 | 2、2.1 |
| 标签列表项 | (a)、2 (a)、(2) i |
| 参考文献 | Serre 1955 |

### 其他写法

| 写法 | 用途 | 例子 |
| --- | --- | --- |
| `[文字](@标签)` | 自定义显示的文字 | `[上述定理](@thm:uct)`、`[条件 2](@item:b)` |
| `@-标签` | 只显示编号 | `第一同构定理（@-thm:iso）` 显示为“第一同构定理（1.2）” |
| `{@标签}` | 隔开标签与相邻文字 | `由{@thm:uct}可知` |
| `@a–@b` | 引用一个范围 | `式 @eq:a–@eq:b` |


### 讲义中的跨页引用

讲义中，同一份讲义的各页面共用标签，可以直接引用其他页面中的定理、公式和章节，
见 @help:books。

百科条目之间不能用 `@` 引用对方的定理。

## 参考文献

参考文献写在 `bibliography` 代码块中，通常放在“参考文献”一节：

````markdown
## 参考文献

```bibliography
BottTu1982:
  type: book
  author: [Raoul Bott, Loring W. Tu]
  title: Differential Forms in Algebraic Topology
  year: 1982
  series: Graduate Texts in Mathematics
  volume: 82
  publisher: Springer

VafaWitten1994:
  type: article
  author: [Cumrun Vafa, 'Witten, Edward']
  title: A strong coupling test of S-duality
  journaltitle: Nuclear Physics B
  volume: 431
  year: 1994
  pages: 3--77
  doi: '10.1016/0550-3213(94)90097-3'
  arxiv: 'hep-th/9408074'

Scholze:
  type: preprint
  author: Peter Scholze
  title: Six-functor formalisms
  year: 2025
  arxiv: '2510.26269'
```
````

显示效果：

```bibliography
BottTu1982:
  type: book
  author: [Raoul Bott, Loring W. Tu]
  title: Differential Forms in Algebraic Topology
  year: 1982
  series: Graduate Texts in Mathematics
  volume: 82
  publisher: Springer

VafaWitten1994:
  type: article
  author: [Cumrun Vafa, 'Witten, Edward']
  title: A strong coupling test of S-duality
  journaltitle: Nuclear Physics B
  volume: 431
  year: 1994
  pages: 3--77
  doi: '10.1016/0550-3213(94)90097-3'
  arxiv: 'hep-th/9408074'

Scholze:
  type: preprint
  author: Peter Scholze
  title: Six-functor formalisms
  year: 2025
  arxiv: '2510.26269'
```

在正文中引用：

| 写法 | 显示 |
| --- | --- |
| `@BottTu1982`（不推荐） | @BottTu1982 |
| `[@BottTu1982]` | [@BottTu1982] |
| `[@BottTu1982, 定理 5.2]` | [@BottTu1982, 定理 5.2] |
| `[@BottTu1982; @Scholze]` | [@BottTu1982; @Scholze] |

如果你希望快速将参考文献转换成此格式，
可以使用 AI 工具参照本页的说明进行转换。

### 文献类型

文献的类型 `type` 有以下几种：

| 类型 | 用途 | 主要字段 |
| --- | --- | --- |
| `book` | 书籍 | `publisher`、`edition`、`series`、`volume` |
| `article` | 期刊论文 | `journaltitle`、`volume`、`number`、`pages` |
| `incollection` | 文集中的论文 | `booktitle`、`editor`、`pages` |
| `thesis` | 学位论文 | `institution`、`degree`（`phd`、`master`） |
| `preprint` | 预印本、手稿 | `arxiv`、`url` |
| `online` | 网页 | `site`、`url` |

各类型都可以使用的字段：
`author`、`editor`、`year`、`doi`、`arxiv`、`zbmath`、`url`、`note`、`label`。

正文中的引用文字由作者和年份组成；`preprint` 和 `online` 不显示年份，
`online` 的作者名显示成网站名。
同一作者同一年份的文献会自动加 a、b 区分。

### 字段写法

- `author` 有多位作者时写成列表：`author: [Raoul Bott, Loring W. Tu]`。
  姓名也可以写成“姓, 名”的格式，此时需要加引号：`author: ['Witten, Edward']`。

- 在写 arXiv 编号时，例如 `arxiv: '2510.26269'`，
  注意加引号，以免被识别成小数而丢失末尾的 0。

- 字段含有特殊符号时，也应加引号，例如 `title: '$K$-theory: An introduction'`。

- `label` 指定正文中显示的引用文字，例如 `label: EGA I` 显示为 [EGA I]。

### 文献组织

一个页面可以有多个 `bibliography` 代码块，块之间可以写说明文字。
我们鼓励按类型分组，并用简短的说明引出各组：

````markdown
## 参考文献

入门读物：

```bibliography
...
```

原始论文：

```bibliography
...
```
````
