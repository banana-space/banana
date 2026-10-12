---
title: 按多列展开行列式
---

::: -remark [选学]
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

前面，我们知道，我们可按（任何）一列展开行列式：

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(j\) 为整数，且 \(1 \leqslant j \leqslant n\)。
则
\[
\begin{aligned}
  \det {(A)}
  = \sum_{i = 1}^{n} {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
\end{aligned}
\]
:::

自然地，我们会想，我们能否按多列展开行列式。
此事的回答是“是”。
具体地，

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

若 \(k = 1\)，则
\(A\genfrac{\{}{\}}{0pt}{0}{i_1}{j_1} = [[A]_{i_1,j_1}]\)
是一个 \(1\) 级阵。
回想，\(1\) 级阵 \([a]\) 的行列式就是 \(a\)。
所以，若 \(k = 1\)，则此定理就是
按一列展开行列式。

论证此事前，我想用一个例助您理解，此定理在说何。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 5 & 8  & 16 \\
    2 & 6 & 10 & 15 \\
    3 & 7 & 11 & 13 \\
    4 & 9 & 12 & 14 \\
  \end{bmatrix}.
\end{aligned}
\]

一方面，
根据定义，
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
则
\[
\begin{aligned}
  & \det {(A(1|1))}
  = \det {
    \begin{bmatrix}
      6 & 10 & 15 \\
      7 & 11 & 13 \\
      9 & 12 & 14 \\
  \end{bmatrix}}
  = -47;             \\
  & \det {(A(2|1))}
  = \det {
    \begin{bmatrix}
      5 & 8  & 16 \\
      7 & 11 & 13 \\
      9 & 12 & 14 \\
  \end{bmatrix}}
  = -98;             \\
  & \det {(A(3|1))}
  = \det {
    \begin{bmatrix}
      5 & 8  & 16 \\
      6 & 10 & 15 \\
      9 & 12 & 14 \\
  \end{bmatrix}}
  = -80;             \\
  & \det {(A(4|1))}
  = \det {
    \begin{bmatrix}
      5 & 8  & 16 \\
      6 & 10 & 15 \\
      7 & 11 & 13 \\
  \end{bmatrix}}
  = -23.
\end{aligned}
\]
所以
\[
\begin{aligned}
  \det {(A)}
  = 1 \cdot (-47) - 2 \cdot (-98)
  + 3 \cdot (-80) - 4 \cdot (-23)
  = 1.
\end{aligned}
\]

另一方面，
我们试按列 \(1\)、\(2\) 展开。
取 \(j_1\)、\(j_2\) 为 \(1\)、\(2\)。
不难写出，适合条件
“\(1 \leqslant i_1 < i_2 \leqslant 4\)”
的 \((i_1, i_2)\) 有 \(6\) 个：
\((1, 2)\)、
\((1, 3)\)、\((2, 3)\)、
\((1, 4)\)、\((2, 4)\)、\((3, 4)\)。
则
\[
\begin{aligned}
  & A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,2} =
  \begin{bmatrix}
    1 & 5 \\
    2 & 6 \\
  \end{bmatrix},
  \quad
  (-1)^{1+2+1+2} = +1,
  \quad
  A(1,2|1,2) =
  \begin{bmatrix}
    11 & 13 \\
    12 & 14 \\
  \end{bmatrix};
  \\
  & A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,2} =
  \begin{bmatrix}
    1 & 5 \\
    3 & 7 \\
  \end{bmatrix},
  \quad
  (-1)^{1+3+1+2} = -1,
  \quad
  A(1,3|1,2) =
  \begin{bmatrix}
    10 & 15 \\
    12 & 14 \\
  \end{bmatrix};
  \\
  & A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,2} =
  \begin{bmatrix}
    2 & 6 \\
    3 & 7 \\
  \end{bmatrix},
  \quad
  (-1)^{2+3+1+2} = +1,
  \quad
  A(2,3|1,2) =
  \begin{bmatrix}
    8 & 16 \\
    12 & 14 \\
  \end{bmatrix};
  \\
  & A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,2} =
  \begin{bmatrix}
    1 & 5 \\
    4 & 9 \\
  \end{bmatrix},
  \quad
  (-1)^{1+4+1+2} = +1,
  \quad
  A(1,4|1,2) =
  \begin{bmatrix}
    10 & 15 \\
    11 & 13 \\
  \end{bmatrix};
  \\
  & A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,2} =
  \begin{bmatrix}
    2 & 6 \\
    4 & 9 \\
  \end{bmatrix},
  \quad
  (-1)^{2+4+1+2} = -1,
  \quad
  A(2,4|1,2) =
  \begin{bmatrix}
    8 & 16 \\
    11 & 13 \\
  \end{bmatrix};
  \\
  & A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,2} =
  \begin{bmatrix}
    3 & 7 \\
    4 & 9 \\
  \end{bmatrix},
  \quad
  (-1)^{3+4+1+2} = +1,
  \quad
  A(3,4|1,2) =
  \begin{bmatrix}
    8 & 16 \\
    10 & 15 \\
  \end{bmatrix}.
