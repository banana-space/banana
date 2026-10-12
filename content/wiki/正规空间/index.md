---
title: 正规空间
aliases: [T4 空间]
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “例子”一节最后一例的证明不完整，缺少 $Y$ 与 $Z$ 没有不交邻域的论证。
navboxes: [一般拓扑]
---

**正规空间**是一类[[拓扑空间]]，
满足以下[[分离公理]]：该空间中任两个不交[[闭集]]都有不交的邻域。
正规的 [[Hausdorff 空间]]也称为 **$\mathbf{T}_{4}$ 空间**。

## 定义

::: definition
称[[拓扑空间]] $X$ 为**正规空间**，若满足以下条件：

- 对任意[[闭集]] $Y,Z\subseteq X$，如
  $Y\cap Z=\varnothing$，则存在开集 $U\supseteq Y$
  和 $V\supseteq Z$，使得 $U\cap V=\varnothing$。

若 $X$ 还是 [[Hausdorff 空间]]，
则称之为 **$\mathbf{T}_{4}$ 空间**。
:::

## 性质

::: proposition
正规空间的闭子空间正规。
:::

::: theorem [[[Urysohn 引理]]]
设 $X$ 是正规空间，$Y,Z\subseteq X$ 是不交闭子集。
则存在[[连续函数]] $f\colon X\to[0,1]$ 使得
$f^{-1}(0)\supseteq Y$，$f^{-1}(1)\supseteq Z$。
:::

## 例子

::: example
[[紧空间|紧]] [[Hausdorff 空间]]都是正规空间。
:::

::: example
[[序拓扑]]都是正规空间。证明参见条目[[序拓扑]]。
:::

::: example
[[正则空间|正则]] [[Lindelöf 空间]] 都是正规空间。
证明参见条目 [[Lindelöf 空间]]。
:::

::: example
考虑[[左闭直线]] $\mathbb{R}_\ell$，即[[实数]]集 $\mathbb{R}$
上由开集基
$$
\{[a,b)\mid a,b\in\mathbb{R},\,a<b\}
$$
生成的拓扑。

- $\mathbb{R}_\ell$ 是正规空间。

- $\mathbb{R}_\ell^2$ 不是正规空间。

由此可见正规空间的乘积未必正规。
事实上，如 Hausdorff 空间 $X$ 满足对任意[[基数]]
$\kappa$，[[积空间]] $X^\kappa$ 都正规，则 $X$
是[[紧空间]]。
:::

::: example
考虑最小无限序数 $\omega$ 和最小不可数序数 $\omega_1$，
并沿用序数记号，记 $\omega+1=\omega\cup\{\omega\}$，
$\omega_1+1=\omega_1\cup\{\omega_1\}$，
则它们的[[序拓扑]]分别为 $\omega$ 和 $\omega_1$
的[[一点紧化]]，于是积空间 $X=(\omega+1)\times(\omega_1+1)$
正规，因为它紧 Hausdorff。令 $U=X\setminus(\omega,\omega_1)$，
下证 $U$ 不正规，从而正规空间的子空间未必正规。

令 $Y=\{(a,b)\in U\mid a=\omega\}$，$Z=\{(a,b)\in U
\mid b=\omega_1\}$，只需证 $Y$ 和 $Z$ 没有不交邻域。
:::

```terms
正规空间:
  en: normal space
  fr: espace normal
```
