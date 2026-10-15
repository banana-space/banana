---
title: Baire性质
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
Baire性质与集合的稠密程度密切相关。

::: definition [Baire性质]
定义闭包的内部为空集的点集为无处稠密集。一列无处稠密集的并称作第一纲集。不是第一纲集的集称作第二纲集。

如果一个集与某个开集仅相差一个第一纲集（即它们的对称差$A\bigtriangleup B=(A\backslash B)\cup(B\backslash A)$是第一纲集），则称这个集具有Baire性质。
:::

## Baire空间

我们要定义Baire空间，它是Baire性质出现的最佳场所。

::: definition [Baire空间]
以下性质在拓扑空间中等价，满足它们的空间称为Baire空间。

1. 非空开集均为第二纲集。

2. 第一纲集的补集稠密。

3. 可列个稠密开集之交稠密。

4. 可列个无处稠密闭集的并集无处稠密。

:::

::: proof
$1\to 2$：不稠密的集的补集第二纲，因为不稠密的集有外部，这个外部是非空开集。

$2\to 3$：稠密开集的补集是无处稠密的闭集，一列稠密开集的交集的补集是第一纲集。

$3\to 4$：稠密开集的补集是无处稠密的闭集，对$3$中提到的集合取补集。

$4\to 1$：反证法，若非空开集第一纲，则它无处稠，然而它显然以自己为内部，矛盾。
:::

::: corollary
Baire空间的开子空间还是Baire空间。
:::

今后，我们提到Baire空间时，总是想起这个定义，而非以前的$\mathcal{N}$。

::: theorem
Baire空间的开子空间是Baire空间。
:::

::: proof
由第一个定义显然。
:::

Baire空间的积并不一定是Baire空间；然而，在增强条件后我们可以有一些较弱的结论。

::: theorem
$C_2$的Baire空间的有限积仍是$C_2$的Baire空间。
:::

::: proof
运用Kuratowski-Ulam定理的推论显然有非空开集均第二纲。
:::

我们接下来提出Baire纲定理，它无非是在讲两种常见的空间均为Baire空间。

::: theorem [Baire]
完备度量空间与LCH空间均为Baire空间。
:::

::: proof
对于完备度量空间，我们来查验Baire空间的第三个定义。给定一列稠密开集$U_n$和任意开集$U$，我们需要证明$\bigcap_{n}U_n\cap U\not=\varnothing$。取$U_0\cap U$中任意一点$x_0$，然后取此处半径$r_0<\frac12$的开球$B_0=B_{r_0}(x_0)$使得$\mathrm{Cl}(B_0)\subseteq U_0\cap U$。现在$U_1\cap B_0\not=\varnothing$，于是我们又可取$x_1$与$B_1$，其半径小于$\frac13$，以此类推。于是$\{x_n\}$是一个Cauchy列，完备性指出它收敛，那么它们收敛到的点$x$就在$\bigcap_{n}U_n\cap U$中。

对于LCH空间，我们只要在上面的取法中把$B_n$变成$x_n$处小邻域，满足$\mathrm{Cl}(B_n)$紧致，于是我们取出的是一个紧集$B_0$中的非空递降闭集列，其实只需要可数紧致就能推断它们的交不空。
:::

## 具有Baire性质的集

我们先来陈述一个关于第一纲集的显然命题，它们或许会出人意料地有用。

::: proposition
第一纲集的可列并与子集都是第一纲集。
:::

因此，全体第一纲集构成的集族我们记为$\mathrm{MGR}(X)$，它对于取子集与取可列并封闭。满足前者的集族称作理想(ideal)，满足这两者的集族称作$\sigma$理想($\sigma$-ideal)。

现在，我们来考察全体具有Baire性质的集。

::: theorem
在任意拓扑空间$X$上，全体具有Baire性质的集构成的集族$\mathrm{BP}(X)$是最小的包括全体开集和全体第一纲集的$\sigma$代数。
:::

::: proof
我们先来验证$\mathrm{BP}(X)$是$\sigma$代数。显然空集具有Baire性质，我们只要验证它对取补集与可数并封闭。

