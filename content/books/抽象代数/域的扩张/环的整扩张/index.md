---
title: 环的整扩张
notices:
  - name: 问题
    items:
      - “数域的整数环”一节中引理的结论 $\big(A^\times\big)^{-1}B=L$ 里，$A^\times$ 似乎应为 $A$ 的非零元之集 $A-\{0\}$（$A^\times$ 在本页其他地方表示可逆元群）。
      - “二次数域的整数环”例子最后的公式中，条件 $a\equiv b \bmod 2$ 似乎应为 $m\equiv n \bmod 2$。
---

{@sec:integral-extension}

与域的代数扩张类似，我们还可以考虑环的整扩张。
给定环$B$及其子环$A\subset B$，我们称$B$是$A$的**扩张**。
对任意的$x\in B$，如果存在**首一**的多项式$P(X)\in A[X]$，使得$P(x)=0$，
就称$x$在$A$上是**整的**或者说$x$是$A$上的**整元素**。

给定环$A$及其扩张$B$，$B$中在$A$上的整元素可以用有限生成$A$-模来刻画。
由于在大部分数论或代数几何的场合，$A$都是Noether环从而有限生成$A$-模为Noether模，
我们暂且偏离主题引入Noether模的概念。

## Noether模

所谓Noether环是每个理想均为有限生成的环，其等价定义是上升理想链的稳定条件，即对$A$中任意理想链
\[
I_1\subset I_2\subset \cdots \subset I_n\subset \cdots,
\]
存在$n_0\geqslant 1$，使得当$n\geqslant n_0$时，$I_{n}=I_{n_0}$。

::: definition
$A$是环（不要求$A$是Noether环），$M$是$A$-模。若下述等价条件之一成立：

- 1\) $M$的每个子模都是有限生成的；

- 2\) $M$满足**上升子模的稳定条件**，即对$M$中任意的子模链
  \[
  M_1\subset M_2\subset \cdots \subset M_n\subset \cdots
  \]
  存在$n_0\geqslant 1$，使得当$n\geqslant n_0$时，$M_{n}=M_{n_0}$。

我们称$M$是**Noether 模**。
:::

::: remark
以上两个条件等价性与Noether环情形的证明完全一致，我们留给对此怀疑的同学去验证。
:::

::: remark
Noether环上有限生成模是Noether模。

根据 @prop:fg-mod-over-noetherian，Noether环上有限生成模的子模是有限生成的，所以定义中的1)成立。
:::

::: lemma
给定$A$-模的正合列
\[
0\rightarrow M'\stackrel{\varphi}{\longrightarrow} M\stackrel{\psi}{\longrightarrow}  M''\rightarrow 0,
\]
则$M$是Noether模等价于$M'$和$M''$均为Noether模。
:::

::: proof
假设$M$是Noether模。
每个$M'$的子模都是$M$的子模，从而是有限生成的，所以$M'$是Noether模；作为$M$的商模，
每个$M''$中的上升子模序列都可以提升为（在$M\rightarrow M''$下的逆像）$M$中的上升子模序列，即
\[
M''_1\subset M''_2\subset \cdots \subset M''_n\subset \cdots
\]
为$M''$中的子模链，那么，
\[
\psi^{-1}(M''_1)\subset \psi^{-1}(M''_2)\subset \cdots \subset \psi^{-1}(M''_n)\subset \cdots
\]
为$M$中的子模链，从而有$n_0$，使得$n\geqslant n_0$时，$\psi^{-1}(M''_n)=\psi^{-1}(M''_{n_0})$。
作用$\psi$，就有$n\geqslant n_0$时，$M''_n=M''_{n_0}$。所以，$M''$为Noether模。

