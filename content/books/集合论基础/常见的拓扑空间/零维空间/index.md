---
title: 零维空间
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
我们在上一节已经注意到，树状空间是零维空间，也就是说它存在一组开闭基。不过，零维这个词与它的定义初看起来并无关系，我们来补全一些定义。以下均假定所说的拓扑空间是可分度量空间。

::: definition [维数]
我们递归地定义拓扑空间$X$的维数$\mathrm{dim}(X)\in\{a\in\mathbb{Z}|a\geq -1\}\cup\{+\infty\}$如下：

1. 空空间$\varnothing$的维数是$-1$。

2. 非空空间$X$的维数$\mathrm{dim}(X)$定义为$\mathrm{sup}_{p\in X}\mathrm{dim}(X,p)$。

3. 点$p$在空间$X$中的维数$\mathrm{dim}(X,p)$是最大的$n+1$，若$p$有任意小的邻域，其边界的维数不大于$n$。

:::

::: remark*
所谓存在任意小的邻域满足某一性质，指的是任给邻域均有其子邻域满足这一性质。
:::

显然这个定义是同胚不变的，所以我们现在可以在同胚意义下讨论任何拓扑空间的维数了。首先，我们来看子空间的维数。我们默认写下的运算和开闭集均在空间$X$中而非其子空间$E$中。

::: theorem
$p\in E\subseteq X$，则$\mathrm{dim}(E,p)\leq\mathrm{dim}(X,p)$。
:::

::: proof
考虑$p$的任意开邻域$U$，它在$E$中的边界$E\cap\mathrm{Cl}(E\cap U)\backslash U\subseteq \mathrm{Cl}(U)\backslash U$，归纳即得结论。
:::

注意子空间中的边界形式相对复杂，我们给出子空间维数更好的等价描述。

::: theorem
$\mathrm{dim}(E,p)$的维数是最大的$n+1$，若$p$有任意小的邻域，其在$X$中的边界与$E$的交维数不大于$n$。
:::

::: proof
也就是说，我们要证明$\mathrm{dim}(E,p)$的原始定义与这个新的定义等价。

如果$\mathrm{dim}(E,p)\leq n+1$，原始的定义指出存在$E$中任意小的开集$H\cap E$使得$\mathrm{dim}(E\cap\partial H)\leq n$。注意$H$和$E\backslash\mathrm{Cl}(H)$显然与对方的闭包不交，$T_5$给出开集$G\supseteq H$使得$\mathrm{Cl}(G)\cap E\backslash\mathrm{Cl}(H)=\varnothing$。于是$\mathrm{dim}(E\cap\partial G)\leq\mathrm{dim}(E\cap\partial E)\leq n$。

倒过来，如果$p$有任意小的邻域$G$，$\mathrm{dim}(E\cap\partial G)\leq n$，我们只要令$H=E\cap G$即得$\mathrm{dim}(E\cap\partial H)\leq\mathrm{dim}(E\cap\partial G)\leq n$。
:::

现在，我们来考察对于子空间$E$维数不大于$n$的那些点构成的空间。

::: definition
将全体满足$\mathrm{dim}(E\cup\{p\},p)\leq n$的点$p\in X$收集起来得到点集$E_{(n)}$。
:::

我们先给出对这些$E_{(n)}$的一些简单观察。

::: theorem
由以前的讨论，以下结果是简单的。

1. $E\subseteq E_{(n)}$等价于$\mathrm{dim}(E)\leq n$。

2. $E\subseteq F$，则$F_{(n)}\subseteq E_{(n)}$。

3. $\mathrm{dim}(E\cap E_{(n)})\leq n$。

:::

::: remark*
注意，我们并不能断言$\mathrm{dim}(E_{(n)})\leq n$，例如$E=\{x\}$是单点集时$E_{(0)}=X$，其维数是不知道的。
:::

然而，这些$E_{(n)}$却有一个意想不到的简洁性质。

::: theorem
$E_{(n)}$都是$G_\delta$集。
:::

::: proof
由定义，$p\in E_{(n)}$当且仅当$\forall k\exists U^k_p\ni p(\mathrm{dim}(E\cap\partial U^k_p)\leq n-1\wedge \mathrm{diam}(U^k_p)\leq\frac{1}{k})$。我们令$H_k=\bigcup_{p}U^k_p$，则$E_{(n)}=\bigcap_{k}H_k$。
:::

我们可以延续这个观察，将这个定理做得更强。

::: theorem
任给$E$与$n$，存在一列开集$D_m$满足以下全体性质：

1. $\mathrm{dim}(E\cap\partial D_m)\leq n-1$

2. $E_{(n)}$以$E_{(n)}\cap D_m$为一组可列基。

3. 记$S=\bigcup_{m}\partial D_m$，则$E_{(n)}\subseteq (E\backslash S)_{(0)}$且$\mathrm{dim}(E_{(n)}\backslash S)\leq 0$。

:::

::: proof
我们继续同上做出$U^k_p$。注意到全体$U^k_p$给出一个$E_{(n)}$的开覆盖，由三个可数性等价我们可以取出一个可数开覆盖，我们记为$D^k_m$。注意$(k,m)$只有可数个，我们把全部$D^k_m$重新排序就得到了所要的$D_m$。

显然前两条要求已经在定义中满足过了。只要再发现$E\backslash S\cap\partial D_m=E_{(n)}\backslash S\cap\partial D_m=\varnothing$即可推出第三条要求。
:::

作为其显然推论，我们有以下命题。

::: corollary
$n$维空间有一组边界不超过$n-1$维的可数基。
:::

