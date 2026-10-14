---
title: 线性方程组与秩
notices:
  - name: 问题
    items:
      - 陈述 $\operatorname{rank}(A) = \operatorname{rank}(A^{\mathrm{T}})$ 的定理连续出现了两次，第一次没有证明。
---

本节，我们讨论线性方程组与阵的秩。

回想，线性方程组是形如 \(A X = B\) 的阵等式，
其中，\(A\)、\(B\) 是 \(m \times n\)、\(m \times 1\) 阵，
且 \(X\) 是未知的 \(n \times 1\) 阵。
若 \(n \times 1\) 阵 \(C\) 适合 \(A C = B\)，
则 \(C\) 是 \(A X = B\) 的一个解。

回想，在第 1 章，节 *27*，

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作一个 \(m \times (n+1)\) 阵 \(G\)，
其中，
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [A]_{i,j}, & j \leqslant n;  \\
    [B]_{i,1}, & j = n + 1.
  \end{cases}
\end{aligned}
\]
（通俗地，在 \(A\) 的最后一列的右边加入一列 \(B\)，
得到尺寸较大的阵 \(G\)。）
设
\(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。

(1) 若 \(G\) 也没有行列式非零的 \(r+1\) 级子阵，
    则 \(AX = B\) 有解。
    进一步地，若 \(r < n\)，
    则 \(AX = B\) 的解不唯一；
    若 \(r = n\)，
    则 \(AX = B\) 的解唯一。

(2) 若 \(G\) 有一个行列式非零的 \(r+1\) 级子阵，
    则 \(AX = B\) 无解。
:::

本节，我们推广此事，且定义与讨论阵的秩。

我们说，行列式是方阵的一个重要的属性。
不过，不是方阵的阵没有行列式，
故行列式不是不是方阵的阵的属性。
但是，秩是每个阵都有的一个重要的属性。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times t\) 阵。
作 \(m \times (n + t)\) 阵 \(G\)，其中，
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [A]_{i,j},   & j \leqslant n; \\
    [B]_{i,j-n}, & j > n.
  \end{cases}
\end{aligned}
\]
设
\(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。

(1) 设存在 \(n \times t\) 阵 \(C\)，使 \(A C = B\)。
    则 \(G\) 没有行列式非零的 \(r+1\) 级子阵。

(2) 反过来，设 \(G\) 没有行列式非零的 \(r+1\) 级子阵。
    则存在 \(n \times t\) 阵 \(C\)，使 \(A C = B\)。
    进一步地，若 \(r < n\)，则这样的 \(C\) 不唯一；
    若 \(r = n\)，则这样的 \(C\) 唯一。
:::

注意，若我们取 \(t = 1\)，则这就是上个定理。

::: proof
(1) 设 \(n \times t\) 阵 \(C\) 使 \(A C = B\)。

若 \(G\) 没有 \(r + 1\) 级子阵，
则 \(G\) 没有行列式非零的 \(r + 1\) 级子阵。

下设 \(G\) 有 \(r + 1\) 级子阵。
则 \(r + 1 \leqslant m\)，
且 \(r + 1 \leqslant n + t\)。

作 \(n \times (n + t)\) 阵 \(H\)，
其中，
\[
\begin{aligned}
  [H]_{i,j} =
  \begin{cases}
    [I_n]_{i,j}, & j \leqslant n; \\
    [C]_{i,j-n}, & j > n.
  \end{cases}
\end{aligned}
\]
则 \(AH\) 是 \(m \times (n + t)\) 阵。
当 \(j \leqslant n\) 时，
\[
\begin{aligned}
  [A H]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [H]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [I_n]_{\ell,j}}
  \\
  = {} &
  [A I_n]_{i,j}
  \\
  = {} &
  [A]_{i,j}
  \\
  = {} &
  [G]_{i,j};
\end{aligned}
\]
当 \(j > n\) 时，
\[
\begin{aligned}
  [A H]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [H]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [C]_{\ell,j-n}}
  \\
  = {} &
  [A C]_{i,j-n}
  \\
  = {} &
  [B]_{i,j-n}
  \\
  = {} &
  [G]_{i,j}.
\end{aligned}
\]
则 \(AH = G\)。

