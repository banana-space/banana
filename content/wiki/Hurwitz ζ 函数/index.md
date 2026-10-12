---
title: 'Hurwitz $\zeta$ 函数'
aliases: [Hurwitz zeta 函数]
categories: [复分析, 特殊函数, 解析数论]
---

::: convention
在本文中，

- $s$表示以$\sigma$为横坐标、$t$为纵坐标的复数。

:::

在[[解析数论]]中，**Hurwitz zeta 函数**一般指在$\sigma>1$时满足：

```math {@eqn-hz}
\zeta(s,a)=\sum_{n\ge0}{1\over(n+a)^s},
```

其中$a\in(0,1]$。

## 基本性质

结合 @eqn-hz，显见：

::: proposition [与[[Riemann $\zeta$ 函数]]的关系]
\[
\zeta(s,1)=\zeta(s)
\]
:::

::: proposition [与[[Dirichlet $L$ 函数]]的关系]
若$\chi$为模$q$的 Dirichlet 特征，则有：
\[
L(s,\chi)={1\over q^s}\sum_{1\le r\le q}\chi(r)\zeta\left( s,\frac rq \right)
\]
:::

::: proof
将$L(s,\chi)$的求和范围根据模$q$的同余类分解，便有：
\[
L(s,\chi)=\sum_{1\le r\le q}\chi(r)\sum_{k\ge0}{1\over(kq+r)^s}
\]
将右侧的$q^{-s}$提出来即得结论。
:::

## 解析延拓

<see>[[Bernoulli 多项式]]</see>

利用[[Euler–Maclaurin 公式]]，可知$\zeta(s,a)$的级数表达式满足：

```math {@eqn-emhz}
\zeta(s,a)={a^{1-s}\over s-1}+{1\over2a^s}-s\int_a^\infty{\overline B_1(x-a)\over x^{s+1}}\mathrm dx
```

由于最右侧的积分在$\sigma>-1$时皆收敛，所以 @eqn-emhz 可以被看作$\zeta(s,a)$的解析延拓。
现在我们不妨将$\sigma$范围缩小至$-1<\sigma<0$，则根据：

\[
\begin{aligned}
  {a^{1-s}\over s-1}+{1\over2a^s}
  &=-\int_0^ax^{-s}\mathrm dx-\frac s2\int_0^ax^{-s-1}\mathrm dx \\
  &=-\int_0^ax^{-s}\mathrm d(x-a)-\frac s2\int_0^ax^{-s-1}\mathrm dx \\
  &=-s\int_0^a{(x-a)+\frac12\over x^{s+1}}\mathrm dx=-s\int_0^a{\overline B_1(x-a)\over x^{s+1}}\mathrm dx,
\end{aligned}
\]

可知$-1<\sigma<0$时总有：

\[
\zeta(s,a)=-s\int_0^\infty{\overline B_1(x-a)\over x^{s+1}}\mathrm dx.
\]

现在代入$\overline B_1(x)$的 Fourier 展开：

\[
\overline B_1(x)=\sum_{n\in\mathbb{Z}\setminus\{0\}}{e^{-2\pi inx}\over2\pi in},
\]

则有：

\[
\begin{aligned}
  \zeta(s,a)
  &=-s\sum_{n\in\mathbb{Z}\setminus\{0\}}{e^{2\pi ina}\over2\pi in}\int_0^\infty x^{-s-1}e^{-2\pi inx}\mathrm dx \\
  &=-s\sum_{n\in\mathbb{Z}\setminus\{0\}}{e^{2\pi ina}\over2\pi in}{\Gamma(-s)\over(2\pi in)^{-s}} \\
  &=(2\pi)^{s-1}\Gamma(1-s)\sum_{n\in\mathbb{Z}\setminus\{0\}}{e^{2\pi ina}\over(in)^{1-s}}.
\end{aligned}
\]

由于$\sigma>1$时

\[
\sum_{n\in\mathbb{Z}\setminus\{0\}}{e^{2\pi ina}\over(in)^s}
=i^{-s}\sum_{n\ge1}{e^{2\pi in a}\over n^s}+i^s\sum_{n\ge1}{e^{-2\pi ina}\over n^s},
\]

所以合并起来就有：

::: theorem [Hurwitz]
定义周期$\zeta$函数
\[
F(x,s)=\sum_{n\ge1}{e^{2\pi ixn}\over n^s},
\]
则当$\sigma>1$时总有
\[
\zeta(1-s,a)={\Gamma(s)\over(2\pi)^s}\left[ e^{-\pi is/2}F(a,s)+e^{\pi is/2}F(-a,s) \right].
\]
:::

代入$a=1$便得$\zeta(s)$的函数方程：

::: corollary
当$\sigma>1$时：
\[
\zeta(1-s)=2(2\pi)^{-s}\cos\left(\pi s\over2\right)\Gamma(s)\zeta(s).
\]
当$\sigma<0$时：
\[
\zeta(s)=2^s\pi^{s-1}\sin\left( \pi s\over2 \right)\Gamma(1-s)\zeta(1-s).
\]
:::
