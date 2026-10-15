---
title: Borel集
---

首先，我们要定义一种类似于拓扑空间的开集族一样的集族，它在测度论中同样处于基础地位。

::: definition [$\sigma$代数与可测空间]
称集合$X$上的子集族$\mathcal{A}\subseteq\wp (X)$是一个$\sigma$代数，若它满足：

1. $\varnothing\in\mathcal{A}$

2. $A\in\mathcal{A}\rightarrow X\backslash A\in\mathcal{A}$

3. $\{A_n|n\in\omega\}\subseteq\mathcal{A}\rightarrow \bigcup_{n\in\omega}A_n\in\mathcal{A}$

一个$X$配合其上一个指定的$\sigma$代数$\mathcal{S}$称作一个可测空间。
:::

::: remark*
我们先不考虑测是什么东西，先来研究这个$\sigma$代数自己的结构。
:::

## Borel层级

::: theorem
任给集族$\mathcal{A}\subseteq\wp (X)$，存在一个包含意义下最小的$\sigma$代数包含$\mathcal{A}$，
我们称之为$\mathcal{A}$生成的$\sigma$代数。
:::

::: proof
显然只要证明$\sigma$代数的任意交仍是$\sigma$代数，逐条定义验证即可。
:::

::: definition [Borel集]
由一个拓扑空间的开集族生成的$\sigma$代数中的全体集称作这个拓扑空间上的Borel集。
全体Borel集通常记为$\mathsf{B}(X,\tau)$，不引发歧义时也记为$\mathsf{B}(X)$或干脆记$\mathsf{B}$。
:::

生成是一种自上而下的定义方式，我们只能肯定它存在，但是没办法知道里面每个对象具体长成什么样子。
因此，我们另外考虑一种方法，从下而上地构造出全体Borel集。

::: definition [$\backsim$，$\sigma$与$\delta$]
对一个集合族$\mathcal{A}\subseteq\wp (X)$，我们定义三个操作：

1. $\mathcal{A}_\backsim=\{X\backslash A|A\in\mathcal{A}\}$

2. $\mathcal{A}_\sigma=\{\bigcup_{n\in\omega}A_n|A_n\in\mathcal{A}\}$

3. $\mathcal{A}_\delta=\{\bigcap_{n\in\omega}A_n|A_n\in\mathcal{A}\}$

在不方便的时候，也可能将这些符号从下标移到$\mathcal{A}$的前面。
:::

::: theorem [Borel Hierarchy]
我们定义开集族为$\Sigma_1^0$，闭集族为$\Pi_1^0=\backsim\Sigma_1^0$。
对全体至多可数序数$\alpha<\omega_1$进行归纳定义：

1. $\Sigma_{\alpha+1}^0=(\Pi_{\alpha})_\sigma$

2. $\Sigma_{\alpha}^0=(\bigcup_{\beta<\alpha}\Pi_\beta^0)_\sigma$，这里$\alpha$是极限序数

3. $\Pi_{\alpha}^0=(\Sigma_\alpha^0)_\backsim$

额外定义$\Delta_\alpha^0=\Sigma_\alpha^0\cap\Pi_\alpha^0$。

则$\mathsf{B}=\bigcup_{\alpha<\omega_1}\Sigma_\alpha^0$。
:::

::: remark*
这里，我们第一次用$\omega_1$作为递归构造的指标。今后我们还会经历很多次这种操作。
:::

::: proof
由$\sigma$代数的定义，显然$\mathsf{B}\supseteq\bigcup_{\alpha<\omega_1}\Sigma_\alpha^0$，
我们只要再证明$\bigcup_{\alpha<\omega_1}\Sigma_\alpha^0$本身就是个$\sigma$代数，
而这只要注意到可数个可数序数一定有一个可数序数作为上界，
且$\Pi_{\alpha}^0\subseteq\Sigma_{\alpha+1}^0$。
:::

::: corollary
$\mathsf{B}=\bigcup_{\alpha<\omega_1}\Sigma_\alpha^0=\bigcup_{\alpha<\omega_1}\Pi_\alpha^0=\bigcup_{\alpha<\omega_1}\Delta_\alpha^0$
:::

我们先来看一些关于Borel层级显然的性质叙述。

::: theorem
$\Sigma$、$\Delta$和$\Pi$均对子空间继承和连续原像保持。
:::

::: proof
逐层归纳显然。
:::

当然，我们会质疑$\omega_1$可不可以改进为更小的序数，
换言之$\Sigma_{\alpha}$构成的包含层级会不会坍塌，答案当然是否定的。

