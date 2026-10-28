---
title: 群论的补充：可解群
---

<problems>
- “可解群”一节中证明 $\mathbf{D}(\mathbf{GL}(n;K))=\mathbf{SL}(n;K)$ 的例子里，由 $\beta+1=(1+\nu)^{-1}$ 似乎应得到 $\beta=(1+\nu)^{-1}-1$，而不是 $\beta=(1+\nu)^{-1}$；其后的等式 $E_{ij}(-(1+\nu))E_{ji}((1+\nu)^{-1})E_{ij}(1)E_{ji}(\nu)=\cdots$ 也应相应修改。
</problems>

## 滤链 {@section-filtration-and-Jordan-Holder}

::: definition
$G$是群。假设$G$的子群序列$(G_i)_{0\leqslant i \leqslant n}$满足

```math {@eq:filtration}
1=G_n \lhd G_{n-1} \lhd G_{n-2}\lhd \cdots \lhd G_1 \lhd G_0=G,
```

就称该子群序列为$G$的一个**滤链**。给定滤链，我们将商群序列$\big({\rm gr}_i(G) =
  {G_i/G_{i+1}}
\big)_{i\leqslant n-1}$称作是该滤链的**分次化**并记作${\rm gr}(G)$，其中，每个${\rm gr}_i(G)$都被称作是该滤链的一个**因子群**。

我们将整数$n$称作是该滤链的**长度**。
:::

::: remark
我们强调，以上定义中仅要求$G_{i} \lhd G_{i-1}$而$G_i$可能在$G_{i-2}$中不再是正规子群，其中，
$i=1,\cdots,n-1$。
:::

::: remark
给定子群$H<G$，我们定义

```math {@subgroup-filtration}
H_i = G_i \cap H.
```

由于$G_{i} \lhd G_{i-1}$，所以，$G_i \cap H \lhd  G_{i-1} \cap H$。
这表明，滤链$(G_i)$诱导出子群上$H$的滤链$(H_i)$。
:::

::: remark
给定正规子群$N\lhd G$，那么，$G_i\cap N\lhd G_i$。令

```math {@quotient-filtration}
\left(
  {G/N}
\right)_i :=
  {G_i/(G_i\cap N)}
.
```

由于$G_{i} \lhd G_{i-1}$，根据[练习题](@section:group-exer)一节中的子群对应定理，$\left(
  {G/N}
\right)_i\lhd \left(
  {G/N}
\right)_{i-1}$。这表明，滤链$(G_i)$诱导出商群$
  {G/N}
$上的滤链$\left(
  {G/N}
\right)_i $。
:::

::: remark
给定群同态的正合列
\[
1 \rightarrow N \rightarrow G \rightarrow
 {G/N}
\rightarrow 1.
\]
根据以上两个注记，我们有
\[
1\rightarrow
  {N_i/N_{i+1}}
 \rightarrow
  {G_i/G_{i+1}}
 \rightarrow
  {\big({G/N}\big)_i/\big({G/N}\big)_{i+1}}
 \rightarrow 1,
\]
也就是说

```math {@exact-sequence-for-filtration}
1\rightarrow {\rm gr}_i(N) \rightarrow   {\rm gr}_i(G) \rightarrow  {\rm gr}_i\big(
  {G/N}
\big)\rightarrow 1.
```

:::

::: definition
给定群$G$的滤链$(G_i)_{0\leqslant i \leqslant n}$，如果每个${\rm gr}_i(G)$都是单群，其中，
$0 \leqslant i \leqslant n-1$，我们就称这个滤链为**Jordan-Hölder滤链**。
:::

::: proposition
有限群 $G$ 必有 Jordan-Hölder 滤链。
:::

::: proof
如果$G=1$，我们在 @eq:filtration 中取$n=0$；如果$G$为单群，则可取$n=1$。
其他情形，我们对$G$的阶进行归纳：取$G$的阶最大的正规子群$N$，其中，$N\neq G$。
由于$G$不是单群，$N\neq 1$。所以，$
  {G/N}
