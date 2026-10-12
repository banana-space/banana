---
title: 素理想
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**素理想**是[[素数]]在一般[[交换环]]上的推广。

在[[代数–几何对偶]]中，一个交换环相应的空间
（即它的[[谱 (交换代数)|谱]]）由它的所有素理想给出，
一个素理想即对应于空间的一个点。

素理想一般使用哥特体字母 $\mathfrak{p}$ 表示。

## 定义

::: definition
[[交换环]] $A$ 的理想 $\mathfrak{p}$ 称为**素理想**，
如果它不是 $A$ 本身，
且对任意 $x, y \in A$，$x y \in \mathfrak{p}$，
有 $x \in \mathfrak{p}$ 或 $y \in \mathfrak{p}$ 成立。
:::

::: remark
上述定义是如下素数性质在一般交换环上的推广：
对整数 $x, y$ 和素数 $p$，
如 $p \mid xy$，有 $p \mid x$ 或 $p \mid y$ 成立。
当 $A$ 为[[整数]]环 $\mathbb{Z}$ 时，
它的素理想即是由某个素数生成的理想或零理想。
:::

## 性质

::: proposition
[[交换环]] $A$ 的理想 $\mathfrak{a}$ 是素理想，
当且仅当[[商环]] $A / \mathfrak{a}$ 是[[整环]]。
:::

::: proposition
[[极大理想]]是素理想。
因此，每个非零[[交换环]]都有素理想。
:::

更一般地，满足一些条件的理想中极大者通常是素的。

::: proposition
$A$ 是环，$S$ 是其[[乘性子集]]。则与 $S$ 无交的理想中极大元是素理想。
:::

::: proof
设 $\mathfrak{p}$ 是这样一个极大元。则对 $a,b\notin\mathfrak{p}$，
有 $\mathfrak{p}+(a)$ 与 $\mathfrak{p}+(b)$ 都与 $S$ 有交。
则由乘性，$(\mathfrak{p}+(a))(\mathfrak{p}+(b))$
也与 $S$ 有交。而
$$
(\mathfrak{p}+(a))(\mathfrak{p}+(b))\subseteq\mathfrak{p}+(ab),
$$
故 $\mathfrak{p}+(ab)$ 也与 $S$ 有交，从而 $ab\notin\mathfrak{p}$。
:::

## 例子

- [[域]]上的[[多项式环]] $k[x_1, \dots, x_n]$ 中，
  由一个[[不可约多项式]]生成的理想是素理想，
  [[零理想]]也是素理想。

- [[整数]]环 $\mathbb{Z}$ 中，
  由一个[[素数]]生成的理想是素理想，
  零理想也是素理想。

```terms
素理想:
  en: prime ideal
  de: Primideal
  fr: idéal premier
  grc: πρῶτον ἰδεῶδες
  la: ideal primum
```
