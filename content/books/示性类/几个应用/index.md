---
title: 几个应用
---

{@sect-4}

在这一节中，我们首先介绍著名的 Poincaré–Hopf 定理，
然后介绍几个运用示性类解决问题的例子。

## Poincaré–Hopf 定理

这一节的目标是证明 Poincaré–Hopf 定理，
它把向量场的零点和流形的拓扑联系起来。
这个结论的另一个形式是，
紧流形的切丛的 Euler 类就等于它的 Euler 示性数。
这也是 Euler 类命名的原因。

在本节中，所有流形都默认是光滑的。

::: theorem [Poincaré–Hopf] {@thm-4-poincare-hopf}
设系数环 $R$ 是域，设 $M$ 是 $R$-已定向的紧、连通的流形。则
\[
e (TM) = \chi (M) = [M \cap M]_{TM},
\]
其中 $\chi (M)$ 表示 $M$ 的 Euler 示性数
（这个整数看作 $M$ 的一个最高次上同调类），
$[M \cap M]_{TM}$ 表示切丛 $TM$ 中 $M$ 和自己的相交数。
:::

::: remark
相交数 $[M \cap M]_{TM}$ 可以被看作 $M$ 上的向量场的**指标**（index）。
具体地说，我们把其中一个 $M$ 看作零截面，另一个看作向量场对应的截面。
如果这两个截面横截相交，那么这个相交数就等于向量场的零点的“加权个数”。
:::

在证明之前，我们先给出几个例子。

::: corollary [毛球定理]
球面 $S^2$ 上不存在处处非零的连续向量场。
:::

我们也可以用 Euler 类来计算其它的示性类。

::: corollary

- 如果 $R$ 是特征 $2$ 域，$M$ 是紧、连通的 $n$ 维流形，则
  \[
  w_n (TM) \equiv \chi (M) \pmod{2}.
  \]

- 如果 $M$ 是紧、连通的 $n$ 维近复流形（这包括所有的复流形），则
  \[
  c_n (TM) = \chi (M).
  \]
  特别地，亏格 $g$ 的 Riemann 面的切丛的 $c_1$ 类等于 $2 - 2g$。

- 如果 $M$ 是紧、连通的 $n$ 维近四元数流形（例如 $\mathbb{H} \mathrm{P}^n$），则
  \[
  p_n (TM) = \chi (M).
  \]

:::

下面，我们开始做一些定理证明的准备工作。

::: lemma
设 $M$ 是流形。将 $M$ 通过对角映射嵌入 $M \times M$。
则 $M$ 在 $M \times M$ 中的法丛同构于切丛 $TM$。
:::

::: proof
在点 $x \in M$ 处，这个同构由
\[
\begin{aligned}
  T_x M & \to T_{(x, x)} (M \times M), \\
  v & \mapsto (v, -v)
\end{aligned}
\]
给出。
:::

::: corollary
将 $M$ 通过对角映射嵌入 $M \times M$。则
\[
\widetilde{H}^\bullet ( \mathrm{Th} (TM) ) \simeq
H^\bullet ( M \times M,\ M \times M \setminus M ).
\]
:::

通过这个同构，$TM$ 的 Thom 类对应了一个上同调类
\[
u \in H^\bullet ( M \times M,\ M \times M \setminus M ) .
\]
它称为**对角类**，
它也可以看成 $H^\bullet (M \times M)$ 的元素。

Poincaré–Hopf 定理描述了流形的 Euler 类。
由于 Euler 类的构造，
它其实就是对角类 $u$ 在子流形 $M \subset M \times M$
上的限制。我们的证明就通过研究对角类来完成。

::: remark
由 Thom 类的刻画，
如果用一个微分形式来代表对角类，
我们可以取支集在 $M$ 的一个管状邻域内，
且方向垂直于 $M$ 的一个形式。
读过 [@bott-tu] 的读者会发现，
这说明对角类是子流形 $M \subset M \times M$ 的 Poincaré 对偶。
:::

我们通过紧流形的上同调的 Poincaré 对偶，来描述对角类。

::: theorem [上同调的 Poincaré 对偶] {@thm-4-poincare-duality}
设系数环 $R$ 是域，设 $M$ 是 $R$-已定向的紧、连通的 $n$ 维流形。
取 $R$-向量空间 $H^\bullet (M;\ R)$ 的一组基
$b_1, \dotsc, b_r$，使得每个 $b_i$ 都是齐次的（即落在某个 $H^k$ 中）。则

