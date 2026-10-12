---
title: Dirichlet 级数
categories: [解析数论]
---

::: convention
在本文中，

- $s$ 为横坐标为 $\sigma$、纵坐标为 $t$ 的复数。类似地，我们设 $s_k=\sigma_k+it_k$。

:::

**Dirichlet 级数**形如：
\[
\sum_{n = 1}^{\infty}{a_n\over n^s}
\]

一方面，它是 [[Riemann $\zeta$ 函数]]的推广；
另一方面，与其它形式的[[生成函数]]一样，它可以反映数列的性质。

## 定义

::: definition
对复数列 $\{a_n\}$，它的 **Dirichlet 级数**为
\[
F(s)=\sum_{n\ge1}^{\infty}{a_n\over n^s}.
\]
称 $a_n$ 为 $F(s)$ 的系数。
:::

## 性质

### 基本性质

::: proposition
Dirichlet 级数的加法对应数列的加法，
Dirichlet 级数的乘法对应数列的 [[Dirichlet 卷积]]。
:::

### 收敛性

#### 收敛横坐标

::: theorem [Dirichlet 级数的半平面收敛性] {@thdc}
若 $F(s)$ 在 $s=s_0$ 处收敛，则其在 $\sigma>\sigma_0$ 时均收敛；并且当 $0\le\theta<\pi/2$ 时，
$F(s)$ 在下列扇形区域内一致收敛：
\[
S(\theta)=\{s\in\mathbb C:|\arg(s-s_0)|\le\theta\}
\]
:::

::: proof
现在设正整数 $N>M>0$ 以及函数 $A(x)=\sum_{n>x}a_nn^{-s_0}$，则利用 [[Riemann–Stieltjes 积分]]可知：

```math
\begin{aligned}
    \sum_{M<n\le N}{a_n\over n^s}
    &=-\int_M^N x^{s_0-s}\mathrm dA(x) \\
    &=A(M)M^{s_0-s}-A(N)N^{s_0-s} \\
    &+(s_0-s)\int_M^NA(x)x^{s_0-s-1}\mathrm dx
\end{aligned}
```

由 Cauchy 准则可知，对于所有的 $\varepsilon>0$ 均存在 $M=M(\varepsilon)$，
使得 $x\ge M$ 时总有 $|A(x)|<\varepsilon$，所以：

```math
\begin{aligned}
    \left| \sum_{M<n\le N}{a_n\over n^s} \right|
    &<\varepsilon\left(2+{|s-s_0|\over\sigma-\sigma_0}\right)M^{\sigma_0-\sigma} \\
    &\le\varepsilon\left(2+\sec\theta\right)M^{\sigma_0-\sigma}
\end{aligned}
```

现在再对 $F(s)$ 使用 Cauchy 准则即可得到结论。
:::

利用 @thdc，我们就可以定义 $F(s)$ 的**收敛横坐标**了：

::: corollary [Dirichlet 级数的收敛横坐标]
倘若 $F(s)$ 不在所有地方收敛或发散，则存在实数 $\sigma_c$，使得 $F(s)$ 在 $\sigma<\sigma_c$ 时发散，
而在 $\sigma>\sigma_c$ 时收敛。此时称 $\sigma_c$ 为 $F(s)$ 的收敛横坐标。
:::

#### 计算公式

利用 Riemann–Stieltjes 积分可以发现，当 $F(s)$ 在 $s=s_0$（$\sigma_0>0$）处收敛时，
设 $S(x)=\sum_{n\le x}a_nn^{-s_0}$，则有：

\[
\sum_{n\le N}a_n=\int_{1^-}^Nu^{s_0}\mathrm dS(u)=S(N)N^{s_0}-s_0\int_1^NS(u)u^{s_0-1}\mathrm du
\]

因为 $S(x)$ 收敛，所以存在 $K>0$ 使 $|S(x)|\le K$ 对一切 $x\ge1$ 都成立，所以：

\[
\left|\sum_{n\le N}a_n\right|\le K\left(1+{|s_0|\over\sigma_0}\right)N^{\sigma_0}
\]

写成极限的方式，便有：

\[
\limsup_{N\to\infty}{\log\left|\sum_{n\le N}a_n\right|\over\log N}\le\sigma_0
\]

利用这一点，我们就可以得到 $\sigma_c$ 的计算公式：

::: theorem
若 $F(s)$ 满足 $\sigma_c>0$，则有：
\[
\sigma_c=\limsup_{N\to\infty}{\log\left|\sum_{n\le N}a_n\right|\over\log N}
\]
:::

运用类似的原理，可知：

::: theorem
若 $F(s)$ 满足 $\sigma_c<0$，则有：
\[
\sigma_c=\limsup_{N\to\infty}{\log\left|\sum_{n>N}a_n\right|\over\log N}
\]
:::

## 与系数部分和的关系

::: theorem
若
\[
A(x)=\sum_{n\le x}a_n
\]
则有：
\[
\sum_{n\ge1}{a_n\over n^s}=s\int_1^\infty{A(x)\over x^{s+1}}\mathrm dx
\]
:::

::: proof
这是 [[Riemann–Stieltjes 积分]]的直接应用。
:::

```terms
Dirichlet 级数:
  en: Dirichlet series
  de: Dirichletreihe
  fr: série de Dirichlet
```
