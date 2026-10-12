---
title: 分圆多项式
categories: [域论]
navboxes: [域论]
---

在[[代数学]]与[[数论]]中，**分圆多项式**是以本原单位根
为根的多项式。

设 $n$ 是正整数，$\zeta_n=e^{2\pi\mathrm{i}/n}$ 是一个[[本原单位根|本原 $n$ 次单位根]]。
第 $n$ 个分圆多项式记作 $\Phi_n(x)$。

## 定义

::: definition [分圆多项式]
第 $n$ 个**分圆多项式**定义为
\[
\Phi_n(x)
=
\prod_{\substack{1\leq a\leq n\\\gcd(a,n)=1}}
(x-\zeta_n^a).
\]
换言之，$\Phi_n(x)$ 的根恰好是所有本原 $n$ 次单位根。
:::

::: definition [分圆多项式：抽象定义]
设 $n$ 是正整数，$\zeta_n$ 是一个本原 $n$ 次单位根。
称 $\zeta_n$ 在 $\mathbb{Q}$ 上的[[极小多项式]]为第 $n$ 个
**分圆多项式**，记作
\[
\Phi_n(x)
=
m_{\zeta_n,\mathbb{Q}}(x).
\]
换言之，$\Phi_n(x)$ 是唯一满足
\[
\Phi_n(\zeta_n)=0
\]
的首一不可约有理系数多项式。
:::

## 性质

::: proposition
分圆多项式 $\Phi_n(x)$ 是首一的整数系数多项式，并且在
$\mathbb{Q}[x]$ 中不可约。
:::

::: proposition [抽象定义与具体定义的等价性]
本原 $n$ 次单位根 $\zeta_n$ 在 $\mathbb{Q}$ 上的极小多项式是
\[
m_{\zeta_n,\mathbb{Q}}(x)=\Phi_n(x).
\]
:::

::: proof
记
\[
P_n(x)
=
\prod_{\substack{1\leq a\leq n\\\gcd(a,n)=1}}
(x-\zeta_n^a).
\]
分圆多项式不可约定理说明
\[
P_n(x)\in\mathbb{Z}[x]
\]
并且 $P_n(x)$ 在 $\mathbb{Q}[x]$ 中不可约。

由于 $\zeta_n$ 本身是 $P_n(x)$ 的一个根，极小多项式的整除
性质给出
\[
m_{\zeta_n,\mathbb{Q}}(x)\mid P_n(x).
\]
但 $P_n(x)$ 是首一不可约多项式，所以只能有
\[
m_{\zeta_n,\mathbb{Q}}(x)=P_n(x).
\]
:::

因此
\[
\deg\Phi_n=\varphi(n),
\]
其中 $\varphi$ 是 [[Euler 函数]]。

::: proposition
对任意正整数 $n$，有
\[
x^n-1=\prod_{d\mid n}\Phi_d(x).
\]
这个等式也可以用于递归计算分圆多项式。
:::

## 例子

最初几个分圆多项式为
\[
\begin{aligned}
\Phi_1(x)&=x-1,\\
\Phi_2(x)&=x+1,\\
\Phi_3(x)&=x^2+x+1,\\
\Phi_4(x)&=x^2+1,\\
\Phi_5(x)&=x^4+x^3+x^2+x+1,\\
\Phi_6(x)&=x^2-x+1.
\end{aligned}
\]

```terms
分圆多项式:
  en: cyclotomic polynomial
  de: Kreisteilungspolynom
  fr: polynôme cyclotomique
```
