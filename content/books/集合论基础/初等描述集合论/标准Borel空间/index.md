---
title: 标准Borel空间
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
## 可测函数

这一小节，我们来对一般的可测空间之间的函数做像对拓扑空间曾做的论述。此前，我们已经知道$\sigma$代数可以由集族生成，而可测空间的结构自然遗传给出子可测空间。

::: definition [可测函数]
对两个可测空间$(X,\mathcal{S})$与$(Y,\mathcal{A})$之间的函数$f:X\to Y$，若$\forall A\in\mathcal{A}(f^{-1}(A)\in\mathcal{S})$，则称$f$是可测函数。

如果双射$f:X\to Y$满足$f$与$f^{-1}$均可测，则称$f$见证一个可测同构。如果$f$仅仅是单射，则称$f$见证一个可测嵌入。
:::

我们现在重点关注积可测空间。

::: definition
考虑一族可测空间$(X_i,\mathcal{S}_i)$，指标$i\in I$。

如果有一族函数$f_i:Y\to X_i$，则在$Y$上由$\{f^{-1}_i(S)|S\in\mathcal{S}_i\}$生成的$\sigma$代数是最小的使得每个$f_i$都可测的$\sigma$代数，我们称之为$\{f_i|i\in I\}$在$Y$上生成的$\sigma$代数。

特别的，在$\prod_{i}X_i$装配上投射函数$\pi_i:x\mapsto x(i)$生成的$\sigma$代数形成的可测空间称为积可测空间。
:::

对于一般可测空间，我们最想关注的无非是能不能将它同构为一个装配Borel集族的拓扑空间变成的可测空间，而其中最高贵的无疑是波兰的拓扑空间变成的可测空间。

::: definition
如果可测空间$(X,\mathcal{S})$可测同构于一个$(Y,\mathsf{B}(Y))$，这里$Y$是个波兰空间，则称$X$是标准Borel空间。
:::

::: remark*
它显然也等价于存在$X$上的一个波兰空间的结构$(X,\tau)$使得它生成的Borel集族恰好是$\mathcal{S}$。
:::

我们先考虑弱一点的刻画，例如可分度量空间。

::: theorem
对于可测空间$(X,\mathcal{S})$，以下论述等价。

1. 存在可分度量空间$Y$，$(X,\mathcal{S})$与$(Y,\mathsf{B}(Y))$可测同构。

2. 存在可分度量空间$Y\subseteq\mathcal{C}$，$(X,\mathcal{S})$与$(Y,\mathsf{B}(Y))$可测同构。

3. $\mathcal{S}$由一个可数的集族生成，且分离点，即$x\not=y\in X\to\exists S\in\mathcal{S}(x\in S\wedge y\not\in S)$。

:::

::: proof
$2\to 1\to 3$显然，所以只需证明$3\to 2$。我们假定$\mathcal{S}$由可数集族$\{A_n\}$生成，我们做嵌入$f:X\to\mathcal{C},x\mapsto x_n$，这里$x_n$在$x\in A_n$时取$1$，否则取$0$。它显然可测，且由于$\mathcal{S}$分离点，它还是单射。现在$Y=f(X)\subseteq\mathcal{C}$就是我们所需的子空间。
:::

可数生成的$\sigma$代数有一个重要的特征。

::: definition
可测空间$(X,\mathcal{S})$中的可测集$A$称作一个原子，若它的非空真子集均不可测。若$X$是它的全体原子的并，则称它是原子化的。
:::

::: theorem
可数生成的可测空间是原子化的。
:::

::: proof
我们来看上面刻画中分离点这一要求的意义。

**定理。** 假定可测空间$(X,\mathcal{S})$由$\mathcal{G}$生成，则两点被$\mathcal{G}$分离当且仅当它们被$\mathcal{S}$分离。换言之，任给两个$x,y\in X$，$\forall G\in\mathcal{G}(x\in G\leftrightarrow y\in G)$当且仅当$\forall S\in\mathcal{S}(x\in S\leftrightarrow y\in S)$。

