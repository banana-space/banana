---
title: 转置
categories: [线性代数]
navboxes: [线性代数]
---

::: convention
在本文中，

- $R$ 是一个固定的[[交换环]]。

:::

**转置**是将[[矩阵]]的行、列互换的操作，
即沿由左上到右下的对角线翻转的操作。

若将矩阵视为其对应的[[向量空间]]（或[[自由模]]）间的[[线性映射]]，
则矩阵的转置对应于[[对偶空间]]（或[[对偶模]]）间的对偶映射。

## 定义

::: definition [转置]
设
\[
A =
\begin{pmatrix}
  a_{1, 1} & a_{1, 2} & \cdots & a_{1, n} \\
  a_{2, 1} & a_{2, 2} & \cdots & a_{2, n} \\
  \vdots   & \vdots   &        & \vdots   \\
  a_{m, 1} & a_{m, 2} & \cdots & a_{m, n} \\
\end{pmatrix}
\]
是 $R$ 上的 $m \times n$ 矩阵。
则 $A$ 的**转置**是 $R$ 上的 $n \times m$ 矩阵
\[
A^{\mathrm{t}} =
\begin{pmatrix}
  a_{1, 1} & a_{2, 1} & \cdots & a_{m, 1} \\
  a_{1, 2} & a_{2, 2} & \cdots & a_{m, 2} \\
  \vdots   & \vdots   &        & \vdots   \\
  a_{1, n} & a_{2, n} & \cdots & a_{m, n} \\
\end{pmatrix}.
\]
:::

矩阵 $A$ 的转置 $A^{\mathrm{t}}$ 也记作 $A^\mathrm{T}$ 或 $A^\top$，
偶尔也记作 $^\mathrm{t} A$ 或 $A'$。

## 性质

::: theorem
设 $A$、$B$ 是 $R$ 上的 $m \times n$ 矩阵。
设 $C$ 是 $R$ 上的 $n \times p$ 矩阵。
设 $k \in R$。
则

- $(A^{\mathrm{t}})^{\mathrm{t}} = A$；

- $(A + B)^{\mathrm{t}} = A^{\mathrm{t}} + B^{\mathrm{t}}$；

- $(kA)^{\mathrm{t}} = k A^{\mathrm{t}}$；

- $(AC)^{\mathrm{t}} = C^{\mathrm{t}} A^{\mathrm{t}}$。

:::

## 参考文献

- [行列式入门](/books/行列式入门/)

```terms
转置:
  en: transpose
  eo: transpono
```
