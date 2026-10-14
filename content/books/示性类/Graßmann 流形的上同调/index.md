---
title: Graßmann 流形的上同调
---

在本节中，我们通过 $\mathrm{B} \mathrm{GL}(n, \mathbb{K})$ 的一个具体的构造，
来找出向量丛的所有示性类。
当然，本节的标题已经不小心透露了这个构造——向量丛的分类空间就是 Graßmann 流形。
我们回忆，向量丛的示性类就是分类空间的上同调类，所以在这一节里，
我们要计算 Graßmann 流形的上同调环。

## Graßmann 流形

::: definition
设 $0 \leq n \leq N$。我们定义
**Stiefel 流形** $V_n (\mathbb{K}^N)$ 和
**Graßmann 流形** $G_n (\mathbb{K}^N)$ 如下：
\[
\begin{aligned}
  V_n (\mathbb{K}^N) & = \{ \mathbb{K}^N \text{ 中所有线性无关的 } n \text{ 元有序向量组} \}, \\
  G_n (\mathbb{K}^N) & = \{ \mathbb{K}^N \text{ 的所有 } n \text{ 维线性子空间} \}.
\end{aligned}
\]
它们都带有自然的拓扑，以及光滑流形结构。定义
\[
\begin{aligned}
  V_n (\mathbb{K}^\infty) & = \operatornamewithlimits{colim}_{N \to \infty} V_n (\mathbb{K}^N), \\
  G_n (\mathbb{K}^\infty) & = \operatornamewithlimits{colim}_{N \to \infty} G_n (\mathbb{K}^N),
\end{aligned}
\]
其中余极限由映射
$\mathbb{K}^N \hookrightarrow \mathbb{K}^{N+1} \hookrightarrow \cdots$ 诱导。
:::

自然地，Stiefel 流形是 Graßmann 流形上的纤维丛：
\[
\mathrm{GL}(n, \mathbb{K}) \to V_n(\mathbb{K}^N) \to G_n(\mathbb{K}^N).
\]
这是一个 $\mathrm{GL}(n, \mathbb{K})$-主丛。
它与映射 $\mathbb{K}^N \hookrightarrow \mathbb{K}^{N+1}$ 相容，故有主丛
\[
\mathrm{GL}(n, \mathbb{K}) \to V_n(\mathbb{K}^\infty) \to G_n(\mathbb{K}^\infty).
\]

::: theorem
无穷维 Stiefel 流形 $V_n(\mathbb{K}^\infty)$ 是可缩的，从而
\[
\mathrm{B} \mathrm{GL}(n, \mathbb{K}) \simeq G_n(\mathbb{K}^\infty).
\]
:::

::: proof
通过 $\mathbb{K}^\infty$ 的同伦
\[
(x_1, x_2, \dotsc) \mapsto
(1 - t) (x_1, x_2, \dotsc) +
t ( \underbrace{0, \dotsc, 0}_n, x_1, x_2, \dotsc ),
\]
我们可以把 $V_n(\mathbb{K}^\infty)$ 移到前 $n$ 个坐标为 $0$ 的子空间中。
请读者验证，在 $V_n$ 的定义中要求的线性无关性不会被打破。
接下来，通过 $V_n(\mathbb{K}^\infty)$ 的同伦
\[
(v_1, \dotsc, v_n) \mapsto (v_1 + t e_1, \dotsc, v_n + t e_n),
\]
最后把 $\mathbb{K}^\infty$ 中除了前 $n$ 个坐标以外的部分都压缩回 $0$，
我们就把 $V_n(\mathbb{K}^\infty)$ 形变收缩到了点 $(e_1, \dotsc, e_n)$。
:::

我们可以用同样的方法，
构造出正交群、酉群和四元数酉群的万有主丛。

