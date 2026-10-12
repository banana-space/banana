---
title: 全纯函数
categories: [复分析]
navboxes: [复分析]
---

在[[复分析]]中，
**全纯函数**是指关于[[复数|复]]变量的复值[[函数]]，
它在复数的意义下具有[[导数]]。

全纯函数一定是[[解析函数]]，
从而具有任意阶导数。
也就是说，一阶导数的存在性可以推出任意阶导数的存在性。
这与实数的情况迥然不同。

## 定义

::: definition [复导数、全纯函数]
设有[[映射 (集合论)|映射]] $f \colon U \to \mathbb{C}$，
其中 $U \subset \mathbb{C}$ 是[[开集]]。设 $z_0 \in U$。
则 $f$ 在 $z_0$ 处的 **[[复导数]]**（如果存在）定义为
\[
f' (z_0) = \lim_{z \to z_0} \frac{f (z) - f (z_0)}{z - z_0}.
\]
如果 $f$ 在 $U$ 内每点都存在复导数，
就称 $f$ 为 $U$ 上的**全纯函数**。
:::

## 例子

- 所有[[多项式]]函数，即形如
  \[
  f (z) = a_n z^n + \cdots + a_1 z + a_0
  \]
  的函数，其中 $a_0, \dotsc, a_n \in \mathbb{C}$，
  都是 $\mathbb{C}$ 上的全纯函数。

- 函数 $f (z) = 1/z$ 是开集 $\mathbb{C} \setminus \{ 0 \}$
  上的全纯函数，其复导数为 $f' (z) = -1/z^2$。
  它也是 $\mathbb{C}$ 上的[[亚纯函数]]。

- [[指数函数]] $\exp \colon \mathbb{C} \to \mathbb{C}$
  是全纯函数。
  通过指数函数，可以定义各种[[三角函数]]、[[双曲三角函数]]等，
  它们在各自的定义域上全纯。

## 性质

### Cauchy–Riemann 方程

将复平面的坐标写成 $z = x + \mathrm{i} y$，
并考虑开集 $U \subset \mathbb{C}$ 上的复值函数
\[
f (x, y) = u (x, y) + \mathrm{i} v (x, y),
\]
其中 $u, v$ 都是实值函数。则 $f$ 是全纯函数，
当且仅当它满足 [[Cauchy–Riemann 方程]]
\[
\begin{aligned}
  \frac{\partial u}{\partial x} & = \frac{\partial v}{\partial y}, \\
  \frac{\partial u}{\partial y} & = -\frac{\partial v}{\partial x}.
\end{aligned}
\]
事实上，这组方程是将 $f$ 存在复导数的条件翻译成实值函数的偏导数而得到的。

### 曲线积分

对开集 $U \subset \mathbb{C}$ 上的全纯函数 $f \colon U \to \mathbb{C}$，
及 $U$ 中的曲线 $\gamma \colon [a, b] \to U$，常常考虑[[曲线积分]]
\[
\int_\gamma f (z) \, d z.
\]
[[Cauchy 积分定理]]说明，
该积分仅依赖于 $\gamma$ 的[[同伦]]类。
进一步地，若 $\gamma$ 是闭曲线，
则上述积分可以通过 [[Cauchy 积分公式]]、[[留数定理]]等计算。

### 解析性

全纯函数一定是[[解析函数]]，
从而具有任意阶复导数，并且其各阶导数也都是全纯函数。

```terms
全纯函数:
  en: holomorphic function
  de: holomorphe Funktion :f
  fr: fonction holomorphe :f
  grc: ὁλομορφὴ συνάρτησις :f
  la: functio holomorpha :f
```
