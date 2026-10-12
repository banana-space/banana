---
title: Galois 理论
notices:
  - name: 问题
    items:
      - “Galois群在根上的作用”一节中关于 $X^7-8$ 的分裂域的例子末尾称 Galois 群是 $42$ 阶循环群并且是两个子群的直积，这似乎不成立：该 Galois 群似乎同构于 $\mathbb{Z}/7\mathbb{Z}\rtimes(\mathbb{Z}/7\mathbb{Z})^\times$，不是交换群。
      - “有限域”一节中定理的证明里，“${\rm Frob}^k(\xi)=\xi$ 当且仅当 $n-1\mid k-1$”似乎应为 $p^n-1\mid p^k-1$。
---

## Galois对应

给定正规扩张$
  {L/K}
$，记${\rm Gal}(
  {L/K}
)={\rm Aut}_K(L)$并称之为$
  {L/K}
$的**Galois群**。如果域扩张$
  {L/K}
$是正规的也是可分的，就称$
  {L/K}
$为**Galois 扩张**。对任意的子群$H<{\rm Gal}(
  {L/K}
)$，定义
\[
L^H\coloneqq\big\{x\in L\bigm| g(x)=x, \forall g \in H\big\}.
\]

::: lemma
$
  {L/K}
$是有限正规扩张，则
\[
[L:K]_s=\big|{\rm Gal}(
  {L/K}
)\big|.
\]
特别地，若$
  {L/K}
$是Galois扩张，那么
\[
[L:K]=\big|{\rm Gal}(
  {L/K}
)\big|.
\]
:::

::: proof
我们选定域扩张$
  {\Omega/L}
$，其中，$\Omega$是代数封闭的。那么，
\[
[L:K]_s=\left|{\rm Ext}_{
  {L/K}
}\big(\Omega,{\rm id}\big)\right|\stackrel{\text{正规}}{=}\left|{\rm Ext}_{
  {L/K}
}\big(L,{\rm id}\big)\right|=\big|{\rm Gal}(
  {L/K}
)\big|.
\]
如果$
  {L/K}
$是Galois扩张，则$[L:K]_s=[L:K]$，所以$[L:K]=\big|{\rm Gal}(
  {L/K}
)\big|$。
:::

::: proposition
$
  {L/K}
