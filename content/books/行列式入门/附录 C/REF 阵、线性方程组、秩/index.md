---
title: REF 阵、线性方程组、秩
notices:
  - name: 问题
    items:
      - '关于方程数等于未知数数的线性方程组的定理（含 Cramer 公式）的证明第 (2) 部分中，$b''_{r,n+1}$ 似乎应为 $b''_{r+1}$（$b''_i$ 只有一个下标）。'
---

本节，我们讨论 REF 阵，
并用它研究线性方程组与秩。

我们知道，最大的整数不存在：
对任何整数 \(x\)，
我们能作大于 \(x\) 的整数，
如 \(x + 1\)。
但我们可作“Tiānyī 记号”，
且考虑它与数的关系：

::: definition
我们定义 **Tiānyī 记号**为 \(\infty\)。
Tiānyī 记号 \(\infty\) 可被叫作 **tianyi**。

我们规定，对任何整数 \(x\)，
tianyi“不等于”\(x\)，
且 \(x\)“不等于”tianyi：
\[
\begin{aligned}
  \infty \neq x
  \quad \text{且} \quad
  x \neq \infty.
\end{aligned}
\]

我们规定，对任何整数 \(x\)，
tianyi“大于”\(x\)，
且 \(x\)“小于”tianyi：
\[
\begin{aligned}
  \infty > x
  \quad \text{且} \quad
  x < \infty.
\end{aligned}
\]

我们规定，tianyi“等于”tianyi：
\[
\begin{aligned}
  \infty = \infty.
\end{aligned}
\]
:::

Tiānyī 记号来自中国 Vocaloid
[Luò Tiānyī](https://zh.moegirl.org.cn/洛天依)。

注意，\(\geqslant\)、\(\leqslant\) 分别是
“大于或等于”、“小于或等于”。
于是，对任何整数 \(x\)，
\(\infty \geqslant x\)，
且 \(x \leqslant \infty\)。

现在，我们可方便地定义 REF 阵。

::: definition
设 \(A\) 是 \(m \times n\) 阵。

设 \(i\) 是不超过 \(m\) 的正整数。
若 \(A\) 的行 \(i\) 的元全为 \(0\)，
我们说，\(A\) 的行 \(i\) 的 **pivot** 是 tianyi：
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} = \infty.
\end{aligned}
\]
若 \(A\) 的行 \(i\) 有不为 \(0\) 的元，
则一定存在不超过 \(n\) 的正整数 \(k_i\)，
使 \([A]_{i,k_i} \neq 0\)，
且当 \(j < k_i\) 时，\([A]_{i,j} = 0\)。
我们说，\(A\) 的行 \(i\) 的 **pivot** 是 \(k_i\)：
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} = k_i.
\end{aligned}
\]

注意，\(m \times n\) 阵 \(A\) 有 \(m\) pivots。

设存在不高于 \(m\) 的非负整数 \(r\)，使：

(1)
对任何不高于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} < \infty;
\end{aligned}
\]

(2)
对任何低于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)}
  < \operatorname{pivot} {(A; i + 1)};
\end{aligned}
\]

(3)
对任何高于 \(r\) 且不高于 \(m\) 的整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} = \infty.
\end{aligned}
\]

我们说，\(A\) 是 **REF**
（<lang en>row-echelon form</lang>）**阵**。
:::

注意，当 \(r = 0\) 时，
不存在不高于 \(r\) 的正整数
（且不存在低于 \(r\) 的正整数），
故条件 (1) 与 (2) 成立。
则 \(A\) 的所有的 pivots 是 tianyi，
故 \(A = 0\)。

注意，当 \(r = 1\) 时，
不存在低于 \(r\) 的正整数，
故条件 (2) 成立。

注意，\(1 \times n\) 阵是 REF 阵。

注意，当 \(r = m\) 时，
不存在整数，其高于 \(r\) 且不高于 \(m\)，
故条件 (3) 成立。

::: example
零阵是 REF 阵（\(r = 0\)）。
\(1 \times n\) 阵也是 REF 阵。

下面的阵是 REF 阵，其中，
我们标记了对应非 tianyi 的 pivots 的元：
\[
\begin{aligned}
  \begin{bmatrix}
    \boxed{6} & 8         & 15         \\
    0         & \boxed{4} & 15         \\
    0         & 0         & \boxed{15} \\
  \end{bmatrix},
  \quad
  \begin{bmatrix}
    \boxed{37} & 0          & 73 & 0          & 1  \\
    0          & \boxed{39} & 54 & 93         & 0  \\
    0          & 0          & 0  & \boxed{86} & 20 \\
    0          & 0          & 0  & 0          & 0  \\
  \end{bmatrix},
  \quad
  \begin{bmatrix}
    0 & \boxed{6} & 2 & 8         \\
    0 & 0         & 0 & \boxed{3} \\
    0 & 0         & 0 & 0         \\
    0 & 0         & 0 & 0         \\
    0 & 0         & 0 & 0         \\
    0 & 0         & 0 & 0         \\
  \end{bmatrix}.
\end{aligned}
\]

下面的阵不是 REF 阵，其中，
我们标记了对应非 tianyi 的 pivots 的元：
\[
\begin{bmatrix}
  \boxed{1} \\
  0         \\
  \boxed{1} \\
\end{bmatrix},
\quad
\begin{bmatrix}
  \boxed{37} & 73         & 0  & 0  \\
  0          & \boxed{39} & 0  & 93 \\
  0          & \boxed{86} & 20 & 0  \\
  0          & 0          & 0  & 0  \\
\end{bmatrix},
\quad
\begin{bmatrix}
  0 & 0         & 0         & \boxed{6} \\
  0 & 0         & \boxed{2} & 0         \\
  0 & \boxed{8} & 0         & 0         \\
\end{bmatrix}.
\]
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
则我们可用行的倍加，
变 \(A\) 为某 \(m \times n\) REF 阵 \(B\)。
:::

::: proof
我们用数学归纳法证明此事。
具体地，设 \(P(m)\) 为命题

> 对任何正整数 \(m\)，
> 对任何 \(m \times n\) 阵 \(A\)，
> 用若干次行的倍加，
> 我们可变 \(A\) 为 \(m \times n\) 阵 \(B\)，
> 使 \(B\) 是 REF 阵。

则，我们的目标是，
对任何正整数 \(m\)，\(P(m)\) 是对的。

\(P(1)\) 是对的。

假定 \(P(m-1)\) 是对的。
我们由此证 \(P(m)\) 也是对的。

若 \(A = 0\)，则 \(A\) 已是 REF 阵。

设 \(A \neq 0\)。
则 \(A\) 有最小的 pivot，
且它小于 tianyi；
具体地，存在不超过 \(m\) 的正整数 \(\ell\)，
使对任何不超过 \(m\) 的正整数 \(i\)，
\(\operatorname{pivot} {(A; \ell)}
  \leqslant \operatorname{pivot} {(A; i)}\)，
且
\(\operatorname{pivot} {(A; \ell)} < \infty\)。

