---
title: 陈–Weil 理论（上）
---

{@sect-5}

从这一节开始，我们从一个全新的角度出发，来重新建造示性类的理论。
这个角度就是微分几何的观点。
我们将研究流形上的向量丛和主丛，
并通过它们的几何量，即曲率形式，来定义示性类。
这样定义出的示性类是一些闭微分形式，其 de Rham 上同调类就是我们之前研究的示性类。
这一套理论被称为**陈–Weil 理论**。

通过这种方式，我们能通过流形的几何量，来计算它的拓扑。
这种想法的一个经典的形式是 **Gauß–Bonnet 公式**：
对于二维可定向紧 Riemann 流形 $M$，我们有
\[
\int_M K \, d S = 2 \mathrm{π} \, \chi (M),
\]
其中 $K$ 是 Gauß 曲率，$dS$ 是面积元。
我们可以把陈–Weil 理论看作这个公式的一般形式。

从本节开始，所有流形都默认是光滑、不带边的。

## 联络和曲率

::: definition
设 $M$ 是流形。$M$ 上的一个**光滑向量丛**（smooth vector bundle）
是指一个（实或复）向量丛
\[
E \to M,
\]
其转移映射都是（从 $M$ 的开集出发的）光滑映射。
此时，$E$ 具有一个自然的光滑结构。
:::

在下面的讨论中，设 $E \to M$ 是一个光滑 $\mathbb{K}$-向量丛，
其中 $\mathbb{K} = \mathbb{R}, \mathbb{C}$。
设 $M$ 的维数为 $n$，$E$ 的秩为 $m$。
我们用记号 $\Gamma (E)$ 表示 $E$ 的所有光滑截面的集合。

向量丛 $E$ 上的一个**联络**就是一个将
$E$ 的每个纤维与它周围的纤维对齐的方法。
如果我们知道如何对齐这些纤维，我们就可以对 $E$ 的截面取方向导数。
这解释了下面的定义。

::: definition
$E$ 上的一个**联络**（connection）是一个映射
\[
\begin{aligned}
  \nabla \colon \Gamma (TM) \otimes \Gamma (E) &\to \Gamma (E), \\
  (X, \ s) &\mapsto \nabla_X s,
\end{aligned}
\]
满足以下公理：

- $\nabla_X s$ 关于 $X$ 是 $C^\infty (M)$-线性的，
  关于 $s$ 是 $\mathbb{K}$-线性的。

- （**Leibniz 法则**）
  如果 $X \in \Gamma (TM)$，$s \in \Gamma (E)$，$f \in C^\infty (M, \mathbb{K})$，那么
  \[
  \nabla_X (fs) = (Xf) \, s + f \, \nabla_X s.
  \]
  换言之，作为 $E$-取值的 $1$-形式（即 $T^* M \otimes E$ 的截面），有
  \[
  \nabla (fs) = (df) \, s + f \, \nabla s.
  \]

如果 $E$ 的纤维带有（Euclid 或 Hermite）度量，我们还可以要求：

- （**Leibniz 法则**）
  如果 $X \in \Gamma (TM)$，$s_1, s_2 \in \Gamma (E)$，那么
  \[
  X \, \langle s_1, s_2 \rangle =
  \langle \nabla_X s_1, s_2 \rangle + \langle s_1, \nabla_X s_2 \rangle.
  \]

此时，$\nabla$ 称为一个**度量联络**（metric connection）。
:::

在实际的计算中，上面的定义常常是不好用的。
我们将联络的局部信息提取出来，成为一些微分形式，以便于直接计算截面的方向导数。

