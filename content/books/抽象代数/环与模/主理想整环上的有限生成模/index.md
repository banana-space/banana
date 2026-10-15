---
title: 主理想整环上的有限生成模
---

先简要回忆模的定义，请参考第 @section:module 节。
$A$是环（未必交换），（左）$A$-模$M$指的是交换群$(M,+)$以及乘法映射
\[
A\times M\rightarrow M,  \ \ (a,m)\mapsto a\cdot m,
\]
使得对任意的$a,a'\in A$和$m,m'$，有
\[
\begin{aligned}
&1\cdot m=m, \ \ a\cdot (a' \cdot m)=(a\cdot a')\cdot m,\\
&a\cdot (m+m')=a\cdot m +a\cdot m', \ \ (a+a')\cdot m=a\cdot m+a'\cdot m,
\end{aligned}
\]
$M$的加法子群$N$如果对$A$的乘法封闭，则$N$为$M$的子模。

::: example
$A$是环，那么，$A$对自身的乘法使得$A$成为$A$-模。
按定义，$I\subset A$是子模当且仅当$I$是$A$的（左）理想。
:::

更多的例子请参考第 @section:module 节。

给定$A$-模$M_1,M_2$，
它们之间的$A$-模同态指的是加法群同态$\varphi\colon M_1\rightarrow M_2$并且对任意$a\in A$和
$m\in M_1$，有
\[
\varphi(a \cdot m)=a\cdot \varphi(m).
\]
同态的核定义为${\rm Ker}(\varphi)\coloneqq\big\{m\in M_1\bigm|\varphi(m)=0\big\}$。
它是$M_1$的子模且$\varphi$是单射当且仅当${\rm Ker}(\varphi)=\{0\}$。

给$A$-模$M$及其子模$N$，我们还可以定义商模${M/N}=\big\{m+N\bigm|m\in M\big\}$，
其中$a(m+N)\coloneqq am+N$。商映射
\[
\pi\colon M\rightarrow{M/N}, \ \ m\mapsto m+N.
\]
是满的$A$-模同态。
特别地，我们有所谓的同态定理，请参考 @prop:quotient-A-mod-universal：$M$和$M'$是$A$-模，
$N\subset M$是子模，$\varphi\colon M \rightarrow M'$是$A$-模同态。
若$N\subset{\rm Ker}(\varphi)$，则有唯一的$A$-模同态$\overline{\varphi}\colon{M/N}\rightarrow M'$，
使得$\overline{\varphi}\circ\pi=\varphi$，即
\[
\begin{tikzcd}
M \arrow[r, "\varphi"] \arrow[d, "\pi"] &  M'\\{M/N}\arrow[ur, "\overline{\varphi}",swap] &      \end{tikzcd}
\]
进一步，
我们还有$A$-模同构
$\overline{\varphi}\colon{M/{\rm Ker}(\varphi)}\stackrel{\simeq}{\longrightarrow} {\rm Im}(\varphi)$。

::: remark
与商群的情形类似（证明完全一致），我们有如下的一一对应：
\[
\big\{\text{$M$ 的子模 $N'\supset N$}\big\} \stackrel{1:1}{\longrightarrow} \big\{\text{${M/N}$ 的子模 $\overline{N'}$}\big\}, \ \  N' \mapsto{N'/N}.
\]
:::

## 有限生成模与Noether性

以下总假设$A$是交换环。

给定一族$A$-模$\big\{M_i\big\}_{i\in I}$，那么$\displaystyle \prod_{i\in I}M_i$具有$A$-模结构：
\[
A\times \prod_{i\in I} M_i \rightarrow  \prod_i M_i, \ \ \big(a,(m_i\in M_i)_{i\in I}\big)\mapsto (a\cdot m_i)_{i\in I}.
\]
它被称作是$\big\{M_i\big\}_{i\in I}$的**乘积**。对每个指标$i_0\in I$，投影映射
\[
\pi_{i_0}\colon\prod_i M_i \rightarrow M_{i_0}, \ \ (m_i)_{i\in I}\mapsto m_{i_0}.
\]
是$A$-模同态。

$\displaystyle \prod_{i\in I}M_i$具有以下的泛性质：

\[
\begin{tikzcd}
& & M \arrow[ddrr, "\varphi_j"]  \arrow[ddll, "\varphi_i",swap] \arrow[d, "\psi",dashed]& & \\
& &\displaystyle\prod_{i\in I}M_i \arrow[drr, "\pi_j",swap]  \arrow[dll, "\pi_i"] & &\\
M_i & &  & &M_j
\end{tikzcd}
\]
对任意$A$-模$M$和任意一族$A$-模同态$\varphi_i\colon M\rightarrow M_i$，其中$i\in I$，
存在唯一的$A$-模同态$\psi\colon M\rightarrow \displaystyle \prod_{i\in I}M_i$，
使得对任意的$i\in I$，$\pi_i\circ \psi=\varphi_i$，即
\[
\prod_{i\in I}\mathbf{Hom}_A(M,M_i)=\mathbf{Hom}_A\left(M,\prod_{i\in I}M_i\right).
\]
证明请参考习题第 @section:product 节。

我们还可构造$\big\{M_i\big\}_{i\in I}$的**直和** $\displaystyle \bigoplus_{i\in I}M_i$。作为集合，令
\[
\bigoplus_{i\in I} M_i=\big\{(m_i)_{i\in I}\in \prod_{i\in I} M_i\bigm| \text{除有限个 $i$ 外，其余 $m_i$ 均为 $0$}\big\}.
\]
那么，$\displaystyle \bigoplus_{i\in I}M_i$的$A$-模结构定义为
\[
A\times \bigoplus_{i\in I} M_i \rightarrow  \bigoplus_{i\in I} M_i, \ \ \big(a,(m_i\in M_i)_{i\in I}\big)\mapsto (a\cdot m_i)_{i\in I}.
\]
对每个指标$i_0\in I$，我们有嵌入映射
\[
\iota_{i_0}\colon M_{i_0}\rightarrow \bigoplus_{i\in I} M_i,  \ \ m_{i_0}\mapsto (0,\cdots,0, m_{i_0},0\cdots).
\]
这是$A$-模同态。

$\displaystyle \bigoplus_{i\in I}M_i$也具有泛性质：

\[
\begin{tikzcd}
M_i \arrow[ddrr, "\varphi_i",swap] \arrow[drr, "\iota_i"]& &  & &M_j \arrow[ddll, "\varphi_j"] \arrow[dll, "\iota_j",swap] \\
& & \displaystyle\bigoplus_{i\in I}M_i   \arrow[d, "\psi",dashed]& & \\
& &M  & &
\end{tikzcd}
\]
对任意$A$-模$M$和任意一族$A$-模同态$\varphi_i\colon M_i\rightarrow M$，其中$i\in I$，
存在唯一的$A$-模同态$\psi\colon \displaystyle\bigoplus_{i\in I}M_i\rightarrow M$，
使得对任意的$i\in I$，$\psi \circ \iota_i=\varphi_i$，即
\[
\prod_{i\in I}\mathbf{Hom}_A(M_i,M)=\mathbf{Hom}_A\left(\bigoplus_{i\in I}M_i,M\right).
\]

