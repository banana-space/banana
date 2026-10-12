---
title: 余积
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [范畴论]
---

**余积**是[[范畴论]]中的一种[[万有构造]]，
是一族[[集合]]的[[无交并]]的推广。

余积的[[对偶]]概念是[[积 (范畴论)|积]]。

## 定义

::: definition [余积] {@余积}
设 $\mathcal{C}$ 是[[范畴]]，
设 $(x_i)_{i \in I}$ 是 $\mathcal{C}$ 中一[[族]][[对象]]。
这族对象的**余积**（如果存在）是指 $\mathcal{C}$ 的对象
\[
\coprod_{i \in I} x_i \quad \in \mathcal{C},
\]
并对每个 $i \in I$，带有一个态射
\[
\operatorname{in}_i \colon
x_i \to \coprod_{i \in I} x_i,
\]
称为第 $i$ 分量的**含入**，满足以下[[万有性质]]：

- 若有对象 $y \in \mathcal{C}$，
  以及一族态射 $(f_i \colon x_i \to y)_{i \in I}$，
  则存在唯一的态射
  \[
  (f_i)_{i \in I} \colon \coprod_{i \in I} x_i \to y,
  \]
  使得对每个 $i \in I$，图表
  \[
  \begin{tikzcd}
    x_i \ar[r, "\operatorname{in}_i"] \ar[dr, "f_i"'] &
    \coprod_{i \in I} x_i \ar[d, "(f_i)_{i \in I}"] \\
    & y
  \end{tikzcd}
  \]
  [[交换图|交换]]。

由于[[万有构造]]的唯一性，一族对象的余积如果存在，
那么在相差同构的意义下是唯一的。
:::

::: remark
等价地说，余积是离散图表的[[余极限]]。
:::

@余积 中，万有性质也可等价叙述如下：对任意 $y \in \mathcal{C}$，
含入态射诱导了集合同构
\[
\mathcal{C} \biggl( \, \coprod_{i \in I} x_i , \ y \biggr) \simeq
\prod_{i \in I} \mathcal{C} (x_i, y),
\]
其中后者是集合的 [[Descartes 积]]。

我们也采用以下记号：

- 若 $I = \{ 1, \dotsc, n \}$，我们也记
  \[
  x_1 \sqcup \cdots \sqcup x_n =
  \coprod_{i \in I} x_i,
  \]
  其中 $\sqcup$ 有时也记为 $\amalg$。

## 例子

- $0$ 个对象的余积是[[始对象]]；
  $1$ 个对象的余积是它自身。

- [[集合范畴]]中的余积就是[[无交并]]。

- [[群]]的余积是[[自由积]]。

- [[Abel 群]]、[[模]]、[[向量空间]]的余积是[[直和]]。

- [[拓扑空间]]的余积是[[无交并空间]]。
  [[带点拓扑空间]]的余积是[[一点并空间]]。

```terms
余积:
  en: coproduct
  de: Koprodukt :n
  fr: coproduit :m
```
