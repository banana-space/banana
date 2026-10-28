---
title: '$\mathrm{e}$'
aliases: [E]
categories: [实分析, 复分析, 常数]
---

<problems>
- “无理性”“超越性”各节需要扩充。
</problems>

[[实数]] $\mathrm{e} \in \mathbb{R}$（有时称为 **Euler 数**）
是[[指数函数]] $\exp$ 在 $1$ 处的取值，其近似值为
\[
\mathrm{e} = 2.71828 \, 18284 \, 59045 \, 23536 \ldots
\]

## 定义

### 通过指数函数

[[指数函数]] $\exp \colon \mathbb{R} \to \mathbb{R}$ 定义为以下[[常微分方程]]的[[初值问题]]的解：
\[
\begin{cases}
  \exp' (x) = \exp (x), & x \in \mathbb{R}, \\
  \exp (0) = 1.
\end{cases}
\]
指数函数也可以由如下的[[幂级数]]给出：
\[
\exp (x) =
\sum_{n=0}^{\infty}
\frac{x^n}{n!}.
\]

::: definition [$\mathrm{e}$] {@def-e-via-exp}
我们定义
\[
\mathrm{e} = \exp (1)
= \sum_{n=0}^{\infty} \frac{1}{n!}.
\]
:::

### 通过数列极限

另一个常见的定义是通过数列的极限得到的，即

::: definition [$\mathrm{e}$] {@def-e-via-lim}
极限
\[
\mathrm{e} = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^{n}
\]
:::

## 性质

### 无理性

### 超越性
