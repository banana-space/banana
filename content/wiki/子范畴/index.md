---
title: 子范畴
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
一个[[范畴]]的**子范畴**是由该范畴的一部分[[对象]]、[[态射]]组成的范畴。

在文献中通常直接以此作为子范畴的定义，
但这样的子范畴概念将与[[等价原理]]相悖：
等价原理要求范畴论的任何概念都应被[[范畴等价]]保持；对子范畴而言，
若 $\mathcal{D}$ 是 $\mathcal{C}$ 的子范畴，
而 $\mathcal{C}$ 与 $\mathcal{C}'$ 范畴等价，
我们也希望 $\mathcal{D}$ 等价于 $\mathcal{C}'$ 的某个子范畴。
然而，这一点在通常的定义下并不成立：
例如，[[单点范畴]]等价于一个有很多互相同构的对象的范畴，
而后者在通常的定义下比前者有更多互不等价的子范畴。

因此，相比于文献中通常的定义，我们增加一个额外的要求，
即子范畴应包含其中对象之间的所有[[同构]]。
换言之，子范畴的[[对象群胚]]由原范畴的对象群胚的某些[[连通分支]]构成。
这样即可使得子范畴的概念满足等价原理。
事实上，这一额外条件等价于要求相应的含入函子是[[范畴的范畴|范畴的 $2$-范畴]]中的[[单态射]]，
因此是一个自然的条件。

另一种更强的子范畴的概念是[[全子范畴]]，
即要求子范畴包含其中对象之间的所有态射。
全子范畴是比子范畴更常用的概念，
我们也常将其作为范畴间“嵌入”这一想法的合适表述。

## 定义

::: definition [子范畴]
设 $\mathcal{C}$ 是[[范畴]]。
则 $\mathcal{C}$ 的**子范畴** $\mathcal{D}$ 由以下信息组成：

- [[子类]] $\mathrm{Ob} (\mathcal{D}) \subset \mathrm{Ob} (\mathcal{C})$。

- 对任何 $x, y \in \mathrm{Ob} (\mathcal{D})$，有一个[[子集]]
  $\mathcal{D} (x, y) \subset \mathcal{C} (x, y)$，

满足以下条件：

- 对任何 $x, y \in \mathrm{Ob} (\mathcal{D})$
  及 $f \in \mathcal{C} (x, y)$，
  若 $f$ 是 $\mathcal{C}$ 中的[[同构]]，则
  $f \in \mathcal{D} (x, y)$。
  特别地，对任何 $x \in \mathrm{Ob} (\mathcal{D})$，
  有 $\mathbb{1}_x \in \mathcal{D} (x, x)$。

- 对任何 $x, y, z \in \mathrm{Ob} (\mathcal{D})$，
  及任何 $f \in \mathcal{D} (x, y)$，
  $g \in \mathcal{D} (y, z)$，有
  $g \circ f \in \mathcal{D} (x, z)$，
  其中 $\circ$ 是 $\mathcal{C}$ 中的复合。

上述信息使得 $\mathcal{D}$ 也满足[[范畴]]的定义。
:::

```terms
子范畴:
  en: subcategory
  fr: sous-catégorie :f
  de: Unterkategorie :f
```
