---
title: Möbius 反演
categories: [计数组合, 初等数论]
navboxes: [计数组合]
---

**Möbius 反演**是[[组合学]]中的结论。
其经典版本来源于[[初等数论]]，该结论是说，
对[[数论函数]] $f \colon \mathbb{N}_+ \to \mathbb{C}$，
若定义数论函数 $g$ 为
\[
g (n) = \sum_{d \mid n} f (d),
\]
这里对 $n$ 的所有正[[因数]] $d$ 求和，
则 $f$ 可以反过来用 $g$ 表示出来：

```math {@反演}
f (n) = \sum_{d \mid n} g (d) \, \mu \Bigl( \frac{n}{d} \Bigr),
```

其中 $\mu$ 是 [[Möbius 函数 (数论)|Möbius 函数]]。
此时称 $g$ 为 $f$ 的 **Möbius 变换**，
而式 @反演 就称为 **Möbius 反演**。

大致来说，式 @反演 成立的原因是，
若将每个 $g (d)$ 按其定义展开，写成一些 $f (d')$ 的和，其中 $d' \mid d$，
则对固定的 $d'$，式中出现的所有 $f (d')$ 在乘以系数 $\mu (n/d) = \pm 1$ 后都被抵消，
只有当 $d' = n$ 的那一项留了下来，
因此整个和式只剩下一项 $f (n)$。

一般的 Möbius 反演是上述结论向[[偏序集]]的推广。
在上述结论中，我们取的是正整数集 $\mathbb{N}_+$ 在[[整除]]关系下构成的偏序集。
在一般情况下，上述 Möbius 函数 $\mu (n/d)$
需要换成一个二元函数 $\mu (d, n)$，
称为该偏序集的 [[Möbius 函数 (偏序集)|Möbius 函数]]。

## 陈述

设 $(X, \leq)$ 为[[偏序集]]。记
\[
X^\leq = \{ (x, y) \in X \times X \mid x \leq y \}.
\]

::: definition [局部有限偏序集] {@局部有限偏序集}
称偏序集 $(X, \leq)$ 为**局部有限偏序集**，
若对任意 $(x, y) \in X^\leq$，[[区间]]
\[
[x, y] = \{ z \in X \mid x \leq z \leq y \}
\]
是[[有限集]]。
:::

::: definition [卷积代数]
设 $(X, \leq)$ 是局部有限偏序集（@局部有限偏序集），$R$ 是[[交换环]]。
定义 $X$ 的**卷积代数** $I (X; R)$ 为下述 $R$-结合代数：

- 其元素为映射 $f \colon X^\leq \to R$。

- 其乘法为如下定义的**卷积**。
  对 $f, g \in I (X; R)$，定义其卷积 $f * g \in I (X; R)$ 为
  \[
  (f * g) (x, y) =
  \sum_{x \leq z \leq y} f (x, z) \, g (z, y).
  \]

- 其单位元为以下定义的 **$\delta$ 函数**：
  \[
  \delta (x, y) = \begin{cases}
    1, & x = y, \\
    0, & x \neq y.
  \end{cases}
  \]

:::

::: theorem [Möbius 函数]
设 $(X, \leq)$ 是局部有限偏序集（@局部有限偏序集），$R$ 是[[交换环]]。
则存在唯一元素 $\mu \in I (X; R)$，称为 **[[Möbius 函数 (偏序集)|Möbius 函数]]**，
使得
\[
\mu * e = e * \mu = \delta,
\]
其中 $e \in I (X; R)$ 是由 $e (x, y) \equiv 1$ 定义的[[常值函数]]。
:::

::: proof [证明概要]
我们对区间 $[x, y]$ 的元素个数归纳定义 $\mu (x, y)$。
若该区间只有 $1$ 个元素，则 $x = y$，定义 $\mu (x, x) = 1$。否则，定义
\[
\mu (x, y) = -\sum_{x \leq z < y} \mu (x, z),
\]
其中右边的 $\mu (x, z)$ 已由归纳假设定义。
可以验证，该定义保证了 $\mu * e = e * \mu = \delta$。唯一性也由证明过程得到。
:::

::: corollary [Möbius 反演] {@mobius-反演}
设 $(X, \leq)$ 是局部有限偏序集（@局部有限偏序集），$R$ 是[[交换环]]。
设 $X$ 有[[最小元]]。
则对任意映射 $f, g \colon X \to R$，如果对任意 $y \in X$ 都有
\[
g (y) = \sum_{x \leq y} f (x),
\]
那么对任意 $y \in X$ 都有
\[
f (y) = \sum_{x \leq y} g (x) \, \mu (x, y)
\]
:::

::: proof
对任意 $F \in I (X; R)$，有
\[
F (x, y) = (F * e * \mu) (x, y) =
\sum_{x \leq z \leq y}
\sum_{x \leq w \leq z}
F (x, w) \, \mu (z, y).
\]
令 $F (x, y) = f (y)$，并在上式中取 $x$ 为 $X$ 的最小元，得到
\[
f (y) =
\sum_{z \leq y}
\sum_{w \leq z}
f (w) \, \mu (z, y),
\]
即为要证的等式。
:::

## 例子

### 在数论中

取偏序集 $(X,\leq)$ 为 $(\mathbb{N}_+, |)$，其中 $|$ 表示[[整除]]，
则 @mobius-反演 即为引言所述的初等数论情形。

### 容斥原理

[[容斥原理]]是 Möbius 反演的特例：
对[[有限集]] $K$，取偏序集 $X$ 为 $K$ 的所有[[子集]]构成的[[格 (序论)|格]]。
则对子集 $I \subseteq J \subseteq K$，有
\[
\mu (I, J) = (-1)^{|J| - |I|},
\]
从而对任意 $f \colon X \to \mathbb{Z}$，若定义 $g (J) = \sum_{I \subseteq J} f (I)$，则
\[
f (J) = \sum_{I \subseteq J} {} (-1)^{|J| - |I|} \, g (I).
\]
在应用中，常取[[有限集]] $Y$ 及一族子集 $(Y_k \subseteq Y)_{k \in K}$，
满足 $Y = \bigcup_{k \in K} Y_k$，
并对 $I \subseteq K$，定义
\[
\begin{aligned}
  f (I) & = \bigl| \{ y \in Y \mid k \notin I \Leftrightarrow y \in Y_k \} \bigr|, \\
  g (I) & = \bigl| \{ y \in Y \mid k \notin I \Rightarrow y \in Y_k \} \bigr|.
\end{aligned}
\]
此时，
\[
0 = f (K)
= \sum_{I \subseteq K} {} (-1)^{|K| - |I|} \, g (I),
\]
从而
\[
|Y| = g (K) = \sum_{I \subsetneqq K} {} (-1)^{|K| - |I| - 1} \, g (I),
\]
此即容斥原理。

```terms
Möbius 反演:
  en: Möbius inversion
```
