---
title: '由 \(m\) 个 \(n\) 元 \(\leq 1\) 次方程作成的方程组 (1)'
---

::: remark* (选学)
本节是*选学内容*。不学本节**不影响**理解任何必学内容（也就是，未被声明为选学内容的节）。
:::

在接下来的若干节里，我想用行列式讨论
由 \(m\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
的解。
注意，方程数 \(m\) 不一定等于未知数数 \(n\)。

我们有时会用 Cramer 公式辅助讨论。
具体地，为讨论一般的
由 \(m\) 个 \(n\) 元 \({\leqslant} 1\) 次方程作成的方程组
的解，
我们有时会作辅助的线性方程组，
其的方程数与未知数数相等，
且 Cramer 公式是可用的。

本节，我们讨论，线性方程组有解时，解是否唯一。

我们先看一个简单的事实。
注意，对任何 \(m \times n\) 阵 \(A\)，
\(A 0 = 0\)，
其中，左边的 \(0\) 是 \(n \times 1\) 零阵，
而右边的 \(0\) 是 \(m \times 1\) 零阵。
故 \(A X = 0\) 有零解。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
设 \(n \times 1\) 阵 \(C\) 适合 \(AC = B\)。

(1) 若 \(AX = 0\) 只有零解，则 \(AX = B\) 的解唯一；

(2) 若存在非零的 \(n \times 1\) 阵 \(D\)
    使 \(AD = 0\)，
    则 \(AX = B\) 的解不唯一。
:::

::: proof
(1) 设 \(n \times 1\) 阵 \(Y\) 适合 \(AY = B\)。
    则
    \[
    \begin{aligned}
      A(Y - C) = AY - AC = B - B = 0.
    \end{aligned}
    \]
    故 \(Y - C\) 是 \(AX = 0\) 的一个解。
    因为 \(AX = 0\) 只有零解，
    故 \(Y - C = 0\)。
    从而 \(Y = C\)。

(2) 因为 \(D \neq 0\)，故 \(C + D \neq C\)。
    因为 \(A(C + D) = AC + AD = B + 0 = B\)，
    且 \(C + D \neq C\)，
    故 \(AX = B\) 的解不唯一。
:::

由此可见，若 \(AX = 0\) 有非零解，
则 \(AX = B\) 有解时，
它的解不唯一。
若 \(AX = 0\) 只有零解，
则 \(AX = B\) 有解时，
它的解唯一。

然后，我们讨论，\(AX = 0\) 是否有非零解。
不过，为使讨论简单，我们要作准备。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
若 \(A\) 没有行列式非零的 \(r+1\) 级子阵，
则对任何高于 \(r\) 的整数 \(s\)，
\(A\) 没有行列式非零的 \(s\) 级子阵。
:::

说阵 \(Z\) 是 \(A\) 的一个 **\(p\) 级子阵**，
就是说，\(Z\) 是 \(A\) 的一个子阵
（见本章，节 5），
且 \(Z\) 是一个 \(p\) 级阵。

::: proof
我们用数学归纳法证明此事。
具体地，设命题 \(P(s)\) 为：

> \(A\) 没有行列式非零的 \(s\) 级子阵。

则我们的目标是，
对任何高于 \(r\) 的整数 \(s\)，
\(P(s)\) 是对的。

\(P(r+1)\) 是对的。

假定 \(P(t)\) 是对的。
我们由此证，\(P(t+1)\) 也是对的。
若 \(A\) 没有 \(t+1\) 级子阵，
此事自然是对的。
若 \(A\) 有 \(t+1\) 级子阵，
按列 \(1\) 展开它的行列式，
可知，
此子阵的行列式
是 \(A\) 的 \(t+1\) 个 \(t\) 级子阵的行列式的倍的和。
由此可知，
\(A\) 没有行列式非零的 \(t+1\) 级子阵。

所以，\(P(t+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
存在一个唯一的非负整数 \(r\)，
使：

(1) \(A\) 有一个行列式非零的 \(r\) 级子阵；

(2) \(A\) 没有行列式非零的 \(r+1\) 级子阵。
:::

::: proof
唯一性是简单的。
设还有非负整数 \(s\) 适合条件：

(1') \(A\) 有一个行列式非零的 \(s\) 级子阵；

(2') \(A\) 没有行列式非零的 \(s+1\) 级子阵。

反设 \(s > r\)。
既然 \(A\) 没有行列式非零的 \(r+1\) 级子阵，
故 \(A\) 没有行列式非零的 \(s\) 级子阵。
这跟 (1\('\)) 矛盾。
所以，\(s \leqslant r\)。
类似地，我们可证 \(r \leqslant s\)。
从而 \(s = r\)。

下面，我们说明存在性。
我们设 \(t\) 是 \(m\) 与 \(n\) 中的较小者。
若 \(A\) 有行列式非零的 \(t\) 级子阵，
我们可取 \(r = t\)；
否则，我们代 \(t\) 以 \(t - 1\)。
若 \(A\) 有行列式非零的 \(t - 1\) 级子阵，
我们可取 \(r = t - 1\)；
否则，我们代 \(t - 1\) 以 \(t - 2\)。
……
反复地作下去，
我们能找到此 \(r\)。
（注意，我们约定“\(0\) 级阵”的行列式为 \(1\)，
所以这个过程能结束。）
:::

::: theorem [\(0\) 的作用]
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
设 \(k\) 是一个不超过 \(m\) 的正整数。
作一个 \((m + 1) \times n\) 阵 \(\underbar{\text{\(A\)}}\)，
其中，
\[
\begin{aligned}
  [\underbar{\text{\(A\)}}]_{i,j} =
  \begin{cases}
    [A]_{i,j},   & i \leqslant k;  \\
    0,           & i = k + 1; \\
    [A]_{i-1,j}, & i > k + 1.
  \end{cases}
\end{aligned}
\]
（通俗地，\(\underbar{\text{\(A\)}}\)
是在 \(A\) 的行 \(k\) 下写一行 \(0\) 作成的阵。）
再作一个 \((m + 1) \times 1\) 阵 \(\underbar{\text{\(B\)}}\)，
其中，
\[
\begin{aligned}
  [\underbar{\text{\(B\)}}]_{i,1} =
  \begin{cases}
    [B]_{i,1},   & i \leqslant k;  \\
    0,           & i = k + 1; \\
    [B]_{i-1,1}, & i > k + 1.
  \end{cases}
\end{aligned}
\]
（通俗地，\(\underbar{\text{\(B\)}}\)
是在 \(B\) 的行 \(k\) 下写 \(0\) 作成的阵。）

(1) 若 \(n \times 1\) 阵 \(C\) 适合
    \(AC = B\)，
    则 \(\underbar{\text{\(A\)}}C = \underbar{\text{\(B\)}}\)。

(2) 若 \(n \times 1\) 阵 \(C\) 适合
    \(\underbar{\text{\(A\)}}C = \underbar{\text{\(B\)}}\)，
    则 \(AC = B\)。

(3) 若 \(A\) 有一个行列式非零的 \(r\) 级子阵，
    但没有行列式非零的 \(r+1\) 级子阵，
    则 \(\underbar{\text{\(A\)}}\) 有一个行列式非零的 \(r\) 级子阵，
    但没有行列式非零的 \(r+1\) 级子阵。

(4) 若 \(\underbar{\text{\(A\)}}\) 有一个行列式非零的 \(r\) 级子阵，
    但没有行列式非零的 \(r+1\) 级子阵，
    则 \(A\) 有一个行列式非零的 \(r\) 级子阵，
    但没有行列式非零的 \(r+1\) 级子阵。
:::

::: proof
(1) 设 \(AC = B\)。
    我们要证 \(\underbar{\text{\(A\)}}C = \underbar{\text{\(B\)}}\)。

首先，\(\underbar{\text{\(A\)}}C\) 与 \(\underbar{\text{\(B\)}}\)
的尺寸都是 \((m+1) \times 1\)。

若 \(i \leqslant k\)，则
\[
\begin{aligned}
  [\underbar{\text{\(A\)}}C]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[\underbar{\text{\(A\)}}]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} & [AC]_{i,1}
  \\
  = {} & [B]_{i,1}
  \\
  = {} &
  [\underbar{\text{\(B\)}}]_{i,1}.
\end{aligned}
\]
若 \(i = k + 1\)，则
\[
\begin{aligned}
  [\underbar{\text{\(A\)}}C]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[\underbar{\text{\(A\)}}]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {0\,[C]_{\ell,1}}
  \\
  = {} & 0
  \\
  = {} &
  [\underbar{\text{\(B\)}}]_{i,1}.
\end{aligned}
\]
若 \(i > k + 1\)，则
\[
\begin{aligned}
  [\underbar{\text{\(A\)}}C]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[\underbar{\text{\(A\)}}]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i-1,\ell} [C]_{\ell,1}}
  \\
  = {} & [AC]_{i-1,1}
  \\
  = {} & [B]_{i-1,1}
  \\
  = {} &
  [\underbar{\text{\(B\)}}]_{i,1}.
\end{aligned}
\]
由此可见，\(\underbar{\text{\(A\)}}C = \underbar{\text{\(B\)}}\)。

(2) 设 \(\underbar{\text{\(A\)}}C = \underbar{\text{\(B\)}}\)。
    我们要证 \(AC = B\)。

首先，\(AC\) 与 \(B\)
的尺寸都是 \(m \times 1\)。

其次，注意，
\[
\begin{aligned}
  [A]_{i,j} =
  \begin{cases}
    [\underbar{\text{\(A\)}}]_{i,j},   & i \leqslant k; \\
    [\underbar{\text{\(A\)}}]_{i+1,j}, & i > k.
  \end{cases}
\end{aligned}
\]
类似地，
\[
\begin{aligned}
  [B]_{i,1} =
  \begin{cases}
    [\underbar{\text{\(B\)}}]_{i,1},   & i \leqslant k; \\
    [\underbar{\text{\(B\)}}]_{i+1,1}, & i > k.
  \end{cases}
\end{aligned}
\]

若 \(i \leqslant k\)，则
\[
\begin{aligned}
  [AC]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[\underbar{\text{\(A\)}}]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} & [\underbar{\text{\(A\)}}C]_{i,1}
  \\
  = {} & [\underbar{\text{\(B\)}}]_{i,1}
  \\
  = {} &
  [B]_{i,1}.
\end{aligned}
\]
若 \(i > k\)，则
\[
\begin{aligned}
  [AC]_{i,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{i,\ell} [C]_{\ell,1}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {[\underbar{\text{\(A\)}}]_{i+1,\ell} [C]_{\ell,1}}
  \\
  = {} & [\underbar{\text{\(A\)}}C]_{i+1,1}
  \\
  = {} & [\underbar{\text{\(B\)}}]_{i+1,1}
  \\
  = {} &
  [B]_{i,1}.
\end{aligned}
\]
由此可见，\(AC = B\)。

(3) 注意，\(A\) 的子阵都是 \(\underbar{\text{\(A\)}}\) 的子阵。
    所以，若 \(A\) 有一个行列式非零的 \(r\) 级子阵，
    则 \(\underbar{\text{\(A\)}}\) 也有一个行列式非零的 \(r\) 级子阵。
    对 \(\underbar{\text{\(A\)}}\) 的每个子阵，
    要么 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 被选中，
    要么 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 不被选中。
    所以，那些 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 不被选中的
    \(r+1\) 级子阵（若存在）
    是 \(A\) 的 \(r+1\) 级子阵（若存在），
    故它的行列式为 \(0\)。
    而那些 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 被选中的
    \(r+1\) 级子阵（若存在）
    有一行的元全为 \(0\)，
    故它的行列式为 \(0\)。
    从而，\(\underbar{\text{\(A\)}}\) 也没有行列式非零的 \(r+1\) 级子阵。

(4) 对 \(\underbar{\text{\(A\)}}\) 的每个子阵，
    要么 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 被选中，
    要么 \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 不被选中。
    设 \(\underbar{\text{\(A\)}}\) 有一个行列式非零的 \(r\) 级子阵。
    那么，这个子阵不含元全为 \(0\) 的行。
    特别地，对此子阵，
    \(\underbar{\text{\(A\)}}\) 的行 \(k+1\) 不被选中。
    所以，这也是 \(A\) 的一个 \(r\) 级子阵。
    所以，\(A\) 也有一个行列式非零的 \(r\) 级子阵。
    注意，\(A\) 的子阵都是 \(\underbar{\text{\(A\)}}\) 的子阵。
    既然 \(\underbar{\text{\(A\)}}\) 没有行列式非零的 \(r+1\) 级子阵，
    那么 \(A\) 也没有行列式非零的 \(r+1\) 级子阵。
:::

现在，我们讨论 \(AX = 0\) 是否有非零解。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。
设 \(r < n\)。
则 \(AX = 0\) 有非零解。
:::

::: proof
设 \(A\) 是 \(m \times n\) 阵。

我们无妨设 \(m \geqslant n\)。
若 \(m < n\)，我们作一个 \(n\) 级阵 \(\underbar{\text{\(A\)}}\)，
其中，
\[
\begin{aligned}
  [\underbar{\text{\(A\)}}]_{i,j} =
  \begin{cases}
    [A]_{i,j}, & i \leqslant m; \\
    0,         & i > m.
  \end{cases}
\end{aligned}
\]
（通俗地，\(\underbar{\text{\(A\)}}\)
是在 \(A\) 的行 \(m\) 下写 \(n-m\) 行 \(0\) 作成的阵。）
由此，不难得到：
(a)
若 \(n \times 1\) 阵 \(C\) 适合 \(\underbar{\text{\(A\)}}C = 0\)，
则 \(AC = 0\)；
(b)
\(\underbar{\text{\(A\)}}\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。
所以，若我们找到了 \(\underbar{\text{\(A\)}}X = 0\)
的非零解，
则我们也找到了 \(AX = 0\) 的非零解。
以下，我们设 \(m \geqslant n\)。

若 \(A = 0\)，
我们任取一个非零的 \(n \times 1\) 阵 \(S\)。
则 \(AS = 0\)。

以下，我们假定 \(A \neq 0\)；
也就是，\(A\) 有一个元不是 \(0\)
（同时，这也要求 \(n > 1\)：
回想 \(1\) 级阵的行列式是何）。
从而 \(r \geqslant 1\)。

我们设 \(A\) 的 \(r\) 级子阵
\(A_r = A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r}{j_1,\dots,j_r}\)
的行列式非零，
其中，\(i_1 < i_2 < \dots < i_r\)，
且 \(j_1 < j_2 < \dots < j_r\)。
我们从 \(1\)、\(2\)、\(\dots\)、\(m\) 中
去除 \(r\) 个整数
\(i_1\)、\(i_2\)、\(\dots\)、\(i_r\)；
此时，还剩下 \(m-r\) 个整数；
我们从中选一个为 \(i_{r+1}\)。
类似地，
我们再从 \(1\)、\(2\)、\(\dots\)、\(n\) 中
去除 \(r\) 个整数
\(j_1\)、\(j_2\)、\(\dots\)、\(j_r\)；
此时，还剩下 \(n-r\) 个整数；
我们从中选一个为 \(j_{r+1}\)。
作 \(r+1\) 级阵
\(
    E =
    A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r,i_{r+1}}{j_1,\dots,j_r,j_{r+1}}
  \)。
我们设 \(i_p\) 在
\(i_1\)、\(\dots\)、\(i_r\)、\(i_{r+1}\)
中是第 \(f(i_p)\) 小的数。
再设 \(j_p\) 在
\(j_1\)、\(\dots\)、\(j_r\)、\(j_{r+1}\)
中是第 \(g(j_p)\) 小的数。
因为 \(E\) 是 \(A\) 的一个 \(r+1\) 级子阵，
故 \(\det {(E)} = 0\)。
从而
\(E \operatorname{adj} {(E)} = 0\)。
注意，
\([\operatorname{adj} {(E)}]_{g(j_{r+1}), f(i_{r+1})}
  = (-1)^{f(i_{r+1})+g(j_{r+1})} \det {(A_r)} \neq 0\)。

接下来，我们设法由此得到 \(AX = 0\)
的一个非零解。
我们作一个 \(n \times 1\) 阵 \(W\)，其中，
\[
\begin{aligned}
  [W]_{\ell,1} =
  \begin{cases}
    [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})},
    & \text{\(\ell = j_p\),
    \(p = 1\), \(\dots\), \(r\), \(r+1\)}; \\
    0, & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
（通俗地，我们在适当的位置写 \(0\)，
变 \(\operatorname{adj} {(E)}\)
的列 \(f(i_{r+1})\)
为一个 \(n \times 1\) 阵 \(W\)。）
因为 \([W]_{j_{r+1},1} \neq 0\)，
故 \(W \neq 0\)。
我们证明 \(AW = 0\)。

取不超过 \(m\) 的正整数 \(q\)。
则
\[
\begin{aligned}
  [AW]_{q,1}
  = {} &
  \sum_{\ell = 1}^{n}
  {[A]_{q,\ell} [W]_{\ell,1}}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant \ell \leqslant n \\
      \ell = j_p         \\
      1 \leqslant p \leqslant r+1
  }}
  {[A]_{q,\ell} [W]_{\ell,1}}
  +
  \sum_{\substack{
      1 \leqslant \ell \leqslant n \\
      \text{别的情形}
  }}
  {[A]_{q,\ell} [W]_{\ell,1}}
  \\
  = {} &
  \sum_{\substack{
      1 \leqslant \ell \leqslant n \\
      \ell = j_p         \\
      1 \leqslant p \leqslant r+1
  }}
  {[A]_{q,j_p}
  [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})}}
  +
  \sum_{\substack{
      1 \leqslant \ell \leqslant n \\
      \text{别的情形}
  }}
  {[A]_{q,\ell}\, 0}
  \\
  = {} &
  \sum_{p=1}^{r+1}
  {[A]_{q,j_p}
  [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})}}.