**证明。** 当显然；仅当只要注意$\mathcal{B}=\{A\subseteq X|x\in A\leftrightarrow y\in A\}$是一个包含$\mathcal{G}$的$\sigma$代数，从而必须也包含$\mathcal{S}$。

现在，我们固定$\mathcal{S}$被可数生成的一族证据$\{A_n\}$。对$B\subseteq X$，我们定义$\mathrm{0}(B)=B$和$\mathrm{1}(B)=X\backslash B$。对$\alpha\in\mathcal{C}$，我们做$A(\alpha)=\bigcap_{n}\alpha_n(A_n)$，显然它们都必须是可测集。又注意到$X$是全体$A(\alpha)$的并，我们自然想要证明每个$A(\alpha)$都是原子。

反证，如果某个$A(\alpha)$有非空可测真子集$S$，任选两个$x\in S$和$y\in A(\alpha)\backslash S$，它们在$\mathcal{S}$中分离，却不在$\mathcal{A}=\{A_n\}$中分离，矛盾。
:::

::: corollary
$\sigma$代数或者是有限的，或者具有不小于$\beth_1$的基数。
:::

现在，我们来给出标准Borel空间的刻画。

::: definition
两个拓扑空间是Borel同构的，若它们作为装配Borel代数的可测空间是可测同构的。类似地我们定义Borel嵌入。
:::

::: remark*
显然，Borel同构比同胚要求更弱。
:::

::: theorem
对可分度量空间$X$，以下条件等价：

1. $X$连同其上的Borel代数是标准Borel空间。

2. $X$连同其上的Borel代数可测同构于一个Polish空间中的一个Borel集。

3. $X$同胚于一个Polish空间中的一个Borel集。

4. $X$在它的完备化中是Borel集。

:::

::: proof
$4\to 3\to 1\to 2$是显然的，我们只需证明$2\to 4$。

**定理（Kuratowski）。** 可测空间$X$的子空间$Z$到Polish空间$Y$的可测函数$f:Z\to Y$可以提升为全局可测函数$f^*:X\to Y$。

**证明。** 显然只需把定义域扩展到一个可测集$Z^*\subseteq X$上。考虑$Y$的可数基$V_n$，由定义存在$X$的可测集$B_n$满足$f^{-1}(V_n)=Z\cap B_n$。令$Z^*=\{x\in X|\exists y\in Y\forall n(x\in B_n\leftrightarrow y\in V_n)\}$，然后做$f^*:Z^*\to Y,x\mapsto y$，这里$\{y\}=\bigcap_{n:x\in B_n}V_n$。

我们只验证最困难的$Z^*$可测。定义谓词$C(k,l,m,n):=\mathrm{Cl}(V_l)\subseteq V_n\cap V_m\wedge \mathrm{diam}V_l<\frac{1}{k+1}$和$D(m,n):=V_m\subseteq V_n$，我们注意到$x\in Z^*$正是以下句子：$\exists n(x\in B_n)\wedge$
$\forall k\forall n\forall m(x\in B_n\cap B_m\to\exists l(x\in B_l\wedge C(k,l,m,n))\wedge$
$\forall n\forall m(x\in B_m\wedge D(m,n)\to x\in B_n))$，简单的翻译指出$Z^*$可测。

**推论。** 给定波兰空间$X,Y$的子空间$A,B$之间的Borel同构$f:A\to B$，存在两个Borel集$A^*\supseteq A$和$B^*\supseteq B$，$f^*:A^*\to B^*$是$f$延拓出的Borel同构。

**证明。** 定理给出$f$的延拓$g:A'\to Y$与$f^{-1}$的延拓$h:B'\to X$，这里$A'\supseteq A$和$B'\supseteq B$是俩可测集。我们考虑$h^T=\{(x,y)\in X\times Y|(y,x)\in h\}$与$g\subseteq X\times Y$的交集$G\subseteq X\times Y$，令$A^*=G_X=\{x\in X|\exists y((x,y)\in G)\}$和$B^*=G_Y$。

