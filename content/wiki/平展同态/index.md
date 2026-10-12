---
title: 平展同态
aliases: [平展代数]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**平展同态**是一类[[环同态]]，
推广了[[域]]的[[有限扩张|有限]][[可分扩张]]。
在[[代数–几何对偶]]下，它模拟了拓扑中的[[局部同胚]]。

## 定义

::: definition
称环同态 $R\to A$ 为**平展同态**，
指其[[有限表现同态|有限表现]]、[[平坦同态|平坦]]，且[[微分模]]
$\Omega_{A/R}=0$。此时也称 $A$ 为平展 $R$-代数。
:::

## 性质

::: proposition
平展同态的复合、基变换仍是平展同态。
:::

::: proof
有限表现、平坦、微分模三者都能基变换。
有限表现、平坦两者皆对复合封闭，而关于微分模，
对环同态 $R\to A\to B$ 有右半正合列
$$
\Omega_{A/R}\otimes_AB\to\Omega_{B/R}\to
\Omega_{B/A}\to0
$$
所以 $\Omega_{A/R}=\Omega_{B/A}=0$ 推出
$\Omega_{B/R}=0$。
:::

依定义，平展等价于[[非分歧同态|非分歧]]且[[光滑同态|光滑]]。

::: proposition
如 $R\to A$ 为平展同态，$R$ 为

- [[$(\mathrm{R}_k)$]]；

- [[$(\mathrm{S}_k)$]]；

- [[既约环|既约]]；

- [[正规环|正规]]；

则 $A$ 亦然。
:::

::: proof
这是光滑同态的性质。
:::

::: proposition
如 $R\to A$ [[非分歧同态|非分歧]]，$R\to B$ 平展，
则任何 $R$-同态 $A\to B$ 都平展。特别地，$R$
上平展代数之间映射都平展。
:::

::: proof
对反范畴用[[对角态射]]中的论证即可。
:::

::: proposition [过渡到极限]
设 $\{R_i\to A_i\}_{i\in I}$ 是[[有限表现同态]]的[[滤相系]]，
满足对 $i<j$，$A_j=A_i\otimes_{R_i}R_j$。记
$R=\operatornamewithlimits{colim}_iR_i$，
$A=\operatornamewithlimits{colim}_iA_i$。

- 如每个 $R_i\to A_i$ 平展，则 $R\to A$ 平展。

- 如 $R\to A$ 平展，则存在 $i\in I$
  使得 $R_i\to A_i$ 平展。

:::

::: proof
这是因为非分歧和平坦都能过渡到极限。
:::

可用 [[Zariski 主定理]]给出平展代数的局部结构。

::: theorem [局部结构定理]
$R\to A$ 是平展同态。则对任意 $\mathfrak{q}\in
\operatorname{Spec}A$，存在 $a\notin\mathfrak{q}$
使得 $A_a$ 可以写成 $(R[x]/f)_g$，其中
$f,g\in R[x]$ 满足 $f$ 首一，$f'\mid g$。
:::

