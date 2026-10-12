---
title: 行列式
categories: [线性代数]
navboxes: [线性代数]
---

**行列式**是一个[[函数]]，
给定一个[[方阵]]，能得到一个[[标量]]。
方阵 $A$ 的行列式通常记作 $\det A$ 或 $|A|$。

对于[[实数|实]] $n \times n$ 矩阵而言，
行列式可以看作它的 $n$ 个列向量在 $\mathbb{R}^n$
中张成的[[平行多胞体|平行 $2n$ 胞体]]的[[有向体积]]。
例如，$n = 2$ 的情况就是[[平行四边形]]的有向面积。

## 定义

### 通过展开式

::: definition [行列式]
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵。
则 $A$ 的**行列式**定义为
\[
\det A =
\sum_{\sigma \in \mathfrak{S}_n}
(-1)^{\sigma} \,
a_{1, \sigma(1)} \cdots a_{n, \sigma(n)},
\]
其中 $\mathfrak{S}_n$ 是 $n$ 元[[置换群]]，
$(-1)^\sigma$ 是 $\sigma$ 的符号（[[偶置换]]为 $+1$，奇置换为 $-1$）。
:::

### 通过递归

::: definition [行列式]
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵。
则 $A$ 的**行列式**定义为
\[
\det A =
\begin{dcases}
  a_{1, 1},
  & n = 1; \\
  \sum_{i = 1}^{n}
  (-1)^{i + 1} a_{i, 1} \det {A(i|1)},
  & n \geq 2,
\end{dcases}
\]
其中 $A(i|j)$ 是删去 $A$ 的行 $i$ 与列 $j$ 后，
未被删去的元按原次序作成的 $(n - 1) \times (n - 1)$ 矩阵。
:::

### 通过反对称积

::: definition [行列式]
设 $\mathbb{k}$ 是[[域]]，$V$ 是 $\mathbb{k}$ 上的 $n$ 维[[向量空间]]，
$f \colon V \to V$ 是[[线性映射]]。则 $f$ 的**行列式**定义为
\[
\det f = \Lambda^n (f) \colon \Lambda^n (V) \to \Lambda^n (V),
\]
这里 $\Lambda^n (V)$ 是 $V$ 的 $n$ 次[[反对称积]]，
它是 $1$ 维向量空间，
从而 $\Lambda^n (f)$ 可以看作 $\mathbb{k}$ 的元素。
:::

### 通过公理

::: definition [行列式]
设 $\mathbb{k}$ 是[[域]]，$M_n(\mathbb{k})$ 是 $\mathbb{k}$ 上的 $n$ 阶方阵构成的代数。
则**行列式**定义为满足下面三个公理的唯一函数 $\det \colon M_n(\mathbb{k}) \to \mathbb{k}$：

- $\det(A_1,\ldots,cA_k,\ldots,A_n)=c\det(A_1,\ldots,A_k,\ldots,A_n), c\in \mathbb{k}$。
  这里 $A_1,\ldots,A_n$ 分别表示 $M_n(\mathbb{k})$ 中矩阵的第 1 行至第 $n$ 行，下同；

- $\det(A_1,\ldots,A_i,\ldots,A_j,\ldots,A_n)=\det(A_1,\ldots,A_i+A_j,\ldots,A_j,\ldots,A_n)$；

- $\det(I)=1$，$I$ 是单位矩阵。

:::

## 性质

::: theorem
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵。
则
\[
\det {A^{\mathrm{T}}} = \det {A},
\]
其中 $A^{\mathrm{T}}$ 是 $A$ 的[[转置]]。
于是，行列式的关于矩阵的列（行）的定理可被易地、快地译为行列式的关于矩阵的行（列）的定理。
:::

