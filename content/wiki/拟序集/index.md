---
title: 拟序集
aliases: [拟序, 预序, 预序集, Proset]
categories: [序论]
navboxes: [序论]
---

**拟序集**是类似[[偏序集]]的概念，
但允许“多个元素一样大”。

在偏序集中，我们要求关系满足反对称性，即若 $x \leq y$ 且 $y \leq x$，
则 $x = y$。也就是说，如果两个元素一样大，则它们一定相等。
在拟序集中，我们不要求这一点。

若集合 $X$ 带有拟序关系，
则我们可以得到[[等价关系]] $\sim$，
定义 $x \sim y$ 为 $x \leq y$ 且 $y \leq x$。
则拟序 $\leq$ 诱导[[商集]] $X / {\sim}$ 上的[[偏序集|偏序]]。
这说明，$X$ 上的拟序等价于 $X$ 上的等价关系，
加上一个商集上的偏序。

## 定义

::: definition [拟序]
[[集合]] $X$ 上的**拟序**是[[二元关系]] $\leq$，
满足以下性质：

- （**[[自反关系|自反性]]**）
  对任意 $x \in X$，有 $x \leq x$。

- （**[[传递关系|传递性]]**）
  对任意 $x, y, z \in X$，若 $x \leq y \leq z$，则 $x \leq z$。

此时，二元组 $(X, \leq)$ 称为**拟序集**。
:::

```terms
拟序:
  en: [preorder, quasiorder]
  fr: préordre :m
  de: Quasiordnung :f
拟序集:
  en: [preordered set, proset, quasiordered set]
  fr: ensemble préordonné :m
  de: quasigeordnete Menge :f
```