$为单群。由于$|N| < |G|$，归纳假设给出了$N$的Jordan-Hölder滤链$(N_i)$。所以，我们可以选取$(G, N_0, N_1,\cdots)$作为 $G$ 的Jordan-Hölder 滤链。证毕。
:::

::: remark
无限群未必有Jordan-Hölder滤链。

实际上，$\mathbb{Z}$没有Jordan-Hölder滤链。
因为它的每个有限指标的子群都同构于${\mathbb{Z}}$，所以其Jordan-Hölder滤链不会在有限步停止。
:::

::: theorem [Jordan-Hölder]
任意给定群$G$的Jordan-Hölder滤链$(G_i)_{0\leqslant i \leqslant n}$，
其因子群的集合$\big\{{\rm gr}_i(G)\big\}$（可以有重复）在不计顺序的意义下与滤链的选取无关。

特别地，Jordan-Hölder滤链（如果存在）的长度$n$与滤链的选取无关，
我们将$n$称作是群$G$的**长度**并记作${\ell}(G)$。
如果一个群没有Jordan-Hölder滤链，则约定其长度为$\infty$。
:::

::: proof
根据Jordan-Hölder滤链的定义，因子群的集合$\big\{{\rm gr}_i(G)\big\}$（可重复）中都是单群。
对每个单群$S$，
我们用$n\big(G,(G_i),S\big)$表示$S$在$\big({\rm gr}_i(G)\big)$中出现的次数（在同构意义下）。
我们的目标是证明$n\big(G,(G_i),S\big)$与滤链$(G_i)$的选取无关。

我们对滤链的长度$n$进行归纳。当$n\leqslant1$时，$G$要么是平凡群，要么是单群，结论不证自明。
现在假定$n\geqslant 2$并且假设$G$不是单群，所以可以选取正规子群$N\lhd G$，使得$N\neq 1, N\neq G$。
我们考虑群的正合列
\[
1 \rightarrow N \rightarrow G \rightarrow
 {G/N}
\rightarrow 1,
\]
以及滤链对此正合列所诱导的滤链的正合列 @exact-sequence-for-filtration。
由于$(G_i)$为Jordan-Hölder滤链，所以，${\rm gr}_i(G)$均为单群，
其正规子群${\rm gr}_i(N)$只能是$1$或${\rm gr}_i(G)$。
据此，我们可以把集合$I=\{0, \cdots, n-1\}$分划为两部分
\[
I_1 =\big\{i \big| {\rm gr}_i(N) = {\rm gr}_i(G)\big\}, \  I_2 =\big\{i \big|{\rm gr}_i(N) = 1\big\}.
\]
我们自然有$|I_1|+|I_2|=n$。利用$I_1$和$I_2$作为指标，我们得到$N$和$
  {G/N}
$上Jordan-Hölder滤链。

另外，显然有$|I_1|<n,|I_2|<n$，所以，我们可以对$N$和$
  {G/N}
$用归纳假设：这表明$n\big(N,(N_i)_{i\in I_1},S\big)$和$n\big(G/ N,\big(
  {G/N}
\big)_{i\in I_2},S\big)$与滤链的选取无关。又因为
\[
\begin{aligned}
n\big(G,(G_i),S\big)&=n\big(N,(N_i)_{i\in I_1},S\big)+n\big(G/ N, \big(
  {G/N}
\big)_{i\in I_2},S\big)\\
&=n\big(N, S\big)+n\big(
  {G/N}
,S\big).
\end{aligned}
\]
所以，$n(G,(G_i),S)$也与滤链的选取无关。
:::

::: corollary
对任意的正规子群$N\lhd G$，我们有
\[
\ell(G)=\ell(N)+\ell\big(
  {G/N}
\big).
\]
:::

::: proof
上述证明已经给出了$\ell(G)<\infty$的情形。当$\ell(G)=\infty$时，那么，$N$和$
  {G/N}
$中至少有一个长度是无穷大，所以$\ell(G)=\ell(N)+\ell \big(
  {G/N}
\big)$仍然成立。
:::

::: example
Jordan-Hölder定理的唯一性部分可以给出算术基本定理的唯一性部分的证明。

