---
title: 同调猜想
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**同调猜想**是[[交换代数]]中一类猜想的统称。顾名思义，
它们主要涉及[[交换环]]及其上模的各种同调不变量。
这些猜想中最早出现的是 [[Serre 重数猜想]]，由 [[Jean-Pierre Serre]]
于 1958 年提出。后来 [[Melvin Hochster]] 又提出了许多猜想，
并证明了其中一些的等特征情形。21 世纪 10 年代，随着[[完美胚环]]理论的出现，
[[Yves André]] 等人证明了近乎全部的同调猜想，
只剩重数猜想本身仍为未解之谜。

## 猜想陈述

以下按照命题所涉对象分别陈述这些猜想。大体上为从强到弱的顺序。

### 重数

<see>[[Serre 重数猜想]]</see>

::: conjecture [Serre 重数猜想] {@serre}
$R$ 是[[正则局部环]]，$M,N$ 是有限生成 $R$-模，满足
$M\otimes_RN$ [[有限长]]。定义它们的相交重数
$$
\chi(M,N)=\sum_{i=0}^\infty(-1)^i\ell_R(\operatorname{Tor}_i^R(M,N)),
$$
则 $\chi(M,N)\ge0$，大于 $0$ 当且仅当 $\dim M+\dim N=\dim R$。
:::

现只剩命题
$$
\dim M+\dim N=\dim R\implies\chi(M,N)>0
$$
没有解决。

### Cohen–Macaulay 模、代数

以下这些猜想都是 Hochster 提出的。

::: conjecture [小 Cohen–Macaulay 模] {@cm}
[[完备 (交换代数)|完备]][[Noether 环|Noether]][[局部环]]都有极大
[[Cohen–Macaulay 模]]。具体地说，设 $R$ 是这么个环，
则存在有限生成 $R$-模 $M$，使得 $R$ 的参数系都是 $M$-[[正则序列]]。
:::

小 Cohen–Macaulay 模猜想很强，能推出 Serre 重数猜想。
Hochster 后来认为它是错的，但也没有证否。

<see>[[大 Cohen–Macaulay 代数]]</see>

::: theorem [弱函子性大 Cohen–Macaulay 代数] {@bcm}
Noether 局部环都有大 Cohen–Macaulay 代数，且可以有弱函子性。
具体地说，对任意 Noether 局部环 $(R,\mathfrak{m})$，
都有 $R$-代数 $C$，满足 $\mathfrak{m}C\subsetneqq C$，且
$R$ 的参数系都是 $C$-正则序列。此外对任意 Noether 局部环的局部同态
$R\to R'$，都可对应选取它们的大 Cohen–Macaulay 代数
$C,C'$，使得存在 $R$-代数映射 $C\to C'$。
:::

该定理由 André 于 2018 年证明。它也很强，
下面的定理除了导出直和定理（@ddst）之外全是它的推论，
虽然其中有些较早得到证明。

::: remark
Bhatt 于 2020 年证明，如 $R$ 是剩余域特征 $p$ 的[[优秀环|优秀]][[整环]]，
则 $R$ 的绝对整闭包的 $p$-完备化就是大 Cohen–Macaulay 代数。
:::

### $\operatorname{Tor}$ 映射为零

::: theorem [$\operatorname{Tor}$ 映射为零] {@tor=0}
$R\to S\to T$ 是环同态，满足 $R,T$ 是[[正则环]]，
$R\to S$ 是有限单同态。则对任意 $R$-模 $M$ 以及任意正整数 $i$，自然映射
$\operatorname{Tor}_i^R(M,S)\to\operatorname{Tor}_i^R(M,T)$
为零。
:::

### 直和项

<see>[[直和定理]]</see>

::: theorem [直和定理]
$R$ 是[[正则环]]，$R\to A$ 是有限单同态，则
$R$-模同态 $R\to A$ 分裂，即 $R$ 是 $A$ 的 $R$-模直和项。
:::

该定理由 André 于 2015 年证明。

::: theorem [导出直和定理] {@ddst}
$R$ 是正则环，$X\to\operatorname{Spec}R$
是[[紧合态射]]。则自然映射 $R\to R\Gamma(X,\mathcal{O}_X)$
在[[导出范畴]] $\mathsf{D}(R)$ 中分裂。
:::

该定理由 Bhatt 于 2016 年证明。

::: theorem [强直和定理]
$(R,\mathfrak{m})$ 是[[正则局部环]]，$R\to A$ 是有限单同态。
$x\in\mathfrak{m}\setminus\mathfrak{m}^2$，
$\mathfrak{q}$ 是 $A$ 的素理想，包含 $x$ 且高度 $1$。
则 $R$-模同态 $xR\to\mathfrak{q}$ 分裂。
:::