\end{aligned}
\]
定理说，
\[
\begin{aligned}
  \det {(A)}
  = {} & \hphantom{{} + {}}
  \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,2} \right)}\,
  (-1)^{1+2+1+2} \det {(A(1,2|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,2} \right)}\,
  (-1)^{1+3+1+2} \det {(A(1,3|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,2} \right)}\,
  (-1)^{2+3+1+2} \det {(A(2,3|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,2} \right)}\,
  (-1)^{1+4+1+2} \det {(A(1,4|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,2} \right)}\,
  (-1)^{2+4+1+2} \det {(A(2,4|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,2} \right)}\,
  (-1)^{3+4+1+2} \det {(A(3,4|1,2))}
  \\
  = {} & \hphantom{{} + {}}
  (-4) \cdot (-2) - (-8) \cdot (-40)
  \\
  & + (-4) \cdot (-80) + (-11) \cdot (-35)
  \\
  & - (-6) \cdot (-72) + (-1) \cdot (-40)
  \\
  = {} & 8 - 320 + 320 + 385 - 432 + 40
  \\
  = {} & 1.
\end{aligned}
\]
:::

::: proof
我们用数学归纳法证明此事。
具体地，设 \(P(k)\) 为命题

> 对任何 \(n\) 级阵 \(A\)
> （其中，\(n \geqslant k\)），
> 对任何不超过 \(n\) 的 \(k\) 个正整数
> \(j_1\)、\(j_2\)、\(\dots\)、\(j_k\)
> （其中，\(j_1 < j_2 < \dots < j_k\)），
> \[
> \begin{aligned}
>   &
>   \det {(A)}
>   = \sum_{1 \leqslant i_1 < i_2 < \dots < i_k \leqslant n}
>   {\det {\left(
>         A\genfrac{\{}{\}}{0pt}{0}{i_1, i_2, \dots, i_k}{j_1, j_2, \dots, j_k}
>   \right)}}
>   \\
>   &
>   \qquad \qquad \qquad
>   \cdot (-1)^{i_1 + i_2 + \dots + i_k
>   + j_1 + j_2 + \dots + j_k}
>   \det {(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}))}.
> \end{aligned}
> \]

则，我们的目标是，
对任何正整数 \(k\)，\(P(k)\) 是对的。

\(k = 1\) 时，这就是按一列展开行列式。

现在，我们假定 \(P(k - 1)\) 是对的。
我们要证 \(P(k)\) 也是对的。
任取一个 \(n\) 级阵 \(A\)（\(n \geqslant k\)）。
任取不超过 \(n\) 的正整数
\(j_1\)、\(j_2\)、\(\dots\)、\(j_k\)，
且 \(j_1 < j_2 < \dots < j_k\)。
按列 \(j_1\) 展开行列式，
知
\[
\begin{aligned}
  \det {(A)} = \sum_{d_1 = 1}^{n}
  {[A]_{d_1,j_1} (-1)^{d_1 + j_1} \det {(A(d_1|j_1))}}.
\end{aligned}
\]

