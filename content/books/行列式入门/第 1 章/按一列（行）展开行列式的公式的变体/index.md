---
title: 按一列（行）展开行列式的公式的变体
---

我们回想，
我们既可按任何一列，也可按任何一行，
展开一个阵的行列式：

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

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(i\) 为整数，且 \(1 \leqslant i \leqslant n\)。
则
\[
\begin{aligned}
  \det {(A)}
  = \sum_{j = 1}^{n} {(-1)^{i+j} [A]_{i,j} \det {(A(i|j))}}.
\end{aligned}
\]
:::

或许，您还记得约定：
当 \(A\) 是 \(1\) 级阵时，
形如 \(A(1|1)\) 的记号表示“\(0\) 级阵”，
且“\(0\) 级阵”的行列式为 \(1\)。
此约定可使我们简单地写公式。

若我们改变公式的几个文字，
则可得到不一样的结果：

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(k\)、\(j\) 都是不超过 \(n\) 的正整数，
且 \(k \neq j\)。
则
\[
\begin{aligned}
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+k} [A]_{\ell,j} \det {(A(\ell|k))}}
  = 0.
\end{aligned}
\]
类似地，若 \(i\)、\(k\) 都是不超过 \(n\) 的正整数，
且 \(i \neq k\)，
则
\[
\begin{aligned}
  \sum_{s = 1}^{n}
  {(-1)^{k+s} [A]_{i,s} \det {(A(k|s))}}
  = 0.
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
    1 & 4 & 8 \\
    2 & 6 & 5 \\
    3 & 9 & 7 \\
  \end{bmatrix}.
\end{aligned}
\]
不难算出
\[
\begin{aligned}
  & \det {(A(1|1))} = 6 \cdot 7 - 9 \cdot 5 = -3;  \\
  & \det {(A(2|1))} = 4 \cdot 7 - 9 \cdot 8 = -44; \\
  & \det {(A(3|1))} = 4 \cdot 5 - 6 \cdot 8 = -28.
\end{aligned}
\]
那么，这个定理说，当 \(j = 2\) 或 \(j = 3\) 时，
\[
\begin{aligned}
  & \hphantom{{} + {}}
  (-1)^{1+1} [A]_{1,j} \det {(A(1|1))}
  + (-1)^{2+1} [A]_{2,j} \det {(A(2|1))}
  \\
  &
  + (-1)^{3+1} [A]_{3,j} \det {(A(3|1))} = 0,
\end{aligned}
\]
即
\[
\begin{aligned}
  -3\,[A]_{1,j} + 44\,[A]_{2,j} - 28\,[A]_{3,j} = 0.
\end{aligned}
\]

我们直接地验证此事。
取 \(j = 2\)，得
\[
\begin{aligned}
  (-3) \cdot 4 + 44 \cdot 6 - 28 \cdot 9 = -12 + 264 - 252 = 0.
\end{aligned}
\]
取 \(j = 3\)，得
\[
(-3) \cdot 8 + 44 \cdot 5 - 28 \cdot 7 = -24 + 220 - 196 = 0.
\]
:::

::: proof
我证第 1 个；我留第 2 个为您的习题。

取 \(n\) 个数 \(z_1\)、\(z_2\)、\(\dots\)、\(z_n\)。
我们作 \(n\) 级阵 \(B\)，其中，
\[
\begin{aligned}
  [B]_{\ell, v} =
  \begin{cases}
    [A]_{\ell, v}, & v \neq k; \\
    z_\ell,        & v = k.
  \end{cases}
\end{aligned}
\]
（通俗地，\(B\) 的列 \(v\) 等于 \(A\) 的列 \(v\)
（\(v \neq k\)），
而 \(B\) 的列 \(k\) 的元分别是
\(z_1\)、\(z_2\)、\(\dots\)、\(z_n\)。）
由此可见，\(B(\ell|k) = A(\ell|k)\)
（\(\ell = 1\)、\(2\)、\(\dots\)、\(n\)）。
所以
\[
\begin{aligned}
  \det {(B)}
  = {} & \sum_{\ell = 1}^{n}
  {(-1)^{\ell + k} [B]_{\ell, k} \det {(B(\ell|k))}}
  \\
  = {} & \sum_{\ell = 1}^{n}
  {(-1)^{\ell + k} z_\ell \det {(A(\ell|k))}}.
\end{aligned}
\]
现在，特别地，我们取
\(z_1\)、\(z_2\)、\(\dots\)、\(z_n\)
为
\([A]_{1,j}\)、\([A]_{2,j}\)、\(\dots\)、\([A]_{n,j}\)。
此时，\(B\) 有相同的 \(2\) 列
（\(B\) 的列 \(j\) 即为 \(B\) 的列 \(k\)，
并注意，\(k \neq j\)）。
所以 \(\det {(B)} = 0\)。
故
\[
\sum_{\ell = 1}^{n}
{(-1)^{\ell+k} [A]_{\ell,j} \det {(A(\ell|k))}}
= 0.
\]
:::

