---
title: 消去律
---

本节，我们讨论一些运算的**消去律**。

::: theorem
设 \(x\)、\(y\)、\(z\) 是数。
若 \(x + y = x + z\)，或 \(y + x = z + x\)，
则 \(y = z\)。
:::

我们知道：

(1) 存在数 \(0\)，使对任何数 \(a\)，\(0 + a = a = a + 0\)；

(2) 对任何数 \(a\)，存在数 \(-a\)，使 \((-a) + a = 0 = a + (-a)\)。

那么，若 \(x + y = x + z\)，
则
\[
\begin{aligned}
  (-x) + (x + y) = (-x) + (x + z).
\end{aligned}
\]
由结合律，
\[
\begin{aligned}
  ((-x) + x) + y = ((-x) + x) + z,
\end{aligned}
\]
即
\[
\begin{aligned}
  0 + y = 0 + z.
\end{aligned}
\]
故 \(y = z\)。

类似地，我们可证，
若 \(y + x = z + x\)，则 \(y = z\)。

类似地：

(3) 存在 \(m \times n\) 阵 \(0\)，
    使对任何 \(m \times n\) 阵 \(X\)，
    \(0 + X = X = X + 0\)；

(4) 对任何 \(m \times n\) 阵 \(X\)，
    存在 \(m \times n\) 阵 \(-X\)，
    使 \((-X) + X = 0 = X + (-X)\)。

于是，我们得

::: theorem
设 \(A\)、\(B\)、\(C\) 都是 \(m \times n\) 阵。
若 \(A + B = A + C\)，或 \(B + A = C + A\)，
则 \(B = C\)。
:::

设 \(x\)、\(y\)、\(z\) 是数。
那么，若 \(xy = xz\)，或 \(yx = zx\)，
\(y = z\) 吗？
不一定。
对任何数 \(a\)，\(0a = 0 = a0\)。
于是，虽然 \(0 \cdot 0 = 0 \cdot 1\)，
但 \(0 \neq 1\)。

可是，若我们还要求 \(x \neq 0\)，则 \(y = z\) 是对的，
因为：

(5) 存在数 \(1\)，使对任何数 \(a\)，\(1a = a = a1\)；

(6) 对任何非零的数 \(a\)，存在数 \(a^{-1}\)，使 \(a^{-1} a = 1 = a a^{-1}\)。

设 \(x \neq 0\)，且 \(xy = xz\)。
则 \(x^{-1} (xy) = x^{-1} (xz)\)。
由结合律，\((x^{-1} x) y = (x^{-1} x) z\)。
则 \(1y = 1z\)。
则 \(y = z\)。
类似地，可证，
若 \(x \neq 0\)，且 \(yx = zx\)，则 \(y = z\)。
所以

::: theorem
设 \(x\)、\(y\)、\(z\) 是数，且 \(x \neq 0\)。
若 \(xy = xz\)，或 \(yx = zx\)，则 \(y = z\)。
:::

阵的积也有类似的性质。
不过，由于阵的积是较复杂的，相关的事实的论证也是较不简单的。

先看一个简单的事实。

::: theorem
设 \(A\)、\(B\) 是 \(m \times n\) 阵。
设 \(x \neq 0\) 是一个数。
若 \(xA = xB\)，则 \(A = B\)。
:::

::: proof
任取正整数 \(i \leqslant m\) 与 \(j \leqslant n\)。
则
\[
\begin{aligned}
  x [A]_{i,j} = [xA]_{i,j} = [xB]_{i,j} = x [B]_{i,j}.
\end{aligned}
\]
由数的积的性质，既然 \(x \neq 0\)，
则 \([A]_{i,j} = [B]_{i,j}\)。
:::

以下是本节的主要结论。

::: theorem
设 \(A\) 是一个 \(n\) 级阵，且 \(\det {(A)} \neq 0\)。

设 \(n \times m\) 阵 \(B\)、\(C\) 适合 \(AB = AC\)。
则 \(B = C\)。

设 \(m \times n\) 阵 \(F\)、\(G\) 适合 \(FA = GA\)。
则 \(F = G\)。
:::

::: proof
我证第 1 个；我留第 2 个为您的习题。

设 \(A\) 是一个 \(n\) 级阵，且 \(\det {(A)} \neq 0\)。
设 \(n \times m\) 阵 \(B\)、\(C\) 适合 \(AB = AC\)。
则
\[
\begin{aligned}
  \operatorname{adj} {(A)}\, (AB)
  = \operatorname{adj} {(A)}\, (AC).
\end{aligned}
\]
由结合律，
\[
\begin{aligned}
  (\operatorname{adj} {(A)}\, A) B
  = (\operatorname{adj} {(A)}\, A) C.
\end{aligned}
\]
由古伴的性质，
\[
\begin{aligned}
  (\det {(A)}\, I) B = (\det {(A)}\, I) C,
\end{aligned}
\]
即
\[
\begin{aligned}
  \det {(A)}\, (I B) = \det {(A)}\, (I C),
\end{aligned}
\]
即
\[
\begin{aligned}
  \det {(A)}\, B = \det {(A)}\, C.
\end{aligned}
\]
因为 \(\det {(A)} \neq 0\)，
我们得 \(B = C\)。
:::

