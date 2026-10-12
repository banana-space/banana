---
title: 菱形原理
categories: [集合论]
notices:
  - name: 问题
    items:
      - “独立性”“等价表述”“推论”各节需要扩充。
---

**菱形原理**，常记为 $\Diamond$，
是[[集合论]]中的一个命题。
它[[独立 (数理逻辑)|独立]]于 [[ZFC]]，
在[[可构造宇宙]]中成立，
且蕴涵[[连续统假设]]。

菱形原理可以用来证明某些命题在可构造宇宙中成立，从而与 ZFC 相容。
这样的命题包括 [[Suslin 树]]的存在性，
以及对 [[Whitehead 问题]]的肯定回答（任意 Whitehead 群都是自由的）。
实际上，上述二者均独立于 ZFC，
也就是说，这两个命题的否定也与 ZFC 相容。

## 陈述

::: definition [菱形原理]
**菱形原理**是指以下命题：

- $(\Diamond)$ 存在一列集合 $\langle A_\alpha \subseteq \alpha \rangle_{\alpha \in \omega_1}$，
  使得对任意 $A \subseteq \omega_1$，
  集合 $\{ \alpha \in \omega_1 \mid A \cap \alpha = A_\alpha \}$
  在 $\omega_1$ 中[[平稳集|平稳]]。

更一般地，对任意[[基数]] $\kappa$ 及[[平稳集]] $S \subseteq \kappa$，
**菱形原理** $\Diamond_S$ 是指以下命题：

- $(\Diamond_S)$ 存在一列集合 $\langle A_\alpha \subseteq \alpha \rangle_{\alpha \in S}$，
  使得对任意 $A \subseteq \kappa$，
  集合 $\{ \alpha \in S \mid A \cap \alpha = A_\alpha \}$
  在 $\kappa$ 中平稳。

特别地，$\Diamond$ 等价于 $\Diamond_{\omega_1}$。
:::

## 性质

### 独立性

### 等价表述

## 推论

```terms
菱形原理:
  en: diamond principle
  de: Karo-Prinzip :n
  fr: principe du losange :m
```
