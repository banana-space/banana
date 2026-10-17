---
title: 多项式
aliases: [单项式, 多项式函数]
categories: [初等代数]
navboxes: [初等代数]
---

在[[代数学]]中，**多项式**是写成若干项之[[加法|和]]的表达式，
每项为一个[[数]]（称为**系数**）
和若干**变元**之[[乘法|积]]。例如，
\[
2 x^3 - x + 7
\]
是关于变元 $x$ 的多项式，而
\[
x^5 - 2 y^7 + x^2 z^8 - 3 x y z + 1
\]
是关于三个变元 $x$、$y$、$z$ 的多项式。
只有一项的多项式称为**单项式**，例如 $-2 x^2 y$ 是关于 $x$、$y$ 的单项式。

一元多项式的[[根]]，即满足 $f (a) = 0$ 的数 $a$，
是代数学最早研究的对象之一。
例如，[[代数基本定理]]说明，
$n$ 次复系数多项式恰有 $n$ 个复根（计重数）。

系数取自给定[[环]]的全体多项式也构成环，称为[[多项式环]]，
它是[[交换代数]]与[[代数几何]]的基本研究对象。

## 定义

### 多项式

::: definition [一元多项式]
设 $A$ 是[[环]]。则 $A$ 上关于变元 $x$ 的**多项式**是形如
\[
f (x) = a_n x^n + a_{n-1} x^{n-1} + \cdots
+ a_1 x + a_0
\]
的表达式，其中 $a_i \in A$ $(i = 0, 1, \dotsc, n)$。

式中，每个 $a_i x^i$ 称为多项式 $f$ 的**项**，
其中 $a_i$ 称为该项的**系数**。
若两个多项式只相差系数为 $0$ 的项，即形如 $0 x^i$ 的项，
则将这两个多项式视为相同的。

若 $f$ 不是零多项式，即所有 $a_i$ 中存在非零者，
则可不妨设 $a_n \neq 0$，
此时称 $n$ 为 $f$ 的**次数**，记为 $\deg f$。
另外，我们约定零多项式 $f (x) \equiv 0$ 的次数是 $-\infty$。

当 $a_n \neq 0$ 时，
称 $a_n x^n$ 为 $f$ 的**首项**，$a_n$ 为 $f$ 的**首项系数**，
$a_0$ 为 $f$ 的**常数项**。
首项系数为 $1$ 的多项式称为[[首一多项式]]。
:::

::: definition [多元多项式]
设 $A$ 是[[环]]，$n$ 是[[自然数]]。
则 $A$ 上关于 $n$ 个变元 $x_1, \dotsc, x_n$ 的**多项式**是形如
\[
f (x_1, \dotsc, x_n) =
\sum_{ i_1, \, \dotsc \, , \, i_n \geq 0 }
a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}
\]
的表达式，其中 $i_1, \dotsc, i_n$ 取遍所有非负整数，
$a_{ i_1, \, \dotsc \, , \, i_n } \in A$，
并且这些 $A$ 的元素中，只有有限个非零。

式中，每个
$a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}$
称为多项式 $f$ 的**项**，
其中 $a_{ i_1, \, \dotsc \, , \, i_n }$ 称为该项的**系数**。
若两个多项式只相差系数为 $0$ 的项，
即形如 $0 x_1^{i_1} \dotsm x_n^{i_n}$ 的项，
则将这两个多项式视为相同的。

我们称 $i_1 + \cdots + i_n$ 为项
$a_{ i_1, \, \dotsc \, , \, i_n } \, x_1^{i_1} \dotsm x_n^{i_n}$ 的**全次数**。
非零多项式 $f$ 的全次数是其包含的非零项的全次数中的最大者。
若其非零项的全次数都等于 $d$，则称它为 $d$ 次[[齐次多项式]]。
例如，$x^2 + 3 x y - y^2$ 是二次齐次多项式。
:::

### 运算

多项式之间可以相加、相乘。
相加时合并同类项；
相乘时按[[分配律]]展开，再合并同类项。
例如，
\[
(x^2 + x + 1) (x - 1) = x^3 - 1 .
\]
固定系数环 $A$ 和变元 $x_1, \dotsc, x_n$ 后，
全体多项式在这些运算下构成环，
称为 **[[多项式环]]**，记为 $A[x_1, \dotsc, x_n]$。

