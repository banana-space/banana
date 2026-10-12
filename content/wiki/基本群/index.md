---
title: 基本群
categories: [同伦论]
navboxes: [代数拓扑]
---

[[拓扑空间]] $X$ 的**基本群** $\pi_1 (X)$
是由其中所有环路的[[同伦]]类构成的[[群]]，
群的乘法定义为环路的首尾相接。

如果一个空间中，
所有环路都能连续地缩成一个点，
即同伦于[[常值映射]]，
那么这个空间的基本群是[[平凡群]]。
满足这个性质的[[道路连通空间]]叫做[[单连通空间]]。

拓扑空间的基本群是它的第 $1$ 个[[同伦群]]，
即同伦群 $\pi_n (X)$ 在 $n = 1$ 时的特例，
也是它的[[基本群胚]] $\Pi_1 (X)$ 中基点的自同构群，
或它的[[基本 ∞-群胚|基本 $\infty$-群胚]] $\Pi (X)$ 中
基点的自同构 [[∞-群|$\infty$-群]]的 $1$-[[截断]]。

## 定义

::: definition [带点拓扑空间] {@def-pointed-space}
一个**带点拓扑空间**是指一个二元组 $(X, x)$，
其中 $X$ 是[[拓扑空间]]，
$x \in X$ 是一个点，称为带点拓扑空间 $(X, x)$ 的**基点**。
:::

::: definition [环路] {@def-loop}
设 $(X, x)$ 是带点拓扑空间（@def-pointed-space）。
$X$ 中的一条基于 $x$ 的**环路**是指一条从 $x$ 到 $x$ 的[[道路]]。

换言之，一条基于 $x$ 的环路是一个[[连续映射]]
\[
\gamma \colon [0, 1] \to X,
\]
满足 $\gamma (0) = \gamma (1) = x$。
:::

::: definition [道路的拼接] {@def-concatenation}
设 $(X, x)$ 是带点拓扑空间（@def-pointed-space），
设 $\gamma_1, \gamma_2$ 是 $X$ 中的两条道路，
满足 $\gamma_1 (1) = \gamma_2 (0)$。
则它们的**拼接**是把 $\gamma_1$ 和 $\gamma_2$ 首尾相接得到的道路：
\[
\gamma_1 \cdot \gamma_2 (t) =
\begin{cases}
  \gamma_1 (2t), & 0 \leq t \leq 1/2, \\
  \gamma_2 (2t-1), & 1/2 \leq t \leq 1.
\end{cases}
\]
:::

::: definition [基本群]
设 $(X, x)$ 是带点拓扑空间（@def-pointed-space）。
它的**基本群**定义为
\[
\pi_1 (X, x) = \{
  [\gamma] \mid
  \gamma \text{\small\ 是基于 } x \text{\small\ 的环路}
\},
\]
其中 $[\gamma]$ 指环路 $\gamma$ 的[[同伦]]类，
这里同伦需要固定环路的端点。这个群的乘法定义为
\[
[\gamma_1] \cdot [\gamma_2] = [\gamma_1 \cdot \gamma_2],
\]
其中 $\gamma_1 \cdot \gamma_2$
是 $\gamma_1$ 和 $\gamma_2$ 的拼接（@def-concatenation）。

如果 $X$ 是[[道路连通空间]]，
那么选取不同基点得到的基本群都同构（@prop-path-induces-isomorphism）。
此时，我们也可以记 $\pi_1 (X) = \pi_1 (X, x)$。
:::

## 性质

### 关于道路的函子性

::: proposition {@prop-path-induces-isomorphism}
设 $X$ 是拓扑空间，
$x, y \in X$ 被一条道路 $\gamma$ 所连接。则有诱导的同构
\[
\begin{aligned}
  \gamma_* \colon \pi_1 (X, x) & \simeq \pi_1 (X, y), \\
  [\alpha] & \mapsto [\gamma^{-1} \cdot \alpha \cdot \gamma],
\end{aligned}
\]
其中 $\gamma^{-1}$ 表示 $\gamma$ 的反向道路。
:::

### 关于空间的函子性

::: proposition
$\pi_1 \colon \mathsf{Top}_* \to \mathsf{Grp}$
是从带点拓扑空间范畴到[[群范畴]]的函子。
:::

### 同伦不变性

::: proposition
基本群是拓扑空间的[[同伦不变量]]。
从而，$\pi_1$ 可以视为从同伦带点拓扑空间范畴到[[群范畴]]的函子
\[
\pi_1 \colon \mathsf{hTop}_* \to \mathsf{Grp} .
\]
:::

### 与同调的联系

<see>[[Hurewicz 定理]]</see>

::: theorem
设 $X$ 是[[道路连通空间]]。
则其基本群的 [[Abel 化]]同构于它的第一个[[奇异同调]]群：
\[
\pi_1 (X)^{\mathrm{ab}} \simeq H_1 (X; \mathbb{Z}).
\]
:::

### van Kampen 定理

<see>[[Seifert–van Kampen 定理|van Kampen 定理]]</see>

### Eckmann–Hilton 论断

<see>[[Eckmann–Hilton 论断]]</see>

::: proposition [Eckmann–Hilton 论断，基本群版本]
[[拓扑群]]的基本群是 [[Abel 群]]。
:::

```terms
基本群:
  en: fundamental group
  de: Fundamentalgruppe
  fr: groupe fondamental
  grc: θεμελιώδης ὁμάς
  la: caterva fundamentalis
```