::: remark
再给定一族$A$-模$\big\{M'_i\big\}_{i\in I}$，它们和$\big\{M_i\big\}_{i\in I}$用同样的指标$I$。
若对每个$i\in I$，有$A$-模同构$f_i\colon M'_i\rightarrow M_i$，那么，
$\displaystyle \bigoplus_{i\in I} M'_i$与$\displaystyle \bigoplus_{i\in I} M_i$同构。

对任意的$i\in I$，我们有$A$-模同态：
\[
M'_i\stackrel{f_i}{\longrightarrow} M_i \stackrel{\iota_i}{\longrightarrow} \bigoplus_{i\in I} M_i.
\]
这就给出了$A$-模同态：
\[
\bigoplus_{i\in I} M'_i {\longrightarrow} \bigoplus_{i\in I} M_i.
\]
利用$f_i^{-1}\colon M_i \rightarrow M'_i$可以构造出上述映射的逆，
这就给出了$\displaystyle \bigoplus_{i\in I} M'_i$与$\displaystyle \bigoplus_{i\in I} M_i$
之间的同构。

特别地，如果$\big\{M_i\big\}_{i\in I}$中每个$M_i$均与$A$同构，
就用$A^I$记它们的直和（的同构等价类）并称之为**自由$A$-模**。我们称$|I|$为此自由模的**秩**。
定义$A$-模$A^n=\underbrace{A\oplus A\oplus \cdots \oplus A}_{\text{$n$个}}$。
如果$M$是自由$A$-模，$\{x_i\}_{i\in I}\subset M$使得映射
\[
A^I\longrightarrow M, \ \ (a_i)_{i\in I}\mapsto \sum_{i\in I}a_ix_i
\]
是$A$-模同构（根据定义$(a_i)_{i\in I}\in A^I$中只有有限个$a_i$非零，从而上述求和为有限和），
就称$\{x_i\}_{i\in I}$是$M$的一组**基**。
此时，对任意的$x\in M$，存在唯一一组$(a_i)_{i\in I}$，其中只有有限个$a_i$非零，
使得$x=\displaystyle \sum_{i\in I}a_ix_i$。
:::

::: example
$M$是$A$-模，$N_1,N_2$是子模，若$N_1\cap N_2=0$且$N_1+N_2=M$，其中，
\[
N_1+N_2\coloneqq\{n_1+n_2\mid n_1\in N_1,n_2\in N_2\}.
\]
那么，$M\simeq N_1\oplus N_2$。

实际上，根据自然的嵌入映射$N_i\rightarrow M, \ \ n_i\mapsto n_i$，我们自然有映射
\[
\psi\colon N_1\oplus N_2\longrightarrow M, \ \ (n_1,n_2)\mapsto n_1+n_2.
\]
由于$N_1+N_2=M$，所以$\psi$是满射；对任意的$(n_1,n_2)\in {\rm Ker}(\psi)$，
$n_1=-n_2\in N_1\cap N_2=0$，所以，${\rm Ker}(\psi)=0$，即$\psi$是单射。综上所述，$\psi$是同构。
:::

给定$A$-模$M$，$\{M_i\}_{i\in I}$是$A$的某些子模构成的集合，我们定义
\[
\sum_{i\in I}M_i=\left\{ \text{有限和} \sum_{i\in I}x_i \Bigm|x_i\in M_i\right\}.
\]
这显然是$M$的子模。
另外，$\displaystyle\bigcap_{i\in I}M_i$也是子模，据此，考虑$M$的非空子集$S\subset M$，
包含$S$的所有子模之交是在包含关系下含$S$的最小子模，它被称为**由$S$生成的子模**并记作$(S)$。

如果$M$由某个有限子集$S$生成，则称$M$是**有限生成的$A$-模**。
如果模$M$可由单个元素$x$生成，则称$M$是**循环模**、$x$为$M$的**生成元**并记作$M=A\cdot x$。

::: remark
循环$A$-模形如${A/I}$，其中$I$是理想。

实际上，$I$是$A$的理想（从而是$A$的子模），那么，${A/I}$是循环模，因为$1+I$是其生成元；反之，
若$M$是循环模，则有满同态
\[
\varphi\colon A\rightarrow M, \ \  a\mapsto a\cdot x.
\]
从而，$M\simeq{A/{\rm Ker}(\varphi)}$。我们注意到${\rm Ker}(\varphi)$是$A$的理想。
:::

::: remark
$M$是有限生成的当且仅当有整数$n$及满同态${A}^n\rightarrow M$。

实际上，若有满同态$\varphi\colon{A}^n\rightarrow M$，
则$(1,0,\cdots,0),\cdots,(0,0,\cdots,1)$的像生成了$M$；反之，令$s_1,\cdots,s_n$为$M$的生成元，
可以构造满同态
\[
\varphi\colon{A}^n\rightarrow M, \ \ (a_1,\cdots,a_n)\mapsto a_1s_1+\cdots+a_ns_n.
\]
:::

::: definition
若环$A$的每个理想均为有限生成的，则称$A$为**Noether环**。
:::

::: example
主理想整环是Noether环。
:::

::: remark [Noether环的等价定义]
给定环$A$，所谓的**理想升链的稳定条件**指的是对任意$A$中的理想升链
\[
I_1\subset I_2\subset \cdots \subset I_n\subset \cdots,
\]
存在$n_0\geqslant 1$，使得当$n\geqslant n_0$时，$I_{n}=I_{n_0}$。

我们证明：$A$是Noether环等价于$A$满足理想升链的稳定条件。

若$A$是Noether环，考虑任意上述的理想升链，令$I=\displaystyle\cup_{k\geqslant 1}I_k$，这是$A$的理想。
根据Noether性，存在$x_1,\cdots,x_l\in A$，使得$I=(x_1,\cdots,x_l)$。
根据$I$的定义，存在$n_0$，使得$x_1,\cdots,x_l\in I_{n_0}$，所以当$n\geqslant n_0$，
我们有$I\subset I_{n}$。从而，$I_n=I_{n_0}$。

若$A$满足理想升链的稳定条件，假设存在不是有限生成的理想$I\subset A$。
任选$x_1\in I$且$x_1\neq 0$，考虑$(x_1)\subset I$，由于$I$不是有限生成，必有$x_2\in I-(x_1)$；
再考虑$(x_1,x_2)\subset I$，由于$I$不是有限生成，必有$x_3\in I-(x_1,x_2)$。
如此反复就得到理想的升链：
\[
(x_1)\subset (x_1,x_2)\subset \cdots \subset (x_1,x_2,\cdots,x_n)\subset \cdots
\]
该链的相邻两理想之间是严格包含关系，这与理想升链的稳定条件矛盾。
:::

若$A$是Noether环，按定义，$A$作为$A$-模，其子模均为有限生成的。更一般地，我们有如下命题

::: proposition {@prop:fg-mod-over-noetherian}
Noether环上的有限生成模的子模也是有限生成的。
:::

::: proof
$A$是Noether环，$A$-模$M$可被$n$个元素生成，我们对$n$进行归纳。

若$n=1$，我们已经证明了$M\simeq{A/I}$。
对于子模$J\subset{A/I}$，这是$A$中包含$I$的理想，根据Noether性，$J$是有限生成的。

现在假设对具有不超过$n-1$个生成元的$A$-模命题成立（$n\geqslant 2$），我们考虑
\[
M=(x_1,x_2,\cdots,x_n)=Ax_1+Ax_2+\cdots+Ax_n,
\]
及其子模$N$。令$M'=(x_1,x_2,\cdots,x_{n-1})$，则${M/M'}$由$x_n+M'$生成。
在商映射$\pi\colon M\rightarrow{M/M'}$下，$\pi(N)\subset{M/M'}$是子模。
根据$n=1$情形的归纳假设，$\pi(N)$可以由有限个$y_1+M',\cdots,y_m+M'$生成。我们注意到
\[
N=N\cap M'+ Ay_1+Ay_2+\cdots+Ay_m.
\]
实际上，对任意$x\in N$，根据$y_i$的定义，存在$a_1,\cdots,a_m$，
使得$\pi(x)=a_1\pi(y_1)+\cdots +a_m\pi(y_m)$，所以$x-(a_1 y_1+\cdots +a_my_m) \in {\rm Ker}(\pi)$，
即$x-(a_1 y_1+\cdots +a_my_m) \in N\cap M'$。这就给出了上述等式。

