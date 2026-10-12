---
title: 等变上同调
---

{@sect-11}

从这一节开始，我们介绍等变上同调的理论。
我们首先从代数拓扑的角度出发，建立这一理论，
然后把流形的等变上同调也用微分形式表示出来。
这个理论的一个有名的结论是 Atiyah–Bott 局部化公式，
这个公式把等变微分形式的积分化为不动点集上的积分。

## 等变上同调

设 $X$ 是拓扑空间，拓扑群 $G$ 左作用在 $X$ 上。
我们想要研究商空间 $X / G$，也就是所有轨道构成的空间。

一般来说，这个空间不具有好的性质。
但如果这个作用是**自由作用**，也就是说，它的轨道都同构于 $G$，
那么映射 $X \to X / G$ 就成为一个 $G$-主丛。
当 $G$ 是紧 Lie 群，$X$ 是紧流形时，
Lie 理论的一个著名定理说明，商空间 $X / G$ 也是流形。

代数拓扑中的一个重要的方法是做替换，以使坏的对象变成好的对象。
我们可以将一端有界的链复形替换成拟同构的投射或内射链复形（即消解），
也可以将任何的空间替换成弱同伦等价的 CW 复形（即 CW 逼近）。
同样的方法可以应用到带群作用的空间上。

::: definition
定义**同伦商**（homotopy quotient）
\[
X \mathbin{/^{\mathrm{h}}} G = X' / G,
\]
其中 $X'$ 是满足以下条件的空间：

- $G$ 自由地作用在 $X'$ 上，从而 $X' \to X'/G$ 是 $G$-主丛。

- 存在 $G$-等变的同伦等价 $X' \simeq X$。

:::

例如，我们可以取
\[
X' = X \times \mathrm{E} G,
\]
并令 $G$ 分别作用在两个分量上。

可以证明，同伦商在同伦等价的意义下是唯一的。

::: definition
设 $R$ 是系数环。则 $X$ 的**等变上同调**（equivariant cohomology）定义为
\[
H_G^\bullet (X; R) = H^\bullet (X \mathbin{/^{\mathrm{h}}} G; R)
\simeq H^\bullet \bigl( (X \times \mathrm{E} G) / G; R \bigr).
\]
:::

例如，我们有
\[
\begin{aligned}
  H_G^\bullet (G; R) & \simeq H^\bullet (\{*\}; R), \\
  H_G^\bullet (\{*\}; R) & \simeq H^\bullet (\mathrm{B} G; R).
\end{aligned}
\]

下面，再设 $E \to X$ 是 $G$-等变向量丛。
也就是说，$G$ 作用在全空间 $E$ 上，
元素 $g \in G$ 把纤维 $E_x$ 映到 $E_{g(x)}$，且这个映射是线性的。

我们可以把 $E$ 拉回到 $X'$ 上，得到 $G$-等变向量丛 $E' \to X'$。
例如，若取 $X' = X \times \mathrm{E} G$，则 $E' \simeq E \times \mathrm{E} G$。

我们取同伦商，得到向量丛
\[
\widetilde{E} = E \mathbin{/^{\mathrm{h}}} G \to X \mathbin{/^{\mathrm{h}}} G.
\]

::: definition
等变向量丛 $E \to X$ 的**等变示性类**（equivariant characteristic class）
就是向量丛 $\widetilde{E}$ 的示性类，它是 $H_G^\bullet (X; R)$ 的元素。
:::

## 等变微分形式

接下来，我们打算用微分形式来描述流形的等变上同调。
事实上，这不是一件容易的事，因为对 Lie 群 $G$ 来说，
空间 $\mathrm{E} G$ 通常不是流形，所以我们需要合理地实现
“$\mathrm{E} G$ 上的微分形式”这个不存在的概念。

设 $G$ 是紧 Lie 群，作用在紧流形 $M$ 上。设 $\mathfrak{g}$ 是 $G$ 的 Lie 代数。
每个元素 $X \in \mathfrak{g}$ 可以看作 $M$ 上的向量场。
这个操作定义了 Lie 代数同态
\[
\mathfrak{g} \to \bigl( \Gamma (TM), \ [ \ , \ ] \bigr).
\]