利用整数$n$的素因子分解$n=p_1^{h_1}\cdots p_k^{h_k}$，我们可以构造群$G=
  {\mathbb{Z}/n\mathbb{Z}}
$的Jordan-Hölder滤链：
\[
 {\mathbb{Z}/n\mathbb{Z}}
\rhd
 {p_1\mathbb{Z}/n\mathbb{Z}}
\rhd
 {p_1^2\mathbb{Z}/n\mathbb{Z}}
\rhd \cdots \rhd
 {p_1^{h_1}\mathbb{Z}/n\mathbb{Z}}
\rhd
 {p_1^{h_1}p_2\mathbb{Z}/n\mathbb{Z}}
\rhd
 {p_1^{h_1}p^2_2\mathbb{Z}/n\mathbb{Z}}
\rhd  \cdots.
\]
作为因子群，$
  {\mathbb{Z}/n\mathbb{Z}}
$在${\rm gr}(G)$中出现的次数恰好是$h_i$，这就给出了素因子分解的唯一性。

调整素因子的标号，以上构造说明Jordan-Hölder滤链本身可能不是唯一的。
:::

::: example [$\mathfrak{S}_3$的滤链]
$\mathfrak{A}_3 \lhd \mathfrak{S}_3$且指标为$2$，而$\mathfrak{S}_3$的$2$阶子群都不是正规子群。所以，
$\mathfrak{S}_3$有且只有一个Jordan-Hölder滤链：
\[
1\lhd \mathfrak{A}_3 \lhd \mathfrak{S}_3.
\]
这个滤链的长度为$2$，其因子群为$2$阶和$3$阶的循环群。
:::

::: example [$\mathfrak{S}_4$的滤链]
$\mathfrak{A}_4 \lhd \mathfrak{S}_4$且指标为$2$。令$D =\{1,\sigma_1, \sigma_2,\sigma_3\}$，其中
\[
\sigma_1 = (1,2)(3,4),\ \ \sigma_2 = (1,3)(2,4),\ \ \sigma_3 = (1,4)(2,3).
\]
容易验证，$D$是子群并且$D\simeq
  {\mathbb{Z}/2\mathbb{Z}}
\times
  {\mathbb{Z}/2\mathbb{Z}}
$。进一步，$D\lhd \mathfrak{A}_4$是正规子群。对每个$i$，我们都有如下的Jordan-Hölder滤链：
\[
1\lhd \{1,\sigma_i \}\lhd D \lhd  \mathfrak{A}_4  \lhd \mathfrak{S}_4.
\]
通过计算群元素的个数，我们知道其因子群有$3$个$2$阶循环群和$1$个$3$阶循环群。
通过改变上式中的$i$，我们知道$\mathfrak{S}_4$的滤链选取并不唯一。
:::

::: example [$\mathfrak{S}_n$的滤链，$n \geqslant 5$]
根据习题 @homework:An-simple，
此时$\mathfrak{A}_n$是单群并且是$\mathfrak{S}_n$中唯一非平凡的正规子群，
所以$\mathfrak{S}_n$只有唯一一个Jordan-Hölder滤链：
\[
1\lhd\mathfrak{A}_n\lhd\mathfrak{S}_n.
\]
该滤链的因子群分别为$\mathfrak{A}_n$和$2$阶循环群。
:::

## 可解群 {@section-solvable}

$G$是群。对于$x,y\in G$，我们定义它们的**交换子**或者**换位子**为[^1]
\[
(x,y)=x^{-1}y^{-1}xy.
\]

$H<G$和$K<G$是子群，我们用$(H, K)$表示由所有$(x, y)$所生成的子群，其中，$x\in H$，$y\in K$。
我们把子群$(G, G)$称为$G$的**换位子群**或**导出子群**，记作${\mathbf{D}}(G)$。

::: remark
${\mathbf{D}}(G)\lhd G$是正规子群。
实际上，${\mathbf{D}}(G)$是$G$的所谓的**特征子群**，
即对任意的自同构（不仅是内同构）$\varphi\in {\rm Aut}(G)$，
$\varphi\big({\mathbf{D}}(G)\big)={\mathbf{D}}(G)$。
:::

