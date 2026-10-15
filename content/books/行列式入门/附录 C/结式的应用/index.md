---
title: 结式的应用
notices:
  - name: 问题
    items:
      - '计算 $f(x) = a_0 x^n + a_{n-1} x + a_n$ 的判别式的例子中，$[U]_{i,j}$ 的分情形表达式似乎有误：$a_{n-1}$、$a_n$ 两种情形中 $j$ 的下界似乎应为 $1$，最后一个 $a_{n-1}$ 的情形似乎应为 $i = j = 2n-1$（对照 $n = 5$ 时的 $U$）。'
---

本节，我们看结式的应用。

为方便，我们仍作如下假定。

::: remark* (假定) {@standing-assumption-of-resultant-banana}
设 \(n\)、\(m\) 是非负整数，
且 \(m + n \geqslant 1\)。
设
\[
\begin{aligned}
  f(x) &
  = \sum_{k = 0}^{n} {a_k x^{n-k}}
  = a_0 x^n + a_1 x^{n-1} + \dots + a_n,
  \\
  g(x) &
  = \sum_{k = 0}^{m} {b_k x^{m-k}}
  = b_0 x^m + b_1 x^{m-1} + \dots + b_m.
\end{aligned}
\]
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)；
若 \(k < 0\) 或 \(k > m\)，则 \(b_k = 0\)。
:::

设 @standing-assumption-of-resultant-banana 成立。
回想，\(f\)、\(g\) 的 Sylvester 阵是 \(m + n\) 级阵
\(S(f, g; n, m)\)，
其中，
\[
\begin{aligned}
  [S(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},     & j \leqslant m; \\
    b_{i-(j-m)}, & j > m.
  \end{cases}
\end{aligned}
\]
\(f\)、\(g\) 的结式是
\(f\)、\(g\) 的 Sylvester 阵的行列式
\(\det {(S(f, g; n, m))}\)。

在本节，结式的以下的性质是重要的
（设 @standing-assumption-of-resultant-banana 成立）：

(1) 若存在数 \(c\)，使 \(f(c) = 0 = g(c)\)，
    则 \(\det {(S(f, g; n, m))} = 0\)。

(2) 若 \(a_0 = 0 = b_0\)，
    则 \(\det {(S(f, g; n, m))} = 0\)。

(3) \(\det {(S(g, f; m, n))} = (-1)^{m n} \det {(S(f, g; n, m))}\)。

(4) 若存在数 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\)，
    使对任何数 \(x\)，
    \(f(x) = a_0 (x - x_1) \dots (x - x_n)\)，
    则 \(\det {(S(f, g; n, m))} = a_0^m g(x_1) \dots g(x_n)\)；
    若存在数 \(y_1\)、\(y_2\)、\(\dots\)、\(y_m\)，
    使对任何数 \(x\)，
    \(g(x) = b_0 (x - y_1) \dots (x - y_m)\)，
    则 \(\det {(S(f, g; n, m))} = (-1)^{m n} b_0^n f(y_1) \dots f(y_m)\)。

(5) 若 \(\det {(S(f, g; n, m))} = 0\)，
    且 \(a_0\)、\(b_0\) 的一个非零
    （它们当然可以都非零），
    则存在数 \(c\)，使 \(f(c) = 0 = g(c)\)。

若数 \(c\) 适合 \(f(c) = 0\)，
我们说，\(c\)（或 \(x = c\)）是 \(f(x) = 0\) 的一个解。
为方便，我们也说，\(c\) 是 \(f\)（或 \(f(x)\)）的一个**根**。
于是，通俗地，我们可以说，
\(2\) 个整式 \(f\)、\(g\) 有公根
（也就是，存在数 \(c\)，使 \(c\) 既是 \(f\) 的根，
且 \(c\) 也是 \(g\) 的根），
相当于它们的结式是 \(0\)
（若 \(a_0\) 或 \(b_0\) 非零）。

::: example
解方程组

```math {@eq:soe1}
\left\{
\begin{aligned}
    11x^2 - 2xy - 44y^2 - x + 26y - 32  & = 0, \\
    4x^2 - 18xy + 49y^2 - 4x + 9y - 118 & = 0.
\end{aligned}
\right.
```

设 \(x = a\)，\(y = b\) 是
方程组 @eq:soe1 的一个解。
则
\[
\begin{aligned}
  &
  \begin{aligned}
    0
    = {} & 11a^2 - 2ab - 44b^2 - a + 26b - 32             \\
    = {} & 11 a^2 + (-2 b - 1) a + (-44 b^2 + 26 b - 32),
  \end{aligned}
  \\
  &
  \begin{aligned}
    0
    = {} & 4a^2 - 18ab + 49b^2 - 4a + 9b - 118           \\
    = {} & 4 a^2 + (-18 b - 4) a + (49 b^2 + 9 b - 118).
  \end{aligned}
\end{aligned}
\]
我们记
\[
\begin{aligned}
  f(x; y) & = 11 x^2 + (-2 y - 1) x + (-44 y^2 + 26 y - 32), \\
  g(x; y) & = 4 x^2 + (-18 y - 4) x + (49 y^2 + 9 y - 118).
\end{aligned}
\]
则 \(f(a; b) = 0 = g(a; b)\)。
故（关于 \(x\) 的）整式
\(f(x; b)\)、\(g(x; b)\) 的结式是 \(0\)，
即
\[
\begin{aligned}
  \begin{bmatrix}
    11            & 0             & 4            & 0            \\
    -2b-1         & 11            & -18b-4       & 4            \\
    -44b^2+26b-32 & -2b-1         & 49b^2+9b-118 & -18b-4       \\
    0             & -44b^2+26b-32 & 0            & 49b^2+9b-118 \\
  \end{bmatrix}
\end{aligned}
\]
的行列式是 \(0\)。
可以算出，此阵的行列式是
\(342\,125\, (b^2 - 1)\, (b^2 - 4)\)。
于是，结式等于 \(0\)，
相当于 \(b = 1\) 或 \(b = -1\)
或 \(b = 2\) 或 \(b = -2\)。
所以，若 \(x = a\)，\(y = b\) 是
方程组 @eq:soe1 的一个解，
则 \(b = 1\) 或 \(b = -1\)
或 \(b = 2\) 或 \(b = -2\)。

另一方面，
注意，\(f(x; b)\) 的 \(x^2\) 项系数 \(11 \neq 0\)。
所以，若结式等于 \(0\)
（也就是，\(b = 1\) 或 \(b = -1\)
或 \(b = 2\) 或 \(b = -2\)），
则存在数 \(a\)，使 \(f(a; b) = 0 = g(a; b)\)。
则 \(x = a\)，\(y = b\)
是方程组 @eq:soe1 的解。
为求 \(a\)，我们代方程组 @eq:soe1 的
\(b\) 以 \(1\)，得

```math {@eq:soe2}
\left\{
\begin{aligned}
    11a^2 - 2a - 44 - a + 26 - 32  & = 0, \\
    4a^2 - 18a + 49 - 4a + 9 - 118 & = 0;
\end{aligned}
\right.
```

我们代 \(b\) 以 \(-1\)，得

```math {@eq:soe3}
\left\{
\begin{aligned}
    11a^2 + 2a - 44 - a - 26 - 32  & = 0, \\
    4a^2 + 18a + 49 - 4a - 9 - 118 & = 0;
\end{aligned}
\right.
```

我们代 \(b\) 以 \(2\)，得

```math {@eq:soe4}
\left\{
\begin{aligned}
    11a^2 - 4a - 176 - a + 52 - 32   & = 0, \\
    4a^2 - 36a + 196 - 4a + 18 - 118 & = 0;
\end{aligned}
\right.
```

我们代 \(b\) 以 \(-2\)，得

```math {@eq:soe5}
\left\{
\begin{aligned}
    11a^2 + 4a - 176 - a - 52 - 32   & = 0, \\
    4a^2 + 36a + 196 - 4a - 18 - 118 & = 0.
\end{aligned}
\right.
```

方程组 @eq:soe2 的解是 \(a = -2\)；
方程组 @eq:soe3 的解是 \(a = 3\)；
方程组 @eq:soe4 的解是 \(a = 4\)；
方程组 @eq:soe5 的解是 \(a = -5\)。
于是，方程组 @eq:soe1 的解应是：
\[
\begin{alignedat}{7}
  {}            & x & {} = {} & {-2}, & \quad & y & {} = {} & 1; \\
  \text{或} \quad & x & {} = {} & 3,    & \quad & y & {} = {} & {-1};              \\
  \text{或} \quad & x & {} = {} & 4,    & \quad & y & {} = {} & 2;                 \\
  \text{或} \quad & x & {} = {} & {-5}, & \quad & y & {} = {} & {-2}.
\end{alignedat}
\]
最后，不难验证，这些确实都是解。
:::

一般地，我们能以结式解 \(2\) 元整式方程组

```math {@eq:soe6}
\left\{
\begin{aligned}
    f(x; y) & = 0, \\
    g(x; y) & = 0.
\end{aligned}
\right.
```

