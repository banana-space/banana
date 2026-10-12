---
title: 多元范畴
aliases: [有色算畴]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “定义”一节中，多元范畴间自然变换的条件 $a_y \circ (f) = f \circ (a_{x_i})_{i \in I}$ 似乎应为 $a_y \circ (F(f)) = G(f) \circ (a_{x_i})_{i \in I}$。
navboxes: [范畴论]
---

**多元范畴**（也称为**有色算畴**）是[[范畴]]的一种推广。
在范畴中，态射总是从一个对象出发到另一个对象，
例如 $f \colon x \to y$。
在多元范畴中，则允许态射从多个对象出发到一个对象，
例如 $f \colon (x_1, \dotsc, x_n) \to y$。

多元范畴常用于定义[[范畴代数]]结构。
这里的多元态射对应[[代数结构]]中的多元运算，
例如[[乘法]]（二元运算）、单位元（零元运算），
并给这些运算以约束条件，例如[[结合律]]、[[单位律]]。

然而，并不是所有运算、运算律都能由多元范畴描述。
例如，[[群对象]]中的逆元就无法在多元范畴中描述，
因为在多元范畴中，没有[[对角态射]] $x \to (x, x)$。

多元范畴是[[算畴]]的推广，也是其[[胚化]]。
换言之，算畴是只有一个对象的多元范畴。

## 定义

在定义多元范畴时，我们会遇到如下麻烦。对多元范畴 $\mathcal{C}$，
我们希望有态射集
\[
\mathcal{C} (x_1, \dotsc, x_n; y),
\]
其中 $x_1, \dotsc, x_n, y$ 为 $\mathcal{C}$ 的对象。
这一态射集不应取决于 $x_1, \dotsc, x_n$ 的顺序。
因此，若记 $\mathfrak{S}_n$ 为[[置换群]]，
则对任何 $\sigma \in \mathfrak{S}_n$，应该有同构
\[
\mathcal{C} (x_1, \dotsc, x_n; y) \simeq
\mathcal{C} (x_{\sigma (1)}, \dotsc, x_{\sigma (n)}; y).
\]
特别地，当这些对象 $x_i$ 中有某些相同时，
这将给出该态射集的自同构。
使用[[函子]]的语言能够简洁地描述这一现象，
故我们先作如下定义。

::: definition [置换群胚]
设 $X$ 是[[集合]]或[[类]]。定义[[群胚]]
$\mathsf{Perm} (X)$ 如下：

- 对象：$X$ 中元素的有限序列 $(x_i \in X)_{i \in I}$，
  其中 $I$ 为[[有限集]]。

- 态射：从 $(x_i)_{i \in I}$
  到 $(x'_j)_{j \in J}$ 的态射为[[双射]] $\sigma \colon I \simeq J$，
  使得对每个 $i \in I$，都有 $x_i = x'_{\sigma (i)}$。

称群胚 $\mathsf{Perm} (X)$ 为 $X$ 的**置换群胚**。
:::

::: definition [多元范畴]
**多元范畴** $\mathcal{C}$ 由以下信息构成：

- 一个[[类]] $\operatorname{Ob} (\mathcal{C})$，
  其元素称为 $\mathcal{C}$ 的 **[[对象]]**。

- 对任意[[有限集]] $I$，
  及任意一族对象 $(x_i \in \operatorname{Ob} (\mathcal{C}))_{i \in I}$，
  $y \in \operatorname{Ob} (\mathcal{C})$，
  有一个[[集合]]
  \[
  \mathcal{C} ((x_i)_{i \in I} \, ; \, y),
  \]
  其元素称为从各 $x_i$ 到 $y$ 的 **[[多元态射]]**，
  也称为**多元运算**。

  确切地说，我们要求有[[函子]]
  \[
  \mathcal{C} (-; -) \colon
  \mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))
  \times \operatorname{Ob} (\mathcal{C})
  \longrightarrow \mathsf{Set},
  \]
  其中 $\operatorname{Ob} (\mathcal{C})$ 看作[[离散范畴]]，
  $\mathsf{Set}$ 是[[集合范畴]]。
  注意，这里的函子性仅用来描述态射集在各
  $x_i$ 的置换下不变这一事实，
  而并不描述关于 $\mathcal{C}$ 的函子性。

