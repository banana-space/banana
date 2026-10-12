---
title: 特殊线性群
categories: [群论, 线性代数, Lie 理论, 代数群理论]
notices:
  - name: 问题
    items:
      - “性质”一节中命题“紧性”的证明不完整。
      - “根系”“表示论”各节需要扩充。
      - “例子”一节的内容宜移到“射影特殊线性群”条目。
      - “例子”一节中，$A \sim c A$（$c \in \operatorname{U}(1)$）似乎不保持 $\operatorname{SL}(2; \mathbb C)$，$\operatorname{PSL}(2; \mathbb C)$ 似乎应为 $\operatorname{SL}(2; \mathbb C)$ 商去 $\{\pm 1\}$。
navboxes: [Lie 群]
---

::: convention
在本文中，

- 所有环均指交换幺环。

:::

环 $A$ 上**特殊线性群**
由所有同阶行列式为 $1$ 的方阵组成，
它是[[一般线性群]]的[[正规子群]]，
也是重要的一类 Lie 群。

特殊线性群一般记作 $\operatorname{SL}(n, A)$ 或 $\operatorname{SL}_n(A)$。

## 定义

::: definition
对环 $A$，$n \in \mathbb N_+$，
**特殊线性群** $\operatorname{SL}(n, A)$
是所有[[行列式]]为 $1$ 的 $A$-系数
$n$ 阶方阵在矩阵乘法下组成的群。
:::

以上定义可以推广到在交换环 $R$ 上[[有限生成模|有限生成]]、
[[投射模|投射]]的非交换代数 $A$（例如[[四元数]] $\mathbb{H}$）上：
由于 $A$ 在 $R$ 上局部自由，
可以将系数为 $A$ 的矩阵在 $R$ 的局部上视为系数为 $R$ 的矩阵，
并计算其行列式。
可以证明行列式不依赖于 $A$ 在 $R$ 上的基的选取。

::: definition [推广] {@推广}
对上述 $A$，
特殊线性群 $\operatorname{SL}(n, A)$ 为行列式为 $1$ 的 $A$-系数
$n$ 阶方阵在矩阵乘法下组成的群。
:::

::: remark
上述定义中 $\operatorname{SL}(n, A)$ 与 $R$ 的选取有关。
不过 $A = \mathbb{H}$ 时，$R$ 只能取为 $\mathbb{R}$。
:::

不过我们在下面的正文中仍然只对交换环讨论，除非特殊说明。

## 性质

### 基本性质

特殊线性群是一般线性群的正规子群。

::: proposition
对环 $A$，有[[正合列]]
\[
\begin{tikzcd}
  0\ar[r] & \operatorname{SL}(n, A)\ar[r] & \operatorname{GL}(n, A)
  \ar[r,"\det"]& A^\times \ar[r] & 0.
\end{tikzcd}
\]
其中 $\det$ 表示[[行列式]]运算，$A^\times$ 表示 $A$ 的[[乘法群]]。
特别地，$\operatorname{SL}(n, A)$ 是[[群同态]]的核，因此是[[正规子群]]。
:::

以下列举了一些特殊线性群的群论性质。

::: proposition [元素个数]
对 [[$q$ 元域]] $\mathbb{F}_q$，$\operatorname{SL}(n, \mathbb{F}_q)$
元素个数为
\[
\frac{1}{q - 1}(q^n - 1)(q^n - q) \cdots (q^n - q^{n-1}).
\]
:::

### Lie 群结构

当 $A$ 为 $\mathbb{R}$-代数时，可以为特殊线性群赋予 Lie 群结构，
其中最重要的例子是 $A = \mathbb{R}$、$\mathbb{C}$ 以及 $\mathbb{H}$。
以下记 $\Bbbk = \mathbb{R}$、$\mathbb{C}$、$\mathbb{H}$。

::: proposition
$\operatorname{SL}(n, \Bbbk)$，
可视为 $\Bbbk^{n^2}$ 中方程的零点集。
这为 $\operatorname{SL}(n, \mathbb{R})$、$\operatorname{SL}(n, \mathbb{H})$ 赋予了[[光滑流形]]结构，
并为 $\operatorname{SL}(n, \mathbb{C})$ 赋予了[[复流形]]结构。
此时前二者是实 [[Lie 群]]，后者是复 Lie 群。
:::

作为 Lie 群，它对应一个 Lie 代数。

