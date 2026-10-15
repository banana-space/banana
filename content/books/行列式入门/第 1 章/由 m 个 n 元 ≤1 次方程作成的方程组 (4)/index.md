---
title: '由 \(m\) 个 \(n\) 元 \(\leq 1\) 次方程作成的方程组 (4)'
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

前面，我们得到了线性方程组的解的定性的理论：

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作一个 \(m \times (n+1)\) 阵 \(G\)，
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
（通俗地，在 \(A\) 的最后一列的右边加入一列 \(B\)，
得到尺寸较大的阵 \(G\)。）
设
\(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。

(1) 若 \(G\) 也没有行列式非零的 \(r+1\) 级子阵，
    则 \(AX = B\) 有解。
    进一步地，若 \(r < n\)，
    则 \(AX = B\) 的解不唯一；
    若 \(r = n\)，
    则 \(AX = B\) 的解唯一。

(2) 若 \(G\) 有一个行列式非零的 \(r+1\) 级子阵，
    则 \(AX = B\) 无解。
:::

本节，我们作定量的讨论：
当 \(AX = B\) 有解时，
我们试作出公式，以表示它的解。

设 \(A\) 是一个 \(m \times n\) 阵。
设 \(B\) 是一个 \(m \times 1\) 阵。
设 \(AX = B\) 有解。

若 \(A = 0\)，
则因 \(AX = B\) 有解，
\(B = 0\)。
此时，显然，每个 \(n \times 1\) 阵都是解。
下设 \(A \neq 0\)。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵
\[
\begin{aligned}
  T = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
\end{aligned}
\]
（其中，
\(1 \leqslant i_1 < \dots < i_r \leqslant m\)，
且 \(1 \leqslant j_1 < \dots < j_r \leqslant n\)），
但没有行列式非零的 \(r+1\) 级子阵。
为方便，我们作一个 \(r \times n\) 阵
\[
\begin{aligned}
  U = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{1,\dots,n},
\end{aligned}
\]
与一个 \(r \times 1\) 阵
\[
\begin{aligned}
  V = B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{1}.
\end{aligned}
\]
注意，\(U\) 有一个行列式非零的 \(r\) 级子阵 \(T\)。

我们回想上节的讨论。
为解方程组 \(AX = B\)，即
\[
\left\{
\begin{aligned}
  [A]_{1,1} x_1 + [A]_{1,2} x_2 + \dots + [A]_{1,n} x_n & = [B]_{1,1}, \\
  [A]_{2,1} x_1 + [A]_{2,2} x_2 + \dots + [A]_{2,n} x_n & = [B]_{2,1}, \\
  & \dots, \\
  [A]_{m,1} x_1 + [A]_{m,2} x_2 + \dots + [A]_{m,n} x_n & = [B]_{m,1},
\end{aligned}
\right.
\]
我们考虑了由这 \(m\) 个方程的
第 \(i_1\)、\(i_2\)、\(\dots\)、\(i_r\) 个方程
作成的方程组
\[
\left\{
\begin{aligned}
  [A]_{i_1,1} x_1 + [A]_{i_1,2} x_2 + \dots + [A]_{i_1,n} x_n & = [B]_{i_1,1}, \\
  [A]_{i_2,1} x_1 + [A]_{i_2,2} x_2 + \dots + [A]_{i_2,n} x_n & = [B]_{i_2,1}, \\
  & \dots, \\
  [A]_{i_r,1} x_1 + [A]_{i_r,2} x_2 + \dots + [A]_{i_r,n} x_n & = [B]_{i_r,1},
\end{aligned}
\right.
\]
即 \(UX = V\)。
当时，我们已证明，
\(UX = V\) 的解都是 \(AX = B\) 的解。
反过来，\(AX = B\) 的解显然都是 \(UX = V\) 的解，
因为后者的方程全部都是来自前者的。
这么看来，\(AX = B\) 跟 \(UX = V\) 有相同的解。
所以，研究 \(AX = B\) 的解的公式，
相当于研究 \(UX = V\) 的解的公式。

若 \(r = n\)，
则我们直接用 Cramer 公式，
即可写出 \(UX = V\) 的唯一的解
（注意，此时 \(U\) 是一个 \(r \times r\) 阵）
\[
\begin{aligned}
  X = (\det {(U)})^{-1} \operatorname{adj} {(U)}\,V.
\end{aligned}
\]
我们也可较直接地表示此解。
设 \(U\{k,V\}\) 是以 \(r \times 1\) 阵 \(V\)
代 \(U\) 的列 \(k\) 后得到的阵。
则
\[
\begin{aligned}
  x_k = \frac{\det {(U\{k,V\})}}{\det {(U)}}.
\end{aligned}
\]

下设 \(r < n\)。
我们试写出方程组 \(UX = V\) 的所有的解。

::: theorem
设 \(V\) 是一个 \(r \times 1\) 阵。
设 \(U\) 是一个 \(r \times n\) 阵，
其中，\(r < n\)，
且 \(U\) 有一个行列式非零的 \(r\) 级子阵
\[
\begin{aligned}
  T = U\genfrac{\{}{\}}{0pt}{0}{1,\dots,r}{j_1,\dots,j_r},
\end{aligned}
\]
其中，\(1 \leqslant j_1 < \dots < j_r \leqslant n\)。
从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(j_2\)、\(\dots\)、\(j_r\)
后，还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(j_{r+1}\)、\(\dots\)、\(j_n\)。
再设 \(U\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(u_1\)、\(u_2\)、\(\dots\)、\(u_n\)。

(1) 设 \(c_{j_{r+1}}\)、\(\dots\)、\(c_{j_n}\)
    是 \(n-r\) 个常数。
    作 \(n \times 1\) 阵 \(C\)，其中，
    \[
        \begin{aligned}
          [C]_{j_k,1} =
          \begin{dcases}
            \frac{\det {(T\{k,V\})}}{\det {(T)}}
        + \sum_{r < \ell \leqslant n}
        {c_{j_\ell}
        \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}},
        & k \leqslant r; \\
        c_{j_k},
        & k > r.
      \end{dcases}
    \end{aligned}
    \]
其中，\(T\{k,Y\}\) 是以 \(r \times 1\) 阵 \(Y\)
代 \(T\) 的列 \(k\) 后得到的阵。
则 \(UC = V\)。

(2) 若 \(n \times 1\) 阵 \(D\) 适合 \(UD = V\)，
    则存在 \(n-r\) 个数
    \(c_{j_{r+1}}\)、\(\dots\)、\(c_{j_n}\)，
    使
    \[
        \begin{aligned}
          [D]_{j_k,1} =
          \begin{dcases}
            \frac{\det {(T\{k,V\})}}{\det {(T)}}
        + \sum_{r < \ell \leqslant n}
        {c_{j_\ell}
        \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}},
        & k \leqslant r; \\
        c_{j_k},
        & k > r.
      \end{dcases}
    \end{aligned}
    \]
或者，\(UX = V\) 的每个解
都可被 (1) 中的公式表示。
:::

::: proof
(1) 我们可改写方程组 \(UX = V\) 为
    \[
        \begin{aligned}
          \sum_{\ell = 1}^{r}
          {[U]_{p,j_\ell} x_{j_\ell}}
          = [V]_{p,1}
      - \sum_{r < \ell \leqslant n}
      {[U]_{p,j_\ell} x_{j_\ell}},
    \end{aligned}
    \]
    其中，\(p = 1\)、\(2\)、\(\dots\)、\(r\)，
    下同。
    考虑
    由 \(r\) 个 \(r\) 元 \({\leqslant} 1\) 次方程作成的方程组
    \[
    \begin{aligned}
      \sum_{\ell = 1}^{r}
      {[U]_{p,j_\ell} y_\ell}
      = [V]_{p,1}
      - \sum_{r < \ell \leqslant n}
      {[U]_{p,j_\ell} c_{j_\ell}}.
    \end{aligned}
    \]
    利用阵等式，我们可写
    \[
    \begin{aligned}
      T
      \begin{bmatrix}
        y_1    \\
        y_2    \\
        \vdots \\
        y_r    \\
      \end{bmatrix}
      =
      V -
      \sum_{r < \ell \leqslant n}
      {c_{j_\ell} u_{j_\ell}}.
    \end{aligned}
    \]
    因为 \(\det {(T)} \neq 0\)，
    故，由 Cramer 公式，
    存在 \(r\) 个数
    \(c_{j_1}\)、\(c_{j_2}\)、\(\dots\)、\(c_{j_r}\)，
    使
    \[
    \begin{aligned}
      \sum_{\ell = 1}^{r}
      {[U]_{p,j_\ell} c_{j_\ell}}
      = [V]_{p,1}
      - \sum_{r < \ell \leqslant n}
      {[U]_{p,j_\ell} c_{j_\ell}},
    \end{aligned}
    \]
    其中，
    \[
    \begin{aligned}
      c_{j_k}
      = {} &
      (\det {(T)})^{-1}
      \det {
        \left(
          T\left\{
            k,
            V -
            \sum_{r < \ell \leqslant n}
            {c_{j_\ell} u_{j_\ell}}
          \right\}
        \right)
      }
      \\
      = {} &
      (\det {(T)})^{-1}
      \left(
        \det {(T\{k,V\})}
        -
        \sum_{r < \ell \leqslant n}
        {c_{j_\ell}
          \det {(T\{k,u_{j_\ell}\})}
        }
      \right)
      \\
      = {} &
      \frac{\det {(T\{k,V\})}}{\det {(T)}}
      + \sum_{r < \ell \leqslant n}
      {c_{j_\ell}
      \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}}.
    \end{aligned}
    \]
    从而
    \[
    \begin{aligned}
      \sum_{\ell = 1}^{n}
      {[U]_{p,j_\ell} c_{j_\ell}}
      = [V]_{p,1}.
    \end{aligned}
    \]
    注意，\([C]_{j_k,1} = c_{j_k}\)。
    所以，\(UC = V\)。

(2) 设 \(D\) 适合 \(UD = V\)。
    则
    \[
    \begin{aligned}
      \sum_{\ell = 1}^{n}
      {[U]_{p,j_\ell} [D]_{j_\ell,1}}
      = [V]_{p,1}.
    \end{aligned}
    \]
    从而
    \[
        \begin{aligned}
          \sum_{\ell = 1}^{r}
          {[U]_{p,j_\ell} [D]_{j_\ell,1}}
          = [V]_{p,1}
      - \sum_{r < \ell \leqslant n}
      {[U]_{p,j_\ell} [D]_{j_\ell,1}}.
    \end{aligned}
    \]

    取 \(c_{j_\ell} = [D]_{j_\ell,1}\)，
    \(\ell > r\)。
    考虑方程组
    \[
    \begin{aligned}
      \sum_{\ell = 1}^{r}
      {[U]_{p,j_\ell} y_\ell}
      = [V]_{p,1}
      - \sum_{r < \ell \leqslant n}
      {[U]_{p,j_\ell} c_{j_\ell}}.
    \end{aligned}
    \]
    由 (1)，我们知道
    \[
    \begin{aligned}
      y_k =
      \frac{\det {(T\{k,V\})}}{\det {(T)}}
      + \sum_{r < \ell \leqslant n}
      {c_{j_\ell}
      \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}}
    \end{aligned}
    \]
    （其中，\(k = 1\)、\(2\)、\(\dots\)、\(r\)，下同）
    是一个解；
    另一方面，
    \(y_k = [D]_{j_k,1}\) 也是一个解。
    因为 \(\det {(T)} \neq 0\)，
    故，由 Cramer 公式，
    这 \(2\) 个解应是相同的，
    即
    \[
    [D]_{j_k,1} =
    \frac{\det {(T\{k,V\})}}{\det {(T)}}
    + \sum_{r < \ell \leqslant n}
    {c_{j_\ell}
    \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}}.
    \]
