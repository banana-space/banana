---
title: '共尾 $(\infty,1)$-函子'
aliases: ['(∞,1)-共尾函子']
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**共尾 $(\infty,1)$-函子**是[[共尾函子]]在 [[$(\infty,1)$-范畴]]中的推广。
直观上，函子 $f \colon \mathcal{C} \to \mathcal{D}$ 是共尾的，
是指 $\mathcal{C}$ 在 $\mathcal{D}$ 中“足够稠密”，
使得沿 $\mathcal{D}$ 取余极限与沿 $\mathcal{C}$ 取余极限总是给出相同的结果。
对偶地，**共首函子**是保持极限不变的“稠密”函子。

## 定义

::: definition [共尾函子、共首函子]
令 $f \colon \mathcal{C} \to \mathcal{D}$ 为函子。

- 称 $f$ 为**共尾函子**，
  是指对于任意范畴 $\mathcal{E}$ 以及任意函子 $F \colon \mathcal{D} \to \mathcal{E}$：
  $F$ 具有余极限当且仅当 $F \circ f$ 具有余极限，
  且此时典范态射
  \[
  \operatorname{colim}_{\mathcal{C}} (F \circ f) \xrightarrow{\;\sim\;} \operatorname{colim}_{\mathcal{D}} F
  \]
  为同构。

- 对偶地，称 $f$ 为**共首函子**，
  是指对于任意范畴 $\mathcal{E}$ 以及任意函子 $F \colon \mathcal{D} \to \mathcal{E}$：
  $F$ 具有极限当且仅当 $F \circ f$ 具有极限，
  且此时典范态射
  \[
  \operatorname{lim}_{\mathcal{D}} F \xrightarrow{\;\sim\;} \operatorname{lim}_{\mathcal{C}} (F \circ f)
  \]
  为同构。

:::

::: remark [术语]
在[@Kerodon]，Lurie 将共尾称为右共尾，而共首称为左共尾。
:::

## 性质

### 复合性质

::: proposition
令 $f \colon \mathcal{C} \to \mathcal{D}$ 以及
$g \colon \mathcal{D} \to \mathcal{E}$ 为函子，
且 $f$ 共尾（相应地，共首）。
则 $g$ 共尾（共首）当且仅当 $g \circ f$ 共尾（共首）。
特别地，共尾（共首）函子的复合仍为共尾（共首）函子。
:::

### 局部化函子

::: proposition {@prop-local}
令 $\mathcal{C}$ 为范畴，$W$ 为 $\mathcal{C}$ 中的一族态射。
则局部化函子 $\mathcal{C} \to \mathcal{C}[W^{-1}]$ 既共尾又共首。
:::

### 与纤维化的关系

::: proposition
令 $f \colon \mathcal{C} \to \mathcal{D}$ 为函子，则以下条件等价：

1. $f$ 共尾，且为[[右纤维化]]（即对应于 $\mathcal{D}^{\mathrm{op}} \to \mathsf{Ani}$ 的函子）。

2. $f$ 共首，且为[[左纤维化]]（即对应于 $\mathcal{D} \to \mathsf{Ani}$ 的函子）。

3. $f$ 的每条纤维均为可缩的生象。

满足上述条件的函子必定是范畴等价。
:::

## 参考资料

```bibliography
Kerodon:
  type: book
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
```

```terms
共尾:
  en: cofinal
共首:
  en: coinitial
```
