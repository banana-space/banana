---
title: 双射
aliases: [一一对应]
categories: [集合论]
---

集合间[[映射 (集合论)|映射]] $f \colon X \to Y$
称为**双射**（或**一一对应**、**集合同构**），
如果 $f$ 既是[[单射]]又是[[满射]]。
换言之，$Y$ 中每个元素的[[原像]]恰有一个元素。

双射也是[[集合范畴]]中的[[同构]]。

## 定义

::: definition [双射]
集合间[[映射 (集合论)|映射]] $f \colon X \to Y$
称为**双射**，如果 $f$ 既是[[单射]]又是[[满射]]。
:::

## 性质

::: proposition [双射等价于可逆]
集合间映射 $f \colon X \to Y$ 为双射，
当且仅当存在映射 $f^{-1} \colon Y \to X$，
称为 $f$ 的 **[[逆映射]]**，使得

- $f^{-1} \circ f = \mathbb{1}_X$ 是 $X$ 上的[[恒同映射]]。

- $f \circ f^{-1} = \mathbb{1}_Y$ 是 $Y$ 上的恒同映射。

:::

```terms
双射:
  en: bijection
  fr: bijection :f
  de: Bijektion :f
  grc: διΐεσις :f
  la: biiectio :f
双:
  en: bijective
  fr: bijectif
  de: bijektiv
  grc: διϊετικός
  la: biiectivus
一一对应:
  en: one-to-one correspondence
  fr: correspondance biunivoque :f
  de: bijektive Korrespondenz :f
  la: correspondentia biunivoca :f
```