::: theorem
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵，
$\tau \in \mathfrak{S}_n$。
则
\[
\det A =
\sum_{\sigma \in \mathfrak{S}_n}
(-1)^{\tau} (-1)^{\sigma} \,
a_{\tau(1), \sigma(1)} \cdots a_{\tau(n), \sigma(n)},
\]
且
\[
\det A =
\sum_{\sigma \in \mathfrak{S}_n}
(-1)^{\sigma} (-1)^{\tau} \,
a_{\sigma(1), \tau(1)} \cdots a_{\sigma(n), \tau(n)}.
\]
:::

::: theorem
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵，
$\ell$ 是不超过 $n$ 的正整数。
则
\[
\det A =
\begin{dcases}
  a_{1, 1},
  & n = 1; \\
  \sum_{i = 1}^{n}
  (-1)^{i + \ell} a_{i, \ell} \det {A(i|\ell)},
  & n \geq 2,
\end{dcases}
\]
且
\[
\det A =
\begin{dcases}
  a_{1, 1},
  & n = 1; \\
  \sum_{j = 1}^{n}
  (-1)^{\ell + j} a_{\ell, j} \det {A(\ell|j)},
  & n \geq 2.
\end{dcases}
\]
:::

::: theorem
设 $R$ 是[[交换环]]，$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵，
$k$ 是小于 $n$ 的正整数，
$\ell_1$、$\ell_2$、$\dots$、$\ell_k$
是不超过 $n$ 的正整数，
且 $\ell_1 < \ell_2 < \dots < \ell_k$。
则
\[
\det A =
\sum_{1 \leq i_1 < i_2 < \dots < i_k \leq n}
(-1)^{i_1+\dots+i_k+\ell_1+\dots+\ell_k}
\det {A\binom{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}}
\det {A({i_1,\dots,i_k}|{\ell_1,\dots,\ell_k})},
\]
且
\[
\det A =
\sum_{1 \leq j_1 < j_2 < \dots < j_k \leq n}
(-1)^{\ell_1+\dots+\ell_k+j_1+\dots+j_k}
\det {A\binom{\ell_1,\dots,\ell_k}{j_1,\dots,j_k}}
\det {A({\ell_1,\dots,\ell_k}|{j_1,\dots,j_k})},
\]
其中 $A\binom{i_1,\dots,i_k}{j_1,\dots,j_k}$
是由 $A$ 的行 $i_1$、$\dots$、$i_k$
与列 $j_1$、$\dots$、$j_k$
的交叉处的元按原次序作成的 $k \times k$ 矩阵（子矩阵），
且 $A({i_1,\dots,i_k}|{j_1,\dots,j_k})$
是删去 $A$ 的行 $i_1$、$\dots$、$i_k$
与列 $j_1$、$\dots$、$j_k$ 后，
未被删去的元按原次序作成的 $(n - k) \times (n - k)$ 矩阵。
:::

::: theorem
设 $R$ 是[[交换环]]，
$A = (a_{i, j})$ 是 $R$ 上的 $s \times n$ 矩阵，
$B = (b_{i, j})$ 是 $R$ 上的 $m \times s$ 矩阵。
设 $k$ 是一个既不超过 $m$，也不超过 $n$ 的正整数。
设 $1 \leq i_1 < \dots < i_k \leq m$；
设 $1 \leq j_1 < \dots < j_k \leq n$。

- 若 $k > s$，则 \(B\) 与 \(A\) 的积 $BA$ 的子矩阵
  $(BA) \binom{i_1, \dots, i_k}{j_1, \dots, j_k}$
  的行列式
  \[
  \det {\left(
    (BA) \binom{i_1, \dots, i_k}{j_1, \dots, j_k}
   \right)} = 0.
  \]

- 若 $k \leq s$，则
  \[
  \det {\left(
    (BA) \binom{i_1, \dots, i_k}{j_1, \dots, j_k}
   \right)}
   =
   \sum_{1 \leq \ell_1 < \dots < \ell_k \leq s}
  \det {
    B \binom{i_1, \dots, i_k}{\ell_1, \dots, \ell_k}
   }
  \det {
    A \binom{\ell_1, \dots, \ell_k}{j_1, \dots, j_k}
   }.
  \]

