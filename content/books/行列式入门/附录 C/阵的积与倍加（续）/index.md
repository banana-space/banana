---
title: 阵的积与倍加（续）
notices:
  - name: 问题
    items:
      - 第 4 个定理的证明末段（“最后，我们知道……”起）中的三处 $A_1$ 似乎应为 $A_2$：前 $m$ 列作成 $K$、后 $n - m$ 列为 $0$ 的是 $A_2$。
---

本节，我们进一步地讨论阵的积与（列的）倍加的关系。

回想，

::: theorem
设 \(A\) 是一个 \(m \times n\) 阵。
利用若干次（列的）倍加，
我们可变 \(A\) 为一个 \(m \times n\) 阵 \(B\)，
使当 \(i < j\) 时，
\([B]_{i,j} = 0\)。
:::

在本节，我们设 \(m \leqslant n\)。
于是，通俗地，对任何 \(m \times n\) 阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    [A]_{1,1}   & [A]_{1,2}   & \cdots & [A]_{1,m-1}   & [A]_{1,m}   & \cdots & [A]_{1,n}   \\
    [A]_{2,1}   & [A]_{2,2}   & \cdots & [A]_{2,m-1}   & [A]_{2,m}   & \cdots & [A]_{2,n}   \\
    \vdots      & \vdots      & {}     & \vdots        & \vdots      & {}     & \vdots      \\
    [A]_{m-1,1} & [A]_{m-1,2} & \cdots & [A]_{m-1,m-1} & [A]_{m-1,m} & \cdots & [A]_{m-1,n} \\
    [A]_{m,1}   & [A]_{m,2}   & \cdots & [A]_{m,m-1}   & [A]_{m,m}   & \cdots & [A]_{m,n}   \\
  \end{bmatrix},
\end{aligned}
\]
我们总可作列的倍加，变 \(A\) 为
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    [B]_{1,1}   & 0           & \cdots & 0             & 0         & {}         \\
    [B]_{2,1}   & [B]_{2,2}   & \cdots & 0             & 0         & {}         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots    & \mathsf{O} \\
    [B]_{m-1,1} & [B]_{m-1,2} & \cdots & [B]_{m-1,m-1} & 0         & {}         \\
    [B]_{m,1}   & [B]_{m,2}   & \cdots & [B]_{m,m-1}   & [B]_{m,m} & {}         \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(\mathsf{O}\) 表示 \(m \times (n - m)\) 零阵
（若 \(n > m\)）
或“无”（若 \(n = m\)）。

若 \([B]_{1,1}\)、\([B]_{2,2}\)、\(\dots\)、\([B]_{m,m}\)
都不是 \(0\)，
则我们可用列的倍加，进一步地变 \(B\) 为
\[
\begin{aligned}
  D =
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0         & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0         & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots    & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-1,m-1} & 0         & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m,m} & {}         \\
  \end{bmatrix};
\end{aligned}
\]
具体地，\(D\) 是 \(m \times n\) 阵，
且
\[
\begin{aligned}
  [D]_{i,j} =
  \begin{cases}
    [B]_{i,i}, & i = j;       \\
    0,         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]

注意，\([B]_{m,m} \neq 0\)。
我们加 \(B\) 的
列 \(m\) 的 \(-[B]_{m,m-1}/[B]_{m,m}\) 倍于列 \(m-1\)，
列 \(m\) 的 \(-[B]_{m,m-2}/[B]_{m,m}\) 倍于列 \(m-2\)，
……
列 \(m\) 的 \(-[B]_{m,1}/[B]_{m,m}\) 倍于列 \(1\)，
得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1}   & 0           & \cdots & 0             & 0             & 0         & {}         \\
    [B]_{2,1}   & [B]_{2,2}   & \cdots & 0             & 0             & 0         & {}         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots        & \vdots    & \mathsf{O} \\
    [B]_{m-2,1} & [B]_{m-2,2} & \cdots & [B]_{m-2,m-2} & 0             & 0         & {}         \\
    [B]_{m-1,1} & [B]_{m-1,2} & \cdots & [B]_{m-1,m-2} & [B]_{m-1,m-1} & 0         & {}         \\
    0           & 0           & \cdots & 0             & 0             & [B]_{m,m} & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
