---
title: Seifert–van Kampen 定理
aliases: [Van Kampen 定理, Seifert-van Kampen 定理]
categories: [同伦论]
notices:
  - name: 问题
    items:
      - “陈述与证明”一节缺少两个定理的证明。
      - “例子”一节中单点并的基本群是自由积的结论似乎需要对基点加条件（例如每个 $x_i$ 在 $X_i$ 中有可缩的开邻域），否则一般不成立。
navboxes: [代数拓扑]
---

**Seifert–van Kampen 定理**，
也称为 **van Kampen 定理**，
是[[代数拓扑]]中的定理，
可以用来计算某些[[拓扑空间]]的[[基本群]]。
定理的内容大概是说，基本群的构造保持[[余极限]]。

## 陈述与证明

我们首先介绍在现代观点下，使用[[基本群胚]]叙述的定理版本。

::: theorem [Seifert–van Kampen] {@基本群胚版本}
设 $X$ 为[[拓扑空间]]，
$\mathcal{U} = (U_i)_{i \in I}$ 为 $X$ 的[[开覆盖]]，
满足 $\mathcal{U}$ 中任两个开集的[[交集|交]]仍在 $\mathcal{U}$ 中。
则 $X$ 的[[基本群胚]] $\Pi_1 (X)$ 可以写成[[群胚范畴]]中的 [[$2$-余极限]]
\[
\Pi_1 (X) \simeq
\operatornamewithlimits{colim}_{i \in I} \Pi_1 (U_i),
\]
这里，余极限图表中的映射为所有[[含入映射]] $U_j \hookrightarrow U_i$
诱导的映射 $\Pi_1 (U_j) \to \Pi_1 (U_i)$，其中 $i, j \in I$。

特别地，若开集 $U, V \subset X$ 满足 $X = U \cup V$，
则可以取 $\mathcal{U} = (U, V, U \cap V)$，
从而得到 [[$2$-推出]]图表
\[
\begin{tikzcd}
  \Pi_1(U \cap V) \ar[r]\ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"]
  & \Pi_1(U) \ar[d] \\
  \Pi_1(V) \ar[r] & \Pi_1(X) \rlap{ .}
\end{tikzcd}
\]
此时，$\Pi_1(X)$ [[范畴等价|等价]]于[[粘连群胚]]
\[
\Pi_1 (X) \simeq
\Pi_1 (U)
\underset{\Pi_1 (U \cap V)}{\sqcup}
\Pi_1 (V).
\]
:::

在计算中常用的基本群版本是 @基本群胚版本 的推论。

::: theorem [Seifert–van Kampen，基本群版本] {@基本群版本}
设 $X$ 为[[道路连通空间]]，选取基点 $x \in X$。
设 $\mathcal{U} = (U_i)_{i \in I}$ 为 $X$ 的[[开覆盖]]，
其中每个 $U_i$ 都道路连通且包含 $x$，
并且 $\mathcal{U}$ 中任两个开集的[[交集|交]]仍在 $\mathcal{U}$ 中。
则 $X$ 的[[基本群]] $\pi_1 (X, x)$ 可以写成[[群范畴]]中的[[余极限]]
\[
\pi_1 (X, x) \simeq
\operatornamewithlimits{colim}_{i \in I} \pi_1 (U_i, x),
\]
这里，余极限图表中的映射为所有[[含入映射]] $U_j \hookrightarrow U_i$
诱导的映射 $\pi_1 (U_j, x) \to \pi_1 (U_i, x)$，其中 $i, j \in I$。

特别地，若开集 $U, V \subset X$ 满足 $X = U \cup V$，
并且 $U, V$ 都道路连通且包含 $x$，
则可以取 $\mathcal{U} = (U, V, U \cap V)$，
从而得到[[群范畴]]中的[[推出]]图表
\[
\begin{tikzcd}
  \pi_1(U \cap V, x) \ar[r]\ar[d] \ar[dr, phantom, pos=.8, "\lrcorner"]
  & \pi_1(U, x) \ar[d] \\
  \pi_1(V, x) \ar[r] & \pi_1(X, x) \rlap{ .}
\end{tikzcd}
\]
此时，$\pi_1 (X, x)$ 同构于[[粘连自由积]]
\[
\pi_1 (X, x) \simeq
\pi_1 (U, x)
\underset{\pi_1 (U \cap V, x)}{*}
\pi_1 (V, x).
\]
:::

## 例子

- 由 Seifert–van Kampen 定理，一族[[带点拓扑空间]] $(X_i, x_i)_{i \in I}$
  的[[单点并]] $(X, x_0) = \bigvee_{i \in I} {} (X_i, x_i)$ 的[[基本群]]
  是各 $X_i$ 的基本群的[[自由积]]：
  \[
  \pi_1 (X, x_0) =
  \underset{i \in I}{\raisebox{-.3ex}{\LARGE$*$}} \
  \pi_1 (X_i, x_i).
  \]

## 参考文献

以下文献 §2.7 讨论了 Seifert–van Kampen 定理：

```bibliography
May1999:
  type: book
  author: 'May, J. P.'
  title: A concise course in algebraic topology
  publisher: University of Chicago Press
  year: 1999
  url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
```

```terms
Seifert–van Kampen 定理:
  en: Seifert–van Kampen theorem
  de: Satz von Seifert–van Kampen
  fr: théorème de Seifert–van Kampen
```
