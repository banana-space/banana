---
title: 有限型态射
aliases: [局部有限型态射, 有限型概形]
categories: [概形论]
navboxes: [态射性质]
---

[[代数几何]]中，
**有限型态射**指局部上是[[有限型环同态]]的[[拟紧态射]]。
它可视作一族被基概形参数化的代数簇。

## 定义

::: definition
称概形态射 $f\colon X\rightarrow Y$ 为**局部有限型**，
指的是存在 $Y$ 的仿射开覆盖 $Y=\bigcup_i V_i$，
$V_i=\operatorname{Spec} B_i$，满足每个 $f^{-1}(V_i)$
有仿射开覆盖 $f^{-1}(V_i)=\bigcup_jU_{ij}$，
$U_{ij}=\operatorname{Spec} A_{ij}$，
$A_{ij}$ 是有限生成 $B_{i}$-代数。
称 $f$ 为**有限型**，指其局部有限型且[[拟紧态射|拟紧]]。
:::

## 性质

::: proposition
$f\colon X\rightarrow Y$ 局部有限型，当且仅当对 $Y$
的任一仿射开子集 $V=\operatorname{Spec}B$ 和 $f^{-1}(V)$
的任一仿射开子集 $U=\operatorname{Spec}A$，都有 $A$
是有限生成 $B$-代数。
:::

::: proposition
$X$ 是域 $k$ 上局部有限型概形，则 $X$ 闭点稠密。
一般地，[[Jacobson 概形]]上局部有限型的概形 Jacobson。
:::

::: proposition
- [[闭浸入]]、[[拟紧态射|拟紧]][[开浸入]]都是有限型态射。

- [[浸入]]是局部有限型态射。

- （局部）有限型态射的复合还是（局部）有限型态射。

- （局部）有限型态射的[[基变换]]还是（局部）有限型态射。

:::

## 例子

- 对任意概形 $S$，
  [[仿射空间]] $\mathbb{A}_{S}^{n} \to S$ 是有限型态射。

- 对任意概形 $S$，
  [[射影空间]] $\mathbb{P}_{S}^{n} \to S$ 是有限型态射。

- 任何经典意义下的[[代数簇]]到它的基域是有限型态射。

```terms
有限型态射:
  en: morphism of finite type
  de: Morphismus endlichen Typs
  fr: morphisme de type fini
  grc: μορφισμὸς πεπερασμένου τύπου
  la: morphismus typi finiti
局部有限型态射:
  en: morphism locally of finite type
  de: Morphismus lokal endlichen Typs
  fr: morphisme localement de type fini
  grc: μορφισμὸς τοπικῶς πεπερασμένου τύπου
  la: morphismus localiter typi finiti
```
