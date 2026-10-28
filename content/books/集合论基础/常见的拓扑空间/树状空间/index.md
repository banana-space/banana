---
title: 树状空间
---

<problems>
- “字典序”定义之后所说的“$<$是良序时$<_{lex}$也是良序”在 $A^\omega$ 上似乎不成立（例如 $A=\{0,1\}$ 时 $1000\cdots$、$0100\cdots$、$0010\cdots$ 构成无穷降链）。
</problems>

这一节，我们来考虑一种有趣的空间，它将给出两个极好的对象。

::: definition [树]
我们来考虑$A^{<\omega}=\bigcup_{n\in\omega}A^n$。

称$T\subseteq A^{<\omega}$为一棵树（tree），若$t\in T\to\forall n<\mathrm{dom}(t)(t|_{n}\in T)$。
我们称一个$t\in A^{<\omega}$为序列，$s=t|_{n}(n<\mathrm{dom}(t))$为它的真前段（initial segment）。
若两个序列互不为真前段，则称它们不相容（incompatible），记为$s\perp t$。

对一棵树$T$，其中的元素我们也称之为茎节（node）；它的无穷枝条（infinite branch）是$x\in A^\omega$，
满足$\forall n\in\omega(x|_{n}\in T)$。
一棵树的全体无穷枝条构成它的主干（body），记为$[T]\subseteq A^\omega$。

如果一棵树的每个茎节都是某个另一个茎节的真前段，就称这棵树是棵剪枝树（pruned tree）。
:::

我们引入树，主要是为了讨论$A^\omega$上的拓扑。

::: definition [树状空间]
赋$A$以离散拓扑，即所有$A$的子集都是开集；然后做积空间$A^\omega$，它自然成为可度量化空间，
$d(t,s)=2^{-n}$，这里$n$是最大的使得$t|_{n}=s|_{n}$的自然数。
:::

今后，我们谈论到任何$A^\omega$时，若无关于集合$A$的任何假定（例如它是拓扑空间或者什么），
我们就默认以上的拓扑结构。

::: theorem
$A^\omega$以$\{N_s|s\in A^{<\omega}\}$为一组开闭基，我们称之为标准基，
这里$N_s=\{x\in A^{\omega}|s\subseteq x\}$。因此，树状空间均为零维空间。
:::

::: proof
显然。
我们事实上还有更强的结论：任给开集$U\subseteq A^\omega$，
都存在两两不相容的序列族$S\subseteq A^{<\omega}$，使得$U=\bigcup_{s\in S}N_s$。
:::

大家熟知$\beth(\omega)^\omega=\beth(\omega)$，而它们的拓扑结构其实也一样。

::: theorem
$n\in\omega$，则$(A^\omega)^n$与$A^\omega$同胚；$(A^\omega)^\omega$也与$A^\omega$同胚。
:::

::: proof
我们有$\omega\times\omega$与$\omega$等势的函数构造，用它来搬运标准基。
:::

现在，我们要指出$A^\omega$上的闭集和剪枝树之间存在一一对应。

::: theorem
$T\to[T]$给出剪枝树与$A^\omega$上闭集之间的双射。
:::

::: proof
其逆映射$F\to T_F=\{x|_{n}|x\in F,n\in\omega\}$给出闭集$F$对应的剪枝树。
:::

我们想让树状空间成为Polish空间，就得考察其中的稠密性，
而与此对应的我们也要考察$A^{<\omega}$中的稠密性。

::: definition
若一个$D\subseteq A^{<\omega}$满足任何序列都是$D$中某个序列的真前段，则称$D$在$A^{<\omega}$中稠密。
:::

::: theorem
$U=\bigcup_{d\in D}N_d$在$A^\omega$中稠密，当且仅当$D$在$A^{<\omega}$中稠密。
:::

::: proof
考虑到开集的不相容基分解，这是显然的。
:::

现在，我们来看看树状空间的拓扑结构在其闭子空间上如何。首先，我们来考虑树的子树。

