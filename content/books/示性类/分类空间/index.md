---
title: 分类空间
---

示性类的理论可以从多个观点出发而建立。在本节中，我们从分类空间的观点开始。
从拓扑的角度看，这种观点是最简洁、最本质的。
但从几何的角度看，这种观点有时难以应用到实际的计算中。
因此，在几节之后，我们会从另一种几何的观点出发，来重新讨论流形上的示性类理论。

每个拓扑群 $G$ 都有一个**分类空间**，记为 $\mathrm{B} G$。
这是一个拓扑空间，借助它，我们就能知道任何空间 $X$ 上的 $G$-主丛的所有同构类。
通过这个空间的信息，我们能给出主丛的一些拓扑不变量，这就是示性类。

## 带结构的纤维丛

我们从一些基本的定义开始。

::: definition
拓扑空间 $B$ 上的**纤维丛**（fibre bundle）
是一个映射
\[
p \colon E \to B,
\]
它满足以下条件。

- （**局部平凡性**）
  对每个 $b \in B$，存在 $b$ 的邻域 $U$，
  使得有交换图
  \[
  \begin{tikzcd}[column sep={4em,between origins}]
    p^{-1}(U) \ar[rr, "\varphi", "\simeq"'] \ar[dr, "p"'] &&
    U \times F \ar[dl, "\operatorname{pr}_1"] \\
    & U \rlap{\ ,}
  \end{tikzcd}
  \]
  其中 $F = p^{-1}(b)$ 是映射 $p$ 的纤维，$\varphi$ 是同胚。

特别地，$B$ 的同一连通分支上的所有纤维都同胚。
:::

当我们提到 $B$ 上的纤维丛时，
我们总是假定取好了 $B$ 一个开覆盖 $\{ U_\alpha \}$，
使得局部平凡性在每个开集上成立，
并且选好了上面的交换图中的映射
\[
\varphi_\alpha \colon p^{-1}(U_\alpha) \simeq U_\alpha \times F_\alpha.
\]
对于 $b \in U_\alpha \cap U_\beta$，
以上信息给出了纤维 $F = p^{-1}(b)$ 的自同胚
\[
\varphi_\beta^{-1} \circ \varphi_\alpha \colon F \simeq F.
\]
这个自同胚称为**转移映射**（transition map）。

::: definition
设 $B$ 是拓扑空间，记 $\mathbb{K}$ 为 $\mathbb{R}, \mathbb{C}, \mathbb{H}$ 之一。
$B$ 上的 $\mathbb{K}$-**向量丛**（vector bundle）是一个纤维丛
\[
p \colon E \to B,
\]
其纤维都是 $\mathbb{K}$-线性空间，
且转移映射是线性映射。
:::

::: definition
设 $G$ 是拓扑群，$B$ 是拓扑空间。
$B$ 上的 $G$-**主丛**（principal bundle）是一个纤维丛
\[
p \colon E \to B,
\]
其中 $E$ 带有一个保持纤维的右 $G$-作用，
使得每个纤维作为 $G$-空间同构于 $G$。
:::

为了叙述方便，我们将这一类定义统一起来。

::: definition
设 $\textsf{C}$ 是群胚，带有函子 $\textsf{C} \to \textsf{Top}$。
设 $B$ 是拓扑空间。$B$ 上的 $\textsf{C}$-**丛** 是一个纤维丛
\[
p \colon E \to B,
\]
其每个纤维来自一个 $\textsf{C}$ 的对象，其转移映射来自 $\textsf{C}$ 中相应对象间的映射。
:::

这一定义描述了具有额外结构的纤维丛。
我们可以得到 $B$ 上所有 $\textsf{C}$-丛构成的范畴，记为
\[
\textsf{Bund}_{\textsf{C}} (B),
\]
其中的态射是保持纤维的连续映射，使得所有纤维之间的映射都来自 $\textsf{C}$ 中相应对象间的映射。
这样的态射自动是可逆的。

例如，对于向量丛和主丛而言，我们分别取了 $\textsf{C} = \{ \mathbb{K}\text{-向量空间} \}$
和 $\textsf{C} = \{ G\text{-齐性空间} \}$。
后一种情况下，我们使用记号 $\textsf{Bund}_G (B)$。

