---
title: Cohen–Macaulay 模
aliases: [大 Cohen–Macaulay 模, Cohen-Macaulay 模, 大 Cohen-Macaulay 模]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**Cohen–Macaulay 模**是 [[Noether 环|Noether]]
[[局部环]]上一类同调表现良好的[[模]]。具体地说，
它指的是[[深度]]等于 [[Krull 维数]]的模。

## 定义

::: definition
$(R,\mathfrak{m})$ 是 [[Noether 环|Noether]] [[局部环]]，
$M$ 是[[有限生成模|有限生成]] $R$-模。称 $M$ 为
**Cohen–Macaulay 模**，简称 **CM 模**，
指的是 $M=0$ 或 $\operatorname{depth}(M)=\dim M$。
如此数还等于 $\dim R$，则称 $M$ 为**极大 Cohen–Macaulay 模**，
简称 **MCM 模**。

说 Noether 环上的有限生成模 **Cohen–Macaulay**，
指的是其在各个素理想处局部化为 Cohen–Macaulay。
:::

::: remark
下面（@局部化）将会看到，以上定义的两个
Cohen–Macaulay 等价。
:::

::: remark
由[[深度]]的性质，Noether 局部环上的有限生成模，
深度不大于维数。Cohen–Macaulay 相当于要求它也不小于维数。
:::

## 性质

::: proposition {@有限长}
[[有限长模]] Cohen–Macaulay。
:::

::: proof
非零有限长模的深度和维数显然都是 $0$。
:::

::: proposition {@结合素理想}
局部环上的 Cohen–Macaulay 模每个[[结合素理想]]的商环维数都等于模的维数。
特别地，它没有嵌入素理想。
:::

::: proof
设 $(R,\mathfrak{m})$ 是局部环，$M$ 是其 Cohen–Macaulay 模。
由[[深度]]的性质，对每个 $\mathfrak{p}\in\operatorname{Ass}(M)$，
$\dim R/\mathfrak{p}\ge\operatorname{depth}(M)=\dim M$，
此即欲证。
:::

::: theorem [切片判别法] {@切片}
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是非零有限生成
$R$-模，$\dim M=d$。设 $c\in\mathbb{N}$，$r_1,\ldots,r_c\in\mathfrak{m}$，
$\dim M/(r_1,\ldots,r_c)M=d-c$。则 $M$ 是（极大）Cohen–Macaulay 模，
当且仅当 $r_1,\ldots,r_c$ 是 $M$-正则序列且
$M/(r_1,\ldots,r_c)M$ 是（极大）Cohen–Macaulay 模。
:::

::: proof
由[[深度]]的性质，如 $r_1,\ldots,r_c$ 是 $M$-正则序列，
则 $\operatorname{depth}(M/(r_1,\ldots,r_c)M)=\operatorname{depth}(M)-c$，
故关于 Cohen–Macaulay 模的命题推出关于极大
Cohen–Macaulay 模的命题。只需证前者。

用归纳法，只需证 $c=1$ 情形。设 $r\in\mathfrak{m}$ 满足
$\dim M/rM=d-1$。则如 $r$ 是 $M$ 的非零因子，$M/rM$
是 Cohen–Macaulay 模，则 $\operatorname{depth}(M)
  =\operatorname{depth}(M/rM)+1=d=\dim M$，故 $M$
为 Cohen–Macaulay 模。反过来如 $M$ 是 Cohen–Macaulay 模，
$\dim M/rM=d-1$，则由 @结合素理想 知
$r$ 不属于 $M$ 的任一个结合素理想，于是 $r$ 为 $M$ 的非零因子。
这样 $\operatorname{depth}(M/rM)=\operatorname{depth}(M)-1=d-1=\dim M/rM$，
故 $M/rM$ 也是 Cohen–Macaulay 模。
:::

::: corollary {@均维}
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是 Cohen–Macaulay $R$-模，
$\operatorname{Supp}(M)=\operatorname{Spec}R$。则 $R$
为[[均维环|均维]][[悬链环]]。
:::

