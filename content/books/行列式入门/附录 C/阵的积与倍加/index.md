---
title: 阵的积与倍加
---

前面，在研究行列式的性质时，
我们引入了倍加：

::: definition [倍加]
设 \(A\) 是一个 \(m \times n\) 阵。
设 \(p\)、\(q\) 是 \(2\) 个不超过 \(n\) 的正整数，
且 \(p \neq q\)。
设 \(s\) 是一个数。
作 \(m \times n\) 阵 \(B\)，其中，
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [A]_{i,j},              & j \neq q; \\
    [A]_{i,q} + s[A]_{i,p}, & j = q.
  \end{cases}
\end{aligned}
\]
（通俗地，
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，
得阵 \(B\)。）
我们说，变 \(A\) 为 \(B\) 的行为是一次（列的）**倍加**。
:::

我们说，既有列的倍加，也有行的倍加。
具体地，加 \(A\) 的一行的倍于另一行，
且不改变别的行，是一次行的倍加。

回想，行列式有倍加不变性。
具体地，若加方阵 \(A\) 的一列（行）的倍于另一列（行），
且不改变别的列（行），得方阵 \(B\)，
则 \(\det {(B)} = \det {(A)}\)。

本节，我们讨论阵的积与倍加的关系。

设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\) 分别是
\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)。
则 \(A = [a_1, a_2, \dots, a_n]\)。
再设 \(n\) 级单位阵 \(I_n\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\) 分别是
\(e_1\)、\(e_2\)、\(\dots\)、\(e_n\)。
则 \(I_n = [e_1, e_2, \dots, e_n]\)。
由 \(A I_n = A\)，知
\[
\begin{aligned}
  [Ae_1, Ae_2, \dots, Ae_n]
  = A[e_1, e_2, \dots, e_n]
  = A I_n
  = A
  = [a_1, a_2, \dots, a_n].
\end{aligned}
\]
故 \([Ae_j]_{i,1}
  = [A I_n]_{i,j}
  = [A]_{i,j}
= [a_j]_{i,1}\)，
对任何不超过 \(n\) 的正整数 \(j\)，
与任何不超过 \(m\) 的正整数 \(i\)。
故 \(Ae_j = a_j\)，
对任何不超过 \(n\) 的正整数 \(j\)。

设 \(p \neq q\)。
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，得 \(m \times n\) 阵 \(B\)。
设 \(B\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\) 分别是
\(b_1\)、\(b_2\)、\(\dots\)、\(b_n\)。
则 \(B = [b_1, b_2, \dots, b_n]\)。
则 \(j \neq q\) 时，\(b_j = a_j\)，
且 \(b_q = a_q + s a_p\)。
则 \(j \neq q\) 时，
\[
\begin{aligned}
  B e_j = b_j = a_j = A e_j,
\end{aligned}
\]
且
\[
\begin{aligned}
  B e_q = b_q = a_q + s a_p = A e_q + s (A e_p) = A (e_q + s e_p).
\end{aligned}
\]
作 \(n\) 级阵
\(E(n; p, q; s) = [f_1, f_2, \dots, f_n]\)，
其中，
\[
\begin{aligned}
  f_j =
  \begin{cases}
    e_j,         & j \neq q; \\
    e_q + s e_p, & j = q.
  \end{cases}
\end{aligned}
\]
则 \(B e_j = A f_j\)，
对任何不超过 \(n\) 的正整数 \(j\)。
则
\[
\begin{aligned}
  B = BI_n = [B e_1, B e_2, \dots, B e_n]
  = [A f_1, A f_2, \dots, A f_n]
  = A E(n; p, q; s).
\end{aligned}
\]
不难写出
\[
\begin{aligned}
  [E(n; p, q; s)]_{i,j} =
  \begin{cases}
    s,           & \text{\(i = p\), 且 \(j = q\)}; \\
    [I_n]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
于是，我们得

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)。
设 \(s\) 是数。
作 \(n\) 级阵 \(E(n; p, q; s)\) 如下：
\[
\begin{aligned}
  [E(n; p, q; s)]_{i,j} =
  \begin{cases}
    s,           & \text{\(i = p\), 且 \(j = q\)}; \\
    [I_n]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
（通俗地，
加 \(I_n\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，得 \(n\) 级阵 \(E(n; p, q; s)\)。）
那么，
加 \(A\) 的列 \(p\) 的 \(s\) 倍于列 \(q\)，
且不改变别的列，得 \(m \times n\) 阵 \(A E(n; p, q; s)\)。
:::

::: proof
前面的说明就是一个证明。
当然，不考虑前面的说明，我们也可直接用阵的积的定义验证它。
我们的目标是，
\[
[A E(n; p, q; s)]_{i,j} =
\begin{cases}
  [A]_{i,j},              & j \neq q; \\
  [A]_{i,q} + s[A]_{i,p}, & j = q.
\end{cases}
\]
:::

列的倍加可用阵的积实现。
行的倍加当然也可用阵的积实现。
具体地：

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(p\)、\(q\) 是不超过 \(m\) 的正整数，
且 \(p \neq q\)。
设 \(s\) 是数。
作 \(m\) 级阵 \(E(m; q, p; s)\) 如下：
\[
\begin{aligned}
  [E(m; q, p; s)]_{i,j} =
  \begin{cases}
    s,           & \text{\(i = q\), 且 \(j = p\)}; \\
    [I_m]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
（通俗地，
加 \(I_m\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(m\) 级阵 \(E(m; q, p; s)\)。）
那么，
加 \(A\) 的行 \(p\) 的 \(s\) 倍于行 \(q\)，
且不改变别的行，得 \(m \times n\) 阵 \(E(m; q, p; s) A\)。
:::

::: proof
请允许我留它为您的习题。
我想给您一个提示：
证明此事的要点是验证
\[
[E(m; q, p; s) A]_{i,j} =
\begin{cases}
  [A]_{i,j},              & i \neq q; \\
  [A]_{q,j} + s[A]_{p,j}, & i = q.
\end{cases}
\]
:::

我再说几件事。
设 \(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)。

不难看出，\(E(n; p, q; s)\) 的行列式为 \(1\)：
这是对单位阵作一次倍加后得到的方阵，
且单位阵的行列式为 \(1\)。

不难验证，\(E(n; p, q; s)\) 的转置是
\(E(n; q, p; s)\)；
比较这 \(2\) 个阵的元即可。

注意，
当 \(n = 1\) 时，不存在不超过 \(n\)，
且互不相同的正整数 \(p\)、\(q\)。
不过，回想，不变也是倍加。
那么，我们约定，当 \(n = 1\) 时，
无论 \(p\)、\(q\)、\(s\) 是何，
\(E(n; p, q; s)\)，
即 \(E(1; p, q; s)\)，
表示且只表示 \(1\) 级单位阵 \(I_1 = [1]\)。

用阵的积表示倍加是好的。
我们知道，阵的积适合一些律，
故我们或可用阵的运算的律发现倍加的某些规律；
反过来，我们也或可用倍加发现阵的一些性质。
