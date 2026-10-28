---
title: 同伦群
categories: [同伦论]
---

<problems>
- “相对同伦群”“Puppe 序列”“同伦切除”“环路空间与解环”各节需要扩充。
</problems>

[[带点拓扑空间]] $(X, x)$ 的**同伦群** $\pi_n (X, x)$
是一系列的[[群]]，它们是 $X$ 的[[同伦不变量]]，是[[基本群]]的推广：
基本群是 $S^1 \to X$ 的映射同伦类构成的群，
同伦群则是 $S^n \to X$ 的映射同伦类构成的群。

拓扑空间的第 $0$ 个同伦群 $\pi_0 (X, x)$ 并不具有群结构，只是一个[[带点集合]]，
也就是 $X$ 的所有[[道路连通分支]]的集合。
第 $1$ 个同伦群 $\pi_1 (X, x)$ 就是[[基本群]]。
当 $n \geq 2$ 时，同伦群 $\pi_n (X, x)$ 一定是 [[Abel 群]]。

## 定义

### 同伦群

::: definition [带点拓扑空间] {@def-pointed-space}
**带点拓扑空间**是指二元组 $(X, x)$，其中

- $X$ 是[[拓扑空间]]。

- $x \in X$ 是一个元素，称为**基点**。

带点拓扑空间之间的映射要求把基点映到基点。
:::

::: definition [同伦群] {@def-as-sets}
设 $(X, x)$ 是带点拓扑空间（@def-pointed-space）。
它的第 $n$ 个**同伦群**（作为集合）定义为
\[
\pi_n (X, x) = \{ f \colon (S^n, *) \to (X, x) \} / {\sim},
\]
其中 $f$ 可以是任何保持基点的[[连续映射]]，$* \in S^n$ 是一个取定的点，
$\sim$ 表示映射的保持基点的[[同伦]]。
:::

下面，对 $n \geq 1$，我们定义 $\pi_n (X, x)$ 上的群结构。

::: definition [同伦群的群结构] {@def-group-law}
设 $(X, x)$ 是带点拓扑空间（@def-pointed-space）。
设 $f, g \in \pi_n (X, x)$（@def-as-sets），其中 $n \geq 1$。
则 $f, g$ 的**乘积**定义为
\[
f \cdot g \colon
S^n \overset{q}{\longrightarrow}
S^n \vee S^n \overset{f \vee g}{\longrightarrow}
(X, x),
\]
其中 $\vee$ 表示[[单点并]]，
映射 $q$ 将 $S^n$ 的[[赤道]]映到 $S^n \vee S^n$ 的基点，
将上下半球分别保持[[定向]]、[[同胚]]地映到单点并中的两个部分
$S^n \setminus \{ * \}$。

当 $n \geq 1$ 时，这种乘法定义了 $\pi_n (X, x)$ 上的群结构。
:::

::: remark
当 $n = 0$ 时，@def-group-law 中的映射 $q$ 无法定义，
因为 $S^0$ 的赤道是 $S^{-1} = \varnothing$。
:::

### 相对同伦群

## 例子

- 拓扑空间 $X$ 的第 $0$ 个同伦群 $\pi_0 (X, x)$
  是 $X$ 的[[道路连通分支]]的集合。

- 由 [[Freudenthal 纬悬定理]]，[[球面]] $S^n$ 的第 $n$ 个同伦群是 $\pi_n (S^n) \simeq \mathbb{Z}$。
  一般来说，[[球面同伦群]]十分难计算。

## 性质

### Puppe 序列

### Whitehead 定理

<see>[[Whitehead 定理]]</see>

### 同伦切除

### Hurewicz 定理

<see>[[Hurewicz 定理]]</see>

### 环路空间与解环

```terms
同伦群:
  en: homotopy group
  de: Homotopiegruppe :f
  fr: groupe d'homotopie :m
  grc: ὁμὰς ὁμοτοπίας :f
  la: caterva homotopiae :f
```
