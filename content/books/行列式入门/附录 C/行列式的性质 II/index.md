---
title: 行列式的性质
---

设 \(a_1\)、\(a_2\)、\(\dots\)、\(a_n\)、\(x\)、\(y\)
是 \(n+2\) 个 \(n \times 1\) 阵。
设 \(A = [a_1, a_2, \dots, a_n]\)。
设 \(s\) 是一个数。
行列式有如下性质：

(1) 一个方阵与它的转置的行列式相等。
    于是，我不必同时讲行的性质与列的性质，
    因为您总可用转置，
    变列的性质为行的性质
    （或变行的性质为列的性质）。

(2) 若一个阵的某一列是 \(2\) 组数的和，
    那么此阵的行列式等于 \(2\) 个阵的行列式的和，
    而这 \(2\) 个阵，除这一列以外，全与原阵的对应的列一样。
    用公式写，就是
    \[
        \begin{aligned}
          & \det {[\dots, a_{j-1}, x + y, a_{j+1}, \dots]}
          \\
          = {} & \det {[\dots, a_{j-1}, x, a_{j+1}, \dots]}
      + \det {[\dots, a_{j-1}, y, a_{j+1}, \dots]},
    \end{aligned}
    \]
其中，未写的列是不变的，下同。

(3) 以一个数乘阵的一列后得到的阵的行列式
    等于以此数乘原阵的行列式。
    用公式写，就是
    \[
    \begin{aligned}
      \det {[\dots, a_{j-1}, sx, a_{j+1}, \dots]}
      = s \det {[\dots, a_{j-1}, x, a_{j+1}, \dots]}.
    \end{aligned}
    \]

(4) 若一个阵有 \(2\) 列相同，则它的行列式为 \(0\)。

(5) 若交换一个阵的 \(2\) 列，则行列式变号。

(6) 若一个阵有 \(2\) 列成比例，则它的行列式为 \(0\)。
    （利用性质 (3) (4) 即知。）

(7) 若加一个阵的一列的倍于另一列，则行列式不变。
    （利用性质 (2) (6) 即知。）

(8) 单位阵的行列式是 \(1\)。

(9) 设 \(j\) 是不超过 \(n\) 的正整数。
    则
    \[
    \begin{aligned}
      \det {(A)} = \sum_{i = 1}^{n}
      {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
    \end{aligned}
    \]

不难看出，(2) (3) 的联合是多线性，
且 (4) 就是交错性。

这些性质是有用的。
我们看几个例。

::: example
设 \(n\) 级阵 \(A\) 适合，
当 \(1 \leqslant j < i \leqslant n\) 时，
\([A]_{i,j} = 0\)。
通俗地，
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    [A]_{1,1} & [A]_{1,2} & \cdots & [A]_{1,n-1}   & [A]_{1,n}   \\
    0         & [A]_{2,2} & \cdots & [A]_{2,n-1}   & [A]_{2,n}   \\
    \vdots    & \vdots    & \ddots & \vdots        & \vdots      \\
    0         & 0         & \cdots & [A]_{n-1,n-1} & [A]_{n-1,n} \\
    0         & 0         & \cdots & 0             & [A]_{n,n}   \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(A)}\)。

按列 \(1\) 展开，得
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \sum_{i=1}^{n}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}
  \\
  = {} &
  (-1)^{1+1} [A]_{1,1} \det {(A(1|1))}
  + \sum_{i=2}^{n}
  {(-1)^{i+1} [A]_{i,1} \det {(A(i|1))}}
  \\
  = {} &
  [A]_{1,1} \det {(A(1|1))}
  + \sum_{i=2}^{n}
  {(-1)^{i+1}\, 0 \det {(A(i|1))}}
  \\
  = {} &
  [A]_{1,1} \det {(A(1|1))}.
\end{aligned}
\]

