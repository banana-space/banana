---
title: 闭幺半范畴
aliases: [幂函子]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [范畴论]
---

在[[范畴论]]中，
**闭幺半范畴**是指具有[[张量–幂伴随]]的[[幺半范畴]]。

## 定义

::: definition
称幺半范畴 $(\mathcal{C}, \otimes)$ 为：

- **左闭幺半范畴**，指对任意 $X\in\mathcal{C}$，
  函子 $X\otimes-$ 有[[右伴随]]。此右伴随通常记作
  $\operatorname{\underline{Hom}}^\mathrm{L} (X,-)$，称为**左幂函子**。

- **右闭幺半范畴**，指对任意 $X\in\mathcal{C}$，
  函子 $-\otimes X$ 有[[右伴随]]。此右伴随通常记作
  $\operatorname{\underline{Hom}}^\mathrm{R} (X,-)$，称为**右幂函子**。

如 $\mathcal{C}$ 是[[对称幺半范畴]]，则以上两个概念相同，
称为**闭幺半范畴**。对应的右伴随称为**幂函子**，
其常用记号包括：
\[
(-)^X, \quad
\operatorname{\underline{Hom}}(X, -), \quad
\mathrm{Map} (X, -),
\]
等等。

上述这些幂函子对 $X$ 也有函子性，
因此，（左、右）**幂函子**通常指的是对应的[[二元函子]] $\mathcal{C}^\mathrm{op}\times\mathcal{C}
\to\mathcal{C}$。
:::

## 例子

- [[交换环]] $A$ 上的[[模]]构成的范畴是闭幺半范畴，
  其中幺半范畴的张量运算就是模的[[张量积]]，
  幂函子是[[同态模]]，它们都有自然的 $A$-模结构。

- [[域]]上 [[Hopf 代数]]上的模构成闭幺半范畴，也构成[[刚性幺半范畴]]。

## 性质

```terms
闭幺半范畴:
  en: closed monoidal category
  de: abgeschlossene monoidale Kategorie
  fr: catégorie monoïdale fermée
  grc: κλειστὴ μονοειδὴς κατηγορία
  la: categoria monoides clausa
幂函子:
  en: internal Hom
```
