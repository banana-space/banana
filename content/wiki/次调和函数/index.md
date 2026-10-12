---
title: 次调和函数
categories: [实分析]
---

## 定义

设 $\Omega\subset \mathbb{R}^d$为一开集。

::: definition
满足如下条件的函数$u\colon \Omega\to [-\infty,+\infty)$
叫做**次调和函数**：

- $u$ 是[[上半连续函数]]，且 $u$在 $\Omega$
  的每个连通分支上不全为 $-\infty$。

- 对 $\Omega$中任一闭球 $\overline{B(a,r)}$，都有
  \[
  u(a)\leq \frac{1}{|S(a,r)|}\int_{S(a,r)} u(y) \mathrm{d}
  \sigma (y).
  \]

:::

```terms
次调和函数:
  en: subharmonic function
  de: subharmonische Funktion
  fr: fonction sous-harmonique
  grc: ὑφαρμονικὴ συνάρτησις
  la: functio subharmonica
```
