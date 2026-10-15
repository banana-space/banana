---
title: 完美性质
---

{@sec:完美性质}

完美性质是实数集子集的良好性质中最简单的一类性质。我们先看它的一般定义。

::: definition [完美性质]
在拓扑空间中，一个导集是其自身的（于是闭的）非空集称作完美集。

如果一个集至多可数，或存在完美的子集，则称这个集具有完美性质。
:::

## Cantor定理

这一节，我们先来接触最简单的具有完美性质的实数子集的例子：闭集。

::: theorem [Cantor]
闭集具有完美性质。
:::

Cantor发现这个定理的时候并不关心这个性质本身，而是在乎它对$\mathrm{CH}$的影响，因为我们有一个事实。

::: theorem
完美集与$\mathbb{R}$等势。
:::

::: proof
我们假定有完美集$P\subseteq\mathbb{R}$，考虑从中任选一个既非上确界也非下确界的$p\in P$。

注意$P_0=\{q\in P|q\leq p\}$与$P_1=\{q\in P|q\geq p\}$显然也都是完美集，
我们各取既非上确界也非下确界的$p_0\in P_0$与$p_1\in P_1$。

现在我们又可以做$P_{00}=\{q\in P_0|q\leq p_0\}$以及$P_{01}$、$P_{10}$和$P_{11}$四个集，
又可以取$p_{00}$到$p_{11}$四个点。

如此一直进行，显然选出的$p_s$们各不相同，这里$s$是01串，换言之$s\in \mathbb{N}^{<\omega}$，
于是我们得到一个单射$p:\mathbb{N}^\omega\rightarrow P$。

最后，
$|\mathbb{N}^\omega|=\aleph_0^{\aleph_0}=\beth(\aleph_0)\leq|P|\leq|\mathbb{R}|=\beth(\aleph_0)$
给出我们所要的结果。
:::

这样，Cantor就成功地证明了实数的闭子集或者至多可数，或者与$\mathbb{R}$等势。
现在我们来看Cantor定理的证明。

::: proof
给定一个闭集$A$，我们对序数$\alpha$递归定义一列集$A_\alpha$如下：

1. $A^0=A$

2. $A^{\alpha+1}=\mathrm{Der}(A^{\alpha})$

3. $A^{\alpha}=\bigcap_{\beta<\alpha}A^{\beta}$，这里的$\alpha$是极限序数。

由于$A$是闭集，递归不难证明$\alpha<\beta\rightarrow A^\alpha\supseteq A^\beta$，
于是一定存在一个最小的$\aleph(A)=\aleph(A_0)$之下的序数$\theta$使得
$\forall \alpha\geq\theta(A^\alpha=A^\theta)$。
显然这个$A^\theta$若非空则是完美集，因此我们只要证明$A^\theta$为空集时$A$一定是至多可数集。
事实上，我们可以直接对每个$A$都证明$A\backslash A^\theta$必须是至多可数的。

首先，考虑任意集$S\subseteq\mathbb{R}$，我们证明$S\backslash \mathrm{Der}(S)$至多可数。
注意$x\in S\backslash\mathrm{Der}(S)$意味着$x\in \mathrm{Sep}(S)$，
从而一定存在开区间$U_x\ni x$使得$U_x\cap S=\varnothing$，
这也进一步指出$x\not=y\in S\backslash\mathrm{Der}(S)\rightarrow U_x\cap U_y=\varnothing$，
因此$\{U_x|x\in S\backslash\mathrm{Der}(S)\}$与$S\backslash\mathrm{Der}(S)$等势且至多可数，
因为每个$U_x$中至少有一个有理数（$\mathbb{Q}$的稠密性），它们互不相同，而$\mathbb{Q}$可数。

现在，我们将相同的技巧运用到$A\backslash A^\theta$上。
注意$x\in A\backslash A^\theta$指出$\exists\alpha<\theta(x\in A^{\alpha}\backslash A^{\alpha+1})$，
从而$\exists U_x\ni x$使得$U_x\cap A^{\alpha}=\{x\}$。
现在仍然考虑全体$U_x$，
注意$x\not=y\in A\backslash A^\theta$时仍设$U_x\cap A^\alpha=\{x\}$而$U_y\cap A_\beta=\{y\}$，
若$\alpha=\beta$则自然有$U_x\cap U_y=\varnothing$，
而若$\alpha<\beta$则$A^\beta\subseteq A^\alpha$可以指出
$U_x\cap U_y\subseteq U_x\cap U_y\cap A^\beta=(U_x\cap A^\beta)\cap(U_y\cap A^\beta)\subseteq (U_x\cap A^\alpha)\cap(U_y\cap A^\beta)=\{x\}\cap\{y\}=\varnothing$，
仍然有$U_x\cap U_y=\varnothing$。

