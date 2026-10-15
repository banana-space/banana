---
title: 势与基数
---
实数理论中，我们不会用到不可数的序数。不过，我们还得先定义不可数，这需要引入朴素的势的概念。

::: definition [势]
称集合$A$的势不大于$B$，记为$|A|\leq|B|$，若存在从$A$到$B$的单射。

称集合$A$与集合$B$等势，记为$|A|=|B|$，若存在$A$与$B$之间的双射。

简记$|A|\leq |B|\wedge \neg(|A|=|B|)$为$|A|<|B|$。
:::

很显然，单射的复合还是单射使得这个$|-|\leq|-|$具备传递性。恒等映射是单射使得它具备自反性，而它的“反对称性”（从而它是个“偏序”）则由以下著名定理给出。

::: theorem [Cantor-Bernstein]
$|A|\leq |B|\wedge |B|\leq |A|\rightarrow |A|=|B|$。
:::

::: proof
这是一个非常精彩的构造。

首先设有$f:A\hookrightarrow B$与$g:B\hookrightarrow A$见证两个比较。假定$B'=g(B)$，又作$h=g\circ f:A\hookrightarrow A$，记$A_1=h(A)$，则$A_1\subseteq B'\subseteq A$且$|A|=|A_1|$，于是不妨设$A_1\subseteq B\subseteq A$，且已知一个双射$f:A\hookrightarrow A_1$，来找$|A|=|B|$的证据。

轮流定义$A_0=A,A_{n+1}=f(A_n)$和$B_0=B,B_{n+1}=f(B_n)$，则$A_0\supseteq B_0\supseteq A_1\supseteq B_1\supseteq...$，于是令$C_n=A_n\backslash B_n,D_n=B_n\backslash A_{n+1}$，有$A_n=(\bigcup_{m\geq n}C_m)\cup(\bigcup_{m\geq n}D_m)$和$B_n=(\bigcup_{m>n}C_m)\cup(\bigcup_{m\geq n}D_m)$。

注意$f_n=f|_{C_n}$是$C_n$到$C_{n+1}$的双射，令$F=(\bigcup_{n\in\mathbb{N}}f_n)\cup(\bigcup_{n\in\mathbb{N}}id_{D_n})$，它就是一个$A=A_0$到$B=B_0$的双射。
:::

对于势的比较，我们有最经典的对角线论证法，它指出幂集的势总是严格的更大。

::: theorem [Cantor]
$|A|<|\wp A|$。
:::

::: proof
显然$x\mapsto\{x\}$给出了$|A|\leq|\wp A|$的证据。反证，设有$f:\wp A\hookrightarrow A$同时是个满射。

考虑$B=\{x\in A|x\not\in f(x)\}$，则$\exists a\in A(f(a)=B)$将导出$a\in B\leftrightarrow a\not\in B$，显然矛盾。
:::

我们还有一个更精巧的结构，它给出了一个最小的势严格大于给定集的序数。

::: theorem [Hartogs]
对任意集合$A$，定义$\aleph(A)=\{\mathrm{Type}(S,R)|S\subseteq A,R\subseteq S^2,isWellOrder(R)\}$，这是个序数，且有$\neg(|\aleph(A)|\geq|A|)$。

此外，对任何序数$\alpha$，$\neg(|\alpha|\leq|A|)\rightarrow |\aleph(A)|\leq|\alpha|$。
:::

::: proof
首先要验证$\aleph(A)$是个序数，这是因为它是一集序数，而且向下封闭（即比其中某序数小的序数一定也在其中）。

这两个命题都采取反证。第一个，如果存在这样的单射，那么$\aleph(A)$及其良序结构将被同构地投射到一个$A$的子集上，从而得到$\aleph(A)\in\aleph(A)$引发矛盾。第二个，由于$\aleph(A)$与$\alpha$都是序数，反证的假设就给出$\alpha<\aleph(A)$，从而由定义可以找到一个$A$的良序子集与$\alpha$同构，这给出$\alpha$到$A$的单射，矛盾。
:::

