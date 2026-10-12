---
title: 形变收缩
aliases: [强形变收缩]
categories: [同伦论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，
**形变收缩**是一类[[收缩]]，
大致是指将某个[[拓扑空间]]中的所有点
连续地移动到某个[[拓扑子空间|子空间]]中的过程。
如果能找到这样的形变收缩，则该子空间必定与大空间[[同伦等价]]。

## 定义

::: definition [形变收缩]
设 $X$ 是[[拓扑空间]]，$A \subset X$ 是[[拓扑子空间|子空间]]，
并记 $i \colon A \hookrightarrow X$ 为[[含入映射]]。
设 $r \colon X \to A$ 是[[连续映射]]，
满足 $r \circ i = \mathbb{1}_A$，
即 $r$ 是 $i$ 的[[收缩]]。

- 称 $r$ 为**形变收缩**，
  如果 $i \circ r \colon X \to X$ [[同伦]]于[[恒同映射]] $\mathbb{1}_X$。
  此时，也称 $A$ 为 $X$ 的**形变收缩核**。

- 称 $r$ 为**强形变收缩**，
  如果 $i \circ r \colon X \to X$
  [[同伦|相对于]] $A$
  [[同伦]]于[[恒同映射]] $\mathbb{1}_X$。
  此时，也称 $A$ 为 $X$ 的**强形变收缩核**。

:::

## 例子

- [[恒同映射]]是强形变收缩。

- [[可缩空间]]向其中任意一点的[[常值映射]]都是形变收缩，
  但不一定是强形变收缩。

## 性质

- 形变收缩都是[[同伦等价]]，这可由定义直接得出。

```terms
形变收缩:
  en: deformation retraction
  fr: rétraction par déformation :f
  de: Deformationsretraktion :f
  ja: 変<へん>位<い>レトラクション
  ko: 변형 수축 (變形收縮)
形变收缩核:
  en: deformation retract
  fr: rétract par déformation :m
  de: Deformationsretrakt :m
  ja: 変<へん>位<い>レトラクト
强形变收缩:
  en: strong deformation retraction
  fr: rétraction forte par déformation :f
  ja: 強<きょう>変<へん>位<い>レトラクション
  ko: 강한 변형 수축
强形变收缩核:
  en: strong deformation retract
  fr: rétract fort par déformation :m
  ja: 強<きょう>変<へん>位<い>レトラクト
```
