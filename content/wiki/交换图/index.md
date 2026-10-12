---
title: 交换图
aliases: [交换图表]
categories: [范畴论]
navboxes: [范畴论]
---

**交换图**（也称为**交换图表**）
是[[范畴论]]中的一种记号，
它由一系列顶点和箭头构成，
表示[[范畴]]中的几个对象和态射。
例如，我们说
\[
\begin{tikzcd}
  A \ar[r, "f"] \ar[d, "g"'] &
  B \ar[d, "g'"] \\
  C \ar[r, "f'"] &
  D
\end{tikzcd}
\]
是范畴 $\mathcal{C}$ 中的交换图，
是说有 $\mathcal{C}$ 中的四个对象 $A, B, C, D$，
以及它们之间的态射 $f \in \mathcal{C} (A, B)$ 等等，如图中所标示。
并且有
\[
f' \circ g = g' \circ f.
\]
当这个条件满足时，我们说图表是**交换**的。
当然，交换图也可以包含更少或更多的对象和态射。
这时，我们说图表是交换的，
意思是任两个对象之间，沿着任意路径行走得到的态射都相等。

## 定义

::: definition [图表] {@def-diagram}
设 $\mathcal{C}$ 是[[范畴]]，$J$ 是[[有向图]]。
则 $\mathcal{C}$ 中的一个 $J$ 形**图表**由以下信息组成：

- 对 $J$ 的每个顶点 $v$，有一个对应的 $\mathcal{C}$ 的对象 $x_v$。

- 对 $J$ 的每条边 $e$，如果 $e$ 从顶点 $v$ 出发而指向顶点 $w$，
  那么有一个对应的 $\mathcal{C}$ 的态射 $f_e \in \mathcal{C} (x_v, x_w)$。
:::

::: definition [交换图]
设 $\mathcal{C}$ 是[[范畴]]，$J$ 是[[有向图]]。
按照 @def-diagram 的记号，
$\mathcal{C}$ 中的一个 $J$ 形图表称为**交换**的，或一个**交换图**，
如果满足以下条件：

- 对 $J$ 的任意顶点 $v, w$，
  以及 $J$ 中所有从 $v$ 到 $w$ 的路径
  \[
  v = v_0
  \xrightarrow{e_1} v_1
  \xrightarrow{e_2} \cdots
  \xrightarrow{e_n} v_n = w,
  \]
  对应的复合态射
  \[
  f_{e_n} \circ \cdots \circ f_{e_1} \in \mathcal{C} (x_v, x_w)
  \]
  都是同一个态射，而不依赖于路径的选取。
  这里，当 $n = 0$ 时，我们约定 $0$ 个态射的复合是恒等态射。
:::

```terms
交换图:
  en: commutative diagram
  de: kommutatives Diagramm
  fr: diagramme commutatif
  la: diagramma commutativum
```
