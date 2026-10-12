---
title: 幺半范畴
aliases: [张量范畴]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [范畴论]
---

在[[范畴论]]中，
**幺半范畴**（也称为**张量范畴**）
是一类[[范畴]]，其中的对象可以做[[乘法]]操作，
就像在[[幺半群]]里一样。这样的乘法也常常称为“张量积”。

例如，[[集合范畴]]中，集合的 [[Descartes 积]]、[[无交并]]都可以作为乘法，给出幺半范畴结构。
在[[向量空间]]的范畴中，
向量空间的[[张量积]]、[[直和]]也都能作为乘法，给出幺半范畴结构。

幺半范畴是[[幺半群]]的[[范畴化]]。另一方面，幺半范畴的[[胚化]]是 [[$2$-范畴]]。

## 定义

::: definition [幺半范畴]
**幺半范畴**是指一个六元组 $(\mathcal{C}, \otimes, 1, a, l, r)$，其中

- $\mathcal{C}$ 是[[范畴]]。

- $\otimes$ 是[[二元函子]]
  \[
  \begin{aligned}
    {\otimes} \colon \mathcal{C} \times \mathcal{C} & \to \mathcal{C}, \\
    (x, y) & \mapsto x \otimes y,
  \end{aligned}
  \]
  称为 **[[张量积]]**。

- $1 \in \mathcal{C}$ 是对象，称为 $\mathcal{C}$ 的**单位对象**。

- $a, l, r$ 是[[自然同构]]
  \[
  \begin{aligned}
    a_{x, y, z} \colon &&
    (x \otimes y) \otimes z & \simeq
    x \otimes (y \otimes z), \\
    l_x \colon &&
    1 \otimes x & \simeq x, \\
    r_x \colon &&
    x \otimes 1 & \simeq x,
  \end{aligned}
  \]
  分别称为**结合子**、**左单位子**、**右单位子**。

它们满足以下条件：

- （**三角形公理**）
  对任意 $x, y \in \mathcal{C}$，有[[交换图]]
  \[
  \begin{tikzcd}[column sep = {6em,between origins}]
    (x \otimes 1) \otimes y
    \ar[rr, "{a_{x, \, 1, \, y}}"] \ar[dr, "{r_x \, \otimes \, \mathbb{1}_y}"', pos = .3] &&
    x \otimes (1 \otimes y)
    \ar[dl, "{\mathbb{1}_x \, \otimes \, l_y}", pos = .3] \\
    & x \otimes y \rlap{\ .}
  \end{tikzcd}
  \]

- （**[[五边形公理]]**）
  对任意 $x, y, z, w \in \mathcal{C}$，有交换图
  \[
  \begin{tikzcd}[column sep = -4em]
    && (x \otimes y) \otimes (z \otimes w)
    \ar[drr, "{a_{x, \, y, \, z \otimes w}}", pos = .7] \\
    ((x \otimes y) \otimes z) \otimes w
    \ar[urr, "{a_{x \otimes y, \, z, \, w}}", pos = .3]
    \ar[dr, "{a_{x, \, y, \, z} \, \otimes \, \mathbb{1}_w}"', pos = 0] &&
    \hspace{11em} &&
    x \otimes (y \otimes (z \otimes w)) \\
    & (x \otimes (y \otimes z)) \otimes w
    \ar[rr, "{a_{x, \, y \otimes z, \, w}}"'] &&
    x \otimes ((y \otimes z) \otimes w) \rlap{\ .}
    \ar[ur, "{\mathbb{1}_x \, \otimes \, a_{y, \, z, \, w}}"', pos = 1]
  \end{tikzcd}
  \]

在无歧义时，六元组 $(\mathcal{C}, \otimes, 1, a, l, r)$
通常简记为 $(\mathcal{C}, \otimes)$ 或者 $\mathcal{C}$。
:::

## 例子

- 设 $\mathcal{C}$ 是任何带有有限[[积 (范畴论)|乘积]]的范畴。
  则 $(\mathcal{C}, \times)$ 是幺半范畴，称为[[积幺半范畴]]。
  其单位对象为其[[终对象]]，即空乘积。
  例如，$(\mathsf{Set}, \times)$ 和 $(\mathsf{Top}, \times)$
  都是常见的积幺半范畴。

- 设 $\mathcal{C}$ 是任何带有有限[[余积]]的范畴。
  则 $(\mathcal{C}, \sqcup)$ 是幺半范畴，称为[[余积幺半范畴]]。
  其单位对象为其[[始对象]]，即空余积。

- 设 $R$ 是[[交换环]]。则 $R$-[[模]]的范畴 $(R\text{-}\mathsf{Mod}, \otimes)$
  是幺半范畴，其中 $\otimes$ 是 $R$-模的[[张量积]]，
  其单位对象是 $R$。
  特别地，$(\mathsf{Ab}, \otimes)$ 是幺半范畴，
  其单位对象是 $\mathbb{Z}$。

- 设 $R$ 是[[交换环]]。则 $R$ 上的[[链复形]]范畴 $(\mathsf{Ch}(R), \otimes)$
  是幺半范畴，其中 $\otimes$ 是[[张量积复形|链复形的张量积]]。
  其单位对象是在第 $0$ 个位置为 $R$，其余为 $0$ 的链复形。

- 设 $G$ 是有限群，则 $G$ 的[[群表示范畴]] $\mathsf{Rep}(G)$ 是幺半范畴。

- 设 $G$ 是有限群，则 $G$ 的 [[分次向量空间|分次向量空间范畴]] $\mathsf{Vect}(G)$ 是幺半范畴。

## 性质

```terms
幺半范畴:
  en: monoidal category
  de: monoidale Kategorie
  fr: catégorie monoïdale
  grc: μονοειδὴς κατηγορία
  la: categoria monoides
```
