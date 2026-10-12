---
title: Laplace–Stieltjes 变换
aliases: [Laplace-Stieltjes 变换]
categories: [实分析]
---

::: convention
在本文中，

- $s$表示以$\sigma$为横坐标、以$t$为纵坐标的复数
- $\mathcal V$表示全体定义在$\mathbb{R}^+$上的有界变差函数

:::

**Laplace–Stieltjes 变换**形如：

```math {@eqndef}
F(s)=\int_{0^-}^\infty e^{-su}\mathrm dA(u)
```

许多分析学中常用的构造都可以表示为 Laplace–Stieltjes 变换的形式，
例如 [[Laplace 变换]]、[[Mellin 变换]]、[[Dirichlet 级数]]等等。

## 定义

::: definition
对 $A \in \mathcal{V}$，它的 Laplace–Stieltjes 变换是
\[
F(s)=\int_{0^-}^\infty e^{-su}\mathrm dA(u)
\]
这里的积分是 [[Riemann–Stieltjes 积分]]。
:::

## 例子

Laplace–Stieltjes 与其它许多常用的构造有关系：

::: example [与 Mellin 变换的关系]
定义$A(u)=\widetilde A(e^u)$，
我们就可以将 Laplace–Stieltjes 变换化为 Mellin–Stieltjes 变换：
\[
F(s)=\int_{1^-}^\infty x^{-s}\mathrm d\widetilde A(x)
\]
:::

::: example [与 Laplace 变换的关系]
通过分部积分法，Laplace–Stieltjes 变换也可以被写成 [[Laplace 变换]]：
\[
{F(s)\over s}=\int_0^\infty e^{-su}A(u)\mathrm du
\]
:::

对这个式子的两侧做 Laplace 逆变换就能得到[[Perron 公式]]。

::: example [与广义 Dirichlet 级数的关系]
若$\{a_n\}_{n\ge1}$为某复数列、
$\{\lambda_n\}_{n\ge1}$为严格单调递增的实数列。定义
\[
B(u)=\sum_{\lambda_n\le u}a_n
\]
则其 Laplace–Stieltjes 变换恰好就是[[广义 Dirichlet 级数]]：
\[
\int_{0^-}^\infty e^{-su}\mathrm dB(u)=\sum_{n\ge1}a_ne^{-s\lambda_n}
\]
:::

因此适用于 Laplace–Stieltjes 变换的性质一样对
[[Dirichlet 级数]]和[[幂级数]]适用。

## 性质

### 收敛性

::: theorem
若$F(s)$在$s=s_0$处收敛，则其必然在区域$\sigma>\sigma_0$内收敛，在下列扇形区域
\[
S(\theta)=\{s\in\mathbb C:|\arg(s-s_0)|\le\theta\}\quad(0\le\theta<\frac\pi2)
\]
内一致收敛。
:::

::: proof
我们不妨设
\[
g(v)=\int_y^ve^{-s_0u}\mathrm dA(u)
\]
则根据柯西准则可知对于一切$\varepsilon>0$均存在$y=y(\varepsilon)$使$|g(v)|<\varepsilon$对于一切
$v\ge y$都成立。

现在通过分部积分法，便可发现对于所有$x\ge y$：
\[
\int_y^x e^{-su}\mathrm dA(u)=\int_y^x e^{(s_0-s)u}\mathrm dg(u)
\]
接下来通过分部积分可知：

```math
\begin{aligned}
    \left| \int_y^x e^{-su}\mathrm dA(u) \right|
    &<\varepsilon\left(e^{(\sigma_0-\sigma)y}+|s-s_0|\int_y^x e^{(\sigma_0-\sigma)u}\mathrm du\right) \\
    &\le\varepsilon\left( 1+{|s-s_0|\over\sigma-\sigma_0} \right)e^{(\sigma_0-\sigma)y}\le\varepsilon\left( 1+\sec\theta \right)
\end{aligned}
```

最后再对这个结论利用柯西准则，即可证明结论。
:::

```terms
Laplace–Stieltjes 变换:
  en: Laplace–Stieltjes transform
  de: Laplace–Stieltjes-Transformation
  fr: transformation de Laplace–Stieltjes
```