$是正规扩张，$G={\rm Gal}(
  {L/K}
)$。
\[
\begin{tikzcd}
 L  \ar[dd, "\text{正规}"',dash, bend right=60,swap] \\
L^G\ar[u, "\text{Galois}"',dash, dashed,swap] \\
K \ar[u, "\text{纯不可分}"',dash, dashed,swap]
  \end{tikzcd}
\]

那么，$
  {L^{G}/K}
$是纯不可分的，$
  {L/L^G}
$是Galois扩张并且
\[
{\rm Gal}(
  {L/L^G}
)=G.
\]

进一步，我们有$\overline{L}^s\cdot L^G=L$，$\overline{L}^s\cap L^G=K$。
:::

::: proof
选定$\Omega=\overline{K}$。根据正规性的定义，我们有（先将每个${\rm Ext}_{
  {L^G/K}
}\big(\Omega,{\rm id}\big)$中的映射延拓到$L$上）
\[
{\rm Ext}_{
  {L^G/K}
}\big(\Omega,{\rm id}\big)={\rm Ext}_{
  {L^G/K}
}\big(L,{\rm id}\big).
\]
根据$L^G$的定义，对于每个$\varphi\in {\rm Ext}_{
  {L^G/K}
}\big(L,{\rm id}\big)$，它被延拓到成$L$上的自同构（从而落在$G$中）之后在$L^G$上是单位映射。所以上式右边集合只有一个元素。从而，$[L^G:K]_s=1$，即$
  {L^{G}/K}
$纯不可分。

现在证明$
  {L/L^G}
$是可分的。对任意的$x_1\in L$，令$P(X)\in L^G[X]$为$x_1$在$L^G$上的极小多项式。因为$
  {L/L^G}
$是正规的，所以$P$的所有根都在$L$中，令$x_1,\cdots,x_m$为$P$的所有不同的根。对任意的$\sigma\in G$，我们知道$P^\sigma=P$（因为$P$是$L^G$系数的）。从而，对任意的根$x_i$，
\[
0=P(x_i)=P^\sigma(x_i)=\big(\prod_{\text{所有根}}(X-\alpha)\big)^{\sigma}=\prod_{\text{所有根}}(X-\sigma(\alpha)).
\]
这表明$x_i$形如$\sigma(\alpha)$，其中，$\alpha$也是根，即$\sigma^{-1}(x_i)$仍然是$P$的根。
从而，我们得到了群作用：
\[
{\rm Gal}(
  {L/K}
)\times \{x_1,\cdots,x_m\}\rightarrow  \{x_1,\cdots,x_m\}.
\]
令$Q(X)=(X-x_1)\cdots (X-x_m)$，那么，对任意的$g\in G$，$Q^g=Q$，这说明$Q$的系数均落在$L^G$中。
特别地，$P\mid Q$而$Q$无重根，所以$P$是可分的。

最后来说明${\rm Gal}(
  {L/L^G}
)=G$。根据定义，${\rm Gal}(
  {L/L^G}
)<{\rm Gal}(
  {L/K}
)$。另外，对任意的$g\in {\rm Gal}(
  {L/K}
)$，按定义，$g$在$L^G$上的作用是平凡的，从而，$g\in {\rm Gal}(
  {L/L^G}
)$，即${\rm Gal}(
  {L/K}
)<{\rm Gal}(
  {L/L^G}
)$。

我们注意到$
  {(\overline{L}^s\cap L^G)/K}
$是$L^G$的中间域，所以是纯不可分的，它也是$\overline{L}^s$的中间域，所以是可分的，从而，$\overline{L}^s\cap L^G=K$；${\overline{L}^s\cdot L^G}$是$
  {L/\overline{L}^s}
$的中间域，所以是纯不可分的，也是$
  {L/L^G}
$的中间域（这是一个Galois扩张），所以是可分的，从而，$\overline{L}^s\cdot L^G=L$。
:::

::: remark
证明过程中利用$G$在根上的作用是Galois理论中最典型的推理方法（群作用）。
:::

::: theorem [Galois对应定理]
$
  {L/K}
$是有限Galois扩张，定义中间域的集合和子群的集合：
\[
\mathcal{M}=\big\{K\subset M\subset L\big| M\text{ 是中间域}\big\}, \ \ \mathcal{S}=\big\{H<\mathbf{Gal}(
  {L/K}
)\text{ 是子群}\big\},
\]
并用包含关系作为$\mathcal{M}$和$\mathcal{S}$上的偏序。
那么，我们有如下的反转偏序关系的**Galois对应**（以下映射互为逆）：
\[
\mathcal{M}\stackrel{1:1}{\longrightarrow}\mathcal{S},  \ \ M \mapsto \mathbf{Gal}(
  {L/M}
),  \ \ L^H\leftarrow{\raisebox{0.4pt}{$\hspace{-6pt}\shortmid$}} H.
\]
\[
\begin{tikzcd}
 L \ar[r, dash, dashed]&1 \ar[d, hook] & & & L \ar[r, dash, dashed] & 1 \ar[d, hook]\\
 M_1\ar[u, hook] \ar[r, dash, dashed]&\mathbf{Gal}(
  {L/M_1}
) \ar[d, hook] & & & L^{H_1}\ar[u, hook] \ar[r, dash, dashed]&H_1 \ar[d, hook]\\
 M_2 \ar[u, hook]  \ar[r, dash, dashed]&     \mathbf{Gal}(
  {L/M_2}
)  \ar[d, hook] & & &L^{H_2} \ar[u, hook]  \ar[r, dash, dashed]&    H_2  \ar[d, hook] \\
 K\ar[u, hook] \ar[r, dash, dashed] & \mathbf{Gal}(
  {L/K}
)  \ar[u, dash]& & & K\ar[u, hook] \ar[r, dash, dashed] & \mathbf{Gal}(
  {L/K}
)  \ar[u, dash]
  \end{tikzcd}
\]
进一步，扩张$
  {M/K}
$是正规扩张[^1]当且仅当$\mathbf{Gal}(
  {L/M}
)\lhd \mathbf{Gal}(
  {L/K}
)$是正规子群并且在此情形下，我们有
\[
\mathbf{Gal}(
  {M/K}
)=
  {\mathbf{Gal}({L/K})/\mathbf{Gal}({L/M})}
.
\]
:::

::: proof
我们用$\Phi\colon\mathcal{M}\rightarrow \mathcal{S}$和$\Psi\colon\mathcal{S}\rightarrow \mathcal{M}$
表示上述对应映射。
我们证明$\Psi\circ \Phi={\rm id}_{\mathcal{M}}$，即对给定的$M\in \mathcal{M}$，证明$L^{\mathbf{Gal}(
  {L/M}
)}=M$：

令$M'=L^{\mathbf{Gal}(
  {L/M}
)}$，按定义，$M\subset M'$，只要证明$M'\subset M$即可。如若不然，选取$\alpha\in M'-M$并用$P(X)$表示$\alpha$在$M$上的极小多项式。此时，$\deg(P)\geqslant 2$。
\[
\begin{tikzcd}
 \ar[r, hook] M(\beta)&L &\\
\ar[r, hook]  \ar[u, "\varphi",dashed] M(\alpha) &M' \ar[u, dash] & \\
 &M \ar[u, dash] &
  \end{tikzcd}
\]
由于$
  {L/M}
$是正规扩张，所以，$P$的所有根都在$L$中。另外，$
  {L/M}
$是可分扩张，我们可以选取$\beta\in L$，使得$P(\beta)=0$并且$\beta \neq \alpha$。由于$M(\beta)$与$M(\alpha)$同构，我们选取$\varphi\in {\rm Hom}_M\big(M(\alpha),M(\beta)\big)$，从而，$\varphi\in {\rm Hom}_M\big(M(\alpha),L\big)$。
\[
\begin{tikzcd}
 & &\overline{L}\\
L \ar[d, dash] \ar[rru, "\overline{\varphi}",dashed] \ar[rr, "\overline{\varphi}",dashed] & &L\ar[u, hook] \\
M(\alpha)  \ar[rru, "\varphi"]&  &  \\
 & M \ar[ul, dash] \ar[uur, dash]&
  \end{tikzcd}
\]
此时，$\varphi$可以被扩张成$\overline{\varphi}\colon L\rightarrow \overline{L}$。由于$
  {L/M}
$是正规扩张，所以，$\overline{\varphi}\colon L \rightarrow L$，即$\overline{\varphi} \in \mathbf{Gal}(
  {L/M}
)$。然而，对于$\alpha\in M'$，$\overline{\varphi}(\alpha)=\beta\neq \alpha$，矛盾。

**注。** 在以上证明$\Psi\circ \Phi={\rm id}_{\mathcal{M}}$的过程中，我们并不需要假设$
  {L/K}
$是有限扩张。作为应用，我们考虑$
  {\overline{{\mathbb{Q}}}/{\mathbb{Q}}}
$，这是Galois扩张。对任意的$\alpha\in \overline{{\mathbb{Q}}}$，$\alpha \in {\mathbb{Q}}$当且仅当对任意的$\sigma \in \mathbf{Gal}(
  {\overline{{\mathbb{Q}}}/{\mathbb{Q}}}
)$，$\sigma(\alpha)=\alpha$。

我们现在证明$\Phi\circ \Psi={\rm id}_{\mathcal{S}}$，即对给定的$H\in \mathcal{S}$，
证明$ \mathbf{Gal}(
  {L/L^H}
)=H$。根据定义$H<\mathbf{Gal}(
  {L/L^H}
)$，特别地，我们有
\[
|H|\leqslant |\mathbf{Gal}(
  {L/L^H}
)|=[L:L^H].
\]
由于$
  {L/L^H}
$是有限可分扩张，根据本原元素定理，存在$\alpha\in L$，使得$L=L^H(\alpha)$。考虑如下$L$-系数的多项式
\[
Q(X)=\prod_{h\in H}\big(X-h(\alpha)\big).
\]
很明显，$Q$的系数是$\{h(\alpha)\mid h\in H\}$的对称多项式，从而，它们均在$H$的作用下不变。
根据$L^H$的定义，我们有$Q(X)\in L^H[X]$。
令$P(X)\in L^H[X]$是$\alpha$的极小多项式，由于$Q(\alpha)=0$，所以，在$L^H[X]$中，我们有$P\mid Q$。
特别地，
\[
|H|=\deg(Q) \geqslant \deg(P)=[L^H(\alpha):L^H]=[L:L^H].
\]
综合以上不等式，我们就证明了$H=\mathbf{Gal}(
  {L/L^H}
)$。

假设$H\lhd \mathbf{Gal}(
  {L/K}
)$，为了说明$
  {L^H/K}
$是正规扩张，任意选取$\varphi\in {\rm Hom}_K(L^H,\Omega)$，其中，$\Omega=\overline{L}\supset L$，我们证明$\varphi(L^H)=L^H$：
\[
\begin{tikzcd}
 &  &\Omega\ar[d,dash]\\
 L \ar[d,  dash] \ar[urr,"\overline{\varphi}"]\ar[rr,"\overline{\varphi}",dashed]&  &L\ar[d,dash]\\
L^H \ar[dr,  dash]   \ar[urr,"\varphi"]&  &L^H \\
&K  \ar[ur,dash]&
 \end{tikzcd}
\]
首先把$\varphi$延拓成$\overline{\varphi}\in {\rm Hom}_{K}(L,\Omega)$，由于$
  {L/L^H}
$是正规扩张，所以，$\overline{\varphi}\in {\rm Hom}_{K}(L,L)$，从而，$\overline{\varphi}\in \mathbf{Gal}(
  {L/K}
)$。为了证明$\varphi(L^H)\subset L^H$，我们任选$x\in L^H$，只要证明对任意的$h\in H$，$h\big(\overline{\varphi}(x)\big)=\overline{\varphi}(x)$即可。这等价于$\big(\overline{\varphi}^{-1}\cdot h \cdot \overline{\varphi}\big)(x)=x$。由于$H\lhd \mathbf{Gal}(
  {L/K}
)$，$\overline{\varphi}^{-1}\cdot h \cdot \overline{\varphi}\in H$而$x\in L^H$，以上等式是显然的。

假设$
  {M/K}
$是正规扩张，那么，对任意的$\varphi\in  \mathbf{Gal}(
  {L/K}
)$，我们有$\varphi(M)\subset M$。通过$\varphi$在$M$上的限制，我们有群同态：
\[
{\rm Res}\colon\mathbf{Gal}(
  {L/K}
)\rightarrow   \mathbf{Gal}(
  {M/K}
).
\]
另外，对每个$\varphi\in  \mathbf{Gal}(
  {M/K}
)$，我们总能将它延拓成$\mathbf{Gal}(
  {L/K}
)$中的元素$\overline{\varphi}$：
\[
\begin{tikzcd}
 &  &\overline{L}\ar[d,dash]\\
 L \ar[d,  dash] \ar[urr,"\overline{\varphi}"]\ar[rr,"\overline{\varphi}",dashed]&  &L\ar[d,dash]\\
M\ar[dr,  dash]   \ar[rr,"\varphi"]&  &M \\
&K  \ar[ur,dash]&
 \end{tikzcd}
\]
所以，以上的限制映射是满射：
\[
{\rm Res}\colon\mathbf{Gal}(
  {L/K}
)={\rm Hom}_K(L,\overline{L})\twoheadrightarrow  {\rm Hom}_K(M,\overline{L}) =\mathbf{Gal}(
  {M/K}
).
\]
按照定义，${\rm Ker}({\rm Res})=\mathbf{Gal}(
  {L/M}
)$，即
\[
\begin{tikzcd}
  1\ar[r]& \mathbf{Gal}(
  {L/M}
) \ar[r,"\subset"]&\mathbf{Gal}(
  {L/K}
) \ar[r,"{\rm Res}"]&\mathbf{Gal}(
  {M/K}
) \ar[r]&1.
  \end{tikzcd}
\]
这就完成了整个证明。
:::

::: example [二面体群在Riemann球面上的作用]
考虑${\mathbb{C}}$上的一元函数域$L={\mathbb{C}}(T)$。
令$\xi$为某个本原的$n$-次单位根（比如选取$\xi=e^{\frac{2\pi}{n}i}$），
我们研究如下的自同构$\mathbf{Aut}_{\mathbb{C}}\big(L\big)$：
\[
\sigma(T) =\xi \cdot T,  \ \ \tau(T)=T^{-1}.
\]
由于$\sigma^n=\tau^2={\rm id}$并且$\sigma \tau \sigma =\tau$，所以，
$G=\langle \sigma, \tau\rangle<\mathbf{Aut}_{\mathbb{C}}\big(L\big)$同构于二面体群$\mathfrak{D}_n$。
令$K=L^G$，我们来证明$L^G=K:={\mathbb{C}}(T^{n}+T^{-n})$。很明显，我们有$K\subset L^G$。
令$M={\mathbb{C}}(T^n)$，那么，
\[
\begin{tikzcd}
 L={\mathbb{C}}(T)  \\
M={\mathbb{C}}(T^n)\ar[u, dash] \\
K={\mathbb{C}}(T^{n}+T^{-n}) \ar[u,  dash]
  \end{tikzcd}
\]
对于扩张$
  {M/K}
$而言，$T^n$在$K$上的极小多项式为$X^2-(T^n+T^{-n})X+1$；对于扩张$
  {L/M}
$而言，$T$在$M$上的极小多项式为$X^n-T^n$。据此，我们知道
\[
[L:K]=[L:M][M:K]=2n
\]
上面的观察还告诉我们${\mathbb{C}}(T)$是$X^{2n}-(T^n+T^{-n})X^{n}+1$在${\mathbb{C}}(T^{n}+T^{-n})$
上的分裂域（它的$2n$个根恰好为$\xi^i T^{\pm 1}, i=1,\cdots,n$）。所以，$
  {L/K}
$是正规扩张，从而是Galois扩张。

由于$K\subset L^G$并且$[L:L^G]=|G|=2n$，以上关于次数的计算表明$K=L^G$。
:::

::: remark
如果$
  {L/K}
$是有限正规扩张，我们还有
\[
[L:L^G]=[L:K]_s={\rm Gal}(
  {L/K}
), \ \ [L^G:K]=\frac{[L:K]}{[L:K]_s}={\text{$
  {L/K}
$ 的不可分次数}}.
\]
:::

根据Galois对应，$L^{\mathbf{Gal}(
  {L/K}
)}=K$，我们形象地说如果$x\in L$在$\mathbf{Gal}(
  {L/K}
)$下作用不变，那么它可以下降到$K$中。对于线性空间，我们也有类似的Galois下降：

::: proposition {@prop:galois-decent-for-linear-spaces}
给定有限维Galois扩张$
  {L/K}
$和$n$-维$L$-线性空间$L^n$，其中，$e_1=(1,0,\cdots,0),\cdots,e_n=(0,\cdots,0,1)$是它的标准的基。对任意的$x=(x_1,\cdots,x_n)\in L^n$和$\sigma \in \mathbf{Gal}(
  {L/K}
)$，我们定义
\[
\sigma(x)=\big(\sigma(x_1),\cdots,\sigma(x_n)\big).
\]

假设$V\subset L^n$是$L^n$的$d$-维$L$-线性子空间并且在$\mathbf{Gal}(
  {L/K}
)$作用下不变，即对任意的$v\in V$和$\sigma \in \mathbf{Gal}(
  {L/K}
)$，有$\sigma(v)\in V$。那么，存在$V$的基$v_1=(v_{11},\cdots,v_{1n}),\cdots,v_d=(v_{d1},\cdots,v_{dn})$，使得$v_{ij}\in K$，其中，$1\leqslant i\leqslant d, 1\leqslant j\leqslant n$。
:::

::: proof
任选$v_1,\cdots,v_d$作为$V$的基，把每个$v_i$看作是行向量并排成一列，我们得到如下的$d\times n$矩阵，
通过对$v_i$做线性组合，我们总可以把这个矩阵调成如下的形式：
\[
\begin{pmatrix}
0& \cdots & 0  & 1& *& 0  &0 & * &   \cdots & *\\
0 & \cdots & \cdots & 0& 0 & 1  &0 & *& \cdots  & *\\
\cdots &\cdots & \cdots &\cdots & \cdots &\cdots &\cdots &\cdots&\cdots \\
0&  0&  \cdots& 0& 0&0 &  1&  *& \cdots& *
\end{pmatrix}
\]
其中，每一行都是从$1$作为开始项（前面为$0$）、
每行的$1$都严格在前一行的$1$之后并且每个开始的$1$之上都是$0$。

我们现在考虑$\sigma(v_i)\in V$，即
\[
\sigma(v_i)=c_1v_1+\cdots+c_iv_i+\cdots+c_dv_d.
\]
由于$\sigma$作用在每个分量上，根据以上表达式以及上述矩阵每行的$1$都严格在前一行的$1$之后均为$0$，
$c_1,\cdots,c_{i-1}=0$而$c_i=1$，即
\[
\sigma(v_i)=v_i+c_{i+1}v_{i+1}\cdots+c_dv_d.
\]
再利用每个开始的$1$之上都是$0$，我们就有$c_{i+1}=\cdots=c_d=0$。
据此，$\sigma(v_i)=v_i$，即其每个分量都在$\mathbf{Gal}(
  {L/K}
)$作用下不变，从而落在$K$中。
:::

::: remark
以上命题使得我们可以定义一个$L$-线性空间的$K$-线性子空间。
:::

## Galois群在根上的作用

$
  {L/K}
$是有限Galois扩张，那么，$L$是某个多项式$P(X)\in K[X]$的分裂域。由于$
  {L/K}
$是可分的，我们可以假设$P(X)$是可分的多项式，从而其根是两两不同的。令$Z_P(L)=\{\alpha_1,\cdots,\alpha_d\}$为$P$在$L$中根的集合，其中，$d=\deg(P)$。根据分裂域的定义，我们还有$L=K(\alpha_1,\cdots,\alpha_d)$。

由于$P$是$K$-系数多项式，所以，$P^\sigma=P$。对任意的$\alpha\in Z_P(L)$，$P(\alpha)=0$，从而，
\[
0=P(\alpha)=P^{\sigma}(\alpha)=P(\sigma(\alpha)).
\]
所以，$\sigma(\alpha)\in Z_P(L)$也是根。据此，我们构造了映射
\[
\mathbf{Gal}(
  {L/K}
)\times Z_P(L)\longrightarrow Z_P(L), \ \ (\sigma,\alpha)\mapsto  \sigma(\alpha).
\]
由于对任意的$\sigma_1,\sigma_2\in \mathbf{Gal}(
  {L/K}
)$，我们显然有$\sigma_1\big(\sigma_2(\alpha)\big)=(\sigma_1\cdot \sigma_2)(\alpha)$，以上映射给出了Galois群$\mathbf{Gal}(
  {L/K}
)$在根的集合$Z_P(L)$上的作用$^{\mathbf{Gal}(
  {L/K}
)\curvearrowright} Z_P(L)$。根据群作用的定义，我们有群同态
\[
\mathbf{Gal}(
  {L/K}
) \longrightarrow \mathfrak{S}_{Z_P(L)}.
\]
由于$L=K(\alpha_1,\cdots,\alpha_d)=K\big(Z_P(L)\big)$，所以，
如果$\sigma \in {\rm Ker}\big(\mathbf{Gal}(
  {L/K}
) \rightarrow \mathfrak{S}_{Z_P(L)}\big)$，那么，$\sigma$固定每个$\alpha\in Z_P(L)$，从而，$\sigma$固定$L$，即$\sigma=1$。
这表明以上作用为忠实的，即
\[
\mathbf{Gal}(
  {L/K}
) \longrightarrow \mathfrak{S}_{Z_P(L)}
\]
是单同态。

::: theorem
$K$是域，$P\in K[X]$为可分的多项式，$L$是$P$的分裂域。那么，$\mathbf{Gal}(
  {L/K}
)$在根的集合$Z_P(L)$上的作用是忠实的：
\[
1\rightarrow \mathbf{Gal}(
  {L/K}
) \longrightarrow \mathfrak{S}_{Z_P(L)}.
\]
这个作用是传递的当且仅当$P$是不可约多项式。
:::

::: proof
只要研究传递性与可约性之间的关系。

如果$P$是可约的，那么，$P(X)=P_1(X)P_2(X)$，其中，$P_1,P_2\in K[X]$。
从而，$Z_P(L)=Z_{P_1}(L)\sqcup Z_{P_2}(L)$。我们注意到$Z_{P_1}(L)$和$ Z_{P_2}(L)$都不是空集。
对任意的$\alpha\in Z_{P_1}(L)$，很明显，$P_1(\sigma(\alpha))=P_1^\sigma(\alpha)=P_1(\alpha)=0$。
这表明，
\[
\mathbf{Gal}(
  {L/K}
)\times Z_{P_1}(L)\longrightarrow Z_{P_1}(L).
\]
对$Z_{P_2}(L)$，以上仍然成立。所以，$^{\mathbf{Gal}(
  {L/K}
)\curvearrowright} Z_P(L)$至少有$2$个轨道从而不是传递的。

如果$P$是不可约的，我们用反证法证明$^{\mathbf{Gal}(
  {L/K}
)\curvearrowright} Z_P(L)$是传递的：假设$\{\alpha_1,\cdots,\alpha_{d'}\}$是一个轨道并且$d'<d=\deg(P)$。
考虑多项式
\[
Q(X)=(X-\alpha_1)\cdots (X-\alpha_{d'}).
\]
那么，对任意的$\sigma \in \mathbf{Gal}(
  {L/K}
)$，我们有
\[
Q^\sigma(X)=(X-\sigma(\alpha_1))\cdots (X-\sigma(\alpha_{d'}))=Q(X).
\]
由于$Q^\sigma$是$\sigma$在$Q$的系数上的作用，根据$K=L^{\mathbf{Gal}(
  {L/K}
)}$，$Q(X)\in K[X]$。另外，由于$P(\alpha_1)=0$，所以，$P$是$\alpha_1$的极小多项式，而$Q(\alpha_1)=0$，从而，$P\mid Q$，但是$\deg(P)>\deg(Q)=d'$，矛盾。
:::

根据以上证明，我们还有如下的性质：

::: remark
假设$L$是可分多项式$P(X)\in K[X]$的分裂域并且$P$是$m$个不可约多项式的乘积，即
\[
P(X)=P_1(X) P_2(X)\cdots P_m(X),
\]
那么，$^{\mathbf{Gal}(
  {L/K}
)\curvearrowright} Z_P(L)$具有$m$个轨道并且每个轨道都对应着某个$P_i(X)$的根。
:::

::: example
$K$是域，$L$是多项式$P(X)\in K[X]$的分裂域，其中，
\[
P(X)=(X-x_1)^{n_1}\cdots (X-x_r)^{n_r}, \ \ x_i\in L.
\]
此时，$
  {L/K}
$是有限正规扩张，${\mathbf{Gal}}\left(
  {L/K}
\right)$是$
  {L/K}
$的$K$-自同构群（定义）。令
\[
Q(X)=(X-x_1)\cdots (X-x_r)=X^r+a_{r-1}X^{r-1}+\cdots+a_1X+a_0.
\]
并令$M=K(a_0,\cdots,a_{r-1})$。此时，$L$是$M$的分裂域并且$L=M(x_1,\cdots,x_r)$。
由于$x_1,\cdots,x_r$在$Q(X)$中没有重根，所以，在$M$上可分，从而，$
  {L/M}
$是可分的。据此，$
  {L/M}
$是Galois扩张。
\[
\begin{tikzcd}
 L \ar[d,dash, "\text{Galois}"'] \ar[dd,dash, bend left=100, "\text{正规}"]\\
 M \ar[d,dash] \\
K
 \end{tikzcd}
\]
我们自然有（作为子群）：
\[
{\mathbf{Gal}}\left(
  {L/M}
\right) \longrightarrow {\mathbf{Gal}}\left(
  {L/K}
\right).
\]
另外，对任意的$\sigma\in {\mathbf{Gal}}\left(
  {L/K}
\right)$，由于$a_i$是$x_1,\cdots,x_r$的对称多项式，所以，$
\sigma(a_i)=a_i$，从而，$\sigma\big|_{M}={\rm id}$，从而，上述映射是满的。据此，我们得到等式
\[
{\mathbf{Gal}}\left(
  {L/M}
\right) = {\mathbf{Gal}}\left(
  {L/K}
\right).
\]
:::

::: example
考虑域扩张$
  {{\mathbb{Q}}(\sqrt{2},\sqrt{3})/{\mathbb{Q}}}
$，我们来计算其Galois群$G=\mathbf{Gal}(
  {{\mathbb{Q}}(\sqrt{2},\sqrt{3})/{\mathbb{Q}}}
)$。

利用中间域
\[
\begin{tikzcd}
{\mathbb{Q}} \ar[r,dash] &{\mathbb{Q}}(\sqrt{2})  \ar[r,dash] &{\mathbb{Q}}(\sqrt{2},\sqrt{3}),
\end{tikzcd}
\]
我们知道该扩张次数为$4$，从而，$|G|=4$。据此，$G\simeq
  {{\mathbb{Z}}/4{\mathbb{Z}}}
$或者$G\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。

我们注意到${\mathbb{Q}}(\sqrt{2},\sqrt{3})$是$(X^2-2)(X^2-3)$在${\mathbb{Q}}$上的分裂域，
根据以上对于Galois群在根上作用的讨论，我们有单射
\[
G\hookrightarrow \mathfrak{S}_{\big\{\sqrt{2},-\sqrt{2},\sqrt{3},-\sqrt{3}\big\}}\simeq \mathfrak{S}_{4}
\]
并且该作用有$2$个轨道。从而，$G\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$（如果$G\simeq
  {{\mathbb{Z}}/4{\mathbb{Z}}}
$，由于其生成元对应着$4$-循环，那么它的作用只能有$1$个轨道）。在以上$\mathfrak{S}_{\big\{\sqrt{2},-\sqrt{2},\sqrt{3},-\sqrt{3}\big\}}\simeq \mathfrak{S}_{4}$的等同中，我们要求$1\leftrightarrow \sqrt{2}$、$2\leftrightarrow -\sqrt{2}$、$3\leftrightarrow \sqrt{3}$、$4\leftrightarrow -\sqrt{3}$。根据乘积$(X^2-2)(X^2-3)$，$1,2$和$3,4$分别为$G$作用的轨道。所以，作为$\mathfrak{S}_4$的子群，
我们有
\[
G = \langle (1,2), (3,4)\rangle.
\]
特别地，$G=\{1,\sigma, \tau,\sigma\cdot \tau\}$，其中，
\[
\begin{cases}
\sigma(a+b\sqrt{2}+c\sqrt{3}+d\sqrt{6})&=a-b\sqrt{2}+c\sqrt{3}-d\sqrt{6},\\
\tau(a+b\sqrt{2}+c\sqrt{3}+d\sqrt{6})&=a+b\sqrt{2}-c\sqrt{3}-d\sqrt{6},\\
(\sigma\cdot \tau)(a+b\sqrt{2}+c\sqrt{3}+d\sqrt{6})&=a-b\sqrt{2}-c\sqrt{3}+d\sqrt{6},\\
\end{cases}
\]
其中，$a,b,c,d\in {\mathbb{Q}}$。

$G$共有$3$个非平凡的[^2]子群，$H_1= \langle \sigma\rangle$，
$H_2= \langle \tau\rangle$和$H_3= \langle \sigma\cdot \tau\rangle$。
根据Galois对应定理，它们给出了如下的中间域：
\[
\begin{tikzcd}
 & &{\mathbb{Q}}(\sqrt{2},\sqrt{3})& &\\
L^{H_1}= {\mathbb{Q}}(\sqrt{3})  \ar[urr, dash]  &  & L^{H_3}= {\mathbb{Q}}(\sqrt{6}) \ar[u, dash] &   &L^{H_2}= {\mathbb{Q}}(\sqrt{2})   \ar[ull, dash]\\
 & &{\mathbb{Q}} \ar[urr, dash] \ar[ull, dash] \ar[u, dash] & &
  \end{tikzcd}
\]
:::

::: example [利用Galois群决定域扩张]
若${\rm Char}(K)\neq 2$，$
  {L/K}
$是$4$次Galois扩张并且${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。那么，存在$a,b\in L$，使得$L=K(\sqrt{a},\sqrt{b})$。

实际上，当${\rm Char}(K)\neq 2$时，对任意的$2$次扩张$
  {M/K}
$，必然存在$a\in K,x\in M$，使得$x^2=a$并且$M=K(x)$（此时，我们记$x=\sqrt{a}$，当然，$x$不唯一）。任选$y\in M-K$，由于$[M:K]=2$，$1,y,y^2$是$K$-线性相关的。从而，存在$b,c\in K$，
使得
\[
y^2+by+c=0 \ \ \Rightarrow \ \ \big(y+\frac{b}{2}\big)^2=\frac{b^2}{4}-c.
\]
以上，我们用到了${\rm Char}(K)\neq 2$。此时，$x=y+\frac{b}{2}, a=\frac{b^2}{4}-c$。

考虑${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$的两个不同的$2$阶子群$H_1,H_2$。根据Galois对应，$
  {L^{H_1}/K}
$和$
  {L^{H_2}/K}
$是两个不同的$2$次中间域。所以，存在$a,b\in L$，使得
\[
L^{H_1}=K(\sqrt{a}), \ \ L^{H_2}=K(\sqrt{b}).
\]
那么，$L\supset K(\sqrt{a},\sqrt{b})$。通过考虑次数易见，$L= K(\sqrt{a},\sqrt{b})$。
:::

::: example
令$j=e^{\frac{2}{3}\pi i}$，
我们考虑${\mathbb{Q}}$上不可约多项式$X^3-2$的分裂域${\mathbb{Q}}(\sqrt[3]{2},j)$。
由于$X^3-2$不可约，所以，
\[
G\hookrightarrow \mathfrak{S}_{3},
\]
其中，$G=\mathbf{Gal}({\mathbb{Q}}(\sqrt[3]{2},j))$。根据中间域
\[
\begin{tikzcd}
{\mathbb{Q}} \ar[r,dash] &{\mathbb{Q}}(\sqrt[3]{2})  \ar[r,dash] &{\mathbb{Q}}(\sqrt[3]{2},j),
\end{tikzcd}
\]
这是$6$次扩张，所以，$G\simeq \mathfrak{S}_3$。
令$1$对应着根$\sqrt[3]{2}$，$2$和$3$对应着$\sqrt[3]{2}j$和$\sqrt[3]{2}j^2$。
我们注意到取复共轭$z\mapsto \overline{z}$是$G$中的元，它对应着对换$(2,3)$。
我们还知道$\mathfrak{S}_3$有$4$个非平凡的子群：
\[
H_1=\langle (1,2) \rangle, \ H_2=\langle (1,3) \rangle, \ H_3=\langle (2,3) \rangle, \ \mathfrak{A}_3=\langle (1,2,3) \rangle.
\]
它们所对应的中间域为
\[
\begin{tikzcd}
 & &{\mathbb{Q}}(\sqrt[3]{2},j)& & & &\\
L^{H_1}= {\mathbb{Q}}(\sqrt[3]{2}j^2)  \ar[urr, dash]  &  & L^{H_2}= {\mathbb{Q}}(\sqrt[3]{2}j) \ar[u, dash] &   &L^{H_3}= {\mathbb{Q}}(\sqrt[3]{2})   \ar[ull, dash] & & L^{\mathfrak{A}_3}= {\mathbb{Q}}(j)  \ar[ullll, dash]\\
 & &{\mathbb{Q}} \ar[urr, dash] \ar[ull, dash] \ar[u, dash] \ar[urrrr, dash]& & & &
  \end{tikzcd}
\]
以上，${\mathfrak{A}_3}\lhd \mathfrak{S}_3$是正规子群，从而，$
  {{\mathbb{Q}}(j)/{\mathbb{Q}}}
$是正规扩张（显然）而其余中间域对于${\mathbb{Q}}$都不是正规扩张。
:::

::: example
令$L$为多项式$P(X)=X^5-6X+3$在$\mathbb{Q}$上的分裂域。
根据Eisenstein判别法（${\rm mod}~3$），$P(X)$是不可约多项式。
此时，我们没办法很快地计算$[L:{\mathbb{Q}}]$的具体值。

先具体分析$P(X)$根的分布。
首先，$P'(X)=5(X^4-\frac{6}{5})$在${\mathbb{R}}$上恰好有两个根$\pm\sqrt[4]{\frac{6}{5}}$。我们注意到
\[
P(\sqrt[4]{\frac{6}{5}})=-\frac{24}{5}\sqrt[4]{\frac{6}{5}}+3<0,\ \ P(-\sqrt[4]{\frac{6}{5}})=\frac{24}{5}\sqrt[4]{\frac{6}{5}}+3>0.
\]
从而，$P(X)$在${\mathbb{R}}$上共有$3$个根$x_1<x_2<x_3$，其余$2$个根是复根（非实数），
它们是$x_4$和$x_5=\overline{x_4}$。
特别地，我们知道复共轭映射$z\mapsto \overline{z}$是$G=\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$中的一个$2$-阶元，它对应着$G\hookrightarrow \mathfrak{S}_5$中的对换$(4,5)$。另外，由于$P(X)$不可约，所以，${\mathbb{Q}}(x_1)$是中间域并且其次数为$5$，所以，$5\mid |G|=[L:{\mathbb{Q}}]$。这表明，$G$中有$5$阶元，从而，$G$中有一个$5$-循环$(a,b,c,d,e)$。根据习题 @sec:method-to-generate-s-n 的第二问，一个对换和$5$-循环可以生成$\mathfrak{S}_5$，从而，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\simeq \mathfrak{S}_5$。特别地，$[L:{\mathbb{Q}}]=120$。

由于$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\simeq \mathfrak{S}_5$中有唯一的指标为$2$的子群$H$，它同构于$\mathfrak{A}_5$。那么，$L^H=E$是唯一的$2$次中间域。此时，$E={\mathbb{Q}}(\sqrt{d})$，这里，$d$是某个无平方因子的整数。我们现在计算$d$的数值。

根据 @formula:discriminant-of-Xn-aX-b，我们考虑多项式$P(X)=X^n+aX+b$，此时，$n=5,a=-6,b=3$。
令$\Delta=\prod_{i<j}(x_i-x_j)$为其判别式，则
\[
{\rm Disc}(P)\coloneqq\Delta^2=\prod_{i<j}(x_i-x_j)^2=(-1)^{\frac{n(n-1)}{2}}\prod_{i\neq j}(x_i-x_j)=n^nb^{n-1}+(-1)^{n-1}(n-1)^{n-1}a^n.
\]
由于$\Delta^2$是$P$的系数的多项式，所以$\Delta^2\in {\mathbb{Q}}$。
我们也可以使用Galois理论证明这一点：$\Delta^2$在$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$的作用下不变，从而$\Delta^2\in {\mathbb{Q}}$。利用上述公式，我们计算
\[
\Delta^2=5^5\times 3^{4}-4^4\times 6^5=3^4\times (-21451).
\]
根据定义，
$\Delta$在$\mathfrak{A}_5$作用下不变而$L^{\mathfrak{A}_5}$对应着${\mathbb{Q}}$的二次扩张$E$，其中，
$\Delta\in E$。特别地，$E={\mathbb{Q}}(\sqrt{-21451})$。
:::

::: proposition [域的复合] {@prop:galois-of-a-composite}
给定域扩张$
  {\Omega/K}
$以及中间域$L_1,L_2$，$L_1\cdot L_2$为它们的复合。如果$
  {L_1/K}
$是有限Galois扩张，那么，$
  {(L_1\cdot L_2)/L_2}
$也是有限Galois扩张。
\[
\begin{tikzcd}
 & &\Omega  \ar[d, dash] & &\\
 & &L_1\cdot L_2& &\\
L_1   \ar[urr, dash]  &  &  &   &L_2   \ar[ull, dash, dashed, "\text{有限 Galois}",swap]\\
 & & K \ar[ull, dash,"\text{有限 Galois}"] \ar[urr, dash] & &
  \end{tikzcd}
\]
通过在$L_1$上的限制，我们有单的群同态：
\[
{\rm Res}\colon {\mathbf{Gal}}\left(
  {(L_1\cdot L_2)/L_2}
\right)\longrightarrow{\mathbf{Gal}}\left(
  {L_1/K}
\right), \ \  \sigma \mapsto \sigma\big|_{L_1},
\]
并且其像为${\mathbf{Gal}}\left(
  {L_1/(L_1\cap L_2)}
\right)$。特别地，我们有${\mathbf{Gal}}\left(
  {(L_1\cdot L_2)/L_2}
\right)\simeq {\mathbf{Gal}}\left(
  {L_1/(L_1\cap L_2)}
\right)$。

进一步，我们还有$[L_1:K]=[L_1\cdot L_2:L_2][L_1\cap L_2:K]$。特别地，如果$
  {L_2/K}
$是有限扩张并且$L_1\cap L_2=K$，那么，$[L_1\cdot L_2:K]=[L_1:K][L_2:K]$。
:::

::: proof
由于$L_1$在$K$（从而在$L_2$）上是可分的，所以，$L_1\cdot L_2=L_2(L_1)$在$L_2$上也是可分的；
由于$L_1$在$K$上是正规的，那么，
$L_1$是$K$通过添加一族$K$-系数多项式$\{P_i\}_{i\in I}$的所有根而得到的，
所以$L_1\cdot L_2$是$L_2$通过添加$\{P_i\}_{i\in I}$的所有根而得到，从而，$
  {(L_1\cdot L_2)/L_2}
$是正规的。以上证明了$
  {(L_1\cdot L_2)/L_2}
$是Galois扩张（显然是有限的）。

对任意的$\sigma\in {\mathbf{Gal}}\left(
  {(L_1\cdot L_2)/L_2}
\right)$，它的限制给出了
\[
\sigma\big|_{L_1}\colon L_1\longrightarrow L_1\cdot L_2.
\]
由于$
  {L_1/K}
$是正规的，从而，
\[
\sigma\big|_{L_1}\colon L_1\longrightarrow L_1.
\]
这就定义出
\[
{\rm Res}\colon {\mathbf{Gal}}\left(
  {(L_1\cdot L_2)/L_2}
\right)\longrightarrow{\mathbf{Gal}}\left(
  {L_1/K}
\right).
\]
另外，根据上面的推理，如果$\sigma\big|_{L_1}={\rm id}_{L_1}$，
它在$\{P_i\}_{i\in I}$的所有根上的作用都是不动的，从而，
在$L_2(L_1)=L_1\cdot L_2$上的作用也是不动的。这就表明上述限制映射${\rm Res}$是单射。

令$H\coloneqq{\rm Im}({\rm Res})<{\mathbf{Gal}}\left(
  {L_1/K}
\right)$，根据Galois对应，只要证明$L_1^H=L_1\cap L_2$即可。由于${\rm Res}$是单射，对任意的$x\in L_1$，$x\in L_1^H$等价于$x$作为$L_1\cdot L_2$中的元素在${\mathbf{Gal}}\left(
  {(L_1\cdot L_2)/L_2}
\right)$作用下不变，即等价于$x \in L_2$。据此，$H={\mathbf{Gal}}\left(
  {L_1/(L_1\cap L_2)}
\right)$。

其余的结论都是简单的推论，我们略去证明。
:::

::: remark
如果$
  {L_1/K}
$不是Galois扩张，以上命题的结论不成立。实际上，令$j=e^{\frac{2}{3}\pi i}$，我们考虑如下域的复合：
\[
\begin{tikzcd}
 & &L_1\cdot L_2 ={\mathbb{Q}}(\sqrt[3]{2},j)& & & \\
L_1= {\mathbb{Q}}(\sqrt[3]{2})  \ar[urr, dash]  &  &  &   &L_2= {\mathbb{Q}}(j\sqrt[3]{2})   \ar[ull, dash] &\\
 & &K={\mathbb{Q}} \ar[urr, dash] \ar[ull, dash]  & & &
  \end{tikzcd}
\]
那么，$[L_1:K]=3$而$[L_1\cdot L_2:L_2]=2$，所以，$[L_1\cdot L_2:L_2]$不整除$[L_1:K]$。
:::

::: exercise
给定域扩张$
  {\Omega/K}
$以及中间域$L_1,L_2$，$L_1\cdot L_2$为它们的复合，假设$
  {L_1/K}
$是有限正规扩张而$
  {L_2/K}
$是有限扩张。证明，如果$
  {L_1/K}
$或$
  {L_2/K}
$是可分的，那么，$[L_1\cdot L_2:L_1]=[L_1:L_1\cap L_2]$。
:::

::: example
$K$为$X^7-8$在${\mathbb{Q}}$上的分裂域，我们来计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

$X^7-8$在${\mathbb{Q}}$上不可约。
令$\xi=e^{\frac{2\pi}{7}i}$为$7$次单位根，$\alpha_0=8^{\frac{1}{7}}$。
容易看出，$\xi,\alpha_0\in K$并且$K={\mathbb{Q}}(\alpha_0,\xi)$，从而，
\[
\begin{tikzcd}
  &{\mathbb{Q}}(\alpha_0,\xi)&  \\
{\mathbb{Q}}(\xi)  \ar[ur, "7", dash]  \ar[dr, dash, "\text{Galois}~ 6 ", swap]   &  &   {\mathbb{Q}}(\alpha_0)   \ar[ul, "6", dash,swap]  \ar[dl, "7", dash] \\
  &{\mathbb{Q}} &
  \end{tikzcd}
\]
从而，$[K:{\mathbb{Q}}]=42$。中间域${\mathbb{Q}}(\xi)$对应着一个$7$阶子群${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}(\xi)}
\right)$，从而，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$中有一个$7$阶元$\sigma_1$；中间域${\mathbb{Q}}(\alpha_0)$对应着一个$6$阶子群，根据 @prop:galois-of-a-composite，我们有${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}(\alpha_0)}
\right)\simeq {\mathbf{Gal}}\left(
  {{\mathbb{Q}}(\xi)/{\mathbb{Q}}}
\right)=
  {{\mathbb{Z}}/6{\mathbb{Z}}}
$，从而，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$中有一个$6$阶元$\sigma_2$。所以，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)=\langle \sigma_1,\sigma_2\rangle$是$42$阶循环群，实际上，
\[
{\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right) = {\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}(\xi)}
\right)\times {\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}(\alpha_0)}
\right).
\]
:::

## 有限Galois扩张的正规基

::: proposition
假设域$K$中有无限多个元素，$
  {L/K}
$是$n$-次Galois扩张并且${\mathbf{Gal}}\left(
  {L/K}
\right)=\{\sigma_1,\cdots,\sigma_n\}$。那么，对任意的非零多项式$P\in K[X_1,\cdots,X_n]$，存在$x\in L$，
使得
\[
P\big(\sigma_1(x),\sigma_2(x),\cdots,\sigma_n(x)\big)\neq 0.
\]
:::

::: remark
由于$|K|=\infty$，则对任意非零多项式$P\in K[X_1,\cdots,X_n]$，存在$x_1,\cdots,x_n\in K$，
使得$P(x_1,\cdots,x_n)\neq 0$。

我们可以对$n$归纳来证明这个性质。
当$n=1$时，使得$P(x_1)=0$的$x_1$不超过$\deg(P)$个，所以，存在$x\in K$，使得$P(x)\neq 0$。
假设当$n-1$时，命题成立。
如果$P(X_1,\cdots,X_n)$不含$X_n$变量，则根据归纳假设$P$在某个位置处不为$0$。否则，我们可以把$P$写成
\[
P(X_1,\cdots,X_n)=P_d(X_1,\cdots,X_{n-1})X_n^d+P_{d-1}(X_1,\cdots,X_{n-1})X_n^{d-1}+\cdots+P_0(X_1,\cdots,X_{n-1})
\]
并且$P_d(X_1,\cdots,X_{n-1})$非零。
根据归纳假设，先选$x_1,\cdots,x_{n-1}$，使得$P_d(x_1,\cdots,x_{n-1})\neq 0$。
此时，$P(x_1,\cdots,x_{n-1},X_n)$是关于$X_n$的非零多项式，由$n=1$的结论，
存在$x_n$使得$P(x_1,\cdots,x_{n-1},x_n)\neq 0$。
:::

::: proof [命题的证明]
任选$
  {L/K}
$的一组基$e_1,\cdots,e_n$。对任意$x\in L$，它可以被写成
\[
x=x_1e_1+x_2e_2+\cdots+x_ne_n,
\]
其中，$x_i\in K$并且
\[
P\big(\sigma_1(x),\sigma_2(x),\cdots,\sigma_n(x)\big) =  0.
\]
从而，
\[
P\big(\sum_{i=1}^n x_i \sigma_1(e_i) ,\cdots,\sum_{j=1}^n x_j \sigma_n(e_j)\big) =0.
\]
令
\[
Q(X_1,\cdots,X_n)=P\big(\sum_{i=1}^n X_i \sigma_1(e_i) ,\cdots,\sum_{j=1}^n X_j \sigma_n(e_j)\big).
\]
根据前面注记，$Q(X_1,\cdots,X_n)=0$。根据 @rem:galois-on-basis-is-an-inverse-matrix，
给定有限Galois扩张$
  {L/K}
$，矩阵$\big(\sigma_i(e_j)\big)_{1\leqslant i,j\leqslant n}$可逆，令$(A_{ij})\in \mathbf{GL}(n;L)$为其逆。
所以，
\[
P(X_1,\cdots,X_n)=Q\big(\sum_{i=1}^n A_{1i}X_i ,\cdots,\sum_{j=1}^n A_{nj} X_j\big)=0.
\]
所以$P$为零。
:::

::: remark
若$K$是有限域，则存在非零多项式$P(X_1,\cdots,X_n)$，使得对任意$x_1,\cdots, x_n\in K$，
有$P(x_1,\cdots,x_n)=0$。比如说
\[
P(X_1,\cdots,X_n)=\big(X_1^q-X_1\big)\big(X_2^q-X_2\big)\cdots \big(X_n^q-X_n\big),
\]
其中，$q=|K|$。
:::

::: theorem [有限Galois扩张的正规基定理]
$
  {L/K}
$是有限Galois扩张。那么，存在$x\in L$，使得
$\big\{\sigma(x)\bigm|\sigma \in {\mathbf{Gal}}\left(
  {L/K}
\right)\big\}$是$L$的一组基（作为$K$-线性空间）。我们把这种基称作是$
  {L/K}
$的**正规基**。
:::

::: proof
假设$K$中元素个数是无限的，考虑多项式环$K\left[X_\sigma\bigm|\sigma \in {\mathbf{Gal}}\left(
  {L/K}
\right)\right]=K[\sigma_1,\cdots,\sigma_n]$中的多项式
\[
P(X_{\sigma_1},\cdots,X_{\sigma_n})=\det\left(X_{\sigma_i^{-1}\cdot \sigma_j}\right)_{1\leqslant i,j\leqslant n}.
\]
不妨设$\sigma_1={\rm id}$，那么，$P(X_{\sigma_1},\cdots,X_{\sigma_n})=1$（它对应的矩阵是单位矩阵）。
根据上一命题，存在$x\in L$，使得
\[
P({\sigma_1}(x),\cdots,{\sigma_n}(x))=\pm \det\left(X_{\sigma_i^{-1}\cdot \sigma_j}\right)_{1\leqslant i,j\leqslant n}\neq 0.
\]
我们现在说明$\{\sigma(x_1),\cdots,\sigma(x_n)\}$是$L$的一组基：假设$a_1,\cdots,a_n\in K$，使得
\[
a_1 \sigma_1(x)+a_2 \sigma_2(x)+\cdots+a_n \sigma_n(x)=0,
\]
那么，对任意的$i=1,\cdots, n$，我们有
\[
\sigma_i^{-1}\left(\sum_{j=1}^na_j \sigma_j(x)\right)=0.
\]
即
\[
\sum_{j=1}^n (\sigma_i^{-1}\cdot \sigma_j)(x)a_j=0.
\]
由于$\det\left(X_{\sigma_i^{-1}\cdot \sigma_j}\right)_{1\leqslant i,j\leqslant n}\neq 0$，
我们有$a_1=\cdots=a_n=0$，这说明$\{\sigma(x_1),\cdots,\sigma(x_n)\}$线性无关，从而是$L$的一组基。
:::

::: remark
我们将利用Artin的 @lem:independence-of-characters 来证明有限域的情形。
:::

## 有限域

$K$是有限域，${\rm Char}(K)=p$，我们有自然的域同态：
\[
{\mathbb{F}_p} \longrightarrow K.
\]
据此，我们知道$|K|=p^n$，其中，$n=[K:{\mathbb{F}_p}]$。

::: theorem
$p$是素数。对任意的$n\geqslant 1$，存在有$p^n$个元素的有限域$K$。
进一步，具有$p^n$个元素的有限域在同构意义下是唯一的，它们都同构于$X^{p^n}-X$的分裂域。
:::

::: remark
假设$q$为素数的幂，我们用将${\mathbb{F}}_q$表示具有$q$个元素的有限域。
:::

::: proof
$K$显然是${\mathbb{F}}_p$的代数扩张，我们不妨假设$K\subset \overline{{\mathbb{F}}_p}$。
如果这样的$K$存在，由于$K^\times$是循环群，从而，对任意的$x\in K^\times$，$x^{p^n-1}=1$。
所以，对任意的$x\in K$，我们有
\[
x^{p^n}-x=0.
\]
所以，$K$是$X^{p^n}-X$的分裂域（因为$X^{p^n}-X$在$\overline{{\mathbb{F}}_p}$中恰好有$p^n=|K|$个根，
它们都在$K$中），从而唯一性部分是显然的。

为了证明存在性，根据上面的讨论，我们定义
\[
K\coloneqq\big\{x\in  \overline{{\mathbb{F}}_p}\bigm| x^{p^n}-x=0\big\}.
\]
因为$|K|=p^n$，只要证明$K$是域即可。实际上，对任意的$x,y\in K$，我们有
\[
(x+y)^{p^n}=x^{p^n}+y^{p^n}=x+y, \  (x\cdot y)^{p^n}=x\cdot y, \  (x^{-1})^{p^n}=x^{-1}.
\]
命题得证。
:::

假设$q=p^n$，考虑域扩张$
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
$。由于${\mathbb{F}}_p$是完美域，这是可分扩张；由于${\mathbb{F}}_q$是$X^{p^n}-X$在${\mathbb{F}}_p$上的分裂域，这是正规扩张。所以，$
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
$是Galois扩张。

::: theorem
对于$q=p^n$，$\mathbf{Gal}(
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
)$是$n$阶循环群并且其生成元为
\[
{\rm Frob}\colon {\mathbb{F}}_q\rightarrow {\mathbb{F}}_q, \ \  x\mapsto x^p.
\]
对任意的$m\mid n$，$
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
$具有唯一的中间域${\mathbb{F}}_{p^m}$（它是$X^{p^m}-X$的分裂域）并且它们给出了所有的中间域。进一步，$\mathbf{Gal}(
  {{\mathbb{F}}_{p^n}/{\mathbb{F}}_{p^m}}
)$是$\frac{n}{m}$阶的循环群，它由${\rm Frob}^m$生成。
:::

::: proof
由于$[{\mathbb{F}}_q:{\mathbb{F}}_p]=n$，所以，$\mathbf{Gal}(
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
)$有$n$个元素。我们自然有${\rm Frob}\in \mathbf{Gal}(
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
)$。另外，${\rm Frob}^n=x^{p^n}=x^q$，对于循环群的生成元$\xi\in {\mathbb{F}}_q^\times$，${\rm Frob}^k(\xi)=\xi$当且仅当$n-1\mid k-1$，从而，${\rm Frob}^k\neq 1$，其中，$1\leqslant k\leqslant n-1$。据此，$\mathbf{Gal}(
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
)=\{{\rm Frob}^k\mid0\leqslant k\leqslant n-1\}$，所以，
\[
\mathbf{Gal}(
  {{\mathbb{F}}_q/{\mathbb{F}}_p}
)=\langle {\rm Frob}\rangle.
\]
对任意的$m\mid n$，$X^{p^m}-X$的分裂域给出了定理中所要求的中间域。
由于$n$阶循环群的子群是$m$阶循环群，其中，$m\mid n$，并且$m$阶子群是唯一的，所以，
Galois对应定理保证了上述给出了所有的中间域。
由于$ {\rm Frob}^m$固定${\mathbb{F}}_{p^m}$中的所有元素并且其阶为$\frac{n}{m}$，所以
\[
\mathbf{Gal}(
  {{\mathbb{F}}_{p^n}/{\mathbb{F}}_{p^m}}
)\simeq \langle {\rm Frob}^m\rangle.
\]
这就完成了证明。
:::

::: remark
对任意的$p$的幂$q$，$\mathbf{Gal}(
  {{\mathbb{F}}_{q^l}/{\mathbb{F}}_{q}}
)$是$l$阶循环群。
:::

::: example {@exam:N-is-surjective-for-finite-field}
$K$是有限域（特征为$p$），$
  {L/K}
$是有限扩张，则$ {\rm N}_{_{
  {L/K}
}}\colon L^\times \rightarrow K^\times$是满射。

假设$|L|=q^l, |K|=q$，$x$为$L^\times$（循环群）的生成元。此时，$\sigma\in {\mathbf{Gal}}\left(
  {L/K}
\right)$的作用为
\[
\sigma(x)=x^q.
\]
所以，
\[
{\rm N}_{_{
  {L/K}
}}(x)=\prod_{j=0}^{l-1}\sigma^j(x)=x^{1+q+\cdots+q^{l-1}}=x^{\frac{q^l-1}{q-1}}.
\]
在循环群$L^\times$中，$x$的阶为$q^l-1$，上式表明${\rm N}_{_{
  {L/K}
}}(x)$阶为$q-1=|K^\times|$。所以，${\rm N}_{_{
  {L/K}
}}(x)$为$K^\times$的生成元：首先，注意到${\rm N}_{_{
  {L/K}
}}(x)$是$X^q-X$的根；另外，$K$中的每个元素都是该多项式的根并且这个多项式一共有$q$个根。所以，${\rm N}_{_{
  {L/K}
}}(x)\in K$。
:::

## 分圆扩张

对任意的域$K$和正整数$n\geqslant 1$，定义$K$中$n$-次单位根的集合：
\[
\mu_n(K)=\big\{x\in K\bigm|x^n-1=0\big\}.
\]
由于$n$次多项式至多有$n$个（不同的）根，所以，$|\mu_n(K)|\leqslant n$。

::: remark
当${\rm Char}(K)=p$时，令$n=mp^k$，其中，$p\nmid m$。
此时，$x^n-1=0$等价于$(x^m-1)^{p^k}=0$，从而，$\mu_n(K)=\mu_m(K)$。
:::

::: remark [循环群结构]
对任意的$\xi,\xi'\in \mu_n(K)$，显然有$\xi^{-1},\xi\cdot \xi'\in \mu_n(K)$，
所以$\mu_n(K)$是$K^\times$的子群。

- 由于$K^\times$的有限子群为循环群，所以$\mu_n(K)$是循环群。
  我们称$\mu_n(K)$的生成元为 **$K$中的$n$-次本原单位根**。

- 如果$n_1\mid n_2$，$\mu_{n_1}(K) <\mu_{n_2}(K)$是子群。

- $|\mu_n(K)|\bigm| n$，这是因为对任意的$x\in \mu_n(K)$，总有$x^n=1$。

:::

现在研究**分圆多项式**。对任意的$n\geqslant 1$，令
\[
\Phi_n(X)\coloneqq\prod_{\xi\in \mu_n(\overline{{\mathbb{Q}}}),\atop \text{$\xi$ 本原}} (X-\xi).
\]
考虑$\mathbf{Gal}(
  {\overline{{\mathbb{Q}}}/{\mathbb{Q}}}
)$对$\Phi_n$的作用。每一个$\sigma\in \mathbf{Gal}(
  {\overline{{\mathbb{Q}}}/{\mathbb{Q}}}
)$把$n$-次本原根映射成$n$-次本原根，从而，$\Phi_n^\sigma=\Phi_n$。据此，$\Phi_n(X)\in {\mathbb{Q}}[X]$。另外，将$n$-次单位根根据其阶分类，
我们得到如下公式
\[
X^n-1=\prod_{d\mid n}\Phi_d(X).
\]
我们回忆Gauss引理，对唯一分解整环$A$及其分式域$K={\rm Frac}(A)$，若在$K[X]$中有$P(X)=P_1(X)P_2(X)$，
其中，$\deg(P_i)\geqslant 1$，则存在$k\in K^{\times}$，使得$kP_1(X),k^{-1}P_2(X)\in A[X]$。
由于上式中$X^n-1$以及分圆多项式$\Phi_d$均为首一多项式，所以，$\Phi_n(X)\in {\mathbb{Z}}[X]$。

::: remark
分圆多项式有一系列有趣的性质，我们用习题的形式呈现给大家：

- 假设$n\geqslant 2$。证明，$\Phi_n(X)=X^{\deg(\Phi_n)}\Phi_n(X^{-1})$。

- 证明，$\Phi_{2n}(X)=\begin{cases}
\Phi_{n}(-X),  \ 2\nmid n;\\
\Phi_{n}(X^2),  \ 2\mid n.
\end{cases}$。

- 证明，若$p$是素数且$p\nmid n$，则$\Phi_{pn}(X)=\frac{\Phi_n(X^p)}{\Phi_n(X)}$。

- $n=p_1^{r_1}p_2^{r_2}\cdots p_k^{r_k}$是$n$的素因数分解。
  证明，$\Phi_{n}(X)=\Phi_{p_1\cdots p_k}(X^{p_1^{r_1-1}p_2^{r_2-1}\cdots p_k^{r_k-1}})$。

:::

通过研究所谓的分圆域，我们可以证明分圆多项式$\Phi_n(X)$是不可约多项式。

::: definition [分圆域]
$K$是域，$n\geqslant 1$，$\xi$是$\overline{K}$中的一个$n$-次本原单位根；当${\rm Char}(K)=p$时，
还进一步要求$(p,n)=1$。
我们称$K(\xi)\subset \overline{K}$是$K$的 **$n$-次分圆域**或者 **$n$-次分圆扩张**。
:::

::: remark
$K(\xi)$不依赖于$n$-次本原单位根的选取，因为$K(\xi)=K(\mu_n(\overline{K}))$。
:::

对任意的域$K$，存在唯一的环同态$\iota\colon\mathbb{Z}\rightarrow K$。
通过对系数作用，我们可以将每个${\mathbb{Z}}[X]$中的多项式$P(X)$视作$K[X]$中的多项式$P^K(X)$，
即对于$P(X)=\displaystyle \sum_{i=0}^d a_i X^i$，
定义$P^K(X)=\displaystyle \sum_{i=0}^d \iota(a_i) X^i$。特别地，我们得到$\Phi_n^{K}(X)\in K[X]$。

::: theorem
$
  {K(\xi)/K}
$是$K$的$n$-次分圆扩张[^3]，$P(X)$是$\xi$在$K$上的极小多项式。那么，$
  {K(\xi)/K}
$是Galois扩张，$P(X)\mid \Phi_n^{K}(X)$并且如下群同态是单射：
\[
\mathbf{Gal}(
  {K(\xi)/K}
)\longrightarrow \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times, \ \ \sigma \mapsto k_\sigma,
\]
其中，$\sigma(\xi)=\xi^{k_\sigma}$。
:::

::: proof
$K(\xi)$是$X^n-1$的分裂域，从而$
  {K(\xi)/K}
$是正规扩张；$\big(X^n-1\big)'=nX^{n-1}\neq 0$（因为当${\rm Char}(K)=p$时，$(p,n)=1$），所以$X^n-1$是可分的多项式，从而$
  {K(\xi)/K}
$是可分扩张。这就说明了$
  {K(\xi)/K}
$是Galois扩张。为了证明$P(X)\mid \Phi_n^{K}(X)$，只要说明$\Phi_n^{K}(\xi)=0$即可。实际上，我们在$K[X]$中考虑分解：
\[
X^n-1=\prod_{d\mid n}\Phi^K_d(X).
\]
令$X=\xi$，从而，存在$d\mid n$，使得$\Phi^K_d(\xi)=0$。
我们现在说明$d=n$：如若不然，$\Phi^K_d(\xi)=0$，其中，$d<n$，那么，
$\xi^d=1$（因为$X^d-1=\prod_{d'\mid d}\Phi^K_{d'}(X)$），这与$\xi$是本原的矛盾（在$\overline{K}$中，
由于$(p,n)=1$，我们恰有$n$个根）。

由于$\sigma\in \mathbf{Gal}(
  {K(\xi)/K}
)$作用在$\Phi_n(X)$根的集合上，所以存在$k_\sigma$，使得$\sigma(\xi)=\xi^{k_\sigma}$，其中，$(k_\sigma,n)=1$。此时，$\sigma\mapsto k_\sigma$显然是群同态。这就定义出定理中的群同态。由于$K(\xi)$是单扩张，这个群同态是单的。
:::

::: remark
$|\mathbf{Gal}(
  {K(\xi)/K}
)|=[K(\xi):K]$整除$\varphi(n)$。
:::

::: example
我们证明$n$-次分圆扩张$
  {{\mathbb{Q}}(e^{\frac{2\pi i}{n}})/{\mathbb{Q}}}
$的次数恰好是$\varphi(n)$，从而$\Phi_n(X)$是不可约的。

实际上，只要证明$\mathbf{Gal}\left(
  {{\mathbb{Q}}(e^{\frac{2\pi i}{n}})/{\mathbb{Q}}}
\right)\rightarrow \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times$是满射即可，因为每个本原根$\xi'$恰好等于某个$\sigma(\xi)$，从而$
  {{\mathbb{Q}}(e^{\frac{2\pi i}{n}})/{\mathbb{Q}}}
$在$\Phi_n(X)$的根上的作用是传递的，所以$\Phi_n(X)$不可约。

为了说明$\mathbf{Gal}(
  {K(\xi)/K}
)\rightarrow \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times$是满射，这要证明对任意的$l\in \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times$，存在$\sigma\in \mathbf{Gal}(
  {K(\xi)/K}
)$，使得$\sigma(\xi)=\xi^l$。我们只要对$l$是素数证明即可（$(l,n)=1$）。令$P(X)$为$\xi$在${\mathbb{Q}}$上的极小多项式，$Q(X)$为$\xi^l$在${\mathbb{Q}}$上的极小多项式，只要证明$Q(X)=P(X)$即可，因为此时$P\mid \Phi_n$，$\mathbf{Gal}(
  {K(\xi)/K}
)$在这个不可约因子的根的作用上是传递的，从而有$\sigma$，使得$\sigma(\xi)=\xi^l$。

我们用反证法，假设$P\neq Q$。

首先，$Q(\xi^l)=0$，从而，$P(X) \mid Q(X^l)$，所以，存在$A(X)\in {\mathbb{Z}}[X]$（Gauss引理），使得
\[
Q(X^l)=P(X)A(X).
\]
其次，$\xi^l$是$X^n-1$的根，所以，$Q(X)\mid X^n-1$。
由于$P$和$Q$均为不可约的并且$P\neq Q$，所以，$P$和$Q$互素。
根据Gauss引理，我们有如下在${\mathbb{Z}}[X]$中的等式：
\[
X^n-1=P(X)Q(X)B(X).
\]
在${\mathbb{F}}_l[X]$中考虑第一个等式，我们有
\[
Q(X)^l=P(X)A(X) \ \   \mod l.
\]
令$R(X)$为$P(X)$在${\mathbb{F}}_l[X]$中的一个不可约因子，那么，$R\mid Q^l$，从而，$R\mid Q$。
另外，在第二个等式中，$R^2$整除$P\cdot Q$，从而，$R^2\mid X^n-1$，
这与$X^n-1$在${\mathbb{F}}_l[X]$中是可分的矛盾。
:::

::: example
我们考虑有限域${\mathbb{F}}_q$，其中，$q=p^l$。
现在来计算${\mathbb{F}}_q$上的$n$-次分圆域${\mathbb{F}}_q(\xi)$的次数
$[{\mathbb{F}}_q(\xi):{\mathbb{F}}_q]$。根据有限域的理论，$\mathbf{Gal}(
  {{\mathbb{F}}_q(\xi)/{\mathbb{F}}_q}
)$是循环群并且
\[
\mathbf{Gal}(
  {{\mathbb{F}}_q(\xi)/{\mathbb{F}}_q}
) =\big\langle \sigma\colon x\mapsto x^q \big\rangle.
\]
从而，${\rm Im}\big(\mathbf{Gal}(
  {{\mathbb{F}}_q(\xi)/{\mathbb{F}}_q}
)\rightarrow \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times\big)$由$\sigma$的像生成，它把$\xi$映射成$\xi^q$。从而，$\sigma$在$ \left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times$中恰好是$q \bmod n $。特别地，$[{\mathbb{F}}_q(\xi):{\mathbb{F}}_q]$恰好是$q$在$\left(
  {\mathbb{Z}/n{\mathbb{Z}}}
\right)^\times$的阶。
:::

::: example [Galois反问题]
对任意的有限交换群$A$，存在数域[^4]$
  {K/{\mathbb{Q}}}
$，使得$\mathbf{Gal}(
  {K/{\mathbb{Q}}}
)\simeq A$。特别地，任意的有限交换群$A$都可以实现为$\mathbf{Gal}(
  {\overline{{\mathbb{Q}}}/{\mathbb{Q}}}
)$的商群。

根据有限生成交换群的分类定理，存在$d_1,\cdots,d_s\in \mathbb{Z}_{\geqslant 2}$，使得
\[
A\simeq \prod_{i=1}^s
{{\mathbb{Z}}/d_i{\mathbb{Z}}}
\]
并且$d_1 \mid d_2,d_2\mid d_3,\cdots,d_{s-1}\mid d_s$。
根据Dirichlet定理[^5]，对每个$i=1,\cdots,s$，我们选取素数$p_i$，使得$p_i \equiv 1 \mod d_i$。
令$n=p_1 p_2\cdots p_s$，我们考虑${\mathbb{Q}}$上的$n$-次分圆域$
  {{\mathbb{Q}}(\xi)/{\mathbb{Q}}}
$，其中$\xi$为$n$-次本原单位根，那么，
\[
\mathbf{Gal}(
  {{\mathbb{Q}}(\xi)/{\mathbb{Q}}}
)\simeq \left(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\right)^\times \simeq \prod_{i=1}^s\left(
  {{\mathbb{Z}}/p_i{\mathbb{Z}}}
\right)^\times \simeq \prod_{i=1}^s
  {{\mathbb{Z}}/(p_i-1){\mathbb{Z}}}
.
\]
根据$d_i\mid p_i-1$，$
  {{\mathbb{Z}}/d_i{\mathbb{Z}}}
$是$
  {{\mathbb{Z}}/(p_i-1){\mathbb{Z}}}
$的商群：
\[
1\rightarrow
  {d_i{\mathbb{Z}}/(p_i-1){\mathbb{Z}}}
\rightarrow
  {{\mathbb{Z}}/(p_i-1){\mathbb{Z}}}
\rightarrow
  {{\mathbb{Z}}/d_i{\mathbb{Z}}}
\rightarrow 1.
\]
从而，$A$是$\mathbf{Gal}(
  {{\mathbb{Q}}(\xi)/{\mathbb{Q}}}
)$的商群，即有$H\simeq \prod_{i=1}^s
  {d_i{\mathbb{Z}}/(p_i-1){\mathbb{Z}}}
$，使得$
  {\mathbf{Gal}({{\mathbb{Q}}(\xi)/{\mathbb{Q}}})/H}
\simeq A$。此时，根据Galois对应，$K={\mathbb{Q}}(\xi)^H$的Galois群为$A$。
:::

## Hilbert 90与循环扩张的Kummer理论

给定Galois扩张$
  {L/K}
$。若$\mathbf{Gal}(
  {L/K}
)$是循环群，则称$
  {L/K}
$是**循环扩张**；若$\mathbf{Gal}(
  {L/K}
)$是交换群，则称$
  {L/K}
$是**Abel扩张**。

::: lemma [特征的线性无关性，E. Artin] {@lem:independence-of-characters}
$G$是群，$K$是域，${\rm Funt}(G,K)$是$G$上$K$-值函数的$K$-线性空间，
$\chi_1,\cdots,\chi_k\in {\rm Hom}(G,K^\times)$是群同态（被称作是特征）。
那么，$\chi_1,\cdots,\chi_k$在${\rm Funt}(G,K)$中线性无关。
:::

::: proof
对$k$进行归纳，其中$k=1$是显然的。假设命题对不超过$k$个特征成立，现在考虑如下的线性关系：
\[
a_1\chi_1(g)+\cdots+a_{k}\chi_k(g)+a_{k+1}\chi_{k+1}(g)=0,\ \ \forall g\in G,
\]
其中，$a_1,\cdots,a_{k+1}\in K$。
由于$\chi_k\neq\chi_{k+1}$，我们选取$h\in G$，使得$\chi_k(h)\neq\chi_{k+1}(h)$。
在上述线性关系中把$g$替换成$gh$，利用$\chi_i$均为群同态，我们得到
\[
a_1\chi_1(h)\chi_1(g)+\cdots+a_{k}\chi_{k}(h)\chi_k(g)+a_{k+1}\chi_{k+1}(h)\chi_{k+1}(g)=0,\ \ \forall g\in G.
\]
对前一个线性关系乘以$\chi_{k}(h)$并与上面这个等式相减，我们得到
\[
a_1(\chi_1(h)-\chi_{k}(h))\chi_1(g)+\cdots+a_{k-1}(\chi_{k-1}(h)-\chi_{k}(h))\chi_{k-1}(g)+a_{k+1}(\chi_{k+1}(h)-\chi_{k}(h))\chi_{k+1}(g)=0,\ \ \forall g\in G.
\]
利用归纳假设，这说明$a_{k+1}(\chi_{k+1}(h)-\chi_{k}(h))=0$，从而，$a_{k+1}=0$。
此时，我们又回到了$k$个特征的情形，利用归纳假设就可以完成证明。
:::

::: remark {@rem:galois-on-basis-is-an-inverse-matrix}
给定有限Galois扩张$
  {L/K}
$，令${\mathbf{Gal}}\left(
  {L/K}
\right)=\{g_1,\cdots,g_n\}$，那么，对任意$
  {L/K}
$的基$e_1,\cdots,e_n\in L$，矩阵$\big(g_i(e_j)\big)_{1\leqslant i,j\leqslant n}\in \mathbf{GL}(n;L)$。

如若不然，则存在不全为$0$的$c_1,\cdots,c_n \in L$，使得对任意的$1\leqslant j\leqslant n$，有
\[
c_1g_1(e_j)+c_2g_2(e_j)+\cdots+c_ng_n(e_j)=0.
\]
由于$e_1,\cdots,e_n\in L$是$
  {L/K}
$的基，所以对任意的$x\in L$，由
\[
c_1g_1(x)+c_2g_2(x)+\cdots+c_ng_n(x)=0.
\]
将每个$g_i$视作是$L^\times$上的特征$g_i\colon L^\times \rightarrow L^\times$，则它们线性相关，
这与 @lem:independence-of-characters 矛盾。
:::

::: example
给定有限Galois扩张$
  {L/K}
$，令${\mathbf{Gal}}\left(
  {L/K}
\right)=\{g_1,\cdots,g_n\}$，再任选$
  {L/K}
$的基$x_1,\cdots,x_n\in L$，其中$x_1=1$。

考虑$n$-维$L$-线性空间$V$并假设$G$可以线性作用在$V$上并且对任意的$g\in \mathbf{Gal}(
  {L/K}
)$和$v,w\in V, \lambda \in L$，有
\[
g(v+w)=g(v)+g(w), \ \ g(\lambda \cdot v)=g(\lambda)g(v).
\]
令
\[
V^{\mathbf{Gal}(
  {L/K}
)}=\big\{v\in V\bigm| g(v)=v, \ \text{对任意}~g\in \mathbf{Gal}(
  {L/K}
)\big\}.
\]
由于对任意的$k\in K, v\in V^{\mathbf{Gal}(
  {L/K}
)}$，$g(kv)=g(k)g(v)=kv$，所以$V^{\mathbf{Gal}(
  {L/K}
)}$是$K$-线性空间。用平均值应该在群作用下不变的想法可以构造$V^{\mathbf{Gal}(
  {L/K}
)}$中的元素：对任意的$v\in V$，则
\[
\sum_{i=1}^m g_i(v) \in V^{\mathbf{Gal}(
  {L/K}
)}.
\]
特别地，
\[
v(j)\coloneqq\sum_{i=1}^m g_i(e_j\cdot v) =\sum_{i=1}^m g_i(e_j)g_i(v)\in V^{\mathbf{Gal}(
  {L/K}
)}.
\]
由于$\big(g_i(e_j)\big)_{1\leqslant i,j\leqslant n}$可逆，所以，$g_i(v)$是$v(j)$的$L$-线性组合。
若取$g_i=g_1=1$，那么，每个$v\in V$均为$V^{\mathbf{Gal}(
  {L/K}
)}$中元素的$L$-线性组合，即${\rm span}_L V^{\mathbf{Gal}(
  {L/K}
)}=V$。据此，我们得到$L$-线性空间之间的满同态：
\[
\varphi\colon V^{\mathbf{Gal}(
  {L/K}
)}\otimes_K L \twoheadrightarrow  V, \ \ v\otimes \lambda\mapsto \lambda\cdot v.
\]
以上还是$\mathbf{Gal}(
  {L/K}
)$作用之间的同态。我们现在证明该同态实际上是满射。若不然，则存在$\displaystyle \sum_{i=1}^m v_i\otimes \lambda_i\in {\rm Ker}(\varphi)$，即$\sum_{i=1}^m \lambda_iv_i=0\in V$。我们假设$m$是使得上述成立的最小的非零整数。我们注意到存在某个$\lambda_i\notin K$：
否则
\[
\sum_{i=1}^m v_i\otimes \lambda_i=\left(\sum_{i=1}^m  \lambda_i v_i\right)\otimes 1=0.
\]
不妨假设$\lambda_m \notin K$，则存在$g\in {\mathbf{Gal}(
  {L/K}
)}$，使得$g(\lambda_m)\neq \lambda_m$。由于
\[
g\left(\sum_{i=1}^m v_i\otimes \lambda_i\right)\in {\rm Ker}(\varphi)=\sum_{i=1}^m v_i\otimes g(\lambda_i).
\]
所以，
\[
\lambda_m g\left(\sum_{i=1}^m v_i\otimes \lambda_i\right)-g(\lambda_m)\sum_{i=1}^m v_i\otimes \lambda_i\in {\rm Ker}(\varphi)
\]
即
\[
\sum_{i=1}^{m-1} v_i\otimes \big(\lambda_mg(\lambda_i)- g(\lambda_m)\lambda_i\big)\in {\rm Ker}(\varphi).
\]
我们不妨设$\lambda_1=1$，由$m$的最小性，上式中$i=1$时意味着$g(\lambda_m)= \lambda_m$，矛盾。

综上所述，我们有$G$-作用间的同构
\[
V^{\mathbf{Gal}(
  {L/K}
)}\otimes_K L \stackrel{\sim}{\longrightarrow}  V, \ \ v\otimes \lambda\mapsto \lambda\cdot v.
\]
:::

::: remark [有限域上（循环扩张上）正规基的构造]
$K$是有限域，$
  {L/K}
$是有限扩张（从而是Galois扩张），$\sigma$为$K$上的Frobenius同构，即$\sigma(x)=x^q$，其中，$x\in L,|q|=|K|$。此时，${\mathbf{Gal}}\left(
  {L/K}
\right)=\langle \sigma \rangle$是有限群。

- 1\) $K$上的Frobenius同构$\sigma$定义了$L$上的一个有限生成的$K[X]$-模结构，
  即对任意的$P(X)=\displaystyle\sum_{i=0}^d a_i X^i\in K[X]$（其中$a_i\in K$）和$x\in L$，
  定义$P(X)\cdot x \coloneqq\sum_{i=0}^d a_i \sigma^i(x)$。

- 2\) 作为$K$-线性映射$\sigma\in {\mathbf{End}}_{K}(L)$，$\sigma$的极小多项式为$X^n-1$。

  实际上，$\sigma^n=1$，从而其极小多项式整除$X^n-1$。
  如果这个极小多项式的次数小于$n$，那么，就存在$a_0,\cdots,a_d\in K$（某些非零），$d<n$，使得
  \[
  a_0+a_1\sigma+\cdots +a_d\sigma^d =0.
  \]
  这和Artin的特征不相关性引理矛盾（在Artin的 @lem:independence-of-characters 中取$G=L^\times,K=L$，
  此时，${\mathbf{Gal}}\left(
  {L/K}
\right)$中的元素为特征）。

  特别地，作为$K$-线性映射$\sigma\in {\mathbf{End}}_{K}(L)$，
  $\sigma$的极小多项式恰为其特征多项式（因为前者整除后者并且有相同的维数）。