- 对任意 $x \in \operatorname{Ob} (\mathcal{C})$，
  有一个 **[[恒同态射]]**
  \[
  \mathbb{1}_x \in \mathcal{C} (x; x).
  \]

- 对任意有限集 $I, J$，[[映射 (集合论)|映射]] $\alpha \colon I \to J$，
  及对象
  \[
  (x_i \in
  \operatorname{Ob} (\mathcal{C}))_{i \in I} \ ,
  \quad
  (y_j \in \operatorname{Ob} (\mathcal{C}))_{j \in J} \ ,
  \quad
  z \in \operatorname{Ob} (\mathcal{C}),
  \]
  有一个 **[[复合]]** 映射
  \[
  \begin{aligned}
    \circ \colon
    \biggl(
      \prod_{j \in J}
      \mathcal{C} ((x_i)_{i \in \alpha^{-1}(j)} \, ; \, y_j)
    \biggr)
    \times \mathcal{C} ((y_j)_{j \in J} \, ; \, z)
    & \longrightarrow \mathcal{C} ((x_i)_{i \in I} \, ; \, z), \\
    ((f_j)_{j \in J} \, , \, g)
    & \longmapsto g \circ (f_j)_{j \in J} \, ,
  \end{aligned}
  \]

  确切地说，
  我们要求有 $\mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))
    \times \operatorname{Ob} (\mathcal{C}) \to \mathsf{Set}$
  的函子间的[[自然变换]]
  \[
  \circ \colon F \Longrightarrow \mathcal{C} (-; -),
  \]
  其中 $F$ 定义为
  \[
  F ((x_i)_{i \in I}, z) =
  \operatornamewithlimits{colim}_{
    (y_j)_{j \in J} \in \mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))
  } \
  \coprod_{\alpha \colon I \to J} \biggl[
    \biggl(
      \prod_{j \in J}
      \mathcal{C} ((x_i)_{i \in \alpha^{-1}(j)} \, ; \, y_j)
    \biggr)
    \times \mathcal{C} ((y_j)_{j \in J} \, ; \, z)
  \biggr].
  \]
  这里仍会遇到集合论问题，即余极限不一定存在，
  因为 $\mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))$ 不一定是[[小范畴]]。
  为解决此问题，可以考虑对群胚
  $\mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))$ 的对象 $(y_j)_{j \in J}$
  的每个等价类，分别取余极限，得到一族函子 $F$，
  并要求 $\circ$ 给出其中每个函子出发的自然变换。

它们满足以下公理：

- （**[[单位律]]**）
  对任意有限集 $I$，
  任意对象 $(x_i \in \operatorname{Ob} (\mathcal{C}))_{i \in I}$，
  $y \in \operatorname{Ob} (\mathcal{C})$，
  及任意 $f \in \mathcal{C} (x_1, \dotsc, x_n; y)$，有
  \[
  \mathbb{1}_y \circ (f) = f =
  f \circ (\mathbb{1}_{x_1}, \dotsc, \mathbb{1}_{x_n}).
  \]

- （**[[结合律]]**）
  对任意有限集 $I, J, K$，映射
  $\alpha \colon I \to J$，
  $\beta \colon J \to K$，
  对象
  \[
  (x_i \in \operatorname{Ob} (\mathcal{C}))_{i \in I} \ ,
  \quad
  (y_j \in \operatorname{Ob} (\mathcal{C}))_{j \in J} \ ,
  \quad
  (z_k \in \operatorname{Ob} (\mathcal{C}))_{k \in K} \ ,
  \quad
  w \in \operatorname{Ob} (\mathcal{C}),
  \]
  及任意
  \[
  \bigl(
    f_j \in \mathcal{C} ( (x_i)_{i \in \alpha^{-1}(j)} \, ; \, y_j )
  \bigr)_{j \in J},
  \quad
  \bigl(
    g_k \in \mathcal{C} ( (y_j)_{j \in \beta^{-1}(k)} \, ; \, z_k )
  \bigr)_{k \in K},
  \quad
  h \in \mathcal{C} ((z_k)_{k \in K} \, ; \, w),
  \]
  有
  \[
  (h \circ (g_k)_{k \in K}) \circ (f_j)_{j \in J} = h \circ (g_k \circ (f_j)_{j \in \beta^{-1}(k)})_{k \in K}.
  \]

