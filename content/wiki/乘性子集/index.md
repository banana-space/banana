---
title: 乘性子集
aliases: [乘法子集, 乘闭子集]
categories: [交换代数]
navboxes: [交换代数]
---

[[交换代数]]中，**乘性子集**，或称**乘法子集**，
指的是交换环乘法幺半群的子[[幺半群]]。它主要用来定义[[局部化]]。

## 定义

::: definition [乘性子集]
$A$ 是交换环，$S\subseteq A$ 是其子集。称其为乘性子集，
指 $S$ 是幺半群 $(A,\cdot)$ 的子幺半群。换言之，要求
$1\in S$，且对于 $s,t\in S$，$st\in S$。
:::

::: remark
有的地方只要求乘性子集是子半群，未必含幺。实践中没有区别，
因为乘性子集只用来局部化。
:::

::: definition [饱和]
记号同上。称乘性子集 $S$ 为**饱和**，指的是其在整除关系下封闭，
即对 $s\in S$，如 $s=tu$，则 $t,u\in S$。乘性子集的**饱和化**指包含它最小的饱和乘性子集。
那么 $S$ 的饱和化无非就是
$$
\bar{S}=\{t\in A\mid\exists u\in A,\,tu\in S\}.
$$
:::

由[[局部化]]的构造不难发现，$\bar{S}$ 正是在局部化
$S^{-1}A$ 中变得可逆的元素，从而由局部化的万有性质，
$\bar{S}^{-1}A=S^{-1}A$；并且对乘性子集 $S,T$，
$S^{-1}A=T^{-1}A\iff\bar{S}=\bar{T}$。
于是饱和化展示了对一个乘性子集局部化到底使用了乘性子集的哪些信息。
但它意义不大。

## 例子

以下 $A$ 是交换环。

- 对素理想 $\mathfrak{p}\subseteq A$，
  $A\setminus\mathfrak{p}$ 是乘性子集。特别地，如 $A$ 是整环，
  则 $A\setminus0$ 是乘性子集。

- 对 $a\in A$，$\{1,a,a^2,\ldots\}$ 是乘性子集。

- 对理想 $I\subseteq A$，$1+I$ 是乘性子集。

- $A$ 中所有[[零因子|非零因子]]构成乘性子集。

```terms
乘性子集:
  en: multiplicative subset
  de: multiplikative Teilmenge
  fr: sous-ensemble multiplicatif
饱和:
  en: saturated
  de: saturiert
  fr: saturé
```