::: proposition
定义
\[
V'_n (\mathbb{K}^N) = \{ \mathbb{K}^N \text{ 中所有标准正交的 } n \text{ 元有序向量组} \},
\]
其中 $\mathbb{K}^N$ 带有一个 Euclid 度量（$\mathbb{K} = \mathbb{R}$ 时）
或一个 Hermite 度量（$\mathbb{K} = \mathbb{C}, \mathbb{H}$ 时）。
类似地定义 $V'_n (\mathbb{K}^\infty)$。
则自然的映射
\[
V'_n (\mathbb{K}^\infty) \to G_n (\mathbb{K}^\infty)
\]
是正交群（$\mathbb{K} = \mathbb{R}$ 时）、
酉群（$\mathbb{K} = \mathbb{C}, \mathbb{H}$ 时）的万有主丛。
:::

::: proof
只需要验证 $V'_n (\mathbb{K}^\infty)$ 是可缩的。
请读者模仿上一个证明完成验证。
:::

::: corollary
我们有
\[
\begin{array}{rcl}
  \mathrm{B}\mathrm{GL}(n, \mathbb{R}) \simeq & G_n (\mathbb{R}^\infty) & \simeq \mathrm{B}\mathrm{O}(n), \\
  \mathrm{B}\mathrm{GL}(n, \mathbb{C}) \simeq & G_n (\mathbb{C}^\infty) & \simeq \mathrm{B}\mathrm{U}(n), \\
  \mathrm{B}\mathrm{GL}(n, \mathbb{H}) \simeq & G_n (\mathbb{H}^\infty) & \simeq \mathrm{B}\mathrm{Sp}(n).
\end{array}
\]
特别地，
\[
\mathrm{B}\mathrm{O}(1) \simeq \mathbb{RP}^\infty, \quad
\mathrm{B}\mathrm{U}(1) \simeq \mathbb{CP}^\infty, \quad
\mathrm{B}\mathrm{Sp}(1) \simeq \mathbb{HP}^\infty.
\]
:::

这也说明，任何空间上的 $\mathrm{GL}(n, \mathbb{R})$-主丛和 $\mathrm{O}(n)$-主丛一样多。
类似的事实对 $\mathbb{K} = \mathbb{C}, \mathbb{H}$ 也成立。
这样就证明了下面的结论，虽然我们的证明路径大概是绕路最多的。

::: corollary
每个实向量丛都有 Euclid 度量。
每个复向量丛都有 Hermite 度量。
每个四元数向量丛都有 Hermite 度量。
:::

## 向量丛的示性类

由定义，向量丛的示性类就是 Graßmann 流形的上同调环的元素。
因此，我们想要计算出这个环。

我们从一些定义开始。
和上面一样，我们记 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$。

::: definition
设 $p \colon E \to B$ 是 $\mathbb{K}$-向量丛，设 $R$ 是环。
则 $E$ 的一个 $R$-**定向**（orientation）由以下信息组成：

- 对每个 $b \in B$，选取了纤维 $p^{-1} (b) \simeq \mathbb{K}^n$
  的相对上同调类
  \[
  \pm 1 \in
  H^{dn} (\mathbb{K}^n,\ \mathbb{K}^n \setminus \{ 0 \}; \ R) \simeq R,
  \]
  其中 $d = \dim_{\mathbb{R}} \mathbb{K}$。
  即，我们在 $\pm 1$ 这两个选项中选定了一个。
  这些选取方式满足，
  每个点 $b$ 处的选取方式与 $b$ 附近的选取方式是相容的。

如果存在这样的 $R$-定向，就称 $E$ 为 $R$-**可定向**（orientable）的。
:::

我们把严格的叙述留给读者完成。

::: definition
我们说一个环 $R$ 是 $\mathbb{K}$-**可定向** 的，如果以下等价的条件成立：

- 要么 $\mathbb{K} = \mathbb{C}, \mathbb{H}$，要么 $2R = 0$。

- 所有 $\mathbb{K}$-向量丛都是 $R$-可定向的。

:::

