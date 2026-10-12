---
title: Lebesgue 积分
aliases: [Lebesgue 可积]
categories: [测度论, 实分析]
navboxes: [测度论]
---

**Lebesgue 积分**是一种性质很好的[[积分]]理论，由法国数学家
[[Henri Lebesgue]] 提出。它对一般[[测度空间]]有定义，且在
[[Euclid 空间]]上是 [[Riemann 积分]]的推广。
它相较其它积分理论主要的好处是可积函数构成 [[Banach 空间]]。

## 定义

下设 $(X,\mathcal{M},\mu)$ 是[[测度空间]]。

::: definition [非负简单函数及其积分] {@简单}
$X$ 上**非负简单函数**指的是其[[可测集]]的[[指示函数]]的
非负有限[[线性组合]]，即形如 $\sum_{i=1}^n a_i 1_{E_i}$
的函数，其中各 $a_i$ 为非负实数，各 $E_i$ 为 $X$ 中可测集，
$1_{E_i}$ 是 $E_i$ 的指示函数。

非负简单函数 $s=\sum_{i=1}^na_i1_{E_i}$ 的
**Lebesgue 积分**定义为
\[
\int_X s \, \mathrm{d}\mu = \sum_{i=1}^n a_i \, \mu(E_i)
\]
这里约定 $0 \cdot \infty=0$。
由[[测度]]的加性，可以验证这个和式的值只和 $s$ 有关，
和它如何写成指示函数的线性组合无关。
无歧义时，可省去下标 $X$、符号 $\mathrm{d}\mu$。
:::

::: definition [非负可测函数及其积分] {@非负}
$X$ 上**非负可测函数**指的是从 $X$ 到
$[0,+\infty]$ 的[[可测函数]]。非负可测函数 $f$ 的
**Lebesgue 积分**定义为
\[
\int_X f \, \mathrm{d}\mu = \sup \Set{
  \int_Xs \, \mathrm{d}\mu |
  \text{$s$ 是非负简单函数, $s\le f$}
},
\]
取值在 $[0,+\infty]$。如 $\int_Xf \, \mathrm{d}\mu<+\infty$，
则称 $f$ 为 **Lebesgue 可积**，或简称**可积**。
无歧义时，可省去下标 $X$、符号 $\mathrm{d}\mu$。
:::

::: definition [可积实值函数及其积分] {@实值}
设 $f\colon X\to\mathbb{R}$ 是可测函数，记
$f_+=\sup\{f,0\}$，$f_-=\sup\{-f,0\}$，则 $f_+$
和 $f_-$ 都是非负可测函数，$f=f_+-f_-$。称 $f$ 为
**Lebesgue 可积**，或简称**可积**，指的是
$f_+$ 和 $f_-$ 都在 @非负 的意义下可积。此时
$f$ 的 **Lebesgue 积分**定义为
\[
\int_X f \, \mathrm{d}\mu =
\int_X f_+ \, \mathrm{d}\mu -
\int_X f_- \, \mathrm{d}\mu.
\]
无歧义时，可省去下标 $X$、符号 $\mathrm{d}\mu$。
:::

注意到，上面几个定义在重合处一致。

::: definition [可积向量值函数及其积分]
设 $V$ 是有限维 $\mathbb{R}$-[[向量空间]]（比如 $\mathbb{C}$），
$f\colon X\to V$ 是可测函数。取 $V$ 的一组基
$v_1,\ldots,v_n$，并写 $f=\sum_{i=1}^nf_iv_i$。称
$f$ 为 **Lebesgue 可积**，或简称**可积**，
指的是各 $f_i$ 都在 @实值 的意义下可积。此时
$f$ 的 **Lebesgue 积分**定义为
\[
\int_X f \, \mathrm{d}\mu =
\sum_{i=1}^n \left( \int_X f_i \, \mathrm{d}\mu \right) \cdot v_i \, .
\]
无歧义时，可省去下标 $X$、符号 $\mathrm{d}\mu$。由以下 @数乘、@加性，它和基的选取无关。
:::

## 例子

- 典型的情况是 $X=\mathbb{R}^n$，$\mu$ 为
  [[Lebesgue 测度]]。此时如果 $f$ 是 [[Riemann 积分|Riemann 可积函数]]，
  则它也 Lebesgue 可积，且其 Lebesgue 积分等于
  [[Riemann 积分]]。有时也用
  **Lebesgue 积分**一词指代这种情形的 Lebesgue 积分。

- 当 $\mu$ 为[[计数测度]]时，Lebesgue 积分就是求和。

## 性质

与前文相同，设 $(X,\mathcal{M},\mu)$ 是[[测度空间]]。

::: proposition [单调] {@单调}
设 $f,g$ 是 $X$ 上非负可测函数或实值可积函数，满足
$f\le g$ [[几乎处处]]成立。则 $\int f\le\int g$。
特别地，如 $f$ 和 $g$ 几乎处处相等，则 $\int f=\int g$。
:::

::: proof
依次按 @简单、@非负、@实值 验证即可。
:::

::: proposition [数乘] {@数乘}
设 $f$ 是 $X$ 上非负可测函数，$a$ 是非负实数，或者
$f$ 是 $X$ 上实值可积函数，$a$ 是实数。则
$\int af=a\int f$。
:::

::: proof
依次按 @简单、@非负、@实值 验证即可。
:::

