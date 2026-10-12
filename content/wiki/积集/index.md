---
title: 积集
aliases: [笛卡尔积, Descartes 积]
categories: [集合论]
navboxes: [集合论]
---

在[[集合论]]中，[[集合]] $X, Y$ 的**积集**
（也称为**直积**或 **Descartes 积**）
是指集合
\[
X \times Y = \set{ ( x, y ) | x \in X, y \in Y}.
\]
更一般地，也可以定义多个集合的积集。
例如，[[Euclid 空间]] $\mathbb{R}^n$ 就可以视为 $n$ 个[[实数]]集 $\mathbb{R}$ 的积集。

从[[范畴论]]的观点看，积集是[[集合范畴]]中的[[积 (范畴论)|积]]。

## 定义

::: definition
[[集合]] $X$ 和 $Y$ 的**积集**是集合
\[
X \times Y = \set{ ( x, y ) | x \in X, y \in Y},
\]
其中 $(x, y)$ 表示[[有序对]]，可以严格定义为
\[
(x, y) = \Set{ \set{ x }, \set{ x, y } }.
\]
:::

::: definition
一[[族]]集合 $(X_i)_{i \in I}$ 的**积集**是
\[
\prod_{i \in I} X_i = \set{ (x_i)_{i \in I} | x_i \in X_i },
\]
其中 $(x_i)_{i \in I}$ 表示一族元素。
上述定义可以严格写成
\[
\prod_{i \in I} X_i = \Set{f \colon I \to \bigcup_{i \in I} X_i |
\forall i \in I , f(i) \in X_i}.
\]
:::

## 性质

- $0$ 个集合的积集是[[单点集]]。$1$ 个集合的积集是其自身。

- [[选择公理]]可以表述为：一族非空集的积集非空。

```terms
积集:
  en: product set
Descartes 积:
  en: Cartesian product
  de: Kartesisches Produkt
  fr: produit cartésien
  la: productum cartesianum
```
