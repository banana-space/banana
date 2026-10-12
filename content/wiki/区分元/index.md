---
title: 区分元
aliases: [余生成元, 生成元（范畴）]
categories: [范畴论]
navboxes: [范畴论]
---

[[范畴论]]中，**区分元**，或称**生成元**，
指的是能够区分不同[[态射]]的一个或一族对象。

## 定义

::: definition
称[[范畴]] $\mathcal{C}$ 中一族对象 $\{c_i\}_{i\in I}$
是 $\mathcal{C}$ 的**区分元**，指的是对任意对象
$x,y\in\mathcal{C}$ 以及任意态射 $f,g\colon x\to y$，
如 $f\ne g$，就存在 $i\in I$ 以及 $h\colon c_i\to x$，
使得 $f\circ h\ne g\circ h$。如族中只有一个对象 $c$，
也称 $c$ 为 $\mathcal{C}$ 的**区分元**。
对偶的概念称为**余区分元**；换言之，$\mathcal{C}$
的余区分元就是 $\mathcal{C}^\text{op}$ 的区分元。
:::

## 性质

以下定理说明“生成元”也是合理的术语。

::: theorem
设 $\mathcal{C}$ 是[[可表现范畴]]，$\{c_i\}_{i\in I}$
是其区分元。则 $\{c_i\}_{i\in I}$ 在余极限下生成
$\mathcal{C}$，即 $\mathcal{C}$ 中每个对象都是
$\{c_i\}_{i\in I}$ 的某个余极限。
:::

## 例子

- 一元集是[[集合范畴]]的区分元。

- $\mathbb{Z}$ 是[[群]]范畴和[[交换群]]范畴的区分元。

- $\mathbb{Z}[x]$ 是[[交换环]]范畴的区分元。

- 对[[环]] $R$，[[秩 (自由模)|秩]] $1$ [[自由模]]
  $R$ 是 $R$-[[模]]范畴的区分元。

- 以上几例可概括为：如 $\mathcal{C},\mathcal{D}$ 是范畴，
  $F\colon\mathcal{C}\rightleftarrows\mathcal{D}\:\!:\!G$
  是[[伴随对]]，$G$ 在映射集上是单射，则 $F$ 把区分元映到区分元。
  由伴随函子和区分元的定义容易看出此事。

- 对于[[集合范畴]]，\(\{0,1\}\) 是余区分元。

- 设 $\mathcal{C}$ 是小范畴，$\mathsf{P}(\mathcal{C})
    =\mathsf{Fun}(\mathcal{C}^\text{op},\mathsf{Set})$
  是 $\mathcal{C}$ 上[[预层]]的范畴。则由 [[Yoneda 引理]]容易看出，
  $\{h_c\}_{c\in\mathcal{C}}$ 是 $\mathsf{P}(\mathcal{C})$
  的一族区分元。

- 设 $\mathcal{C}$ 是[[景]]，$\mathsf{Sh}(\mathcal{C})$
  是其[[层]]范畴。则由以上两例，利用层到预层的忘却函子为[[全忠实]]，
  容易看出 [[Yoneda 预层]]的[[层化]] $\{h_c^\#\}_{c\in\mathcal{C}}$
  是 $\mathsf{Sh}(\mathcal{C})$ 的一族区分元。

```terms
区分元:
  en: separator
```
