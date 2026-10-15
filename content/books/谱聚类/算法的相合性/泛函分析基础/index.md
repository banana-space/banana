---
title: 泛函分析基础
---

*本小节主要参考自 Spectral approximations of linear operators [@chatelin83] 一书的 Section 2.4–2.7、
3.1–3.6、5.1–5.3。*

以下设 $E,F$ 均为 Banach 空间（完备的赋范线性空间）。

## Banach 空间中的算子

::: definition
有界线性算子 $T \in\mathcal L(E,F)$ 的算子范数定义为
$$
\|T\|_{\mathcal L(E,F)} := \sup_{x\ne 0} \frac{\|Tx\|_{F}}{\|x\|_{E}} = \sup_{\|x\|_{E} = 1} \|Tx\|_{F}
$$
:::

::: definition
紧算子 $T\in\mathcal K{(E,F)} \subset\mathcal L(E,F)$：
单位球的像 $T(B_E)$ 在 $F$ 中相对紧【relatively compact】，
等价地有——对 $E$ 中的任意有界序列 $\{x_n\}$，
$\{Tx_n\}\subset F$ 都存在收敛子列【sequentially compact】。
:::

::: example
**有限秩算子**是紧算子。其中算子的秩【rank】定义为
$$
\text{rank}~T := \dim R(T).
$$
:::

::: example
当 $k\in C([a,b]^2)$ 时，如下定义**积分算子**
$$
(Tx)(s) = \int_a^b k(s,t)x(t)\,dt,
$$
则 $T \in\mathcal K(C[a,b]).$（利用 Ascoli–Arzelà 定理：一致有界 + 等度连续 ⇒ 有收敛子列）
:::

## 算子的谱理论

考虑将矩阵的谱（特征值集合）推广为算子 $T\in \mathcal L(E)$ 的谱：

::: definition
- 预解集【resolvent set】$\rho(T) := \{z\in\mathbb C: (T-zI)^{-1}\in\mathcal L(E)\}$

- 谱【spectrum】$\sigma(T) := \mathbb C\backslash \rho(T)$

- 点谱【point spectrum】$P\sigma(T) := \{z\in\mathbb C: T-zI$ 不可逆$\}\subset\sigma(T)$

  - 其中元素称为特征值【eigenvalue】

  - 特征空间 $\ker(T-zI)$ 的维数称为特征值 $z$ 的几何重数【geometric multiplicity】

  - 若存在正整数 $p$ 使得
    $$
    \ker(T-zI) \subsetneq \ker\big((T-zI)^2\big)\subsetneq\cdots\subsetneq \ker\big((T-zI)^p\big) = \ker\big((T-zI)^{p+1}\big) =\cdots
    $$
    则 $p$ 称为特征值 $z$ 的代数重数【algebraic multiplicity】

- 离散谱【discrete spectrum】$\sigma_d(T)$ 由具有有限代数重数的孤立特征值【isolated eigenvalue】组成

- 本性谱【essential spectrum】$\sigma_{ess}(T) = \sigma(T)\backslash\sigma_d(T)$

:::

::: proposition
有界算子 $T\in\mathcal L(E)$ 的谱具有如下性质：

1. $\rho(T),\sigma(T)$ 均非空，且 $\sigma(T)$ 是 $\mathbb C$ 中的紧集；

2. 谱半径【spectral radius】
   $$
   r_\sigma(T) := \lim_{k\to\infty} \|T^k\|^{1/k} = \max_{\lambda\in\sigma(T)} |\lambda|.
   $$

:::

::: proposition
紧算子 $T\in\mathcal K(E)$ 的谱具有如下特殊性质：

1. $0\in \sigma(T)$；

2. $\sigma(T)$ 是至多可数集，且 $T$ 的非零特征值都是谱中的孤立点，并且具有有限的代数重数，即
   $$
   \sigma_d(T) = \sigma(T)\backslash\{0\} = P\sigma(T)\backslash\{0\}.
   $$

:::

## 算子序列的收敛性

::: definition
对于有界算子序列 $\{T_n\}\subset\mathcal L(E)$，可以定义如下的收敛性：

