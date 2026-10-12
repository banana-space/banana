---
title: 幂集
categories: [集合论]
navboxes: [集合论]
---

[[集合]] $X$ 的**幂集** $\mathcal{P} (X)$，也记为 $2^X$，
是其所有[[子集]]构成的[[集合]]。
例如，
\[
\mathcal{P} ( \{ 1, 2 \} ) =
\bigl\{ \varnothing, \{ 1 \}, \{ 2 \}, \{ 1, 2 \} \bigr\}.
\]

对集合 $X, Y$ 而言，有时也称集合 $Y^X$，
即从 $X$ 到 $Y$ 的所有[[映射 (集合论)|映射]]的集合，为幂集。
这是上述概念的推广。
这也是[[集合范畴]]中的[[幂对象]]。

## 定义

::: definition [幂集] {@幂集}
[[集合]] $X$ 的**幂集** $\mathcal{P} (X)$
是 $X$ 的所有[[子集]]构成的集合，即
\[
\mathcal{P} (X) = \{ S \mid S \subseteq X \}.
\]
:::

::: definition {@二元幂集}
对集合 $X, Y$ 而言，记
\[
Y^X = \{ f \colon X \to Y \}
\]
为 $X$ 到 $Y$ 的所有[[映射 (集合论)|映射]]的集合。
有时，也称 $Y^X$ 为 $X$ 对 $Y$ 的**幂集**。
:::

@幂集 可以视为 @二元幂集 的特例。
考虑集合 $2 = \{ 0, 1 \}$，
则幂集 $\mathcal{P} (X)$ 能够与 $2^X$ 等同起来。
例如，可以将映射 $f \colon X \to 2$ 对应于子集 $f^{-1} (1) \subseteq X$。
因此，也常常直接将 $\mathcal{P} (X)$ 记为 $2^X$。

## 性质

### Cantor 定理

<see>[[Cantor 定理]]</see>

::: theorem [Cantor 定理]
设 $X$ 为[[集合]]。则幂集 $\mathcal{P} (X)$ 的[[势]]严格大于 $X$ 的势：
\[
|\mathcal{P} (X)| > |X|.
\]
:::

```terms
幂集:
  en: power set
```
