---
title: 正则同态
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “性质”一节的命题“基变换”中，$A\otimes_RS$ 未必是 Noether 环，似乎需要额外假设（例如 $A\otimes_RS$ 是 Noether 环，或 $R\to S$ 是有限型的）才能谈论正则同态。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**正则同态**是一类 [[Noether 环]][[环同态|同态]]，
是[[光滑同态]]在未必[[有限型同态|有限型]]情形的推广。

## 定义

::: definition
称 [[Noether 环]]的同态 $R\to A$ 为**正则同态**，
指它是[[平坦同态]]，且对 $R$ 的任一[[素理想]]
$\mathfrak{p}$ 及其剩余域 $k(\mathfrak{p})$
的任一[[有限扩张]] $\ell$，$A\otimes_R\ell$ 都是[[正则环]]。
此时也称 $A$ 为**几何正则** $R$-代数。
:::

::: remark
由于 $A\otimes_Rk(\mathfrak{p})=
A_{\mathfrak{p}}/\mathfrak{p}A_{\mathfrak{p}}$
是 Noether 环，其[[有限同态|有限扩张]] $A\otimes_R\ell$
也是 Noether 环。
:::

::: remark
不说“正则 $R$-代数”是为了避免与[[正则环]]混淆。
:::

## 例子

::: example
由[[光滑同态]]的等价刻画，光滑同态正是[[有限型同态|有限型]]的正则同态。
:::

::: example
设 $R$ 是以下几类环之一：

1. [[域]]；

2. [[完备 Noether 局部环]]；

3. [[分式域]][[特征 (代数)|特征]] $0$ 的 [[Dedekind 整环]]；

4. 以上几类环上有限型的环；

设 $I$ 是 $R$ 的[[理想]]，$\hat{R}$ 是 $R$ 关于 $I$
的[[完备化 (交换代数)|完备化]]。则自然映射 $R\to\hat{R}$ 正则，
证明参见 [[G-环]]条目。本例连同下面的 @popescu
给出重要的 [[Artin 逼近定理]]。
:::

## 性质

::: proposition [基变换]
设 $R$、$S$、$A$ 是 Noether 环，$R\to A$ 是正则同态，
$R\to S$ 是环同态。则 $S\to A\otimes_RS$ 是正则同态。
:::

::: proposition [复合]
设 $R$、$A$、$B$ 是 Noether 环，$R\to A$，$A\to B$
是正则同态。则其复合 $R\to B$ 也是正则同态。
:::

::: proposition [平坦下降]
设 $R$、$A$、$B$ 是 Noether 环，$R\to A$，$A\to B$
是环同态，其中 $A\to B$ [[忠实平坦同态|忠实平坦]]，复合同态
$R\to B$ 正则。则 $R\to A$ 也正则。
:::

::: proof
这是因为[[正则环]]可以平坦下降。
:::

正则同态最不平凡的性质是以下 [[Popescu 逼近定理]]。

::: theorem [Popescu] {@popescu}
Noether 环同态 $R\to A$ 正则当且仅当 $A$
是光滑 $R$-代数的[[滤余极限]]。
:::

```terms
正则同态:
  en: regular homomorphism
```
