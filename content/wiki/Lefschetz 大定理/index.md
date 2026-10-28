---
title: Lefschetz 大定理
aliases: [Hard Lefschetz theorem]
categories: [复几何]
---

<problems>
- “证明”一节需要扩充。
</problems>

**[[Lefschetz]] 大定理**是说对[[紧]][[Kähler 流形]]，
可以通过把上同调类与辛形式做[[杯积]]，
来诱导它的不同阶的上同调群的同构。

Lefschetz 大定理是 [[Hodge 理论]]中的重要组成部分。

## 定理陈述

::: theorem [Lefschetz 大定理]
对复 $n$ 维[[紧]][[Kähler 流形]] $X$，记其定义中辛形式为 $\omega$，
则对自然数 $p,q$，$p + q \leq n$，有同构
\[
H^{p,q}(X) \to H^{n-q, n-p}(X),
\]
由 $x \mapsto x \wedge \omega^{n-p-q}$ 诱导，
$H^{p,q}(X)$ 为 [[Dolbeault 上同调]] $H^q(X, \Omega_X^p)$。
:::

## 证明

```terms
Lefschetz 大定理:
  en: hard Lefschetz theorem
  fr: théorème de Lefschetz difficile
```