::: notation
对 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$，
记 $\textsf{Vect}(n, \mathbb{K})$ 为所有 $n$ 维 $\mathbb{K}$-向量空间构成的群胚。
对拓扑群 $G$，记 $\textsf{Hmg}(G)$ 为所有 $G$-齐性空间构成的群胚。
:::

::: proposition {@thm-1-functor}
设 $\textsf{C}, \textsf{D}$ 是满足上述条件的群胚，
$F \colon \textsf{C} \to \textsf{D}$ 是任一函子。
则对任何空间 $B$，有诱导的函子
\[
F_* \colon \textsf{Bund}_{\textsf{C}}(B) \to \textsf{Bund}_{\textsf{D}}(B),
\]
它把一个纤维为 $X$ 的丛映到一个纤维为 $F(X)$ 的丛。
并且，这一构造关于 $F$ 是函子性的。
:::

::: remark
这意味着 $\textsf{Bund}_{(-)}(B) \colon \textsf{Gpd}_{/\textsf{Top}} \to \textsf{Gpd}$
是一个 $2$-函子。
:::

::: example
在上述命题中，如果令
\[
F = \oplus \colon
\textsf{Vect}(n, \mathbb{K}) \times \textsf{Vect}(m, \mathbb{K}) \to
\textsf{Vect}(n + m, \mathbb{K}),
\]
那么对空间 $B$ 上的两个向量丛 $E_1$ 和 $E_2$，我们可以得到 $B$ 上新的向量丛
\[
E_1 \oplus E_2 = \oplus_* (E_1, E_2).
\]
类似地，我们可以定义向量丛的张量积、外代数、$\operatorname{Hom}$、对偶，等等。
:::

给定 $n$ 维 $\mathbb{K}$-向量空间 $X$，其所有**标架**（frame，
即有序基）构成的空间是一个 $\mathrm{GL}(n, \mathbb{K})$-齐性空间。
这定义了一个函子
\[
F \colon \textsf{Vect}(n, \mathbb{K}) \to \textsf{Hmg}(\mathrm{GL}(n, \mathbb{K})),
\]
它把向量空间变成对应的 $\mathrm{GL}(n, \mathbb{K})$-齐性空间。

::: definition
设 $E$ 是空间 $B$ 上的 $n$ 维 $\mathbb{K}$-向量丛，
其中 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$。
设 $F$ 是上述的标架函子。则 $\mathrm{GL}(n, \mathbb{K})$-主丛
\[
F_*(E) \to B
\]
称为 $E$ 的**标架丛**（frame bundle）。
:::

因为在 $F$ 的作用下，向量空间的自同构恰好与 $\mathrm{GL}(n, \mathbb{K})$-齐性空间的自同构相对应，
所以 $F$ 是可逆的。因此，我们有自然的同构
\[
\textsf{Bund}_{\textsf{Vect}(n, \mathbb{K})} (B)
\simeq \textsf{Bund}_{\mathrm{GL}(n, \mathbb{K})} (B).
\]
因此，在术语上，我们不再区分向量丛和它对应的 $\mathrm{GL}(n,\mathbb{K})$-主丛。

## 同伦不变性

::: definition
设 $f \colon X \to Y$ 是连续映射，$E$ 是 $Y$ 上的 $\textsf{C}$-丛。
$E$ 的**拉回**（pullback）是拓扑空间的纤维积 $f^* E = X \times_Y E$，
它是 $X$ 上的 $\textsf{C}$-丛。
:::

直观地看，向量丛 $f^* E$ 由下面的描述而决定：
它在 $x \in X$ 处的纤维“自然地”等于 $E$ 在 $f(x) \in Y$ 处的纤维。

::: definition
一个 Hausdorff 空间称为**仿紧**（paracompact）的，
如果每个开覆盖都有局部有限的开加细。
:::

仿紧性是较弱的点集拓扑性质，例如，所有流形、CW 复形都是仿紧的。
在本文中，我们只对仿紧的空间感兴趣。

::: theorem [同伦不变性]
设 $E \to Y$ 是 $\textsf{C}$-丛。
如果 $X$ 是仿紧空间，
$f_0, f_1 \colon X \to Y$ 是同伦的映射，那么有 $X$ 上的 $\textsf{C}$-丛的同构
\[
f_0^* E \simeq f_1^* E.
\]
:::

