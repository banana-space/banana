---
title: Zariski 引理
categories: [交换代数]
navboxes: [交换代数]
---

在[[交换代数]]中，
**Zariski 引理**说明，
如果[[域]] $k$ 的[[域扩张]] $K$ 作为 $k$-[[交换代数 (代数结构)|代数]]有限生成，
则该扩张是[[有限扩张]]。

由 Zariski 引理可以推导出 [[Hilbert 零点定理]] 的一个较弱版本。

## 陈述与证明

对[[交换环]] $A$，[[子环]] $R \subset A$，
及固定的元素 $a_1,\dotsc,a_n\in A$，
我们记 $R[a_1,\dotsc,a_n]$ 为 $A$ 中由 $R, a_1, \dotsc, a_n$ 生成的子环。

::: theorem [Zariski 引理]
设 $k \subset K$ 是[[域扩张]]，且存在元素 $x_1, \dotsc, x_n \in K$
满足 $K = k [x_1, \dotsc, x_n]$。
则 $x_1,\dotsc, x_n$ 在 $k$ 上[[代数元|代数]]，从而 $K$ 是 $k$ 的[[有限扩张]]。
:::

::: proof
对 $n$ 归纳。$n=1$ 时命题明显，
我们假设证明命题对 $n-1$ 成立。
因为 $K$ 是域，所以
\[
K=(k[x_1])[x_2,\dotsc,x_n]= (k(x_1))[x_2,\dotsc,x_n].
\]
由归纳假设，$x_2,\dotsc,x_n$ 在 $k(x_1)$ 上代数。
回忆对于扩张链 $k\subseteq E\subseteq F$，$F/E$ 代数和 $E/k$ 代数蕴含 $F/k$ 代数。
所以只须证明 $x_1$ 在 $k$ 上代数就好了。

对每个 $x_i$（$i\ge 2$），因为 $x_i$ 在 $k(x_1)$ 上代数，所以存在 $k[x_1]$ 中的非零元素，
其与 $x_i$ 的积在 $k[x_1]$ 上整。记这一元素为 $a_i(x_1)$（$a_i(X)\in k[X]$）。
则 $a(x_1)\overset{\text{def}}{=} \prod_{i=2}^n a_i(x_1)$ 非零，且对于 $i\ge 2$，
$a(x_1) x_i$ 在 $k[x_1]$ 上整。
于是对每个 $x_2,\dotsc,x_n$ 的单项式 $\prod_{i=1}^n x_i^{k_i}$，
存在 $N\in\mathbb Z_+$ 使 $a(x_1)^N \prod_{i=1}^n x_i^{k_i}$ 在 $k[x_1]$ 上整（整元素对乘法封闭，
取 $N\ge \sum_{i=2}^{n} k_i$ 即可）。
整元素也对加法封闭，于是对每个 $x_2,\dotsc,x_n$ 的系数取自 $k[x_1]$ 的多项式 $f(x_2,\dotsc, x_n)$，
存在 $N$ 使得 $a(x_1)^N f(x_2,\dotsc, x_n)$ 在 $k[x_1]$ 上整。
因为 $K$ 是域，所以 $k(x_1)\subseteq K= (k[x_1])[x_2,\dotsc,x_n]$，
即 $k(x_1)$ 中的每个元素也可以表为 $x_2,\dotsc,x_n$ 的系数取自 $k[x_1]$ 的多项式。
所以对任意 $\xi\in k(x_1)$，存在 $N$ 使得 $a(x_1)^N\xi$ 整于 $k[x_1]$。
如果 $x_1$ 在 $k$ 上超越，则 $k[x_1]$ 是主理想整环，主理想整环整闭，
所以对任意 $\xi\in k(x_1)$，存在 $N$ 使得 $a(x_1)^N\xi\in k[x_1]$，矛盾。
:::

## 推论

### 弱 Hilbert 零点定理

Zariski 引理的下述推论也被称作弱 Hilbert 零点定理，
即 [[Hilbert 零点定理]]的一个弱版本。

::: corollary
设 $k$ 是[[代数闭域]]。

1. $n$ 元多项式环 $k[X_1,\dotsc, X_n]$ 的极大理想 $\mathfrak m$ 必然形如由 $X_1-a_1,\dotsc, X_n-a_n$
   生成的理想。

2. 对任一理想 $I\subsetneqq k[X_1,\dotsc, X_n]$，
   存在 $x_1,\dotsc, x_n\in k$，$f(x_1,\dotsc, x_n)=0$ 对任意 $f\in I$ 成立。

:::

::: proof
(1) 考虑 $k$ 通过 $\psi: a\mapsto a+\mathfrak m$ 视作 $k[X_1,\dotsc, X_n]/\mathfrak m$ 的子域
$\psi(k)$。
由 Zariski 引理，
$k[X_1,\dotsc, X_n]/\mathfrak m=\psi(k)[X_1+\mathfrak m,\dotsc, X_n+\mathfrak m] $ 是 $\psi(k)$
的代数扩张，但是 $k$ 代数闭，
所以 $\{a+\mathfrak m: a\in k\}= k[X_1,\dotsc, X_n]/\mathfrak m$，
特别地，对每个 $X_i$，存在 $a_i\in k$ 使 $X_i+\mathfrak m=a_i+\mathfrak m$，
即 $X_i-a_i\in\mathfrak m$。
另一方面，考虑环同态 $k[X_1,\dotsc, X_n]\mapsto k$，$X_i\mapsto a_i$，
这是满同态且同态核恰为由 $X_1-a_1,\dotsc, X_n-a_n$ 生成的理想（这可以从每个 $X_1,\dotsc, X_n$
的多项式亦可表为 $X_1-a_1,\dotsc, X_n-a_n$ 的多项式看出）。
所以 $(X_1-a_1,\dotsc, X_n-a_n)$ 业已是一个极大理想，从而 $\mathfrak m=(X_1-a_1,\dotsc, X_n-a_n)$。
这证明了 (1)。

(2) 对于极大理想 $\mathfrak m=(X_1-a_1,\dotsc, X_n-a_n)$，
$f(a_1,\dotsc, a_n)=0$ 对任意 $f\in\mathfrak m$ 成立。
一个真理想一定包含于一个极大理想。
:::
