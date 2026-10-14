---
title: '\(2\) 元 \(2\) 次式'
---

设 \(A\)、\(B\)、\(C\)、\(D\)、\(E\)、\(F\) 为复数。
形如
\[
\begin{aligned}
  f(x, y) = Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F
\end{aligned}
\]
的式是一个 \(2\) 元 \({\leqslant} 2\) 次式。
若 \(A\)、\(B\)、\(C\) 至少有一个不是 \(0\)，
我们说，\(f(x, y)\) 是一个 \(2\) 元 \(2\) 次式。
若 \(A\)、\(B\)、\(C\) 全为 \(0\)，
我们说，\(f(x, y)\) 是一个 \(2\) 元 \({\leqslant} 1\) 次式。
若 \(A\)、\(B\)、\(C\) 全为 \(0\)，
但 \(D\)、\(E\) 至少有一个不是 \(0\)，
我们说，\(f(x, y)\) 是一个 \(2\) 元 \(1\) 次式。
若 \(A\)、\(B\)、\(C\)、\(D\)、\(E\) 都是 \(0\)，
我们说，\(f(x, y)\) 是一个常数。

::: theorem
设 \(A\)、\(B\)、\(C\)、\(D\)、\(E\)、\(F\) 为复数。
设 \(f(x, y) = Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F\)。
那么，当 \(A\)、\(B\)、\(C\)、\(D\)、\(E\)、\(F\)
全为 \(0\) 时，
对任何的复数对 \((z, w)\)，
\(f(z, w) = 0\)。
反过来，若对任何的复数对 \((z, w)\)，
\(f(z, w) = 0\)，
则 \(A\)、\(B\)、\(C\)、\(D\)、\(E\)、\(F\)
全为 \(0\)。
:::

::: proof
前一部分是显然的，因为 \(0\) 跟任何数的积都是 \(0\)。
我们看后一部分。

假定，对任何的复数对 \((z, w)\)，\(f(z, w) = 0\)。
因为 \(f(0, 0) = 0\)，故 \(F = 0\)。
因为 \(f(1, 0) = A + 2D + F = A + 2D = 0\)，
且 \(f(-1, 0) = A - 2D + F = A - 2D = 0\)，
故 \(A = D = 0\)。
因为 \(f(0, 1) = C + 2E + F = C + 2E = 0\)，
且 \(f(0, -1) = C - 2E + F = C - 2E = 0\)，
故 \(C = E = 0\)。
最后，因为
\(f(1, 1) = A + 2B + C + 2D + 2E + F = 2B = 0\)，
故 \(B = 0\)。
:::

::: theorem
设 \(A_1\)、\(A_2\)、
\(B_1\)、\(B_2\)、
\(C_1\)、\(C_2\)、
\(D_1\)、\(D_2\)、
\(E_1\)、\(E_2\)、
\(F_1\)、\(F_2\)
都是复数。
设
\(f_i (x, y) = A_i x^2 + 2B_i xy + C_i y^2
  + 2D_i x + 2E_i y + F_i\)
（\(i = 1\)，\(2\)）。
那么，
“对任何复数对 \((z, w)\)，\(f_1 (z, w) = f_2 (z, w)\)”
相当于
“\(A_1 = A_2\)，\(B_1 = B_2\)，\(C_1 = C_2\)，
\(D_1 = D_2\)，\(E_1 = E_2\)，\(F_1 = F_2\)”。
:::

::: proof
设
\[
\begin{aligned}
  g(x, y)
  = {} & f_1 (x, y) - f_2 (x, y)
  \\
  = {} & \hphantom{{} + {}}
  (A_1 - A_2) x^2 + 2(B_1 - B_2) xy + (C_1 - C_2) y^2
  \\
  &
  + 2(D_1 - D_2) x + 2(E_1 - E_2) y + (F_1 - F_2).
\end{aligned}
\]
施上个定理于 \(g(x, y)\) 即可。
:::

::: definition
设 \(f(x, y) = Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F\)。
定义 \(f(x, y)\) 的**判别式**
\[
\begin{aligned}
  \Delta
  = {} &
   \det
  \begin{bmatrix}
    A & B & D \\
    B & C & E \\
    D & E & F \\
  \end{bmatrix}
  \\
  = {} &
  ACF + BED + DBE - AEE - BBF - DCD
  \\
  = {} &
  ACF + 2BED - (AE^2 + CD^2 + FB^2).
\end{aligned}
\]
:::

对应拉丁字母 D，
\(\Delta\) 来自 <lang en>discriminant</lang>（英语）。

\(2\) 元 \({\leqslant} 2\) 次式 \(f(x, y)\) 的判别式是否为 \(0\)
与
是否可写 \(f(x, y)\) 为
\(2\) 个 \(2\) 元 \({\leqslant} 1\) 次式的积
有关。

