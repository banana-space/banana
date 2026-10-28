---
title: Galois 理论的经典应用
---

<problems>
- “多项式的根式解”一节的“四次方程”例子中，分裂域先记作 $M$，其后的 $\mathbf{Gal}(L/K)$、$L^{H\cap\mathbf{Gal}(L/K)}$ 与 $[L:K]$ 中的 $L$ 似乎应为 $M$；所设的三次本原单位根 $\xi$ 在例中未被用到。
</problems>

## 尺规作图

根据Wantzel的结论，即 @thm:wantzel，$x\in {\mathbb{R}}$是尺规可作的当且仅当存在有限个域扩张
\[
{\mathbb{Q}}=K_0\subset K_1\subset \cdots \subset K_m\subset {\mathbb{R}}
\]
使得$[K_i:K_{i-1}]=2$（$i=1,\cdots,m$）并且$x\in K_m$。
通过添加$i$以及考虑$z$的实部和虚部，那么，$z\in {\mathbb{C}}$是尺规可作的当且仅当存在有限个域扩张
\[
{\mathbb{Q}}=K_0\subset K_1\subset \cdots \subset K_m\subset {\mathbb{C}}
\]
使得$[K_i:K_{i-1}]=2$（$i=1,\cdots,m$）并且$z\in K_m$。
通过考虑$z$在${\mathbb{Q}}$上的最小多项式$P(X)$以及域同构$
  {{\mathbb{Q}}[X]/(P)}
\simeq {\mathbb{Q}}(z)\subset K_m$是$K_m$的子域，所以$\deg(P)$是$2$的幂。

::: theorem
$z\in \mathbb{C}$是代数数（即$z$在${\mathbb{Q}}$上是代数的），
$P(X)\in {\mathbb{Q}}[X]$为其极小多项式，$L$为$P(X)$在${\mathbb{Q}}$上的分裂域。
那么，$z$是尺规可作的当且仅当$[L:{\mathbb{Q}}]$为$2$的幂。
:::

::: lemma
$G$是$p$-群，即$|G|=p^n$，$p$为素数，则存在滤链$G=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$，使得
\[
  {G_{i-1}/G_i}
\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
, \ \ i=1,\cdots n.
\]
:::

::: proof
对$n$进行归纳。$n=1$时，命题是平凡的。假设命题对$<n$的整数都成立。
当$|G|=p^n$时，根据 @prop:non-trivial-center-for-p-groups，$G$的中心${\rm Z}(G)$非平凡，
所以可以选取$G_{n-1}<{\rm Z}(G)$，使得$G_{n-1}\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
$。我们还有$G_{n-1}\lhd G$。那么，$
  {G/G_{n-1}}
$是阶为$p^{n-1}$的群。根据归纳假设，存在$G$的子群$G_i$，其中，$i=1,\cdots,n-2$，使得
\[
  {G/G_{n-1}}
\rhd
  {G_1/G_{n-1}}
\rhd \cdots
  {G_{n-2}/G_{n-1}}
\rhd 1,
\]
并且
\[
  {G_i/G_{i+1}}
\simeq
  {{G_i/G_{n-1}}/{G_{i+1}/G_{n-1}}}
\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
.
\]
那么，$G=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$为所求的滤链。
:::

::: proof [定理的证明]
假设$L$为$P$的分裂域，$z=z_1,\cdots,z_n$为$P$在$L$中所有的根。

如果$z$是尺规可作的，则有域扩张的序列
\[
{\mathbb{Q}}=K_0\subset K_1\subset \cdots \subset K_m\subset {\mathbb{C}},
\]
使得$[K_i:K_{i-1}]=2$（$i=1,\cdots,m$）并且$z\in K_m$。选取Galois扩张$
  {M/{\mathbb{Q}}}
$，使得$M\supset K_m\cup L$。
由于$P$是不可约多项式，对每个根$z_j$，存在$g\in \mathbf{Gal}\left(
  {M/{\mathbb{Q}}}
\right)$，使得$g(z)=z_j$。实际上，由于$
  {L/{\mathbb{Q}}}
