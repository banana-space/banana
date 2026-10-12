---
title: 幂零根
categories: [交换代数]
navboxes: [交换代数]
---

在[[交换代数]]中，
[[交换环]]的**幂零根**是其中所有[[幂零元]]组成的[[理想]]，
它是零理想的[[根]]。幂零根恰为所有[[素理想]]的交。

## 定义

::: definition
设$R$是[[交换环]]。$R$的**幂零根**是由$R$中[[幂零元]]
构成的[[理想]]，即
\[
\mathrm{Nil}(R) = \left\{ r \in R \mid
\text{存在整数 } n > 0 \text{ 使得 } r^n = 0 \right\}.
\]
:::

::: proposition
$\mathrm{Nil}(R)$是$R$中所有[[素理想]]的交。
:::

::: proof
用$\mathrm{Nil}' (R)$表示$R$的所有素理想的交。

“$\subseteq$”：若$r \in \mathrm{Nil}(R)$，
则存在$n \in \mathbb{Z}_{>0}$，使得$r^n = 0$。
对于$R$的任意素理想$\mathfrak{p}$，
由素理想的定义和$0\in\mathfrak{p}$，$r \in \mathfrak{p}$。
因此$\mathrm{Nil}(R) \subseteq \mathrm{Nil}' (R)$。

“$\supseteq$”：反过来要证$\mathrm{Nil}' (R) \subseteq \mathrm{Nil}(R)$。
等价地，假设$r \notin \mathrm{Nil}(R)$。我们证明存在一个素理想不包含$r$。
令
\[
\Sigma = \left\{ \mathfrak{a} \subseteq R \mid \mathfrak{a} \text{ 是理想, } \forall n \in \mathbb{Z}_{>0}, r^n \notin \mathfrak{a} \right\}.
\]
由于$r$不是幂零元，零理想$\{0\} \in \Sigma$，
因此$\Sigma$非空，$\Sigma$关于包含构成一个偏序集。
由[[Zorn 引理]]，$\Sigma$存在极大元$\mathfrak{p}$。
下面说明$\mathfrak{p}$是素理想。

设$x, y \notin \mathfrak{p}$，则$\mathfrak{p} + (x), \mathfrak{p} + (y)$
严格包含$\mathfrak{p}$，由$\mathfrak{p}$是极大元，
因此$\mathfrak{p} + (x), \mathfrak{p} + (y) \notin \Sigma$。
从而存在$m, n \in \mathbb{Z}_{>0}, r^m \in \mathfrak{p} + (x), r^n \in \mathfrak{p} +(y)$。
那么就有$r^{m + n} \in \mathfrak{p} + (xy)$，
这说明$\mathfrak{p} + (xy) \notin \Sigma$。
所以$xy \notin \mathfrak{p}$。故$\mathfrak{p}$是素理想。
:::

## 例子

- 若$R$是[[既约环]]，例如[[整环]]，则$\mathrm{Nil}(R) = \{0\}$。

- $R$ 是交换 [[Artin 环]]，则$R$是零维的，即所有[[素理想]]
  都是[[极大理想]]。此时 $\mathrm{Nil}(R)$ 就是 $R$ 的 [[Jacobson 根]]。

```terms
幂零根:
  en: nilradical
  de: Nilradikal :n
  fr: nilradical :m
```