一元多项式还可以[[复合]]：
对 $f (x) = \sum_i a_i x^i$ 与多项式 $g (x)$，
把 $g$ 代入 $f$ 的变元，得到多项式
\[
(f \circ g) (x) = \sum_i a_i \, g (x)^i .
\]

另外，不借助[[极限]]的概念，也可以定义多项式的[[形式导数]]：
对 $f (x) = \sum_i a_i x^i$，定义
\[
f' (x) = \sum_{i \geq 1} i \, a_i x^{i - 1} .
\]
类似地，也可对多元多项式的每个变元定义形式导数。

### 多项式函数

设 $A$ 是[[交换环]]，$f$ 是 $A$ 上关于变元 $x_1, \dotsc, x_n$ 的多项式。

对给定的元素 $a_1, \dotsc, a_n \in A$，
在 $f$ 中把 $a_i$ 代入变元 $x_i$，
得到元素 $f (a_1, \dotsc, a_n) \in A$，这就定义了[[函数]]
\[
A^n \longrightarrow A ,
\quad
(a_1, \dotsc, a_n) \longmapsto f (a_1, \dotsc, a_n) ,
\]
称为**多项式函数**。
更一般地，可以把变元换成任意交换 $A$-代数中的元素，
见[[多项式环]]的万有性质。

多项式与多项式函数是不同的概念，
因为不同的多项式可能定义同一个多项式函数。
例如，设 $p$ 是[[素数]]，
则[[有限域]] $\mathbb{F}_p$ 上的多项式 $x^p - x$ 不是零多项式，
但由 [[Fermat 小定理]]，它定义的函数恒为零。
另一方面，若 $A$ 是无限[[整环]]，例如 $\mathbb{Z}$、$\mathbb{R}$、$\mathbb{C}$，
则不同的多项式总是定义不同的函数（见 @thm:functions）。

## 例子

::: example [常数与一次多项式]
$0$ 次多项式即系数环中的非零元素。
一次多项式均形如 $f (x) = a x + b$，其中 $a \neq 0$。
若系数环为域 $k$，则其在 $k$ 中恰有一个根 $-b/a$。
:::

::: example [二次多项式]
设 $a, b, c$ 是[[实数]]，$a \neq 0$。
二次多项式 $a x^2 + b x + c$ 的复根为
\[
x = \frac{-b \pm \sqrt{\Delta}}{2 a} ,
\]
其中 $\Delta = b^2 - 4 a c$ 是其[[判别式]]。
当 $\Delta > 0$ 时，它有两个不同的实根；
当 $\Delta = 0$ 时，它有一个二重实根；
当 $\Delta < 0$ 时，它没有实根，而有两个互相共轭的复根。
:::

::: example [分圆多项式]
设 $n$ 是正整数，$\zeta = \mathrm{e}^{2 \pi \mathrm{i} / n}$。则
\[
x^n - 1 = \prod_{k = 0}^{n - 1} (x - \zeta^k) .
\]
在有理数域上，$x^n - 1$ 分解为[[分圆多项式]]之积
$\prod_{d \mid n} \Phi_d (x)$，
例如 $x^4 - 1 = (x - 1) (x + 1) (x^2 + 1)$。
:::

::: example [Chebyshev 多项式]
递归地定义整系数多项式
\[
T_0 = 1 , \quad
T_1 = x , \quad
T_{n+1} = 2 x \, T_n - T_{n-1} .
\]
则 $T_n$ 的次数为 $n$，且对任意实数 $\theta$，有
$T_n (\cos \theta) = \cos n \theta$。
例如，$T_2 = 2 x^2 - 1$ 对应于二倍角公式 $\cos 2 \theta = 2 \cos^2 \theta - 1$。
这些多项式称为 [[Chebyshev 多项式]]。
:::

::: example [初等对称多项式]
关于变元 $x_1, \dotsc, x_n$ 的多项式
\[
e_k = \sum_{1 \leq i_1 < \cdots < i_k \leq n} x_{i_1} \dotsm x_{i_k}
\quad (k = 0, 1, \dotsc, n)
\]
称为[[初等对称多项式]]，它是 $k$ 次齐次多项式。
在关于 $x_1, \dotsc, x_n, t$ 的多项式中，有
\[
\prod_{i = 1}^n (t - x_i) = \sum_{k = 0}^n (-1)^k e_k \, t^{n - k} .
\]
因此，首一多项式的系数可以用其根的初等对称多项式表示，
这就是 [[Vieta 定理]]。
:::

