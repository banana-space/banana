---
title: 分次向量空间
notices:
  - name: 问题
    items:
      - '张量积的定义 $(V \otimes W)_{gh} := V_g \otimes W_h$ 似乎有误：当 $G$ 不是平凡群时，同一个 $x \in G$ 可以写成多种 $gh$，似乎应为 $(V \otimes W)_x = \bigoplus_{gh = x} V_g \otimes W_h$。'
navboxes: [范畴论]
---

**分次向量空间**是一个[[向量空间]]，并由给定的集合定义了其上的[[直和（线性代数）|直和]]分解结构。

## 定义

::: definition [分次向量空间]
给定一个集合$S$，域$k$上的$S$-**分次向量空间**是直和空间
\[
V \simeq \bigoplus_{s\in S}V_s.
\]
对任意的$s\in S$，所有$v\in V_s$在$V$中的像称为是**齐次的**。
:::

::: definition [分次向量空间范畴]
$S$是集合，所有域$k$上的$S$-分次向量空间，
以及它们之间保分次的线性映射构成了$S$-**分次向量空间范畴**，记作$\mathsf{Vect}_k(S)$。
:::

如果集合上带有群结构，它的分次向量空间范畴带有[[幺半范畴|幺半结构]]：

::: definition
$G$是群，$k$是域，设$V,W\in \mathsf{Vect}_k(G)$，定义$\mathsf{Vect}_k(G)$上的[[张量积]]为
\[
(V \otimes W)_{gh} := V_g \otimes W_h,\quad \forall g,h\in G.
\]
并定义结合子是平凡的。则$(\mathsf{Vect}_k(G), \otimes)$构成了一个幺半范畴。
:::

```terms
分次向量空间:
  en: graded vector space
```