不难看出，当 \(1 \leqslant j < i \leqslant n-1\) 时，
\([A(1|1)]_{i,j} = 0\)。
于是，类似地，
\[
\begin{aligned}
  \det {(A(1|1))}
  = [A(1|1)]_{1,1} \det {((A(1|1))(1|1))}
  = [A]_{2,2} \det {(A({1,2}|{1,2}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(A)}
  = [A]_{1,1} [A]_{2,2} \det {(A({1,2}|{1,2}))}.
\end{aligned}
\]

……

最后，我们得
\[
\begin{aligned}
  \det {(A)}
  = {} &
  [A]_{1,1} [A]_{2,2} \dots [A]_{n-1,n-1}
  \det {(A({1,2,\dots,n-1}|{1,2,\dots,n-1}))}
  \\
  = {} &
  [A]_{1,1} [A]_{2,2} \dots [A]_{n-1,n-1} [A]_{n,n}
  \\
  = {} &
  [A]_{1,1} [A]_{2,2} \dots [A]_{n,n}.
\end{aligned}
\]
:::

::: example
设 \(n\) 级阵 \(A\) 适合，
当 \(1 \leqslant i < j \leqslant n\) 时，
\([A]_{i,j} = 0\)。
通俗地，
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    [A]_{1,1}   & 0           & \cdots & 0             & 0         \\
    [A]_{2,1}   & [A]_{2,2}   & \cdots & 0             & 0         \\
    \vdots      & \vdots      & \ddots & \vdots        & \vdots    \\
    [A]_{n-1,1} & [A]_{n-1,2} & \cdots & [A]_{n-1,n-1} & 0         \\
    [A]_{n,1}   & [A]_{n,2}   & \cdots & [A]_{n,n-1}   & [A]_{n,n} \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(A)}\)。

不难看出，\(A\) 的转置 \(A^{\mathrm{T}}\) 适合，
当 \(1 \leqslant j < i \leqslant n\) 时，
\([A^{\mathrm{T}}]_{i,j} = [A]_{j,i} = 0\)。
由性质 (1) 与上例的结果，
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \det {(A^{\mathrm{T}})}
  \\
  = {} &
  [A^{\mathrm{T}}]_{1,1} [A^{\mathrm{T}}]_{2,2}
  \dots [A^{\mathrm{T}}]_{n,n}
  \\
  = {} &
  [A]_{1,1} [A]_{2,2} \dots [A]_{n,n}.
\end{aligned}
\]
:::

::: example
运用性质 (7)，可作出一些 \(0\)，使计算简单。
比如，
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    4 & 9 & 2 \\
    3 & 5 & 7 \\
    8 & 1 & 6 \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \det {
    \begin{bmatrix}
      4 & 9 & 2 + 9 \\
      3 & 5 & 7 + 5 \\
      8 & 1 & 6 + 1 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      4 & 9 & 2 + 9 + 4 \\
      3 & 5 & 7 + 5 + 3 \\
      8 & 1 & 6 + 1 + 8 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      4 & 9 & 15 \\
      3 & 5 & 15 \\
      8 & 1 & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      4 & 9 - 15 \cdot \frac{1}{15} & 15 \\
      3 & 5 - 15 \cdot \frac{1}{15} & 15 \\
      8 & 1 - 15 \cdot \frac{1}{15} & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      4 - 15 \cdot \frac{8}{15} & 8 & 15 \\
      3 - 15 \cdot \frac{8}{15} & 4 & 15 \\
      8 - 15 \cdot \frac{8}{15} & 0 & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      -4 & 8 & 15 \\
      -5 & 4 & 15 \\
      0  & 0 & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      -4 + 8 \cdot \frac{5}{4} & 8 & 15 \\
      -5 + 4 \cdot \frac{5}{4} & 4 & 15 \\
      0 + 0 \cdot \frac{5}{4}  & 0 & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      6 & 8 & 15 \\
      0 & 4 & 15 \\
      0 & 0 & 15 \\
    \end{bmatrix}
  }
  \\
  = {} &
  6 \cdot 4 \cdot 15
  \\
  = {} &
  360.
