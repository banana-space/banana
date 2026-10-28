---
title: Dolbeault 上同调
categories: [复几何]
navboxes: [同调与上同调]
---

<problems>
- Dolbeault 定理的公式中 $\Omega^{p,0}$ 似乎应为下文所说的全纯 $p$-形式层 $\Omega^p$；定理中的全纯向量丛 $E$ 也未在陈述中引入。
</problems>

在[[复几何]]中，
**[[Pierre Dolbeault|Dolbeault]] 上同调**
是 [[de Rham 上同调]]在[[复流形]]上的一种类比。
它利用复流形上的 [[复微分形式|$(p, q)$-形式]]，
来构成链复形，以得到形如 $H^{p,q} (X)$ 的上同调。

Dolbeault 上同调是 [[Hodge 定理]]的基础。

## 定义

::: definition [Dolbeault 上同调]
[[复流形]] $X$ 的 **Dolbeault 复形**是[[链复形]]
\[
( \Omega^{p, \bullet} (X), \ \bar{\partial} ),
\]
其中 $\Omega^{p, q} (X)$ 是 $X$ 上 [[复微分形式|$(p, q)$-形式]]的空间，
$\bar{\partial}$ 是 [[Dolbeault 算子]]。

$X$ 的第 $(p, q)$ 阶 **Dolbeault 上同调**
定义为 Dolbeault 复形的[[链上同调]]：
\[
H^{p, q} (X) =
H^q ( \Omega^{p, \bullet} (X), \ \bar{\partial} ).
\]
:::

此定义也可以推广到一般的[[全纯向量丛]]上。

::: definition [Dolbeault 上同调]
[[复流形]] $X$ 上全纯向量丛 $E$ 的
**Dolbeault 复形**是[[链复形]]
\[
( \Omega^{p, \bullet} (E), \ \bar{\partial} ),
\]
其中 $\Omega^{p, q} (E)$ 是向量丛 $\Omega^{p,q} \otimes E$
的光滑截面构成的空间，
$\bar{\partial}$ 是 [[Dolbeault 算子]]。

$E$ 的第 $(p, q)$ 阶 **Dolbeault 上同调**
定义为 Dolbeault 复形的[[链上同调]]：
\[
H^{p, q} (E) =
H^q ( \Omega^{p, \bullet} (E), \ \bar{\partial} ).
\]
:::

$E$ 取为秩 $1$ 平凡丛时，$H^{p,q}(E)$ 即是 $H^{p,q}(X)$。

## Dolbeault 定理

::: theorem [Dolbeault]
设 $X$ 是[[复流形]]。则
\[
H^{p,q} (E) \simeq
H^q (X, \Omega^{p,0} \otimes_{\mathcal{O}_X} \mathcal{E}),
\]
其中右边是[[层上同调]]，
$\Omega^p$ 是 $X$ 上[[全纯微分形式|全纯 $p$-形式]]的[[层]]，
$\mathcal{E}$ 是由 $E$ 的全纯截面构成的层。
:::

```terms
Dolbeault 上同调:
  en: Dolbeault cohomology
  fr: cohomologie de Dolbeault :f
  de: Dolbeault-Kohomologie :f
```
