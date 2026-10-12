---
title: '由 \(n\) 个 \(n\) 元 \(\leq 1\) 次方程作成的方程组 (1)'
---

前面，我们学习了线性方程组的一些基本的概念。
我们知道，可用阵等式简单地写一个线性方程组
（或者，形如 \(AX = B\) 的阵等式就是一个线性方程组）。
本节，我们讨论
由 \(n\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组。
用阵等式表示这类方程组，
就是 \(AX = B\)，
其中，\(A\) 是 \(n\) 级阵，
\(B\) 是 \(n \times 1\) 阵，
且 \(X\) 是未知的 \(n \times 1\) 阵。
\(A\) 是方阵，故它有行列式。
\(AX = B\) 的解跟 \(A\) 的行列式是否有关系？
此事的回答是“是”。
我们讨论一个特别的情形。
这会是有用的。

::: theorem [Cramer 公式，1]
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(B\) 是 \(n \times 1\) 阵。
设 \(X\) 是未知的 \(n \times 1\) 阵。
若 \(\det {(A)} \neq 0\)，
则线性方程组 \(AX = B\) 有唯一的解
\[
\begin{aligned}
  X = (\det {(A)})^{-1} \operatorname{adj} {(A)}\,B.
\end{aligned}
\]
:::

在论证此事前，我想用一个简单的例助您理解它。

::: example
设 \(a\)、\(b\) 是常数。
一个 \(1\) 元 \({\leqslant} 1\) 次方程
\(ax = b\)
当然也是一个线性方程组：
这是方程数为 \(1\) 时的特别情形。
我们在中学就知道，当 \(a \neq 0\) 时，
\(ax = b\) 有唯一的解 \(x = a^{-1} b\)。
一方面，\(x = a^{-1} b\) 是一个解：
\[
\begin{aligned}
  a (a^{-1} b)
  = (a\, a^{-1}) b
  = 1b
  = b.
\end{aligned}
\]
另一方面，若数 \(y\) 也适合 \(ay = b\)，则
\[
\begin{aligned}
  y
  = 1y
  = (a^{-1} a)y
  = a^{-1} (ay)
  = a^{-1} b.
\end{aligned}
\]

我们说，此事是 Cramer 公式的一个特例。
我们可写 \(ax = b\)
为阵等式 \([a]\, [x] = [b]\)。
（注意，\([a]\)、\([x]\)、\([b]\) 都是 \(1\) 级阵。）
Cramer 公式说，若 \(\det {[a]} \neq 0\)，
则 \([a]\, [x] = [b]\)
有唯一的解
（注意，\(1\) 级阵的古伴是 \([1]\)）
\[
\begin{aligned}
  [x] = (\det {[a]})^{-1}
  \operatorname{adj} {([a])}\,[b]
  = a^{-1}\, [1]\,[b]
  = a^{-1}\, [b]
  = [ a^{-1} b ].
\end{aligned}
\]
这跟我们已知的结论是一样的。
:::

::: proof
我们先验证
\(C = (\det {(A)})^{-1} \operatorname{adj} {(A)}\,B\)
适合 \(AC = B\)：
\[
\begin{aligned}
  AC
  = {} & A\,
  ((\det {(A)})^{-1} \operatorname{adj} {(A)}\, B)
  \\
  = {} & (\det {(A)})^{-1} (A\operatorname{adj} {(A)}\, B)
  \\
  = {} & (\det {(A)})^{-1} (\det {(A)}\, I_n B)
  \\
  = {} & ((\det {(A)})^{-1} \det {(A)})\, (I_n B)
  \\
  = {} & B.
\end{aligned}
\]

我们再证 \(AX = B\) 至多有一个解。
设 \(n \times 1\) 阵 \(D\) 也适合 \(AD = B\)。
则
\[
\begin{aligned}
  D
  = {} & ((\det {(A)})^{-1} \det {(A)})\, (I_n D)
  \\
  = {} & (\det {(A)})^{-1} (\det {(A)}\, I_n) D
  \\
  = {} & (\det {(A)})^{-1} (\operatorname{adj} {(A)}\, A) D
  \\
  = {} & (\det {(A)})^{-1} \operatorname{adj} {(A)}\, (AD)
  \\
  = {} & (\det {(A)})^{-1} \operatorname{adj} {(A)}\,B
  \\
  = {} & C.
\end{aligned}
\]
:::

::: example
考虑线性方程组 \(AX = B\)，
其中，
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 1 \\
    2 & 4 \\
  \end{bmatrix},
  \quad
  B =
  \begin{bmatrix}
    35 \\
    94 \\
  \end{bmatrix},
  \quad
  X =
  \begin{bmatrix}
    x_1 \\
    x_2 \\
  \end{bmatrix}.
\end{aligned}
\]
不难算出
\[
\begin{aligned}
  \det {(A)} = 1 \cdot 4 - 2 \cdot 1 = 2 \neq 0,
\end{aligned}
\]
所以，此方程组有唯一的解
\[
\begin{aligned}
  X
  = {} &
  (\det {(A)})^{-1} \operatorname{adj} {(A)}\,B
  \\
  = {} &
  \frac{1}{2}
  \begin{bmatrix}
    4  & -1 \\
    -2 & 1  \\
  \end{bmatrix}
  \begin{bmatrix}
    35 \\
    94 \\
  \end{bmatrix}
  =
  \frac{1}{2}
  \begin{bmatrix}
    4 \cdot 35 - 1 \cdot 94  \\
    -2 \cdot 35 + 1 \cdot 94 \\
  \end{bmatrix}
  \\
  = {} &
  \frac{1}{2}
  \begin{bmatrix}
    46 \\
    24 \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    23 \\
    12 \\
  \end{bmatrix}.
\end{aligned}
\]
:::

