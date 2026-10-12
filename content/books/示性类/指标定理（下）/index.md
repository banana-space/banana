---
title: 指标定理（下）
---

{@sect-10}

下面，我们完成上一节中忽略的关于热核的计算，
然后在上一节的基础上，引入 Lie 群的作用，得到计算等变指标的公式。
和通常的指标定理不同，在等变指标定理中，我们不需要在整个流形上积分，
只需要在不动点集上积分。
当不动点的个数有限时，这个积分化为求和，
我们就得到 Atiyah–Bott 的不动点公式，它是 Lefschetz 不动点公式的推广。

## 热核的计算

首先，我们完成 @thm-9-ahat-ch 的证明，
也就是通过热核 $k_t (x, y)$ 当 $t \to 0$ 时在对角线附近的渐进行为，
得到流形的 $\widehat{A}$ 示性类和向量丛的陈特征。

设 $x_0 \in M$，取法坐标系 $x = \exp_{x_0} \mathbf{x}$，
其中 $\mathbf{x} \in U \subset \mathbb{R}^n$。
我们使用沿径向的平行移动来将 $E$ 平凡化，
得到 $U$ 上的平凡丛 $E \simeq V \times U$。我们记
\[
L = D^2 \colon C^\infty (U, V) \to C^\infty (U, V)
\]
为相应的广义 Laplace 算子，并记
\[
k (t, \mathbf{x}) = k_t (x, x_0) \quad \in \operatorname{End} (V).
\]
它满足热方程
\[
(\partial_t + L) \, k (t, \mathbf{x}) = 0.
\]

证明的关键想法是对 $t$ 和 $\mathbf{x}$ 做缩放。定义
\[
k_\varepsilon (t, \mathbf{x}) = \varepsilon^{n/2} \, k(\varepsilon{} t, \varepsilon^{1/2} \mathbf{x}).
\]
这里，$\mathbf{x}$ 的系数 $\varepsilon^{1/2}$ 出现的原因是，
热方程对 $\mathbf{x}$ 求二阶导数，而只对 $t$ 求一阶导数；
系数 $\varepsilon^{n/2}$ 是为了保证 $t \to 0$ 时
$k_{\varepsilon} (t, \mathbf{x}) \to \delta (\mathbf{x})$。
例如，欧氏空间中 $\Delta$ 算子的热核 $q (t, \mathbf{x})$ 在这个缩放下是不变的。

我们还引入 Clifford 代数上的缩放。
设 $V \simeq S \otimes W$，并设
\[
\alpha (t, -) \in C^\infty (U, \operatorname{End} (V)) \simeq
\Gamma \bigl( \operatorname{Cl} (\mathbb{R}^n, g) \otimes \operatorname{End} (W) \bigr),
\]
其中 $g = (g^{ij})$ 是 $M$ 的度量。
我们定义缩放算子 $\delta_\varepsilon$ 如下：
\[
\delta_\varepsilon \alpha (t, \mathbf{x}) =
\sum_{p=0}^n \varepsilon^{-p/2} \, \alpha_p (\varepsilon{} t, \varepsilon^{1/2} \mathbf{x}),
\]
其中 $\alpha_p$ 是在 Clifford 代数中分次为 $p$ 的部分。

::: definition
设 $\varepsilon > 0$。我们定义**经过缩放的热核**
\[
r_\varepsilon (t, \mathbf{x}) = \varepsilon^{n/2} \, \delta_\varepsilon{} k (t, \mathbf{x}),
\]
它满足的热方程是
\[
(\partial_t + L_\varepsilon) \, r_\varepsilon (t, \mathbf{x}) = 0,
\]
其中 $L_\varepsilon = \varepsilon \, \delta_\varepsilon{} L \delta_\varepsilon^{-1}$。
:::

这里，$L_\varepsilon$ 的表达式可以从恒等式
$\partial_t \delta_\varepsilon = \varepsilon \, \delta_\varepsilon \partial_t$ 得出。

::: proposition {@thm-10-lim-l-epsilon}
作为 $\Omega^\bullet (U, \operatorname{End} (W)) \simeq C^\infty (U, \operatorname{End} (V))$
上的算子，我们有
\[
\lim_{\varepsilon \to 0} L_\varepsilon = K
= -\sum_i \Bigl( \partial_i - \frac14 \mathbf{x}^j \Omega_{ij} (0) \wedge {} \Bigr)^2
  + \Omega^W (0) \wedge {},
\]
这里极限的意义是 $L_\varepsilon = K + O(\varepsilon^{1/2})$。
:::

