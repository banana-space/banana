---
title: 本质满函子
categories: [范畴论]
navboxes: [范畴论]
---

**本质满函子**是一类[[函子]]，是[[集合]]间[[满射]]概念的推广。
也就是说，称 $F \colon \mathcal{C} \to \mathcal{D}$ 为本质满函子，
大致是说 $\mathcal{D}$ 中所有[[对象]]都被 $F$ 映到。
但由于[[等价原理]]，$\mathcal{D}$ 中同构的对象都应被视作相同的，
因此我们只要求 $\mathcal{D}$ 中所有对象都同构于一个被 $F$ 映到的对象。
这样定义的本质满函子的概念满足等价原理。

## 定义

### 对普通范畴

::: definition
设 $\mathcal{C}, \mathcal{D}$ 为[[范畴]]，
$F \colon \mathcal{C} → \mathcal{D}$ 为[[函子]]。
称 $F$ 为**本质满函子**，
若满足以下条件：

- 对任意 $y ∈ \mathcal{D}$，存在 $x ∈ \mathcal{C}$，
  使得 $\mathcal{D}$ 中有[[同构]] $F(x) \simeq y$。

:::

## 性质

- [[范畴等价]]都是本质满函子。

- 本质满函子的复合仍是本质满函子。

```terms
本质满函子:
  en: essentially surjective functor
```