假定我们已知$f:X\to Y\subseteq Z$把$X$Borel同构为Polish空间$Z$中的Borel集$Y$。如果我们可以把$f$提升为一个Borel同构$g:X'\to Y'$，这里$X'$是$X$的完备化的一个Borel集，则$X=g^{-1}(Y)$是$X'$的Borel集，自然也就是$X$的完备化的一个Borel集了。
:::

## Baire层级

这一节，我们来考虑Borel层级对应到函数上给出的Baire层级。

::: definition [Borel可测函数]
对函数$f:X\to Y$，若对每个开集$U\subseteq Y$都有$f^{-1}(U)\in\Sigma_{\alpha}^0(X)$，则称$f$是$\Sigma_{\alpha}^0$可测函数。

全体$\Sigma_{\alpha}^0$可测函数（$\alpha$取遍$\omega_1$）称为Borel可测函数。
:::

::: theorem
Borel可测函数就是把拓扑空间当成带对应Borel集族的可测空间后得到的可测函数。
:::

::: proof
这是因为开集族有可数基，可数个可数序数以某个可数序数为上确界。
:::

这个定义直截了当，但我们另有构造。

::: definition [Baire函数类]
若$f$是$\Sigma_2^0$可测函数，则称$f$是$1$类Baire函数。我们接着递归地定义$\alpha$类Baire函数：

1. $\alpha+1$类Baire函数是全体可以被一列$f_n$点点收敛到的函数，这些$f_n$都是$\alpha$类Baire函数。

2. $\alpha$类Baire函数是全体可以被一列$f_n$点点收敛到的函数，这些$f_n$每一个都是$\beta_n$类Baire函数，每个$\beta_n$都小于$\alpha$，这里$\alpha$是极限序数。

全体$\alpha$类Baire函数的集记为$\mathcal{B}_\alpha(X,Y)$。
:::

现在，我们指出这两个函数类其实可以合并在一起。

::: theorem [Lebesgue,Hausdorff,Banach]
若$X$是度量空间，$Y$是局部紧可分度量空间，则$f$是$\Sigma_{\alpha+1}^0$可测函数当且仅当$f\in\mathcal{B}_{\alpha}(X,Y)$，这里$\alpha\leq 1$。
:::

::: proof
对$\alpha$归纳，奠基的$\alpha=1$就是定义。现假定对$\beta<\alpha$均已证实。

仅当是简单的。如果$f$被一列$f_n$点点收敛到，这些$f_n$均在$\mathcal{B}_{\beta_n}(X,Y)$之中，$\beta_n<\alpha$。对任意开集$U\subseteq Y$，由于$Y$可分，存在一列闭球$B_m$使得$U=\bigcup_{m}B_m$。现在$f^{-1}(U)=\bigcup_{m,n}\bigcap_{k\geq n} f_k^{-1}(B_m)$，而$f_K^{-1}(B_m)\in\Pi_{\beta_n+1}^0\subseteq\Pi_{\alpha}^0$，因此$f^{-1}(U)\in\Sigma_{\alpha+1}^0$。

当则是相当不简单的。我们先考虑$Y$很简单的情况。

若$Y=\{0,1\}$，则$f:X\to Y$其实就是一个集合$A=f^{-1}(\{1\})\subseteq X$的特征函数$\chi_A$。$f$是$\alpha+1$类Borel可测函数当且仅当$A\in\Delta_{\alpha+1}^0$，我们分$\alpha=\beta+1$与$\alpha$是极限序数两个情况讨论。若$\alpha=\beta+1$，我们知道$A$一定是一列$A_n\in\Delta_{\beta+1}^0$的极限，因而$\chi_A=\lim_n\chi_{A_n}$。若$\alpha$是极限序数，则$A$是一列$A_n\in\Delta_{\beta_n}^0$的极限，$\beta_n<\alpha$，我们继续有$\chi_A=\lim_n\chi_{A_n}$。

现在我们考虑$Y$是有限集$n$的情况。我们对$n$归纳，每一次都只需要考虑$f:X\to n$对应的$A=f^{-1}(\{n-1\})$，具体细节和上面一样。

我们来建立一个引理。

