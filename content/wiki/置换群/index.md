---
title: 置换群
categories: [有限群论]
---

<problems>
- “性质”一节需要扩充。
</problems>

$n$ 元**置换群**（也称为**对称群**）
$\mathfrak{S}_n$ 是所有 $n$ 元[[置换]]构成的[[群]]，其中 $n$ 是非负整数。
换言之，$\mathfrak{S}_n$ 是[[集合]] $\{ 1, \dotsc, n \}$ 到自身的所有[[双射]]
关于映射[[复合]]构成的群。

$\mathfrak{S}_n$ 的元素常常用 $2 \times n$ 矩阵来表示。例如，$\mathfrak{S}_5$ 的元素
\[
\begin{pmatrix}
  1 & 2 & 3 & 4 & 5 \\
  2 & 4 & 5 & 1 & 3
\end{pmatrix}
\]
表示把 $1$ 映到 $2$，把 $2$ 映到 $4$，……，把 $5$ 映到 $3$ 的置换。
该元素也可以记为 $(1 \ 2 \ 4) (3 \ 5)$，
即两个轮换（@def-轮换）的积。

## 定义

::: definition [置换]
[[集合]] $X$ 上的 **[[置换]]** 是指 $X$ 到 $X$ 的[[双射]]。
:::

::: definition [置换群]
集合 $X$ 上的**置换群** $\mathfrak{S}_X$
是 $X$ 上所有置换构成的群，其乘法定义为 $f g = f \circ g$。

特别地，当 $X = \{ 1, \dotsc, n \}$ 时，
记 $\mathfrak{S}_X = \mathfrak{S}_n$，
它是 $n!$ 阶[[有限群]]。
:::

::: remark
等价地说，置换群 $\mathfrak{S}_X$ 是[[集合范畴]]中的[[自同构|自同构群]]
$\operatorname{Aut}_{\mathsf{Set}} (X)$。
:::

::: definition [轮换] {@def-轮换}
在集合 $X$ 中，
关于不同元素 $x_1, x_2, \dotsc, x_k$ 的**轮换**是指如下定义的置换：
\[
(x_1 \ x_2 \ \cdots \ x_k) =
\begin{cases}
  x_i \mapsto x_{i+1} \quad (i = 1, \dotsc, k-1), \\
  x_k \mapsto x_1, \\
  \text{其余元素不变}.
\end{cases}
\]
:::

例如，$\mathfrak{S}_5$ 中有轮换
\[
(2 \ 4 \ 5) =
\begin{pmatrix}
  1 & 2 & 3 & 4 & 5 \\
  1 & 4 & 3 & 5 & 2
\end{pmatrix}.
\]

::: proposition
$\mathfrak{S}_n$ 的所有元素都能写成若干个无公共元素的轮换之积。
:::

## 例子

- $\mathfrak{S}_0$ 和 $\mathfrak{S}_1$ 都是[[平凡群]]。

- $\mathfrak{S}_2 = \{ \mathrm{id}, (1 \ 2) \}$
  同构于[[循环群]] $\mathbb{Z} / 2 \mathbb{Z}$。

- $\mathfrak{S}_3 = \{ \mathrm{id}, (1 \ 2), (1 \ 3), (2 \ 3), (1 \ 2 \ 3), (1 \ 3 \ 2) \}$
  是最小的非 Abel 群。

## 性质

```terms
置换群:
  en: symmetric group
  de: symmetrische Gruppe :f
  fr: groupe symétrique :m
```
