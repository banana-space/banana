---
title: 连通空间
aliases: [连通, 连通分支]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

在[[拓扑学]]中，**连通空间**是指不能被“一分为二”的[[拓扑空间]]。
例如，下图中左侧的方块是连通的，右侧的两个圆盘（作为一个空间）是不连通的。

```tikz
\begin{tikzpicture}[line width=1]
    \draw[cyan, fill=cyan!8] (-.5, -.5) rectangle (.5, .5);
    \draw[orange, fill=orange!8] (2, 0) circle (.5);
    \draw[orange, fill=orange!8] (3.2, 0) circle (.5);
\end{tikzpicture}
```

组成拓扑空间的每个连通的部分称为**连通分支**。
每个拓扑空间都是其连通分支的并，但不一定同胚于它们的[[无交并空间|无交并]]。

## 定义

### 连通空间

::: definition [连通空间] {@thm:连通空间}
[[拓扑空间]] $X$ 称为**连通空间**，如果下列条件成立：

- 如果[[开集]] $U, V \subset X$
  满足 $X = U \cup V$ 且 $U \cap V = \varnothing$，
  那么 $U, V$ 中恰好一个是空集。

:::

@thm:连通空间 中的条件也等价于以下任意一条：

- $X$ 恰有两个既开又闭的子集：$\varnothing$ 和 $X$ 自身。

- 如果 $X$ [[同胚]]于两个拓扑空间 $X_1, X_2$ 的[[不交并]]，
  那么 $X_1, X_2$ 中恰有一个是空集。

::: remark
@thm:连通空间 表明，
[[空空间]]不是连通空间。
这是[[平凡对象不是单对象]]的一个例子。
:::

### 连通分支

::: definition [连通分支]
设 $X$ 是拓扑空间。在 $X$ 上定义[[等价关系]] $\sim$ 如下：

- $x \sim y$ 当且仅当存在连通的子空间 $V \subset X$
  （@thm:连通空间），
  使得 $x, y \in V$。

该等价关系的每个[[等价类]]称为 $X$ 的一个**连通分支**。
:::

连通分支一定是[[闭集]]，
但不一定是[[开集]]。例如，考虑[[有理数]]集 $\mathbb{Q}$，带有其通常拓扑，即[[序拓扑]]。
则 $\mathbb{Q}$ 的连通分支都是[[单点集]]。
这也说明，一个空间不一定同胚于其连通分支的[[无交并空间|无交并]]。

## 性质

### 基本性质

- 连通空间在[[连续映射]]下的[[像]]也是连通空间。

- 拓扑空间 $X$ 的连通分支都是 $X$ 中的[[闭集]]。

```terms
连通空间:
  en: connected space
  fr: espace connexe :m
  de: zusammenhängender Raum :m
  ja: 連<れん>結<けつ>空<くう>間<かん>
  ko: 연결 공간 (連結空間)
连通分支:
  en: connected component
  fr: composante connexe :f
  de: zusammenhängende Komponente :f
  ja: 連<れん>結<けつ>成<せい>分<ぶん>
  ko: 연결 성분 (連結成分)
```
