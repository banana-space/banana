---
title: Shimura 簇
aliases: [志村簇]
categories: [算术几何, 模形式论]
navboxes: [代数几何, 模形式论]
---

<problems>
- 需要添加“例子”一节。
- “性质”一节需要扩充。
</problems>

在[[算术几何]]中，**Shimura 簇**是[[模曲线]]的高维推广。
模曲线是[[上半平面]] $\mathbb{H}$ 被 $\mathrm{SL}_2 (\mathbb{Z})$ 的[[同余子群]] $\Gamma$
作商得到的空间 $\Gamma \backslash \mathbb{H}$，
它是复[[代数曲线]]，参数化带有[[水平结构]]的[[椭圆曲线]]。
大致来说，Shimura 簇是把这里的 $\mathrm{SL}_2$ 换成更一般的[[约化群]] $G$，
把上半平面换成 [[Hermite 对称域]] $X^+$ 所得的空间 $\Gamma \backslash X^+$，
或者有限个这样的空间的[[无交并]]。
例如，取 $G$ 为[[辛相似群]] $\mathrm{GSp}_{2g}$，就得到 [[Siegel 模簇]]，
它参数化带有水平结构的 $g$ 维主极化 [[Abel 簇]]。

与模曲线一样，Shimura 簇是[[代数簇]]，并且定义在某个[[数域]]上。
因此，它的[[上同调]]上同时有 [[Hecke 算子]]与 [[Galois 群]]的作用，
前者与[[自守表示]]相联系，后者给出 [[Galois 表示]]。
借助 Shimura 簇的上同调构造与自守表示对应的 Galois 表示，
是研究 [[Langlands 纲领]]的主要方法之一。

## 定义

Shimura 簇的定义分为两步：
先用 Shimura 数据描述群 $G$ 与它作用的 [[Hermite 对称域]]，
再用 $G$ 的同余子群作商。

### Shimura 数据

[[Hermite 对称域]]的点可以看作从
[[Deligne 环面]] $\mathbb{S} = \operatorname{Res}_{\mathbb{C} / \mathbb{R}} \mathbb{G}_\mathrm{m}$
到实约化群的同态，这里 $\mathbb{S} (\mathbb{R}) = \mathbb{C}^\times$。
这样的同态在群的每个表示上定义一个实 [[Hodge 结构]]。
例如，对 $G = \mathrm{GL}_2$，同态
\[
h_0 \colon a + b \mathrm{i} \longmapsto
\begin{pmatrix}
  a & -b \\
  b & a
\end{pmatrix}
\]
的 $\mathrm{GL}_2 (\mathbb{R})$-共轭类与 $\mathbb{C} \setminus \mathbb{R}$ 一一对应：
$h_0$ 自身对应 $\mathrm{i}$，而 $g h_0 g^{-1}$ 对应 $g \mathrm{i}$ [@Milne2005, 例 5.6]。
这里 $\mathbb{C} \setminus \mathbb{R}$ 是上半平面与下半平面的无交并。
下面的条件保证这样的共轭类的空间总是 Hermite 对称域的有限无交并（@prop:hsd）。

::: definition [Shimura 数据] {@def:datum}
**Shimura 数据**是二元组 $(G, X)$，其中 $G$ 是 $\mathbb{Q}$ 上的[[约化群]]，
$X$ 是同态 $h \colon \mathbb{S} \to G_\mathbb{R}$ 的 $G (\mathbb{R})$-共轭类，
即 $G (\mathbb{R})$ 在 $\operatorname{Hom} (\mathbb{S}, G_\mathbb{R})$ 上的共轭作用的一个轨道，
并且对 $h \in X$，满足以下条件：

1. 记 $\mathfrak{g} = \operatorname{Lie} (G)$，
   则 ${\operatorname{Ad}} \circ h \colon \mathbb{S} \to \mathrm{GL} (\mathfrak{g}_\mathbb{R})$
   在 $\mathfrak{g}_\mathbb{R}$ 上定义的[[Hodge 结构|实 Hodge 结构]]只有
   $(-1, 1)$、$(0, 0)$、$(1, -1)$ 三种类型。

2. $h (\mathrm{i})$ 定义的内自同构 $\operatorname{ad} (h (\mathrm{i}))$ 是
   $G^\mathrm{ad}_\mathbb{R}$ 的 [[Cartan 对合]]。

3. 对 $G^\mathrm{ad}$ 的任意 $\mathbb{Q}$-单因子 $H$，复合态射
   $\mathbb{S} \xrightarrow{h} G_\mathbb{R} \to H_\mathbb{R}$ 非平凡。

这里 $G_\mathbb{R} = G \times_{\operatorname{Spec} \mathbb{Q}} \operatorname{Spec} \mathbb{R}$，
$G^\mathrm{ad}$ 是 $G$ 的伴随群。
由于 $X$ 中的元素彼此共轭，上述条件与 $h \in X$ 的选取无关
[@Gao2025, 定义 3.1.1; @Milne2005, 定义 5.5]。
:::

### Shimura 簇

有了 Shimura 数据，就可以像模曲线那样，用 $G$ 的同余子群对 $X$ 作商。
这里同余子群的选取由 $G (\mathbb{A}_\mathrm{f})$ 的紧开子群 $K$ 代替，
其中 $\mathbb{A}_\mathrm{f} = \widehat{\mathbb{Z}} \otimes_\mathbb{Z} \mathbb{Q}$
是 $\mathbb{Q}$ 的有限[[加元环]]，
满足 $\mathbb{A}_\mathbb{Q} = \mathbb{R} \times \mathbb{A}_\mathrm{f}$。
所得的空间是有限个形如 $\Gamma \backslash X^+$ 的空间的无交并（@thm:components）。

