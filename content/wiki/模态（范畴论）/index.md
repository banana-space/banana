---
title: 模态（范畴论）
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “模态的乘积”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

在范畴论中，**模态**是一种特殊的[[分解系]]，其左右类都在[[基变换]]下封闭。

## 定义

::: definition
范畴$\mathcal{C}$上的**模态**是一个分解系
$(\mathcal{L}, \mathcal{R})$，
其左类$\mathcal{L}$在基变换下封闭。
换言之，如果$\mathcal{C}$中拉回方块
\[
\begin{tikzcd}
X' \ar[r] \ar[d, "{f'}"] \ar[dr, phantom, pos=.2, "\ulcorner"] &
X \ar[d, "{f}"] \\
Y' \ar[r] &
Y
\end{tikzcd}
\]
的右边$f$在$\mathcal{L}$中，那它的左边$f'$也在$\mathcal{L}$中。
:::

::: remark
注意每个分解系$(\mathcal{L}, \mathcal{R})$的右类$\mathcal{R}$
都在基变换下封闭。
:::

## 例子

::: example
对意象 $\mathcal{T}$（例如[[生象]]范畴 $\mathsf{Ani}$），
记

- $\mathsf{Conn}_{n+1}(\mathcal{T})$ 为 $\mathcal{T}$ 中 $(n+1)$-[[连合]]映射的类。

- $\mathsf{Trun}_n(\mathcal{T})$ 为 $\mathcal{T}$ 中 $n$-[[截断 (范畴论)|截断]]映射的类。

则$(\mathsf{Conn}_{n+1}(\mathcal{T}), \mathsf{Trun}_n(\mathcal{T}))$ 构成 $\mathcal{T}$ 上模态。
:::

## 性质

意象中的模态有许多好性质。

::: definition
设 $\mathcal{C}$ 是范畴。
我们称 $\mathcal{C}$ 中一族态射 $\mathcal{L}$
是**局部**的，如果它满足下列条件：

- 类 $\mathcal{L}$ 在基变换下封闭；

- 对态射 $f\colon X \to Y$，如果存在
  一族态射 $g_i\colon Y_i \to Y$ 使得
  $\coprod_i Y_i \to Y$ 是[[有效满射]]，
  且 $f$ 沿每个 $g_i$ 的基变换都在 $\mathcal{L}$ 中，
  那么 $f$ 本身也在 $\mathcal{L}$ 中。

:::

::: proposition
设 $\mathcal{X}$ 是意象，
$(\mathcal{L}, \mathcal{R})$ 是
$\mathcal{X}$ 上模态，则态射族 $\mathcal{L}$ 和 $\mathcal{R}$
都是局部的。
:::

::: definition
设 $\mathcal{C}$ 是范畴，
$(\mathcal{L}, \mathcal{R})$ 是
$\mathcal{C}$ 上模态。我们称
\[
\begin{tikzcd}
  T \ar[r] \ar[d] & Z \ar[d] \\
  Y \ar[r] & W
\end{tikzcd}
\]
是 $\mathcal{C}$ 中 **$\mathcal{L}$-拉回方块**，如果自然态射
$T \to Y \times_W Z$ 在左类 $\mathcal{L}$ 中。
:::

::: proposition
设 $\mathcal{X}$ 是意象，
$(\mathcal{L}, \mathcal{R})$ 是
$\mathcal{X}$ 上模态。在交换图
\[
\begin{tikzcd}
  A \ar[r] \ar[d] & B \ar[r] \ar[d] & C \ar[d] \\
  D \ar[r, "t"] & E \ar[r] & F
\end{tikzcd}
\]
中，若左侧方块和右侧方块都是 $\mathcal{L}$-拉回，
则外部方块也是 $\mathcal{L}$-拉回；
反过来，如果外部方块和左侧方块是 $\mathcal{L}$-拉回，
且 $t$ 是有效满射，则右侧方块也是 $\mathcal{L}$-拉回。
:::

## 模态的乘积

## 与类型论的关系

本页面的模态应当是[[模态 (类型论)]]的[[范畴语义]]。

```terms
模态:
  en: modality
```