**引理。** 如果$f_n$点点收敛到$f$，$g_n$点点收敛到$g$，且$d(f,g)\leq a$，则存在$g_n'$点点收敛到$g$，满足$d(f_n,g_n)\leq a$。

**证明。** $g_n'$在$d(f_n(x),g_n(x))\leq a$时取$g_n$，在别的时候取$f_n$。

现在我们考虑一般的$Y$。注意到局部紧可以单点紧化，且紧致化后对应的提升$\bar{f}:X\to Y\cup\{\infty\}=f:X\to Y$的层级并不改变，我们不妨假定$Y$就是紧致的，因而$Y$上有一个完全有界完备度量$d$。对每个$k$，完全有界性指出存在有限点集$Y_k=\{y_k^i|i\in n_k\in\omega\}$，满足$\{B_{2^{-k}}(y_k^i)|i\in n_k\}$覆盖整个$Y$。我们再不妨要求$Y_k\subseteq Y_{k+1}$。现在，$f$是$\alpha+1$类Borel可测函数指出$f^{-1}(B_{2^{-k}}(y_k^i))\in\Sigma_{\alpha+1}^0(X)$，而由开球们并起来覆盖$Y$我们知道这些$\Sigma_{\alpha+1}^0(X)$集覆盖$X$，由它们补集的分离性质我们知道存在对应的$A_k^i\in\Delta_{\alpha+1}^0(X)$，满足$A_k^i\subseteq f^{-1}(B_{2^{-k}}(y_k^i))$且$X=\bigcup_{i\in n_k}A_k^i$。我们取$f^k:X\to Y_k,x\mapsto y_i\leftrightarrow x\in A_k^i$，它显然还是$\Sigma_{\alpha+1}^0$可测的。上面$Y$有限时的证明现在指出这每个$f^k$都被一列$f_n^k$点点收敛到，这$f_n^k\in\mathcal{B}_{\beta_{n,k}}(X,Y)$，其中$\beta_{n,k}<\alpha$。由$d(f,f^k)\leq 2^{-k}$知$d(f^k,f^{k+1})\leq 2^{1-k}$，因此不妨令$d(f_n^k,f_n^{k+1})\leq 2^{1-k}$（这里用到引理），我们取$f_k=f^k_k$即得一列点点收敛到$f$的函数。
:::

但是，$\Sigma_1^0$可测函数，也就是连续函数，并没有对应的$0$类Baire函数的概念，这是因为以上假定还不够。

::: theorem [Lebesgue,Hausdorff,Banach]
若$X$和$Y$是可分度量空间，则$X$零维或$Y=\mathbb{R}$时，$\Sigma_2^0$可测函数由一列连续函数点点收敛到。
:::

::: proof
$X$零维时的证明和上一个差不多，我们只来证明$Y=\mathbb{R}$的情况。

**引理。** $A\in\Delta_2^0$，则$\chi_A$被一列连续函数点点收敛到。

**证明。** 假定$A=\cup_n F_n$是一列递升闭集的并，$X\backslash A=\cup_n H_n$也是一列递升闭集的并，则由Urysohn引理存在连续函数$h_n:X\to[0,1]$，它在$F_n$上取$1$，在$H_n$上取$0$。这列$h_n$点点收敛到$\chi_A$。

**引理。** 若$p_n:X\to\mathbb{R}$都是连续函数的点态极限，它们一致收敛到$p$，则$p$也是连续函数的点态极限。

**证明。** 我们通过做差可以不妨假定$\forall x(p_n(x)\leq 2^{-n})$和$p=\sum_n p_n$。我们假定$p_n^i$收敛到$p_n$，且不妨假定$\forall x(p_n^i(x)\leq 2^{-n})$。令$p^i=\sum_n p_n^i$，它显然是个连续函数，我们证明$p^i$点点收敛到$p$即可。

