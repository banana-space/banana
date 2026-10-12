---
title: 二年级之梦
categories: [实分析]
---

**二年级之梦**是指[[微积分]]中的一个看似不正确，但实际上正确的等式：
\[
\int_0^1 x^{-x} \, d x =
\sum_{n=1}^{\infty} n^{-n},
\]
它的近似值是
\[
1.29128 \, 59970 \, 62663 \, 54040 \ldots
\]
这个公式的命名与[[一年级之梦]]相对应，
后者是指不正确的等式 $(x + y)^n = x^n + y^n$。

## 叙述与证明

::: theorem [二年级之梦]
\[
\int_0^1 x^{-x} \, d x =
\sum_{n=1}^{\infty} n^{-n}.
\]
:::

::: proof
注意到
$x^{-x} = \mathrm{e}^{-x \log x}
= \sum_{n = 0} ^\infty {} (-x \log x)^n / n!$，
并且这个幂级数关于 $x$ [[一致收敛]]，
从而
\[
\begin{aligned}
  \text{\small 左边}
  & =
  \int_0^1 \sum_{n = 0} ^\infty \frac{(-x \log x)^n}{n!} \, d x \\
  & =
  \sum_{n = 0} ^\infty \int_0^1 \frac{(-x \log x)^n}{n!} \, d x \\
  & =
  \sum_{n = 0} ^\infty \int_0^\infty \frac{(\mathrm{e}^{-u} \, u)^n}{n!} \, \mathrm{e}^{-u} \, d u
  \quad (u = -{\log x}) \\
  & =
  \sum_{n = 0} ^\infty \frac{1}{n! \, (n + 1)^{n + 1}} \int_0^\infty \mathrm{e}^{-t} \, t^n \, d t
  \quad (t = (n + 1) u) \\
  & =
  \sum_{n = 0} ^\infty \frac{1}{n! \, (n + 1)^{n + 1}} \, \Gamma(n + 1) \\
  & =
  \sum_{n = 0} ^\infty \frac{1}{(n + 1)^{n + 1}}
  = \text{\small 右边},
\end{aligned}
\]
其中倒数第二行利用了 [[$\Gamma$ 函数]]的定义。
:::

```terms
二年级之梦:
  en: sophomore's dream
  fr: rêve du deuxième année
```