::: definition
设开集 $U \subset M$ 上 $E$ 平凡，即 $E |_U \simeq U \times \mathbb{K}^m$。
设 $e_1, \dotsc, e_m$ 是由 $\mathbb{K}^m$ 的基给出的 $E |_U$ 的 $m$ 个截面。设
\[
\nabla e_j = \omega_j^i e_i,
\]
其中 $\omega_j^i \in \Omega^1 (U, \mathbb{K})$。
这 $m^2$ 个 $1$-形式称为联络 $\nabla$ 的**联络形式**（connection form）。
我们可以把 $\omega$ 看作
\[
\Omega^1 \bigl( U, \ \operatorname{End} (E) \bigr) =
\Gamma \bigl( T^* U \otimes \operatorname{End} (E) \bigr)
\]
的截面，因为它是由 $m^2$ 个 $1$-形式构成的矩阵，也就是一个取值为矩阵的 $1$-形式。
:::

需要注意的是，$\omega$ 并不能定义出整个 $M$ 上的 $1$-形式，
因为它不符合 $1$-形式的坐标变换法则。

::: remark
为了直观地理解联络形式，我们把 $\operatorname{End} (E)$ 与 Lie 代数 $\mathfrak{gl} (E)$ 等同起来。
对任意向量场 $X \in \Gamma (TM)$，局部截面
\[
\omega (X) \in \Gamma \bigl( U, \mathfrak{gl} (E) \bigr)
\]
给出了从某一点 $x \in U$ 出发，沿着 $X$ 的方向走无穷小的距离时，
得到 $E$ 的纤维的无穷小自同构，即 $\mathrm{GL} (E_x)$ 的一个无穷小元素。
这个自同构就是由联络所指定的将相邻纤维等同起来的方法。

事实上，对于一般的 Lie 群 $G$，我们也可以谈论 $G$-主丛上的联络，
其联络形式是取值于 Lie 代数 $\mathfrak{g}$ 的形式。
为了对用户友好，我们在行文中总是取 $G = \mathrm{GL} (n)$，
但一般的 Lie 群的情况其实大同小异。
:::

现在，我们就可以在局部上计算出截面的方向导数了：
\[
\nabla_X (s^j e_j) = X^\alpha (\partial_\alpha s^j) \, e_j
+ s^j X^\alpha (\omega_j^i)_\alpha \, e_i,
\]
其中希腊字母表示流形方向的坐标，罗马字母表示纤维方向的坐标。
记号 $(\omega_j^i)_\alpha$ 表示 $1$-形式 $\omega_j^i$ 的 $\alpha$-分量。
注意到，$\omega$ 描述了联络给出的方向导数和局部坐标下的导数的差异。

::: definition
联络 $\nabla$ 的**曲率形式**（curvature form）
是 $m^2$ 个 $2$-形式，定义为
\[
\Omega_j^i = d \omega_j^i + \omega_k^i \wedge \omega_j^k.
\]
这个公式可以简写成
\[
\Omega = d \omega + \omega \wedge \omega,
\]
其中 $\Omega$ 是 $\operatorname{End} (E)$ 取值的 $2$-形式，
记号 $\omega \wedge \omega$ 的意思是把两个矩阵相乘，
但矩阵的元素都是 $1$-形式，这些元素相乘的方法是做外积。
:::

由于记号约定不同，一些作者会把这个公式写成
\[
\Omega = d \omega - \omega \wedge \omega.
\]
出现这种现象的原因是，这些作者的上下标与我们相反，
所以我们的 $\omega_k^i \wedge \omega_j^k$
相当于这些作者的 $-\omega_k^j \wedge \omega_i^k$。

之所以将 $\Omega$ 称为曲率形式，是因为对 $X, Y \in \Gamma (TM)$，有

```math {@eq-5-omega-equals-r}
\Omega (X, Y) = R (X, Y) \quad \in \Gamma (\operatorname{End} (E)),
```

其中 $R (X, Y) = \nabla_X \nabla_Y - \nabla_Y \nabla_X - \nabla_{[X, Y]}$
是 Riemann 曲率张量。读者可以验证这个公式。

实际上，这个公式还说明，虽然 $\Omega$ 是局部定义的，
但它是整个 $M$ 上的一个张量。这个性质是联络形式所不具有的。

