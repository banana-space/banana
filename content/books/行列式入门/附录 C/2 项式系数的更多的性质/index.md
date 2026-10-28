---
title: '\(2\) 项式系数的更多的性质'
---

<problems>
- 比较两个整式系数的定理中，条件“\(f(x_i) = g(x_i)\)，\(i = 0\)，\(1\)，\(\dots\)，\(\ell\)”里的 \(\ell\) 似乎应为 \(n\)；紧随其后的一段中“\(i = 0\)，\(1\)，\(\dots\)，\(m\)”的 \(m\) 似乎也应为 \(n\)。
</problems>

作为 byproduct，本节，我们讨论 \(2\) 项式系数的更多的性质。

为方便，我们考虑（无限的）数表（Yáng Huī）

```math {@eq:TriangleOfYangHui}
\begin{matrix}
    \dbinom{0}{0} & \dbinom{0}{1} & \dbinom{0}{2} & \dbinom{0}{3} & \dbinom{0}{4} & \dbinom{0}{5} & \dbinom{0}{6} & \dbinom{0}{7} & \dbinom{0}{8} & \cdots \\[2ex]
    \dbinom{1}{0} & \dbinom{1}{1} & \dbinom{1}{2} & \dbinom{1}{3} & \dbinom{1}{4} & \dbinom{1}{5} & \dbinom{1}{6} & \dbinom{1}{7} & \dbinom{1}{8} & \cdots \\[2ex]
    \dbinom{2}{0} & \dbinom{2}{1} & \dbinom{2}{2} & \dbinom{2}{3} & \dbinom{2}{4} & \dbinom{2}{5} & \dbinom{2}{6} & \dbinom{2}{7} & \dbinom{2}{8} & \cdots \\[2ex]
    \dbinom{3}{0} & \dbinom{3}{1} & \dbinom{3}{2} & \dbinom{3}{3} & \dbinom{3}{4} & \dbinom{3}{5} & \dbinom{3}{6} & \dbinom{3}{7} & \dbinom{3}{8} & \cdots \\[2ex]
    \dbinom{4}{0} & \dbinom{4}{1} & \dbinom{4}{2} & \dbinom{4}{3} & \dbinom{4}{4} & \dbinom{4}{5} & \dbinom{4}{6} & \dbinom{4}{7} & \dbinom{4}{8} & \cdots \\[2ex]
    \dbinom{5}{0} & \dbinom{5}{1} & \dbinom{5}{2} & \dbinom{5}{3} & \dbinom{5}{4} & \dbinom{5}{5} & \dbinom{5}{6} & \dbinom{5}{7} & \dbinom{5}{8} & \cdots \\[2ex]
    \dbinom{6}{0} & \dbinom{6}{1} & \dbinom{6}{2} & \dbinom{6}{3} & \dbinom{6}{4} & \dbinom{6}{5} & \dbinom{6}{6} & \dbinom{6}{7} & \dbinom{6}{8} & \cdots \\[2ex]
    \dbinom{7}{0} & \dbinom{7}{1} & \dbinom{7}{2} & \dbinom{7}{3} & \dbinom{7}{4} & \dbinom{7}{5} & \dbinom{7}{6} & \dbinom{7}{7} & \dbinom{7}{8} & \cdots \\[2ex]
    \dbinom{8}{0} & \dbinom{8}{1} & \dbinom{8}{2} & \dbinom{8}{3} & \dbinom{8}{4} & \dbinom{8}{5} & \dbinom{8}{6} & \dbinom{8}{7} & \dbinom{8}{8} & \cdots \\[2ex]
    \vdots        & \vdots        & \vdots        & \vdots        & \vdots        & \vdots        & \vdots        & \vdots        & \vdots        & \ddots \\
\end{matrix}
```

其中，在行 \(m+1\)，列 \(n+1\) 的数为 \(\dbinom{m}{n}\)。
列 \(1\) 的数都是 \(\dbinom{m}{0} = 1\)。
除了首个元，行 \(1\) 的数都是
\(\dbinom{0}{n} = 0\)（\(n \neq 0\)）。
并且，当 \(m\)，\(n \geqslant 1\) 时，
在行 \(m+1\)，列 \(n+1\) 的数 \(\dbinom{m}{n}\)
是在行 \(m\)，列 \(n+1\) 的数 \(\dbinom{m-1}{n}\)
与在行 \(m\)，列 \(n\) 的数 \(\dbinom{m-1}{n-1}\)
的和。
由此，具体地，我们可写出
\[
\begin{aligned}
  \begin{matrix}
    1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \cdots \\
    1 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \cdots \\
    1 & 2 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & \cdots \\
    1 & 3 & 3 & 1 & 0 & 0 & 0 & 0 & 0 & \cdots \\
    1 & 4 & 6 & 4 & 1 & 0 & 0 & 0 & 0 & \cdots \\
    1 & 5 & 10 & 10 & 5 & 1 & 0 & 0 & 0 & \cdots \\
    1 & 6 & 15 & 20 & 15 & 6 & 1 & 0 & 0 & \cdots \\
    1 & 7 & 21 & 35 & 35 & 21 & 7 & 1 & 0 & \cdots \\
    1 & 8 & 28 & 56 & 70 & 56 & 28 & 8 & 1 & \cdots \\
    \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \ddots
  \end{matrix}
\end{aligned}
\]
由此，我们或许能看出一些性质。

::: theorem
在数表 @eq:TriangleOfYangHui 的每一列，
每一个数不比前一个数小。
具体地，对任何非负整数 \(m\)，\(n\)，
\[
\begin{aligned}
  \dbinom{m}{n} \leqslant \dbinom{m+1}{n}.
\end{aligned}
\]
:::

::: proof
若 \(n = 0\)，则它们都是 \(1\)。
若 \(n > 0\)，则注意，
\[
\dbinom{m+1}{n} - \dbinom{m}{n} = \dbinom{m}{n-1} \geqslant 0.
\]
:::

::: theorem
在数表 @eq:TriangleOfYangHui 的每一行，
数字先大后小。
具体地，设 \(m\)、\(n\) 是正整数。
若 \(1 \leqslant n < (m+1)/2\)，则
\(\dbinom{m}{n-1} < \dbinom{m}{n}\)。
若 \(n = (m+1)/2\)（此时 \(m\) 是奇数），则
\(\dbinom{m}{n-1} = \dbinom{m}{n}\)。
若 \((m+1)/2 < n \leqslant m\)，则
\(\dbinom{m}{n-1} > \dbinom{m}{n}\)。
若 \(n > m\)，则 \(\dbinom{m}{n} = 0\)。
:::

::: proof
注意，当 \(n > m\) 时，\(\dbinom{m}{n} = 0\)，
且当 \(0 \leqslant n \leqslant m\) 时，\(\dbinom{m}{n}\) 是正整数。
注意，当 \(n \geqslant 1\) 时，
\[
\begin{aligned}
  \dbinom{m}{n} \Big/ \dbinom{m}{n-1}
  = \frac{m - (n - 1)}{n}
  = \frac{m - n + 1}{n}.
\end{aligned}
\]
于是，若 \(m \geqslant n > (m+1)/2\)，
则 \(2n > m + 1\)，
即 \(n > m + 1 - n\)；
此时，\(\dbinom{m}{n-1} > \dbinom{m}{n}\)。
若 \(n = (m+1)/2\)，
即 \(2n = m + 1\)，
即 \(n = m + 1 - n\)；
此时，\(\dbinom{m}{n-1} = \dbinom{m}{n}\)。
若 \(1 \leqslant n < (m+1)/2\)，
则 \(2n < m + 1\)，
即 \(n < m + 1 - n\)；
此时，\(\dbinom{m}{n-1} < \dbinom{m}{n}\)。
:::

::: theorem
数表 @eq:TriangleOfYangHui 的
行 \(m+1\) 的所有的非零的数的和是 \(2^m\)。
:::

::: proof
回想，由 \(2\) 项式展开，
对任何数 \(x\)，\(y\)，与任何非负整数 \(m\)，
\[
\begin{aligned}
  (x + y)^m = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i} x^{m-i} y^i}.
\end{aligned}
\]
若我们取 \(x\)、\(y\) 为 \(1\)，则
\[
\begin{aligned}
  (1 + 1)^m = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i} 1^{m-i} 1^i},
\end{aligned}
\]
即
\[
\sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i}} = 2^m.
\]
:::

::: theorem
设 \(x\) 是数。
设 \(k\) 是非负整数。
则
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {(-1)^i \dbinom{x}{i}}
  = (-1)^{k-1} \dbinom{x-1}{k-1}.
\end{aligned}
\]
由此（取 \(x = m\)），
数表 @eq:TriangleOfYangHui 的
行 \(m+1\) 的前 \(k\) 个数的“交错和”
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {(-1)^i \dbinom{m}{i}}
  = (-1)^{k-1} \dbinom{m-1}{k-1}.
\end{aligned}
\]
特别地，若 \(m \geqslant 1\)，
则数表 @eq:TriangleOfYangHui 的
行 \(m+1\) 的所有的非零的数的“交错和”是 \(0\)
（取 \(k = m + 1\)）。
:::

::: proof
注意，
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {(-1)^i \dbinom{x}{i}}
  = {} &
  \sum_{0 \leqslant i < k} {(-1)^i (-1)^i
  \dbinom{-x + i - 1}{i}}
  \\
  = {} &
  \sum_{0 \leqslant i < k} {\dbinom{-x - 1 + i}{i}}
  \\
  = {} &
  \dbinom{-x - 1 + k}{k-1}
  \\
  = {} &
  (-1)^{k-1} \dbinom{-(-x - 1 + k) + k - 1 - 1}{k-1}
  \\
  = {} &
  (-1)^{k-1} \dbinom{x-1}{k-1}.
\end{aligned}
\]
由此，取 \(x = m\)，我们知道，
行 \(m+1\) 的前 \(k\) 个数的“交错和”是
\((-1)^{k-1} \allowbreak
  \cdot \dbinom{m-1}{k-1}\)。

进一步地，注意，行 \(m+1\) 有 \(m+1\) 个非零的数，
故，取 \(k = m + 1\)，
则行 \(m+1\) 的所有的非零的数的“交错和”是
\((-1)^{m+1-1} \dbinom{m-1}{m+1-1} = 0\)。
:::

值得提，若 \(m\) 是正整数，则由 \(2\) 项式展开，
\[
\begin{aligned}
  0 = (1 + (-1))^m
  = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i} 1^{m-i} (-1)^i}
  = \sum_{0 \leqslant i \leqslant m} {(-1)^i \dbinom{m}{i}}.
\end{aligned}
\]

::: example
设 \(x\)、\(y\) 是数。
设 \(n\) 是非负整数。
则
\[
\begin{aligned}
  &
  \sum_{0 \leqslant i \leqslant n} {\dbinom{x+i}{i} \dbinom{y+n-i}{n-i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant n} {\dbinom{(x+1)+i-1}{i}
  \dbinom{(y+1)+(n-i)-1}{n-i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant n} {(-1)^i \dbinom{-(x+1)}{i}
  (-1)^{n-i} \dbinom{-(y+1)}{n-i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant n} {(-1)^n \dbinom{-(x+1)}{i} \dbinom{-(y+1)}{n-i}}
  \\
  = {} &
  (-1)^n \sum_{0 \leqslant i \leqslant n} {\dbinom{-(x+1)}{i} \dbinom{-(y+1)}{n-i}}
  \\
  = {} &
  (-1)^n \dbinom{-(x+1+y+1)}{n}
  \\
  = {} &
  (-1)^n (-1)^n \dbinom{(x+1+y+1)+n-1}{n}
  \\
  = {} &
  \dbinom{x+y+n+1}{n}.
\end{aligned}
\]
:::

::: example
设 \(x\) 是数。
设 \(k\) 是非负整数。
我们计算
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {\frac{(-1)^i}{i+1} \dbinom{x}{i}}.
\end{aligned}
\]

若 \(x = -1\)，则注意，
\[
\begin{aligned}
  \dbinom{-1}{i} = (-1)^i \dbinom{1+i-1}{i} = (-1)^i.
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {\frac{(-1)^i}{i+1} \dbinom{-1}{i}}
  = \sum_{0 \leqslant i < k} {\frac{1}{i+1}}
  = \sum_{1 \leqslant j \leqslant k} {\frac{1}{j}}.
\end{aligned}
\]

若 \(x \neq -1\)，则注意，
\[
\begin{aligned}
  \dbinom{x+1}{i+1} = \frac{x+1}{i+1} \dbinom{x}{i}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {\frac{(-1)^i}{i+1} \dbinom{x}{i}}
  = {} &
  \sum_{0 \leqslant i < k} {\frac{(-1)^{i+1-1}}{i+1}
  \cdot \frac{i+1}{x+1} \dbinom{x}{i}}
  \\
  = {} &
  \sum_{0 \leqslant i < k} {\frac{-1}{x+1} (-1)^{i+1} \dbinom{x}{i}}
  \\
  = {} &
  \frac{-1}{x+1} \sum_{1 \leqslant j < k+1} {(-1)^j \dbinom{x+1}{j}}
  \\
  = {} &
  \frac{-1}{x+1}
  \left(\sum_{0 \leqslant j < k+1} {(-1)^j \dbinom{x+1}{j}}
  - (-1)^0 \dbinom{x+1}{0}\right)
  \\
  = {} &
  \frac{-1}{x+1} \left((-1)^k \dbinom{x}{k} - 1\right)
  \\
  = {} &
  \frac{1}{x+1} \left(1 - (-1)^k \dbinom{x}{k}\right).
\end{aligned}
\]
特别地，若我们取 \(x\) 为非负整数 \(n\)，
且 \(k = n + 1\)，则
\[
\sum_{0 \leqslant i \leqslant n} {\frac{(-1)^i}{i+1} \dbinom{n}{i}}
= \frac{1}{n+1} \left(1 - (-1)^{n+1} \dbinom{n}{n+1}\right)
= \frac{1}{n+1}.
\]
:::

::: theorem
设 \(n\) 是正整数。
则
\[
\begin{aligned}
  \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i}}
  = \sum_{1 \leqslant \ell \leqslant n} {\frac{1}{\ell}}.
\end{aligned}
\]
:::

