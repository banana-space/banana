---
title: 图
aliases: [无向图, 简单图, 有限图]
categories: [图论]
navboxes: [图论]
---

**图**是[[组合学]]中的基本概念，
是[[图论]]的主要研究对象。
图是指由一些顶点和一些边组成的图形，
每条边连接两个顶点。例如，下面所示的就是一个图：

```tikz
\begin{tikzpicture}[scale=1.5, line width=1]
    \draw (0, 1) -- (0, 0) -- (1, 1) -- (0, 1) -- (1, 0);
    \fill[white, draw=black] (0, 0) circle (.05);
    \fill[white, draw=black] (0, 1) circle (.05);
    \fill[white, draw=black] (1, 0) circle (.05);
    \fill[white, draw=black] (1, 1) circle (.05);
\end{tikzpicture}
```

在这个图中，有 $4$ 个顶点和 $4$ 条边。
一般来说，图中的两个顶点之间可以有不止一条边，
也允许有一个顶点到自身的边。

有时，也考虑在图的每条边上标定一个方向，
带有这种标定方向的图称为[[有向图]]。
在文献中，“图”的概念有时也包括有向图，但本文不采用这种约定。
为避免歧义，也称普通的图为**无向图**。

## 定义

::: definition [无序对]
设 $V$ 是[[集合]]。定义 $V$ 中**无序对**的集合为[[商集]]
\[
\Bigl\langle { V \atop 2 } \Bigr\rangle =
(V \times V) / {\sim},
\]
其中 $\sim$ 是由 $(x, y) \sim (y, x)$ 给出的[[等价关系]]，
其中 $x, y \in V$。
:::

例如，集合 $\{ 1, 2, 3 \}$ 有 $6$ 个无序对，
分别为 $(1, 1)$、$(2, 2)$、$(3, 3)$、$(1, 2)$、$(1, 3)$、$(2, 3)$ 所在的等价类。
定义图时，每条边的两个端点就给出了顶点的无序对。

::: definition [图]
**图**（或**无向图**）是指三元组 $G = (V, E, d)$，
其中

- $V$ 是[[集合]]，其元素称为 $G$ 的**顶点**。

- $E$ 是[[集合]]，其元素称为 $G$ 的**边**。

- $d \colon E \to \bigl\langle { V \atop 2 } \bigr\rangle$
  是[[映射 (集合论)|映射]]。
  每条边被映射 $d$ 映到其两个**端点**组成的无序对。

:::

我们还引入以下术语。

::: definition
设 $G = (V, E, d)$ 是图。

- 若 $e \in E$ 将顶点连到自身，
  即存在 $x \in V$ 使得 $d (e) = (x, x)$，
  就说 $e$ 是**圈**。

- 若 $e_1, e_2 \in E$ 连接同样的两个顶点，
  即 $d (e_1) = d (e_2)$，且 $e_1 \neq e_2$，
  就说 $e_1$、$e_2$ 是**重边**。

- 若 $G$ 没有圈，则称 $G$ 为**无圈图**。

- 若 $G$ 既没有圈也没有重边，
  则称 $G$ 为**简单图**。

- 若 $V$、$E$ 均为[[有限集]]，
  则称 $G$ 为**有限图**。

:::

## 例子

- 对[[自然数]] $n$，可以考虑 **[[完全图]]** $K_n$，
  它有 $n$ 个顶点，且每两个不同的顶点都有一条边连接，
  从而共有 $\binom{n}{2} = n (n-1) / 2$ 条边。

```terms
图:
  en: graph
  fr: graphe :m
  de: Graph :m
  ja: グラフ
  ko: 그래프
无向图:
  en: undirected graph
  fr: graphe non orienté :m
  de: ungerichteter Graph :m
  ja: 無<む>向<こう>グラフ
  ko: 무방향 그래프
顶点:
  en: vertex
  fr: sommet :m
  de: Knoten :m
  ja: 頂<ちょう>点<てん>
  ko: 꼭짓점
边:
  en: edge
  fr: arête :f
  de: Kante :f
  ja: 辺<へん>
  ko: 변 (邊)
```
