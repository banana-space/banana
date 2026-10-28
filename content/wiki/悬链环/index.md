---
title: 悬链环
aliases: [泛悬链环]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “例子”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有[[环]]都是[[交换环]]。

:::

[[交换代数]]中，**悬链环**指的是[[素理想]]间的极大素理想链都等长的环。
这是个非常弱的条件。我们在[[交换代数]]和[[代数几何]]遇到的环基本都是悬链的，
而举出不悬链的环倒是非常困难。

## 定义

::: definition
称环 $A$ 为**悬链环**，指对任意[[素理想]] $\mathfrak{p}
  \subseteq\mathfrak{q}$，存在 $d\in\mathbb{N}$，使得对每条素理想链
$$
\mathfrak{p}=\mathfrak{p}_0\subsetneqq\mathfrak{p}_1
\subsetneqq\cdots\subsetneqq\mathfrak{p}_e=\mathfrak{q},
$$
都有 $e\le d$，且对其中极大者，即中间无法再插入素理想的，
都有 $e=d$。换言之，[[谱空间]] $\operatorname{Spec}A$
是[[悬链空间]]。
:::

::: definition
称 [[Noether 环]] $A$ 为**泛悬链环**，指任一有限型
$A$-代数都是悬链环。
:::

## 性质

::: proposition
（泛）悬链环的[[商环]]、[[局部化]]都是（泛）悬链环。
泛悬链环上[[有限型代数]]是泛悬链环。
:::

::: corollary
只要 Noether 环 $A$ 上有限个变元的[[多项式环]]都是悬链环，
$A$ 就是泛悬链环。
:::

::: proposition
有[[对偶复形]]的 Noether 环是泛悬链环。
:::

::: proposition
[[CM 环]]是泛悬链环。特别地，[[正则环]]是泛悬链环。
:::

::: remark {@都是}
于是 $\mathbb{Z}$ 上有限型和域上有限型环都是泛悬链环。此外，由
[[Cohen 结构定理]]，完备 Noether 局部环都是完备正则局部环的商，
从而也是泛悬链环。所以我们在实践中遇到的环基本都是泛悬链环。
:::

## 例子

由于 @都是 说明（泛）悬链环遍地都是，本节就来举不是
（泛）悬链环的例子。参见 [@stacks, Tag 02JE]。

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
悬链环:
  en: catenary ring
  fr: anneau caténaire
  la: anellus catenarius
泛悬链环:
  en: universally catenary ring
  fr: anneau universellement caténaire
  la: anellus universaliter catenarius
```
