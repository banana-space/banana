---
title: 连续可微映射
aliases: [连续可微函数]
categories: [实分析]
navboxes: [微积分学]
---

**连续可微映射**是指 [[Euclid 空间]]或[[流形]]之间的映射，
它的各[[偏导数]]都是[[连续映射]]。

## 定义

::: definition [Euclid 空间上的连续可微映射] {@def-cp-map-euclidean-space}
设 $U \subset \mathbb{R}^m$ 和 $V \subset \mathbb{R}^n$ 是[[开集]]，
$f \colon U \to V$ 是一个[[映射]]。

- 如果 $f$ 是[[连续映射]]，
  就称 $f$ 是 **$0$ 次连续可微**映射，或 **$C^0$ 映射**。

- 对 $p = 1, 2, \dotsc$，
  如果 $f$ 具有所有的 $p$ 阶[[偏导数]]，
  且这些偏导数都连续，
  就称 $f$ 是 **$p$ 次连续可微**映射，或 **$C^p$ 映射**。

- 如果对所有的 $p = 1, 2, \dotsc,$
  映射 $f$ 都是 $C^p$ 映射，
  就称 $f$ 是**光滑**映射，或 **$C^{\infty}$ 映射**。

- 如果 $f$ 在每点附近都能写成收敛的 [[Taylor 级数]]，
  就称 $f$ 是**解析**映射，或 **$C^{\omega}$ 映射**。

不加修饰的“**连续可微映射**”
通常指 $1$ 次连续可微映射，即 $C^1$ 映射。

对 $p = 0, 1, 2, \dotsc, \infty, \omega$，
所有 $U$ 到 $V$ 的 $C^p$ 映射的集合通常记为 $C^p (U, V)$。
:::

::: definition [流形上的连续可微映射]
设 $X, Y$ 是 $C^{q}$ [[流形]]，其中 $q = 0, 1, 2, \dotsc, \infty, \omega$。
设 $f \colon X \to Y$ 是一个[[映射]]。
设 $p \in \{ 0, 1, 2, \dotsc, \infty, \omega \}$，
并且 $p \leq q$，这里我们认为 $\infty < \omega$。

映射 $f$ 称为一个 **$C^p$ 映射**，
如果 $f$ 关于 $X, Y$ 各自的 $C^q$ 坐标图册的坐标表示是
Euclid 空间之间的 $C^p$ 映射
（@def-cp-map-euclidean-space）。

所有 $X$ 到 $Y$ 的 $C^p$ 映射的集合通常记为 $C^p (X, Y)$。
:::
