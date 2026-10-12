---
title: '\(1\) 元 \(4\) 次方程'
---

我们知道，理论地，
每个 \(1\) 元 \(m\) 次方程都是可被（根式）求解的，
其中，\(m = 1\)、\(2\)、\(3\)。
本节，我展现一个解 \(1\) 元 \(4\) 次方程的方法。

任取一个 \(1\) 元 \(4\) 次方程

```math {@eq:A0401}
a_0 x^4 + a_1 x^3 + a_2 x^2 + a_3 x + a_4 = 0,
```

其中，\(a_0 \neq 0\)。

设 \(s\) 是方程 @eq:A0401 的一个解。
则
\[
\begin{aligned}
  a_0 (s^2)^2 + a_1 s\, s^2 + a_2 s^2 + a_3 s + a_4 = 0.
\end{aligned}
\]
则 \((s, s^2)\) 是 \(2\) 元 \(2\) 次方程组

```math {@eq:A0402}
\left\{
\begin{aligned}
    f_1 (x, y) & = a_1 xy + a_0 y^2 + a_3 x + a_2 y + a_4 = 0, \\
    f_2 (x, y) & = x^2 - y = 0
\end{aligned}
\right.
```

的一个解。

反过来，设 \((u, v)\) 是方程组 @eq:A0402 的一个解。
那么，\(v = u^2\)。
从而
\[
\begin{aligned}
  a_1 u\, u^2 + a_0 (u^2)^2 + a_3 u + a_2 u^2 + a_4 = 0,
\end{aligned}
\]
即
\[
\begin{aligned}
  a_0 u^4 + a_1 u^3 + a_2 u^2 + a_3 u + a_4 = 0.
\end{aligned}
\]
故 \(u\) 是方程 @eq:A0401 的一个解。

这么看来，我们可变
解 \(1\) 元 \(4\) 次方程的问题
为
解 \(2\) 元 \(2\) 次方程组的问题。

待定复数 \(k\)。
作一个跟方程组 @eq:A0402 同解的方程组

```math {@eq:A0403}
\left\{
\begin{aligned}
    f_3 (x, y) & = 0, \\
    f_2 (x, y) & = 0,
\end{aligned}
\right.
```

其中，
\[
\begin{aligned}
  f_3 (x, y)
  = {} &
  f_1 (x, y) + k f_2 (x, y)
  \\
  = {} &
  k x^2
  + \frac{a_1}{2} \cdot 2xy
  + a_0 y^2
  + \frac{a_3}{2} \cdot 2x
  + \frac{a_2 - k}{2} \cdot 2y
  + a_4.
\end{aligned}
\]
计算 \(f_3 (x, y)\) 的判别式
\[
\begin{aligned}
  \Delta_3
  = {} &
   \det
  \begin{bmatrix}
    k     & a_1/2     & a_3/2     \\
    a_1/2 & a_0       & (a_2-k)/2 \\
    a_3/2 & (a_2-k)/2 & a_4       \\
  \end{bmatrix}
  \\
  = {} &
  \frac{k^3 - 2 a_2 k^2 - (4 a_0 a_4 - a_1 a_3 - a_2^2) k
  + (a_0 a_3^2 + a_1^2 a_4 - a_1 a_2 a_3)}{-4}.
\end{aligned}
\]
\(\Delta_3\) 是一个关于 \(k\) 的 \(1\) 元 \(3\) 次式，
故 \(\Delta_3 = 0\) 是一个 \(1\) 元 \(3\) 次方程。
理论地，这是可解的。
解出一个 \(k\)。
从而，我们可用老方法解方程组 @eq:A0403，
进而得到方程 @eq:A0401 的解。

::: example
解方程
\[
\begin{aligned}
  x^4 - 2x^3 - 10x^2 + 44x - 48 = 0.
\end{aligned}
\]

