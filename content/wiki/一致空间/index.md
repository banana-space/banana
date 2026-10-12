---
title: 一致空间
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “完备性”一节需要扩充。
---

**一致空间**是一种[[空间]]，
在这种空间上，可以谈论[[完备]]、[[一致连续]]、[[一致收敛]]的概念。
例如，[[度量空间]]和[[拓扑群]]都是一致空间。

一致结构和拓扑结构的区别在于，一致结构刻画了不同点之间的相对邻近性：
“$x$ 离 $a$ 比 $y$ 离 $b$ 近”之类的概念，在一致空间中是有意义的。
相反在拓扑空间中，有意义的概念只有“点 $x$ 能‘任意靠近’集合 $A$”
（即 $x\in\bar{A}$），以及“和 $B$ 相比，$A\ni x$ 是更小的邻域”，
但不同点之间相对邻近性就不能只用拓扑结构来描述了。

粗略地说，一致空间是没有可数性的度量空间。

## 定义

::: definition [一致空间]
设 $X$ 是[[集合]]。
$X$ 上的**一致结构**是 $X$ 上的一族[[二元关系]]
\[
\mathscr{U} = \{ U_i \subseteq X \times X \} _{i \in I} ,
\]
称为**邻近关系**，满足以下条件：
我们记 $x \overset{U}{\sim} y$ 当且仅当 $(x, y) \in U \subset X \times X$。则

- 对任何 $U \in \mathscr{U}$ 和 $x \in X$，有
  \[
  x \overset{U}{\sim} x.
  \]

- 对任何 $U \in \mathscr{U}$，
  存在 $V \in \mathscr{U}$，使得 $V \circ V \subset U$，
  其中 $\circ$ 是[[关系复合]]。换言之，对任意 $x, y, z \in X$，有
  \[
  x \overset{V}{\sim} y \overset{V}{\sim} z \implies x \overset{U}{\sim} z.
  \]

- 对任何 $U \in \mathscr{U}$，都有 $U^\mathrm{op} \in \mathscr{U}$，
  其中 $U^\mathrm{op}$ 是 $U$ 的[[反关系]]。换言之，
  \[
  x \overset{U}{\sim} y \iff y \overset{U^\mathrm{op}}{\sim} x.
  \]

- $\mathscr{U}$ 是 $X \times X$ 上的[[滤子]]。具体地说，这意味着

  - 如果 $U \in \mathscr{U}$，并且 $U \subset V \subset X \times X$，
    那么 $V \in \mathscr{U}$。

  - 如果 $U, V \in \mathscr{U}$，
    那么 $U \cap V \in \mathscr{U}$。

带有一个一致结构的集合称为**一致空间**。
:::

如同拓扑空间之间有连续映射，一致空间之间也有一致连续映射。

::: definition [一致连续]
对一致空间 $(X,\mathscr{U}),(Y,\mathscr{V})$，称
$f\colon X\to Y$ **一致连续**，指对任意 $V\in\mathscr{V}$，
$f^{-1}(V)\in\mathscr{U}$。
:::

于是和拓扑空间类似，考虑一致空间的范畴时，态射取成一致连续映射。

## 例子

首先，和拓扑基类似，不难发现，如集族 $\mathscr{B}=\{B_i\subseteq X\times X\}$
满足一致空间定义中前三条以及第四条的第二部分，令
$\mathscr{U}=\{U\subseteq X\times X\mid\exists B\in\mathscr{B}, B\subseteq U\}$，
即得一致空间。我们将 $\mathscr{U}$ 称为是 $\mathscr{B}$ 生成的一致结构。
以下例子中的一致结构通常为这样生成出来的。

::: example [度量空间]
如 $(X,d)$ 是度量空间，则
$$
\{\{(x,y)\in X\times X\mid d(x,y)<r\}\mid r\in\mathbb{R}_+\}
$$
生成 $X$ 上一致结构。
:::

::: example [拓扑群]
如 $G$ 是拓扑群，则
$$
\{\{(x,y)\in G\times G\mid xy^{-1}\in U\}\mid U\ni1\,是开邻域\}
$$
生成 $G$ 上一致结构。
:::

## 与拓扑空间的联系

令 $x\in X$ 的邻域滤子为 $\{y\in X\mid x\overset{U}{\sim}y\}_{U\in\mathscr{U}}$，
一致结构便自然诱导拓扑结构。具体地说，

::: definition [一致拓扑]
对一致空间 $(X,\mathscr{U})$，称 $Y\subseteq X$ 为开集，
指对任意 $x\in Y$ 存在 $U\in\mathscr{U}$
使得 $U\cap(\{x\}\times X)\subseteq Y$。容易验证这是
$X$ 上的拓扑结构，称为此一致空间的**一致拓扑**。
:::

一致拓扑总有较好的分离性：它总是[[完全正则空间|完全正则]]，即只要
[[T0 空间|$\mathrm{T}_0$]] 就会 [[完全正则空间|$\mathrm{T}_{3.5}$]]。

## 完备性

```terms
一致空间:
  en: uniform space
  de: uniformer Raum
  fr: espace uniforme
```
