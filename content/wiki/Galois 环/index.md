---
title: Galois 环
categories: [交换代数]
---

::: convention
在本文中，

- $\mathbb Z_n=\mathbb Z/n\mathbb Z$ 指$n$个元素的[[循环群]]。

:::

在[[代数学]]中，**Galois 环** $\operatorname{GR}(p^n, r)$
是指剩余类环 $\mathbb{Z}_{p^n}$ 的 $r$ 次 [[Galois 扩张]]，其中
$p$ 是一个[[素数]]，而 $n, r$ 是正整数。Galois 环是[[特征 (代数)|特征]]
为 $p^n$ 且有 $p^{nr}$ 个元素的[[交换环]]。

Galois 环最简单也是最重要的两种特殊情况：

- Galois 环 $\operatorname{GR} (p^n, 1)$ 就是剩余类环 $\mathbb{Z}_{p^n}$。

- Galois 环 $\operatorname{GR} (p, r)$ 就是[[有限域]] $\mathbb{F}_{p^r}$。

一个不那么平凡的例子是 Galois 环 $\operatorname{GR}(4,3)$。它的特征
为 $4$ 且有 $4^3=64$ 个元素。一种构造方式是 $\mathbb{Z}[x] / (4, x^3+2x^2+x-1)$。
另一种等价的方式是 $\mathbb{Z}_4[\xi]$，其中 $\xi$ 是多项式
$f(x) = x^3 + 2x^2 + x - 1$ 的根。

## 定义

::: definition [Galois 环]
**Galois 环** $\operatorname{GR}(p^n, r)$ 是剩余类环
$\mathbb{Z}_{p^n}$ 的 $r$ 次 Galois 扩张，其中 $p$ 是一个素数，
而 $n,r$ 是正整数。
:::

::: definition [构造性定义]
**Galois 环**可以定义为商环
\[
\operatorname{GR}(p^n,r) \cong \mathbb{Z}[x] / (p^n, f(x)),
\]
其中 $f(x) \in \mathbb{Z}[x]$ 是$r$ 次首一多项式且在 $\mathbb{Z}_p$
上不可约。在同构的意义下，这个环只与 $p,n,r$ 有关，而与构造中的 $f$ 的选取无关。
:::

## 性质

::: proposition [局部性]
Galois 环都是[[局部环]]。唯一的[[极大理想]]是[[主理想]]
$(p) = p \operatorname{GR} (p^n, r)$。
剩余域 $\operatorname{GR} (p^n, r) / (p) \cong \mathbb{F}_{p^r}$。
:::

::: proposition [理想]
Galois 环的所有[[理想]]都是主理想，它们分别是 $(0) , (p^{n-1}) , \cdots , (p) , (1)$。
:::

::: proposition [子环]
对任意整除 $r$ 的 $s$，Galois 环 $\operatorname{GR} (p^n, r)$
有且只有一个同构于 $\operatorname{GR} (p^n, s)$ 的子环，而且
$\operatorname{GR} (p^n, r)$ 只有这些子环。
:::

::: proposition [Galois 群]
只要 $r$ 是 $s$ 的倍数，$\operatorname{GR} (p^n, r)$ 就是
$\operatorname{GR} (p^n, s)$ 的 Galois 扩张，其 [[Galois 群]]
同构于[[域扩张]] $\mathbb{F}_{p^r} / \mathbb{F}_{p^s}$ 的 Galois 群。
:::

```terms
Galois 环:
  en: Galois ring
```