::: definition
对树$T\subseteq A^{<\omega}$，我们用$s\in T$给出它的一棵子树$T_{[s]}=\{t\in T|t\not\perp s\}$，
然后再把这棵子树的前面一节削掉，得到另一棵树$T_s=\{t\in A^{<\omega}|s\Box t\in T\}$，
这里$s\Box t$指的是将序列$t$直接接在序列$s$后面。
:::

::: theorem
$\{[T_{[s]}]|s\in T\}$构成$[T]$的一组基。
:::

::: proof
$[T_{[s]}]=[T]\cap N_s$。
:::

树状空间的紧致闭子空间有一个奇妙的描述。

::: definition [有限分裂]
若树$T$满足其中每个茎节$t$都只有有限个$a\in A$可以使得$t\Box a\in T$，
这里$\Box a$指的是把$a$作为序列的下一个值来将$t$的定义域加一，则称$T$是有限分裂树。
:::

::: theorem
对剪枝树$T$，$[T]$是$A^\omega$的紧致子空间当且仅当$T$是有限分裂树。
:::

::: proof
考虑每个茎节处延长一节产生的标准基开覆盖。
:::

此外，由于空集自然紧致，我们还可以限定一下。

::: lemma [Kőnig]
对有限分裂树$T$，$[T]\not=\varnothing$当且仅当$T$是无穷集。
:::

::: proof
$T$无穷推出存在无穷枝条需要用选择公理把这枝条选出来。
:::

::: remark*
柯尼希的这个引理在反推数学中被用来分离某两个证明系统的强度。
:::

在做代数拓扑时，我们喜欢考虑连续收缩与连续收缩核的概念。

::: definition [连续收缩]
称连续满射$s:X\twoheadrightarrow Y\subseteq X$为一个连续收缩，若$s|_{Y}=id_Y$。
这个非空的$Y$称作$X$的连续收缩核。
:::

而树状空间的闭子空间非常奇妙，它们可以随便收缩。

::: theorem
若$A^\omega$有两个非空闭子空间$F\subseteq H$，则$F$是$H$的连续收缩核。
:::

我们与其说是在处理闭子空间，不如说是在处理剪枝树。我们考虑剪枝树之间的一种重要映射。

::: definition [单调函数]
集$A$上的树$S$到集$B$上的树$T$的函数$\varphi$称为单调函数，
若$s\subseteq t\rightarrow \varphi(s)\subseteq\varphi(t)$。

对于单调函数$\varphi$，我们收集全体$S$的这样的无穷枝条$x$，
它的真前段们在$\varphi$下的像在$T$中也拼成一个无穷枝条，得到集$\mathrm{D}(\varphi)\subseteq[S]$。
若$\mathrm{D}(\varphi)=[S]$，就称$\varphi$是恰当（proper）的。

$\varphi$可以提升为$\mathrm{D}(\varphi)$到$[T]$的函数$\varphi^*$。
:::

::: proof
不难猜到，我们正是要构造$F$和$H$对应的剪枝树$S\subseteq T$之间的恰当单调函数$\varphi:T\to S$，
然后用它的提升$\varphi^*$来见证连续收缩。为了满足连续收缩的条件，显然我们要要求$\varphi|_{S}=id_S$。

我们对$t\in T$的长度归纳。
$\varphi(\varnothing)=\varnothing$，然后我们要在已经定义好$\varphi(t)$时定义出$\varphi(t\Box a)$，
这里$a\in A$同样接在序列$t$的后面。

显然，若$t\Box a\in S$，我们就必须令$\varphi(t\Box a)=t\Box a$。
否则，我们令$\varphi(t\Box a)$为某一个$\varphi(t)\Box b\in S$，由于$S$是剪枝树，
这里必须存在一个可用的$b$。
:::

我们有一个非常神妙的定理，它指出单调函数几乎是闭子空间之间的连续函数，而且恰当单调函数确实是。

