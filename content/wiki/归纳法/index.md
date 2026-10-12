---
title: 归纳法
aliases: [数学归纳法]
categories: [集合论]
---

**归纳法**（或**数学归纳法**）是指如下原理：
如果一种关于[[自然数]]的性质

- 对 $0 \in \mathbb{N}$ 成立；

- 如果对 $n \in \mathbb{N}$ 成立，就对 $n + 1$ 成立，

那么它就对所有自然数成立。

归纳法是 [[Peano 公理]]的一部分，用于刻画自然数集的性质。
在建立于[[集合论]]之上的数学中，
归纳法并非公理，而是一个基本结论。

## 叙述与证明

::: theorem [归纳法]
设 $P (n)$ 是关于[[自然数]] $n$ 的[[命题]]。假设

- $P (0)$ 成立。

- 对任何 $n \in \mathbb{N}$，有 $P (n)$ [[蕴涵]] $P (n + 1)$。

那么对任何 $n \in \mathbb{N}$，有 $P (n)$ 成立。
:::

以上叙述并不落在[[一阶逻辑]]之内，因为它描述了“对任意命题”满足的性质。
为解决这一问题，可使用[[分出公理]]，通过 $\mathbb{N}$ 的子集
\[
\{ n \in \mathbb{N} \mid P (n) \}
\]
来刻画命题 $P$。这样一来，归纳法的叙述就可完全在一阶逻辑之内完成：

::: theorem [归纳法，重新叙述]
设 $A \subset \mathbb{N}$ 是[[自然数]]集的[[子集]]。假设

- $0 \in A$。

- 对任何 $n \in \mathbb{N}$，有 $n \in A$ 蕴涵 $n + 1 \in A$。

那么 $A = \mathbb{N}$。
:::

::: proof
首先明确，这里自然数通过[[集合论]]来定义
（参见[[自然数]]一文）：
称集合 $X$ 为**归纳集**，
若 $0 = \varnothing \in X$，
且对任何 $x \in X$，有 $S(x) = x \cup \{ x \} \in X$，
而 $\mathbb{N}$ 定义为所有归纳集之公共部分。

由假设，$A$ 是归纳集，从而 $\mathbb{N} \subset A$。
又由假设，$A \subset \mathbb{N}$，从而 $A = \mathbb{N}$。
:::

## 变种

- [[归纳构造]]
- [[超限归纳法]]
- [[Noether 归纳法]]

```terms
归纳法:
  en: induction
  de: Induktion :f
  fr: 'récurrence :f, induction :f'
```
