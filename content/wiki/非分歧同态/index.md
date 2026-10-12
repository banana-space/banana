---
title: 非分歧同态
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**非分歧同态**是[[微分模]]为零的[[有限型环同态]]。
在[[代数–几何对偶]]下，它模拟了微分流形的浸入。

## 定义

::: definition
称环同态 $R\to A$ 为**非分歧同态**，
指其[[有限型同态|有限型]]，且[[微分模]]
$\Omega_{A/R}=0$。此时也称 $A$ 为非分歧 $R$-代数。
:::

::: remark
[[Grothendieck]] 的原始定义要求非分歧同态有限表现，
但现在一般认为这没那么自然。[[叠计划]]把有限表现非分歧叫
G-非分歧。
:::

## 性质

::: proposition
非分歧同态的复合、基变换仍是非分歧同态。
:::

::: proof
有限生成与微分模两者都能基变换。
有限生成显然对复合封闭，而关于微分模，
对环同态 $R\to A\to B$ 有右半正合列
$$
\Omega_{A/R}\otimes_AB\to\Omega_{B/R}\to
\Omega_{B/A}\to0
$$
所以 $\Omega_{A/R}=\Omega_{B/A}=0$ 推出
$\Omega_{B/R}=0$。
:::

以下命题来自[[微分模]]的对角线刻画。

::: proposition
设 $R\to A$ 有限型。则它非分歧，当且仅当乘法映射
$A\otimes_RA\to A$ 是局部化一个幂等元，
即 $A$ 是 $A\otimes_RA$ 的直积分量。
:::

::: proof
记 $I=\ker(A\otimes_RA\to A)$，则它有限生成：
如 $a_1,\ldots,a_n\in A$ 作为 $R$-代数生成 $A$，
则 $1\otimes a_1-a_1\otimes1,\ldots,
  1\otimes a_n-a_n\otimes1$ 生成理想 $I$。
由[[微分模]]的性质有 $\Omega_{A/R}=I/I^2$，
所以 $R\to A$ 非分歧等价于 $I=I^2$。由
[[Nakayama 引理]]的推论这等价于 $I$ 由一个幂等元生成，
即 $A$ 是 $A\otimes_RA$ 的直积分量。
:::

下面的命题给出域上非分歧代数的分类。

::: proposition
[[域]]上非分歧代数是有限个[[有限扩张|有限]][[可分扩张]]的乘积。
从而非分歧同态[[拟有限同态|拟有限]]。
:::

::: proof
先考虑[[代数闭域]]情形。设 $k$ 为代数闭域，$A$
为其上非分歧代数，我们来证明 $A$ 是有限个 $k$ 的乘积。
由 [[Hilbert 零点定理]]，$A$ 的任一极大理想 $\mathfrak{m}$
剩余域都是 $k$。由于满射显然是非分歧同态，有
$A/\mathfrak{m}^2$ 是非分歧 $k$-代数。记
$V=\mathfrak{m}/\mathfrak{m}^2$，则作为代数有
$A/\mathfrak{m}^2=k\oplus V$，
其中 $V$ 中元素之间乘积为 $0$。具体计算微分模知有同构
$V\cong\Omega_{(k\oplus V)/k}\otimes_{k\oplus V}k$，
$v\mapsto\mathrm{d}v\otimes1$。由非分歧，这推出
$V=0$，即 $\mathfrak{m}=\mathfrak{m}^2$，由
[[Nakayama 引理]] $A_\mathfrak{m}=k$。这对每个
$\mathfrak{m}$ 成立，从而 $A$ 是有限个 $k$ 的乘积。

现在对一般域 $k$ 及其上非分歧代数 $A$，以 $\bar{k}$
记 $k$ 的[[代数闭包]]，则 $A\otimes_k\bar{k}$
是有限个 $\bar{k}$ 的乘积。这首先推出 $A$ 在 $k$
上有限。由 [[Artin 环]]结构定理，$A$ 是有限个
$k$ 上有限局部环的乘积。逐一讨论可设 $A$ 为局部。
现由 $A\otimes_k\bar{k}$ 既约便知 $A$ 是 $k$
的可分扩张。
:::

