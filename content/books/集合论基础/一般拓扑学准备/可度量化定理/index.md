---
title: 可度量化定理
---

::: theorem
度量空间是$T_6$的。
:::

::: proof
首先，度量空间是$T_2$的：任给$x\not=y$，记$r=d(x,y)/2$，
由三角不等式知$B_r(x)$与$B_r(y)$是所要的分离这两点的开集。

其次，为了证明度量空间是$PN$的，对闭集$C$令$d(x,C)=\mathrm{inf}_{y\in C}d(x,y)$，
则$x\in C\leftrightarrow d(x,C)=0$，据此可知$f(x)=d(x,C)/(d(x,C)+d(x,D))$是所要的分离函数。

最后，我们还需要证明$f$是连续函数，换言之证明$d(\cdot,C)$是连续函数，
这只要证明开区间的逆像集内每个点处都有小开球包含在逆像集之内。
:::

::: remark*
这意味着“可度量化”是一个非常强的条件。
:::

本节专注于证明各种可度量化定理。现在，让我们先看一个可度量化的充分条件，由Urysohn给出。

::: theorem [Urysohn] {@thm:Urysohn度量化定理}
$C_2+T_4\rightarrow Metrizable$
:::

首先，我们需要一个非常重要的引理，仍由Urysohn发现。

::: lemma [Urysohn] {@lem:Urysohn引理}
在$T_4$空间$X$中，对无交的两个闭集$C,D$一定有连续函数$f:X\to[0,1]$使得$f(C)=\{0\},f(D)=\{1\}$。
:::

::: proof
这个证明具有非凡的创造性。
我们考虑$[0,1]\cap\mathbb{Q}$的枚举$\{p_n|n\in\mathbb{N}\}$，不妨设$p_0=1,p_1=0$。
我们归纳地定义一系列$X$中开集$U_{p}$如下。

1. $U_1=X\backslash D$

2. 由于$T_4$，存在开集$U_0$包含$C$，且存在某个开集$O$包含$D$使得$U_0\cap O=\varnothing$，
   注意这也指出$\mathrm{Cl}(U_0)\subseteq U_1$。

3. 若已经构造出$U_{p_0}$到$U_{p_{n-1}}$，
   且$\forall i,j<n(p_i<p_j\rightarrow \mathrm{Cl}(U_{p_i})\subseteq U_{p_j})$，
   我们考虑$\{p_i|i\leq n\}$中第一个小于$p_n$的$p_i$与第一个大于$p_n$的$p_j$。
   归纳假设指出$\mathrm{Cl}(U_{p_i})\subseteq U_{p_j}$，
   于是同上由$T_4$存在一个开集$U_{p_n}$包含$\mathrm{Cl}(U_{p_i})$且$\mathrm{Cl}(U_{p_n})$包含于
   $U_{p_j}$。

进一步我们令小于$0$的有理数$p$对应$U_p=\varnothing$，大于$1$的有理数$p$对应$U_p=X$，
就对每个有理数$p\in\mathbb{Q}$给出了$U_p$，且$p<q\rightarrow \mathrm{Cl}(U_p)\subseteq U_q$。

现在，给定$x\in X$，我们定义$Q(x)=\{p\in\mathbb{Q}|x\in U_p\}$，然后令$f(x)=\mathrm{inf}(Q(x))$，
我们证明$f$就是所要的函数。显然$f(C)=\{0\},f(D)=\{1\}$，困难在于证明$f$是个连续函数。

首先，不难证明$x\in\mathrm{Cl}(U_p)\rightarrow f(x)\leq p$和$x\not\in U_p\rightarrow f(x)\geq p$。
这样，对$x\in X$和开区间$(c,d)\ni f(x)$，我们证明存在$x$的邻域$U$满足$f(U)\subseteq (c,d)$即可。
我们取有理数$p,q$使得$c<p<f(x)<q<d$，然后断言$U=U_q\backslash \mathrm{Cl}(U_p)$就是我们所要的开集，
证明不难。
:::

现在，我们只需要把这个$C_2+T_4$的空间$X$嵌入一个度量空间即可。我们再引入一个定理。