::: proof
为方便，我们记
\[
\begin{aligned}
  g_n = \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i}},
  \quad
  h_n = \sum_{1 \leqslant \ell \leqslant n} {\frac{1}{\ell}}.
\end{aligned}
\]
则 \(g_1 = 1 = h_1\)。
注意，对任何正整数 \(n\)，\(h_{n+1} - h_n = 1/(n+1)\)，
且由上个例，
\[
\begin{aligned}
  g_{n+1} - g_n
  = {} &
  \sum_{1 \leqslant i \leqslant n+1} {\frac{(-1)^{i-1}}{i} \dbinom{n+1}{i}}
  - \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i}}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n+1}{i}}
  + \frac{(-1)^n}{n+1} \dbinom{n+1}{n+1}
  - \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i}}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n+1}{i}}
  - \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i}}
  + \frac{(-1)^n}{n+1}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n} {\left(
      \frac{(-1)^{i-1}}{i} \dbinom{n+1}{i}
      - \frac{(-1)^{i-1}}{i} \dbinom{n}{i}
  \right)} + \frac{(-1)^n}{n+1}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \left(
      \dbinom{n+1}{i} - \dbinom{n}{i}
  \right)} + \frac{(-1)^n}{n+1}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i-1}}
  + \frac{(-1)^n}{n+1} \dbinom{n}{n}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant n+1} {\frac{(-1)^{i-1}}{i} \dbinom{n}{i-1}}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant n} {\frac{(-1)^j}{j+1} \dbinom{n}{j}}
  \\
  = {} &
  \frac{1}{n+1}
  \\
  = {} &
  h_{n+1} - h_n.
\end{aligned}
\]
则对任何正整数 \(n\)，
\[
\begin{aligned}
  g_{n+1} - h_{n+1}
  = {} &
  (g_{n+1} - h_n) - (h_{n+1} - h_n)
  \\
  = {} &
  (g_{n+1} - h_n) - (g_{n+1} - g_n)
  \\
  = {} &
  g_n - h_n.
\end{aligned}
\]
则对任何正整数 \(n\)，
\[
g_n - h_n = g_{n-1} - h_{n-1} = \dots = g_1 - h_1 = 0.
\]
:::

::: theorem
数表 @eq:TriangleOfYangHui 的
行 \(m+1\) 的所有的非零的数的平方的和是 \(\dbinom{2m}{m}\)。
:::

::: proof
回想，由 Zhū–Vandermonde 恒等式，
对任何数 \(x\)，\(y\)，与任何非负整数 \(m\)，
\[
\begin{aligned}
  \dbinom{x + y}{m}
  = \sum_{0 \leqslant i \leqslant m} {\dbinom{x}{m - i} \dbinom{y}{i}}.
\end{aligned}
\]
若我们取 \(x\)、\(y\) 为 \(m\)，则
\[
\begin{aligned}
  \dbinom{m + m}{m}
  = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{m - i} \dbinom{m}{i}}
  = \sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i} \dbinom{m}{i}},
\end{aligned}
\]
即
\[
\sum_{0 \leqslant i \leqslant m} {\dbinom{m}{i}^2} = \dbinom{2m}{m}.
\]
:::

::: theorem
对任何正整数 \(m\)，
\(\dbinom{2m}{m} / 2\) 是正整数。
:::

::: proof
一方面，它是正整数与正整数的比；
另一方面，因为 \(m \geqslant 1\)，
\[
\begin{aligned}
  \frac{1}{2} \dbinom{2m}{m}
  = \frac{1}{2} \cdot \frac{2m}{m} \dbinom{2m-1}{m-1}
  = \dbinom{2m-1}{m-1}
\end{aligned}
\]
是整数。
:::

::: theorem
对任何非负整数 \(m\)，
\(\dbinom{2m}{m} / (m + 1)\) 是正整数。
:::

::: proof
一方面，它是正整数与正整数的比；
另一方面，因为 \(m + 1 \geqslant 1\)，
\[
\begin{aligned}
  \frac{1}{m+1} \dbinom{2m}{m}
  = {} &
  \left(1 - \frac{m}{m+1}\right) \dbinom{2m}{m}
  \\
  = {} &
  1 \dbinom{2m}{m}
  - \frac{2m - (m+1 - 1)}{m+1} \dbinom{2m}{m}
  \\
  = {} &
  \dbinom{2m}{m} - \dbinom{2m}{m+1}
\end{aligned}
\]
是整数与整数的差。
:::

::: theorem
对非负整数 \(m\)，
记 \(c_m = \dbinom{2m}{m} / (m+1)\)。
则
\[
\begin{aligned}
  c_{m+1} = \sum_{0 \leqslant i \leqslant m} {c_i c_{m-i}}.
\end{aligned}
\]
:::

::: proof
记
\[
\begin{aligned}
  f_m = \sum_{0 \leqslant i \leqslant m} {c_i c_{m-i}}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  f_m
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {\frac{1}{(i+1)(m-i+1)}
  \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {\frac{1}{m+2}
    \frac{m+2}{(i+1)(m-i+1)}
  \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  \\
  = {} &
  \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \frac{(m-i+1)+(i+1)}{(i+1)(m-i+1)}
  \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  \\
  = {} &
  \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \left(\frac{1}{i+1} + \frac{1}{m-i+1}\right)
  \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  \\
  = {} &
  \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \left(\frac{1}{i+1}
      \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}
      + \frac{1}{m-i+1}
    \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}\right)
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \frac{1}{i+1} \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}
  }
  \\
  &
  {} + \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \frac{1}{m-i+1} \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \frac{1}{m+2} \sum_{0 \leqslant i \leqslant m} {
    \frac{1}{i+1} \dbinom{2i}{i} \dbinom{2(m-i)}{m-i}
  }
  \\
  &
  {} + \frac{1}{m+2} \sum_{0 \leqslant m-i \leqslant m} {
    \frac{1}{(m-i)+1} \dbinom{2(m-(m-i))}{m-(m-i)} \dbinom{2(m-i)}{m-i}
  }
  \\
  = {} &
  \frac{1}{m+2} \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}
  }
  + \frac{1}{m+2} \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2(m-j)}{m-j} \dbinom{2j}{j}
  }
  \\
  = {} &
  \frac{2}{m+2} \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}
  }.
\end{aligned}
\]
记
\[
\begin{aligned}
  g_m = \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}
  }.
\end{aligned}
\]
则 \(g_m = ((m+2)/2) f_m\)。
注意，
\[
\begin{aligned}
  \frac{m+2}{2} c_{m+1}
  = \frac{m+2}{2} \frac{1}{m+2} \dbinom{2(m+1)}{m+1}
  = \frac{1}{2} \dbinom{2(m+1)}{m+1}.
\end{aligned}
\]
因为 \((m+2)/2 \neq 0\)，
待证的等式 \(c_{m+1} = f_m\)
相当于 \(\dbinom{2(m+1)}{m+1} / 2 = g_m\)。
作命题 \(P(m)\)：\(\dbinom{2(m+1)}{m+1} / 2 = g_m\)。
我们用数学归纳法证明，对任何非负整数 \(m\)，
\(P(m)\) 是对的。

\(P(0)\) 是对的，因为
\[
\begin{aligned}
  \frac{1}{2} \dbinom{2 (0 + 1)}{0 + 1}
  = 1
  = \frac{1}{0+1}
  \dbinom{2 \cdot 0}{0} \dbinom{2 (0 - 0)}{0 - 0}.
\end{aligned}
\]

设 \(P(m)\) 是对的。
我们由此证明，\(P(m+1)\) 是对的。
注意，
\[
\begin{aligned}
  g_{m+1}
  = {} &
  \sum_{0 \leqslant j \leqslant m+1} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m+1-j)}{m+1-j}
  }
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m+1-j)}{m+1-j}
  }
  \\
  &
  {} + \frac{1}{(m+1)+1} \dbinom{2(m+1)}{(m+1)}
  \dbinom{2(m+1-(m+1))}{m+1-(m+1)}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m+1-j)}{m+1-j}
  }
  + \frac{1}{(m+1)+1} \dbinom{2(m+1)}{(m+1)}.
\end{aligned}
\]
注意，当 \(k \geqslant 0\) 时，
\[
\begin{aligned}
  \dbinom{2(k+1)}{k+1}
  = {} &
  \dbinom{2k+2}{k+1}
  \\
  = {} &
  \frac{2k+2}{k+1} \dbinom{2k+1}{k}
  \\
  = {} &
  2 \dbinom{2k+1}{2k+1-k}
  \\
  = {} &
  2 \dbinom{2k+1}{k+1}
  \\
  = {} &
  2 \cdot \frac{2k+1}{k+1} \dbinom{2k}{k}
  \\
  = {} &
  2 \left(2 - \frac{1}{k+1}\right) \dbinom{2k}{k}
  \\
  = {} &
  4 \dbinom{2k}{k} - \frac{2}{k+1} \dbinom{2k}{k}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m+1-j)}{m+1-j}
  }
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \frac{1}{j+1} \dbinom{2j}{j}
    \left( 4 \dbinom{2(m-j)}{m-j} - \frac{2}{m-j+1} \dbinom{2(m-j)}{m-j} \right)
  }
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m} {
    \left(
      4 \frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}
      - 2 \frac{1}{(j+1)(m-j+1)} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}
    \right)
  }
  \\
  = {} &
  4 g_m - 2 f_m
  \\
  = {} &
  4 g_m - 2 \cdot \frac{2}{m+2} g_m
  \\
  = {} &
  \frac{4m + 4}{m + 2} g_m.
\end{aligned}
\]
于是，由假定，
\[
\begin{aligned}
  g_{m+1}
  = {} &
  \frac{4m + 4}{m + 2} g_m + \frac{1}{(m+1) + 1} \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  \frac{4m + 4}{m + 2} \cdot \frac{1}{2} \dbinom{2(m+1)}{m+1}
  + \frac{1}{(m+1) + 1} \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  \frac{2m+3}{m+2} \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  \left(2 - \frac{1}{(m+1)+1}\right) \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  \frac{1}{2} \dbinom{2((m+1)+1)}{(m+1)+1}.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  4^m = \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}.
\end{aligned}
\]
:::

::: proof
记
\[
\begin{aligned}
  h_m = \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}.
\end{aligned}
\]
作命题 \(P(m)\)：\(4^m = h_m\)。
我们用数学归纳法证明，对任何非负整数 \(m\)，
\(P(m)\) 是对的。

\(P(0)\) 是对的，因为
\[
\begin{aligned}
  4^0 = 1 = \dbinom{2 \cdot 0}{0} \dbinom{2 (0 - 0)}{0 - 0}.
\end{aligned}
\]

设 \(P(m)\) 是对的。
我们由此证明，\(P(m+1)\) 是对的。
注意，
\[
\begin{aligned}
  h_{m+1}
  = {} &
  \sum_{0 \leqslant i \leqslant m+1} {\dbinom{2i}{i} \dbinom{2(m+1-i)}{m+1-i}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m+1-i)}{m+1-i}}
  \\
  &
  {}
  + \dbinom{2(m+1)}{m+1} \dbinom{2(m+1-(m+1))}{m+1-(m+1)}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m+1-i)}{m+1-i}}
  + \dbinom{2(m+1)}{m+1}.
\end{aligned}
\]
回想，在上个定理的证明，对任何非负整数 \(k\)，
\[
\begin{aligned}
  \dbinom{2(k+1)}{k+1}
  = 4 \dbinom{2k}{k} - \frac{2}{k+1} \dbinom{2k}{k}.
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m+1-i)}{m+1-i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {
    \dbinom{2i}{i}
    \left( 4 \dbinom{2(m-i)}{m-i} - \frac{2}{m-i+1} \dbinom{2(m-i)}{m-i} \right)
  }
  \\
  = {} &
  4 \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  - 2 \sum_{0 \leqslant i \leqslant m} {\frac{1}{m-i+1} \dbinom{2(m-i)}{m-i} \dbinom{2i}{i}}
  \\
  = {} &
  4 \sum_{0 \leqslant i \leqslant m} {\dbinom{2i}{i} \dbinom{2(m-i)}{m-i}}
  - 2 \sum_{0 \leqslant j \leqslant m} {\frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}}
  \\
  = {} &
  4 h_m
  - 2 \sum_{0 \leqslant j \leqslant m} {\frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}}.
