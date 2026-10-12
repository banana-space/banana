---
title: 孙子定理
aliases: [中国剩余定理]
categories: [初等数论, 一般环论]
navboxes: [初等数论]
---

**孙子定理**（西译**中国剩余定理**）
是指对两两[[互素]]的整数 $n_1, \dotsc, n_k$ 而言，
模这些整数的[[同余]]方程组
在模 $n = n_1 \dotsm n_k$ 的意义下有唯一解。例如，同余方程组
\[
\begin{cases}
  x \equiv 2 \pmod{3} \\
  x \equiv 3 \pmod{5} \\
  x \equiv 2 \pmod{7}
\end{cases}
\]
有唯一解
\[
x \equiv 23 \pmod{105}.
\]

用现代的语言来说，这一结论表明有[[环]]同构
\[
\begin{aligned}
  \mathbb{Z} / (n) & \simeq
  \mathbb{Z} / (n_1) \times \cdots \times \mathbb{Z} / (n_k), \\
  [x] & \mapsto
  ([x], \dotsc, [x]),
\end{aligned}
\]
其中 $[x]$ 表示整数 $x$ 的同余类。

孙子定理也可以推广到任何环，
表明该环中，
考虑模若干个两两互素理想的同余方程组，
则在模这些理想的交的意义下，
该同余方程组必有唯一解。

## 陈述与证明

::: theorem [孙子定理]
设 $R$ 是[[环]]，$I_1, \dotsc, I_k$ 为 $R$ 的[[理想|双理想]]，
满足对任意 $i \neq j$，理想 $I_i$ 与 $I_j$ 互素，即
\[
I_i + I_j = (1).
\]
记 $I = \bigcap_{i=1}^k I_i$。则有环同构
\[
\begin{aligned}
  R / I & \simeq
  R / I_1 \times \cdots \times R / I_k, \\
  [x] & \mapsto
  ([x], \dotsc, [x]).
\end{aligned}
\]
:::

::: proof
陈述中给出的映射确实是环同态，
因此，只需证明它既是[[单射]]又是[[满射]]。

为证明它是单射，设 $[x] \in R/I$ 该映射下的像为 $0$，其中 $x \in R$。
则 $x$ 属于每个 $I_i$，即 $x \in I$，即 $[x] = 0 \in R/I$。

为证明它是满射，只需证明同余方程组
$x \equiv x_i \pmod {I_i}$ 必有解，其中 $x_i \in R$ 是给定的元素。
事实上，只需证明同余方程组
\[
\begin{cases}
  x \equiv 1 \pmod{I_1}, \\
  x \equiv 0 \pmod{I_i} \quad (i = 2, \dotsc, k)
\end{cases}
\]
必有解，因为一般同余方程组的解可以写成此类同余方程组的解的[[线性组合]]。

由假设，存在元素 $a_i \in I_1$ 及 $b_i \in I_i$（$i = 2, \dotsc, k$），
使得 $a_i + b_i = 1$。从而
\[
1 = \prod_{i=2}^k (a_i + b_i)
\equiv \prod_{i=2}^k b_i \pmod {I_1}.
\]
因此，$x = \prod_{i=2}^k b_i$ 就是同余方程组的解。
:::

## 历史注记

一元同余方程组最早见于南北朝时期《[[孙子算经]]》：

> 有物不知其数，三三数之剩二，五五数之剩三，七七数之剩二。问物几何？答曰：二十三。

孙子给出了这一具体问题，即模 $3, 5, 7$ 的同余方程问题的具体解法：

> 术曰：三三数之剩二，置一百四十；
> 五五数之剩三，置六十三；
> 七七数之剩二，置三十。
> 并之，得二百三十三，以二百一十减之，即得。
> 凡三三数之剩一，则置七十；
> 五五数之剩一，则置二十一；
> 七七数之剩一，则置十五。
> 一百六以上，以一百五减之，即得。

解这种同余方程的统一算法于宋朝由[[秦九韶]]在其所著《[[数书九章]]》中提出，
称为“大衍术”。
其第一步为“大衍求一术”，也就是求同余方程组
\[
\begin{cases}
  x \equiv 1 \pmod{n_1}, \\
  x \equiv 0 \pmod{n_i} \quad (i = 2, \dotsc, k)
\end{cases}
\]
的解，称为“乘率”。
第二步为“大衍总数术”，
也就是将乘率线性组合，得到任何同余方程组的解。

```terms
孙子定理:
  en: Chinese remainder theorem
  de: chinesischer Restsatz :m
  fr: théorème des restes chinois :m
```