::: theorem [嵌入定理] {@thm:嵌入定理}
给定$T_2$空间$X$到$\mathbb{R}$的一族连续函数$\{f_i|i\in I\}$，满足任给$x\in X$和邻域$U\ni x$，
存在$i\in I$使得$f_i(x)>0$且$f_i(X\backslash U)=\{0\}$，
则$F(x)(i)=f_i(x)$给出嵌入$F:X\rightarrow \mathbb{R}^I$。
:::

::: proof
显然$F$是单射，我们只要证明$F:X\rightarrow F(X)$是同胚即可。
由于每个$f_i$都是连续函数，而我们默认在积空间$\prod_{i\in I}\mathbb{R}=\mathbb{R}^I$上赋积拓扑，
所以$F$是连续函数。现在只要说明$F$是开映射，即将每个$X$的开集$U$映为开集。

显然，只要证明任给$z\in F(U)$存在其开邻域$W\ni z$使得$W\subseteq F(U)$。
假定$F(x)=z$，由假定有$i\in I$使得$f_i(x)>0$且$f_i(X\backslash U)=\{0\}$。
我们取开集$(0,+\infty)$在第$i$个投影下的原像$V=\pi^{-1}_i((0,+\infty))$，
由定义它是$\mathbb{R}^I$中的开集。考虑$W=V\cap F(X)$为子空间$F(X)$的开集。

我们断言这就是所要的$W$。首先，$\pi_i(z)=f_i(x)>0$指出$z\in W$。
其次，$w\in W$指出存在$t\in X$使得$F(t)=w$且$\pi_i(w)=f_i(t)>0$，
由于$f_i(X\backslash U)=\{0\}$这也就指出$t\in U$，进而$w\in F(U)$，故有$W\subseteq F(U)$。
:::

因此，我们想把$X$嵌入$\mathbb{R}^\omega$中。

::: lemma {@lem:R-omega可度量化}
$\mathbb{R}^\omega$可度量化。
:::

::: proof
记$d(a,b)=\mathrm{min}\{|a-b|,1\}$，
作$\mathbb{R}^\omega$上度量$D(x,y)=\mathrm{sup}\{d(x_i,y_i)/i\}$。验证从略。
:::

::: proof [@thm:Urysohn度量化定理 的证明]
现在一切都很简单了。
取$X$的可数基$\{B_n|n\in\mathbb{N}\}$，
对每一对满足$\mathrm{Cl}(B_n)\subseteq B_m$的$n,m$用Urysohn引理拿出一个连续函数$g_{n,m}:X\to[0,1]$
使得$g_{n,m}(\mathrm{Cl}(B_n))=\{1\}$且$g_{n,m}(X\backslash B_m)=\{0\}$。
此时，任给$x\in X$及其邻域$U\ni x$有基$B_m$包含$x$而包含于$U$，
由$T_4$又可选取$B_n$包含$x$使得$\mathrm{Cl}{B_n}\subseteq B_m$，
于是$\{g_{n,m}\}$满足嵌入定理的一切条件。

换言之，我们成功得到了嵌入$X\hookrightarrow \mathbb{R}^\omega$。
:::

作为Urysohn引理的另一个引用，我们稍微提一下另一个定理。

::: theorem [Tietze]
$T_4$空间$X$的闭子集$C$到$\mathbb{R}$的连续函数可以延拓到整个$X$上。
特别地，若$\forall x\in C(|f(x)|\leq M)$对某个$M\in \mathbb{R}$成立，
则$f_*:X\rightarrow\mathbb{R}$亦满足$\forall x\in X(|f_*(x)|\leq M)$。
:::

::: proof
我们先来考虑存在$M$的情况，此时不妨假设$M=1$。
我们的想法是构造一列连续函数$g_n$使得
$\forall n\in\mathbb{N}\forall x\in X(|g_n(x)|\leq \frac{1}{3}(\frac{2}{3})^{n-1})$且
$\forall n\in\mathbb{N}\forall x\in C(|f(x)-\sum_{j=1}^{n}g_j(x)|\leq(\frac{2}{3})^n)$。

如果存在，不难发现$\sum_{n\in\mathbb{N}}g_n$将一致地收敛到一个连续函数$f_*$，
且满足$\forall x\in C(f_*(x)=f(x))$而$\forall x\in X(|f_*(x)|\leq 1)$。现在来看$g_n$的具体构造。