根据归纳假设，$N\cap M'$是有限生成的，从而$N$是有限生成。
:::

::: remark {@rem:fg-mod-over-noetherian}
@rem-subgroup-of-finite-generated-abel 是该命题的特例，其证明的思想是一样的。
实际上，当$A$是主理想整环时，上述证明表明：若$M$是可由$n$个元素生成的模，
那么每个子模$N\subset M$也可由不超过$n$个元素生成。
这与 @rem-subgroup-of-finite-generated-abel 一致，
因为交换群是${\mathbb{Z}}$-模而${\mathbb{Z}}$是主理想整环。
:::

类似于$\bmod~p$的技巧（参考 @tech:mod-p），通过商掉极大理想，我们也可以利用域上的线性代数来研究模：

::: proposition {@prop:Am-An}
$A$是交换环，$\varphi\colon A^n \rightarrow A^m$是满的模同态，则$n\geqslant m$。
特别地，$A^m\simeq A^n$当且仅当$m=n$。
:::

::: proof
任选极大理想$\mathfrak{m}\subset A$，令$\mathfrak{m}^n=(x_1,\cdots,x_n)$，其中，
$x_1,\cdots,x_n\in \mathfrak{m}$，这是$A^n$的子模。考虑有自然的商映射：
\[
A^n\rightarrow{A/\mathfrak{m}}\oplus \cdots \oplus{A/\mathfrak{m}}, \ \ (x_1,\cdots,x_n)\mapsto (x_1+\mathfrak{m},\cdots,x_n+\mathfrak{m}).
\]
这个映射的核是$\mathfrak{m}^n$，所以
\[
{A^n/\mathfrak{m}^n}\simeq{A/\mathfrak{m}}\oplus \cdots \oplus{A/\mathfrak{m}}.
\]
这是$n$-维${A/\mathfrak{m}}$-线性空间。再考虑映射的复合$\psi=\pi\circ\varphi$
\[
\begin{tikzcd}
A^n \arrow[rr, "\varphi"] \arrow[drr, "\psi",swap] & &  A^m\arrow[d, "\pi"]\\
& &     \left({A/\mathfrak{m}}\right)^m.\end{tikzcd}
\]
很明显，$\mathfrak{m}^n \subset {\rm Ker}(\psi)$，所以，
存在满射
$\overline{\psi}\colon \left({A/\mathfrak{m}}\right)^n \rightarrow  \left({A/\mathfrak{m}}\right)^m$，
请参考如下交换图
\[
\begin{tikzcd}
A^n \arrow[rr, "\varphi"] \arrow[d, "\pi"] & &  A^m\arrow[d, "\pi"]\\
  \left({A/\mathfrak{m}}\right)^n \arrow[rr, "\overline{\psi}",dashed] & &     \left({A/\mathfrak{m}}\right)^m \end{tikzcd}
\]
这是线性空间之间的满射，所以$n\geqslant m$。
:::

::: lemma
$A$是主理想整环，$M\simeq A^I$是自由模，$\{e_i\}_{i\in I}$为$M$的一组基，$N\subset M$为子模。
$J\subset I$为子集并且$J\neq I$，任选$i_0\in I-J$，$J'=J\cup \{i_0\}$。
令$M_J$和$M_{J'}$为$\{e_j\}_{j\in J}$和$\{e_{j'}\}_{j'\in J'}$在$M$中生成的自由子模。

