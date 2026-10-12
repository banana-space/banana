---
title: 极小素理想
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

顾名思义，**极小素理想**指的就是[[素理想]]中的极小者。
下面将会看到它总存在。

## 定义

::: definition
环 $R$ 的**极小素理想**指的是其[[素理想]]中极小者。
$R$-模 $M$ 的**极小素理想**指的是其支集
$\operatorname{Supp}(M)$ 的素理想中极小者，
在[[有限生成模|有限生成]]时亦即环
$R/\operatorname{Ann}(M)$ 的极小素理想。
:::

## 例子

- [[整环]]的极小素理想只有 $0$。

- $\mathbb{Z}[x,y]/(xy)$ 的极小素理想有两个，$(x)$ 与 $(y)$。

- [[Krull 维数|零维]]环的每个素理想都极小。

## 性质

::: theorem
每个非零环都有极小素理想。于是每个非零有限生成模也都有极小素理想。
:::

::: proof
由 [[Zorn 引理]]，只需证每一链素理想的交还是素理想。
设 $\{\mathfrak{p}_i\}_{i\in I}$ 是一链素理想，
$\mathfrak{p}$ 是其交。则对 $a,b\notin\mathfrak{p}$，
对每个 $i\in I$ 都有 $a,b\notin\mathfrak{p}_i$ 从而
$ab\notin\mathfrak{p}_i$，所以 $ab\notin\mathfrak{p}$。
所以 $\mathfrak{p}$ 是素理想。
:::

::: proposition
极小素理想的元素都是零因子。
:::

::: proof
设 $R$ 是环，$\mathfrak{p}$ 是其极小素理想，$a\in\mathfrak{p}$。
则[[局部化]] $R_\mathfrak{p}$ 只有一个素理想 $\mathfrak{p}R_\mathfrak{p}$，
故 $\mathfrak{p}R_\mathfrak{p}$ 为幂零根，于是 $a$ 在
$R_\mathfrak{p}$ 为幂零。特别地，$a$ 为 $R_\mathfrak{p}$
的零因子，$R_\mathfrak{p}$ 的自映射“乘以 $a$”不是单射。
由局部化的正合性知 $R$ 的自映射“乘以 $a$”也不是单射，
即 $a$ 是 $R$ 的零因子。
:::

```terms
极小素理想:
  en: minimal prime ideal
  de: minimales Primideal
  fr: idéal premier minimal
```
