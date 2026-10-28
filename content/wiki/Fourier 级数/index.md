---
title: Fourier 级数
aliases: [Fourier 展开]
categories: [实分析]
---

<problems>
- “定义”一节缺少缓增分布的 Fourier 级数。
- “性质”一节命题“导数”中的多元情形 $f'_v(\xi)=\xi(v)\hat{f}(\xi)$ 左边似乎应为 $\widehat{f'_v}(\xi)$，右边似乎缺少因子 $2\pi i$。
</problems>

Fourier 级数是把 $\mathbb{R}$ 上周期函数展开成三角级数
（即各项形如 $e^{2\pi i nx}$ 的级数）的方法，是[[局部紧交换群]]上
[[Fourier 变换]]的特殊情形。它应用广泛，是分析[[周期函数]]、
求解[[微分方程]]的常用工具。

## 定义

::: definition
设函数 $f\colon\mathbb{R}\to\mathbb{C}$ 为[[周期函数]]，
周期为 $1$，且 $f\in L^1(\mathbb{R}/\mathbb{Z})$，即 $f$
在 $[0,1]$ 上 [[Lebesgue 可积]]。对 $n\in\mathbb{Z}$，
$f$ 的**第 $n$ 个 Fourier 系数**，记作
$\hat{f}(n)$ 或 $c_n(f)$，指的是
$$
\int_0^1f(x)e^{-2\pi i nx}\mathrm{d} x.
$$
$f$ 的 **Fourier 级数**指函数项级数
$$
\sum_{n\in\mathbb{Z}}\hat{f}(n)e^{2\pi i nx},
$$
不论其收敛性如何。如 $f$ 是 $[0,1]$ 或 $[-1/2,1/2]$
上的可积函数，可将其周期延拓，视为 $L^1(\mathbb{R}/\mathbb{Z})$ 中的函数，
此时也称该周期延拓的 Fourier 级数（系数）为 $f$ 的
Fourier 级数（系数）。
:::

::: remark
一些书中，周期 $1$ 的函数 $f$ 的 Fourier 级数形式为
$$
\sum_{n=0}^\infty a_n(f)\cos(2\pi nx)+
\sum_{n=1}^\infty b_n(f)\sin(2\pi nx).
$$
这里的形式和它的对应关系为
$$
\begin{cases}
  a_0(f)=c_0(f);\\
  a_n(f)=c_n(f)+c_{-n}(f),&n\in\mathbb{Z}_+;\\
  b_n(f)=i(c_n(f)-c_{-n}(f)),&n\in\mathbb{Z}_+.
\end{cases}
$$
:::

也可对 $\mathbb{R}^n$ 及其上周期函数定义。

::: definition
设 $n\in\mathbb{N}$，$\Lambda\subseteq\mathbb{R}^n$ 是[[晶格]]。
$f\colon\mathbb{R}^n\to\mathbb{C}$ 是周期为 $\Lambda$ 的周期函数，
即对 $\lambda\in\Lambda$ 都有 $f(x+\lambda)=f(x)$。
记 $\Lambda^\vee=\operatorname{Hom}_\mathbb{Z}(\Lambda,\mathbb{Z})$
为其[[对偶模|对偶]]。设 $f\in L^1(\mathbb{R}^n/\Lambda)$，
即 $f$ 在 $\mathbb{R}^n/\Lambda$ 上 [[Lebesgue 可积]]。
对 $\xi\in\Lambda^\vee$，$f$ 的**第 $\xi$ 个
Fourier 系数**，记作 $\hat{f}(\xi)$ 或 $c_\xi(f)$，
指的是
$$
\int_{\mathbb{R}^n/\Lambda}f(x)e^{-2\pi i\xi(x)}\mathrm{d} x;
$$
这里 $\mathrm{d} x$ 表示标准化 [[Lebesgue 测度]]，即 $\mathbb{R}^n$
的 Lebesgue 测度的适当倍数，使得 $\mathbb{R}^n/\Lambda$
测度是 $1$；$\xi$ 按线性延拓自然视为
$\mathbb{R}^n=\Lambda\otimes_\mathbb{Z}\mathbb{R}$ 到 $\mathbb{R}$ 的函数，
自然诱导 $\mathbb{R}^n/\Lambda$ 到 $\mathbb{R}/\mathbb{Z}$ 的函数。
$f$ 的 **Fourier 级数**指函数项级数
$$
\sum_{\xi\in\Lambda^\vee}\hat{f}(\xi)
e^{2\pi i\xi(x)},
$$
不论其收敛性如何。
:::

## 性质