## 性质

### 次数

::: proposition [次数] {@thm:degree}
设 $A$ 是[[交换环]]，$f, g \in A [x]$。则

- $\deg (f + g) \leq \max \{ \deg f, \deg g \}$。

- $\deg (f g) \leq \deg f + \deg g$。若 $A$ 是[[整环]]，则等号成立。

- 若 $A$ 是整环，$f$ 非零，$g$ 不是常数，则 $\deg (f \circ g) = \deg f \cdot \deg g$。
:::

### 带余除法

::: proposition [带余除法] {@thm:division}
设 $A$ 是交换环，$f, g \in A[x]$，其中 $g$ 非零，且首项系数是 $A$ 的单位。
则存在唯一的 $q, r \in A[x]$，使得
\[
f = q g + r ,
\quad
\deg r < \deg g .
\]
:::

::: proof
先证存在性，对 $\deg f$ 归纳。
若 $\deg f < \deg g$，取 $q = 0$，$r = f$ 即可。
否则，设 $m = \deg f$，$n = \deg g$，
$a$、$b$ 分别是 $f$、$g$ 的首项系数。
则 $f_1 = f - a b^{-1} x^{m - n} g$ 的次数小于 $m$。
由归纳假设，有 $f_1 = q_1 g + r$，其中 $\deg r < n$，
从而 $f = (q_1 + a b^{-1} x^{m - n}) \, g + r$。