假设$M'$和$M''$为Noether模。$N$为$M$的子模，则在$M''=
  {M/M'}
$中，$N$对应着$
  {N/(N\cap M')}
$，即
\[
\psi\colon N\twoheadrightarrow
  {N/(N\cap M')}
\subset M''=
  {M/M'}
.
\]
根据$M''$的Noether性，存在$x_1,\cdots,x_k\in N$，使得$\{x_i+M'\}_{i\leqslant k}$生成了$
  {N/(N\cap M')}
$；根据$M'$的Noether性，存在$y_1,\cdots,y_l\in N\cap M'$，使得$\{y_j\}_{j\leqslant l}$生成了$N\cap M'$。从而，对任意的$z\in N$，利用$\{x_i+M'\}_{i\leqslant k}$，存在$a_i\in A$，使得$z-\displaystyle\sum_{i\leqslant k}a_i x_i\in M'$，从而，$z-\displaystyle\sum_{i\leqslant k}a_i x_i\in M'\cap N$；再利用$\{y_j+M'\}_{j\leqslant l}$，我们就有$b_j\in A$，
使得
\[
z-\sum_{i\leqslant k}a_i x_i=\sum_{j\leqslant l}b_j y_j.
\]
这表明有限集$\{x_i \}_{i\leqslant k}\cup\{y_j\}_{j\leqslant l}$生成了$N$。所以$M$是Noether模。
:::

::: remark
$A$是Noether环，则对任意自然数$n$，$A^n$是Noether模。
实际上，当$n=1$时，将$A$视作是$A$-模，其理想也就是子模均为有限生成的，所以$A$是Noether模。
考虑自然的正合列
\[
0\rightarrow A \longrightarrow A\oplus A^n \longrightarrow   A^n\rightarrow 0,
\]
利用上述引理对$n$进行归纳，则$A^n$是Noether模。

由于每个有限生成的$A$-模是某个$A^n$的商模，上述引理也可以推出Noether环上有限生成模是Noether模。
:::

## 整性的刻画

我们现在研究环扩张中的整元素。

::: proposition
给定环的扩张$A\subset B$。
对$x\in B$，令$A[x]=\big\{P(x)\bigm|P(X)\in A[X]\big\}\subset B$，这是$A$-模。则如下三个条件等价：

- 1\) $x$在$A$上是整的；

- 2\) $A[x]$是有限生成模；

- 3\) 存在有限生成的$A$-子模$M\subset B$，使得$1\in M$并且$x\cdot M \subset M$。

:::

::: proof
1)$\Rightarrow$2)：假设$x^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0$，其中，$a_i\in A$。
那么，对任意的$y\in A[x]$，那么，
\[
y=a_0 +a_1x+\cdots+ a_Nx^N, \ \ a_i\in A.
\]
凡是$y$的表达式中含有$x$的比$n-1$次更高的次幂，
就用$x^n=-\big(a_{n-1}x^{n-1}+\cdots+a_1x+a_0\big)$进行替换。如此反复，一直到$N<n$为止。
从而，$1,x,\cdots,x^{n-1}$生成了$A[x]$。

2)$\Rightarrow$3)是显然的；现在证明3)$\Rightarrow$1)。
假设$\{x_1,\cdots,x_n\}\subset M$生成了$M$，则对每个$i\leqslant n $，$x\cdot x_i\in M$。
从而，存在$\{a_{ij}\}_{1\leqslant i,j\leqslant n}\subset A$，使得
\[
x\cdot x_i=a_{i1}x_1+a_{i2}x_2+\cdots+a_{in}x_n.
\]
令$A=(a_{ij})\in \mathbf{M}_n(A)$为$n\times n$的$A$-系数矩阵，以上关系可以用矩阵表达：
\[
\big(x\cdot \mathbf{I}-A\big)\begin{pmatrix}
x_1\\
\vdots\\
x_n
\end{pmatrix}=0.
\]
左右两边乘以$\big(x\cdot \mathbf{I}-A\big)$的伴随矩阵$\big(x\cdot \mathbf{I}-A\big)^*$，我们得到
\[
\big(x\cdot \mathbf{I}-A\big)^*\big(x\cdot \mathbf{I}-A\big)\begin{pmatrix}
x_1\\
\vdots\\
x_n
\end{pmatrix}=\det\big(x\cdot \mathbf{I}-A\big)\cdot \mathbf{I}\begin{pmatrix}
x_1\\
\vdots\\
x_n
\end{pmatrix}=0.
\]
即对任意的$i\leqslant n$，有$\det\big(x\cdot \mathbf{I}-A\big)x_i=0$。
由于$1\in M$，从而存在$b_1,\cdots,b_n$，使得
\[
b_1x_1+b_2x_2+\cdots+b_nx_n=1.
\]
两边同时乘以$\det\big(x\cdot \mathbf{I}-A\big)$，就给出了$\det\big(x\cdot \mathbf{I}-A\big)=0$。
将这个行列式按定义展开，就给出了$x$所满足的首一的代数方程。
:::

::: corollary
给定环的扩张$A\subset B$，如果$x,y\in B$在$A$上是整的，那么，$A[x,y]$是有限生成$A$-模。
特别地，$x\pm y$和$x\cdot y$在$A$上也是整的。
:::