特别地，设 $A$、$B$ 都是 $n \times n$ 矩阵。
则
\[
\det {BA} = (\det {B}) (\det {A}).
\]
:::

::: theorem
设 $R$ 是[[交换环]]，
$A = (a_{i, j})$ 是 $R$ 上的 $n \times n$ 矩阵。
作 $R$ 上的 $n \times n$ 矩阵
$\operatorname{adj} {A} = (b_{i, j})$，
使 $b_{i, j} = (-1)^{j+i} \det {A(j|i)}$。
则
\[
(\operatorname{adj} {A}) A
= (\det {A}) I
= A (\operatorname{adj} {A}).
\]
:::

::: theorem
设 $R$ 是[[交换环]]，
$M_n(R)$ 是 $R$ 上的 $n$ 级方阵环。
设函数 $f \colon M_n(R) \to R$ 适合：

- $f(A_1, \dots, cA_k + c'A'_k, \dots, A_n)
      = c f(A_1, \dots, A_k, \dots, A_n)
      + c' f(A_1, \dots, A'_k, \dots, A_n)$，
  其中 $A_1$、$\dots$、$A_n$ 分别表示
  $M_n(R)$ 中矩阵的行 $1$ 至行 $n$；

- 若 $A \in M_n(R)$ 有二行相同，
  则 $f(A) = 0$。

则 $f(A) = f(I) \det {A}$，
对任何 $A \in M_n(R)$。

特别地，若 $f(I) = 1$，则 $f(A) = \det {A}$。
:::

::: theorem
设 $\mathbb{k}$ 是[[域]]。
设函数 $f \colon M_n(\mathbb{k}) \to \mathbb{k}$ 适合：

- $f(AB) = f(A) f(B)$，
  对任何 $A$，$B \in M_n(\mathbb{k})$；

- $f(D) = d_{1,1} d_{2,2} \dots d_{n,n}$，
  其中 $D = (d_{i, j}) \in M_n(\mathbb{k})$ 是[[对角阵]]。

则 $f(A) = \det {A}$，
对任何 $A \in M_n(\mathbb{k})$。
:::

::: theorem {@thm:characteristic-polynomial}
设 $R$ 是[[交换环]]，
$B$、$D$ 是 $R$ 上的 $n \times n$ 矩阵，
且 $D$ 是[[对角阵]]。
则
\[
\det {(B + D)} =
\det {D}
+ \sum_{k = 1}^{n-1}
{
\sum_{1 \leq j_1 < j_2 < \dots < j_k \leq n}
\det {
  B\binom{j_1,\dots,j_k}{j_1,\dots,j_k}
  }
\det {D({j_1,\dots,j_k}|{j_1,\dots,j_k})}
}
+ \det {B}.
\]
特别地，取 $D = xI$，$B = -A$，有
\[
\det {(xI - A)} = \sum_{k = 0}^{n} c_k x^{n-k},
\]
其中 \(c_0 = 1\)，且 $1 \leq k \leq n$ 时，
\[
c_k = (-1)^k
\sum_{1 \leq j_1 < j_2 < \dots < j_k \leq n}
\det {A\binom{j_1,\dots,j_k}{j_1,\dots,j_k}}.
\]
:::

::: theorem
假定与记号如 @thm:characteristic-polynomial。
则
\[
\operatorname{adj} A
= (-1)^{n-1} (c_0 A^{n-1} + c_1 A^{n-2} + \dots + c_{n-1} I),
\]
且
\[
c_0 A^{n} + c_1 A^{n-1} + \dots + c_{n-1} A + c_n I = 0.
\]
:::

## 参考文献

```bibliography
dummit:
  type: book
  title: Abstract algebra
  author: ['Dummit, David S.', 'Foote, Richard M.']
  edition: 3
  year: 2004
  publisher: Wiley
  location: Hoboken
```

- [行列式入门](/books/行列式入门/)

```terms
行列式:
  en: determinant
  de: Determinante :f
  fr: déterminant :m
  eo: determinanto
```
