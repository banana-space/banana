---
title: Steinberg 自同态
categories: [代数群理论, 有限群论]
navboxes: [群表示论, 代数群理论]
---

<problems>
- “分类”一节需要扩充。
</problems>

::: convention
在本文中，

- $p$ 是[[素数]]，$\mathbb{F}$ 是 $\mathbb{F}_p$
  的[[代数闭包]]。

:::

**Steinberg 自同态**是[[有限域]][[代数闭包]]上[[连通概形|连通]][[代数群]]的一种[[自同态]]，
是[[Frobenius 态射|几何 Frobenius 态射]]的推广。它是 [[Lie 型有限群]]理论中的基本概念，
因为 Lie 型有限群就是由约化群的 Steinberg 自同态取不动点得到的。

## 定义

::: definition [[[Frobenius 态射|几何 Frobenius 自同态]]]
设 $X$ 是 $\mathbb{F}$ 上[[有限型态射|有限型]][[概形]]。则
$X$ 必然定义在某个[[有限域]] $\mathbb{F}_q$ 上。$X$
的一个**几何 Frobenius 自同态**指其某个下降
$X_0/\mathbb{F}_q$ 的 $q$ 次方 Frobenius
自同态，基变换回 $X/\mathbb{F}$。
:::

::: definition [Steinberg 自同态]
设 $G$ 是 $\mathbb{F}$ 上代数群，$F$ 是 $G$
的自同态。如 $F$ 的某个幂次是某个几何 Frobenius
自同态，则称 $F$ 为 **Steinberg 自同态**。
:::

## 性质

最重要的性质是以下 Lang 定理及其推论，证明参见条目
[[Lang 定理]]。

::: theorem [Lang, Steinberg] {@lang}
设 $G$ 是 $\mathbb{F}$ 上[[光滑概形|光滑]][[连通概形|连通]][[代数群]]，
$F$ 是 $G$ 的 Steinberg 自同态，以 $G^F$ 记 $G(\mathbb{F})$
中 $F$-不动点构成的子群。考虑 **Lang 映射**
$\operatorname{Lang}_F\colon G\to G$，定义为
$\operatorname{Lang}_F(g)=F(g)g^{-1}$。则
$\operatorname{Lang}_F$ 是[[满射 (代数几何)|满射]]，
且诱导同构 $G/G^F\cong G$，换言之 $\operatorname{Lang}_F$
把 $G$ 表示成自身的 $G^F$-主丛。
:::

::: corollary {@fix}
记号与条件承 @lang，并设 $G$ 是[[仿射代数群]]。
则存在被 $F$ 保持的[[极大环面]]与 [[Borel 子群]]
$T\subseteq B\subseteq G$。
:::

::: remark
另一个 Lang 映射 $g\mapsto g^{-1}F(g)$ 也有类似的定理，
它诱导同构 $G^F\backslash G\cong G$。
:::

下面是个有趣的结论。

::: theorem [Steinberg 双歧性]
设 $G$ 是 $\mathbb{F}$ 上的单代数群，$F$
是其非平凡自同态。则以下两件事中恰有一个发生：

1. $F$ 是自同构，且有无穷多个不动点。

2. $F$ 是 Steinberg 自同态，只有有限个不动点。

:::

## 分类

设 $G$ 是 $\mathbb{F}$ 上[[约化群]]（特别地它连通），
$F$ 是其 Steinberg 自同态。

```terms
Steinberg 自同态:
  en: Steinberg endomorphism
```
