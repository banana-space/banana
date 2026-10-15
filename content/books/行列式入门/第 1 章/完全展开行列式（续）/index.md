---
title: 完全展开行列式（续）
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

设 \(A\) 是一个 \(n\) 级阵。
交换 \(A\) 的列的次序，得 \(n\) 级阵 \(B\)。
利用完全展开，我们可得 \(A\)、\(B\) 的行列式的关系。

::: theorem
设 \(n\) 级阵 \(A\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别为 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)。
设 \(\ell_1\)、\(\ell_2\)、\(\dots\)、\(\ell_n\) 是
不超过 \(n\) 的正整数，
且互不相同。
则
\[
\begin{aligned}
  \det {[a_{\ell_1}, a_{\ell_2}, \dots, a_{\ell_n}]}
  = s(\ell_1, \ell_2, \dots, \ell_n) \det {(A)}.
\end{aligned}
\]
:::

不过，论证此事前，我想用一个例助您理解，
此定理在说何。

::: example
设
\(a_1 =
    \begin{bmatrix}
      1 \\ 2 \\ 3 \\
  \end{bmatrix}\)，
\(a_2 =
    \begin{bmatrix}
      4 \\ 6 \\ 9 \\
  \end{bmatrix}\)，
\(a_3 =
    \begin{bmatrix}
      8 \\ 5 \\ 7 \\
  \end{bmatrix}\)。
则
\[
\begin{aligned}
  \det {[a_1, a_2, a_3]}
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

取 \(\ell_1\)、\(\ell_2\)、\(\ell_3\) 为 \(2\)、\(3\)、\(1\)。
则 \(s(2, 3, 1) = 1\)。
不难算出
\[
\begin{aligned}
  \det {[a_2, a_3, a_1]}
  = {} &
  \det {
    \begin{bmatrix}
      4 & 8 & 1 \\
      6 & 5 & 2 \\
      9 & 7 & 3 \\
  \end{bmatrix}}
  \\
  = {} &
  4 \cdot 5 \cdot 3 + 6 \cdot 7 \cdot 1 + 9 \cdot 8 \cdot 2
  - 4 \cdot 7 \cdot 2 - 6 \cdot 8 \cdot 3 - 9 \cdot 5 \cdot 1
  \\
  = {} &
  60 + 42 + 144 - 56 - 144 - 45
  \\
  = {} & 1.
\end{aligned}
\]
这就是 \(\det {[a_1, a_2, a_3]}\)。

再取 \(\ell_1\)、\(\ell_2\)、\(\ell_3\)
为 \(1\)、\(3\)、\(2\)。
则 \(s(1, 3, 2) = -1\)。
不难算出
\[
\begin{aligned}
  \det {[a_1, a_3, a_2]}
  = {} &
  \det {
    \begin{bmatrix}
      1 & 8 & 4 \\
      2 & 5 & 6 \\
      3 & 7 & 9 \\
  \end{bmatrix}}
  \\
  = {} &
  1 \cdot 5 \cdot 9 + 2 \cdot 7 \cdot 4 + 3 \cdot 8 \cdot 6
  - 1 \cdot 7 \cdot 6 - 2 \cdot 8 \cdot 9 - 3 \cdot 5 \cdot 4
  \\
  = {} &
  45 + 56 + 144 - 42 - 144 - 60
  \\
  = {} &
  {-} 1.
\end{aligned}
\]
这就是 \(- \det {[a_1, a_2, a_3]}\)。
:::

::: proof
作 \(n\) 级阵
\(
    B = [a_{\ell_1}, a_{\ell_2}, \dots, a_{\ell_n}].
  \)
注意，\([B]_{u,v} = [a_{\ell_v}]_{u,1} = [A]_{u,\ell_v}\)。

我们完全展开 \(\det {(B)}\)。
取 \(j_1\)、\(j_2\)、\(\dots\)、\(j_n\)
为 \(1\)、\(2\)、\(\dots\)、\(n\)，
并注意，\(s(1, 2, \dots, n) = 1\)，
得
\[
\begin{aligned}
  \det {(B)}
  = {} &
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    [B]_{i_1,1} [B]_{i_2,2}
  \dots [B]_{i_n,n}}.
\end{aligned}
\]
我们再完全展开 \(\det {(A)}\)。
取 \(j_1\)、\(j_2\)、\(\dots\)、\(j_n\)
为 \(\ell_1\)、\(\ell_2\)、\(\dots\)、\(\ell_n\)，
得
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  s(\ell_1, \ell_2, \dots, \ell_n)\,
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    [A]_{i_1,\ell_1} [A]_{i_2,\ell_2}
  \dots [A]_{i_n,\ell_n}}
  \\
  = {} &
  s(\ell_1, \ell_2, \dots, \ell_n)\,
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    [B]_{i_1,1} [B]_{i_2,2}
  \dots [B]_{i_n,n}}
  \\
  = {} & s(\ell_1, \ell_2, \dots, \ell_n)
  \det {(B)}.
\end{aligned}
\]
注意，\(s(\ell_1, \ell_2, \dots, \ell_n) = \pm 1\)，
故
\[
\det {(B)}
= s(\ell_1, \ell_2, \dots, \ell_n)
\det {(A)}.
\]
:::

::: example
设 \(a\)、\(b\)、\(c\)、\(d\)、
\(a'\)、\(b'\)、\(c'\)、\(d'\) 是数。
设 \(4\) 级阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a & a' & a & a' \\
    b & b' & b & b' \\
    c & c' & c & c' \\
    d & d' & d & d' \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(A)}\)。

设 \(A\) 的列 \(1\)、\(2\)、\(3\)、\(4\)
分别为 \(a_1\)、\(a_2\)、\(a_3\)、\(a_4\)。
则 \(a_3 = a_1\)。
一方面，因为 \(A = [a_3, a_2, a_1, a_4]\)，
\(\det {[a_3, a_2, a_1, a_4]} = \det {(A)}\)；
另一方面，
\[
\begin{aligned}
  &
  \det {[a_3, a_2, a_1, a_4]}
  \\
  = {} &
  s(3, 2, 1, 4) \det {(A)}
  \\
  = {} &
  (
    \operatorname{sgn} {(2 - 3)}
    \operatorname{sgn} {(1 - 3)}
    \operatorname{sgn} {(1 - 2)}
    \operatorname{sgn} {(4 - 3)}
    \operatorname{sgn} {(4 - 2)}
    \operatorname{sgn} {(4 - 1)}
  ) \det {(A)}
  \\
  = {} &
  {-\det {(A)}}.
\end{aligned}
\]
则 \(\det {(A)} = -\det {(A)}\)，
故 \(\det {(A)} = 0\)。
:::
