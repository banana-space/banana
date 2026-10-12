---
title: '$\mathrm{B}$ 函数'
aliases: [Beta 函数]
categories: [复分析, 特殊函数]
notices:
  - name: 问题
    items:
      - '“定义”一节中的积分似乎只在 $\operatorname{Re} a > 0$、$\operatorname{Re} b > 0$ 时收敛，正文没有说明其他 $a, b$ 处的定义（解析延拓）。'
---

**$\mathrm{B}$ 函数**是[[组合数]]的推广，
是关于两个复变量的[[亚纯函数]]。

## 定义

::: definition {@B}
**$\mathrm{B}$ 函数**定义为
\[
\mathrm{B}(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}\mathrm dt,
\]
其中 $a,b\in\mathbb{C}$。
:::

## 性质

::: proposition
\[
\mathrm{B}(a,b)=2\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\mathrm d\theta.
\]
:::

::: proof
在 @B 中作换元 $t=\sin^2\theta$ 即可。
:::

::: proposition
\[
\mathrm{B}(a,b)={\Gamma(a)\Gamma(b)\over\Gamma(a+b)}.
\]
:::

::: proof
对$\Gamma$函数的积分公式换元，可知：
\[
\Gamma(z)=2\int_0^\infty x^{2z-1}e^{-x^2}\mathrm dx
\]
因此有：
\[
\Gamma(a)\Gamma(b)=4\iint_{x,y\ge0}x^{2a-1}y^{2b-1}e^{-(x^2+y^2)}\mathrm dx\mathrm dy
\]
现在置$x=r\cos\theta,y=r\sin\theta$，则有：
\[
\begin{aligned}
  \Gamma(a)\Gamma(b)
  &=4\iint_{\substack{r\ge0\\0\le\theta\le\frac\pi2}}r^{2(a+b)-1}e^{-r^2}\mathrm dr\mathrm d\theta \\
  &=\underbrace{2\int_0^\infty r^{2(a+b)-1}e^{-r^2}\mathrm dr}_{\Gamma(a+b)}\times\underbrace{2\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\mathrm d\theta}_{\mathrm{B}(a,b)} \\
\end{aligned}
\]
移项即可得到原始结论。
:::

```terms
Beta 函数:
  en: Beta function
  de: Beta-Funktion
  fr: fonction bêta
  grc: βῆτα συνάρτησις
  la: functio beta
```
