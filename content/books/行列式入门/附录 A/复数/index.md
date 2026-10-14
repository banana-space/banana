---
title: 复数
---

本章，我们在复数讨论问题。

回想，我们最先学习自然数（非负整数）
\(0\)、\(1\)、\(2\)、\(\dots\)。
然后，我们学习了它们的大小关系与运算，
包括但不限于：

- 对任何自然数 \(x\)，\(y\)，
  在“\(x = y\)”，
  “\(x > y\)”
  与“\(y > x\)”，
  存在且只存在一个，其是对的；

- 可对 \(2\) 个自然数作加法（或乘法），
  且结果，和（或积），是自然数；

- 自然数的加法（或乘法）适合结合律与交换律；

- 自然数的加法与乘法适合分配律；

- 存在自然数 \(0\)，使对任何自然数 \(x\)，
  \(0 + x = x = x + 0\)；

- 存在自然数 \(1\)，使对任何自然数 \(x\)，
  \(1 \cdot x = x = x \cdot 1\)。

当我们考虑加法与乘法的逆运算时，
我们考虑了减法与除法：
若 \(x + z = y\)，则 \(z = y - x\)；
若 \(x \cdot z = y\)，则 \(z = y / x\)
（其中，\(x \neq 0\)）。
不过，我们不总能在自然数作减法与除法：
我们知道，\(7 - 3 = 4\)，但 \(3 - 7\) 是何？
我们知道，\(222 / 6 = 37\)，但 \(3 / 9\) 是何？

为解决它们，我们学习了可比数（<lang en>rational numbers</lang>）。
于是，\(3 - 7 = -4\)，
且 \(3 / 9 = 1 / 3\)。
关于可比数，我们知道，包括但不限于：

- 可对 \(2\) 个可比数作加法（或乘法），
  且结果，和（或积），是可比数；

- 可比数的加法（或乘法）适合结合律与交换律；

- 可比数的加法与乘法适合分配律；

- 存在可比数 \(0\)，使对任何可比数 \(x\)，
  \(0 + x = x = x + 0\)；

- 对任何可比数 \(x\)，存在可比数 \(-x\)，
  使 \((-x) + x = 0 = x + (-x)\)；

- 存在可比数 \(1\)，使对任何可比数 \(x\)，
  \(1 \cdot x = x = x \cdot 1\)；

- 对任何不等于 \(0\) 的可比数 \(x\)，
  存在不等于 \(0\) 的可比数 \(x^{-1}\)，
  使 \(x^{-1} \cdot x = 1 = x \cdot x^{-1}\)；

- 可比数是形如
  \(\pm q/p\)（即 \(+q/p\) 或 \(-q/p\)）
  的数，
  其中，\(p\)、\(q\) 是自然数，且 \(p \neq 0\)；

- 可比数是 \(2\) 个整数的比，
  其中，整数是形如
  \(\pm q\)（即 \(+q\) 或 \(-q\)）
  的数
  （其中，\(q\) 是自然数）；

- 自然数都是可比数，且不是自然数的可比数存在；

- 可对 \(2\) 个可比数作减法（或除法）
  （其中，除数不等于 \(0\)），
  且结果，差（或比），都是可比数；

- 对任何可比数 \(x\)，\(y\)，
  在“\(x = y\)”，
  “\(x > y\)”
  与“\(y > x\)”，
  存在且只存在一个，其是对的；

- 对任何可比数 \(x\)，
  在“\(x = 0\)”，
  “\(x > 0\)”
  与“\(-x > 0\)”，
  存在且只存在一个，其是对的；

- \(2\) 个正的可比数的和（或积）是正的，
  其中，正的可比数是大于 \(0\) 的可比数。

当我们学习几何时，我们发现，
一些量不可能是可比数：
由勾股定理，
边长为 \(1\) 的正方形的对角线的长的平方是
\(1^2 + 1^2 = 1 + 1 = 2\)，
但

::: theorem
不存在可比数，其的平方等于 \(2\)。
:::

::: proof
反设，某可比数 \(x\) 的平方等于 \(2\)。
则存在整数 \(p\)、\(q\)（其中，\(p \neq 0\)），
使 \(x = q/p\)。
注意，我们可要求，\(q\) 与 \(p\) 的一个不是偶数
（回想，对整数 \(a\)，若存在整数 \(b\)，
使 \(a = 2 \cdot b = 2b\)，
则 \(a\) 是偶数），
因为我们总能对 \(q/p\) 约分。
则 \(x^2 = q^2 / p^2 = 2\)。
则 \(q^2 = 2 p^2\)。
则 \(q^2\) 是偶数。
则 \(q\) 是偶数
（注意，若整数 \(a\) 不是偶数，
则整数 \(a^2\) 也不是偶数）。
则 \(q = 2t\)，其中，\(t\) 是整数。
则 \(2 p^2 = q^2 = 4 t^2\)。
则 \(p^2 = 2 t^2\)。
则 \(p^2\) 是偶数。
则 \(p\) 是偶数。
这是矛盾。
:::

于是，我们学习了实数。
在实数，我们能以 \(\sqrt{2}\)
表边长为 \(1\) 的正方形的对角线的长：
\(\big(\sqrt{2}\big)^2 = 2\)。
并且，关于实数，我们知道，包括但不限于：

- 可对 \(2\) 个实数作加法（或乘法），
  且结果，和（或积），是实数；

- 实数的加法（或乘法）适合结合律与交换律；

- 实数的加法与乘法适合分配律；

- 存在实数 \(0\)，使对任何实数 \(x\)，
  \(0 + x = x = x + 0\)；

- 对任何实数 \(x\)，存在实数 \(-x\)，
  使 \((-x) + x = 0 = x + (-x)\)；

- 存在实数 \(1\)，使对任何实数 \(x\)，
  \(1 \cdot x = x = x \cdot 1\)；

- 对任何不等于 \(0\) 的实数 \(x\)，
  存在不等于 \(0\) 的实数 \(x^{-1}\)，
  使 \(x^{-1} \cdot x = 1 = x \cdot x^{-1}\)；

