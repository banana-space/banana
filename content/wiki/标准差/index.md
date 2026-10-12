---
title: 标准差
categories: [概率论]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [概率论]
---

在[[概率论]]中，[[随机变量]]的**标准差**
描述了该随机变量取值的发散程度，
是[[方差]]的[[平方根]]。
大致来说，标准差是随机变量的取值与其[[期望]]的平均差距。

在[[统计学]]中，也谈论一组数据的标准差。
这是将这组数据视为某个未知的随机变量的取值，
而推测出的该随机变量的标准差。
与上面类似，标准差大致是一组数据与其[[均值]]的平均差距。

## 定义

### 在概率论中

::: definition [标准差]
在[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$ 中，
考虑[[随机变量]] $X \colon \Omega \to \mathbb{R}$。
则 $X$ 的**标准差**定义为
\[
\sigma (X) = \sqrt{\operatorname{Var} (X)},
\]
其中 $\operatorname{Var} (X)$ 是 $X$ 的[[方差]]。
:::

### 在统计学中

在统计学中，对一组数据 $x_1, \dotsc, x_n \in \mathbb{R}$，
有两种不同的标准差，分别称为**总体标准差**与**样本标准差**。

::: definition
对[[自然数]] $n$ 及数据 $x_1, \dotsc, x_n \in \mathbb{R}$，记
\[
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
\]
为其[[均值]]。则这组数据的**总体标准差**定义为其[[总体方差]]的[[平方根]]，即
\[
\sigma = \sqrt{\sigma^2} =
\biggl( \frac{1}{n} \sum_{i=1}^{n} {} (x_i - \bar{x})^2 \biggr)^{1/2}.
\]
其**样本标准差**定义为其[[样本方差]]的[[平方根]]，即
\[
S = \sqrt{S^2} =
\biggl( \frac{1}{n-1} \sum_{i=1}^{n} {} (x_i - \bar{x})^2 \biggr)^{1/2}.
\]
:::

## 例子

## 性质

### 基本性质

- 对实数 $c \in \mathbb{R}$ 和[[随机变量]] $X$，有

  - $\sigma (cX) = |c| \cdot \sigma (X)$。

  - $\sigma (X + c) = \sigma (X)$。

```terms
标准差:
  en: standard deviation
  de: Standardabweichung :f
  fr: écart type :m
```
