---
title: 线性无关向量组
aliases: [线性无关, 线性相关]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
**线性无关向量组**是指[[向量空间]]中的一组[[向量]]，
例如 $(x_1, \dotsc, x_n)$，它们不满足任何非平凡的线性关系。
也就是说，它们不满足任何形如
\[
a_1 x_1 + \cdots + a_n x_n = 0
\]
的方程，其中 $a_1, \dotsc, a_n$ 是标量。

不线性无关的向量组称为**线性相关**的。

## 定义

::: definition [线性无关向量组]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，$I$ 是[[集合]]，
$(x_i \in V)_{i \in I}$ 是一组向量。
称该向量组**线性无关**，
如果满足以下条件：

- 对任意一组系数 $(a_i \in k)_{i \in I}$，
  若这些系数中只有有限个非零，且
  \[
  \sum_{i \in I} a_i x_i = 0,
  \]
  则所有 $a_i$ 必全为 $0$。

否则，称这组向量**线性相关**。
:::

## 例子

- 空向量组总是线性无关的。由一个非零向量构成的向量组也总是线性无关的。

- 在 $k$-向量空间 $V$ 中，设 $x, y \in V$。
  则向量组 $(x, y)$ 线性无关，
  当且仅当 $x$ 与 $y$ 不在同一条直线上，
  也即不存在 $a \in k$ 使得 $x = a y$ 或 $y = a x$。

- 若一组向量的个数超出向量空间的[[维数 (线性代数)|维数]]，
  则这组向量必线性相关。

```terms
线性无关向量组:
  en: linearly independent set of vectors
  fr: famille libre
线性无关:
  en: linearly independent
  fr: linéairement indépendant
线性相关向量组:
  en: linearly dependent set of vectors
  fr: famille liée
线性相关:
  en: linearly dependent
  fr: linéairement dépendant
```
