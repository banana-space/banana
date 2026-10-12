---
title: 二项式系数
aliases: [组合数, 杨辉三角, Pascal 三角]
categories: [组合函数, 特殊函数]
navboxes: [计数组合]
---

**二项式系数**（又称为**组合数**）是[[计数组合]]中的一些计数结果。
给定[[自然数]] $k \leq n$，二项式系数 $\binom{n}{k}$ 定义为
\[
\binom{n}{k} = \frac{n (n-1) \cdots (n-k+1)}{k!},
\]
这是从 $n$ 个不同物品中选出 $k$ 个物品的方法总数。
换言之，它是一个 $n$ 元[[集合]]的所有 $k$ 元[[子集]]的个数。

所有二项式系数可以排成一个三角形：
\[
\begin{gathered}
  \clap{1} \\
  \clap{1} \qquad \clap{1} \\
  \clap{1} \qquad \clap{2} \qquad \clap{1} \\
  \clap{1} \qquad \clap{3} \qquad \clap{3}  \qquad \clap{1} \\
  \clap{1} \qquad \clap{4} \qquad \clap{6}  \qquad \clap{4}  \qquad \clap{1} \\
  \clap{1} \qquad \clap{5} \qquad \clap{10} \qquad \clap{10} \qquad \clap{5}  \qquad \clap{1} \\
  \clap{1} \qquad \clap{6} \qquad \clap{15} \qquad \clap{20} \qquad \clap{15} \qquad \clap{6} \qquad \clap{1} \\
  \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \qquad \clap{\ldots} \\
\end{gathered}
\]
其中，第 $n$ 行的数字是 $\binom{n-1}{0}$、$\dotsc$、$\binom{n-1}{n-1}$。
表中每个不在最边上的数都是其上方两个数之和。
这个三角形也称为**杨辉三角**或 **Pascal 三角**。

二项式系数得名于[[二项式定理]]，该定理给出了展开式
\[
(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} \, x^k \, y^{n-k}.
\]
从而，二项式系数就是 $(x + y)^n$ 中各项的系数。

二项式系数也可以推广到 $n$ 不是自然数的情况。
此时的二项式系数不再有明显的组合意义，
但在合适的表述下，二项式定理仍然成立。

## 定义

::: definition
设 $n$ 是[[复数]]，$k$ 是[[自然数]]。
则**二项式系数** $\binom{n}{k}$ 定义为
\[
\binom{n}{k} = \frac{n (n-1) \cdots (n-k+1)}{k!}.
\]
特别地，若 $n$ 是[[自然数]]，且 $k \leq n$，则
\[
\binom{n}{k} = \frac{n!}{k! \, (n - k)!} \, .
\]
:::

二项式系数 $\binom{n}{k}$ 有时也记为 $\mathrm{C}_n^k$ 或 $\mathrm{C} (n, k)$。

## 性质

### 基本性质

- 若 $n, k$ 都是自然数，则 $\binom{n}{k}$ 也是自然数。

- 若 $n, k$ 是自然数，且 $n < k$，则 $\binom{n}{k} = 0$。

- 二项式系数与[[降阶乘]]满足关系
  \[
  \binom{n}{k} = \frac{n^{\underline{k}}}{k!}.
  \]

- 对复数 $n$ 和自然数 $k$，有恒等式
  \[
  \binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}.
  \]

- 在[[二项式定理]]中取 $x = y = 1$，得到恒等式
  \[
  \sum_{k=0}^n {} \binom{n}{k} = 2^n.
  \]
  取 $x = -1$、$y = 1$，得到恒等式
  \[
  \sum_{k=0}^n {} (-1)^k \binom{n}{k} = 0.
  \]

### 初等数论性质

- （**[[Kummer 定理]]**）
  设 $p$ 是[[素数]]，$S_p(n)$ 表示自然数 $n$ 的 $p$ 进制表示中所有数码的和。
  则对自然数 $k \leq n$，二项式系数的
  [[$p$ 进赋值]]可以表示为
  \[
  v_p \binom{n}{k} = \frac{S_p(k) + S_p(n-k) - S_p(n)}{p - 1}.
  \]
  等式右边也等于 $p$ 进制下计算加法 $k + (n - k)$ 需要进位的次数。

- （**[[Lucas 定理]]**）
  设 $p$ 是[[素数]]，自然数 $m \leq n$ 的 $p$ 进制表示分别为
  $n = \sum_{l=0}^\infty n_l p^l, m = \sum_{l=0}^\infty m_l p^l$，
  其中 $n_l, m_l \in \{ 0, 1, \dotsc, p-1 \}$，
  则
  \[
  \binom{n}{m} \equiv \prod_{l = 0}^\infty \binom{n_l}{m_l} \pmod{p},
  \]
  乘积中只有有限项不为 $1$。

### 渐近性质

- 对自然数 $k$ 和实数 $n \geq k$，有估计
  \[
  \left( \frac{n}{k} \right)^k \leq
  \binom{n}{k} \leq
  \left( \frac{\mathrm en}{k} \right)^k.
  \]

- 当实数 $n \to +\infty$ 时，若 $k = o (n^{3/4})$，则有渐近性质
  \[
  \binom{n}{k} \sim \frac{n^k}{k!}
  \exp \Bigl( -\frac{k^2}{2n} - \frac{k^3}{6n^2} \Bigr).
  \]

```terms
二项式系数:
  en: binomial coefficient
  fr: coefficient binomial :m
  de: Binomialkoeffizient :m
  ja: 二<に>項<こう>係<けい>数<すう>
  ko: 이항 계수 (二項係數)
```
