---
title: Bernoulli 数
categories: [复分析, 组合函数]
navboxes: [计数组合]
---

<problems>
- “Riemann $\zeta$ 函数的特殊值”一节中，沿 $C_N$ 的积分的估计似乎应为 $O(N^{1-2k})$（积分路径长度与 $N$ 同阶），这不影响令 $N\to+\infty$ 后的结论。
</problems>

**Bernoulli 数**
是一列[[有理数]]，记为 $B_n$，其前几项为
\[
B_0 = 1, \quad
B_1 = -\frac{1}{2}, \quad
B_2 = \frac{1}{6}, \quad
B_3 = 0, \quad
B_4 = -\frac{1}{30}, \quad \ldots
\]
当 $n>1$ 为[[奇数]]时，都有 $B_n = 0$；
当 $n>0$ 为[[偶数]]时，正数和负数交替出现。

Bernoulli 数 $B_n$ 是 [[Bernoulli 多项式]] $B_n (x)$ 于 $x = 0$ 的取值。
另外，Bernoulli 数与
[[Riemann $\zeta$ 函数]]在整数上的取值密切相关。

有的文献约定 $B_1$ 为 $1/2$，而非这里的 $-1/2$。
这种约定常记为 $B_n^+$，即 $B_0^+ = 1$，$B_1^+ = 1/2$，等等。

## 定义

::: definition [Bernoulli 数]
对整数 $n \geq 0$，
**Bernoulli 数** $B_n$ 由以下 [[Taylor 级数]]给出：

```math {@eqnbgen}
\frac{t}{\mathrm{e}^t - 1} =
\sum_{n=0}^\infty \frac{B_n}{n!} t^n .
```

:::

下表列出 Bernoulli 数的前若干项。

\[
\begin{array}{c|ccccccccccc} \hline
  n \vphantom{\big|} & 0 & 1 & 2 & 3 & 4 &
  5 & 6 & 7 & 8 & 9 & 10 \\ \hline
  B_n \vphantom{\Bigg|} &
  1 & -\dfrac{1}{2} & \dfrac{1}{6} &
  0 & -\dfrac{1}{30} &
  0 & \dfrac{1}{42} &
  0 & -\dfrac{1}{30} &
  0 & \dfrac{5}{66} \\ \hline\hline
  n \vphantom{\big|} &&
  11 & 12 & 13 & 14 & 15 &
  16 & 17 & 18 & 19 & 20 \\ \hline
  B_n \vphantom{\Bigg|} &&
  0 & -\dfrac{691}{2730} &
  0 & \dfrac{7}{6} &
  0 & -\dfrac{3617}{510} &
  0 & \dfrac{43867}{798} &
  0 & -\dfrac{174611}{330} \\ \hline
\end{array}
\]

## 性质

### 奇数值

对 @eqnbgen 做换元$t\mapsto-t$，则有：

\[
{-t\over \mathrm e^{-t}-1}={t\mathrm e^t\over \mathrm e^t-1}=t+{t\over \mathrm e^t-1}
\]

对比系数即可发现当$n\ge2$时：

\[
(-1)^nB_n=B_n
\]

这意味着除了$n=1$外所有的奇数阶 Bernoulli 数都为零。

### 迭代公式

利用幂级数之间的 Cauchy 乘积，可知：

```math
\begin{aligned}
    {t\mathrm e^t\over \mathrm e^t-1}
    &=\sum_{n\ge0}{B_n\over n!}\sum_{k\ge0}{t^k\over k!}=\sum_{m\ge0}{t^m\over m!}\sum_{n=0}^m\binom mnB_n
\end{aligned}
```

现在根据上一节的结论，便可发现当$m\ge2$时：

\[
B_m=\sum_{n=0}^m\binom mnB_n=\sum_{n=0}^{m-1}\binom mnB_n+B_m
\]

因此当$m\ge1$时总有：

\[
\sum_{n=0}^m\binom{m+1}nB_n=0
\]

利用这一点，我们就可以得到 Bernoulli 数的迭代公式：

::: theorem
当$m\ge1$时，总有：
\[
B_m=-{1\over m+1}\sum_{n=0}^{m-1}\binom{m+1}nB_n
\]
:::

::: corollary
对于所有非负整数$n$，总有$B_n\in\mathbb Q$。
:::

### 自然数的幂和

可以用 Bernoulli 数来解决自然数幂和问题。记

\[
S_m(n) = \sum_{k=1}^{n} k^m,
\]
它可以用 $n$ 的 $m+1$ 次多项式来表示。接下来
具体求出这个多项式。考虑指数生成函数
\[
F(n;x) = \sum_{m=0}^{\infty} \frac{S_m(n)}{m!} x^m,
\]
则
\[
\begin{aligned}
  F(n;x) &= \sum_{m=0}^{\infty} \sum_{k=1}^{n} k^m \frac{x^m}{m!}\\
       &= \sum_{k=1}^{n} \sum_{m=0}^{\infty} \frac{(kx)^m}{m!}\\
       &= \sum_{k=1}^{n} \mathrm e^{kx}
       = \frac{1 - \mathrm e^{nx}}{\mathrm e^{-x} - 1}.
\end{aligned}
\]
进一步
\[
\begin{aligned}
  F(n;x) &= \frac{1 - \mathrm e^{nx}}{\mathrm e^{-x} - 1}\\
  &= \frac{\mathrm e^{nx} - 1}{x} \cdot \frac{-x}{\mathrm e^{-x} - 1}\\
  &= \left(\sum_{s=1}^{\infty} \frac{n^s}{s!} x^{s-1}\right) \left(\sum_{k=0}^{\infty} \frac{(-1)^k B_k}{k!} x^k\right),
\end{aligned}
\]
比较系数，最终得到

::: theorem
\[
S_m(n) = \frac{1}{m+1} \sum_{k=0}^{m} \binom{m+1}{k} (-1)^{k} B_k n^{m+1-k}.
\]
:::

### Riemann $\zeta$ 函数的特殊值

<see>[[Riemann $\zeta$ 函数]]</see>

根据 Cauchy 积分公式，我们知道当$0<r<2\pi$时：

\[
{B_{2k}\over(2k)!}={1\over2\pi i}\int_{|z|=r}\underbrace{{z^{-2k}\over \mathrm e^z-1}}_{f_k(z)}\mathrm dz
\]

根据[[留数定理]]，我们对于整数$n$，$f_k(z)$在$z=2\pi in$的留数为$(-1)^k(2\pi n)^{-2k}$。
因此当$C_N$表示以$(2N+1)\pi$为半径的圆，则有：

\[
{B_{2k}\over(2k)!}={2(-1)^{k+1}\over(2\pi)^{2k}}\sum_{n=1}^N{1\over n^{2k}}+{1\over2\pi i}\int_{C_N}f_k(z)\mathrm dz
\]

根据我们对$C_N$的选取，我们知道必然存在固定的$0<r<\pi$使$|z-2\pi iN|\ge r$，所以$|e^z-1|^{-1}$有界。
因此：

\[
\int_{C_N}f_k(z)\mathrm dz=O(N^{-2k})
\]

将此结果回代并令$N\to+\infty$，即得$\zeta(s)$的偶数值公式：

::: theorem {@thbz}
当$k\in\mathbb{Z}^+$时，总有：
\[
\zeta(2k)=(-1)^{k+1}{(2\pi)^{2k}B_{2k}\over2(2k)!}
\]
:::

特别地，当$k=1$时 @thbz 就能给出**Basel 问题**的解：

\[
\zeta(2)=\sum_{n=1}^\infty{1\over n^2}={\pi^2\over6}
\]
