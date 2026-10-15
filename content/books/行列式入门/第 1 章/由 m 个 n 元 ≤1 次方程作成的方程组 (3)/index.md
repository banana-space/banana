---
title: '由 \(m\) 个 \(n\) 元 \(\leq 1\) 次方程作成的方程组 (3)'
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

前面，我们讨论了
\(AX = B\) 有解时，
\(A\)、\(B\) 应适合的条件：

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
设存在 \(n \times 1\) 阵 \(C\)
适合 \(AC = B\)。
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
则存在一个非负整数 \(r\)，使
\(A\) 有一个行列式非零的 \(r\) 级子阵
（从而 \(G\) 也有一个行列式非零的 \(r\) 级子阵），
但 \(G\) 没有行列式非零的 \(r+1\) 级子阵
（从而 \(A\) 也没有行列式非零的 \(r+1\) 级子阵）。
:::

那么，反过来，
若 \(A\) 有一个行列式非零的 \(r\) 级子阵，
但 \(G\) 没有行列式非零的 \(r+1\) 级子阵，
则 \(AX = B\) 是否有解？
此事的回答是“是”。
不过，为了论证此事，
我们要作准备。

::: theorem
设 \(A\) 是 \(n\) 级阵。
设 \(p\)、\(q\) 是 \(2\) 个不超过 \(n\) 的正整数，
且 \(p \neq q\)。
设 \(x\) 是一个数。
作 \(n\) 级阵 \(L\)，其中，
\[
\begin{aligned}
  [L]_{i,j} =
  \begin{cases}
    [A]_{i,j},              & j \neq q; \\
    [A]_{i,q} + x[A]_{i,p}, & j = q.
  \end{cases}
\end{aligned}
\]
（通俗地，
加 \(A\) 的列 \(p\) 的 \(x\) 倍于列 \(q\)，
且不改变别的列，
得阵 \(L\)。）
则 \(\det {(L)} = \det {(A)}\)。

类似地，
若加 \(A\) 的行 \(p\) 的 \(x\) 倍于行 \(q\)，
且不改变别的行，
得阵 \(K\)，
则 \(\det {(K)} = \det {(A)}\)。
:::

::: proof
我证明关于列的事；
我们可用类似的方法证明关于行的事
（或者，利用行列式与转置的关系）。

作一个 \(n\) 级阵 \(S\)，
使 \(S\) 的列 \(j\) 等于 \(A\) 的列 \(j\)
（若 \(j \neq q\)），
且 \(S\) 的列 \(q\) 等于 \(A\) 的列 \(p\)。
则 \(S\) 的列 \(p\) 等于 \(S\) 的列 \(q\)，
且 \(L\) 的列 \(j\)、\(A\) 的列 \(j\)，
与 \(S\) 的列 \(j\) 相等
（若 \(j \neq q\)），
但 \([L]_{i,q} = 1 [A]_{i,q} + x [S]_{i,q}\)。
由多线性与交错性，
\[
\det {(L)}
=
1 \det {(A)} + x \det {(S)}
=
\det {(A)} + x\, 0
=
\det {(A)}.
\]
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵，
且 \(A \neq 0\)。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵
\[
\begin{aligned}
  A_r = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
\end{aligned}
\]
（其中，
\(1 \leqslant i_1 < \dots < i_r \leqslant m\)，
且 \(1 \leqslant j_1 < \dots < j_r \leqslant n\)），
但 \(A\) 没有行列式非零的 \(r+1\) 级子阵。
那么，对任何不超过 \(m\) 的正整数 \(p\)，
存在 \(r\) 个数
\(d_{p,1}\)、\(d_{p,2}\)、\(\dots\)、\(d_{p,r}\)，
使对任何不超过 \(n\) 的正整数 \(q\)，
\[
\begin{aligned}
  [A]_{p,q}
  = [A]_{i_1,q} d_{p,1}
  + [A]_{i_2,q} d_{p,2}
  + \dots
  + [A]_{i_r,q} d_{p,r}
  =
  \sum_{s = 1}^{r} {[A]_{i_s,q} d_{p,s}}.
\end{aligned}
\]
:::

