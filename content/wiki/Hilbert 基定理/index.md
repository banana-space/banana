---
title: Hilbert 基定理
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Hilbert 基定理**是[[交换代数]]中的基本定理，
说的是[[Noether 环]]上的[[多项式环]]也是 Noether 的。

## 定理与证明

::: theorem
如 $R$ 是 Noether 环，
则其上一元多项式环 $R[X]$ 也是 Noether 环。
:::

::: proof
设 $I$ 是 $R[X]$ 的[[理想]]，要证 $I$ 有限生成。
为此，考虑 $I$ 中各元素的首项系数构成的理想 $J\subseteq R$，即
$$
J=\{r\in R\mid\exists f\in I,\,f=rX^n+a_1X^{n-1}+\cdots+a_n\}.
$$
不难发现 $J$ 的确是 $R$ 的理想。由条件，$J$
有限生成，设 $J=(r_1,\ldots,r_m)$，
并取 $f_1,\ldots,f_m\in I$，首项系数分别为 $r_1,\ldots,r_m$。
设它们的次数分别为 $n_1,\ldots,n_m$，并取 $N=\max\{n_1,\ldots,n_m\}$。
令 $R[X]_{<N}$ 为 $R[X]$ 中次数小于 $N$ 的多项式构成的 $R$-模，
则其为有限生成模，由 $1,X,\ldots,X^{N-1}$ 生成。令
$I_{<N}=I\cap R[X]_{<N}$ 为 $I$ 中次数小于 $N$ 的多项式构成的
$R$-模，则其为 $R[X]_{<N}$ 的 $R$-子模。由 $R$ Noether，
$I_{<N}$ 也有限生成，设其生成元为 $g_1,\ldots,g_c$。
下证 $I=(f_1,\ldots,f_m,g_1,\ldots,g_c)$。

需对任一 $f\in I$ 证明 $f$ 被 $f_1,\ldots,f_m,g_1,\ldots,g_c$
生成。我们对 $f$ 的次数 $n$ 归纳。如 $n<N$，则 $f\in I_{<N}$，
它被 $g_1,\ldots,g_c$ 生成。如 $n\ge N$，
设其首项系数为 $r$，则 $r\in J$，故可写 $r=\sum_{i=1}^ms_ir_i$，
$s_i\in R$。于是
$$
\deg\left(f-\sum_{i=1}^ms_iX^{n-n_i}f_i\right)<n,
$$
故由归纳假设，$f$ 被 $f_1,\ldots,f_m,g_1,\ldots,g_c$ 生成。
:::

::: corollary
如 $R$ 是 Noether 环，则其上 $d$ 元多项式环 $R[X_1,\ldots,X_d]$
也是 Noether 环。
:::

::: proof
由于 $R[X_1,\ldots,X_d]=R[X_1]\cdots[X_d]$，
将定理用 $d$ 次即得结论。
:::

## 应用

- 在[[代数几何]]中，
  Hilbert 基定理说明了每一个[[仿射簇]]都是有限个[[超曲面]]相交。

- 利用[[完备化 (交换代数)|完备化]]的理论可以推出：

  如果 $R$ 是 Noether 环，
  那么[[形式幂级数环]] $R[[X]]$ 也是 Noether 环。

```terms
Hilbert 基定理:
  en: Hilbert's basis theorem
  de: hilbertscher Basissatz
  fr: théorème de la base de Hilbert
```