::: lemma {@逼近}
设 $f$ 是非负可测函数。对正整数 $n$，令
$$
\varphi_n(x)=\begin{cases}
  n,&f(x)\ge n;\\
  k2^{-n},&k2^{-n}\le f(x)<(k+1)2^{-n},\,
  k\in\mathbb{N}_{<n2^n}.
\end{cases}
$$
则 $\varphi_1\le\varphi_2\le\cdots\le f$，且
$\lim_{n\to\infty}\varphi_n=f$。
:::

::: proof
根据定义不难验证，如果 $f(x)<n$，则
$0\leq f-\varphi_n\leq 2^{-n}$。
:::

::: theorem [单调收敛定理] {@单调收敛}
设 $f;f_1,f_2,\cdots$ 是非负可测函数，
满足 $f_k\leq f_{k+1}$ 对任何正整数 $k$
成立。如果 $\lim_{n\to\infty} f_n=f$，则
\[
\int f=\lim_{n\to\infty}\int f_n.
\]
:::

::: proof
首先，$(\int f_n)$ 是单调递增的序列，且
$\int f_n\leq \int f$，故上述序列有极限，且
$\lim\int f_n\leq \int f$。为了证明反向的不等式，
任取简单函数 $\phi$ 满足 $0\leq\phi\leq f$。
令
\[
E_n=\{x\in X \mid f_n(x)\geq\alpha \phi(x)\}
\]
其中 $\alpha\in (0,1)$。则 $(E_n)$ 是一列
递增的集合，满足 $\bigcup_{n=1}^\infty E_n=X$。
这时 $\int f_n\geq \int_{E_n} f_n\geq\alpha\int_{E_n}\phi$。
注意到 $A\mapsto\int_A\phi$ 是 $(X,\mathcal M)$
上的测度，记为 $\nu$，则
\[
\lim\int_{E_n}\phi=\lim\nu(E_n)=\nu(X)=\int\phi
\]
也就是 $\lim\int f_n\geq\alpha\int\phi$。令 $\alpha\to 1^-$，
$\phi$ 取上确界，得 $\lim\int f_n\geq\int f$。
:::

结合 @逼近 和单调收敛定理，可以构造一系列递增简单函数趋于可测函数，
它们的积分也趋于可测函数的积分。

::: proposition [加性] {@加性}
设 $f_1,f_2,\ldots$ 是 $X$ 上非负可测函数，
$f=\sum_{k=1}^\infty f_k$。则
$$
\int f=\sum_{k=1}^\infty\int f_k.
$$
:::

::: proof
对两个函数 $f_1,f_2$，根据以上讨论，可以构造递增的
简单函数序列 $(\phi_n),(\psi_n)$ 使得
它们各自趋于 $f_1,f_2$。这样 $(\phi_n+\psi_n)$
递增趋于 $f_1+f_2$。根据单调收敛定理：
\[
\int (f_1+f_2)=\lim\int(\phi_n+\psi_n)
=\lim\int\phi_n+\lim\int\psi_n=\int f_1+\int f_2
\]
对于有限个函数相加，只需运用数学归纳法。对可数个函数，对
\[
\int \sum_{k=1}^nf_k=\sum_{k=1}^n\int f_k
\]
使用单调收敛定理即可。
:::

::: lemma [Fatou 引理] {@Fatou}
设 $f_1,f_2,\cdots$ 是非负可测函数，则
\[
\int\liminf f_n\leq\liminf\int f_n.
\]
:::

::: proof
对任意 $k\geq 1$，有 $\inf_{n\geq k} f_n\leq f_j,j\geq k$。
故 $\int\inf_{n\geq k}f_n\leq\int f_j,j\geq k$。在右边取下确界：
$\int\inf_{n\geq k}f_n\leq\inf_{j\geq k}\int f_j$。
令 $k\to\infty$ 得
\[
\int\liminf f_n
= \lim_{k\to\infty}\int\inf_{n\geq k}f_n
\leq \lim_{k\to\infty}\inf_{j\geq k}\int f_j
= \liminf\int f_n \, .
\]
:::

::: theorem [控制收敛定理] {@控制收敛}
设 $(f_n)_{n \geq 1}$ 是 $L^1 (X)$ 中的序列，满足 $f_n\to f\ \mathrm{a.e.}$，
且有 $g\in L^1 (X)$ 使得 $|f_n|\leq g$，则 $f\in L^1 (X)$ 且
\[
\int f=\lim_{n\to\infty}\int f_n.
\]
:::

::: proof
首先，条件不难得出 $|f|\leq g\ \mathrm{a.e.}$，故 $f\in L^1 (X)$。
其次，条件表示 $g+f_n\geq 0,g-f_n\geq 0\ \mathrm{a.e.}$，故由
@Fatou：
\[
\int g+\int f\leq\liminf\int(g+f_n)=\int g+\liminf\int f_n\\
\int g-\int f\leq\liminf\int(g-f_n)=\int g-\limsup\int f_n
\]
也就同时得到 $\int f\leq\liminf\int f_n$ 和
$\int f\geq\limsup\int f_n$。故 $\int f=\lim\int f_n$。
:::

::: proposition
设 $(Y,\mathcal{N},\nu)$ 是[[测度空间]]，$F\colon X\to Y$
是[[可测映射]]，$\nu=F_*\mu$。设 $g$ 是 $Y$
上非负可测函数或可积函数。则
$$
\int_X(g\circ F) \, \mathrm{d}\mu=\int_Yg \, \mathrm{d}\nu.
$$
:::

```terms
Lebesgue 积分:
  en: Lebesgue integral
  de: Lebesgue-Integral
  fr: intégrale de Lebesgue
```