\end{aligned}
\]
若 \(q\) 等于某个 \(i_t\)，则
\[
\begin{aligned}
  [AW]_{i_t,1}
  = {} &
  \sum_{p=1}^{r+1}
  {[A]_{i_t,j_p}
  [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})}}
  \\
  = {} &
  \sum_{p=1}^{r+1}
  {[E]_{f(i_t),g(j_p)}
  [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})}}
  \\
  = {} &
  [E \operatorname{adj} {(E)}]_{f(i_t),f(i_{r+1})}
  \\
  = {} &
  [0]_{f(i_t),f(i_{r+1})}
  \\
  = {} & 0.
\end{aligned}
\]
若 \(q\) 不等于
\(i_1\)、\(\dots\)、\(i_r\)、\(i_{r+1}\)
中的任何一个，
则
\[
\begin{aligned}
  [AW]_{q,1}
  = {} &
  \sum_{p=1}^{r+1}
  {[A]_{q,j_p}
  [\operatorname{adj} {(E)}]_{g(j_p),f(i_{r+1})}}
  \\
  = {} &
  \sum_{p=1}^{r+1}
  {[A]_{q,j_p}
    (-1)^{f(i_{r+1})+g(j_p)}
  \det {(E(f(i_{r+1})|g(j_p)))}}.
\end{aligned}
\]
作一个 \(r+1\) 级阵 \(C_q\)，其中，
\[
\begin{aligned}
  [C_q]_{h,g(j_p)} =
  \begin{cases}
    [E]_{h,g(j_p)},
    & h \neq f(i_{r+1}); \\
    [A]_{q,j_p},
    & h = f(i_{r+1}).
  \end{cases}
\end{aligned}
\]
于是，\(C_q(f(i_{r+1})|g(j_p))
  = E(f(i_{r+1})|g(j_p))\)。
