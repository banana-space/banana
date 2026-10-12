---
title: '判断实阵的行列式大于 \(0\) 的方法'
---

本节，我介绍判断实阵的行列式大于 \(0\) 的方法。

我们先注意一件有用的事。

::: theorem
设 \(m\)、\(b\) 是实数。
设 \(b > 0\)，且对任何不超过 \(1\) 的正数 \(t\)，
\(mt + b \neq 0\)。
则 \(m + b > 0\)。
:::

::: proof
用反证法。
反设 \(m + b \leqslant 0\)。
则 \(0 < b \leqslant -m\)。
设 \(s = b/(-m)\)。
则 \(0 < s \leqslant 1\)。
可是，\(ms + b = 0\)。
这是矛盾。
:::

::: theorem
设 \(A\) 是一个 \(n\) 级实阵。
设对任何不超过 \(n\) 的正整数 \(i\)，
\[
\begin{aligned}
  [A]_{i,i} >
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{i,u}|}.
\end{aligned}
\]
则 \(\det {(A)} > 0\)。
:::

::: proof
作命题 \(P(n)\)：

> 对任何适合如下条件的 \(n\) 级实阵 \(A\)，
> \(\det {(A)} > 0\)：
>
> > 对任何不超过 \(n\) 的正整数 \(i\)，
> > \[
> > \begin{aligned}
> >   [A]_{i,i} >
> >   \sum_{\substack{1 \leqslant u \leqslant n \\
> >   u \neq i}} {|[A]_{i,u}|}.
> > \end{aligned}
> > \]

我们用数学归纳法证明，
对任何正整数 \(n\)，
\(P(n)\) 是对的。

\(P(1)\) 是对的；这是显然的。

设 \(P(n-1)\) 是对的。
我们要由此证 \(P(n)\) 是对的。

设 \(A\) 是一个 \(n\) 级实阵，
且对任何不超过 \(n\) 的正整数 \(i\)，
\[
\begin{aligned}
  [A]_{i,i} >
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{i,u}|}.
\end{aligned}
\]
因为 \([A]_{i,i}\) 大于一个非负数，
故 \(0 < [A]_{i,i} = |[A]_{i,i}|\)。

作 \(n \times n\) 实阵 \(A_t\) 如下：
\[
\begin{aligned}
  [A_t]_{i,j} =
  \begin{cases}
    [A]_{i,j},     & i \neq 1;    \\
    [A]_{1,1},     & i = j = 1;   \\
    t\, [A]_{1,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
我们考虑 \(A_t\) 的行列式。
按行 \(1\) 展开，得
\[
\begin{aligned}
  \det {(A_t)}
  = {} &
  \sum_{1 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A_t (1 | j))}}
  \\
  = {} &
  \sum_{1 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  (-1)^{1 + 1} [A_t]_{1,1} \det {(A (1 | 1))}
  +
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  [A]_{1,1} \det {(A (1 | 1))}
  +
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} t\, [A]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  [A]_{1,1} \det {(A (1 | 1))}
  +
  t
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A]_{1,j} \det {(A (1 | j))}}.
\end{aligned}
\]
记
\[
\begin{aligned}
  m & =
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A]_{1,j} \det {(A (1 | j))}};
  \\
  b & =
  [A]_{1,1} \det {(A (1 | 1))}.
\end{aligned}
\]
则 \(m\)、\(b\) 是实数，且
\(\det {(A_t)} = mt + b\)。

作 \(n-1\) 级实阵 \(C = A(1 | 1)\)。
则 \([C]_{w,y} = [A]_{w+1,y+1}\)，
且对 \(w < n\)，
\[
\begin{aligned}
  [C]_{w,w}
  = {} &
  [A]_{w+1,w+1}
  \\
  > {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq w+1}}
  {|[A]_{w+1,u}|}
  \\
  \geqslant {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq 1, w+1}}
  {|[A]_{w+1,u}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq w}}
  {|[A]_{w+1,y+1}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq w}}
  {|[C]_{w,y}|}.
\end{aligned}
\]
所以，由假定，\(\det {(A(1|1))} = \det {(C)} > 0\)。
因为 \([A]_{1,1} > 0\)，\(b > 0\)。

设 \(t\) 是不超过 \(1\) 的正数。
则 \(0 \leqslant |t| = t \leqslant 1\)。
任取不超过 \(n\) 的正整数 \(i\)。
若 \(i \neq 1\)，则
\[
\begin{aligned}
  |[A_t]_{i,i}|
  = {} &
  |[A]_{i,i}|
  \\
  = {} &
  [A]_{i,i}
  \\
  > {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\u \neq i}}
  {|[A]_{i,u}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\u \neq i}}
  {|[A_t]_{i,u}|}.
