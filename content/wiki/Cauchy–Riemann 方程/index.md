---
title: Cauchy–Riemann 方程
categories: [复分析]
navboxes: [复分析]
---

<problems>
- “陈述与证明”一节的证明中，乘以 $A = a + \mathrm{i} b$ 的线性映射 $x + \mathrm{i} y \mapsto (a x - b y) + \mathrm{i} (b x + a y)$ 的矩阵似乎应为 $\begin{pmatrix} a & -b \\ b & a \end{pmatrix}$；文中给出的矩阵是它的转置。
</problems>

在[[复分析]]中，
**[[Augustin-Louis Cauchy|Cauchy]]–[[Bernhard Riemann|Riemann]] 方程**
是判断[[复平面]]上函数是否[[全纯函数|全纯]]的条件。
将复平面的坐标写成 $z = x + \mathrm{i} y$，
并考虑复平面上的复值函数
\[
f (x, y) = u (x, y) + \mathrm{i} v (x, y),
\]
其中 $u, v$ 都是实值函数。则 $f$ 的 Cauchy–Riemann 方程是
\[
\begin{aligned}
  \frac{\partial u}{\partial x} & = \frac{\partial v}{\partial y}, \\
  \frac{\partial u}{\partial y} & = -\frac{\partial v}{\partial x}.
\end{aligned}
\]
这组方程等价于 $f$ [[全纯函数|全纯]]。
事实上，这组方程是将 $f$ 存在[[复导数]]的条件翻译成实值函数的偏导数而得到的。

直观来说，Cauchy–Riemann 方程表明，
函数 $f$ 存在复导数，当且仅当它在每点处的[[切映射]]，
作为 $\mathbb{R}^2 \to \mathbb{R}^2$ 的 $\mathbb{R}$-[[线性映射]]，
也应该是 $\mathbb{C}$ 线性的。
换言之，它一定能由一个旋转再加上一个缩放得到。
事实上，这样的线性映射的[[矩阵]]形如
\[
\begin{pmatrix}
  a & b \\
  -b & a
\end{pmatrix},
\]
这正是 Cauchy–Riemann 方程所要求的。
这也说明，如果在某点处该切映射非零，
就能得到 $f$ 在该点是[[共形映射]]。

## 陈述与证明

::: theorem [Cauchy–Riemann 方程]
设 $U \subset \mathbb{C}$ 是[[开集]]，
考虑函数 $f \colon U \to \mathbb{C}$。

将复平面的坐标写成 $z = x + \mathrm{i} y$，其中 $x, y \in \mathbb{R}$，并令
\[
f (x, y) = u (x, y) + \mathrm{i} v (x, y),
\]
其中 $u, v \colon U \to \mathbb{R}$ 分别为 $f$ 的实部、虚部。

固定一点 $z_0 = x_0 + \mathrm{i} y_0 \in U$。
则 $f$ 在 $z_0$ 处存在[[复导数]]，
当且仅当 $f$ 在 $z_0$ 处[[可微映射|可微]]，
且在 $z_0$ 处满足 **Cauchy–Riemann 方程**
\[
\begin{aligned}
  \frac{\partial u}{\partial x} & = \frac{\partial v}{\partial y}, \\
  \frac{\partial u}{\partial y} & = -\frac{\partial v}{\partial x}.
\end{aligned}
\]
特别地，$f$ 是[[全纯函数]]等价于上述方程在 $U$ 的每点处满足。
:::

::: proof
根据复导数的定义，$f$ 在 $z_0$ 存在复导数，
等价于存在 $A \in \mathbb{C}$，使得当复数 $h \to 0$ 时，有
\[
f(z_0 + h) - f(z_0) = A h + o(|h|).
\]
这等价于 $f$ 作为 $U \to \mathbb{R}^2$ 的映射在 $z_0$ 处[[可微映射|可微]]，
并且[[切映射]] $d f_{z_0} \colon \mathbb{R}^2 \to \mathbb{R}^2$ 由乘以某个复数 $A$ 给出。
若记 $A = a + \mathrm{i} b$，其中 $a, b \in \mathbb{R}$，
则乘以 $A$ 的线性映射是
$x + \mathrm{i} y \mapsto (a x - b y) + \mathrm{i} (b x + a y)$，其矩阵为
\[
\begin{pmatrix}
  a & b \\
  -b & a
\end{pmatrix}.
\]
因此，$f$ 存在复导数等价于其切映射的矩阵，即 [[Jacobi 矩阵]]，具有上述形式。
此即 Cauchy–Riemann 方程。
:::

有时，也将 Cauchy–Riemann 方程写成下面的形式。
我们使用[[复微分]]的记号
\[
\begin{aligned}
  \frac{\partial}{\partial z} & = \frac{1}{2} \Bigl(
    \frac{\partial}{\partial x} +
    \mathrm{i} \frac{\partial}{\partial y}
  \Bigr), \\
  \frac{\partial}{\partial \bar{z}} & = \frac{1}{2} \Bigl(
    \frac{\partial}{\partial x} -
    \mathrm{i} \frac{\partial}{\partial y}
  \Bigr).
\end{aligned}
\]
则 Cauchy–Riemann 方程可以简写为
\[
\frac{\partial f}{\partial \bar{z}} = 0.
\]
也就是说，$f$ [[全纯函数|全纯]]地依赖于 $z$，而没有[[反全纯函数|反全纯]]的部分。

## 推论

### 调和性

Cauchy–Riemann 方程的一个重要推论是，
全纯函数的实部和虚部都是[[调和函数]]。

::: theorem
设 $U \subset \mathbb{C}$ 是[[开集]]，
$f \colon U \to \mathbb{C}$ 是[[全纯函数]]。
令 $u, v \colon U \to \mathbb{R}$ 分别为 $f$ 的实部、虚部。
则 $u, v$ 都是[[调和函数]]。
:::

因为调和函数是解析的，可以得到全纯函数都是解析的。
也就是说，存在一阶导数即蕴涵解析性。这是与实分析中截然不同的结果。

反过来，对[[单连通空间|单连通]]开集 $U \subset \mathbb{C}$ 上的调和函数 $u$，
总能找到调和函数 $v$ 使得
$(u,v)$ 满足 Cauchy–Riemann 方程。
此时，称调和函数 $u, v$ 互为 **[[调和共轭]]**。

```terms
Cauchy–Riemann 方程:
  en: Cauchy–Riemann equations
  fr: équations de Cauchy–Riemann
  de: Cauchy-Riemannschen Differentialgleichung (CRDG)
  ja: Cauchy–Riemann の方<ほう>程<てい>式<しき>
```
