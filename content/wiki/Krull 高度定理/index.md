---
title: Krull 高度定理
aliases: [Krull 主理想定理]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Krull 高度定理**是[[交换代数]]的[[维数理论 (交换代数)|维数理论]]中的定理。
它说的是 [[Noether 环]]上 $d$ 元生成的理想上的[[极小素理想]]，
[[Krull 维数|高度]]不超过 $d$。

## 定理与证明

::: theorem
设 $A$ 是 [[Noether 环]]，$a_1,\ldots,a_d\in A$，
$\mathfrak{p}$ 是包含它们的理想中极小者。则
$\operatorname{ht}\mathfrak{p}\le d$。
:::

::: proof
对 $\mathfrak{p}$[[局部化]]不妨设 $A=A_\mathfrak{p}$
是局部环。由极小性，$A/(a_1,\ldots,a_d)$ 只有一个素理想
$\mathfrak{p}$，故为 [[Artin 环]]，于是作为自身的模为有限长，
故也是有限长 $A$-模。由[[维数理论 (交换代数)|维数理论]]的主定理知
$\operatorname{ht}\mathfrak{p}=\dim A\le d$。
:::

::: corollary [Krull 主理想定理]
Noether 环的主理想上素理想中极小者高度不超过 $1$。
:::

::: proof
这是定理的 $d=1$ 情形。
:::

```terms
Krull 高度定理:
  en: Krull's height theorem
  de: Krullscher Höhensatz
  fr: théorème de hauteur de Krull
Krull 主理想定理:
  en: Krull's principal ideal theorem
  de: Krullscher Hauptidealsatz
  fr: théorème des idéaux principaux de Krull
```
