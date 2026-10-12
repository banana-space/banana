---
title: Hermite 流形
categories: [复几何]
---

**Hermite 流形**是具有 [[Hermite 度量]]的[[复流形]]。
通过其上的度量，我们可以讨论与之相容的联络与曲率。
相应的研究被称为**Hermite 几何**。

## 定义

::: definition [Hermite 流形]
**Hermite 流形**是二元组 $(X, h)$，其中

- $X$ 是[[复流形]]。

- $h$ 是 $X$ 上的[[Hermite 度量]]。

:::

::: remark
通过单位分解，我们可以给任何一个复流形赋予Hermite结构。
:::

## 性质

### Riemann 度量

<see>[[Hermite 度量]]</see>

Hermite 流形上存在一个自然的[[Riemann 度量]]：

::: definition [Hermite 流形的 Riemann 度量]
我们先定义$T_\mathbb{C} X$上的Hermite度量
$H\colon T_\mathbb{C} X\times \overline{T_\mathbb{C} X}\to\mathbb{C}$，它满足
\[
H(u,v)=h(u^{1,0},v^{1,0})+h(\overline{v^{0,1}},
\overline{u^{0,1}})\quad \text{对 }u,v\in T_\mathbb{C} X.
\]
将$H$限制在$T_\mathbb{R} X$上，我们便得到**由$h$诱导的Riemann 结构**
$g\colon T_\mathbb{R} X\times T_\mathbb{R} X\to  \mathbb{R}$。
:::

我们经常考虑如下的正定微分$2$-形式：

::: definition [Hermite 形式]
定义实流形$X$上的微分$2$-形式$\omega$：
\[
\omega(u,v)=g(Ju,v) \quad \text{对 }u,v\in T_\mathbb{R} X.
\]
我们通常将之称为 **Hermite 形式**。
利用 $\omega$ 与 $h$ 间简单的转化关系，我们有时用$(X,\omega)$定义 Hermite 结构。
:::

有关上述的度量的计算与性质，请参见[[Hermite 度量]]。

### 联络与曲率

<see>[[曲率 (Hermite 流形)]]</see>

Hermite 流形的黎曼结构自然地给出[[Levi-Civita 联络]]，
而[[全纯向量丛]]上的Hermite 度量又自然地给出[[陈联络]]。
这些不同的[[联络]]使得 Hermite 流形具有各不相同的[[曲率]]概念。

## 例子

::: example [单连通常曲率流形]
- $(\mathbb{CP}^n,i\partial \overline{\partial} \log(1+|z|^2))$是 Kähler 流形，
  它的曲率可表示为
  \[
  \Theta(U,\overline{V},Y,\overline{Z})=h(U,V)h(Y,Z)+h(U,Z)h(Y,V).
  \]

- $(\mathbb{C}^n,i\partial \overline{\partial} |z|^2)$是Kähler 流形，
  它的曲率可表示为
  \[
  \Theta(U,\overline{V},Y,\overline{Z})=0.
  \]

- $(\mathbb{B}^n,i\partial \overline{\partial} \log(1-|z|^2))$是 Kähler 流形，
  它的曲率可表示为
  \[
  \Theta(U,\overline{V},Y,\overline{Z})=-(h(U,V)h(Y,Z)+h(U,Z)h(Y,V)).
  \]

:::

::: remark
利用[[一致化定理]]，如果$(X,\omega)$是一完备Kähler流形且全纯双截曲率为常数，
那么它的万有覆叠定为以上三者之一。
:::

```terms
Hermite 流形:
  en: Hermitian manifold
  de: hermitesche Mannigfaltigkeit
  fr: variété hermitienne
  la: multiplex Ermitanum
```
