---
title: 覆叠空间
aliases: [覆叠映射, 覆叠空间理论]
categories: [纤维丛论]
navboxes: [代数拓扑]
---

<problems>
- “一般拓扑性质”“提升性质”“覆叠空间基本定理”各节需要扩充。
</problems>

**覆叠空间**是形如 $p \colon E \to B$ 的[[连续映射|映射]]，
它将[[拓扑空间]] $E$ 覆盖于 $B$ 上，可能覆盖多层，
并且在局部上是[[同胚]]。
例如，将[[实直线]] $\mathbb{R}$ 环绕于[[圆周]] $S^1$ 上的映射
\[
\begin{aligned}
  p \colon \mathbb{R} & \to S^1, \\
  t & \mapsto \mathrm{e}^{2 \pi \mathrm{i} t}
\end{aligned}
\]
是覆叠空间。

## 定义

::: definition [覆叠空间]
**覆叠空间**（或**覆叠映射**）是[[拓扑空间]]之间的[[连续映射]]
$p \colon E \to B$，满足以下性质：

- 对任何 $b \in B$，
  存在 $b$ 的邻域 $U \subset B$，
  使得[[原像]] $p^{-1} (U)$ 可以写成[[不交并]] $\coprod_{i \in I} U_i$，
  且每个 $p|_{U_i}$ 都是到 $U$ 的[[同胚]]。

除此之外，
如果每点 $b \in B$ 的原像都恰好包含 $n$ 个点，
就称该覆叠为 **$n$ 重覆叠**。
:::

## 例子

- 对任何拓扑空间 $X$，
  [[恒同映射]] $\mathbb{1}_X \colon X \to X$
  是覆叠空间。

- 对任何整数 $n \geq 0$，
  自然的映射 $S^n \to \mathbb{R} \mathrm{P}^n$
  是二重覆叠空间。

## 性质

### 一般拓扑性质

### 提升性质

### 覆叠空间基本定理

### 万有覆叠

::: definition
在覆叠映射 $p\colon E → B$ 中，若 $E$ [[单连通]]，
那么称它为**万有覆叠**。
:::

```terms
覆叠空间:
  en: covering space
  fr: revêtement :m
  de: Überlagerungsraum :m
$n$ 重覆叠:
  en: $n$-fold covering
```
