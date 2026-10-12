---
title: 商集
---

对于集合$A$，$A$上的一个**等价关系**指的是$A\times A$的子集$\mathcal{E}$，
对于$(a,b)\in \mathcal{E}$，我们把它写成$a\sim b$（称作$a$和$b$等价），并且如下的性质成立：

- 1)（自反性）对任意的$a\in A$，$a\sim a$（或者对任意的$a\in A$，$(a,a)\in \mathcal{E}$）；

- 2)（对称性）如果$a\sim b$，那么，$b\sim a$（或者如果$(a,b)\in \mathcal{E}$，那么，
  $(b,a)\in \mathcal{E}$）；

- 3)（传递性）如果$a\sim b$，$b\sim c$，那么，$a\sim c$（或者如果$(a,b),(b,c)\in \mathcal{E}$，
  那么，$(a,c)\in \mathcal{E}$）。

对任意的$a\in A$，令$\overline{a}$（或者$[a]$）表示
\[
\overline{a}=[a]=\big\{b\in A\bigm|b\sim a\big\}\subset A.
\]
我们将这样的一个集合称作是$\sim$的一个**等价类**，因为它是将相互等价的那些元素放到了一起。
那么，$a\in \overline{a}$；如果$a\sim b$，则$\overline{a}=\overline{b}$；对任意的$a,b\in A$，
要么$[a]=[b]$要么$[a]\cap [b]=\emptyset$。所以，$\sim$的等价类构成了$A$的一个划分：
\[
A=\coprod \overline{a}.
\]
反之，假设$A=\coprod_{i\in I} A_i$是$A$的一个划分，
即$\bigcup_{i}A_i=A$并且$\{A_i\}_{i\in I}$是两两不交的，那么，对任意的$a,b\in A$，
我们规定$a\sim b$当且仅当存在某个$A_i$，使得$a,b\in A_i$，这显然给出了一个等价关系。作为总结，我们有

::: lemma
给定集合$A$上的一个等价关系等价于给出集合$A$的一个划分。
:::

给定集合$A$上的等价关系，我们定义其等价类的集合为**商集**，即
\[
{A/\sim}=\big\{ \overline{a}\bigm|a\in A\big\}.
\]
我们有自然商映射：
\[
\pi\colon A\rightarrow {A/\sim}, \ \ a \mapsto \pi(a)=\overline{a}.
\]
这显然是满射。按照定义，对于$a,b\in A$，$\pi(a)=\pi(b)$当且仅当$a\sim b$。

::: proposition [商集的泛性质]
给定集合$A$以及$A$上的等价关系。
那么，对任意的集合$B$以及映射$f\colon A\rightarrow B$，
存在映射$\widetilde{f}\colon {A/\sim} \rightarrow B$使得如下图表交换（即$f=\widetilde{f}\circ \pi$）
\[
\begin{tikzcd}
A \arrow[r, "f"] \arrow[d, "\pi"] &  B \\
{A/\sim} \arrow[ur, "\widetilde{f}",swap] &      \end{tikzcd}
\]
当且仅当对任意的$a\sim a'$，我们有$f(a)=f(a')$。
:::

::: proof
假设$f=\widetilde{f}\circ \pi$。
对于$a\sim a'$，按定义，$\pi(a)=\pi(a')$，所以，$\widetilde{f}(\pi(a))=\widetilde{f}( \pi(a'))$，
从而，$f(a)=f(a')$。
假设对任意的$a\sim a'$，都有$f(a)=f(a')$，那么，对任意的$\overline{a}\in {A/\sim}$，
我们令$\widetilde{f}(\overline{a})=f(a)$。容易看出$\widetilde{f}$是良好定义的并且满足要求。
:::

::: remark
满足命题要求的$\widetilde{f}$是唯一的。这个命题会始终贯穿我们的课程（用来构造映射）。
:::