注意，
\(A\) 的列 \(j_2\)、\(j_3\)、\(\dots\)、\(j_k\)
跟 \(A(d_1|j_1)\) 的列 \(j_2 - 1\)、
\(j_3 - 1\)、\(\dots\)、\(j_k - 1\)
对应，
且 \(A\) 的行 \(i\)（\(i \neq d_1\)）
跟 \(A(d_1|j_1)\) 的行 \(i - \rho(i, d_1)\) 对应。
利用假定，
我们按列 \(j_2 - 1\)、\(j_3 - 1\)、\(\dots\)、\(j_k - 1\)
展开每个 \(\det {(A(d_1|j_1))}\)，
得
\[
\begin{aligned}
  &
  \det {(A(d_1|j_1))}
  = \sum_{\substack{
      1 \leqslant d_2 < \dots < d_k \leqslant n \\
      d_1 \neq d_2,\dots,d_k
  }}
  {\det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{d_2, \dots, d_k}{j_2, \dots, j_k}
  \right)}}
  \\
  &
  \qquad \qquad \qquad \qquad \qquad
  \cdot (-1)^{d_2 - \rho(d_2, d_1) + \dots
    + d_k - \rho(d_k, d_1)
  + j_2 + \dots + j_k - (k - 1)}
  \\
  &
  \qquad \qquad \qquad \qquad \qquad
  \cdot \det
  {(A({d_1,d_2,\dots,d_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
由分配律（还有加法的结合律与交换律），
\[
\begin{aligned}
  &
  \det {(A)}
  = \sum_{\substack{
      1 \leqslant d_1 \leqslant n               \\
      1 \leqslant d_2 < \dots < d_k \leqslant n \\
      d_1 \neq d_2,\dots,d_k
  }}
  {[A]_{d_1,j_1}
    (-1)^{d_1 + j_1}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{d_2, \dots, d_k}{j_2, \dots, j_k}
  \right)}}
  \\
  &
  \qquad \qquad \qquad \qquad
  \cdot (-1)^{d_2 - \rho(d_2, d_1) + \dots
    + d_k - \rho(d_k, d_1)
  + j_2 + \dots + j_k - (k - 1)}
  \\
  &
  \qquad \qquad \qquad \qquad
  \cdot \det {(A({d_1,d_2,\dots,d_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  &
  d_1 + j_1 + d_2 - \rho(d_2, d_1) + \dots
  + d_k - \rho(d_k, d_1)
  + j_2 + \dots + j_k - (k - 1)
  \\
  = {} &
  \hphantom{{} + {}}
  (d_1 + \dots + d_k) + (j_1 + \dots + j_k)
  \\
  &
  + (\rho(d_1, d_2) - 1) + \dots + (\rho(d_1, d_k) - 1)
  - (k - 1)
  \\
  = {} &
  (d_1 + \dots + d_k) + (j_1 + \dots + j_k)
  + (\rho(d_1, d_2) + \dots + \rho(d_1, d_k))
  - 2(k-1).
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(A)}
  = \sum_{\substack{
      1 \leqslant d_1 \leqslant n               \\
      1 \leqslant d_2 < \dots < d_k \leqslant n \\
      d_1 \neq d_2,\dots,d_k
  }}
  {(-1)^{\rho(d_1, d_2) + \dots + \rho(d_1, d_k)}
    [A]_{d_1,j_1}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{d_2, \dots, d_k}{j_2, \dots, j_k}
  \right)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot (-1)^{d_1 + \dots + d_k + j_1 + \dots + j_k}
  \det {(A({d_1,d_2,\dots,d_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]

注意，
\[
\begin{aligned}
  \sum_{\substack{
      1 \leqslant d_1 \leqslant n               \\
      1 \leqslant d_2 < \dots < d_k \leqslant n \\
      d_1 \neq d_2,\dots,d_k
  }} {f(d_1, \dots, d_k)}
  =
  \sum_{1 \leqslant i_1 < i_2 < \dots < i_k \leqslant n}
  { \sum_{\substack{
        1 \leqslant s \leqslant k \\
        d_1 = i_s       \\
        d_r = i_{r - \rho(s, r)}\,(2 \leqslant r \leqslant k)
    }}
  {f(d_1, \dots, d_k)}}.
\end{aligned}
\]
我解释此式。
要从 \(1\) 至 \(n\) 这 \(n\) 个整数中选出 \(k\) 个数
\(d_1\)、\(d_2\)、\(\dots\)、\(d_k\)，
适合条件 \(d_2 < \dots < d_k\)，
且 \(d_1\) 不跟 \(d_2\)、\(\dots\)、\(d_k\) 的任何一个相等，
我们可以先从
\(1\)、\(2\)、\(\dots\)、\(n\) 里从小到大地
挑 \(k\) 个数 \(i_1\)、\(i_2\)、\(\dots\)、\(i_k\)，
然后从 \(i_1\)、\(i_2\)、\(\dots\)、\(i_k\)
选第 \(s\) 小的数 \(i_s\) 为 \(d_1\)，
且分别取
\(d_2\)、\(d_3\)、\(\dots\)、\(d_k\)
为
\(i_1\)、\(\dots\)、\(i_{s-1}\)、
\(i_{s+1}\)、\(\dots\)、\(i_{k}\)。
（若 \(s = 1\)，则不出现 \(i_1\)；
若 \(s = k\)，则不出现 \(i_k\)。
下同。）
更具体地，我们使 \(d_1\) 为 \(i_s\)，
再使 \(d_r\)（\(r \geqslant 2\)）为 \(i_{\ell (r)}\)，
其中，\(2 \leqslant r \leqslant s\) 时 \(\ell (r) = r-1\)，
而 \(r > s\) 时 \(\ell (r) = r\)。
利用 \(\rho\)-记号，就是 \(d_1 = i_s\)，
且 \(d_r = i_{r - \rho(s, r)}\)（\(2 \leqslant r \leqslant k\)）。

当 \(d_1 = i_s\)，
且 \(d_r = i_{r - \rho(s, r)}\)
（\(2 \leqslant r \leqslant k\)）时，
\[
\begin{aligned}
  &
  d_1 = i_s,
  \\
  &
  \rho(d_1, d_2) + \dots + \rho(d_1, d_k)
  = s - 1 = (s + 1) - 2,
  \\
  &
  [A]_{d_1,j_1} = [A]_{i_s,j_1},
  \\
  &
  A\genfrac{\{}{\}}{0pt}{0}{d_2, \dots, d_k}{j_2, \dots, j_k}
  =
  A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_{s-1}, i_{s+1}, \dots, i_k}{j_2, \dots, j_k},
  \\
  &
  d_1 + \dots + d_k = i_1 + \dots + i_k,
  \\
  &
  A({d_1,d_2,\dots,d_k}|{j_1,j_2,\dots,j_k})
  =
  A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}).
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  \sum_{1 \leqslant i_1 < i_2 < \dots < i_k \leqslant n}
  {\sum_{1 \leqslant s \leqslant k}
    {(-1)^{s+1} [A]_{i_s,j_1}
      \det {\left(
          A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_{s-1},
          i_{s+1}, \dots, i_k}{j_2, \dots, j_k}
  \right)}}}
  \\
  &
  \qquad \qquad \qquad
  \cdot
  (-1)^{i_1 + \dots + i_k + j_1 + \dots + j_k}
  \det {(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
注意，\(i_1 + \dots + i_k\) 与
\(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k})\)
都跟 \(s\) 无关，
故由分配律（还有加法的结合律与交换律），
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  \sum_{1 \leqslant i_1 < i_2 < \dots < i_k \leqslant n}
  {\left(
      \sum_{1 \leqslant s \leqslant k}
      {(-1)^{s+1} [A]_{i_s,j_1}
        \det {\left(
            A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_{s-1},
            i_{s+1}, \dots, i_k}{j_2, \dots, j_k}
      \right)}}
  \right)}
  \\
  &
  \qquad \qquad \qquad
  \cdot
  (-1)^{i_1 + \dots + i_k + j_1 + \dots + j_k}
  \det {(A({i_1,i_2,\dots,i_k}|{j_1,j_2,\dots,j_k}))}.
\end{aligned}
\]
注意，\([A]_{i_s,j_1}\) 是
\(A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_k}{j_1, \dots, j_k}\) 的
\((s, 1)\)-元，故
\[
\begin{aligned}
  & \sum_{1 \leqslant s \leqslant k}
  {(-1)^{s+1} [A]_{i_s,j_1}
    \det {\left(
        A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_{s-1}, i_{s+1}, \dots, i_k}{j_2, \dots, j_k}
  \right)}}
  \\
  = {} & \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{i_1, \dots, i_k}{j_1, \dots, j_k}
  \right)}.
\end{aligned}
\]
综上，我们得
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
所以，\(P(k)\) 是对的。
由数学归纳法，待证的命题成立。
:::

