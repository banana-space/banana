---
title: 紧开拓扑
categories: [一般拓扑]
---

[[拓扑空间]] $X, Y$ 间所有[[连续映射]]的集合 $\mathsf{Top} (X, Y)$
上带有一种自然的拓扑，称为**紧开拓扑**。
其最重要的性质是，
当 $Y$ [[局部紧空间|局部紧]]且 [[Hausdorff 空间|Hausdorff]] 时，
自然的映射
\[
\begin{aligned}
  \mathsf{Top} (X \times Y, Z) \ & \longrightarrow \
  \mathsf{Top} (X, \mathsf{Top} (Y, Z)), \\
  f(-, -) \ & \longmapsto \
  (x \mapsto f (x, -))
\end{aligned}
\]
是[[一一对应]]。
也就是说，此时 $\mathsf{Top} (Y, Z)$ 是范畴 $\mathsf{Top}$
中的[[幂对象]]。

## 定义

::: definition [紧开拓扑]
设 $X, Y$ 是[[拓扑空间]]，
记 $\mathsf{Top} (X, Y)$ 为 $X$ 到 $Y$ 的所有[[连续映射]]的集合。
该集合上的**紧开拓扑**是所有开集
\[
M_{K, U} = \{ f \in \mathsf{Top} (X, Y) \mid f (K) \subset U \}
\]
生成的拓扑，其中 $K \subset X$ 取遍所有[[紧集]]，
$U \subset Y$ 取遍所有[[开集]]。
确切地说，紧开拓扑是以这族集合为[[拓扑亚基]]的拓扑。
:::

## 性质

::: proposition [复合]
设 $X, Y, Z$ 是[[拓扑空间]]，
其中 $Y$ 是[[局部紧空间|局部紧]] [[Hausdorff 空间]]。
则复合映射
\[
\begin{aligned}
  \mathsf{Top} (Y, Z) \times \mathsf{Top} (X, Y) \ & \longrightarrow \
  \mathsf{Top} (X, Z), \\
  (f, g) \ & \longmapsto \
  f \circ g
\end{aligned}
\]
是[[连续映射]]，其中每个映射空间都使用紧开拓扑。
:::

::: proposition [乘积–指数伴随]
设 $X, Y, Z$ 是[[拓扑空间]]，
其中 $Y$ 是[[局部紧空间|局部紧]] [[Hausdorff 空间]]。
则自然的映射
\[
\begin{aligned}
  \mathsf{Top} (X \times Y, Z) \ & \longrightarrow \
  \mathsf{Top} (X, \mathsf{Top} (Y, Z)), \\
  f(-, -) \ & \longmapsto \
  (x \mapsto f (x, -))
\end{aligned}
\]
是[[一一对应]]，其中 $\mathsf{Top} (Y, Z)$ 带有紧开拓扑。
:::

```terms
紧开拓扑:
  en: compact-open topology
  fr: topologie compacte-ouverte :f
  de: Kompakt-Offen-Topologie :f
```
