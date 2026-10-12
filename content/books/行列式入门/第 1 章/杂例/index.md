---
title: 杂例
---

::: example
设 \(A\) 是 \(n\) 级阵。
设 \(k\) 是数。
证明，\(\det {(kA)} = k^n \det {(A)}\)。
:::

这里，我展现一个用行列式定义的方法。

不过，先回想定义：

::: definition [行列式]
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
定义 \(A\) 的**行列式**
\[
\begin{aligned}
  \det {(A)} =
  \begin{dcases}
    [A]_{1,1},                                               & n = 1; \\
    \sum_{i = 1}^{n} {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}, & n \geqslant 2.
  \end{dcases}
\end{aligned}
\]
:::

::: proof
我们用数学归纳法证明此事。
取数 \(k\)。
具体地，设 \(P(n)\) 为命题

> 对任何 \(n\) 级阵 \(A\)，
> \[
> \begin{aligned}
>   \det {(kA)} = k^n \det {(A)}.
> \end{aligned}
> \]

则，我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 是对的。
任取 \(1\) 级阵 \(A = [a]\)。
那么，\(kA = [ka]\)。
所以，
\[
\begin{aligned}
  \det {(kA)} = ka = k^1 \det {(A)}.
\end{aligned}
\]

现在，我们假定 \(P(m-1)\) 是对的。
我们要证 \(P(m)\) 也是对的。
任取 \(m\) 级阵 \(A\)。
按 \(kA\) 的列 \(1\) 展开，得
\[
\begin{aligned}
  \det {(kA)}
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} [kA]_{i,1} \det {((kA) (i|1))}}
  \\
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} k [A]_{i,1} \det {((kA) (i|1))}}.
\end{aligned}
\]
注意，每个 \((kA)(i|1)\) 都是 \(m-1\) 级阵。
并且，不难验证，\((kA)(i|1) = k(A(i|1))\)。
从而，根据假定，
\[
\begin{aligned}
  \det {((kA)(i|1))} = k^{m-1} \det {(A(i|1))}.
\end{aligned}
\]
所以
\[
\begin{aligned}
  \det {(kA)}
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} k [A]_{i,1} k^{m-1} \det {(A(i|1))}}
  \\
  = {} & k k^{m-1}
  \sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}
  \\
  = {} & k^m \det {(A)}.
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

当然，本题也有别的解法。

在讲后一个例前，
我有必要提阵的新记号。

::: definition
设 \(A\)、\(B\)、\(C\)、\(D\)
分别是 \(m \times s\)、\(n \times s\)、
\(m \times t\)、\(n \times t\) 阵。
我们约定，记号
\[
\begin{aligned}
  \begin{bmatrix}
    A & C \\
    B & D \\
  \end{bmatrix}
\end{aligned}
\]
表示一个 \((m + n) \times (s + t)\)-阵 \(M\)，
且对任何不超过 \(m + n\) 的正整数 \(i\)
与不超过 \(s + t\) 的正整数 \(j\)，
\[
\begin{aligned}
  [M]_{i,j} =
  \begin{cases}
    [A]_{i,j},
    & \text{\(i \leqslant m\), 且 \(j \leqslant s\)}; \\
    [B]_{i-m,j},
    & \text{\(i > m\), 且 \(j \leqslant s\)};    \\
    [C]_{i,j-s},
    & \text{\(i \leqslant m\), 且 \(j > s\)};    \\
    [D]_{i-m,j-s},
    & \text{\(i > m\), 且 \(j > s\)}.
  \end{cases}
\end{aligned}
\]
:::

比如，设
\[
\begin{aligned}
  &
  A =
  \begin{bmatrix}
    10 & 12 & 14 \\
    11 & 13 & 15 \\
  \end{bmatrix},
  \\
  &
  B =
  \begin{bmatrix}
    16 & 20 & 24 \\
    17 & 21 & 25 \\
    18 & 22 & 26 \\
    19 & 23 & 27 \\
  \end{bmatrix},
  \\
  &
  C =
  \begin{bmatrix}
    28 & 30 & 32 & 34 & 36 \\
    29 & 31 & 33 & 35 & 37 \\
  \end{bmatrix},
  \\
  &
  D =
  \begin{bmatrix}
    38 & 42 & 46 & 50 & 54 \\
    39 & 43 & 47 & 51 & 55 \\
    40 & 44 & 48 & 52 & 56 \\
    41 & 45 & 49 & 53 & 57 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \begin{bmatrix}
    A & C \\
    B & D \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    10 & 12 & 14 & 28 & 30 & 32 & 34 & 36 \\
    11 & 13 & 15 & 29 & 31 & 33 & 35 & 37 \\
    16 & 20 & 24 & 38 & 42 & 46 & 50 & 54 \\
    17 & 21 & 25 & 39 & 43 & 47 & 51 & 55 \\
    18 & 22 & 26 & 40 & 44 & 48 & 52 & 56 \\
    19 & 23 & 27 & 41 & 45 & 49 & 53 & 57 \\
  \end{bmatrix}.
\end{aligned}
\]

