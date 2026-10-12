---
title: 降阶乘
aliases: [排列数]
categories: [组合函数, 特殊函数]
navboxes: [计数组合]
---

**降阶乘**是指形如
\[
x^{\underline{n}} =
x \cdot (x - 1) \cdot (x - 2) \cdots (x - n + 1)
\]
的表达式，其中 $n$ 是[[自然数]]，
而 $x$ 可以是任意[[复数]]，或是一般的[[环]]中的元素。
注意到这一乘积中共有 $n$ 项。

在[[计数组合]]中，也将降阶乘称为**排列数**，
因为对自然数 $n, k$ 而言，
降阶乘 $n^{\underline{k}}$ 是从 $n$ 个不同物品中选出 $k$ 个，
并将它们排成一列的方法数。
此时，也将 $n^{\underline{k}}$ 记为 $\mathrm{P}_n^k$ 或 $\mathrm{P} (n, k)$。

## 定义

::: definition
对[[复数]] $x$ 和[[自然数]] $n$，定义**降阶乘**
\[
x^{\underline{n}} =
x \cdot (x - 1) \cdot (x - 2) \cdots (x - n + 1).
\]
特别地，当 $n = 0$ 时，我们约定 $x^{\underline{0}} = 1$。
:::

## 性质

### 基本性质

- 对自然数 $k \leq n$，有
  \[
  n^{\underline{k}} = \frac{n!}{(n - k)!}.
  \]

- 对复数 $n$ 和自然数 $k$，[[二项式系数]] $\binom{n}{k} = n^{\underline{k}} / k!$。

```terms
降阶乘:
  en: falling factorial
  fr: factorielle décroissante :f
  de: fallende Fakultät :f
```
