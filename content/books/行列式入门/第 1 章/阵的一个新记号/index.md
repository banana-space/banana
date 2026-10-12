---
title: 阵的一个新记号
---

本节，我们学习阵的一个新记号。
它可使我们更好地理解阵与行列式。

::: definition
设 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)
是 \(n\) 个 \(m \times 1\) 阵。
定义
\(
    \begin{bmatrix}
      c_1 & c_2 & \cdots & c_n \\
    \end{bmatrix}
  \)
是一个 \(m \times n\) 阵，
其中，对任何不超过 \(m\) 的正整数 \(i\)
与任何不超过 \(n\) 的正整数 \(j\)，
\[
\begin{aligned}
  \left[\,
    \begin{bmatrix}
      c_1 & c_2 & \cdots & c_n \\
    \end{bmatrix}
  \,\right]_{i,j}
  = [c_j]_{i,1}.
\end{aligned}
\]
（通俗地，
\(
    \begin{bmatrix}
      c_1 & c_2 & \cdots & c_n \\
    \end{bmatrix}
  \)
就是合 \(n\) 个 \(m \times 1\) 小阵
\(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)
为一个 \(m \times n\) 大阵的结果。）

习惯地，我们可写
\(
    \begin{bmatrix}
      c_1 & c_2 & \cdots & c_n \\
    \end{bmatrix}
  \)
为 \([c_1, c_2, \dots, c_n]\)。
:::

这个写法自然强调了阵的列。
当我们在后面研究行列式的性质时，此写法是有用的。

::: example
设
\(c_1 =
    \begin{bmatrix}
      1 \\ 2 \\ 3 \\
  \end{bmatrix}\)，
\(c_2 =
    \begin{bmatrix}
      4 \\ 6 \\ 9 \\
  \end{bmatrix}\)，
\(c_3 =
    \begin{bmatrix}
      8 \\ 5 \\ 7 \\
  \end{bmatrix}\)，
\(c_4 =
    \begin{bmatrix}
      10 \\ 11 \\ 12 \\
  \end{bmatrix}\)。
则
\[
[c_1, c_2, c_3, c_4] =
\begin{bmatrix}
  1 & 4 & 8 & 10 \\
  2 & 6 & 5 & 11 \\
  3 & 9 & 7 & 12 \\
\end{bmatrix}.
\]
:::

论证下面的命题可被认为是一个好习题。

::: theorem
设
\(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)、
\(d_1\)、\(d_2\)、\(\dots\)、\(d_n\)
是 \(2n\) 个 \(m \times 1\) 阵。
设 \(k\) 是数。
则
\[
\begin{aligned}
  & [c_1, c_2, \dots, c_n] + [d_1, d_2, \dots, d_n]
  = [c_1 + d_1, c_2 + d_2, \dots, c_n + d_n]; \\
  & k[c_1, c_2, \dots, c_n]
  = [kc_1, kc_2, \dots, kc_n].
\end{aligned}
\]
:::

::: proof
我证式 1。
论证式 2 比论证式 1 更简单，
故我留它为您的习题。

\([c_1, c_2, \dots, c_n]\)
与 \([d_1, d_2, \dots, d_n]\)
都是 \(m \times n\) 阵，
故它们自然可加，
且结果也是 \(m \times n\) 阵。
\(c_j\)、\(d_j\) 都是 \(m \times 1\) 阵，
故 \(c_j + d_j\) 也是。
不说元是否相等，至少等式的 \(2\) 边的阵的尺寸是相等的。
现在，比较元是否相等：
\[
\begin{aligned}
  {}   & [\, [c_1, c_2, \dots, c_n]
  + [d_1, d_2, \dots, d_n] \,]_{i,j}          \\
  = {} & [\, [c_1, c_2, \dots, c_n] \,]_{i,j}
  + [\, [d_1, d_2, \dots, d_n] \,]_{i,j}      \\
  = {} & [c_j]_{i,1} + [d_j]_{i,1}            \\
  = {} & [c_j + d_j]_{i,1}                    \\
  = {} & [\, [c_1 + d_1, c_2 + d_2, \dots,
  c_n + d_n] \,]_{i,j}.
\end{aligned}
\]
看来，元也相等。

