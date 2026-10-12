---
title: Hamilton 向量场
aliases: [哈密顿向量场, Hamiltonian 向量场]
categories: [辛几何]
navboxes: [辛几何]
---

在[[辛几何]]中，
**Hamilton 向量场**是[[辛流形]]上的一类[[向量场]]。
沿 Hamilton 向量场的[[流]]总是保持流形的辛结构，
从而构成一族[[辛同胚]]。

Hamilton 向量场的概念起源于[[经典力学]]。
力学系统的[[相空间]]通常是辛流形；
若假定系统的 [[Hamilton 量]]不随[[时间]]改变，则它是该流形上的光滑函数。
此时，Hamilton 向量场给出了系统[[时间演化]]的方向。
换言之，Hamilton 向量场的[[积分曲线]]给出系统[[运动方程]]的解。

## 定义

::: definition
设 $(M, \omega)$ 是[[辛流形]]。
称 $M$ 上的[[光滑向量场]] $X$ 为 **Hamilton 向量场**，
是指满足以下条件：

- 存在 $M$ 上的[[光滑函数]] $f \colon M \to \mathbb{R}$，
  称为 $X$ 对应的 **[[Hamilton 量]]**，
  使得微分形式的[[缩并]] $i_X \omega = d f$。
:::

此时，$f$ 在相差一个[[局部常值函数]]的意义下由 $X$ 唯一确定。
注意，有的文献称 $-f$ 而非 $f$ 为 $X$ 对应的 Hamilton 量。

上述条件也可等价表述为：对 $M$ 上任何光滑向量场 $Y$，有
\[
\omega (X, Y) = d f (Y).
\]

反过来，给定辛流形上的光滑函数作为 Hamilton 量，
也一定能找到其对应的 Hamilton 向量场。

::: definition
设 $(M, \omega)$ 是[[辛流形]]，
$f \colon M \to \mathbb{R}$ 是[[光滑函数]]。
考虑辛形式 $\omega$ 诱导的[[光滑向量丛]]的同构
$\omega \colon \mathrm{T} M \simeq \mathrm{T}^* M$，
并记 $\omega^{-1}$ 为其逆。
定义 $M$ 上的光滑向量场
\[
X_f = \omega^{-1} (d f).
\]
则 $X_f$ 称为 $f$ 对应的 **Hamilton 向量场**。
由构造，$f$ 是 $X_f$ 的 Hamilton 量。
:::

## 性质

### 坐标表示

在辛流形 $(M, \omega)$ 上，
由[[Darboux 定理]]选取局部辛坐标 $p^i,q^i$，使得辛形式坐标表示为
$\omega=\sum_idp^i\wedge dq^i$。
则光滑函数 $f \colon M \to \mathbb{R}$ 对应的 Hamilton 向量场的坐标表示为
\[
X_f =
\sum_i\frac{\partial f}{\partial q^i}\frac{\partial}{\partial p^i}
- \sum_i\frac{\partial f}{\partial p^i}\frac{\partial}{\partial q^i} .
\]
直接验证可知 $i_{X_f} \omega = d f$。

```terms
Hamilton 向量场:
  en: Hamiltonian vector field
```
