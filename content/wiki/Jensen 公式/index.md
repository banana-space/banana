---
title: Jensen 公式
aliases: [Jensen 公式（复分析）]
categories: [复分析]
navboxes: [复分析]
---

<problems>
- “陈述与证明”一节证明中 $n(r)$ 的第二个等号右端似乎缺少因子 $r$（由 $\mathrm dz=2\pi\mathrm{i}re^{2\pi it}\,\mathrm dt$），下一步对 $n(r)/r$ 积分时用到的正是带因子 $r$ 的形式。
</problems>

[[复分析]]中，**Jensen 公式**将[[全纯函数]]在一个圆上的积分与其在圆中的零点联系起来。

## 陈述与证明

::: theorem [Jensen 公式] {@thj}
设 $R\in\mathbb{R}_+$。若 $f(z)$ 在一个包含 $|z|\le R$
的开集内是[[全纯函数]]，且 $f(0)\ne0$，则
\[
\int_0^1\log|f(Re^{2\pi it})|\,\mathrm dt=
\log|f(0)|+\sum_{f(\rho)=0}\log{R\over|\rho|},
\]
其中对零点求和记重数。
:::

::: proof
以下用 $n(r)$ 表示 $f(z)$ 在 $|z|\le r$中的零点个数，
则根据[[辐角原理]]可知当 $f(z)$ 在 $|z|=r$ 上无零点时

\[
n(r)={1\over2\pi i}
\int_{|z|=r}{f'\over f}(z)\,\mathrm dz
=\int_0^1
{f'\over f}(re^{2\pi it})e^{2\pi it}\,\mathrm dt.
\]

由于上式对除有限个值之外的 $(r,t)\in[0,R]\times[0,1]$
成立，所以两边积分可得

\[
\int_0^R{n(r)\over r}\,\mathrm dr
=\int_0^1\log f(Re^{2\pi it})\,\mathrm dt-\log f(0).
\]

由于左侧为实数，对右侧取实部就有

```math
\begin{aligned}
    \int_0^1\log|f(Re^{2\pi it})|\,\mathrm dt
    &=\log|f(0)|+n(R)\log R-\int_0^R\log r\,\mathrm dn(r) \\
    &=\log|f(0)|+\sum_{|\rho|\le R}\log{R\over|\rho|}.
\end{aligned}
```

:::

## 应用

仍用 $n(r)$ 表示 $f(z)$ 在 $|z|\le r$中的零点个数。
利用对数函数的性质，可以发现当 $0\le r\le R$ 时

\[
\sum_{|\rho|\le R}\log{R\over|\rho|}
\ge\sum_{|\rho|\le r}\log{R\over|\rho|}\ge n(r)\log\frac Rr.
\]

因此当我们知道 $f(z)$ 在 $|z|\le R$ 中的模长上界时，
便可以得到 $n(r)$ 的上界：

::: theorem [Jensen 不等式]
若 $f(z)$ 在一个包含 $|z|\le R$ 的开集内解析，
$f(0)\ne0$，并且在 $|z|=R$ 上 $|f(z)|\le M$，则
\[
n(r)\le{\log(M/|f(0)|)\over\log(R/r)}.
\]
:::

::: proof
\[
n(r)\log\frac Rr\le\sum_{|\rho|\le R}\log{R\over|\rho|}
=\int_0^1\log|f(Re^{2\pi it})|\,\mathrm dt-\log|f(0)|
\le\log{M\over|f(0)|}.
\]
:::

```terms
Jensen 公式:
  en: Jensen's formula
```