以上结论也可被推广。

::: theorem
设 \(A\) 是一个 \(s \times n\) 阵。
设 \(A\) 有一个行列式非零的 \(n\) 级子阵
\[
\begin{aligned}
  L = A\genfrac{\{}{\}}{0pt}{0}{i_1,i_2,\dots,i_n}{1,2,\dots,n},
\end{aligned}
\]
其中，\(1 \leqslant i_1 < \dots < i_n \leqslant s\)。
设 \(n \times m\) 阵 \(B\)、\(C\) 适合 \(AB = AC\)。
则 \(B = C\)。

设 \(H\) 是一个 \(n \times t\) 阵。
设 \(H\) 有一个行列式非零的 \(n\) 级子阵
\[
\begin{aligned}
  K = H\genfrac{\{}{\}}{0pt}{0}{1,2,\dots,n}{j_1,j_2,\dots,j_n},
\end{aligned}
\]
其中，\(1 \leqslant j_1 < \dots < j_n \leqslant t\)。
设 \(m \times n\) 阵 \(F\)、\(G\) 适合 \(FH = GH\)。
则 \(F = G\)。
:::

::: proof [证 1]
我证第 1 个；我留第 2 个为您的习题。

注意，\([L]_{p,v} = [A]_{i_p,v}\)。
注意，
\[
\begin{aligned}
  [L B]_{u,j}
  =
  \sum_{p = 1}^{n} {[L]_{u,p} [B]_{p,j}}
  =
  \sum_{p = 1}^{n} {[A]_{i_u,p} [B]_{p,j}}
  =
  [A B]_{i_u,j}.
\end{aligned}
\]
类似地，\([L C]_{u,j} = [A C]_{i_u,j}\)。
因为 \(A B = A C\)，
我们得 \([L B]_{u,j} = [L C]_{u,j}\)。
注意，\(L B\) 与 \(L C\) 都是 \(n \times m\) 阵。
则 \(L B = L C\)。
因为 \(\det {(L)} \neq 0\)，
由上个定理，\(B = C\)。
:::

::: proof [证 2]
我证第 1 个；我留第 2 个为您的习题。

注意，\([L]_{p,v} = [A]_{i_p,v}\)。

从 \(1\)、\(2\)、\(\dots\)、\(s\)
去除 \(i_1\)、\(i_2\)、\(\dots\)、\(i_n\)
后，还剩 \(s - n\) 个数。
我们从小到大地叫这 \(s - n\) 个数为
\(i_{n+1}\)、\(\dots\)、\(i_s\)。

作 \(n \times s\) 阵 \(X\) 如下：
\[
\begin{aligned}
  [X]_{u,i_p} =
  \begin{cases}
    [\operatorname{adj} {(L)}]_{u,p},
    & p \leqslant n; \\
    0, & p > n.
  \end{cases}
\end{aligned}
\]
则
\[
\begin{aligned}
  [XA]_{u,v}
  = {} &
  \sum_{p = 1}^{s} {[X]_{u,p} [A]_{p,v}}
  \\
  = {} &
  \sum_{p = 1}^{s} {[X]_{u,i_p} [A]_{i_p,v}}
  \\
  = {} &
  \sum_{p = 1}^{n} {[X]_{u,i_p} [A]_{i_p,v}}
  + \sum_{p = n+1}^{s} {[X]_{u,i_p} [A]_{i_p,v}}
  \\
  = {} &
  \sum_{p = 1}^{n}
  {[\operatorname{adj} {(L)}]_{u,p} [L]_{p,v}}
  + \sum_{p = n+1}^{s} {0\, [A]_{i_p,v}}
  \\
  = {} &
  [\operatorname{adj} {(L)}\, L]_{u,v} + 0
  \\
  = {} &
  [\det {(L)}\,I_n]_{u,v}.
\end{aligned}
\]
故 \(X A = \det {(L)}\, I_n\)。

由 \(AB = AC\)，知
\[
\begin{aligned}
  X (AB) = X (AC),
\end{aligned}
\]
即
\[
\begin{aligned}
  (X A) B = (X A) C,
\end{aligned}
\]
即
\[
\begin{aligned}
  (\det {(L)}\,I_n) B = (\det {(L)}\,I_n) C,
\end{aligned}
\]
即
\[
\begin{aligned}
  \det {(L)}\,(I_n B) = \det {(L)}\,(I_n C),
\end{aligned}
\]
即
\[
\begin{aligned}
  \det {(L)}\,B = \det {(L)}\,C.
\end{aligned}
\]
因为 \(\det {(L)} \neq 0\)，
故 \(B = C\)。
:::
