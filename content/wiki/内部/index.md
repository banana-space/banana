---
title: 内部
categories: [一般拓扑]
---

[[拓扑空间]] $X$ 的[[子空间拓扑|子空间]] $A$ 的**内部**
是指 $A$ 所包含的最大[[开集]]，常记为 $A^\circ$。
这里所说的开集是指作为 $X$ 的子集为开集的集合。

例如，[[闭区间]] $[0, 1]$ 在 $\mathbb{R}$ 中的内部是开区间 $\mathopen{]} 0, 1 \mathclose{[}$。
然而，若将 $[0, 1]$ 视为平面 $\mathbb{R}^2$ 中 $x$ 轴的子集，则其内部将变为空集，
因为它不包含 $\mathbb{R}^2$ 中的任何开集。

## 定义

::: definition
设 $X$ 为[[拓扑空间]]，
$A$ 为其[[子空间拓扑|子空间]]。
则 $A$ 在 $X$ 中的**内部**是指
$X$ 中所有包含于 $A$ 的[[开集]]的[[并集|并]]。

$A$ 在 $X$ 中的内部通常记为 $A^\circ$、$\operatorname{int}_X A$
或 $\operatorname{int} A$。
:::

## 性质

- 对子空间 $A \subset X$，有

  - $(A^\circ)^\circ = A^\circ$。

  - $A$ 在 $X$ 中是开集，当且仅当 $A = A^\circ$。

```terms
内部:
  en: interior
  fr: intérieur :m
  la: interior :f
  grc: ἐσώτερον :n
```