的解。
设我们已按 \(x\) 的次方从大到小地排 \(2\) 元整式的项，即
\[
\begin{aligned}
  f(x; y) & = a_0 (y) x^n + a_1 (y) x^{n-1} + \dots + a_n (y), \\
  g(x; y) & = b_0 (y) x^m + b_1 (y) x^{m-1} + \dots + b_m (y),
\end{aligned}
\]
其中，\(m\)、\(n\) 是非负整数，
\(m + n \geqslant 1\)
（注意，若 \(m + n < 1\)，
则 \(m = n = 0\)；
也就是，\(f(x; y)\) 与 \(g(x; y)\) 不含 \(x\)；
由此，方程组 @eq:soe6
其实是关于 \(y\) 的 \(1\) 元整式方程组），
且 \(a_0 (y)\)、\(a_1 (y)\)、\(\dots\)、\(a_n (y)\)、
\(b_0 (y)\)、\(b_1 (y)\)、\(\dots\)、\(b_m (y)\)
是关于 \(y\) 的整式。
（注意，我们可以要求 \(a_0 (y)\) 与 \(b_0 (y)\)
不是 \(0\) 整式。）
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则整式 \(a_k (y) = 0\)；
若 \(k < 0\) 或 \(k > m\)，则整式 \(b_k (y) = 0\)。
由此，我们写出 \(f\)、\(g\) 的 Sylvester 阵
\(S(f, g; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j} (y),     & j \leqslant m; \\
    b_{i-(j-m)} (y), & j > m.
  \end{cases}
\end{aligned}
\]
则 \(f\)、\(g\) 的结式 \(\det {(S(f, g; n, m))}\)
是关于 \(y\) 的整式。
那么，若 \((x, y) = (x_0, y_0)\)
是方程组 @eq:soe6 的解，
则 \(y_0\) 是 \(\det {(S(f, g; n, m))} = 0\) 的解；
也就是，若 \(y_0\) 不是 \(\det {(S(f, g; n, m))} = 0\) 的解，
则对任何数 \(c\)，
\(f(c; y_0) \neq 0\)，或 \(g(c; y_0) \neq 0\)。
所以，若 \(\det {(S(f, g; n, m))} = 0\) 无解，
则方程组 @eq:soe6 也无解。
否则，设 \(y_1\)、\(\dots\)、\(y_r\) 是
\(\det {(S(f, g; n, m))} = 0\) 的解。
代方程组 @eq:soe6 的 \(y\) 以 \(y_i\)
（\(i = 1\)、\(\dots\)、\(r\)），
得关于 \(x\) 的 \(1\) 元整式方程组
\[
\left\{
\begin{aligned}
  f(x; y_i) & = 0, \\
  g(x; y_i) & = 0.
\end{aligned}
\right.
\]
解它，得解 \(x_{i,1}\)、\(\dots\)、\(x_{i,k_i}\)
（注意，
若 \(a_0 (y_i) \neq 0\) 或 \(b_0 (y_i) \neq 0\)，
则此关于 \(x\) 的 \(1\) 元整式方程组一定有解；
若 \(a_0 (y_i) = 0 = b_0 (y_i)\)，
则它可能无解。）
则 \((x, y) = (x_{i,1}, y_i)\)、\(\dots\)、\((x_{i,k_i}, y_i)\)
是方程组 @eq:soe6 的解，
\(i = 1\)、\(\dots\)、\(r\)。

::: example
设数 \(x\)、\(y\)、\(t\) 适合

```math {@eq:soe7}
x = \frac{1 + 8t - t^2}{1 + t^2},
\quad
y = \frac{4t}{1 + t^2}.
```

我们可消去 \(t\)，以得到 \(x\) 与 \(y\) 的关系：
若 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7，
则 \((x, y) = (x_0, y_0)\) 适合某关系（不含 \(t\)），
且反过来，
若 \((x, y) = (x_0, y_0)\) 适合这个不含 \(t\) 的关系，
则存在数 \(t_0\)，
使 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7。

设 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7。
去分母，得
\[
\begin{aligned}
  (1 + t_0^2) x_0 - (1 + 8t_0 - t_0^2) & = 0, \\
  (1 + t_0^2) y_0 - 4t_0               & = 0,
\end{aligned}
\]
即
\[
\begin{aligned}
  (x_0 + 1) t_0^2 + (-8) t_0 + (x_0 - 1) & = 0, \\
  y_0 t_0^2 + (-4) t_0 + y_0             & = 0.
\end{aligned}
\]
记
\[
\begin{aligned}
  f(t; x) & = (x + 1) t^2 + (-8) t + (x - 1), \\
  g(t; y) & = y t^2 + (-4) t + y.
\end{aligned}
\]
则 \(f(t_0; x_0)\) 与 \(g(t_0; y_0)\)
等于 \(0\)。
反过来，
若 \((x, y, t) = (x_0, y_0, t_0)\) 适合
\(f(t_0; x_0) = 0 = g(t_0; y_0)\)，
则 \(t_0^2 + 1 \neq 0\)。
（反证法：若 \(y_0 t_0^2 - 4 t_0 + y_0 = 0\)，
且 \(t_0^2 + 1 = 0\)，
则 \(4 t_0 = 0\)。
则 \(t_0 = 0\)。
可是，\(0^2 + 1 \neq 0\)。）
则 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7。

所以，
若 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7，
则 \(t_0\) 是（关于 \(t\) 的）整式
\(f(t; x_0)\) 与 \(g(t; y_0)\)
的公根。
则 \(f(t; x_0)\) 与 \(g(t; y_0)\)
的结式是 \(0\)，即
\[
\begin{aligned}
  0 =
  \det {
    \begin{bmatrix}
      x_0+1 & 0     & y_0  & 0   \\
      -8    & x_0+1 & -4   & y_0 \\
      x_0-1 & -8    & y_0  & -4  \\
      0     & x_0-1 & 0    & y_0 \\
    \end{bmatrix}
  }
  = 4 (4 x_0^2 - 16 x_0 y_0 + 17 y_0^2 - 4).
\end{aligned}
\]
记
\[
\begin{aligned}
  R(x, y) = 4 (4 x^2 - 16 x y + 17 y^2 - 4).
\end{aligned}
\]
则 \(R(x, y) = 0\)。
反过来，
若 \((x, y) = (x_0, y_0)\) 适合 \(R(x, y) = 0\)，
则 \(x_0 + 1 = 0 = y_0\)，
或当 \(x_0 + 1 \neq 0\) 或 \(y_0 \neq 0\) 时，
存在数 \(t_0\)，
使 \(f(t_0; x_0) = 0 = g(t_0; y_0)\)。
所以，
若 \((x, y) = (x_0, y_0)\) 适合 \(R(x_0, y_0) = 0\)，
则 \((x_0, y_0) = (-1, 0)\)，
或当 \((x_0, y_0) \neq (-1, 0)\) 时，
存在数 \(t_0\)，
使 \((x, y, t) = (x_0, y_0, t_0)\) 适合式 @eq:soe7。
我们可以验证，不存在数 \(t_0\)，
使 \((x, y, t) = (-1, 0, t_0)\) 适合式 @eq:soe7。
（反证法：若 \(0 = 4t_0/(1 + t_0^2)\)，
则 \(t_0 = 0\)。
可是，\(-1 \neq (1 + 8 \cdot 0 - 0^2)
  / (1 + 0^2)\)。）

综上，\(x\)、\(y\) 的关系是
（我们以消去律消去 \(4\)）
\[
4 x^2 - 16 x y + 17 y^2 - 4 = 0,
\quad
(x, y) \neq (-1, 0).
\]
:::

一般地，我们能以结式从 \(3\) 元 \(x\)、\(y\)、\(t\)
适合的关系

```math {@eq:soe8}
x = \frac{q_1 (t)}{p_1 (t)},
\quad
y = \frac{q_2 (t)}{p_2 (t)},
```

其中，\(q_1\)、\(q_2\)、\(p_1\)、\(p_2\)
是关于 \(t\) 的整式，
且 \(p_1\)、\(p_2\) 不是 \(0\) 整式（分母不为 \(0\)），
且 \(q_1\)、\(q_2\) 不是 \(0\) 整式
（若，比如，\(q_1 = 0\)，则 \(x = 0\)；
这是平凡的），
消去 \(t\)，以得到
\(2\) 元 \(x\) 与 \(y\) 适合的关系。
注意，我们可以设 \(p_1\)、\(q_1\) 没有公根，
且 \(p_2\)、\(q_2\) 没有公根
（因为，若，比如，
\(p_1 (c) = 0 = q_1 (c)\)，
则存在非零的整式 \(r_{1,1}\)、\(s_{1,1}\)，
使 \(p_1 (x) = (x - c) r_{1,1} (x)\)，
\(q_1 (x) = (x - c) s_{1,1} (x)\)，
且 \(r_{1,1}\) 的次低于 \(p_1\) 的次，
且 \(s_{1,1}\) 的次低于 \(q_1\) 的次；
则 \(q_1 (t) / p_1 (t) = r_{1,1} (t) / s_{1,1} (t)\)；
若 \(r_{1,1}\)、\(s_{1,1}\) 没有公根，则那是好的；
若 \(r_{1,1}\)、\(s_{1,1}\) 有公根，
则类似地，存在非零的整式 \(r_{1,2}\)、\(s_{1,2}\)，
使 \(r_{1,2}\) 的次低于 \(r_{1,1}\) 的次，
且 \(s_{1,2}\) 的次低于 \(s_{1,1}\) 的次，
且 \(q_1 (t) / p_1 (t)
  = r_{1,1} (t) / s_{1,1} (t)
= r_{1,2} (t) / s_{1,2} (t)\)；
非零的整式的次不能无限地变少，
所以这个过程能结束；
最后，注意，即使这改变了 \(t\) 的允许的取值，
我们可另外讨论此事）。
去分母，且移项，得

```math {@eq:soe9}
x p_1 (t) - q_1 (t) = 0,
\quad
y p_2 (t) - q_2 (t) = 0.
```

注意，若 \((x, y, t) = (x_0, y_0, t_0)\)
适合式 @eq:soe8，
则去分母，且移项，我们知道
\((x, y, t) = (x_0, y_0, t_0)\)
也适合式 @eq:soe9；
反过来，若 \((x, y, t) = (x_0, y_0, t_0)\)
适合式 @eq:soe9，
则注意，\(p_1 (t_0) \neq 0\)，且 \(p_2 (t_0) \neq 0\)
（因为，若，比如，\(p_1 (t_0) = 0\)，
则 \(q_1 (t_0) = x_0 p_1 (t_0) = 0\)；
不过，我们已设，\(p_1\)、\(q_1\) 没有公根，
故这不是可能的）。
则作除法，且移项，我们知道，
\((x, y, t) = (x_0, y_0, t_0)\)
也适合式 @eq:soe8。
然后，设
\[
\begin{aligned}
  f(t; x) & = x p_1 (t) - q_1 (t)
  = a_0 (x) t^n + a_1 (x) t^{n-1} + \dots + a_n (x),
  \\
  g(t; y) & = y p_2 (t) - q_2 (t)
  = b_0 (y) t^m + b_1 (y) t^{m-1} + \dots + b_m (y),
\end{aligned}
\]
其中，\(m\)、\(n\) 是非负整数，
\(m + n \geqslant 1\)
（注意，若 \(m + n < 1\)，
则 \(m = n = 0\)；
也就是，\(f(t; x)\) 与 \(g(t; y)\) 不含 \(t\)；
这是平凡的），
\(a_0 (x)\)、\(a_1 (x)\)、\(\dots\)、\(a_n (x)\)
是关于 \(x\) 的整式，
且 \(b_0 (y)\)、\(b_1 (y)\)、\(\dots\)、\(b_m (y)\)
是关于 \(y\) 的整式。
（注意，我们可以要求 \(a_0 (x)\) 与 \(b_0 (y)\)
不是 \(0\) 整式。）
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则整式 \(a_k (x) = 0\)；
若 \(k < 0\) 或 \(k > m\)，则整式 \(b_k (y) = 0\)。
由此，我们写出 \(f\)、\(g\) 的 Sylvester 阵
\(S(f, g; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j} (x),     & j \leqslant m; \\
    b_{i-(j-m)} (y), & j > m.
  \end{cases}
\end{aligned}
\]
则 \(f\)、\(g\) 的结式 \(\det {(S(f, g; n, m))}\)
是关于 \(x\)、\(y\) 的整式。
那么，若 \((x, y, t) = (x_0, y_0, t_0)\)
适合式 @eq:soe8，
则它适合式 @eq:soe9，
故 \((x, y) = (x_0, y_0)\)
适合 \(\det {(S(f, g; n, m))} = 0\)；
也就是，若 \((x, y) = (x_0, y_0)\) 适合
\(\det {(S(f, g; n, m))} \neq 0\)，
则对任何数 \(t_0\)，
\((x, y, t) = (x_0, y_0, t_0)\)
不适合式 @eq:soe8。
反过来，若 \((x, y) = (x_0, y_0)\) 适合
\(\det {(S(f, g; n, m))} = 0\)，
则 \(a_0 (x_0) = 0 = b_0 (y_0)\)，
或当 \(a_0 (x_0) \neq 0\) 或 \(b_0 (y_0) \neq 0\) 时，
存在数 \(t_0\)，使
\((x, y, t) = (x_0, y_0, t_0)\)
适合式 @eq:soe9，
故它适合式 @eq:soe8。
当然，对适合 \(a_0 (x_0) = 0 = b_0 (y_0)\) 的
\((x_0, y_0)\)，
我们可另外讨论，是否存在数 \(t_0\)，
使 \((x, y, t) = (x_0, y_0, t_0)\)
适合式 @eq:soe8。

::: example
设数 \(c\) 适合 \(c^2 + c = 1\)。
求 \(c^4 - c^2 + 2c + 1\)。

一个方法或许是先确定 \(c\)，
再由此求 \(c^2\)、\(c^4\)，
再求 \(c^4 - c^2 + 2c + 1\)。

这里，我们以结式解此事。
为方便，我们记
\(f(x) = 1 x^2 + 1 x - 1\)，
\(v(x) = x^4 - x^2 + 2x + 1\)。
则问题相当于，若 \(f(c) = 0\)，则 \(v(c)\) 是何。
我们记 \(v(c) = y\)，且记
\(g(x) = y - v(x)
  = -1 x^4 + 0 x^3 + 1 x^2 + (-2) x + (y - 1)\)。
则 \(f(c) = 0 = g(c)\)。
所以，\(f(x)\)、\(g(x)\) 的结式是 \(0\)，
即
\[
\begin{aligned}
  0 =
  \det {
    \begin{bmatrix}
      1  & 0  & 0  & 0  & -1  & 0   \\
      1  & 1  & 0  & 0  & 0   & -1  \\
      -1 & 1  & 1  & 0  & 1   & 0   \\
      0  & -1 & 1  & 1  & -2  & 1   \\
      0  & 0  & -1 & 1  & y-1 & -2  \\
      0  & 0  & 0  & -1 & 0   & y-1 \\
    \end{bmatrix}
  }
  = (y - 2)^2.
\end{aligned}
\]
故 \(v(c) = y = 2\)。
:::

一般地，我们能以结式求值。
设 \(n \geqslant 1\)，且 \(a_0 \neq 0\)。
设整式 \(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)。
设 \(u(x)\)、\(v(x)\) 是整式。
设数 \(c\) 适合 \(f(c) = 0\)，
且 \(u(c) \neq 0\)。
我们求 \(v(c) / u(c)\)。
为此，我们设 \(y = v(c) / u(c)\)，
并作整式
\(g(x) = y u(x) - v(x)
= b_0 (y) x^m + b_1 (y) x^{m-1} + \dots + b_m (y)\)。
则 \(g(c) = (v(c) / u(c)) u(c) - v(c) = 0\)。
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)；
若 \(k < 0\) 或 \(k > m\)，则整式 \(b_k (y) = 0\)。
由此，我们写出 \(f\)、\(g\) 的 Sylvester 阵
\(S(f, g; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, g; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},         & j \leqslant m; \\
    b_{i-(j-m)} (y), & j > m.
  \end{cases}
\end{aligned}
\]
则 \(f\)、\(g\) 的结式 \(\det {(S(f, g; n, m))}\)
是关于 \(y\) 的整式。
因为 \(f(c) = 0 = g(c)\)，
\(\det {(S(f, g; n, m))} = 0\)。
这是一个关于 \(y\) 的方程。
解它，得 \(y = v(c) / u(c)\) 的所有的可能的取值。

