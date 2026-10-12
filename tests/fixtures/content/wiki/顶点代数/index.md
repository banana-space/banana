---
title: 顶点代数
categories: [顶点代数]
---

Vertex algebras are a somewhat mysterious type of algebraic structure.
Their foundational ideas come from conformal field theory in physics,
while they also have seen deep connections to various areas of mathematics.

相关背景参见 [@fb04; @kac98]。定义见 @def:vertex；更多在线资料见 [@nlab:voa; @nlab:operad]。

中文示例，以及嵌入[链接]()的效果。(这是, $x + y$, 中文示例.)

[[链接]] [[example]] [[Example]] [[EXAMPLE]] [[顶点代数|测试]]

$A[[t]]$

## 想法

In a vertex algebra,
we multiply elements on the complex plane.
This means that given several points $z_1, \dotsc, z_n \in \mathbb{C}$,
if we assign an element $a_i$ to each point $z_i$,
we get a product $a_1 (z_1) \cdots a_n (z_n)$.

$\text{中文} 中文 \sum_{x \in 中文}$. 正常中文.

$$ \text{test 中文} \tag{1} $$

<spoiler title="隐藏段落">
外部链接
([*n*Lab](https://ncatlab.org/nlab/show/little+cubes+operad)),
$\mathbb{E}_2$-algebras.
</spoiler>

## 定义 {@sec:definition}

::: definition [顶点代数] {@def:vertex}
A **vertex algebra** is:

- A vector space $V$,

- equipped with a unit element $1 \in V$,

- and a family of multiplication operations

  $$
    \begin{aligned}
      V^{\otimes n} & \longrightarrow V [[z_1, \dotsc, z_n]] \, [(z_i - z_j)^{-1}] \ ,
      \\[.5em]
      a_1 \otimes \cdots \otimes a_n & \longmapsto a_1 (z_1) \cdots a_n (z_n) \ ,
    \end{aligned}
  $$

  where the $0$-ary multiplication gives the unit element $1$,

satisfying the following properties:

- **Unit:** We always have $a (0) = a$,
  that is, $a (z) = a + O (z)$.

- **Commutativity:** The product $a_1 (z_1) \cdots a_n (z_n)$
  does not depend on the order of the factors.
  For example, $a (z) \cdot b (w) = b (w) \cdot a (z)$.

- **Associativity:** This includes a series of axioms that look like

  $$
    \begin{aligned}
      & \bigl[ a_1 (z_1) \cdot a_2 (z_2) \bigr] (z) \cdot
      \bigl[ b_1 (w_1) \cdot b_2 (w_2) \bigr] (w)
      \\[.5em]
      & \qquad =
      a_1 (z_1 + z) \cdot a_2 (z_2 + z) \cdot
      b_1 (w_1 + w) \cdot b_2 (w_2 + w) \ ,
    \end{aligned}
  $$

  where we expand the power series on the right-hand side
  in the limit $|z_i|, |w_i| \ll |z|, |w|$.
  This is for two groups of two,
  and there are similar axioms for any number of groups of any,
  possibly different, size.
  The variables always follow the rule that
  whenever two of them are combined, they are added together.

:::

## 参考文献

```bibliography
borcherds98:
  type: incollection
  author: "Borcherds, R. E."
  title: Vertex algebras
  year: 1998
  booktitle: Topological field theory, primitive forms and related topics
  pages: 35–77
  publisher: Birkhäuser
  zbmath: "0956.17019"
  arxiv: q-alg/9706008
fb04:
  type: book
  author: ["Frenkel, Edward", "David Ben-Zvi"]
  title: Vertex algebras and algebraic curves
  year: 2004
  edition: 2
  series: Mathematical Surveys and Monographs
  volume: 88
  publisher: American Mathematical Society
  doi: 10.1090/surv/088
  zbmath: "1106.17035"
kac98:
  type: book
  author: Victor Kac
  title: Vertex algebras for beginners
  year: 1998
  edition: 2
  series: University Lecture Series
  volume: 10
  publisher: American Mathematical Society
  doi: 10.1112/s0024609397353612
  zbmath: "0924.17023"
kim11:
  type: article
  author: "Kim, N."
  title: Associativity of field algebras
  year: 2011
  journaltitle: Annales Henri Poincaré
  volume: 12
  number: 6
  pages: 1145–1168
  doi: 10.1007/s00023-011-0092-5
  zbmath: "1226.81115"
```

在线来源及简介：

```bibliography
nlab:voa:
  type: online
  site: nLab
  title: Vertex operator algebra
  url: https://ncatlab.org/nlab/show/vertex+operator+algebra
```

这是一份在线百科资料，适合与教材的定义对照阅读。正文引用显示为 @nlab:voa。

```bibliography
nlab:operad:
  type: online
  site: nLab
  title: Little cubes operad
  url: https://ncatlab.org/nlab/show/little+cubes+operad
wikipedia:voa:
  type: online
  site: Wikipedia
  title: Vertex operator algebra
  url: https://en.wikipedia.org/wiki/Vertex_operator_algebra
```

第二个 nLab 来源显示为 @nlab:operad；两个文献块之间的介绍是普通 Markdown。
