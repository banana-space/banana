---
title: 仿紧空间
aliases: [仿紧]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

<problems>
- “性质”一节中的推论似乎不成立：例如不可数离散空间 $X$ 取一点 $x_0$，开覆盖 $\{\{x, x_0\}\}_{x \in X}$ 的成员两两相交且没有可数子覆盖。似乎应改为每个 $V_n$ 是一些两两不交、且各自包含于某个 $U_i$ 的开集之并。
- “性质”一节需要扩充。
</problems>

**仿紧空间**是一类[[拓扑空间]]。
仿紧性是一种类似[[紧空间|紧性]]，但更弱一些的性质。
很多常见的空间，包括[[度量空间]]、[[流形]]、[[CW 复形]]，都是仿紧空间。

仿紧空间的一个关键性质是[[单位分解]]的存在性（@prop-partition-of-unity）。

## 定义

::: definition [开覆盖] {@def-open-cover}
设 $X$ 是[[拓扑空间]]。

- $X$ 的一个 **[[开覆盖]]** 是指一族开子集
  $\{ U_i \subset X \}_{i \in I}$，使得 $X = \bigcup_{i \in I} U_i$。

- 开覆盖 $\{ U_i \}_{i \in I}$ 称为**局部有限**的，
  如果每个 $x \in X$ 都有一个邻域 $U$，
  它只与 $\{ U_i \}$ 中的有限个开集相交。

- 开覆盖 $\{ U_i \}_{i \in I}$ 的 **[[加细]]** 是指另一个开覆盖
  $\{ V_j \}_{j \in J}$，使得对每个 $j \in J$，
  存在 $i \in I$，满足 $V_j \subset U_i$。

:::

::: definition [仿紧空间]
[[拓扑空间]] $X$ 称为**仿紧空间**，
如果 $X$ 的每个开覆盖都有局部有限的加细（@def-open-cover）。
:::

## 例子

- [[紧空间]]都是仿紧空间。

- [[度量空间]]都是仿紧空间。
  特别地，[[Euclid 空间]]是仿紧空间。

- [[流形]]都是仿紧空间。

- [[CW 复形]]都是仿紧空间。

- [[Sorgenfrey 直线]]是仿紧空间，
  但它与自身的[[积空间|乘积]]不是仿紧空间。

## 性质

::: proposition {@prop-partition-of-unity}
一个[[拓扑空间]]是仿紧 [[Hausdorff 空间]]，
当且仅当它的每个[[开覆盖]]都有从属于它的[[单位分解]]。
:::

::: corollary
设 $X$ 是仿紧 Hausdorff 空间。
则对 $X$ 的每个[[开覆盖]] $\{ U_i \subset X \}_{i \in I}$，
存在 $X$ 的一个[[可数]]开覆盖 $\{ V_n \subset X \}_{n \in \mathbb{N}}$，
使得每个 $V_n$ 都是 $\{ U_i \}$ 中的一些不相交元素的并。
:::

```terms
仿紧空间:
  en: paracompact space
  de: parakompakter Raum
  fr: espace paracompact
  grc: παρασυμπάγης χῶρος
  la: spatium paracompactum
仿紧:
  en: paracompact
  de: parakompakt
  fr: paracompact
  grc: παρασυμπάγης
  la: paracompactus
仿紧性:
  en: paracompactness
  de: Parakompaktheit :f
  fr: paracompacité :f
  grc: παρασυμπάγεια :f
  la: paracompactitas :f
```
