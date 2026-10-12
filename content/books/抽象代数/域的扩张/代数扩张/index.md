---
title: 代数扩张
---

::: definition
给定域扩张$
  {L/K}
$和$
  {L'/K}
$和域同态$\varphi\colon L\rightarrow L'$，如果$\varphi\big|_{K}={\rm id}_K$，即对任意的$x\in K$，$\varphi(x)=x$，就称$\varphi$为 **$K$-同态**。
\[
\begin{tikzcd}
 L \arrow[r, "\varphi"] &  L'\\
K \arrow[r, "{\rm id}_K"] \arrow[u, dash]    &    K  \arrow[u, dash]  \end{tikzcd}
\]
用$\mathbf{Hom}_K(L,L')$表示所有的$K$-同态，用${\mathbf{End}}_K(L)$表示所有$
  {L/K}
$到自身的$K$-同态，用$\mathbf{Aut}_K(L)$表示所有$
  {L/K}
$到自身的$K$-同构。
:::

::: remark
$\mathbf{Aut}_K(L)$配有同态的复合是群。
:::

::: definition
给定域扩张$
  {L/K}
$和$x\in L$。如果存在非零的$K$-系数多项式$P(X)\in K[X]$，使得$P(x)=0$，就称 **$x$在$K$上是代数的**。此时，存在唯一[^1]的次数最低的首一多项式$P(X)\in K[X]$，使得$P(x)=0$，我们将$P(X)$称作是$x$在$K$上的**极小多项式**。

如果以上不成立，即对任意非零$K$-系数多项式$P(X)\in K[X]$，$P(x)\neq 0$，
就称 **$x$在$K$上是超越的**。

如果每个$x\in L$在$K$上均为代数的，就称域扩张$
  {L/K}
$是**代数扩张**。
:::

::: remark
根据极小多项式次数最低的性质，$P(X)$是$K[X]$上的不可约多项式。
:::

::: remark [由代数元生成的子域]
给定域扩张$
  {L/K}
$中的一个代数元$x\in L$，我们考虑由多项式的取值给出的环同态：
\[
\begin{tikzcd}
{\rm ev}_x\colon K[X]\arrow[r,   twoheadrightarrow] &  K[x], & Q(X) \arrow[r,mapsto] &  Q(x).\end{tikzcd}
\]
即将多项式$Q(X)$在$x$处取值。这显然是满射。

假设$P(X)$是$x$在$K$上的极小多项式，从而，$P(x)=0$，所以，$P\in {\rm Ker}({\rm ev}_x)$。
另外，对于$Q(X)\in {\rm Ker}({\rm ev}_x)$，根据多项式的带余除法，存在$A,R\in K[X]$，
$\deg(R)<\deg(P)$，使得$Q=AP+R$，其中，$P$是$x$的极小多项式。通过在$x$处取值，我们有
\[
R(x)=Q(x)-A(x)P(x)=0.
\]
根据极小多项式次数最低的性质，我们知道$R=0$，从而，$Q=AP$。
以上推导表明$ {\rm Ker}({\rm ev}_x)=\big(P(X)\big)$。根据环同态第一定理，我们得到环同构
\[
  {K[X]/\big(P(X)\big)}
\stackrel{\simeq}{\longrightarrow} K[x]\subset L.
\]
另外，$\big(P(X)\big)$是极大理想[^2]，从而$K[x]$是域。特别地，$K[x]$是$L$的子域。

我们进一步说明$K[x]=K(x)$。根据定义，自然有$K[x]\subset K(x)$。
每个$K(x)$中的元素都形如$\frac{P(x)}{Q(x)}$，其中，$P,Q\in K[X]$并且$Q(x)\neq 0$。
由于$K[x]$是域，所以，$\frac{P(x)}{Q(x)}\in K[x]$，从而，$K[x]=K(x)$。
通过$K(x)$的定义中的最小性也可以证明$K[x]=K(x)$：$K(x)$是包含$x$的最小的域，
而$K[x]$是域并且包含$x$，所以$K[x]=K(x)$。
:::

::: proposition
给定域扩张$
  {L/K}
$和$x\in L$，那么$x$在$K$上是代数的当且仅当$
  {K(x)/K}
$是有限扩张。

进一步，$[K(x):K]=\deg P(X)$，其中，$P(X)$为$x$的极小多项式而$1,x,\cdots,x^{\deg(P)-1}$是$
  {K(x)/K}
$的一组基。

我们还有如下域同构的序列：
\[
  {K[X]/\big(P(X)\big)}
\stackrel{\simeq}{\rightarrow} K[x]\stackrel{\simeq}{\hookrightarrow}K(x).
\]
:::

::: proof
假设$
  {K(x)/K}
$是有限扩张，那么，（可能）无限个元素$1,x,\cdots,x^n,\cdots$在$K$上线性相关，从而存在$a_0,\cdots,a_n \in K$，$a_n\neq 0$，
使得
\[
a_0+a_1x+\cdots +a_n x^n=0 \ \ \Leftrightarrow \ \ P(x)=0, \ P(X)=\sum_{k=0}^n a_k X^k\in K[X].
\]
这表明$x$在$K$上是代数的。

如果$x$在$K$上是代数的，我们考虑它的极小多项式$P(X)=X^n+\sum_{k=0}^{n-1} a_k X^k$，其中，
$n\geqslant 1$。
根据$P(x)=0$，我们知道$1,x,\cdots,x^{n}$在$K$上线性相关；根据$P$的最小性，
$1,x,\cdots,x^{n-1}$在$K$上线性无关（否则将有次数更低的$K$-系数多项式以$x$为根）。
这说明$1,x,\cdots,x^{n-1}$是$
  {K(x)/K}
$的基。

至此，命题中结论均已证明。
:::

::: corollary
有限扩张是代数扩张。
:::

::: proof
对任意给定的有限扩张$
  {L/K}
$，对任意的$x\in L$，$K(x)$是中间域，从而，$
  {K(x)/K}
$是有限扩张。根据以上命题，$x$是代数的，即$L$中所有元素均为代数的，所以$
  {L/K}
$是代数扩张。
:::

::: corollary
给定域扩张$
  {L/K}
$，如下命题成立：

- 1\) 子集$M\subset L$中的每个元素在$K$上均为代数的，那么，$
  {K(M)/K}
$是代数扩张。进一步，如果$M$还是有限集，那么$
  {K(M)/K}
$是有限扩张。

- 2\) 令$K^{\rm alg} =\big\{x\in L|\text{$x$ 在 $K$ 上是代数的}\big\}$，那么，
  $K^{\rm alg}$是$L$的子域。特别地，$
  {K^{\rm alg}/K}
