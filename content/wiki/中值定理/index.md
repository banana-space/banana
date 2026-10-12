---
title: 中值定理
aliases: [Rolle 定理, Cauchy 中值定理, Lagrange 中值定理]
categories: [实分析]
notices:
  - name: 区分
    pages:
      - 介值定理
---

**中值定理**是[[微积分]]中的一系列定理，
说明函数在一段区间上的平均变化率一定等于在某点的瞬间变化率。

## 陈述

以下几个定理都被称为中值定理，
按照从特殊到一般的顺序来排列。

### Rolle 定理

::: theorem [Rolle]
设 $a < b$ 是实数，
[[连续函数]] $f \colon [a, b] \to \mathbb{R}$，
在[[开区间]] $\mathopen{]} a, b \mathclose{[}$ 上[[可导]]，
且满足 $f (a) = f (b)$。
则存在 $\xi \in \mathopen{]} a, b \mathclose{[}$，使得
\[
f' (\xi) = 0.
\]
:::

### Lagrange 中值定理

::: theorem [Lagrange 中值定理]
设 $a < b$ 是实数，
[[连续函数]] $f \colon [a, b] \to \mathbb{R}$，
在[[开区间]] $\mathopen{]} a, b \mathclose{[}$ 上[[可导]]。
则存在 $\xi \in \mathopen{]} a, b \mathclose{[}$，使得
\[
f' (\xi) = \frac {f (b) - f (a)} {b - a}.
\]
:::

### Cauchy 中值定理

::: theorem [Cauchy 中值定理]
设 $a < b$ 是实数，
[[连续函数]] $f, g \colon [a, b] \to \mathbb{R}$，
在[[开区间]] $\mathopen{]} a, b \mathclose{[}$ 上[[可导]]。
则存在 $\xi \in \mathopen{]} a, b \mathclose{[}$，使得
\[
f' (\xi) \, (g (b) - g (a)) =
g' (\xi) \, (f (b) - f (a)).
\]
特别地，如果函数 $f' (x)$ 与 $g' (x)$ 不同时为零，且 $g (a) \neq g (b)$，
那么上述等式可以写成
\[
\frac {f' (\xi)} {g' (\xi)} =
\frac {f (b) - f (a)} {g (b) - g(a)}.
\]
:::

```terms
中值定理:
  en: mean value theorem
  de: Mittelwertsatz :m
  fr: théorème de la moyenne
```