::: proof
$x,y\in B$在$A$上是整的，所以存在$m,n\geqslant 1$，使得
\[
x^n=a_{n-1}x^{n-1}+\cdots +a_1x+a_0,\ \ y^m=b_{m-1}y^{m-1}+\cdots+b_1 y+b_0,
\]
其中，系数$a_i,b_j\in A$。
通过以上关系，我们把某个$A[x,y]$中元素里的$x^n$和$y^m$替换为较小的次数，所以，
$\{x^iy^j\bigm|0\leqslant i\leqslant n, 0\leqslant j\leqslant m\}$生成了$A[x,y]$。
根据上述命题，$A[x,y]$中的每个元素$z$都满足$z\cdot A[x,y] \subset A[x,y]$而且$1\in A[x,y]$。
所以，$z$是整元素。
:::

::: remark
类似地，若$x_1,\cdots,x_k\in B$在$A$上是整的，则$A[x_1,\cdots,x_k]$是有限生成$A$-模。
:::

根据推论，我们有如下定义：

::: definition
给定环的扩张$A\subset B$，集合
\[
\overline{A}\coloneqq\{x\in B\mid \text{$x$ 在 $A$ 上是整的}\}
\]
是$B$的子环并且$A\subset \overline{A}$。我们称$\overline{A}$为$A$在$B$中的**整闭包**。
若$\overline{A}=B$，则称$B$在$A$上是**整的**，即$B$中的每个元素都是$A$上的整元素。

当$A$是整环时，考虑$K={\rm Frac}(A)$。若$A$在$K$中的整闭包是$A$，则称$A$是**整闭的**。
:::

::: lemma
给定环的扩张$A\subset B\subset C$，若$B$在$A$上是整的，$C$在$B$上是整的，则$C$在$A$上是整的。
:::

::: proof
对任意的$x\in C$，存在$b_0,\cdots,b_{n-1}\in B$，使得
\[
x^n+b_{n-1}x^{n-1}+\cdots+b_1x+b_0=0.
\]
由于$b_0,\cdots,b_{n-1}$在$A$上是整的，所以$A[b_0,\cdots,b_{n-1}]$为有限生成的$A$-模。
根据上式所提供的代数关系，通过把$x$的高次幂替换成低次幂，
$M=A[b_0,\cdots,b_{n-1},x]$仍为有限生成的$A$-模。特别地，$x\cdot M\subset M$并且$1\in M$。
所以，$x$在$A$上是整的。
:::

::: lemma
唯一分解整环是整闭的。
:::

::: proof
$A$是唯一分解整环，令$x=\frac{b}{a}\in {\rm Frac}(A)$是整元素，其中，$a$与$b$互素。
那么，存在$a_0,\cdots,a_{n-1}\in A$，使得
\[
x^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0.
\]
由于$x=\frac{b}{a}$，对上述方程两边同时乘$a^n$给出：
\[
b^n=-\big(a_{n-1}ab^{n-1}+\cdots+a_1a^{n-1}b+a_0a^n\big).
\]
令$p$为$a$的一个不可约因子（如果这样的因子不存在，那么$a$为$A$中可逆元，命题自然成立），
则$p$整除方程右边的每一项，从而$p\mid b^n$，所以，$p\mid b$，这和$a$与$b$互素矛盾。
从而，$a\in A^\times$，进而$x\in A$。
:::

## 数域的整数环

$A$是整环，$K={\rm Frac}(A)$为其分式域，$
  {L/K}
$为代数扩张。我们最关心如下场景下的整扩张：
\[
\begin{tikzcd}
B \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]\\
A  \arrow[r, dash]   &K\\
 \end{tikzcd}
\]
其中，$B$为$A$在$L$中的整闭包。特别地，$B$是$A$的整扩张。

::: definition
所谓的**数域**$L$，指的是$L$为${\mathbb{Q}}$的有限扩张。
:::

::: example
考虑上述场景在$L$为数域时的情形，即$A={\mathbb{Z}}$，$K={\mathbb{Q}}$，
$L$为${\mathbb{Q}}$的有限扩张，$B=\mathcal{O}_L$为${\mathbb{Z}}$在$L$中的整闭包：
\[
\begin{tikzcd}
\mathcal{O}_L \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]\\
{\mathbb{Z}}  \arrow[r, dash]   &{\mathbb{Q}}\\
 \end{tikzcd}
\]
我们将$\mathcal{O}_L$称为数域$L$的**代数整数环**。
:::