然后，注意，\([B]_{m-1,m-1} \neq 0\)。
我们加
列 \(m-1\) 的 \(-[B]_{m-1,m-2}/[B]_{m-1,m-1}\) 倍于列 \(m-2\)，
列 \(m-1\) 的 \(-[B]_{m-1,m-3}/[B]_{m-1,m-1}\) 倍于列 \(m-3\)，
……
列 \(m-1\) 的 \(-[B]_{m-1,1}/[B]_{m-1,m-1}\) 倍于列 \(1\)，
得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1}   & 0           & \cdots & 0             & 0             & 0         & {}         \\
    [B]_{2,1}   & [B]_{2,2}   & \cdots & 0             & 0             & 0         & {}         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots        & \vdots    & \mathsf{O} \\
    [B]_{m-2,1} & [B]_{m-2,2} & \cdots & [B]_{m-2,m-2} & 0             & 0         & {}         \\
    0           & 0           & \cdots & 0             & [B]_{m-1,m-1} & 0         & {}         \\
    0           & 0           & \cdots & 0             & 0             & [B]_{m,m} & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
……
最后，我们得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0         & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0         & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots    & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-1,m-1} & 0         & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m,m} & {}         \\
  \end{bmatrix}.
\end{aligned}
\]

进一步地，我们还可变 \(D\) 为
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    [B]_{1,1} [B]_{2,2} \dots [B]_{m,m} & 0      & \cdots & 0      & 0      & {}         \\
    0                                   & 1      & \cdots & 0      & 0      & {}         \\
    \vdots                              & \vdots & \ddots & \vdots & \vdots & \mathsf{O} \\
    0                                   & 0      & \cdots & 1      & 0      & {}         \\
    0                                   & 0      & \cdots & 0      & 1      & {}         \\
  \end{bmatrix};
\end{aligned}
\]
具体地，\(M\) 是 \(m \times n\) 阵，
且
\[
\begin{aligned}
  [M]_{i,j} =
  \begin{cases}
    [B]_{1,1} [B]_{2,2} \dots [B]_{m,m}, & i = j = 1;   \\
    [I_n]_{i,j},                         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]

我们加列 \(m\) 的 \((1 - [B]_{m,m})/[B]_{m,m}\) 倍于列 \(m-1\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0             & 0         & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0             & 0         & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots        & \vdots    & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & 0             & 0         & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m-1,m-1} & 0         & {}         \\
    0         & 0         & \cdots & 0             & 1-[B]_{m,m}   & [B]_{m,m} & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m-1\) 于列 \(m\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0             & 0             & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0             & 0             & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots        & \vdots        & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & 0             & 0             & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m-1,m-1} & [B]_{m-1,m-1} & {}         \\
    0         & 0         & \cdots & 0             & 1-[B]_{m,m}   & 1             & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m\) 的 \([B]_{m,m}-1\) 倍于列 \(m-1\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0                       & 0             & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0                       & 0             & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots                  & \vdots        & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & 0                       & 0             & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m-1,m-1} [B]_{m,m} & [B]_{m-1,m-1} & {}         \\
    0         & 0         & \cdots & 0             & 0                       & 1             & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m-1\) 的 \(-1/[B]_{m,m}\) 倍于列 \(m\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0                       & 0      & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0                       & 0      & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots                  & \vdots & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & 0                       & 0      & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m-1,m-1} [B]_{m,m} & 0      & {}         \\
    0         & 0         & \cdots & 0             & 0                       & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
为方便，记 \(d_2 = [B]_{m-1,m-1} [B]_{m,m}\)。
我们加列 \(m-1\) 的 \((1 - d_2)/d_2\) 倍于列 \(m-2\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0      & 0      & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0      & 0      & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots & \vdots & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & 0      & 0      & {}         \\
    0         & 0         & \cdots & 1 - d_2       & d_2    & 0      & {}         \\
    0         & 0         & \cdots & 0             & 0      & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m-2\) 于列 \(m-1\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0             & 0      & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0             & 0      & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots        & \vdots & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} & [B]_{m-2,m-2} & 0      & {}         \\
    0         & 0         & \cdots & 1 - d_2       & 1             & 0      & {}         \\
    0         & 0         & \cdots & 0             & 0             & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m-1\) 的 \(d_2 - 1\) 倍于列 \(m-2\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0                 & 0             & 0      & {}         \\
    0         & [B]_{2,2} & \cdots & 0                 & 0             & 0      & {}         \\
    \vdots    & \vdots    & \ddots & \vdots            & \vdots        & \vdots & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} d_2 & [B]_{m-2,m-2} & 0      & {}         \\
    0         & 0         & \cdots & 0                 & 1             & 0      & {}         \\
    0         & 0         & \cdots & 0                 & 0             & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
