---
title: 余极限
categories: [范畴论]
navboxes: [范畴论]
---

**余极限**是[[范畴论]]中的一种[[万有构造]]，
是[[极限 (范畴论)|极限]]的对偶。
给定[[范畴]] $\mathcal{C}$ 及其中一个[[图表]]，例如
\[
K = \left( \begin{tikzcd}[row sep=small, column sep=small]
  x \ar[r] \ar[d] & y \\ z
\end{tikzcd} \right),
\]
该图表的余极限是一个对象 $k \in \mathcal{C}$，
使得对任何其它对象 $w \in \mathcal{C}$，都有[[一一对应]]
\[
\{ K \text{ 到 } w \text{ 的映射} \} \simeq
\{ k \text{ 到 } w \text{ 的映射} \},
\]
这里，$K$ 到 $w$ 的映射是指 $\mathcal{C}$ 中形如
\[
\begin{tikzcd}[row sep=tiny, column sep=tiny]
  & y \ar[drr]
  \\ x \ar[ur] \ar[dr] \ar[rrr]
  && \quad & w
  \\ & z \ar[urr]
\end{tikzcd}
\]
的[[交换图]]。给定任何上述图表，
都能找到唯一的映射 $k \to w$，使得指向 $w$ 的所有箭头都可以分解经过该映射：
\[
\begin{tikzcd}[row sep=tiny, column sep=tiny]
  & y \ar[drrr] \ar[dr]
  \\ x \ar[ur] \ar[dr] \ar[rr]
  && k \ar[rr, description, "\exists !"] & {\ } & w
  \\ & z \ar[urrr] \ar[ur]
\end{tikzcd}
\]

上面这种形状的余极限称为[[推出]]。
除此之外，我们也可以考虑各种不同的余极限。例如，若
\[
K = \bigl( \ x \quad y \ \bigr),
\]
也就是一个没有箭头的图表，则其余极限就是范畴中的[[余积]] $x \sqcup y$。
若 $K$ 是空图表，则其余极限就是范畴中的[[始对象]]。

并不是在任何范畴中，所有余极限都存在。
其中余极限都存在的范畴称为[[余完备范畴]]。
例如，[[集合范畴]]、[[拓扑空间范畴]]等等都是余完备范畴。
也就是说，可以在这些范畴中取任意的余极限。

## 定义

::: definition [余极限] {@余极限}
设 $\mathcal{C}$ 是[[范畴]]，$J$ 是[[小范畴]]。
设 $K \colon J \to \mathcal{C}$ 是[[函子]]，
我们将其视为 $\mathcal{C}$ 中的“$J$ 形图表”。

则 $K$ 的**余极限**，如果存在，是指以下信息：

- 对象 $x \in \mathcal{C}$。

- 对每个 $i \in J$，有一个态射 $k_i \colon K (i) \to x$，
  有时称为**含入**。

满足以下条件：

- 对任何 $i, j \in J$ 及 $a \in J (i, j)$，
  都有交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    K (i) \ar[dd, "K (a)"'] \ar[dr, "k_i"]
    \\ & x
    \\ K (j) \ar[ur, "k_j"'] \rlap{ .}
  \end{tikzcd}
  \]

并且满足以下万有性质：

- 对任何 $x' \in \mathcal{C}$，
  若给定一族态射 $k'_i \colon K (i) \to x'$，
  并对任何如上所述的 $i, j, a$，都满足交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    K (i) \ar[dd, "K (a)"'] \ar[dr, "k'_i"]
    \\ & x'
    \\ K (j) \ar[ur, "k'_j"'] \rlap{ ,}
  \end{tikzcd}
  \]
  则存在唯一的态射 $f \colon x \to x'$，
  使得对任意 $i \in J$，都有交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    K (i) \ar[drr, "k'_i"] \ar[dr, "k_i"']
    \\ & x \ar[r, "f"'] & x' \rlap{ .}
  \end{tikzcd}
  \]

此时，常常直接将对象 $x$ 称为 $K$ 的余极限，并记为 $\operatorname{colim} K$。
:::

::: remark
上述定义可以等价叙述如下：

- 记 $\mathsf{Fun} (J, \mathcal{C})$ 为[[函子范畴]]。
  则函子 $K \colon J \to \mathcal{C}$ 的**余极限**是[[逗号范畴]]
  \[
  {*}
  \underset{\mathsf{Fun} (J, \mathcal{C})}{\rightthreetimes}
  \mathcal{C}
  \]
  的[[始对象]]。
  这里 $\mathcal{C} \to \mathsf{Fun} (J, \mathcal{C})$
  的函子是将 $\mathcal{C}$ 的对象映到相应的[[常值函子]]；
  ${*} \to \mathsf{Fun} (J, \mathcal{C})$ 的函子映到 $K$。

:::

## 例子

我们沿用 @余极限 的记号。

- 空图表的余极限是范畴的[[始对象]]。

- 离散图表（指没有箭头的图表）的余极限就是范畴中的[[余积]]。

- 若 $J$ 有[[终对象]]，则 $J$ 形图表的余极限就是其终对象的取值。

- 形如 $x \rightrightarrows y$ 的图表的余极限称为[[余等子]]。

- 形如 $x \gets z \to y$ 的图表的余极限称为[[推出]]。

- 若 $J$ 是[[有向集]]，则 $J$ 形图表的余极限称为[[正向极限]]。
  例如，形如 $x_1 \to x_2 \to \cdots$ 的图表的余极限就属于这一类余极限。
  此时，也记该余极限为
  \[
  \mathop{\underset{\textstyle\longrightarrow}{\lim}} x_i \, .
  \]

```terms
余极限:
  en: colimit
  de: Kolimes :m
  fr: colimite :f
```