- 3\) 对$K[X]$-模$L$用主理想整环上有限生成模的分类定理，从而存在首一多项式$P_1,\cdots,P_s\in A$，
  使得$(P_1)\supset (P_2)\supset \cdots \supset (P_s) $并且
  \[
  L\simeq
    {K[X]/(P_1(X))}
  \oplus
    {K[X]/(P_2(X))}
  \oplus \cdots \oplus
    {K[X]/(P_s(X))}
  .
  \]
  我们强调上面的分解是$K[X]$-模的直和。特别地，$P_1(\sigma)=0$（因为$P_1|P_2|\cdots|P_s$）。
  从而，$X^n-1\mid P_1$。由于$\dim_KL=n$，所以，$s=1$并且$P_1(X)=X^{n}-1$。
  从而，作为$K[X]$-模，我们有同构
  \[
   {K[X]/(X^n-1)}
  \stackrel{\simeq}{\longrightarrow} L.
  \]
  此时，作为$K$-线性空间，上式左边有一组自然的基$\{1,X,\cdots,X^{n-1}\}$。
  根据上述同构，这组基对应了$L$中的基
  \[
  \big\{g\in {\mathbf{Gal}}\left(
    {L/K}
  \right)\bigm| g\cdot x\big\}=\{x,\sigma(x),\cdots, \sigma^{n-1}(x)\}.
  \]
  这是$
  {L/K}
