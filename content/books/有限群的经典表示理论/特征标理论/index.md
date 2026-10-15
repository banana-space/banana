---
title: 特征标理论
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
虽然群的矩阵表示使得我们可以通过分析具体的对象结构来了解抽象的群，
但是对高阶群，它的矩阵表示或是置换表示难以具体分析处理。
例如对充分大的正整数$n$，置换群$S_{n}$中每个元素的不相交轮换分解可能基本无法手算。
这时我们需要更精巧的数值不变量，
使得不通过复杂计算也能在一些具体处理问题的场合能为我们提供一些有用的信息。
大量实践经验表明特征标（见[定义\ref{defcg}]）所载有的表示信息在应用中卓有成效。
并且，我们会说明对有限群的任意两个不可约复表示，
这两个复表示等价的充要条件是它们的特征标相同（见[@cor:CrefdEqifftcharae]）。
并且有限维复表示的不可约性可通过计算特征标复内积判别
（见[推论\ref{cor:ireCribyCpcharraincor}]）。

## 基本概念

::: definition [类函数，特征标]
设$G$是群\label{defcg}，$\mathbb{k}$是域。

- 若函数$f:G\to\mathbb{k}$在群$G$的每个共轭类上取值是常值的，
  即$f(gxg^{-1})=f(x),\forall x,g\in G$，则称$f$是一个**类函数**。
  易见$G$的类函数全体关于通常加法和乘法构成含幺交换环，称为$G$的**类函数环**。

- 若$\rho:G\to GL(V)$是次数为$n\geq 1$的有限维表示，
  称$\chi:G\to\mathbb{k},g\mapsto\operatorname{tr}\rho(g)$为该表示的**特征标**。
  不可约表示的特征称为**不可约特征标**。
  称$\rho$的次数为该特征标的**次数**。
  当$\mathbb{k}=\mathbb{C}$时，称$\chi$是**复特征标**。

:::

有时为了突出$\chi$是表示$\rho$的特征标，我们会把特征标记作$\chi_{\rho}$。
从特征的定义可以看到群表示的特征标是群上一个类函数。群$G$两个等价的有限维表示特征标一致。
下面是关于有限维表示特征标的一些简单事实。

::: example [平凡表示特征标]
设$\rho:G\to GL(V)$是群$G$的$n$次平凡表示，
则该表示的特征标$$\chi(g)=n1_{\mathbb{k}},\forall g\in G.$$
:::

::: example [子表示直和特征标]
设$\rho:G\to GL(V)$是群$G$的$n\geq 1$次表示\label{charasum}，
如果$\rho$是子表示$\rho_{1},\rho_{2},...,\rho_{m}$的直和，
即$\rho=\rho_{1}\oplus\rho_{2}\oplus\cdots\oplus\rho_{m}$，
若记$\chi_{i}$是子表示$\rho_{i}$的特征标，
那么明显有$\chi=\sum\limits_{i=1}^{m}\chi_{i}$。
:::

::: example [商表示特征标]
设$\rho:G\to GL(V)$是群$G$的$n\geq 1$次表示，
如果$U$是$V$的$\mathbb{k}G$-子模，
设$\rho_{U}$和$\rho_{V/U}$是相应子表示与商表示，
那么$\chi_{\rho}=\chi_{\rho_{U}}+\chi_{\rho_{V/U}}$。
:::

::: example [表示张量积的特征标]
设群$G$\label{charatensoR}有有限维表示$\rho:G\to GL(V)$
和$\rho^{\prime}:G\to GL(V^{\prime})$，它们次数均正。
在[@exm:tensorpdefpg]中我们已经看到若取定$V$的基
$B=\{u_{1},...,u_{n}\}$，$V^{\prime}$的基$C=\{v_{1},...,v_{m}\}$，
设$\rho(g)$在$B$下的表示矩阵是$\rho_{B}(g)$，
$\rho^{\prime}(g)$在$C$下的表示矩阵是$\rho_{C}(g)$，
那么$(\rho\otimes\rho^{\prime})(g)$
在基$\{u_{1}\otimes v_{1},u_{1}\otimes v_{2},...,u_{1}
    \otimes v_{m},...,u_{n}\otimes v_{1},...,u_{n}\otimes v_{m}\}$下的表示矩阵
是矩阵$\rho_{B}(g)$和$\rho_{C}(g)$的Kronecker积
$\rho_{B}(g)\otimes \rho_{C}(g)$。
于是$\chi_{\rho\otimes\rho^{\prime}}=\chi_{\rho}\chi_{\rho^{\prime}}$。
:::

## 复特征标

实际应用中我们更感兴趣复特征标，它性质丰富。
例如对有限群$G$的$n$次复表示$\rho:G\to GL(V)$，每个$\rho(g)$的特征值总是单位根，
进而$\chi_{\rho}(g)$为一些单位根之和。现在我们来看一些复特征标的基本性质。

::: lemma {@fGanpprimerDiag}
设$G$是有限群，它的**指数**是$m$，即全体元素阶的最小公倍数是$m$。
那么对任何一个群$G$的$n$次复表示$\rho$，对每个$g\in G$，
$\rho(g)$在某个基下表示矩阵是由一些$m$次本原单位根构成的对角阵。
即$\rho(g)$在某个基下表示矩阵形如$\text{diag}\{\omega_{1},...,\omega_{n}\}$，
其中每个$\omega_{i}$是某个$m$次本原单位根。
于是$\chi_{\rho}(g)=\sum\limits_{i=1}^{n}\omega_{i}$。
:::

::: proof
注意线性变换$\rho(g)$在$\mathbb{C}$上的最小多项式整除$x^{m}-1$，
故其最小多项式无重根且特征值均为$m$次本原单位根，
这表明线性变换$\rho(g)$在$\mathbb{C}$上可对角化
且相似于一个主对角线都是$m$次本原单位根的对角阵。
:::

::: remark
上述引理表明对有限群$G$的任何有限维复表示$\rho$，
$\chi_{\rho}(g)$总是一些单位根的和，而单位根总是代数整数
（回忆$\alpha\in\mathbb{C}$被称为**代数数**，
如果$\alpha$是某个首一整系数多项式的根，即$\mathbb{Z}$上整元），
而有限个代数整数的和仍是代数整数
（一般地，对含幺交换环的扩环链$R\subseteq E$，$E$中所有在$R$上的整元，
即满足某个$R$上首一多项式的元素，构成的集合总是$E$的子环，
称为$R$在$E$中的**整闭包**），所以$\chi_{\rho}(g)$是代数整数。
:::

上述引理说有限群$G$它的任何$n$次复表示的特征标均是一些$m$次本原单位根的和，
这里$m$是$G$的指数。
于是对任何$n$次复表示$\rho:G\to GL(V)$，有$|\chi_{\rho}(g)|\leq n$。
不等式中等号成立当且仅当存在$m$次本原单位根$\omega$使得$\rho(g)=\omega\operatorname{id}_{V}$。
充分性明显，必要性：设$\rho(g)$在某个基下表示矩阵形如
$\text{diag}\{\omega_{1},...,\omega_{n}\}$，
其中每个$\omega_{i}$是某个$m$次本原单位根。
那么$\chi_{\rho}(g)=\sum\limits_{i=1}^{n}\omega_{i}$
且$|\sum\limits_{i=1}^{n}\omega_{i}|=n$迫使所有$\omega_{i}$具有相同方向，
即都相同，设$\omega_{i}$的公共值是$\omega$，
那么我们便得到$\rho(g)=\omega\operatorname{id}_{V}$。我们把刚刚的讨论总结为

::: proposition {@chirhonorleqneqiffmrpptop}
设$G$是有限群，它的指数是$m$，$\rho:G\to GL(V)$是$n$次复表示。
那么对每个$g\in G$，有$|\chi_{\rho}(g)|\leq n$。
等号成立当且仅当存在$m$次本原单位根$\omega$使得$\rho(g)=\omega\operatorname{id}_{V}$。
特别地，如果$\chi_{\rho}(g)=n$，那么$\rho(g)=\operatorname{id}_{V}$。
也就是说我们可以直接从有限群$G$的复特征标$\chi$在元素$g$上的取值
读出$\rho(g)$是否是恒等映射！
:::

根据上述命题，对有限群$G$的$n$次复表示$\rho:G\to GL(V)$，
那些满足$|\chi_{\rho}(g)|=n$的元素$g$对应了
某个$m$（$m$表示群的指数）次本原单位根诱导的数乘变换$\rho(g)=\omega\operatorname{id}_{V}$。
同时也看到$\{g\in G|\chi_{\rho}(g)=n\}=\operatorname{Ker}\rho$，
也称$\{g\in G|\chi_{\rho}(g)=n\}$为**该特征标的核**，
记作$\operatorname{Ker}\chi_{\rho}$。我们也引入
$$
    Z(\chi_{\rho})=\{g\in G\mid\text{特征标 }|\chi_{\rho}(g)|=n\}
    =\{g\in G\mid\text{存在 }m\text{ 次本原单位根 }\omega\text{ 使得 }
    \rho(g)=\omega\operatorname{id}_{V}\}.
$$
这也是群$G$的正规子群，并且包含$\operatorname{Ker}\chi_{\rho}=\operatorname{Ker}\rho$。
通过满群同态$Z(\chi_{\rho})\to U(m),g\mapsto\omega$，
这里$\rho(g)=\omega\operatorname{id}_{V}$，我们看到$Z(\chi_{\rho})/\operatorname{Ker}\rho$是循环群。

::: example [对偶表示]
设有限群$G$\label{dualRepeg}有$n$次复表示$\rho:G\to GL(X)$，
那么可如下在$X^{*}=\text{Hom}_{\mathbb{C}}(X,\mathbb{C})$上
赋予左$\mathbb{C}G$-模结构：$g\varphi:X\to\mathbb{C},
    x\mapsto \varphi(g^{-1}x)$，于是得到$G$的表示$\rho^{*}:G\to GL(X^{*})$，
称为$G$关于$\rho$的**对偶表示**。
在[@fGanpprimerDiag]中我们看到对每个$g\in G$，
可选取$X$的一个基$B$使得$\rho(g)$在$B$下的表示矩阵形如
$\text{diag}\{\omega_{1},...,\omega_{n}\}$，
其中每个$\omega_{i}$是某个$m$次本原单位根，$m$是$G$的指数，
考虑$B$对应的$X^{*}$中对偶基$B^{*}$，
容易验证$\rho^{*}(g)$在$B^{*}$下表示矩阵
是$\text{diag}\{\overline{\omega_{1}},...,\overline{\omega_{n}}\}$，
所以$\chi_{\rho}(g^{-1})=\chi_{\rho^{*}}(g)
    =\overline{\chi_{\rho}(g)},\forall g\in G$。
:::

下面的结果表明有限群的忠实不可约复表示的特征标能够提供中心的结构信息。

::: example [应用]
设$G$是有限群，$\rho:G\to GL(V)$是$G$的忠实不可约复表示
（即$\rho$是单同态且$V$是不可约左$\mathbb{C}G$-模），$\chi$是相应的复特征标。
若记$n=\text{dim}_{\mathbb{C}}V$，
则$Z(G)=\{g\in G||\chi(g)|=n\}$且$Z(G)$是循环群。
:::

::: proof
从[@chirhonorleqneqiffmrpptop]
我们看到对任何$g\in G$，只要$\chi(g)=n$，
$\rho(g)$就是由某个本原单位根诱导的数乘变换。
因此对任何$g^{\prime}\in G$以及满足$\chi(g)=n$的元素$g$，
总有$\rho(g^{\prime})\rho(g)=\rho(g)\rho(g^{\prime})$。
结合$\rho$是单射可知$g\in Z(G)$。
反之，如果$g\in Z(G)$，那么[@lem:acffdireEndk]
表明$g$所诱导的$V$上线性变换是$\mathbb{C}$中某个元素$\lambda$的数乘变换。
并且若记$G$的指数是$m$，则$\lambda$一定是$m$次本原单位根。
进而$|\chi(g)|=n|\lambda|=n$。最后我们说明$Z(G)$是循环群。
任取$g,h\in Z(G)$，那么存在$m$次本原单位根$\lambda,\mu$
使得$\rho(g)=\lambda\operatorname{id}_{V},\rho(h)=\mu\operatorname{id}_{V}$，进而
$$\varphi:Z(G)\to \mathbb{C}^{*},g\mapsto \frac{\chi(g)}{n}$$
是定义合理的群同态。通过$\rho$是单射可知$\varphi$是单同态，
故$Z(G)\cong \operatorname{Im}\varphi$是$\mathbb{C}^{*}$的有限乘法子群，为循环群。
:::

::: remark
因此存在忠实不可约复表示的有限群的中心一定是循环群。
:::

::: example {@egnotcyclicabirecfarep}
设$G$是有限Abel群，且$G$不是循环群。
那么$G$不存在忠实不可约复表示。
:::

## 第一正交关系

固定有限群$G$，设$\{\rho_{1},\rho_{2},...,\rho_{r}\}$
是$G$在$\mathbb{C}$上不可约表示等价类的一个代表元集，
$\rho_{i}$的表示空间是$W_{i}$，$\chi_{i}$是$\rho_{i}$的特征标。
那么$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$上所有不可约模同构类的一个代表元集。
对每个$G$的有限维表示$\rho:G\to GL(V)$，
我们已经看到$V$作为完全可约左$\mathbb{C}G$-模可分解为一些不可约模的直和，可设
$$
    V=V_{1}^{(1)}\oplus\cdots\oplus V_{1}^{(m_{1})}\oplus V_{2}^{(1)}
    \oplus\cdots\oplus V_{r}^{(1)}\oplus\cdots\oplus V_{r}^{(m_{r})},