- 逐点收敛【pointwise convergence】$T_n \xrightarrow{p} T$：对任意 $x\in E$，有 $T_nx \to Tx$

- 一致/依范数收敛【uniform/norm convergence】 $T_n \xrightarrow{\|\cdot\|} T$：
  $\|T_n - T\|_{\mathcal L(E)} \to 0$

以下收敛性均建立在逐点收敛的基础之上：

- 紧收敛【compact convergence】$T_n \xrightarrow{c} T$：
  对单位球 $B_E$ 中的任意序列 $\{x_n\}$，有 $\{(T_n-T)x_n\}$ 是相对紧的（有紧的闭包）

- 集体紧收敛【collectively compact convergence】$T_n \xrightarrow{cc} T$：
  存在 $N\in\mathbb{N}$，使得 $\{T_n-T\}_{n>N}$ 是集体紧的（$\bigcup_{n>N} (T_n-T)B_E$ 是相对紧的）

- 稳定收敛【stable convergence】$T_n\xrightarrow{s}T$：
  满足稳定条件——存在 $M>0,N\in\mathbb{N}$，使得对任意 $n>N$，
  都有 $T_n^{-1}\in\mathcal L(E)$ 并且 $\|T_n^{-1}\|\le M$

- 正则收敛【regular convergence】$T_n\xrightarrow{r} T$：
  满足正则性条件——对任意满足 $T_nx_n \to y, n\in\cal N_1\subset\mathbb{N}$ 的有界序列
  $\{x_n\}\subset E$，其自身存在收敛子列 $x_n\to x, n\in\cal N_2\subset N_1$，并且 $Tx = y$

:::

它们之间存在如下关系：

::: proposition
1. 若 $T_n \xrightarrow{\|\cdot\|} T$，则 $T_n\xrightarrow{c}T$；

2. 若 $T_n \xrightarrow{cc} T$，则有 $T_n \xrightarrow{c} T$，
   并且 $T_n-T\in\mathcal K(E), \forall n>N$；

3. 若 $T_n \xrightarrow{cc} T$ 或 $T_n\xrightarrow{c}T$，
   则 $T_n - zI \xrightarrow{r} T-zI, \forall z\in\rho(T)$；

4. 对所有 $z\in\rho(T)$，$T_n-zI \xrightarrow{r} T-zI \iff T_n-zI \xrightarrow{s} T-zI$；

5. 对所有 $z\in\rho(T)$，
   $T_n-zI \xrightarrow{s} T-zI \iff (T_n-zI)^{-1} \xrightarrow{p} (T-zI)^{-1}, T_n\xrightarrow{p}T$。

:::

::: proof
结论 1、2 由收敛性的定义易得，下面证明后续结论。

3：由 2，只需设 $T_n\xrightarrow{c} T$，
并任取满足 $(T_n-zI)x_n \to y, n\in\cal N_1\subset\mathbb{N}$ 的有界序列 $\{x_n\}\subset E.$

- 首先由紧收敛性可以得到存在收敛子列 $(T_n-T)x_n \to u, n\in\cal N_2\subset N_1$，从而
  $$
  (T-zI)x_n \to y-u, \quad n\in\cal N_2.
  $$

- 进一步由 $z\in\rho(T)$，可知 $(T-zI)^{-1}\in\mathcal L(E)$，从而
  $$
  x_n = (T-zI)^{-1}(T-zI)x_n \to (T-zI)^{-1}(y-u) =: x, \quad n\in\cal N_2,
  $$
  并且 $(T-zI)x = y-u$；

