---
title: Binet–Cauchy 公式
---

我要介绍证 Binet–Cauchy 公式的另一个方法。

在第 1 章，节 *30*，
我用完全展开行列式的公式证明了它。
这个证法：

(1) 用简单的记号；

(2) 使您方便地对比选学内容
    “Binet–Cauchy 公式”
    与必学内容
    “Binet–Cauchy 公式（青春版）”。

当然，此证法的一个大的缺点是
用到了完全展开。
若您不会（或不想）用完全展开，
且您想了解如何证明 Binet–Cauchy 公式，
我在这儿给一个利用按多列展开行列式的公式的证明。
至少，按多列展开行列式（与它的论证）不依赖
排列、逆序数、符号。

这个论证是我初学 Binet–Cauchy 公式时学到的证明。
这个论证体现了重要思想，算 \(2\) 次；
聪明的数学人利用它，得到了多的有名的等式。

为方便，请允许我引用
按多列展开行列式公式与 Binet–Cauchy 公式。

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(k\) 是不超过 \(n\) 的正整数。
设 \(j_1\)、\(j_2\)、\(\dots\)、\(j_k\) 是
不超过 \(n\) 的正整数，
且 \(j_1 < j_2 < \dots < j_k\)。
则
\[
\begin{aligned}
  &
  \det {(A)}
  = \sum_{1 \leqslant i_1 < i_2 < \dots < i_k \leqslant n}
  {\det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1, i_2, \dots, i_k}{j_1, j_2, \dots, j_k}
  \right)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot (-1)^{i_1 + i_2 + \dots + i_k
  + j_1 + j_2 + \dots + j_k}
  \det {(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
:::

::: theorem [Binet–Cauchy 公式]
设 \(A\)、\(B\) 分别是 \(m \times n\)、\(n \times m\) 阵。

(1) 若 \(n > m\)，则 \(\det {(BA)} = 0\)。

(2) 若 \(n \leqslant m\)，
    则
    \[
    \begin{aligned}
      & \det {(BA)}
      \\
      = {} & \sum_{1 \leqslant j_1 < j_2 < \dots < j_n \leqslant m}
      {
        \det {\left(
            B\genfrac{\{}{\}}{0pt}{0}{1, 2, \dots, n}{j_1, j_2, \dots, j_n}
        \right)}
        \det {\left(
            A\genfrac{\{}{\}}{0pt}{0}{j_1, j_2, \dots, j_n}{1, 2, \dots, n}
        \right)}
      }.
    \end{aligned}
    \]
    特别地，若 \(n = m\)，则因适合条件
    \(1 \leqslant j_1 < j_2 < \dots < j_n \leqslant m\)
    的 \(j_1\)、\(j_2\)、\(\dots\)、\(j_n\)，
    是，且只能是，
    \(1\)、\(2\)、\(\dots\)、\(n\)，
    故
    \[
    \begin{aligned}
      \det {(BA)}
      = {} &
      \det {\left(
          B\genfrac{\{}{\}}{0pt}{0}{1, 2, \dots, n}{1, 2, \dots, n}
      \right)}
      \det {\left(
          A\genfrac{\{}{\}}{0pt}{0}{1, 2, \dots, n}{1, 2, \dots, n}
      \right)}
      \\
      = {} & \det {(B)} \det {(A)}.
    \end{aligned}
    \]
:::

有几件事，其值得提。

(1) 若一个方阵有一行的元全为 \(0\)，
    则它的行列式为 \(0\)。

可以直接用定义（按列 \(1\) 展开行列式）论证此事；
可用按一行展开行列式的公式论证此事；
当然，也可利用（关于行的）多线性论证此事。
我就不在这儿证了。

(2) 若加一个阵的一列的倍于另一列，则行列式不变。

这就是我在前面提的行列式的一个性质。

(3) 设 \(A\)、\(B\)、\(C\)、\(D\)
    分别是 \(m \times s\)、\(n \times s\)、
    \(m \times t\)、\(n \times t\) 阵。
    那么，
    \[
    \begin{aligned}
      \begin{bmatrix}
        A & C \\
        B & D \\
      \end{bmatrix}
    \end{aligned}
    \]
    表示一个 \((m + n) \times (s + t)\)-阵 \(M\)，
    且对任何不超过 \(m + n\) 的正整数 \(i\)
    与不超过 \(s + t\) 的正整数 \(j\)，
    \[
    \begin{aligned}
      [M]_{i,j} =
      \begin{cases}
        [A]_{i,j},
        & \text{\(i \leqslant m\), 且 \(j \leqslant s\)}; \\
        [B]_{i-m,j},
        & \text{\(i > m\), 且 \(j \leqslant s\)};    \\
        [C]_{i,j-s},
        & \text{\(i \leqslant m\), 且 \(j > s\)};    \\
        [D]_{i-m,j-s},
        & \text{\(i > m\), 且 \(j > s\)}.
      \end{cases}
    \end{aligned}
    \]

这是我们在第 1 章，节 31 见过的记号。
现在，我要进一步地发展此记号。
具体地，
设 \(A\)、\(B\)
分别是 \(m \times s\)、\(n \times s\) 阵。
那么，
\[
\begin{aligned}
  \begin{bmatrix}
    A \\
    B \\
  \end{bmatrix}
\end{aligned}
\]
表示一个 \((m + n) \times s\)-阵 \(L\)，
且对任何不超过 \(m + n\) 的正整数 \(i\)
与不超过 \(s\) 的正整数 \(j\)，
\[
\begin{aligned}
  [L]_{i,j} =
  \begin{cases}
    [A]_{i,j},
    & \text{\(i \leqslant m\)}; \\
    [B]_{i-m,j},
    & \text{\(i > m\)}.
  \end{cases}
\end{aligned}
\]

类似地，设 \(A\)、\(C\)
分别是 \(m \times s\)、\(m \times t\) 阵。
那么，
\[
\begin{aligned}
  \begin{bmatrix}
    A & C \\
  \end{bmatrix}
\end{aligned}
\]
表示一个 \(m \times (s + t)\)-阵 \(H\)，
且对任何不超过 \(m\) 的正整数 \(i\)
与不超过 \(s + t\) 的正整数 \(j\)，
\[
\begin{aligned}
  [H]_{i,j} =
  \begin{cases}
    [A]_{i,j},
    & \text{\(j \leqslant s\)}; \\
    [C]_{i,j-s},
    & \text{\(j > s\)}.
  \end{cases}
\end{aligned}
\]

::: proof
设 \(A\)、\(B\) 分别是
\(m \times n\)、\(n \times m\) 阵。
作 \(m + n\) 级阵
\[
\begin{aligned}
  J =
  \begin{bmatrix}
    I_m & A \\
    -B  & 0 \\
  \end{bmatrix},
\end{aligned}
\]
其中，左上角的 \(I_m\) 是 \(m\) 级单位阵，
且右下角的 \(0\) 是 \(n \times n\) 零阵
（元全为 \(0\) 的阵）。

我们用 \(2\) 个方式计算 \(J\) 的行列式。

一方面，我们按
列 \(m + 1\)、\(m + 2\)、\(\dots\)、\(m + n\) 展开，
得
\[
\begin{aligned}
  &
  \det {(J)}
  = \sum_{1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m+n}
  {\det {\left(
        J\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{m+1,m+2,\dots,m+n}
  \right)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot (-1)^{i_1 + i_2 + \dots + i_n
  + (m+1) + (m+2) + \dots + (m+n)}
  \\
  &
  \qquad \qquad \qquad
  \cdot \det {(J({i_1,i_2,\dots,i_n}|{m+1,m+2,\dots,m+n}))}.
\end{aligned}
\]
注意，若 \(i_n > m\)，则因
\(J\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{m+1,m+2,\dots,m+n}\)
的行 \(n\) 的元全为 \(0\)，
故这个子阵的行列式为 \(0\)。
特别地，若 \(n > m\)，则 \(i_n\) 必高于 \(m\)。
故 \(n > m\) 时，\(J\) 的行列式为 \(0\)。

当 \(n \leqslant m\) 时，
我们去除使 \(i_n > m\) 的
\(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)，
得
\[
\begin{aligned}
  &
  \det {(J)}
  = \sum_{1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m}
  {\det {\left(
        J\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{m+1,m+2,\dots,m+n}
  \right)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot (-1)^{i_1 + i_2 + \dots + i_n
  + (m+1) + (m+2) + \dots + (m+n)}
  \\
  &
  \qquad \qquad \qquad
  \cdot \det {(J({i_1,i_2,\dots,i_n}|{m+1,m+2,\dots,m+n}))}.
\end{aligned}
\]
不难看出，
因为 \(1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m\)，
\[
\begin{aligned}
  J\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{m+1,m+2,\dots,m+n}
  = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{1,2,\dots,n},
\end{aligned}
\]
且
\[
\begin{aligned}
  J({i_1,i_2,\dots,i_n}|{m+1,m+2,\dots,m+n})
  =
  \begin{bmatrix}
    I_m (i_1,i_2,\dots,i_n|) \\
    -B
  \end{bmatrix},
\end{aligned}
\]
其中，
\(I_m (i_1,i_2,\dots,i_n|)\)
表示去除 \(I_m\) 的
行 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
后（不改变列）得到的阵。
按列 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\) 展开
\(T_{i_1,i_2,\dots,i_n}
  = J({i_1,i_2,\dots,i_n}|{m+1,m+2,\dots,m+n})\) 的
行列式，得
\[
\begin{aligned}
  & \det {(T_{i_1,i_2,\dots,i_n})}
  \\
  = {} &
  \sum_{1 \leqslant k_1 < k_2 < \dots < k_n \leqslant m}
  {\det {\left(
        T_{i_1,i_2,\dots,i_n}
        \genfrac{\{}{\}}{0pt}{0}{k_1, k_2, \dots, k_n}{i_1, i_2, \dots, i_n}
  \right)}}
  \\
  &
  \qquad
  \cdot (-1)^{k_1 + k_2 + \dots + k_n
  + i_1 + i_2 + \dots + i_n}
  \det {(T_{i_1,i_2,\dots,i_n}
  ({k_1,k_2,\dots,k_n}|{i_1,i_2,\dots,i_n}))}.
\end{aligned}
\]
注意，若 \(k_1 \leqslant m-n\)，
则因 \(T_{i_1,i_2,\dots,i_n}
  \genfrac{\{}{\}}{0pt}{0}{k_1,k_2,\dots,k_n}{i_1,i_2,\dots,i_n}\)
的行 \(1\) 的元全为 \(0\)，
故这个子阵的行列式为 \(0\)。
并且，若 \(k_1 > m-n\)，
则 \(k_1\)、\(k_2\)、\(\dots\)、\(k_n\)
是，且只能是
\(m-n+1\)、\(m-n+2\)、\(\dots\)、\(m\)。
故
\[
\begin{aligned}
  & \det {(T_{i_1,i_2,\dots,i_n})}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  \det {\left(
      T_{i_1,i_2,\dots,i_n}
      \genfrac{\{}{\}}{0pt}{0}{m-n+1,m-n+2,\dots,m}{i_1,i_2,\dots,i_n}
  \right)}
  \\
  &
  \cdot (-1)^{(m-n+1) + (m-n+2) + \dots + m
  + i_1 + i_2 + \dots + i_n}
  \\
  &
  \cdot
  \det {(T_{i_1,i_2,\dots,i_n}
  ({m-n+1,m-n+2,\dots,m}|{i_1,i_2,\dots,i_n}))}
  \\
  = {} &
  \hphantom{\cdot\,\,}
  \det {\left(
      (-B)
      \genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{i_1,i_2,\dots,i_n}
  \right)}
  \\
  & \cdot
  (-1)^{(m-n+1) + (m-n+2) + \dots + (m-n+n)
  + i_1 + i_2 + \dots + i_n}
  \\
  & \cdot
  \det {(I_m
  ({i_1,i_2,\dots,i_n}|{i_1,i_2,\dots,i_n}))}
  \\
  = {} &
  (-1)^{(m-n+1) + (m-n+2) + \dots + (m-n+n)
  + i_1 + i_2 + \dots + i_n}\,
  (-1)^n
  \det {\left(
      B
      \genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{i_1,i_2,\dots,i_n}
  \right)}.
\end{aligned}
\]
从而
\[
\begin{aligned}
  \det {(J)}
  = {} & \sum_{1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m}
  {\det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{1,2,\dots,n}
  \right)}}
  \\
  & \qquad
  \cdot
  (-1)^{i_1 + i_2 + \dots + i_n
  + (m+1) + (m+2) + \dots + (m+n)}
  \\
  & \qquad
  \cdot
  (-1)^{(m-n+1) + (m-n+2) + \dots + (m-n+n)
  + i_1 + i_2 + \dots + i_n}\, (-1)^n
  \\
  & \qquad
  \cdot
  \det {\left(
      B
      \genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{i_1,i_2,\dots,i_n}
  \right)}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  \hphantom{\cdot\,\,}
  (-1)^{i_1 + i_2 + \dots + i_n
  + (m+1) + (m+2) + \dots + (m+n)}
  \\
  &
  \cdot
  (-1)^{(m-n+1) + (m-n+2) + \dots + (m-n+n)
  + i_1 + i_2 + \dots + i_n}
  \cdot
  (-1)^n
  \\
  = {} & (-1)^{2(i_1+i_2+\dots+i_n)}
  \cdot (-1)^{2mn}
  \cdot (-1)^{(n-(n-1))+((n-1)-(n-2))+\dots+(1-(n-n))}
  \cdot (-1)^{n}
  \\
  = {} & (-1)^n \cdot (-1)^n
  \\
  = {} & 1,
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(J)}
  = \sum_{1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m}
  {\det {\left(
        B
        \genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{i_1,i_2,\dots,i_n}
    \right)}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{1,2,\dots,n}
  \right)}}.
\end{aligned}
\]