::: proposition [过渡到极限]
设 $\{R_i\to A_i\}_{i\in I}$ 是[[有限型同态]]的[[滤相系]]，
满足对 $i<j$，$A_j=A_i\otimes_{R_i}R_j$。记
$R=\operatornamewithlimits{colim}_iR_i$，
$A=\operatornamewithlimits{colim}_iA_i$。

- 如每个 $R_i\to A_i$ 非分歧，
  则 $R\to A$ 非分歧。

- 如 $R\to A$ 非分歧，则存在 $i\in I$
  使得 $R_i\to A_i$ 非分歧。

:::

::: proof
前一条显然，因为滤余极限和基变换交换，$R\to A$
是 $R_i\to A_i$ 的基变换。至于后一条，先由有限型取
$j\in I$，以及 $a_1,\ldots,a_n$ 在 $R_j$ 上生成 $A_j$。
由于[[微分模]]和滤余极限交换，
$$
0=\Omega_{A/R}=\operatornamewithlimits{colim}_{i\in I}
\Omega_{A_i/R_i},
$$
存在 $i>j$ 使得 $\mathrm{d}a_1,\ldots,\mathrm{d}a_n$
在 $\Omega_{A_i/R_i}$ 都是 $0$。此 $i$ 即为所求。
:::

可用 [[Zariski 主定理]]给出非分歧代数的局部结构。
依[[平展同态]]条目的术语，下面的定理就是说，
非分歧代数局部上都是标准平展代数的商。

::: theorem [局部结构定理]
$R\to A$ 是非分歧同态。则对任意 $\mathfrak{q}\in
  \operatorname{Spec}A$，存在 $a\notin\mathfrak{q}$
使得 $A_a$ 是 $(R[x]/f)_g$ 的[[商环]]，其中
$f,g\in R[x]$ 满足 $f$ 首一，$f'\mid g$。
:::

::: proof
写出 $A=P/J$，$P$ 是 $R$ 上有限个变元的多项式环。
则由[[微分模]]的右半正合列
$$
J/J^2\to\Omega_{P/R}\otimes_PA\to\Omega_{A/R}\to0
$$
知 $\Omega_{A/R}=0$ 等价于 $\Omega_{P/R}$ 作为 $P$-模被
$J$ 中元素的微分和 $J\Omega_{P/R}$ 合起来生成。
由于 $\Omega_{P/R}$ [[有限生成模|有限生成]]，存在 $J_0\subseteq J$
有限生成，使得 $\Omega_{P/R}$ 作为 $P$-模被
$J_0$ 中元素的微分和 $J_0\Omega_{P/R}$ 合起来生成。
于是把 $J$ 换成 $J_0$ 不影响条件。故可设 $A$
[[有限表现同态|有限表现]]。这样 $R\to A$ 就是 $\mathbb{Z}$
上有限型环的同态的滤余极限，于是由过渡到极限可设
$R$ 和 $A$ 为 $\mathbb{Z}$ 上有限型，特别地 [[Noether 环|Noether]]。

记 $\mathfrak{p}=\mathfrak{q}\cap R$，$k=k(\mathfrak{p})$。
非分歧同态为拟有限，故由 [[Zariski 主定理]]，
$A$ 有有限 $R$-子代数 $B$，满足 $B\to A$ 在谱上为开浸入。
于是存在 $b\in B$，使得 $b\notin\mathfrak{q}$
且 $B_b=A_b$。把 $A$ 换成 $A_b$，可设 $B_b=A$。
现在 $B\otimes_Rk$ 为有限 $k$-代数，局部化 $b$
之后为非分歧，为有限可分扩张的乘积，且
$k(\mathfrak{q})$ 是其一个乘积分量。
用[[本原元定理]]取元素 $\bar{u}\in B\otimes_Rk$，
在 $k(\mathfrak{q})$ 分量上是其本原元，在其它分量上是 $0$。
乘以 $R\setminus\mathfrak{p}$ 中元素，可设 $\bar{u}$
来自 $u\in B$。于是 $R[u]$ 是有限 $R$-代数，满足
$R[u]\otimes_Rk=k[\bar{u}]=k(\mathfrak{q})$。

