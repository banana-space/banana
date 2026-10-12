---
title: 阵的积
---

前面，我们学习了阵的运算，如阵的加、减、数乘。
本节，我们学习阵的一个新运算，阵的乘法。
对若干个阵作乘法的结果就是这些阵的积。

::: definition
设 \(A\) 是 \(m \times s\) 阵，
且 \(B\) 是 \(s \times n\) 阵
（也就是，\(A\) 有多少列，\(B\) 就有多少行）。
我们定义 \(A\) 与 \(B\) 的**积**
（注意 \(A\)、\(B\) 的次序）为
一个 \(m \times n\) 阵 \(AB\)，
其中，对任何不超过 \(m\) 的正整数 \(i\)
与任何不超过 \(n\) 的正整数 \(j\)，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  [A]_{i,1} [B]_{1,j}
  + [A]_{i,2} [B]_{2,j}
  + \dots
  + [A]_{i,s} [B]_{s,j}
  \\
  = {} &
  \sum_{k = 1}^{s} {[A]_{i,k} [B]_{k,j}}.
\end{aligned}
\]
（通俗地，\(AB\) 是 \(m \times n\) 阵，
其的 \((i, j)\)-元是
\(A\) 的行 \(i\) 跟 \(B\) 的列 \(j\) 的
相应位置的元的积的和。）
:::

可以看到，阵的乘法跟阵的加法比，有大的区别。
首先，加法要求 \(2\) 个阵的尺寸相同，而乘法要求
第 1 个阵的列数等于第 2 个阵的行数。
其次，阵的加法的定义用到的只不过是数的加法，
而阵的乘法的定义要同时用到数的加法与乘法。

阵的乘法，不像数的乘法，有可能是不可换的。
具体地，
设 \(A\)、\(B\) 分别是 \(m \times s\) 与 \(s \times n\) 阵。
根据定义，\(AB\) 是有意义的。
不过，\(BA\) 无意义，除非 \(n = m\)。
这还只是一方面。
另一方面，就算 \(n = m\)，
\(AB\) 跟 \(BA\) 的尺寸也不一样，
除非 \(m = s = n\)。
最后，就算 \(m = s = n\)，
\(AB\) 也可以不等于 \(BA\)。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    3  & 2 \\
    10 & 7 \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    5  & 4 \\
    11 & 9 \\
  \end{bmatrix}.
\end{aligned}
\]
根据定义，
\[
\begin{aligned}
  &
  AB =
  \begin{bmatrix}
    3 \cdot 5 + 2 \cdot 11  & 3 \cdot 4 + 2 \cdot 9  \\
    10 \cdot 5 + 7 \cdot 11 & 10 \cdot 4 + 7 \cdot 9 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    37  & 30  \\
    127 & 103 \\
  \end{bmatrix},
  \\
  &
  BA =
  \begin{bmatrix}
    5 \cdot 3 + 4 \cdot 10  & 5 \cdot 2 + 4 \cdot 7  \\
    11 \cdot 3 + 9 \cdot 10 & 11 \cdot 2 + 9 \cdot 7 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    55  & 38 \\
    123 & 85 \\
  \end{bmatrix}.
\end{aligned}
\]
所以，即使 \(AB\)、\(BA\) 都是 \(2\) 级阵，
它们也不相等。
:::

我们知道，若 \(a\)、\(b\) 是 \(2\) 个非零的数，
那么 \(ab \neq 0\)。
不过，对 \(2\) 个阵 \(A\)、\(B\)，
即使 \(A \neq 0\)，且 \(B \neq 0\)，
仍有可能 \(AB = 0\)
（其中，\(0\) 是零阵，
即元全为 \(0\) 的阵）。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    0 & 0 \\
    1 & 0 \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    0 & 0 \\
    0 & 1 \\
  \end{bmatrix}.
\end{aligned}
\]
根据定义，
\[
AB =
\begin{bmatrix}
  0 \cdot 0 + 0 \cdot 0 & 0 \cdot 0 + 0 \cdot 1 \\
  1 \cdot 0 + 0 \cdot 0 & 1 \cdot 0 + 0 \cdot 1 \\
\end{bmatrix}
=
\begin{bmatrix}
  0 & 0 \\
  0 & 0 \\
\end{bmatrix}.
\]
:::

