---
title: 光滑映射
categories: [微分几何]
notices:
  - name: 问题
    items:
      - “对流形的映射”一节的定义中，复合映射 $\psi^{-1} \circ f \circ \varphi$ 的定义域似乎应为 $\varphi^{-1} (f^{-1} (\psi (V)))$，而非 $\varphi^{-1} (\psi (V))$。
navboxes: [微分几何]
---

在[[微分几何]]中，**光滑映射**是指可以求任意多阶[[偏导数]]的[[映射]]，
这里的映射可以是 [[Euclid 空间]]之间的映射，
也可以是[[光滑流形]]间的映射。
流形间的光滑映射是微分几何中最基本的概念之一。

## 定义

### 对 Euclid 空间的映射

::: definition {@thm:对-Euclid-空间的映射}
设 $m, n$ 为[[自然数]]，
$U \subset \mathbb{R}^m$ 为[[开集]]，
$f \colon U \to \mathbb{R}^n$ 为[[映射 (集合论)|映射]]。
称 $f$ 为**光滑映射**，如果满足以下条件：

- 对任何 $x \in U$，及任何
  $i_1, \dotsc, i_k \in \{ 1, \dotsc, m \}$（可以重复），
  都存在[[偏导数]]
  \[
  \frac{\partial^k f}{\partial x^{i_1} \cdots \partial x^{i_k}} (x).
  \]

:::

### 对流形的映射

[[光滑流形]]间的光滑映射也就是局部上是 Euclid 空间之间的光滑映射
（@thm:对-Euclid-空间的映射）的映射。

::: definition {@流形光滑映射}
设 $X, Y$ 分别为 $m, n$ 维[[光滑流形]]，
$f \colon X \to Y$ 是[[连续映射]]。

称 $f$ 为**光滑映射**，如果满足以下条件：

- 对任意[[局部坐标]] $\varphi \colon U \to X$
  及 $\psi \colon V \to Y$，
  其中 $U \subset \mathbb{R}^m$ 与 $V \subset \mathbb{R}^n$ 为[[开集]]，
  复合映射
  \[
  \psi^{-1} \circ f \circ \varphi \colon
  \varphi^{-1} (\psi (V)) \longrightarrow V
  \]
  都是光滑映射（@thm:对-Euclid-空间的映射），
  这里 $\varphi^{-1} (\psi (V)) \subset U$ 是开集。

另外，对某个 $x \in X$，称 $f$ 在点 $x$ 处**光滑**，
若满足以下条件：

- 存在 $x$ 的开邻域 $U \subset X$，使得 $f|_U$ 是上述意义下的光滑映射。

:::

## 例子

- 所有[[线性映射]] $f \colon \mathbb{R}^m \to \mathbb{R}^n$ 都是光滑映射。
  更一般地，所有[[多项式映射]] $f \colon \mathbb{R}^m \to \mathbb{R}^n$
  也都是光滑映射。

## 性质

### 切映射

设 $X, Y$ 为光滑流形，$f \colon X \to Y$ 为光滑映射。
则对每个 $x \in X$，映射 $f$ 都能诱导[[切空间]]之间的[[线性映射]]
\[
d f_x \colon \mathrm{T}_x X \longrightarrow \mathrm{T}_{f (x)} Y,
\]
称为 $f$ 的 **[[切映射]]**。
大致来说，这是 $f$ 的最佳线性逼近，即最接近 $f$ 的线性映射。

### 与环化空间的联系

光滑流形间的光滑映射（@流形光滑映射）
也可以通过[[环化空间]]的概念来描述。

::: definition
设 $X$ 是[[光滑流形]]。
定义 $X$ 上的[[交换环]][[层]] $\mathcal{C}^\infty_X$ 如下：

- 对开集 $U \subset X$，交换环 $\mathcal{C}^\infty_X (U)$
  就是所有光滑映射 $f \colon U \to \mathbb{R}$ 构成的环。

称 $\mathcal{C}^\infty_X$ 为 $X$ 上的 **[[光滑函数层]]**。
则 $(X, \mathcal{C}^\infty_X)$ 可视为[[局部环化空间]]。
:::

::: proposition
设 $X, Y$ 为光滑流形。
则 $X$ 到 $Y$ 的光滑映射一一对应于局部环化空间
$(X, \mathcal{C}^\infty_X)$ 到 $(Y, \mathcal{C}^\infty_Y)$ 的态射。
光滑映射 $f \colon X \to Y$
对应于态射 $(f, f^\sharp)$，这里
$f^\sharp \colon \mathcal{C}^\infty_Y \to f_* \mathcal{C}^\infty_X$
以明显的方式定义。

简言之，[[光滑流形范畴]]可以[[全忠实函子|全忠实]]地嵌入局部环化空间的范畴。
:::

```terms
光滑映射:
  en: smooth map
  fr: application glissée
微分同胚:
  en: diffeomorphism
  fr: difféomorphisme
```