现在，我们把$f\in\mathcal{B}_1(X,\mathbb{R})$的$\mathbb{R}$同胚到$(0,1)$，显然只需证明对应的提升$f\in\mathcal{B}_1(X,(0,1))$被一列连续函数点点收敛到。对$N\geq 2$，取$A_N^i=f^{-1}((\frac{i}{N},\frac{i+2}{N}))$，这里$i\in N-1$，则$A_N^i\in\Sigma_2^0$，且$\bigcup_{i\in N-1}A_N^i=X$。我们继续对它们的补集用分离性质，得到$B_N^i\subseteq A_N^i$且$B_N^i\in\Delta_2^0$，$X=\bigcup_{i\in N-1}B_N^i$。现在$g_N=\sum_{i\in N-1}\frac{i}{N}\chi_{B_N^i}$一致收敛到$f$，运用上面两个引理证毕。
:::

::: remark*
仿制这个证明可以得出$Y=\mathbb{R}^n$和$Y=(a,b)\subseteq\mathbb{R}$时相同定理的证明。
:::

我们已知，逐点收敛将把层级$+1$；接下来我们则证明，一致收敛不改变层级。

::: theorem
度量空间之间的一列一致收敛的$\alpha$类可测函数$\{f_n\}$仍收敛到$\alpha$类可测函数$f$。
:::

::: proof
由于一致收敛，我们不妨假设$d(f_n,f)\leq\frac1n$。这指出$x\in f^{-1}(F)\leftrightarrow x\in\bigcap_n f_n^{-1}(\mathrm{Cl}(B_{\frac1n}(F)))$，右边的开集$B_{\frac1n}(F)$是把$F$中每个点处的$\frac1n$半径开球并在一起所得的开集。这个观察又指出$f^{-1}(F)$是一列$f_n^{-1}(F_n)$的交，右边由定义是一列$\Pi_{\alpha}^0$集，因此$f^{-1}(F)$是$\Pi_\alpha^0$集。
:::

此外，为表完整，我们也证明以下$\alpha$类可测函数都可以被不同的$\alpha$类可测函数一致收敛到。

::: theorem
如果像空间可分，则度量空间之间的一致收敛的$\alpha$类可测函数$f:X\to Y$均可被一列$\alpha$类可测函数$\{f_n\}$一致收敛到，且$f_n(X)$均可数，其上的拓扑离散。
:::

::: proof
可分指出Lindelof，于是对任意$\epsilon$而言$Y$均可以变成可列个半径$\epsilon$的开球的并。我们指定一个$\epsilon$，让这可列个开球的球心排列为$\{y_n\}\subseteq Y$，然后考察两列集，一列是$A_k=\{x\in X||f(x)-y_k|\leq\epsilon\}$，一列是$B_k=\{x\in X||f(x)-y_k|\geq 2\epsilon\}$，显然$A_k\cap B_k=\varnothing$且均为$\Pi_{\alpha}^0(X)$集。运用分离性质，我们找一个$F_k\in\Delta_{\alpha}^0(X)$使得$A_k\subseteq F_k$且$F_k\cap B_k=\varnothing$，而$X=\bigcup_{k}A_k$也指出$X=\bigcup_k F_k$。我们令$g(x)=y_t$，这里$t$是最小的使得$x\in F_t$的指标。显然$g$是$\alpha$类可测函数。现在令$\epsilon=\frac1n$就给出$f_n$。
:::

::: remark*
这指出，$Y$可分时，对一列点点收敛的$\alpha$类可测函数$\{f_n\}$而言，它们收敛到的$f$仍然是$\alpha$类可测函数的充分但不必要条件是它们一致收敛。事实上，充要条件是$\forall\epsilon>0\exists n(\{x||f(x)-f_n(x)|<\epsilon\}\in\Sigma_\alpha^0(X))$。
:::

## Borel同构定理

这一小节，我们证明一个令人惊奇的定理，它指出标准Borel空间的理论某种意义下是完全范畴的。

::: theorem [Borel同构定理]
两个标准Borel空间是Borel同构的，当且仅当它们具有相同的基数。
:::

我们先建立一个重要的引理。

::: theorem [可测空间的Cantor-Bernstein定理]
如果$f:X\to Y$与$g:Y\to X$是可测嵌入，则$X$与$Y$可测同构。
:::

