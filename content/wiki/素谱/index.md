---
title: 素谱
aliases: [谱（交换代数）]
categories: [交换代数]
navboxes: [交换代数, 概形论]
---

::: convention
在本文中，

- 所有[[环]]都指[[交换环]]。

:::

**素谱**是[[交换代数]]和[[代数几何]]中的基本构造。
给定[[交换环]] $A$，其素谱 $\operatorname{Spec} A$ 是一个[[拓扑空间]]，
其中的点对应于 $A$ 的[[素理想]]。
素谱也带有自然的几何结构，即[[环化空间]]的结构，
从而成为[[仿射概形]]。

在[[代数–几何对偶]]下，
交换环 $A$ 作为代数对象，其对应的几何对象就是其素谱 $\operatorname{Spec} A$。
直观来说，我们将 $A$ 的元素视为 $\operatorname{Spec} A$ 上的[[函数]]，
从而 $\operatorname{Spec} A$ 上的所有函数构成的环恰为 $A$ 自身。

例如，对[[域]] $k$ 而言，
$n$ 元[[多项式环]] $A = k [x_1, \dotsc, x_n]$ 的素谱就是
$k$ 上的 $n$ 维[[仿射空间]]，$\operatorname{Spec} A = \mathbb{A}_k^n$，
也就是 $k$ 上的 $n$ 维[[向量空间]] $k^n$ 在[[代数几何]]中的样子。
直观地看，$k^n$ 上的所有多项式函数构成的环就是 $n$ 元多项式环 $A$，
这与上述对代数–几何对偶的描述相符。
更严格地看，若 $k$ 为[[代数闭域]]，
则由 [[Hilbert 零点定理]]，
知道向量空间 $k^n$ 的元素与 $A$ 的[[极大理想]]一一对应，
而 $A$ 的其余素理想则对应了 $\operatorname{Spec} A$ 中的一些“多余的点”，
即[[普遍点]]。这些点虽然看似无用，但却是现代代数几何中十分重要的工具。

## 定义

### 作为拓扑空间

::: definition [素谱]
设 $A$ 为[[交换环]]。则 $A$ 的**素谱**，简称**谱**，
指的是 $A$ 的所有[[素理想]]构成的[[集合]]，记作 $\operatorname{Spec}A$。
它带有以下[[拓扑空间|拓扑]]，称为 **[[Zariski 拓扑]]**：

- 对[[理想]] $I \subseteq A$，定义其**零点集**为
  $\operatorname{Spec}A$ 的子集
  \[
  V(I)=\{\mathfrak{p}\in\operatorname{Spec}A\mid
  I\subseteq\mathfrak{p}\}.
  \]
  我们规定，子集 $S \subset \operatorname{Spec}A$ 是[[闭集]]，
  当且仅当 $S$ 是某个理想 $I$ 的零点集，即 $S = V (I)$。

:::

这的确定义出拓扑，因为：

- $V(1)=\varnothing$，即空集是闭集。

- 对理想 $I,J$，由[[素理想]]的性质有
  $V(IJ)=V(I)\cup V(J)$，即两个闭集之并是闭集。

- 对一[[族]]理想 $(I_\lambda)_{\lambda\in\Lambda}$，
  $$
  \bigcap_{\lambda\in\Lambda}V(I_\lambda)=
  V\left(\sum_{\lambda\in\Lambda}I_\lambda\right),
  $$
  即闭集的任意交是闭集。

我们称 $V (I)$ 为零点集，因为可以将 $A$ 的元素视为 $\operatorname{Spec} A$ 上的函数，
故理想 $I$ 可视为 $\operatorname{Spec} A$ 上的一族函数。
子集 $V (I)$ 就是这些函数的公共零点构成的集合。

对 $a\in A$，也以 $V(a)$ 记 $V((a))$，
即 $a$ 生成的[[主理想]] $(a)$ 的零点集。

::: definition [主开集]
对 $a\in A$，记
\[
D(a)=\operatorname{Spec}A \setminus V(a),
\]
它是 $\operatorname{Spec}A$ 中开集，
称为 $a$ 对应的**主开集**。
:::

### 作为环化空间

我们在拓扑空间 $\operatorname{Spec} A$ 上定义环[[层]]
$\mathcal{O}_{\operatorname{Spec} A}$，
从而将 $\operatorname{Spec} A$ 视为[[局部环化空间]]。

::: definition
定义 $\operatorname{Spec} A$ 上的环层
$\mathcal{O}_{\operatorname{Spec} A}$ 如下：

- 对 $a \in A$，在主开集 $D (a)$ 上，定义
  \[
  \mathcal{O}_{\operatorname{Spec} A} ( D (a) ) = A [a^{-1}]
  \]
  为 $A$ 关于 $a$ 的[[局部化]]。

- 若 $D (b) \subseteq D (a)$，
  则可验证 $a$ 在 $A [b^{-1}]$ 中可逆，
  故有自然的限制映射 $A [a^{-1}] \to A [b^{-1}]$。

由以下 @拓扑基，主开集构成 $\operatorname{Spec} A$ 的[[拓扑基]]。
可以验证这里定义了该拓扑基上的[[拓扑基上层]]，
从而给出了 $\operatorname{Spec} A$ 上的层。

可以验证 $(\operatorname{Spec} A, \mathcal{O}_{\operatorname{Spec} A})$
为[[局部环化空间]]，称为 $A$ 的**素谱**，
也即 $A$ 对应的[[仿射概形]]。
:::

注意到以下特例。

- $\mathcal{O}_{\operatorname{Spec} A}$ 的[[整体截面]]环为
  $\mathcal{O}_{\operatorname{Spec} A} ( \operatorname{Spec} A ) = A$，
  因为 $\operatorname{Spec} A = D (1)$。

