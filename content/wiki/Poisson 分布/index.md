---
title: Poisson 分布
categories: [概率论]
navboxes: [概率论]
---

**Poisson 分布**是一种[[概率分布]]。如果某种事件
在时间轴中完全随机地出现，且每次出现的时刻互不影响，
则该事件在固定时间段内出现的次数就服从 Poisson 分布。
例如，固定时间段内来到公共汽车站的乘客数，
或是固定时间段内某放射性物质发射出的粒子数等，都近似满足 Poisson 分布。

## 定义

::: definition [Poisson 分布]
设 $\lambda > 0$，设 $X$ 是取值于 $\mathbb{N}$ 的[[离散型随机变量]]。
如果对任意 $k\in\mathbb{N}$，有
\[
\mathbb{P}(X = k) = \mathrm{e}^{-\lambda} \frac{\lambda^k}{k!},
\]
则称 $X$ 服从参数为 $\lambda$ 的**Poisson 分布**，
记为 $X \sim P(\lambda)$。
:::

## 性质

### 基本性质

- 设随机变量 $X$ 服从 Poisson 分布 $P(\lambda)$。

  - $X$ 的[[期望]]是 $\mathbb{E}(X) = \lambda$。

  - $X$ 的[[方差]]是 $\operatorname{Var}(X) = \lambda$。

  - $X$ 的 $n$ 阶原点[[矩]]可以表示为
    \[
    \mathbb{E}(X^n) = \sum_{k=0}^{n} \lambda^k S(n,k),
    \]
    其中 $S(n,k)$ 表示 [[第二类 Stirling 数]]。

  - $X$ 的[[特征函数]]是 $\phi_X(t) = \exp(\lambda(\mathrm{e}^{\mathrm it} - 1))$。

  - $\mathbb{P}(X = k)$ 在 $k = \lfloor \lambda \rfloor$ 时达到最大。

- 设两个独立的随机变量 $X \sim P(\lambda_1)$、$Y \sim P(\lambda_2)$，则
  $X + Y \sim P(\lambda_1 + \lambda_2)$。

### Poisson 分布的来源

首先，Poisson 分布可以来自[[二项分布]]的近似。

::: proposition [Poisson 近似] {@1}
设 $X_n \sim B(n,p_n)$ 为一列服从二项分布的随机变量。如果
\[
\lim_{n\to\infty} np_n = \lambda > 0,
\]
则对任意 $k \in \mathbb{N}$，
\[
\lim_{n\to\infty} \mathbb{P}(X_n = k) = \mathrm e^{-\lambda} \frac{\lambda^k}{k!}.
\]
:::

另外，如引言中介绍的，Poisson 分布还可以由 [[Poisson 过程]]得到。

::: proposition [Poisson 过程的唯一性]
设[[计数过程]] $\{X(t) \mid t\geq 0\}$ 满足如下性质：

1. $X(0) = 0$；

2. 过程是独立增量的，即若 $(a,b) \cap (c,d) =\varnothing$，
   则 $X(b) -X(a)$ 和 $X(d) - X(c)$ 是相互独立的；

3. 过程是平稳增量的，即对任意 $s,t \geq 0, k\in\mathbb{N}$：
   \[
   \mathbb{P}(X(s+t) - X(s) = k) = \mathbb{P}(X(t) = k);
   \]

4. 过程是普通的，即存在 $\lambda > 0$，使得 $t \to 0^+$ 时
   \[
   \mathbb{P}(X(s+t) -X(s) = 1) = \lambda t + o(t),\quad
   \mathbb{P}(X(s+t) -X(s) \geq 2) = o(t).
   \]

则对任意 $t > 0$，必然有 $X(t) \sim P(\lambda t)$。
:::

::: proof
把区间 $[0,t]$ 等分为 $n$ 个小区间：$[0,t] = \bigcup_{i=1}^n I_i$。
对区间 $I = [a,b]$，令 $X(I) = X(b) - X(a)$，则 $X(t) = \sum_{i=1}^{n} X(I_i)$。
为了计算 $\mathbb{P}(X(t) = k)$，
设事件 $A$ 表示恰有 $k$ 个小区间满足 $X(I_i) = 1$，其余都是 $0$；而事件
$B$ 表示 $X(t) = k$，但有某个小区间满足 $X(I_i) \geq 2$。则
\[
\mathbb{P}(X(t) = k) = \mathbb{P}(A) + \mathbb{P}(B).
\]
用事件 $B_i$ 表示事件 $X(I_i) \geq 2$，则由 [[Boole 不等式]]和条件：
\[
\mathbb{P}(B) \leq \mathbb{P}\left(\bigcup_{i=1}^n B_i\right)
   \leq \sum_{i=1}^n \mathbb{P}(B_i)
   = \sum_{i=1}^n o(t/n)
   = t\frac{o(t/n)}{t/n},
\]
在 $n\to\infty$ 时趋于 $0$。另一方面，我们有
\[
p_n := \mathbb{P}(X(I_i) = 1) = \frac{\lambda t}{n} + o\left(\frac{t}{n}\right)
\]
对每个 $i$ 成立，且 $X(I_i)$ 是相互独立的。事件 $A$ 可以视为
在每个小区间都做一次试验检测 $X(I_i)$ 是否为 $1$，成功次数恰好为 $k$
次，而这恰是二项分布。即
\[
\mathbb{P}(A) = \binom{n}{k} p_n^k (1-p_n)^{n-k}.
\]
因为 $\lim_{n\to\infty} np_n = \lambda t$，
故根据 @1 得 $\mathbb{P}(A) \to \mathrm{e}^{-\lambda t} \frac{(\lambda t)^k}{k!}, n \to \infty$。
也就是结果：
\[
\mathbb{P}(X(t) = k) = \mathrm{e}^{-\lambda t} \frac{(\lambda t)^k}{k!}.
\]
:::

```terms
Poisson 分布:
  en: Poisson distribution
  fr: loi de Poisson :f
  de: Poisson-Verteilung :f
  ja: Poisson 分<ぶん>布<ぷ>
  ko: Poisson 분포 (Poisson 分布)
```
