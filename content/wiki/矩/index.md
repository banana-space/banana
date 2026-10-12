---
title: 矩
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，**矩**是[[随机变量]]的一种性质。
对[[自然数]] $n$，随机变量的 $n$ 阶矩大致就是其 $n$ 次幂的[[期望]]。

## 定义

::: definition [矩]
设 $X$ 是[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
上的实值[[随机变量]]，并设 $c\in\mathbb{R}$。

- 对[[自然数]] $n$，如果存在[[期望]]
  \[
  \mu_n = \mathbb{E} ((X - c)^n),
  \]
  则称之为 $X$ 关于 $c$ 的 **$n$ 阶矩**。

  特别地，如果 $c = 0$，
  则称上述矩为 **$n$ 阶原点矩**；如果 $c = \mathbb{E}(X)$，
  则称之为 **$n$ 阶中心矩**。

- 对[[实数]] $r$，如果存在[[期望]]
  \[
  \mathbb{E} (|X-c|^r),
  \]
  则称之为 $X$ 关于 $c$ 的 **$r$ 阶绝对矩**。

  类似地，也可以定义**原点绝对矩**、**中心绝对矩**。

:::

例如，

- 实值随机变量的一阶原点矩是其[[期望]]。

- 实值随机变量的二阶中心矩是其[[方差]]。

下面的概念常见于[[统计学]]，用来衡量概率分布的形状。

::: definition [标准矩、偏度、峰度]
若实值随机变量 $X$ 存在[[标准差]] $\sigma$，则对自然数 $n$，
定义 $X$ 的 **$n$ 阶标准矩**为
\[
\hat \mu_n = \frac{\mu_n}{\sigma^n},
\]
其中 $\mu_n$ 为 $n$ 阶中心矩。

特别地，三阶标准矩称为**偏度**。四阶标准矩减 $3$ 称为**峰度**，
减 $3$ 的目的是使[[正态分布|标准正态分布]]的峰度为 $0$。
:::

## 性质

### 基本性质

设 $r$ 是自然数，随机变量 $X$ 的 $r$ 阶中心矩用 $\mu_r(X)$ 表示。

- 对实数 $a$、$b$，有
  \[
  \mu_r (bX + a) = b^r \mu_r(X).
  \]

- 对自然数 $r$，式子 $\mu_r(X + Y) = \mu_r(X) + \mu_r(Y)$
对相互独立的随机变量 $X,Y$ 恒成立当且仅当 $r \in \{1,2,3\}$。

### 峰度

下面这条性质与峰度有关。设 $X$ 的峰度用 $\operatorname{Kurt}(X)$ 表示。

- 如果 $X_1, \cdots, X_n$ 是[[方差]]相等的独立随机变量，则
  \[
  \operatorname{Kurt}\left( \sum_{k=1}^n X_k \right) = \frac{1}{n^2} \sum_{k=1}^n \operatorname{Kurt}(X_k).
  \]

### 特征函数与矩母函数

设随机变量 $X$ 的[[特征函数]]和[[矩母函数]]分别是 $\phi_X(t)$、$M_X(t)$，它们都存在且无穷阶可导。

- 对 $n \in \mathbb{N}$，用特征函数表示 $n$ 阶原点矩：
  \[
  \mathbb{E}(X^n) = \frac{1}{\mathrm i^n}\phi_X^{(n)}(0);
  \]

- 用矩母函数表示：
  \[
  \mathbb{E}(X^n) = M_X^{(n)}(0).
  \]

### 矩的不等式

不失一般性，下面只考虑原点绝对矩。

::: proposition [$C_r$ 不等式]
设 $r > 0$。如果随机变量 $X_1, X_2$ 均存在 $r$ 阶绝对矩，
则
\[
\mathbb{E}(|X_1 + X_2|^r) \leq C_r\big(\mathbb{E}(|X_1|^r) + \mathbb{E}(|X_2|^r)\big),
\]
其中常数
\[
C_r = \begin{cases}
  2^{r-1}, & r \geq 1,\\
  1, & 0 < r < 1.
\end{cases}
\]
:::

::: proof
如果 $r \geq 1$，则函数 $x^r$ 是[[凸函数]]，得到
\[
\left|\frac{X_1 + X_2}{2}\right|^r \leq \left(\frac{|X_1| + |X_2|}{2}\right)^r \leq \frac{|X_1|^r + |X_2|^r}{2},
\]
即 $|X_1 + X_2|^r \leq 2^{r-1} (|X_1|^r + |X_2|^r)$。两边取期望即证。

如果 $r < 1$，则若 $|X_1| + |X_2| \neq 0$，则
\[
|X_1 + X_2|^r \leq (|X_1| + |X_2|)^r = \frac{|X_1|}{(|X_1| + |X_2|)^{1-r}} + \frac{|X_2|}{(|X_1| + |X_2|)^{1-r}} \leq |X_1|^r + |X_2|^r.
\]
两边取期望即证。
:::

下面的结论说明矩关于阶数具有某种单调性。

::: proposition [幂平均不等式] {@power-mean}
设 $X$ 为随机变量，$0 < s < r$。如果 $X$ 的 $r$ 阶绝对矩存在，则 $s$ 阶绝对矩也存在，且
\[
\mathbb{E}(|X|^{s})^{1/s} \leq (\mathbb{E}(|X|^{r}))^{1/r}.
\]
:::

::: proof
令 $g(x) = x^{\frac rs}$，则 $g$ 是 $[0,+\infty[$ 上的凸函数。令 $Y = |X|^s$，由
[[Jensen 不等式]]：
\[
\mathbb{E}(|X|^{s})^{r/s} = g(\mathbb{E}(Y)) \leq \mathbb{E}(g(Y)) = \mathbb{E}(|X|^r) < \infty.
\]
两边 $1/r$ 次方即得。
:::

这个不等式也叫 Lyapunov 不等式。如果令 $s = 1$，则对 $r \geq 1$ 有
\[
\mathbb{E}(|X|) \leq \mathbb{E}(|X|^r)^{1/r}.
\]

下面的两个不等式参见条目 [[$L^p$ 空间]]和 [[Hölder 不等式]]。

::: proposition [Hölder 不等式]
设 $p,q > 1$，满足 $1/p + 1/q = 1$。如果随机变量 $X, Y$ 分别存在 $p, q$ 阶绝对矩，
则 $XY$ 存在期望，且
\[
\mathbb{E}(|XY|) \leq \mathbb{E}(|X|^p)^{1/p} \, \mathbb{E}(|Y|^q)^{1/q}.
\]
:::

在上述不等式中令 $Y = 1$，也能得到[幂平均不等式](@power-mean)。

::: proposition [Minkowski 不等式]
如果 $p \geq 1$，则对存在 $p$ 阶绝对矩的随机变量 $X_1, \cdots, X_n$：
\[
\mathbb{E}\left(\left|\sum_{k=1}^n X_k\right|^p\right)^{1/p} \leq
\sum_{k=1}^n \mathbb{E}(|X_k|^p)^{1/p}.
\]
:::

最后，通过 [[Markov 不等式]]，我们不难证明：

::: proposition
设随机变量 $X$ 的 $r$ 阶绝对矩存在，$r > 0$。则对任意 $a > 0$：
\[
\mathbb{P}(|X| \geq a) \leq \frac{\mathbb{E}(|X|^r)}{a^r}.
\]
:::

即可以通过矩估计分布情况。

```terms
矩:
  en: moment
  fr: moment
  de: moment
  ja: [モーメント, 積<せき>率<りつ>]
  ko: 모멘트
中心矩:
  en: central moment
原点矩:
  en: 'origin moment, raw moment'
标准矩:
  en: standardized moment
偏度:
  en: skewness
  fr: asymétrie
  de: Schiefe
  ja: 歪<わい>度<ど>
  ko: 비대칭도 (非對稱度)
峰度:
  en: kurtosis
  fr: kurtosis
  de: Wölbung
  ja: 尖<せん>度<ど>
  ko: 첨도 (尖度)
```