::: remark
由 $f$ 首一，$R[x]/f$ 作为 $R$-模自由，于是平坦；
局部化也平坦，所以 $R\to(R[x]/f)_g$ 平坦。
由[[微分模]]的表现有
$$
\Omega_{(R[x]/f)_g/R}=(\Omega_{(R[x]/f)/R})_g
=(R[x]/(f,f'))_g\mathrm{d}x=0.
$$
所以定理所述 $(R[x]/f)_g$ 一定是平展 $R$-代数。
常称其为**标准平展**。
:::

::: proof
由过渡到极限，可设 $R$ 和 $A$ 为 $\mathbb{Z}$ 上有限型，
特别地 [[Noether 环|Noether]]。
记 $\mathfrak{p}=\mathfrak{q}\cap R$，$k=k(\mathfrak{p})$。
平展同态为拟有限，故由 [[Zariski 主定理]]，
$A$ 有有限 $R$-子代数 $B$，满足 $B\to A$ 在谱上为开浸入。
于是存在 $b\in B$，使得 $b\notin\mathfrak{q}$
且 $B_b=A_b$。把 $A$ 换成 $A_b$，可设 $B_b=A$。
现在 $B\otimes_Rk$ 为有限 $k$-代数，局部化 $b$
之后为平展，为有限可分扩张的乘积，且
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
$r\notin\mathfrak{p}$ 满足 $1,u,\ldots,u^{n-1}$ 是
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
$f'\mid g$。

考虑自然同态 $(R[x]/f)_g\twoheadrightarrow
R[u]_b=B_b=A$。它是平展 $R$-代数的同态，故为平展，
特别地，有限表现平坦。但它又是满射，所以 $A$ 是
$(R[x]/f)_g$ 的直积分量，特别地是其局部化。
扩大 $g$ 便可做到 $A=(R[x]/f)_g$。
:::

以下是 [[Grothendieck]] 对平展的刻画。
此类命题显示了幂零理想在交换代数和代数几何中不可或缺。
事实上，幂零理想是“形变”的代数对应物。

::: theorem
平展等价于有限表现且[[形式平展]]。详细地说，环同态
$R\to A$ 平展，当且仅当其有限表现，且对任意环 $S$
及其理想 $I$ 满足 $I^2=0$ 以及图表
\[
\begin{tikzcd}
  R\ar[r]\ar[d]&S\ar[d]\\
  A\ar[r]\ar[ur,dashed]&S/I
\end{tikzcd}
\]
使其交换的虚线箭头存在唯一。
:::

::: proof
由于平展等价于非分歧且光滑，
形式平展等价于[[形式非分歧]]且[[形式光滑]]，
这是非分歧和光滑处对应定理的直接推论。
:::

::: corollary
如 $R\to A$ 平展，则对 $R$ 代数 $P$ 以及满射
$P\to A$，核为 $J$，有自然映射
$J/J^2\to\Omega_{P/R}\otimes_PA$，
$j\mapsto\mathrm{d}j\otimes1$ 为同构。
:::

::: proof
这是形式平展的性质。
:::

下面的命题常称为 Jacobi 判别法。这里比光滑情形强，
可以不局部化 $A$。

::: proposition
$R\to A$ 平展当且仅当 $A$ 能写成
$R[x_1,\ldots,x_n]/(f_1,\ldots,f_n)$ 的形式，
其中 [[Jacobi 行列式]]
$\det\left(\frac{\partial f_i}{\partial x_j}\right)$
在 $A$ 中可逆。
:::

::: proof
由光滑的 Jacobi 判别法以及微分模的表现，
易知这种形式的 $R$-代数平展。反过来如 $R\to A$
平展，首先取表现 $A=P/J$，其中 $P$ 为 $R$
上有限个变元的多项式环，$J$ 为有限生成。
于是 $J/J^2\cong\Omega_{P/R}\otimes_PA$ 为自由。
取 $j_1,\ldots,j_m\in J$ 使其像是一组自由生成元。
对模 $M=\operatorname{coker}((j_1,\ldots,j_m)\to J)$
和理想 $J$ 用 [[Nakayama 引理]]，知存在 $g\in1+J$
使得 $M_g=0$，即局部化 $g$ 之后
$(j_1,\ldots,j_m)$ 满射 $J$。这样便有
$$
A=P/J=P_g/J_g=P_g/(j_1,\ldots,j_m)=
P[y]/(gy-1,j_1,\ldots,j_m).
$$
记 $K=(gy-1,j_1,\ldots,j_m)$，不难发现
$gy-1,j_1,\ldots,j_m$ 是 $A$-模 $K/K^2\cong
\Omega_{P[y]/R}\otimes_{P[y]}A$ 的自由生成元。
重写 $P[y]$ 为 $R[x_1,\ldots,x_n]$，
$gy-1,j_1,\ldots,j_m$ 为 $f_1,\ldots,f_n$，
则由 $\mathrm{d}f_1,\ldots,\mathrm{d}f_n$
的像自由生成 $\Omega_{R[x_1,\ldots,x_n]/R}
\otimes_{R[x_1,\ldots,x_n]}A$ 便知 Jacobi 行列式在
$A$ 中可逆。
:::

## 例子

- [[局部化]]一个元素是标准平展同态，因为
  $R_r=R[x]/(rx-1)$，$(rx-1)'=r\in(R_r)^\times$。

- 设自然数 $n$ 在环 $R$ 中可逆，$r\in R^\times$。
  则 $R\to R[r^{1/n}]=R[x]/(x^n-r)$ 标准平展，
  因为 $(x^n-r)'=nx^{n-1}\in(R[x]/(x^n-r))^\times$。

- $\mathbb{F}_2\to\mathbb{F}_4^3$ 平展，
  但不标准平展。

下例把多项式因式分解与平展同态相联系，
将在 [[Hensel 环]]和 [[Hensel 对]]的研究中发挥作用。
（也可放到 Hensel 相关页面。）

::: example
固定 $m,n\in\mathbb{N}$。考虑多项式环 $\mathbb{Z}[b_1,\ldots,b_n,
c_1,\ldots,c_m]$ 上的一元多项式
$$
(x^n+b_1x^{n-1}+\cdots+b_n)
(x^m+c_1x^{m-1}+\cdots+c_m).
$$
将其各项系数从高到低分别记作 $A_1,\ldots,A_{n+m}\in
\mathbb{Z}[b_1,\ldots,b_n,c_1,\ldots,c_m]$，
则它们给出 $n+m$ 元多项式环的同态
$\mathbb{Z}[a_1,\ldots,a_{n+m}]\to\mathbb{Z}[b_1,\ldots,b_n,
c_1,\ldots,c_m]$。不难发现它是有限平坦同态
（再做一步扩张取出根来，知整；然后由有限生成知有限；
最后由[[奇迹平坦]]知平坦；不过这在此例中并不重要）。
将其记为 $R\to S$，则有表现
$$
S=\frac{R[b_1,\ldots,b_n,c_1,\ldots,c_m]}
{(A_1-a_1,\ldots,A_{n+m}-a_{n+m})}.
$$
其 [[Jacobi 行列式]]依定义就是两个多项式
$$
x^n+b_1x^{n-1}+\cdots+b_n,\,
x^m+c_1x^{m-1}+\cdots+c_m
$$
的[[结式]]，在此记作 $\Delta$。于是由 Jacobi 判别法，
$R\to S_\Delta$ 就是平展同态。
:::

::: corollary
设 $R$ 是环，$\mathfrak{p}$ 是其素理想，剩余域为 $k$。
设 $f\in R[x]$ 首一，且其像 $\bar{f}\in k[x]$ 有分解
$\bar{f}=g_0h_0$，其中 $g_0,h_0$ 首一、互素，
次数分别为 $n,m$。则存在平展同态 $R\to S$ 以及
$\mathfrak{p}$ 上的素理想 $\mathfrak{q}$，
满足 $k(\mathfrak{q})=k$，且在 $S[x]$ 中，
分解式 $\bar{f}=g_0h_0$ 有提升 $f=gh$，满足 $(g,h)=S[x]$。
:::

## 推广

（弱平展。导出情形。解析几何情形。）

```terms
平展同态:
  en: étale homomorphism
  de: étaler Homomorphismus
  fr: homomorphisme étale
```
