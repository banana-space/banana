---
title: （关于列的）多线性
---

本节，我想证明（关于列的）多线性。

其实，在第 1 章，节 13，
我已用按一列展开行列式的公式证明了它。
不过，我想，知道别的证明是好的。

以下，设 \(P(n)\) 为命题

> 对任何不超过 \(n\) 的正整数 \(j\)，
> 任何 \(n-1\) 个 \(n \times 1\) 阵
> \(a_1\)、\(\dots\)、\(a_{j-1}\)，
> \(a_{j+1}\)、\(\dots\)、\(a_n\)，
> 任何 \(2\) 个 \(n \times 1\) 阵 \(x\)、\(y\)，
> 任何 \(2\) 个数 \(s\)、\(t\)，
> \[
> \begin{aligned}
>   & \det
>   {[a_1, \dots, a_{j-1}, sx + ty, a_{j+1}, \dots, a_n]}
>   \\
>   = {} &
>   s \det {[a_1, \dots, a_{j-1}, x, a_{j+1}, \dots, a_n]}
>   + t \det {[a_1, \dots, a_{j-1}, y, a_{j+1}, \dots, a_n]}.
> \end{aligned}
> \]

则，我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

::: proof
（用按一列展开）
见第 1 章，节 13。
:::

::: proof
（用按列 \(1\) 展开）
不难验证 \(P(1)\) 是对的。

现在，我们假定 \(P(m-1)\) 是对的。
我们要证 \(P(m)\) 也是对的。

任取不超过 \(m\) 的正整数 \(j\)。
任取 \(m-1\) 个 \(m \times 1\) 阵
\(a_1\)、\(\dots\)、\(a_{j-1}\)、
\(a_{j+1}\)、\(\dots\)、\(a_m\)。
任取 \(2\) 个 \(m \times 1\) 阵 \(x\)、\(y\)。
任取 \(2\) 个数 \(s\)、\(t\)。
作 \(3\) 个 \(m\) 级阵 \(A\)、\(B\)、\(C\)：
\(A\)、\(B\)、\(C\) 的列 \(k\) 为 \(a_k\)（\(k \neq j\)）；
\(A\) 的列 \(j\) 为 \(x\)；
\(B\) 的列 \(j\) 为 \(y\)；
\(C\) 的列 \(j\) 为 \(sx + ty\)。
则
\[
\begin{aligned}
  & \det {(A)}
  = \det
  {[a_1, \dots, a_{j-1}, x, a_{j+1}, \dots, a_m]};
  \\
  & \det {(B)}
  = \det
  {[a_1, \dots, a_{j-1}, y, a_{j+1}, \dots, a_m]};
  \\
  & \det {(C)}
  = \det
  {[a_1, \dots, a_{j-1}, sx + ty, a_{j+1}, \dots, a_m]}.
\end{aligned}
\]
不难发现，若 \(k \neq j\)，则
\(
    [A]_{i,k} = [B]_{i,k} = [C]_{i,k},
  \)
故
\(
    A(i|j) = B(i|j) = C(i|j).
  \)

设 \(j = 1\)。
那么
\[
\begin{aligned}
  & \det {(C)}
  \\
  = {} &
  \sum_{i = 1}^{m} {
    (-1)^{i+j} [C]_{i,j} \det {(C(i|j))}
  }
  \\
  = {} &
  \sum_{i = 1}^{m} {
    (-1)^{i+j} (s[A]_{i,j} + t[B]_{i,j}) \det {(C(i|j))}
  }
  \\
  = {} &
  s\sum_{i = 1}^{m} {
    (-1)^{i+j} [A]_{i,j} \det {(C(i|j))}
  }
  +
  t\sum_{i = 1}^{m} {
    (-1)^{i+j} [B]_{i,j} \det {(C(i|j))}
  }
  \\
  = {} &
  s\sum_{i = 1}^{m} {
    (-1)^{i+j} [A]_{i,j} \det {(A(i|j))}
  }
  +
  t\sum_{i = 1}^{m} {
    (-1)^{i+j} [B]_{i,j} \det {(B(i|j))}
  }
  \\
  = {} &
  s \det{(A)} + t \det{(B)}.
\end{aligned}
\]

设 \(j > 1\)。
设 \(A(i|1)\)、\(B(i|1)\)、\(C(i|1)\)
的列 \(j-1\) 分别是 \(p\)、\(q\)、\(r\)。
则 \(r = sp + tq\)。
由假定，
\(\det {(C(i|1))} = s\det {(A(i|1))} + t\det {(B(i|1))}\)。
从而
\[
\begin{aligned}
  & \det {(C)}
  \\
  = {} &
  \sum_{i = 1}^{m}
  {(-1)^{i+1} [C]_{i,1} \det {(C(i|1))}}
  \\
  = {} &
  \sum_{i = 1}^{m}
  {(-1)^{i+1} [C]_{i,1}
  (s\det {(A(i|1))} + t\det {(B(i|1))})}
  \\
  = {} &
  s \sum_{i = 1}^{m}
  {(-1)^{i+1} [C]_{i,1} \det {(A(i|1))}}
  +
  t \sum_{i = 1}^{m}
  {(-1)^{i+1} [C]_{i,1} \det {(B(i|1))}}
  \\
  = {} &
  s \sum_{i = 1}^{m}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}
  +
  t \sum_{i = 1}^{m}
  {(-1)^{i+1} [B]_{i,1} \det {(B(i|1))}}
  \\
  = {} &
  s \det {(A)} + t \det {(B)}.
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: proof
（用按行 \(1\) 展开）
不难验证 \(P(1)\) 是对的。

