---
title: 反范畴
aliases: [对偶范畴]
categories: [范畴论]
navboxes: [范畴论]
---

[[范畴]] \(\mathcal{C}\) 的**反范畴**（也称为**对偶范畴**）
\(\mathcal{C}^{\mathrm{op}}\) 是将 \(\mathcal{C}\)
中[[态射]]箭头方向倒转所得到的范畴。

## 定义

::: definition [反范畴] {@反范畴}
范畴\(\mathcal{C}\)的**反范畴**\(\mathcal{C}^{\mathrm{op}}\)
是由以下信息确定的范畴：

- 对象：\(\operatorname{Ob} (\mathcal{C}^{\mathrm{op}})
  = \operatorname{Ob} (\mathcal{C})\)。

- 态射：对任意\(x, y \in
    \operatorname{Ob} (\mathcal{C}^{\mathrm{op}})\)，
  \(\mathcal{C}^{\mathrm{op}}(x, y) = \mathcal{C}(y, x)\)。

- 恒同态射：\(\mathcal{C}^{\mathrm{op}}\)
  中每个对象的恒同态射与\(\mathcal{C}\)中此对象的恒同态射相同。

- 态射复合：\(\mathcal{C}^{\mathrm{op}}\)
  中态射复合与\(\mathcal{C}\)中态射复合相反。
  具体来说，任意
  \(x, y, z \in
    \operatorname{Ob} (\mathcal{C}^{\mathrm{op}})\)
  对应复合映射
  \[
  \begin{aligned}
    \circ^{\mathrm{op}} \colon
    \mathcal{C}^{\mathrm{op}}(y, z) \times
    \mathcal{C}^{\mathrm{op}}(x, y) & \to
    \mathcal{C}^{\mathrm{op}}(x, z)\\
    (g, f) &\mapsto g \circ^{\mathrm{op}} f = f \circ g.
  \end{aligned}
  \]

:::

::: remark
由 @反范畴，
反范畴的反范畴是自身：我们有[[范畴同构]]
$(\mathcal{C}^{\mathrm{op}})^{\mathrm{op}} \simeq \mathcal{C}$。
:::

## 例子

- [[交换环]]范畴的反范畴是[[仿射概形]]范畴。

- 有限维[[向量空间]]的范畴的反范畴[[范畴等价|等价]]于其自身，
  这一范畴等价可以通过[[对偶空间]]函子给出。
  更一般地，某种给定[[空间]]上[[向量丛]]范畴的反范畴也等价于自身，
  这一范畴等价可以通过对偶向量丛给出。

## 性质

- 反范畴的构造保持[[积范畴]]。
  具体来说，对任意一族范畴
  \((\mathcal{C}_i)_{i \in I}\)，
  有\(\left(\prod_{i \in I}
  \mathcal{C}_i\right)^{\mathrm{op}}
  \simeq \prod_{i \in I}
  \mathcal{C}_i^{\mathrm{op}}\)。

```terms
反范畴:
  en: opposite category
  de: duale Kategorie
  fr: catégorie opposée
```
