---
title: Lie 代数
aliases: [李代数]
categories: [Lie 理论]
navboxes: [代数结构, Lie 理论]
---

**Lie 代数**是一种[[代数结构]]，
是 [[Lie 理论]]的主要研究对象之一，
它刻画了 [[Lie 群]]的[[无穷小]]元素。
Lie 群刻画几何对象的连续[[对称性]]，
而 Lie 代数刻画几何对象的无穷小对称变换。
例如，三维空间中的[[球面]] $S^2$ 关于任何旋转都对称，
对应的无穷小的对称变换就是“无穷小旋转”。
所有无穷小旋转构成一个 Lie 代数，
在这个例子中是[[特殊正交 Lie 代数]] $\mathfrak{so} (3; \mathbb{R})$。

准确地说，Lie 代数是一个[[向量空间]]，
带有[[二元运算]] $[-, -]$，称为 **Lie 括号**。
Lie 括号可以视为[[结合代数]]中[[交换子]]
\[
[x, y] = x y - y x
\]
的推广。Lie 括号应满足类似交换子的性质，
但不一定来自于某个结合代数中的交换子。
换言之，在一般的 Lie 代数中，并不总能定义乘法 $x y$ 和 $y x$，使得上式成立。

[[Lie 代数表示]]是 [[Lie 理论]]和[[表示论]]中的重要研究对象。
给定 Lie 代数 $\mathfrak{g}$，
其表示就是带有 $\mathfrak{g}$ 所描述的无穷小对称性的[[向量空间]]。
Lie 代数的表示论可以通过其[[泛包络代数]]而与[[结合代数]]的表示论联系起来。

在[[特征 (代数)|特征]] $0$ 的[[代数闭域]]上，
某一类较为简单的 Lie 代数，称为[[半单 Lie 代数]]，
能够通过 [[Dynkin 图]]完全分类，即[[半单 Lie 代数分类定理]]。

## 定义

::: definition [Lie 代数] {@Lie-代数}
设 $k$ 是[[交换环]]。
则 $k$ 上的 **Lie 代数**是二元组 $(\mathfrak{g}, \ [-,-])$，
其中

- $\mathfrak{g}$ 是 $k$-[[模]]。

- $[-, -] \colon \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$
  是 $k$-[[双线性映射]]，称为 **Lie 括号**。

它们应满足以下条件：

- （**[[交错性]]**）
  对任意 $x \in \mathfrak{g}$，有
  \[
  [x, x]= 0.
  \]

- （**[[Jacobi 恒等式]]**）
  对任意 $x, y, z \in \mathfrak{g}$，有
  \[
  [x, [y, z]] + [y, [z, x]] + [z, [x, y]] = 0.
  \]

在无歧义时，我们直接称 $\mathfrak{g}$ 是 Lie 代数。
:::

在上述定义中，交错性也蕴涵了以下性质：对任意 $x, y \in \mathfrak{g}$，
\[
[x, y] = -[y, x].
\]
这可以由 $[x + y, x + y] = 0$ 及 Lie 括号的双线性而得出。
事实上，若 $k$ 是[[特征 (代数)|特征]]不为 $2$ 的[[域]]，
则上面的性质等价于定义中的交错性，
因此在不考虑特征 $2$ 的情形时，这也常常用作交错性的定义。

::: definition [Lie 代数同态] {@Lie-代数同态}
设 $(\mathfrak{g}, \ [-, -]_{\mathfrak{g}})$ 与
$(\mathfrak{h}, \ [-, -]_{\mathfrak{h}})$ 是[[交换环]] $k$ 上的两个
Lie 代数（@Lie-代数）。
它们之间的**同态**是指 $k$-[[模同态]]
\[
f \colon \mathfrak{g} \longrightarrow \mathfrak{h} ,
\]
使得对任意 $x, y \in \mathfrak{g}$，有
\[
f([x, y]_{\mathfrak{g}}) = [ f(x), f(y) ]_{\mathfrak{h}}.
\]
:::

::: definition [Lie 代数范畴]
设 $k$ 是[[交换环]]。
则 $k$ 上的所有 Lie 代数（@Lie-代数）
及它们之间的同态（@Lie-代数同态）
构成一个[[范畴]]，
称为 $k$ 上的 **Lie 代数范畴**，
记为 $\mathsf{LieAlg}_{k}$。
:::

## 例子

- 设 $k$ 是[[交换环]]，$A$ 是 $k$ 上的[[结合代数]]。对 $x, y \in A$，定义
  \[
  [x, y] = x y - y x.
  \]
  则 $(A, [-, -])$ 是 $k$ 上的 Lie 代数。

  - 特别地，令 $A$ 为[[矩阵代数]] $\mathrm{M}_n (k)$，
    则得到的 Lie 代数即为 [[一般线性 Lie 代数]] $\mathfrak{gl} (n; k)$，
    它是[[一般线性群]] $\mathrm{GL} (n; k)$ 的 Lie 代数。

- 三维空间 $\mathbb{R}^3$ 中，[[向量外积]]赋予了它 Lie 代数的结构。
  事实上，这就是[[特殊正交 Lie 代数]] $\mathfrak{so} (3; \mathbb{R})$。

- 对 [[Lie 群]] $G$，其在单位元 $1 \in G$ 处的[[切空间]] $\mathfrak{g} = \mathrm{T}_1 G$
  自然地带有 Lie 代数的结构。此即 [[Lie 群–Lie 代数对应]]。

- [[光滑流形]] $X$ 上所有光滑[[向量场]]在 [[Lie 括号 (微分几何)|Lie 括号]]下构成
  $\mathbb{R}$ 上的 Lie 代数。

## 性质

### Lie 群–Lie 代数对应

[[Lie 群–Lie 代数对应]]表明，
对任意（实或复）[[Lie 群]] $G$，
其在单位元 $1 \in G$ 处的[[切空间]] $\mathfrak{g} = \mathrm{T}_1 G$
自然地带有（$\mathbb{R}$ 或 $\mathbb{C}$ 上）Lie 代数的结构。
并且，Lie 群间的同态也会通过[[切映射]]而诱导 Lie 代数间的同态。
该构造实际上是相应 Lie 群范畴到 Lie 代数范畴的[[函子]]。

更进一步，这一构造实际上给出了[[单连通空间|单连通]]
（实或复）Lie 群范畴到有限维 Lie 代数范畴的[[范畴等价]]。
这也就意味着，对任何有限维 Lie 代数 $\mathfrak{g}$，
都能找到唯一的单连通 Lie 群 $G$，使得其 Lie 代数为 $\mathfrak{g}$。

```terms
Lie 代数:
  en: Lie algebra
  fr: algèbre de Lie :f
  de: Lie-Algebra :f
  ja: Lie 代<だい>数<すう>
  ko: Lie 대수 (Lie 代數)
```