::: proof
我们只对 $X$ 紧的情况给出证明。设
\[
h \colon X \times I \to Y
\]
是 $f_0$ 到 $f_1$ 的同伦。
则 $h^* E$ 是 $X \times I$ 上的 $\textsf{C}$-丛。
我们想要构造 $X \times I$ 上两个 $\textsf{C}$-丛之间的同构
\[
\Phi \colon f_0^* E \times I \simeq h^* E.
\]

选取 $X$ 的有限开覆盖 $\{ U_i \} _{i=1} ^n$，选取 $\varepsilon > 0$，并选取
\[
0 = t_0 < t_1 < \cdots < t_r = 1,
\]
使得 $h^* E$ 在每个“方块”$U_i \times I_j$ 上是平凡丛，
其中 $I_j = I \cap (t_{j-1} - \varepsilon, t_j + \varepsilon)$。

我们对 $j$ 归纳，假设 $\Phi$ 已经在 $X \times [0, t_j]$ 上定义好了。

对每个 $i$，选取开集 $W_i \subset V_i \subset U_i$，
其中每个开集的闭包都含于下一个开集，且 $\{ W_i \}$ 仍覆盖 $X$。
由 Урысон 引理，对每个 $i$，可选取函数 $u_i \colon X \to [t_j, t_{j+1}]$，使得
\[
u_i^{-1} (t_j) = X \setminus V_i, \quad u_i^{-1} (t_{j+1}) = \overline{W_i}.
\]
对 $x \in X$，定义 $v_0 (x) = t_j$，并定义
\[
v_i (x) = \max (u_1 (x), \dotsc, u_i (x)).
\]
则有 $t_j = v_0 (x) \leq v_1 (x) \leq \cdots \leq v_n (x) = t_{j+1}$。
定义 $B_i = \{ (x, t) \mid t_j \leq t \leq v_i (x) \}$。则
\[
X \times t_j = B_0 \subset B_1 \subset \cdots \subset B_n = X \times [t_j, t_{j+1}].
\]

现在，我们对 $i$ 归纳，假设 $\Phi$ 已经在 $B_{i-1}$ 上定义好了。

由于上面的构造，$B_i \setminus B_{i-1} \subset V_i \times [t_j, t_{j+1}]$，
并且，$\overline{V_i} \times [t_j, t_{j+1}] \subset U_i \times I_j$。
对 $(e, t) \in (f_0^* E \times I)|_{B_i \setminus B_{i-1}}$，定义
\[
\Phi (e, t) = \varphi_i \bigl(x,\ t,\ \rho \circ \Phi (e, v_{i-1} (x))\bigr),
\]
其中 $x \in X$ 是 $e$ 对应的点，
$\varphi_i \colon U_i \times I_j \times F \simeq h^* E |_{U_i \times I_j}$ 是局部平凡化映射，
$F$ 表示纤维，
$\rho \colon h^* E |_{U_i \times I_j} \to F$ 是先局部平凡化，再投影到 $F$。
我们就完成了构造。请读者验证我们确实得到了 $\textsf{C}$-丛的同构。
:::

::: corollary
如果 $X$ 是可缩的仿紧空间，那么 $X$ 上的所有 $\textsf{C}$-丛都是平凡的。
:::

## 分类空间

设 $E \to B$ 是 $\textsf{C}$-丛，$X$ 是仿紧空间。
则有良好定义的映射
\[
\begin{aligned}{}
  [X, B] & \to \mathrm{Bund}_{\textsf{C}} (X) \\
  f & \mapsto f^*(E),
\end{aligned}
\]
其中 $[X, B]$ 是映射的同伦类的集合，
$\mathrm{Bund}_{\textsf{C}} (X)$ 是 $\textsf{C}$-丛的同构类的集合。

::: definition
设 $G$ 是拓扑群。一个 $G$-主丛
\[
\mathrm{E} G \to \mathrm{B} G
\]
称为**万有**（universal）的，如果对任何仿紧空间 $X$，映射
\[
\begin{aligned}{}
  [X, \mathrm{B} G] & \to \mathrm{Bund}_G (X) \\
  f & \mapsto f^*(\mathrm{E} G)
\end{aligned}
\]
是集合的同构。
此时，$\mathrm{B} G$ 称为 $G$ 的**分类空间**（classifying space）。
:::

把 $\mathrm{B} G$ 叫做分类空间的原因是，通过它，
任何仿紧空间 $X$ 上的 $G$-主丛都可以被完全分类。

