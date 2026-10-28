---
title: Fourier 变换
categories: [调和分析, 抽象调和分析]
---

<problems>
- “性质”“离散 Fourier 变换”“Fourier 级数”各节需要扩充。
</problems>

**Fourier 变换**是一种[[积分变换]]，
它把函数 $f \colon \mathbb{R} \to \mathbb{C}$ 变成函数
\[
\hat{f} (\xi) = \int_{\mathbb{R}} f(x) \, \mathrm{e}^{-2\pi\mathrm{i} \xi x} \, d x.
\]
这么做的目的是把 $f (x)$ 写成形如 $\mathrm{e}^{2\pi\mathrm{i} \xi x}$
的函数的线性组合，其中 $\xi$ 取遍所有实数，$\hat{f} (\xi)$ 就是这个线性组合中
$\mathrm{e}^{2\pi\mathrm{i} \xi x}$ 的系数：我们有
\[
f (x) = \int_{\mathbb{R}} \hat{f} (\xi) \, \mathrm{e}^{2\pi\mathrm{i} \xi x} \, d \xi.
\]

一般来说，
Fourier 变换可以推广到某些[[拓扑群]]上。
我们可以将拓扑群上的复值函数写成该拓扑群的连续[[特征 (群论)|特征]]的线性组合，
从而建立拓扑群上函数到它
[[Pontryagin 对偶]]上函数的对应。

研究 Fourier 变换及其推广的学科叫做[[调和分析]]
（或 [[Fourier 分析]]）。

## 定义

::: definition [$\mathbb{R}$ 上的 Fourier 变换]
函数 $f \colon \mathbb{R} \to \mathbb{C}$ 的 **Fourier 变换**是函数
\[
\hat{f} (\xi) = \int_{\mathbb{R}} f(x) \, \mathrm{e}^{-2\pi\mathrm{i} \xi x} \, d x
\]
（如果这个积分存在）。
:::

这个定义可以推广到一般的[[拓扑群]]上。

::: definition [群上的 Fourier 变换]
假设 $G$ 是[[局部紧]] [[Abel 群]]，
$\mu$ 是 $G$ 上的 [[Haar 测度]]。
设 $\hat{G}$ 是 $G$ 的 [[Pontryagin 对偶]]，
即 $G$ 上所有连续[[特征 (群论)|特征]]构成的拓扑群。
设
\[
f \colon G \to \mathbb{C}
\]
是[[绝对可积函数]]。
则 $f$ 的 **Fourier 变换**定义为函数
\[
\begin{gathered}
  \hat{f} \colon \hat{G} \to \mathbb{C}, \\
  \hat{f} (\chi) =
  \int _G f(x) \, \overline {\chi (x)} \, d \mu (x).
\end{gathered}
\]
:::

## 性质

::: proposition
设 $G$ 是局部紧 Abel 群，
设 $\hat G$ 是 $G$ 的 [[Pontryagin 对偶]]。

- $\hat f(\chi )$ 是 $\hat G$ 上[[连续]][[有界]]函数。

- $\widehat {f*g}(\chi) =
  \hat f(\chi )\cdot \hat g(\chi) $。

- （[[Fourier 反演公式]]）
  $\hat G$ 上有唯一的 Haar 测度 $\xi$，
  使得只要 $\hat f$ 绝对可积，就有
  \[
  f (x) =
  \int _{\hat G}
  {\hat f}(\chi) \, \chi (x) \, d \xi(\chi)
  \]
  [[几乎处处]]成立。由 [[Pontryagin 对偶]]，
  上式也可以写为
  \[
  \hat {\hat { f{} } } (-x)= f(x).
  \]

:::

## 特例

### 离散 Fourier 变换

<see>[[离散 Fourier 变换]]</see>

离散 Fourier 变换是有限 Abel 群上的 Fourier 变换。

### Fourier 级数

<see>[[Fourier 级数]]</see>

Fourier 级数可以看做圆周
$\mathbb T^1$ 上函数到 $\mathbb Z$ 上函数的变换。
这是局部紧交换群的特例。

### 局部域上 Fourier 变换

非 Archimedes [[局部域]]上同样可以做 Fourier 变换。

::: definition
设 $k$ 是一个非 Archimedes 局部域，令 $\psi$ 是 $k$ 的非平凡加法特征。
$f$ 是 $k$ 上绝对可积函数，$dx$ 是 $k$ 上 Haar 测度，定义 $f$ 的 Fourier 变换为
$$
\hat f (\xi) = \int _ k f(x)\overline {\psi(x\xi)} dx.
$$
:::

::: lemma
令 $\mathcal O$ 为 $k$ 的整数环，$\mathfrak p$ 为极大理想，$\psi$ 的[[导子]]为 $\mathfrak f_\psi$。
则
$\widehat {\mathbb 1_{a+\mathfrak p^l}}(x) = \left (\int _{\mathfrak p^l} dx \right )\overline {\psi(ax)} \mathbb 1 _ {\mathfrak p^{-l}\mathfrak f _ \psi}$。
:::

::: proof
由定义，
$\widehat {\mathbb 1_{a+\mathfrak p^l}}(\xi) = \overline {\psi(a\xi)}\int _ {\mathfrak p^l} \overline {\psi(x\xi) }dx$；
由[[Schur 引理|紧群上的 Schur 引理]]可知，
当 $\psi(\xi \cdot)$ 在 $\mathfrak p^l$ 上平凡时，
即 $\xi \in \mathfrak p^{-l}\mathfrak f_\psi$ 时，
$\widehat {\mathbb 1_{a+\mathfrak p^l}}(\xi) =\overline {\psi(a\xi)}\int _ {\mathfrak p^l} dx$，
否则为 $0$。
:::

::: proposition
由上面的引理可知，紧支局部常值函数的 Fourier 变换还是紧支局部常值。
:::

::: proposition
当 $dx$ 满足 $\int _ \mathcal O dx = N (\mathfrak f_\psi)^{-\frac 1 2}$ 时，
Fourier 反演公式
$$
\hat {\hat { f{} }}(-x) = f(x)
$$
对任意局部紧支函数成立。
:::

::: proof
只用对 $\mathbb 1_{a+\mathfrak p^l}$ 验证即可，计算过程类似。
:::

```terms
Fourier 变换:
  en: Fourier transform
  de: Fourier-Transformation
  fr: transformation de Fourier
```