::: proof
需证每一条极长的素理想链都等长。设
$$
\mathfrak{p}_0\subsetneqq\mathfrak{p}_1\subsetneqq\cdots\subsetneqq\mathfrak{p}_d=\mathfrak{m}
$$
是这样一条链，要证 $d=\dim R$。对 $d$ 归纳。$d=0$ 时显然。
$d>0$ 时，由于这里的 $\mathfrak{p}_0$ 是极小素理想而
$\mathfrak{p}_1$ 不是，用[[素理想回避]]可取 $r\in\mathfrak{p}_1$
不在各个极小素理想中。于是由 @结合素理想，
$r\notin\operatorname{Ass}(M)$，故 $r$ 是 $M$ 的非零因子。
这样 $M/rM$ 是 Cohen–Macaulay $R/r$-模，

\[
\bar{\mathfrak{p}}_1\subsetneqq\cdots\subsetneqq\bar{\mathfrak{p}}_d=\bar{\mathfrak{m}}
\]

是 $R/r$ 的极长素理想链。只需证 $\operatorname{Supp}(M/rM)=\operatorname{Spec}R/r$。

由于 $r$ 是 $M$ 的非零因子，对每个正整数 $n$，$M/r^nM$
都有个滤链，相邻两项的商同构于 $M/rM$，于是
$\operatorname{Supp}(M/r^nM)=\operatorname{Supp}(M/rM)$。
现对 $R$ 中包含 $r$ 的素理想 $\mathfrak{q}$，用
$\operatorname{Supp}(M)=\operatorname{Spec}R$ 取结合素理想
$\operatorname{Ass}(M)\ni\mathfrak{p}\subseteq\mathfrak{q}$，
则存在子模 $N\subseteq M$，$N\cong R/\mathfrak{p}$。
由 [[Artin–Rees 引理]]，存在 $c\in\mathbb{N}$，$r^cM\cap N\subseteq rN$，
这样 $N/rN$ 就是 $M/r^cM$ 的子商；而 $N/rN\cong R/(\mathfrak{p}+(r))$，
$\mathfrak{q}$ 当然在其支集中；
故 $\mathfrak{q}\in\operatorname{Supp}(M/r^cM)=\operatorname{Supp}(M/rM)$。
:::

::: theorem [正则序列刻画]
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是非零有限生成
$R$-模。以下几条等价：

- $M$ 是极大 Cohen–Macaulay 模。

- $R$ 的每个参数系都是 $M$-正则序列。

- $R$ 有一个参数系是 $M$-正则序列。

:::

::: proof
如 $M$ 是极大 Cohen–Macaulay 模，$r_1,\ldots,r_d\in\mathfrak{m}$
是 $R$ 的参数系，则 $\dim M=d$，
$\dim M/(r_1,\ldots,r_d)M=0$。于是由 @切片
知 $r_1,\ldots,r_d$ 是 $M$-正则序列。

反过来如存在参数系 $r_1,\ldots,r_d$ 是 $M$-正则序列，则
$\operatorname{depth}(M)=\operatorname{depth}(M/(r_1,\ldots,r_d)M)+d=d=\dim R\ge\dim M$，
故 $M$ 为 Cohen–Macaulay。
:::

::: proposition {@局部化}
$(R,\mathfrak{m})$ 是 Noether 局部环，$\mathfrak{p}$
是其素理想。如 $M$ 是 Cohen–Macaulay $R$-模，
则 $M_\mathfrak{p}$ 是 Cohen–Macaulay $R_\mathfrak{p}$-模。
:::

::: proof
不妨设 $M_\mathfrak{p}\ne0$。对 $d=\dim M_\mathfrak{p}$
归纳。如 $d=0$，则 $M_\mathfrak{p}$ 为[[有限长模|有限长]]，
由 @有限长 知其为 Cohen–Macaulay。如 $d>0$，
则 $\mathfrak{p}$ 不是 $M$ 的[[极小素理想]]，由 @结合素理想 知其也不是 $M$ 的[[结合素理想]]。
用[[素理想回避]]取 $r\in\mathfrak{p}$ 不在 $M$ 各个结合素理想中，
则 $r$ 是 $M$ 的[[非零因子]]。现在对 $M$ 和 $M_\mathfrak{p}$
各用一次 @切片，由归纳假设即得结论。
:::

下面的命题说的是 Cohen–Macaulay 模在变换基环时的性质。

