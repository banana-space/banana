---
title: 模层
categories: [层论]
navboxes: [层论, 代数几何]
---

[[环化空间]] $(X, \mathcal{O}_X)$ 上的**模层**，
也称为 $\mathcal{O}_X$-**模**，
是指 $X$ 上的 [[Abel 层]]，
并带有 $\mathcal{O}_X$ 的作用。
也就是说，可以用 $X$ 上的函数（即 $\mathcal{O}_X$ 的[[截面]]）
来乘以模层的截面，而得到模层的截面。
例如，在[[代数几何]]、[[微分几何]]等学科中，
空间 $X$ 上某个[[向量丛]]的截面构成的层都是 $X$ 上的模层，
因为可以用 $X$ 上的函数乘以向量丛的截面，而得到该向量丛的截面。
因此，模层也可以视为某种推广的向量丛。

## 定义

::: definition [模预层]
设 $X$ 是[[拓扑空间]]或[[景]]，
$\mathcal{O}_X$ 是 $X$ 上的[[交换环]][[预层]]。
则 $\mathcal{O}_X$-**模预层**由以下信息组成：

- $X$ 上的 [[Abel 群]][[预层]] $\mathcal{E}$。

- $X$ 上集合预层的态射
  \[
  \mathcal{O}_X \times \mathcal{E}
  \longrightarrow \mathcal{E},
  \]
  使得对每个[[开集]] $U \subset X$，映射
  $\mathcal{O}_X (U) \times \mathcal{E} (U) \to \mathcal{E} (U)$
  都使得 $\mathcal{E} (U)$ 成为 $\mathcal{O}_X (U)$-[[模]]。

$\mathcal{O}_X$-模预层 $\mathcal{E}, \mathcal{F}$ 间的**态射**
是指 Abel 预层的态射 $f \colon \mathcal{E} \to \mathcal{F}$，
使得有集合预层的[[交换图]]
\[
\begin{tikzcd}
  \mathcal{O}_X \times \mathcal{E} \ar[d, "\mathbb{1} \times f"'] \ar[r]
  & \mathcal{E} \ar[d, "f"]
  \\ \mathcal{O}_X \times \mathcal{F} \ar[r]
  & \mathcal{F} \rlap{ ,}
\end{tikzcd}
\]
其中水平的箭头是模预层的结构中的映射。
:::

类似地，也可以对非交换环预层
定义**左模预层**、**右模预层**。

::: definition [模层]
设 $X$ 是[[拓扑空间]]或[[景]]，
$\mathcal{O}_X$ 是 $X$ 上的[[交换环]][[层]]。
则 $\mathcal{O}_X$-**模层**是指
$\mathcal{O}_X$-模预层 $\mathcal{E}$，
它作为 Abel 群预层也是 [[Abel 层]]。

此时，也直接称 $\mathcal{E}$ 是[[环化空间]]或[[环化景]]
$(X, \mathcal{O}_X)$ 上的**模层**。

模层间的态射就是相应模预层间的态射。
:::

类似地，也可以对非交换环层
定义**左模层**、**右模层**。

```terms
模层:
  en: sheaf of modules
  fr: faisceau de modules :m
  de: Modulgarbe :f
  ja: 加<か>群<ぐん>の層<そう>
  ko: 가군층 (加群層)
```