我们也可如此说前面的结论：

::: theorem
设 \(A\) 是 \(m \times n\) 阵，
且 \(A \neq 0\)。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵
\[
\begin{aligned}
  A_r = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
\end{aligned}
\]
（其中，
\(1 \leqslant i_1 < \dots < i_r \leqslant m\)，
且 \(1 \leqslant j_1 < \dots < j_r \leqslant n\)），
但 \(A\) 没有行列式非零的 \(r+1\) 级子阵。
设 \(A\) 的
行 \(1\)、\(2\)、\(\dots\)、\(m\)
为 \(a_1\)、\(a_2\)、\(\dots\)、\(a_m\)。
那么，对任何不超过 \(m\) 的正整数 \(p\)，
存在 \(r\) 个数
\(d_{p,1}\)、\(d_{p,2}\)、\(\dots\)、\(d_{p,r}\)，
使
\[
\begin{aligned}
  a_p
  = d_{p,1} a_{i_1}
  + d_{p,2} a_{i_2}
  + \dots
  + d_{p,r} a_{i_r}
  = \sum_{s = 1}^{r} {d_{p,s} a_{i_s}}.
\end{aligned}
\]
:::

通俗地，这个定理说，
任给一个非零的阵 \(A\)，
我们总能找出它的某 \(r\) 行
\(a_{i_1}\)、\(a_{i_2}\)、\(\dots\)、\(a_{i_r}\)，
使 \(A\) 的每行都可被写为
这 \(r\) 行的数乘的和，
且由这 \(r\) 行作成的子阵有一个
行列式非零的 \(r\) 级子阵。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 0 & 0 & 0 & 0 & -1 \\
    0 & 1 & 0 & 0 & 0 & 1  \\
    0 & 0 & 1 & 0 & 0 & 0  \\
    0 & 1 & 1 & 0 & 0 & 1  \\
  \end{bmatrix}.
\end{aligned}
\]
不难看出，\(A\) 有一个 \(3\) 级子阵，其的行列式非零：
\[
\begin{aligned}
  \det {\left(
      A\genfrac{\{}{\}}{0pt}{0}{1,2,3}{1,2,3}
  \right)} = 1.
\end{aligned}
\]
不过，\(A\) 没有行列式非零的 \(4\) 级子阵。
我们考虑 \(A\) 的列 \(4\)、\(5\)。
任取 \(A\) 的一个 \(4\) 级子阵。
若 \(A\) 的列 \(4\) 或列 \(5\) 被选中，
那么它的行列式显然为 \(0\)。
若 \(A\) 的列 \(4\) 与列 \(5\) 都不被选中，
则这个子阵是
\[
\begin{aligned}
  A\genfrac{\{}{\}}{0pt}{0}{1,2,3,4}{1,2,3,6} =
  \begin{bmatrix}
    1 & 0 & 0 & -1 \\
    0 & 1 & 0 & 1  \\
    0 & 0 & 1 & 0  \\
    0 & 1 & 1 & 1  \\
  \end{bmatrix}.
\end{aligned}
\]
不难算出，它的行列式为 \(0\)。

我们说，\(A\) 的每行可被写为
\(A\) 的前 \(3\) 行的数乘的和。
设 \(A\) 的
行 \(1\)、\(2\)、\(3\)、\(4\)
为 \(a_1\)、\(a_2\)、\(a_3\)、\(a_4\)。
则
\[
\begin{aligned}
  a_1 & = 1a_1 + 0a_2 + 0a_3, \\
  a_2 & = 0a_1 + 1a_2 + 0a_3, \\
  a_3 & = 0a_1 + 0a_2 + 1a_3, \\
  a_4 & = 0a_1 + 1a_2 + 1a_3.
\end{aligned}
\]
并且，由这 \(3\) 行作成的子阵有一个
行列式非零的 \(3\) 级子阵：
\(3\) 级单位阵就是一个。

