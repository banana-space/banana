---
title: 测度空间
categories: [测度论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

**测度空间**是[[测度论]]的研究对象。
它是一种[[空间]]，该空间中具有[[可测集]]的概念，
即“可以测量大小的集合”。
这里的“大小”可以是[[长度]]、[[面积]]、[[体积]]等，
在测度空间中称为[[测度]]。

## 定义

::: definition [测度空间]
**测度空间**是三元组 $(X, \mathcal{A}, \mu)$，其中

- $X$ 是[[集合]]。

- $\mathcal{A}$ 是 $X$ 上的 [[$\sigma$-代数]]，
  其元素称为**可测集**。

- $\mu \colon \mathcal{A} \to \mathbb{R}_{\geq 0} \cup \{ \infty \}$
  是 $\mathcal{A}$ 上的[[测度]]。

:::

::: remark
在测度空间 $(X, \mathcal{A}, \mu)$ 中，

- 若 $\mu (X) < \infty$，
  则称该测度空间为**有限测度空间**。

- 若 $\mu (X) = 1$，
  则称该测度空间为 **[[概率空间]]**。

- 若 $\mu (X) \leq 1$，
  则称该测度空间为 **[[亚概率空间]]**。

:::

## 例子

- 任何集合 $X$ 上均可定义 **[[计数测度]]**，
  其中 $\mathcal{A} = 2^X$，
  且对任何[[子集]] $A \subset X$，有
  \[
  \begin{aligned}
    \mu (A) = \begin{cases}
      |A|, & A \text{ 有限}, \\
      \infty, & A \text{ 无限}.
    \end{cases}
  \end{aligned}
  \]

- $\mathbb{R}^n$ 上的 **[[Lebesgue 测度]]**，
  其中 $\mathcal{A}$ 为 [[Lebesgue 可测集]]构成的 $\sigma$-代数，
  $\mu$ 为 [[Lebesgue 测度]]。

## 性质

```terms
测度空间:
  en: measure space
  de: Maßraum :m
  fr: espace mesuré :m
  grc: μεμετρημένος χῶρος :m
  la: spatium mensum :n
```
