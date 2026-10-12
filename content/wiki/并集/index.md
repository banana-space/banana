---
title: 并集
aliases: [并]
categories: [集合论]
---

一族[[集合]]的**并集**（简称**并**）是这些集合的所有元素构成的集合。

## 定义

### 一族子集的并

::: definition [并]
设 $X$ 是[[集合]]，$\{ X_i \}_{i \in I}$ 是 $X$ 的一族[[子集]]。
它们的**并**定义为集合
\[
\bigcup_{i \in I} X_i =
\{
  x \in X \mid
  \exists i \in I, \ x \in X_i
\}.
\]
当 $I$ 为[[有限集]]时，例如 $I = \{ 1, \dotsc, n \}$ 时，
也将并集记为 $X_1 \cup \cdots \cup X_n$。
:::

### 任意集合的并

在 [[ZFC 集合论]]中，
[[并公理]]保证任意一族集合的并存在。

::: definition [并]
设 $X$ 是[[集合]]。$X$ 中所有元素的**并**
是集合 $\cup X$，满足如下性质：

- 对任意集合 $Z$，$Z \in \cup X$ 当且仅当存在集合 $Y$ 满足 $Z \in Y \in X$。

集合 $\cup X$ 存在性由[[并公理]]保证。
:::

然而，这种并集的概念破坏了[[等价原理]]，
因为即使两个集合族同构
（即其成员能够一一对应，
且相对应的成员作为集合都[[集合同构|同构]]），
这两族集合的并也可能不同构。

```terms
并:
  en: union
  de: Vereinigung :f
  fr: ['union :f', 'réunion :f']
  grc: ἔνωσις :f
  la: coniunctio :f
```
