---
title: 指标定理（上）
---

{@sect-9}

在这一节中，我们将前两节的内容整合起来，证明 Atiyah–Singer 指标定理。

## Dirac 算子的指标

在这一小节中，设 $M$ 是紧 Riemann 流形，
$E \to M$ 是带有 Riemann 或 Hermite 度量的超向量丛
（我们要求 $E^+ \perp E^-$），并考虑 $E$ 上的**自伴随** Dirac 算子 $D$。
也就是说，我们有
\[
D = \biggl( \, \begin{matrix}
  0 & D^- \\ D^+ & 0
\end{matrix} \, \biggr), \quad D^- = (D^+)^*,
\]
其中 $D^{\pm} \colon E^{\pm} \to E^{\mp}$。
例如，@eg-8-dirac-d-dstar 给出的例子 $d + d^*$ 和 $\overline{\partial}{} + \overline{\partial}{}^*$
都是自伴随 Dirac 算子。

::: definition
自伴随 Dirac 算子 $D$ 的**指标**（index）是
\[
\begin{aligned}
  \operatorname{ind} (D) &= \operatorname{dim}_{\mathrm{s}} \ker D \\
  &= \dim \ker D^+ - \dim \ker D^- \\
  &= \dim \ker D^+ - \dim \operatorname{coker} D^+.
\end{aligned}
\]
:::

$D$ 的指标是有限的，因为
\[
D^2 = D^+ D^- + D^- D^+
\]
是广义 Laplace 算子，它是二阶椭圆算子，
而分析学告诉我们如下事实：

::: proposition [事实]
算子 $D^2$ 定义了 Hilbert 空间 $\Gamma_{L^2} (E)$ 上的一个无界算子。
它将整个空间分成无限个特征子空间的 Hilbert 直和，
每个特征子空间都是有限维的，且由光滑截面构成。
特别地，它的核是有限维的。
通过特征子空间分解，我们能定义算子
\[
K_t = \mathrm{e}^{-t D^2}.
\]
它是一个**迹类算子**（trace-class operator），
也就是说，它的迹是有限的。特别地，它是紧算子。
:::

定理的证明可参见 [@lawson-michelsohn, 定理 III.3.8]。
这里的 $K_t$ 与 @sect-7 中一样，给出了热方程初值问题的解。

我们取 $\Gamma_{L^2} (E)$ 的标准正交基 $\{ e_i \}_{i=1}^\infty$，使得
\[
D^2 e_i = \lambda_i \, e_i, \quad \text{从而} \quad
\mathrm{e}^{-t D^2} \, e_i = \mathrm{e}^{-t \lambda_i} \, e_i.
\]
则每个 $e_i$ 都是光滑截面。不难算出，算子 $D^2$ 的热核是

```math {@eq-9-heat-ker}
k_t (x, y) = \sum_i \mathrm{e}^{-t \lambda_i} \, e_i (x) \otimes e_i^* (y),
```

这里 $e_i^*$ 是 $E^\vee$ 的截面，
它等于 $e_i$ 的对偶基乘以 $\mathrm{vol}(M)^{-1}$，
从而它与 $e_i$ 的配对的积分等于 $1$。

::: theorem [McKean–Singer] {@thm-9-mckean-singer}
设 $k_t$ 是算子 $D^2$ 的热核。则对任意 $t > 0$，都有
\[
\operatorname{ind} (D) = \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-t D^2} = \int_M \operatorname{tr}_{\mathrm{s}} k_t (x, x) \, dx.
\]
:::

::: proof
注意到 $D^2$ 是偶算子，即它分别作用在两个空间 $V^{\pm} = \Gamma_{L^2} (E^{\pm})$ 上。

记 $V_\lambda^{\pm} \subset V^{\pm}$ 是 $D^2$ 的 $\lambda$-特征子空间。
则复合映射
\[
V_\lambda^+ \overset{D^+}{\longrightarrow}
V_\lambda^- \overset{D^-}{\longrightarrow} V_\lambda^+
\]
是乘以 $\lambda$。因此，当 $\lambda \neq 0$ 时，
$V_\lambda^+ \simeq V_\lambda^-$，从而
\[
\operatorname{tr}_{\mathrm{s}} {} \bigl( \mathrm{e}^{-t D^2} |_{V_\lambda} \bigr)
= \mathrm{e}^{-t \lambda^2} \operatorname{dim}_{\mathrm{s}} V_\lambda = 0.
\]
这就说明
\[
\operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-t D^2} = \operatorname{tr}_{\mathrm{s}} {} \bigl( \mathrm{e}^{-t D^2} |_{\ker D} \bigr )
= \operatorname{dim}_{\mathrm{s}} \ker D = \operatorname{ind} (D),
\]
这就证明了第一个等号。

