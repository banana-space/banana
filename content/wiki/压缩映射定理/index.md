---
title: 压缩映射定理
aliases: [Banach 不动点定理]
categories: [一般拓扑]
---

<problems>
- “应用”一节需要扩充。
</problems>

**压缩映射定理**，
又称**Banach 不动点定理**，是拓扑学中的基本结论，
它在分析学的很多领域中有重要应用。
它是说如果一个完备度量空间的自映射一致压缩两点之间的距离，
那么它有唯一的不动点。

## 陈述

::: theorem
设 $(X, d)$ 是[[完备]][[度量空间]]，
$f \colon X \to X$ 是映射，
满足存在 $q \in [0,1)$，使得对任意 $x, y \in X$，
\[
d(f(x), f(y)) \leq q d(x, y)
\]
则 $f$ 有唯一的不动点。
:::

::: proof
任取一点 $x \in X$，考虑点列 $\{f^n(x)\}$，$n \in \mathbb{N}$。
则有
\[
d(f^n(x), f^{n+1}(x)) \leq q^n d(x, f(x))
\]
从而对任意 $m > n$，有
\[
d(f^n(x), f^m(x)) \leq
\sum_{k = n}^{m - 1} q^k d(x, f(x))
\leq \frac{q^n}{1 - q} d(x, f(x)).
\]
它在 $n \to \infty$ 时趋于 $0$，
因此 $\{f^n(x)\}$ 是 Cauchy 列，由完备知它收敛到一点 $x_0$。
由 $x_0$ 的定义知它是不动点。存在性得证。

如果有两个不动点 $x_0, y_0$，则
\[
d(x_0, y_0) \leq d(f(x_0), f(y_0))
\leq qd(x_0, y_0)
\]
因此 $d(x_0, y_0) = 0$，即有 $x_0 = y_0$。唯一性得证。
:::

## 应用

- 压缩映射定理可用于证明[[常微分方程解的存在唯一性]]。

```terms
Banach 不动点定理:
  en: Banach fixed point theorem
  de: Fixpunktsatz von Banach
  fr: théorème du point fixe de Banach
```
