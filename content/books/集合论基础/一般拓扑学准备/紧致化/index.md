---
title: 紧致化
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
这一节，我们来描述一个拓扑空间何时能嵌入到具有良好性质的紧致空间中去。

::: definition [紧致化]
空间$X$的紧致化是一个包含它的紧致$T_2$空间$Y$，它以$X$为子空间，且$\mathrm{Cl}(X)=Y$。

两个紧致化是等价的，若它们之间存在一个同胚，且这个同胚在$X$上恰好是恒等函数。
:::

::: remark*
注意紧$T_2$空间一定是$T_{3.5}$的，从而$X$作为其子空间也至少是$T_{3.5}$空间；另一方面，$T_{3.5}$空间必然可以嵌入某个$[0,1]^J$中（为什么），而后者必然是紧致$T_2$的（为什么）。因此我们有定理。

::: theorem
空间$X$存在紧致化当且仅当它$T_{3.5}$。
:::
:::

首先，我们来看紧致化是如何产生的。

::: theorem
任给嵌入$h:X\to Z$，要求$Z$紧致$T_2$，则在等价意义下一定存在唯一一个$X$的紧致化$Y$，使得存在嵌入$H:Y\to Z$，它在$X$上的限制恰好就是$h$。
:::

::: proof
显然这个$Y$在同胚意义下就是$\mathrm{Cl}(h(X))$，剩下的问题不过是怎么把多出来的部分保持结构地粘到$X$上面。
:::

接下来，我们考虑集合意义下最小的紧致化。

::: theorem [单点紧化]
$X$存在唯一的紧致化$Y$使得$Y\backslash X$是单点集，当且仅当$X$是不紧致的LCH空间。
:::

::: remark*
LCH严格强于$T_{3.5}$，因为度量空间都不一定局部紧。
:::

::: proof
如果这种紧致化存在，显然$X$是不紧的LCH空间，所以只要证明不紧致的LCH空间确实可以这样唯一地进行紧致化。

构造上，我们新增一个点$Y=X\cup\{\infty\}$，然后新增全体$Y\backslash C$作为开集，这里$C\subseteq X$是紧致子空间。不难验证$Y$是紧致$T_2$空间，且以$X$为子空间。

唯一性的验证是简单的：因为双射必然把新增点映到新增点，只要验证这个函数连续。如果开集不包含新增点，则原像显然是开集；如果包含，考虑其补集是闭集从而紧致，且包含在原来的空间中，于是补集的原像还是自己，还是紧致子空间，还是闭集，于是原像还是开集。
:::

对于一般的$T_{3.5}$空间，只用一个点完成紧致化是不一定行的，但我们在拓扑意义下有另一个重要得多的极大紧致化。

::: theorem [Stone-Cech紧致化]
任给$T_{3.5}$空间$X$，在等价意义下存在唯一的紧致化$Y$，使得每个有界连续函数$f:X\to\mathbb{R}$都可以唯一扩张为连续的$Y\to\mathbb{R}$的函数。这个$Y$记为$\beta(X)$，称为Stone-Cech紧致化。

它还满足：任给$X$的另外的紧致化$Y$。一定存在满的连续闭映射$g:\beta(X)\to Y$，它在$X$上就是恒等映射。换言之，每个$X$的紧致化都是$\beta(X)$的商空间。
:::

这个紧致化还和超滤有着不解之缘。我们复习一下超滤的定义。

::: definition [滤与超滤]
一个$\wp (X)$的子集$\mathcal{F}$，若满足：

1. $\varnothing\not\in\mathcal{F}\wedge X\in\mathcal{F}$

2. $\forall A\in\mathcal{F}\forall B\subseteq X(A\subseteq B\rightarrow B\in\mathcal{F})$

3. $\forall A,B\in\mathcal{F}(A\cap B\in\mathcal{F})$

则称$\mathcal{F}$是$X$上的一个滤。若它还满足$\forall A\subseteq X(A\in\mathcal{F}\vee X\backslash A\in\mathcal{F})$，则额外称之为超滤。
:::

::: theorem
$X$赋离散拓扑后做Stone-Cech紧致化得到的恰好是全体超滤构成的空间$\beta(X)$。
:::

当然，在集合基数的意义下我们会好奇这次紧致化让空间增大了多少。注意到超滤是$\wp (X)$的子集，它们至多应当有$\beth(\beth(|X|))$这样大。

