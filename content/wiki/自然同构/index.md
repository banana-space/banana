---
title: 自然同构
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
**自然同构**（或称**自然等价**）是表达“两个[[函子]]相等”
这一想法的正确概念。
例如，对[[向量空间]] $V, W$ 而言，有[[同构]]
\[
V \oplus W \simeq W \oplus V,
\]
我们常说这是一个“自然的[[同构]]”。
这里，等式两边可以看成两个
$\mathsf{Vect} \times \mathsf{Vect} \to \mathsf{Vect}$
的函子，其中 $\mathsf{Vect}$ 是向量空间的范畴，
它们分别把对象 $(V, W)$ 映到 $V \oplus W$ 与 $W \oplus V$。
这两个函子并不严格地相等，因为 $V \oplus W$ 与 $W \oplus V$
并不是同一个向量空间，只是同构的向量空间。
但在范畴论的意义下，这两个函子本质上是相同的。
此时，我们说它们是自然同构的。

自然同构是[[函子范畴]]中的同构，也是[[范畴的范畴]]中的 [[$2$-同构]]。

## 定义

::: definition [自然同构]
设 $\mathcal{C}$、$\mathcal{D}$ 为[[范畴]]，
$F, G \colon \mathcal{C} \to \mathcal{D}$ 为[[函子]]。
则从 $F$ 到 $G$ 的**自然同构**是指一个[[自然变换]]
$\alpha \colon F \Rightarrow G$，使得

- 对任意 $x \in \mathcal{C}$，
  态射 $\alpha_x \colon F (x) \to G (x)$
  是 $\mathcal{D}$ 中的同构。

此时，也称函子 $F$、$G$ **自然同构**。
:::

## 例子

- 任何函子都自然同构于自身。

```terms
自然同构:
  en: natural isomorphism
  fr: isomorphisme naturel :m
  de: natürlicher Isomorphismus :m
自然等价:
  en: natural equivalence
  fr: équivalence naturelle :f
  de: natürliche Äquivalenz :f
```
