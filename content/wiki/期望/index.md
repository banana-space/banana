---
title: 期望
aliases: [数学期望]
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，[[随机变量]]的
**期望**（或**数学期望**、**均值**）
大致是指在所有可能的情况下，该随机变量的平均取值。
例如，投一枚普通的骰子，得到点数的期望是 $3.5$，
因为这是所有可能情况 $1, 2, 3, 4, 5, 6$ 的均值。

## 定义

::: definition
设 $(\Omega,\mathcal{F},\mathbb{P})$ 是[[概率空间]]，
$X \colon \Omega \to \mathbb{R}$ 是实值[[随机变量]]。
则 $X$ 的**期望**定义为 [[Lebesgue 积分]]
\[
\mathbb{E} (X) = \int_{\Omega} X \, \mathrm{d} \mathbb{P}.
\]

类似地，对有限维实[[向量空间]] $V$ 及[[随机向量]] $\bm{X} \colon \Omega \to V$，
其**期望**定义为 Lebesgue 积分
\[
\mathbb{E} (\bm{X}) = \int_{\Omega} \bm{X} \, \mathrm{d} \mathbb{P}.
\]
:::

需要注意的是，随机变量、随机向量不一定存在期望，因为上述积分不一定收敛。
对实值随机变量而言，当积分等于 $\pm \infty$ 时，也称随机变量的期望为 $\pm \infty$。

对实值随机变量 $X$，上述定义也可等价地表述如下。
其期望的存在性等价于以下表述中积分的存在性或级数的收敛性。

- 如果 $X$ 是[[离散型随机变量]]，其所有可能取值为 $x_1, x_2, \dotsc$，
  并且取值 $x_i$ 的概率为 $p_i$，则
  \[
  \mathbb{E} (X) = \sum_{i} x_i \, p_i.
  \]

- 如果 $X$ 是[[连续型随机变量]]，其[[概率密度函数]]是 $p$，
  则 $X$ 的期望等于 [[Lebesgue 积分]]
  \[
  \mathbb{E} (X)=\int_{\mathbb{R}} x \, p(x) \, \mathrm{d} x.
  \]

- 设 $\mu$ 是 $X$ 的[[概率分布]]。则 $X$ 的期望等于 [[Lebesgue 积分]]
  \[
  \mathbb{E} (X) = \int_{\mathbb{R}} x \, \mathrm{d} \mu (x).
  \]

- 设 $F$ 是 $X$ 的[[累积分布函数]]。则 $X$ 的期望等于 [[Riemann–Stieltjes 积分]]
  \[
  \mathbb{E} (X) = \int_{\mathbb{R}} x \, \mathrm{d} F (x).
  \]

上述等价表述对随机向量也有类似的版本。

## 性质

### 基本性质

固定[[概率空间]] $(\Omega,\mathcal{F},\mathbb{P})$。

- 对实数 $a$、$b$ 和实值[[随机变量]] $X$、$Y$，有
  $\mathbb{E} (a X + b Y) = a \, \mathbb{E} (X) + b \, \mathbb{E} (Y)$。

- 对实值随机变量 $X$、$Y$，若两者都存在期望，且 $X \leq Y$，
  即对[[几乎所有]] $\omega \in \Omega$ 有 $X (\omega) \leq Y (\omega)$，
  则 $\mathbb{E} (X) \leq \mathbb{E} (Y)$。

- （**[[Jensen 不等式]]**）
  设 $X$ 是取值于[[区间]] $I \subset \mathbb{R}$ 的随机变量，且存在期望。
  设 $g \colon I \to \mathbb{R}$
  是 [[Borel sigma-代数|Borel]] [[可测函数|可测]]的[[凸函数]]。
  则 $g(\mathbb{E}(X)) \leq \mathbb{E}(g(X))$，
  其中后者可能是 $+\infty$。

```terms
期望:
  en: expectation
  fr: espérance :f
  de: Erwartungswert :m
  ja: 期<き>待<たい>値<ち>
  ko: 기댓값 (期待値)
```
