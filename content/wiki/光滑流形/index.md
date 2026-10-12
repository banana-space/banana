---
title: 光滑流形
aliases: [光滑结构, 微分流形]
categories: [微分几何]
navboxes: [微分几何]
---

**光滑流形**是一种几何对象，是带有附加结构的[[流形]]。
流形描述的是 [[Euclid 空间]]中的[[曲线]]、[[曲面]]，以及它们的高维类比。
我们遇见的大多数流形都是光滑的，即都具有这种附加结构，
因此“流形”一词也常常直接指光滑流形。

研究光滑流形的学科称为[[微分几何]]。

## 定义

::: definition [光滑流形] {@thm:定义}
设 $n$ 是[[自然数]]，$X$ 是 $n$ 维[[流形|拓扑流形]]。

- $X$ 的**局部坐标**是指二元组 $(U, \varphi)$，
  其中 $U \subset \mathbb{R}^n$ 为[[开集]]，
  $\varphi \colon U \to X$ 是[[连续映射]]，并且
  \[
  \varphi \colon U \simeq \varphi (U)
  \]
  是到开子集 $\varphi (U) \subset X$ 的[[同胚]]。

- $X$ 的**坐标图册**是指一族局部坐标
  $\{ ( U_i, \varphi_i ) \}_{i \in I}$，
  使得各 $\varphi_i (U_i)$ 构成 $X$ 的[[开覆盖]]，即满足
  \[
  X = \bigcup_{i \in I} \, \varphi_i (U_i).
  \]

- 在坐标图册 $\{ ( U_i, \varphi_i ) \}_{i \in I}$ 中，对 $i, j \in I$，
  从第 $i$ 个局部坐标到第 $j$ 个局部坐标的**转移映射**是同胚映射
  \[
  \varphi_j^{-1} \circ \varphi_i
  \colon \varphi_i^{-1} (\varphi_j (U_j))
  \simeq \varphi_j^{-1} (\varphi_i (U_i)).
  \]
  这是 $\mathbb{R}^n$ 的两个子集之间的映射。

- 一个坐标图册称为**光滑相容**的，
  如果其中所有的转移映射都是[[光滑映射]]。

- $X$ 的一个**光滑结构**是指
  $X$ 的一个光滑相容的图册，
  并且它是[[极大元|极大]]的：
  在图册中任意加入一个不同的局部坐标，它都会变成不光滑相容的。

**光滑流形**就是指带有一个光滑结构的拓扑流形。
:::

::: remark
在不同的文献中，光滑流形的定义可能会有稍许不同。以下列出几种常见的变形：

- 有时要求局部坐标以整个 $\mathbb{R}^n$ 为定义域，
  即考虑形如 $\varphi \colon \mathbb{R}^n \to X$ 的映射，
  而不是从 $\mathbb{R}^n$ 的开集 $U$ 出发的映射。
  如果这样定义，则光滑结构中会少一些局部坐标，
  但定义出的光滑流形的概念和上述定义是等价的。

- 光滑流形有时也定义为带有一个光滑相容的图册的拓扑流形。
  这与上述定义可以互相转换，
  因为每个光滑相容的图册都可以延拓成一个极大的光滑相容的图册。

:::

## 例子

- [[Euclid 空间]] $\mathbb{R}^n$ 是最简单的光滑流形。
  $\mathbb{R}^n$ 中的非空开集也都是 $n$ 维光滑流形。

- [[球面]] $S^n$ 是一类常见的光滑流形，是最常见的[[紧空间|紧]]光滑流形之一。

- 有时，同一个拓扑流形会带有不同的光滑结构。
  例如，$\mathbb{R}^4$ 就带有无限种不同的光滑结构，称为[[怪 $\mathbb{R}^4$]]。
  当 $n \geq 7$ 时，[[球面]] $S^n$ 也常常带有不同的光滑结构，
  称为[[怪球]]。

## 性质

### 作为环化空间

::: definition [局部环化空间 $(\mathbb{R}^n, \mathcal{C}^\infty)$] {@局部环化空间}
[[局部环化空间]] $(\mathbb{R}^n, \mathcal{C}^\infty)$
由 Euclid 空间 $\mathbb{R}^n$ 和它上面的[[光滑函数层]] $\mathcal{C}^\infty$ 构成。
:::

::: proposition
光滑流形的概念等价于如下定义的概念：
光滑流形是[[局部环化空间]] $X$，
它局部同构于 $(\mathbb{R}^n, \mathcal{C}^\infty)$（@局部环化空间），
并且是 [[Hausdorff 空间|Hausdorff]]、[[第二可数空间|第二可数]]空间。
:::

## 参考文献

详细介绍光滑流形的教材：

```bibliography
Lee12:
  type: book
  author: J. Lee
  year: 2012
  title: Introduction to Smooth Manifolds
  edition: 2
  series: Graduate Texts in Mathematics
  number: 218
  publisher: Springer
```

```terms
光滑流形:
  en: smooth manifold
  de: glatte Mannigfaltigkeit
  fr: variété lisse
  grc: λεία πολλαπλούτης
  la: multiplex teres
```