考虑方程组
\[
\left\{
\begin{aligned}
  f_1 (x, y) & = -2xy + y^2 + 44x - 10y - 48 = 0, \\
  f_2 (x, y) & = x^2 - y = 0.
\end{aligned}
\right.
\]
此方程组的解的首个分量即为原方程的解。

待定复数 \(k\)。
作出同解方程组
\[
\left\{
\begin{aligned}
  f_3 (x, y) & = 0, \\
  f_2 (x, y) & = 0,
\end{aligned}
\right.
\]
其中，
\[
\begin{aligned}
  f_3 (x, y)
  = {} & f_1 (x, y) + kf_2 (x, y)               \\
  = {} & kx^2 - 2xy + y^2 + 44x - (k+10)y - 48.
\end{aligned}
\]
计算 \(f_3 (x, y)\) 的判别式
\[
\begin{aligned}
  \Delta_3
  =  \det
  \begin{bmatrix}
    k  & -1     & 22     \\
    -1 & 1      & -k/2-5 \\
    22 & -k/2-5 & -48    \\
  \end{bmatrix}
  = -\frac{1}{4} (k + 8) (k^2 + 12k + 108).
\end{aligned}
\]
所以，我们可取 \(k = -8\)。
则
\[
\begin{aligned}
  f_3 (x, y)
  = {} & {-} 8x^2 - 2xy + y^2 + 44x - 2y - 48      \\
  = {} & y^2 - 2(x+1)y - 8x^2 + 44x - 48           \\
  = {} & (y - x - 1)^2 - (x+1)^2 - 8x^2 + 44x - 48 \\
  = {} & (y - x - 1)^2 - (3x - 7)^2                \\
  = {} & (y + 2x - 8) (y - 4x + 6).
\end{aligned}
\]
所以
\[
\begin{aligned}
  y + 2x - 8 = 0
  \quad \text{或} \quad
  y - 4x + 6 = 0.
\end{aligned}
\]
因为 \(x^2 - y = 0\)，
故
\[
\begin{aligned}
  x^2 + 2x - 8 = 0
  \quad \text{或} \quad
  x^2 - 4x + 6 = 0.
\end{aligned}
\]
注意，
我们的目的是求解（原方程的）\(x\)，
而 \(y\) 只是辅助量，
故我们用 \(y = x^2\) 消去了 \(y\)，
进而直接求解 \(x\)。
我们不必同时解出 \(x\) 与 \(y\)。

\(1\) 元 \(2\) 次方程是不难求解的。
不难算出
\[
\begin{aligned}
  x = -4
  \quad \text{或} \quad
  x = 2
  \quad \text{或} \quad
  x = 2 + \mathrm{i} \sqrt{2}
  \quad \text{或} \quad
  x = 2 - \mathrm{i} \sqrt{2}.
\end{aligned}
\]
可验证，它们都是原方程的解。
:::

最后，有一件事，其值得提。

记 \(p (x) = a_0 x^4 + a_1 x^3 + a_2 x^2 + a_3 x + a_4\)
（\(a_0 \neq 0\)）。
记 \(f_1 (x, y) = a_1 x y + a_0 y^2 + a_3 x + a_2 y + a_4\)。
记 \(f_2 (x, y) = x^2 - y\)。
设 \(k\) 是数。
设
\[
\begin{aligned}
  f_3 (x, y)
  = {} &
  f_1 (x, y) + k f_2 (x, y)
  \\
  = {} &
  k x^2
  + \frac{a_1}{2} \cdot 2xy
  + a_0 y^2
  + \frac{a_3}{2} \cdot 2x
  + \frac{a_2 - k}{2} \cdot 2y
  + a_4.
\end{aligned}
\]
则对任何数 \(x\) 与 \(k\)，
\(p(x) = f_3 (x, x^2)\)，
因为 \(p(x) = f_1 (x, x^2)\)，
且 \(0 = f_2 (x, x^2)\)。

我们知道，
存在 \(k\)，
使存在复数
\(b_1\)、\(b_2\)、\(b_3\)、\(b_4\)、\(b_5\)、\(b_6\)，
使对任何 \(x\)，\(y\)，
\[
\begin{aligned}
  f_3 (x, y)
  = (b_1 x + b_2 y + b_3) (b_4 x + b_5 y + b_6).
\end{aligned}
\]
（注意，\(b_2 b_5 = a_0 \neq 0\)。
则 \(b_2 \neq 0\)，且 \(b_5 \neq 0\)。）
则
\[
\begin{aligned}
  p(x) = f_3 (x, x^2)
  = (b_1 x + b_2 x^2 + b_3) (b_4 x + b_5 x^2 + b_6).
\end{aligned}
\]
则存在复数 \(x_1\)、\(x_2\)，使
\[
\begin{aligned}
  b_1 x + b_2 x^2 + b_3
  = b_2 x^2 + b_1 x + b_3
  = b_2 (x - x_1) (x - x_2);
\end{aligned}
\]
存在复数 \(x_3\)、\(x_4\)，使
\[
\begin{aligned}
  b_4 x + b_5 x^2 + b_6
  = b_5 x^2 + b_4 x + b_6
  = b_5 (x - x_3) (x - x_4).
\end{aligned}
\]
则
\[
\begin{aligned}
  p(x)
  = {} &
  b_2 (x - x_1) (x - x_2)
  \cdot b_5 (x - x_3) (x - x_4)
  \\
  = {} &
  a_0 (x - x_1) (x - x_2) (x - x_3) (x - x_4).
\end{aligned}
\]

由此，我们得（回想在“准备”的讨论）

::: theorem
设 \(n\) 是不超过 \(4\) 的正整数。
设 \(p(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
是 \(n\) 次式
（\(a_0 \neq 0\)）。
则存在复数 \(x_1\)、\(\dots\)、\(x_n\)，
使
\[
\begin{aligned}
  p(x) = a_0 (x - x_1) \dots (x - x_n).
\end{aligned}
\]
:::

最后，我指出，如下一般的定理是对的。
不过，我就不在这儿证明它了。
若您想知道更多，您可以找相关的文献。

::: theorem [代数基本定理]
设 \(n\) 是正整数。
设 \(p(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
是 \(n\) 次式
（\(a_0 \neq 0\)）。
则存在复数 \(x_1\)、\(\dots\)、\(x_n\)，
使
\[
\begin{aligned}
  p(x) = a_0 (x - x_1) \dots (x - x_n).
\end{aligned}
\]
:::