现在，我们假定 \(P(m-1)\) 是对的。
我们要证 \(P(m)\) 也是对的。

任取不超过 \(m\) 的正整数 \(j\)。
任取 \(m-1\) 个 \(m \times 1\) 阵
\(a_1\)、\(\dots\)、\(a_{j-1}\)、
\(a_{j+1}\)、\(\dots\)、\(a_m\)。
任取 \(2\) 个 \(m \times 1\) 阵 \(x\)、\(y\)。
任取 \(2\) 个数 \(s\)、\(t\)。
作 \(3\) 个 \(m\) 级阵 \(A\)、\(B\)、\(C\)：
\(A\)、\(B\)、\(C\) 的列 \(k\) 为 \(a_k\)（\(k \neq j\)）；
\(A\) 的列 \(j\) 为 \(x\)；
\(B\) 的列 \(j\) 为 \(y\)；
\(C\) 的列 \(j\) 为 \(sx + ty\)。
则
\[
\begin{aligned}
  & \det {(A)}
  = \det
  {[a_1, \dots, a_{j-1}, x, a_{j+1}, \dots, a_m]};
  \\
  & \det {(B)}
  = \det
  {[a_1, \dots, a_{j-1}, y, a_{j+1}, \dots, a_m]};
  \\
  & \det {(C)}
  = \det
  {[a_1, \dots, a_{j-1}, sx + ty, a_{j+1}, \dots, a_m]}.
\end{aligned}
\]

一方面，若 \(k = j\)，则
\([C]_{1,k} = s[A]_{1,k} + t[B]_{1,k}\)，
且
\(A(1|k) = B(1|k) = C(1|k)\)。
另一方面，若 \(k \neq j\)，
则
\([A]_{i,k} = [B]_{i,k} = [C]_{i,k}\)。
设 \(A(1|k)\)、\(B(1|k)\)、\(C(1|k)\)
的列 \(j - \rho(j, k)\)
分别是
\(p\)、\(q\)、\(r\)。
则
\(r = sp + tq\)。
由假定，
\(\det {(C(1|k))} = s \det {(A(1|k))} + t \det {(B(1|k))}\)。
从而
\[
\begin{aligned}
  & \det {(C)}
  \\
  = {} &
  \sum_{k = 1}^{m}
  {(-1)^{1 + k} [C]_{1,k} \det {(C(1|k))}}
  \\
  = {} &
  (-1)^{1 + j} [C]_{1,j} \det {(C(1|j))}
  +
  \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [C]_{1,k} \det {(C(1|k))}}
  \\
  = {} &
  \hphantom{{} + {}}
  (-1)^{1 + j} (s[A]_{1,j} + t[B]_{1,j}) \det {(C(1|j))}
  \\
  &
  +
  \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [C]_{1,k}
  (s \det {(A(1|k))} + t \det {(B(1|k))})}
  \\
  = {} &
  \hphantom{{} + {}}
  s (-1)^{1 + j} [A]_{1,j} \det {(C(1|j))}
  + t (-1)^{1 + j} [B]_{1,j} \det {(C(1|j))}
  \\
  &
  + s \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [C]_{1,k} \det {(A(1|k))}}
  \\
  &
  + t \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [C]_{1,k} \det {(B(1|k))}}
  \\
  = {} &
  \hphantom{{} + {}}
  s (-1)^{1 + j} [A]_{1,j} \det {(A(1|j))}
  + t (-1)^{1 + j} [B]_{1,j} \det {(B(1|j))}
  \\
  &
  + s \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [A]_{1,k} \det {(A(1|k))}}
  \\
  &
  + t \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [B]_{1,k} \det {(B(1|k))}}
  \\
  = {} &
  \hphantom{{} + {}}
  s (-1)^{1 + j} [A]_{1,j} \det {(A(1|j))}
  + s \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [A]_{1,k} \det {(A(1|k))}}
  \\
  &
  + t (-1)^{1 + j} [B]_{1,j} \det {(B(1|j))}
  + t \sum_{\substack{1 \leqslant k \leqslant m \\ k \neq j}}
  {(-1)^{1 + k} [B]_{1,k} \det {(B(1|k))}}
  \\
  = {} &
  s \sum_{k = 1}^{m}
  {(-1)^{1 + k} [A]_{1,k} \det {(A(1|k))}}
  + t \sum_{k = 1}^{m}
  {(-1)^{1 + k} [B]_{1,k} \det {(B(1|k))}}
  \\
  = {} & s \det {(A)} + t \det {(B)}.
\end{aligned}
\]
所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::