我们现在结束对一般维数论的探索，而回到零维空间中来。我们今后默认被讨论的零维空间是零维可分度量空间。

::: corollary
零维空间有一组可数开闭基，且其直径可以均小于任意预先指定的数。
:::

::: proof
我们的$k$不从$1$开始取也是可以的。
:::

于是，零维空间中的闭集都是可列个开闭集的交，从而都是$G_\delta$集（虽然其实并不需要零维）。开集也是可列个开闭集的并，而我们还可以作额外要求。

::: theorem
每个开集都是可列个两两不交的、直径小于任意预先指定的数的开闭集的并。
:::

::: proof
只要注意到开闭集去掉有限个开闭集还是开闭集，我们先取基得到分解，然后变成$U=\bigcup_{n}F_n=\bigcup_n(F_n\backslash\bigcup_{m<n}F_m)$即可。
:::

现在，我们来看零维空间中的两个重要定理。

::: theorem [归约定理]
零维空间$X$中，若有一列开集$U_n$，则存在一列不交的开集$V_n\subseteq U_n$，满足$\bigcup_{n}U_n=\bigcup_{n}V_n$。特别的，如果$\bigcup_{n}U_n=X$，我们可以要求每个$V_n$都是开闭集。
:::

::: proof
把开集$U_n$拆成一列不交开闭集$F_{n,m}$，考虑$\mathbb{N}^2$上的典范良序$\leq$，取$D_{n,m}=F_{n,m}\backslash\bigcup_{(k,l)<(n,m)}F_{k,l}$，最后令$V_n=\bigcup_{m}D_{n,m}$。
:::

::: theorem [分离定理]
零维空间$X$中，若有一列闭集$F_n$使得$\bigcap_{n}F_n=\varnothing$，则存在一列开闭集$E_n\supseteq F_n$，且$\bigcap_{n}E_n=\varnothing$。
:::

::: proof
对归约定理的第二个陈述取补集。
:::

::: remark*
特别的，它指出任给不交闭集$A$与$B$，存在开闭集$E$使得$A\subseteq E$且$B\subseteq (X\backslash E)$，这是比一般的完全不连通更强的要求。我们还可以进一步加强这个观察。
:::

::: corollary
给定有限个不交闭集$F_n$，存在同样多个开闭集$E_n\supseteq F_n$两两不交，且这些开闭集的并为全空间$X$。
:::

::: proof
对$n$归纳。
:::

现在，我们来讨论上一节提到的关于连续收缩的定理。我们现在来陈述并证明它。

::: theorem [Kuratowski]
可分度量空间$X$的每个非空闭子集都是它的连续收缩核，当且仅当它自己是零维空间。
:::

::: proof
我们需要两个引理。

**引理。** 可分度量空间均同胚于一个完全有界空间。

**证明。** 我们把它嵌进$[0,1]^\omega$，后者显然是完全有界的。这个嵌入请读者自行造出。

于是，我们来看看零维空间中的完全有界开集。

**引理。** 零维空间$X$中的完全有界开集$G$均可写为一列两两不交的开闭集$F_n$的并，且$F_n$的直径趋于$0$。

**证明。** 我们已知$G$可以写成一列不交的开闭集的并，不妨设$G=\bigcup_{n}F_n^*$。由于完全有界，我们可以将$F_n^*$分解为直径不超过$\frac1n$的有限个开集的并，于是不妨假定$F_n^*=\bigcup_{k<k_n}H_n^k$，显然$H_n^k$们也都是开闭集，于是进一步不妨设它们也两两不交。显然$H_0^0,...,H_0^{k_0-1},H_1^0,...,H_n^0,...$就是所要的开闭集列。

现在，我们先来证明零维空间的非空闭子集是它的连续收缩核。考察$X$的非空闭子集$F$，我们由第一个引理不妨设$X$完全有界，然后由第二个引理给出$X\backslash F$的分解$F_n$。对每个$n$，我们从$F$中选一个点$p_n$使得$d(p_n,F_n)<d(F,F_n)+\frac{1}{n}$，然后令$f:X\to F$在$F$上不变，把$F_n$全部丢到点$p_n$上。

验证$f$连续并不容易，因为闭子空间的相对开集并不是开集，我们要证明的是$f$在每个点上连续。对$x\in X\backslash F$的论证相当简单，这里只看$x\in F$的情况。运用Heine-Borel定理，我们对每个序列$x_n\to x$验证$f(x_n)\to f(x)=x$。如果这个序列最终在$F$中，显然它最终有$f(x_n)=f_n$，于是所证显然；否则不妨设这序列不在$F$中，假定$x_n\in F_{k_n}$，注意每个$F_m$至多包括有限个$x_n$，而$d(F_m,p_m)\to 0$，于是仍有$d(f(x_n),x_n)\to 0$，换言之仍有$f(x_n)\to x$。

另一方面，如果非空闭子集都是连续收缩核，我们来证明对任意开集$U$中的任意点$x$，存在开闭集$F$包括$x$而包含于$U$。考虑连续收缩$f:X\to (X\backslash U\cup\{x\})$，它给出所要的$F=f^{-1}(\{x\})$，因为$\{x\}$是空间$X\backslash U\cup\{x\}$中的开闭集。
:::

最后，我们指出，过小的空间必然零维。

::: theorem
开集族的基数$|\tau|<\beth_1$的度量空间必然零维；空间的基数$|X|<\beth_1$的度量空间必然零维。
:::

::: proof
上面两个条件均保证每点处的开球总有两个一样，从而这开球是开闭球。
:::
