---
title: 热核
---

{@sect-7}

## 广义 Laplace 算子

我们回忆，若 $E_1, E_2 \to M$ 是两个光滑向量丛，
则一个 $k$ 阶微分算子 $D \colon \Gamma (E_1) \to \Gamma (E_2)$ 局部上具有如下形式：
\[
D (s^i e_i^{(1)}) = \sum_{ |\alpha| \leq k }
a_{i}^{j \alpha} \, ( \partial_{\alpha} s^i ) \, e_j^{(2)}.
\]

::: definition
设 $D \colon \Gamma (E_1) \to \Gamma (E_2)$ 是 $k$ 阶微分算子。
它的**符号**（symbol）定义为向量丛的映射
\[
\begin{aligned}
  \sigma_D \colon \operatorname{Sym}^k (T^* M) \otimes E_1 &\to E_2, \\
  e^\alpha \otimes e_i^{(1)} &\mapsto a_i^{j \alpha} e_j^{(2)}.
\end{aligned}
\]
换言之，$\sigma_D$ 的分量由 $(\sigma_D)_i^{j \alpha} = a_i^{j \alpha}$ 给出。
:::

例如，$\mathbb{R}^n$ 上的 Laplace 算子 $\Delta = -\sum_i ( \partial / \partial x^i )^2$ 的符号
\[
\sigma_{\Delta} \colon \operatorname{Sym}^2 (\mathbb{R}^n) \to \mathbb{R}
\]
就是 Euclid 内积的相反数。

::: definition
微分算子 $D \colon \Gamma (E) \to \Gamma (E)$ 称为**椭圆**（elliptic）的，
如果对任意 $x \in M$ 以及 $0 \neq v \in T_x^* M$，映射
\[
\sigma_D (v, \dotsc, v) \colon E_x \to E_x
\]
都是向量空间的自同构。
:::

例如，$\mathbb{R}^n$ 上的 Laplace 算子 $\Delta$ 就是椭圆微分算子，
因为 $\mathbb{R}^n$ 中非零向量和自身的内积不会等于 $0$。

::: definition
设 $M$ 是 Riemann 流形，$E \to M$ 是光滑向量丛。
微分算子 $H \colon \Gamma (E) \to \Gamma (E)$
称为一个**广义 Laplace 算子**（generalized Laplacian），如果

- $H$ 是二阶算子。

- 对任意 $x \in M$ 以及 $v, w \in T_x^* M$，映射
  \[
  \sigma_H (v, w) \colon E_x \to E_x
  \]
  等于和 $-\langle v, w \rangle$ 的数乘。

等价地说，广义 Laplace 算子在局部坐标系下表示为如下形式：
\[
H = -g^{ij} \, \partial_i \, \partial_j + (\text{一阶微分算子}),
\]
其中 $g^{ij}$ 是 Riemann 度量。
:::

::: example
设 $M$ 是 Riemann 流形，$E \to M$ 是光滑向量丛。
给定 $E$ 上的联络 $\nabla$，我们就能定义对应的 Laplace 算子 $\Delta$，
也叫做 **Laplace–Beltrami 算子**。它在局部坐标系中定义为
\[
\Delta s = -g^{ij} \, \bigl( \nabla_i \nabla_j \, s
- \Gamma_{ij}^k \nabla_k \, s \bigl),
\]
其中 $\nabla_i$ 是沿坐标向量场 $e_i$ 的方向导数。
则每个联络 $\nabla$ 给出的 Laplace 算子都是广义 Laplace 算子。
:::

::: proposition {@thm-7-gen-lap}
如果 $H$ 是 $E$ 上的广义 Laplace 算子，那么存在 $E$ 上的联络 $\nabla$，使得
\[
H = \Delta + f,
\]
其中 $\Delta$ 是联络 $\nabla$ 的 Laplace 算子，$f \in C^\infty (M)$。
:::

这一结论的证明见 [@bgv, 命题 2.5]。

## $\mathbb{R}^n$ 中的热核

在这一小节中，我们回忆 $\mathbb{R}^n$ 中热方程的解法。