- 存在 $H^\bullet (M;\ R)$ 的一组对偶基 $\{ b_i^* \}$，满足
  \[
  b_i \cup b_j^* = \delta_{ij} \in H^n (M;\ R),
  \]
  这里 $\delta_{ij} \in H^n (M;\ R)$ 的含义是，
  它作用在 $M$ 的基本类 $[M] \in H_n (M;\ R)$ 上等于 $\delta_{ij}$。

- 记 $|b_i| = \deg b_i$。则
  \[
  u = \sum_{i = 1}^r (-1)^{|b_i|} \, b_i \times b_i^* \in H^n (M \times M;\ R).
  \]

:::

证明这个定理之前，我们先假设它成立，证明 Poincaré–Hopf 定理。

::: proof [@thm-4-poincare-hopf 的证明]
记 $\Delta \colon M \hookrightarrow M \times M$ 是对角映射。则
\[
\begin{aligned}
  e (TM) & = \Delta^* u \\
  & = \Delta^* \biggl( {} \sum_{i = 1}^r
    (-1)^{|b_i|} \, b_i \times b_i^* \biggr) \\
  & = \sum_{i = 1}^r (-1)^{|b_i|} \, b_i \cup b_i^* \\
  & = \sum_{i = 1}^r (-1)^{|b_i|} \\
  & = \chi (M).
\end{aligned}
\]
另一方面，因为 $u$ 是子流形 $M$ 的 Poincaré 对偶，
所以 $M \cap M$ 的 Poincaré 对偶是 $u \cup u$。
在表达式 $u = \sum (-1)^{|b_i|} \, b_i \times b_i^*$
中交换 $M \times M$ 的两个因子 $M$ 的地位，
我们得到 $u = \sum b_i^* \times b_i$，
这里 $(-1)^{|b_i|}$ 消失的原因是，交换两个 $M$ 的次序之后，
奇异单形的定向（或者说，微分形式相乘的次序）不同。因此，
\[
\begin{aligned}
  u \cup u
  & = \sum_{i, j = 1}^r (-1)^{|b_i|} \,
    (b_i \times b_i^*) \cup (b_j^* \times b_j) \\
  & = \sum_{i, j = 1}^r (-1)^{|b_i| + |b_i^*| |b_j^*|} \,
    (b_i \cup b_j^*) \times (b_i^* \cup b_j) \\
  & = \sum_{i = 1}^r (-1)^{|b_i| + |b_i^*|} \,
    (b_i \cup b_i^*) \times (b_i^* \cup b_i) \\
  & = \sum_{i = 1}^r (-1)^{|b_i| + |b_i^*| + |b_i| |b_i^*|} \\
  & = \chi (M),
\end{aligned}
\]
其中最后一步通过讨论 $\dim M$ 的奇偶性得到。
:::

下面，我们来证明 @thm-4-poincare-duality。
证明的概要如下：
首先把 $u$ 写成 $\sum_{i = 1}^r b_i \times c_i$ 的形式。
通过 $u$ 的性质，我们实际上能证明，$\{ (-1)^{|b_i|} \, c_i \}$
构成 $\{ b_i \}$ 的一组对偶基。
这样，我们就在描述对角类的同时，重新证明了 Poincaré 对偶定理。

::: definition
设 $X, Y$ 是拓扑空间。我们定义**除积**（slant product）
\[
{/} \colon H^{p + q} (X \times Y) \otimes H_q (Y) \to H^p (X),
\]
定义的方法是将 $Y$ 的上同调和下同调进行配对。
具体地说，它是由奇异链复形、奇异上链复形的映射
\[
S^\bullet (X \times Y) \otimes S_\bullet (Y)
\to S^\bullet (X) \otimes S^\bullet(Y) \otimes S_\bullet (Y)
\xrightarrow{\text{配对}} S^\bullet (X)
\]
诱导的映射。
:::

由这个定义，如果 $a \in H^p (X)$，$b \in H^q (Y)$，$c \in H_q (Y)$，
那么
\[
(a \times b) / c = \langle b, c \rangle \cdot a.
\]

::: lemma
设 $[M] \in H_n (M)$ 是 $M$ 的基本类。则
\[
u / [M] = 1 \ \in \ H^0 (M),
\]
其中 $u \in H^n (M \times M)$ 是之前定义的对角类。
:::