- 可比数都是实数，且不是可比数的实数存在；

- 可对 \(2\) 个实数作减法（或除法）
  （其中，除数不等于 \(0\)），
  且结果，差（或比），都是实数；

- 对任何实数 \(x\)，\(y\)，
  在“\(x = y\)”，
  “\(x > y\)”
  与“\(y > x\)”，
  存在且只存在一个，其是对的；

- 对任何实数 \(x\)，
  在“\(x = 0\)”，
  “\(x > 0\)”
  与“\(-x > 0\)”，
  存在且只存在一个，其是对的；

- \(2\) 个正的实数的和（或积）是正的，
  其中，正的实数是大于 \(0\) 的实数；

- 对任何非负的实数 \(y\)
  （即 \(y > 0\) 或 \(y = 0\)），
  存在唯一的非负的实数 \(x\)，
  使 \(x^2 = x \cdot x = y\)
  （我们常记此 \(x\) 为 \(\sqrt{y}\)）；

- 对任何实数 \(y\)，
  存在唯一的实数 \(u\)，
  使 \(u^3 = u^2 \cdot u
      = (u \cdot u) \cdot u = y\)
  （我们常记此 \(u\) 为 \(\sqrt[3]{y}\)）。

那么，复数是何？
通俗地，复数是形如 \(a + \mathrm{i} b\) 的数，
其中，\(a\)、\(b\) 是实数，
且 \(\mathrm{i}\) 是一个不是实数的文字
（\(\mathrm{i}\) 来自 <lang en>imaginary unit</lang>（英语））。
正式地，

::: definition
**复数**是形如 \(a + \mathrm{i} b\) 的有序的文字，
其中，\(a\)、\(b\) 是实数，
且 \(\mathrm{i}\) 是一个不是实数的文字。
（“有序的”指，
\(a + \mathrm{i} b\) 与 \(b + \mathrm{i} a\)
是不同的，除非 \(a = b\)。）

设 \(a\)、\(b\)、\(c\)、\(d\) 是实数。
若 \(a = c\) 且 \(b = d\)，
我们说，\(2\) 个复数
\(a + \mathrm{i} b\) 与 \(c + \mathrm{i} d\)
相等：
\(a + \mathrm{i} b = c + \mathrm{i} d\)。
若 \(a \neq c\) 或 \(b \neq d\)，
我们说，\(2\) 个复数
\(a + \mathrm{i} b\) 与 \(c + \mathrm{i} d\)
不相等：
\(a + \mathrm{i} b \neq c + \mathrm{i} d\)。

设 \(a\)、\(b\) 是实数。
我们可简单地写 \(a + \mathrm{i} 0\) 为 \(a\)；
我们可简单地写 \(0 + \mathrm{i} b\) 为 \(\mathrm{i} b\)；
我们可简单地写 \(a + \mathrm{i} (-b)\) 为
\(a - \mathrm{i} b\)；
我们可简单地写 \(a + \mathrm{i} 1\) 为
\(a + \mathrm{i}\)；
我们可简单地写 \(a + \mathrm{i} (-1)\) 为
\(a - \mathrm{i}\)；
我们可简单地写 \(0 + \mathrm{i} 1\) 为
\(\mathrm{i}\)；
我们可简单地写 \(0 + \mathrm{i} b\) 为
\(\mathrm{i} b\)；
我们可简单地写 \(0 + \mathrm{i} (-b)\) 为
\(-\mathrm{i} b\)；
我们可简单地写 \(0 + \mathrm{i} 0\) 为
\(0\)。

实数都是复数，
且 \(a + \mathrm{i} b\) 不是实数，
除非 \(b = 0\)。

我们也可写 \(a + \mathrm{i} b\)
为 \(a + b \mathrm{i}\)。

设 \(a\)、\(b\)、\(c\)、\(d\) 是实数。
定义
复数 \(a + \mathrm{i} b\) 与 \(c + \mathrm{i} d\) 的和
\[
\begin{aligned}
  (a + \mathrm{i} b) + (c + \mathrm{i} d)
  = (a + c) + \mathrm{i} (b + d).
\end{aligned}
\]
定义
复数 \(a + \mathrm{i} b\) 与 \(c + \mathrm{i} d\) 的积
\[
\begin{aligned}
  (a + \mathrm{i} b) (c + \mathrm{i} d)
  = (a c - b d) + \mathrm{i} (a d + b c).
\end{aligned}
\]
:::

::: example
我们计算复数
\(2 + \mathrm{i} 5\)、\(3 + \mathrm{i} 7\)
的和与积。
加法是简单的：
\[
\begin{aligned}
  (2 + \mathrm{i} 5) + (3 + \mathrm{i} 7)
  = (2 + 3) + \mathrm{i} (5 + 7)
  = 5 + \mathrm{i} 12.
\end{aligned}
\]
乘法不是难的：
\[
(2 + \mathrm{i} 5) (3 + \mathrm{i} 7)
= (2 \cdot 3 - 5 \cdot 7)
+ \mathrm{i} (2 \cdot 7 + 5 \cdot 3)
= -29 + \mathrm{i} 29.
\]
:::

::: example
我们计算 \(\mathrm{i}\) 与 \(\mathrm{i}\)
的积：
\[
\mathrm{i} \mathrm{i}
= (0 + \mathrm{i} 1) (0 + \mathrm{i} 1)
= (0 \cdot 0 - 1 \cdot 1)
+ \mathrm{i} (0 \cdot 1 + 1 \cdot 0)
= -1 + \mathrm{i} 0
= -1.
\]
:::

复数的加法与乘法也适合一些律：

::: theorem
设 \(x\)、\(y\)、\(z\) 是复数。
复数的加法与乘法适合：

(1) 对任何复数 \(x\)，\(y\)，
    它们的和 \(x + y\) 是复数。

(2) 加法结合律：
    对任何复数 \(x\)、\(y\)、\(z\)，
    \((x + y) + z = x + (y + z)\)。

