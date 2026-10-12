---
title: 线性生成空间
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[向量空间]] $V$ 中一组[[向量]] $(x_1, \dotsc, x_n)$
的**线性生成空间**是指
这些向量的所有[[线性组合]]所构成的[[子向量空间]]，
也就是所有形如
\[
a_1 x_1 + \cdots + a_n x_n
\]
的向量构成的空间，
其中 $a_1, \dotsc, a_n$ 是[[标量]]。
例如，单个向量的线性生成空间就是它所在的直线，即一维子空间；
两个[[线性无关向量组|线性无关]]的向量生成的空间是它们张成的平面，即二维子空间。

## 定义

::: definition
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$S \subseteq V$ 是[[子集]]。
则 $S$ 在 $V$ 中的**线性生成空间**是指 $V$ 的[[子向量空间]]
\[
\operatorname{span} (S) =
\bigcap_{W \subseteq V \text{ 是包含 } S \text{ 的子向量空间}} W,
\]
也就是 $V$ 中包含 $S$ 的最小子向量空间。

等价地，也有
\[
\operatorname{span} (S) =
\Set{ a_1 x_1 + \cdots + a_n x_n |
  \begin{array}{l}
    n \geq 0; \
    a_1, \dotsc, a_n \in k; \\
    x_1, \dotsc, x_n \in S
  \end{array}
} ,
\]
也就是说，$\operatorname{span} (S)$
是由 $S$ 中所有向量的有限[[线性组合]]构成的空间。
:::

```terms
线性生成空间:
  en: linear span
  fr: sous-espace vectoriel engendré :m
  de: lineare Hülle :f
  ja: 線<せん>形<けい>包<ほう>
  ko: 선형생성 (線型生成)
```