$$
其中每个$V_{i}^{(k)}$是不可约模，对每个$1\leq i\leq r$，
$V_{i}^{\ell}\cong W_{i},\forall 1\leq\ell\leq m_{i}$，
这里$m_{1},...,m_{r}$由$V$决定。
进而得到$\mathbb{C}G$-模同构$V\cong W_{1}^{m_{1}}\oplus W_{2}^{m_{2}}
\oplus\cdots\oplus W_{r}^{m_{r}}$。
从[例\ref{charasum}]可知$\chi_{\rho}=\sum\limits_{i=1}^{r}m_{i}\chi_{i}$。
接下来我们来说明$\{\chi_{1},...,\chi_{r}\}$作为复线性空间
$\mathbb{C}^{G}=\{f:G\to\mathbb{C}\}$的子集线性无关。一旦说明这一点我们马上得到

有限群$G$的两个有限维复表示等价当且仅当它们有相同的特征标。

我们通过证明下面的定理来得到特征标集
$\{\chi_{1},...,\chi_{r}\}$的$\mathbb{C}$-线性无关性。

::: theorem [第一正交关系]
设$G$\label{BasicoRRelThm}是有限群，$\mathbb{k}$的特征零的代数闭域。
$\{\rho_{1},\rho_{2},...,\rho_{r}\}$是$G$在$\mathbb{k}$上
不可约表示等价类的一个代表元集，
$\rho_{i}$的表示空间是$W_{i}$，$\chi_{i}$是$\rho_{i}$的特征标。
那么对每个$g\in G$，有
$$
    \frac{1}{|G|} \sum_{g \in G} \chi_{i}(g)\chi_{j}(g^{-1})
    =\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g^{-1}) \chi_{j}(g)
    = \begin{cases}1, & i=j \\ 0, & i\neq j\end{cases}.
$$
:::

为了看到上述定理成立，对有限群$G$的有限维表示
$\rho:G\to GL(V),\text{dim}_{\mathbb{k}}V=n$，设线性作用的不动点集
$$V^{G}=\{x\in V|gx=x,\forall g\in G\},$$
易见$V^{G}$是$V$作为左$\mathbb{k}G$-模的一个子模，
并且$\operatorname{char}\mathbb{k}=0$使得可构造满$\mathbb{k}G$-模同态
$$p:V\to V^{G},x\mapsto \frac{1}{|G|} \sum_{g \in G} gx$$
使得对标准嵌入$i:V^{G}\to V$有$pi=\operatorname{id}_{V^{G}}$，
因此$p$是$V$在直和因子$V^{G}$上的投射。
我们把$p$视作$V$上线性变换$\tilde{p}:V\to V$
并设$\text{dim}_{\mathbb{k}}V^{G}=t$，
那么可取$V$的一个基$B$使得$\tilde{p}:V\to V$在$B$下的表示矩阵为
$$
    \begin{pmatrix}
    I_{t} & 0 \\ \\
    0 & 0
    \end{pmatrix},
$$
所以$\operatorname{tr}(\tilde{p})=\text{dim}_{\mathbb{k}}V^{G}$。
另一方面，由$p$的定义可以看出$\tilde{p}=(1/|G|)\sum\limits_{g\in G}\rho(g)$，
对该等式两边取迹得
$$\tilde{p}=\frac{1}{|G|} \sum_{g \in G}\chi_{\rho}(g),$$
总结一下，得到

::: lemma
对有限群$G$的有限维表示$\rho:G\to GL(V),\text{dim}_{\mathbb{k}}V=n$，
设线性作用的不动点集$V^{G}=\{x\in V|gx=x,\forall g\in G\}$，
那么$\text{dim}_{\mathbb{k}}V^{G}=(1/|G|)\sum_{g \in G}\chi_{\rho}(g)$。
:::

对群$G$上任意两个左$\mathbb{k}G$-模$X,Y$，
可如下赋予$\text{Hom}_{\mathbb{k}}(X,Y)$一个左$\mathbb{k}G$-模结构：
对每个$g\in G$，$\varphi\in\text{Hom}_{\mathbb{k}}(X,Y)$，
定义$g\varphi:X\to Y,x\mapsto g\varphi(g^{-1}x)$。
那么$\text{Hom}_{\mathbb{k}}(X,Y)$给出群$G$的一个表示。

::: example
设$G$是群，$X,Y$是左$\mathbb{k}G$-模，
则$\text{Hom}_{\mathbb{k}}(X,Y)^{G}=\text{Hom}_{\mathbb{k}G}(X,Y)$。
:::

通过取对偶基容易验证下述经典同构。

::: lemma
设$G$是群，$X,Y$是左$\mathbb{k}G$-模，
那么$X\otimes_{\mathbb{k}}Y$上通过表示的张量积可知
有一个左$\mathbb{k}G$-模结构（见[@exm:tensorpdefpg]），
对$\text{Hom}_{\mathbb{k}}(X,Y),X^{*}
    =\text{Hom}_{\mathbb{k}}(X,\mathbb{k})$
通过前面的方式赋予左$\mathbb{k}G$-模结构（其中$\mathbb{k}$上左模结构平凡），
则当$X$或$Y$是有限维模时有左$\mathbb{k}G$-模同构
$X^{*}\otimes_{\mathbb{k}}Y\cong\text{Hom}_{\mathbb{k}}(X,Y)$。
:::

现在我们把上述引理具体到有限维复表示的场景，对有限维非零左$\mathbb{C}G$-模$X,Y$，
由模同构$X^{*}\otimes_{\mathbb{C}}Y\cong\text{Hom}_{\mathbb{C}}(X,Y)$知
它们对应的表示有相同的特征标，设$\rho_{X},\rho_{Y}$分别是模$X,Y$对应的复表示。
从[例\ref{charatensoR}]看到$X^{*}\otimes_{\mathbb{C}}Y$的特征标
由$\chi_{\rho_{X}^{*}}\chi_{\rho_{Y}}$给出，
而[例\ref{dualRepeg}]中已说明$\chi_{\rho_{X}^{*}}=\overline{\chi_{\rho_{X}}}$，
所以$\text{Hom}_{\mathbb{C}}(X,Y)$对应的表示的特征标
是$\overline{\chi_{\rho_{X}}}\chi_{\rho_{Y}}$。
因此由$\text{Hom}_{\mathbb{C}}(X,Y)^{G}=\text{Hom}_{\mathbb{C}G}(X,Y)$
以及$\text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}}(X,Y)^{G}
=(1/|G|)\sum_{g \in G}\overline{\chi_{\rho_{X}}(g)}\chi_{\rho_{Y}}(g)$知

::: proposition
设有限群$G$有有限维复表示\label{Hompropdimeqinnchar}
$\rho_{X}:G\to GL(X),\rho_{Y}:G\to GL(Y)$，其中$X,Y\neq 0$。
那么$$
    \text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}G}(X,Y)
    =\frac{1}{|G|}\sum_{g \in G}\overline{\chi_{\rho_{X}}(g)}\chi_{\rho_{Y}}(g)
    =\frac{1}{|G|}\sum_{g \in G}\chi_{\rho_{X}}(g^{-1})\chi_{\rho_{Y}}(g)
    =\frac{1}{|G|}\sum_{g \in G}\chi_{\rho_{X}}(g)\chi_{\rho_{Y}}(g^{-1}).
$$
:::

::: remark
如果$X$是不可约复表示，则$\text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}G}(X,Y)$
就是$Y$不可约分解中与$X$同构的不可约直和项数目。
如果$Y$是不可约表示，$\text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}G}(X,Y)$
是$X$不可约分解中与$Y$同构的不可约直和项数目。
:::

现在我们可以给出[定理\ref{BasicoRRelThm}]的证明：
对不可约模同构类代表元集$\{W_{1},...,W_{r}\}$，有
$$
    \text{dim}_{\mathbb{C}G}\text{Hom}_{\mathbb{C}G}(W_{i},W_{j})
    =\frac{1}{|G|}\sum_{g \in G}\overline{\chi_{i}(g)}\chi_{j}(g).
$$
当$i=j$时，[@lem:acffdireEndk]说上式等号左边的维数是$1$。
当$i\neq j$时，明显$\text{Hom}_{\mathbb{C}G}(W_{i},W_{j})=0$，证毕。

对有限群$G$，在复线性空间$\mathbb{C}^{G}$上，
对每个$\varphi,\psi\in \mathbb{C}^{G}$，通过定义
$$
    \langle \varphi,\psi\rangle
    =\frac{1}{|G|}\sum_{g \in G}\overline{\varphi(g)}\psi(g),\forall g\in G,
$$
可赋予$\mathbb{C}^{G}$复内积结构。
那么[定理\ref{BasicoRRelThm}]无非是说
不可约特征标集$\{\chi_{1},...,\chi_{r}\}$是两两正交且长度是$1$的向量集，
这也是为什么我们称该定理体现的是“正交关系”。
特别地，我们得到$\{\chi_{1},...,\chi_{r}\}$是$\mathbb{C}$-线性无关的。

::: corollary {@cor:CrefdEqifftcharae}
有限群$G$的两个有限维复表示等价当且仅当它们有相同的特征标。
:::

该推论表明有限群$G$的有限维复表示的特征标承载了复表示结构上的所有信息。
此外，引入复内积语言后，任何有限维表示的特征标在该复内积下的长度
可由不可约分解中的“重数”表示。具体地，有

::: corollary [复表示的不可约性关于内积的判别]
设有限群$G$有有限维复表示$\rho:G\to GL(V)$\label{cor:ireCribyCpcharraincor}，
并设有$\mathbb{C}G$-模同构$V\cong W_{1}^{m_{1}}\oplus W_{2}^{m_{2}}
    \oplus\cdots\oplus W_{r}^{m_{r}}$（$m_{1},...,m_{r}$由$V$决定），
其中$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
它们对应的不可约表示特征标集设为$\{\chi_{1},...,\chi_{r}\}$。
我们有$\chi_{\rho}=\sum\limits_{i=1}^{r}m_{i}\chi_{i}$，
并且$\langle \chi_{\rho},\chi_{\rho}\rangle=\sum\limits_{i=1}^{r}m_{i}^{2}$。
特别地，$\rho$是不可约复表示当且仅当$\langle \chi_{\rho},\chi_{\rho}\rangle=1$。
若取$V=\mathbb{C}G$，那么$\langle \chi_{\rho},\chi_{\rho}\rangle=|G|$
（回忆[@cor:sumcoAcFssGo]）。
:::

::: corollary {@tensorireestilrecorcomf}
给定有限群族$\{G_{i}|1\leq i\leq m\}$，$W_{i}$是不可约左$\mathbb{C}G_{i}$-模，
$\rho_{i}:G\to GL(W_{i})$是$W_{i}$对应的不可约复表示。
则群$G_{1}\times\cdots\times G_{m}$有天然的复表示
$\rho:G_{1}\times\cdots\times G_{m}\to
    GL(W_{1}\otimes_{\mathbb{C}}\cdots\otimes_{\mathbb{C}}W_{m})$
满足$\rho(g)=\rho_{1}(g)\otimes\cdots\otimes\rho_{m}(g)$。
那么$\rho$是$G_{1}\times\cdots\times G_{m}$的不可约复表示。
:::

::: proof
根据[推论\ref{cor:ireCribyCpcharraincor}]，只需验证上述表示$\rho$满足
$\langle \chi_{\rho},\chi_{\rho}\rangle=1$。即要说明下式的值为$1$：
$$
    \frac{1}{|G_{1}\times\cdots\times G_{m}|}
    \sum\limits_{(g_{1},...,g_{m})}\chi_{\rho}(g_{1},...,g_{m})
    \overline{\chi_{\rho}(g_{1},...,g_{m})}
    =\frac{1}{|G_{1}|\cdots |G_{m}|}\sum\limits_{(g_{1},...,g_{m})}
    |\chi_{\rho}(g_{1},...,g_{m})|^{2}.
$$
结合每个$\rho_{i}$是不可约表示，记其复特征标为$\chi_{i}$，便有
$$
    \frac{1}{|G_{1}|\cdots |G_{m}|}
    \sum\limits_{(g_{1},...,g_{m})}|\chi_{\rho}(g_{1},...,g_{m})|^{2}
    =\left(\frac{1}{|G_{1}|}\sum\limits_{g_{1}\in G_{1}}
    |\chi_{1}(g_{1})|^{2}\right)\cdots \left(\frac{1}{|G_{m}|}
    \sum\limits_{g_{m}\in G_{m}}|\chi_{m}(g_{m})|^{2}\right)=1.
$$
:::

因为有限维复表示$\chi_{\rho}$关于自己的复内积由定义是
$$
    \langle \chi_{\rho},\chi_{\rho}\rangle
    =\frac{1}{|G|}\sum_{g \in G}\overline{\chi_{\rho}(g)}\chi_{\rho}(g),
    \forall g\in G,
$$
特征标相当于算有限维线性空间上线性变换的迹，它的计算并不需要把线性变换所有特征值解出，
因此计算复特征标的复内积在实际计算中是可行的。
前面提到有限群的元素个数可通过计算$\mathbb{C}G$对应的复表示特征标自身和自身的内积得到，
任何有限维复表示的不可约性判别也可由复特征标内积计算得到。
所以有限群的特征标理论不止步于理论本身的优美与重要研究意义，也具有很高的应用价值。
若有限群$G$的共轭类全体是$\{C_{1},...,C_{r}\}$，$\{\chi_{1},...,\chi_{r}\}$
是不可约复表示等价类的一个代表元集$\{\rho_{1},...,\rho_{r}\}$所对应的复特征标
（我们已经从[@cor:acfirmicneqCcN]中看到
$r$就是$\mathbb{C}G$上所有不可约模等价类的数目），
每个$\chi_{i}$可视作共轭类上的函数，于是得到下表
$$
    \begin{array}{c|cccc}
    & C_{1} & C_{2} & \cdots & C_{r} \\
    \hline \chi_1 & \chi_{1}(C_{1}) & \chi_{1}(C_{2}) & \cdots & \chi_{1}(C_{r}) \\
    \chi_2 & \chi_{2}(C_{1}) & \chi_{2}(C_{2}) & \cdots & \chi_{2}(C_{r}) \\
    \vdots & \vdots &\vdots & &\vdots \\
    \chi_r & \chi_{r}(C_{1}) & \chi_{r}(C_{2}) & \cdots & \chi_{r}(C_{r})
    \end{array}
