---
title: 局部化定理
---

{@sect-12}

在这一节中，我们从几何与代数两种观点出发，
证明等变微分形式的局部化公式。
这个公式能够把等变微分形式的积分写成不动点集上的积分。
特别地，如果不动点集是离散的，那么这个积分就化为一个求和。

## Berline–Vergne 局部化公式

设紧 Lie 群 $G$ 作用在紧流形 $M$ 上，$n = \dim M$。
我们想要证明，一个等变形式的积分只与它在不动点附近的取值有关。
证明的思路是利用 Stokes 公式，将整个流形上的积分化为不动点附近的积分。

这个想法可以通过下面的命题得到验证。

::: proposition {@thm-12-exact}
设 $\alpha \colon \mathfrak{g} \to \Omega^\bullet (M)$ 是光滑映射，不要求等变。
假设 $d_{\mathfrak{g}} \alpha = 0$。则对任意 $X \in \mathfrak{g}$，形式
\[
\alpha (X)_n \in \Omega^n (M)
\]
是 $M \setminus M_0 (X)$ 上的恰当（exact）形式，
其中 $M_0 (X)$ 是向量场 $X$ 的零点集。
:::

::: proof
在 $M$ 上取一个 $G$-不变的度量。设 $\theta$ 是 $X$ 对应的 $1$-形式，
即对任意向量场 $Y$，有
\[
\theta (Y) = \langle X, Y \rangle.
\]
虽然 $\theta$ 不是等变形式，我们也还是记 $d_{\mathfrak{g}} \theta = (d - \iota_X) \theta$。
因为 $X$ 的流保持 $M$ 的度量，所以
\[
d_{\mathfrak{g}}^2 \theta = - \mathscr{L}_X \theta = 0.
\]
另外，$d_{\mathfrak{g}} \theta$ 在 $M \setminus M_0 (X)$ 上是可逆的偶数阶形式：
\[
\frac {1} {d_{\mathfrak{g}} \theta} =
- \frac {1} {\iota_X \theta} \biggl(
  1 + \frac {d \theta} {\iota_X \theta} +
  \biggl( \frac {d \theta} {\iota_X \theta} \biggr)^2 + \cdots
\biggr),
\]
其中，$\iota_X \theta = |X|^2$ 在 $M_0 (X)$ 以外都非零。
因此，
\[
0 = d_{\mathfrak{g}} \biggl( d_{\mathfrak{g}} \theta \wedge \frac {1} {d_{\mathfrak{g}} \theta} \biggr)
= d_{\mathfrak{g}} \theta \wedge d_{\mathfrak{g}} \frac {1} {d_{\mathfrak{g}} \theta}.
\]
由于 $d_{\mathfrak{g}} \theta$ 可逆，知
\[
d_{\mathfrak{g}} \frac {1} {d_{\mathfrak{g}} \theta} = 0.
\]
因此，对命题叙述中的 $\alpha$，我们有
\[
\alpha (X) = d_{\mathfrak{g}} \frac {\theta \wedge \alpha (X)} {d_{\mathfrak{g}} \theta},
\]
从而
\[
\alpha (X)_n = d \biggl[ \biggl(
\frac {\theta \wedge \alpha (X)} {d_{\mathfrak{g}} \theta}
\biggr)_{n-1} \biggr].
\]
:::

下面，我们假设 $M_0 (X)$ 是离散的集合。
对每个 $p \in M_0 (X)$，子群
\[
H = \{ \mathrm{e}^{tX} \mid t \in \mathbb{R} \} \subset G
\]
作用在切空间 $T_p M$ 上。从而，这个群的无穷小生成元 $X$ 也作用在切空间上，
我们将这个作用记为
\[
L_p \colon T_p M \to T_p M.
\]
事实上，$L_p$ 就是 Lie 导数，即向量场的 Lie 括号 $L_p(-) = [X, -]_p$。

::: lemma {@lem-12-lp-invert}
$L_p$ 是可逆线性映射。
:::