当然，
\(A\) 的每行可被写为
\(A\) 的前 \(4\) 行的数乘的和：
\[
\begin{aligned}
  a_1 & = 1a_1 + 0a_2 + 0a_3 + 0a_4, \\
  a_2 & = 0a_1 + 1a_2 + 0a_3 + 0a_4, \\
  a_3 & = 0a_1 + 0a_2 + 1a_3 + 0a_4, \\
  a_4 & = 0a_1 + 0a_2 + 0a_3 + 1a_4.
\end{aligned}
\]
可是，由这 \(4\) 行作成的子阵没有
行列式非零的 \(4\) 级子阵。
:::

::: proof
任取不超过 \(m\) 的正整数 \(p\)。

若 \(p\) 等于某个 \(i_s\)
（\(s = 1\)、\(2\)、\(\dots\)、\(r\)），
我们取
\[
\begin{aligned}
  d_{p,v} =
  \begin{cases}
    1, & v = s;    \\
    0, & v \neq s.
  \end{cases}
\end{aligned}
\]
于是，对任何不超过 \(n\) 的正整数 \(q\)，
\[
\begin{aligned}
  [A]_{i_1,q} d_{p,1}
  + [A]_{i_2,q} d_{p,2}
  + \dots
  + [A]_{i_r,q} d_{p,r}
  = [A]_{i_s,q} 1
  = [A]_{p,q}.
\end{aligned}
\]

下设 \(p\) 不等于任何 \(i_s\)。

考虑
由 \(r\) 个 \(r\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\left\{
\begin{aligned}
  [A]_{i_1,j_1} x_1 + [A]_{i_2,j_1} x_2 + \dots + [A]_{i_r,j_1} x_r & = [A]_{p,j_1}, \\
  [A]_{i_1,j_2} x_1 + [A]_{i_2,j_2} x_2 + \dots + [A]_{i_r,j_2} x_r & = [A]_{p,j_2}, \\
  & \dots, \\
  [A]_{i_1,j_r} x_1 + [A]_{i_2,j_r} x_2 + \dots + [A]_{i_r,j_r} x_r & = [A]_{p,j_r},
\end{aligned}
\right.
\]
即
\[
\begin{aligned}
  A_r^{\mathrm{T}}
  \begin{bmatrix}
    x_1    \\
    x_2    \\
    \vdots \\
    x_r    \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    [A]_{p,j_1} \\
    [A]_{p,j_2} \\
    \vdots      \\
    [A]_{p,j_r} \\
  \end{bmatrix}.
\end{aligned}
\]
因为
\(\det {(A_r^{\mathrm{T}})}
  = \det {(A_r)} \neq 0\)，
故，由 Cramer 公式，
存在 \(r\) 个数
\(d_{p,1}\)、\(d_{p,2}\)、\(\dots\)、\(d_{p,r}\)，
使
\[
\begin{aligned}
  [A]_{i_1,j_1} d_{p,1} + [A]_{i_2,j_1} d_{p,2} + \dots + [A]_{i_r,j_1} d_{p,r} & = [A]_{p,j_1}, \\
  [A]_{i_1,j_2} d_{p,1} + [A]_{i_2,j_2} d_{p,2} + \dots + [A]_{i_r,j_2} d_{p,r} & = [A]_{p,j_2}, \\
  & \dots, \\
  [A]_{i_1,j_r} d_{p,1} + [A]_{i_2,j_r} d_{p,2} + \dots + [A]_{i_r,j_r} d_{p,r} & = [A]_{p,j_r}.
\end{aligned}
\]
我们由此证明，对任何不超过 \(n\) 的正整数 \(q\)，
\[
\begin{aligned}
  [A]_{p,q} =
  [A]_{i_1,q} d_{p,1}
  + [A]_{i_2,q} d_{p,2}
  + \dots
  + [A]_{i_r,q} d_{p,r}.
\end{aligned}
\]

若 \(q\) 等于某个 \(j_\ell\)，显然。
下设 \(q\) 不等于任何 \(j_\ell\)。

考虑 \(A\) 的 \(r+1\) 级子阵
\[
\begin{aligned}
  K =
  A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r,p}{j_1,\dots,j_r,q}.
\end{aligned}
\]
我们用重要思想，算 \(2\) 次，
证我们想要的等式。