$$称为群$G$的**复特征标表**。设$C_{1}=\{1_{G}\}$，
则特征标表$C_{1}$所在的列，各元素$\chi_{i}(C_{1})$就是$\rho_{i}$的次数。
我们也指出特征标表实际上也给我们提供了一个复方阵
$$
    \begin{pmatrix}
    \chi_{1}(C_{1}) & \chi_{1}(C_{2}) & \cdots & \chi_{1}(C_{r}) \\ \\
    \chi_{2}(C_{1}) & \chi_{2}(C_{2}) & \cdots & \chi_{2}(C_{r}) \\ \\
    \vdots &\vdots & &\vdots \\ \\
    \chi_{r}(C_{1}) & \chi_{r}(C_{2}) & \cdots & \chi_{r}(C_{r})
    \end{pmatrix}\in\text{M}_{r}(\mathbb{C}).
$$

下面应用特征标的复内积来导出有限群所有不可约复表示维数的平方和就是群的阶，
也就是说特征标表第一列的平方和，
即$\sum\limits_{i=1}^{r}(\chi_{i}(C_{1}))^{2}(C_{1}=\{1_{G}\})$，是$|G|$。

在[@exm:rgpeg]中引入了正则表示，它相当于是对群$G$利用群代数上的模结构给出一个表示。
在[@cor:sumcoAcFssGo]中我们也看到若有限群$G$
与代数闭域$\mathbb{k}$使$\operatorname{char}k{\not|}$ $|G|$，
则考察正则表示对应的不可约模直和分解
$\mathbb{k}G\cong W_{1}^{m_{1}}\oplus W_{2}^{m_{2}}\oplus\cdots
\oplus W_{r}^{m_{r}}$，
其中$\{W_{1},...,W_{r}\}$是$\mathbb{k}G$-不可约模同构类代表元集，
会得到$|G|=\sum\limits_{i=1}^{r}m_{i}^{2}$，
即正则表示的不可约表示直和分解中所有重数平方和给出群的阶。
下面我们说明当$\mathbb{k}=\mathbb{C}$时每个$m_{i}=\text{dim}_{\mathbb{k}}W_{i}$，
即有限群$G$的正则表示的不可约表示直和分解中，
每个$W_{i}$对应表示$\rho_{i}$的重数$m_{i}$恰是$W_{i}$作为复线性空间的维数，
进而知群的阶$|G|$就是所有$W_{i}$作为复线性空间的维数平方和。

::: lemma {@fGirredims2seqGolem}
设$G$是有限群，$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
并设有$\mathbb{C}G$-模同构$\mathbb{k}G
    \cong W_{1}^{m_{1}}\oplus W_{2}^{m_{2}}\oplus\cdots\oplus W_{r}^{m_{r}}$，
那么对每个$1\leq i\leq r$，有$m_{i}=\text{dim}_{\mathbb{C}}W_{i}$。
进而$|G|=\sum\limits_{i=1}^{r}(\text{dim}_{\mathbb{C}}W_{i})^{2}$。
:::

::: proof
记$W_{i}$对应的不可约表示为$\rho_{i}$，其特征标是$\chi_{i}$，
正则表示仍记为$\rho:G\to GL(\mathbb{C}G)$。
那么[推论\ref{cor:ireCribyCpcharraincor}]说
$\chi_{\rho}=\sum\limits_{i=1}^{r}m_{i}\chi_{i}$，
从而对每个$i$有$\langle \chi_{\rho},\chi_{i}\rangle=m_{i}$。
另一方面，由正则表示的定义不难看到
$\chi_{\rho}(g)=0,\forall g\neq 1_{G}\in G$以及$\chi_{\rho}(1_{G})=|G|$。
所以$$
    m_{i}=\langle \chi_{\rho},\chi_{i}\rangle
    =\frac{1}{|G|}\sum_{g \in G}\overline{\chi_{\rho}(g)}\chi_{i}(g)
    =\frac{1}{|G|}\overline{\chi_{\rho}(1_{G})}\chi_{i}(1_{G})
    =\chi_{i}(1_{G})=\text{dim}_{\mathbb{C}}W_{i}.
$$
:::

::: remark
该结论也说明有限群$G$在复数域上的群代数$\mathbb{C}G$的线性维数就是$G$所有（互不
等价的）不可约表示等价类的线性维数平方和。一般地，利用Artin半单代数的结构定理可以
证明：对代数闭域$\mathbb{k}$上有限维代数$A$，$\text{dim}_{\mathbb{k}}A$总不
超过$A$所有互不等价的不可约表示等价类的线性维数平方和。等号成立当且仅当$A$是半单
代数。若取$A$是有限群在复数域上的群代数，便得到上述引理的结论。
:::

::: theorem
设$G,H$是有限群，$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
$\{T_{1},...,T_{s}\}$是$\mathbb{C}H$-不可约模同构类代表元集。
那么$\mathbb{C}G$与$\mathbb{C}H$作为$\mathbb{C}$上代数同构的充要条件是
$r=s$且经适当重排后有\label{grpalgisowithirredegthm}
$$\text{dim}_{\mathbb{C}}W_{i}=\text{dim}_{\mathbb{C}}T_{i},i=1,2,...,r.$$
:::

::: proof
必要性是明显的，只证充分性。通过[@fGirredims2seqGolem]
我们看到群在复数域上群代数作为Artin半单代数的结构
完全由不可约表示等价类数目以及不可约表示的次数决定。
:::

在[例\ref{exm:acfofAbgirepeg}]中我们看到有限Abel群$G$
在代数闭域$\mathbb{k}$上的不可约表示都是$1$次的，
所以群代数$\mathbb{k}G$上的不可约模都是$1$维的。
下面我们用刚刚得到的事实给出一个有限群交换性的刻画。

::: example [应用：有限群交换性刻画]
设$G$是有限群，则$G$交换的充要条件是任何不可约左$\mathbb{C}G$-模都是$1$维的，
即任何不可约复表示都是$1$次的。因此我们可以读特征标表第一列元素来判别有限群的交换性。
例如对称群$S_{3}$的共轭类总数是$p(3)=3$（回忆[@exm:Sncomppartrg]），
所以可设$S_{3}$的一个不可约复表示代表元集是$\{\rho_{1},\rho_{2},\rho_{3}\}$，
$\rho_{i}$的次数是$m_{i}$，那么$6=|S_{3}|=m_{1}^{2}+m_{2}^{2}+m_{3}^{2}$
表明$S_{3}$存在次数高于$1$的不可约表示，
事实上求解上式的正整数解便知在等价意义下$S_{3}$有两个$1$次不可约表示
和一个$2$次不可约表示。这就反映了$S_{3}$是非交换的。
:::

::: proof
只需说明充分性：如果任何不可约左$\mathbb{C}G$-模都是$1$维的，
那么[@fGirredims2seqGolem]表明$G$的共轭类总数就是$|G|$，
这迫使群$G$每个元素所在的共轭类是单点集，进而知$G$是交换群。
:::

## 第二正交关系

在[定理\ref{BasicoRRelThm}]中我们得到了复特征标的第一正交关系，
本节我们介绍另一种正交关系，它不仅指出复特征标表不同的列是正交的，
也为我们提供了用复特征标计算有限群中一给定元素所在共轭类元素数目的公式
（见[定理\ref{secoRthrethm2}]）。

对有限群$G$，设$G$的共轭类全体是$\{C_{1},...,C_{r}\}$，
$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
它们对应的不可约表示特征标集设为$\{\chi_{1},...,\chi_{r}\}$。我们有下述特征标表
$$
    \begin{array}{c|cccc}
    & C_{1} & C_{2} & \cdots & C_{r} \\
    \hline \chi_1 & \chi_{1}(C_{1}) & \chi_{1}(C_{2}) & \cdots & \chi_{1}(C_{r}) \\
    \chi_2 & \chi_{2}(C_{1}) & \chi_{2}(C_{2}) & \cdots & \chi_{2}(C_{r}) \\
    \vdots & \vdots &\vdots & &\vdots \\
    \chi_r & \chi_{r}(C_{1}) & \chi_{r}(C_{2}) & \cdots & \chi_{r}(C_{r})
    \end{array}
$$前面提到过我们可以把特征标表视作一个$r$阶复方阵
$$
    \begin{pmatrix}
    \chi_{1}(C_{1}) & \chi_{1}(C_{2}) & \cdots & \chi_{1}(C_{r}) \\ \\
    \chi_{2}(C_{1}) & \chi_{2}(C_{2}) & \cdots & \chi_{2}(C_{r}) \\ \\
    \vdots &\vdots & &\vdots \\ \\
    \chi_{r}(C_{1}) & \chi_{r}(C_{2}) & \cdots & \chi_{r}(C_{r})
    \end{pmatrix}.
$$回忆不可约特征标的第一正交关系（见[定理\ref{BasicoRRelThm}]）表明
$$
    \frac{1}{|G|} \sum_{k=1}^{r}|C_{k}|\chi_{i}(C_{k})
    \overline{\chi_{j}(C_{k})}=\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g)
    \overline{\chi_{j}(g)}=\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g)\chi_{j}(g^{-1})
    = \begin{cases}1, & i=j \\ 0, & i\neq j\end{cases}.
$$作复方阵
$$
    A=\frac{1}{\sqrt{|G|}}\begin{pmatrix}
    \chi_{1}(C_{1})\sqrt{|C_{1}|} & \chi_{1}(C_{2})\sqrt{|C_{2}|} & \cdots & \chi_{1}(C_{r})\sqrt{|C_{r}|} \\ \\
    \chi_{2}(C_{1})\sqrt{|C_{1}|} & \chi_{2}(C_{2})\sqrt{|C_{2}|} & \cdots & \chi_{2}(C_{r})\sqrt{|C_{r}|} \\ \\
    \vdots &\vdots & &\vdots \\ \\
    \chi_{r}(C_{1})\sqrt{|C_{1}|} & \chi_{r}(C_{2})\sqrt{|C_{2}|} & \cdots & \chi_{r}(C_{r})\sqrt{|C_{r}|}
    \end{pmatrix},
$$
那么$A$的行向量是两两正交的单位复向量，所以$A$是酉矩阵，
这说明$A$的列向量全体也是两两正交的单位向量。于是我们得到了下述定理。

::: theorem [第二正交关系]
设$G$是有限群\label{secoRthrethm2}，$G$的共轭类全体是$\{C_{1},...,C_{r}\}$，
$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
它们对应的不可约表示特征标集设为$\{\chi_{1},...,\chi_{r}\}$。那么

(1)对每个共轭类$C_{k}$，有$\sum\limits_{i=1}^{r}
    \overline{\chi_{i}(g)}\chi_{i}(g)=|G|/|C_{k}|,\forall g\in C_{k}$。
特别地，对任何$g\in G$，$g$所在的共轭类元素个数是
$|G|/\Big(\sum\limits_{i=1}^{r}|\chi_{i}(g)|^{2}\Big)$，
这给出了用特征标计算共轭类元素个数的公式。

(2)设$a,b\in G$是不共轭的两个元素，那么
$\sum\limits_{i=1}^{r}\overline{\chi_{i}(a)}\chi_{i}(b)=0$。
特别地，复特征标表中任意两个不同的列作为$\mathbb{C}^{r}$中列向量（在标准复内积下）正交。
:::

::: example [$S_{3}$的复特征标表]
我们已经看到$S_{3}$的不可约复表示在等价意义下有三个，
其中两个是$1$次表示，剩下一个是$2$次表示。设$\chi_{1}$是平凡表示的复特征标，
$\chi_{2}$是非平凡的$1$次表示复特征标，$\chi_{3}$是不可约$2$次表示的复特征标。
记$C_{1}=\{1\}$，$C_{2}$是对换$(1\ 2)$所在的共轭类，
$C_{3}$是轮换$(1\ 2 \ 3)$所在的共轭类。则可设
$$
    \begin{array}{c|ccc}
    & C_{1} & C_{2} & C_{3}  \\
    \hline \chi_{1} & 1 & 1 & 1  \\
    \chi_2 & 1 & x & y \\
    \chi_{3} & 2 &z & w
    \end{array}
$$其中$x,y,z,w\in\mathbb{C}$，下面来确定$x,y,z,w$。
注意到$\chi_{2}$是$1$次表示的特征标，因此$x,y$是单位根。
而$C_{2}$中元素的阶为$2$蕴含$x$满足$x^{2}=1$，类似地，$y^{3}=1$。
利用第一正交关系，由$|C_{2}|=3,|C_{3}|=2$可知$1+3x+2y=0$，
因此由$x$是整数迫使$y$是有理数。从而$y=1,x=-1$。于是上述特征标表变为
$$
    \begin{array}{c|ccc}
    & C_{1} & C_{2} & C_{3}  \\
    \hline \chi_{1} & 1 & 1 & 1  \\
    \chi_2 & 1 & -1 & 1 \\
    \chi_{3} & 2 &z & w
    \end{array}
$$
现在利用第二正交关系可得$2z=0,1+1+2w=0$，解得$z=0,w=-1$。
由此得到$S_{3}$的复特征标表：
$$
    \begin{array}{c|ccc}
    & C_{1} & C_{2} & C_{3}  \\
    \hline \chi_{1} & 1 & 1 & 1  \\
    \chi_2 & 1 & -1 & 1 \\
    \chi_{3} & 2 &0 & -1
    \end{array}
