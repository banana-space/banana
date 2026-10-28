---
title: 刚性上同调
categories: [上同调论]
navboxes: [同调与上同调]
---

<problems>
- “一般系数”一节需要扩充。
</problems>

**刚性上同调**是由 P. Berthelot 引入的一种 $p$ 进[[同调与上同调|上同调]]。
它对某个固定的正特征 $p$ 的域 $k$
上的[[代数簇]] $X$ 赋予有限维分次 $K$-向量空间
$H^{\bullet}_{\mathrm{rig}}(X/K)$，
其中 $K$ 是某个具有特征 0 的完备非 Archimedes 域，
以 $k$ 为剩余域。

若 $X$ 完备且光滑，$W$ 是 $k$ 的一个 [[Cohen 环]]
（当 $k$ 为[[完美域]]时，$W$ 为 $k$ 的 [[Witt 向量环]]），$K=W[1/p]$
为 $W$ 的分式域，
则 $H^{\bullet}_{\mathrm{rig}}(X/K)$ 同构于有理[[晶体上同调]]
$H^{\bullet}_{\mathrm{crys}}(X/W)[1/p]$。
对非完备的代数簇，有理晶体上同调一般并非有限维；但刚性上同调总是有限维的。

光滑仿射代数簇的刚性上同调同构于 [[Monsky–Washnitzer 上同调]]。

除了上述“绝对”版本外，也可定义具有固定支集的刚性上同调、
具有紧支集的刚性上同调。更一般地，
这些刚性上同调空间还可以以任何[[过收敛有理晶体]]为局部系数。

## 定义

### 常系数

先设定一些记号。

- 令 $k$ 为具有特征 $p>0$ 的域。
  令 $\mathcal{O}_K$ 为以 $k$
  为剩余域的特征为 $0$ 的完备[[离散赋值环]]。
  令 $K$ 为 $\mathcal{O}_K$ 的分式域，
  并以 $|\cdot|$ 来表记其绝对值。

- 令 $S = \operatorname{Spf}\mathcal{O}_K$。
  对 $S$ 上的[[形式概形]] $\mathcal{P}$，
  我们用记号 $\mathcal{P}_k$ 来代表概形
  $\mathcal{P} \times_S \operatorname{Spec}k$，
  $\mathcal{P}_K$ 来代表
  $\mathcal{P}$ 的 Raynaud [[普遍纤维]]
  （它是 $K$ 上的[[刚性解析簇]]）。

- 令 $X$ 为 $k$ 上的代数簇。

与晶体上同调理论不同，此处不需假设
$S$ 具有 [[除幂结构]]，因此它可以非常[[分歧]]。

::: definition [标架]
包含了代数簇 $X$ 的**标架**为一系列态射
$X \hookrightarrow Y \hookrightarrow \mathcal{P}$，
其中 $Y$ 是 $k$ 上代数簇，$X \hookrightarrow Y$ 为开嵌入，
$\mathcal{P}$ 为 $S$ 上的形式概形，
$Y \hookrightarrow \mathcal{P}_k \to \mathcal{P}$ 为闭嵌入。
:::

::: definition [光滑标架]
称标架 $(X \subset Y \subset \mathcal{P})$
为**光滑**标架，
如果 $\mathcal{P}$ 为 $S$ 上形式[[光滑]]，
且具有有限拓扑型的形式概形。
:::

::: definition [紧合标架]
称标架 $(X \subset Y \subset \mathcal{P})$
为**紧合**标架，
如果 $Y/k$ [[紧合态射|紧合]]。
:::

::: definition [管状邻域]
设 $\mathcal{P} = \operatorname{Spf}A$ 为 $S$
上具有有限拓扑型的仿射形式概形。
设 $f_1,\ldots,f_r, g_1,\ldots, g_s \in A$，
$Y = \operatorname{Spec} A/I \cap D(g_1,\ldots,g_s)
  \cap \mathcal{P}_k $。
