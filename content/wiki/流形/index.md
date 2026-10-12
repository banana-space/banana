---
title: 流形
aliases: [拓扑流形]
categories: [一般拓扑]
navboxes: [微分几何]
---

**流形**是局部上看起来像 [[Euclid 空间]]的[[拓扑空间]]。
流形描述的是 Euclid 空间中的[[曲线]]和[[曲面]]，以及它们的高维类比，
但流形的概念将它们视为独立的对象，
将[[同胚]]（或[[微分同胚]]）的流形视为相同的流形，
而不在乎它们如何嵌入到 Euclid 空间。

“流形”一词有时也指[[光滑流形]]，但我们不采用这种术语。
为强调所指的不是光滑流形，也将流形称为**拓扑流形**。

## 定义

::: definition [局部 Euclid 空间] {@局部-Euclid-空间}
[[拓扑空间]] $X$ 称为**局部 Euclid 空间**，
如果满足下列等价条件之一：

- 每个点 $x \in X$ 都有[[开邻域]] $U \subset X$，
  使得 $U$ [[同胚]]于某个 [[Euclid 空间]] $\mathbb{R}^n$ 中的某个开集 $V \subset \mathbb{R}^n$。

- 每个点 $x \in X$ 都有[[开邻域]] $U \subset X$，
  使得 $U$ [[同胚]]于某个 [[Euclid 空间]] $\mathbb{R}^n$。

:::

::: definition [流形]
**流形**是指[[拓扑空间]] $X$，满足

- $X$ 是局部 Euclid 空间（@局部-Euclid-空间）。

- $X$ 是 [[Hausdorff 空间]]。

- $X$ 是[[第二可数空间]]。

如果 $X \neq \varnothing$，
且存在[[自然数]] $n$，使得空间 $X$ 局部同胚于 $\mathbb{R}^n$，
就说 $X$ 是 **$n$ 维流形**，或者说 $X$ 的**维数**为 $n$，并记
\[
\dim X = n.
\]
:::

::: remark
按照我们的定义，不同维数流形的[[无交并]]仍然是流形，
例如 $\mathbb{R} \sqcup \mathbb{R}^2$。
在文献中，有时会要求流形都具有固定的维数，而并不将这种空间看作流形。
:::

## 例子

- [[Euclid 空间]] $\mathbb{R}^n$ 是最简单的 $n$ 维流形。
  $\mathbb{R}^n$ 中的开集也都是 $n$ 维流形。

- [[球面]] $S^n$ 是一类最基本的流形，也是最常见的[[紧空间|紧]]流形之一。

- 对任意自然数 $n$，[[实射影空间]] $\mathbb{RP}^n$ 是流形。
  当 $n > 0$ 且为[[偶数]]时，
  $\mathbb{RP}^n$ 是紧、[[不可定向流形]]的例子。

以下是一些反例：

- [[双原点直线]]是第二可数的局部 Euclid 空间，
  但不是 Hausdorff 空间，因而不是流形。

- [[长直线]]是 Hausdorff 的局部 Euclid 空间，
  但不是第二可数空间，因而不是流形。

## 参考文献

介绍光滑流形的教材：

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
流形:
  en: manifold
  de: Mannigfaltigkeit :f
  fr: variété :f
  grc: πολλαπλούτης :f
  la: multiplex :n
  ja: 多<た>様<よう>体<たい>
拓扑流形:
  en: topological manifold
  de: topologische Mannigfaltigkeit
  fr: variété topologique
  grc: τοπολογικὴ πολλαπλούτης
  la: multiplex topologicum
  ja: 位<い>相<そう>多<た>様<よう>体<たい>
```
