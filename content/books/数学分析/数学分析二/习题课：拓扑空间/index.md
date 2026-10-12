---
title: 习题课：拓扑空间
---

::: definition [拓扑空间]
$X$ 是集合，$\mathcal{T}=\{U|U\subset X\}$ 是 $X$ 的某些子集所组成的集合。如果下面三个条件成立

- 1\) $\emptyset \in \mathcal{T}$，$X \in \mathcal{T}$。

- 2\) 对任意的 $\{U_{\alpha}\}_{\alpha \in \mathcal{A}}\subset \mathcal{T}$，
  其中 $\mathcal{A}$ 为指标集合，
  我们有 $\displaystyle\bigcup_{\alpha \in \mathcal{A}}U_\alpha \in \mathcal{T}$。

- 3\) 对任意有限个 $U_1,U_2,\cdots, U_m \in \mathcal{T}$，
  我们有 $\displaystyle\bigcap_{1\leqslant i\leqslant m}U_i \in \mathcal{T}$。

我们就称 $\mathcal{T}$ 是 $X$ 上的一个**拓扑**，
每个 $U\in \mathcal{T}$ 都被称作是（拓扑 $\mathcal{T}$ 下的）**开集**。
我们把二元组 $(X,\mathcal{T})$ 称作是一个**拓扑空间**。
:::

给定拓扑空间 $(X,\mathcal{T})$，考虑子集 $F\subset X$，
如果其补集 $X-F$ 是开集（即 $X-F\in \mathcal{T}$），
我们就称 $F$ 是（在拓扑 $\mathcal{T}$ 下的）**闭集**。对于闭集，我们有如下的性质：

- 1\) $\emptyset$ 和 $X$ 都是闭集。

- 2\) 任意多闭集的交集是闭集。

- 3\) 有限个闭集的并集是闭集。

::: example* [距离空间]
$(X,d)$ 是距离空间，对任意的 $x\in X$，以 $x$ 为中心以 $r$ 为半径的开球我们记作
\[
B(x,r)=\{y\in X|d(y,x)<r\}.
\]
如果 $U\subset X$ 是若干开球的并，我们就称 $U$ 是 $(X,d)$ 中**开集**。
一个等价的说法是对任意的 $x\in U$，都存在 $\delta>0$，使得 $B(x,\delta)\subset U$。
我们用 $\mathcal{T}_d$ 表示按照这种特定方式所定义的开集所组成的集合。
我们上学期已经说明了 $\emptyset$ 和 $X$ 都是开集；任意多开集的并集还是开集；
有限个开集的交集还是开集。换而言之，$(X,\mathcal{T}_d)$ 是拓扑空间。
我们将 $\mathcal{T}_d$ 称作是**由距离函数 $d$ 所定义的标准拓扑**。
距离空间的例子是我们唯一关心的拓扑空间。
:::

我们引入两个拓扑空间之间的连续映射的概念。
从范畴论的观点来看，连续映射是拓扑空间之间最自然的映射，这个与我们学过的其它空间之间的映射非常相似：
在线性空间之间应该考虑线性映射，在群之间应该考虑群同态，
或者这个学期在两个微分子流形之间应该考虑光滑映射。

::: definition [连续映射：开集的逆像是开集]
假设 $(X,\mathcal{T})$ 和 $(X',\mathcal{T}')$ 是拓扑空间，$f\colon X\rightarrow X'$ 是映射。
如果对每个 $U'\in \mathcal{T}'$，我们有 $f^{-1}(U')\in \mathcal{T}$，我们就称 $f$ 是**连续映射**。
:::

::: exercise*
连续映射的复合是连续的，即若 $(X,\mathcal{T})$，
$(X',\mathcal{T}')$ 和 $(X'',\mathcal{T}'')$ 是拓扑空间，
$f\colon X\rightarrow X'$ 和 $f'\colon X'\rightarrow X''$ 是连续映射，那么
\[
f'\circ f\colon  X\rightarrow X''
\]
是连续映射。
:::

::: exercise*
$(X,d)$ 和 $(X',d')$ 是距离空间，
$\mathcal{T}_d$ 和 $\mathcal{T}_{d'}$ 分别是 $X$ 和 $X'$ 上由其距离函数所定义的拓扑。
假设 $f\colon X\rightarrow X'$ 是映射，那么下面两个概念是等价的：

- 1\) $f\colon (X,d)\rightarrow (X',d')$ 是距离空间之间的连续映射。（由点列的收敛定义的）

- 2\) $f\colon (X,\mathcal{T}_d) \rightarrow (X',\mathcal{T}_{d'})$ 是拓扑空间之间的连续映射。

:::

我们引入拓扑**子空间**的概念。这学期课程中将要研究的 $\mathbb{R}^n$ 中曲线与曲面等都是这样的例子。

