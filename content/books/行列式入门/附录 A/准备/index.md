---
title: 准备
---

本节，我们为研究 \(2\) 元 \(2\) 次式作准备。

::: definition
设 \(a_{i,j}\)
（\(i = 1\)、\(2\)、\(3\)；
\(j = 1\)、\(2\)、\(3\)）是数。
定义
\[
\begin{aligned}
   \det
  \begin{bmatrix}
    a_{1,1} & a_{1,2} & a_{1,3} \\
    a_{2,1} & a_{2,2} & a_{2,3} \\
    a_{3,1} & a_{3,2} & a_{3,3} \\
  \end{bmatrix}
  = {} &
  \hphantom{{} + {}}
  a_{1,1} a_{2,2} a_{3,3}
  + a_{1,2} a_{2,3} a_{3,1}
  + a_{1,3} a_{2,1} a_{3,2}
  \\
  &
  - a_{1,1} a_{2,3} a_{3,2}
  - a_{1,2} a_{2,1} a_{3,3}
  - a_{1,3} a_{2,2} a_{3,1}.
\end{aligned}
\]
:::

可用此法助记此式。
此式含 \(6\) 项，
其的每项都是不同行不同列的 \(3\) 个数的积。
我们在原 \(3\) 行 \(3\) 列的数表的右边复写它，
作成一个 \(3\) 行 \(6\) 列的数表。
由左上至右下的对角线（实线）上的数的积的和
减由右上至左下的对角线（虚线）上的数的积的和
即为得数。

```tikz
\begin{tikzpicture}[>=stealth]
        \matrix [
            matrix of math nodes,
            column sep=1em,
            row sep=1em
        ] (s3h) {
            a_{1,1} & a_{1,2} & a_{1,3} &
            a_{1,1} & a_{1,2} & a_{1,3}   \\
            a_{2,1} & a_{2,2} & a_{2,3} &
            a_{2,1} & a_{2,2} & a_{2,3}   \\
            a_{3,1} & a_{3,2} & a_{3,3} &
            a_{3,1} & a_{3,2} & a_{3,3}   \\
        };
        \path
        (s3h-1-1)                          edge            (s3h-2-2)
        (s3h-2-2)                          edge[->]        (s3h-3-3)
        (s3h-1-2)                          edge            (s3h-2-3)
        (s3h-2-3)                          edge[->]        (s3h-3-4)
        (s3h-1-3)                          edge            (s3h-2-4)
        (s3h-2-4)                          edge[->]        (s3h-3-5)
        (s3h-1-4)                          edge[dashed]    (s3h-2-3)
        (s3h-2-3)                          edge[->,dashed] (s3h-3-2)
        (s3h-1-5)                          edge[dashed]    (s3h-2-4)
        (s3h-2-4)                          edge[->,dashed] (s3h-3-3)
        (s3h-1-6)                          edge[dashed]    (s3h-2-5)
        (s3h-2-5)                          edge[->,dashed] (s3h-3-4);
        \foreach \c in {1,2,3}
        {\node[anchor=south] at (s3h-1-\c.north) {\(+\)};}
        \foreach \c in {4,5,6}
        {\node[anchor=south] at (s3h-1-\c.north) {\(-\)};}
    \end{tikzpicture}
```

::: example
设 \(a\)、\(b\)、\(c\) 是数。
则
\[
\begin{aligned}
   \det
  \begin{bmatrix}
    a & b & c \\
    c & a & b \\
    b & c & a \\
  \end{bmatrix}
  = {} &
  a a a + b b b + c c c
  - a b c - b c a - c a b
  \\
  = {} &
  a^3 + b^3 + c^3 - 3 a b c.
\end{aligned}
\]
:::

::: theorem
设 \(a\)、\(b\)、\(x\) 是复数，
且 \(a \neq 0\)。
则
\[
\begin{aligned}
  ax^2 + 2bx
  = \frac{(ax + b)^2 - b^2}{a}.
\end{aligned}
\]
特别地，取 \(a = 1\)，
知
\[
\begin{aligned}
  x^2 + 2bx = (x + b)^2 - b^2.
\end{aligned}
\]
:::

::: proof
\[
\begin{aligned}
  \frac{(ax + b)^2 - b^2}{a}
  = {} & \frac{(ax + b + b)(ax + b - b)}{a} \\
  = {} & \frac{(ax + 2b)ax}{a}              \\
  = {} & (ax + 2b)x                         \\
  = {} & ax^2 + 2bx.
\end{aligned}
\]
:::

