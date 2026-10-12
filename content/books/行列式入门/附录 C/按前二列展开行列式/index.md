---
title: '按前 \(2\) 列展开行列式'
---

本节，我想证明一个公式。
它在交错性的一个证明
与反称性的一个证明里有用。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 2\)）。
则
\[
\begin{aligned}
  \det {(A)}
  = \sum_{1 \leqslant i < k \leqslant n}
  {\det {
      \begin{bmatrix}
        [A]_{i,1} & [A]_{i,2} \\
        [A]_{k,1} & [A]_{k,2} \\
      \end{bmatrix}
    }
    (-1)^{i+k+1+2}
  \det {(A(i,k|1,2))}}.
\end{aligned}
\]
:::

::: proof
注意，当 \(d_2 \neq d_1\) 时，
\([A]_{d_2,2}\) 是
\(A(d_1|1)\) 的
\((d_2 - \rho(d_2, d_1), 1)\)-元。
从而
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  \sum_{d_1 = 1}^{n} {(-1)^{d_1+1} [A]_{d_1,1}
  \det {(A(d_1|1))}}
  \\
  = {} &
  \sum_{d_1 = 1}^{n} {(-1)^{d_1+1} [A]_{d_1,1}
    \sum_{\substack{1 \leqslant d_2 \leqslant n \\ d_2 \neq d_1}}
    {(-1)^{d_2 - \rho(d_2,d_1) + 1} [A]_{d_2,2}
  \det {(A(d_1,d_2|1,2))}}}
  \\
  = {} &
  \sum_{d_1 = 1}^{n}
  {\sum_{\substack{1 \leqslant d_2 \leqslant n \\ d_2 \neq d_1}}
    {(-1)^{d_1+1} [A]_{d_1,1}
      (-1)^{d_2 - \rho(d_2,d_1) + 1} [A]_{d_2,2}
  \det {(A(d_1,d_2|1,2))}}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant d_1,d_2 \leqslant n \\ d_1 \neq d_2}}
  {(-1)^{d_1+1} [A]_{d_1,1}
    (-1)^{d_2 - \rho(d_2,d_1) + 1} [A]_{d_2,2}
  \det {(A(d_1,d_2|1,2))}}
  \\
  = {} &
  \sum_{\substack{1 \leqslant d_1,d_2 \leqslant n \\ d_1 \neq d_2}}
  {(-1)^{\rho(d_1,d_2)}
    [A]_{d_1,1} [A]_{d_2,2}
    (-1)^{d_1+d_2+1+2}
  \det {(A(d_1,d_2|1,2))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{1 \leqslant d_1,d_2 \leqslant n \\ d_1 < d_2}}
  {(-1)^{\rho(d_1,d_2)}
    [A]_{d_1,1} [A]_{d_2,2}
    (-1)^{d_1+d_2+1+2}
  \det {(A(d_1,d_2|1,2))}}
  \\
  &
  +
  \sum_{\substack{1 \leqslant d_1,d_2 \leqslant n \\ d_1 > d_2}}
  {(-1)^{\rho(d_1,d_2)}
    [A]_{d_1,1} [A]_{d_2,2}
    (-1)^{d_1+d_2+1+2}
  \det {(A(d_1,d_2|1,2))}}
  \\
  = {} &
  \hphantom{{} + {}}
  \sum_{\substack{1 \leqslant i,k \leqslant n \\ i < k}}
  {(-1)^{\rho(i,k)}
    [A]_{i,1} [A]_{k,2}
    (-1)^{i+k+1+2}
  \det {(A(i,k|1,2))}}
  \\
  &
  +
  \sum_{\substack{1 \leqslant k,i \leqslant n \\ k > i}}
  {(-1)^{\rho(k,i)}
    [A]_{k,1} [A]_{i,2}
    (-1)^{k+i+1+2}
  \det {(A(k,i|1,2))}}
  \\
  = {} &
  \sum_{1 \leqslant i < k \leqslant n}
  {([A]_{i,1} [A]_{k,2} - [A]_{k,1} [A]_{i,2})\,
    (-1)^{i+k+1+2}
  \det {(A(i,k|1,2))}}
  \\
  = {} &
  \sum_{1 \leqslant i < k \leqslant n}
  {\det {
      \begin{bmatrix}
        [A]_{i,1} & [A]_{i,2} \\
        [A]_{k,1} & [A]_{k,2} \\
      \end{bmatrix}
    }
    (-1)^{i+k+1+2}
  \det {(A(i,k|1,2))}}.
\end{aligned}
\]
:::