::: proposition [Lie 代数]
特殊线性群 $\operatorname{SL}(n, \Bbbk)$
的 Lie 代数是向量空间
\[
\mathfrak{sl}(n, \Bbbk) =
\{ X \in \mathrm{M}(n, \Bbbk) \mid \operatorname{tr} X = 0 \},
\]
（对 $\Bbbk = \mathbb{H}$，取迹是先转化为 $\mathbb{R}$ 系数，再取迹）
配有 [[Lie 括号]] $[X, Y] = XY - YX$。
:::

以下列举了特殊线性群的一些拓扑性质。

::: proposition [紧性]
$\operatorname{SL}(1, \Bbbk)$ 紧，但 $n \geq 2$ 时，
$\operatorname{SL}(n, \Bbbk)$ 不[[紧]]。
三者的极大紧子群为
[[特殊正交群]] $\operatorname{SO}(n, \mathbb{R})$（$\Bbbk = \mathbb{R}$），
[[特殊酉群]] $\operatorname{SU}(n)$（$\Bbbk = \mathbb{C}$），
以及[[紧辛群]] $\mathrm{Sp}(n)$（$\Bbbk = \mathbb{H}$）。
:::

::: proof
我们可以构造如下的[[离散拓扑|离散]]序列：
\[
A_n = \begin{pmatrix}
  n \\
  & 1/n \\
  & & 1 \\
  & & & \ddots \\
  & & & & 1
\end{pmatrix}.
\]
:::

::: proposition [连通性]
$\operatorname{SL}(n, \Bbbk)$ 都是连通的。
:::

::: proposition [基本群]
$\operatorname{SL}(2, \mathbb{R})$ 的基本群是 $\mathbb{Z}$；
而 $n \geq 3$ 时，
$\operatorname{SL}(n, \mathbb{R})$ 的基本群是 $\mathbb{Z} / 2$。
$\operatorname{SL}(n, \mathbb{C})$ 和 $\operatorname{SL}(n, \mathbb{H})$ 是单连通的。
:::

特殊线性群是单 Lie 群。

::: proposition [单性]
$\operatorname{SL}(n, \Bbbk)$ 是[[单 Lie 群]]，
$\operatorname{SL}(n, \mathbb{C})$ 对应 $A$ 型 [[Dynkin 图]]，
它的 Lie 代数也是相同类型的[[单 Lie 代数]]。
:::

### 群概形结构

可以将特殊线性群视为[[群概形]]，精确地说：

::: proposition
对概形 $S$，函子
\[
\mathsf{Sch}_S^{\text{op}} \to \mathsf{Grp},
\quad X \mapsto \operatorname{SL}(n, \Gamma(X, \mathcal{O}_X))
\]
是 $S$ 上[[群概形]]，称为特殊线性群，记作 $\operatorname{SL}_{n,S}$。
:::

此群概形也有单性。

::: proposition [单性]
$\operatorname{SL}_{n,S}$ 是 $S$ 上的单群概形，对应 $A$ 型 Dynkin 图。
:::

::: remark
此定义也可以推广至 @推广 中所述的非交换环 $A$：
沿用其中记号，则函子
\[
\mathsf{Alg}_R \to \mathsf{Grp}, \quad
R' \mapsto \operatorname{SL}(n, R' \otimes_R A)
\]
是群概形。
:::

### 根系

### 表示论

## 例子

```math
\operatorname{SL}(2, \mathbb C) =
\left\{
 \begin{pmatrix}
     a & b \\ c & d
 \end{pmatrix}
 \middle\vert
 a, b, c, d \in \mathbb C \wedge ad - bc = 1
 \right\}
```

是单位行列式的二阶矩阵，
和 [[Riemann 球面]] 上的[[共形变换]] [[Möbius 变换]]

```math
z \mapsto \frac{az + b}{cz + d}, \quad ad - bc \in \operatorname{U}(1)
```

有着一个同态关系，
商去等价关系 $A \sim c A$（$A \in \operatorname{SL}(2; \mathbb C)$，
$c \in  \operatorname{U}(1)$）后得到的
是[[射影特殊线性群]]
$\operatorname{PSL}(2; \mathbb C) \cong \operatorname{SL}(2; \mathbb C) / \operatorname{U}(1)$。

类似的有
$\operatorname{PSL}(2; \mathbb R) \cong \operatorname{SL}(2, \mathbb R) / (\mathbb Z / 2)$。

```terms
特殊线性群:
  en: special linear group
  de: spezielle lineare Gruppe
  fr: groupe spécial linéaire
  grc: εἰδικὴ γραμμικὴ ὁμάς
  la: caterva specialis linearis
```
