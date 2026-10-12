---
title: Mertens 定理
categories: [解析数论]
---

在[[数论]]中，**Mertens 定理**一般指下面三个有关[[素数]]的渐近公式：

```math {@eqnm1}
\sum_{p\le x}{\log p\over p}=\log x+O(1)
```

```math {@eqnm2}
\sum_{p\le x}\frac1p=\log\log x+B_1+O\left( 1\over\log x \right)
```

```math {@eqnm3}
\prod_{p\le x}\left(1-\frac1p\right)={e^{-\gamma}\over\log x}+O\left( 1\over\log^2x \right)
```

其中 $B_1$ 被称为 **Meissel–Mertens 常数**。

虽然 Mertens 定理中的渐近公式都与素数有关，但是它们可以不依赖[[素数定理]]而推导出来。

## Mertens 第一定理

若设 $T(x)=\log\lfloor x\rfloor!$，则由 Stirling 公式可知，当 $x\ge2$ 时：

```math {@eqnstirling}
T(x)=x\log x-x+O(\log x)
```

另一方面，结合 [[von Mangoldt 函数]]的性质可知：

```math
\begin{aligned}
    T(x)
    &=\sum_{kd\le x}\Lambda(d)=\sum_{n\le x}\Lambda(n)\left\lfloor\frac xn\right\rfloor \\
    &=\sum_{n\le x}\Lambda(n)\frac xn+O\left\{ \sum_{n\le x}\Lambda(n) \right\} \\
    &=x\sum_{n\le x}{\Lambda(n)\over n}+O(x)
\end{aligned}
```

其中最后一个等号是由于 $\psi(x)=O(x)$，见 [[Chebyshev 不等式 (数论)|Chebyshev 不等式]]。
将此式与 @eqnstirling 联立，即得：

```math {@eqnm0}
S_1(x)=\sum_{n\le x}{\Lambda(n)\over n}=\log x+O(1)
```

对于左侧，利用 von Mangoldt 函数的性质我们知道：

```math
\begin{aligned}
    \sum_{n\le x}{\Lambda(n)\over n}-\sum_{p\le x}{\log p\over p}
    &\le\sum_{p\le x}\log p\sum_{k\ge2}{1\over p^k} \\
    &\le\sum_p{\log p\over p(p-1)}=O(1)
\end{aligned}
```

将这个结果与 @eqnm0 结合便得 @eqnm1。

## Mertens 第二定理

设 $R(x)=S_1(x)-\log x$，则根据 [[Riemann–Stieltjes 积分]]可知：

```math
\begin{aligned}
    S_2(x)
    &=\sum_{n\le x}{\Lambda(n)\over n\log n}=\int_{2^-}^x{\mathrm dS_1(u)\over\log u} \\
    &=\int_2^x{\mathrm du\over u\log u}+\int_{2^-}^x{\mathrm dR(u)\over\log u} \\
    &=\log\log x-\log\log2+\left.{R(u)\over\log u}\right|_{2^-}^x-\int_2^xR(u)\mathrm d\left( 1\over\log u \right) \\
\end{aligned}
```

因为 @eqnm0 意味着 $R(x)=O(1)$，所以我们就可以改写最后的积分，得到：

```math {@eqnm02}
S_2(x)=\log\log x+c+O\left( 1\over\log x \right)
```

其中常数 $c$ 满足：

\[
c=1-\log\log2+\int_2^\infty{R(u)\over u(\log u)^2}\mathrm du
\]

最后再将 $n=p^k$（$k\ge2$）的情况从和式中分离出去，我们就能得到：

\[
\sum_{p\le x}\frac1p=\log\log x+B_1+O\left(1\over\log x\right)
\]

其中

```math {@eqnb10}
B_1=c-\sum_p\sum_{k\ge2}{1\over kp^k}=c+\sum_p\left[\frac1p+\log\left(1-\frac1p\right)\right]
```

虽然上述的推导中仅仅说明了 $c$ 的存在性，但事实上$c$恰好也是一个熟知的常数。

### Meissel–Mertens 常数的解析表达式

利用[[Riemann $\zeta$ 函数]]的性质，我们知道 $\delta\to0^+$ 时：

```math {@eqnzt}
\zeta(1+\delta)\sim\delta^{-1}\sim{1\over1-e^{-\delta}}
```

利用 Riemann–Stieltjes 积分，我们知道：