证明的要点有且只有一个：用定义。
:::

设 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 是
\(n\) 个 \(n \times 1\) 阵。
那么，
\([c_1, c_2, \dots, c_n]\) 是一个 \(n\) 级阵，
从而有行列式 \(\det {([c_1, c_2, \dots, c_n])}\)。
不难看到，这里有 \(2\) 重括号。
习惯地，我们写
\[
\begin{aligned}
  \det {([c_1, c_2, \dots, c_n])}
  =
  \det {[c_1, c_2, \dots, c_n]}.
\end{aligned}
\]
不写 \(( \ )\) 似乎并不会引起误解，
所以，这是没问题的。

::: example
设
\(c_1 =
    \begin{bmatrix}
      1 \\ 2 \\ 3 \\
  \end{bmatrix}\)，
\(c_2 =
    \begin{bmatrix}
      4 \\ 6 \\ 9 \\
  \end{bmatrix}\)，
\(c_3 =
    \begin{bmatrix}
      8 \\ 5 \\ 7 \\
  \end{bmatrix}\)。
则
\[
\begin{aligned}
  \det {[c_1, c_2, c_3]}
  = {} &
  \det {
    \begin{bmatrix}
      1 & 4 & 8 \\
      2 & 6 & 5 \\
      3 & 9 & 7 \\
  \end{bmatrix}}
  \\
  = {} &
  1 \cdot 6 \cdot 7 + 2 \cdot 9 \cdot 8 + 3 \cdot 4 \cdot 5
  - 1 \cdot 9 \cdot 5 - 2 \cdot 4 \cdot 7 - 3 \cdot 6 \cdot 8
  \\
  = {} &
  42 + 144 + 60 - 45 - 56 - 144
  \\
  = {} & 1.
\end{aligned}
\]
:::

前面，我们合竖排的小阵为一个大阵。
我们当然也可合横排的小阵为一个大阵。

::: definition
设 \(r_1\)、\(r_2\)、\(\dots\)、\(r_m\)
是 \(m\) 个 \(1 \times n\) 阵。
定义
\(
    \begin{bmatrix}
      r_1    \\
      r_2    \\
      \vdots \\
      r_m    \\
    \end{bmatrix}
  \)
是一个 \(m \times n\) 阵，
其中，对任何不超过 \(m\) 的正整数 \(i\)
与任何不超过 \(n\) 的正整数 \(j\)，
\[
\begin{aligned}
  \left[\,
    \begin{bmatrix}
      r_1    \\
      r_2    \\
      \vdots \\
      r_m    \\
  \end{bmatrix}\,\right]_{\,i,j}
  = [r_i]_{1,j}.
\end{aligned}
\]
（通俗地，
\(
    \begin{bmatrix}
      r_1    \\
      r_2    \\
      \vdots \\
      r_m    \\
    \end{bmatrix}
  \)
就是合 \(m\) 个 \(1 \times n\) 小阵
\(r_1\)、\(r_2\)、\(\dots\)、\(r_m\)
为一个 \(m \times n\) 大阵的结果。）
:::

类似地，

::: theorem
设
\(r_1\)、\(r_2\)、\(\dots\)、\(r_m\)、
\(s_1\)、\(s_2\)、\(\dots\)、\(s_m\)
是 \(2m\) 个 \(1 \times n\) 阵。
设 \(k\) 是数。
则
\[
\begin{aligned}
  &
  \begin{bmatrix}
    r_1    \\
    r_2    \\
    \vdots \\
    r_m    \\
  \end{bmatrix}
  +
  \begin{bmatrix}
    s_1    \\
    s_2    \\
    \vdots \\
    s_m    \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    r_1 + s_1 \\
    r_2 + s_2 \\
    \vdots    \\
    r_m + s_m \\
  \end{bmatrix}; \\
  & k
  \begin{bmatrix}
    r_1    \\
    r_2    \\
    \vdots \\
    r_m    \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    kr_1   \\
    kr_2   \\
    \vdots \\
    kr_m   \\
  \end{bmatrix}.
\end{aligned}
\]
:::

::: proof
完全类似。
:::