::: theorem [Pospisil]
对每个无穷基数$\kappa$，其上所有的一致超滤构成的集合的势是$\beth(\beth(\kappa))$。

我们称$\kappa$上的超滤$\mathcal{S}$是一致的，若$S\in\mathcal{S}\to |S|=\kappa$。
:::

::: proof
我们来考虑一致超滤的滤子基们。引入以下定义。

**定义（独立集）。** 称$\mathcal{A}\subseteq\wp (X)$是独立的，若从中任取不同的$n$个元素$X_i$与$m$个元素$Y_i$，这里$n,m\in\omega$，均有$|(\bigcap_{i}X_i)\cap(\bigcap_{j}(X\backslash Y_j))|=|X|$。

显然独立集的基数最大也不过是$\beth(|X|)$。

**引理。** 对每个无穷基数$\kappa$，均存在其上的基数为$\beth(\kappa)$的独立集。

**证明。** 我们考虑全体$(F,\mathcal{F})$构成的集$P$，这里$F$是$\kappa$的有限子集，$\mathcal{F}$是有限个$\kappa$的有限子集构成的集族。显然$|P|=\kappa$，我们只要找一个$P$上的基数$\beth(\kappa)$的独立集。

对每个$u\subseteq\kappa$，我们做$X_u=\{(F,\mathcal{F})\in P|F\cap u\in\mathcal{F}\}$，然后令$\mathcal{A}=\{X_u|u\subseteq\kappa\}$。显然$|\mathcal{A}|=\beth(\kappa)$，我们证明它是独立集。

考虑$n$个$u_i$和$m$个$v_j$，我们需要$|(\bigcap_{i}X_{u_i})\cap(\bigcap_{j}(P\backslash X_{v_j}))|=\kappa$。从每个$u_i\bigtriangleup v_j$中选取一个元素$a_{i,j}$，则可得到一有限集$A=\{a_{i,j}\}$；全体包含$A$的有限集$F\subseteq\kappa$共有$\kappa$个。

现在对每个$F\supseteq A$做有限的有限集族$\mathcal{F}=\{F\cap u_i\}$，则每一对$(F,\mathcal{F})$均在$(\bigcap_{i}X_{u_i})\cap(\bigcap_{j}(P\backslash X_{v_j}))$之中，而$F$共有$\kappa$个，这就证完了。

现在，对无穷基数$\kappa$考虑我们引理给出的基数$\beth(\kappa)$的独立集$\mathcal{A}$。对每个函数$f:\mathcal{A}\to 2$，我们考虑$G_f=\{X\subseteq\kappa||\kappa\backslash X|<\kappa\vee f(X)=1\vee f(\kappa\backslash X)=0\}$，则它显然是一个滤子基（即满足有限交性质）。现在它扩张出的超滤$D_f\supseteq G_f$是一个一致超滤，而$f$显然有$\beth(\kappa)$个。
:::

::: remark*
Pospisil的原始证明是完全拓扑的，这个更简单的证明似乎来自于Hajnal与Juhasz。
:::

这个紧致化事实上具有函子性。

::: theorem
每个连续函数$f:X\to Y$都提升为一个连续函数$\beta(f):\beta(X)\to\beta(Y)$。
:::

更好的是它由一个泛性质刻画。另一种说法是，它是紧致$T_2$空间的范畴到一般拓扑空间范畴的遗忘函子的左伴随。

::: theorem
从$X$到任意紧致$T_2$空间$Y$的连续映射$f$都一定可以分解成仅由$X$决定的连续函数$i_X:X\to\beta(X)$与某个与$f$有关的连续函数$\bar{f}:\beta(X)\to Y$的复合。
:::

在这个意义下，我们可以对任意拓扑空间定义Stone-Cech紧致化。

::: theorem
任何拓扑空间$X$在上述意义下均存在对应的$i_X:X\to\beta(X)$。
:::

此外，我们一开始对$T_{3.5}$空间定义的紧致化也可以无缝衔接过来。

::: theorem
空间$X$是$T_{3.5}$的，当且仅当$i_X$是单射，且$X$的拓扑恰好是它从$\beta(X)$上继承的子空间拓扑。

$X$是局部紧致的，当且仅当它是$\beta(X)$的开子空间。
:::
