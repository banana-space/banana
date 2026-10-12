---
title: 范畴等价
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
**范畴等价**是表达“两个[[范畴]]看起来一样”这一想法的正确概念。
在范畴论的意义下，等价的范畴具有完全相同的性质，
正如在[[代数学]]中，[[同构]]的[[代数结构]]具有完全相同的性质。
这是[[等价原理]]的一个例子。

范畴等价弱于[[范畴同构]]，
即不要求两范畴的[[对象]]、[[态射]]之间能够[[一一对应]]，
而只要求对于一个范畴中的对象、态射，
在另一范畴中能找到同构的对象、态射，且反之亦然。

范畴等价是[[范畴的范畴|范畴的 $2$-范畴]] $\mathsf{Cat}$ 中的同构。

## 定义

::: definition
设 $\mathcal{C}$、$\mathcal{D}$ 为[[范畴]]，
$F \colon \mathcal{C} \to \mathcal{D}$ 为[[函子]]。
称 $F$ 为**范畴等价**，如果：

- 存在函子 $G \colon \mathcal{D} \to \mathcal{C}$，
  以及函子间的[[自然同构]]
  \[
  G \circ F \simeq \mathbb{1}_{\mathcal{C}} \, , \qquad
  F \circ G \simeq \mathbb{1}_{\mathcal{D}} \, .
  \]

此时，也称范畴 $\mathcal{C}$、$\mathcal{D}$ **等价**，
称 $F$、$G$ 互为**逆函子**。
:::

## 例子

- [[范畴同构]]都是范畴等价。

- 设范畴 $\mathcal{C}$ 只有一个对象 $x$，且只有一个态射，即恒同态射。
  设范畴 $\mathcal{D}$ 有一族对象 $(y_i)_{i \in I}$，
  其中 $I$ 非空，
  且对任意 $i, j \in I$，集合 $\mathcal{D} (y_i, y_j)$ 有且仅有一个元素。
  则 $\mathcal{C}$ 等价于 $\mathcal{D}$，
  因为 $\mathcal{D}$ 中所有对象都同构，所以本质上是“同一个”对象。

- 记 $\mathsf{CRing}$ 为[[交换环]]的范畴，$\mathsf{AffSch}$ 为[[仿射概形]]的范畴。
  则
  \[
  \operatorname{Spec} \colon \mathsf{CRing}^{\mathrm{op}}
  \to \mathsf{AffSch} \quad \text{与} \quad
  \mathcal{O} \colon \mathsf{AffSch} \to \mathsf{CRing}^{\mathrm{op}}
  \]
  互为逆函子，这里 $\operatorname{Spec}$ 是取[[素谱]]，
  而 $\mathcal{O}$ 将概形 $X$ 映到交换环 $\mathcal{O}_X (X)$。

## 性质

下述性质常用于刻画范畴等价。

::: theorem
设 $\mathcal{C}$、$\mathcal{D}$ 为[[范畴]]，
$F \colon \mathcal{C} \to \mathcal{D}$ 为[[函子]]。
则下列命题等价。

- $F$ 是范畴等价。

- $F$ [[全忠实函子|全忠实]]、[[本质满函子|本质满]]。

:::

```terms
范畴等价:
  en: equivalence of categories
  fr: équivalence de catégories :f
  de: Äquivalenz von Kategorien :f
  ja: 圏<けん>同<どう>値<ち>
等价:
  en: equivalent
  fr: équivalent
  de: äquivalent
```
