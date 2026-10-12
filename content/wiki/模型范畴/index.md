---
title: 模型范畴
aliases: [模型结构]
categories: [同伦代数]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [范畴论, 同伦代数]
---

**模型范畴**是一类带额外结构的[[范畴]]，
是[[同伦代数]]中的基本概念。
大致来说，模型范畴所具有的结构赋予该范畴类似[[拓扑空间范畴]]的性质，
例如可以谈论[[态射]]间的[[同伦]]、[[对象]]间的[[同伦等价]]等概念。
例如，[[链复形]]的范畴就可以带上额外结构而成为模型范畴，
相应的同伦、同伦等价的概念就是链复形间的[[链同伦]]、[[链同伦等价]]等。
模型范畴的语言统一了[[代数拓扑]]、[[同调代数]]这两种相似的理论，
并将其应用于更多的情形，这也就是同伦代数的基本想法。

在[[高阶范畴论]]的观点下，
模型范畴描述了[[弱等价范畴]]通过[[局部化 (范畴论)|局部化]]
而得到的 [[$(\infty, 1)$-范畴]]的性质。
$(\infty, 1)$-范畴常常难以具体操作，
但如果知道它是某个模型范畴的局部化，
就能具体地计算其诸多性质。

## 想法

模型范畴是指[[范畴]] $\mathcal{C}$，
带有以下三类特殊的[[态射]]：

- 一类态射 $\mathsf{W}$，称为 **[[弱等价]]**，
  是一种比[[同构]]更弱的等价的概念。
  常见的例子是[[拓扑空间范畴]]中，
  [[拓扑空间]]的[[同伦等价]]，或[[弱同伦等价]]等，
  也可以是[[链复形]]间的[[链同伦等价]]、[[拟同构]]等。

- 一类态射 $\mathsf{Cof}$，称为 **[[余纤维化]]**，
  可以视为“性质较好的[[单射]]”。
  例如，可以取拓扑空间的 [[Hurewicz 余纤维化]]。

- 一类态射 $\mathsf{Fib}$，称为 **[[纤维化]]**，
  粗略地说，可以想象为[[空间]]之间类似[[纤维丛]]的态射，
  但仅要求同一连通分支上的[[纤维]]互相[[同伦等价]]，而不要求同胚。
  例如，可以将这类态射取为拓扑空间的 [[Hurewicz 纤维化]]。

一个典型的例子是，令 $\mathcal{C} = \mathsf{Top}$ 为[[拓扑空间范畴]]，此时可以取：

- $\mathsf{W}$ 为所有[[同伦等价]]。

- $\mathsf{Cof}$ 为所有[[闭映射|闭]] [[Hurewicz 余纤维化]]。

- $\mathsf{Fib}$ 为所有 [[Hurewicz 纤维化]]。

