---
title: Chevalley–Warning 定理
aliases: [Chevalley-Warning 定理]
categories: [域论]
navboxes: [域论]
---

**Chevalley–Warning 定理**是由 [[Claude Chevalley]]
与 [[Ewald Warning]] 于 1935 年证明的结果，
说的是如[[有限域]]上方程组的元数比各方程次数之和高，
则其零点个数被域的[[特征]]整除。

## 定理与证明

::: theorem
考虑[[有限域]] $\mathbb{F}_q$，设 $p$ 为其特征。
设 $f_1,\ldots,f_r\in\mathbb{F}_q[X_1,\ldots,X_n]$
是次数分别为 $d_1,\ldots,d_r$ 的多项式，满足
$$
\sum_{i=1}^rd_i<n.
$$
则 $p\mid\#Z(f)$，其中
$$
Z(f)=\{(x_1,\ldots,x_n)\in\mathbb{F}_q^n\mid
f_i(x_1,\ldots,x_n)=0,\,i=1,\ldots,r\}.
$$
:::

::: proof
由 [[Fermat 小定理]]，对 $x\in\mathbb{F}_q$，
$$
1-x^{q-1}=\begin{cases}
  1,&x=0;\\
  0,&x\ne0.
\end{cases}
$$
因此，令 $F=\prod_{i=1}^r(1-f_i^{q-1})$，就有
$$
F(x_1,\ldots,x_n)=\begin{cases}
  1,&x\in Z(f);\\
  0,&x\notin Z(f).
\end{cases}
$$
于是 $p\mid\#Z(f)$ 便等价于
$$
\sum_{(x_1,\ldots,x_n)\in\mathbb{F}_q^n}F(x_1,\ldots,x_n)=0.
$$
这是下面的引理。
:::

::: lemma
如 $0\le d<q-1$，则
$$
\sum_{x\in\mathbb{F}_q}x^d=0.
$$
如 $F\in\mathbb{F}_q[X_1,\ldots,X_n]$ 的次数小于
$n(q-1)$，则
$$
\sum_{(x_1,\ldots,x_n)\in\mathbb{F}_q^n}F(x_1,\ldots,x_n)=0.
$$
:::

::: proof
有限域的乘法群循环。取 $\mathbb{F}_q^\times$ 的生成元 $g$，
则 $g^d\ne1$。而“乘以 $g$”是 $\mathbb{F}_q$ 到自身的双射，
于是
$$
g^d\sum_{x\in\mathbb{F}_q}x^d=\sum_{x\in\mathbb{F}_q}(gx)^d
=\sum_{x\in\mathbb{F}_q}x^d;
$$
所以 $\sum_{x\in\mathbb{F}_q}x^d=0$。至于那个关于多项式的命题，
显然只需对单项式证。由[[抽屉原理]]，
小于 $n(q-1)$ 次的单项式中必有一个变元的次数小于
$q-1$，用乘法分配律将其提出去即得欲证。
:::

## 推论

如定理中的多项式常数项都是 $0$，比如它们都是正次数的齐次式，
则由于 $0\in Z(f)$，由 $p\mid\#Z(f)$ 即知方程组有非零的零点。
特别地，有限域上次数小于元数的齐次多项式有非平凡零点。
换言之，有限域都 [[$\mathrm{C}_k$ 域|$\mathrm{C}_1$]]。

```terms
Chevalley–Warning 定理:
  en: Chevalley–Warning theorem
  de: Satz von Chevalley–Warning
  fr: théorème de Chevalley–Warning
```
