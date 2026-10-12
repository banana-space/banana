---
title: Riesz 表示定理
categories: [泛函分析]
navboxes: [泛函分析]
---

在[[泛函分析]]中，
**Riesz 表示定理**是说，[[Hilbert 空间]]上的
任何[[连续线性泛函]]都可以用[[内积空间|内积]]来表示。
Riesz 表示定理可以应用于很多涉及 Hilbert 空间的数学分支，
包括[[偏微分方程]]理论、[[测度论]]等。

## 叙述与证明

对 [[Hilbert 空间]] $X$ 及元素 $x, y \in X$，
以 $\langle x, y \rangle$ 表示 $x, y$ 的[[内积空间|内积]]。

::: theorem [Riesz 表示定理]
设 $f$ 是 Hilbert 空间 $X$ 上的
连续[[线性泛函]]。则存在唯一的 $y\in X$，
使得对任意 $x \in X$ 有
\[
f(x)=\langle {x}, {y} \rangle.
\]
:::

::: proof
不妨设 $f$ 非零。考虑
\[
M=\{x\in X \mid f(x)=0\},
\]
它是闭线性子空间。根据[[Hilbert 空间|正交分解定理]]，存在
$x_0\perp M,\|x_0\|=1,z\in M$ 使得
\[
x=\alpha x_0+z,
\]
其中 $\alpha=f(x)/f(x_0)$，这是因为
$f(z)=f(x-\alpha x_0)=0$，得 $f(x)=\alpha f(x_0)$。
两边对 $x_0$做内积得
\[
\langle {x}, {x_0} \rangle=\alpha,
\]
所以
\[
f(x)=\langle {x}, {x_0} \rangle f(x_0)=\langle {x}, {\overline{f(x_0)}x_0} \rangle.
\]
取 $y=\overline{f(x_0)}x_0$即可。

现在只要证明唯一性。如果 $y_1,y_2$ 都符合要求，则
\[
(x,y_1)=(x,y_2) \Rightarrow (x,y_1-y_2)=0,\forall x\in X,
\]
令 $x=y_1-y_2$ 得 $y_1=y_2$。
:::

在定理中还不难发现，$\|f\|=\|y\|$。
于是可以把 $f$ 和 $y$ 视为同一个东西。

::: remark
在 Riesz 表示定理中，$X$ **完备**的假设是必要的。
作为反例，
考虑 $[0,1]$ 上的全体复值连续函数 $C([0,1])$ 在
$\langle f,g\rangle\overset{\text{def}}{=} \int_0^1 f\bar{g}$ 下成为内积空间。
设 $\varphi$ 是阶梯函数
\[
\varphi=\begin{cases}
0, & 0\le x\le\frac 12 \\ 1,& \frac 12<x\le 1
\end{cases}.
\]
我们断言 $C([0,1])$ 上有界线性泛函 $f\mapsto \int_0^1 f\bar{\varphi}=\int_0^1 f\varphi$
不能表示成 $f\mapsto \int_0^1 f\bar{g}$（$g\in C([0,1])$）的形式。
如果存在 $g\in C([0,1])$，$\int_0^1 f\varphi=\int_0^1 f\bar{g}$ 对任意 $f\in C([0,1])$ 成立，
则 $\int_0^1 f(\varphi-\bar{g})=0$ 对任意 $f\in C([0,1])$ 成立。
对任意 $\psi\in L^2([0,1])$，由估计
\[
\int_0^1 |\psi (\varphi-\bar{g})|\le \int_0^1|(\psi-f)(\varphi-\bar{g})|+ \int_0^1 |f(\varphi-\bar{g})|
\le \sqrt{\int_0^1 |\psi-f|^2\int_0^1 |\varphi-\bar{g}|^2}
\]
知 $\int_0^1 |\psi (\varphi-\bar{g})|=0$，所以 $\varphi=\bar g$ a.e. $x\in [0,1]$。
但这表明对任意 $\delta$，存在 $x\in (\frac 12-\delta,\frac 12)$ 使 $g(x)=0$，
也存在 $x\in (\frac 12,\frac 12+\delta)$ 使 $g(x)=1$，$g$ 不可能在 $\frac 12$ 处连续。
:::