(3) 加法交换律：
    对任何复数 \(x\)，\(y\)，
    \(x + y = y + x\)。

(4) \(0 = 0 + \mathrm{i} 0\) 适合，
    对任何复数 \(x\)，
    \(0 + x = x = x + 0\)。

(5) 对任何复数 \(x\)，存在复数 \(-x\)，使
    \((-x) + x = 0 = x + (-x)\)。

(6) 对任何复数 \(x\)，\(y\)，
    它们的积 \(x y\) 是复数。

(7) 乘法结合律：
    对任何复数 \(x\)、\(y\)、\(z\)，
    \((x y) z = x (y z)\)。

(8) 乘法交换律：
    对任何复数 \(x\)，\(y\)，
    \(x y = y x\)。

(9) \(1 = 1 + \mathrm{i} 0\) 适合，
    对任何复数 \(x\)，
    \(1 x = x = x 1\)。

(10) 对任何不等于 \(0\) 的复数 \(x\)，
     存在不等于 \(0\) 的复数 \(\operatorname{rec} {(x)}\)，使
     \(\operatorname{rec} {(x)} \cdot x
         = 1
       = x \cdot \operatorname{rec} {(x)}\)。

(11) 分配律：
     对任何复数 \(x\)、\(y\)、\(z\)，
     \(x (y + z) = x y + x z\)，
     且 \((x + y) z = x z + y z\)。
:::

::: proof
以下，我们设
\(x = a + \mathrm{i} b\)，
\(y = c + \mathrm{i} d\)，
\(z = e + \mathrm{i} f\)，
其中，
\(a\)、\(b\)、\(c\)、\(d\)、\(e\)、\(f\) 是实数。

(1) 回想，
    \(x + y = (a + c) + \mathrm{i} (b + d)\)。
    因为 \(a\)、\(c\) 是实数，
    \(a + c\) 是实数；
    因为 \(b\)、\(d\) 是实数，
    \(b + d\) 是实数。
    则 \(x + y\) 是复数。

(2) 注意，
    \[
        \begin{aligned}
          (x + y) + z
          = {} &
          ((a + \mathrm{i} b) + (c + \mathrm{i} d))
      + (e + \mathrm{i} f)
      \\
      = {} &
      ((a + c) + \mathrm{i} (b + d))
      + (e + \mathrm{i} f)
      \\
      = {} &
      ((a + c) + e) + \mathrm{i} ((b + d) + f)
      \\
      = {} &
      (a + (c + e)) + \mathrm{i} (b + (d + f))
      \\
      = {} &
      (a + \mathrm{i} b)
      + ((c + e) + \mathrm{i} (d + f))
      \\
      = {} &
      (a + \mathrm{i} b)
      + ((c + \mathrm{i} d) + (e + \mathrm{i} f))
      \\
      = {} &
      x + (y + z).
    \end{aligned}
    \]

(3) 注意，
    \[
    \begin{aligned}
      x + y
      = {} &
      (a + \mathrm{i} b) + (c + \mathrm{i} d)
      \\
      = {} &
      (a + c) + \mathrm{i} (b + d)
      \\
      = {} &
      (c + a) + \mathrm{i} (d + b)
      \\
      = {} &
      (c + \mathrm{i} d) + (a + \mathrm{i} b)
      \\
      = {} &
      y + x.
    \end{aligned}
    \]

(4) 我证 \(0 + x = x\)；
    我留另一部分为您的习题
    （注意，您能用交换律：
    \(x + 0 = 0 + x = x\)）。
    注意，
    \[
    \begin{aligned}
      0 + x
      = {} &
      (0 + \mathrm{i} 0) + (a + \mathrm{i} b)
      \\
      = {} &
      (0 + a) + \mathrm{i} (0 + b)
      \\
      = {} &
      a + \mathrm{i} b
      \\
      = {} &
      x.
    \end{aligned}
    \]

(5) 设 \(-x = -a + \mathrm{i} (-b)\)。
    我证 \((-x) + x = 0\)；
    我留另一部分为您的习题
    （注意，您能用交换律：
    \(x + (-x) = (-x) + x = 0\)）。
    注意，
    \[
        \begin{aligned}
      (-x) + x
      = {} &
      (-a + \mathrm{i} (-b)) + (a + \mathrm{i} b)
      \\
      = {} &
      (-a + a) + \mathrm{i} (-b + b)
      \\
      = {} &
      0 + \mathrm{i} 0
      \\
      = {} &
      0.
    \end{aligned}
    \]

(6) 回想，
    \(x y = (a c - b d) + \mathrm{i} (a d + b c)\)。
    因为 \(a\)、\(c\) 是实数，
    \(a c\) 是实数；
    因为 \(b\)、\(d\) 是实数，
    \(b d\) 是实数。
    则 \(a c - b d\) 是实数。
    因为 \(a\)、\(d\) 是实数，
    \(a d\) 是实数；
    因为 \(b\)、\(c\) 是实数，
    \(b c\) 是实数。
    则 \(a d + b c\) 是实数。
    则 \(x y\) 是复数。

