---
title: 光滑同态
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**光滑同态**是一类[[环同态]]，
在[[代数–几何对偶]]下模拟[[微分流形]]的[[浸没]]。

## 定义

::: definition
设 $R\to A$ 是环同态，$\mathfrak{q}$ 是 $A$ 的[[素理想]]，
$\mathfrak{p}=\mathfrak{q}\cap R$。对 $d\in\mathbb{N}$，
称 $R\to A$ **在 $\mathfrak{q}$ 处 $d$ 维光滑**，
指它在 $\mathfrak{q}$ 处[[有限表现同态|有限表现]]、
$d$ 维[[平坦同态|平坦]]（即存在 $a\notin\mathfrak{q}$
使 $R\to A_a$ 为有限表现、平坦、纤维
$A\otimes_Rk(\mathfrak{p})$ 的[[Krull 维数|维数]]是 $d$），
且[[微分模]] $\Omega_{A/R}$ 在 $\mathfrak{q}$ 处局部化为秩 $d$ 自由。
称其**在 $\mathfrak{q}$ 处光滑**，
指存在 $d\in\mathbb{N}$ 使其在 $\mathfrak{q}$ 处 $d$ 维光滑。
称 $R\to A$ 为 **（$d$ 维）光滑同态**，指对 $A$
的每个素理想 $\mathfrak{q}$，它在 $\mathfrak{q}$ 处
（$d$ 维）光滑。此时也称 $A$ 为（$d$ 维）光滑 $R$-代数。
:::

::: remark
于是[[平展同态]]就是 $0$ 维光滑同态。
:::

## 性质

::: proposition
设 $R\to A$ 是环同态，$\mathfrak{q}$ 是 $A$ 的素理想，
$\mathfrak{p}=\mathfrak{q}\cap R$，$k=k(\mathfrak{p})$。
设 $R\to A$ 在 $\mathfrak{q}$ 处有限表现、平坦。
则对 $d\in\mathbb{N}$，其在 $\mathfrak{q}$ 处 $d$ 维光滑，
当且仅当纤维 $k\to A\otimes_Rk$
在 $\mathfrak{q}$ 处 $d$ 维光滑。
:::

::: proposition
环同态 $R\to A$ 为光滑，当且仅当其有限表现、平坦、
[[几何纤维]][[正则环|正则]]。
:::

::: proposition
光滑同态的复合、基变换仍是光滑同态。
:::

::: proposition
如 $R\to A$ 为光滑同态，$R$ 为

- [[$(\mathrm{R}_k)$]]；

- [[$(\mathrm{S}_k)$]]；

- [[既约环|既约]]；

- [[正规环|正规]]；

则 $A$ 亦然。
:::

::: proposition [过渡到极限]
设 $\{R_i\to A_i\}_{i\in I}$ 是[[有限表现同态]]的[[滤相系]]，
满足对 $i<j$，$A_j=A_i\otimes_{R_i}R_j$。记
$R=\operatornamewithlimits{colim}_iR_i$，
$A=\operatornamewithlimits{colim}_iA_i$。

- 如每个 $R_i\to A_i$ 光滑，则 $R\to A$ 光滑。

- 如 $R\to A$ 光滑，则存在 $i\in I$
  使得 $R_i\to A_i$ 光滑。

:::

以下是 [[Grothendieck]] 对光滑的刻画。
此类命题显示了幂零理想在交换代数和代数几何中不可或缺。
事实上，幂零理想是“形变”的代数对应物。

::: theorem
光滑等价于有限表现且[[形式光滑]]。详细地说，环同态
$R\to A$ 光滑，当且仅当其有限表现，且对任意环 $S$
及其理想 $I$ 满足 $I^2=0$ 以及图表
\[
\begin{tikzcd}
  R\ar[r]\ar[d]&S\ar[d]\\
  A\ar[r]\ar[ur,dashed]&S/I
\end{tikzcd}
\]
使其交换的虚线箭头存在。
:::

下面的命题常称为 Jacobi 判别法。这里比平展情形弱，
需要局部化 $A$。

::: proposition
设 $R\to A$ 是环同态，$\mathfrak{q}$ 是 $A$ 的素理想，
$d\in\mathbb{N}$。则 $R\to A$ 在 $\mathfrak{q}$ 处 $d$
维光滑当且仅当存在 $a\notin\mathfrak{q}$，$A_a$ 可以写成
$R[x_1,\ldots,x_{n+d}]/(f_1,\ldots,f_n)$ 的形式，
其中 [[Jacobi 行列式]]
$\det\left(\frac{\partial f_i}{\partial x_j}\right)
  _{1\le i,j\le n}$
在 $A$ 中可逆。
:::

::: corollary
光滑同态局部上是多项式环和[[平展同态]]的复合。
:::

特征 $0$ 时光滑的定义可以减弱。

::: proposition {@特征0}
设 $k$ 为特征 $0$ 域，$A$ 为 $k$ 上有限型代数。
则 $A$ 为光滑 $k$-代数当且仅当 $\Omega_{A/k}$ 为局部自由
$A$-模。
:::

## 例子

::: example
@特征0 在正特征不对，
即正特征时必须要求微分模的局部秩和纤维维数一样。
任取特征 $p$ 环 $R$，观察同态 $R\to R[x]/x^p$。
由[[微分模]]的表现容易算出其微分模为秩 $1$ 自由，
但其并不光滑。
:::

```terms
光滑同态:
  en: smooth homomorphism
  de: glatter Homomorphismus
  fr: homomorphisme lisse
$d$ 维光滑:
  en: smooth of dimension $d$
  de: glatt von dimension $d$
  fr: lisse de dimension $d$
```