:::

注意，当 \(r = n\) 时，
不可能有数 \(\ell\) 适合 \(r < \ell \leqslant n\)。
既然没有数被加，那么，形如
\[
\begin{aligned}
  \sum_{r < \ell \leqslant n} {f(\ell)}
\end{aligned}
\]
的式是 \(0\)。
用这个约定，
我们可统一地写
在 \(r = n\) 与 \(r < n\) 这 \(2\) 个情形下
解的公式。

::: theorem
设 \(V\) 是一个 \(r \times 1\) 阵。
设 \(U\) 是一个 \(r \times n\) 阵，
其中，\(r \leqslant n\)，
且 \(U\) 有一个行列式非零的 \(r\) 级子阵
\[
\begin{aligned}
  T = U\genfrac{\{}{\}}{0pt}{0}{1,\dots,r}{j_1,\dots,j_r},
\end{aligned}
\]
其中，\(1 \leqslant j_1 < \dots < j_r \leqslant n\)。
从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(j_2\)、\(\dots\)、\(j_r\)
后，还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(j_{r+1}\)、\(\dots\)、\(j_n\)。
再设 \(U\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(u_1\)、\(u_2\)、\(\dots\)、\(u_n\)。
那么，\(UX = V\) 的解恰为
\[
\begin{aligned}
  x_{j_k} =
  \begin{dcases}
    \frac{\det {(T\{k,V\})}}{\det {(T)}}
    + \sum_{r < \ell \leqslant n}
    {c_{j_\ell}
    \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}},
    & k \leqslant r; \\
    c_{j_k},
    & k > r,
  \end{dcases}
\end{aligned}
\]
其中，\(c_{j_{r+1}}\)、\(\dots\)、\(c_{j_n}\)
是任何 \(n-r\) 个数。
:::