阵的乘法跟数的乘法虽有不同的地方，
但更重要地，有相同的（或类似的）地方。

::: theorem
设 \(A\)、\(B\)、\(C\) 分别是
\(m \times s\)、\(s \times n\)、\(n \times p\) 阵。
设 \(D\) 是 \(m \times s\) 阵。
设 \(G\) 是 \(s \times n\) 阵。
设 \(x\) 是数。
则：

(1)
（结合律）
\((AB)C = A(BC)\)；

(2)
（分配律 1）
\((A + D) B = AB + DB\)；

(3)
（分配律 2）
\(A (B + G) = AB + AG\)；

(4)
（单位阵的作用）
\(I_m A = A = A I_s\)，
其中，\(I_m\)、\(I_s\) 分别是 \(m\)、\(s\) 级单位阵；

(5)
（阵的数乘与乘法）
\((xA)B = x(AB) = A(xB)\)。
:::

::: proof
(1)
注意，\(AB\) 是 \(m \times n\) 阵，
故 \((AB)C\) 是 \(m \times p\) 阵；
注意，\(BC\) 是 \(s \times p\) 阵，
故 \(A(BC)\) 也是 \(m \times p\) 阵。
根据阵的积的定义，
\[
\begin{aligned}
  [(AB)C]_{i,j}
  = {} &
  \sum_{\ell = 1}^{n} {[AB]_{i,\ell} [C]_{\ell,j}}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \left(\sum_{k = 1}^{s} {[A]_{i,k} [B]_{k,\ell}} \right)
  [C]_{\ell,j} }
  \\
  = {} &
  \sum_{\ell = 1}^{n} {
    \sum_{k = 1}^{s} {
  [A]_{i,k} [B]_{k,\ell} [C]_{\ell,j} }}
  \\
  = {} &
  \sum_{k = 1}^{s} {
    \sum_{\ell = 1}^{n} {
  [A]_{i,k} [B]_{k,\ell} [C]_{\ell,j}}}
  \\
  = {} &
  \sum_{k = 1}^{s} {
    [A]_{i,k}
    \left(
      \sum_{\ell = 1}^{n} {[B]_{k,\ell} [C]_{\ell,j}}
  \right) }
  \\
  = {} &
  \sum_{k = 1}^{s} {[A]_{i,k} [BC]_{k,j}}
  \\
  = {} &
  [A(BC)]_{i,j}.
\end{aligned}
\]

(2)
您还是要先说明，等式的 \(2\) 边的阵的尺寸都是 \(m \times n\)
（我留它为您的习题）。
根据阵的和与积的定义，
\[
\begin{aligned}
  [(A + D)B]_{i,j}
  = {} &
  \sum_{k = 1}^{s} {[A + D]_{i,k} [B]_{k,j}}
  \\
  = {} &
  \sum_{k = 1}^{s} {([A]_{i,k} + [D]_{i,k})\, [B]_{k,j}}
  \\
  = {} &
  \sum_{k = 1}^{s} {([A]_{i,k} [B]_{k,j}
  + [D]_{i,k} [B]_{k,j})}
  \\
  = {} &
  \sum_{k = 1}^{s} {[A]_{i,k} [B]_{k,j}}
  +
  \sum_{k = 1}^{s} {[D]_{i,k} [B]_{k,j}}
  \\
  = {} &
  [AB]_{i,j} + [DB]_{i,j}
  \\
  = {} &
  [AB + DB]_{i,j}.
\end{aligned}
\]

(3)
这跟分配律 1 的论证完全类似；
我留它为您的习题。

