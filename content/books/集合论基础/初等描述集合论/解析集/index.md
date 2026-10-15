---
title: 解析集
notices:
  - name: 问题
    items:
      - “Souslin定理”一节中 Luzin 分离定理与 Souslin 定理没有证明。
      - “Souslin定理”一节第一个定理的证明中，集合 $\mathcal{A}$ 的定义用到的 $\mathcal{F}$ 似乎应为前文的泛在集 $\mathcal{U}$，且 $\mathcal{A}_y$ 与 $G$ 中坐标的顺序似乎前后不一致。
---

## Souslin定理

::: definition
Polish空间$X$的子集$A$若是某个连续函数$f:Y\to X$的像集，其中$Y$是另一个Polish空间，
则称作一个解析集。全体$X$中的解析集构成的集族记为$\Sigma_1^1(X)$。
:::

这样定义的解析集全体总归不好操作，我们用泛在集来做出一个更漂亮的解读。

::: theorem
$\Sigma_1^1(\mathcal{N})$有$\mathcal{N}$泛在集。
:::

::: proof
显然我们有$\Sigma_1^0(\mathcal{N}^2)$的$\mathcal{N}$泛在集，
于是我们有$\Pi_1^0(\mathcal{N}^2)$的$\mathcal{N}$泛在集$\mathcal{U}$。
我们证明$\mathcal{A}=\{(y,x)|\exists z((y,x,z)\in\mathcal{F})\}$是所要的$\mathcal{N}$泛在集。

由于存在量化这个操作是连续的，
$\mathcal{A}$以及每个$\mathcal{A}_y=\{x|(x,y)\in\mathcal{A}\}$都是解析集。
另一方面，由于Polish空间是$\mathcal{N}$的闭子集的连续满像，
任给解析集$A\subseteq \mathcal{N}$均不妨假定有连续满射$f:F\to A$，这里$F$是$\mathcal{N}$中的闭集。
现在$G=\{(y,x)|y=f(x)\}$是$\mathcal{N}^2$中的闭集，因此存在$y\in\mathcal{N}$使得$G=\mathcal{U}_y$，
这同时就是$A=\mathcal{A}_y$。
:::

::: corollary
不可数Polish空间中，Borel集都是解析集，且存在不是Borel集的解析集。
:::

::: proof
不可数Polish空间必包含一个$\mathcal{N}$的同胚像，后者对角线论证一下。
:::

当然，解析集还有许多等价形式。

::: theorem
$A$是解析集与以下条件均等价：

1. 存在Polish空间$Y$和$X\times Y$的Borel子集$B$使得$A=\{x|\exists y((x,y)\in B)\}$

2. 存在闭集$F\subseteq X\times\mathcal{N}$使得$A=\{x|\exists y((x,y)\in F)\}$

3. 存在$G_\delta$集$G\subseteq X\times\mathcal{C}$使得$A=\{x|\exists y((x,y)\in G)\}$

:::

::: proof
用$\mathcal{N}$泛在集。
:::

不难发现解析集的一些简单性质。

::: theorem
解析集的可列交、可列并、Borel像和Borel逆像都是解析集。
:::

::: proof
简单的。
:::

我们要用解析集来界定Borel集，其依据是以下重要定理。

::: theorem [Luzin分离定理]
任给可列个两两不交的解析集$A_n$，存在可列个两两不交的Borel集$B_n\supseteq A_n$。
:::

::: theorem [Souslin定理]
一个集合是Borel集，当且仅当它与它的补集都解析。
:::