::: definition
设 \(f(x)\) 是整式。
设 \(c\) 是数。

(1) 若 \(f(c) = 0\)，则 \(c\) 是 \(f(x)\) 的一个**根**。

(2) 若 \(f(c) = 0\)，且 \(\mathrm{D} f(c) = 0\)，
    则 \(c\) 是 \(f(x)\) 的一个**重根**。
:::

::: example
设 \(a\)、\(b\)、\(c\) 是实数，且 \(a \neq 0\)。
设 \(f(x) = a x^2 + b x + c\)；
注意，这是 \(2\) 次函数。
回想，在中学，我们说，
若 \(1\) 元 \(2\) 次方程
\(a x^2 + b x + c = 0\) 的
判别式 \(b^2 - 4 a c\) 等于 \(0\)，
则 \(a x^2 + b x + c = 0\) 有“重根”
\[
\begin{aligned}
  x_1 = x_2 = -\frac{b}{2a}.
\end{aligned}
\]
那么，这跟我们定义的重根有何关系？
我们记 \(r = -b/(2a)\)。
则 \(b = -2a r\)，
且 \(c = b^2 / (4a) = a r^2\)。
则 \(f(x) = a x^2 - 2 a r x + a r^2
  = a (x^2 - 2 r x + r^2)\)。
首先，\(r\) 是 \(f(x)\) 的根：
\(f(r) = a (r^2 - 2 r r + r^2) = 0\)；
然后，\(\mathrm{D} f(x) = a (2 x - 2 r)\)，
故 \(\mathrm{D} f(r) = a (2 r - 2 r) = 0\)。
故，由定义，\(r\) 是 \(f(x)\) 的重根。
:::

::: example
每个数都是 \(0\) 整式的根。
注意，\(0\) 的 derivative 是 \(0\)。
于是，每个数都是 \(0\) 整式的重根。