由于$f$连续，
$C_1^-=\{x\in C|f(x)\leq-\frac13\}$与$C_1^+=\{x\in C|f(x)\geq\frac13\}$显然是不交的闭集。
运用Urysohn引理，
存在$g_1:X\rightarrow[-\frac13,\frac13]$使得$g_1|_{C_1^-}=-\frac13$而$g_1|_{C_1^+}=\frac13$。
同时这也指出$\forall x\in C(|f(x)-g_1(x)|\leq\frac23)$。

我们转而研究$h_1=f-g_1:C\rightarrow[-\frac23,\frac23]$。
继续考虑$C_2^-=\{x\in C|h_1(x)\leq-\frac29\}$与$C_2^+=\{x\in C|h_1(x)\geq\frac29\}$，
然后Urysohn给出$g_2:X\rightarrow[-\frac29,\frac29]$，然后是$h_2=h_1-g_2$，
如此递推即可得到所有$g_n$。

最后，注意$f$与$\frac{f}{1+|f|}$的连续性可以相互推出，对没有$M$的情况也就由上可推了。
:::

最后，为了给出可度量化的充要条件，我们还要引入一种性质。

::: definition [局部有限性]
空间$X$的子集族$\mathcal{A}$具有局部有限性，
若在每个$x\in X$处均有一开邻域$U$仅与有限多个$A_i\in\mathcal{A}$相交。
:::

::: theorem [Nagata–Smirnov] {@thm:Nagata-Smirnov}
空间$X$可度量化当且仅当它$T_3$且有一个基由可数个有局部有限性的子集族并成。
这个基$\mathcal{B}=\bigcup_{n\in\mathbb{N}}\mathcal{B}_n$称作可数局部有限基。
:::

::: proof
首先是推出可度量化的方向。
仿照Urysohn度量化定理的证明，我们依旧设法将$X$嵌入某个度量空间$\mathbb{R}^J$中。我们依次作以下断言。

**断言。** $T_3$且有可数局部有限基的空间也是$T_4$的，且其中任何闭集均为一列开集的交。
这样的集又称为$G_\delta$集。

**证明。** 首先来证明一个性质。
任给一个开集$W\subseteq X$，
我们断言存在可列个开集$U_n\subseteq X$使得
$W=\bigcup_{n\in\mathbb{N}}U_n=\bigcup_{n\in\mathbb{N}}\mathrm{Cl}(U_n)$。

由于$\mathcal{B}=\bigcup_{n\in\mathbb{N}}\mathcal{B}_n$，
我们考虑$\mathcal{C}_n=\{B\in\mathcal{B}_n|\mathrm{Cl}(B)\subseteq W\}$，它们必然也都是局部有限的。
我们令$U_n=\bigcup_{B\in\mathcal{C}_n}B$即显然地有
$\bigcup_{n\in\mathbb{N}}U_n\subseteq\bigcup_{n\in\mathbb{N}}\mathrm{Cl}(U_n)\subseteq W$。
最后来证明这都是等号，即证明$W\subseteq\bigcup_{n\in\mathbb{N}}U_n$。

对于$x\in W$，正则性给出$B\in\mathcal{B}$满足$x\in B$且$\mathrm{Cl}(B)\subseteq W$。
注意一定存在$n\in\mathbb{N}$使得$B\in\mathcal{B}_n$，于是由定义也有$B\in\mathcal{C}_n$，
所以$x\in U_n$。

接下来，我们证明闭集都是$G_\delta$集。

给定闭集$C\subseteq X$，
考虑开集$W=X\backslash C$由上性质给出的分解$W=\bigcup_{n\in\mathbb{N}}\mathrm{Cl}(U_n)$，
于是$C=\bigcap_{n\in\mathbb{N}}(X\backslash \mathrm{Cl}(U_n))$是$G_\delta$集。

最后，我们证明$T_4$，也就是证明正规性$N$。

假定$X$中有两个不交闭集$C$与$D$。
作$X\backslash D=\bigcup_{n\in\mathbb{N}}U_n$和$X\backslash C=\bigcup_{n\in\mathbb{N}}V_n$，
显然$\{U_n\}$是$C$的开覆盖，且每个$\mathrm{Cl}(U_n)$均与$D$不交，对$V_n$也是一样。

