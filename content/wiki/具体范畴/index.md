---
title: 具体范畴
categories: [范畴论]
navboxes: [范畴论]
---

**具体范畴**是指一个[[范畴]]，
其中的对象可以视为带额外结构的[[集合]]。
例如，[[群]]是带有群结构的集合，
从而[[群范畴]]是具体范畴。

## 定义

::: definition [具体范畴]
**具体范畴**是指二元组 $(\mathcal{C}, U)$，其中

- $\mathcal{C}$ 是一个[[范畴]]。

- $U \colon \mathcal{C} \to \mathsf{Set}$
  是 $\mathcal{C}$ 到[[集合范畴]]的[[忠实函子]]，
  称为 **[[遗忘函子]]**。

此时，如果 $U$ 被[[对象]] $x \in \mathcal{C}$ [[可表函子|表出]]，
即 $U \simeq \mathcal{C} (x, -)$，
就说 $\mathcal{C}$ 是**可表具体范畴**。
:::

## 例子

- [[集合范畴]] $\mathsf{Set}$ 是具体范畴，
  其遗忘函子是 $\mathsf{Set}$ 上的[[恒同函子]]，
  被[[单点集]]表出。

- [[拓扑空间范畴]] $\mathsf{Top}$ 是具体范畴，
  其遗忘函子被[[单点空间]]表出。

- [[同伦拓扑空间范畴]] $\mathsf{hTop}$ 不是具体范畴。

- [[群范畴]] $\mathsf{Grp}$ 是具体范畴，
  其遗忘函子被 $\mathbb{Z}$ 表出。

- [[环范畴]] $\mathsf{Ring}$ 是具体范畴，
  其遗忘函子被[[多项式环]] $\mathbb{Z} [x]$ 表出。
  [[无幺环范畴]] $\mathsf{Rng}$ 也是具体范畴，
  其遗忘函子被 $x \mathbb{Z} [x]$ 表出。

- [[域范畴]] $\mathsf{Field}$ 是具体范畴，
  但不是可表具体范畴，因为不同[[特征 (代数)|特征]]的域之间没有态射。

```terms
具体范畴:
  en: concrete category
  de: konkrete Kategorie
  fr: catégorie concrète
```
