---
title: 运算
aliases: [二元运算]
categories: [集合论]
---

**运算**是指在一个[[集合]]中，
给定两个元素（也可以是 $n$ 个元素），
得到一个新元素的规则。
例如，[[四则运算]]是四种常见的运算。

## 定义

### 在集合论中

::: definition [二元运算]
[[集合]] $X$ 上的**二元运算**是指[[映射 (集合论)|映射]]
\[
* \colon X \times X \to X .
\]
此时，对 $a, b \in X$，
通常将运算的结果 $*(a, b)$ 记作 $a * b$。
:::

::: remark
带有二元运算的集合也称为[[原群]]。
:::

::: definition [运算]
设 $n$ 是非负整数。
集合 $X$ 上的 **$n$ 元运算**是指映射
\[
f \colon X^n \to X.
\]
:::

### 在范畴论中

::: definition [运算]
设 $\mathcal{C}$ 是[[幺半范畴]]，
对象 $X \in \mathcal{C}$ 上的 **$n$ 元运算**是指[[态射]]
\[
f \colon X^{\otimes n} \to X.
\]
:::

为了在范畴论中描述运算之间满足的关系，
我们需要引入[[运算体]]的概念。
使用这个概念，我们可以谈论与所在范畴无关的代数结构。
例如，我们可以在任何范畴中定义[[群]]（称为[[群对象]]），
也可以在任何[[线性空间]][[充实范畴]]中定义 [[Lie 代数]]。

在[[同伦代数]]中，
我们还要考虑运算之间的[[同伦]]。
[[∞-运算体|$\infty$-运算体]]的概念因此而引入，
用来描述与所在范畴无关的同伦代数结构。

## 例子

二元运算的例子包括：

- [[整数]]的[[加法]]和[[乘法]]。
  这两种运算赋予了整数一个[[交换环]]的结构。

- [[流形]]的同胚类的[[连通和]]。
  这种运算赋予了 $n$ 维流形同胚类的集合一个[[幺半群]]的结构。

```terms
运算:
  en: operation
  de: Verknüpfung :f
  fr: opération :f
  grc: πρᾶξις :f
  la: operatio :f
二元运算:
  en: binary operation
  de: zweistellige Verknüpfung
  fr: opération binaire
  grc: δυαδικὴ πρᾶξις
  la: operatio binaria
$n$ 元运算:
  en: $n$-ary operation
  de: $n$-stellige Verknüpfung
  fr: opération $n$-aire
  grc: '$\nu$-αδικὴ πρᾶξις'
  la: operatio $n$-aria
```
