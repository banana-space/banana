---
title: 二元函子
aliases: [双函子]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**二元函子**是指形如
\[
F \colon \mathcal{C} \times \mathcal{D}
\longrightarrow \mathcal{E}
\]
的[[函子]]，其中 $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$ 是[[范畴]]，
而 $\mathcal{C} \times \mathcal{D}$ 是[[积范畴]]。
给定这样的二元函子，则对任何对象 $x \in \mathcal{C}$，$y \in \mathcal{D}$，
能得到对象 $F (x, y) \in \mathcal{E}$。

二元函子 $F$ 也可以等价地看成
\[
\mathcal{C} \longrightarrow
\mathsf{Fun} (\mathcal{D}, \mathcal{E})
\]
的函子，其中右边是[[函子范畴]]。
这是因为对 $x \in \mathcal{C}$，能得到函子
\[
F (x, -) \colon \mathcal{D} \longrightarrow \mathcal{E}.
\]

```terms
二元函子:
  en: bifunctor
```
