---
title: 阵的积，分块地写
---

我们知道，若 \(B\) 是 \(s \times m\) 阵，
且 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
是 \(m \times 1\) 阵，
则
\[
\begin{aligned}
  B\,[a_1, a_2, \dots, a_n] = [Ba_1, Ba_2, \dots, Ba_n].
\end{aligned}
\]
通俗地，这是分块地写阵的积。
证明 \(\det {(BA)} = \det {(B)} \det {(A)}\)
（\(A\)、\(B\) 是同级的方阵）时，
我们用了此事，使推理更简单。

我要介绍另一个分块地写阵的积的方式。

::: theorem
设
\(A_{1,1}\)、\(A_{1,2}\)、\(A_{2,1}\)、\(A_{2,2}\)、
\(B_{1,1}\)、\(B_{1,2}\)、\(B_{2,1}\)、\(B_{2,2}\)
是阵。
设 \(A_{1,1}\)、\(A_{1,2}\) 都有 \(r_1\) 行；
设 \(A_{2,1}\)、\(A_{2,2}\) 都有 \(r_2\) 行；
设 \(A_{1,1}\)、\(A_{2,1}\) 都有 \(u_1\) 列；
设 \(A_{1,2}\)、\(A_{2,2}\) 都有 \(u_2\) 列。
设 \(B_{1,1}\)、\(B_{1,2}\) 都有 \(u_1\) 行；
设 \(B_{2,1}\)、\(B_{2,2}\) 都有 \(u_2\) 行；
设 \(B_{1,1}\)、\(B_{2,1}\) 都有 \(c_1\) 列；
设 \(B_{1,2}\)、\(B_{2,2}\) 都有 \(c_2\) 列。
作 \((r_1 + r_2) \times (u_1 + u_2)\) 阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    A_{1,1} & A_{1,2} \\
    A_{2,1} & A_{2,2} \\
  \end{bmatrix};
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    [A_{1,1}]_{i,j},
    & \text{\(i \leqslant r_1\), 且 \(j \leqslant u_1\)}; \\
    [A_{1,2}]_{i,j-u_1},
    & \text{\(i \leqslant r_1\), 且 \(j > u_1\)};    \\
    [A_{2,1}]_{i-r_1,j},
    & \text{\(i > r_1\), 且 \(j \leqslant u_1\)};    \\
    [A_{2,2}]_{i-r_1,j-u_1},
    & \text{\(i > r_1\), 且 \(j > u_1\)}.
  \end{cases}
\end{aligned}
\]
作 \((u_1 + u_2) \times (c_1 + c_2)\) 阵
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    B_{1,1} & B_{1,2} \\
    B_{2,1} & B_{2,2} \\
  \end{bmatrix};
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [B]_{i,j} =
  \begin{cases}
    [B_{1,1}]_{i,j},
    & \text{\(i \leqslant u_1\), 且 \(j \leqslant c_1\)}; \\
    [B_{1,2}]_{i,j-c_1},
    & \text{\(i \leqslant u_1\), 且 \(j > c_1\)};    \\
    [B_{2,1}]_{i-u_1,j},
    & \text{\(i > u_1\), 且 \(j \leqslant c_1\)};    \\
    [B_{2,2}]_{i-u_1,j-c_1},
    & \text{\(i > u_1\), 且 \(j > c_1\)}.
  \end{cases}
\end{aligned}
\]
因为 \(A\) 的列数等于 \(B\) 的行数，
故 \(AB\) 有意义。

记 \(C_{i,j} = A_{i,1} B_{1,j} + A_{i,2} B_{2,j}\)，
\(i\)、\(j = 1\)、\(2\)。
不难看出，\(C_{i,j}\) 是 \(r_i \times c_j\) 阵。
作 \((r_1+r_2) \times (c_1+c_2)\) 阵
\[
\begin{aligned}
  C =
  \begin{bmatrix}
    C_{1,1} & C_{1,2} \\
    C_{2,1} & C_{2,2} \\
  \end{bmatrix};
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [C]_{i,j} =
  \begin{cases}
    [C_{1,1}]_{i,j},
    & \text{\(i \leqslant r_1\), 且 \(j \leqslant c_1\)}; \\
    [C_{1,2}]_{i,j-c_1},
    & \text{\(i \leqslant r_1\), 且 \(j > c_1\)};    \\
    [C_{2,1}]_{i-r_1,j},
    & \text{\(i > r_1\), 且 \(j \leqslant c_1\)};    \\
    [C_{2,2}]_{i-r_1,j-c_1},
    & \text{\(i > r_1\), 且 \(j > c_1\)}.
  \end{cases}
\end{aligned}
\]
则 \(AB = C\)。

