---
title: Poisson 求和公式
categories: [调和分析, 抽象调和分析]
---

<problems>
- “应用”一节需要扩充。
</problems>

**Poisson 求和公式**是指等式
\[
\sum_{n\in\mathbb Z} f(n)
= \sum_{n\in\mathbb Z}\hat {f}(n),
\]
其中 $f$ 是 $\mathbb R$ 上的 [[Schwartz 函数]]，
$\hat{f}$ 是 $f$ 的 [[Fourier 变换]]。

这个公式可以推广到某些[[拓扑群]]上，
说明函数在某个区域的积分等于它的 Fourier 变换在对偶区域上的积分。
[[Selberg 迹公式]]可以看成非交换情形的 Poisson 求和公式。

Poisson 求和公式是[[调和分析]]的重要工具，
也可以用来研究 [[Riemann $\zeta$ 函数]]。

## 陈述和证明

### $\mathbb{R}$ 上函数

::: theorem
对 $\mathbb{R}$ 上的 [[Schwartz 函数]] $f$，
记其 Fourier 变换为 $\hat{f}$，则
\[
\sum_{n \in \mathbb Z} f(n)
= \sum_{n \in \mathbb Z} \hat {f}(n).
\]
:::

::: proof
\[
F(x) = \sum_{n \in \mathbb{Z}} f(x+n)
\]
定义了 $\mathbb{R}$ 上的周期为 $1$ 的周期函数，
考虑其 [[Fourier 级数]] $\widehat{F}$，
则有
\[
\widehat{F}(m)
= \int_0^1 \mathrm{e}^{-2 \pi \mathrm{i} m x} F(x) dx
= \int_{\mathbb{R}} \mathrm{e}^{-2 \pi \mathrm{i} m x} f(x) dx
= \hat{f}(m).
\]
由 Fourier 级数的性质，有
\[
F(x) =
\sum_{m \in \mathbb{Z}} \widehat{F}(m) \mathrm{e}^{2 \pi \mathrm{i} m x} =
\sum_{m \in \mathbb{Z}} \hat{f}(m) \mathrm{e}^{2 \pi \mathrm{i} m x}
\]
在等式两端同时取 $x = 0$，即证。
:::

### 一般情况

::: theorem
考虑[[局部紧]] [[Abel 群]]的[[正合列]]：
\[
0\to A\to B\to C\to 0.
\]
假设 $A$、$B$、$C$ 有 [[Haar 测度]] $d\mu_A$、$d\mu_B$、$d\mu_C$
使得 [[Fubini 定理]]成立。
即对[[连续]][[紧支撑]]函数 $f \colon B\to \mathbb C$，
\[
\int_B f(b)d\mu_B(b) =
\int_C \int_A f(a+c) d\mu_A(a) d\mu_C(c).
\]
令 $\hat {C}$ 是 $C$ 的 [[Pontryagin 对偶]]，
$d\mu _{\widehat {C}}$ 是 [[Fourier 对偶测度]]。
对于任意 [[Schwartz–Bruhat 函数]] $f:B\to \mathbb C$，有
\[
\int_A f(a)d\mu _A(a) =
\int_{\widehat {C}} \hat {f} (\hat {c})d\mu_{\widehat {C}}(\hat {c}),
\]
其中 $\hat {f} \colon \widehat {B}\to \mathbb C$
是 $f$ 的 [[Fourier 变换]]。
:::

::: proof
定义函数 $F \colon C \to \mathbb{C}$ 为
\[
F(c) = \int_A f(a + c) d\mu_A.
\]
则 $F$ 的 Fourier 变换为
\[
\begin{aligned}
  \widehat{F}(\hat{c})
  = & \int_C F(c) \overline{\langle \hat{c}, c \rangle} d\mu_C \\
  = & \int_C \int_A f(a + c) \overline{\langle \hat{c}, c \rangle} d\mu_A d\mu_C \\
  = & \int_B f(b) \overline{\langle \hat{c}, b \rangle} d\mu_B \\
  = & \hat{f}(\hat{c}).
\end{aligned}
\]
由 [[Fourier 逆变换]]公式，有
\[
F(c)
= \int_{\widehat{C}} \widehat{F}(\hat{c}) \langle \hat{c}, c \rangle d\mu_{\widehat{C}}
= \int_{\widehat{C}} \hat{f}(\hat{c}) \langle \hat{c}, c \rangle d\mu_{\widehat{C}}
\]
代入 $c = 0$ 即证。
:::

::: remark
上述定理中取
$A = \mathbb{Z}$，$B = \mathbb{R}$，
$C = \mathbb{R} / \mathbb{Z}$，
则转化为 $\mathbb{R}$ 上函数的情形。
:::

## 应用

```terms
Poisson 求和公式:
  en: Poisson summation formula
  de: Poissonsche Summenformel
  fr: formule de sommation de Poisson
```
