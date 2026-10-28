---
title: 第一类 Stirling 数
categories: [组合函数]
navboxes: [计数组合]
---

<problems>
- 开头对三角形的说明以及“性质”一节中的两个递推关系里，系数 $n$ 似乎应为 $n-1$（例如按现在的写法，$s (3, 2) = s (2, 1) - 3 s (2, 2) = -4$，与三角形中的 $-3$ 不符）。
</problems>

对[[自然数]] $1 \leq k \leq n$，
**第一类 Stirling 数** 分为有符号 $s (n, k)$ 与无符号 ${n \brack k}$ 两类，
分别是[[降阶乘]]和[[升阶乘]]
\[
\begin{gathered}
  x^{\underline{n}} = x (x - 1) \cdots (x - n + 1), \\
  x^{\overline{n}} = x (x + 1) \cdots (x + n - 1)
\end{gathered}
\]
中 $x^k$ 的系数。

无符号第一类 Stirling 数是[[计数组合]]中的计数结果，
是将 $n$ 元置换写成 $k$ 个不相交循环置换的方案数。

所有有符号第一类 Stirling 数可以排成一个三角形：
\[
\begin{gathered}
  \clap{1} \\
  \clap{−1} \qquad \clap{1} \\
  \clap{2} \qquad \clap{−3} \qquad \clap{1} \\
  \clap{−6} \qquad \clap{11} \qquad \clap{−6}  \qquad \clap{1} \\
  \clap{24} \qquad \clap{−50} \qquad \clap{35}  \qquad \clap{−10}  \qquad \clap{1} \\
  \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \\
\end{gathered}
\]
其中，第 $n$ 行的数字是 $s (n, 1)$、$\dotsc$、$s (n, n)$。
第 $n$ 行的每个数都是其左上方的数减去其右上方的数的 $n$ 倍。

## 定义

::: definition [有符号第一类 Stirling 数]
对[[自然数]] $1 \leq k \leq n$，
**有符号第一类 Stirling 数** $s (n, k)$ 是[[降阶乘]]
\[
x^{\underline{n}} = x (x - 1) \cdots (x - n + 1)
\]
中 $x^k$ 的系数。
:::

::: definition [无符号第一类 Stirling 数]
对[[自然数]] $1 \leq k \leq n$，
**无符号第一类 Stirling 数** $n \brack k$ 是[[升阶乘]]
\[
x^{\overline{n}} = x (x + 1) \cdots (x + n - 1)
\]
中 $x^k$ 的系数。
:::

## 性质

以下设 $1 \leq k \leq n$。

- $s (n, k) = (-1)^{n-k} {n \brack k}$。

- 有 $s (n, 1) = (-1)^{n-1} (n-1)!$，$s (n, n) = 1$，
  且有递推关系
  \[
  s (n, k) = s (n-1, k-1) - n s (n-1, k).
  \]
  类似地有 ${n \brack 1} = (n-1)!$，${n \brack n} = 1$，
  且有递推关系
  \[
  {n \brack k} = {n-1 \brack k-1} + n {n-1 \brack k}.
  \]

- $\sum_{k = 1}^{n} {n \brack k} = n!$，
  组合意义为任意一个 $n$ 元置换总能写成 $1$ 到 $n$ 个不相交循环置换的并。

- 第一类与[[第二类 Stirling 数]]可以视为彼此的[[逆矩阵]]：
  \[
  \begin{aligned}
    \sum_{j=k}^n s (n, j) \, S (j, k) & = \delta_{n, k}, \\
    \sum_{j=k}^n S (n, j) \, s (j, k) & = \delta_{n, k},
  \end{aligned}
  \]
  其中 $\delta_{n, k}$ 为 [[Kronecker $\delta$ 记号]]。

```terms
第一类 Stirling 数:
  en: Stirling number of the first kind
  fr: nombre de Stirling de première espèce :m
  de: Stirling-Zahl erster Art :f
  ja: 第<だい> 1 種<しゅ> Stirling 数<すう>
  ko: 제1종 Stirling 수
```
