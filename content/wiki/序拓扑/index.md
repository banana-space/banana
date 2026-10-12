---
title: 序拓扑
categories: [一般拓扑]
navboxes: [一般拓扑]
---

**序拓扑**是[[全序集]]上自然带有的[[拓扑空间|拓扑]]，
是[[实数]]上通常拓扑的推广。

## 定义

::: definition
[[全序集]] $X$ 的序拓扑指以开区间
$$
(a,b)=\{x\in X\mid a<x<b\}
$$
为[[开集基]]生成的拓扑。
:::

## 例子

- [[实数]]的序拓扑就是其通常拓扑。

- [[整数]]的序拓扑是[[离散拓扑]]。一般地，
  如果一个全序集中，每个非最大元都有大于它的最小元，
  每个非最小元都有小于它的最大元，序拓扑就会是离散拓扑。

- [[长直线]]就是一种序拓扑。

- 序拓扑的子空间未必是序拓扑。$\{0\}\cup(1,+\infty)
  \subset\mathbb{R}$ 就是一例。

## 性质

以下固定全序集 $X$，带序拓扑。

::: proposition [闭包] {@闭包}
对 $A\subseteq X$ 和 $x\in X$，$x\in\bar{A}$
当且仅当 $x=\sup\{a\in A\mid a\le x\}$ 或
$x=\inf\{a\in A\mid a\ge x\}$。
:::

::: proof
$x\notin\bar{A}$ 当且仅当存在 $b,c\in X$ 使得
$(b,c)\cap A=\emptyset$ 且 $x\in (b,c)$，即存在小于 $x$
的 $b$ 作 $\{a\in A\mid a\le x\}$ 的上界，存在大于
$x$ 的 $c$ 作 $\{a\in A\mid a\ge x\}$ 的下界，亦即
$x$ 不是这二者的确界。
:::

回忆称子集 $A\subseteq X$ 为凸集，意思是对任意
$x,y,z\in X$，只要 $x<y<z$ 且 $x,z\in A$，就有 $y\in A$。

::: proposition [凸分拆]
全序集的子集都可唯一分拆为其极大凸子集的无交并；
称这些极大凸子集为凸分量。
:::

::: proof
对 $A\subseteq X$ 以及 $x\in A$，考虑包含 $x$、
含于 $A$ 的所有凸集，对此用 [[Zorn 引理]]即可取出 $x$
所在凸分量。由极大性，不同元素所在的凸分量要么重合要么无交，
故这构成 $A$ 的分拆。
:::

以下推论推广了“$\mathbb{R}$ 中开集都能写成无交开区间的并”。

::: corollary [开集结构]
$A\subseteq X$ 为开集当且仅当其各个凸分量为开集。
于是 $X$ 中开集恰为那些可写成无交开凸集的并者。
:::

::: proof
开集的任意并还是开集，故只需说明开集的凸分量是开集。
这是因为开区间是凸集，而开区间构成拓扑基。
:::

::: theorem
序拓扑都是 [[正规空间|$\mathrm{T}_4$]]。
:::

::: proof
序拓扑的单点集显然是闭集。取 $X$ 的两个不交闭子集
$A,B$，下证它们被开集分离。为此作凸分拆
$$
A=\bigcup_{i\in I}A_i,\,B=\bigcup_{j\in J}B_j,\,
X\setminus(A\cup B)=\bigcup_{k\in K}W_k,
$$
则 $X$ 的全序给出 $I\sqcup J\sqcup K$ 上的全序。
对 $k\in K$，假如 $\sup W_k$ 和 $\inf W_k$
都存在且分属 $A,B$，取 $w_k\in W_k$。以下给 $A$ 和 $B$
的每个凸分量取开邻域，让相应的并集无交。

对每个 $i\in I$ 写 $A_i=A_i^+\cap A_i^-$，其中
$A_i^+$ 向上封闭，$A_i^-$ 向下封闭。如 $A_i^+$ 开，
令 $U_i^+=A_i^+$。如其不开，则其必有最小元，且该最小元是
$\sup(X\setminus A_i^+)$。现对 $I\sqcup J\sqcup K$
中小于 $i$ 的元素分类讨论：

- 如小于 $i$ 的元素中有最大者，
  由凸分拆的定义它不可能在 $I$ 中，由 @闭包
  它不可能在 $J$ 中，故它只能在 $K$ 中，设其为 $k$。
  取 $w\in W_k$，且如一开始取过 $w_k\in W_k$ 则取
  $w=w_k$。令 $U_i^+=(w,+\infty)$。

- 如小于 $i$ 的元素中无最大者，由 @闭包，$i$ 不能是小于 $i$ 的 $J$ 中元素的上确界，
  故存在 $\ell\in I\sqcup K$，满足 $\ell<i$，且
  $\ell$ 和 $i$ 之间没有 $J$ 中元素。由凸分拆的定义，
  $\ell$ 和 $i$ 之间的元素不能全在 $K$ 中。故存在
  $i'\in I$ 满足 $\ell<i'<i$。取 $a\in A_{i'}$，
  令 $U_i^+=(a,+\infty)$。

这样不论如何我们都取出了开集 $U_i^+\supseteq A_i^+$。
同样地取 $U_i^-\supseteq A_i^-$。令
$U_i=U_i^+\cap U_i^-$，则 $U_i$ 是 $A_i$ 的开邻域。
再用同样方法取各 $B_j$ 的开邻域 $V_j$。令
$$
U=\bigcup_{i\in I}U_i,\,V=\bigcup_{j\in J}V_j,
$$
则容易发现 $U\cap V=\emptyset$。
:::

```terms
序拓扑:
  en: order topology
  fr: topologie de l'ordre
  de: Ordnungstopologie
```
