---
title: Euclid 空间
aliases: [欧氏空间]
categories: [初等几何, 一般拓扑, 微分几何]
---

<problems>
- “作为流形”“性质”“历史注记”各节需要扩充。
</problems>

**Euclid 空间**是指形如
\[
\mathbb{R}^n = \{
  (x_1, \dotsc, x_n) \mid
  x_1, \dotsc, x_n \in \mathbb{R}
\}
\]
的空间，其中 $n$ 是[[自然数]]，
并且带有额外的结构，使得在其中能够定义长度、角度等概念。

严格地说，Euclid 空间是 [[Euclid 向量空间]]上的[[仿射空间]]。
换言之，Euclid 空间是“忘掉原点在哪里”的 Euclid 向量空间。
在 Euclid 向量空间中，原点具有特殊的地位，但 Euclid 空间中，所有点都具有同等地位。

另一方面，Euclid 空间也是[[拓扑空间]]，
它是[[流形]]的基本例子。
Euclid 空间中距离的概念赋予其自然的 [[Riemann 流形]]结构。

## 定义

### 作为仿射空间

::: definition [Descartes 空间]
设 $n \geq 0$ 是[[自然数]]。
则 $n$ 维 **[[Descartes 空间]]** 是指[[实数]]域 $\mathbb{R}$ 上的[[向量空间]]
\[
\mathbb{R}^n = \{
  (x_1, \dotsc, x_n) \mid
  x_1, \dotsc, x_n \in \mathbb{R}
\} ,
\]
即 $\mathbb{R}$ 与自身的 $n$ 重 [[Descartes 积]]。
:::

::: definition [Euclid 内积]
$\mathbb{R}^n$ 上的 **[[Euclid 内积]]** 是如下定义的[[内积]]：
对 $x = (x_1, \dotsc, x_n) \in \mathbb{R}^n$ 和
$y = (y_1, \dotsc, y_n) \in \mathbb{R}^n$，定义
\[
\langle x, y \rangle =
\sum_{i = 1}^n x_i y_i .
\]
这个内积使得 $\mathbb{R}^n$ 成为[[内积空间]]，
称为 **[[Euclid 向量空间]]**。
:::

::: definition [Euclid 空间]
**Euclid 空间**是 Euclid 向量空间上的[[仿射空间]]。
:::

### 作为拓扑空间

::: definition [Euclid 范数]
$\mathbb{R}^n$ 上的 **Euclid 范数**是如下定义的[[范数]]：
对 $x \in \mathbb{R}^n$，定义
\[
\| x \| = \sqrt{\langle x, x \rangle}.
\]
这个范数使得 $\mathbb{R}^n$ 成为[[赋范线性空间]]。
:::

::: definition [Euclid 距离]
$\mathbb{R}^n$ 上的 **Euclid 距离**是如下定义的[[距离]]：
对 $x, y \in \mathbb{R}^n$，定义
\[
d (x, y) = \| x - y \|,
\]
其中 $\| \cdot \|$ 是 Euclid 范数。
这个距离使得 $\mathbb{R}^n$ 成为[[度量空间]]。
:::

::: definition [Euclid 拓扑]
$\mathbb{R}^n$ 上的 **Euclid 拓扑**是 Euclid 距离[[度量空间|诱导的拓扑]]。
这使得 $\mathbb{R}^n$ 成为[[拓扑空间]]。
:::

### 作为流形

::: remark
几何学中有时称[[单连通]][[平坦度量|平坦]] [[Riemann 流形]]为 Euclid 空间。
:::

## 性质

## 历史注记

```terms
Euclid 空间:
  en: Euclidean space
  de: euklidischer Raum
  fr: espace euclidien
  grc: εὐκλείδειος χῶρος
  la: spatium euclideum
```
