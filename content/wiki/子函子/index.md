---
title: 子函子
categories: [范畴论]
navboxes: [范畴论]
---

## 定义

::: definition
[[函子]] $G \colon \mathcal{C} → \mathcal{D}$ 的
**子函子**是满足如下条件的二元组 $(F, α)$：

- $F \colon \mathcal{C} → \mathcal{D}$ 为函子，
$α \colon F → G$ 为[[自然变换]]。

- 对于任意 $M∈ \mathcal{C}$ 有
$α_M \in \mathcal{D}(F(M), G(M))$ 为[[单态射]]。

:::

## 性质

- 若 $\mathcal{D}$ 有所有的[[拉回 (范畴论)|拉回]]，那么子函子等价于[[函子范畴]]中的[[子对象]]。

- [[Yoneda 函子]] $\mathcal{C}(-,x)$ 的子函子对应了对象 $x$ 的[[筛]]。

```terms
子函子:
  en: subfunctor
```