(7) 注意，
    对任何实数 \(g\)，\(h\)，
    \(-(g + h) = -h + (-g) = -h - g\)。
    则
    \[
        \begin{aligned}
          &
          (x y) z
          \\
          = {} &
          ((a + \mathrm{i} b) (c + \mathrm{i} d))
          (e + \mathrm{i} f)
          \\
          = {} &
          ((ac - bd) + \mathrm{i} (ad + bc))
          (e + \mathrm{i} f)
          \\
          = {} &
          ((ac - bd)e - (ad + bc)f)
      + \mathrm{i} ((ac - bd)f + (ad + bc)e)
      \\
      = {} &
      (((ac)e - (bd)e) - ((ad)f + (bc)f))
      + \mathrm{i} (((ac)f - (bd)f) + ((ad)e + (bc)e))
      \\
      = {} &
      ((a(ce) - b(de)) - (a(df) + b(cf)))
      + \mathrm{i} ((a(cf) - b(df)) + (a(de) + b(ce)))
      \\
      = {} &
      ((a(ce) - b(de)) + (-b(cf) - a(df)))
      + \mathrm{i} ((a(cf) - b(df)) + (a(de) + b(ce)))
      \\
      = {} &
      ((a(ce) - b(de)) + (-a(df) - b(cf)))
      + \mathrm{i} ((a(cf) - b(df)) + (a(de) + b(ce)))
      \\
      = {} &
      (((a(ce) - b(de)) - a(df)) - b(cf))
      + \mathrm{i} (((a(cf) - b(df)) + a(de)) + b(ce))
      \\
      = {} &
      ((a(ce) + (-b(de) - a(df))) - b(cf))
      \\
      &
      \quad \quad \quad \quad \quad \quad \quad
      \quad \quad \quad \quad \quad \quad \quad
      + \mathrm{i} ((a(cf) + (-b(df) + a(de))) + b(ce))
      \\
      = {} &
      ((a(ce) + (-a(df) - b(de))) - b(cf))
      + \mathrm{i} ((a(cf) + (a(de) - b(df))) + b(ce))
      \\
      = {} &
      (((a(ce) - a(df)) - b(de)) - b(cf))
      + \mathrm{i} (((a(cf) + a(de)) - b(df)) + b(ce))
      \\
      = {} &
      ((a(ce) - a(df)) + (-b(de) - b(cf)))
      \\
      &
      \quad \quad \quad \quad \quad \quad \quad
      \quad \quad \quad \quad \quad \quad \quad
      + \mathrm{i} ((a(cf) + a(de)) + (-b(df) + b(ce)))
      \\
      = {} &
      ((a(ce) - a(df)) - (b(cf) + b(de)))
      + \mathrm{i} ((a(cf) + a(de)) + (b(ce) + b(-df)))
      \\
      = {} &
      (a(ce - df) - b(cf + de))
      + \mathrm{i} (a(cf + de) + b(ce - df))
      \\
      = {} &
      (a + \mathrm{i} b)
      ((ce - df) + \mathrm{i} (cf + de))
      \\
      = {} &
      (a + \mathrm{i} b)
      ((c + \mathrm{i} d) (e + \mathrm{i} f))
      \\
      = {} &
      x (y z).
    \end{aligned}
    \]

(8) 注意，
    \[
    \begin{aligned}
      x y
      = {} &
      (a + \mathrm{i} b) (c + \mathrm{i} d)
      \\
      = {} &
      (a c - b d) + \mathrm{i} (a d + b c)
      \\
      = {} &
      (c a - d b) + \mathrm{i} (d a + c b)
      \\
      = {} &
      (c + \mathrm{i} d) (a + \mathrm{i} b)
      \\
      = {} &
      y x.
    \end{aligned}
    \]

(9) 我证 \(1 x = x\)；
    我留另一部分为您的习题
    （注意，您能用交换律：
    \(x 1 = 1 x = x\)）。
    注意，
    \[
    \begin{aligned}
      1 x
      = {} &
      (1 + \mathrm{i} 0) (a + \mathrm{i} b)
      \\
      = {} &
      (1 a - 0 b) + \mathrm{i} (1 b + 0 a)
      \\
      = {} &
      (a - 0) + \mathrm{i} (b + 0)
      \\
      = {} &
      a + \mathrm{i} b
      \\
      = {} &
      x.
    \end{aligned}
    \]

(10) 因为 \(x \neq 0\)，
     \(a\)、\(b\) 不能全是 \(0\)。
     则非负数 \(a^2\)、\(b^2\) 不能全是 \(0\)。
     则 \(a^2 + b^2\) 是正数。
     则 \(a^2 + b^2 \neq 0\)。
     设 \(\operatorname{rec} {(x)}
       = a/(a^2 + b^2) + \mathrm{i} (-b/(a^2 + b^2))\)。
     则 \(a/(a^2 + b^2)\)、\(-b/(a^2 + b^2)\)
     不能全是 \(0\)。
     则 \(\operatorname{rec} {(x)} \neq 0\)。

     我证 \(\operatorname{rec} {(x)} \cdot x = 1\)；
     我留另一部分为您的习题
     （注意，您能用交换律：\(
           x \cdot \operatorname{rec} {(x)}
           = \operatorname{rec} {(x)} \cdot x = 1
       \)）。
     注意，
     \[
     \begin{aligned}
       \operatorname{rec} {(x)} \cdot x
       = {} &
       \left( \frac{a}{a^2 + b^2}
       + \mathrm{i} \frac{-b}{a^2 + b^2} \right)
       (a + \mathrm{i} b)
       \\
       = {} &
       \left(
         \frac{a}{a^2 + b^2} a - \frac{-b}{a^2 + b^2} b
       \right)
       + \mathrm{i}
       \left(
         \frac{a}{a^2 + b^2} b + \frac{-b}{a^2 + b^2} a
       \right)
       \\
       = {} &
       \frac{a a - (-b) b}{a^2 + b^2}
       + \mathrm{i} \frac{a b + (-b) a}{a^2 + b^2}
       \\
       = {} &
       \frac{a^2 + b^2}{a^2 + b^2}
       + \mathrm{i} \frac{a b - a b}{a^2 + b^2}
       \\
       = {} &
       1 + \mathrm{i} 0
       \\
       = {} &
       1.
     \end{aligned}
     \]