\end{aligned}
\]
我们用 \(3\) 级阵的行列式的公式验证结果：
\[
\begin{aligned}
  \det {(A)}
  = {} &
  4 \cdot 5 \cdot 6
  + 3 \cdot 1 \cdot 2
  + 8 \cdot 9 \cdot 7
  - 4 \cdot 1 \cdot 7
  - 3 \cdot 9 \cdot 6
  - 8 \cdot 5 \cdot 2
  \\
  = {} &
  120 + 6 + 504 - 28 - 162 - 80
  \\
  = {} & 360.
\end{aligned}
\]
:::

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    16 & 3  & 2  & 13 \\
    5  & 10 & 11 & 8  \\
    9  & 6  & 7  & 12 \\
    4  & 15 & 14 & 1  \\
  \end{bmatrix}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \det {
    \begin{bmatrix}
      16 & 3 - 2   & 2  & 13 \\
      5  & 10 - 11 & 11 & 8  \\
      9  & 6 - 7   & 7  & 12 \\
      4  & 15 - 14 & 14 & 1  \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      16 - 13 & 3 - 2   & 2  & 13 \\
      5 - 8   & 10 - 11 & 11 & 8  \\
      9 - 12  & 6 - 7   & 7  & 12 \\
      4 - 1   & 15 - 14 & 14 & 1  \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      3  & 1  & 2  & 13 \\
      -3 & -1 & 11 & 8  \\
      -3 & -1 & 7  & 12 \\
      3  & 1  & 14 & 1  \\
    \end{bmatrix}
  }.
\end{aligned}
\]
利用性质 (6) 可知，最后一个阵的行列式为 \(0\)。
所以，\(A\) 的行列式也是 \(0\)。

我们当然也可用
\(4\) 级阵的行列式的公式验证结果。
不过，这是复杂的。
首先，根据定义，
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \hphantom{{} + {}}
  (-1)^{1+1} [A]_{1,1} \det {(A(1|1))}
  + (-1)^{2+1} [A]_{2,1} \det {(A(2|1))}
  \\
  &
  + (-1)^{3+1} [A]_{3,1} \det {(A(3|1))}
  + (-1)^{4+1} [A]_{4,1} \det {(A(4|1))}.
\end{aligned}
\]
可算出
\[
\begin{aligned}
  & \det {(A(1|1))}
  = \det {
    \begin{bmatrix}
      10 & 11 & 8  \\
      6  & 7  & 12 \\
      15 & 14 & 1  \\
  \end{bmatrix}}
  = 136;             \\
  & \det {(A(2|1))}
  = \det {
    \begin{bmatrix}
      3  & 2  & 13 \\
      6  & 7  & 12 \\
      15 & 14 & 1  \\
  \end{bmatrix}}
  = -408;            \\
  & \det {(A(3|1))}
  = \det {
    \begin{bmatrix}
      3  & 2  & 13 \\
      10 & 11 & 8  \\
      15 & 14 & 1  \\
  \end{bmatrix}}
  = -408;            \\
  & \det {(A(4|1))}
  = \det {
    \begin{bmatrix}
      3  & 2  & 13 \\
      10 & 11 & 8  \\
      6  & 7  & 12 \\
  \end{bmatrix}}
  = 136.
\end{aligned}
\]
所以
\[
\det {(A)}
= 16 \cdot 136 - 5 \cdot (-408)
+ 9 \cdot (-408) - 4 \cdot 136
= 0.
\]
:::

::: example
设 \(x\)、\(y\) 是数。
作 \(n\) 级阵 \(A\) 如下：
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    x, & i = j;    \\
    y, & i \neq j.
  \end{cases}
\end{aligned}
\]
通俗地，
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    x      & y      & \cdots & y      & y      \\
    y      & x      & \cdots & y      & y      \\
    \vdots & \vdots & {}     & \vdots & \vdots \\
    y      & y      & \cdots & x      & y      \\
    y      & y      & \cdots & y      & x      \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(A)}\)。