::: remark
这个无聊的定义可以进一步推广。
我们知道，每个系数环 $R$ 定义了一个上同调理论。
在更一般的情况下，我们考虑由**谱环**定义的**广义上同调**理论，例如 $K$-理论。
谱环的 $\mathbb{K}$-可定向性是有意思的性质，但我们不详细讨论。
本节接下来的讨论对可定向的谱环也都适用。
:::

::: theorem {@thm-2-main}
设 $R$ 是 $\mathbb{K}$-可定向的环。

- 当 $\mathbb{K} = \mathbb{R}$ 时，有分次环的同构
  \[
  H^\bullet (\mathrm{B}\mathrm{O}(n); R) \simeq R[w_1, \dotsc, w_n],
  \]
  其中 $\deg w_i = i$。
  上同调类 $w_i$ 对应了实向量丛的示性类，
  称为第 $i$ 个 **Stiefel–Whitney 类**。

- 当 $\mathbb{K} = \mathbb{C}$ 时，有分次环的同构
  \[
  H^\bullet (\mathrm{B}\mathrm{U}(n); R) \simeq R[c_1, \dotsc, c_n],
  \]
  其中 $\deg c_i = 2i$。
  上同调类 $c_i$ 对应了复向量丛的示性类，
  称为第 $i$ 个**陈类**。
  
- 当 $\mathbb{K} = \mathbb{H}$ 时，有分次环的同构
  \[
  H^\bullet (\mathrm{B}\mathrm{Sp}(n); R) \simeq R[p_1, \dotsc, p_n],
  \]
  其中 $\deg p_i = 4i$。
  上同调类 $p_i$ 对应了四元数向量丛的示性类，
  称为第 $i$ 个 **Понтрягин 类**。

:::

我们接下来的目标就是证明这个主要定理。

## Thom 同构

假设我们有已定向的向量丛 $E \to B$。
那么，每个纤维 $\mathbb{K}^n$ 上就选好了一个相对于 $\mathbb{K}^n \setminus \{ 0 \}$
的相对上同调类。因为这些上同调类在局部上是相容的，
所以我们可以把它拼起来，得到一个整体的上同调类
\[
u \in H^{dn}(E,\ E \setminus B;\ R),
\]
这里 $B$ 以明显的方式（通过零截面）嵌入到 $E$ 中。
下面，我们严格地叙述和证明这个想法。

::: definition

- 一个**球丛**（sphere bundle）
  是一个纤维为球面 $S^n$ 的纤维丛，
  其转移映射是球的旋转或翻转（即 $\mathbb{R}^{n + 1}$ 的正交变换）。

- 一个**圆盘丛**（disk bundle）
  是一个纤维为圆盘 $D^n$ 的纤维丛，
  其转移映射是圆盘的旋转或翻转（即正交变换）。

:::

::: definition
设 $E \to B$ 是纤维为 $\mathbb{R}^n$ 的向量丛。
在这个向量丛上取一个 Euclid 度量。

- 在每个纤维上取出单位球面 $S^{n - 1}$，得到的球丛记为
  \[
  \mathrm{S}(E) \to B.
  \]

- 在每个纤维上取出单位圆盘 $D^n$，得到的圆盘丛记为
  \[
  \mathrm{D}(E) \to B.
  \]

- 定义 $E$ 的 **Thom 空间**为商空间
  \[
  \mathrm{Th}(E) = \mathrm{D}(E) / \mathrm{S}(E).
  \]
  Thom 空间可以看成是给 $E$ 的每个纤维添加一个共同的无穷远点得到的空间。

:::

不难看出，Thom 空间的约化上同调就是 $(E,\ E \setminus B)$ 的相对上同调。
这也可以理解成“在纤维方向上紧支”的上同调。
如果这里 $B$ 是流形，$E$ 是光滑的向量丛，
那么上同调类可以用微分形式来代表。
如果使用那些在每个纤维上紧支的微分形式，
那么得到的 de Rham 复形的上同调就是这个上同调。
详细的讨论见 [@bott-tu]。

