---
title: 充实范畴
categories: [范畴论]
navboxes: [范畴论]
---

**充实范畴**是[[范畴]]的一种推广。
在范畴中，两个[[对象]]之间的所有[[态射]]构成[[集合]]。
而在充实范畴中，则允许该集合有额外的结构，
例如[[向量空间]]或[[拓扑空间]]，等等。

例如，向量空间范畴可以视为充实于其自身的充实范畴，
因为每两个向量空间之间的所有[[线性映射]]不仅构成集合，也构成向量空间。

## 定义

### 充实范畴

::: definition [充实范畴] {@thm:充实范畴}
设 $(\mathcal{V}, \otimes, 1_{\mathcal{V}})$ 是[[幺半范畴]]。
一个 $\mathcal{V}$-**充实范畴** $\mathcal{C}$ 由以下信息组成：

- 一个[[类]] $\operatorname{Ob} (\mathcal{C})$，
  其元素称为 $\mathcal{C}$ 的 **[[对象]]**。
  我们也将 $x \in \operatorname{Ob} (\mathcal{C})$
  直接记为 $x \in \mathcal{C}$。

- 对每两个对象 $x, y \in \mathcal{C}$，有一个**态射对象**
  \[
  \mathcal{C} (x, y) \in \mathcal{V},
  \]
  它是 $\mathcal{V}$ 的对象，
  视作 $x, y$ 之间所有态射构成的空间。

- 对每个对象 $x \in \mathcal{C}$，有一个 **[[恒同态射]]**
  \[
  \mathbb{1}_x \colon
  1_{\mathcal{V}} \longrightarrow \mathcal{C} (x, x),
  \]
  它是 $\mathcal{V}$ 中的态射，
  可以视为对象 $\mathcal{C} (x, x) \in \mathcal{V}$ 中的一个“元素”。

- 对每三个对象 $x, y, z \in \mathcal{C}$，有一个**复合态射**
  \[
  \circ \colon
  \mathcal{C} (y, z) \otimes \mathcal{C} (x, y)
  \longrightarrow \mathcal{C} (x, z),
  \]
  它是 $\mathcal{V}$ 中的态射。

它们满足以下条件：

