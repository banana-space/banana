---
title: 向量空间
aliases: [线性空间]
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “例子”一节中，$n$ 为无限基数时，若 $k^n$ 指直积，其维数似乎大于 $n$；维数为 $n$ 的是直和 $k^{\oplus n}$。
navboxes: [线性代数, 代数结构]
---

**向量空间**（也称为**线性空间**、**矢量空间**）是一种[[代数结构]]，
是[[线性代数]]的主要研究对象。
我们最熟悉的向量空间包括坐标平面
\[
\mathbb{R}^2 = \set{ (x, y) | x, y \in \mathbb{R} },
\]
以及我们所处的三维空间
\[
\mathbb{R}^3 = \set{ (x, y, z) | x, y, z \in \mathbb{R} }.
\]
一般地，也有 $\mathbb{R}$ 上的 $n$ 维向量空间
\[
\mathbb{R}^n = \set{ (x_1, \dotsc, x_n) | x_1, \dotsc, x_n \in \mathbb{R} }.
\]
向量空间的元素称为[[向量]]。
向量可以相加而得到新的向量，也可以将向量乘以一个数而得到新的向量。
这两种操作刻画了向量空间的代数结构。

除了上述例子外，还可以有无限维的向量空间。
例如，考虑 $\mathbb{R}$ 上的所有实值[[连续函数]]的空间
\[
C (\mathbb{R}) = \set{f \colon \mathbb{R} \to \mathbb{R} | f \text{ 连续}}.
\]
使用线性代数的术语，我们将这样的连续函数称为向量。
在 $C (\mathbb{R})$ 中，连续函数可以相加而得到新的连续函数，
也可以乘一个数而得到新的连续函数。
这两点说明 $C (\mathbb{R})$ 也是向量空间。

## 定义

::: definition [向量空间] {@def-vector-space}
设 $k$ 是[[域]]。
则 $k$-**向量空间**就是 $k$-[[模]]。

具体地说，$k$-向量空间是集合 $V$，带有两种运算
\[
\begin{aligned}
  {+} & \colon V \times V \to V, \\
  {\cdot} & \colon k \times V \to V,
\end{aligned}
\]
分别称为**加法**和**数乘**。
这里，表示数乘的点乘符号常常省略。
我们要求这两种运算满足以下性质：

- $(V, {+})$ 构成 [[Abel 群]]，
  其单位元记为 $0$。
  具体来说，是指加法满足以下性质：

  - 加法满足[[结合律]]：对任意 $x, y, z \in V$，有
    \[
    (x + y) + z = x + (y + z).
    \]

  - 加法满足[[交换律]]：对任意 $x, y \in V$，有
    \[
    x + y = y + x.
    \]

  - 加法具有单位元 $0 \in V$，满足[[单位律]]：对任意 $x \in V$，有
    \[
    0 + x = x.
    \]

  - 对任意 $x \in V$，存在元素 $-x \in V$，使得
    \[
    x + (-x) = 0.
    \]

- 数乘满足[[单位律]]：对任意 $x \in V$，有
  \[
  1 x = x.
  \]

- 数乘对 $V$ 中的加法满足[[分配律]]：
  对任意 $c \in k$ 及 $x, y \in V$，有
  \[
  c (x + y) = c x + c y.
  \]

- 数乘对 $k$ 中的加法满足[[分配律]]：
  对任意 $c, d \in k$ 及 $x \in V$，有
  \[
  (c + d) x = c x + d x.
  \]

- 数乘与 $k$ 中的乘法相容：
  对任意 $c, d \in k$ 及 $x \in V$，有
  \[
  (c d) x = c (d x).
  \]

此时，域 $k$ 的元素通常称为**标量**，
向量空间 $V$ 中的元素通常称为**向量**。
元素 $0 \in V$ 有时称为 $V$ 的**原点**。
:::

::: definition [线性映射] {@def-linear-map}
设 $k$ 是域，设 $V, W$ 是 $k$-向量空间。
[[映射]]
\[
f \colon V \to W
\]
称为 **[[线性映射]]**，如果它是 $k$-[[模]]同态。

具体地说，这意味着

- 对任意 $c \in k$ 和任意 $x \in V$，有
  \[
  f (c x) = c f (x).
  \]

- 对任意 $x, y \in V$，有
  \[
  f (x + y) = f (x) + f (y).
  \]

:::

::: definition [向量空间范畴]
所有向量空间（@def-vector-space）
和它们之间的线性映射（@def-linear-map）
构成[[范畴]]，
称为 $k$-[[向量空间范畴]]，
记为 $\mathsf{Vect}_{k}$。
:::

## 例子

- 对任何域 $k$，[[单点集]]可以视为 $k$-向量空间，
  称为 **[[零向量空间]]**，记为 $0$。

- 域 $k$ 可以看成自身上的向量空间，其[[维数 (线性代数)|维数]]为 $1$。

- 对任何[[自然数]]（乃至[[基数]]）$n$，
  集合 $k^n$ 上带有自然的 $k$-向量空间结构，其维数为 $n$。

- 对任何[[扩域]] $K/k$，都能将 $K$ 看作 $k$-向量空间。
  例如，[[复数]]域 $\mathbb{C}$ 就是 $\mathbb{R}$-向量空间，其维数为 $2$。

- 对任何[[拓扑空间]] $X$，[[连续函数]]空间
  \[
  C (X) = \set{f \colon X \to \mathbb{R} | f \text{ 连续}}
  \]
  是 $\mathbb{R}$ 上的向量空间。

## 性质

### 基

每个 $k$-向量空间中，都能找到一组[[基]]，也就是一组[[向量]]，
例如 $\{ e_1, \dotsc, e_n \}$，
使得该向量空间的任意向量 $v$ 都能唯一地写成这些向量的[[线性组合]]：
\[
v = a_1 e_1 + \cdots + a_n e_n ,
\]
其中 $a_i \in k$ 是标量。
这样，选定一组基，就能用这组数 $a_1, \dotsc, a_n$ 来代表向量 $v$，有时记为
\[
v = \begin{pmatrix}
  a_1 \\ \vdots \\ a_n
\end{pmatrix} .
\]
由此，通过一组基，就能把向量空间的几乎所有操作化为数的运算。

[[基存在定理]]表明，每个向量空间都有基。
同一个向量空间的所有基都具有同样多的向量，
这一数目称为该向量空间的[[维数 (线性代数)|维数]]。

```terms
向量空间:
  en: vector space
  de: Vektorraum :m
  fr: espace vectoriel :m
  grc: διανυσματικὸς χῶρος :m
  la: spatium vectoriale :n
线性空间:
  en: linear space
  de: linearer Raum :m
  fr: espace linéaire :m
  grc: γραμμικὸς χῶρος :m
  la: spatium lineare :n
向量:
  en: vector
  de: Vektor :m
  fr: vecteur :m
  grc: διάνυσμα :n
  la: vector :m
```