若$M_J\cap N$是自由模，则$M_{J'}\cap N$是自由模。
进一步，要么$M_{J'}\cap N = M_J\cap N$，
要么存在$M_J\cap N$的基$\{f_k\}_{k\in K(J)}$以及$f_{i_0}\in M_{J'}\cap N$使得
$\{f_k\}_{k\in K(J)}\cup \{f_{i_0}\}$为$M_{J'}\cap N$的基。
:::

::: proof
考虑交换图
\[
\begin{tikzcd}
1 \arrow[r] &  M_J \arrow[r, "\subset"] & M_{J'} \arrow[r, "\pi"] & A \arrow[r] &1\\
1 \arrow[r] & M_{J}\cap N \arrow[r, "\subset"]  \arrow[u, "\subset"] &M_{J'}\cap N \arrow[r, "\pi"]  \arrow[u, "\subset"] &\pi(M_{J'}\cap N)=(a)\arrow[r]  \arrow[u, "\subset"] &1
 \end{tikzcd}
\]
其中，定义
\[
\pi\colon M_{J'}\rightarrow A, \ \ \sum_{i\in J'}a_i e_i\mapsto a_{i_0}.
\]
那么，${\rm Ker}(\pi)=M_J$。这个映射给出了上述图中第一行的正合列。

不妨设$\pi(M_{J'}\cap N)\simeq (a)\neq 0$，其中，$a\in A$：
否则上述图的第二行给出$M_{J'}\cap N\simeq M_{J}\cap N$，命题明显成立。
任选$f_{i_0}\in M_{J'}\cap N$，使得$\pi(f_{i_0})=a$。
现在证明$\{f_k\}_{k\in K(J)}\cup \{f_{i_0}\}$是$M_{J'}\cap N$的一组基：对任意的$x\in M_{J'}\cap N$，
$\pi(x)\in (a)$，从而有$b\in A$，使得$\pi(x)=ba$，则$\pi(x-b\cdot f_{i_0})=0$，
所以$x-b\cdot f_{i_0}\in M_{J}\cap N$，从而有$a_k\in A$，使得
\[
x-b\cdot f_{i_0}=\sum_{k\in K(J)}a_k \cdot f_k.
\]
这说明$\{f_k\}_{k\in K(J)}\cup \{f_{i_0}\}$生成了$M_{J'}\cap N$。另外，若
\[
b\cdot f_{i_0}+\sum_{k\in K(J)}a_k \cdot f_k=0.
\]
先作用$\pi$，则$b=0$，从而$\displaystyle\sum_{k\in K(J)}a_k \cdot f_k=0$，那么，$a_k=0$，
所以$\{f_k\}_{k\in K(J)}\cup \{f_{i_0}\}$是$M_{J'}\cap N$的基。综上所述，命题成立。
:::

::: theorem
$A$为主理想整环，$M$是自由$A$-模，$N\subset M$为其子模，则$N$是也是自由$A$-模。
:::

::: remark
证明的困难之处在于并不需要假设$M$是有限生成。
定理在很多场合有着重要的应用，比如说$X$是拓扑空间，为了定义$X$的奇异同调$H_*(X;{\mathbb{Z}})$，
对任意$k$，我们研究它的$k$-次奇异链复形$S_k(X)$，
这是由所有$k$-单形生成的自由交换群（即自由的${\mathbb{Z}}$-模），
那么$S_k(X)$的每个子群都是自由的交换群。
:::

::: proof
考虑下面的集合：
\[
\mathcal{J}=\big\{\big(J,\{f_k\}_{k\in K(J)}\big)\bigm| J\subset I, M_J\cap N\text{ 是自由 $A$-模且 $\{f_k\}_{k\in K(J)}$ 为一组基}\big\}.
\]
我们定义$\mathcal{J}$上的偏序：
对任意的$\big(J,\{f_k\}_{k\in K(J)}\big),\big(J',\{f'_{k'}\}_{k'\in K(J')}\big)\in \mathcal{J}$，
$J\preceq J'$指的是
\[
J\subset J' \ \text{且} \ \{f_k\}_{k\in K(J)}\subset \{f'_{k'}\}_{k'\in K(J')}.
\]

对任意的$s=\big(J,\{f_k\}_{k\in K(J)}\big)$，令$\pi_1(s)=J$，$\pi_2(s)=\{f_k\}_{k\in K(J)}$。
对任意的全序子集$S\subset \mathcal{J}$，令
\[
J=\bigcup_{s\in S}\pi_1(s)\subset I, \ \mathbf{b}=\bigcup_{s\in S}\pi_2(s).
\]
由于对每个$s\in S$，
$\pi_2(s)\subset N\cap M_{\pi_1(s)}\subset \displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$，所以，
$\mathbf{b}\subset \displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$。
现在证明$\mathbf{b}$为$\displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$的基（从而，
$\displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$是自由$A$-模）：

- 任选$x\in\displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$，则存在$s_0\in S$，
  使得$x\in M_{\pi_1(s_0)}\cap N$。
  此时，$\pi_2(s_0)$是$M_{\pi_1(s_0)}\cap N$的基，
  所以存在$e_1,\cdots,e_n \in \pi_2(s_0)$和$a_1,\cdots,a_n\in A$，
  使得$x=\displaystyle\sum_{i=1}^n a_i e_i$。
  由于$\pi_2(s_0)\subset \mathbf{b}$，
  这表明$\mathbf{b}$生成$\displaystyle\bigcup_{s\in S}M_{\pi_1(s)}\cap N$。

- $\mathbf{b}$中的元素是$A$-线性无关的：对任意的$e_1,\cdots,e_n \in \mathbf{b}$，
  存在$s_1,\cdots,s_n\in S$，使得$e_i\in \pi_2(s_i)$。
  由于$S$是全序子集，不妨假设$s_n=\max(s_1,\cdots,s_n)$，那么，$e_1,\cdots,e_n \in \pi_2(s_n)$。
  由于$\pi_2(s_n)$是$M$的某子模的基，所以它们$A$-线性无关。

综合上述，$(J,\mathbf{b})\in \mathcal{J}$并且$J$是$S$的上界。
根据Zorn引理，$\mathcal{J}$有极大元$s_*$。
令$\pi_1(s_*)=J$，那么，$J=I$：否则，任选$i_0\in I-J$，$J'=J\cup \{i_0\}$，根据上一引理，
$M_{J'}\cap N$是自由$A$-模并且有一组基$\mathbf{b}'$包含$\pi_2(s_*)$。
所以，$(J',\mathbf{b}')\in \mathcal{J}$且比$s_*$更大，矛盾！
:::

## 主理想整环上有限生成模的分类定理

$A$是交换环，$p,q$是正整数，用$\mathbf{M}_{p,q}(A)$表示$A$系数$p\times q$的矩阵全体。
当$p=q=n$时，令$\mathbf{M}_{n}(A)=\mathbf{M}_{n,n}(A)$，
那么$\mathbf{M}_{n}(A)$在矩阵乘法下是环（当$n\geqslant 2$时，这个环不交换）。

在$\mathbf{M}_{n}(A)$上，我们有经典的行列式映射：
\[
\det\colon \mathbf{M}_{n}(A)\rightarrow A, \ \ A\mapsto \sum_{\sigma\in \mathfrak{S}_n}\varepsilon(\sigma)a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}.
\]
其中，$A=(a_{ij})_{i,j\leqslant n}$。特别地，对任意的$M,M'\in \mathbf{M}_{n}(A)$，有
\[
\det(M\cdot M')=\det(M)\det(M').
\]
实际上，以上公式的证明只需要用到$A$中的乘法，所以在线性代数课程中的证明仍然成立。
我们可以通过如下Cauchy–Binet公式的证明来验证这里的逻辑：

::: example [Cauchy–Binet公式]
给定$A$-系数的$m\times n$矩阵$M$和$n\times m$的矩阵$N$，其中，$m\leqslant n$。
对任意的$1\leqslant j_1<j_2<\cdots<j_m\leqslant n$，
我们定义$M_{\underline{j}}$为$M$的第$j_1,j_2,\cdots,j_m$列（按照既定的顺序）给出的$m\times m$
的矩阵，
$N_{\underline{j}}$为$N$的第$j_1,j_2,\cdots,j_m$行（按照既定的顺序）给出的$m\times m$的矩阵，其中，
$\underline{j}=(j_1,\cdots,j_m)$。

对于$m\times m$的矩阵$M$，其行列式为
\[
\det(M)=\sum_{\sigma\in \mathfrak{S}_m}\varepsilon(\sigma)M_{1\sigma(1)}M_{2\sigma(2)}\cdots M_{m\sigma(m)}.
\]
我们来证明著名的**Cauchy–Binet公式**：

```math {@eq:CauchyBinet}
\det(M\cdot N)=\sum_{\underline{j}} \det(M_{\underline{j}})\det(N_{\underline{j}}).
```

直接计算给出
\[
\begin{aligned}
\det(M\cdot N)&=\sum_{\sigma\in \mathfrak{S}_m}\varepsilon(\sigma)(M\cdot N)_{1\sigma(1)}(M\cdot N)_{2\sigma(2)}\cdots (M\cdot N)_{m\sigma(m)}\\
&=\sum_{\sigma\in \mathfrak{S}_m}\sum_{k_1=1}^n\sum_{k_2=1}^n\cdots \sum_{k_m=1}^n \varepsilon(\sigma) M_{1k_1}N_{k_1 \sigma(1)}M_{2k_2}N_{k_2 \sigma(2)}\cdots M_{mk_m}N_{k_m \sigma(m)}\\
&=\sum_{k_1,\cdots,k_m=1}^n  M_{1k_1}M_{2k_2}\cdots M_{mk_m}\sum_{\sigma\in \mathfrak{S}_m} \varepsilon(\sigma)N_{k_1 \sigma(1)}N_{k_2 \sigma(2)}\cdots N_{k_m \sigma(m)}.
\end{aligned}
\]
令$N_{\underline{k}}$为$N$的第$k_1,k_2,\cdots,k_m$行给出的$m\times m$的矩阵，其中，
$k_1,k_2,\cdots,k_m$可以有相同的数并且我们不要求大小的顺序。此时，根据定义
\[
\sum_{\sigma\in \mathfrak{S}_m}\varepsilon(\sigma)N_{k_1 \sigma(1)}N_{k_2 \sigma(2)}\cdots N_{k_m \sigma(m)}=\det(N_{\underline{k}}).
\]
特别地，我们可以要求以上$\det(M\cdot N)$的求和中$k_1,k_2,\cdots,k_m$两两不同（否则，
这样的项给出了有行一样的矩阵的行列式，从而贡献是$0$）。
所以，$\underline{k}$可以被视作是$\mathfrak{S}_m$中的元素。据此，
\[
\begin{aligned}
\det(M\cdot N)&=\sum_{\underline{k}\in \mathfrak{S}_m}  M_{1k_1} M_{2k_2} \cdots M_{mk_m}\det(N_{\underline{k}}).
\end{aligned}
\]
另外，$\det(M_{\underline{k}})=\varepsilon(\underline{k})\det(M_{\underline{j}})$，其中，
$1\leqslant j_1<j_2<\cdots<j_m\leqslant n$是对$k_1,\cdots,k_m$的重新排序。所以，
\[
\begin{aligned}
\det(M\cdot N)&=\sum_{\underline{j}}\sum_{\underline{k}\in \mathfrak{S}_m}  \varepsilon(\underline{k})M_{1k_1} M_{2k_2} \cdots M_{mk_m}\det(N_{\underline{j}})\\
&=\sum_{\underline{j}}\det(N_{\underline{j}})\det(M_{\underline{j}}).
\end{aligned}
\]
当$m=n$时，Cauchy–Binet公式给出$\det(M\cdot N)=\det(M)\det(N)$。
:::

给定$M\in \mathbf{M}_{n}(A)$，用$M^{^{\rm ad}}$表示其伴随矩阵（由余子式构成的矩阵）。
类似地，我们仍然有
\[
M\cdot {}^{t}M^{^{\rm ad}}={}^{t}M^{^{\rm ad}} \cdot M=\det(M)\cdot I,
\]
其中，$I$是$n\times n$的单位矩阵。

现在考虑环$\mathbf{M}_{n}(A)$的可逆元：
\[
{\mathbf{GL}}(n;A)=\mathbf{M}_{n}(A)^\times,
\]
这是$n\times n$的可逆矩阵所构成的群。根据上述$M$与其伴随矩阵相乘的公式，我们有如下结论：

::: lemma
${\mathbf{GL}}(n;A)=\big\{M\in\mathbf{M}_{n}(A)\bigm| \det(M)\in A^\times \big\}$。
:::

我们要用矩阵来研究主理想整环上的有限生成模，
其基本的思想就是研究群${\mathbf{GL}}(p;A)\times {\mathbf{GL}}(q;A)$在$\mathbf{M}_{p,q}(A)$上的作用，
它是线性代数中通过左右乘以矩阵将给定矩阵变成对角矩阵的推广。

我们定义群的作用：
\[
\big(\mathbf{GL}(p;A)\times \mathbf{GL}(q;A)\big)\times\mathbf{M}_{p,q}(A)\rightarrow \mathbf{M}_{p,q}(A), \ \ \big((P,Q),M\big)\mapsto P\cdot M\cdot Q^{-1}.
\]
给定$M\in \mathbf{M}_{p,q}(A)$，目标是在$M$的轨道中选形式尽可能简单的代表元。

::: theorem [Smith正规型]
$A$是主理想整环，$M\in \mathbf{M}_{p,q}(A)$，不妨$p\leqslant q$，$r=\min(p,q)=p$。
那么，$M$的轨道中有如下形式的矩阵：
\[
P\cdot M\cdot Q^{-1}=\left(\begin{array}{c|c}
\begin{matrix}
a_1&  &  &  &  \\
& a_2 &  &  &  \\
& & \ddots\\
& &  & a_r
\end{matrix} & \,{\Large\mathbf{0}}
\end{array}\right)
\]
其中，$a_1,\cdots,a_r$是仅有的可能非零的元，$(a_1)\supset (a_2)\supset \cdots \supset (a_r)$。
进一步，对每个$i\leqslant r$，$a_i$在伴随的意义下唯一。
:::

::: proof [存在性部分的证明]
对$p+q$进行归纳。当$p+q=2$时，命题明显成立。
我们做如下的归纳假设：对$k\geqslant 3$，对任意$p+q<k$，命题成立。
以下证明当$p+q=k$时，该命题仍然成立。

对$a\in A$，由于$A$是主理想整环，$a$可以写成$a=up_1^{e_1}\cdots p_k^{e_k}$，
其中，$u\in A^\times$而$p_i$为不可约元，其中，$e_i\geqslant 1$。
令$F(a)=e_1+\cdots +e_k$，这是$a$的不可约因子的个数（算重数）。
我们注意到初等矩阵均为$\mathbf{GL}(p;A)$或者$\mathbf{GL}(q;A)$中的元素（因为它们的系数均为整数）。
对给定的矩阵$M=(m_{i,j})_{i\leqslant p, j\leqslant q}$，
通过对$M$的左右乘初等矩阵来实现调换两行或者两列，
我们不妨假设$F(m_{1,1})=\displaystyle\min_{i,j}F(m_{i,j})$。
我们还定义$F(M)=\displaystyle\min_{i,j}F(m_{i,j})$。

现在考察$M$的第一行中的元素$m_{1,j}$和第一列中的元素$m_{i,1}$，其中，$i,j\geqslant 2$。
分两种情况讨论：

(1) 存在某个$m_{1,j}$或$m_{i,1}$不被$m_{1,1}$整除。

    通过对$M$的左右乘初等矩阵，不妨设$m_{1,2}\notin (m_{1,1})$。
    考虑$m_{1,1}$和$m_{1,2}$在$A$中生成的理想$(m_{1,1},m_{1,2})$，
    由于$A$是主理想整环，所以存在$d\in A$，使得$(m_{1,1},m_{1,2})=(d)$。
    特别地，$d\mid m_{1,1}$且$(m_{1,1})\neq (d)$（否则$m_{1,2}\in (m_{1,1})$）。
    据此，必然有$F(d)<F(m_{1,1})$。根据$(m_{1,1},m_{1,2})=(d)$，存在$a,b\in A$，使得
    \[
    a m_{1,1}+bm_{1,2}=d.
    \]
    令$x=\frac{m_{1,1}}{d}$，$y=\frac{m_{1,2}}{d}$，那么
    \[
    a x+b y=1.
    \]
    我们构造分块对角的$q\times q$矩阵[^1]：
    \[
    Q'=\begin{pmatrix}
    a&  -y&  &  &  \\
    b&  x&  &  &  \\
    &  &  1&   &  \\
    & & & \ddots\\
    & & &  & 1
    \end{pmatrix}
    \]
    根据$a x+b y=1$，$Q'\in \mathbf{GL}(q;A)$。
    所以，$M\cdot Q'$的第一行第一列的位置为$a m_{1,1}+bm_{1,2}=d$。
    此时，$F(d)<F(m_{1,1})$，此时，新得到的$M'$满足$F(M')<F(M)$。

    再通过调整行和列的位置，我们还可假设$F(m'_{1,1})=F(M')$，重复以上过程，
    一直到$m'_{1,j}$或者$m'_{i,1}$均被$m'_{1,1}$整除为止。

(2) 所有的$m_{1,j}$或者$m_{i,1}$都是$m_{1,1}$的倍数。

    此时，我们可以通过对$M$左右乘以初等矩阵消去第一行和第一列的数，使得$M$形如：

    \[
    M=\begin{pmatrix}
    a_{1}&  0&0  &0  \\
    0&  *&  *& * \\
    \cdots&\cdots & \cdots& \cdots \\
    0&  *&  *& *
    \end{pmatrix}
    \]
    我们注意到，通过上述操作，以上矩阵中所有$*$均为$a_{1}$的倍数：
    若不然，可以将这一行加到第一行，再次进行情形(1)的操作，这样$F(m_{1,1})$可以进一步减小。
    如此往复，一直到所有$*$均为$a_{1}$的倍数即可。
    对$*$构成的矩阵可以提出因子$a_1$，然后使用归纳假设即可。

特别地，以上的证明还给出了具体$P$和$Q$的算法。
:::

我们引入如下工具来证明唯一性：

::: lemma
给定$M\in \mathbf{M}_{p,q}(A)$，对$1\leqslant k\leqslant \min(p,q)$，
令$c_k(M)\subset A$为$M$的所有$k$阶子式所生成的理想。
当$k\leqslant 0$时，令$c_k(M)=A$；当$k>\min(p,q)$时，令$c_k(M)=0$。

对任意的$k\in {\mathbb{Z}}$，
对任意的$P\in {\mathbf{GL}}(p;A), Q\in {\mathbf{GL}}(q;A)$和$M\in \mathbf{M}_{p,q}(A)$，
如下等式成立：
\[
c_k(M)=c_k(P\cdot M\cdot Q).
\]
:::

::: proof
首先证明$c_k(M\cdot Q)\subset c_k(M)$。
考察$M\cdot Q$中由前$k$行和前$k$列所给的余子式：令$M(k)$为$M$的前$k$行所构成的$k\times q$的矩阵，
$Q(k)$为$Q$的前$k$列所构成的$q\times k$的矩阵，根据Cauchy–Binet公式，上述余子式为
\[
\det(M(k)\cdot Q(k))=\sum_{\underline{j}} \det(M(k)_{\underline{j}})\det(Q(k)_{\underline{j}})\subset  c_k(M).
\]
对于$M\cdot Q$的其它余子式也可类似讨论，这就证明了$c_k(M\cdot Q)\subset c_k(M)$。
由于$Q$是可逆矩阵，我们还有
\[
c_k(M)=c_k(M\cdot Q\cdot Q^{-1})\subset c_k(M\cdot Q).
\]
所以，$c_k(M)=c_k(M\cdot Q)$。对于$P$自然可以同样讨论。
:::

::: proof [Smith标准型唯一性的证明]
对于
\[
P\cdot M\cdot Q^{-1}=\left(\begin{array}{c|c}
\begin{matrix}
a_1&  &  &  &  \\
& a_2 &  &  &  \\
& & \ddots\\
& &  & a_r
\end{matrix} & \,{\Large\mathbf{0}}
\end{array}\right)
\]
我们显然有$c_k(P\cdot M\cdot Q^{-1})=(a_1\cdots a_k)=c_k(M)$，
这表明$a_1a_2\cdots a_k$完全被$M$决定。
由于每个主理想的生成元在伴随的意义下唯一，所以$a_1,a_1a_2, \cdots,a_1a_2\cdots a_r$被唯一决定。
通过相除，$a_1,a_2, \cdots,a_r$是唯一的。
:::

::: corollary [线性映射版本]
$A$是主理想整环，$M$和$N$是有限生成的自由$A$-模，
$\varphi\colon M\rightarrow N$是$A$-模同态并且$M\simeq A^q, N\simeq A^p$。
那么，存在$M$的基$u_1,\cdots,u_q$和$N$的基$v_1,\cdots,v_p$以及$a_1,\cdots,a_r\in A$，其中，
$r\leqslant \min(p,q)$，使得
\[
(a_1)\supset (a_2)\supset \cdots \supset (a_r), \ \ \varphi(u_i)=\begin{cases}a_iv_i, \ i\leqslant r; \\
0, \ i>r.
\end{cases}
\]
:::

::: proof
任选$M$的基$e_1,\cdots,e_q$和$N$的基$f_1,\cdots,f_p$，在这组基下模同态$\varphi$的矩阵可以表示为$M$。
则存在$(P,Q)\in  \mathbf{GL}(p;A)\times \mathbf{GL}(q;A)$，使得
\[
P\cdot M\cdot Q^{-1}=\left(\begin{array}{c|c}
\begin{matrix}
a_1&  &  &  &  & &\\
& \ddots &  &  &  &  &\\
& &   a_r & & & \\
& &    & 0& & &\\
& &    & & \ddots & &\\
& &    & & &  0
\end{matrix} & \,{\Large\mathbf{0}}
\end{array}\right)
\]
其中，不妨假设$p\leqslant q$。那么，
\[
\{u_1=Q\cdot e_1,\cdots,u_q=Q\cdot e_q\}, \ \ \{v_1=P\cdot f_1,\cdots,v_p=P\cdot f_p\}
\]
为所求的基。
:::

::: proposition [主理想整环上自由模的子模] {@prop:submodule-of-a-free-module-over-pid}
$A$为主理想整环，$M\simeq A^n$是有限生成的自由$A$-模，$N\subset M$为其子模，则$N$是自由的$A$-模。
进一步，存在$M$的基$\{e_1,\cdots,e_n\}$，$r\leqslant n$和$a_1,\cdots,a_r\in A$，
使得$(a_1)\supset (a_2)\supset \cdots \supset (a_r) $并且$a_1e_1,\cdots,a_re_r$是$N$的基。
:::

::: proof
根据 @prop:fg-mod-over-noetherian 以及 @rem:fg-mod-over-noetherian，$N$是有限生成的$A$-模，
所以存在$m\leqslant n$以及$A$-模同态
\[
\varphi\colon A^m\twoheadrightarrow N\subset M\simeq A^n,
\]
其中，${\rm Im}(\varphi)=N$。
对$\varphi$用上一推论，
则存在$A^m$的基$u_1,\cdots,u_m$和$M$的基$v_1,\cdots,v_n$以及$a_1,\cdots,a_r$，其中，
$r\leqslant \min(m,n)$，使得
\[
(a_1)\supset (a_2)\supset \cdots \supset (a_r), \ \ \varphi(u_i)=\begin{cases}a_iv_i, \ i\leqslant r; \\
0, \ i>r.
\end{cases}
\]
此时，$\{a_1v_1,\cdots,a_rv_r\}$是$N$的基。
:::

::: theorem [主理想整环上有限生成模的结构] {@them:pid-finite-classfication}
$A$是主理想整环，$M$有限生成的$A$-模，
则存在$r,s\in {\mathbb{Z}}_{\geqslant 0}$和$a_1,\cdots,a_s\in A$，
使得$(a_1)\supset (a_2)\supset \cdots \supset (a_s) $并且
\[
M\simeq A^r\oplus{A/(a_1)}\oplus{A/(a_2)}\oplus \cdots \oplus{A/(a_s)}.
\]
进一步，以上的$a_1,\cdots,a_s$在伴随的意义下唯一。
:::

::: remark
我们称$r$为$M$的**秩**并记作${\rm rank}(M)$。
:::

::: proof
由于$M$是有限生成的，所以存在满射的$A$-模同态$\varphi\colon N\rightarrow M$，其中，
$N$是有限生成的自由$A$-模。特别地，$M\simeq{N/{\rm Ker}(\varphi)}$。
根据 @prop:submodule-of-a-free-module-over-pid，存在$N$的基$e_1,\cdots,e_n$，使得
\[
{\rm Ker}(\varphi)\simeq A\cdot a_1e_1 \oplus \cdots \oplus A\cdot a_s e_s,
\]
其中，$s\leqslant n$并且$(a_1)\supset (a_2)\supset \cdots \supset (a_s)$，并且$a_s\neq 0$。
令$r=n-s$，那么，
\[
M\simeq{A^n/(A\cdot a_1e_1 \oplus \cdots \oplus A\cdot a_s e_s)}\simeq A^r\oplus{A/(a_1)}\oplus{A/(a_2)}\oplus \cdots \oplus{A/(a_s)}.
\]
这给出了主理想整环上有限生成模的结构定理的存在性部分的证明。
:::

::: remark
现在证明唯一性部分，即若有$r',s'\in {\mathbb{Z}}_{\geqslant 0}$和$a'_1,\cdots,a'_{s'}\in A$，
使得$(a'_1)\supset \cdots \supset (a'_{s'}) $且
\[
M\simeq A^{r'}\oplus{A/(a'_1)}\oplus  \cdots \oplus{A/(a'_{s'})}.
\]
那么，$r=r',s=s'$且$a_i$与$a'_i$伴随。

$x\in M$，如果存在$a\in A-\{0\}$，使得$a\cdot x=0$，就称$x$是**挠元素**。
不难看出，挠元素的全体$T(M)$是$M$的子模。特别地，根据以上两个关于$M$的分解，我们有
\[
T(M)\simeq{A/(a_1)}\oplus  \cdots \oplus{A/(a_{s})},\ \ T(M)\simeq{A/(a'_1)}\oplus  \cdots \oplus{A/(a'_{s'})},
\]
以及
\[
A^{r}\simeq{M/T(M)}, \ \ A^{r'}\simeq{M/T(M)}.
\]
从而，$A^r\simeq A^{r'}$。根据 @prop:Am-An，$r=r'$。

通过考虑$T(M)$的分解，我们以下假设$r=r'=0$。对于任意$a\in A$，假设
\[
a=up_1^{\alpha_1}\cdots p_k^{\alpha_k}, \ \ \alpha_i\geqslant 1, u\in A^\times,
\]
为其素因子的分解，其中，$p_1,\cdots,p_k$为两两不同的不可约元素。
那么，理想$\big\{(p_i^{\alpha_i})\big\}_{1\leqslant i\leqslant k}$两两互素。根据中国剩余定理，就有
\[
{A/(a)}\simeq{A/(p_1^{\alpha_1})}\times \cdots \times{A/(p_k^{\alpha_k})}.
\]
以上是环同构，它自然给出了$A$-模的同构：
\[
{A/(a)}\simeq{A/(p_1^{\alpha_1})}\oplus \cdots \oplus{A/(p_k^{\alpha_k})}.
\]
据此，
我们对$M\simeq{A/(a_1)}\oplus{A/(a_2)}\oplus \cdots \oplus{A/(a_s)}$和
$M\simeq{A/(a'_1)}\oplus{A/(a'_2)}\oplus \cdots \oplus{A/(a'_{s'})}$的每个直和分量进行分解，得到
\[
M\simeq  \bigoplus_{i=1}^{m} \left(\bigoplus_{j=1}^{n_i}{A/(p_i^{d_{i,j}})}\right), \ \ M\simeq  \bigoplus_{i=1}^{m'} \left(\bigoplus_{j=1}^{n'_i}{A/(q_i^{d'_{i,j}})}\right)
\]
我们证明$m=m'$，（通过调整顺序）$p_i$与$q_i$伴随，$n_{i}=n'_i$，$d_{i,j}=d'_{i,j}$。
由于$a_i$与$a'_i$可由$p_i,q_i,d_{i,j}$与$d'_{i,j}$唯一决定[^2]，这就将完成唯一性部分的证明。

首先证明$m=m'$且$p_i$与$q_i$伴随，其中，$i=1,\cdots,m$。实际上，对给定的不可约元$p$，令
\[
M_p\coloneqq\big\{x\in M\mid \text{存在 $k\geqslant 0$，使得 }p^k x=0, \big\}.
\]
对任意的不可约元素$q$，如果$p$与$q$不伴随，那么，对$k,d\geqslant 1$，存在$a,b\in A$，
使得$ap^k+bq^d=1$，从而，
\[
{A/(q^{d})}\rightarrow{A/(q^{d})}, \ \ x\mapsto p^k x,
\]
是双射：其逆映射为$x\mapsto a x$。
据此，根据分解$M\simeq  \bigoplus_{i=1}^{m} \left(\bigoplus_{j=1}^{n_i}{A/(p_i^{d_{i,j}})}\right)$，
我们有
\[
M_{p_1}=\bigoplus_{j=1}^{n_1}{A/(p_1^{d_{1,j}})}.
\]
利用第二个分解，必然存在某个（不妨设为）$q_1$，使得
\[
M_{q_1}=\bigoplus_{j=1}^{n'_1}{A/(p_1^{d'_{1,j}})}.
\]
这表明，$q_1=p_1$。利用归纳法，不难看出$m=m'$且$p_i$与$q_i$伴随。

最终，我们假设
\[
M\simeq \bigoplus_{j=1}^{n}{A/(p^{d_{j}})}, \ \ M\simeq \bigoplus_{j=1}^{n'}{A/(p^{d'_{j}})}.
\]
其中，
$d_1\leqslant \cdots \leqslant d_n, d'_1\leqslant \cdots \leqslant d'_{n'}$只要证明$n=n',d_j=d'_j$
即可。

不妨假设$l=d_n=\cdots=d_{k+1}>d_k\geqslant \cdots \geqslant d_1$并且$d_n\geqslant d'_n$。注意到映射
\[
{A/(p)}\rightarrow{p^{s-1}A/(p^{s}A)}, \ \ x\mapsto p^{s-1}x
\]
是同构。所以，
\[
p^{l-1} M\simeq \bigoplus_{j=1}^{n}{p^{l-1}A/(p^{d_{j}})}\simeq  \bigoplus_{j=k+1}^{n}{p^{l-1}A/(p^{l})}\simeq \bigoplus_{j=k+1}^{n}{A/(p)}.
\]
由于${A/(p)}$是域，通过考察$\dim_{{A/(p)}}p^{l-1} M$，
$d'_{n'}=d_n$并且它们在$\{d_j\}$与$\{d'_j\}$中出现的次数一样多。通过对$M$的子模
\[
M'=\{x\in M\mid p^{l-1}x=0\}
\]
进行讨论，我们就可以用归纳法完成证明。
:::

::: remark
由于交换群可被视为${\mathbb{Z}}$-模，以上定理重新给出有限生成交换群的结构定理，
请参考 @prop:classification-of-finitely-generated-abelian-groups。
:::

::: remark* (应用) [矩阵的标准型]
$K$是域，$V$是有限维$K$-线性空间，$T\in {\rm End}_{K}(V)$是$K$-线性映射，则$V$可被视为$K[X]$-模：
\[
K[X]\times V\rightarrow V, \ \  (P(X), v)\mapsto P(T)v,
\]
即对$P(X)=a_nX^n+\cdots+a_1X +a_0\in K[X]$，$a_0,\cdots,a_n \in K$，定义
\[
P(X)\cdot v = a_nT^n(v)+\cdots+a_1T(v) +a_0 v.
\]
由于$\dim_{K}V<\infty$，这显然是有限生成的$K[X]$-模。
根据分类 @them:pid-finite-classfication，
存在非零的首一多项式$P_1,\cdots,P_s\in K[X]$，
使得$(P_1)\supset (P_2)\supset \cdots \supset (P_s) $并且
\[
V\simeq{K[X]/(P_1(X))}\oplus{K[X]/(P_2(X))}\oplus \cdots \oplus{K[X]/(P_s(X))}.
\]
我们需要强调的是以上分解为$K[X]$-模的直和，也是$K$-线性空间的直和。

以上分解没有自由的部分，即$r=0$：根据Hamilton–Cayley定理，$P_{T}(T)=0$，其中，
$P_T(X)\in K[X]$是$T$的特征多项式，从而$P_T(X)$乘任何$v$都为$0$；我们还可以计算线性空间的维数，
若$r\geqslant 1$，则$\dim_K K[X]=\infty$，与$\dim_K V<\infty$矛盾。

对于每个$P_i(X)$，将它分解为不可约首一的多项式之积$P_i(X)=p_1(X)^{d_1} \cdots p_n(X)^{d_n}$。
根据中国剩余定理，我们有
\[
{K[X]/(P_1(X))}\simeq{K[X]/(p_1(X)^{d_1})}\times \cdots \times{K[X]/(p_n(X)^{d_n})}.
\]
这是环同构，也可被视作$K[X]$-模之间的同构：
\[
{K[X]/(P_1(X))}\simeq{K[X]/(p_1(X)^{d_1})}\oplus \cdots \oplus{K[X]/(p_n(X)^{d_n})}.
\]
这自然是$K$-线性空间之间的同构。

考虑一个因子$f(X)=p_i(X)^{d_i}$，假设
\[
f(X)=X^n+a_{n-1}X^{n-1}+\cdots+a_1X+a_0.
\]
那么，${K[X]/(f(X))}$作为线性空间的维数为$n$并且$1,X,\cdots,X^{n-1}$为一组基。此时，映射$T$对应着
\[
T\colon{K[X]/(f(X))}\rightarrow{K[X]/(f(X))},  \ \ Q(X)\mapsto XQ(X).
\]
从而，
\[
T\colon1\mapsto X, X\mapsto X^2,\cdots, X^{n-2}\mapsto X^{n-1}, \ X^{n-1}\mapsto -a_0-a_1X\cdots-a_{n-1}X^{n-1}.
\]
这个分量对应的矩阵为
\[
\begin{pmatrix}
0 & &  &  &  &-a_0\\
1&  0&  &  &  &-a_1\\
& 1&  & & & -a_2\\
& &  \ddots&  &  &\vdots\\
& &  & & 1 & -a_{n-1}
\end{pmatrix}
\]
以上是所谓的Frobenius标准型。

如果$K={\mathbb{C}}$（或更一般地假设$K$为代数封闭域），根据代数基本定理，
${\mathbb{C}}[X]$中每个不可约多项式均形如$X-\lambda$，其中，$\lambda \in {\mathbb{C}}$。
以上的分解就给出了如下的直和：
\[
V\simeq \prod_{\text{有限和}}{{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}.
\]
我们现在研究$T$在一个直和项上的作用：
\[
T\colon{{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}\rightarrow{{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}, \ \ Q(X)\mapsto X\cdot Q(X).
\]
此时，
我们选取$1,X-\lambda,\cdots, (X-\lambda)^{d-1}$作为${\mathbb{C}}$-线性空间
${{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}$的基：
这$d$个向量显然张成${{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}$；它们是线性无关的：否则，
存在$a_0,\cdots,a_{d-1}$使得在${{\mathbb{C}}[X]/\big((X-\lambda)^{d}\big)}$中
\[
a_0+a_1(X-\lambda)+\cdots+a_{d-1}(X-\lambda)^{d-1}=0,
\]
即
\[
a_0+a_1(X-\lambda)+\cdots+a_{d-1}(X-\lambda)^{d-1}\in \big((X-\lambda)^{d}\big).
\]
所以，$(X-\lambda)^{d}$整除$a_0+a_1(X-\lambda)+\cdots+a_{d-1}(X-\lambda)^{d-1}$。
通过观察次数，我们得到$a_0=\cdots=a_{d-1}=0$。
在这组基$\{e_1=1, e_2=X-\lambda,\cdots, e_d=(X-\lambda)^{d-1}\}$下，此时，$T$的作用为
\[
X\cdot e_1=e_2+\lambda e_1,  \ \ X\cdot e_2= e_3+\lambda e_2, \cdots, X\cdot e_d=\lambda e_d.
\]
它对应的矩阵是
\[
\begin{pmatrix}
\lambda & 1 &  &  &  \\
&  \lambda & 1 &  &  \\
& & \ddots\\
& &  & \lambda & 1\\
& &  & & \lambda
\end{pmatrix}
\]
以上是所谓的Jordan标准型。
:::

[^1]: 这里要求$q\geqslant 2$。当$q=1$时，命题显然成立。
[^2]: 请参考 @rem:proof-uniquness-abel 中的证明。
