---
title: 伸展
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，[[范畴]] $\mathcal{C}$ 中的**伸展**（也称为**对应**）是指形如
\[
\begin{tikzcd}[row sep=small, column sep=small]
  & z \ar[dl, "f"'] \ar[dr, "g"] \\
  x && y
\end{tikzcd}
\]
的图表，其中 $x, y, z$ 是 $\mathcal{C}$ 中的[[对象]]，
$f, g$ 是 $\mathcal{C}$ 中的[[态射]]。

伸展可以视为[[态射]]的推广，因为若在上述图表中取 $f$ 为[[恒同态射]]，
则得到的伸展就是 $x$ 到 $y$ 的态射；
若取 $g$ 为恒同态射，则得到的伸展就是 $y$ 到 $x$ 的态射。
另外，也可以定义伸展的复合，
进而定义[[伸展范畴]]。

伸展的[[对偶]]概念是[[余伸展]]。

## 定义

::: definition [伸展]
[[范畴]] $\mathcal{C}$ 中的**伸展**是指 $\mathcal{C}$ 中形如
\[
x \overset{f}{\longleftarrow}
z \overset{g}{\longrightarrow} y
\]
的图表，也称为从 $x$ 到 $y$ 的**伸展**。
:::

## 性质

以下设 $\mathcal{C}$ 是[[范畴]]。

- 若 $\mathcal{C}$ 具有有限[[积 (范畴论)|积]]，
  则 $\mathcal{C}$ 中从 $x$ 到 $y$ 的伸展就是
  某个对象到 $x \times y$ 的态射。

- 伸展的[[余极限]]是[[推出]]。

```terms
伸展:
  en: span
  ko: 펼침
```
