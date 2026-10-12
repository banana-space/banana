---
title: 自反范畴
categories: [范畴论]
navboxes: [范畴论]
---

**自反范畴**是指[[范畴等价|等价]]于自身的[[反范畴]]的[[范畴]]。

## 定义

::: definition
**自反范畴**是指三元组 $(\mathcal{C}, D, \eta)$，其中

- $\mathcal{C}$ 是[[范畴]]。

- $D \colon \mathcal{C} \simeq \mathcal{C}^{\mathrm{op}}$
  是[[范畴等价]]，称为**对偶函子**。

- $\eta \colon D^{\mathrm{op}} \circ D \simeq \mathbb{1}_{\mathcal{C}}$
  是[[自然同构]]，

满足以下条件：

- 对任意 $x \in \mathcal{C}$，有
  \[
  D (\eta_x) = (\eta^{\mathrm{op}}_{D (x)})^{-1} \colon
  D \circ D^{\mathrm{op}} \circ D (x) \to D (x),
  \]
  其中 $\eta^{\mathrm{op}} \colon \mathbb{1}_{\mathcal{C}^{\mathrm{op}}}
  \simeq D \circ D^{\mathrm{op}}$
  是 $\eta$ 的反自然变换。

:::

## 例子

- 某个[[域]]上有限维[[向量空间]]的范畴是自反范畴，其对偶函子由[[对偶空间]]给出。

- 更一般地，某个[[空间]]（例如[[拓扑空间]]、[[流形]]、[[代数簇]]）上[[向量丛]]的范畴是自反范畴，
  其对偶函子由对偶向量丛给出。

- 由于 [[Pontryagin 对偶]]，[[局部紧空间|局部紧]] [[Abel 群|Abel]] [[拓扑群]]的范畴是自反范畴。

- 某个[[域]]上 [[Abel 簇]]的范畴是自反范畴，其对偶函子由[[对偶 Abel 簇]]给出。

## 参考文献

原始文献：

```bibliography
bu:
  type: preprint
  author: C. Bu
  title: Enumerative invariants in self-dual categories. I. Motivic invariants
  arxiv: '2302.00038'
```

```terms
自反范畴:
  en: self-dual category
```
