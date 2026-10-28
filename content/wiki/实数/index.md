---
title: 实数
aliases: [实数域]
categories: [数系, 域论, 实分析, 一般拓扑]
navboxes: [数系, 微积分学, 域论]
---

<problems>
- “作为完备序域”一节中定理的完备性条件似乎需要要求 $A, B$ 非空（例如 $A = \varnothing$、$B = \mathbb{R}$ 时不存在这样的 $c$）。
</problems>

**实数**是一类[[数]]，是指可以被[[有理数]]任意逼近的数。
实数包括所有的有理数，也包括很多别的元素，
例如 $2$ 的[[平方根]] $\sqrt{2}$。
所有实数构成一个[[域]]，通常记为 $\mathbb{R}$。

实数是数学中最直观的对象之一。
在学习实数之前，多数人对[[小数]]的概念已经熟练，
故而想象无限的小数也并不是困难的事。
但严格地定义“什么是实数”并不是件容易的事，
这通常是大学数学的第一课所讲授的内容。

实数是[[分析学]]中最基本的对象之一。
实数的分析学称为[[实分析]]，其基础部分通常也称为[[微积分学]]。
另外，[[测度论]]、[[微分方程论]]等学科也是以实分析为基础而建立的。

作为[[拓扑空间]]，实数域 $\mathbb{R}$ 通常被称为**实直线**。
实直线与自身的 [[Descartes 积]] $\mathbb{R}^n$ 称为 **[[Euclid 空间]]**，
它是[[微分几何]]和[[代数拓扑]]中若干构造的基础：
这些构造将 Euclid 空间拼接、粘合，以得到更复杂的空间，
例如[[流形]]和 [[CW 复形]]。

## 定义

实数有若干种等价的定义。下面列举其中几种常见的定义方式。

### 通过 Dedekind 分割

::: definition
**Dedekind 分割**是指[[有理数]]集 $\mathbb{Q}$ 的一对非空子集 $(L, R)$，
满足以下条件：

- 若 $a \in L$，且 $b \in R$，则 $a < b$。

- 若 $a < b$ 是有理数，则 $a \in L$ 或 $b \in R$。

- 若 $a \in L$，则存在 $b \in L$ 满足 $b > a$。

- 若 $a \in R$，则存在 $b \in R$ 满足 $b < a$。

**实数**就是一个 Dedekind 分割。
所有实数的集合记为 $\mathbb{R}$。
:::

例如，

- 对有理数 $a \in \mathbb{Q}$，它对应的实数是 Dedekind 分割
  \[
  \bigl( \set{ x \in \mathbb{Q} | x < a },
  \set{ x \in \mathbb{Q} | x > a } \bigr).
  \]

- 实数 $\sqrt{2} \in \mathbb{R}$ 不是有理数，它的 Dedekind 分割是
  \[
  \bigl( \set{ x \in \mathbb{Q} | x < 0 \text{ 或 } x^2 < 2 },
  \set{ x \in \mathbb{Q} | x > 0 \text{ 且 } x^2 > 2 } \bigr).
  \]

### 通过 Cauchy 列

实数也可以定义为[[有理数]]集 $\mathbb{Q}$ 的所有 [[Cauchy 列]]的等价类的集合，
也就是将实数集 $\mathbb{R}$ 定义为 $\mathbb{Q}$ 的[[完备化]]。

::: definition
[[有理数]]集 $\mathbb{Q}$ 中的 **[[Cauchy 列]]** 是指
$\mathbb{Q}$ 中的[[序列]]
$(a_n)_{n \geq 1}$，满足对任意[[自然数]] $M > 0$，存在自然数 $N > 0$，
使得对任意 $m, n > N$，有
\[
|a_m - a_n| < \frac{1}{M}.
\]
称 Cauchy 列 $(a_n)_{n \geq 1}$ 与 $(b_n)_{n \geq 1}$ **等价**，
如果对任意自然数 $M > 0$，存在自然数 $N > 0$，使得对任意 $n > N$，有
\[
|a_n - b_n| < \frac{1}{M}.
\]
这定义了所有 Cauchy 列的集合上的[[等价关系]]。

**实数**定义为 Cauchy 列的等价类的集合。
换言之，实数集 $\mathbb{R}$ 是 $\mathbb{Q}$ 中 Cauchy 列的集合对上述等价关系的[[商集]]。
:::

### 作为完备序域

::: theorem
在[[同构]]意义下，存在唯一[[序域]] $\mathbb{R}$，满足以下性质：

- （**完备性**）
  若[[子集]] $A, B \subset \mathbb{R}$ 满足对任意
  $a \in A$ 和 $b \in B$ 都有 $a \leq b$，
  则存在 $c \in \mathbb{R}$，使得对任意
  $a \in A$ 和 $b \in B$ 都有 $a \leq c \leq b$。

这个序域定义为**实数域**。
:::

```terms
实数:
  en: real number
  de: reelle Zahl :f
  fr: nombre réel :m
  grc: πραγματικὸς ἀριθμός :m
  la: numerus realis :m
```
