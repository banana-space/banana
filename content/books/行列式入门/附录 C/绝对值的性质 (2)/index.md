---
title: 绝对值的性质 (2)
---

设 \(z = a + \mathrm{i} b\) 是复数
（其中，\(a\)、\(b\) 是实数，下同）。
则 \(z\) 的绝对值
\[
\begin{aligned}
  |z| = \sqrt{a^2 + b^2}.
\end{aligned}
\]

如下命题是对的。

(1)
\(|0| = 0\)；
若复数 \(z\) 适合 \(|z| = 0\)，则 \(z = 0\)。

首先，\(|0| = |{0 + \mathrm{i} 0}| = \sqrt{0^2 + 0^2} = 0\)。

若 \(z = a + \mathrm{i} b\) 适合 \(|z| = 0\)，
则 \(\sqrt{a^2 + b^2} = 0\)。
则 \(a^2 + b^2 = 0\)。
则 \(a = b = 0\)。
则 \(z = 0\)。

(2)
对任何复数 \(z\)，\(|z| \geqslant 0\)。

由 \(\surd\) 的定义，这是显然的。

(3)
对任何复数 \(z\)，\(w\)，\(|zw| = |z|\, |w|\)。

设 \(z = a + \mathrm{i} b\)，且 \(w = c + \mathrm{i} d\)
（其中，\(c\)、\(d\) 是实数，下同）。
则
\[
\begin{aligned}
  |zw|^2
  = {} & |{(ac - bd) + \mathrm{i} (ad + bc)}|^2 \\
  = {} & (ac - bd)^2 + (ad + bc)^2              \\
  = {} & a^2 c^2 + b^2 d^2 + a^2 d^2 + b^2 c^2  \\
  = {} & (a^2 + b^2) (c^2 + d^2)                \\
  = {} & |z|^2 |w|^2                            \\
  = {} & (|z|\, |w|)^2.
\end{aligned}
\]
因为 \(|zw|\) 与 \(|z|\, |w|\) 是非负实数，
故 \(|zw| = |z|\, |w|\)。

注意，对任何实数 \(a\)、\(b\)、\(c\)、\(d\)，
\[
\begin{aligned}
  (a^2 + b^2) (c^2 + d^2)
  = {}    & (a^2 + (-b)^2) (c^2 + d^2)      \\
  = {}    & (ac - (-b)d)^2 + (ad + (-b)c)^2 \\
  \geqslant {} & (ac + bd)^2.
\end{aligned}
\]

(4)
对任何复数 \(z\)，\(w\)，\(|{z + w}| \leqslant |z| + |w|\)。

设 \(z = a + \mathrm{i} b\)，且 \(w = c + \mathrm{i} d\)。
则
\[
\begin{aligned}
  |{z + w}|^2
  = {}    & |{(a + c) + \mathrm{i} (b + d)}|^2    \\
  = {}    & (a + c)^2 + (b + d)^2                 \\
  = {}    & a^2 + b^2 + c^2 + d^2 + 2(ac + bd)    \\
  = {}    & |z|^2 + |w|^2 + 2(ac + bd)            \\
  \leqslant {} & |z|^2 + |w|^2 + 2|{ac + bd}|          \\
  = {}    & |z|^2 + |w|^2 + 2 \sqrt{(ac + bd)^2}  \\
  \leqslant {} & |z|^2 + |w|^2
  + 2 \sqrt{(a^2 + b^2) (c^2 + d^2)}              \\
  = {}    & |z|^2 + |w|^2 + 2 \sqrt{(|z|\,|w|)^2} \\
  = {}    & |z|^2 + |w|^2 + 2 |z|\, |w|           \\
  = {}    & (|z| + |w|)^2.
\end{aligned}
\]
因为 \(|{z + w}|\) 与 \(|z| + |w|\) 是非负实数，
故 \(|{z + w}| \leqslant |z| + |w|\)。

类似地，若 \(z_1\)、\(\dots\)、\(z_n\) 是复数，则
\[
\begin{aligned}
  |{z_1 + \dots + z_n}| \leqslant |z_1| + \dots + |z_n|.
\end{aligned}
\]
可用数学归纳法证它。

(5)
对任何复数 \(z\)，\(w\)，\(|{z - w}| \geqslant |z| - |w|\)。

因为 \(|{z - w}| + |w| \geqslant |{(z - w) + w}| = |z|\)。

这些事实会是有用的。