$是$
  {L/K}
$中最大的[^3]、代数的中间域。

:::

::: proof
假设$M=\{m_1,\cdots,m_k\}\subset L$是在$K$上代数的元所构成的有限子集，根据以上命题，$
  {K(m_1)/K}
$是有限扩张；而$m_2$显然在$K(m_1)$上是代数的，所以，$
  {K(m_1,m_2)/K(m_1)}
$是有限扩张。从而，$
  {K(m_1,m_2)/K}
$是有限扩张。以此类推，我们得到$
  {K(m_1,\cdots,m_k)/K}
$是有限扩张。

现在仅假设$M\subset L$是由在$K$上代数的元素构成的子集（未必有限）。
对任意的$x\in K(M)$，存在$m_1,\cdots,m_k\in M$，使得$x\in K(m_1,\cdots,m_k)$。以上我们已经证明了$
  {K(m_1,\cdots,m_k)/K}
$是有限扩张，所以，$
  {K(x)/K}
$是有限扩张，即$x$在$K$上是代数的。这就证明了$
  {K(M)/K}
$是代数扩张。

为了说明$K^{\rm alg}$是子域，对$M=K^{\rm alg}$运用上面的结论，
从而$K\left(K^{\rm alg} \right)$中元素均为代数的。
根据$K^{\rm alg}$的定义，$K\left(K^{\rm alg} \right)\subset K^{\rm alg}$。
这表明，$K\left(K^{\rm alg} \right)= K^{\rm alg} $而$K\left(K^{\rm alg}\right)$是子域。
:::

::: corollary
给定$
  {L/K}
$的中间域$
  {E/K}
$，那么，$
  {L/K}
$是代数扩张当且仅当$
  {L/E}
$和$
  {E/K}
$均为代数扩张。
:::

::: proof
如果$
  {L/K}
$是代数扩张，很明显$
  {L/E}
$和$
  {E/K}
$均为代数扩张。

如果$
  {L/E}
$和$
  {E/K}
$均为代数扩张。对任意的$x\in L$，根据$
  {L/E}
$是代数扩张的定义，存在正整数$n$和$e_0,\cdots, e_{n-1}\in E$，使得
\[
x^n+e_{n-1}x^{n-1}+\cdots+e_1x+e_0=0.
\]
这表明$x$在$K(e_{n-1},\cdots,e_0)$上是代数的，从而，$
  {K(e_{n-1},\cdots,e_0,x)/K(e_{n-1},\cdots,e_0)}
$是有限扩张。另外，由于$e_0,\cdots, e_{n-1}$在$K$上是代数的，所以，$
  {K(e_{n-1},\cdots,e_0)/K}
$是有限扩张。综上所述，$
  {K(e_{n-1},\cdots,e_0,x)/K}
$是有限扩张，所以，$x$在$K$上是代数的。
:::

[^1]: 利用$K[X]$是主理想整环或者辗转相除法
[^2]: 主理想整环的非零素理想都是极大理想。
  我们还可以直接证明：假设$\big(P(X)\big)\subset I$是非平凡理想，那么，$I=\big(P_1(X)\big)$，
  这表明存在$Q(X)\in K[X]$，使得$P(X)=P_1(X)\cdot Q(X)$，然而，$P(X)$不可约，
  所以只能有$I= \big(P(X)\big)$。
[^3]: 在包含关系下。
