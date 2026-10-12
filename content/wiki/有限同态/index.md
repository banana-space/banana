---
title: 有限同态
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**有限同态**是一类[[环同态]]，
推广了域的[[有限扩张]]概念。

## 定义

::: definition
环同态 $A\to B$ 称为有限同态，指 $B$ 作为 $A$-模[[有限生成模|有限生成]]。
:::

## 例子

- 环满射是有限同态。

- 域的[[有限扩张]]是有限同态。

- 有限环之间的同态是有限同态。

- $L$ 是[[数域]]，$\mathcal{O}_L$ 为其[[整数环]]。
  则 $\mathbb{Z}\to\mathcal{O}_L$ 为有限同态。一般地，对
  [[Dedekind 环]] $A$，$A$ 的[[分式域]] $K$ 的有限[[可分扩张]]
  $L$，$A$ 在 $L$ 中的[[整闭包]] $B$，$A\to B$ 为有限同态。

- $\mathbb{Z}\to\mathbb{Q}$ 不是有限同态。
  一般地，[[局部化]]通常不是有限同态。

## 性质

::: proposition [在基变换下保持]
$A\to B$ 是有限同态，$A\to A'$ 是环同态，令
$B'=B\otimes_AA'$。则 $A'\to B'$ 是有限同态。
:::

::: proof
一般地，如 $M$ 是有限生成 $A$-模，被 $m_1,\ldots,m_n$
生成，那么 $M'=M\otimes_AA'$ 是有限生成 $A'$-模，
也被 $m_1,\ldots,m_n$ 生成。
:::

::: proposition
$A\to B\to C$ 是环同态。如果复合映射 $A\to C$ 有限，
则 $B\to C$ 亦然。
:::

::: proof
显然。
:::

::: proposition [传递性]
有限同态的复合是有限同态。
:::

::: proof
设 $A\to B$，$B\to C$ 是有限同态，
$b_1,\ldots,b_n$ 是 $B$ 作为 $A$-模的一组生成元，
$c_1,\ldots,c_m$ 是 $C$ 作为 $B$-模的一组生成元。
则不难发现 $\{b_ic_j\}_{i=1,\ldots,n,\,j=1,\ldots,m}$
是 $C$ 作为 $A$-模的一组生成元。于是 $A\to C$ 是有限同态。
:::

::: proposition
环同态有限当且仅当其[[有限生成同态|有限生成]]且[[整同态|整]]。
:::

所以整同态与有限同态差不太多。事实上有限同态的很多性质对于整同态成立，
这些性质的陈述、证明都参见[[整同态]]。

::: proposition
如环同态 $A\to B$ 有限且[[有限表现同态|有限表现]]，则 $B$
作为 $A$-模[[有限表现模|有限表现]]。
:::

```terms
有限同态:
  en: finite homomorphism
  de: endlicher Homomorphismus
  fr: homomorphisme fini
  grc: πεπερασμένος ὁμομορφισμός
  la: homomorphismus finitus
```