$$
:::

下面我们应用第二正交关系来提取$8$阶非交换群的不可约复表示信息。

::: example [应用]
设$G$是$8$阶非交换群
（例如四元数$8$元群$Q_{8}=\{\pm 1,\pm i,\pm j,\pm k\}\subseteq\mathbb{H}$），
那么

(1)中心$Z(G)=[G,G]$且中心的阶为$2$。

(2)群$G$共有$5$个不可约复表示同构类，其中$4$个次数为$1$；
剩下的次数为$2$，以下将其特征标记作$\chi$。

(3)若$g\neq 1\in Z(G)$，则$\chi(g)=-2$；若$g\notin Z(G)$，则$\chi(g)=0$。
:::

::: proof
(1)对任何素数$p$，$p$-群的中心非平凡，所以$Z(G)$的阶只可能是$2,4$。
如果$|Z(G)|=4$，那么由$G/Z(G)$是循环群得到$G$是交换群，矛盾。
因此$Z(G)$是$2$阶群。
一方面，$G/Z(G)$作为$4$阶群必交换，这说明$[G,G]\subseteq Z(G)$。
另一方面，$G$的非交换性表明$[G,G]$非平凡，所以$[G,G]=Z(G)$。

(2)根据[@pro:1repGandGqGGprop]，群$G$的$1$次不可约复表示同构类数目
就是$G/[G,G]=G/Z(G)$的$1$次不可约复表示同构类数目。
结合[例\ref{exm:acfofAbgirepeg}]便知$G$的$1$次不可约复表示同构类数目是$|G/[G,G]|=4$。
设$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
其中$r\geq 4$且$W_{1},W_{2},W_{3},W_{4}$是都是$1$次不可约复表示。
若设$W_{i}$的线性维数是$n_{i}$，则[@fGirredims2seqGolem]告诉我们
$n_{1}^{2}+\cdots+n_{r}^{2}=|G|=8$。
由$n_{1}=n_{2}=n_{3}=n_{4}=1$且$n_{j}\geq 2$ $(5\leq j\leq r)$知
$r=5$且$n_{5}=2$。因此群$G$共有$5$个不可约复表示同构类，其中$4$个次数为$1$；
剩下的次数为$2$。

(3)通过[@cor:acfirmicneqCcN]我们看到$G$的共轭类总数是$5$，
设$G$所有共轭类为$$C_{1}=\{1\},C_{2}=Z(G)-C_{1},C_{3},C_{4},C_{5}.$$
注意到$|C_{1}|=|C_{2}|=1$，因此由$|C_{3}|,|C_{4}|,|C_{5}|\geq 2$
迫使$|C_{3}|=|C_{4}|=|C_{5}|=2$。
设$W_{1},W_{2},W_{3},W_{4}$对应的不可约特征标是
$\chi_{1},\chi_{2},\chi_{3},\chi_{4}$，并记$\chi_{5}=\chi$。
如果$g\neq 1\in Z(G)$，则$C_{2}=\{g\}$。那么
$$
    \overline{\chi_{1}(1)}\chi_{1}(g)+\overline{\chi_{2}(1)}\chi_{2}(g)
    +\overline{\chi_{3}(1)}\chi_{3}(g)+\overline{\chi_{4}(1)}\chi_{4}(g)
    +\overline{\chi_{5}(1)}\chi_{5}(g)=0.
$$
由此可知$\chi_{1}(g)+\chi_{2}(g)+\chi_{3}(g)+\chi_{4}(g)+2\chi_{5}(g)=0$。
注意到$g\in Z(G)=[G,G]$，所以$g$诱导的$1$次不可约表示上的作用都是恒等的，
从而$\chi_{j}(g)=1,1\leq j\leq 4$。由此解出$\chi(g)=\chi_{5}(g)=-2$。
由第一正交关系得到
$$
    2^{2}+(-2)^{2}+2(|\chi(C_{3})|^{2}+|\chi(C_{4})|^{2}+|\chi(C_{5})|^{2})
    =\sum_{k=1}^{r}|C_{k}|\chi(C_{k})\overline{\chi(C_{k})}=|G|=8,
$$
因此$\chi(C_{3})=\chi(C_{4})=\chi(C_{5})=0$。
即$\chi(g)=0,\forall g\notin Z(G)$。
:::

::: remark
沿用前面的记号，我们还可以计算上述$8$阶非交换群$G$的复特征标表。可设
$$
    \begin{array}{c|ccccc}
    & C_{1} & C_{2} & C_{3} & C_{4} & C_{5} \\
    \hline \chi_{1} & 1 & 1 & 1  & 1 & 1\\
    \chi_{2} & 1 & a_{1} & b_{1} & c_{1} & d_{1}\\
    \chi_{3} & 1 &a_{2} & b_{2} &  c_{2} & d_{2}\\
    \chi_{4} & 1 &a_{3} & b_{3} & c_{3} & d_{3} \\
    \chi_{5} & 2 & -2 & 0 & 0 & 0 \\
    \end{array}
$$通过第二正交关系考察上述表的前两列可得$a_{1}+a_{2}+a_{3}=3$。
注意到$a_{i}^{2}=1(1\leq i\leq 3)$，那么只可能$a_{1}=a_{2}=a_{3}=1$。
因此由第一正交关系以及$|C_{3}|=|C_{4}|=|C_{5}|=2$
可得对每个$1\leq j\leq 3$都有$b_{j}+c_{j}+d_{j}=-1$。
因为$G$不是循环群，因此$G$中元素的阶至多$4$，
这蕴含$b_{j},c_{j},d_{j}$ $(1\leq j\leq 3)$均为$4$次单位根，
即$a_{j},b_{j},c_{j}\in\{\pm 1,\pm i\}$。
利用$b_{j}+c_{j}+d_{j}=-1$以及第二至四行两两正交
可通过反证法说明$a_{j},b_{j},c_{j}=\pm 1$。
在[@cor:CrefdEqifftcharae]中我们看到两个不等价的有限维复表示的特征标不同，
因此对固定的正整数$1\leq j\leq 3$，$b_{j}+c_{j}+d_{j}=-1$
迫使$b_{j},c_{j},d_{j}$中恰有两个是$-1$，剩余的是$1$。
不妨设$b_{1}=c_{2}=d_{3}=1$，那么$G$的复特征标表为
$$
    \begin{array}{c|ccccc}
    & C_{1} & C_{2} & C_{3} & C_{4} & C_{5} \\
    \hline \chi_{1} & 1 & 1 & 1  & 1 & 1\\
    \chi_{2} & 1 &1 & 1 &-1 & -1 \\
    \chi_{3} & 1 & 1 & -1 &  1 & -1\\
    \chi_{4} & 1 & 1 & -1  & -1 & 1 \\
    \chi_{5} & 2 & -2 & 0 & 0 & 0 \\
    \end{array}
$$
通过比较元素的阶，易验证正方形的二面体群$D_{4}$与四元数群$Q_{8}$是不同构的非交换群。所以

不同构的有限群可能有相同的复特征标表。

不过[定理\ref{grpalgisowithirredegthm}]告诉我们两个有限群只要有相同的复特征标表，
至少它们在复数域上群代数同构。这也让我们看到两个不同构的同阶有限群可能有等价的表示范畴，
因此研究给定的有限群的线性表示范畴虽然可以帮助我们获取很多群的结构信息，但并没有蕴含
群的所有结构信息。
:::

## 一些算术性质

本节我们着眼于不可约复特征标的一些算术性质。[@lem:acffdireEndk]表明
代数闭域$\mathbb{k}$上代数上的有限维不可约表示的自同态都是基域内某个元素的数乘，
因此对有限群$G$的不可约表示$\rho_{1},...,\rho_{r}$
（设对应的不可约$\mathbb{k}G$模分别为$W_{1},...,W_{r}$）内固定的$\rho_{i}$，
只要$c\in Z(\mathbb{k}G)$，$c$决定的左乘变换对应$W_{i}$上模自同态。这一观察使我们看到：

::: lemma {@irecomrelinexfradimalgn}
设$G$是有限群，$c\in Z(\mathbb{C}G)$，
那么对任何$G$的不可约复表示$\rho:G\to GL(V)$有
$$
    \tilde{\rho}(c)
    =\frac{\tilde{\chi}_{\rho}(c)}{\text{dim}_{\mathbb{C}}V}\operatorname{id}_{V},
$$
这里$\tilde{\rho}:\mathbb{C}G\to \text{End}_{\mathbb{C}}V$是$\rho$的线性延拓，
$\tilde{\chi}_{\rho}:\mathbb{C}G\to \mathbb{C}$
是$\chi_{\rho}$的线性延拓。
:::

下述观察是之后证明Burnside定理所需必要准备。

::: corollary {@algintefracdimconbrunlemco}
设$G$是有限群，设$G$的共轭类全体是$\{C_{1},...,C_{r}\}, C_{1}=\{1\}$，
$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
它们对应的不可约表示特征标集设为$\{\chi_{1},...,\chi_{r}\}$。
那么对任给$g_{j}\in C_{j}$与特征标$\chi_{i}$有
$$
    \frac{|C_{j}|\chi_{i}(g_{j})}{\chi_{i}(1)}
    =\frac{|C_{j}|\chi_{i}(g_{j})}{\text{dim}_{\mathbb{C}}W_{i}}
$$
是代数整数。
:::

::: proof
沿用[@pro:propcogclasNeqdimcent]中的记号，
对每个$1\leq i\leq r$，置$c_{i}$是共轭类$c_{i}$中所有元素的和，
那么$\{c_{1},...,c_{r}\}$是$Z(\mathbb{C}G)$的一个基，
那么对任给正整数$1\leq s,t\leq r$，存在整数$m_{stl}$ $(1\leq l\leq r)$使得
$$c_{s}c_{t}=\sum_{l=1}^{r}m_{stl}c_{l},$$
两边作用$W_{i}$对应不可约表示的线性延拓
$\tilde{\rho}_{i}:\mathbb{C}G\to \mathbb{C}$
和$\chi_{i}$的线性延拓$\tilde{\chi}_{i}:\mathbb{C}G\to \mathbb{C}$可得
$$
    \frac{|C_{s}|\chi_{i}(g_{s})}{\chi_{i}(1)}
    \frac{|C_{t}|\chi_{i}(g_{t})}{\chi_{i}(1)}
    =\left(\sum_{l=1}^{r}m_{stl}|C_{l}|\chi_{i}(g_{l})\right)\big/
    \chi_{i}(1).
$$对条件中固定的指标$i$和每个正整数$1\leq j\leq r$，
记$u_{j}=|C_{j}|\chi_{i}(g_{j})/\chi_{i}(1)$，
补充定义$u_{0}=1$并作考虑$\mathbb{C}$作为$\mathbb{Z}$-模的子模
$M=\mathbb{Z}u_{0}+\mathbb{Z}u_{1}+\cdots+\mathbb{Z}u_{r}$，
那么$M$是有限生成$\mathbb{Z}$-模且对每个$u_{j}$有$u_{j}M\subseteq M$。
:::

于是结合特征标的正交关系我们可以证明有限群的不可约复表示的次数总整除群的阶。

::: corollary {@cor:coriredediGo}
设$G$是有限群，设$G$的共轭类全体是$\{C_{1},...,C_{r}\}, C_{1}=\{1\}$，
$\{W_{1},...,W_{r}\}$是$\mathbb{C}G$-不可约模同构类代表元集，
它们对应的不可约表示特征标集设为$\{\chi_{1},...,\chi_{r}\}$。
那么对每个$1\leq i\leq r$有$\chi_{i}(1)$整除$|G|$。
:::

::: proof
下面说明有理数$|G|/\chi_{i}(1)$是$\mathbb{Z}$上整元来得到$\chi_{i}(1)$整除$|G|$。
根据第一正交关系（回忆[定理\ref{BasicoRRelThm}]）有
$$
    \frac{1}{|G|} \sum_{k=1}^{r}|C_{k}|\chi_{i}(C_{k})
    \overline{\chi_{j}(C_{k})}
    =\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g)
    \overline{\chi_{j}(g)}
    =\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g)\chi_{j}(g^{-1})
    = \begin{cases}1, & i=j \\ 0, & i\neq j\end{cases}.
$$现取$j=i$，则$|G|=\sum\limits_{k=1}^{r}|C_{k}|\chi_{i}(C_{k})
\overline{\chi_{i}(C_{k})}$。由此得到
$$
    \frac{|G|}{\chi_{i}(1)}=\sum_{k=1}^{r}
    \frac{|C_{k}|\chi_{i}(C_{k})}{\chi_{i}(1)}\overline{\chi_{i}(C_{k})}.
$$
[@algintefracdimconbrunlemco]表明
$|C_{k}|\chi_{i}(C_{k})/\chi_{i}(1)$是代数整数，
因此由$\chi_{i}(g)=\overline{\chi_{i}(g^{-1})},\forall g\in G$
（见[例\ref{dualRepeg}]）也是代数整数便知$|G|/\chi_{i}(1)$是$\mathbb{Z}$上整元。
因为$\mathbb{Z}\subseteq\mathbb{Q}$是整闭扩张，所以$\chi_{i}(1)$整除$|G|$。
:::

::: remark
该推论通常被称为Frobenius可除性定理。
:::

上述推论可以进一步加强为有限群的不可约复表示的次数可以整除中心在有限群中的指数。

::: theorem
设$G$是有限群，$\rho_{i}:G\to GL(W_{i})$是不可约复表示，
则特征标$\chi_{i}(1)$整除$[G:Z(G)]$。
:::

