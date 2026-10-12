---
title: Levi-Civita 联络
categories: [Riemann 几何]
notices:
  - name: 问题
    items:
      - “存在唯一性”一节中定理的证明只证明了唯一性，缺少存在性的证明。
      - “坐标表示”一节中 Christoffel 符号的定义 $\Gamma_{ij}^k = \langle \nabla_{e_i} e_j, e_k \rangle$ 似乎只在 $e_i$ 正交时成立，一般应为 $\nabla_{e_i} e_j = \Gamma_{ij}^k e_k$，这也与随后命题的证明中所用的 $\langle \nabla_{e_i} e_j, e_l \rangle = \Gamma_{ij}^k g_{kl}$ 一致；另外 $e_i = \partial / \partial x^i$ 一般不是单位向量场。
navboxes: [Riemann 几何]
---

**[[Tullio Levi-Civita|Levi-Civita]] 联络**
是 [[Riemann 流形]]的[[切丛]]上“最自然”的[[联络]]，
也就是对[[向量场]]求导的方式。
这种求导方式称为向量场的[[协变导数]]。

Riemann 流形上的 Levi-Civita 联络存在且唯一，
这一结论称为 **Riemann 几何基本定理**
（@thm:存在唯一性）。

## 定义

::: definition [Levi-Civita 联络]
设 $(M, g)$ 为 [[Riemann 流形]]。
[[切丛]] $\mathrm{T} M$ 上的 **Levi-Civita 联络**
是满足如下条件的[[联络]] $\nabla$：

- （**与度量相容**）
  [[度量张量]] $g$ 的[[协变导数]]为 $0$：
  \[
  \nabla g = 0.
  \]
  等价地说，对任何光滑向量场 $X, Y, Z$，都有 [[Leibniz 法则]]
  \[
  X \langle Y, Z \rangle =
  \langle \nabla_X Y, Z \rangle +
  \langle Y, \nabla_X Z \rangle.
  \]

- （**无挠**）
  $\nabla$ 的[[挠率 (联络)|挠率]]为 $0$。
  等价地说，对任何光滑向量场 $X, Y$，都有
  \[
  \nabla_X Y - \nabla_Y X = [X, Y],
  \]
  其中 $[X, Y]$ 是向量场的 [[Lie 括号]]。

:::

## 性质

### 存在唯一性

::: theorem [Riemann 几何基本定理] {@thm:存在唯一性}
任何 [[Riemann 流形]] $(M, g)$ 上存在唯一的 Levi-Civita 联络 $\nabla$，
它由以下公式唯一确定：对 $M$ 上光滑向量场 $X, Y, Z$，有
\[
\langle \nabla_X Y, Z \rangle =
\frac{1}{2} \big(
  X \langle Y, Z \rangle
  + Y \langle Z, X \rangle
  - Z \langle X, Y \rangle
  - \langle [Y, X], Z \rangle
  - \langle [X, Z], Y \rangle
  - \langle [Y, Z], X \rangle
\big).
\]
:::

::: proof
假设 Levi-Civita 联络 $\nabla$ 存在，
则对任何光滑向量场 $X, Y, Z$，有
\[
\begin{aligned}
  &
  X\langle Y,Z \rangle+Y\langle Z,X \rangle-Z\langle X,Y \rangle
  \\
  = {} &
  \langle \nabla_X Y, Z \rangle + \langle Y, \nabla_X Z \rangle
  +\langle \nabla_Y Z, X \rangle + \langle Z, \nabla_Y X \rangle
  -\langle \nabla_Z X, Y \rangle - \langle X, \nabla_Z Y \rangle
  \\
  = {} &
  \langle \nabla_X Y, Z \rangle + \langle Z, \nabla_Y X \rangle
  +\langle Y, \nabla_X Z \rangle - \langle \nabla_Z X, Y \rangle
  +\langle \nabla_Y Z, X \rangle - \langle X, \nabla_Z Y \rangle
  \\
  = {} &
  2\langle \nabla_X Y, Z \rangle+ \langle [Y,X],Z \rangle
  +\langle [X,Z],Y \rangle + \langle [Y,Z],X \rangle,
\end{aligned}
\]
即定理所述的公式。
:::

### 坐标表示

在[[局部坐标系]]中，Levi-Civita 联络可以由 [[Christoffel 符号]]描述。
我们以 $(x^1, \dotsc, x^n)$ 表示该局部坐标系，
记 $e_i = \partial / \partial x^i$ 为沿坐标轴的单位向量场。

::: definition [Christoffel 符号]
**Christoffel 符号**定义为
\[
\Gamma _{i j} ^k = \langle \nabla_{e_i} e_j, e_k \rangle,
\]
其中 $i, j, k \in \{ 1, \dotsc, n \}$。
:::

::: remark
Christoffel 符号并不构成[[张量]]，
因为它不符合张量的坐标变换法则。坐标无关地看，
这就是说映射 $(X,Y)\mapsto\nabla_XY$ 不构成 $(2,1)$-张量。
:::

::: proposition
Levi-Civita 联络的 Christoffel 符号由以下公式给出：
\[
\Gamma_{i j}^k =
\frac{1}{2} g^{k l}
(\partial_i g_{j l} + \partial_j g_{i l} - \partial_l g_{i j}),
\]
其中 $g^{kl}$ 表示[[对偶度量张量]]，
也就是矩阵 $(g_{ij})$ 的[[逆矩阵]]的元素。
:::

::: proof
由 @thm:存在唯一性，有
\[
\langle \nabla_{e_i}e_j,e_l \rangle
=\frac{1}{2}\big(e_i\langle e_j,e_l\rangle
+e_j\langle e_l,e_i\rangle-e_l\langle e_i,e_j\rangle\big),
\]
即
\[
\Gamma_{ij}^k g_{kl}=\frac{1}{2}
(\partial_i g_{j l} + \partial_j g_{i l} - \partial_l g_{i j}).
\]
:::

```terms
Levi-Civita 联络:
  en: Levi-Civita connection
  de: Levi-Civita-Zusammenhang :m
  fr: connexion de Levi-Civita :f
```
