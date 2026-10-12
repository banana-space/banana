---
title: '$\delta$-环'
aliases: [Delta-环, Delta 环]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

**$\delta$-环**指一个环附带一个 $\delta$ 运算，满足若干公理。
这些公理大致是在说，映射 $a\mapsto a^p+p\delta(a)$ 是个自同态。

## 定义

::: definition
$\delta$-环指有序对 $(A,\delta)$，其中 $A$ 是环，
$\delta\colon A\to A$ 是自映射，满足对任意 $a,b\in A$，

- $\delta(a+b)=\delta(a)+\delta(b)+\frac{a^p+b^p-(a+b)^p}{p}$；

- $\delta(1)=0,\,\delta(ab)=b^p\delta(a)+a^p\delta(b)+p\delta(a)\delta(b)$；

其中 $\frac{a^p+b^p-(a+b)^p}{p}$ 视为关于 $a,b$ 的整系数多项式，
而非在 $A$ 中做除法。无歧义时隐去记号中的 $\delta$。
对于 $\delta$-环 $A$，我们用 $\varphi$ 表示映射 $a\mapsto a^p+p\delta(a)$。
由公理易知 $\varphi\colon A\to A$ 是[[环同态]]。
有歧义时，常将 $\delta,\varphi$ 记为 $\delta_A,\varphi_A$。

$\delta$-环组成的范畴记作 $\delta\text{-}\mathsf{Ring}$。
:::

::: remark
此概念由 [[André Joyal]] 提出。他认为这个 $\delta$
是[[导数]]的类比，故使用这一字母。他还将其称为
$p$-导数。
:::

::: remark
$\delta$-环的公理看似复杂，其实就是在要求 $\varphi$
是环同态的等式中消项、除以 $p$ 所得。因此，对于 $p$-无挠的环
$A$，其上 $\delta$ 结构无非相当于给定 $A/p$ 的 [[Frobenius 同态]]的提升
$\varphi\colon A\to A$。下面将会看到，一般地，
$\delta$ 结构相当于给定导出商 $A/^Lp$ 的 Frobenius 同态的导出提升。
:::

## 例子

- $\mathbb{Z}$ 的自同态只有 $\operatorname{id}$，
  故其 $\delta$-结构只有 $\delta(a)=\frac{a-a^p}{p}$。
  显然这是[[始对象|初始]]的 $\delta$-环。

- 由上例知，对任意 $\delta$-环 $A$ 以及任意 $n\in\mathbb{Z}_+$，
  $\delta(p^n)=p^{n-1}-p^{np-1}\not\equiv0\pmod{p^n}$。
  由此可见，如果一个非零环中 $p^n=0$，那么它就没有 $\delta$-结构。

- 对 $\delta$-环 $A$ 以及变元 $x$，考虑 $A$ 上可数生成多项式环
  $A[x,\delta(x),\delta^2(x),\ldots]$，
  并如记号所示定义 $\delta$。这是 $A$ 上一元生成的自由 $\delta$-环，
  记作 $A\{x\}$。

- 对 $\delta$-环 $A$ 以及变元 $x$，[[形式幂级数]]环 $A[[x]]$
  上有唯一的连续 $\delta$-结构，满足 $\delta(x)=0$。
  这是 Breuil–Kisin [[棱镜]]中的构造。

- [[Witt 环]]自然地是个 $\delta$-环，
  其 $\varphi$ 正是 Witt 环的 Frobenius。

## 性质

::: proposition {@W2定义}
环 $A$ 的 $\delta$-结构相当于自然投影
$W_2(A)\to A$ 的[[截面]]。
:::

::: proof
容易验证 $\delta$-环定义中的式子等价于要求 $A$ 到 $W_2(A)$
的映射 $a\mapsto(a,\delta(a))$ 是环同态。
:::

## 推广

在导出情景下，$\delta$-环的概念更为简单：

::: definition [导出 $\delta$-环] {@导出}
导出 $\delta$-环指[[导出环]] $A$ 附带自同态
$\varphi\colon A\to A$ 以及交换图表
\[
\begin{tikzcd}
  A\ar[r,"\varphi"]\ar[d]&A\ar[d]\\
  A/p\ar[r,"\text{Frob}"']&A/p
\end{tikzcd}
\]
其中 $A/p=A\otimes_\mathbb{Z}\mathbb{F}_p$ 是导出基变换，
$\text{Frob}$ 是导出 $\mathbb{F}_p$-代数的
[[Frobenius 同态]]，纵向箭头是自然投影。

导出 $\delta$-环组成的范畴记作
$\delta\text{-}\mathsf{DRing}$。
:::

以下命题说明此定义和经典定义一致。

::: proposition
静止的导出 $\delta$-环就是 $\delta$-环。
:::

::: proof
对导出环 $A$，定义 $W_2(A)$ 为拉回
\[
\begin{tikzcd}
  W_2(A)\ar[r]\ar[d]\ar[r]&A\ar[d]\\
  A\ar[r,"\text{Frob}"']&A/p
\end{tikzcd}
\]
其中右侧箭头为自然投影，下方箭头为自然投影复合 Frobenius。
则由 [[Witt 环]]的性质，$A$ 为静止时，这就是经典的 $W_2(A)$，
左侧箭头为自然投影，上方箭头为幽灵分量。于是给一个满足 @导出 要求的 $\varphi$，就相当于给自然投影
$W_2(A)\to A$ 的一个[[截面]]。对静止的 $A$，$W_2(A)$
也是静止的，导出的截面也就相当于经典的截面，于是由 @W2定义 立得结论。
:::

下面的定理说的是经典 $\delta$-环能够一定程度上控制同伦群非负的导出
$\delta$-环。

::: theorem
$\delta\text{-}\mathsf{DRing}_{\ge0}=
  \mathsf{Ani}(\delta\text{-}\mathsf{Ring})$。
:::

```terms
'$\delta$-环':
  en: '$\delta$-ring'
  de: '$\delta$-Ring'
  fr: '$\delta$-anneau'
```