$是Galois扩张，所以存在$\sigma\in \mathbf{Gal}\left(
  {L/{\mathbb{Q}}}
\right)$，使得$\sigma(z)=z_j$。另外，$\mathbf{Gal}\left(
  {L/{\mathbb{Q}}}
\right)$是$\mathbf{Gal}\left(
  {M/{\mathbb{Q}}}
\right)$的商群，所以以上陈述成立。

根据上面的讨论，对任意的$i$，我们有域扩张的序列
\[
{\mathbb{Q}}=g(K_0)\subset g(K_1)\subset \cdots \subset g(K_m)\subset {\mathbb{C}},
\]
使得$[g(K_i):g(K_{i-1})]=2$（$i=1,\cdots,m$）并且$g(z)=z_j\in K_m$。
所以，$P$的每个根都是尺规可作的。
此时，由于尺规可作的复数是${\mathbb{C}}$的子域而$L=\mathbb{Q}(z_1,\cdots,z_n)$，
所以$L$中的元素都是尺规可作的。

由于$
  {L/{\mathbb{Q}}}
$是有限可分扩张，根据本原元素定理，即 @them:primitive-element，存在$\xi\in L$，使得$L={\mathbb{Q}}(\xi)$。由于$\xi$是尺规可作的，所以，$\xi$落在${\mathbb{Q}}$的某个扩张$M'$中，其中，$[M':{\mathbb{Q}}]=2^m$而$L={\mathbb{Q}}(\xi)\subset M'$，所以，$[L:{\mathbb{Q}}]$为$2$的幂。

最后证明若$[L:{\mathbb{Q}}]=2^m$，那么，$L$中的元素是尺规可作的。此时，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$是$2$-群。根据上一引理，存在滤链$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$，使得
\[
  {G_{i-1}/G_i}
\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
, \ \ i=1,\cdots n.
\]
根据Galois对应，存在中间域${\mathbb{Q}}=M_0 \subset M_1 \subset \cdots \subset M_n=L$，
使得$[M_i:M_{i-1}]=2$，其中，$i=1,\cdots,n$。根据Wantzel的定理，每个$M_i$中的元素都是尺规可作的。
:::

令$F_m=2^{2^m}+1$，其中，$m=0,1,\cdots$。如果$F_m$是素数，就称之为**Fermat素数**。我们可以计算
\[
F_0 = 3,\ F_1 = 5, \ F_2 = 17, \ F_3 = 257, \ F_4 = 65537.
\]
前$5$个数是素数而$641\mid F_5$。

::: remark
若$2^{n}+1$是素数，则$n$为$2$的幂。

实际上，可以假设$n=2^l m$，其中，$m$是奇数。若$m>1$，则
\[
2^{n}+1=\left(2^{2^l}\right)^m+1=(2^{2^l}+1)\sum_{k=0}^{m-1}(-1)^k \left(2^{2^l}\right)^k
\]
是合数。
:::

::: theorem
正$n$边形是尺规可作的当且仅当$n$形如$2^m F_{l_1}\cdots F_{l_k}$，其中，$l_1<\cdots<l_k$。
:::

::: proof
我们有两个基本的观察：

- 若正$n$边形可作，由于可以二等分已知角，从而正$2n$边形也可作；

- 若可以作正$n$边形和正$m$边形，其中，$n$和$m$互素，则可以作出正$nm$边形。

  根据Bézout定理，存在$a,b\in \mathbb{Z}$，使得$an+bm=1$，从而，
  $\frac{a}{m}+\frac{b}{n}=\frac{1}{nm}$。据此，
  \[
  e^{\frac{1}{mn}2\pi i}=e^{\frac{a}{m}2\pi i}\cdot e^{\frac{b}{n}2\pi i}
  \]
  也是尺规可作的。

根据这两个性质，只要对奇素数$p$证明如下两条即可：

- 1\) 正$p$边形尺规可作当且仅当$p$是Fermat素数。

- 2\) $p$是Fermat素数，正$p^2$-边形不是尺规可作的。

正$p$边形尺规可作当且仅当$e^{\frac{2\pi i}{p}}$是尺规可作的，
其分裂域为${\mathbb{Q}}(e^{\frac{2\pi i}{p}})$并且
$[{\mathbb{Q}}(e^{\frac{2\pi i}{p}}):{\mathbb{Q}}]=p-1$。
从而，正$p$边形尺规可作当且仅当$p-1$是$2$的幂，这也等价于$p$为Fermat素数。

