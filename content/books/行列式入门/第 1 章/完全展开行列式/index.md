---
title: 完全展开行列式
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

前面，我们研究了按一列展开行列式。
它变大级阵的行列式为一些小级阵的行列式。
本节，我们考虑完全展开行列式。
它直接地用阵的元写出行列式的具体的公式。

其实，我给出行列式的定义后，
我们立即算出了小级阵（不超过 \(4\)）
的行列式的具体的公式。
\(1\) 级阵的行列式非常简单，且有 \(1\) 项；
\(2\) 级阵的行列式不难，且有 \(2\) 项；
\(3\) 级阵的行列式较难，且有 \(6\) 项；
\(4\) 级阵的行列式更复杂，且有 \(24\) 项。
一般地，

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(j_1\)、\(j_2\)、\(\dots\)、\(j_n\) 是
不超过 \(n\) 的正整数，
且互不相同。
则
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    s(j_1, j_2, \dots, j_n)\,
  [A]_{i_1,j_1} [A]_{i_2,j_2} \dots [A]_{i_n,j_n}}.
\end{aligned}
\]
特别地，取 \(j_1\)、\(j_2\)、\(\dots\)、\(j_n\)
为 \(1\)、\(2\)、\(\dots\)、\(n\)，
并注意，\(s(1, 2, \dots, n) = 1\)，
得
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
  [A]_{i_1,1} [A]_{i_2,2} \dots [A]_{i_n,n}}.
\end{aligned}
\]
:::

::: proof
我们按列 \(j_1\) 展开 \(\det {(A)}\)，
得
\[
\begin{aligned}
  \det {(A)}
  = \sum_{1 \leqslant i_1 \leqslant n}
  {(-1)^{i_1 + j_1} [A]_{i_1,j_1} \det {(A(i_1|j_1))}}.
\end{aligned}
\]

注意，\(A\) 的列 \(j_2\) 对应
\(A(i_1|j_1)\) 的列 \(j_2 - \rho(j_2, j_1)\)，
且 \(A\) 的行 \(i_2\)（\(i_2 \neq i_1\)）对应
\(A(i_1|j_1)\) 的行 \(i_2 - \rho(i_2, i_1)\)。
再注意，
\[
\begin{aligned}
  i_2 - \rho(i_2, i_1) + j_2 - \rho(j_2, j_1)
  = i_2 + j_2 + \rho(i_1, i_2) + \rho(j_1, j_2) - 2,
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(A(i_1|j_1))}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant i_2 \leqslant n \\
      i_2 \neq i_1
  }}
  {(-1)^{i_2 + j_2 + \rho(i_1, i_2) + \rho(j_1, j_2)}
  [A]_{i_2,j_2} \det {(A({i_1,i_2}|{j_1,j_2}))}}.
\end{aligned}
\]

……

注意，\(A\) 的列 \(j_k\) 对应
\(A({i_1,\dots,i_{k-1}}|{j_1,\dots,j_{k-1}})\) 的
列 \(j_k - \rho(j_k, j_1) - \dots - \rho(j_k, j_{k-1})\)，
且 \(A\) 的行 \(i_k\)
（\(i_k \neq i_1\)、\(\dots\)、\(i_{k-1}\)）对应
\(A({i_1,\dots,i_{k-1}}|{j_1,\dots,j_{k-1}})\) 的
行 \(i_k - \rho(i_k, i_1) - \dots - \rho(i_k, i_{k-1})\)。
再注意，
\[
\begin{aligned}
  &
  i_k - \rho(i_k, i_1) - \dots - \rho(i_k, i_{k-1})
  + j_k - \rho(j_k, j_1) - \dots - \rho(j_k, j_{k-1})
  \\
  = {} &
  i_k + j_k
  + \rho(i_1, i_k) + \dots + \rho(i_{k-1}, i_k)
  + \rho(j_1, j_k) + \dots + \rho(j_{k-1}, j_k)
  - 2(k-1),
\end{aligned}
\]
故
\[
\begin{aligned}
  &
  \det {(A({i_1,\dots,i_{k-1}}|{j_1,\dots,j_{k-1}}))}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant i_k \leqslant n \\
      i_k \neq i_1, \dots, i_{k-1}
  }}
  {(-1)^{i_k + j_k
      + \rho(i_1, i_k) + \dots + \rho(i_{k-1}, i_k)
      + \rho(j_1, j_k) + \dots
  + \rho(j_{k-1}, j_k)}}
  \\
  &
  \qquad \qquad
  \cdot
  [A]_{i_k,j_k}
  \det {(A({i_1,\dots,i_{k}}|{j_1,\dots,j_{k}}))}.