::: proposition
$\Omega$ 定义了整个 $M$ 上的一个 $2$-形式：
\[
\Omega \in \Omega^2 \bigl( M, \operatorname{End} (E) \bigr).
\]
:::

曲率形式还有另一种诠释。
给定 $E$ 上的一个联络，我们不仅能对 $E$ 的截面求方向导数，
也能对 $E$-取值的微分形式求方向导数：

::: definition
设 $s \in \Gamma (E)$，$\alpha \in \Omega^\bullet (M)$。
通过 Leibniz 法则，我们定义
\[
\nabla ( s \otimes \alpha ) = \nabla s \wedge \alpha + s \otimes d \alpha.
\]
这样就定义了 $E$-取值的微分形式的方向导数。
:::

于是，我们有一系列映射
\[
\Omega^0 (M, E) \overset{\nabla}{\longrightarrow}
\Omega^1 (M, E) \overset{\nabla}{\longrightarrow}
\Omega^2 (M, E) \overset{\nabla}{\longrightarrow} \cdots.
\]
对于 $s \in \Gamma (E)$，我们有

```math {@eq-5-curv-nabla-sq}
\nabla^2 s = \Omega s \quad \in \Omega^2 (M, E).
```

这个性质常常被简写为 $\Omega = \nabla^2$。请读者验证这个等式。

最后，我们有一个著名的关于曲率形式的等式，其验证留给读者。

::: proposition [Bianchi 恒等式] {@thm-5-bianchi}
在局部上，我们有
\[
d \Omega = [ \Omega, \omega ],
\]
其中 $[ \Omega, \omega ] = \Omega \wedge \omega - \omega \wedge \Omega$。
:::

## 曲率不变量

下面，我们从一个联络的曲率 $2$-形式中提取出一些不变量，
这些不变量不依赖于联络的选取。

::: definition
$n$ 阶矩阵的**不变多项式**（invariant polynomial）
是指一个函数
\[
P \colon \operatorname{M}_{n \times n} (\mathbb{C}) \to \mathbb{C},
\]
它是 $n^2$ 个矩阵元的多项式，并满足对任意矩阵 $A$ 和可逆矩阵 $T$，有
\[
P (TAT^{-1}) = P(A).
\]
:::

::: exercise {@ex-5-inv-poly}
设 $P$ 是 $n$ 阶矩阵的不变多项式。
则 $P$ 一定是矩阵的 $n$ 个特征值的对称多项式，
由此推出 $P$ 一定具有
\[
P (A) = p ( \operatorname{tr} A, \ \operatorname{tr} A^2, \ \dotsc, \ \operatorname{tr} A^n )
\]
的形式，其中 $p$ 是多项式。
:::

设 $E \to M$ 是光滑复向量丛，带有联络 $\nabla$。
一个不变多项式给出了向量丛 $\operatorname{End} (E)$ 的每个纤维到 $\mathbb{C}$ 的函数，
因为其取值不依赖于基的选取，只依赖于线性算子的特征值。
这个函数可以把 $\operatorname{End} (E)$-取值的微分形式变成普通的微分形式。

设 $P$ 是不变多项式。我们将它作用在曲率 $2$-形式 $\Omega$ 上，得到一个形式
\[
P (\Omega) \in \Omega^{2 \bullet} (M, \mathbb{C}).
\]
我们将证明，这个微分形式是闭形式，且它给出的 de Rham 上同调类不依赖于联络的选取。

::: proposition
$P (\Omega)$ 是闭形式。
:::

::: proof
将 $P$ 写成 @ex-5-inv-poly 的形式。
因为闭形式的外积仍然是闭形式，所以，我们只需证明
\[
d \operatorname{tr} \Omega^k = 0 \quad (k = 0, 1, \dotsc, m).
\]
而由 Bianchi 恒等式（@thm-5-bianchi），由归纳法不难证明
\[
d \Omega^k = [ \Omega^k, \omega ] \quad (k = 0, 1, \dotsc).
\]
因此，
\[
d \operatorname{tr} \Omega^k = \operatorname{tr} d \Omega^k
= \operatorname{tr} {} [ \Omega^k, \omega ] = 0.
\]
:::