:::

与范畴论的通常约定一致，
我们以 $x \in \mathcal{C}$ 为 $x \in \operatorname{Ob} (\mathcal{C})$ 的简写，
并以 $f \colon (x_1, \dotsc, x_n) \to y$ 表示
$f \in \mathcal{C}(x_1, \dotsc, x_n; y)$。

多元范畴间也有函子的概念。

::: definition [多元范畴函子]
设 $\mathcal{C}$、$\mathcal{D}$ 是多元范畴。
**函子** $F \colon \mathcal{C} \to \mathcal{D}$ 由以下信息给出：

- 一个映射
  \[
  F \colon \operatorname{Ob} (\mathcal{C})
  \longrightarrow \operatorname{Ob} \mathcal{D},
  \]
  将 $\mathcal{C}$ 的对象 $x$ 映到 $\mathcal{D}$ 的对象 $F(x)$。

- 对任意有限集 $I$，
  任意对象 $(x_i \in \operatorname{Ob} (\mathcal{C}))_{i \in I}$，
  $y \in \operatorname{Ob} (\mathcal{C})$，
  有一个映射
  \[
  F \colon \mathcal{C} ((x_i)_{i \in I} \, ; \, y)
  \longrightarrow \mathcal{D} ((F(x_i))_{i \in I} \, ; \, F(y)),
  \]
  将 $\mathcal{C}$ 的态射 $f \colon (x_i)_{i \in I} \to y$
  映到 $\mathcal{D}$ 的态射 $F(f) \colon (F(x_i))_{i \in I} \to F(y)$。

  确切地说，我们要求有 $\mathsf{Perm} (\operatorname{Ob} (\mathcal{C}))
    \times \operatorname{Ob} (\mathcal{C}) \to \mathsf{Set}$ 的
  函子间的[[自然变换]]
  \[
  \mathcal{C} (-; -) \Longrightarrow
  \mathcal{D} (F(-); F(-)).
  \]

它们满足以下条件：

- 对每个 $x \in \operatorname{Ob} (\mathcal{C})$，有
  \[
  F (\mathbb{1}_x) = \mathbb{1}_{F(x)}.
  \]

- 对任意有限集 $I, J$，映射 $\alpha \colon I \to J$，
  对象
  \[
  (x_i \in
  \operatorname{Ob} (\mathcal{C}))_{i \in I} \ ,
  \quad
  (y_j \in \operatorname{Ob} (\mathcal{C}))_{j \in J} \ ,
  \quad
  z \in \operatorname{Ob} (\mathcal{C}),
  \]
  及任意
  \[
  \bigl(
    f_j \in \mathcal{C} ( (x_i)_{i \in \alpha^{-1}(j)} \, ; \, y_j )
  \bigr)_{j \in J} \ ,
  \quad
  g \in \mathcal{C} ((y_j)_{j \in J} \, ; \, z),
  \]
  有
  \[
  F (g \circ (f_j)_{j \in J}) = F(g) \circ (F(f_j))_{j \in J}.
  \]

:::

::: definition [多元范畴自然变换]
设 $\mathcal{C}$、$\mathcal{D}$ 是多元范畴，
$F, G \colon \mathcal{C} \to \mathcal{D}$ 是函子。
则**自然变换** $a \colon F \Rightarrow G$ 由以下信息给出：

- 对 $x \in \mathcal{C}$，
  有 $\mathcal{D}$ 中的态射
  \[
  a_x \colon (F(x)) \to G(x).
  \]

并满足如下条件：

