---
title: 特征（代数）
aliases: [特征（环论）]
categories: [域论, 一般环论]
navboxes: [域论]
---

在[[代数学]]中，[[域]]的**特征**是一个[[自然数]]，
指该域中满足
\[
\underbrace{1 + \cdots + 1}_{n} = 0
\]
的最小正整数 $n$。若这样的 $n$ 不存在，则定义特征为 $0$。例如，

- [[有理数]]域、[[实数]]域、[[复数]]域的特征均为 $0$。

- [[有限域]] $\mathbb{F}_{p^n}$ 的特征为 $p$，其中 $p$ 为[[素数]]。

域的特征一定是 $0$ 或素数。

这一定义也可以推广到一般的[[环]]，但环的特征不一定是 $0$ 或素数。

## 定义

::: definition [特征]
[[环]] $R$ 的**特征** $\operatorname{char} (R)$ 是指 $R$ 中满足
\[
\underbrace{1 + \cdots + 1}_{n} = 0
\]
的最小正整数 $n$。若这样的 $n$ 不存在，则定义特征为 $0$。
:::

以下定义在某些情况下比较方便。

::: definition [指数特征]
[[域]] $F$ 的**指数特征** $e(F)$ 指如下整数：

- 如 $F$ 特征 $0$，则 $e(F)=1$；

- 如 $F$ 特征 $p>0$，则 $e(F)=p$。

:::

## 例子

::: example
整数环 $\mathbb{Z}$ 的特征为 $0$。
事实上，对任意正整数 $n$，都有
\[
\underbrace{1+\cdots+1}_{n}=n\neq 0.
\]
同理，$\mathbb{Q}$、$\mathbb{R}$ 和 $\mathbb{C}$
的特征也都是 $0$。
:::

::: example
数域总具有特征 $0$。
例如，
\[
\operatorname{char}\mathbb{Q}(\sqrt{2})=0,
\qquad
\operatorname{char}\mathbb{Q}(i)=0.
\]
:::

一般地，[[域扩张]]不会改变特征。

```terms
特征:
  en: characteristic
  fr: caractéristique :f
  de: Charakteristik :f
指数特征:
  en: exponential characteristic
  fr: caractéristique exponentielle :f
  de: Exponentiellcharakteristik :f
```