::: proof
若不然，则存在 $0 \neq v \in T_p M$，使得 $L_p v = 0$。
这意味着 $X$ 的流将 $v$ 固定不动，从而对任意 $t \in \mathbb{R}$，
$\exp_p (tv)$ 都是 $H$ 作用的不动点，其中 $H \subset G$ 是上面定义的子群
（注意 $M$ 上的度量是 $G$-不变的）。
:::

而 $G$ 通过等距同构作用在 $M$ 上，从而 $L_p \in \mathfrak{so} (T_p M)$。
因此，引理说明 $M$ 一定是偶数维。此时，我们可以得到 Pfaff 值
\[
\operatorname{pf} (L_p) = \pm \operatorname{det}^{1/2} (L_p),
\]
其中正负号取决于 $M$ 的定向。

::: theorem [Berline–Vergne 公式]
设 $\alpha \colon \mathfrak{g} \to \Omega^\bullet (M)$ 是光滑映射，不要求等变。
假设 $d_{\mathfrak{g}} \alpha = 0$。固定一个元素 $X \in \mathfrak{g}$。
如果 $M_0 (X)$ 是离散的集合，那么
\[
\int_M \alpha (X) = (-2 \mathrm{π})^{n/2} \sum_{p \in M_0 (X)}
\frac {\alpha(X)_0 (p)} {\operatorname{pf} (L_p)},
\]
其中 $n = \dim M$，下标 $0$ 表示取 $0$-形式的部分。
:::

::: proof
取 $T_p M$ 的一组与定向相符的标准正交基，使得 $L_p$ 表示为分块对角阵
\[
\operatorname{diag} \biggl( \Bigl( \begin{smallmatrix}
  0 & a_1 \\ -a_1 & 0
\end{smallmatrix} \Bigr), \ \dotsc, \ \Bigl( \begin{smallmatrix}
  0 & a_{n/2} \\ -a_{n/2} & 0
\end{smallmatrix} \Bigr) \biggr).
\]
在 $p$ 附近建立法坐标系，则 $X$ 的表达式是
\[
X = a_1 (x^2 \, \partial_1 - x^1 \, \partial_2) + \cdots +
a_{n/2} (x^n \, \partial_{n-1} - x^{n-1} \, \partial_n).
\]
事实上，$X$ 是一个 Killing 向量场（也就是说，它的流保持 $M$ 的度量），
它在整个流形上的值能由一个点处的信息确定。

和 @thm-12-exact 的证明中一样，我们令
\[
\theta = \frac{1}{a_1} (x^2 \, dx^1 - x^1 \, dx^2) + \cdots +
\frac{1}{a_{n/2}} (x^n \, dx^{n-1} - x^{n-1} \, dx^n).
\]
则 $\mathscr{L}_X \theta = 0$，且 $\iota_X \theta = \sum_i (x^i)^2$。

我们在每个 $p \in M_0 (X)$ 附近构造这样的 $\theta$，
然后通过单位分解，得到整个 $M$ 上的 $1$-形式 $\theta$，满足

- $\mathscr{L}_X \theta = 0$，并且在 $M_0 (X)$ 以外，有 $\iota_X \theta \neq 0$。

- 在每个 $p \in M_0 (X)$ 附近，$\theta$ 与上面构造的 $\theta$ 相同。

借助 @thm-12-exact 中的计算，我们有
\[
\begin{aligned}
  \int_M \alpha (X)
  &= \lim_{\varepsilon \to 0} \int_{M \setminus \bigcup_p B_\varepsilon (p)} \alpha (X) \\
  &= \lim_{\varepsilon \to 0} \int_{M \setminus \bigcup_p B_\varepsilon (p)}
    d \frac {\theta \wedge \alpha (X)} {(d - \iota_X) \, \theta} \\
  &= - \lim_{\varepsilon \to 0} \sum_{p \in M_0 (X)} \int_{\partial B_\varepsilon (p)}
    \frac {\theta \wedge \alpha (X)} {(d - \iota_X) \, \theta}.
\end{aligned}
\]
此时，式中的每个形式都有具体的坐标表达式。
通过初等的计算，$\partial B_\varepsilon (p)$ 上的积分等于
\[
(-2 \mathrm{π})^{n/2} \cdot \frac{\alpha (X)_0 (p)} {a_1 \cdots a_{n/2}}
= (-2 \mathrm{π})^{n/2} \cdot \frac{\alpha (X)_0 (p)} {\operatorname{pf} (L_p)}.
\]
:::