我们以一个例结束本节。

::: example
设 \(a\)、\(b\)、\(c\)、\(d\)、
\(a'\)、\(b'\)、\(c'\)、\(d'\) 是数。
设 \(4\) 级阵
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    a & a' & a & a' \\
    b & b' & b & b' \\
    c & c' & c & c' \\
    d & d' & d & d' \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(\det {(A)}\)。

一方面，若我们按列 \(1\)、\(2\) 展开，则
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,2} \right)}\,
  (-1)^{1+2+1+2} \det {(A(1,2|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,2} \right)}\,
  (-1)^{1+3+1+2} \det {(A(1,3|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,2} \right)}\,
  (-1)^{1+4+1+2} \det {(A(1,4|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,2} \right)}\,
  (-1)^{2+3+1+2} \det {(A(2,3|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,2} \right)}\,
  (-1)^{2+4+1+2} \det {(A(2,4|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,2} \right)}\,
  (-1)^{3+4+1+2} \det {(A(3,4|1,2))}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,2} \right)}\,
  \det {(A(1,2|1,2))}
  - \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,2} \right)}\,
  \det {(A(1,3|1,2))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,2} \right)}\,
  \det {(A(1,4|1,2))}
  + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,2} \right)}\,
  \det {(A(2,3|1,2))}
  \\
  & - \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,2} \right)}\,
  \det {(A(2,4|1,2))}
  + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,2} \right)}\,
  \det {(A(3,4|1,2))}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {
    \begin{bmatrix}
      a & a' \\
      b & b' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      c & c' \\
      d & d' \\
    \end{bmatrix}
  }
  -
  \det {
    \begin{bmatrix}
      a & a' \\
      c & c' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      b & b' \\
      d & d' \\
    \end{bmatrix}
  }
  \\
  &
  +
  \det {
    \begin{bmatrix}
      a & a' \\
      d & d' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      b & b' \\
      c & c' \\
    \end{bmatrix}
  }
  +
  \det {
    \begin{bmatrix}
      b & b' \\
      c & c' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a & a' \\
      d & d' \\
    \end{bmatrix}
  }
  \\
  &
  -
  \det {
    \begin{bmatrix}
      b & b' \\
      d & d' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a & a' \\
      c & c' \\
    \end{bmatrix}
  }
  +
  \det {
    \begin{bmatrix}
      c & c' \\
      d & d' \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a & a' \\
      b & b' \\
    \end{bmatrix}
  }
  \\
  = {} &
  2 \left(
    \det {
      \begin{bmatrix}
        a & a' \\
        b & b' \\
      \end{bmatrix}
    }
    \det {
      \begin{bmatrix}
        c & c' \\
        d & d' \\
      \end{bmatrix}
    }
    -
    \det {
      \begin{bmatrix}
        a & a' \\
        c & c' \\
      \end{bmatrix}
    }
    \det {
      \begin{bmatrix}
        b & b' \\
        d & d' \\
      \end{bmatrix}
    }
    \right.
    \\
    &
    \left.
    \quad
    +
    \det {
      \begin{bmatrix}
        a & a' \\
        d & d' \\
      \end{bmatrix}
    }
    \det {
      \begin{bmatrix}
        b & b' \\
        c & c' \\
      \end{bmatrix}
    }
  \right)
  \\
  = {} &
  2 ((a b' - a' b) (c d' - c' d)
    - (a c' - a' c) (b d' - b' d)
  + (a d' - a' d) (b c' - b' c)).
