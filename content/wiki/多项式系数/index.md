---
title: 多项式系数
categories: [组合函数]
navboxes: [计数组合]
---

**多项式系数**是[[计数组合]]中的一些计数结果，
是[[二项式系数]]的推广。
给定[[自然数]] $k_1, \dotsc, k_m$，记 $n = k_1 + \cdots + k_m$，
则有多项式系数，或者说 $m$ 项式系数，
\[
\binom{n}{k_1, \dotsc, k_m} =
\frac{n!}{k_1! \cdots k_m!}.
\]
这是将 $n$ 个不同物品放入 $m$ 个盒子，
使得每个盒子中分别有 $k_1, \dotsc, k_m$ 个物品的方法总数。
当 $m = 2$ 时，多项式系数就是二项式系数：
\[
\binom{n}{k_1, k_2} = \binom{n}{k_1}.
\]

与二项式系数类似，多项式系数得名于[[多项式定理]]，该定理给出了展开式
\[
(x_1 + \cdots + x_m)^n =
\sum_{n = k_1 + \cdots + k_m}
\binom{n}{k_1, \dotsc, k_m} \, x_1^{k_1} \cdots x_m^{k_m},
\]
其中，我们是对所有将 $n$ 写为 $m$ 个自然数之和的方式进行求和。

## 定义

::: definition
给定[[自然数]] $k_1, \dotsc, k_m$，记 $n = k_1 + \cdots + k_m$。
定义**多项式系数**
\[
\binom{n}{k_1, \dotsc, k_m} =
\frac{n!}{k_1! \cdots k_m!}.
\]
:::

## 性质

### 基本性质

- 多项式系数总是[[自然数]]。这可以由其组合意义看出来。

- 多项式系数可以由[[二项式系数]]表示出来：
  \[
  \binom{n}{k_1, \dotsc, k_m} =
  \binom{n}{k_1}
  \binom{n - k_1}{k_2} \cdots
  \binom{n - k_1 - \cdots - k_{m-1}}{k_m}.
  \]
  注意到，乘积中最后一项其实是 $\binom{k_m}{k_m} = 1$。

```terms
多项式系数:
  en: multinomial coefficient
  fr: coefficient multinomial :m
  de: Multinomialkoeffizient :m
  ja: '[多項係数]<たこうけいすう>'
  ko: 다항 계수 (多項係數)
```