## 几个应用

下面，我们介绍这个结论的两个应用。
第一个应用是计算示性数的 Bott 公式。
我们回忆，若
\[
\Phi \in \mathbb{C}[\mathfrak{so} (n)]^{\mathrm{SO} (n)} \simeq \mathbb{C} [ p_1, \dotsc, p_{n/2-1}, e ]
\]
是不变多项式（参见 @thm-3-pon-class），
则 $\Phi$ 所对应的 $M$ 的**示性数**是
\[
\Phi (M) = \Bigl( \frac{-1}{2 \mathrm{π}} \Bigr)^{n/2} \int_M \Phi (\Omega).
\]

::: theorem [Bott 公式]
如果 $S^1$ 作用在 $M$ 上，其不动点集是离散的，那么
\[
\Phi (M) = \sum_{p: \text{不动点}}
\frac {\Phi (L_p)} {\operatorname{pf} (L_p)}.
\]
:::

这里我们说的 $L_p$ 是相对于 $S^1$ 的 Lie 代数的一个生成元 $X$ 而言的，
但事实上，不难看出这个表达式的值不依赖于生成元的选取。

::: proof
选取 $M$ 上的 $S^1$-不变度量，我们有等变曲率形式
\[
\Omega_{\mathfrak{g}} (X) = \Omega + \mu (X),
\]
其中 $\mu$ 是动量映射（@rmk-11-moment-map）。
由陈–Weil 理论，$d_{\mathfrak{g}} \Phi (\Omega_{\mathfrak{g}}) = 0$。
利用局部化公式，我们得到
\[
\begin{aligned}
  \Phi (M) &= \Bigl( \frac{-1}{2 \mathrm{π}} \Bigr)^{n/2}
  \int_M \Phi (\Omega + \mu (X)) \\
  &= \sum_{p: \text{不动点}} \frac {\Phi (\mu (X))} {\operatorname{pf} (L_p)}.
\end{aligned}
\]
而由 @rmk-11-moment-map，$\mu (X) = \mathscr{L}_X - \nabla_X$，
后一项在不动点处消失，而前一项就给出了我们需要的 $L_p$。
:::

我们要介绍的第二个应用是 Duistermaat–Heckman 公式，
它描述了辛流形的 Liouville 测度沿动量映射的前推。

::: theorem [Duistermaat–Heckman 公式] {@thm-12-duistermaat-heckman}
设 $(M, \omega)$ 是紧辛流形，$(G \curvearrowright M, \ \mu)$ 是 Hamilton 作用。
取一个元素 $X \in \mathfrak{g}$，假定 $M_0 (X)$ 是离散的集合。则
\[
\int_M \mathrm{e}^{\mathrm{i} \mu (X)} \frac{\omega^{n/2}}{(n/2)!}
= (2 \mathrm{π} \mathrm{i})^{n/2} \sum_{p \in M_0 (X)}
\frac {\mathrm{e}^{\mathrm{i} \mu(X) (p)}} {\operatorname{pf} (L_p)}.
\]
:::

事实上，这个公式就是使用**稳定相位法**近似计算左边的积分得到的公式，
但误差项消失了。也就是说，这个近似结果实际上是精确的。