加 \(A\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n-1\) 于列 \(n\)，
得 \(n\) 级阵
\[
\begin{aligned}
  A_1 =
  \begin{bmatrix}
    x      & y      & \cdots & y      & x + (n-1)y \\
    y      & x      & \cdots & y      & x + (n-1)y \\
    \vdots & \vdots & {}     & \vdots & \vdots     \\
    y      & y      & \cdots & x      & x + (n-1)y \\
    y      & y      & \cdots & y      & x + (n-1)y \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(A_1\) 的前 \(n-1\) 列
与 \(A\) 的前 \(n-1\) 列一样，
但 \(A_1\) 的列 \(n\) 的元全为 \(x + (n-1)y\)。
用 \(n-1\) 次性质 (7)，得
\(\det {(A)} = \det {(A_1)}\)。

作 \(n\) 级阵
\[
\begin{aligned}
  A_2 =
  \begin{bmatrix}
    x      & y      & \cdots & y      & 1      \\
    y      & x      & \cdots & y      & 1      \\
    \vdots & \vdots & {}     & \vdots & \vdots \\
    y      & y      & \cdots & x      & 1      \\
    y      & y      & \cdots & y      & 1      \\
  \end{bmatrix}.
\end{aligned}
\]
注意，\(A_2\) 的前 \(n-1\) 列
与 \(A_1\) 的前 \(n-1\) 列一样，
但 \(A_2\) 的列 \(n\) 的元全为 \(1\)。
由性质 (3)，
\(\det {(A)} = \det {(A_1)}
  = (x + (n-1)y) \det {(A_2)}\)。

加 \(A_2\) 的
列 \(n\) 的 \(-y\) 倍于列 \(1\)，
列 \(n\) 的 \(-y\) 倍于列 \(2\)，
……
列 \(n\) 的 \(-y\) 倍于列 \(n-1\)，
得 \(n\) 级阵
\[
\begin{aligned}
  A_3 =
  \begin{bmatrix}
    x-y    & 0      & \cdots & 0      & 1      \\
    0      & x-y    & \cdots & 0      & 1      \\
    \vdots & \vdots & {}     & \vdots & \vdots \\
    0      & 0      & \cdots & x-y    & 1      \\
    0      & 0      & \cdots & 0      & 1      \\
  \end{bmatrix}.
\end{aligned}
\]
用 \(n-1\) 次性质 (7)，得
\(\det {(A)}
    = (x + (n-1)y) \det {(A_2)}
  = (x + (n-1)y) \det {(A_3)}\)。
注意，
\(1 \leqslant j < i \leqslant n\) 时，
\([A_3]_{i,j} = 0\)。
故
\[
\begin{aligned}
  \det {(A_3)} = (x-y)^{n-1} \cdot 1 = (x-y)^{n-1}.
\end{aligned}
\]
故
\[
\det {(A)}
= (x + (n-1)y) \det {(A_3)}
= (x + (n-1)y) (x-y)^{n-1}.
\]
:::

::: example [Vandermonde 阵的行列式]
设 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是数。
作 \(n\) 级 Vandermonde 阵
\(V(x_1, x_2, \dots, x_n)\) 如下：
\[
\begin{aligned}
  [V(x_1, x_2, \dots, x_n)]_{i,j}
  = x_i^{j-1}.
\end{aligned}
\]
通俗地，
\[
\begin{aligned}
  V(x_1, x_2, \dots, x_n)
  =
  \begin{bmatrix}
    1      & x_1     & x_1^2     & \cdots & x_1^{n-2}     & x_1^{n-1}     \\
    1      & x_2     & x_2^2     & \cdots & x_2^{n-2}     & x_2^{n-1}     \\
    1      & x_3     & x_3^2     & \cdots & x_3^{n-2}     & x_3^{n-1}     \\
    \vdots & \vdots  & \vdots    & {}     & \vdots        & \vdots        \\
    1      & x_{n-1} & x_{n-1}^2 & \cdots & x_{n-1}^{n-2} & x_{n-1}^{n-1} \\
    1      & x_n     & x_n^2     & \cdots & x_n^{n-2}     & x_n^{n-1}     \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(V(x_1, x_2, \dots, x_n))}\)。

