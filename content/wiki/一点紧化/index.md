---
title: 一点紧化
categories: [一般拓扑]
navboxes: [一般拓扑]
---

<problems>
- “性质”一节最后一个命题中“$X$ 在 $X^*$ 中稠密”似乎需要 $X$ 不是紧空间：$X$ 紧时 $\infty$ 是孤立点（见“例子”一节第三项）。
</problems>

在[[拓扑学]]中，[[拓扑空间]]的**一点紧化**（又称 **Alexandroff 紧化**）
是指向该空间添加一个点，
而将其变为[[紧空间]]的一种构造。
这个添加的点通常记为 $\infty$，称为 **[[无穷远点]]**。

## 定义

::: definition [一点紧化]
设 $X$ 为[[拓扑空间]]。
其**一点紧化** $X^*$ 是集合 $X \cup \{\infty\}$，
带有由以下[[开集]]组成的拓扑：

1. $X$ 中的所有开集。

2. 形如 $U \cup \{\infty\}$ 的集合，
   其中 $U \subset X$ 且 $X \setminus U$ 是 $X$ 中的[[闭集|闭]][[紧空间|紧]]子集。

这样得到的拓扑空间即为 $X$ 的一点紧化。
:::

注意到无穷远点 $\infty$ 的[[开邻域]]恰好是所有补集为紧集的开集。

在[[Hausdorff 空间]]中，任何紧子集都是闭子集，因此定义中的“闭紧子集”条件可以简化为“紧子集”。

## 例子

- $n$ 维 [[Euclid 空间]] $\mathbb{R}^n$ 的一点紧化同胚于 $n$ 维[[球面]] $S^n$。
  这个同胚关系可以通过[[球极投影]]建立。
  例如，直线 $\mathbb{R}$ 的一点紧化是[[圆周]] $S^1$，
  而平面 $\mathbb{R}^2$ 的一点紧化是[[球面]] $S^2$。

- 设 $\mathbb{Z}_+$ 为赋予[[离散拓扑]]的正整数集。
  其一点紧化同胚于[[实直线]] $\mathbb{R}$ 的子集 $\{0\} \cup \{1/n \mid n \in \mathbb{Z}_+\}$。
    这个同胚将无穷远点 $\infty$ 映为 $0$，并将每个正整数 $n$ 映为 $1/n$。

- 若空间 $X$ 本身已经是紧空间，
  则其一点紧化 $X^*$ 是 $X$ 和一个孤立点 $\{\infty\}$ 的[[无交并空间]]。

## 性质

::: proposition
空间 $X$ 的一点紧化 $X^*$ 总是紧的。
:::

::: proof
设 $\mathcal{U}$ 是 $X^*$ 的一个开覆盖。
则其中必有一个包含 $\infty$ 的开集 $U_0 = (X \setminus K) \cup \{\infty\}$，
其中 $K$ 是 $X$ 的紧子集。
由于 $K$ 是紧的，只需要有限个 $\mathcal{U}$ 中的开集就能覆盖 $K$。
这些有限个开集，再加上 $U_0$，就构成了 $X^*$ 的一个有限子覆盖。
:::

::: proposition
$X^*$ 是 [[Hausdorff 空间]]，当且仅当 $X$ 是[[局部紧]] Hausdorff 空间。
:::

::: proof
（$\Leftarrow$）设 $X$ 是局部紧 Hausdorff 空间。
欲证 $X^*$ 是 Hausdorff 的，只需分离任意两点。
若两点都在 $X$ 中，则因 $X$ 是 Hausdorff 的而显然。
若一点为 $x \in X$，另一点为 $\infty$，
因 $X$ 局部紧，$x$ 有一个紧邻域 $K$。
取 $x$ 的开邻域 $U$ 使得 $U \subseteq K$。
则 $U$ 和 $(X \setminus K) \cup \{\infty\}$ 就是 $x$ 和 $\infty$ 的不交开邻域。

（$\Rightarrow$）若 $X^*$ 是 Hausdorff 空间，
则其子空间 $X$ 必然是 Hausdorff 的。
同时，$X$ 是紧 Hausdorff 空间 $X^*$ 的开子集，
因此 $X$ 是局部紧的。
:::

::: proposition
若 $X$ 是局部紧 Hausdorff 空间，则 $X$ 同胚于 $X^*$ 的[[开子空间]]
$X^* \setminus \{\infty\}$，且在 $X^*$ 中[[稠密子空间|稠密]]。
:::

```terms
一点紧化:
  en: one-point compactification
  de: Einpunktkompaktifizierung :f
  fr: compactification d'Alexandrov :m
  la: compactificatio unius puncti :f
```
