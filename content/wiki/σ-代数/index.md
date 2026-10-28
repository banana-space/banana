---
title: '$\sigma$-代数'
aliases: [Sigma-代数, Σ-代数, Sigma-域, Σ-域]
categories: [集合论, 测度论]
---

<problems>
- “性质”一节需要扩充。
</problems>

**$\bm\sigma$-代数**（或 **$\bm\sigma$-域**）
是某个[[集合]]的一族[[子集]]构成的集合，
这族子集对于[[可数]][[并集|并]]、可数[[交集|交]]、取[[补集]]的运算封闭。
因而，$\sigma$-代数是一种特殊的[[集合代数]]。

$\sigma$-代数是[[测度论]]、[[概率论]]中的一种基本结构，
因为在[[测度空间]]或[[概率空间]]中，
所有[[可测集]]构成 $\sigma$-代数。

## 定义

::: definition [$\sigma$-代数] {@def-main}
[[集合]] $X$ 上的 **$\bm\sigma$-代数**是指 $X$ 的一族[[子集]]
$\mathcal{F} \subset 2^X$，
满足以下条件：

- $\varnothing \in \mathcal{F}$。

- 如果 $E \in \mathcal{F}$，
  那么 $X \setminus E \in \mathcal{F}$。

- 如果 $E_1, E_2, \dotsc,\in \mathcal{F}$
  是可数多个元素，那么它们的并
  $\bigcup_{n=1}^{\infty} E_n \in \mathcal{F}$。

:::

## 例子

- $\mathbb{R}^n$ 中的所有 [[Borel 集]]构成 $\sigma$-代数。

- $\mathbb{R}^n$ 中的所有 [[Lebesgue 可测集]]构成 $\sigma$-代数。

## 性质

```terms
'$\sigma$-代数':
  en: '$\sigma$-algebra'
  fr: tribu :f
```
