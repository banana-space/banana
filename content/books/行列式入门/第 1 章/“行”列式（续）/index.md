---
title: “行”列式（续）
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

本节，为方便，
我变前面的行列式的关于列的公式
为关于行的公式。
我先引用我们见过的 \(2\) 个公式。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
则
\[
\begin{aligned}
  \det {(A)}
  = \sum_{j = 1}^{n} {(-1)^{1+j} [A]_{1,j} \det {(A(1|j))}}.
\end{aligned}
\]
:::

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

现在，我给出新的公式。
证明几乎是用转置变已有的关于列的公式，
故在此我就不证它们了。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(k\) 是不超过 \(n\) 的正整数。
设 \(i_1\)、\(i_2\)、\(\dots\)、\(i_k\) 是
不超过 \(n\) 的正整数，
且 \(i_1 < i_2 < \dots < i_k\)。
则
\[
\begin{aligned}
  &
  \det {(A)}
  = \sum_{1 \leqslant j_1 < j_2 < \dots < j_k \leqslant n}
  {\det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1, i_2, \dots, i_k}{j_1, j_2, \dots, j_k}
  \right)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot (-1)^{i_1 + i_2 + \dots + i_k
  + j_1 + j_2 + \dots + j_k}
  \det {(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\) 是
不超过 \(n\) 的正整数，
且互不相同。
则
\[
\begin{aligned}
  & \det {(A)} \\
  = {} &
  \sum_{\substack{
      1 \leqslant j_1, j_2, \dots, j_n \leqslant n \\
      j_1, j_2, \dots, j_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    s(j_1, j_2, \dots, j_n)\,
  [A]_{i_1,j_1} [A]_{i_2,j_2} \dots [A]_{i_n,j_n}}.
\end{aligned}
\]
特别地，取 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
为 \(1\)、\(2\)、\(\dots\)、\(n\)，
并注意，\(s(1, 2, \dots, n) = 1\)，
得
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \sum_{\substack{
      1 \leqslant j_1, j_2, \dots, j_n \leqslant n \\
      j_1, j_2, \dots, j_n\,\text{互不相同}
  }}
  { s(j_1, j_2, \dots, j_n)\,
  [A]_{1,j_1} [A]_{2,j_2} \dots [A]_{n,j_n}}.
\end{aligned}
\]
:::

::: theorem
设 \(n\) 级阵 \(A\) 的行 \(1\)、\(2\)、\(\dots\)、\(n\)
分别为 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)。
设 \(\ell_1\)、\(\ell_2\)、\(\dots\)、\(\ell_n\) 是
不超过 \(n\) 的正整数，
且互不相同。
则
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      a_{\ell_1} \\
      a_{\ell_2} \\
      \vdots     \\
      a_{\ell_n} \\
    \end{bmatrix}
  }
  = s(\ell_1, \ell_2, \dots, \ell_n) \det {(A)}.
\end{aligned}
\]
:::
