---
title: 矩阵
categories: [线性代数]
navboxes: [线性代数]
---

**矩阵**是指排列成矩形表格的一系列元素。

矩阵是[[线性代数]]中的基础概念，
它是[[线性映射]]的一种便于计算的形式。

## 定义

::: definition [矩阵] {@def-matrix}
设 $X$ 是[[集合]]，$m, n$ 是[[自然数]]。
一个由 $X$ 中元素组成的 $m \times n$ **矩阵**是指形如
\[
\begin{pmatrix}
  x_{1, 1} & x_{1, 2} & \cdots & x_{1, n} \\
  x_{2, 1} & x_{2, 2} & \cdots & x_{2, n} \\
  \vdots   & \vdots   &        & \vdots   \\
  x_{m, 1} & x_{m, 2} & \cdots & x_{m, n} \\
\end{pmatrix}
\]
的表格，其中每个 $x_{i,j}$ 都是 $X$ 的元素。这个矩阵也通常记作
\[
(x_{i, j}), \quad
(x_{i, j})_{m \times n} \, , \quad
(x_{i, j}) _{
  \substack{
    1 \leq i \leq m \\
    1 \leq j \leq n
  }
}
\]
等等。
:::

矩阵最重要的用处之一是用来表示[[线性映射]]。

::: example [线性映射的矩阵表示]
设

- $V, W$ 是[[域]] $\mathbb{k}$ 上的有限维[[向量空间]]，
  其维数分别为 $n, m$。

- $f \colon V \to W$ 是[[线性映射]]。

- $\{ v_1, \dotsc, v_n \}$ 是 $V$ 的一组[[基]]，
  $\{ w_1, \dotsc, w_m \}$ 是 $W$ 的一组基。

则每个 $f (v_j) \in W$ 可以写成基元素 $w_i$ 的线性组合：
\[
f (v_j) = \sum_{i = 1}^m a_{i, j} w_i \quad
(a_{i, j} \in \mathbb{k}).
\]
则由 $\mathbb{k}$ 中元素构成的 $m \times n$ 矩阵
\[
A = (a_{i, j}) _{
  \substack{
    1 \leq i \leq m \\
    1 \leq j \leq n
  }
}
\]
称为线性映射 $f$ 关于这两组基的**矩阵表示**。

注意到，这个矩阵的第 $j$ 列就是基向量 $v_j$ 被 $f$ 所映到的向量，
写成关于基 $\{ w_1, \dotsc, w_m \}$ 的坐标。
:::

## 运算

如果 @def-matrix 中集合 $X$ 上定义了运算，我们就可以定义 $X$ 上矩阵的运算。
下面我们假设 $X = R$ 是一个[[环]]。

- [[矩阵加法]]：对于 $m\times n$ 矩阵 $A=(a_{i,j}), B=(b_{i,j}), a_{i,j},b_{i,j}\in R$，
  那么 $A+B=(a_{i,j}+b_{i,j})$，即 $A+B$ 定义为逐元素相加的结果
  \[
  \begin{pmatrix}
    a_{1, 1}+b_{1,1} & a_{1, 2}+b_{1,2} & \cdots & a_{1, n}+b_{1,n} \\
    a_{2, 1}+b_{2,1} & a_{2, 2}+b_{2,2} & \cdots & a_{2, n}+b_{2,n} \\
    \vdots   & \vdots   &        & \vdots   \\
    a_{m, 1}+b_{m,1} & a_{m, 2}+b_{m,2} & \cdots & a_{m, n}+b_{m,n} \\
  \end{pmatrix}
  \]
  $R$ 上的矩阵加法满足交换律：$A+B=B+A$。
  这时全体 $m\times n$ 矩阵关于加法构成 [[Abel 群]]，元素全为零的矩阵 $0$ 是零元。

- 数乘矩阵：对于 $m\times n$ 矩阵 $A=(a_{i,j})$，$c\in R$，那么 $cA=(ca_{i,j})$，
  即将 $A$ 的每个元素均乘以 $c$。这时全体 $m\times n$ 矩阵构成 $R$-[[模]]。

- [[矩阵乘法]]：对于 $m\times n$ 矩阵 $A=(a_{i,j})$，
  $n\times p$ 矩阵 $B=(b_{i,j})$（注意 $A$ 的列数等于 $B$ 的行数），
    我们定义其积 $AB$ 为一个 $m\times p$ 矩阵 $(c_{i,j})$，其元素 $c_{i,j}$ 由下式给出：
    \[
    c_{i,j}=\sum_{k=1}^n a_{i,k} b_{k,j}
    \]
    矩阵的乘法满足结合律，但是一般不满足交换律。矩阵乘法对加法满足左、右[[分配律]]。

    我们有时把 $AB$ 说成 $A$ 左乘 $B$ 或 $B$ 右乘 $A$ 的结果。

    [[方阵]]间总是可以进行乘法。$R$ 上的所有 $n$ 阶方阵构成一个[[幺环]]，通常是非交换的。
    其乘法单位为[[单位阵]]，即对角线全为 $1$，其余元素为 $0$ 的 $n$ 阶方阵。
    该环是一个 $R$-[[结合代数]]，称为[[矩阵代数]]。

```terms
矩阵:
  en: matrix
  de: Matrix :f
  fr: matrice :f
  grc: πίναξ :m
  la: matrix :f
  ja: 行<ぎょう>列<れつ>
```