另外，$G$ 还可以作用在 $\Omega^\bullet (M)$ 上，每个元素 $g \in G$ 的作用是
\[
( g^{-1} )^* \colon \Omega^\bullet (M) \to \Omega^\bullet (M).
\]
然而，如果我们直接取在这一作用下不变的元素的集合
$\Omega^\bullet (M)^G \subset \Omega^\bullet (M)$，
并考虑它的上同调，我们并不能得到等变上同调。
例如，当 $M = \{*\}$ 时，我们希望得到 $H^\bullet (\mathrm{B} G)$，
但这个链复形仍然给出 $H^\bullet (\{*\})$。

因此，我们的目标是定义“de Rham 链复形”
\[
\text{``} \Omega^\bullet (M \times \mathrm{E} G) \text{''} \quad \text{和} \quad
\text{``} \Omega^\bullet \biggl( \frac {M \times \mathrm{E} G} {G} \biggr) \text{''}.
\]

即使 $G$ 在 $M$ 上的作用是自由的，
复形 $\Omega^\bullet (M/G)$ 也不等于 $\Omega^\bullet (M)^G$。
例如，我们考虑 $M = \mathbb{R}^2 = \mathbb{R} x \oplus \mathbb{R} y$，
并令 $G = \mathbb{R}$ 通过 $x$ 方向的平移作用在 $M$ 上。则
\[
\begin{aligned}
  \Omega^1 (M)^G &= \{ \, f(y) \, dx + g(y) \, dy \, \}, \\
  \Omega^1 (M/G) &= \{ \, g(y) \, dy \, \}.
\end{aligned}
\]
我们真正感兴趣的是第二种微分形式，
也就是下面定义中的 $\Omega^\bullet (M)_{\mathrm{bas}}$。

::: definition
微分形式 $\alpha \in \Omega^\bullet (M)$ 称为**水平**（horizontal）的，
如果对任意 $X \in \mathfrak{g}$，都有 $\iota_X \alpha = 0$。定义
\[
\begin{aligned}
  \Omega^\bullet (M)_{\mathrm{hor}} &= \{ \text{水平的形式} \}, \\
  \Omega^\bullet (M)_{\mathrm{bas}} &= \Omega^\bullet (M)_{\mathrm{hor}}^G ,
\end{aligned}
\]
其中，第二个空间中的微分形式叫做**基础**（basic）的。
:::

我们还需要描述什么是“$\Omega^\bullet (\mathrm{E} G)$”。
这一描述来自于 Lie 群的陈–Weil 理论。
我们回忆，示性类对应着曲率形式的不变多项式。对 Lie 群而言，这个对应关系意味着
\[
H^\bullet (\mathrm{B} G; \mathbb{C}) \simeq \mathbb{C} [\mathfrak{g}]^G,
\]
这里 $\mathbb{C} [\mathfrak{g}] \simeq \operatorname{Sym}^\bullet \mathfrak{g}^\vee$
是 $(\dim \mathfrak{g})$-元多项式环，
而 $G$ 通过伴随作用
\[
\operatorname{Ad}_g (X) = g X g^{-1} \quad (g \in G, \ X \in \mathfrak{g})
\]
作用在这个多项式环上。
也就是说，我们把 $\mathbb{C} [\mathfrak{g}]$ 的元素看成是万有丛
$\mathrm{E} G \to \mathrm{B} G$ 的“曲率形式”的多项式。

::: definition
Lie 代数 $\mathfrak{g}$ 的 **Weyl 代数**定义为交换超代数
\[
W^\bullet (\mathfrak{g}) = \operatorname{Sym}^\bullet \mathfrak{g}^\vee
\otimes {\wedge^\bullet \, \mathfrak{g}^\vee},
\]
其中，在第一项中 $\mathfrak{g}^\vee$ 的分次为 $2$，
在第二项中 $\mathfrak{g}^\vee$ 的分次为 $1$。
:::

