---
title: Cohen–Macaulay 环
aliases: [CM 环, '$(\mathrm{S}_k)$', Cohen–Macaulay, Cohen-Macaulay, Cohen-Macaulay 环]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Cohen–Macaulay 环**是[[交换代数]]中一类同调表现良好的
[[Noether 环]]。具体地说，一个 Noether [[局部环]] Cohen–Macaulay，
意思是其[[参数系]]都是[[正则序列]]。在环有[[对偶复形]]时，
它也等价于对偶复形集中在一个次数。

## 定义

::: definition
称 Noether 环 $A$ 是 **Cohen–Macaulay 环**，简称 **CM 环**，
指 $A$ 是自身的 [[Cohen–Macaulay 模]]。换言之，Noether
局部环 $(R,\mathfrak{m})$ 是 Cohen–Macaulay 环，
指的是 $\operatorname{depth}(R)=\dim R$；Noether 环
$A$ 是 Cohen–Macaulay 环，指的是对其每个素理想
$\mathfrak{p}$，$A_\mathfrak{p}$ 都是 Cohen–Macaulay 环。
:::

此概念也有“相对”版本。

::: definition
设环同态 $A\to B$ 满足对 $A$ 的每个素理想 $\mathfrak{p}$，纤维
$B\otimes_Ak(\mathfrak{p})$ 都是 Noether 环，例如它是有限型同态，
或者 $A,B$ 都是 Noether 环。称该同态是 **Cohen–Macaulay 同态**，
简称 **CM 同态**，指其[[平坦同态|平坦]]，且对 $A$ 的每个素理想 $\mathfrak{p}$，纤维
$B\otimes_Ak(\mathfrak{p})$ 都是 Cohen–Macaulay 环。
这里 $k(\mathfrak{p})=A_\mathfrak{p}/\mathfrak{p}A_\mathfrak{p}$
指 $\mathfrak{p}$ 的剩余域。
:::

## 性质

以下几个性质都直接来自 [[Cohen–Macaulay 模]]的性质。

::: proposition
[[Artin 环]]都是 Cohen–Macaulay 环。
:::

::: proposition
Cohen–Macaulay 局部环每个[[结合素理想]]的商环维数都等于环的维数。
特别地，它没有嵌入素理想。
:::

::: theorem [切片判别法] {@切片}
$(R,\mathfrak{m})$ 是 Noether 局部环，维数是 $d$。
设 $c\in\mathbb{N}$，$r_1,\ldots,r_c\in\mathfrak{m}$，
$\dim R/(r_1,\ldots,r_c)=d-c$。则 $R$ 是 Cohen–Macaulay 环，
当且仅当 $r_1,\ldots,r_c$ 是[[正则序列]]且
$R/(r_1,\ldots,r_c)$ 是 Cohen–Macaulay 环。
:::

::: corollary
Cohen–Macaulay 局部环都是[[均维环|均维]][[悬链环]]。
:::

::: theorem [正则序列刻画]
$(R,\mathfrak{m})$ 是 Noether 局部环。以下几条等价：

- $R$ 是 Cohen–Macaulay 环。

- $R$ 的每个参数系都是正则序列。

- $R$ 有一个参数系是正则序列。

:::

::: proposition {@局部化}
Cohen–Macaulay 局部环的局部化仍是
Cohen–Macaulay 局部环。
:::

::: proposition [纤维判别法]
设 $(R,\mathfrak{m})\to(S,\mathfrak{n})$ 是 Noether 局部环的平坦局部同态，
且 $R$ 与 $S/\mathfrak{m}S$ 都是 Cohen–Macaulay 环。
则 $S$ 也是 Cohen–Macaulay 环。
:::

::: corollary
设 $A\to B$ 是 Noether 环的 Cohen–Macaulay 同态，
$A$ 是 Cohen–Macaulay 环，则 $B$ 也是 Cohen–Macaulay 环。
:::

::: corollary
Cohen–Macaulay 环都是[[泛悬链环]]。
:::

## 例子

以下说的都是 Noether 环。

- [[正则环]]都是 Cohen–Macaulay 环。

- 零维环都是 Cohen–Macaulay 环。

- 一维整环都是 Cohen–Macaulay 环。一般地，一维[[既约环]]是 Cohen–Macaulay 环。

- 2维[[整闭整环]]是 Cohen–Macaulay 环。

- Cohen–Macaulay 环上的多项式环也是Cohen–Macaulay 环。

- 任取域 $k$。一维环 $k[x,y]/(xy)$ 虽然不整，
  但也是 Cohen–Macaulay 环，因其[[完全交环|完全交]]。

- 任取域 $k$。一维环 $k[x,y]/(x^2,xy)$ 不是
  Cohen–Macaulay 环，因其在极大理想 $(x,y)$ 处[[深度]]是 $0$。

## $(\mathrm{S}_k)$ 条件

$(\mathrm{S}_k)$ 条件大体指的是在高度 $k$ 或者说余维 $k$
Cohen–Macaulay，但不全是。它几何意义明确，有时给
Noether 环的研究带来方便。

::: definition
对 $k\in\mathbb{N}$，称 Noether 环 $A$ 满足 $(\mathrm{S}_k)$ 条件，
意思是对其任意素理想 $\mathfrak{p}$，都有
$\operatorname{depth}(A_\mathfrak{p})\geq\min\{k,\operatorname{ht}(\mathfrak{p})\}$。
:::

::: remark
容易发现，$(\text{S}_0)$ 是空条件，$(\text{S}_1)$
说的是 $A$ 没有[[嵌入素理想]]。
:::

::: remark
$(\mathrm{S}_k)$ 条件不能陈述为“对高度不超过 $k$ 的素理想局部化之后
CM”。任取域 $k$，考虑环 $R=k[[x,y,z]]/(x^2,xy,xz)$，
记极大理想 $\mathfrak{m}=(x,y,z)$，则由 $R/x=k[[y,z]]$
是整环，不难发现对非零元 $r\in R$，如 $r$ 是 $x$ 的倍数，
则 $\operatorname{Ann}(r)=\mathfrak{m}$，否则
$\operatorname{Ann}(r)\subseteq(x)$。由此可得
$\operatorname{Ass}(R)=\{\mathfrak{m},(x)\}$。
注意 $\operatorname{ht}(\mathfrak{m})=2$，
故 $R$ 对高度 $1$ 的素理想局部化所得的环都没有[[嵌入素理想]]，
于是这些局部化都 CM。但 $R$ 并不是 $(\text{S}_1)$ 环，
因为 $\operatorname{depth}(R)=0$。
:::

```terms
Cohen–Macaulay 环:
  en: Cohen–Macaulay ring
  de: Cohen–Macaulay-Ring
  fr: anneau de Cohen–Macaulay
Cohen–Macaulay 同态:
  en: Cohen–Macaulay homomorphism
  de: Cohen–Macaulay-Homomorphismus
  fr: homomorphisme de Cohen–Macaulay
```