::: theorem {@thm:borel-hierarchy-proper}
$\Sigma_{\alpha}^0\not=\Pi_{\alpha}^0$对不可数Polish空间总是成立。
:::

我们需要一个辅助概念。

::: definition [泛在集]
对每个由某种规则生成的集族$\Gamma(X)\subseteq\wp (X)$，
我们称$\mathcal{U}\subseteq Y\times X$是一个$\Gamma(X)$的$Y$泛在集（Universal Set），
若$\mathcal{U}\in\Gamma(Y\times X)$且$\Gamma(X)=\{\mathcal{U}_y|y\in Y\}$，
这里$\mathcal{U}_y=\{x\in X|(x,y)\in\mathcal{U}\}$是切片。
:::

简略地说，泛在集将集族$\Gamma(X)$的全部子集用$Y$中元素作为编码收集在了一起。
我们现在需要一个编码表，而以下定理指出$\mathcal{C}$可以承担这一任务。

::: theorem {@thm:borel-universal-set}
任何Polish空间中的$\Sigma_\xi^0(X)$与$\Pi_\xi^0$均有$\mathcal{C}$泛在集$\mathcal{U}_\xi$与
$\mathcal{V}_\xi$。
:::

::: proof
显然要对$\xi$进行归纳。我们默认所提到的泛在集都是$\mathcal{C}$泛在集。

1. 对$\xi=1$，我们来考虑$\Sigma_1^0(X)$，也就是$X$的开集族对应的泛在集。
   取$X$的一组可数基$V_n$，
   我们令$(y,x)\in\mathcal{U}_1\subseteq\mathcal{C}\times X$当且仅当$x\in\bigcup_{n:y(n)=0}V_n$。
   换言之，我们用$\mathcal{C}$把每个开集的基分解记录下来。

2. 显然，$\mathcal{U}_\xi$的补集就是$\mathcal{V}_\xi$。

3. 若对所有$\eta<\xi$均已存在$\mathcal{V}_\xi$，
   由$\xi$可数知存在一列单调不减的$\eta_n$使得
   $\mathrm{sup}_{n}(\eta_n+1)=\xi$（注意这个陈述同时囊括了极限序数与非极限序数）。
   考虑$<,>:\omega\times\omega\to\omega,<n,m>=2^n(2m+1)-1$给出的双射，
   我们用它给出同胚$f:\mathcal{C}^\omega\to\mathcal{C},(y_n)\mapsto y:y(<n,m>)=y_n(m)$，
   然后就可令
   $\mathcal{U}_\xi=\{(y,x)\in\mathcal{C}\times X|\exists n((f^{-1}(y)(n),x)\in\mathcal{V}_{\eta_n})\}$。
:::

::: remark*
这里用$\mathcal{N}$进行论证也是可以的，
我们只要把$y(n)=0$当且仅当第$n$个基在开集中变成$y(n)$记录第$n$个在开集中的基的标号，
然后不妨要求$V_0=\varnothing$。
:::

::: proof [@thm:borel-hierarchy-proper 的证明]
现在，由于$X$不可数，我们有嵌入，因而不妨设有包含$\mathcal{C}\subseteq X$。
反证，若存在$\Sigma_{\alpha}^0(X)=\Pi_{\alpha}^0(X)$，
限制到子空间上显然就有$\Sigma_{\alpha}^0(\mathcal{C})=\Pi_{\alpha}^0(\mathcal{C})$，
于是我们来考察对应的$\Sigma_\alpha^0(\mathcal{C})$的$\mathcal{C}$泛在集
$\mathcal{U}_\alpha\subseteq\mathcal{C}\times\mathcal{C}$，
取$R=\{y\in\mathcal{C}|(y,y)\in\mathcal{U}_\alpha\}$，由于$y\mapsto(y,y)$显然是嵌入，
这个$R$作为$\mathcal{U}_\alpha\in\Sigma_\alpha^0(\mathcal{C}\times\mathcal{C})$的逆像应当有
$R\in\Sigma_\alpha^0(\mathcal{C})$，于是亦有$R\in\Pi_\alpha^0(\mathcal{C})$，
换言之$\mathcal{C}\backslash R\in\Sigma_\alpha^0(\mathcal{C})$，
我们由万有集的定义知
$\exists x(\mathcal{C}\backslash R=\{y\in\mathcal{C}|(x,y)\in\mathcal{U}_\alpha\})$，
于是这个$x$就有
$x\in R\leftrightarrow (x,x)\in\mathcal{U}_\alpha\leftrightarrow x\in \mathcal{C}\backslash R$，
矛盾！
:::

