---
title: Polish空间
notices:
  - name: 问题
    items:
      - '“$\mathcal{C}(X,Y)$在一致度量拓扑下也是Polish空间”的证明中，$C_{m,n}$ 的定义里的 $\forall y\in Y$ 似乎应为 $\forall y\in X$。'
---

::: definition [Polish空间]
可分可完备度量化的拓扑空间称为Polish空间。
:::

首先，我们来考虑怎么用已有的Polish空间生成别的Polish空间。

::: theorem
Polish空间的闭子空间和可数积空间仍为Polish空间。
:::

::: proof
闭子空间直接把度量和稠密可数集继承下来就好了，
可数积的情况我们考虑度量$d=\sum_{n}\frac{1}{2^n}\frac{d_n}{1+d_n}$。
:::

但是，这里的闭子空间是否可以改进呢？我们先暂时引入以下记号。

::: definition [$G_\delta$与$F_\sigma$]
一列开集的交集称作$G_\delta$集，一列闭集的并集称作$F_\sigma$集。
:::

::: remark*
度量空间$T_6$，所以其中任何闭集都是$G_\delta$集。
:::

::: theorem {@thm:Polish子空间}
Polish空间$X$的子空间$Y$是Polish的，当且仅当$Y$是一个$G_\delta$集。
:::

我们主要通过连续函数的延拓来证明此定理。

::: theorem [Kuratowski] {@thm:Kuratowski延拓}
若有度量空间$X$的子空间$A$到完备度量空间$Y$的连续函数$f$，
则存在$X$中的$G_\delta$集$G$满足$A\subseteq G\subseteq\mathrm{Cl}(A)$，
且我们可以将$f$的定义域延拓到$G$上。
:::

::: proof
我们都知道，度量空间的集有一个直径$\mathrm{diam}(A)=\mathrm{sup}_{x,y\in A}d(x,y)$。
现在我们定义点$x$处函数$f$的振幅为$\mathrm{osc}(f,x)=\mathrm{inf}_{U\ni x}\mathrm{diam}(f(U))$，
然后令题中所要的$G=\mathrm{Cl}(A)\cap\{x\in X|\mathrm{osc}(f,x)=0\}$。

注意$\{x\in X|\mathrm{osc}(f,x)=0\}=\bigcap_{n}\{x\in X|\mathrm{osc(f,x)}<\frac{1}{n}\}$是$G_\delta$
集，$G$因此是$A\subseteq G\subseteq \mathrm{Cl}(A)$的$G_\delta$集。

现在我们来做延拓。
对$x\in G\backslash A\subseteq \mathrm{Cl}(A)\backslash A$，
显然必须存在一列$\{x_n\}\subseteq A$收敛于$x$。
不难意识到$\{x_n\}$是Cauchy列也说明$\{f(x_n)\}$是Cauchy列，因而存在$y=\mathrm{lim}_{n}f(x_n)\in Y$，
我们令$f(x)=y$即可。验证连续性不难。
:::

::: proof [@thm:Polish子空间 的证明]
现在，我们来证明Polish子空间必须是$G_\delta$集。
直接考虑显然连续的恒等映射$id_Y:Y\to Y$，它在上述定理下应当延拓为$f:G\to Y$，
这里$Y\subseteq G\subseteq\mathrm{Cl}(Y)$；验证延拓方式可知$f=id_G$，所以必须有$G=Y$，
这也就说明了$Y$是$G_\delta$集。

最后，我们来证明$G_\delta$集是Polish空间。直接继承度量不一定可以（为什么），我们要考虑改一下度量。
假定$Y=\bigcap_{n}U_n$，不妨要求$U_{n+1}\subseteq U_n$，然后令$F_n=X\backslash U_n$，
并记使得$X$成为Polish空间的度量为$d$。
我们在$Y$上重新定义
$d_Y(x,y)=d(x,y)+\sum_{n}\mathrm{min}\{\frac{1}{2^{n+1}},|\frac{1}{d(x,F_n)}-\frac{1}{d(y,F_n)}|\}$，
我们来验证它是完备的，将它与$d$的等价性留给读者。

