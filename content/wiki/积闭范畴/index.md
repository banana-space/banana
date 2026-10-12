---
title: 积闭范畴
aliases: [Descartes 闭范畴]
categories: [范畴代数]
navboxes: [范畴论]
---

在[[范畴论]]中，**积闭范畴**是一类[[范畴]]，
指存在[[幂对象]]的范畴，也就是范畴 $\mathcal{C}$，
使得对任两个对象 $x, y \in \mathcal{C}$，
其[[态射]]空间 $\mathcal{C} (x, y)$ 也能以某种方式看成 $\mathcal{C}$ 的对象，
称为幂对象。

例如，[[集合范畴]] $\mathsf{Set}$ 是积闭范畴，
因为对集合 $X, Y$ 而言，$\mathsf{Set} (X, Y)$ 自然就是一个集合。

## 定义

::: definition
**积闭范畴**是指[[范畴]] $\mathcal{C}$，满足以下条件：

- $\mathcal{C}$ 具有有限[[积 (范畴论)|积]]。

- $\mathcal{C}$ 上的[[积幺半范畴|积幺半结构]]构成[[闭幺半范畴]]。

这里，第二个条件展开来说，就是：

- 存在函子
  \[
  [-, -] \colon
  \mathcal{C}^{\mathrm{op}} \times \mathcal{C} \to \mathcal{C} ,
  \]
  使得有[[自然同构]]
  \[
  \mathcal{C} (x \times y, z) \simeq \mathcal{C} (x, [y, z]),
  \]
  其中两边视为 $\mathcal{C}^{\mathrm{op}} \times \mathcal{C}^{\mathrm{op}} \times \mathcal{C}$
  到 $\mathsf{Set}$ 的函子。

这里，对 $x, y \in \mathcal{C}$，
对象 $[x, y]$ 称为**幂对象**，也记为 $y^x$。
:::

## 例子

- [[集合范畴]] $\textsf{Set}$ 是积闭范畴，
  这里幂对象就是普通的集合间映射集。

- [[意象]]是积闭范畴（事实上它也是[[局部积闭范畴]]），
  这里幂对象是两个[[层]]的映射层。

- [[紧生成空间]]构成积闭范畴。

```terms
积闭范畴:
  en: cartesian closed category
  de: kartesische abgeschlossene Kategorie
  fr: catégorie fermée cartésienne
  la: categoria clausa cartesiana
```