这样，如果$\wp A$上面有良序，我们就有推论：$|\aleph(A)|\leq|\wp A|$。但是这两位究竟是相等还是严格小，就是集合论中的的经久难题了。

现在，我们先来定义基数的概念。

::: definition [基数]
称序数$\kappa$为基数，若它到它的任何元素都没有双射。所有基数组成的真类记为$\mathbf{Card}$。
:::

::: remark*
由于没有选择公理，我们不能断言每个集合都与一个基数等势，因此我们目前能对基数说的事情实在是很少。
:::

我们先来简单地讨论基数的加法与乘法。

::: definition [基数的加法与乘法]
定义$|\alpha|\times|\beta|=|\alpha\cdot\beta|$，$|\alpha|+|\beta|=|\alpha+\beta|$，其中等号右侧采取序数运算。
:::

相比于序数的相应运算，基数的加法与乘法都是平凡的。具体而言，我们有以下定理。

::: theorem
对任意无穷基数$\kappa$，总有$\kappa\times\kappa=\kappa$。
:::

::: proof
我们直接在集合$\kappa\times\kappa$上定义一个良序，使得其序型恰好就是$\kappa$。具体而言，令$(\alpha,\beta)<_{C}(\gamma,\delta)$当且仅当$\mathrm{max}\{\alpha,\beta\}<\mathrm{max}\{\gamma,\delta\}\vee(\mathrm{max}\{\alpha,\beta\}=\mathrm{max}\{\gamma,\delta\}\wedge (\alpha<\gamma\vee(\alpha=\gamma\wedge\beta<\delta)))$。这称为$\kappa\times\kappa$上的典范良序。

现在，我们证明对任意无穷基数$\kappa$，均有$\mathrm{Type}(\kappa\times\kappa,<_C)=\kappa$。首先，显然有$\mathrm{Type}(\kappa\times\kappa,<_C)\geq\kappa$，因此我们不妨假定存在使得这个不等号严格成立的$\kappa$，然后选取最小的这样的$\kappa$以导出矛盾。这时，由于不等号严格成立，不妨设真前段$\kappa\times\kappa[(\alpha,\beta)]\cong\kappa$。记$\mathrm{max}\{\alpha,\beta\}=\gamma<\kappa$，然后令$\delta=\gamma+1<\kappa$。显然$(\alpha,\beta)<_C (0,\gamma)$，于是$\mathrm{Type}(\kappa\times\kappa[(0,\gamma)])\geq\kappa$。

然而前面这个真前段作为集合恰好就是$\delta\times\delta$，而归纳假设告诉我们$|\delta\times\delta|=|\delta|<\kappa$，于是我们得到一个从$\kappa$到$|\delta|<\kappa$的单射，这与基数的定义矛盾。
:::

::: corollary
$\aleph_{\alpha}+\aleph_{\beta}=\aleph_{\alpha}\times\aleph_{\beta}=\aleph_{\mathrm{max}\{\alpha,\beta\}}$。
:::

::: proof
记$\gamma=\mathrm{max}\{\alpha,\beta\}$，则$\aleph_{\gamma}\leq\aleph_{\alpha}+\aleph_{\beta}\leq\aleph_{\alpha}\times\aleph_{\beta}\leq\aleph_{\gamma}\times\aleph_{\gamma}=\aleph_{\gamma}$，因此中间全部都是等号。
:::

按照Frege与Russel一开始的想法，势应该定义成所有与之等势的东西，但它显然是个真类。Scott's Trick部分地改善了这个状况。

::: definition [作为集合的势]
我们将集合$A$的势集$\mathrm{card}(A)$定义为全体和$A$等势，且具有最小的$\mathrm{rank}$的那些集构成的集。
:::

::: theorem
$|A|=|B|\leftrightarrow\mathrm{card}(A)=\mathrm{card}(B)$
:::

::: remark*
然而，这个$\mathrm{card}$并不能给出$\mathrm{card}(X)=\mathrm{card}(\mathrm{card}(X))$，这是一个重要的缺憾。
:::

这种定义几乎已经被历史抛弃了，我们提到它只是因为某些哲学因素。