## 例子

- [[域]] $k$ 的素谱是[[单点空间]]，$\operatorname{Spec} k = \{ 0 \}$。

- [[离散赋值环]] $(R,\mathfrak{m})$ 的素谱是两个点 $0$ 与 $\mathfrak{m}$，
  $\{0\}$ 为开，$\{\mathfrak{m}\}$ 为闭，$\{0\}$
  的闭包包含 $\mathfrak{m}$。

- [[整数环]] $\mathbb{Z}$ 的素谱是
  $$
  \{(2),(3),(5),(7),\ldots,0\},
  $$
  其中开集为包含 $0$、补集有限的集合，或者空集。

- 域上一元多项式环，或一般的[[主理想整环]]的素谱，
  都与上例类似，包含各个非零素理想以及 $0$，开集亦为包含
  $0$、补集有限的集合，或者空集。

- $\mathbb{Z}[x]$ 的素谱就比较复杂。它大体上有三层：
  [[极大理想]]、[[主理想|主]]素理想、$0$。
  每一层的点的闭包都只会包含自己以及前面的层的点。
  换言之，其 [[Krull 维数]]是 $2$。

- [[Boole 环]]的素谱是其 [[Stone 空间]]。
  更一般地，如有[[紧空间|紧]] [[Hausdorff 空间|Hausdorff]]
  [[完全不连通空间]] $X$ 以及域 $k$，环
  $$
  C(X,k)=\{\text{$X$ 到 $k$ 的局部常值函数}\}
  $$
  的素谱是 $X$。

## 性质

### 拓扑性质

::: proposition
素谱总是 [[$\mathrm{T}_0$ 空间|$\mathrm{T}_0$]]，但未必
[[$\mathrm{T}_1$ 空间|$\mathrm{T}_1$]]。$\operatorname{Spec}A$ 中，
点 $\mathfrak{p}$ 的闭包是
$$
\{\mathfrak{q}\in\operatorname{Spec}A\mid
\mathfrak{q}\supseteq\mathfrak{p}\}.
$$
所以一个点是闭点当且仅当它是[[极大理想]]。
:::

::: proposition {@拓扑基}
有限个主开集的交仍是主开集，且主开集构成素谱的[[拓扑基]]。
:::

::: proposition
素谱是[[紧空间]]，且其中开集为紧当且仅当是有限个主开集之并，
亦即是有限生成理想的零点集之补。
:::

::: proposition
对素谱 $\operatorname{Spec}A$ 的任一[[不可约闭子集]] $Z$，
存在唯一一点 $\mathfrak{p}\in\operatorname{Spec}A$ 使得 $Z=
  \overline{\{\mathfrak{p}\}}$ 是其闭包，此 $\mathfrak{p}$
称为 $Z$ 的 **[[普遍点]]**。换言之，素谱都是[[朴实空间]]。
:::

奇妙的是，拓扑空间能否成为素谱，刻画并不复杂：

::: theorem [Hochster]
[[拓扑空间]] $X$ 是某个环的素谱，当且仅当：

- $X$ 是[[朴实空间]]。

- $X$ 是[[紧空间]]。

- $X$ 有紧开子集组成的拓扑基，对有限交封闭。

:::

::: proof
证明复杂，参见条目[[谱空间]]。
:::

### 作为位象

素谱作为[[拓扑空间]]视为[[位象]]，可以无需提到素理想而描述。

::: proposition
沿用前文记号，$\operatorname{Spec}A$ 的开区域
由一族元素 $D(f)$ 在有限交和任意并下自由生成，
其中 $f \in A$，满足对于任何自然数 $n$ 都有

```math
\begin{aligned}
    D\left(\sum_{i=1}^n f_i\right) &\le \bigvee_{i=1}^n D(f_i), \\
    D\left(\prod_{i=1}^n f_i\right) &= \bigwedge_{i=1}^n D(f_i).
\end{aligned}
```

:::

这些关系下自由生成的开区域与根式理想一一对应，
而这个位象的点集 $1 \to \operatorname{Spec}A$ 与素理想一一对应。
因此这也可以作为使用素理想定义素谱的动机之一。

可以证明拓扑空间 $\operatorname{Spec} A$ 看作位象之后
与该定义得到的位象同胚。
事实上当 $A$ 是多项式环时——或者更一般的 [[Jacobson 环]]——
拓扑空间 $\operatorname{MaxSpec} A$ 对应的位象也如此。
由此可见素谱也可以看作是[[极大谱]]的朴实化。
此事的证明基本就是 Jacobson 环的零点定理。

因为位象是意象的去范畴化，我们可以考虑这个位象对应的[[景]]。
其底[[预序]]的元素与 $A$ 的元素一一对应，
但是写作 $D(f), f \in A$ 以示区分。
$D(f) \le D(g)$ 当且仅当
$\exists n \in \mathbb{N}, h \in A, f^n = g h$。
一族元素 $D(f_i)$ [[Grothendieck 拓扑|覆盖]] $D(g)$ 当且仅当
理想 $\sqrt{(f_1, \dots, f_n)} = \sqrt{(g)}$。
这种表述与其他表述不同的是不涉及 $A$ 的幂集，
因此便于在[[直谓数学]]中使用。

```terms
素谱:
  en: prime spectrum
  de: Primspektrum
  fr: spectre premier
  grc: πρῶτον φάσμα
  la: spectrum primum
主开集:
  en: principal open
  de: Hauptoffene
  fr: ouvert principal
  grc: κύριον ἀνοικτόν
  la: aperta principalis
```