\end{aligned}
\]
由假定，与在上个定理的证明的 byproduct，
\[
\begin{aligned}
  h_{m+1}
  = {} &
  4 h_m
  - 2 \sum_{0 \leqslant j \leqslant m} {\frac{1}{j+1} \dbinom{2j}{j} \dbinom{2(m-j)}{m-j}}
  + \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  4 \cdot 4^m
  - 2 \cdot \frac{1}{2} \dbinom{2(m+1)}{m+1}
  + \dbinom{2(m+1)}{m+1}
  \\
  = {} &
  4^{m+1}.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
数表 @eq:TriangleOfYangHui 的
列 \(n+1\) 的前 \(k\) 个数的和是
\(\dbinom{k}{n+1}\)；
数表 @eq:TriangleOfYangHui 的
列 \(n+1\) 的前 \(k\) 个非零的数的和是
\(\dbinom{n+k}{n+1}\)。
:::

::: proof
注意，
\[
\begin{aligned}
  \sum_{0 \leqslant i < k} {\dbinom{i}{n}}
  = \dbinom{k}{n+1}.
\end{aligned}
\]

进一步地，注意，列 \(n+1\) 的前 \(n\) 个数是 \(0\)。
所以，列 \(n+1\) 的前 \(k\) 个非零的数的和是
列 \(n+1\) 的前 \(n+k\) 个数的和，
即 \(\dbinom{n+k}{n+1}\)。
:::

到此，我们讨论了“横的和”与“竖的和”。
然后，我们讨论“斜的和”。

::: theorem
以数表 @eq:TriangleOfYangHui 的
行 \(m+1\)，列 \(1\) 的数 \(\dbinom{m}{0}\) 开始，
由左上至右下取 \(k\) 个数
（即所有的适合条件
\(i - j = m\)，\(0 \leqslant j < k\) 的 \(\dbinom{i}{j}\)）。
则它们的和
\[
\begin{aligned}
  \sum_{0 \leqslant j < k} {\dbinom{m + j}{j}}
  = \dbinom{m + k}{k - 1}.
\end{aligned}
\]
:::

::: proof
回想，这已被证。
:::

::: theorem
以数表 @eq:TriangleOfYangHui 的
行 \(1\)，列 \(m+1\) 的数 \(\dbinom{0}{m}\) 开始，
由右上至左下取 \(m+1\) 个数
（即所有的适合条件 \(i + j = m\)，
\(i \geqslant 0\)，且 \(j \geqslant 0\) 的
\(\dbinom{i}{j}\)）。
则它们的和
\[
\begin{aligned}
  \sum_{0 \leqslant i \leqslant m} {\dbinom{i}{m - i}}
  = \frac{1}{\sqrt{5}}
  \left(
    \left(\frac{1 + \sqrt{5}}{2}\right)^{m+1}
    - \left(\frac{1 - \sqrt{5}}{2}\right)^{m+1}
  \right).
\end{aligned}
\]
:::

::: proof
为方便，我们记
\[
\begin{aligned}
  x_1 = \frac{1 - \sqrt{5}}{2},
  \quad
  x_2 = \frac{1 + \sqrt{5}}{2}.
\end{aligned}
\]
则 \(x_2 - x_1 = \sqrt{5}\)，
\(x_2 + x_1 = 1\)，
且 \((2 x_k - 1)^2 = 5\)，\(k = 1\)，\(2\)，
即 \(x_k^2 = 1 + x_k\)，\(k = 1\)，\(2\)。

为方便，我们记
\[
\begin{aligned}
  f_m = \sum_{0 \leqslant i \leqslant m} {\dbinom{i}{m - i}},
  \quad
  g_m = \frac{x_2^{m+1} - x_1^{m+1}}{x_2 - x_1}.
\end{aligned}
\]
不难算出，\(f_0 = \dbinom{0}{0} = 1\)，
且 \(g_0 = (x_2 - x_1)/(x_2 - x_1) = 1\)；
不难算出，\(f_1 = \dbinom{0}{1} + \dbinom{1}{0} = 1\)，
且 \(g_1 = (x_2^2 - x_1^2)/(x_2 - x_1)
  = x_2 + x_1 = 1\)。

我们先证明，对任何非负整数 \(m\)，
\(f_{m+2} = f_m + f_{m+1}\)。
注意，
\[
\begin{aligned}
  f_m + f_{m+1}
  = {} &
  \sum_{0 \leqslant i \leqslant m} {\dbinom{i}{m - i}}
  + \sum_{0 \leqslant i \leqslant m+1} {\dbinom{i}{m + 1 - i}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m+1} {\dbinom{i}{m - i}}
  + \sum_{0 \leqslant i \leqslant m+1} {\dbinom{i}{m - i + 1}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m+1} {
    \left(
      \dbinom{i}{m - i} + \dbinom{i}{m - i + 1}
    \right)
  }
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m+1} {\dbinom{i + 1}{m - i + 1}}
  \\
  = {} &
  \sum_{1 \leqslant i+1 \leqslant m+1} {\dbinom{i + 1}{m + 2 - (i + 1)}}
  \\
  = {} &
  \sum_{1 \leqslant j \leqslant m+2} {\dbinom{j}{m + 2 - j}}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant m+2} {\dbinom{j}{m + 2 - j}}
  \\
  = {} &
  f_{m+2}.
\end{aligned}
\]

我们再证明，对任何非负整数 \(m\)，
\(g_{m+2} = g_m + g_{m+1}\)。
注意，
\[
\begin{aligned}
  g_m + g_{m+1}
  = {} &
  \frac{x_2^{m+1} - x_1^{m+1}}{x_2 - x_1}
  + \frac{x_2^{m+2} - x_1^{m+2}}{x_2 - x_1}
  \\
  = {} &
  \frac{(x_2^{m+1} - x_1^{m+1})
  + (x_2^{m+2} - x_1^{m+2})}{x_2 - x_1}
  \\
  = {} &
  \frac{(x_2^{m+1} + x_2^{m+2})
  - (x_1^{m+1} + x_1^{m+2})}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{m+1} (1 + x_2)
  - x_1^{m+1} (1 + x_1)}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{m+1} x_2^2 - x_1^{m+1} x_1^2}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{(m+2)+1} - x_1^{(m+2)+1}}{x_2 - x_1}
  \\
  = {} &
  g_{m+2}.
\end{aligned}
\]

最后，我们证明，对任何非负整数 \(m\)，
\(f_m - g_m = 0\)。
记 \(h_m = f_m - g_m\)。
则 \(h_0 = h_1 = 0\)，
且对任何非负整数 \(m\)，
\[
\begin{aligned}
  h_{m+2}
  = {} &
  f_{m+2} - g_{m+2}
  \\
  = {} &
  (f_m + f_{m+1}) - (g_m + g_{m+1})
  \\
  = {} &
  (f_m - g_m) + (f_{m+1} - g_{m+1})
  \\
  = {} &
  h_m + h_{m+1}.
\end{aligned}
\]
作命题 \(P(m)\)：\(h_m = 0\)。
再作命题 \(Q(m)\)：\(P(m)\) 与 \(P(m+1)\) 是对的。
我们用数学归纳法证明，对任何非负整数 \(m\)，\(Q(m)\) 是对的。

\(Q(0)\) 是对的，因为 \(P(0)\) 与 \(P(1)\) 是对的。

