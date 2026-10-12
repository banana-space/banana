---
title: Kähler 流形
aliases: [Kahler 流形, Kähler 度量, Kähler 结构]
categories: [复几何, 辛几何, Riemann 几何]
notices:
  - name: 问题
    items:
      - “例子”“性质”各节需要扩充。
navboxes: [复几何]
---

**Kähler 流形**是具有相容的
[[复流形|复结构]]、
[[辛流形|辛结构]]、
[[Riemann 流形|Riemann 结构]]的[[光滑流形]]，
也常常被视为具有额外结构
（即 **Kähler 度量**）的[[复流形]]。

Kähler 流形与[[代数几何]]关系密切，
因为任何[[光滑簇|光滑]]复[[射影簇]]都是 Kähler 流形。
这也提供了一大类 Kähler 流形的例子。
另一方面，Kähler 流形因具有 [[Hodge 理论]]而有良好的几何性质。
这些因素使 Kähler 流形成为[[几何学]]的重要研究对象。

研究 Kähler 流形的数学分支称为 **Kähler 几何**。

## 定义

::: definition [Kähler 流形]
**Kähler 流形**是四元组 $(X, J, \omega, g)$，其中

- $X$ 是 $2n$ 维[[光滑流形]]。

- $J$ 是 $X$ 上的可积[[近复结构]]。
  也就是说，$(X, J)$ 是[[复流形]]。

- $\omega$ 是 $X$ 上的[[闭形式|闭]][[辛形式]]。
  也就是说，$(X, \omega)$ 是[[辛流形]]。
  辛形式 $\omega$ 称为 **Kähler 形式**。

- $g$ 是 $X$ 上的 [[Riemann 度量]]。
  也就是说，$(X, g)$ 是 [[Riemann 流形]]。

它们满足以下相容条件：

- $g (u, v) = \omega (u, J v)$。

在无歧义时，也常常直接称 $X$ 为 Kähler 流形。
:::

::: remark [等价定义]
上述定义常常重新叙述如下：

- **Kähler 流形**是 [[Hermite 流形]] $(X, h)$，
  其中 $X$ 是[[复流形]]，$h$ 是 [[Hermite 度量]]，
  称为 **Kähler 度量**，
  使得辛形式
  \[
  \omega = -\operatorname{Im} h
  \]
  是[[闭形式]]，即满足 $d \omega = 0$。
  此时，相应的 Riemann 度量由 $g = \operatorname{Re} h$ 给出。

因此，Kähler 流形可以看成是带有度量的复流形，
也就是 [[Riemann 流形]]的复流形版本。
这里的额外条件 $d \omega = 0$
可以赋予 Kähler 流形 [[Hodge 理论]]，
从而得出丰富的几何信息。
:::

## 例子

## 性质

```terms
Kähler 流形:
  en: Kähler manifold
  fr: variété kählérienne :f
  de: Kähler-Mannigfaltigkeit :f
```
