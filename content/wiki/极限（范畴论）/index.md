---
title: 极限（范畴论）
categories: [范畴论]
navboxes: [范畴论]
---

<disambiguation>
关于其他含义，请参见[[极限]]。
</disambiguation>

**极限**是[[范畴论]]中的一种[[万有构造]]。
给定[[范畴]] $\mathcal{C}$ 及其中一个[[图表]]，例如
\[
K = \left( \begin{tikzcd}[row sep=small, column sep=small]
  & x \ar[d] \\ y \ar[r] & z
\end{tikzcd} \right),
\]
该图表的极限是一个对象 $k \in \mathcal{C}$，
使得对任何其它对象 $w \in \mathcal{C}$，都有[[一一对应]]
\[
\{ w \text{ 到 } k \text{ 的映射} \} \simeq
\{ w \text{ 到 } K \text{ 的映射} \},
\]
这里，$w$ 到 $K$ 的映射是指 $\mathcal{C}$ 中形如
\[
\begin{tikzcd}[row sep=tiny, column sep=tiny]
  && x \ar[dr]
  \\ w \ar[urr] \ar[rrr] \ar[drr]
  & \quad
  && z
  \\ && y \ar[ur]
\end{tikzcd}
\]
的[[交换图]]。给定任何上述图表，
都能找到唯一的映射 $w \to k$，使得由 $w$ 出发的所有箭头都可以分解经过该映射：
\[
\begin{tikzcd}[row sep=tiny, column sep=tiny]
  &&& x \ar[dr]
  \\ w \ar[urrr] \ar[rr, description, "\exists !"] \ar[drrr]
  & {\ } & k \ar[ur] \ar[dr] \ar[rr]
  && z
  \\ &&& y \ar[ur]
\end{tikzcd}
\]

上面这种形状的极限称为[[拉回 (范畴论)|拉回]]。
除此之外，我们也可以考虑各种不同的极限。例如，若
\[
K = \bigl( \ x \quad y \ \bigr),
\]
也就是一个没有箭头的图表，则其极限就是范畴中的[[积 (范畴论)|积]] $x \times y$。
若 $K$ 是空图表，则其极限就是范畴中的[[终对象]]。

并不是在任何范畴中，所有极限都存在。
其中极限都存在的范畴称为[[完备范畴]]。
例如，[[集合范畴]]、[[拓扑空间范畴]]等等都是完备范畴。
也就是说，可以在这些范畴中取任意的极限。

与极限[[对偶]]的概念是[[余极限]]。

## 定义

::: definition [极限] {@极限}
设 $\mathcal{C}$ 是[[范畴]]，$J$ 是[[小范畴]]。
设 $K \colon J \to \mathcal{C}$ 是[[函子]]，
我们将其视为 $\mathcal{C}$ 中的“$J$ 形图表”。

则 $K$ 的**极限**，如果存在，是指以下信息：

- 对象 $x \in \mathcal{C}$。

- 对每个 $i \in J$，有一个态射 $p_i \colon x \to K (i)$，
  有时称为**投影**。

满足以下条件：

- 对任何 $i, j \in J$ 及 $a \in J (i, j)$，
  都有交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    & K (i) \ar[dd, "K (a)"]
    \\ x \ar[ur, "p_i"] \ar[dr, "p_j"']
    \\ & K (j) \rlap{ .}
  \end{tikzcd}
  \]

并且满足以下万有性质：

- 对任何 $x' \in \mathcal{C}$，
  若给定一族态射 $p'_i \colon x' \to K (i)$，
  并对任何如上所述的 $i, j, a$，都满足交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    & K (i) \ar[dd, "K (a)"]
    \\ x' \ar[ur, "p'_i"] \ar[dr, "p'_j"']
    \\ & K (j) \rlap{ .}
  \end{tikzcd}
  \]
  则存在唯一的态射 $f \colon x' \to x$，
  使得对任意 $i \in J$，都有交换图
  \[
  \begin{tikzcd}[row sep=1ex]
    && K (i)
    \\ x' \ar[urr, "p'_i"] \ar[r, "f"']
    & x \ar[ur, "p_i"'] \rlap{ .}
  \end{tikzcd}
  \]

此时，常常直接将对象 $x$ 称为 $K$ 的极限，并记为 $\lim K$。
:::

::: remark
上述定义可以等价叙述如下：

- 记 $\mathsf{Fun} (J, \mathcal{C})$ 为[[函子范畴]]。
  则函子 $K \colon J \to \mathcal{C}$ 的**极限**是[[逗号范畴]]
  \[
  \mathcal{C}
  \underset{\mathsf{Fun} (J, \mathcal{C})}{\vec{\times}}
  {*}
  \]
  的[[终对象]]。
  这里 $\mathcal{C} \to \mathsf{Fun} (J, \mathcal{C})$
  的函子是将 $\mathcal{C}$ 的对象映到相应的[[常值函子]]；
  ${*} \to \mathsf{Fun} (J, \mathcal{C})$ 的函子映到 $K$。
:::

## 例子

我们沿用 @极限 的记号。

- 空图表的极限是范畴的[[终对象]]。

- 离散图表（指没有箭头的图表）的极限就是范畴中的[[积 (范畴论)|积]]。

- 若 $J$ 有[[始对象]]，则 $J$ 形图表的极限就是其始对象的取值。

- 形如 $x \rightrightarrows y$ 的图表的极限称为[[等子]]。

- 形如 $x \to z \gets y$ 的图表的极限称为[[拉回 (范畴论)|拉回]]。

- 若 $J$ 是[[有向集]]，则 $J$ 形图表的极限称为[[反向极限]]。
  例如，形如 $\cdots \to x_2 \to x_1$ 的图表的极限就属于这一类极限。
  此时，也记该极限为
  \[
  \mathop{\underset{\textstyle\longleftarrow}{\lim}} x_i \, .
  \]

```terms
极限:
  en: limit
  de: Limes :m
  fr: limite :f
```
