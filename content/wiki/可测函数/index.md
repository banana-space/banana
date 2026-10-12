---
title: 可测函数
aliases: [可测映射]
categories: [测度论]
---

**可测函数**（或**可测映射**）
是[[可测空间]]之间的[[映射]]，
它与可测空间的结构相容。

## 定义

::: definition [可测函数]
设 $(X, \mathcal{A})$ 与 $(Y, \mathcal{B})$ 为[[可测空间]]。
它们之间的**可测函数**是指[[映射 (集合论)|映射]]
\[
f \colon X \to Y,
\]
使得[[可测集]]的[[原像]]仍是可测集。
换言之，对任意 $B \in \mathcal{B}$，都有 $f^{-1} (B) \in \mathcal{A}$。
:::

上述定义的一个常见情况是
$Y = \mathbb{R} \text{ 或 } \mathbb{C}$，
且 $\mathcal{B}$ 为 $Y$ 的 [[Borel sigma-代数|Borel $\sigma$-代数]]。
此时的定义可以重新叙述如下：

::: definition [实值、复值可测函数]
[[可测空间]] $(X, \mathcal{A})$ 上的实值（或复值）
**可测函数**是指[[映射 (集合论)|映射]]
\[
f \colon X \to \mathbb{R} \text{ 或 } \mathbb{C},
\]
使得[[开集]]的原像是可测集。

等价地说，$f$ 是到可测空间
$(\mathbb{R}, \mathcal{B}_{\mathbb{R}})$ 或
$(\mathbb{C}, \mathcal{B}_{\mathbb{C}})$ 的可测函数，
其中 $\mathcal{B}_{\mathbb{R}}$ 和 $\mathcal{B}_{\mathbb{C}}$
分别是 $\mathbb{R}$ 和 $\mathbb{C}$ 的
[[Borel sigma-代数|Borel $\sigma$-代数]]。
:::

```terms
可测函数:
  en: measurable function
  de: messbare Funktion :f
  fr: fonction mesurable :f
  grc: μετρητὴ συνάρτησις :f
  la: functio mensibilis :f
```