设 \(f(x) = c\)（\(c \neq 0\)）是 \(0\) 次整式。
则 \(f(x)\) 没有根。
则 \(f(x)\) 没有重根。

设 \(g(x) = a x + b\)（\(a \neq 0\)）是 \(1\) 次整式。
则 \(-b/a\) 是 \(g(x)\) 的根，
因为 \(g(-b/a) = a (-b/a) + b = -b + b = 0\)。
不过，因为 \(\mathrm{D} g(x) = a \neq 0\)，
\(g(x)\) 没有重根。
:::

此定理或许解释了为何我们叫重根为“重”根——重根
真地重出现了。

::: theorem
设 \(f(x)\) 是整式。

(1) 若数 \(c\) 是 \(f(x)\) 的重根，
    则存在整式 \(s(x)\)，
    使 \(f(x) = (x - c)^2 s(x)\)。

(2) 若数 \(d\) 与整式 \(u(x)\) 适合，
    \(f(x) = (x - d)^2 u(x)\)，
    则 \(d\) 是 \(f(x)\) 的重根。
:::

::: proof
(1) 因为 \(c\) 是 \(f(x)\) 的重根，
    故 \(c\) 是 \(f(x)\) 的根。
    则存在整式 \(q(x)\)，使 \(f(x) = (x - c) q(x)\)。
    注意，\(0 = \mathrm{D} f(c) = q(c)\)。
    则存在整式 \(s(x)\)，使 \(q(x) = (x - c) s(x)\)。
    故 \(f(x) = (x - c)^2 s(x)\)。

(2) 记 \(v(x) = (x - d) u(x)\)。
    则 \(f(x) = (x - d) v(x)\)。
    则 \(f(d) = 0\)，
    且 \(\mathrm{D} f(d) = v(d) = 0\)。
    故 \(d\) 是 \(f(x)\) 的重根。
:::

我们讨论整式 \(f(x)\) 与它的 derivative \(\mathrm{D} f(x)\)
的 Sylvester 阵与结式。
设 \(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_{n-1} x + a_n\)。
则 \(\mathrm{D} f(x)
= n a_0 x^{n-1} + (n-1) a_1 x^{n-2} + \dots + a_{n-1}\)。
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)。
记 \(b_k = (n - k) a_k\)。
则 \(\mathrm{D} f(x)
= b_0 x^{n-1} + b_1 x^{n-2} + \dots + b_{n-1}\)，
且若 \(k < 0\) 或 \(k > n-1\)，则 \(b_k = 0\)。
注意，\((n - 1) + n \geqslant 1\)，相当于 \(n \geqslant 1\)。
所以，若 \(n \geqslant 1\)，我们能写出 \(f\)、\(\mathrm{D} f\)
的 Sylvester 阵 \(S(f, \mathrm{D} f; n, n-1)\)：
它是 \(2n-1\) 级阵，且
（注意，\(b_{i-(j-(n-1))} = (1 - (i-j)) a_{i-j+n-1}\)）

```math {@eq:soe10}
[S(f, \mathrm{D} f; n, n-1)]_{i,j} =
\begin{cases}
    a_{i-j},
    & j \leqslant n-1; \\
    (1 - (i - j)) a_{i-j+n-1},
    & j > n-1.
\end{cases}
```

注意，\([S(f, \mathrm{D} f; n, n-1)]_{1,1} = a_0\)，
\([S(f, \mathrm{D} f; n, n-1)]_{1,n} = n a_0\)，
且若 \(j \neq 1\) 且 \(j \neq n\)，
则 \([S(f, \mathrm{D} f; n, n-1)]_{1,j} = 0\)。
由此，我们考虑 \(2n-1\) 级阵 \(T(f; n)\)，其中，

```math {@eq:soe11}
[T(f; n)]_{i,j} =
\begin{cases}
    1,
    & \text{\(i = 1\), 且 \(j = 1\)}; \\
    n,
    & \text{\(i = 1\), 且 \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq 1\), 且 \(j \neq n\)}; \\
    a_{i-j},
    & \text{\(i \neq 1\), 且 \(j \leqslant n-1\)}; \\
    (1 - (i - j)) a_{i-j+n-1},
    & \text{\(i \neq 1\), 且 \(j \geqslant n\)}.
\end{cases}
```

不难看出，以 \(a_0\) 乘 \(T(f; n)\) 的行 \(1\)，
得 \(S(f, \mathrm{D} f; n, n-1)\)。
则
\[
\begin{aligned}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  = a_0 \det {(T(f; n))}.
\end{aligned}
\]
因为 \(T(f; n)\) 的元全是关于
\(a_0\)、\(a_1\)、\(\dots\)、\(a_n\) 的整式，
\(\det {(T(f; n))}\) 也是关于
\(a_0\)、\(a_1\)、\(\dots\)、\(a_n\) 的整式。
注意，\(a_0\) 是 \(f\) 的 \(x^n\) 项系数；
注意，我们可以设 \(a_0 \neq 0\)
（若 \(a_0 = 0\)，
且 \(f(x)\) 不是 \(0\) 整式，
我们可以写 \(f(x)\)
为 \(a'_0 x^m + a'_1 x^{m-1} + \dots + a'_m\)，
其中，\(m < n\)，且 \(a'_0 \neq 0\)；
若 \(f(x)\) 是 \(0\) 整式，则这是平凡的）。
于是，若 \(f\) 有重根，
则 \(f\) 与 \(\mathrm{D} f\) 有公根，
故 \(f\) 与 \(\mathrm{D} f\) 的结式为 \(0\)；
由此，\(\det {(T(f; n))} = 0\)。
另一方面，若 \(\det {(T(f; n))} = 0\)，
则 \(f\) 与 \(\mathrm{D} f\) 的结式为 \(0\)；
因为 \(a_0 \neq 0\)，
\(f\) 与 \(\mathrm{D} f\) 有公根；
由此，\(f\) 有重根。

设
\[
\begin{aligned}
  f(x) = a_0 (x - x_1) (x - x_2) \dots (x - x_n).
\end{aligned}
\]
我们具体地写 \(\det {(S(f, \mathrm{D} f; n, n-1))}\)
（与 \(\det {(T(f; n))}\)）。
由结式的性质 (4)，
\[
\begin{aligned}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  = a_0^{n-1}
  \mathrm{D} f(x_1) \mathrm{D} f(x_2)
  \dots \mathrm{D} f(x_n).
\end{aligned}
\]
回想，
\[
\begin{aligned}
  \mathrm{D} f(x_i) = q_i (x_i)
  = {} &
  a_0 \prod_{\substack{1 \leqslant k \leqslant n \\ k \neq i}} {(x_i - x_k)}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  = {} & a_0^{n-1} a_0^n
  \prod_{1 \leqslant i \leqslant n}
  \prod_{\substack{1 \leqslant k \leqslant n \\ k \neq i}} {(x_i - x_k)}
  \\
  = {} &
  a_0^{2n-1}
  \prod_{1 \leqslant k \neq i \leqslant n} {(x_i - x_k)}
  \\
  = {} &
  a_0^{2n-1}
  \prod_{1 \leqslant k < i \leqslant n} {(x_i - x_k)}
  \cdot \prod_{1 \leqslant i < k \leqslant n} {(x_i - x_k)}
  \\
  = {} &
  a_0^{2n-1}
  \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)}
  \cdot \prod_{1 \leqslant i < k \leqslant n} {((-1) (x_k - x_i))}
  \\
  = {} &
  a_0^{2n-1}
  \prod_{1 \leqslant i < k \leqslant n} {((-1) (x_k - x_i)^2)}
  \\
  = {} &
  a_0^{2n-1}
  \prod_{1 \leqslant i < k \leqslant n} {(-1)}
  \cdot \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)^2}
  \\
  = {} &
  a_0^{2n-1} (-1)^{(n-1)+(n-2)+\dots+1}
  \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)^2}
  \\
  = {} &
  a_0
  \cdot (-1)^{n(n-1)/2} a_0^{2n-2}
  \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)^2}.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(T(f; n))}
  = (-1)^{n(n-1)/2} a_0^{2n-2}
  \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)^2}.
\end{aligned}
\]

现在，我们可以定义整式的判别式。

::: definition
设 \(f(x)\) 是整式。

(1) 若 \(f(x)\) 是 \(0\) 整式，
    则我们定义 \(f(x)\) 的**判别式**为 \(0\)。

(2) 若 \(f(x)\) 是非零常数 \(c\)，
    则我们定义 \(f(x)\) 的**判别式**为 \(c^{-2}\)。

(3) 在别的情形，我们可写
    \(f(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n\)
    （\(a_0 \neq 0\)，且 \(n \geqslant 1\)）。
    我们定义 \(f(x)\) 的**判别式**为
    \((-1)^{n (n-1)/2} \det {(T(f; n))}\)，
    其中，\(T(f; n)\) 是 \(2n-1\) 级阵，
    且它的元由式 @eq:soe11 确定。
:::

由前面的计算与讨论，下面的结论是显然的。

::: theorem
设 \(n \geqslant 1\)，且 \(a_0 \neq 0\)。
设整式
\[
\begin{aligned}
  f(x)
  = a_0 x^n + a_1 x^{n-1} + \dots + a_n
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n).
\end{aligned}
\]