定理中，$n$-形式 $\omega^{n/2} / (n/2)!$ 称为 **Liouville 测度**，
它是辛流形上典范的测度。通过动量映射 $\mu \colon M \to \mathfrak{g}^\vee$，
我们可以定义 $\mathfrak{g}^\vee$ 上的测度 $\nu$，使得
\[
\int_{\mathfrak{g}^\vee} f \, d \nu =
\int_M (f \circ \mu) \, \frac{\omega^{n/2}}{(n/2)!}.
\]
测度 $\nu$ 称为 **Duistermaat–Heckman 测度**，
它是 Liouville 测度沿动量映射的前推。这样，定理中等式的左边就能写成
\[
\int_{\mathfrak{g}^\vee} \mathrm{e}^{\mathrm{i} \langle -, X \rangle} \, d \nu,
\]
被积分的项其实是 Duistermaat–Heckman 测度的 Fourier 变换。
从这个角度出发，可以证明 Duistermaat–Heckman 公式的一个等价形式，
即测度 $\nu$ 实际上是由 $\mathfrak{g}^\vee$ 中的一些多面体上的多项式函数拼起来而得到的。
读者可参见 [@atiyah-bott]。

::: proof [@thm-12-duistermaat-heckman 的证明]
我们有
\[
\begin{aligned}
  \int_M \mathrm{e}^{\mathrm{i} \mu (X)} \frac{\omega^{n/2}}{(n/2)!}
  &= (-\mathrm{i})^{n/2} \int_M \mathrm{e}^{\mathrm{i} \mu (X)} \, \mathrm{e}^{\mathrm{i} \omega} \\
  &= (-\mathrm{i})^{n/2} \int_M \mathrm{e}^{\mathrm{i} \widetilde{\omega} (X)},
\end{aligned}
\]
其中，等变辛形式 $\widetilde{\omega} = \omega + \mu$ 是等变闭形式，
因此，$d_{\mathfrak{g}} \mathrm{e}^{\mathrm{i} \widetilde{\omega}} = 0$。
使用局部化公式就完成了证明。
:::

## 一般的局部化公式

下面，我们不再要求 $M_0 (X)$ 是离散的。
和我们介绍等变指标定理时类似，这时 $M_0 (X)$ 是 $M$ 的子流形，
但可能是不同维数的子流形的不交并。设 $N$ 是法丛。
与之前不同，现在 $M$ 可能是奇数维的，但 $N$ 的秩一定是偶数，
其原因和 @lem-12-lp-invert 相同。

我们记
\[
\mathfrak{g}_0 = \{ Y \in \mathfrak{g} \mid [Y, X] = 0 \} \quad \subset \mathfrak{g},
\]
并设 $G_0 = \exp \mathfrak{g}_0 \subset G$。
则作用 $G_0 \curvearrowright M$ 保持向量场 $X$ 不变，从而
$G_0$ 的作用也保持了子流形 $M_0 (X)$（但并非将它固定不动）。
这又诱导了 $G_0$ 在法丛 $N$ 上的作用。

在 $N$ 上取 $G_0$-不变的度量和联络，我们能得到 $G_0$-等变的曲率形式
\[
\Omega_{\mathfrak{g}_0}^N (Y) = \Omega^N + \mu^N (Y),
\]
其中 $Y \in \mathfrak{g}_0$。

::: theorem [Berline–Vergne 公式] {@thm-12-loc-formula}
设 $\alpha \colon \mathfrak{g} \to \Omega^\bullet (M)$ 是光滑映射，不要求等变。
假设 $d_{\mathfrak{g}} \alpha = 0$。固定一个元素 $X \in \mathfrak{g}$。
则对足够靠近 $X$ 的 $Y \in \mathfrak{g}_0$，有
\[
\int_M \alpha (Y) = \int_{M_0 (X)} (2 \mathrm{π})^{n_1/2}
\frac {\alpha(Y)} {e_{\mathfrak{g}_0} (N) \, (Y)},
\]
其中 $n_1 (x) = n - \dim_x M_0$，而 $e_{\mathfrak{g}_0}$ 是等变 Euler 类。
特别地，
\[
\int_M \alpha (X) = \int_{M_0 (X)} (-2 \mathrm{π})^{n_1/2}
\frac {\alpha(X)} {\operatorname{pf} (\Omega^N + L^N)},
\]
其中 $L^N$ 的定义和之前的 $L_p$ 同理。
:::