- 对任意有限集 $I$，
  任意对象 $(x_i \in \operatorname{Ob} (\mathcal{C}))_{i \in I}$，
  $y \in \operatorname{Ob} (\mathcal{C})$，
  及任意 $f \in \mathcal{C} (x_1, \dotsc, x_n; y)$，有
  \[
  a_y \circ (f) = f \circ (a_{x_i})_{i \in I}.
  \]

:::

于是对多元范畴 $\mathcal{C}, \mathcal{D}$
有[[函子范畴]] $\mathsf{Fun}(\mathcal{C}, \mathcal{D})$，
其对象是函子，态射是自然变换。

::: definition [承载范畴]
设 $\mathcal{C}$ 是多元范畴。
定义它的**承载范畴**，
仍记为 $\mathcal{C}$，
与多元范畴 $\mathcal{C}$ 具有相同的对象集，
且有态射 $\mathcal{C}(x, y) = \mathcal{C}((x), y)$。
:::

多元范畴可以看作它的承载范畴上附加了额外的多元态射的结构。
过渡到承载范畴会遗忘一些信息，
但我们可以用另一个更大的范畴来给出多元范畴的全部信息，称为其**全范畴**。

这一构造在经典的范畴论中意义不是很大，
但在 [[$\infty$-范畴]]理论中，
[[$\infty$-算畴]]仅能使用此种方法定义和构造。

考虑[[带点集合|带点]][[有限集]]范畴 $\mathsf{Fin}_*$，
它的对象是带基点的有限集 $(I, * \in I)$，
态射是保持基点的映射。
对于 $I = (I, *) \in \mathsf{Fin}_*$，
令 $I^\circ = I \setminus \{*\}$。
对自然数 $n$，令 $\langle n\rangle = \{*, 1, 2, \cdots, n\} \in \mathsf{Fin}_*$。

::: definition [全范畴]
设 $\mathcal{C}$ 是多元范畴。
定义它的**全范畴** $\mathcal{C}^\otimes$，
为如下范畴：

- $\mathcal{C}^\otimes$ 的对象是有序对
  $(I \in \mathsf{Fin}_*, (x_i \in \mathcal{C})_{i \in I^\circ})$，
  简记为 $(x_i \in \mathcal{C})_{i \in I^\circ}$。

- 对象 $(x_i \in \mathcal{C})_{i \in I^\circ}$、
  $(y_j \in \mathcal{C})_{j \in J^\circ}$
  间的态射是有序对
  $(\alpha \colon I \to J, (f_j \colon (x_i)_{i \in \alpha^{-1}(j)} \to y_j)_{j \in J^\circ})$。
  其中，$\alpha$ 是 $\mathsf{Fin}_*$ 中的映射，
  $f_j$ 是 $\mathcal{C}$ 中的多重态射。

$\mathcal{C}^\otimes$ 带有[[遗忘函子]]
$p \colon \mathcal{C}^\otimes \to \mathsf{Fin}_*$。
这个函子叫做全范畴的**结构函子**。
:::

多元范畴被它的全范畴连同其结构函子唯一确定。

## 例子