::: remark*
不难意识到，我们做的事情就是对角线论证。因此，泛在集，或称万有集，也可以视作某种真谓词。
:::

然而，同样的对角线论证指出，$\Delta_\xi^0(X)$不存在任何$X$泛在集。

::: theorem
$\Delta_\xi^0(X)$不存在任何$X$泛在集。
:::

::: proof
假定存在$\mathcal{U}_\xi\in\Delta_\xi^0(X\times X)$是$\Delta_\xi^0(X)$的$X$泛在集。
取$R=\{x\in X|(x,x)\in\mathcal{U}_\xi\}$，同理它应当有$R\in\Delta_\xi^0(X)$，
然后自然亦有$X\backslash R\in\Delta_\xi^0(X)$，
于是存在$r$使得$X\backslash R=\{x\in X|(r,x)\in\mathcal{U}_\xi\}$，
于是$r\in R\leftrightarrow r\not\in R$，矛盾。
:::

此外，我们的$\mathcal{C}$泛在集其实可以换成任意的不可数Polish空间。

::: theorem
如果$X$是Polish空间，$Y$是不可数Polish空间，则存在$\Sigma_\xi^0(X)$的$Y$泛在集。
:::

::: proof
不可数Polish空间中有一个同胚于$\mathcal{C}$的子空间。
:::

我们可以证明，对可列并封闭（$\Sigma$）、
对可列交封闭（$\Pi$）与对取补封闭（$\Delta$）都是这些集族独特的性质。

::: theorem
以下命题成立：

$\Sigma_\xi^0$对取补和可列交不封闭。

$\Pi_\xi^0$对取补和可列并不封闭。

$\Delta_\xi^0$对可列交和可列并不封闭。
:::

::: proof
$\Delta_{\alpha}^0$真包含于互不包含的$\Sigma_{\alpha}^0$与$\Pi_\alpha^0$，
后二者又真包含于$\Delta_\beta^0$，这里$1\leq\alpha<\beta<\omega_1$。
:::

最后，作为学过集合论的人，显然我们想要考虑$\mathsf{B}$的基数是啥。我们有一个显然的观察。

::: theorem [Cantor]
$\mathbb{R}$的开集必然是至多可列个开区间的并集。
:::

::: proof
对每个点考虑在开集中包括它的最大开区间邻域，然后用$\mathbb{Q}$中取点的办法来证明至多可列。
:::

注意到$\{(r,s)\subseteq\mathbb{R}|r<s\in\mathbb{Q}\}$是$\mathbb{R}$的可数基，
上面的定理同时告诉我们开集与闭集都只有$\beth_1$个。我们进而不难观察到有以下定理。

::: theorem
$|\mathsf{B}(\mathbb{R})|=\beth(\aleph_0)$
:::

::: proof
$\beth_1^{\aleph_0}=\beth_1$，且$\beth_1\times\aleph_1=\beth_1$。
:::

