---
title: 交集
aliases: [交]
categories: [集合论]
navboxes: [集合论]
---

一族[[集合]]的**交集**（简称**交**）是这些集合的公共元素构成的集合。

## 定义

### 一族子集的交

::: definition [交]
设 $X$ 是[[集合]]，$\{ X_i \}_{i \in I}$ 是 $X$ 的一族[[子集]]。
它们的**交**定义为集合
\[
\bigcap_{i \in I} X_i =
\{
  x \in X \mid
  \forall i \in I, \ x \in X_i
\}.
\]
当 $I$ 为[[有限集]]时，例如 $I = \{ 1, \dotsc, n \}$ 时，
也将交集记为 $X_1 \cap \cdots \cap X_n$。
:::

### 任意集合的交

在 [[ZFC 集合论]]中，我们也能谈论任意一族集合的交。

::: definition [交]
设 $X$ 是非空[[集合]]。$X$ 中所有元素的**交**
是集合 $\cap X$，满足如下性质：

- 对任意集合 $Z$，$Z \in \cap X$ 当且仅当对任意 $Y \in X$，
  都有 $Z \in Y$。

:::

然而，这种交集的概念破坏了[[等价原理]]，
因为即使两个非空集合族同构
（即其成员能够一一对应，
且相对应的成员作为集合都[[集合同构|同构]]），
这两族集合的交也可能不同构。

```terms
交:
  en: intersection
  de: Schnitt :m
  fr: intersection :f
  grc: τομή :f
  la: intersectio :f
```