我们可进一步地改写 Cramer 公式。
我们先具体地算出
\(\operatorname{adj} {(A)}\,B\) 的每个元：
\[
\begin{aligned}
  [\operatorname{adj} {(A)}\,B]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[\operatorname{adj} {(A)}]_{i,\ell} [B]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+i} \det {(A(\ell|i))}\, [B]_{\ell,1}}.
\end{aligned}
\]
设 \(A \{i, B\}\) 是
以 \(B\) 代阵 \(A\) 的列 \(i\) 后得到的阵。
则
\[
\begin{aligned}
  [A \{i, B\}]_{\ell,k} =
  \begin{cases}
    [A]_{\ell,k}, & k \neq i; \\
    [B]_{\ell,1}, & k = i.
  \end{cases}
\end{aligned}
\]
由此可见，
\(A(\ell|i) = (A \{i, B\})(\ell|i)\)
（\(\ell = 1\)、\(2\)、\(\dots\)、\(n\)）。
所以
\[
\begin{aligned}
  &
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+i} \det {(A(\ell|i))}\, [B]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+i} \det {((A \{i, B\})(\ell|i))}\,
  [A \{i, B\}]_{\ell,i}}
  \\
  = {} &
  \det {(A \{i, B\})}.
\end{aligned}
\]
从而
\[
\begin{aligned}
  [X]_{i,1}
  = {} &
  [(\det {(A)})^{-1} \operatorname{adj} {(A)}\,B]_{i,1}
  \\
  = {} &
  (\det {(A)})^{-1}\, [\operatorname{adj} {(A)}\,B]_{i,1}
  \\
  = {} &
  (\det {(A)})^{-1} \det {(A \{i, B\})}
  \\
  = {} &
  \frac{\det {(A \{i, B\})}}{\det {(A)}}.
\end{aligned}
\]
由此，我们得到 Cramer 公式的另一个形式：

::: theorem [Cramer 公式，2]
设线性方程组
\[
\left\{
\begin{aligned}
  a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,n} x_n & = b_1, \\
  a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,n} x_n & = b_2, \\
  & \dots, \\
  a_{n,1} x_1 + a_{n,2} x_2 + \dots + a_{n,n} x_n & = b_n.
\end{aligned}
\right.
\]
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
若 \(\det {(A)} \neq 0\)，
则此线性方程组有唯一的解
\[
\begin{aligned}
  x_i = \frac{\det {(A \{i, B\})}}{\det {(A)}},
  \quad
  \text{\(i = 1\), \(2\), \(\dots\), \(n\)},
\end{aligned}
\]
其中，\(A \{i, B\}\) 是
以 \(B\) 代阵 \(A\) 的列 \(i\) 后得到的阵。
:::