用 \(\delta\)-记号，我们得

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
若 \(k\)、\(j\) 都是不超过 \(n\) 的正整数，
则
\[
\begin{aligned}
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+k} \det {(A(\ell|k))}\, [A]_{\ell,j}}
  = \det {(A)}\, \delta(k, j).
\end{aligned}
\]
类似地，若 \(i\)、\(k\) 都是不超过 \(n\) 的正整数，
则
\[
\begin{aligned}
  \sum_{s = 1}^{n}
  {[A]_{i,s} (-1)^{k+s} \det {(A(k|s))}}
  = \det{(A)}\, \delta(i, k).
\end{aligned}
\]
:::

::: proof
请允许我留它为您的习题。
分类讨论即可
（\(k = j\)；
\(k \neq j\)；
\(i = k\)；
\(i \neq k\)）。
:::

::: definition [古伴]
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
定义 \(A\) 的**古伴**
（或者，古典伴随阵）
为 \(n\) 级阵 \(\operatorname{adj} {(A)}\)，
其中，对任何不超过 \(n\) 的正整数 \(i\)，\(j\)，
\[
\begin{aligned}
  [\operatorname{adj} {(A)}]_{i,j}
  = (-1)^{j+i} \det {(A(j|i))}.
\end{aligned}
\]
（注意等式右边的 \(i\)、\(j\) 的次序。）
:::

\(\operatorname{adj}\) 来自 <lang en>adjugate</lang>（英语）。

值得提，
根据约定，
一个 \(1\) 级阵 \(A = [a]\) 的古伴
\(\operatorname{adj} {(A)} =
[(-1)^{1+1} \allowbreak \cdot \det {(A(1|1))}] = [1]\)，
即 \(1\) 级单位阵。

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 4 & 8 \\
    2 & 6 & 5 \\
    3 & 9 & 7 \\
  \end{bmatrix}.
\end{aligned}
\]
我们计算 \(A\) 的古伴 \(\operatorname{adj} {(A)}\)。
根据定义，我们要计算 \(9\) 个 \(2\) 级阵的行列式：
\[
\begin{aligned}
  & \det {(A(1|1))} = 6 \cdot 7 - 9 \cdot 5 = -3;  \\
  & \det {(A(1|2))} = 2 \cdot 7 - 3 \cdot 5 = -1;  \\
  & \det {(A(1|3))} = 2 \cdot 9 - 3 \cdot 6 = 0;   \\
  & \det {(A(2|1))} = 4 \cdot 7 - 9 \cdot 8 = -44; \\
  & \det {(A(2|2))} = 1 \cdot 7 - 3 \cdot 8 = -17; \\
  & \det {(A(2|3))} = 1 \cdot 9 - 3 \cdot 4 = -3;  \\
  & \det {(A(3|1))} = 4 \cdot 5 - 6 \cdot 8 = -28; \\
  & \det {(A(3|2))} = 1 \cdot 5 - 2 \cdot 8 = -11; \\
  & \det {(A(3|3))} = 1 \cdot 6 - 2 \cdot 4 = -2.
\end{aligned}
\]
所以
\[
\begin{aligned}
  & \operatorname{adj} {(A)}
  \\
  = {} &
  \begin{bmatrix}
    (-1)^{1+1} \det {(A(1|1))}
    & (-1)^{2+1} \det {(A(2|1))}
    & (-1)^{3+1} \det {(A(3|1))} \\
    (-1)^{1+2} \det {(A(1|2))}
    & (-1)^{2+2} \det {(A(2|2))}
    & (-1)^{3+2} \det {(A(3|2))} \\
    (-1)^{1+3} \det {(A(1|3))}
    & (-1)^{2+3} \det {(A(2|3))}
    & (-1)^{3+3} \det {(A(3|3))} \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    +\det {(A(1|1))}
    & -\det {(A(2|1))}
    & +\det {(A(3|1))} \\
    -\det {(A(1|2))}
    & +\det {(A(2|2))}
    & -\det {(A(3|2))} \\
    +\det {(A(1|3))}
    & -\det {(A(2|3))}
    & +\det {(A(3|3))} \\
  \end{bmatrix}
  \\
  = {} &
  \begin{bmatrix}
    -3 & 44  & -28 \\
    1  & -17 & 11  \\
    0  & 3   & -2  \\
  \end{bmatrix}.
\end{aligned}
\]
:::

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
设 \(\operatorname{adj} {(A)}\) 为它的古伴。
则
\[
\begin{aligned}
  \operatorname{adj} {(A)}\, A
  = \det {(A)}\, I
  = A \operatorname{adj} {(A)}.
\end{aligned}
\]
:::

