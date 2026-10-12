---
title: 模的定义
---

{@section:module}

模可以被视作是环上的线性空间：

::: definition
$A$是环，$(M,+)$是交换群。如果存在映射
\[
A\times M\rightarrow M,  \ \ (a,m)\mapsto a\cdot m,
\]
使得对任意$a,a'\in A,m,m'\in M$，有
\[
\begin{aligned}
\begin{cases}
&1\cdot m=m, \\
&a\cdot (a' \cdot m)=(a\cdot a')\cdot m,\\
&a\cdot (m+m')=a\cdot m +a\cdot m', \\
&(a+a')\cdot m=a\cdot m+a'\cdot m,
\end{cases}
\end{aligned}
\]
就称$(M,+)$或$M$是 **（左）$A$-模**。

如果$N<M$是$M$的加法子群并且对上述乘法封闭，即对任意$a\in A$和$n\in N$，有$a\cdot n \in N$，
就称$(N,+)$是$M$的一个**子$A$-模**或**子模**。在$A$对$M$的乘法下，$N$是$A$-模。
:::

::: example
$K$是域，则$K$-模是$K$-线性空间。
:::

::: example
对于整数环${\mathbb{Z}}$，${\mathbb{Z}}$-模$M$是交换群，其中，对于$a\in {\mathbb{Z}}, m\in M$，
\[
a\cdot m =\underbrace{m+m+\cdots +m}_{\text{$a$次}}.
\]
:::

::: example
$A$和$B$是环，$\varphi\colon A\rightarrow B$是环同态，则$B$具有自然的$A$-模结构：
\[
A\times B\rightarrow B, \ \ (a,b)\mapsto  a\cdot b\coloneqq\varphi(a)\cdot_{_B} b.
\]
:::

::: example
$K$是域，$A=K[X]$为$K$上的多项式环，$V$是$K$-线性空间。
给定线性映射$T\in {\mathbf{End}}_{K}(V)$，这定义出$V$上的$K[X]$-模的结构：
\[
K[X]\times V\rightarrow V, \ \  (P(X), v)\mapsto P(X)\cdot v= P(T)\cdot v.
\]
即对任意$P(X)=a_nX^n+\cdots+a_1X +a_0\in K[X]$，其中，$a_i\in K$，要求
\[
P(T)\cdot v = a_n\cdot T^n(v)+\cdots+a_1\cdot T(v) +a_0\cdot v.
\]
很显然，我们有
\[
(P+Q)(T) \cdot v=P(T)\cdot v+Q(T)\cdot v , \ \ (P\cdot Q)(T)\cdot v=P(T)\cdot \big(Q(T)\cdot v\big).
\]
这是最重要的一类$K[X]$-模（由线性映射$T$决定）。
:::

::: definition [$A$-模同态]
$(M_1,+_{_1})$和$(M_2,+_{_2})$是$A$-模，$\varphi\colon M_1\rightarrow M_2$是加法群同态并且保持乘法，
即对任意的$a\in A$和$m,m'\in M_1$，有
\[
\varphi(m +_{_1} m')=\varphi(m)+_{_2} \varphi(m'), \ \ \varphi(a \cdot_{_1} m)=a\cdot_{_2} \varphi(m),
\]
就称$\varphi$是从$M_1$到$M_2$的 **$A$-模同态**或 **$A$-线性映射**。
我们用${\rm Hom}_A(M_1,M_2)$表示从$M_1$到$M_2$的模同态的集合。
如果$\varphi$是双射，称$\varphi$是它们之间的 **$A$-模同构**。
如果$M_1$与$M_2$之间存在$A$-模同构，就称$M_1$和$M_2$是**同构的**并记为$M_1\simeq M_2$。
:::

::: remark
$A$是交换环，则${\rm Hom}_A(M_1,M_2)$具有自然的$A$-模结构：
\[
A\times {\rm Hom}_A(M_1,M_2) \rightarrow {\rm Hom}_A(M_1,M_2), \ (a,\varphi)\mapsto \Big( a\cdot \varphi\colon m_1\mapsto a\cdot_{_2}\varphi(m_1)\Big).
\]
:::

::: example
给定$A$-模之间的同态$\varphi\in {\rm Hom}_A(M_1,M_2)$，它的**核**定义为：
\[
{{\rm Ker}}(\varphi)\coloneqq\big\{m\in M_1\bigm|\varphi(m)=0\big\}.
\]
这是$M_1$的子模。

另外，$\varphi$是单射当且仅当${\rm Ker}(\varphi)=\{0\}$。
:::

::: example
给定$A$-模$M$及其子模$N$，我们可以构造其**商模** $
  {M/N}
$。

首先将$M$视为交换群，其所有子群均为正规子群，从而，我们可以定义商群：
\[
  {M/N}
=\big\{m+N\bigm|m\in M\big\}.
\]
这自然也是交换群，其$A$-模结构由如下公式给出：
\[
A\times
  {M/N}
\rightarrow
  {M/N}
, \ \ (a,m+N)\mapsto a(m+N)\coloneqq am+N.
\]
这个乘法的定义不依赖于$m+N$中代表元的选取，即若$m+N=m'+N$，则$am+N=am'+N$，这是因为$m-m'\in N$，
从而，$am-am'\in N$。至此，我们定义了商模$
  {M/N}
$。另外，自然的投影映射是$A$-模同态：
\[
\pi\colon M\rightarrow
  {M/N}
, \ \ m\mapsto m+N.
\]
这个同态是满射。
:::

::: proposition {@prop:quotient-A-mod-universal}
$M$和$M'$是$A$-模，$N\subset M$是子模，$\varphi\colon M \rightarrow M'$是$A$-模同态。
如果$N\subset{\rm Ker}(\varphi)$，那么存在唯一的$A$-模同态$\overline{\varphi}\colon
  {M/N}
 \rightarrow M'$，使得$\overline{\varphi}\circ\pi=\varphi$，其中，$\pi\colon M\rightarrow
  {M/N}
$是自然的同态。
\[
\begin{tikzcd}
M \arrow[r, "\varphi"] \arrow[d, "\pi"] &  M'\\
  {M/N}
  \arrow[ur, "\overline{\varphi}",swap] &      \end{tikzcd}
\]
进一步，我们还有$A$-模同构$\overline{\varphi}\colon
  {M/{\rm Ker}(\varphi)}
 \stackrel{\simeq}{\longrightarrow} {\rm Im}(\varphi)$。
:::

::: proof
对任意$m+N$，定义
\[
\overline{\varphi}(m+N)=\varphi(m).
\]
现在验证这是良好定义的：对$m+N=m'+N$，$m-m'\in N\subset {\rm Ker}(\varphi)$，从而，
$\varphi(m)=\varphi(m')$。
容易看出，映射$\overline{\varphi}$是$A$-模同态并且$\overline{\varphi}\circ\pi=\varphi$。

选取$N={\rm Ker}(\varphi)$，我们显然有满射
\[
\overline{\varphi}\colon
 {M/{\rm Ker}(\varphi)}
\twoheadrightarrow  {\rm Im}(\varphi).
\]
根据定义，$\overline{\varphi}(m+N)=0$当且仅当$m\in {\rm Ker}(\varphi)$，所以该同态是单射，
从而为同构。
:::