$的正规基。

:::

::: lemma [Hilbert 90]
[^6]$
  {L/K}
$是次数为$n$的循环扩张，$\sigma\in \mathbf{Gal}(
  {L/K}
)$是生成元，$x\in L$。那么，
\[
\begin{cases}
{\rm N}_{_{
  {L/K}
}}(x)=1 \ \ &\Leftrightarrow \ \ \text{存在 $y\in L$，使得 $x=\frac{y}{\sigma(y)}$};\\
{\rm Tr}_{_{
  {L/K}
}}(x)=0 \ \ &\Leftrightarrow \ \ \text{存在 $y\in L$，使得 $x=y-\sigma(y)$}.
\end{cases}
\]
:::

::: proof
假设$\mathbf{Gal}(
  {L/K}
)=\langle \sigma\rangle=\{1,\sigma,\sigma^2,\cdots,\sigma^{n-1}\}$。

如果$x=\frac{y}{\sigma(y)}$，那么，
\[
\begin{aligned}
{\rm N}_{_{
  {L/K}
}}(x)&=\prod_{k=0}^{n-1}(\sigma^k(x))=\frac{\prod_{k=0}^{n-1}(\sigma^k(y))}{\prod_{k=0}^{n-1}(\sigma^{k+1}(y))}=1.
\end{aligned}
\]
反之（E. Artin），${\rm N}_{_{
  {L/K}
}}(x)=1$，即$x\sigma(x)\cdots \sigma^{n-1}(x)=1$。我们考虑$L$到自身的$K$-线性映射：
\[
\psi={\rm id}+x\sigma+(x\sigma(x))\sigma^2+\cdots+\big(x\sigma(x)\cdots \sigma^{n-2}(x)\big)\sigma^{n-1}.
\]
这是$n$个特征的线性组合[^7]，根据Artin引理，存在$y\in L$，使得$\psi(y)\neq 0$。
我们计算$\sigma(\psi(y))$：
\[
\begin{aligned}
\sigma(\psi(y))&=\sigma(y)+\sigma(x)\sigma^2(y)+\sigma(x)\sigma^2(x)\sigma^3(y)\\
&\quad+\cdots +\sigma(x)\sigma^2(x)\cdots\sigma^{n-2}(x)\sigma^{n-1}(y)+\underbrace{\sigma(x)\sigma^2(x)\cdots\sigma^{n-1}(x)}_{=x^{-1}} y\\
&=x^{-1}\big[x\sigma(y)+x\sigma(x)\sigma^2(y)+x\sigma(x)\sigma^2(x)\sigma^3(y) +\cdots +x\sigma(x)\sigma^2(x)\cdots\sigma^{n-2}(x)\sigma^{n-1}(y)+y\big]\\
&=x^{-1}\psi(y).
\end{aligned}
\]
所以，$x=\frac{\psi(y)}{\sigma(\psi(y))}$。