::: proposition {@prop:3.1}
$H<G$是子群。那么，如下两个命题等价：

(1) $H \supset {\mathbf{D}}(G)$。

(2) $H$是正规子群并且$
    {G/H}
$是交换群。

:::

::: proof
假设(1)成立。那么，对任意的$h\in H$和$g\in G$，我们有
\[
ghg^{-1}=ghg^{-1}h^{-1}\cdot h \in \mathbf{D}(G)\cdot H\subset H.
\]
所以，$H\lhd G$。
另外，对任意的$g_1,g_2\in G$，由于$(g_1,g_2)\in \mathbf{D}(G)\subset H$，所以，$g_1H,g_2H$在$
  {G/H}
$中交换。至此，我们证明了(2)。

假设(2)成立。考虑$\mathbf{D}(G)$的任意一个生成元$(x,y)$。由于$
  {G/H}
$是交换群，所以，$(x,y)\in H$，这表明$\mathbf{D}(G)<H$，即(1)成立。
:::

::: remark
要得到$G$的一个交换的商群，以上命题表明至少要商掉${\mathbf{D}}(G)$。所以，$
  {G/\mathbf{D}(G)}
$是$G$的**极大的**交换商群。我们称$
  {G/\mathbf{D}(G)}
$是群$G$的**交换化**并记为$G^{{\rm ab}}$。

群的交换化就有如下的泛性质：
每个从$G$到某个交换群的群同态必然可以下降到$G\rightarrow G^{{\rm ab}}$上去，
这可以用如下的交换图来表示：
\[
\begin{tikzcd}
G \arrow[r, "\varphi"]  \arrow[d]  &  A\\
G^{{\rm ab}} \arrow[ur, "\overline{\varphi}",dashed,swap]  &     \end{tikzcd}
\]
其中，$A$是交换群，$\varphi\colon G\rightarrow A$是群同态，
上图表明必然存在群同态$\overline{\varphi}\colon G^{{\rm ab}} \rightarrow A$，使得上图交换。
:::

::: example
假设$n\geqslant 2$，那么，$\mathfrak{S}_n^{{\rm ab}}\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。

$n=2$的情形是明显的。

考虑$n\neq 2$的情形，此时${\mathbf{D}(\mathfrak{S}_n)}\neq 1$。
由于${\mathbf{D}(\mathfrak{S}_n)}$中的元素必然都是偶置换给出的，
${\mathbf{D}(\mathfrak{S}_n)}\lhd \mathfrak{A}_n$。
实际上，我们必然有${\mathbf{D}(\mathfrak{S}_n)}=\mathfrak{A}_n$，这可以通过对如下换位子的计算得到：
对于$i,j,k\leqslant n$，我们有
\[
\big((i,j),(j,k)\big)=(k,i,j).
\]
所以，这样可以给出所有的$3$-循环。
由于$\mathfrak{A}_n$由$3$-循环生成，所以${\mathbf{D}(\mathfrak{S}_n)}=\mathfrak{A}_n$。从而，
\[
\mathfrak{S}_n^{{\rm ab}}\simeq
  {\mathfrak{S}_n/\mathfrak{A}_n}
\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
.
\]
:::

::: example
$n\geqslant 2$，$K$是域，$G=\mathbf{GL}(n;K)$，则${\mathbf{D}}(G)=\mathbf{SL}(n;K)$。
这是线性代数中的一个经典结论。很明显，${\mathbf{D}}\big(\mathbf{GL}(n;K)\big)<\mathbf{SL}(n;K)$。
我们证明反过来的包含关系。
令$e_{ij}$为仅在$(i,j)$处为$1$而其余地方均为$0$的$n\times n$的矩阵，则有如下经典公式：

```math {@formula-for-matrix-multiplications}
e_{ij}\cdot e_{kl}=\delta_{jk}e_{il},
```

其中，$\delta_{jk}$是Kronecker符号。

