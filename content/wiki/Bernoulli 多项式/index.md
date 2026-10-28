---
title: Bernoulli 多项式
categories: [组合函数]
---

<problems>
- Faulhaber 定理中最右边积分的上限似乎应为 $m+1$。
- “Fourier 展开”一节命题的证明中，“回代即得”之后的等式左边似乎缺少因子 $x$，右边的求和中似乎缺少因子 $e^{2\pi int}$。
- Euler 定理中的公式似乎应为 $\zeta(2k)=(-1)^{k+1}{(2\pi)^{2k}B_{2k}\over2(2k)!}$；按现在的写法取 $k=1$ 得到 $\zeta(2)=2\pi^2/3$，与下文不符。
</problems>

**Bernoulli 多项式**$B_n(t)$是一列有理多项式，满足：

```math {@eqn-bpoly-def}
{xe^{tx}\over e^x-1}=\sum_{n\ge0}{x^n\over n!}B_n(t)
```

## 基本性质

::: proposition [与 Bernoulli 数的关系] {@prop-b-bpoly}
\[
B_n(t)=\sum_{0\le m\le n}\binom nmt^mB_{n-m}
\]
:::

::: corollary
\[
B_n(0)=B_n
\]
:::

::: proof
利用幂级数的Cauchy 乘积，可知：

\[
{xe^{tx}\over e^x-1}=\sum_{m\ge0}\sum_{k\ge0}{x^m(tx)^k\over m!k!}B_m=\sum_{n\ge0}x^n\sum_{m+k=n}{B_mt^k\over m!k!}
\]

与 @eqn-bpoly-def 对比系数，即得结论。
:::

::: proposition [差分公式] {@prop-bpoly-difference}
对于所有的$n\ge1$，总有：
\[
B_n(t+1)-B_n(t)=nt^{n-1}
\]
其中$n=1$时：
\[
B_1(t+1)-B_1(t)=1
\]
:::

::: proof
对 @eqn-bpoly-def 做差分，可知：
\[
\begin{aligned}
  \sum_{n\ge0}{B_n(t+1)-B_n(t)\over n!}x^n
  &={x(e^{(t+1)x}-e^{tx})\over e^x-1}=xe^{tx} \\
  &=\sum_{n\ge1}{nt^{n-1}\over n!}x^n
\end{aligned}
\]
对比系数即得结论。
:::

::: proposition [导数] {@prop-bpoly-derivative}
\[
{\mathrm d\over\mathrm dt}B_n(t)=nB_{n-1}(t)
\]
:::

::: proof
由 @prop-b-bpoly 可知：
\[
\begin{aligned}
  {\mathrm d\over\mathrm dt}B_n(t)
  &=\sum_{1\le m\le n}{n!\over(m-1)!(n-m)!}t^{m-1}B_{n-m} \\
  &=n\sum_{0\le m\le n-1}{(n-1)!\over m!(n-1-m)!}t^mB_{n-1-m} \\
  &=n\sum_{0\le m\le n-1}\binom{n-1}mt^mB_{n-1-m}=nB_{n-1}(t)
\end{aligned}
\]
:::

将 @prop-bpoly-difference 和 @prop-bpoly-derivative 结合，便有：

::: theorem [Faulhaber]
当$n\ge1$时，总有：
\[
\sum_{1\le k\le m}k^n={B_{n+1}(m+1)-B_{n+1}\over n+1}=\int_0^mB_n(t)\mathrm dt
\]
:::

## 周期 Bernoulli 函数

::: definition [周期 Bernoulli 函数]
\[
\overline B_n(t)=B_n(t-\lfloor t\rfloor)
\]
:::

除了$n=1$时

\[
\overline B_1(t)=t-\lfloor t\rfloor-\frac12
\]

外，我们可以通过 @prop-bpoly-difference 说明其它周期 Bernoulli 函数都是连续的有界函数，满足：

::: proposition
当$n\in\mathbb{Z}^+\setminus\{1\}$时，对于任何整数$k$总有$\overline B_n(k)=B_n$。
:::

## Fourier 展开

::: proposition {@prop-bpf}
当$m\ge1,t\in[0,1]$时，有：
\[
B_m(t)=-\sum_{n\in\mathbb{Z}\setminus\{0\}}{m!e^{2\pi int}\over(2\pi in)^m}.
\]
特别地，当$k\ge1$时：
\[
B_{2k}(t)=(-1)^{k+1}{2(2k)!\over(2\pi)^{2k}}\sum_{n\ge1}{\cos(2\pi nt)\over n^{2k}},
\]
\[
B_{2k-1}(t)=(-1)^k{2(2k-1)!\over(2\pi)^{2k-1}}\sum_{n\ge1}{\sin(2\pi nt)\over n^{2k-1}}
\]
:::

::: proof
考虑对函数$e^{tx}$以$(0,1)$为周期进行 Fourier 展开：

\[
e^{tx}=\sum_{n\in\mathbb{Z}}c_ne^{2\pi int}=\lim_{T\to\infty}\sum_{|n|\le T}c_ne^{2\pi int},
\]

则当$0<|x|<2\pi$时系数$c_n$满足：

\[
c_n=\int_0^1e^{t(x-2\pi in)}\mathrm dt={e^x-1\over x}{x\over x-2\pi in}.
\]

对最右侧进行级数展开，便知当$n\ne0$时：

\[
\begin{aligned}
  {xc_n\over e^x-1}=-{x\over2\pi in}{1\over1-(x/2\pi in)}=-\sum_{m\ge1}{x^m\over(2\pi in)^m}.
\end{aligned}
\]

回代即得：

\[
{e^{tx}\over e^x-1}
=1-\sum_{n\in\mathbb{Z}\setminus\{0\}}\sum_{m\ge1}{x^m\over(2\pi in)^m}
=1-\sum_{m\ge1}x^m\left( \sum_{n\in\mathbb{Z}\setminus\{0\}}{1\over(2\pi in)^m} \right).
\]

对比系数就得结论。
:::

将$t=0$代入到 @prop-bpf 中，便得[[Riemann $\zeta$ 函数]]的偶数值计算公式：

::: theorem [Euler] {@th-bzeta}
当$k\in\mathbb{Z}^+$时：
\[
\zeta(2k)=(-1)^{k+1}{2(2\pi)^{2k}B_{2k}\over(2k)!}.
\]
:::

利用性质$B_2=1/6$，便得**Basel 问题**的解：

\[
\zeta(2)={\pi^2\over6}
\]

由于当$k\to\infty$时

\[
\zeta(2k)=1+O\left(1\over 4^k\right),
\]

所以我们也可以用 @th-bzeta 得到 Bernoulli 数的渐近公式：

::: theorem
当正整数$k\to\infty$时，
\[
B_{2k}=(-1)^{k+1}{2(2k)!\over(2\pi)^{2k}}\left\{ 1+O\left( 1\over4^k \right) \right\}.
\]
:::

再结合[[Stirling 公式]]，就有：

::: theorem
当正整数$k\to\infty$时，
\[
B_{2k}=(-1)^{k+1}{4k^{2k+\frac12}\sqrt\pi\over(\pi e)^{2k}}\left\{ 1+O\left(\frac1k\right) \right\}.
\]
:::
