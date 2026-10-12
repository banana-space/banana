---
title: 关于理想的一些操作
---

$A$是环，$I_1,\cdots,I_n$是$A$的理想，定义
\[
\begin{aligned}
&I_1+\cdots+I_n=\{x_1+x_2+\cdots +x_n\mid x_1\in I_1,\cdots, x_n\in I_n\},\\
&I_1\cdot I_2 \cdots \cdot I_n=\big\{\text{有限个形如 $x_1x_2\cdots x_n$ 的元素之和，其中 }x_1\in I_1,\cdots, x_n\in I_n\big\}.
\end{aligned}
\]
很明显，这两个集合是$A$的理想并且$I_1\cdot I_2 \cdots \cdot I_n\subset I_1+\cdots+I_n$。
当$n=2$时，$I_1+I_2$中的元素形如$x+y$，其中$x\in I_1,y\in I_2$；
$I_1\cdot I_2$中的元素形如$\sum_{i=1}^m x_iy_i$，其中，$x_i\in I_1$，$y_i\in I_2$。

我们注意到如果$\{I_i\}_{i\in \Lambda}$是理想的集合，那么，$\bigcap_{i\in \Lambda}I_i$也是理想。
给定$A$的非空子集$S\subset A$，包含$S$的所有理想之交是包含$S$的最小理想（在包含关系下），
我们把它记作$(S)$并称之为**由$S$所生成的理想**。很明显，$(S)$中的元素均形如
\[
\sum_{\text{有限和}} a\cdot s, \ \ \text{其中} \ s\in S, a\in A.
\]
若理想$I$由有限集$\{a_1,\cdots,a_k\}$生成，则称$I$是**有限生成的**并记作$I=(a_1,\cdots,a_k)$。

若$I$由一个元素$a$生成，则称$I$是**主理想**并记作$I=(a)$。

::: remark
假设$I_1=(a_1,\cdots,a_n),I_2=(b_1\cdots,b_m)$，那么，
\[
I_1+I_2=(a_1,\cdots,a_n, b_1,\cdots,b_m), \ \ I_1\cdot I_2=(a_ib_j,1\leqslant i\leqslant n, 1\leqslant j\leqslant m).
\]
:::

::: definition
$A$是整环，若其理想均为主理想，则称$A$是**主理想整环**。
:::

::: example
$\mathbb{Z}$是主理想整环。

对任意的理想$I\subset \mathbb{Z}$，不妨设$I\neq (0)$。
令$d=\min I\cap {\mathbb{Z}}_{> 0}$，则$I=(d)$。
实际上，对任意$a\in I$，根据带余除法，存在唯一的$b\in \mathbb{Z}$和$r\in [0,d)$，
使得$a=bd+r$。我们注意到$r=a-bd\in I$而$d=\min I\cap {\mathbb{Z}}_{> 0}$，
从而$r=0$，即$a=bd$，所以，$a\in (d)$。
根据$a$选取的任意性，$I\subset (d)$，所以$I=(d)$。
:::

::: example
$K$是域，则多项式环$K[X]$是主理想整环。

对任意的非零理想$I\subset K[X]$，令$P(X)$为$I$中次数最小的多项式。我们证明$I=\big(P(X)\big)$。
实际上，对任意$Q(X)\in I$，根据带余除法，存在唯一$A(X),R(X)\in K[X]$，
使得$Q(X)=A(X)P(X)+R(X)$并且$\deg(R)<\deg(P)$或$R(X)=0$。
根据$P$的次数最小性，从而$R=0$，即$Q(X)=A(X)P(X)$，所以$Q(X)\in (P)$。
根据$Q$选取的任意性，$I \subset \big(P(X)\big)$，所以$I=\big(P(X)\big)$。
:::

::: definition
$A$是环，$\mathfrak{m}\subset A$是理想并且$\mathfrak{m}\neq A$。
若$\mathfrak{m}$在包含关系下是最大的，即对任意理想$I$，
$\mathfrak{m} \subset I \subset A$意味着$I=\mathfrak{m}$或$I=A$成立，
则称$\mathfrak{m}$是**极大理想**。
:::

::: remark
极大理想是素理想。

