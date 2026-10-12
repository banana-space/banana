---
title: 正规扩张
categories: [域论]
navboxes: [域论]
---

**正规扩张**是一类[[代数扩张]]。
它是满足在共轭下不变的扩张。具体而言，
假设 $K/k$ 是代数扩张，对 $a\in K$，
$a$ 的[[极小多项式]]的其他根（在[[代数闭域]] $\bar k$ 里）
称为 $a$ 的共轭，而正规扩张要求所有共轭都在 $K$ 中。

## 定义

::: definition [正规扩张]
设 $K/k$ 是代数扩张。若对任意 $a\in K$，
$a$ 的[[极小多项式]]在 $K$ 上能写成一次项的乘积，
则称 $K/k$ 是**正规扩张**。
:::

## 性质

::: proposition
设 $L/K$ 是域扩张，$K/F$ 是正规扩张。
设 $\sigma: L\to L$ 是自同构且 $F$-线性。
则 $\sigma (K)=K$。
:::

::: proof
设 $a\in K$，$f$ 是 $a$ 的极小多项式。容易验证
\[
f(\sigma (a))=\sigma (f(a))=0
\]
故 $\sigma (a) \in K$。
:::

```terms
正规扩张:
  en: normal extension
  de: normale Erweiterung
  fr: extension normale
  grc: γνωμονικὴ ἐπέκτασις
  la: extensio normalis
```
