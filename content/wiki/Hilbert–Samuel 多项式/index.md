---
title: Hilbert–Samuel 多项式
aliases: [Hilbert-Samuel 多项式]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Hilbert–Samuel 多项式**是 [[Noether 环]]上[[有限生成模]]的一个数值不变量，
可以反映模的[[Krull 维数|维数]]、[[重数]]等信息。

## 定义

::: definition {@thm:定义}
$A$ 是 [[Noether 环]]，$I$ 是其理想，满足 $A/I$ 有限长。
对有限生成 $A$-模 $M$，定义其关于 $I$ 的
**Hilbert–Samuel 函数**为 $\mathbb{N}$ 到自身的函数
$$
\chi_M^I(n)=\ell_A(M/I^nM),
$$
其中 $\ell$ 表示[[长度 (模论)|长度]]。由条件易知 $M/I^nM$ 为有限长，
故它良定义。下面将会看到，当 $n$ 充分大时，$\chi_M^I$
是关于 $n$ 的多项式，称其为 **Hilbert–Samuel 多项式**。
当 $A$ 为[[局部环]]，$I$ 为其极大理想时，常于语言和记号中省略 $I$。
:::

::: definition [重数]
$A$ 是 Noether 局部环，$M$ 为有限生成 $A$-模。
设 $d$ 为 $M$ 的 Hilbert–Samuel 多项式的次数。则
$M$ 的**重数**定义为其最高次项系数的 $d!$ 倍。
:::

## 性质

::: proposition [与 Hilbert 多项式的关系]
记号同 @thm:定义。
考虑分次环 $S=\bigoplus_{n=0}^\infty I^n/I^{n+1}$，
则 $S_0=A/I$ 为有限长，故为 [[Artin 环]]；$S_1=I/I^2$
显然是 $S_0$ 上有限生成模，因 $I$ 的生成元就是它的生成元；
$S_+$ 亦显然被 $S_1$ 生成。考虑分次 $S$-模
$N=\bigoplus_{n=0}^\infty I^nM/I^{n+1}M$，则它在 $S$
上有限生成，因 $M$ 的生成元就是它的生成元。
于是可以定义 $N$ 的 [[Hilbert 函数]] $\varphi_N(n)$。
则 Hilbert–Samuel 函数满足
$$
\chi^I_M(n)=\sum_{i=0}^{n-1}\varphi_N(i).
$$
:::

::: proof
这是因为
$$
\ell_A(M/I^nM)=\sum_{i=0}^{n-1}\ell_{A/I}(I^iM/I^{i+1}M).
$$
:::

::: corollary
当 $n$ 充分大时，$\chi_M^I$
是关于 $n$ 的多项式，次数不超过 $I$ 的生成元个数，首项为正。
:::

::: proof
设 $I$ 的生成元个数为 $d$。则由 [[Hilbert 多项式]]的性质，
$\varphi_N(n)$ 当 $n$ 充分大时是关于 $n$ 的至多 $d-1$ 次多项式。
所以 $\chi^I_M(n)=\sum_{i=0}^{n-1}\varphi_N(i)$
对应地就是关于 $n$ 的至多 $d$ 次多项式。首项为正是因为
$\chi_M^I$ 总取非负数值。
:::

下面的命题分别描述了理想和模变化时 Hilbert–Samuel 多项式的性质。
记号同 @thm:定义。

::: proposition
- 如 $J\supseteq I$，则 $\chi_M^J\le\chi_M^I$。

- 对 $c\in\mathbb{N}$，$\chi_M^{I^c}(n)=\chi_M^I(cn)$。

- 如 $\sqrt{J}\supseteq I$，则
  $\deg\chi_M^J\le\deg\chi_M^I$。

:::

::: proof
前两条是显然的。最后一条是因为环 $A$ Noether，这些理想都有限生成，
从而只要 $\sqrt{J}\supseteq I$，就有 $c\in\mathbb{Z}_+$ 满足
$J\supseteq I^c$，于是
$\deg\chi_M^J\le\deg\chi_M^{I^c}=\deg\chi_M^I$。
:::

::: proposition
- 对 $c\in\mathbb{N}$，$\chi_{I^cM}^I(n)=\chi_M^I(n+c)-\ell_A(M/I^cM)$。

- 如 $I^cM\subseteq M'\subseteq M$，则
  $\chi_M^I(n)-\ell_A(M/M')\le\chi_{M'}^I(n)\le\chi_M^I(n+c)-\ell_A(M/M')$。

- $$
  0\to M'\to M\to M''\to 0
  $$
  是 $A$-模短正合列。则存在 $c\in\mathbb{N}$，使得对 $n\ge c$，
  $$
  \chi_{M'}^I(n-c)+\chi_{M''}^I(n)\le\chi_M^I(n)\le\chi_{M'}^I(n)+\chi_{M''}^I(n).
  $$
  特别地，$\deg\chi_M^I=\max\{\deg\chi_{M'}^I,\deg\chi_{M''}^I\}$。

:::

::: proof
前两条仍是显然的，下证最后一条。注意对任意 $n\in\mathbb{N}$，
$$
0\to\frac{M'}{I^nM\cap M'}\to M/I^nM\to M''/I^nM''\to0
$$
是短正合列。用 [[Artin–Rees 引理]]取出 $c\in\mathbb{N}$，
使得对 $n\ge c$ 有 $I^nM\cap M'=I^{n-c}(I^cM\cap M')$。
于是由
$$
I^nM'\subseteq I^{n-c}(I^cM\cap M')\subseteq I^{n-c}M'
$$
即得欲证。
:::

```terms
Hilbert–Samuel 多项式:
  en: Hilbert–Samuel polynomial
Hilbert–Samuel 函数:
  en: Hilbert–Samuel function
```
