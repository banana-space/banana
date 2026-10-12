---
title: 线性方程组
---

在接下来的若干节里，我想用行列式讨论
线性方程组的解。
这是行列式的一个应用。
或许，您可以在这些讨论里体会到
“行列式是一个工具”
“行列式是方阵的一个属性”
的意思。
本节，我们学习一些基本的概念。

设 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\) 是 \(n\) 个常数，
\(c\) 是常数，
且 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是 \(n\) 个未知数。
我们说，形如
\[
\begin{aligned}
  a_1 x_1 + a_2 x_2 + \dots + a_n x_n + c
\end{aligned}
\]
的式是一个 **\(n\) 元 \({\leqslant} 1\) 次式**。
若 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
中有一个数不是 \(0\)，
我们说，这个式是一个 **\(n\) 元 \(1\) 次式**。
若 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)
全为 \(0\)，
那么，这个式就是一个常数。

形如
\[
\begin{aligned}
  a_1 x_1 + a_2 x_2 + \dots + a_n x_n + c = 0
\end{aligned}
\]
的方程是一个 **\(n\) 元 \({\leqslant} 1\) 次方程**。
不过，习惯地，我们移 \(0\) 次项 \(c\) 到等式的右边；
也就是，形如
\[
\begin{aligned}
  a_1 x_1 + a_2 x_2 + \dots + a_n x_n = b
\end{aligned}
\]
的方程也是一个 \(n\) 元 \({\leqslant} 1\) 次方程，
其中，\(b\) 就是常数 \(-c\)。
若我们不想强调未知数数 \(n\)，
我们说，这是一个 **\({\leqslant} 1\) 次方程**。
我们也可说，这是一个**线性方程**。

