---
title: '$\kappa$-定言性'
aliases: [Kappa-定言性]
categories: [模型论]
---

在[[模型论]]里，
**$\kappa$-定言性**说的是“某一层”的[[模型]]的唯一性。

## 定义

设 $\kappa$ 是一个[[基数]]。

::: definition
称一个[[理论]] $T$ 是 **$\kappa$-定言的**，
如果任两个[[势]]为 $\kappa$ 的 $T$ 的模型都[[同构(模型)|同构]]。
:::

## 性质

### Łoś–Vaught 判别法

<see>[[Łoś–Vaught 判别法]]</see>

Łoś–Vaught 判别法说的是，
如果对于一个足够大（至少需要无限且大过[[一阶语言]]本身的基数）的基数 $\kappa$，
一个没有有限模型的理论 $T$ 是 $\kappa$-定言的，
那么 $T$ 是[[完备]]的。

### Morley 定言定理

<see>[[Morley 定言定理]]</see>

Morley 定言定理给出了所有定言性的结构。
它说的是，
在一个至多[[可数]]的一阶语言的框架下，
某个没有有限模型的理论 $T$ 的定言性只有如下几种可能：

- 对于任意 $\kappa$，
  $T$ 都不是 $\kappa$-定言的。

- 对于任意 $\kappa\ge\aleph_0$，
  $T$ 都是 $\kappa$-定言的。

- $T$ 是 $\kappa$-定言的等价于 $\kappa=\aleph_0$。

- $T$ 是 $\kappa$-定言的等价于 $\kappa>\aleph_0$。

## 例子

- 固定特征的代数闭域理论 [[ACF|$\mathsf{ACF}_q$]]（$q=0$ 或素数）
  不是 $\aleph_0$-定言的，
  但对所有 $\kappa>\aleph_0$ 都是 $\kappa$-定言的。
  这是因为固定特征的代数闭域完全被其在[[基域]]上的[[超越度]]决定。

- 无界稠密全序理论 [[DLO|$\mathsf{DLO}$]] 是 $\aleph_0$-定言的，
  但对所有 $\kappa>\aleph_0$ 都不是 $\kappa$-定言的，
  因为 $\mathbb{R}$ 与 $\mathbb{R}\sqcup\mathbb{R}$ 不同构
  （[[Dedekind 完备性]]），
  所以它不是 $2^{\aleph_0}$-定言的，
  再用 Morley 定言定理即可。

```terms
'$\kappa$-定言':
  en: '$\kappa$-categorical'
  fr: '$\kappa$-catégorique'
  de: '$\kappa$-kategorisch'
```