令$U_n'=U_n\backslash\bigcup_{i=0}^{n-1}\mathrm{Cl}(V_i)$而
$V_n'=V_n\backslash\bigcup_{i=0}^{n-1}\mathrm{Cl}(U_i)$，
再令$U'=\bigcup_{n\in\mathbb{N}}U_n'$而$V'=\bigcup_{n\in\mathbb{N}}V_n'$，
它们就是所要的分离$C$与$D$的开集。

为了应用嵌入定理，我们再做断言。

**断言。** $T_4$空间$X$中任给闭的$G_\delta$集$A$，
总存在连续函数$f:X\rightarrow[0,1]$使得$f^{-1}(\{0\})=A$。

**证明。** 设$A=\bigcap_{n\in\mathbb{N}}U_n$，
对每个$n$用Urysohn引理选取连续函数$f_n:X\rightarrow[0,1]$使得$f_n(A)=\{0\}$而
$f_n(X\backslash U_n)=\{1\}$。
现在令$f=\sum_{n\in\mathbb{N}}\frac{f_n}{2^n}$，
由于$1=\sum_{n\in\mathbb{N}}\frac{1}{2^n}$可知级数一致收敛，于是$f$就是所要的连续函数。

现在，我们把指标集$J$造出来。
由断言我们已经知道，$X$是$T_4$的，
且有可数局部有限基$\mathcal{B}=\bigcup_{n\in\mathbb{N}}\mathcal{B}_n$，且其中闭集都是$G_\delta$集。

任给$n$和$B\in\mathcal{B}_n$，
由第二个断言我们可以选取连续函数$f_{n,B}:X\rightarrow[0,\frac{1}{n}]$使得
$f_{n,B}^{-1}(\{0\})=X\backslash B$。
我们令$J=\{(n,B)\in\mathbb{N}\times\mathcal{B}|B\in\mathcal{B}_n\}$，
我们验证$\{f_{n,B}|(n,B)\in J\}$满足嵌入定理的条件。

任给$x\in X$与其开邻域$U$，由于$\mathcal{B}$是基，
必然存在$x$的开邻域$B\in\mathcal{B}$使得$B\subseteq U$，不妨设$B\in\mathcal{B}_n$。
显然$f_{n,B}(x)>0$且$f_{n,B}(\{X\backslash U\})=\{0\}$，
也就是说$(n,B)$恰好就是嵌入定理所要的函数指标。

现在，我们得到了$X$到赋予积拓扑的$[0,1]^J$的嵌入$F(x)(n,B)=f_{n,B}(x)$。
然而，积拓扑并不总是可度量化的，这迫使我们考虑$[0,1]^J$上一些更细的拓扑。

**断言。** 这个$F$对于赋度量拓扑$\rho(x,y)=\mathrm{sup}_{j\in J}(|x(j)-y(j)|)$的$[0,1]^J$
仍然是嵌入。

**证明。** 显然这个度量拓扑比积拓扑细，所以$F$仍然是单的开映射，我们只需要证明其连续性。
给定$x_0\in X$和任意的$\epsilon>0$，
我们证明存在$x_0$的开邻域$W$使得$\forall x\in W(\rho(F(x),F(x_0))<\epsilon)$。

对指定的$n$，$\mathcal{B}_n$局部有限指出存在$x_0$的邻域$U_n$，
只与有限个$B_{n,i}\in\mathcal{B}_n$相交。
这其实指出对除了$B_{n,i}$之外的$B\in\mathcal{B}_n$，均有$f_{n,B}(U_n)=\{0\}$。
这样，由$f_{n,B_{n,i}}$的连续性和$i$只有有限个，
我们总能选一个开邻域$V_n\subseteq U_n$使得
$\forall x\in V_n\forall i(|f_{n,B_{n,i}}(x)-f_{n,B_{n,i}}(x_0)|<\frac{\epsilon}{2})$。

