---
title: 切映射
categories: [微分几何]
navboxes: [微分几何]
---

在[[微分几何]]中，
[[光滑流形]]间[[光滑映射]]的**切映射**是指相应流形的[[切空间]]之间的[[线性映射]]，
作为与原来映射的线性逼近，也就是与之“最接近”的线性映射。
切映射的概念是[[导数]]的高维推广。

## 定义

我们先叙述 [[Euclid 空间]]之间映射的切映射的定义，
因为这一情况下定义比较直接。
在此之后，我们再对一般的流形间的映射定义切映射，这一定义稍微抽象一些。

### 对 Euclid 空间的映射

::: definition {@特殊定义}
设 $m, n$ 是[[自然数]]，$U \subset \mathbb{R}^m$ 和 $V \subset \mathbb{R}^n$ 是[[开集]]，
$f \colon U \to V$ 是[[连续可微映射]]。
设 $x \in U$。
则 $f$ 在 $x$ 处的**切映射**是
指[[切空间]]之间的[[线性映射]]
\[
df_x \colon \mathrm{T}_x U \longrightarrow \mathrm{T}_{f (x)} V,
\]
由 [[Jacobi 矩阵]]
\[
\begin{pmatrix}
  \dfrac{\partial f^1}{\partial x^1} (x) & \cdots &
  \dfrac{\partial f^1}{\partial x^m} (x) \\
  \vdots & & \vdots \\
  \dfrac{\partial f^n}{\partial x^1} (x) & \cdots &
  \dfrac{\partial f^n}{\partial x^m} (x)
\end{pmatrix}
\]
给出。这里 $f^1, \dotsc, f^n$ 是 $f$ 的各分量，
而 $x^1, \dotsc, x^m$ 是 $U$ 上的坐标。
我们自然地将 $\mathrm{T}_x U$ 与 $\mathbb{R}^m$ 等同起来，
将 $\mathrm{T}_{f (x)} V$ 与 $\mathbb{R}^n$ 等同起来。
:::

### 对流形的映射

::: definition {@一般定义}
设 $X, Y$ 是[[光滑流形]]，$f \colon X \to Y$ 是[[光滑映射]]。
设 $x \in X$。则 $f$ 在 $x$ 处的**切映射**是指[[切空间]]之间的[[线性映射]]
\[
\begin{aligned}
  df_x \colon \mathrm{T}_x X
  & \longrightarrow \mathrm{T}_{f (x)} Y, \\
  v & \longmapsto df_x (v),
\end{aligned}
\]
这里 $df_x (v)$ 定义如下：
对任何 $g \in C^\infty (Y)$，有
\[
df_x (v) \, (g) =
v (g \circ f).
\]

更一般地，若 $X, Y$ 是 [[微分流形|$C^1$ 流形]]，
而 $f$ 是 [[连续可微映射|$C^1$ 映射]]，
则上述定义仍然有效，
只需将 $g \in C^\infty (Y)$ 换成 $g \in C^1 (Y)$。
:::

可以验证（@定义等价性），
在 @特殊定义 的情况下，
这里定义的切映射确实与 @特殊定义 给出的相同。
而这个定义更加一般，并且不依赖于坐标。

## 例子

- 设 $f \colon \mathopen{]} a, b \mathclose{[} \to \mathbb{R}$ 是[[连续可微函数]]，
  设 $x \in \mathopen{]} a, b \mathclose{[}$。
  则切映射 $df_x \colon \mathbb{R} \to \mathbb{R}$ 就是乘以 $f' (x)$。

- 设 $f \colon \mathbb{R}^2 \to \mathbb{R}^2$，定义为
  $f (x, y) = (x \cos y, x \sin y)$。
  则 $f$ 在点 $(x, y)$ 的切映射 $d f_{(x, y)} \colon \mathbb{R}^2 \to \mathbb{R}^2$
  由其 [[Jacobi 矩阵]]给出：
  \[
  df_{(x, y)} = \begin{pmatrix}
    \cos y & -x \sin y \\
    \sin y & x \cos y
  \end{pmatrix}.
  \]

- 设 $X, Y$ 为[[光滑流形]]，$f \colon X \to Y$
  将所有点都映到某个 $y \in Y$。换言之，$f$ 是[[常映射]]。
  则 $f$ 的所有切映射都为 $0$。

- 设 $X$ 是[[光滑流形]]，考虑[[恒同映射]] $\mathbb{1}_X \colon X \to X$。
  则对任意 $x \in X$，切映射
  $d (\mathbb{1}_X)_x \colon \mathrm{T}_x X \to \mathrm{T}_x X$
  是切空间的恒同映射。

## 性质

### 基本性质

::: proposition {@定义等价性}
在 @特殊定义 的情况下，
@一般定义 给出的切映射与 @特殊定义 给出的相同。
:::

::: proof
我们使用 @一般定义 的记号，
设 $X$ 为 $\mathbb{R}^m$ 中的开集，$Y$ 为 $\mathbb{R}^n$ 中的开集。
则 $\mathrm{T}_x X$ 与 $\mathrm{T}_{f (x)} Y$ 分别由[[基]]
\[
\biggl\{
  \frac{\partial}{\partial x^1}, \ \dotsc, \
  \frac{\partial}{\partial x^m}
\biggr\}, \
\biggl\{
  \frac{\partial}{\partial y^1}, \ \dotsc, \
  \frac{\partial}{\partial y^n}
\biggr\}
\]
张成。由[[链式法则]]得到
\[
\begin{aligned}
  d f_x \biggl( \frac{\partial}{\partial x^i} \biggr) (g)
  & =
  \frac{\partial}{\partial x^i} (g \circ f) (x) \\
  & =
  \sum_{j=1}^n
  \frac{\partial f^j}{\partial x^i} (x) \cdot
  \frac{\partial g}{\partial y^j} (f (x)) \\
  & =
  \biggl(
    \sum_{j=1}^n
    \frac{\partial f^j}{\partial x^i} (x) \cdot
    \frac{\partial}{\partial y^j}
  \biggr) (g),
\end{aligned}
\]
因此我们看出，切映射 $df_x$ 确实由 $f$ 的 Jacobi 矩阵给出。
:::

::: proposition {@复合}
切映射保持映射复合。具体而言，设 $X, Y, Z$ 为[[光滑流形]]，
$f \colon X \to Y$ 和 $g \colon Y \to Z$ 为[[光滑映射]]。
则对任意 $x \in X$，有
\[
d (g \circ f)_x = dg_{f (x)} \circ df_x \colon
\mathrm{T}_x X \longrightarrow \mathrm{T}_{g \circ f (x)} Z.
\]
:::

::: proof
由 @一般定义 立刻得出。
:::

```terms
切映射:
  en: tangent map
```
