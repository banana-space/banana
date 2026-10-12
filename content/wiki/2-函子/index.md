---
title: $2$-函子
aliases: [伪函子]
categories: [高阶范畴论]
navboxes: [2-范畴论]
---

在[[范畴论]]中，
**$2$-函子**是 [[$2$-范畴]]间的“映射”，
正如[[函子]]是[[范畴]]间的“映射”。
$2$-函子 $F \colon \mathcal{C} \to \mathcal{D}$
将 $\mathcal{C}$ 中的[[对象]]、[[态射]]、[[$2$-态射]]
分别映到 $\mathcal{D}$ 中的对象、态射、$2$-态射。

从某种意义上说，$2$-函子的概念比函子更弱，
因为函子 $F \colon \mathcal{C} \to \mathcal{D}$
需要严格地保持态射复合：$F (g \circ f) = F (g) \circ F (f)$，
而 $2$-函子只需在相差一个 [[$2$-同构]]（即可逆 $2$-态射）的意义下保持态射复合：
$F (g \circ f) \simeq F (g) \circ F (f)$。

例如，记 $\mathsf{Sch}$ 为[[概形]]范畴，
则 $\mathsf{QCoh} (-) \colon \mathsf{Sch}^{\mathrm{op}} \to \mathsf{Cat}$
是一个 $2$-函子，它将概形 $X$
映到 $X$ 上[[拟凝聚层]]的范畴 $\mathsf{QCoh} (X)$。
注意若 $f \colon X \to Y$ 和 $g \colon Y \to Z$ 为[[概形态射]]，
则有普通函子的[[自然同构]]
\[
(g \circ f)^* \simeq f^* \circ g^* \colon
\mathsf{QCoh} (Z) \to \mathsf{QCoh} (X),
\]
但该自然同构并不是函子的相等。
（事实上，在范畴中考虑相等的函子并没有很大意义，
应考虑自然同构的函子，
因为后者才被[[范畴等价]]保持。）
自然同构是 $\mathsf{Cat}$ 中的 $2$-同构，
故 $\mathsf{QCoh} (-)$ 在相差 $2$-同构的意义下保持态射复合，
因此它是 $2$-函子。

正如上例中所见，从 $1$-范畴（即普通范畴）到 $2$-范畴可以有不平凡的 $2$-函子，
这类 $2$-函子也称为**伪函子**。
但反之则不然：从 $2$-范畴到 $1$-范畴的 $2$-函子本质上都是 $1$-函子，
也就是从该 $2$-范畴的[[同伦范畴]]出发的 $1$-函子。

与 $2$-函子类似，在 [[$n$-范畴]]之间可以有 [[$n$-函子]]；
在 [[$\infty$-范畴]]之间可以有 [[$\infty$-函子]]。

## 定义

由于 [[$2$-范畴]]是[[幺半范畴]]的[[胚化]]，
下面的定义与[[幺半函子]]很相似：
它在相差[[自然同构]]的意义下保持复合和单位，
且与[[单位子]]和[[结合子]]相容。

::: definition [$2$-函子]
设 $\mathcal{C}$、$\mathcal{D}$ 为 [[$2$-范畴]]。
**$2$-函子** $F \colon \mathcal{C} \to \mathcal{D}$
由以下信息组成：

- 一个[[映射 (集合论)|映射]]
  \[
  F \colon \mathrm{Ob} (\mathcal{C})
  \longrightarrow \mathrm{Ob} (\mathcal{D}).
  \]

- 对任何 $x, y \in \mathrm{Ob} (\mathcal{C})$，有一个[[函子]]
  \[
  F_{x,y} \colon \mathcal{C} (x, y)
  \longrightarrow \mathcal{D} (F (x), F (y)).
  \]

