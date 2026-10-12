---
title: 集合代数
aliases: [代数（集合论）]
categories: [集合论]
---

**集合代数**（常简称为**代数**，也称为**域**）
是某个[[集合]]的一族[[子集]]构成的集合，
这族子集对于有限[[并集|并]]、有限[[交集|交]]、取[[补集]]的运算封闭。

一类叫做 [[$\sigma$-代数]]的集合代数是[[测度论]]和[[概率论]]中的基本对象，
因为所有[[可测集]]构成 $\sigma$-代数（特别地，也构成集合代数）。

## 定义

::: definition [集合代数] {@def-algebra}
设 $X$ 是[[集合]]。
则 $X$ 上的**代数**是指 $X$ 的一族[[子集]]
$\mathcal{F} \subset 2^X$，
满足以下条件：

- 如果 $E \in \mathcal{F}$，
  那么 $E$ 的补集 $X \setminus E \in \mathcal{F}$。

- 如果 $n \in \mathbb{N}$，且 $E_1, \dotsc, E_n \in \mathcal{F}$，
  那么 $E_1 \cup \cdots \cup E_n \in \mathcal{F}$。

:::

::: remark
在 @def-algebra 中，

- 有限个 $\mathcal{F}$ 中集合的交也在 $\mathcal{F}$ 中，
  因为它们的交是它们的补集的并的补集。

- 一定有 $\varnothing, X \in \mathcal{F}$，
  因为 $\varnothing$ 是 $0$ 个集合的并，
  而 $X$ 是 $\varnothing$ 的补集。

:::

::: remark
@def-algebra 等价于说，
$\mathcal{F}$ 是 [[Boole 代数]] $2^X$ 的子代数。
这也是这种结构叫做“代数”的原因。
:::

```terms
代数:
  en: algebra
  de: Algebra :f
  fr: algèbre :f
  grc: μεταριθμία :f
  la: algebra :f
集合代数:
  en: algebra of sets
  de: Mengenalgebra :f
  fr: algèbre d'ensembles :f
  grc: μεταριθμία συνόλων :f
  la: algebra copiarum :f
```