::: proof
Cantor-Bernstein定理构造的$h$此时恰好见证可测同构。
:::

::: remark*
拓扑空间并没有这种好事发生。
:::

我们都知道Polish空间的基数最多是$\beth_1$，所以标准Borel空间的基数最多是$\beth_1$。我们来分别讨论有限、可数和不可数的情况。

::: theorem
有限的标准Borel空间必Borel同构于某个$n\in\omega$，其上赋离散拓扑。
:::

::: proof
我们考虑任意Polish空间中的有限Borel集，显然它自己就是个闭集，它里面每个单点集当然也是闭集，所以它上面自然是离散拓扑，上面的全体Borel集就是它的幂集。
:::

::: theorem
可数的标准Borel空间必Borel同构于$\mathbb{N}$，其上赋离散拓扑。
:::

::: proof
我们知道可数波兰空间就是可数完美度量空间无交并一个可数开集，后者里面全都是孤立点，所以我们只需要考虑$\mathbb{Q}$无交并上$n$或者$\mathbb{N}$的情况，因为如果完美核是空的证明就已经完成了。

只需意识到可数拓扑空间的Borel层级只有前两层，而且整个Borel集族就是它的幂集，这个Borel同构仍然是显然的。
:::

::: theorem
不可数的标准Borel空间必Borel同构于$\mathcal{C}$。
:::

::: proof
这是整个Borel同构定理唯一不平凡的部分。我们先证明它Borel同构于$\mathcal{C}$的一个Borel子集。

**引理。** $[0,1]$与$\mathcal{C}$之间有Borel同构。

**证明。** 我们把$I$分成有理数部分和无理数部分，$\mathcal{C}$分成终常部分和不终常部分。有理数和终常部分都是可数的，随便指派一个双射；无理数和不终常部分通过二进制小数给出双射。把这两个双射拼在一起就可以了。

**推论。** $[0,1]^\omega$与$\mathcal{C}$之间有Borel同构。

**证明。** $[0,1]^\omega$与$\mathcal{C}^\omega$之间有Borel同构，但后者同胚于$\mathcal{C}$。

现在，不可数的标准Borel空间就是一个Polish空间的Borel子集，Polish空间可以嵌入$[0,1]^\omega$，因此Borel同构于一个$\mathcal{C}$的Borel集，因此标准Borel空间也在这个同构下变成$\mathcal{C}$的一个Borel集。换言之，它可以Borel嵌入到$\mathcal{C}$之中。

又由它不可数，它里面有一个$\mathcal{C}$的同胚像，因此$\mathcal{C}$Borel嵌入其中。由可测空间的Cantor-Bernstein定理，他俩Borel同构。
:::

我们介绍这个定理的一些应用。

::: theorem
无穷的标准Borel空间的Borel集族的基数均为$\beth_1$。
:::

::: proof
可数的标准Borel空间的Borel集族就是它的幂集，所以基数是$\beth_1$。不可数的标准Borel空间的Borel集族显然与$\mathcal{C}$的Borel集族等势，由定理也与$\mathbb{R}$的Borel集族等势，后者已知基数是$\beth_1$。
:::

::: theorem [Ramsey-Mackey]
如果有标准Borel空间$(X,\mathcal{S})$的Borel自同构$f:X\to X$，我们可以在$X$上取一个Polish空间的结构$\tau$，使得$\mathcal{S}=\mathsf{B}(\tau)$且$f$是$(X,\tau)$的自同胚。
:::

::: proof
如果这个空间有限或可数，直接令$\tau$为离散拓扑就好了，所以我们来考虑它不可数的情况，这时我们由Borel同构定理把$\mathcal{C}$的拓扑移动到$X$上，得到一个Polish空间$\tau_0$，且$\mathcal{S}=\mathsf{B}(\tau_0)$。

我们来进行可数次Borel坍塌。假定已有$\tau_n$，我们取其可数基$\{B_n^i|i\in\omega\}$，然后考虑可数个Borel集$D_n=\{f(B_n^i)|i\in\omega\}\cup\{f^{-1}(B_n^i)|i\in\omega\}$，我们熟知存在$\tau_n$的Polish加细$\tau_{n+1}$不改变Borel集族，且将$D_n$全部坍塌到$\Sigma_1^0$里。