\end{aligned}
\]

……

最后，我们得
\[
\begin{aligned}
  &
  \det {(A({i_1,\dots,i_{n-1}}|{j_1,\dots,j_{n-1}}))}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant i_n \leqslant n \\
      i_n \neq i_1, \dots, i_{n-1}
  }}
  {(-1)^{i_n + j_n
      + \rho(i_1, i_n) + \dots + \rho(i_{n-1}, i_n)
    + \rho(j_1, j_n) + \dots + \rho(j_{n-1}, j_n)}
  [A]_{i_n,j_n}}.
\end{aligned}
\]
（其实，这就是 \([A]_{i_n,j_n}\)；
这里，注意，
\[
\begin{aligned}
  & 1 + 1
  \\
  = {} &
  i_n - \rho(i_n, i_1) - \dots - \rho(i_n, i_{n-1})
  + j_n - \rho(j_n, j_1) - \dots - \rho(j_n, j_{n-1})
  \\
  = {} &
  i_n + j_n
  + \rho(i_1, i_n) + \dots + \rho(i_{n-1}, i_n)
  + \rho(j_1, j_n) + \dots + \rho(j_{n-1}, j_n)
  - 2(n-1),
\end{aligned}
\]
故
\[
\begin{aligned}
  1 = (-1)^{1+1}
  = (-1)^{i_n + j_n
    + \rho(i_1, i_n) + \dots + \rho(i_{n-1}, i_n)
  + \rho(j_1, j_n) + \dots + \rho(j_{n-1}, j_n)}.
\end{aligned}
\]
可见本章，节 1，
*2*，
3，
*4*。）

我们从后向前地代入，得
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} & \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {(-1)^{i_1 + j_1 + i_2 + j_2 + \dots + i_n + j_n
      + \tau(i_1, i_2, \dots, i_n)
  + \tau(j_1, j_2, \dots, j_n)}}
  \\
  &
  \qquad \qquad \qquad
  \cdot
  [A]_{i_1,j_1} [A]_{i_2,j_2} \dots [A]_{i_n,j_n}.
\end{aligned}
\]
最后，注意，
\[
\begin{aligned}
  i_1 + j_1 + i_2 + j_2 + \dots + i_n + j_n
  = 2(1 + 2 + \dots + n)
\end{aligned}
\]
是偶数，
\(s\)-记号跟 \(\tau\)-记号的关系，
与 \(-1\) 的整数次方的性质，
得
\[
\begin{aligned}
  & \det {(A)}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant i_1, i_2, \dots, i_n \leqslant n \\
      i_1, i_2, \dots, i_n\,\text{互不相同}
  }}
  {s(i_1, i_2, \dots, i_n)\,
    s(j_1, j_2, \dots, j_n)\,
  [A]_{i_1,j_1} [A]_{i_2,j_2} \dots [A]_{i_n,j_n}}.
\end{aligned}
\]
:::

::: example
设 \(A\) 为 \(1\) 级阵。
那么，适合条件
“\(1 \leqslant i_1 \leqslant 1\)，
且 \(i_1\) 互不相同”的
\((i_1)\) 恰有 \(1\) 个：
\((1)\)。
回想 \(s(i_1) = 1\)。
故 \(\det {(A)} = [A]_{1,1}\)。
:::

::: example
设 \(A\) 为 \(2\) 级阵。
那么，适合条件
“\(1 \leqslant i_1, i_2 \leqslant 2\)，
且 \(i_1\)、\(i_2\) 互不相同”的
\((i_1, i_2)\) 恰有 \(2\) 个：
\[
\begin{aligned}
  (1, 2), \quad (2, 1).
\end{aligned}
\]
回想
\[
\begin{aligned}
  s(i_1, i_2)
  = \operatorname{sgn} {(i_2 - i_1)}.
\end{aligned}
\]
不难算出，
\[
\begin{aligned}
  s(1, 2) = 1, \quad s(2, 1) = -1.
\end{aligned}
\]
故
\[
\det {(A)}
= [A]_{1,1} [A]_{2,2} - [A]_{2,1} [A]_{1,2}.
\]
:::