现在选一个$N$使得$N\geq\frac{2}{\epsilon}$，我们断言$W=V_0\cap\cdots\cap V_N$就是所要的那个$W$。
令$x\in W$，对$n$的大小分开讨论：若$n\leq N$，
由于$f_{n,B}$在$W$上或者恒为$0$或者至多改变$\frac{\epsilon}{2}$，
我们有$|f_{n,B}(x)-f_{n,B}(x_0)|\leq\frac{\epsilon}{2}$；若$n>N$，
注意$f_{n,B}$值域是$[0,\frac{1}{n}]$，
显然有$|f_{n,B}(x)-f_{n,B}(x_0)|\leq\frac{1}{n}\leq\frac{\epsilon}{2}$。

因此，由这度量的定义我们有$\rho(F(x),F(x_0))\leq\frac{\epsilon}{2}<\epsilon$。

于是，我们还是把$X$嵌入了一个度量空间，从而$X$是可度量化的。
:::

为了证明另一个方向，我们需要以下定理。

::: theorem [Stone定理] {@thm:Stone定理}
对度量空间$X$的开覆盖$\mathcal{A}$，存在可数局部有限的开覆盖$\mathcal{E}$加细$\mathcal{A}$。
:::

::: proof
我们需要选择公理的等价形式之一，良序原理，来进行构造。我们要在这个$\mathcal{A}$上取良序$<$。

对某个$n$，我们对每个$U\in\mathcal{A}$定义$S_n(U)=\{x|B_{\frac{1}{n}}(x)\subseteq U\}$，
然后令$T_n(U)=S_n(U)\backslash\bigcup_{V<U}V$，
最后令$E_n(U)=\bigcup_{x\in T_n(U)}B_{\frac{1}{3n}}(x)$。
我们断言$\mathcal{E}_n=\{E_n(U)|U\in\mathcal{A}\}$是加细$\mathcal{A}$的局部有限开集族。

显然，
$\forall U\in\mathcal{A}\forall V\in\mathcal{A}(U\not=V\rightarrow\forall x\in T_n(U)\forall y\in T_n(V)(d(x,y)\geq\frac{1}{n}))$，
这样由三角不等式可知
$\forall U\in\mathcal{A}\forall V\in\mathcal{A}(U\not=V\rightarrow E_n(U)\cap E_n(V)=\varnothing)$。
于是加细由$E_n(U)\subseteq U$指出，
而局部有限由$B_{\frac{1}{6n}}(x)$对每个点$x$至多与一个$\mathcal{E}_n$中的元素相交所保证。

最后，$\mathcal{E}=\bigcup_{n\in\mathbb{N}}\mathcal{E}_n$是加细$\mathcal{A}$的可数局部有限开集族，
我们只要说明它覆盖$X$即可。对某个$x\in X$，我们用良序选出最小的$U\in\mathcal{A}$包括$x$。
它是个开集，所以存在$n$使得$B_\frac{1}{n}(x)\subseteq U$，于是$x\in S_n(U)$，
而最小性又保证$x\in T_n(U)$，从而$x\in E_n(U)\in \mathcal{E}_n\subseteq\mathcal{E}$。
:::

::: proof [@thm:Nagata-Smirnov 的证明（续）]
最后，我们证明定理的另一个方向，即用$X$上的度量来构造它的一个可数局部有限基。

给定$m$，我们用全体半径为$\frac{1}{m}$的开球做成$X$的开覆盖$\mathcal{A}_m$。
由 @thm:Stone定理，我们把这些$\mathcal{A}_m$全部加细成可数局部有限开覆盖$\mathcal{B}_m$，
然后作$\mathcal{B}=\bigcup_{m\in\mathbb{N}}\mathcal{B}_m$，我们来证明这就是可数局部有限基。
可数局部有限已经显然了，我们只证明它是基。

任给$x\in X$和$\epsilon>0$，我们证明$\exists B\in\mathcal{B}(x\in B\subseteq B_\epsilon(x))$。
事实上，选取$m>\frac{2}{\epsilon}$，由$\mathcal{B}_m$覆盖$X$可以选一个$B\in\mathcal{B}_m$包括$x$，
而由于它加细了某个以$\frac{1}{m}<\frac{\epsilon}{2}$为半径的开球，它自己的直径显然小于$\epsilon$，
从而$B\subseteq B_\epsilon(x)$。
:::

