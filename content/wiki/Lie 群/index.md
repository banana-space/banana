---
title: Lie 群
aliases: [李群]
categories: [Lie 理论]
navboxes: [Lie 理论]
---

<problems>
- “性质”一节需要扩充。
</problems>

**Lie 群**是带有[[光滑流形]]结构的[[群]]。
群描述对象的[[对称性]]，
而 Lie 群描述对象的连续对称性。
例如，三维空间中的[[球面]]关于任何旋转、翻转都对称。
这些旋转、翻转构成一族连续的对称变换，
这些变换构成的 Lie 群是[[正交群]] $\mathrm{O}(3)$。

Lie 群的“无穷小元素”（“无穷小对称变换”）
构成的代数结构称为 [[Lie 代数]]。

## 定义

### 实 Lie 群

::: definition [Lie 群] {@def-lie-group}
一个 **Lie 群**（或**实 Lie 群**）是指一个[[光滑流形]] $G$，
其点的集合带有一个[[群]]结构，满足以下条件：

- 群的[[乘法]]运算 $m \colon G \times G \to G$，
  以及取[[逆元]]的运算 $i \colon G \to G$，
  都是[[光滑映射]]。

:::

::: definition [Lie 群同态] {@def-lie-group-homomorphism}
设 $G, H$ 是两个 Lie 群。
它们之间的 **Lie 群同态**是指一个[[光滑映射]] $f \colon G \to H$，
它同时也是[[群同态]]。
:::

::: definition [Lie 群范畴]
所有 Lie 群（@def-lie-group）
和它们之间的 Lie 群同态（@def-lie-group-homomorphism）
构成的[[范畴]]称为**Lie 群范畴**，
记为 $\mathsf{LieGp}$。
:::

### 复 Lie 群

::: definition [复 Lie 群] {@def-complex-lie-group}
一个**复 Lie 群**是指一个[[复流形]] $G$，
其点的集合带有一个[[群]]结构，满足以下条件：

- 群的[[乘法]]运算 $m \colon G \times G \to G$，
  以及取[[逆元]]的运算 $i \colon G \to G$，
  都是复流形之间的[[全纯映射]]。

:::

::: definition [复 Lie 群同态] {@def-complex-lie-group-homomorphism}
设 $G, H$ 是两个复 Lie 群。
它们之间的**复 Lie 群同态**是指一个[[全纯映射]] $f \colon G \to H$，
它同时也是[[群同态]]。
:::

::: definition [复 Lie 群范畴]
所有复 Lie 群（@def-complex-lie-group）
和它们之间的复 Lie 群同态（@def-complex-lie-group-homomorphism）
构成的[[范畴]]称为**复 Lie 群范畴**。
:::

## 例子

- [[实数]]
- [[线性群]]
  - [[一般线性群]]
  - [[特殊线性群]]
  - [[正交群]]、[[酉群]]
  - [[特殊正交群]]、[[特殊酉群]]
  - [[辛群]]
  - [[酉辛群]]
- [[仿射群]]
- [[Poincaré 群]]

## 性质

```terms
Lie 群:
  en: Lie group
  de: Lie-Gruppe
  fr: groupe de Lie
```
