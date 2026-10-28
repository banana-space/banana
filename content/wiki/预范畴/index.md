---
title: 预范畴
categories: [范畴论, 类型论]
navboxes: [范畴论]
---

<problems>
- “例子”一节中类型的同伦预范畴的态射取为函数类型的 $1$-截断，似乎应为 $0$-截断（预范畴的态射需要构成集合）。
</problems>

**预范畴**是[[同伦类型论]]中对传统意义上的[[范畴]]的直接翻译，
它把对象的集合换成类型（或者说[[$\infty$-群胚]]），
把态射的集合换成同伦类型论中的[[集合 (类型论)|集合]]。

## 定义

::: definition
**预范畴** $\mathcal{C}$ 由下列信息组成：

- 一个[[类型]]
  $\operatorname{Ob}(\mathcal{C})$，
  其实例对应 $\mathcal{C}$ 的 **[[对象]]**。

- 对任意 $A,B :\operatorname{Ob}(\mathcal{C})$，
  有一个[[集合 (类型论)|集合]] $\mathcal{C} (A, B)$，
  其实例对应从 $A$ 到 $B$ 的 **[[态射]]**。

- 对于 $A,B,C : \operatorname{Ob}(\mathcal{C})$，有二元函数
  \[
  \circ_{A,B,C}:\mathcal{C}(A,B) \to \mathcal{C}(B,C)\to \mathcal{C}(A,C)
  \]
  对应态射的 **[[复合]]**。

- 对于 $A : \operatorname{Ob}(\mathcal{C})$，有态射
  \[
  \mathbb{1}_A \in \mathcal{C} (A,A),
  \]
  对应 $A$ 的 **[[恒同态射]]**。

其中复合操作和恒同态射需要满足类似[[范畴]]的定义中的[[单位律]]和[[结合律]]。
:::

## 例子

传统范畴论中的范畴中，如果对象的类能用同伦类型论中的类型定义，那么直接翻译得到的范畴就是一个预范畴。

在有[[宇宙 (类型论)|宇宙]] $\mathcal U$ 的类型论中，以类型 $\mathcal U$ 为对象，
[[函数类型]]的 $1$-[[截断类型|截断]]为态射，可以得到一个预范畴，该范畴叫**类型的同伦预范畴**。

```terms
预范畴:
  en: precategory
  fr: précatégorie
  la: praecategoria
```