设 $\bar{f}$ 是 $\bar{u}$ 在 $k$ 上[[极小多项式]]，
次数为 $n=[k(\mathfrak{q}):k]$。由于
$1,\bar{u},\ldots,\bar{u}^{n-1}$ 是 $k(\mathfrak{q})$
作为 $k$-线性空间的生成元，由 [[Nakayama 引理]]，
$1,u,\ldots,u^{n-1}$ 是 $R_\mathfrak{p}[u]$ 作为
$R_\mathfrak{p}$-模的生成元。于是可设
$r\notin\mathfrak{p}$ 满足 $1,u\ldots,u^{n-1}$ 是
$R_r[u]$ 作为 $R_r$-模的生成元。这样就存在 $n$ 次首一多项式
$f\in R_r[x]$ 满足 $f(u)=0$，且 $f$ 在 $k[x]$ 的像就是
$\bar{f}$。把 $u$ 换成 $r^{-N}u$，$N$ 充分大，
可设 $f\in R[x]$，且在 $R[u]$ 中有 $f(u)=0$。
由于 $k(\mathfrak{q})/k$ 可分，$\bar{f}'(\bar{u})\ne0$，
将 $A$ 对 $f'(u)$ 局部化，可设 $f'(u)\in A^\times$。

记 $\mathfrak{q}'=\mathfrak{q}\cap R[u]$。
考虑含入映射 $R[u]\to B$ 在 $\mathfrak{q}'$ 的局部化。
它有限，因为 $R\to B$ 有限；它是单射，因为局部化保持单射；
它是满射，因为依定义 $u\notin\mathfrak{q}'$，故
$B_{\mathfrak{q}'}/\mathfrak{q}'B_{\mathfrak{q}'}$
被 $(B_\mathfrak{p}/\mathfrak{p}B_\mathfrak{p})_u
  =k(\mathfrak{q})$ 打满，从而
$k(\mathfrak{q}')=k(\mathfrak{q})=
  B_{\mathfrak{q}'}/\mathfrak{q}'B_{\mathfrak{q}'}$，
于是由 [[Nakayama 引理]]知满。这样就知道
$R[u]\to B$ 在 $\mathfrak{q}'$ 的局部化是同构。
由这些代数都是 Noether 环上有限，可取
$v\notin\mathfrak{q}'$ 使得 $R[u]_v=B_v$。
再局部化 $A$，可设存在 $w\in R[u]\setminus\mathfrak{q}'$
使得 $A=R[u]_w$。换言之，可设 $B=R[u]$。
回忆 $A=B_b$。取 $b$ 沿 $R[x]/f\twoheadrightarrow R[u]=B$
的原像 $g$。由于 $f'(u)\in A^\times$，可设
$f'\mid g$。此时自然同态 $(R[x]/f)_g\twoheadrightarrow
  R[u]_b=B_b=A$ 即为所求。
:::

以下是 [[Grothendieck]] 对非分歧的刻画。
此类命题显示了幂零理想在交换代数和代数几何中不可或缺。
事实上，幂零理想是“形变”的代数对应物。

::: theorem
非分歧等价于有限型且[[形式非分歧]]。详细地说，环同态
$R\to A$ 非分歧，当且仅当其有限生成，且对任意环 $S$
及其理想 $I$ 满足 $I^2=0$ 以及图表
\[
\begin{tikzcd}
  R\ar[r]\ar[d]&S\ar[d]\\
  A\ar[r]\ar[ur,dashed]&S/I
\end{tikzcd}
\]
使其交换的虚线箭头至多一个。
:::

::: proof
这是因为[[形式非分歧]]等价于[[微分模]]为零。
:::

## 例子

- 环满射都非分歧。

- [[平展同态]]都非分歧。特别地，局部化一个元素为非分歧。

- [[代数数论]]中，数域的扩张 $K\subseteq L$
  在 $\mathfrak{P}\in\operatorname{Spec}(\mathcal{O}_L)$
  处非分歧，当且仅当 $\mathcal{O}_{K,\mathfrak{p}}\to
    \mathcal{O}_{L,\mathfrak{P}}$ 非分歧，其中
  $\mathfrak{p}=\mathfrak{P}\cap \mathcal{O}_K$。
  当然，此扩张由于平坦，实际上为平展。这可以具体计算微分模看出。
  事实上代数数论中的[[差分理想]]就是微分模的[[零化子]]。

```terms
非分歧同态:
  en: unramified homomorphism
  de: unverzweigter Homomorphismus
  fr: homomorphisme non-ramifié
```