我们有另外一种对可度量性的刻画，同样需要引入一种新性质。

::: definition [局部离散性]
把局部有限性定义中的“有限”改成“至多一个”，得到的就是局部离散性的定义。
:::

::: theorem [Bing]
空间$X$可度量化当且仅当它$T_3$且有一个基由可数个有局部离散性的子集族并成。这个基称作可数局部离散基。
:::

::: proof
我们只是加强了Nagata–Smirnov定理（@-thm:Nagata-Smirnov）的其中一个方向，
因此这里只证明度量空间一定存在可数局部离散基，
然而我们在上述证明中构造的可数局部有限基就是可数局部离散基。
:::

最后，仿紧致性带来一个新的可度量化定理。

::: theorem [Smirnov]
空间$X$可度量化当且仅当它$T_2$、仿紧致，且在每个点处均有一邻域可度量化。
最后这一性质又称作局部可度量化。
:::

::: proof
首先，我们来证明度量空间是仿紧致的（其余两个要求是显然的）。
我们已经由Stone定理知道度量空间的开覆盖有可数局部离散开加细，但是仿紧致要求一个局部有限开加细，
为此我们需要增添许多功夫。

**断言。** 如果$T_3$空间$X$的每个开覆盖都有可数局部有限加细开覆盖，
则它的每个开覆盖都有局部有限加细覆盖，这个覆盖不要求其中每个集都是开集。

**证明。** 假设开覆盖$\mathcal{A}$有可数局部有限加细开覆盖
$\mathcal{B}=\bigcup_{n\in\mathbb{N}}\mathcal{B}_n$。
我们记$V_n=\bigcup_{U\in\mathcal{B}_n}U$，
然后对每个$n$和$U\in\mathcal{B}_n$定义$S_n(U)=U\backslash\bigcup_{i<n}V_i$，
令$\mathcal{C}_n=\{S_n(U)|U\in\mathcal{B}_n\}$，
我们宣称$\mathcal{C}=\bigcup_{n\in\mathbb{N}}\mathcal{C}_n$就是所要的局部有限加细覆盖。

为此，对每个$x\in X$，我们都要找到一个$x$的包括于$\mathcal{C}$中的邻域，且还要找一个$x$的邻域，
只与$\mathcal{C}$中的有限个元素相交。

首先，我们取最小的$N$使得$\mathcal{B}_N$中有元素包括$x$，任取一个这样的$U\in\mathcal{B}_N$。
由$N$最小可知$x\in S_N(U)\in\mathcal{C}$。
同时，由于每个$\mathcal{B}_m$都是局部有限的，
我们对每个$m\leq N$选取$x$的邻域$W_m$使之仅与有限个$\mathcal{B}_m$中的元素相交。
我们断言$U\cap W_0\cap\cdots\cap W_N$就是只与$\mathcal{C}$中的有限个元素相交的那个$x$的邻域。
这是因为对$n>N$，$U$不与$\mathcal{C}_n$的任何成员相交，而对$m\leq N$，
$W_m$仅与有限个$\mathcal{C}_m$的成员相交。

**断言。** 如果$T_3$空间$X$的每个开覆盖都有局部有限加细覆盖，
则它的每个开覆盖都有局部有限加细闭覆盖。

**证明。** 对开覆盖$\mathcal{A}$，
先令$\mathcal{B}=\{U|\exists V\in\mathcal{A}(\mathrm{Cl}(U)\subseteq V)\}$，
然后作这个开覆盖的局部有限加细覆盖$\mathcal{C}$，
最后$\mathcal{D}=\{\mathrm{Cl}(C)|C\in\mathcal{C}\}$就是所要的局部有限加细闭覆盖。

**断言。** 如果$T_3$空间$X$的每个开覆盖都有局部有限加细闭覆盖，
则它的每个开覆盖都有局部有限加细开覆盖。