::: theorem
设 \(f(x, y) = (a_1 x + a_2 y + a_3) (a_4 x + a_5 y + a_6)\)。
则 \(f(x, y)\) 的判别式为 \(0\)。
:::

::: proof
展开 \(f(x, y)\)，得
\[
\begin{aligned}
  f(x,y) = A x^2 + 2B xy + C y^2 + 2D x + 2E y + F,
\end{aligned}
\]
其中，
\[
\begin{aligned}
  & A = a_1 a_4, \quad C = a_2 a_5, \quad F = a_3 a_6, \\
  & 2B = a_1 a_5 + a_2 a_4,                            \\
  & 2D = a_1 a_6 + a_3 a_4,                            \\
  & 2E = a_2 a_6 + a_3 a_5.
\end{aligned}
\]
从而
\[
\begin{aligned}
  \Delta
  = {} &
  ACF + 2BED - (AE^2 + CD^2 + FB^2)
  \\
  = {} &
  \frac{1}{4} (4ACF + 2B \cdot 2E \cdot 2D) - \frac{1}{4} (A (2E)^2 + C (2D)^2 + F(2B)^2)
  \\
  = {} &
  \frac{1}{4} (4 a_1 a_2 a_3 a_4 a_5 a_6 + a_2 a_3^2 a_5 a_4^2+a_2^2 a_3 a_6 a_4^2+a_1 a_3^2 a_5^2 a_4+a_1 a_2^2 a_6^2 a_4
    \\
    & \quad \quad
  +2 a_1 a_2 a_3 a_5 a_6 a_4+a_1^2 a_2 a_5 a_6^2+a_1^2 a_3 a_5^2 a_6)
  \\
  & \quad
  - \frac{1}{4} (a_1 a_3^2 a_4 a_5^2+2 a_1 a_2 a_3 a_4 a_6 a_5+a_1 a_2^2 a_4 a_6^2
    \\
    & \quad \quad +a_2 a_3^2 a_5 a_4^2+2 a_1 a_2 a_3 a_5 a_6 a_4+a_1^2 a_2 a_5 a_6^2
    \\
    & \quad \quad
  +a_2^2 a_3 a_6 a_4^2+2 a_1 a_2 a_3 a_5 a_6 a_4+a_1^2 a_3 a_5^2 a_6)
  \\
  = {} & 0.
\end{aligned}
\]
:::

::: theorem
设 \(f(x, y) = Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F\)
的判别式为 \(0\)。
则存在复数
\(a_1\)、\(a_2\)、\(a_3\)、\(a_4\)、\(a_5\)、\(a_6\)
使
\[
\begin{aligned}
  f(x, y) = (a_1 x + a_2 y + a_3) (a_4 x + a_5 y + a_6).
\end{aligned}
\]
:::

::: proof
设
\[
\begin{aligned}
  \Delta = ACF + 2BED - (AE^2 + CD^2 + FB^2) = 0.
\end{aligned}
\]
我们分类讨论。

(1) \(A = B = C = 0\)。
    则
    \[
    \begin{aligned}
      f(x, y)
      = 2Dx + 2Ey + F
      = (0x + 0y + 1)(2Dx + 2Ey + F).
    \end{aligned}
    \]

(2) \(A = C = 0\)，但 \(B \neq 0\)。
    则
    \[
    \begin{aligned}
      f(x, y)
      = {} & 2Bxy + 2Dx + 2Ey + F                                                               \\
      = {} & \frac{2}{B}(Bx \cdot By + D \cdot Bx + E \cdot By) + F                             \\
      = {} & \frac{2}{B}(Bx \cdot By + D \cdot Bx + E \cdot By + DE - DE) + F                   \\
      = {} & \frac{2}{B}(Bx \cdot By + D \cdot Bx + E \cdot By + DE) - \frac{2}{B} \cdot DE + F \\
      = {} & \frac{2}{B}(Bx + E)(By + D) - \frac{2ED - FB}{B}                                   \\
      = {} & \left(1x + 0y + \frac{E}{B}\right)(0x + 2By + 2D) - \frac{2BED - FB^2}{B^2}.
    \end{aligned}
    \]
    因为 \(\Delta = 0\)，且 \(A = C = 0\)，故
    \[
    \begin{aligned}
      \Delta = 0 + 2BED - (0 + 0 + FB^2) = 2BED - FB^2 = 0.
    \end{aligned}
    \]
    从而
    \[
    \begin{aligned}
      f(x, y) = \left(1x + 0y + \frac{E}{B}\right)(0x + 2By + 2D).
    \end{aligned}
    \]