首先考虑初等矩阵$E_{ij}(\lambda)$，其中$\lambda \in K$，$i\neq j$。
这个矩阵在对角线上都是$1$，在$(i,j)$处为$\lambda$，即$E_{ij}(\lambda)=\mathbf{I}+\lambda e_{ij}$，
这里$\mathbf{I}$是单位矩阵。那么，$E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$。
利用 @formula-for-matrix-multiplications，我们有
\[
\big(E_{ik}(\alpha),E_{kj}(\beta)\big)=E_{ik}(-\alpha)E_{kj}(-\beta)E_{ik}(\alpha)E_{kj}(\beta)=E_{ij}(\alpha\beta).
\]
其中，我们要求$i\neq j$。
选取$\alpha=1,\beta=\lambda$，那么，对任意的$i\neq j$和$\lambda \in K$，
$E_{ij}(\lambda)\in {\mathbf{D}}\big(\mathbf{GL}(n;K)\big)$（实际上，
我们证明了$E_{ij}(\lambda)\in {\mathbf{D}}\big(\mathbf{SL}(n;K)\big)$）。

其次考虑$D\in \mathbf{SL}(n;K)$中的对角矩阵。为此，对于$i\neq j$，我们计算
\[
\begin{aligned}
&\quad E_{ij}(\alpha)E_{ji}(\beta)E_{ij}(\mu)E_{ji}(\nu)\\
&=1+(\alpha+\mu+\alpha\beta\mu)e_{ij}+(\beta+\nu+\beta\mu\nu)e_{ji}+\big[(\alpha+\mu+\alpha\beta\mu)\nu+\alpha \beta\big]e_{ii}+\beta\mu e_{jj}\\
&=1+(\alpha+\mu+\alpha\beta\mu)e_{ij}+(\beta+\nu+\beta\mu\nu)e_{ji}+\big[\mu\nu+\alpha(\beta+\nu+\beta\mu\nu)\big]e_{ii}+\beta\mu e_{jj}
\end{aligned}
\]
然后计算下面乘积的非对角线项：
\[
\begin{aligned}
&\quad E_{ij}(\alpha)E_{ji}(\beta)E_{ij}(\mu)E_{ji}(\nu)\cdot E_{ij}(\lambda)\\
&=\Big(\alpha+\mu+\alpha\beta\mu+\lambda+\big[(\alpha+\mu+\alpha\beta\mu)\nu+\alpha \beta\big]\lambda\Big)e_{ij}+(\beta+\nu+\beta\mu\nu)e_{ji}+\cdots
\end{aligned}
\]
我们令以上两个系数为$0$，这就给出了如下待定的方程：
\[
\begin{cases}
&\beta+\nu+\beta\mu\nu=0,\\
&\alpha+\mu+\alpha\beta\mu+\lambda+\big[(\alpha+\mu+\alpha\beta\mu)\nu+\alpha \beta\big]\lambda=0\end{cases}
\]
这等价于

```math {@eq:coeff-tbd}
\begin{cases}
&\beta+\nu+\beta\mu\nu=0,\\
&\alpha+\mu+\alpha\beta\mu+\lambda+\mu\nu\lambda =0.
\end{cases}
```

在此假设下，我们有
\[
\begin{aligned}
&E_{ij}(\alpha)E_{ji}(\beta)E_{ij}(\mu)E_{ji}(\nu)=1+(\alpha+\mu+\alpha\beta\mu)e_{ij}+\mu\nu e_{ii}+\beta\mu e_{jj}
\end{aligned}
\]
所以，
\[
\begin{aligned}
&E_{ij}(\alpha)E_{ji}(\beta)E_{ij}(\mu)E_{ji}(\nu)\cdot E_{ij}(\lambda)=(1+\mu\nu)e_{ii}+\cdots
\end{aligned}
\]
以下令$\mu=1$并且把$\nu$视作是变量，那么，@eq:coeff-tbd 的第一个方程给出$\beta+1=(1+\nu)^{-1}$，
这里，我们要求$\nu\neq -1$（注意到，在${\mathbb{F}}_2$中，这只能要求$\nu=0$）。
代入第二个方程，我们得到
\[
\alpha=-(1+\nu)-\lambda(1+\nu)^2,\ \beta=(1+\nu)^{-1},\mu=1.
\]
这里，可以取$\lambda=0$，从而，
\[
\begin{aligned}
&E_{ij}(-(1+\nu))E_{ji}((1+\nu)^{-1})E_{ij}(1)E_{ji}(\nu)=(1+\nu)e_{ii}+(1+\nu)^{-1}e_{jj}.
\end{aligned}
\]
这样，对于$D\in \mathbf{SL}(n;K)$，
我们可以用以上（最多$4(n-1)$个形如$E_{ij}(\lambda)$）矩阵逐一地把对角线上都乘得到$1$，当然，
这里假设了$1+\nu\neq 0$（对角线上已经是$1$的时候不需要做以上操作）。
从而，结合之前的结论，$D\in {\mathbf{D}}\big(\mathbf{SL}(n;K)\big)$。