::: theorem [Thom 同构] {@thm-2-thom}
设 $E \to B$ 是 $R$-可定向的向量丛，其纤维为 $\mathbb{R}^n$。
选取 $E$ 的一个 $R$-定向。

- 存在唯一的上同调类
  \[
  u \in \widetilde{H}^n(\mathrm{Th}(E);\ R),
  \]
  称为 **Thom 类**，使得它限制在每个纤维 $S^n$ 上，都是由定向确定的元素
  \[
  \pm 1 \in \widetilde{H}^n(S^n;\ R).
  \]

- 对每个 $q \in \mathbb{Z}$，有同构
  \[
  {} \cup u \colon H^q (B;\ R) \simeq \widetilde{H}^{q+n} (\mathrm{Th}(E);\ R).
  \]
  这里，我们约定负数上同调群为 $0$。

:::

这里杯积 $\cup$ 的含义如下：
在代数拓扑中，对任何拓扑空间 $A \subset X$，有杯积
\[
\cup \colon H^\bullet(X) \otimes H^\bullet(X,A) \to H^\bullet(X,A).
\]
在这里，我们取 $X = \mathrm{D}(E)$ 和 $A = \mathrm{S}(E)$。则
\[
H^\bullet(\mathrm{D}(E)) \simeq H^\bullet(B), \quad
H^\bullet(\mathrm{D}(E),\ \mathrm{S}(E)) \simeq \widetilde{H}^\bullet(\mathrm{Th}(E)).
\]

直观地看，Thom 类就是把每个纤维的上同调的生成元拼起来，
所得到的整体的上同调类。

在证明定理之前，我们先证明一个引理。

::: lemma
记
\[
e^n = 1 \in H^n(D^n, S^{n - 1}) \simeq R.
\]
则对任意两个空间 $A \subset X$，相对上同调类的叉积映射
\[
{} \times e^n \colon
H^q (X, A) \to
H^{q+n} (X \times D^n,\ X \times S^{n - 1} \cup A \times D^n)
\]
是同构。
:::

::: proof
先证明 $n = 1$ 的情况。考虑三元组
\[
(
  X \times D^1,\
  X \times S^0 \cup A \times D^1,\
  X \times \{1\} \cup A \times D^1
)
\]
的相对上同调长正合列。我们有
\[
H^q (X \times D^1,\ X \times \{1\} \cup A \times D^1) \simeq 0,
\]
因为 $X \times \{1\}$ 含入这两个空间的映射都是同伦等价。
因此，上述长正合列就给出了所要的同构。

对一般的 $n$，只需注意到对任何 $y \in H^q (X, A)$，有
\[
y \times e^n = y \times e^1 \times \cdots \times e^1.
\]
:::

::: proof [@thm-2-thom 的证明]
我们从最简单的情况开始。

(1) $E$ 是平凡丛 $B \times \mathbb{R}^n$。
    在引理中取 $(X, A) = (B, \emptyset)$，
    我们就得到了同构
    \[
    {} \times e^n \colon H^q (\mathrm{D}(E)) \simeq \widetilde{H}^{q+n} (\mathrm{Th}(E)).
    \]
    因此，我们定义
    \[
    u = 1 \times e^n \in \widetilde{H}^n(\mathrm{Th}(E)),
    \]
    其中 $1 \in H^0(\mathrm{D}(E))$。
    则 $u$ 满足定理的要求。
    而上述同构也保证了 $u$ 的唯一性，
    因为 $1$ 是 $H^0(\mathrm{D}(E))$ 中唯一的在每点限制都等于 $1$ 的上同调类。