::: proof
根据[@tensorireestilrecorcomf]得到群$G^{m}=G\times\cdots\times G$
的不可约复表示$\rho=\rho_{i}\otimes\cdots\otimes \rho_{i}:
    G^{m}\to GL(W_{i}\otimes_{\mathbb{C}}W_{i}\otimes_{\mathbb{C}}
    \cdots\otimes_{\mathbb{C}}W_{i})$
（以下为叙述方便将$W_{i}\otimes_{\mathbb{C}}W_{i}\otimes_{\mathbb{C}}
    \cdots\otimes_{\mathbb{C}}W_{i}$记作$X$）。
因为每个$c\in Z(G)$满足$\rho(c)$是$W_{i}$上$\mathbb{C}G$-模自同构，
所以[@lem:acffdireEndk]表明存在唯一的$\gamma_{i}(c)\in\mathbb{C}^{*}$
使得$\rho(c)=\gamma_{i}(c)\text{id}_{W_{i}}$。
于是得到群同态$\gamma_{i}:Z(G)\to\mathbb{C}^{*}$，
易见$\rho(1,...,1,c,1,...,1)=\gamma_{i}(c)\operatorname{id}_{X}$。
所以对任给$c_{1},...,c_{m}\in Z(G)$有$\rho(c_{1},...,c_{m})
    =\gamma_{i}(c_{1}\cdots c_{m})\operatorname{id}_{X}$。因此
$$D=\{(c_{1},...,c_{m})\in G^{m}|c_{j}\in Z(G),c_{1}\cdots c_{m}=1\}$$
不仅是$G^{m}$的正规子群还含于$\operatorname{Ker}\rho$（不难看出$D$的阶为$|Z(G)|^{m-1}$）。
由此得到$G^{m}/D$的一个不可约复表示$\overline{\rho}:G^{m}/D\to GL(X)$。
应用[@cor:coriredediGo]，
可知$\chi_{i}(1)^{m}$整除$|G|^{m}/|Z(G)|^{m-1}$。
特别地，对任何正整数$m$有
$$
    \left(\frac{|G|}{|Z(G)|\chi_{i}(1)}\right)^{m}
    \in\mathbb{Z}\frac{1}{|Z(G)|}\subseteq \mathbb{Q}.
$$
进而得到$_{\mathbb{Z}}\mathbb{Q}$的有限生成$\mathbb{Z}$-子模
$$M=\sum_{m=0}^{\infty}\mathbb{Z}\left(\frac{|G|}{|Z(G)|\chi_{i}(1)}\right)^{m}.$$
若记$u=[G:Z(G)]/\chi_{i}(1)$，那么$uM\subseteq M$且$1\in M$。
这说明有理数$u$是$\mathbb{Z}$上整元，于是$u\in\mathbb{Z}$。
:::

::: example [应用]
设$p,q$是素数满足$p>q$，$G$是$pq$阶非交换群。
那么$q$整除$p-1$，$[G,G]$的元素数目是$p$，
$G$有$q$个$1$次不可约复表示等价类和$(p-1)/q$个$q$次不可约复表示等价类。
:::

::: proof
因为$G$非交换，所以$[G:G]\neq 1$。
依Sylow定理，$p>q$蕴含$G$有唯一的Sylow $p$-子群$P$，从而$P$是正规子群。
于是由$G/P$是交换群得$[G,G]\subseteq P$，
结合$[G,G]$非平凡得到$[G,G]=P$为$p$阶群。
由[@pro:1repGandGqGGprop]，
$G$的$1$次不可约复表示等价类数与$q$阶循环群$G/[G,G]$的$1$次不可约复表示等价类数一致。
因此$G$恰有$q$个$1$次不可约复表示等价类。
在[@cor:coriredediGo]中我们看到有限群不可约复表示的次数总整除群的阶，
所以若设$\mathbb{C}G$上不可约模等价类的一个代表元集
是$\{W_{1},...,W_{q},W_{q+1},...,W_{q+k}\}$，其中$W_{1},...,W_{q}$均为$1$维模，
则对每个$q+1\leq j\leq q+k$有$\text{dim}_{\mathbb{C}}W_{j}$整除$|G|$。
再利用[@fGirredims2seqGolem]可得
$(\text{dim}_{\mathbb{C}}W_{q+1})^{2}+(\text{dim}_{\mathbb{C}}W_{q+2})^{2}
    +\cdots+(\text{dim}_{\mathbb{C}}W_{q+k})^{2}=(p-1)q$，
因此$p>q$迫使对每个$q+1\leq j\leq q+k$
有$\text{dim}_{\mathbb{C}}W_{j}=q$。于是可得$q$整除$p-1$且$k=(p-1)/q$。
:::

## Burnside定理

W. Burnside（英国，1852–1927）于1904年利用有限群表示论的工具证明了下述定理。

::: theorem [Burnside]
设$p,q$是素数，$a,b\in\mathbb{N}$，那么阶为$p^{a}q^{b}$的群是可解群。
:::

本节的目标是证明上述定理，首先我们回顾可解群的基本概念与性质。若群$G$存在正规列
$$
    G=G_{1}\trianglerighteq G_{2}\trianglerighteq G_{3}
    \trianglerighteq \cdots \trianglerighteq G_{s}
    \trianglerighteq G_{s+1}=\{1_{G}\}
$$
满足每个商因子$G_{i}/G_{i+1}$是Abel群，则称$G$是**可解群**。
否则称该群**不可解**。可解群的“可解”一词来源
便是它在多项式根式求解问题上起到至关重要的作用——特征为零的域$F$上
次数不低于$1$的多项式方程$f(x)=0$可根式求解的充要条件是该多项式的Galois群是可解群。
让我们来回顾一些可解群的基本例子。

::: example
若单群$G$是可解群，则$G$是Abel群。故交错群$A_{n}$ $(n\geq 5)$不可解。
:::

::: remark
这一观察表明Burnside定理成立意味着非交换有限单群的阶至少被三个不同的素数整除。
:::

::: example
设$n$是正整数，则当$n\leq 4$时对称群$S_{n}$可解，当$n\geq 5$时对称群$S_{n}$不可解。
:::

::: proof
$S_{1}$与$S_{2}$的可解性是明显的。
$S_{3}$有正规列$S_{3}\trianglerighteq A_{3}\trianglerighteq\{(1)\}$，
它的两个商因子都是Abel群，所以$S_{3}$也是可解群。
当$n=4$时，记$K=\{(1),(12)(34),(14)(23),(24)(13)\}$，
可直接验证$K$是$S_{4}$的正规子群（注意$4$阶群都交换，$K$是Abel群），
所以$S_{4}$有正规列$S_{4}\trianglerighteq A_{4}\trianglerighteq K
    \trianglerighteq \{(1)\}$，它每个商因子都是Abel群，所以$S_{4}$是可解群。
最后我们来看$n\geq 5$的情形，假设$S_{n}$可解，那么有商因子都是Abel群的正规列
$S_{n}\trianglerighteq G_{2}\trianglerighteq G_{3}
    \trianglerighteq \cdots \trianglerighteq G_{s}\trianglerighteq \{(1)\}$，
那么存在正整数$i\geq 2$使得$G_{i}\neq S_{n}$，
设$l$是使得$G_{l}\neq S_{n}$的最小正整数，
因为$n\geq 5$时$S_{n}$的正规子群只有$S_{n},A_{n},\{(1)\}$，
所以$G_{l}=A_{n}$或$\{(1)\}$，但$G_{l-1}/G_{l}$是交换群，所以$G_{l}=A_{n}$。
因为$A_{n}$不是交换群，所以存在正整数$l+1\leq t\leq s$使得$G_{t}\neq A_{n}$，
设$t$是满足条件的最小正整数，那么由$A_{n}$是单群知$G_{t}=\{(1)\}$，
于是$G_{t-1}/G_{t}\cong A_{n}$非交换，矛盾。所以当$n\geq 5$时$S_{n}$不是可解群。
:::

::: remark
这里关于$n\geq 5$时$S_{n}$的正规子群只有$S_{n},A_{n},\{(1)\}$可如下证明：
设$N$是$S_{n}$的一个正规子群，如果$N\subseteq A_{n}$，
那么由$A_{n}$是单群知$N=\{(1)\}$或$A_{n}$。
下设$N\nsubseteq A_{n}$。首先$N\cap A_{n}=\{(1)\}$或$A_{n}$，
如果$A_{n}\subseteq N$，那么由$N\neq A_{n}$知$N=S_{n}$。
如果$N \cap A_{n}=\{(1)\}$，那么由$|N|>1$知$NA_{n}=S_{n}$，
从而$|N|=2$，但当$n\geq 5$时，$S_{n}$不存在阶为$2$的正规子群，矛盾。
:::

::: example
称群$G$是**幂零群**，如果群$G$存在中心正规列，即有$G$的正规子群列
$$
    G=G_{1}\trianglerighteq G_{2}\trianglerighteq G_{3}
    \trianglerighteq \cdots \trianglerighteq G_{s}
    \trianglerighteq G_{s+1}=\{1_{G}\}
$$
满足每个商因子$G_{i}/G_{i+1}\subseteq Z(G/G_{i+1})$。
从该定义立即看到幂零群是可解群且任何Abel群是幂零群。
:::

对群$G$，我们也将$G$的换位子群记作$G^{\prime}$或$G^{(1)}$，
将$G^{\prime}$的换位子群记作$G^{\prime\prime}$或$G^{(2)}$，
递归地可以定义$G^{(k)}=(G^{(k-1)})^{\prime},k\geq 2$，
称$G^{(k)}$为$G$的 **$k$次导群**。$G$的零次导群定义为$G$本身。
下面是可解群的一个等价刻画，我们将使用它去证明任何一个可解群的商群还是可解群。

::: proposition
给定群$G$，那么$G$可解的充要条件是存在正整数$k$使得$G^{(k)}=\{1_{G}\}$。
:::

::: proof
充分性：如果存在正整数$k$使得$G^{(k)}=\{1_{G}\}$，
那么$G$有正规列$G=G^{(0)}\trianglerighteq G^{(1)}
    \trianglerighteq\cdots \trianglerighteq G^{(k-1)}
    \trianglerighteq G^{(k)}=\{1_{G}\}$，且该正规列每个商因子是交换群，所以$G$可解。

必要性：假设$G$可解，即有正规列$G=G_{1}\trianglerighteq G_{2}
    \trianglerighteq G_{3}\trianglerighteq \cdots \trianglerighteq G_{s}
    \trianglerighteq G_{s+1}=\{1_{G}\}$。如果$s=1$，结论直接成立，下设$s\geq 2$。
因为$G/G_{2}$是交换群，所以$G_{2}\supseteq G^{(1)}$。
假设对正整数$1\leq i\leq s-1$有$G_{i+1}\supseteq G^{(i)}$，
那么$G_{i+1}/G_{i+2}$为交换群表明
$G_{i+2}\supseteq G_{i+1}^{\prime}\supseteq (G^{(i)})^{\prime}=G^{(i+1)}$，
故归纳地我们得到$G_{s+1}\supseteq G^{(s)}$，因此取$k=s$得到$G^{(k)}=\{1_{G}\}$。
:::

::: remark
通过该命题立即得到可解群的子群都可解。事实上也可以得到可解群的同态像都可解。
具体地，给定可解群$G$，如果群$K$满足存在$G$到$K$的满群同态$f:G\to K$，
那么$K$也是可解群。我们断言对任何满群同态$f:G\to K$必有
$f(G^{(i)})=K^{(i)},\forall i\geq 1$，下面对正整数$i$作归纳。
当$i=1$时，群同态$f$将任何一个$G$的换位子映为$K$的一个换位子，
所以$G^{(1)}\subseteq f^{-1}(K^{(1)})$，于是$f(G^{(1)})\subseteq K^{(1)}$。
反之，因为$f$是满射，所以$f(G^{(1)})$包含任何一个$K$的换位子，
于是$f(G^{(1)})\supseteq K^{(1)}$，从而$f(G^{(1)})=K^{(1)}$，
所以$i=1$时结论成立。假设结论对正整数$i$成立，即$f(G^{(i)})=K^{(i)}$，
那么对满群同态$\tilde{f}:G^{(i)}\to K^{(i)},x\mapsto f(x)$
应用$i=1$时已证明的结论可得
$f(G^{(i+1)})=f((G^{(i)})^{\prime})=(K^{i})^{\prime}=K^{(i+1)}$。
故由数学归纳原理知断言成立。
当$G$是可解群时，由可解性的导群刻画知存在正整数$s$使得$G^{(s)}=\{1_{G}\}$，
所以$K^{s}=\{1_{K}\}$，这说明$K$也是可解群。
特别地，我们得到对可解群$G$的任何正规子群$N$，$G/N$也是可解群。
:::

::: corollary {@sovgrpiffcor}
设$G$是群，且有正规子群$N$，那么$G$是可解群的充要条件是
$G/N$与$N$可解。
:::

::: proof
根据前面的讨论，只需再验证充分性。
由条件，$N$有正规列$N=N_{1}\trianglerighteq N_{2}
    \trianglerighteq \cdots \trianglerighteq N_{s}\trianglerighteq \{1_{G}\}$
满足每个商因子是Abel群，$G/N$有正规列
$G/N=\overline{G_{1}}\trianglerighteq \overline{G_{2}}
    \trianglerighteq  \cdots \trianglerighteq \overline{G_{t}}
    \trianglerighteq \overline{1_{G}}$满足每个商因子是Abel群。
由子群对应定理，存在$G$的子群$G_{i}\supseteq N$
使得$G_{i}/N=\overline{G_{i}},\forall 1\leq i\leq t$。
易见子群列$G=G_{1}\supseteq G_{2}\supseteq\cdots\supseteq G_{t}\supseteq N
    \supseteq N_{2}\supseteq\cdots\supseteq N_{s}\supseteq\{1_{G}\}$