(3) \(A \neq 0\)。
    则
    \[
    \begin{aligned}
      &
      f(x, y)
      \\
      = {} &
      Ax^2 + 2(By + D)x + (Cy^2 + 2Ey + F)
      \\
      = {} &
      \frac{(Ax + By + D)^2 - (By + D)^2}{A} + (Cy^2 + 2Ey + F)
      \\
      = {} &
      \frac{1}{A} (Ax + By + D)^2 + \frac{1}{A}((AC - B^2)y^2 + 2(AE - BD)y) + \frac{AF - D^2}{A}.
    \end{aligned}
    \]
    我们要进一步地分类讨论。

(\(3.1\)) \(AC - B^2 = 0\)。
                此时，\(C = B^2 / A\)。
                故
                \[
                \begin{aligned}
                  \Delta
                  = {} &
                  A \cdot \frac{B^2}{A} \cdot F + 2BED - AE^2
                        - \frac{B^2 D^2}{A} - FB^2
                        \\
                        = {} &
                        {-} \frac{1}{A} (A^2 E^2 - 2AE BD + B^2 D^2)
                        \\
                        = {} &
                        {-} \frac{1}{A} (AE - BD)^2.
                      \end{aligned}
                \]
          因为 \(\Delta = 0\)，
          故 \(AE - BD = 0\)。
          从而
          \[
          \begin{aligned}
            f(x, y) = \frac{(Ax + By + D)^2 - (D^2 - AF)}{A}.
          \end{aligned}
          \]
          设复数 \(d\) 适合 \(d^2 = D^2 - AF\)。
          则
          \[
          \begin{aligned}
            f(x, y) = \frac{1}{A} (Ax + By + D + d)(Ax + By + D - d);
          \end{aligned}
          \]
          也就是，
          \[
          \begin{aligned}
            f(x, y) = \left( 1x + \frac{B}{A} y + \frac{D+d}{A} \right) (Ax + By + (D - d)).
          \end{aligned}
          \]

(\(3.2\)) \(AC - B^2 \neq 0\)。
                此时
                \[
                \begin{aligned}
                  & (AC - B^2) y^2 + 2(AE - BD)y
                  \\
                  = {} & \frac{1}{AC - B^2} ((AC - B^2)y + (AE - BD))^2 - \frac{(AE - BD)^2}{AC - B^2}.
                \end{aligned}
                \]
                所以
                \[
                \begin{aligned}
                  f(x, y)
                  = {} &
                  \hphantom{{} + {}}
                  \frac{(Ax + By + D)^2}{A} - \frac{((B^2 - AC)y + (BD - AE))^2}{A(B^2 - AC)}
                  \\
                  &
                        + \frac{AF - D^2}{A} - \frac{(AE - BD)^2}{A(AC - B^2)};
                      \end{aligned}
                \]
          也就是，
          \[
          \begin{aligned}
            f(x, y) = \frac{(Ax + By + D)^2}{A} - \frac{((B^2 - AC)y + (BD - AE))^2}{A(B^2 - AC)} + \frac{\Delta}{AC - B^2}.
          \end{aligned}
          \]
          因为 \(\Delta = 0\)，故
          \[
          \begin{aligned}
            f(x, y) = \frac{(Ax + By + D)^2}{A} - \frac{((B^2 - AC)y + (BD - AE))^2}{A(B^2 - AC)}.
          \end{aligned}
          \]
          设复数 \(e\) 适合 \(e^2 = B^2 - AC\)。
          设 \(f = (BD-AE)/e\)。
          则
          \[
          \begin{aligned}
            f(x, y)
            = {} & \frac{(Ax + By + D)^2}{A} - \frac{(e^2 y + ef)^2}{Ae^2}                   \\
            = {} & \frac{(Ax + By + D)^2}{A} - \frac{(ey + f)^2}{A}                          \\
            = {} & \frac{1}{A}(Ax + By + D + ey + f)(Ax + By + D - ey - f)                   \\
            = {} & \left( 1x + \frac{B+e}{A}y + \frac{D+f}{A} \right) (Ax + (B-e)y + (D-f)).
          \end{aligned}
          \]

(4) \(C \neq 0\)。
    则
    \[
    \begin{aligned}
      f(x, y) = Cy^2 + 2Byx + Ax^2 + 2Ey + 2Dx + F.
    \end{aligned}
    \]
    考虑 \(2\) 元 \({\leqslant} 2\) 次式
    \[
    \begin{aligned}
      g(x, y) = Cx^2 + 2Bxy + Ay^2 + 2Ex + 2Dy + F.
    \end{aligned}
    \]
    注意，对任何复数对 \((z, w)\)，
    \[
    \begin{aligned}
      g(z, w) = f(w, z).
    \end{aligned}
    \]
    我们计算 \(g(x, y)\) 的判别式：
    \[
    \begin{aligned}
      \Delta'
      = {} &
       \det
      \begin{bmatrix}
        C & B & E \\
        B & A & D \\
        E & D & F \\
      \end{bmatrix}                     \\
      = {} & CAF + 2BDE - (CD^2 + AE^2 + FB^2) \\
      = {} & ACF + 2BED - (AE^2 + CD^2 + FB^2) \\
      = {} & \Delta.
    \end{aligned}
    \]
    从而，由 (3)，
    存在复数
    \(a_1\)、\(a_2\)、\(a_3\)、\(a_4\)、\(a_5\)、\(a_6\)
    使
    \[
    \begin{aligned}
      g(x, y) = (a_1 x + a_2 y + a_3) (a_4 x + a_5 y + a_6).
    \end{aligned}
    \]
    所以
    \[
    f(x, y) = g(y, x) = (a_2 x + a_1 y + a_3) (a_5 x + a_4 y + a_6).
    \]