(11) 我证 \(x (y + z) = x y + x z\)；
     我留另一部分为您的习题
     （注意，您能用交换律：\(
           (x + y) z = z (x + y) = z x + z y = x z + y z
       \)）。
     注意，
     \[
          \begin{aligned}
            x (y + z)
            = {} &
            (a + \mathrm{i} b)
            ((c + \mathrm{i} d) + (e + \mathrm{i} f))
            \\
            = {} &
            (a + \mathrm{i} b)
            ((c + e) + \mathrm{i} (d + f))
            \\
            = {} &
            (a (c + e) - b (d + f))
       + \mathrm{i} (a (d + f) + b (c + e))
       \\
       = {} &
       ((ac + ae) - (bd + bf))
       + \mathrm{i} ((ad + af) + (bc + be))
       \\
       = {} &
       ((ac + ae) + (-bf - bd))
       + \mathrm{i} ((ad + af) + (bc + be))
       \\
       = {} &
       ((ac + ae) + (-bd - bf))
       + \mathrm{i} ((ad + af) + (bc + be))
       \\
       = {} &
       (((ac + ae) - bd) - bf)
       + \mathrm{i} (((ad + af) + bc) + be)
       \\
       = {} &
       ((ac + (ae - bd)) - bf)
       + \mathrm{i} ((ad + (af + bc)) + be)
       \\
       = {} &
       ((ac + (-bd + ae)) - bf)
       + \mathrm{i} ((ad + (bc + af)) + be)
       \\
       = {} &
       (((ac - bd) + ae) - bf)
       + \mathrm{i} (((ad + bc) + af) + be)
       \\
       = {} &
       ((ac - bd) + (ae - bf))
       + \mathrm{i} ((ad + bc) + (af + be))
       \\
       = {} &
       ((ac - bd) + \mathrm{i} (ad + bc))
       + ((ae - bf) + \mathrm{i} (af + be))
       \\
       = {} &
       (a + \mathrm{i} b) (c + \mathrm{i} d)
       + (a + \mathrm{i} b) (e + \mathrm{i} f)
       \\
       = {} &
       x y + x z.
     \end{aligned}
     \]
:::

由此，我们可定义复数的减法与除法。

::: definition
设复数 \(y = c + \mathrm{i} d\)，
其中，\(c\)、\(d\) 是实数。
定义 \(y\) 的**相反数**
\[
\begin{aligned}
  -y = -c + \mathrm{i} (-d).
\end{aligned}
\]
若 \(y \neq 0\)，定义 \(y\) 的**倒数**
\[
\begin{aligned}
  \operatorname{rec} {(y)}
  = \frac{c}{c^2 + d^2}
  + \mathrm{i} \frac{-d}{c^2 + d^2}.
\end{aligned}
\]
:::

\(\operatorname{rec}\) 来自 <lang en>reciprocal</lang>（英语）。

::: definition
设 \(x\)、\(y\) 是复数。
定义 \(x\) 与 \(y\) 的差
\[
\begin{aligned}
  x - y = x + (-y).
\end{aligned}
\]
若 \(y \neq 0\)，定义 \(x\) 与 \(y\) 的比
\[
\begin{aligned}
  \frac{x}{y} = x \cdot \operatorname{rec} {(y)}.
\end{aligned}
\]
:::

::: example
我们计算复数
\(2 + \mathrm{i} 5\)、\(3 + \mathrm{i} 7\)
的差与比。
减法是简单的：
\[
\begin{aligned}
  (2 + \mathrm{i} 5) - (3 + \mathrm{i} 7)
  = {} &
  (2 + \mathrm{i} 5) + (-(3 + \mathrm{i} 7))
  \\
  = {} &
  (2 + \mathrm{i} 5) + (-3 + \mathrm{i} (-7))
  \\
  = {} &
  (2 - 3) + \mathrm{i} (5 - 7)
  \\
  = {} &
  {-1} + \mathrm{i} (-2)
  \\
  = {} &
  {-1} - \mathrm{i} 2.
\end{aligned}
\]
除法不是难的：
\[
\begin{aligned}
  \frac{2 + \mathrm{i} 5}{3 + \mathrm{i} 7}
  = {} &
  (2 + \mathrm{i} 5)
  \cdot
  \operatorname{rec} {(3 + \mathrm{i} 7)}
  \\
  = {} &
  (2 + \mathrm{i} 5)
  \left(\frac{3}{3^2 + 7^2}
  + \mathrm{i} \frac{-7}{3^2 + 7^2}\right)
  \\
  = {} &
  \left(
    2 \cdot \frac{3}{58} - 5 \cdot \frac{-7}{58}
  \right)
  + \mathrm{i}
  \left(
    2 \cdot \frac{-7}{58} + 5 \cdot \frac{3}{58}
  \right)
  \\
  = {} &
  \frac{2 \cdot 3 - 5 \cdot (-7)}{58}
  + \mathrm{i}
  \frac{2 \cdot (-7) + 5 \cdot 3}{58}
  \\
  = {} &
  \frac{41}{58} + \mathrm{i} \frac{1}{58}.
\end{aligned}
\]
:::

我们知道，对实数 \(x\)，
\(x\) 的平方，\(x^2\)，是 \(x \cdot x\)。
类似地，我们也能对复数 \(x\)
定义 \(x\) 的平方：
\(x^2 = x \cdot x\)。
一般地，

::: definition
设 \(x\) 是复数。
设 \(m\) 是自然数。
定义 \(x\) 的 \(m\) 次方
\[
\begin{aligned}
  x^m =
  \begin{cases}
    1,         & m = 0;    \\
    x^{m-1} x, & m \geqslant 1.
  \end{cases}
\end{aligned}
\]
:::

注意，对任何数 \(x\)，
\[
\begin{aligned}
  x^1 = x^0 \cdot x = 1 \cdot x = x.
\end{aligned}
\]
并且，
\[
\begin{aligned}
  x^2 = x^1 \cdot x = x \cdot x.
\end{aligned}
\]

我们可以证明（见附录 B，节 4），
对任何复数 \(x\)，\(y\)，
与任何自然数 \(m\)、\(\ell\)，
\[
\begin{aligned}
  x^{\ell + m} & = x^\ell x^m, \\
  (x^\ell)^m   & = x^{\ell m}, \\
  (x y)^m      & = x^m y^m.
\end{aligned}
\]

若 \(x \neq 0\)，我们还能讨论它的负整数次方：

::: definition
设 \(x\) 是复数，且 \(x \neq 0\)。
设 \(m\) 是整数。

(1) 设 \(m \geqslant 0\)。
    则 \(x\) 的 \(m\) 次方 \(x^m\) 已被定义。