另一方面，我们也可用行列式的性质，
施适当的变换于 \(J\)，
得一个新阵 \(K\)，
且 \(J\)、\(K\) 的行列式相等。
具体地，加
\(J\) 的列 \(1\) 的 \(-[A]_{1,1}\) 倍于列 \(m+1\)，
\(J\) 的列 \(2\) 的 \(-[A]_{2,1}\) 倍于列 \(m+1\)，
……
\(J\) 的列 \(m\) 的 \(-[A]_{m,1}\) 倍于列 \(m+1\)，
得
\[
\begin{aligned}
  J_1 =
  \begin{bmatrix}
    1          & 0          & \cdots & 0          &
    0          & [A]_{1,2}  & \cdots & [A]_{1,n}    \\
    0          & 1          & \cdots & 0          &
    0          & [A]_{2,2}  & \cdots & [A]_{2,n}    \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    0          & 0          & \cdots & 1          &
    0          & [A]_{m,2}  & \cdots & [A]_{m,n}    \\
    -[B]_{1,1} & -[B]_{1,2} & \cdots & -[B]_{1,m} &
    p_{1,1}    & 0          & \cdots & 0            \\
    -[B]_{2,1} & -[B]_{2,2} & \cdots & -[B]_{2,m} &
    p_{2,1}    & 0          & \cdots & 0            \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    -[B]_{n,1} & -[B]_{n,2} & \cdots & -[B]_{n,m} &
    p_{n,1}    & 0          & \cdots & 0            \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  p_{k,1}
  = {} &
  (-[B]_{k,1})(-[A]_{1,1})
  + (-[B]_{k,2})(-[A]_{2,1})
  + \dots
  + (-[B]_{k,m})(-[A]_{m,1})
  \\
  = {} &
  [B]_{k,1} [A]_{1,1}
  + [B]_{k,2} [A]_{2,1}
  + \dots
  + [B]_{k,m} [A]_{m,1}
  \\
  = {} &
  [BA]_{k,1}.
\end{aligned}
\]
根据行列式的性质，
\(\det {(J)} = \det {(J_1)}\)。

