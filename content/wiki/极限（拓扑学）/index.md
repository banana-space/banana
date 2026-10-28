---
title: 极限（拓扑学）
aliases: [收敛]
categories: [一般拓扑]
navboxes: [微积分学]
---

<problems>
- “滤子的极限”“网的极限”各节需要扩充。
- “映射的极限”定义中，极限唯一性似乎还需要 $x_0$ 不是 $X$ 的孤立点（否则任何 $y$ 都是极限）。
</problems>

**极限**是指一个[[拓扑空间]]中，
能被一个[[序列]]（或其它对象）任意逼近的点。
极限的一个直观的例子是，[[实数]]的序列
\[
1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \dotsc
\]
逐渐逼近 $0$，但可以不真正取到 $0$ 这个值。
这时，我们说这个序列的极限是 $0$，记作
\[
\lim _{n \to \infty} \frac{1}{n} = 0.
\]

## 定义

### 序列的极限

<see>[[序列的极限]]</see>

数列的极限是极限的最基本的例子。

::: definition [数列的极限]
设 $\{ x_n \in \mathbb{R} \}_{n \in \mathbb{N}}$ 是一个[[数列]]。
如果存在 $x \in \mathbb{R}$，使得对任意 $\varepsilon > 0$，存在 $N \in \mathbb{N}$，
使得对任意 $n > N$，有
\[
| x_n - x | < \varepsilon ,
\]
就说 $x$ 是数列 $\{ x_n \}$ 的**极限**，记为
\[
\lim _{n \to \infty} x_n = x.
\]
:::

这种概念也能推广到一般的拓扑空间。

::: definition [序列的极限]
设 $X$ 是[[拓扑空间]]，
$\{ x_n \in X \}_{n \in \mathbb{N}}$ 是 $X$ 中的一个[[序列]]。
如果存在 $x \in X$，使得对 $x$ 的任意邻域 $U$，存在 $N \in \mathbb{N}$，
使得对任意 $n > N$，有 $x_n \in U$，
就说 $x$ 是序列 $\{ x_n \}$ 的一个**极限**，记为
\[
\lim _{n \to \infty} x_n \to x.
\]
如果 $X$ 是 [[Hausdorff 空间]]，那么序列的极限是唯一的。此时，我们记
\[
\lim _{n \to \infty} x_n = x.
\]
:::

### 函数的极限

<see>[[函数的极限]]</see>

::: definition [函数的极限]
设 $f \colon \mathbb{R} \to \mathbb{R}$ 是一个[[函数]]，$x_0 \in \mathbb{R}$ 是一个数。
如果存在 $y \in \mathbb{R}$，使得对任意 $\varepsilon > 0$，存在 $\delta > 0$，
使得对任意 $x \in (x_0 - \delta, x_0 + \delta) \setminus \{ x_0 \}$，有
\[
| f (x) - y | < \varepsilon ,
\]
就说 $y$ 是函数 $f (x)$ 在 $x$ 趋于 $x_0$ 时的**极限**，记为
\[
\lim _{x \to x_0} f (x) = y.
\]
:::

这种概念也能推广到一般的拓扑空间。

::: definition [映射的极限]
设 $X, Y$ 是[[拓扑空间]]，$x_0 \in X$ 是一个点，
$f \colon X \to Y$ 是一个[[映射]]（不一定[[连续映射|连续]]）。
如果存在 $y \in Y$，使得对 $y$ 的任意邻域 $V \subset Y$，
存在 $x_0$ 的邻域 $U \subset X$，使得 $f (U \setminus \{ x_0 \}) \subset V$，
就说 $y$ 是映射 $f (x)$ 在 $x$ 趋于 $x_0$ 时的一个**极限**，记为
\[
\lim _{x \to x_0} f (x) \to y.
\]
如果 $Y$ 是 [[Hausdorff 空间]]，那么映射的极限是唯一的。此时，我们记
\[
\lim _{x \to x_0} f (x) = y.
\]
:::

### 滤子的极限

### 网的极限

```terms
极限:
  en: limit
  de: Grenzwert :m
  fr: limite :f
  grc: ὄριον :n
  la: limes :m
```