**由 \(m\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组**，
是形如
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
都是未知数。
若我们不想强调方程数 \(m\)，
我们可说，这是一个 **\(n\) 元 \({\leqslant} 1\) 次方程组**。
若我们不想强调未知数数 \(n\)，
我们可说，这是一个
**由 \(m\) 个 \({\leqslant} 1\) 次方程作成的方程组**。
既然 \({\leqslant} 1\) 次方程的另一个名字是线性方程，
我们也可说，这是一个**线性方程组**。

若数 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 适合
\[
\begin{aligned}
  a_{1,1} c_1 + a_{1,2} c_2 + \dots + a_{1,n} c_n & = b_1, \\
  a_{2,1} c_1 + a_{2,2} c_2 + \dots + a_{2,n} c_n & = b_2, \\
  & \dots, \\
  a_{m,1} c_1 + a_{m,2} c_2 + \dots + a_{m,n} c_n & = b_m,
\end{aligned}
\]
我们说，\((c_1, c_2, \dots, c_n)\)
是此方程组的一个**解**。
有时，我们也说，形如
\(x_1 = c_1\)，
\(x_2 = c_2\)，
\(\dots\)，
\(x_n = c_n\)
的 \(n\) 个等式（的联合）
是此方程组的一个解。

若 \(c_1 = c_2 = \dots = c_n = 0\)，
且 \((c_1, c_2, \dots, c_n)\) 是此方程组的一个解，
我们说，这是此方程组的**零解**。
若 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 不全为 \(0\)，
且 \((c_1, c_2, \dots, c_n)\) 是此方程组的一个解，
我们说，这是此方程组的一个**非零解**。

::: example
假定若干只鸡与若干只兔被关在某地。
假定每只鸡有 \(1\) 个头与 \(2\) 只腿；
假定每只兔有 \(1\) 个头与 \(4\) 只腿。
假定，我们知道，
这些鸡与兔一共有 \(35\) 个头与 \(94\) 只腿。
我们能由此算出鸡与兔的数目吗？

我们代数地思考此事。
设有 \(x_1\) 只鸡与 \(x_2\) 只兔。
那么，
这些鸡与兔
一共有 \(x_1 + x_2\) 个头与 \(2x_1 + 4x_2\) 只腿。
注意，这 \(2\) 个式都是 \(2\) 元 \({\leqslant} 1\) 次式。
我们可列出
由 \(2\) 个 \(2\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\left\{
\begin{aligned}
  x_1 + x_2   & = 35, \\
  2x_1 + 4x_2 & = 94.
\end{aligned}
\right.
\]
接下来的问题，就是解这个方程组。
不过，
此例的目的是使您了解概念。
我想在后面讲如何解这个方程组。

可以验证，\((23, 12)\) 是此方程组的一个解：
因为 \(23 + 12 = 35\)，
且 \(2 \cdot 23 + 4 \cdot 12 = 94\)。
因为 \(23\)、\(12\) 里有一个数不是 \(0\)，
故 \((23, 12)\) 是此方程组的一个非零解。
我们也可说，
\(x_1 = 23\)，
\(x_2 = 12\)
是此方程组的一个（非零）解。

不过，\((12, 23)\) 不是此方程组的一个解：
虽然 \(12 + 23 = 35\)，
但 \(2 \cdot 12 + 4 \cdot 23 = 116 \neq 94\)。
:::

::: example
考虑
由 \(2\) 个 \(3\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\left\{
\begin{aligned}
  x_1 + 2x_2 + 3x_3  & = 0, \\
  4x_1 + 5x_2 + 6x_3 & = 0.
\end{aligned}
\right.
\]
可以验证，对每个数 \(k\)，
\((k, -2k, k)\) 是此方程组的一个解：
\[
\begin{aligned}
  k + 2(-2k) + 3k  & = k - 4k + 3k = 0,   \\
  4k + 5(-2k) + 6k & = 4k - 10k + 6k = 0.
\end{aligned}
\]
当 \(k = 0\) 时，这是零解；
当 \(k \neq 0\) 时，因为
\(k\)、\(-2k\)、\(k\) 里有一个数 \(k\) 不是 \(0\)，
故这是一个非零解。

我们也可说，
\(x_1 = k\)，
\(x_2 = -2k\)，
\(x_3 = k\)
是此方程组的一个解。
:::

利用阵的积，我们可简单地写一个线性方程组。
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
    \vdots  & \vdots  & {}     & \vdots  \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n} \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    b_1 \\ b_2 \\ \vdots \\ b_m
  \end{bmatrix},
  \quad
  X =
  \begin{bmatrix}
    x_1 \\ x_2 \\ \vdots \\ x_n
  \end{bmatrix}.
\end{aligned}
\]
则，对不超过 \(m\) 的正整数 \(i\)，
\[
\begin{aligned}
  [B]_{i,1}
  = {} &
  b_i
  \\
  = {} &
  a_{i,1} x_1 + a_{i,2} x_2 + \dots + a_{i,n} x_n
  \\
  = {} &
  [A]_{i,1} [X]_{1,1} + [A]_{i,2} [X]_{2,1}
  + \dots + [A]_{i,n} [X]_{n,1}
  \\
  = {} &
  [AX]_{i,1}.
\end{aligned}
\]
注意，\(AX\) 的尺寸也是 \(m \times 1\)，故
\[
\begin{aligned}
  AX = B.
\end{aligned}
\]
所以，我们也说形如 \(AX = B\) 的阵等式
（\(X\) 的元是未知数，且 \(X\) 是恰有 \(1\) 列的阵）
是一个线性方程组。
相应地，若 \(n \times 1\) 阵 \(C\)
（其的元跟 \(X\) 的元相比，自然都是已知数）
适合 \(AC = B\)，
我们说，\(C\) 是此方程组的一个解；
若 \(C = 0\)
（也就是，\(C\) 的每个元都是 \(0\)）
是此方程组的一个解，
我们说，\(C\) 是此方程组的零解；
若不等于 \(0\) 的 \(C\)
（也就是，\(C\) 的一个元不是 \(0\)）
是此方程组的一个解，
我们说，\(C\) 是此方程组的一个非零解。

::: example
我们可改写
\[
\left\{
\begin{aligned}
  x_1 + x_2   & = 35, \\
  2x_1 + 4x_2 & = 94.
\end{aligned}
\right.
\]
为
\[
\begin{aligned}
  \begin{bmatrix}
    1 & 1 \\
    2 & 4 \\
  \end{bmatrix}
  \begin{bmatrix}
    x_1 \\
    x_2 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    35 \\
    94 \\
  \end{bmatrix}.
\end{aligned}
\]
可以验证，
\(
    C =
    \begin{bmatrix}
      23 \\
      12 \\
    \end{bmatrix}
  \)
是此方程组的一个非零解：
\(C \neq 0\)，且
\[
\begin{aligned}
  \begin{bmatrix}
    1 & 1 \\
    2 & 4 \\
  \end{bmatrix}
  \begin{bmatrix}
    23 \\
    12 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    1 \cdot 23 + 1 \cdot 12 \\
    2 \cdot 23 + 4 \cdot 12 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    35 \\
    94 \\
  \end{bmatrix}.
\end{aligned}
\]

不过，
\(
    D =
    \begin{bmatrix}
      12 \\
      23 \\
    \end{bmatrix}
  \)
不是此方程组的一个解：
\[
\begin{bmatrix}
  1 & 1 \\
  2 & 4 \\
\end{bmatrix}
\begin{bmatrix}
  12 \\
  23 \\
\end{bmatrix}
=
\begin{bmatrix}
  1 \cdot 12 + 1 \cdot 23 \\
  2 \cdot 12 + 4 \cdot 23 \\
\end{bmatrix}
=
\begin{bmatrix}
  35  \\
  116 \\
\end{bmatrix}
\neq
\begin{bmatrix}
  35 \\
  94 \\
\end{bmatrix}.
\]
:::

::: example
我们可改写
\[
\left\{
\begin{aligned}
  x_1 + 2x_2 + 3x_3  & = 0, \\
  4x_1 + 5x_2 + 6x_3 & = 0.
\end{aligned}
\right.
\]
为
\[
\begin{aligned}
  \begin{bmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
  \end{bmatrix}
  \begin{bmatrix}
    x_1 \\
    x_2 \\
    x_3 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    0 \\
    0 \\
  \end{bmatrix}.
\end{aligned}
\]
可以验证，对每个数 \(k\)，
\(
    C = k
    \begin{bmatrix}
      1  \\
      -2 \\
      1  \\
    \end{bmatrix}
  \)
是此方程组的一个解：
\[
\begin{aligned}
  \begin{bmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
  \end{bmatrix}
  \left(
    k
    \begin{bmatrix}
      1  \\
      -2 \\
      1  \\
    \end{bmatrix}
  \right)
  = {} &
  k
  \left(
    \begin{bmatrix}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
    \end{bmatrix}
    \begin{bmatrix}
      1  \\
      -2 \\
      1  \\
    \end{bmatrix}
  \right)
  \\
  = {} &
  k
  \begin{bmatrix}
    1 \cdot 1 + 2 \cdot (-2) + 3 \cdot 1 \\
    4 \cdot 1 + 5 \cdot (-2) + 6 \cdot 1 \\
  \end{bmatrix}
  \\
  = {} &
  k
  \begin{bmatrix}
    0 \\
    0 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    0 \\
    0 \\
  \end{bmatrix}.
\end{aligned}
\]
当 \(k = 0\) 时，它是零解；
当 \(k \neq 0\) 时，它是一个非零解。
:::

最后，有一件事，其值得提。
前面，我们写一个
由 \(m\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
为阵等式。
反过来，
设 \(A\) 是 \(m \times n\) 阵，
\(B\) 是 \(m \times 1\) 阵，
且 \(X\) 是未知的 \(n \times 1\) 阵。
那么，我们也可还原形如 \(AX = B\) 的阵等式为
由 \(m\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组。
比如，我们可写
\[
\begin{aligned}
  \begin{bmatrix}
    2 & 3  & -5 & 7  & 0   \\
    0 & 1  & 11 & 13 & -17 \\
    4 & -6 & 8  & -9 & 12  \\
  \end{bmatrix}
  \begin{bmatrix}
    x_1 \\
    x_2 \\
    x_3 \\
    x_4 \\
    x_5 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    7 \\
    8 \\
    9 \\
  \end{bmatrix}
\end{aligned}
\]
为
\[
\left\{
\begin{aligned}
  2x_1 + 3x_2 - 5x_3 + 7x_4         & = 7, \\
  x_2 + 11x_3 + 13x_4 - 17x_5       & = 8, \\
  4x_1 - 6x_2 + 8x_3 - 9x_4 + 12x_5 & = 9.
\end{aligned}
\right.
\]
（注意，我们未写系数为 \(0\) 的项。）
