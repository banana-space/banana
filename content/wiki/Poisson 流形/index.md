---
title: Poisson 流形
categories: [辛几何]
notices:
  - name: 问题
    items:
      - “由 Poisson 双向量场”一节中，双向量场按通常的约定似乎应是 $(2, 0)$ 型张量场。
navboxes: [辛几何]
---

在[[微分几何]]中，
**Poisson 流形**是[[辛流形]]的推广，
是指带有 [[Poisson 括号]]结构的[[光滑流形]]。

Poisson 流形具有[[形变量子化]]。
形变量子化是一种由[[经典力学]]系统构造其对应的[[量子力学]]系统的过程，
由 Poisson 流形的[[光滑函数]]构成的[[交换代数 (代数结构)|交换代数]]出发，构造其非交换的形变。
这对应量子力学中[[量子可观测量]]的代数，其[[交换子]]由 Poisson 括号给出。

## 定义

### 由 Poisson 括号

对[[光滑流形]] $X$，
记 $C^\infty (X)$ 为 $X$ 上[[光滑函数]]构成的 $\mathbb{R}$-[[交换代数 (代数结构)|代数]]。

::: definition
**Poisson 流形**是指二元组 $(X, \{ -, - \})$，其中

- $X$ 是[[光滑流形]]。

- $\{ -, - \} \colon C^\infty (X) \otimes C^\infty (X) \to C^\infty (X)$
  是 $\mathbb{R}$-[[双线性映射]]，称为 **[[Poisson 括号]]**。

并满足以下条件：

- $(C^\infty (X), \{ -, - \})$ 是 $\mathbb{R}$ 上的 [[Lie 代数]]。
  换言之，Poisson 括号[[反对称双线性型|反对称]]，且满足 [[Jacobi 恒等式]]：
  \[
  \begin{gathered}
    \{ f, g \} = - \{ g, f \}, \\
    \{ f, \{ g, h \} \} + \{ g, \{ h, f \} \} + \{ h, \{ f, g \} \} = 0.
  \end{gathered}
  \]

- 对任何 $f \in C^\infty (X)$，
  映射 $\{ f, - \} \colon C^\infty (X) \to C^\infty (X)$
  是 $C^\infty (X)$ 上的[[导子]]。
  换言之，Poisson 括号满足 [[Leibniz 法则]]：
  \[
  \{ f, gh \} = g \{ f, h \} + \{ f, g \} h.
  \]
:::

### 由 Poisson 双向量场

给定[[光滑流形]] $X$，
则 $X$ 上的 Poisson 结构等价于 $X$ 上的光滑[[多向量场|双向量场]]
$P \in \Gamma ({\wedge}^2 (\mathrm{T} X))$，
即[[反对称双线性型|反对称]] $(0, 2)$-[[张量场]]，
称为 **Poisson 双向量场**，
满足
\[
[P, P] = 0,
\]
其中 $[-, -]$ 是 [[Schouten–Nijenhuis 括号]]。

给定这样的双向量场 $P$，则其对应的 Poisson 括号由
\[
\{ f, g \} = P (d f, d g)
\]
给出。反过来，任何 Poisson 括号都由这样的双向量场给出。
这里，Poisson 括号的 Jacobi 恒等式对应于 Poisson 双向量场满足 $[P, P] = 0$ 的条件。

## 例子

- 对任何[[光滑流形]] $X$，令 $\{ -, - \} = 0$，
  则 $(X, \{ -, - \})$ 是 Poisson 流形。

- [[辛流形]]都是 Poisson 流形。对辛流形 $(X, \omega)$，
  其 Poisson 括号定义为
  \[
  \{ f, g \} = \omega (H_f, H_g),
  \]
  其中 $H_f$ 和 $H_g$ 是 $f$、$g$ 的 [[Hamilton 向量场]]。

```terms
Poisson 流形:
  en: Poisson manifold
  fr: variété de Poisson :f
  de: Poisson-Mannigfaltigkeit :f
```
