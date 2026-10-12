---
title: 收缩
categories: [范畴论]
navboxes: [范畴论]
---

对[[空间]]之间的[[映射]] $i \colon X \to Y$ 而言，
其**收缩**是指映射 $r \colon Y \to X$，使得
\[
r \circ i = \mathbb{1}_X.
\]
大致来说，若将 $i$ 视为小空间 $X$ 向大空间 $Y$ 的[[含入映射]]，
则其收缩就是 $Y$ 到 $X$ 的映射，
它保持 $X$ 中的点固定不动。
若这样的映射 $i, r$ 存在，也称 $X$ 为 $Y$ 的**收缩核**。

在[[范畴论]]中，
收缩与[[截面]]是[[对偶]]的概念，
它们分别是指[[范畴]]中[[态射]]的左逆、右逆。

## 定义

::: definition [收缩]
设 $\mathcal{C}$ 是[[范畴]]，$X, Y \in \mathcal{C}$ 是 $\mathcal{C}$ 的[[对象]]。

- 设 $i \colon X \to Y$ 是 $\mathcal{C}$ 中的[[态射]]。
  则 $i$ 的**收缩**是指态射
  $r \colon Y \to X$，满足
  \[
  r \circ i = \mathbb{1}_X.
  \]

- 若上述态射 $i, r$ 存在，则称 $X$ 为 $Y$ 的**收缩核**。

:::

```terms
收缩:
  en: retraction
  fr: rétraction :f
  de: Retraktion :f
  ja: レトラクション
  ko: {text: 수축, note: 收縮}
收缩核:
  en: retract
  fr: rétract :m
  de: Retrakt :m
  ja: レトラクト
```
