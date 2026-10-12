---
title: 内范畴
aliases: [群胚对象, 内部群胚, 内部函子, 内部范畴, 内群胚]
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “例子”一节需要扩充。
navboxes: [范畴论]
---

[[范畴]] $\mathcal{C}$ 中的**内范畴**是指一个类似范畴的结构，
但其对象、态射构成的空间都是 $\mathcal{C}$ 中的对象。
例如，[[集合范畴]]中的内范畴就是[[小范畴]]；
[[Lie 群胚]]可以看成[[光滑流形]]范畴中的内群胚。

内范畴、内群胚的概念有时也称为**范畴对象**、**群胚对象**。

## 定义

### 内范畴

::: definition [内范畴] {@thm:内范畴}
设 $\mathcal{C}$ 为具有[[纤维积]]的[[范畴]]。
$\mathcal{C}$ 中的**内范畴**是六元组
$X = (X_0, X_1, s, t, e, m)$，其中

- $X_0, X_1$ 是 $\mathcal{C}$ 中对象，
  分别代表 $X$ 的[[对象]]和[[态射]]构成的空间。

- $s, t \colon X_1 \to X_0$ 是 $\mathcal{C}$ 中态射，
  直观是将态射映到其起点和终点。

- $e \colon X_0 \to X_1$ 是 $\mathcal{C}$ 中态射，
  直观是将对象映到其[[恒同态射]]。