::: proposition {@thm-5-conn-indep}
上同调类 $[P (\Omega)] \in H^{2 \bullet} (M; \mathbb{C})$
不依赖于联络 $\nabla$ 的选取。
:::

::: proof
设 $\nabla^0, \nabla^1$ 是 $E$ 上的两个联络。
考虑向量丛 $E \times \mathbb{R} \to M \times \mathbb{R}$，带有联络
\[
\nabla = t \widetilde{\nabla} ^1 + (1-t) \widetilde{\nabla} ^0,
\]
其中 $\widetilde{\nabla} ^i$（$i = 0, 1$）
是 $E \times \mathbb{R}$ 上的联络，
使得截面沿 $E$ 方向的导数由 $\nabla^i$ 给出，
沿 $\mathbb{R}$ 方向的导数由普通的导数给出。
换言之，$\widetilde{\nabla} ^i$ 是将
$\nabla^i$ 的联络 $1$-形式沿着投影映射拉回，
所定义的 $E \times \mathbb{R}$ 上的联络。

记 $i_0, i_1 \colon M \hookrightarrow M \times \mathbb{R}$ 为含入映射，
其 $\mathbb{R}$-分量分别为 $0$ 和 $1$。记 $\Omega^0, \Omega^1$
分别为 $\nabla^0, \nabla^1$ 的曲率形式。则
\[
[ P (\Omega^0) ] = i_0^* \, [ P (\Omega) ]
= i_1^* \, [ P (\Omega) ] = [ P (\Omega^1) ],
\]
因为 $i_0, i_1$ 是同伦的映射。
:::

这一系列结论表明，对每个不变多项式 $P$，
上同调类 $[ P (\Omega) ]$ 给出了复向量丛的拓扑不变量。
事实上，这些不变量就是我们熟悉的陈类，以及陈类的多项式。
在下面几个小节中，我们将导出这些不变量与陈类的对应关系。

::: definition
设 $1 \leq k \leq n$ 为整数。对 $n$ 阶复矩阵 $A$，我们记
\[
\sigma_k (A) = \sum_{1 \leq i_1 < \dotsc < i_k \leq n}
\lambda_{i_1} \cdots \lambda_{i_k}
\]
为 $A$ 的 $n$ 个特征值的第 $k$ 个初等对称多项式，
它是一个不变多项式。
:::

我们即将证明，$E$ 的陈类由下面的公式给出：
\[
c_k (E) = \frac {1} {(2 \mathrm{π} \mathrm{i})^k} \, [ \sigma_k (\Omega) ].
\]

## 第一陈类

我们首先考虑最简单的情况，即线丛的第一陈类。

::: theorem {@thm-5-c1}
设 $E \to M$ 是光滑复线丛，带有联络 $\nabla$ 和曲率形式 $\Omega$。则
\[
c_1 (E) = \frac {1} {2 \mathrm{π} \mathrm{i}} \, [ \Omega ].
\]
:::

::: proof
设 $E$ 的分类映射是
\[
\varphi \colon M \to \mathbb{C} \mathrm{P}^\infty,
\]
其中 $\mathbb{C} \mathrm{P}^\infty$ 是复线丛的分类空间。
由胞腔近似定理，$\varphi$ 的像可以同伦到 $\mathbb{C} \mathrm{P}^\infty$ 的一个有限维子 CW 复形中。
因此，在同伦意义下，我们可以将 $\varphi$ 视为一个映射
\[
\varphi \colon M \to \mathbb{C} \mathrm{P}^N \quad (N > 0).
\]
在同伦意义下，我们还可以假定 $\varphi$ 是光滑映射（例如利用磨光）。

