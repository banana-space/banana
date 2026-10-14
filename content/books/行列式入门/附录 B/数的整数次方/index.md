---
title: 数的整数次方
---

为简便地表示一个数自乘多次，
人们聪明地作了次方。

::: definition
设 \(x\) 是数。
设 \(m\) 是非负整数。
定义 \(x\) 的 \(m\) **次方**
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

回想，对任何数 \(x\)，\(1 x = x = x 1\)。

不难看出，对任何数 \(x\)，\(x^1 = x^0 x = 1 x = x\)。

::: example
设 \(m\) 是非负整数。
我们用数学归纳法证明，
\(1^m = 1\)。

作命题 \(P(m)\)：
\(1^m = 1\)。
我们的目标是，
对任何非负整数 \(m\)，\(P(m)\) 是对的。

\(P(0)\) 是对的，因为
\(1^0 = 1\)。

假定 \(P(m)\) 是对的。
我们由此证明，\(P(m+1)\) 也是对的。
注意，
\[
\begin{aligned}
  1^{m+1} = 1^m \cdot 1 = 1 \cdot 1 = 1.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: example
设 \(x\)、\(y\) 是数。
设 \(x y = y x\)。
设 \(m\) 是非负整数。
我们用数学归纳法证明，
\(y^m x = x y^m\)。

作命题 \(P(m)\)：\(y^m x = x y^m\)。
我们的目标是，
对任何非负整数 \(m\)，\(P(m)\) 是对的。

\(P(0)\) 是对的，因为
\(y^0 x = 1 x = x 1 = x y^0\)。

假定 \(P(m)\) 是对的。
我们由此证明，\(P(m+1)\) 也是对的。
注意，
\[
\begin{aligned}
  y^{m+1} x
  = (y^m y) x
  = y^m (y x)
  = y^m (x y)
  = (y^m x) y
  = (x y^m) y
  = x (y^m y)
  = x y^{m+1}.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

::: theorem
设 \(x\)、\(y\) 是数。
设 \(m\)、\(\ell\) 是非负整数。
则

(1) \(x^{\ell+m} = x^{\ell} x^{m}\)；

(2) \((x^{\ell})^{m} = x^{\ell m}\)；

(3) \((x y)^{m} = x^m y^m\)，若 \(x y = y x\)。
:::

::: proof
我们用数学归纳法证明它们。

(1) 作命题 \(P(m)\)：
    \(x^{\ell+m} = x^{\ell} x^{m}\)。
    我们的目标是，
    对任何非负整数 \(m\)，\(P(m)\) 是对的。

\(P(0)\) 是对的，因为
\(x^{\ell+0} = x^{\ell} = x^{\ell} 1 = x^{\ell} x^{0}\)。

假定 \(P(m)\) 是对的。
我们由此证明，\(P(m+1)\) 也是对的。
注意，
\[
\begin{aligned}
  x^{\ell+(m+1)}
  = x^{(\ell+m)+1}
  = x^{\ell+m} x
  = (x^{\ell} x^{m}) x
  = x^{\ell} (x^{m} x)
  = x^{\ell} x^{m+1}.
\end{aligned}
\]
所以，\(P(m+1)\) 是对的。
由数学归纳法，待证的命题成立。

(2) 作命题 \(Q(m)\)：
    \((x^{\ell})^{m} = x^{\ell m}\)。
    我们的目标是，
    对任何非负整数 \(m\)，\(Q(m)\) 是对的。

\(Q(0)\) 是对的，因为
\((x^{\ell})^{0} = 1 = x^{0} = x^{\ell 0}\)。

假定 \(Q(m)\) 是对的。
我们由此证明，\(Q(m+1)\) 也是对的。
注意，
\[
\begin{aligned}
  (x^{\ell})^{m+1}
  = (x^{\ell})^{m} x^{\ell}
  = x^{\ell m} x^{\ell}
  = x^{\ell m + \ell}
  = x^{\ell (m+1)}.
\end{aligned}
\]
所以，\(Q(m+1)\) 是对的。
由数学归纳法，待证的命题成立。

(3) 设 \(x y = y x\)。
    作命题 \(R(m)\)：
    \((x y)^{m} = x^{m} y^{m}\)。
    我们的目标是，
    对任何非负整数 \(m\)，\(R(m)\) 是对的。

\(R(0)\) 是对的，因为
\((x y)^0 = 1 = 1 \cdot 1 = x^0 y^0\)。

假定 \(R(m)\) 是对的。
我们由此证明，\(R(m+1)\) 也是对的。
注意，
\[
\begin{aligned}
  (x y)^{m+1}
  = {} &
  (x y)^{m} (x y)
  = (x^{m} y^{m}) (x y)
  = ((x^{m} y^{m}) x) y
  = (x^{m} (y^{m} x)) y
  \\
  = {} &
  (x^{m} (x y^{m})) y
  = ((x^{m} x) y^{m}) y
  = x^{m+1} (y^{m} y)
  = x^{m+1} y^{m+1}.
\end{aligned}
\]
所以，\(R(m+1)\) 是对的。
由数学归纳法，待证的命题成立。
:::

以上，我们讨论了数的非负整数次方。

若一个数有倒数，我们还能讨论这个数的负整数次方，
故我们能讨论它的整数次方。

回想，对任何不是 \(0\) 的数 \(x\)，
存在数 \(u\)，使 \(u x = 1 = x u\)。

::: theorem
设 \(x\)、\(u\)、\(v\) 是数，
且 \(u x = 1 = x v\)。
则 \(u = v\)。
:::

::: proof
\[
u = u 1 = u (x v) = (u x) v = 1 v = v.
\]
:::

于是，
适合 \(u x = 1 = x u\) 的数 \(u\) 是唯一的。
我们说，\(u\) 是 \(x\) 的**倒数**。
我们记 \(u\) 为 \(\operatorname{rec} {(x)}\)。
\(\operatorname{rec}\) 来自 <lang en>reciprocal</lang>（英语）。

::: definition
设 \(x\) 是数，且 \(x\) 有倒数。
设 \(m\) 是整数。

(1) 设 \(m \geqslant 0\)。
    则 \(x\) 的 \(m\) 次方 \(x^m\) 已被定义。

(2) 设 \(m < 0\)。
    我们定义 \(x\) 的 \(m\) 次方 \(x^m\)
    为 \(x\) 的倒数 \(\operatorname{rec} {(x)}\)
    的 \(-m\) 次方 \((\operatorname{rec} {(x)})^{-m}\)。
:::

::: example
设 \(m\) 是负整数。
设 \(x\) 是 \(1\) 或 \(-1\)。
注意，\(x\) 适合 \(x x = 1 = x x\)。
则 \(\operatorname{rec} {(x)} = x\)。
故 \(x^m = x^{-m}\)。

特别地，\(1^m = 1^{-m} = 1\)。
由此可见，对任何整数 \(n\)，\(1^n = 1\)。
:::

不难看出，若 \(x\) 有倒数，
则 \(x^{-1} = (\operatorname{rec} {(x)})^{-(-1)}
  = (\operatorname{rec} {(x)})^{1}
= \operatorname{rec} {(x)}\)。
则 \(x^{-1} x = 1 = x x^{-1}\)。

有倒数的数的整数次方也有
跟数的非负整数次方的性质类似的性质。
不过，它们的证明是较复杂的。
为此，我们先研究倒数的性质。

::: theorem
设 \(x\)、\(y\) 是数，且都有倒数。
设 \(z\) 是数。
设 \(m\) 是非负整数。
则

(1) \(\operatorname{rec} {(x)}\) 有倒数，且
    \(\operatorname{rec} {(\operatorname{rec} {(x)})} = x\)；

(2) \(x^m\) 有倒数，且
    \(\operatorname{rec} {(x^m)} = (\operatorname{rec} {(x)})^m\)；

(3) \(x y\) 有倒数，且
    \(\operatorname{rec} {(x y)}
      = \operatorname{rec} {(y)} \operatorname{rec} {(x)}\)；

(4) \(\operatorname{rec} {(y)}\, z
      = z \operatorname{rec} {(y)}\)，
    若 \(z y = y z\)；

(5) \(\operatorname{rec} {(x)} \operatorname{rec} {(y)}
      = \operatorname{rec} {(y)} \operatorname{rec} {(x)}\)，
    若 \(x y = y x\)。
:::

::: proof
(1) 注意，既然
    \(\operatorname{rec} {(x)}\, x
      = 1 = x \operatorname{rec} {(x)}\)，
    则当然
    \(x \operatorname{rec} {(x)} = 1
      = \operatorname{rec} {(x)}\, x\)。
    倒数是唯一的，故
    \(\operatorname{rec} {(\operatorname{rec} {(x)})} = x\)。

(2) 注意，
    \(\operatorname{rec} {(x)}\, x
      = 1 = x \operatorname{rec} {(x)}\)，
    故
    \[
    \begin{aligned}
      &
      (\operatorname{rec} {(x)})^m x^m
      = (\operatorname{rec} {(x)} x)^m
      = 1^m
      = 1,
      \\
      &
      x^m (\operatorname{rec} {(x)})^m
      = (x \operatorname{rec} {(x)})^m
      = 1^m
      = 1.
    \end{aligned}
    \]
    倒数是唯一的，故
    \(\operatorname{rec} {(x^m)} = (\operatorname{rec} {(x)})^m\)。

(3) 注意，
    \[
    \begin{aligned}
      (\operatorname{rec} {(y)} \operatorname{rec} {(x)})
      (x y)
      = {} &
      ((\operatorname{rec} {(y)} \operatorname{rec} {(x)}) x)
      y
      \\
      = {} &
      (\operatorname{rec} {(y)} (\operatorname{rec} {(x)}\, x))
      y
      \\
      = {} &
      (\operatorname{rec} {(y)}\, 1) y
      \\
      = {} &
      \operatorname{rec} {(y)}\, y
      \\
      = {} &
      1,
    \end{aligned}
    \]
    且
    \[
    \begin{aligned}
      (x y)
      (\operatorname{rec} {(y)} \operatorname{rec} {(x)})
      = {} &
      x
      (y (\operatorname{rec} {(y)} \operatorname{rec} {(x)}))
      \\
      = {} &
      x
      ((y \operatorname{rec} {(y)}) \operatorname{rec} {(x)})
      \\
      = {} &
      x (1 \operatorname{rec} {(x)})
      \\
      = {} &
      x \operatorname{rec} {(x)}
      \\
      = {} &
      1.
    \end{aligned}
    \]
    倒数是唯一的，故
    \(\operatorname{rec} {(x y)}
      = \operatorname{rec} {(y)} \operatorname{rec} {(x)}\)。

(4) 设 \(z y = y z\)。
    则
    \[
    \begin{aligned}
      \operatorname{rec} {(y)}\, z
      = {} &
      \operatorname{rec} {(y)}\,
      (z 1)
      \\
      = {} &
      \operatorname{rec} {(y)}\,
      (z (y \operatorname{rec} {(y)}))
      \\
      = {} &
      \operatorname{rec} {(y)}\,
      ((z y) \operatorname{rec} {(y)})
      \\
      = {} &
      \operatorname{rec} {(y)}\,
      ((y z) \operatorname{rec} {(y)})
      \\
      = {} &
      (\operatorname{rec} {(y)}\, (y z))
      \operatorname{rec} {(y)}
      \\
      = {} &
      ((\operatorname{rec} {(y)}\, y) z)
      \operatorname{rec} {(y)}
      \\
      = {} &
      (1 z) \operatorname{rec} {(y)}
      \\
      = {} &
      z \operatorname{rec} {(y)}.
    \end{aligned}
    \]

(5) 设 \(x y = y x\)。
    则由 (4)，
    \(\operatorname{rec} {(y)}\, x
      = x \operatorname{rec} {(y)}\)。
    视 \(\operatorname{rec} {(y)}\) 为 \(w\)。
    则 \(w x = x w\)。
    则再由 (4)，
    \(\operatorname{rec} {(x)}\, w
      = w \operatorname{rec} {(x)}\)。
    故
    \(\operatorname{rec} {(x)} \operatorname{rec} {(y)}
      = \operatorname{rec} {(y)} \operatorname{rec} {(x)}\)。
:::

::: theorem
设 \(x\)、\(y\) 是数，且都有倒数。
设 \(m\)、\(\ell\) 是整数。
则

(1) \(x^{\ell+m} = x^{\ell} x^{m}\)；

(2) \((x^{\ell})^{m} = x^{\ell m}\)；

(3) \((x y)^{m} = x^m y^m\)，若 \(x y = y x\)。
:::

::: proof
(1) 分类讨论。
    设 \(\ell \geqslant 0\)，且 \(m \geqslant 0\)。
    则我们已证此情形。

设 \(\ell \geqslant 0\)，\(m < 0\)，且 \(\ell + m \geqslant 0\)。
则 \(-m > 0\)。
注意，
\(x \operatorname{rec} {(x)}
  = 1 = \operatorname{rec} {(x)}\, x\)。
则
\(1 = 1^{-m}
    = (x \operatorname{rec} {(x)})^{-m}
    = x^{-m} (\operatorname{rec} {(x)})^{-m}
    = x^{-m} x^{-(-m)}
  = x^{-m} x^m\)。
则
\[
\begin{aligned}
  x^{\ell + m}
  = x^{\ell + m} 1
  = x^{\ell + m} (x^{-m} x^m)
  = (x^{\ell + m} x^{-m}) x^m
  = x^{(\ell + m) + (-m)} x^m
  = x^\ell x^m.
\end{aligned}
\]

设 \(\ell \geqslant 0\)，\(m < 0\)，且 \(\ell + m < 0\)。
则 \(-m > 0\)，且
\((-\ell) + (-m) = -(\ell + m) > 0\)。
注意，
\(x \operatorname{rec} {(x)}
  = 1 = \operatorname{rec} {(x)}\, x\)。
则
\(1 = 1^\ell = (x \operatorname{rec} {(x)})^\ell
  = x^\ell (\operatorname{rec} {(x)})^\ell\)。
则
\[
\begin{aligned}
  x^{\ell + m}
  = {} &
  (\operatorname{rec} {(x)})^{-(\ell + m)}
  \\
  = {} &
  (\operatorname{rec} {(x)})^{(-\ell) + (-m)}
  \\
  = {} &
  1 (\operatorname{rec} {(x)})^{(-\ell) + (-m)}
  \\
  = {} &
  (x^\ell (\operatorname{rec} {(x)})^\ell) (\operatorname{rec} {(x)})^{(-\ell) + (-m)}
  \\
  = {} &
  x^\ell ((\operatorname{rec} {(x)})^\ell (\operatorname{rec} {(x)})^{(-\ell) + (-m)})
  \\
  = {} &
  x^\ell (\operatorname{rec} {(x)})^{\ell + ((-\ell) + (-m))}
  \\
  = {} &
  x^\ell (\operatorname{rec} {(x)})^{-m}
  \\
  = {} &
  x^\ell x^m.
\end{aligned}
\]

设 \(\ell < 0\)，且 \(m \geqslant 0\)。
则 \(-\ell > 0\)。
则
\(x^{\ell + m} = x^{m + \ell} = x^m x^\ell\)。
注意，
\(x \operatorname{rec} {(x)}
  = 1 = \operatorname{rec} {(x)}\, x\)。
则
\((\operatorname{rec} {(x)})^{-\ell} x
  = x (\operatorname{rec} {(x)})^{-\ell}\)。
则
\(x^\ell x = x x^\ell\)。
则
\(x^m x^\ell = x^\ell x^m\)。
则
\(x^{\ell + m} = x^m x^\ell = x^\ell x^m\)。

设 \(\ell < 0\)，且 \(m < 0\)。
则 \(-\ell > 0\)，\(-m > 0\)。
则
\[
\begin{aligned}
  x^{\ell + m}
  = (\operatorname{rec} {(x)})^{-(\ell + m)}
  = (\operatorname{rec} {(x)})^{(-\ell) + (-m)}
  = (\operatorname{rec} {(x)})^{-\ell}
  (\operatorname{rec} {(x)})^{-m}
  = x^\ell x^m.
\end{aligned}
\]

(2) 分类讨论。
    设 \(\ell \geqslant 0\)，且 \(m \geqslant 0\)。
    则我们已证此情形。

设 \(\ell \geqslant 0\)，且 \(m < 0\)。
则 \(-m > 0\)，且 \(-(\ell m) = \ell (-m) \geqslant 0\)。
则
\[
\begin{aligned}
  (x^\ell)^m
  = (\operatorname{rec} {(x^\ell)})^{-m}
  = ((\operatorname{rec} {(x)})^{\ell})^{-m}
  = (\operatorname{rec} {(x)})^{\ell (-m)}
  = (\operatorname{rec} {(x)})^{-(\ell m)}
  = x^{\ell m}.
\end{aligned}
\]

设 \(\ell < 0\)，且 \(m \geqslant 0\)。
则 \(-\ell > 0\)，且 \(-(\ell m) = (-\ell) m \geqslant 0\)。
则
\[
\begin{aligned}
  (x^\ell)^m
  = ((\operatorname{rec} {(x)})^{-\ell})^m
  = (\operatorname{rec} {(x)})^{(-\ell) m}
  = (\operatorname{rec} {(x)})^{-(\ell m)}
  = x^{\ell m}.
\end{aligned}
\]

设 \(\ell < 0\)，且 \(m < 0\)。
则 \(-\ell > 0\)，且 \(-m > 0\)，
且 \(\ell m = (-\ell) (-m) > 0\)。
则
\[
\begin{aligned}
  (x^\ell)^m
  = {} &
  ((\operatorname{rec} {(x)})^{-\ell})^m
  \\
  = {} &
  (\operatorname{rec} {(x^{-\ell})})^m
  \\
  = {} &
  (\operatorname{rec} {(\operatorname{rec} {(x^{-\ell})})})^{-m}
  \\
  = {} &
  (x^{-\ell})^{-m}
  \\
  = {} &
  x^{(-\ell) (-m)}
  \\
  = {} &
  x^{\ell m}.
\end{aligned}
\]

(3) 设 \(x y = y x\)。
    分类讨论。
    设 \(m \geqslant 0\)。
    则我们已证此情形。

设 \(m < 0\)。
则 \(-m > 0\)。
注意，
\(\operatorname{rec} {(x)} \operatorname{rec} {(y)}
  = \operatorname{rec} {(y)} \operatorname{rec} {(x)}\)。
则
\[
\begin{aligned}
  (x y)^m
  = {} &
  (y x)^m
  \\
  = {} &
  (\operatorname{rec} {(y x)})^{-m}
  \\
  = {} &
  (\operatorname{rec} {(x)} \operatorname{rec} {(y)})^{-m}
  \\
  = {} &
  (\operatorname{rec} {(x)})^{-m} (\operatorname{rec} {(y)})^{-m}
  \\
  = {} &
  x^m y^m.
\end{aligned}
\]
:::

最后，有一件事，其值得提。
注意，若 \(x\) 有倒数，则它的倒数
\(\operatorname{rec} {(x)} = x^{-1}\)。
所以，若 \(x\) 有倒数，
我们也记 \(x\) 的倒数为 \(x^{-1}\)。
这是常用的记号。
