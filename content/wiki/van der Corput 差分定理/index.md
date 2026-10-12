---
title: van der Corput 差分定理
aliases: [Van der Corput 差分定理]
categories: [动力系统]
---

**Van der Corput 差分定理**是[[一致分布]]理论中的定理，
说的是如实数列 $\{a_n\}_{n=1}^\infty$ 的差分数列
$\{a_{n+d}-a_n\}_{n=1}^\infty$ 对任意正整数 $d$ 都模 $1$
一致分布，则 $\{a_n\}_{n=1}^\infty$ 本身也模 $1$ 一致分布。

## 陈述

设 $G$ 是[[交换群|交换]]的[[紧群]]，最典型的情形为 $G=\mathbb{R}/\mathbb{Z}$。

::: theorem
设 $\{a_n\}_{n=1}^\infty$ 是 $G$ 中点列。如对任意正整数 $d$，
$\{a_{n+d}-a_n\}_{n=1}^\infty$ 在 $G$ 中一致分布，
则 $\{a_n\}_{n=1}^\infty$ 本身也在 $G$ 中一致分布。
:::

## 证明

由 [[Weyl 判别法]]，只需证明以下命题：

::: proposition
设 $\{z_n\}_{n=1}^\infty$ 是各项模长不超过 $1$ 的复数列，
且对任意正整数 $d$ 满足
$$
\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N
z_{n+d}\overline{z_n}=0;
$$
则
$$
\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^Nz_n=0.
$$
:::

::: proof
由于对任意 $D\in\mathbb{Z}_+$，
$$
\lim_{N\to\infty}\left(\frac{1}{N}\sum_{n=1}^Nz_n-
\frac{1}{DN}\sum_{n=1}^N\sum_{d=1}^Dz_{n+d}\right)=0,
$$
所以只需证对任意 $\varepsilon>0$，存在 $D\in\mathbb{Z}_+$，
$$
\limsup_{N\to\infty}\left|
\frac{1}{DN}\sum_{n=1}^N\sum_{d=1}^Dz_{n+d}\right|<\varepsilon.
$$
取 $D>1/\varepsilon$，由 [[Cauchy 不等式]]
\[
\begin{aligned}
  \limsup_{N\to\infty}\left|
  \frac{1}{DN}\sum_{n=1}^N\sum_{d=1}^Dz_{n+d}\right|^2&\le
  \limsup_{N\to\infty}\frac{1}{N}\sum_{n=1}^N
  \left|\frac{1}{D}\sum_{d=1}^Dz_{n+d}\right|^2\\
  &\le\limsup_{N\to\infty}\frac{1}{N}\sum_{n=1}^N
  \frac{1}{D^2}\sum_{c,d=1}^Dz_{n+c}\overline{z_{n+d}}\\
  &\le\frac{1}{D^2}\sum_{c,d=1}^D\limsup_{N\to\infty}
  \frac{1}{N}\sum_{n=1}^Nz_{n+c}\overline{z_{n+d}};
\end{aligned}
\]
而当 $c\ne d$ 时，由条件
$\lim_{N\to\infty}\frac{1}{N}\sum_{n=1}^N
  z_{n+c}\overline{z_{n+d}}=0$，所以上式实为
$$
\frac{1}{D^2}\sum_{d=1}^D\limsup_{N\to\infty}
\frac{1}{N}\sum_{n=1}^N|z_{n+d}|^2\le
\frac{1}{D^2}\sum_{d=1}^D\limsup_{N\to\infty}
\frac{1}{N}\sum_{n=1}^N1=\frac{1}{D}<\varepsilon,
$$
命题得证。
:::

## 推论

::: corollary
设 $f(x)=\sum_{i=1}^ka_ix^{r_i}$ 为关于正实数 $x$ 的函数，
其中 $r_1>\cdots>r_k$ 为实数，$a_1,\ldots,a_k$ 为非零实数。
设 $r_1>0$，且如 $r_1\in\mathbb{Z}$ 则再设 $a_1\notin\mathbb{Q}$。
则实数列 $\{f(n)\}_{n=1}^\infty$ 模 $1$ 一致分布。
:::

```terms
van der Corput 差分定理:
  en: van der Corput's difference theorem
  fr: théorème de la différence de van der Corput
```