```math
\begin{aligned}
    \log\zeta(1+\delta)
    &=\sum_{n\ge2}n^{-\delta}{\Lambda(n)\over n\log n}=\int_1^\infty x^{-\delta}\mathrm dS_2(x) \\
    &=\int_0^\infty e^{-\delta t}\mathrm dS_2(e^t)=\delta\int_0^\infty S_2(e^t)e^{-\delta t}\mathrm dt
\end{aligned}
```

另一方面，当

```math {@eqnh}
\sum_{n\le x}\frac1n=\log x+\gamma+O\left(\frac1x\right)
```

时，记左侧为 $H(x)$，运用 Riemann–Stieltjes 积分可知：

\[
\log{1\over1-e^{-\delta}}=\sum_{n\ge1}{e^{-\delta n}\over n}=\delta\int_0^\infty H(t)e^{-\delta t}\mathrm dt
\]

两式相减，便有：

\[
\Delta=\log\zeta(1+\delta)-\log{1\over1-e^{-\delta}}=\delta\int_0^\infty(S_2(e^t)-H(t))e^{-\delta t}\mathrm dt
\]

现在代入 @eqnm02 和 @eqnh，可知当 $\xi>0$ 时：

```math
\begin{aligned}
    \Delta
    &=\delta\int_0^\infty[(\log\log(e^t)+c)-(\log t+\gamma)]e^{-\delta t}\mathrm dt \\
    &+\delta\int_0^\infty O\left\{\min\left( 1,\frac1t \right)\right\}e^{-\delta t}\mathrm dt \\
    &=c-\gamma+O\left(\delta\xi\right)+O\left( \delta\int_\xi^\infty{e^{-\delta t}\over t}\mathrm dt \right)
\end{aligned}
```

通过分部积分法，可知：

\[
\int_\xi^\infty{e^{-\delta t}\over t}\mathrm dt
={e^{-\delta\xi}\over\delta\xi}-\int_\xi^\infty{e^{-\delta t}\over\delta t^2}\mathrm dt=O\left(1\over\delta\xi\right)
\]

因此取 $\xi=\delta^{-1/2}$ 可知：

\[
\Delta=c-\gamma+O(\delta^{1/2})
\]

再根据 @eqnzt，我们知道 $\delta\to0^+$ 时 $\Delta\to0$，所以 $c=\gamma$，
将此结果代入回 @eqnb10 便有：

```math {@eqnb1}
B_1=\gamma+\sum_p\left[ \frac1p+\log\left(1-\frac1p\right) \right]
```

## Mertens 第三定理

将 @eqnb1 代入到 @eqnm2 中，可知：

\[
\sum_{p\le x}\log\left(1-\frac1p\right)=-\log\log x-\gamma+O\left(1\over\log x\right)
\]

然后对两侧取指数，便得 @eqnm3。

## 应用

利用 @eqnm1，我们可以证明下面这个强度仅次于素数定理的初等结论：

::: theorem [Chebyshev]
定义：
\[
\ell=\liminf_{x\to\infty}{\vartheta(x)\over x},
\quad
L=\limsup_{x\to\infty}{\vartheta(x)\over x}
\]
则有 $\ell\le1\le L$。
:::

::: proof
利用 [[Riemann–Stieltjes 积分]]可知：

```math
\begin{aligned}
    \sum_{y<p\le x}{\log p\over p}
    &=\int_y^x{\mathrm d\vartheta(u)\over u} \\
    &={\vartheta(x)\over x}-{\vartheta(y)\over y}+\int_y^x{\vartheta(u)\over u^2}\mathrm du \\
    &=\int_y^x{\vartheta(u)\over u^2}\mathrm du+O(1)
\end{aligned}
```

结合 $\ell$ 的定义，可知对于所有 $\varepsilon>0$ 均存在 $y>0$，
使 $\vartheta(u)>(\ell-\varepsilon)u$ 对所有的 $u\ge y$ 均成立，这意味着：
\[
\sum_{y<p\le x}{\log p\over p}>(\ell-\varepsilon)\log\frac xy+O(1)
\]
此时结合 @eqnm1 即得 $\ell\le1$。运用类似方法便可得到 $L\ge1$。
:::

## 参考文献

```bibliography
hw1946:
  type: book
  label: Har46
  author: [G. H. Hardy, E. M. Wright]
  year: 1946
  title: An Introduction to the Theory of Numbers
```
