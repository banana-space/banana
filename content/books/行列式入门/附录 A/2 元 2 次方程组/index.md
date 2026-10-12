---
title: '\(2\) 元 \(2\) 次方程组'
---

本节，我们讨论如何求解方程组

```math {@eq:A0301}
\left\{
\begin{aligned}
    f_1 (x, y) & = 0, \\
    f_2 (x, y) & = 0,
\end{aligned}
\right.
```

其中，\(f_i (x, y) = A_i x^2 + 2B_i xy + C_i y^2
+ 2D_i x + 2E_i y + F_i\)
（\(i = 1\)，\(2\)）。

我们看一个简单的例。

::: example
解方程组
\[
\left\{
\begin{aligned}
  f_1 (x, y) & = x^2 - y^2 - 4x + 4 = 0, \\
  f_2 (x, y) & = x^2 + y^2 - 2x = 0.
\end{aligned}
\right.
\]

注意，
\[
\begin{aligned}
  f_1 (x, y)
  = {} & x^2 - y^2 - 4x + 4      \\
  = {} & (x^2 - 4x + 4) - y^2    \\
  = {} & (x - 2)^2 - y^2         \\
  = {} & (x - 2 + y)(x - 2 - y).
\end{aligned}
\]
故
\[
\begin{aligned}
  x = 2 - y
  \quad \text{或} \quad
  x = 2 + y.
\end{aligned}
\]
联立 \(x = 2 - y\) 与 \(f_2 (x, y) = 0\)，
得 \(2y^2 - 2y = 0\)。
则
\[
\begin{aligned}
  (x, y) = (1, 1)
  \quad \text{或} \quad
  (x, y) = (2, 0).
\end{aligned}
\]
联立 \(x = 2 + y\) 与 \(f_2 (x, y) = 0\)，
得 \(2y^2 + 2y = 0\)。
则
\[
\begin{aligned}
  (x, y) = (1, -1)
  \quad \text{或} \quad
  (x, y) = (2, 0).
\end{aligned}
\]
可验证，\((1, 1)\)、\((1, -1)\)、\((2, 0)\) 都是解。

不难算出，\(f_1 (x, y)\) 的判别式
\[
\begin{aligned}
  \Delta_1
  =
   \det
  \begin{bmatrix}
    1  & 0  & -2 \\
    0  & -1 & 0  \\
    -2 & 0  & 4  \\
  \end{bmatrix}
  = 0.
\end{aligned}
\]
所以，理论地，\(f_1 (x, y)\) 确实可被
写为 \(2\) 个 \(2\) 元 \({\leqslant} 1\) 次式的积。
不过，\(f_2 (x, y)\) 的判别式
\[
\begin{aligned}
  \Delta_2
  =
   \det
  \begin{bmatrix}
    1  & 0 & -1 \\
    0  & 1 & 0  \\
    -1 & 0 & 0  \\
  \end{bmatrix}
  = -1.
\end{aligned}
\]
所以，\(f_2 (x, y)\) 不可被
写为 \(2\) 个 \(2\) 元 \({\leqslant} 1\) 次式的积。
:::

由此可见，若我们能写方程组 @eq:A0301
的一个方程的左边为 \(2\) 个 \(2\) 元 \({\leqslant} 1\) 次式的积，
则我们可解 \(2\) 个 \(1\) 元 \({\leqslant} 2\) 次方程，
以解此方程组。

不过，不是所有的方程组都这么简单。

::: example {@emp:A0301}
解方程组
\[
\left\{
\begin{aligned}
  f_1 (x, y) & = x^2 + 3y^2 + 2x - 11 = 0, \\
  f_2 (x, y) & = 3x^2 - y^2 - 4x - 3 = 0.
\end{aligned}
\right.
\]

我们试用老方法解此方程组。
不过，试了试，发现
\(f_1 (x, y)\) 与 \(f_2 (x, y)\)
好像“不可被分解”。
此时，我们来计算判别式。
\(f_1 (x, y)\)、\(f_2 (x, y)\) 的判别式分别是
\[
\begin{aligned}
  & \Delta_1 =
   \det
  \begin{bmatrix}
    1 & 0 & 1   \\
    0 & 3 & 0   \\
    1 & 0 & -11 \\
  \end{bmatrix}
  = -36,
  \\
  & \Delta_2 =
   \det
  \begin{bmatrix}
    3  & 0  & -2 \\
    0  & -1 & 0  \\
    -2 & 0  & -3 \\
  \end{bmatrix}
  = 13.
\end{aligned}
\]
看来，我们不能像上个例那样直接地解此方程组。
:::

不过，我们并非无计可施。

::: theorem
设 \(k\) 是复数。
则方程组 @eq:A0301
与方程组

```math {@eq:A0302}
\left\{
\begin{aligned}
    f_1 (x, y) + kf_2 (x, y) & = 0, \\
    f_2 (x, y)               & = 0
\end{aligned}
\right.
```

同解。
:::

::: proof
任取方程组 @eq:A0301 的一个解 \((s, t)\)。
于是，\(f_1 (s, t) = f_2 (s, t) = 0\)。
从而 \(f_1 (s, t) + kf_2 (s, t) = 0 + k0 = 0\)。
故方程组 @eq:A0301 的每个解
都是方程组 @eq:A0302 的解。

反过来，任取方程组 @eq:A0302 的一个解 \((u, v)\)。
于是，
\(f_1 (u, v) + k f_2 (u, v) = f_2 (u, v) = 0\)。
从而 \(f_1 (u, v)
    = (f_1 (u, v) + k f_2 (u, v)) - kf_2 (u, v)
  = 0 - k0 = 0\)。
故方程组 @eq:A0302 的每个解
都是方程组 @eq:A0301 的解。
:::

根据上个定理，
方程组 @eq:A0301 与方程组 @eq:A0302
同解。
那么，能否取适当的 \(k\)，
使方程组 @eq:A0302 的
首个方程的左边可被写为
\(2\) 个 \(2\) 元 \({\leqslant} 1\) 次式的积？
我们计算 \(f_3 (x, y) = f_1 (x, y) + kf_2 (x, y)\)
的判别式：
\[
\begin{aligned}
  \Delta_3
  = {} &  \det
  \begin{bmatrix}
    A_1 + kA_2 & B_1 + kB_2 & D_1 + kD_2 \\
    B_1 + kB_2 & C_1 + kC_2 & E_1 + kE_2 \\
    D_1 + kD_2 & E_1 + kE_2 & F_1 + kF_2 \\
  \end{bmatrix}  \\
  = {} & \Delta_1 + c_1 k + c_2 k^2 + \Delta_2 k^3,
\end{aligned}
\]
其中，\(\Delta_i\) 是 \(f_i (x, y)\) 的判别式
（\(i = 1\)，\(2\)），且
\[
\begin{aligned}
  c_1
  = {} &
   \det
  \begin{bmatrix}
    A_2 & B_1 & D_1 \\
    B_2 & C_1 & E_1 \\
    D_2 & E_1 & F_1 \\
  \end{bmatrix}
  +
   \det
  \begin{bmatrix}
    A_1 & B_2 & D_1 \\
    B_1 & C_2 & E_1 \\
    D_1 & E_2 & F_1 \\
  \end{bmatrix}
  +
   \det
  \begin{bmatrix}
    A_1 & B_1 & D_2 \\
    B_1 & C_1 & E_2 \\
    D_1 & E_1 & F_2 \\
  \end{bmatrix} , \\
  c_2
  = {} &
   \det
  \begin{bmatrix}
    A_1 & B_2 & D_2 \\
    B_1 & C_2 & E_2 \\
    D_1 & E_2 & F_2 \\
  \end{bmatrix}
  +
   \det
  \begin{bmatrix}
    A_2 & B_1 & D_2 \\
    B_2 & C_1 & E_2 \\
    D_2 & E_1 & F_2 \\
  \end{bmatrix}
  +
   \det
  \begin{bmatrix}
    A_2 & B_2 & D_1 \\
    B_2 & C_2 & E_1 \\
    D_2 & E_2 & F_1 \\
  \end{bmatrix} .
\end{aligned}
\]
\(\Delta_3\) 是一个关于 \(k\) 的 \(1\) 元 \({\leqslant} 3\) 次式，
故 \(\Delta_3 = 0\) 是一个 \(1\) 元 \({\leqslant} 3\) 次方程。
理论地，这是可解的。
解出一个 \(k\)。
从而，我们可用老方法
解跟方程组 @eq:A0301 同解的
方程组 @eq:A0302，
进而得到方程组 @eq:A0301 的解。

::: example
我们解当时未能求解的方程组
\[
\left\{
\begin{aligned}
  f_1 (x, y) & = x^2 + 3y^2 + 2x - 11 = 0, \\
  f_2 (x, y) & = 3x^2 - y^2 - 4x - 3 = 0.
\end{aligned}
\right.
\]

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
  = {} & f_1 (x, y) + kf_2 (x, y)                    \\
  = {} & (1+3k)x^2 + (3-k)y^2 + 2(1-2k)x + (-3k-11).
\end{aligned}
\]
计算 \(f_3 (x, y)\) 的判别式
\[
\begin{aligned}
  \Delta_3
  =  \det
  \begin{bmatrix}
    1+3k & 0   & 1-2k   \\
    0    & 3-k & 0      \\
    1-2k & 0   & -3k-11 \\
  \end{bmatrix}
  = (k-3) (13k^2 + 32k + 12).
\end{aligned}
\]
所以，我们可取 \(k = 3\)。
则
\[
\begin{aligned}
  f_3 (x, y) = 10x^2 - 10x - 20 = 10(x - 2)(x + 1).
\end{aligned}
\]
从而
\[
\begin{aligned}
  x = 2
  \quad \text{或} \quad
  x = -1.
\end{aligned}
\]
联立 \(x = 2\) 与 \(f_2 (x, y) = 0\)，
得 \(-y^2 + 1 = 0\)。
则
\[
\begin{aligned}
  (x, y) = (2, 1)
  \quad \text{或} \quad
  (x, y) = (2, -1).
\end{aligned}
\]
联立 \(x = -1\) 与 \(f_2 (x, y) = 0\)，
得 \(-y^2 + 4 = 0\)。
则
\[
\begin{aligned}
  (x, y) = (-1, 2)
  \quad \text{或} \quad
  (x, y) = (-1, -2).
\end{aligned}
\]
可验证，
\((2, 1)\)、\((2, -1)\)、\((-1, 2)\)、\((-1, -2)\)
都是解。
:::
