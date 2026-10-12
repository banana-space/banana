---
title: 绝对值的性质 (1)
---

设 \(a\) 是实数。
则 \(a\) 的绝对值
\[
\begin{aligned}
  |a| =
  \begin{cases}
    a,  & a \geqslant 0; \\
    -a, & a < 0.
  \end{cases}
\end{aligned}
\]

如下命题是对的。

(1)
\(|0| = 0\)；
若实数 \(a\) 适合 \(|a| = 0\)，则 \(a = 0\)。

因为 \(0 \geqslant 0\)，
故 \(|0| = 0\)。

若 \(a > 0\)，则 \(|a| = a > 0\)；
若 \(a < 0\)，则 \(|a| = -a > 0\)。
于是，若 \(|a| = 0\)，则 \(a\) 不能是正数，
且不能是负数，故 \(a = 0\)。

(2)
对任何实数 \(a\)，\(|a| \geqslant 0\)。

我们已知，若 \(a > 0\) 或 \(a < 0\)，则 \(|a| > 0\)。
另外，\(|0| = 0\)。

(3)
对任何实数 \(a\)，\(|a| \geqslant a \geqslant -|a|\)。

若 \(a \geqslant 0\)，则 \(|a| = a\)。
故 \(|a| = a \geqslant -a = -|a|\)；
若 \(a < 0\)，则 \(|a| = -a\)。
故 \(|a| = -a > a = -|a|\)。

(4)
设 \(a\)、\(b\) 是非负实数。
若 \(a \geqslant b\)，则 \(a^2 \geqslant b^2\)；
反过来，若 \(a^2 \geqslant b^2\)，则 \(a \geqslant b\)。

若 \(a > b \geqslant 0\)，则 \(a a > b b\)，故 \(a^2 > b^2\)；
若 \(a = b \geqslant 0\)，则 \(a a = b b\)，故 \(a^2 = b^2\)；
若 \(0 \leqslant a < b\)，则 \(a a < b b\)，故 \(a^2 < b^2\)。
所以，若 \(a \geqslant b\)，则 \(a^2 \geqslant b^2\)；
反过来，若 \(a^2 \geqslant b^2\)，则因 \(a < b\)
无法推出 \(a^2 \geqslant b^2\)，故必 \(a \geqslant b\)。

(5)
对任何实数 \(a\)，\(|a|^2 = a^2\)。
所以，对任何实数 \(a\)，\(\sqrt{a^2} = |a|\)。

若 \(a \geqslant 0\)，则 \(|a|^2 = a^2\)；
若 \(a < 0\)，则 \(|a|^2 = (-a)^2 = a^2\)。
因为非负实数 \(|a|\) 适合 \(|a|^2 = a^2\)，
故由 \(\surd\) 的定义，\(\sqrt{a^2} = |a|\)。

(6)
对任何实数 \(a\)，\(b\)，\(|ab| = |a|\, |b|\)。

若 \(a \geqslant 0\)，且 \(b \geqslant 0\)，
则 \(ab \geqslant 0\)，
故 \(|ab| = ab = |a|\, |b|\)；
若 \(a \geqslant 0\)，且 \(b < 0\)，
则 \(ab \leqslant 0\)，
故 \(|ab| = -ab = a(-b) =|a|\, |b|\)；
若 \(a < 0\)，且 \(b \geqslant 0\)，
则 \(ab \leqslant 0\)，
故 \(|ab| = -ab = (-a)b = |a|\, |b|\)；
若 \(a < 0\)，且 \(b < 0\)，
则 \(ab \geqslant 0\)，
故 \(|ab| = ab = (-a)(-b) = |a|\, |b|\)。

(7)
对任何实数 \(a\)，\(b\)，\(|{a + b}| \leqslant |a| + |b|\)。

若 \(a + b \geqslant 0\)，则 \(|{a + b}| = a + b \leqslant |a| + |b|\)；
若 \(a + b < 0\)，则 \(|{a + b}| = -(a + b)
= (-a) + (-b) \leqslant |{-a}| + |{-b}| = |a| + |b|\)。

类似地，若 \(a_1\)、\(\dots\)、\(a_n\) 是实数，则
\[
\begin{aligned}
  |{a_1 + \dots + a_n}| \leqslant |a_1| + \dots + |a_n|.
\end{aligned}
\]
可用数学归纳法证它。

(8)
对任何实数 \(a\)，\(b\)，\(|{a - b}| \geqslant |a| - |b|\)。

因为 \(|{a - b}| + |b| \geqslant |{(a - b) + b}| = |a|\)。

这些事实会是有用的。
