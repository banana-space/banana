---
title: '判断阵的行列式不是 \(0\) 的方法'
---

我们知道，若一个阵的行列式是 \(0\)，
则形如式 @eq:NonzeroDet1，@eq:NonzeroDet2 的不等式成立。
利用反证法，我们立得判断阵的行列式不是 \(0\) 的方法：

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
设对任何不超过 \(n\) 的正整数 \(i\)，
\[
\begin{aligned}
  |[A]_{i,i}| >
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{i,u}|}.
\end{aligned}
\]
则 \(\det {(A)} \neq 0\)。
:::

::: theorem
设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 2\)）。
设对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
\[
\begin{aligned}
  |[A]_{j,j}|\,|[A]_{k,k}| >
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg).
\end{aligned}
\]
则 \(\det {(A)} \neq 0\)。
:::

当然，如下命题也是对的（利用转置）：

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
设对任何不超过 \(n\) 的正整数 \(i\)，
\[
\begin{aligned}
  |[A]_{i,i}| >
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{u,i}|}.
\end{aligned}
\]
则 \(\det {(A)} \neq 0\)。
:::

::: theorem
设 \(A\) 是一个 \(n\) 级阵（\(n \geqslant 2\)）。
设对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
\[
\begin{aligned}
  |[A]_{j,j}|\,|[A]_{k,k}| >
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{p,j}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{q,k}|}
  \Bigg).
\end{aligned}
\]
则 \(\det {(A)} \neq 0\)。
:::

这些定理的一个应用或许是，
对一类阵，
即使我们不计算行列式，
我们也可判断行列式不是 \(0\)。
这是好的。

::: example {@emp:NonzeroDet1}
设 \(A =
    \begin{bmatrix}
      9 & 6 & 2 \\
      3 & 8 & 4 \\
      5 & 1 & 7 \\
  \end{bmatrix}\)
是一个 \(3\) 级阵。
不难算出，\(|9| > |6| + |2|\)，
\(|8| > |3| + |4|\)，
且 \(|7| > |5| + |1|\)。
于是，\(\det {(A)} \neq 0\)。
（其实，不难算出，\(\det {(A)} = 388.\)）
:::

有时，一个方阵 \(A\) 可能不适合定理的条件，故我们无法直接地用定理。
不过，既然我们研究是否 \(\det {(A)} \neq 0\)，
我们可找 \(2\) 个跟 \(A\) 同尺寸的阵 \(B\)、\(C\)，
使 \(BAC\) 适合定理的条件。
则 \(\det {(BAC)} \neq 0\)。
因为 \(0 \neq \det {(BAC)} = \det {(B)} \det {(A)} \det {(C)}\)，
\(\det {(A)} \neq 0\)。

::: example {@emp:NonzeroDet2}
设 \(A =
    \begin{bmatrix}
      20 & 11 & 1 \\
      4  & 15 & 1 \\
      13 & 15 & 3 \\
  \end{bmatrix}\)
是一个 \(3\) 级阵。
不难验算，我们无法直接地用前 4 个定理的任何一个
判断 \(\det {(A)}\) 是否非零。

取
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 2 & 0 \\
    0 & 0 & 1 \\
  \end{bmatrix},
  \quad
  C =
  \begin{bmatrix}
    1 & 0 & 0  \\
    0 & 1 & 0  \\
    0 & 0 & 10 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  BAC =
  \begin{bmatrix}
    20 & 11 & 10 \\
    8  & 30 & 20 \\
    13 & 15 & 30 \\
  \end{bmatrix}.
\end{aligned}
\]
不难算出
\[
\begin{aligned}
  & R_1 = \sum_{\substack{1 \leqslant u \leqslant 3 \\ u \neq 1}}
  {|[BAC]_{1,u}|} = |11| + |10| = 21, \\
  & R_2 = \sum_{\substack{1 \leqslant u \leqslant 3 \\ u \neq 2}}
  {|[BAC]_{2,u}|} = |8| + |20| = 28, \\
  & R_3 = \sum_{\substack{1 \leqslant u \leqslant 3 \\ u \neq 3}}
  {|[BAC]_{3,u}|} = |13| + |15| = 28,
\end{aligned}
\]
且
\[
\begin{aligned}
  & |[BAC]_{1,1}|\,|[BAC]_{2,2}|
  = 600 > 588 = R_1 R_2, \\
  & |[BAC]_{1,1}|\,|[BAC]_{3,3}|
  = 600 > 588 = R_1 R_3, \\
  & |[BAC]_{2,2}|\,|[BAC]_{3,3}|
  = 30^2 > 28^2 = R_2 R_3.
\end{aligned}
\]
（注意，既然我们已算出，
每个 \(|[BAC]_{j,j}|\,|[BAC]_{k,k}|\)
都大于 \(R_j R_k\)
（\(j < k\)），
由乘法的交换律，
我们不必再判断
每个 \(|[BAC]_{j,j}|\,|[BAC]_{k,k}|\)
是否都大于 \(R_j R_k\)
（\(j > k\)）。）
故 \(\det {(BAC)} \neq 0\)。
则 \(\det {(A)} \neq 0\)。
（其实，不难算出，\(\det {(A)} = 476.\)）
:::

