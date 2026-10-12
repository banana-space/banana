---
title: Stein 流形
categories: [复几何]
navboxes: [复几何]
---

**Stein 流形**是一种具有特殊性质的[[复流形]]，
满足一种关于[[全纯函数]]的类似[[凸集|凸性]]的性质，
并且其上的全纯函数充分多，以至能分离不同的点。

更一般地，**Stein 空间**类似于 Stein 流形，但允许[[奇点]]存在。
它们是[[代数几何]]中的[[仿射簇|仿射代数簇]]在[[复解析几何]]中的类比。

## 定义

::: definition
设 $X$ 是[[复解析簇]]，记 $\mathcal O_X$ 为 $X$ 上的[[全纯函数层]]。

若 $X$满足以下两个条件，则称 $X$ 是 **Stein 空间**：

- $X$ 是**全纯凸**的，即任意[[紧集|紧]]子集 $K\subset X$，如下集合
  \[
  \overline K:=\left\{z\in X: \forall f\in\mathcal O_X(X),\quad
  |f(z)|\le\sup_{w\in K}|f(w)|\right\}
  \]
  亦称为 $K$ 的全纯凸包，
  也是 $X$ 的紧子集。

- $X$ 是**全纯可分**的，即对任意 $X$ 中不同两点 $x\ne y$，
  存在全纯函数 $f\in\mathcal O_X(X)$ 使得 $f(x)\ne f(y)$。

如果 $X$ 还是复流形，则称 $X$ 为 **Stein 流形**。
:::

## 例子

- $\mathbb C$ 的开子集都是Stein 流形。

- 更一般地，每个不紧的[[Riemann 面]]都是Stein 流形。

- 对任意正整数 $n$，$\mathbb C^n$ 本身是 Stein 流形。

- 每个Stein 流形的闭子复流形仍是Stein 流形。
  特别地，$\mathbb C^n$ 的闭子复流形都是Stein 流形（代数几何中光滑仿射簇）。
  所以任何复仿射代数簇 $X$ 的[[解析化]] $X^\mathrm{an}$ 都是 Stein 流形。

- $\mathbb C^n$ 中的任何[[全纯域]]（该开集上存在一个全纯函数不能延拓到任何更大的区域，
  等价于该区域全纯凸）都是一个Stein 流形。

- 设 $E\to X$ 是Stein 流形 $X$ 上的全纯向量丛，则全空间 $E$ 是Stein的。

## 性质

- Stein 流形满足两个[[Cartan 定理]]，
  其中Cartan 定理B极为重要，
  类似代数几何中仿射簇的[[Serre 定理]]。

  考虑Stein 流形 $X$ 上的任意解析[[凝聚层]] $\mathcal F$，那么：

::: theorem [Cartan 定理A]
层 $\mathcal F$ 由其[[整体截面]]张成。
:::

::: theorem [Cartan 定理B]
对任意正整数 $n\in\mathbb Z_+$，都有[[层上同调]]消没
\[
H^n(X,\mathcal F)=0.
\]
:::

- 作为直接推论，凝聚层范畴上的整体截面函子 $\Gamma(X,-)$ 是[[正合函子]]。
  反过来，这也是Stein 流形的一个等价刻画。

- Cartan 定理B的逆亦真：

::: proposition [Cartan 定理B的逆加强]
若复流形 $X$ 满足：对其上的任意解析凝聚[[理想层]] $\mathcal I\subset\mathcal O_X$，
都有[[层上同调]]消没
\[
H^1(X,\mathcal I)=0,
\]
则 $X$ 必是一个Stein 流形。
:::

因此Cartan 定理B也可以视作Stein 流形的另一个等价刻画。

- Oka–Grauert 原理指出，Stein 流形 $X$ 上的全纯[[向量丛]]的分类完全由其拓扑分类决定。
  也就是说如果 $X$ 上两个全纯向量丛作为拓扑复向量丛同构，则它们作为全纯向量丛同构。