\end{aligned}
\]
若 \(i = 1\)，则
\[
\begin{aligned}
  |[A_t]_{i,i}|
  = {} &
  |[A]_{i,i}|
  \\
  = {} &
  [A]_{i,i}
  \\
  > {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|}
  \\
  \geqslant {} &
  |t| \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A]_{i,u}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|t|\, |[A]_{i,u}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|t\, [A]_{i,u}|}
  \\
  = {} &
  \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq i}}
  {|[A_t]_{i,u}|}.
\end{aligned}
\]
则 \(\det {(A_t)} \neq 0\)。
从而，
对任何不超过 \(1\) 的正数 \(t\)，
\(mt + b \neq 0\)。

既然 \(b > 0\)，
且对任何不超过 \(1\) 的正数 \(t\)，
\(mt + b \neq 0\)，
我们能推出 \(m + b > 0\)。
故 \(\det {(A)} = \det {(A_1)} = m + b > 0\)。

所以，\(P(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

当然，如下命题也是对的（利用转置）：

::: theorem
设 \(A\) 是一个 \(n\) 级实阵。
设对任何不超过 \(n\) 的正整数 \(i\)，
\[
\begin{aligned}
  [A]_{i,i} >
  \sum_{\substack{1 \leqslant u \leqslant n \\
  u \neq i}} {|[A]_{u,i}|}.
\end{aligned}
\]
则 \(\det {(A)} > 0\)。
:::

我们回看上节的例。

::: example
设 \(A =
    \begin{bmatrix}
      9 & 6 & 2 \\
      3 & 8 & 4 \\
      5 & 1 & 7 \\
  \end{bmatrix}\)
是一个 \(3\) 级实阵。
不难算出，\(9 > |6| + |2|\)，
\(8 > |3| + |4|\)，
且 \(7 > |5| + |1|\)。
于是，\(\det {(A)} > 0\)。
（其实，不难算出，\(\det {(A)} = 388.\)）
:::

有时，一个实方阵 \(A\) 可能不适合定理的条件，故我们无法直接地用定理。
不过，既然我们研究是否 \(\det {(A)} > 0\)，
我们可找 \(2\) 个跟 \(A\) 同尺寸的实阵 \(B\)、\(C\)，
使 \(\det {(B)} \det {(C)} > 0\)，
且 \(BAC\) 适合定理的条件。
则 \(\det {(BAC)} > 0\)。
因为 \(0 < \det {(BAC)} = \det {(B)} \det {(A)} \det {(C)}\)，
且 \(\det {(B)} \det {(C)} > 0\)，
故 \(\det {(A)} > 0\)。

::: example
设 \(n \geqslant 2\)。
设 \(n\) 级实阵 \(A\) 适合
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
我们无法直接地用定理说明 \(\det {(A)} > 0\)。

记 \(c_k = 1 - 1/(k+1) = k/(k+1) > 0\)，
\(k = 1\)、\(2\)、\(\dots\)、\(n\)。
作 \(n\) 级实阵
\[
\begin{aligned}
  C =
  \begin{bmatrix}
    c_1    & 0      & \cdots & 0      \\
    0      & c_2    & \cdots & 0      \\
    \vdots & \vdots & \ddots & \vdots \\
    0      & 0      & \cdots & c_n    \\
  \end{bmatrix};
\end{aligned}
\]
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
不难算出，\(\det {(C)} > 0\)
（其实，\(\det {(C)} = 1/(n+1)\)）。

现在，我们证明，\(\det {(AC)} > 0\)。

首先，\(AC\) 当然是一个实阵。
不难算出，\([AC]_{i,j} = c_j\, [A]_{i,j}\)；
特别地，\([AC]_{i,i} = 2c_i\)。
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
  \begin{dcases}
    c_2,               & i = 1;     \\
    c_{i-1} + c_{i+1}, & 1 < i < n; \\
    c_{n-1},           & i = n.
  \end{dcases}
\end{aligned}
\]
不难验证，
\[
\begin{aligned}
  [AC]_{1,1} - R_1
  & = 2c_1 - c_2
  = 1 - \frac{2}{3} > 0, \\
  [AC]_{n,n} - R_n
  & = 2c_n - c_{n-1}
  = \frac{n-1}{n+1} + \frac{1}{n} > 0, \\
  [AC]_{i,i} - R_i
  & = (c_i - c_{i-1}) - (c_{i+1} - c_i)
  = \frac{1}{i(i+1)} - \frac{1}{(i+1)(i+2)} > 0.
\end{aligned}
\]
于是，\(\det {(AC)} > 0\)。

既然 \(0 < \det {(AC)} = \det {(A)} \det {(C)}\)，
且 \(\det {(C)} > 0\)，
故 \(\det {(A)} > 0\)。
:::

我们还有如下定理。

::: theorem
设 \(A\) 是一个 \(n\) 级实阵（\(n \geqslant 2\)）。
设对任何不超过 \(n\) 的正整数 \(i\)，
\([A]_{i,i} > 0\)。
设对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
\[
\begin{aligned}
  [A]_{j,j}\,[A]_{k,k} >
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
则 \(\det {(A)} > 0\)。
:::

::: proof
作命题 \(P(n)\)：

> 对任何适合如下条件的 \(n\) 级实阵 \(A\)，
> \(\det {(A)} > 0\)：
>
> > (1)
> > 对任何不超过 \(n\) 的正整数 \(i\)，
> > \([A]_{i,i} > 0\)；
> >
> > (2)
> > 对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
> > \[
> > \begin{aligned}
> >   [A]_{j,j}\,[A]_{k,k} >
> >   \Bigg(
> >     \sum_{\substack{1 \leqslant p \leqslant n \\
> >     p \neq j}} {|[A]_{j,p}|}
> >   \Bigg)
> >   \Bigg(
> >     \sum_{\substack{1 \leqslant q \leqslant n \\
> >     q \neq k}} {|[A]_{k,q}|}
> >   \Bigg).
> > \end{aligned}
> > \]

我们用数学归纳法证明，
对任何高于 \(1\) 的正整数 \(n\)，
\(P(n)\) 是对的。

\(P(2)\) 是对的。
任取 \(2\) 级实阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a & b \\
    c & d \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(a > 0\)，\(d > 0\)，
且 \(a d > |b|\,|c|\)。
则
\[
\begin{aligned}
  \det {(A)} = ad - bc > |b|\,|c| - bc
  = |bc| - bc \geqslant 0.
\end{aligned}
\]

设 \(P(n-1)\) 是对的。
我们要由此证 \(P(n)\) 是对的。

设 \(A\) 是一个 \(n\) 级实阵。
设对任何不超过 \(n\) 的正整数 \(i\)，
\([A]_{i,i} > 0\)。
设对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
\[
\begin{aligned}
  [A]_{j,j}\,[A]_{k,k} >
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

作 \(n \times n\) 实阵 \(A_t\) 如下：
\[
\begin{aligned}
  [A_t]_{i,j} =
  \begin{cases}
    [A]_{i,j},     & i \neq 1;    \\
    [A]_{1,1},     & i = j = 1;   \\
    t\, [A]_{1,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
我们考虑 \(A_t\) 的行列式。
按行 \(1\) 展开，得
\[
\begin{aligned}
  \det {(A_t)}
  = {} &
  \sum_{1 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A_t (1 | j))}}
  \\
  = {} &
  \sum_{1 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  (-1)^{1 + 1} [A_t]_{1,1} \det {(A (1 | 1))}
  +
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A_t]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  [A]_{1,1} \det {(A (1 | 1))}
  +
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} t\, [A]_{1,j} \det {(A (1 | j))}}
  \\
  = {} &
  [A]_{1,1} \det {(A (1 | 1))}
  +
  t
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A]_{1,j} \det {(A (1 | j))}}.
\end{aligned}
\]
记
\[
\begin{aligned}
  m & =
  \sum_{2 \leqslant j \leqslant n}
  {(-1)^{1 + j} [A]_{1,j} \det {(A (1 | j))}};
  \\
  b & =
  [A]_{1,1} \det {(A (1 | 1))}.
\end{aligned}
\]
则 \(m\)、\(b\) 是实数，且
\(\det {(A_t)} = mt + b\)。

