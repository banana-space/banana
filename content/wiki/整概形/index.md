---
title: 整概形
categories: [概形论]
navboxes: [概形论]
---

<disambiguation>
注意与[[整态射]]、[[整同态]]区分。
</disambiguation>

**整概形**是[[整环]]的整体版本，
也就是说它在局部上是整环的[[素谱|谱]]，
并且满足此一性质的连通概形都是整概形（@局部性质）。

整概形的重要性质是它有[[普遍点]]，
且它结构层在普遍点处的[[茎]]是[[域]]。
由于域有许多好性质，许多好性质会在整概形的某个稠密开集上成立，
这即是[[广泛性质]]理论。

## 定义

::: definition
**整概形**是同时[[不可约概形|不可约]]且[[既约概形|既约]]的概形。
:::

## 性质

::: proposition [局部性质] {@局部性质}
- 整概形的每个[[仿射概形|仿射]]开集 $U$ 都是[[整环]]的[[素谱|谱]]。

- 如连通概形存在一组开覆盖，使得其中每个开集均是整环的谱，
  则它是整概形。

:::

::: proposition [普遍点]
整概形 $(X, \mathcal{O}_X)$ 有[[普遍点]] $\eta$，
且[[茎]] $\mathcal{O}_{X, \eta}$ 是[[域]]，
称为它的**函数域**。
此外，对任意开集 $U \subset X$，自然的映射
$\mathcal{O}(U) \to \mathcal{O}_{X, \eta}$ 是单射。
:::

```terms
整概形:
  en: integral scheme
  de: Integritätsschema
  fr: schéma intègre
  grc: ἀκεραῖον σχῆμα
  la: schema integrum
```