加
\(J_1\) 的列 \(1\) 的 \(-[A]_{1,2}\) 倍于列 \(m+2\)，
\(J_1\) 的列 \(2\) 的 \(-[A]_{2,2}\) 倍于列 \(m+2\)，
……
\(J_1\) 的列 \(m\) 的 \(-[A]_{m,2}\) 倍于列 \(m+2\)，
得
\[
\begin{aligned}
  J_2 =
  \begin{bmatrix}
    1          & 0          & \cdots & 0          &
    0          & 0          & \cdots & [A]_{1,n}    \\
    0          & 1          & \cdots & 0          &
    0          & 0          & \cdots & [A]_{2,n}    \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    0          & 0          & \cdots & 1          &
    0          & 0          & \cdots & [A]_{m,n}    \\
    -[B]_{1,1} & -[B]_{1,2} & \cdots & -[B]_{1,m} &
    p_{1,1}    & p_{1,2}    & \cdots & 0            \\
    -[B]_{2,1} & -[B]_{2,2} & \cdots & -[B]_{2,m} &
    p_{2,1}    & p_{2,2}    & \cdots & 0            \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    -[B]_{n,1} & -[B]_{n,2} & \cdots & -[B]_{n,m} &
    p_{n,1}    & p_{n,2}    & \cdots & 0            \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  p_{k,2}
  = {} &
  (-[B]_{k,1})(-[A]_{1,2})
  + (-[B]_{k,2})(-[A]_{2,2})
  + \dots
  + (-[B]_{k,m})(-[A]_{m,2})
  \\
  = {} &
  [B]_{k,1} [A]_{1,2}
  + [B]_{k,2} [A]_{2,2}
  + \dots
  + [B]_{k,m} [A]_{m,2}
  \\
  = {} &
  [BA]_{k,2}.
\end{aligned}
\]
根据行列式的性质，
\(\det {(J_1)} = \det {(J_2)}\)，
故
\(\det {(J)} = \det {(J_2)}\)。