我们知道 $H^2 ( \mathbb{C} \mathrm{P}^N; \mathbb{C} ) \simeq \mathbb{C} \cdot c_1$，
其中 $c_1$ 是自言线丛 $\mathscr{O} (-1)$ 的第一陈类。
因此，存在常数 $\alpha \in \mathbb{C}$，使得
\[
[ \Omega ] = \alpha \, c_1,
\]
其中 $\Omega$ 是 $\mathscr{O} (-1)$ 的曲率形式。

我们有 $E \simeq \varphi^* \mathscr{O} (-1)$。
我们可以把 $\mathscr{O} (-1)$ 的联络 $1$-形式通过 $\varphi$ 拉回，
得到 $E$ 上的联络，其曲率形式是 $\Omega^E = \varphi^* \Omega$。从而
\[
[ \Omega^E ] = \alpha \, \varphi^* c_1 = \alpha \, c_1 (E).
\]

最后，我们来确定常数 $\alpha$。

我们改变记号：设 $M$ 是二维可定向 Riemann 流形，
$E \to M$ 是 $M$ 的切丛。则 $E$ 可以自然地被看作一个复线丛，
因为乘以 $\mathrm{i}$ 的操作就是逆时针旋转 $90^\circ$。
在 $E$（作为实向量丛）上有一个自然的度量联络，
即 Levi-Civita 联络，我们记作 $\nabla^{\mathbb{R}}$。

取 $E$ 的局部截面 $e_1$，满足 $|e_1| \equiv 1$，并记 $e_2 = \mathrm{i} e_1$。
以它们为局部坐标，则 $\omega_1^1 = 0$，因为对任何向量场 $X$，
有 $\nabla^{\mathbb{R}}_X e_1 \perp e_1$。这说明
\[
\nabla^{\mathbb{R}} e_1 = \omega_1^2 \otimes e_2
= \mathrm{i} \omega_1^2 \otimes e_1.
\]
我们定义 $E$（作为复向量丛）上的联络 $\nabla^{\mathbb{C}}$ 如下：
对任何截面 $s$，定义
\[
\nabla^{\mathbb{C}} s = \nabla^{\mathbb{R}} s \quad \in \Omega^1 (M, E).
\]
则 $\nabla^{\mathbb{C}}$ 确实是联络，
因为联络的本质就是把邻近的纤维对齐的方法，
而 $\nabla^{\mathbb{R}}$ 保持了纤维上的内积，从而也是 $\mathbb{C}$-线性的。

现在，我们有 $\nabla^{\mathbb{C}} e_1 = \mathrm{i} \omega_1^2 \otimes e_1$。
因此，$\nabla^{\mathbb{C}}$ 的联络形式是
\[
\omega^{\mathbb{C}} = \mathrm{i} \omega_1^2,
\]
这里我们省去了 $\omega^{\mathbb{C}}$ 的上下标 $1$。从而，$\nabla^{\mathbb{C}}$ 的曲率形式是
\[
\Omega^{\mathbb{C}} = \mathrm{i} \Omega_1^2.
\]

为了确定 $\alpha$ 的值，我们取 $M = S^2$ 为标准的单位球面。
一方面，我们有
\[
\int_{S^2} \Omega^{\mathbb{C}} = \alpha \, \langle c_1 (TM), \ [M] \rangle
= \alpha \, \langle e(TM), \ [M] \rangle = 2 \alpha,
\]
而另一方面，由 @eq-5-omega-equals-r，
在开集 $U \subset S^2$ 上的局部坐标中，有
\[
\int_U \Omega^{\mathbb{C}} = \mathrm{i} \int_U \Omega_1^2
= \mathrm{i} \int_U K \, dS = \mathrm{i} \cdot (U \text{ 的面积}),
\]
其中 $K$ 是 Gauß 曲率，$S$ 是面积元。因此，
\[
2 \alpha = \mathrm{i} \cdot (S^2 \text{ 的面积}) = 4 \mathrm{π} \mathrm{i},
\]
从而 $\alpha = 2 \mathrm{π} \mathrm{i}$。
:::