是正规列且每个商因子是Abel群，故$G$是可解群。
:::

::: example
设$p$是素数，那么$p$-群是可解群\label{pgroupsob}。
:::

::: proof
设该群的阶$|G|=p^{n}$，我们对正整数$n$作归纳。
当$n=1$时，$G$是$p$阶循环群，有正规列$G\trianglerighteq\{1_{G}\}$，
该正规列唯一的商因子交换，结论成立。下设结论对不超过$n$的正整数成立，
现考虑$p^{n+1}$阶群$G$，因为$p$-群的中心非平凡，所以$Z(G)$也是$p$-群，
设$|Z(G)|=p^{m},1\leq m\leq n+1$，当$m=n+1$时，有$Z(G)=G$，即$G$是交换群，
此时有正规列$G\trianglerighteq\{1_{G}\}$，商因子同构于$G$为交换群。
如果$1\leq m\leq n$，那么$G/Z(G)$与$Z(G)$都是$p$-群，
由归纳假设可知它们都是可解群，所以$G$可解。
:::

接下来回到Burnside定理的准备中，首先我们需要：

::: lemma {@burnsidekeylem}
设$\chi$是有限群$G$的某个不可约复表示$\rho:G\to GL(V)$的特征标。
那么$G$的共轭类$C$满足$|C|$与$\chi(1)=\text{dim}_{\mathbb{C}}V$互素，
那么对任给$g\in C$有$\chi(g)=0$或$\rho(g)\in\mathbb{C}\operatorname{id}_{V}$。
:::

::: proof
由条件知存在整数$m,l$使得$m\chi(1)+l|C|=1$，
所以等式两边同时除以$\chi(1)$并乘上$\chi(g)$可得等式
$$\frac{\chi(g)}{\chi(1)}=l|C|\frac{\chi(g)}{\chi(1)}+m\chi(g),g\in C.$$
在[@algintefracdimconbrunlemco]中我们看到对$g\in C$
有$|C|\chi(g)/\chi(1)$是代数整数，因此由$\chi(g)$本身也是代数整数立即得到
$\chi(g)/\chi(1)$是代数整数。设$\chi(g)=\omega_{1}+\cdots+\omega_{n}$
是$n$个$\ell$次本原单位根的和（回忆[@fGanpprimerDiag]），
考虑$\ell$次本原单位根$\zeta_{\ell}=e^{2\pi i/\ell}$生成的$\ell$次分圆域
$\mathbb{Q}(\zeta_{\ell})$，
那么有有限扩张$\mathbb{Q}(\zeta_{\ell})\supseteq \mathbb{Q}$，
并且它是Galois扩张（原因是$\zeta_{\ell}$在$\mathbb{Q}$上的最小多项式
在$\mathbb{Q}(\zeta_{\ell})$上分裂）。
考虑该域扩张的Galois群$\operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell})
    =\{\sigma\in \operatorname{Aut}\mathbb{Q}(\zeta_{\ell})|\sigma(q)=q,
    \forall q\in\mathbb{Q}\}$。
注意到$\chi(g)/\chi(1)\in\mathbb{Q}(\zeta_{\ell})$，
并且对任何$\sigma\in \operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell})$
总有$\sigma(\chi(g))$是$n$个$\ell$次本原单位根的和。现作
$$
    N=\prod\limits_{\sigma\in \operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell})}
    \sigma\left(\frac{\chi(g)}{\chi(1)}\right),
$$
那么$\tau(N)=N,\forall \tau\in \operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell}) $。
前面提到分圆域$\mathbb{Q}(\zeta_{\ell})$是$\mathbb{Q}$的有限Galois扩张，
因此$\mathbb{Q}(\zeta_{\ell})$中关于
$\operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell})$中
所有元素作用不动的元素在$\mathbb{Q}$中，于是上面构造的$N$在$\mathbb{Q}$中。
$N$作为有限个代数整数之积依然是代数整数，
结合它是有理数以及$\mathbb{Q}\supseteq \mathbb{Z}$是整闭扩张可得$N\in\mathbb{Z}$。
注意到对每个$\sigma\in \operatorname{Aut}_{\mathbb{Q}}\mathbb{Q}(\zeta_{\ell})$
有$\sigma(\chi(g)/\chi(1))$是模长不超过$1$非复数，所以$|N|=0$或$1$。
如果$N=0$，那么$\chi(g)=0$。
如果$|N|=1$，那么[@chirhonorleqneqiffmrpptop]表明
存在$\ell$次本原单位根$\omega$使得$\rho(g)=\omega \operatorname{id}_{V}$。
因此对固定的$g\in C$有$\chi(g)=0$或$\rho(g)\in\mathbb{C}\operatorname{id}_{V}$。
:::

::: remark
这里回忆证明过程中涉及到的Galois理论的概念和相关性质。
对有限扩张$E\supseteq F$，总有$|\operatorname{Aut}_{F}E|\leq[E:F]$。
如果等号成立，则称该域扩张$E\supseteq F$为**Galois扩张**。
设域扩张$E\supseteq F$是有限扩张，那么该域扩张Galois扩张的充要条件是
对任给$c\in E-F$，存在$\sigma\in \operatorname{Aut}_{F}E$使得$\sigma(c)\neq c$。
设域扩张$E\supseteq F$是有限扩张，那么$E\supseteq F$是Galois扩张的充要条件是
存在$\alpha\in E$使得$E=F[\alpha]$且$\alpha$在$F$上的首一最小多项式
在$E[x]$中可以分解为两两互异的一次多项式乘积，即能够在$E$上分裂且没有重根。
:::

::: theorem {@fsimncogpnpthm}
设$G$是有限单群，那么不存在$G$的共轭类$C$使得$|C|$为某个素数的正整数幂。
:::

::: proof
如果$G$是Abel群，结论明显成立。下设$G$非交换，我们用反证法证明结论。
假设存在素数$p$与$G$的共轭类$C$使得$|C|=p^{\ell}$，其中$\ell$是某个正整数。
设$G$有不可约复表示$\{\rho_{1},...,\rho_{r}\}$，
对应特征标集$\{\chi_{1},...,\chi_{r}\}$，并记$\rho_{i}(1)=n_{i}$。
我们不妨设$\rho_{1}$是平凡表示$\rho_{1}:G\to GL(\mathbb{C}),
    g\mapsto \operatorname{id}_{\mathbb{C}}$，
那么$n_{1}=1$且$\chi_{1}(g)=1,\forall g\in G$。

**断言。** 存在正整数$2\leq j\leq r$使得$p$整除$n_{j}$。

若不然，只要正整数$i$满足$p$不整除$n_{i}$，
那么$|C|$与$\chi_{i}(1)$互素，于是应用[@burnsidekeylem]得到
对$g\in C$有$\chi_{i}(g)=0$或$\rho_{i}(g)\in\mathbb{C}\operatorname{id}$。
假设存在$g\in C$使得$\chi_{i}(g)\neq 0$，
那么$N=\{g\in G|\rho_{i}(g)\in\mathbb{C}\operatorname{id}\}$是$G$的非平凡正规子群，
由$G$是单群迫使$N=G$，所以$G\cong \rho_{i}(G)$为Abel群，
这与条件矛盾，所以$\chi_{i}(g)=0,\forall g\in C$。
由特征标理论的第二正交关系（回忆[定理\ref{secoRthrethm2}]），
对$g\in C$与$1$这两个不共轭的元素有
$$
    0=\sum_{i=1}^{r}\overline{\chi_{i}(1)}\chi_{i}(g)
    =\sum_{i=1}^{r}n_{i}\chi_{i}(g)=\chi_{1}(1)=1,
$$矛盾。
断言得证，即有某个$n_{j}$能够被素数$p$整除。依然考虑第二正交关系导出的等式
$$1+\sum_{i=2}^{r}n_{i}\chi_{i}(g)=0,g\in C.$$
通过前面证明断言的讨论我们知道上式那些满足$p$不整除$n_{i}$的项满足$\chi_{i}(g)=0$，
因此由每个$\chi_{i}(g)$是代数整数知上式蕴含$1/p$是代数整数。
这与$\mathbb{Q}\supseteq \mathbb{Z}$是整闭扩张矛盾。
:::

::: example [应用]
设$G$是有限非交换单群，则$G$的任何Abel子群$H$满足$[G:H]$不是素数的自然数幂。
:::

::: proof
假设存在素数$p$与自然数$m$使得$[G:H]=p^{m}$，
那么由$G$非交换知$m\geq 1$。并且由$G$是非交换单群知$H\neq 1$，
否则$|G|=p^{m}$表明$G$不是单群或$G$是交换群。
故可取$h\neq 1\in H$，那么中心化子$C(h)\supseteq H$。
由$Z(G)$平凡知$C(h)\subsetneq G$。
于是$[G:C(h)]$作为$[G:H]$的因子是$p$的正整数幂。
而$[G:H]$就是$h$在$G$中共轭类的元素数目，
所以$G$存在共轭类$C$使得$|C|$为$p$的正整数幂，
这与[@fsimncogpnpthm]矛盾。
:::

::: corollary
设$p,q$是不同的素数，$a,b\in\mathbb{N}_{\geq 1}$，
那么阶为$p^{a}q^{b}$的群不是单群\label{cor:paqbnotsimcor}。
:::

::: proof
设$G$是满足条件的有限群，取$G$的一个Sylow $p$-子群$P$，
那么由$P$是$p$-群知其中心$Z=Z(P)$非平凡，取$z\neq 1\in Z$，
那么$z$在群$G$中的中心化子$C(z)\supseteq P$，
这意味着指数$[G:C(z)]$（也是元素$z$所在的共轭类元素数目）是素数$q$的幂次。
如果$[G:C(z)]>1$，那么由[@fsimncogpnpthm]知$G$不是单群。
如果$[G:C(z)]=1$，那么$z\in Z(G)$，于是$Z(G)\neq 1$。
如果$Z(G)\neq G$，那么由$Z(G)$是$G$的非平凡正规子群知$G$不是单群。
如果$Z(G)=G$，那么$G$作为阶不是素数正整数幂的Abel群自然不是单群。
:::

::: remark
该推论的意义是要寻找非交换的有限单群，只需从阶至少含三个不同素因子的群里找。
:::

现在我们可以正式地给出Burnside定理的证明：对$n=|G|$作归纳，当$n=1$时结论直接成立。
假设结论对阶不超过$n-1$ $(n\geq 1)$的群成立，那么对$n=p^{a}q^{b}$的有限群$G$，
如果$a$与$b$中有一个为零，那么[例\ref{pgroupsob}]保证了$G$可解。
下设$a,b$均不为零，这时[推论\ref{cor:paqbnotsimcor}]保证了
$G$存在正规子群$N$满足$1\subsetneq N\subsetneq G$，
$N$与$G/N$的阶都具备一个素数的自然数幂乘上一个素数的自然数幂的形式，并且阶严格小于$n$，
故对$N$和$G/N$应用归纳假设得到$N,G/N$是可解群。
最后应用[@sovgrpiffcor]得到$G$是可解群。

之前已经提到，Burnside定理在有限单群分类问题中的基本意义是
它告诉我们要寻找非交换有限单群只需从阶至少有三个不同素因子的群中找。
下述定理是有限单群分类问题中里程碑式的成果。

::: theorem [Feit-Thompson]
奇数阶单群可解，因此任何奇数阶单群同构于奇素数阶循环群。
:::

该定理由W. Feit（美国，1930–2004）与J. G. Thompson（美国，1932–）
于1963年证明，论文长达255页。

## 诱导表示

如果含幺环$R,S$间有保幺环同态$\alpha:R\to S$，可以通过$\alpha$将每个$S$-模视作$R$-模。
设$\mathbb{k}$是域，考虑到群$G$的任何子群$H$决定的群代数$\mathbb{k}H$
到$\mathbb{k}G$有标准嵌入$j:\mathbb{k}H\to\mathbb{k}G$，
所以任何左$\mathbb{k}G$-模都可以视作左$\mathbb{k}H$-模。

::: definition [限制模]
设$G$是群，有子群$H$且$\mathbb{k}$是域。
那么任何左$\mathbb{k}G$-模$M$可天然视作左$\mathbb{k}H$-模，
将左$\mathbb{k}H$-模$M$记作$\text{Res}_{H}^{G}M$，
称为$M$的**限制模**。因此任何群$G$的表示可限制为子群$H$的表示。
:::

::: remark
给定保幺环同态$\alpha:R\to S$，$M$是左$S$-模，
那么通过$\alpha$赋予$M$左$R$-模结构后，
有天然的左$R$-模同构$_{R}M\cong\text{Hom}_{S}({_{S}S_{R},{_{S}T}})$。
因此左$\mathbb{k}G$-模$M$满足左$\mathbb{k}H$-模同构
$\text{Res}_{H}^{G}M\cong \text{Hom}_{\mathbb{k}G}(\mathbb{k}G,M)$。
根据限制模的定义不难看出限制模的概念给出共变函子
$\text{Res}_{H}^{G}(-):\mathbb{k}G\text{-Mod}\to \mathbb{k}H\text{-Mod}$，
称为**限制函子**。根据前面的讨论容易验证自然同构
$\text{Res}_{H}^{G}(-)\cong \text{Hom}_{\mathbb{k}G}(\mathbb{k}G,-)$。
:::

::: example
设$G$是有限群，$H$是子群且$\mathbb{k}$是域。
那么$\mathbb{k}G$作为$\mathbb{k}H$-$\mathbb{k}H$双模在单边均自由。
以右模情形为例，若设$\{g_{1}H,g_{2}H,...,g_{n}H\}$是群$G$关于$H$的一个左陪集分解，
则$\{g_{1},...,g_{n}\}$是$\mathbb{k}G$作为右$\mathbb{k}H$-模的基
\label{fGsubHbasisfreeEG}。
:::

