---
title: Heisenberg 代数
categories: [Lie 理论, 量子力学]
navboxes: [Lie 理论, 量子力学]
---

**Heisenberg 代数**是一类由[[正则对易关系]]
定义的 [[Lie 代数]]，
与[[量子力学]]中的位置、动量以及产生、湮灭算子密切相关。

最简单的对易关系来自多项式空间上的求导与乘法。
若 $D=d/dx$，$M_x$ 表示乘以 $x$ 的算子，则
\[
[D,M_x]f
=
\frac{d}{dx}(xf)-x\frac{df}{dx}
=
f.
\]
因此，
\[
[D,M_x]=\operatorname{id}.
\]
Heisenberg 代数将这样的关系抽象为 Lie 括号关系。

## 定义

::: definition [Heisenberg 代数]
设 $k$ 是特征零的域，$n\geq1$。
**Heisenberg 代数** $\mathfrak h_n$
是以
\[
p_1,\dotsc,p_n,\quad
q_1,\dotsc,q_n,\quad K
\]
为基的 $(2n+1)$ 维 Lie 代数，
其 Lie 括号由
\[
[p_i,q_j]=\delta_{ij}K,
\]
以及
\[
[p_i,p_j]=[q_i,q_j]=[K,p_i]=[K,q_i]=0
\]
确定。

这里 $1\leq i,j\leq n$，
$\delta_{ij}$ 是 [[Kronecker 符号]]，
$K$ 是中心元素。
:::

特别地，$\mathfrak h_1$ 是三维 Lie 代数，
具有基 $p,q,K$，满足
\[
[p,q]=K,
\qquad
[p,K]=[q,K]=0.
\]

定义中的 $K$ 是一个 Lie 代数元素，
并不是预先指定的恒等算子。
只有在选定表示后，它才作用为某个线性算子。

## 例子

::: example [多项式表示]
在多项式空间
\[
V=k[x_1,\dotsc,x_n]
\]
上定义
\[
p_i=\frac{\partial}{\partial x_i},
\qquad
q_i=M_{x_i},
\qquad
K=\operatorname{id}_V.
\]
其中 $M_{x_i}$ 表示乘以变量 $x_i$。

这些算子满足
\[
\left[\frac{\partial}{\partial x_i},M_{x_j}\right]
=
\delta_{ij}\operatorname{id}_V,
\]
所以给出 $\mathfrak h_n$ 的表示。
:::

## 性质

::: proposition
Heisenberg 代数的中心与导出代数都是 $kK$：
\[
Z(\mathfrak h_n)
=
[\mathfrak h_n,\mathfrak h_n]
=
kK.
\]
因此，$\mathfrak h_n$ 是二步[[幂零 Lie 代数]]。
:::

::: proposition
设 $V$ 是非零表示空间，
且中心元素 $K$ 作用为非零标量
$\ell\operatorname{id}_V$。
则 $V$ 必须是无穷维的。
:::

::: proof
若 $V$ 有限维，对关系
\[
[p_1,q_1]=\ell\operatorname{id}_V
\]
两边取迹，得到
\[
0=\ell\dim V.
\]
由于底域的特征为零且 $\ell\ne0$，
这与 $V\ne0$ 矛盾。
:::

```terms
Heisenberg 代数:
  en: Heisenberg algebra
```
