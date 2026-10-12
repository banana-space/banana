---
title: 古伴的性质 (2)
---

本节，我们讨论古伴的子阵的行列式。

::: theorem
设 \(A\) 是 \(n\) 级阵。
设 \(k\) 是不超过 \(n\) 的正整数。
设正整数 \(i_1\)、\(i_2\)、\(\dots\)、\(i_k\)
不超过 \(n\)，且是从小到大的。
设正整数 \(j_1\)、\(j_2\)、\(\dots\)、\(j_k\)
不超过 \(n\)，且是从小到大的。
则

```math {@eq:C2401}
\begin{aligned}
    & \det {\left(
            (\operatorname{adj} {(A)})
            \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
    \right)}
    \\
    = {} &
    (\det {(A)})^{k-1}\,
    (-1)^{j_1 + \dots + j_k + i_1 + \dots + i_k}
    \det {(A({j_1,\dots,j_k}|{i_1,\dots,i_k}))}.
\end{aligned}
```

:::

此事对 \(k = 1\) 是对的。
此时，等式的左边即为 \(\operatorname{adj} {(A)}\)
的 \((i_1, j_1)\)-元，
而等式的右边是
\(1 \, (-1)^{j_1 + i_1} \det {(A(j_1|i_1))}\)。
这正是古伴的定义。

以下设 \(k > 1\)。

从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(i_1\)、\(\dots\)、\(i_k\) 后，
还剩 \(n - k\) 个数。
我们从小到大地叫这 \(n - k\) 个数为
\(i_{k+1}\)、\(\dots\)、\(i_n\)。
类似地，从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(\dots\)、\(j_k\) 后，
还剩 \(n - k\) 个数。
我们从小到大地叫这 \(n - k\) 个数为
\(j_{k+1}\)、\(\dots\)、\(j_n\)。
作 \(n\) 级阵 \(B\) 如下：
\[
\begin{aligned}
  [B]_{i,j_q} =
  \begin{cases}
    [\operatorname{adj} {(A)}]_{i,j_q},
    & q \leqslant k; \\
    [I_n]_{i,i_q},
    & q > k.
  \end{cases}
\end{aligned}
\]
通俗地，\(B\) 的列 \(j_1\)、\(\dots\)、\(j_k\)
分别与\(\operatorname{adj} {(A)}\)
的列 \(j_1\)、\(\dots\)、\(j_k\)
相等，
但 \(B\) 的列 \(j_{k+1}\)、\(\dots\)、\(j_n\)
分别是 \(n\) 级单位阵 \(I_n\)
的列 \(i_{k+1}\)、\(\dots\)、\(i_n\)。
由此可见，
\[
\begin{aligned}
  B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  = B({i_{k+1},\dots,i_n}|{j_{k+1},\dots,j_n})
  = (\operatorname{adj} {(A)})
  \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k},
\end{aligned}
\]
且
\[
\begin{aligned}
  B({i_1,\dots,i_k}|{j_1,\dots,j_k})
  = B\genfrac{\{}{\}}{0pt}{0}{i_{k+1},\dots,i_n}{j_{k+1},\dots,j_n}
  = I_{n-k}.
\end{aligned}
\]