综上知$\{U_x|x\in A\backslash A^\theta\}$是与$A\backslash A^\theta$等势的一族不交的开集，
从而至多可数，从而$A\backslash A^\theta$至多可数。
:::

::: remark*
事实上不难从证明中继续推知$\theta<\omega_1$。
:::

显然，开集由于包含一个开区间，进而包含一个闭区间，而闭区间必然是完美集，故开集也一定有完美性质。
我们自然会猜想Borel集是否也都有完美性质，答案也显然是肯定的。

::: theorem
$X\in\mathsf{B}(\mathbb{R})$，则$X$具有完美性质。
:::

::: proof
我们在层级上做归纳法，只要注意到$\sigma$操作显然把原有的完美集保留到新集合中，
而$\delta$操作把一列完美集交为一个闭集。
:::

最后，为了证明$\omega_1$不可改进，我们给出一个构造，使得对任意的可数序数$\alpha$，
均存在集$A_\alpha$在求$\alpha$次导集后成为单点集。
（我不知道怎么构造才能满足求$\alpha$次导集后恰好成为空集）

::: theorem
我们同上对每个集$A\subseteq\mathbb{R}$和可数序数$\alpha$定义$A^\alpha$。
现在对全体可数序数如下定义$A_\alpha$：

1. $A_0=\{0\}$

2. $A_n=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}(\frac{1}{2^n}(1+A_{n-1})))$，
   这里$n$是非零自然数。

3. $A_{\alpha+1}=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}(\frac{1}{4^n}(1+A_\alpha)))$，
   这里$\alpha$是极限序数。

4. $A_{\alpha+1}=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}(\frac{1}{2^n}(1+A_\alpha)))$，
   这里$\alpha$是非极限序数。

5. $A_\alpha=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}(\frac{1}{2^n}(1+A_{\alpha_n})))$，
   这里$\alpha$是极限序数，$\alpha_n$是一列严格单增且以$\alpha$为上确界的非极限序数的列。

其中$x(y+A)=\{x(y+a)|a\in A\}$。

则$A_\alpha^\alpha=\{0\}$。
:::

::: proof
利用归纳法，
我们加强证明$A_{\alpha+n}\subseteq[0,1-\frac{1}{2^n}]$且
$A_{\alpha+n+1}\supseteq A_{\alpha+n}=\mathrm{Der}(A_{\alpha+n+1})$，
其中$\alpha$是极限序数或零而$n\in\mathbb{N}\backslash\{0\}$和$A_\alpha\subseteq[0,1)$，
其中$\alpha$是极限序数。同时，我们当然还要证明每个$A_\alpha$都是闭集。

$\alpha=0$显然。

对自然数$n$，在证明了全体加强归纳假设后显然得到$A_{n+1}^{n+1}=A_{n}^{n}=\{0\}$。

注意$A_n\subseteq [0,1-\frac{1}{2^n}]$，
这指出$\frac{1}{2^m}(1+A_n)\subseteq[\frac{1}{2^m},\frac{1}{2^{m-1}}-\frac{1}{2^{m+n}}]$，
因此$A_{n+1}\subseteq[0,1-\frac{1}{2^{n+1}}]$，
且相邻的$n$对应的$\frac{1}{2^n}(1+A_{n})$之间由开区间分离。

注意$A_{n+1}\cap[\frac{1}{2^m},\frac{1}{2^{m-1}}]=\frac{1}{2^m}(1+A_n)$，
这进一步指出
$\mathrm{Der}(A_{n+1})\cap[\frac{1}{2^m},\frac{1}{2^{m-1}}]=\frac{1}{2^m}(1+\mathrm{Der}(A_n))=\frac{1}{2^m}(1+A_{n-1})\subseteq\frac{1}{2^m}(1+A_n)$，
因此$A_{n+1}\supseteq A_{n}=\mathrm{Der}(A_{n+1})$对$n\geq 2$成立，而对$n=1$显然看一眼就知道了。