(1) \(f(x)\) 的判别式
    \[
    \begin{aligned}
      (-1)^{n (n-1)/2} \det {(T(f; n))}
      = a_0^{2n-2}
      \prod_{1 \leqslant i < k \leqslant n} {(x_k - x_i)^2},
    \end{aligned}
    \]
    其中，\(T(f; n)\) 是 \(2n-1\) 级阵，
    且它的元由式 @eq:soe11 确定。

\(f(x)\) 的判别式
是关于 \(a_0\)、\(a_1\)、\(\dots\)、\(a_n\) 的整式。

由式 @eq:soe10 确定
\(f\) 与 \(f\) 的 derivative \(\mathrm{D} f\)
的（\(2n-1\) 级）Sylvester 阵
\(S(f, \mathrm{D} f; n, n-1)\)。
则 \(f\)、\(\mathrm{D} f\) 的结式
\[
\begin{aligned}
  \det {(S(f, \mathrm{D} f; n, n-1))}
  = (-1)^{n (n-1)/2} a_0
  \cdot (-1)^{n (n-1)/2} \det {(T(f; n))}.
\end{aligned}
\]

(2) 若 \(f(x)\) 有重根，
    则 \(f(x)\) 的判别式为 \(0\)；
    反过来，若 \(f(x)\) 的判别式为 \(0\)，
    则 \(f(x)\) 有重根。

(3) 若 \(a_0\) 是实数，
    且 \(x_1\)、\(x_2\)、\(\dots\)、\(x_n\) 是实数，
    则 \(f(x)\) 的判别式是非负数。
:::

::: example
设 \(a\)、\(b\)、\(c\) 是实数，且 \(a \neq 0\)。
设 \(f(x) = a x^2 + b x + c\)；
注意，这是 \(2\) 次函数。
回想，在中学，我们说，
\(1\) 元 \(2\) 次方程
\(a x^2 + b x + c = 0\) 的
“判别式”是 \(b^2 - 4 a c\)。
那么，这跟我们定义的判别式有何关系？
为此，我们写出
\[
\begin{aligned}
  T(f; 2) =
  \begin{bmatrix}
    1 & 2 & 0   \\
    b & b & 2 a \\
    c & 0 & b   \\
  \end{bmatrix}.
\end{aligned}
\]
则 \(f(x)\) 的判别式
\[
\begin{aligned}
  (-1)^{2 (2-1)/2} \det {
    \begin{bmatrix}
      1 & 2 & 0   \\
      b & b & 2 a \\
      c & 0 & b   \\
    \end{bmatrix}
  }
  = -(1 b^2 - 2 (b^2 - 2ac) + 0)
  = b^2 - 4ac.
\end{aligned}
\]
则 \(2\) 个判别式是相同的。
:::

::: example
设 \(n \geqslant 2\)。
设 \(a_0 \neq 0\)。
设 \(f(x) = a_0 x^n + a_{n-1} x + a_n\)。
我们计算 \(f(x)\) 的判别式。

为方便，我们约定，
若 \(k \neq 0\)、\(n-1\)、\(n\)，
则 \(a_k = 0\)。
回想，\(2n-1\) 级阵 \(T(f; n)\) 的元
\[
\begin{aligned}
  [T(f; n)]_{i,j} =
  \begin{cases}
    1,
    & \text{\(i = 1\), 且 \(j = 1\)}; \\
    n,
    & \text{\(i = 1\), 且 \(j = n\)}; \\
    0,
    & \text{\(i = 1\), \(j \neq 1\), 且 \(j \neq n\)}; \\
    a_{i-j},
    & \text{\(i \neq 1\), 且 \(j \leqslant n-1\)}; \\
    (1 - (i - j)) a_{i-j+n-1},
    & \text{\(i \neq 1\), 且 \(j \geqslant n\)}.
  \end{cases}
\end{aligned}
\]
通俗地，比如，当 \(n = 5\) 时，
\[
\begin{aligned}
  T(f; 5) =
  \begin{bmatrix}
    1   & 0   & 0   & 0   & 5   & 0     & 0     & 0     & 0     \\
    0   & a_0 & 0   & 0   & 0   & 5 a_0 & 0     & 0     & 0     \\
    0   & 0   & a_0 & 0   & 0   & 0     & 5 a_0 & 0     & 0     \\
    0   & 0   & 0   & a_0 & 0   & 0     & 0     & 5 a_0 & 0     \\
    a_4 & 0   & 0   & 0   & a_4 & 0     & 0     & 0     & 5 a_0 \\
    a_5 & a_4 & 0   & 0   & 0   & a_4   & 0     & 0     & 0     \\
    0   & a_5 & a_4 & 0   & 0   & 0     & a_4   & 0     & 0     \\
    0   & 0   & a_5 & a_4 & 0   & 0     & 0     & a_4   & 0     \\
    0   & 0   & 0   & a_5 & 0   & 0     & 0     & 0     & a_4   \\
  \end{bmatrix}.
\end{aligned}
\]
计算判别式前，我们考虑，\(T(f; n)\) 的何元一定是 \(0\)。
若 \(i = 1\)，则当 \(j \neq 1\)，\(n\) 时，
\([T(f; n)]_{i,j} = 0\)。
若 \(i > 1\)，且 \(j \leqslant n - 1\)，
则当 \(i - j \neq 0\)、\(n-1\)、\(n\) 时，
\([T(f; n)]_{i,j} = 0\)，
即当 \(j \leqslant n - 1\)，
且 \(i \neq j\)、\(j + n - 1\)、\(j + n\) 时，
\([T(f; n)]_{i,j} = 0\)。
若 \(i > 1\)，且 \(j \geqslant n\)，
则当 \(i - j = 1\)，
或当 \(i - j + n - 1 \neq 0\)、\(n-1\)、\(n\) 时，
\([T(f; n)]_{i,j} = 0\)，
即当 \(j \geqslant n\)，
且 \(i \neq j - n + 1\)，\(j\) 时，
\([T(f; n)]_{i,j} = 0\)。
综上，
若 \(j \leqslant n-1\)，
则当 \(i \neq j\)、\(j+n-1\)、\(j+n\) 时，
\([T(f; n)]_{i,j} = 0\)；
若 \(j \geqslant n\)，
则当 \(i \neq j-n+1\)，\(j\) 时，
\([T(f; n)]_{i,j} = 0\)。

注意，若 \(i \leqslant n-1\)，且 \(j \leqslant n-1\)，
则 \([T(f; n)]_{i,j+n-1} = n [T(f; n)]_{i,j}\)。
注意，\(j + n > j + n - 1 \geqslant n > i\)，
故若 \(i \neq j\)，则 \([T(f; n)]_{i,j} = 0\)；
此时，\(j + n - 1 \geqslant n\)，
且 \(i \neq (j + n - 1) - n + 1\)，
即 \([T(f; n)]_{i,j+n-1} = 0\)。
若 \(i = j = 1\)，
则 \([T(f; n)]_{i,j} = 1\)，
且 \([T(f; n)]_{i,j+n-1} = n\)；
若 \(1 < i = j \leqslant n - 1\)，
则 \([T(f; n)]_{i,j} = a_0\)，
且 \([T(f; n)]_{i,j+n-1} = n a_0\)。

对 \(T(f; n)\)，
我们加列 \(c\) 的 \(-n\) 倍于列 \(c+n-1\)，
\(c = 1\)、\(\dots\)、\(n-1\)，
得阵 \(U\)。
则 \(U\) 的前 \(n-1\) 列与列 \(2n-1\)
分别是 \(T(f; n)\) 的前 \(n-1\) 列与列 \(2n-1\)，
且若 \(n \leqslant j \leqslant 2n-2\)，
则当 \(i \leqslant n - 1\) 时，\([U]_{i,j} = 0\)，
且当 \(i = j\) 时，
\([U]_{i,j} \allowbreak
    = [T(f; n)]_{i,j+n-1} - n [T(f; n)]_{i,j}
  = (1 - n) a_{n-1}\)，
且当 \(i = j + 1\) 时，
\([U]_{i,j} \allowbreak
    = [T(f; n)]_{i,j+n-1} - n [T(f; n)]_{i,j}
  = -n a_n\)，
