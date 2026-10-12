---
title: Weyl 判别法
aliases: [Weyl 判别]
categories: [Diophantos 逼近, 动力系统]
---

::: convention
在本文中，

- $\mathbf{e}(x)=\exp(2\pi\mathrm{i} x)$。

:::

**Weyl 判别法**是判别[[一致分布]]的常用方法，
把一致分布定义中的区间特征函数换成三角函数来验证性质。

## 陈述

Weyl 判别法在 $\mathbb{T}=\mathbb{R}/\mathbb{Z}$ 上，或者说 $[0,1]$ 上，
形式如下：

::: theorem {@一维}
设 $\{a_n\}_{n=1}^\infty$ 是 $\mathbb{T}$ 中点列。
以下几条等价：

1. $\{a_n\}_{n=1}^\infty$ 为[[一致分布]]。

2. 对任意 [[Riemann 可积]]函数
   $f\colon\mathbb{T}\to\mathbb{C}$ 都有
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)=
      \int_\mathbb{T}f$。

3. 对任意[[连续函数]]
   $f\colon\mathbb{T}\to\mathbb{C}$ 都有
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)=
      \int_\mathbb{T}f$。

4. 对任意 $k\in\mathbb{Z}\setminus0$，
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N\mathbf{e}(ka_n)=0$。

:::

高维形式如下：

::: theorem
设 $\{a_n\}_{n=1}^\infty$ 是 $\mathbb{T}^d$ 中点列。
以下几条等价：

1. $\{a_n\}_{n=1}^\infty$ 为[[一致分布]]。

2. 对任意 [[Riemann 可积]]函数
   $f\colon\mathbb{T}^d\to\mathbb{C}$ 都有
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)=
      \int_{\mathbb{T}^d}f$。

3. 对任意[[连续函数]]
   $f\colon\mathbb{T}^d\to\mathbb{C}$ 都有
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)=
      \int_{\mathbb{T}^d}f$。

4. 对任意 $k\in\mathbb{Z}^d\setminus0$，
   $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N\mathbf{e}(\left<k,a_n\right>)=0$，
   其中 $\left<\cdot,\cdot\right>$ 表示内积
   $\mathbb{Z}^d\times\mathbb{T}^d\to\mathbb{T}$。

:::

## 证明

我们来证一维情形，高维的证明完全一样。回忆 $\{a_n\}_{n=1}^\infty$
[[一致分布]]的定义：对任一开区间 $U\subseteq\mathbb{T}$，
$$
\lim_{N\to\infty}\frac{\#\{n\in\mathbb{Z}_+\mid n\le N,\,
a_n\in U\}}{N}=\operatorname{vol}(U),
$$
即数列在 $U$ 中的项占比趋于 $\operatorname{vol}(U)$。
现对 $\mathbb{T}$ 上复值函数 $f$ 考虑如下条件：

- $(*)$ $\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)=
  \int_\mathbb{T}f$。

则显然 $(*)$ 对常函数成立。于是 @一维 的各个条件分别相当于：

1. $(*)$ 对任一开区间 $U$ 的示性函数
   $\chi_U(x)=\begin{cases}1,&x\in U;\\0,&x\notin U;\end{cases}$
   成立。

2. $(*)$ 对 [[Riemann 可积]]函数成立。

3. $(*)$ 对[[连续函数]]成立。

4. $(*)$ 对函数 $\mathbf{e}(kx)$ 成立，对任意 $k\in\mathbb{Z}$。

这样显然有 2 推 1、2 推 3、3 推 4。注意：

- $(*)$ 如对一些函数成立，则对它们的线性组合也成立。

- $\mathbb{T}$ 上函数列 $\{f_n\}$
  [[一致收敛]]于函数 $f$，且 $(*)$ 对各个 $f_n$ 成立，
  则 $(*)$ 对 $f$ 也成立。

于是由 [[Stone–Weierstrass 定理]]可得 4 推 3。下证其余。

