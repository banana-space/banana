---
title: 积（范畴论）
categories: [范畴论]
notices:
  - name: 消歧义
    see:
      - page: 积
  - name: 问题
    items:
      - “在高阶范畴中”一节需要扩充。
navboxes: [范畴论]
---

**积**是[[范畴论]]中的一种[[万有构造]]，
是一[[族]][[集合]]的[[积集]]的推广。

积的[[对偶]]概念是[[余积]]。

## 定义

### 在普通范畴中

::: definition [积] {@积}
设 $\mathcal{C}$ 是[[范畴]]，
设 $( x_i )_{i \in I}$ 是 $\mathcal{C}$ 中一[[族]][[对象]]。
这族对象的**积**（如果存在）是指 $\mathcal{C}$ 的对象
\[
\prod_{i \in I} x_i \quad \in \mathcal{C},
\]
并对每个 $i \in I$，带有一个态射
\[
\operatorname{pr}_i \colon
\biggl( \, \prod_{i \in I} x_i \biggr) \to x_i,
\]
称为向第 $i$ 分量的**投影**，满足以下[[万有性质]]：

- 若有对象 $y \in \mathcal{C}$，
  以及一族态射 $( f_i \colon y \to x_i )_{i \in I}$，
  则存在唯一的态射
  \[
  (f_i)_{i \in I} \colon y \to \prod_{i \in I} x_i,
  \]
  使得对每个 $i \in I$，图表
  \[
  \begin{tikzcd}
    y \ar[d, "(f_i)_{i \in I}"'] \ar[dr, "f_i"] \\
    \prod_{i \in I} x_i \ar[r, "\operatorname{pr}_i"'] &
    x_i
  \end{tikzcd}
  \]
  [[交换图|交换]]。

由于[[万有构造]]的唯一性，一族对象的积如果存在，
那么在相差同构的意义下是唯一的。
:::

::: remark
等价地说，积是离散图表的[[极限 (范畴论)|极限]]。
:::

@积 中，万有性质也可等价叙述如下：对任意 $y \in \mathcal{C}$，
投影态射诱导了集合同构
\[
\mathcal{C} \biggl( y, \ \prod_{i \in I} x_i \biggr) \simeq
\prod_{i \in I} \mathcal{C} (y, x_i),
\]
其中后者是[[积集]]。

我们也采用以下记号：

- 若 $I = \{ 1, \dotsc, n \}$，我们也记
  \[
  x_1 \times \cdots \times x_n =
  \prod_{i \in I} x_i.
  \]

- 若所有 $x_i$ 都为同一个对象 $x$，我们也记
  \[
  x^I = \prod_{i \in I} x.
  \]

### 在高阶范畴中

## 例子

- $0$ 个对象的积是[[终对象]]；
  $1$ 个对象的积是它自身。

- [[集合范畴]]中的积就是[[积集]]。

- [[代数结构]]（例如[[群]]、[[环]]、[[模]]）的积常常称为[[直积]]。

- [[域]]的范畴并不具有积。

- 在[[拓扑空间范畴]] $\mathsf{Top}$ 中，
  积由[[积空间]]给出。

```terms
积:
  en: product
  de: Produkt :n
  fr: produit :m
  grc: γενόμενον :n
  la: productum :n
  ja: 積<せき>
  ko: 곱
```
