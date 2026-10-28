---
title: 复数
aliases: [复数域, 复平面, 虚部, 实部]
categories: [数系, 复分析]
navboxes: [数系, 复分析]
---

<problems>
- “历史”一节需要扩充。
</problems>

**复数**是[[实数]]的一种扩充，是形如
$z = a + b \mathrm{i}$
的[[数]]，其中 $a, b$ 是[[实数]]，
$\mathrm{i}$ 是形式记号，称为**虚数单位**，
满足
\[
\mathrm{i}^2 = -1.
\]
也就是说，$\mathrm{i}$ 是 $-1$ 的[[平方根]]，
这样的元素在实数域中是不存在的。
所有复数构成的[[集合]]记为
\[
\mathbb{C} = \{ a + b \mathrm{i} \mid a, b \in \mathbb{R} \}.
\]

在复数上，可以定义加、减、乘、除四则运算，
使得 $\mathbb{C}$ 成为[[域]]。
复数域的一个重要性质是[[代数基本定理]]，它表明 $\mathbb{C}$ 是[[代数闭域]]，
也就是说，复数域上任何的[[多项式]]方程都有复数根。
例如，方程 $x^2 = -1$ 在实数域上无解，但在复数域上则有两个解，$x = \pm \mathrm{i}$。

所有复数构成的集合可以视为一个平面，称为**复平面**，
因为 $\mathbb{C}$ 是 $\mathbb{R}$ 上的二维向量空间，
每个复数即是其中的[[向量]]。

对复数的研究衍生出[[复分析]]、[[复几何]]等学科。
复数域也是[[代数几何]]中常用的域。
在[[物理学]]中，复数是[[量子力学]]、[[量子场论]]等学科的基础。

## 历史

## 定义

::: definition [复数]
**复数**是指[[集合]]
\[
\mathbb{C} = \{ a + b \mathrm{i} \mid a, b \in \mathbb{R} \}
\]
的元素，其中 $\mathrm{i}$ 是形式的记号。
:::

我们也引入以下记号：

- 对[[实数]] $a$，我们将复数 $a + 0 \mathrm{i} \in \mathbb{C}$
  直接记为 $a \in \mathbb{C}$。

- 对实数 $b$，我们将复数 $0 + b \mathrm{i}$
  直接记为 $b \mathrm{i} \in \mathbb{C}$。
  特别地，元素 $0 + 1 \mathrm{i}$ 和 $0 + (-1) \mathrm{i}$
  直接记为 $\mathrm{i}$ 和 $-\mathrm{i}$。
  元素 $\mathrm{i} \in \mathbb{C}$ 称为**虚数单位**。

::: definition [复数的性质]
设 $z = a + b\mathrm{i} \in \mathbb{C}$ 是复数，其中 $a, b \in \mathbb{R}$。

- $z$ 的**实部**定义为实数
  $\operatorname{Re} (z) = a$。

- $z$ 的**虚部**定义为实数
  $\operatorname{Im} (z) = b$。

- $z$ 的**模**（或**绝对值**）定义为实数
  $|z| = \sqrt {a^2 + b^2}$。

- $z$ 的**共轭**（或**复共轭**）定义为复数
  $\bar{z} = a - b\mathrm{i}$。

- 若 $z \neq 0$，则 $z$ 的**辐角**是实数 $\theta = \arg z$，满足
  \[
  a = |z| \cos \theta, \quad
  b = |z| \sin \theta.
  \]
  辐角总是存在，但仅在相差 $2 \pi$ 整数倍的意义下是确定的。

:::

::: definition [复数的运算]
在 $\mathbb{C}$ 上定义加法运算如下：
对 $a, b, c, d \in \mathbb{R}$，定义
\[
(a + b \mathrm{i}) + (c + d \mathrm{i}) =
(a + c) + (b + d) \mathrm{i}.
\]
在 $\mathbb{C}$ 上定义乘法运算如下：
对 $a, b, c, d \in \mathbb{R}$，定义
\[
(a + b \mathrm{i}) (c + d \mathrm{i}) =
(a c - b d) + (a d + b c) \mathrm{i}.
\]
这样的加法、乘法使 $\mathbb{C}$ 成为一个[[域]]，称为**复数域**。
:::

## 性质

### 基本性质

设 $z \in \mathbb{C}$ 是复数。
我们列举一些实部、虚部、共轭、模等概念的关系。

- $\overline{(\bar{z})} = z$。

- $2 \operatorname{Re} (z) = z + \bar{z}$。

- $2 \mathrm{i} \operatorname{Im} (z) = z - \bar{z}$。

- $|z|^2 = z \bar{z}$。特别地，$\mathbb{C}$ 中的乘法逆可以写成
  \[
  z^{-1} = \frac{\bar{z}}{|z|^2}.
  \]

- 共轭是[[域]][[自同构]]。具体地说，
  对任意 $z, w \in \mathbb{C}$，
  有 $\overline{z+w} = \bar{z} + \bar{w}$，
  且 $\overline{zw} = \bar{z} \bar{w}$。

### 代数闭性

[[代数基本定理]]表明，复数域是[[代数闭域]]，
即任意非常数复系数[[多项式]]都有复数根。

```terms
复数:
  en: complex number
  de: komplexe Zahl :f
  fr: nombre complexe :m
  grc: μιγαδικὸς ἀριθμός :m
  la: numerus complexus :m
实部:
  en: real part
  de: Realteil :m
  fr: partie réelle :f
  grc: πραγματικὸν μέρος :n
  la: pars realis :f
虚部:
  en: imaginary part
  de: Imaginärteil :m
  fr: partie imaginaire :f
  grc: φανταστικὸν μέρος :n
  la: pars imaginaria :f
共轭:
  en: [conjugation, conjugate]
  de: [Konjugation :f, Konjugierte :f]
  fr: [conjugaison :f, conjugaison :m]
  grc: [συζυγία :f, συζυγής :m]
  la: [coniunctio :f, coniunctus :m]
模、模长:
  en: modulus
  de: Modulus :m
  fr: module :m
  grc: μέτρον :n
  la: modulus :m
```
