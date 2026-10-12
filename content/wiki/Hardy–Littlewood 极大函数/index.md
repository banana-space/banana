---
title: Hardy–Littlewood 极大函数
aliases: [Hardy-Littlewood 极大函数]
categories: [实分析, 调和分析]
---

**Hardy–Littlewood 极大函数**是[[实分析]]和[[调和分析]]
中重要的[[次线性算子]]，是[[极大算子]]的一类典型代表。

## 定义

我们考虑 [[Euclid 空间]] $\mathbb{R}^d$ 上取值为
$\mathbb{R}$ 或 $\mathbb{C}$ 的函数，
并使用 $\mathbb{R}^d$ 上的[[Lebesgue 测度]]。
但一些定义和结论可以推广到一般的[[各向同性空间]]。

::: definition [Hardy–Littlewood 极大函数]
$\mathbb{R}^d$ 上 [[Lebesgue 局部可积函数]] $f$ 的
**Hardy–Littlewood 极大函数**指
$$
Mf(x):=\sup_{r\in\mathbb{R}_+}\frac{1}{m(B_r(x))}
\int_{B_r(x)}|f(y)|\mathrm{d} y,
$$
其中 $m(E)$ 表示 $\mathbb{R}^d$中子集$E$的
[[Lebesgue 测度]]，
$B_r(x)$ 表示中心在$x$、半径为 $r$ 的开球。
:::

值得注意的是，定义并不能显然保证$Mf$几乎处处有限。
事实上，这是下文极大定理（@thm:maximal_theorem）的推论。

## 性质

::: proposition
$Mf$ 为[[下半连续函数]]。换言之，对 $A\in\mathbb{R}$，
$\{Mf>A\}=\{x\in\mathbb{R}^d\mid Mf(x)>A\}$ 为开集。
:::

