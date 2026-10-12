---
title: 关系
aliases: [二元关系]
categories: [集合论]
---

[[集合]] $X$ 上的**关系**是一种规则，给定 $X$ 中若干[[元素]]，
就能判定它们是否满足这种关系。
例如，[[自然数]]集上的关系包括相等、小于、小于等于、[[整除]]等。
这些例子都是**二元关系**，即两个元素满足的关系。

## 定义

::: definition [关系]
设 $n$ 是[[自然数]]。
[[集合]] $X_1, \dotsc, X_n$ 上的 **$n$ 元关系**是指一个[[子集]]
\[
R \subset X_1 \times \cdots \times X_n ,
\]
其中右边为集合的 [[Descartes 积]]。
如果 $(x_1, \dotsc, x_n) \in R$，
我们说这些元素**满足**关系 $R$，并记
\[
R (x_1, \dotsc, x_n).
\]
当 $n = 2$ 时，$R (x_1, x_2)$ 常常记为 $x_1 \mathrel{R} x_2$，
有时也说该二元关系是**从 $X_1$ 到 $X_2$** 的。

单个集合 $X$ 上的 **$n$ 元关系**定义为 $X, \dotsc, X$ 上的 $n$ 元关系。
:::

## 例子

- 集合 $X$ 上的**零元关系**也就是[[单点集]]的子集，即[[逻辑值]]。

- 集合 $X$ 上的**一元关系**也就是 $X$ 的子集。

- 集合 $X$ 上的**二元关系**也就是 $X \times X$ 的子集。

  - 任何集合上，元素的相等、不相等都是两种二元关系，
    分别对应 $X \times X$ 的[[对角线]]和它的[[补集]]。

  - [[自然数]]集 $\mathbb{N}$ 上的二元关系有小于、小于等于、[[整除]]等。

## 种类

- [[部分映射]]
- [[映射 (集合论)|映射]]
- [[多值映射]]
- [[自反关系]]
- [[传递关系]]
- [[对称关系]]
- [[全关系]]
- [[等价关系]]
- [[偏序]]
- [[全序]]
- [[良序]]

```terms
关系:
  en: relation
  de: Relation :f
  fr: relation :f
  grc: σχέσις :f
  la: relatio :f
二元关系:
  en: binary relation
  de: zweistellige Relation
  fr: relation binaire
  grc: δυαδικὴ σχέσις
  la: relatio binaria
$n$ 元关系:
  en: $n$-ary relation
  de: $n$-stellige Relation
  fr: relation $n$-aire
  grc: '$\nu$-αδικὴ σχέσις'
  la: relatio $n$-aria
```