定理的证明方法与之前类似，但涉及冗长的曲率计算。
详细的证明可见 [@bgv, §7.2]。
不过，我们在下一节将给出这一公式的另一证明路径。

## Atiyah–Bott 局部化定理

设紧 Lie 群 $G$ 作用在流形 $M$ 上，
设 $T \subset G$ 是极大环面。则有一个自然的映射
\[
i^\sharp \colon H_G^\bullet (M; \mathbb{C}) \to H_T^\bullet (M; \mathbb{C}).
\]
可以证明，这一映射是单射，且其像是 $H_T^\bullet (M; \mathbb{C})^W$，
其中 $W$ 是 Weyl 群。因此，我们可以只研究 $H_T^\bullet (M)$，
然后将 $H_G^\bullet (M)$ 从其中恢复出来。

设 $F \subset M$ 是 $T$-不动点的集合。我们将证明，映射
\[
i^* \colon H_T^\bullet (M; \mathbb{C}) \to H_T^\bullet (F; \mathbb{C})
\]
几乎是一个同构，并从中得到局部化公式。

设 $X_1, \dotsc, X_{\ell}$ 是 $T$ 的 Lie 代数 $\mathfrak{t}$ 的一组基。则
\[
H_T^\bullet (\{*\}; \mathbb{C}) \simeq \mathbb{C}[\mathfrak{t}]^T \simeq \mathbb{C}[\mathfrak{t}] \simeq \mathbb{C}[X_i].
\]
因此，等变上同调环 $H_T^\bullet (M)$ 实际上是一个 $\mathbb{C}[X_i]$-代数。

从代数几何的角度看，$\mathbb{C}[X_i]$-代数 $H_T^\bullet (M; \mathbb{C})$ 实际上是仿射空间
\[
\operatorname{Spec} \mathbb{C}[X_i] \simeq \mathbb{C}^{\ell} \simeq \mathfrak{t} \otimes \mathbb{C}
\]
上的一个拟凝聚代数层。我们将这个拟凝聚层记为 $\mathscr{H}$。
这个代数层的支集是
\[
\operatorname{supp} H
= \bigcap_{\substack{f \in \mathbb{C}[X_i] \\ fH = 0}} V(f)
= V(\operatorname{ann} H),
\]
其中 $H = H_T^\bullet (M; \mathbb{C})$，记号 $V(f)$ 表示 $f$ 的零点集，
$\operatorname{ann} H$ 是 $H$ 的零化子。

::: lemma
设 $K \subset T$ 是闭子群。
如果存在 $T$-等变的映射 $M \to T/K$
（换言之，$M$ 中的 $T$-轨道至多被压缩成 $T/K$），那么
\[
\operatorname{supp} H \subset \mathfrak{k} \otimes \mathbb{C},
\]
其中 $\mathfrak{k}$ 是 $K$ 的 Lie 代数。
特别地，如果 $K \neq T$，那么 $H$ 是挠模。
:::

::: proof
设 $f \in \mathbb{C} [\mathfrak{t}]$，满足 $f|_{\mathfrak{k} \otimes \mathbb{C}} = 0$。
我们只需要证明 $fH = 0$。

