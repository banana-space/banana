---
title: Euclid 向量空间
aliases: [Euclid 内积]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
**Euclid 向量空间**是指带有 **Euclid 内积**的 [[Descartes 空间]]。
换言之，即形如
\[
\mathbb{R}^n = \{
  (x_1, \dotsc, x_n) \mid
  x_1, \dotsc, x_n \in \mathbb{R}
\}
\]
的[[向量空间]]，其中 $n$ 是[[自然数]]，
并且，其中任两个向量可以作内积。

Euclid 向量空间与 [[Euclid 空间]]的区别在于，
前者是向量空间，因此有原点，但 Euclid 空间中，所有点都具有相同的地位，而没有原点。

## 定义

::: definition [Euclid 内积]
$\mathbb{R}^n$ 上的 **Euclid 内积**是如下定义的[[内积]]：
对 $x = (x_1, \dotsc, x_n) \in \mathbb{R}^n$ 和
$y = (y_1, \dotsc, y_n) \in \mathbb{R}^n$，定义
\[
\langle x, y \rangle =
\sum_{i = 1}^n x_i y_i .
\]
这个内积使得 $\mathbb{R}^n$ 成为[[内积空间]]，称为 **Euclid 向量空间**。
:::

::: definition [Euclid 范数]
$\mathbb{R}^n$ 上的 **Euclid 范数**是如下定义的[[范数]]：
对 $x \in \mathbb{R}^n$，定义
\[
\| x \| = \sqrt{\langle x, x \rangle}.
\]
这个范数使得 $\mathbb{R}^n$ 成为[[赋范向量空间]]。
:::

```terms
Euclid 向量空间:
  en: Euclidean vector space
  de: euklidischer Vektorraum :m
  fr: espace vectoriel euclidien :m
```