现在，我们已经知道了 $\alpha$ 的值。
因此，在上面的证明最后，如果我们把 $S^2$ 换成别的流形，
就可以导出 Gauß–Bonnet 公式。

::: corollary [Gauß–Bonnet 公式]
设 $M$ 是二维可定向紧 Riemann 流形。则
\[
\int_M K \, d S = 2 \mathrm{π} \, \chi (M),
\]
其中 $K$ 是 Gauß 曲率，$dS$ 是面积元。
:::

## 陈形式

::: theorem
设 $E \to M$ 是光滑复向量丛，带有联络 $\nabla$ 和曲率形式 $\Omega$。则
\[
c_k (E) = \frac {1} {(2 \mathrm{π} \mathrm{i})^k} \, [ \sigma_k (\Omega) ].
\]
因此，$2k$-形式 $(2 \mathrm{π} \mathrm{i})^{-k} \sigma_k (\Omega)$
称为 $E$ 的第 $k$ 个**陈形式**。
:::

::: proof
考虑 $m$ 阶矩阵的不变多项式 $P$，定义为
\[
P (A) = \sum _{k=0} ^m \frac {1} {(2 \mathrm{π} \mathrm{i})^k} \, \sigma_k (A)
= \operatorname{det} {} \Bigl( I + \frac {A} {2 \mathrm{π} \mathrm{i}} \Bigr),
\]
其中 $I$ 表示单位矩阵。这个不变多项式对应着向量丛的全陈类。

我们先考虑 $E = L_1 \oplus \cdots \oplus L_m$ 是若干线丛的直和的情况。
我们在每个 $L_i$ 上取联络 $\nabla^i$，然后定义 $E$ 上的联络
$\nabla = \bigoplus_i \nabla^i$。换言之，$\nabla$ 的联络 $1$-形式是
\[
\omega = \operatorname{diag} (\omega^1, \dotsc, \omega^m),
\]
即由各 $\nabla^i$ 的联络形式构成的对角矩阵。从而，$\nabla$ 的曲率形式是
\[
\Omega = \operatorname{diag} (\Omega^1, \dotsc, \Omega^m).
\]
因此，
\[
\begin{aligned}
  P (\Omega)
  &= \operatorname{det} {} \biggl[ \operatorname{diag} {} \biggl(
    1 + \frac {\Omega^1} {2 \mathrm{π} \mathrm{i}}, \ \dotsc, \
    1 + \frac {\Omega^m} {2 \mathrm{π} \mathrm{i}} \biggr) \biggr] \\
  &= P (\Omega^1) \cdots P (\Omega^m) \\
  &= c (L_1) \cdots c (L_m) \\
  &= c (E),
\end{aligned}
\]
其中第三个等号使用了 @thm-5-c1。

对于一般的情况，使用分裂原理不难完成证明。
当然，我们需要的是光滑版本的分裂原理，
但其证明与拓扑版本的分裂原理是完全相同的。
:::

在上面的证明中，我们也得到了计算全陈类的公式。
我们将这个公式和计算陈特征的公式一并列出：

::: corollary {@thm-5-total-chern}
设 $E \to M$ 是光滑复向量丛，带有联络 $\nabla$ 和曲率形式 $\Omega$。则
\[
\begin{aligned}
  c (E) &= \biggl[ \operatorname{det} {} \Bigl( I + \frac {\Omega} {2 \mathrm{π} \mathrm{i}} \Bigr) \biggr]
    && \in H^{2 \bullet} (M; \mathbb{C}), \\
  \operatorname{ch} (E) &= [ \operatorname{tr} \mathrm{e}^{\Omega / 2 \mathrm{π} \mathrm{i}} ]
    && \in H^{2 \bullet} (M; \mathbb{C}).
\end{aligned}
\]
:::

实向量丛的 Понтрягин 类是通过陈类定义的。
因此，我们也能将 Понтрягин 类用微分形式表示出来。

