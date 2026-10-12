---
title: 类行列式
---

前面，我们知道，若定义在全体 \(n\) 级阵上的函数 \(f\)
适合倍加不变性与多齐性，
则 \(f(A) = f(I) \det {(A)}\)。
我们用了 \(2\) 个方法证明此事：
一个方法证明 \(f\) 适合多线性，并使用已知的确定行列式的定理；
另一个方法不使用多线性，且不使用已知的确定行列式的定理。
后一个方法可被推广，得到确定“类行列式”的定理。
不过，我们先定义一类函数。

::: definition
设 \(m\) 是定义在数上的函数。
若 \(m(1) = 1\)，
且对任何数 \(s\)，\(t\)，\(m(st) = m(s)\, m(t)\)，
则 \(m\) 是**保乘的**。
:::

显然，恒等函数 \(m(t) = t\) 是保乘的。
若 \(k\) 是正整数，
由次方的性质，可以验证，
\(m(t) = t^k\) 也是保乘的。
此外，绝对值函数 \(m(t) = |t|\) 也是保乘的
（因为 \(|1| = 1\)，
且对任何数 \(a\)，\(b\)，\(|ab| = |a|\,|b|\)）。

::: theorem
设定义在全体 \(n\) 级阵上的函数 \(f\) 适合：

(1)
倍加不变性。

(2)
（多齐性的变体）
对任何不超过 \(n\) 的正整数 \(j\)，
任何 \(n-1\) 个 \(n \times 1\) 阵
\(a_1\)、\(\dots\)、\(a_{j-1}\)、
\(a_{j+1}\)、\(\dots\)、\(a_n\)，
任何 \(n \times 1\) 阵 \(x\)，
任何数 \(s\)，
\[
\begin{aligned}
  f([a_1, \dots, a_{j-1}, sx, a_{j+1}, \dots, a_n])
  = m(s) f([a_1, \dots, a_{j-1}, x, a_{j+1}, \dots, a_n]),
\end{aligned}
\]
其中，定义在数上的函数 \(m\) 是保乘的：
\(m(1) = 1\)，
且对任何数 \(s\)，\(t\)，\(m(st) = m(s)\, m(t)\)。

那么，对任何 \(n\) 级阵 \(A\)，
\(f(A) = f(I)\, m(\det {(A)})\)。
:::

为证明此事，我们先证如下命题。

::: theorem
设定义在全体 \(n\) 级阵上的函数 \(f\)
适合倍加不变性，与多齐性的变体。
设 \(A\) 是一个 \(n\) 级阵，
且当 \(i < j\) 时，\([A]_{i,j} = 0\)。
则 \(f(A) = f(I_n)\, m(\det {(A)})\)。
:::

::: proof
我们用数学归纳法证明此事。
具体地，设 \(P(n)\) 为命题

> 设定义在全体 \(n\) 级阵上的函数 \(f\)
> 适合倍加不变性，与多齐性的变体。
> 设 \(A\) 是一个 \(n\) 级阵，
> 且当 \(i < j\) 时，\([A]_{i,j} = 0\)。
> 则 \(f(A) = f(I_n)\, m(\det {(A)})\)。

则，我们的目标是，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 显然是对的。

假定 \(P(n-1)\) 是对的。
我们由此证 \(P(n)\) 也是对的。

