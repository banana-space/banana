---
title: 陈–Weil 理论（下）
---

{@sect-6}

在上一节中，我们已经基本完成了陈–Weil 理论的介绍。
这一节，我们介绍陈–Weil 理论的几个延伸和推广。

## Thom 形式和 Euler 形式

在这一小节中，我们打算把 Thom 类也用曲率不变量表示出来。
因为 Euler 类是 Thom 类的拉回，所以，
我们也能重新证明 Euler 类的陈–Gauß–Bonnet 公式。

这一小节的内容也被称为 **Mathai–Quillen 理论**，
原始文献是 [@mathai-quillen]。

::: definition
设 $E \to M$ 是光滑向量丛。
$E$ 上的一个微分形式称为**垂直紧支**（with compact vertical support）的，
如果它在每个纤维上的限制都是紧支的。记
\[
\Omega_{\mathrm{cv}}^\bullet (E) \subset \Omega^\bullet (E)
\]
为 $E$ 的所有垂直紧支微分形式构成的微分分次代数。
这个微分分次代数定义的 de Rham 上同调称为**垂直紧支上同调**
（compact vertical cohomology），记作 $H_{\mathrm{cv}}^\bullet (E)$。

若 $E$ 已定向，我们还有**沿纤维积分**（integration along the fibre）的操作：
\[
\int_{E/M} \colon \Omega_{\mathrm{cv}}^\bullet (E) \to \Omega^{\bullet - n} (M),
\]
其中 $n$ 是 $E$ 的秩，定义为
\[
\int_{E/M} f(x, t) \, dx^{\alpha_1} \wedge \cdots \wedge dx^{\alpha_p}
\wedge dt^{i_1} \wedge \cdots \wedge dt^{i_q} \\
\hspace{10em}
= \ \left \{ \begin{array}{ll}
  \displaystyle \biggl( \int_{\mathbb{R}^n} f(x, t) \,
    dt^1 \wedge \cdots \wedge dt^n \biggr) \,
    dx^{\alpha_1} \wedge \cdots \wedge dx^{\alpha_p}, & q = n, \\
  0, & \text{其它},
\end{array} \right.
\]
其中 $x$ 是底空间方向的变量，$t$ 是纤维方向的变量，且要求 $i_1 < \cdots < i_q$。
:::

我们有自然的同构
\[
H_{\mathrm{cv}}^\bullet (E) \simeq \widetilde{H}^\bullet (\mathrm{Th} (E)).
\]
直观地看，这是因为流形的紧支上同调同构于其一点紧化的约化上同调，
故垂直紧支上同调应该对应于给每个纤维增加一个公共的无穷远点。
我们略过严格的证明。

有了这个同构，我们可以将 Thom 类的定义用微分形式的语言重新写下来。

::: definition
设 $E \to M$ 是已定向的光滑向量丛，其秩为 $n$。
微分形式 $u \in \Omega_{\mathrm{cv}}^n (E)$ 称为一个 **Thom 形式**，如果

- $du = 0$。

- $\int_{E/M} u = 1 \in \Omega^0 (M)$。

则 $u$ 确定了 $H_{\mathrm{cv}}^n (E)$ 中的一个上同调类，即 Thom 类。

相应地，若 $i \colon M \to E$ 是通过零截面含入，那么闭形式
\[
e = i^* u \quad \in H^n (M)
\]
称为一个 **Euler 形式**，其上同调类就是 Euler 类。
:::

我们接下来的目标，就是把 Thom 形式和 Euler 形式用曲率不变量表示出来。

首先，我们考虑一个最简单的情况，即 $M = \{ * \}$。此时 $E$ 就是一个欧氏向量空间 $V$。
我们可以取
\[
u (x) = \frac {1} {(2 \mathrm{π})^{n/2}} \, \mathrm{e}^{-|x|^2 / 2} \,
dx^1 \wedge \cdots \wedge dx^n \quad (x \in V).
\]
则 $u$ 满足定义 Thom 形式的公式，但它不是紧支的。
我们先允许这个漏洞存在，一会再来解决紧支的问题。

Mathai–Quillen 理论的一个独特见解，
就在于它把一些公式写成了 Березин 积分的样子。例如，
\[
dx^1 \wedge \cdots \wedge dx^n = (-1)^{n (n-1) / 2} \, T ( \exp ( dx ) ),
\]
其中
\[
dx = e_1 \otimes dx^1 + \cdots + e_n \otimes dx^n
\quad \in \Omega^1 (V, \ {\wedge^\bullet \, V})
\]
是 $V$ 上的取值于平凡丛 $V \times {\wedge^\bullet \, V} \to V$ 的 $1$-形式。
对它作用 $\exp$ 时，纤维方向的向量 $e_i$ 在 $\wedge^\bullet \, V$ 中相乘。
Березин 积分取出这个外代数中 $e_1 \wedge \cdots \wedge e_n$ 的部分，
并扔掉其它部分。而底空间方向的微分形式 $dx^i$ 随着它的伙伴 $e_i$ 一同被取舍，
当 $e_1 \wedge \cdots \wedge e_n$ 被留下来时，
对应被留下来的形式就是 $dx^1 \wedge \cdots \wedge dx^n$。
至于系数 $(-1)^{n (n-1) / 2}$，它来自于
\[
e_1 \, dx^1 \wedge \cdots \wedge e_n \, dx^n
= (-1)^{n (n-1) / 2} \, ( e_1 \wedge \cdots \wedge e_n ) \,
(dx^1 \wedge \cdots \wedge dx^n),
\]
这是因为由定义，
\[
\Omega^\bullet (V, \ {\wedge^\bullet \, V}) =
\Omega^\bullet (V) \otimes (\wedge^\bullet \, V),
\]
这是两个反交换分次代数的张量积，
它自身的乘法满足 **Koszul 符号法则**（Koszul sign rule）：
若 $v, w \in \wedge^\bullet \, V$，$\alpha, \beta \in \Omega^\bullet (V)$，则
\[
(v \otimes \alpha) \, (w \otimes \beta) =
(-1)^{|w|\,|\alpha|} \, (v w) \otimes (\alpha \beta).
\]

上面的讨论总结为下面的命题。

::: proposition
沿用上面的记号，我们有
\[
u (x) = \frac {\mathrm{i}^{n^2}} {(2 \mathrm{π})^{n/2}} \, T \, \biggl( \exp {} \biggl(
  - \frac {|x|^2} {2} - \mathrm{i} \, dx
\biggr) \biggr).
\]
:::

这里，给 $dx$ 加上系数 $-\mathrm{i}$ 并不是必要的，
但这样可以方便和之后的结论联系起来。

接下来，我们试着将这个方法推广到一般情形：
设 $E \to M$ 是已定向的光滑向量丛，秩为 $n$。
我们取一个 Euclid 度量，并取一个度量联络 $\nabla$。

::: lemma
设 $\alpha \in \Omega^\bullet (M, \ {\wedge^\bullet \, E})$。则
\[
d T(\alpha) = T (\nabla \alpha).
\]
:::

::: proof
我们把 Березин 积分看作向量丛 $\wedge^n \, E^\vee$ 的截面。
则 Leibniz 法则表明
\[
d T(\alpha) = T (\nabla \alpha) + (\nabla T) \, \alpha.
\]
但 $\nabla T = 0$，因为 $\nabla$ 是度量联络，
而 $T$ 作为一个线丛的截面，对应着恒定的有向体积。（读者可以试着严格化这个说法。）
:::

我们把之前的做法照搬过来。设
\[
\widetilde{E} = p^* E
\]
是 $E$ 上的向量丛，其中 $p \colon E \to M$ 是投影。
则之前的 $\Omega^\bullet (V, \ {\wedge^\bullet \, V})$
对应着现在的 $\Omega^\bullet (E, \ {\wedge^\bullet \, \widetilde{E}})$。

向量丛 $\widetilde{E}$ 有一个**自言截面**（tautological section），记为 $x$，
它在每个点 $e \in E$ 处，在纤维 $\widetilde{E}_e$ 上选出 $e$ 对应的点。
这样，我们可以定义
\[
|x|^2 \in C^\infty (E).
\]
将 $E$ 的联络拉回到 $\widetilde{E}$ 上，
可以得到 $\widetilde{E}$ 上的度量联络。我们可以定义
\[
\nabla x \quad \in \Omega^1 (E, \ \widetilde{E})
= \Omega^1 (E, \ {\wedge^1 \, \widetilde{E}}).
\]
当 $M = \{*\}$ 时，$\nabla x$ 就是我们之前定义的 $dx$。另外，我们记
$\widetilde{\Omega}$ 是 $\widetilde{E}$ 上的度量联络的曲率形式，
它可以看作 $\Omega^2 (E, \ {\wedge^2 \, \widetilde{E}})$ 的元素（@thm-5-curv-antisym）。

::: definition
使用上面的记号，我们记
\[
A = \frac {|x|^2} {2} + \mathrm{i} \, \nabla x + \widetilde{\Omega}
\quad \in \Omega^\bullet (E, \ {\wedge^\bullet \, \widetilde{E}}).
\]
:::

我们下面的目标，就是证明 Thom 形式由
\[
u = \frac {\mathrm{i}^{n^2}} {(2 \mathrm{π})^{n/2}} \, T(\mathrm{e}^{-A})
\]
给出。在此之前，我们先对 $A$ 的各项做一些注记。
$A$ 的前两项和之前的情况相似，在作用 Березин 积分之后，
能给出纤维上的一个积分为 $1$ 的 $n$-形式。
而最后一项是曲率，它在 $M = \{*\}$ 的时候是看不出来的。
它存在的原因会在下面的计算中显示出来。

这里，我们引入沿纤维方向的缩并操作
\[
\iota_x \colon \Omega^\bullet (E, \ {\wedge^\bullet \, \widetilde{E}})
\to \Omega^\bullet (E, \ {\wedge^{\bullet - 1} \, \widetilde{E}}),
\]
定义为
\[
\iota_x ( \alpha \otimes ( s_1 \wedge \cdots \wedge s_j ) )
= \sum _{k=1} ^j (-1)^{|\alpha| + k - 1} \,
\langle x, s_k \rangle \, \alpha \otimes
( s_1 \wedge \cdots \wedge \widehat{s_k} \wedge \cdots \wedge s_j ).
\]

::: lemma
我们有

- $(\nabla + \mathrm{i} \, \iota_x) \, A = 0$。

- $(\nabla + \mathrm{i} \, \iota_x) \, \mathrm{e}^{-A} = 0$。

:::

这里，$\mathrm{i} \, \iota_x$ 是一个修正项，它在之后的计算中是没有作用的。
这个引理的结论实际上是“$\nabla \mathrm{e}^{-A} \approx 0$”。

::: proof
先证明第一个等式，即
\[
(\nabla + \mathrm{i} \, \iota_x) \,
\biggl( \frac {|x|^2} {2} + \mathrm{i} \, \nabla x + \widetilde{\Omega} \biggr) = 0.
\]
我们计算它的每一项：

- 由 Leibniz 法则，
  $\nabla ( |x|^2 / 2 ) = \langle x, \nabla x \rangle
        = \iota_x \nabla x$。

- 由 @eq-5-curv-nabla-sq，
  $\nabla (\nabla x) = \widetilde{\Omega} x
        = -\iota_x \widetilde{\Omega}$。

- $\nabla \widetilde{\Omega} = 0$，因为对任何截面 $s$，有
  $(\nabla \widetilde{\Omega}) s
        = \nabla (\widetilde{\Omega} s) - \widetilde{\Omega} (\nabla s)
        = \nabla^3 s - \nabla^3 s = 0$。

- 由于次数原因，$\iota_x |x|^2 = 0$。

故等式得证。

第二个等式可以从第一个等式推导出来，细节留给读者。
:::

::: corollary
$T (\mathrm{e}^{-A})$ 是闭形式。
:::

::: proof
我们有 $d T (\mathrm{e}^{-A}) = T (\nabla \mathrm{e}^{-A}) = 0$。
第二个等号是由引理，以及由于次数原因，$T \circ \iota_x = 0$。
:::

::: corollary
定义
\[
u = \frac {\mathrm{i}^{n^2}} {(2 \mathrm{π})^{n/2}} \, T(\mathrm{e}^{-A})
\quad \in \Omega^n (E).
\]
则如果忽略紧支的问题，那么 $u$ 是 Thom 形式。
:::

::: proof
这个形式限制在每个纤维上，
就是我们之前讨论过的 $M = \{*\}$ 的情况，
从而它沿纤维积分的结果是 $1$。
:::

通过这个公式，我们可以重新证明陈–Gauß–Bonnet 公式。

::: corollary [陈–Gauß–Bonnet 公式]
$E$ 的一个 Euler 形式是
\[
e = i^* u = \Biggl \{ \begin{array}{ll}
  \Bigl( \dfrac{-1}{2\mathrm{π}} \Bigr)^{n/2} \operatorname{pf} (\Omega), & n \text{ 偶数}, \\
  0, & n \text{ 奇数}.
\end{array}
\]
:::

::: proof
只需证明第二个等号。在 $E$ 的零截面上，$x = 0$，且 $\widetilde{\Omega} = \Omega$。
因此，当 $n$ 为偶数时，由 Pfaff 值的定义，
\[
\begin{aligned}
  i^* u &= \frac {1} {(2 \mathrm{π})^{n/2}} \, T(\mathrm{e}^{-\Omega}) \\
  &= \frac {1} {(2 \mathrm{π})^{n/2}} \operatorname{pf} (-\Omega) \\
  &= \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^{n/2} \operatorname{pf} (\Omega).
\end{aligned}
\]
当 $n$ 为奇数时，没有任何东西能被 Березин 积分保留。
:::

最后，我们来解决紧支的问题。
这可以通过选取一个合适的从开球到 $\mathbb{R}^n$ 的微分同胚来完成。这个微分同胚是
\[
x \mapsto \frac {x} {\sqrt{1 - |x|^2}}.
\]
沿这个微分同胚将我们的 Thom 形式拉回，就能得到一个垂直紧支的 Thom 形式。

## 超几何

接下来，我们打算把陈–Weil 理论推广到**超几何**（supergeometry）的情况，
也就是构造超向量丛上的超联络的曲率不变量。

超几何起源于物理学中对超对称的描述，术语中的“超”字也来源于此。
超几何的观点是我们证明指标定理的基础。

::: definition
一个**超空间**（superspace）是一个有限维 $\mathbb{Z}_2$-分次的向量空间，
它的两个部分记作
\[
V = V^+ \oplus V^-.
\]
:::

::: definition
一个**超代数**（superalgebra）是一个有限维 $\mathbb{Z}_2$-分次的代数 $A$。
如果 $a, b \in A$ 是齐次元素，那么它们的**交换子**（commutator）定义为
\[
[a, b] = ab - (-1)^{|a|\,|b|} \, ba.
\]
这一定义可以双线性地延拓到整个 $A$ 上。如果所有 $a, b \in A$ 都满足
\[
ab = (-1)^{|a|\,|b|} \, ba,
\]
就说 $A$ 是**交换**（commutative）的。
:::

例如，如果 $V$ 是普通向量空间，那么 $\wedge^\bullet \, V$
就是一个交换的超代数。又如，如果 $V$ 是超空间，$\dim V > 1$，那么
$\operatorname{End} (V)$ 就是一个不交换的超代数。

::: definition
流形 $M$ 上的**超向量丛**（superbundle）是一个 $\mathbb{Z}_2$-分次的向量丛
\[
E = E^+ \oplus E^-.
\]
:::

::: definition
设 $V$ 是超空间，$a \in \operatorname{End} (V)$。我们将 $a$ 写成分块矩阵
\[
a = \biggl( \, \begin{matrix}
  a^{++} & a^{-+} \\ a^{+-} & a^{--}
\end{matrix} \, \biggr).
\]
则 $a$ 的**超迹**（supertrace）定义为
\[
\operatorname{tr}_{\mathrm{s}} a = \operatorname{tr} a^{++} - \operatorname{tr} a^{--}.
\]
:::

超迹的定义是为了满足下面的性质。

::: exercise
设 $V$ 是超空间，$a, b \in \operatorname{End} (V)$。则
\[
\operatorname{tr}_{\mathrm{s}} {} [a, b] = 0.
\]
:::

下面，我们还可以定义超向量丛的行列式丛。

::: definition
设 $E \to M$ 是超向量丛。它的**行列式丛**（determinant bundle）是
\[
\operatorname{det} (E) = (\wedge^{n^+} \, E^+)^\vee \otimes (\wedge^{n^-} \, E^-),
\]
其中 $n^+, n^-$ 分别是 $E^+, E^-$ 的秩。
:::

例如，若 $M$ 是流形，则 $\operatorname{det} (TM) = \wedge^n \, T^* M$
是最高阶微分形式的线丛。

## 超联络

超联络的概念由 Quillen [@quillen-superconnection] 首先提出，
它是联络的概念向超几何的推广。

::: definition
设 $E_1, E_2 \to M$ 是两个光滑向量丛。一个**微分算子**（differential operator）
\[
D \colon \Gamma (E_1) \to \Gamma (E_2)
\]
是在局部坐标系下，具有如下表达式的算子：
\[
D (s^i e_i^{(1)}) = \sum_{\alpha, i, j}
a_i^{j \alpha} \, ( \partial_{\alpha} s^i ) \, e_j^{(2)},
\]
其中，我们对 $M$ 上的所有多重指标 $\alpha$ 求和；
每个 $a_i^{j \alpha}$ 是 $M$ 上的光滑函数，它们中只有有限个非零；
$e_i^{(k)} (x)$ 是 $E_k$ 的截面，它们在每个纤维上构成一组基。
使 $a_i^{j \alpha}$ 非零的 $|\alpha|$ 的最大值称为 $D$ 的**次数**（order）。
:::

例如，Laplace 算子
\[
\Delta = -\sum_{i=1}^n {} \Bigl( \frac {\partial} {\partial x^i} \Bigr)^2
\colon C^\infty (\mathbb{R}^n) \to C^\infty (\mathbb{R}^n)
\]
是一个二阶微分算子，这里 $E_1, E_2$ 都取成 $\mathbb{R}^n$ 上的平凡线丛。

在定义超联络之前，我们引入一个记号，
设 $E \to M$ 是超向量丛。我们记
\[
\begin{aligned}
  \Omega^+ (M, E) &= \Omega^{2\bullet} (M, E^+)
    \oplus \Omega^{2\bullet + 1} (M, E^-), \\
  \Omega^- (M, E) &= \Omega^{2\bullet + 1} (M, E^+)
    \oplus \Omega^{2\bullet} (M, E^-).
\end{aligned}
\]

::: definition
设 $E \to M$ 是超向量丛。$E$ 上的一个**超联络**（superconnection）是一个算子
\[
\nabla \colon \Omega^\bullet (M, E) \to \Omega^\bullet (M, E),
\]
满足下列条件：

- $\nabla$ 是奇算子，即它把子空间 $\Omega^+$ 映到 $\Omega^-$，
  把 $\Omega^-$ 映到 $\Omega^+$。

- $\nabla$ 是一阶微分算子。

- $\nabla$ 满足 Leibniz 法则：
  对 $\alpha \in \Omega^\bullet (M)$，$\omega \in \Omega^\bullet (M, E)$，有
  \[
  \nabla (\alpha \wedge \omega)
  = d \alpha \wedge \omega + (-1)^{|\alpha|} \alpha \wedge \nabla \omega.
  \]

:::

如果 $E$ 是普通向量丛，那么，容易看出普通的联络也满足这三个条件。
因此，超联络是普通联络的推广。

另外，第三个条件说明，一个超联络 $\nabla$ 由它在
$\Omega^0 (M, E) = \Gamma (E)$ 上的取值确定。我们记
\[
\nabla = \nabla^{(0)} + \nabla^{(1)} + \cdots,
\]
其中 $\nabla^{(k)}$ 将 $\Omega^0 (M, E)$ 映到 $\Omega^k (M, E)$。
我们注意到以下事实。

::: remark
沿用上面的记号，则

- 算子
  \[
  \nabla^{(1)} \colon \Omega^\bullet (M, E^{\pm})
  \to \Omega^{\bullet+1} (M, E^{\pm})
  \]
  实际上是向量丛 $E^+$、$E^-$ 上的两个普通联络。

- 每个算子 $\nabla^{(k)}$ 都是一个超联络。
  在局部上，它可以由联络形式
  \[
  \omega^{(k)} \in \Omega^k (M, \operatorname{End}(E))
  \]
  描述。

:::

和往常一样，对于超联络 $\nabla$ 而言，
算子 $\nabla^2$ 具有很好的张量性质。我们将它定义为曲率。

::: definition
设 $\nabla$ 是超向量丛 $E \to M$ 上的超联络。它的**曲率**定义为算子
\[
\nabla^2 \colon \Omega^\bullet (M, E) \to \Omega^\bullet (M, E).
\]
:::

::: proposition
设 $\nabla$ 是超向量丛 $E \to M$ 上的超联络。则存在一个**曲率形式**
\[
\Omega \in \Omega^{2\bullet} (M, \operatorname{End} (E)),
\]
使得曲率算子 $\nabla^2$ 由它的作用给出。这里，$\Omega$ 的作用定义为
\[
\Omega (s \otimes \alpha) = \Omega s \wedge \alpha,
\]
其中 $s \in \Gamma (E)$，$\alpha \in \Omega^\bullet (M)$。
:::

::: proof
设 $s \in \Gamma (E)$，$\alpha \in \Omega^\bullet (M)$。则
\[
\begin{aligned}
  \nabla^2 (s \otimes \alpha)
  &= \nabla (\nabla s \wedge \alpha + s \otimes d \alpha) \\
  &= \nabla^2 s \wedge \alpha - \nabla s \wedge d \alpha
    + \nabla s \wedge d \alpha + s \otimes d^2 \alpha \\
  &= \nabla^2 s \wedge \alpha.
\end{aligned}
\]
因此，只需证明存在 $\Omega$，使得 $\Omega s = \nabla^2 s$。
这等价于 $\nabla^2$ 作用在 $\Gamma (E)$ 上时是 $C^\infty (M)$-线性的。
设 $f \in C^\infty (M)$。我们有
\[
\begin{aligned}
  \nabla^2 (fs)
  &= \nabla ( s \otimes df + f \, \nabla s ) \\
  &= \nabla s \wedge df + s \otimes d^2f
    + df \wedge \nabla s + f \, \nabla^2 s \\
  &= f \, \nabla^2 s.
\end{aligned}
\]
:::

## 超几何的陈–Weil 理论

下面，我们简述如何通过超联络的曲率形式，得到超向量丛的示性类。

在这一小节中，设 $E \to M$ 是光滑超向量丛，其秩为 $n = n^+ + n^-$。
设 $\nabla$ 是 $E$ 上的超联络，其曲率形式为 $\Omega$。

::: proposition
对每个 $k$，微分形式
\[
\operatorname{tr}_{\mathrm{s}} \Omega^k
\]
是闭形式，且它决定的上同调类和超联络 $\nabla$ 的选取无关。
从而，对任何 $N > 0$ 和 $N$ 元多项式 $p$，闭形式
\[
p ( \operatorname{tr}_{\mathrm{s}} \Omega, \ \operatorname{tr}_{\mathrm{s}} \Omega^2, \ \dotsc, \ \operatorname{tr}_{\mathrm{s}} \Omega^N )
\]
都决定了 $E$ 的一个拓扑不变量。
:::

::: proof
证明和 @sect-5 中相同，我们不再重复。
:::

回忆 @thm-5-total-chern 给出的公式。
在超几何的情况下，全陈类没有合适的类比，
但计算陈特征的公式可以直接搬过来。

::: definition
$E$ 的**陈特征**定义为
\[
\operatorname{ch} (E) = [ \operatorname{tr}_{\mathrm{s}} \mathrm{e}^{\Omega / 2 \mathrm{π} \mathrm{i}} ] \quad \in H^{2\bullet} (M; \mathbb{C}).
\]
:::

陈特征不依赖于超联络的选取。我们可以在 $E^+$ 和 $E^-$ 上分别选取普通的联络，
从而得到 $E$ 上的普通联络，它也是一个超联络。从而由超迹的定义，
\[
\operatorname{ch} (E) = \operatorname{ch} (E^+) - \operatorname{ch} (E^-),
\]
这里等号右边的 $\operatorname{ch}$ 表示普通意义下的陈特征。
作为推论，超几何的陈特征也满足加性和乘性：
\[
\begin{aligned}
  \operatorname{ch} (E_1 \oplus E_2) &= \operatorname{ch} (E_1) + \operatorname{ch} (E_2), \\
  \operatorname{ch} (E_1 \otimes E_2) &= \operatorname{ch} (E_1) \operatorname{ch} (E_2).
\end{aligned}
\]

## 指标定理前瞻

从现在开始，我们的目标就是证明著名的 Atiyah–Singer 指标定理。
在这一小节中，我们介绍定理的内容，以及几个著名的推论。

首先，我们给出定理的大致叙述，读者不必深究其中的细节。

::: theorem* [Atiyah–Singer，大致版本]
设 $M$ 是偶数维紧可定向流形，$E \to M$ 是复超向量丛。
设 $D \colon \Gamma (E) \to \Gamma (E)$ 是一个自伴随 Dirac 微分算子。则
\[
\operatorname{ind} (D) = \int_M {} ( \text{一些示性类} ),
\]
其中
\[
\operatorname{ind} (D) = \dim \ker D^+ - \dim \operatorname{coker} D^+
\]
称为 $D$ 的**指标**（index），其中 $D^+ = D|_{E^+}$。
:::

下面的三个结论都可以看作指标定理的推论。

::: theorem* [陈–Gauß–Bonnet]
设 $M$ 是 $2n$ 维紧可定向流形，那么
\[
\chi (M) = \Bigl( \frac{-1}{2\mathrm{π}} \Bigr)^n \int_M \operatorname{pf} (\Omega),
\]
其中 $\Omega$ 是切丛的曲率形式。
:::

::: theorem* [Hirzebruch–Riemann–Roch]
设 $M$ 是紧复流形，$E \to M$ 是全纯向量丛。则
\[
\chi (M, E) = \int_M \operatorname{ch} (E) \operatorname{td} (M),
\]
其中 $\chi (M, E)$ 是 $\overline{\partial}{}$-链复形的 Euler 数，
$\operatorname{td}$ 是后面将引入的 Todd 类。
:::

::: theorem* [Hirzebruch 符号差定理]
设 $M$ 是 $4n$ 维流形，则在 $H^{2n} (M)$ 上，杯积给出了一个对称双线性型。
设 $\sigma (M)$ 是这个双线性型的**符号差**（signature），
即正特征值的个数减去负特征值的个数。则
\[
\sigma (M) = \frac {1} {(\mathrm{π} \mathrm{i})^{n/2}}
\int_M \operatorname{det}\nolimits^{1/2} \frac {\Omega / 2} {\tanh (\Omega / 2)},
\]
其中右边的含义是一个形式幂级数。
:::

指标定理把等号左边的拓扑量和等号右边的几何量联系起来。
这种联系是通过一个超向量丛上的热核 $k_t (-, -)$ 来建立的。
我们将说明，热核的超迹不依赖于时间 $t$，而分别令 $t \to 0$ 和 $t \to +\infty$，
就能分别得到示性类的积分和算子的指标。
这一过程将在接下来的几节中完成。
