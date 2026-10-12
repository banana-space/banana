---
title: 函子
aliases: [反变函子, 协变函子, 函子性, 1-函子]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**函子**是[[范畴]]之间的“映射”。
从范畴 $\mathcal{C}$ 到范畴 $\mathcal{D}$ 的函子
把 $\mathcal{C}$ 的[[对象]]映到 $\mathcal{D}$ 的对象，
把 $\mathcal{C}$ 的[[态射]]映到 $\mathcal{D}$ 的态射。

例如，

- 从[[拓扑空间范畴]]到[[集合范畴]]有一个[[遗忘函子]]。
  它把每个[[拓扑空间]]映到其中点的[[集合]]，
  把拓扑空间之间的[[连续映射]]映到集合之间的[[映射]]。

- [[基本群]]是从拓扑空间范畴到[[群范畴]]的函子，
  它把拓扑空间对应到它的基本群，
  把连续映射对应到它诱导的基本群之间的同态。

我们也常常使用以下术语：
对于一种把 $\mathcal{C}$ 的对象映到 $\mathcal{D}$ 的对象的操作，
如果能将这种操作看成某个函子的一部分，
就说这种操作具有**函子性**，或是**自然**的。

## 定义

::: definition [函子] {@def-functor}
设 $\mathcal{C}, \mathcal{D}$ 是[[范畴]]。
一个从 $\mathcal{C}$ 到 $\mathcal{D}$ 的**函子**
（或**协变函子**）
$F \colon \mathcal{C} \to \mathcal{D}$
由以下信息组成：

- 一个映射
  \[
  F \colon \operatorname{Ob} (\mathcal{C})
  \to \operatorname{Ob} (\mathcal{D}),
  \]
  将 $\mathcal{C}$ 的对象 $X$ 映到 $\mathcal{D}$ 的对象 $F(X)$。

- 对任意 $X, Y \in \operatorname{Ob} (\mathcal{C})$，
  有一个映射
  \[
  F \colon \mathcal{C} (X, Y)
  \to \mathcal{D} (F(X), F(Y)),
  \]
  将 $\mathcal{C}$ 的态射 $f \colon X \to Y$
  映到 $\mathcal{D}$ 的态射 $F (f) \colon F(X) \to F(Y)$。

这些信息满足以下条件：

- 对每个 $X \in \operatorname{Ob} (\mathcal{C})$，有
  \[
  F (\mathbb{1}_X) = \mathbb{1}_{F(X)} ,
  \]
  其中 $\mathbb{1}_X$ 与 $\mathbb{1}_{F(X)}$ 表示[[恒同态射]]。

- 对任意 $X, Y, Z \in \operatorname{Ob} (\mathcal{C})$，
  以及任意 $f \in \mathcal{C} (X, Y)$
  和 $g \in \mathcal{C} (Y, Z)$，有
  \[
  F (g \circ f) = F(g) \circ F(f).
  \]
  换言之，$F$ 把 $\mathcal{C}$ 中的[[交换图]]变成 $\mathcal{D}$ 中的交换图：
  \[
  \begin{tikzcd}
    X \ar[r, "f"] \ar[dr, "g\circ f"'] & Y \ar[d, "g"] &
    {} \ar[d, phantom, pos=0.4, "\Longrightarrow"] &
    F(X) \ar[r, "F(f)"] \ar[dr, "F(g\circ f)"'] & F(Y) \ar[d, "F(g)"]\\
    & Z &
    {} &
    & F(Z) \rlap{\ .}
  \end{tikzcd}
  \]
:::

::: definition [反变函子]
设 $\mathcal{C}, \mathcal{D}$ 是范畴。
从 $\mathcal{C}$ 到 $\mathcal{D}$ 的**反变函子**
是从 $\mathcal{C}$ 的[[反范畴]]到 $\mathcal{D}$ 的函子
（@def-functor）
\[
F \colon \mathcal{C}^{\mathrm{op}} \to \mathcal{D}.
\]

具体地说，这样的反变函子由以下信息给出：

- 一个映射
  \[
  F \colon \operatorname{Ob} (\mathcal{C})
  \to \operatorname{Ob} (\mathcal{D}),
  \]
  将 $\mathcal{C}$ 的对象 $X$ 映到 $\mathcal{D}$ 的对象 $F(X)$。

- 对任意 $X, Y \in \operatorname{Ob} (\mathcal{C})$，
  有一个映射
  \[
  F \colon \mathcal{C} (X, Y)
  \to \mathcal{D} (F(Y), F(X)),
  \]
  将 $\mathcal{C}$ 的态射 $f \colon X \to Y$
  映到 $\mathcal{D}$ 的态射 $F(f) \colon F(Y) \to F(X)$。

这些信息满足以下条件：

- 对每个 $X \in \operatorname{Ob} (\mathcal{C})$，有
  \[
  F (\mathbb{1}_X) = \mathbb{1}_{F(X)}.
  \]

- 对任意 $X, Y, Z \in \operatorname{Ob} (\mathcal{C})$，
  以及任意 $f \in \mathcal{C} (X, Y)$
  和 $g \in \mathcal{C} (Y, Z)$，有
  \[
  F (g \circ f) = F(f) \circ F(g).
  \]
  换言之，$F$ 把 $\mathcal{C}$ 中的[[交换图]]变成 $\mathcal{D}$ 中的交换图：
  \[
  \begin{tikzcd}
    X \ar[r, "f"] \ar[dr, "g\circ f"'] & Y \ar[d, "g"] &
    {} \ar[d, phantom, pos=0.4, "\Longrightarrow"] &
    F(Z) \ar[r, <-, "F(g)"] \ar[dr, <-, "F(g\circ f)"'] &
    F(Y) \ar[d, <-, "F(f)"]\\
    & Z &
    {} &
    & F(X) \rlap{\ .}
  \end{tikzcd}
  \]
:::

::: definition [函子范畴] {@def-functor-category}
设 $\mathcal{C}, \mathcal{D}$ 是范畴。
所有从 $\mathcal{C}$ 到 $\mathcal{D}$ 的函子，
以及它们之间的[[自然变换]]，
构成一个范畴，称为 $\mathcal{C}$ 到 $\mathcal{D}$ 的 **[[函子范畴]]**，
记为 $\mathsf{Fun} (\mathcal{C}, \mathcal{D})$。
:::

::: remark
函子范畴（@def-functor-category）
给[[范畴的范畴]] $\mathsf{Cat}$
的每个态射空间赋予了范畴的结构。
这描述了 $\mathsf{Cat}$ 的 [[$2$-范畴]]结构。
:::

## 例子

- [[遗忘函子]]
- [[自由函子]]

```terms
函子:
  en: functor
  de: Funktor :m
  fr: foncteur :m
  ja: 関<かん>手<しゅ>
函子性:
  en: [functorial, functoriality]
  de: [funktoriell, Funktorialität]
  fr: [fonctoriel, fonctorialité]
自然:
  en: natural
  de: natürlich
  fr: naturel
协变函子:
  en: covariant functor
  de: kovarianter Funktor
  fr: foncteur covariant
反变函子:
  en: contravariant functor
  de: kontravarianter Funktor
  fr: foncteur contravariant
```