**热方程**（heat equation）是偏微分方程中的一类基础的方程，
其初值问题叙述如下：给定 $\mathbb{R}^n$ 上的函数 $f$，求一个函数
\[
u (x, t) \quad (x \in \mathbb{R}^n , \ t \in \mathbb{R}_{\geq 0}),
\]
满足
\[
\Biggl \{ \begin{array}{l}
  \partial_t u = - \Delta_x u, \\
  u |_{t=0} = f,
\end{array}
\]
其中 $\Delta_x$ 表示 $\mathbb{R}^n$ 方向的 Laplace 算子。
热方程可以看作是描述了 $\mathbb{R}^n$ 中温度 $u$ 随着时间 $t$ 的演化过程。

::: definition
$\mathbb{R}^n$ 的**热核**（heat kernel）是函数
\[
k_t (x, y) = \frac {1} {(4 \mathrm{π} t)^{n/2}} \, \mathrm{e}^{-|x-y|^2 / 4t}
\quad (x, y \in \mathbb{R}^n, \ t > 0).
\]
:::

热核 $k_t (x, y)$ 满足以下性质：
\[
\Biggl \{ \begin{array}{l}
  (\partial_t + \Delta_x) \, k_t (x, y) = 0, \\
  k_t (x, y) |_{t=0} = \delta (x, y),
\end{array}
\]
其中 $\delta (x, y)$ 是 $\delta$ 函数。
因此，为了解出热方程的初值问题，只需令
\[
u (x, t) = \int_{\mathbb{R}^n} k_t (x, y) \, f (y) \, dy,
\]
就能满足
\[
\Biggl \{ \begin{array}{l}
  (\partial_t + \Delta_x) \, u = 0, \\
  u |_{t = 0} = \int_{\mathbb{R}^n} \delta (x, y) \, f (y) \, dy = f (x).
\end{array}
\]
当然，这里的推导不是完全严格的，我们在此忽略有关的细节。

我们把由上面的卷积给出的 $u (x, t)$ 记作
\[
u = K_t (f) = \mathrm{e}^{-t \Delta} f,
\]
其中 $\mathrm{e}^{-t \Delta}$ 是形式的记号，在计算中能给人以直观。

## 广义 Laplace 算子的热核

下面，设 $M$ 是紧 Riemann 流形，$E \to M$ 是光滑向量丛。

我们回忆，在分析学中，$\mathbb{R}$ 上的一个**分布**（distribution）
是指一个连续线性泛函
\[
\varphi \colon C_{\mathrm{c}}^\infty (\mathbb{R}) \to \mathbb{R},
\]
其中左边是 $\mathbb{R}$ 上紧支光滑函数的空间，带有 **$C^\infty$ 拓扑**，
也就是说，一列函数的收敛性等价于它们的支集包含于一个公共的紧集，
并且对每个 $n$，它们的 $n$ 阶导数在这个紧集上一致收敛。

例如，
任何一个局部 $L^1$ 函数 $g \colon \mathbb{R} \to \mathbb{R}$ 都可以看作 $\mathbb{R}$ 上的分布：
对 $f \in C_{\mathrm{c}}^\infty (\mathbb{R})$，定义
\[
g (f) = \int_{\mathbb{R}} f(x) \, g(x) \, dx,
\]
就能将 $g$ 视作泛函。再例如，$\delta$ 函数
\[
\delta (f) = f (0)
\]
也是分布，它可以看作在 $0$ 处取值 $+\infty$，在别处取值 $0$，但总积分为 $1$ 的函数。

分布的概念可以推广到向量丛的截面。
因为我们假设了 $M$ 是紧流形，所以我们不再需要担心紧支的问题。

::: definition
在本节开头的假设下，$E$ 的**分布截面**（distributional section）的集合定义为
\[
\Gamma_{\mathrm{dist}} (E) = \Gamma (E^\vee) ^\vee,
\]
其中 $\Gamma (E^\vee)$ 带有 $C^\infty$ 拓扑，
$\Gamma (E^\vee) ^\vee$ 是它的连续对偶空间。
:::

::: remark
这个定义带来了一个问题：我们可以把普通的截面看成分布截面，
但这个过程其实依赖于 $M$ 的度量：若 $s$ 是普通截面，$f \in \Gamma(E^{\vee})$，
我们需要定义
\[
s(f) = \int_M \langle f, s \rangle \, \mathrm{vol} ,
\]
其中 $\mathrm{vol}$ 是 $M$ 的体积密度
（当 $M$ 可定向时，它就是体积形式），
但这个表达式的值依赖于 $\mathrm{vol}$ 的选取。

为了做到和度量无关，我们可以将 $\Gamma_{\mathrm{dist}} (E)$ 定义为
\[
\Gamma \bigl( E^\vee \otimes |{\wedge^n \, T^* M}| \bigr) ^\vee,
\]
其中 $n = \dim M$。因为密度线丛 $|{\wedge^n \, T^* M}|$ 是平凡线丛，
所以这和之前的定义是同构的，但同构的选取和度量有关。
为了简洁性，我们不采用这种做法。
:::

$\mathbb{R}^n$ 中的热方程可以以 $\mathbb{R}^n$ 上的一个分布为初值。
事实上，允许以分布作为初值是有好处的，
因为热核实际上就是以 $\delta$ 函数为初值的热方程的解。
通过同样的方法，我们可以定义广义 Laplace 算子的热核。

::: definition
设 $E_1, E_2 \to M$ 是两个光滑向量丛。设
\[
K \colon \Gamma_{\mathrm{dist}} (E_1) \to \Gamma (E_2)
\]
是一个连续线性映射。那么，$K$ 的**核**（kernel）是指一个截面
\[
k \in \Gamma \bigl( M \times M, \ \operatorname{Hom} (p_2^* E_1, p_1^* E_2) \bigr),
\]
其中 $p_1, p_2 \colon M \times M \to M$ 是投影，
满足对任意的 $s \in \Gamma_{\mathrm{dist}} (E_1)$，都有

```math {@eq-7-kernel}
(K s) (x) = \int_M k (x, y) \, s (y) \, dy,
```

其中右边的含义是配对 $\langle s, k(x, -) \rangle$，
这里 $k (x, -) \in \Gamma (E_1^\vee) \otimes (E_2)_x$。
:::

核的存在性是分布理论的一个重要的结论。

::: theorem [Schwartz 核定理]
沿用上面的记号，我们有向量空间的同构
\[
\begin{aligned}
  L \bigl( \Gamma_{\mathrm{dist}} (E_1), \ \Gamma (E_2) \bigr) \
    & \simeq \ \Gamma \bigl( M \times M, \ \operatorname{Hom} (p_2^* E_1, p_1^* E_2) \bigr), \\
  K \ & \leftrightarrow \ k,
\end{aligned}
\]
其中 $L$ 表示连续线性映射的空间。
:::

对于广义 Laplace 算子的热方程而言，
定理说明热方程的解的存在性等价于热核的存在性，
但它们的存在性需要我们稍后证明。

::: definition
设 $H \colon \Gamma (E) \to \Gamma (E)$ 是广义 Laplace 算子。
它的**热核**（heat kernel）是一族截面
\[
k_t \in \Gamma \bigl( M \times M, \ \operatorname{Hom} (p_2^* E, p_1^* E) \bigr)
\quad (t > 0),
\]
关于 $t$ 有一阶导数，并满足
\[
\Biggl \{ \begin{array}{l}
  (\partial_t + H_x) \, k_t (x, y) = 0, \\
  k_t (x, y) |_{t=0} = \delta (x, y).
\end{array}
\]
这里，第二个式子的严格意义是，对任意 $s \in \Gamma(E)$，有一致收敛性
\[
\lim _{t \to 0} K_t (s) = s,
\]
这里 $K_t$ 由 @eq-7-kernel 给出。
:::

热核的存在性将在后面证明，但我们先叙述这一结论。

::: theorem {@thm-7-heat-ker-exists}
每个广义 Laplace 算子都有热核。
:::

## 渐进展开

我们先假定热核的存在性，然后研究它在 $t \to 0$ 时的渐进行为。
我们将从中得到关于曲率的信息，并在以后把它和示性类联系起来。

和前面一样，我们设 $M$ 是紧 Riemann 流形，$E \to M$ 是光滑向量丛，
$H \colon \Gamma (E) \to \Gamma (E)$ 是一个广义 Laplace 算子。

我们固定 $y \in M$，然后取法坐标系
\[
x = \exp_y X.
\]
我们记
\[
q_t (x, y) = \frac {1} {(4 \mathrm{π} t)^{n/2}} \, \mathrm{e}^{-|X|^2 / 4t},
\]
并将 $H$ 的热核 $k_t$ 与它进行比较。我们希望得到形如
\[
k_t = q_t \cdot \sum_{i=0}^\infty t^i \, \Phi_i
\]
的表达式，
其中 $\Phi_i \in \Gamma \bigl( M \times M, \ \operatorname{Hom} (p_2^* E, p_1^* E) \bigr)$。
我们试着算出这些 $\Phi_i$。

我们考虑 $E$ 上由 @thm-7-gen-lap 给出的联络 $\nabla$。

::: lemma
设 $s_t \in \Gamma(E)$（$t > 0$）是一族截面，关于 $t$ 有一阶导数。则
\[
(\partial_t + H) (q_t s_t) =
q_t \, (\partial_t + t^{-1} \, \nabla_R + B) \, s_t,
\]
其中 $R = X^i e_i$ 是径向向量场，
微分算子 $B = \sqrt{g}{}^{1/2} \circ H \circ \sqrt{g}{}^{-1/2}$，
其中 $\sqrt{g}$ 是 $\sqrt{\operatorname{det} \smash{(g_{ij})}}$ 的缩写。
:::

::: proof
我们按 Leibniz 法则展开式子左边：
\[
\text{左边} = (\partial_t q_t) \, s_t + q_t \, (\partial_t s_t) +
(\Delta q_t) \, s_t + q_t \, (Hs_t) -2 \langle \nabla q_t, \nabla s_t \rangle,
\]
其中 $\Delta$ 是 $M$ 上的 Laplace 算子。
而由热核 $q_t$ 的性质，以及法坐标系中计算协变导数和 Laplace 算子的公式，我们有
\[
\begin{aligned}
  -2 \nabla q_t &= q_t \, (t^{-1} \, R + d \log \sqrt{g}), \\
  (\partial_t + \Delta) \, q_t &= \sqrt{g}{}^{1/2} \,
    (\Delta \sqrt{g}{}^{-1/2}) \, q_t,
\end{aligned}
\]
故只需证
\[
B = H + \nabla_{d \log \sqrt{g}} +
\sqrt{g}{}^{1/2} \, (\Delta \sqrt{g}{}^{-1/2}),
\]
直接计算即可验证这一等式。
:::

::: definition
如果给定一族截面
\[
\Phi_i \in \Gamma \bigl( M \times M, \ \operatorname{Hom} (p_2^* E, p_1^* E) \bigr)
\quad (i = 0, 1, \dotsc),
\]
使得对每个 $y \in M$，都有

```math {@eq-7-formal-sol-1}
\Phi_0 (y,y) = I \qquad \in \operatorname{End} (E_y),
```

```math {@eq-7-formal-sol-2}
(\partial_t + t^{-1} \, \nabla_R + B) \,
    \sum_{i=0}^\infty t^i \, \Phi_i (-, y) = 0,
```

那么形式幂级数
\[
k_t (x, y) = q_t (x, y) \cdot \sum_{i=0}^\infty t^i \, \Phi_i (x, y)
\]
称为热方程的一个**形式解**（formal solution）。
:::

在引理中取 $s_t = \sum_i t^i \, \Phi_i (x, y) \, v$，其中 $v \in E_y$，
我们看出，如果定义中给出的 $k_t$ 确实是热核，那么 @eq-7-formal-sol-2 一定成立。
事实上，这个定义描述了热核 $k_t$ 在对角线 $M \subset M \times M$ 附近的渐进展开。

::: theorem
存在唯一的形式解。并且，$\Phi_i$ 满足递归公式
\[
\Phi_i (x, y) = - \int_0^1 s^{i-1} B_x \, \Phi_{i-1} (x_s, y) \, ds,
\]
其中 $B_x$ 表示 $B$ 作用于 $x$ 分量，$x_s = \exp_y (sX)$。
:::

::: proof
实际上，@eq-7-formal-sol-2 等价于
\[
\Biggl\{ \begin{array}{l}
  \nabla_R \, \Phi_0 = 0, \\
  (\nabla_R + i) \, \Phi_i = -B_x \, \Phi_{i-1}.
\end{array}
\]
第一个式子说明，$\Phi_0 (x, y) \colon E_y \to E_x$ 一定是沿径向的平行移动。
为了从第二个式子导出递归公式，考虑
\[
\varphi_i (s) = s^i \, \Phi_i (x_s, y).
\]
则 $\varphi_i (0) = 0$，且
\[
\varphi'_i (s) = (i s^{i-1} + s^i \nabla_{R/s}) \, \Phi_i (x_s, y)
= -s^{i-1} B_x \, \Phi_{i-1} (x_s, y).
\]
:::

::: example
设 $H = \Delta$ 是联络给出的 Laplace 算子。由递归公式，
\[
\begin{aligned}
  \Phi_1 (y, y) &= -B_x \, \Phi_0 (x, y) |_{x=y} \\
  &= - \Delta \bigl( \sqrt{g}{}^{-1/2} \, \Phi_0 (x, y) \bigr) \big|_{x=y}
    \hspace{3em} ( \text{因 } \sqrt{g} \big|_{x=y} = 1 ) \\
  &= - \bigl( \Delta \sqrt{g}{}^{-1/2} \bigr) \, \Phi_0 (y, y)
    - \sqrt{g}{}^{-1/2} \, \cancel{\Delta \Phi_0 (x, y)} |_{x=y} \\
    & \hspace{3em} {} + 2 \bigl\langle \nabla \sqrt{g}{}^{-1/2},
    \cancel{\nabla \Phi_0 (x, y)} \bigr\rangle \big|_{x=y} \\
  &= \frac{1}{3} R \cdot \mathrm{id},
\end{aligned}
\]
其中 $R$ 是 $M$ 的标量曲率，被划掉的部分等于 $0$，因为对任何 $v \in E_y$，
向量场 $\Phi_0 (x, y) \, v$ 都是平行移动得到的，
故在 $x = y$ 处的所有协变导数都为 $0$。最后一步是通过公式
\[
g_{ij} = \delta_{ij} + \frac{1}{3} R_{ikjl} x^k x^l + \text{高阶项}
\]
得到的。这个例子说明，$\Phi_1$ 蕴涵了关于流形曲率的信息。
:::

我们将上面的讨论总结如下。

::: theorem {@thm-7-asymp-exp}
在对角线 $M \subset M \times M$ 的一个邻域内，
$H$ 的热核 $k_t$ 在 $t \to 0$ 时具有如下渐进展开式：
\[
k_t (x, y) \sim \frac {1} {(4 \mathrm{π} t)^{n/2}} \, \mathrm{e}^{-d(x, y)^2 / 4t} \cdot
\sum_{i=0}^\infty t^i \, \Phi_i (x, y),
\]
其前 $N$ 项部分和在 $C^k$-范数下与 $k_t$ 的误差是 $O (t^{N - n/2 - k/2 + 1})$。
:::

这里，最后的误差估计是由下一小节的构造过程给出的。

## 热核的构造

这一小节，我们简要概述如何证明广义 Laplace 算子的热核的存在性（@thm-7-heat-ker-exists）。

为了演示我们构造的方法，我们先从一个简化的模型开始。
在这个简化模型中，我们将无限维空间上的算子 $H \colon \Gamma (E) \to \Gamma (E)$
换成有限维空间上的算子。

下面，设 $V$ 是有限维向量空间，$H \in \operatorname{End} (V)$。设
\[
K_t \in \operatorname{End} (V) \quad (t \geq 0)
\]
是一族算子，它是热方程 $(\partial_t + H) \, K_t = 0$ 的“近似解”。
准确地说，它满足
\[
\Biggl\{ \begin{array}{ll}
  R_t = (\partial_t + H) \, K_t = O (t^\alpha) \quad (t \to 0), \\
  K_0 = \mathrm{id}_V,
\end{array}
\]
其中 $\alpha \geq 0$ 是某个常数。我们打算对 $K_t$ 进行调整，
从而它成为一个真正的解。

为此，我们定义
\[
Q_t^0 = K_t,
\]
从而
\[
(\partial_t + H) \, Q_t^0 = R_t;
\]
再定义
\[
Q_t^1 = \int_0^t K_{t-t_1} \, R_{t_1} \, dt_1,
\]
从而
\[
(\partial_t + H) \, Q_t^1 = R_t + \int_0^t R_{t-t_1} \, R_{t_1} \, dt_1;
\]
再定义
\[
Q_t^2 = \int \limits _{0 \leq t_1 \leq t_2 \leq t}
K_{t-t_2} \, R_{t_2-t_1} \, R_{t_1} \, dt_1 \, dt_2,
\]
从而
\[
(\partial_t + H) \, Q_t^2 = R_t + \int_0^t R_{t-t_1} \, R_{t_1} \, dt_1 \\
\hspace{3em} {} + \int \limits _{0 \leq t_1 \leq t_2 \leq t}
R_{t-t_2} \, R_{t_2-t_1} \, R_{t_1} \, dt_1 \, dt_2,
\]
并以此类推。

::: proposition
级数
\[
Q_t = \sum_{k=0}^{\infty} (-1)^k Q_t^k
\]
收敛，且给出了热方程的解。并且，
\[
Q_t = K_t + O(t^{1+\alpha}).
\]
:::

::: proof
对每个 $t > 0$，存在常数 $C$，使得对任意 $t' \leq t$，有
\[
|K_{t'}| < C, \quad |R_{t'}| < C.
\]
从而
\[
\begin{aligned}
  |Q_t^k| &< C^{k+1} \int \limits _{0 \leq t_1 \leq \cdots \leq t_k \leq t}
    dt_1 \, \cdots \, dt_k \\
  &= C^{k+1} \, \frac{t^k}{k!}.
\end{aligned}
\]
这蕴涵了级数的收敛性。用同样的方法，借助上面的计算，不难验证 $Q_t$ 是热方程的解。
:::

下面，我们来考虑一般的情况，即 $H \colon \Gamma (E) \to \Gamma (E)$
是广义 Laplace 算子的情况。

我们注意到一个事实：如果算子 $P, Q$ 的核分别是 $p, q$，
那么算子 $PQ$ 的核是卷积 $p * q$，定义为
\[
(p * q)(x, y) = \int_M p(x, z) \circ q(z, y) \, dz.
\]

和在简化模型中一样，我们首先取定一个近似解 $K_t$。
对 $s \in \Gamma (E)$，我们令
\[
(K_t s) (x) = \int_M k_t^N (x, y) \, s(y) \, dy,
\]
其中 $N$ 是取定的正整数，$k_t^N$ 定义为
\[
\textstyle k_t^N (x, y) = \psi(d(x,y)) \cdot \sum_0^N,
\]
其中 $\psi$ 是一个光滑函数，在 $0$ 附近取值恒为 $1$，且 $\psi([\varepsilon, +\infty)) = 0$，
其中 $\varepsilon > 0$ 取得使 $k_t^N$ 在整个 $M \times M$ 上有定义；
$\textstyle \sum_0^N$ 表示 @thm-7-asymp-exp 中的部分和。

为使记号简洁，下面我们就记
\[
k_t = k_t^N.
\]

我们和之前一样定义算子 $Q_t^k$。它的核是
\[
q_t^k = \int \limits_{0 \leq t_1 \leq \cdots \leq t_k \leq t}
k_{t-t_k} * r_{t_k-t_{k-1}} * \cdots * r_{t_1} \, dt_1 \, \cdots \, dt_k,
\]
其中 $r_t = (\partial_t + H_x) \, k_t$ 是算子 $R_t$ 的核。

通过直接计算，我们能给出估计
\[
\| r_t \|_{C^\ell} \leq C(\ell) \, t^{N - n/2 - \ell/2}.
\]
计算过程不在这里给出，见 [@bgv, 定理 2.29]。
注意到这里 $t^{N - n/2}$ 就是 $k_t^N$ 的最高次项。
由 $q_t^k$ 的卷积表达式，我们有
\[
\| q_t^k \|_{C^\ell} \leq C(\ell) \, t^{k(N - n/2) - \ell/2} \, t^k
\operatorname{vol} (M)^{k-1},
\]
这里 $C(\ell)$ 是和上面不同的常数；$\operatorname{vol} (M)^{k-1}$ 来自于卷积的定义。
卷积中 $k_t$ 一项没有出现在估计中，因为算子 $K_t$ 关于 $t$ 一致有界
（参见上述引用的定理）。

这一估计给出了级数 $\sum_k (-1)^k q_t^k$ 的收敛性。

::: theorem
当 $N > n/2 + 1$ 时，级数
\[
q_t = \sum_{k=0}^\infty (-1)^k q_t^k
\]
在 $C^2$-范数的意义下收敛。
这个公式给出了算子 $H$ 的热核。
:::

作为推论，@thm-7-heat-ker-exists 和 @thm-7-asymp-exp
都获得了证明。