::: example
设 \(A\) 为 \(3\) 级阵。
那么，适合条件
“\(1 \leqslant i_1, i_2, i_3 \leqslant 3\)，
且 \(i_1\)、\(i_2\)、\(i_3\) 互不相同”的
\((i_1, i_2, i_3)\) 恰有 \(6\) 个：
\[
\begin{aligned}
  & (1, 2, 3), \quad (2, 3, 1), \quad (3, 1, 2), \\
  & (1, 3, 2), \quad (2, 1, 3), \quad (3, 2, 1).
\end{aligned}
\]
回想
\[
\begin{aligned}
  s(i_1, i_2, i_3)
  = \operatorname{sgn} {(i_2 - i_1)}
  \cdot \operatorname{sgn} {(i_3 - i_1)}
  \cdot \operatorname{sgn} {(i_3 - i_2)}.
\end{aligned}
\]
不难算出，
\[
\begin{aligned}
  & s(1, 2, 3) = s(2, 3, 1) = s(3, 1, 2) = 1,  \\
  & s(1, 3, 2) = s(2, 1, 3) = s(3, 2, 1) = -1.
\end{aligned}
\]
故
\[
\begin{aligned}
  \det {(A)}
  = {} &
  \hphantom{{} + {}}
  [A]_{1,1} [A]_{2,2} [A]_{3,3}
  + [A]_{2,1} [A]_{3,2} [A]_{1,3}
  + [A]_{3,1} [A]_{1,2} [A]_{2,3}
  \\
  &
  - [A]_{1,1} [A]_{3,2} [A]_{2,3}
  - [A]_{2,1} [A]_{1,2} [A]_{3,3}
  - [A]_{3,1} [A]_{2,2} [A]_{1,3}.
\end{aligned}
\]
:::

