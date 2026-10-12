---
title: 全子范畴
aliases: [满子范畴]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，一个[[范畴]]的**全子范畴**
（也称**满子范畴**）
是由该范畴的一部分[[对象]]及其间的所有[[态射]]组成的范畴。
例如，在[[集合范畴]]中，所有[[有限集]]及其间的[[映射 (集合论)|映射]]就构成全子范畴。

全子范畴的概念满足[[等价原理]]，而[[子范畴]]的概念则不满足。
这是因为若 $\mathcal{D}$ 是 $\mathcal{C}$ 的全子范畴，
而 $\mathcal{C}'$ [[范畴等价|等价]]于 $\mathcal{C}$，
则也可以找到 $\mathcal{C}'$ 中相应的全子范畴 $\mathcal{D}'$，
它等价于 $\mathcal{D}$。而子范畴并不满足这一性质。
因此，全子范畴是更自然的“范畴的一部分”的概念。

全子范畴与[[全忠实函子]]几乎是等价的概念，
因为在相差[[范畴等价]]的意义下，全忠实函子就是全子范畴的嵌入。
换言之，全忠实函子就是到某个全子范畴的范畴等价。

## 定义

::: definition [全子范畴]
[[范畴]] $\mathcal{C}$ 的[[子范畴]] $\mathcal{D}$ 称为**全子范畴**，
如果满足以下条件：

- 对任意 $x, y \in \mathrm{Ob} (\mathcal{C})$
  及 $f \in \mathcal{C} (x, y)$，
  若 $x, y \in \mathrm{Ob} (\mathcal{D})$，
  则有 $f \in \mathcal{D} (x, y)$。

换言之，含入函子 $\mathcal{D} \hookrightarrow \mathcal{C}$
是[[全忠实函子]]。
:::

```terms
全子范畴:
  en: full subcategory
  fr: sous-catégorie pleine :f
  de: volle Unterkategorie :f
```