最后，我们总结这几节的关于线性方程组的主要结果。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
作一个 \(m \times (n+1)\) 阵 \(G\)，
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
（通俗地，在 \(A\) 的最后一列的右边加入一列 \(B\)，
得到尺寸较大的阵 \(G\)。）
设 \(A\) 有一个行列式非零的 \(r\) 级子阵，
但 \(A\) 没有行列式非零的 \(r+1\) 级子阵；
设 \(G\) 有一个行列式非零的 \(s\) 级子阵，
但 \(G\) 没有行列式非零的 \(s+1\) 级子阵。
设 \(X\) 是未知的 \(n \times 1\) 阵。

(1) 因为 \(A\) 是 \(G\) 的子阵，
    故 \(A\) 的子阵也是 \(G\) 的子阵。
    则 \(s = r\) 或 \(s > r\)。

(2) 若 \(s > r\)，则 \(AX = B\) 无解；
    也就是，若 \(AX = B\) 有解，则 \(s = r\)。

(3) 若 \(s = r\)，则 \(AX = B\) 有解；
    也就是，若 \(AX = B\) 无解，则 \(s > r\)。

(4) 设 \(s = r\)。
    则 \(AX = B\) 有解。
    若 \(r = n\)，则 \(AX = B\) 的解唯一；
    若 \(r < n\)，则 \(AX = B\) 的解不唯一。