- 最后只需再证明 $u = 0$：对于 $n\in\cal N_2$，我们有
  $$
  \|(T_n-T)x_n\| \le \|(T_n-T)x\| + \|(T_n-T)(x_n-x)\|,
  $$
  其中第一项由 $T_n\xrightarrow{p}T$ 可知趋于 0；
  而对任意 $\varepsilon>0$，存在 $N\in\mathbb{N}$，
  使得当 $n>N, n\in\cal N_2$ 时有 $\|x_n-x\| < \varepsilon$，从而上述第二项有估计

  ```math
  \begin{aligned}
  \|(T_n-T)(x_n-x)\| &\le \sup_{m\in\cal N_2} \|(T_n-T)(x_m-x)\| \\
  &\le \max\left\{(\|T_n\| + \|T\|)\varepsilon,~ \max_{m\le N} \|(T_n-T)(x_m-x)\|\right\} \\
  &\le \left(\sup_{n\in \mathbb{N}} \|T_n\| + \|T\|\right)\varepsilon + \max_{m\le N} \|(T_n-T)(x_m-x)\|,
  \end{aligned}
  ```

  根据**一致有界性定理**，由逐点收敛性可得 $\sup_{n\in \mathbb{N}} \|T_n\|<\infty$，
  因此上式右端第一项可被 $\varepsilon$ 的常数倍控制，而第二项仅在有限个点处取最大值，
  根据 $T_n\xrightarrow{p}T$ 即知其趋于 0，从而整一项趋于 0。
  因此 $u = 0$。

4：先由稳定收敛推出正则收敛：
任取满足 $(T_n-zI)x_n \to y, n\in\cal N_1\subset\mathbb{N}$ 的有界序列 $\{x_n\}\subset E$，
只需证明 $x_n \to x := (T-zI)^{-1}y, n\in\cal N_1$，即看
$$
x_n - x = (T_n-zI)^{-1}\big((T_n-zI)x_n - y + (T-zI)x -(T_n-zI)x\big) \\
\Longrightarrow\quad \|x_n-x\| \le \|(T_n-zI)^{-1}\| \big(\|(T_n-zI)x_n - y\| + \|T_n x - Tx\|\big), \quad\forall n\in\cal N_1.
$$
由稳定条件，可知 $n\in \cal N_1$ 足够大时，$\|(T_n-zI)^{-1}\|\le M$，
再由 $T_n\xrightarrow{p}T$ 即可得到 $x_n\to x, n\in\cal N_1$；

下面采用反证法由正则收敛推出稳定收敛：假设 $\|(T_n-zI)^{-1}\| \to \infty$，
则存在一列 $\{x_n\}\subset E$，使得
$$
\frac{\|(T_n-zI)^{-1}x_n\|}{\|x_n\|} \to\infty \iff \frac{\|y_n\|}{\|(T_n-zI)y_n\|} \to \infty.
$$
不妨设 $\|y_n\| = 1$，即知 $\|(T_n-zI)y_n\|\to 0$，即 $(T_n-zI)y_n \to 0.$  则由正则性条件，
可知存在收敛子列 $y_n \to y, n\in\cal N_1\subset \mathbb{N}$，并且 $(T-zI)y = 0$，
这与 $z\in\rho(T)$ 矛盾。

5：由恒等式
$$
(T_n-zI)^{-1} - (T-zI)^{-1} = (T_n-zI)^{-1}(T-T_n)(T-zI)^{-1} \tag{$*$}
$$
易得结论。
:::

## 谱序列的收敛性

算子序列的稳定收敛性还将带来对应谱序列的收敛性。先看几个定义：

::: definition
- $\sigma(T)$ 的一个子集 $\tau$ 称为孤立的【isolated】，
  如果存在开集 $\Delta\subset \mathbb C$，使得 $\sigma(T)\cap \Delta = \tau$

- 对于 $\sigma(T)$ 的一个孤立部分 $\tau$，其谱投影【spectral projection】定义为
  $$
  \text{Pr}_\tau := \frac1{2\pi i}\int_\Gamma (T-zI)^{-1}\,dz \in \mathcal L(E),
  $$
  其中 $\Gamma$ 是分离 $\tau$ 和 $\sigma(T)\backslash\tau$ 的 Jordan 闭曲线。

:::

::: proposition
谱投影具有如下性质（详见 [@chatelin83, 定理 2.27]）：

- 是一个投影算子，即 $\text{Pr}_\tau^2 = \text{Pr}_\tau$；

- 令 $G = R(\text{Pr}_\tau), H = R(I-\text{Pr}_\tau)$，则 $E = G \oplus H$，
  并且 $T\circ\text{Pr}_\tau = \text{Pr}_\tau\circ~T$，
  从而 $G,H$ 是 $T$ 的不变子空间；

- $\sigma(T|_G) = \tau, \sigma(T|_H) = \sigma(T)\backslash\tau$。