- $m \colon X_1 \times_{s, \, X_0, \, t} X_1 \to X_1$
  是 $\mathcal{C}$ 中态射，
  刻画态射的[[复合]]，
  其中 $X_1 \times_{s, \, X_0, \, t} X_1$ 是以下的 $\mathcal{C}$ 中[[纤维积]]：
  \[
  \begin{tikzcd}
    X_1 \times_{s, \, X_0, \, t} X_1
    \ar[r, "p_2"] \ar[d, "p_1"'] \ar[dr, pos=.2, phantom, "\ulcorner"] &
    X_1 \ar[d, "t"] \\
    X_1 \ar[r, "s"'] & X_0 \rlap{ .}
  \end{tikzcd}
  \]

它们满足以下交换图表，它们也就是正常的范畴应该满足的性质。

- 恒同态射是从自身到自身的：
  \[
  \begin{tikzcd}[row sep=small]
    & X_1 \ar[dr, "s"] \\
    X_0 \ar[ur, "e"] \ar[dr, "e"'] \ar[rr, equals] && X_0 \\
    & X_1 \rlap{ .} \ar[ur, "t"']
  \end{tikzcd}
  \]

- 复合态射应该有正确的起点和终点：
  \[
  \begin{tikzcd}
    X_1 \times_{X_0} X_1 \ar[r, "m"] \ar[d, "p_1"'] &
    X_1 \ar[d, "t"] \\
    X_1 \ar[r, "t"] & X_0 \rlap{ ,}
  \end{tikzcd}
  \hspace{2em}
  \begin{tikzcd}
    X_1 \times_{X_0} X_1 \ar[r, "m"] \ar[d, "p_2"'] &
    X_1 \ar[d, "s"] \\
    X_1 \ar[r, "s"] & X_0 \rlap{ ,}
  \end{tikzcd}
  \]
  其中 $X_1 \times_{X_0} X_1$
  是 $X_1 \times_{s, \, X_0, \, t} X_1$ 的简写。

- 复合满足[[结合律]]：
  \[
  \begin{tikzcd}
    X_1 \times_{X_0} X_1 \times_{X_0} X_1 \ar[r, "{(m, \mathbb{1})}"] \ar[d, "{(\mathbb{1}, m)}"'] &
    X_1 \times_{X_0} X_1 \ar[d, "m"] \\
    X_1 \times_{X_0} X_1 \ar[r, "m"] & X_1 \rlap{ .}
  \end{tikzcd}
  \]

- 复合满足[[单位律]]：
  \[
  \begin{tikzcd}
    X_0 \times_{X_0} X_1 \ar[r, "{(e, \mathbb{1})}"] \ar[dr, equals] &
    X_1 \times_{X_0} X_1 \ar[d, "m"] &
    X_1 \times_{X_0} X_0 \ar[l, "{(\mathbb{1}, e)}"'] \ar[dl, equals] \\
    & X_1 \rlap{ .}
  \end{tikzcd}
  \]

:::

### 内群胚

内群胚是[[群胚]]的推广，是态射都可逆的内范畴。

::: definition [内群胚]
设 $\mathcal{C}$ 为具有[[纤维积]]的[[范畴]]。
$\mathcal{C}$ 中的**内群胚**是七元组
$X = (X_0, X_1, s, t, e, m, i)$，其中

- $(X_0, X_1, s, t, e, m)$
  是 $\mathcal{C}$ 中的内范畴（@thm:内范畴）。

- $i \colon X_1 \to X_1$ 是 $\mathcal{C}$ 中态射，
  代表将态射取[[逆态射]]的操作。

它们满足以下交换图表。

- 逆态射应该有正确的起点和终点：
  \[
  \begin{tikzcd}[row sep=small]
    & X_0 \\
    X_1 \ar[ur, "s"] \ar[dr, "t"'] \ar[rr, "i"] &&
    X_1 \ar[ul, "t"'] \ar[dl, "s"] \\
    & X_0 \rlap{ .}
  \end{tikzcd}
  \]

- 逆态射与原来态射复合等于恒同态射：
  \[
  \begin{tikzcd}
    X_1 \ar[dd, "\Delta_t"'] \ar[r, "s"] &
    X_0 \ar[d, "e"] &
    X_1 \ar[dd, "\Delta_s"] \ar[l, "t"'] \\
    & X_1 \\
    X_1 \times_{t, \, X_0, \, t} X_1 \ar[r, "{(i, \mathbb{1})}"] &
    X_1 \times_{s, \, X_0, \, t} X_1 \ar[u, "m"'] &
    X_1 \times_{s, \, X_0, \, s} X_1 \ar[l, "{(\mathbb{1}, i)}"']
    \rlap{ ,}
  \end{tikzcd}
  \]
  其中 $\Delta_s$ 和 $\Delta_t$ 是相应的[[对角态射]]。

:::

### 内函子

内函子是内范畴之间的[[函子]]。

::: definition [内函子]
设 $\mathcal{C}$ 为具有[[纤维积]]的[[范畴]]，
设 $X = (X_0, X_1, s_X, t_X, e_X, m_X)$ 和
$Y = (Y_0, Y_1, s_Y, t_Y, e_Y, m_Y)$ 是
$\mathcal{C}$ 中的两个内范畴（@thm:内范畴）。
则从 $X$ 到 $Y$ 的**内函子**是二元组
$F = (F_0, F_1)$，其中
$F_0 \colon X_0 \to Y_0$ 和
$F_1 \colon X_1 \to Y_1$
是 $\mathcal{C}$ 中两个态射，
它们保持内范畴的四种结构映射：
\[
\begin{tikzcd}
  X_1 \ar[d, "s_X"'] \ar[r, "F_1"] & Y_1 \ar[d, "s_Y"] \\
  X_0 \ar[r, "F_0"] & Y_0 \rlap{ ,}
\end{tikzcd}
\hspace{2em}
\begin{tikzcd}
  X_1 \ar[d, "t_X"'] \ar[r, "F_1"] & Y_1 \ar[d, "t_Y"] \\
  X_0 \ar[r, "F_0"] & Y_0 \rlap{ ,}
\end{tikzcd}
\]
\[
\begin{tikzcd}
  X_0 \ar[d, "e_X"'] \ar[r, "F_0"] & Y_0 \ar[d, "e_Y"] \\
  X_1 \ar[r, "F_1"] & Y_1 \rlap{ ,}
\end{tikzcd}
\hspace{2em}
\begin{tikzcd}
  X_1 \times_{X_0} X_1 \ar[d, "m_X"'] \ar[r, "{(F_1, F_1)}"] & Y_1 \times_{Y_0} Y_1 \ar[d, "m_Y"] \\
  X_1 \ar[r, "F_1"] & Y_1 \rlap{ .}
\end{tikzcd}
\]
:::

## 例子

```terms
内范畴:
  en: internal category
  de: interne Kategorie :f
  fr: catégorie interne :f
  grc: ἐσωτερικὴ κατηγορία :f
  la: categoria interna :f
内群胚:
  en: internal groupoid
  de: internes Gruppoid :n
  fr: groupoïde interne :m
  grc: ἐσωτερικὸν ὁμαδοειδές :n
  la: catervoides internum :n
内函子:
  en: internal functor
  de: interner Funktor :m
  fr: foncteur interne :m
  grc: ἐσωτερικὸς συνατήτης :m
  la: functor internus :m
```
