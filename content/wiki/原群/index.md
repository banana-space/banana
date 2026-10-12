---
title: 原群
aliases: [Magma]
categories: [一般代数]
navboxes: [代数结构]
---

**原群**是一种简单的[[代数结构]]，
是指带有[[二元运算]]的[[集合]]，该二元运算无需满足任何性质。

## 定义

::: definition [原群]
**原群**是指二元组 $(M, \cdot)$，其中

- $M$ 是[[集合]]。

- $\cdot \colon M \times M \to M$
  是 $M$ 上的[[二元运算]]，称为**乘法**。

无歧义时，也直接称 $M$ 为原群。
:::

::: definition [原群同态]
设 $M, N$ 为原群。则 $M$ 到 $N$ 的**原群同态**是指[[映射 (集合论)|映射]]
$f \colon M \to N$，使得对任意 $m, m' \in M$，有
\[
f (m \cdot m') = f (m) \cdot f (m').
\]
:::

```terms
原群:
  en: magma
  de: Magma :n
  fr: magma :m
  ja: マグマ
  ko: 마그마
```
