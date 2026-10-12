---
title: Łoś–Vaught 判别法
aliases: [Łoś-Vaught 判别法]
categories: [模型论]
---

Łoś–Vaught 判别法是[[模型论]]里判别某个[[理论]]是否完备的方法，
由 [[Jerzy Łoś|Łoś]] 和 [[Robert Lawson Vaught|Vaught]] 于 1954 年提出。

## 定理与证明

::: theorem [Łoś–Vaught]
如果对于某个[[基数]] $\kappa\ge|\mathcal{L}|+\aleph_0$，
[[一阶语言]] $\mathcal{L}$ 里的某个理论 $T$ 是 [[$\kappa$-定言性|$\kappa$-定言的]]，
且没有有限模型，
那么 $T$ 是[[完备]]的。
:::

::: proof
只需证明任两个[[模型]]都是[[同构(模型)|模型等价]]。
设其为 $\mathcal{M}$ 和 $\mathcal{N}$，
则由 [[Löwenheim–Skolem 定理]]（无论是上升还是下降），
知总存在势为 $\kappa$ 的模型 $\mathcal{M}'\equiv \mathcal{M}$
和 $\mathcal{N}'\equiv\mathcal{N}$。
从而
\[
\mathcal{M}\equiv\mathcal{M}'\equiv\mathcal{N}'\equiv\mathcal{N}.
\]
这就说明了 $T$ 是完备的。
:::

## 应用

1. 由于固定特征的代数闭域理论 [[ACF|$\mathsf{ACF}_q$]]（$q=0$ 或素数）是 $\aleph_1$-定言的，
   知它们是完备的。

2. 因为无界稠密全序理论 [[DLO|$\mathsf{DLO}$]] 是 $\aleph_0$-定言的，
   所以它也是完备的。

## 参见

- [[$\kappa$-定言性]]

```terms
Łoś–Vaught 判别法:
  en: Łoś–Vaught test
  fr: critère de Łoś–Vaught
```