::: theorem
设 \(a\)、\(b\) 是复数。
则
\[
\begin{aligned}
  a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2).
\end{aligned}
\]
:::

::: proof
\[
\begin{aligned}
  a^3 - b^3
  = {} & a^3 - ab^2 + ab^2 - b^3 \\
  = {} & a(a^2 - b^2) + (a-b)b^2 \\
  = {} & (a-b)a(a+b) + (a-b)b^2  \\
  = {} & (a-b)(a^2 + ab + b^2).
\end{aligned}
\]
最后，换 \(b\) 为 \(-b\)，
得另一个公式。
:::

::: theorem
设 \(\omega = (-1 + \mathrm{i} \sqrt{3})/2\)。
则 \(\omega^2 + \omega = -1\)，
且 \(\omega^3 = 1\)。
:::

::: proof
注意，\(2\omega + 1 = \mathrm{i} \sqrt{3}\)。
平方，可知
\[
\begin{aligned}
  4\omega^2 + 4\omega + 1 = -3.
\end{aligned}
\]
整理，即知。

最后，注意，\(1 = 1^2 = 1^3\)，
且 \(\omega = \omega \cdot 1\)，
故
\[
\omega^3
= 1 + (\omega^3 - 1^3)
= 1 + (\omega - 1)(\omega^2 + \omega \cdot 1 + 1^2)
= 1.
\]
:::

::: theorem
设 \(a\)、\(b\) 是复数。
则
\[
\begin{aligned}
  a^3 \pm 3a^2 b + 3ab^2 \pm b^3 = (a \pm b)^3.
\end{aligned}
\]
:::

::: proof
\[
\begin{aligned}
  {}   & a^3 + 3a^2 b + 3ab^2 + b^3             \\
  = {} & a^3 + b^3 + 3a^2 b + 3ab^2             \\
  = {} & (a + b)(a^2 - ab + b^2) + (a + b)(3ab) \\
  = {} & (a + b)(a^2 + 2ab + b^2)               \\
  = {} & (a + b)^3.
\end{aligned}
\]
最后，换 \(b\) 为 \(-b\)，
得另一个公式。
:::

::: theorem
设 \(a\)、\(b\)、\(c\) 是复数。
设 \(\omega = (-1 + \mathrm{i} \sqrt{3})/2\)。
则
\[
\begin{aligned}
  a^3 + b^3 + c^3 - 3abc
  = {} & (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) \\
  = {} & (a + b + c)(a + \omega b + \omega^2 c)
  (a + \omega^2 b + \omega c).
\end{aligned}
\]
:::

::: proof
\[
\begin{aligned}
  {}   & a^3 + b^3 + c^3 - 3abc                       \\
  = {} & a^3 + ((b + c)^3 - 3b^2 c - 3bc^2) - 3abc    \\
  = {} & a^3 + (b + c)^3 - (a + b + c)(3bc)           \\
  = {} & (a + (b + c))(a^2 - a(b + c) + (b + c)^2)
  - (a + b + c)(3bc)                                  \\
  = {} & (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca).
\end{aligned}
\]
注意，
\[
\begin{aligned}
  {}   & 4(a^2 + b^2 + c^2 - ab - bc - ca)          \\
  = {} & 4(a^2  - a(b + c) + (b^2 - bc + c^2))      \\
  = {} & (2a)^2 - 2 \cdot 2a \cdot (b + c)
  + 4(b^2 - bc + c^2)                               \\
  = {} & (2a - b - c)^2 - (b + c)^2
  + (4b^2 - 4bc + 4c^2)                             \\
  = {} & (2a - b - c)^2 + 3(b^2 - 2bc + c^2)        \\
  = {} & (2a - b - c)^2 - (2\omega + 1)^2 (b - c)^2 \\
  = {} & (2a - b - c + (2\omega + 1)(b - c))
  (2a - b - c - (2\omega + 1)(b - c))               \\
  = {} & (2a + 2\omega b - 2(\omega + 1) c)
  (2a - 2(\omega + 1) b + 2\omega c)                \\
  = {} & 4(a + \omega b + \omega^2 c)
  (a + \omega^2 b + \omega c),
\end{aligned}
\]
故
\[
\begin{aligned}
  {}   & a^3 + b^3 + c^3 - 3abc                      \\
  = {} & (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) \\
  = {} & (a + b + c)(a + \omega b + \omega^2 c)
  (a + \omega^2 b + \omega c).
\end{aligned}
\]
:::