如果$x=y-\sigma(y)$，那么，
\[
\begin{aligned}
{\rm Tr}_{_{
  {L/K}
}}(x)&=\sum_{k=0}^{n-1}(\sigma^k(x))=\sum_{k=0}^{n-1}\sigma^k(y) -\sum _{k=0}^{n-1} \sigma^{k+1}(y) =0.
\end{aligned}
\]
反之，${\rm Tr}_{_{
  {L/K}
}}(x)=0$，即$x+\sigma(x)+\cdots +\sigma^{n-1}(x)=0$。由于$
  {L/K}
$是可分的，根据习题 @sec:trace-norm-exer，二次型
\[
{\rm Tr}_{_{
  {L/K}
}}\colon L\times L \rightarrow K, \ \ (x_1,x_2)\mapsto {\rm Tr}_{_{
  {L/K}
}}(x_1x_2),
\]
是非退化的。特别地，存在$z\in L$，使得${\rm Tr}_{_{
  {L/K}
}}(z)\neq 0$。令
\[
y=x\sigma(z)+(x+\sigma(x))\sigma^2(z)+\cdots+(x+\sigma(x)\cdots +\sigma^{n-2}(x))\sigma^{n-1}(z).
\]
那么，
\[
\begin{aligned}
\sigma(y)&=\sigma(x)\sigma^2(z)+(\sigma(x)+\sigma^2(x))\sigma^3(z)+\cdots+\underbrace{(\sigma(x)+\sigma^2(x)\cdots +\sigma^{n-1}(x))}_{=-x} z\\
&=-xz+ (x+\sigma(x))\sigma^2(z)+(x+\sigma(x)+\sigma^2(x))\sigma^3(z)+\cdots\\
&\quad-x(\sigma^2(z)+\sigma^3(z)+\cdots+\sigma^{n-1}(z))\\
&=y-x(z+\sigma(z)+\sigma^2(z)+\sigma^3(z)+\cdots+\sigma^{n-1}(z))=y-x{\rm Tr}_{_{
  {L/K}
}}(z).
\end{aligned}
\]
从而，$x=\frac{1}{{\rm Tr}_{_{
  {L/K}
}}(z)}(y-\sigma(y))$。
:::