::: lemma
$A$是整环，$K={\rm Frac}(A)$为其分式域，$
  {L/K}
$为代数扩张，$B$为$A$在$L$中的整闭包。那么，$\big(A^\times\big)^{-1}B=L$。
:::

::: proof
对任意$x\in L$，由于$
  {L/K}
$是代数扩张，所以存在$a_i,b_i \in A$，其中，$i,j\leqslant n-1$并且$b_0,\cdots,b_{n-1}$非零，使得
\[
x^n+\frac{a_{n-1}}{b_{n-1}}x^{n-1}+\cdots+\frac{a_1}{b_1}x+\frac{a_0}{b_0}=0.
\]
令$d=b_{n-1}b_{n-2}\cdots b_1b_0\in A$。对上式两边同乘$d^n$，得到
\[
(d\cdot x)^n+c_{n-1}(d\cdot x)^{n-1}+\cdots+c_1 (d\cdot x)+c_0=0,
\]
其中，$c_i\in A$。所以，$dx\in B$，即$x\in \big(A^\times\big)^{-1}B$。
:::

::: proposition {@prop:min-poly-is-integral}
$A$是整环并且$A$是整闭的，$K={\rm Frac}(A)$，$
  {L/K}
$为代数扩张，$B$为$A$在$L$中的整闭包。那么，对任意$x\in B$，其极小多项式$P(X)\in A[X]$。
:::

::: proof
由于$x\in B$，存在$P_0(X)\in A[X]\subset K[X]$并且$P_0(X)$是首一的多项式，使得$P_0(x)=0$。
特别地，$P(X)\mid P_0(X)$。我们在$K$的代数闭包中讨论。
根据 @prop:field-ext-tech，即代数扩张的同态延拓的性质，
不妨假设$L\subset \overline{K}$并且$\overline{A}$为$A$在$\overline{K}$中的整闭包。
根据定义，我们自然有$B\subset \overline{A}$：
\[
\begin{tikzcd}
\overline{A} \arrow[d,dash] \arrow[r,dash]   &\overline{K} \arrow[d,dash]\\
B\arrow[d,dash] \arrow[r,dash]   &L \arrow[d,dash]\\
A \arrow[r,dash]   &K\\
 \end{tikzcd}
\]

令$Z(P_0)$和$Z(P)$分别为$P_0(X)$和$P(X)$在$\overline{K}$中的根的集合。
根据$P(X)\mid P_0(X)$，$Z(P)\subset Z(P_0)$。
由于$P_0(X)\in A[X]$是首一的，所以对任意$y\in Z(P_0)$，$y$在$A$上是整的，
即$Z(P_0)\subset \overline{A}$。从而，$Z(P)\subset \overline{A}$。
根据Vieta定理，$P$的系数均为$Z(P)$中元的整系数对称多项式，
而$\overline{A}$是环，所以$P(X)\in \overline{A}[X]$，
进而$P(X)\in \overline{A}[X]\cap K[X]$。根据$A$的整闭性，$P\in A[X]$。
:::

::: remark [$B$作为$A$-模的有限性]
假设$A$是整闭的Noether（整）环，$K={\rm Frac}(A)$，$
  {L/K}
$为有限可分扩张，$B$为$A$在$L$中的整闭包，则$B$是有限生成的$A$-模。特别地，若$A$是主理想整环，则$B$是自由$A$-模并且其秩为$[L:K]$。

我们之后将证明这个命题。
:::

- 数域的情形

::: example
考虑$L$是数域的情形：
\[
\begin{tikzcd}
\mathcal{O}_L \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]\\
{\mathbb{Z}}  \arrow[r, dash]   &{\mathbb{Q}}\\
 \end{tikzcd}
\]
我们将证明，$
  {L/{\mathbb{Q}}}
$总是可分扩张。此时，$A={\mathbb{Z}}$是主理想整环，$\mathcal{O}_L$为数域$L$的代数整数环。特别地，$\mathcal{O}_L$是秩为$[L:{\mathbb{Q}}]$的自由交换群。
:::

- 函数域的情形

::: example
${\mathbb{F}}_q$是有限域，$A={\mathbb{F}}_q[X]$，$K={\rm Frac}(A)={\mathbb{F}}_q(X)$，$
  {L/K}
$为有限扩张，$B$为$A$在$L$中的整闭包：
\[
\begin{tikzcd}
B \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]\\
{\mathbb{F}}_q[X] \arrow[r, dash]   &{\mathbb{F}}_q(X)\\
 \end{tikzcd}
