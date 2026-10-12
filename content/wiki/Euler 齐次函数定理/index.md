---
title: Euler 齐次函数定理
categories: [偏微分方程论]
---

**Euler 齐次函数定理**是[[分析学]]中的定理。

粗略地说，
该定理断言一个 $\mathbb{R}^n$ 上的[[函数]]是[[连续可微映射|连续可微]]的[[齐次函数|正齐次]]函数
当且仅当其满足一个特定的[[偏微分方程]]，有时也将这个偏微分方程叫做**齐次函数的 Euler 恒等式**。

## 定理与证明

::: theorem [Euler 齐次函数定理]
给定[[开集]] $U \subset \mathbb{R}^n$。若 $f:U \to \mathbb{R}$ 是一个连续可微的 $k$ 次正齐次函数，
则必满足

```math {@euler-identity}
k f(x_1, \ldots, x_n) =
\sum_{i=1}^n x_i \frac{\partial f}{\partial x_i}(x_1, \ldots, x_n).
```

反过来说，偏微分方程 @euler-identity 的每个最大解都给出唯一一个 $k$ 次正齐次函数。
:::

::: proof
先证充分性。由正齐次性知

```math {@positive}
f(tx_1, \ldots, tx_n) = t^k f(x_1, \ldots, x_n).
```

在等式两边对 $t$ 求导并由[[导数|偏导数]]的链式法则得
\[
\frac{\mathop{}\!\mathrm{d} f}{\mathop{}\!\mathrm{d} t}(tx_1, \ldots, tx_n) =
\sum_{i=1}^n \frac{\partial (tx_i)}{\partial t}
\frac{\partial f}{\partial (tx_i)}(tx_1, \ldots, tx_n) =kt^{k-1} f(x_1, \ldots, x_n)=
f(x_1, \ldots, x_n)\frac{\mathop{}\!\mathrm{d} \bigl( t^k \bigr)}{\mathop{}\!\mathrm{d} t},
\]
令 $t=1$ 即得 @euler-identity。

再证必要性。若 $f$ 是 @euler-identity 的一个最大解，对充分接近 $1$ 的 $t$，
$g(t):=f(tx_1, \ldots, tx_n)$是良定的。此时有
\[
kg(t) = kf(tx_1, \ldots, tx_n) = \sum_{i=1}^n (tx_i)
\frac{\partial f}{\partial (tx_i)}(tx_1, \ldots, tx_n) = tg'(t),
\]
也即

```math {@int}
k\frac{\mathop{}\!\mathrm{d} t}{t} = \frac{\mathop{}\!\mathrm{d} g}{g}.
```

对 @int 两边积分得
\[
g(t) = t^k \cdot g(1),
\]
也即 @positive 对充分接近 $1$ 的 $t$ 成立。
此时尽管 @euler-identity 的解对应的 $g(t)$ 未必对一切正数 $t$ 有定义，
但总可利用 @positive 延拓 $f$ 使得延拓后的函数定义域为一个[[锥 (线性代数)|线性锥]]。
此即所求函数。其唯一性由解的最大性给出。
:::

## 应用

::: theorem
若可微函数 $f: \mathbb{R} \to \mathbb{R}$ 是 $k$ 次齐次的，则存在两个实数 $c_-,c_+$ 使得
\[
f(x) =
\begin{cases}
  c_- x^k,x<0\\
  c_+ x^k,x\ge0.
\end{cases}
\]
:::

::: proof
此时 @euler-identity 化为
\[
k\frac{\mathop{}\!\mathrm{d} x}{x} = \frac{\mathop{}\!\mathrm{d} f}{f}.
\]
积分即得。
:::

::: theorem
若 $f:\mathbb{R}^n \to \mathbb{R}$ 是一个连续可微的 $k$ 次正齐次函数，
则 $\frac{\partial f}{\partial x_j}$ 是 $k-1$ 次正齐次函数。
:::

::: proof
在 @euler-identity 两边对 $x_j$ 求偏导即得。
:::

```terms
Euler 齐次函数定理:
  en: Euler's homogeneous function theorem
  fr: Théorème de la fonction homogène d'Euler
  de: Satz von Euler über homogene Funktionen
```
