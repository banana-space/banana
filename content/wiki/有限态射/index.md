---
title: 有限态射
categories: [概形论]
navboxes: [态射性质]
---

代数几何中，**有限态射**指局部上是[[有限同态]]的概形态射。

## 定义

::: definition
称概形态射 $f\colon X\rightarrow Y$ **有限**，
指的是存在 $Y$ 的仿射开覆盖 $Y=\bigcup_{i}V_{i}$，
$V_{i}=\operatorname{Spec} B_{i}$，
满足 $f^{-1}(V_{i})=\operatorname{Spec} A_{i}$，
其中 $A_{i}$ 是[[有限同态|有限]] $B_i$-代数。
:::

## 性质

::: proposition
$f\colon X\rightarrow Y$ 是有限态射，
当且仅当对 $Y$ 的任意仿射开子集 $V=\operatorname{Spec} B$，都有
$f^{-1}(V)=\operatorname{Spec} A$，其中 $A$
是[[有限同态|有限]] $B$-代数。
:::

::: proposition
- 闭浸入是有限态射。

- 有限态射的复合还是有限态射。

- 有限态射的基变换还是有限态射。

:::

以下刻画来自[[泛闭态射]]的性质。

::: theorem
$f\colon X\to Y$ 有限，
当且仅当 $f$ [[仿射态射|仿射]]、[[紧合态射|紧合]]。
:::

以下刻画来自 [[Zariski 主定理]]。

::: theorem
$f\colon X\rightarrow Y$ 有限，
当且仅当 $f$ [[拟有限态射|拟有限]]、[[紧合态射|紧合]]。
:::

## 例子

- $\operatorname{Spec} k[x,t]/(x^{n}-t)\rightarrow \operatorname{Spec}k[t]$ 是有限态射。

- $\operatorname{Spec}k[y,y^{-1}]\rightarrow \operatorname{Spec}k[y]$
  是[[拟有限态射]]但不有限。一般地，开浸入不会有限，除非它也是闭浸入。
  这是因为由上一节所述，有限态射紧合，特别地总是闭映射。

- $\mathbb{A}^{n}_{S}\rightarrow S$ 和 $\mathbb{P}^{n}_{S}
  \rightarrow S$ 都不是有限态射（$n\geq 1$）。

```terms
有限态射:
  en: finite morphism
  de: endlicher Morphismus
  fr: morphisme fini
  grc: πεπερασμένος μορφισμός
  la: morphismus finitus
```