从而
\[
\begin{aligned}
  [AW]_{q,1}
  = {} &
  \sum_{p=1}^{r+1}
  {[A]_{q,j_p}
    (-1)^{f(i_{r+1})+g(j_p)}
  \det {(E(f(i_{r+1})|g(j_p)))}}
  \\
  = {} &
  \sum_{p=1}^{r+1}
  {[C_q]_{f(i_{r+1}),g(j_p)}
    (-1)^{f(i_{r+1})+g(j_p)}
  \det {(C_q (f(i_{r+1})|g(j_p)))}}
  \\
  = {} &
  \det {(C_q)}.
\end{aligned}
\]

再作一个 \(r+1\) 级阵
\(
    D_q =
    A\genfrac{\{}{\}}{0pt}{0}{i_1,\dots,i_r,q}{j_1,\dots,j_r,j_{r+1}}
  \)。
不难看出，适当地交换 \(C_q\) 的行的次序，
即可变 \(C_q\) 为 \(D_q\)。
根据反称性，
\(\det {(C_q)} = \pm \det {(D_q)}\)。
（具体地，设 \(q\) 在
\(i_1\)、\(\dots\)、\(i_r\)、\(q\)
中是第 \(u\) 小的数。
那么，当 \(f(i_{r+1}) = u\) 时，\(C_q = D_q\)。
当 \(f(i_{r+1}) < u\) 时，
交换行 \(f(i_{r+1})\) 与 \(f(i_{r+1})+1\)，
再交换行 \(f(i_{r+1})+1\) 与 \(f(i_{r+1})+2\)，
……
且再交换行 \(u-1\) 与 \(u\)；
作 \(u - f(i_{r+1})\) 次相邻行的交换，
即可变 \(C_q\) 为 \(D_q\)。
当 \(f(i_{r+1}) > u\) 时，
交换行 \(f(i_{r+1})\) 与 \(f(i_{r+1})-1\)，
再交换行 \(f(i_{r+1})-1\) 与 \(f(i_{r+1})-2\)，
……
且再交换行 \(u+1\) 与 \(u\)；
作 \(f(i_{r+1}) - u\) 次相邻行的交换，
即可变 \(C_q\) 为 \(D_q\)。）
因为 \(D_q\) 是 \(A\) 的一个 \(r+1\) 级子阵，
故它的行列式为 \(0\)。
从而
\[
\begin{aligned}
  [AW]_{q,1}
  = \det {(C_q)}
  = \pm \det {(D_q)}
  = 0.
\end{aligned}
\]

