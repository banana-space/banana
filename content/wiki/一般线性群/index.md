---
title: 一般线性群
categories: [群论, 线性代数, Lie 理论, 代数群理论]
notices:
  - name: 问题
    items:
      - “基本性质”“表示论”各节需要扩充。
      - “基本性质”一节中关于中心的命题对非交换环 $A$ 似乎不成立：$n \geq 2$ 时 $\operatorname{GL}(n,A)$ 的中心由 $aI$（$a$ 是 $A$ 的中心中的可逆元）构成，它可能小于 $A$ 的乘法群的中心。
navboxes: [Lie 群]
---

[[环]]上的**一般线性群**是其上所有同阶可逆[[方阵]]构成的群，
更“典范”地说，它是[[自由模]]的[[自同构群]]。
它是 [[Lie 群]]、[[代数群]]的重要例子，
也是[[表示论|群表示论]]关心的重要对象。

一般线性群通常由 $\operatorname{GL}(n,A)$、$\operatorname{GL}_n(A)$ 或 $\operatorname{GL}(V)$ 表示。

## 定义

::: definition [矩阵定义]
对[[环]] $A$，**一般线性群** $\operatorname{GL}(n,A)$
由所有 $A$ 上 $n$ 阶可逆[[方阵]]构成，相应二元运算为矩阵的乘法，
单位元为[[单位阵]]。
:::

也可以把一般线性群定义为自同构群。

::: definition [自同构群定义]
对[[环]] $A$ 上[[有限生成模|有限]][[投射右模]] $M$
（例如域 $\Bbbk$ 上[[向量空间]] $V$），
**一般线性群** $\operatorname{GL}(M)$ 是 $M$ 作为 $A$-[[右模]]的[[自同构群]]。
特别地，$A$ 为域时，$\operatorname{GL}(M)$ 是所有可逆[[线性变换]]构成的群。
:::

可以看出，当 $M$ 取为 $A^n$ 时，$\operatorname{GL}(M) = \operatorname{GL}(n,A)$。
因此后一种定义是前一种定义的推广。

## 性质

### 基本性质

以下列举了一些一般线性群的群论性质。

::: proposition [元素个数]
对 [[$q$ 元域]] $\mathbb{F}_q$，$\operatorname{GL}(n,\mathbb{F}_q)$
元素个数为
\[
(q^n - 1)(q^n - q) \cdots (q^n - q^{n-1}).
\]
:::

::: proposition [中心]
对环 $A$，$\operatorname{GL}(n,A)$ 的[[中心]]同构于 $A$ 的乘法群的中心，
其中元素形如 $aI$，其中 $I$ 为单位阵。
:::

### Lie 群结构

当 $A$ 是 $\mathbb{R}$-代数时，可以为 $\operatorname{GL}(n,A)$ 赋予 [[Lie 群]]结构。
$A$ 为 $\mathbb{R}$、$\mathbb C$、$\mathbb{H}$ 的情况提供了 [[Lie 群]]的重要例子。

::: proposition [Lie 群结构]
$\operatorname{GL}(n,\Bbbk)$
是 $n$ 阶矩阵构成的空间 $\operatorname{M}_{n\times n}(\Bbbk)$
（$\Bbbk = \mathbb{R}, \mathbb C, \mathbb{H}$）中的开集。
这为 $\operatorname{GL}(n,\mathbb R)$、$\operatorname{GL}(n, \mathbb{H})$ 赋予了[[光滑流形]]结构，
（事实上 $\operatorname{GL}(n, \mathbb{H})$ 是[[四元数流形]]），
并为 $\operatorname{GL}(n,\mathbb C)$ 赋予了[[复流形]]结构。
此时，$\operatorname{GL}(n,\mathbb R)$、$\operatorname{GL}(n, \mathbb{H})$ 是实 Lie 群，
$\operatorname{GL}(n,\mathbb C)$ 是复 [[Lie 群]]。
此时，二者均是[[约化 Lie 群]]。
:::

