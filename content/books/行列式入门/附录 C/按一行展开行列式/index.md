---
title: 按一行展开行列式
---

本节，我想用定义（按列 \(1\) 展开）
证明按一行展开行列式的公式。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(i\) 为整数，且 \(1 \leqslant i \leqslant n\)。
则
\[
\begin{aligned}
  \det {(A)}
  = \sum_{j = 1}^{n} {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
\end{aligned}
\]
:::

::: proof
我们用数学归纳法证明此事。
具体地，设 \(P(n)\) 为命题

> 对任何 \(n\) 级阵 \(A\)，
> 对任何不超过 \(n\) 的正整数 \(i\)，
> \[
> \begin{aligned}
>   \det {(A)} = \sum_{j = 1}^{n}
>   {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
> \end{aligned}
> \]

则，我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 显然是对的。

可以验证，\(P(2)\) 也是对的（习题）。

现在，我们假定 \(P(m-1)\) 是对的。
我们要证 \(P(m)\) 也是对的。
任取一个 \(m\) 级阵 \(A\)。
任取不超过 \(m\) 的正整数 \(i\)。
为方便，我们记
\(f = (-1)^{i+1} [A]_{i,1} \det {(A(i|1))}\)。
则
（第 3 个等号利用了假定，
并注意，
\(A\) 的行 \(i\)（其中，\(k \neq i\)）对应
\(A(k|1)\) 的行 \(i - \rho(i,k)\)，
且 \(A\) 的列 \(j\)（其中，\(j \neq 1\)）对应
\(A(k|1)\) 的列 \(j - 1\)）
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  \sum_{1 \leqslant k \leqslant m}
  {(-1)^{k+1} [A]_{k,1} \det {(A(k|1))}}
  \\
  = {} &
  f + \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
  {(-1)^{k+1} [A]_{k,1} \det {(A(k|1))}}
  \\
  = {} &
  f + \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
  {(-1)^{k+1} [A]_{k,1}
    \sum_{j = 2}^{m}
    {(-1)^{i - \rho(i,k) + j - 1}
  [A]_{i,j} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
  {\sum_{j = 2}^{m}
    {(-1)^{k+1} [A]_{k,1}
      (-1)^{i - \rho(i,k) + j - 1}
  [A]_{i,j} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{j = 2}^{m}
  {\sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
    {(-1)^{k+1} [A]_{k,1}
      (-1)^{i - \rho(i,k) + j - 1}
  [A]_{i,j} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{j = 2}^{m}
  {\sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
    {(-1)^{i+j} [A]_{i,j}
      (-1)^{k + \rho(k,i) - 1}
  [A]_{k,1} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{j = 2}^{m}
  {\sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
    {(-1)^{i+j} [A]_{i,j}
      (-1)^{k - \rho(k,i) + 1}
  [A]_{k,1} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{j = 2}^{m}
  {(-1)^{i+j} [A]_{i,j}
    \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq i}}
    {(-1)^{k - \rho(k,i) + 1}
  [A]_{k,1} \det {(A(k,i|1,j))}}}
  \\
  = {} &
  f + \sum_{j = 2}^{m}
  {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}
  \\
  = {} &
  \sum_{j = 1}^{m}
  {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::