我们将会看到，$\mathrm{E} G$ 是可缩的。
因此，$\mathrm{B} G$ 可以看作同伦意义下的商空间
\[
\mathrm{B} G \simeq \text{``}\ {*} / G\ \text{''}.
\]

::: example
我们会看到，任何一个全空间可缩的主丛都是万有的（@thm-1-contractible）。因此，
\[
\begin{array}{rcl}
  \mathrm{B}\mathbb{Z} \simeq & \mathbb{R} / \mathbb{Z} & \simeq S^1, \\
  \mathrm{B}\mathbb{Z}_2 \simeq & S^\infty / \mathbb{Z}_2 & \simeq \mathbb{RP}^\infty, \\
  \mathrm{B}\mathbb{R} \simeq & \mathbb{R} / \mathbb{R} & \simeq \{*\}.
\end{array}
\]
这里 $S^\infty$ 是无穷维球面，它是一个可缩的 CW 复形。
:::

::: exercise
对任意有限群 $G$，
通过 $G$ 的一个有限维自由酉表示，
给出 $G$ 在 $S^\infty \subset \mathbb{C}^\infty$ 上的一个自由作用，
从而给出 $\mathrm{B} G$ 的构造。
:::

在说明分类空间的存在性之前，我们先指出关于仿紧空间的两个事实。

::: proposition (事实) {@thm-1-paracompact}
设 $X$ 是仿紧空间，设 $\{ U_\alpha \}_{\alpha \in A}$
是 $X$ 的一个开覆盖。

- 存在从属于此覆盖的**单位分解**，
  即一族紧支连续函数
  \[
  \rho_\alpha \colon U_\alpha \to [0, 1],
  \]
  使得它们的支集局部有限，并且对任意 $x \in X$，有
  \[
  \sum_{\alpha \in A} \rho_\alpha (x) = 1.
  \]

- 存在 $\{ U_\alpha \}$ 一个开加细 $\{ V_\beta \}$，
  和 $X$ 的一个可数开覆盖 $\{ W_n \}$，
  使得每个开集 $W_n$ 都是某些开集 $V_\beta$ 的不交并。

:::

::: proof
[@munkres, 定理 41.7] 和 [@milnor-stasheff, 引理 5.9]。
:::

下面，我们通过 Milnor 给出的构造 [@milnor]，说明 $\mathrm{B} G$ 的存在性。

::: theorem
每个拓扑群 $G$ 都有一个分类空间 $\mathrm{B} G$，
并且这个构造关于 $G$ 具有函子性。
:::

::: proof
设 $\mathrm{E} G$ 是所有序列
\[
( t_1 g_1,\ t_2 g_2,\ \dotsc )
\]
的集合，其中

- 对每个 $i$，有 $t_i \in [0, 1]$，和 $g_i \in G$。

- 这些 $t_i$ 中只有有限个非零，
  且满足 $\sum_{i = 1}^{\infty} t_i = 1$。

- 对 $g, h \in G$，
  形式乘积 $0g$ 和 $0h$ 被认为是相同的。

我们赋予 $\mathrm{E} G$ 作为余极限
\[
\operatornamewithlimits{colim} _{n \to \infty} \ \bigl\{
  ( t_1 g_1, \ \dotsc, \ t_n g_n, \ 0, \ 0, \ \dotsc ) \in \mathrm{E} G
\bigr\}
\]
的余极限拓扑，这里余极限的每一项可看作
$\prod _{i=1} ^{n} (I \times G) / (0 \times G)$ 的子集。

我们定义 $G$ 在 $\mathrm{E} G$ 上的右作用如下：
\[
( t_1 g_1,\ t_2 g_2,\ \dotsc ) \cdot g
= ( t_1 (g_1 g),\ t_2 (g_2 g),\ \dotsc ).
\]
这是一个自由作用。因此，如果我们定义
\[
\mathrm{B} G = \mathrm{E} G / G,
\]
则 $\mathrm{E} G$ 是 $\mathrm{B} G$ 上的 $G$-主丛。

我们验证这个主丛是万有的。
设 $E \to B$ 是任一 $G$-主丛，其中 $B$ 是仿紧空间。
则 $B$ 有一个局部有限的开覆盖 $\{ U_\alpha \}$，
使得 $E$ 限制在每个 ${U_\alpha}$ 上都是平凡丛。
由 @thm-1-paracompact，
我们可以通过取这些 $U_\alpha$ 的子集的不交并，
把开集的个数变成至多可数。
我们记之为 $\{ U_1, U_2, \dotsc \}$。

