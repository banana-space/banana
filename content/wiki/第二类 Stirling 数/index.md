---
title: 第二类 Stirling 数
categories: [组合函数]
navboxes: [计数组合]
---

**第二类 Stirling 数**是[[计数组合]]中的计数结果。
对[[自然数]] $1 \leq k \leq n$，第二类 Stirling 数 $S (n, k)$
是将 $n$ 元[[集合]]写成 $k$ 个不交的非空[[子集]]之[[并集|并]]的方法数。
例如，我们有
\[
S (3, 2) = 3,
\]
因为 $\{ 1, 2, 3 \}$ 可以写成 $\{ 1, 2 \} \cup \{ 3 \}$，
或 $\{ 1, 3 \} \cup \{ 2 \}$，或 $\{ 2, 3 \} \cup \{ 1 \}$。

所有第二类 Stirling 数可以排成一个三角形：
\[
\begin{gathered}
  \clap{1} \\
  \clap{1} \qquad \clap{1} \\
  \clap{1} \qquad \clap{3} \qquad \clap{1} \\
  \clap{1} \qquad \clap{7} \qquad \clap{6}  \qquad \clap{1} \\
  \clap{1} \qquad \clap{15} \qquad \clap{25}  \qquad \clap{10}  \qquad \clap{1} \\
  \clap{1} \qquad \clap{31} \qquad \clap{90} \qquad \clap{65} \qquad \clap{15}  \qquad \clap{1} \\
  \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \\
\end{gathered}
\]
其中，第 $n$ 行的数字是 $S(n, 1)$、$\dotsc$、$S (n, n)$。
每行的第 $k$ 个数都是其左上方的数加上其右上方的数的 $k$ 倍。

## 定义

::: definition [第二类 Stirling 数]
对[[自然数]] $1 \leq k \leq n$，
**第二类 Stirling 数** $S (n, k)$ 定义为

$S (n, k) = \dfrac{1}{k!} \cdot
    \bigl| \bigl\{ \
      f \colon \{ 1, \dotsc, n \} \to \{ 1, \dotsc, k \} \bigm|
      f$ 是[[满射]]
$\bigr\} \bigr|.$

有时，也将 $S (n, k)$ 记为 $\genfrac\{\}{0pt}{}{n}{k}$。
:::

## 性质

以下设 $1 \leq k \leq n$ 为自然数。

- 有 $S (n, 1) = S (n, n) = 1$，
  且当 $1 < k < n$ 时，有递推关系
  \[
  S (n, k) =
  S (n-1, k-1) + k S (n-1, k).
  \]

- 直接计算 $S (n, k)$ 的公式：
  \[
  S (n, k) =
  \frac{1}{k!} \sum_{i=0}^k {}
  (-1)^{k-i} \binom{k}{i} i^n.
  \]
  此公式可通过使用[[容斥原理]]计算定义中的计数而得。

- 第二类与[[第一类 Stirling 数]]可以视为彼此的[[逆矩阵]]：
  \[
  \begin{aligned}
    \sum_{j=k}^n s (n, j) \, S (j, k) & = \delta_{n, k}, \\
    \sum_{j=k}^n S (n, j) \, s (j, k) & = \delta_{n, k},
  \end{aligned}
  \]
  其中 $\delta_{n, k}$ 为 [[Kronecker $\delta$ 记号]]。

```terms
第二类 Stirling 数:
  en: Stirling number of the second kind
  fr: nombre de Stirling de deuxième espèce :m
  de: Stirling-Zahl zweiter Art :f
  ja: 第<だい> 2 種<しゅ> Stirling 数<すう>
  ko: 제2종 Stirling 수
```
