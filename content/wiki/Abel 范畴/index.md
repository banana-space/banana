---
title: Abel 范畴
aliases: [Serre 子范畴, Abel 子范畴]
categories: [同调代数]
---

**Abel 范畴**是[[同调代数]]中的一类常用的范畴，
包括[[环]]上的[[模]]范畴（特别地，[[Abel 群]]的范畴），
或更一般地，[[模层]]范畴。
同调代数和[[链复形]]的理论常常需要建立在 Abel 范畴上。

## 定义

::: definition [Abel 范畴]
称[[加性范畴]] $\mathcal{C}$ 为 **Abel 范畴**，指它满足公理

(AB1)
      $\mathcal{C}$ 的每个态射都具有[[核 (代数)|核]]与[[余核]]。

(AB2)
      $\mathcal{C}$ 中的每个[[单射 (范畴论)|单射]]都是[[正规态射]]
      （即，等于某个态射的[[核 (代数)|核]]）；
      $\mathcal{C}$ 中的每个[[满射 (范畴论)|满射]]都是[[余正规态射]]
      （即，等于某个态射的[[余核]]）。

:::

::: remark
(AB2\) 有以下几种等价表述：

- $\mathcal{C}$ 中的每个单射都是它的余核的核；
  $\mathcal{C}$ 中的每个满射都是它的核的余核。

- 对 $\mathcal{C}$ 中任意态射 $f$，
  它诱导的其[[余像]]到其[[像]]的映射
  \[
  \operatorname{coker} ( \ker f )
  \to \ker ( \operatorname{coker} f )
  \]
  是同构，从而二者都能看作 $f$ 的像。

:::

有时还要对 Abel 范畴 $\mathcal{C}$ 提更强的条件。下面这些越来越强的公理由
[[Grothendieck]] 在其 *Tohoku* 文中引入。

::: definition [Grothendieck 公理]
(AB3) $\mathcal{C}$ [[余完备]]。

(AB4) $\mathcal{C}$ 余完备，
      且无穷[[直和]][[正合函子|正合]]。

(AB5) $\mathcal{C}$ 余完备，且[[滤余极限]][[正合函子|正合]]。

(AB6) $\mathcal{C}$ 余完备，且对任意 $c\in\mathcal{C}$
      及其一些子对象 $(c^j)_{j\in J}$，以及对每个 $j\in J$，
      $c^j$ 的一[[滤族]]的子对象 $(c^j_i)_{i\in I_j}$，下式两边存在且相等：
      $$
      \bigcap_{j\in J}\bigcup_{i\in I_j}c^j_i
      =\bigcup_{(i_j)\in\prod_{j\in J}I_j}\bigcap_{j\in J}
      c^j_{i_j}.
      $$

称 $\mathcal{C}$ 满足 (AB$n$*) 意思是 $\mathcal{C}^\mathrm{op}$
满足 (AB$n$)。

[[Grothendieck Abel 范畴]]指的是满足 (AB5) 且有[[生成元]]的
Abel 范畴。
:::

也要对[[子范畴]]提条件。

::: definition [子范畴]
Abel 范畴 $\mathcal{C}$ 的

- **Abel 子范畴**指的是其[[加性子范畴]]
  $\mathcal{D}$，满足 $\mathcal{D}$ 对 $\mathcal{C}$ 中取核与余核的操作均封闭。
  显然，这等价于 $\mathcal{D}$ 也是 Abel 范畴且含入函子[[正合函子|正合]]。

- **Serre 子范畴**指的是其满 Abel 子范畴
  $\mathcal{D}$，满足对取子对象、商对象、[[扩张]]封闭，
  即对$\mathcal{C}$ 中[[短正合列]]
  $$
  0\to X\to Y\to Z\to0,
  $$
  $X,Z\in\mathcal{D}\iff Y\in\mathcal{D}$。
  如果仅有 $X,Z\in\mathcal{D}\implies Y\in\mathcal{D}$，
  则称 $\mathcal{D}$ 为**弱 Serre 子范畴**。

:::

## 例子

- [[Abel 群]]的范畴 $\mathsf{Ab}$
  是 Abel 范畴；
  其中有限生成 Abel 群构成的满子范畴也是 Abel 范畴；
  其中有限 Abel 群构成的满子范畴也是 Abel 范畴。

- 设 $R$ 是[[环]]，
  则 $R$-[[模|左模]]构成的范畴 $R\text{-}\mathsf{Mod}$
  和 $R$-[[模|右模]]构成的范畴 $\mathsf{Mod}\text{-}R$
  都是 Abel 范畴。
  [[Freyd–Mitchell 嵌入定理]]说明，
  任何小 Abel 范畴都[[范畴等价|等价]]于某个 $R$-模范畴的[[满子范畴]]。

- 如果 $R$ 是[[Noether 环|左 Noether 环]]，
  则所有[[有限生成模|有限生成]] $R$-[[模|左模]]构成的范畴是 Abel 范畴。

- 设 $(X, \mathcal{O}_X)$ 是[[赋环空间]]，
  则所有 $\mathcal{O}_X$-[[模层|左模]]构成的范畴
  $\mathcal{O}_X\text{-}\mathsf{Mod}$
  是 Abel 范畴。特别地，
  $X$ 上所有 [[Abel 层]]构成 Abel 范畴。

- 设 $\mathcal{C}$ 是 Abel 范畴，
  则 $\mathcal{C}$ 上所有[[链复形]]构成的范畴
  $\mathsf{Ch}(\mathcal{C})$
  是 Abel 范畴。

- 设 $X$ 是[[拓扑空间]]，
  则 $X$ 上的（实或复）[[向量丛]]不构成 Abel 范畴，
  但构成[[正合范畴]]。

```terms
Abel 范畴:
  en: abelian category
  de: abelsche Kategorie :f
  fr: catégorie abélienne :f
```