这个定理还有一个简易的推广：[[共轭双线性函数]]可以用[[算子]]和内积来表示。

::: definition
设 $\mathbb K$ 是包含于 $\mathbb C$ 的[[域]]，
$\mathbb K$-[[向量空间]] $X$ 上的二元函数 $\alpha\colon X\times X\to \mathbb K$
称为 **[[共轭双线性函数]]**，如果满足
\[
\begin{aligned}
  \alpha(a_1x_1+a_2x_2, \, y)
  & = a_1 \cdot \alpha(x_1,y) + a_2 \cdot \alpha(x_2,y), \\
  \alpha(x, \, a_1y_1+a_2y_2)
  & = \bar{a}_1 \cdot \alpha(x,y_1) + \bar{a}_2 \cdot \alpha(x,y_2),
\end{aligned}
\]
其中 $x_1,x_2,y_1,y_2,x,y$ 是 $X$ 的元素，
$a_1,a_2\in\mathbb K$。
:::

::: theorem
设 $a(x,y)$ 是 Hilbert 空间 $X$ 上的
共轭双线性函数，且存在 $M>0$ 使得
$|a(x,y)|\leq M\|x\|\|y\|$。
则存在 $X$ 上唯一的有界线性算子 $A$ 满足
\[
a(x,y)=(x,Ay),\quad\forall x,y\in X.
\]
:::

::: proof [证明概要]
固定 $y\in X$，则 $x\mapsto a(x,y)$
是连续线性泛函。根据 Riesz 表示定理，存在
$z=z(y)\in X$ 使得 $a(x,y)=(x,z(y))$。
令映射 $A\colon y\mapsto z(y)$，根据 $a$ 给出的性质
不难证明它是线性和有界的算子。最后仿照 Riesz
表示定理证明中的方法不难证明唯一性。
:::

## 应用

设$\Omega$是$\mathbb{R}^n$的有界开集，考虑在偏微分方程中经典的 [[Poisson 方程]]的一个
[[Dirichlet 边值问题]]：
\[
\left\{\begin{aligned}
  -\Delta u & = f && \text{于 } \Omega \text{ 上}, \\
  u & = 0 && \text{于 } \partial \Omega \text{ 上}.
\end{aligned}\right.
\]
它的[[弱解]]是指满足下面式子的 $u\in H_0^1(\Omega)$：
\[
\int_\Omega\nabla u\cdot\nabla v\,\mathrm dx=\int_\Omega fv\,\mathrm dx,
\quad\forall v\in H_0^1(\Omega)
\]

::: theorem
对任意 $f\in H^{-1}(\Omega)$，上述边值问题的弱解存在唯一。
:::

::: proof
先证明存在性。首先，
\[
\langle {u}, {v} \rangle_1=\int_\Omega\nabla u\cdot\nabla v\,\mathrm dx
\]
是 $H_0^1(\Omega)$ 上的内积，且由[[Poincaré 不等式]]，这一内积诱导的范数
（记为$\|\cdot\|_1$）与$H^1$范数等价，于是
\[
\begin{aligned}
  \left|\int_\Omega fv\,\mathrm dx \right|
    \leq \|f\|_{H^{-1}}\|v\|_{H^1}\leq C\|f\|_{H^{-1}}\|v\|_{1}.
\end{aligned}
\]
这表明
\[
v\mapsto \int_\Omega fv\,\mathrm dx
\]
是 $H_0^1(\Omega)$ 上的连续线性泛函。
应用 Riesz 表示定理：存在$u\in H_0^1(\Omega)$
使得
\[
\langle {u}, {v} \rangle_1=\int_\Omega \nabla u\cdot\nabla v\,\mathrm dx=\int_\Omega fv\,\mathrm dx,
\]
从而 $u$ 是弱解。

至于唯一性，证明与 Riesz 表示定理中的方法一致。
:::

Riesz 表示定理还可以用来证明
[[Radon–Nikodym–Lebesgue 定理]]，参见对应条目。

```terms
Riesz 表示定理:
  en: Riesz representation theorem
  de: Rieszscher Darstellungssatz
  fr: Théorème de représentation de Riesz-Fréchet
```