现在用$\tau_n$生成$\tau=\tau_\infty$，它自然仍然是Polish空间，且不改变Borel集族，而由我们逐步加细的过程可知$f$是它的自同胚。
:::

## 扩张定理

我们在谈到Urysohn引理时提到过Tietz扩张引理，它允许我们把闭集上的连续函数延拓到全空间。我们现在介绍更多类似的扩张具备指定性质的函数的定义域的定理。

首先是一个简单的完备度量空间之间的定理，我们在Polish空间一节中已经证明过这个定理了。

::: theorem [Kuratowski]
若有度量空间$X$的子空间$A$到完备度量空间$Y$的连续函数$f$，则存在$X$中的$G_\delta$集$G$满足$A\subseteq G\subseteq\mathrm{Cl}(A)$，且我们可以将$f$的定义域延拓到$G$上。
:::

它有一个比较重要的应用。

::: theorem [Lavrentiev]
如果有完备度量空间$X$与$Y$的子空间$A$与$B$之间的同胚，则它可以延拓为$G_\delta$子空间之间的同胚。
:::

::: proof
假定$f:A\to B$是同胚，Kuratowski定理指出$f$可以延拓为$g:G\to Y$，而$f^{-1}$可以延拓为$h:H\to X$。我们把$h=\{(y,x)|x=h(y)\}\subseteq Y\times X$变成$h^T=\{(x,y)|x=h(y)\}\subseteq X\times Y$，则$g\cap h^T$就是我们所要的延拓的同胚函数。
:::

注意到$G_\delta$就是$\Pi_2^0$，而闭集就是$\Pi_1^0$，我们可以在Baire层级中的函数这样一般地进行延拓。

::: theorem [Kuratowski]
若有度量空间$X$的子空间$A$到完备度量空间$Y$的$\alpha$类可测函数$f$，则存在$X$中的$\Pi_{\alpha+1}$集$G$满足$A\subseteq G$，且我们可以将$f$的定义域延拓到$G$上而不增加其层级。

特别地，如果$A$自己就是$\Pi_{\alpha}^0$集，则$G$可以是整个$X$。如果我们允许延拓后的函数加深一层，则$G$也可以是整个$X$。
:::

::: proof
我们先讨论一般的情形。$\alpha=1$时上面已经证明过，我们现在对$\alpha>1$讨论。我们知道$\alpha$类可测函数$f:A\to Y$都被一列$\alpha$类可测函数$f_n:A\to Y$一致收敛到，且$f_n(A)$是可列集，其上的拓扑是离散拓扑，不妨列举为$f_n(A)=\{y_n^i|i\in\omega\}$。我们不妨要求$\forall n\forall k\forall x(|f_n(x)-f_{n+k}(x)|<\frac{1}{2^n})$。

对每个$\sigma\in\omega^{<\omega}=i_0 i_1...i_{m-1}$，我们令$B_\sigma=\bigcap_{i\in m}f_i^{-1}(y_i^{\sigma(i)})$。这是有限个$\Delta_\alpha^0(A)$集的交，因此也是$\Delta_\alpha^0(A)$集。

**断言。** 存在一列$\{C_{\sigma}|\sigma\in\omega^{<\omega}\}\subseteq\Delta_{\alpha}^0(X)$，使得$C_\sigma\cap A=B_\sigma$，且$\sigma_1\perp\sigma_2\to C_{\sigma_1}\cap C_{\sigma_2}=\varnothing$。

**证明。** 我们只能假定每个$B_\sigma\in\Delta_\alpha^0(A)$是由一个$D_\sigma\in\Sigma_\alpha^0(X)$交$A$得到的而不能假定$D_\sigma\in\Delta_\alpha^0(X)$，反例请读者自行构造。我们现在做$V_n=\bigcup_{\sigma:n\to\omega,\delta:k\to\omega,k\leq n,\sigma\perp\delta}(D_\sigma\cap D_\delta)$，然后对每个$\sigma$令$C_\sigma=D_\sigma\backslash V_{\mathrm{dom}(\sigma)}$。我们记$A_n=\bigcup_{\sigma:n\to\omega}C_\sigma$，也就是$\bigcup_{\sigma:n\to\omega}D_\sigma\backslash V_n$。