对极限序数$\alpha$，若已知每个$\beta<\alpha$均有$A_\beta^\beta=\{0\}$，
先来证$A_\alpha^1\subseteq A_\alpha$。
不妨设$\alpha_n=\theta_n+k_n$，这里$\theta_n$是极限序数而$k_n$是非零自然数。
由归纳假设知$A_{\alpha_n}\subseteq[0,1-\frac{1}{2^{k_n}}]$，
因此$\frac{1}{2^n}(1+A_{\alpha_n})\subseteq[\frac{1}{2^n},\frac{1}{2^{n-1}}-\frac{1}{2^{n+k_n}}]$，
因此相邻的$n$对应的$\frac{1}{2^n}(1+A_{\alpha_n})$之间由开区间分离，
而唯一一个由$n\to+\infty$带来的极限点$\{0\}$也被特地加入了，
所以$A_\alpha$的极限点都包含在$A_\alpha$之中。

特别考虑$A_\alpha^{\alpha_n+1}=\varnothing$而$A_\alpha^{\alpha}=\{0\}$，
这时
$\{0\}\subseteq A_\alpha^\alpha=\bigcap_{n\in\mathbb{N}\backslash\{0\}}A_\alpha^{\alpha_n+1}\subseteq\bigcap_{n\in\mathbb{N}\backslash\{0\}}[0,\frac{1}{2^n}]=\{0\}$。

最后，显然有$A_\alpha\subseteq[0,1-\frac{1}{2^{k_1}}]\subseteq[0,1)$。

若$A_{\alpha}^{\alpha}=0$且$A_{\alpha}\subseteq[0,1)$，这里$\alpha$是极限序数，
我们在证明$A_{\alpha+1}\subseteq[0,\frac{1}{2}]$的同时得到$A_{\alpha+1}^{\alpha+1}=\{0\}$。

显然$A_{\alpha}\subseteq [0,1)$给出
$\frac{1}{4^n}(1+A_\alpha)\subseteq[\frac{1}{2^{2n}},\frac{1}{2^{2n-1}})$，
因此相邻两块之间的开区间分离性还在，
且$A_{\alpha+1}\subseteq[0,\frac{1}{2^{2-1}})\subseteq[0,\frac{1}{2}]$。
注意有
$A_{\alpha+1}^{\alpha}=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}(\frac{1}{4^n}(1+A_0)))=\{0\}\cup(\bigcup_{n\in\mathbb{N}\backslash\{0\}}\{\frac{1}{4^n}\})$，
对这个集再求一次导集显然得到$\{0\}$。

最后，若$A_{\alpha+n}^{\alpha+n}=\{0\}$且$A_{\alpha+n}\subseteq[0,\frac{1}{2^n}]$，
这里$n$是非零自然数而$\alpha$是极限序数，证明方法和$\alpha=0$时几乎一样，我们留给读者。
:::

## Cantor–Bendixson秩

现在，我们在一般的Polish空间上考察完美性质。
首先，我们要模仿$\mathbb{R}$中完美集与$\mathbb{R}$等势的那个定理。

::: theorem
完美Polish空间中有一个同胚于Cantor空间$\mathcal{C}$的子空间。
:::

::: proof
在完美Polish空间中做一个Cantor概型，然后从中选点，
考察点列收敛到的点来获取同胚于$\mathcal{C}$的子空间。细节与上一小节的操作是完全一样的。
:::

::: corollary
完美Polish空间的基数是$\beth_1$。
:::

注意，我们这里的完美Polish空间是完美可分完备度量空间；
注意到$\mathbb{Q}$继承$\mathbb{R}$上的拓扑显然也是完美的，
我们可以趁机陈述一个关于可数度量空间的刻画。

::: theorem {@thm:perfect-countable-metric}
任何可数度量空间均同胚于某个$\mathbb{Q}$的闭子集，非空可数完美度量空间均同胚于$\mathbb{Q}$。
:::

::: proof
由于可数度量空间$X$是零维的，它可以嵌入Cantor空间$\mathcal{C}$中，
进而可以嵌入Baire空间$\mathcal{N}$中，因此不妨假定它就是$\mathbb{R}$的一个子空间，
且与$\mathbb{Q}$不交。
现在$X\cup\mathbb{Q}$是一个可数稠密无端点线序集，由理论DLO的$\aleph_0$范畴性知它与$\mathbb{Q}$同构。
我们不妨设$f:X\cup\mathbb{Q}\to\mathbb{Q}$是这一同构，不难意识到这是同胚，
因此$f$也将$X$嵌入到$\mathbb{Q}$的一个子集中。