::: remark [一般形式的Hilbert 90]
给定有限的Galois扩张$
  {L/K}
$，当${\mathbf{Gal}}\left(
  {L/K}
\right)$不再是循环群时，我们也有类似的结论。

考虑函数$f\colon{\mathbf{Gal}}\left(
  {L/K}
\right)\rightarrow L^\times$。那么，如下两个陈述等价：

- a) 对任意的$g,h\in {\mathbf{Gal}}\left(
  {L/K}
\right)$，$f(gh)=g(f(h))f(g)$；

- b) 存在$x\in L$，使得对任意的$g\in {\mathbf{Gal}}\left(
  {L/K}
\right)$，$f(g)=\frac{x}{g(x)}$。

:::

只要证明a)$\Rightarrow$b)即可。令$x=\displaystyle \sum_{h\in {\mathbf{Gal}}\left(
  {L/K}
\right)}f(h)h(y)$，其中，根据 @lem:independence-of-characters，我们可以选取$y$，使得$x\neq 0$。对任意的$g\in {\mathbf{Gal}}\left(
  {L/K}
\right)$，我们计算
\[
\begin{aligned}
g(x)&=\sum_{h\in {\mathbf{Gal}}\left(
  {L/K}
\right)}g(f(h))g(h(y))=\sum_{h\in {\mathbf{Gal}}\left(
  {L/K}
\right)} f(g)^{-1}f(g\cdot h)(g\cdot h)(y)\\
&\stackrel{gh=k}=f(g)^{-1}\sum_{k\in {\mathbf{Gal}}\left(
  {L/K}
\right)} f(k)k(y)=f(g)^{-1}x.
\end{aligned}
\]
从而，$f(g)=\frac{x}{g(x)}$。

