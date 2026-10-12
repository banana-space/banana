---
title: 偏微分方程
categories: [偏微分方程论]
---

在[[分析学]]中，
**偏微分方程**是指一类关于未知[[函数]]的[[微分方程]]，
通常形如
\[
F \biggl(
  \bm{x}, \ u (\bm{x}), \
  \frac{\partial u}{\partial x_i} (\bm{x}), \
  \frac{\partial^2 u}{\partial x_i \, \partial x_j} (\bm{x}), \ \dotsc
\biggr) = 0,
\]
其中 $u$ 是未知函数，常常是从 $\mathbb{R}^n$ 中的区域出发到 $\mathbb{R}$ 的函数；
$\bm{x} = (x_1, \dotsc, x_n)$ 是 $u$ 的定义域的坐标；
$F$ 是一个给定的表达式。

例如，[[Laplace 方程]]
\[
\frac{\partial^2 u}{\partial x^2} +
\frac{\partial^2 u}{\partial y^2} +
\frac{\partial^2 u}{\partial z^2} = 0
\]
是著名的偏微分方程，这里写下的是三维空间中的形式。
该方程的解称为[[调和函数]]。

```terms
偏微分方程:
  en: partial differential equation (PDE)
  fr: équation aux dérivées partielles (EDP)
  de: partielle Differentialgleichung (PDG)
```
