---
title: Chebyshev 函数
aliases: [Tchebyshev 函数]
categories: [特殊函数]
---

::: convention
在本文中，

- 下标含 $p$ 的求和与求积中，$p$ 只取[[素数]]。
- $s$表示以$\sigma$为横坐标、$t$为纵坐标的复数。
- $\rho$表示以$\beta$为横坐标、$\gamma$为纵坐标的$\zeta(s)$非平凡零点。

:::

**Chebyshev 函数** 指数论函数 $\vartheta$ 与 $\psi$。它们常被用于研究[[素数]]的分布。

## 定义

::: definition [Chebyshev $\vartheta$函数]
第一类Chebyshev函数指的是：
\[
\vartheta(x):=\sum_{p\le x}\log p.
\]
:::

::: definition [Chebyshev $\psi$函数]
第二类Chebyshev函数指的是：
\[
\psi(x):=\sum_{k\in\mathbb N}\sum_{p^k\le x}\log p=\sum_{n\le x}\Lambda(n)=\sum_{p\le x}\lfloor\log_p x\rfloor\log p.
\]
其中的$\Lambda$是[[von Mangoldt 函数]]。
:::

## 性质

::: proposition
对正整数$n$，有
\[
\log\operatorname{lcm}(1,2,\cdots,n)=\psi(n).
\]
:::

另外关于两个Chebyshev函数的联系，依照定义立刻写出：

::: proposition [二者的联系]
关于两个Chebyshev函数，我们有
\[
\psi(x)=\sum_{n=1}^\infty\vartheta\left(x^{\frac 1n}\right).
\]
注意到这个求和只包含有限项，当$n>\log_2x$时$\vartheta(x^{1/n})=0$。
:::

根据[[素数定理]]，我们有：

::: proposition [渐近表现]
\[
\lim_{x\to+\infty}\frac{\vartheta(x)}x=\lim_{x\to+\infty}\frac{\psi(x)}{x}=1.
\]
:::

如果[[Riemann 假设]]成立，那么误差项可以被很好地控制，对一切$\varepsilon>0$，$x\to+\infty$时皆有
\[
\begin{aligned}
  |\vartheta(x)-x|=O\left(x^{\frac12+\varepsilon}\right),\\
  |\psi(x)-x|=O\left(x^{\frac12+\varepsilon}\right).
\end{aligned}
\]

然而另一方面，Erhard Schmidt在1903年指出：

\[
\psi(x)-x=\Omega_\pm(\sqrt x)
\]

换言之，存在正常数 $K$，使得存在无穷多正整数$x$使
\[
\psi(x)-x<-K\sqrt x.
\]
同时也存在无穷多正整数$y$使
\[
\psi(y)-y>K\sqrt y.
\]
这说明误差项不能优于$O(\sqrt x)$级别。后来Hardy和Littlewood在1916年的论文[@hl1916]中
将$\Omega_\pm(\sqrt x)$改进为$\Omega_\pm(\sqrt x\log\log\log x)$。
这几个结论的证明均可参考[@mv2007, §15]。

## 与 Riemann zeta 函数零点的关系

<see>[[Riemann zeta 函数]]、[[Perron 公式]]</see>

利用 Perron 公式，可知当$\kappa=1+(\log x)^{-1},2\le T\le x$时：

\[
\psi(x)={-1\over2\pi i}\int_{\kappa-iT}^{\kappa+iT}{x^s\over s}{\zeta'\over\zeta}(s)\mathrm ds+O\left( x\log^2x\over T \right)
\]

根据[[Riemann zeta 函数|这个结论]]，我们总能找到$T'\in[T-1,T+1]$使得：

\[
{\zeta'\over\zeta}(\sigma+iT')=O(\log^2T)
\]

对一切$-1\le\sigma\le2$成立，所以有：

\[
\int_{\kappa-iT'}^{-1-iT'}+\int_{-1+iT'}^{\kappa+iT'}\ll{x\log^2T\over T}\ll{x\log^2x\over T}
\]
\[
\int_{-1-iT'}^{-1+iT'}\ll x^{-1}\log^3T\ll x^{-1}\log^3x
\]

因此根据留数定理可知：

\[
\psi(x)=x-\sum_{|\gamma|<T'}{x^\rho\over\rho}-{\zeta'\over\zeta}(0)+O\left(x\log^2x\over T\right)
\]

再做简化，便得：

::: theorem [$\psi(x)$的零点展开式]
当$2\le T\le x$时总有：
\[
\psi(x)=x-\sum_{|\gamma|\le T}{x^\rho\over\rho}+O\left( x\log^2x\over T \right)
\]
:::

## 参考文献

```bibliography
hl1916:
  type: article
  author: ["Hardy, G. H.", "Littlewood, J. E."]
  year: 1916
  title: Contributions to the theory of the Riemann zeta-function and the theory of the distribution of primes
  journaltitle: Acta Mathematica
  volume: 41
  pages: 119–196
  doi: 10.1007/BF02422942
mv2007:
  type: book
  author: ["Montgomery, H. L.", "Vaughan, R. C."]
  year: 2007
  title: "Multiplicative Number Theory I: Classical Theory"
  publisher: Cambridge University Press
```