……

加
\(J_{n-1}\) 的列 \(1\) 的 \(-[A]_{1,n}\) 倍于列 \(m+n\)，
\(J_{n-1}\) 的列 \(2\) 的 \(-[A]_{2,n}\) 倍于列 \(m+n\)，
……
\(J_{n-1}\) 的列 \(m\) 的 \(-[A]_{m,n}\) 倍于列 \(m+n\)，
得
\[
\begin{aligned}
  J_n
  = {} &
  \begin{bmatrix}
    1          & 0          & \cdots & 0          &
    0          & 0          & \cdots & 0            \\
    0          & 1          & \cdots & 0          &
    0          & 0          & \cdots & 0            \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    0          & 0          & \cdots & 1          &
    0          & 0          & \cdots & 0            \\
    -[B]_{1,1} & -[B]_{1,2} & \cdots & -[B]_{1,m} &
    p_{1,1}    & p_{1,2}    & \cdots & p_{1,n}      \\
    -[B]_{2,1} & -[B]_{2,2} & \cdots & -[B]_{2,m} &
    p_{2,1}    & p_{2,2}    & \cdots & p_{2,n}      \\
    \vdots     & \vdots     & {}     & \vdots     &
    \vdots     & \vdots     & {}     & \vdots       \\
    -[B]_{n,1} & -[B]_{n,2} & \cdots & -[B]_{n,m} &
    p_{n,1}    & p_{n,2}    & \cdots & p_{n,n}      \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    I_m & 0  \\
    -B  & BA \\
  \end{bmatrix},
\end{aligned}
\]
其中，右上角的 \(0\) 是 \(m \times n\) 零阵，
且
\[
\begin{aligned}
  p_{k,n}
  = {} &
  (-[B]_{k,1})(-[A]_{1,n})
  + (-[B]_{k,2})(-[A]_{2,n})
  + \dots
  + (-[B]_{k,m})(-[A]_{m,n})
  \\
  = {} &
  [B]_{k,1} [A]_{1,n}
  + [B]_{k,2} [A]_{2,n}
  + \dots
  + [B]_{k,m} [A]_{m,n}
  \\
  = {} &
  [BA]_{k,n}.
\end{aligned}
\]
根据行列式的性质，
\(\det {(J_n)} = \det {(J_{n-1})}\)，
故
\(\det {(J)} = \det {(J_n)}\)。