第二个等号是因为，由热核的表达式 @eq-9-heat-ker，有
\[
\begin{aligned}
  \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-t D^2}
  &= \sum_i \pm \mathrm{e}^{-t \lambda_i} \\
  &= \sum_i \int_M \mathrm{e}^{-t \lambda_i}
    \operatorname{tr}_{\mathrm{s}} \bigl( e_i (x) \otimes e_i^\vee (x) \bigr) \, dx \\
  &= \int_M \operatorname{tr}_{\mathrm{s}} k_t (x, x) \, dx.
\end{aligned}
\]
:::

也就是说，Dirac 算子的指标等于热核的迹。
我们将在表达式中令 $t \to 0$，这样，@sect-7 中所做的渐进展开就能派上用场。

## Atiyah–Singer 指标定理

我们回到上一节的设定。
设 $M$ 是偶数维紧旋量流形，$E \to M$ 是复 Clifford 模。
定义 $W = \operatorname{Hom}_{\operatorname{Cl} (M)} (S, E)$，从而
\[
E \simeq S \otimes W.
\]
设 $D$ 是 $E$ 上的 Dirac 算子，
它对应的 Clifford 超联络（@thm-8-dirac-cliff-conn）记为 $\nabla^E$。
由 @thm-8-cliff-conn，可以将 $\nabla^E$ 写成
\[
\nabla^E = \nabla^S + \nabla^W
\]
的形式，其中 $\nabla^S, \nabla^W$ 分别是 $S$ 和 $W$ 上的联络。则 $\nabla^E$ 的曲率是

```math {@eq-9-curv-sum}
\Omega^E = (\nabla^S + \nabla^W)^2 = \Omega^S + \Omega^W,
```

这是因为在 $S \otimes W$ 上，
$\nabla^S \nabla^W + \nabla^W \nabla^S = [\nabla^S, \nabla^W] = 0$。

我们考虑算子 $D^2$ 的热核 $k_t$ 在对角线上的幂级数展开
\[
k_t (x, x) \sim \frac {1} {(4 \mathrm{π} t)^{n/2}} \sum_{i=0}^\infty t^i k_i (x),
\]
其中 $k_i \in \Gamma (\operatorname{End} (E))$。我们回忆上一节定义的同构
\[
\Gamma (\operatorname{End} (E))
\simeq \Gamma \bigl( \operatorname{End} (S) \otimes \operatorname{End} (W) \bigr)
\simeq \Gamma \bigl( \operatorname{Cl} (M) \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr) \\ [6pt]
\overset{\sigma}{ \underset{\simeq}{\longrightarrow} }
  \Gamma \bigl( \wedge^\bullet \, T^* M \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr)
\simeq \Omega^\bullet \bigl( M, \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr),
\]
其中 $\sigma$ 是 @eg-8-symbol-map 中的映射。
因此，我们得到相应的微分形式
\[
\sigma (k_i) \in \Omega^\bullet \bigl( M, \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr).
\]

::: theorem {@thm-9-ahat-ch}
沿用上面的记号，假设 $\nabla^W$ 是普通的联络。
则微分形式 $\sigma (k_i)$ 的最高次数是 $2i$，
且其 $2i$ 次的部分与
\[
\widehat{A} (M) \, \mathrm{e}^{-\Omega^W}
\]
的 $2i$ 次部分相同，其中 $\widehat{A} (M)$ 称为 **$\widehat{A}$ 类**（$\widehat{A}$-genus），
定义为
\[
\widehat{A} (M) = \operatorname{det}\nolimits^{1/2} \frac {\Omega/2} {\sinh \Omega/2},
\]
这里 $\operatorname{det}\nolimits^{1/2} (-)$ 的意义是形式幂级数
$\exp \operatorname{tr} \bigl( 2^{-1} \log (-) \bigr)$。
:::

这个定理将在下一节证明，其证明方法就是利用 @sect-7 中的 $\Phi_i$ 进行计算。

