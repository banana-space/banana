---
title: Binet–Cauchy 公式（青春版）
---

设 \(A\)、\(B\) 都是 \(n\) 级阵。
那么，\(BA\) 当然也是 \(n\) 级阵。
\(A\)、\(B\)、\(BA\) 都是 \(n\) 级阵，
故，它们都有行列式。
本节，我们学习它们的行列式的关系。

::: theorem [Binet–Cauchy 公式，青春版]
设 \(A\)、\(B\) 都是 \(n\) 级阵。
则
\[
\begin{aligned}
  \det {(BA)} = \det {(B)} \det {(A)}.
\end{aligned}
\]
:::

我用一个例助您理解，此定理在说何。

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
不难算出
\[
\begin{aligned}
  AB =
  \begin{bmatrix}
    37  & 30  \\
    127 & 103 \\
  \end{bmatrix},
  \quad
  BA =
  \begin{bmatrix}
    55  & 38 \\
    123 & 85 \\
  \end{bmatrix}.
\end{aligned}
\]
可以看到，\(AB \neq BA\)。

不过，\(\det {(AB)} = \det {(BA)}\)。
一方面，我们可直接验证：
\[
\begin{aligned}
  & \det {(AB)} = 37 \cdot 103 - 127 \cdot 30 = 1; \\
  & \det {(BA)} = 55 \cdot 85 - 123 \cdot 38 = 1.
\end{aligned}
\]
另一方面，Binet–Cauchy 公式（青春版）指出，
\[
\begin{aligned}
  \det {(AB)}
  = {} & \det {(A)} \det {(B)} \\
  = {} & \det {(B)} \det {(A)} \\
  = {} & \det {(BA)},
\end{aligned}
\]
因为数的乘法是可换的。
:::

::: proof
考虑定义在全体 \(n\) 级阵上的函数
\(f(C) = \det {(BC)}\)，
其中，\(C = [c_1, c_2, \dots, c_n]\) 是 \(n\) 级阵。

(1)
\(f\) 是多线性的。
对任何不超过 \(n\) 的正整数 \(j\)，
任何 \(n-1\) 个 \(n \times 1\) 阵
\(c_1\)、\(\dots\)、\(c_{j-1}\)、
\(c_{j+1}\)、\(\dots\)、\(c_n\)，
任何 \(2\) 个 \(n \times 1\) 阵 \(x\)、\(y\)，
任何 \(2\) 个数 \(s\)、\(t\)，
\[
\begin{aligned}
  &
  f([\dots, c_{j-1}, sx + ty, c_{j+1}, \dots])
  \\
  = {} &
  \det {[\dots, Bc_{j-1}, B(sx + ty), Bc_{j+1}, \dots]}
  \\
  = {} &
  \det {[\dots, Bc_{j-1}, sBx + tBy, Bc_{j+1}, \dots]}
  \\
  = {} &
  s\det {[\dots, Bc_{j-1}, Bx, Bc_{j+1}, \dots]}
  + t\det {[\dots, Bc_{j-1}, By, Bc_{j+1}, \dots]}
  \\
  = {} &
  s f([\dots, c_{j-1}, x, c_{j+1}, \dots])
  + t f([\dots, c_{j-1}, y, c_{j+1}, \dots]).
\end{aligned}
\]
我们用到了阵的运算的律与行列式的多线性。

(2)
\(f\) 是交错性的。
因为若 \(c_1\)、\(c_2\)、\(\dots\)、\(c_n\) 中有 \(2\) 个相等，
则 \(Bc_1\)、\(Bc_2\)、\(\dots\)、\(Bc_n\) 中也有 \(2\) 个相等。
再利用行列式的交错性，
\(f(C) = \det {(BC)} = 0\)。

所以，对任何 \(n\) 级阵 \(A\)，
\(f(A) = f(I) \det {(A)}\)。
注意，\(BI = B\)，
故
\[
\det {(BA)} = f(A) = f(I) \det {(A)}
= \det {(B)} \det {(A)}.
\]
:::

或许，（方）阵的行列式与阵的积的定义是较复杂的，
跟阵的转置、加、减、数乘比。
不过，Binet–Cauchy 公式（的青春版）给出了一个关系：
\(2\) 个同级的方阵的积的行列式
等于这 \(2\) 个阵的行列式的积。