::: theorem [直和项 Cohen–Macaulay] {@dscm}
$R\to S$ 是环同态，作为 $R$-模同态分裂。设 $S$ 是正则环。
则 $R$ 是 [[Cohen–Macaulay 环]]。
:::

### 相交猜想

::: theorem [相交定理]
$R$ 是 Noether 局部环，$M,N$ 是其有限生成模。如
$M\otimes_RN$ 为非零且有限长，则
$\dim N\le\operatorname{pd}(M)$。
:::

::: theorem [新相交定理]
$R$ 是 Noether 局部环，$n$ 是自然数，
$$
0\to F_n\to\cdots\to F_1\to F_0\to0
$$
是 $R$-[[极小复形]]。如其各同调群都有限长，则
$\dim R\le n$。
:::

::: theorem [加强的新相交定理]
$(R,\mathfrak{m})$ 是 Noether 局部环，$n$ 是自然数，
$$
0\to F_n\to\cdots\to F_1\to F_0\to0
$$
是 $R$-极小复形。如其 $1$ 至 $n$ 阶同调群都有限长，
又存在 $0$ 阶同调群 $H_0$ 的元素 $x$，
不在 $\mathfrak{m}H_0$ 中，且生成的子模有限长，
则 $\dim R\le n$。
:::

### Bass 问题

::: theorem
$R$ 是 Noether 局部环。如存在非零有限生成 $R$-模[[内射维数]]有限，
则 $R$ 是 [[Cohen–Macaulay 环]]。
:::

### Auslander 零因子猜想

::: theorem
$R$ 是 Noether 局部环，$M$ 是其有限生成模，[[投射维数]]有限。
如 $r\in R$ 是 $M$ 的[[非零因子]]，那它就是 $R$ 的[[非零因子]]。
:::

## 蕴涵关系

本节证明上节各猜想之间的蕴涵关系，主要是把其中大部分化归到 @bcm。

::: lemma {@tor无关}
设 $(R,\mathfrak{m},k)$ 是正则局部环，$M,N$ 是其 [[Cohen–Macaulay 模]]，
维数分别为 $m,n$，满足 $M\otimes_RN$ 有限长，且 $m+n=\dim R$。
则对任意正整数 $i$，$\operatorname{Tor}_i^R(M,N)=0$。
:::

::: proof
首先条件推出各个 $\operatorname{Tor}_i^R(M,N)$ 都有限长
（见主条目 [[Serre 重数猜想]]）。设
$d=\sup\{i\in\mathbb{N}\mid\operatorname{Tor}_i^R(M,N)\ne0\}$，
要证 $d=0$。

考虑复形 $M\otimes_R^LN\otimes_R^Lk$，其中 $-\otimes^L-$ 表示导出张量积。
由[[正则局部环]]上[[有限长模]]的 [[$\operatorname{Tor}$-维数]]是环的维数，
可知 $M\otimes_R^LN\otimes_R^Lk$ 最后一个非零同调群处于
$d+\dim R$ 阶。另一方面，由 [[Auslander–Buchsbaum 公式]]，
$\operatorname{pd}(M)=\dim R-m$，$\operatorname{pd}(N)=\dim R-n$，
于是 $M\otimes_R^Lk$，$N\otimes_R^Lk$ 的最后一个非零同调群分别处于
$\dim R-m$，$\dim R-n$ 阶。这样一来，
$$
M\otimes_R^LN\otimes_R^Lk=(M\otimes_R^Lk)\otimes_k(N\otimes_R^Lk)
$$
的最后一个非零同调群就处于 $(\dim R-m)+(\dim R-n)=\dim R$ 阶。
所以 $d=0$。
:::

::: theorem
@cm 推出 @serre。
:::

::: proof
首先完备化不改变事情，故可不妨设 $R$ 为完备。
用[[结合素理想]]的理论把 @serre 中的模 $M,N$
拆成 $R/\mathfrak{p}$ 这样的模的扩张，可设 $M=R/\mathfrak{p}$，
$N=R/\mathfrak{q}$，$\mathfrak{p},\mathfrak{q}$ 为素理想，
$R/(\mathfrak{p}+\mathfrak{q})$ 为有限长。记
$m=\dim R/\mathfrak{p}$，$n=\dim R/\mathfrak{q}$，
则 $m+n\le\dim R$。由于 [[Serre 重数猜想]]的 $m+n<\dim R$
情形已被证明，下设 $m+n=\dim R$。