然而，这样做不能断言它是闭子空间，所以我们做一个改进：注意到$X$是$X\times \mathbb{Q}$的闭子空间，
而后者同理与$\mathbb{Q}$同胚。

进一步的结论属于Sierpiński：无孤立点的可数度量空间同胚于$\mathbb{Q}$。
我们已经成功地将这个无孤立点可数度量空间$X$作为闭子空间嵌入了$\mathbb{Q}$，无孤立点指出它完美。
（因此这个条件看起来的弱化其实并没有弱化。）
然而，证明$\mathbb{Q}$的完美子集$X$同胚于$\mathbb{Q}$并不是一蹴而就的。

我们需要先把$X$嵌入Cantor三分集$\mathcal{C}\subseteq\mathbb{R}$中，
然后发现$X$在$\mathbb{R}$中的闭包是无处稠紧致完美集，且$X$在这闭包中稠密。
:::

::: lemma
$\mathbb{R}$中的无处稠紧致完美集两两同胚。
:::

::: proof
对于无处稠紧致完美集$A$，我们考虑$a_0=\mathrm{inf}(A)$与$a_1=\mathrm{sup}(A)$，
显然$a_0$与$a_1$均在$A$中。
$[a_0,a_1]\backslash A$是一个开集，于是它是可列个开区间的并，我们按照大小记录每个开区间的每个端点，
它们构成可数稠密无端点线序集。

因此，任意两个无处稠紧致完美集的那些开区间端点构成的集都是序同构的，这进而给出同胚。
:::

::: proof [@thm:perfect-countable-metric 的证明]
注意到$\mathcal{C}$子集就是一个无处稠紧致完美集，我们现在可以不妨设$X$稠密地嵌入了$\mathcal{C}$。
:::

::: lemma
任取$\mathcal{C}$的可数子集$E$与可数稠密子集$C$，
存在$\mathcal{C}\backslash E$的可数稠密子集$D$与$C$同胚。
:::

::: proof
将$2=\{0,1\}$考虑成Abel群$\mathbb{Z}/2\mathbb{Z}$，进而$\mathcal{C}$也成为一个群。
其中的两个可数子集$A$与$B$一定有$p$使得$p+A\cap B=\varnothing$，这是由于$\mathcal{C}$不可数。
:::

::: proof [@thm:perfect-countable-metric 的证明]
因此，我们考虑Cantor空间中的所有终常点（也就是最终恒为0或1的点），它们与$2^{<\omega}$一样多，
所以是一个可数子集。这指出不妨设$X$稠密地嵌入了$\mathcal{C}$，且未曾碰到任何终常点。

因此，$X$同胚于一个可数稠密无端点线序集，后者显然同胚于$\mathbb{Q}$。
:::

现在，我们可以开始论证一般的Cantor定理了。

::: theorem [Cantor–Bendixson]
任何Polish空间$X$均可以唯一方式写成一个至多可数的开集$U$与一个完美集$P$的不交并。
最大的$X$的完美子集称作$X$的完美核（perfect kernel），记作$\mathrm{PK}(X)$。
:::

我们有一个一步到位取出完美核的方法。

::: definition
称点$x$是空间$X$的凝聚点（condensation point），若它的每个开邻域都是不可数集。
:::

::: remark*
显然，凝聚点比聚点（accumulation point）更强。
:::

::: proof
我们收集Polish空间$X$的全体凝聚点为集$X^*=P$，令$U=X\backslash P$，我们证明$P$是完美集，
且$U$是至多可数的开集，然后证明分解唯一，最后证明$P$是完美核。

由于Polish空间有可数基$\{U_n\}$，不难意识到$U$就是那些可数的$U_n$们的并，
因而至多是可数个可数的开集的并，因而是至多可数开集，因而$P$是闭集。
又注意到$x\in P$的任何邻域$V$不可数，因而包含不可数个凝聚点，因此$V\cap P$仍是不可数点集，
这显然推出$x$是$P$的聚点，因此$P$是完美集。

如果$X$另有分解$X=U'\cup P'$，由于显然$P'^*=P'$，我们有$P'\subseteq P$，
而$x\in C'$又指出$C'$是可数开集，所以$C'\subseteq C$，综合即得$P'=P$且$C'=C$。

最后，若$X$中另有完美集$P'$，仍然由$P'^*=P'$得到$P'\subseteq P$，因此$P$是最大的包含于$X$的完美集，
也就是完美核。
:::