- 对任何 $x, y, z \in \mathrm{Ob} (\mathcal{C})$，有一个[[自然同构]]
  \[
  \begin{tikzcd}[column sep=4em, row sep=3em]
    \mathcal{C} (y, z) \times \mathcal{C} (x, y)
    \ar[d, "\circ"'] \ar[r, "{F_{y, z} \times F_{x, y}}"]
    & \mathcal{D} (F (y), F (z)) \times \mathcal{D} (F (x), F (y))
    \ar[d, "\circ"]
    \\ \mathcal{C} (x, z) \ar[r, "{F_{x, z}}"]
    \ar[ur, phantom, shift left=1.5, "\Longrightarrow"{rotate=30}]
    \ar[ur, phantom, shift left=5, pos=.45, "{\scriptstyle c_{x,y,z}}"]
    & \mathcal{D} (F (x), F (z)) \rlap{ ,}
  \end{tikzcd}
  \]
  从而 $F$ 借助之保持复合。

- 对任何 $x \in \mathrm{Ob} (\mathcal{C})$，
  有 $\mathcal{D} (F (x), F (x))$ 中的同构
  \[
  i_x \colon F_{x, x} (\mathbb{1}_x)
  \simeq \mathbb{1}_{F (x)} \, ,
  \]
  从而 $F$ 借助之保持恒同态射。

它们满足以下条件：

- 对任何 $x, y, z, w \in \mathrm{Ob} (\mathcal{C})$，
  及 $f \in \mathcal{C} (x, y)$，
  $g \in \mathcal{C} (y, z)$，
  $h \in \mathcal{C} (z, w)$，
  有 $\mathcal{D} (F (x), F (w))$ 中的交换图
  \[
  \begin{tikzcd}[column sep=4em]
    F ((h \circ g) \circ f)
    \ar[r, "{F (a_{h, \, g, \, f})}"]
    \ar[d, "{c_{h \, \circ \, g, \, f}}"']
    & F (h \circ (g \circ f))
    \ar[d, "{c_{h, \, g \, \circ \, f}}"]
    \\ F (h \circ g) \circ F (f)
    \ar[d, "{c_{h, \, g} \, \circ \, F (f)}"']
    & F (h) \circ F (g \circ f)
    \ar[d, "{F (h) \, \circ \, c_{g, \, f}}"]
    \\ (F (h) \circ F (g)) \circ F (f)
    \ar[r, "{a_{F (h), \, F (g), \, F (f)}}"]
    & F (h) \circ (F (g) \circ F (f)) \rlap{ ,}
  \end{tikzcd}
  \]
  其中，为记号简便，我们忽略了所有关于 $x, y, z, w$ 的下标，
  而其中出现的下标是指自然同构的分量；
  $a$ 是 $2$-范畴结构中的结合子，而 $c$ 是上面的自然同构。

- 对任何 $x, y \in \mathrm{Ob} (\mathcal{C})$，
  及 $f \in \mathcal{C} (x, y)$，
  有 $\mathcal{D} (F (x), F (y))$ 中的交换图
  \[
  \begin{tikzcd}
    F (\mathbb{1}_y \circ f)
    \ar[r, "F (l_f)"]
    \ar[d, "{c_{\mathbb{1}_y, \, f}}"']
    & F (f)
    \\ F (\mathbb{1}_y) \circ F (f)
    \ar[r, "{i \, \circ \, F (f)}"]
    & \mathbb{1}_{F (y)} \circ F (f) \rlap{ ,}
    \ar[u, "l_{F (f)}"']
  \end{tikzcd} \quad \begin{tikzcd}
    F (f \circ \mathbb{1}_x)
    \ar[r, "F (r_f)"]
    \ar[d, "{c_{f, \, \mathbb{1}_x}}"']
    & F (f)
    \\ F (f) \circ F (\mathbb{1}_x)
    \ar[r, "{F (f) \, \circ \, i}"]
    & F (f) \circ \mathbb{1}_{F (x)} \rlap{ ,}
    \ar[u, "r_{F (f)}"']
  \end{tikzcd}
  \]
  其中，我们忽略了关于 $x, y$ 的下标；
  $l, r$ 是 $2$-范畴结构中的左、右单位子，
  而 $i$ 是上面的同构。

:::

```terms
$2$-函子:
  en: $2$-functor
  de: $2$-Functor :m
  fr: $2$-foncteur :m
伪函子:
  en: pseudo-functor
  fr: pseudo-foncteur :m
```