且当 \(n - 1 < i < j\) 或 \(i > j + 1\) 时，
\([U]_{i,j} = 0\)。
综上，
\[
\begin{aligned}
  [U]_{i,j} =
  \begin{cases}
    1,             & i = j = 1;                           \\
    a_0,           & 2 \leqslant i = j \leqslant n - 1;             \\
    a_{n-1},       & 2 \leqslant i - (n - 1) = j \leqslant n - 1;   \\
    a_n,           & 2 \leqslant i - n = j \leqslant n - 1;         \\
    (1-n) a_{n-1}, & n \leqslant i = j \leqslant 2n - 2;            \\
    -n a_n,        & n \leqslant i - 1 = j \leqslant 2n - 2;        \\
    n a_0,         & \text{\(i = n\), 且 \(j = 2n - 1\)}; \\
    a_{n-1},       & i = j = n;                           \\
    0,             & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
通俗地，比如，当 \(n = 5\) 时，
\[
\begin{aligned}
  U =
  \begin{bmatrix}
    1   & 0   & 0   & 0   & 0     & 0     & 0     & 0     & 0    \\
    0   & a_0 & 0   & 0   & 0     & 0     & 0     & 0     & 0    \\
    0   & 0   & a_0 & 0   & 0     & 0     & 0     & 0     & 0    \\
    0   & 0   & 0   & a_0 & 0     & 0     & 0     & 0     & 0    \\
    a_4 & 0   & 0   & 0   & -4a_4 & 0     & 0     & 0     & 5a_0 \\
    a_5 & a_4 & 0   & 0   & -5a_5 & -4a_4 & 0     & 0     & 0    \\
    0   & a_5 & a_4 & 0   & 0     & -5a_5 & -4a_4 & 0     & 0    \\
    0   & 0   & a_5 & a_4 & 0     & 0     & -5a_5 & -4a_4 & 0    \\
    0   & 0   & 0   & a_5 & 0     & 0     & 0     & -5a_5 & a_4  \\
  \end{bmatrix}.
\end{aligned}
\]
注意，
\(\det {(T(f; n))} = \det {(U)}\)。
注意，\(U\) 的列 \(2n-1\) 有 \(2n-3\) 个 \(0\)。
按列 \(2n-1\) 展开，
并注意，若 \(i < j\)，
则 \(U(n|{2n-1})\) 与 \(U({2n-1}|{2n-1})\)
的 \((i, j)\)-元为 \(0\)，
我们得
\[
\begin{aligned}
  \det {(U)}
  = {} &
  \hphantom{{} + {}}
  (-1)^{n+(2n-1)}\, [U]_{n,2n-1} \det {(U(n|{2n-1}))}
  \\
  &
  +
  (-1)^{(2n-1)+(2n-1)}\,
  [U]_{2n-1,2n-1} \det {(U({2n-1}|{2n-1}))}
  \\
  = {} &
  (-1)^{n-1} n a_0\, 1\, a_0^{n-2}\, (-n a_n)^{n-1}
  + a_{n-1}\, 1\, a_0^{n-2}\, ((1-n) a_{n-1})^{n-1}
  \\
  = {} &
  a_0^{n-2}
  (n^n a_0 a_n^{n-1} + (1-n)^{n-1} a_{n-1}^n).
\end{aligned}
\]
则 \(f\) 的判别式
\[
\begin{aligned}
  (-1)^{n(n-1)/2} \det {(T(f; n))}
  = {} &
  (-1)^{n(n-1)/2} \det {(U)}
  \\
  = {} &
  (-1)^{n(n-1)/2} a_0^{n-2}
  (n^n a_0 a_n^{n-1} + (1-n)^{n-1} a_{n-1}^n).
\end{aligned}
\]
注意，若 \(n = 2\)，则这与上个例的结果是一样的。
:::

以下，我们设 @standing-assumption-of-resultant-banana 成立，
且 \(a_0 \neq 0\)，\(b_0 \neq 0\)，
\(m \geqslant 1\)，且 \(n \geqslant 1\)。
设
\[
\begin{aligned}
  f(x) & = a_0 (x - x_1) (x - x_2) \dots (x - x_n), \\
  g(x) & = b_0 (x - y_1) (x - y_2) \dots (x - y_m).
\end{aligned}
\]
设 \(z\) 是参数。
设 \(r\) 是数。
考虑整式
\[
\begin{aligned}
  h(x; z, r)
  = {} &
  b_0 (z - r x - y_1) (z - r x - y_2) \dots
  (z - r x - y_m)
  \\
  = {} &
  \sum_{k = 0}^{m} {b_k (z - r x)^{m-k}}
  =
  \sum_{k = 0}^{m} {c_k (z, r) x^{m-k}},
\end{aligned}
\]
其中，\(c_k (z, r)\) 是关于
\(z\)、\(r\)、\(b_0\)、\(b_1\)、\(\dots\)、\(b_m\)
的整式。
约定，若 \(k < 0\) 或 \(k > m\)，
则整式 \(c_k (z, r) = 0\)。
作 \(f\) 与 \(h\) 的 Sylvester 阵 \(S(f, h; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, h; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},            & j \leqslant m; \\
    c_{i-(j-m)} (z, r), & j > m.
  \end{cases}
\end{aligned}
\]
由结式的性质 (4)，\(f\) 与 \(h\) 的结式
\[
\begin{aligned}
  \det {(S(f, h; n, m))}
  = {} &
  a_0^m h(x_1; z, r) h(x_2; z, r) \dots h(x_n; z, r)
  \\
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {(z - r x_i - y_j)}
  \\
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {(z - (y_j + r x_i))}.
\end{aligned}
\]
则这是一个关于 \(z\) 的 \(m n\) 次整式，
且它的 \(z^{m n}\) 项系数是 \(a_0^m b_0^n\)。
不难看出，它的全部的根是 \(y_j + r x_i\)，
\(i = 1\)、\(\dots\)、\(n\)，
且 \(j = 1\)、\(\dots\)、\(m\)。

另考虑整式
\[
\begin{aligned}
  p(x; z) = b_0 (z - x y_1) (z - x y_2) \dots (z - x y_m).
\end{aligned}
\]
若 \(x \neq 0\)，则
\[
\begin{aligned}
  p(x; z)
  = {} &
  x^m b_0
  \left(\frac{z}{x} - y_1\right)
  \left(\frac{z}{x} - y_2\right)
  \dots
  \left(\frac{z}{x} - y_m\right)
  \\
  = {} &
  x^m \sum_{k = 0}^{m} {b_k \left(\frac{z}{x}\right)^{m-k}}
  \\
  = {} &
  x^m \sum_{k = 0}^{m} {b_k z^{m-k} x^{k-m}}
  \\
  = {} &
  \sum_{k = 0}^{m} {x^m b_k z^{m-k} x^{k-m}}
  \\
  = {} &
  \sum_{k = 0}^{m} {(b_k z^{m-k}) x^k}
  \\
  = {} &
  \sum_{\ell = 0}^{m} {(b_{m-\ell} z^\ell) x^{m-\ell}}.
\end{aligned}
\]
若 \(x = 0\)，则
\[
\begin{aligned}
  p(x; z)
  = b_0 (z - 0 y_1) (z - 0 y_2) \dots (z - 0 y_m)
  = b_0 z^m,
\end{aligned}
\]
且
\[
\begin{aligned}
  \sum_{\ell = 0}^{m} {(b_{m-\ell} z^\ell) x^{m-\ell}}
  = {} &
  \sum_{\ell = 0}^{m-1} {(b_{m-\ell} z^\ell) x^{m-\ell}}
  + (b_0 z^m) x^0
  \\
  = {} &
  \sum_{\ell = 0}^{m-1} {(b_{m-\ell} z^\ell) 0^{m-\ell}}
  + b_0 z^m
  \\
  = {} &
  b_0 z^m.
\end{aligned}
\]
所以，对任何数 \(x\)，
\[
\begin{aligned}
  p(x; z)
  = {} &
  b_0 (z - x y_1) (z - x y_2) \dots (z - x y_m)
  \\
  = {} &
  \sum_{\ell = 0}^{m} {(b_{m-\ell} z^\ell) x^{m-\ell}}
  =
  \sum_{\ell = 0}^{m} {d_\ell (z) x^{m-\ell}},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  d_\ell (z) =
  \begin{cases}
    b_{m-\ell} z^\ell, & 0 \leqslant \ell \leqslant m; \\
    0,                 & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
作 \(f\) 与 \(p\) 的 Sylvester 阵 \(S(f, p; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, p; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},         & j \leqslant m; \\
    d_{i-(j-m)} (z), & j > m.
  \end{cases}
\end{aligned}
\]
由结式的性质 (4)，\(f\) 与 \(p\) 的结式
\[
\begin{aligned}
  \det {(S(f, p; n, m))}
  = {} &
  a_0^m p(x_1; z) p(x_2; z) \dots p(x_n; z)
  \\
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {(z - x_i y_j)}.
\end{aligned}
\]
则这是一个关于 \(z\) 的 \(m n\) 次整式，
且它的 \(z^{m n}\) 项系数是 \(a_0^m b_0^n\)。
不难看出，它的全部的根是 \(x_i y_j\)，
\(i = 1\)、\(\dots\)、\(n\)，
且 \(j = 1\)、\(\dots\)、\(m\)。

另考虑整式
\[
\begin{aligned}
  q(x; z)
  = {} &
  b_0 (x z - y_1) (x z - y_2) \dots (x z - y_m)
  \\
  = {} &
  \sum_{k = 0}^{m} b_k (x z)^{m-k}
  \\
  = {} &
  \sum_{k = 0}^{m} (b_k z^{m-k}) x^{m-k}
  \\
  = {} &
  \sum_{k = 0}^{m} {e_k (z) x^{m-k}},
\end{aligned}
\]
其中，
\[
\begin{aligned}
  e_k (z) =
  \begin{cases}
    b_k z^{m-k}, & 0 \leqslant k \leqslant m, \\
    0,           & \text{别的情形}.
  \end{cases}
\end{aligned}
\]
作 \(f\) 与 \(q\) 的 Sylvester 阵 \(S(f, q; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, q; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},         & j \leqslant m; \\
    e_{i-(j-m)} (z), & j > m.
  \end{cases}
\end{aligned}
\]
由结式的性质 (4)，\(f\) 与 \(q\) 的结式
\[
\begin{aligned}
  \det {(S(f, q; n, m))}
  = {} &
  a_0^m q(x_1; z) q(x_2; z) \dots q(x_n; z)
  \\
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n}
  \prod_{j = 1}^{m} {(x_i z - y_j)}.
\end{aligned}
\]
设 \(x_i \neq 0\)，\(i = 1\)，\(2\)，\(\dots\)，\(n\)。
则
\[
\begin{aligned}
  \det {(S(f, q; n, m))}
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n}
  \prod_{j = 1}^{m} {\left( x_i \left( z - \frac{y_j}{x_i} \right) \right)}
  \\
  = {} &
  a_0^m b_0^n
  \prod_{i = 1}^{n} x_i^m
  \prod_{j = 1}^{m} {\left( z - \frac{y_j}{x_i} \right)}
  \\
  = {} &
  b_0^n a_0^m
  \prod_{i = 1}^{n} x_i^m
  \cdot
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {\left( z - \frac{y_j}{x_i} \right)}
  \\
  = {} &
  b_0^n a_0^m
  \left(\prod_{i = 1}^{n} x_i\right)^m
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {\left( z - \frac{y_j}{x_i} \right)}
  \\
  = {} &
  b_0^n
  \left( a_0 \prod_{i = 1}^{n} x_i \right)^m
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {\left( z - \frac{y_j}{x_i} \right)}.
\end{aligned}
\]
注意，
\[
\begin{aligned}
  a_0 x_1 x_2 \dots x_n
  = {} &
  (-1)^n a_0 (0 - x_1) (0 - x_2) \dots (0 - x_n)
  \\
  = {} &
  (-1)^n f(0)
  \\
  = {} &
  (-1)^n a_n.
\end{aligned}
\]
则
\[
\begin{aligned}
  \det {(S(f, q; n, m))}
  = (-1)^{m n} a_n^m b_0^n
  \prod_{i = 1}^{n} \prod_{j = 1}^{m}
  {\left( z - \frac{y_j}{x_i} \right)}.
\end{aligned}
\]
这是一个关于 \(z\) 的 \(m n\) 次整式，
且它的 \(z^{m n}\) 项系数是 \((-1)^{m n} a_n^m b_0^n\)。
不难看出，它的全部的根是 \(y_j / x_i\)，
\(i = 1\)、\(\dots\)、\(n\)，
且 \(j = 1\)、\(\dots\)、\(m\)。

