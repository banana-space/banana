---
title: Nagata 紧化定理
aliases: [永田紧化, Nagata 紧化, 永田紧化定理]
categories: [概形论]
---

**Nagata 紧化定理**是代数几何中的重要结果，表明每个[[分离态射|分离]]、
[[有限型态射|有限型]]的[[概形]]态射都有[[紧化]]。它由 [[Masayoshi Nagata]]
于 1962 年证明，后由 [[Pierre Deligne]] 等人用概形语言重写。

## 定理

::: theorem [Nagata 紧化定理]
设 $f\colon X\to S$ 是分离、有限型的概形态射。则存在分解
$f=\bar{f}j$，其中 $j\colon X\to\bar{X}$ 是开浸入，
$\bar{f}\colon\bar{X}\to S$ 是[[紧合态射]]。这样的分解称为
$f$ 的紧化。
:::

证明十分技术性，参见
[@stacks, Tag 0ATT, 0F3T]。

## 用途

在[[平展上同调]]中，它可用来定义概形态射的 $f_!$、$f^!$。
在[[凝聚上同调]]中也可用它定义一般的 $f^!$。

如 $S=\operatorname{Spec} k$，$\operatorname{char} k=0$，
配合上 [[Hironaka 奇点消解]]，可得

::: theorem
$X/k$ 是特征 $0$ 域上分离、有限型、光滑概形。则存在开浸入
$X\hookrightarrow\bar{X}$，使得 $\bar{X}$ 光滑，
$D=\bar{X}\setminus X$ 带上既约闭子概形结构是横截相交的光滑除子，
即 $D=\bigcup_{i=1}^nD_i$，$D_i$ 皆光滑，且对每个 $x\in\bar{X}$，
如 $x\in D_{i_1}\cap\ldots\cap D_{i_r}$，则各个 $D_{i_j}$ 在 $x$
处的余法空间在 $x$ 处余切空间中的和是直和。
:::

由此可发展 [[Hodge 理论]]。特征 $p$ 时常用 [[de Jong 变易定理]]代替奇点消解做类似的事情。

## 参考文献

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
Nagata 紧化定理:
  en: Nagata compactification theorem
```