(5) 设 \(A \neq 0\)。
    设 \(A\) 有一个行列式非零的 \(r\) 级子阵
    \[
    \begin{aligned}
      T = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
    \end{aligned}
    \]
    （其中，\(1 \leqslant i_1 < \dots < i_r \leqslant m\)，
    且 \(1 \leqslant j_1 < \dots < j_r \leqslant n\)），
    但 \(G\) 没有行列式非零的 \(r+1\) 级子阵。
    则 \(s = r\)。
    则 \(AX = B\) 有解。

记 \(r \times n\) 阵
\[
\begin{aligned}
  U = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{1,\dots,n}.
\end{aligned}
\]
于是，可视 \(T\) 为 \(U\) 的一个
行列式非零的 \(r\) 级子阵。
再记 \(r \times 1\) 阵
\[
\begin{aligned}
  V = B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{1}.
\end{aligned}
\]
则 \(UX = V\) 有解，
\(AX = B\) 的解是 \(UX = V\) 的解，
且 \(UX = V\) 的解是 \(AX = B\) 的解。

从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(j_2\)、\(\dots\)、\(j_r\)
后，还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(j_{r+1}\)、\(\dots\)、\(j_n\)。
再设 \(U\) 的
列 \(1\)、\(2\)、\(\dots\)、\(n\)
分别是 \(u_1\)、\(u_2\)、\(\dots\)、\(u_n\)。
那么，\(UX = V\) 的解（即 \(AX = B\) 的解）恰为
\[
\begin{aligned}
  x_{j_k} =
  \begin{dcases}
    \frac{\det {(T\{k,V\})}}{\det {(T)}}
    + \sum_{r < \ell \leqslant n}
    {c_{j_\ell}
    \frac{-\det {(T\{k,u_{j_\ell}\})}}{\det {(T)}}},
    & k \leqslant r; \\
    c_{j_k},
    & k > r,
  \end{dcases}
\end{aligned}
\]
其中，
\(c_{j_{r+1}}\)、\(\dots\)、\(c_{j_n}\)
是任何 \(n-r\) 个数，
\(T\{k,Y\}\) 是以 \(r \times 1\) 阵 \(Y\)
代 \(T\) 的列 \(k\) 后得到的阵，
且 \(x_i = [X]_{i,1}\)，
\(i = 1\)、\(2\)、\(\dots\)、\(n\)。
:::