(2) 设 \(m < 0\)。
    我们定义 \(x\) 的 \(m\) 次方 \(x^m\)
    为 \(x\) 的倒数 \(\operatorname{rec} {(x)}\)
    的 \(-m\) 次方 \((\operatorname{rec} {(x)})^{-m}\)。
:::

注意，若 \(x \neq 0\)，则
\[
\begin{aligned}
  x^{-1}
  = (\operatorname{rec} {(x)})^{-(-1)}
  = (\operatorname{rec} {(x)})^{1}
  = \operatorname{rec} {(x)}.
\end{aligned}
\]
于是，我们也用 \(x^{-1}\) 表示 \(x\) 的倒数。

我们可以证明（见附录 B，节 4），
对任何不等于 \(0\) 的复数 \(x\)，\(y\)，
与任何整数 \(m\)、\(\ell\)，
\[
\begin{aligned}
  x^{\ell + m} & = x^\ell x^m, \\
  (x^\ell)^m   & = x^{\ell m}, \\
  (x y)^m      & = x^m y^m.
\end{aligned}
\]

您或许会问，跟实数比，复数如何不同。
为回答它，我们考虑更多的律。

::: theorem
设 \(x\)、\(y\)、\(z\) 是复数。
复数的加法与乘法适合消去律。
具体地：

(1) 若 \(x + y = x + z\)，或 \(y + x = z + x\)，
    则 \(y = z\)。

(2) 设 \(x \neq 0\)。
    若 \(x y = x z\)，或 \(y x = z x\)，
    则 \(y = z\)。
:::

::: proof
(1) 我证明当 \(x + y = x + z\) 时的情形；
    我留另一部分为您的习题。
    （注意，您可以用交换律：
    若 \(y + x = z + x\)，
    则 \(x + y = y + x = z + x = x + z\)。）
    注意，
    \[
    \begin{aligned}
      y
      = {} & 0 + y          \\
      = {} & ((-x) + x) + y \\
      = {} & (-x) + (x + y) \\
      = {} & (-x) + (x + z) \\
      = {} & ((-x) + x) + z \\
      = {} & 0 + z          \\
      = {} & z.
    \end{aligned}
    \]

(2) 我证明当 \(x \neq 0\)，且 \(x y = x z\) 时的情形；
    我留另一部分为您的习题。
    （注意，您可以用交换律：
    若 \(y x = z x\)，
    则 \(x y = y x = z x = x z\)。）
    注意，
    \[
    \begin{aligned}
      y
      = {} & 1 y          \\
      = {} & (x^{-1} x) y \\
      = {} & x^{-1} (x y) \\
      = {} & x^{-1} (x z) \\
      = {} & (x^{-1} x) z \\
      = {} & 1 z          \\
      = {} & z.
    \end{aligned}
    \]
:::

由此可见，对任何复数 \(x\)，
若复数 \(y\)、\(z\) 适合
\(y + x = 0 = x + y\)，
且 \(z + x = 0 = x + z\)，
则由消去律，\(y = z\)。
类似地，对任何非零的复数 \(x\)，
若复数 \(y\)、\(z\) 适合
\(y x = 1 = x y\)，
且 \(z x = 1 = x z\)，
则由消去律，\(y = z\)。

::: theorem
对任何复数 \(x\)，
\(0x = 0 = x0\)。
:::

::: proof
我证明 \(0x = 0\)；
我留另一部分为您的习题。

注意，\(0 + 0 = 0\)。
由分配律，\(0x + 0x = (0 + 0)x = 0x\)。
注意，\(0x = 0x + 0\)。
则 \(0x + 0x = 0x + 0\)。
由消去律，\(0x = 0\)。
:::

::: theorem
对任何复数 \(x\)，\(y\)，
\((-x) (-y) = x y\)。
:::

::: proof
一方面，
\(x (-y) + (-x) (-y) = (x + (-x)) (-y) = 0 (-y) = 0\)。
另一方面，
\(x (-y) + x y = x (-y + y) = x 0 = 0\)。
则 \(x (-y) + (-x) (-y) = x (-y) + x y\)。
由消去律，\((-x) (-y) = x y\)。
:::

由此可见，对任何不等于 \(0\) 的实数 \(x\)，
\(x^2 > 0\)：
若 \(x > 0\)，则 \(x^2 = x \cdot x\)
是 \(2\) 个正数 \(x\)、\(x\) 的积，
故 \(x^2 > 0\)；
若 \(-x > 0\)，则
\(x^2 = x \cdot x = (-x) \cdot (-x)\)
是 \(2\) 个正数 \(-x\)、\(-x\) 的积，
故 \(x^2 > 0\)。

回想，对任何实数 \(x\)，
在“\(x = 0\)”，
“\(x > 0\)”
与“\(-x > 0\)”，
存在且只存在一个，其是对的。
我们说，实数的大小关系跟加法（或乘法）是相容的：
\(2\) 个大于 \(0\) 的数的和（或积）大于 \(0\)。
不过，我们似乎未提复数的大小关系。
为何？

::: theorem
我们不能为复数定义跟复数的乘法相容的大小关系。
:::

::: proof
反设，我们能为复数定义跟复数的乘法相容的大小关系。
考虑 \(\mathrm{i}\)。
那么，
在“\(\mathrm{i} = 0\)”，
“\(\mathrm{i} > 0\)”
与“\(-\mathrm{i} > 0\)”，
存在且只存在一个，其是对的。
注意，\(\mathrm{i} = 0 + \mathrm{i} 1\)，
而 \(0 = 0 + \mathrm{i} 0\)，
且 \(1 \neq 0\)，
故 \(\mathrm{i} \neq 0\)。

“\(\mathrm{i} > 0\)”会是对的吗？
若它是对的，则
\(\mathrm{i} \mathrm{i} = -1 > 0\)。
不过，注意，
\((-1) (-1) = 1 \cdot 1 = 1 > 0\)。
则 \(1 > 0\)，且 \(-1 > 0\)。
这是矛盾。

