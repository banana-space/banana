---
title: 浸入（微分几何）
aliases: [浸入子流形]
categories: [微分几何]
navboxes: [微分几何]
---

<disambiguation>
关于其他含义，请参见[[浸入]]。
</disambiguation>

在[[微分几何]]中，**浸入**是[[光滑流形]]间的一类[[光滑映射]]。
与[[嵌入 (微分几何)|嵌入]]类似，浸入也是将某个流形放入另一个流形中，
但浸入允许流形“与自己相交”。
例如，平面上与自身相交的曲线常常可以看成 $\mathbb{R}$ 到 $\mathbb{R}^2$ 的浸入。

## 定义

::: definition [浸入]
设 $X,Y$ 为[[光滑流形]]，
$f\colon X\rightarrow Y$ 为[[光滑映射]]。
称 $f$ 为**浸入**，若对任意 $x \in X$，[[切映射]]
$d f_x \colon \mathrm{T}_x X \to \mathrm{T}_{f (x)} Y$
是[[单射]]。

:::

有时，使用记号 $f \colon X \looparrowright Y$
表示 $f$ 是浸入。

::: definition [浸入子流形]
设 $X, Y$ 为[[光滑流形]]，
$f \colon X \to Y$ 为[[光滑映射]]。
若 $f$ 是[[单射]]，且是浸入，
则可将 $X$ 视为 $Y$ 的[[子集]]，
并称之为 $Y$ 的**浸入子流形**。
:::

注意，浸入子流形并不一定是[[子流形]]，
这是数学术语中[[白马非马]]的一个例子。

## 例子

- [[光滑流形]]间的所有[[嵌入 (微分几何)|嵌入]]都是浸入。

- [[光滑流形]]间的所有[[覆叠空间|覆叠]]都是浸入。

- 考虑[[环面]] $T^2 = S^1 \times S^1$，
  取 $\alpha \in \mathbb{R}$。考虑光滑映射
  \[
  \begin{aligned}
    f \colon \mathbb{R} & \longrightarrow T^2, \\
    t & \mapsto (\mathrm{e}^{\mathrm{i} t}, \mathrm{e}^{\mathrm{i} \alpha t}).
  \end{aligned}
  \]
  则 $f$ 是浸入，但不是[[嵌入 (微分几何)|嵌入]]。
  当 $\alpha \in \mathbb{R} \setminus \mathbb{Q}$ 时，
  $f$ 是单射，从而是 $T^2$ 的浸入子流形，但不是[[子流形]]。
  其像在 $T^2$ 中是[[稠密子空间|稠密]]的。

## 性质

### 基本性质

::: proposition [局部形式]
设 $f \colon X\rightarrow Y$ 是浸入，则
对任意 $x\in X$，存在 $x$ 的开邻域 $U$ 和其上的[[局部坐标]] $x^1,\dots,x^m$，
以及 $f(x)$ 的开邻域 $V$ 和其上局部坐标 $y^1,\dots y^n$，
使得 $f$ 在这个局部坐标下可以写为
\[
(t_1,\dots,t_m)\mapsto (t_1,\dots,t_m,0,\dots,0)
\]
的形式。
:::

::: proof
这是[[常秩定理]]的特例。
:::

这个命题保证了浸入子流形的光滑结构的唯一性。

::: proposition [光滑结构唯一性]
设 $X$ 是[[光滑流形]]，$Z$ 是[[拓扑流形]]，
$f \colon Z \to X$ 是[[连续映射]]。
则 $Z$ 上至多存在一种光滑结构，使得 $f$ 是浸入。
:::

## 参考文献

```bibliography
Lee12:
  type: book
  author: J. Lee
  year: 2012
  title: Introduction to Smooth Manifolds
  edition: 2
  series: Graduate Texts in Mathematics
  number: 218
  publisher: Springer
varadarajan2013lie:
  type: book
  title: 'Lie Groups, Lie Algebras, and Their Representations'
  author: 'Varadarajan, V. S.'
  series: Graduate Texts in Mathematics
  year: 2013
  number: 102
  publisher: Springer New York
```

```terms
浸入:
  en: immersion
  fr: immersion
```
