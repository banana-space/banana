---
title: 生成元
categories: [一般代数]
---

**生成元**是多种[[代数结构]]共有的概念。大体上，
如代数结构中一些元素能通过运算得到所有其它元素，
就称这些元素为生成元。

## 定义

::: definition {@朴素定义}
设 $X$ 是一个代数结构，例如[[群]]、[[环]]、[[域]]、[[模]]。
称其中一族元素 $\{x_i\}_{i\in I}$ 是其**生成元**，
指的是 $X$ 中包含 $\{x_i\}_{i\in I}$ 的子结构只有
$X$ 本身。此时也称 $\{x_i\}_{i\in I}$ **生成** $X$。
:::

上述定义可用[[范畴论]]严格写出：

::: definition {@范畴定义}
设 $\mathcal{C}$ 是[[范畴]]，带有保持[[单态射]]的函子
$U\colon\mathcal{C}\to\mathsf{Set}$。设
$X\in\mathcal{C}$，$S\subseteq UX$。
称 $S$ 是 $X$ 的一族**生成元**，
或称其**生成** $X$，指的是对 $X$ 的[[子对象]] $Y$，
只要 $UY\supseteq S$，就有 $Y=X$。
:::

::: remark
取 $\mathcal{C}$ 为特定代数结构（例如[[群]]、[[环]]、
[[域]]、[[模]]）的范畴，$U$ 为其[[忘却函子]]，@范畴定义 便化为 @朴素定义。
:::

可以像[[线性代数]]中定义[[基]]一样对生成元提极小条件，
但一般情况下它并没有像基一样好的性质。

::: definition
记号沿用 @范畴定义。称 $S$ 为 $X$
的**极小生成元组**，意思是 $S$ 生成 $X$，
但其任一真子集都不生成 $X$。
:::

## 例子

- 群 $G$ 的子集 $S$ 生成 $G$ 当且仅当 $G$
  的每个元素都是 $S$ 中元素及其逆元的有限乘积。

- 环 $R$ 的子集 $S$ 生成 $R$ 当且仅当 $R$
  的每个元素都是 $S$ 中元素的有限乘积的 $\mathbb{Z}$-线性组合。

- 域 $F$ 的子集 $S$ 生成 $F$ 当且仅当 $F$
  的每个元素都是 $S$ 中元素经有限步加减乘除所得。

- 设 $R$ 是环。则 $R$-模 $M$ 的子集 $S$ 生成 $M$
  当且仅当 $M$ 的每个元素都是 $S$ 中元素的 $R$-线性组合。

- 一般地，[[空集]]生成[[始对象]]，因其子对象只有自身。
  所以平凡群、整数环、零模都在各自的范畴中被空集生成。

## 性质

本节沿用 @范畴定义 的记号和假设。

::: proposition {@生成}
设 $\mathcal{C}$ 中子对象有任意交且被 $U$ 保持。则 $X$ 有唯一的子对象
$\langle S\rangle$，满足 $S\subseteq U\langle S\rangle$
且 $S$ 生成 $\langle S\rangle$。此时称 $\langle S\rangle$
为 $S$ 在 $X$ 中**生成**的子对象。
:::

::: proof
用条件取 $\langle S\rangle=\bigcap_{Y\subseteq X,\,
  S\subseteq UY}Y$ 即可。唯一性也显然。
:::

以下定理是[[线性空间]][[维数]]不变性在这里的弱版本。

::: theorem {@维数}
设 $\mathcal{C}$ 满足 @生成 的条件，
再设 $\mathcal{C}$ 中子对象有任意并，此时
$\langle-\rangle$ 操作保持任意并。设[[正则基数]] $\kappa$
满足：对 $X\in\mathcal{C}$，$T\subseteq UX$，
$x\in UX$，如 $x\in U\langle T\rangle$，则
存在 $T_x\subseteq T$，$|T_x|<\kappa$，使得
$x\in U\langle T_x\rangle$。则对 $X\in\mathcal{C}$
及其极小生成元组 $S,T\subseteq UX$：

1. $|S|<\kappa$ 当且仅当 $|T|<\kappa$。

2. 如 $|S|\ge\kappa$，则 $|S|=|T|$。

:::

::: proof
对每个 $s\in S$ 用条件取出 $T_s\subseteq T$，
$|T_s|<\kappa$，$s\in U\langle T_s\rangle$。
令 $T'=\bigcup_{s\in S}T_s$，则 $\langle T'\rangle
  \supseteq\langle S\rangle=X$。于是由 $T$ 的极小性，
$T'=T$。此时：

1. 如 $|S|<\kappa$，则由 $\kappa$ 是正则基数，
   小于 $\kappa$ 个小于 $\kappa$ 的基数相加仍然小于 $\kappa$，
   所以 $|T|<\kappa$。

2. 如 $|S|\ge\kappa$，则
   $$
   |T|\le\sum_{s\in S}|T_s|\le\kappa|S|=|S|.
   $$

最后由 $S$ 与 $T$ 的对称性即得欲证。
:::

::: corollary
群、环、域、模的极小生成元组要么都有限，要么都等势。
:::

::: proof
这是因为对于群、环、域、模，
一个元素被一族元素生成就被其中有限个生成，
也就是对 $\kappa=\aleph_0$ 满足 @维数 的条件。
:::

```terms
生成元:
  en: generator
  fr: générateur
```