::: theorem
设 \(x\)、\(b\)、\(c\) 是复数。
设 \(\omega = (-1 + \mathrm{i} \sqrt{3})/2\)。
则
\[
\begin{aligned}
  x^3 - 3bcx - (b^3 + c^3)
  = {} & (x - (b + c))(x - (\omega b + \omega^2 c))
  (x - (\omega^2 b + \omega c)).
\end{aligned}
\]
:::

::: proof
代上个定理的 \(a\)、\(b\)、\(c\)
以 \(x\)、\(-b\)、\(-c\)。
:::

上个定理允许我们解缺 \(2\) 次项的 \(1\) 元 \(3\) 次方程。

具体地，设 \(a_0 x^3 + a_2 x + a_3 = 0\) 是
缺 \(2\) 次项的 \(1\) 元 \(3\) 次方程
（\(a_0 \neq 0\)）。
以 \(a_0\) 除方程的 \(2\) 边，得
\[
\begin{aligned}
  x^3 + k_2 x + k_3 = 0,
\end{aligned}
\]
其中，\(k_2 = a_2/a_0\)，且 \(k_3 = a_3/a_0\)。
考虑方程组

```math {@eq:A0101}
\left\{
\begin{aligned}
    -3uv         & = k_2, \\
    -(u^3 + v^3) & = k_3.
\end{aligned}
\right.
```

若我们能找到一个解 \(u = b\)，\(v = c\)，
则
\[
\begin{aligned}
  x^3 + k_2 x + k_3
  = {} &
  x^3 - 3 b c x - (b^3 + c^3)
  \\
  = {} &
  (x - (b + c))
  (x - (\omega b + \omega^2 c))
  (x - (\omega^2 b + \omega c)).
\end{aligned}
\]
这样，我们就找到了 \(x^3 + k_2 x + k_3 = 0\) 的解：
\(x = b + c\)，
或 \(x = \omega b + \omega^2 c\)，
或 \(x = \omega^2 b + \omega c\)。

回想，为解 \(1\) 元 \(2\) 次方程，
我们要平方根：
若 \(z\) 是复数，则存在复数 \(w\)，
使 \(w^2 = z\)。
类似地，为解 \(1\) 元 \(3\) 次方程，
我们也要立方根。
具体地：

::: theorem
设 \(z\) 是复数。
存在复数 \(w\)，使 \(w^3 = z\)。
:::

现在，我们解方程组 @eq:A0101。

设 \(k_2 = 0\)。
存在复数 \(p\)，使 \(p^3 = -k_3\)。
分别取 \(b\)、\(c\) 为 \(0\)、\(p\)。
不难验证，
\(u = b\)，\(v = c\) 是方程组 @eq:A0101 的一个解。

设 \(k_2 \neq 0\)。
为解方程组 @eq:A0101，
我们先考虑，若 \(u = b\)，\(v = c\)
是方程组 @eq:A0101 的一个解，
则它应适合何性质。
因为 \(-3 b c = k_2 \neq 0\)，
故 \(b \neq 0\)。
则 \(c = -k_2 / (3b)\)。
从而
\[
\begin{aligned}
  -b^3 + \frac{k_2^3}{27 b^3} = k_3.
\end{aligned}
\]
则 \(-b^3 b^3 + k_2^3 / 27 = k_3 b^3\)。
故 \(z = b^3\) 是 \(1\) 元 \(2\) 次方程

```math {@eq:A0102}
z^2 + k_3 z - \frac{k_2^3}{27} = 0
```

的解。
我们知道，\(1\) 元 \(2\) 次方程总有复数解。
我们设 \(z = z_0\)
是方程 @eq:A0102 的一个解。
存在复数 \(q\)，使 \(q^3 = z_0\)。
（注意，\(q \neq 0\)。）
分别取 \(b\)、\(c\) 为 \(q\)、\(-k_2/(3q)\)。
不难验证，
\(u = b\)，\(v = c\) 是方程组 @eq:A0101 的一个解。

我们说，若我们作适当的换元，
则每个 \(1\) 元 \(3\) 次方程都可被变为
缺 \(2\) 次项的方程。
为此，取 \(1\) 元 \(3\) 次方程

