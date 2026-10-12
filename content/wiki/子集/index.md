---
title: 子集
aliases: [包含, 真子集, 真包含]
categories: [集合论]
navboxes: [集合论]
---

[[集合]] $X$ 的**子集**是由 $X$ 的一部分元素组成的集合。

集合 $X$ 的所有子集的集合称为其[[幂集]]，常记为 $2^X$，
它具有 [[Boole 代数]]的结构，
其子代数称为[[集合代数]]。

## 定义

::: definition [子集]
设 $X, Y$ 为[[集合]]。
如果对任意 $y \in Y$，都有 $y \in X$，
就说 $Y$ 是 $X$ 的**子集**，
记为
\[
Y \subset X \quad \text{或} \quad Y \subseteq X.
\]

此时，也称 $X$ **包含** $Y$，或称 $Y$ **包含于** $X$。
偶尔也称 $X$ 是 $Y$ 的**超集**，
记为 $X \supset Y$ 或 $X \supseteq Y$。
:::

::: definition [真子集]
设 $X, Y$ 为[[集合]]。
若 $Y \subset X$ 且 $Y \neq X$，
则称 $Y$ 为 $X$ 的**真子集**，
记为
\[
Y \subsetneq X \quad \text{或} \quad Y \subsetneqq X.
\]

此时，也称 $X$ **真包含** $Y$，或称 $Y$ **真包含于** $X$。
偶尔也称 $X$ 是 $Y$ 的**真超集**，
记为 $X \supsetneq Y$ 或 $X \supsetneqq Y$。
:::

## 例子

- [[空集]]是任何集合的子集；
  任何集合是自身的子集。

- 子集的子集仍是子集；
  一族子集的[[并集|并]]、[[交集|交]]仍是子集；
  子集的[[补集]]仍是子集。

```terms
子集:
  en: subset
  de: Teilmenge :f
  fr: sous-ensemble :m
  grc: ὑποσύνολον :n
  la: succopia :f
真子集:
  en: proper subset
  de: echte Teilmenge
  fr: sous-ensemble propre
  grc: γνήσιον ὑποσύνολον
  la: succopia propria
超集:
  en: superset
  de: Obermenge :f
  fr: sur-ensemble :m
  grc: ὑπερσύνολον :n
  la: supercopia :f
真超集:
  en: proper superset
  de: echte Obermenge
  fr: sur-ensemble propre
  grc: γνήσιον ὑπερσύνολον
  la: supercopia propria
```
