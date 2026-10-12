---
title: 带点拓扑空间
categories: [一般拓扑]
---

**带点拓扑空间**是[[拓扑空间]]带上其中一个选定的[[点]]。
这个简单的概念是[[代数拓扑]]中的重要工具，
例如，[[同伦群]]和[[约化同调]]、[[约化上同调]]都要在带点拓扑空间上定义；
[[稳定同伦论]]的研究对象，即[[拓扑谱]]，也是基于带点拓扑空间而定义的。

带点拓扑空间也是[[拓扑空间范畴]]中的[[带点对象]]。

## 定义

::: definition [带点拓扑空间]
**带点拓扑空间**是二元组 $(X, x)$，其中

- $X$ 是[[拓扑空间]]。

- $x \in X$ 是一个元素，称为**基点**。

:::

::: definition [带点拓扑空间范畴]
**带点拓扑空间范畴** $\mathsf{Top}_*$ 定义如下：

- 其[[对象]]为全体带点拓扑空间。

- 从 $(X, x)$ 到 $(Y, y)$ 的[[态射]]
  是[[连续映射]] $f \colon X \to Y$，
  使得 $f (x) = y$。

换言之，$\mathsf{Top}_*$ 就是[[仰范畴]] $^{*/}\mathsf{Top}$。
:::

## 性质

### 加点–遗忘伴随

自然的[[遗忘函子]] $\mathsf{Top}_* \to \mathsf{Top}$
具有左伴随，即给拓扑空间添加一个孤立的基点：
\[
\begin{aligned}
  (-)_+ \colon \mathsf{Top} & \to \mathsf{Top}_*, \\
  X & \mapsto X_+ = X \sqcup \{ * \},
\end{aligned}
\]
其中 $X_+$ 的基点是新加入的点。

### 积、余积

::: proposition
设 $\{ (X_i, x_i) \} _{i \in I}$ 是 $\mathsf{Top}_*$ 中的一族对象。

- 这族对象在 $\mathsf{Top}_*$ 中的[[积 (范畴论)|积]]就是[[积空间]]
  $\prod_{i \in I} X_i$，
  其基点为 $(x_i)_{i \in I}$。

- 这族对象在 $\mathsf{Top}_*$ 中的[[余积]]是[[单点并]]
  \[
  \bigvee_{i \in I} X_i =
  \biggl( \, \bigsqcup_{i \in I} X_i \biggr) \Big/
  (x_i \sim x_j)_{i, j \in I},
  \]
  其基点为原来基点对应的点。

:::

```terms
带点拓扑空间:
  en: pointed space
  fr: espace pointé :m
  de: punktierter Raum :m
  grc: σεσημειωμένος χῶρος :m
  la: spatium punctum :n
基点:
  en: basepoint
  fr: point de base :m
  de: Grundpunkt :m
  grc: σημεῖον βάσεως :n
  la: punctus baseos :m
```