前面提到通过保幺环同态$\alpha:R\to S$可将任何$S$-模视作$R$-模，
那么$S$-模作为$R$-模的结构仍可反映原先作为$S$-模的一些结构信息。
例如$S$-模$M$如果有非零真子模那么$M$作为$R$-模也有非零真子模。
进而知$_{R}M$是不可约模蕴含$_{S}M$也是不可约模。翻译成群表示的语言，我们得到

::: proposition
设$G$是群，有子群$H$且$\mathbb{k}$是域。
如果线性表示$\rho:G\to GL(V)$满足
将该表示限制于子群$H$得到的表示$\rho_{H}:H\to GL(V)$是不可约表示，
那么$\rho$也是不可约表示。
:::

如果有限群$G$存在性质好的子群，我们也可以该子群的信息得到一些不可约表示的信息。

::: proposition {@alg0clfireeGleqindepropabesub}
设有限群$G$有Abel子群$H$，则$G$在特征为零的代数闭域$\mathbb{k}$上
任何不可约表示次数不超过子群$H$在$G$中的指数$[G:H]$。
:::

::: proof
设$\rho:G\to GL(V)$是群$G$在域$\mathbb{k}$上的一个不可约表示，
那么它可自然限制为$H$的不可约表示。
根据Maschke定理，$V$作为左$\mathbb{k}H$-模可分解为
一些不可约左$\mathbb{k}H$-模的直和，
而[例\ref{exm:acfofAbgirepeg}]说有限Abel群在代数闭域上的不可约表示都是$1$次的，
所以$V$可以分解为一些$1$维左$\mathbb{k}H$-模的直和。
总之，$V$存在$1$维左$\mathbb{k}H$-子模$W$，
考虑$V$作为左$\mathbb{k}G$-模的子模
$$V^{\prime}=\sum\limits_{g\in G}gW,$$
那么由$V^{\prime}=V$且集合$\{gW|g\in G\}$的元素数目不超过$ [G:H]$知结论成立。
:::

::: remark
若取有限群$G$的平凡子群$H=\{1\}$，那么上述命题给出的不可约表示维数上界是平凡的。
:::

::: example
设$D_{n}$是正$n$边形的二面体群，记$r$为将正$n$边形中心置于平面原点
绕原点逆时针旋转$2\pi/n$对应的旋转变换，
那么$\langle r\rangle$是$D_{n}$的指数为$2$的Abel子群。
故$D_{n}$的不可约复表示次数为$1$或$2$。
:::

前面我们看到有了整个群的表示可以通过取限制模的手段得到子群的表示。
反之，也可以从小群的表示出发构造大群的表示。保
幺环同态$\alpha:R\to S$赋予$S$天然的$R$-$R$双模结构，
于是任何左$R$-模$M$可产生左$S$-模$S\otimes_{R}M$。
类似于限制模的情形，对群$G$的子群$H$，
考虑群代数的嵌入$j:\mathbb{k}H\to\mathbb{k}G$，便可得到诱导模的概念。

::: definition [诱导模]
设$G$是群，有子群$H$且$\mathbb{k}$是域。
那么任何左$\mathbb{k}H$-模$M$可诱导左$\mathbb{k}G$-模
$\mathbb{k}G\otimes_{\mathbb{k}H}M$，
记作$\text{Ind}_{H}^{G}M$，称为$M$的**诱导模**。
若记$\rho:H\to GL(M)$是左$\mathbb{k}H$-模$M$对应的表示，
则称左$\mathbb{k}G$-模$\text{Ind}_{H}^{G}M$对应的表示为
$\rho$的**诱导表示**。
这给出共变函子$\text{Ind}_{H}^{G}(-):\mathbb{k}H\text{-Mod}
    \to \mathbb{k}G\text{-Mod}$，称为**诱导函子**。
:::

::: remark
对保幺环同态$\alpha:R\to S,\beta:S\to T$，
任何左$R$-模$M$可经这两个环同态视作左$S$-模以及左$T$-模。
并且有左$T$-模同构$T\otimes_{S}(S\otimes_{R}M)\cong T\otimes_{R}M$。
因此，如果群$G$有子群链$N\subseteq H\subseteq G$，
那么对任何$N$的线性表示$M$有左$\mathbb{k}G$-模同构
$\text{Ind}_{N}^{G}M\cong \text{Ind}_{H}^{G}(\text{Ind}_{N}^{H}M)$，
因此诱导表示具有传递性。
:::

在[例\ref{fGsubHbasisfreeEG}]中我们看到若$H$是$G$的子群，
则$\mathbb{k}G$是$\mathbb{k}H$上的自由右模，
并且存在一个基由$G$关于$H$左陪集分解的代表元集构成。
现考虑子群$H$的表示$M$，那么作为$\mathbb{k}$-线性空间，
诱导模$\mathbb{k}G\otimes_{\mathbb{k}H}M\cong  M^{[G:H]}$。
所以若$M$是有限维表示，设$M$作为$\mathbb{k}$-线性空间有基$\{x_{1},...,x_{m}\}$，
$G$关于子群$H$的左陪集分解有代表元集$\{g_{1},...,g_{n}\}$，
那么$\{g_{i}\otimes x_{j}|1\leq i\leq n,1\leq j\leq m\}$
是$\text{Ind}_{H}^{G}M$作为$\mathbb{k}$-线性空间的基。我们把刚刚的讨论总结为：

::: proposition {@linbasisofindrepprop}
设$G$是有限群，$H$是子群，$M$是$H$在域$\mathbb{k}$上的有限维表示，
那么线性维数$\dim_{\mathbb{k}}\text{Ind}_{H}^{G}M
    =[G:H]\dim_{\mathbb{k}}M$。
若设$M$作为$\mathbb{k}$-线性空间有基$\{x_{1},...,x_{m}\}$，
$G$关于子群$H$的左陪集分解有代表元集$\{g_{1},...,g_{n}\}$，
那么$\{g_{i}\otimes x_{j}|1\leq i\leq n,1\leq j\leq m\}$
是$\text{Ind}_{H}^{G}M$作为$\mathbb{k}$-线性空间的基。
:::

::: remark
该命题表明有限群子群的有限维表示产生的诱导表示的维数是给定表示维数的指数倍。
:::

除了诱导表示与给定表示之间的维数关系，我们也关心诱导表示的特征标。首先可直接验证下述结果。

::: lemma
设$G$是有限群\label{indrepgBmatrixrepformlem}，$H$是子群，
$\rho:G\to GL(M)$是$H$在域$\mathbb{k}$上的有限维表示，
$M$作为$\mathbb{k}$-线性空间有基$B=\{x_{1},...,x_{n}\}$，
$G$关于子群$H$的左陪集分解有代表元集$\{g_{1},...,g_{m}\}$。
取定$\text{Ind}_{H}^{G}M$作为$\mathbb{k}$-线性空间的基
$C=\{g_{i}\otimes x_{j}|1\leq i\leq n,1\leq j\leq m\}$
（根据[@linbasisofindrepprop]这确实是诱导表示的基）。
如果记表示$\rho $关于基$B$的矩阵表示为$\rho_{B}:H\to GL_{n}(\mathbb{k})$，
那么诱导表示$\tau:G\to GL(\text{Ind}_{H}^{G}M)$在基$C$下的矩阵表示
$\tau_{C}:G\to GL_{\ell}(\mathbb{k}),g\mapsto \tau_{C}(g)$
（这里$\ell=\text{dim}_{\mathbb{k}}\text{Ind}_{H}^{G}M
    =[G:H]\text{dim}_{\mathbb{k}}M=mn$）满足
$$
    \tau_{C}(g)=\begin{pmatrix}
    \dot{\rho_{B}}(g_{1}^{-1}gg_{1}) & \dot{\rho_{B}}(g_{1}^{-1}gg_{2}) & \cdots & \dot{\rho_{B}}(g_{1}^{-1}gg_{m}) \\ \\
    \dot{\rho_{B}}(g_{2}^{-1}gg_{1}) & \dot{\rho_{B}}(g_{2}^{-1}gg_{2}) & \cdots & \dot{\rho_{B}}(g_{2}^{-1}gg_{m}) \\ \\
    \vdots &\vdots & &\vdots \\ \\
    \dot{\rho_{B}}(g_{m}^{-1}gg_{1}) & \dot{\rho_{B}}(g_{m}^{-1}gg_{2}) & \cdots & \dot{\rho_{B}}(g_{m}^{-1}gg_{m})
    \end{pmatrix},
$$
其中$\dot{\rho_{B}}(g)$满足当$g\in H$时$\dot{\rho_{B}}(g)=\rho_{B}(g)$，
当$g\notin H$时$\dot{\rho_{B}}(g)=O$。
:::

通过上述引理中诱导表示的矩阵表示，便可导出诱导表示与给定表示特征标的关系。

::: proposition
设$G$是有限群，$H$是子群，$\rho:G\to GL(M)$是$H$在域$\mathbb{k}$上的有限维表示，
对应特征标$\chi:G\to\mathbb{k}$，$G$关于子群$H$的左陪集分解有代表元集
$\{g_{1},...,g_{m}\}$。
那么诱导表示$\tau:G\to GL(\text{Ind}_{H}^{G}M)$的特征标
$\text{Ind}_{H}^{G}(\chi)$满足
$\text{Ind}_{H}^{G}(\chi)(g)
    =\sum\limits_{i=1}^{m}\dot{\chi}(g_{i}^{-1}gg_{i})
    =(1/|H|)\sum\limits_{a\in G}\dot{\chi}(a^{-1}ga)$，其中
$$
    \dot{\chi}(x)= \begin{cases}\chi(x), & x\in H \\ 0, & x\notin H\end{cases}.
$$
:::

::: proof
在[引理\ref{indrepgBmatrixrepformlem}]中我们已经看到了
取定$M$的一个基$B$后诱导表示关于$B$诱导的基$C$下的矩阵表示
$\tau_{C}:G\to GL_{\ell}(\mathbb{k}),g\mapsto \tau_{C}(g)$所具有的形式，
其中$\ell=\text{dim}_{\mathbb{k}}\text{Ind}_{H}^{G}M$。
于是由特征标的定义便知结论成立。
:::

## Frobenius互反律

如果群$G$有子群$H$，那么有限制函子
$\text{Res}_{H}^{G}(-):\mathbb{k}G\text{-Mod}\to \mathbb{k}H\text{-Mod}$
和诱导函子$\text{Ind}_{H}^{G}(-):\mathbb{k}H\text{-Mod}
\to \mathbb{k}G\text{-Mod}$。
我们已经看到自然同构$\text{Res}_{H}^{G}(-)
\cong \text{Hom}_{\mathbb{k}G}(\mathbb{k}G,-)$
以及$\text{Ind}_{H}^{G}(-)=\mathbb{k}G\otimes_{\mathbb{k}H}-$，
因此由Hom函子和张量函子的伴随性质便知诱导函子$\text{Ind}_{H}^{G}(-)$
是限制函子$\text{Res}_{H}^{G}(-)$的左伴随函子。特别地，我们有

::: proposition
设群$G$有子群$H$，$\mathbb{k}$是域，则对任何左$\mathbb{k}H$-模$X$，
左$\mathbb{k}G$-模$Y$有标准$\mathbb{k}$-线性同构\label{propResIndadjoint}
$$
    \text{Hom}_{\mathbb{k}G}(\text{Ind}_{H}^{G}X,Y)
    \cong \text{Hom}_{\mathbb{k}H}(X,\text{Res}_{H}^{G}Y).
$$
:::

::: remark
若$\mathbb{k}$是代数闭域且$\operatorname{char}\mathbb{k}$不整除$|G|$，
那么任何$H$在$\mathbb{k}$上的有限维表示$X$和$G$在$\mathbb{k}$上的
有限维表示$Y$都可在不计次序与同构意义下唯一地分解为有限个不可约模的直和。
而上述命题表明在此条件下（例如$\mathbb{k}=\mathbb{C}$），
如果进一步$Y$是$G$的不可约表示，
那么$\text{dim}_{\mathbb{k}}\text{Hom}_{\mathbb{k}H}(X,\text{Res}_{H}^{G}Y)$
就是$\text{Ind}_{H}^{G}X$作为$\mathbb{k}G$-模的不可约分解式中
与$Y$同构的不可约直和项项数。
:::

在[命题\ref{Hompropdimeqinnchar}]中我们看到对有限群$G$的任何有限维复表示
$\rho_{X}:G\to GL(X),\rho_{Y}:G\to GL(Y)$，其中$X,Y\neq 0$，有
$$
    \text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}G}(X,Y)
    =\frac{1}{|G|}\sum_{g \in G}\overline{\chi_{\rho_{X}}(g)}\chi_{\rho_{Y}}(g)
    =\langle \chi_{\rho_{X}},\chi_{\rho_{Y}}\rangle .
$$
所以此时对[命题\ref{propResIndadjoint}]中的线性同构两边取线性维数
便可得下面的Frobenius互反律。

::: theorem [Frobenius互反律]
设有限群$G$有子群$H$，$\chi$是$H$的一个复特征标，$\psi$是$G$的一个复特征标，则
$$
    \langle \text{Ind}_{H}^{G}(\chi),\psi\rangle_{G}
    =\langle  \chi,\text{Res}_{H}^{G}(\psi)  \rangle_{H},
$$
其中$\langle -,-\rangle_{H},\langle -,-\rangle_{G}$分别表示
$\mathbb{C}^{H}$和$\mathbb{C}^{G}$上之前定义的复内积。
:::

::: remark
Frobenius互反律反映了有限群复特征标的限制特征与其子群复特征标的诱导特征间的某种对偶性。
根据前面的讨论我们看到Frobenius互反律成立的本质原因是Hom函子与张量函子间的伴随性质。
:::