::: corollary
不可数的Polish空间的基数是$\beth_1$。
:::

::: proof
之前提到的任何嵌入都给出其基数不大于$\beth_1$，而不可数指出它的完美核不空，
因此完美核有一个子空间同胚于Cantor空间，因此它的基数不小于$\beth_1$。
:::

::: remark*
我们还可以得到一个类似的定理。
:::

::: theorem
任何零维Polish不可数完美空间均可分解为一个至多可列集不交并于一个同胚于$\mathcal{N}$的子空间。
:::

我们只列出所需的一个引理。

::: theorem [Mazurkiewicz]
零维Polish空间中的稠密$G_\delta$边界集同胚于$\mathcal{N}$。
:::

但是，我们之前取导集得到完美核的方法并不是就没有用了。

::: definition [迭代Cantor–Bendixson导集]
我们在任意拓扑空间中对其子集$A$定义其迭代Cantor–Bendixson导集序列如下：

1. $A^0=A$

2. $A^{\alpha+1}=\mathrm{Der}(A^\alpha)$

3. $A^{\alpha}=\bigcap_{\beta<\alpha}A^\beta$，这里$\alpha$是极限序数。

:::

::: theorem
对Polish空间$X$，存在可数序数$\theta$使得$X^\theta$恰好是$X$的完美核。
:::

::: proof
显然$\mathrm{PK}(X)\subseteq X^\alpha$总是成立，而$X^\theta=X^{\theta+1}$又指出$X^\theta$完美，
因而$X^\theta\subseteq\mathrm{PK}(X)$。最后由于完美核的补集可数，最小的$\theta$也就必须是可数序数。
:::

::: definition
最小的使得$X^\theta=\mathrm{PK}(X)$的序数$\theta$称为空间$X$的Cantor–Bendixson秩，
记为$\mathrm{CB}(X)$。
:::

希望读者在这里尚未忘记良基树的定义。
由于剪枝树就是树状空间的闭子空间，我们也可以考察树的CB秩，大家将会发现它并不比拓扑空间的CB秩更复杂。

我们仍然希望用导集来描述更简单的树，但是这里有两种相互分歧的做法：一种是考虑完美树的要求，
另一种则是简单地考虑剪掉叶子。我们依次介绍这两种做法。

::: definition [完美树]
称树$T\subseteq A^{<\omega}$是完美的，
若$\forall s\in T\exists t,u\in T(s\subseteq t\wedge s\subseteq u\wedge t\perp u)$。
:::

::: theorem
对剪枝树$T$而言，$[T]$是完美集当且仅当$T$是完美树。
:::

::: proof
若$[T]$不是完美集，则它有孤立点$x$，假定有标准基中的元素$N_s$孤立此点，
则不存在两个不相容的$t,u$使得它们均延伸$s$，因此$T$不是完美树。

若$T$不是完美树，则存在$s$使得不存在两个不相容的$t,u$延伸$s$，然而剪枝树表示必然存在一个$t$延长$s$，
这个$t$上的任意无穷枝条均为$[T]$的孤立点，因此$[T]$不是完美集。
:::

因此，我们自然产生以下定义。

::: definition
对树$T\subseteq A^{<\omega}$，
定义其Cantor–Bendixson导树为
$\mathrm{Der}(T)=\{s\in T|\exists t,u\in T(s\subseteq t\wedge s\subseteq u\wedge t\perp u)\}$。

进一步，我们造出它的迭代Cantor–Bendixson导树序列如下：

1. $T^0=T$

2. $T^{\alpha+1}=\mathrm{Der}(T^\alpha)$

3. $T^{\alpha}=\bigcap_{\beta<\alpha}T^\beta$，这里$\alpha$是极限序数。

:::

::: theorem
存在最小的序数$\theta\leq\mathrm{max}\{|A|,\aleph_0\}$使得$T^\theta=T^{\theta+1}$，
我们仍称$\mathrm{PK}(T)=T^\theta$为树的完美核，$\mathrm{CB}(T)=\theta$为树的Cantor–Bendixson秩。
:::

::: proof
树越导越小，而整个$A^{<\omega}$的基数是$\mathrm{max}\{|A|,\aleph_0\}$。
:::

树的Cantor–Bendixson导树与其对应的空间的Cantor–Bendixson导集并未层层都一一对应起来，
我们只能做到下面这一步。

::: theorem
$[T]^\alpha\subseteq[T^\alpha]$，且$\mathrm{PK}([T])=[\mathrm{PK}(T)]$。
:::