设 \(Q(m)\) 是对的。
则 \(P(m)\) 与 \(P(m+1)\) 是对的。
则 \(h_m = h_{m+1} = 0\)。
则
\(h_{m+2} = h_m + h_{m+1} = 0 + 0 = 0\)。
则 \(P(m+2)\) 是对的。
则 \(Q(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(x\) 是数。
设 \(k\)、\(n\) 是整数。
则
\[
\begin{aligned}
  \dbinom{x}{k} \dbinom{k}{n}
  = \dbinom{x}{n} \dbinom{x-n}{k-n}.
\end{aligned}
\]
:::

::: proof
设 \(n \leqslant -1\)。
则左边的 \(\dbinom{k}{n}\) 与右边的 \(\dbinom{x}{n}\)
都是 \(0\)。

设 \(n \geqslant 0\)，且 \(k \leqslant -1\)。
则 \(k - n \leqslant -1\)。
则左边的 \(\dbinom{x}{k}\) 与右边的 \(\dbinom{x-n}{k-n}\)
都是 \(0\)。

设 \(n \geqslant 0\)，\(k \geqslant 0\)，且 \(k < n\)。
则 \(k - n \leqslant -1\)。
则左边的 \(\dbinom{k}{n}\) 与右边的 \(\dbinom{x-n}{k-n}\)
都是 \(0\)。

最后，设 \(k \geqslant n \geqslant 0\)。
则
\[
\begin{aligned}
  &
  \dbinom{x}{n} \dbinom{x-n}{k-n}
  \\
  = {} &
  \frac{x (x - 1) \dots (x - (n - 1))}{n!}
  \cdot
  \frac{(x - n) (x - n - 1) \dots (x - n - (k - n - 1))}{(k - n)!}
  \\
  = {} &
  \frac{x (x - 1) \dots (x - (n - 1)) (x - n) (x - (n + 1))
  \dots (x - (k - 1))}{n! (k - n)!}
  \\
  = {} &
  \frac{x (x - 1) \dots (x - (k - 1))}{k!}
  \cdot
  \frac{k!}{n! (k - n)!}
  \\
  = {} &
  \dbinom{x}{k} \dbinom{k}{n}.
\end{aligned}
\]
:::

::: theorem
设 \(m\) 是正整数。
以数表 @eq:TriangleOfYangHui 的
行 \(2\)，列 \(m\) 的数 \(\dbinom{1}{m-1}\) 开始，
由右上至左下取 \(m\) 个数
（即所有的适合条件 \(i + j = m\)，
\(i \geqslant 1\)，且 \(j \geqslant 0\) 的
\(\dbinom{i}{j}\)），
并以 \(m/i\) 乘第 \(i\) 个数
\(\dbinom{i}{m-i}\)，
得 \(\dfrac{m}{i} \dbinom{i}{m-i}\)。
则它们的和
\[
\begin{aligned}
  \sum_{1 \leqslant i \leqslant m} {\dfrac{m}{i} \dbinom{i}{m - i}}
  = \left(\frac{1 + \sqrt{5}}{2}\right)^m
  + \left(\frac{1 - \sqrt{5}}{2}\right)^m.
\end{aligned}
\]
:::

::: proof
注意，当 \(i \geqslant 1\) 时，
\[
\begin{aligned}
  \dfrac{m}{i} \dbinom{i}{m - i}
  = {} &
  \left(\frac{i}{i} + \frac{m-i}{i}\right)
  \dbinom{i}{m - i}
  \\
  = {} &
  1 \dbinom{i}{m - i} + \frac{1}{i} \dbinom{m-i}{1} \dbinom{i}{m-i}
  \\
  = {} &
  \dbinom{i}{m - i} + \frac{1}{i} \dbinom{i}{1} \dbinom{i-1}{m-i-1}
  \\
  = {} &
  \dbinom{i}{m - i} + \dbinom{i-1}{m-i-1}
  \\
  = {} &
  \dbinom{i}{m-i} + \dbinom{i-1}{m-2-(i-1)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{1 \leqslant i \leqslant m} {\dfrac{m}{i} \dbinom{i}{m - i}}
  = {} &
  \sum_{1 \leqslant i \leqslant m} {\dbinom{i}{m-i}}
  + \sum_{1 \leqslant i \leqslant m} {\dbinom{i-1}{m-2-(i-1)}}
  \\
  = {} &
  \sum_{1 \leqslant i \leqslant m} {\dbinom{i}{m-i}}
  + \sum_{0 \leqslant j \leqslant m-1} {\dbinom{j}{m-2-j}}
  \\
  = {} &
  \sum_{0 \leqslant i \leqslant m} {\dbinom{i}{m-i}}
  + \sum_{0 \leqslant j \leqslant m-2} {\dbinom{j}{m-2-j}}.
\end{aligned}
\]
为方便，我们记
\[
\begin{aligned}
  x_1 = \frac{1 - \sqrt{5}}{2},
  \quad
  x_2 = \frac{1 + \sqrt{5}}{2}.
\end{aligned}
\]
则 \(x_2 - x_1 = \sqrt{5}\)，
\(x_2 + x_1 = 1\)，
\(x_2 x_1 = -1\)，
且 \((2 x_k - 1)^2 = 5\)，\(k = 1\)，\(2\)，
即 \(x_k^2 = 1 + x_k\)，\(k = 1\)，\(2\)。
则我们知道，
对任何非负整数 \(n\)，
\[
\begin{aligned}
  \sum_{0 \leqslant i \leqslant n} {\dbinom{i}{n-i}}
  = \frac{x_2^{n+1} - x_1^{n+1}}{x_2 - x_1}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{1 \leqslant i \leqslant m} {\dfrac{m}{i} \dbinom{i}{m - i}}
  = {} &
  \frac{x_2^{m+1} - x_1^{m+1}}{x_2 - x_1}
  + \frac{x_2^{m-1} - x_1^{m-1}}{x_2 - x_1}
  \\
  = {} &
  \frac{(x_2^{m+1} + x_2^{m-1})
  - (x_1^{m+1} + x_1^{m-1})}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{m-1} (x_2^2 + 1)
  - x_1^{m-1} (x_1^2 + 1)}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{m-1} (x_2^2 - x_2 x_1)
  - x_1^{m-1} (x_1^2 - x_2 x_1)}{x_2 - x_1}
  \\
  = {} &
  \frac{x_2^{m-1} x_2 (x_2 - x_1)
  - x_1^{m-1} x_1 (x_1 - x_2)}{x_2 - x_1}
  \\
  = {} &
  x_2^m + x_1^m.
\end{aligned}
\]
:::

::: theorem
设 \(x\)、\(y\)、\(h\) 是数。
设 \(m\)、\(n\) 是非负整数。
则
\[
\begin{aligned}
  \sum_{0 \leqslant k \leqslant m}
  {\dbinom{m}{k} \operatorname{fa} {(x, m - k; h)}
  \dbinom{k}{n} \operatorname{fa} {(y, k - n; h)}}
  = \dbinom{m}{n} \operatorname{fa} {(x + y, m - n; h)}.
\end{aligned}
\]
:::

::: proof
注意，若 \(m < n\)，则 \(n > m \geqslant k\)。
则 \(\dbinom{k}{n} = 0\)，
且 \(\dbinom{m}{n} = 0\)。
则左边与右边都是 \(0\)。

设 \(m \geqslant n\)。
则
\[
\begin{aligned}
  &
  \sum_{0 \leqslant k \leqslant m}
  {\dbinom{m}{k} \operatorname{fa} {(x, m - k; h)}
  \dbinom{k}{n} \operatorname{fa} {(y, k - n; h)}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant m}
  {\dbinom{m}{k} \dbinom{k}{n}
    \operatorname{fa} {(x, m - k; h)}
  \operatorname{fa} {(y, k - n; h)}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant m}
  {\dbinom{m}{n} \dbinom{m-n}{k-n}
    \operatorname{fa} {(x, m - k; h)}
  \operatorname{fa} {(y, k - n; h)}}
  \\
  = {} &
  \dbinom{m}{n}
  \sum_{0 \leqslant k \leqslant m}
  {\dbinom{m-n}{k-n}
    \operatorname{fa} {(x, m - k; h)}
  \operatorname{fa} {(y, k - n; h)}}
  \\
  = {} &
  \dbinom{m}{n}
  \sum_{0-n \leqslant k-n \leqslant m-n}
  {\dbinom{m-n}{k-n}
    \operatorname{fa} {(x, m - n - (k - n); h)}
  \operatorname{fa} {(y, k - n; h)}}
  \\
  = {} &
  \dbinom{m}{n}
  \sum_{-n \leqslant \ell \leqslant m-n}
  {\dbinom{m-n}{\ell}
    \operatorname{fa} {(x, m - n - \ell; h)}
  \operatorname{fa} {(y, \ell; h)}}
  \\
  = {} &
  \dbinom{m}{n}
  \sum_{0 \leqslant \ell \leqslant m-n}
  {\dbinom{m-n}{\ell}
    \operatorname{fa} {(x, m - n - \ell; h)}
  \operatorname{fa} {(y, \ell; h)}}
  \\
  = {} &
  \dbinom{m}{n}
  \operatorname{fa} {(x + y, m - n; h)}.
\end{aligned}
\]
:::

::: theorem
设 \(x\)、\(y\)、\(h\) 是数。
设 \(s\) 是正整数。
作 \(s\) 级阵 \(T(x; h; s)\)，使
\[
\begin{aligned}
  [T(x; h; s)]_{i,j} =
  \dbinom{i-1}{j-1} \operatorname{fa} {(x, i - j; h)}.
\end{aligned}
\]
则：

(1) 若 \(i < j\)，则 \([T(x; h; s)]_{i,j} = 0\)。

(2) \(\det {(T(x; h; s))} = 1\)。

(3) \(T(x; h; s) T(y; h; s) = T(x + y; h; s)\)。

(4) \(T(0; h; s) = I_s\)。
:::

::: proof
(1) 注意，若 \(i < j\)，则 \(i - 1 < j - 1\)。
    则 \(\dbinom{i-1}{j-1} = 0\)。
    则 \([T(x; h; s)]_{i,j} = 0\)。

(2) 由 (1)，
    \(\det {(T(x; h; s))}
      = [T(x; h; s)]_{1,1} [T(x; h; s)]_{2,2} \dots [T(x; h; s)]_{s,s}\)。
    注意，
    \[
    \begin{aligned}
      [T(x; h; s)]_{i,i}
      = \dbinom{i-1}{i-1} \operatorname{fa} {(x, 0; h)}
      = 1 \cdot 1 = 1.
    \end{aligned}
    \]
    则 \(\det {(T(x; h; s))} = 1^s = 1\)。

(3) 注意，
    \[
    \begin{aligned}
      &
      [T(x; h; s) T(y; h; s)]_{i,j}
      \\
      = {} &
      \sum_{1 \leqslant u \leqslant s} {[T(x; h; s)]_{i,u} [T(y; h; s)]_{u,j}}
      \\
      = {} &
      \sum_{1 \leqslant u \leqslant s}
      {\dbinom{i-1}{u-1} \operatorname{fa} {(x, i - u; h)}
      \dbinom{u-1}{j-1} \operatorname{fa} {(y, u - j; h)}}
      \\
      = {} &
      \sum_{1 \leqslant u \leqslant s}
      {\dbinom{i-1}{u-1} \operatorname{fa} {(x, (i-1) - (u-1); h)}
      \dbinom{u-1}{j-1} \operatorname{fa} {(y, (u-1) - (j-1); h)}}
      \\
      = {} &
      \sum_{0 \leqslant v \leqslant s-1}
      {\dbinom{i-1}{v} \operatorname{fa} {(x, (i-1) - v; h)}
      \dbinom{v}{j-1} \operatorname{fa} {(y, v - (j-1); h)}}
      \\
      = {} &
      \dbinom{i-1}{j-1} \operatorname{fa} {(x + y, (i-1) - (j-1); h)}
      \\
      = {} &
      [T(x + y; h; s)]_{i,j}.
    \end{aligned}
    \]

(4) 注意，
    \[
    \begin{aligned}
      [T(0; h; s)]_{i,j}
      = \dbinom{i-1}{j-1} \operatorname{fa} {(0, i-j; h)}.
    \end{aligned}
    \]
    若 \(i < j\)，则 \(\dbinom{i-1}{j-1} = 0\)；
    若 \(i > j\)，则 \(\operatorname{fa} {(0, i-j; h)} = 0\)；
    若 \(i = j\)，则 \(\dbinom{i-1}{j-1} = 1\)，
    且 \(\operatorname{fa} {(0, i-j; h)} = 1\)。
    故 \([T(0; h; s)]_{i,j} = \delta(i, j) = [I_s]_{i,j}\)。
    则 \(T(0; h; s) = I_s\)。
:::

::: theorem
设 \(s\) 是正整数。
作 \(s\) 级阵 \(P\)、\(Q\)，使
\[
\begin{aligned}
  [P]_{i,j} = \dbinom{i-1}{j-1},
  \quad
  [Q]_{i,j} = (-1)^{i-j} \dbinom{i-1}{j-1}.
\end{aligned}
\]
则 \(PQ = I\)，\(QP = I\)，
且 \(\det {(P)} = \det {(Q)} = 1\)。

进一步地，作 \(s\) 级阵 \(D\)，使
\([D]_{i,j} = (-1)^{j-1} [I]_{i,j}\)。
则 \(D D = I\)，且 \(Q = D P D\)。
:::

::: proof
我们证明，若 \(x\) 是非零的数，则
\[
\begin{aligned}
  \dbinom{i-1}{j-1} \operatorname{fa} {(x, i-j; 0)}
  = \dbinom{i-1}{j-1} x^{i-j}.
\end{aligned}
\]
若 \(i \geqslant j\)，则 \(i - j \geqslant 0\)。
则 \(\operatorname{fa} {(x, i-j; 0)} = x^{i-j}\)。
则左边等于右边。
若 \(i < j\)，则 \(i - j < 0\)，且 \(i - 1 < j - 1\)。
则左边是 \(0\)，且右边也是 \(0\)。

所以，\(Q = T(-1; 0; s)\)。
注意，对任何整数 \(a\)，\(1^a = 1\)。
则 \(P = T(1; 0; s)\)。
由上个定理，
\(P Q = T(1 + (-1); 0; s) = T(0; 0; s) = I\)，
且 \(Q P = T((-1) + 1; 0; s) = T(0; 0; s) = I\)。
当然，也由上个定理，\(P\) 与 \(Q\) 的行列式都是 \(1\)。

最后，注意，对任何 \(s\) 级阵 \(A\)，
\[
\begin{aligned}
  [A D]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {[A]_{i,\ell} [D]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {[A]_{i,\ell}\, (-1)^{j-1} [I]_{\ell,j}}
  \\
  = {} &
  [A]_{i,j}\, (-1)^{j-1} [I]_{j,j}
  + \sum_{\substack{1 \leqslant \ell \leqslant s \\ \ell \neq j}}
  {[A]_{i,\ell}\, (-1)^{j-1} [I]_{\ell,j}}
  \\
  = {} &
  [A]_{i,j}\, (-1)^{j-1} 1
  + \sum_{\substack{1 \leqslant \ell \leqslant s \\ \ell \neq j}}
  {[A]_{i,\ell}\, (-1)^{j-1} 0}
  \\
  = {} &
  (-1)^{j-1} [A]_{i,j},
\end{aligned}
\]
且
\[
\begin{aligned}
  [D A]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {[D]_{i,\ell} [A]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {(-1)^{\ell-1} [I]_{i,\ell} [A]_{\ell,j}}
  \\
  = {} &
  (-1)^{i-1} [I]_{i,i} [A]_{i,j}
  + \sum_{\substack{1 \leqslant \ell \leqslant s \\ \ell \neq i}}
  {(-1)^{\ell-1} [I]_{i,\ell} [A]_{\ell,j}}
  \\
  = {} &
  (-1)^{i-1} 1\, [A]_{i,j}
  + \sum_{\substack{1 \leqslant \ell \leqslant s \\ \ell \neq i}}
  {(-1)^{\ell-1} 0\, [A]_{\ell,j}}
  \\
  = {} &
  (-1)^{i-1} [A]_{i,j}.
\end{aligned}
\]

注意，\(D D = (I D) D\)。
则 \(I D\) 是以 \((-1)^{j-1}\) 乘 \(I\) 的列 \(j\)
（\(j = 1\)、\(2\)、\(\dots\)、\(s\)，下同）后得到的阵。
则 \((I D) D\) 是以 \((-1)^{j-1}\) 乘 \(I D\) 的列 \(j\) 后得到的阵，
即以 \(((-1)^{j-1})^2 = 1\) 乘 \(I\) 的列 \(j\) 后得到的阵，
即 \(I\)。

类似地，
\(P D\) 是以 \((-1)^{j-1}\) 乘 \(I\) 的列 \(j\) 后得到的阵，
且 \(D (P D)\) 是以 \((-1)^{i-1}\) 乘 \(I\) 的行 \(i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(s\)，下同）后得到的阵。
则 \(D P D\) 的 \((i, j)\)-元是 \(P\) 的 \((i, j)\)-元的
\((-1)^{i-1} (-1)^{j-1} = (-1)^{i-j}\) 倍。
则 \(D P D = Q\)。
:::

值得提，\(P\) 可被认为是
由数表 @eq:TriangleOfYangHui 的前 \(s\) 行与前 \(s\) 列的元
按原来的次序作成的 \(s\) 级阵。

::: example
设 \(s\) 级阵 \(P\) 适合，
\([P]_{i,j} = \dbinom{i-1}{j-1}\)。
我们计算 \(P P^{\mathrm{T}}\)。
（回想，\(P^{\mathrm{T}}\) 是 \(P\) 的转置：
\(P^{\mathrm{T}}\) 也是 \(s\) 级阵，
且 \([P^{\mathrm{T}}]_{i,j} = [P]_{j,i}\)。）
注意，
\[
\begin{aligned}
  [P P^{\mathrm{T}}]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {[P]_{i,\ell} [P^{\mathrm{T}}]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {[P]_{i,\ell} [P]_{j,\ell}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {\dbinom{i-1}{\ell-1} \dbinom{j-1}{\ell-1}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant s-1} {\dbinom{i-1}{k} \dbinom{j-1}{k}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant s-1} {\dbinom{i-1}{k} \dbinom{j-1}{j-1-k}}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant j-1} {\dbinom{i-1}{k} \dbinom{j-1}{j-1-k}}
  \\
  = {} &
  \dbinom{i-1+j-1}{j-1}.
\end{aligned}
\]
则 \(P P^{\mathrm{T}}\) 的元也是 \(2\) 项式系数。
通俗地，比如，当 \(s = 10\) 时，
\[
P P^{\mathrm{T}} =
\begin{bmatrix}
  1 & 1  & 1  & 1   & 1   & 1      & 1      & 1       & 1       & 1       \\
  1 & 2  & 3  & 4   & 5   & 6      & 7      & 8       & 9       & 10      \\
  1 & 3  & 6  & 10  & 15  & 21     & 28     & 36      & 45      & 55      \\
  1 & 4  & 10 & 20  & 35  & 56     & 84     & 120     & 165     & 220     \\
  1 & 5  & 15 & 35  & 70  & 126    & 210    & 330     & 495     & 715     \\
  1 & 6  & 21 & 56  & 126 & 252    & 462    & 792     & 1\,287  & 2\,002  \\
  1 & 7  & 28 & 84  & 210 & 462    & 924    & 1\,716  & 3\,003  & 5\,005  \\
  1 & 8  & 36 & 120 & 330 & 792    & 1\,716 & 3\,432  & 6\,435  & 11\,440 \\
  1 & 9  & 45 & 165 & 495 & 1\,287 & 3\,003 & 6\,435  & 12\,870 & 24\,310 \\
  1 & 10 & 55 & 220 & 715 & 2\,002 & 5\,005 & 11\,440 & 24\,310 & 48\,620 \\
\end{bmatrix}.
\]
:::

::: example
设 \(t_0\) 是数。
作 \(s\) 级阵 \(P(s; t_0)\)，使
\[
\begin{aligned}
  [P(s; t_0)] = \dbinom{i-1+t_0}{j-1};
\end{aligned}
\]
通俗地，\(P(s; t_0)\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    \dbinom{t_0}{0}     & \dbinom{t_0}{1}     & \dbinom{t_0}{2}     & \cdots & \dbinom{t_0}{s-1}     \\[2ex]
    \dbinom{t_0+1}{0}   & \dbinom{t_0+1}{1}   & \dbinom{t_0+1}{2}   & \cdots & \dbinom{t_0+1}{s-1}   \\[2ex]
    \dbinom{t_0+2}{0}   & \dbinom{t_0+2}{1}   & \dbinom{t_0+2}{2}   & \cdots & \dbinom{t_0+2}{s-1}   \\[2ex]
    \vdots              & \vdots              & \vdots              & {}     & \vdots                \\[2ex]
    \dbinom{t_0+s-1}{0} & \dbinom{t_0+s-1}{1} & \dbinom{t_0+s-1}{2} & \cdots & \dbinom{t_0+s-1}{s-1} \\
  \end{bmatrix}.
\end{aligned}
\]
我们求 \(\det {(P(s; t_0))}\)。

注意，

```math {@eq:ff-identity-of-Yang-Hui}
\dbinom{t_0+i-1}{j-1} - \dbinom{t_0+i-1-1}{j-1}
= \dbinom{t_0+i-1-1}{j-1-1}.
```

所以，若对 \(P(s; t_0)\)，
我们加行 \(s-1\) 的 \(-1\) 倍于行 \(s\)，
加行 \(s-2\) 的 \(-1\) 倍于行 \(s-1\)，
……
加行 \(1\) 的 \(-1\) 倍于行 \(2\)，
得 \(s\) 级阵
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    1      & \dbinom{t_0}{1}     & \dbinom{t_0}{2}     & \cdots & \dbinom{t_0}{s-1}     \\[2ex]
    0      & \dbinom{t_0}{0}     & \dbinom{t_0}{1}     & \cdots & \dbinom{t_0}{s-2}     \\[2ex]
    0      & \dbinom{t_0+1}{0}   & \dbinom{t_0+1}{1}   & \cdots & \dbinom{t_0+1}{s-2}   \\[2ex]
    \vdots & \vdots              & \vdots              & {}     & \vdots                \\[2ex]
    0      & \dbinom{t_0+s-2}{0} & \dbinom{t_0+s-2}{1} & \cdots & \dbinom{t_0+s-2}{s-2} \\
  \end{bmatrix},
\end{aligned}
\]
则 \(\det {(M)} = \det {(P(s; t_0))}\)。
注意，\([M]_{1,1} = 1\)，
\([M]_{i,1} = 0\)（\(i > 1\)），
且 \(M(1|1) = P(s-1; t_0)\)。
则
\[
\begin{aligned}
  \det {(P(s; t_0))}
  = \det {(M)}
  = (-1)^{1+1}\, [M]_{1,1} \det {(M(1|1))}
  = \det {(P(s-1; t_0))}.
\end{aligned}
\]
注意，\(P(1; t_0) = [1]\)。
则
\[
\begin{aligned}
  \det {(P(s; t_0))} = \det {(P(s-1; t_0))}
  = \dots = \det {(P(1; t_0))} = 1.
\end{aligned}
\]

值得提，我们也可如此求 \(\det {(P(s; t_0))}\)。
为此，我们考虑更一般的问题。

设 \(f_0 (x)\)、\(f_1 (x)\)、\(\dots\)、\(f_{s-1} (x)\)
分别是次不高于 \(0\)、\(1\)、\(\dots\)、\(s-1\) 的整式，
即
\[
\begin{aligned}
  f_0 (x) & = a_{0,0}, \\
  f_1 (x) & = a_{0,1} + a_{1,1} x, \\
  & \dots, \\
  f_{s-1} (x) & = a_{0,s-1} + a_{1,s-1} x + \dots + a_{s-1,s-1} x^{s-1}.
\end{aligned}
\]
设 \(x_0\)、\(x_1\)、\(\dots\)、\(x_{s-1}\) 是数。
作 \(s\) 级阵 \(W\)，使 \([W]_{i,j} = f_{j-1} (x_{i-1})\)。
求 \(\det {(W)}\)。

为方便，我们记 \(a_{i,j} = 0\)，若 \(i > j\)。
则
\[
\begin{aligned}
  f_{j-1} (x_{i-1})
  = {} &
  \sum_{0 \leqslant k \leqslant j-1} {a_{k,j-1} x_{i-1}^k}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant s-1} {a_{k,j-1} x_{i-1}^k}
  \\
  = {} &
  \sum_{0 \leqslant k \leqslant s-1} {x_{i-1}^k a_{k,j-1}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant s} {x_{i-1}^{\ell-1} a_{\ell-1,j-1}}.
\end{aligned}
\]
于是，若 \(s\) 级阵 \(V\) 适合，\([V]_{i,j} = x_{i-1}^{j-1}\)，
且 \(s\) 级阵 \(A\) 适合，\([A]_{i,j} = a_{i-1,j-1}\)，
则 \(W = V A\)。
则 \(\det {(W)} = \det {(V)} \det {(A)}\)。
一方面，\(V\) 是 Vandermonde 阵，且
\[
\begin{aligned}
  \det {(V)} = \prod_{0 \leqslant u < v \leqslant s-1} {(x_v - x_u)};
\end{aligned}
\]
另一方面，若 \(i > j\)，则 \([A]_{i,j}= a_{i-1,j-1} = 0\)，
故
\[
\begin{aligned}
  \det {(A)}
  = [A]_{1,1} [A]_{2,2} \dots [A]_{s,s}
  = a_{0,0} a_{1,1} \dots a_{s-1,s-1}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(W)} = a_{0,0} a_{1,1} \dots a_{s-1,s-1}
  \prod_{0 \leqslant u < v \leqslant s-1} {(x_v - x_u)}.
\end{aligned}
\]

现在，取 \(x_i = t_0 + i\)，
与 \(f_{j-1} (x) = \dbinom{x}{j-1}\)。
则 \(W = P(s; t_0)\)，
且 \(a_{j-1,j-1} = 1/(j-1)!\)。
注意，\(x_v - x_u = (t_0 + v) - (t_0 + u) = v - u\)。
则
\[
\begin{aligned}
  \prod_{0 \leqslant u < v \leqslant s-1} {(x_v - x_u)}
  = {} &
  (x_1 - x_0)
  \cdot (x_2 - x_0) (x_2 - x_1)
  \cdot \dots
  \\
  &
  \quad
  \cdot (x_{s-1} - x_0) (x_{s-1} - x_1) \dots (x_{s-1} - x_{s-2})
  \\
  = {} &
  1 \cdot (2 \cdot 1) \cdot \dots
  \cdot ((s-1) \cdot (s-2) \cdot \dots \cdot 1)
  \\
  = {} &
  1! \cdot 2! \cdot \dots \cdot (s-1)!
  \\
  = {} &
  \frac{1}{a_{1,1} \dots a_{s-1,s-1}}.
\end{aligned}
\]
故 \(\det {(P(s; t_0))} = a_{0,0} = 1\)。

值得提，若 \(t_0\) 是整数，则 \(P(s; t_0)\) 的元全为整数；
不过，若 \(t_0\) 不是整数，
则若 \(s > 1\)，则 \(P(s; t_0)\) 的元不全是整数
（注意，它的 \((1, 2)\)-元为 \(t_0\)）。
:::

::: theorem
设 \(t_0\) 是数。
设 \(n\) 是非负整数。
设数 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\)、
\(v_0\)、\(v_1\)、\(\dots\)、\(v_n\)
适合

```math {@eq:ff-system-of-linear-equations-with-binomial-coefficients}
\begin{alignedat}{7}
    \dbinom{t_0}{0} u_0   & {} + {} & \dbinom{t_0}{1} u_1   & {} + {} & \dots & {} + {} & \dbinom{t_0}{n} u_n   & {} = v_0, \\
    \dbinom{t_0+1}{0} u_0 & {} + {} & \dbinom{t_0+1}{1} u_1 & {} + {} & \dots & {} + {} & \dbinom{t_0+1}{n} u_n & {} = v_1, \\
    {}                    &         &                       &         &       &         &                       & \dots,    \\
    \dbinom{t_0+n}{0} u_0 & {} + {} & \dbinom{t_0+n}{1} u_1 & {} + {} & \dots & {} + {} & \dbinom{t_0+n}{n} u_n & {} = v_n.
\end{alignedat}
```

(1) 若 \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\)
    都是 \(0\)，
    则 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\)
    也都是 \(0\)。