通过Frobenius互反律我们可以看到有限群与其子群的最高次不可约复表示的次数间的关系。

::: example [应用]
设$G$是有限群\label{fincomiremaxdeGHrel}，有子群$H$，
那么$\mathcal{M}_{H}\leq\mathcal{M}_{G}\leq[G:H]\mathcal{M}_{H}$，
其中$\mathcal{M}_{H}$表示$H$所有不可约复表示的次数中最大者、
$\mathcal{M}_{G}$表示$G$所有不可约复表示的次数中最大者。
:::

::: proof
设$H$有不可约复特征标$\chi$使得$\chi(1)=\mathcal{M}_{H}$。
那么诱导特征标$\text{Ind}_{H}^{G}(\chi)$对应的表示一定会包含$H$的某个不可约复表示，
记该复表示对应的不可约复特征标为$\psi$，
那么$\langle  \chi,\text{Res}_{H}^{G}(\psi)  \rangle_{H}
    =\langle \text{Ind}_{H}^{G}(\chi),\psi\rangle_{G}\geq 1$，
这意味着限制特征标$\text{Res}_{H}^{G}(\psi)$对应的限制表示
会包含一个同构于$\chi$对应不可约表示的直和因子。
特别地，$\mathcal{M}_{H}$不超过
限制特征标$\text{Res}_{H}^{G}(\psi)$对应的限制表示的次数，该次数就是$\psi(1)$，
因此由$\psi(1)\leq\mathcal{M}_{G}$可得$\mathcal{M}_{H}\leq\mathcal{M}_{G}$。

下面证明$\mathcal{M}_{G}\leq[G:H]\mathcal{M}_{H}$。
取$G$的不可约复表示$\psi$满足$\psi(1)=\mathcal{M}_{G}$，
那么限制特征标$\text{Res}_{H}^{G}(\psi)$对应的限制表示会包含$H$的某个不可约复表示，
设该复表示对应的特征标是$\chi$。
那么通过$\langle \text{Ind}_{H}^{G}(\chi),
    \psi\rangle_{G} =\langle  \chi,\text{Res}_{H}^{G}(\psi)  \rangle_{H}\geq 1$
可知$\text{Ind}_{H}^{G}(\chi)$对应的诱导表示
存在同构于$\psi$对应不可约复表示的直和项，
这说明$\psi(1)=\mathcal{M}_{G}$不超过$\text{Ind}_{H}^{G}(\chi)$
对应诱导表示的次数，
根据[@linbasisofindrepprop]立即得到
$\mathcal{M}_{G}\leq [G:H]\chi(1)\leq [G:H]\mathcal{M}_{H}$。
:::

::: remark
若$H$是Abel子群，那么$\mathcal{M}_{H}=1$，进而$\mathcal{M}_{G}\leq[G:H]$，
这就是[@alg0clfireeGleqindepropabesub]的结果。
:::

## Mackey不可约性判别

诱导表示作为通过子群表示构造大群表示的手段，我们自然关心诱导表示何时是不可约的。
设$H$是有限群$G$的子群，并有有限维复表示$\rho:H\to GL(W)$，
$\rho$对应的特征标记作$\chi$。
根据[推论\ref{cor:ireCribyCpcharraincor}]，
$\text{Ind}_{H}^{G}W$是不可约$\mathbb{C}G$-模的充要条件是
$\langle \text{Ind}_{H}^{G}(\chi), \text{Ind}_{H}^{G}(\chi) \rangle_{G}=1$。
因此需要挖掘使得$\langle \text{Ind}_{H}^{G}(\chi),
\text{Ind}_{H}^{G}(\chi) \rangle_{G}=1$成立的条件。
由Frobenius互反律，诱导特征标$\text{Ind}_{H}^{G}(\chi)$
满足$\langle \text{Ind}_{H}^{G}(\chi),
\text{Ind}_{H}^{G}(\chi) \rangle_{G} =\langle  \chi ,
\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi))  \rangle_{H},$
所以要研究诱导模$\text{Ind}_{H}^{G}W$的不可约性，
需要进一步认识$\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}W)
\cong \text{Hom}_{\mathbb{k}G}(\mathbb{k}G,\mathbb{k}G\otimes_{\mathbb{k}H}W) $
的结构来计算$\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi)) .$
让我们先来考虑更一般的场景。给定群$G$的子群$H,L$，
通过对$x,y\in G$定义$x\sim y\Leftrightarrow$存在$l\in L,h\in H$使得$y=lxh$。
可赋予集合$G$上等价关系$\sim$，$g\in G$关于该等价关系所在的等价类为$LgH$，
称$G$中具有该形式的子集为关于子群对$(L,H)$的**双陪集**。
一旦$G$是有限集，则存在双陪集代表元集$\{s_{1},...,s_{m}\}$
使得$G$有不相交双陪集分解$G=Ls_{1}H\cup Ls_{2}H\cup\cdots\cup Ls_{m}H$。
对每个正整数$1\leq i\leq m$，记$L_{i}=L\cap s_{i}Hs_{i}^{-1}$，
那么可直接验证若$\{b_{i1},b_{i2},...,b_{ij_{i}}\}\subseteq L$
是$L$关于子群$L_{i}$左陪集分解的一个代表元集，则
$$
    \{b_{11}s_{1},b_{12}s_{1},...,b_{1j_{1}}s_{1},...,
    b_{m1}s_{m},...,b_{mj_{m}}s_{m}\}\subseteq G
$$
是$G$关于子群$H$的一个左陪集分解代表元集，
并且$Ls_{i}H=b_{i1}s_{i}H\cup b_{i2}s_{i}H\cup\cdots\cup b_{ij_{i}}s_{i}H,
\forall 1\leq i\leq m.$

现设$G$有限。通过[@linbasisofindrepprop]，
我们看到作为域$\mathbb{k}$上线性空间，
任何左$\mathbb{k}H$-模$W$的诱导模$\text{Ind}_{H}^{G}W$与
$$
    \bigoplus\limits_{i=1}^{m}\bigoplus
    \limits_{k=1}^{j_{i}}b_{ik}s_{i} \otimes_{\mathbb{k}H} W
$$
同构。并且对每个正整数$1\leq i\leq m$，
$L$可天然作用在$\{b_{i1}s_{i}H,b_{i2}s_{i}H,...,b_{ij_{i}}s_{i}H\}$上，
这说明$$
    \mathcal{U}_{i}=\bigoplus\limits_{k=1}^{j_{i}}
    b_{ik}s_{i} \otimes_{\mathbb{k}H} W
$$上有自然的左$\mathbb{k}L$-模结构。
不难看出左$\mathbb{k}L$-模同构$\bigoplus\limits_{i=1}^{m}
\mathcal{U}_{i}\cong\text{Res}_{L}^{G}(\text{Ind}_{H}^{G}W)$。

对每个$g\in G$，线性表示$\rho:H\to GL(W)$可产生共轭子群的线性表示
$\rho^{g}:gHg^{-1}\to GL(W),x\mapsto \rho(g^{-1}xg)$，
即可通过群同构$gHg^{-1}\cong H$自然地给出$W$上左$\mathbb{k}[gHg^{-1}]$-模结构，
为不引起混淆，之后将$W$视作左$\mathbb{k}[gHg^{-1}]$-模时，记作$W^{g}$。
于是$W^{s_{i}}$的限制模$\text{Res}_{L_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})$
是左$\mathbb{k}L_{i}$-模。现在我们设$\rho:H\to GL(W)$
是有限群$G$的子群$H$在$\mathbb{k}$上的有限维表示，则有如下左$\mathbb{k}L$-模同构：
$$
    \varphi_{i}:\mathcal{U}_{i}\to \text{Ind}_{L_{i}}^{L}
    (\text{Res}_{L_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})),
    b_{ik}s_{i}\otimes w\mapsto b_{ik}\otimes w.
$$
$\varphi_{i}$是通过$\mathcal{U}_{i}$具体的基直接构造的$\mathbb{k}$-线性映射，
因为$\{b_{i1},b_{i2},...,b_{ij_{i}}\}\subseteq L$
是$L$关于子群$L_{i}$左陪集分解的一个代表元集所以$\varphi_{i}$是满射。
于是由$\text{dim}_{\mathbb{k}}\mathcal{U}_{i}
=\text{dim}_{\mathbb{k}}\text{Ind}_{L_{i}}^{L}
(\text{Res}_{L_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}}))$知$\varphi_{i}$是线性同构。
要看到$\varphi_{i}$是左$\mathbb{k}L$-模同态，
只需验证$\varphi_{i}$保持$L$中每个元素的作用。
任取$l\in L$，并设$lb_{ik}s_{i}=b_{it}s_{i}h$，其中$t\in\{1,2,...,j_{i}\}$，
那么$\varphi_{i}(lb_{ik}s_{i}\otimes w)=b_{it}\otimes hw$。
而$l\varphi_{i}(b_{ik}s_{i}\otimes w)=lb_{ik}\otimes w
=b_{it}s_{i}hs_{i}^{-1}\otimes w=b_{it}\otimes hw
=\varphi_{i}(lb_{ik}s_{i}\otimes w)$，
所以$\varphi_{i}$是左$\mathbb{k}L$-模同构。上述讨论证明了下面的Mackey分解定理。

::: theorem [Mackey分解]
设群$G$是有限群，$L.H$是子群。
设$\{s_{1},...,s_{m}\}$是群$G$关于子群对$(L,H)$的双陪集分解的一个代表元集，
并记$L_{i}=L\cap s_{i}Hs_{i}^{-1},i=1,2,...,m$。
那么对$H$在域$\mathbb{k}$上的任何有限维表示$\rho:H\to GL(W)$，
有左$\mathbb{k}L$-模同构
$$
    \text{Res}_{L}^{G}(\text{Ind}_{H}^{G}W)
    \cong \bigoplus\limits_{i=1}^{m}
    \text{Ind}_{L_{i}}^{L}(\text{Res}_{L_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})),
$$
其中$W^{s_{i}}$是同构群同构$s_{i}Hs_{i}^{-1}\cong H$
给出$W$上自然的左$\mathbb{k}[s_{i}Hs_{i}^{-1}]$-模结构。
:::

现在我们可以证明下面的Mackey不可约性判别准则。

::: theorem [Mackey不可约]
设$G$是有限群，有子群$H$，$\rho:H\to GL(W)$是$H$的一个有限维复表示，
对应的复特征标记为$\chi$。
那么诱导表示$\text{Ind}_{H}^{G}\rho$是不可约复表示的充要条件是
$\rho$为$H$的不可约表示且对任何$t\in G-H$，
$\text{Res}_{H_{t}}^{H}W$和$\text{Res}_{H_{t}}^{tHt^{-1}}(W^{t})$
作为左$\mathbb{C}H_{t}$-模没有同构的不可约子模，其中$H_{t}=H\cap tHt^{-1}$。
:::

::: proof
根据[推论\ref{cor:ireCribyCpcharraincor}]，
$\text{Ind}_{H}^{G}W$是不可约$\mathbb{C}G$-模的充要条件是
$\langle \text{Ind}_{H}^{G}(\chi), \text{Ind}_{H}^{G}(\chi) \rangle_{G}=1$。
结合Frobenius互反律知$\text{Ind}_{H}^{G}\rho$是不可约复表示当且仅当
$\langle  \chi ,\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi))  \rangle_{H}=1$。
现在将Mackey分解定理中的子群$L$取为$H$，
那么由$\langle  \chi ,\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi))  \rangle_{H}
    =\text{dim}_{\mathbb{C}}\text{Hom}_{\mathbb{C}H}(W,\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(W)))$，
立即得到
$$
    \langle  \chi ,\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi))  \rangle_{H}
    =\sum_{i=1}^{m}\langle  \chi ,
    \text{Ind}_{H_{i}}^{H}(\text{Res}_{H_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})) \rangle_{H},
$$
其中$\{s_{1},...,s_{m}\}$是群$G$关于子群对$(H,H)$的双陪集分解的一个代表元集，
$H_{i}=H\cap s_{i}Hs_{i}^{-1}$。不妨设$s_{1}=1$，那么$H_{1}=H$，
因此$\langle  \chi ,\text{Ind}_{H_{1}}^{L}(\text{Res}_{H_{1}}^{s_{1}Hs_{1}^{-1}}(W^{s_{1}})) \rangle_{H}
    =\langle  \chi,\chi\rangle_{H}$
（只要$W\neq 0$便有$\langle  \text{Ind}_{H}^{G}(\chi) ,
    \text{Ind}_{H}^{G}(\chi)\rangle_{H}\geq 1$）。
现在我们把$\langle  \chi ,\text{Res}_{H}^{G}(\text{Ind}_{H}^{G}(\chi))  \rangle_{H}$表示为
$$
    \langle  \chi,\chi\rangle_{H}+\sum_{i=2}^{m}\langle \chi ,
    \text{Ind}_{H_{i}}^{H}(\text{Res}_{H_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})) \rangle_{H},
$$
那么由上式每一项均为自然数且当$W\neq 0$时第一项至少为$1$可知
$\text{Ind}_{H}^{G}\rho$不可约的充要条件是$\rho$不可约且
$$
    \langle  \chi ,\text{Ind}_{H_{i}}^{H}(\text{Res}_{H_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})) \rangle_{H}=0,
    \forall 2\leq i\leq m.
$$
根据Frobenius互反律，后者等价于
$\langle \text{Res}_{H_{i}}^{H}\chi,\text{Res}_{H_{i}}^{s_{i}Hs_{i}^{-1}}(W^{s_{i}})\rangle_{H_{i}}=0,
    \forall 2\leq i\leq m$。由此立即看到充分性成立。
必要性来自任何$t\in G-H$均可作为$G$关于$(H,H)$双陪集分解的一个代表元。
:::
