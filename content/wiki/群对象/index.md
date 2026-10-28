---
title: 群对象
categories: [范畴代数]
navboxes: [范畴论]
---

<problems>
- “性质”一节的结论对任何（有限）范畴代数结构都成立，待相关条目完善后，本节应改为引用相应条目。
</problems>

在[[范畴论]]中，**群对象**是[[群]]的概念的推广。
我们熟知，群是带有乘法操作的[[集合]]，使得乘法有单位元、逆元。
我们可以将其推广为任何[[范畴]] $\mathcal{C}$ 的对象，
带有乘法操作，并且乘法有单位元、逆元。
这样的对象就是 $\mathcal{C}$ 中的群对象。

例如，[[群]]是[[集合范畴]]的群对象；
[[Lie 群]]是[[光滑流形]]范畴中的群对象；
[[代数群]]是[[代数簇]]范畴中的群对象，如此等等。

## 定义

设 $\mathcal{C}$ 是一个[[范畴]]，具有有限乘积。
特别地，$\mathcal{C}$ 有[[终对象]] $*$。

::: definition
$\mathcal{C}$ 中的**群对象**是四元组
$(G,m,e,i)$，其中

- $G \in \mathcal{C}$ 是一个对象。

- $m \colon G \times G \to G$ 是态射，称为**乘法**。

- $e \colon * \to G$ 是态射，称为群对象的**单位元**。

- $i \colon G \to G$ 是态射，称为取**逆元**。

使得以下图表交换：

