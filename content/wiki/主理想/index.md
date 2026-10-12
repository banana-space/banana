---
title: 主理想
categories: [一般环论]
---

**主理想**是一个元素生成的[[理想]]。

## 定义

::: definition
对[[环]] $R$ 及其元素 $r$，

- $r$ 生成的**主左理想**，记作 $Rr$，
  指 $R$ 的[[理想|左理想]] $\set{ar | a\in R}$。

- $r$ 生成的**主右理想**，记作 $rR$，
  指 $R$ 的[[理想|右理想]] $\set{ra | a\in R}$。

- $r$ 生成的**主理想**，或称**主双边理想**，
  记作 $RrR$，指 $R$ 的[[理想]]
  $\Set{\sum_{i=1}^na_irb_i | a_1,\ldots,a_n,
    b_1,\ldots,b_n\in R}$。

换言之，环 $R$ 的主（左、右、双边）理想是 $R$ 中一个元素生成的
（左、右、双）子模。
:::

::: remark
对[[交换环]]，以上三者显然一样。
:::

## 例子

- 在任一环中，$(1)$ 和 $(0)$ 都是主理想。

- $\mathbb{Z}$ 的每个理想都是主理想。事实上 $\mathbb{Z}$ 是[[主理想整环]]。

- 任取[[除环]] $D$ 和自然数 $n$，考虑[[矩阵环]]
  $\operatorname{M}_n(D)$。它的每个（左、右、双边）理想都是主的。

- 任取[[域]] $k$，考虑二元[[多项式环]] $k[x,y]$。
  理想 $(x,y)$ 不是主的。

```terms
主理想:
  en: principal ideal
  de: Hauptideal
  fr: idéal principal
  grc: κύριον ἰδεῶδες
  la: ideal principale
```