$\operatorname{GL}(n,\mathbb R)$ 和 $\operatorname{GL}(n,\mathbb C)$ 的闭子群也是重要的一类
[[Lie 群]]，称为**矩阵 Lie 群**，
其中重要的例子有[[特殊线性群]]、[[正交群]]、[[辛群]]等。

作为 Lie 群，它对应一个 Lie 代数。

::: proposition [Lie 代数]
一般线性群 $\operatorname{GL}(n, \Bbbk)$（$\Bbbk = \mathbb{R}$、$\mathbb C$、$\mathbb{H}$）
的 Lie 代数是向量空间
\[
\mathfrak{gl}(n, \Bbbk) = \operatorname{M}_n(\Bbbk)
\]
配有 [[Lie 括号]] $[X, Y] = XY - YX$。
:::

一般线性群有下述拓扑性质。

::: proposition [紧性]
$\operatorname{GL}(n,\mathbb{R})$、$\operatorname{GL}(n,\mathbb C)$、
$\operatorname{GL}(n, \mathbb{H})$ 均不[[紧]]，
三者[[极大紧子群]]分别是[[正交群]] $\mathrm{O}(n, \mathbb{R})$、
[[酉群]] $\mathrm{U}(n)$ 和[[紧辛群]] $\mathrm{Sp}(n)$。
:::

::: proposition [连通性]
$\operatorname{GL}(n,\mathbb C)$ 和 $\operatorname{GL}(n, \mathbb{H})$ 是连通的，
但是 $\operatorname{GL}(n,\mathbb R)$ 并不连通：
后者的两个连通分支分别由行列式为正和为负的矩阵构成。
:::

::: proposition [基本群]
$\operatorname{GL}(n,\mathbb{R})$ 的最大连通子群，
在 $n = 1$ 时是单连通的，
而 $n = 2$ 时有基本群 $\mathbb{Z}$，
$n \geq 3$ 时有基本群 $\mathbb{Z} / 2$；
$\operatorname{GL}(n, \mathbb C)$ 的基本群是 $\mathbb{Z}$；
$\operatorname{GL}(n, \mathbb{H})$ 是单连通的。
:::

### 群概形结构

可以将交换环上一般线性群视为[[群概形]]，精确地说：

::: proposition
对概形 $S$，函子
\[
\mathsf{Sch}_S^{\text{op}} \to \mathsf{Grp},
\quad X \mapsto \operatorname{GL}(n,\Gamma(X, \mathcal{O}_X))
\]
是 $S$ 上群概形，称为一般线性群，记作 $\operatorname{GL}_{n,S}$。
:::

它是[[约化群概形]]。

::: remark
以上构造也可以推广到交换环 $R$ 上的
[[有限生成模|有限生成]][[投射模|投射]][[代数|结合代数]] $A$（未必交换）上：
函子
\[
\mathsf{Sch}_R^{\mathrm{op}} \to \mathrm{Grp}, \quad
R' \mapsto \operatorname{GL}(n, R' \otimes_R A)
\]
是 $R$ 上群概形。
:::

::: proposition
$\operatorname{GL}_{n,S}$ 是 $S$ 上约化群概形，中心为
$\mathbb{G}_{m,S}$，对应的[[根数据]]为
$(\mathbb{Z}^n,\Phi,\mathbb{Z}^n,\Phi^\vee)$，其中两个 $\mathbb{Z}^n$
的配对为标准配对，
$$
\Phi=\Phi^\vee=\{e_i-e_j\mid1\le i,j\le n,\,i\ne j\}.
$$
:::

### 表示论

## 例子

::: example
一阶的一般线性群同构于相应环的乘法群，
即对环 $A$，
即 $\operatorname{GL}(1,A) \cong A^\times$。
:::

::: example
实一般线性群 $\operatorname{GL}(n,\mathbb R)$ 由 Euclid 空间的旋转、
沿某些方向的缩放（缩放比例不能为 $0$）和翻转生成，
这即是 [[Cartan 分解]]。
:::

```terms
一般线性群:
  en: general linear group
  de: allgemeine lineare Gruppe
  fr: groupe général linéaire
  grc: γενικὴ γραμμικὴ ὁμάς
  la: caterva generalis linearis
```