:::

综上，我们得到本章的重要的定理：

::: theorem
设 \(f(x, y) = Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F\)。
若 \(f(x, y)\) 的判别式为 \(0\)，
则我们可写它为 \(2\) 个（复系数的）
\(2\) 元 \({\leqslant} 1\) 次式的积；
反过来，
若 \(f(x, y)\) 是 \(2\) 个（复系数的）
\(2\) 元 \({\leqslant} 1\) 次式的积，
则它的判别式为 \(0\)。
:::

我们看 \(2\) 个例。

::: example
设
\[
\begin{aligned}
  b(x, y) = 2x^2 + 2xy + y^2 + 2x + 2y + 2.
\end{aligned}
\]
\(A\)、\(B\)、\(C\)、\(D\)、\(E\)、\(F\)
分别是
\(2\)、\(1\)、\(1\)、\(1\)、\(1\)、\(2\)。
由此可知，\(b(x, y)\) 的判别式
\[
\begin{aligned}
  \Delta
  =  \det
  \begin{bmatrix}
    2 & 1 & 1 \\
    1 & 1 & 1 \\
    1 & 1 & 2 \\
  \end{bmatrix}
  = 1.
\end{aligned}
\]
所以，我们无法写它为 \(2\) 个
（关于 \(x\)、\(y\) 的）
\(2\) 元 \({\leqslant} 1\) 次式的积。
:::

::: example
设 \(f(x, y) = x^2 + y^2\)。
不难算出，\(f(x, y)\) 的判别式是 \(0\)。
所以，\(f(x, y)\) 可被写为
\(2\) 个（关于 \(x\)、\(y\) 的）
\(2\) 元 \({\leqslant} 1\) 次式的积。

不过，这 \(2\) 个 \({\leqslant} 1\) 次式的系数不能全为实数。

反设存在实数
\(a_1\)、\(a_2\)、\(a_3\)、\(a_4\)、\(a_5\)、\(a_6\) 使
\[
\begin{aligned}
  x^2 + y^2 = (a_1 x + a_2 y + a_3) (a_4 x + a_5 y + a_6).
\end{aligned}
\]
代 \(x\)、\(y\) 以 \(0\)、\(0\)，知 \(0 = a_3 a_6\)。
因为乘法是可交换的，故无妨设 \(a_3 = 0\)。
代 \(x\)、\(y\) 以 \(1\)、\(0\)，知
\(1 = a_1 (a_4 + a_6)\)；
代 \(x\)、\(y\) 以 \(-1\)、\(0\)，知
\(1 = -a_1 (-a_4 + a_6) = a_1 (a_4 - a_6)\)。
由此可知 \(a_4 + a_6 = a_4 - a_6\)，
故 \(a_6 = 0\)。
从而 \(a_1 a_4 = 1\)。
故 \(a_4 = 1/a_1\)。
代 \(x\)、\(y\) 以 \(0\)、\(1\)，知 \(a_2 a_5 = 1\)。
故 \(a_5 = 1/a_2\)。
从而
\[
\begin{aligned}
  x^2 + y^2 = (a_1 x + a_2 y)
  \left( \frac{x}{a_1} + \frac{y}{a_2} \right).
\end{aligned}
\]
代 \(x\)、\(y\) 以 \(1\)、\(1\)，得
\[
\begin{aligned}
  2 = (a_1 + a_2) \cdot \frac{a_1 + a_2}{a_1 a_2},
\end{aligned}
\]
即
\[
\begin{aligned}
  a_1^2 + a_2^2 = 0.
\end{aligned}
\]
所以
\[
\begin{aligned}
  0
  = (a_1^2 + a_2^2) \cdot a_5^2
  = (a_1 a_5)^2 + 1.
\end{aligned}
\]
因为 \(a_1\)、\(a_5\) 是实数，故 \(a_1 a_5\) 也是实数。
不过，我们知道，
任何实数的平方加 \(1\) 不可能是 \(0\)。
这是矛盾。

不过，
\(x^2 + y^2
    = x^2 - (\mathrm{i} y)^2
  = (x + \mathrm{i} y) (x - \mathrm{i} y)\)。
:::
