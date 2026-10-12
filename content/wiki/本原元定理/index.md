---
title: 本原元定理
categories: [域论]
navboxes: [域论]
---

**本原元定理**是个域论定理，
说的是[[有限扩张|有限]][[可分扩张]]都是[[单扩张]]。
这个名称是因为我们把单扩张的生成元称为本原元。

## 证明

::: lemma {@可分次数}
设 $E/F$ 是[[有限扩张]]，且 $x,y\in E$ 满足 $E=F(x,y)$。
则对除有限个之外的 $a\in F$，$F(ax+y)$ 与 $E$ 在 $F$
上的[[可分次数]]相等。
:::

::: proof
取包含 $F$ 的[[代数闭域]] $\Omega$，考虑 $E$ 到 $\Omega$
的 $F$-嵌入组成的集合 $\Sigma$，依定义其基数为 $E$ 在
$F$ 上[[可分次数]]。由于 $E=F(x,y)$，不同的
$\sigma\in\Sigma$ 给出不同的有序对
$(\sigma(x),\sigma(y))\in\Omega^2$，
也就给出 $F$ 到 $\Omega$ 的不同的一次函数
$a\mapsto\sigma(ax+y)=a\sigma(x)+\sigma(y)$。
不同的一次函数在至多一个点值相同，而
$|\Sigma|=[E:F]_s<\infty$，所以对除有限个之外的 $a\in F$，
不同的 $\sigma\in\Sigma$ 给出不同的 $\sigma(ax+y)$，
所以对这些 $a$ 有 $[F(ax+y):F]_s=[E:F]_s$。
:::

::: theorem [本原元定理] {@本原元定理}
设 $E/F$ 是[[有限扩张|有限]][[可分扩张]]，则它是[[单扩张]]，
即存在 $x\in E$ 使得 $E=F(x)$。
:::

::: proof
如 $F$ 是[[有限域]]，则 $E$ 也是。此时 $E$
的[[乘法群]][[循环群|循环]]，取 $x$ 为其生成元即可。
如 $F$ 是无限域，对 $[E:F]$ 归纳。取 $E/F$ 的生成元
$x_1,\ldots,x_n\in E$ 并不妨设 $F(x_1,\ldots,x_{n-1})
\subsetneqq E$。则由归纳假设，$F(x_1,\ldots,x_{n-1})$
是单扩张，记其本原元为 $y$，然后记 $x_n=x$，则 $E=F(x,y)$。
由 @可分次数 以及 $F$ 是无限域，存在 $a\in F$
使得 $[F(ax+y):F]_s=[E:F]_s$，而 $E$ 可分，这推出
$F(ax+y)=E$，所以 $E/F$ 也是单扩张。
:::

本原元定理可推广如下。

::: theorem [单扩张的刻画]
设 $E/F$ 是[[有限扩张]]。则以下几条等价：

1. $E/F$ 是[[单扩张]]。

2. 记 $E_s$ 为 $F$ 在 $E$ 中的[[可分闭包]]，
   则 $E/E_s$ 是单扩张。换言之，$E/F$
   的纯不可分部分是单扩张。

3. $\dim_E\Omega_{E/F}\le1$，
   即[[微分模]]的秩至多是 $1$。

:::

::: proof
- 1推2 如 $E=F(x)$，显然也有 $E=E_s(x)$。

- 2推3 由于 $E_s/F$ 可分，$\Omega_{E_s/F}=0$，
  所以 $\Omega_{E/F}=\Omega_{E/E_s}$。现如 $E=E_s(x)$，
  则 $\Omega_{E/E_s}$ 由 $\mathrm{d} x$ 生成，秩至多是 $1$。

- 3推1 如 $\Omega_{E/F}=0$，则 $E/F$ 可分，
  这就是 @本原元定理。如 $\Omega_{E/F}=E$，
  则 $E/F$ 不可分，$F$ 为无限域。取 $x\in E$ 使得
  $\mathrm{d} x\ne0$，则 $\mathrm{d} x$ 生成 $\Omega_{E/F}=E$，
  所以 $\Omega_{E/F(x)}=0$，即 $E/F(x)$ 可分。
  用 @本原元定理 取其本原元 $y$，则 $E=F(x,y)$。
  由于 $\mathrm{d}(ax+y)=a\mathrm{d} x+\mathrm{d} y$ 是关于 $a\in F$，取值于
  $\Omega_{E/F}$ 的一次函数，一次项系数 $\mathrm{d} x\ne0$，
  所以对除一个以外的 $a\in F$，$\mathrm{d}(ax+y)\ne0$。
  结合 @可分次数，知对除有限个以外的 $a\in F$
  有 $[F(ax+y):F]_s=[E:F]_s$ 且 $\Omega_{E/F}=
  E\mathrm{d}(ax+y)$，即 $E/F(ax+y)$ 既纯不可分又可分，
  于是 $E=F(ax+y)$ 是单扩张。

:::

```terms
本原元定理:
  en: primitive element theorem
  fr: théorème de l'élément primitif
  de: Satz vom primitiven Element
```