显然$A_n$是两个$\Sigma_{\alpha}^0(X)$集的差，因此是$\Delta_{\alpha+1}^0(X)$集。注意$C_\sigma=D_\sigma\cap A_{\mathrm{dom}\sigma}$，我们有$C_\sigma\in\Sigma_{\alpha}^0(A_{\mathrm{dom}\sigma})$，而$\sigma\perp\delta$指出$C_\sigma\cap C_\delta=\varnothing$，于是事实上有$C_\sigma\in\Delta_\alpha^0(A_{\mathrm{dom}\sigma})$。

最后，$\sigma\perp\delta\to A\cap D_\sigma\cap D_\delta=B_\sigma\cap B_\delta=\varnothing$，因此$A\cap V_n=\varnothing$，因此$A\cap C_\sigma=A\cap D_\sigma=B_\sigma$。

现在令$A^*=\bigcap_{n} A_n$，这里$A_n=\bigcup_{\sigma:n\to\omega}C_\sigma$，则$A^*\in\Pi_{\alpha+1}^0(X)$。显然我们只要把$f_n$延拓到$A_n$上，方法是对$x\in C_{\sigma}$令$f_n(x)=y_n^{\sigma(n)}$，现在它自然是$\alpha$类可测函数，我们只要验证$f_n$一致收敛，则它们一致收敛到$f$的延拓。

现在来讨论两个特殊情况。对$A\in\Pi_{\alpha}^0(X)$，不难得知$\bigcup_{\sigma:n\to\omega}B_\sigma=A$对每个$n$都成立，我们只要继续改进前面的断言。

**断言。** 此时，$\bigcup_{\sigma:n\to\omega}C_\sigma=X$对每个$n$都成立。

**证明。** 我们不需要像上面那样构造$C_\sigma$，因为我们可以直接运用分离性质。注意到条件事实上给出$B_\sigma=\bigcup_{k\in\omega}B_{\sigma\Box k}\subseteq\bigcup_{k\in\omega}D_{\sigma\Box k}$，这是一个$\Pi_{\alpha}^0(X)$包含于$\Sigma_{\alpha}^0$，因此存在$E_\sigma\in\Delta_{\alpha^0}$夹在它们中间。我们递归地定义$C_\sigma$如下：

1. $C=C_{\varnothing}=X$

2. 如果已经给定$\sigma:n\to\omega$，我们考虑最小的$l\in\omega$使得$B_{\sigma\Box l}\not=\varnothing$。我们令$n<l$时的$B_{\sigma\Box n}=\varnothing$，令$B_{\sigma\Box l}=(C_\sigma\cap D_{\sigma\Box l})\cup(C_\sigma\backslash E_\sigma)$，令$k>l$时的$C_{\sigma\Box k}=(C_\sigma\cap D_{\sigma\Box k})\backslash\bigcup_{m<k}(C_{\sigma\Box m})$。

验证所要性质不难。

于是$A^*=\bigcap_n A_n=X$，余下证明照旧。

对第二个特殊情况，只要先延拓到$\Pi_{\alpha+1}^0$集的$\alpha$类函数，当然也是$\alpha+1$类函数，由第一个特殊情况断言即得一个全空间的$\alpha+1$类函数。
:::

Lavrentiev定理也有类似的推广。

::: theorem [Kuratowski]
如果有完备度量空间$X$与$Y$的子空间$A$与$B$之间的Borel同构$f$，$f$是$\alpha$类可测函数，$f^{-1}$是$\beta$类可测函数，则$f$可以延拓为$\Pi_{\alpha+\beta+1}^0(X)$中的子空间到$\Pi_{\beta+\alpha+1}^0(Y)$中的子空间之间的Borel同构。
:::

::: proof
完全仿造Lavrentiev定理。
:::