另外，对于素数$p>2$，正$p^2$边形尺规可作当且仅当$e^{\frac{2\pi i}{p^2}}$是尺规可作的，
其在${\mathbb{Q}}$上的分裂域的次数为$\varphi(p^2)=p(p-1)$，这显然不是$2$的幂。
所以正$p^2$-边形不是尺规可作的。
:::

::: example
我们考虑多项式$P(X)=X^4+X^3-X^2-X+1$的根是否是尺规可作的，这等价于研究它在${\mathbb{Q}}$上的分裂域$
  {L/{\mathbb{Q}}}
$。

首先证明$P(X)$是${\mathbb{Q}}[X]$上的不可约多项式。我们用$\!\!\!\mod 2$的方法。
在${\mathbb{F}}_2[X]$中，$P(X)$对应着多项式$\overline{P}(X)=X^4+X^3+X^2+X+1$，
它显然在${\mathbb{F}}_2$中没有根。
反设$P(X)$可约，则其根是某个二次不可约多项式的根，从而落在${\mathbb{F}}_4$中。
令${\mathbb{F}}_4={\mathbb{F}}_2(a)$，此时，$a$在${\mathbb{F}}_2$上的极小多项式为$X^2+X+1$，
则${\mathbb{F}}_4=\{0,1,a,a+1\}$。
直接计算，可以给出$\overline{P}(a)=a+1, \overline{P}(a+1)=a$，它们均非零，矛盾。
所以，$\overline{P}$是不可约的，进而$P$在${\mathbb{Q}}[X]$中不可约。

由于$P(X)$是实系数多项式，在$\mathbb{C}[X]$中，它可以被写成
\[
P(X)=(X^2+aX+b)(X^2+\overline{a}X+\overline{b}).
\]
据此，
\[
\begin{cases}
&a+\overline{a}=1,\\
&a\overline{a}+b+\overline{b}=-1,\\
&a\overline{b}+b\overline{a}=-1,\\
&b\overline{b}=1.
\end{cases}
\]
当$b=\overline{b}=-1$时，第一个与第三个方程一样，此时可以解出$a$，从而，
\[
P(X)=(X^2+\frac{1+i\sqrt{3}}{2}X-1)(X^2+\frac{1-i\sqrt{3}}{2}X-1).
\]
任意选取$\alpha$为$P(X)$的根。
根据以上因式分解，$\frac{1+i\sqrt{3}}{2}$或$\frac{1-i\sqrt{3}}{2}$在${\mathbb{Q}}(\alpha)$中，
即$i\sqrt{3}\in {\mathbb{Q}}(\alpha)$，从而，我们有域扩张
\[
\begin{tikzcd}
{\mathbb{Q}}\arrow[r,  dash] & {\mathbb{Q}}(i\sqrt{3}) \arrow[r,  dash] & {\mathbb{Q}}(\alpha)。
 \end{tikzcd}
\]
不妨假设$\alpha$是$X^2+\frac{1+i\sqrt{3}}{2}X-1$的根而另一个根是$\beta=-\alpha^{-1}$，
则$X^2+\frac{1-i\sqrt{3}}{2}X-1$的根是$\overline{\alpha}$和$\overline{\beta}$。
此时，我们有域扩张的图表：
\[
\begin{tikzcd}
 &L={\mathbb{Q}}[\alpha,\overline{\alpha},\beta, \overline{\beta}] &\\
{\mathbb{Q}}[\alpha] \arrow[ur, dash]    &  &   {\mathbb{Q}}[\overline{\alpha}]  \arrow[ul, dash]\\
 &{\mathbb{Q}}[i\sqrt{3}] \arrow[ul, dash] \arrow[ur, dash] &\\
  &{\mathbb{Q}} \arrow[u, dash] &
  \end{tikzcd}
\]
以上每个相邻中间域的扩张次数均为$2$，所以$[L:{\mathbb{Q}}]=8$。这表明$P(X)$的所有根都是尺规可作的。