一方面，我们知道，既然
\(A\) 没有行列式非零的 \(r+1\) 级子阵，
故 \(\det {(K)} = 0\)。

另一方面，我们也可适当地作辅助阵，
其的行列式等于 \(K\) 的行列式。
从而，计算这些辅助阵的行列式，
也就相当于计算 \(K\) 的行列式。
为方便，我们记
\(i_{r+1} = p\)，
且 \(j_{r+1} = q\)。
设 \(i_s\) 在
\(i_1\)、\(\dots\)、\(i_r\)、\(i_{r+1}\)
中是第 \(f(i_s)\) 小的数；
设 \(j_\ell\) 在
\(j_1\)、\(\dots\)、\(j_r\)、\(j_{r+1}\)
中是第 \(g(j_\ell)\) 小的数。
加 \(K\) 的行 \(f(i_1)\) 的 \(-d_{p,1}\) 倍
于行 \(f(p)\)，
得阵 \(K_1\)。
则 \(\det {(K_1)} = \det {(K)}\)。
加 \(K_1\) 的行 \(f(i_2)\) 的 \(-d_{p,2}\) 倍
于行 \(f(p)\)，
得阵 \(K_2\)。
则 \(\det {(K_2)} = \det {(K_1)} = \det {(K)}\)。
……
加 \(K_{r-1}\) 的行 \(f(i_r)\) 的 \(-d_{p,r}\) 倍
于行 \(f(p)\)，
得阵 \(K_r\)。
则 \(\det {(K_r)} = \det {(K_{r-1})} = \det {(K)}\)。
注意，\(K_r\) 的行
\(f(i_1)\)、\(f(i_2)\)、\(\dots\)、\(f(i_r)\)
分别跟 \(K\) 的行
\(f(i_1)\)、\(f(i_2)\)、\(\dots\)、\(f(i_r)\)
相等；
不过，
\[
\begin{aligned}
  [K_r]_{f(p),g(v)}
  = [A]_{p,v} -
  \sum_{s = 1}^{r}
  {[A]_{i_s,v} d_{p,s}},
\end{aligned}
\]
其中，\(v = j_1\)、\(\dots\)、\(j_r\)、\(q\)。
所以，当
\(g(v) \neq g(q)\)
时，
\([K_r]_{f(p),g(v)} = 0\)。
我们按行 \(f(p)\) 展开 \(K_r\) 的行列式，
得
\[
\begin{aligned}
  \det {(K_r)}
  = {} &
  (-1)^{f(p)+g(q)} [K_r]_{f(p),g(q)}
  \det {(K_r (f(p)|g(q)))}
  \\
  = {} &
  (-1)^{f(p)+g(q)} \det {(A_r)}
  \left(
    [A]_{p,q} -
    \sum_{s = 1}^{r}
    {[A]_{i_s,q} d_{p,s}}
  \right).
\end{aligned}
\]

回想，\(0 = \det {(K)}\)，
且 \(\det {(K)} = \det {(K_r)}\)。
比较 \(2\) 次计算的结果，我们得
\[
\begin{aligned}
  0 =
  (-1)^{f(p)+g(q)} \det {(A_r)}
  \left(
    [A]_{p,q} -
    \sum_{s = 1}^{r}
    {[A]_{i_s,q} d_{p,s}}
  \right).
\end{aligned}
\]
注意，
\((-1)^{f(p)+g(q)} \det {(A_r)} \neq 0\)，
故
\[
[A]_{p,q} -
\sum_{s = 1}^{r}
{[A]_{i_s,q} d_{p,s}} = 0.
\]
:::

现在，我们可以证明本节的重要结论了。

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
\(A\) 有一个行列式非零的 \(r\) 级子阵
（从而 \(G\) 也有一个行列式非零的 \(r\) 级子阵），
但 \(G\) 没有行列式非零的 \(r+1\) 级子阵
（从而 \(A\) 也没有行列式非零的 \(r+1\) 级子阵）。
则存在一个 \(n \times 1\) 阵 \(C\)，
使 \(AC = B\)。
:::