(2) $B = B_1 \cup B_2$，其中 $B_1, B_2$ 是开子集，
    且 $E|_{B_1}$ 和 $E|_{B_2}$ 是平凡丛。
    记 $E_1 = p^{-1}(B_1)$，及 $E_2 = p^{-1}(B_2)$。
    考虑相对上同调的 Mayer–Vietoris 正合列
    \[
    \cdots \to H^q(\mathrm{D}(E),\ \mathrm{S}(E))
    \xrightarrow{\alpha} H^q(\mathrm{D}(E_1),\ \mathrm{S}(E_1))
    \oplus H^q(\mathrm{D}(E_2),\ \mathrm{S}(E_2)) \\[6pt]
    \hspace{12em}
    \xrightarrow{\beta} H^q(\mathrm{D}(E_1 \cap E_2),\ \mathrm{S}(E_1 \cap E_2)) \to \cdots.
    \]
    由情况 (1)，存在 Thom 类 $u_i \in H^n(\mathrm{D}(E_i),\ \mathrm{S}(E_i))$ $(i=1,2)$。
    这两个 Thom 类限制在 $E_1 \cap E_2$ 上也是 Thom 类，从而由唯一性，它们的限制相等。
    因此，它们可以粘成 $E$ 上的上同调类。严格地说，我们有 $\beta(u_1, u_2) = 0$，
    从而存在 $u \in H^n(\mathrm{D}(E),\ \mathrm{S}(E))$，使得 $\alpha(u) = (u_1, u_2)$。

    再证明唯一性。只需证明 $\alpha$ 是单射，
    这是因为正合列的前一项是
    \[
    H^{n - 1} (\mathrm{D}(E_1 \cap E_2),\ \mathrm{S}(E_1 \cap E_2)) \simeq H^{-1}(B) \simeq 0.
    \]

(3) $B = B_1 \cup B_2 \cup B_3$，其中 $B_i$ 是开子集，
    且 $E|_{B_i}$ 是平凡丛。对 $B_1$ 和 $B_2 \cup B_3$ 使用 (2) 的论述，
    就完成了证明。

($n$) $B = B_1 \cup \cdots \cup B_n$，其中 $B_i$ 是开子集，
      且 $E|_{B_i}$ 是平凡丛。证明和 (3) 一样。

- $\cdots \cdots \cdots \cdots$

($\infty$) $B = B_1 \cup B_2 \cup \cdots$，其中 $B_i$ 是开子集，
           且 $E|_{B_i}$ 是平凡丛。这时，我们想把无穷多个开子集上的上同调类拼起来。
           这看起来很直观。为了严格证明它，
           我们使用 Mayer–Vietoris 序列的推广：Čech 上同调到普通上同调的谱序列
           \[
           E_1^{p, q} = \check{C}^p (\mathscr{B}, \mathscr{H}^q) \ \Rightarrow \ H^{p + q} (\mathrm{D}(E),\ \mathrm{S}(E);\ R),
           \]
           其中 $\mathscr{B}$ 是开覆盖 $\{B_i\}$，
           而 $\mathscr{H}^q$ 是 $B$ 上的预层，定义为
           \[
           \mathscr{H}^q(U) = H^q(\mathrm{D}(E|_U),\ \mathrm{S}(E|_U);\ R) \quad (U \subset B).
           \]
           事实上，$E_1^{p, q}$ 只有在 $q \geq n$ 时非零，
           而 $B_i$ 上的 Thom 类构成的元素 $\{u_i\}$ 在第 $(0, n)$ 格，
           而且 $d\{u_i\} = 0$。因此，元素 $\{u_i\}$ 被保留在谱序列的每一页中，
           最后成为 $H^n(\mathrm{D}(E),\ \mathrm{S}(E))$ 的一个元素 $u$。
           这就是 Thom 类。

:::

## Gysin 序列和 Euler 类

和上面一样，设 $R$ 是系数环。我们研究球丛，
即纤维为 $S^n$ 且转移映射为正交变换的丛。

