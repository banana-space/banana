---
title: 算畴
aliases: [Operad]
categories: [范畴代数]
notices:
  - name: 问题
    items:
      - “充实算畴”“例子”各节需要扩充。
      - “普通算畴”一节定义中，复合映射与置换作用相容的等式右边似乎还应作用一个将 $k_1, \dotsc, k_n$ 个元素所成的各块按 $\sigma$ 重排的置换；另外定义似乎缺少复合映射与各 $\mathfrak{S}_{k_i}$ 作用相容的条件。
navboxes: [范畴论]
---

**算畴**是一种[[代数结构]]，
常用于描述其它代数结构。
具体来说，算畴 $\mathcal{O}$ 由一系列[[集合]] $\mathcal{O} (n)$ 组成，
其中 $n$ 是自然数。
集合 $\mathcal{O} (n)$ 是 $\mathcal{O}$ 所描述的代数结构中，
所有可能的 $n$ 元[[运算]]组成的集合。例如：

- **[[结合算畴]]** $\mathsf{Assoc}$ 描述的代数结构是[[结合代数]]。
  对自然数 $n$，集合 $\mathsf{Assoc} (n)$
  是结合代数中所有将 $n$ 个元素相乘的方法的集合，
  它有 $n!$ 个元素，对应于 $n$ 个元素相乘的 $n!$ 种不同顺序。

- **[[交换算畴]]** $\mathsf{Comm}$ 描述[[交换代数 (代数结构)|交换代数]]，
  每个集合 $\mathsf{Comm} (n)$ 都是[[单点集]]，
  因为只有一种方法将 $n$ 个元素相乘，而不取决于其顺序。

利用算畴的概念，可以将各种[[代数结构]]的概念推广到任意的[[对称幺半范畴]]中。
研究这类结构的学科称为[[范畴代数]]。

在算畴中，集合 $\mathcal{O} (n)$ 有时还带有其它结构，
例如[[拓扑空间]]或[[向量空间]]结构。
此时，称该算畴为**充实算畴**，
即充实于[[拓扑空间范畴]]、[[向量空间范畴]]等的算畴。

算畴可视为只有一个对象的[[多元范畴]]，
后者有时也称为有色算畴，或简称算畴。

在[[高阶范畴论]]中，我们也考虑 [[$\infty$-范畴]]中的代数结构。
这些代数结构可以由 [[$(\infty, 1)$-算畴]]来描述。

## 定义

### 普通算畴

::: definition [算畴]
**算畴** $\mathcal{O}$ 由下列信息组成：

- 对每个自然数 $n$，有集合 $\mathcal{O} (n)$，
  它带有[[置换群]] $\mathfrak{S}_n$ 的[[群作用|右作用]]。
  其元素有时称为 **$n$ 元运算**。

- 有一个特殊元素 $\mathbb{1} \in \mathcal{O} (1)$，
  称为**恒同运算**。

- 对自然数 $n$ 及 $k_1, \dotsc, k_n$，有**复合映射**
  \[
  \begin{aligned}
    {\circ} \colon
    \mathcal{O} (n) \times \prod_{i=1}^{n} \mathcal{O} (k_i)
    & \longrightarrow \mathcal{O} (k_1 + \cdots + k_n), \\
    (f, f_1, \dotsc, f_n)
    & \longmapsto f \circ (f_1, \dotsc, f_n).
  \end{aligned}
  \]

它们满足以下条件：

- （**[[单位律]]**）
  对任意自然数 $n$ 及 $f \in \mathcal{O} (n)$，有
  \[
  \mathbb{1} \circ (f) = f =
  f \circ (\mathbb{1}, \dotsc, \mathbb{1}).
  \]

- （**[[结合律]]**）
  对自然数 $n$、$k_i$、$\ell_{i, j}$，
  其中 $1 \leq i \leq n$、$1 \leq j \leq k_i$，
  以及
  \[
  h \in \mathcal{O} (n), \quad
  g_i \in \mathcal{O} (k_i), \quad
  f_{i,j} \in \mathcal{O} (\ell_{i,j}),
  \]
  有
  \[
  \begin{aligned}
    & \bigl( h \circ (g_1, \dotsc, g_n) \bigr) \circ
    (f_{1,1}, \dotsc, f_{1,k_1}, \dotsc, f_{n,1}, \dotsc, f_{n,k_n}) \\
    & \qquad =
    h \circ \Bigl(
      g_1 \circ (f_{1,1}, \dotsc, f_{1,k_1}), \ \dotsc, \
      g_n \circ (f_{n,1}, \dotsc, f_{n,k_n})
    \Bigr) .
  \end{aligned}
  \]

- 复合映射与置换的作用相容：
  对自然数 $n$ 及 $k_1, \dotsc, k_n$，
  以及 $\sigma \in \mathfrak{S}_n$、
  $f \in \mathcal{O} (n)$ 及 $f_i \in \mathcal{O} (k_i)$，有
  \[
  (f \cdot \sigma) \circ (f_1, \dotsc, f_n) =
  f \circ (f_{\sigma (1)}, \dotsc, f_{\sigma (n)}).
  \]

:::

直观上说，上述定义中的信息可以如下理解。
给定 $n$ 元运算 $f$ 及 $\sigma \in \mathfrak{S}_n$，
后者作用于 $f$ 得到 $n$ 元运算
\[
(f \cdot \sigma) (x_1, \dotsc, x_n) =
f (x_{\sigma (1)}, \dotsc, x_{\sigma (n)}).
\]
复合映射 $\circ$ 可以想象为，
给定 $n$ 元运算 $f$ 及 $k_i$ 元运算 $f_i$，得到复合
\[
\begin{aligned}
  & \bigl( f \circ (f_1, \dotsc, f_n) \bigr) \,
  (x_{1,1}, \dotsc, x_{1,k_1}, \dotsc, x_{n,1}, \dotsc, x_{n,k_n})
  \\ & \qquad =
  f \Bigl(
    f_1 (x_{1,1}, \dotsc, x_{1,k_1}), \dotsc,
    f_n (x_{n,1}, \dotsc, x_{n,k_n})
  \Bigr).
\end{aligned}
\]
这里的 $x_i$ 及 $x_{i,j}$ 并非真正的元素，只是辅助我们理解。

### 充实算畴

## 例子

```terms
算畴:
  en: operad
  fr: opérade :f
```