:::

现设 $\lambda$ 是 $T$ 的一个**重数有限的孤立特征值**。
考虑 $\tau = \{\lambda\}$，对于 $T$ 的一个近似序列【approximation】$\{T_n\}$（逐点收敛），
我们期望得到
$$
\lim_{n\to\infty} \sigma(T_n)\cap \Delta = \{\lambda\}.
$$
假设对所有 $z\in\rho(T)$ 都有 $T_n-zI \xrightarrow{s} T-zI$，
即 $T_n\xrightarrow{p} T$ 并且存在 $N(z)\in\mathbb{N}$ 使得当 $n\in N(z)$ 时，总有
$$
(T_n-zI)^{-1}\in\mathcal L(E),\quad  \text{i.e.}~~ z\in \rho(T_n),
$$
并且 $\|(T_n-zI)^{-1}\| \le M(z) < \infty.$  我们期望找到关于某部分 $z$ **一致**的 $N$ 和 $M$，
这样当 $n$ 足够大时，我们就可以保证这部分 $z\in\rho(T_n)$，从而方便进行收敛性的分析。

最简单地，我们考虑 $\rho(T)$ 的任意**紧子集** $K$，易见对任意 $\varepsilon>0$，
都存在有限个点 $z_\varepsilon$，使得它们的 $\varepsilon$-邻域覆盖了 $K.$  从而由
$$
\|(T_n-zI)^{-1}\| \le \|(T_n-zI)^{-1} - (T_n-z_\varepsilon I)^{-1}\| + \|(T_n-z_\varepsilon I)^{-1}\|,
$$
只需再证明映射 $R_n:z\mapsto (T_n-zI)^{-1}$ 在 $\rho(T)$ 上连续，
且该连续性关于足够大的 $n$ 一致成立，我们就可以得到只与 $K$ 有关的 $N(K)\in\mathbb{N}$ 和 $M(K)>0$，
使得
$$
\sup_{z\in K, n>N(K)} \|(T_n-zI)^{-1}\| \le M(K). \tag{$**$}
$$
为证明 $R_n$ 的连续性，任意取定 $z_0\in\rho(T)$，有
$$
T_n-zI = T_n-z_0I + (z_0-z)I = (T_n-z_0I)\big(I - (z-z_0)(T_n-z_0I)^{-1}\big),
$$
从而当
$$
\|(z-z_0)(T_n-z_0I)^{-1}\| < 1, \qquad \text{i.e.}~~ |z-z_0| < \frac1{\|(T_n-z_0I)^{-1}\|}
$$
时，我们有
$$
(T_n-zI)^{-1} = \left(\sum_{k=0}^\infty (z-z_0)^k(T_n-z_0I)^{-k}\right)(T_n-z_0I)^{-1} = \sum_{k=0}^\infty (z-z_0)^k(T_n-z_0I)^{-k-1}.
$$
对任意 $\varepsilon\in(0,1)$，结合稳定收敛性，可知当 $n > N(z_0)$ 以及
$$
|z-z_0| < \frac\varepsilon{M(z_0)} \le \frac\varepsilon{\|(T_n-z_0I)^{-1}\|}
$$
时，有
$$
\|(T_n-zI)^{-1} - (T_n-z_0I)^{-1}\| = \left\|\sum_{k=1}^\infty (z-z_0)^k (T_n - z_0I)^{-k-1}\right\| \le \|(T_n-z_0I)^{-1}\|\sum_{k=1}^\infty \varepsilon^k \le \frac{M(z_0)\varepsilon}{1-\varepsilon}.
$$
由此，上述一致性得证。

现简记 $\text{Pr}_{\{\lambda\}} =: \text{Pr}$，
并相应记 $T_n$ 关于 $\sigma(T_n)\cap \Delta$ 的谱投影为 $\text{Pr}_n$，则由上可得：

::: proposition
设 $\Gamma$ 是围绕着 $\lambda\in\sigma(T)$ 的一条 Jordan 闭曲线，它在 $\rho(T)$ 中是紧的。
若对任意 $z\in\Gamma$，有 $T_n - zI \xrightarrow{s} T-zI$，则有