::: example
利用Hilbert 90，我们可以找出所有满足勾股定理的整数解。为此，我们考虑域扩张$
  {{\mathbb{Q}}(i)/{\mathbb{Q}}}
$，此时，其Galois群是$2$-阶循环群并且其非平凡自同构为$\sigma\colon x+yi\mapsto x-yi$。为了找到所有的$x,y,z\in\mathbb{Z}$，
使得
$x^2+y^2=z^2$，我们注意到这个式子等价于${\rm N}_{_{
  {{\mathbb{Q}}(i)/{\mathbb{Q}}}
}}\left(\frac{x}{z}+\frac{y}{z}i\right)=1$。根据Hilbert 90，以上等价于存在$q_1+q_2i\in {\mathbb{Q}}(i)$，
使得
\[
\frac{x}{z}+\frac{y}{z}i=\frac{\sigma(q_1+q_2 i)}{q_1+q_2 i}=\frac{q_1-q_2 i}{q_1+q_2 i}.
\]
通过约去因子，我们可以假设$q_1=m,q_2=n$是整数，从而，
\[
\frac{x}{z}+\frac{y}{z}i=\frac{m-n i}{m+n i}=\frac{m^2-n^2}{m^2+n^2}-\frac{2mn}{m^2+n^2}i.
\]
这表明（通过调整$m$的符号）$(x,y,z)$与$(m^2-n^2, 2mn, m^2+n^2)$成比例。
:::

::: example [解Pell方程]
假设$d\in \mathbb{Z}_{\geqslant 1}$不是完全平方数，我们要找如下Pell方程
\[
x^2-dy^2=1
\]
的所有有理数解。为此，考虑$2$-次域扩张$
  {{\mathbb{Q}}(\sqrt{d})/{\mathbb{Q}}}
$，其Galois群是$2$-阶循环群并且其非平凡自同构为$\sigma\colon x+y\sqrt{d}\mapsto x-y\sqrt{d}$。此时，
\[
{\rm N}_{_{
  {{\mathbb{Q}}(\sqrt{d})/{\mathbb{Q}}}
}}\left(x+y\sqrt{d}\right)=(x+y\sqrt{d})(x-y\sqrt{d})=x^2-dy^2.
\]
所以，Pell方程等价于${\rm N}_{_{
  {{\mathbb{Q}}(\sqrt{d})/{\mathbb{Q}}}
}}\left(x+y\sqrt{d}\right)=1$。根据Hilbert 90，这等价于存在$m,n\in \mathbb{Z}$，使得
\[
x+y\sqrt{d}=\frac{m-n \sqrt{d}}{m+n \sqrt{d}}=\frac{m^2+dn^2}{m^2-dn^2}-\frac{2mn}{m^2-dn^2}\sqrt{d}.
\]
从而，
\[
x=\frac{m^2+dn^2}{m^2-dn^2},  \ y =\frac{2mn}{m^2-dn^2}, \ m,n\in \mathbb{Z}
\]
给出了Pell方程的通解。
:::

::: example
$K$是有限域，$
  {L/K}
