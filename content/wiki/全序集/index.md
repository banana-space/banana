---
title: 全序集
aliases: [全序, 线性序]
categories: [序论]
navboxes: [序论]
---

**全序集**是任意两个元素都可以比较大小的[[偏序集]]。
其上的序关系也称为**全序关系**或**全序**。

全序集上可以定义[[序拓扑]]。

## 定义

::: definition
[[集合]] $X$ 上的**全序**是一种二元关系 $\le$，
满足以下性质：

- （**[[自反关系|自反性]]**）
  对任意 $x \in X$，有 $x \leq x$。

- （**[[传递关系|传递性]]**）
  对任意 $x, y, z \in X$，若 $x \leq y \leq z$，则 $x \leq z$。

- （**[[反对称关系|反对称性]]**）
  对任意 $x, y \in X$，若 $x \leq y$ 且 $y \leq x$，则 $x = y$。

- （**完全性**）
  对任意 $x, y \in X$，有 $ x \leq y $ 或 $ y \leq x $。

:::

## 例子

- 所有[[实数]]依照大小关系构成全序集；

- 字母表可按照顺序排序，如 $a<b<c$ 等等；

- 全序集在子集上的[[限制]]仍然是全序集；

- **[[字典序]]**。

```terms
全序集:
  en: 'totally ordered set, toset'
  de: total geordnete Menge
  fr: ensemble totalement ordonné
  grc: ὅλως διατεταγμένον σύνολον
  la: copia totum ordinata
全序:
  en: total order
  de: [Totalordnung, totale Ordnung]
  fr: ordre total
  grc: ὅλη διάταξις
  la: ordo totus
线性序:
  en: linear order
  de: lineare Ordnung
  fr: ordre linéaire
  grc: γραμμικὴ διάταξις
  la: ordo linearis
```