我们有
\[
H_T^\bullet (T/K)
\simeq H^\bullet \biggl( \frac{T/K \times \mathrm{E} T}{T} \biggr)
\simeq H^\bullet (\mathrm{E} T / K)
\simeq H_K^\bullet (\{*\}) \simeq \mathbb{C} [\mathfrak{k}],
\]
其中第三个等号是因为 @thm-1-contractible。
而由假设，我们有 $H_T^\bullet (T/K)$-模的交换图
\[
\begin{tikzcd}
  H_T^\bullet (T/K) \ar[r] \ar[d, "f"'] & H_T^\bullet (M) \ar[d, "f"] \\
  H_T^\bullet (T/K) \ar[r] & H_T^\bullet (M) \rlap{ .}
\end{tikzcd}
\]
因为 $f|_{\mathfrak{k} \otimes \mathbb{C}} = 0$，所以左边的竖直映射为零，
而右边的竖直映射由左边的映射诱导，故也为零。
:::

我们回忆，如果子群 $K \subset T$ 是某个点 $p \in M$ 的稳定子，即
\[
K = \{ t \in T \mid tp = p \},
\]
就称 $K$ 是一个**迷向子群**（isotropy subgroup）。

::: lemma {@lem-12-atiyah-bott}
沿用上面的记号，则作为 $\mathfrak{t} \otimes \mathbb{C}$ 的子集，有
\[
\operatorname{supp} H \subset
\bigcup_{K \subset T \ \text{迷向}} \mathfrak{k} \otimes \mathbb{C},
\]
并且，这样的迷向子群只有有限个。
:::

::: proof
设 $O \simeq T/K \subset M$ 是一个 $T$-轨道。
通过不变度量的指数映射，我们能得到 $O$ 的一个 $T$-不变的管状邻域 $U$，
它有一个 $T$-等变的投影映射 $U \to T/K$。
因此，对任何 $T$-不变的开集 $U' \subset U$，都有
\[
\operatorname{supp} H_T^\bullet (U'; \mathbb{C}) \subset \mathfrak{k} \otimes \mathbb{C}.
\]

我们把 $U$ 和轨道 $O$ 的法丛中零截面的 $\varepsilon$-邻域等同起来。
则 $T$ 在 $U$ 上的作用可以如下描述：首先把 $K$ 作用在法丛的纤维上，
然后通过 $T/K$ 的作用移动到别的纤维上。
并且，$K$ 在纤维上的作用是线性的，且在每个纤维上作用的方式相同。
因此，这些纤维中的点的稳定子群，实际上就是 $K$ 关于这个线性作用的迷向子群。

因为 $\mathrm{GL}(n)$ 的交换子群的所有元素可同时对角化，
所以 $T \curvearrowright U$ 的所有迷向子群就是 $K$ 的有限个子群。
而紧流形 $M$ 可被有限个这样的 $U$ 覆盖，
从而 $T \curvearrowright M$ 只有有限个迷向子群。

最后，关于支集的命题不难通过 Mayer–Vietoris 序列得到。
:::

设 $F \subset M$ 是 $T$-不动点的集合。
则 $F$ 以外的点的稳定子群都是 $T$ 的真子群。
上面的命题说明，$M$ 的等变上同调在这些地方都是“几乎为零”的。
下面的定理就是这个想法的严格表述。

::: theorem [Atiyah–Bott 局部化定理] {@thm-12-atiyah-bott}
在上面的记号下，映射
\[
i^* \colon H_T^\bullet (M; \mathbb{C}) \to H_T^\bullet (F; \mathbb{C})
\]
的核与余核的支集都包含于
\[
\bigcup_{K \subsetneq T \ \text{迷向}} \mathfrak{k} \otimes \mathbb{C}.
\]
特别地，其核与余核作为 $\mathbb{C} [\mathfrak{t}]$-模都是挠模。
:::

::: proof
我们有上同调的长正合列
\[
\cdots \to H_T^\bullet (M, F)
\to H_T^\bullet (M)
\to H_T^\bullet (F)
\to H_T^{\bullet+1} (M, F) \to \cdots,
\]
其中 $H_T^\bullet (M, F)$ 是相对等变上同调，读者不难猜出其定义。

为了证明定理，我们只需要证明
\[
\operatorname{supp} H_T^\bullet (M, F) \subset
\bigcup_{K \subset T \ \text{迷向}} \mathfrak{k} \otimes \mathbb{C},
\]
其中 $K$ 取遍 $T \curvearrowright M \setminus F$ 的所有（有限个）迷向子群。

通过不变度量的指数映射，我们可以取 $F$ 的 $T$-等变管状邻域 $U$。
将 @lem-12-atiyah-bott 的证明稍作修改，
也就是把这里的 $U$ 加入到证明中的开覆盖中，我们实际上证明了
\[
\operatorname{supp} H_T^\bullet (M, \overline{U}) \subset
\bigcup_{K \subsetneq T \ \text{迷向}} \mathfrak{k} \otimes \mathbb{C},
\]
因为我们可以把 $\overline{U}$ 中未被其它开集覆盖的部分用切除引理移走。

最后，因为 $\overline{U}$ 可以 $T$-等变地形变收缩到 $F$，
所以它们的等变上同调同构。
利用 $(M, \overline{U})$ 和 $(M, F)$ 的上同调长正合列和五引理，
我们就完成了证明。
:::

接下来，我们通过这个方法，推导出等变微分形式积分的局部化公式。

我们回忆 Thom 同构定理（@thm-2-thom）。
在非等变的情形下，如果我们记 $c = \operatorname{codim}_M F$，则有图表
\[
\begin{tikzcd}[column sep=1.5em]
  \cdots \ar[r] &
  H^{\bullet-1} (M \setminus F) \ar[r, "\delta"] &
  H^\bullet (M, M \setminus F) \ar[r] \ar[d, "\simeq"'] &
  H^\bullet (M) \ar[r] \ar[dl, dashed, shift left=2, "i^*"] &
  H^\bullet (M \setminus F) \ar[r] & \cdots \\
  && H^{\bullet-c} (F) \ar[ur, "i_*"] \rlap{ \ ,}
\end{tikzcd}
\]
其中虚线表示其次数与标注的不符，映射 $i_*$ 定义为它上方两个映射的复合。
我们回忆
\[
i^* \, i_* = e(N),
\]
其中 $N$ 是 $F$ 的法丛。

类似地，映射 $i_*$ 在等变的情形也可以定义，
此时 $i^* \, i_*$ 就等于等变 Euler 类 $e_{\mathfrak{t}}(N)$。
这一事实是等变示性类的（代数拓扑）定义的直接推论。

::: corollary {@thm-12-atiyah-bott-2}
映射
\[
i_* \colon H_T^\bullet (F; \mathbb{C}) \to H_T^{\bullet + c} (M; \mathbb{C})
\]
的核与余核的支集都包含于
\[
\bigcup_{K \subsetneq T \ \text{迷向}} \mathfrak{k} \otimes \mathbb{C}.
\]
:::

::: proof
由 @thm-12-atiyah-bott 和上面的长正合列的等变版本，命题立即得证。
:::

选一个 $f \in \mathbb{C} [\mathfrak{t}]$，
使得 @thm-12-atiyah-bott-2 中的支集包含于 $V(f)$。
我们将 $\mathbb{C} [\mathfrak{t}]$ 局部化为 $\mathbb{C} [\mathfrak{t}]_f$。则
\[
(i_*)_f \colon H_T^\bullet (F)_f \to H_T^{\bullet + c} (M)_f
\]
是同构。这说明，对任何等变上同调类 $\alpha \in H_T^\bullet (M)$，有
\[
\alpha = i_* \, \frac{i^*}{e_{\mathfrak{t}} (N)} \, \alpha + (f\text{-挠元}).
\]
然而，如果 $\beta$ 是 $f$-挠元，也就是说，
对任意 $X \in \mathfrak{t}$，微分形式 $f (X) \, \beta (X)$ 都是 $d_{\mathfrak{t}}$-恰当形式，
那么，对任意 $X \in \mathfrak{t}$ 都有 $\int_M \beta(X) = 0$。从而，
\[
\int_M \alpha (X)
= \int_M i_* \, \frac{i^* \alpha (X)}{e_{\mathfrak{t}} (N) \, (X)}
= \int_F (2 \mathrm{π})^{c/2} \, \frac{\alpha (X)}{e_{\mathfrak{t}} (N) \, (X)},
\]
其中 $(2 \mathrm{π})^{c/2}$ 是 Thom 形式的积分值。
我们就重新得到了局部化公式（@thm-12-loc-formula）。