这个定义的意义如下。
设 $X_1, \dotsc, X_n$ 是 $\mathfrak{g}$ 的一组基，
则 Weyl 代数的定义式中，
两个 $\mathfrak{g}^\vee$ 的生成元分别记为 $\Omega^i$ 和 $\omega^i$。元素
\[
\begin{aligned}
  \omega &= \textstyle \sum_i \omega^i \otimes X_i
    && \in W^1 (\mathfrak{g}) \otimes \mathfrak{g}, \\
  \Omega &= \textstyle \sum_i \Omega^i \otimes X_i
    && \in W^2 (\mathfrak{g}) \otimes \mathfrak{g},
\end{aligned}
\]
分别称为**万有联络**（universal connection）
和**万有曲率**（universal curvature）。
事实上，对任意的 $G$-主丛 $E \to B$，若选好一个联络，
则存在唯一的映射
\[
W^\bullet (\mathfrak{g}) \to \Omega^\bullet (E),
\]
使得 $\omega$ 和 $\Omega$ 在
$\Omega^\bullet (E, \mathfrak{g}) \simeq \Omega^\bullet (E) \otimes \mathfrak{g}$
中的像就是 $E$ 的联络和曲率形式。
（注意，主丛的联络形式是能在整体上定义的，这与向量丛的联络形式不同。）

这个万有性质说明，Weyl 代数 $W^\bullet (\mathfrak{g})$
就是我们要找的“$\Omega^\bullet (\mathrm{E} G)$”。

为了真正地将这两者等同起来，我们还需要在
$W^\bullet (\mathfrak{g})$ 上定义外微分和缩并。
我们定义
\[
\begin{aligned}
  \iota_j \omega^i &= \delta_j^i,
    & d \omega^i &= \Omega^i - \frac12 c^i_{jk} \, \omega^j \wedge \omega^k, \\
  \iota_j \Omega^i &= 0,
    & d \Omega^i &= c^i_{jk} \Omega^j \wedge \omega^k,
\end{aligned}
\]
其中 $c^i_{jk}$ 是 $\mathfrak{g}$ 的结构常数。
这么定义是为了满足 $\Omega = d \omega + (1/2) [\omega, \omega]$，
以及 Bianchi 恒等式 $d \Omega = [\Omega, \omega]$。
这样，我们就有
\[
W^\bullet (\mathfrak{g})_{\mathrm{hor}} = \mathbb{C} [\mathfrak{g}], \quad
W^\bullet (\mathfrak{g})_{\mathrm{bas}} = \mathbb{C} [\mathfrak{g}]^G
\simeq H^\bullet (\mathrm{B} G) .
\]

::: definition
$M$ 上的**等变微分形式**（equivariant differential form）是指
\[
\Omega_G^\bullet (M) = \bigl(
\Omega^\bullet (M) \otimes W^\bullet (\mathfrak{g})
\bigr)_{\mathrm{bas}}
\]
的元素。这个链复形的上同调
\[
H_G^\bullet (M) = H^\bullet \bigl( \Omega_G^\bullet (M), d \bigr)
\]
称为 $M$ 的**等变 de Rham 上同调**。
:::

可以证明，等变 de Rham 上同调和通过代数拓扑定义的等变上同调是同构的。

等变微分形式还有另一种看上去不太相同的定义。

::: proposition
我们有
\[
\Omega_G^\bullet (M) \simeq
\bigl( \operatorname{Sym}^\bullet \mathfrak{g}^\vee \otimes
\Omega^\bullet (M) \bigr)^G ,
\]
其中右边的 $\mathfrak{g}^\vee$ 的分次是 $2$。
等号左边的外微分 $d$ 对应右边的算子
\[
d - \iota \colon \alpha (X) \mapsto d \alpha (X) - \iota_X \alpha (X),
\]
这里 $\alpha$ 看作从 $\mathfrak{g}$ 到 $\Omega^\bullet (M)$
的多项式映射。
:::

