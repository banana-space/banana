---
title: 极大、极小元
aliases: [极大元, 极小元, 极大, 极小]
categories: [序论]
notices:
  - name: 区分
    pages:
      - 最大、最小元
navboxes: [序论]
---

在[[偏序集]]中，**极大元**是指“不能更大”的元素，即没有别的元素比它大的元素；
**极小元**是指“不能更小”的元素，即没有别的元素比它小的元素。

极大、极小元不一定是最大、最小元。
例如，给定[[集合]] $X$，则 $X$ 的所有非空[[子集]]按包含关系构成偏序集。
则对任何 $x \in X$，[[单点集]] $\{ x \}$ 都是该偏序集的极小元，
但不是最小元。
但在[[全序集]]中，极大、极小和最大、最小的概念等价。

## 定义

::: definition
设 $(X, \leq)$ 为[[偏序集]]。

- 称 $x \in X$ 为**极大元**，如果对任意 $y \in X$，若 $x \leq y$，
  则 $x = y$。

- 称 $x \in X$ 为**极小元**，如果对任意 $y \in X$，若 $y \leq x$，
  则 $x = y$。

:::

## 例子

- [[向量空间]] $V$ 的[[基]]是 $V$ 的所有[[线性无关向量组]]
  按包含关系构成的偏序集中的极大元。

- [[环]] $R$ 的[[极大理想]]是 $R$ 的所有[[理想]]
  按包含关系构成的偏序集中的极大元。

```terms
极大元:
  en: maximal element
  fr: élément maximal :m
  de: maximales Element :n
极小元:
  en: minimal element
  fr: élément minimal :m
  de: minimales Element :n
```