“\(-\mathrm{i} > 0\)”会是对的吗？
若它是对的，则
\((-\mathrm{i}) (-\mathrm{i})
  = \mathrm{i} \mathrm{i} = -1 > 0\)。
不过，注意，
\((-1) (-1) = 1 \cdot 1 = 1 > 0\)。
则 \(1 > 0\)，且 \(-1 > 0\)。
这是矛盾。

看来，我们不能为复数定义跟复数的乘法相容的大小关系。
:::

回想，不存在可比数，其的平方等于 \(2\)，
但存在实数，其的平方等于 \(2\)。
我们知道，不存在实数，其的平方等于 \(-1\)，
因为实数 \(x\) 的平方 \(x^2\) 大于或等于 \(0\)，
而 \(-1 < 0\)。
不过，\(\mathrm{i}^2 = -1\)。
进一步地，

::: theorem
设 \(z\) 是复数。
存在复数 \(w\)，使 \(w^2 = z\)。
:::

::: proof
设 \(z = c + \mathrm{i} d\)，
其中，\(c\)、\(d\) 是实数。

若 \(d = 0\)，且 \(c \geqslant 0\)，
则 \(\big( \sqrt{c} \big)^2 = c = z\)。
若 \(d = 0\)，且 \(c < 0\)，
则 \(\big( \mathrm{i} \sqrt{-c} \big)^2
  = \mathrm{i}^2 (-c) = c = z\)。

设 \(d > 0\)。
我们设 \(w = a + \mathrm{i} b\)，
其中，\(a\)、\(b\) 是实数，
且 \(w^2 = z\)。
则
\[
\begin{aligned}
  w^2
  = (a + \mathrm{i} b) (a + \mathrm{i} b)
  = (a a - b b) + \mathrm{i} (a b + b a)
  = (a^2 - b^2) + \mathrm{i} (2 a b).
\end{aligned}
\]
则 \(a^2 - b^2 = c\)，且 \(2 a b = d\)。
则
\[
\begin{aligned}
  (a^2 + b^2)^2
  = {} &
  (a^2)^2 + 2 a^2 b^2 + (b^2)^2
  \\
  = {} &
  (a^2)^2 - 2 a^2 b^2 + (b^2)^2 + 4 a^2 b^2
  \\
  = {} &
  (a^2 - b^2)^2 + (2 a b)^2
  \\
  = {} &
  c^2 + d^2.
\end{aligned}
\]
注意，\(a^2 + b^2 \geqslant 0\)。
则 \(a^2 + b^2 = \sqrt{c^2 + d^2}\)。
则
\[
\begin{aligned}
  a^2 & =
  \frac{(a^2 + b^2) + (a^2 - b^2)}{2}
  = \frac{\sqrt{c^2 + d^2} + c}{2},
  \\
  b^2 & =
  \frac{(a^2 + b^2) - (a^2 - b^2)}{2}
  = \frac{\sqrt{c^2 + d^2} - c}{2}.
\end{aligned}
\]
注意，\(a b = d/2 > 0\)。
则要么 \(a\)、\(b\) 都是正数，
要么 \(a\)、\(b\) 都是负数。
则
\[
\begin{aligned}
  a
  = \pm \sqrt{a^2}
  = \pm \sqrt{\frac{\sqrt{c^2 + d^2} + c}{2}},
  \quad
  b
  = \pm \sqrt{b^2}
  = \pm \sqrt{\frac{\sqrt{c^2 + d^2} - c}{2}},
\end{aligned}
\]
其中，若我们为 \(a\) 选 \(+\)（或 \(-\)），
则我们也为 \(b\) 选 \(+\)（或 \(-\)）。
我们验证，如此确定的 \(a\)、\(b\) 适合
\((a + \mathrm{i} b)^2
    = (a^2 - b^2) + \mathrm{i} (2 a b)
  = c + \mathrm{i} d\)：
\[
\begin{aligned}
  a^2 - b^2
  = {} &
  \left(\pm \sqrt{\frac{\sqrt{c^2 + d^2} + c}{2}}\right)^2
  -
  \left(\pm \sqrt{\frac{\sqrt{c^2 + d^2} - c}{2}}\right)^2
  \\
  = {} &
  \left(\sqrt{\frac{\sqrt{c^2 + d^2} + c}{2}}\right)^2
  -
  \left(\sqrt{\frac{\sqrt{c^2 + d^2} - c}{2}}\right)^2
  \\
  = {} &
  \frac{\sqrt{c^2 + d^2} + c}{2}
  - \frac{\sqrt{c^2 + d^2} - c}{2}
  \\
  = {} &
  c,
\end{aligned}
\]
且（注意，\(d \geqslant 0\)）
\[
\begin{aligned}
  2 a b
  = {} &
  2
  \left(\pm \sqrt{\frac{\sqrt{c^2 + d^2} + c}{2}}\right)
  \left(\pm \sqrt{\frac{\sqrt{c^2 + d^2} - c}{2}}\right)
  \\
  = {} &
  \sqrt{4}
  \cdot \sqrt{\frac{\sqrt{c^2 + d^2} + c}{2}}
  \cdot \sqrt{\frac{\sqrt{c^2 + d^2} - c}{2}}
  \\
  = {} &
  \sqrt{4 \cdot \frac{\sqrt{c^2 + d^2} + c}{2}
  \cdot \frac{\sqrt{c^2 + d^2} - c}{2}}
  \\
  = {} &
  \sqrt{(\sqrt{c^2 + d^2} + c) (\sqrt{c^2 + d^2} - c)}
  \\
  = {} &
  \sqrt{\big(\sqrt{c^2 + d^2}\big)^2 - c^2}
  \\
  = {} &
  \sqrt{(c^2 + d^2) - c^2}
  \\
  = {} &
  \sqrt{d^2}
  \\
  = {} &
  d.
\end{aligned}
\]

最后，设 \(d < 0\)。
则 \(-d > 0\)。
设 \(p = -z = -c + \mathrm{i} (-d)\)。
由前面的讨论，存在复数 \(q\)，
使 \(q^2 = p = -z\)。
则 \((
    \mathrm{i} q)^2
    = \mathrm{i}^2 q^2
    = (-1) (-z)
    = 1 z
    = z
  \)。
