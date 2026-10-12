---
title: Riemann–Lebesgue 引理
aliases: [Riemann-Lebesgue 引理]
categories: [实分析]
---

[[实分析]]中，**Riemann–Lebesgue 引理**指的是，
$\mathbb{R}$ 上 $L^1$ 函数 $f(x)$ 的 [[Fourier 变换]]
$\hat{f}(\xi)$ 在 $|\xi|\to\infty$ 时趋于 $0$，
或闭区间上 $L^1$ 函数的 [[Fourier 级数]]系数在 $|n|\to\infty$
时趋于 $0$。

## 陈述与证明

::: theorem [Riemann–Lebesgue] {@RL}
设 $f(x)\in L^1(\mathbb{R})$，即 $f$ 为 $\mathbb{R}$ 上
[[Lebesgue 可积]]函数。定义
$$
\hat{f}(\xi)=\int_\mathbb{R} f(x)e^{-\mathrm{i}\xi x}\mathrm{d} x
$$
为其 [[Fourier 变换]]。则
$\lim_{|\xi|\to\infty}\hat{f}(\xi)=0$。
:::

::: proof
记 $\|f\|_1=\int_\mathbb{R}|f(x)|\mathrm{d} x$ 为 $f$ 的 $L^1$-范数，
则显然对任意 $\xi\in\mathbb{R}$，$|\hat{f}(\xi)|\le\|f\|_1$。

- 如 $f$ 可导且导数 $L^1$，则由[[分部积分]]，
  $\widehat{f'}(\xi)=\mathrm{i}\xi\hat{f}(\xi)$，于是
  $|\hat{f}(\xi)|\le|\xi|^{-1}|\widehat{f'}(\xi)|
  \le|\xi|^{-1}\|f'\|_1$，在 $|\xi|\to\infty$
  时趋于 $0$。

- 一般情形用可导且导数 $L^1$ 的来逼近。具体地说，
  我们来对任意 $\varepsilon>0$ 证明存在 $M$ 使得
  $|\xi|>M$ 时 $|\hat{f}(\xi)|<\varepsilon$。为此，
  取 $L^1$ 函数 $g$，可导且导数 $L^1$，满足
  $\|f-g\|_1<\varepsilon/2$，再取 $M$ 使得
  $|\xi|>M$ 时 $|\hat{g}(\xi)|<\varepsilon/2$。
  此时 $|\hat{f}(\xi)|\le|\widehat{(f-g)}(\xi)|+
  |\hat{g}(\xi)|\le\|f-g\|_1+\varepsilon/2<
  \varepsilon$。

:::

::: corollary
设 $f(x)\in L^1([0,1])$，即 $f$ 为 $[0,1]$ 上
[[Lebesgue 可积]]函数。定义
$$
\hat{f}(n)=\int_0^1f(x)e^{-2\pi\mathrm{i} nx}\mathrm{d} x
$$
为其 [[Fourier 级数]]。则
$\lim_{|n|\to\infty}\hat{f}(n)=0$。
:::

::: proof
可以照搬 @RL 的证明，也可以直接把 $f$ 零延拓为 $\mathbb{R}$
上可积函数然后用 @RL 的结论。
:::

## 推广

Riemann–Lebesgue 引理对一般的[[局部紧交换群]]成立。

::: theorem
设 $G$ 为局部紧交换群，$f(x)\in L^1(G)$。则其
[[Fourier 变换]]
$$
\hat{f}(\xi)=\int_Gf(x)\left<x,\xi\right>^{-1}\mathrm{d} x
$$
属于 $C_0(\hat{G})$，即 $\hat{f}$ 连续，且对任意
$\varepsilon>0$，
$\{\xi\in\hat{G}\mid|\hat{f}(\xi)|\ge\varepsilon\}$
是 $\hat{G}$ 中[[紧集]]。
:::

::: proof
以 $\mathcal{S}(G)$ 记 [[Schwartz 函数空间]]，则
$\mathcal{S}(G)\subseteq L^1(G)$ 且在其中稠密。
由于 $\widehat{\mathcal{S}(G)}=\mathcal{S}(\hat{G})
\subseteq C_0(\hat{G})$ 且 $\|\hat{f}\|_\infty\le
\|f\|_1$，用和 @RL 证明中一样的逼近方法即得结论。
:::

## 参考文献

```bibliography
ww1902:
  type: book
  author: [E. T. Whittaker, G. N. Watson]
  editor: V. H. Moll
  year: 2021
  title: A Course of Modern Analysis
  edition: 5
  publisher: Cambridge University Press
  doi: 10.1017/9781009004091
```
