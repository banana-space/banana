---
title: 长直线
aliases: [Alexandroff 直线, 长射线]
categories: [一般拓扑]
---

<problems>
- “性质”一节需要扩充。
</problems>

**长直线**（也称为 **Alexandroff 直线**）
是一个[[拓扑空间]]，
它是比[[实数|实直线]] $\mathbb{R}$ 更长的直线。
具体地说，我们可以将 $\mathbb{R}$ 视为[[可数]]多个[[单位区间]] $[0, 1]$ 首尾相接，
而得到的空间。
长直线则是由不可数多个单位区间 $[0, 1]$ 首尾相接，而得到的空间。

## 定义

::: definition [长射线，长直线]
设 $\omega_1$ 是[[最小不可数序数]]，它自身是一个[[良序集]]（从而是[[全序集]]）。
考虑[[半开半闭区间]] $[0, 1[$，它带有通常的全序。
定义 $\omega_1 \times [0, 1[$ 上的[[字典序]]如下：
\[
(\alpha_1, x_1) \leq (\alpha_2, x_2)
\iff
\alpha_1 < \alpha_2
\text{\small\ 或 }
(
  \alpha_1 = \alpha_2
  \text{\small\ 且 }
  x_1 \leq x_2
).
\]

**长射线**就是以上定义的全序集 $\omega_1 \times [0, 1[$，
带有[[序拓扑]]，从而成为[[拓扑空间]]。

**长直线**是两条长射线沿着它们的端点 $(0, 0)$ 粘起来，得到的空间。
:::

## 性质

::: proposition
长直线局部同胚于 $\mathbb{R}$，并且是 [[Hausdorff 空间]]，
但不是[[仿紧空间]]。
:::

::: proposition
长直线、长射线都不是[[可缩空间]]。
:::

```terms
长直线:
  en: long line
  de: lange Gerade
  fr: longue droite
```