\end{aligned}
\]
另一方面，若我们按列 \(1\)、\(3\) 展开，则
\[
\begin{aligned}
  &
  \det {(A)}
  \\
  = {} &
  \hphantom{{} + {}}
  \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,3} \right)}\,
  (-1)^{1+2+1+3} \det {(A(1,2|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,3} \right)}\,
  (-1)^{1+3+1+3} \det {(A(1,3|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,3} \right)}\,
  (-1)^{1+4+1+3} \det {(A(1,4|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,3} \right)}\,
  (-1)^{2+3+1+3} \det {(A(2,3|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,3} \right)}\,
  (-1)^{2+4+1+3} \det {(A(2,4|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,3} \right)}\,
  (-1)^{3+4+1+3} \det {(A(3,4|1,3))}
  \\
  = {} &
  -
  \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,2}{1,3} \right)}\,
  \det {(A(1,2|1,3))}
  + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,3}{1,3} \right)}\,
  \det {(A(1,3|1,3))}
  \\
  & - \det {\left( A\genfrac{\{}{\}}{0pt}{0}{1,4}{1,3} \right)}\,
  \det {(A(1,4|1,3))}
  - \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,3}{1,3} \right)}\,
  \det {(A(2,3|1,3))}
  \\
  & + \det {\left( A\genfrac{\{}{\}}{0pt}{0}{2,4}{1,3} \right)}\,
  \det {(A(2,4|1,3))}
  - \det {\left( A\genfrac{\{}{\}}{0pt}{0}{3,4}{1,3} \right)}\,
  \det {(A(3,4|1,3))}
  \\
  = {} &
  -
  \det {
    \begin{bmatrix}
      a & a \\
      b & b \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      c' & c' \\
      d' & d' \\
    \end{bmatrix}
  }
  +
  \det {
    \begin{bmatrix}
      a & a \\
      c & c \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      b' & b' \\
      d' & d' \\
    \end{bmatrix}
  }
  \\
  &
  -
  \det {
    \begin{bmatrix}
      a & a \\
      d & d \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      b' & b' \\
      c' & c' \\
    \end{bmatrix}
  }
  -
  \det {
    \begin{bmatrix}
      b & b \\
      c & c \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a' & a' \\
      d' & d' \\
    \end{bmatrix}
  }
  \\
  &
  +
  \det {
    \begin{bmatrix}
      b & b \\
      d & d \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a' & a' \\
      c' & c' \\
    \end{bmatrix}
  }
  -
  \det {
    \begin{bmatrix}
      c & c \\
      d & d \\
    \end{bmatrix}
  }
  \det {
    \begin{bmatrix}
      a' & a' \\
      b' & b' \\
    \end{bmatrix}
  }.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      x & x \\
      y & y \\
    \end{bmatrix}
  }
  = x y - y x = 0.
