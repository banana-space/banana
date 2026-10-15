---
title: 基本概念
---
在有限群的Sylow定理学习中我们看到群作用是强有力的工具，
通过把群作用到某个集合上就足以反映出很多信息。
在环的结构理论中，任何一个含幺环$R$上的左$R$-模$M$就是环$R$的一个表示对象，
模本来就可以看成把环作用到某个Abel群上的产物。通过模论工具我们可以得到环的大量结构信息。
而接下来我们将介绍的群表示，它是把群线性地作用到线性空间上，当作用在有限维线性空间上时，
群表示会把每个群中元素对应到一个具体的矩阵，使得我们可以用线性代数的工具去认识群。

## 群的表示

::: definition [群的表示]
设$G$是群，$V$是域$\mathbb{k}$上线性空间，
称群同态$\rho:G\to GL(V)$是**群$G$在$V$上的一个$\mathbb{k}$-线性表示**，
简称为$G$在$\mathbb{k}$上的**表示**，
其中$GL(V)$表示$V$上可逆线性变换全体构成的群。
这里的线性空间$V$称为表示$\rho$的**表示空间**。
当$_{\mathbb{k}}V$是有限维空间时，
称表示$\rho$**有次数$\text{dim}_{\mathbb{k}}V$**，
这时也称$\rho$是$G$的**有限维表示**。
当$_{\mathbb{k}}V$作为线性空间维数不是有限时，$\rho$为$G$的**无限维表示**。
:::

有了群表示的概念，随之而来的第一个问题是其存在性问题。下面的例子给出一个平凡的表示。

::: example [平凡表示]
设$G$是群，$V$是域$\mathbb{k}$上线性空间，
我们总有平凡群同态$\rho:G\to GL(V),g\mapsto \text{id}_{V}$。
称该表示$\rho$为$G$的**平凡表示**。
:::

任给域$\mathbb{k}$上的代数$A$以及左$A$-模$M$，
$M$总有天然的$\mathbb{k}$-线性结构
并且我们都可以通过$a\in A$在$M$上决定的左乘变换给出$M$上的$\mathbb{k}$-线性变换。
现在我们把目光聚焦在群代数上的模的情形，把群的表示和群代数上的模联系起来。
我们马上会看到，有一个群表示本质上与有一个群代数上的模是一样的
（见[定理\ref{groupreandmodethm}]）。

::: example {@ghmodkggrep}
设$G$是群，$\mathbb{k}G$是群代数，
那么对任何群代数$\mathbb{k}G$上的左模$M$，$M$有自然的$\mathbb{k}$-线性结构，
即对每个$x\in M$与$c\in\mathbb{k}$，定义$cx=(c1_{G})x$。
并且每个$g$都给出了$M$上的可逆$\mathbb{k}$-线性变换
$\rho(g):M\to M,x\mapsto gx$，
因此我们得到映射$\rho:G\to GL(M),g\mapsto\rho(g)$，它明显是群同态，
故$\rho$是群$G$的一个表示。
:::

::: remark
如果群$G$是有限群，那么$\mathbb{k}G$可以
和$\mathcal{O}(G)=\{f:G\to\mathbb{k}\mid f\text{ 是映射}\}$视作等同。
:::

::: example
设$G,H$是群，$\mathbb{k}$是域，则有$\mathbb{k}$-代数同构：
$\mathbb{k}(G\times H)\cong\mathbb{k}G\otimes_{\mathbb{k}}\mathbb{k}H$。
:::

::: proof
首先有标准$\mathbb{k}$-线性映射
$\psi:\mathbb{k}(G\times H)\to\mathbb{k}G\otimes_{\mathbb{k}}\mathbb{k}H,
    (g,h)\mapsto g\otimes h$，不难看出$\psi$是$\mathbb{k}$-代数同态。
其次，通过$\mathbb{k}$-平衡映射
$$
    \mathbb{k}G\times\mathbb{k}H\to \mathbb{k}(G\times H),
    (\sum\limits_{g\in G}a_{g}g,
    \sum\limits_{h\in H}b_{h}h)\mapsto
    \sum\limits_{(g,h)\in G\times H}a_{g}b_{h}(g,h)
$$
可诱导$\mathbb{k}$-双线性映射
$\varphi:\mathbb{k}G\otimes_{\mathbb{k}}\mathbb{k}H
    \to \mathbb{k}(G\times H)$满足$\varphi(g\otimes h)=(g,h)$，
易验证$\psi$与$\varphi$互为逆映射。
:::

::: example
设$G$是$n$阶循环群\label{cycgrpkGeg}，
则有$\mathbb{k}$-代数同构$\mathbb{k}G\cong \mathbb{k}[x]/(x^{n}-1)$。
:::

::: proof
设$G$有生成元$g$，则$g$的阶为$n$且$\varphi:\mathbb{k}[x]\to\mathbb{k}G,
    a_{0}+a_{1}x+\cdots+a_{m}x^{m}\mapsto a_{0}1+a_{1}g+\cdots+a_{m}g^{m}$
是定义合理的满$\mathbb{k}$-代数同态。
注意到对任何自然数$m\leq n-1$，$1,g,...,g^{m}$
作为$\mathbb{k}G$中元素是$\mathbb{k}$-线性无关的，
所以$g\in\mathbb{k}G$在域$\mathbb{k}$上最小多项式次数至少为$n$。
于是由$x^{n}-1$是$g$的零化多项式可知$\operatorname{Ker}\varphi=(x^{n}-1)$。
:::

事实上，如果我们有了群$G$在$\mathbb{k}$上的一个表示$\rho:G\to GL(V)$，
$V$有天然的左$\mathbb{k}G$-模结构
$$
    \bigg(\sum\limits_{g\in G}a_{g}g\bigg)v
    =\sum\limits_{g\in G}a_{g}\rho(g)(v),\forall v\in V,
    \sum\limits_{g\in G}a_{g}g\in\mathbb{k}G.
$$
所以一个群$G$的$\mathbb{k}$-线性表示所承载的信息
和一个群代数$\mathbb{k}G$上的左模所载有的信息一致。
群代数$\mathbb{k}G$上的左模自然会反映群$G$本身的一些信息，以$\mathbb{k}G$本身为例：
对有限群$G$，有$\text{dim}_{\mathbb{k}}\mathbb{k}G=|G|$。
当群$G$有非平凡挠元$g\neq 1_{G}$时，群代数$\mathbb{k}G$会有零因子，
具体地，设$g$有阶$t$，那么$(1_{G}-g)(1_{G}+g+\cdots+g^{t-1})=1_{G}-g^{t}=0$。

::: definition [忠实表示]
设$G$是群，$V$是域$\mathbb{k}$上线性空间，
如果群的表示$\rho:G\to GL(V)$满足$\operatorname{Ker}\rho=\{1_{G}\}$，
即$\rho$是单同态，则称该表示是**忠实的**。
忠实表示意味着对每个$g\neq 1_{G}\in G$，
$g$在线性空间$V$上的作用一定会使$V$中某个元素变动。
:::

对每个群的表示$\rho:G\to GL(V)$，它可天然诱导单群同态
$\overline{\rho}:G/\operatorname{Ker}\rho\to GL(V)$，
所以从每个群的表示出发都可以产生一个忠实表示
$\overline{\rho}:G/\operatorname{Ker}\rho\to GL(V)$。
对任何群我们也可以构造它的忠实表示。

::: example [正则表示] {@exm:rgpeg}
设$V=\mathbb{k}G$是群代数，
则有忠实表示$\rho:G\to GL(V),g\mapsto g_{l}$，
其中 $g_{l}$指$g$决定的左乘变换。
我们把该表示$\rho$称为群$G$的**正则表示**。
:::

