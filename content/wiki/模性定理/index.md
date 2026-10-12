---
title: 模性定理
aliases: [Taniyama–Shimura 猜想, Taniyama-Shimura 猜想]
categories: [模形式论]
navboxes: [模形式论]
---

**模性定理**
（又称 Taniyama–Shimura 猜想（谷山–志村猜想）、Taniyama–Weil 猜想或 Taniyama–Shimura–Weil 猜想）
描述了[[椭圆曲线]]和[[模曲线]]之间的关系。
大致上是说：

“所有 $\mathbb{Q}$ 上的椭圆曲线都是模的。”

Wiles 通过证明[[半稳定]]的椭圆曲线的模性定理而完成了 [[Fermat 大定理]]的证明。
而 Breuil、Conrad、Diamond 和 Taylor 在 2001 年证明了完整的模性定理。

模性定理可以被归结为[[Langlands 纲领]]的一个特例。

## 历史

Taniyama 在 1955 年发现了模性定理的粗略版本，
并与其同事 Shimura 在 1957 年严格叙述了模性定理。
Weil 在 1967 年重新发现了模性定理，并解释它“理应是对的”。

在 1980 年代，Frey 通过尝试证明“Fermat 大定理的非平凡解能产生非模的椭圆曲线”
来说明模性定理能够推出 Fermat 大定理。
这个证明最终由 Serre 和 Ribet 完成，然后掀起了研究模性定理的浪潮：
因为它能解决 Fermat 大定理。

但是在当时，大部分数论学家认为模性定理极难，或几乎不可能证明。
Coates 和 Ribet 都发表过类似的观点。

Wiles 于 1993 年发表了对半稳定的椭圆曲线的模性定理的证明初稿，
并说明了半稳定的情况足够推出 Fermat 大定理。
不久后审稿人之一 Katz 发现了其中使用 [[Euler 系]]方法的一个漏洞。
经过努力，在他的学生 Taylor 的帮助下，Wiles 最终于 1994 年修复了这个漏洞。
从而 Wiles 证明了 Fermat 大定理，引起了极大的轰动。

对于非半稳定的情况，Breuil、Conrad、Diamond 和 Taylor
在 2001 年给出了一篇近 100 页的论文来完成模性定理的完整证明。

## 陈述

模性定理的陈述有很多等价刻画，在这里选取四个等价命题陈述：

::: theorem [模性定理，$X_{\mathbb{Q}}$-版本]
假设有 $\mathbb{Q}$ 上的椭圆曲线 $E$。
那么存在正整数 $N$ 以及一个满态射（在 $\mathbb{Q}$-代数簇的意义下）
\[
X_0(N)\longrightarrow E.
\]
:::

::: theorem [模性定理，$A_{\mathbb{Q}}$-版本]
假设有 $\mathbb{Q}$ 上的椭圆曲线 $E$。
那么存在正整数 $N$ 和权为 2 的[[新形式]]
$f\in \mathcal{S}_2(\Gamma_0(N))$，
以及一个满同态
\[
A'_{f}\longrightarrow E.
\]
其中 $A'_{f}$ 是 $f$ 关联的 [[Abel 簇]]。
:::

::: theorem [模性定理，$L$-版本]
假设有 $\mathbb{Q}$ 上的椭圆曲线 $E$，[[导子]]为 $N$。
那么存在权为 2 的新形式 $f\in \mathcal{S}_2(\Gamma_0(N))$，使得
\[
L(s,f)=L(s,E).
\]
左边是 $f$ 的 Hecke $L$-函数，右边是 Hasse–Weil $L$-函数。
:::

::: theorem [模性定理，$R$-版本] {@R-version}
假设有 $\mathbb{Q}$ 上的椭圆曲线 $E$。
那么存在某个素数 $\ell$，使得相应的 Galois 表示 $\rho_{E,\ell}$
是[[模 Galois 表示|模]]的。
:::

@R-version 也是 Wiles
以及随后的 Breuil、Conrad、Diamond 和 Taylor
证明的模性定理版本。

```terms
模性定理:
  en: modularity theorem
  de: Modularitätssatz :m
  fr: théorème de modularité :m
```