::: definition [Shimura 簇] {@def:sh}
设 $(G, X)$ 是 Shimura 数据，$K \subset G (\mathbb{A}_\mathrm{f})$ 是[[紧空间|紧]]开子群。
[[双陪集空间]]
\[
\operatorname{Sh}_K (G, X)
= G (\mathbb{Q}) \big\backslash \bigl( X \times G (\mathbb{A}_\mathrm{f}) \bigr) \big/ K
\]
称为 **Shimura 簇**，其中 $G (\mathbb{Q})$ 通过 $X$ 上的共轭作用与
$G (\mathbb{A}_\mathrm{f})$ 上的左乘作用于 $X \times G (\mathbb{A}_\mathrm{f})$，
$K$ 通过右乘作用于 $G (\mathbb{A}_\mathrm{f})$
[@Gao2025, 定义 3.1.5; @Milne2005, 第 5 节]。
:::

严格来说，这里定义的只是 Shimura 簇的复点集 $\operatorname{Sh}_K (G, X) (\mathbb{C})$。
其复代数簇结构将在下文说明。

## 性质

这一节说明上面定义的 $\operatorname{Sh}_K (G, X)$ 确实是复代数簇。
我们先说明 $X$ 是 Hermite 对称域的无交并，
再把 $\operatorname{Sh}_K (G, X)$ 分解为有限个 Hermite 对称域的商。

下面的命题说明，@def:datum 中的条件保证了 $X$ 由 Hermite 对称域组成：

::: proposition [复结构] {@prop:hsd}
设 $(G, X)$ 是 Shimura 数据，则 $X$ 有自然的[[复流形]]结构，
且是有限个同构的 [[Hermite 对称域]]的[[无交并]]。
:::

见 [@Milne2005, 命题 5.9]。

取定 $X$ 的[[连通分支]] $X^+$。
记 $G (\mathbb{R})_+$ 为 $G (\mathbb{R})$ 中在 $G^\mathrm{ad} (\mathbb{R})$ 中的像
落在单位连通分支 $G^\mathrm{ad} (\mathbb{R})^+$ 中的元素构成的子群，
它恰好是 $G (\mathbb{R})$ 中保持 $X^+$ 的元素构成的子群 [@Milne2005, 命题 5.7]。
记 $G (\mathbb{Q})_+ = G (\mathbb{Q}) \cap G (\mathbb{R})_+$。
下面的定理说明，Shimura 簇是有限个形如 $\Gamma \backslash X^+$ 的空间的无交并，
其中 $\Gamma$ 是 $G (\mathbb{Q})$ 的同余子群。

::: theorem [连通分支] {@thm:components}
设 $(G, X)$ 是 Shimura 数据，$X^+$ 是 $X$ 的连通分支，
$K \subset G (\mathbb{A}_\mathrm{f})$ 是紧开子群。
则双陪集空间 $G (\mathbb{Q})_+ \backslash G (\mathbb{A}_\mathrm{f}) / K$ 是有限集，
并且有同胚
\[
\operatorname{Sh}_K (G, X)
\simeq \coprod_{g \in C} \Gamma_g \backslash X^+ ,
\]
其中 $C$ 是 $G (\mathbb{Q})_+ \backslash G (\mathbb{A}_\mathrm{f}) / K$ 的一组代表元，
$\Gamma_g = g K g^{-1} \cap G (\mathbb{Q})_+$。
:::

见 [@Milne2005, 引理 5.12、引理 5.13]。

当 $K$ 充分小时，每个 $\Gamma_g$ 在 $X^+$ 的全纯自同构群中的像是无挠的[[算术子群]]
[@Milne2005, 第 5 节]。
此时 [[Baily–Borel 定理]]说明，
每个 $\Gamma_g \backslash X^+$ 都典范地同构于某个复[[拟射影簇]]的解析化
[@Milne2005, 定理 3.12]，
从而它们的无交并 $\operatorname{Sh}_K (G, X)$ 也是复代数簇。

## 参考文献

```bibliography
Gao2025:
  type: preprint
  author: Ziyang Gao
  title: An Introduction to Shimura Varieties and Their Compactifications
  year: 2025
  url: 'https://ziyangjeremygao.github.io/LectureNotes/ShimuraVarieties.pdf'
  note: Lecture notes, 8 December 2025

Milne2005:
  type: incollection
  author: James S. Milne
  title: Introduction to Shimura Varieties
  booktitle: Harmonic Analysis, the Trace Formula, and Shimura Varieties
  editor: [James Arthur, David Ellwood, Robert Kottwitz]
  series: Clay Mathematics Proceedings
  volume: 4
  publisher: American Mathematical Society
  year: 2005
  pages: 265--378
  url: 'https://www.jmilne.org/math/xnotes/svi.pdf'
  note: Providence, RI; revised online version, 16 September 2017
```

```terms
Shimura 簇:
  en: Shimura variety
  fr: variété de Shimura :f
  de: Shimura-Varietät :f
  ja: 志<し>村<むら>多<た>様<よう>体<たい>

Shimura 数据:
  en: Shimura datum
  fr: donnée de Shimura :f
  de: Shimura-Datum :n
  ja: 志<し>村<むら>データ
```
