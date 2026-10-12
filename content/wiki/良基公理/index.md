---
title: 良基公理
aliases: [正则公理]
categories: [集合论]
---

**良基公理**，又称**正则公理**，是
[[Zermelo–Fraenkel 集合论]]中的一条公理。顾名思义，
它说的是[[属于]]关系是[[良基]]的，即每个集族中都有一个集合，
使得族中这些集合都不是其元素。在有[[选择公理]]时，
它也相当于说不存在无限长的属于降链
$$
x_1\ni x_2\ni\cdots
$$

它排除了一个集合属于自身和一些集合循环属于等不符合直观的情形，
将 ZF 集合论讨论的对象限制在从[[空集]]出发逐级构造出的集合，即
[[von Neumann 宇宙]]之中。

## 陈述

良基公理的形式陈述是
$$
\forall x(x\ne\varnothing\rightarrow\exists y(y\in x\wedge
\forall z(z\in x\rightarrow z\notin y))).
$$

## 等价形式

以下命题将良基公理表达为 [[Peano 公理]]中[[数学归纳法]]的形式，
常将其称为集合归纳法。

::: proposition
良基公理等价于如下[[公理模式]]：对每个公式 $P(x)$，
只要变量 $y$ 在其中不出现，就有
$$
\forall x((\forall y(y\in x\rightarrow P(y)))
\rightarrow P(x))\rightarrow\forall xP(x)
$$
的[[全称闭包]]成立。
:::

::: proof
如集合归纳法成立，取其逆否，知如果 $P(x)$ 不总成立，
则存在一个 $x$，满足 $P(x)$ 不成立，但对任意 $y\in x$
都有 $P(y)$ 成立。现对任意非空集合 $a$，取 $P(x)$
为 $x\notin a$，上一句话便给出一个 $x$，满足 $x\in a$
但对任意 $y\in x$ 都有 $y\notin a$。这正是良基公理。

反过来如良基公理成立，设 $P(x)$ 满足集合归纳法的前件。
现如存在 $x$ 使得 $P(x)$ 不成立，考虑其[[传递集合|传递闭包]]
$\operatorname{tr.cl}(x)$，并作
$z=\{y\in\operatorname{tr.cl}(x)\mid\neg P(y)\}$。
由条件 $\neg P(x)\rightarrow\exists y(y\in x\wedge\neg P(y))$，
所以 $z\ne\varnothing$。用良基公理取出 $u\in z$
使得对任意 $v\in u$ 都有 $v\notin z$。由于
$u\in\operatorname{tr.cl}(x)$ 而 $\operatorname{tr.cl}(x)$
是[[传递集合]]，$v\in u$ 推出 $v\in\operatorname{tr.cl}(x)$；
这样 $v\notin z$ 只可能因为 $P(v)$ 成立。这样，对任意 $v\in u$
都有 $P(v)$ 成立，而 $P(u)$ 却不成立，与条件矛盾。
所以对任意 $x$ 都有 $P(x)$，即得集合归纳法成立。
:::

::: remark
如使用构造主义逻辑，即不假设[[排中律]]，
则集合归纳会严格弱于良基公理。此时良基公理会推出排中律，
而集合归纳推不出来。
这也导致在[[构造主义集合论]]中需采用集合归纳公理模式代替良基公理。
:::

## 推论

- 对一元集使用，即知对任意 $x$ 都有 $x\notin x$。

- 对二元集使用，知不可能有 $x,y$ 满足 $x\in y$，$y\in x$。

- 它可以推出 [[von Neumann 宇宙]]穷尽所有集合，
  详见其主条目。

## 与其它公理的关系

从 ZF 去掉良基公理出发作 [[von Neumann 宇宙]]，
不难发现在其中良基公理成立。由此可知良基公理与 ZF 的其它公理相对相容。

良基公理之否定也与其它公理相对相容，但证明就困难许多。

```terms
良基公理:
  en: axiom of foundation
  de: Fundierungsaxiom
  fr: axiome de fondation
  la: axioma fundationis
正则公理:
  en: axiom of regularity
  de: Regularitätsaxiom
  fr: axiome de régularité
  la: axioma regularitatis
```
