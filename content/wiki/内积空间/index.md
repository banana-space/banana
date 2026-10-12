---
title: 内积空间
aliases: [预 Hilbert 空间]
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

**内积空间**是 [[Euclid 空间]]的抽象，
它是个实或复的线性空间，
并带有正定的（半）双线性型以模拟 Euclid 空间中的内积。
这样的线性空间具有[[度量空间]]的结构，而可以谈论“距离”等概念。

有时内积空间被称为**预 Hilbert 空间**，
而在 @def-metric 中定义的度量下[[完备]]的内积空间即是
**[[Hilbert 空间]]**。

## 定义

一般所说的内积空间有实或复两种。

::: definition [实内积空间]
**实内积空间**是 $\mathbb{R}$ 上的线性空间 $V$，
配有映射 $\langle -,- \rangle \colon V \times V \to \mathbb{R}$，满足：

- 双线性：
  $\langle -,- \rangle$ 是[[双线性型]]。

- 对称性：
  $\langle x, y \rangle = \langle y, x \rangle$
  对任意 $x, y \in V$ 都成立。

- 正定性：
  对 $x \in V$，
  $\langle x,x \rangle \geq 0$ 且取等当且仅当 $x = 0$。

此时 $\langle -,- \rangle$ 称为 $V$ 上 **[[内积]]**
（或**数量积**、**标量积**等）。
:::

::: definition [复内积空间]
**复内积空间**是 $\mathbb{C}$ 上的线性空间 $V$，
配有映射 $\langle -,- \rangle \colon V \times V \to \mathbb{C}$，满足：

- 半双线性：
  $\langle -,- \rangle$ 关于第一个分量是线性的
  （由下面的性质可以知道它是[[半双线性型]]）。

- 共轭对称性：
  $\langle x, y \rangle =
        \overline{\langle y, x \rangle}$
  对任意 $x, y \in V$ 都成立
  （$\bar{a}$ 表示 $a$ 的[[复共轭]]）。

- 正定性：
  对 $x \in V$，
  $\langle x,x \rangle \geq 0$
  且取等当且仅当 $x = 0$。

此时 $\langle -,- \rangle$ 称为 $V$ 上**内积**。
:::

::: remark
如果在复内积空间的定义中仍然要求对称性，则
\[
\langle \mathrm{i}x, \mathrm{i}x \rangle
= \mathrm{i}^2 \langle x, x \rangle =
-1 \langle x, x \rangle,
\]
由此不再能保有正定性。
而要求共轭对称性后，
\[
\langle \mathrm{i}x, \mathrm{i}x \rangle
= \mathrm{i} \cdot (-\mathrm{i}) \langle x, x \rangle =
\langle x, x \rangle,
\]
而避免了此问题。
:::

::: definition [范数]
对内积空间 $V$（无论实或复），定义函数
\[
\| \cdot \| \colon V \to \mathbb{R},
\quad x \mapsto \langle x, x \rangle^{\frac{1}{2}}
\]
则此函数是（并且称为）$V$ 上的 **[[范数]]**。
:::

::: definition [度量] {@def-metric}
对内积空间 $V$（无论实或复），定义函数
\[
d(-, -) \colon V \times V \to \mathbb{R}, \quad
(x, y) \mapsto \langle x-y, x-y \rangle^{\frac{1}{2}}.
\]
则 $V$ 成为[[度量空间]]，此函数称为 $V$ 上的**度量**。
:::

::: definition [等距同构]
两个内积空间 $(V, \langle -,- \rangle_V)$，
$(W, \langle -,- \rangle_W)$
之间的[[线性映射]] $f \colon V \to W$ 称为**等距**
（或**保距**）的，如果 $f$ 满足
\[
\langle x, y \rangle_V = \langle f(x), f(y) \rangle_W
\quad \forall x, y \in V.
\]
如果 $f$ 同时是[[双射]]，此映射称为**等距同构**。
:::

## 例子

正如引言中所说，[[Euclid 空间]] $\mathbb{R}^n$ 可以赋予实内积空间的结构。

::: example {@standard-real}
在 $\mathbb{R}^n$ 中，对 $x = (x_1, \cdots, x_n)$，
$y = (y_1, \cdots, y_n)$ 定义
\[
\langle x,y \rangle = x_1 y_1 + \cdots + x_n y_n
\]
则它成为实内积空间。
:::

类似地，$\mathbb{C}^n$ 可以赋予复内积空间的结构。

::: example {@standard-complex}
在 $\mathbb{C}^n$ 中，对 $x = (x_1, \cdots, x_n)$，
$y = (y_1, \cdots, y_n)$ 定义
\[
\langle x,y \rangle = x_1 \bar{y}_1 + \cdots + x_n \bar{y}_n
\]
则它成为复内积空间。
:::

## 性质

::: proposition
任意有限维内积空间均同构于相应域上的相同维数的标准内积空间，
即 @standard-real、@standard-complex 中之定义。
:::

```terms
内积空间:
  en: inner product space
  de: 'Skalarproduktraum, Vektorraum mit innerem Produkt, Innenproduktraum'
  grc: χῶρος ἐσωτερικοῦ γενομένου
  la: spatium producti interni
预 Hilbert 空间:
  en: pre-Hilbert space
  de: 'Prähilbertraum, prähilbertscher Raum'
  fr: espace préhilbertien
内积:
  en: 'inner product, scalar product'
  de: 'inneres Produkt, Skalarprodukt'
  fr: produit scalaire
  grc: ἐσωτερικὸν γενόμενον
  la: productum internum
```
