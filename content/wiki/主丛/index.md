---
title: 主丛
categories: [纤维丛论, 微分几何]
notices:
  - name: 问题
    items:
      - “函子性”一节需要扩充。
      - “作为群作用的商”一节中的命题可以推广到更一般的情形。
      - “作为群作用的商”一节的第二个推论似乎需要假设 $K$ 是 $H$ 的正规子群，否则 $H/K$ 不是群。
---

对于[[拓扑群]] $G$，
$G$-**主丛**是一种特殊的[[纤维丛]]，
其纤维同胚于 $G$，
并带有 $G$ 的作用。

当 $G$ 带有额外的几何结构时，也可以定义带有这些结构的主丛。
例如，当 $G$ 为 [[Lie 群]]时，可以定义[[光滑流形]]上的**光滑主丛**。
当 $G$ 为[[代数群]]时，可以定义[[代数簇]]上的**代数主丛**。

## 定义

### 拓扑主丛

::: definition [主丛] {@主丛}
设 $G$ 为[[拓扑群]]，$X$ 为[[拓扑空间]]。
则 $X$ 上的 **$G$-主丛**由以下信息构成：

- [[连续映射]] $p \colon P \to X$。

- [[连续]] $G$-[[群作用|右作用]] $a \colon P \times G \to P$。

并满足**局部平凡**条件：

- 存在 $X$ 的[[开覆盖]] $\mathscr{U}$，对每个 $U \in \mathscr{U}$，
  都有 $P|_U$ 同构于平凡主丛 $U \times G$。换言之，有交换图
  \[
  \begin{tikzcd}[column sep = {3em,between origins}]
    P|_U \ar[rr, "\simeq"] \ar[dr, "p|_U"'] &&
    U \times G \ar[dl, "\mathrm{pr}_1"] \\
    & U \rlap{ ,}
  \end{tikzcd}
  \]
  这里横向箭头是[[同胚]]，且与 $G$-作用相容，
  $G$ 以右乘作用于 $U \times G$ 的第二分量上。

若无歧义，此主丛可记作 $P$。
:::

$X$ 上两个主丛间的态射是与 $G$-作用相容的纤维丛态射。

::: definition [态射]
设 $p_1 \colon P_1 \to X$，
$p_2 \colon P_2 \to X$ 是 $X$ 上两个 $G$-主丛，
它们的 $G$-作用分别记为 $a_1$、$a_2$。
则它们之间的**态射**
$f \colon P_1 \to P_2$ 是满足以下条件的[[连续映射]]：

- $f$ 与纤维丛结构相容，即有交换图
  \[
  \begin{tikzcd}[column sep = {3em,between origins}]
    P_1 \ar[rr, "f"] \ar[dr, "p_1"'] &&
    P_2 \ar[dl, "p_2"] \\
    & X \rlap{ .}
  \end{tikzcd}
  \]

- $f$ 与 $G$-作用相容，即有交换图
  \[
  \begin{tikzcd}
    P_1 \times G \ar[r, "f \times \mathbb{1}_G"] \ar[d, "a_1"'] &
    P_2 \times G \ar[d, "a_2"] \\
    P_1 \ar[r, "f"] & P_2 \rlap{ .}
  \end{tikzcd}
  \]

所有 $X$ 上 $G$-主丛和它们之间的态射构成一范畴，它是[[群胚]]，
称为 $X$ 上 **$G$-主丛群胚**，
记作 $\mathsf{Bun}_{G} (X)$。
:::

### 光滑主丛

::: definition [光滑主丛] {@thm:光滑主丛}
设 $G$ 为 [[Lie 群]]，$X$ 为[[光滑流形]]。
则 $X$ 上的**光滑 $G$-主丛**由以下信息构成：

- [[光滑映射]] $p \colon P \to X$。

- [[光滑]] $G$-[[群作用|右作用]] $a \colon P \times G \to P$。

并满足局部平凡条件：

- 存在 $X$ 的[[开覆盖]] $\mathscr{U}$，对每个 $U \in \mathscr{U}$，
  都有 $P|_U$ 同构于平凡主丛 $U \times G$：
  \[
  \begin{tikzcd}[column sep = {3em,between origins}]
    P|_U \ar[rr, "\simeq"] \ar[dr, "p"'] &&
    U \times G \ar[dl, "\mathrm{pr}_1"] \\
    & U \rlap{ ,}
  \end{tikzcd}
  \]
  这里横向箭头是[[微分同胚]]，且与 $G$-作用相容。
:::

### 代数主丛

::: definition [代数主丛] {@thm:代数主丛}
设 $S$ 为[[概形]]，
$G$ 为 $S$ 上[[群概形]]，$X$ 为 $S$-概形。
则 $X$ 上的**代数 $G$-主丛**由以下信息构成：

- 概形态射 $p \colon P \to X$。

- $G$-[[群作用|右作用]] $a \colon P \times G \to P$。

并满足局部平凡条件。（在 $X$ 上可选取不同的拓扑。）
:::

## 例子

- 乘积丛$X\times G\to X$称为平凡的$G$-主丛。
  $G$-主丛同构于平凡丛当且仅当它有全局截面。

- Hopf 纤维化$S^3\to S^2$是$S^1$-主丛。

- 一个流形的定向覆叠是$\mathbb Z/ 2\mathbb Z$-主丛。

- $n$维 [[Riemann 流形]]上的标准正交标架丛是$O(n)$-主丛；
  当且仅当底空间流形可定向时，该丛约化为$SO(n)$-主丛。

## 性质

### 函子性

### 作为群作用的商

::: proposition
设$P$是[[光滑流形]]，
$G$是紧[[Lie 群]]，
$\mu\colon P\times G\to P$是光滑、自由的右作用，
则商映射$P\to X=P/G$是$G$-主丛。
:::

::: corollary
设$H\subset G$是紧子群，
那么商映射$G\to G/H$是$H$-主丛。
:::

::: corollary
设$K\subset H \subset G$是紧子群，
那么商映射$G/K\to G/H$是$(H/K)$-主丛。
:::

### 分类

::: proposition
存在主丛 $EG \to BG$，
满足对任意[[仿紧]][[拓扑空间]] $X$ 上主丛 $P$，
均存在[[同伦]]意义下唯一的映射 $X \to BG$，
使得 $P$ 同构于拉回丛 $X \times_{BG} EG$。
:::

### 与向量丛的关系

给定 $G$ 的[[群表示]]后，可以由主丛得到向量丛。

::: definition [配丛]
设有[[拓扑群表示]]
$\rho \colon G \to \mathrm{GL}(V)$
其中 $V$ 是某个[[拓扑域]] $\mathbb{K}$
（如 $\mathbb{R}$、$\mathbb{C}$）上有限维[[向量空间]]。
则对主丛 $P \to X$，
[[纤维积]] $P \times_G V$ 有自然的
$X$ 上 $\mathbb{K}$-[[向量丛]]结构，
且其转移映射落在 $\rho(G)$ 中。
:::

也可以从向量丛得到主丛。

::: proposition
设 $V$ 是某个拓扑域 $\mathbb{K}$
（如 $\mathbb{R}$、$\mathbb{C}$）上有限维向量空间，
$G$ 是 $\mathrm{GL}(V)$ 的子拓扑群，
则拓扑空间 $X$ 上转移映射在 $G$ 中的向量丛构成的范畴的[[对象群胚]]
与 $X$ 上 $G$-主丛范畴等价。
:::

```terms
主丛:
  en: principal bundle
  de: Hauptfaserbündel :n
  fr: fibré principal :m
```