按列 \(j_{k+1}\) 展开 \(\det {(B)}\)，得
\[
\begin{aligned}
  \det {(B)} = (-1)^{i_{k+1}+j_{k+1}} \, 1
  \det {(B(i_{k+1}|j_{k+1}))}.
\end{aligned}
\]
注意，\(B\) 的列 \(j_{k+2}\) 即为
\(B(i_{k+1}|j_{k+1})\) 的列 \(j_{k+2}-1\)。
按列 \(j_{k+2}-1\) 展开 \(\det {(B(i_{k+1}|j_{k+1}))}\)，
得
\[
\begin{aligned}
  \det {(B(i_{k+1}|j_{k+1}))} = (-1)^{i_{k+2}-1+j_{k+2}-1} \, 1
  \det {(B({i_{k+1},i_{k+2}}|{j_{k+1},j_{k+2}}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(B)} = (-1)^{i_{k+1}+i_{k+2}+j_{k+1}+j_{k+2}}
  \det {(B({i_{k+1},i_{k+2}}|{j_{k+1},j_{k+2}}))}.
\end{aligned}
\]
……
最后，我们得
\[
\begin{aligned}
  \det {(B)}
  = (-1)^{i_{k+1}+\dots+i_n+j_{k+1}+\dots+j_n}
  \det {(B({i_{k+1},\dots,i_n}|{j_{k+1},\dots,j_n}))}.
\end{aligned}
\]

我们考虑 \(AB\) 的行列式。
一方面，
\[
\begin{aligned}
  \det {(AB)}
  = {} & \det {(A)} \det {(B)}
  \\
  = {} & (-1)^{i_{k+1}+\dots+i_n+j_{k+1}+\dots+j_n}
  \det {(A)}
  \det {\left(
      (\operatorname{adj} {(A)})
      \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}.
\end{aligned}
\]
另一方面，当 \(q \leqslant k\) 时，
\[
\begin{aligned}
  [AB]_{i,j_q}
  = {} &
  \sum_{u=1}^{n} {[A]_{i,u} [B]_{u,j_q}}
  \\
  = {} &
  \sum_{u=1}^{n} {[A]_{i,u} [\operatorname{adj} {(A)}]_{u,j_q}}
  \\
  = {} &
  [A \operatorname{adj} {(A)}]_{i,j_q}
  \\
  = {} &
  [\det {(A)}\,I_n]_{i,j_q};
\end{aligned}
\]
当 \(q > k\) 时，
\[
\begin{aligned}
  [AB]_{i,j_q}
  = {} &
  \sum_{u=1}^{n} {[A]_{i,u} [B]_{u,j_q}}
  \\
  = {} &
  \sum_{u=1}^{n} {[A]_{i,u} [I_n]_{u,i_q}}
  \\
  = {} &
  [A I_n]_{i,i_q}
  \\
  = {} &
  [A]_{i,i_q}.
\end{aligned}
\]
通俗地，\(AB\) 的列 \(j_1\)、\(\dots\)、\(j_k\)
分别与 \(\det {(A)}\,I_n\) 的列 \(j_1\)、\(\dots\)、\(j_k\)
相等，
但 \(AB\) 的列 \(j_{k+1}\)、\(\dots\)、\(j_n\)
分别是 \(A\) 的列 \(i_{k+1}\)、\(\dots\)、\(i_n\)。
由此可见，
\[
\begin{aligned}
  (AB)\genfrac{\{}{\}}{0pt}{0}{j_1,\dots,j_k}{j_1,\dots,j_k}
  = (AB)({j_{k+1},\dots,j_n}|{j_{k+1},\dots,j_n})
  = \det {(A)}\, I_k,
\end{aligned}
\]
且
\[
\begin{aligned}
  (AB)({j_1,\dots,j_k}|{j_1,\dots,j_k})
  = (AB)\genfrac{\{}{\}}{0pt}{0}{j_{k+1},\dots,j_n}{j_{k+1},\dots,j_n}
  = A({j_1,\dots,j_k}|{i_1,\dots,i_k}).
\end{aligned}
\]

按列 \(j_1\) 展开 \(\det {(AB)}\)，得
\[
\begin{aligned}
  \det {(AB)} = (-1)^{j_1+j_1} \det {(A)}
  \det {((AB)(j_1|j_1))}.
\end{aligned}
\]
注意，\(AB\) 的列 \(j_2\) 即为
\((AB)(j_1|j_1)\) 的列 \(j_2-1\)。
按列 \(j_2-1\) 展开 \(\det {((AB)(j_1|j_1))}\)，
得
\[
\begin{aligned}
  \det {((AB)(j_1|j_1))}
  = (-1)^{j_2-1+j_2-1} \det {(A)}
  \det {((AB)({j_1,j_2}|{j_1,j_2}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(AB)} = (\det {(A)})^2
  \det {((AB)({j_1,j_2}|{j_1,j_2}))}.
\end{aligned}
\]
……
最后，我们得
\[
\begin{aligned}
  \det {(AB)}
  = (\det {(A)})^k
  \det {((AB)({j_1,\dots,j_k}|{j_1,\dots,j_k}))}.
\end{aligned}
\]

比较 \(2\) 次计算的结果，我们得
\[
\begin{aligned}
  &
  (-1)^{i_{k+1}+\dots+i_n+j_{k+1}+\dots+j_n}
  \det {(A)}
  \det {\left(
      (\operatorname{adj} {(A)})
      \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  (\det {(A)})^k
  \det {(A({j_1,\dots,j_k}|{i_1,\dots,i_k}))}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  i_{k+1} + \dots + i_n + j_{k+1} + \dots + j_n
  \\
  = {} &
  ((1 + 2 + \dots + n) - (i_1 + \dots + i_k))
  + ((1 + 2 + \dots + n) - (j_1 + \dots + j_k))
  \\
  = {} &
  2(1 + 2 + \dots + n) - (j_1 + \dots + j_k + i_1 + \dots + i_k),
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(A)}\,
  \det {\left(
      (\operatorname{adj} {(A)})
      \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)}
  \\
  = {} &
  \det {(A)}\, (\det {(A)})^{k-1}\,
  (-1)^{j_1+\dots+j_k+i_1+\dots+i_k}
  \det {(A({j_1,\dots,j_k}|{i_1,\dots,i_k}))}.
\end{aligned}
\]

若 \(\det {(A)} \neq 0\)，
我们可在等式的 \(2\) 边消去它，得式 @eq:C2401。
不过，若 \(\det {(A)} = 0\)，
我们应如何作？

::: theorem
设 \(A\) 是一个 \(n\) 级阵。
设 \(\det {(A)} = 0\)。
则存在不超过 \(n\) 的正整数 \(s\)，
使对任何不超过 \(n\) 的正整数 \(j\)，
存在数 \(m_j\)，
使对任何不超过 \(n\) 的正整数 \(i\)，
\([\operatorname{adj} {(A)}]_{i,j}
  = m_j [\operatorname{adj} {(A)}]_{i,s}\)；
通俗地，
存在不超过 \(n\) 的正整数 \(s\)，
使 \(\operatorname{adj} {(A)}\) 的任何一列
都是 \(\operatorname{adj} {(A)}\) 的列 \(s\) 的数乘。
:::

由此，不难看出，若 \(\det {(A)} = 0\)，
且 \(k > 1\)，则
\[
\begin{aligned}
  \det {\left(
      (\operatorname{adj} {(A)})
      \genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{j_1,\dots,j_k}
  \right)} = 0,
\end{aligned}
\]
故式 @eq:C2401 仍是对的。

那么，若我们证明了此事，则我们也就证明了式 @eq:C2401。

::: proof
若 \(\operatorname{adj} {(A)} = 0\)，
则 \(\operatorname{adj} {(A)}\) 的每列都是 \(0\)。
从而 \(\operatorname{adj} {(A)}\)
的每列都是
\(\operatorname{adj} {(A)}\) 的列 \(1\) 的数乘。

下设 \(\operatorname{adj} {(A)} \neq 0\)。
则有不超过 \(n\) 的正整数 \(s\)、\(t\)，
使 \([\operatorname{adj} {(A)}]_{t,s} \neq 0\)。
则 \((-1)^{s+t} \det {(A(s|t))} \neq 0\)。
作 \(n-1\) 级阵 \(C = A(s|t)\)。
则 \(\det {(C)} \neq 0\)。

从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(t\) 后，还剩 \(n - 1\) 个数。
我们从小到大地叫这 \(n - 1\) 个数为
\(i_1\)、\(\dots\)、\(i_{n-1}\)。
类似地，从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(s\) 后，还剩 \(n - 1\) 个数。
我们从小到大地叫这 \(n - 1\) 个数为
\(\ell_1\)、\(\dots\)、\(\ell_{n-1}\)。
则 \([C]_{p,q} = [A]_{\ell_p,i_q}\)。
再记 \(i_n = t\)，且 \(\ell_n = s\)。

设 \(j\) 是不超过 \(n\) 的正整数。
作 \((n-1) \times 1\) 阵 \(y_j\) 如下：
\[
\begin{aligned}
  [y_j]_{u,1} = [\operatorname{adj} {(A)}]_{i_u,j};
\end{aligned}
\]
通俗地，若 \(D_j\) 是
\(\operatorname{adj} {(A)}\) 的列 \(j\)，
则 \(y_j\) 是去除 \(D_j\) 的行 \(t\) 后的那个
\((n-1) \times 1\) 阵。
则对 \(p < n\)，
\[
\begin{aligned}
  [C y_j]_{p,1}
  = {} &
  \sum_{u=1}^{n-1} {[C]_{p,u} [y_j]_{u,1}}
  \\
  = {} &
  \sum_{u=1}^{n-1}
  {[A]_{\ell_p,i_u} [\operatorname{adj} {(A)}]_{i_u,j}}
  \\
  = {} &
  \sum_{u=1}^{n}
  {[A]_{\ell_p,i_u} [\operatorname{adj} {(A)}]_{i_u,j}}
  - [A]_{\ell_p,i_n} [\operatorname{adj} {(A)}]_{i_n,j}
  \\
  = {} &
  \sum_{u=1}^{n}
  {[A]_{\ell_p,u} [\operatorname{adj} {(A)}]_{u,j}}
  - [A]_{\ell_p,t} [\operatorname{adj} {(A)}]_{t,j}
  \\
  = {} &
  [A \operatorname{adj} {(A)}]_{\ell_p,j}
  - [A]_{\ell_p,t} [\operatorname{adj} {(A)}]_{t,j}
  \\
  = {} &
  [\det {(A)}\, I_n]_{\ell_p,j}
  - [A]_{\ell_p,t} [\operatorname{adj} {(A)}]_{t,j}
  \\
  = {} &
  {-} [\operatorname{adj} {(A)}]_{t,j} [A]_{\ell_p,t}.
\end{aligned}
\]

作 \((n-1) \times 1\) 阵 \(z\) 如下：
\[
\begin{aligned}
  [z]_{u,1} = [A]_{\ell_u,t};
\end{aligned}
\]
通俗地，若 \(w\) 是 \(A\) 的列 \(t\)，
则 \(z\) 是去除 \(w\) 的行 \(s\) 后的那个
\((n-1) \times 1\) 阵。

由前面的计算，
\(C y_j = -[\operatorname{adj} {(A)}]_{t,j} z\)，
且
\(C y_s = -[\operatorname{adj} {(A)}]_{t,s} z\)。
记
\[
\begin{aligned}
  m_j =
  (-[\operatorname{adj} {(A)}]_{t,j})\,
  (-[\operatorname{adj} {(A)}]_{t,s})^{-1}.
\end{aligned}
\]
则
\[
\begin{aligned}
  C (m_j y_s)
  = {} & m_j (C y_s)
  = m_j (-[\operatorname{adj} {(A)}]_{t,s} z)
  = (m_j (-[\operatorname{adj} {(A)}]_{t,s})) z
  \\
  = {} &
  {-} [\operatorname{adj} {(A)}]_{t,j} z
  \\
  = {} &
  C y_j.
\end{aligned}
\]
因为 \(\det {(C)} \neq 0\)，
故 \(m_j y_s = y_j\)。
故 \(m_j [\operatorname{adj} {(A)}]_{i_u,s}
  = [\operatorname{adj} {(A)}]_{i_u,j}\)，
对 \(u < n\)。
则 \(m_j [\operatorname{adj} {(A)}]_{i,s}
  = [\operatorname{adj} {(A)}]_{i,j}\)，
对 \(i \leqslant n\)。
:::