**证明。** 这个证明也极具巧思。之前我们都在不断地排序后收缩(S)，现在我们要扩大。
假设有开覆盖$\mathcal{A}$，选取局部有限加细闭覆盖$\mathcal{B}$。
由定义，对任意点$x\in X$都存在其邻域仅与有限多个$\mathcal{B}$中元素相交，
因此把仅与有限多个$\mathcal{B}$中元素相交的全体开集提取为$\mathcal{B'}$，它是$X$的开覆盖，
于是又可选取其局部有限加细闭覆盖$\mathcal{C}$，
显然$\mathcal{C}$的成员也仅与有限多个$\mathcal{B}$的成员相交。

对每个$B\in\mathcal{B}$，定义$\mathcal{C}(B)=\{C\in\mathcal{C}|C\cap B=\varnothing\}$，
然后令$E(B)=X\backslash \bigcup_{C\in\mathcal{C}(B)}C$，不难证明$E(B)$是包含$B$的开集。

最后，选取$F(B)=\{A\in\mathcal{A}|B\subseteq A\}$，
并作$\mathcal{D}=\{E(B)\cap F(B)|B\in\mathcal{B}\}$，它就是所要的$\mathcal{A}$的局部有限加细开覆盖。

另一方面，我们来证明$T_2$、仿紧致，且在每个点处均有一邻域可度量化的空间是可度量化的。
根据Nagata–Smirnov定理（@-thm:Nagata-Smirnov），我们证明它$T_3$且有可数局部有限基。

首先，仿紧致性加上$T_2$不但可推出$T_3$，还可以推出$T_4$。

**断言。** 仿紧致$T_2$空间是$T_3$的。

**证明。** 假定$a\in X$不在闭集$B\subseteq X$中。
对于任意的$b\in B$，$T_2$指出存在其邻域$U_b$使得$\mathrm{Cl}(U_b)$依然不包括$a$。
全体这样的开集和$X\backslash B$一起构成了$X$的开覆盖，于是我们可以取其局部有限开加细，
再提取其中全体与$B$相交的元素构成$B$的局部有限开覆盖，且显然它不覆盖$\{a\}$。
于是将它们全部并起来得到一开集，它和它闭包的补集分离闭集$B$与点$a$。

**断言。** 仿紧致$T_3$空间是$T_4$的。

**证明。** 假定闭集$A\subseteq X$与闭集$B\subseteq X$不交。
对任意的$b\in B$，$T_3$指出存在其邻域$U_b$使得$\mathrm{Cl}(U_b)$依然与$A$不交，
然后同上运用仿紧致性即可。

最后，我们来构造出所需的可数局部有限基，从而完成证明。

我们在每个点处取可度量化邻域，全部收集起来得到$X$的一个开覆盖。
选取其局部有限开加细$\mathcal{C}$，
对每个$C\in\mathcal{C}$选其上的一个度量$d^C:C\times C\rightarrow\mathbb{R}$，
然后对$x\in C$和$\epsilon>0$定义局部开球$B_\epsilon^C(x)=\{y\in C|d^C(x,y)<\epsilon\}$。

给定$m$，我们收集全体半径为$\frac{1}{m}$的局部开球以形成$X$的开覆盖$\mathcal{A}_m$。
取其局部有限开加细$\mathcal{D}_m$，然后全部并在一起得到可数局部有限集$\mathcal{D}$，
我们断言它是$X$的一个基，也就是我们所要的构造。

任给点$x\in X$的邻域$U$，我们要找一个$D\in\mathcal{D}$使得$x\in D\subseteq U$。
注意$x$仅属于有限多个$C_i\in\mathcal{C}$，在每个$C_i$上注意$U\cap C_i$是$x$的邻域，
从而有$\epsilon_i>0$使得$B_{\epsilon_i}^{C_i}(x)\subseteq U\cap C_i$，
现在选一个$m>\frac{2}{\mathrm{min}\{\epsilon_i\}}$，然后从$\mathcal{D}_m$中选取$x$的邻域$D$。

由于$\mathcal{D}_m$是$\mathcal{A}_m$的加细，
肯定有$C\in\mathcal{C}$和$y\in C$使得$x\in D\subseteq B_{\frac{1}{m}}^C(y)\in\mathcal{A}_m$，
这时$C$必须是某个$C_{i_0}$，然而$m>\frac{2}{\epsilon_{i_0}}$，
于是$D\subseteq B_{\frac{1}{m}}^{C_{i_0}}\subseteq B_{\epsilon_i}^{C_i}\subseteq U$。
:::
