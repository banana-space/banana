---
title: 累积分布函数
aliases: [概率分布函数]
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，
**累积分布函数**（又称为**概率分布函数**，可简称**分布函数**）
是实值[[随机变量]]的一种性质。
对实值随机变量 $X$，其累积分布函数定义为
\[
F_X (x) = \mathbb{P} (X \leq x),
\]
它是 $\mathbb{R}$ 上取值于 $[0, 1]$ 的[[递增函数]]。
累积分布函数仅取决于随机变量的[[概率分布]]。

## 定义

::: definition [累积分布函数]
设 $X$ 是[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
上的实值[[随机变量]]。则 $X$ 的**累积分布函数**
$F_X \colon \mathbb{R} \to [0, 1]$ 定义为
\[
F_X (x) = \mathbb{P} (X \leq x).
\]
:::

对实值随机变量 $X$，上述定义也可以等价地表述如下。

- 设 $\mu$ 是 $X$ 的[[概率分布]]。则 $X$ 的累积分布函数为
  \[
  F_{\mu} (x) = \mu( \mathopen{]} -\infty, x] ),
  \]
  即[[区间]] $\mathopen{]} -\infty, x]$ 的测度。
  因此，也说 $F_{\mu}$ 是概率分布 $\mu$ 的**累积分布函数**。

- 若 $X$ 是[[离散型随机变量]]，其所有可能取值为 $x_1, x_2, \dotsc$，
  且取值 $x_i$ 的[[概率]]为 $p_i$。则 $X$ 的累积分布函数为
  \[
  F_X (x) = \sum_{x_i \leq x} p_i \, .
  \]

- 若 $X$ 是[[连续型随机变量]]，其[[概率密度函数]]为 $p$，
  则 $X$ 的累积分布函数为 [[Lebesgue 积分]]
  \[
  F_X (x) = \int_{-\infty}^x p (t) \, \mathrm{d} t.
  \]

对[[随机向量]]，可以定义多元版本的累积分布函数。

::: definition [多元累积分布函数]
设 $\bm{X} = (X_1, \cdots, X_n)^\top$ 是[[概率空间]]
$(\Omega, \mathcal{F}, \mathbb{P})$ 上的随机向量。
则 $\bm{X}$ 的**累积分布函数**（又称为**联合分布函数**）
$F_X \colon \mathbb{R}^n \to [0, 1]$ 定义为
\[
F_{\bm X} (x_1, \dotsc, x_n) =
\mathbb{P} (X_1 \leq x_1, \dotsc, X_n \leq x_n).
\]
:::

对随机向量 $\bm{X}$，上述定义也可等价表述如下。

- 设 $\mu$ 是 $\bm{X}$ 的[[概率分布]]。则 $\bm{X}$ 的累积分布函数为
  \[
  F_{\mu} (x_1, \dotsc, x_n) =
  \mu( \mathopen{]} -\infty, x_1] \times \cdots \times \mathopen{]} -\infty, x_n] ).
  \]
  因此，也说 $F_{\mu}$ 是概率分布 $\mu$ 的**累积分布函数**。

- 若 $\bm{X}$ 具有[[概率密度函数]] $p$，则 $\bm{X}$ 的累积分布函数为
  \[
  F_{\bm{X}} (x_1, \dotsc, x_n) =
  \int_{-\infty}^{x_1} \dotsi \int_{-\infty}^{x_n} \,
  p \, \mathrm{d} \bm{x}.
  \]

注意到，与实值随机变量的情形不同，
随机向量的累积分布函数取决于其所取值的[[向量空间]]的[[基]]的选取。
也就是说，若选取 $\mathbb{R}^n$ 的一组不同的基，并将随机向量 $\bm{X}$ 用新的基写出，
则新的累积分布函数并不能写成原来的累积分布函数加上一个线性变换的形式。

## 性质

### 基本性质

- 设 $F \colon \mathbb{R} \to [0, 1]$ 是某个随机变量的累积分布函数。则

  - $F$ 是[[递增函数]]。

  - $F$ 是[[右连续函数]]。

  - 有 $\lim_{x \to -\infty} F (x) = 0$，且 $\lim_{x \to +\infty} F (x) = 1$。

  反过来，满足上述三条的函数一定能写成某个随机变量的累积分布函数。
  例如，令 $\Omega = \mathopen{]} 0, 1 \mathclose{[}$，
  赋予 [[Lebesgue 测度]]而成为[[概率空间]]，
  定义其上实值随机变量 $X \colon \Omega \to \mathbb{R}$ 为
  \[
  X (p) = \sup\{ x \in \mathbb{R} \mid F(x) \leq p \},
  \]
  则 $F$ 是 $X$ 的累积分布函数。

### Lebesgue 分解

将[[测度论]]中的 [[Lebesgue 分解定理]]应用于累积分布函数，
可得到以下结论。

::: proposition
每个累积分布函数 $F$ 都可唯一地分解成一个[[阶梯函数|阶梯]]的分布函数 $F_1$、
一个[[绝对连续函数|绝对连续]]的分布函数 $F_2$、
和一个[[奇异连续函数|奇异连续]]的分布函数 $F_3$ 的[[凸组合]]。
也就是说，有
\[
F (x) = \sum_{i=1}^{3} a_i F_i (x),
\]
其中 $a_i \geq 0$，$\sum a_i = 1$，
且每个 $F_i$ 都是某个概率分布的累积分布函数。
:::

```terms
累积分布函数:
  en: cumulative distribution function (CDF)
  fr: fonction de répartition :f
  de: Verteilungsfunktion :f
  ja: 累<るい>積<せき>分<ぶん>布<ぷ>関<かん>数<すう>
  ko: 누적 분포 함수 (累積分布函數)
```
