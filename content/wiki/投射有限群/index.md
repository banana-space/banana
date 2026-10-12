---
title: 投射有限群
aliases: [射有限群]
categories: [群论]
---

投射有限群是离散有限群的一种推广，
它们有许多相同的性质。例如[[Lagrange 定理]] 和 [[Sylow 定理]] 都
可以推广到投射有限群上。

## 定义

::: definition
$G$ 是[[拓扑群]]，若存在有限群的[[逆向系]] $(G_{i})_{i\in I}$，其中 $G_{i}$
赋予离散拓扑，满足：
\[
G=\mathop{\underleftarrow{\lim}} G_{i},
\]
称 $G$ 为投射有限群。
:::

## 性质

### 具体构造

::: proposition
设 $(G_{i})_{i\in I}$ 是以[[有向集]] $(I,\leq)$ 为指标集的逆向系，
$\{f_{i}^{j}:G_{j}\rightarrow G_{i}\mid i,j\in I,i\leq j\}$ 是态射集。
则有
\[
\mathop{\underleftarrow{\lim}} G_{i}=\{(g_{i})_{i\in I}\in \prod_{i\in I} G_{i}\mid f_{i}^{j}(g_{j})=g_{i},\text{对 }j\geq i\}
\]
:::

从具体构造，
能够得到 $G=\mathop{\underleftarrow{\lim}} G_{i}$ 到 $G_{i}$ 的典范同态，
即投影映射 $p_{i}$。

### 等价刻画

::: proposition
设 $G$ 是拓扑群，则 $G$ 是投射有限群的充分必要条件是 $G$ [[紧空间|紧]]且完全不连通。
:::

::: proof [必要性的证明]
先证 $G$ 是紧空间。首先由 [[Tikhonov 定理]]，$\prod_{i\in I} G_{i}$ 是紧空间。由于紧空间的闭
子空间是紧集，只需证明 $G=\mathop{\underleftarrow{\lim}} G_{i}$ 是闭子空间。
考虑 $(x_{i})\notin G$，则存在 $i_{0}\leq j_{0}$
使得 $f_{i_{0}}^{j_0}(x_{j_0})\neq x_{i_0}$。则有
\[
G\cap  \{(g_{i})_{i\in I}\mid g_{j_0}=x_{j_0},~~g_{i_0}=x_{i_0}\}=\varnothing
\]
这是一个 $(x_{i})$ 的与 $G$ 相交为空的邻域，即有 $G$ 是闭集。

对于连通性，利用 $p_{i}$ 是连续映射以及连通集的连续像连通。
每个 $G_{i}$ 是离散的，连通分支只有单点集。
所以 $G$ 中包含 $\{e\}$ 的连通分支只能是 $\bigcap p^{-1}_{i}(e_i)=\{e\}$。
结合拓扑群性质，$G$ 的连通分支
只有单点集。
:::

::: proof [充分性的证明]
断言正规开子群构成邻域基，设 $U$ 是 $e$ 的邻域，则 $U$ 是闭集进而为紧集。
那么存在 $e$ 的开邻域 $V$ 使得 $VU\subset U$。
令 $W=V\cap V^{-1}$ 是 $e$ 的开邻域，且满足 $WU=W^{-1}U\subset U$。
归纳地，得到 $W^{n}\subset U$，则有
\[
H:=\bigcup_{n\in \mathbb{Z}} W^{n}\text{  是含有 }e\text{ 且包含于 }U \text{ 的开子群}.
\]
令 $N=\cap _{g\in G} gHg^{-1}$，这是一个包含于 $H$ 的正规开子群。
由于 $G$ 是紧集，则 $N$ 的指数有限。
那么 $G/N$ 是离散有限群。

定义 $N_{i}$ 之间的序关系：
$i\leq j\Leftrightarrow N_{i}\supseteq N_{j}\Leftrightarrow A_{i}^{j}:G/N_{j}
  \rightarrow G/N_{i}$ 是典范的商映射。
令 $A=\mathop{\underleftarrow{\lim}} G/N_{i}$，其中 $N_{i}$ 是所有 $e$ 的正规开邻域。
由于有 $\pi_{i}:G\rightarrow G/N_{i}$，
且与 $A_{i}^{j}$ 交换，通过[[极限 (范畴论)|极限]]的泛性质有映射：
\[
\pi:G\rightarrow A=\mathop{\underleftarrow{\lim}} G/N_{i}
\]
它是紧空间到 [[Hausdorff 空间]]的映射，自然为闭映射。只需证 $\pi$ 是双射。

- $\pi$ 是单射：若有 $\pi(x)=e$，则有 $\pi_{i}(x)=e_{i}$，即 $x\in \cap N_{i}$。
  由于 $\{e\}$ 是 $e$ 的连通分支，则有 $\{e\}$ 是所有 $G$ 中包含 $e$ 的既开又闭集的交。因此
  $x=e$。

- $\pi$ 是满射：设 $a=(x_{i}N_{i})$。对任意 $N_{i},~N_{j}$，有 $N_{k}=N_{i}\cap N_{j}$
  仍是正规开子群。
  由逆极限定义，存在 $x_{k}\in G$ 使得 $x_{k}N_{k}\subset x_{i}N_{i}\cap x_{j}N_{j}$。
  由 $G$ 的紧性，知存在 $x\in G$ 满足：
  \[
  x\in \bigcap \overline{x_{i}N_{i}}=\bigcap x_{i}N_{i}~~(N_{i} \text{同时也是闭子群})
  \]
  那么 $\pi(x)=a$。

:::

从任意一个拓扑群可以得到它相应的投射有限群。

::: definition [投射有限完备化]
拓扑群 $G$ 的**投射有限完备化**是
\[
\hat{G} = \mathop{\underleftarrow{\lim}} G/H_i,
\]
其中 $H_i$ 取遍 $G$ 的有限指数正规开子群（构成一个逆向系）。
有自然的映射 $G \to \hat{G}$，使投射有限群范畴成为拓扑群范畴的[[反射子范畴]]。
:::

## 例子

::: example
有以下几类典型的投射有限群。

1. 对于赋予离散拓扑的有限群 $G$ 是投射有限群。

2. [[P 进数|$p$ 进整数]] $\mathbb{Z}_{p}=\mathop{\underleftarrow{\lim}} \mathbb{Z}/p^{n}\mathbb{Z}$
   是投射有限加法群。

3. 对于 [[Galois 扩张]] $L/K$，设 $G=\operatorname{Gal}(L/K)$ 为其 Galois 群。
   由于 Galois 扩张的合成仍为
   Galois 扩张，有
   \[
   G=\mathop{\underleftarrow{\lim}} \operatorname{Gal}(F/K),~\text{ 其中 }F\text{ 为所有有限 Galois 扩张}.
   \]

4. 任何群的投射有限完备化是投射有限群。
   一个复代数簇的[[平展基本群]]即是[[基本群]]的投射有限完备化。

:::

```terms
投射有限群:
  en: profinite group
  de: proendliche Gruppe
  fr: groupe profini
```