加 \(V(x_1, x_2, \dots, x_n)\) 的
列 \(n-1\) 的 \(-x_n\) 倍于列 \(n\)，
列 \(n-2\) 的 \(-x_n\) 倍于列 \(n-1\)，
……
列 \(1\) 的 \(-x_n\) 倍于列 \(2\)，
得 \(n\) 级阵
\[
\begin{aligned}
  & A
  \\
  = {} &
  \begin{bmatrix}
    1      & x_1 - x_n     & x_1^2 - x_1 x_n         & \cdots & x_1^{n-2} - x_1^{n-3} x_n         & x_1^{n-1} - x_1^{n-2} x_n         \\
    1      & x_2 - x_n     & x_2^2 - x_2 x_n         & \cdots & x_2^{n-2} - x_2^{n-3} x_n         & x_2^{n-1} - x_2^{n-2} x_n         \\
    1      & x_3 - x_n     & x_3^2 - x_3 x_n         & \cdots & x_3^{n-2} - x_3^{n-3} x_n         & x_3^{n-1} - x_3^{n-2} x_n         \\
    \vdots & \vdots        & \vdots                  & {}     & \vdots                            & \vdots                            \\
    1      & x_{n-1} - x_n & x_{n-1}^2 - x_{n-1} x_n & \cdots & x_{n-1}^{n-2} - x_{n-1}^{n-3} x_n & x_{n-1}^{n-1} - x_{n-1}^{n-2} x_n \\
    1      & 0             & 0                       & \cdots & 0                                 & 0                                 \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    1      & x_1 - x_n     & x_1 (x_1 - x_n)         & \cdots & x_1^{n-3} (x_1 - x_n)         & x_1^{n-2} (x_1 - x_n)         \\
    1      & x_2 - x_n     & x_2 (x_2 - x_n)         & \cdots & x_2^{n-3} (x_2 - x_n)         & x_2^{n-2} (x_2 - x_n)         \\
    1      & x_3 - x_n     & x_3 (x_3 - x_n)         & \cdots & x_3^{n-3} (x_3 - x_n)         & x_3^{n-2} (x_3 - x_n)         \\
    \vdots & \vdots        & \vdots                  & {}     & \vdots                        & \vdots                        \\
    1      & x_{n-1} - x_n & x_{n-1} (x_{n-1} - x_n) & \cdots & x_{n-1}^{n-3} (x_{n-1} - x_n) & x_{n-1}^{n-2} (x_{n-1} - x_n) \\
    1      & 0             & 0                       & \cdots & 0                             & 0                             \\
  \end{bmatrix};
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    1,
    & j = 1; \\
    x_i^{j-1} - x_i^{j-2} x_n
    = x_i^{j-2} (x_i - x_n),
    & j \geqslant 2.
  \end{cases}
\end{aligned}
\]
由性质 (7)，
\[
\begin{aligned}
  \det {(V(x_1, x_2, \dots, x_n))} = \det {(A)}.
\end{aligned}
\]

按行 \(n\) 展开，得
\[
\begin{aligned}
  \det {(V(x_1, x_2, \dots, x_n))}
  = \det {(A)}
  = (-1)^{n+1} \det {(B)},
\end{aligned}
\]
其中，\(B = A(n|1)\)，
且 \([B]_{i,j} = x_i^{j-1} (x_i - x_n)\)；
通俗地，
\[
\begin{aligned}
  B =
  \begin{bmatrix}
    x_1 - x_n     & x_1 (x_1 - x_n)         & \cdots & x_1^{n-3} (x_1 - x_n)         & x_1^{n-2} (x_1 - x_n)         \\
    x_2 - x_n     & x_2 (x_2 - x_n)         & \cdots & x_2^{n-3} (x_2 - x_n)         & x_2^{n-2} (x_2 - x_n)         \\
    x_3 - x_n     & x_3 (x_3 - x_n)         & \cdots & x_3^{n-3} (x_3 - x_n)         & x_3^{n-2} (x_3 - x_n)         \\
    \vdots        & \vdots                  & {}     & \vdots                        & \vdots                        \\
    x_{n-1} - x_n & x_{n-1} (x_{n-1} - x_n) & \cdots & x_{n-1}^{n-3} (x_{n-1} - x_n) & x_{n-1}^{n-2} (x_{n-1} - x_n) \\
  \end{bmatrix}.
\end{aligned}
\]

