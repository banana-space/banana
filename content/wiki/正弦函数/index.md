---
title: 正弦函数
aliases: [Sin, 正弦]
categories: [复分析, 特殊函数]
navboxes: [三角函数]
---

<problems>
- “性质”一节需要扩充。
</problems>

**正弦函数** $\sin \colon \mathbb{C} \to \mathbb{C}$ 是[[三角函数]]中的一个。
对[[复数]] $x \in \mathbb{C}$ 而言，复数 $\sin (x) \in \mathbb{C}$ 称为 $x$ 的**正弦**。

## 定义

正弦函数有数种不同的定义方式。
可以证明，它们在其定义范围的公共部分是等价的。

### 通过直角三角形

[[锐角]]的正弦（以及其他三角函数）可以通过[[直角三角形]]定义。

::: definition
设 $\alpha$ 是锐角。作直角三角形 $ABC$ 使得角 $A = \alpha$，
且角 $C$ 是直角。这样，定义 $\sin (\alpha)$ 等于它的对边与斜边的比，
即
\[
\sin(\alpha)=\frac{BC}{AB}.
\]
:::

这个定义利用了一个直角三角形。因为所有可能作出的三角形都是相似的，
所以依据这个定义得到的 $\sin (\alpha)$ 与直角三角形的作法无关。

### 通过单位圆

[[实数]]集上的正弦函数 $\sin \colon \mathbb{R} \to \mathbb{R}$ 可以借助[[单位圆]]来定义。

::: definition
设 $\alpha \in \mathbb{R}$。在[[平面直角坐标系]]中，
将 $x$ 轴正半轴这条射线绕坐标原点逆时针旋转 $\alpha $ [[弧度]]，
得到的这条射线交单位圆于一点。设这点的坐标是 $(x,y)$，则定义
\[
\sin (\alpha) = y.
\]
:::

### 通过常微分方程

::: definition
正弦函数 $\sin \colon \mathbb{R} \to \mathbb{R}$
定义为下述[[常微分方程]]的[[初值问题]]的唯一解：
$$
\begin{cases}
  \sin '' (x) + \sin (x) = 0, & x \in \mathbb{R},\\
  \sin (0) = 0,\\
  \sin ' (0) = 1.
\end{cases}
$$
:::

### 通过幂级数

::: definition
[[复数]]集上的正弦函数 $\sin\colon \mathbb{C}\to\mathbb{C}$
由如下的[[幂级数]]给出：
\[
\sin (z) = \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}z^{2n+1}.
\]
:::

这个幂级数在整个复数集上收敛。

## 性质

```terms
正弦:
  en: sine
  de: Sinus :m
  fr: sinus :m
正弦函数:
  en: sine function
  de: Sinusfunktion :f
  fr: fonction sinus :f
```