::: definition [表示的等价性]
设$G$是群，$\mathbb{k}$是域，$\rho:G\to GL(V)$
和$\rho^{\prime}:G\to GL(V^{\prime})$均为群的表示，
如果存在线性同构$f:V\to V^{\prime}$使得下图对所有的$g\in G$交换，
则称这两个表示是**等价的**。
$$
    \begin{tikzcd}
    V \arrow[rr, "f"] \arrow[d, "\rho(g)"'] &  & V^{\prime} \arrow[d, "\rho^{\prime}(g)"] \\
    V \arrow[rr, "f"]                       &  & V^{\prime}
    \end{tikzcd}
$$
:::

根据表示等价性的定义，如果$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$
这两个表示等价，即存在线性同构$f:V\to V^{\prime}$
使得$f\rho(g)=\rho^{\prime}(g)f,\forall g\in G$，
那么$f:V\to V^{\prime}$给出左$\mathbb{k}G$-模同构。
反之，如果我们有两个同构的左$\mathbb{k}G$-模$V,V^{\prime}$，
设$f:V\to V^{\prime}$是$\mathbb{k}G$-模同构，
$\rho:G\to GL(V)$是$V$上$\mathbb{k}G$-模结构给出的表示，
$\rho^{\prime}:G\to GL(V^{\prime})$
是$V^{\prime}$上$\mathbb{k}G$-模结构给出的表示，
那么$f:V\to V^{\prime}$是使得下图交换的线性同构。
$$
    \begin{tikzcd}
    V \arrow[rr, "f"] \arrow[d, "\rho(g)"'] &  & V^{\prime} \arrow[d, "\rho^{\prime}(g)"] \\
    V \arrow[rr, "f"]                       &  & V^{\prime}
    \end{tikzcd}
$$根据上面的讨论，我们便看到下述命题成立。

::: proposition
设$G$是群，$\mathbb{k}$是域，$\rho:G\to GL(V)$
和$\rho^{\prime}:G\to GL(V^{\prime})$均为群的表示。
那么这两个表示等价的充要条件是用$\rho,\rho^{\prime}$
分别赋予$V,V^{\prime}$左$\mathbb{k}G$-模结构后，
作为左$\mathbb{k}G$-模有同构$V\cong V^{\prime}$。
:::

在本节最后，用范畴语言来更严格地叙述群的表示与群代数上的模本质上一样。为此，引入

::: definition [群表示范畴]
给定群$G$以及域$\mathbb{k}$\label{RepGcatdef}，
通过如下方式来定义范畴$\text{Rep}_{\mathbb{k}}(G)$：
定义对象类$\text{ob}\text{Rep}_{\mathbb{k}}(G)$
为$G$在$\mathbb{k}$上的线性表示$\rho:G\to GL(V)$全体，
对任意两个群表示$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$，
若线性映射$f:V\to V^{\prime}$使得下图对所有的$g\in G$交换，
则称$f$是**表示$\rho$到$\rho^{\prime}$的态**（或**态射**）。
$$
    \begin{tikzcd}
    V \arrow[rr, "f"] \arrow[d, "\rho(g)"'] &  & V^{\prime} \arrow[d, "\rho^{\prime}(g)"] \\
    V \arrow[rr, "f"]                       &  & V^{\prime}
    \end{tikzcd}
$$
记$\text{Hom}_{\text{Rep}_{\mathbb{k}}(G)}(\rho,\rho^{\prime})$
为$\rho$到$\rho^{\prime}$的所有态构成的集合。
于是可天然地定义表示间态的合成。进而可得范畴$\text{Rep}_{\mathbb{k}}(G)$。
称为群$G$在$\mathbb{k}$上的**表示范畴**。
记$\text{rep}_{\mathbb{k}}(G)$为群$G$在$\mathbb{k}$上所有有限维表示构成的全子范畴。
:::

::: theorem
给定群$G$以及域$\mathbb{k}$，
那么有范畴同构$\mathbb{k}G\text{-Mod}
    \cong \text{Rep}_{\mathbb{k}}(G)$\label{groupreandmodethm}。
:::

::: proof
对每个左$\mathbb{k}G$-模$V$，
可在[@ghmodkggrep]意义下得到表示$\rho:G\to GL(V)$，记之为$FV$。
任意两个$\mathbb{k}G$-模之间的模同态$f:V\to V^{\prime}$，
可对应表示之间的态$f:V\to V^{\prime}$，记为$F(f)$。
由此得到函子$F:\mathbb{k}G\text{-Mod}\to \text{Rep}_{\mathbb{k}}(G)$。
对每个群的表示$\rho:G\to GL(V)$，根据之前的讨论，
可为$V$赋予天然的左$\mathbb{k}G$-模结构，记该左模为$H(\rho)$。
表示间的态$f$明显给出群代数上左模之间的模同态$H(f)$。
这定义出函子$H:\text{Rep}_{\mathbb{k}}(G)\to \mathbb{k}G\text{-Mod}$。
于是可直接验证$F$和$H$满足$FH=1_{\mathbb{k}G\text{-Mod}},
    HF=1_{\text{Rep}_{\mathbb{k}}(G)}$。
:::

::: remark
该定理表明研究群的线性表示本质上是研究群代数上的模。对域$\mathbb{k}$上代数
$A$以及$\mathbb{k}$-线性空间$V$，称$\mathbb{k}$-代数同态
$\rho:A\to\text{End}_{\mathbb{k}}V$为$A$在$\mathbb{k}$上的**表示**。
类似可定义$A$的表示间的态来得到$A$的表示范畴$\text{Rep}_{\mathbb{k}}(A)$。同样
可验证范畴同构$A\text{-Mod}\cong \text{Rep}_{\mathbb{k}}(A)$。因此研究结合代数
$A$的表示本质上就是研究$A$上的模，由此可见群表示论可纳入结合代数表示论的框架下研究。之
后我们会大量使用模论的工具来研究群代数的表示，即群的表示。矩阵的Jordan标准型理论就是应用P.I.D。
上有限生成模的结构理论来研究代数闭域$\mathbb{k}$上多项式代数$\mathbb{k}[x]$的表示取得成功的绝佳证明。
类似的思想也适用于Lie理论。对域$\mathbb{k}$上Lie代数$\mathfrak{g}$，用换位子赋予自同态代数$\text{End}_{\mathbb{k}}V$
上导出Lie代数结构，称Lie代数同态$\rho:\mathfrak{g}\to \text{End}_{\mathbb{k}}V$为Lie代数$\mathfrak{g}$的**表示**。
为了把握非结合的代数对象的表示，人们对Lie代数$\mathfrak{g}$引入了**泛包络代数**的概念，它是$\mathbb{k}$上结合代数，
这里记作$\mathcal{U}(\mathfrak{g})$。若记$\mathfrak{g}$的表示范畴为$\text{Rep}_{\mathbb{k}}(\mathfrak{g})$，
可以证明范畴同构$\mathcal{U}(\mathfrak{g})\text{-Mod}\cong \text{Rep}_{\mathbb{k}}(\mathfrak{g})$。
进而可用泛包络代数$\mathcal{U}(\mathfrak{g})$（结合代数）的表示去研究Lie代数$\mathfrak{g}$（非结合代数）的表示。
:::

## 群的矩阵表示

如果群$G$在域$\mathbb{k}$-上有一个次数为$n\geq 1$有限维表示$\rho:G\to GL(V)$，
那么每个$g\in G$它都会对应一个$\text{M}_{n}(\mathbb{k})$中的可逆矩阵。
具体地，取定$V$的基$B=\{u_{1},...,u_{n}\}$，
那么考虑每个$\varphi\in\text{End}_{\mathbb{k}}(V)$在这个基下表示矩阵$A$，
即满足等式$(\varphi(u_{1}),...,\varphi(u_{n}))=(u_{1},...,u_{n})A$的矩阵$A$，
我们可以得到$\mathbb{k}$-代数同构
$$T:\text{End}_{\mathbb{k}}(V)\to\text{M}_{n}(\mathbb{k}),\varphi\mapsto A,$$
那么$T$自然把可逆线性变换全体$GL(V)$映至可逆阵全体$GL_{n}(\mathbb{k})$，
并且把$T$限制在$GL(V)$上就给出了群同构$GL(V)\cong GL_{n}(\mathbb{k})$，
所以通过下述同态列的合成$\rho_{B}=T|\rho:G\to GL_{n}(\mathbb{k})$
\[
    \begin{tikzcd}
    G \arrow[rr, "\rho"] &  & GL(V) \arrow[rr, "T|"] &  & GL_{n}(\mathbbm{k})
    \end{tikzcd}
\]
我们便可把每个群中元素$g$对应到可逆矩阵$\rho_{B}(g)$。
那么$g\in G$在$V$上的线性作用可由可逆阵$\rho_{B}(g)$在$\mathbb{k}^{n}$上的数乘作用描述。
这就引出了矩阵表示的概念。

::: definition [矩阵表示]
设$G$是群，$\mathbb{k}$是域，$n\geq 1$，
称群同态$\rho:G\to GL_{n}(\mathbb{k})$为群$G$的 **$n$次矩阵表示**。
:::

::: example
设$G$是群，$\mathbb{k}$是域，
$\rho:G\to GL_{n}(\mathbb{k})$为群$G$的$n$次矩阵表示。
那么$\varphi:G\to\mathbb{k}^{*},g\mapsto\det\rho(g)$，
这里$\det\rho(g)$指$n$阶矩阵$\rho(g)$的行列式，是$G$的$1$次表示。
:::

根据有限维线性变换和它在一给定基下表示矩阵的关系，我们看到

::: lemma
设群$G$在域$\mathbb{k}$-上有一个次数为$n\geq 1$有限维表示$\rho:G\to GL(V)$，
取定$V$的基$B=\{u_{1},...,u_{n}\}$，
并设$\eta_{B}:V\to\mathbb{k}^{n}$是满足
$\eta_{B}(u_{i})=e_{i},1\leq i\leq n$的线性同构，
其中$e_{i}\in\mathbb{k}^{n}$是第$i$个标准单位列向量，
那么对由$B$诱导的矩阵表示$\rho_{B}:G\to GL_{n}(\mathbb{k})$，
有下图对所有$g\in G$交换。\label{mpcdffds}
$$
    \begin{tikzcd}
    V \arrow[rr, "\rho(g)"] \arrow[d, "\eta_{B}"'] &  & V \arrow[d, "\eta_{B}"] \\
    \mathbbm{k}^{n} \arrow[rr, "\rho_{B}(g)"]      &  & \mathbbm{k}^{n}
    \end{tikzcd}
$$
:::

线性代数中更一般的结果如下，它的证明也是平凡的。

::: lemma
设$V$是域$\mathbb{k}$上$n$维线性空间，
$V^{\prime}$是域$\mathbb{k}$上$m$维线性空间，
取定$V$的基$B=\{u_{1},...,u_{n}\}$，
并设$\eta_{B}:V\to\mathbb{k}^{n}$是
满足$\eta_{B}(u_{i})=e_{i},1\leq i\leq n$的线性同构，
其中$e_{i}\in\mathbb{k}^{n}$是第$i$个标准单位列向量。
类似地，取定$V^{\prime}$的一个基$C$，
可得线性同构$\eta_{C}:V^{\prime}\to \mathbb{k}^{m}$。
对任何线性映射$\varphi:V\to V^{\prime}$，
设$M_{\varphi}$是$\varphi$在基$B,C$下的表示矩阵\label{labhmpcdlem}，
那么下图交换
$$
    \begin{tikzcd}
    V \arrow[rr, "\varphi"] \arrow[d, "\eta_{B}"'] &  & V^{\prime} \arrow[d, "\eta_{C}"] \\
    \mathbbm{k}^{n} \arrow[rr, "M_{\varphi}"]      &  & \mathbbm{k}^{m}
    \end{tikzcd}
$$
:::

根据前面的讨论，给定一个次数是$n$的有限维表示$\rho:G\to GL(V)$，
通过取定$V$的一个基$B=\{u_{1},...,u_{n}\}$，
可产生一个群$G$的矩阵表示$\rho_{B}:G\to GL_{n}(\mathbb{k})$。
如果我们通过另一个$V$的基$C=\{v_{1},...,v_{n}\}$
来产生矩阵表示$\rho_{C}:G\to GL_{n}(\mathbb{k})$，
设基$B$到$C$的过渡矩阵是$P\in GL_{n}(\mathbb{k})$，
即$(v_{1},...,v_{n})=(u_{1},...,u_{n})P$，
那么$\rho_{C}(g)=P^{-1}\rho_{B}(g)P,\forall g\in G$。
这时我们可以对所有的$g\in G$找到一个公共的可逆阵$P$
使得对$\rho_{B}(g)$作用$P$决定的相似变换后得到矩阵$\rho_{C}(g)$。
这就引出了两个矩阵表示等价的概念。

::: definition [矩阵表示的等价]
设$\rho_{1},\rho_{2}:G\to GL_{n}(\mathbb{k})$
均为群$G$在$\mathbb{k}$上的矩阵表示，
如果存在可逆阵$P$使得$\rho_{1}(g)=P^{-1}\rho_{2}(g)P,\forall g\in G$，
称这两个矩阵表示是**等价的**，记作$\rho_{1}\sim\rho_{2}$。
易知矩阵表示的等价作为群$G$在$\mathbb{k}$上的矩阵表示全体
构成的集合上的二元关系是等价关系。
:::

从[引理\ref{mpcdffds}]以及[引理\ref{labhmpcdlem}]
我们可以看到对任何两个群$G$在$\mathbb{k}$上的有限维表示
$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$，
其中$\text{dim}_{\mathbb{k}}V=n,\text{dim}_{\mathbb{k}}V^{\prime}=m$，
只要$V$和$V^{\prime}$之间有个左$\mathbb{k}G$-模同态$\varphi:V\to V^{\prime}$，
就会产生下述交换图：
$$
    \begin{tikzcd}
                                                                                  & V \arrow[dd, dashed] \arrow[rr, "\varphi"]         &                                                      & V^{\prime} \arrow[dd, "\eta_{C}"] \\
    V \arrow[rr, "\varphi"] \arrow[dd, "\eta_{B}"'] \arrow[ru, "\rho(g)"]         &                                                    & V^{\prime} \arrow[dd] \arrow[ru, "\rho^{\prime}(g)"] &                                   \\
                                                                                  & \mathbbm{k}^{n} \arrow[rr, "M_{\varphi}"', dashed] &                                                      & \mathbbm{k}^{m}                   \\
    \mathbbm{k}^{n} \arrow[rr, "M_{\varphi}"'] \arrow[ru, "\rho_{B}(g)"', dashed] &                                                    & \mathbbm{k}^{m} \arrow[ru, "\rho_{C}^{\prime}(g)"']  &
    \end{tikzcd}
$$
其中$B$是$V$取定的基，$C$是$V^{\prime}$取定的基。
进而我们看到等价的有限维群表示它们在给定基下决定的矩阵表示也等价。
反过来，如果两个有限维表示$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$
满足$n=m$且它们在给定基下决定的矩阵表示等价，我们仍可构造上述形式的交换图。
总结一下，我们得到

::: proposition
给定群$G$在$\mathbb{k}$上的有限维表示
$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$，
其中$\text{dim}_{\mathbb{k}}V=n,\text{dim}_{\mathbb{k}}V^{\prime}=m$，
取定$V$的基$B$，$V^{\prime}$的基$C$，
并设$\rho_{B}:G\to GL_{n}(\mathbb{k}),
    \rho_{C}^{\prime}:G\to GL_{m}(\mathbb{k})$是相应矩阵表示。
那么$\rho$和$\rho^{\prime}$是等价的群表示
当且仅当$n=m$且$\rho_{B}$和$\rho_{C}^{\prime}$是等价的矩阵表示。
:::

::: example [置换表示]
给定群$G$在集合$\{1,2,...,n\}$上的一个作用，它
诱导群同态$\pi:G\to S_{n}$使得$\pi(g)(i)=gi,\forall i\in\{1,2,...,n\}$。
下面我们用群同态$\pi:G\to S_{n}$来产生一个群$G$的有限维表示。
设$V$是域$\mathbb{k}$上的$n$维线性空间，取定$V$的基$B=\{u_{1},...,u_{n}\}$。
那么对每个$g\in G$，通过定义$\rho(g)(u_{i})=u_{\pi(g)(i)}=u_{gi}$
可唯一决定一可逆线性变换$\rho(g):V\to V$，于是我们得到群同态$\rho:G\to GL(V)$，
它给出群$G$一个次数为$n$的$\mathbb{k}$-线性表示，称为$G$的**置换表示**。
可以看到每个$\rho(g)$在基$B$上的作用无非是把$u_{1},...,u_{n}$进行重排，
因此$\rho(g)$在$B$下的表示矩阵是置换矩阵。
:::

::: example [表示的张量积] {@exm:tensorpdefpg}
设群$G$有表示$\rho:G\to GL(V)$和$\rho^{\prime}:G\to GL(V^{\prime})$，
对每个$g\in G$，有线性同构$\rho(g):V\to V$
以及$\rho^{\prime}(g):V^{\prime}\to V^{\prime}$，
于是得到线性同构$\rho(g)\otimes\rho^{\prime}(g):
    V\otimes_{\mathbb{k}}V^{\prime}\to V\otimes_{\mathbb{k}}V^{\prime}$。
通过定义$\rho\otimes\rho^{\prime}:G\to GL(V\otimes_{\mathbb{k}}V^{\prime}),
    g\mapsto \rho(g)\otimes\rho^{\prime}(g)$，
我们得到群同态$\rho\otimes\rho^{\prime}$，
称为**表示$\rho,\rho^{\prime}$的张量积**。
如果$V$是$G$的$n$次表示，$V^{\prime}$是$G$的$m$次表示，这里$n,m$是正整数，
那么表示的张量积$\rho\otimes\rho^{\prime}$是$nm$次表示。
若取定$V$的基$B=\{u_{1},...,u_{n}\}$，
$V^{\prime}$的基$C=\{v_{1},...,v_{m}\}$，
设$\rho(g)$在$B$下的表示矩阵是$\rho_{B}(g)$，$\rho^{\prime}(g)$
在$C$下的表示矩阵是$\rho_{C}(g)$，那么$(\rho\otimes\rho^{\prime})(g)$
在基$\{u_{1}\otimes v_{1},u_{1}\otimes v_{2},...,u_{1}
    \otimes v_{m},...,u_{n}\otimes v_{1},...,u_{n}\otimes v_{m}\}$
下的表示矩阵是矩阵$\rho_{B}(g)$和$\rho_{C}(g)$
的Kronecker积$\rho_{B}(g)\otimes \rho_{C}(g)$。
用模的语言来说，表示的张量积对应的是对左$\mathbb{k}G$-模$V,V^{\prime}$，
在$V\otimes_{\mathbb{k}}V^{\prime}$上
通过$g(v\otimes v^{\prime})=gv\otimes gv^{\prime}$
赋予$V\otimes_{\mathbb{k}}V^{\prime}$一个左$\mathbb{k}G$-模结构。
:::

::: remark
给定群族$\{G_{i}|1\leq i\leq m\}$，
$V_{i}$是左$\mathbb{k}G_{i}$-模，
那么$V_{1}\otimes_{\mathbb{k}}\cdots\otimes_{\mathbb{k}}V_{m}$上
有天然的左$\mathbb{k}[G_{1}\times\cdots\times G_{m}]$-模结构。
满足每个$(g_{1},...,g_{m})$数乘作用$v_{1}\otimes\cdots\otimes v_{m}$
得到$g_{1}v_{1}\otimes\cdots\otimes g_{m}v_{m}$。
因此一旦对每个群$G_{i}$取定一个$\mathbb{k}$-线性表示$\rho_{i}:G\to GL(V_{i})$，
便能产生一个群$G_{1}\times\cdots\times G_{m}$的表示
$\rho:G_{1}\times\cdots\times G_{m}\to GL
    (V_{1}\otimes_{\mathbb{k}}\cdots\otimes_{\mathbb{k}}V_{m})$
满足$\rho(g)=\rho_{1}(g)\otimes\cdots\otimes\rho_{m}(g)$。
若取定$V_{1},...,V_{m}$的基，那么$\rho(g)$在这些基对应作张量积适当重排后
得到$V_{1}\otimes_{\mathbb{k}}\cdots\otimes_{\mathbb{k}}V_{m}$的基下
表示矩阵依然是$\rho_{i}(g)$在给定基下表示矩阵的Kronecker积。特别地，有
$$\operatorname{tr}\rho(g)=\operatorname{tr}\rho_{1}(g)\operatorname{tr}\rho_{2}(g)\cdots \operatorname{tr}\rho_{m}(g).$$
之后将用特征标理论来说明当$V_{i}$是不可约左$\mathbb{C}G_{i}$-模时，
$V_{1}\otimes_{\mathbb{k}}\cdots\otimes_{\mathbb{k}}V_{m}$
是不可约左$\mathbb{C}[G_{1}\times\cdots\times G_{m}]$-模。
:::

## 完全可约性

设$G$是群，我们已经看到群$G$在域$\mathbb{k}$上的表示$\rho:G\to GL(V)$
本质上就是一个群代数$\mathbb{k}G$上的模结构。
那么我们可以把模论的观点与工具带进群表示论来研究群的表示。

::: definition [不变子空间]
设$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的表示，
若$V$的线性子空间$U$满足$\rho(g)U\subseteq U,\forall g\in G$，
称$U$是$V$的 **$\rho(G)$-不变子空间**或 **$G$-不变子空间**。
:::

根据$\rho(G)$-不变子空间的定义可以看到，对群$G$在域$\mathbb{k}$上的表示
$\rho:G\to GL(V)$，$V$的子集$U$是$\rho(G)$-不变子空间的充要条件是
将$V$视作左$\mathbb{k}G$-模后$U$是$V$的子模。
因为$\rho(g)$是$V$上可逆线性变换，因此$\rho(g)|_{U}$一定是$U$上单线性变换，
而每个$x\in U$满足$x=\rho(g)\rho(g^{-1})x$，其中$\rho(g^{-1})x\in U$，
所以$\rho(g)$限制在$U$上可得$U$上可逆线性变换。
我们通过$\rho(G)$-不变子空间来引入子表示的概念。

::: definition [子表示]
设$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的表示，
若$V$的线性子空间$U$是$\rho(G)$-不变子空间，
那么每个$\rho(g)|_{U}:U\to U$是可逆线性变换，
因此可得群同态$\rho|_{U}:G\to GL(U),g\mapsto \rho(g)|_{U}$，
称$\rho|_{U}:G\to GL(U)$是 **$\rho$的子表示**。
子表示本质上就是一个$\mathbb{k}G$-子模结构。
:::

子表示无非是通过群代数上模的子模去认识群的表示。完全类似地我们可以用商模去研究群的表示。

::: definition [商表示]
设$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的表示，
若$V$的线性子空间$U$是$\rho(G)$-不变子空间，
即$U$是$V$作为左$\mathbb{k}G$-模的子模，那么我们得到商模$V/U$，
于是得到表示$\rho|_{V/U}:G\to GL(V/U),g\mapsto g_{l}$，
这里$g_{l}$表示$g\in G$所决定的商模$V/U$上的左乘变换，
称表示$\rho|_{V/U}$是$\rho$的**商表示**。
:::

如果$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的有限维表示，
$\text{dim}_{\mathbb{k}}V=n$且有子表示$\rho|_{U}:G\to GL(U)$。
设$U$有基$\{u_{1},...,u_{r}\}$，并将其扩充为$V$的一个基$B=\{u_{1},...,u_{n}\}$，
那么$\rho(g)$在基$B$下的表示矩阵$\rho_{B}(g)$是具有下述形式的分块矩阵。
$$
    \rho_{B}(g)=\begin{pmatrix}
    M_{11} & M_{12} \\ \\
    0 &M_{22}
    \end{pmatrix},M_{11}\in\text{M}_{r}(\mathbb{k}),
    M_{12}\in\text{M}_{r\times(n-r)}(\mathbb{k}),
    M_{22}\in\text{M}_{n-r}(\mathbb{k}).
$$
特别地，当$U$是$V$作为$\mathbb{k}G$-模的一个直和因子，
即存在子模$U^{\prime}$使得$V=U\oplus U^{\prime}$时，
取$U$的基$\{u_{1},...,u_{r}\}$以及$U^{\prime}$的基$\{u_{r+1},...,u_{n}\}$
来得到$V$的基$B=\{u_{1},...,u_{n}\}$，
那么$\rho(g)$在基$B$下的表示矩阵$\rho_{B}(g)$是分块对角阵，
即上述分块矩阵的子矩阵$M_{12}=0$，这样的矩阵具有更简单的形式。
因此我们可以把模的直和分解理论带进群表示论来把一个表示分解为一些尽可能简单的表示加以研究。

::: definition [表示的直和]
设$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的表示，
若$V$作为左$\mathbb{k}G$-模可以分解为有限个子模的直和，
设为$V=U_{1}\oplus U_{2}\oplus\cdots\oplus U_{m}$，
记$\rho_{i}=\rho|_{U_{i}}$是$\rho$的子表示，
我们称表示$\rho$是**子表示$\rho_{1},\rho_{2},...,\rho_{m}$的直和**，
记作$\rho=\rho_{1}\oplus\rho_{2}\oplus\cdots\oplus\rho_{m}$。
:::

根据表示直和的定义我们知道表示的直和分解对应于群代数上模的直和分解。
如果表示$\rho:G\to GL(V)$对应的左$\mathbb{k}G$-模$V$是不可约模，
称该表示是**不可约的**。
若$V$是完全可约左$\mathbb{k}G$-模，称该表示是**完全可约的**。
一般地，即使有限Abel群在复数域上都可能不存在忠实的不可约表示
（见[@egnotcyclicabirecfarep]）。

下面的结果被称为Maschke定理。该定理在复数域上的特殊情形
由H. Maschke（德国，1853–1908），这里呈现的版本由L.E.Dickson（美国，1874–1954）先注意到。

::: theorem [Maschke定理] {@MaschkThm}
设$G$是有限群，对任何域$\mathbb{k}$，
只要$\operatorname{char}\mathbb{k}{\not|}$ $|G|$，
那么$G$在域$\mathbb{k}$上的表示$\rho:G\to GL(V)(V\neq 0)$都是完全可约的。
特别地，对满足$\operatorname{char}\mathbb{k}{\not|}$ $|G|$的域$\mathbb{k}$，
群代数$\mathbb{k}G$是Artin半单代数。
:::

::: proof
只需证任何左$\mathbb{k}G$-模$V$的子模$U$是直和因子。
设$U_{0}$是$U$作为线性子空间的直和补，
即作为$\mathbb{k}$-线性空间有直和分解$V=U\oplus U_{0}$。
设$p_{0}:V\to U$是$V$作为线性空间在子空间$U$上的标准投射，命
$$p=\frac{1}{|G|}\sum\limits_{g\in G}\rho(g)^{-1}p_{0}\rho(g),$$
则$p:V\to U$是满左$\mathbb{k}G$-模同态且$p|_{U}=\text{id}_{U}$，
故$U$作为$\mathbb{k}G$-子模是直和因子。
:::

::: corollary [群代数的半单性]
设$G$是有限群，$\mathbb{k}$是域，
那么群代数$\mathbb{k}G$半单的充要条件是
$\operatorname{char}\mathbb{k}{\not|}$ $|G|$。
:::

::: proof
充分性由Maschke定理即得。
必要性：如果$\operatorname{char}\mathbb{k}$整除$|G|$，
那么$z=\sum\limits_{g\in G}g\neq 0$
满足$z^{2}=|G|z=0$以及$zx=xz,\forall x\in G$，
因此$z\in\text{Jac}(\mathbb{k}G)$。
由Wedderburn-Artin定理知这说明$\mathbb{k}G$不是Artin半单环。
但条件说群代数$\mathbb{k}G$作为一个Artin环是半单的，这就得到了矛盾。
:::

::: remark
让我们再更深入看一下当域$\mathbb{k}$的特征整除$|G|$时
$\mathbb{k}G$不会是半单代数的原因。
作$$
    \varepsilon:\mathbb{k}G\to\mathbb{k},
    \sum\limits_{g\in G}a_{g}g\mapsto \sum\limits_{g\in G}a_{g}
$$
将$\mathbb{k}$视作平凡左$\mathbb{k}G$-模，
那么$\varepsilon$是满左$\mathbb{k}G$-模同态
且$\operatorname{Ker}\varepsilon$是$\mathbb{k}G$唯一满足其商模同构于平凡模$\mathbb{k}$的子模
（即$\mathbb{k}G$的子模$T$满足$\mathbb{k}G/T\cong\mathbb{k}$
则必有$T=\operatorname{Ker}\varepsilon$）。考虑$t=\sum\limits_{g\in G}g$，
则$t$在$\mathbb{k}G$中生成的$\mathbb{k}$-子空间$I$
是$\mathbb{k}G$唯一同构于平凡模$\mathbb{k}$的子模。
如果$\mathbb{k}G$是半单代数，则$I$作为$\mathbb{k}G$的子模是直和因子，
设为$\mathbb{k}G=I\oplus T$，根据前面的讨论得到$T=\operatorname{Ker}\varepsilon$。
而当$\mathbb{k}$的特征整除$|G|$时$t$明显在$I$与$\operatorname{Ker}\varepsilon$之交中。
:::

下面的推论表明有限群代数的半单性可由平凡模的投射性刻画。

::: corollary
设$G$是有限群，$\mathbb{k}$是域，
那么平凡$\mathbb{k}G$-模$\mathbb{k}$投射
当且仅当$\operatorname{char}\mathbb{k}{\not|}$ $|G|$。
:::

::: proof
充分性由Artin半单环上的模均投射立即得到，只需验证必要性。
这时$$
    \varepsilon:\mathbb{k}G\to\mathbb{k},
    \sum\limits_{g\in G}a_{g}g\mapsto \sum\limits_{g\in G}a_{g}
$$
是可裂满$\mathbb{k}G$-模同态。
因此存在$\mathbb{k}G$-模同态$s:\mathbb{k}\to\mathbb{k}G$
使得$\varepsilon s=\text{id}_{\mathbb{k}}$。
由$\mathbb{k}$是平凡模，存在$c\in\mathbb{k}$
使得$\tau(1)=c\sum\limits_{g\in G} g$，两边作用$\varepsilon$可知$c|G|=1$，
这说明$\operatorname{char}\mathbb{k}{\not|}$ $|G|$。
:::

Maschke定理的意义在于它告诉我们，要研究有限群$G$在满足特征不整除$G$的阶的域上的表示，
只需要把不可约表示研究清楚即可，因为完全可约模总可以分解为一些不可约模的直和。

::: example [应用：$\mathbb{Z}G$半单]
设$G$是有限群，则$\mathbb{Z}G$是Artin半单环。
:::

::: proof
根据Maschke定理，只要素数$p$不整除$|G|$，群代数$\mathbb{F}_{p}G$半单，
其中$\mathbb{F}_{p}$是$p$元有限域，所以此时$\text{Jac}(\mathbb{F}_{p}G)=0$。
对任给素数$p$，都有自然的满环同态
$$
    \alpha_{p}:\mathbb{Z}G\to\mathbb{F}_{p}G,
    \sum\limits_{g\in G}b_{g}g\mapsto \sum\limits_{g\in G}\overline{b_{g}}g,
$$
易知$\alpha_{p}(\text{Jac}\mathbb{Z}G)\subseteq \text{Jac}(\mathbb{F}_{p}G)$，
当素数$p$不整除$|G|$时，上述包含关系右端是$0$，
由此可知对每个$x=\sum\limits_{g\in G}b_{g}g\in \text{Jac}\mathbb{Z}G$，
并且每个系数$b_{g}$可以被无穷多素数整除，这迫使$x=0$。
所以$\text{Jac}\mathbb{Z}G=0$。
记$m=|G|$，那么$\mathbb{Z}^{m}$到$\mathbb{Z}G$有自然的满$\mathbb{Z}$-模同态，
这表明$\mathbb{Z}G$是左、右Artin环。于是我们看到$\mathbb{Z}G$是Artin半单环。
:::

在本节最后我们指出用上述Maschke定理证明过程中完全相同的方法可稍作推广。

::: theorem [推广的Mashcke] {@lem:GMaschkThm}
设$G$是有限群且有子群$H$，域$\mathbb{k}$
满足$\operatorname{char}\mathbb{k}{\not|}$ $[G:H]$。
如果左$\mathbb{k}G$-模$V$的子模$W$
满足存在$V$的一个$\mathbb{k}H$-子模$T_{0}$使得$V=W\oplus T_{0}$，
那么存在$V$的一个$\mathbb{k}G$-子模$T$使得$V=W\oplus T$。
特别地，取$H=\{1\}$，便得到经典的Maschke定理。
:::

::: proof
设$\{g_{1},...,g_{n}\}$是群$G$关于子群$H$的一个右陪集分解代表元系，
其中$n=[G:H]$。由条件，通过$\mathbb{k}H$-子模直和分解$V=W\oplus T_{0}$
可定义出标准投射$p_{0}:V\to W$使得$p_{0}$是左$\mathbb{k}H$-模同态
且固定$W$内每个点。作
$$
    p(v)=\frac{1}{n}\sum\limits_{i=1}^{n}g_{i}^{-1}p_{0}(g_{i}v),
    \forall v\in V,
$$则$p:V\to W$是满左$\mathbb{k}G$-模同态
且$p|_{W}=\text{id}_{W}$，故$W$作为$V$的$\mathbb{k}G$-子模是直和因子。
:::

## 模论的应用

我们已经引入过将群$G$的表示$\rho:G\to GL(V)$视作群代数$\mathbb{k}G$上的模的观点。
因此我们可以把模论工具引入到群表示论中。例如Artin半单代数的不可约模同构类只有有限多个，
转换成群表示的语言就是

::: proposition
设$G$是有限群，$\mathbb{k}$是域，满足$\operatorname{char}\mathbb{k}{\not|}$ $|G|$。
那么$G$的不可约表示等价类只有有限多个。
:::

::: remark
事实上任何Artin环的不可约模同构类都是有限多个，
并且该同构类数就是Artin环的素理想数目。
更进一步，域$\mathbb{k}$上有限维代数$A$的不可约表示等价类数目
总不超过其线性维数$\text{dim}_{\mathbb{k}}A$。
:::

对$\mathbb{k}$-代数$A$上的左模$V$，Krull-Schmidt定理告诉我们只要$V$有合成列
（例如$V$是非零有限维模），那么$V$可分解为有限个不可分模的直和，
并且这样的直和分解在不计次序和同构意义下唯一。
具体地，若$_{A}V\neq 0$有合成列，则存在不可分子模$V_{1},...,V_{m}\neq 0$
使得$V=V_{1}\oplus V_{2}\oplus\cdots\oplus V_{m}$。
若还存在不可分子模$W_{1},...,W_{s}$使得
$V=W_{1}\oplus W_{2}\oplus\cdots\oplus W_{s}$，
那么$s=m$并且存在$\sigma\in S_{m}$使得
$V_{i}\cong W_{\sigma(i)},\forall 1\leq i\leq m$。
现在我们设$G$是有限群，域$\mathbb{k}$满足$\operatorname{char}\mathbb{k}{\not|}$ $|G|$，
那么$A=\mathbb{k}G$是有限维半单代数，对任何非零有限维模$_{A}V$，
它可分解为有限个不可约子模的直和，设为$V=V_{1}\oplus V_{2}\oplus\cdots\oplus V_{m}$，
其中每个$V_{i}$不可约，由于不可约模一定不可分，
所以$_{A}V$的不可约子模直和分解在不计次序和同构意义下唯一。
现在我们可以设有限维模$V$有不可约分解
$$
    V=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}\oplus V_{2}^{(1)}
    \oplus\cdots\oplus V_{r}^{(1)}\oplus\cdots\oplus V_{r}^{(m_{r})},
$$
其中每个$V_{i}^{(k)}$是不可约模，对每个$1\leq i\leq r$，
有$V_{i}^{(k)}\cong V_{i}^{(l)},\forall k,l\in\{1,2,...,m_{i}\}$，
只要$i\neq j$，就有$V_{i}^{(k)}\not\cong V_{j}^{(l)}$。
那么正整数序列$m_{1},...,m_{r}$和正整数序列
$\text{dim}_{\mathbb{k}}V_{1}^{(1)},\text{dim}_{\mathbb{k}}V_{2}^{(1)},...,
\text{dim}_{\mathbb{k}}V_{r}^{(1)}$被$V$唯一确定。
记左$A$-模$V$给出群$G$的有限维表示为$\rho:G\to GL(V)$，
$\rho_{i}$为$V_{i}^{(1)}$决定的不可约表示，
称$\rho_{i}$是$\rho$的**不可约成分**，$m_{i}$是$\rho_{i}$的**重数**。
现在我们取$V=\mathbb{k}G$，那么一样可设它有不可约分解
$V=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}\oplus V_{2}^{(1)}
\oplus\cdots\oplus V_{r}^{(1)}\oplus\cdots\oplus V_{r}^{(m_{r})}$
满足之前我们假定的条件，
记每个$V_{i}^{(1)}$作为左$\mathbb{k}G$-模的自同态环是$\Delta_{i}$，
那么$\Delta_{i}$是域$\mathbb{k}$上的可除代数并且当$\mathbb{k}$是代数闭域时，
下面的引理表明有代数同构$\Delta_{i}\cong\mathbb{k}$。

::: lemma {@lem:acffdireEndk}
设$\mathbb{k}$是代数闭域，$A$是$\mathbb{k}$-代数，$_{A}M$是有限维不可约模，
则有$\mathbb{k}$-代数同构$\text{End}_{A}(M)\cong\mathbb{k}$。
:::

::: proof
这时$\text{End}_{A}(M)$是有限维$\mathbb{k}$-可除代数，
而$\mathbb{k}$是代数闭域，故每个$\varphi\in \text{End}_{A}(M)$
在$\mathbb{k}$上最小多项式是一次的，设为$x-\lambda_{\varphi}$，
那么$\varphi=\lambda_{\varphi}\operatorname{id}_{M}$，
由此可见$\mathbb{k}\mapsto \text{End}_{A}(M),a\mapsto a\operatorname{id}_{M}$
是$\mathbb{k}$-代数同构。
:::

于是由反代数同构$\mathbb{k}G\cong\text{End}_{\mathbb{k}G}(\mathbb{k}G)
=\text{End}_{\mathbb{k}G}(V)$以及$\mathbb{k}$-线性同构
$$
    \text{End}_{\mathbb{k}G}(V)
    \cong\prod_{i=1}^{r}\prod_{j=1}^{r}
    \text{Hom}_{\mathbb{k}G}(V_{i}^{(1)},V_{j}^{(1)})^{m_{i}m_{j}}
    \cong \prod_{i=1}^{r}\text{End}_{\mathbb{k}G}(V_{i}^{(1)})^{m_{i}^{2}}
    =\prod_{i=1}^{r}\Delta_{i}^{m_{i}^{2}}
$$
得到$|G|=\dim_{\mathbb{k}}\mathbb{k}G
=\sum\limits_{i=1}^{r}m_{i}^{2}\dim_{\mathbb{k}}\Delta_{i}$。
我们把上述讨论总结为下面的推论。

::: corollary {@cor:sumcoAcFssGo}
设$G$是有限群，群代数$\mathbb{k}G$半单，
并设$V=\mathbb{k}G$作为左$\mathbb{k}G$-模有不可约分解
$$
    \mathbb{k}G=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}
    \oplus V_{2}^{(1)}\oplus\cdots\oplus V_{r}^{(1)}
    \oplus\cdots\oplus V_{r}^{(m_{r})},
$$
其中每个$V_{i}^{(k)}$是不可约模，对每个$1\leq i\leq r$，
有$V_{i}^{(k)}\cong V_{i}^{(l)},\forall k,l\in\{1,2,...,m_{i}\}$，
只要$i\neq j$，就有$V_{i}^{(k)}\not\cong V_{j}^{(l)}$。
若记$\Delta_{i}=\text{End}_{\mathbb{k}G}(V_{i}^{(1)})$，
那么$|G|=\dim_{\mathbb{k}}\mathbb{k}G
    =\sum\limits_{i=1}^{r}m_{i}^{2}\dim_{\mathbb{k}}\Delta_{i}$。
若进一步要求$\mathbb{k}$是代数闭域，
则$|G|=\sum\limits_{i=1}^{r}m_{i}^{2}$。
:::

我们再指出对上述不可约分解$V=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}
\oplus V_{2}^{(1)}\oplus\cdots\oplus V_{r}^{(1)}\oplus\cdots
\oplus V_{r}^{(m_{r})},$ 可直接验证$\mathbb{k}$-代数同构
$\text{End}_{\mathbb{k}G}(V)\cong
\text{End}_{\mathbb{k}G}((V_{1}^{(1)})^{m_{1}}\oplus\cdots\oplus(V_{r}^{(1)})^{m_{r}})
\cong \text{End}_{\mathbb{k}G}(V_{1}^{(1)})^{m_{1}}\times\cdots\times
\text{End}_{\mathbb{k}G}(V_{r}^{(1)})^{m_{r}}$，
记$\Delta_{i}=\text{End}_{\mathbb{k}G}V_{i}^{(1)}$
是域$\mathbb{k}$上的有限维可除代数，那么有$\mathbb{k}$-代数同构
$$
    \text{End}_{\mathbb{k}G}(V)
    \cong \text{M}_{m_{1}}(\Delta_{1})\times\cdots
    \times \text{M}_{m_{r}}(\Delta_{r}),
$$
于是得到$\mathbb{k}$-代数同构$\mathbb{k}G\cong  \text{M}_{m_{1}}(\Delta_{1}^{op})
\times\cdots\times \text{M}_{m_r}(\Delta_{r}^{op})$。
我们把刚刚的讨论总结为

::: corollary
设$G$是有限群，群代数$\mathbb{k}G$半单，
并设$\mathbb{k}G$作为左$\mathbb{k}G$-模有不可约分解
$$
    \mathbb{k}G=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}
    \oplus V_{2}^{(1)}\oplus\cdots\oplus V_{r}^{(1)}\oplus\cdots
    \oplus V_{r}^{(m_{r})},
$$
其中每个$V_{i}^{(k)}$是不可约模，对每个$1\leq i\leq r$，
有$V_{i}^{(k)}\cong V_{i}^{(l)},\forall k,l\in\{1,2,...,m_{i}\}$，
只要$i\neq j$，就有$V_{i}^{(k)}\not\cong V_{j}^{(l)}$。
若记$\Delta_{i}=\text{End}_{\mathbb{k}G}(V_{i}^{(1)})$，
那么有$\mathbb{k}$-代数同构$\mathbb{k}G\cong
    \text{M}_{m_{1}}(\Delta_{1}^{op})\times\cdots\times
    \text{M}_{m_{r}}(\Delta_{r}^{op})$。
这时同样可得$|G|=\sum\limits_{i=1}^{r}m_{i}^{2}
    \dim_{\mathbb{k}}\Delta_{i}$。
若进一步要求$\mathbb{k}$是代数闭域，
则代数同构$\Delta_{i}\cong\mathbb{k}$表明$\Delta_{i}=\Delta_{i}^{op}$，
从而有代数同构$$
    \mathbb{k}G\cong
    \text{M}_{m_{1}}(\mathbb{k})\times\cdots\times
    \text{M}_{m_{r}}(\mathbb{k}).
$$
:::

下面再把有限群的共轭类和群代数的中心联系起来——有限群的共轭类数目就是群代数中心的线性维数。

::: proposition {@pro:propcogclasNeqdimcent}
设$G$是有限群，共轭类全体是$C_{1}=\{1_{G}\},C_{2},...,C_{r}$，
对每个$1\leq i\leq r$，置$c_{i}=\sum\limits_{g\in C_{i}}g$，
那么$\{c_{1},...,c_{r}\}$是群代数$\mathbb{k}G$中心
$Z(\mathbb{k}G)$作为$\mathbb{k}$-线性空间的一个基，
特别地，$\text{dim}_{\mathbb{k}}Z(\mathbb{k}G)=r$为共轭类个数。
:::

::: proof
易见$\{c_{1},...,c_{r}\}$是线性无关的，
只要证每个$c_{i}\in Z(\mathbb{k}G)$
以及任何$c\in Z(\mathbb{k}G)$可被$\{c_{1},...,c_{r}\}$线性表出即可。
任取$g\in G$，有$gc_{i}g^{-1}=\sum\limits_{g_{i}\in C_{i}}
    gg_{i}g^{-1}=c_{i}$，所以$c_{i}\in Z(\mathbb{k}G)$。
对每个$c\in Z(\mathbb{k}G)$，设
$$c=\sum\limits_{g\in G}\alpha_{g}g,\alpha_{g}\in\mathbb{k},$$
那么$c=hch^{-1},\forall h\in G$，
由此可见$\alpha_{hgh^{-1}}=\alpha_{g},\forall h\in G$。
这蕴含$c$可被$\{c_{1},...,c_{r}\}$线性表出。
:::

::: remark
同样设$G$是有限群，$\{c_{1},...,c_{r}\}$同上，
则$\mathbb{Z}c_{1}\oplus\cdots\oplus \mathbb{Z}c_{r}\subseteq\mathbb{C}G$
是有限生成自由$\mathbb{Z}$-模。
对任给$1\leq i,j\leq r$，$c_{i}c_{j}\in Z(\mathbb{C}G)$，
所以$c_{i}c_{j}\in \mathbb{Z}c_{1}\oplus\cdots\oplus \mathbb{Z}c_{r}$。
于是知每个$c_{i}$满足$\mathbb{Z}$上某个首一多项式。
:::

若设Artin半单代数$A$的极小左理想分解为$A=I_{1}\oplus\cdots\oplus I_{m}$，
那么每个不可约左$A$-模都同构于某个$I_{k}$，把这一观察和前面的讨论结合立即得到下述推论。

::: corollary {@cor:acfirmicneqCcN}
设$G$是有限群，$\mathbb{k}$是代数闭域且群代数$\mathbb{k}G$半单，
$V=\mathbb{k}G$作为左$\mathbb{k}G$-模有不可约分解
$$
    V=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}
    \oplus V_{2}^{(1)}\oplus\cdots\oplus V_{r}^{(1)}
    \oplus\cdots\oplus V_{r}^{(m_{r})},
$$
其中每个$V_{i}^{(k)}$是不可约模，对每个$1\leq i\leq r$，
有$V_{i}^{(k)}\cong V_{i}^{(l)},\forall k,l\in\{1,2,...,m_{i}\}$，
只要$i\neq j$，就有$V_{i}^{(k)}\not\cong V_{j}^{(l)}$。
那么群$G$的共轭类总数$\text{dim}_{\mathbb{k}}Z(\mathbb{k}G)=r$
就是$\mathbb{k}G$上不可约模同构类总数。
:::

::: proof
此时$\mathbb{k}G\cong  \text{M}_{m_{1}}(\mathbb{k})
    \times\cdots\times \text{M}_{m_r}(\mathbb{k})$，
再由$Z(\mathbb{k}G)\cong Z(\text{M}_{m_{1}}(\mathbb{k}))
    \times\cdots\times Z(\text{M}_{m_{r}}(\mathbb{k}))$便知。
:::

::: example [置换群$S_{n}$的不可约复表示和整数拆分] {@exm:Sncomppartrg}
对有限群$G$，[@cor:acfirmicneqCcN]说$\mathbb{C}G$上不可约模同构类总数
恰是$G$共轭类数目。当我们取$G=S_{n}$为$n$次对称群时，
$S_{n}$中两个元素共轭当且仅当它们有相同的型（回忆置换$\sigma\in S_{n}$的型如下定义：
当$\sigma$分解为不相交轮换分解后，
记$\{1,2,...,n\}$中被$\sigma$作用固定不同的元素数目是$\alpha_{1}$，
不相交轮换分解中长度为$i$ $(2\leq i\leq n)$的轮换数目是$\alpha_{i}$，
称形式记号$[1^{\alpha_{1}}2^{\alpha_{2}}\cdots n^{\alpha_{n}}]$
是置换$\sigma$的**型**），而置换$\sigma\in S_{n}$的型
$[1^{\alpha_{1}}2^{\alpha_{2}}\cdots n^{\alpha_{n}}]$
对应正整数$n$的拆分$n=\alpha_{1}1+\alpha_{2}2+\cdots+\alpha_{n}n$
（即把正整数$n$分解成一些正整数的和，分解中数字$1$出现$\alpha_{1}$次，
数字$i$ $(2\leq i\leq n)$出现$\alpha_{i}$次），
我们把正整数$n$的拆分数记作$p(n)$（例如，$p(1)=1,p(2)=2,p(3)=3,p(4)=5$），
那么$p(n)$也就是$S_{n}$共轭类的数目。所以$\mathbb{C}S_{n}$不可约模同构类，
或者说$S_{n}$的不可约复表示等价类，数目是$p(n)$。
:::

::: example [有限Abel群的不可约表示]
设$\mathbb{k}$是代数闭域\label{exm:acfofAbgirepeg}，$G$是有限Abel群，
那么$\mathbb{k}G$是交换代数。考虑$\mathbb{k}G$上任何不可约左模$M$，
它是有限维模，由[@lem:acffdireEndk]知$M$上任何一个自同态
是$\mathbb{k}$中元素决定的数乘作用。
而$\mathbb{k}G$的交换性使得每个$g\in G$决定的$M$上左乘变换
是左$\mathbb{k}G$-模同态，
于是$M$的左$\mathbb{k}G$-子模等价于$M$的$\mathbb{k}$-线性子空间。
这一观察意味着$M$作为不可约左$\mathbb{k}G$-模是$1$维的。故

有限Abel群在代数闭域上的不可约表示都是$1$次的。

在[@cor:acfirmicneqCcN]中我们看到只要代数闭域$\mathbb{k}$的特征
不整除有限群的阶$|G|$，那么有限群$G$在代数闭域$\mathbb{k}$上的不可约表示等价类数
恰好就是$G$的共轭类总数。当$G$是有限Abel群时，它的共轭类数目恰好是$|G|$，因此

对有限Abel群$G$和代数闭域$\mathbb{k}$，
只要$\operatorname{char}\mathbb{k}\not| $ $G$，
那么$G$的不可约表示等价类恰好$|G|$个。
:::

::: remark
如果域$\mathbb{k}$不是代数闭域，
那么有限Abel群在$\mathbb{k}$上的不可约表示未必是$1$次的。
例如考虑$3$阶循环群$C_{3}$在$\mathbb{Q}$上的表示
$M=\mathbb{Q}[x]/(x^{2}+x+1)$（通过[例\ref{cycgrpkGeg}]中的代数同构
$\mathbb{Q}C_{3}\cong \mathbb{Q}[x]/(x^{3}-1)$
赋予$M$自然的左$\mathbb{Q}C_{3}$-模结构），
那么由$x^{2}+x+1$是$\mathbb{Q}$上不可约多项式
不难验证$M$是$C_{3}$在$\mathbb{Q}$上的不可约表示，
并注意到$\text{dim}_{\mathbb{Q}}M=2$。
反之，对有限群$G$和域$\mathbb{k}$，
只要$\operatorname{char}\mathbb{k}\not| $ $G$
且$G$在$\mathbb{k}$上的不可约表示都是$1$次的，那么$G$是Abel群。
原因是这时群代数$\mathbb{k}G$作为左$\mathbb{k}G$-模也是完全可约的，
进而存在不可约左$\mathbb{k}G$-模$M_{1},...,M_{t}$
使得$\mathbb{k}G=M_{1}\oplus M_{2}\oplus\cdots\oplus M_{t}$
（比较两边维数不难看出$t=|G|$）。
由[@lem:acffdireEndk]可知任意$g,h\in G$，
作为$M_{i}$上$\mathbb{k}G$-模自同态是域$\mathbb{k}$中元素的数乘变换，
这一观察表明$g$和$h$所决定的$\mathbb{k}G$上的左乘变换是可交换的。
因此$G$是Abel群。结合前面的讨论可知，
如果$G$是有限群且$\mathbb{k}$是特征不整除$|G|$的代数闭域，
则$G$是Abel群的充要条件是$G$在$\mathbb{k}$上的不可约表示都是$1$次的。
:::

::: example [一般有限群的不可约表示构造]
对含幺环$R,S$之间的保幺环同态$\alpha:R\to S$，
我们可以使用$\alpha$为每个左$S$-模$M$赋予自然的左$R$-模结构：
$rx=\alpha(r)x,\forall r\in R,x\in M$。
如果$\alpha$是满环同态，易知$_{S}M$是不可约模蕴含配备$\alpha$诱导的$R$-模$_{R}M$
也不可约。应用这个观点于群的表示理论，我们对每个有限群$G$，
关于它的换位子群$[G,G]$作商可得一有限Abel群$\overline{G}=G/[G,G]$，
并且标准投射$\pi:G\to \overline{G}$是满群同态，
它诱导满环同态$\alpha:\mathbb{k}G\to\mathbb{k}\overline{G},
    \sum\limits_{g\in G}a_{g}g\mapsto \sum\limits_{g\in G}a_{g}\pi(g)$，
由此能够从每个不可约$\mathbb{k}\overline{G}$-模产生不可约左$\mathbb{k}G$-模结构。
用群表示的语言说，我们可以从有限Abel群$\overline{G}$的不可约表示出发
构造有限群$G$的不可约表示。
:::

::: proposition {@pro:1repGandGqGGprop}
设$G$是群，$\mathbb{k}$是域，
那么$G$在$\mathbb{k}$上的$1$次表示等价类
与$G/[G,G]$在$\mathbb{k}$上的$1$次表示等价类间有标准双射
（注意含幺环上有限生成模同构类全体构成集合，故群的$1$次表示等价类全体也构成集合）。
:::

::: proof
任给群$G$的$1$次表示$\rho:G\to GL(V)$，
其中$\text{dim}_{\mathbb{k}}V=1$，
则由$GL(V)\cong\mathbb{k}^{*}$是交换群得到$[G,G]\subseteq\operatorname{Ker}\rho$，
所以$\rho$可天然诱导$G/[G,G]$的表示$\tilde{\rho}:G/[G,G]\to GL(V),
    g[G,G]\mapsto \rho(g) $。命
$$
    \eta:\{G\text{ 在域 }\mathbb{k}\text{ 上的 }1\text{ 次表示 }\}\to
    \{G/[G,G]\text{ 在域 }\mathbb{k}\text{ 上的 }1\text{ 次表示}\},
    [\rho]\mapsto [\tilde{\rho}],
$$
不难验证$\eta$是双射。
:::