如 @cm 成立，则可分别取 $R/\mathfrak{p}$ 与
$R/\mathfrak{q}$ 的极大 Cohen–Macaulay 模，记为 $M',N'$，
则 $\dim M'=m$，$\dim N'=n$。而 $M',N'$ 又可拆成滤链，
各项分别形如 $R/\mathfrak{p}'$ 与 $R/\mathfrak{q}'$，
$\mathfrak{p}'\supseteq\mathfrak{p}$，
$\mathfrak{q}'\supseteq\mathfrak{q}$。设 $M'$ 的滤链中有 $p$ 项的
$R/\mathfrak{p}$，$N'$ 的滤链中有 $q$ 项的 $R/\mathfrak{q}$。
由于 $\mathfrak{p}'\supsetneqq\mathfrak{p}$
与 $\mathfrak{q}'\supsetneqq\mathfrak{q}$ 的那些项没有贡献，故
$$
\chi(M',N')=pq\chi(R/\mathfrak{p},R/\mathfrak{q}).
$$
于是只需证 $\chi(M',N')>0$。这是 @tor无关 的直接推论。
:::

::: theorem
@bcm 推出 @tor=0。
:::

::: proof
由于 $\operatorname{Tor}$ 函子与滤余极限、局部化都交换，
可设 $M$ 有限生成，$R$ 为局部环。作忠实平坦基变换，可设
$R$ 完备。这样由 $S$ 在 $R$ 上有限便知 $S$ 是一些局部环的乘积，
故也可设 $S$ 局部。最后如对 $T$ 的极大理想 $\mathfrak{n}$
证明了映射 $\operatorname{Tor}_i^R(M,S)\to\operatorname{Tor}_i^R(M,T_\mathfrak{n})$
为零，再用 $\operatorname{Tor}$ 函子与滤余极限交换以及
$M,S$ 都是有限生成 $R$-模，可知存在 $t\in T$，$t\notin\mathfrak{n}$
使得映射 $\operatorname{Tor}_i^R(M,S)\to\operatorname{Tor}_i^R(M,T_t)$
为零。这样如对 $T$ 的每个素理想处局部化证明了命题，命题就对
$T$ 的一个 Zariski 开覆盖成立，然后由忠实平坦下降便知命题对 $T$ 也成立。
于是还可设 $T$ 局部。

现取 $S,T$ 的弱函子性大 Cohen–Macaulay 代数 $B,C$ 如下：
\[
\begin{tikzcd}
  R\ar[r]\ar[rd]&S\ar[r]\ar[d]&T\ar[d]\\
  &B\ar[r]&C
\end{tikzcd}
\]
则由 $R\to S$ 有限，$B$ 也是 $R$ 的大 Cohen–Macaulay 代数。
故由[[奇迹平坦]]，映射 $R\to B$，$T\to C$ 为[[忠实平坦同态|忠实平坦]]。
于是有 $\operatorname{Tor}$ 函子的交换图
\[
\begin{tikzcd}
  \operatorname{Tor}_i^R(M,S)\ar[r]\ar[d]&\operatorname{Tor}_i^R(M,T)\ar[d]\\
  \operatorname{Tor}_i^R(M,B)\ar[r]&\operatorname{Tor}_i^R(M,C)
\end{tikzcd}
\]
由 $R\to B$ 平坦，$\operatorname{Tor}_i^R(M,B)=0$；
由 $T\to C$ 忠实平坦，$\operatorname{Tor}_i^R(M,T)\to\operatorname{Tor}_i^R(M,C)$
为单射。故映射 $\operatorname{Tor}_i^R(M,S)\to\operatorname{Tor}_i^R(M,T)$
为零。
:::

::: theorem
@tor=0 推出 @dscm。
:::

::: proof
用 @dscm 中的记号。由 CM 环定义是局部的，
可设 $R$ 是局部环。由忠实平坦下降，可设 $R$ 完备。现由
[[Noether 正规化]]可取有限单射 $R_0\to R$，其中 $R_0$
是完备正则局部环。于是对任意 $R_0$-模 $M$ 及正整数 $i$，
@tor=0 说映射 $\operatorname{Tor}_i(M,R)
\to\operatorname{Tor}_i(M,S)$ 为零。而 $R\to S$
是分裂单射，于是这说明 $\operatorname{Tor}_i(M,R)=0$。
这样 $R$ 就是平坦 $R_0$-模，由[[奇迹平坦]] $R$ 为 CM 环。
:::

```terms
同调猜想:
  en: homological conjectures
  de: homologische Vermutungen
  fr: conjectures homologiques
```