::: proposition [导数]
$\widehat{f'}(n)=2\pi i n\hat{f}(n)$，只要等号两边有意义。
多元情形对向量 $v\in\mathbb{R}^n$，类似地有
$f'_v(\xi)=\xi(v)\hat{f}(\xi)$，其中 $f'_v$ 表示
$f$ 沿 $v$ 的[[方向导数]]，即 $f'_v(x)=
  \frac{\partial f(x+tv)}{\partial t}\bigr|_{t=0}$。
:::

::: proposition [乘积]
$\widehat{fg}=\hat{f}*\hat{g}$，$\widehat{f*g}
  =\hat{f}\hat{g}$，只要等号两边有定义，其中 $*$ 指[[卷积]]。
:::

::: proposition
设 $\Lambda=\mathbb{Z}^n$，将 $\Lambda^\vee$ 也等同于
$\mathbb{Z}^n$。设 $f(x)=f_1(x_1)\cdots f_n(x_n)$
为分离变量，则 $\hat{f}(\xi)=\widehat{f_1}(\xi_1)\cdots
  \widehat{f_n}(\xi_n)$ 亦为分离变量。
:::

::: proposition
变换 $f\mapsto\hat{f}$ 为从 $L^1$-范数到
$L^\infty$-范数的[[有界算子]]，[[算子范数]]为 $1$。
具体地说，$\|\hat{f}\|_\infty\le\|f\|_1$，且等号可以取到。
:::

::: corollary [[[Riemann–Lebesgue 引理]]]
对 $f\in L^1$，$\lim_{|\xi|\to\infty}\hat{f}(\xi)=0$。
换言之，$\hat{f}\in C_0(\Lambda^\vee)\subseteq
  L^\infty(\Lambda^\vee)$。
:::

::: proposition [$L^2$ 性质] {@L2}
如 $f\in L^2(\mathbb{R}^n/\Lambda)$，则 $\hat{f}\in
  L^2(\Lambda^\vee)$，$\|f\|_2=\|\hat{f}\|_2$，
且 $f$ 的 Fourier 级数 $L^2$-收敛到 $f$。
换言之，$f\mapsto\hat{f}$ 给出
[[Hilbert 空间]]同构 $L^2(\mathbb{R}^n/\Lambda)\to
  L^2(\Lambda^\vee)$。
:::

::: corollary [$L^p$ 性质]
设 $p\in[1,2]$，$p'=(1-p^{-1})^{-1}\in[2,+\infty]$。
如 $f\in L^p$，则 $\hat{f}\in L^{p'}$，
且 $\|\hat{f}\|_{p'}\le\|f\|_p$。
:::

::: proposition
如 $f\in C^{k+\alpha}$ 在
[[Hölder 空间]]中，其中 $k\in\mathbb{N}$，$0<\alpha\le1$，则
$\hat{f}(\xi)=O(|\xi|^{-k-\alpha})$。
:::

### 逐点收敛性

上面已经看到 $L^2$ 函数的 Fourier 级数 $L^2$-收敛到其本身。
事实上，该收敛是几乎处处的，这是 [[Carleson 定理]]。

::: theorem [Carleson–Hunt]
对 $f\in L^p$，其中 $p>1$，都有函数项级数
$$
\sum_{\xi\in\Lambda^\vee}\hat{f}(\xi)
e^{2\pi i\xi(x)}
$$
[[几乎处处收敛]]到 $f$ 本身。
:::

但 $L^1$ 函数的 Fourier 级数逐点收敛性可以很差，
这是 [[Kolmogorov]] 在 19 岁就指出的事实。

::: theorem [Kolmogorov]
存在函数 $f\in L^1(\mathbb{R}/\mathbb{Z})$，使得函数项级数
$$
\sum_{n\in\mathbb{Z}}\hat{f}(n)e^{2\pi i nx}
$$
处处不收敛。
:::

关于一个点的收敛还有以下判别：

::: theorem [[[Dirichlet–Dini 判别法]]]
设 $f\in L^1(\mathbb{R}/\mathbb{Z})$，$x_0\in\mathbb{R}/\mathbb{Z}$，
$c\in\mathbb{C}$，满足
$$
\int_0^1\left|\frac{f(x_0+t)+f(x_0-t)}{2}-c\right|
\frac{\mathrm{d} t}{t}<\infty,
$$
则 $f$ 的 Fourier 级数在 $x_0$ 处收敛到 $c$。
:::

## 例子

- 形如 $e^{2\pi i nx}$，$n\in\mathbb{Z}$ 的函数的有限线性组合，
  其 Fourier 级数显然是自身。

- 考虑 $f(x)$ 为恒同函数 $x$ 在 $[0,1]$ 的限制。
  则显然 $\hat{f}(0)=1/2$，而对 $n\ne0$ 有
  $$
  \hat{f}(n)=\int_0^1xe^{-2\pi i nx}\mathrm{d} x=
  \frac{i}{2\pi n}.
  $$
  于是由 @L2 即得
  $$
  \frac{1}{2^2}+\sum_{n\in\mathbb{Z}\setminus0}\frac{1}{(2\pi n)^2}=
  \int_0^1x^2\mathrm{d} x=\frac{1}{3},
  $$
  即
  $$
  \sum_{n=1}^\infty\frac{1}{n^2}=\frac{\pi^2}{6}.
  $$
  此法可对 $k\in\mathbb{Z}_+$ 求出 $\sum_{n=1}^\infty
    \frac{1}{n^{2k}}$，但不如用[[复分析]]来得高效。

## 推广

[[局部紧交换群]]上的 [[Fourier 变换]]是其推广，即可以把 Fourier
级数中的 $\mathbb{R}/\mathbb{Z}$ 和 $\mathbb{R}^n/\Lambda$ 换成一般的局部紧交换群。
对于紧交换群 $G$，其 Fourier 变换从 $L^1(G)$ 中函数得到
[[Pontryagin 对偶]] $\hat{G}$ 上的函数，而 $\hat{G}$ 为离散，
所以实际上也就是把 $L^1(G)$ 中函数表为函数项级数，各项为特征
$G\to S^1\subseteq\mathbb{C}$。

```terms
Fourier 级数:
  en: Fourier series
  de: Fourierreihe
  fr: série de Fourier
  el: σειρά Φουριέ
  la: series Fourieriana
Fourier 系数:
  en: Fourier coefficient
  de: Fourier-Koeffizient
  fr: coefficient de Fourier
  el: συντελεστής Φουριέ
  la: coefficiens Fourierianus
```