\]
在此情形下，并不需要假设$
  {L/{\mathbb{F}}_q(X)}
$是可分的[^1]。
此时，${\mathbb{F}}_q[X]$是主理想整环，$B$是有限生成的${\mathbb{F}}_q[X]$-模。
特别地，$B$是自由的${\mathbb{F}}_q[X]$模且其秩为$[L:{\mathbb{F}}_q(X)]$。
:::

::: example [二次数域的整数环]
$d$是不包含任何平方因子的整数，$K={\mathbb{Q}}(\sqrt{d})$。
那么，$K$中的元素均形如$x=a+b\sqrt{d}\in K$，其中，$a,b\in{\mathbb{Q}}$。
此时，$[{\mathbb{Q}}(\sqrt{d}):{\mathbb{Q}}]=2$，所以${\mathbb{Q}}(\sqrt{d})$被称作是二次数域。
我们计算$\mathcal{O}_K=\mathcal{O}_{{\mathbb{Q}}(\sqrt{d})}$。

考虑$x=a+b\sqrt{d}\in K$的极小多项式，由于
\[
x^2-2ax+a^2-b^2d=0,
\]
所以$x\in \mathcal{O}_K$等价于$2a\in {\mathbb{Z}}, a^2-b^2d\in {\mathbb{Z}}$。特别地，我们有
\[
(2a)^2-(2b)^2d\in {\mathbb{Z}} \ \Rightarrow \ (2b)^2d\in {\mathbb{Z}}.
\]
由于整数$d$没有平方因子，所以，$2b\in {\mathbb{Z}}$（$d$不能抵消$b$的$(2b)^2$分母）。
作为总结，$x\in \mathcal{O}_K$的一个必要条件为
\[
2a,2b\in {\mathbb{Z}}.
\]
特别地，${\mathbb{Z}}+{\mathbb{Z}}\sqrt{d}\subset \mathcal{O}_K$。这是$\mathcal{O}_K$的子环。

以下对$a$分情况讨论：

- $a\in {\mathbb{Z}}$。类似地讨论给出$a,b\in {\mathbb{Z}}$。

- $a=\frac{1}{2}a'$，其中，$a'\in {\mathbb{Z}}$为奇数。

  根据$a^2-b^2d\in {\mathbb{Z}}$，$b\notin {\mathbb{Z}}$。
  所以，$b=\frac{1}{2}b'$，其中，$b'\in {\mathbb{Z}}$为奇数。那么，
  \[
  a^2-b^2d\in {\mathbb{Z}} \ \Rightarrow \frac{1}{4}\big(a'^2-b'^2d\big)\in {\mathbb{Z}}.
  \]
  由于$a'^2\equiv b'^2\equiv 1 \bmod 4$，所以上式等价于$d\equiv 1 \bmod 4$。

综上所述，我们有
\[
\mathcal{O}_{{\mathbb{Q}}(\sqrt{d})}=\begin{cases}
m+n\sqrt{d}, \ \ m,n\in {\mathbb{Z}} \ \ \ \ &d\equiv 2,3 \bmod 4;\\
\frac{1}{2}(m+n\sqrt{d}), \ \ m,n\in {\mathbb{Z}} ,a\equiv b \bmod 2, \ \ \ \ &d\equiv 1 \bmod 4.
\end{cases}
\]
其中，$d$是不包含任何平方因子的整数。
:::

::: example
${\mathbb{Z}}[\sqrt{5}]$不是整闭的。
\[
\begin{tikzcd}
 \mathcal{O}_{{\mathbb{Q}}(\sqrt{5})} \arrow[d,dash] \arrow[r,dash]   &{\mathbb{Q}}(\sqrt{5}) \arrow[dd,dash]\\
{\mathbb{Z}}[\sqrt{5}]\arrow[d,dash]   & \\
{\mathbb{Z}} \arrow[r,dash]   &{\mathbb{Q}}
  \end{tikzcd}
\]
实际上，
$x=\frac{1}{2}(-1+\sqrt{5})\in {\mathbb{Q}}(\sqrt{5})={\rm Frac}({\mathbb{Z}}[\sqrt{5}])$在
${\mathbb{Z}}[\sqrt{5}]$上是整的，但是$x\notin {\mathbb{Z}}[\sqrt{5}]$。
:::

[^1]: 证明该结论要先研究$ {L/K} $是纯不可分的情形，由于此结论与课程主旨并不直接关联，
  我们在讲义中不给出其细节。