::: example
考虑由 \(2\) 个 \(2\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\left\{
\begin{aligned}
  a_{1,1} x_1 + a_{1,2} x_2 & = b_1, \\
  a_{2,1} x_1 + a_{2,2} x_2 & = b_2.
\end{aligned}
\right.
\]
根据 Cramer 公式，若
\(\det {
      \begin{bmatrix}
        a_{1,1} & a_{1,2} \\
        a_{2,1} & a_{2,2} \\
      \end{bmatrix}
    }
  = a_{1,1} a_{2,2} - a_{2,1} a_{1,2} \neq 0\)，
则此方程组有唯一的解
\[
\begin{aligned}
  x_1
  = \frac{\det {
      \begin{bmatrix}
        b_{1} & a_{1,2} \\
        b_{2} & a_{2,2} \\
      \end{bmatrix}
  }}{\det {
      \begin{bmatrix}
        a_{1,1} & a_{1,2} \\
        a_{2,1} & a_{2,2} \\
      \end{bmatrix}
  }}
  = \frac{b_1 a_{2,2} - b_2 a_{1,2}}
  {a_{1,1} a_{2,2} - a_{2,1} a_{1,2}},
  \\
  x_2
  = \frac{\det {
      \begin{bmatrix}
        a_{1,1} & b_{1} \\
        a_{2,1} & b_{2} \\
      \end{bmatrix}
  }}{\det {
      \begin{bmatrix}
        a_{1,1} & a_{1,2} \\
        a_{2,1} & a_{2,2} \\
      \end{bmatrix}
  }}
  = \frac{a_{1,1} b_2 - a_{2,1} b_1}
  {a_{1,1} a_{2,2} - a_{2,1} a_{1,2}}.
\end{aligned}
\]
:::

::: example
考虑线性方程组
\[
\left\{
\begin{aligned}
  x_1 + x_2   & = 35, \\
  2x_1 + 4x_2 & = 94.
\end{aligned}
\right.
\]
因为
\(\det {
      \begin{bmatrix}
        1 & 1 \\
        2 & 4 \\
      \end{bmatrix}
    }
  = 1 \cdot 4 - 2 \cdot 1 = 2 \neq 0\)，
故，
此方程组有唯一的解
\[
\begin{aligned}
  x_1
  = \frac{\det {
      \begin{bmatrix}
        35 & 1 \\
        94 & 4 \\
      \end{bmatrix}
  }}{\det {
      \begin{bmatrix}
        1 & 1 \\
        2 & 4 \\
      \end{bmatrix}
  }}
  = \frac{35 \cdot 4 - 94 \cdot 1}{2} = 23,
  \\
  x_2
  = \frac{\det {
      \begin{bmatrix}
        1 & 35 \\
        2 & 94 \\
      \end{bmatrix}
  }}{\det {
      \begin{bmatrix}
        1 & 1 \\
        2 & 4 \\
      \end{bmatrix}
  }}
  = \frac{1 \cdot 94 - 2 \cdot 35}{2} = 12.
\end{aligned}
\]
:::

一般地，Cramer 公式只是一个理论的公式。
这是因为，一般地，计算行列式是复杂的事
（或许，您还记得，
\(3\) 级阵的行列式的具体的公式含 \(6\) 项，
且 \(4\) 级阵的行列式的具体的公式含 \(24\) 项）。
所以，我们一般用别的方法
（如代入消元法、加减消元法）
解线性方程组。

还是以
\[
\left\{
\begin{aligned}
  x_1 + x_2   & = 35, \\
  2x_1 + 4x_2 & = 94
\end{aligned}
\right.
\]
为例。
由方程 \(1\)，\(x_1 = 35 - x_2\)。
代入它到方程 \(2\)，得
\(2(35 - x_2) + 4x_2 = 94\)，
即 \(2x_2 = 24\)。
由此可知 \(x_2 = 12\)。
代入它到 \(x_1 = 35 - x_2\)，
得 \(x_1 = 23\)。
最后，可验证，\((23, 12)\) 的确是此方程组的一个解。