实际上，对任意$x\notin \mathfrak{m}$，根据极大性，$(\mathfrak{m},x)=A$。
由于$(\mathfrak{m},x)$中的元素均形如$ax+m$，其中$m\in  \mathfrak{m}, a\in A$，
从而存在$m\in  \mathfrak{m}, a\in A$，使得$ax+m=1$。
类似地，对任意$y\notin \mathfrak{m}$，存在$m'\in  \mathfrak{m}, a'\in A$，使得$a'y+m'=1$。
据此，我们有
\[
aa'xy=(1-m)(1-m')=1 \bmod\mathfrak{m}.
\]
所以，$xy\notin \mathfrak{m}$（否则$1\in \mathfrak{m}$）。这就证明了$\mathfrak{m}$是素理想。
:::

::: proposition
$A$是环，$I$是理想并且$I\neq A$，则存在极大理想$\mathfrak{m}$，
使得$\mathfrak{m}\neq A$并且$\mathfrak{m}\supset I$。
:::

::: proof
考虑偏序集$\mathcal{J}=\{J\supset I, \text{$J$ 是理想}，J\neq A\}$，
其中，偏序由包含关系定义，即$J_1\preceq J_2$指的是$J_1\subset J_2$。
此时，对任意的全序子集$S\subset \mathcal{J}$，令
\[
J_*=\bigcup_{J\in S}J.
\]
现在证明$J_*$是理想：对任意的$x,y\in J_*$，存在$J_1\in S$，$J_2\in S$，使得$x\in J_1$，$y\in J_2$。
由于$S$是全序子集，不妨假设$J_1\supset J_2$，从而$x,y\in J_1$。
此时，$x\pm y\in J_1\subset J_*$。这表明$J_*$是$A$的加法子群。
另外，对任意的$a\in A$，$ax\in J_1\subset J_*$，所以，$J_*$是理想。

由于对任意的$J\in S$，$1\notin J$，所以，$1\notin J_*$，从而，$J_*\neq A$。
所以，$J_*\in \mathcal{J}$。根据定义，$J_*$是$S$的上界。
根据Zorn引理，$\mathcal{J}$有极大元$\mathfrak{m}$，这是极大理想。
:::

::: remark [利用极大理想构造域]
$A$是交换环，那么理想$\mathfrak{m}$是极大理想当且仅当${A/\mathfrak{m}}$是域。

若$\mathfrak{m}$是极大理想，则对任意非零$x+\mathfrak{m}\in {A/\mathfrak{m}}$，
有$x\notin \mathfrak{m}$。
根据极大性，$(\mathfrak{m},x)=A$，从而存在$m\in  \mathfrak{m}, y\in A$，使得$xy+m=1$。
这表明$y+\mathfrak{m}$是$x+\mathfrak{m}$在${A/\mathfrak{m}}$中的乘法逆。

反之，假设$\mathfrak{m}\subset I\subset A$，
不难看出${I/\mathfrak{m}} \subset {A/\mathfrak{m}}$是理想。
由于${A/\mathfrak{m}}$是域，则${I/\mathfrak{m}} =0$或者${A/\mathfrak{m}}$，从而，
$I=\mathfrak{m}$或者$A$。
:::

::: example
$p$是素数，由于${{\mathbb{Z}/p\mathbb{Z}}}$是域，
所以$(p)=p{\mathbb{Z}}$是${\mathbb{Z}}$的极大理想（也可直接证明）。
然而，$(0)\subset {\mathbb{Z}}$是素理想但不是极大理想。
:::

我们以下来证明中国剩余定理。$A$是交换环，$I_1,\cdots,I_n\subset A$是理想，我们有自然的环同态：
\[
\pi\colon A\rightarrow {A/I_1} \times {A/I_2} \times \cdots \times {A/I_n} , \ \ x\mapsto \big(\pi_1(x),\pi_2(x),\cdots, \pi_n(x)\big).
\]
其中，$\pi_i\colon A\rightarrow {A/I_i}$是商映射。显而易见，${\rm Ker}(\pi)=\bigcap_{i=1}^n I_i$。

给定理想$I,J\subset A$，若$I+J=A$，就称$I$与$J$**互素**。换而言之，$I$与$J$互素当且仅当$1\in I+J$。
这个概念是从整数环中类比而来的：$m,n\in {\mathbb{Z}}$是互素的，根据Bézout定理，
存在$a,b\in {\mathbb{Z}}$，使得$am+bn=1$，从而，理想$(m)$与$(n)$互素。