设 \(A\)、\(B\)、\(C\)、\(D\)
分别是 \(m \times s\)、\(n \times s\)、
\(m \times t\)、\(n \times t\) 阵。
再设
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    A & C \\
    B & D \\
  \end{bmatrix}.
\end{aligned}
\]
不难验证，若 \(i \leqslant m\)，且 \(j \leqslant s\)，
则
\[
\begin{aligned}
  M(i|j)
  =
  \begin{bmatrix}
    A(i|j) & C(i|) \\
    B(|j)  & D     \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(B(|j)\) 表示去除 \(B\) 的列 \(j\) 后得到的阵
（不去除它的行），
且 \(C(i|)\) 表示去除 \(C\) 的行 \(i\) 后得到的阵
（不去除它的列）。

::: example
设 \(A\)、\(D\) 分别是 \(n\)、\(t\) 级阵。
设 \(C\) 是 \(n \times t\) 阵。
证明，
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      A & C \\
      0 & D \\
    \end{bmatrix}
  }
  = \det {(A)} \det {(D)},
\end{aligned}
\]
其中，左下角的 \(0\) 指 \(t \times n\) 零阵。
:::

我还是用定义解此题。

::: proof
我们用数学归纳法证明此事。
取 \(t\) 级阵 \(D\)。
具体地，设 \(P(n)\) 为命题

> 对任何 \(n\) 级阵 \(A\)，任何 \(n \times t\) 阵 \(C\)，
> \[
> \begin{aligned}
>   \det {
>     \begin{bmatrix}
>       A & C \\
>       0 & D \\
>     \end{bmatrix}
>   }
>   = \det {(A)} \det {(D)},
> \end{aligned}
> \]
> 其中，左下角的 \(0\) 指 \(t \times n\) 零阵。

则，我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 是对的。
设 \(A = [a]\)。
记
\[
\begin{aligned}
  J =
  \begin{bmatrix}
    A & C \\
    0 & D \\
  \end{bmatrix},
\end{aligned}
\]
其中，左下角的 \(0\) 指 \(t \times 1\) 零阵。
则
\[
\begin{aligned}
  & \det {(J)}
  \\
  = {} & \sum_{i = 1}^{1+t}
  {(-1)^{i+1} [J]_{i,1} \det {(J(i|1))}}
  \\
  = {} & (-1)^{1+1} [J]_{1,1} \det {(J(1|1))}
  + \sum_{i = 2}^{1+t}
  {(-1)^{i+1} [J]_{i,1} \det {(J(i|1))}}
  \\
  = {} & 1\, [A]_{1,1} \det {(D)}
  + \sum_{i = 2}^{1+t}
  {(-1)^{i+1} 0 \det {(J(i|1))}}
  \\
  = {} & [A]_{1,1} \det {(D)}
  \\
  = {} & \det {(A)} \det {(D)}.
\end{aligned}
\]

现在，我们假定 \(P(m-1)\) 是对的。
我们要证 \(P(m)\) 也是对的。
任取 \(m\) 级阵 \(A\)。
记
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    A & C \\
    0 & D \\
  \end{bmatrix},
\end{aligned}
\]
其中，左下角的 \(0\) 指 \(t \times m\) 零阵。
则
\[
\begin{aligned}
  & \det {(M)}
  \\
  = {} & \sum_{i = 1}^{m+t}
  {(-1)^{i+1} [M]_{i,1} \det {(M(i|1))}}
  \\
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} [M]_{i,1} \det {(M(i|1))}}
  + \sum_{i = m+1}^{m+t}
  {(-1)^{i+1} [M]_{i,1} \det {(M(i|1))}}
  \\
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(M(i|1))}}
  + \sum_{i = m+1}^{m+t}
  {(-1)^{i+1} 0 \det {(M(i|1))}}
  \\
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(M(i|1))}}.
\end{aligned}
\]
注意，\(1 \leqslant i \leqslant m\) 时，
\[
\begin{aligned}
  M(i|1) =
  \begin{bmatrix}
    A(i|1) & C(i|) \\
    0      & D     \\
  \end{bmatrix},
\end{aligned}
\]
其中，左下角的 \(0\) 指 \(t \times (m-1)\) 零阵。
根据假定，
\[
\begin{aligned}
  \det {(M(i|1))} = \det {(A(i|1))} \det {(D)}.
\end{aligned}
\]
从而
\[
\begin{aligned}
  \det {(M)}
  = {} & \sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))} \det {(D)}}
  \\
  = {} & \left(\sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}\right)
  \det {(D)}
  \\
  = {} & \det {(A)} \det {(D)}.
\end{aligned}
\]

所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::