再证唯一性。若 $q g + r = q' g + r'$，
则 $(q - q') \, g = r' - r$。
若 $q \neq q'$，由于 $g$ 的首项系数是单位，
左边的次数至少为 $\deg g$，
而右边的次数小于 $\deg g$，矛盾。
故 $q = q'$，从而 $r = r'$。
:::

取 $g = x - a$，就得到以下推论。

::: corollary [因式定理] {@thm:factor}
设 $A$ 是交换环，$f \in A[x]$，$a \in A$。
则 $f (a) = 0$ 当且仅当在 $A[x]$ 中 $(x - a) \mid f$。
:::

::: proof
由 @thm:division，有 $f = q \, (x - a) + r$，其中 $r \in A$ 是常数。
代入 $x = a$，得 $r = f (a)$。
:::

::: corollary [根的个数] {@thm:roots}
设 $A$ 是整环，$f \in A[x]$ 是 $n$ 次非零多项式。
则 $f$ 在 $A$ 中至多有 $n$ 个[[根]]。
:::

::: proof
对 $n$ 归纳。若 $f$ 在 $A$ 中有根 $a$，
由 @thm:factor，有 $f = (x - a) \, g$，
由 @thm:degree，$\deg g = n - 1$。
对 $f$ 的另一个根 $b \neq a$，有 $(b - a) \, g (b) = 0$，
由于 $A$ 是整环，$g (b) = 0$。
因此 $f$ 的根除 $a$ 外都是 $g$ 的根，由归纳假设，至多有 $n - 1$ 个。
:::

### 因式分解

::: theorem [复系数与实系数多项式的分解] {@thm:factorization}
设 $f \in \mathbb{C} [x]$ 是 $n$ 次多项式，$n \geq 1$，首项系数为 $c$。

- 存在复数 $z_1, \dotsc, z_n$，使得
  \[
  f = c \, (x - z_1) \dotsm (x - z_n) .
  \]

- 若 $f \in \mathbb{R} [x]$，则 $f$ 可以写成 $c$ 与若干形如 $x - r$
  及 $x^2 + p x + q$ 的多项式之积，其中 $p, q, r \in \mathbb{R}$ 且 $p^2 - 4 q < 0$。

:::

::: proof
对第一条，由[[代数基本定理]]，$f$ 有复根 $z_1$，
由 @thm:factor，$f = (x - z_1) \, g$，其中 $g$ 是 $n - 1$ 次多项式，对 $n$ 归纳即可。

对第二条，同样对 $n$ 归纳。若 $f$ 有实根 $r$，由 @thm:factor，$f = (x - r) \, g$，
且 $g$ 是实系数多项式。
否则，取 $f$ 的复根 $z$。由于 $f$ 的系数是实数，
共轭 $\bar{z} \neq z$ 也是 $f$ 的根，因此 $f$ 被
\[
(x - z) (x - \bar{z}) = x^2 - 2 (\operatorname{Re} z) \, x + |z|^2
\]
整除，其判别式为 $-4 (\operatorname{Im} z)^2 < 0$。
由 @thm:division 中的唯一性，商式也是实系数多项式。
:::

### 插值

一元 $n$ 次多项式可以由它在 $n + 1$ 个点处的值决定：

::: proposition [[[Lagrange 插值]]] {@thm:interpolation}
设 $k$ 是[[域]]，$a_0, \dotsc, a_n \in k$ 两两不同，$b_0, \dotsc, b_n \in k$。
则存在唯一的多项式 $f$，其次数不超过 $n$，
且满足 $f (a_i) = b_i$ $(i = 0, \dotsc, n)$。它由下式给出：
\[
f (x) = \sum_{i = 0}^n b_i \prod_{j \neq i} \frac{x - a_j}{a_i - a_j} .
\]
:::

::: proof
记 $L_i = \prod_{j \neq i} (x - a_j) / (a_i - a_j)$。
则 $L_i$ 是 $n$ 次多项式，$L_i (a_i) = 1$，且 $L_i (a_j) = 0$ $(j \neq i)$，
因此上式中的 $f$ 满足条件。
若 $f$、$g$ 都满足条件，则 $f - g$ 的次数不超过 $n$，
且有 $n + 1$ 个根 $a_0, \dotsc, a_n$，由 @thm:roots，$f - g = 0$。
:::

例如，平面上横坐标不同的两点确定一条直线，
即次数不超过 $1$ 的多项式函数的图像；
横坐标两两不同的三点确定一个次数不超过 $2$ 的多项式函数的图像。

### 多项式与函数

由 @thm:roots 可以得到，在无限整环上，多项式由它定义的多项式函数决定：

::: proposition {@thm:functions}
设 $A$ 是无限整环，$f \in A[x_1, \dotsc, x_n]$。
若对所有 $a \in A^n$ 都有 $f (a) = 0$，则 $f = 0$。
:::

::: proof
对 $n$ 归纳。$n = 0$ 的情形是显然的。
对 $n \geq 1$，写
$f = \sum_{i = 0}^m f_i \, x_n^i$，其中 $f_i \in A[x_1, \dotsc, x_{n-1}]$。
对任意 $a' \in A^{n-1}$，一元多项式 $\sum_i f_i (a') \, x_n^i \in A[x_n]$
在 $A$ 的所有元素处取值为 $0$，即有无穷多个根。
由 @thm:roots，它是零多项式，即对所有 $i$ 都有 $f_i (a') = 0$。
由归纳假设，所有 $f_i = 0$，故 $f = 0$。
:::

```terms
多项式:
  en: polynomial
  de: Polynom :n
  fr: polynôme :m
  grc: πολυώνυμον :n
  la: polynomium :n
单项式:
  en: monomial
  fr: monôme :m
  de: Monom :n
系数:
  en: coefficient
  fr: coefficient :m
  de: Koeffizient :m
变元:
  en: [variable, indeterminate]
  fr: [variable :f, indéterminée :f]
  de: [Variable :f, Unbestimmte :f]
项:
  en: term
  fr: terme :m
  de: Term :m
次数:
  en: degree
  fr: degré :m
  de: Grad :m
首项:
  en: leading term
  fr: terme dominant :m
  de: Leitterm :m
首项系数:
  en: leading coefficient
  fr: coefficient dominant :m
  de: Leitkoeffizient :m
常数项:
  en: constant term
  fr: terme constant :m
  de: Absolutglied :n
常数多项式:
  en: constant polynomial
  fr: polynôme constant :m
  de: konstantes Polynom :n
全次数:
  en: total degree
  fr: degré total :m
  de: Totalgrad :m
多项式函数:
  en: polynomial function
  fr: fonction polynomiale :f
  de: Polynomfunktion :f
```