若$A\bigtriangleup U$是第一纲集$M$，这里$U$是开集，则$(X\backslash A)\bigtriangleup (X\backslash U)=M$，而$(X\backslash U)\bigtriangleup \mathrm{Int}(X\backslash U)$显然是无处稠密集（无内部闭集），当然也是第一纲集，因此$(X\backslash A)\bigtriangleup \mathrm{Int}(X\backslash U)$是第一纲集。

若一列$A_n\bigtriangleup U_n$都是第一纲集$M_n$，这里$U_n$是开集，则$\bigcup_{n}A_n\bigtriangleup\bigcup_{n}U_n\subseteq\bigcup_{n}M_n$，后者是第一纲集，于是前者也是第一纲集。

最后，我们讲它最小，是因为开集与第一纲集可以直接造出全体具有Baire性质的集。
:::

::: corollary
$\mathrm{BP}(X)\supseteq\mathsf{B}(X)$。换言之，Borel集均有Baire性质。
:::

对称差时常不方便处理，我们有更多等效的定义。

::: theorem
对于空间$X$中的子集$A$，以下命题等价：

1. 存在开集$U$，$A\bigtriangleup U$第一纲。

2. 存在闭集$C$，$A\bigtriangleup C$第一纲。

3. 存在$G_\delta$集$G\subseteq A$，$A\backslash G$第一纲。

4. 存在$F_\sigma$集$F\supseteq A$，$F\backslash A$第一纲。

:::

::: proof
$1\to 2$：取$C=\mathrm{Cl}(U)$。

$2\to 3$：设第一纲集$C\backslash A$的无处稠集分解为$\bigcup_{n}F_n$，取$G=A\cap C\backslash\bigcup_{n}\mathrm{Cl}(F_n)$。

$3\to 1$：显然$3$足以说明$A\in\mathrm{BP}(X)$，因为后者是$\sigma$代数。

$1\to 4$：对$X\backslash A\in\mathrm{BP}(X)$用$3$。

$4\to 1$：同$3\to 1$。
:::

接下来，我们来看Baire性质在子空间中的表现。

::: definition
对于点集$A\subseteq X$与开集$U\in\tau$，若$A\cap U$是$X$中的第一纲集，则称$A$在$U$中第一纲；若$U\backslash A$是$X$中的第一纲集，则称$A$在$U$中余第一纲，又称$A$在$U$中脱殊，记作$U\Vdash A$。
:::

::: remark*
熟悉力迫法的读者可以直接读成$U$力迫$A$。
:::

我们可以用这个记号给出Baire性质的一个通用刻画。

::: theorem
$A\in\mathrm{BP}(X)$，则$X\Vdash(X\backslash A)\vee\exists U\in\tau(U\Vdash A)$。如果$X$是Baire空间，这里的析取是严格的，即不能同时取到两支。
:::

::: proof
显然的，后者注意Baire空间的第一个定义。
:::

::: remark*
这个条件不够充分，因为我们不知道$A\backslash U$到底是什么情况。
:::

它还可以变成一个更美丽的形式。

::: theorem
$A\in\mathrm{BP}(X)$，则$A\backslash\{x\in A|\exists U\ni x(U\Vdash A)\}$第一纲，换言之$\exists U\ni x(U\Vdash A)$这个性质在$A$中脱殊地成立。
:::

::: proof
我们采用以下构造。

**定义。** 对点集$A\subseteq X$，令$\mathrm{U}(A)=\bigcup_{U\Vdash A,U\in\tau}U$为最大的使得$A$在其中脱殊的开集。

**注。** 这大概是作为性质的$A$在一系列力迫条件中的最弱条件。

显然$\mathrm{U}(A)\Vdash A$，因此$\mathrm{U}(A)\backslash A$第一纲，换言之$A\backslash\{x\in A|\exists U\ni x(U\Vdash A)\}$第一纲。
:::

::: remark*
值得注意的是，此时实际上显然还有$\mathrm{U}(A)\bigtriangleup A$第一纲。
:::