- （**[[单位律]]**）
  对任意 $x, y \in \mathcal{C}$，下列图表交换：
  \[
  \begin{tikzcd}
    1_{\mathcal{V}} \otimes \mathcal{C} (x, y) \ar[d, "{\mathbb{1}_y \otimes \mathcal{C} (x, y)}"'] \ar[dr, "\simeq"] & &
    \mathcal{C} (x, y) \ar[d, "{\mathcal{C} (x, y) \otimes \mathbb{1}_x}"] \ar[dl, "\simeq"'] \otimes 1_{\mathcal{V}} \\
    \mathcal{C} (y, y) \otimes \mathcal{C} (x, y) \ar[r, "\circ"] &
    \mathcal{C} (x, y) &
    \mathcal{C} (x, y) \otimes \mathcal{C} (x, x) \rlap{\ .} \ar[l, "\circ"']
  \end{tikzcd}
  \]
  大致说，就是任何态射复合恒同态射都等于它自身。

- （**[[结合律]]**）
  对任意 $x, y, z, w \in \mathcal{C}$，下列图表交换：
  \[
  \begin{tikzcd}[column sep = 4em]
    \mathcal{C} (z, w) \otimes \mathcal{C} (y, z) \otimes \mathcal{C} (x, y)
    \ar[d, "{\mathcal{C} (z, w) \otimes \circ}"']
    \ar[r, "{\circ \otimes \mathcal{C} (x, y)}"] &
    \mathcal{C} (y, w) \otimes \mathcal{C} (x, y) \ar[d, "\circ"] \\
    \mathcal{C} (z, w) \otimes \mathcal{C} (x, z) \ar[r, "\circ"] &
    \mathcal{C} (x, w) \rlap{\ .}
  \end{tikzcd}
  \]
  也就是说，复合满足结合律。

:::

::: remark {@rmk-set-enriched}
在 @thm:充实范畴 中，
如果取 $(\mathcal{V}, \otimes, 1_{\mathcal{V}}) = (\mathsf{Set}, \times, *)$
为[[集合范畴]]，其中 $*$ 表示[[单点集]]，
那么得到的 $\mathsf{Set}$-充实范畴就是普通[[范畴]]。
:::

### 充实函子

充实范畴间的充实函子是范畴间[[函子]]的推广。

::: definition [充实函子] {@thm:充实函子}
设 $(\mathcal{V}, \otimes, 1_{\mathcal{V}})$ 是[[幺半范畴]]，
$\mathcal{C},\mathcal{D}$ 是 $\mathcal{V}$-充实范畴。
从 $\mathcal{C}$ 到 $\mathcal{D}$ 的 $\mathcal{V}$-**充实函子**
$F \colon \cal C \to \cal D$ 由以下信息组成：

- 一个映射 $F \colon \operatorname{Ob} (\mathcal{C}) \to \operatorname{Ob} (\mathcal{D})$。

- 对任意 $x,y \in \operatorname{Ob} (\mathcal{C})$，有一个 $\mathcal{V}$ 中的态射
  \[
  F_{x,y} \colon \mathcal{C}(x,y) \to \mathcal{D}(F(x),F(y)) .
  \]
  在无歧义时，态射 $F_{x,y}$ 也会简记为 $F$。

它们满足以下条件：

- 对任意 $x,y,z \in \operatorname{Ob} (\mathcal{C})$，下列图表交换：
  \[
  \begin{tikzcd}
    \mathcal{C}(y,z) \otimes \mathcal{C}(x,y) \ar[r, "\circ"]
    \ar[d, "{F_{y,z} \otimes F_{x,y}}"'] &
    \mathcal{C}(x,z) \ar[d, "{F_{x,z}}"] \\
    \mathcal{D}(F(y),F(z)) \otimes \mathcal{D}(F(x),F(y))
    \ar[r, "\circ"] &
    \mathcal{D}(F(x),F(z)) \rlap{\ .}
  \end{tikzcd}
  \]
- 对任意 $x \in \operatorname{Ob} (\mathcal{C})$，下列图表交换：
  \[
  \begin{tikzcd}
    & 1_{\mathcal{V}} \ar[dl, "\mathbb{1}_x"'] \ar[dr, "\mathbb{1}_{F(x)}"] \\
    \mathcal{C}(x,x) \ar[rr, "{F_{x,x}}"] &&
    \mathcal{D}(F(x),F(x)) \rlap{\ .}
  \end{tikzcd}
  \]

:::

### 充实自然变换

充实自然变换是[[自然变换]]向充实范畴的推广。

::: definition [充实自然变换] {@thm:充实自然变换}
设 $(\mathcal{V}, \otimes, 1_{\mathcal{V}})$ 是幺半范畴，
$\mathcal{C},\mathcal{D}$ 是 $\mathcal{V}$-充实范畴。
$F,G \colon \mathcal{C} \rightarrow \mathcal{D}$ 是 $\mathcal{V}$-充实函子。
则从 $F$ 到 $G$ 的 $\mathcal{V}$-**充实自然变换**
$\theta \colon F \Rightarrow G$
是指 $\mathcal{V}$ 中的一族态射
\[
\theta_x \colon 1_{\mathcal{V}} \longrightarrow \mathcal{D} (F(x), G(x)) ,
\]
其中 $x \in \mathrm{Ob} (\mathcal{C})$，
使得对任意 $x,y \in \mathrm{Ob} (\mathcal{C})$，下列图表交换：
\[
\begin{tikzcd}[column sep={7em,between origins}, row sep=1em]
  & 1_{\mathcal{V}} \otimes \mathcal{C} (x,y) \ar[rr, "{\theta_{y} \otimes F_{x, y}}"]
  && \mathcal{D} (F(y),G(y)) \otimes \mathcal{D} (F(x),F(y)) \ar[dr, "\circ"'] \\
  \mathcal{C} (x,y)  \ar[dr, "\simeq"] \ar[ur, "\simeq"']
  &&&& \mathcal{D} (F(x),G(y)) \rlap{ .} \\
  & \mathcal{C} (x,y) \otimes 1_{\mathcal{V}} \ar[rr, "{G_{x, y} \otimes \theta_{x}}"]
  && \mathcal{D} (G(x),G(y)) \otimes \mathcal{D} (F(x),G(x)) \ar[ur, "\circ"]
\end{tikzcd}
\]
:::

### 充实范畴的范畴

::: definition [小充实范畴] {@小充实范畴}
设 $\mathcal{V}$ 是幺半范畴，
$\mathcal{C}$ 是 $\mathcal{V}$-充实范畴（@thm:充实范畴）。
如果 $\operatorname{Ob} (\mathcal{C})$ 是集合，
就称 $\mathcal{C}$ 是**小** $\mathcal{V}$-充实范畴。
:::

::: definition [充实范畴的范畴]
设 $\mathcal{V}$ 是幺半范畴。
所有小 $\mathcal{V}$-充实范畴（@小充实范畴）
和它们之间的充实函子（@thm:充实函子）
以及充实自然变换（@thm:充实自然变换）
构成 [[$2$-范畴]]，
通常记作 $\mathsf{Cat}_{\mathcal{V}}$。
:::

## 例子

- 充实于[[集合范畴]]
  $(\mathsf{Set}, \times, *)$
  的范畴，即 $\mathsf{Set}$-充实范畴，就是普通的[[范畴]]（@rmk-set-enriched）。

- 充实于 [[Abel 群]]范畴
  $(\mathsf{Ab}, \otimes, \mathbb{Z})$
  的范畴，即 $\mathsf{Ab}$-充实范畴，称为[[环胚]]。
  带有[[零对象]]的环胚称为[[预加性范畴]]。
  例如，[[Abel 群]]的范畴、[[环]]上的[[模]]范畴（特别地，[[向量空间]]范畴）
  都是预加性范畴。

- 充实于[[拓扑空间]]范畴
  $(\mathsf{Top}, \times, *)$
  的范畴，即 $\mathsf{Top}$-充实范畴，称为[[拓扑范畴]]。
  例如，$\mathsf{Top}$ 的态射空间可以赋予[[紧开拓扑]]，
  使得 $\mathsf{Top}$ 成为拓扑范畴。

- 充实于[[单纯集合]]范畴
  $(\mathsf{sSet}, \times, *)$
  的范畴，即 $\mathsf{sSet}$-充实范畴，称为[[单纯范畴]]。

- 设 $k$ 是[[域]]。充实于[[链复形]]范畴
  $(\mathsf{Ch}(k), \otimes, k)$
  的范畴，即 $\mathsf{Ch}(k)$-充实范畴，称为 $k$ 上的[[微分分次范畴]]。
  这里，幺半范畴的单位对象 $k$ 是指第 $0$ 个位置为 $k$，其余为零的链复形。

```terms
充实范畴:
  en: enriched category
  de: angereicherte Kategorie
  fr: catégorie enrichie
```
