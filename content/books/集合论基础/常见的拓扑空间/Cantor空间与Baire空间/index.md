---
title: Cantor空间与Baire空间
---

这一节，我们来考虑最美丽的两个树状空间。

::: definition
我们命$2^\omega=\mathcal{C}$为Cantor空间，$\omega^\omega=\mathcal{N}$为Baire空间。
:::

我们将很少使用Baire空间这个名字，而是直接称呼$\mathcal{N}$，因为这个名字还用来称呼另一种对象，
见5.5。由于$\mathcal{C}$作为符号以前经常被用在证明中，我们将更多地使用Cantor空间的名字。

首先，我们来看两个定理，它们分别刻画了$\mathcal{C}$与$\mathcal{N}$的唯一性。

::: theorem [Brouwer] {@thm:Brouwer}
非空完美零维紧致度量空间同胚于$\mathcal{C}$。
:::

::: definition
我们称$X$的一系列子集$\{A_s|s\in 2^{<\omega}\}$为一个Cantor概型（Cantor scheme），若

1. $\forall s\in 2^{<\omega}(A_{s\Box 0}\cap A_{s\Box 1}=\varnothing)$

2. $\forall s\in 2^{<\omega}\forall i\in 2(A_{s\Box i}\subseteq A_{s})$
:::

::: remark*
这并不是代数几何那个概型（scheme），但也不是分离或替换公理模式（schema）。
这俩似乎一个是英文一个是德文？
:::

::: proof [@thm:Brouwer 的证明]
显然$\mathcal{C}$已经具有以上所有性质，所以我们假定有一个同样满足以上所有性质的空间$X$，
然后构造$X$到$\mathcal{C}$的同胚。

我们现在在$X$上做一个Cantor概型，使得$A_\varnothing=X$，每个$A_s$都是开闭集，
且$A_s=A_{s\Box 0}\coprod A_{s\Box 1}$。
我们还要求$x\in\mathcal{C}\rightarrow \mathrm{lim}_{n}\mathrm{diam}(A_{x|_n})=0$。
如果我们能得到这样的构造，令$f:\mathcal{C}\to X,x\to\bigcap_n A_{x|_n}$即可得到我们想要的同胚。

零维给出开闭基，紧致给出完备且完全有界。
由于开闭集有限交、并、去掉对方都仍然得到开闭集，
完全有界性指出我们可以作分解$X=X_1\coprod...\coprod X_n$，
这里每个$X_n$都是直径不超过$\frac12$的开闭集。

我们令$A_1=X_1$，$A_{01}=X_2$，……，$A_{0...01}=X_{n-1}$，$A_{0...0}=X_n$，
然后向上并出所有还未定义的$A_{0...01}$。
对每个$X_i$继续分解为直径不超过$\frac13$的小开闭集，然后继续生长，归纳即可完成构造。
:::

::: theorem [Alexandrov–Urysohn] {@thm:Alexandrov-Urysohn}
非空零维Polish空间，若紧致子集均无内部，则同胚于$\mathcal{N}$。
:::

::: definition
我们称$X$的一系列子集$\{A_s|s\in \omega^{<\omega}\}$为一个鲁金概型（Luzin scheme），若

1. $\forall s\in \omega^{<\omega}\forall i\not=j\in\omega(A_{s\Box i}\cap A_{s\Box j}=\varnothing)$

2. $\forall s\in \omega^{<\omega}\forall i\in \omega(A_{s\Box i}\subseteq A_{s})$
:::

::: proof [@thm:Alexandrov-Urysohn 的证明]
注意紧致当且仅当有限分裂，$\mathcal{N}$确实具有以上所有性质。

我们同样对满足以上全部条件的空间$X$作鲁金概型，使得$A_\varnothing=X$，每个$A_s$都是开闭集，
且$A_s=\coprod_{n\in\omega} A_{s\Box n}$。
我们还要求$x\in\mathcal{N}\rightarrow \mathrm{lim}_{n}\mathrm{diam}(A_{x|_n})=0$，
然后同样取$f$得到同胚。

这里甚至更简单，因为每一层都可以放无穷个集，
我们只要证明$\forall\epsilon>0$我们都可以把任何非空开集$U\subseteq X$拆成可列个直径不超过$\epsilon$
的非空开闭集的不交并。紧集无内部指出$U$的闭包不紧，然而它显然完备，于是它只能不完全有界。
因此存在$0<\delta<\epsilon$使得不存在直径不大于$\delta$的有限的$U$的开覆盖，
于是我们把$U$拆成直径不超过$\delta$的可列个开闭集的不交并即可。
:::

零维的Polish空间额外受到它们的重视。

::: theorem
零维Polish空间同胚于某个$\mathcal{C}$的$G_\delta$子空间，某个$\mathcal{N}$的闭子空间。
:::

::: proof
我们把$\mathcal{N}$嵌入为$\mathcal{C}$的$G_\delta$子空间，
从而只需要把零维Polish空间$X$嵌入为$\mathcal{N}$的闭子空间。

前者只要把$x\in\mathcal{N}$的各位数字变成$0$的个数，
然后用$1$把它们分开即可得到到$\mathcal{C}$的嵌入。

后者考虑与上一个定理一样的鲁金概型，但这次我们不能保证每个$A_s$都不空，
我们做出来的同胚$f$现在只定义在$\mathcal{N}$的一个闭子空间上。
:::

这个命题可以变得更宽泛一点。

::: theorem
零维空间均可嵌入Cantor空间。
:::

::: proof
考虑零维空间的可数开闭基$F_n$，我们直接令$f:X\to\mathcal{C}=2^\omega$为$f(x)(n)=[x\in F_n]$，
右侧在$x\in F_n$时取$1$，在$x\not\in F_n$时取$0$。
:::

最后，我们指出它们都在$\mathbb{R}$上有其对应物。

::: theorem
$\mathcal{C}$同胚于$\mathbb{R}$上的Cantor三分集，
$\mathcal{N}$同胚于$\mathbb{R}\backslash\mathbb{Q}$。
:::

::: proof
第一个是因为Cantor三分集的构造过程显然是在取Cantor概型，第二个直接考虑连分数分解。
:::

这两个空间，尤其是Cantor空间，作为编码信息的有力工具，将来还会多次出现。