用 \(n-1\) 次性质 (3)（关于行），得
\[
\begin{aligned}
  \det {(B)}
  = {} &
  (x_1 - x_n) (x_2- x_n) \dots (x_{n-1} - x_n)
  \det {(V(x_1, x_2, \dots, x_{n-1}))}
  \\
  = {} &
  (-1)^{n-1} (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \det {(V(x_1, x_2, \dots, x_{n-1}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(V(x_1, x_2, \dots, x_n))}
  \\
  = {} &
  (-1)^{n+1} \det {(B)}
  \\
  = {} &
  (-1)^{n+1}
  (-1)^{n-1} (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \det {(V(x_1, x_2, \dots, x_{n-1}))}
  \\
  = {} &
  (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \det {(V(x_1, x_2, \dots, x_{n-1}))}.
\end{aligned}
\]

类似地，
\[
\begin{aligned}
  &
  \det {(V(x_1, x_2, \dots, x_{n-1}))}
  \\
  = {} &
  (x_{n-1} - x_1) (x_{n-1} - x_2) \dots (x_{n-1} - x_{n-2})
  \det {(V(x_1, x_2, \dots, x_{n-2}))}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(V(x_1, x_2, \dots, x_n))}
  = {} & \hphantom{\cdot\,\,}
  (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \\
  & \cdot
  (x_{n-1} - x_1) (x_{n-1} - x_2) \dots (x_{n-1} - x_{n-2})
  \\
  & \cdot
  \det {(V(x_1, x_2, \dots, x_{n-2}))}.
\end{aligned}
\]

……

最后，我们得
\[
\begin{aligned}
  \det {(V(x_1, x_2, \dots, x_n))}
  = {} & \hphantom{\cdot\,\,}
  (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \\
  & \cdot
  (x_{n-1} - x_1) (x_{n-1} - x_2) \dots (x_{n-1} - x_{n-2})
  \\
  & \cdot
  \dots
  \\
  & \cdot
  (x_3 - x_1) (x_3 - x_2)
  \\
  & \cdot
  (x_2 - x_1)
  \\
  & \cdot
  \det {(V(x_1))}
  \\
  = {} & \hphantom{\cdot\,\,}
  (x_n - x_1) (x_n - x_2) \dots (x_n - x_{n-1})
  \\
  & \cdot
  (x_{n-1} - x_1) (x_{n-1} - x_2) \dots (x_{n-1} - x_{n-2})
  \\
  & \cdot
  \dots
  \\
  & \cdot
  (x_3 - x_1) (x_3 - x_2)
  \\
  & \cdot
  (x_2 - x_1)
  \\
  & \cdot
  1
  \\
  = {} &
  \prod_{2 \leqslant v \leqslant n}
  {
    \prod_{1 \leqslant u \leqslant v-1} {(x_v - x_u)}
  }
  \\
  = {} &
  \prod_{1 \leqslant u < v \leqslant n} {(x_v - x_u)}.
\end{aligned}
\]

不难看出，
若 \(V(x_1, x_2, \dots, x_n)\) 的行列式非零，
则 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 互不相同；
反过来，
若 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 互不相同，
则 \(V(x_1, x_2, \dots, x_n)\) 的行列式非零。
:::

::: example
设 \(a_0\)、\(a_1\)、\(a_2\)、\(\dots\)、\(a_n\) 是 \(n+1\) 个数。
作 \(n\) 级阵 \(P(x; a_0; a_1, a_2, \dots, a_n)\) 如下：
\[
\begin{aligned}
  [P(x; a_0; a_1, a_2, \dots, a_n)]_{i,j} =
  \begin{cases}
    x,           & 1 \leqslant i = j \leqslant n-1;   \\
    -1,          & 1 \leqslant i-1 = j \leqslant n-1; \\
    a_{n-i+1},   & 1 \leqslant i \leqslant n-1 = j-1; \\
    a_0 x + a_1, & i = n = j;               \\
    0,           & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
通俗地，
\[
\begin{aligned}
  P(x; a_0; a_1, a_2, \dots, a_n)
  =
  \begin{bmatrix}
    x      & 0      & \cdots & 0      & 0      & a_n         \\
    -1     & x      & \cdots & 0      & 0      & a_{n-1}     \\
    0      & -1     & \cdots & 0      & 0      & a_{n-2}     \\
    \vdots & \vdots & {}     & \vdots & \vdots & \vdots      \\
    0      & 0      & \cdots & -1     & x      & a_2         \\
    0      & 0      & \cdots & 0      & -1     & a_0 x + a_1 \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(P(x; a_0; a_1, a_2, \dots, a_n))}\)。

注意，当 \(1 < j < n\) 时，
\([P(x; a_0; a_1, a_2, \dots, a_n)]_{1,j} = 0\)。
于是，按行 \(1\) 展开，得
\[
\begin{aligned}
  &
  \det {(P(x; a_0; a_1, a_2, \dots, a_n))}
  \\
  = {} &
  \hphantom{{} + {}}
  (-1)^{1+1} [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,1}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|1))}
  \\
  &
  + (-1)^{1+n} [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,n}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|n))}.
\end{aligned}
\]
不难写出，
\[
\begin{aligned}
  [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,1} = x,
  \quad
  [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,n} = a_n.
\end{aligned}
\]
不难写出，
\[
\begin{aligned}
  (P(x; a_0; a_1, a_2, \dots, a_n))(1|1)
  = {} &
  \begin{bmatrix}
    x      & \cdots & 0      & 0      & a_{n-1}     \\
    -1     & \cdots & 0      & 0      & a_{n-2}     \\
    \vdots & {}     & \vdots & \vdots & \vdots      \\
    0      & \cdots & -1     & x      & a_2         \\
    0      & \cdots & 0      & -1     & a_0 x + a_1 \\
  \end{bmatrix}
  \\
  = {} &
  P(x; a_0; a_1, a_2, \dots, a_{n-1}).
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|1))}
  = \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))}.