(2) 若 \(t_0\)、\(v_0\)、\(v_1\)、\(\dots\)、\(v_n\)
    都是整数，
    则 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\)
    也都是整数。
:::

::: proof [证 1]
作 \((n + 1) \times 1\) 阵
\(U = [u_0, u_1, \dots, u_n]^{\mathrm{T}}\)，
\(V = [v_0, v_1, \dots, v_n]^{\mathrm{T}}\)。
则这 \(n + 1\) 个方程相当于 \(P(n+1; t_0)\, U = V\)。
由 Cramer 公式，与上个例，
\[
\begin{aligned}
  u_\ell
  = {} & \frac{\det {((P(n+1; t_0)) \{\ell+1, V\})}}{\det {(P(n+1; t_0))}}
  \\
  = {} & \det {((P(n+1; t_0)) \{\ell+1, V\})},
  \quad
  \ell = 0, 1, \dots, n,
\end{aligned}
\]
其中，\((P(n+1; t_0)) \{\ell+1, V\}\)
是以 \(V\) 代 \(P(n+1; t_0)\) 的列 \(\ell+1\) 后得到的阵。

(1) 若 \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是 \(0\)，
    则 \((P(n+1; t_0)) \{\ell+1, V\}\) 的列 \(\ell+1\) 是 \(0\)。
    则 \((P(n+1; t_0)) \{\ell+1, V\}\) 的行列式是 \(0\)。
    则 \(u_\ell = 0\)，
    \(\ell = 0\)、\(1\)、\(\dots\)、\(n\)。

(2) 若 \(t_0\)、\(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是整数，
    则 \((P(n+1; t_0)) \{\ell+1, V\}\) 的元全是整数。
    则 \((P(n+1; t_0)) \{\ell+1, V\}\) 的行列式是整数。
    则 \(u_\ell\) 是整数，
    \(\ell = 0\)、\(1\)、\(\dots\)、\(n\)。
:::

::: proof [证 2]
(1) 作命题 \(A(n)\)：
    若数 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\)、
    \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\)
    适合
    式 @eq:ff-system-of-linear-equations-with-binomial-coefficients，
    且 \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是 \(0\)，
    则 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\) 也都是 \(0\)。
    我们用数学归纳法证明，对任何非负整数 \(n\)，
    \(A(n)\) 是对的。

    \(A(0)\) 是对的。
    此时，式 @eq:ff-system-of-linear-equations-with-binomial-coefficients
    就是 \(u_0 = v_0\)。
    于是，若 \(v_0 = 0\)，则 \(u_0 = 0\)。

    设 \(A(n-1)\) 是对的。
    我们由此证明，\(A(n)\) 是对的。
    我们加第 \(n\) 个等式的 \(-1\) 倍到第 \(n+1\) 个等式，
    加第 \(n-1\) 个等式的 \(-1\) 倍到第 \(n\) 个等式，
    ……
    加第 \(2\) 个等式的 \(-1\) 倍到第 \(1\) 个等式，
    并注意式 @eq:ff-identity-of-Yang-Hui，
    得

    ```math {@eq:ff-equivalent-system}
    \begin{alignedat}{7}
        u_0 & {} +  {} & \dbinom{t_0}{1} u_1     & {} + {} & \dots & {} + {} & \dbinom{t_0}{n} u_n       & {} = v_0,           \\
        {}  & {} {} {} & \dbinom{t_0}{0} u_1     & {} + {} & \dots & {} + {} & \dbinom{t_0}{n-1} u_n     & {} = v_1 - v_0,     \\
        {}  &          &                         &         &       &         &                           & \dots,              \\
        {}  & {} {} {} & \dbinom{t_0+n-1}{0} u_1 & {} + {} & \dots & {} + {} & \dbinom{t_0+n-1}{n-1} u_n & {} = v_n - v_{n-1}.
    \end{alignedat}
    ```

    注意，若 \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是 \(0\)，
    则 \(v_n - v_{n-1}\)、\(\dots\)、\(v_1 - v_0\) 都是 \(0\)。
    对式 @eq:ff-equivalent-system 的后 \(n\) 个等式，
    由假定，\(u_1\)、\(\dots\)、\(u_n\) 都是 \(0\)。
    则
    \[
    \begin{aligned}
      u_0 = v_0 - \dbinom{t_0}{1} u_1 - \dots - \dbinom{t_0}{n} u_n = 0.
    \end{aligned}
    \]
    所以，\(A(n)\) 是对的。
    由数学归纳法，待证的命题成立。

