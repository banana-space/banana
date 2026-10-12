---
title: 单位阵
---

本节，我要介绍一类特别的方阵，单位阵。

::: definition [\(\delta\)-记号]
设 \(i\)、\(j\) 是 \(2\) 个文字。
定义
\[
\begin{aligned}
  \delta(i, j) =
  \begin{cases}
    0, & i \neq j; \\
    1, & i = j.
  \end{cases}
\end{aligned}
\]
:::

显然，\(\delta\)-记号是表示 \(2\) 个文字是否相等的一个量。
\(\delta(i, j) = 1\)，说明 \(i\)、\(j\) 是同一个文字；
\(\delta(i, j) = 0\)，说明 \(i\)、\(j\) 是不同的 \(2\) 个文字。

::: definition [单位阵]
设 \(n\) 为正整数。
作 \(n\) 级阵 \(I_n\)，
使 \([I_n]_{i,j} = \delta(i, j)\)
（\(1 \leqslant i, j \leqslant n\)）。
我们说，\(I_n\) 是 \(n\) 级**单位阵**。

当我们不强调单位阵的尺寸时，
我们可简单地写单位阵为 \(I\)。
:::

\(I\) 来自 <lang en>identity</lang>（英语）。

::: example
\(1\) 级单位阵是 \([1]\)。
\(2\) 级单位阵是
\(
    \begin{bmatrix}
      1 & 0 \\
      0 & 1 \\
    \end{bmatrix}.
  \)
\(3\) 级单位阵是
\(
    \begin{bmatrix}
      1 & 0 & 0 \\
      0 & 1 & 0 \\
      0 & 0 & 1 \\
    \end{bmatrix}.
  \)

一般地，\(n\) 级单位阵含 \(n\) 个 \(1\)
与 \(n^2 - n\) 个 \(0\)，
且 \(1\) 恰在行号与列号相等的地方
（也就是，\(0\) 恰在行号与列号不等的地方）。
:::

可写一个 \(n \times 1\) 阵
为 \(n\) 级单位阵 \(I_n\) 的列的数乘的和。
具体地，我们设 \(x\) 是一个 \(n \times 1\) 阵，
且设 \(I_n = [e_1, e_2, \dots, e_n]\)
（也就是，
设 \(e_1\)、\(e_2\)、\(\dots\)、\(e_n\) 是
\(I_n\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)）。
记 \(k_i = [x]_{i,1}\)。
则
\[
\begin{aligned}
  x
  =
  k_1 e_1 + k_2 e_2 + \dots + k_n e_n
  =
  \sum_{\ell = 1}^{n} {k_\ell e_\ell}.
\end{aligned}
\]
为证明此式，我们要用
单位阵的定义、加法的定义、数乘的定义
（不难看出，等式的 \(2\) 边的尺寸都是 \(n \times 1\)）：
\[
\begin{aligned}
  \left[ \sum_{\ell = 1}^{n} {k_\ell e_\ell} \right]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n} {[k_\ell e_\ell]_{i,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {k_\ell [e_\ell]_{i,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {k_\ell [I_n]_{i,\ell}}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {k_\ell \delta(i, \ell)}
  \\
  = {} &
  k_i \delta(i, i)
  + \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
  {k_\ell \delta(i, \ell)}
  \\
  = {} &
  k_i
  + \sum_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
  {k_\ell 0}
  \\
  = {} &
  k_i.
\end{aligned}
\]

至多以一个方式写一个 \(n \times 1\) 阵
为 \(n\) 级单位阵 \(I_n\) 的列的数乘的和。
具体地，设 \(e_1\)、\(e_2\)、\(\dots\)、\(e_n\) 是
\(I_n\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)。
再设
\[
\begin{aligned}
  \sum_{\ell = 1}^{n} {k_\ell e_\ell}
  = \sum_{\ell = 1}^{n} {p_\ell e_\ell}.
\end{aligned}
\]
不难算出
\[
\begin{aligned}
  & \sum_{\ell = 1}^{n} {k_\ell e_\ell} =
  \begin{bmatrix}
    k_1    \\
    \vdots \\
    k_n
  \end{bmatrix}, \\
  & \sum_{\ell = 1}^{n} {p_\ell e_\ell} =
  \begin{bmatrix}
    p_1    \\
    \vdots \\
    p_n
  \end{bmatrix}.
\end{aligned}
\]
从而
\[
\begin{aligned}
  \begin{bmatrix}
    k_1    \\
    \vdots \\
    k_n
  \end{bmatrix}
  =
  \begin{bmatrix}
    p_1    \\
    \vdots \\
    p_n
  \end{bmatrix}.
\end{aligned}
\]
由此可知，\(k_i = p_i\)。

综上，我们得

::: theorem
可以，且只能以一个方式写一个
\(n \times 1\) 阵为 \(n\) 级单位阵 \(I_n\) 的
列的数乘的和。
:::

::: example
设
\(
    x =
    \begin{bmatrix}
      6 \\ 2 \\ 8 \\
    \end{bmatrix}.
  \)
于是，一方面，
\[
\begin{aligned}
  x =
  6
  \begin{bmatrix}
    1 \\ 0 \\ 0 \\
  \end{bmatrix}
  + 2
  \begin{bmatrix}
    0 \\ 1 \\ 0 \\
  \end{bmatrix}
  + 8
  \begin{bmatrix}
    0 \\ 0 \\ 1 \\
  \end{bmatrix}.
\end{aligned}
\]

另一方面，我们设
\[
\begin{aligned}
  x =
  k_1
  \begin{bmatrix}
    1 \\ 0 \\ 0 \\
  \end{bmatrix}
  + k_2
  \begin{bmatrix}
    0 \\ 1 \\ 0 \\
  \end{bmatrix}
  + k_3
  \begin{bmatrix}
    0 \\ 0 \\ 1 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \begin{bmatrix}
    6 \\ 2 \\ 8 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    k_1 \\ 0 \\ 0 \\
  \end{bmatrix}
  +
  \begin{bmatrix}
    0 \\ k_2 \\ 0 \\
  \end{bmatrix}
  +
  \begin{bmatrix}
    0 \\ 0 \\ k_3 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    k_1 \\ k_2 \\ k_3 \\
  \end{bmatrix}.
\end{aligned}
\]
由此可知，
\(k_1\)、\(k_2\)、\(k_3\)
分别是
\(6\)、\(2\)、\(8\)。
:::

我们可用完全类似的方法证明如下结果。
我留它为您的习题。

::: theorem
可以，且只能以一个方式写一个
\(1 \times n\) 阵为 \(n\) 级单位阵 \(I_n\) 的
行的数乘的和。
:::
