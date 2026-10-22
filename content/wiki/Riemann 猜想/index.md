---
title: Riemann 猜想
aliases: [黎曼猜想, Riemann 假设, 黎曼假设]
categories: [解析数论, 问题]
navboxes: [千禧年大奖难题]
---

::: convention
在本文中，

- $s$表示以$\sigma$为横坐标、$t$为纵坐标的复数。
- $\rho$表示以$\beta$为横坐标、$\gamma$为纵坐标的$\zeta(s)$零点。

:::

**Riemann 猜想**，又称 **Riemann 假设**，
指 [[Riemann]] 在1859年
（[@riemann59]）
所作出的猜测：

$\zeta(s)$的所有非平凡零点都落在直线$\sigma=\frac12$上。

其中$\zeta(s)$为[[Riemann $\zeta$ 函数]]。

## 等价形式

<see>[[Chebyshev 函数]]、[[Perron 公式]]</see>

Riemann 猜想之所以非常重要，是因为若其成立，将改进很多
估计，譬如[[素数定理]]：

::: theorem
若 Riemann 猜想成立，则有：
\[
\pi(x)=\int_2^x{\mathrm du\over\log u}+O(x^{1/2}\log x)
\]
:::

::: proof
利用[[Chebyshev 函数|一个结论]]，我们知道$2\le T\le x$时总有：

```math {@eqn-psi-explicit}
\psi(x)=x-\sum_{|\gamma|\le T}{x^\rho\over\rho}+O\left( x\log^2x\over T \right)
```

由于 Riemann 猜想成立时$\zeta(s)$的零点横坐标必然$\le1/2$，所以有：
\[
\left|\sum_{|\gamma|\le T}{x^\rho\over\rho}\right|\le2x^{1/2}\sum_{0<\gamma\le T}\frac1\gamma
\]
对于零点纵坐标的倒数和，根据[[Riemann–von Mangoldt 公式]]，可知：
\[
\begin{aligned}
  \sum_{0<\gamma\le T}\frac1\gamma
  &=\int_0^T{\mathrm dN(u)\over u}={N(T)\over T}+\int_0^T{N(u)\over u^2}\mathrm du \\
  &\ll\log T+\int_1^T{\log u\over u}\mathrm du\ll\log^2T
\end{aligned}
\]
将这个结论和$T=x^{1/2}$代入回 @eqn-psi-explicit，便有：
\[
\psi(x)=x+O(x^{1/2}\log^2x)
\]
这意味着：
\[
\vartheta(x)=x+O(x^{1/2}\log^2x)
\]
最后通过分部求和法我们就得到了原始结论。
:::

## 参考文献

```bibliography
riemann59:
  type: article
  label: Rie59
  author: Riemann, B.
  year: 1859
  title: Über die Anzahl der Primzahlen unter einer gegebenen Grösse
  journaltitle: Monatsberichte der Berliner Akademie
  versions:
    - relation: collected
      booktitle: Gesammelte Werke
      publisher: Teubner
      location: Leipzig
      year: 1892
edwards74:
  type: book
  label: Edw74
  author: Edwards, H. M.
  year: 1974
  title: Riemann’s zeta function
  publisher: Academic Press
mv06:
  type: book
  label: MV06
  author: ["Montgomery, H. L.", "Vaughan, R. C."]
  year: 2007
  title: "Multiplicative number theory I: Classical theory"
  publisher: Cambridge University Press
```

```terms
Riemann 猜想:
  en: Riemann hypothesis
  de: riemannsche Vermutung
  fr: hypothèse de Riemann
```
