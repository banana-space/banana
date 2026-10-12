---
title: 分布（微分几何）
aliases: [对合分布, 可积分布]
categories: [微分几何]
notices:
  - name: 消歧义
    see:
      - page: 分布
navboxes: [微分几何]
---

[[光滑流形]]上的**分布**是指其[[切丛]]的子丛，
即对每个点指定一个该点切空间的[[子向量空间|子空间]]，
并且该子空间光滑依赖于点的变化。

给定分布，我们可以问该分布是否为**可积分布**，
也就是说，这些子空间是否由某个[[叶结构]]中子流形的切空间给出。
微分几何中的 [[Frobenius 定理 (微分几何)|Frobenius 定理]]给出了分布可积的等价条件，
即要求该分布是**对合分布**。

## 定义

::: definition [分布]
设 $M$ 是 $n$ 维[[光滑流形]]，$0 \leq p \leq n$ 为自然数。
则 $M$ 上秩 $p$ 的**分布** $\mathcal{L}$
给每个点 $x \in M$ 指定切空间 $\mathrm{T}_xM$ 的
$p$ 维子空间 $\mathcal{L}_x$，满足以下条件：

- 对任意 $x\in M$，存在其开邻域 $U$ 与其上 $p$ 个光滑[[向量场]]
  $X_1,\dots,X_p$，使得对任意 $y\in U$，
  向量组 $\{(X_1)_y,\dots,(X_p)_y\}$
  是 $\mathcal{L}_y$ 的一组基。

:::

::: definition [对合分布]
设 $U \subset M$ 为开集，$X$ 是 $U$ 上向量场，
$\mathcal{L}$ 为 $M$ 上分布。

称 $X$ 在 $U$ 上**属于** $\mathcal{L}$，
若对任意 $x\in U$ 有 $X_x\in \mathcal{L}_x$。

称 $\mathcal{L}$ 为**对合分布**，
如果满足以下条件：

- 对任意开集 $U \subset M$，及 $U$ 上属于 $\mathcal{L}$ 的向量场 $X,Y$，
  其 [[Lie 括号 (微分几何)|Lie 括号]] $[X,Y]$ 在 $U$ 上属于 $\mathcal{L}$。

:::

::: definition [可积分布]
设 $\mathcal{L}$ 为 $M$ 上分布。

$M$ 的连通[[浸入子流形]] $S$ 称为 $\mathcal{L}$ 的**积分流形**，
若满足对任意 $y\in S$ 有 $\mathrm{T}_yS=\mathcal{L}_y$。

称 $\mathcal{L}$ 为**可积分布**，若满足以下条件：

- $M$ 的每个点都在 $\mathcal{L}$ 的某个积分流形里。

此时，所有积分流形构成 $M$ 上的[[叶结构]]。
:::

微分几何中的 [[Frobenius 定理 (微分几何)|Frobenius 定理]]说明，可积分布与对合分布的概念是等价的。

## 例子

- 设 $M = \mathbb{R}^n$，设 $0\leq p \leq n$。
  对任意 $x \in \mathbb{R}^n$，定义 $\mathcal{L}_x \subset \mathrm{T}_x \mathbb{R}^n$ 为
  $\partial/\partial x^1, \dotsc, \partial/\partial x^p$
  张成的子空间。则 $\mathcal{L}$ 为对合分布，也为可积分布。其积分流形是形如
  \[
  \{(x^1,\dots,x^n) \in \mathbb{R}^n \mid x^{p+1}=a^{p+1}, \dotsc, x^n = a^n\}
  \]
  的 $p$ 维平面，其中 $a^{p+1}, \dotsc, a^n$ 为给定的实数。

## 参考文献

以下教材第 19 章介绍分布：

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
分布:
  en: distribution
  fr: distribution
对合分布:
  en: involutive distribution
  fr: distribution involutive
```
