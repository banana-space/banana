---
title: 复流形
categories: [复几何]
---

**复流形**是由一些 $\mathbb{C}^n$ 的[[开集]]
沿着[[全纯映射]]粘起来，而得到的[[流形]]。

研究复流形的学科称为[[复几何]]。

## 定义

::: definition [复结构]
设 $X$ 是 $2n$ 维[[流形|拓扑流形]]。
记 $D \subset \mathbb{C}^n$ 为单位[[多圆盘]]。

- $X$ 的**复坐标卡**是指一个开子集 $U \subset X$，
  带有[[同胚]]映射 $\varphi \colon D \simeq U$。

- $X$ 的**复坐标图册**是由一族复坐标卡
  $\{ \varphi_i \colon D \simeq U_i \}_{i \in I}$
  构成的 $X$ 的[[开覆盖]]。

- 在复坐标图册 $\{ U_i \}_{i \in I}$ 中，对 $i, j \in I$，
  从第 $i$ 个坐标卡到第 $j$ 个坐标卡的**转移映射**是同胚映射
  \[
  \varphi_j^{-1} \circ \varphi_i
  \colon \varphi_i^{-1} (U_i \cap U_j)
  \simeq \varphi_j^{-1} (U_i \cap U_j).
  \]
  这是 $D$ 的两个子集之间的映射。

- 一个复坐标图册称为**相容**的，
  如果其中所有的转移映射都是[[全纯映射]]。

- $X$ 的一个**复结构**是指
  $X$ 的一个相容的复坐标图册，
  并且它是**极大**的：
  在图册中任意加入一个不同的复坐标卡，它都会变成不相容的。

:::

::: definition [复流形]
设 $n$ 是[[自然数]]。
$n$ 维**复流形**是指带有复结构的 $2n$ 维拓扑流形。
:::

::: remark
**复流形**也常定义为带有相容的复坐标图册的流形。
这一定义与上述定义等价，
因为每个相容的复坐标图册都能唯一地扩充为一个复结构。
:::

## 例子

- $\mathbb{C}^n$ 的任何[[开子集]]都是 $n$ 维复流形。

- **[[复射影空间]]** $\mathbb{C} \mathrm{P}^n$
  是 $n$ 维复流形。

- 任何[[光滑簇|光滑]]复[[代数簇]]都是复流形。

```terms
复流形:
  en: complex manifold
  fr: variété complexe :f
  de: komplexe Mannigfaltigkeit :f
  grc: μιγαδικὴ πολλαπλούτης :f
  la: multiplex complexus :n
```
