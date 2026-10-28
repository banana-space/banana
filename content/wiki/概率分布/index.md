---
title: 概率分布
categories: [概率论]
navboxes: [概率论]
---

<disambiguation>
关于其他含义，请参见[[分布]]。
</disambiguation>

**概率分布**，有时简称**分布**，是[[概率论]]中的基本概念，
描述[[随机变量]]取值的方式。

## 定义

::: definition [概率分布]
[[可测空间]] $E$ 上的**概率分布**是指 $E$ 上的[[概率测度]]，
即总测度为 $1$ 的[[测度]]。

对[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$
上取值于 $E$ 的[[随机变量]] $X \colon \Omega \to E$，
记 $\mu = X_* (\mathbb{P})$ 为[[前推测度]]。
则 $\mu$ 是 $E$ 上的概率分布，称为 $X$ 的**概率分布**。
我们也称 $X$ **满足**分布 $\mu$，并记 $X \sim \mu$。
:::

在上述记号下，对[[可测集]] $A \subset E$，有
\[
\mu (A) = \mathbb{P} (X^{-1} (A)),
\]
即 $X$ 的取值落在 $A$ 内的概率。

我们常常考虑实值[[随机变量]]或[[随机向量]]的分布，
也就是取 $E = \mathbb{R}$ 或 $\mathbb{R}^n$，并配以 [[Borel $\sigma$-代数]]。
此时，概率分布可以由其[[累积分布函数]]或[[概率密度函数]]（如果存在）而确定。

## 例子

- [[区间]] $[a, b]$ 上的 **[[均匀分布]]**。

- **[[正态分布]]**。

```terms
概率分布:
  en: probability distribution
  fr: loi de probabilité :f
  de: Wahrscheinlichkeitsverteilung :f
  ja: 確<かく>率<りつ>分<ぶん>布<ぷ>
  ko: 확률 분포 (確率分布)
```
