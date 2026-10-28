---
title: 除子
aliases: [Weil 除子, Cartier 除子, 主除子]
categories: [代数几何]
navboxes: [代数几何, 相交论]
---

<problems>
- “Cartier 除子”一节需要扩充。
</problems>

在[[代数几何]]中，
**除子**是指[[概形]]中[[余维数]]为 $1$ 的[[闭子概形]]，
以及这些闭子概形的[[线性组合]]。
也就是说，概形 $X$ 上的除子形如
\[
D = a_1 Z_1 + \cdots + a_n Z_n,
\]
其中 $a_i \in \mathbb{Z}$，且每个 $Z_i \subset X$ 是余维数为 $1$ 的闭子概形。

除子的概念与[[代数线丛]]，或者说[[可逆层]]，密切相关。
大致地说，给定上述除子 $D$，则可定义 $X$ 上的可逆层 $\mathcal{O} (D)$，
其在开集 $U \subset X$ 上的[[截面]]是 $U$ 上的[[有理函数]] $f$，
允许沿 $Z_i$ 有至多 $a_i$ 重[[极点]]，
但当 $a_i < 0$ 时，则要求 $f$ 沿 $Z_i$ 有至少 $-a_i$ 重零点。
根据这一描述，直观来看，各 $a_i$ 的值越大，则除子 $D$ 越正，
$\mathcal{O} (D)$ 也就有越多的截面，
我们也说 $\mathcal{O} (D)$ 对应的代数线丛越正。

通过上述两种观点，可以对除子给出两种定义，
分别称为 **Weil 除子**和 **Cartier 除子**。
这两种除子的概念具有细微的差异，
但在某些较好的情况下，例如对于[[光滑簇]]而言，两种除子的概念是等价的。

可以对除子定义一种[[等价关系]]，称为 **[[有理等价]]**。
称除子 $D$ 与 $D'$ 有理等价，是说相应的线丛
$\mathcal{O} (D)$ 与 $\mathcal{O} (D')$ 同构。
此时，在上面的描述下，可以通过乘以 $X$ 上某个固定的有理函数，
而将 $\mathcal{O} (D)$ 的局部截面转换为 $\mathcal{O} (D')$ 的局部截面。
除子的有理等价类构成**除子类群**，
它在较好的情况下同构于 $X$ 的 [[Picard 群]]。

除子的概念可以推广到余维数不为 $1$ 的情况，称为[[代数圈]]。
代数圈的等价类构成的群称为[[周群]]。

## 定义

### Weil 除子

首先回忆，对[[拓扑空间]] $X$ 及[[不可约空间|不可约]][[闭子空间]] $Z \subset X$，
$Z$ 在 $X$ 中的[[余维数]]是形如
\[
Z = Z_0 \subset \cdots \subset Z_n \subset X
\]
的链的最大长度 $n$，其中各 $Z_i \subset X$ 是不可约闭子空间，
且 $Z_i \neq Z_{i+1}$。

以下若干定义来自 [@stacks, Tag 0BE0]。

::: definition [Weil 除子] {@thm:Weil-除子}
设 $X$ 是[[局部 Noether 概形]]。

- $X$ 的**素除子**是指余维数为 $1$ 且[[整概形|整]]的[[闭子概形]]
  $Z \subset X$。

- $X$ 的 **Weil 除子**是指形如
  \[
  D = \sum_{\text{素除子 } Z} a_Z Z
  \]
  的和式，其中满足 $a_Z \neq 0$ 的那些 $Z$ 在 $X$ 中是[[局部有限子集族|局部有限]]的。
  特别地，若 $X$ 是 [[Noether 概形]]，则只能有有限个 $a_Z$ 非零。

  $X$ 的所有 Weil 除子关于加法构成 [[Abel 群]]，
  记为 $\operatorname{Div} (X)$。

:::

::: definition [零点重数]
设 $X$ 是[[局部 Noether 概形|局部 Noether]][[整概形]]。
记 $\mathcal{M}_X$ 为 $X$ 的[[有理函数层]]，
$R (X) = \mathcal{M}_X (X)$ 为 $X$ 的有理函数[[域]]。
记 $R (X)^\times = R (X) \setminus \{ 0 \}$ 为该域的乘法[[群]]。

设 $Z \subset X$ 为素除子（@thm:Weil-除子），
记 $\xi \in X$ 为 $Z$ 的[[普遍点]]。
将[[茎]] $\mathcal{O}_{X, \xi}$ 视为 $R (X)$ 的[[子环]]，
则后者是前者的[[分式域]]。

- 对 $f \in \mathcal{O}_{X, \xi}$，
  定义 $f$ 沿 $Z$ 的 **[[零点重数]]** 为[[自然数]]
  \[
  \operatorname{ord}_Z (f) =
  \operatorname{length} \mathcal{O}_{X, \xi} / (f),
  \]
  其中 $\xi$ 是 $Z$ 的[[普遍点]]，
  右边表示 $\mathcal{O}_{X, \xi}$-[[模]]
  $\mathcal{O}_{X, \xi} / (f)$ 的[[长度 (交换代数)|长度]]。

- 对一般的元素 $f / g \in R (X)^\times$，
  其中 $f, g \in \mathcal{O}_{X, \xi} \setminus \{ 0 \}$，
  定义其沿 $Z$ 的 **[[零点重数]]** 为[[整数]]
  \[
  \operatorname{ord}_Z (f / g) =
  \operatorname{ord}_Z (f) - \operatorname{ord}_Z (g).
  \]

我们得到[[群同态]] $\operatorname{ord}_Z \colon R (X)^\times \to \mathbb{Z}$，
即对任何 $f, g \in R (X)^\times$，有
\[
\operatorname{ord}_Z (f g) =
\operatorname{ord}_Z (f) + \operatorname{ord}_Z (g).
\]
:::

::: definition [Weil 除子类群]
设 $X$ 是[[局部 Noether 概形|局部 Noether]][[整概形]]，
$R (X)$ 为 $X$ 的有理函数域。

- 对 $f \in R (X)^\times$，
  定义 $f$ 的**主除子**为 Weil 除子
  \[
  \operatorname{div} (f) =
  \sum_{\text{素除子 } Z} \operatorname{ord}_Z (f) \cdot Z.
  \]

  我们得到[[群同态]]
  $\operatorname{div} \colon R (X)^\times \to \operatorname{Div} (X)$，
  即满足 $\operatorname{div} (f g) =
    \operatorname{div} (f) + \operatorname{div} (g)$。

- 称 Weil 除子 $D, D' \in \operatorname{Div} (X)$
  **[[有理等价]]**，若存在 $f \in R (X)^\times$ 使得
  $D - D' = \operatorname{div} (f)$。

- 定义 $X$ 的 **Weil 除子类群**为[[商群]]
  \[
  \operatorname{Cl} (X) =
  \frac{\operatorname{Div} (X)}{\operatorname{im} (\operatorname{div})},
  \]
  即 Weil 除子的有理等价类构成的群。

:::

### Cartier 除子

## 参考文献

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
除子:
  en: divisor
  fr: diviseur :m
  de: Divisor :m
  ja: 因<いん>子<し>
Weil 除子:
  en: Weil divisor
  fr: diviseur de Weil :m
  de: Weil-Divisor :m
  ja: Weil 因<いん>子<し>
Cartier 除子:
  en: Cartier divisor
  fr: diviseur de Cartier :m
  de: Cartier-Divisor :m
  ja: Cartier 因<いん>子<し>
```