由 @thm-1-paracompact，
我们取一组单位分解 $\{ \rho_i \colon U_i \to [0, 1] \}$，
并定义
\[
\begin{aligned}
  f \colon E & \to \mathrm{E} G, \\
  x & \mapsto ( \rho_1(x) \, g_1(x),\ \rho_2(x) \, g_2(x),\ \dotsc ),
\end{aligned}
\]
其中 $g_i(x) \in G$ 是点 $x$ 在同胚
\[
p^{-1}(U_i) \simeq U_i \times G
\]
下对应的 $G$ 方向的坐标。
这个映射和 $G$ 的作用是相容的，因此，我们得到了诱导的映射
\[
\widetilde{f} \colon B \to \mathrm{B} G,
\]
使得 $E$ 是 $\mathrm{E} G$ 沿 $\widetilde{f}$ 的拉回。

我们还需要验证，映射 $\widetilde{f}$ 的同伦类与开覆盖和单位分解的选取无关。
我们略过这个细节（读者不妨自己尝试）。这样，我们就定义了映射
\[
\operatorname{Bund}_G (B) \to [B, \mathrm{B} G],
\]
它是自然的映射 $[B, \mathrm{B} G] \to \operatorname{Bund}_G (B)$
的逆映射，从而是同构。
:::

::: remark
这里给出的 $\mathrm{E} G$ 的构造有一个几何解释。
对拓扑空间 $X,Y$，我们定义它们的**连接**（join）
为把 $X$ 的每个点和 $Y$ 的每个点连一条线段得到的空间。
准确地说，我们定义
\[
X \star Y = (X \times Y \times I)/{\sim},
\]
其中等价关系 $\sim$ 定义为
\[
(x, y_1, 0) \sim (x, y_2, 0), \quad (x_1, y, 1) \sim (x_2, y, 1).
\]

连接具有结合律，因为 $X \star Y \star Z$
就是把 $X$ 的每个点、$Y$ 的每个点和 $Z$ 的每个点连一个实心三角形得到的空间。

不难验证，我们给出的构造实际上是一个无穷的连接
\[
\mathrm{E} G \simeq G \star G \star G \star \cdots .
\]
:::

::: remark
对一般的 $\textsf{C}$-丛而言，也有分类空间的构造，
这一构造就是拓扑群胚的**几何实现**（geometric realisation）。
:::

::: exercise
验证 $\mathrm{E} G$ 是可缩的。
（这与证明 $S^\infty$ 可缩的方法相同。）
:::

对带基点的拓扑空间 $X$，
记 $\Sigma X$ 和 $\Omega X$
分别为 $X$ 的悬挂（suspension）和圈空间（loop space）。
对 Hausdorff 空间而言，它们满足伴随关系 $\Sigma \dashv \Omega$。

::: proposition
如果 $G$ 是 Hausdorff 拓扑群，那么有弱同伦等价
\[
G \simeq \Omega \mathrm{B} G.
\]
换言之，$\mathrm{B} G$ 是 $G$ 的**消圈**（delooping）。
:::

::: proof
纤维丛 $\mathrm{E} G \to \mathrm{B} G$ 诱导了 Puppe 正合列
\[
\cdots \to \Omega \mathrm{E} G \to \Omega \mathrm{B} G
\to G \to \mathrm{E} G \to \mathrm{B} G.
\]
因为 $\mathrm{E} G$ 可缩，所以 $\Omega\mathrm{E} G$ 也可缩。
因此，对任一带基点的 CW 复形 $X$，我们有
\[
[X, \Omega \mathrm{B} G] \simeq [X, G].
\]
:::

::: proposition {@thm-1-contractible}
如果 $G$ 是 Hausdorff 拓扑群，$E \to B$ 是 $G$-主丛，
且 $E$ 弱可缩，那么有弱同伦等价
\[
B \simeq \mathrm{B} G.
\]
:::

::: proof
$E$ 对应的映射 $B \to \mathrm{B} G$ 诱导了两个 $G$-主丛的 Puppe 正合列的映射。
作用函子 $[X, {-}]$，其中 $X$ 是带基点的 CW 复形，并应用五引理，得到
\[
[X, B] \simeq [X, \mathrm{B} G].
\]
:::