::: proposition {@纤维}
设 $(R,\mathfrak{m})\to(S,\mathfrak{n})$ 是
Noether 局部环的局部同态，$M$ 是 Cohen–Macaulay $R$-模，
$N$ 是在 $R$ 上[[平坦模|平坦]]的 $S$-模，
满足 $N/\mathfrak{m}N$ 是 Cohen–Macaulay $S/\mathfrak{m}S$-模。
则 $M\otimes_RN$ 是 Cohen–Macaulay $S$-模，
且 $\dim(M\otimes_RN)=\dim(M)+\dim(N/\mathfrak{m}N)$。
:::

::: proof
[[深度]]条目的对应命题给出
$$
\operatorname{depth}_{\mathfrak{n}}(M\otimes_RN)=
\operatorname{depth}_{\mathfrak{m}}(M)
+\operatorname{depth}_{\mathfrak{n}}(N/\mathfrak{m}N);
$$
而[[维数理论 (交换代数)|纤维维数公式]]给出
$$
\dim(M\otimes_RN)\le\dim(M)+\dim(N/\mathfrak{m}N);
$$
合起来即得欲证。
:::

::: corollary {@基变换}
设 $A\to B$ 是 Noether 环的 [[Cohen–Macaulay 同态]]，
$M$ 是 Cohen–Macaulay $A$-模。则
$M\otimes_AB$ 是 Cohen–Macaulay $B$-模。
:::

::: proof
由定义立即化归到 $A\to B$ 是局部环的局部同态的情形，
而这就是 @纤维 的 $N=S$ 情形。
:::

::: corollary
$A$ 是 Noether 环，$M$ 是 Cohen–Macaulay $A$-模，
$\operatorname{Supp}(M)=\operatorname{Spec}A$。
则 $A$ 为[[泛悬链环]]。
:::

::: proof
只需对任意 $n\in\mathbb{N}$ 证明 $A[x_1,\ldots,x_n]$
是悬链环。在 @基变换 中取 $B=A[x_1,\ldots,x_n]$
知 $M\otimes_AA[x_1,\ldots,x_n]$ 是 Cohen–Macaulay
$A[x_1,\ldots,x_n]$-模，且由
$\operatorname{Supp}(M)=\operatorname{Spec}A$
容易发现
$\operatorname{Supp}(M\otimes_AA[x_1,\ldots,x_n])
  =\operatorname{Spec}A[x_1,\ldots,x_n]$。
这样由 @均维 即得结论。
:::

## 例子

- [[有限长模]]都是 Cohen–Macaulay 模。

- [[Cohen–Macaulay 环]]是自身的 Cohen–Macaulay 模。
  特别地，[[正则环]]都是自身的 Cohen–Macaulay 模。

- 任取域 $k$。则 $R=k[[x,y]]/(x^2,xy)$ 作为自身的模，
  深度为 $0$，维数为 $1$，故不是 Cohen–Macaulay 模。而
  $k[[x,y]]/x$ 是 Cohen–Macaulay $R$-模，因有正则序列 $y$。

## 推广

极大 Cohen–Macaulay 模的概念可推广至未必有限生成的模。

::: definition
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是 $R$-模。
称 $M$ 为**大 Cohen–Macaulay 模**，指的是
$\mathfrak{m}M\ne M$，且
$R$ 的每一个参数系都是 $M$-正则序列。
:::

::: remark
一些地方将此概念称作**平衡大 Cohen–Macaulay 模**，
而用“大 Cohen–Macaulay 模”一词表示更弱的概念：
$R$ 的某个参数系是 $M$-正则序列。
由于相关的[[同调猜想]]已对较强的概念证明，
故定义得强点没什么坏处。
:::

::: remark
注意“大 Cohen–Macaulay 模”比“极大 Cohen–Macaulay 模”大，
因为后者专指有限生成的。
:::

```terms
Cohen–Macaulay 模:
  en: Cohen–Macaulay module
  de: Cohen–Macaulay-Modul
  fr: module de Cohen–Macaulay
极大 Cohen–Macaulay 模:
  en: maximal Cohen–Macaulay module
  de: maximaler Cohen–Macaulay-Modul
  fr: module maximal de Cohen–Macaulay
大 Cohen–Macaulay 模:
  en: big Cohen–Macaulay module
  de: großer Cohen–Macaulay-Modul
  fr: grand module de Cohen–Macaulay
平衡大 Cohen–Macaulay 模:
  en: balanced big Cohen–Macaulay module
  de: balancierter Cohen–Macaulay-Modul
  fr: module balancé de Cohen–Macaulay
```
