---
title: 测度
aliases: [概率测度]
categories: [测度论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [测度论]
---

**测度**是[[测度论]]的研究对象。
[[集合]]上的测度测量其[[子集]]的大小，
这里大小可以指[[长度]]、[[面积]]、[[体积]]等概念。
子集的大小为一个[[数]]，称为该子集的**测度**。
通常，并非所有子集都可测量大小。
可以测量大小的子集称为[[可测集]]，它们构成一个 [[$\sigma$-代数]]。

带有测度的集合称为[[测度空间]]。

## 定义

::: definition [可测空间] {@可测空间}
**[[可测空间]]** 指二元组 $(X, \mathcal{A})$，
其中 $X$ 为[[集合]]，
$\mathcal{A}$ 为 $X$ 上的 [[$\sigma$-代数]]。

此时，$\mathcal{A}$ 的元素称为 $X$ 的 **[[可测集]]**。
:::

::: definition [测度] {@测度}
可测空间（@可测空间）$(X, \mathcal{A})$
上的**测度**指[[函数]]
\[
\begin{aligned}
  \mu \colon \mathcal{A} & \to \mathbb{R}_{\geq 0} \cup \{ \infty \}, \\
  E & \mapsto \mu (E),
\end{aligned}
\]
满足以下性质：

- $\mu (\varnothing) = 0$。

- （**可数可加性**）
  若 $E_1, E_2, \dotsc \in \mathcal{A}$
  是两两不交的集合，则
  \[
  \mu \biggl( \bigcup_{n=1}^\infty E_n \biggr)
  = \sum_{n=1}^\infty \mu (E_n).
  \]

:::

::: remark [有限性]
在 @测度 中，

- 如果 $\mu(X) < \infty$，就说 $\mu$ 是**有限测度**。

- 如果 $X$ 能够表示为 $\mathcal{A}$ 中可数多个测度有限的子集之并，即
  \[
  X =\bigcup_{n=1}^{\infty} B_{n}, \quad
  B_{n} \in \mathcal{A}, \quad
  \mu (B_{n}) < \infty ,
  \]
  那么就称 $\mu$ 是 **$\sigma$-有限测度**。

- 如果 $\mu(X) = 1$，就说 $\mu$ 是**概率测度**。

- 如果 $X$ 为[[拓扑空间]]，$\mu$ 为其 [[Borel 集]]上的测度，
  且对于任何[[紧集]] $K$ 都有 $\mu(K) < \infty$，则称 $\mu$ 为 **Radon 测度**。

:::

## 例子

- **[[计数测度]]** 测量集合的元素个数。
  在任何集合 $X$ 上均可定义计数测度，
  所有子集 $E \subset X$ 均为可测集，
  且 $\mu (E) = |E|$ 等于 $E$ 的元素个数。

- $\mathbb{R}^n$ 上的 **[[Lebesgue 测度]]**
  测量集合的 $n$ 维体积，
  其中 $\mathcal{A}$ 由所有 [[Lebesgue 可测集]]构成。
  例如，当 $n = 1, 2, 3$ 时，
  相应的测度分别测量集合的[[长度]]、[[面积]]、[[体积]]。

## 性质

```terms
测度:
  en: measure
  de: Maß :n
  fr: mesure :f
  grc: μέτρον :n
  la: mensura :f
```
