---
title: 俯范畴
aliases: [切片范畴, Overcategory, Over category]
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “性质”“推广”各节需要扩充。
navboxes: [范畴论]
---

**俯范畴**（也称为**切片范畴**）
是[[范畴]]中到某个[[对象]]的所有[[态射]]构成的范畴。
范畴 $\mathcal{C}$ 于对象 $x$ 上的俯范畴通常记为 $\mathcal{C}_{/x}$。

与俯范畴[[对偶]]的概念是[[仰范畴]]。

## 定义

::: definition [俯范畴]
设 $\mathcal{C}$ 是[[范畴]]，$x \in \mathcal{C}$ 是[[对象]]。
则 $\mathcal{C}$ 于 $x$ 上的**俯范畴** $\mathcal{C}_{/x}$ 定义如下：

- 其对象为 $\mathcal{C}$ 中态射
  $y \xrightarrow{f} x$。

- 从 $y \xrightarrow{f} x$
  到 $y' \xrightarrow{f'} x$ 的态射为 $y \xrightarrow{g} y'$，
  使得 $f' \circ g = f$：
  \[
  \begin{tikzcd}[column sep = {3em,between origins}]
    y \ar[rr, "g"] \ar[dr, "f"'] && y' \ar[dl, "f'"] \\
    & x \rlap{ .}
  \end{tikzcd}
  \]

:::

::: remark
俯范畴是[[逗号范畴]]的特例。
:::

## 例子

- 若 $* \in \mathcal{C}$ 为[[终对象]]，
  则有[[范畴等价]] $\mathcal{C}_{/*} \simeq \mathcal{C}$。

- 在[[概形范畴]] $\mathsf{Sch}$ 中，
  [[概形]] $S$ 上的俯范畴 $\mathsf{Sch}_{/S}$
  也称为 [[相对概形|$S$-概形]]的范畴。

## 性质

::: proposition
俯范畴中的[[积 (范畴论)|积]]对象对应原本的范畴里的[[拉回]]。
:::

## 推广

```terms
俯范畴:
  en: over category
```