::: proof
只需对一个 $x \in M$，证明 $(u/[M])\big|_x = 1 \in H^0 (x)$。我们有交换图
\[
\begin{tikzcd}
  H^n (M \times M) \ar[d, "i_x^*"] \ar[r, "/ \lbrack M \rbrack"] & H^0 (M) \ar[d] \\
  H^n (x \times M) \ar[r, "/ \lbrack M \rbrack"] & H^0 (x) \rlap{ ,}
\end{tikzcd}
\]
其中 $i_x \colon x \times M \hookrightarrow M \times M$ 是含入映射。
对角类 $u$ 在图表的左上角，它在右下角的像是 $u/[M]$（先右后下），
也是 $(1 \otimes i_x^* u) / [M] = \langle i_x^* u, [M] \rangle$（先下后右）。

另一方面，我们有四个拓扑空间对构成的交换图
\[
\begin{tikzcd}
  ( x \times M,\ \emptyset ) \ar[d, hook, "i_x"] \ar[r] &
  ( x \times M,\ x \times M \setminus x \times x ) \ar[d, hook, "j_x"] \\
  ( M \times M,\ \emptyset ) \ar[r] &
  ( M \times M,\ M \times M \setminus M ) \rlap{ ,}
\end{tikzcd}
\]
其中右下角的 $M$ 是 $M \times M$ 中的对角线。
我们将 $u$ 视为 $H^n (M \times M,\ M \times M \setminus M)$ 的元素，则
\[
\langle i_x^* u, [M] \rangle = \langle j_x^* u, [M] \rangle = 1,
\]
其中第二个 $[M]$ 是 $H^n (M,\ M \setminus x)$ 的元素，
第一个等号是由于上面的交换图，
第二个等号是因为 $j_x^* u$ 本质上是 Thom 类在纤维上的限制。
:::

::: lemma
设 $a \in H^\bullet (M)$ 是任一上同调类。则在 $M \times M$ 的上同调环中，
\[
(a \otimes 1) \cup u = (1 \otimes a) \cup u.
\]
:::