::: corollary
设 $E \to M$ 是光滑实向量丛，带有联络 $\nabla$ 和曲率形式 $\Omega$。则
\[
p_k (E) = \frac {1} {(2 \mathrm{π})^{2k}} \, [ \sigma_{2k} (\Omega) ].
\]
因此，$4k$-形式 $(2 \mathrm{π})^{-2k} \sigma_{2k} (\Omega)$
称为 $E$ 的第 $k$ 个 **Понтрягин 形式**。
:::

::: proof
证明中唯一不太显然的地方是：
$E$ 上的联络可以自然地诱导 $E \otimes \mathbb{C}$ 上的联络，
二者的联络形式相等，从而曲率形式也相等。
:::

## 陈–Gauß–Bonnet 公式

利用上面的理论，我们可以证明 Gauß–Bonnet 公式向高维流形的推广，
它把流形的 Euler 数表示为曲率不变量的积分。
事实上，奇数维紧流形的 Euler 数总是 $0$，
而对偶数维流形来说，切丛的 Euler 类是最高阶 Понтрягин 类的平方根。
因此，我们只要描述清楚这个平方根，就能获得计算 Euler 数的公式。

::: definition
设 $V$ 是已定向的 $n$ 维欧氏向量空间，
$e_1, \dotsc, e_n$ 为一组与定向相符的标准正交基。线性映射
\[
T \colon {\wedge^\bullet \, V} \to \mathbb{R}
\]
定义如下：$T (e_1 \wedge \cdots \wedge e_n) = 1$，$T (\wedge^{<n} \, V) = 0$。
映射 $T$ 称为 **Березин 积分**。
:::

::: definition
沿用上面的记号，设 $A \in \wedge^2 \, V$，可以看作一个反对称矩阵。定义
\[
\exp^{\wedge} A = \sum _{k=0} ^\infty \frac {A^{\wedge k}} {k!}
\quad \in \wedge^\bullet \, V.
\]
事实上，这个求和是有限和。
我们定义 $A$ 的 **Pfaff 值**（Pfaffian）为
\[
\operatorname{pf} A = T ( \exp^{\wedge} A ).
\]
:::

Pfaff 值的重要性质是，它是行列式的平方根，
同时也是矩阵元素的多项式。

::: proposition
沿用上面的记号，将 $A$ 看成反对称矩阵，我们有
\[
(\operatorname{pf} A)^2 = \operatorname{det} A.
\]
:::

::: proof
通过正交相似变换，$A$ 可以化为标准型，即分块对角矩阵
\[
A = \operatorname{diag} (B_1, \dotsc, B_k, 0, \dotsc, 0), \quad
B_i = \Bigl( \begin{smallmatrix} 0 & a_i \\ -a_i & 0 \end{smallmatrix} \Bigr).
\]
我们记 $A = A_1 + \cdots + A_k$，
其中 $A_i$ 是将 $A$ 中除了 $B_i$ 外的部分都清零得到的矩阵。则
\[
A_i = a_i \, \bigl( e_{2i-1} \otimes e_{2i} - e_{2i} \otimes e_{2i-1} \bigr)
= a_i \, (e_{2i-1} \wedge e_{2i}),
\]
其中 $e_i$ 表示第 $i$ 个基向量。
因此，若 $k = n/2$，则
\[
\begin{aligned}
  T (\exp^\wedge A)
  &= \frac {1} {k!} \, T (A^{\wedge k}) \\
  &= \frac {1} {k!} \, T ( k! \, A_1 \wedge \cdots \wedge A_k ) \\
  &= a_1 \cdots a_k \, T ( e_1 \wedge \cdots \wedge e_n ) \\
  &= a_1 \cdots a_k.
\end{aligned}
\]
而 $\operatorname{det} A = a_1^2 \cdots a_k^2$。
若 $k < n/2$，则 $T (\exp^\wedge A) = 0$。
:::

有了 Pfaff 值，我们可以对反对称矩阵的行列式开平方根。
对于度量联络而言，曲率形式确实是反对称的：