:::

::: example
设 \(z = 5 + \mathrm{i} 12\)。
我们找复数 \(w = a + \mathrm{i} b\)
（其中，\(a\)、\(b\) 是实数），
使 \(w^2 = z\)。

注意，\(w^2 = (a^2 - b^2) + \mathrm{i} (2 a b)\)。
则 \(a^2 - b^2 = 5\)，
且 \(2 a b = 12\)。
则
\[
\begin{aligned}
  (a^2 + b^2)^2
  = {} &
  (a^2 - b^2)^2 + 4 a^2 b^2
  \\
  = {} &
  (a^2 - b^2)^2 + (2 a b)^2
  \\
  = {} &
  5^2 + 12^2
  \\
  = {} &
  169
  \\
  = {} &
  13^2.
\end{aligned}
\]
则 \(a^2 + b^2 = 13\)。
则 \(a^2 = 9\)，且 \(b^2 = 4\)。
注意，\(a b = 12/2 > 0\)。
则 \(a = \pm 3\)，且 \(b = \pm 2\)。
则 \(a + \mathrm{i} b\)
等于 \(3 + \mathrm{i} 2\)
或 \(-3 - \mathrm{i} 2\)。

不难验证，
\((3 + \mathrm{i} 2)^2
    = (3^2 - 2^2) + \mathrm{i} (2 \cdot 3 \cdot 2)
  = 5 + \mathrm{i} 12\)，
且
\((-3 - \mathrm{i} 2)^2
    = (3 + \mathrm{i} 2)^2
  = 5 + \mathrm{i} 12\)。
:::

在中学，我们知道，系数为实数的
\(1\) 元 \(1\) 次方程
\(a_0 x + a_1 = 0\)
（其中，\(a_0\)、\(a_1\) 是实数，
且 \(a_0 \neq 0\)）
有实数解 \(x = -a_1 / a_0\)，
但系数为实数的 \(1\) 元 \(2\) 次方程
\(a_0 x^2 + a_1 x + a_2 = 0\)
（其中，\(a_0\)、\(a_1\)、\(a_2\) 是实数，
且 \(a_0 \neq 0\)）
不一定有实数解，
如 \(x^2 + 1 = 0\)。
（注意，不存在实数，其的平方等于 \(-1\)。）
不过，

::: theorem
设 \(a_0\)、\(a_1\)、\(a_2\) 是复数，
且 \(a_0 \neq 0\)。
则存在复数 \(z\)，使
\[
\begin{aligned}
  a_0 z^2 + a_1 z + a_2 = 0.
\end{aligned}
\]
:::

::: proof
注意，
\[
\begin{aligned}
  a_0 x^2 + a_1 x + a_2
  = {} &
  \frac{1}{4a_0} (4 a_0 a_0 x^2 + 4 a_0 a_1 x + 4 a_0 a_2)
  \\
  = {} &
  \frac{1}{4a_0} ((2 a_0 x)^2 + 2 (2 a_0 x) a_1 + 4 a_0 a_2)
  \\
  = {} &
  \frac{1}{4a_0} ((2 a_0 x)^2 + 2 (2 a_0 x) a_1 + a_1^2 - a_1^2 + 4 a_0 a_2)
  \\
  = {} &
  \frac{1}{4a_0} ((2 a_0 x + a_1)^2 - a_1^2 + 4 a_0 a_2)
  \\
  = {} &
  \frac{1}{4a_0} ((2 a_0 x + a_1)^2 - (a_1^2 - 4 a_0 a_2)).
\end{aligned}
\]
注意，\(a_1^2 - 4 a_0 a_2\) 是复数。
则存在复数 \(t\)，使 \(t^2 = a_1^2 - 4 a_0 a_2\)。
则
\[
\begin{aligned}
  a_0 x^2 + a_1 x + a_2
  = {} &
  \frac{1}{4a_0} ((2 a_0 x + a_1)^2 - t^2)
  \\
  = {} &
  \frac{1}{4a_0} (2 a_0 x + a_1 + t) (2 a_0 x + a_1 - t)
  \\
  = {} &
  a_0
  \left( x - \frac{-a_1 - t}{2 a_0} \right)
  \left( x - \frac{-a_1 + t}{2 a_0} \right).
\end{aligned}
\]
于是，若 \(z = (-a_1 \pm t) / (2 a_0)\)，
则 \(a_0 z^2 + a_1 z + a_2 = 0\)。
:::

当然，系数为复数的 \(1\) 元 \(1\) 次方程
\(a_0 x + a_1 = 0\)
（其中，\(a_0\)、\(a_1\) 是复数，
且 \(a_0 \neq 0\)）
也有复数解 \(x = -a_1 / a_0\)，
因为
\[
\begin{aligned}
  a_0 \cdot (-a_1 / a_0) + a_1
  = -a_1 + a_1 = 0.
\end{aligned}
\]

最后，有一件事，其值得提。

设 \(a_0 x + a_1\)（\(a_0 \neq 0\)）是 \(1\) 次式。
则
\[
\begin{aligned}
  a_0 x + a_1
  = a_0 \left(x + \frac{a_1}{a_0}\right)
  = a_0 \left(x - \frac{-a_1}{a_0}\right).
\end{aligned}
\]

设 \(a_0 x^2 + a_1 x + a_2\)（\(a_0 \neq 0\)）
是 \(2\) 次式。
则
\[
\begin{aligned}
  a_0 x^2 + a_1 x + a_2
  = a_0
  \left( x - \frac{-a_1 - t}{2 a_0} \right)
  \left( x - \frac{-a_1 + t}{2 a_0} \right),
\end{aligned}
\]
其中，复数 \(t\) 适合 \(t^2 = a_1^2 - 4 a_0 a_2\)。

由此，我们得

::: theorem
设 \(n\) 是不超过 \(2\) 的正整数。
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