```math {@eq:cubic-equation-1}
d_0 x^3 + d_1 x^2 + d_2 x + d_3 = 0,
\quad d_0 \neq 0.
```

设 \(e\) 是数。
我们代 \(x\) 以 \(y - e\)。
则方程 @eq:cubic-equation-1 的右边是 \(0\)，
且它的左边是
\[
\begin{aligned}
  &
  d_0 (y - e)^3
  + d_1 (y - e)^2
  + d_2 (y - e)
  + d_3
  \\
  = {} &
  d_0 y^3
  + (d_1 - 3d_0 e) y^2
  + (d_2 - 2d_1 e + 3d_0 e^2) y
  + (d_3 - d_2 e + d_1 e^2 - d_0 e^3).
\end{aligned}
\]
于是，若我们取 \(e = d_1/(3d_0)\)，
则 \(d_1 - 3d_0 e = 0\)。
则方程 @eq:cubic-equation-1 被变为
\[
\begin{aligned}
  d_0 y^3 + \left(d_2 - \frac{d_1^2}{3d_0} \right)y
  + d_3 + \frac{2 d_1^3}{27 d_0^2} - \frac{d_1 d_2}{3d_0}
  = 0.
\end{aligned}
\]
则我们可解此方程。
设 \(u\)、\(v\) 适合
\[
\left\{
\begin{aligned}
  -3uv         & =
  \frac{1}{d_0}
  \left(d_2 - \frac{d_1^2}{3d_0} \right),
  \\
  -(u^3 + v^3) & =
  \frac{1}{d_0}
  \left(d_3 + \frac{2 d_1^3}{27 d_0^2} - \frac{d_1 d_2}{3d_0}\right).
\end{aligned}
\right.
\]
则
\[
\begin{aligned}
  &
  d_0 y^3 + \left(d_2 - \frac{d_1^2}{3d_0} \right)y
  + d_3 + \frac{2 d_1^3}{27 d_0^2} - \frac{d_1 d_2}{3d_0}
  \\
  = {} &
  d_0 y^3 - 3 u v d_0 y - (u^3 + v^3) d_0
  \\
  = {} &
  d_0 (y^3 - 3 u v y - (u^3 + v^3))
  \\
  = {} &
  d_0
  (y - (u + v))
  (y - (\omega u + \omega^2 v))
  (y - (\omega^2 u + \omega v)).
\end{aligned}
\]
则
\[
\begin{aligned}
  &
  d_0 x^3 + d_1 x^2 + d_2 x + d_3
  \\
  = {} &
  d_0 (y - e)^3 + d_1 (y - e)^2 + d_2 (y - e) + d_3
  \\
  = {} &
  d_0 y^3 + \left(d_2 - \frac{d_1^2}{3d_0} \right)y
  + d_3 + \frac{2 d_1^3}{27 d_0^2} - \frac{d_1 d_2}{3d_0}
  \\
  = {} &
  d_0
  (y - (u + v))
  (y - (\omega u + \omega^2 v))
  (y - (\omega^2 u + \omega v))
  \\
  = {} &
  d_0
  (x + e - (u + v))
  (x + e - (\omega u + \omega^2 v))
  (x + e - (\omega^2 u + \omega v))
  \\
  = {} &
  d_0
  (x - (-e + u + v))
  (x - (-e + \omega u + \omega^2 v))
  (x - (-e + \omega^2 u + \omega v)).
\end{aligned}
\]
于是，
我们找到了
\(d_0 x^3 + d_1 x^2 + d_2 x + d_3 = 0\)
的解：
\(x = -e + u + v\)，
或 \(x = -e + \omega u + \omega^2 v\)，
或 \(x = -e + \omega^2 u + \omega v\)。

所以，理论地，我们可解任何 \(1\) 元 \(3\) 次方程。
不过，这个解方程的方法是复杂的，
故我们一般不用它。

最后，有一件事，其值得提。

设 \(a_0 x^3 + a_1 x^2 + a_2 x + a_3\)（\(a_0 \neq 0\)）
是 \(3\) 次式。
由前面的讨论，存在复数 \(x_1\)、\(x_2\)、\(x_3\)，
使
\[
\begin{aligned}
  a_0 x^3 + a_1 x^2 + a_2 x + a_3
  = a_0 (x - x_1) (x - x_2) (x - x_3).
\end{aligned}
\]

由此，我们得（回想在“复数”的讨论）

::: theorem
设 \(n\) 是不超过 \(3\) 的正整数。
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
