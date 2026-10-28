---
title: Rouché 定理
aliases: [Rouche 定理]
categories: [复分析]
navboxes: [复分析]
---

<problems>
- “证明”“应用”各节需要扩充。
</problems>

**Rouché 定理**，是[[复分析]]中的结论，由[[Eugène Rouché]]提出。
它大致说明，对一个[[全纯函数]]作适当的全纯[[扰动]]，
不改变它在[[简单闭曲线]]内的[[零点]]数（按[[重数]]计）。

## 陈述

Rouché 定理的传统陈述如下：

::: theorem [Rouché] {@rouche}
设 $C\subset\mathbb C$ 是简单闭曲线，它围成的[[区域]]记作 $K$。
如果[[闭包]] $\bar K$ 内的全纯函数 $f,g$ 在 $C$ 上满足 $|g(z)|<|f(z)|$，
则 $f,f+g$ 在 $K$ 中具有相同的零点数量（按重数计）。
:::

此定理也可以被陈述为更对称的强版本如下：

::: theorem {@rouche2}
设 $C\subset\mathbb C$ 是简单闭曲线，它围成的区域记作 $K$。
如果闭包 $\bar K$ 内的全纯函数 $f,g$ 在 $C$ 上满足 $|f(z)-g(z)|<|f(z)|+|g(z)|$，
则 $f,g$ 在 $K$ 中具有相同的零点数量（按重数计）。
:::

容易验证，这个陈述保证了 $f,g$ 在 $C$ 上没有零点。

原始定理可以由对称版本直接推出：对原始陈述中的 $f,g$，
在 $C$ 上有 $|g(z)|<|f(z)|$ 那么作为推论：
\[
|(f(z)+g(z))-f(z)|=|g(z)|<|f(z)+g(z)|+|f(z)|.
\]
因此 $f+g$ 和 $f$ 适用定理的对称陈述。

此外在对称陈述中也可以用 $-g$ 代替 $g$，这不改变 $g$ 的零点数量。
其不等式变为如下形状：
\[
|f(z)+g(z)|<|f(z)|+|g(z)|.
\]

## 证明

::: proof
我们证明[对称陈述](@rouche2)。
首先因为 $f,g$ [[连续]]以及 $C$ [[紧集|紧]]，故在 $C$ 的小邻域内题述不等式依然成立。
而且 $f,g$ 在 $C$ 上非零，故在 $C$ 的小邻域内 $f,g$ 也都没有零点。
故可以适当缩小 $C$，使它成为[[光滑]]曲线。

现在使用 [[辐角原理]]，记 $C:[0,1]\to\mathbb C$ 光滑，则
$f$ 在 $K$ 中的零点数量为
\[
N_f(K):=\frac1{2\pi i}\oint_C\frac{f'(z)}{f(z)}dz=\frac1{2\pi i}\oint_{f\circ C}\frac{dz}{z},
\]
也就是曲线 $f\circ C:[0,1]\to\mathbb C$ 在 $0$ 点的[[绕数]]。
现在我们考虑 $H_t(x)=(1-t)f(C(x))+tg(C(x))$，
由条件的不等式可知（[[三角不等式]]的逆）对一切 $t\in [0,1],x\in[0,1]$ 有 $H_t(x)\ne 0$。
当 $t\in[0,1]$ 变化时，$H_t$ 给出 $f\circ C$ 到 $g\circ C$ 在 $\mathbb C\backslash 0$ 内的[[同伦]]，
故它们在 $0$ 具有相同的绕数，也就是说 $f,g$ 在 $K$ 中零点数量相同。
:::

::: remark
初等地说，最后这段证明也能从另一个角度来看，
$t\mapsto N_{(1-t)f+tg}(K)$ 关于 $t$ 连续变化，但是取值总是[[整数]]（绕数是整数），
因此由整数的[[离散]]性推出$N_f(K)=N_g(K)$。
:::

## 应用

Rouché 定理最直接的应用便是证明复多项式的全体零点集关于系数连续变化，
使用$\epsilon$-$\delta$语言的一个准确的陈述如下：

::: theorem
给定$f(z)=z^n+c_{n-1}z^{n-1}+\cdots+c_0\in\mathbb C[z]$。
则对任意$\epsilon>0$，存在$\delta>0$，使得对任意
$g(z)=z^n+b_{n-1}z^{n-1}+\cdots+b_0\in\mathbb C[z]$满足$|b_i-c_i|<\delta,\forall i=0,\cdots,n-1$者，
都存在$f,g$那$n$个复根的适当排列$\{z_i\}_{i=1}^n,\{w_i\}_{i=1}^n$使得
$|z_j-w_j|<\epsilon,\forall j=1,\cdots,n$。
:::

::: remark
由于[[置换群]] $\mathfrak S_n$自然作用在$n$个根所在的空间$\mathbb C^n$上，
所以更自然的陈述是，
首一复多项式$f(z)$的系数空间$\mathbb C^n$到$\mathbb C^n/\mathfrak S_n$的求根映射是连续的。
:::

::: proof
首先取$\epsilon'=\min\{\epsilon,\frac12\min_{z_i\ne z_j}\{|z_i-z_j|\}\}$，
这样对每个根$z_j$的$\epsilon'$圆盘$B_j:=B_{\epsilon'}(z_j)$，其中除了重根外$f$没有其他根，
而且这些圆盘两两不交。

现在在全体$\partial B_j$上$f\ne 0$，由于$\cup_j\partial B_j$是紧集，因此其上$|f|$具有正的下确界。
从而总可以取$\delta>0$足够小，使得$d(z)=(b_{n-1}-c_{n-1})z^{n-1}+\cdots+(b_0-c_0)$
但凡$|b_i-c_i|<\delta$成立时总满足
\[
\max_j\max_{z\in\partial B_j}|d(z)|\le\delta\cdot\sum_{i=0}^{n-1}\left(\max_j\max_{z\in\partial B_j}|z|\right)^i<\min_j\min_{z\in\partial B_j}|f(z)|.
\]
这样便可以对$f,d$使用 Rouché 定理（@-rouche），得知每个$B_j$内$f,g$零点数相同。

如果$B_j$内$f$以$z_j$为$k$重根，下标为$j_1,\cdots,j_k$。
就将$g$在$B_j$内的零点任意排列作$w_{j_1},\cdots,w_{j_k}$。
因为诸圆盘不交，因此上述操作合理。
由此总成立着$|z_j-w_j|<\epsilon'<\epsilon$。
:::

```terms
Rouché 定理:
  en: Rouché's theorem
```