事实上，$\{y_n\}\subseteq Y$若在$d_Y$下是Cauchy列，则在$d$下亦然，于是它一定收敛到一个$y\in X$；
然而我们又知道$\mathrm{lim}_{i,j}|\frac{1}{d(y_i,F_n)}-\frac{1}{d(y_j,F_n)}|=0$，
因此对每个$n$都有$\mathrm{lim}_{i}\frac{1}d(y_i,F_n)$收敛，
换言之$d(y_i,F_n)$收敛到非零实数$d(y,F_n)$，这指出$\forall n(y\not\in F_n)$，于是$y\in Y$。
:::

::: remark*
Kechris书P16的定理少了条件。
:::

注意$\mathbb{R}^\omega$和$[0,1]^\omega$在此节第一个定理下都是Polish空间，
现在我们来指出它们一些更特别的性质。

::: theorem
可分度量空间皆与某个$[0,1]^\omega$的子空间同胚。
特别的，Polish空间必与某个$[0,1]^\omega$的$G_\delta$子空间同胚。
:::

::: proof
假定可分给出的可数稠密集为$\{x_n\}\subseteq X$，
我们直接定义$f:X\to[0,1]^\omega,x\mapsto(\frac{d}{1+d}(x,x_n))$。
它显然是单射，我们只要证明$x^m\to x$当且仅当$f(x^m)\to f(x)$，这里$\{x^m\}\subseteq X$是任意的点列。

$x^m\to x$给出$\frac{d}{1+d}(x^m,x_n)\to\frac{d}{1+d}(x,x_n)$，
因此
$\sum_{n}\frac{1}{2^n}\frac{d_n}{1+d_n}(x^m,x_n)\to\sum_{n}\frac{1}{2^n}\frac{d_n}{1+d_n}(x,x_n)$，
这就是字面上的$f(x^m)\to f(x)$。

另一边，$f(x^m)\to f(x)$也给出$\frac{d}{1+d}(x^m,x_n)\to\frac{d}{1+d}(x,x_n)$，
利用三角不等式消掉$x_n$即可得到$\frac{d}{1+d}(x^m,x)\to 0$，换言之$x^m\to x$。
:::

::: theorem
Polish空间必与某个$\mathbb{R}^\omega$的闭子空间同胚。
:::

::: proof
我们来利用上一个定理给出的同胚的$G_\delta$集
$G=\bigcap_{n}U_n\subseteq[0,1]^\omega\subseteq\mathbb{R}^\omega$，
后两者事实上装备同一个度量$d\leq 1$。
我们还是令$F_n$为$U_n$的补集，然后重新作$f:G\to\mathbb{R}^\omega$，
将$x=(x_n)\in[0,1]^\omega$映到$(y_n)$，这里$y_{2n}=\frac{1}{d(x,F_n)}$而$y_{2n+1}=x_n$。

显然$f$是连续的单射，我们主要验证$f(G)$是闭集和$f$是开映射：
若有一收敛列$f(x^n)=y^n\to y\in\mathbb{R}^\omega$，
查考奇分量即见存在$x=\mathrm{lim}_{n}x^n\in[0,1]^\omega$，查考偶分量即见$d(x,F_n)\not=0$，
这说明$x\in G$。最后$f(x)=y$顺理成章。
:::

::: remark*
这个编码很有趣。
:::

这各式各样的嵌入都立刻指出，Polish空间的基数不可能超过$\beth_1\times\aleph_0=\beth_1$；
我们还可以宣称，其实所有可分的连通空间都这么大，甚至无需假定其完备性。

::: theorem
可分连通度量空间的基数是$\beth_1$。
:::