::: proposition {@thm-5-curv-antisym}
设 $E \to M$ 是光滑实向量丛，具有 Euclid 度量。设 $\nabla$ 是度量联络。
则曲率形式 $\Omega$ 是取值于 $\mathfrak{so}(E)$ 的 $2$-形式，
即在标准正交基下表示为反对称矩阵：$\Omega_i^j = -\Omega_j^i$。
:::

::: proof
事实上，在局部坐标系中，联络形式也是反对称的，即满足若 $e_1, \dotsc, e_m$
是 $E$ 的局部截面，它们构成 $E$ 的每个纤维的标准正交基，则以它们为局部坐标，
有 $\omega_i^j = -\omega_j^i$。这是因为对任何向量场 $X$，有
\[
0 = X \langle e_i, \ e_j \rangle
= \langle \nabla_X e_i, \ e_j \rangle + \langle e_i, \ \nabla_X e_j \rangle
= \omega_i^j (X) + \omega_j^i (X).
\]
:::

因此，我们可以对得到偶数维流形切丛的最高阶 Понтрягин 类开平方，得到 Euler 类的表达式。

::: theorem [陈–Gauß–Bonnet 公式]
设 $E \to M$ 是光滑实向量丛，其秩为 $2n$。则
\[
e (E) = \biggl[ \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^n \operatorname{pf} (\Omega) \biggr]
\quad \in H^{2n} (M).
\]
特别地，如果 $M$ 是 $2n$ 维紧可定向流形，那么
\[
\chi (M) = \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^n \int_M \operatorname{pf} (\Omega),
\]
其中 $\Omega$ 是切丛的曲率形式。
:::

::: proof
和 @thm-5-c1 的证明一样，我们只需要对足够大的 $N$，
证明有限维 Graßmann 流形 $G_{2n} (\mathbb{R}^N)$ 上的“万有向量丛”$E$ 满足这一公式。
（事实上，这一步还用到了如下事实：$G_{2n} (\mathbb{R}^\infty)$ 有一个 CW 结构，
其每个 $k$-骨架都包含于某个子复形 $G_{2n} (\mathbb{R}^N)$。
对这样的 CW 结构的描述可参见 [@griffiths-harris, p. 194ff.]。）

此时，$e (E)^2 = p_n (E)$，且
$\operatorname{pf} (\Omega)^2 = \operatorname{det} (\Omega) = \sigma_{2n} (\Omega)$。故必有
\[
e (E) = \varepsilon \, \biggl[ \Bigl( \frac{1}{2\mathrm{π}} \Bigr)^n \operatorname{pf} (\Omega) \biggr], \quad \varepsilon = \pm 1.
\]

下面，我们来确定 $\varepsilon$ 的值。
为此，我们只需考虑一个特例即可。

当 $n = 1$ 时，由我们的记号约定，局部上有 $\operatorname{pf} (\Omega) = -\Omega_1^2$。
而在 @thm-5-c1 的证明中，我们知道对球面 $S^2$，有
\[
[\operatorname{pf} (\Omega)] = \text{``} [ -\Omega_1^2 ] \text{''}
= -4 \mathrm{π} = -2 \mathrm{π} \, e (TS^2).
\]
这就说明 $n = 1$ 时，$\varepsilon = -1$。

对一般的 $n$，我们考虑 $n$ 个平面丛的直和 $E = E_1 \oplus \cdots \oplus E_n$。则
\[
\begin{aligned}
  [ \operatorname{pf} (\Omega) ]
  &= [ \operatorname{pf} (\Omega_1) ] \times \cdots \times [ \operatorname{pf} (\Omega_n) ] \\
  &= (-2 \mathrm{π})^n \, e (E_1) \times \cdots \times e (E_n) \\
  &= (-2 \mathrm{π})^n \, e (E),
\end{aligned}
\]
其中记号的意义是明显的。因此，$\varepsilon = (-1)^n$。
:::
