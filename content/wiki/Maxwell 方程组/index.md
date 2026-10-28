---
title: Maxwell 方程组
aliases: [Maxwell 方程]
categories: [电动力学]
---

<problems>
- “特殊情形”一节需要扩充，例如说明如何由 Maxwell 方程组推出 Coulomb 定律。
- “求解”一节需要扩充。
</problems>

**Maxwell 方程组**是[[电动力学]]中的基本假设（或者说[[公理]]），
它描述了[[电场]]与[[磁场]]的关系。

从更本质的角度来看，
电动力学是一种特殊的[[规范场论]]，即 $U(1)$-规范场论，
Maxwell 方程则是此时相应的[[杨–Mills 方程]]。

## 经典陈述

下面 $E$ 表示[[电场强度]]，$B$ 表示[[磁感应强度]]，
$D$ 表示[[电位移矢量]]，
$H$ 表示[[磁场强度]]，$\rho$ 表示自由电荷密度，$\mathbf{j}$ 表示自由电流密度。

::: remark [方程：真空中 Maxwell 方程]
\[
\begin{aligned}
  \nabla \cdot E &= \frac \rho {\varepsilon _0} \\
  \nabla \times E &= -\frac{\partial B}{\partial t} \\
  \nabla \cdot B &= 0 \\
  \nabla \times B &= \mu_0 \mathbf{j}
  + \mu_0 \varepsilon_0 \frac{\partial E}{\partial t}
\end{aligned}
\]
:::

::: remark [方程：介质中 Maxwell 方程]
\[
\begin{aligned}
  \nabla \cdot D &= \rho \\
  \nabla \times E &= -\frac{\partial B}{\partial t} \\
  \nabla \cdot B &= 0 \\
  \nabla \times H &= \mathbf{j}
  + \frac{\partial D}{\partial t}
\end{aligned}
\]
在各向同性介质中，$D = \varepsilon E, B = \mu H$。
:::

## 规范场论观点

为简洁起见，接下来设定 $\epsilon_0 = \mu_0 = 1$。

::: definition
定义[[时空]] $\mathbb{R}^4$ 上的 [[$1$-形式]] $j = (\rho, \bf{j})$，
它是此场的源。
定义 [[$2$-形式]] $F$ 为以下矩阵
\[
\begin{pmatrix}
  0 & E_1 & E_2 & E_3 \\
  -E_1 & 0 & B_{12} & -B_{13} \\
  -E_2 & -B_{12} & 0 & B_{23} \\
  -E_3 & B_{13} & -B_{23} & 0
\end{pmatrix},
\]
:::

::: remark [方程：真空 Maxwell 方程，规范场形式]
\[
\begin{aligned}
  dF = 0 \\
  d^*F = j
\end{aligned}
\]
这里 $d^*$ 的定义参见 [[Hodge 星算子]]（取时空为平坦度量）。
:::

::: remark
通过此形式可以看出方程满足 [[Lorentz 协变性]]，
即它在时空对称群 [[Poincaré 群]]作用下形式不变。
因此[[电动力学]]天然与[[狭义相对论]]相容，
在历史上也正是对电动力学的研究引出了狭义相对论。
:::

::: remark
由于 $dF = 0$，存在 [[$1$-形式]] $A$ 满足 $dA = F$。
如把此场写为分量形式
\[
A_\mu = (\phi, \bf{A})
\]
则由定义可以验证
$\phi$ 正是[[电势]]，而 $\mathbf{A}$ 正是[[磁矢势]]。

在规范场论的框架下，上述 $A$ 比 $F$ 更为“本质”，
$A$ 是[[规范场]]，而 $F$ 是它的[[场强]]，
定义为 $dA$。
因此接下来的推广也会对规范场本身而非场强陈述。
:::

Maxwell 方程可以推广到一般的时空上。

::: remark [方程：一般时空的 Maxwell 方程]
对 [[Lorentz 流形]] $M$，Maxwell 方程是对[[规范场]]
$A \in \Omega^1(M)$ 和 $j \in \Omega^1(M)$ 的如下方程。
\[
d^* dA = j
\]
（注意场强 $F$ 的定义 $dA = F$ 已经隐含了 $dF = 0$ 成立）。
此方程即是[[杨–Mills 方程]]的特例。
:::

## 特殊情形

## 求解

```terms
Maxwell 方程组:
  en: Maxwell's equations
  de: Maxwell-Gleichungen
  fr: équations de Maxwell
```