以下我们计算$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$。由于$P(X)$不可约，所以$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$在根$\{\alpha,\beta,\overline{\alpha},\overline{\beta}\}$上的作用是传递的。受此启发，先考虑如下群论的问题：

::: remark
将$\mathfrak{S}_4$视作是在$\{1,2,3,4\}$上作用的变换群，
$H<\mathfrak{S}_4$并且$H$在$\{1,2,3,4\}$上的作用是传递的，我们要找出所有可能的$H$。
很显然，$4\mid |H|$并且$|H|\mid 24$，所以，$|H|=4,8,12$或者$24$。

- $|H|=24$，则$H=\mathfrak{S}_4$。

- $|H|=12$，则$H=\mathfrak{A}_4$。

  实际上，该群的指标为$2$，从而$H\lhd\mathfrak{S}_4$。
  特别地，$H$中不能包含任何的对换，否则通过共轭它包含所有对换，从而$H=\mathfrak{S}_4$。
  所以，$H$中包含所有的$(a,b)(c,d)$型置换，从而包含$\mathfrak{A}_4$。

- $|H|=8$，那么，$H=\mathfrak{D}_4$。

  此时，$H$为某个$\mathfrak{S}_4$的Sylow $2$-子群。
  由于所有的Sylow $2$-子群同构，所以，我们只要给出一个$\mathfrak{S}_4$的Sylow $2$-子群的结构即可。
  考虑正$4$边形的对称群$\mathfrak{D}_4$作用在$4$个顶点集上，
  我们得到$\mathfrak{D}_4\hookrightarrow \mathfrak{S}_4$。

- $|H|=4$，那么，$H=
  {{\mathbb{Z}}/4{\mathbb{Z}}}
$或者$
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。

  根据上述讨论，通过共轭可以假设$H$落在Sylow $2$-子群$\mathfrak{D}_4$中。它的传递的$4$阶子群为$
  {{\mathbb{Z}}/4{\mathbb{Z}}}
$（由旋转$\frac{\pi}{2}$来实现）或者$\langle (1,2)(3,4), (1,4)(2,3)\rangle$。

:::

根据以上注记，$P(X)=X^4+X^3-X^2-X+1$在${\mathbb{Q}}$上分裂域的Galois群只能是$\mathfrak{D}_4$。
:::

## 多项式的根式解

在这一节中，为了避免过多的技术负担，我们只讨论特征为$0$的域。
假设$K$为特征零的域，$P\in K[X]$，如果$P$在$\overline{K}$的每个根都可以通过有限步如下的操作得到：
每一步都是对前面步骤已经得到数（包括$K$）进行一次加减乘除或者开$n$次方的操作，
我们就说$P$是**根式可解的**。类似于尺规作图问题，这可以用域的语言来表达：

::: definition
假设$K$的特征为零，$
  {L/K}
$是域扩张。如果存在中间域的序列：
\[
K=K_0\subset K_1\subset \cdots \subset K_m=L
\]
使得对任意的$i=1,\cdots,m$，存在$x_i\in K_i$以及正整数$d_i$，
使得$K_i=K_{i-1}(x_i)$并且$x_i^{d_i}\in K_{i-1}$，就称$
  {L/K}
$是**根式扩张**。换而言之，$L$是通过对$K$添加有限个$d_i$次方根得到的。

对于多项式$P(X)\in K[X]$，若存在根式扩张$
  {L/K}
$，使得$P$在$L$中分裂，则称 **$P(X)$在$K$上有根式解**。
:::

::: remark
给定域扩张$
  {L/K}
$及中间域$K\subset M\subset L$，若$
  {L/M}
$和$
  {M/K}
$是根式扩张，则$
  {L/K}
$也是。
:::

::: lemma [技术性引理：过渡到Galois扩张]
域$K$的特征为零，$
  {L/K}
$是根式扩张，那么，$L$在$\overline{K}$中的正规闭包$N$也是$K$的根式扩张。
:::

::: remark
$L$由$K$添加上$P(X)\in K[X]$的某些根生成。
现在把$P(X)$的所有根都添到$K$中就得到了$L$在$\overline{K}$中的正规闭包$N$。
:::

::: proof
$
  {L/K}