::: proof
取对角线 $M \subset M \times M$ 的管状邻域 $N$，
并记 $i \colon N \hookrightarrow M \times M$ 为含入映射。
通过选取合适的 $N$，我们可以保证向两个分量的投影
\[
p_1 |_N , \ p_2 |_N \colon N \to M
\]
是同伦的（请读者验证）。这说明
\[
i^* (a \otimes 1) = i^* (1 \otimes a).
\]
通过交换图
\[
\begin{tikzcd}
  H^\bullet (M \times M) \ar[d, "\cup u"] \ar[r, "i^*"] &
  H^\bullet (N) \ar[d, "\cup u"] \\
  H^{\bullet+n} (M \times M,\ M \times M \setminus M) \ar[r, "\simeq", "\text{切除}"'] &
  H^{\bullet+n} (N,\ N \setminus M) \rlap{ ,}
\end{tikzcd}
\]
我们就得到了要证的等式。
:::

::: proof [@thm-4-poincare-duality 的证明]
和上面一样，记 $u \in H^n (M \times M)$ 为对角类。我们将它写成
\[
\textstyle u = \sum_i b_i \otimes c_i
\]
的形式（这是因为 Künneth 公式中的 Tor 部分消失）。

设 $a \in H^\bullet (M)$ 是任一上同调类。一方面，我们有
\[
\begin{aligned}
  & \bigl( (a \otimes 1) \cup u \bigr) \big/ [M] \\
  ={} & (a \otimes 1) / [M] \, \cup \, u / [M] \\
  ={} & a \cup 1 = a,
\end{aligned}
\]
而另一方面，我们有
\[
\begin{aligned}
  & \bigl( (1 \otimes a) \cup u \bigr) \big/ [M] \\
  ={} & \textstyle \sum_i {} \bigl( (1 \otimes a) \cup (b_i \otimes c_i) \bigr) \big/ [M] \\
  ={} & \textstyle \sum_i {} (-1)^{|a| |b_i|} \bigl( (1 \cup b_i) \otimes (a \cup c_i) \bigr) \big/ [M] \\
  ={} & \textstyle \sum_i {} (-1)^{|a| |b_i|} \langle a \cup c_i, \ [M] \rangle \, b_i.
\end{aligned}
\]
由引理，上面两个式子是相等的。我们取 $a = b_j$，并比较式中 $b_i$ 的系数，得到
\[
(-1)^{|b_i| |b_j|} \langle b_j \cup c_i, \ [M] \rangle = \delta_{ij}.
\]
因此，取 $b_i^* = (-1)^{|b_i|} c_i$，就能满足定理的要求。
:::

## $\mathbb{R} \mathrm{P}^n$ 能否浸入 $\mathbb{R}^N$

::: theorem {@thm-4-immersion}
设 $n = 2, 4, 8, 16, \dotsc$。
则 $\mathbb{R} \mathrm{P}^n$ 能够浸入 $\mathbb{R}^N$ 当且仅当
$N \geq 2n - 1$。
:::

在流形理论中，**Whitney 浸入定理**说明，
当 $n \geq 2$ 时，每个 $n$ 维流形都能浸入 $\mathbb{R}^{2n - 1}$。
我们的定理说明，这个线性界 $2n - 1$ 是最佳的。

定理的证明思路是，如果这样的浸入存在，
那么切丛和法丛的直和就是平凡丛。因此，由 Whitney 乘积公式，得到
\[
w (T \mathbb{R} \mathrm{P}^n) \, w (\text{法丛}) = 1.
\]
通过这个等式，我们能给出法丛的秩的下界。

首先，我们计算射影空间的切丛的示性类。

::: theorem {@thm-4-tcpn}
设系数环是 $\mathbb{K}$-可定向的。如果 $n \geq 1$，
那么当 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时分别有
\[
\begin{aligned}
  w (T \mathbb{R} \mathrm{P}^n) & = (1 + x)^{n + 1}, \\
  c (T \mathbb{C} \mathrm{P}^n) & = (1 + y)^{n + 1}, \\
  p (T \mathbb{H} \mathrm{P}^n) & = (1 + z)^{n + 1}, \\
\end{aligned}
\]
其中 $x, y, z$ 分别是
$H^1 (\mathbb{R} \mathrm{P}^n),\ H^2 (\mathbb{C} \mathrm{P}^n),\ H^4 (\mathbb{H} \mathrm{P}^n)$
的生成元。这里，我们赋予 $T \mathbb{H} \mathrm{P}^n$ 自然的四元数向量丛结构。
:::

::: proof
我们只叙述 $\mathbb{K} = \mathbb{R}$ 情况的证明，其它情况同理。

考虑流形 $\mathbb{R}^{n + 1} \setminus \{0\}$ 的切丛
\[
T = T(\mathbb{R}^{n + 1} \setminus \{0\})
\simeq (\mathbb{R}^{n + 1} \setminus \{0\}) \times \mathbb{R}^{n + 1}.
\]
实数乘法群 $\mathbb{R}^\times$ 通过（对所有分量）数乘作用在 $T$ 上。
作为 $\mathbb{R} \mathrm{P}^n$ 上的向量丛，有
\[
T / \mathbb{R}^\times \simeq T \mathbb{R} \mathrm{P}^n \oplus \mathbb{R},
\]
其中最后一个 $\mathbb{R}$ 表示 $\mathbb{R} \mathrm{P}^n$ 上的平凡丛，
它来自于径向的切向量。
另一方面，作为 $\mathbb{R} \mathrm{P}^n$ 上的向量丛，有
\[
\bigl( (\mathbb{R}^{n + 1} \setminus \{0\}) \times \mathbb{R} \bigr) / \mathbb{R}^\times
\simeq \mathscr{O} (-1),
\]
其中 $\mathbb{R}^\times$ 的作用是数乘。于是，
\[
T \mathbb{R} \mathrm{P}^n \oplus \mathbb{R} \simeq T / \mathbb{R}^\times
\simeq \mathscr{O} (-1) ^{\oplus (n + 1)}.
\]
在这一等式中，计算两边的全 Stiefel–Whitney 类，得到
\[
w (T \mathbb{R} \mathrm{P}^n) = w (\mathscr{O} (-1))^{n + 1} = (1 + x)^{n + 1}.
\]
:::

::: proof [@thm-4-immersion 的证明]
Whitney 浸入定理说明了后一条件的充分性。
为证必要性，假设存在这样的浸入。
则由之前的讨论，注意到 $n$ 是 $2$ 的幂，有
\[
\begin{aligned}
  w(\text{法丛})
  & = w^{-1} (T \mathbb{R} \mathrm{P}^n) \\
  & = \bigl( (1 + x)^{n + 1} \bigr)^{-1} \\
  & = (1 + x + x^n + \cancel{x^{n+1}})^{-1} \\
  & = 1 + (x + x^n) + (x + x^n)^2 + \cdots \\
  & = 1 + x + x^2 + \cdots + x^{n-1}.
\end{aligned}
\]
因此，法丛的秩至少是 $n - 1$，从而 $N \geq 2n - 1$。
:::

## 球面的近复结构

下面，我们利用示性类的计算，来判断哪些球面具有近复结构。
和之前一样，本节中的流形都是指光滑流形。
本节的内容主要参考了 [@spheres]。

::: definition
设 $M$ 是 $2n$ 维流形。它的一个**近复结构**（almost complex structure）
是一个将切丛 $TM$ 看成 $n$ 维复向量丛的方法。
:::

根据这个定义，复流形都有近复结构。
但是，有近复结构的流形不一定有复结构。

我们先叙述这一节的主要定理：

::: theorem {@thm-4-sphere}
球面 $S^n$ 有近复结构，当且仅当 $n = 0, 2, 6$。
:::

球面 $S^0$ 和 $S^2$ 事实上都有复结构，后者的复结构由 $\mathbb{C} \mathrm{P}^1$ 给出。
至于 $S^6$ 是否有复结构，则是一个未解难题。
著名的 Michael Atiyah 在 2016 年宣称 $S^6$ 没有复结构，但他的论证未被大多数人接受。

定理证明的概要是，先利用示性类的理论，排除 $n$ 的所有其它可能性，
然后再在 $S^6$ 上构造一个近复结构。

::: lemma {@lem-4-sphere-1}
当 $k \geq 1$ 时，球面 $S^{4k}$ 没有近复结构。
:::

::: proof
假设 $S^{4k}$ 有近复结构，记 $T$ 为相应的复向量丛，
使得 $T$ 对应的实向量丛 $T_{\mathbb{R}}$ 与 $TS^{4k}$ 同构。则
\[
\begin{aligned}
  1 &= 1 + (-1)^k \, p_k (T_{\mathbb{R}}) && \\
  &= c (T_{\mathbb{R}} \otimes \mathbb{C}) && \text{(由 } p_k \text{ 的定义)} \\
  &= c (T \oplus \overline{T}) && (T_{\mathbb{R}} \otimes \mathbb{C} \simeq T \oplus \overline{T}) \\
  &= (1 + c_{2k} (T)) \, (1 + c_{2k} (\overline{T})) \\
  &= (1 + e (T)) \, (1 + e (\overline{T})) \\
  &= (1 + e (T))^2 && (T_{\mathbb{R}} \simeq (\overline{T})_{\mathbb{R}}) \\
  &= 1 + 2e (T).
\end{aligned}
\]
这说明 $e (T) = 0$，这与 Poincaré–Hopf 定理矛盾。
:::

::: lemma {@lem-4-sphere-2}
当 $k \geq 4$ 时，球面 $S^{2k}$ 没有近复结构。
:::

::: proof
设 $T$ 为 $S^{2k}$ 上的复向量丛，使得 $T_{\mathbb{R}} \simeq TS^{2k}$ 同构。
我们知道 $c (T) = 1 + c_k (T) = 1 + 2x$，
其中 $x$ 是 $H^{2k} (S^{2k}; \mathbb{Z}) \simeq \mathbb{Z}$ 的生成元 $1$。
因此，由 @def-3-ch 给出的公式，$T$ 的陈特征是
\[
\operatorname{ch} (T) = k + \frac {2} {(k-1)!} x.
\]
我们断言系数 $2/(k-1)! \in \mathbb{Z}$，从而必有 $k < 4$。

我们证明更一般的结论：陈特征映射
\[
\operatorname{ch} \colon K (S^{2k}) \to H^{2\bullet} (S^{2k}; \mathbb{Q})
\]
的像都是整上同调类，即 $H^{2\bullet} (S^{2k}; \mathbb{Z})$ 的元素。

为此，我们引入**约化 $K$-理论**：对带基点的拓扑空间 $X$，定义
\[
\widetilde{K} (X) := \ker \Bigl( \operatorname{rank} \colon K(X) \to \mathbb{Z} \Bigr),
\]
其中映射 $\operatorname{rank}$ 定义为在 $X$ 的基点处取向量丛的秩。
对于紧空间 $X$，由 @thm-3-bu-times-z，我们有
\[
\widetilde{K} (X) \simeq [X, \mathrm{B} \mathrm{U} \times \mathbb{Z}]_*,
\]
其中记号 $[\ ,\ ]_*$ 表示固定基点的同伦类的集合。

由 Bott 周期律（@rmk-3-bott），对紧空间 $X$，我们有交换图
\[
\begin{tikzcd}[column sep=4em]
  \widetilde{K} (X) \ar[d, "\operatorname{ch}"] \ar[r, "{\otimes \, (H-1)}", "\simeq"'] &
  \widetilde{K} (\Sigma^2 X) \ar[d, "\operatorname{ch}"] \\
  \widetilde{H}^{2\bullet} (X; \mathbb{Q}) \ar[r, "\otimes \operatorname{ch} (H-1)", "\simeq"'] &
  \widetilde{H}^{2\bullet} (\Sigma^2 X; \mathbb{Q}) \rlap{ ,}
\end{tikzcd}
\]
其中 $\Sigma^2 X$ 等同于 $X \wedge S^2$，
而 $H$ 是 $S^2 \simeq \mathbb{C} \mathrm{P}^1$ 的线丛 $\mathscr{O} (-1)$。
注意 $\operatorname{ch} (H-1) = (1 + c_1(H)) - 1 = c_1 (H)$ 就是 $H^2 (S^2) \simeq \mathbb{Z}$
的生成元，
它是一个整上同调类。

我们用归纳法，在交换图中将 $X$ 取成 $S^0$、$S^2$、$S^4$、$\dotsc$，就完成了证明。
:::

::: proof [@thm-4-sphere 的证明]
由 @lem-4-sphere-1、@lem-4-sphere-2，
我们只需要在 $S^6$ 上构造一个近复结构。

这个构造用到了八元数的集合 $\mathbb{O}$。
我们记 $\operatorname{Im}\mathbb{O} \simeq \mathbb{R}^7$ 为虚八元数的集合，
然后考虑单位球面 $S^6 \subset \operatorname{Im}\mathbb{O}$。
对每个 $p \in S^6$，
切空间 $T_p S^6$ 可以看作 $\operatorname{Im}\mathbb{O}$ 的子空间（切空间的原点和
$\operatorname{Im}\mathbb{O}$ 的原点对齐）。
为了给出一个近复结构，我们只需在每个 $p \in S^6$ 定义一个线性变换
\[
J_p \colon T_p S^6 \to T_p S^6,
\]
作为复数 $\mathrm{i}$ 的数乘，满足 $J_p^2 = -1$。

我们列举一些八元数的性质。
八元数的乘法不满足交换律和结合律。对 $u,v \in \mathbb{O}$，
我们有 $\overline{uv} = \overline{v \mkern-1mu} \mkern1mu \overline{u}$。
并且，它们的欧氏内积由 $2 \langle u, v \rangle = u \overline{v} + v \overline{u}$ 给出。
因此，$u \perp v$ 当且仅当 $u \overline{v} = -v \overline{u}$。
当 $u, v \in \operatorname{Im}\mathbb{O}$ 时，我们有 $\overline{u} = -u$，以及 $\overline{v} = -v$，
故此时 $u \perp v$ 等价于 $uv = -vu$。

对 $v \in T_p S^6$，我们就定义
\[
J_p (v) = pv.
\]
我们需要验证这个构造满足要求。首先，我们有
\[
\overline{pv} = \overline{v \mkern-1mu} \mkern1mu \overline{p} = (-v) (-p) = v p = -p v,
\]
从而 $pv \in \operatorname{Im}\mathbb{O}$。又
\[
p(pv) = -p(vp) = -(pv)p,
\]
其中第二个等号是由于，三个八元数相乘时，若其中两个相等，则结合律成立。
从而，$pv \perp p$。最后，
\[
J_p^2 v = p(pv) = (pp)v = -(p\overline{p}) v = -|p|^2 v = -v.
\]
因此，$J_p^2 = -1$。
:::

## 代数曲线的亏格

设 $f (x, y, z)$ 是复系数 $n$ 次齐次多项式。方程
\[
f (x, y, z) = 0
\]
在射影平面 $\mathbb{C} \mathrm{P}^2$ 中画出一条曲线，称为 $n$ 次**代数曲线**（algebraic curve）。

我们假定这条代数曲线是**光滑**的，也就是说，
它是一个紧一维复流形，即紧 Riemann 面。
当 $n = 2$ 时，我们得到的就是用来折磨高中生的圆锥曲线，
它对应的 Riemann 面是球面。
当 $n = 3$ 时，我们得到的是三次曲线，又称为**椭圆曲线**（elliptic curve）。
它的拓扑是圆环面，可以看作复平面 $\mathbb{C}$ 的商空间，复数加法赋予了它一个群结构。

Riemann 面的拓扑由其亏格 $g$ 决定。本节中，我们将导出 $g$ 与 $n$ 的关系。

::: theorem {@thm-4-genus}
光滑 $n$ 次代数曲线的亏格是
\[
g = \frac12 (n-1) (n-2).
\]
:::

如果读者不熟悉代数几何或复几何，我们介绍一个事实：
对每个 $d \in \mathbb{Z}$，射影空间 $\mathbb{C} \mathrm{P}^n$ 都有一个线丛 $\mathscr{O} (d)$，
它的所有截面就是 $\mathbb{C}^{n+1} \setminus \{0\}$ 上所有的 $d$ 次齐次复值函数。
当 $d = -1$ 时，我们就得到了自言线丛 $\mathscr{O} (-1)$。

::: lemma {@lem-4-normal-bundle}
设 $X \subset \mathbb{C} \mathrm{P}^2$ 是光滑 $n$ 次代数曲线。
则法丛 $N$ 同构于 $\mathscr{O} (n) |_X$。
:::

::: proof
设 $X$ 的方程是 $f (x, y, z) = 0$。
将 $f$ 看作 $\mathbb{C}^3 \setminus \{0\}$ 上的复值函数，
则其微分 $df$ 是 $n-1$ 次齐次 $1$-形式。

我们知道，$\mathbb{C} \mathrm{P}^2$ 上的 $1$-形式对应着
$\mathbb{C}^3 \setminus \{0\}$ 上的 $-1$ 次齐次 $1$-形式。
这说明 $df$ 是 $\mathbb{C} \mathrm{P}^2$ 上的向量丛
\[
T^* \mathbb{C} \mathrm{P}^2 \otimes \mathscr{O} (n)
\]
的截面。

我们将法丛 $N$ 看成商丛 $(T \mathbb{C} \mathrm{P}^2 |_X) / TX$。
则余法丛 $N^{\vee}$（法丛的对偶）是 $T^* \mathbb{C} \mathrm{P}^2 |_X$ 的子丛，
它由所有把 $X$ 的切向量变成 $0$ 的线性函数构成。
而 $df$ 就满足这个条件。因此，$df$ 是 $X$ 上的线丛
\[
L = N^\vee \otimes \mathscr{O} (n) |_X
\]
的截面，且在 $X$ 上处处非零。
这说明 $L$ 是平凡丛。在等式两边与 $\mathscr{O} (-n) |_X$ 做张量积，我们得到
\[
\mathscr{O} (-n) |_X \simeq N^\vee,
\]
也就是 $N \simeq \mathscr{O} (n) |_X$。
:::

::: proof [@thm-4-genus 的证明]
设 $X \subset \mathbb{C} \mathrm{P}^2$ 是光滑 $n$ 次代数曲线。
由 @lem-4-normal-bundle，其法丛是 $\mathscr{O} (n) |_X$。因此，
\[
T \mathbb{C} \mathrm{P}^2 |_X \simeq TX \oplus \mathscr{O} (n) |_X.
\]
取全陈类，由 @thm-4-tcpn，有
\[
\begin{aligned}
  c (TX) &= \frac {c (T \mathbb{C} \mathrm{P}^2 |_X)} {c (\mathscr{O} (n) |_X)} \\
  &= \frac {(1 + x)^3} {1 + nx} \\
  &= (1 + 3x) (1 - nx) \\
  &= 1 + (3 - n) x,
\end{aligned}
\]
其中 $x$ 是 $H^2 (\mathbb{C} \mathrm{P}^2)$ 的生成元在 $H^2 (X)$ 中的像。
我们有
\[
\langle x,\ [X] \rangle = n,
\]
这是因为，这个配对等于 $X$ 与 $x$ 的 Poincaré 对偶（即一条直线）的相交数。
最后，Poincaré–Hopf 定理告诉我们
\[
2 - 2g = \chi (X) = (3 - n) n,
\]
这蕴涵了计算 $g$ 的式子。
:::

## 配边和示性数

下面，我们介绍一个深刻的结论，即 Понтрягин–Thom 定理。
它将示性类和流形的配边联系起来，从而，我们可以通过示性类，
来判断一个流形是否是某个带边流形的边界。

和之前一样，在本节中，流形默认是光滑、不带边的。

::: definition
设 $M$ 是紧 $n$ 维 (i) 实，(ii) 复，(iii) 实流形。
设 $I = (i_1, \dotsc, i_r)$ 是一组正整数，满足 $\sum_k i_k =$ (i, ii) $n$，(iii) $n/4$。则

1. $M$ 的第 $I$ 个 **Stiefel–Whitney 数**定义为模 $2$ 的整数
   \[
   w_I (M) = \bigl\langle w_{i_1} (TM) \cdots w_{i_r} (TM) ,\ [M] \bigr\rangle \pmod {2}.
   \]

2. $M$ 的第 $I$ 个**陈数**定义为整数
   \[
   c_I (M) = \bigl\langle c_{i_1} (TM) \cdots c_{i_r} (TM) ,\ [M] \bigr\rangle.
   \]

3. $M$ 的第 $I$ 个 **Понтрягин 数**定义为整数
   \[
   p_I (M) = \bigl\langle p_{i_1} (TM) \cdots p_{i_r} (TM) ,\ [M] \bigr\rangle.
   \]

:::

::: definition
设 $M, N$ 是两个已定向的 $n$ 维实流形。它们的一个**配边**（cobordism）
是一个带边 $n+1$ 维流形 $W$，满足
\[
\partial W = (-M) \sqcup N,
\]
其中 $-M$ 表示 $M$ 的相反定向，$\sqcup$ 表示不交并。
此时，我们说 $M$ 与 $N$ 是**可配边**（cobordant）的。
:::

例如，一个流形与 $\emptyset$ 可配边，等价于它是某个带边流形的边界。

::: theorem
设实流形 $M$ 是某个带边流形的边界。
则 $M$ 的所有 Stiefel–Whitney 数和所有 Понтрягин 数（如果能定义的话）都等于 $0$。

特别地，如果实流形 $M, N$ 可配边，
那么它们的所有示性数都相等。
:::

::: proof
设 $M = \partial W$。则
\[
TW |_M \simeq TM \oplus \mathbb{R},
\]
其中 $\mathbb{R}$ 是秩为 $1$ 的平凡丛，
它由 $\partial W$ 上指向 $W$ 外侧的向量场给出。
这说明 $TW |_M$ 和 $TM$ 的所有示性类都相等。

考虑上同调的长正合列
\[
\cdots \to H^n (W)
\overset{i^*}{\longrightarrow} H^n (M)
\overset{\delta}{\longrightarrow} H^{n+1} (W, M) \to \cdots ,
\]
其中 $n = \dim M$。由上面的讨论，$H^n (W)$ 的元素
$w_{i_1} (TW) \cdots w_{i_r} (TW)$ 被 $i^*$ 映到
$w_{i_1} (TM) \cdots w_{i_r} (TM)$，它被 $\delta$ 映到 $0$。这说明
\[
\begin{aligned}
  0 &= \bigl\langle \delta \bigl( w_{i_1} (TM) \cdots w_{i_r} (TM) \bigr) ,\ [W] \bigr\rangle
    && \bigl( [W] \in H_{n+1} (W, M) \bigr) \\
  &= \bigl\langle w_{i_1} (TM) \cdots w_{i_r} (TM) ,\ \partial [W] \bigr\rangle
    && \bigl( \partial [W] \in H_n (M) \bigr) \\
  &= \bigl\langle w_{i_1} (TM) \cdots w_{i_r} (TM) ,\ [M] \bigr\rangle \\
  &= w_I (M).
\end{aligned}
\]
同样的讨论对 Понтрягин 数也成立。

至于最后一个命题，只需注意到 $M, N$ 可配边等价于 $(-M) \sqcup N$ 是某个流形的边界，
而 $-M$ 的示性数与 $M$ 相差一个符号，因为 $[M]$ 反号了。
:::

这个定理的逆向是一个更深刻的结论，
我们在这里就不证明了。

::: theorem [Понтрягин–Thom]
实流形 $M$ 是某个带边流形的边界，
当且仅当 $M$ 的所有 Stiefel–Whitney 数都等于 $0$。
:::

最后，我们再介绍一个有趣的应用。

::: proposition
如果 $4n$ 维流形 $M$ 有一个反定向的自微分同胚，
那么它的所有 Понтрягин 数都等于 $0$。
:::

::: proof
我们已经知道，如果将定向反过来，那么示性数会反号。
因此，$M$ 的所有示性数都和它的相反数相等。
:::

借助这个简单的结论，我们可以找到一些“不能内外翻转”的流形。

::: exercise
通过计算示性数，证明 $\mathbb{C} \mathrm{P}^{2n}$ 没有反定向的自微分同胚，
也不是另一个流形的边界。
:::