::: proof
只需要证明
\[
\bigl( \wedge^\bullet \, \mathfrak{g}^\vee \otimes \Omega^\bullet (M)
\bigr)_{\mathrm{hor}} \simeq \Omega^\bullet (M),
\]
这样，在两边与 $\mathbb{C} [\mathfrak{g}]$ 做张量积，并取 $G$-不变的部分，
就得到了要证明的同构。

我们定义从左边到右边的映射为取出 $1 \otimes \Omega^\bullet (M)$ 的部分，
也就是说，将所有 $\omega^i$ 都映到 $0$。
我们把这个映射叫做 $\varepsilon$。

再来定义它的逆映射 $\varepsilon^{-1}$。
也就是说，给定 $M$ 上的形式，我们要找出它在 $\wedge^{>0} \, \mathfrak{g}^\vee$
中缺失的部分，使得它变成水平的。我们定义
\[
\varepsilon^{-1} = \prod_i {} (1 - \omega^i \iota_i).
\]
因为 $\iota_i \omega^i = 1$，所以 $\iota_i \circ (1 - \omega^i \iota_i) = 0$，
从而 $\iota_i \circ \varepsilon^{-1} = 0$。
这说明我们确实给出了 $\varepsilon$ 的逆映射。

最后，我们来计算微分 $d_{\mathfrak{g}} = \varepsilon{} d \varepsilon^{-1}$。
若 $\alpha \in \Omega^\bullet (M)$，我们有
\[
\begin{aligned}
  d_{\mathfrak{g}} \alpha
  &= \varepsilon{} d \bigl( \alpha - \omega^i \iota_i \alpha +
    \omega^i \iota_i \omega^j \iota_j \alpha - \cdots \bigr) \\
  &= \varepsilon \bigl( d \alpha - (d \omega^i) \, \iota_i \alpha
    + (\text{含 } \omega^i \text{ 的项}) \bigr) \\
  &= d \alpha - \Omega^i \iota_i \alpha.
\end{aligned}
\]
由于我们把 $\Omega^i$ 视为 $\alpha (X)$ 中的 $X$ 方向，
我们就证明了要证的等式。
:::

通过这个命题，我们可以写下等变微分形式的第二种定义。

::: definition
$M$ 上的**等变微分形式**是一个多项式映射
\[
\alpha \colon \mathfrak{g} \to \Omega^\bullet (M),
\]
它在 $G$ 的作用下不变。换言之，对任意 $g \in G$，$X \in \mathfrak{g}$，有
\[
\alpha (\operatorname{Ad}_g X) = g \cdot \alpha (X).
\]
$\alpha$ 的**等变外微分**是
\[
d_{\mathfrak{g}} \alpha (X) = d \alpha (X) - \iota_X \alpha (X).
\]
:::

当然，这一定义的动机是之前的那一个定义。

::: example
如果 $M = \{ * \}$，那么等变微分形式就是一个元素
\[
\alpha \in \mathbb{C}[\mathfrak{g}]^G ,
\]
也就是 $\mathfrak{g}$ 上的一个 $G$-不变多项式。
这和我们的预期是一致的。

再例如，设 $G$ 是交换 Lie 群。则伴随作用 $\operatorname{Ad}$ 是平凡的，
从而，一个等变微分形式就确实是一族 $G$-不变的微分形式。
:::

## 等变辛形式

下面，我们来了解等变微分形式的一个例子，即等变辛形式。

设 $(M, \omega)$ 是辛流形。也就是说，$M$ 是偶数维流形，
$\omega$ 是 $M$ 上的闭 $2$-形式，它定义的切空间上的双线性型是非退化的。
一个典型的例子是
\[
\textstyle M = T^* N, \quad \omega = \sum_i dx^i \wedge dp^i,
\]
其中 $N$ 是流形，$dx^i$ 是 $N$ 的切向，
而 $dp^i$ 是余切丛 $T^* N$ 中 $dx^i$ 所对应的方向。
这样定义的 $\omega$ 不依赖于坐标的选取。

