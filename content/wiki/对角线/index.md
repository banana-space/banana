---
title: 对角线
categories: [集合论]
notices:
  - name: 消歧义
    see:
      - topic: 几何中的对角线
        page: 对角线（几何）
---

[[集合]] $X$ 的**对角线**是 $X \times X$ 的子集，
由所有形如 $(x, x)$ 的点构成。

## 定义

### $X \times X$ 的对角线

::: definition [$X \times X$ 的对角线]
设 $X$ 是[[集合]]。则 $X \times X$ 的**对角线**定义为
\[
\Delta_X =
\{ (x, x) \mid x \in X \}
\subset X \times X.
\]
:::

### $X^n$ 的对角线

设 $n$ 是[[自然数]]，$X^n$ 是 $X$ 的 $n$ 重 [[Descartes 积]]。
在 $X^n$ 中有两种自然的对角线的概念。

::: definition [$X^n$ 的对角线]
设 $X$ 是[[集合]]，$n$ 是[[自然数]]。

- $X^n$ 中的**大对角线**是指
  \[
  \{ (x_1, \dotsc, x_n) \in X^n \mid
  \text{存在 $i \neq j$ 使得 $x_i = x_j$} \}.
  \]

- $X^n$ 中的**小对角线**是指
  \[
  \{ (x, \dotsc, x) \in X^n \mid x \in X \}.
  \]

:::

## 性质

- 对角线 $\Delta_X \subset X \times X$ 是[[恒等映射]] $\mathbb{1}_X$ 的[[图像]]，
  也是[[对角映射]] $X \to X \times X$ 的[[像]]。

```terms
对角线:
  en: diagonal
  de: Diagonale :f
  fr: diagonale :f
  grc: διαγώνιος :f
  la: diagonalis :f
```