::: proof
先设 \(A = 0\)。
那么，\(A\) 有一个行列式非零的“\(0\) 级子阵”，
但 \(G\) 没有行列式非零的 \(1\) 级子阵。
所以 \(G = 0\)。
所以 \(B = 0\)。
那么，任何 \(n \times 1\) 阵 \(C\)
都适合 \(AC = B\)。

下设 \(A \neq 0\)。
设 \(A\) 的 \(r\) 级子阵
\[
\begin{aligned}
  A_r = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
\end{aligned}
\]
（其中，
\(1 \leqslant i_1 < \dots < i_r \leqslant m\)，
且 \(1 \leqslant j_1 < \dots < j_r \leqslant n\)）
的行列式非零。
\(A_r\) 当然也是 \(G\) 的子阵，且
\[
\begin{aligned}
  A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}
  =
  G\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}.
\end{aligned}
\]
所以，对任何不超过 \(m\) 的正整数 \(p\)，
存在 \(r\) 个数
\(d_{p,1}\)、\(d_{p,2}\)、\(\dots\)、\(d_{p,r}\)，
使对任何不超过 \(n+1\) 的正整数 \(q\)，
\[
\begin{aligned}
  [G]_{p,q}
  = [G]_{i_1,q} d_{p,1}
  + [G]_{i_2,q} d_{p,2}
  + \dots
  + [G]_{i_r,q} d_{p,r}
  =
  \sum_{s = 1}^{r} {[G]_{i_s,q} d_{p,s}}.
\end{aligned}
\]