::: exercise*
$(X,\mathcal{T})$ 是拓扑空间，$Y\subset X$ 是子集。我们考虑 $X$ 上的开集与 $Y$ 的交所构成的集合：
\[
\mathcal{T}\big|_Y=\{U\cap Y\big|U\in \mathcal{T}\}.
\]

- 1\) 证明，$\mathcal{T}\big|_Y$ 是 $Y$ 上的一个拓扑。
  我们称 $(Y,\mathcal{T}_Y)$ 是 $(X,\mathcal{T})$ 的**子（拓扑）空间**。

- 2\) 证明，包含映射
  \[
  \iota\colon  Y\rightarrow X,  \ \ y\mapsto y
  \]
  是 $(Y,\mathcal{T}_Y)$ 与 $(X,\mathcal{T})$ 之间的连续映射。

- 3\) 假设 $(Y,\widetilde{\mathcal{T}})$ 是拓扑空间，即 $\widetilde{\mathcal{T}}$ 是 $Y$ 上的拓扑，
  使得包含映射
  \[
  \iota\colon  Y\rightarrow X,  \ \ y\mapsto y
  \]
  是连续的，那么 $\widetilde{\mathcal{T}} \supset \mathcal{T}_Y$。
  换而言之，$\mathcal{T}_Y$ 是使得包含映射为连续映射的最小的拓扑。

:::

关于距离空间我们也有子空间的概念：若 $(X,d)$ 是距离空间，$Y\subset X$ 是子集，
对任意的 $y_1,y_2\in Y$，我们定义
\[
d_Y(y_1,y_2)=d(y_1,y_2).
\]
这个 $d_Y\colon Y\times Y \rightarrow \mathbb{R}_{\geqslant 0}$ 定义出了 $Y$ 上的距离函数。
我们将 $(Y,d_Y)$ 称作是 $(X,d)$ 的**子（距离）空间**。

::: exercise*
$(X,d)$ 是一个度量空间，$(Y,d_Y)$ 是 $(X,d)$ 的子距离空间。那么，集合 $Y$ 上有两种拓扑：

- 拓扑 $\mathcal{T}_d\big|_Y$：
  先用 $X$ 的距离函数给出 $X$ 上的开集从而使得 $X$ 成为一个拓扑空间 $(X,\mathcal{T}_d)$，
  然后将这个拓扑限制到 $Y$ 上。

- 拓扑 $\mathcal{T}_{d_Y}$：先用 $X$ 上的距离函数限制到 $Y$ 上使得 $Y$ 成为距离空间，
  然后用这个距离来定义拓扑。

证明，$\mathcal{T}_d\big|_Y=\mathcal{T}_{d_Y}$。
换而言之，为了得到距离空间的子集上的拓扑，我们可以先将它视作是距离空间再取距离所诱导的拓扑，
也可以先将全空间视作是拓扑空间然后取子空间拓扑，这两种操作是交换的。
:::

最后我们引入同胚的概念：

::: definition
假设 $(X,\mathcal{T})$ 和 $(X',\mathcal{T}')$ 是拓扑空间，$f\colon X\rightarrow X'$ 是连续的双射。
如果逆映射 $f^{-1}\colon X'\rightarrow X$ 也是连续的，
我们就称 $f$ 是 $(X,\mathcal{T})$ 与 $(X',\mathcal{T}')$ 之间的**同胚**。
此时，我们通常说 $X$ 和 $X'$ 是同胚的。
:::

同胚是拓扑空间之间的等价性。如果两个拓扑空间同胚，除非在某些特定的场合，我们将不再区分它们。
如果我们考虑的是距离空间之间的等价性，我们通常要求距离空间之间是**等距同构的**，
即若 $(X,d)$ 与 $(\overline{X},\overline{d})$ 是距离空间，
如果存在双射 $\iota\colon (X,d)\rightarrow (\overline{X},\overline{d})$，使得对任意的 $x,y \in X$，
\[
\overline{d}(\iota(x),\iota(y))=d(x,y),
\]
我们就称 $\iota$ 是**等距同构**。

::: exercise*
我们考虑几个拓扑空间之间的连续映射的例子：

- 1\) $\mathbb{R}$ 和 $(0,1)$ 上我们给定最常见的绝对值定义的距离，证明，
  它们不等距同构但是它们是同胚的。简单来说，拓扑同胚是比等距同构要松散得多的一个等价性。

- 2\) 考虑单位圆周 $\mathbf{S}^1=\{(x,y)\in \mathbb{R}^2\big|x^2+y^2=1\}$ 并将它视作是拓扑空间。
  证明，映射
  \[
  f\colon [0,1)\rightarrow \mathbf{S}^1, \ \ x\mapsto (\cos(2\pi x),\sin(2\pi x)),
  \]
  是连续的双射但是不是同胚。

- 3\) 证明，$\mathbf{S}^1$ 不与任何一个 $\mathbb{R}^1$ 的子集（作为拓扑子空间）同胚。

:::