::: proof
如 $x\in\mathbb{R}^d$ 满足 $Mf(x)>A$，则存在 $r\in\mathbb{R}_+$ 使得
$$
\frac{1}{m(B_r(x))}\int_{B_r(x)}|f(y)|\mathrm{d} y>A.
$$
取 $\delta>0$ 使得上式左边大于 $(1+\delta)^dA$。则对
$x'\in B_{\delta r}(x)$，
$$
\frac{1}{m(B_{(1+\delta)r}(x'))}
\int_{B_{(1+\delta)r}(x')}|f(y)|\mathrm{d} y\ge
\frac{1}{(1+\delta)^dm(B_r(x))}
\int_{B_r(x)}|f(y)|\mathrm{d} y>A,
$$
从而 $Mf(x')>A$。所以 $\{Mf>A\}$ 为开集。
:::

### $L^1$ 估计

::: theorem [极大定理] {@thm:maximal_theorem}
对 $A\in\mathbb{R}_+$，
$$
m\{Mf>A\}\le3^dA^{-1}\|f\|_{L^1}.
$$
特别地，如 $f$ 为 $L^1$函数（即$f \in L^1(\mathbb{R}^d)$），
则 $Mf$ 为弱 $L^1$函数（即$Mf$在[[Lorentz 空间]]
$L^{1,\infty}(\mathbb{R}^d)$中）。
:::

::: proof
由于 $\{Mf>A\}$ 为开集，只需对任一紧集
$K\subset\{Mf>A\}$ 证明 $m(K)\le3^dA^{-1}\|f\|_{L^1}$。
对任一 $x\in K$，取 $r_x\in\mathbb{R}_+$ 使得
\[
\frac{1}{m(B_{r_x}(x))}\int_{B_{r_x}(x)}|f(y)|\mathrm{d} y>A.
\]
显然开球族 $\{B_{r_x}(x)\}_{x\in K}$ 覆盖 $K$。
故由 [[Vitali 覆盖引理]]，存在 $x_1,\ldots,x_n\in K$
使得 $\{B_{r_i}(x_i)\}_{i=1}^n$ 两两不交，且
$\{B_{3r_i}(x_i)\}_{i=1}^n$ 覆盖 $K$，其中 $r_i=
  r_{x_i}$。于是
\[
m(K)\le\sum_{i=1}^nm(B_{3r_i}(x_i))=3^d
\sum_{i=1}^nm(B_{r_i}(x_i))\le3^dA^{-1}\sum_{i=1}^n
\int_{B_{r_i}(x_i)}|f(y)|\mathrm{d} y\le3^dA^{-1}\|f\|_{L^1}.
\]
:::

### $L^p$ 估计

::: theorem [$L^p$ 估计] {@thm:Lp}
设 $1<p\le\infty$。存在仅依赖于$p,d$的常数 $C_{p,d}\in\mathbb{R}_+$
使得
$$
\|Mf\|_{L^p}\le C_{p,d}\|f\|_{L^p}.
$$
:::

关于这一定理，我们提供两种证明方式。

::: proof [证明（插值）]
根据定义显然可以观察到$M$是一个$\mathbb{R}^n$到
$\mathbb{R}^n$上的次线性算子。定义同时给出
\[
\|Mf\|_\infty \leq \|f\|_\infty,
\]
说明$M$是强$(\infty,\infty)$型。而极大定理
（@thm:maximal_theorem）说明$M$是弱$(1,1)$型。
因此[[Marcinkiewicz 插值定理]]说明$M$是强$(p,p)$型。
:::

::: proof [证明（构造）]
对于任意$f \in L^p$，[[Cavalieri 原理]]说明
\[
\|f\|_p = \left( p\int_0^\infty \alpha^{p-1}
|\{x \in \mathbb{R}^d:|f(x)|>\alpha \}| d\alpha
\right)^{1/p}.
\]
考虑将$f$写作
$f=f\mathbb{1}_{|f| \le \frac{\alpha}{2}}+f \mathbb{1}_{|f| \ge \frac{\alpha}{2}}=:f_1+f_2$。
注意到$f_1 \in L^\infty$而$f_2 \in L^1$，
这也是我们构造的目的。
$M$的次线性给出了
\[
M(f)(x) \leq M(f_1)(x)+M(f_2)(x),
\]
所以$\{x \in \mathbb{R}^d:|Mf(x)|>\alpha \} \subset
   \{x \in \mathbb{R}^d:|Mf_1(x)|>\frac{\alpha}{2} \} \cup
   \{x \in \mathbb{R}^d:|Mf_2(x)|>\frac{\alpha}{2} \}$。
而注意到$\|Mf\|_\infty \leq \|f\|_\infty$，这说明
\[
\left| \left\{x \in \mathbb{R}^d:|Mf_1(x)|>\frac{\alpha}{2}
\right\} \right| = 0.
\]
因此，我们得到
\[
\begin{aligned}
  \|Mf\|_p^p
  &= p\int_0^\infty \alpha^{p-1}
  |\{x \in \mathbb{R}^d:|Mf(x)|>\alpha \}| d\alpha \\
  &\leq p\int_0^\infty \alpha^{p-1}
  \left| \left\{x \in \mathbb{R}^d:|Mf_2(x)|>\frac{\alpha}{2}
  \right\} \right| d\alpha \\
  &\leq 3^d p\int_0^\infty \alpha^{p-1}
  \frac{2}{\alpha} \|f\mathbb{1}_{|f| \ge \alpha/2}\|_1 d\alpha \\
  &= 2\cdot 3^d p \int_{\mathbb{R}^d} |f(x)|
  \left( \int_0^{2|f(x)|} \alpha^{p-2} \mathrm{d}\alpha \right) \mathrm{d} x \\
  &= 2^p 3^d\frac{p}{p-1} \|f\|_p^p.
\end{aligned}
\]
:::

事实上，这种证明方式也是[[Marcinkiewicz 插值定理]]的证明思想之一。

::: remark
事实上，[[Elias Stein]]证明了一个极令人惊讶的结论，
即 @thm:Lp
中的不等式中的控制常数可以被加强为与维数$d$无关 [@Stein1982]。
:::

## 参考文献

```bibliography
Stein1982:
  type: article
  author: Elias M. Stein
  title: The development of square functions in the work of A. Zygmund
  journaltitle: 'Bull. Am. Math. Soc., New Ser.'
  volume: 7
  number: 2
  pages: 359–376
  year: 1982
  doi: 10.1090/s0273-0979-1982-15040-6
```

```terms
Hardy–Littlewood 极大函数:
  en: Hardy–Littlewood maximal function
  fr: fonction maximale de Hardy–Littlewood
```
