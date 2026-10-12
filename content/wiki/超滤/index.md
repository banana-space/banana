---
title: 超滤
categories: [集合论, 一般拓扑]
---

**超滤**是指[[极大]]的[[滤子]]，
即一个滤子 $\mathscr{U}$ 使包含 $\mathscr{U}$ 的真滤子只有 $\mathscr{U}$ 本身。
超滤也可看成二值有限可加[[测度]]，在超滤里的子集测度为 $1$，其余集合测度为 $0$。
给定[[拓扑空间]]上的超滤构成一拓扑空间，称为该空间的[[Stone–Čech 紧化]]。
超滤在 [[Ramsey 理论]]中亦是一强力工具。

## 定义

::: definition
集合 $X$ 上的**超滤**是指其上的一个真滤子 $\mathscr{U}$，
使包含 $\mathscr{U}$ 的真滤子只有 $\mathscr{U}$ 本身。
展开滤子的定义，这就是说 $\mathscr{U}$ 是 $X$ 的子集族，满足

- 若 $A,B\in\mathscr{U}$，则 $A\cap B\in\mathscr{U}$；

- 若 $A\in\mathscr{U}$，$B\supseteq A$，则 $B\in\mathscr{U}$；

- $\varnothing\notin\mathscr{U}$；

且如子集族 $\mathscr{V}\supseteq\mathscr{U}$ 也满足以上条件，则 $\mathscr{V}=\mathscr{U}$。
:::

以下引理给出超滤的一个等价定义。

::: lemma {@equiv-defn}
集合 $X$ 上的滤子 $\mathscr{F}$ 是超滤当且仅当对于任何子集 $A \subseteq X$，
$A$ 和 $X \setminus A$ 中恰一个属于 $\mathscr{F}$。
:::

::: proof
若 $\mathscr{F}$ 是超滤，那么对 $A \subseteq X$，不能有 $A$ 和 $X \setminus A$
都在 $\mathscr{F}$ 中，否则它们的交集 $\varnothing$ 也在 $\mathscr{F}$ 中，
这与 $\mathscr{F}$ 是真滤子矛盾。
下面假设 $A$ 和 $X \setminus A$ 都不在 $\mathscr{F}$ 中。那么考虑由 $\mathscr{F}$ 和 $A$ 生成的滤子
\[
\mathscr{F}' = \{B \mid \exists F \in \mathscr{F},B \supseteq F \cap A\}.
\]
容易验证 $\mathscr{F}'$ 是滤子，且 $A \in \mathscr{F}'$。
如果 $\varnothing \in \mathscr{F}'$，则存在 $F \in \mathscr{F}$ 使
$F \cap A = \varnothing$，于是 $F \subseteq X \setminus A$，这与
$X \setminus A \notin \mathscr{F}$ 矛盾。
所以 $\mathscr{F}'$ 是严格包含 $\mathscr{F}$ 的真滤子，这与假设矛盾。
于是 $A$ 和 $X \setminus A$ 中恰一个属于 $\mathscr{F}$。

现在假设 $\mathscr{F}$ 是真滤子，满足对任意子集 $A \subseteq X$，
$A$ 和 $X \setminus A$ 中恰一个属于 $\mathscr{F}$，
则若真滤子 $\mathscr{F}'$ 是 $\mathscr{F}$ 的加细，$\mathscr{F}' \ne \mathscr{F}$，
设 $A \in \mathscr{F}' \setminus \mathscr{F}$，
于是由假设 $X \setminus A \in \mathscr{F} \subseteq \mathscr{F}'$，
$\varnothing = A \cap (X \setminus A) \in \mathscr{F}'$。
这与 $\mathscr{F}'$ 是真滤子矛盾。于是 $\mathscr{F}$ 是超滤。
:::

::: corollary
集合 $X$ 上的超滤 $\mathscr{U}$ 给出二值有限可加测度
$\mu \colon \mathcal{P}(X) \to \{0, 1\}$，
其中 $\mu(A) = 1$ 当且仅当 $A \in \mathscr{U}$。
:::

