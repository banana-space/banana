---
title: 微分分次 Lie 代数
aliases: [DGLA]
categories: [高阶代数]
navboxes: [高阶代数]
---

**微分分次 Lie 代数**（有时简称 **DGLA**）
是一种[[代数结构]]，也就是具有 [[Lie 代数]]结构的[[链复形]]。

在[[高阶代数]]中，微分分次 Lie 代数与 [[$\mathbb{L}_\infty$-代数]]密切联系，
后者是指在同伦意义下具有 Lie 代数结构的链复形。
对[[特征 (代数)|特征]] $0$ [[域]]而言，两种概念本质上是等价的。

在[[高阶几何]]中，具有[[群]]结构的几何对象的[[切复形]]常常具有微分分次 Lie 代数的结构，
正如在普通几何中，[[Lie 群]]的[[切空间]]具有 Lie 代数的结构。
更一般地，高阶几何对象 $X$ 在某点 $x$ 的切复形[[移位|右移]]一位，
即 $\mathbb{T}_{X, x} [-1]$，常具有微分分次 Lie 代数的结构，
这描述了该点的[[自同构 $\infty$-群]]作为高阶几何对象的切复形。

上述构造也将微分分次 Lie 代数与[[形式模空间]]联系起来，
后者是指具有唯一的点的高阶几何对象。
在特征 $0$ 域上，前一段所述的构造，即取切复形并右移一位，
给出了二者间 [[$(\infty, 1)$-范畴]]的等价，见 [@LurieDAGX]。

## 定义

::: definition [微分分次 Lie 代数]
[[交换环]] $k$ 上的**微分分次 Lie 代数**是指三元组
$(\mathfrak{g}, \partial, [-, -])$，其中

- $\mathfrak{g} = \bigoplus_{n \in \mathbb{Z}} \mathfrak{g}_n$
  是[[分次向量空间]]。

- $\partial \colon \mathfrak{g} \to \mathfrak{g}$
  是 $k$-[[线性映射]]，称为**微分**。

- $[-, -] \colon \mathfrak{g} \otimes_k \mathfrak{g} \to \mathfrak{g}$
  是 $k$-[[双线性映射]]，称为 **Lie 括号**。

它们满足以下条件：

- $(\mathfrak{g}, \partial)$ 是 $k$ 上的[[链复形]]。换言之，满足以下两个条件：

  - $\deg \partial = -1$。换言之，$\partial$ 将每个
    $\mathfrak{g}_n$ 映入 $\mathfrak{g}_{n-1}$。

  - $\partial \circ \partial = 0$。

- Lie 括号 $[-, -]$ 满足以下条件：

  - $[-, -]$ 将 $\mathfrak{g}_m \otimes \mathfrak{g}_n$
    映入 $\mathfrak{g}_{m+n}$。

  - （**[[交错双线性型|交错性]]**）
    对任意[[分次环|齐次元]] $x, y \in \mathfrak{g}$，有
    \[
    [x, y] = -(-1)^{|x| |y|} \, [y, x],
    \]
    其中 $|x|, |y|$ 表示 $x, y$ 的次数。

  - （**[[Lie 代数|Jacobi 恒等式]]**）
    对任意齐次元 $x, y, z \in \mathfrak{g}$，有
    \[
    [x, [y, z]] =
    [[x, y], z] +
    (-1)^{|x||y|} \, [y, [x, z]].
    \]
    换言之，$[x, -]$ 是关于 Lie 括号的[[分次导子]]。

- $\partial$ 是关于 Lie 括号的[[分次导子]]。换言之，
  对任意齐次元 $x, y \in \mathfrak{g}$，有
  \[
  \partial [x, y] =
  [\partial x, y] + (-1)^{|x|} [x, \partial y].
  \]

:::

等价地，也可以使用[[上同调标号]]，将微分分次 Lie 代数定义为 $(\mathfrak{g}, d, [-, -])$，
其中 $\mathfrak{g} = \bigoplus_{n \in \mathbb{Z}} \mathfrak{g}^n$，
而 $\deg d = 1$。这里略过完整的定义。

## 参考文献

微分分次 Lie 代数与[[形式模空间]]的联系：

```bibliography
LurieDAGX:
  type: preprint
  author: 'Lurie, Jacob'
  title: 'Derived algebraic geometry X: Formal moduli problems'
  url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
  year: 2011
```

```terms
微分分次 Lie 代数:
  en: differential graded Lie algebra (DGLA)
```