$是根式扩张，所以存在中间域的序列：
\[
K=K_0\subset K_1\subset \cdots \subset K_m=L
\]
使得对任意的$i=1,\cdots,m$，存在$x_i\in K_i$以及正整数$d_i$，
$K_i=K_{i-1}(x_i)$并且$x_i^{d_i}\in K_{i-1}$。对$m$进行归纳来证明该命题，其中$m=0$时，命题是显然的。
假设命题对$m-1$成立。
\[
\begin{tikzcd}
  N  \arrow[dd,  dash]  \arrow[drr,  dash] \arrow[rr,  "="] &  &N'  \arrow[d,  dash]\\
&  &N_{m-1}(x)\arrow[d,dash]\\
  L=K_{m-1}(x) \arrow[d,  dash] \arrow[urr, dash] &  &N_{m-1}\\
K_{m-1} \arrow[dr,  dash]   \arrow[urr, dash]&  &  \\
 &K  \arrow[uur,dash]&
  \end{tikzcd}
\]
我们选取$x\in L$，使得$L=K_{m-1}(x)$并且$x^d\in K_{m-1}$；
令$N_{m-1}$为$K_{m-1}$在$\overline{K}$中的正规闭包；令$N$为$K_{m}=L$在$\overline{K}$中的正规闭包。
由于$x\in L\subset N$，$K_{m-1}\subset L\subset N$，从而，$N_{m-1}(x)\subset N$。
令$N'$为$N_{m-1}(x)$的正规闭包，从而，$N=N'$。根据归纳假设，$
  {N_{m-1}/K}
$是根式扩张，只要证明$
  {N'/N_{m-1}}
$是根式扩张即可。由于$
  {N_{m-1}(x)/N_{m-1}}
$是根式扩张（因为$x^d\in N_{m-1}$），只要说明$
  {N'/N_{m-1}(x)}
$是根式扩张：根据正规扩张的构造，$N'$可以看作是从$N_{m-1}(x)$出发，逐次加入$x$的极小多项式的根$x_1,\cdots, x_l$。由于$x^d\in N_{m-1}$，从而，每次加入的$x_i^d\in N_{m-1}$，这当然是根式扩张。
:::

::: theorem [Galois]
域$K$的特征为零，$
  {L/K}
$是有限的Galois扩张，则如下等价：

- 1\) 存在$K$的根式扩张$M$，使得$K\subset L \subset M$；

- 2\) $\mathbf{Gal}(
  {L/K}
)$是可解群。

:::

我们首先做一些准备工作：

::: remark
在研究Kummer理论时，我们有如下结论：$K$是域并且$|\mu_n(K)|=n$，$L$是$X^n-a$在$K$上的分裂域，
则$\mathbf{Gal}(
  {L/K}
)$是$\mu_n(K)$的子群，它通过
\[
\mathbf{Gal}(
  {L/K}
)\longrightarrow \mu_n(K), \ \ g\mapsto \zeta_g,  \ \ \text{其中}~g(\alpha)=\zeta_g \alpha.
\]
来实现。
:::

::: remark
以下我们主要用到如下关于可解群的性质：可解群的子群和商群都是可解的；对于群$G$及其正规子群$N\lhd G$，
若$N$和$
  {G/N}
$可解，则$G$可解。另外，对有限群$G$而言，可解等价于以下任何一条：

- $G$有滤链$G=G_0 \rhd G_1 \rhd\cdots \rhd G_n = 1$，使得$G_{i+1}$是$G_{i}$的正规子群并且$
  {G_i/G_{i+1}}
$交换，其中$0\leqslant i \leqslant n-1$。

- $G$有滤链$G=H_0 \rhd H_1 \rhd\cdots \rhd H_m = 1$，使得$H_{i+1}$是$H_{i}$的正规子群并且$
  {H_i/H_{i+1}}
$是循环群，其中$0\leqslant i \leqslant m-1$。

:::

