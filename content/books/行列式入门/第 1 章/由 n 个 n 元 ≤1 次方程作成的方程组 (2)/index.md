---
title: '由 \(n\) 个 \(n\) 元 \(\leq 1\) 次方程作成的方程组 (2)'
---

::: -remark [选学]
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

前面，我们定量地研究了
由 \(n\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
的解。
具体地，当 \(n\) 级阵 \(A\) 的行列式不是 \(0\) 时，
我们用行列式写出了 \(AX = B\) 的唯一的解，
其中，
\(B\) 是 \(n \times 1\) 阵，
且 \(X\) 是未知的 \(n \times 1\) 阵。
不过，若 \(\det {(A)} = 0\)，
则 Cramer 公式不可用
（因为分母不可为 \(0\)）。
其实，当 \(\det {(A)} = 0\) 时，
\(AX = B\) 是否有解是一个复杂的问题。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1  & 1  \\
    -1 & -1 \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    1 \\
    b \\
  \end{bmatrix},
  \quad
  X =
  \begin{bmatrix}
    x_1 \\
    x_2 \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(b\) 是常数。
不难算出，\(\det {(A)} = 0\)。
当 \(b\) 取某些数时，
我们讨论 \(AX = B\) 的解。

当 \(b = -1\) 时，此方程组有解：
\[
\begin{aligned}
  A
  \begin{bmatrix}
    1 \\
    0 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    1 \cdot 1 + 1 \cdot 0     \\
    -1 \cdot 1 + (-1) \cdot 0 \\
  \end{bmatrix}
  =
  B.
\end{aligned}
\]
进一步地，\(AX = B\) 的解不唯一。
不难算出，
\[
\begin{aligned}
  A
  \begin{bmatrix}
    0 \\
    1 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    1 \cdot 0 + 1 \cdot 1     \\
    -1 \cdot 0 + (-1) \cdot 1 \\
  \end{bmatrix}
  =
  B,
\end{aligned}
\]
且
\(
    \begin{bmatrix}
      0 \\
      1 \\
    \end{bmatrix}
    \neq
    \begin{bmatrix}
      1 \\
      0 \\
    \end{bmatrix}
  \)。

当 \(b = 0\) 时，此方程组无解。
用反证法。
反设
\(
    A
    \begin{bmatrix}
      y_1 \\
      y_2 \\
    \end{bmatrix}
    = B
  \)，
即
\[
\begin{aligned}
  y_1 + y_2  & = 1, \\
  -y_1 - y_2 & = 0.
\end{aligned}
\]
从而
\[
\begin{aligned}
  1 + 0
  = {} & (y_1 + y_2) + (-y_1 - y_2) \\
  = {} & (y_1 - y_1) + (y_2 - y_2) = 0.
\end{aligned}
\]
这是矛盾。
:::

从本节开始，我们定性地研究
由 \(n\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
的解。
具体地，我们主要讨论解的性质，
而不是解的公式。

根据 Cramer 公式，我们不难得到如下事实：

::: theorem
设 \(A\) 是 \(n\) 级阵。
设 \(\det {(A)} \neq 0\)。
那么，对任何的 \(n \times 1\) 阵 \(B\)，
存在一个 \(n \times 1\) 阵 \(C\)，
使 \(AC = B\)。
（或者，
若存在某 \(n \times 1\) 阵 \(B\)，
使对任何的 \(n \times 1\) 阵 \(C\)，
\(AC \neq B\)，
则 \(\det {(A)} = 0\)。）
:::

重要地，此事反过来也对。

::: theorem
设 \(A\) 是 \(n\) 级阵。
设对任何的 \(n \times 1\) 阵 \(B\)，
存在一个 \(n \times 1\) 阵 \(C\)，
使 \(AC = B\)。
则 \(\det {(A)} \neq 0\)。
（或者，
若 \(\det {(A)} = 0\)，
则存在某 \(n \times 1\) 阵 \(B\)，
使对任何的 \(n \times 1\) 阵 \(C\)，
\(AC \neq B\)。）
:::

::: proof
设 \(n\) 级单位阵 \(I\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是
\(e_1\)、\(e_2\)、\(\dots\)、\(e_n\)。
每个 \(e_i\) 都是 \(n \times 1\) 阵。
根据假定，存在一个 \(n \times 1\) 阵 \(f_i\)
使 \(Af_i = e_i\)。
作 \(n\) 级阵
\(F = [f_1, f_2, \dots, f_n]\)。
则
\[
\begin{aligned}
  AF
  = {} & A\, [f_1, f_2, \dots, f_n] \\
  = {} & [Af_1, Af_2, \dots, Af_n]  \\
  = {} & [e_1, e_2, \dots, e_n]     \\
  = {} & I.
\end{aligned}
\]
因为 \(2\) 个同级的方阵的积的行列式
等于这 \(2\) 个阵的行列式的积，
\[
\begin{aligned}
  1 = \det {(I)} = \det {(A)} \det {(F)}.
\end{aligned}
\]
从而 \(\det {(A)} \neq 0\)。
:::