$是$n$-次有限扩张，$q=|K|$。范数映射${\rm N}_{_{
  {L/K}
}}\colon L^\times \rightarrow K^\times$是群同态，我们来计算$\big|{\rm Ker}({\rm N}_{_{
  {L/K}
}})\big|$，即范数为$1$的元素的个数。有限域的扩张是循环扩张，其生成元为Frobenius同态${\rm Frob}$。
根据Hilbert 90，我们知道
\[
\big|{\rm Ker}({\rm N}_{_{
  {L/K}
}})\big|=\big\{\frac{{\rm Frob}(x)}{x}\bigm|x\in L^\times\big\}={\rm Im}(\psi),
\]
其中，群同态$\psi$定义为：
\[
\psi\colon L^\times \rightarrow L^\times,  \ x \mapsto \frac{{\rm Frob}(x)}{x}.
\]
从而，
\[
\big|{\rm Ker}({\rm N}_{_{
  {L/K}
}})\big|=\frac{|L^\times|}{\big|{\rm Ker}(\psi)\big|}.
\]
根据定义，
\[
{\rm Ker}(\psi)=\big\{x\in L^\times\bigm|{\rm Frob}(x)=x\big\}=K^\times.
\]
所以，
\[
\big|{\rm Ker}({\rm N}_{_{
  {L/K}
}})\big|=\frac{|L^\times|}{\big|K^\times\big|}=\frac{q^n-1}{q-1}.
\]
特别地，这个计算表明${\rm N}_{_{
  {L/K}
}}\colon L^\times \rightarrow K^\times$是满同态，请参考 @exam:N-is-surjective-for-finite-field。
:::

::: example [Hilbert 90与Galois下降]
给定有限Galois扩张$
  {L/K}
$，那么，$\mathbf{Gal}(
  {L/K}
)$可以自然地作用在射影空间$\mathbf{P}^n(L)$上。实际上，对任意的$[x_0:x_1:\cdots:x_n]\in\mathbf{P}^n(L)$和$g\in \mathbf{Gal}(
  {L/K}
)$，我们定义
\[
g[x_0:x_1:\cdots:x_n]=[g(x_0):g(x_1):\cdots:g(x_n)].
\]
这个定义显然不依赖于$\mathbf{P}^n(L)$点的齐次坐标的选取。

另外，$\mathbf{P}^n(K)$可以自然地被视作是$\mathbf{P}^n(L)$的子集：
\[
\mathbf{P}^n(K)\hookrightarrow \mathbf{P}^n(L), \ [x_0:x_1:\cdots:x_n]\mapsto [x_0:x_1:\cdots:x_n],
\]
其中，$x_0,\cdots,x_n\in K$。那么，我们有
\[
\mathbf{P}^n(L)^{\mathbf{Gal}(
  {L/K}
)}=\mathbf{P}^n(K),
\]
其中，$\mathbf{P}^n(L)^{\mathbf{Gal}(
  {L/K}
)}=\big\{p\in \mathbf{P}^n(L)\bigm| g\cdot p=p,\ \text{对任意}\ g\in \mathbf{Gal}(
  {L/K}
)\big\}$。

我们现在直接证明上述论断。考虑如下交换图：
\[
\begin{tikzcd}
 K^{n+1} \ar[r, "\subset"]  \ar[d, "\pi"] &L^{n+1} \ar[d, "\pi"]\\
\mathbf{P}^n(K) \ar[r, "\subset"]   &\mathbf{P}^n(L)
  \end{tikzcd}
\]
不难看出，以上映射与Galois群$\mathbf{Gal}(
  {L/K}
)$的作用相符，即每个箭头对应着$G$-作用的态射，请参考 @definition-morphism-of-action。对任意的$p\in \mathbf{P}^n(L)^{\mathbf{Gal}(
  {L/K}
)}$，$\pi^{-1}(p)$是$\mathbf{P}^n(L)$中的$1$维线性子空间并且在$\mathbf{Gal}(
  {L/K}
)$的作用下不变。根据 @prop:galois-decent-for-linear-spaces，存在$(x_0,\cdots,x_n)\in L^{n+1}$，使得$(x_0,\cdots,x_n)$张成$\pi^{-1}(p)$并且$x_0,\cdots,x_n\in K$。这表明，$p=[x_0:x_1:\cdots:x_n]\in \mathbf{P}^n(K)$。

我们还可以用Hilbert 90的一般形式证明$\mathbf{P}^n(L)^{\mathbf{Gal}(
  {L/K}
)}=\mathbf{P}^n(K)$：给定$p\in \mathbf{P}^n(L)^{\mathbf{Gal}(
  {L/K}
)}$，任选非零的$(x_0,\cdots,x_n)\in \pi^{-1}(p)\subset L^{n+1}$。按定义，对任意$g\in \mathbf{Gal}(
  {L/K}
)$，$g(x_0,\cdots,x_n)\in \pi^{-1}(p)$，所以存在函数
\[
f\colon\mathbf{Gal}(
  {L/K}
)\rightarrow \mathbf{Gal}(
  {L/K}
),
\]
使得
\[
g(x_0,\cdots,x_n)=\big(g(x_0),\cdots,g(x_n)\big)=\big(f(g)\cdot x_0,\cdots,f(g)\cdot x_n\big).
\]
对任意的$g,h\in \mathbf{Gal}(
  {L/K}
)$，我们计算$f(gh)$：
\[
\begin{aligned}
f(g h)(x_0,\cdots,x_n)&=(g\cdot h)(x_0,\cdots,x_n)=g\big(h(x_0,\cdots,x_n)\big)\\
&=g\big(f(h)\cdot x_0,\cdots,f(h)\cdot x_n\big)=\Big(g\big(f(h)\cdot x_0\big),\cdots,g\big(f(h)\cdot x_n\big)\Big)\\
&=\Big(g\big(f(h)\big)\cdot g(x_0),\cdots,g\big(f(h)\big)\cdot g(x_n)\Big)=g\big(f(h)\big)\big(g(x_0),\cdots,g(x_n)\big)\\
&=g\big(f(h)\big)f(g)\big(x_0,\cdots,x_n\big).
\end{aligned}
\]
所以，$f(g h)=g\big(f(h)\big)f(g)$。
根据Hilbert 90的一般形式，存在$x\in L^\times$，使得$f(g)=\frac{x}{g(x)}$。从而，
\[
g(x_0,\cdots,x_n)=\big(\frac{x x_0}{g(x)},\cdots,\frac{x x_n}{g(x)}\big),
\]
即$g(x_i)=\frac{x x_i}{g(x)}$，从而对任意的$g\in \mathbf{Gal}(
  {L/K}
)$，$g(x\cdot x_i)=x\cdot x_i$。所以，$x\cdot x_i\in K$。我们只要选取如下$p$的如下齐次坐标即可：
\[
p=[x\cdot x_0:x\cdot x_1:\cdots:x\cdot x_n].
\]
:::

::: theorem [Kummer]
$K$是域并且$|\mu_n(K)|=n$（即$X^n-1$可分并且$K$包含所有$n$-次单位根），$
  {L/K}
$是有限扩张。那么，以下两个叙述等价：

- 1\) $
  {L/K}
$是$n$次循环扩张[^8]；

- 2\) 存在$a\in K$，对任意的$d>1,d\mid n$，$a\notin K^d$，使得$L$是$X^n-a$在$K$上的分裂域。
  此时，$X^n-a$是$K[X]$上的不可约多项式并且$L=K(\alpha)$，其中，$\alpha$是该多项式的某个根。

:::

::: proof
首先证明1)$\Rightarrow$2)。

令$\sigma$为$\mathbf{Gal}(
  {L/K}
)$的某个生成元，$\xi$为$K$中的某个$n$-次本原单位根。由于${\rm N}_{_{
  {L/K}
}}(\xi^{-1})=1$，根据Hilbert 90，存在$\alpha \in L$，使得$\xi^{-1}=\frac{\alpha}{\sigma(\alpha)}$，
从而，
\[
\sigma(\alpha)=\xi\cdot \alpha, \ \  \sigma^k(\alpha)=\xi^k\cdot \alpha, \ k=0,1,\cdots,n-1.
\]
特别地，由于$\xi$是本原的，所以，以上$\{\sigma^k(\alpha)\mid k=0,\cdots,n-1\}$两两不同。
以上等式应该被视作是$\mathbf{Gal}(
  {L/K}
)$在根上的作用。此时，
\[
P(X)=\prod_{k=0}^{n-1}(X-\sigma^k(\alpha))\in K[X]
\]
是$\alpha$的极小多项式，从而是不可约的。特别地，$[K(\alpha):K]=\deg(P)=n$，所以$L=K(\alpha)$。
我们还有
\[
P(X)=\prod_{k=0}^{n-1}(X-\xi^k\alpha)=X^n-\alpha^n=X^n-a.
\]
最终，我们说明$a\notin K^d$，其中，$1<d\mid n$。否则，$b^d=a$，其中$b\in K$。从而，
\[
P(X)=\big(X^{\frac{n}{d}}\big)^d-b^d=(X^{\frac{n}{d}}-b)Q(X)
\]
是可约的，矛盾。

其次证明2)$\Rightarrow$1)。

假设存在$a\in K$，对任意$d>1,d\mid n$，$a\notin K^d$，使得$L$是$X^n-a$在$K$上的分裂域。
（将证明$X^n-a$不可约）

首先，$
  {L/K}
$是正规扩张；其次，令$\alpha$为$X^n-a$在$L$中的一个根，根据$|\mu_n(K)|=n$，则$X^n-a$的所有根恰为是$\{\alpha,\xi\alpha,\cdots,\xi^{n-1}\alpha\}$并且该集合中的元素两两不同，其中$\xi$是$K$中的$n$-次本原单位根。这表明$X^n-a$可分，所以$
  {L/K}
$是可分扩张。综合上述，$
  {L/K}
$是Galois扩张。另外，考虑$\mathbf{Gal}(
  {L/K}
)$在以上多项式的根上的作用，我们得到单的群同态：
\[
\mathbf{Gal}(
  {L/K}
)\longrightarrow \mu_n(K), \ \ g\mapsto \zeta_g,  \ \ \text{其中}~g(\alpha)=\zeta_g \alpha.
\]
所以，$\mathbf{Gal}(
  {L/K}
)$是循环群。以下证明
\[
X^n-a=\prod_{k=0}^{n-1}(X-\xi^k\alpha)
\]
是不可约的。如果这一点成立，由于$\mathbf{Gal}(
  {L/K}
)$在根上的作用传递，通过考虑元素个数，我们就有$\mathbf{Gal}(
  {L/K}
)\simeq \mu_n(K)$是$n$阶循环群。假设$Q\mid P$并且是首一的多项式，则$Q(X)=(X-\xi^{i_1}\alpha)\cdots(X-\xi^{i_m}\alpha)$，其中，$1\leqslant m<n$。从而，（因为$\xi \in K$）
\[
\xi^{i_1}\alpha \cdot \xi^{i_2}\alpha\cdots \xi^{i_m}\alpha \in K \ \ \Rightarrow \ \ \alpha^m\in K.
\]
由于$\alpha^n\in K$，所以，对于$d=(n,m)<n$，有$\alpha^d\in K$。此时，$d\mid n$。
所以，$a=\alpha^n=\big(\alpha^{d}\big)^{\frac{n}{d}}\in K^{\frac{n}{d}}$，与所给假设相抵触。
:::

::: example {@exam:gal-Xn-a}
$K$为域，$P(X)=X^n-a\in K[X]$，$n\geqslant 2$，$a\in K^\times$，$L$为$P$的分裂域。
令$\xi\in \mu_n(\overline{K})$为$n$-次本原单位根。我们未必有$\xi\in K$但是$\xi\in L$。

现在证明$\mathbf{Gal}(
  {L/K}
)$是${\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\big)}$的子群，其中，
\[
{\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\big)}=\big\{g_{u,b}\colon x\mapsto ux+b\bigm|u\in \left(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\right)^\times,\,b\in
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\big\}.
\]
请参考 @exam:affine-transformation-group。

任选$\alpha$为$P$在$L$中的根，则对任意的$g\in \mathbf{Gal}(
  {L/K}
)$，存在唯一的$u\in \left(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\right)^\times$和$b\in
  {{\mathbb{Z}}/n{\mathbb{Z}}}
$，使得
\[
g(\xi)=\xi^u, \ \ g(\alpha)=\xi^b\cdot \alpha.
\]
那么，$g\mapsto g_{u,b}$给出了单的群同态：
\[
\mathbf{Gal}(
  {L/K}
)\hookrightarrow {\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\big)}.
\]
给定素数$p$，当$K={\mathbb{Q}},a\notin {\mathbb{Q}}^p$时，
易见$[L:K]=p(p-1)$而$\big|{\mathbf{Aff}_1\big({\mathbb{F}_p}\big)}\big|=p(p-1)$，此时，
\[
\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\stackrel{\simeq}{\longrightarrow} {\mathbf{Aff}_1\big({\mathbb{F}_p}\big)}.
\]
特别地，${\mathbf{Aff}_1\big({\mathbb{F}_p}\big)}$可以实现为数域的Galois群。
:::

[^1]: 从而是Galois扩张
[^2]: 我们只要考虑$H<G$使得$H\neq G$，$H\neq 1$。
[^3]: 当${\rm char}(K)=p$时，总假设$(p,n)=1$。
[^4]: 数域就是${\mathbb{Q}}$的有限扩张
[^5]: 参见习题 @sec:exer-Dirichlet。
[^6]: 这是Hilbert著名的Zahlbericht中的第九十个定理。
[^7]: 以上$\psi$的构造是自然的：为了找到$y$，使得$x=\frac{y}{\sigma(y)}$，即$x\sigma(y)=y$，
  定义映射$f(y)=x\sigma(y)$。那么，$y$是$f$的不动点。
  据此，我们取$y$在$f$下的平均$\frac{1}{n}\sum_{k=0}^{n-1} f^k(y)$，这与$\psi$的形式基本一致。
[^8]: 按定义，循环扩张是Galois扩张。