## 例子

::: example [主超滤]
对 $a\in X$，包含 $a$ 的 $X$ 的全体子集构成一超滤，
称为 $a$ 处的**主超滤**，记作 $\mathscr{U}_a$。
:::

不用[[选择公理]]，这些就是我们能构造的所有超滤。
以下用选择公理证明每个真滤子都有超滤包含之，从而构造非主超滤。

::: theorem [[[超滤定理]]]
设 $\mathscr{F}$ 是集合 $X$ 上的真滤子。则存在 $X$ 上超滤 $\mathscr{U}\supseteq\mathscr{F}$。
:::

::: proof
对集合
$$
\{\mathscr{G}\mid\mathscr{G}\ 是\ X\ 上的真滤子,\,\mathscr{G}\supseteq\mathscr{F}\}
$$
的包含偏序用 [[Zorn 引理]]，取出极大元，此即所求的 $\mathscr{U}$。
:::

::: corollary
若集合 $X$ 无限，则其上有非主超滤。
:::

::: proof
对余有限滤子
\[
\mathscr{F} = \{A \subseteq X \mid X \setminus A\ 有限\}
\]
用超滤定理，取超滤 $\mathscr{U}\supseteq\mathscr{F}$。
如 $a\in X$ 使得 $\mathscr{U}$ 为 $a$ 处主超滤，则
$\{a\} \in \mathscr{U}$，$X \setminus \{a\} \in \mathscr{F} \subseteq \mathscr{U}$，
故二者之交 $\varnothing \in \mathscr{U}$ 矛盾！故 $\mathscr{U}$ 不是主超滤。
:::

## 在 Ramsey 理论中的应用

::: definition
对集合 $X$ 上超滤 $\mathscr{U}$，记 $\forall_U x : P$ 表示
$\{x \in X : P\} \in U$。
:::

这样定义的全称量词满足
\[
\begin{aligned}
  \forall_U x : (P \land Q) &\iff
    (\forall_U x : P) \land (\forall_U x : Q),\\
  \forall_U x : (P \lor Q) &\iff
    (\forall_U x : P) \lor (\forall_U x : Q),\\
  \forall_U x : \lnot P &\iff
    \lnot \forall_U x : P.
\end{aligned}
\]
作为代价，它会失去交换律：$\forall_U x \forall_U y$
和 $\forall_U y \forall_U x$ 并不等价。

::: theorem [Ramsey 定理]
对无穷多个顶点上的[[图]] $G$ 的边 $k$-染色，一定有无穷大的同色[[完全图|完全]]子图。
:::

::: proof
选取 $G$ 的顶点集上的非主超滤 $\mathscr{U}$。考虑 $k$ 个逻辑命题
\[
P_i \coloneqq \forall_U x \forall_U y : (x, y)\text{ 边染为第 }i\text{ 种颜色}.
\]
由上面的逻辑法则，$P_i$ 中恰一个为真（这里用到 $\mathscr{U}$ 非主）。设 $P_i$ 是真的。
归纳地找一列顶点 $x_1,x_2,\ldots$ 使它们之间边均为第 $i$ 种颜色。
假设 $x_1,x_2,\ldots,x_n$ 已经找到。找 $x_{n+1}$ 满足
\[
\begin{aligned}
  \forall_U y : (x_{n+1},y)&\text{ 边染为第 }i\text{ 种颜色}\\
  (x_1,x_{n+1})&\text{ 边染为第 }i\text{ 种颜色}\\
  (x_2,x_{n+1})&\text{ 边染为第 }i\text{ 种颜色}\\
  &\vdots\\
  (x_n,x_{n+1})&\text{ 边染为第 }i\text{ 种颜色}\\
\end{aligned}
\]
每个约束均被一个 $U$ 中集合的每个元素满足，所以总是存在一个 $x_{n+1}$
同时满足它们（由 $U$ 对交封闭）。
:::

```terms
超滤:
  en: ultrafilter
```