这个说明依赖于我们上面提到的Borel分层，但是也有人绕过分层给出了初等证明，换言之直接进行了编码（DOI：
[10.1007/s10474-019-00986-7](https://doi.org/10.1007/s10474-019-00986-7)）。

## 结构性质

现在，我们仿造零维空间中的定理来讨论Borel层级中这些集族的结构性质。

::: definition
我们在空间$X$中对子集族$\Gamma$定义其对偶$\check{\Gamma}$为$\Gamma$中全体集的补集构成之集族，
再定义其模糊$\Delta=\Gamma\cap\check{\Gamma}$。我们进而对$\Gamma$考虑以下各性质。

1. 合理性（reasonable）：
$\forall \{A_n|n\in\omega\}\subseteq\wp (X)\\(\forall n(A_n\in\Gamma(X))\leftrightarrow A=\{(x,n)|x\in A_n\}\in\Gamma(X\times\omega))$

2. 分离性质（separation property）：
$\forall A,B\in\Gamma(A\cap B=\varnothing\to\exists C\in\Delta(A\subseteq C\wedge B\cap C=\varnothing))$

3. 增广分离性质（generalized separation property）：
$\forall\{A_n|n\in\omega\}\subseteq\Gamma(\bigcap_n A_n=\varnothing\to\exists\{B_n|n\in\omega\}\subseteq\Delta\\(A_n\subseteq B_n,\bigcap_n B_n=\varnothing))$

4. 归约性质（reduction property）：
$\forall A,B\in\Gamma\exists A^*,B^*\in\Gamma(A^*\subseteq A,B^*\subseteq B,A\cup B=A^*\cup B^*,A^*\cap B^*=\varnothing)$

5. 增广归约性质（generalized reduction property）：
$\forall\{A_n|n\in\omega\}\subseteq\Gamma\exists\{A_n^*|n\in\omega\}\subseteq\Gamma\\(A_n^*\subseteq A_n,\bigcup_{n}A_n=\bigcup_{n}A_n^*,A_n^*\cap A_m^*=\varnothing)$

6. 自然数归一性（number uniformization property）：
$\forall R\in\Gamma(X\times\omega)\exists R^*\in\Gamma(X\times\omega)\forall x\in X\\(\exists n\in\omega((x,n)\in R)\leftrightarrow \exists! n\in\omega((x,n)\in R^*))$

:::

我们已经知道以下结论。

::: theorem
零维空间中，$\Sigma_1^0$具有增广归约性质，$\Pi_1^0$具有增广分离性质。
:::

我们有以下成果。

::: theorem {@thm:borel-reduction}
度量空间中，对$1<\xi<\omega_1$，$\Sigma_\xi^0$具有增广归约性质且不具有分离性质，
$\Pi_\xi^0$具有增广分离性质而不具有归约性质。
:::

我们先来对一般的$\Gamma$建立一些性质，然后再运用它们来判断$\Sigma$与$\Pi$。

::: lemma {@lem:borel-reduction}
1. 如果$\Gamma$是合理的，则它具有增广归约性质当且仅当它具有自然数归一性。

2. 如果$\Gamma$具有增广归约性质，且对可数并封闭，则$\check{\Gamma}$具有增广分离性质。

3. 如果$\Gamma$保持连续逆像，且$\Gamma(\mathcal{C})$有$\mathcal{C}$泛在集，
   则$\Gamma$不可同时保有分离性和归约性。
:::

::: proof
$1\Rightarrow$：考虑$A\in\Gamma(X\times\mathcal{N})$，定义$A_n=\{x|(x,n)\in A\}$，
用增广归约性质可知存在$A_n^*$，然后收集为$A^*$即可。

$1\Leftarrow$：同上，$A_n$到$A$到$A^*$到$A_n^*$。

$2$：考虑补集显然。

$3$：
考虑$\Gamma(\mathcal{C})$的$\mathcal{C}$泛在集$\mathcal{U}\in\Gamma(\mathcal{C}\times\mathcal{C})$，
我们将$\mathcal{U}$分裂为一个泛在对：$(y,x)\in\mathcal{U}^0\leftrightarrow (y^0,x)\in\mathcal{U}$，
$(y,x)\in\mathcal{U}^1\leftrightarrow (y^1,x)\in\mathcal{U}$，这里$y^0(n)=y(2n)$而$y^1(n)=y(2n+1)$，
换言之我们把$y$按奇偶拆成两瓣。

由于这其实也是$\mathcal{C}^2\to\mathcal{C}$的连续函数，
$\mathcal{U}^0$与$\mathcal{U}^1$都是$\Gamma(\mathcal{C}\times\mathcal{C})$中的元素，
且只要有两个$A,B\in\Gamma(\mathcal{C})$就存在$y\in\mathcal{C}$满足$A=\{x|(y,x)\in\mathcal{U}^0\}$且
$B=\{x|(y,x)\in\mathcal{U}^1\}$。

若$\Gamma$既有分离性又有归约性，
令$\mathcal{U}^{0*}$与$\mathcal{U}^{1*}$归约$\mathcal{U}^0$与$\mathcal{U}^1$，
再要求$\mathcal{V}$分离$\mathcal{U}^{0*}$与$\mathcal{U}^{1*}$，
不难得到$\mathcal{V}$是$\Delta$的泛在集，矛盾。
:::

::: proof [@thm:borel-reduction 的证明]
现在，我们证明$\Sigma_\xi^0$具有自然数归一性即可。
对于$R\in\Sigma_{\xi}^0(X\times\omega)$，
$\xi>1$指出存在一列$R_i\in\Pi_{\xi_i}^0(X\times \omega)$使得$\xi_i<\xi$且$R=\bigcup_{i}R_i$。
注意到$(x,n)\in R\leftrightarrow\exists i(x,n)\in R_i$，
我们考虑$\omega\to\omega\times\omega$的双射$k=<k^0,k^1>\mapsto(k^0,k^1)$。
我们取$Q=\{(x,k)|(x,k^1)\in R_{k^0}\}$，
然后令$Q^*=\{(x,k)|(x,k)\in Q\wedge\forall l<k((x,l)\not\in Q)\}$，
最后还原出$R^*=\{(x,n)|\exists i((x,<i,n>)\in Q^*)\}$。

显然$R^*$归一$R$，只需验证$R^*\in\Sigma_{\xi}^0(X\times\omega)$。
又注意到$R^*=\bigcup_{n}R_i^*$，这些$R_i^*=\{(x,n)|(x,<i,n>)\in Q^*\}$，
只需证明$R_i^*\in\Sigma_{\xi}^0(X\times\omega)$。（此时并不能断言它们属于第$\xi_i$层！）

现在引用合理性，只需观察$Q_k^*=\{x|(x,k)\in Q^*\}$是否在$\Sigma_{\xi}^0(X)$中，
注意到它是有限个东西的交，
只需证明$Q_k=\{x|(x,k)\in Q\}$和$X\backslash Q_k$均属于$\Sigma_{\xi}^0(X)$，
换言之$Q_k\in\Delta_{\xi}^0(X)$，然而用合理性和$R_i$的位置可知$Q_k$一定在某个$\Pi_{\eta_k}^0$中，
这里$\eta_k<\xi$，于是证毕。
:::

作为这些性质的运用，我们证明关于$\Delta$的一个定理，首先引入一个常见的定义。

::: definition
给定一列集合$A_n\subseteq X$，我们定义这列集合的上下极限：

1. $\varlimsup_n A_n=\bigcap_n \bigcup_{m\geq n} A_m$

2. $\varliminf_n A_n=\bigcup_n \bigcap_{m\geq n} A_m$

若这两个集相等，则记为$\lim_n A_n=\varlimsup_n A_n=\varliminf_n A_n$。
:::

::: theorem [Kuratowski] {@thm:borel-kuratowski}
对$\xi>1$（在零维空间中对$\xi=1$亦成立），
$A\in\Delta_{\xi+1}^0$当且仅当$\exists \{A_n\}\subseteq\Delta_{\xi}^0(A=\lim_n A_n)$。

对于极限序数$\xi$，右侧可以改进为$\exists \{A_n\}\subseteq\bigcup_{\alpha<\xi}\Delta_{\alpha}^0$。
:::

::: proof
显然有当的方向，我们只证仅当的方向。
注意到零维空间中开集是可列个开闭集的并而闭集是可列个开闭集的交，
不难意识到$\xi=1$时单独的讨论没有必要。

对一般序数$\xi$，证明相对简单，不过需要意识到增广分离性质的一个推论，
它长得其实很像一款变形的$T_4$等价形式。
:::

::: lemma {@lem:borel-kuratowski-1}
对任意$1\leq\xi<\omega_1$若有$A\subseteq B$，这里$A\in\Pi_\xi^0$而$B\in\Sigma_\xi^0$，
则存在$C\in\Delta_\xi^0$满足$A\subseteq C\subseteq B$。
:::

::: proof [@thm:borel-kuratowski 的证明]
现在假定$A\in\Delta_{\xi+1}^0$，
我们显然知道存在一列$\{B_n\}\subseteq\Pi_{\xi}^0$与一列$\{C_n\}\subseteq\Sigma_{\xi}^0$，
满足$A=\bigcup_{n}B_n=\bigcap_{n}C_n$，且不妨假定它们均为单调增的集列。
于是$B_n\subseteq A\subseteq C_n$，
@lem:borel-kuratowski-1 指出存在$A_n\in\Delta_{\xi}^0$使得$B_n\subseteq A_n\subseteq C_n$。
验证$A=\lim_n A_n$是简单的。

对极限序数$\xi$，上面的论证只给出一列$\{A_n\}\subseteq\Delta_{\xi}^0$，
但我们要把这些集放到$\bigcup_{\alpha<\xi}\Delta_{\alpha}^0$里面去，
所以需要以下引理来精细地构造出我们想要的极限列。
:::

::: lemma {@lem:borel-kuratowski-2}
若$A=\bigcup_{n}\bigcap_{m}B_{n,m}=\bigcap_{n}\bigcup_{m}C_{n,m}$，
同时又有$\forall n(\bigcup_{m}C_{n+1,m}\subseteq\bigcup_{m}C_{n,m})$，
则令$A_n=\bigcup_{i<n}((\bigcap_{j<n}B_{i,j})\cap(\bigcup_{j<n}C_{i,j}))$，有$A=\lim_n A_n$。
:::

::: proof
一阶逻辑搬砖，细节留作练习。
:::

::: proof [@thm:borel-kuratowski 的证明]
将$A\in\Delta_{\xi+1}^0$拆出两层，然后用 @lem:borel-kuratowski-2，
注意$\alpha<\xi\to\alpha+1<\xi$和$\Sigma_{\alpha}^0\subseteq\Delta_{\alpha+1}^0$即可。
:::

## Borel坍塌

这一小节，我们来建立一些加细拓扑的定理，它允许我们把一些Borel集暂时地降到更前面的层级上，
换言之将Borel层级坍塌掉一部分。

::: theorem
对波兰空间$(X,\tau)$中的指定闭集$F$，记$\tau_F$为$\tau\cup\{U\cap F|U\in\tau\}$生成的拓扑，
则$(X,\tau_F)$同样是波兰空间，$F$在其中是开闭集，且$\mathsf{B}(\tau)=\mathsf{B}(\tau_F)$。
:::

::: proof
显然$\tau_F$就是由两部分拼起来的：一个是$F$上的子空间拓扑，一个是$X\backslash F$上的子空间拓扑；
这两个都是$G_\delta$集。
:::

::: theorem
给定波兰空间$(X,\tau)$上的一系列加细波兰空间结构$(X,\tau_n\supseteq\tau)$，
把它们并在一起以$\bigcup_{n}\tau_n$为子基生成一个新的拓扑结构$\tau_\infty$，则它亦为波兰空间，
且如果$\tau_n\subseteq\mathsf{B}(\tau)$，则$\mathsf{B}(\tau_\infty)=\mathsf{B}(\tau)$。
:::

::: proof
注意到$\varphi:(X,\tau_\infty)\to\prod_{n}(X,\tau_n),x\mapsto(x,x,...)$把$(X,\tau_\infty)$
嵌入为Polish空间的闭子空间，$(X,\tau_\infty)$因此必然是Polish空间。
如果$\tau_n\subseteq\mathsf{B}(\tau)$，我们对每个$\tau_n$选取可数基$\{U_n^i|i\in\omega\}$，
就得到$\tau_\infty$的可数子基$\{U_n^i|i,n\in\omega\}\subseteq\mathsf{B}(\tau)$，
这自然给出$\tau_\infty\subseteq\mathsf{B}(\tau)$。
:::

::: remark*
其实$\tau_n\subseteq\mathsf{B}(\tau)$是可以从已知条件中推出的，但其证明较为困难，我们此处省略。
:::

::: theorem
给定波兰空间$(X,\tau)$上的Borel集$A$，
我们可以加细这个波兰空间得到一个新的波兰空间$(X,\tau_A\supseteq\tau)$，$A$在$\tau_A$中是开闭集，
且$\mathsf{B}(\tau_A)=\mathsf{B}(\tau)$。
:::

::: proof
我们考虑满足这个条件的所有$X$的子集$A$构成的集族$\mathcal{S}$，
只需证明它是包含全体开集的$\sigma$代数。
本小节第一个定理指出它包含全体闭集且在取补操作下封闭，第二个定理指出它在可数并下封闭。
:::

::: theorem
给定波兰空间$(X,\tau)$上的一列集$A_n\in\Delta_\xi^0(X,\tau)$，
我们可以加细这个波兰空间得到一个新的波兰空间$(X,\tau'\supseteq\tau)$，
满足$\tau'\subseteq\Sigma_\xi^0$，$A_n$在$\tau'$中均为开闭集，
且$\mathsf{B}(\tau')=\mathsf{B}(\tau)$。
:::

::: proof
由此小节前两个定理，我们其实只需要对只有一个$A$的情况做证明。我们对$\xi$归纳。
$\xi=1$时显然我们都不需要加细这个拓扑。

$\xi=2$时，$A$和$X\backslash A$都是$G_\delta$集，仿造第一个定理的证明可以得到所需的加细。

$\xi$是极限序数时，$A=\bigcup_n A_n=\bigcap_n B_n$，$A_n,B_n\in\Delta_{\xi_n}^0(X,\tau)$，
$\xi_n<\xi$。
由归纳假设，$A_n$加细到$\tau_n^0$，$B_n$加细到$\tau_n^1$，
我们所要的$\tau'$由$\bigcup_n(\tau_n^0\cup\tau_n^1)$生成。

$\xi=\eta+1\leq 3$时，$A=\lim_n A_n$，$A_n\in\Delta_\eta^0(X,\tau)$，设这堆$A_n$加细为$\tau^*$，
对$(X,\tau^*)$引用$\xi=2$的情况加细得到$\tau'$。
:::

::: remark*
因此，对一个$A$和后继$\xi$我们可以要求$\tau'\subseteq\Delta_\xi^0$，
对一列$A_n$和$\xi>1$我们可以要求$\tau'$零维。
:::

## 差异层级

此外，我们也可以从$\Sigma_\alpha^0$绕开$\Pi_\alpha^0$来直接构造$\Delta_{\alpha+1}^0$，
在这里会再次产生一个层级结构。这一小节完全用于证明以下定理。

::: theorem [Hausdorff、Kuratowski：Difference Hierarchy] {@thm:borel-difference-hierarchy}
对$1\leq\alpha<\omega_1$，我们有：

$\Delta_{\alpha+1}^0=\bigcup_{1\leq\theta<\omega_1}D_{\theta}(\Sigma_\alpha^0)$，
这里$D_\theta$如下定义：

我们都知道序数$\theta$一定可以写成$\lambda+n$的形式，其中$\lambda$是极限序数而$n$是自然数。
我们用$n$的奇偶性来称呼$\theta$的奇偶性。

对于包含意义下单调增的集列$\{A_\eta|\eta<\theta\}$，
我们定义$x\in D_\theta(\{A_\eta|\eta<\theta\})$当且仅当$x\in\bigcup_{\eta<\theta}A_\eta$，
且最小满足$x\in A_\eta$的$\eta$与$\theta$具有相反的奇偶性。

对于$\Sigma_\alpha^0$，
我们定义
$D_\theta(\Sigma_\alpha^0)=\{D_\theta(\{A_\eta|\eta<\theta\})|\{A_\eta|\eta<\theta\}\subseteq\Sigma_\alpha^0\}$。
:::

我们先证明差异层级里这些层级和原有的Borel层级具有许多相同的性质。

::: theorem
$D_\theta(\Sigma_\alpha^0)$对子空间继承和连续原像保持。
:::

::: proof
对$\theta$归纳。
:::

::: theorem
$D_\theta(\Sigma_\alpha^0)\cup\check{D}_\theta(\Sigma_\alpha^0)\subseteq D_{\theta+1}(\Sigma_\alpha^0)$
:::

::: proof
我们证明$X\backslash D_\theta(\{A_\eta|\eta<\theta\})=D_{\theta+1}(\{A_\eta|\eta\leq\theta\})$，
这里$A_\theta=X$。对$\theta$归纳。
:::

::: theorem
$D_\theta(\Sigma_\alpha^0)\not=\check{D}_\theta(\Sigma_\alpha^0)$
:::

::: proof
显然我们还是要把$\mathcal{C}$泛在集给造出来，对$\theta$进行归纳。
由于$D_1(\Sigma_\alpha^0)=\Sigma_\alpha^0$，奠基是显然的。

不难意识到上一定理证明中的公式可以加强到
$D_{\theta+1}(\{A_\eta|\eta\leq\theta\})=A_\theta\backslash D_\theta(\{A_{\eta}|\eta<\theta\})$，
这指出了用$\theta$的泛在集和$\Sigma_\alpha^0$的泛在集编码得到$\theta+1$的泛在集的方法。

对于极限序数$\theta=\lim_i \theta_i$，
不难意识到$D_\theta$中的集恰好是全体递增的$D_{\theta_i}$中集的并，
这样我们就能用$\omega\times\omega\to\omega$的双射给出用每个$\theta_i$的泛在集编码$\theta$的泛在集。
:::

::: proof [@thm:borel-difference-hierarchy 的证明]
现在来看最后所要定理的证明。
不难证明$\bigcup_{1\leq\theta<\omega_1}D_\theta(\Sigma_\alpha^0)\subseteq\Delta_{\alpha+1}^0$，
所以我们只关心另一个方向要证明的$\supseteq$。我们先对$\alpha=1$证明这个包含。

我们先来用以下类似于取迭代导集的手法来给出$\Delta_2^0$的一个性质。
:::

::: definition [迭代边界集]
在波兰空间$X$中，指定子集$A$与闭集$F$，
定义$A\cap F$在$F$中的边界集为
$\partial_F(A)=\mathrm{Cl}(A\cap F)\cap\mathrm{Cl}((X\backslash A)\cap F)$。

用超穷递归定义子集$A$的迭代边界集如下：

1. $A_0^p=X$

2. $A_{\alpha+1}^p=\partial_{A_{\alpha}^p}(A)$

3. $A_{\alpha}^p=\bigcap_{\beta<\alpha}A_{\beta}^p$，这里$\alpha$是极限序数。

这给出一列递降闭集，因此存在$\theta<\omega_1$使得$A_\theta^p=A_{\theta+1}^p$，记为$A^p=A_\theta^p$，
同时记$\theta=\mathrm{pr}(A)$。
:::

::: theorem
若$A\in\Delta_2^0$，则$A^p=\varnothing$。
:::

::: proof
否则，$A^p$是不空波兰空间，$A\cap A^p\in\Delta_2^0(A^p)$，
且$A\cap A^p$在$A^p$中的边界集就是整个$A^p$，这与$A^p$是Baire空间矛盾。
:::

::: proof [@thm:borel-difference-hierarchy 的证明]
现在，对$\alpha=1$，
我们要证明$\Delta_2^0\subseteq\bigcup_{1\leq\theta<\omega_1}D_\theta(\Sigma_1^0)$。
对$A\in\Delta_2^0$，我们令$F_\eta=A_\eta^p$，$H_\eta=\mathrm{Cl}((X\backslash A)\cap F_\eta)$，
不难意识到$F_0\supseteq H_0\supseteq F_1\supseteq H_1\supseteq ...$是递降闭集列。
我们来证明$A=\bigcup_{\eta<\theta=\mathrm{pr}(A)<\omega_1}F_\eta\backslash H_\eta$。

如果$x\in A$，则存在$\eta$使得$x\in F_\eta\backslash F_{\eta+1}$，如果还有$x\in H_\eta$，
则$x\in \mathrm{Cl}((X\backslash A)\cap F_\eta)\cap A\cap F_\eta\subseteq F_{\eta+1}$矛盾，
因此$x\in F_\eta\backslash H_\eta$；反之，若存在$\eta$使得$x\in F_\eta\backslash H_\eta$，
则必然有$x\in A$，
因为$x\not\in A$会给出
$x\in (X\backslash A)\cap F_\eta\cap \mathrm{Cl}((X\backslash A)\cap F_\eta)\subseteq H_\eta$，
引起矛盾。

我们只要证明每个形如$\bigcup_{\eta<\theta}F_\eta\backslash H_\eta$的集都在
$\bigcup_{1\leq\theta<\omega_1}D_\theta(\Sigma_1^0)$中，
这里$F_0\supseteq H_0\supseteq F_1\supseteq H_1\supseteq ...$是递降闭集列。
这其实非常简单：假设$\theta=\lambda+n$，这是极限序数加自然数的形式；令$\theta^*=\lambda+2n$，
然后取集列$A_{\omega\times\xi+2k}=X\backslash F_{\omega\times\xi+k}$和
$A_{\omega\times\xi+2k+1}=X\backslash H_{\omega\times\xi+k}$，
就有$A=D_{\theta^*}(\{A_\xi|\xi<\theta^*\})$。

最后，我们说明$\alpha=1$的证明事实上适用于所有$\alpha$。
对$A\in\Delta_{\alpha+1}^0$，注意到$A=\lim_n A_n$，这里$A_n\in\Delta_\alpha^0$；
我们用上一节的定理把原本的拓扑$\tau$加细为$\tau'$，使得$A_n$全部变成开闭集，
于是$A$就成了$\Delta_2^0$集，由上知存在$\theta$使得$A\in D_\theta(\Sigma_1^0(X,\tau'))$，
而由我们加细的过程有$\Sigma_1^0(X,\tau')=\tau'\subseteq\Sigma_\alpha^0(X,\tau)$，
因此$A\in D_\theta(\Sigma_\alpha^0(X,\tau))$。
:::

::: remark*
对极限序数$\alpha$还有能用$\{\Delta_{\beta}|\beta<\alpha\}$构造$\Delta_\alpha$的手段，
但是Kechris没教我，所以我不会。
:::

值得注意的是，A. Louveau与J. Saint Raymond在1988年指出，
这些$D_\theta(\Sigma_\alpha^0)$也具有自然数归一性（DOI：
[10.4064/FM-131-3-223-243](https://doi.org/10.4064/FM-131-3-223-243)）。
