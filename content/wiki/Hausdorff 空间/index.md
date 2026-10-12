---
title: Hausdorff 空间
aliases: [T2 空间]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

**Hausdorff 空间**（又称为**分离空间**或 **$\mathrm{T}_2$ 空间**）
是一类[[拓扑空间]]，
其中任两点都有不相交的邻域（即能被开集分离）。

Hausdorff 空间避免了拓扑空间中一些“坏的性质”。
例如，在 Hausdorff 空间中，[[收敛]]是唯一的：
如果一个[[序列]]（或更一般地，[[滤子]]或[[网]]）同时收敛到该空间中两个点，
那么这两个点相同（@prop-unique-limit）。

## 定义

::: definition [Hausdorff 空间] {@def-hausdorff-space}
[[拓扑空间]] $X$ 称为 **Hausdorff 空间**，
如果对任意 $x, y \in X$，如果 $x \neq y$，
那么存在开集 $U, V \subset X$，
使得 $x \in U$，$y \in V$，且 $U \cap V = \varnothing$。
:::

## 例子

- 任何[[度量空间]]都是 Hausdorff 空间。

- 任何 [[CW 复形]]都是 Hausdorff 空间。

- 具有无限个点的[[代数簇]]在 [[Zariski 拓扑]]下不是 Hausdorff 空间。

## 性质

### 等价刻画

::: proposition
拓扑空间 $X$ 是 Hausdorff 空间，
当且仅当[[对角线]]
\[
\Delta = \{ (x, x) \mid x \in X \}
\subset X \times X
\]
是闭子集。
:::

::: proof
由[[积拓扑]]的定义，$X\times X$ 的一组开集基形如
$\{U\times V\mid U,V\subseteq X\, 开\}$。所以 $\Delta$
闭也就等价于，对任意 $(x,y)\notin\Delta$，存在 $U,V\subseteq X$ 开，使得
$U\times V\ni(x,y)$ 且 $\Delta\cap(U\times V)=\varnothing$。
这无非就是说 $U\ni x$，$V\ni y$，$U\cap V=\varnothing$，
即 Hausdorff 空间的定义。
:::

::: proposition {@prop-unique-limit}
拓扑空间 $X$ 是 Hausdorff 空间，
当且仅当 $X$ 中[[滤子]]的极限如果存在则唯一，
当且仅当 $X$ 中[[网]]的极限如果存在则唯一。
:::

::: proof
见条目[[滤子]]和[[网]]。
:::

### 与紧空间的联系

::: proposition
Hausdorff 空间紧子集闭。
:::

::: proof
设 $X$ 为 Hausdorff 空间，$Y\subseteq X$ 紧，
要证明 $Y$ 闭，即需要证明对任意
$x\notin Y$，存在开集 $V\ni x$，$V\cap Y=\varnothing$。
由 $X$ Hausdorff，对任意 $y\in Y$，存在开集
$U_y\ni y$，$V_y\ni x$，$U_y\cap V_y=\varnothing$。
$\{U_y\}_{y\in Y}$ 是 $Y$ 的开覆盖，由 $Y$ 紧，
存在有限子覆盖 $U_{y_1}\cup\cdots\cup U_{y_n}\supseteq Y$。
取 $V=V_{y_1}\cap\cdots\cap V_{y_n}$，则 $V\ni x$ 为开集，
$V\cap Y=\varnothing$。
:::

::: corollary
紧空间到 Hausdorff 空间的连续双射是同胚。
:::

::: proof
由“紧集的闭子集紧”、“紧集在连续映射下像集紧”以及以上命题，
即可得到此连续双射为闭映射，从而是同胚。
:::

```terms
Hausdorff 空间:
  en: Hausdorff space
  de: Hausdorff-Raum
  fr: espace de Hausdorff
  la: spatium Hausdorff
分离空间:
  en: separated space
  de: separierter Raum
  fr: espace séparé
  la: spatium separatum
```