为了展示脱殊到底怎么玩，我们再给一个定义。

::: definition
若一族非空开集$\mathcal{B}\subseteq\tau$满足$\forall U\in\tau\exists V\in\mathcal{B}(V\subseteq U)$，则称$\mathcal{B}$是一个弱基（weak basis）。
:::

::: remark*
注意，原本的基的要求是带点的，也就是$\forall U\ni x\exists V\ni x(V\subseteq U)$；弱基把这个点略掉了，因此加上了不空的要求。
:::

::: theorem
在Baire空间$X$中，若有一点集$A\in\mathrm{BP}(X)$和一不空开集$U$，我们任取一个弱基$\mathcal{B}$，$U\Vdash X\backslash A\leftrightarrow \forall V\in\mathcal{B}(V\subseteq U\rightarrow \neg(V\Vdash A))$。
:::

::: proof
反证，若存在$V\subseteq U$，且同时有$V\Vdash A$和$U\Vdash X\backslash A$，则$V\backslash A$和$U\cap A$均为第一纲集，$V\subseteq U\rightarrow V\cap A\subseteq U\cap A$，因此$V=(V\backslash A)\cup(V\cap A)$是第一纲集，这与Baire空间所说的它是第二纲集矛盾。
:::

::: theorem
若有一列$A_n\subseteq X$和一不空开集$U$，$U\Vdash\bigcap_{n}A_n\leftrightarrow \forall n(U\Vdash A_n)$。
:::

::: proof
第一纲集的子集和可列并也是第一纲集。
:::

::: remark*
这个定理要求最弱，不需要假定Baire空间与Baire性质。
:::

::: theorem
在Baire空间$X$中，若有一列$\{A_n\}\subseteq\mathrm{BP}(X)$和一不空开集$U$，我们任取一个弱基$\mathcal{B}$，$U\Vdash\bigcup_{n}A_n\leftrightarrow \forall V\in\mathcal{B}(V\subseteq U\rightarrow \exists W\in\mathcal{B}(W\subseteq V\wedge\exists n(W\Vdash A_n)))$。
:::

::: proof
同样反证，若存在$V\subseteq U$使得$\forall n\forall W\subseteq V\neg(W\Vdash A_n)$，则由上上个定理有$\forall n(V\Vdash X\backslash A_n)$，由上个定理知$V\Vdash (X\backslash\bigcup_{n}A_n)$，而$V\subseteq U\to U\Vdash\bigcup_{n}A_n\to V\Vdash\bigcup_{n}A_n$就同上上个定理一样给出矛盾。
:::

::: remark*
这些定理中，用弱基选子开集其实是对定理所需条件的弱化。
:::

最后，注意到$\mathrm{MGR}(X)$的集在$\mathrm{BP}(X)$中看起来与空集几乎无异，我们来看看把它商掉会得到什么东西。

::: definition
我们将全体$[A]=\{B\in\mathrm{BP}|A\bigtriangleup B\in\mathrm{MGR}\},A\in\mathrm{BP}$构成的集族记作$\mathrm{CAT}$。其上自然有$[A]\leq[B]\leftrightarrow A\backslash B\in\mathrm{MGR}$给出偏序结构，它也因此称作空间$X$的纲代数（Category Algebra）。
:::

对于这个代数的名字，我们有以下定理。

::: theorem
对一般空间，$\mathrm{CAT}$是$\sigma$布尔代数，换言之每个可数子集都有上确界；对Baire空间，$\mathrm{CAT}$是完备布尔代数，换言之每个子集都有上确界。
:::

::: proof
由于可列个第一纲集的并集还是第一纲的，第一个断言显然成立。第二个断言需要发现以下对应关系。

**定义。** 如果开集$U$满足$U=\mathrm{Int}\mathrm{Cl}(U)$，则称$U$是正则开集（regular open），全体正则开集的集族记为$\mathrm{RO}$。

**定理。** 在Baire空间中，$\mathrm{CAT}$通过一个选择函数与$\mathrm{RO}$同构。