我们要如何计算 \(J_n\) 的行列式？
我给您 \(3\) 个方法：
(a)
用第 1 章，节 31 的第 2 个例
（计算 \(J_n\) 的转置的行列式）；
(b)
按行 \(1\)、\(2\)、\(\dots\)、\(m\) 展开；
(c)
按列 \(m+1\)、\(m+2\)、\(\dots\)、\(m+n\) 展开。
若您没错，您可算出，
\[
\begin{aligned}
  \det {(J)}
  = \det {(J_n)}
  = \det {(I_m)} \det {(BA)}
  = \det {(BA)}.
\end{aligned}
\]

现在，我们比较 \(2\) 次计算的结果。
这就是 Binet–Cauchy 公式。
:::

我还想说一些话。

设 \(A\)、\(B\) 分别是 \(s \times n\) 与 \(m \times s\) 阵。
不难看出，\(BA\) 有意义，且 \(BA\) 是一个 \(m \times n\) 阵。
\(BA\) 可能不是一个方阵，故说 \(BA\) 的行列式可能是无意义的。
不过，我们仍可说 \(BA\) 的子阵的行列式，若这个子阵是方阵。
设 \(k\) 是一个既不超过 \(m\)，也不超过 \(n\) 的正整数。
设 \(1 \leqslant i_1 < \dots < i_k \leqslant m\)；
设 \(1 \leqslant \ell_1 < \dots < \ell_k \leqslant n\)。
我们说，我们可以用 \(B\) 与 \(A\) 的 \(k\) 级子阵的行列式
写出 \(BA\) 的 \(k\) 级子阵
\[
\begin{aligned}
  F = (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}
\end{aligned}
\]
的行列式。