(2) 作命题 \(B(n)\)：
    若数 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\)、
    \(v_0\)、\(v_1\)、\(\dots\)、\(v_n\)
    适合
    式 @eq:ff-system-of-linear-equations-with-binomial-coefficients，
    且 \(t_0\)、\(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是整数，
    则 \(u_0\)、\(u_1\)、\(\dots\)、\(u_n\) 也都是整数。
    我们用数学归纳法证明，对任何非负整数 \(n\)，
    \(B(n)\) 是对的。

    \(B(0)\) 是对的。
    此时，式 @eq:ff-system-of-linear-equations-with-binomial-coefficients
    就是 \(u_0 = v_0\)。
    于是，若 \(v_0\) 是整数，则 \(u_0\) 也是整数。

    设 \(B(n-1)\) 是对的。
    我们由此证明，\(B(n)\) 是对的。
    我们加第 \(n\) 个等式的 \(-1\) 倍到第 \(n+1\) 个等式，
    加第 \(n-1\) 个等式的 \(-1\) 倍到第 \(n\) 个等式，
    ……
    加第 \(2\) 个等式的 \(-1\) 倍到第 \(1\) 个等式，
    并注意式 @eq:ff-identity-of-Yang-Hui，
    得式 @eq:ff-equivalent-system。
    注意，若 \(t_0\)、\(v_0\)、\(v_1\)、\(\dots\)、\(v_n\) 都是整数，
    则 \(t_0\)、\(v_n - v_{n-1}\)、\(\dots\)、\(v_1 - v_0\) 都是整数。
    对式 @eq:ff-equivalent-system 的后 \(n\) 个等式，
    由假定，\(u_1\)、\(\dots\)、\(u_n\) 都是整数。
    则
    \[
    \begin{aligned}
      u_0 = v_0 - \dbinom{t_0}{1} u_1 - \dots - \dbinom{t_0}{n} u_n
    \end{aligned}
    \]
    也是整数
    （注意，每个 \(\dbinom{t_0}{j}\) 是整数）。
    所以，\(B(n)\) 是对的。
    由数学归纳法，待证的命题成立。
:::

回想，对任何整数 \(m\)，\(n\)，
\(2\) 项式系数 \(\dbinom{m}{n}\) 是整数。
于是，对任何整数
\(x_0\)、\(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)，
对整式
\[
\begin{aligned}
  g(x)
  = b_0 \dbinom{x-x_0}{0} + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n},
\end{aligned}
\]
当 \(m\) 是整数时，\(g(m)\) 是整数。
那么，反过来，对整式 \(f(x)\)，
若对任何整数 \(m\)，\(f(m)\) 是整数，
\(f(x)\) 会是何样的整式？

为此，我们先以 \(2\) 项式系数表示整式。

::: theorem
设 \(x_0\) 是数。
设 \(n\) 是非负整数。
设整式
\[
\begin{aligned}
  f(x) = a_0 + a_1 x + \dots + a_n x^n.
\end{aligned}
\]

(1) 存在数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)，
    使对任何数 \(x\)，
    \[
        \begin{aligned}
          f(x) = b_0 \dbinom{x-x_0}{0}
      + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}.
    \end{aligned}
    \]

(2) 设 \(t_0\) 是数。
    若数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)、
    \(c_0\)、\(c_1\)、\(\dots\)、\(c_n\)
    适合，
    对 \(i = 0\)、\(1\)、\(\dots\)、\(n\)，
    \[
        \begin{aligned}
          &
          b_0 \dbinom{t_0+i}{0} + b_1 \dbinom{t_0+i}{1}
      + \dots + b_n \dbinom{t_0+i}{n},
      \\
      = {} &
      c_0 \dbinom{t_0+i}{0} + c_1 \dbinom{t_0+i}{1}
      + \dots + c_n \dbinom{t_0+i}{n},
    \end{aligned}
    \]
    则 \(b_i = c_i\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)。
    进一步地，(1) 的系数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\) 是唯一的。
:::

::: proof
(1) 作命题 \(P(n)\)：
    对任何次不高于 \(n\) 的整式
    \[
    \begin{aligned}
      f(x) = a_0 + a_1 x + \dots + a_n x^n,
    \end{aligned}
    \]
    存在数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)，
    使对任何数 \(x\)，
    \[
        \begin{aligned}
          f(x) = b_0 \dbinom{x-x_0}{0}
      + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}.
    \end{aligned}
    \]
    我们用数学归纳法证明，对任何非负整数 \(n\)，\(P(n)\) 是对的。

    首先，注意，\(a_0 = a_0 \cdot 1 = a_0 \dbinom{x - x_0}{0}\)。
    则 \(P(0)\) 是对的。

    我们设 \(P(n-1)\) 是对的。
    我们由此证明，\(P(n)\) 是对的。
    任取次不高于 \(n\) 的整式
    \[
    \begin{aligned}
      f(x) = a_0 + a_1 x + \dots + a_n x^n.
    \end{aligned}
    \]
    注意，整式 \(\dbinom{x - x_0}{n}\) 是 \(n\) 次整式，
    且它的 \(x^n\) 项的系数是 \(1/n!\)。
    于是，\(f(x) - a_n n! \dbinom{x - x_0}{n}\)
    是次不高于 \(n-1\) 的整式。
    由假定，存在数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_{n-1}\)，
    使对任何数 \(x\)，
    \[
    \begin{aligned}
      f(x) - a_n n! \dbinom{x - x_0}{n}
      = b_0 \dbinom{x-x_0}{0} + b_1 \dbinom{x-x_0}{1}
      + \dots + b_{n-1} \dbinom{x-x_0}{n-1}.
    \end{aligned}
    \]
    取 \(b_n = a_n n!\)。
    则对任何数 \(x\)，
    \[
    \begin{aligned}
      f(x) = b_0 \dbinom{x-x_0}{0}
      + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}.
    \end{aligned}
    \]
    则 \(P(n)\) 是对的。
    由数学归纳法，待证的命题成立。

(2) 注意，对 \(i = 0\)、\(\dots\)、\(n\)，
    \[
        \begin{aligned}
          (b_0 - c_0) \dbinom{t_0+i}{0}
      + (b_1 - c_1) \dbinom{t_0+i}{1}
      + \dots
      + (b_n - c_n) \dbinom{t_0+i}{n} = 0.
    \end{aligned}
    \]
    记 \(d_i = b_i - c_i\)。
    则
    \[
    \begin{alignedat}{7}
      \dbinom{t_0}{0} d_0   & {} + {} & \dbinom{t_0}{1} d_1   & {} + {} & \dots & {} + {} & \dbinom{t_0}{n} d_n   & {} = 0, \\
      \dbinom{t_0+1}{0} d_0 & {} + {} & \dbinom{t_0+1}{1} d_1 & {} + {} & \dots & {} + {} & \dbinom{t_0+1}{n} d_n & {} = 0, \\
      {}                    &         &                       &         &       &         &                       & \dots,  \\
      \dbinom{t_0+n}{0} d_0 & {} + {} & \dbinom{t_0+n}{1} d_1 & {} + {} & \dots & {} + {} & \dbinom{t_0+n}{n} d_n & {} = 0.
    \end{alignedat}
    \]
    则 \(d_0\)、\(d_1\)、\(\dots\)、\(d_n\)
    都是 \(0\)。
    则 \(b_i = c_i\)，
    \(i = 0\)、\(1\)、\(\dots\)、\(n\)。

    由此，(1) 的系数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\) 是唯一的。
    设数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)、
    \(c_0\)、\(c_1\)、\(\dots\)、\(c_n\) 适合，
    对任何数 \(x\)，
    \[
    \begin{aligned}
      f(x)
      = {} &
      b_0 \dbinom{x-x_0}{0}
      + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}
      \\
      = {} &
      c_0 \dbinom{x-x_0}{0}
      + c_1 \dbinom{x-x_0}{1} + \dots + c_n \dbinom{x-x_0}{n}.
    \end{aligned}
    \]
    那么，我们取 \(x\) 为 \(x_0 + t_0 + i\)，
    \(i = 0\)、\(1\)、\(\dots\)、\(n\)，
    即得 (2) 的条件的 \(n + 1\) 个等式；
    由此，每个 \(b_i - c_i = 0\)，
    即 \(b_i = c_i\)。
:::

::: theorem
设 \(x_0\) 是数。
设 \(i_0\) 是整数。
设 \(n\) 是非负整数。
设
\[
\begin{aligned}
  f(x) = b_0 \dbinom{x-x_0}{0}
  + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}.
\end{aligned}
\]
是次不高于 \(n\) 的整式。
设 \(f(x_0 + i_0 + i)\) 是整数，\(i = 0\)、\(1\)、\(\dots\)、\(n\)。
则对任何整数 \(m\)，
\(f(x_0 + m)\) 是整数。
特别地，若 \(x_0\) 是整数，
则对任何整数 \(\ell\)，\(f(\ell)\) 是整数。
:::

::: proof
为方便，记 \(y_i = x_0 + i_0 + i\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)。
则 \(f(y_i)\) 是整数，\(i = 0\)、\(1\)、\(\dots\)、\(n\)。
分别取 \(x\) 为 \(y_0\)、\(y_1\)、\(\dots\)、\(y_n\)，
我们得
\[
\begin{alignedat}{7}
  \dbinom{i_0}{0} b_0   & {} + {} & \dbinom{i_0}{1} b_1   & {} + {} & \dots & {} + {} & \dbinom{i_0}{n} b_n   & {} = f(y_0), \\
  \dbinom{i_0+1}{0} b_0 & {} + {} & \dbinom{i_0+1}{1} b_1 & {} + {} & \dots & {} + {} & \dbinom{i_0+1}{n} b_n & {} = f(y_1), \\
  {}                    &         &                       &         &       &         &                       & \dots,       \\
  \dbinom{i_0+n}{0} b_0 & {} + {} & \dbinom{i_0+n}{1} b_1 & {} + {} & \dots & {} + {} & \dbinom{i_0+n}{n} b_n & {} = f(y_n).
\end{alignedat}
\]
则 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\) 都是整数。
那么，对任何整数 \(m\)，
与任何不超过 \(n\) 的非负整数 \(i\)，
整数 \(b_i\)
与 \(2\) 项式系数 \(\dbinom{(x_0 + m) - x_0}{i}\)
的积 \(b_i \dbinom{(x_0 + m) - x_0}{i}\) 是整数。
则它们的和，\(f(x_0 + m)\)，也是整数。
特别地，若 \(x_0\) 是整数，且 \(\ell\) 是整数，
则 \(\ell - x_0\) 是整数。
则 \(f(\ell) = f(x_0 + (\ell - x_0))\) 是整数。
:::

以 \(2\) 项式系数表示整式是有用的。

::: theorem
设 \(x_0\) 是数。
设 \(n\) 是非负整数。
设整式
\[
\begin{aligned}
  f(x) = b_0 \dbinom{x-x_0}{0}
  + b_1 \dbinom{x-x_0}{1} + \dots + b_n \dbinom{x-x_0}{n}.
\end{aligned}
\]
作整式
\[
\begin{aligned}
  g(x) = b_0 \dbinom{x-x_0}{1}
  + b_1 \dbinom{x-x_0}{2} + \dots + b_n \dbinom{x-x_0}{n+1}.
\end{aligned}
\]
则 \(g(x+1) - g(x) = f(x)\)。

设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  f(0) + f(1) + \dots + f(m-1)
  = \sum_{0 \leqslant i < m} {f(i)}
  = g(m) - g(0).
\end{aligned}
\]
特别地，若 \(x_0 = 0\)，则
\[
\begin{aligned}
  f(0) + f(1) + \dots + f(m-1) = g(m).
\end{aligned}
\]
:::

::: proof
注意，
\[
\begin{aligned}
  &
  g(x+1) - g(x)
  \\
  = {} &
  \left(
    b_0 \dbinom{x+1-x_0}{1}
    + b_1 \dbinom{x+1-x_0}{2} + \dots + b_n \dbinom{x+1-x_0}{n+1}
  \right)
  \\
  & -
  \left(
    b_0 \dbinom{x-x_0}{1}
    + b_1 \dbinom{x-x_0}{2} + \dots + b_n \dbinom{x-x_0}{n+1}
  \right)
  \\
  = {} &
  b_0 \left(\dbinom{x+1-x_0}{1} - \dbinom{x-x_0}{1}\right)
  + b_1 \left(\dbinom{x+1-x_0}{2} - \dbinom{x-x_0}{2}\right)
  \\
  &
  + \dots
  + b_n \left(\dbinom{x+1-x_0}{n+1} - \dbinom{x-x_0}{n+1}\right)
  \\
  = {} &
  b_0 \dbinom{x-x_0}{0} + b_1 \dbinom{x-x_0}{1}
  + \dots + b_n \dbinom{x-x_0}{n}
  \\
  = {} &
  f(x).
\end{aligned}
\]
则
\[
\begin{aligned}
  g(1) - g(0) & = f(0), \\
  g(2) - g(1) & = f(1), \\
  & \dots, \\
  g(m) - g(m-1) & = f(m-1).
\end{aligned}
\]
加各式即可。
左边的多的项会被消去。