**证明。** 为了证明$\mathrm{U}$就是我们所要的选择函数，我们只需要证明它正则，且$A\bigtriangleup B$第一纲当且仅当$\mathrm{U}(A)=\mathrm{U}(B)$。

$\mathrm{RO}$自然是完备布尔代数。
:::

## 一般空间中的游戏

接下来，我们要介绍两款大家喜欢玩的简单游戏。我们将发现，这些游戏中必胜策略是否存在可以看作空间是否是Baire空间的自然推广。

::: definition [Choquet游戏]
我们定义空间$X$上的Choquet游戏$G_X$为以下二人博弈：

两个玩家依次取递降不空开集列，若这一列开集交不空，则后手者胜利，否则先手者胜利。
:::

::: definition [强化Choquet游戏]
我们定义空间$X$上的Choquet游戏$G^s_X$为以下二人博弈：

两个玩家依次取递降不空开集列，但先手玩家可以每次指定一个点，后手玩家给出的开集必须包括这一点。

若最终取出的一列开集交不空，则后手者胜利，否则先手者胜利。
:::

玩游戏的玩家自然想要研究自己的必胜策略，而我们将帮助他们严格化自己的思考。

::: definition
对某个游戏$G$，注意到所有的可能局面事实上是某个$A^{<\omega}$中的树$T$，这里的$A$是某个集（例如，在Choquet游戏中是全体开集的族$\tau$）。

我们将记先手者为$\uppercase\expandafter{\romannumeral1}$，后手者为$\uppercase\expandafter{\romannumeral2}$。

选手$\uppercase\expandafter{\romannumeral1}$的一个策略是$T$的一棵非空子树$\sigma_{\uppercase\expandafter{\romannumeral1}}$，满足在每个偶长度的枝节处只有一个延伸，而在每个奇长度的枝节处均有全部延伸。不难看出，这事实上就是说在每个可能局面处均有且仅有一种应对。

选手$\uppercase\expandafter{\romannumeral1}$的一个必胜策略是这样的策略，游戏在此策略下进行时最终均以$\uppercase\expandafter{\romannumeral1}$获胜告终。

选手$\uppercase\expandafter{\romannumeral2}$的策略与必胜策略同理定义。
:::

在这些术语下，我们来看Choquet游戏与Baire空间的惊奇联系。

::: theorem [Oxtoby]
空间$X$是Baire空间，当且仅当在$G_X$中$\uppercase\expandafter{\romannumeral1}$没有必胜策略。
:::

::: proof
我们证明$X$不是Baire空间当且仅当$\uppercase\expandafter{\romannumeral1}$有必胜策略。

$\Rightarrow$：此时，我们将有一列稠密开集$D_n$，它们的交不稠密，换言之存在开集$U_0$与它们的交$\bigcap_{n}D_n$不交，我们让选手$\uppercase\expandafter{\romannumeral1}$以这个$U_0$开始游戏。现在$\uppercase\expandafter{\romannumeral2}$选出了$V_0\subseteq U_0$，由于$D_0$稠密，我们有不空开集$D_0\cap V_0$，于是$\uppercase\expandafter{\romannumeral1}$就选$U_1=D_0\cap V_0$。同理，$\uppercase\expandafter{\romannumeral1}$其实要选$U_{n+1}=D_n\cap V_n$，在这个策略下总有$\bigcap_{n}U_n\subseteq\bigcap_{n}D_n\cap U_0=\varnothing$，于是$\uppercase\expandafter{\romannumeral1}$总是胜利。

$\Leftarrow$：我们现在要从必胜策略$\sigma_{\uppercase\expandafter{\romannumeral1}}$中读出$X$不是Baire空间的证据。假定这个策略让$\uppercase\expandafter{\romannumeral1}$先手第一步选出开集$U_0$，我们来证明这个开子空间不是Baire空间。具体的，我们找一列其中的稠密开集，使得它们交不空。