作 \(n-1\) 级实阵 \(C = A(1 | 1)\)。
则 \([C]_{w,y} = [A]_{w+1,y+1}\)，
且 \([C]_{w,w} = [A]_{w+1,w+1} > 0\)。
对 \(v\)，\(w < n\)，
且 \(v \neq w\)，
\[
\begin{aligned}
  [C]_{v,v}\, [C]_{w,w}
  = {} &
  [A]_{v+1,v+1}\, [A]_{w+1,w+1}
  \\
  > {} &
  \Bigg(
    \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq v+1}}
    {|[A]_{v+1,u}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq w+1}}
    {|[A]_{w+1,u}|}
  \Bigg)
  \\
  \geqslant {} &
  \Bigg(
    \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq 1, v+1}}
    {|[A]_{v+1,u}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant u \leqslant n \\ u \neq 1, w+1}}
    {|[A]_{w+1,u}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq v}}
    {|[A]_{v+1,y+1}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq w}}
    {|[A]_{w+1,y+1}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq v}}
    {|[C]_{v,y}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant y \leqslant n-1 \\ y \neq w}}
    {|[C]_{w,y}|}
  \Bigg).
\end{aligned}
\]
所以，由假定，\(\det {(A(1|1))} = \det {(C)} > 0\)。
因为 \([A]_{1,1} > 0\)，\(b > 0\)。

