---
title: 子向量空间
aliases: [线性子空间]
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，
[[向量空间]]的**子向量空间**（或**线性子空间**，简称**子空间**）
是指该向量空间的[[子集]]，
这个子集自己也是个向量空间。

例如，平面 $\mathbb{R}^2$ 的子向量空间有以下几种：

- $0$ [[维数 (线性代数)|维]]子空间只有一个，即[[原点]]。

- $1$ 维的子空间是所有经过[[原点]]的[[直线]]。

- $2$ 维的子空间只有一个，即平面自身。

向量空间的所有子空间的集合称为 [[Graßmann 形]]，
带有有趣的几何结构。
特别地，所有 $1$ 维子空间的集合称为该向量空间的[[射影空间]]。

## 定义

::: definition [子向量空间]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。
称[[子集]] $W \subset V$ 为**子向量空间**，如果满足以下条件：

- $W$ 包含[[原点]]：$0 \in W$。

- $W$ 对加法封闭：若 $x, y \in W$，则 $x + y \in W$。

- $W$ 对数乘封闭：若 $c \in k$ 且 $x \in W$，则 $c x \in W$。

此时，$W$ 也自然带有向量空间的结构。
:::

## 例子

::: example [平凡子空间]
设 $V$ 是[[向量空间]]。
则 $\{ 0 \}$ 和 $V$ 自身都是 $V$ 的子向量空间。
:::

::: example [线性生成空间]
设 $V$ 是向量空间，$x_1, \dotsc, x_n \in V$。
则这组向量的[[线性生成空间]]是 $V$ 的子空间，
也称为这组向量张成的子空间。
:::

::: example [紧支连续函数]
记 $C (\mathbb{R})$ 为所有[[连续函数]] $f \colon \mathbb{R} \to \mathbb{R}$ 的空间，
$C_0 (\mathbb{R})$ 为所有[[紧支函数|紧支]]连续函数
$f \colon \mathbb{R} \to \mathbb{R}$ 的空间。
则 $C_0 (\mathbb{R}) \subset C (\mathbb{R})$ 是子向量空间。
两者都是无限维 $\mathbb{R}$-向量空间。
:::

## 性质

- 设 $W$ 是 $V$ 的子向量空间。则[[含入映射]] $W \hookrightarrow V$
  是[[线性映射]]，且是[[单射]]。

- [[线性映射]]的[[核 (代数)|核]]、[[像]]都是子向量空间。

```terms
子向量空间:
  en: vector subspace
  fr: sous-espace vectoriel :m
  de: Untervektorraum :m
线性子空间:
  en: linear subspace
  fr: sous-espace linéaire :m
  de: linearer Unterraum :m
```