::: example
设 \(A\) 为 \(4\) 级阵。
那么，适合条件
“\(1 \leqslant i_1, i_2, i_3, i_4 \leqslant 4\)，
且 \(i_1\)、\(i_2\)、\(i_3\)、\(i_4\) 互不相同”的
\((i_1, i_2, i_3, i_4)\) 恰有 \(24\) 个：
\[
\begin{aligned}
  &
  (1, 2, 3, 4), \quad (1, 3, 4, 2), \quad (1, 4, 2, 3),
  \quad
  (1, 2, 4, 3), \quad (1, 3, 2, 4), \quad (1, 4, 3, 2),
  \\
  &
  (2, 1, 3, 4), \quad (2, 3, 4, 1), \quad (2, 4, 1, 3),
  \quad
  (2, 1, 4, 3), \quad (2, 3, 1, 4), \quad (2, 4, 3, 1),
  \\
  &
  (3, 1, 2, 4), \quad (3, 2, 4, 1), \quad (3, 4, 1, 2),
  \quad
  (3, 1, 4, 2), \quad (3, 2, 1, 4), \quad (3, 4, 2, 1),
  \\
  &
  (4, 1, 2, 3), \quad (4, 2, 3, 1), \quad (4, 3, 1, 2),
  \quad
  (4, 1, 3, 2), \quad (4, 2, 1, 3), \quad (4, 3, 2, 1).
\end{aligned}
\]
回想
\[
\begin{aligned}
  s(i_1, i_2, i_3, i_4)
  = {} &
  \hphantom{\cdot\,\,}
  \operatorname{sgn} {(i_2 - i_1)}
  \cdot \operatorname{sgn} {(i_3 - i_1)}
  \cdot \operatorname{sgn} {(i_3 - i_2)}
  \\
  &
  \cdot \operatorname{sgn} {(i_4 - i_1)}
  \cdot \operatorname{sgn} {(i_4 - i_2)}
  \cdot \operatorname{sgn} {(i_4 - i_3)}.
\end{aligned}
\]
不难算出，
\[
\begin{aligned}
  & s(1, 2, 3, 4) = s(1, 3, 4, 2) = s(1, 4, 2, 3) = 1,
  \\
  & s(1, 2, 4, 3) = s(1, 3, 2, 4) = s(1, 4, 3, 2) = -1,
  \\
  & s(2, 1, 3, 4) = s(2, 3, 4, 1) = s(2, 4, 1, 3) = -1,
  \\
  & s(2, 1, 4, 3) = s(2, 3, 1, 4) = s(2, 4, 3, 1) = 1,
  \\
  & s(3, 1, 2, 4) = s(3, 2, 4, 1) = s(3, 4, 1, 2) = 1,
  \\
  & s(3, 1, 4, 2) = s(3, 2, 1, 4) = s(3, 4, 2, 1) = -1,
  \\
  & s(4, 1, 2, 3) = s(4, 2, 3, 1) = s(4, 3, 1, 2) = -1,
  \\
  & s(4, 1, 3, 2) = s(4, 2, 1, 3) = s(4, 3, 2, 1) = 1.
\end{aligned}
\]
故 \(\det {(A)}\) 等于
\[
\begin{aligned}
  & \hphantom{{} + {}}
  [A]_{1,1} [A]_{2,2} [A]_{3,3} [A]_{4,4}
  + [A]_{1,1} [A]_{3,2} [A]_{4,3} [A]_{2,4}
  + [A]_{1,1} [A]_{4,2} [A]_{2,3} [A]_{3,4}
  \\
  &
  - [A]_{1,1} [A]_{2,2} [A]_{4,3} [A]_{3,4}
  - [A]_{1,1} [A]_{3,2} [A]_{2,3} [A]_{4,4}
  - [A]_{1,1} [A]_{4,2} [A]_{3,3} [A]_{2,4}
  \\
  &
  - [A]_{2,1} [A]_{1,2} [A]_{3,3} [A]_{4,4}
  - [A]_{2,1} [A]_{3,2} [A]_{4,3} [A]_{1,4}
  - [A]_{2,1} [A]_{4,2} [A]_{1,3} [A]_{3,4}
  \\
  &
  + [A]_{2,1} [A]_{1,2} [A]_{4,3} [A]_{3,4}
  + [A]_{2,1} [A]_{3,2} [A]_{1,3} [A]_{4,4}
  + [A]_{2,1} [A]_{4,2} [A]_{3,3} [A]_{1,4}
  \\
  &
  + [A]_{3,1} [A]_{1,2} [A]_{2,3} [A]_{4,4}
  + [A]_{3,1} [A]_{2,2} [A]_{4,3} [A]_{1,4}
  + [A]_{3,1} [A]_{4,2} [A]_{1,3} [A]_{2,4}
  \\
  &
  - [A]_{3,1} [A]_{1,2} [A]_{4,3} [A]_{2,4}
  - [A]_{3,1} [A]_{2,2} [A]_{1,3} [A]_{4,4}
  - [A]_{3,1} [A]_{4,2} [A]_{2,3} [A]_{1,4}
  \\
  &
  - [A]_{4,1} [A]_{1,2} [A]_{2,3} [A]_{3,4}
  - [A]_{4,1} [A]_{2,2} [A]_{3,3} [A]_{1,4}
  - [A]_{4,1} [A]_{3,2} [A]_{1,3} [A]_{2,4}
  \\
  &
  + [A]_{4,1} [A]_{1,2} [A]_{3,3} [A]_{2,4}
  + [A]_{4,1} [A]_{2,2} [A]_{1,3} [A]_{3,4}
  + [A]_{4,1} [A]_{3,2} [A]_{2,3} [A]_{1,4}.
\end{aligned}
\]
这跟我们在 @emp:DetOfSquareMatrixOfSize4 的计算
是一样的。
:::

利用完全展开，
我们不难看出，
\(n\) 级阵的行列式有
\(n \cdot (n - 1) \cdot \dots \cdot 2 \cdot 1\) 项。
“\(1 \leqslant i_1, i_2, \dots, i_n \leqslant n\)，
且 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\) 互不相同”
相当于 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
是 \(1\)、\(2\)、\(\dots\)、\(n\) 的排列。
我们知道，\(n\) 个互不相同的文字共有
\(n \cdot (n - 1) \cdot \dots \cdot 2 \cdot 1\) 个
排列。
