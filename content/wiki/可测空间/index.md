---
title: 可测空间
categories: [测度论]
---

**可测空间**指带有一个 [[$\sigma$-代数]]的集合，
用来指示该集合的哪些子集是[[可测集]]，即“可以测量大小的集合”。
[[测度]]的概念需要定义在可测空间上。

## 定义

::: definition [可测空间]
**可测空间**指二元组 $(X, \mathcal{A})$，
其中 $X$ 为[[集合]]，
$\mathcal{A}$ 为 $X$ 上的 [[$\sigma$-代数]]。

此时，$\mathcal{A}$ 的元素称为 $X$ 的**可测集**。
:::

## 例子

- [[拓扑空间]]上的 [[Borel $\sigma$-代数]]，
  也就是使得其[[开集]]均可测的最小 $\sigma$-代数。
  这是一种常见的构造可测空间的方法。

- 取 $X = \mathbb{R}^n$，
  $\mathcal{A}$ 为 $\mathbb{R}^n$ 上所有 Lebesgue 可测集，
  则 $(X, \mathcal{A})$ 是可测空间。
  其上有自然的 [[Lebesgue 测度]]使之成为[[测度空间]]。

```terms
可测空间:
  en: measurable space
  de: Messraum :m
  fr: espace mesurable :m
  grc: μετρητὸς χῶρος :m
  la: spatium mensibile :n
```
