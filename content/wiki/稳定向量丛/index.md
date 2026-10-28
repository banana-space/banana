---
title: 稳定向量丛
aliases: [半稳定向量丛]
categories: [模空间论]
---

<problems>
- “一般定义”一节需要扩充。
</problems>

**稳定向量丛**是一类[[全纯向量丛]]或[[代数向量丛]]，
主要应用于[[向量丛的模空间]]理论中。
这些向量丛没有非平凡的[[自同态]]，
故而其[[模叠]]具有较好的性质，常常可以构造出[[概形]]作为[[模空间]]；
而若考虑一般的向量丛，则通常只有[[模叠]]，而没有这样好的模空间。

向量丛的稳定性来源于[[几何不变量理论]]中的稳定性。
然而，这种稳定性在[[弦论]]中有一种自然的解释，
来源于 [@DouglasFiolRomelsberger2005]，另见 [@nlabBridgeland] 的解释。
大致地说，向量丛对应于 [[D 膜]]，其中的稳定向量丛则对应于 [[BPS 态]]。

## 定义

### 代数曲线上

::: definition
设 $X$ 是[[紧空间|紧]] [[Riemann 面]]，
$E$ 是 $X$ 上的[[全纯向量丛]]。

- $E$ 的**次数**定义为
  \[
  \deg (E) = \frac {c_1 (E)} {\omega} \in \mathbb{Z} \, ,
  \]
  其中 $\omega \in H^2 (X; \mathbb{Z})$ 是 $X$ 的[[定向类]]。

- $E$ 的**斜率**定义为
  \[
  \mu (E) = \frac {\deg (E)} {\operatorname{rank} (E)} \in \mathbb{Q} \, ,
  \]
  其中 $\operatorname{rank} (E)$ 是 $E$ 的秩。

- $E$ 称为**稳定向量丛**，若对任意子丛 $0 \subsetneq F \subsetneq E$，都有
  \[
  \mu (F) < \mu (E).
  \]

- $E$ 称为**半稳定向量丛**，若对任意子丛 $0 \subsetneq F \subsetneq E$，都有
  \[
  \mu (F) \leq \mu (E).
  \]

- $E$ 称为**不稳定向量丛**，若 $E$ 不是半稳定向量丛。

:::

### 一般定义

## 参考文献

```bibliography
DouglasFiolRomelsberger2005:
  type: article
  author: ['Douglas, Michael R.', 'Fiol, Bartomeu', 'Römelsberger, Christian']
  title: Stability and BPS branes
  journaltitle: J. High Energy Phys.
  volume: 2005
  number: '09'
  doi: 10.1088/1126-6708/2005/09/006
  year: 2005
  arxiv: hep-th/0002037
nlabBridgeland:
  type: online
  site: nLab
  title: Bridgeland stability condition
  url: https://ncatlab.org/nlab/show/Bridgeland+stability+condition
```

```terms
稳定向量丛:
  en: stable vector bundle
  de: stabiles Vektorbündel
  fr: fibré vectoriel stable
半稳定向量丛:
  en: semistable vector bundle
  de: semistabiles Vektorbündel
  fr: fibré vectoriel semistable
```