最终，对任意的$A\in \mathbf{SL}(n;K)$，
我们可以通过初等变换即左右乘以形如$E_{ij}(\lambda)$的矩阵的方式使得$A$变成对角阵，其行列式为$1$，
从而，结合上面结论，我们就有$A\in {\mathbf{D}}\big(\mathbf{SL}(n;K)\big)$。

由于$\det\colon\mathbf{GL}(n;K)\rightarrow K^\times$是满射而${\rm Ker}(\det)=\mathbf{SL}(n;K)$，
所以，$\mathbf{GL}(n;K)^{{\rm ab}}\simeq K^\times$。
:::

::: remark
以上证明实际给出了${\mathbf{D}}\big(\mathbf{SL}(n;K)\big)=\mathbf{SL}(n;K)$。
:::

通过对导出子群函子$G\rightsquigarrow {\mathbf{D}}G$进行迭代，
可以定义滤链（子群序列）$\{{\mathbf{D}}^n G\}$：
\[
{\mathbf{D}}^0 G = G, \ {\mathbf{D}}^1 G = {\mathbf{D}} G, \  {\mathbf{D}}^{n}G ={\mathbf{D}} ({\mathbf{D}}^{n-1} G )= ({\mathbf{D}}^{n-1}G,  {\mathbf{D}}^{n-1}G), \ n \geqslant 1.
\]
我们显然有
\[
G \rhd {\mathbf{D}}^1 G \rhd {\mathbf{D}}^2 G \rhd \cdots.
\]
这个序列未必在有限步停止，即使停止最后的群也未必是$1$。但是我们总是可以定义
\[
{\mathbf{D}}^{\infty} G =\displaystyle \bigcap_{n\geqslant 1} {\mathbf{D}}^{n}G.
\]

::: definition
如果存在正整数$n$，使得${\mathbf{D}}^n G = 1$，我们就称$G$为**可解群**[^2]。
以下，我们用$d\ell(G)$表示使得${\mathbf{D}}^n G =1$的最小正整数$n$，
它被称作是$G$的**可解类数**或者**导出长度**。
:::

::: remark
可解群的子群和商群都是可解的。

假设$G$可解并且$d\ell(G)=n$。
对于子群$H$而言，${\mathbf{D}}^n H<{\mathbf{D}}^n G=1$，
所以$H$可解并且$d\ell(H)\leqslant d\ell(G)$；对于商群$
  {G/N}
$而言，我们有满射$G\rightarrow
  {G/N}
$，那么，${\mathbf{D}}G\rightarrow {\mathbf{D}}\left(
  {G/N}
\right)$也是满射，从而，$1={\mathbf{D}}^n G\rightarrow {\mathbf{D}}^n\left(
  {G/N}
\right)$是满射，所以$
  {G/N}
$可解。

这里的推理表明导出长度不超过$n$的可解群的子群和商群的导出长度不超过$n$。
:::

::: proposition
$G$是群，$N\lhd G$是正规子群。如果$N$和$
  {G/N}
$可解，那么$G$也可解。进一步，我们有
\[
d\ell(G)\leqslant d\ell(N)+d\ell\left(
  {G/N}
\right).
\]
:::

::: proof
令$i=d\ell(N)$，$j=d\ell\left(
  {G/N}
\right)$。那么，${\mathbf{D}}^j G\subset N$，${\mathbf{D}}^i N =1$。所以，${\mathbf{D}}^{i+j} G = {\mathbf{D}}^i( {\mathbf{D}}^j G)=1$。
:::

