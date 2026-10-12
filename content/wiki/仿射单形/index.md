---
title: 仿射单形
categories: [初等几何]
---

**仿射单形**是 [[Euclid 空间]]的一类子集，
是[[单形]]的概念在 Euclid 空间中的实现。
例如，Euclid 空间中的[[三角形]]是 $2$ 维的仿射单形，
[[四面体]]是 $3$ 维的仿射单形，等等。

对给定的 $n$，所有 $n$ 维仿射单形都[[同胚]]于 $n$ 维[[单形]]。

## 定义

::: definition [仿射单形]
设 $0 \leq m \leq n$ 为[[自然数]]。
在 [[Euclid 空间]] $\mathbb{R}^n$ 中，
设 $x_0, \dotsc, x_m \in \mathbb{R}^n$ 构成[[仿射无关点组]]。
则这些点张成的 $m$ 维**仿射单形**就是指这些点的[[凸包]]，
也就是集合
\[
\Set{\sum_{i=0}^m a_i x_i |
a_0, \dotsc, a_m \geq 0, \text{ 且 } \sum_{i=0}^m a_i =1}
\]

该仿射单形中，任意一点都可以唯一地由参数 $a_0,a_1,\cdots,a_m$ 表示，
这称为该点的**重心坐标**。

由 $\set{x_0,x_1,\cdots,x_m}$
的非空子集张成的单形称为该单形的**面**。
:::

## 性质

- 若同一仿射单形同时由 $\set{x_1,x_2,\cdots,x_n}$ 和 $\set{y_1,y_2,\cdots,y_n}$ 张成，
  那么这两组点集相等。

## 例子

在 Euclid 空间中，

- $0$ 维仿射单形为[[点]]。

- $1$ 维仿射单形为[[线段]]。

- $2$ 维仿射单形为[[三角形]]。

- $3$ 维仿射单形为[[四面体]]。

```terms
仿射单形:
  en: affine simplex
  de: affines Simplex :n
  fr: simplexe affine :m
重心坐标:
  en: barycentric coordinates
  de: Baryzentrische Koordinaten :f
  fr: coordonnées barycentriques :f
  la: coordinatae barycentricae :f
```