利用这个公式计算 $\operatorname{ind} (D)$，就能得到指标定理。
事实上，由 @thm-9-mckean-singer，我们有
\[
\operatorname{ind} (D) = \int_M \operatorname{tr}_{\mathrm{s}} k_t (x, x) \, dx
\sim \frac {1} {(4 \mathrm{π} t)^{n/2}} \sum_{i \geq n/2} t^i \int_M \operatorname{tr}_{\mathrm{s}} k_i (x) \, dx,
\]
这里，注意 $i < n/2$ 时 $k_i (x)$ 不含 $n$-形式，故积分为 $0$。
在式中令 $t \to 0$，得到

```math {@eq-9-trs-kn2}
\operatorname{ind} (D) = \frac {1} {(4 \mathrm{π})^{n/2}} \int_M \operatorname{tr}_{\mathrm{s}} k_{n/2} (x) \, dx.
```

定理中的 $\mathrm{e}^{-\Omega^W}$ 一项，我们将它的迹定义为**陈特征**

```math {@eq-9-ch-redef}
\operatorname{ch} (W) = \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-\Omega^W}.
```

这一定义与 @sect-6 中不同，
我们当时的定义是 $\operatorname{tr}_{\mathrm{s}} \mathrm{e}^{\Omega^W / 2 \mathrm{π} \mathrm{i}}$。
从现在开始，我们采用新的定义。
这一修改不会影响陈特征的加性和乘性。

将 @thm-9-ahat-ch 与 @eq-9-trs-kn2 结合起来，
我们就证明了指标定理。

::: theorem [Atiyah–Singer 指标定理] {@thm-9-atiyah-singer}
设 $M$ 是偶数维紧旋量流形，$E \simeq S \otimes W$ 是 $M$ 上的复 Clifford 模，
$D$ 是 $E$ 上的 Dirac 算子。则
\[
\operatorname{ind} (D) = \frac {1} {(2 \mathrm{π} \mathrm{i})^{n/2}}
\int_M \widehat{A} (M) \operatorname{ch} (W).
\]
:::

::: proof
我们只需解释系数的变化。这是因为，$k_{n/2}$ 的迹是在 $E$ 上取的，
但 $\mathrm{e}^{-\Omega^W}$ 的迹，即陈特征，却是在 $W$ 上取的。
这两种迹满足如下关系：若 $V$ 是偶数维欧氏空间，
$a \in \operatorname{Cl} (V) \otimes \mathbb{C} \simeq \operatorname{End} (S)$，那么
\[
\operatorname{tr}_{\mathrm{s}}^S (a) = (-2 \mathrm{i})^{n/2} \, T( \sigma(a) ),
\]
这里 $T$ 是 Березин 积分，$n = \dim V$。
这一公式不难验证 [@bgv, 命题 3.21]。
因此，若 $E$ 是 $\operatorname{Cl} (V)$-模，$k \in \operatorname{End} (E)$，那么

```math {@eq-9-tre-trw}
\operatorname{tr}_{\mathrm{s}}^E (k) = (-2 \mathrm{i})^{n/2} \operatorname{tr}_{\mathrm{s}}^W ( T \sigma (k) ).
```

:::

::: remark
定理的条件可以放宽：事实上，$M$ 不必具有旋量结构，只需可定向即可。
这是因为，$M$ 局部上总是具有旋量结构，而热核的迹的积分可以在局部上计算。
此时，$W$ 也只能局部地定义，但 $\operatorname{ch} (W)$ 在局部上定义好之后，
就自动变成了整体的微分形式。
:::

下面，我们介绍指标定理的几个有名的应用。

## de Rham 算子

在这一小节中，我们对 de Rham 算子 $D = d + d^*$ 应用指标定理，
来重新证明陈–Gauß–Bonnet 公式。

::: notation {@def-9-b-and-c}
设 $V$ 是 $n$ 维欧氏空间，$v \in V$，
$\alpha \in \wedge^\bullet \, V$。记
\[
b (v) \, \alpha = v \wedge \alpha + \iota_v \alpha, \quad
c (v) \, \alpha = v \wedge \alpha - \iota_v \alpha,
\]
其中 $\iota_v = Q(v, -) \mathbin{\lrcorner} {}$ 是缩并。
将它们延拓到整个 Clifford 代数上，
我们得到了 $\wedge^\bullet \, V$ 的两个 Clifford 模结构
\[
b, c \colon \operatorname{Cl} (V) \to \operatorname{End} (\wedge^\bullet \, V).
\]
我们将 $c$ 给出的模结构视为默认的。这样，
如果 $\wedge^\bullet \, V \otimes \mathbb{C} = E \simeq S \otimes W$，
那么对任意 $a \in \operatorname{Cl} (V)$，都有
\[
b(a) \in \operatorname{End}_{\operatorname{Cl} (V)} (E) \simeq \operatorname{End} (W), \quad
c(a) \in \operatorname{End} (S) \subset \operatorname{End} (E).
\]
:::

