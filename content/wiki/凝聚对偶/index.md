---
title: 凝聚对偶
aliases: [Grothendieck 对偶]
categories: [层论]
navboxes: [层论]
---

<problems>
- “例子”一节需要扩充。
</problems>

在[[代数几何]]中，
**凝聚对偶**
（或称 **[[Alexandre Grothendieck|Grothendieck]] 对偶**）
是说，对[[概形]]的态射 $f \colon X \to Y$，
在某些假设下，
[[导出前推层|导出前推]]函子 $\mathrm{R} f_*$ 具有[[伴随函子|右伴随]] $f^\times$：
\[
(\mathrm{R} f_* \dashv f^\times) \colon
\mathsf{D_{QCoh}} (X) \rightleftarrows
\mathsf{D_{QCoh}} (Y),
\]
其中 $\mathsf{D_{QCoh}}$ 表示[[拟凝聚导出范畴]]。
也就是说，对任何 $\mathcal{F} \in \mathsf{D_{QCoh}} (X)$，
$\mathcal{G} \in \mathsf{D_{QCoh}} (Y)$，有
\[
\operatorname{Hom}_Y (\mathrm{R} f_* \mathcal{F}, \mathcal{G}) \simeq
\operatorname{Hom}_X (\mathcal{F}, f^\times \mathcal{G}).
\]
在合适的假设下，上述同构可以上升到层复形的拟同构。
这也是凝聚对偶的经典叙述：
\[
\mathop{\mathrm{R}\mathcal{H}\mkern-2mu\mathit{om}}\nolimits_Y (\mathrm{R} f_* \mathcal{F}, \mathcal{G}) \simeq
\mathrm{R} f_* \mathop{\mathrm{R}\mathcal{H}\mkern-2mu\mathit{om}}\nolimits_X (\mathcal{F}, f^! \mathcal{G}),
\]
其中 $f^!$ 在这些假设下与 $f^\times$ 相同。

当 $Y = \operatorname{Spec} k$ 为[[单点簇]]时，
凝聚对偶化为 [[Serre 对偶]]，
故前者可视为后者对一族（由 $Y$ [[参数化]]的）概形的推广。

## 叙述

::: theorem [凝聚对偶]
设 $X, Y$ 为[[拟紧态射|拟紧]]、[[拟分离态射|拟分离]][[概形]]，
$f \colon X \to Y$ 为概形态射。

- [[导出前推层|导出前推]]函子 $\mathrm{R} f_*$ 具有[[伴随函子|右伴随]] $f^\times$：
  \[
  (\mathrm{R} f_* \dashv f^\times) \colon
  \mathsf{D_{QCoh}} (X) \rightleftarrows
  \mathsf{D_{QCoh}} (Y).
  \]

- 如果 $X, Y$ 是 [[Noether 概形]]，
  且 $f$ 是[[紧合态射]]，
  则 $f^\times$ 与[[反常拉回层|反常拉回]]函子 $f^!$ 相同，
  且有层复形的拟同构
  \[
  \mathop{\mathrm{R}\mathcal{H}\mkern-2mu\mathit{om}}\nolimits_Y (\mathrm{R} f_* \mathcal{F}, \mathcal{G}) \simeq
  \mathrm{R} f_* \mathop{\mathrm{R}\mathcal{H}\mkern-2mu\mathit{om}}\nolimits_X (\mathcal{F}, f^! \mathcal{G}).
  \]

:::

（[@Neeman2021, Lemma 2.4, 6.1, Example 2.6]）

## 例子

## 参考文献

```bibliography
Neeman2021:
  type: article
  author: 'Neeman, Amnon'
  year: 2021
  title: 'New progress on Grothendieck duality, explained to those familiar with category theory and with algebraic geometry'
  journaltitle: Bull. Lond. Math. Soc.
  volume: 53
  number: 2
  pages: '315-335'
  doi: 10.1112/blms.12429
  url: https://londmathsoc.onlinelibrary.wiley.com/doi/pdfdirect/10.1112/blms.12429?download=true
  zbmath: '1466.14001'
```

```terms
Grothendieck 对偶:
  en: Grothendieck duality
  fr: dualité de Grothendieck :f
  de: Grothendieck-Dualität :f
凝聚对偶:
  en: coherent duality
  fr: dualité cohérente
  la: dualitas cohaerens
```
