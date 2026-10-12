---
title: 有限表现模
categories: [模论]
---

**有限表现模**指被有限个元素在有限个关系下生成的模。
这是关于[[模]]重要的有限性条件。

## 定义

::: definition
$R$ 是[[环]]，$M$ 是左 $R$-模。称 $M$ 有限表现，指存在右半正合列
$$
R^m\to R^n\to M\to0.
$$
即它被有限个生成元 $x_1,\ldots,x_n$ 在有限个关系
$\left\{\sum_{j=1}^na_{ij}x_j=0\right\}_{i=1}^m$ 下生成。
:::

右模自然也可作类似定义。

## 例子

- 有限维[[线性空间]]是有限表现模。

- 一般地，对 $n\in\mathbb{N}$，$R^n$ 是有限表现 $R$-模。

- $\mathbb{Z}/n$ 是有限表现 $\mathbb{Z}$-模：
  $$
  \mathbb{Z}\to\mathbb{Z}\to\mathbb{Z}/n\to0.
  $$

- 一般地，有限表现模商去有限生成子模有限表现。

- [[Noether 环]]上有限生成模有限表现。

- $k$ 是域。环 $R=k[x_1,x_2,\ldots]$ 上的模
  $k=R/(x_1,x_2,\ldots)$ 有限生成，但不有限表现。

## 性质

有限表现模的定义要求其在特定一组生成元下只有有限个关系；
对于另一组生成元呢？我们有如下性质。

::: proposition
$R$ 是环，$M$ 是有限表现左 $R$-模。那么对于任意 $n\in\mathbb{N}$
以及任意满射 $f\colon R^n\twoheadrightarrow M$，
$\ker(f)$ 有限生成。即有限表现模在任一组生成元下有限表现。
一般地，对任一有限生成模 $N$ 以及满射 $f\colon N\twoheadrightarrow M$，
$\ker(f)$ 都有限生成。
:::

另外，有限表现模还有[[范畴论]]刻画，即它是 $R\text{-}\mathsf{Mod}$
中的[[紧对象]]。

::: proposition [紧]
$M\in R\text{-}\mathsf{Mod}$ 有限表现，当且仅当对
$R\text{-}\mathsf{Mod}$ 中任一[[滤相系]] $\{N_i\}_{i\in I}$，
都有
$$
\operatorname{Hom}_R(M,\operatornamewithlimits{colim}_{i\in I}N_i)
=\operatornamewithlimits{colim}_{i\in I}\operatorname{Hom}_R(M,N_i).
$$
:::

```terms
有限表现模:
  en: finitely presented module
  fr: module de présentation finie
```
