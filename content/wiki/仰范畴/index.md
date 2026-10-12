---
title: 仰范畴
aliases: [余切片范畴, Undercategory, Under category]
categories: [范畴论]
navboxes: [范畴论]
---

**仰范畴**（也称为**余切片范畴**）
是[[范畴]]中从某个[[对象]]出发的所有[[态射]]构成的范畴。
范畴 $\mathcal{C}$ 于对象 $x$ 下的仰范畴通常记为
$\mathcal{C}_{x/}$ 或 $^{x/} \mathcal{C}$。

与仰范畴[[对偶]]的概念是[[俯范畴]]。

## 定义

::: definition [仰范畴]
设 $\mathcal{C}$ 是[[范畴]]，$x \in \mathcal{C}$ 是[[对象]]。
则 $\mathcal{C}$ 于 $x$ 下的**仰范畴** $\mathcal{C}_{x/}$ 定义如下：

- 其对象为 $\mathcal{C}$ 中态射
  $x \xrightarrow{f} y$。

- 从 $x \xrightarrow{f} y$
  到 $x \xrightarrow{f'} y'$ 的态射为 $y \xrightarrow{g} y'$，
  使得 $g \circ f = f'$：
  \[
  \begin{tikzcd}[column sep = {3em,between origins}]
    & x \ar[dl, "f"'] \ar[dr, "f'"] \\
    y \ar[rr, "g"] && y' \rlap{ .}
  \end{tikzcd}
  \]

:::

::: remark
仰范畴是[[逗号范畴]]的特例。
:::

## 例子

- 若 $\varnothing \in \mathcal{C}$ 为[[始对象]]，
  则有[[范畴等价]] $\mathcal{C}_{\varnothing/} \simeq \mathcal{C}$。

- 若 $* \in \mathcal{C}$ 为[[终对象]]，
  则 $\mathcal{C}_{*/}$ 称为 $\mathcal{C}$ 的[[带点对象]]的范畴。

- 在[[交换环范畴]] $\mathsf{CRing}$ 中，
  仰范畴 $\mathsf{CRing}_{A/}$
  [[范畴等价|等价]]于[[交换代数 (代数结构)|交换 $A$-代数]]的范畴
  $A \text{-} \mathsf{CAlg}$。

- 在[[域范畴]] $\mathsf{Field}$ 中，
  仰范畴 $\mathsf{Field}_{k/}$
  就是 $k$ 的所有[[域扩张]]的范畴。
  特别地，$\mathsf{Field}_{\mathbb{Q}/}$ 是所有[[特征 (代数)|特征]] $0$ 域的范畴；
  $\mathsf{Field}_{\mathbb{F}_p/}$ 是所有特征 $p$ 域的范畴，其中 $p$ 是[[素数]]。

## 性质

见[[俯范畴]]。

```terms
仰范畴:
  en: under category
```