特别地，若 \(x_0 = 0\)，则注意，
\[
g(0) = b_0 \dbinom{0}{1} + b_1 \dbinom{0}{2}
+ \dots + b_n \dbinom{0}{n+1} = 0.
\]
:::

如何以 \(2\) 项式系数表示整式？
设对整式 \(f(x) = a_0 + a_1 x + \dots + a_n x^n\)，
我们想找数 \(b_0\)、\(b_1\)、\(\dots\)、\(b_n\)，
使对任何数 \(x\)，
\[
\begin{aligned}
  f(x) = b_0 \dbinom{x}{0} + b_1 \dbinom{x}{1} + \dots + b_n \dbinom{x}{n}.
\end{aligned}
\]
回想，当证明 \(2\) 项式系数可以表示整式时，
我们考虑了 \(f(x) - a_n n! \dbinom{x}{n}\)
以消去 \(x^n\) 项，
然后类似地消去 \(x^{n-1}\)、\(\dots\)、\(x\)、\(1\) 项。
不过，这可能不是方便的。

为此，我们考虑差分。

::: definition
设 \(f(x)\) 是整式。

(1) 定义 \(f(x)\) 的**差分** \(∆ f (x)\)
    为整式 \(f(x + 1) - f(x)\)。

(2) 设 \(k\) 是非负整数。
    定义 \(f(x)\) 的 **\(k\) 级差分**
    \[
    \begin{aligned}
      ∆^k f (x) =
      \begin{cases}
        f(x), & k = 0; \\
        ∆ (∆^{k-1} f (x)), & k \geqslant 1.
      \end{cases}
    \end{aligned}
    \]
    通俗地，\(f(x)\) 的 \(0\) 级差分是 \(f(x)\)，
    且 \(f(x)\) 的 \(k\) 级差分是 \(f(x)\) 的 \(k-1\) 级差分的差分。
:::

注意，\(f(x)\) 的 \(1\) 级差分是 \(f(x)\) 的差分。

::: example
设 \(f(x) = x^3\)。
则 \(f(x)\) 的 \(0\) 级差分
\(∆^0 f (x) = f(x) = x^3\)。
\(f(x)\) 的（\(1\) 级）差分
\[
\begin{aligned}
  ∆ f (x)
  = {} &
  f(x + 1) - f(x)
  \\
  = {} &
  (x + 1)^3 - x^3
  \\
  = {} &
  ((x + 1) - x) ((x + 1)^2 + (x + 1) x + x^2)
  \\
  = {} &
  3x^2 + 3x + 1.
\end{aligned}
\]
\(f(x)\) 的 \(2\) 级差分
\[
\begin{aligned}
  ∆^2 f (x)
  = {} &
  ∆ f (x + 1) - ∆ f (x)
  \\
  = {} &
  (3 (x + 1)^2 + 3 (x + 1) + 1) - (3 x^2 + 3 x + 1)
  \\
  = {} &
  3 ((x + 1)^2 - x^2) + 3 ((x + 1) - x) + (1 - 1)
  \\
  = {} &
  3 (2 x + 1) + 3
  \\
  = {} &
  6x + 6.
\end{aligned}
\]
\(f(x)\) 的 \(3\) 级差分
\[
\begin{aligned}
  ∆^3 f (x)
  = {} &
  ∆^2 f (x + 1) - ∆^2 f (x)
  \\
  = {} &
  (6 (x + 1) + 6) - (6 x + 6)
  \\
  = {} &
  6.
\end{aligned}
\]
\(f(x)\) 的 \(4\) 级差分
\[
\begin{aligned}
  ∆^4 f (x)
  = {} &
  ∆^3 f (x + 1) - ∆^3 f (x)
  \\
  = {} &
  6 - 6
  \\
  = {} &
  0.
\end{aligned}
\]
进一步地，不难看出（可用数学归纳法），
对任何大于 \(4\) 的整数 \(k\)，
\(f(x)\) 的 \(k\) 级差分 \(∆^k f (x) = 0\)。
:::

::: example
我们考虑 \(2\) 项式系数的差分：
\[
\begin{aligned}
  ∆ \dbinom{x}{n}
  = \dbinom{x+1}{n} - \dbinom{x}{n}
  = \dbinom{x}{n-1}.
\end{aligned}
\]
不难看出（可用数学归纳法），一般地，
\[
∆^k \dbinom{x}{n} = \dbinom{x}{n-k}.
\]
:::

::: example
设
\[
\begin{aligned}
  f(x) = b_0 \dbinom{x}{0} + b_1 \dbinom{x}{1} + \dots + b_n \dbinom{x}{n}.
\end{aligned}
\]
则
\[
\begin{aligned}
  ∆ f(x)
  = {} &
  f(x + 1) - f(x)
  \\
  = {} &
  \left(
    b_0 \dbinom{x+1}{0} + b_1 \dbinom{x+1}{1} + \dots + b_n \dbinom{x+1}{n}
  \right)
  \\
  & -
  \left(
    b_0 \dbinom{x}{0} + b_1 \dbinom{x}{1} + \dots + b_n \dbinom{x}{n}
  \right)
  \\
  = {} &
  b_0 \left(\dbinom{x+1}{0} - \dbinom{x}{0}\right)
  + b_1 \left(\dbinom{x+1}{1} - \dbinom{x}{1}\right)
  \\
  &
  + \dots
  + b_n \left(\dbinom{x+1}{n} - \dbinom{x}{n}\right)
  \\
  = {} &
  b_1 \dbinom{x}{0} + \dots + b_n \dbinom{x}{n-1}.
\end{aligned}
\]
不难看出（可用数学归纳法），一般地，
\[
∆^k f(x) =
\begin{dcases}
  \sum_{k \leqslant i \leqslant n} {b_i \dbinom{x}{i-k}},
  & k \leqslant n; \\
  0, & k > n.
\end{dcases}
\]
:::

值得提，差分有如下的性质。

::: theorem
设 \(f(x)\) 是整式。
设 \(k\) 是非负整数。
则
\[
\begin{aligned}
  ∆^k f (x)
  = \sum_{0 \leqslant i \leqslant k} {(-1)^i \dbinom{k}{i} f(x + k - i)}.
\end{aligned}
\]
:::

::: proof
作命题 \(P(k)\)：
\[
\begin{aligned}
  ∆^k f (x)
  = \sum_{0 \leqslant i \leqslant k} {(-1)^i \dbinom{k}{i} f(x + k - i)}.
\end{aligned}
\]
我们用数学归纳法证明，对任何非负整数 \(k\)，
\(P(k)\) 是对的。

\(P(0)\) 是对的，因为左边是 \(f(x)\)，
且右边是 \((-1)^0 \dbinom{0}{0} f(x + 0 - 0) = f(x)\)。

设 \(P(k-1)\) 是对的，
即
\[
\begin{aligned}
  ∆^{k-1} f (x)
  = \sum_{0 \leqslant i \leqslant k-1} {(-1)^i \dbinom{k-1}{i} f(x + k - 1 - i)}.
\end{aligned}
\]
我们由此证明，\(P(k)\) 是对的。
注意，
\[
\begin{aligned}
  ∆^k f(x)
  = {} &
  ∆^{k-1} f (x+1) - ∆^{k-1} f (x)
  \\
  = {} &
  \hphantom{{} - {}}
  \sum_{0 \leqslant i \leqslant k-1} {(-1)^i \dbinom{k-1}{i} f(x + 1 + k - 1 - i)}
  \\
  &
  {} -
  \sum_{0 \leqslant i \leqslant k-1} {(-1)^i \dbinom{k-1}{i} f(x + k - 1 - i)}
  \\
  = {} &
  \hphantom{{} - {}}
  \sum_{0 \leqslant i \leqslant k-1} {(-1)^i \dbinom{k-1}{i} f(x + k - i)}
  \\
  &
  {} -
  \sum_{0 \leqslant i \leqslant k-1} {(-1)^{i+1-1} \dbinom{k-1}{i+1-1} f(x + k - (i + 1))}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant j \leqslant k-1} {(-1)^j \dbinom{k-1}{j} f(x + k - j)}
  \\
  &
  {} -
  \sum_{1 \leqslant j \leqslant k} {(-1)^{j-1} \dbinom{k-1}{j-1} f(x + k - j)}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{0 \leqslant j \leqslant k} {(-1)^j \dbinom{k-1}{j} f(x + k - j)}
  \\
  &
  {} -
  \sum_{0 \leqslant j \leqslant k} {(-1)\, (-1)^j \dbinom{k-1}{j-1} f(x + k - j)}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant k}
  {\left((-1)^j \dbinom{k-1}{j} f(x + k - j)
  + (-1)^j \dbinom{k-1}{j-1} f(x + k - j)\right)}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant k}
  {(-1)^j \left(
      \dbinom{k-1}{j} + \dbinom{k-1}{j-1}
  \right) f(x + k - j)}
  \\
  = {} &
  \sum_{0 \leqslant j \leqslant k}
  {(-1)^j \dbinom{k}{j} f(x + k - j)}.
\end{aligned}
\]
所以，\(P(k)\) 是对的。
由数学归纳法，待证的命题成立。
:::

现在，我们用差分，以 \(2\) 项式系数表示整式。
设对任何数 \(x\)，
\[
\begin{aligned}
  f(x) = b_0 \dbinom{x}{0} + b_1 \dbinom{x}{1} + \dots + b_n \dbinom{x}{n}.
\end{aligned}
\]
代 \(x\) 以 \(0\)，我们得 \(f(0) = b_0\)。
求 \(f(x)\) 的差分，我们得
\[
\begin{aligned}
  ∆ f (x) = b_1 \dbinom{x}{0} + b_2 \dbinom{x}{1} + \dots + b_n \dbinom{x}{n-1}.
\end{aligned}
\]
代 \(x\) 以 \(0\)，我们得 \(∆ f (0) = b_1\)。
再求 \(∆ f (x)\) 的差分，我们得
\[
\begin{aligned}
  ∆^2 f (x) = b_2 \dbinom{x}{0} + \dots + b_n \dbinom{x}{n-2}.
\end{aligned}
\]
代 \(x\) 以 \(0\)，我们得 \(∆^2 f (0) = b_2\)。
……
再求 \(∆^{n-1} f (x)\) 的差分，我们得
\[
\begin{aligned}
  ∆^n f (x) = b_n \dbinom{x}{0}.
\end{aligned}
\]
代 \(x\) 以 \(0\)，我们得 \(∆^n f (0) = b_n\)。
所以，

::: theorem
设
\[
\begin{aligned}
  f(x) = a_0 + a_1 x + \dots + a_n x^n
\end{aligned}
\]
是次不高于 \(n\) 的整式。
则
\[
\begin{aligned}
  f(x) =
  f (0) \dbinom{x}{0}
  + ∆ f (0) \dbinom{x}{1}
  + \dots
  + ∆^n f (0) \dbinom{x}{n}.
\end{aligned}
\]
:::

为求 \(f\) 的各级差分在 \(0\) 的值，我们先写下
\(f(j)\)，\(j = 0\)，\(1\)，\(\dots\)，\(n\)：
\[
\begin{aligned}
  \begin{matrix}
    f(0) & f(1) & f(2) & \cdots & f(n-2) & f(n-1) & f(n) \\
  \end{matrix}
\end{aligned}
\]
我们在 \(f(j)\)，\(j = 0\)，\(1\)，\(\cdots\)，\(n-1\)
的下面写它的“右邻”\(f(j+1)\) 与它 \(f(j)\)
的差 \(f(j+1) - f(j) = ∆ f(j)\)：
\[
\begin{aligned}
  \begin{matrix}
    f(0)            & f(1)            & f(2)            & \cdots & f(n-2)            & f(n-1)            & f(n) \\
    ∆ f(0) & ∆ f(1) & ∆ f(2) & \cdots & ∆ f(n-2) & ∆ f(n-1) & {}   \\
  \end{matrix}
\end{aligned}
\]
然后，我们在 \(∆ f(j)\)，
\(j = 0\)、\(1\)、\(\dots\)、\(n-2\)
的下面写它的“右邻”\(∆ f(j+1)\)
与它 \(∆ f(j)\)
的差 \(∆ f(j+1) - ∆ f(j)
= ∆^2 f(j)\)：
\[
\begin{aligned}
  \begin{matrix}
    f(0)              & f(1)              & f(2)              & \cdots & f(n-2)              & f(n-1)            & f(n) \\
    ∆ f(0)   & ∆ f(1)   & ∆ f(2)   & \cdots & ∆ f(n-2)   & ∆ f(n-1) & {}   \\
    ∆^2 f(0) & ∆^2 f(1) & ∆^2 f(2) & \cdots & ∆^2 f(n-2) & {}                & {}   \\
  \end{matrix}
\end{aligned}
\]
……
最后，我们在 \(∆^{n-1} f(0)\) 的下面
写它的“右邻”\(∆^{n-1} f(1)\)
与它 \(∆^{n-1} f(0)\) 的差
\(∆^{n-1} f(1) - ∆^{n-1} f(0)
= ∆^{n} f(0)\)，
得差分表
\[
\begin{aligned}
  \begin{matrix}
    f(0)                  & f(1)                  & f(2)                  & \cdots  & f(n-2)              & f(n-1)            & f(n) \\
    ∆ f(0)       & ∆ f(1)       & ∆ f(2)       & \cdots  & ∆ f(n-2)   & ∆ f(n-1) & {}   \\
    ∆^2 f(0)     & ∆^2 f(1)     & ∆^2 f(2)     & \cdots  & ∆^2 f(n-2) & {}                & {}   \\
    \vdots                & \vdots                & \vdots                & ⋰ & {}                  & {}                & {}   \\
    ∆^{n-2} f(0) & ∆^{n-2} f(1) & ∆^{n-2} f(2) & {}      & {}                  & {}                & {}   \\
    ∆^{n-1} f(0) & ∆^{n-1} f(1) & {}                    & {}      & {}                  & {}                & {}   \\
    ∆^{n} f(0)   & {}                    & {}                    & {}      & {}                  & {}                & {}   \\
  \end{matrix}
\end{aligned}
\]

