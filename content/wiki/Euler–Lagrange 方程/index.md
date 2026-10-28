---
title: Euler–Lagrange 方程
aliases: [Euler-Lagrange 方程]
categories: [经典力学]
---

<problems>
- “陈述与证明”一节缺少两个定理的证明。
- “例子”一节第一个例子中，由所给的 $L$ 得到的方程似乎应为 $m\ddot{x} = -\nabla \phi(x) = F$（缺少质量 $m$）。
</problems>

**Euler–Lagrange 方程**是[[质点力学]]或[[经典场论]]中，
在给出[[作用量]]后，
由[[最小作用量原理]]得到的质点或场的运动所需要满足的方程。
它因此成为 [[Lagrange 力学]]的基础。

## 陈述与证明

### 质点力学版本

::: theorem
给定流形 $M$ 作为全空间，
给定 [[Lagrange 量]] $L = L(x, \dot{x})$
（即 $L$ 是一个切丛 $\mathrm{T}M$ 上的函数，
$x$ 表示 $M$ 本身的分量，$\dot{x}$ 表示切空间的分量），
则质点在 $M$ 中的运动（由参数曲线 $x(t)$ 描述）满足方程
\[
\frac{dL}{dx} - \frac{d}{dt}\frac{dL}{d\dot{x}} = 0.
\]
:::

::: remark
这里的“质点力学”实际上是指有限[[自由度]]的系统，
例如 $\mathbb{R}^n$ 中[[刚体]]的构形可以由 $\mathbb{R}^n$ 的等距变换群
$\mathrm{ISO}(n, \mathbb{R})$ 中的元素参数化。
此时为建立 Euler–Lagrange 方程只需考虑流形
$M = \mathrm{ISO}(n, \mathbb{R})$。
:::

### 场论版本

::: theorem
给定全空间 $\mathbb{R}^n$ 和对 $\mathbb{R}^n$ 上函数 $\phi$ 定义的[[作用量密度]]
$\mathcal{L}(\phi, \partial_\mu \phi)$
（即 $n+1$ 元函数 $\mathcal{L}$ 代入
$\phi$、$\partial_\mu \phi$ 的值），
则 $\phi$ 描述场的运动时满足方程
\[
\frac{\partial \mathcal{L}}{\partial \phi} -
\partial_\mu\frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
= 0.
\]
:::

::: remark
把 $\mathbb{R}^n$ 中一个坐标视为时间，
则函数 $\phi$ 中给定时间的截面可以认为描述了空间中的场。
$\phi$ 本身综合了所有时间截面的信息，
描述了场的（假想的）演化。
上述定理即描述了 $\phi$ 真正描述某个场的演化时需要满足的条件。
:::

::: remark
上面的表述中全空间也可以换成任何一个流形，
函数 $\phi$ 也可以换为非平凡的丛的截面，
只要能在上面定义好的导数和积分理论，
则类似的方程也成立（见 @beta-gamma）。
:::

## 例子

::: example
考虑 $M$ 为标准 [[Euclid 空间]] $\mathbb{R}^n$，
\[
L(x, \dot{x}) = \frac{1}{2}m\dot{x}^2 - \phi(x)
\]
（即“[[动能]]减[[势能]]”），
则 $x$ 需要满足方程
\[
\ddot{x} = -\nabla \phi(x) = F,
\]
即[[牛顿力学]]中[[力]]与[[加速度]]的关系。
:::

::: example [$\beta$-$\gamma$ 系统] {@beta-gamma}
令全空间 $X$ 为给定的 [[Riemann 面]]，
作用量密度为（一个 $(1,1)$-形式，因此可以在全空间上积分）
\[
S \colon (\beta, \gamma) \mapsto \beta \wedge \bar{\partial} \gamma,
\]
其中
\[
(\beta, \gamma) \in \Omega^{1, 0} (X) \oplus \Omega^{0, 0} (X).
\]
则由类似推理可知 $\beta$、$\gamma$ 描述运动时需要满足方程
\[
\bar{\partial}\beta = \bar{\partial} \gamma = 0,
\]
即 $\beta$、$\gamma$ 均为[[全纯形式]]。
:::

```terms
Euler–Lagrange 方程:
  en: Euler–Lagrange equation
  de: Euler–Lagrange-Gleichung
  fr: équation d'Euler–Lagrange
```