首先，注意，
\[
\begin{aligned}
  (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}
  =
  B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{1,\dots,s}
  \,
  A\genfrac{\{}{\}}{0pt}{0}{1,\dots,s}{\ell_1,\dots,\ell_k}.
\end{aligned}
\]
为说明此事，我们设
\[
\begin{aligned}
  D = B\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{1,\dots,s},
  \quad
  C = A\genfrac{\{}{\}}{0pt}{0}{1,\dots,s}{\ell_1,\dots,\ell_k}.
\end{aligned}
\]
则 \(D\)、\(C\) 分别是 \(k \times s\)、\(s \times k\) 阵，
\([D]_{u,j} = [B]_{i_u,j}\)，
且 \([C]_{i,v} = [A]_{i,\ell_v}\)。
则
\[
\begin{aligned}
  [DC]_{u,v}
  = {} &
  \sum_{p = 1}^{s} {[D]_{u,p} [C]_{p,v}}
  \\
  = {} &
  \sum_{p = 1}^{s} {[B]_{i_u,p} [A]_{p,\ell_v}}
  \\
  = {} &
  [BA]_{i_u,\ell_v}
  \\
  = {} &
  [F]_{u,v}.
\end{aligned}
\]

现在，我们可以对 \(C\)、\(D\) 用 Binet–Cauchy 公式了。
我再说一次，\(C\) 是 \(s \times k\) 的，
且 \(D\) 是 \(k \times s\) 的。
则

(1) 若 \(k > s\)，则 \(\det {(DC)} = 0\)。

(2) 若 \(k \leqslant s\)，则
    \[
    \begin{aligned}
      & \det {(DC)}
      \\
      = {} & \sum_{1 \leqslant j_1 < \dots < j_k \leqslant s}
      {
        \det {\left(
            D\genfrac{\{}{\}}{0pt}{0}{1, \dots, k}{j_1, \dots, j_k}
        \right)}
        \det {\left(
            C\genfrac{\{}{\}}{0pt}{0}{j_1, \dots, j_k}{1, \dots, k}
        \right)}
      }
      \\
      = {} & \sum_{1 \leqslant j_1 < \dots < j_k \leqslant s}
      {
        \det {\left(
            B\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_k}{j_1, \dots, j_k}
        \right)}
        \det {\left(
            A\genfrac{\{}{\}}{0pt}{0}{j_1, \dots, j_k}{\ell_1, \dots, \ell_k}
        \right)}
      }.
    \end{aligned}
    \]

综上，

::: theorem
设 \(A\)、\(B\) 分别是 \(s \times n\) 与 \(m \times s\) 阵。
设 \(k\) 是一个既不超过 \(m\)，也不超过 \(n\) 的正整数。
设 \(1 \leqslant i_1 < \dots < i_k \leqslant m\)；
设 \(1 \leqslant \ell_1 < \dots < \ell_k \leqslant n\)。

(1) 若 \(k > s\)，则
    \[
    \begin{aligned}
      \det {\left(
          (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}
      \right)} = 0.
    \end{aligned}
    \]

(2) 若 \(k \leqslant s\)，则
    \[
    \begin{aligned}
      & \det {\left(
          (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}
      \right)}
      \\
      = {} & \sum_{1 \leqslant j_1 < \dots < j_k \leqslant s}
      {
        \det {\left(
            B\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_k}{j_1, \dots, j_k}
        \right)}
        \det {\left(
            A\genfrac{\{}{\}}{0pt}{0}{j_1, \dots, j_k}{\ell_1, \dots, \ell_k}
        \right)}
      }.
    \end{aligned}
    \]
:::

可视此事为 Binet–Cauchy 公式的一个推广：
若 \(m = n\)，\(k = n\)，
且
\(i_u = \ell_u = u\)（\(u = 1\)、\(2\)、\(\dots\)、\(n\)），
则这就是 Binet–Cauchy 公式。

若我们取 \(m = n = s\)，则