首先，我们构造一个$\sigma$的剪枝子树$S$，满足$\forall p=(U_0,V_0,...,U_n)\in S(\mathcal{U}_p=\{U_{n+1}|\exists V_n(p\Box V_n\Box U_{n+1}\in S)\}$中的开集两两不交，且$\bigcup\mathcal{U}_p$在$U_n$中稠密$)$。我们通过对$n$归纳来构造这个$S$。奠基自然是把空序列加进去，然后我们就可以开始归纳，假定$n$时要哪些$U_n$都已经选出来了，我们来选$U_{n+1}$。显然由于$\sigma$是个策略，我们只需要选出满足条件的一族$V_n$，因此我们考虑所有$V_n$的集族，其中的$V_n$两两不交；这些集族在包含关系下形成一个偏序集，且显然每个链都以它们的并为上确界，因此Zorn指导我们拿出一个极大集族，显然它们中的$V_n$给出的$U_n$满足我们的条件。

我们现在把$S$里面所有的$U_n$并在一起形成一个稠密开集$W_n$，我们断言$\bigcap_n W_n=\varnothing$，这是因为它里面装着的是$\uppercase\expandafter{\romannumeral2}$胜利的一次游戏，这与$\sigma$是$\uppercase\expandafter{\romannumeral1}$的必胜策略矛盾。
:::

这样，我们自然有动机来定义以下空间。

::: definition [Choquet空间]
若空间$X$上的Choquet游戏中$\uppercase\expandafter{\romannumeral2}$拥有必胜策略，则称$X$是Choquet空间。
:::

::: corollary
Choquet空间是Baire空间。
:::

我们有一个对Choquet空间的显然刻画。

::: theorem
一个空间是Choquet空间当且仅当它有一个稠密$G_\delta$集。
:::

::: proof
如果它是Choquet空间，我们令$W_n=\bigcup_{n}V_n$为一列递降稠密开集，则$W=\bigcap_{n}W_n$就是稠密$G_\delta$集。

如果$W=\bigcap_{n} W_n$是一列递降稠密开集交出的稠密$G_\delta$集，则有必胜策略$V_n=U_n\cap W_n$。
:::

现在，我们列举一些Choquet空间的性质。

::: theorem
Choquet空间的开子空间和有限积是Choquet空间。
:::

::: proof
把稠密$G_\delta$集限制进来，或者把稠密$G_\delta$集们乘在一起。
:::

由于Polish不但是开子空间继承，而且事实上已知是$G_\delta$子空间继承，我们会发现Choquet空间仍然显得太弱。

::: definition [强化Choquet空间]
若空间$X$上的强化Choquet游戏中$\uppercase\expandafter{\romannumeral2}$拥有必胜策略，则称$X$是强化Choquet空间。
:::

::: theorem
强化Choquet空间是Choquet空间。
:::

::: proof
遗忘必胜策略中先手者选的点，如果$\uppercase\expandafter{\romannumeral2}$依照了$\uppercase\expandafter{\romannumeral1}$选的不同点选了不同开集，则从中任取一个。这显然必须仍是必胜策略。
:::

我们同样列举强化Choquet空间的性质。

::: theorem
强化Choquet空间的非空$G_\delta$子空间和有限积仍为强化Choquet空间。
:::

::: proof
让$\omega$场游戏同步进行，或者把必胜策略们乘在一起。
:::

我们指出，Baire纲定理还是太弱了。

::: theorem
完备度量空间与LCH空间均为强化Choquet空间。
:::

::: proof
对完备度量空间，必胜策略是选这个点的小闭球邻域。对LCH空间，必胜策略是选这个点的小紧致邻域。
:::

最后，我们指出，强化Choquet空间事实上已经几乎是Polish空间了。

::: theorem [Choquet]
$C_2$空间是Polish空间当且仅当它$T_3$且为强化Choquet空间。
:::

::: proof
我们证明以下两个定理。

**定理（Oxtoby）。** 可分度量空间$X$是Choquet空间当且仅当它在其完备化中是余第一纲集。

**证明。** Polish空间中的余第一纲集显然包含稠密$G_\delta$集，所以我们证明倒过来的结论。