- （**[[结合律]]**）
  \[
  \begin{tikzcd}
    G \times G \times G
    \ar[r, "m\times \mathbb{1}_G"]
    \ar[d, "\mathbb{1}_G \times m"'] &
    G \times G
    \ar[d, "m"] \\
    G \times G
    \ar[r, "m"] &
    G \rlap{ .}
  \end{tikzcd}
  \]

- （**[[单位律]]**）
  \[
  \begin{tikzcd}
    &
    G
    \ar[dr, "{(e,\mathbb{1}_G)}"]
    \ar[dl, "{(\mathbb{1}_G,e)}"']
    \ar[d, "\mathbb{1}_G"]&\\
    G \times G
    \ar[r, "m"]&
    G&
    G \times G \rlap{ .}
    \ar[l, "m"']
  \end{tikzcd}
  \]

- （**[[逆元]]**）
  \[
  \begin{tikzcd}
    &
    G
    \ar[dr, "{(i,\mathbb{1}_G)}"]
    \ar[dl, "{(\mathbb{1}_G,i)}"']
    \ar[d, "e"]&\\
    G \times G
    \ar[r, "m"]&
    G&
    G \times G \rlap{ ,}
    \ar[l, "m"']
  \end{tikzcd}
  \]
  其中 $e: G \to G$ 是复合
  \[
  G \longrightarrow
  {*} \overset{e}{\longrightarrow}
  G .
  \]

若 $G$ 还满足以下条件：

- （**[[交换律]]**）
  \[
  \begin{tikzcd}[column sep={4em,between origins}]
    G \times G
    \ar[rr, "\delta"]
    \ar[dr, "m"']
    &&
    G \times G
    \ar[dl, "m"]\\
    &
    G \rlap{ ,}
  \end{tikzcd}
  \]

其中映射 $\delta$ 为交换两个分量，
则称 $G$ 为**交换群对象**或 **Abel 群对象**。

:::

有自然的方式定义群对象间的态射。

::: definition
设 $G_k = (G_k, m_k, e_k, i_k) \ (k=1,2)$ 为群对象。
一个同态 $f: G_1 \to G_2$ 是一个态射 $f: G_1 \to G_2$，
使得它与群乘法相容，即有交换图表
\[
\begin{tikzcd}
  G_1 \times G_1
  \ar[r, "f \times f"]
  \ar[d, "m_1"]&
  G_2 \times G_2
  \ar[d, "m_2"]\\
  G_1
  \ar[r, "f"]&
  G_2 \rlap{ .}
\end{tikzcd}
\]
:::

容易验证，群同态的复合还是同态。从而我们得到一个范畴。

::: definition
设 $\mathcal{C}$ 是一个有有限乘积的范畴。
$\mathcal{C}$ 的群对象范畴是如下范畴，
它的对象是 $\mathcal{C}$ 的群对象，
态射是群对象的同态。
$\mathcal{C}$ 的交换群对象范畴是群对象范畴的由交换群对象构成的全子范畴。
:::

仅在本文中以 $\mathsf{Grp}_{\mathcal{C}}$、$\mathsf{Ab}_{\mathcal{C}}$ 表示这两个范畴。

::: remark
群对象范畴似乎没有标准记号。
对于[[景]] $\mathcal{C}$，
$\mathsf{Ab}(\mathcal{C})$ 通常表示 $\mathcal{C}$ 上的交换群[[层]]。
后面我们会看到，在上述情形中若[[可表函子]]都是层，
则 $\mathsf{Ab}_{\mathcal{C}}$ 是 $\mathsf{Ab}(\mathcal{C})$ 的全子范畴。
:::

## 例子

- [[集合范畴]]中的群对象就是[[群]]，交换群对象就是 [[Abel 群]]。

- 群范畴中的群对象是 [[Abel 群]]，这是由于 [[Eckmann–Hilton 论证]]。
  这样的群对象自动是交换的。

- [[拓扑空间]]范畴中的群对象是[[拓扑群]]，交换群对象是交换的拓扑群。

- [[光滑流形]]范畴中的群对象是 [[Lie 群]]，交换群对象是交换的 Lie 群。

- [[代数簇]]范畴中的群对象是[[代数群]]，交换群对象是交换的代数群。

- [[概形]]范畴中的群对象是[[群概形]]，交换群对象是交换的群概形。

- [[代数空间]]范畴中的群对象是[[群代数空间]]，交换群对象是交换的群代数空间。

## 性质

我们先陈述一些函子性。
本节的结论中，将“群对象”替换为“交换群对象”，易见有相应结论，于是不重复给出。

::: proposition
设 $F: \mathcal{C} \to \mathcal{D}$ 是函子。
假设 $\mathcal{C}$ 与 $\mathcal{D}$ 有有限乘积，
$F$ 和它们交换。
则 $F$ 诱导函子
\[
\mathsf{Grp}_{F}:
\mathsf{Grp}_{\mathcal{C}}
\to \mathsf{Grp}_{\mathcal{D}},
\]
它由 $\mathsf{Grp}_{F}(G,m,e,i) = (F(G),F(m),F(e),F(i))$ 给出。
这一构造和函子的复合相容。

进一步，若 $F$ [[全忠实函子|全忠实]]，
$\mathsf{Grp}_{F}$ 亦然。
:::

证明是显然的。

::: proposition
设 $\mathcal{I}$ 是范畴，$\mathcal{D}$ 是有有限乘积的范畴，
$\mathcal{C}:=\mathsf{Fun}(\mathcal{I}, \mathcal{D})$。
则
\[
\mathsf{Grp}_{\mathcal{C}}
= \mathsf{Fun}(\mathcal{I}, \mathsf{Grp}_{\mathcal{D}}).
\]
:::

证明完全是[[抽象废话]]，所以略去。

以下假设 $\mathcal{C}$ 是小范畴。
则 [[Yoneda 函子]]
$j \colon \mathcal{C} \to \mathsf{PSh}(\mathcal{C})$ 全忠实且保持极限。
于是有[[全忠实函子]]
\[
j \colon \mathsf{Grp}_{\mathcal{C}}
\to \mathsf{Grp}_{\mathsf{PSh}(\mathcal{C})}
= \mathsf{PGrp}(\mathcal{C}).
\]

于是我们得到群对象的函子性观点：
一个群对象是一个对象 $G$，
连同对每个对象 $T$，给 $\mathcal{C}(T, G)$ 赋予群结构，
使得它们对传递映射相容，换言之即函子 $\mathcal{C}\to\mathsf{Grp}$
满足复合忘却函子之后为 $h_G$。
在此观点下，很多图表交换性结论可以由群的相应结论得到。

最后，我们给出一个在代数几何中常用的引理：
群的对角线和单位元的含入互为拉回，
而群的乘法映射同构于到一个分量的投影。

::: lemma
设 $G = (G,m,e,i)$ 是范畴 $\mathcal{C}$ 的群对象。
则在 $\mathcal{C}$ 中有交换图表

\[
\begin{tikzcd} *
  \ar[r, "e"]
  \ar[d, "e"]&
  G
  \ar[r]
  \ar[d, "\Delta_G"]& *
  \ar[d, "e"]\\
  G
  \ar[r, "{(\mathbb{1}_G, e)}"]
  \ar[d]&
  G \times G
  \ar[r, "{(x, y) \mapsto xy^{-1}}"]
  \ar[d, "{(x, y) \mapsto y}"]&
  G
  \ar[d]\\ *\ar[r, "e"]&
  G\ar[r]& * \rlap{ ,}
\end{tikzcd}
\]

\[
\begin{tikzcd} *
  \ar[r, "e"]
  \ar[d, "e"]&
  G
  \ar[r]
  \ar[d, "{(\mathbb{1}_G, i)}"]& *
  \ar[d, "e"]\\
  G
  \ar[r, "{(\mathbb{1}_G, e)}"]
  \ar[d]&
  G \times G
  \ar[r, "m"]
  \ar[d, "{(x, y) \mapsto y}"]&
  G
  \ar[d]\\ *\ar[r, "e"]&
  G\ar[r]& * \rlap{ ,}
\end{tikzcd}
\]
且各矩形均为[[拉回 (范畴论)|拉回]]图表。
其中，$\Delta$ 为对角线。
:::

::: proof
由函子观点显然。
:::

```terms
群对象:
  en: group object
  de: Gruppenobjekt
  fr: [objet en groupe, groupe (d'une catégorie)]
```
