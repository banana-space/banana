---
title: 合成列
categories: [群论]
navboxes: [群论]
---

在[[群论]]以及更一般的[[抽象代数]]中，合成列可用于将数学对象拆分为更简单的成分（例如[[单群]]）。

## 定义

::: definition [群的合成列]
令$G$是一个[[群]]，则$G$的一个合成列意谓以下资料：

- 一个有限长的子群列
  \[
  G = G_0 \supsetneq G_1 \supsetneq G_2 \supsetneq ... \supsetneq G_n = \left\{ e \right\}
  \]

- 以下命题成立

  1. $\forall 0 \leq i \leq n - 1$，$G_{i + 1}$均是$G_i$的[[正规子群]]

  2. 诸商群\(G_i / G_{i+1} , i \in \mathbb{N}\)均是[[单群]]

:::

## 例子

::: example
令$G = \mathbb{Z}/6\mathbb{Z} = \left\{ [0], [1], [2], [3], [4], [5] \right\}$，则
\[
\left\{ [0], [1], [2], [3], [4], [5] \right\} \supsetneq \left\{ [0], [3] \right\} \supsetneq \left\{ [0] \right\}
\]
是一个合成列。容易验证其中的商群\(\mathbb{Z}/3 \mathbb{Z}\) 与 \(\mathbb{Z}/2 \mathbb{Z}\)都是单群。
:::

::: example
容易观察到，整数群\(\mathbb Z\)不存在合成列。
（提示：\(\mathbb Z\)的子群均形如\(d\mathbb{Z}\)，其中\(d \in \mathbb{N}\)。）
:::

## 性质

### 基本性质

::: proposition
有限群均存在合成列。
:::

```terms
合成列:
  en: composition series
```
