---
title: '$\sigma$-紧空间'
aliases: [Sigma-紧空间]
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “例子”一节中“$X\setminus Z$ 是 $\sigma$-紧空间”推出“$Z$ 是可数个开集之交”的方向似乎需要 $X$ 是 Hausdorff 空间（例如，不可数集上的余有限拓扑中，单点集的补集紧，但单点集不是可数个开集之交）。
navboxes: [一般拓扑]
---

**$\sigma$-紧空间**指[[紧集]]的可数并。

## 定义

::: definition
称[[拓扑空间]] $X$ 为 **$\sigma$-紧空间**，
指其有一列紧子集 $K_1,K_2,\ldots$，满足
$$
X=\bigcup_{n\in\mathbb{Z}_+}K_n.
$$
:::

## 例子

::: example
设 $X$ 是[[紧空间]]，$Z\subseteq X$ 为闭子集。
则 $X\setminus Z$ 是 $\sigma$-紧空间当且仅当存在一列开子集
$U_1,U_2,\ldots$，满足
$$
Z=\bigcap_{n\in\mathbb{Z}_+}U_n.
$$
换言之，$X\setminus Z$ 是 $\sigma$-紧空间当且仅当
$Z$ 有可数邻域基。
:::

```terms
'$\sigma$-紧空间':
  en: '$\sigma$-compact space'
```