::: lemma {@thm-9-tr-exp-b}
设 $V$ 是 $n$ 维欧氏空间，$n$ 为偶数。
则如果 $a \in \operatorname{Cl} (V)_2$ 为 $2$ 阶元素，那么
\[
\begin{aligned}
  \operatorname{tr}_{\mathrm{s}}^W \bigl( \exp b(a) \bigr)
  &= (-2 \mathrm{i})^{n/2} \operatorname{det}\nolimits^{1/2} \biggl( \frac{\sinh a/2}{a/2} \biggr)
    \operatorname{pf} \Bigl( \frac{a}{2} \Bigr), \\
  \operatorname{tr}^W \bigl( \exp b (a) \bigr)
  &= 2^{n/2} \operatorname{det}\nolimits^{1/2} \Bigl( \cosh \frac{a}{2} \Bigr).
\end{aligned}
\]
:::

::: proof
引理的证明是纯粹的计算 [@bgv, 引理 4.4]。
我们忽略计算过程。
:::

::: lemma {@thm-9-omega-s}
在 @eq-9-curv-sum 中，在局部坐标下，我们有
\[
\Omega^S = -\frac14 \Omega_{ij} \, c^i c^j,
\]
其中 $\Omega_{ij} = \Omega_i^k g_{jk}$ 是 $M$ 的曲率形式，
$c^i$ 是 $\operatorname{Cl} (M) \otimes \mathbb{C} \simeq \operatorname{End} (S)$ 的截面。
:::

::: proof
我们回忆 $\nabla^S$ 的定义（@thm-8-nabla-s）。
标架丛 $\mathrm{SO} (T^* M)$ 的联络形式是
\[
\omega^{\mathrm{SO} (T^* M)} = - \frac12 \omega_{ij} \, dx^i \wedge dx^j
\quad \in \Omega^1 (M, \mathfrak{so} (T^* M)).
\]
我们将 $\mathfrak{so} (T^* M)$ 与 $\mathfrak{spin} (T^* M) \subset \operatorname{Cl} (T^* M)$
等同起来（@thm-8-spin-alg-action），这个对应关系是
\[
\mathfrak{so} (T^* M) \ni \quad dx^i \wedge dx^j \mapsto
\frac12 c^i c^j \quad \in \operatorname{Cl} (T^* M).
\]
由 $\nabla^S$ 的定义，其联络形式就是
$\omega^{\mathrm{SO} (T^* M)}$ 在这个对应下的像
\[
\omega^S = - \frac14 \omega_{ij} \, c^i c^j
\quad \in \Omega^1 (M, \operatorname{End} (S)).
\]
如果我们取法坐标，那么在原点处就有
$d \omega_{ij} = g_{jk} \, d \omega_i^k$，从而
\[
\Omega^S = - \frac14 \Omega_{ij} \, c^i c^j
\quad \in \Omega^2 (M, \operatorname{End} (S)).
\]
:::

下面，设 $M$ 是 $n$ 维紧可定向流形，$n$ 为偶数。
设 $E = \wedge^{\bullet} \, T^* M \otimes \mathbb{C}$，它具有自然的超向量丛结构。
设 $D = d + d^*$ 是 $E$ 上的 Dirac 算子，参见 @eg-8-dirac-d-dstar。

我们回忆 Hodge 分解
\[
\Omega^\bullet (M) = \operatorname{im} d \oplus \operatorname{im} d^* \oplus \mathscr{H}^\bullet,
\]
其中 $\mathscr{H}^\bullet = \ker D^2$ 是所有调和微分形式的空间，
并且有 $\mathscr{H}^\bullet \simeq H^\bullet (M; \mathbb{C})$。

::: proposition
$D$ 的指标等于 $M$ 的 Euler 数：
\[
\operatorname{ind} (D) = \chi (M).
\]
:::