设 \(t\) 是不超过 \(1\) 的正数。
则 \(0 \leqslant |t| = t \leqslant 1\)。
任取不超过 \(n\) 的正整数 \(j\)、\(k\)，
且 \(j \neq k\)。
若 \(j \neq 1\) 且 \(k \neq 1\)，则
\[
\begin{aligned}
  |[A_t]_{j,j}|\,|[A_t]_{k,k}|
  = {} &
  |[A]_{j,j}|\,|[A]_{k,k}|
  \\
  = {} &
  [A]_{j,j}\,[A]_{k,k}
  \\
  > {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A_t]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A_t]_{k,q}|}
  \Bigg).
\end{aligned}
\]
若 \(j = 1\) 且 \(k \neq j\)，则
\[
\begin{aligned}
  |[A_t]_{j,j}|\,|[A_t]_{k,k}|
  = {} &
  |[A]_{j,j}|\,|[A]_{k,k}|
  \\
  = {} &
  [A]_{j,j}\,[A]_{k,k}
  \\
  > {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \\
  \geqslant {} &
  |t|\,\Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|t|\,|[A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|t\, [A]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A]_{k,q}|}
  \Bigg)
  \\
  = {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A_t]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A_t]_{k,q}|}
  \Bigg).
\end{aligned}
\]
若 \(k = 1\) 且 \(j \neq k\)，
类似地，
\[
\begin{aligned}
  |[A_t]_{j,j}|\,|[A_t]_{k,k}|
  > {} &
  \Bigg(
    \sum_{\substack{1 \leqslant p \leqslant n \\
    p \neq j}} {|[A_t]_{j,p}|}
  \Bigg)
  \Bigg(
    \sum_{\substack{1 \leqslant q \leqslant n \\
    q \neq k}} {|[A_t]_{k,q}|}
  \Bigg).
\end{aligned}
\]
则 \(\det {(A_t)} \neq 0\)。
从而，
对任何不超过 \(1\) 的正数 \(t\)，
\(mt + b \neq 0\)。

既然 \(b > 0\)，
且对任何不超过 \(1\) 的正数 \(t\)，
\(mt + b \neq 0\)，
我们能推出 \(m + b > 0\)。
故 \(\det {(A)} = \det {(A_1)} = m + b > 0\)。

所以，\(P(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

当然，如下命题也是对的（利用转置）：

::: theorem
设 \(A\) 是一个 \(n\) 级实阵（\(n \geqslant 2\)）。
设对任何不超过 \(n\) 的正整数 \(i\)，
\([A]_{i,i} > 0\)。
设对任何不超过 \(n\)，且不等的正整数 \(j\)、\(k\)，
\[
\begin{aligned}
  [A]_{j,j}\,[A]_{k,k} >
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
则 \(\det {(A)} > 0\)。
:::

::: example
设 \(A =
    \begin{bmatrix}
      20 & 11 & 1 \\
      4  & 15 & 1 \\
      13 & 15 & 3 \\
  \end{bmatrix}\)
是一个 \(3\) 级实阵。

取实阵
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
不难算出，\(\det {(B)} > 0\)，
且 \(\det {(C)} > 0\)。

不难算出
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
由此可见，\(BAC\) 是实阵，且 \([BAC]_{i,i} > 0\)。

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
  & [BAC]_{1,1}\,[BAC]_{2,2}
  = 600 > 588 = R_1 R_2, \\
  & [BAC]_{1,1}\,[BAC]_{3,3}
  = 600 > 588 = R_1 R_3, \\
  & [BAC]_{2,2}\,[BAC]_{3,3}
  = 30^2 > 28^2 = R_2 R_3.
\end{aligned}
\]
（注意，既然我们已算出，
每个 \([BAC]_{j,j}\,[BAC]_{k,k}\)
都大于 \(R_j R_k\)
（\(j < k\)），
由乘法的交换律，
我们不必再判断
每个 \([BAC]_{j,j}\,[BAC]_{k,k}\)
是否都大于 \(R_j R_k\)
（\(j > k\)）。）
故 \(\det {(BAC)} > 0\)。

既然 \(0 < \det {(BAC)} = \det {(B)} \det {(A)} \det {(C)}\)，
\(\det {(B)} > 0\)，且 \(\det {(C)} > 0\)，
故 \(\det {(A)} > 0\)。
（其实，不难算出，\(\det {(A)} = 476.\)）
:::