由前面的计算与讨论，下面的结论是显然的。

::: theorem
设 \(n\)、\(m\) 是正整数。
设 \(a_0 \neq 0\)，且 \(b_0 \neq 0\)。
设
\[
\begin{aligned}
  f(x) &
  = \sum_{k = 0}^{n} {a_k x^{n-k}}
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n),
  \\
  g(x) &
  = \sum_{k = 0}^{m} {b_k x^{m-k}}
  = b_0 (x - y_1) (x - y_2) \dots (x - y_m).
\end{aligned}
\]
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)。
设 \(z\) 是参数。

(1) 设 \(r\) 是数。
    作整式
    \[
    \begin{aligned}
      h(x; z, r)
      = g(z - r x)
      = \sum_{k = 0}^{m} {b_k (z - r x)^{m-k}}
      = \sum_{k = 0}^{m} {c_k (z, r) x^{m-k}},
    \end{aligned}
    \]
    其中，\(c_k (z, r)\) 是关于
    \(z\)、\(r\)、\(b_0\)、\(b_1\)、\(\dots\)、\(b_m\)
    的整式，
    且若 \(k < 0\) 或 \(k > m\)，
    则整式 \(c_k (z, r) = 0\)。
    作 \(f\) 与 \(h\) 的 Sylvester 阵 \(S(f, h; n, m)\)。
    它是 \(m + n\) 级阵，且
    \[
    \begin{aligned}
      [S(f, h; n, m)]_{i,j} =
      \begin{cases}
        a_{i-j},            & j \leqslant m; \\
        c_{i-(j-m)} (z, r), & j > m.
      \end{cases}
    \end{aligned}
    \]
    则 \(f\) 与 \(h\) 的结式
    \[
    \begin{aligned}
      \det {(S(f, h; n, m))}
      = a_0^m b_0^n
      \prod_{i = 1}^{n} \prod_{j = 1}^{m}
      {(z - (y_j + r x_i))}
    \end{aligned}
    \]
    是一个关于 \(z\) 的 \(m n\) 次整式，
    且它的 \(z^{m n}\) 项系数是 \(a_0^m b_0^n\)，
    且它的全部的根是 \(y_j + r x_i\)，
    \(i = 1\)、\(\dots\)、\(n\)，
    且 \(j = 1\)、\(\dots\)、\(m\)。

(2) 作整式
    \[
    \begin{aligned}
      p(x; z)
      = x^m g\left(\frac{z}{x}\right)
      = \sum_{\ell = 0}^{m} {(b_{m-\ell} z^\ell) x^{m-\ell}}
      = \sum_{\ell = 0}^{m} {d_\ell (z) x^{m-\ell}},
    \end{aligned}
    \]
    其中，\(d_\ell (z)\) 是关于
    \(z\)、\(b_0\)、\(b_1\)、\(\dots\)、\(b_m\)
    的整式，
    且若 \(\ell < 0\) 或 \(\ell > m\)，
    则整式 \(d_\ell (z) = 0\)。
    作 \(f\) 与 \(p\) 的 Sylvester 阵 \(S(f, p; n, m)\)。
    它是 \(m + n\) 级阵，且
    \[
    \begin{aligned}
      [S(f, p; n, m)]_{i,j} =
      \begin{cases}
        a_{i-j},         & j \leqslant m; \\
        d_{i-(j-m)} (z), & j > m.
      \end{cases}
    \end{aligned}
    \]
    则 \(f\) 与 \(p\) 的结式
    \[
    \begin{aligned}
      \det {(S(f, p; n, m))}
      = a_0^m b_0^n
      \prod_{i = 1}^{n} \prod_{j = 1}^{m}
      {(z - x_i y_j)}
    \end{aligned}
    \]
    是一个关于 \(z\) 的 \(m n\) 次整式，
    且它的 \(z^{m n}\) 项系数是 \(a_0^m b_0^n\)，
    且它的全部的根是 \(x_i y_j\)，
    \(i = 1\)、\(\dots\)、\(n\)，
    且 \(j = 1\)、\(\dots\)、\(m\)。

(3) 设 \(x_i \neq 0\)，\(i = 1\)，\(2\)，\(\dots\)，\(n\)。
    作整式
    \[
    \begin{aligned}
      q(x; z)
      = g (z x)
      = \sum_{k = 0}^{m} (b_k z^{m-k}) x^{m-k}
      = \sum_{k = 0}^{m} {e_k (z) x^{m-k}},
    \end{aligned}
    \]
    其中，\(e_k (z)\) 是关于
    \(z\)、\(b_0\)、\(b_1\)、\(\dots\)、\(b_m\)
    的整式，
    且若 \(k < 0\) 或 \(k > m\)，
    则整式 \(e_k (z) = 0\)。
    作 \(f\) 与 \(q\) 的 Sylvester 阵 \(S(f, q; n, m)\)。
    它是 \(m + n\) 级阵，且
    \[
    \begin{aligned}
      [S(f, q; n, m)]_{i,j} =
      \begin{cases}
        a_{i-j},         & j \leqslant m; \\
        e_{i-(j-m)} (z), & j > m.
      \end{cases}
    \end{aligned}
    \]
    则 \(f\) 与 \(q\) 的结式
    \[
    \begin{aligned}
      \det {(S(f, q; n, m))}
      = (-1)^{m n} a_n^m b_0^n
      \prod_{i = 1}^{n} \prod_{j = 1}^{m}
      {\left( z - \frac{y_j}{x_i} \right)}
    \end{aligned}
    \]
    是一个关于 \(z\) 的 \(m n\) 次整式，
    且它的 \(z^{m n}\) 项系数是 \((-1)^{m n} a_n^m b_0^n\)，
    且它的全部的根是 \(y_j / x_i\)，
    \(i = 1\)、\(\dots\)、\(n\)，
    且 \(j = 1\)、\(\dots\)、\(m\)。
:::