::: proof
通过 @thm-9-mckean-singer 证明中的特征空间分解，不难看出
\[
\ker D = \ker D^2 = \mathscr{H}^\bullet.
\]
从而
$\operatorname{ind} (D) = \operatorname{dim}_{\mathrm{s}} \ker D = \operatorname{dim}_{\mathrm{s}} \mathscr{H}^\bullet = \chi (M)$。
:::

::: theorem [陈–Gauß–Bonnet 公式] {@thm-9-chern-gauss-bonnet}
我们有
\[
\chi (M) = \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^{n/2}
\int_M \operatorname{pf} (\Omega).
\]
:::

::: proof
采用之前的记号，并记 $b^i = b(dx^i)$ 等等，
则 $E$ 的曲率形式是
\[
\Omega^E = \Omega_i^j \, (e^i \wedge) \circ \iota_j,
\]
其中 $e^i$ 是 $dx^i$ 所对应的 $E$ 的截面，
映射 $(e^i \wedge) \circ \iota_j$ 的作用就是把 $E$ 的截面的 $dx^j$ 项取出，
并换成 $dx^i$。继续计算下去，我们有
\[
\begin{aligned}
  \Omega^E &= \frac14 \Omega_{ij} \, (b^i + c^i) \, (b^j - c^j) \\
  &= \frac14 \Omega_{ij} \, (b^i b^j - c^i c^j),
\end{aligned}
\]
其中交叉项消失是由于 $\Omega_{ij}$ 关于 $i, j$ 的反对称性。
由 @thm-9-omega-s，我们得到
\[
\Omega^W = \frac14 \Omega_{ij} \, b^i b^j.
\]

因此，
\[
\begin{aligned}
  \widehat{A} (M) \operatorname{ch} (W)
  &= \widehat{A} (M) \operatorname{tr}_{\mathrm{s}}^W \bigl( \exp (- \Omega^W) \bigr) \\
  &= \widehat{A} (M) \operatorname{tr}_{\mathrm{s}}^W \bigl( \exp b (\Omega) \bigr) \\
  &= (-2 \mathrm{i})^{n/2} \operatorname{pf} \Bigl( \frac{\Omega}{2} \Bigr) \\
  &= (-\mathrm{i})^{n/2} \operatorname{pf} (\Omega).
\end{aligned}
\]
从而由指标定理，
\[
\operatorname{ind} (D) = \chi (M)
= \frac{1}{(2 \mathrm{π} \mathrm{i})^{n/2}} \int_M (-\mathrm{i})^{n/2} \operatorname{pf} (\Omega)
= \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^{n/2} \int_M \operatorname{pf} (\Omega).
\]
:::

当然，这一证明涉及的计算比以前的证明要复杂得多。

## 符号差算子

下面，我们通过指标定理来证明 Hirzebruch 符号差定理。

我们仍令 $E = \wedge^\bullet \, T^* M$，$D = d + d^*$，
但我们给 $E$ 一个不同的 $\mathbb{Z}_2$-分次。
为了定义这个分次，我们需要做一些准备。

::: definition
设 $V$ 是已定向的 $n$ 维欧氏空间，$e_1, \dotsc, e_n$ 是一组符合定向的标准正交基。
我们定义**手性算子**（chirality operator）
\[
\Gamma = \mathrm{i}^{\lceil n/2 \rceil} \, e_1 \cdots e_n
\quad \in \operatorname{Cl} (V) \otimes \mathbb{C}.
\]
其定义不依赖于基的选取。注意到 $\Gamma^2 = 1$，并且，
对任何 $v \in V$，有反交换关系 $v \Gamma + (-1)^n \, \Gamma v = 0$。
:::

这个算子的记号来源于物理学家的 $\gamma^5$ 矩阵，
但物理学家考虑的 $V$ 是带有 $(1, 3)$ 符号的内积的空间。

对我们而言，这个算子可以用来描述 Hodge 对偶。

::: definition
沿用上面的记号，定义 **Hodge $*$-算子**
\[
{*} = \Gamma \cdot {} \colon {\wedge^\bullet \, V} \to \wedge^\bullet \, V,
\]
其中 $\cdot$ 表示 Clifford 作用。我们可以写下它在基上的作用：
\[
{*} \, \bigl( e_{i_1} \wedge \cdots \wedge e_{i_k} \bigr)
= (-1)^\sigma \, \mathrm{i}^{\lceil n/2 \rceil} \,
e_{j_1} \wedge \cdots \wedge e_{j_{n-k}},
\]
其中 $j_1, \dotsc, j_{n-k}$ 表示 $1, \dotsc, n$ 中除了 $i_1, \dotsc, i_k$ 外的指标，
$\sigma$ 是 $1, \dotsc, n$ 的排列 $i_1, \dotsc, i_k, j_1, \dotsc, j_{n-k}$ 的奇偶性。

