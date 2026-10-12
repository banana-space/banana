---
title: 箭头范畴
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，[[范畴]] $\mathcal{C}$
的**箭头范畴**是如下的构造的范畴 $\mathcal{C}^I$：

- [[对象]]：$\mathcal{C}$ 中的“箭头”，即 $\mathcal{C}$ 中形如
  \[
  x \overset{f}{\longrightarrow} y
  \]
  的[[态射]]。

- 态射：由 $x \overset{f}{\longrightarrow} y$
  到 $x' \overset{f'}{\longrightarrow} y'$ 的态射是形如
  \[
  \begin{tikzcd}
    x \ar[r, "f"] \ar[d] & y \ar[d] \\
    x' \ar[r, "f'"] & y'
  \end{tikzcd}
  \]
  的[[交换图]]。

等价地说，箭头范畴 $\mathcal{C}^I$ 也是从范畴
$I = (\bullet \to \bullet)$ 到 $\mathcal{C}$ 的[[函子范畴]]。

## 定义

::: definition [箭头范畴]
设 $\mathcal{C}$ 为[[范畴]]。
定义其**箭头范畴**为[[函子范畴]]
\[
\mathcal{C}^I = \mathsf{Fun} (I, \mathcal{C}),
\]
其中 $I = (\bullet \to \bullet)$
为只有两个对象、一个非恒同态射的范畴。
:::

等价地，箭头范畴也可以用引言中的方式定义。

::: definition
设 $\mathcal{C}^I$ 为范畴 $\mathcal{C}$ 的箭头范畴。定义两个[[函子]]：

- $\operatorname{dom} \colon \mathcal{C}^I \to \mathcal{C}$
  将箭头 $x \overset{f}{\longrightarrow} y$ 映射到 $x$。

- $\operatorname{cod} \colon \mathcal{C}^I \to \mathcal{C}$
  将箭头 $x \overset{f}{\longrightarrow} y$ 映射到 $y$。

:::

## 性质

- $\operatorname{dom}$ 是[[纤维范畴]]，其纤维为 $\mathcal{C}$ 中的[[仰范畴]]。
  $\operatorname{cod}$ 是[[异纤维范畴]]，其纤维为 $\mathcal{C}$ 中的[[俯范畴]]。

- 当 $\mathcal{C}$ 具有[[拉回 (范畴论)|拉回]]时，
  $\operatorname{cod}$ 是纤维范畴。
  当 $\mathcal{C}$ 具有[[推出]]时，
  $\operatorname{dom}$ 是异纤维范畴。

```terms
箭头范畴:
  en: arrow category
```
