---
title: 反称阵
---

从本节开始，我们讨论反称阵与它的性质。

::: definition
设 \(A\) 是一个 \(n\) 级阵。
若 \([A]_{i,i} = 0\)，
且
\([A]_{i,j} + [A]_{j,i} = 0\)，
则 \(A\) 是一个**反称阵**。
:::

::: example
不难看出，
\(1\) 级反称阵即为 \([0]\)；
\(2\) 级反称阵形如
\[
\begin{aligned}
  \begin{bmatrix}
    0  & a \\
    -a & 0 \\
  \end{bmatrix};
\end{aligned}
\]
\(3\) 级反称阵形如
\[
\begin{aligned}
  \begin{bmatrix}
    0  & a  & b \\
    -a & 0  & c \\
    -b & -c & 0 \\
  \end{bmatrix};
\end{aligned}
\]
\(4\) 级反称阵形如
\[
\begin{bmatrix}
  0  & a  & b  & c \\
  -a & 0  & d  & e \\
  -b & -d & 0  & f \\
  -c & -e & -f & 0 \\
\end{bmatrix}.
\]
:::

::: example
不难验证，\(2m\) 级阵
\(
    K_m =
    \begin{bmatrix}
      0    & I_m \\
      -I_m & 0   \\
    \end{bmatrix}
  \)
是反称阵。
:::

不难看出，
\([A]_{i,j} + [A]_{j,i} = 0\)
相当于 \(A^{\mathrm{T}} = -A\)：
注意，\([A^{\mathrm{T}}]_{i,j} = [A]_{j,i}\)，
且 \([-A]_{i,j} = -[A]_{i,j}\)。
有时，这更方便应用。

::: theorem
设 \(A\)、\(B\) 是 \(n\) 级反称阵。
设 \(k\) 是数。
设 \(X\) 是 \(n \times m\) 阵。

(1)
\(n\) 级阵 \(0\) 是反称阵。

(2)
\(A + B\) 是反称阵。

(3)
\(kA\) 是反称阵；
特别地，\((-1)A = -A = A^{\mathrm{T}}\) 也是反称阵。

(4)
\(X^{\mathrm{T}} A X\) 是反称阵。
:::

::: proof
(1)
\(0^{\mathrm{T}} = 0 = -0\)，
且 \([0]_{i,i} = 0\)。

(2)
由转置的性质，
\((A + B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}
  = (-A) + (-B) = -(A + B)\)。
再注意，
\[
\begin{aligned}
  [A + B]_{i,i} = [A]_{i,i} + [B]_{i,i} = 0 + 0 = 0.
\end{aligned}
\]

(3)
由转置的性质，
\((kA)^{\mathrm{T}} = kA^{\mathrm{T}} = k(-A) = -(kA)\)。
再注意，
\[
\begin{aligned}
  [kA]_{i,i} = k [A]_{i,i} = k 0 = 0.
\end{aligned}
\]

(4)
\(X\) 是 \(n \times m\) 的，则 \(AX\) 是 \(n \times m\) 的；
\(X^{\mathrm{T}}\) 是 \(m \times n\) 的，
则 \(X^{\mathrm{T}} A X\) 是 \(m \times m\) 的。
由转置的性质，
\[
\begin{aligned}
  (X^{\mathrm{T}} A X)^{\mathrm{T}}
  = X^{\mathrm{T}} A^{\mathrm{T}} (X^{\mathrm{T}})^{\mathrm{T}}
  = X^{\mathrm{T}} (-A) X
  = -(X^{\mathrm{T}} A X).
\end{aligned}
\]
由阵的积的定义，
\[
\begin{aligned}
  &
  [X^{\mathrm{T}} A X]_{i,i}
  \\
  = {} &
  [X^{\mathrm{T}} (A X)]_{i,i}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[X^{\mathrm{T}}]_{i,\ell} [A X]_{\ell,i}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[X]_{\ell,i} [A X]_{\ell,i}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {
    [X]_{\ell,i}
    \left(\sum_{k = 1}^{n} [A]_{\ell,k} [X]_{k,i}\right)
  }
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  \sum_{k = 1}^{n}
  {[X]_{\ell,i} [A]_{\ell,k} [X]_{k,i}}
  \\
  = {} &
  \sum_{\ell, k = 1}^{n}
  {[X]_{\ell,i} [X]_{k,i} [A]_{\ell,k}}
  \\
  = {} & \hphantom{{} + {}}
  \sum_{1 \leqslant \ell = k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i} [A]_{\ell,k}}
  +
  \sum_{1 \leqslant \ell < k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i} [A]_{\ell,k}}
  \\
  & +
  \sum_{1 \leqslant k < \ell \leqslant n}
  {[X]_{\ell,i} [X]_{k,i} [A]_{\ell,k}}
  \\
  = {} & \hphantom{{} + {}}
  \sum_{1 \leqslant \ell = k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i}\, 0}
  +
  \sum_{1 \leqslant \ell < k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i} [A]_{\ell,k}}
  \\
  & +
  \sum_{1 \leqslant \ell < k \leqslant n}
  {[X]_{k,i} [X]_{\ell,i} [A]_{k,\ell}}
  \\
  = {} &
  0 +
  \sum_{1 \leqslant \ell < k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i} ([A]_{\ell,k} + [A]_{k,\ell})}
  \\
  = {} &
  \sum_{1 \leqslant \ell < k \leqslant n}
  {[X]_{\ell,i} [X]_{k,i}\, 0}
  \\
  = {} &
  0.
\end{aligned}
\]
于是，\(X^{\mathrm{T}} A X\) 是一个 \(m\) 级反称阵。
:::