::: proof [证明概要]
记 $c^i$ 为 Clifford 作用。我们有 **Lichnerowicz 公式** [@bgv, §3.5]
\[
D^2 = \Delta^E + \frac12 \Omega^W (e_i, e_j) \, c^i c^j + \frac14 R,
\]
其中 $R$ 是标量曲率。事实上，
这个公式就是通过 Dirac 算子与 Clifford 联络的关系，来计算 $D^2$ 得到的结果。
它是 Weitzenböck 恒等式的一个推广形式。

由这一表达式，我们能立即得出 $L_\varepsilon$ 的表达式。
记 $\nabla^{\varepsilon} =
  \varepsilon^{1/2} \delta_\varepsilon \nabla^E \delta_\varepsilon^{-1}$，则
\[
L_\varepsilon = -\sum_i \bigl( (\nabla_i^{\varepsilon})^2
- \varepsilon^{1/2} \nabla_{\nabla_i e_i}^{\varepsilon} \bigr) \\
+ \frac12 \Omega^W (\varepsilon^{1/2} \mathbf{x}) (e_i, e_j) \,
(e^i - \varepsilon \iota^i) \, (e^j - \varepsilon \iota^j)
+ \frac14 \varepsilon{} R (\varepsilon^{1/2} \mathbf{x}).
\]
另外，计算表明
\[
\lim_{\varepsilon \to 0} \nabla_i^{\varepsilon} = \partial_i -
\frac14 \mathbf{x}^j \Omega_{ij} (0) \wedge {}.
\]
现在，我们可以直接计算 $\lim_{\varepsilon \to 0} L_\varepsilon$ 了。
在 $L_\varepsilon$ 的表达式中，带 $\varepsilon$ 的项通通消失，
剩下的项就给出了要证的公式。
:::

我们回忆热核 $k_t$ 的渐进展开式（@thm-7-asymp-exp）。
它给出了热核 $r_\varepsilon$ 的渐进展开
\[
\begin{aligned}
  r_\varepsilon (t, \mathbf{x})_p
  & \sim \varepsilon^{-p/2} q (t, \mathbf{x}) \, \sum_{i=0}^\infty {}
    (\varepsilon{} t)^i \, \Phi_i (\varepsilon^{1/2} \mathbf{x})_p \\
  & = q (t, \mathbf{x}) \, \sum_{i=-n}^\infty {}
    \varepsilon^{i/2} \, \gamma_i (t, \mathbf{x})_p,
\end{aligned}
\]
其中下标 $p$ 表示在 Clifford 代数中分次为 $p$ 的部分，
$\gamma_i (t, \mathbf{x})_p$ 是由这一等式定义的，即定义为式中 $\varepsilon^{i/2}$ 的系数。
对 $p$ 求和，得到

```math {@eq-10-r-and-gamma}
r_\varepsilon (t, \mathbf{x}) \sim q (t, \mathbf{x}) \, \sum_{i=-n}^\infty {}
    \varepsilon^{i/2} \, \gamma_i (t, \mathbf{x}),
```

其中，我们把 $\gamma_i$ 看成微分形式
\[
\gamma_i (t, -) \in C^\infty (U, \operatorname{End} (V))
\simeq \Omega^\bullet (U, \operatorname{End} (W)).
\]