::: example
设 \(a\)、\(b\) 是数。
设 \(m\) 是非负整数。
求
\[
\begin{aligned}
  a b + (a - 1) (b - 1) + \dots + (a - (m - 1)) (b - (m - 1))
  = \sum_{0 \leqslant i < m} {(a - i) (b - i)}.
\end{aligned}
\]

记 \(f(x) = (a - x) (b - x)\)。
这是 \(2\) 次整式。
我们以 \(2\) 项式系数表示 \(f(x)\)。
我们写出差分表：
\[
\begin{aligned}
  \begin{matrix}
    a b & (a - 1) (b - 1) & (a - 2) (b - 2) \\
    1 - a - b & 3 - a - b & {} \\
    2 & {} & {} \\
  \end{matrix}
\end{aligned}
\]
则
\[
\begin{aligned}
  f(x) = a b \dbinom{x}{0} + (1 - a - b) \dbinom{x}{1}
  + 2 \dbinom{x}{2}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \sum_{0 \leqslant i < m} {(a - i) (b - i)}
  = a b \dbinom{m}{1} + (1 - a - b) \dbinom{m}{2}
  + 2 \dbinom{m}{3}.
\end{aligned}
\]
特别地，若 \(a = b = m = n\)，则
\[
\begin{aligned}
  n^2 + (n - 1)^2 + \dots + 1^2
  = {} &
  n^2 \dbinom{n}{1} + (1 - 2n) \dbinom{n}{2} + 2 \dbinom{n}{3}
  \\
  = {} &
  n^3 + \frac{1}{2} (1 - 2n) n (n - 1) + \frac{2}{6} n (n - 1) (n - 2)
  \\
  = {} &
  \frac{n (n + 1) (2n + 1)}{6}.
\end{aligned}
\]
:::

我们用 \(2\) 项式系数讨论了整式的一些性质。
反过来，我们也能用整式讨论 \(2\) 项式系数。

回想，对 \(2\) 个整式
\[
\begin{aligned}
  f(x) & = a_0 + a_1 x + \dots + a_n x^n, \\
  g(x) & = b_0 + b_1 x + \dots + b_m x^m,
\end{aligned}
\]
若 \(n = m\)，且 \(a_i = b_i\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)，
则对任何数 \(x\)，\(f(x) = g(x)\)。
不过，反过来，若对任何数 \(x\)，\(f(x) = g(x)\)，
它们的系数是否相等？

::: theorem
设
\[
\begin{aligned}
  f(x) = a_0 + a_1 x + \dots + a_n x^n
\end{aligned}
\]
是次不高于 \(n\) 的整式。
设 \(x_0\)、\(x_1\)、\(\dots\)、\(x_n\) 是互不相同的数。
若 \(f(x_i) = 0\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)，
则 \(a_0\)、\(a_1\)、\(\dots\)、\(a_n\) 都是 \(0\)。
:::

::: proof
我们代
\[
\begin{aligned}
  1 a_0 + x a_1 + \dots + x^n a_n = f(x)
\end{aligned}
\]
的 \(x\) 为 \(x_0\)、\(x_1\)、\(\dots\)、\(x_n\)，
得
\[
\begin{aligned}
  1 a_0 + x_0 a_1 + \dots + x_0^n a_n & = 0, \\
  1 a_0 + x_1 a_1 + \dots + x_1^n a_n & = 0, \\
  & \dots, \\
  1 a_0 + x_n a_1 + \dots + x_n^n a_n & = 0.
\end{aligned}
\]
作 \(n + 1\) 级阵 \(V\)，使 \([V]_{i,j} = x_{i-1}^{j-1}\)；
作 \((n + 1) \times 1\) 阵 \(A\)，使 \([A]_{i,1} = a_{i-1}\)。
则 \(V A = 0\)。
注意，\(V\) 是 Vandermonde 阵，且
\[
\begin{aligned}
  \det {(V)} = \prod_{0 \leqslant u < v \leqslant n} {(x_v - x_u)} \neq 0.
\end{aligned}
\]
由 Cramer 公式，\(a_0 = a_1 = \dots = a_n = 0\)。
:::

::: theorem
设
\[
\begin{aligned}
  f(x) & = a_0 + a_1 x + \dots + a_n x^n, \\
  g(x) & = b_0 + b_1 x + \dots + b_m x^m
\end{aligned}
\]
是整式。
设 \(n \geqslant m \geqslant 0\)。
设存在 \(n + 1\) 个互不相同的数
\(x_0\)、\(x_1\)、\(\dots\)、\(x_n\)，
使 \(f(x_i) = g(x_i)\)，\(i = 0\)，\(1\)，\(\dots\)，\(\ell\)。
则
\[
\begin{aligned}
  a_i =
  \begin{cases}
    b_i, & 0 \leqslant i \leqslant m; \\
    0,   & m < i \leqslant n.
  \end{cases}
\end{aligned}
\]
:::

::: proof
为方便，我们设 \(b_k = 0\)，若 \(m < k \leqslant n\)。
则我们可写 \(g(x)\) 为 \(b_0 + b_1 x + \dots + b_n x^n\)。
考虑
\[
\begin{aligned}
  h(x)
  = {} &
  f(x) - g(x)
  \\
  = {} &
  (a_0 - b_0) + (a_1 - b_1) x + \dots + (a_n - b_n) x^n.
\end{aligned}
\]
注意，存在互不相同的数 \(x_0\)、\(x_1\)、\(\dots\)、\(x_n\)，
使 \(h(x_i) = f(x_i) - g(x_i) = 0\)，
\(i = 0\)、\(1\)、\(\dots\)、\(n\)。
则 \(a_i - b_i = 0\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)。
则 \(a_i = b_i\)，\(i = 0\)，\(1\)，\(\dots\)，\(n\)。
注意，若 \(i \leqslant m\)，则 \(a_i = b_i\)，
且若 \(i > m\)，则 \(a_i = b_i = 0\)。
:::

所以，对 \(2\) 个整式 \(f(x)\)、\(g(x)\)，
若对任何非负整数 \(n\)，
存在 \(n+1\) 个互不相同的数
\(x_0\)、\(x_1\)、\(\dots\)、\(x_n\)，
使 \(f(x_i) = g(x_i)\)，\(i = 0\)，\(1\)，\(\dots\)，\(m\)
（也就是，\(f(x)\) 与 \(g(x)\) 在任何多个互不相同的数的取值相等），
则对任何非负整数 \(k\)，
\(f(x)\) 与 \(g(x)\) 的 \(x^k\) 项的系数相等。
由此，对任何数 \(x\)，\(f(x) = g(x)\)。

我们用这个想法，证明下面的等式，并结束本节。

::: theorem
设 \(x\) 是数。
设 \(m\) 是非负整数。
则
\[
\begin{aligned}
  \sum_{0 \leqslant i \leqslant m} {(-1)^i \dbinom{x}{i} \dbinom{x}{m-i}} =
  \begin{dcases}
    (-1)^{m/2} \dbinom{x}{m/2}, & \text{若 \(m\) 是偶数}; \\
    0,                          & \text{若 \(m\) 是奇数}.
  \end{dcases}
\end{aligned}
\]
特别地，取 \(x = m\)，并注意 \(\dbinom{m}{m-i} = \dbinom{m}{i}\)，
我们得
\[
\begin{aligned}
  \sum_{0 \leqslant i \leqslant m} {(-1)^i \dbinom{m}{i}^2} =
  \begin{dcases}
    (-1)^{m/2} \dbinom{m}{m/2}, & \text{若 \(m\) 是偶数}; \\
    0,                          & \text{若 \(m\) 是奇数}.
  \end{dcases}
\end{aligned}
\]
:::

::: proof
这或许跟 Zhū–Vandermonde 恒等式
\[
\begin{aligned}
  \sum_{0 \leqslant i \leqslant m} {\dbinom{x}{m - i} \dbinom{y}{i}}
  = \dbinom{x + y}{m}
\end{aligned}
\]
是像的，但我们注意，待证的等式多了 \((-1)^i\)。
则我们要别地想。

为方便，我们记
\[
\begin{aligned}
  f(x) = \sum_{0 \leqslant i \leqslant m} {(-1)^i \dbinom{x}{i} \dbinom{x}{m-i}},
  \quad
  g(x) =
  \begin{dcases}
    (-1)^{m/2} \dbinom{x}{m/2}, & \text{若 \(m\) 是偶数}; \\
    0,                          & \text{若 \(m\) 是奇数}.
  \end{dcases}
\end{aligned}
\]
注意，\(f(x)\) 与 \(g(x)\) 都是关于 \(x\) 的整式。

我们先证明，对任何非负整数 \(n\)，\(f(n) = g(n)\)。

由 \(2\) 项式展开，
\[
\begin{aligned}
  (1 + x)^n
  = \sum_{0 \leqslant j \leqslant n} {\dbinom{n}{j} 1^{n-j} x^j}
  = \sum_{0 \leqslant j \leqslant n} {\dbinom{n}{j} x^j},
\end{aligned}
\]
且
\[
\begin{aligned}
  (1 - x)^n
  = (1 + (-x))^n
  = \sum_{0 \leqslant j \leqslant n} {\dbinom{n}{i} 1^{n-j} (-x)^j}
  = \sum_{0 \leqslant j \leqslant n} {(-1)^j \dbinom{n}{j} x^j}.
\end{aligned}
\]
则
\[
\begin{aligned}
  (1 - x)^n (1 + x)^n
  = \left(\sum_{0 \leqslant j \leqslant n} {(-1)^j \dbinom{n}{j} x^j}\right)
  \left(\sum_{0 \leqslant j \leqslant n} {\dbinom{n}{i} x^j}\right)
  = \sum_{0 \leqslant k \leqslant 2n} {c_k x^k},
\end{aligned}
\]
其中，由分配律，
\[
\begin{aligned}
  c_k = \sum_{0 \leqslant j \leqslant k} {(-1)^j \dbinom{n}{j} \dbinom{n}{k-j}}.
\end{aligned}
\]
另一方面，由次方的性质，
\[
\begin{aligned}
  (1 - x)^n (1 + x)^n = ((1 - x) (1 + x))^n
  = (1 - x^2)^n = (1 + (-x^2))^n.
\end{aligned}
\]
由 \(2\) 项式展开，
\[
\begin{aligned}
  (1 + (-x^2))^n
  = \sum_{0 \leqslant \ell \leqslant n} {\dbinom{n}{\ell} 1^{n-\ell} (-x^2)^\ell}
  = \sum_{0 \leqslant \ell \leqslant n} {(-1)^\ell \dbinom{n}{\ell} x^{2 \ell}}.
\end{aligned}
\]
若我们记
\[
\begin{aligned}
  d_k =
  \begin{dcases}
    (-1)^{k/2} \dbinom{n}{k/2}, & \text{若 \(k\) 是偶数}; \\
    0,                          & \text{若 \(k\) 是奇数},
  \end{dcases}
\end{aligned}
\]
则
\[
\begin{aligned}
  (1 - x^2)^n = \sum_{0 \leqslant k \leqslant 2n} {d_k x^k}.
\end{aligned}
\]
因为对任何数 \(x\)，\((1 - x)^n (1 + x)^n = (1 - x^2)^n\)，
它们的各项的系数相等。
特别地，它们的 \(x^m\) 项的系数相等，
即 \(c_m = d_m\)，
即
\[
\begin{aligned}
  \sum_{0 \leqslant j \leqslant m} {(-1)^j \dbinom{n}{j} \dbinom{n}{m-j}} =
  \begin{dcases}
    (-1)^{m/2} \dbinom{n}{m/2}, & \text{若 \(m\) 是偶数}; \\
    0,                          & \text{若 \(m\) 是奇数}.
  \end{dcases}
\end{aligned}
\]
则对任何非负整数 \(n\)，\(f(n) = g(n)\)。
（注意，到此，我们已能取 \(n\) 为 \(m\)，
得数表 @eq:TriangleOfYangHui 的
行 \(m+1\) 的所有的非零的数的平方的“交错和”。）

然后，我们证明，对任何数 \(x\)，\(f(x) = g(x)\)。
注意，\(f(x)\) 与 \(g(x)\) 已在任何多个互不相同的数
（具体地，每个非负整数）
的取值相等，
故 \(f(x)\) 与 \(g(x)\) 的各项的系数相等。
则对任何数 \(x\)，\(f(x) = g(x)\)。
:::

\(2\) 项式系数还有多的性质，其我们还未提。
若您想知道更多的性质，
您可以见一些组合学教材，
或者找相关的文献。