设 \(1 \leqslant i_1 < i_2 < \dots < i_{r+1} \leqslant m\)。
设 \(1 \leqslant j_1 < j_2 < \dots < j_{r+1} \leqslant n+t\)。
作 \(G\) 的一个 \(r + 1\) 级子阵
\[
\begin{aligned}
  G' = G\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{j_1,j_2,\dots,j_{r+1}}.
\end{aligned}
\]
我们证明，\(\det {(G')} = 0\)。

考虑
\[
\begin{aligned}
  A' = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{1,2,\dots,n},
  \quad
  H' = H\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{j_1,j_2,\dots,j_{r+1}}.
\end{aligned}
\]
则 \([A']_{u,v} = [A]_{i_u,v}\)，
且 \([H']_{u,v} = [H]_{u,j_v}\)。
则 \(A' H'\) 是 \(r + 1\) 级阵。
注意，\([G']_{u,v} = [G]_{i_u,j_v}\)。
注意，
\[
\begin{aligned}
  [A' H']_{u,v}
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A']_{u,\ell} [H']_{\ell,v}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i_u,\ell} [H]_{\ell,j_v}}
  \\
  = {} &
  [A H]_{i_u,j_v}
  \\
  = {} &
  [G]_{i_u,j_v}
  \\
  = {} &
  [G']_{u,v}.
\end{aligned}
\]
则 \(A' H' = G'\)。

设 \(A'\) 的列
\(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)。
设 \(H'\) 的列
\(1\)、\(2\)、\(\dots\)、\(r+1\)
分别是 \(h_1\)、\(h_2\)、\(\dots\)、\(h_{r+1}\)。
则
\[
\begin{aligned}
  G'
  = {} &
  A' H'
  \\
  = {} &
  [A' h_1, A' h_2, \dots, A' h_{r+1}]
  \\
  = {} &
  \left[
    \sum_{k_1 = 1}^{n} {[h_1]_{k_1,1} a_{k_1}},
    \sum_{k_2 = 1}^{n} {[h_2]_{k_2,1} a_{k_2}},
    \dots,
    \sum_{k_{r+1} = 1}^{n} {[h_{r+1}]_{k_{r+1},1} a_{k_{r+1}}}
  \right]
  \\
  = {} &
  \left[
    \sum_{k_1 = 1}^{n} {[H']_{k_1,1} a_{k_1}},
    \sum_{k_2 = 1}^{n} {[H']_{k_2,2} a_{k_2}},
    \dots,
    \sum_{k_{r+1} = 1}^{n} {[H']_{k_{r+1},r+1} a_{k_{r+1}}}
  \right].
\end{aligned}
\]
由行列式的多线性，
\[
\begin{aligned}
  &
  \det {(G')}
  \\
  = {} &
  \det {
    \left[
      \sum_{k_1 = 1}^{n} [H']_{k_1,1} a_{k_1},
      \sum_{k_2 = 1}^{n} [H']_{k_2,2} a_{k_2},
      \dots,
      \sum_{k_{r+1} = 1}^{n} [H']_{k_{r+1},r+1} a_{k_{r+1}}
    \right]
  }
  \\
  = {} &
  \sum_{k_1 = 1}^{n}
  [H']_{k_1,1}
  \det {
    \left[
      a_{k_1},
      \sum_{k_2 = 1}^{n} [H']_{k_2,2} a_{k_2},
      \dots,
      \sum_{k_{r+1} = 1}^{n} [H']_{k_{r+1},r+1} a_{k_{r+1}}
    \right]
  }
  \\
  = {} &
  \sum_{k_1 = 1}^{n}
  \sum_{k_2 = 1}^{n}
  [H']_{k_1,1}
  [H']_{k_2,2}
  \det {
    \left[
      a_{k_1},
      a_{k_2},
      \dots,
      \sum_{k_{r+1} = 1}^{n} [H']_{k_{r+1},r+1} a_{k_{r+1}}
    \right]
  }
  \\
  = {} &
  \dots
  \\
  = {} &
  \sum_{k_1 = 1}^{n}
  \sum_{k_2 = 1}^{n}
  \dots
  \sum_{k_{r+1} = 1}^{n}
  [H']_{k_1,1}
  [H']_{k_2,2}
  \dots
  [H']_{k_{r+1},r+1}
  \det {[a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]}
  \\
  = {} &
  \sum_{1 \leqslant k_1, k_2, \dots, k_{r+1} \leqslant n}
  [H']_{k_1,1}
  [H']_{k_2,2}
  \dots
  [H']_{k_{r+1},r+1}
  \det {[a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]}.
\end{aligned}
\]

若在 \(k_1\)、\(k_2\)、\(\dots\)、\(k_{r+1}\)，
有 \(2\) 个数相同，
则 \([a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]\)
有相同的 \(2\) 列。
由行列式的交错性，
\(\det {[a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]} = 0\)。

若 \(k_1\)、\(k_2\)、\(\dots\)、\(k_{r+1}\)
互不相同
（注意，此时，\(n \geqslant r+1\)），
我们适当地交换
\([a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]\)
的列的次序，
以变它为 \(A'\) 的一个 \(r+1\) 级子阵，
其当然是 \(A\) 的一个 \(r+1\) 级子阵。
由行列式的反称性，
\[
\begin{aligned}
  \det {[a_{k_1}, a_{k_2}, \dots, a_{k_{r+1}}]}
  = {} &
  {\pm
    \det {\left(
        A'\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,r+1}{k_1,k_2,\dots,k_{r+1}}
  \right)}}
  \\
  = {} &
  {\pm
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{k_1,k_2,\dots,k_{r+1}}
  \right)}}
  \\
  = {} &
  0.
\end{aligned}
\]
于是，\(\det {(G')}\) 是一些 \(0\) 的和。
则 \(\det {(G')} = 0\)。

(2) 设 \(G\) 没有行列式非零的 \(r + 1\) 级子阵。

设 \(B\) 的列
\(1\)、\(2\)、\(\dots\)、\(t\)
分别是 \(b_1\)、\(b_2\)、\(\dots\)、\(b_t\)。
作 \(t\) 个 \(m \times (n + 1)\) 阵 \(G_v\)
（\(v = 1\)、\(2\)、\(\dots\)、\(t\)）：
\[
\begin{aligned}
  [G_v]_{i,j} =
  \begin{cases}
    [A]_{i,j},               & j \leqslant n;  \\
    [b_v]_{i,1} = [B]_{i,v}, & j = n + 1.
  \end{cases}
\end{aligned}
\]
不难看出，\(G_v\) 是 \(G\) 的子阵，
故 \(G_v\) 也没有行列式非零的 \(r + 1\) 级子阵。
则由上个定理，存在 \(n \times 1\) 阵 \(c_v\)，
使 \(A c_v = b_v\)。

作 \(n \times t\) 阵
\(C = [c_1, c_2, \dots, c_t]\)。
则 \(A C\) 是 \(m \times t\) 阵，
且
\[
\begin{aligned}
  [A C]_{i,j}
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [C]_{\ell,j}}
  \\
  = {} &
  \sum_{1 \leqslant \ell \leqslant n}
  {[A]_{i,\ell} [c_j]_{\ell,1}}
  \\
  = {} &
  [A c_j]_{i,1}
  \\
  = {} &
  [b_j]_{i,1}
  \\
  = {} &
  [B]_{i,j}.
\end{aligned}
\]
则 \(A C = B\)。

注意，若 \(r < n\)，
则，由上个定理，
存在 \(n \times 1\) 阵 \(c'_1\)，
使 \(c'_1 \neq c_1\)，
且 \(A c'_1 = b_1\)。
再作 \(C' = [c'_1, c_2, \dots, c_t]\)。
则我们可类似地证明，\(A C' = B\)。
不过，\(C'\) 当然不等于 \(C\)，
因为 \(C'\) 与 \(C\) 的列 \(1\) 不相等。
于是，若 \(r < n\)，则适合 \(A C = B\)
的 \(C\) 不唯一。

最后，注意，若 \(r = n\)，
则 \(m \times n\) 阵 \(A\)
有行列式非零的 \(n\) 级子阵。
设 \(n \times t\) 阵 \(P\)、\(Q\) 适合，
\(A P = B\)，且 \(A Q = B\)。
则 \(A P = A Q\)。
由消去律，\(P = Q\)
（见“消去律”）。
于是，若 \(r = n\)，则适合 \(A C = B\)
的 \(C\) 唯一。
:::

由此可见，对一个阵，
“有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵”
的 \(r\) 或许是重要的属性。
我们定义

::: definition
设 \(A\) 是 \(m \times n\) 阵。
则存在唯一的非负整数 \(r\)，
使
（见第 1 章，节 *25*）：

(1) \(A\) 有一个行列式非零的 \(r\) 级子阵；

(2) \(A\) 没有行列式非零的 \(r+1\) 级子阵。

我们定义 \(A\) 的**秩**，
\(\operatorname{rank} {(A)}\)，
为 \(r\)。

注意，若 \(A = 0\)，则 \(r = 0\)
（因为我们约定，“\(0\) 级阵”的行列式为 \(1\)）。
:::

回想，若 \(A\) 是 \(m \times n\) 阵，
且 \(B\) 是 \(m \times t\) 阵，
则 \([A, B]\) 是 \(m \times (n + t)\) 阵 \(G\)，
其中，
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [A]_{i,j},   & j \leqslant n; \\
    [B]_{i,j-n}, & j > n.
  \end{cases}
\end{aligned}
\]
则我们可如此改写上个定理的 (1)：

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(C\) 是 \(n \times t\) 阵。
则
\[
\begin{aligned}
  \operatorname{rank} {([A, AC])}
  = \operatorname{rank} {(A)}.
\end{aligned}
\]
:::

::: proof
设 \(r = \operatorname{rank} {(A)}\)。
则 \(A\) 有行列式非零的 \(r\) 级子阵，
且 \(A\) 没有行列式非零的 \(r + 1\) 级子阵。
\(A\) 是 \([A, AC]\) 的子阵，
故 \([A, AC]\) 也有行列式非零的 \(r\) 级子阵。
由上个定理的 (1)，
\([A, AC]\) 没有行列式非零的 \(r + 1\) 级子阵。
则 \(\operatorname{rank} {([A, AC])} = r\)。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
则 \(\operatorname{rank} {(A)}
  = \operatorname{rank} {(A^{\mathrm{T}})}\)。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
则 \(\operatorname{rank} {(A)}
  = \operatorname{rank} {(A^{\mathrm{T}})}\)。
:::

::: proof
注意，\(A^{\mathrm{T}}\) 的子阵是 \(A\) 的某子阵的转置，
且 \((A^{\mathrm{T}})^{\mathrm{T}} = A\)
的子阵也是 \(A^{\mathrm{T}}\) 的某子阵的转置。
于是，若 \(A\) 有行列式非零的 \(r\) 级子阵，
则 \(A^{\mathrm{T}}\) 也有行列式非零的 \(r\) 级子阵，
且若 \(A\) 没有行列式非零的 \(r + 1\) 级子阵，
则 \(A^{\mathrm{T}}\) 也没有行列式非零的 \(r + 1\) 级子阵。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(C\) 是 \(n \times t\) 阵。
则
\[
\begin{aligned}
  \operatorname{rank} {(AC)}
  \leqslant \operatorname{rank} {(A)}.
\end{aligned}
\]
:::

::: proof [证 1]
设 \(r = \operatorname{rank} {(A)}\)。
记 \(B = A C\)。
我们证明，\(B\) 没有行列式非零的 \(r + 1\) 级子阵。
若 \(B\) 没有 \(r + 1\) 级子阵，
则 \(B\) 没有行列式非零的 \(r + 1\) 级子阵。
若 \(B\) 有 \(r + 1\) 级子阵，
我们任取一个 \(r + 1\) 级子阵
\[
\begin{aligned}
  B' =
  B\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{j_1,j_2,\dots,j_{r+1}},
\end{aligned}
\]
其中，\(1 \leqslant i_1 < i_2 < \dots < i_{r+1} \leqslant m\)，
且 \(1 \leqslant j_1 < j_2 < \dots < j_{r+1} \leqslant t\)，
并证明，\(\det {(B')} = 0\)。
就像前面的讨论那样，我们考虑
\[
\begin{aligned}
  A' = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_{r+1}}{1,2,\dots,n},
  \quad
  C' = C\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{j_1,j_2,\dots,j_{r+1}}.
\end{aligned}
\]
就像前面的讨论那样，我们可验证，
\(A' C' = B'\)。
于是，就像前面的讨论那样，我们可证明，
\(\det {(B')} = 0\)。
请允许我留它们为您的习题。
:::

::: proof [证 2]
注意，\(AC\) 是 \([A, AC]\) 的子阵，
故 \(\operatorname{rank} {(AC)}
  \leqslant \operatorname{rank} {([A, AC])}\)。
则由前面的讨论，
\[
\operatorname{rank} {(AC)}
\leqslant \operatorname{rank} {([A, AC])}
= \operatorname{rank} {(A)}.
\]
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(C\) 是 \(n \times t\) 阵。
则
\[
\begin{aligned}
  \operatorname{rank} {(AC)}
  & \leqslant \operatorname{rank} {(A)}, \\
  \operatorname{rank} {(AC)}
  & \leqslant \operatorname{rank} {(C)}.
\end{aligned}
\]
:::

::: proof
不等式 1 已被证明。
我们现在证明不等式 2。
注意，
\[
\begin{aligned}
  \operatorname{rank} {(AC)}
  = {} &
  \operatorname{rank} {((AC)^{\mathrm{T}})}
  \\
  = {} &
  \operatorname{rank} {(C^{\mathrm{T}} A^{\mathrm{T}})}
  \\
  \leqslant {} &
  \operatorname{rank} {(C^{\mathrm{T}})}
  \\
  = {} &
  \operatorname{rank} {(C)}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(P\) 是 \(n\) 级阵，且 \(\det {(P)} \neq 0\)。
设 \(Q\) 是 \(m\) 级阵，且 \(\det {(Q)} \neq 0\)。
则
\[
\begin{aligned}
  \operatorname{rank} {(QAP)}
  = \operatorname{rank} {(A)}.
\end{aligned}
\]
:::

::: proof
设 \(P_1 = (\det {(P)})^{-1}
  \operatorname{adj} {(P)}\)，
且 \(Q_1 = (\det {(Q)})^{-1}
  \operatorname{adj} {(Q)}\)。
则 \(P P_1 = I_n\)，
且 \(Q_1 Q = I_m\)。
则
\[
\begin{aligned}
  \operatorname{rank} {(A)}
  \geqslant {} &
  \operatorname{rank} {(AP)}
  \\
  \geqslant {} &
  \operatorname{rank} {(QAP)}
  \\
  \geqslant {} &
  \operatorname{rank} {(QAP P_1)}
  \\
  \geqslant {} &
  \operatorname{rank} {(Q_1 QAP P_1)}
  \\
  = {} &
  \operatorname{rank} {((Q_1 Q) A (P P_1))}
  \\
  = {} &
  \operatorname{rank} {(I_m A I_n)}
  \\
  = {} &
  \operatorname{rank} {(A)}.
\end{aligned}
\]
则
\(\operatorname{rank} {(A)}
    \geqslant \operatorname{rank} {(Q A P)}
  \geqslant \operatorname{rank} {(A)}\)。
:::

由此可见，倍加不改变秩：
对 \(m \times n\) 阵 \(A\)，
\[
\begin{aligned}
  \operatorname{rank} {(A E(n; p, q; s))}
  & = \operatorname{rank} {(A)}, \\
  \operatorname{rank} {(E(m; p', q'; s') A)}
  & = \operatorname{rank} {(A)}.
\end{aligned}
\]
（回想，\(E(n; p, q; s) E(n; p, q; -s) = I_n\)，
且 \(E(m; p', q'; -s') E(m; p', q'; s') = I_m\)，
若 \(p \neq q\)，且 \(p' \neq q'\)。）

::: example
设 \(m \times n\) 阵 \(D\) 适合，
若 \(i \neq j\)，则 \([D]_{i,j} = 0\)。
设存在 \(r\) 个正整数
\(i_1\)、\(i_2\)、\(\dots\)、\(i_r\)
（\(1 \leqslant i_1 < i_2 < \dots < i_r\)，
且 \(i_r \leqslant m\)，且 \(i_r \leqslant n\)），
使 \([D]_{i_k,i_k} \neq 0\)
（\(k = 1\)、\(\dots\)、\(r\)），
且 \(u\) 不等于 \(i_1\)、\(\dots\)、\(i_r\)
的任何一个时，\([D]_{u,u} = 0\)。
则 \(\operatorname{rank} {(D)} = r\)。

首先，\(D\) 有一个行列式非零的 \(r\) 级子阵，
因为
\[
\begin{aligned}
  \det {\left(
      D\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_r}{i_1,i_2,\dots,i_r}
  \right)}
  = {} &
  \det {
    \begin{bmatrix}
      [D]_{i_1,i_1} & 0             & \cdots & 0             \\
      0             & [D]_{i_2,i_2} & \cdots & 0             \\
      \vdots        & \vdots        & \ddots & \vdots        \\
      0             & 0             & \cdots & [D]_{i_r,i_r} \\
    \end{bmatrix}
  }
  \\
  = {} &
  [D]_{i_1,i_1} \dots [D]_{i_r,i_r}
  \\
  \neq {} &
  0.
\end{aligned}
\]
然后，\(D\) 没有行列式非零的 \(r + 1\) 级子阵。
若 \(D\) 没有 \(r + 1\) 级子阵，
则 \(D\) 当然没有行列式非零的 \(r + 1\) 级子阵。
设 \(D\) 有 \(r + 1\) 级子阵。
那么，在 \(D\) 的任何（不同的）\(r + 1\) 列，
存在一列，其是零。
（因为当 \(v\) 不等于 \(i_1\)、\(\dots\)、\(i_r\)
的任何一个时，
\([D]_{v,v} = 0\)，
且若 \(u \neq v\)，
则 \([D]_{u,v} = 0\)。
则当 \(v\) 不等于 \(i_1\)、\(\dots\)、\(i_r\)
的任何一个时，
\(D\) 的列 \(v\) 的元全为 \(0\)。）
则 \(D\) 的任何 \(r + 1\) 级子阵
有一列，其是零。
则它的行列式为 \(0\)。
则 \(\operatorname{rank} {(D)} = r\)。
:::

最后，我们讨论 \(n\) 级阵（\(n \geqslant 2\)）\(A\)
的古伴 \(\operatorname{adj} {(A)}\) 的秩。

若 \(\operatorname{rank} {(A)} = n\)，
则 \(\det {(A)} \neq 0\)。
则 \(\det {(\operatorname{adj} {(A)})}
= (\det {(A)})^{n-1} \neq 0\)。
则 \(\operatorname{rank} {(\operatorname{adj} {(A)})} = n\)。

若 \(\operatorname{rank} {(A)} < n - 1\)，
则 \(A\) 的 \(n-1\) 级子阵 \(A(j|i)\) 的行列式为 \(0\)。
则 \(\operatorname{adj} {(A)} = 0\)。
则 \(\operatorname{rank} {(\operatorname{adj} {(A)})} = 0\)。

有挑战的情形或许是当 \(\operatorname{rank} {(A)} = n - 1\) 时。
我们证明，
\(\operatorname{rank} {(\operatorname{adj} {(A)})} = 1\)。

::: proof [证 1]
我们说，若 \(\det {(A)} = 0\)，
则 \(\operatorname{adj} {(A)}\)
没有行列式非零的 \(2\) 级子阵
（见“古伴的性质 (2)”）。
另一方面，既然 \(\operatorname{rank} {(A)} = n - 1\)，
则 \(A\) 的某 \(n-1\) 级子阵的行列式
\(\det {(A(v|u))} \neq 0\)。
则 \([\operatorname{adj} {(A)}]_{u,v}
  = (-1)^{v+u} \det {(A(v|u))} \neq 0\)。
则 \(\operatorname{adj} {(A)}\)
有行列式非零的 \(1\) 级子阵。
则 \(\operatorname{rank} {(\operatorname{adj} {(A)})} = 1\)。
:::

注意，倍加不改变秩。
于是，我们也可考虑用倍加。

::: proof [证 2]
我们知道，存在若干个形如
\(E(n; p, q; s)\)
的阵
\(E_1\)、\(F_1\)、\(E_2\)、\(F_2\)、
\(\dots\)、\(E_u\)、\(F_u\)，
与若干个形如 \(M(n; q'; s')\) 的阵
\(M_1\)、\(M_2\)、\(\dots\)、\(M_n\)，
使
\[
\begin{aligned}
  A
  = {} &
  F_1 F_2 \dots F_u
  M_1 M_2 \dots M_n
  E_u \dots E_2 E_1
  \\
  = {} &
  F_1 F_2 \dots F_u
  (M_1 M_2 \dots M_n)
  E_u \dots E_2 E_1.
\end{aligned}
\]
则
\[
\begin{aligned}
  \operatorname{adj} {(A)}
  = {} &
  \operatorname{adj} {(E_1)}
  \dots
  \operatorname{adj} {(E_u)}
  \operatorname{adj} {(M_n)}
  \dots
  \operatorname{adj} {(M_1)}
  \operatorname{adj} {(F_u)}
  \dots
  \operatorname{adj} {(F_1)}
  \\
  = {} &
  \operatorname{adj} {(E_1)}
  \dots
  \operatorname{adj} {(E_u)}
  (\operatorname{adj} {(M_n)}
    \dots
  \operatorname{adj} {(M_1)})
  \operatorname{adj} {(F_u)}
  \dots
  \operatorname{adj} {(F_1)}
  \\
  = {} &
  \operatorname{adj} {(E_1)}
  \dots
  \operatorname{adj} {(E_u)}
  \operatorname{adj} {(M_1 \dots M_n)}
  \operatorname{adj} {(F_u)}
  \dots
  \operatorname{adj} {(F_1)}.
\end{aligned}
\]
记 \(D = M_1 M_2 \dots M_n\)。
则当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
则当 \(i \neq j\) 时，
\([\operatorname{adj} {(D)}]_{i,j} = 0\)。
注意，\(\operatorname{rank} {(A)}
  = \operatorname{rank} {(D)}\)。
注意，\(\operatorname{adj} {(E(n; p, q; s))}
  = E(n; p, q; -s)\)，
故 \(\operatorname{rank} {(\operatorname{adj} {(A)})}
  = \operatorname{rank} {(\operatorname{adj} {(D)})}\)。

设 \(\operatorname{rank} {(A)} = n - 1\)。
则 \(\operatorname{rank} {(D)} = n - 1\)。
设在
\([D]_{1,1}\)、\([D]_{2,2}\)、\(\dots\)、\([D]_{n,n}\)，
恰有 \(r\) 个数不是 \(0\)。
则 \(\operatorname{rank} {(D)} = r\)。
则在
\([D]_{1,1}\)、\([D]_{2,2}\)、\(\dots\)、\([D]_{n,n}\)，
恰有 \(n-1\) 个数不是 \(0\)。
设 \([D]_{k,k} = 0\)。
则当 \(i \neq k\) 时，\([D]_{i,i} \neq 0\)。
则在
\([\operatorname{adj} {(D)}]_{1,1}\)、
\([\operatorname{adj} {(D)}]_{2,2}\)、
\(\dots\)、
\([\operatorname{adj} {(D)}]_{n,n}\)，
有一个数不是 \(0\)，因为
\[
\begin{aligned}
  [\operatorname{adj} {(D)}]_{k,k}
  = (-1)^{k+k} \det {(D(k|k))}
  = \prod_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq k}}
  {[D]_{\ell,\ell}}
  \neq 0.
\end{aligned}
\]
并且，当 \(i \neq k\) 时，
\[
\begin{aligned}
  [\operatorname{adj} {(D)}]_{i,i}
  = (-1)^{i+i} \det {(D(i|i))}
  = \prod_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i}}
  {[D]_{\ell,\ell}}
  = [D]_{k,k}
  \prod_{\substack{1 \leqslant \ell \leqslant n \\ \ell \neq i, k}}
  {[D]_{\ell,\ell}}
  = 0.
\end{aligned}
\]
则 \(\operatorname{rank} {(\operatorname{adj} {(D)})} = 1\)。
则 \(\operatorname{rank} {(\operatorname{adj} {(A)})} = 1\)。
:::