注意到
\[
\gamma_i (0, \mathbf{x}) \equiv \biggl \{ \begin{array}{ll}
  1, & i = 0, \\
  0, & i \neq 0,
\end{array}
\]
因为 $t = 0$ 时只有 $\Phi_0 (\mathbf{x}) = \mathrm{id}_V$ 一项有贡献。
我们对 @eq-10-r-and-gamma 作用算子 $\partial_t + L_\varepsilon$。
则由 @thm-10-lim-l-epsilon，
若 $\gamma_i$ 是 $i$ 最小的非零项，那么它应满足
\[
(\partial_t + K) \, \gamma_i (t, \mathbf{x}) = 0.
\]
因此，当 $i < 0$ 时必有 $\gamma_i \equiv 0$，因为若不然，
则使 $i$ 最小的那个 $\gamma_i$ 满足以 $0$ 为初值的热方程，从而恒为 $0$，矛盾。
作为推论，我们有
\[
(\partial_t + K) \, \gamma_0 (t, \mathbf{x}) = 0.
\]

::: proposition {@thm-10-lim-r-epsilon}
我们有
\[
\lim_{\varepsilon \to 0} r_\varepsilon (t, \mathbf{x}) =
\frac {1} {(4 \mathrm{π} t)^{n/2}}
\operatorname{det}\nolimits^{1/2} \biggl( \frac {t \Omega / 2} {\sinh (t \Omega / 2)} \biggr)
\exp \biggl( - \frac {1} {4t}
\Bigl( \frac{t \Omega}{2} \coth \frac{t \Omega}{2} \Bigr) (\mathbf{x}, \mathbf{x})
- t \Omega^W \biggr).
\]
:::

::: proof
事实上，
\[
\lim_{\varepsilon \to 0} r_\varepsilon (t, \mathbf{x}) =
q (t, \mathbf{x}) \, \gamma_0 (t, \mathbf{x}).
\]
因此，剩下的工作就是解出热方程
\[
(\partial_t + K) \, \gamma_0 (t, \mathbf{x}) = 0.
\]
实际上，我们只需验证命题中的表达式确实给出了热方程的解。
我们就不把计算过程写出来了，读者可参见 [@bgv, §4.2]。
:::

::: proof [@thm-9-ahat-ch 的证明]
在 @thm-10-lim-r-epsilon 中取 $t = 1$，$\mathbf{x} = 0$，就得到了我们要的表达式。
:::

## 等变指标

接下来，我们进入这一节的主题，即等变指标定理。

设 $M$ 是偶数维可定向 Riemann 流形，$H$ 是紧拓扑群，它作用在 $M$ 上。
我们要求这个作用保持 $M$ 的度量和定向。

设 $E \to M$ 是**等变 Clifford 模**，带有一个 Hermite 度量。
也就是说，$E$ 也带有 $H$ 的作用，
每个元素 $\gamma \in H$ 把纤维 $E_x$ 映到 $E_{\gamma (x)}$。
我们要求这个作用保持 Clifford 作用，也保持 $E$ 的度量。

::: proposition
在上述情况下，$H$-等变的 Dirac 算子与 $H$-等变的 Clifford 超联络一一对应。
:::

设 $D$ 是 $H$-等变的 Dirac 算子。
在以前，我们把 $\mathbb{Z}_2$-分次空间 $\ker D$ 的维数定义成 $D$ 的指标。
但现在，$\ker D$ 是 $H$ 的一个 $\mathbb{Z}_2$-分次的酉表示。
这里，元素 $\gamma \in H$ 作用在截面 $s \in \Gamma (E)$ 上的方式是
\[
(\gamma \cdot s) (x) = \gamma^E \, s (\gamma^{-1} x),
\]
其中 $\gamma^E \colon E_{\gamma^{-1} x} \to E_x$ 是 $\gamma$ 在 $E$ 上的作用。

::: definition
设 $\gamma \in H$。我们定义**等变指标**（equivariant index）
\[
\operatorname{ind} (\gamma, D) = \operatorname{tr}_{\mathrm{s}} (\gamma |_{\ker D}).
\]
:::

注意到 $\operatorname{ind} (1, D) = \operatorname{ind} (D)$。
和之前的情况类似，我们通过算子 $D^2$ 的谱理论，得到等变指标的 McKean–Singer 公式。

::: theorem [McKean–Singer] {@thm-10-equivar-mckean-singer}
我们有
\[
\operatorname{ind} (\gamma, D) = \operatorname{tr}_{\mathrm{s}} (\gamma \, \mathrm{e}^{-t D^2})
= \int_M \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx,
\]
其中 $k_{t, \gamma}$ 是算子 $\gamma \, \mathrm{e}^{-t D^2}$ 的核。
:::

::: proof
和 @thm-9-mckean-singer 的证明一样，
设 $V_\lambda = V_\lambda^+ \oplus V_\lambda^-$ 是算子 $D^2$ 的 $\lambda$-特征子空间。
因为 $D$ 是 $\gamma$-等变的，
所以 $V_\lambda^{\pm}$ 都是 $\gamma$ 的不变子空间。
并且，当 $\lambda \neq 0$ 时，同构
\[
D \colon V_\lambda^+ \to V_\lambda^-
\]
保持 $\gamma$ 的作用。
这说明 $\operatorname{tr}_{\mathrm{s}} (\gamma \, \mathrm{e}^{-t D^2}|_{V_\lambda}) = 0$。
我们就得到了第一个等号。

第二个等号的证明和 @thm-9-mckean-singer 的证明同理。
:::

## Atiyah–Bott 不动点公式

Atiyah–Bott 不动点公式是等变指标定理的一个特例，
但放宽了一些假设。
它也是 Lefschetz 不动点公式的一个推广。

下面，我们设 $M$ 是紧可定向流形，拓扑群 $H$ 作用在 $M$ 上。
我们不要求 $H$ 是紧的，也不要求其作用保持度量。
设 $E \to M$ 是 $H$-等变复超向量丛，
$d$ 是 $E$ 上的 $H$-等变微分算子，满足

- $d^2 = 0$。

- 上同调 $H (d) = H \bigl( \Gamma (E), d \bigr)$ 是有限维超向量空间。

- 存在 $M$ 上的 Riemann 度量和 $E$ 上的 Hermite 度量（不必等变），
  使得 $D = d + d^*$ 是 Dirac 算子。

对 $\gamma \in H$，我们定义
\[
\operatorname{ind} (\gamma, d) = \operatorname{tr}_{\mathrm{s}} \Bigl( H(\gamma) \colon H(d) \to H(d) \Bigr).
\]

::: theorem [Atiyah–Bott 不动点公式] {@thm-10-atiyah-bott-fixed}
假设 $\gamma \in H$ 在 $M$ 上的作用具有离散的不动点集。
则当下面和式中每一项的分母都不为零时，有
\[
\operatorname{ind} (\gamma, d) = \sum_{x: \text{不动点}}
\frac {\operatorname{tr}_{\mathrm{s}} \gamma_x^E} { \mathopen|\operatorname{det} (1 - \gamma_x^{-1})\mathclose| },
\]
其中 $\gamma_x \colon T_x M \to T_x M$ 和 $\gamma_x^E \colon E_x \to E_x$
都是 $\gamma$ 的作用。
:::

在证明定理之前，我们先推出 Lefschetz 不动点公式的一个特殊情形。

::: corollary [Lefschetz 不动点公式]
在上述假设下，
\[
\sum_{x: \text{不动点}} \pm1 = \sum_{i=0}^n (-1)^i \operatorname{tr} H^i(\gamma),
\]
其中 $H^i (\gamma) \colon H^i (M) \to H^i (M)$ 是 $\gamma$ 诱导的映射，
式中的 $\pm1$ 等于 $\operatorname{sgn} \operatorname{det} (1 - \gamma_x^{-1})$。
:::

::: proof
取 $E = \wedge^\bullet \, T_x^* M \otimes \mathbb{C}$，
则等式右边就是 $\operatorname{ind} (\gamma, d)$，其中 $d$ 是 de Rham 微分。
我们再来计算 $\operatorname{tr}_{\mathrm{s}} \gamma_x^E$。
此时 $E_x \simeq \wedge^\bullet \, T_x^* M$。
通过考虑 $\gamma_x$ 的特征值，不难证明
\[
\operatorname{tr}_{\mathrm{s}} \gamma_x^E = \operatorname{det} (1 - \gamma_x^{-1}).
\]
:::

::: proof [@thm-10-atiyah-bott-fixed 的证明]
设 $x_1, \dotsc, x_m$ 是所有的不动点。
由 @thm-10-equivar-mckean-singer，我们有
\[
\operatorname{ind} (\gamma, d) = \int_M \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx
= \sum_{i=0}^m \int_M \psi_i (x) \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx,
\]
其中函数 $\psi_i$ 取得使 $\sum_i \psi_i = 1$，
并且当 $i > 0$ 时，$\psi_i$ 在 $x_i$ 附近恒等于 $1$。
我们想要证明
\[
\lim_{t \to 0} \psi_i (x) \, k_{t, \gamma} (x, x) = \left \{ \begin{array}{ll}
  \dfrac {\gamma_{x_i}^E} { \mathopen|\operatorname{det}(1 - \gamma_{x_i}^{-1})\mathclose| } \,
    \delta_{x_i}, & i > 0, \\
  0, & i = 0,
\end{array} \right.
\]
然后积分并取迹，就得到了要证的等式。

事实上，热核 $k_{t, \gamma}$ 是能算出来的：
\[
k_{t, \gamma} (x, y) = \gamma \cdot k_t (\gamma^{-1} x, y),
\]
其中 $\cdot$ 表示 $\gamma$ 在截面上的作用。
设 $\varphi \in \Gamma (E)$ 是测试函数。
记 $V = T_{x_i} M$，并将 $0 \in V$ 的一个邻域通过法坐标系与
$x_i$ 的邻域等同起来，以便计算积分。则
\[
\begin{aligned}
  & \lim_{t \to 0} \int_M \psi_i (x) \, k_{t, \gamma} (x, x) \, \varphi (x) \, dx \\
  ={} & \lim_{t \to 0} \frac {1} {(4 \mathrm{π} t)^{n/2}}
  \int_V \mathrm{e}^{-|\gamma_{x_i}^{-1} \mathbf{x} - \mathbf{x}|^2 / 4t} \,
  \gamma \cdot \varphi (\mathbf{x}) \, \bigl( 1 + O(\mathbf{x}) \bigr) \, d \mathbf{x} \\
  ={} & \frac {\gamma_{x_i}^E} {\mathopen|\operatorname{det}(1 - \gamma_{x_i}^{-1})\mathclose|} \, \varphi (0),
\end{aligned}
\]
其中最后一步是初等计算。
这一计算也说明 $\lim_{t \to 0} \psi_0 (x) \, k_{t, \gamma} (x, x) = 0$。
:::

## 等变指标定理

在上一小节中，我们已经知道，算子的指标可以通过不动点处几何量的求和来计算。
在等变指标定理中，我们不再要求不动点是离散的，
并把算子的指标写成不动点集上几何量的积分。

下面，设 $M$ 是偶数维紧可定向 Riemann 流形，紧 Lie 群 $H$ 作用在 $M$ 上，
并保持其度量和定向。对 $\gamma \in H$，记
\[
M^\gamma = \{ x \mid \gamma x = x \} \subset M.
\]
由 Lie 群的理论，$M^\gamma$ 是 $M$ 的子流形，
但需要注意的是，它可能是不同维数的子流形的不交并。

在 $M^\gamma$ 上，我们有
\[
TM |_{M^\gamma} = TM^\gamma \oplus N,
\]
其中 $N$ 是法丛。因为 $\gamma$ 的作用是等距同构，
所以 $M^\gamma$ 是全测地子流形，从而 $TM$ 的 Levi-Civita 联络
分解成两个子丛上的联络的直和，我们记为
\[
\nabla = \nabla^0 \oplus \nabla^N,
\]
其中 $\nabla^0$ 是 $TM^\gamma$ 上的 Levi-Civita 联络。

::: definition
若 $W \to M$ 是 $H$-等变的超向量丛，我们定义**等变陈特征**
\[
\operatorname{ch} (\gamma, W) = \operatorname{tr}_{\mathrm{s}}^W \bigl( \gamma \cdot \mathrm{e}^{-\Omega^W} \bigr)
\quad \in \Omega^\bullet (M^\gamma),
\]
其中 $\Omega^W$ 是 $W$ 上的一个 $H$-等变的联络的曲率形式。
:::

::: theorem [等变指标定理，Atiyah–Segal–Singer] {@thm-10-equivar-index-thm}
等变 Dirac 算子 $D$ 的指标等于
\[
\operatorname{ind} (\gamma, D) = \int_{M^\gamma}
\frac {(-2 \mathrm{i})^{n_1 / 2}} {(2 \mathrm{π} \mathrm{i})^{n_0 / 2}} \, T_M \left( \frac
  {\widehat{A} (M^\gamma) \operatorname{tr}_{\mathrm{s}}^W \bigl( (\gamma^E)_{n_1} \, \mathrm{e}^{-\Omega^W} \bigr)}
  {\operatorname{det}\nolimits^{1/2} (1 - \gamma^N) \operatorname{det}\nolimits^{1/2} (1 - \gamma^N \mathrm{e}^{-\Omega^N})}
\right) \, dx,
\]
其中 $n_0 (x) = \dim_x M^\gamma$，$n_1 = n - n_0$，$T_M$ 是 Березин 积分，
$(\gamma^E)_{n_1}$ 的下标表示 Clifford 分次。

如果 $M$ 具有 $H$-等变的旋量结构，并且 $M^\gamma$ 也具有旋量结构，
那么这个公式可以简化成
\[
\operatorname{ind} (\gamma, D) = \int_{M^\gamma}
\frac {(-1)^{n_1 / 2}} {(2 \mathrm{π} \mathrm{i})^{n_0 / 2}} \, T_M \left( \frac
  {\widehat{A} (M^\gamma) \operatorname{ch} (\gamma, W)}
  {\operatorname{ch} (\gamma, S(N))}
\right) \, dx,
\]
其中，旋量丛 $S(N)$ 定义为
\[
S(N) = \operatorname{Hom}_{\operatorname{Cl}(M^\gamma)} \bigl( S (M^\gamma), S (M) |_{M^\gamma} \bigr).
\]
:::

定理的第一个公式看起来很吓人，
但它其实就是在第二个公式中，把陈特征的计算公式写开来的结果。
另外，如果我们在第二个公式中取 $\gamma = 1$，
我们就得到了非等变情形的指标定理（@thm-9-atiyah-singer）。

::: proof [证明概要]
我们在 @thm-10-equivar-mckean-singer 中已经知道，
\[
\operatorname{ind} (\gamma, D) = \int_M \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx.
\]
和之前的证明方法类似，我们把等变热核在对角线上做渐进展开：
\[
k_{t, \gamma} (x, x) \sim \frac {1} {(4 \mathrm{π} t)^{n_0/2}}
\sum_{i=0}^\infty t^i \Phi_{i, \gamma} (x).
\]
这里，系数中 $t$ 的次数是 $-n_0 / 2$，
因为热方程实际上只沿着 $M^\gamma$ 的方向进行演化。
注意，这里的 $\Phi_{i, \gamma}$ 都是分布截面，即允许例如 $\delta$-函数出现。

为了研究这些 $\Phi_{i, \gamma}$，我们固定一个 $x_0 \in M^\gamma$，
并取法坐标系 $x = \exp_{x_0} \mathbf{x}$。
这个指数映射诱导了 $x_0$ 的邻域 $V$ 到 $0$ 的邻域 $V'$ 的微分同胚。
设 $\varphi$ 是 $M$ 上的光滑函数，其支集包含于 $V$。
我们做渐进展开
\[
\int_{N_{x_0}} k_{t, \gamma} (\mathbf{x}, \mathbf{x}) \, \varphi (\mathbf{x}) \, d \mathbf{x}
\sim \frac {1} {(4 \mathrm{π} t)^{n_0/2}}
\sum_{i=0}^\infty t^i \Phi_{i, \gamma, \varphi} (x_0).
\]
通过对等变热核的计算 [@bgv, §§6.5–6.7]，可以得到

```math {@eq-10-equivar-asymp-exp}
\Phi_{i, \gamma, \varphi} (x_0)_{p} = \biggl\{ \begin{array}{ll}
    I_\gamma (x_0)_p \, \varphi (x_0), & p = 2i + n_1, \\
    0 & p > 2i + n_1,
\end{array}
```

其中下标 $p$ 表示 Clifford 分次，
$I_\gamma\in \Gamma \bigl( M^\gamma, \
    {\wedge^\bullet \, T^* M} \otimes \operatorname{End}_{\operatorname{Cl} (M)} (E) \bigr)$ 定义为
\[
I_\gamma = \frac
{\widehat{A} (M^\gamma) \, (\gamma^E)_{n_1} \, \mathrm{e}^{-\Omega^W}}
{\operatorname{det}\nolimits^{1/2} (1 - \gamma^N) \operatorname{det}\nolimits^{1/2} (1 - \gamma^N \mathrm{e}^{-\Omega^N})}.
\]
事实上，当 $\dim M^\gamma = 0$ 时，
这个等式的本质就是我们在证明 @thm-10-atiyah-bott-fixed 时计算的 Gauß 积分。

这一计算结果蕴涵了
\[
\Phi_{i, \gamma} (x_0) = I_\gamma \cdot \delta_{M^\gamma},
\]
其中 $\delta$-函数 $\delta_{M^\gamma}$ 作用在测试函数 $\varphi$ 上，
给出的是 $\varphi$ 在 $M^\gamma$ 上的积分。

我们在 $M$ 上取一单位分解，将热核的积分化为局部的计算：
\[
\int_M \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx \sim
\int_U d x_0 \int_{N_{x_0}}
\operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (\mathbf{x}, \mathbf{x}) \, \psi (\mathbf{x}) \, b_{x_0} (\mathbf{x}) \, d \mathbf{x},
\]
其中我们省略了求和号，$U \subset M^\gamma$ 是开集，
$\psi$ 是单位分解，$b_{x_0} (\mathbf{x})$ 是坐标变换的系数。
令 $\varphi (\mathbf{x}) = \psi (\mathbf{x}) \, b_{x_0} (\mathbf{x})$，
则上述积分关于 $t$ 的渐进展开是
\[
\frac {1} {(4 \mathrm{π} t)^{n_0/2}} \sum_{i=0}^\infty t^i
\int_U \operatorname{tr}_{\mathrm{s}} \Phi_{i, \gamma, \varphi} (x_0)_n \, dx_0,
\]
这里，我们可以只考虑分次 $n$ 的项，因为只有这些项能有非零的超迹。
令 $t \to 0$，由 @eq-10-equivar-asymp-exp，我们得到
\[
\begin{aligned}
  \lim_{t \to 0} \int_M \operatorname{tr}_{\mathrm{s}} k_{t, \gamma} (x, x) \, dx
  &= \frac {1} {(4 \mathrm{π})^{n_0 / 2}}
    \int_{M^\gamma} \operatorname{tr}_{\mathrm{s}} \Phi_{n_0 / 2, \gamma, \varphi} \, dx \\
  &= \frac {(-2 \mathrm{i})^{n/2}} {(4 \mathrm{π})^{n_0 / 2}} \int_{M^\gamma}
    T_M \bigl( \operatorname{tr}_{\mathrm{s}}^W I_\gamma \bigr) \, dx,
\end{aligned}
\]
其中最后一步利用了 @eq-9-tre-trw。
我们就证明了定理的第一个公式。

为了证明第二个公式，我们先来计算 $\operatorname{ch} (\gamma, W)$。
因为对任意 $\alpha \in N_x^\vee$，都有
$\gamma^S \, c(\alpha) = c(\gamma^N \alpha) \, \gamma^S$，
所以 $\gamma^S$ 作为 $\operatorname{Cl} (M)$ 的截面，实际上是 $\operatorname{Cl} (N^\vee)$ 的截面。
由于 $\gamma^E = \gamma^W \otimes \gamma^S$，我们有
\[
(\gamma^E)_{n_1} = T (\gamma^S) \, \gamma^W,
\]
其中 $T$ 是 $\operatorname{Cl} (N^\vee)$ 上的 Березин 积分。
对 $\alpha \in \mathrm{Spin} (2k) \subset \operatorname{Cl} (2k)$，有如下公式：

```math {@eq-10-berezin-half-det}
T (\alpha) = \pm \operatorname{det}\nolimits^{1/2} (1 - \tau (\alpha)) / 2^k,
```

其中映射 $\tau$ 是到 $\mathrm{SO} (2k)$ 的覆叠。
这个公式不难证明。事实上，只需验证 $k = 1$ 的情况即可。
在式中取 $\alpha = \gamma^S$，则 $\tau (\alpha) = \gamma^N$。从而
\[
\begin{aligned}
  \operatorname{ch} (\gamma, W)
  &= \frac {1} {T(\gamma^S)}
    \operatorname{tr}_{\mathrm{s}}^W \bigl( (\gamma^E)_{n_1} \, \mathrm{e}^{-\Omega^W} \bigr)\\
  &= \pm 2^{n_1 / 2} \, \frac
    {\operatorname{tr}_{\mathrm{s}}^W \bigl( (\gamma^E)_{n_1} \, \mathrm{e}^{-\Omega^W} \bigr)}
    {\operatorname{det}\nolimits^{1/2} (1 - \gamma^N)}.
\end{aligned}
\]

再来考虑 $S(N)$ 的陈特征。可以证明，对 $S(N)$ 来说，
@eq-9-tre-trw 和 @eq-10-berezin-half-det
的相应版本也成立，从而
\[
\begin{aligned}
  \operatorname{ch} (\gamma, S(N))
  &= (-2 \mathrm{i})^{n_1 / 2} \,
    T \bigl( \gamma^{S(N)} \cdot \mathrm{e}^{-\Omega^{S(N)}} \bigr) \\
  &= \pm (-\mathrm{i})^{n_1 / 2} \operatorname{det}\nolimits^{1/2} (1 - \gamma^N \mathrm{e}^{-\Omega^N}).
\end{aligned}
\]
通过更仔细的计算 [@bgv, §6.4]，可知两处正负号是相同的。
我们就导出了第二个公式。
:::
