---
title: 泛等范畴
aliases: [范畴（同伦类型论）]
categories: [范畴论, 类型论]
navboxes: [范畴论]
---

**泛等范畴**是[[同伦类型论]]中提倡的[[范畴]]定义，
它把传统意义上的[[范畴]]的定义从[[集合论]]语言直接翻译到[[类型论]]语言后，
再加上了“同构的对象相等”的条件，其中的相等便是同伦类型论的[[相等类型]]。
这个条件写出来非常像[[泛等公理]]，这可能也是泛等范畴的名字来源。

泛等范畴的概念弥补了范畴的定义中对象之间的相等关系定义不明确的缺点（见[[等价原理]]）。

## 定义

::: lemma
对于[[预范畴]] $\mathcal{C}$ 和 $A,B : \operatorname{Ob}(\mathcal{C})$，存在映射
\[
\operatorname{id→iso}: \operatorname{Id}_{\operatorname{Ob}(\mathcal{C})}(A,B) →A\simeq B
\]
其中 $\operatorname{Id}$ 对应[[相等类型]]，$\simeq$ 指[[同构]]。
:::

::: definition {@def:uc}
对于[[预范畴]] $\mathcal{C}$，如果 $\operatorname{id→iso}$ 是一个[[等价 (类型论)|等价]]，
那么称 $\mathcal{C}$ 为一个**泛等范畴**。
:::

## 性质

::: lemma
在泛等范畴 $\mathcal{C}$ 中，$\operatorname{Ob}(\mathcal{C})$ 是 $1$-类型（参见 [[$n$-类型]]），
即[[群胚]]。
:::

::: proof
这本质上是在说对于 $A, B ∈ \operatorname{Ob}(\mathcal{C})$，
类型 $\operatorname{Id}_{\operatorname{Ob}(\mathcal{C})}(A,B)$ 是[[集合 (类型论)|集合]]。
根据 @def:uc 我们已经知道它等价于类型 $A ≃ B$，该类型为集合。
:::

预范畴间的[[函子]]无需增加条件即可适用于泛等范畴，它们总是保持 $\operatorname{id→iso}$。

## 例子

- 同伦类型论中由集合构成的范畴，根据[[泛等公理]]可知这是一个泛等范畴。

```terms
泛等范畴:
  en: univalent category
```