任取一个 \(n\) 级阵 \(A\)。
设当 \(i < j\) 时，\([A]_{i,j} = 0\)。
所以，\(A\) 形如
\[
\begin{aligned}
  \begin{bmatrix}
    [A]_{1,1}   & 0           & \cdots & 0             & 0         \\
    [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots    \\
    [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0         \\
    [A]_{n,1}   & [A]_{n,2}   & \cdots & [A]_{n,n-1}   & [A]_{n,n} \\
  \end{bmatrix}
\end{aligned}
\]
那么，由多齐性的变体，
\[
\begin{aligned}
  f(A) = m([A]_{n,n})
  f\left(
    \begin{bmatrix}
      [A]_{1,1}   & 0           & \cdots & 0             & 0      \\
      [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0      \\
      \vdots      & \vdots      & \ddots & \vdots        & \vdots \\
      [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0      \\
      [A]_{n,1}   & [A]_{n,2}   & \cdots & [A]_{n,n-1}   & 1      \\
    \end{bmatrix}
  \right).
\end{aligned}
\]
利用 \(n-1\) 次倍加不变性，
\[
\begin{aligned}
  &
  f\left(
    \begin{bmatrix}
      [A]_{1,1}   & 0           & \cdots & 0             & 0      \\
      [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0      \\
      \vdots      & \vdots      & \ddots & \vdots        & \vdots \\
      [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0      \\
      [A]_{n,1}   & [A]_{n,2}   & \cdots & [A]_{n,n-1}   & 1      \\
    \end{bmatrix}
  \right)
  \\
  = {} &
  f\left(
    \begin{bmatrix}
      [A]_{1,1}   & 0           & \cdots & 0             & 0      \\
      [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0      \\
      \vdots      & \vdots      & \ddots & \vdots        & \vdots \\
      [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0      \\
      0           & 0           & \cdots & 0             & 1      \\
    \end{bmatrix}
  \right),
\end{aligned}
\]
故
\[
\begin{aligned}
  f(A) =
  f\left(
    \begin{bmatrix}
      [A]_{1,1}   & 0           & \cdots & 0             & 0      \\
      [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0      \\
      \vdots      & \vdots      & \ddots & \vdots        & \vdots \\
      [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0      \\
      0           & 0           & \cdots & 0             & 1      \\
    \end{bmatrix}
  \right)
  m([A]_{n,n}).
\end{aligned}
\]

考虑定义在全体 \(n-1\) 级阵上的函数
\[
\begin{aligned}
  g(X)
  =
  f\left(
    \begin{bmatrix}
      [X]_{1,1}   & [X]_{1,2}   & \cdots & [X]_{1,n-1}   & 0      \\
      [X]_{2,1}   & [X]_{2,2}   & \cdots & [X]_{2,n-1}   & 0      \\
      \vdots      & \vdots      & {}     & \vdots        & \vdots \\
      [X]_{n-1,1} & [X]_{n-1,2} & \cdots & [X]_{n-1,n-1} & 0      \\
      0           & 0           & \cdots & 0             & 1      \\
    \end{bmatrix}
  \right).
\end{aligned}
\]
不难验证，\(g\) 适合倍加不变性，与多齐性的变体。
注意，若 \(i < j\)，
则 \(A(n|n)\) 的 \((i, j)\)-元为 \(0\)。
故，由假定，
\[
\begin{aligned}
  g(A(n|n)) = g(I_{n-1})\, m(\det {(A(n|n))})
  = f(I_n)\, m(\det {(A(n|n))}).
\end{aligned}
\]
从而
\[
\begin{aligned}
  &
  f\left(
    \begin{bmatrix}
      [A]_{1,1}   & 0           & \cdots & 0             & 0      \\
      [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0      \\
      \vdots      & \vdots      & \ddots & \vdots        & \vdots \\
      [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0      \\
      0           & 0           & \cdots & 0             & 1      \\
    \end{bmatrix}
  \right)
  \\
  = {} &
  g(A(n|n)) = f(I_n)\, m(\det {(A(n|n))}).
\end{aligned}
\]
则
\[
\begin{aligned}
  f(A)
  = {} & f(I_n)\, m(\det {(A(n|n))}) \,m([A]_{n,n}) \\
  = {} & f(I_n)\, m(\det {(A(n|n))} \,[A]_{n,n})    \\
  = {} & f(I_n)\, m(\det {(A)}).
\end{aligned}
\]

所以，\(P(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::

有了这些准备，我们即可证明本节的主要结论。

::: proof
设定义在全体 \(n\) 级阵上的函数 \(f\)
适合倍加不变性，与多齐性的变体。

任取一个 \(n\) 级阵 \(A\)。
利用若干次倍加，
我们可变 \(A\) 为一个 \(n\) 级阵 \(B\)，
使当 \(i < j\) 时，\([B]_{i,j} = 0\)。
因为倍加不变性，\(f(B) = f(A)\)。
由上个定理，\(f(B) = f(I)\, m(\det {(B)})\)。
故 \(f(A) = f(I)\, m(\det {(B)})
  = f(I)\, m(\det {(A)})\)。
（反过来，不难验证，若我们定义
\(f(A) = f(I)\, m(\det {(A)})\)，
则 \(f\) 适合倍加不变性，与多齐性的变体。）
:::

特别地，取 \(m\) 为绝对值函数，我们得

::: theorem
设定义在全体 \(n\) 级阵上的函数 \(f\) 适合：

(1)
倍加不变性。

(2)
对任何不超过 \(n\) 的正整数 \(j\)，
任何 \(n-1\) 个 \(n \times 1\) 阵
\(a_1\)、\(\dots\)、\(a_{j-1}\)、
\(a_{j+1}\)、\(\dots\)、\(a_n\)，
任何 \(n \times 1\) 阵 \(x\)，
任何数 \(s\)，
\[
\begin{aligned}
  f([a_1, \dots, a_{j-1}, sx, a_{j+1}, \dots, a_n])
  = |s| f([a_1, \dots, a_{j-1}, x, a_{j+1}, \dots, a_n]).
\end{aligned}
\]

那么，对任何 \(n\) 级阵 \(A\)，
\(f(A) = f(I)\, |{\det {(A)}}|\)。
:::

设您在研究某数学问题。
设您发现，您研究的一个量可被认为是定义在 \(n\) 级阵上的函数
（\(n\) 是某个正整数），
且适合倍加不变性，与多齐性的变体。
那么，由本节的定理，它是一个跟行列式有关的量。
这不是偶然的；这是必然的。
这是好的，我想。
