---
title: 积空间
aliases: [积拓扑]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

一族[[拓扑空间]]的**积空间**是指其 [[Descartes 积]]，
自然地视为拓扑空间。

## 定义

::: definition [积空间] {@积空间}
设 $I$ 是[[集合]]，$(X_i)_{i \in I}$ 是一[[族]][[拓扑空间]]。
考虑集合的 [[Descartes 积]]
\[
X = \prod_{i \in I} X_i,
\]
并在 $X$ 上定义以下拓扑，称为**积拓扑**：

- 形如 $\prod_{i \in I} U_i$ 的集合构成 $X$ 的一组[[拓扑基]]，
  其中每个 $U_i \subset X_i$ 是开集，
  且除有限个 $i$ 以外，均有 $U_i = X_i$。

积拓扑使得 $X$ 成为拓扑空间，称为 $(X_i)_{i \in I}$ 的**积空间**，记为
\[
\prod_{i \in I} X_i.
\]
有限个空间 $X_1, \dotsc, X_n$ 的积空间也可记为
$X_1 \times \cdots \times X_n$。
:::

这里，积拓扑是 $X$ 上使得所有投影 $X \to X_i$ 都[[连续映射|连续]]的最[[粗拓扑|粗]]的拓扑。

::: remark
在 @积空间 中，若不要求“除有限个 $i$ 以外，均有 $U_i = X_i$”，
则得到 $X$ 上更细的拓扑，称为 **[[方盒拓扑]]**，
因为其中所有“方盒”$\prod_{i \in I} U_i$ 都是开集。
当然，在 $I$ 有限时，这与积拓扑没有区别，
但当 $I$ 无限时，积拓扑才是积空间上最自然的拓扑。
:::

## 性质

### 基本性质

- $0$ 个空间的积空间是[[单点空间]]。$1$ 个空间的积空间是其自身。

- 积空间是[[拓扑空间范畴]]中的[[积 (范畴论)|积]]。

```terms
积空间:
  en: product space
  de: Produktraum :m
  fr: espace produit :m
积拓扑:
  en: product topology
  de: Produkttopologie :f
  fr: topologie produit :f
```
