---
title: 商集
categories: [集合论]
navboxes: [集合论]
---

给定[[集合]] $X$ 及其上[[等价关系]] $\sim$，
**商集** $X/{\sim}$ 就是将 $X$ 中所有等价的元素都看作相同的元素，
而得到的新集合。
换言之，商集就是将原来的集合中某些元素捏到一起，得到的更小的集合。

对任何[[满射]] $p \colon X \to Y$，都可以将 $Y$ 视为 $X$ 的商集。

## 定义

::: definition [商集]
设 $X$ 为[[集合]]，$\sim$ 为 $X$ 上[[等价关系]]。
对 $x \in X$，记
\[
[x] = \{ y \in X \mid x \sim y \}
\]
为 $x$ 所在的[[等价类]]。

则**商集** $X/{\sim}$ 就是所有等价类的集合：
\[
X / {\sim} = \{ [x] \mid x \in X \}.
\]
有自然的映射
\[
\begin{aligned}
  p \colon X & \longrightarrow X / {\sim}, \\
  x & \longmapsto [x],
\end{aligned}
\]
称为**投影映射**，也称为**商映射**。
:::

## 例子

- 对[[集合]] $X$，
  若 $\sim$ 是 $X$ 上的平凡等价关系，即任两个元素都等价，
  则 $X/{\sim}$ 当 $X$ 非空时为[[单点集]]，否则为[[空集]]。

```terms
商集:
  en: quotient set
  fr: ensemble quotient :m
  de: Quotientenmenge :f
```