::: example {@emp:NonzeroDet3}
设 \(n \geqslant 2\)。
设 \(n\) 级阵 \(A\) 适合
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    2,
    & 1 \leqslant i = j \leqslant n;         \\
    \text{\(1\) 或 \(-1\)},
    & 1 \leqslant i = j - 1 \leqslant n - 1; \\
    \text{\(1\) 或 \(-1\)},
    & 2 \leqslant i = j + 1 \leqslant n;     \\
    0,
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
通俗地，当 \(n = 4\) 时，\(A\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    2     & \pm 1 & 0     & 0     \\
    \pm 1 & 2     & \pm 1 & 0     \\
    0     & \pm 1 & 2     & \pm 1 \\
    0     & 0     & \pm 1 & 2     \\
  \end{bmatrix}.
\end{aligned}
\]
（这里，正负号可自由地组合。）

不难算出，对 \(i = 1\) 或 \(i = n\)，
\[
\begin{aligned}
  |[A]_{i,i}| = 2 > 1
  = \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|};
\end{aligned}
\]
对 \(1 < i < n\)，
\[
\begin{aligned}
  |[A]_{i,i}| = 2 = 2
  = \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|}.
\end{aligned}
\]
于是，对 \(n = 2\)，我们可用第 1 个定理，
得 \(\det {(A)} \neq 0\)；
对 \(n = 3\)，我们可用第 2 个定理，
得 \(\det {(A)} \neq 0\)；
对 \(n \geqslant 4\)，这 4 个定理无法直接地被使用。

我们试找一个 \(n\) 级阵 \(C\)，
使 \(AC\) 适合某个定理的条件，
从而得 \(\det {(A)} \neq 0\)。
无妨设
\[
\begin{aligned}
  C =
  \begin{bmatrix}
    c_1    & 0      & \cdots & 0      \\
    0      & c_2    & \cdots & 0      \\
    \vdots & \vdots & \ddots & \vdots \\
    0      & 0      & \cdots & c_n    \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 是待定的非零的数。
具体地，
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    c_i, & 1 \leqslant i = j \leqslant n; \\
    0,   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，在后面的计算中，\(c_i\) 会常被取绝对值。
既然如此，为方便，我们无妨要求 \(c_i > 0\)。
不难算出，\([AC]_{i,j} = c_j [A]_{i,j}\)；
特别地，\(|[AC]_{i,i}| = 2c_i\)。
记
\[
\begin{aligned}
  R_i = \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[AC]_{i,u}|}.
\end{aligned}
\]
则
\[
\begin{aligned}
  R_i =
  \begin{cases}
    c_2,               & i = 1;     \\
    c_{i-1} + c_{i+1}, & 1 < i < n; \\
    c_{n-1},           & i = n.
  \end{cases}
\end{aligned}
\]
我们希望，找正数 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)，
使 \(|[AC]_{i,i}| > R_i\)，即
\[
\begin{aligned}
  2c_1     & > c_2,           \\
  2c_2     & > c_1 + c_3,     \\
  2c_3     & > c_2 + c_4,     \\
  & \dots, \\
  2c_{n-1} & > c_{n-2} + c_n, \\
  2c_n     & > c_{n-1}.
\end{aligned}
\]
这些不等式相当于
\[
\begin{aligned}
  c_1               & > c_2 - c_1,     \\
  c_2 - c_1         & > c_3 - c_2,     \\
  c_3 - c_2         & > c_4 - c_3,     \\
  & \dots, \\
  c_{n-1} - c_{n-2} & > c_n - c_{n-1}, \\
  c_n - c_{n-1}     & > -c_n.
\end{aligned}
\]
我们可试取
\[
\begin{aligned}
  c_1 &
  = \frac{1}{1 \cdot 2}
  = 1 - \frac{1}{2}, \\
  c_2 - c_1 &
  = \frac{1}{2 \cdot 3}
  = \frac{1}{2} - \frac{1}{3}, \\
  c_3 - c_2 &
  = \frac{1}{3 \cdot 4}
  = \frac{1}{3} - \frac{1}{4}, \\
  & \dots, \\
  c_{n-1} - c_{n-2} &
  = \frac{1}{(n-1)n}
  = \frac{1}{n-1} - \frac{1}{n}, \\
  c_n - c_{n-1} &
  = \frac{1}{n(n+1)}
  = \frac{1}{n} - \frac{1}{n+1}.
\end{aligned}
\]
即
\[
\begin{aligned}
  c_k = 1 - \frac{1}{k+1} = \frac{k}{k+1},
  \quad
  \text{\(k = 1\), \(2\), \(\dots\), \(n\)}.
\end{aligned}
\]
不难验证，\(c_k\) 是正数，且
\[
\begin{aligned}
  |[AC]_{1,1}| - R_1
  & = 2c_1 - c_2
  = 1 - \frac{2}{3} > 0, \\
  |[AC]_{n,n}| - R_n
  & = 2c_n - c_{n-1}
  = \frac{n-1}{n+1} + \frac{1}{n} > 0, \\
  |[AC]_{i,i}| - R_i
  & = (c_i - c_{i-1}) - (c_{i+1} - c_i)
  = \frac{1}{i(i+1)} - \frac{1}{(i+1)(i+2)} > 0.
\end{aligned}
\]
故 \(AC\) 适合第 1 个定理的条件。
则 \(\det {(AC)} \neq 0\)。
故 \(\det {(A)} \neq 0\)。
:::