::: theorem
设 \(A\)、\(B\) 是 \(n\) 级阵。
设 \(k\) 是一个不超过 \(n\) 的正整数。
设 \(1 \leqslant i_1 < \dots < i_k \leqslant n\)；
设 \(1 \leqslant \ell_1 < \dots < \ell_k \leqslant n\)。
则
\[
\begin{aligned}
  & \det {\left(
      (BA)\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_k}{\ell_1,\dots,\ell_k}
  \right)}
  \\
  = {} & \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  {
    \det {\left(
        B\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_k}{j_1, \dots, j_k}
    \right)}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{j_1, \dots, j_k}{\ell_1, \dots, \ell_k}
    \right)}
  }.
\end{aligned}
\]
:::

我们知道，\(A\) 的一个子阵可被认为是
取 \(A\) 的于一些行与一些列的元
按原来的次序作成的新阵，
且也可被认为是
去除 \(A\) 的一些行与一些列后，
剩下的元按原来的次序作成的阵。
所以，我们也可如此改写前面的结论：

::: theorem
设 \(A\)、\(B\) 是 \(n\) 级阵。
设 \(k\) 是一个不超过 \(n\) 的正整数。
设 \(1 \leqslant i_1 < \dots < i_k \leqslant n\)；
设 \(1 \leqslant \ell_1 < \dots < \ell_k \leqslant n\)。
则
\[
\begin{aligned}
  & \det {(
      (BA)({i_1,\dots,i_k}|{\ell_1,\dots,\ell_k})
  )}
  \\
  = {} & \sum_{1 \leqslant j_1 < \dots < j_k \leqslant n}
  {
    \det {(
        B({i_1, \dots, i_k}|{j_1, \dots, j_k})
    )}
    \det {(
        A({j_1, \dots, j_k}|{\ell_1, \dots, \ell_k})
    )}
  }.
\end{aligned}
\]
:::

最后，我们看一个例。

::: example
设命题 \(P(n)\)：
对任何 \(n\) 级阵 \(A\)，\(B\)，
\(\det {(BA)} = \det {(B)} \det {(A)}\)。
我们用数学归纳法证明，
对任何正整数 \(n\)，\(P(n)\) 是对的。

\(P(1)\) 是对的。
设 \(A = [a]\)，且 \(B = [b]\)。
则 \(BA = [ba]\)。
则 \(\det {(BA)} = ba = \det {(B)} \det {(A)}\)。