- Andreotti–Frankel 定理指出，若 $X$ 是一个复 $n$ 维的Stein 流形，
  则它具有一个临界点指标不超过 $n$ 的[[Morse 函数]]，
  因此 $X$ 具有一个不超过（实）$n$ 维的[[CW 复形]]的同伦形。

  所以$H^k(X,\mathbb Z)=H_k(X,\mathbb Z)=0$对一切正整数$k>n$（注意一般情况下 $n$
  维复流形这里的结论只对 $k>2n$ 成立）。

- Stein 流形的全纯[[de Rham 上同调]]同构于一般的复系数de Rham 上同调。

- 特别地如果 $X$ 是一个非紧的Riemann 面，则[[指数正合列]]给出
  \[
  H^1(X,\mathcal O_X)\to H^1(X,\mathcal O_X^*)\to H^2(X,\mathbb Z)\to H^2(X,\mathcal O_X)
  \]
  正合，由于$H^1(X,\mathcal O_X)=H^2(X,\mathcal O_X)=0$，
  所以$H^1(X,\mathcal O_X^*)\cong H^2(X,\mathbb Z)=0$（因为前面的同伦形结果），
  因此 $X$ 上的线丛都是平凡的，更一般地，$X$ 上的向量丛都是平凡的！

  因为根据向量丛的稳定性理论，
  对于 $X$ 上的秩 $r>1$ 的拓扑复向量丛 $E$，
  必然具有处处非零的整体截面（障碍类位于
  $H^{2r}(X,\pi_{2r-1}(\mathbb S^{2r-1}))=H^{2r}(X,\mathbb Z)=0$ 中），
  从而 $E\cong E_0\oplus\mathcal O_X$ 对某秩 $r-1$ 的复向量丛 $E_0$ 成立。
  由此归纳可证 $E\cong \mathcal O_X^{\oplus r}$。

- Stein 流形也具有嵌入定理，类似于[[Whitney 嵌入定理]]。
  任意 $n$ 维的Stein 流形 $X$ 都可以嵌入 $\mathbb C^{2n+1}$，
  实际上存在嵌入（这里指的是一个到像的[[双全纯映射]]，下同）
  \[
  i:X\hookrightarrow\mathbb C^{2n+1}.
  \]
  满足 $i$ 为一个[[紧合映射]]。

  另外，这里的嵌入维数 $2n+1$ 并非最优。对 $n\ge 2$，最优的维数已被证明是 $N=n+[\frac n2]+1$。
  可以构造Stein 曲面
  \[
  Y:=\{[x:y:z]\in\mathbb {CP}^2:x^2+y^2+z^2\ne 0\}.
  \]
  对正整数 $n\ge 2$，定义
  \[
  X_n:=
  \begin{cases}
    Y^m, & n=2m;\\
    Y^m\times\mathbb C, & n=2m+1.
  \end{cases}
  \]
  则 $X_n$ 是一个复 $n$ 维的Stein 流形，且不存在紧合嵌入 $X_n\subset\mathbb C^{[{3n}/2]}$。

- 对 $n$ 维的Stein 流形 $X$ 以及点 $x\in X$，
  存在 $f_1,\cdots,f_n\in\mathcal O_X(X)$，使得它们在 $x$ 局部构成一个[[坐标卡]]，
  即给出 $x$ 的一个邻域到 $\mathbb C^n$ 的某个开子集间的双全纯映射。

- 考虑Stein 流形 $X$ 的[[Dolbeault 上同调]]，对一切$p\in\mathbb Z, q\in\mathbb Z_+$，
  \[
  \quad H^{p,q}(X)\cong H^q(X,\Omega^p)=0.
  \]

```terms
Stein 流形:
  en: Stein manifold
  de: Steinsche Mannigfaltigkeit :f
Stein 空间:
  en: Stein space
  de: Steinscher Raum :m
```