::: example
设
\[
\begin{aligned}
  f(x) & = x^2 - x - 1 = (x - x_1) (x - x_2), \\
  g(x) & = x^2 + x + 1 = (x - y_1) (x - y_2).
\end{aligned}
\]
我们求以
\(y_j - x_i\)，\(i\)，\(j = 1\)，\(2\)
为根的整式，
与以
\(x_i y_j\)，\(i\)，\(j = 1\)，\(2\)
为根的整式。
注意，
\[
\begin{aligned}
  h(x; z, -1)
  = {} &
  g(z - (-1) x)
  \\
  = {} &
  (z + x)^2 + (z + x) + 1
  \\
  = {} &
  (z^2 + 2 z x + x^2) + (z + x) + 1
  \\
  = {} &
  1 x^2 + (2z + 1) x + (z^2 + z + 1),
\end{aligned}
\]
且
\[
\begin{aligned}
  p(x; z)
  = x^2 g\left( \frac{z}{x} \right)
  = x^2 \left(\frac{z^2}{x^2} + \frac{z}{x} + 1\right)
  = 1 x^2 + z x + z^2.
\end{aligned}
\]
由此，我们写出 \(f\)、\(h\) 的 Sylvester 阵
\[
\begin{aligned}
  S(f, h; 2, 2) =
  \begin{bmatrix}
    1  & 0  & 1       & 0       \\
    -1 & 1  & 2z+1    & 1       \\
    -1 & -1 & z^2+z+1 & 2z+1    \\
    0  & -1 & 0       & z^2+z+1 \\
  \end{bmatrix},
\end{aligned}
\]
与 \(f\)、\(p\) 的 Sylvester 阵
\[
\begin{aligned}
  S(f, p; 2, 2) =
  \begin{bmatrix}
    1  & 0  & 1   & 0   \\
    -1 & 1  & z   & 1   \\
    -1 & -1 & z^2 & z   \\
    0  & -1 & 0   & z^2 \\
  \end{bmatrix}.
\end{aligned}
\]
注意，这 \(2\) 个 Sylvester 阵的元都
全是关于 \(z\) 的，系数全为整数的整式，
所以它们的行列式也都是
关于 \(z\) 的，系数全为整数的整式。

注意，
\[
\begin{aligned}
  \det {
    \begin{bmatrix}
      1  & 0  & a & 0 \\
      -1 & 1  & b & a \\
      -1 & -1 & c & b \\
      0  & -1 & 0 & c \\
    \end{bmatrix}
  }
  = {} &
  \det {
    \begin{bmatrix}
      1    & 0  & a   & 0 \\
      -1+1 & 1  & b+a & a \\
      -1+1 & -1 & c+a & b \\
      0    & -1 & 0   & c \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      1 & 0  & a   & 0 \\
      0 & 1  & b+a & a \\
      0 & -1 & c+a & b \\
      0 & -1 & 0   & c \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      1 & 0  & a           & 0   \\
      0 & 1  & b+a         & a   \\
      0 & -1+1 & c+a+(b+a) & b+a \\
      0 & -1+1 & 0+(b+a)   & c+a \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      1 & 0 & a      & 0   \\
      0 & 1 & a+b    & a   \\
      0 & 0 & 2a+b+c & a+b \\
      0 & 0 & a+b    & a+c \\
    \end{bmatrix}
  }
  \\
  = {} &
  1
  \det {
    \begin{bmatrix}
      1 & a+b    & a   \\
      0 & 2a+b+c & a+b \\
      0 & a+b    & a+c \\
    \end{bmatrix}
  }
  \\
  = {} &
  1 \cdot 1
  \det {
    \begin{bmatrix}
      2a+b+c & a+b \\
      a+b    & a+c \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      2a+b+c-(a+b) & a+b-(a+c) \\
      a+b          & a+c       \\
    \end{bmatrix}
  }
  \\
  = {} &
  \det {
    \begin{bmatrix}
      a+c & -(c-b) \\
      a+b & a+c    \\
    \end{bmatrix}
  }
  \\
  = {} &
  (c + a)^2 + (b + a) (c - b).
\end{aligned}
\]

由前面的计算，与上个定理，
以
\(y_j - x_i\)，\(i\)，\(j = 1\)，\(2\)
为根的整式是
\[
\begin{aligned}
  \det {(S(f, h; 2, 2))}
  = {} &
  (z^2 + z + 1 + 1)^2
  + (2 z + 1 + 1) (z^2 + z + 1 - (2 z + 1))
  \\
  = {} &
  z^4 + 4 z^3 + 5 z^2 + 2 z + 4,
\end{aligned}
\]
且以
\(x_i y_j\)，\(i\)，\(j = 1\)，\(2\)
为根的整式是
\[
\begin{aligned}
  \det {(S(f, p; 2, 2))}
  = {} &
  (z^2 + 1)^2 + (z + 1) (z^2 - z)
  \\
  = {} &
  z^4 + z^3 + 2 z^2 - z + 1.
\end{aligned}
\]

我们或许能体会到上个定理的好的地方：
因为 \(f\)、\(h\)、\(p\) 是关于 \(x\)、\(z\) 的，
系数全为整数的整式，
即使不具体地计算，我们也知道，
存在关于 \(z\) 的，系数全为整数的整式，
其的根是 \(g\)、\(f\) 的根的差（或积）。
:::

::: theorem
设 \(n\) 是正整数。
设 \(a_0 \neq 0\)。
设
\[
\begin{aligned}
  f(x) &
  = \sum_{k = 0}^{n} {a_k x^{n-k}}
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n).
\end{aligned}
\]
为方便，我们约定：
若 \(k < 0\) 或 \(k > n\)，则 \(a_k = 0\)。
设 \(z\) 是参数。
设 \(u(x)\)、\(v(x)\) 是整式，
且 \(u(x_i) \neq 0\)，\(i = 1\)，\(\dots\)，\(n\)。
设
\[
\begin{aligned}
  r(x; z) = u(x) z - v(x)
  = \sum_{k = 0}^{m} {b_k (z) x^{m-k}},
\end{aligned}
\]
其中，\(b_k (z)\) 是关于 \(z\) 的整式，
且若 \(k < 0\) 或 \(k > m\)，
则整式 \(b_k (z) = 0\)。
作 \(f\) 与 \(r\) 的 Sylvester 阵 \(S(f, r; n, m)\)。
它是 \(m + n\) 级阵，且
\[
\begin{aligned}
  [S(f, r; n, m)]_{i,j} =
  \begin{cases}
    a_{i-j},         & j \leqslant m; \\
    b_{i-(j-m)} (z), & j > m.
  \end{cases}
\end{aligned}
\]
则 \(f\) 与 \(r\) 的结式
\[
\begin{aligned}
  \det {(S(f, r; n, m))}
  = a_0^m \left(\prod_{i = 1}^{n} {u(x_i)} \right)
  \prod_{i = 1}^{n} {\left(z - \frac{v(x_i)}{u(x_i)}\right)}
\end{aligned}
\]
是一个关于 \(z\) 的 \(n\) 次整式，
且它的 \(z^{n}\) 项系数是 \(a_0^m u(x_1) u(x_2) \dots u(x_n)\)，
且它的全部的根是 \(v(x_i) / u(x_i)\)，
\(i = 1\)、\(\dots\)、\(n\)。
:::

::: proof
我们计算结式即可；
由此我们得别的结论。

由结式的性质 (4)，\(f\) 与 \(r\) 的结式
\[
\begin{aligned}
  \det {(S(f, r; n, m))}
  = {} &
  a_0^m \prod_{i = 1}^{n} {r(x_i; z)}
  \\
  = {} &
  a_0^m \prod_{i = 1}^{n} {(u(x_i) z - v(x_i))}
  \\
  = {} &
  a_0^m \prod_{i = 1}^{n}
  {\left(u(x_i) \left(z - \frac{v(x_i)}{u(x_i)}\right) \right)}
  \\
  = {} &
  a_0^m \left(\prod_{i = 1}^{n} {u(x_i)} \right)
  \prod_{i = 1}^{n} {\left(z - \frac{v(x_i)}{u(x_i)}\right)}.
\end{aligned}
\]
:::

值得提，前面，在研究问题
“若数 \(c\) 适合 \(f(c) = 0\)，
则 \(y = v(c) / u(c)\) 是何”
（其中，\(f(x)\)、\(u(x)\)、\(v(x)\) 是整式，
且 \(u(c) \neq 0\)）
时，
我们其实用了一样的结式
（即 \(f(x)\) 与 \(u(x) y - v(x)\) 的结式）。
由此可见，结式的应用是多的与广的。

::: example
设 \(n\) 是正整数。
设 \(a_0 \neq 0\)。
设
\[
\begin{aligned}
  f(x) &
  = \sum_{k = 0}^{n} {a_k x^{n-k}}
  = a_0 (x - x_1) (x - x_2) \dots (x - x_n).
\end{aligned}
\]
设 \(x_i \neq 0\)。
取 \(u(x) = x\)，\(v(x) = 1\)。
则 \(r(x; z) = z x - 1\)。
则 \(m = 1\)，\(u(x_i) \neq 0\)，
且以 \(v(x_i) / u(x_i) = x_i^{-1}\)
为根的整式是
\[
\begin{aligned}
  \det {(S(f, r; n, m))}
  = {} &
  a_0^1
  (x_1 x_2 \dots x_n)
  \prod_{i = 1}^{n}
  {\left(z - \frac{1}{x_i}\right)}
  \\
  = {} &
  a_0\, (x_1 x_2 \dots x_n)
  \prod_{i = 1}^{n}
  {\left(
      \frac{-z}{x_i} \left(\frac{1}{z} - x_i\right)
  \right)}
  \\
  = {} &
  (x_1 x_2 \dots x_n)
  \frac{(-z)^n}{x_1 x_2 \dots x_n}
  a_0 \prod_{i = 1}^{n}
  {\left(\frac{1}{z} - x_i\right)}
  \\
  = {} &
  (-1)^n z^n f\left(\frac{1}{z}\right).
\end{aligned}
\]
:::