考虑
由 \(r\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\left\{
\begin{aligned}
  [A]_{i_1,1} x_1 + [A]_{i_1,2} x_2 + \dots + [A]_{i_1,n} x_n & = [B]_{i_1,1}, \\
  [A]_{i_2,1} x_1 + [A]_{i_2,2} x_2 + \dots + [A]_{i_2,n} x_n & = [B]_{i_2,1}, \\
  & \dots, \\
  [A]_{i_r,1} x_1 + [A]_{i_r,2} x_2 + \dots + [A]_{i_r,n} x_n & = [B]_{i_r,1}.
\end{aligned}
\right.
\]
我们说，这个方程组有解。

若 \(r = n\)，则这是一个
由 \(n\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组。
因为 \(\det {(A_r)} \neq 0\)，
故，由 Cramer 公式，
此方程组有一个（唯一的）解。

若 \(r < n\)，
从 \(1\)、\(2\)、\(\dots\)、\(n\)
去除 \(j_1\)、\(j_2\)、\(\dots\)、\(j_r\)
后，还剩 \(n - r\) 个数。
我们从小到大地叫这 \(n - r\) 个数为
\(j_{r+1}\)、\(\dots\)、\(j_n\)。
我们可改写此方程组为
\[
\begin{aligned}
  \sum_{\ell = 1}^{r}
  {[A]_{p,j_\ell} x_{j_\ell}}
  = [B]_{p,1}
  - \sum_{r < \ell \leqslant n}
  {[A]_{p,j_\ell} x_{j_\ell}},
\end{aligned}
\]
其中，\(p = i_1\)、\(i_2\)、\(\dots\)、\(i_r\)，
下同。

设
\(f_{j_{r+1}}\)、\(\dots\)、\(f_{j_n}\)
是任何 \(n-r\) 个数。
我们考虑
由 \(r\) 个 \(r\) 元 \({\leqslant} 1\) 次方程作成的方程组
\[
\begin{aligned}
  \sum_{\ell = 1}^{r}
  {[A]_{p,j_\ell} y_\ell}
  = [B]_{p,1}
  - \sum_{r < \ell \leqslant n}
  {[A]_{p,j_\ell} f_{j_\ell}}.
\end{aligned}
\]
利用阵等式，我们可写
\[
\begin{aligned}
  A_r
  \begin{bmatrix}
    y_1    \\
    y_2    \\
    \vdots \\
    y_r    \\
  \end{bmatrix}
  =
  \begin{bmatrix}
    z_{i_1} \\
    z_{i_2} \\
    \vdots  \\
    z_{i_r} \\
  \end{bmatrix},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  z_p = [B]_{p,1}
  - \sum_{r < \ell \leqslant n}
  {[A]_{p,j_\ell} f_{j_\ell}}.
\end{aligned}
\]
因为 \(\det {(A_r)} \neq 0\)，
故，由 Cramer 公式，
存在 \(r\) 个数
\(f_{j_1}\)、\(f_{j_2}\)、\(\dots\)、\(f_{j_r}\)，
使
\[
\begin{aligned}
  \sum_{\ell = 1}^{r}
  {[A]_{p,j_\ell} f_{j_\ell}}
  = [B]_{p,1}
  - \sum_{r < \ell \leqslant n}
  {[A]_{p,j_\ell} f_{j_\ell}}.
\end{aligned}
\]
从而
\[
\begin{aligned}
  \sum_{\ell = 1}^{n}
  {[A]_{p,j_\ell} f_{j_\ell}}
  = [B]_{p,1}.
\end{aligned}
\]

设 \(n\) 个数
\(c_1\)、\(c_2\)、\(\dots\)、\(c_n\)
适合
\[
\begin{aligned}
  [A]_{i_1,1} c_1 + [A]_{i_1,2} c_2 + \dots + [A]_{i_1,n} c_n & = [B]_{i_1,1}, \\
  [A]_{i_2,1} c_1 + [A]_{i_2,2} c_2 + \dots + [A]_{i_2,n} c_n & = [B]_{i_2,1}, \\
  & \dots, \\
  [A]_{i_r,1} c_1 + [A]_{i_r,2} c_2 + \dots + [A]_{i_r,n} c_n & = [B]_{i_r,1}.
\end{aligned}
\]
作 \(n \times 1\) 阵 \(C\)，
其中，\([C]_{i,1} = c_i\)。
我们证明，\(AC = B\)。

若 \(i\) 等于某 \(i_s\)，则
\[
\begin{aligned}
  [AC]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} c_\ell}
  \\
  = {} & [B]_{i,1}.
\end{aligned}
\]
若 \(i\) 不等于任何 \(i_s\)，则
\[
\begin{aligned}
  [AC]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[G]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {
    \left( \sum_{s = 1}^{r}
      {
        [G]_{i_s,\ell} d_{i,s}
    } \right) [C]_{\ell,1}
  }
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {
    \sum_{s = 1}^{r}
    {
      [G]_{i_s,\ell} d_{i,s} [C]_{\ell,1}
    }
  }
  \\
  = {} &
  \sum_{s = 1}^{r}
  {
    \sum_{\ell = 1}^{n}
    {
      [G]_{i_s,\ell} d_{i,s} [C]_{\ell,1}
    }
  }
  \\
  = {} &
  \sum_{s = 1}^{r}
  {
    \sum_{\ell = 1}^{n}
    {
      [A]_{i_s,\ell} d_{i,s} c_\ell
    }
  }
  \\
  = {} &
  \sum_{s = 1}^{r}
  {
    \sum_{\ell = 1}^{n}
    {
      [A]_{i_s,\ell} c_\ell d_{i,s}
    }
  }
  \\
  = {} &
  \sum_{s = 1}^{r}
  {
    \left(\sum_{\ell = 1}^{n}
      {
        [A]_{i_s,\ell} c_\ell
    }\right)
    d_{i,s}
  }
  \\
  = {} &
  \sum_{s = 1}^{r}
  {[B]_{i_s,1} d_{i,s}}
  \\
  = {} &
  \sum_{s = 1}^{r}
  {[G]_{i_s,n+1} d_{i,s}}
  \\
  = {} &
  [G]_{i,n+1}
  \\
  = {} &
  [B]_{i,1}.
\end{aligned}
\]
:::

结合前几节的讨论，我们可以得到判断
\(AX = B\) 是否有解，
与有解时它的解是否唯一的方法
（定性的理论）：

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