(4)
先证 \(I_m A = A\)。
您还是要先说明，等式的 \(2\) 边的阵的尺寸都是 \(m \times s\)
（我留它为您的习题）。
回想，单位阵 \(I\) 的 \((i, j)\)-元是
\(\delta(i, j)\)；
具体地，\(i = j\) 时，它是 \(1\)，
而 \(i \neq j\) 时，它是 \(0\)。
根据阵的积的定义，
\[
\begin{aligned}
  [I_m A]_{i,j}
  = {} &
  \sum_{u = 1}^{m} {[I_m]_{i,u} [A]_{u,j}}
  \\
  = {} &
  \sum_{u = 1}^{m} {\delta(i, u)\, [A]_{u,j}}
  \\
  = {} &
  \delta(i, i)\, [A]_{i,j}
  + \sum_{\substack{1 \leqslant u \leqslant m \\ u \neq i}}
  {\delta(i, u)\, [A]_{u,j}}
  \\
  = {} &
  1\,[A]_{i,j}
  + \sum_{\substack{1 \leqslant u \leqslant m \\ u \neq i}}
  {0\,[A]_{u,j}}
  \\
  = {} & [A]_{i,j}.
\end{aligned}
\]
请允许我留另一部分为您的习题。

(5)
先证 \((xA)B = x(AB)\)。
您还是要先说明，等式的 \(2\) 边的阵的尺寸都是 \(m \times n\)
（我留它为您的习题）。
根据阵的数乘与阵的积的定义，
\[
\begin{aligned}
  [(xA)B]_{i,j}
  = {} &
  \sum_{k = 1}^{s} {[xA]_{i,k} [B]_{k,j}}
  \\
  = {} &
  \sum_{k = 1}^{s} {x[A]_{i,k} [B]_{k,j}}
  \\
  = {} &
  x \sum_{k = 1}^{s} {[A]_{i,k} [B]_{k,j}}
  \\
  = {} &
  x [AB]_{i,j}
  \\
  = {} &
  [x(AB)]_{i,j}.
\end{aligned}
\]
请允许我留另一部分为您的习题。
:::

由此，我们可简单地写 \((AB)C\) 或 \(A(BC)\) 为 \(ABC\)，
且可简单地写 \(x(AB)\)、\((xA)B\)、\(A(xB)\)
为 \(xAB\)
（当然，\(x\) 是一个数）。

::: theorem
设 \(B\) 是 \(s \times m\) 阵。
设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
（于是，我们可写 \(A = [a_1, a_2, \dots, a_n]\)）。
则
\[
\begin{aligned}
  BA = [Ba_1, Ba_2, \dots, Ba_n].
\end{aligned}
\]
:::

::: proof
每个 \(Ba_j\) 都是 \(s \times 1\) 阵，
故 \([Ba_1, Ba_2, \dots, Ba_n]\) 是 \(s \times n\) 阵。
当然，\(BA\) 也是 \(s \times n\) 阵。
根据阵的积的定义，
\[
\begin{aligned}
  [BA]_{i,j}
  = {} & \sum_{k = 1}^{m} {[B]_{i,k} [A]_{k,j}}
  \\
  = {} & \sum_{k = 1}^{m} {[B]_{i,k} [a_j]_{k,1}}
  \\
  = {} & [Ba_j]_{i,1}
  \\
  = {} & [\, [Ba_1, Ba_2, \dots, Ba_n] \,]_{i,j}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 的列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
（于是，我们可写 \(A = [a_1, a_2, \dots, a_n]\)）。
设 \(X\) 是一个 \(n \times 1\) 阵。
则
\[
\begin{aligned}
  AX = [X]_{1,1} a_1 + [X]_{2,1} a_2 + \dots
  + [X]_{n,1} a_n.
\end{aligned}
\]
:::

::: proof
\(AX\) 自然是一个 \(m \times 1\) 阵。
不难看出，待证的等式的右边也是 \(m \times 1\) 阵。
根据阵的积、和、数乘的定义，
\[
\begin{aligned}
  [AX]_{i,1}
  = {} & \sum_{k = 1}^{n} {[A]_{i,k} [X]_{k,1}}
  \\
  = {} & \sum_{k = 1}^{n} {[a_k]_{i,1} [X]_{k,1}}
  \\
  = {} & \sum_{k = 1}^{n} {[[X]_{k,1} a_k]_{i,1}}
  \\
  = {} & \left[ \sum_{k = 1}^{n} {[X]_{k,1}
  a_k } \right]_{i,1}.
\end{aligned}
\]
:::