::: theorem
给定单调函数$\varphi:S\to T$，则$\mathrm{D}(\varphi)$是$[S]$的$G_\delta$集，
且$\varphi^*:\mathrm{D}(\varphi)\to[T]$是连续函数。

如果存在$f:G\to [T]$是连续函数，这里$G$是$[S]$的$G_\delta$集，
则存在单调函数$\varphi$使得$f=\varphi^*$。
:::

::: proof
前一个方向比较简单。
注意$x\in\mathrm{D}(\varphi)\leftrightarrow\forall n\exists m(\mathrm{dom}(\varphi(x|_m))\geq n)$，
$\mathrm{D}(\varphi)$显然就是$\bigcap_{n}U_n$，
这里$x\in U_n\leftrightarrow\exists m(\mathrm{dom}(\varphi(x|_m))\geq n)$。
要说明$\varphi^*$连续，也只需要考虑$[T]$上的标准基$V_t=[T]\cap N_t$，
它们的原像
$(\varphi^*)^{-1}(V_t)=\bigcup_{s\in S,\varphi(s)\supseteq t}(N_s\cap \mathrm{D}(\varphi))$
显然是开集。

另一个方向要求我们用连续函数$f:G\to [T]$和条件$G=\bigcap_{n}U_n$来构造$\varphi$，
我们不妨设$U_{n+1}\subseteq U_n$，且$U_0=[S]$。
对$s\in S$，我们先定义$k(s)$为最大的不超过$\mathrm{dom}(s)$的，
使得$N_s\cap[S]\subseteq  U_k$的自然数$k$。
现在，若$N_s\cap G\not=\varnothing$，我们令$\varphi(s)$为最长的一个长度不超过$k(s)$的序列$u\in T$，
使得$f(N_s\cap G)\subseteq N_u$；否则，我们找一个最大的自然数$m$，
满足$N_{s|_{m}}\cap G\not=\varnothing$且$m\leq\mathrm{dom}(s)$，然后令$\varphi(s)=\varphi(s|_{m})$。

$\varphi$单调不难验证，关键在证明$\mathrm{D}(\varphi)=G$。
:::

::: corollary
$S$到$T$的恰当单调函数与$[S]$到$[T]$的连续函数之间由提升给出一个双射。
:::

这个奇妙的性质还可以得到更一般的保证，我们放在下一节讨论。

最后，我们要考虑$A^{<\omega}$中的序，为此我们假定$A$上有一个选取好的序$<$。
首先，我们有一个最简单的序。

::: definition [字典序]
称$x<_{lex} y$，若对最大的使得$x|_{n}=y|_{n}$的$n\in\omega$有$x(n)<y(n)$。
:::

显然，$<$是良序时$<_{lex}$也是良序，$<$是线序时$<_{lex}$也是线序。
然而，对于良基树的研究却让我们发现另一种序。

::: definition [良基树]
称一棵树$T$是良基的，若$[T]=\varnothing$。换言之，$T$良基当且仅当$\supsetneqq$在$T$上是良基关系。

在良基树$T$上，
我们同样有秩函数$\mathrm{rank}^T$递归地定义为
$\mathrm{rank}^T(s)=\mathrm{sup}_{t\in T,t\supsetneqq s}(\mathrm{rank}^T(t)+1)$。

我们称$\mathrm{rank}^T=0$的那些茎节为终点，称最大的$\mathrm{rank}^T(t)$加一为整棵良基树的秩。
:::

::: definition [Kleene–Brouwer序]
对于全序集$(A,<)$，我们延拓$A^{<\omega}$上的偏序$\supsetneqq$为全序$<_{KB}$，
令$t<_{KB}s\leftrightarrow t\supsetneqq s\vee(\exists n(t|_{n}=s|_{n}\wedge t(n)<s(n)))$。
:::

::: theorem
对良序集$(A,<)$，树$T$是良基树当且仅当$<_{KB}|_{T}$是$T$上的良序。
:::

::: proof
显然无穷枝条给出无穷降链，无穷降链也给出无穷枝条。
:::