我们加列 \(m-2\) 的 \(-1/d_2\) 倍于列 \(m-1\)，得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0                                     & 0      & 0      & {}         \\
    0         & [B]_{2,2} & \cdots & 0                                     & 0      & 0      & {}         \\
    \vdots    & \vdots    & \ddots & \vdots                                & \vdots & \vdots & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-2,m-2} [B]_{m-1,m-1} [B]_{m,m} & 0      & 0      & {}         \\
    0         & 0         & \cdots & 0                                     & 1      & 0      & {}         \\
    0         & 0         & \cdots & 0                                     & 0      & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]
……
最后，我们得
\[
\begin{aligned}
  \begin{bmatrix}
    [B]_{1,1} [B]_{2,2} \dots [B]_{m,m} & 0      & \cdots & 0      & 0      & {}         \\
    0                                   & 1      & \cdots & 0      & 0      & {}         \\
    \vdots                              & \vdots & \ddots & \vdots & \vdots & \mathsf{O} \\
    0                                   & 0      & \cdots & 1      & 0      & {}         \\
    0                                   & 0      & \cdots & 0      & 1      & {}         \\
  \end{bmatrix}.
\end{aligned}
\]

综上，

::: theorem
设 \(m \leqslant n\)。
设 \(B\) 是形如

```math {@eq:lower-triangular-full-rank-V1}
\begin{bmatrix}
    [B]_{1,1}   & 0           & \cdots & 0             & 0         & {}         \\
    [B]_{2,1}   & [B]_{2,2}   & \cdots & 0             & 0         & {}         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots    & \mathsf{O} \\
    [B]_{m-1,1} & [B]_{m-1,2} & \cdots & [B]_{m-1,m-1} & 0         & {}         \\
    [B]_{m,1}   & [B]_{m,2}   & \cdots & [B]_{m,m-1}   & [B]_{m,m} & {}         \\
\end{bmatrix}
```

的 \(m \times n\) 阵，
其中，\(\mathsf{O}\) 表示 \(m \times (n - m)\) 零阵
（若 \(n > m\)）
或“无”（若 \(n = m\)），
且 \([B]_{1,1}\)、\([B]_{2,2}\)、\(\dots\)、\([B]_{m,m}\)
都不是 \(0\)；
具体地，当 \(i < j\) 时，\([B]_{i,j} = 0\)，
且 \([B]_{i,i} \neq 0\)（\(i = 1\)、\(\dots\)、\(m\)）。
则我们可用列的倍加，
变 \(B\) 为 \(m \times n\) 阵

```math {@eq:lower-triangular-full-rank-V2}
D =
\begin{bmatrix}
    [B]_{1,1} & 0         & \cdots & 0             & 0         & {}         \\
    0         & [B]_{2,2} & \cdots & 0             & 0         & {}         \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots    & \mathsf{O} \\
    0         & 0         & \cdots & [B]_{m-1,m-1} & 0         & {}         \\
    0         & 0         & \cdots & 0             & [B]_{m,m} & {}         \\
\end{bmatrix};
```