在 Hamilton 力学中，若 $N$ 是一个力学系统的位置空间，
那么余切丛 $T^* N$ 的纤维就是相应的动量空间。
力学系统的 **Hamilton 函数**（Hamiltonian）
\[
H \colon M = T^* N \to \mathbb{R}
\]
指定了每个状态的总能量，即动能与势能的和。
系统随时间的演化由 $M$ 上的 **Hamilton 向量场**
\[
X_H = \omega^{-1} (dH)
\]
的流给出，其中 $\omega^{-1}$ 表示每个点处的同构
$\omega_x \colon T_x M \to T_x^* M$ 的逆映射。

设 Lie 群 $G$ 作用在 $M$ 上，并保持其辛形式，
这个作用描述了力学系统的一些对称性。

::: definition
设 $(M, \omega)$ 是辛流形，$G$ 是 Lie 群。
一个 **Hamilton 作用**是指二元组
$(G \curvearrowright M, \ \mu)$，满足以下条件：

- 辛形式 $\omega$ 在 $G$ 的作用下不变。

- $\mu \colon \mathfrak{g} \to C^\infty (M)$ 是等变微分形式，也就是说，它满足
  \[
  \mu (\operatorname{Ad}_g (X)) \, (x) = \mu (X) \, (g^{-1} x)
  \quad (g \in G, \ X \in \mathfrak{g}, \ x \in M).
  \]
  映射 $\mu$ 被称为**动量映射**（moment map）。

- 对任意 $X \in \mathfrak{g}$，函数 $\mu (X)$ 的 Hamilton 向量场是 $X$，
  也就是说，
  \[
  \omega^{-1} (d \mu(X)) = X.
  \]

:::

我们通过一个例子来解释这个定义的意义。
这个例子也是“动量映射”这一称呼的来源。

::: example
我们仍考虑辛流形 $M = T^* N$，其中 $N$ 是 Riemann 流形。
我们把 $N$ 看作系统的位置空间。
令 $G$ 通过等距自同构作用在 $N$ 上。
例如，可以取 $N = \mathbb{R}^3$，$G = \mathrm{SO} (3)$。

定义动量映射
\[
\mu (X) \, (\xi) = -\langle \xi, X \rangle_N \quad (\xi \in T^* M).
\]
每个点 $\xi$ 描述了系统的位置和动量，
而 $\mu (X) \, (\xi)$ 就是这个动量沿 $X$ 方向的分量。
通过动量映射，我们也得到了一个元素
\[
\mu (\xi) \in \mathfrak{g}^\vee .
\]
当 $N = \mathbb{R}^3$，$G = \mathrm{SO} (3)$ 时，
这个 $\mathfrak{so} (3)^\vee$ 的元素就是质点的**角动量**。
:::

通过动量映射，我们可以把辛形式 $\omega$ 变成等变微分形式。

::: definition {@def-11-equivar-symp-form}
沿用上面的记号，我们定义 $M$ 的**等变辛形式**为
\[
\widetilde{\omega} = \mu + \omega,
\]
它将元素 $X \in \mathfrak{g}$ 映到微分形式 $\mu (X) + \omega$。
:::

形式 $\widetilde{\omega}$ 确实是等变闭形式，因为
\[
d_{\mathfrak{g}} \widetilde{\omega}
= d \mu (X) + d \omega - \iota_X \omega = 0.
\]
特别地，它确定了一个等变上同调类。

::: remark {@rmk-11-geo-quant}
**几何量子化**（geometric quantisation）是数学物理中的一个著名的方法。
给定一个经典力学系统，即辛流形，我们想要构造对应的量子力学系统，
这就是量子化问题。
几何量子化的第一步就是寻找一个 Hermite 线丛，使得其曲率等于 $\mathrm{i} \omega$，
其中 $\omega$ 是辛形式，然后将量子态定义为这个线丛的截面。
在 $G$-等变的情形下，
要考虑的辛形式 $\omega$ 就是我们定义的等变辛形式 $\widetilde{\omega}$。
:::

## 等变示性类

下面，设 $E \to M$ 是一个 $G$-等变的超向量丛。
我们想要通过等变微分形式，来描述 $E$ 的等变示性类。

