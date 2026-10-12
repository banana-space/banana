---
title: 绝对余极限
categories: [范畴论]
navboxes: [范畴论]
---

**绝对余极限**指的是作用任何[[函子]]之后都是[[余极限]]的图表。

## 定义

::: definition
设 $\mathcal{C}$、$I$ 是[[范畴]]，
$F\colon I\to\mathcal{C}$ 是[[函子]]，
有[[余极限]] $X$，构成余极限图表 $F^\triangleright\colon
  I^\triangleright\to\mathcal{C}$。称此余极限图表**绝对**，
或称 $X$ 是 $F$ 的**绝对余极限**，指的是对任意的范畴
$\mathcal{D}$ 和函子 $G\colon\mathcal{C}\to\mathcal{D}$，
$G\circ F^\triangleright\colon I^\triangleright\to\mathcal{D}$
仍是余极限图表，换言之
$$
G(X)=\operatornamewithlimits{colim}_{i\in I}G(F(i)).
$$
:::

::: remark
此定义可以大致理解为，“$X$ 是 $F$ 的余极限”
这件事可由图表性的信息见证，而不涉及范畴 $\mathcal{C}$
更具体的性质。
:::

## 例子

- 最重要的绝对余极限是[[收缩]]。

- 在 $(\infty,1)$-范畴论中，[[分裂单纯对象]]是绝对余极限。
  在 $1$-范畴论中这退化为[[分裂余等子]]。

```terms
绝对余极限:
  en: absolute colimit
```