::: definition
一个关于 $G$-主丛的**示性类**（characteristic class）是一个上同调类
\[
c \in H^\bullet(\mathrm{B} G; R),
\]
其中 $R$ 是系数环。
对于 $G$-主丛 $E \to X$，
记 $f \colon X \to \mathrm{B} G$ 为对应的映射，定义
\[
c(E) = f^*(c) \in H^\bullet(X; R).
\]
:::

::: exercise
示性类可以如下等价地定义：一个示性类 $c$ 是一个自然变换
\[
c \colon \mathrm{Bund}_G(-) \Rightarrow H^\bullet(-; R),
\]
其中两个函子都视为从仿紧空间的范畴到 $\textsf{Set}$ 的反变函子。
:::

## 结构群的约化

设 $X$ 是仿紧空间，$\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$。
我们已经分类了 $X$ 上的向量丛：
\[
\mathrm{Bund}_{ \textsf{Vect}(n, \mathbb{K}) } (X) \simeq [X, \mathrm{B} \mathrm{GL}(n, \mathbb{K})].
\]
由线性代数中的 Gram–Schmidt 过程，
我们知道，$\mathrm{GL}(n, \mathbb{R})$ 可以形变收缩到正交群 $\mathrm{O}(n)$，
而 $\mathrm{GL}(n, \mathbb{C})$ 可以形变收缩到酉群 $\mathrm{U}(n)$。
同样的道理，$\mathrm{GL}(n, \mathbb{H})$ 可以形变收缩到**四元数酉群**
\[
\mathrm{Sp}(n) = \{ A \in \mathrm{GL}(n, \mathbb{H}) \mid A^{-1} = (A\text{ 的共轭转置}) \, \} .
\]
这里，四元数 $a + b\mathrm{i} + c\mathrm{j} + d\mathrm{k}$ 的共轭定义为
$a - b\mathrm{i} - c\mathrm{j} - d\mathrm{k}$。

::: remark
这里的 $\mathrm{Sp}(n)$ 和辛群 $\mathrm{Sp}(n, \mathbb{K})$ 不是同一个东西！它们的关系是
\[
\mathrm{Sp}(n) \simeq \mathrm{Sp}(2n, \mathbb{C}) \cap \mathrm{U}(2n).
\]
这个同构通过嵌入 $\mathbb{H} \hookrightarrow \mathrm{M}_{2 \times 2}(\mathbb{C})$ 诱导。
:::

::: proposition
如果 $f \colon G \to H$ 是拓扑群的同态，且是弱同伦等价，
那么 $\mathrm{B} f \colon \mathrm{B} G \to \mathrm{B} H$ 也是弱同伦等价。
:::

::: proof
对 $n\geq1$，我们有交换图
\[
\begin{tikzcd}[row sep=large]
  \pi_n (\mathrm{B} G)
    \ar[d, "\pi_n (\mathrm{B} f)"']
    \ar[r, "\simeq"] &
  \pi_{n-1} (\Omega \mathrm{B} G)
    \ar[d, "\pi_{n-1} (\Omega\mathrm{B} f)"']
    \ar[r, "\simeq"] &
  \pi_{n-1} (G)
    \ar[d, "\simeq", "\pi_{n-1}(f)"'] \\
  \pi_n (\mathrm{B} H)
    \ar[r, "\simeq"] &
  \pi_{n-1} (\Omega \mathrm{B} H)
    \ar[r, "\simeq"] &
  \pi_{n-1} (H) \rlap{\ .}
\end{tikzcd}
\]
因此，$\pi_n (\mathrm{B} f)$ 是同构。
而 $\mathrm{B} G, \mathrm{B} H$ 都是道路连通的，所以 $\pi_0(\mathrm{B} f)$ 也是同构。
:::

::: corollary
我们有弱同伦等价
\[
\begin{aligned}
  \mathrm{B} \mathrm{GL}(n, \mathbb{R}) & \simeq \mathrm{B} \mathrm{O}(n), \\
  \mathrm{B} \mathrm{GL}(n, \mathbb{C}) & \simeq \mathrm{B} \mathrm{U}(n), \\
  \mathrm{B} \mathrm{GL}(n, \mathbb{H}) & \simeq \mathrm{B} \mathrm{Sp}(n). \\
\end{aligned}
\]
:::

下一节，我们将说明这些弱同伦等价实际上是同伦等价。
