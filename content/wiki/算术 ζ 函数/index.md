---
title: '算术 $\zeta$ 函数'
aliases: [算术 zeta 函数]
categories: [特殊函数, 算术几何]
---

<problems>
- “极点信息”一节需要扩充，例如 Tate、Beilinson、Soulé 等人关于极点的猜想。
</problems>

**算术 $\zeta$ 函数**是对 $\mathbb{Z}$ 上[[有限型态射|有限型]][[概形]]
定义的 $\mathbb{C}$ 上[[解析函数]]，记录概形的算术信息。
它是 [[Dedekind $\zeta$ 函数]]与
[[Weil $\zeta$ 函数]]的共同推广。
[[Riemann 猜想]]、[[类数公式]]等亦可推广到上面，
但我们对此尚知之甚少。

## 定义

::: definition
对 $\mathbb{Z}$ 上有限型概形 $X$，
其**算术 $\zeta$ 函数**定义为
\[
\zeta_X(s)
= \prod_{x \in |X|} \frac{1}{1 - N(x)^{-s}},
\]
其中 $|X|$ 表示 $X$ 的闭点集，$N(x)$ 表示闭点 $x$
的剩余域元素个数。由 [[Jacobson 环]]的理论，此剩余域一定是有限域。

由 [[Noether 正规化]]之类的定理不难发现，
$\zeta_X(s)$ 在 $\Re(s) > n$ 上绝对收敛，
其中 $n=\dim X$。
:::

## 性质

### 乘性

由 $\zeta_X$ 的定义可立即看出，如 $Z\subseteq X$ 是[[闭子概形]]，
$U=X\setminus Z$，则
$$
\zeta_X=\zeta_Z\zeta_U.
$$
除此之外，如 $X\to Y$ 是 $\mathbb{Z}$ 上有限型概形之间的态射，则由 Jacobson 性有
$$
\zeta_X=\prod_{y\in|Y|}\zeta_{X_y},
$$
其中 $|Y|$ 表示 $Y$ 的闭点集，$X_y$ 指 $y$ 的原像，
它是 $X$ 的闭子概形，自然也是 $\mathbb{Z}$ 上有限型。

### Hasse–Weil 猜想

[[Hasse]] 和 [[Weil]] 猜想，$\zeta_X$ 可延拓为整个 $\mathbb{C}$
上的[[亚纯函数]]，且关于 $s\mapsto n-s$ 有某种函数方程。
这对 [[Dedekind $\zeta$ 函数]]与 [[Weil $\zeta$ 函数]]都早已被证明，
但一般情形仍不得而知。

### Riemann 猜想

算术 $\zeta$ 函数的 Riemann 猜想声称 $\zeta_X(s)$ 的非平凡零点实部都是
$[0,n]$ 内的半整数，极点实部都是 $[0,n]$ 内的整数。它是
[[Dedekind $\zeta$ 函数]]与 [[Weil $\zeta$ 函数]]的
Riemann 猜想的共同推广。在 $\zeta_X$ 中乘上适当的无穷位点信息，
“非平凡”这一定语理应可以去掉。

[[Weil 猜想]]早已完整解决，即对 $\mathbb{F}_p$ 上的 $X$
这已经成为定理；但对不在 $\mathbb{F}_p$ 上的 $X$，
即便是最简单的 $X=\operatorname{Spec}\mathbb{Z}$ 情形，这也是尚未解决的
[[Riemann 猜想]]。

### 极点信息

记 $n=\dim X$。

::: proposition [Serre]
$\zeta_X$ 在 $n$ 处具有极点，阶数等于 $X$ 的 $n$ 维[[不可约概形|不可约]]分支的个数。
:::

## 例子

::: example
对[[仿射空间]]及[[射影空间]]，
\[
\zeta_{\mathbb{A}^m_X}(s) = \zeta_X(s-m).\\
\zeta_{\mathbb{P}^m_X}(s) = \prod_{k=0}^m\zeta_X(s-k).
\]
:::

::: example
对[[数域]] $K$，记其整数环为 $\mathcal{O}_K$，则依定义
$$
\zeta_{\operatorname{Spec}\mathcal{O}_K}(s)=\zeta_K(s)
$$
为 [[Dedekind $\zeta$ 函数]]。
:::

::: example
如 $X$ 是 $\mathbb{F}_p$ 上概形，则 $\zeta_X$ 就是
[[Weil $\zeta$ 函数]]。
:::