若 \(\ell \neq 1\)，
我们可用 \(3\) 次行的倍加，
以“几乎”交换行 \(1\) 与行 \(\ell\)，
得 \(m \times n\) 阵 \(A_1\)：
\[
\begin{aligned}
  (x, y)
  \to {} & (x + 1y, y) = (x + y, y)                \\
  \to {} & (x + y, y + (-1) (x + y)) = (x + y, -x) \\
  \to {} & (x + y + 1(-x), -x) = (y, -x).
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [A_1]_{i,j} =
  \begin{cases}
    [A]_{\ell,j}, & i = 1;       \\
    -[A]_{1,j},   & i = \ell;    \\
    [A]_{i,j},    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
则
\(\operatorname{pivot} {(A_1; 1)}
  = \operatorname{pivot} {(A; \ell)}\)，
\(\operatorname{pivot} {(A_1; \ell)}
  = \operatorname{pivot} {(A; 1)}\)
（以非零的数乘一行不改变它的 pivot），
且
\(\operatorname{pivot} {(A_1; i)}
  = \operatorname{pivot} {(A; i)}\)
（若 \(i \neq \ell\) 或 \(1\)）。

若 \(\ell = 1\)，则我们不变，取 \(A_1\) 为 \(A\)。

综上，我们可用行的倍加，
变 \(A\) 为 \(A_1\)，
使 \(A_1\) 的行 \(1\) 有最小的 pivot，
且它小于 tianyi。

记 \(k_1 = \operatorname{pivot} {(A_1; 1)}\)。
注意，既然 \(A_1\) 的行 \(1\) 有最小的 pivot，
且它小于 tianyi，
那么，对 \(j < k_1\)，
\([A_1]_{i,j} = 0\)。
注意，\([A_1]_{1,k_1} \neq 0\)。
那么，对 \(A_1\)，
我们
加行 \(1\) 的 \(-[A_1]_{2,k_1}/[A_1]_{1,k_1}\) 倍于行 \(2\)，
加行 \(1\) 的 \(-[A_1]_{3,k_1}/[A_1]_{1,k_1}\) 倍于行 \(3\)，
……
加行 \(1\) 的 \(-[A_1]_{m,k_1}/[A_1]_{1,k_1}\) 倍于行 \(m\)，
得阵 \(C\)。
则对 \(j < k_1\)，\([C]_{i,j} = 0\)，
且 \([C]_{1,k_1} \neq 0\)，
且 \([C]_{i,k_1} = 0\)，若 \(i > 1\)。
则 \(C\) 的行 \(1\) 有最小的 pivot \(k_1\)，
且它小于 tianyi。

若 \(k_1 = n\)，则 \(C\) 已是 REF 阵。

设 \(k_1 < n\)。
考虑 \((m - 1) \times (n - k_1)\) 阵
\(C(1|{1,2,\dots,k_1})\)。
由假定，用若干次行的倍加，
我们可变 \(C(1|{1,2,\dots,k_1})\) 为
\((m - 1) \times (n - k_1)\) 阵 \(T\)，
使 \(T\) 是 REF 阵。

注意，既然当 \(1 < i\)，且 \(j \leqslant k_1\) 时，
\([C]_{i,j} = 0\)，
那么，无论如何对 \(C\) 的不是行 \(1\) 的行作倍加，
得到的阵的 \((i, j)\)-元是 \(0\)
（\(1 < i\)，且 \(j \leqslant k_1\)）。
那么，作若干次行的倍加后，
我们可变 \(C\) 为 \(m \times n\) 阵 \(B\)，使
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [T]_{i-1,j-k_1},
    & \text{\(i > 1\), 且 \(j > k_1\)}; \\
    [C]_{i,j},
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，对 \(i > 1\)，
\[
\begin{aligned}
  \operatorname{pivot} {(B; i)} =
  \begin{cases}
    \operatorname{pivot} {(T; i-1)} + k_1,
    & \operatorname{pivot} {(T; i-1)} < \infty;
    \\
    \infty,
    & \operatorname{pivot} {(T; i-1)} = \infty.
  \end{cases}
\end{aligned}
\]
由此可见，\(B\) 是 REF 阵。

所以，\(P(m)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: example
记
\[
\begin{aligned}
  A_1 =
  \begin{bmatrix}
    1 \\
    0 \\
    1 \\
  \end{bmatrix},
  \quad
  A_2 =
  \begin{bmatrix}
    37 & 73 & 0  & 0  \\
    0  & 39 & 0  & 93 \\
    0  & 86 & 20 & 0  \\
    0  & 0  & 0  & 0  \\
  \end{bmatrix},
  \quad
  A_3 =
  \begin{bmatrix}
    0 & 0 & 0 & 6 \\
    0 & 0 & 2 & 0 \\
    0 & 8 & 0 & 0 \\
  \end{bmatrix}.
\end{aligned}
\]

对 \(A_1\)，
我们加行 \(1\) 的 \(-1\) 倍于行 \(3\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    1 \\
    0 \\
    0 \\
  \end{bmatrix}.
\end{aligned}
\]
这是 REF 阵。

对 \(A_2\)，
我们加行 \(2\) 的 \(-86/39\) 倍于行 \(3\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    37 & 73 & 0  & 0          \\
    0  & 39 & 0  & 93         \\
    0  & 0  & 20 & -2\,666/13 \\
    0  & 0  & 0  & 0          \\
  \end{bmatrix}.
\end{aligned}
\]
这是 REF 阵。

对 \(A_3\)，
我们用 \(3\) 次行的倍加，
“交换”行 \(1\) 与行 \(3\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    0 & 8 & 0 & 0  \\
    0 & 0 & 2 & 0  \\
    0 & 0 & 0 & -6 \\
  \end{bmatrix}.
\end{aligned}
\]
这是 REF 阵。
:::

::: example
设
\[
\begin{aligned}
  G =
  \begin{bmatrix}
    0 & 1 & 1 & 1 & 1 & 17 \\
    1 & 0 & 1 & 1 & 1 & 15 \\
    1 & 1 & 0 & 1 & 1 & 14 \\
    1 & 1 & 1 & 0 & 1 & 12 \\
    1 & 1 & 1 & 1 & 0 & 10 \\
  \end{bmatrix}.
\end{aligned}
\]
我们用行的倍加变它为 REF 阵。

注意，当 \(j \leqslant 5\) 时，
\(G\) 的列 \(j\) 的 \(5\) 个元的和为 \(4\)。
于是，我们考虑分别地加行
\(2\)、\(3\)、\(4\)、\(5\)
于行 \(1\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    4 & 4 & 4 & 4 & 4 & 68 \\
    1 & 0 & 1 & 1 & 1 & 15 \\
    1 & 1 & 0 & 1 & 1 & 14 \\
    1 & 1 & 1 & 0 & 1 & 12 \\
    1 & 1 & 1 & 1 & 0 & 10 \\
  \end{bmatrix}.
\end{aligned}
\]
然后，我们分别地加行 \(1\) 的 \(-1/4\) 倍于行
\(2\)、\(3\)、\(4\)、\(5\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    4 & 4  & 4  & 4  & 4  & 68 \\
    0 & -1 & 0  & 0  & 0  & -2 \\
    0 & 0  & -1 & 0  & 0  & -3 \\
    0 & 0  & 0  & -1 & 0  & -5 \\
    0 & 0  & 0  & 0  & -1 & -7 \\
  \end{bmatrix}.
\end{aligned}
\]
这是 REF 阵。
当然，若我们分别地加行
\(2\)、\(3\)、\(4\)、\(5\)
的 \(4\) 倍于行 \(1\)，则我们得
\[
\begin{aligned}
  \begin{bmatrix}
    4 & 0  & 0  & 0  & 0  & 0  \\
    0 & -1 & 0  & 0  & 0  & -2 \\
    0 & 0  & -1 & 0  & 0  & -3 \\
    0 & 0  & 0  & -1 & 0  & -5 \\
    0 & 0  & 0  & 0  & -1 & -7 \\
  \end{bmatrix}.
\end{aligned}
\]
这仍是 REF 阵。
:::

现在，我们讨论线性方程组。

回想，
线性方程组是形如
\[
\left\{
\begin{aligned}
  a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
  a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
  & \dots, \\
  a_{m,1} x_1 + a_{m,2} x_2 + \dots + a_{m,n} x_n & = b_m
\end{aligned}
\right.
\]
的方程组，
其中，
\(a_{1,1}\)、\(a_{1,2}\)、\(\dots\)、\(a_{1,n}\)、
\(a_{2,1}\)、\(a_{2,2}\)、\(\dots\)、\(a_{2,n}\)、
\(\dots\)、
\(a_{m,1}\)、\(a_{m,2}\)、\(\dots\)、\(a_{m,n}\)、
\(b_1\)、\(b_2\)、\(\dots\)、\(b_m\)
是事先指定的 \(mn + m\) 个数，
且 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\)
是未知数。
若数 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 适合，
\[
\begin{aligned}
  a_{1,1} c_1 + a_{1,2} c_2 + \dots + a_{1,n} c_n & = b_1, \\
  a_{2,1} c_1 + a_{2,2} c_2 + \dots + a_{2,n} c_n & = b_2, \\
  & \dots, \\
  a_{m,1} c_1 + a_{m,2} c_2 + \dots + a_{m,n} c_n & = b_m,
\end{aligned}
\]
我们说，
\(x_1 = c_1\)、
\(x_2 = c_2\)、
\(\dots\)、
\(x_n = c_n\)
是此方程组的一个解。

我们可用若干次“加一个方程的倍于另一个方程”的行为，
变一个线性方程组为简单的线性方程组，
且它们有相同的解。

::: theorem
考虑线性方程组

```math {@eq:sole-1}
\left\{
\begin{aligned}
    a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
    a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
    & \dots, \\
    a_{m,1} x_1 + a_{m,2} x_2 + \dots + a_{m,n} x_n & = b_m.
\end{aligned}
\right.
```

设 \(p\)、\(q\) 是不超过 \(m\) 的正整数，
且互不相同。
设 \(s\) 是数。
加方程 \(p\) 的 \(s\) 倍于方程 \(q\)，
且不改变别的方程，
得线性方程组

```math {@eq:sole-2}
\left\{
\begin{aligned}
    a'_{1,1} x_1 + a'_{1,2} x_2 + \dots + a'_{1,n} x_n & = b'_1, \\
    a'_{2,1} x_1 + a'_{2,2} x_2 + \dots + a'_{2,n} x_n & = b'_2, \\
    & \dots, \\
    a'_{m,1} x_1 + a'_{m,2} x_2 + \dots + a'_{m,n} x_n & = b'_m,
\end{aligned}
\right.
```

其中，
\[
\begin{aligned}
  a'_{i,j} =
  \begin{cases}
    a_{i,j},             & i \neq q; \\
    a_{q,j} + s a_{p,j}, & i = q,
  \end{cases}
\end{aligned}
\]
且
\[
\begin{aligned}
  b'_i =
  \begin{cases}
    b_i,         & i \neq q; \\
    b_q + s b_p, & i = q.
  \end{cases}
\end{aligned}
\]
则方程组 @eq:sole-1 的解
都是方程组 @eq:sole-2 的解，
且方程组 @eq:sole-2 的解
都是方程组 @eq:sole-1 的解。
:::

::: proof
设数 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 适合
\[
\begin{aligned}
  a_{1,1} c_1 + a_{1,2} c_2 + \dots + a_{1,n} c_n & = b_1, \\
  a_{2,1} c_1 + a_{2,2} c_2 + \dots + a_{2,n} c_n & = b_2, \\
  & \dots, \\
  a_{m,1} c_1 + a_{m,2} c_2 + \dots + a_{m,n} c_n & = b_m.
\end{aligned}
\]
那么，若 \(i \neq q\)，则
\[
\begin{aligned}
  &
  a'_{i,1} c_1 + a'_{i,2} c_2 + \dots + a'_{i,n} c_n
  \\
  = {} &
  a_{i,1} c_1 + a_{i,2} c_2 + \dots + a_{i,n} c_n
  \\
  = {} &
  b_i
  \\
  = {} &
  b'_i;
\end{aligned}
\]
若 \(i = q\)，则
\[
\begin{aligned}
  &
  a'_{i,1} c_1 + a'_{i,2} c_2 + \dots + a'_{i,n} c_n
  \\
  = {} &
  (a_{q,1} + s a_{p,1}) c_1
  + (a_{q,2} + s a_{p,2}) c_2
  + \dots
  + (a_{q,n} + s a_{p,n}) c_n
  \\
  = {} &
  (a_{q,1} c_1 + a_{q,2} c_2 + \dots + a_{q,n} c_n)
  + s (a_{p,1} c_1 + a_{p,2} c_2 + \dots + a_{p,n} c_n)
  \\
  = {} &
  b_q + s b_p
  \\
  = {} &
  b'_i.
\end{aligned}
\]
则方程组 @eq:sole-1 的解
都是方程组 @eq:sole-2 的解。

对方程组 @eq:sole-2，
我们加方程 \(p\) 的 \(-s\) 倍于方程 \(q\)，
且不改变别的方程，
得方程组

```math {@eq:sole-3}
\left\{
\begin{aligned}
    a''_{1,1} x_1 + a''_{1,2} x_2 + \dots + a''_{1,n} x_n & = b''_1, \\
    a''_{2,1} x_1 + a''_{2,2} x_2 + \dots + a''_{2,n} x_n & = b''_2, \\
    & \dots, \\
    a''_{m,1} x_1 + a''_{m,2} x_2 + \dots + a''_{m,n} x_n & = b''_m,
\end{aligned}
\right.
```

其中，
\[
\begin{aligned}
  a''_{i,j} =
  \begin{cases}
    a'_{i,j},                 & i \neq q; \\
    a'_{q,j} + (-s) a'_{p,j}, & i = q,
  \end{cases}
\end{aligned}
\]
且
\[
\begin{aligned}
  b''_i =
  \begin{cases}
    b'_i,             & i \neq q; \\
    b'_q + (-s) b'_p, & i = q.
  \end{cases}
\end{aligned}
\]
则当 \(i \neq q\) 时，
\[
\begin{aligned}
  a''_{i,j} & = a'_{i,j} = a_{i,j}, \\
  b''_i     & = b'_i = b_i,
\end{aligned}
\]
且当 \(i = q\) 时，
\[
\begin{aligned}
  a''_{i,j}
  & = a'_{q,j} - s a'_{p,j}
  = a_{q,j} + s a_{p,j} - s a_{p,j}
  = a_{i,j},                 \\
  b''_i
  & = b'_q - s b'_p
  = b_q + s b_p - s b_p
  = b_i.
\end{aligned}
\]
故方程组 @eq:sole-3 就是方程组 @eq:sole-1。
那么，由前面的讨论，
方程组 @eq:sole-2 的解
都是方程组 @eq:sole-3 的解，
即方程组 @eq:sole-1 的解。
:::

考虑线性方程组

```math {@eq:sole-4}
\left\{
\begin{aligned}
    a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
    a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
    & \dots, \\
    a_{m,1} x_1 + a_{m,2} x_2 + \dots + a_{m,n} x_n & = b_m.
\end{aligned}
\right.
```

我们说，它跟 \(m \times (n + 1)\) 阵

```math {@eq:sole-4-mat}
G =
\begin{bmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} & b_1    \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} & b_2    \\
    \vdots  & \vdots  & {}     & \vdots  & \vdots \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n} & b_m    \\
\end{bmatrix}
```

对应：
给定线性方程组 @eq:sole-4，
我们能以 \(m \times (n + 1)\) 阵表示它，
且反过来，给定 \(m \times (n + 1)\) 阵 @eq:sole-4-mat，
我们能还原它为线性方程组 @eq:sole-4。
并且，对线性方程组 @eq:sole-4，
加方程 \(p\) 的 \(s\) 倍于方程 \(q\)（\(q \neq p\)），
且不改变别的方程，
相当于对阵 @eq:sole-4-mat，
加行 \(p\) 的 \(s\) 倍于行 \(q\)（\(q \neq p\)），
且不改变别的行。

我们知道，我们可用若干次行的倍加，
变 \(G\) 为 REF 阵 \(G'\)。
则存在非负整数 \(u\)，使
\[
\begin{aligned}
  \operatorname{pivot} {(G'; 1)}
  < \operatorname{pivot} {(G'; 2)}
  < \dots
  < \operatorname{pivot} {(G'; u-1)}
  < \operatorname{pivot} {(G'; u)}
  < \infty,
\end{aligned}
\]
且对 \(i > u\)，
\(G'\) 的行 \(i\) 是 \(0\)。
记 \(\operatorname{pivot} {(G'; i)} = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u\)）。

若 \(p_u = n + 1\)，
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,p_1} & \cdots & [G']_{1,p_2} & \cdots     & [G']_{1,p_{u-1}}   & \cdots & [G']_{1,n+1}   \\
    {}         & 0            & \cdots & [G']_{2,p_2} & \cdots     & [G']_{2,p_{u-1}}   & \cdots & [G']_{2,n+1}   \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots             & \cdots & \vdots         \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{u-1,p_{u-1}} & \cdots & [G']_{u-1,n+1} \\
    {}         & 0            & \cdots & 0            & \cdots     & 0                  & \cdots & [G']_{u,n+1}   \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}                 & {}     & {}             \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(\mathsf{O}\) 表示可能出现的 \(0\)，下同。
记 \(r = u - 1\)，
且 \(k_i = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u - 1\)）。

若 \(p_u \leqslant n\)，
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,p_1} & \cdots & [G']_{1,p_2} & \cdots     & [G']_{1,p_u} & \cdots & [G']_{1,n+1} \\
    {}         & 0            & \cdots & [G']_{2,p_2} & \cdots     & [G']_{2,p_u} & \cdots & [G']_{2,n+1} \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots       \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{u,p_u} & \cdots & [G']_{u,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}           \\
  \end{bmatrix}.
\end{aligned}
\]
记 \(r = u\)，
且 \(k_i = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u\)）。

于是，统一地，\(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,k_1} & \cdots & [G']_{1,k_2} & \cdots     & [G']_{1,k_r} & \cdots & [G']_{1,n+1}   \\
    {}         & 0            & \cdots & [G']_{2,k_2} & \cdots     & [G']_{2,k_r} & \cdots & [G']_{2,n+1}   \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots         \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{r,k_r} & \cdots & [G']_{r,n+1}   \\
    {}         & 0            & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{r+1,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}             \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \([G']_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且当 \(i > r + 1\) 时，\([G']_{i,n+1} = 0\)，
且当 \(i > r\)，且 \(j \leqslant n\) 时，
\([G']_{i,j} = 0\)。
（注意，若 \(r = m\)，则 \([G']_{r+1,n+1}\) 不出现。）

为方便，记 \([G']_{i,n+1} = b'_i\)。
则当 \(i > r + 1\) 时，\(b'_i = 0\)。
记 \([G']_{i,j} = a'_{i,j}\)
（若 \(j \leqslant n\)）。
则当 \(i > r\)，且 \(j \leqslant n\) 时，
\(a'_{i,j} = 0\)。
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & a'_{1,k_1} & \cdots & a'_{1,k_2} & \cdots     & a'_{1,k_r} & \cdots & b'_1     \\
    {}         & 0          & \cdots & a'_{2,k_2} & \cdots     & a'_{2,k_r} & \cdots & b'_2     \\
    \mathsf{O} & \vdots     & {}     & \vdots     & {}         & \vdots     & \cdots & \vdots   \\
    {}         & 0          & \cdots & 0          & \cdots     & a'_{r,k_r} & \cdots & b'_r     \\
    {}         & 0          & \cdots & 0          & \cdots     & 0          & \cdots & b'_{r+1} \\
    {}         & {}         & {}     & {}         & \mathsf{O} & {}         & {}     & {}       \\
  \end{bmatrix}.
\end{aligned}
\]
则方程组 @eq:sole-4 被相应地变为

```math {@eq:sole-5}
\left\{
\begin{aligned}
    a'_{1,k_1} x_{k_1} + \sum_{k_1 < j \leqslant n} {a'_{1,j} x_{j}} & = b'_1,     \\
    a'_{2,k_2} x_{k_2} + \sum_{k_2 < j \leqslant n} {a'_{2,j} x_{j}} & = b'_2,     \\
    & \dots, \\
    a'_{r,k_r} x_{k_r} + \sum_{k_r < j \leqslant n} {a'_{r,j} x_{j}} & = b'_r,     \\
    0                                                           & = b'_{r+1}, \\
    0                                                           & = 0,        \\
    & \dots, \\
    0                                                           & = 0,
\end{aligned}
\right.
```

其中，\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \(a'_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。
（注意，若 \(r = m\)，
则方程“\(0 = b'_{r+1}\)”当然不出现。）
由前面的讨论，方程组 @eq:sole-5
与方程组 @eq:sole-4 有相同的解。

(1)
设 \(b'_{r+1} \neq 0\)。
则方程组 @eq:sole-5 的方程
“\(0 = b'_{r+1}\)”是矛盾。
则方程组 @eq:sole-5 无解。
则方程组 @eq:sole-4 也无解。
（注意，此时 \(r < m\)。）

(2)
设 \(b'_{r+1} = 0\)（当 \(r < m\)），
或“\(0 = b'_{r+1}\)”不出现（当 \(r = m\)）。

若 \(r = n\)，
则 \(k_i = i\)（\(i = 1\)、\(2\)、\(\dots\)、\(n\)）。
则方程组 @eq:sole-5 形如
\[
\left\{
\begin{aligned}
  a'_{1,1} x_1 + a'_{1,2} x_2 + \dots + a'_{1,n} x_n & = b'_1, \\
  a'_{2,2} x_2 + \dots + a'_{2,n} x_n                & = b'_2, \\
  & \dots, \\
  a'_{n,n} x_n                                       & = b'_n,
\end{aligned}
\right.
\]
其中，\(a'_{i,i} \neq 0\)。
这里，我们未写形如“\(0 = 0\)”的方程（若它们出现），
因为它们是恒等式，
且去除它们不影响方程组的解。
由方程 \(n\)，我们得
\[
\begin{aligned}
  a'_{n,n} x_n = b'_n,
  \quad
  x_n = \frac{b'_n}{a'_{n,n}};
\end{aligned}
\]
代入它到方程 \(n-1\)，我们得
\[
\begin{aligned}
  a'_{n-1,n-1} x_{n-1} + a'_{n-1,n} x_{n} = b'_{n-1},
  \quad
  x_{n-1} = \frac{b'_{n-1} - a'_{n-1,n} x_{n}}{a'_{n-1,n-1}};
\end{aligned}
\]
……
最后，我们得
\[
\begin{aligned}
  a'_{1,1} x_1 + a'_{1,2} x_2 + \dots + a'_{1,n} x_n = b'_1,
  \quad
  x_1 = \frac{b'_1 - (a'_{1,2} x_2 + \dots + a'_{1,n} x_n)}{a'_{1,1}}.
\end{aligned}
\]
则方程组 @eq:sole-5 有唯一的解。
则方程组 @eq:sole-4 有唯一的解。

若 \(r < n\)，则从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(k_1\)、\(\dots\)、\(k_r\) 后，
还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(\ell_1\)、\(\dots\)、\(\ell_{n-r}\)。
于是，我们移含
\(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\) 的项到右边，
得
\[
\left\{
\begin{aligned}
  a'_{1,k_1} x_{k_1} + a'_{1,k_2} x_{k_2} + \dots + a'_{1,k_r} x_{k_r} & = b'_1 - (a'_{1,\ell_1} x_{\ell_1} + \dots + a'_{1,\ell_{n-r}} x_{\ell_{n-r}}), \\
  a'_{2,k_2} x_{k_2} + \dots + a'_{2,k_r} x_{k_r}                      & = b'_2 - (a'_{2,\ell_1} x_{\ell_1} + \dots + a'_{2,\ell_{n-r}} x_{\ell_{n-r}}), \\
  & \dots, \\
  a'_{r,k_r} x_{k_r}                                                   & = b'_r - (a'_{r,\ell_1} x_{\ell_1} + \dots + a'_{r,\ell_{n-r}} x_{\ell_{n-r}}),
\end{aligned}
\right.
\]
其中，\(a'_{i,k_i} \neq 0\)。
这里，我们未写形如“\(0 = 0\)”的方程（若它们出现）。
选取 \(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\) 后，
我们可类似地，从后向前地确定
\(x_{k_r}\)、\(x_{k_{r-1}}\)、\(\dots\)、\(x_{k_1}\)：
\[
\begin{aligned}
  x_{k_i} & =
  \frac{1}{a'_{i,k_i}}
  \left(
    b'_i
    - \sum_{1 \leqslant v \leqslant n-r} {a'_{i,\ell_v} x_{\ell_v}}
    - \sum_{i < w \leqslant r} {a'_{i,k_w} x_{k_w}}
  \right),
  \quad
  \text{\(i = r\), \(r - 1\), \(\dots\), \(1\)}.
\end{aligned}
\]
（这里，注意，若 \(i = r\)，则
\[
\begin{aligned}
  - \sum_{i < w \leqslant r} {a'_{i,k_w} x_{k_w}}
\end{aligned}
\]
不出现，或被认为是 \(0\)。）
注意，\(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\)
可取任何数。
则方程组 @eq:sole-5 有不唯一的解。
则方程组 @eq:sole-4 也有不唯一的解。

注意，\(r > n\) 是不可能的，
因为 \(r \leqslant k_r \leqslant n\)。
（注意，\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
故 \(n \geqslant k_r \geqslant k_{r-1} + 1 \geqslant \dots \geqslant k_1 + r-1
\geqslant 1 + r - 1 = r\)。）

综上，

::: theorem
考虑线性方程组 @eq:sole-4。
通过若干次“加一个方程的倍于另一个方程”的行为，
我们可变方程组 @eq:sole-4
为方程组 @eq:sole-5，
且它们有相同的解。

(1)
若 \(b'_{r+1} \neq 0\)，
则方程组 @eq:sole-4 无解。

(2)
若 \(b'_{r+1} = 0\)
（或“\(0 = b'_{r+1}\)”不出现），
则方程组 @eq:sole-4 有解。
进一步地，
若 \(r = n\)，
则方程组 @eq:sole-4 有唯一的解；
若 \(r < n\)，
则方程组 @eq:sole-4 有不唯一的解。
（\(r > n\) 是不可能的。）
:::

我们考虑 REF 阵的秩。

::: theorem
设 \(F\) 是 REF 阵。
设 \(F\) 有 \(r\) 个非零行。
则 \(\operatorname{rank} {(F)} = r\)。
:::

::: proof
我们知道，
\(\operatorname{pivot} {(F; 1)}
    < \operatorname{pivot} {(F; 2)}
    < \dots
    < \operatorname{pivot} {(F; r)}
  < \infty\)，
且对高于 \(r\) 的 \(i\)，
\(F\) 的行 \(i\) 是 \(0\)。
记 \(k_i = \operatorname{pivot} {(F; i)}\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。
则 \([F]_{i,k_i} \neq 0\)。
则 \(F\) 有行列式非零的 \(r\) 级子阵，因为
\[
\begin{aligned}
  \det {\left(
      F\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,r}{k_1,k_2,\dots,k_r}
  \right)}
  = {} &
  \det {
    \begin{bmatrix}
      [F]_{1,k_1} & [F]_{1,k_2} & \cdots & [F]_{1,k_r} \\
      0           & [F]_{2,k_2} & \cdots & [F]_{2,k_r} \\
      \vdots      & \vdots      & \ddots & \vdots      \\
      0           & 0           & \cdots & [F]_{r,k_r} \\
    \end{bmatrix}
  }
  \\
  = {} &
  [F]_{1,k_1} \dots [F]_{r,k_r}
  \\
  \neq {} &
  0.
\end{aligned}
\]
然后，\(F\) 没有行列式非零的 \(r + 1\) 级子阵。
若 \(F\) 没有 \(r + 1\) 级子阵，
则 \(F\) 当然没有行列式非零的 \(r + 1\) 级子阵。
设 \(F\) 有 \(r + 1\) 级子阵。
那么，在 \(F\) 的任何（不同的）\(r + 1\) 行，
存在一行，其是 \(0\)。
（因为当 \(u\) 不等于
\(1\)、\(2\)、\(\dots\)、\(r\)
的任何一个时，
\(F\) 的行 \(u\) 是 \(0\)。）
则 \(F\) 的任何 \(r + 1\) 级子阵有一行，其是 \(0\)。
则它的行列式为 \(0\)。
则 \(\operatorname{rank} {(F)} = r\)。
:::

于是，若我们用行的倍加变 \(A\) 为 REF 阵 \(F\)，
则 \(A\) 的秩是 \(F\) 的非零行的数目，
因为倍加不改变秩。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作 \(m \times (n + 1)\) 阵 \(G\) 如下：
\[
\begin{aligned}
  [G]_{i,j} =
  \begin{cases}
    [A]_{i,j}, & j \leqslant n;  \\
    [B]_{i,1}, & j = n + 1.
  \end{cases}
\end{aligned}
\]

(1)
设用若干次行的倍加，
我们可变 \(G\) 为 REF 阵
\[
\begin{aligned}
  G' =
  \begin{bmatrix}
    {}         & [G']_{1,k_1} & \cdots & [G']_{1,k_2} & \cdots     & [G']_{1,k_r} & \cdots & [G']_{1,n+1}   \\
    {}         & 0            & \cdots & [G']_{2,k_2} & \cdots     & [G']_{2,k_r} & \cdots & [G']_{2,n+1}   \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots         \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{r,k_r} & \cdots & [G']_{r,n+1}   \\
    {}         & 0            & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{r+1,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}             \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\(\mathsf{O}\) 表示可能出现的 \(0\)，
\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \(\operatorname{pivot} {(G'; i)} = k_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。
（\([G']_{r+1,n+1}\) 可能不出现。）
则由 \(G'\) 的前 \(n\) 列作成的
\(m \times n\) 阵 \(A'\)
也是 REF 阵，
且这些行的倍加可变 \(A\) 为 \(A'\)。

(2)
\(\operatorname{rank} {(A)}
  = \operatorname{rank} {(A')} = r\)，
且
\(\operatorname{rank} {(G)} = \operatorname{rank} {(G')}\)。

(3)
\([G']_{r+1,n+1} \neq 0\) 对应
\(\operatorname{rank} {(G')} > \operatorname{rank} {(A')}\)，
即
\(\operatorname{rank} {(G)} > \operatorname{rank} {(A)}\)。

(4)
\([G']_{r+1,n+1} = 0\)
（或“\([G']_{r+1,n+1}\)”不出现）对应
\(\operatorname{rank} {(G')} = \operatorname{rank} {(A')}\)，
即
\(\operatorname{rank} {(G)} = \operatorname{rank} {(A)}\)。
:::

::: proof
(1)
设 \(A'\) 是由 \(G'\) 的前 \(n\) 列作成的 \(m \times n\) 阵。
则
\(\operatorname{pivot} {(A'; i)} = \operatorname{pivot} {(G'; i)}\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且对 \(i > r\)，
\(A'\) 的行 \(i\) 是 \(0\)。
则 \(A'\) 是 REF 阵。

设形如 \(E(m; p, q; s)\)（\(p \neq q\)）的阵
\(E_1\)、\(E_2\)、\(\dots\)、\(E_w\) 使
\[
\begin{aligned}
  G' = E_w (\dots (E_2 (E_1 G))).
\end{aligned}
\]
记 \(P = E_w \dots E_2 E_1\)。
则 \(G' = P G\)。
设 \(G\) 的列
\(1\)、\(2\)、\(\dots\)、\(n\)、\(n+1\)
是 \(g_1\)、\(g_2\)、\(\dots\)、\(g_n\)、\(g_{n+1}\)。
注意，\(g_j\) 也是 \(A\) 的列 \(j\)
（\(j = 1\)、\(2\)、\(\dots\)、\(n\)）。
则
\[
\begin{aligned}
  G' = [P g_1, P g_2, \dots, P g_n, P g_{n+1}].
\end{aligned}
\]
则
\[
\begin{aligned}
  A'
  = [P g_1, P g_2, \dots, P g_n]
  = P [g_1, g_2, \dots, g_n]
  = P A.
\end{aligned}
\]
则
\[
\begin{aligned}
  A' = E_w (\dots (E_2 (E_1 A))).
\end{aligned}
\]

(2)
倍加不改变秩。
注意，\(A'\) 有 \(r\) 个非零行。

(3) (4)
若 \([G']_{r+1,n+1} \neq 0\)，
则 \(G'\) 有 \(r + 1\) 个非零行。
则 \(\operatorname{rank} {(G')} > \operatorname{rank} {(A')}\)。

若 \([G']_{r+1,n+1} = 0\)
（或“\([G']_{r+1,n+1}\)”不出现），
则 \(G'\) 有 \(r\) 个非零行。
则 \(\operatorname{rank} {(G')} = \operatorname{rank} {(A')}\)。

若
\(\operatorname{rank} {(G')} > \operatorname{rank} {(A')}\)，
则 \([G']_{r+1,n+1}\) 不能是 \(0\)
（若不然，则
\(\operatorname{rank} {(G')} = \operatorname{rank} {(A')}\)；
这是矛盾）。

若
\(\operatorname{rank} {(G')} = \operatorname{rank} {(A')}\)，
则“\([G']_{r+1,n+1}\)”不出现，
或 \([G']_{r+1,n+1} = 0\)
（若不然，则
\(\operatorname{rank} {(G')} > \operatorname{rank} {(A')}\)；
这是矛盾）。
:::

结合前面的讨论，我们注意，
我们其实再证明了如下定理：

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作 \(m \times (n+1)\) 阵 \(G\)，
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

(1)
若 \(\operatorname{rank} {(G)}
  = \operatorname{rank} {(A)}\)，
则线性方程组 \(A X = B\) 有解。
进一步地，若 \(\operatorname{rank} {(A)} < n\)，
则 \(AX = B\) 的解不唯一；
若 \(\operatorname{rank} {(A)} = n\)，
则 \(AX = B\) 的解唯一。

(2)
若 \(\operatorname{rank} {(G)}
  > \operatorname{rank} {(A)}\)，
则线性方程组 \(A X = B\) 无解。

注意，\(\operatorname{rank} {(G)}\)
不可能小于 \(\operatorname{rank} {(A)}\)。
:::

于是，我们能用 REF 阵判断线性方程组是否有解，
判断线性方程组的解是否唯一（若解存在），
解线性方程组（若解存在），
且求阵的秩。
用行的倍加变阵为 REF 阵或许比
求它的子阵的行列式简单。

::: example
解线性方程组

```math {@eq:sole-6}
\left\{
\begin{aligned}
    0 x_1 + 1 x_2 + 1 x_3 + 1 x_4 + 1 x_5 & = 17, \\
    1 x_1 + 0 x_2 + 1 x_3 + 1 x_4 + 1 x_5 & = 15, \\
    1 x_1 + 1 x_2 + 0 x_3 + 1 x_4 + 1 x_5 & = 14, \\
    1 x_1 + 1 x_2 + 1 x_3 + 0 x_4 + 1 x_5 & = 12, \\
    1 x_1 + 1 x_2 + 1 x_3 + 1 x_4 + 0 x_5 & = 10.
\end{aligned}
\right.
```

记
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    0 & 1 & 1 & 1 & 1 \\
    1 & 0 & 1 & 1 & 1 \\
    1 & 1 & 0 & 1 & 1 \\
    1 & 1 & 1 & 0 & 1 \\
    1 & 1 & 1 & 1 & 0 \\
  \end{bmatrix},
  \quad
  X =
  \begin{bmatrix}
    x_1 \\
    x_2 \\
    x_3 \\
    x_4 \\
    x_5 \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    17 \\
    15 \\
    14 \\
    12 \\
    10 \\
  \end{bmatrix}.
\end{aligned}
\]
则方程组 @eq:sole-6 相当于 \(A X = B\)。

线性方程组 @eq:sole-6
对应 \(5 \times (5 + 1)\) 阵
\[
\begin{aligned}
  G = [A, B] =
  \begin{bmatrix}
    0 & 1 & 1 & 1 & 1 & 17 \\
    1 & 0 & 1 & 1 & 1 & 15 \\
    1 & 1 & 0 & 1 & 1 & 14 \\
    1 & 1 & 1 & 0 & 1 & 12 \\
    1 & 1 & 1 & 1 & 0 & 10 \\
  \end{bmatrix}.
\end{aligned}
\]
由前面的例，我们可用行的倍加，变 \(G\) 为
\[
\begin{aligned}
  G' =
  \begin{bmatrix}
    4 & 0  & 0  & 0  & 0  & 0  \\
    0 & -1 & 0  & 0  & 0  & -2 \\
    0 & 0  & -1 & 0  & 0  & -3 \\
    0 & 0  & 0  & -1 & 0  & -5 \\
    0 & 0  & 0  & 0  & -1 & -7 \\
  \end{bmatrix}.
\end{aligned}
\]
设 \(A'\) 是由 \(G'\) 的前 \(5\) 列作成的阵。
则
\(\operatorname{rank} {(G)}
    = \operatorname{rank} {(G')}
    = \operatorname{rank} {(A')}
    = \operatorname{rank} {(A)}
  = 5\)。
故方程组 @eq:sole-6 有解。
因为 \(A\) 的秩等于 \(A\) 的列数，
方程组 @eq:sole-6 有唯一的解。

\(G'\) 对应线性方程组
\[
\left\{
\begin{aligned}
  4 x_1 & = 0,  \\
  - x_2 & = -2, \\
  - x_3 & = -3, \\
  - x_4 & = -5, \\
  - x_5 & = -7.
\end{aligned}
\right.
\]
它与方程组 @eq:sole-6 有相同的解。
由此，我们可解得
\(x_1 = 0\)、\(x_2 = 2\)、\(x_3 = 3\)、
\(x_4 = 5\)、\(x_5 = 7\)。

由前面的计算，
我们看出，
\(\det {(A)} = \det {(A')}
  = 4 \cdot (-1)^4 = 4\)。
于是，理论地，我们也可用 Cramer 公式
解线性方程组 @eq:sole-6。
不过，计算行列式不是简单的事情：
若我们用 Cramer 公式 1，
\[
\begin{aligned}
  X = (\det {(A)})^{-1} \operatorname{adj} {(A)}\, B,
\end{aligned}
\]
则我们要计算 \(5 \cdot 5 = 25\) 个 \(4\) 级阵的行列式；
若我们用 Cramer 公式 2，
\[
\begin{aligned}
  x_i = \frac{\det {(A \{i, B\})}}{\det {(A)}},
  \quad
  i = 1, 2, 3, 4, 5
\end{aligned}
\]
（其中，\(A \{i, B\}\) 是以
\(B\) 代阵 \(A\) 的列 \(i\) 后得到的阵），
则我们要计算 \(5\) 个 \(5\) 级阵的行列式。
:::

::: example
设 \(k\) 是参数。
考虑由 \(3\) 个
关于 \(x\)、\(y\) 的
\(2\) 元 \(1\) 次方程作成的方程组

```math {@eq:sole-7}
\left\{
\begin{alignedat}{4}
    1 x              & {} + {} & k y & {} = {} & 1, \\
    k x              & {} + {} & 1 y & {} = {} & 1, \\
    (-k^2 + k + 1) x & {} + {} & 1 y & {} = {} & k^2 - 2 k + 2,
\end{alignedat}
\right.
```

若方程组 @eq:sole-7 有解，
\(k\) 应适合何条件？
反过来，当 \(k\) 适合何条件时，
方程组 @eq:sole-7 有解？
当方程组 @eq:sole-7 有解时，
求它的解。

记
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1        & k \\
    k        & 1 \\
    -k^2+k+1 & 1 \\
  \end{bmatrix},
  \quad
  X =
  \begin{bmatrix}
    x \\
    y \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    1        \\
    1        \\
    k^2-2k+2 \\
  \end{bmatrix}.
\end{aligned}
\]
则方程组 @eq:sole-7 相当于 \(A X = B\)。

线性方程组 @eq:sole-7
对应 \(3 \times (2 + 1)\) 阵
\[
\begin{aligned}
  G = [A, B] =
  \begin{bmatrix}
    1        & k & 1        \\
    k        & 1 & 1        \\
    -k^2+k+1 & 1 & k^2-2k+2 \\
  \end{bmatrix}.
\end{aligned}
\]
加行 \(1\) 的 \(-k\) 倍于行 \(2\)，
且加行 \(1\) 的 \(k^2 - k - 1\) 倍于行 \(3\)，
得
\[
\begin{aligned}
  \begin{bmatrix}
    1 & k            & 1           \\
    0 & 1-k^2        & 1-k         \\
    0 & (1-k^2)(1-k) & (1-k)(1-2k) \\
  \end{bmatrix}.
\end{aligned}
\]
加行 \(2\) 的 \(k-1\) 倍于行 \(3\)，
得
\[
\begin{aligned}
  \begin{bmatrix}
    1 & k     & 1     \\
    0 & 1-k^2 & 1-k   \\
    0 & 0     & k^2-k \\
  \end{bmatrix}
  = H.
\end{aligned}
\]
注意，\(H\) 不一定是 REF 阵，
因为 \(k\) 是参数。
我们要分类讨论。

设 \(1 - k^2 \neq 0\)。
则 \(H\) 是 REF 阵。
设 \(G' = H\)。
设 \(A'\) 是由 \(G'\) 的前 \(2\) 列作成的阵。
则 \(\operatorname{rank} {(A)}
  = \operatorname{rank} {(A')} = 2\)。
注意，
\[
\begin{aligned}
  \operatorname{rank} {(G)}
  = {} &
  \operatorname{rank} {(G')}
  \\
  = {} &
  \begin{cases}
    2, & \text{\(k^2-k = 0\), 且 \(1-k^2 \neq 0\)};   \\
    3, & \text{\(k^2-k \neq 0\), 且 \(1-k^2 \neq 0\)}
  \end{cases}
  \\
  = {} &
  \begin{cases}
    2, & k = 0;                                              \\
    3, & \text{\(k \neq 0\) 且 \(k \neq 1\) 且 \(k \neq -1\)}.
  \end{cases}
\end{aligned}
\]
所以，当 \(1 - k^2 \neq 0\) 时，
若方程组 @eq:sole-7 有解，则
\(\operatorname{rank} {(G)} = \operatorname{rank} {(A)}\)，
即 \(k = 0\)。
反过来，当 \(k = 0\) 时，
\(\operatorname{rank} {(G)} = \operatorname{rank} {(A)}\)，
故方程组 @eq:sole-7 有解。
因为 \(A\) 的秩等于 \(A\) 的列数，
则当 \(k = 0\) 时，
方程组 @eq:sole-7 有唯一的解。

进一步地，当 \(k = 0\) 时，
\(G'\) 对应线性方程组
\[
\left\{
\begin{aligned}
  x & = 1, \\
  y & = 1, \\
  0 & = 0.
\end{aligned}
\right.
\]
它与方程组 @eq:sole-7
（其中，\(k = 0\)）有相同的解。
则 \(x = 1\)、\(y = 1\)。

设 \(1 - k^2 = 0\)。
则 \(k = 1\)，或 \(k = -1\)。
则
\[
\begin{aligned}
  H =
  \begin{bmatrix}
    1 & k & 1   \\
    0 & 0 & 1-k \\
    0 & 0 & 1-k \\
  \end{bmatrix}.
\end{aligned}
\]
加行 \(2\) 的 \(-1\) 倍于行 \(3\)，
得
\[
\begin{aligned}
  \begin{bmatrix}
    1 & k & 1   \\
    0 & 0 & 1-k \\
    0 & 0 & 0   \\
  \end{bmatrix}
  = G'.
\end{aligned}
\]
\(G'\) 是 REF 阵。
设 \(A'\) 是由 \(G'\) 的前 \(2\) 列作成的阵。
则 \(\operatorname{rank} {(A)}
  = \operatorname{rank} {(A')} = 1\)。
注意，
\[
\begin{aligned}
  \operatorname{rank} {(G)}
  = \operatorname{rank} {(G')}
  =
  \begin{cases}
    1, & k = 1;  \\
    2, & k = -1.
  \end{cases}
\end{aligned}
\]
所以，当 \(1 - k^2 = 0\) 时，
若方程组 @eq:sole-7 有解，
\(\operatorname{rank} {(G)} = \operatorname{rank} {(A)}\)，
即 \(k = 1\)。
反过来，当 \(k = 1\) 时，
\(\operatorname{rank} {(G)} = \operatorname{rank} {(A)}\)，
故方程组 @eq:sole-7 有解。
因为 \(A\) 的秩小于 \(A\) 的列数，
则当 \(k = 1\) 时，
方程组 @eq:sole-7 有不唯一的解。

进一步地，当 \(k = 1\) 时，\(G'\) 对应线性方程组
\[
\left\{
\begin{aligned}
  x + y & = 1, \\
  0     & = 0, \\
  0     & = 0.
\end{aligned}
\right.
\]
它与方程组 @eq:sole-7
（其中，\(k = 1\)）有相同的解。
则 \(x = 1 - c\)、\(y = c\)，
其中，\(c\) 是任何数。
:::

前面，我们用 REF 阵得到了线性方程组的一些理论。
我们说，我们还能得到更多。

::: definition
设 \(A\) 是 \(m \times n\) 阵。
设存在不高于 \(m\) 的非负整数 \(r\)，使：

(1)
对任何不高于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} < \infty;
\end{aligned}
\]

(2)
对任何低于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)}
  < \operatorname{pivot} {(A; i + 1)};
\end{aligned}
\]

(3)
对任何高于 \(r\) 且不高于 \(m\) 的整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} = \infty;
\end{aligned}
\]

(4)
对任何不高于 \(r\) 的正整数 \(i\)，
与任何不等于 \(i\)，
且不高于 \(m\) 的正整数 \(\ell\)，
\[
\begin{aligned}
  [A]_{\ell,\operatorname{pivot} {(A; i)}} = 0.
\end{aligned}
\]

我们说，\(A\) 是 **SREF**
（<lang en>special row-echelon form</lang>）**阵**。
:::

注意，SREF 阵是 REF 阵，
但 REF 阵不一定是 SREF 阵。

::: example
设
\[
\begin{aligned}
  G =
  \begin{bmatrix}
    2 & 4 & 94 \\
    1 & 1 & 35 \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(G\) 不是 REF 阵，且 \(G\) 不是 SREF 阵。

对 \(G\)，
我们加行 \(1\) 的 \(-1/2\) 倍于行 \(2\)，
得
\[
\begin{aligned}
  G_1 =
  \begin{bmatrix}
    2 & 4  & 94  \\
    0 & -1 & -12 \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(G_1\) 是 REF 阵，但 \(G_1\) 不是 SREF 阵，
因为 \(1 \neq \operatorname{pivot} {(G_1; 2)} = 2\)，
但 \([G_1]_{1,2} = 4 \neq 0\)。

对 \(G_1\)，
我们加行 \(2\) 的 \(4\) 倍于行 \(1\)，
得
\[
\begin{aligned}
  G_2 =
  \begin{bmatrix}
    2 & 0  & 46  \\
    0 & -1 & -12 \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(G_2\) 是 REF 阵，且 \(G_2\) 是 SREF 阵。
:::

我们知道，我们可用行的倍加，
变一个阵为 REF 阵。
进一步地，

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
则我们可用行的倍加，
变 \(A\) 为某 \(m \times n\) SREF 阵 \(D\)。
:::

::: proof
我们可用行的倍加，
变 \(A\) 为某 \(m \times n\) REF 阵 \(B\)。
则存在非负整数 \(r\)，使
\[
\begin{aligned}
  \operatorname{pivot} {(B; 1)}
  < \operatorname{pivot} {(B; 2)}
  < \dots
  < \operatorname{pivot} {(B; r-1)}
  < \operatorname{pivot} {(B; r)}
  < \infty,
\end{aligned}
\]
且对 \(i > r\)，
\(B\) 的行 \(i\) 是 \(0\)。
记 \(\operatorname{pivot} {(B; i)} = k_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。

注意，若 \(\ell > i\)，则 \([B]_{\ell,k_i} = 0\)。
于是，若 \(i \leqslant 1\)，
且 \(\ell \neq i\)，
则 \([B]_{\ell,k_i} = 0\)。

对 \(B\)，
我们加行 \(2\) 的
\(-[B]_{1,k_2} / [B]_{2,k_2}\) 倍于行 \(1\)，
得阵 \(B_2\)。
于是，若 \(\ell \neq 2\)，则 \([B_2]_{\ell,k_2} = 0\)。
注意，\(\operatorname{pivot} {(B_2; i)}
  = \operatorname{pivot} {(B; i)}\)，
且若 \(j < k_1\)，
则 \([B_2]_{i,j} = [B]_{i,j}\)。
于是，若 \(i \leqslant 2\)，
且 \(\ell \neq i\)，
则 \([B_2]_{\ell,k_i} = 0\)。

对 \(B_2\)，
我们加行 \(3\) 的
\(-[B_2]_{1,k_3} / [B_2]_{3,k_3}\) 倍于行 \(1\)，
且加行 \(3\) 的
\(-[B_2]_{2,k_3} / [B_2]_{3,k_3}\) 倍于行 \(2\)，
得阵 \(B_3\)。
于是，若 \(\ell \neq 3\)，则 \([B_3]_{\ell,k_3} = 0\)。
注意，\(\operatorname{pivot} {(B_3; i)}
    = \operatorname{pivot} {(B_2; i)}
  = \operatorname{pivot} {(B; i)}\)，
且若 \(j < k_2\)，
则 \([B_3]_{i,j} = [B_2]_{i,j}\)。
于是，若 \(i \leqslant 3\)，
且 \(\ell \neq i\)，
则 \([B_3]_{\ell,k_i} = 0\)。

……
最后，用若干次行的倍加，
我们得 \(m \times n\) 阵 \(D\)，
使 \(\operatorname{pivot} {(D; i)}
  = \operatorname{pivot} {(B; i)}\)。
并且，若 \(i \leqslant r\)，
且 \(\ell \neq i\)，
则 \([D]_{\ell,k_i} = 0\)。
则 \(D\) 是 SREF 阵。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作 \(m \times (n + 1)\) 阵
\(G = [A, B]\)。
则我们可用行的倍加，
变 \(G\) 为 REF 阵 \(G'\)，
且由 \(G'\) 的前 \(n\) 列作成的
\(m \times n\) 阵 \(A'\)
是 SREF 阵。
:::

::: proof
我们知道，我们可用若干次行的倍加，
变 \(G\) 为 SREF 阵 \(G'\)。
则存在非负整数 \(u\)，使
\[
\begin{aligned}
  \operatorname{pivot} {(G'; 1)}
  < \operatorname{pivot} {(G'; 2)}
  < \dots
  < \operatorname{pivot} {(G'; u-1)}
  < \operatorname{pivot} {(G'; u)}
  < \infty,
\end{aligned}
\]
且对 \(i > u\)，
\(G'\) 的行 \(i\) 是 \(0\)。
记 \(\operatorname{pivot} {(G'; i)} = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u\)）。
则当 \(i \leqslant u\)，
且 \(\ell \neq i\) 时，
\([G']_{\ell,k_i} = 0\)。

若 \(p_u = n + 1\)，
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,p_1} & \cdots & 0            & \cdots     & 0                  & \cdots & 0            \\
    {}         & 0            & \cdots & [G']_{2,p_2} & \cdots     & 0                  & \cdots & 0            \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots             & \cdots & \vdots       \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{u-1,p_{u-1}} & \cdots & 0            \\
    {}         & 0            & \cdots & 0            & \cdots     & 0                  & \cdots & [G']_{u,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}                 & {}     & {}           \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(\mathsf{O}\) 表示可能出现的 \(0\)，下同。
记 \(r = u - 1\)，
且 \(k_i = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u - 1\)）。

若 \(p_u \leqslant n\)，
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,p_1} & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{1,n+1} \\
    {}         & 0            & \cdots & [G']_{2,p_2} & \cdots     & 0            & \cdots & [G']_{2,n+1} \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots       \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{u,p_u} & \cdots & [G']_{u,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}           \\
  \end{bmatrix}
\end{aligned}
\]
记 \(r = u\)，
且 \(k_i = p_i\)
（\(i = 1\)、\(2\)、\(\dots\)、\(u\)）。

于是，统一地，\(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & [G']_{1,k_1} & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{1,n+1}   \\
    {}         & 0            & \cdots & [G']_{2,k_2} & \cdots     & 0            & \cdots & [G']_{2,n+1}   \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots         \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{r,k_r} & \cdots & [G']_{r,n+1}   \\
    {}         & 0            & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{r+1,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}             \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \([G']_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且当 \(i > r + 1\) 时，\([G']_{i,n+1} = 0\)，
且当 \(i > r\)，且 \(j \leqslant n\) 时，
\([G']_{i,j} = 0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\([G']_{\ell,k_i} = 0\)。
（注意，若 \(r = m\)，则 \([G']_{r+1,n+1}\) 不出现。）

设 \(A'\) 是由 \(G'\) 的前 \(n\) 列作成的
\(m \times n\) 阵。
则
\(\operatorname{pivot} {(A'; i)} = \operatorname{pivot} {(G'; i)}\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且对 \(i > r\)，
\(A'\) 的行 \(i\) 是 \(0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\([A']_{\ell,k_i} = [G']_{\ell,k_i} = 0\)。
则 \(A'\) 是 SREF 阵。
:::

再考虑线性方程组

```math {@eq:sole-8}
\left\{
\begin{aligned}
    a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
    a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
    & \dots, \\
    a_{m,1} x_1 + a_{m,2} x_2 + \dots + a_{m,n} x_n & = b_m.
\end{aligned}
\right.
```

它跟 \(m \times (n + 1)\) 阵
\[
\begin{aligned}
  G =
  \begin{bmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} & b_1    \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} & b_2    \\
    \vdots  & \vdots  & {}     & \vdots  & \vdots \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n} & b_m    \\
  \end{bmatrix}
\end{aligned}
\]
对应。
我们知道，我们可用行的倍加，
变 \(G\) 为 REF 阵
\[
\begin{aligned}
  G'' =
  \begin{bmatrix}
    {}         & [G'']_{1,k_1} & \cdots & 0             & \cdots     & 0             & \cdots & [G'']_{1,n+1}   \\
    {}         & 0             & \cdots & [G'']_{2,k_2} & \cdots     & 0             & \cdots & [G'']_{2,n+1}   \\
    \mathsf{O} & \vdots        & {}     & \vdots        & {}         & \vdots        & \cdots & \vdots          \\
    {}         & 0             & \cdots & 0             & \cdots     & [G'']_{r,k_r} & \cdots & [G'']_{r,n+1}   \\
    {}         & 0             & \cdots & 0             & \cdots     & 0             & \cdots & [G'']_{r+1,n+1} \\
    {}         & {}            & {}     & {}            & \mathsf{O} & {}            & {}     & {}              \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \([G'']_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且当 \(i > r + 1\) 时，\([G'']_{i,n+1} = 0\)，
且当 \(i > r\)，且 \(j \leqslant n\) 时，
\([G'']_{i,j} = 0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\([G'']_{\ell,k_i} = 0\)。
（注意，若 \(r = m\)，则 \([G'']_{r+1,n+1}\) 不出现。）

为方便，记 \([G'']_{i,n+1} = b''_i\)。
则当 \(i > r + 1\) 时，\(b''_i = 0\)。
记 \([G'']_{i,j} = a''_{i,j}\)
（若 \(j \leqslant n\)）。
则当 \(i > r\)，且 \(j \leqslant n\) 时，
\(a''_{i,j} = 0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\(a''_{\ell,k_i} = 0\)。
则 \(G''\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & a''_{1,k_1} & \cdots & 0           & \cdots     & 0           & \cdots & b''_1     \\
    {}         & 0           & \cdots & a''_{2,k_2} & \cdots     & 0           & \cdots & b''_2     \\
    \mathsf{O} & \vdots      & {}     & \vdots      & {}         & \vdots      & \cdots & \vdots    \\
    {}         & 0           & \cdots & 0           & \cdots     & a''_{r,k_r} & \cdots & b''_r     \\
    {}         & 0           & \cdots & 0           & \cdots     & 0           & \cdots & b''_{r+1} \\
    {}         & {}          & {}     & {}          & \mathsf{O} & {}          & {}     & {}        \\
  \end{bmatrix}.
\end{aligned}
\]
设从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(k_1\)、\(\dots\)、\(k_r\) 后，
还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(\ell_1\)、\(\dots\)、\(\ell_{n-r}\)。
（注意，若 \(r = n\)，则
\(\ell_1\)、\(\dots\)、\(\ell_{n-r}\)
不出现。）
则 \(G''\) 对应线性方程组

```math {@eq:sole-9}
\left\{
\begin{aligned}
    a''_{1,k_1} x_{k_1} + \sum_{1 \leqslant v \leqslant n-r} {a''_{1,\ell_v} x_{\ell_v}} & = b''_1,     \\
    a''_{2,k_2} x_{k_2} + \sum_{1 \leqslant v \leqslant n-r} {a''_{2,\ell_v} x_{\ell_v}} & = b''_2,     \\
    & \dots, \\
    a''_{r,k_r} x_{k_r} + \sum_{1 \leqslant v \leqslant n-r} {a''_{r,\ell_v} x_{\ell_v}} & = b''_r,     \\
    0                                                                          & = b''_{r+1}, \\
    0                                                                          & = 0,         \\
    & \dots, \\
    0                                                                          & = 0,
\end{aligned}
\right.
```

其中，\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \(a''_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。
（注意，若 \(r = n\)，则
\[
\begin{aligned}
  + \sum_{1 \leqslant v \leqslant n-r} {a''_{i,\ell_v} x_{\ell_v}},
  \quad
  i = 1, 2, \dots, r
\end{aligned}
\]
不出现，或被认为是 \(0\)。）
由前面的讨论，方程组 @eq:sole-9
与方程组 @eq:sole-8 有相同的解。
（注意，形式地，方程组 @eq:sole-9
比方程组 @eq:sole-5 更简单。）

类似地，设 \(b''_{r+1} \neq 0\)。
则方程组 @eq:sole-9 的方程
“\(0 = b''_{r+1}\)”是矛盾。
则方程组 @eq:sole-9 无解。
则方程组 @eq:sole-8 也无解。
（注意，此时 \(r < m\)。）

类似地，设 \(b''_{r+1} = 0\)（当 \(r < m\)），
或“\(0 = b''_{r+1}\)”不出现（当 \(r = m\)）。

若 \(r = n\)，
则 \(k_i = i\)（\(i = 1\)、\(2\)、\(\dots\)、\(n\)）。
则方程组 @eq:sole-9 形如
\[
\left\{
\begin{aligned}
  a''_{1,1} x_1 & = b''_1, \\
  a''_{2,2} x_2 & = b''_2, \\
  & \dots, \\
  a''_{n,n} x_n & = b''_n,
\end{aligned}
\right.
\]
其中，\(a''_{i,i} \neq 0\)。
这里，我们未写形如“\(0 = 0\)”的方程（若它们出现），
因为它们是恒等式，
且去除它们不影响方程组的解。
由此，我们可直接地确定
\[
\begin{aligned}
  x_i = \frac{b''_i}{a''_{i,i}},
  \quad i = 1, 2, \dots, n.
\end{aligned}
\]
（注意，形式地，这儿的公式更简单。）
则方程组 @eq:sole-9 有唯一的解。
则方程组 @eq:sole-8 有唯一的解。

若 \(r < n\)，我们移含
\(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\) 的项到右边，
得
\[
\left\{
\begin{aligned}
  a''_{1,k_1} x_{k_1} & = b''_1 - \sum_{1 \leqslant v \leqslant n-r} {a''_{1,\ell_v} x_{\ell_v}}, \\
  a''_{2,k_2} x_{k_2} & = b''_2 - \sum_{1 \leqslant v \leqslant n-r} {a''_{2,\ell_v} x_{\ell_v}}, \\
  & \dots, \\
  a''_{r,k_r} x_{k_r} & = b''_r - \sum_{1 \leqslant v \leqslant n-r} {a''_{r,\ell_v} x_{\ell_v}},
\end{aligned}
\right.
\]
其中，\(a''_{i,k_i} \neq 0\)。
这里，我们未写形如“\(0 = 0\)”的方程（若它们出现），
因为它们是恒等式，
且去除它们不影响方程组的解。
选取 \(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\) 后，
我们可确定 \(x_{k_1}\)、\(\dots\)、\(x_{k_r}\)：
\[
\begin{aligned}
  x_{k_i} =
  \frac{1}{a''_{i,k_i}}
  \left(
    b''_i
    - \sum_{1 \leqslant v \leqslant n-r} {a''_{i,\ell_v} x_{\ell_v}}
  \right),
  \quad
  i = 1, 2, \dots, r.
\end{aligned}
\]
（注意，形式地，这儿的公式更简单。）
注意，\(x_{\ell_1}\)、\(\dots\)、\(x_{\ell_{n-r}}\)
可取任何数。
则方程组 @eq:sole-9 有不唯一的解。
则方程组 @eq:sole-8 也有不唯一的解。

由此可见，
若我们变对应线性方程组 @eq:sole-8 的
\(m \times (n + 1)\) 阵 \(G\) 为 REF 阵 \(G'\)，
且进一步地要求，
\(G'\) 的前 \(n\) 列作成 \(m \times n\) SREF 阵，
则对应 \(G'\) 的线性方程组 @eq:sole-9 的解
可被直接地写出。
特别地，我们可再得到

::: theorem
考虑线性方程组

```math {@eq:sole-10}
\left\{
\begin{aligned}
    a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
    a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
    & \dots, \\
    a_{n,1} x_1 + a_{n,2} x_2 + \dots + a_{n,n} x_n & = b_n.
\end{aligned}
\right.
```

（注意，方程数等于未知数数。）
记
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
    \vdots  & \vdots  & {}     & \vdots  \\
    a_{n,1} & a_{n,2} & \cdots & a_{n,n} \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    b_1 \\ b_2 \\ \vdots \\ b_n
  \end{bmatrix}.
\end{aligned}
\]

(1)
（Cramer 公式，2）
若 \(\det {(A)} \neq 0\)，
则方程组 @eq:sole-10 有唯一的解
\[
\begin{aligned}
  x_i = \frac{\det {(A \{i, B\})}}{\det {(A)}},
  \quad
  \text{\(i = 1\), \(2\), \(\dots\), \(n\)},
\end{aligned}
\]
其中，\(A \{i, B\}\) 是
以 \(B\) 代阵 \(A\) 的列 \(i\) 后得到的阵。

(2)
若 \(\det {(A)} = 0\)，
则方程组 @eq:sole-10 要么无解，
要么有不唯一的解。
:::

::: proof
作 \(n \times (n + 1)\) 阵 \(G = [A, B]\)。
我们可用行的倍加，变 \(G\) 为 REF 阵
\[
\begin{aligned}
  G' =
  \begin{bmatrix}
    {}         & [G']_{1,k_1} & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{1,n+1}   \\
    {}         & 0            & \cdots & [G']_{2,k_2} & \cdots     & 0            & \cdots & [G']_{2,n+1}   \\
    \mathsf{O} & \vdots       & {}     & \vdots       & {}         & \vdots       & \cdots & \vdots         \\
    {}         & 0            & \cdots & 0            & \cdots     & [G']_{r,k_r} & \cdots & [G']_{r,n+1}   \\
    {}         & 0            & \cdots & 0            & \cdots     & 0            & \cdots & [G']_{r+1,n+1} \\
    {}         & {}           & {}     & {}           & \mathsf{O} & {}           & {}     & {}             \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \([G']_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)），
且当 \(i > r + 1\) 时，\([G']_{i,n+1} = 0\)，
且当 \(i > r\)，且 \(j \leqslant n\) 时，
\([G']_{i,j} = 0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\([G']_{\ell,k_i} = 0\)。
（注意，若 \(r = n\)，则 \([G']_{r+1,n+1}\) 不出现。）
则 \(G'\) 的前 \(n\) 列作成 \(n\) 级 SREF 阵 \(A'\)。
记 \(G'\) 的列 \(n+1\) 为 \(B'\)。
则 \(G' = [A', B']\)。

为方便，记 \([B']_{i,1} = b'_i\)。
则当 \(i > r + 1\) 时，\(b'_i = 0\)。
记 \([A']_{i,j} = a'_{i,j}\)。
则当 \(i > r\)，且 \(j \leqslant n\) 时，
\(a'_{i,j} = 0\)，
且当 \(i \leqslant r\)，且 \(\ell \neq i\) 时，
\(a'_{\ell,k_i} = 0\)。
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    {}         & a'_{1,k_1} & \cdots & 0          & \cdots     & 0          & \cdots & b'_1     \\
    {}         & 0          & \cdots & a'_{2,k_2} & \cdots     & 0          & \cdots & b'_2     \\
    \mathsf{O} & \vdots     & {}     & \vdots     & {}         & \vdots     & \cdots & \vdots   \\
    {}         & 0          & \cdots & 0          & \cdots     & a'_{r,k_r} & \cdots & b'_r     \\
    {}         & 0          & \cdots & 0          & \cdots     & 0          & \cdots & b'_{r+1} \\
    {}         & {}         & {}     & {}         & \mathsf{O} & {}         & {}     & {}       \\
  \end{bmatrix}.
\end{aligned}
\]
设从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(k_1\)、\(\dots\)、\(k_r\) 后，
还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(\ell_1\)、\(\dots\)、\(\ell_{n-r}\)。
（注意，若 \(r = n\)，则
\(\ell_1\)、\(\dots\)、\(\ell_{n-r}\)
不出现。）
则 \(G'\) 对应线性方程组

```math {@eq:sole-11}
\left\{
\begin{aligned}
    a'_{1,k_1} x_{k_1} + \sum_{1 \leqslant v \leqslant n-r} {a'_{1,\ell_v} x_{\ell_v}} & = b'_1,     \\
    a'_{2,k_2} x_{k_2} + \sum_{1 \leqslant v \leqslant n-r} {a'_{2,\ell_v} x_{\ell_v}} & = b'_2,     \\
    & \dots, \\
    a'_{r,k_r} x_{k_r} + \sum_{1 \leqslant v \leqslant n-r} {a'_{r,\ell_v} x_{\ell_v}} & = b'_r,     \\
    0                                                                        & = b'_{r+1}, \\
    0                                                                        & = 0,        \\
    & \dots, \\
    0                                                                        & = 0,
\end{aligned}
\right.
```

其中，\(1 \leqslant k_1 < k_2 < \dots < k_r \leqslant n\)，
且 \(a'_{i,k_i} \neq 0\)
（\(i = 1\)、\(2\)、\(\dots\)、\(r\)）。
（注意，若 \(r = n\)，则
\[
\begin{aligned}
  + \sum_{1 \leqslant v \leqslant n-r} {a'_{i,\ell_v} x_{\ell_v}},
  \quad
  i = 1, 2, \dots, r
\end{aligned}
\]
不出现，或被认为是 \(0\)。）
由前面的讨论，方程组 @eq:sole-11
与方程组 @eq:sole-10 有相同的解。

设形如 \(E(m; p, q; s)\)（\(p \neq q\)）的阵
\(E_1\)、\(E_2\)、\(\dots\)、\(E_w\) 使
\[
\begin{aligned}
  G' = E_w (\dots (E_2 (E_1 G))).
\end{aligned}
\]
记 \(P = E_w \dots E_2 E_1\)。
则 \(G' = P G\)。
设 \(G\) 的列
\(1\)、\(2\)、\(\dots\)、\(n\)、\(n+1\)
是 \(g_1\)、\(g_2\)、\(\dots\)、\(g_n\)、\(g_{n+1}\)。
注意，\(g_j\) 是 \(A\) 的列 \(j\)
（\(j = 1\)、\(2\)、\(\dots\)、\(n\)），
且 \(g_{n+1} = B\)。
则
\[
\begin{aligned}
  G' = [P g_1, P g_2, \dots, P g_n, P g_{n+1}].
\end{aligned}
\]
则
\[
\begin{aligned}
  A'
  = [P g_1, P g_2, \dots, P g_n]
  = P [g_1, g_2, \dots, g_n]
  = P A.
\end{aligned}
\]
则
\[
\begin{aligned}
  A' = E_w (\dots (E_2 (E_1 A))).
\end{aligned}
\]
类似地，\(B' = P g_{n+1}
    = P B
  = E_w (\dots (E_2 (E_1 B)))\)。

好的。
我们已好地准备。

(1)
若 \(\det {(A)} \neq 0\)，
则因为我们可用行的倍加，
变 \(A\) 为 \(A'\)，
\(\det {(A')} = \det {(A)} \neq 0\)。
则 \(r = n\)。
则 \(k_i = i\)（\(i = 1\)、\(2\)、\(\dots\)、\(n\)）。
则 \(G'\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    a'_{1,1} & 0        & \cdots & 0        & b'_1   \\
    0        & a'_{2,2} & \cdots & 0        & b'_2   \\
    \vdots   & \vdots   & {}     & \vdots   & \vdots \\
    0        & 0        & \cdots & a'_{n,n} & b'_n   \\
  \end{bmatrix},
\end{aligned}
\]
且方程组 @eq:sole-11 形如
\[
\left\{
\begin{aligned}
  a'_{1,1} x_1 & = b'_1, \\
  a'_{2,2} x_2 & = b'_2, \\
  & \dots, \\
  a'_{n,n} x_n & = b'_n,
\end{aligned}
\right.
\]
其中，\(a'_{i,i} \neq 0\)。
则方程组 @eq:sole-11 有唯一的解

```math {@eq:sole-10-solutions}
x_i = \frac{b'_i}{a'_{i,i}},
\quad i = 1, 2, \dots, n.
```

则方程组 @eq:sole-10 有唯一的解
@eq:sole-10-solutions。

注意，
\[
\begin{aligned}
  A' \{i, B'\}
  = {} &
  ([\dots, P g_{i-1}, P g_i, P g_{i+1}, \dots])
  \{i, P B\}
  \\
  = {} &
  [\dots, P g_{i-1}, P B, P g_{i+1}, \dots]
  \\
  = {} &
  P [\dots, g_{i-1}, B, g_{i+1}, \dots]
  \\
  = {} &
  P (A\{i, B\})
  \\
  = {} &
  E_w (\dots (E_2 (E_1 (A\{i, B\})))).
\end{aligned}
\]
则我们可用行的倍加，
变 \(A\{i, B\}\) 为 \(A' \{i, B'\}\)。
则
\[
\begin{aligned}
  \frac{\det {(A\{i, B\})}}{\det {(A)}}
  = \frac{\det {(A' \{i, B'\})}}{\det {(A')}}.
\end{aligned}
\]
注意，对 \(A' \{i, B'\}\)（或 \(A'\)），
若 \(j \neq i\)，
则 \([A' \{i, B'\}]_{i,j} = 0\)
（或 \([A']_{i,j} = 0\)）。
则，按行 \(i\) 展开，
\[
\begin{aligned}
  \frac{\det {(A' \{i, B'\})}}{\det {(A')}}
  = {} &
  \frac
  {(-1)^{i+i} [A' \{i, B'\}]_{i,i}
  \det {((A' \{i, B'\}) (i|i))}}
  {(-1)^{i+i} [A']_{i,i}
  \det {(A' (i|i))}}
  \\
  = {} &
  \frac{[B']_{i,1} \det {((A' \{i, B'\}) (i|i))}}
  {[A']_{i,i} \det {(A' (i|i))}}
  \\
  = {} &
  \frac{b'_i \det {(A' (i|i))}}
  {a'_{i,i} \det {(A' (i|i))}}
  \\
  = {} &
  \frac{b'_i}{a'_{i,i}}
  \\
  = {} &
  x_i.
\end{aligned}
\]
则方程组 @eq:sole-10
的唯一的解 @eq:sole-10-solutions 可被写为
\[
\begin{aligned}
  x_i
  = \frac{\det {(A' \{i, B'\})}}{\det {(A')}}
  = \frac{\det {(A\{i, B\})}}{\det {(A)}},
  \quad
  i = 1, 2, \dots, n.
\end{aligned}
\]

(2)
若 \(\det {(A)} = 0\)，
则 \(\det {(A')} = \det {(A)} = 0\)。
则 \(r < n\)。

若 \(b'_{r,n+1} \neq 0\)，
则方程组 @eq:sole-11 无解。
则方程组 @eq:sole-10 无解。

若 \(b'_{r,n+1} = 0\)，
则方程组 @eq:sole-11 有解。
则方程组 @eq:sole-10 有解。
因为 \(r < n\)，
方程组 @eq:sole-11 有不唯一的解。
则方程组 @eq:sole-10 有不唯一的解。
:::

我们进一步地讨论 REF 阵。

我们知道，我们能用行的倍加，变阵 \(A\) 为某 REF 阵 \(B\)。
不过，变 \(A\) 为 REF 阵的方式一般是不唯一的。
设我们也用行的倍加，变 \(A\) 为某 REF 阵 \(C\)。
我们研究 \(B\) 与 \(C\) 的关系。

设用若干次行的倍加，我们可变 \(m \times n\) 阵 \(A\)
为 REF 阵 \(B\)。
则存在形如 \(E(m; p, q; s)\)（\(p \neq q\)）的阵
\(E_1\)、\(E_2\)、\(\dots\)、\(E_u\)，
使
\[
\begin{aligned}
  B
  = E_u (E_{u-1} \dots (E_2 (E_1 A)))
  = (E_u E_{u-1} \dots E_2 E_1) A.
\end{aligned}
\]
类似地，
设用若干次行的倍加，我们可变 \(m \times n\) 阵 \(A\)
为 REF 阵 \(C\)。
则存在形如 \(E(m; p, q; s)\)（\(p \neq q\)）的阵
\(F_1\)、\(F_2\)、\(\dots\)、\(F_v\)，
使
\[
\begin{aligned}
  C
  = F_v (F_{v-1} \dots (F_2 (F_1 A)))
  = (F_v F_{v-1} \dots F_2 F_1) A.
\end{aligned}
\]
我们知道，对每个 \(E_i\)（或 \(F_j\)），
存在形如 \(E(m; p, q; s)\)（\(p \neq q\)）的阵
\(G_i\)（或 \(H_j\)），
使 \(G_i E_i = I_m\)
（或 \(H_j F_j = I_m\)）。
则
\[
\begin{aligned}
  (G_1 G_2 \dots G_{u-1} G_u) B
  = {} &
  (G_1 G_2 \dots G_{u-1} G_u)
  (E_u E_{u-1} \dots E_2 E_1) A
  \\
  = {} &
  (G_1 (G_2 (\dots (G_{u-1} (G_u E_u) E_{u-1}) \dots) E_2) E_1)
  A
  \\
  = {} &
  I_m A
  \\
  = {} &
  A.
\end{aligned}
\]
类似地，\((H_1 H_2 \dots H_{v-1} H_v) C = A\)。
则
\[
\begin{aligned}
  B
  = (E_u \dots E_1) A
  = (E_u \dots E_1) ((H_1 \dots H_v) C)
  = ((E_u \dots E_1) (H_1 \dots H_v)) C.
\end{aligned}
\]
则存在 \(m\) 级阵 \(P = (E_u \dots E_1) (H_1 \dots H_v)\)，
使 \(B = P C\)。
类似地，也存在 \(m\) 级阵
\(Q = (F_v \dots F_1) (G_1 \dots G_u)\)，
使 \(C = Q B\)。

由此，我们可以证明：

::: theorem
设 \(B\)、\(C\) 是 \(m \times n\) REF 阵。
记 \(k_i = \operatorname{pivot} {(B; i)}\)；
记 \(k'_i = \operatorname{pivot} {(C; i)}\)。
设 \(k_1 < k_2 < \dots < k_r < \infty\)，
且对 \(i > r\)，\(B\) 的行 \(i\) 是 \(0\)。
设 \(k'_1 \allowbreak
    < k'_2 \allowbreak
    < \dots \allowbreak
    < k'_{r'} \allowbreak
  < \infty\)，
且对 \(i' > r'\)，\(C\) 的行 \(i'\) 是 \(0\)。
设 \(m\) 级阵 \(P\)、\(Q\) 适合，
\(B = PC\)，且 \(C = QB\)。
则 \(r = r'\)，
且对 \(i \leqslant r\)，
\(k_i = k'_i\)。
:::

::: proof
我们证明，\(k_1 = k'_1\)。
为此，我们先证明，\(k_1 \geqslant k'_1\)。
反设 \(k_1 < k'_1\)。
\(C\) 是 REF 阵，且 \(k_1 < k'_1\)，
故若 \(v \geqslant 1\)，则 \([C]_{v,k_1} = 0\)。
\(B\) 是 REF 阵，故 \([B]_{1,k_1} \neq 0\)。
但
\[
\begin{aligned}
  [B]_{1,k_1}
  = {} &
  [P C]_{1,k_1}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m} {[P]_{1,v} [C]_{v,k_1}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m} {[P]_{1,v} 0}
  \\
  = {} &
  0.
\end{aligned}
\]
这是矛盾。
故 \(k_1 \geqslant k'_1\)。
类似地，由 \(C = Q B\)，
我们可证明，\(k_1 \leqslant k'_1\)。
则 \(k_1 = k'_1\)。

设我们已知 \(k_\ell = k'_\ell\)
（\(\ell = 1\)、\(\dots\)、\(t\)，
且 \(t < r\)，且 \(t < r'\)）。
我们由此证明，\(k_{t+1} = k'_{t+1}\)。
为此，我们先证明，\(k_{t+1} \geqslant k'_{t+1}\)。
反设 \(k_{t+1} < k'_{t+1}\)。
\(B\) 是 REF 阵，
故对 \(\ell \leqslant t\)，
\([B]_{t+1,k_\ell} = 0\)。
则
\[
\begin{aligned}
  0
  = {} &
  [B]_{t+1,k_\ell}
  \\
  = {} &
  [P C]_{t+1,k_\ell}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{t+1,v} [C]_{v,k_\ell}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{t+1,v} [C]_{v,k'_\ell}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[P]_{t+1,v} [C]_{v,k'_\ell}}
  +
  \sum_{\ell < v \leqslant m}
  {[P]_{t+1,v} [C]_{v,k'_\ell}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[P]_{t+1,v} [C]_{v,k'_\ell}}
  +
  \sum_{\ell < v \leqslant m}
  {[P]_{t+1,v} 0}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[C]_{v,k'_\ell} [P]_{t+1,v}}.
\end{aligned}
\]
则
\[
\begin{alignedat}{7}
  [C]_{1,k'_1} [P]_{t+1,1} &         &                          &         &       &         &                          & {} = 0, \\
  [C]_{1,k'_2} [P]_{t+1,1} & {} + {} & [C]_{2,k'_2} [P]_{t+1,2} &         &       &         &                          & {} = 0, \\
  {}                       &         &                          &         &       &         &                          & \dots,  \\
  [C]_{1,k'_t} [P]_{t+1,1} & {} + {} & [C]_{2,k'_t} [P]_{t+1,2} & {} + {} & \dots & {} + {} & [C]_{t,k'_t} [P]_{t+1,t} & {} = 0.
\end{alignedat}
\]
因为 \([C]_{\ell,k'_\ell} \neq 0\)，
我们可从前向后地确定，
\([P]_{t+1,1}\)、\([P]_{t+1,2}\)、\(\dots\)、\([P]_{t+1,t}\)
都是 \(0\)。
注意，\(C\) 是 REF 阵，
且 \(k_{t+1} < k'_{t+1}\)，
故若 \(v \geqslant t+1\)，
则 \([C]_{v,k_{t+1}} = 0\)。
注意，\([B]_{t+1,k_{t+1}} \neq 0\)。
但
\[
\begin{aligned}
  [B]_{t+1,k_{t+1}}
  = {} &
  [P C]_{t+1,k_{t+1}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{t+1,v} [C]_{v,k_{t+1}}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant t}
  {[P]_{t+1,v} [C]_{v,k_{t+1}}}
  +
  \sum_{t < v \leqslant m}
  {[P]_{t+1,v} [C]_{v,k_{t+1}}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant t}
  {0\, [C]_{v,k_{t+1}}}
  +
  \sum_{t < v \leqslant m}
  {[P]_{t+1,v} 0}
  \\
  = {} &
  0.
\end{aligned}
\]
这是矛盾。
故 \(k_{t+1} \geqslant k'_{t+1}\)。
类似地，由 \(C = Q B\)，
我们可证明，\(k_{t+1} \leqslant k'_{t+1}\)。
则 \(k_{t+1} = k'_{t+1}\)。

最后，我们证明，\(r = r'\)。
为此，我们先证明，\(r' \geqslant r\)。
反设 \(r' < r\)。
那么，由前面的讨论，对 \(\ell \leqslant r' < r\)，
\(k_\ell = k'_\ell\)。
\(B\) 是 REF 阵，
故对 \(\ell \leqslant r' < r\)，
\([B]_{r,k_\ell} = 0\)。
注意，对 \(v > r'\)，
\([C]_{v,j} = 0\)。
则
\[
\begin{aligned}
  0
  = {} &
  [B]_{r,k_\ell}
  \\
  = {} &
  [P C]_{r,k_\ell}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{r,v} [C]_{v,k_\ell}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant r'}
  {[P]_{r,v} [C]_{v,k_\ell}}
  +
  \sum_{r' < v \leqslant m}
  {[P]_{r,v} [C]_{v,k_\ell}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant r'}
  {[P]_{r,v} [C]_{v,k'_\ell}}
  +
  \sum_{r' < v \leqslant m}
  {[P]_{r,v} 0}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant r'}
  {[C]_{v,k'_\ell} [P]_{r,v}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[C]_{v,k'_\ell} [P]_{r,v}}
  +
  \sum_{\ell < v \leqslant r'}
  {[C]_{v,k'_\ell} [P]_{r,v}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[C]_{v,k'_\ell} [P]_{r,v}}
  +
  \sum_{\ell < v \leqslant r'}
  {0\, [P]_{r,v}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant \ell}
  {[C]_{v,k'_\ell} [P]_{r,v}}.
\end{aligned}
\]
则
\[
\begin{alignedat}{7}
  [C]_{1,k'_1} [P]_{r,1}    &         &                           &         &       &         &                             & {} = 0, \\
  [C]_{1,k'_2} [P]_{r,1}    & {} + {} & [C]_{2,k'_2} [P]_{r,2}    &         &       &         &                             & {} = 0, \\
  {}                        &         &                           &         &       &         &                             & \dots,  \\
  [C]_{1,k'_{r'}} [P]_{r,1} & {} + {} & [C]_{2,k'_{r'}} [P]_{r,2} & {} + {} & \dots & {} + {} & [C]_{r',k'_{r'}} [P]_{r,r'} & {} = 0.
\end{alignedat}
\]
因为 \([C]_{\ell,k'_\ell} \neq 0\)，
我们可从前向后地确定，
\([P]_{r,1}\)、\([P]_{r,2}\)、\(\dots\)、\([P]_{r,r'}\)
都是 \(0\)。
则
\[
\begin{aligned}
  [B]_{r,j}
  = {} &
  [P C]_{r,j}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{r,v} [C]_{v,j}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant r'}
  {[P]_{r,v} [C]_{v,j}}
  +
  \sum_{r' < v \leqslant m}
  {[P]_{r,v} [C]_{v,j}}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant r'}
  {0\, [C]_{v,j}}
  +
  \sum_{r' < v \leqslant m}
  {[P]_{r,v} 0}
  \\
  = {} &
  0.
\end{aligned}
\]
则 \(B\) 的行 \(r\) 是 \(0\)。
这是矛盾，因为 \([B]_{r,k_r} \neq 0\)。
故 \(r' \geqslant r\)。
类似地，由 \(C = Q B\)，
我们可证明，\(r \geqslant r'\)。
则 \(r = r'\)。
:::

值得提，我们也能如此证明，\(r = r'\)。
注意，
\(\operatorname{rank} {(B)}
  = \operatorname{rank} {(P C)}
\leqslant \operatorname{rank} {(C)}\)，
且
\(\operatorname{rank} {(C)}
  = \operatorname{rank} {(Q B)}
\leqslant \operatorname{rank} {(B)}\)，
故 \(\operatorname{rank} {(B)}
= \operatorname{rank} {(C)}\)。
回想，对 REF 阵 \(B\) 与 \(C\)，
\(B\) 有 \(r = \operatorname{rank} {(B)}\) 个非零行，
且 \(C\) 有 \(r' = \operatorname{rank} {(C)}\) 个非零行。
则 \(r = r'\)。
由此可见，秩（与行列式）是有用的工具。

进一步地，对 SREF 阵，

::: theorem
设 \(B\)、\(C\) 是 \(m \times n\) SREF 阵。
记 \(k_i = \operatorname{pivot} {(B; i)}\)；
记 \(k'_i = \operatorname{pivot} {(C; i)}\)。
设 \(k_1 < k_2 < \dots < k_r < \infty\)，
且对 \(i > r\)，\(B\) 的行 \(i\) 是 \(0\)。
设 \(k'_1 \allowbreak
    < k'_2 \allowbreak
    < \dots \allowbreak
    < k'_{r'} \allowbreak
  < \infty\)，
且对 \(i' > r'\)，\(C\) 的行 \(i'\) 是 \(0\)。
设 \(m\) 级阵 \(P\)、\(Q\) 适合，
\(B = PC\)，且 \(C = QB\)。
则 \(r = r'\)，
且对 \(i \leqslant r\)，
\(k_i = k'_i\)，
且对 \(i \leqslant r\)，
\(B\) 的行 \(i\) 是 \(C\) 的行 \(i\) 的
\([B]_{i,k_i} / [C]_{i,k_i}\) 倍。
:::

::: proof
SREF 阵是 REF 阵，
故由上个定理，我们再确定元的关系即可。

注意，\(C\) 是 SREF 阵。
则对 \(i\)、\(\ell \leqslant r\)，
\[
\begin{aligned}
  [B]_{i,k_\ell}
  = {} &
  [P C]_{i,k_\ell}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{i,v} [C]_{v,k_\ell}}
  \\
  = {} &
  [P]_{i,\ell} [C]_{\ell,k_\ell}
  +
  \sum_{\substack{1 \leqslant v \leqslant m \\ v \neq \ell}}
  {[P]_{i,v} [C]_{v,k_\ell}}
  \\
  = {} &
  [P]_{i,\ell} [C]_{\ell,k_\ell}
  +
  \sum_{\substack{1 \leqslant v \leqslant m \\ v \neq \ell}}
  {[P]_{i,v} 0}
  \\
  = {} &
  [P]_{i,\ell} [C]_{\ell,k_\ell}.
\end{aligned}
\]
当 \(i \neq \ell\) 时，\([B]_{i,k_\ell} = 0\)。
则当 \(i \neq \ell\) 时，\([P]_{i,\ell} = 0\)。
另一方面，我们取 \(\ell = i\)，
得 \([P]_{i,i} = [B]_{i,k_i} / [C]_{i,k_i}\)。
则当 \(i \leqslant r\) 时，
\[
\begin{aligned}
  [B]_{i,j}
  = {} &
  [P C]_{i,j}
  \\
  = {} &
  \sum_{1 \leqslant v \leqslant m}
  {[P]_{i,v} [C]_{v,j}}
  \\
  = {} &
  [P]_{i,i} [C]_{i,j}
  +
  \sum_{\substack{1 \leqslant v \leqslant m \\ v \neq i}}
  {[P]_{i,v} [C]_{v,j}}
  \\
  = {} &
  \frac{[B]_{i,k_i}}{[C]_{i,k_i}}
  [C]_{i,j}
  +
  \sum_{\substack{1 \leqslant v \leqslant m \\ v \neq i}}
  {0\, [C]_{v,j}}
  \\
  = {} &
  \frac{[B]_{i,k_i}}{[C]_{i,k_i}}
  [C]_{i,j}.
\end{aligned}
\]
:::

回想，我们定义了（列的）倍乘：
以某数乘阵的一列。
类似地，我们可考虑行的倍乘：
以数 \(s\) 乘 \(m \times n\) 阵 \(A\) 的行 \(q\)，
且不改变别的行，得阵 \(B\)。
则我们可类似地证明，
\(B = M(m; q; s) A\)。

若 \(s \neq 0\)，我们可以证明，
\(M(m; q; s^{-1}) M(m; q; s) = I_m\)：
考虑行 \(q\) 的元即可。
类似地，若 \(s \neq 0\)，
\(M(m; q; s) M(m; q; s^{-1}) = I_m\)。

若 \(s \neq 0\)，则对 \(m \times n\) 阵 \(A\)，
\[
\begin{aligned}
  \operatorname{rank} {(A)}
  \geqslant {} &
  \operatorname{rank} {(M(m; q; s) A)}
  \\
  \geqslant {} &
  \operatorname{rank}
  {(M(m; q; s^{-1}) (M(m; q; s) A))}
  \\
  = {} &
  \operatorname{rank}
  {((M(m; q; s^{-1}) M(m; q; s)) A)}
  \\
  = {} &
  \operatorname{rank} {(I_m A)}
  \\
  = {} &
  \operatorname{rank} {(A)}.
\end{aligned}
\]
故 \(\operatorname{rank} {(A)}
  \geqslant \operatorname{rank} {(M(m; q; s) A)}
\geqslant \operatorname{rank} {(A)}\)。
于是，以非零的数乘阵的一行不改变秩。
（类似地，以非零的数乘阵的一列不改变秩。）

类似地，我们可以证明，
以非零的数乘线性方程组的一个方程不改变它的解：
当 \(s \neq 0\) 时，
若
\(a_{q,1} c_1 + a_{q,2} c_2 + \dots + a_{q,n} c_n = b_q\)，
则
\((s a_{q,1}) c_1 + (s a_{q,2}) c_2 + \dots + (s a_{q,n}) c_n
= s b_q\)，
且若
\((s a_{q,1}) d_1 + (s a_{q,2}) d_2 + \dots + (s a_{q,n}) d_n
= s b_q\)，
则
\(a_{q,1} d_1 + a_{q,2} d_2 + \dots + a_{q,n} d_n = b_q\)。

::: definition
设 \(A\) 是 \(m \times n\) 阵。
设存在不高于 \(m\) 的非负整数 \(r\)，使：

(1)
对任何不高于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} < \infty;
\end{aligned}
\]

(2)
对任何低于 \(r\) 的正整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)}
  < \operatorname{pivot} {(A; i + 1)};
\end{aligned}
\]

(3)
对任何高于 \(r\) 且不高于 \(m\) 的整数 \(i\)，
\[
\begin{aligned}
  \operatorname{pivot} {(A; i)} = \infty;
\end{aligned}
\]

(4)
对任何不高于 \(r\) 的正整数 \(i\)，
与任何不高于 \(m\) 的正整数 \(\ell\)，
\[
\begin{aligned}
  [A]_{\ell,\operatorname{pivot} {(A; i)}} =
  \begin{cases}
    0, & \ell \neq i; \\
    1, & \ell = i.
  \end{cases}
\end{aligned}
\]

我们说，\(A\) 是 **RREF**
（<lang en>reduced row-echelon form</lang>）**阵**。
:::

注意，RREF 阵是 SREF 阵，
但 SREF 阵不一定是 RREF 阵。
比如，\([-1]\) 是 SREF 阵，但它不是 RREF 阵。

我们知道，我们可用行的倍加，
变一个阵为 SREF 阵。
类似地，

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
则我们可用行的倍加与行的倍乘
（且不以 \(0\) 乘阵的行），
变 \(A\) 为某 \(m \times n\) RREF 阵 \(D\)。
:::

::: proof
我们可用行的倍加，
变 \(A\) 为某 \(m \times n\) SREF 阵 \(B\)。
则存在非负整数 \(r\)，使
\[
\begin{aligned}
  \operatorname{pivot} {(B; 1)}
  < \operatorname{pivot} {(B; 2)}
  < \dots
  < \operatorname{pivot} {(B; r-1)}
  < \operatorname{pivot} {(B; r)}
  < \infty,
\end{aligned}
\]
且对 \(i > r\)，
\(B\) 的行 \(i\) 是 \(0\)，
且若 \(\ell \neq i\)，
则 \([B]_{\ell,\operatorname{pivot} {(B; i)}} = 0\)。
对 \(B\)，
我们分别地以
\(1/[B]_{i,\operatorname{pivot} {(B; i)}} \neq 0\)
乘行 \(i\)
（\(i = 1, 2, \dots, r\)），
得阵 \(D\)。
则 \(\operatorname{pivot} {(D; i)}
  = \operatorname{pivot} {(B; i)}\)，
且 \([D]_{i,\operatorname{pivot} {(D; i)}} = 1\)。
则 \(D\) 是 RREF 阵。
:::

::: example
设 SREF 阵
\[
\begin{aligned}
  G_2 =
  \begin{bmatrix}
    2 & 0  & 46  \\
    0 & -1 & -12 \\
  \end{bmatrix}.
\end{aligned}
\]
它不是 RREF 阵。
不过，对 \(G_2\)，
我们分别地以 \(1/2\)、\(-1\) 乘行 \(1\)、\(2\)，
得 RREF 阵
\[
G_3 =
\begin{bmatrix}
  1 & 0 & 23 \\
  0 & 1 & 12 \\
\end{bmatrix}.
\]
:::

注意，只作行的倍加不一定能变阵为 RREF 阵。

::: example
设 SREF 阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 0  \\
    0 & -1 \\
  \end{bmatrix}.
\end{aligned}
\]
我们说，我们不能只作行的倍加，
以变 \(A\) 为 RREF 阵。

反设，我们能只作行的倍加，
以变 \(A\) 为 RREF 阵 \(B\)。
则存在 \(2\) 级阵 \(P\)、\(Q\)，
使 \(B = P A\)，且 \(A = Q B\)。
注意，\(A\) 与 \(B\) 都是 SREF 阵。
则由前面的讨论，\(B\) 应形如
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         \\
    0         & [B]_{2,2} \\
  \end{bmatrix},
\end{aligned}
\]
其中，\([B]_{i,i} \neq 0\)。
\(B\) 是 RREF 阵，故
\([B]_{1,1} = [B]_{2,2} = 1\)。
则 \(\det {(B)} = 1\)。
注意，倍加不改变行列式，
但 \(\det {(A)} = -1 \neq \det {(B)}\)。
这是矛盾。
:::

由前面的讨论，对 RREF 阵，

::: theorem
设 \(B\)、\(B'\) 是 \(m \times n\) RREF 阵。
设 \(m\) 级阵 \(P\)、\(Q\) 适合，
\(B = P B'\)，且 \(B' = Q B\)。
则 \(B = B'\)。
:::

::: proof
RREF 阵是 SREF 阵。
则 \(\operatorname{pivot} {(B; i)}
  = \operatorname{pivot} {(B'; i)}\)，
且 \(B\)、\(B'\) 的非零行的数目相等
（其我们设是 \(r\)），
且对 \(i \leqslant r\)，
\(B\) 的行 \(i\) 是 \(B'\) 的行 \(i\) 的
\(1/1 = 1\) 倍
（注意，对 \(i \leqslant r\)，\(
      [B]_{i,\operatorname{pivot} {(B; i)}}
      = 1 = [B']_{i,\operatorname{pivot} {(B'; i)}}
  \)）。
对 \(i > r\)，
\(B\) 的行 \(i\) 与 \(B'\) 的行 \(i\) 都是 \(0\)。
则 \(B = B'\)。
:::

设 \(A\) 是 \(m \times n\) 阵。
设我们用行的倍加与行的倍乘
（且不以 \(0\) 乘阵的行，下同），
变 \(A\) 为某 \(m \times n\) RREF 阵 \(B\)。
设我们用行的倍加与行的倍乘，
变 \(A\) 为某 \(m \times n\) RREF 阵 \(B'\)。
则存在形如 \(E(m; p, q; s)\)（\(p \neq q\)）
或 \(M(m; q; s)\)（\(s \neq 0\)）的阵
\(C_1\)、\(C_2\)、\(\dots\)、\(C_u\)，
与 \(D_1\)、\(D_2\)、\(\dots\)、\(D_v\)，
使
\[
\begin{aligned}
  B  & = C_u (C_{u-1} \dots (C_2 (C_1 A)))
  = (C_u C_{u-1} \dots C_2 C_1) A,
  \\
  B' & = D_v (D_{v-1} \dots (D_2 (D_1 A)))
  = (D_v D_{v-1} \dots D_2 D_1) A.
\end{aligned}
\]
对每个 \(C_i\)（或 \(D_j\)），
存在形如 \(E(m; p, q; s)\)（\(p \neq q\)）
或 \(M(m; q; s)\)（\(s \neq 0\)）的阵
\(F_i\)（或 \(G_j\)），
使 \(F_i C_i = I_m\)
（或 \(G_j D_j = I_m\)）。
则，可以验证，
\[
\begin{aligned}
  (F_1 F_2 \dots F_{u-1} F_u) B
  = A
  = (G_1 G_2 \dots G_{v-1} G_v) B'.
\end{aligned}
\]
则
\[
\begin{aligned}
  B  & = (C_u \dots C_1) A
  = ((C_u \dots C_1) (G_1 \dots G_v)) B',
  \\
  B' & = (D_v \dots D_1) A
  = ((D_v \dots D_1) (F_1 \dots F_u)) B.
\end{aligned}
\]
则存在 \(m\) 级阵 \(P\)、\(Q\)，
使 \(B = P B'\)，且 \(B' = Q B\)。
故

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设我们用行的倍加与行的倍乘
（且不以 \(0\) 乘阵的行，下同），
变 \(A\) 为某 \(m \times n\) RREF 阵 \(B\)。
设我们用行的倍加与行的倍乘，
变 \(A\) 为某 \(m \times n\) RREF 阵 \(B'\)。
则 \(B = B'\)。
:::