在模型范畴中，上述关于余纤维化、纤维化的直观印象
是由态射的提升性质来具体描述的。
大致来说，给定 $\mathcal{C}$ 中的实线图表
\[
\begin{tikzcd}
  A \ar[r] \ar[d, "i"'] & X \ar[d, "p"] \\
  B \ar[r] \ar[ur, dashed] & Y \rlap{,}
\end{tikzcd}
\]
若存在虚线箭头使得整个图表交换，
就称 $i$ 关于 $p$ 具有提升性质（详见 @提升性质）。
例如，为刻画 $p$ 是纤维化这一性质，
就可以要求对某类态射 $i$，上述图表存在提升。
若令 $i$ 为所有形如 $A \times \{ 0 \} \hookrightarrow A \times [0, 1]$
的映射，得到的概念就是 [[Hurewicz 纤维化]]。

在模型范畴中，余纤维化、纤维化的结构由以下两个提升性质刻画：

- 若 $i \in \mathsf{Cof} \cap \mathsf{W}$，且 $p \in \mathsf{Fib}$，
  则上述图表存在提升。

- 若 $i \in \mathsf{Cof}$，且 $p \in \mathsf{Fib} \cap \mathsf{W}$，
  则上述图表存在提升。

## 定义

::: definition [提升性质] {@提升性质}
设 $\mathcal{C}$ 是[[范畴]]，
$J \subset \operatorname{Mor} (\mathcal{C})$ 是一[[类]][[态射]]。

- 称 $\mathcal{C}$ 中态射 $p \colon X \to Y$ 对 $J$
  具有**右提升性质**，
  如果对 $\mathcal{C}$ 中任意实线图表
  \[
  \begin{tikzcd}
    A \ar[r] \ar[d] & X \ar[d,"p"] \\
    B \ar[r] \ar[ur, dashed] & Y \rlap{,}
  \end{tikzcd}
  \]
  其中态射 $A \to B$ 在 $J$ 中，
  存在虚线箭头使图表交换。
  所有具有此性质的态射 $p$ 构成的类记为 $\operatorname{RLP}(J)$。

- 称 $\mathcal{C}$ 中态射 $i \colon A \to B$ 对 $J$
  具有**左提升性质**，
  如果对 $\mathcal{C}$ 中任意实线图表
  \[
  \begin{tikzcd}
    A \ar[r] \ar[d,"i"'] & X \ar[d] \\
    B \ar[r] \ar[ur, dashed] & Y \rlap{,}
  \end{tikzcd}
  \]
  其中态射 $X \to Y$ 在 $J$ 中，
  存在虚线箭头使图表交换。
  所有具有此性质的态射 $i$ 构成的类记为 $\operatorname{LLP}(J)$。

:::

::: definition [弱分解系]
**[[弱分解系]]** 是三元组 $(\mathcal{C}, \mathsf{L}, \mathsf{R})$，
其中 $\mathcal{C}$ 是范畴，
$\mathsf{L},\mathsf{R}\subset\operatorname{Mor}(\mathcal{C})$ 是两类态射，
使得

- $\mathsf{L}=\operatorname{LLP}(\mathsf{R})$ 且
  $\mathsf{R}=\operatorname{RLP}(\mathsf{L})$。

- $\mathcal{C}$ 中每个态射 $f \colon A \to B$ 都能分解为
  \[
  A \xrightarrow l X \xrightarrow r B,
  \]
  其中 $l\in\mathsf{L}$ 且 $r\in\mathsf{R}$。
  并且，这样的分解关于 $f$ 具有函子性。

:::

若 $(\mathcal{C},\mathsf{L},\mathsf{R})$ 是弱分解系，
则从定义不难得出以下性质。

- $\mathsf{L}$ 和 $\mathsf{R}$ 均包含 $\mathcal{C}$ 中所有同构。

- $\mathsf{L}$ 和 $\mathsf{R}$ 均关于态射复合封闭。

- $\mathsf{L}$ 关于推出封闭，$\mathsf{R}$ 关于拉回封闭。

::: definition
**模型范畴**是四元组 $(\mathcal{C},\mathsf{W},\mathsf{Cof},\mathsf{Fib})$，
其中 $\mathcal{C}$ 是范畴，
$\mathsf{W},\mathsf{Cof},\mathsf{Fib}\subset\operatorname{Mor}(\mathcal{C})$
是三类态射，满足以下条件：

- $\mathcal{C}$ [[完备范畴|完备]]、[[余完备范畴|余完备]]，
  也就是具有所有小[[极限 (范畴论)|极限]]、小[[余极限]]。

- $(\mathcal{C},\mathsf{W})$ 是[[弱等价范畴]]。

- $(\mathcal{C},\mathsf{Cof}\cap\mathsf{W},\mathsf{Fib})$ 是[[弱分解系]]。

- $(\mathcal{C},\mathsf{Cof},\mathsf{Fib}\cap\mathsf{W})$ 是[[弱分解系]]。

此时，也说这三类态射定义了 $\mathcal{C}$ 上的**模型结构**。
:::

我们引入以下术语：

- $\mathsf{W}$ 中态射称为 **[[弱等价]]**。

- $\mathsf{Cof}$ 中态射称为 **[[余纤维化]]**。

- $\mathsf{Fib}$ 中态射称为 **[[纤维化]]**。

- $\mathsf{Cof} \cap \mathsf{W}$ 中态射称为 **[[平凡余纤维化]]**。

- $\mathsf{Fib} \cap \mathsf{W}$ 中态射称为 **[[平凡纤维化]]**。

- 称对象 $X \in \mathcal{C}$ 为 **[[余纤维性对象]]**，
  如果 $\varnothing \to X$ 是余纤维化，
  其中 $\varnothing$ 是 $\mathcal{C}$ 的始对象。
  这里，始对象存在，因为 $\mathcal{C}$ 余完备。

- 称对象 $X \in \mathcal{C}$ 为 **[[纤维性对象]]**，
  如果 $X \to {*}$ 是纤维化，
  其中 $*$ 是 $\mathcal{C}$ 的终对象。
  这里，终对象存在，因为 $\mathcal{C}$ 完备。

注意到，若给定弱等价范畴 $(\mathcal{C}, \mathsf{W})$，
则 $\mathsf{Cof}$ 和 $\mathsf{Fib}$ 两者中，任一个都能确定另一个，
因为弱分解系的两类态射能互相确定。

另外，注意到余纤维化、平凡余纤维化都关于[[推出]]封闭，
而纤维化、平凡纤维化都关于[[拉回 (范畴论)|拉回]]封闭。

## 例子

```terms
模型范畴:
  en: model category
  fr: catégorie de modèles :f
  de: Modellkategorie :f
  ja: モデル圏<けん>
模型结构:
  en: model structure
  fr: structure de catégorie de modèles :f
  de: Modellkategoriestruktur :f
```