::: lemma [中国剩余定理]
$A$是交换环，$n\geqslant 2$，$I_1,\cdots,I_n\subset A$是理想并且两两互素。
那么，$\displaystyle\bigcap_{i=1}^n I_i=\prod_{i=1}^n I_i$。
进一步，$\pi\colon A\rightarrow {A/I_1} \times \cdots \times {A/I_n}$是满射，从而有环同构
\[
{A/(I_1\cdot I_2 \cdots I_n)} \stackrel{\simeq}{\longrightarrow} {A/(I_1\cap I_2 \cap \cdots \cap I_n)} \stackrel{\simeq}{\longrightarrow} {A/I_1} \times {A/I_2} \times \cdots \times {A/I_n} .
\]
:::

::: proof
对$n$进行归纳。$n=1$是显然的。
当$n=2$的时候，由于$I_1\cdot I_2\subset I_1\cap I_2$，只要证明反向的包含关系：
对任意$x\in I_1\cap I_2$，证明$x\in I_1\cdot I_2$。
根据$I_1+I_2=A$，存在$a_1\in I_1,a_2\in I_2$，使得$a_1+a_2=1$。据此，
\[
x=1\cdot x=\underbrace{a_1}_{\in I_1}\cdot \underbrace{x}_{\in I_2}+\underbrace{a_2}_{\in I_2}\cdot \underbrace{x}_{\in I_1}\in I_1\cdot I_2.
\]
先证明$\pi$是满射：对任意的$x_1+I_1\in {A/I_1} ,x_2+I_2\in {A/I_2}$，构造$x\in A$，
使得$x-x_1\in I_1, x-x_2\in I_2$。实际上，以上的$a_1+a_2=1$给出了
\[
\pi(a_1)=(0,1),\ \ \pi(a_2)=(1,0).
\]
从而，将$a_1+a_2=1$视作是单位分解，我们有$x=a_1x_1+a_2x_2$满足$x-x_1\in I_1, x-x_2\in I_2$。

假设命题对$n-1$成立，其中，$n\geqslant 3$。
我们先证明$I_1$与$I_2\cdot I_3\cdots I_n$互素，即$I_1+I_2\cdot I_3\cdots I_n=A$。
对每个$k\geqslant 2$，根据$I_1+I_k=A$，存在$a_k\in I_1, b_k\in I_k$，$a_k+b_k=1$。所以，
\[
1=(a_2+b_2)\cdots (a_n+b_n)= a+\underbrace{b_2\cdots b_n}_{\in I_2\cdot I_3\cdots I_n},
\]
其中，$a$是含有某个$a_i$的单项式之和，从而$a\in I_1$。据此，$1\in I_1+I_2\cdot I_3\cdots I_n$。
根据$n=2$的情形以及归纳假设，我们就有
\[
I_1\cdot( I_2\cdot I_3\cdots I_n)=I_1\cap  \left(\bigcap_{i=2}^n I_i\right)=\bigcap_{i=1}^n I_i.
\]
另外，根据$n=2$的情形以及归纳假设，我们有满射
\[
{A/(I_1\cdot (I_2 \cdots I_n))} \stackrel{\simeq}{\longrightarrow} {A/I_1} \times {A/I_2\cdots I_n} \stackrel{\simeq}{\longrightarrow} {A/I_1} \times \left({A/I_2} \times \cdots \times {A/I_n} \right).
\]
命题得证。
:::

::: corollary [中国剩余定理]
若$n_1,\cdots,n_k$为两两互素的正整数，$n=n_1\cdots n_k$，则有环同构
\[
{{\mathbb{Z}}/n{\mathbb{Z}}} \stackrel{\simeq}{\longrightarrow} {{\mathbb{Z}}/n_1{\mathbb{Z}}} \times {{\mathbb{Z}}/n_2{\mathbb{Z}}} \times \cdots \times {{\mathbb{Z}}/n_k{\mathbb{Z}}} , \ \ x\bmod n \mapsto \big(x\bmod n_1,\cdots, x\bmod n_k\big).
\]
:::