具体地，
\[
\begin{aligned}
  [D]_{i,j} =
  \begin{cases}
    [B]_{i,i}, & i = j;       \\
    0,         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
且进一步地，我们可用列的倍加，
变 \(D\) 为 \(m \times n\) 阵

```math {@eq:lower-triangular-full-rank-V3}
M =
\begin{bmatrix}
    [B]_{1,1} [B]_{2,2} \dots [B]_{m,m} & 0      & \cdots & 0      & 0      & {}         \\
    0                                   & 1      & \cdots & 0      & 0      & {}         \\
    \vdots                              & \vdots & \ddots & \vdots & \vdots & \mathsf{O} \\
    0                                   & 0      & \cdots & 1      & 0      & {}         \\
    0                                   & 0      & \cdots & 0      & 1      & {}         \\
\end{bmatrix};
```

具体地，
\[
\begin{aligned}
  [M]_{i,j} =
  \begin{cases}
    [B]_{1,1} [B]_{2,2} \dots [B]_{m,m}, & i = j = 1;   \\
    [I_n]_{i,j},                         & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
:::

自然地，我们问，给定 \(m \times n\) 阵 \(A\)（其中，\(m \leqslant n\)），
我们能否变 \(A\) 为形如
式 @eq:lower-triangular-full-rank-V1 的阵，
且 \([B]_{1,1}\)、\([B]_{2,2}\)、\(\dots\)、\([B]_{m,m}\)
都不是 \(0\)。
若这是可能的，
则我们也能变 \(A\) 为形如
式 @eq:lower-triangular-full-rank-V2 的阵，
且我们也能变 \(A\) 为形如
式 @eq:lower-triangular-full-rank-V3 的阵。

::: theorem
设 \(A\) 是 \(m\) 级阵，
且 \(\det {(A)} \neq 0\)。
则我们可用列的倍加，
变 \(A\) 为 \(m\) 级阵 \(M\)，
使
\[
\begin{aligned}
  [M]_{i,j} =
  \begin{cases}
    \det {(A)},  & i = j = 1;   \\
    [I_m]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
:::

::: proof
首先，我们可变 \(A\) 为 \(m\) 级阵
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    [B]_{1,1}   & 0           & \cdots & 0             & 0         \\
    [B]_{2,1}   & [B]_{2,2}   & \cdots & 0             & 0         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots    \\
    [B]_{m-1,1} & [B]_{m-1,2} & \cdots & [B]_{m-1,m-1} & 0         \\
    [B]_{m,1}   & [B]_{m,2}   & \cdots & [B]_{m,m-1}   & [B]_{m,m} \\
  \end{bmatrix}.
\end{aligned}
\]
注意，倍加不改变行列式。
则 \(\det {(A)} = \det {(B)}
  = [B]_{1,1} [B]_{2,2} \dots [B]_{m,m}\)。
因为 \(\det {(A)} \neq 0\)，
我们知道，
\([B]_{1,1}\)、\([B]_{2,2}\)、\(\dots\)、\([B]_{m,m}\)
都不是 \(0\)。
则由前面的讨论（\(n = m\)），
我们可用列的倍加，
变 \(A\) 为 \(m\) 级阵 \(M\)，
使
\[
[M]_{i,j} =
\begin{cases}
  \det {(A)},  & i = j = 1;   \\
  [I_m]_{i,j}, & \text{别的情形}.
\end{cases}
\]
:::

::: theorem
设 \(m \leqslant n\)。
设 \(m \times n\) 阵 \(A\)
有一个行列式不为 \(0\) 的 \(m\) 级子阵
\[
\begin{aligned}
  K = A\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,m}{j_1,j_2,\dots,j_m},
\end{aligned}
\]
其中，\(1 \leqslant j_1 < j_2 < \dots < j_m \leqslant n\)。
则我们可用列的倍加，
变 \(A\) 为 \(m \times n\) 阵 \(M\)，
使
\[
\begin{aligned}
  [M]_{i,j} =
  \begin{cases}
    \det {(K)},  & i = j = 1;   \\
    [I_n]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
:::

::: proof
若 \(n = m\)，则 \(K = A\)。
我们可用上个定理。

以下，我们设 \(n > m\)。
从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(j_2\)、\(\dots\)、\(j_m\) 后，
还剩 \(n - m\) 个数。
我们从小到大地叫这 \(n - m\) 个数为
\(j_{m+1}\)、\(\dots\)、\(j_n\)。

首先，我们说明，我们能用列的倍加，
变 \(A\) 为 \(m \times n\) 阵 \(A_1\)，
使
\[
\begin{aligned}
  [A_1]_{i,j_v} =
  \begin{cases}
    [A]_{i,j_v}, & v \leqslant m; \\
    0,           & v > m.
  \end{cases}
\end{aligned}
\]
设 \(v > m\)。
考虑方程组
\[
\left\{
\begin{aligned}
  [A]_{1,j_1} x_1 + [A]_{1,j_2} x_2 + \dots + [A]_{1,j_m} x_m & = [A]_{1,j_v}, \\
  [A]_{2,j_1} x_1 + [A]_{2,j_2} x_2 + \dots + [A]_{2,j_m} x_m & = [A]_{2,j_v}, \\
  & \dots, \\
  [A]_{m,j_1} x_1 + [A]_{m,j_2} x_2 + \dots + [A]_{m,j_m} x_m & = [A]_{m,j_v}.
\end{aligned}
\right.
\]
因为 \(\det {(K)} \neq 0\)，
由 Cramer 公式，
此方程组有解。
则存在数
\(c_{j_1,j_v}\)、\(c_{j_2,j_v}\)、\(\dots\)、\(c_{j_m,j_v}\)，
使
\[
\begin{aligned}
  [A]_{1,j_1} c_{j_1,j_v} + [A]_{1,j_2} c_{j_2,j_v} + \dots + [A]_{1,j_m} c_{j_m,j_v} & = [A]_{1,j_v}, \\
  [A]_{2,j_1} c_{j_1,j_v} + [A]_{2,j_2} c_{j_2,j_v} + \dots + [A]_{2,j_m} c_{j_m,j_v} & = [A]_{2,j_v}, \\
  & \dots, \\
  [A]_{m,j_1} c_{j_1,j_v} + [A]_{m,j_2} c_{j_2,j_v} + \dots + [A]_{m,j_m} c_{j_m,j_v} & = [A]_{m,j_v}.
\end{aligned}
\]
于是，若我们
加列 \(j_1\) 的 \(-c_{j_1,j_v}\) 倍于列 \(j_v\)，
加列 \(j_2\) 的 \(-c_{j_2,j_v}\) 倍于列 \(j_v\)，
……
加列 \(j_m\) 的 \(-c_{j_m,j_v}\) 倍于列 \(j_v\)，
则列 \(j_v\) 的元全为 \(0\)。
则我们可用列的倍加，变 \(A\) 为 \(A_1\)。

然后，我们用列的倍加，变 \(A_1\) 为
\(m \times n\) 阵 \(A_2\)，
使
\[
\begin{aligned}
  [A_2]_{i,v} =
  \begin{cases}
    [A_1]_{i,j_v} = [A]_{i,j_v}, & v \leqslant m; \\
    0,                           & v > m.
  \end{cases}
\end{aligned}
\]
若 \(j_m = m\)，
则 \(j_1\)、\(j_2\)、\(\dots\)、\(j_m\)
一定是 \(1\)、\(2\)、\(\dots\)、\(m\)。
则 \(A_1\) 已形如 \(A_2\)。

以下，我们设 \(j_m > m\)。
回想，\(3\) 次列的倍加“几乎”可交换阵的 \(2\) 列：
\[
\begin{aligned}
  (x, y)
  \to {} & (x + 1y, y) = (x + y, y)                \\
  \to {} & (x + y, y + (-1) (x + y)) = (x + y, -x) \\
  \to {} & (x + y + 1(-x), -x) = (y, -x),
\end{aligned}
\]
且
\[
\begin{aligned}
  (x, y)
  \to {} & (x, y + 1x) = (x, y + x)               \\
  \to {} & (x + (-1)(y + x), y + x) = (-y, y + x) \\
  \to {} & (-y, y + x + 1(-y)) = (-y, x).
\end{aligned}
\]
我们说明，
我们可用列的倍加，
使 \(A_1\) 的列 \(j_1\) 到列 \(1\) 的位置。

若 \(j_1 = 1\)，我们不变，取 \(P_1\) 为 \(A_1\)。

若 \(j_1 > 1\)，则 \(A_1\) 的列 \(1\) 一定是 \(0\)。
那么，我们用 \(3\) 次倍加，变 \(A_1\) 为
\(m \times n\) 阵 \(P_1\)，
其中，
\[
\begin{aligned}
  [P_1]_{i,t} =
  \begin{cases}
    [A_1]_{i,j_1},    & t = 1;       \\
    -[A_1]_{i,1} = 0, & t = j_1;     \\
    [A_1]_{i,t},      & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，我们其实交换了列 \(j_1\) 与列 \(1\)。

综上，我们可用倍加，
变 \(A_1\) 为 \(P_1\)，
使
\[
\begin{aligned}
  [P_1]_{i,t} =
  \begin{cases}
    [A_1]_{i,j_1}, & t = 1;       \\
    [A_1]_{i,1},   & t = j_1;     \\
    [A_1]_{i,t},   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
（注意，\(j_1\) 可以为 \(1\)。）

若 \(j_2 = 2\)，我们不变，取 \(P_2\) 为 \(P_1\)。

若 \(j_2 > 2\)，
则 \(P_1\) 的列 \(2\) 一定是 \(0\)：
若 \(j_1 > 2\)，
则 \(A_1\)、\(P_1\) 的列 \(2\) 都是 \(0\)；
若 \(j_1 = 2\)，
则在列的交换后，
\(P_1\) 的列 \(2\) 是 \(A_1\) 的列 \(1\)，
即 \(0\)。
那么，我们用 \(3\) 次倍加，变 \(P_1\) 为
\(m \times n\) 阵 \(P_2\)，
其中，
\[
\begin{aligned}
  [P_2]_{i,t} =
  \begin{cases}
    [P_1]_{i,j_2},    & t = 2;       \\
    -[P_1]_{i,2} = 0, & t = j_2;     \\
    [P_1]_{i,t},      & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
注意，我们其实交换了列 \(j_2\) 与列 \(2\)。

综上，我们也可用倍加，
变 \(P_1\) 为 \(P_2\)，
使
\[
\begin{aligned}
  [P_2]_{i,t} =
  \begin{cases}
    [P_1]_{i,j_2}, & t = 2;       \\
    [P_1]_{i,2},   & t = j_2;     \\
    [P_1]_{i,t},   & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
（注意，\(j_2\) 可以为 \(2\)。）

……

最后，我们知道，我们可作若干次倍加，
变 \(A\) 为 \(A_1\)。

注意，\(A_1\) 的前 \(m\) 列作成 \(K\)，
且 \(A_1\) 的后 \(n - m\) 列都是 \(0\)。
因为 \(\det {(K)} \neq 0\)，
由上个定理，
我们可用列的倍加，
变 \(K\) 为 \(m\) 级阵 \(N\)，
使
\[
\begin{aligned}
  [N]_{i,j} =
  \begin{cases}
    \det {(K)},  & i = j = 1;   \\
    [I_m]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
那么，我们也可用列的倍加，
变 \(A_1\) 为 \(m \times n\) 阵
\[
\begin{aligned}
  M =
  \begin{bmatrix}
    N & 0 \\
  \end{bmatrix},
\end{aligned}
\]
其中，\(0\) 是 \(m \times (n - m)\) 零阵。
则
\[
\begin{aligned}
  [M]_{i,j}
  = {} &
  \begin{cases}
    [N]_{1,1} = \det {(K)},
    & i = j = 1;
    \\
    [N]_{i,j} = [I_m]_{i,j} = [I_n]_{i,j},
    & \text{\(j \leqslant m\), 且 \((i, j) \neq (1, 1)\)};
    \\
    0 = [I_n]_{i,j},
    & j > m.
  \end{cases}
  \\
  = {} &
  \begin{cases}
    \det {(K)},  & i = j = 1;   \\
    [I_n]_{i,j}, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
:::

最后，我们看一个例。

::: example
我们知道，若 \(n\) 级阵 \(A\) 的行列式不为 \(0\)，
则我们可用列的倍加，
变 \(A\) 为 \(n\) 级阵 \(D\)，
使当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
不过，若 \(\det {(A)} = 0\)，会如何？
我们说，存在不能以列的倍加被变为这样的 \(D\) 的 \(A\)。

设 \(n \geqslant 3\)。
设 \(A\) 是这样的 \(n\) 级阵：
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    1,
    & \text{\((i,j) = (1,2)\) 或 \((1,3)\)
    或 \((2,1)\) 或 \((3,1)\)}; \\
    0,
    & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
\(A\) 的列 \(2\) 与列 \(3\) 相同，
故 \(\det {(A)} = 0\)。
我们说明，我们不能用列的倍加，
变 \(A\) 为 \(n\) 级阵 \(D\)，
使当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。

用反证法。
设我们能用列的倍加，
变 \(A\) 为 \(n\) 级阵 \(D\)，
使当 \(i \neq j\) 时，\([D]_{i,j} = 0\)。
那么，存在若干个形如
\(E(n; p, q; s)\)
（\(s\) 是一个数，
\(p\)、\(q\) 是不超过 \(n\) 的正整数，
且 \(p \neq q\)）
的阵
\(E_1\)、\(E_2\)、\(\dots\)、\(E_u\)，
使
\[
\begin{aligned}
  D = (((A E_1) E_2) \dots) E_u
  = A (E_1 E_2 \dots E_u).
\end{aligned}
\]
记 \(P = E_1 E_2 \dots E_u\)。
则 \(D = A P\)，且 \(\det {(P)} = 1\)。
不过，另一方面，
\[
\begin{aligned}
  [D]_{i,j}
  = {} &
  [A P]_{i,j}
  \\
  = {} &
  \sum_{\ell = 1}^{n} {[A]_{i,\ell} [P]_{\ell,j}}
  \\
  = {} &
  \sum_{\ell = 1}^{3} {[A]_{i,\ell} [P]_{\ell,j}}
  + \sum_{3 < \ell \leqslant n} {[A]_{i,\ell} [P]_{\ell,j}}
  \\
  = {} &
  [A]_{i,1} [P]_{1,j}
  + [A]_{i,2} [P]_{2,j}
  + [A]_{i,3} [P]_{3,j}
  + \sum_{3 < \ell \leqslant n} {0\, [P]_{\ell,j}}
  \\
  = {} &
  \begin{cases}
    [P]_{2,j} + [P]_{3,j}, & i = 1;                    \\
    [P]_{1,j},             & \text{\(i = 2\) 或 \(3\)}; \\
    0,                     & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
于是，当 \(j \neq 2\) 时，
\([P]_{1,j} = [D]_{2,j} = 0\)，
且当 \(j = 2\) 时，
\([P]_{1,j} = [D]_{3,2} = 0\)。
则 \(P\) 的行 \(1\) 的元全为 \(0\)。
这是矛盾。

注意，\(A = A^{\mathrm{T}}\)。
我们可类似地证，我们不能用行的倍加，
变 \(A\) 为 \(n\) 级阵 \(D'\)，
使当 \(i \neq j\) 时，\([D']_{i,j} = 0\)。

不过，我们能用列的倍加与行的倍加，
变 \(A\) 为 \(n\) 级阵 \(D''\)，
使当 \(i \neq j\) 时，\([D'']_{i,j} = 0\)。
比如，我们可验证，
\[
\begin{aligned}
  [E(n; 3, 2; -1) A E(n; 2, 3; -1)]_{i,j} =
  \begin{cases}
    1, & \text{\((i, j) = (1, 2)\) 或 \((2, 1)\)}; \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
记 \(A_1 = E(n; 3, 2; -1) A E(n; 2, 3; -1)\)。
则，我们可验证，
\[
\begin{aligned}
  [E(n; 1, 2; 1/2) A_1 E(n; 2, 1; 1/2)]_{i,j} =
  \begin{cases}
    1, &
    \text{\((i, j) = (1, 1)\) 或 \((1, 2)\) 或 \((2, 1)\)}; \\
    0, &
    \text{别的情形}.
  \end{cases}
\end{aligned}
\]
再记 \(A_2 = E(n; 1, 2; 1/2) A_1 E(n; 2, 1; 1/2)\)。
则，我们可验证，
\[
[E(n; 2, 1; -1) A_2 E(n; 1, 2; -1)]_{i,j} =
\begin{cases}
  1,  & \text{\((i, j) = (1, 1)\)}; \\
  -1, & \text{\((i, j) = (2, 2)\)}; \\
  0,  & \text{别的情形}.
\end{cases}
\]
:::
