---
title: 字典序
categories: [集合论]
navboxes: [集合论]
---

**字典序**是给[[偏序集]][[Descartes 积|乘积]]赋予偏序的一种方式。
字典序依次对各个乘积分量进行比较来确定顺序，正如在字典中一样。

## 定义

::: definition {@def}
设 $I$ 是[[良序集]]，$(A_i)_{i\in I}$ 是一族偏序集。
[[Descartes 积]] $\prod_{i\in I}A_i$
上的**字典序**指如下偏序：

- 对 $(x_i)_{i\in I},(y_i)_{i\in I}\in\prod_{i\in I}A_i$，
  $(x_i)_{i\in I}<(y_i)_{i\in I}$ 指的是存在 $j\in I$，使得 $x_j<y_j$，
  且对任意 $i<j$ 都有 $x_i=y_i$。

如 $n$ 是自然数，$A_1,\ldots,A_n$ 是 $n$ 个偏序集，则
$A_1\times\cdots\times A_n$ 上的**字典序**指上述定义中把
$I$ 取成 $\{1,\ldots,n\}$ 所得偏序，即：

- 对 $(x_i)_{i=1}^n,(y_i)_{i=1}^n\in
      A_1\times\cdots\times A_n$，
  $(x_i)_{i=1}^n<(y_i)_{i=1}^n$ 指的是存在
  $j\in\{1,\ldots,n\}$，使得 $x_j<y_j$，且对
  $i\in\{1,\ldots,j-1\}$ 都有 $x_i=y_i$。

:::

::: remark
显然，字典序依赖于指标集 $I$ 的偏序。如把 $I$ 取成离散偏序
（即元素之间都没有大小关系），
对应的字典序就是偏序集[[范畴]]中的[[积 (范畴论)|乘积]]偏序；
不过我们通常不称此为字典序。
:::

## 性质

::: proposition
如 $I$ 是[[良序集]]，$(A_i)_{i\in I}$ 是一族[[全序集]]，
则带字典序的 $\prod_{i\in I}A_i$ 是全序集。
:::

::: proposition
如 $A_1,\ldots,A_n$ 是[[良序集]]，则带字典序的
$A_1\times\cdots\times A_n$ 是良序集。
:::

::: remark
即便 $I$ 是[[良序集]]，$(A_i)_{i\in I}$ 是一族良序集，
带字典序的 $\prod_{i\in I}A_i$ 也未必是良序集。事实上，
当这些 $A_i$ 都非空，且有无穷多个有多于一个元素时，
带字典序的 $\prod_{i\in I}A_i$ 总不是良序集。
:::

```terms
字典序:
  en: lexicographical order
  de: lexikographische Ordnung :f
  fr: ordre lexicographique :m
```