1. $\text{Pr}_n \xrightarrow{p} \text{Pr}$；

2. 对足够大的 $n$，成立 $\dim R(\text{Pr}_n)\ge \dim R(\text{Pr}).$

:::

::: proof
1. 结合上述 $(*)(**)$ 式可直接估计

   ```math
   \begin{aligned}
   \|(\text{Pr}_n - \text{Pr})x\| &= \frac1{2\pi}\left\|\int_\Gamma \big((T_n-zI)^{-1} - (T-zI)^{-1}\big)x\,dz\right\| \\
   &= \frac1{2\pi}\left\|\int_\Gamma (T_n-zI)^{-1}(T-T_n)(T-zI)^{-1}x\,dz\right\| \\
   &\le \frac{|\Gamma|}{2\pi}M(\Gamma)\cdot \sup_{z\in\Gamma}\|(T-T_n)(T-zI)^{-1}x\|,
   \qquad \forall n>N(\Gamma), x\in E.
   \end{aligned}
   ```

   而对固定的 $x$，映射 $z\mapsto (T-zI)^{-1}x$ 是连续的，故紧集 $\Gamma$ 的像也是紧集，
   从而由 $T_n\xrightarrow{p} T$ 可知当 $n\to\infty$ 时上式右端趋于 0（与上面同理，
   用有限个 $\varepsilon$-球覆盖该紧集）。

2. 注意到 $T|_{R(\text{Pr})}$ 的谱仅有 $\lambda$，且其重数有限，
   从而 $G:= R(\text{Pr})$ 是 $E$ 的有限维子空间。
   取其一组基 $\{g_i\}_{i=1}^m$，并设其对偶基为 $\{f_i\}_{i=1}^m\subset G^*$，即
   $$
   \langle f_i, g_j\rangle = \delta_{ij}, \quad i,j = 1,\cdots,m.
   $$
   于是由 1 可得
   $$
   \langle f_i, \text{Pr}_n g_j\rangle \to \delta_{ij} \quad (n\to\infty), \quad i,j = 1,\cdots,m,
   $$
   故当 $n$ 足够大时，$\{\text{Pr}_n g_i\}_{i=1}^m$ 在 $G_n := R(\text{Pr}_n)$ 中线性无关。
   因此 $\dim G_n \ge \dim G$ 成立。

:::

由此可见，当 $n$ 足够大时，$R(\text{Pr}_n)$ 非空，从而 $\sigma(T_n)\cap \Delta$ 非空。
综合前面的讨论，我们取
$$
\Delta_\varepsilon = \Delta\backslash B_\varepsilon(\lambda), \quad \varepsilon>0
$$
是 $\rho(T)$ 的紧子集，则存在 $N_\varepsilon := N(\Delta_\varepsilon)$ 使得当 $n>N_\varepsilon$ 时，
$\Delta_\varepsilon \in \rho(T_n)$，于是得到谱的收敛性：

::: theorem
若对任意 $z\in\Delta\backslash\{\lambda\}$，有 $T_n - zI \xrightarrow{s} T-zI$，
则有 $\lim_{n\to\infty} \sigma(T_n)\cap \Delta = \{\lambda\}.$
:::

至于特征向量的收敛，我们需要用到谱投影算子及其像空间的更多性质。
这里只给出主要结论，详见 [@chatelin83] 中的 Section 5.2–5.3，其中还会用到 Section 2.5、3.2 的内容。

::: theorem
若在 $\Delta$ 上成立 $T_n - zI \xrightarrow{ss} T-zI$，即

- 对任意 $z\in\Delta\backslash\{\lambda\}$，有 $T_n - zI \xrightarrow{s} T-zI$，

- 当 $n$ 足够大时，$\dim R(\text{Pr}_n) = \dim R(\text{Pr})$，

则 $\text{Pr}_n \xrightarrow{cc} \text{Pr}.$  进一步，
对任意趋于 $\lambda$ 的特征值序列 $\{\lambda_n\}$，
它们对应的单位特征向量序列 $\{\varphi_n\}$ 存在收敛子列，
且收敛到一个关于 $\lambda$ 的特征向量 $\varphi.$
:::