对 $\eta > 0$，定义
\[
\begin{aligned}
  [Y]_{\mathcal{P}\eta} &=
  \{x \in \mathcal{P}_K :
  \forall 1\leq i \leq r, |f_i(x)|\leq \eta,
  且 \exists 1\leq j\leq s, |g_j(x)|=1\}. \\
  ]Y[_{\mathcal{P}\eta} &=
  \{x \in \mathcal{P}_K : \forall 1\leq i \leq r, |f_i(x)| < \eta,
  且 \exists 1\leq j\leq s, |g_j(x)|=1\}.
\end{aligned}
\]
可以证明，存在常数 $\eta_0$，若 $\eta_0 < \eta < 1$，
则上述定义只依赖于概形 $Y$，
形式概形 $\operatorname{Spf}A$，
以及数字 $\eta$，而与 $f_i, g_j$
选择无关。因此，对任何形式概形 $\mathcal{P}$，
任何 $\mathcal{P}_k$ 的局部闭子概形 $Y$，
上述局部表达可以整体化而给出 $[Y]_{\mathcal{P}\eta}$，
$]Y[_{\mathcal{P}\eta}$。
它们分别称作 $Y$ 在 $\mathcal{P}$ 中的半径为 $\eta$
的**闭（开）管状邻域**。
$]Y[_{\mathcal{P}} =
  \bigcup_{\eta_0 <\eta < 1} [Y]_{\mathcal{P}\eta}$
则被简单地称作 $Y$ 的**管状邻域**。
:::

::: definition [严格邻域]
设 $\mathcal{V}$ 是 $K$ 上的[[刚性解析空间]]，
$\mathcal{T}$ 是 $\mathcal{V}$ 之[[可容许开集]]。
则 $\mathcal{V} \setminus \mathcal{T}$
的一个**严格邻域**是指 $\mathcal{V}$
的可容许开集 $\mathcal{W}$，
满足 $\mathcal{W} \cup \mathcal{T}$ 是 $\mathcal{V}$ 的[[可容许覆盖]]。
:::

::: definition [过收敛拉回]
设 $(X\subset Y \subset \mathcal{P})$ 为包含 $X$ 的标架。
令 $j_X\colon ]X[_{\mathcal{P}} \to ]Y[_{\mathcal{P}}$ 为包含态射。
对 $]Y[_{\mathcal{P}}$
上的层 $\mathcal{E}$，定义其**过收敛拉回**为
\[
j_{X}^{\dagger}\mathcal{E}
=\mathop{\mathrm{colim}}\limits_{\mathcal{V}}
j_{\mathcal{V}\ast} j_{\mathcal{V}}^{-1}\mathcal{E}
\]
其中 $\mathcal{V}$ 跑遍 $]X[_{\mathcal{P}}$ 在
$]Y[_{\mathcal{P}}$ 中的严格邻域。
:::

::: definition [刚性上同调]
设 $(X\subset Y \subset \mathcal{P})$ 为光滑紧合标架。
则 $]Y[_{\mathcal{P}}$ 的 de Rham 复形的过收敛拉回
$j_X^{\dagger}\Omega_{]Y[_{\mathcal{P}}/K}^{\bullet}$
的超上同调与光滑紧合标架的选择无关。它的上同调定义为 $X$
的（关于结构系数的）刚性上同调：
\[
H^{\bullet}_{\mathrm{rig}}(X/K)
= H^{\bullet}_{\mathrm{rig}}(X/K,\mathscr{O}_{X/K})
= R^{\bullet}\Gamma(]Y[_{\mathcal{P}},
j_X^{\dagger}\Omega_{]Y[_{\mathcal{P}}/K}^{\bullet})
\]
:::

### 一般系数

还能定义以过收敛晶体为系数的刚性上同调。

## 例子

::: example
令 $X = \mathbb{A}^{1}_{k}$，
$Y = \mathbb{P}^{1}_k$，$\mathcal{P} = \widehat{\mathbb{P}}^1_S$。
这里 $\widehat{\mathbb{P}}^{1}_{S}$ 是 $\mathbb{P}^{1}_S$
沿着 $\mathbb{P}_{k}^{1}$ 的完备化。
则 $(X \subset Y \subset \mathcal{P})$ 为光滑紧合标架。
此时，$]Y[_{\mathcal{P}} = \mathcal{P}_K =
  \mathbb{P}^{1,\mathrm{an}}_{K}$，
$]X[_{\mathcal{P}}$ 是单位闭圆盘
\[
D^{+}(0;1) =
\operatorname{Spm} K\langle t \rangle,
\]
其中 $K\langle t\rangle$ 是 [[Tate 代数]]
\[
\begin{aligned}
  K\langle t  \rangle
  &= \left(\lim_{n}
  \mathcal{O}_K[t]/\varpi^{n}\mathcal{O}_K[t]\right)
  \left[ \frac{1}{\varpi} \right] \\
  &= \left\{ \sum_{n=0}^{\infty} a_{n}t^{n}
  \in K [\![t]\!] : |a_n| \to 0\right\}
\end{aligned}
\]
这里，$\varpi$ 是 $\mathcal{O}_K$ 的极大理想的一个生成元。
留给读者验证，代数 $K\langle t \rangle$ 的 de Rham
复形具有无限维的 $H^{1}$。实际上，它等于 $\mathbb{A}^{1}_{k}$
的第一个有理晶体上同调，或者 Ogus 所定义的收敛上同调。

而 $]X[_{\mathcal{P}}$ 在
$]Y[_{\mathcal{P}}=\mathcal{P}_K$
中的任何严格邻域都包含于某个形如
\[
\mathbb{P}^{1,\mathrm{an}}_{K} \setminus {}]\infty_k[_{\widehat{\mathbb{P}}^{1}_{S},\eta}
\]
的严格邻域中。上述严格邻域为半径为 $\rho=\eta^{-1}$
的闭圆盘：
\[
\mathbb{D}^+(0;\rho) =
\operatorname{Spm} K\left\langle \frac{t}{\rho} \right\rangle,
\]
这里，对实数 $\rho > 0$
\[
K\left\langle \frac{t}{\rho}\right\rangle
=
\left\{
\sum_{n=0}^{\infty} a_{n} t^{n} \in K[\![t]\!] :  |a_n| \rho^{n} \to 0
\right\}.
\]
而这些严格邻域的结构层的过收敛拉回的截面恰为 [[Monsky–Washnitzer 代数]]
\[
K\langle t \rangle^{\dagger}
=
\left\{
\sum_{n=0}^{\infty} a_{n} t^{n} \in K\langle t \rangle :
\exists \rho > 1, |a_n| \rho^{n} \to 0
\right\}.
\]
（利用 $\mathbb{D}^+(0;1)$ 为[[拟 Stein 域]]）这个代数的 de Rham 复形即计算了刚性上同调：
\[
R\Gamma_{\mathrm{rig}}(\mathbb{A}^{1}_k/K)
=
\left[K\langle t \rangle^{\dagger} \xrightarrow{\frac{\partial}{\partial t}}
K\langle t \rangle^{\dagger}\right].
\]
直接计算可知，这个复形的第零个上同调同构于 $K$，
第一个上同调是平凡的。
:::

```terms
刚性上同调:
  en: rigid cohomology
  fr: cohomologie rigide
过收敛:
  en: overconvergent
  fr: surconvergent
有理晶体:
  en: isocrystal
  fr: isocristal :m
```