- 所有[[算畴]]都可视为只有一个对象的多元范畴。

  - **平凡算畴** $\mathsf{Triv}$ 是如下多元范畴：
    它的对象集为单点集 $\operatorname{Ob}(\mathsf{Triv}) = *$，
    满足 $\mathsf{Triv}(; *) = \varnothing$，
    $\mathsf{Triv}(*; *) = *$，
    当 $n \ge 2$ 时 $\mathsf{Triv}((*)_{1 \le i \le n}; *) = \varnothing$。
    有显然的复合映射。

  - **交换算畴** $\mathsf{Comm}$ 是如下多元范畴：
    它的对象集为单点集 $\operatorname{Ob}(\mathsf{Comm}) = *$，
    对任意有限集 $I$，
    $\mathsf{Comm}((*)_{i \in I}; *) = *$。
    有显然的复合映射。
    这个多元范畴也称为单点多元范畴，
    它是多元范畴的范畴中的终对象，也记为 $*$。
    下面我们会看到这个多元范畴得名由来。

  - **结合算畴** $\mathsf{Assoc}$ 是如下多元范畴：
    它的对象集为单点集 $\operatorname{Ob}(\mathsf{Assoc}) = *$，
    对指标集 $I$，
    令 $\mathsf{Assoc}((*)_{i \in I}; *)$ 为 $I$ 上的 $|I| !$ 个全序构成的集合。
    复合定义如下：
    给定 $\alpha \colon I \to J$，
    给定 $f_j \colon (*)_{i \in \alpha^{-1}(j)} \to *$，
    $g \colon (*)_{j \in J} \to *$，
    $g$ 为 $J$ 上的全序，$f_j$ 为 $\alpha^{-1}(j)$ 上的全序。
    令 $g \circ (f_j)_{j \in J}$ 为 $I$ 上的唯一全序，
    使得 $i < i'$ 当且仅当 (1) $\alpha(i) < \alpha(i')$，
    或 (2) $j=\alpha(i) = \alpha(i')$ 且在 $\alpha^{-1}(j)$ 中 $i < i'$。

- 设 $(\mathcal{A}, \otimes)$ 是[[对称幺半范畴]]。
  我们定义多元范畴，仍记为 $\mathcal{A}$，如下：
  它的对象集即为对称幺半范畴 $\mathcal{A}$ 的对象集，
  对 $x_i (i \in I), y \in \mathcal{A}$，
  令多元态射集
  \[
  \mathcal{A} ((x_i)_{i \in I} ; y) =
  \mathcal{A} \biggl( \bigotimes_{i \in I}x_i, y \biggr).
  \]

  我们可以从这个多元范畴复原对称幺半范畴 $(\mathcal{A}, \otimes)$。
  显然，范畴 $\mathcal{A}$ 即为多元范畴 $\mathcal{A}$ 的承载范畴；
  而对称幺半结构 $\otimes$ 则来自于自然同构
  \[
  \mathcal{A}^\otimes ((x_i)_{i \in I} ; y) =
  \mathcal{A} \biggl( \bigotimes_{i \in I}x_i, y \biggr).
  \]
  和 [[Yoneda 引理]]。

- 设 $\mathcal{A}$ 是对称幺半范畴。
  我们有自然等价 $\mathsf{Fun}(\mathsf{Comm}, \mathcal{A}) = \mathsf{CAlg}(\mathcal{A})$、
  $\mathsf{Fun}(\mathsf{Assoc}, \mathcal{A}) = \mathsf{Alg}(\mathcal{A})$。
  其中，$\mathsf{Alg}(\mathcal{A}), \mathsf{CAlg}(\mathcal{A})$
  分别表示 $\mathcal{A}$ 的[[代数对象]]与交换代数对象的范畴。

  详细证明我们略去，仅作一些说明：
  对于 $F \colon \mathsf{Comm} \to \mathcal{A}$，
  则 $A = F(*) \in \mathcal{A}$ 为该交换代数对象的承载对象。
  令 $e \colon () \to *$ 为 $\mathsf{Comm}$ 的唯一零元运算，
  令 $m \colon (*, *) \to *$ 为 $\mathsf{Comm}$ 的唯一二元运算，
  则多元范畴 $\mathcal{A}$ 中零元运算 $F(e) \colon () \to A$
  与二元运算 $F(m) \colon (A, A) \to A$
  分别给出了 $\mathcal{A}$ 中映射 $e \colon 1_{\mathcal{A}} \to A$
  与 $m \colon A \otimes A \to A$，
  它们是该交换代数对象的单位映射与乘法映射。
  而交换代数对象的诸公理则来自于 $F$ 的函子公理，
  详细证明略去。

  对非交换情形有类似结论。
  直观上，$\mathsf{Assoc}((*)_{i \in I}; *)$
  的各个元素给出了代数对象 $F(*)$ 的与 $I$ 上的序相关的 $|I| !$ 个乘法。

```terms
多元范畴:
  en: multicategory
  fr: multicatégorie :f
  grc: πολυκατηγορία :f
  la: multicategoria :f
有色算畴:
  en: coloured operad
  en-us: colored operad
  fr: opérade colorée :f
  grc: κεχρωματισμένη τελάς :f
  la: operas colorata :f
```
