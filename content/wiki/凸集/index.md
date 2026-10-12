---
title: 凸集
categories: [凸分析]
notices:
  - name: 问题
    items:
      - 定义“严格凸集”中的条件似乎应只对 $x \neq y$ 要求；对 $x = y$ 也要求时，条件推出 $C$ 是开集。
---

**凸集**是[[实数|实]][[向量空间]]中看起来“没有凹陷”的子集。
严格来说，这一性质是指，该集合中任意两[[点]]间的[[线段]]都完全处于该集合内。

## 定义

::: definition [凸集] {@thm:定义}
称实向量空间 $V$ 的[[子集]] $C$ 为**凸集**，
如其满足以下条件：

- 对任意 $x, y \in C$ 及 $\lambda \in [0, 1]$，都有
  \[
  \lambda x + (1 - \lambda) y \in C.
  \]

:::

::: definition [严格凸集]
称 $\mathbb{R}$ 上[[拓扑向量空间]] $V$ 的[[子集]] $C$ 为**严格凸集**，
如其满足以下条件：

- 对任意 $x, y \in C$ 及 $\lambda \in \mathopen{]} 0, 1 \mathclose{[}$，
  都有
  \[
  \lambda x + (1 - \lambda) y \in C^\circ,
  \]
  其中 $C^\circ$ 为 $C$ 的[[内部]]。

:::

## 性质

- 下列变换可以从凸集构造凸集：

  - [[仿射变换]]、[[透视变换]]将凸集变换到凸集。

  - 凸集的[[内部]]是凸集。任意一族凸集的[[交集|交]]是凸集。

- 对凸集 $C$，若 $x_1,x_2,\cdots,x_n\in C$，
  及 $a_1,a_2,\cdots,a_n \in \mathbb{R}_{\geq 0}$，满足 $\sum_{i=1}^n a_i=1$，
  则[[凸组合]]
  \[
  \sum_{i=1}^n a_i x_i \in C.
  \]

- 非空凸集都是[[星形集]]，
  从而[[可缩空间|可缩]]，从而[[连通空间|连通]]。

## 例子

::: example
任何实线性空间中，[[空集]]和全空间都是凸集。所有[[仿射子空间]]也都是凸集。
:::

::: example
$\mathbb{R}$ 中的凸集只有[[空集]]和[[区间]]（无论闭或开、有限或无限）。
:::

::: example
[[凸多边形]]是 $\mathbb{R}^2$ 中的凸集；
[[凸多面体]]是 $\mathbb{R}^3$ 中的凸集。
:::

::: example
任何子集的[[凸包]]都是凸集。
:::

::: example [正算子]
设 $H$ 是有限维复[[内积空间]]，
记 $\operatorname{Herm}(H)$ 为 $H$ 上自伴算子构成的实向量空间。
其中的[[正算子]]构成凸集
\[
\operatorname{Pos}(H)
=
\left\{
A\in\operatorname{Herm}(H)
\;\middle|\;
\langle v,Av\rangle\geq0
\text{ 对所有 }v\in H
\right\}.
\]

事实上，若 $A,B$ 是正算子且 $0\leq t\leq1$，
则 $(1-t)A+tB$ 仍然自伴，并且
\[
\langle v,((1-t)A+tB)v\rangle
=
(1-t)\langle v,Av\rangle
+t\langle v,Bv\rangle
\geq0.
\]
因此 $(1-t)A+tB$ 仍然是正算子。

更一般地，对任意非负实数 $a,b$，
$aA+bB$ 都是正算子，
所以 $\operatorname{Pos}(H)$ 实际上是[[凸锥]]。
:::

::: example [密度算子]
设 $H$ 是非零有限维复内积空间。
$H$ 上的[[密度算子]]构成凸集
\[
\mathcal D(H)
=
\left\{
\rho\in\operatorname{Pos}(H)
\;\middle|\;
\operatorname{tr}(\rho)=1
\right\}.
\]

这是因为正性在凸组合下保持，
而迹的线性性保证
\[
\operatorname{tr}((1-t)\rho+t\sigma)
=
(1-t)\operatorname{tr}(\rho)
+t\operatorname{tr}(\sigma)
=1.
\]
几何上，密度算子集合是正算子锥
与仿射超平面 $\operatorname{tr}(A)=1$ 的交。
:::

```terms
凸集:
  en: convex set
  de: konvexe Menge :f
  fr: ensemble convexe :m
  la: copia convexa :f
  grc: κυρτὸν σύνολον :n
```