首先，我们定义 $E$-取值的等变微分形式的代数：
\[
\Omega_G^\bullet (M, E) = \bigl( \operatorname{Sym}^\bullet \mathfrak{g}^\vee \otimes
\Omega^\bullet (M, E) \bigr)^G .
\]
当然，等变微分形式也可以看成 $\mathfrak{g} \to \Omega^\bullet (M, E)$ 的多项式。

我们也定义等变联络的概念，使得它与等变微分形式的外微分 $d_{\mathfrak{g}}$ 相容。

::: definition
设 $\nabla$ 是 $E$ 上的一个 $G$-不变的超联络。我们定义
\[
\begin{aligned}
  \nabla_{\mathfrak{g}} \colon \Omega_G^\bullet (M, E) &\to \Omega_G^\bullet (M, E), \\
  \alpha (X) &\mapsto \nabla \alpha (X) - \iota_X \alpha (X),
\end{aligned}
\]
从而，它满足以下 Leibniz 法则：对齐次元素
$\omega \in \Omega_G^\bullet (M)$，$\alpha \in \Omega_G^\bullet (M, E)$，
\[
\nabla_{\mathfrak{g}} (\omega \wedge \alpha)
= d_{\mathfrak{g}} \omega \wedge \alpha
+ (-1)^{|\omega|} \, \omega \wedge \nabla_{\mathfrak{g}} \alpha.
\]
映射 $\nabla_{\mathfrak{g}}$ 称为一个 $G$-**等变超联络**。
:::

从等变联络出发，我们可以定义等变曲率，
并通过等变曲率的不变多项式得到等变示性类。

::: definition
等变超联络 $\nabla_{\mathfrak{g}}$ 的**等变曲率**
$\Omega_{\mathfrak{g}} \in \Omega_G^\bullet (M, \operatorname{End} (E))$ 定义为
\[
\Omega_{\mathfrak{g}} \alpha (X) = \nabla_{\mathfrak{g}}^2 \alpha (X) + \mathscr{L}_X \alpha (X),
\]
其中 $\alpha \in \Omega_G^\bullet (M, E)$，记号 $\mathscr{L}_X$ 表示 Lie 导数。
:::

这里，加入 Lie 导数的项是为了使 $\Omega_{\mathfrak{g}}$ 成为一个张量（即零阶微分算子）。
事实上，当原先的联络 $\nabla$ 是普通联络时，我们有
\[
\begin{aligned}
  \Omega_{\mathfrak{g}} \alpha (X)
  &= \nabla^2 \alpha (X) - [\nabla, \iota_X] \, \alpha (X) + \mathscr{L}_X \alpha (X) \\
  &= \Omega \alpha (X) - \nabla_X \alpha (X) + \mathscr{L}_X \alpha (X)
\end{aligned}
\]
其中 $\Omega$ 是 $\nabla$ 的曲率形式。
特别地，当 $E = \wedge^\bullet \, T^* M$ 且 $\nabla = d$ 时，
Cartan 公式说明 $[d, \iota_X] = \mathscr{L}_X$，从而 $\Omega_{\mathfrak{g}} = 0$。

::: remark {@rmk-11-moment-map}
参照 @def-11-equivar-symp-form，我们可以定义**动量映射**
$\mu \colon \mathfrak{g} \to \Gamma(\operatorname{End} (E))$ 为
\[
\mu (X) = \Omega_{\mathfrak{g}} (X) - \Omega.
\]
当 $\nabla$ 是普通联络时，它就等于 $\mathscr{L}_X - \nabla_X$。
我们已经在 @rmk-11-geo-quant 中提到了曲率形式与辛形式的关系。
:::

接下来，我们来建立等变上同调的陈–Weil 理论。

::: theorem
设 $f \in \mathbb{C} [x]$ 是多项式。
则等变微分形式 $\operatorname{tr}_{\mathrm{s}} f(\Omega_{\mathfrak{g}})$ 是
$d_{\mathfrak{g}}$-闭的，
并且，它决定的等变上同调类不依赖于超联络的选取。
:::