::: remark
$d\ell(G) = 0$等价于$G$是平凡群；$d\ell(G) \leqslant 1$等价于$G$是交换群。特别地，交换群是可解群。
:::

::: remark
有两个关于可解群的大定理，它们的证明困难，但其叙述简洁。
第一个是Burnside定理：$p^a q^b$阶的群可解，其中，$p$和$q$是素数。
第二个是Feit-Thompson定理：奇数阶的群可解。
:::

::: proposition {@prop-solvablity}
给定群$G$和正整数$n$，如下命题等价

(1) $G$是可解群并且$d\ell(G) \leqslant n$。

(2) $G$有特征子群列$G=G_0 > G_1 >  \cdots > G_n = 1$，使得$
    {G_i/G_{i+1}}
$交换，其中$0\leqslant i \leqslant n-1$。

(2') $G$有滤链$G=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$，使得$G_{i+1}$是$G_{i}$的正规子群并且$
     {G_i/G_{i+1}}
$交换，其中$0\leqslant i \leqslant n-1$。

(3) $G$有交换的特征子群$A$，使得$
    {G/A}
$可解并且$d\ell\left(
    {G/A}
\right) \leqslant n-1$。

:::

::: proof
(1)$\Rightarrow$(2)：取 $G_i = {\mathbf{D}}^i G$；(2)$\Rightarrow$(2')：显然；(2')$\Rightarrow$(1)：
根据 @prop:3.1 对$k$归纳可得${\mathbf{D}}^k G < G_k$，从而${\mathbf{D}}^n G = 1$。
至此，(1)，(2)和(2')等价。

(1)$\Rightarrow$(3)：取$A = {\mathbf{D}}^{n-1}G$，由于$\mathbf{D}A=1$，所以，$A$是交换群。
另外，${\mathbf{D}}^{n-1}\left(
  {G/A}
\right)\subset
  {{\mathbf{D}}^{n-1}G/A}
=1$。

(3)$\Rightarrow$(2)：根据$d\ell\left(
  {G/A}
\right) \leqslant n-1$，存在$G$的正规子群序列$
G=A_0 \rhd A_1 \rhd \cdots \rhd A_{n-1} = A$，使得
\[
  {G/A}
 \rhd
  {A_1/A}
 \rhd  \cdots \rhd
  {A_{n-1}/A}
= 1.
\]
从而，$G  \rhd A_1  \rhd \cdots  \rhd A_{n-1}  \rhd  A\rhd 1$满足(2)的要求。
:::

::: corollary [有限可解群的等价定义] {@coro:def-solvable}
$G$是有限群，则如下定义等价

(1) $G$可解。

(2) $G$有滤链$G=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$，使得$G_{i+1}$是$G_{i}$的正规子群并且$
    {G_i/G_{i+1}}
$交换，其中$0\leqslant i \leqslant n-1$。

(3) $G$有滤链$G=H_0 \rhd H_1 \rhd\cdots \rhd H_m = 1$，使得$H_{i+1}$是$H_{i}$的正规子群并且$
    {H_i/H_{i+1}}
$是循环群，其中$0\leqslant i \leqslant m-1$。

:::

::: proof
只要证明(2)$\Rightarrow$(3)即可，其余都是平凡的。实际上，由于$
  {G_i/G_{i+1}}
$是有限交换群，根据交换群的结构定理，存在子群序列$G_i\rhd G^1_i\rhd G^2_i \rhd \cdots \rhd G^l_i\rhd G_{i+1}$，
使得
\[
  {G_i/G_{i+1}}
\rhd
  {G^1_i/G_{i+1}}
\rhd \cdots
  {G^l_i/G_{i+1}}
\rhd 1,
\]
并且
\[
  {G^j_i/G^{j+1}_{i}}
\simeq
  {{G^j_i/G_{i+1}}/{G^{j+1}_i/G_{i+1}}}
\]
是循环群。我们将这些$G^j_i$添加到$G_i$中就可以得到所求的滤链。
:::

::: proposition [有限可解群的另一个等价定义]
$G$是有限群，$G=G_0 \rhd G_1 \rhd \cdots \rhd  G_n = 1$为其Jordan-Hölder序列。那么，$G$可解当且仅当$
  {G_i/G_{i+1}}
$为素数阶循环群，其中$0\leqslant i \leqslant n-1$。
:::

::: proof
如果$
  {G_i/G_{i+1}}
$为素数阶循环群，根据 @coro:def-solvable 中的(3)，$G$可解；反之，如果$G$可解，其商群与子群均可解，所以$
  {G_i/G_{i+1}}
$可解。然而$
  {G_i/G_{i+1}}
$同时也是单群，其导出子群必然平凡。据此，$
  {G_i/G_{i+1}}
$只能是素数阶循环群。
:::

::: example
- 1\) $G$是非交换单群。那么，$ {\mathbf{D}}(G)=G$，从而$G$不可解。
  据此，当$n\geqslant 5$时，$\mathfrak{S}_n$不可解，因为它包含了$\mathfrak{A}_n$这个不可解的子群。

- 2\) 当$n\leqslant 4$时，$\mathfrak{S}_n$可解。

  只要对$n=4$证明即可（其余均为其子群）。我们已经构造过$\mathfrak{S}_4$的Jordan-Hölder滤链：
  \[
  1\lhd \{1,\sigma_i \}\lhd D \lhd  \mathfrak{A}_4  \lhd \mathfrak{S}_4.
  \]
  其因子群均为素数阶循环群。