假定$G_X$中$\uppercase\expandafter{\romannumeral2}$有必胜策略$\sigma$，我们记$X$的完备化为$\bar{X}$，度量仍为$d$。我们类比从$\uppercase\expandafter{\romannumeral1}$的必胜策略中读出$X$不是Baire空间的证据的手法，从$\sigma$中读出稠密$G_\delta$集$W$。

我们还是来构造剪枝树$S$，但它不是$X$中开集的序列，而是先手者只许取$X$的开集，后手者取的是$\bar{X}$的开集，然后让它们都与$X$相交之后$S$变成$\sigma$的子树。我们类似地使用Zorn引理，使得指定前$n-1$步游戏$p$后，后手者第$n$步可能拿出的开集$\bar{V}_n$的族$\bar{\mathcal{V}}_p$中元素两两不交半径小于$\frac1n$，且$\bigcup\bar{\mathcal{V}}_p$在第$n-1$步时后手者拿出的开集$\bar{V}_{n-1}$上稠密，然后把它们全部塞进$S$里面。

现在，$S$给出一列$\bar{X}$中的稠密开集$W_n=\bigcup \bar{V}_n$，只需证明$\bigcap_n W_n\subseteq X$。对$x\in\bigcap_n W_n$，构造指出存在唯一列$(U_0,\bar{V}_0,...)$使得$x\in\bigcap_{n}\bar{V}_n$，由直径要求我们其实知道$\{x\}=\bigcap_{n}\bar{V}_n$，但由$\sigma$必胜我们知道$X\cap\bigcap_{n}\bar{V}_n=\bigcap_{n}V_n\not=\varnothing$，这里$V_n=X\cap\bar{V}_n$，于是其实有$X\cap\bigcap_{n}\bar{V}_n=\{x\}$，换言之$x\in X$。

**定理（Choquet）。** 度量空间$X$是强化Choquet空间当且仅当它在其完备化中是$G_\delta$集。

**证明。** 完备化是完备度量空间，是强化Choquet空间，其$G_\delta$子集当然也是强化Choquet空间。我们还是证明倒过来的结论。

回忆在可度量化一节中我们见过的Stone定理，它指出度量空间的开覆盖均有局部有限开加细，且这个开加细中的开集的直径可以控制得小于任意预先给定的正数$\epsilon$。这个定理将会用到我们的剪枝树$S$中。

我们还是来构造剪枝树$S$，它的序列现在比上一个还要复杂：奇数位置是一个点$x_n\in X$，偶数位置是一对开集$(V_n\subseteq X,\bar{V_n}\subseteq\bar{X})$。我们要求序列$p=(x_0,(V_0,\bar{V}_0),x_1,...)\in S$给出的$((x_0,X),V_0,(x_1,\bar{V}_0\cap X),V_1,...)$在必胜策略$\sigma$中。

用Zorn拿出的$\bar{V}_p$现在也有依托很烦人的要求。当然，这个$p$还是截止到$2(n-1)$步，这个$\bar{V}_p$中还是所有可以从$p$再延长两步得到的全体$\bar{V}_n$的集族，我们现在不但要求$X\cap\bar{V}_{n-1}\subseteq\bigcup \bar{V}_p$和其中的$\bar{V}_n$直径小于$\frac1n$，还要求对每个$\bar{x}\in\bar{X}$只有有限个$\bar{V}_n$包括此点。

现在的每个开集$W_n=\bigcup\bar{V}_n$都包含整个$X$，所以$\bigcap_{n}W_n\subseteq X$其实会指出$X=\bigcap_n W_n$，换言之$X$是$G_\delta$集。对$x\in\bigcap_{n}W_n$，我们考虑所有偶有限序列$p\in S$使得$x$在$p$最后一步的开集$\bar{V}_n$之中。这些有限序列构成一个无穷的有限分裂子树$S_x$，因此Konig告诉我们它有一个无穷枝，这个无穷枝又给出一次游戏，必胜指出$X\cap\bigcap_{n}\bar{V}_n=\{x\}$。

**推论。** 度量空间$X$可完备度量化当且仅当它是强化Choquet空间。

现在，由这个定理推出我们所要的结论是显然的。
:::
