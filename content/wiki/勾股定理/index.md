---
title: 勾股定理
categories: [初等几何]
notices:
  - name: 问题
    items:
      - “通过纯几何”一节需要扩充。
      - “推广”一节的命题中，“沿每一条坐标轴的投影”似乎应为在各个坐标超平面上的投影（$(n-1)$ 维测度）。
---

**勾股定理**，西称 **[[Pythagoras]] 定理**，
是 [[Euclid 几何]]中的定理，
它是说[[直角三角形]]斜边长度的平方等于两条直角边长度的平方和。

## 陈述

::: theorem [勾股定理]
对 $\mathbb{R}^n$ 中的[[三角形]] $ABC$，
如果 $\angle BAC$ 是直角，则
\[
|AB|^2 + |AC|^2 = |BC|^2.
\]
其中 $|\cdot|$ 表示线段的长度。
:::

## 证明

### 通过坐标几何

通过把 $\mathbb{R}^n$ 视为内积空间，
定理由[[内积空间|内积]]是[[二次型]]立得。

::: proof
对向量 $u, v \in \mathbb{R}^n$，
如内积 $\langle u,v \rangle = 0$，则
\[
|u + v|^2 = |u|^2 + |v|^2 + 2\langle u,v \rangle
= |u|^2 + |v|^2.
\]
把三角形的顶点用坐标表示，定理即证。
:::

### 通过纯几何

## 推广

勾股定理可以推广至高维情形（即谈论高维[[测度]]），例如

::: proposition
对 $\mathbb{R}^n$ 中[[超平面]] $H$ 的开区域 $\Omega$，
它的测度的平方是它沿每一条坐标轴的投影的测度的平方和。
:::

```terms
勾股定理:
  en: Pythagorean theorem
  de: Satz des Pythagoras :m
  fr: théorème de Pythagore :m
  la: theorema Pythagorae :n
  grc: θεώρημα τοῦ Πυθαγόρου :n
```