现在，我们假定 \(P(n-1)\) 是对的。
我们要证 \(P(n)\) 是对的。
设 \(A\)、\(B\) 是 \(n\) 级阵。
则
\[
\begin{aligned}
  \det {(BA)}
  = {} &
  \sum_{p=1}^{n} {
    (-1)^{p+1} [BA]_{p,1} \det {((BA)(p|1))}
  }
  \\
  = {} &
  \sum_{p=1}^{n} {
    (-1)^{p+1}
    \left(
      \sum_{q=1}^{n} {
        [B]_{p,q} [A]_{q,1}
      }
    \right)
    \det {((BA)(p|1))}
  }
  \\
  = {} &
  \sum_{p=1}^{n} {
    \sum_{q=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q} [A]_{q,1}
      \det {((BA)(p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q} [A]_{q,1}
      \det {((BA)(p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {((BA)(p|1))}
    }
  }.
\end{aligned}
\]
作 \(n\) 级阵 \(C_q\) 如下：
\[
\begin{aligned}
  [C_q]_{i,j} =
  \begin{cases}
    [B]_{i,q},  & j = 1;    \\
    [BA]_{i,j}, & j \neq 1.
  \end{cases}
\end{aligned}
\]
通俗地，\(C_q\) 的列 \(1\) 是 \(B\) 的列 \(q\)，
且 \(C_q\) 的列 \(j\) 是 \(BA\) 的列 \(j\)
（\(j \neq 1\)）。
则 \([B]_{p,q} = [C_q]_{p,1}\)，
且 \((BA)(p|1) = C_q (p|1)\)。
则
\[
\begin{aligned}
  \det {(BA)}
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {((BA)(p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [C_q]_{p,1}
      \det {(C_q (p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \det {(C_q)}
  }.
\end{aligned}
\]
注意，\(j \neq 1\) 时，
\[
\begin{aligned}
  [C_q]_{i,j}
  = {} &
  [BA]_{i,j}
  \\
  = {} &
  \sum_{k=1}^{n} {
    [B]_{i,k} [A]_{k,j}
  }
  \\
  = {} &
  [B]_{i,q} [A]_{q,j} +
  \sum_{\substack{1 \leqslant k \leqslant n \\ k \neq q}} {
    [B]_{i,k} [A]_{k,j}
  }
  \\
  = {} &
  [B]_{i,q} [A]_{q,j} +
  \sum_{\ell=1}^{n-1} {
    [B]_{i,\ell+\rho(\ell,k)}
    [A]_{\ell+\rho(\ell,k),j}
  }
  \\
  = {} &
  [B]_{i,q} [A]_{q,j} +
  \sum_{\ell=1}^{n-1} {
    [B({|q})]_{i,\ell}
    [A({q|})]_{\ell,j}
  }
  \\
  = {} &
  [B]_{i,q} [A]_{q,j} +
  [B({|q})\, A({q|})]_{i,j},
\end{aligned}
\]
其中，\(B({|q})\) 是去除 \(B\) 的列 \(q\) 后（不改变行）
得到的 \(n \times (n-1)\) 阵，
且 \(A({q|})\) 是去除 \(A\) 的行 \(q\) 后（不改变列）
得到的 \((n-1) \times n\) 阵。
加
\(C_q\) 的列 \(1\) 的 \(-[A]_{q,2}\) 倍于列 \(2\)，
\(C_q\) 的列 \(1\) 的 \(-[A]_{q,3}\) 倍于列 \(3\)，
……
\(C_q\) 的列 \(1\) 的 \(-[A]_{q,n}\) 倍于列 \(n\)，
得 \(n\) 级阵 \(D_q\)。
则
\[
\begin{aligned}
  [D_q]_{i,j} =
  \begin{cases}
    [B]_{i,q},                 & j = 1;    \\
    [B({|q})\, A({q|})]_{i,j}, & j \neq 1.
  \end{cases}
\end{aligned}
\]
根据行列式的性质，\(\det {(C_q)} = \det {(D_q)}\)。
注意，\([D_q]_{p,1} = [B]_{p,q}\)，
且 \(D_q (p|1) = (B({|q})\, A({q|}))\, (p|1)\)。
则
\[
\begin{aligned}
  \det {(BA)}
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \det {(C_q)}
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \det {(D_q)}
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [D_q]_{p,1}
      \det {(D_q (p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {((B({|q})\, A({q|}))\, (p|1))}
    }
  }.
\end{aligned}
\]
注意，对 \(m \times s\) 阵 \(X\)
与 \(s \times n\) 阵 \(Y\)，
对正整数 \(u \leqslant m\)
与正整数 \(v \leqslant n\)，
\((XY)(u|v) = X({u|})\, Y({|v})\)。
则
\[
\begin{aligned}
  (B({|q})\, A({q|}))\, (p|1)
  = (B({|q}))({p|})\, (A({q|}))({|1})
  = B({p|q})\, A({q|1}).
\end{aligned}
\]
于是，由假定，
\[
\begin{aligned}
  \det {((B({|q})\, A({q|}))\, (p|1))}
  = \det {(B({p|q})\, A({q|1}))}
  = \det {(B({p|q}))} \det {(A({q|1}))}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(BA)}
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {((B({|q})\, A({q|}))\, (p|1))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {(B({p|q})\, A({q|1}))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+1}
      [B]_{p,q}
      \det {(B({p|q}))} \det {(A({q|1}))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    \sum_{p=1}^{n} {
      (-1)^{p+q} (-1)^{q+1}
      [B]_{p,q}
      \det {(B({p|q}))} \det {(A({q|1}))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    (-1)^{q+1}
    \det {(A({q|1}))}
    \sum_{p=1}^{n} {
      (-1)^{p+q}
      [B]_{p,q}
      \det {(B({p|q}))}
    }
  }
  \\
  = {} &
  \sum_{q=1}^{n} {
    [A]_{q,1}
    (-1)^{q+1}
    \det {(A({q|1}))}
    \det {(B)}
  }
  \\
  = {} &
  \det {(B)}
  \sum_{q=1}^{n} {
    [A]_{q,1}
    (-1)^{q+1}
    \det {(A({q|1}))}
  }
  \\
  = {} &
  \det {(B)} \det {(A)}.
\end{aligned}
\]
所以，\(P(n)\) 是对的。
由数学归纳法，待证的命题成立。
:::
