---
title: Hodge 分解
categories: [复几何]
notices:
  - name: 问题
    items:
      - “证明”一节需要扩充。
      - “定理陈述”一节的定理似乎需要假设 $X$ 是紧 Kähler 流形；对非紧的 Kähler 流形（例如 $\mathbb{C}^*$）分解一般不成立。
---

**Hodge 分解**把
[[Kähler 流形]]的奇异上同调分解为 [[Dolbeault 上同调]]的直和，
它启发了 [[Hodge 结构]]的定义。

## 定理陈述

::: theorem [Hodge 分解]
对 $n$ 维 [[Kähler 流形]] $X$，有
$$
H^k(X,\mathbb{C}) =\bigoplus_{p+q=k}H^q(X,\Omega_X^p),
$$
其中左边是[[奇异上同调]]，右边是全纯微分丛的
[[Dolbeault 上同调]]。
此同构不依赖 Kähler 结构 $\omega$ 的选取。
:::

## 证明

```terms
Hodge 分解:
  en: Hodge decomposition
  de: Hodge-Zerlegung
  fr: décomposition de Hodge
```