通俗地，
\[
\begin{aligned}
  \begin{bmatrix}
    A_{1,1} & A_{1,2} \\
    A_{2,1} & A_{2,2} \\
  \end{bmatrix}
  \begin{bmatrix}
    B_{1,1} & B_{1,2} \\
    B_{2,1} & B_{2,2} \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    A_{1,1} B_{1,1} + A_{1,2} B_{2,1}
    & A_{1,1} B_{1,2} + A_{1,2} B_{2,2} \\
    A_{2,1} B_{1,1} + A_{2,2} B_{2,1}
    & A_{2,1} B_{1,2} + A_{2,2} B_{2,2} \\
  \end{bmatrix}.
\end{aligned}
\]
于是，形式地，
分块地写阵的积与直接用定义写阵的积没有区别。
:::

::: proof
注意，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1+u_2}
  {[A]_{i,k} [B]_{k,j}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B]_{k,j}}.
\end{aligned}
\]

若 \(j \leqslant c_1\)，则
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B]_{k,j}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,1}]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,1}]_{k-u_1,j}}.
\end{aligned}
\]
当 \(i \leqslant r_1\) 时，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,1}]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,1}]_{k-u_1,j}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A_{1,1}]_{i,k} [B_{1,1}]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A_{1,2}]_{i,k-u_1} [B_{2,1}]_{k-u_1,j}}
  \\
  = {} &
  [A_{1,1} B_{1,1}]_{i,j}
  + [A_{1,2} B_{2,1}]_{i,j}
  \\
  = {} &
  [A_{1,1} B_{1,1} + A_{1,2} B_{2,1}]_{i,j}
  \\
  = {} &
  [C_{1,1}]_{i,j}
  \\
  = {} &
  [C]_{i,j}.
\end{aligned}
\]
当 \(i > r_1\) 时，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,1}]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,1}]_{k-u_1,j}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A_{2,1}]_{i-r_1,k} [B_{1,1}]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A_{2,2}]_{i-r_1,k-u_1} [B_{2,1}]_{k-u_1,j}}
  \\
  = {} &
  [A_{2,1} B_{1,1}]_{i-r_1,j}
  + [A_{2,2} B_{2,1}]_{i-r_1,j}
  \\
  = {} &
  [A_{2,1} B_{1,1} + A_{2,2} B_{2,1}]_{i-r_1,j}
  \\
  = {} &
  [C_{2,1}]_{i-r_1,j}
  \\
  = {} &
  [C]_{i,j}.
\end{aligned}
\]

若 \(j > c_1\)，则
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B]_{k,j}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B]_{k,j}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,2}]_{k,j-c_1}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,2}]_{k-u_1,j-c_1}}.
\end{aligned}
\]
当 \(i \leqslant r_1\) 时，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,2}]_{k,j-c_1}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,2}]_{k-u_1,j-c_1}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A_{1,1}]_{i,k} [B_{1,2}]_{k,j-c_1}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A_{1,2}]_{i,k-u_1} [B_{2,2}]_{k-u_1,j-c_1}}
  \\
  = {} &
  [A_{1,1} B_{1,2}]_{i,j-c_1}
  + [A_{1,2} B_{2,2}]_{i,j-c_1}
  \\
  = {} &
  [A_{1,1} B_{1,2} + A_{1,2} B_{2,2}]_{i,j-c_1}
  \\
  = {} &
  [C_{1,2}]_{i,j-c_1}
  \\
  = {} &
  [C]_{i,j}.
\end{aligned}
\]
当 \(i > r_1\) 时，
\[
\begin{aligned}
  [AB]_{i,j}
  = {} &
  \sum_{k=1}^{u_1}
  {[A]_{i,k} [B_{1,2}]_{k,j-c_1}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A]_{i,k} [B_{2,2}]_{k-u_1,j-c_1}}
  \\
  = {} &
  \sum_{k=1}^{u_1}
  {[A_{2,1}]_{i-r_1,k} [B_{1,2}]_{k,j-c_1}}
  +
  \sum_{k=u_1+1}^{u_1+u_2}
  {[A_{2,2}]_{i-r_1,k-u_1} [B_{2,2}]_{k-u_1,j-c_1}}
  \\
  = {} &
  [A_{2,1} B_{1,2}]_{i-r_1,j-c_1}
  + [A_{2,2} B_{2,2}]_{i-r_1,j-c_1}
  \\
  = {} &
  [A_{2,1} B_{1,2} + A_{2,2} B_{2,2}]_{i-r_1,j-c_1}
  \\
  = {} &
  [C_{2,2}]_{i-r_1,j-c_1}
  \\
  = {} &
  [C]_{i,j}.
\end{aligned}
\]
:::