- 3\) $K$是域，$V$是$n$维$K$-线性空间，
  $V=V_0 \supset V_1 \supset \cdots \supset V_n = 0$是一列下降的线性子空间并且$\dim_K(V_i)=n-i$，
  $i=0,\cdots,n$。定义[^3]
  \[
  G = \big\{s \in \mathbf{GL}(V) \big| s\colon V_i \rightarrow V_i, \ \ 0\leqslant i\leqslant n \big\}.
  \]
  以及其子群序列$(B_i)_{0\leqslant i\leqslant n}$：
  \[
  B_i = \big\{s \in G \big| (s-1) V_j \subset V_{i+j}\text{, }0\leqslant j \leqslant n-i\big\}.
  \]
  特别地，$B_0 = G$而$B_n=1$。很明显，$
  {B_0/B_1}
 =
  {G/B_1}
$同构于对角矩阵构成的子群。我们证明，对$j+k\leqslant n$，我们有$(B_j, B_k) \subset B_{j+k}$：

  任取$s\in B_j$，$t\in B_k$和$x \in V_i$，根据定义，存在$v \in V_{i+k}, w\in V_{i+j}$，
  使得$t x = x + v, sx=x+w$。从而
  \[
  \begin{aligned}
  stx &= s(x + v)= x+ w  + v  + t',\\
  tsx &= t(x + w)= x+v+ w + t'',
  \end{aligned}
  \]
  其中，$t',t'' \in V_{i+j+k}$。
  从而，在模$V_{i+j+k}$的意义下，$stx \equiv tsx$，亦即$s^{-1}t^{-1}stx \equiv x$，
  所以$(B_j, B_k) \subset B_{j+k}$。特别地，我们得到

  - 对$0\leqslant i \leqslant n$，$(B_0, B_i)\subset B_i$，所以$B_i$是$G=B_0$的正规子群。

  - 对$1\leqslant i \leqslant n$，$(B_i, B_i)\subset B_{2i} \subset B_{i+1}$，所以$
  {B_i/B_{i+1}}
$是交换群（$i\leqslant n-1$）。

  据此，滤链$(B_i)_{0\leqslant i\leqslant n}$满足 @prop-solvablity 的(2)，所以$G$是可解群。

:::

[^1]: 我们采取Bourbaki的约定，更多文献中将换位子定义为$xyx^{-1}y^{-1}$。
  这些差异对于整个理论没有影响。
[^2]: 代数方程可用根式求解当且仅当其Galois群可解，这是术语“可解”的来源。
[^3]: 如果选一组基$(e_i)$，使得$e_i\in V_i$，那么，$G$就是可逆上三角矩阵所构成的群。