\end{aligned}
\]
不难写出，
\[
\begin{aligned}
  (P(x; a_0; a_1, a_2, \dots, a_n))(1|n)
  =
  \begin{bmatrix}
    -1     & x      & \cdots & 0      & 0      \\
    0      & -1     & \cdots & 0      & 0      \\
    \vdots & \vdots & {}     & \vdots & \vdots \\
    0      & 0      & \cdots & -1     & x      \\
    0      & 0      & \cdots & 0      & -1     \\
  \end{bmatrix};
\end{aligned}
\]
具体地，
\[
\begin{aligned}
  [(P(x; a_0; a_1, a_2, \dots, a_n))(1|n)]_{i,j} =
  \begin{cases}
    -1, & 1 \leqslant i = j \leqslant n-1;     \\
    x,  & 1 \leqslant i = j - 1 \leqslant n-2; \\
    0,  & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
故当 \(1 \leqslant j < i \leqslant n-1\) 时，
\([(P(x; a_0; a_1, a_2, \dots, a_n))(1|n)]_{i,j} = 0\)。
则
\[
\begin{aligned}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|n))}
  = (-1)^{n-1}.
\end{aligned}
\]

综上，
\[
\begin{aligned}
  &
  \det {(P(x; a_0; a_1, a_2, \dots, a_n))}
  \\
  = {} &
  \hphantom{{} + {}}
  (-1)^{1+1} [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,1}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|1))}
  \\
  &
  + (-1)^{1+n} [P(x; a_0; a_1, a_2, \dots, a_n)]_{1,n}
  \det {((P(x; a_0; a_1, a_2, \dots, a_n))(1|n))}
  \\
  = {} &
  x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))}
  + (-1)^{1+n} a_n (-1)^{n-1}
  \\
  = {} &
  x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))} + a_n.
\end{aligned}
\]

类似地，
\[
\begin{aligned}
  \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))}
  = x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-2}))} + a_{n-1}.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(P(x; a_0; a_1, a_2, \dots, a_n))}
  = {} &
  x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))} + a_n
  \\
  = {} &
  x (x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-2}))} + a_{n-1}) + a_n
  \\
  = {} &
  x^2 \det {(P(x; a_0; a_1, a_2, \dots, a_{n-2}))}
  + a_{n-1} x + a_n.
\end{aligned}
\]

……

最后，我们得
\[
\begin{aligned}
  &
  \det {(P(x; a_0; a_1, a_2, \dots, a_n))}
  \\
  = {} &
  x \det {(P(x; a_0; a_1, a_2, \dots, a_{n-1}))} + a_n
  \\
  = {} &
  x^2 \det {(P(x; a_0; a_1, a_2, \dots, a_{n-2}))} + a_{n-1} x + a_n
  \\
  = {} &
  \dots
  \\
  = {} &
  x^{n-1} \det {(P(x; a_0; a_1))} + a_2 x^{n-2} + \dots + a_{n-1} x + a_n
  \\
  = {} &
  x^{n-1} (a_0 x + a_1) + a_2 x^{n-2} + \dots + a_{n-1} x + a_n
  \\
  = {} &
  a_0 x^n + a_1 x^{n-1} + a_2 x^{n-2} + \dots + a_{n-1} x + a_n.
\end{aligned}
\]
:::

虽然我写了多的例，
我并不想在本书具体地介绍
如何计算一个阵的行列式。
这些例的目的是使您更好地理解行列式的性质。
若您想知道计算一个阵的行列式的更多的方法，
您可以见一些线性代数教材，
或者找相关的文献。