::: proof
我们先证明它的基数不大于$\beth_1$。我们仍设度量空间$X$的稠密可数子集为$Q$。
显然，在每个$x\in X$处都有可数局部基$B(x)=\{B_{\frac1{2^n}}(x)|n\in\omega\}$，
于是我们考虑$Q(x)=\{Q_{n}(x)=Q\cap B_{\frac1{2^n}}(x)|n\in\omega\}$，它是$Q$的子集的可数族。
显然$x\not=y\to Q(x)\not=Q(y)$，而简单地计数可知它们共有不超过$\beth_1$个，
故空间的基数不超过$\beth_1$。

现在，我们再用连通性指出它的基数不小于$\beth_1$。
任选一个点$x$，
我们宣称存在一个$\delta\in\mathbb{R}$使得
$\forall \epsilon\in(0,\delta)\exists x_\epsilon(d(x,x_\epsilon)=\epsilon)$，
则由显然的它们两两不同我们就至少选出了$\beth_1$个点。
反证，如果存在$\epsilon<\delta$使得不存在$x_\epsilon$，显然$B_\epsilon(x)$就成为一个开闭集，
这与连通性直接矛盾。
:::

取消连通，代之以不可数，我们有相同的结论。
不过其证明需要别的东西，我们把这个定理搬到[完美性质](@sec:完美性质)一节。

此外，作为强化的度量空间，Polish空间的连续函数空间也有可称道的性质。

::: theorem
若$X$紧致可度量化，而$Y$是Polish空间，则$\mathcal{C}(X,Y)$在一致度量拓扑下也是Polish空间。
:::

::: proof
@cor:函数空间的完备性 已经指出一致度量的完备性，我们只要构造可数稠密集来见证可分性。
记$X$的度量为$d_X$，$Y$的度量为$d_Y$。先做一个
\[
C_{m,n}=\{f\in\mathcal{C}(X,Y)|\forall x\in X\forall y\in Y(d_X(x,y)<\frac{1}{m}\to d_Y(f(x),f(y))<\frac{1}{n})\}
\]
它自己还不一定可数，因此我们还要调整。

由$X$紧致得到完全有界，对每个$m$我们取$X$的以$\frac{1}{m}$半径的开球构成的有限覆盖，
把球心设为有限点集$X_m=\{x_m^i|i<k_m\}\subseteq X$，再记$Y$的稠密可数集为$Q$。

我们列举全体$Q$的具有$k_m$个点的子集，它们显然只有可列个，
于是做编号$\{Q_n=\{q_n^i|i<k_m\}|n\in\omega\}$。
现在，我们对每个$Q_n$挑选一个$g\in C_{m,n}$使得$g(x_m^i)=q_n^i$，一共挑出可列个$g$，
我们把它们收集起来得到可列集$D_{m,n}\subseteq C(m,n)$。

现在，任给$f\in C_{m,n}$和$\epsilon>0$，
对每个$x_m^i$显然$B_{\epsilon}(x_m^i)\cap Q\not=\varnothing$，于是我们总可以取出对应的$q_m^i$，
然后取到对应的$g\in D_{m,n}$，这时必然有$d_Y(f(x_m^i),g(x_m^i))<\epsilon$。

我们证明$D=\bigcup_{m,n}D_{m,n}$就是$\mathcal{C}(X,Y)$的可数稠密集。
连续性指出$\forall f\forall\epsilon$我们都可以在取$n>\frac{3}{\epsilon}$后找到$m$使得
$f\in C_{m,n}$，现在我们用上面的论述找一个$g\in D_{m,n}$使得$d_Y(f(x_m^i),g(x_m^i))<\frac{1}{n}$，
不难得到$\forall x\in X(d_Y(f(x),g(x))<\epsilon)$，换言之在一致度量下也有$\rho(f,g)<\epsilon$。
:::

由于在[初等描述集合论](@sec:初等描述集合论)一章中我们还会无数次地与Polish空间再会，
这里就不过多讨论了。