::: proof
前一个对$\alpha$实行归纳，$\alpha=0$显然。

若$[T]^\alpha\subseteq[T^\alpha]$，我们要证明$[T]^{\alpha+1}\subseteq[T^{\alpha+1}]$。
$x\in[T]^{\alpha+1}$显然等价于
$\forall n\exists m\geq n\exists y\in[T]^\alpha(y\not=x\wedge x|_m=y|_m)$，
我们将$y\in[T]^\alpha\subseteq[T^\alpha]$放宽为$y\in[T^\alpha]$即可得到$x\in[T^{\alpha+1}]$的证据。

若有极限序数$\alpha$，已知所有的$\beta<\alpha$均有$[T]^\beta\subseteq[T^\beta]$，
我们要证明$[T]^\alpha\subseteq[T^\alpha]$。
这是因为$x\in [T]^\alpha$当且仅当$\forall\beta( x\in[T]^\beta)$，
这推出$\forall\beta(x\in[T^\beta])$，后者等价于$\forall\beta\forall n(x|_n\in T^\beta)$，
于是交换相同的量词得到$\forall n(x|_n\in T^\alpha)$，换言之$x\in[T^\alpha]$。

后一个由于已知完美集当且仅当完美树，反证不难。
:::

::: remark*
在$T$是剪枝树时确实有$[\mathrm{Der}(T)]=\mathrm{Der}([T])$，
但是$T$是剪枝树与否都不能推出$\mathrm{Der}(T)$是剪枝树与否。
由于无穷枝条上长出短须可以保证无穷枝条在做导树的时候不被立即剪掉，这里的包含于不能改进为等于。
:::

现在，我们换而考虑更简单的方法：每次剪掉一层叶子。

::: definition
对树$T\subseteq A^{<\omega}$，定义其良基导树为$T_*=\{s\in T|\exists a\in A(s\Box a\in T)\}$。

进一步，我们造出它的迭代良基导树序列如下：

1. $T^{0}_*=T$

2. $T^{\alpha+1}_*=(T^\alpha_*)^*$

3. $T^{\alpha}_*=\bigcap_{\beta<\alpha}T^\beta_*$，这里$\alpha$是极限序数。

:::

::: theorem
存在最小的序数$\theta\leq\mathrm{max}\{|A|,\aleph_0\}$使得$T^\theta_*=T^{\theta+1}_*$，
我们称$\mathrm{IF}(T)=T^\theta_*$为树的非良基部分，
$\mathrm{WF}(T)=T\backslash\mathrm{IF}(T)$为树的良基部分，$\mathrm{Rank}(T)=\theta$为树的秩。
:::

::: proof
同上。
:::

树的良基部分还可以用更简单的方式定义出来。

::: theorem {@thm:perfect-wf}
$\mathrm{WF}(T)=\{s\in T|T_s$是良基树$\}$
:::

这里，我们终于与良基树再会了。
这个定理的证明可以搞得更加美丽，因为我们可以精确给出每个$\mathrm{WF}(T)$中的元素在何时消失的信息，
它其实就是良基这种性质自带的秩函数。

::: definition [良基秩]
给定树$T$，我们称以下定义的函数$\mathrm{Rank}_T:A^{<\omega}\to\mathbf{Ord}$为这棵树定义的良基秩：

1. 对$s\in\mathrm{IF}(T)$，定义$\mathrm{Rank}_T(s)=\mathrm{Rank}(T)$。

2. 对$s\in\mathrm{WF}(T)$，
   定义$\mathrm{Rank}_T(s)=\mathrm{sup}_{a\in A,s\Box a\in T}(\mathrm{Rank}_T(s\Box a)+1)$。

3. 对$s\not\in T$，定义$\mathrm{Rank}_T(s)=0$。
:::

良基秩的作用就是陈述以下定理。

::: theorem
对于$s\in\mathrm{WF}(T)$，$\mathrm{Rank}_T(s)$是唯一的序数$\alpha$，
使得$s\in T^{\alpha}_*\backslash T^{\alpha+1}_*$。
:::

::: proof
$T_s$在$\mathrm{Rank}_T(s)$步消失。
:::

::: corollary
树是良基树，当且仅当其非良基部分为空。
:::

::: proof [@thm:perfect-wf 的证明]
这个推论显然给出我们想要的定理。
:::

::: remark*
这里可以悄悄发现Church–Kleene序数的影子。
:::