::: proof
1)$\Rightarrow$2)。根据上述技术性引理，选取$M'$为$M$在$\overline{K}$中的正规闭包，那么，$
  {M'/K}
$也是根式扩张。通过把$M$替换为$M'$，我们不妨假设$
  {M/K}
$是根式扩张也是Galois扩张。因为$\mathbf{Gal}(
  {L/K}
)$为$\mathbf{Gal}(
  {M/K}
)$的商群，只要证明$\mathbf{Gal}(
  {M/K}
)$是可解群即可。我们选取
\[
K=K_0\subset K_1\subset \cdots \subset K_m=M,
\]
其中，$K_{i}=K_{i-1}(x_i)$并且$x_i^{d_i}\in K_{i-1}$，$1\leqslant i\leqslant m$。
为了应用Kummer理论的想法，
令$K_i'$为$K_i$上（在$\overline{K}$中）添加上$X^{d_1d_2\cdots d_m}-1$的所有根，
我们就得到如下扩张的示意图。
\[
\begin{tikzcd}
&  &K_m' =M' \arrow[d,  dash]\\
  M=K_m  \arrow[d,  dash]  \arrow[urr, dash] &  &\cdots  \arrow[d,  dash]\\
\cdots \arrow[d,  dash]&  &K'_2\arrow[d,dash]\\
 K_2 \arrow[d,  dash] \arrow[urr, dash] &  &K_1' \arrow[d,  dash]\\
 K_1 \arrow[d,  dash] \arrow[urr, dash] &  &K'\\
K   \arrow[urr, dash]&  &  \\
  \end{tikzcd}
\]
很明显，我们仍然有$K'_{i}=K'_{i-1}(x_i)$并且$x_i^{d_i}\in K'_{i-1}$，所以，
$M'=K'_{m}$仍然是$K'$上的根式扩张。另外，$
  {K'_m/K}
$是Galois扩张，这因为$M=K_m$是$K$上某个多项式$P(X)$的分裂域，所以$K'_m$是$K$上多项式$P(X)$和$X^{d_1d_2\cdots d_m}-1$的分裂域，
从而是Galois扩张。考虑如下的正合序列：
\[
1\rightarrow \mathbf{Gal}(
  {M'/K'}
)\rightarrow \mathbf{Gal}(
  {M'/K}
)\rightarrow \mathbf{Gal}(
  {K'/K}
)\rightarrow 1.
\]
根据分圆域的理论，$\mathbf{Gal}(
  {K'/K}
)$是交换群从而是可解的。所以，只要证明$\mathbf{Gal}(
  {M'/K'}
)$是可解群即可。

通过以上讨论，我们不妨设$K$中含所有$d_1d_2\cdots d_m$次单位根。此时，每个$
  {K_i/K_{i-1}}
$都是循环扩张（$K_i$现在是添加了$X^{d_i}-x_i^{d_i}$的所有根），通过考虑$K_{i-1}\subset K_i\subset M$，我们知道$\mathbf{Gal}(
  {M/K_i}
)$是$\mathbf{Gal}(
  {M/K_{i-1}}
)$的正规子群。如果令$G_i=\mathbf{Gal}(
  {M/K_i}
)$，我们就得到滤链：
\[
G_0 \rhd G_1\rhd \cdots G_{m-1}\rhd 1,
\]
并且
\[
  {G_{i-1}/G_{i}}
=
  {\mathbf{Gal}({M/K_{i-1}})/\mathbf{Gal}({M/K_i})}
\simeq \mathbf{Gal}(
  {K_i/K_{i-1}}
)
\]
是循环群。从而，$G_0={\mathbf{Gal}(
  {M/K}
)}$是可解群。

2)$\Rightarrow$1)。假设$\mathbf{Gal}(
  {L/K}
)$可解，我们要构造根式扩张$
  {M/K}
$，使得$L\subset M$。为了使用Kummer理论的想法，令$K'$和$L'$分别为$K$和$L$添加上$[L:K]!$次的所有单位根所得到的域，
即
\[
\begin{tikzcd}
&  &L' \arrow[d,  dash]\\
 L \arrow[d,  dash] \arrow[urr, dash] &  &K'\\
K   \arrow[urr, dash]&  &  \\
  \end{tikzcd}
\]
类似于前面的讨论，$
  {L'/K}
$是Galois扩张。另外，$
  {L/K}
$是Galois扩张，从而，$\mathbf{Gal}(
  {L'/L}
)\lhd \mathbf{Gal}(
  {L'/K}
)$。另外，分圆扩张$
  {L'/L}
$是Abel扩张而$\mathbf{Gal}(
  {L/K}
)$
是可解群，从而$\mathbf{Gal}(
  {L'/K}
)$是可解群，所以其子群$\mathbf{Gal}(
  {L'/K'}
)$也是可解群。另外，$[L':K']\leqslant [L:K]$：假设$L=K(\alpha)$，$P(X)$为$\alpha$在$K$上的极小多项式，那么，$L'=K'(\alpha)$而$\alpha$在$K'$上的极小多项式的次数不超过$\deg(P)$。此时，$K'$包含了所有$[L':K']!$次单位根。由于$K'$为$K$添加了一个本原单位根，所以$
  {K'/K}
$是根式扩张。于是，只要对$
  {L'/K'}
$证明即可。

综上所述，我们不妨设$K$包含了所有的$[L:K]!$次单位根。由于$\mathbf{Gal}(
  {L/K}
)$可解，所以存在滤链
\[
\mathbf{Gal}(
  {L/K}
)=G_0 \rhd G_1\rhd \cdots G_{m-1}\rhd G_m=1,
\]
使得$
  {G_{i-1}/G_{i}}
$是循环群，其中，$i=1,2,\cdots,m$。令$K_i=L^{G_i}$，根据Galois对应，我们有域扩张的序列：
\[
K=K_0\subset K_1\subset \cdots \subset K_m=L,
\]
由于$G_1 \lhd G_0$，所以，$
  {K_1/K_0}
$是Galois扩张；由于$G_2 \lhd G_1$，所以，$
  {K_2/K_1}
$是Galois扩张；以此类推，$
  {K_i/K_{i-1}}
$为Galois扩张，其Galois群为$[K_i:K_{i-1}]$阶循环群。由于$[K_i:K_{i-1}]\mid [L:K]$，$K_{i-1}$中包含所有的$[K_i:K_{i-1}]$次单位根。根据Kummer理论，存在$x_i\in K_i$，使得$K_i=K_{i-1}(x_i)$并且$x_i^{[K_i:K_{i-1}]}\in K_{i-1}$。所以，$
  {L/K}
$是根式扩张。

至此，我们完整地证明了Galois的定理。
:::

::: example
多项式$X^5-6X+3\in \mathbb{Q}[X]$的分裂域的Galois群为$\mathfrak{S}_5$。
$\mathfrak{S}_5$是不可解群，所以$X^5-6X+3=0$在${\mathbb{Q}}$上不能通过根式求解。
:::

::: example [三次方程]
假设${\rm Char}(K)=0$并且包含一个三次本原单位根$\xi$，$P(X)=X^3+aX+b\in K[X]$是不可约多项式，
$L$为$P$在$K$上的分裂域。$\alpha, \beta,\gamma\in L$为$P$的三个根。
此时，$[L:K]=3$或$6$而${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq \mathfrak{A}_3$或$\mathfrak{S}_3$。

令$H<G$为其唯一的$3$阶子群，
$\sigma \in H$为其生成元并不妨假设
$\sigma(\alpha)=\beta,\sigma(\beta)=\gamma,\sigma(\gamma)=\alpha$。定义Lagrange解式
\[
z=\alpha+\xi\beta+\xi^2\gamma, \ z'=\alpha+\xi^2\beta+\xi\gamma.
\]
由于$\sigma(z^3)=z^3,\sigma(z'^3)=z'^3$，所以，$z^3,z'^3\in L^H$。

现在考虑Galois对应：
\[
\begin{tikzcd}
 L \arrow[r, dash, dashed] & 1 \arrow[d, hook]\\
 L^{H}=K(\Delta)\arrow[u, dash] \arrow[r, dash, dashed]&H\arrow[d, hook]\\
K\arrow[u, dash] \arrow[r, dash, dashed] & \mathbf{Gal}(
  {L/K}
)  \arrow[u, dash]
  \end{tikzcd}
\]
那么，$[L^H:K]=1$或$2$。无论何种情形，我们都有$L^H=K(\Delta)$，其中，
\[
\Delta=(\alpha-\beta)(\alpha-\gamma)(\beta-\gamma).
\]
另外，对于$P(X)=X^3+aX+b$而言，
\[
{\rm Disc}(P)=(-1)^{\frac{3(3-1)}{2}}\Delta^2=4a^3+27b^2.
\]
所以，理论上$z^3,z'^3$可以用$K(\sqrt{-4a^3-27b^2})$的元素表达，所以可以用系数$a,b$的根式表达。
通过开三次方，$z,z'$用系数的根式表达，再与$\alpha+\beta+\gamma=0$联立，这就给出了求根公式。

我们现在给出具体的计算。根据
\[
\begin{aligned}
&(\alpha^2\beta+\beta^2\gamma+\gamma^2\alpha)-(\alpha^2\gamma+\beta^2\alpha+\gamma^2\beta)=\Delta,\\
&(\alpha^2\beta+\beta^2\gamma+\gamma^2\alpha)+(\alpha^2\gamma+\beta^2\alpha+\gamma^2\beta)=3b
\end{aligned}
\]
我们可以计算
\[
\begin{aligned}
z^3&=\alpha^3+\beta^3+\gamma^3+3\xi(\alpha^2\beta+\beta^2\gamma+\gamma^2\alpha)+3\xi^2(\alpha^2\gamma+\beta^2\alpha+\gamma^2\beta)+6\alpha\beta\gamma\\
&=\frac{3}{2}(\xi-\xi^2)\Delta-\frac{27}{2}b,
\end{aligned}
\]
以及
\[
\begin{aligned}
z'^3&=-\frac{3}{2}(\xi-\xi^2)\Delta-\frac{27}{2}b.
\end{aligned}
\]
进一步，
\[
\begin{cases}
3\alpha=\alpha+\beta+\gamma+z+z',\\
3\beta=\alpha+\beta+\gamma+\xi^2 z+\xi z',\\
3\gamma=\alpha+\beta+\gamma+\xi z+\xi^2 z'.
\end{cases}
\]
这就可以给出Cardano的公式。
:::

::: example [四次方程]
假设${\rm Char}(K)=0$并且包含一个三次本原单位根$\xi$，$P(X)=X^4+aX^2+bX+c\in K[X]$是不可约多项式，
$M$为$P$在$K$上的分裂域。$\alpha, \beta,\gamma,\delta\in M$为$P$的四个根。
此时，${\mathbf{Gal}}\left(
  {L/K}
\right)<\mathfrak{S}_4$。

令$H:=\{1,(1,2)(3,4),(1,3)(2,4),(1,4)(2,3)\}$为$\mathfrak{S}_4$中的双置换给出的$4$阶子群。
我们有$H\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。考虑下述Galois对应：

\[
\begin{tikzcd}
 M\arrow[r, dash, dashed] & 1 \arrow[d, hook]\\
 L^{H\cap {\mathbf{Gal}}\left(
  {L/K}
\right)}\arrow[u, dash] \arrow[r, dash, dashed]&H\cap {\mathbf{Gal}}\left(
  {L/K}
\right)\arrow[d, hook]\\
K\arrow[u, dash] \arrow[r, dash, dashed] & \mathbf{Gal}(
  {L/K}
)  \arrow[u, dash]
  \end{tikzcd}
\]
令
$u=(\alpha+\beta)(\gamma+\delta), v=(\alpha+\gamma)(\beta+\delta), w=(\alpha+\delta)(\beta+\gamma)$。
问题的关键在于注意到$u,v,w\in L^{H\cap {\mathbf{Gal}}\left(
  {L/K}
\right)}$。此时，$[L:K]=2,3$或$6$，所以，$u,v,w$理论上是某个$3$次多项式的根，从而可以被解出来。
实际上，根据对称性，我们计算
\[
(X-u)(X-v)(X-w)=X^3-2aX^2+(a^2-4c)X+b^2\in K[X].
\]
所以，我们可以利用Cardano的结果来计算$u,v,w$。
另外，根据$\alpha+\beta+\gamma+\delta=0$以及$u=(\alpha+\beta)(\gamma+\delta)$，
我们可以解出$\alpha+\beta$和$\gamma+\delta$；类似地，我们可以解出
$\{\alpha,\beta,\gamma,\delta\}$中任意两个数的和，从而解出所有的根。
:::
