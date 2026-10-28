---
title: 积范畴
categories: [范畴论]
navboxes: [范畴论]
---

<disambiguation>
本条目介绍的是范畴的积。关于范畴中对象的积，请参见[[积（范畴论）]]。
</disambiguation>

**积范畴**是[[范畴论]]中的一种构造。
[[范畴]] $\mathcal{C}$ 与 $\mathcal{D}$ 的积范畴记为
$\mathcal{C} \times \mathcal{D}$，其中

- [[对象]]为有序对 $(x, y)$，
  其中 $x \in \mathcal{C}$，$y \in \mathcal{D}$。

- [[态射]]为有序对 $(f, g)$，
  其中 $f, g$ 分别是 $\mathcal{C}$、$\mathcal{D}$ 中态射。

积范畴可以用来定义[[二元函子]]、[[多元函子]]的概念。

积范畴也是[[范畴的范畴]] $\mathsf{Cat}$ 中的[[积 (范畴论)|积]]。
这里，我们将 $\mathsf{Cat}$ 视为 [[$2$-范畴]]，
但 $2$-范畴中的积与普通范畴中没有区别，
也就是说，这个积与[[同伦范畴]] $\mathsf{Ho (Cat)}$ 中的积是相同的。

## 定义

::: definition [积范畴]
设 $I$ 为[[集合]]，$(\mathcal{C}_i)_{i \in I}$ 是一族[[范畴]]。
这族范畴的**积范畴**
\[
\mathcal{C} = \prod_{i \in I} \mathcal{C}_i
\]
是如下定义的[[范畴]]：

- 其对象形如 $(x_i)_{i \in I}$，其中对每个 $i$，
  有 $x_i \in \operatorname{Ob} (\mathcal{C}_i)$。换言之，
  \[
  \operatorname{Ob} (\mathcal{C}) =
  \prod_{i \in I} \operatorname{Ob} (\mathcal{C}_i).
  \]

- 从对象 $(x_i)_{i \in I}$ 到 $(y_i)_{i \in I}$ 的态射形如
  $(f_i)_{i \in I}$，其中对每个 $i$，
  有 $f_i \in \mathcal{C}_i (x_i, y_i)$。
  换言之，
  \[
  \mathcal{C} ((x_i)_{i \in I}, (y_i)_{i \in I}) =
  \prod_{i \in I} \mathcal{C}_i (x_i, y_i).
  \]

- 对象 $(x_i)_{i \in I}$ 的恒同态射是 $(\mathbb{1}_{x_i})_{i \in I}$。

- 态射的复合逐个分量定义。

:::

## 例子

- $0$ 个范畴的积范畴是[[单点范畴]]。

- $1$ 个范畴的积范畴是自身。

```terms
积范畴:
  en: product category
  fr: catégorie produit :f
```
