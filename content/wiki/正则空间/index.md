---
title: 正则空间
categories: [一般拓扑]
navboxes: [一般拓扑]
---

**正则空间**是一类[[拓扑空间]]，
满足以下[[分离公理]]：该空间中任何[[闭集]]和不在其中的点都有不交的邻域。
正则的 [[Hausdorff 空间]]也称为 **$\mathbf{T}_{3}$ 空间**。

## 定义

::: definition
称[[拓扑空间]] $X$ 为**正则空间**，若满足以下条件：

- 对任意[[闭集]] $F \subseteq X$ 和任意 $x \in X \setminus F$，
  存在 $x$ 的[[邻域]] $U$ 和 $F$ 的邻域 $V$，满足 $U \cap V = \varnothing$。

若 $X$ 还是 [[Hausdorff 空间]]，
则称之为 **$\mathbf{T}_{3}$ 空间**。
:::

## 性质

### 基本性质

- 正则空间的[[子空间拓扑|子空间]]是正则空间。

- 如果拓扑空间 $X$ 的每个点都具有正则的闭邻域，
  那么 $X$ 是正则空间。

### 连续延拓性质

::: theorem [连续延拓性质]
设 $X$ 是拓扑空间，$A \subseteq X$ 是[[稠密子空间]]，
$Y$ 是 $\mathrm{T}_3$ 空间，
$f \colon A \rightarrow Y$ 是[[连续映射]]。
则 $f$ 存在连续延拓 $\bar{f} \colon X \rightarrow Y$
当且仅当对任意 $x \in X$，[[滤子极限]]
$$
\lim_{y \rightarrow x, y \in A} f(y)
$$
存在。此时 $\bar{f}$ 是 $f$ 在 $X$ 上的唯一延拓。
:::

```terms
正则空间:
  en: regular space
  fr: espace régulier
```