::: proof
和非等变的情形类似，对 $\alpha \in \Omega_G^\bullet (M, \operatorname{End}(E))$，我们有
\[
d_{\mathfrak{g}} \operatorname{tr}_{\mathrm{s}} \alpha = \operatorname{tr}_{\mathrm{s}} (\nabla_{\mathfrak{g}} \alpha).
\]
由于 $\nabla_{\mathfrak{g}} \Omega_{\mathfrak{g}} = 0$，我们有
\[
d_{\mathfrak{g}} \operatorname{tr}_{\mathrm{s}} f(\Omega_{\mathfrak{g}}) = \operatorname{tr}_{\mathrm{s}} (\nabla_{\mathfrak{g}} f(\Omega_{\mathfrak{g}})) = 0.
\]

定理最后一部分的证明和 @thm-5-conn-indep 的证明同理。
:::

::: corollary [等变陈–Weil 理论]
等变曲率形式 $\Omega_{\mathfrak{g}}$ 的不变多项式给出了等变示性类，
通过这种方式，不变多项式能与等变示性类一一对应。
:::

例如，我们可以定义**等变陈特征**
\[
\operatorname{ch}_{\mathfrak{g}} (E) \, (X) = \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{- \Omega_{\mathfrak{g}} (X)},
\]
或者采用 @eq-9-ch-redef 之前的约定，
定义为
$\operatorname{tr}_{\mathrm{s}} \mathrm{e}^{\Omega_{\mathfrak{g}} (X) / 2 \mathrm{π} \mathrm{i}}$。

我们也可以定义**等变 Euler 类**
\[
e_{\mathfrak{g}} (E) \, (X) = \operatorname{pf} (-\Omega_{\mathfrak{g}} (X)).
\]
我们在 @sect-6 中介绍的 Mathai–Quillen 理论也有等变的版本，
也就是构造出等变 Thom 类。这里，我们就不详细介绍了。

## Кириллов 公式

上一节，我们概述了等变指标定理（@thm-10-equivar-index-thm）
的证明。我们把等变指标表示成了不动点集上的积分：
\[
\operatorname{ind} (\gamma, D) = \int_{M^\gamma}
\frac {(-1)^{n_1 / 2}} {(2 \mathrm{π} \mathrm{i})^{n_0 / 2}} \, T_M \left( \frac
  {\widehat{A} (M^\gamma) \operatorname{ch} (\gamma, W)}
  {\operatorname{ch} (\gamma, S(N))}
\right) \, dx.
\]

事实上，如果我们从等变示性类出发，
我们也能得到等变指标的一个表达式，它将等变指标写成等变示性类在整个 $M$ 上的积分。

设紧 Lie 群 $G$ 作用在偶数维紧可定向 Riemann 流形 $M$ 上，
保持其度量和定向。设 $\mathfrak{g}$ 是 $G$ 的 Lie 代数。
设 $D$ 是等变 Clifford 模 $E \to M$ 上的等变 Dirac 算子。

::: theorem [Кириллов 公式] {@thm-11-kirillov}
设 $X \in \mathfrak{g}$ 是 $0$ 附近的元素。则
\[
\operatorname{ind} (\mathrm{e}^{-X}, D) = \frac {1} {(2 \mathrm{π} \mathrm{i})^{n/2}}
\int_M \widehat{A}_{\mathfrak{g}} (M) \, (X) \operatorname{ch}_{\mathfrak{g}} (W) \, (X).
\]
:::

注意到，这个表达式其实就是在 @thm-9-atiyah-singer 中，
把示性类换成等变示性类得到的结果。

我们给出了等变指标的两个表达式，
它们是有联系的。这一联系就是下一节中将要介绍的局部化公式，
这个公式把等变微分形式的积分转换为不动点集合上的积分。
通过局部化公式，我们能从 @thm-10-equivar-index-thm
推出 @thm-11-kirillov。详细过程可见 [@bgv, §8.1]。

Кириллов 公式还有另一个证明方法，也就是模仿 @thm-9-atiyah-singer 的证明过程，
对等变热核做渐进展开，但仅考虑 $G$ 的无穷小作用，就能得到等变示性类。
详细的证明可见 [@bgv, §8.3]。
