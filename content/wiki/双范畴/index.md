---
title: 双范畴
categories: [高阶范畴论]
notices:
  - name: 区分
    text: '注意区分本文与 [[$2$-范畴]]。'
navboxes: [范畴论]
---

**双范畴**是[[范畴]]的一种推广，是 [[$n$ 重范畴]]当 $n = 2$ 时的特例，
也可视为带有额外结构的 [[$2$-范畴]]。
大致来说，双范畴由以下信息组成：

- 一族[[对象]]。

- 在对象 $x, y$ 之间，可以有**横向态射**
  $x \overset{f}{\longrightarrow} y$，
  也可以有**纵向态射**
  \(\ \begin{array}{c} x \\ \llap{$^g \,$} {\downarrow} \\ y \end{array}\)。
  它们都视为 [[$1$-态射]]。

- 在横向和纵向态射之间，可以有 **[[$2$-态射]]**
  \[
  \begin{tikzcd}
    x \ar[r, "f"] \ar[d, "g"']
    & y \ar[d, "g'"] \\
    z \ar[r, "f'"']
    \ar[ur, phantom, "\overset{\smash{\alpha}}{\Longrightarrow}"]
    & w \rlap{ ,}
  \end{tikzcd}
  \]
  其中 $f, f'$ 是横向态射，$g, g'$ 是纵向态射。

## 定义

::: definition [双范畴]
令 $\mathsf{Cat}$ 为[[范畴的范畴]]，
并视之为 [[$1$-范畴]]。
则**双范畴**就是 $\mathsf{Cat}$ 中的[[内范畴]]。
:::

由定义，双范畴 $\mathcal{C}$ 由以下信息组成：

- [[范畴]] $\mathcal{C}_0, \mathcal{C}_1 \in \mathsf{Cat}$，
  分别代表内范畴中的对象、态射。这里，

  - $\mathcal{C}_0$ 的对象称为 $\mathcal{C}$ 的**对象**。

  - $\mathcal{C}_0$ 的态射称为 $\mathcal{C}$ 的**纵向态射**。

  - $\mathcal{C}_1$ 的对象称为 $\mathcal{C}$ 的**横向态射**。

  - $\mathcal{C}_1$ 的态射称为 $\mathcal{C}$ 的 **$2$-态射**。

- [[函子]] $s, t \colon \mathcal{C}_1 \to \mathcal{C}_0$，
  分别指定了横向态射从哪个对象出发、到达哪个对象，
  也分别指定了 $2$-态射从哪个纵向态射出发、到达哪个纵向态射。

- 函子 $e \colon \mathcal{C}_0 \to \mathcal{C}_1$，
  指定了对象的横向恒同态射，以及纵向态射的恒同 $2$-态射。
  注意到，对象的纵向恒同态射就是 $\mathcal{C}_0$ 中的恒同态射；
  横向态射的恒同 $2$-态射就是 $\mathcal{C}_1$ 中的恒同态射。

- 函子 $m \colon \mathcal{C}_1 \times_{\mathcal{C}_0} \mathcal{C}_1 \to \mathcal{C}_1$，
  指定横向态射如何复合，
  以及 $2$-态射如何在横向复合。
  注意到，$\mathcal{C}_0$ 中的态射复合指定了纵向态射如何复合；
  $\mathcal{C}_1$ 中的态射复合指定了 $2$-态射如何在纵向复合。

```terms
双范畴:
  en: double category
```
