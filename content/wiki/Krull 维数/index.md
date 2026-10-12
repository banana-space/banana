---
title: Krull 维数
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “基本性质”一节中命题“零点集”似乎需要假设 $A$ 是局部环且 $x$ 属于其极大理想（例如 $x$ 为单位时不等式不成立）。
navboxes: [交换代数]
---

**Krull 维数**（常简称**维数**）是[[交换代数]]中的维数概念，
通过[[代数–几何对偶]]来描述[[代数几何]]中[[维数 (代数几何)|维数]]的概念，
以在代数几何中模拟 [[Euclid 空间]]以及[[流形]]的维数概念。

具体地说，[[交换环]]的维数是其中最长素理想升链的长度，
对偶地，[[概形]]的[[维数 (代数几何)|维数]]是其中最长[[整概形|整]]、
[[闭子概形]]降链的长度。
直观上，每取一个概形的闭子概形，维数就会降一维
（例如曲线的真整、闭子概形是有限个点），
因此这一定义是合理的。

## 定义

::: definition [交换环的维数]
[[交换环]] $A$ 的 **Krull 维数**
（若无歧义，简称为**维数**）
是使得存在 $A$ 中的[[素理想]]升链
\[
\mathfrak{p}_0 \subsetneq \mathfrak{p}_1
\subsetneq \cdots \subsetneq \mathfrak{p}_n,
\]
的自然数 $n$ 的上确界（可能为 $+\infty$），记作 $\dim(A)$。
:::

这与[[概形]]的[[维数 (代数几何)|维数]]的定义相对偶：

::: definition [概形的维数]
[[概形]] $S$ 的 **[[维数 (代数几何)|维数]]**
是使得存在 $S$ 中的[[整概形|整]]、
[[闭子概形]]（等价地，不可约闭集）降链
\[
S_0 \supsetneq S_1
\supsetneq \cdots \supsetneq S_n,
\]
的自然数 $n$ 的上确界（可能为 $+\infty$），记作 $\dim(S)$。
:::

常约定零环、空概形的维数为 $-\infty$。

上述定义可以自然地推广至交换环的[[模]]上。

::: definition [模的维数]
交换环 $A$ 上的模 $M$ 的 **Krull 维数**
（若无歧义，简称为**维数**）指 $M$ 的[[支集 (交换代数)|支集]]
$\operatorname{Supp}(M)\subseteq\operatorname{Spec}A$
中素理想链的最长长度，其中
$$
\operatorname{Supp}(M)=\{\mathfrak{p}\in\operatorname{Spec}A\mid M_\mathfrak{p}\ne0\}.
$$
:::

::: remark
在 $M$ [[有限生成模|有限生成]]时，$M$ 的 Krull 维数即是环 $A/{\operatorname{Ann}(M)}$
的维数。$M = A$ 时，$M$ 的维数即是 $A$ 的维数。
:::

::: definition [高度]
交换环 $A$ 中素理想 $\mathfrak{p}$ 的**高度**指[[局部化]]
$A_\mathfrak{p}$ 的 Krull 维数，也即从 $\mathfrak{p}$
出发的素理想降链的最长长度，记作 $\operatorname{ht}\mathfrak{p}$。
:::

## 例子

- [[域]]（一般地，[[Artin 环]]）的 Krull 维数是 $0$。
  说明可以把域视为一个点，而 Artin 环可以视为一些[[加粗]]的点。

- 域上[[多项式环]] $k[x_1, \dots, x_n]$ 的维数是 $n$。
  相应地，域上[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}^n$ 的维数是 $n$。

## 性质

为获得好的性质，我们在下面假定 $A$ 是 [[Noether 环]]，
$M$ 是 $A$ 上[[有限生成模]]。

### 基本性质

::: proposition [多项式]
$\dim(A[x]) = \dim(A) + 1$。
:::

::: proposition [零点集]
$\dim(M / xM) \geq \dim(M) - 1$。
如 $x \in A$ 满足 $x \cdot \colon M \to M$ 是单射，
则取等。
:::

::: proposition [完备化]
如 $(A, \mathfrak{m})$ 是局部环，
$\hat{A}$ 是 $A$ 在 $\mathfrak{m}$ 进拓扑下的[[完备化]]，
则有 $\dim(A) = \dim(\hat{A})$。
:::

### 与其它量的关系

Krull 维数和交换代数中的许多量有联系，
例如 [[Hilbert–Samuel 多项式]]、[[深度]]和[[同调维数]]。
为简便起见，我们在下面假定 $A$ 是[[局部环]] $(A, \mathfrak{m})$。

::: definition [Hilbert–Samuel 多项式]
存在多项式 $P$，
称为 **[[Hilbert–Samuel 多项式]]**，满足对充分大的 $n$，
\[
P(n) = \ell(M / \mathfrak{m}^n M),
\]
其中 $\ell$ 表示[[长度]]。
:::

Krull 维数与 Hilbert 多项式的次数相等。

::: proposition
$\dim(M) = \deg(P(n))$。
:::

Krull 维数大致上是最小的函数个数，使得这些函数的零点集是有限的。

::: proposition
模 $M$ 的维数是满足下述条件的最小自然数 $n$：
存在 $A$ 中元素 $x_1, \cdots, x_n$ 使得
$M / (x_1 M + \cdots + x_n M)$ 是有限长度的。
:::

维数和“切空间”维数的关系：

::: proposition
$\dim(M) \leq \dim_{A/\mathfrak{m}}(\mathfrak{m} M / \mathfrak{m}^2 M)$。
（如 $M = A$ 时取等，称 $A$ 是 **[[正则局部环]]**）。
:::

维数与超越度的关系：

::: proposition
如 $A$ 是域 $k$ 上[[有限生成代数|有限生成]]整环，
$A$ 的[[分式域]]在 $k$ 上[[超越度]]与 $A$ 的维数相等。
:::

::: definition [深度]
序列 $x_1, \dots, x_n \in A$ 称为模 $M$ 的**正则序列**，
如果
\[
x_k \cdot \colon M / (x_1 M + \cdots + x_{k - 1} M)
\to M / (x_1 M + \cdots + x_{k - 1} M)
\]
是单射对任意 $k$ 成立，且 $M / (x_1 M + \cdots + x_n M) \neq 0$。
$M$ 的**深度**是其最长正则序列的长度，
记作 $\operatorname{depth}(M)$。
:::

::: proposition [维数与深度]
$\dim(M) \geq \operatorname{depth}(M)$
（取等时称 $M$ 是 **[[Cohen–Macaulay 模]]**）。
:::

维数也和一些函子的（上）同调维数有关系。

::: proposition
$\operatorname{Hom}(-,A)$ 的上同调维数如有限，
则等于 $A$ 的维数（取等时称 $A$ 是 **[[Gorenstein 环]]**）。
:::

::: proposition
函子
\[
(-) \otimes (-) \colon A\text{-}\mathsf{Mod}
\times A\text{-}\mathsf{Mod} \to A\text{-}\mathsf{Mod}
\]
的同调维数，以及函子
\[
\operatorname{Hom}(-,-) \colon A\text{-}\mathsf{Mod}^{\mathrm{op}}
\times A\text{-}\mathsf{Mod} \to A\text{-}\mathsf{Mod}
\]
的上同调维数如有限，则等于 $A$ 的维数
（取等时当且仅当 $A$ 是[[正则环]]）。
:::

```terms
Krull 维数:
  en: Krull dimension
  de: Krulldimension :f
  fr: dimension de Krull :f
```