::: theorem [Gysin 序列]
设 $E \to B$ 是 $R$-可定向的 $S^n$-丛，
且已经选好了一个 $R$-定向。
则存在 **Euler 类**
\[
e = e(E) \in H^{n + 1} (B;\ R),
\]
使得存在两个长正合列构成的图表
\[
\begin{tikzcd}[column sep=small]
  \cdots \ar[r] &
  H^q (B) \ar[d, "\simeq"'] \ar[r, "p^*"] &
  H^q (E) \ar[d, "\simeq"'] \ar[r, "\int"] &
  H^{q - n} (B) \ar[d, "\cup u", "\simeq"'] \ar[r, "\cup e"] &
  H^{q + 1} (B) \ar[d, "\simeq"'] \ar[r] & \cdots \\
  \cdots \ar[r] &
  H^q (\mathrm{D}(E')) \ar[r] &
  H^q (\mathrm{S}(E')) \ar[r] &
  H^{q + 1} (\mathrm{D}(E'),\ \mathrm{S}(E')) \ar[r] &
  H^{q + 1} (\mathrm{D}(E')) \ar[r] & \cdots \rlap{\ ,}
\end{tikzcd}
\]
其中 $E'$ 是 $E$ 所对应的 $\mathbb{R}^{n+1}$-丛。
第一行称为球丛 $E$ 的 **Gysin 序列**。
:::

::: proof
定义
\[
e = i^* u,
\]
其中 $i \colon B \to \mathrm{Th}(E')$ 是含入映射，则定理是显然的。
:::

这里，映射 $H^q (E) \to H^{q - n} (B)$ 被记作 $\int$ 的原因是，
如果 $E$ 和 $B$ 是流形，我们把上同调类用微分形式来代表，
则这个映射对应于微分形式沿纤维的积分。
这个操作把 $q$-形式变成 $(q - n)$-形式。
详细的讨论见 [@bott-tu]。

::: remark
Thom 类和 Euler 类都依赖于定向的选取。
如果选取反的定向，那么 Thom 类和 Euler 类都会反号。
:::

::: definition
设 $E \to B$ 是 $R$-可定向的 $\mathbb{R}^n$-丛，且已经选好了一个 $R$-定向。
我们定义 $E$ 的 **Euler 类**为
\[
e(E) = e(\mathrm{S}(E)) \in H^n (B;\ R).
\]
:::

Euler 类也是示性类，但它依赖于向量丛的定向。
因此，当 $R$ 不满足 $2R = 0$ 时，
Euler 类是 $\mathrm{B}\mathrm{SO}(n)$ 的上同调类，而不是 $\mathrm{B}\mathrm{O}(n)$ 的上同调类。

下面，我们介绍 Thom 类和 Euler 类的乘积公式。

::: proposition {@thm-2-product}
设 $E_1 \to B_1$ 和 $E_2 \to B_2$ 分别是 $R$-可定向的
$\mathbb{R}^{n_1}$-丛和 $\mathbb{R}^{n_2}$-丛，且选好了各自的定向。
则 $E_1 \times E_2 \to B_1 \times B_2$
也是已定向的向量丛。其 Thom 类是
\[
\begin{aligned}
  u (E_1 \times E_2)
  & = u (E_1) \otimes u(E_2) \\
  & \in \widetilde{H}^{n_1} (\mathrm{Th}(E_1)) \otimes \widetilde{H}^{n_2} (\mathrm{Th}(E_2)) \\
  & \subset \widetilde{H}^{n_1 + n_2} (\mathrm{Th}(E_1) \wedge \mathrm{Th}(E_2)) \\
  & \simeq \widetilde{H}^{n_1 + n_2} (\mathrm{Th}(E_1 \times E_2)),
\end{aligned}
\]
其中 $\wedge$ 表示带基点拓扑空间的压缩乘积（smash product）。在同样的意义下，我们还有
\[
e (E_1 \times E_2) = e (E_1) \otimes e (E_2).
\]
:::

::: proof
第一个结论是由于 $u (E_1) \otimes u (E_2)$ 在纤维上的限制是
\[
1 \otimes 1 \in \widetilde{H}^{n_1 + n_2} (S^{n_1} \wedge S^{n_2})
\simeq \widetilde{H}^{n_1 + n_2} (S^{n_1 + n_2}),
\]
由 Thom 类的唯一性就得到了等式。
第二个等式是由于 Euler 类是 Thom 类在底空间上的限制。
:::

::: corollary [乘积公式]
设 $E_1, E_2$ 是 $B$ 上的两个 $R$-可定向的向量丛，且选好了各自的定向。
则 $E_1 \oplus E_2$ 也是已定向的向量丛，且
\[
e (E_1 \oplus E_2) = e (E_1) \, e (E_2).
\]
:::

::: proof
$E_1 \oplus E_2$ 是向量丛 $E_1 \times E_2$
沿着对角映射 $B \hookrightarrow B \times B$ 的拉回。
而这正是定义上同调的杯积的方法。
因此，由上一结论，我们就完成了证明。
:::

## 主要定理的证明

现在，我们就开始证明 @thm-2-main 了。
我们需要一个结论，来帮助我们描述 Graßmann 流形的性质。

::: proposition {@thm-2-sbun}
可以选取合适的分类空间，使得有球丛
\[
\begin{array}{rcl}
  S^{ n - 1} \to & \mathrm{B} \mathrm{O}(n - 1) & \to \mathrm{B} \mathrm{O}(n), \\
  S^{2n - 1} \to & \mathrm{B} \mathrm{U}(n - 1) & \to \mathrm{B} \mathrm{U}(n), \\
  S^{4n - 1} \to & \mathrm{B} \mathrm{Sp} (n - 1) & \to \mathrm{B} \mathrm{Sp} (n).
\end{array}
\]
:::

::: proof
我们有球丛
\[
S^{n-1} \simeq \mathrm{O}(n) / \mathrm{O}(n-1)
\to \mathrm{E} \mathrm{O}(n) / \mathrm{O}(n - 1)
\to \mathrm{E} \mathrm{O}(n) / \mathrm{O}(n) \simeq \mathrm{B} \mathrm{O}(n).
\]
其中，中间一项同伦等价于 $\mathrm{B}\mathrm{O}(n - 1)$，因为 $\mathrm{E}\mathrm{O}(n)$ 可缩。
我们就得到了第一个球丛。
另外两个球丛是类似的。
:::

为使叙述简便，对 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$，我们分别记 $d = 1, 2, 4$，及
\[
G(n) = \mathrm{O}(n),\ \mathrm{U}(n),\ \mathrm{Sp}(n).
\]

::: corollary {@thm-2-bg-gysin}
设系数环 $R$ 是 $\mathbb{K}$-可定向的。则有 Gysin 序列
\[
\cdots \to H^{q - dn} (\mathrm{B} G(n))
\xrightarrow{\cup e} H^q (\mathrm{B} G(n))
\xrightarrow{p^*} H^q (\mathrm{B} G(n - 1)) \\
\xrightarrow{\int} H^{q - dn + 1} (\mathrm{B} G(n)) \to \cdots.
\]
:::

::: proof
$R$ 的可定向性蕴涵 @thm-2-sbun 给出的球丛是可定向的。
:::

::: proof [@thm-2-main 的证明]
我们先证明 $n = 1$ 的情况。此时，Graßmann 流形就是射影空间。因此，我们要证明
\[
H^\bullet (\mathbb{K} \mathrm{P}^\infty) \simeq R[x], \quad \deg x = d.
\]
在 @thm-2-bg-gysin 中取 $n = 1$，
并注意到 $\mathrm{B} G(0) \simeq \mathrm{B} \{*\} \simeq \{*\}$，我们得到同构
\[
{} \cup e \colon H^{q - d} (\mathrm{B} G(1)) \simeq H^q (\mathrm{B} G(1))
\quad (q \geq 2).
\]
当 $q = d = 1$ 时，这个映射也是同构，
因为在正合列中，它右边一项是 $0$，
它左边的映射 $p^* \colon H^0(\mathrm{B} G(1)) \to H^0(\mathrm{B} G(0))$ 是同构。
因此，我们就得到了
\[
H^\bullet(\mathrm{B} G(1)) \simeq R[e], \quad \deg e = d.
\]

下面考虑一般的情况。我们对 $n$ 归纳，假设我们已经证明了
\[
H^\bullet (\mathrm{B} G(n-1)) \simeq R[c_1, \dotsc, c_{n-1}], \quad \deg c_i = di.
\]
由 @thm-2-bg-gysin，当 $q \leq dn - 2$ 时，有同构
\[
p^* \colon H^q (\mathrm{B} G(n)) \simeq H^q (\mathrm{B} G(n-1)).
\]
我们断言当 $d = 1$，$q = dn - 1$ 时，这个映射也是同构。
我们先承认这个断言。则 $\mathrm{B} G(n-1)$ 的生成元 $c_1, \dotsc, c_{n-1}$
都在 $p^*$ 的像中。因此，环同态
\[
p^* \colon H^\bullet (\mathrm{B} G(n)) \to H^\bullet (\mathrm{B} G(n-1))
\]
是分裂的满射（这个分裂是自然的）。
这就把 @thm-2-bg-gysin 切成了分裂的短正合列
\[
0 \to H^{q - dn} (\mathrm{B} G(n))
\xrightarrow{\cup e} H^q (\mathrm{B} G(n))
\xrightarrow{p^*} H^q (\mathrm{B} G(n - 1)) \to 0.
\]
换言之，如果定义 $c_n = e$，那么对每个 $q$，都有
\[
H^q(\mathrm{B} G(n)) \simeq
H^q(\mathrm{B} G(n-1)) \oplus c_n \cdot H^{q - dn}(\mathrm{B} G(n)).
\]
这就蕴涵了要证的结论。

最后，我们补充上面的断言的证明。这时，我们的正合列（@thm-2-bg-gysin）是
\[
0 \to H^{n-1} (\mathrm{B}\mathrm{O}(n))
\xrightarrow{p^*} H^{n-1} (\mathrm{B} \mathrm{O} (n-1))
\xrightarrow{\int} H^0 (\mathrm{B} \mathrm{O} (n))
\xrightarrow{\cup e} H^n (\mathrm{B} \mathrm{O} (n)) \to \cdots.
\]
只需证明，其中的映射 ${} \cup e$ 是单射。
这等价于 $e$ 不是 $R$-挠元。
因此，我们只需找一个 $\mathbb{R}^n$-丛 $E$，使得 $e(E)$ 不是挠元。
我们找的例子是
\[
E = \mathrm{E} \mathrm{O} (1)^n \to \mathrm{B} \mathrm{O} (1)^n =: B.
\]
由 $n = 1$ 的情况，我们知道 $e (\mathrm{E} \mathrm{O} (1)) = e = w_1$ 不是 $R$-挠元。
因此，由 @thm-2-product，知
\[
e(E) = w_1^{\otimes n}
\in H^1(\mathrm{B} \mathrm{O} (1))^{\otimes n}
\subset H^n(\mathrm{B} \mathrm{O} (1)^n)
\]
不是 $R$-挠元。
:::

这个证明蕴涵了下面的重要结论。

::: corollary {@thm-2-top-equals-euler}
设 $E \to B$ 是 $\mathbb{K}^n$-丛，设 $R$ 是 $\mathbb{K}$-可定向的环。
则在 $\mathbb{K} = \mathbb{R}, \mathbb{C}, \mathbb{H}$ 时，分别有
\[
w_n(E) = e(E), \quad
c_n(E) = e(E), \quad
p_n(E) = e(E).
\]
:::
