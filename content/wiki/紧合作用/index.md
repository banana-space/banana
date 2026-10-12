---
title: 紧合作用
categories: [一般拓扑]
---

**紧合作用**是[[紧合映射]]在[[群作用]]中的特殊情况。

## 定义

::: definition
设拓扑群 $G$ 连续（左）作用在拓扑空间 $E$ 上。如果映射
\[
\theta\colon G \times E \rightarrow E \times E,\quad
(s,x) \mapsto (x,s\cdot x)
\]
是[[紧合映射]]，就称 $G$ **紧合作用**在 $E$ 上。
:::

## 例子

- 若 $E = G$，$G$ 通过左乘连续作用在 $E$ 上，
  那么映射 $\theta$ 就是同胚映射，自然也是紧合映射。

- 若 $H$ 是 $G$ 的闭子群，$G$ 紧合作用在 $E$ 上，
  那么 $H$ 也紧合作用在 $E$ 上，因为 $H \times E$ 是 $G \times E$ 的闭子集。

## 性质

### 自由作用时

设群 $G$ 自由作用在集合 $E$ 上（即 $s\cdot x=x$ 推得出 $s=e$）。
又设 $C = \{ (x,s\cdot x) \in E \times E \mid x\in E, s\in G \}$ 是群作用的图像。
那么由于 $G$ 自由作用，若 $(x,y)\in C$ 则存在唯一的 $s\in G$ 使得 $y = s \cdot x$。
因此我们有如下良定义的映射：
\[
t\colon C \rightarrow G,\quad (x, s\cdot x) \mapsto s
\]
这样有：

::: proposition {@Bou07.III.31.prop6}
设拓扑群 $G$ 连续自由作用在拓扑空间 $E$ 上。
那么 $G$ 紧合作用的充分必要条件是

- 作用图像 $C$ 是 $E\times E$ 的闭子集，且映射 $t$ 是连续的。

:::

见 [@bourbaki2007topologie, III，p. 31，命题 6]。

当 $t$ 连续时，也称 $G$ **弱紧合**作用在 $E$ 上。

::: proposition {@Dieck08.prop.14.1.12}
设离散群 $G$ 连续自由作用在拓扑空间 $E$ 上。
则下列叙述等价：

- 标准投射 $p\colon E \rightarrow E/G$ 是 $G$-[[主丛]]。

- 每个 $x\in E$ 都有一个邻域 $U$，
  使得 $U \cap sU \neq \varnothing$ 蕴涵 $s = e$。
  这个性质也称为**离散紧合**。

- 集合 $t^{-1}(e)$ 是 $C$ 中的开集。

- 映射 $t$ 是连续的（即 $G$ 弱紧合）。

:::

见 [@dieck2008algebraic, 命题 14.1.12]。

### 作用在局部紧空间时

现在给出一个[[Hausdorff 空间|Hausdorff]]拓扑群 $G$ 是否紧合作用在[[局部紧空间]] $E$ 上的判据。
对任意两个子集 $K,L \subset E$，用 $P(K,L)$ 表示使得 $sK \cap L \neq \emptyset$
的 $s \in G$ 的集合。我们有：

::: theorem
设 Hausdorff 拓扑群 $G$ 连续作用在拓扑空间 $E$ 上，$K$ 是 $E$ 的紧子集，
$L$ 是 $E$ 的闭子集。那么

- 集合 $P(K,L)$ 是 $G$ 的闭子集。

- 若 $G$ 紧合作用在 $E$ 上，且 $L$ 是紧集，那么 $P(K,L)$ 也是 $G$ 的紧子集。

反过来，若 $E$ 是局部紧空间，且对任意两个紧子集 $K,L \subset E$
有 $P(K,L)$ 是 $G$ 的紧子集，那么 $G$ 紧合作用在 $E$ 上。
:::

见 [@bourbaki2007topologie, III，p. 33，定理 1]。

::: remark
由于显然 $P(K,L) \subset P(K\cup L, K\cup L)$，
因此分离拓扑群 $G$ 紧合作用在局部紧空间 $E$ 上当且仅当
对于任意紧子集 $K \subset E$，集合 $P(K,K)$ 是 $G$ 的紧子集。

特别地，对于离散群 $G$，其紧合作用在局部紧空间 $E$ 上当且仅当
对于 $E$ 的任何紧子集 $K$，只有有限个 $s \in G$
能使 $sK \cap K \neq \emptyset$。
:::

### 对流形和 Lie 群

::: theorem
设 [[Lie 群]] $G$ 自由地光滑作用在[[光滑流形]] $M$ 上，
$C$ 是作用图像，$\pi\colon M \rightarrow M/G = X$ 是标准投射。
那么如下叙述等价：

- $G$ 紧合作用在 $M$ 上。

- $C$ 是 $M \times M$ 的闭子集，且对任意 $x\in M$ 都存在一个 $M$ 的
  包含 $x$ 的[[嵌入子流形]] $N$ 使得
  $T_x(M)$ 是 $T_x(N)$ 和 $T_x(G \cdot x)$ 的直和，
  且 $\pi|N$ 是单射。

- $X$ 上存在（唯一的）光滑结构使得 $\pi$ 是[[浸没]]。

:::

见 [@varadarajan2013lie, 定理 2.9.10]。

::: remark
在满足上述等价条件时，实际上 $\pi\colon M \rightarrow X$ 是一个 $G$-主丛。
:::

::: corollary
设紧 Lie 群 $G$ 自由光滑作用在流形 $M$ 上。
那么 $M/G$ 上有唯一一个光滑结构使得 $\pi$ 是浸没。
:::

见 [@varadarajan2013lie, 推论 2.9.11]。

::: corollary
设离散群 $G$ 自由光滑作用在流形 $M$ 上，
$C$ 是 $M \times M$ 中的闭集。
则 $X = M/G$ 上存在一个光滑结构使得 $\pi$ 是浸没的充分必要条件是，
$G$ 离散紧合作用在 $M$ 上。
:::

::: proof
使用 @Bou07.III.31.prop6 和 @Dieck08.prop.14.1.12 即可。
:::

## 参考文献

```bibliography
bourbaki2007topologie:
  type: book
  title: 'Topologie générale: Chapitres 1 à 4'
  author: 'Bourbaki, N.'
  series: 'Bourbaki, Nicolas'
  year: 2007
  publisher: Springer Berlin Heidelberg
dieck2008algebraic:
  type: book
  title: Algebraic Topology
  author: 'tom Dieck, T.'
  series: EMS textbooks in mathematics
  year: 2008
  publisher: European Mathematical Society
varadarajan2013lie:
  type: book
  title: 'Lie Groups, Lie Algebras, and Their Representations'
  author: 'Varadarajan, V.S.'
  series: Graduate Texts in Mathematics
  year: 2013
  number: 102
  publisher: Springer New York
```

```terms
弱紧合:
  en: weakly proper
离散紧合:
  en: properly discontinuous
```
