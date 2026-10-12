---
title: 均匀分布
categories: [概率论]
notices:
  - name: 问题
    items:
      - “基本性质”一节最后一项中，按所给的 $F^{-1}$ 的定义，“$F(x) \leq u$ 等价于 $x \leq F^{-1}(u)$”在 $F$ 于 $F^{-1}(u)$ 处有跳跃时似乎不成立；常用的定义是 $F^{-1}(u) = \inf\{x \mid F(x) \geq u\}$，此时 $u \leq F(x)$ 等价于 $F^{-1}(u) \leq x$。
navboxes: [概率论]
---

**均匀分布**是一种[[概率分布]]。
大致来说，称[[随机变量]] $X$ 满足[[闭区间]] $[a, b] \subset \mathbb{R}$ 上的均匀分布，
是说 $X$ 的取值将会均匀地落在区间 $[a, b]$ 中。

## 定义

::: definition [均匀分布]
设 $X$ 是实值[[随机变量]]，
$a < b$ 是[[实数]]。如果 $X$ 的一个[[概率密度函数]]为
\[
p (x) = \begin{cases}
  \dfrac{1}{b-a}, & x \in [a, b], \\
  0, & x \notin [a, b],
\end{cases}
\]
则称 $X$ 服从区间 $[a,b]$ 上的**均匀分布**，记为 $X \sim U[a,b]$。
特别地，$U[0,1]$ 称为**标准均匀分布**。
:::

对[[随机向量]]，可以定义多维均匀分布。

::: definition [多维均匀分布]
设 $(\Omega, \mathcal{F}, \mathbb{P})$ 是[[概率空间]]，$\bm{X} \colon \Omega \to \mathbb{R}^n$
是[[随机向量]]。设 $D$ 是 $\mathbb{R}^n$ 中的 [[Borel sigma-代数|Borel]] [[可测集]]，
其 [[Lebesgue 测度]]有限。如果 $\bm{X}$
的一个概率密度函数为
\[
p (\bm{x}) = \begin{cases}
  \dfrac{1}{m(D)}, & \bm{x} \in D, \\
  0, & \bm{x} \notin D,
\end{cases}
\]
这里 $m$ 是 [[Lebesgue 测度]]，则称 $\bm{X}$ 服从 $D$ 上的 **$n$ 维均匀分布**，
记为 $\bm{X} \sim U(D)$。
:::

## 性质

### 基本性质

- 设实值[[随机变量]] $X \sim U[a,b]$。

  - $X$ 的[[累积分布函数]]是
    \[
    F(x) = \begin{cases}
      0, & x<a, \\
      \dfrac{x-a}{b-a}, & a \leq x\leq b, \\
      1, & x>b.
    \end{cases}
    \]

  - $X$ 的[[期望]]是 $\mathbb{E}(X) = \dfrac{a+b}2$。

  - $X$ 的[[方差]]是 $\operatorname{Var}(X) = \dfrac{(b-a)^2}{12}$。

  - 对[[自然数]] $n$，$X$ 的 $n$ 阶原点[[矩]]是
    \[
    \mathbb{E}(X^n) = \dfrac{b^{n+1} - a^{n+1}}{(n+1)(b-a)},
    \]
    $2n$ 阶中心矩是
    \[
    \mathbb{E}(X - \mathbb{E}(X))^{2n} = \dfrac{(b-a)^{2n}}{(2n+1)4^{n}},
    \]
    奇数阶中心矩为 $0$。

  - $X$ 的[[特征函数（概率论）|特征函数]]是
    \[
    \phi_X(t) = \dfrac{\mathrm e^{\mathrm itb} - \mathrm e^{\mathrm ita}}{\mathrm it (b-a)}.
    \]
    当 $t = 0$ 时函数值为上述式子在 $t \to 0$ 时的极限 $1$。

- 设 $D \subseteq \mathbb{R}^n$ 是 Borel 可测集且测度有限，[[随机向量]] $\bm{X} \sim U(D)$。

  - 对 Borel 可测集 $B$，有
    \[
    \mathbb{P}(\bm{X} \in B) = \frac{m(B \cap D)}{m(D)}.
    \]

  - 如果 $D = [a_1, b_1] \times \cdots \times [a_n, b_n]$，则 $\bm{X}$ 的边缘分布是均匀分布：
    $X_i \sim U[a_i, b_i]$，且它们相互独立。对于一般的 $D$，这种性质一般不成立。

- 可以从均匀分布生成任何分布。
  如果 $F$ 是一个[[累积分布函数]]，随机变量 $\theta \sim U[0,1]$，则 $X = F^{-1}(\theta)$
  的累积分布函数恰好是 $F$。这里 $F$ 的反函数定义为
  \[
  F^{-1}(u) = \sup\{ x \mid F(x) \leq u\},
  \]
  这使得 $F(x) \leq u$ 等价于 $x \leq F^{-1}(u)$。

```terms
均匀分布:
  en: uniform distribution
  fr: loi uniforme continue
  de: Stetige Gleichverteilung
  ja: 連<れん>続<ぞく>一<いち>様<よう>分<ぶん>布<ぷ>
  ko: 연속균등분포 (連續均等分布)
多维均匀分布:
  en: multivariate uniform distribution
```