综上，我们找到了一个 \(n \times 1\) 阵 \(W\)
使 \(AW = 0\)，且 \(W \neq 0\)。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 有一个行列式非零的 \(n\) 级子阵
（此时，\(A\) 当然没有行列式非零的 \(n+1\) 级子阵）。
则 \(AX = 0\) 只有零解。
:::

::: proof
设 \(n \times 1\) 阵 \(C\) 适合 \(AC = 0\)。
设 \(A\) 的 \(n\) 级子阵
\[
\begin{aligned}
  K = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{1,2,\dots,n}
\end{aligned}
\]
的行列式非零，
其中，
\(1 \leqslant i_1 < i_2 < \dots < i_n \leqslant m\)。
因为 \(C\) 适合
\[
\begin{aligned}
  [A]_{1,1} [C]_{1,1} + [A]_{1,2} [C]_{2,1} + \dots + [A]_{1,n} [C]_{n,1} & = 0,   \\
  [A]_{2,1} [C]_{1,1} + [A]_{2,2} [C]_{2,1} + \dots + [A]_{2,n} [C]_{n,1} & = 0,   \\
  & \dots, \\
  [A]_{m,1} [C]_{1,1} + [A]_{m,2} [C]_{2,1} + \dots + [A]_{m,n} [C]_{n,1} & = 0,
\end{aligned}
\]
故 \(C\) 当然也适合
\[
\begin{aligned}
  [A]_{i_1,1} [C]_{1,1} + [A]_{i_1,2} [C]_{2,1} + \dots + [A]_{i_1,n} [C]_{n,1} & = 0,   \\
  [A]_{i_2,1} [C]_{1,1} + [A]_{i_2,2} [C]_{2,1} + \dots + [A]_{i_2,n} [C]_{n,1} & = 0,   \\
  & \dots, \\
  [A]_{i_n,1} [C]_{1,1} + [A]_{i_n,2} [C]_{2,1} + \dots + [A]_{i_n,n} [C]_{n,1} & = 0,
\end{aligned}
\]
即 \(KC = 0\)。
因为 \(\det {(K)} \neq 0\)，
故，由 Cramer 公式，
\(C = 0\)。
:::

现在，我们作一个小结。

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。

(1) 若 \(r < n\)，
    则 \(AX = 0\) 有非零解；

(2) 若 \(r = n\)，
    则 \(AX = 0\) 只有零解。
:::

::: theorem
设 \(A\) 是 \(m \times n\) 阵。
设 \(B\) 是 \(m \times 1\) 阵。
设 \(n \times 1\) 阵 \(C\) 适合 \(AC = B\)；
也就是，\(AX = B\) 有解。
设 \(A\) 有一个行列式非零的 \(r\) 级子阵，
但没有行列式非零的 \(r+1\) 级子阵。

(1) 若 \(r < n\)，
    则 \(AX = B\) 的解不唯一；

(2) 若 \(r = n\)，
    则 \(AX = B\) 的解唯一。
:::
