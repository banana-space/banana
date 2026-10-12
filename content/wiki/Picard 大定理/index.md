---
title: Picard 大定理
categories: [复分析]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [复分析]
---

::: convention
在本文中，

- $\mathbb{D}=\{z\in\mathbb{C}:|z|<1\}$ 指[[复平面]]的单位圆盘。

:::

**Picard 大定理**是[[复分析]]中关于[[本性奇点]]的重要定理，
说的是[[全纯函数]]在本性奇点附近最多有一个值取不到。它是
[[Casorati–Weierstraß 定理]]的巨大加强。

Picard 大定理也是 [[Picard 小定理]] 的推广。
小定理保证对于非多项式的 $\mathbb{C}$ 上全纯函数，它至多一个值取不到。
因为这种函数在 $\infty$ 处本性奇，所以可以应用Picard 大定理，
得知即便在 $\infty$ 的邻域内值域也如此。

## 陈述

::: theorem {@picard}
设 $f\colon\mathbb{D}\setminus0\to\mathbb{C}$ 是[[全纯函数]]，$0$
是 $f$ 的[[本性奇点]]。则 $f$ 的[[像集]]在 $\mathbb{C}$
中的[[补集]]至多只有一个点。
:::

::: remark
实际上
$$
\{w\in\mathbb{C}:0\in\overline{f^{-1}(w)}\}
$$
的补集至多只有一个点，因为可对更小的去心圆盘使用 @picard。
换言之，存在复数 $c$，使得对任意复数 $w\ne c$，都有一列复数
$z_n$，满足 $f(z_n)=w$ 且 $\lim_{n\to\infty}z_n=0$。
:::

## 证明

用反证法，设 $f\colon\mathbb{D}\setminus0\to\mathbb{C}\setminus\{0,1\}$
是[[全纯函数]]，$0$ 是 $f$ 的本性奇点，我们来推矛盾。

任取 $b\in\mathbb{C}\setminus\{0,1\}$。由
[[Casorati–Weierstraß 定理]]，存在一列 $a_n\in\mathbb{D}\setminus0$，
满足 $\lim_{n\to\infty}a_n=0$ 且 $\lim_{n\to\infty}f(a_n)=b$。
取 $a\in\mathbb{D}\setminus0$，使其[[模长]]大于每个 $a_n$。令
$f_n(z)=f(a_nz/a)$，则 $f_n$ 也是 $\mathbb{D}\setminus0$ 到
$\mathbb{C}\setminus\{0,1\}$ 的全纯函数，且 $\lim_{n\to\infty}f_n(a)=b$。

在 [[Picard 小定理]]的证明中我们已经看到 $\mathbb{C}\setminus\{0,1\}$
的[[万有覆叠]]是 $\mathbb{D}$。
换言之，存在全纯函数 $p\colon\mathbb{D}\to\mathbb{C}\setminus\{0,1\}$，
在拓扑上是万有覆叠。用[[指数函数]]容易发现 $\mathbb{D}\setminus0$
的万有覆叠也是 $\mathbb{D}$。分别取 $a$、$b$ 在覆叠映射下的原像
$\tilde{a}$、$\tilde{b}$，并沿覆叠映射提升 $f_n$ 为
$\tilde{f}_n\colon\mathbb{D}\to\mathbb{D}$ 如图
\[
\begin{tikzcd}
  \mathbb{D}\ar[r,"\tilde{f}_n"]\ar[d,"q"']&\mathbb{D}\ar[d,"p"]\\
  \mathbb{D}\setminus0\ar[r,"f_n"']&\mathbb{C}\setminus\{0,1\}
\end{tikzcd}
\]
使得 $\lim_{n\to\infty}\tilde{f}_n(\tilde{a})=\tilde{b}$。
由[[覆叠空间]]的理论这可以做到。现由 [[Arzela–Ascoli 定理]]，
把 $f_n$ 和 $\tilde{f}_n$ 换成子列，可设 $\tilde{f}_n$
[[内闭一致收敛]]到全纯函数 $\tilde{g}$。由于 $\tilde{g}$ 的像集含于
$\overline{\mathbb{D}}$，由[[开映射定理 (复分析)|开映射定理]]，只要 $\tilde{g}$
不是常值，像集就含于 $\mathbb{D}$；而如它是常值，由于
$\lim_{n\to\infty}\tilde{f}_n(\tilde{a})=\tilde{b}$，
它必为常值 $\tilde{b}\in\mathbb{D}$。于是 $\tilde{g}$ 也是
$\mathbb{D}$ 到 $\mathbb{D}$ 的全纯函数。此时由连续性容易发现
$p\circ\tilde{g}$ 在 $q$-[[覆叠变换]]下不变，于是给出全纯函数
$g\colon\mathbb{D}\setminus0\to\mathbb{C}\setminus\{0,1\}$ 如图
\[
\begin{tikzcd}
  \mathbb{D}\ar[r,"\tilde{g}"]\ar[d,"q"']&\mathbb{D}\ar[d,"p"]\\
  \mathbb{D}\setminus0\ar[r,"g"']&\mathbb{C}\setminus\{0,1\}
\end{tikzcd}
\]
而且 $f_n$ 内闭一致收敛到 $g$。于是函数列 $f_n$ 在
$S_{|a|}$ 上一致有界，其中 $S_r=\{z\in\mathbb{C}:|z|=r\}$。由于
$f_n(z)=f(a_nz/a)$，这说明 $f$ 在 $\bigcup_{n=1}^\infty S_{|a_n|}$ 上有界。
注意 $S_{|a_n|}$ 是圆心为 $0$、半径趋于 $0$ 的一列圆，
故由[[最大模原理]]即知 $f$ 在 $0$ 的去心邻域上有界，
与 $0$ 是 $f$ 的本性奇点矛盾。

## 例子

- $\exp(1/z)$ 取不到 $0$。

## 推论

::: corollary
全纯单射 $f:\mathbb{C}\to\mathbb{C}$ 仅有 $f(z)=az+b$ 其中 $a\ne 0$。
:::

::: proof
判断 $f$ 在 $\infty$ 的极点类型，它不能是本性奇点，否则根据 @picard，
在 $\infty$ 附近 $f$ 能无穷次地取除了一个点外的其他值，进而不能是单射；
它也不能是可去的，否则根据 [[Liouville 定理]] 可知 $f$ 是常函数。
故 $\infty$ 是 $f$ 的极点，由此可知 $f$ 是非常值的多项式。根据 [[代数基本定理]]，
只要 $f(z)-c=0$ 无重根，即 $c\notin\{f(z_0):z_0\in\mathbb{C},f'(z_0)=0\}$，
$f^{-1}(c)$ 就包含 $\deg f$ 个互不相同的点。这表明 $\deg f=1$，
最后不难检查次数 $1$ 的多项式都是单射。
:::

::: corollary
复平面 $\mathbb{C}$ 到自身的所有全纯单射，恰是所有全纯自同胚。它们构成群
\[
\operatorname{Aut}(\mathbb{C})=
\left\{\left[\begin{matrix}a&b\\0&1\end{matrix}\right]:a\in\mathbb{C}^*,b\in\mathbb{C}\right\}\cong\mathbb{C}^*\ltimes\mathbb{C}.
\]
:::

```terms
Picard 大定理:
  en: Picard's great theorem
```