\end{aligned}
\]
则 \(\det {(A)} = 0\)。

于是，比较 \(2\) 次计算的结果，我们得
\[
\begin{aligned}
  (a b' - a' b) (c d' - c' d)
  - (a c' - a' c) (b d' - b' d)
  + (a d' - a' d) (b c' - b' c)
  = 0.
\end{aligned}
\]

值得提，我们也可以直接地验证：
\[
\begin{aligned}
  &
  (a b' - a' b) (c d' - c' d)
  - (a c' - a' c) (b d' - b' d)
  + (a d' - a' d) (b c' - b' c)
  \\
  = {} &
  \hphantom{{} + {}}
  (a b' c d' - a b' c' d - a' b c d' + a' b c' d)
  \\
  &
  - (a b c' d' - a b' c' d - a' b c d' + a' b' c d)
  \\
  &
  + (a b c' d' - a b' c d' - a' b c' d + a' b' c d)
  \\
  = {} &
  \hphantom{{} + {}}
  a b' c d' - a b' c' d - a' b c d' + a' b c' d
  - a b c' d' + a b' c' d + a' b c d' - a' b' c d
  \\
  &
  + a b c' d' - a b' c d' - a' b c' d + a' b' c d
  \\
  = {} &
  0.
\end{aligned}
\]
:::