::: proof
首先，\(2\) 个等式的左右 \(2\) 边都是 \(n\) 级阵。

由上个定理（的前一部分），
\[
\begin{aligned}
  [\operatorname{adj} {(A)}\, A]_{i,j}
  = {} &
  \sum_{\ell = 1}^{n}
  {[\operatorname{adj} {(A)}]_{i,\ell} [A]_{\ell,j}}
  \\
  = {} &
  \sum_{\ell = 1}^{n}
  {(-1)^{\ell+i} \det {(A(\ell|i))}\, [A]_{\ell,j}}
  \\
  = {} & \det {(A)}\, \delta(i, j)
  \\
  = {} & \det {(A)}\, [I]_{i,j}
  \\
  = {} & [\det {(A)}\, I]_{i,j}.
\end{aligned}
\]
同理，
\[
\begin{aligned}
  [A \operatorname{adj} {(A)}]_{i,j}
  = {} &
  \sum_{s = 1}^{n}
  {[A]_{i,s} [\operatorname{adj} {(A)}]_{s,j}}
  \\
  = {} &
  \sum_{s = 1}^{n}
  {[A]_{i,s} (-1)^{j+s} \det {(A(j|s))}}
  \\
  = {} & \det {(A)}\, \delta(i, j)
  \\
  = {} & \det {(A)}\, [I]_{i,j}
  \\
  = {} & [\det {(A)}\, I]_{i,j}.
\end{aligned}
\]
:::

::: example
设
\[
\begin{aligned}
  A =
  \begin{bmatrix}
    1 & 4 & 8 \\
    2 & 6 & 5 \\
    3 & 9 & 7 \\
  \end{bmatrix}.
\end{aligned}
\]
我们知道，\(A\) 的行列式是 \(1\)。
我们还知道，\(A\) 的古伴
\[
\begin{aligned}
  \operatorname{adj} {(A)} =
  \begin{bmatrix}
    -3 & 44  & -28 \\
    1  & -17 & 11  \\
    0  & 3   & -2  \\
  \end{bmatrix}.
\end{aligned}
\]
可以验证
\[
\operatorname{adj} {(A)}\, A
= 1I
= A\operatorname{adj} {(A)}.
\]
:::

设 \(A\) 是 \(n\) 级阵，
且 \(\det {(A)} \neq 0\)。
作 \(n\) 级阵
\(B = (\det {(A)})^{-1} \operatorname{adj} {(A)}\)。
则
\[
\begin{aligned}
  BA
  = {} & ( (\det {(A)})^{-1} \operatorname{adj} {(A)} ) A
  \\
  = {} & (\det {(A)})^{-1} (\operatorname{adj} {(A)}\, A)
  \\
  = {} & (\det {(A)})^{-1} (\det {(A)}\, I)
  \\
  = {} & ( (\det {(A)})^{-1} \det {(A)} ) I
  \\
  = {} & 1I
  \\
  = {} & I.
\end{aligned}
\]
类似地，可知 \(AB = I\)。
所以，我们得

::: theorem
设 \(A\) 是 \(n\) 级阵（\(n \geqslant 1\)）。
若 \(\det {(A)} \neq 0\)，
则存在 \(n\) 级阵
\(B = (\det {(A)})^{-1} \operatorname{adj} {(A)}\)
使
\[
\begin{aligned}
  BA = I = AB.
\end{aligned}
\]
:::

反过来，设 \(A\) 是 \(n\) 级阵，
且有 \(n\) 级阵 \(C\)（或 \(D\)）
使 \(CA = I\)（或 \(AD = I\)）。
因为 \(2\) 个同级的方阵的积的行列式
等于这 \(2\) 个阵的行列式的积，
\(1 = \det {(I)} = \det {(CA)} = \det {(C)} \det {(A)}\)
（或 \(1 = \det {(I)} = \det {(AD)} = \det {(A)} \det {(D)}\)）。
从而 \(\det {(A)} \neq 0\)。
则有 \(n\) 级阵
\(B = (\det {(A)})^{-1} \operatorname{adj} {(A)}\)
使 \(BA = I = AB\)。
则 \(C = CI = C(AB) = (CA)B = IB = B
= (\det {(A)})^{-1} \operatorname{adj} {(A)}\)
（或 \(D = ID = (BA)D = B(AD) = BI = B
= (\det {(A)})^{-1} \operatorname{adj} {(A)}\)）。

我们知道，对任何不等于 \(0\) 的数 \(a\)，
有一个数 \(b = a^{-1}\) 使 \(ba = 1 = ab\)；
反过来，若有数 \(c\)（或 \(d\)）
使 \(ca = 1\)（或 \(ad = 1\)），
则 \(a \neq 0\)，
且 \(c = a^{-1}\)（或 \(d = a^{-1}\)）。
这么看来，
行列式非零的阵跟非零的数是像的。