- 3 推 1：取两列连续函数 $g_m\colon\mathbb{T}\to[0,1]$，
  $h_m\colon\mathbb{T}\to[0,1]$，满足：

  - 对任一 $m$，$g_m\le\chi_U\le h_m$。

  - $\lim_{m\to\infty}\int_\mathbb{T}(h_m-g_m)=0$。

  于是对固定的 $m$，条件 3 给出
  $$
  \int_\mathbb{T}g_m=
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Ng_m(a_n)\le
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N\chi_U(a_n)\le
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nh_m(a_n)
  =\int_\mathbb{T}h_m;
  $$
  令 $m\to\infty$ 即得 $\lim_{N\to\infty}\frac{1}{N}
  \sum_{n=1}^N\chi_U(a_n)=\int_\mathbb{T}\chi_U$。

- 1 推 2：拆成实部和虚部，只需对实值 Riemann 可积函数证明
  $(*)$。对实值 Riemann 可积函数 $f$，由 Riemann 可积的定义，
  存在一列简单函数 $s_m\le f$，一列简单函数 $t_m\ge f$，
  使得 $\lim_{m\to\infty}\int_\mathbb{T}s_m=
    \lim_{m\to\infty}\int_\mathbb{T}t_m=\int_\mathbb{T}f$；
  这里简单函数指的是开区间示性函数的线性组合。于是由条件 1 知
  $$
  \int_\mathbb{T}s_m=
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Ns_m(a_n)\le
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nf(a_n)\le
  \lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nt_m(a_n)
  =\int_\mathbb{T}t_m;
  $$
  令 $m\to\infty$ 即得 $\lim_{N\to\infty}\frac{1}{N}
    \sum_{n=1}^Nf(a_n)=\int_\mathbb{T}f$。

## 应用

标准的应用是：

::: theorem {@等差}
对[[无理数]] $\alpha$，点列 $\{n\alpha\bmod1\}_{n=1}^\infty$
在 $\mathbb{T}$ 上一致分布。
:::

::: proof
我们来验证 @一维 的条件 4。注意 $\mathbf{e}(x)$ 只依赖于
$x\bmod1$，于是条件 4 极限号中的式子相当于
$$
\frac{1}{N}\sum_{n=1}^N\mathbf{e}(kn\alpha)=
\frac{\mathbf{e}(k\alpha)}{N}\frac{1-\mathbf{e}(kN\alpha)}{1-\mathbf{e}(k\alpha)},
$$
模长不大于 $2N^{-1}|1-\mathbf{e}(k\alpha)|^{-1}$。由于 $\alpha$
是无理数，$\mathbf{e}(k\alpha)\ne1$，所以它在 $N\to\infty$
时趋于 $0$。
:::

下面的定理也是其推论，证明见主条目。

::: theorem [[[van der Corput 差分定理]]]
如 $\mathbb{T}$ 中点列 $\{a_n\}_{n=1}^\infty$
满足对任意 $h\in\mathbb{Z}_+$，差分点列
$\{a_{n+h}-a_n\}_{n=1}^\infty$ 一致分布，则
$\{a_n\}_{n=1}^\infty$ 本身一致分布。
于是结合 @等差 可得：如实多项式 $f(x)$ 的最高次项系数是无理数，则
$\{f(n)\bmod1\}_{n=1}^\infty$ 一致分布。
:::

## 推广

用 [[Peter–Weyl 定理]]可将 Weyl 判别法推广到一般的[[紧群]]上。

::: theorem
设 $G$ 是[[紧群]]，$\{a_n\}_{n=1}^\infty$ 是 $G$ 中点列。
则 $\{a_n\}_{n=1}^\infty$（关于 [[Haar 测度]]）一致分布，
当且仅当对 $G$ 的任一非平凡不可约酉表示 $(\rho,V)$，
$$
\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N\rho(a_n)=0,
$$
其中左边的极限是在有限维复线性空间
$\operatorname{End}_\mathbb{C}(V)$ 中计算。
:::

（应该也有[[齐性空间]]版本，大概对应于 $L^2(G/H)$ 中出现的表示。）

```terms
Weyl 判别法:
  en: Weyl's criterion
  de: Weylkriterium
  fr: critère de Weyl
```