这个算子能作用在流形 $M$ 的微分形式上，给出一个同构
\[
{*} \colon \Omega^k (M, \mathbb{C}) \to \Omega^{n-k} (M, \mathbb{C}).
\]
它是同构的原因是 ${*}^2 = 1$。
:::

注意，我们的 $*$-算子和通常的定义相差 $\mathrm{i}$ 的一个幂。

通过计算，容易证明 $*$-算子满足以下公式。

::: lemma
设 $M$ 是 $n$ 维已定向流形。

- 若 $\alpha, \beta \in \Omega^k (M, \mathbb{C})$，则
  \[
  \int_M \alpha \wedge {*}\beta =
  (-1)^{k (k \pm 1) / 2} \, \mathrm{i}^{\lceil n/2 \rceil}
  \int_M \langle \alpha, \beta \rangle \cdot \mathrm{vol},
  \]
  其中 $\pm$ 号与 $n$ 的奇偶性相反。

- 我们有
  \[
  d^* = (-1)^{n+1} \, {*} d {*}.
  \]

:::

::: definition
我们定义 $E = \wedge^\bullet \, T^* M$ 上的 $\mathbb{Z}_2$-分次如下：
\[
\biggl \{ \begin{array}{l}
  E^+ = \{ \alpha \mid {*} \alpha = \alpha \}, \\
  E^- = \{ \alpha \mid {*} \alpha = -\alpha \},
\end{array}
\]
这里 $\alpha$ 表示 $E$ 的纤维中的元素，不一定是齐次的。
:::

在这个分次下，对算子 $D = d + d^*$ 应用指标定理，
我们将得到 Hirzebruch 符号差定理。

我们回忆，若 $M$ 是 $n$ 维流形，$4 \mid n$，
则杯积给出了 $H^{n/2} (M; \mathbb{R})$ 上的双线性型，
其符号差（正特征值的个数减去负特征值的个数）定义为 $M$ 的符号差 $\sigma (M)$。

::: proposition
设 $M$ 是 $n$ 维已定向流形，$4 \mid n$。在上面的记号下，
\[
\operatorname{ind} (D) = \sigma (M).
\]
:::

::: proof
与之前一样，$\ker D = \mathscr{H}^\bullet$ 是调和形式的空间。
对 $k = 0, 1, \dotsc, n/2 - 1$，如果 $\{ \alpha_i \}$ 是 $\mathscr{H}^k$ 的一组基，
那么 $\{ \alpha_i \pm {*} \alpha_i \}$ 就构成 $\mathscr{H}^k \oplus \mathscr{H}^{n-k}$
的一组基。
这说明 $\operatorname{dim}_{\mathrm{s}} (\mathscr{H}^k \oplus \mathscr{H}^{n-k}) = 0$，从而
\[
\operatorname{dim}_{\mathrm{s}} \ker D = \operatorname{dim}_{\mathrm{s}} \mathscr{H}^{n/2}.
\]
而如果 $\alpha \in \mathscr{H}^{n/2}$ 满足 ${*} \alpha = \pm \alpha$，
那么上同调类 $[\alpha] \cup [\alpha]$ 与 $[M]$ 的配对是
\[
\int_M \alpha \wedge \alpha
= \int_M \langle \alpha, {*} \alpha \rangle \cdot \mathrm{vol}
= \pm \int_M |\alpha|^2 \cdot \mathrm{vol},
\]
其正负号由 $\alpha$ 的分次决定，
从而 $\operatorname{dim}_{\mathrm{s}} \mathscr{H}^{n/2} = \sigma (M)$。
:::

::: theorem [Hirzebruch 符号差定理]
设 $M$ 是 $n$ 维已定向流形，$4 \mid n$。则
\[
\sigma (M) = \frac{1}{(\mathrm{π} \mathrm{i})^{n/2}}
\int_M \operatorname{det}\nolimits^{1/2} \frac{\Omega/2}{\tanh \Omega/2}.
\]
这里，积分号里的项也被称为 **$L$ 类**（$L$-genus），记作 $L(M)$。
:::

::: proof
注意到，$E$ 的分次实际上是由 $S$ 的分次诱导的，
因为 $S^{\pm}$ 实际上就是 $\Gamma$ 的作用的 $\pm1$-特征子空间。
因此，$W$ 只有偶数次部分。由 @thm-9-tr-exp-b，我们有
\[
\begin{aligned}
  \widehat{A} (M) \operatorname{ch} (W)
  &= \widehat{A} (M) \operatorname{tr}^W \bigl( \exp (-\Omega^W) \bigr) \\
  &= \operatorname{det}\nolimits^{1/2} \biggl( \frac{\Omega/2}{\sinh \Omega/2} \biggr) \
    2^{n/2} \operatorname{det}\nolimits^{1/2} \biggl( \cosh \frac{\Omega}{2} \biggr) \\
  &= 2^{n/2} \, L(M).
\end{aligned}
\]
:::

## Dolbeault 算子

下面，我们通过指标定理，来计算全纯向量丛的 Euler 示性数。

在开始之前，我们回忆复几何中的一些构造。
设 $M$ 是 Kähler 流形，也就是一个复流形，其切丛带有一个相容的 Hermite 度量。我们有
\[
TM \underset{\mathbb{R}}{\otimes} \mathbb{C} \simeq T^{1,0} M \oplus T^{0,1} M,
\]
这两个子丛是 $TM$ 上“乘以 $\mathrm{i}$”的操作的 $(\pm \mathrm{i})$-特征子空间。
我们有 $M$ 上 $(p, q)$-微分形式的空间
\[
\Omega^{p,q} (M) = \Gamma \Bigl( M, \
\bigl( \wedge^p (T^{1,0} M)^\vee \bigr) \wedge
\bigl( \wedge^q (T^{0,1} M)^\vee \bigr) \Bigr)
\subset \Omega^{p+q} (M_{\mathbb{R}}, \mathbb{C}),
\]
其中 $M_{\mathbb{R}}$ 是 $M$ 对应的实流形。在局部坐标下，我们将一个 $(p, q)$-形式写成
\[
\alpha = \alpha_{i_1 \cdots i_p \overline{j} {}_1 \cdots \overline{j} {}_q} \,
d z^{i_1} \wedge \cdots \wedge d z^{i_p} \wedge
d \overline{z}{}^{j_1} \wedge \cdots \wedge d \overline{z}{}^{j_q}
\]
的形式。此时，de Rham 算子 $d$ 分成次数 $(1, 0)$ 和 $(0, 1)$ 部分，记为
\[
\begin{array}{l}
  \partial \colon \Omega^{p,q} (M) \to \Omega^{p+1,q} (M), \\
  \overline{\partial}{} \colon \Omega^{p,q} (M) \to \Omega^{p,q+1} (M), \\
  d = \partial + \overline{\partial}{}.
\end{array}
\]

下面，设 $E \to M$ 是一个**全纯向量丛**，
即转移映射是全纯映射的复向量丛。和上面同理，我们定义
\[
\Omega^{p,q} (M, E) = \Gamma \Bigl( M, \
\bigl( \wedge^p (T^{1,0} M)^\vee \bigr) \wedge
\bigl( \wedge^q (T^{0,1} M)^\vee \bigr) \otimes E \Bigr)
\]
为 $E$-取值的 $(p, q)$-形式的空间。
此时，只有 $\overline{\partial}{}$ 算子能够良好地定义。链复形
\[
\bigl( \Omega^{0, \bullet} (M, E), \ \overline{\partial}{} \bigr)
\]
称为 $E$ 的 **Dolbeault 链复形**，其上同调
\[
H_{\overline{\partial}{}}^\bullet (M, E) =
H^\bullet \bigl( \Omega^{0, \bullet} (M, E), \ \overline{\partial}{} \bigr)
\]
称为 $E$ 的 **Dolbeault 上同调**。事实上，
它与层上同调 $H^\bullet (M, \mathscr{O} (E))$ 同构，这一结论称为 Dolbeault 定理。

和 de Rham 算子的情形类似，我们定义
\[
\Delta_{\overline{\partial}{}} = (\overline{\partial}{} + \overline{\partial}{}^*)^2 = \overline{\partial}{} \overline{\partial}{}^* + \overline{\partial}{}^* \overline{\partial}{}.
\]
则
\[
\ker (\overline{\partial}{} + \overline{\partial}{}^*) = \ker \Delta_{\overline{\partial}{}} \simeq H_{\overline{\partial}{}}^\bullet (M, E).
\]
另外，我们还有
\[
\Delta_{\overline{\partial}{}} = \frac12 \Delta,
\]
其中 $\Delta$ 是 de Rham 算子定义的 Laplace 算子。我们定义
\[
\textstyle D = \sqrt{2} \ (\overline{\partial}{} + \overline{\partial}{}^*),
\]
则 $D^2 = \Delta$，从而 $D$ 是向量丛 $\wedge^\bullet (T^{0,1} M)^\vee \otimes E$
上的 Dirac 算子。相应地，我们得到 Clifford 作用的坐标表达式
\[
c(dz^i) = - \sqrt{2} \ \iota^i, \quad
c(d \overline{z}{}^i) = \sqrt{2} \ (\overline{e} {}^i \wedge {}).
\]

和 de Rham 算子的情况一样，
$D$ 的指标就是 Euler 数 $\chi (M, E)$。

::: proposition
沿用上面的记号，我们有
\[
\operatorname{ind} (D) = \chi (M, E) = \sum_{i=0}^n (-1)^i \dim H_{\overline{\partial}{}}^i (M, E).
\]
:::

::: theorem [Hirzebruch–Riemann–Roch]
设 $M$ 是 $n$ 维 Kähler 流形，$E \to M$ 是全纯向量丛。则
\[
\chi (M, E) = \frac{1}{(-2 \mathrm{π} \mathrm{i})^n}
\int_M \operatorname{td} (M) \operatorname{ch} (E),
\]
其中 $\operatorname{td} (M)$ 是 **Todd 类**，定义为
\[
\operatorname{td} (M) = \operatorname{det} \frac{\Omega}{\mathrm{e}^{\Omega} - 1}.
\]
:::

::: proof
记 $\Lambda = \wedge^\bullet (T^{0,1} M)^\vee$。
与 @thm-9-chern-gauss-bonnet 的证明同理，我们有
\[
\Omega^{\Lambda}
= \Omega {}_{\overline{i}}^{j} \, (\overline{e} {}^i \wedge) \circ \iota_j \\
= -\frac12 \Omega_{\overline{i} j} \, c^{\overline{i}} c^j.
\]
由 @thm-9-omega-s，知
\[
\begin{aligned}
  \Omega^{\Lambda} - \Omega^S
  &= -\frac14 \sum_i \Omega_{\, \overline{i} i} \,
    (c^{\overline{i}} c^i + c^i c^{\overline{i}}) \\
  &= \frac12 \sum_i \Omega_{\, \overline{i} i} = \frac12 \operatorname{tr} \Omega,
\end{aligned}
\]
其中最后一步来自于 @thm-5-c1 的证明。从而
\[
\Omega^W = \Omega^{\Lambda \otimes E} - \Omega^S
= \Omega^E + \frac12 \operatorname{tr} \Omega.
\]
由于 $TM \otimes_{\mathbb{R}} \mathbb{C} \simeq TM \oplus \overline{TM}$，我们有
\[
\begin{aligned}
  \widehat{A} (M_{\mathbb{R}}) &= (-1)^* \, \widehat{A} (TM)^2 \\
  &= (-1)^* \operatorname{det} \frac{\Omega / 2}{\sinh \Omega / 2} \\
  &= (-1)^* \operatorname{td} (M) \operatorname{det} (\mathrm{e}^{\Omega/2}),
\end{aligned}
\]
其中 $(-1)^*$ 的意思是将 $2k$-形式的部分乘以 $(-1)^{nk}$。从而
\[
\widehat{A} (M) \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-\Omega^W}
= (-1)^* \operatorname{td} (M) \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{-\Omega^E}.
\]
:::

::: remark
这一公式的更常见的形式，也是我们之前叙述的版本，是
\[
\chi (M, E) = \int_M \operatorname{Td} (M) \operatorname{Ch} (E),
\]
其中 $\operatorname{Td}$ 和 $\operatorname{Ch}$
是我们修改定义 @eq-9-ch-redef 之前的示性类，也就是说，
把 $\operatorname{td}$ 和 $\operatorname{ch}$ 的定义中的
$\Omega$ 都换成 $-\Omega / 2 \mathrm{π} \mathrm{i}$ 所得到的示性类。
由于只有 $2n$-形式能被积分，所以积分的系数相差了 $(-2\mathrm{π}\mathrm{i})^n$。
:::
