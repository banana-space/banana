---
title: 特征层
aliases: [幂幺特征层, 单特征层, 单幂幺特征层]
categories: [几何表示论]
navboxes: [几何表示论]
---

在[[几何表示论]]中，**特征层**是[[约化群]]上的一类[[可构造层]]，
是群的[[特征标]]在[[层–函数对应]]下的层论类比。
特征层由 Lusztig 在 1985–1986 年的五篇系列论文
[@Lusztig1985] 中引入。

[[约化群]]上的特征层是[[有限群]]的特征标在[[层–函数对应]]下的类比。
具体地说，群的特征标是[[类函数]]，即在每个[[共轭类]]上取常值的函数。
在层–函数对应下，
[[有限域]] $\mathbb{F}_q$ 上[[代数簇]]上的层
给出其有理点上的函数；
特别地，约化群 $G$ 上关于[[共轭作用]]等变的层
给出有限群 $G (\mathbb{F}_q)$ 上的类函数。
特征层即是在这些等变层中选取一部分，使得它们尽量好地对应于群的特征标。
因为特征层定义在代数群 $G$ 上，而不仅在有限群上，
所以同一个特征层可以同时给出所有有限群 $G (\mathbb{F}_{q^n})$ 上的类函数，
从而不同的 $n$ 给出的这些 [[Lie 型有限群]]的特征标具有一致的性质。

在[[约化 Lie 代数]]上也有特征层的概念，
由 Lusztig [@Lusztig1987] 引入。
此时特征层具有更直接的描述：
Lie 代数 $\mathfrak{g}$ 是[[向量空间]]，
可以做 [[Fourier–Deligne 变换|Fourier 变换]]，
而 $\mathfrak{g}$ 上的特征层范畴由[[伴随表示|伴随]][[轨道]]上的局部系的 Fourier 变换生成。
这类似于 Kirillov 的[[轨道方法]]：
Lie 群的不可约表示的特征标，大致是余伴随轨道的 Fourier 变换。
[[Springer 对应]]也可以看作这一现象的特例（@ex:springer）。

文献中“特征层”可能有多种含义：
我们将特征层范畴定义为层[[导出范畴]]的[[厚子范畴]]，
从而可以做[[直和]]、[[移位]]等操作；
但有的文献中，包括 Lusztig 的原始文献中，
特征层也特指该范畴中那些[[单对象|单]]的[[错致层]]，
我们将其称为**单特征层**。
这两种约定类似于考虑群的所有特征标和仅考虑[[不可约表示]]的特征标，
但这一类比并不严格：
单特征层给出一组略微不同于不可约表示的特征标，称为[[几乎特征标]]，见下文讨论。

## 定义

设 $k$ 是[[代数闭域]]，并假设以下两种情形之一：

- $k$ 的[[特征（代数）|特征]]为 $p \geq 0$，
  并固定[[素数]] $\ell \neq p$。
  对 $k$ 上的代数簇 $X$，记
  $\mathsf{D} (X) = \mathsf{D}^\mathrm{b}_\mathrm{c} (X, \overline{\mathbb{Q}}_\ell)$
  为 $X$ 上[[可构造 $\ell$ 进层]]
  的有界[[导出范畴]]，
  视为[[三角范畴]]或[[稳定 $(\infty, 1)$-范畴]]。

- $k = \mathbb{C}$。
  对 $k$ 上的代数簇 $X$，记
  $\mathsf{D} (X) = \mathsf{D}^\mathrm{b}_\mathrm{c} (X, \mathbb{C})$
  为 $X$ 上复系数[[可构造层]]
  的有界导出范畴，
  视为三角范畴或稳定 $(\infty, 1)$-范畴。

以下的[[六函子理论|六函子]]都是导出的，
${}^\mathrm{p} H^i$ 表示关于[[错致层|错致 t-结构]]的第 $i$ 个上同调。

设 $G$ 是 $k$ 上的[[约化群]]，
记 $\mathcal{B}$ 为 $G$ 的 [[Borel 子群]]构成的[[旗簇]]，$W$ 为 $G$ 的 [[Weyl 群]]。
由 [[Bruhat 分解]]，$G$ 在 $\mathcal{B} \times \mathcal{B}$ 上的对角作用的轨道
与 $W$ 的元素一一对应。
对 $B_1, B_2 \in \mathcal{B}$，记
\[
\operatorname{pos} (B_1, B_2) \in W
\]
为 $(B_1, B_2)$ 所在轨道对应的元素，称为 $B_1$ 与 $B_2$ 的**相对位置**。

我们还固定 $G$ 的一个 Borel 子群 $B$、其中的[[极大环面]] $T$，并记 $U$ 为 $B$ 的[[幂幺根]]。

### 群上的特征层

特征层的想法来自 [[Deligne–Lusztig 理论]] [@DeligneLusztig1976]。
设 $G$ 定义在有限域 $\mathbb{F}_q$ 上，$F \colon G \to G$ 是相应的 [[Frobenius 态射]]。
对 $w \in W$，[[Deligne–Lusztig 簇]]
\[
X_w = \{ B' \in \mathcal{B} \mid \operatorname{pos} (B', F (B')) = w \}
\]
带有有限群 $G^F = G (\mathbb{F}_q)$ 的作用，
因此其 $\ell$ 进[[紧支上同调]]是 $G^F$ 的表示，
这类表示含有的不可约表示称为[[幂幺表示]]。
特征层的大致想法就是把 Frobenius 态射 $F$ 换成共轭 $B' \mapsto g B' g^{-1}$，
并让 $g$ 在 $G$ 中变动。
这样得到的簇不再带有有限群的作用，
但其上同调随 $g$ 变动，从而构成 $G$ 上的层。

用[[商叠]]的语言，这一想法可以表述得更简洁。考虑以下三个商叠：

- $B \backslash G / B$，即 $G$ 关于 $B \times B$ 的作用
  $(b_1, b_2) \cdot g = b_1 g b_2^{-1}$ 的商。
  映射 $g \mapsto (B, g B g^{-1})$ 给出同构
  \[
  B \backslash G / B \simeq G \backslash (\mathcal{B} \times \mathcal{B}),
  \]
  它的点由 [[Bruhat 分解]]与 $W$ 对应。
  其上的层构成 [[Hecke 范畴]] $\mathsf{D} (B \backslash G / B)$。

- $G /_\mathrm{ad} B$，即 $G$ 关于 $B$ 的共轭作用的商。
  映射 $g \mapsto (g, B)$ 给出同构
  \[
  G /_\mathrm{ad} B \simeq G \backslash (G \times \mathcal{B}),
  \]
  其中 $G$ 在 $G \times \mathcal{B}$ 上的作用是同时共轭，
  因此它的点是元素 $g \in G$ 与 Borel 子群 $B'$ 构成的对。

- $G /_\mathrm{ad} G$，即 $G$ 关于自身的共轭作用的商。
  其上的层即文章开头提到的 $G$ 上关于共轭作用等变的层。
  该叠上的[[错致层]]与 $G$ 上的等变错致层相差[[移位]]，我们取后一种约定。

由 $G$ 的恒同映射诱导的映射构成[[伸展|对应]]
\[
B \backslash G / B
\xleftarrow{\ \delta \ } G /_\mathrm{ad} B
\xrightarrow{\ \pi \ } G /_\mathrm{ad} G ,
\]
用关于 $\mathcal{B}$ 的描述，
即 $\delta (g, B') = (B', g B' g^{-1})$，$\pi (g, B') = g$。
映射 $\delta$ [[光滑态射|光滑]]，
$\pi$ [[紧合态射|紧合]]，其纤维都同构于 $\mathcal{B}$。
定义**特征函子**
\[
\operatorname{ch} = \pi_* \, \delta^* \colon
\mathsf{D} (B \backslash G / B) \longrightarrow \mathsf{D} (G /_\mathrm{ad} G) .
\]
直观地说，$\delta$ 记录 $B'$ 与其共轭 $g B' g^{-1}$ 的相对位置，$\pi$ 则忘掉 $B'$；
因此 $\operatorname{ch} K$ 在 $g$ 处的茎，
是将 $K$ 在 $(B', g B' g^{-1})$ 处的茎沿 $B' \in \mathcal{B}$ 取上同调所得。

::: definition [幂幺特征层] {@def:group-unipotent}
$G$ 上的**幂幺特征层范畴**
\[
\mathsf{CS}_\mathrm{un} (G) \subset \mathsf{D} (G /_\mathrm{ad} G)
\]
是由 $\operatorname{ch}$ 的像生成的[[厚子范畴]]，
即包含其像并对[[移位]]、取[[映射锥|锥]]与取直和项封闭的最小全子范畴。
其对象称为 $G$ 上的**幂幺特征层**。
:::

::: remark [生成元] {@rem:generators-unipotent}
上述定义可以更清晰地描述如下。

由于叠 $B \backslash G / B$ 仅有有限个点（且其[[自同构群]]均连通），
范畴 $\mathsf{D} (B \backslash G / B)$
由形如 $\Delta_w$（$w \in W$）的对象生成，
这里 $\Delta_w$ 是相应 Bruhat 胞腔上常值层的 $!$-前推。
从而 $\mathsf{CS}_\mathrm{un} (G)$
由有限个对象 $\operatorname{ch} (\Delta_w)$ 生成。

由定义可以得出，对 $w \in W$，若记
\[
Y_w = \{ (g, B') \in G \times \mathcal{B} \mid
\operatorname{pos} (B', g B' g^{-1}) = w \} ,
\]
并记 $\pi_w \colon Y_w \to G$ 为投影 $(g, B') \mapsto g$，
则
\[
\operatorname{ch} (\Delta_w) \simeq
(\pi_w)_! \, \overline{\mathbb{Q}}_\ell.
\]
因此，幂幺特征层范畴由这些层生成。

对给定的 $g \in G$，
各个 $\pi_w$ 在 $g$ 处的纤维给出 $\mathcal{B}$ 的一个类似 [[Bruhat 分解]]的[[分层]]。
特别地，$w = 1$ 时，
\[
Y_1 = \{ (g, B') \in G \times \mathcal{B} \mid g \in B' \},
\]
从而 $\pi_1$ 就是 [[Grothendieck–Springer 消解]]。
:::

接下来，我们定义一般的特征层。
上面定义的幂幺特征层只描述了能由[[极大环面]] $T$ 的平凡表示诱导得到的特征标。
例如，若 $G$ 自身是环面，则幂幺特征层仅由环面上的[[常值层]]生成，
并不能看到环面的非平凡表示的特征标。

记 $\mathcal{S} (T)$ 为以下由 $T$ 上的局部系构成的集合（见 @rem:local-systems）：

- 在 $\ell$ 进情形，它由 [[Kummer 局部系]]构成，
  即 $T$ 上秩为 $1$ 的局部系 $\mathcal{L}$，
  使得对某个在 $k$ 中可逆的正整数 $n$，$\mathcal{L}^{\otimes n}$ 是平凡局部系。
  在[[层–函数对应]]下，这大致对应于 $n$ 次张量积平凡的一维表示的特征标。

- 在 $k = \mathbb{C}$ 的情形，它由 $T$ 上所有秩为 $1$ 的局部系构成。

将 $\mathcal{L} \in \mathcal{S} (T)$ 沿投影 $B \to T$ 拉回到 $B$ 上，
仍记为 $\mathcal{L}$，
并记 $\mathsf{D}_\mathcal{L} (B \backslash G / B)$ 为
$\mathcal{L} \boxtimes \mathcal{L}^{-1}$ 扭转等变的复形构成的范畴，
其对象为 $G$ 上的复形 $K$ 带上同构
\[
a^* K \simeq (\mathcal{L} \boxtimes \mathcal{L}^{-1}) \boxtimes K,
\]
其中 $a \colon (B \times B) \times G \to G$ 是作用映射，
并满足通常的相容条件。
当 $\mathcal{L}$ 平凡时，它就是 $\mathsf{D} (B \backslash G / B)$。
由于 $\mathcal{L} \boxtimes \mathcal{L}^{-1}$ 限制在对角线上平凡，
我们仍可以类似地定义特征函子
\[
\operatorname{ch}_\mathcal{L} = \pi_* \, \delta^* \colon
\mathsf{D}_\mathcal{L} (B \backslash G / B)
\longrightarrow \mathsf{D} (G /_\mathrm{ad} G) .
\]

::: definition [特征层] {@def:group}
$G$ 上的**特征层范畴**
\[
\mathsf{CS} (G) \subset \mathsf{D} (G /_\mathrm{ad} G)
\]
是由所有 $\operatorname{ch}_\mathcal{L}$ 的像生成的厚子范畴，
其中 $\mathcal{L}$ 取遍 $\mathcal{S} (T)$。
其对象称为 $G$ 上的**特征层**。
:::

::: remark [局部系的选取] {@rem:local-systems}
在 $\ell$ 进情形，Kummer 局部系恰好是能联系到有限群的那一部分，
因为若 $T$ 是 $\mathbb{F}_q$ 上的分裂环面，
$\mathcal{L}$ 是 $T$ 上秩为 $1$ 的驯顺局部系，
$F$ 为 Frobenius 态射，
则 $F^* \mathcal{L} \simeq \mathcal{L}^{\otimes q}$，
因此 $\mathcal{L}$ 在 $F$ 的某个幂下稳定，当且仅当它是 Kummer 局部系。

在 $k = \mathbb{C}$ 的情形，
考虑所有秩为 $1$ 的局部系更加自然，也能满足 @thm:singular-support 的刻画性质，
而其中 Kummer 局部系给出的那部分特征层则可以与 $\ell$ 进情形相比较。
:::

::: remark [生成元] {@rem:generators}
一般的特征层也有类似 @rem:generators-unipotent 的描述：
范畴 $\mathsf{D}_\mathcal{L} (B \backslash G / B)$
中存在支在 $w$ 对应的 Bruhat 胞腔上的非零对象，
当且仅当 $w^* \mathcal{L} \simeq \mathcal{L}$，
此时该胞腔上有唯一的扭转等变、秩为 $1$ 的局部系 $\mathcal{L}_w$，
记其 $!$-前推为 $\Delta_w^\mathcal{L}$，
则
\[
\operatorname{ch}_\mathcal{L} (\Delta_w^\mathcal{L})
= (\pi_w)_! \, \bar{\mathcal{L}}_w,
\]
其中 $\bar{\mathcal{L}}_w$ 是 $\mathcal{L}_w$ 在 $Y_w$ 上的拉回。
因此 $\mathsf{CS} (G)$ 由这些 $(\pi_w)_! \, \bar{\mathcal{L}}_w$ 生成，
其中 $\mathcal{L}$ 取遍 $\mathcal{S} (T)$，
$w$ 取遍满足 $w^* \mathcal{L} \simeq \mathcal{L}$ 的元素。
关于这类扭转的 Hecke 范畴，亦可参见 [@LusztigYun2020]。
:::

下面说明，特征层范畴由其中的单错致层决定，并描述这些单错致层。
如引言中提到，文献中“特征层”有时也特指这些单错致层。

::: proposition [单特征层] {@prop:simple}
特征层范畴 $\mathsf{CS} (G)$ 中的[[单对象|单]][[错致层]]
恰好是形如
\[
{}^\mathrm{p} H^j ((\pi_w)_! \, \bar{\mathcal{L}}_w)
\]
的层的[[合成因子]]，
其中 $\mathcal{L} \in \mathcal{S} (T)$，$w^* \mathcal{L} \simeq \mathcal{L}$。
并且，特征层恰好是错致上同调的合成因子都如上述形式的复形。

对幂幺特征层范畴 $\mathsf{CS}_\mathrm{un} (G)$，也有同样的结论，
这里将 $\bar{\mathcal{L}}_w$ 换成 $\overline{\mathbb{Q}}_\ell$。
:::

::: proof
记 $S$ 为所有形如 ${}^\mathrm{p} H^j ((\pi_w)_! \, \bar{\mathcal{L}}_w)$
的层的合成因子构成的集合，其中 $\mathcal{L}$、$w$ 如命题所述；
记 $\mathsf{C} \subset \mathsf{D} (G /_\mathrm{ad} G)$ 为
错致上同调的合成因子都属于 $S$ 的复形构成的全子范畴。

先证明 $\mathsf{CS} (G) \subset \mathsf{C}$，
从而 $\mathsf{CS} (G)$ 中的单错致层都属于 $S$。
由错致上同调的长正合列，$\mathsf{C}$ 对移位、取锥与取直和项封闭；
由 @rem:generators，$\mathsf{C}$ 包含 $\mathsf{CS} (G)$ 的生成元
$(\pi_w)_! \, \bar{\mathcal{L}}_w$。
因此 $\mathsf{CS} (G) \subset \mathsf{C}$。

再证明 $S$ 中的每个单错致层 $A$ 都属于 $\mathsf{CS} (G)$。
对 $v \in W$，记 $C_v \subset B \backslash G / B$ 为 $v$ 对应的 Bruhat 胞腔；
若 $v^* \mathcal{L} \simeq \mathcal{L}$，
记 $\operatorname{IC}_v^\mathcal{L}$ 为 @rem:generators 中的局部系 $\mathcal{L}_v$
的（错致移位的）中间延拓。
由于每个胞腔上至多只有一个扭转等变的不可约局部系，
$\Delta_w^\mathcal{L}$ 的错致上同调的合成因子都形如 $\operatorname{IC}_v^\mathcal{L}$，
其中 $C_v \subset \overline{C_w}$。
因此 $\Delta_w^\mathcal{L}$ 可以由这些 $\operatorname{IC}_v^\mathcal{L}$ 经移位和取锥得到，
从而 $(\pi_w)_! \, \bar{\mathcal{L}}_w
= \operatorname{ch}_\mathcal{L} (\Delta_w^\mathcal{L})$
可以由各个 $\operatorname{ch}_\mathcal{L} (\operatorname{IC}_v^\mathcal{L})$
经移位和取锥得到。
由长正合列，$A$ 也是某个
${}^\mathrm{p} H^i (\operatorname{ch}_\mathcal{L} (\operatorname{IC}_v^\mathcal{L}))$
的合成因子。
另一方面，$\delta$ 光滑，$\pi$ 是射影的，
而 $\operatorname{IC}_v^\mathcal{L}$ 是单错致层，
因此由[[分解定理]]，$\operatorname{ch}_\mathcal{L} (\operatorname{IC}_v^\mathcal{L})$
是若干移位后的单错致层的直和。
这里在 $\ell$ 进情形，需要用到 $\operatorname{IC}_v^\mathcal{L}$ 是几何起源的 [@BBD1982]；
在 $k = \mathbb{C}$ 的情形，
则需要半单错致层的分解定理 [@Sabbah2005; @Mochizuki2007]。
于是 $A$ 是 $\operatorname{ch}_\mathcal{L} (\operatorname{IC}_v^\mathcal{L})$
的某个移位的直和项，从而属于 $\mathsf{CS} (G)$。
由于 $\mathsf{C}$ 中的复形都可以由其错致上同调的合成因子经移位和取锥得到，
这就说明 $\mathsf{C} \subset \mathsf{CS} (G)$，从而 $\mathsf{CS} (G) = \mathsf{C}$。

同样的证明也适用于 $\mathsf{CS}_\mathrm{un} (G)$，
此时将 $\mathcal{L}$ 取为平凡局部系。
:::

我们称 $\mathsf{CS} (G)$ 中的单错致层为**单特征层**，
称 $\mathsf{CS}_\mathrm{un} (G)$ 中的单错致层为**单幂幺特征层**。


### Lie 代数上的特征层

设 $\mathfrak{g}$ 是 $G$ 的 Lie 代数，
$k$ 的特征 $p > 0$ 相对于 $G$ 足够大。
定义 $\mathfrak{g}$ 上的 [[Fourier–Deligne 变换|**Fourier–Deligne 变换**]]为
\[
\mathcal{F} (A) = (\mathrm{pr}_2)_! \,
(\mathrm{pr}_1^* A \otimes \langle -, - \rangle^* \mathcal{L}_\psi) [\dim \mathfrak{g}] ,
\]
其中

- $\mathrm{pr}_1, \mathrm{pr}_2 \colon
  \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$
  是投影映射；

- $\langle -, - \rangle$ 是 $\mathfrak{g}$ 上取定的非退化的
  $G$-不变[[对称双线性型]]，视为映射
  $\mathfrak{g} \times \mathfrak{g} \to \mathbb{G}_\mathrm{a}$；

- $\psi \colon \mathbb{F}_p \to \overline{\mathbb{Q}}_\ell^\times$
  是取定的非平凡的加法特征标，
  $\mathcal{L}_\psi$ 为加法群 $\mathbb{G}_\mathrm{a}$ 上相应的
  [[Artin–Schreier 层|Artin–Schreier 局部系]]。

$\mathcal{F}$ 是 $\mathsf{D} (\mathfrak{g})$ 的自等价，把错致层映为错致层；
由于双线性型是 $G$-不变的，它也把 $G$-等变的错致层映为 $G$-等变的错致层。

对 $G$ 在 $\mathfrak{g}$ 中的轨道 $\mathcal{O}$，
及 $\mathcal{O}$ 上不可约的 $G$-等变局部系 $\mathcal{E}$，
记 $\operatorname{IC} (\overline{\mathcal{O}}, \mathcal{E})$
为 $\mathcal{E}$ 的（错致移位的）[[中间延拓]]，作为 $\mathfrak{g}$ 上的错致层。
我们称这样的层为**轨道层**，
即 $\mathfrak{g}$ 上支集是单个 $G$-轨道的闭包的 $G$-等变单错致层。

::: definition [Lie 代数上的特征层] {@def:lie}
$\mathfrak{g}$ 上的**特征层范畴**
\[
\mathsf{CS} (\mathfrak{g}) \subset \mathsf{D} (\mathfrak{g} /_\mathrm{ad} G)
\]
是由所有轨道层 $\operatorname{IC} (\overline{\mathcal{O}}, \mathcal{E})$
的 Fourier–Deligne 变换生成的厚子范畴，
其中的对象称为 $\mathfrak{g}$ 上的**特征层**。
:::

这里 $\mathsf{D} (\mathfrak{g} /_\mathrm{ad} G)$
表示 $\mathfrak{g}$ 上 $G$-等变的复形构成的范畴。
与 @prop:simple 类似，$\mathsf{CS} (\mathfrak{g})$ 中的单错致层，
称为**单特征层**，恰好是轨道层的 Fourier–Deligne 变换；
换言之，Fourier–Deligne 变换给出轨道层与单特征层之间的一一对应。

从有限域上的函数来看（见[下一节](@sec:functions)），
$\mathfrak{g} (\mathbb{F}_q)$ 上的 $G (\mathbb{F}_q)$-不变函数有两组自然的基：
一组大致是各个轨道的[[指示函数]]，对应于轨道层；
另一组是其 Fourier 变换，对应于单特征层。
在群 $G$ 上没有 Fourier 变换可用，
类函数的两组自然的基分别是共轭类的指示函数与不可约特征标，
联系两者的矩阵就是[[特征标表]]。

::: remark
Lie 代数上的特征层最早由 Lusztig [@Lusztig1987] 在 $k$ 为有限域的代数闭包时定义。
这里更一般的版本来自 Mirković [@Mirkovic2004]，
在 $k = \mathbb{C}$ 时也可以用 [[D-模]]的 Fourier 变换代替
Fourier–Deligne 变换以定义特征层。
:::

### 特征函数 {@sec:functions}

特征层的**特征函数**即其在[[层–函数对应]]下对应的函数。

具体而言，设 $k = \overline{\mathbb{F}}_q$，
$X$ 是 $\mathbb{F}_q$-代数簇，
$F \colon X \to X$ 是其 [[Frobenius 态射]]，$X^F = X (\mathbb{F}_q)$。
对层 $A \in \mathsf{D} (X)$，
若存在同构 $\varphi \colon F^* A \simeq A$，
则称 $A$ 是 **$F$-稳定层**。
此时 $(A, \varphi)$ 的**特征函数**是 $X^F$ 上的函数
\[
\chi_{A, \varphi} (x) =
\sum_{i \in \mathbb{Z}} (-1)^i \operatorname{tr} (\varphi_x, \mathcal{H}^i (A)_x) ,
\]
其中 $\varphi_x$ 是 $\varphi$ 诱导的茎
$\mathcal{H}^i (A)_x$ 的自同构。
当 $A$ 是单错致层时，$\varphi$ 在相差非零常数倍的意义下唯一。

对特征层而言，若 $G$ 定义在 $\mathbb{F}_q$ 上，
则 $G$ 上 $F$-稳定的特征层的特征函数是有限群 $G^F$ 上的类函数，
而 $\mathfrak{g}$ 上 $F$-稳定的特征层的特征函数是 $\mathfrak{g}^F$ 上的 $G^F$-不变函数。

## 例子

以下讨论都在特征 $p > 0$ 的代数闭域 $k$ 上进行，并固定素数 $\ell \neq p$。

::: example [环面] {@ex:torus}
设 $G = T$ 是 $k$ 上的代数环面。
此时 $\mathsf{CS} (T)$ 由 $T$ 上所有 Kummer 局部系
$\mathcal{L}$ 生成，
而单特征层就是这些 $\mathcal{L} [\dim T]$。

设 $k = \overline{\mathbb{F}}_q$，$T$ 定义在 $\mathbb{F}_q$ 上，$F$ 为 Frobenius 态射。
考虑 [[Lang 定理|Lang 映射]] $\lambda \colon T \to T$，$t \mapsto t^{-1} F (t)$。
由 [[Lang 定理]]，它是以有限群 $T^F$ 为 Galois 群的有限平展覆叠，
其中 $T^F$ 通过乘法作用。
对特征标 $\theta \colon T^F \to \overline{\mathbb{Q}}_\ell^\times$，
记 $\mathcal{L}_\theta$ 为 $\lambda_* \overline{\mathbb{Q}}_\ell$ 中
$T^F$ 通过 $\theta$ 作用的直和项。
则 $\mathcal{L}_\theta$ 是 $F$-稳定的 Kummer 局部系，
并且在适当的约定下，其特征函数恰为 $\theta$。
反之，每个 $F$-稳定的 Kummer 局部系都同构于某个 $\mathcal{L}_\theta$。
因此 $T$ 上 $F$-稳定的单特征层与 $T^F$ 的特征标一一对应，
后者即前者的特征函数乘以 $(-1)^{\dim T}$。
:::

::: example [$\mathrm{SL}_2$ 上的幂幺特征层] {@ex:sl2}
设 $G = \mathrm{SL}_2$，
则 $\mathcal{B} \simeq \mathbb{P}^1$ 是 $k^2$ 中直线构成的簇，$W = \{ 1, s \}$ 是二阶群。
由 @rem:generators-unipotent，
幂幺特征层范畴 $\mathsf{CS}_\mathrm{un} (\mathrm{SL}_2)$
由两个对象
\[
(\pi_1)_! \, \overline{\mathbb{Q}}_\ell
\quad \text{与} \quad
(\pi_s)_! \, \overline{\mathbb{Q}}_\ell
\]
生成。我们先来描述第一个对象。
Grothendieck–Springer 消解 $\pi_1$ 在 $g \in G$ 处的纤维
是被 $g$ 保持的直线构成的集合：

- 若 $g \in G^\mathrm{rs}$，即 $g$ 是正则半单元，
  则纤维是两个点，对应 $g$ 的两个[[特征子空间]]；

- 若 $g = \pm 1$，纤维是整个 $\mathbb{P}^1$；

- 其余情形，即 $g$ 是 $\pm 1$ 与非平凡幂幺元的乘积时，纤维是一个点。

因此 $(\pi_1)_! \, \overline{\mathbb{Q}}_\ell \simeq \overline{\mathbb{Q}}_\ell \oplus K'$，
其中 $K' [3] = \operatorname{IC} (G, \mathcal{L}_\mathrm{sgn})$，
$\mathcal{L}_\mathrm{sgn}$ 是 $G^\mathrm{rs}$ 上由二重覆叠
$\pi_1^{-1} (G^\mathrm{rs}) \to G^\mathrm{rs}$ 给出的非平凡秩为 $1$ 的局部系。

而第二个生成元 $(\pi_s)_! \, \overline{\mathbb{Q}}_\ell$
其实是多余的，因为 $Y_s$ 是闭子簇
$Y_1 \subset G \times \mathcal{B}$ 的补集，
从而有[[正合三角]]
\[
(\pi_s)_! \, \overline{\mathbb{Q}}_\ell
\longrightarrow \overline{\mathbb{Q}}_\ell \oplus \overline{\mathbb{Q}}_\ell [-2]
\longrightarrow (\pi_1)_! \, \overline{\mathbb{Q}}_\ell,
\]
其中中间一项即 $H^* (\mathbb{P}^1)$，作为 $G$ 上的常值层。
因为 $(\pi_1)_! \, \overline{\mathbb{Q}}_\ell$ 生成的厚子范畴
包含常值层 $\overline{\mathbb{Q}}_\ell$，
所以它也包含 $(\pi_s)_! \, \overline{\mathbb{Q}}_\ell$。
换言之，在 Hecke 范畴中，$B \backslash G / B$ 上的常值层
是 $\Delta_s$ 与 $\Delta_1$ 的扩张，
而特征函子把它映为 $G$ 上以 $H^* (\mathbb{P}^1)$ 为系数的常值层。

因此，由 @prop:simple，$\mathrm{SL}_2$ 上的单幂幺特征层只有两个，即
\[
\overline{\mathbb{Q}}_\ell [3]
\quad \text{与} \quad
K' [3].
\]

下面，我们来描述其特征函数。
设 $G$ 带有通常的 $\mathbb{F}_q$-结构。
对 $g \in G^F$，由 [[Grothendieck 迹公式]]，
$(\pi_1)_! \, \overline{\mathbb{Q}}_\ell$ 的特征函数在 $g$ 处的值
等于纤维 $\pi_1^{-1} (g)$ 中 $\mathbb{F}_q$-有理点的个数，
即 $\mathbb{F}_q^2$ 中被 $g$ 保持的直线个数。
这是 $G^F$ 在 $\mathbb{P}^1 (\mathbb{F}_q) = G^F / B^F$ 上的置换特征标
$\operatorname{Ind}_{B^F}^{G^F} 1$。
因此，特征层 $\overline{\mathbb{Q}}_\ell$ 与 $K'$ 的特征函数分别是
\[
1
\quad \text{与} \quad
\mathrm{St} = \operatorname{Ind}_{B^F}^{G^F} 1 - 1 ,
\]
后者即 $q$ 维 [[Steinberg 表示]]的特征标：
它在 $\pm 1$ 处取值 $q$，
在特征值属于 $\mathbb{F}_q$ 的正则半单元处取值 $1$，
在特征值不属于 $\mathbb{F}_q$ 的正则半单元处取值 $-1$，
在其余元素处取值 $0$。
Lusztig 在 1980 年所作的这一计算，是特征层理论的起点之一 [@Lusztig2026]。
:::

::: example [$\mathrm{SL}_2$ 上的所有特征层] {@ex:sl2-all}
沿用上例的记号，并设 $p \neq 2$。
元素 $s \in W$ 作用于极大环面 $T$，
将每个 Kummer 局部系 $\mathcal{L}$ 映为其对偶 $\mathcal{L}^{-1}$。

特征层范畴 $\mathsf{CS} (\mathrm{SL}_2)$ 中，所有的单特征层如下：
我们令 $\mathcal{L}$ 取遍所有 Kummer 局部系，则

- 若 $\mathcal{L} \not\simeq \mathcal{L}^{-1}$，
  则有单特征层
  $(\pi_1)_! \, \bar{\mathcal{L}}_1 [3]$，
  并且它与 $\mathcal{L}^{-1}$ 给出的单特征层同构。

- 若 $\mathcal{L}$ 平凡，则有 @ex:sl2 中的两个单幂幺特征层。

- 若 $\mathcal{L} \simeq \mathcal{L}^{-1}$ 不平凡，则
  $(\pi_1)_! \, \bar{\mathcal{L}}_1 [3]$ 也分解为两个不同构的单特征层。

- 此外还有两个单特征层（它们是尖点的，见 @sec:classification 一节）：
  对 $z = \pm 1$，令 $C_z$ 为形如 $z u$ 的元素构成的共轭类，
  其中 $u \neq 1$ 是幂幺元。
  则 $C_z$ 上恰有一个非平凡的不可约 $G$-等变局部系 $\mathcal{E}_z$，
  其前推 $(j_z)_! \, \mathcal{E}_z [2]$ 是单特征层，
  其中 $j_z \colon C_z \to G$ 是含入映射。

设 $k = \overline{\mathbb{F}}_q$，$q$ 为奇数，$G$ 带有通常的 $\mathbb{F}_q$-结构。
此时 $F^* \mathcal{L} \simeq \mathcal{L}^{\otimes q}$，
因此上述第一类单特征层是 $F$-稳定的，当且仅当 $\mathcal{L}^{\otimes (q - 1)}$
或 $\mathcal{L}^{\otimes (q + 1)}$ 平凡，
这样的单特征层共有 $(q - 3) / 2 + (q - 1) / 2 = q - 2$ 个。
其余三类的 $6$ 个单特征层都是 $F$-稳定的，
因此 $F$-稳定的单特征层共有 $q + 4$ 个，
恰好等于 $\mathrm{SL}_2 (\mathbb{F}_q)$ 的共轭类的个数。
:::

::: example [交换 Lie 代数] {@ex:abelian}
设 $G = T$ 是环面，$\mathfrak{t}$ 是其 Lie 代数。
$T$ 在 $\mathfrak{t}$ 上的伴随作用平凡，
每点 $a \in \mathfrak{t}$ 自成一个轨道，
相应的轨道层就是 $a$ 处的[[点层]] $\delta_a$。
其 Fourier–Deligne 变换是
\[
\mathcal{F} (\delta_a) = \langle a, - \rangle^* \mathcal{L}_\psi [\dim \mathfrak{t}] ,
\]
因此 $\mathfrak{t}$ 上的单特征层恰好是这些（移位的）Artin–Schreier 局部系。
若 $k = \overline{\mathbb{F}}_q$ 且 $a \in \mathfrak{t}^F$，
则在适当的约定下，其特征函数（相差符号）是
$x \mapsto \psi (\operatorname{Tr}_{\mathbb{F}_q / \mathbb{F}_p} \langle a, x \rangle)$，
即加法群 $\mathfrak{t}^F$ 的特征标。

这与 @ex:torus 类似：
环面上的 Kummer 局部系对应于乘法群的特征标，
而 Lie 代数上的 Artin–Schreier 局部系对应于加法群的特征标。
:::

::: example [[[Springer 对应]]] {@ex:springer}
设 $G$ 为约化群，
$\mathfrak{g}$ 为其 Lie 代数，
域的特征 $p$ 相对于 $G$ 足够大。
记 $\mathcal{N} \subset \mathfrak{g}$ 为[[幂零锥]]。
对 $B' \in \mathcal{B}$，
记 $\mathfrak{b}'$、$\mathfrak{n}'$ 分别为 $B'$ 及其幂幺根的 Lie 代数。
考虑
\[
\begin{aligned}
  \tilde{\mathfrak{g}} &=
  \{ (x, B') \in \mathfrak{g} \times \mathcal{B} \mid x \in \mathfrak{b}' \} , \\
  \tilde{\mathcal{N}} &=
  \{ (x, B') \in \mathfrak{g} \times \mathcal{B} \mid x \in \mathfrak{n}' \} ,
\end{aligned}
\]
投影 $\pi \colon \tilde{\mathfrak{g}} \to \mathfrak{g}$
是 [[Grothendieck–Springer 消解]]，
$\mu \colon \tilde{\mathcal{N}} \to \mathcal{N}$ 是 [[Springer 消解]]。

记 $\mathcal{F}$ 为 @def:lie 前定义的 Fourier–Deligne 变换，
其中 $\psi$ 可以是任意非平凡的加法特征标，
$\langle -, - \rangle$ 可以是任意非退化的 $G$-不变对称双线性型。
则有
\[
\mathcal{F} (\pi_* \overline{\mathbb{Q}}_\ell [\dim \mathfrak{g}])
\simeq \mu_* \overline{\mathbb{Q}}_\ell [\dim \mathcal{N}] ,
\]
这是因为 $\tilde{\mathfrak{g}}$ 与 $\tilde{\mathcal{N}}$ 都是平凡向量丛
$\mathfrak{g} \times \mathcal{B} \to \mathcal{B}$ 的子丛，
它们在 $B'$ 处的纤维 $\mathfrak{b}'$ 与 $\mathfrak{n}'$
关于 $\langle -, - \rangle$ 互为正交补。

与群的情形相同，$\pi$ 是小态射，并且
\[
\pi_* \overline{\mathbb{Q}}_\ell [\dim \mathfrak{g}] \simeq
\bigoplus_{E \in \operatorname{Irr} W}
\operatorname{IC} (\mathfrak{g}, \mathcal{L}_E) \otimes E .
\]
因此每个 $\mathcal{F} (\operatorname{IC} (\mathfrak{g}, \mathcal{L}_E))$
都是 Springer 层 $\mu_* \overline{\mathbb{Q}}_\ell [\dim \mathcal{N}]$ 的直和项，
从而形如 $\operatorname{IC} (\overline{\mathcal{O}}, \mathcal{E})$，
其中 $\mathcal{O} \subset \mathcal{N}$ 是[[幂零轨道]]。
这说明 $\operatorname{IC} (\mathfrak{g}, \mathcal{L}_E)$ 都是单特征层，
而对应 $E \mapsto (\mathcal{O}, \mathcal{E})$ 就是 [[Springer 对应]]。
在此约定下，平凡表示对应于零轨道，
这与用限制定义的 Springer 对应相差一个[[符号表示]]。
Springer [@Springer1976] 最初正是通过有限域上 Lie 代数的 Fourier 变换（三角和）
构造了 Weyl 群的这些表示。

例如，设 $\mathfrak{g} = \mathfrak{sl}_2$，$p \neq 2$，
则 $\dim \mathfrak{g} = 3$，$\dim \mathfrak{b} = \dim \mathcal{N} = 2$，
$\mathcal{N}$ 是二次锥面，并且
\[
\begin{aligned}
  \pi_* \overline{\mathbb{Q}}_\ell [3]
  &\simeq \overline{\mathbb{Q}}_\ell [3] \oplus
  \operatorname{IC} (\mathfrak{g}, \mathcal{L}_\mathrm{sgn}) , \\
  \mu_* \overline{\mathbb{Q}}_\ell [2]
  &\simeq \delta_0 \oplus \overline{\mathbb{Q}}_{\mathcal{N}} [2] ,
\end{aligned}
\]
其中 $\delta_0$ 是原点处的点层，
来自 $\mu$ 在原点处的纤维 $\mathbb{P}^1$ 的上同调
$H^2 (\mathbb{P}^1) \simeq \overline{\mathbb{Q}}_\ell$。
由于 $H_\mathrm{c}^* (\mathfrak{g}, \overline{\mathbb{Q}}_\ell)
\simeq \overline{\mathbb{Q}}_\ell [-6]$，
Fourier 变换将 $\overline{\mathbb{Q}}_\ell [3]$ 映为 $\delta_0$，
因此由 $\mathcal{F} (\pi_* \overline{\mathbb{Q}}_\ell [3])
\simeq \mu_* \overline{\mathbb{Q}}_\ell [2]$，
它将 $\operatorname{IC} (\mathfrak{g}, \mathcal{L}_\mathrm{sgn})$ 映为
$\overline{\mathbb{Q}}_{\mathcal{N}} [2]$。
对 $G = \mathrm{SL}_2$，正则幂零轨道 $\mathcal{O}_\mathrm{reg}$
上还有一个非平凡的 $G$-等变局部系 $\mathcal{E}$，
其前推 $j_! \, \mathcal{E} [2]$ 的 Fourier 变换同构于它自身，
其中 $j \colon \mathcal{O}_\mathrm{reg} \to \mathfrak{g}$ 是含入映射，
因此它既是轨道层，又是单特征层。
这是 @ex:sl2-all 中 $(j_1)_! \, \mathcal{E}_1 [2]$ 的类比。
:::

## 性质

### 与有限群特征标的关系

我们首先描述特征函子在[[层–函数对应]]的另一侧的含义。
设约化群 $G$ 定义在 $\mathbb{F}_q$ 上，$F$ 为相应的 Frobenius 态射，
并设 $B$ 与 $T$ 在 $F$ 下稳定。

::: proposition {@prop:hecke}
设 $K \in \mathsf{D} (B \backslash G / B)$ 带有
Frobenius 结构 $F^* K \simeq K$，
记 $f_K \colon G^F \to \overline{\mathbb{Q}}_\ell$ 为 $K$ 拉回到 $G$ 上后的特征函数。
记 $V$ 为 $G^F / B^F$ 到 $\overline{\mathbb{Q}}_\ell$ 的所有函数构成的空间，
带有 $G^F$ 的左平移作用，
并令 $T_K$ 为 $V$ 上的算子
\[
(T_K \varphi) (x B^F) =
\sum_{y B^F \in G^F / B^F} f_K (x^{-1} y) \, \varphi (y B^F) ,
\]
它与 $G^F$ 的作用交换。
则 $\operatorname{ch} K$（带有诱导的 Frobenius 结构）的特征函数是
\[
g \longmapsto \operatorname{tr} (g \circ T_K, V) =
\sum_{x B^F \in G^F / B^F} f_K (x^{-1} g x) .
\]
:::

::: proof
$\operatorname{ch} K$ 在 $g$ 处的茎是 $\mathcal{B}$ 上某个复形的上同调，
该复形在 $B' = x B x^{-1}$ 处的茎就是 $K$ 在 $x^{-1} g x$ 处的茎。
由于 $\mathcal{B}$ 是紧合的，由 Grothendieck 迹公式，
特征函数在 $g \in G^F$ 处的值是 $f_K (x^{-1} g x)$ 对 $\mathcal{B}^F$ 中的
$B' = x B x^{-1}$ 求和；
由 Lang 定理，$\mathcal{B}^F = G^F / B^F$，因此 $x$ 可以取在 $G^F$ 中。
另一方面，$g \circ T_K$ 在 $V$ 的标准基下的矩阵元是
$(x B^F, y B^F) \mapsto f_K (x^{-1} g y)$，其迹就是上式。
:::

换言之，考虑 Hecke 代数 $\mathcal{H} = \operatorname{End}_{G^F} (V)$，
则特征函子在函数侧的类比是映射
\[
\begin{aligned}
  \mathcal{H} & \longrightarrow \{ \text{类函数} \} , \\
  T & \longmapsto (g \mapsto \operatorname{tr} (g \circ T, V)) .
\end{aligned}
\]
例如，$K = \Delta_1$ 时，$T_K$ 是恒等映射，
其对应的类函数就是 @ex:sl2 中的 $\operatorname{Ind}_{B^F}^{G^F} 1$。

注意，上述映射只涉及主序列表示的特征标，
而全部单幂幺特征层（包括尖点的）都出现在某个 $\operatorname{ch} K$ 的错致上同调中。
这并不矛盾，因为单特征层的特征函数一般是几个不可约特征标的线性组合（见下文）。

::: theorem [Lusztig] {@thm:basis}
设 $G$ 是 $\mathbb{F}_q$ 上的约化群，$F$ 为相应的 Frobenius 态射，
并固定域同构 $\overline{\mathbb{Q}}_\ell \simeq \mathbb{C}$。
则对每个 $F$-稳定的单特征层 $A$，可以选取同构 $\varphi_A \colon F^* A \simeq A$，
使得这些特征函数 $\chi_{A, \varphi_A}$ 构成 $G^F$ 上的类函数空间关于内积
\[
\langle f_1, f_2 \rangle =
\frac{1}{|G^F|} \sum_{g \in G^F} f_1 (g) \, \overline{f_2 (g)}
\]
的一组[[标准正交基]]，
并且每个 $\varphi_A$ 在相差单位根的意义下唯一。
:::

Lusztig 在 [@Lusztig1986a, §25] 中在一些较弱的条件下证明了这一定理；
这些条件归结为尖点单特征层的“干净性”，
后者由 Lusztig [@Lusztig2012] 对一般情形证明
（参见 [@TaylorTiep2020, 定理 5.4]）。

特别地，$F$-稳定的单特征层的个数等于 $G^F$ 的共轭类的个数，
也就是 $G^F$ 的不可约表示的个数，
这在 @ex:torus 与 @ex:sl2-all 中可以直接验证。

然而，$\chi_{A, \varphi_A}$ 一般并不是 $G^F$ 的不可约特征标。
Lusztig 在研究幂幺表示的分类时定义了 $G^F$ 的[[几乎特征标|**几乎特征标**]]，
它们是不可约特征标的线性组合，
组合系数由每个“族”上的一个矩阵给出，这一矩阵称为**非交换 Fourier 变换**
[@Lusztig1984a]。
例如，设 $G$ 分裂，则对 $W$ 的不可约表示 $E$，相应的几乎特征标是
\[
R_E = \frac{1}{|W|} \sum_{w \in W} \operatorname{tr} (w, E) \, R_{T_w} (1) ,
\]
其中 $T_w$ 是类型为 $w$ 的 $F$-稳定极大环面，
$R_{T_w} (1)$ 是 [[Deligne–Lusztig 特征标]]。
在 @ex:sl2 中，$R_{T_1} (1) = 1 + \mathrm{St}$，$R_{T_s} (1) = 1 - \mathrm{St}$，
因此 $R_\mathrm{sgn} = (R_{T_1} (1) - R_{T_s} (1)) / 2 = \mathrm{St}$，
正是 $K'$ 的特征函数。

Lusztig 猜想，在相差常数倍的意义下，
$F$-稳定单特征层的特征函数恰好就是几乎特征标；
Shoji [@Shoji1995; @Shoji1995b] 在 $G$ 的中心连通时证明了这一猜想；
由于干净性已对一般情形证明，这里对 $p$、$q$ 没有限制 [@Geck2019, 2.7]。
不过，联系二者的常数在许多情形下仍未完全确定。
对 $\mathrm{GL}_n$ 而言，几乎特征标在相差符号的意义下就是不可约特征标，
因此 $\mathrm{GL}_n (\mathbb{F}_q)$ 的不可约特征标都可以由单特征层得到。

在 Lie 代数的情形，相应的结论较为简单：

::: proposition {@prop:lie-basis}
设 $k = \overline{\mathbb{F}}_q$，$G$ 与双线性型 $\langle -, - \rangle$
都定义在 $\mathbb{F}_q$ 上，$p$ 相对于 $G$ 足够大。
则对 $\mathfrak{g}$ 上每个 $F$-稳定的单特征层 $A$，
任取同构 $\varphi_A \colon F^* A \simeq A$，
特征函数 $\chi_{A, \varphi_A}$ 构成 $\mathfrak{g}^F$ 上 $G^F$-不变函数空间的一组基。
:::

::: proof [证明概要]
先说明 $F$-稳定的轨道层的特征函数构成一组基。
对 $F$-稳定的轨道 $\mathcal{O}$，由 Lang 定理，
$\mathcal{O}^F$ 中的 $G^F$-轨道与 $\mathcal{O}$ 上 $F$-稳定的不可约 $G$-等变局部系
都由 $x \in \mathcal{O}^F$ 的稳定化子的连通分支群决定，
由此可知后者的特征函数构成 $\mathcal{O}^F$ 上 $G^F$-不变函数的一组基。
由于 $\operatorname{IC} (\overline{\mathcal{O}}, \mathcal{E})$
支在 $\overline{\mathcal{O}}$ 上，
且在 $\mathcal{O}$ 上的限制是 $\mathcal{E}$ 的移位，
按轨道闭包的偏序作三角化即得所需结论。

另一方面，由 Grothendieck 迹公式，$\mathcal{F} (A)$ 的特征函数在相差符号的意义下是
\[
y \longmapsto
\sum_{x \in \mathfrak{g}^F} \chi_{A, \varphi} (x) \,
\psi (\operatorname{Tr}_{\mathbb{F}_q / \mathbb{F}_p} \langle x, y \rangle) ,
\]
即 $\chi_{A, \varphi}$ 在有限 Abel 群 $\mathfrak{g}^F$ 上的 Fourier 变换。
有限 Abel 群上的 Fourier 变换是线性同构，并保持 $G^F$-不变性，因此命题成立。
:::

### 分类 {@sec:classification}

本节设定为 $\ell$ 进情形。
我们首先定义[[抛物诱导]]与[[抛物限制]]函子，并由之定义**尖点特征层**的概念。
我们将看到，所有单特征层都能由尖点特征层的抛物诱导得到，
而尖点特征层则比所有特征层更容易分类。

设 $P$ 是 $G$ 的[[抛物子群]]，$L$ 是 $P$ 的 [[Levi 子群]]，$U_P$ 是 $P$ 的[[幂幺根]]。
考虑对应
\[
L /_\mathrm{ad} L
\xleftarrow{\ q \ } P /_\mathrm{ad} P
\xrightarrow{\ p \ } G /_\mathrm{ad} G ,
\]
其中 $q$ 由商映射 $P \to P / U_P \simeq L$ 诱导，
$p$ 由含入 $P \subset G$ 诱导，这里 $p$ 是紧合的。
则[[抛物诱导]]与[[抛物限制]]定义为函子
\[
\operatorname{ind}_{L \subset P}^G = p_! \, q^* , \quad
\operatorname{res}_{L \subset P}^G = q_! \, p^* ,
\]
在有的约定下也做适当的移位。
例如，当 $P = B$、$L = T$ 时，
$p$ 就是 Grothendieck–Springer 消解，
也即之前的映射 $\pi_1$，
从而对 $\mathcal{L} \in \mathcal{S} (T)$，有
\[
\operatorname{ind}_{T \subset B}^G (\mathcal{L})
\simeq \operatorname{ch}_\mathcal{L} (\Delta_1^\mathcal{L})
= (\pi_1)_! \, \bar{\mathcal{L}}_1 .
\]

称特征层 $A$ 为**尖点特征层**，
如果对 $G$ 的每个真抛物子群 $P$ 及其 Levi 子群 $L$，都有
$\operatorname{res}_{L \subset P}^G (A) = 0$。
例如，环面上的特征层都是尖点的，
而 @ex:sl2-all 中的两个单特征层 $(j_{\pm 1})_! \, \mathcal{E}_{\pm 1} [2]$
是 $\mathrm{SL}_2$ 上仅有的尖点单特征层。

::: theorem [Lusztig] {@thm:induction}
设 $A$ 是 $G$ 上的单特征层。
则存在 $G$ 的抛物子群 $P$、其 Levi 子群 $L$ 及 $L$ 上的尖点单特征层 $A_0$，
使得 $A$ 是半单错致层 $\operatorname{ind}_{L \subset P}^G (A_0)$ 的直和项；
并且 $(L, A_0)$ 在 $G$-共轭的意义下由 $A$ 唯一确定。
:::

由于 $\operatorname{ind}_{L \subset P}^G (A_0)$ 是单特征层的直和，
$\mathsf{CS} (G)$ 由这些 $\operatorname{ind}_{L \subset P}^G (A_0)$ 生成。
这与有限群 $G^F$ 的 [[Harish-Chandra 理论]]类似：
$G^F$ 的每个不可约表示都是某个 Levi 子群的尖点表示的 Harish-Chandra 诱导的成分。

对幂幺特征层，这一分类可以写得更具体 [@Lusztig2026]：
对包含 $T$ 的 Levi 子群 $L \subset G$，
$L$ 上每个尖点单幂幺特征层的抛物诱导都分裂成若干直和项，
这些项一一对应于 $N_W (W_L) / W_L$ 的不可约表示，
这里 $W_L \subset W$ 是固定 $\mathrm{Z} (L)$ 的单位分支的子群。
尖点单幂幺特征层还有如下描述 [@Lusztig2026]：

::: theorem [尖点单幂幺特征层]
假设 $G / \mathrm{Z} (G)$ 是单代数群，其中 $\mathrm{Z} (G)$ 是 $G$ 的中心。
尖点单幂幺特征层的支集是单个共轭类与 $\mathrm{Z} (G)$ 的单位连通分支之积的闭包。
它们的个数如下：

- $A_n$ 型：没有。

- $B_n$、$C_n$ 型：当 $n = m^2 + m$（$m \geq 1$）时恰有一个，否则没有。

- $D_n$ 型：当 $n = m^2$（$m \geq 2$ 为偶数）时恰有一个，否则没有。

- $E_6$、$E_7$ 型各有 $2$ 个，$E_8$ 型有 $13$ 个，$F_4$ 型有 $7$ 个，$G_2$ 型有 $4$ 个。

在每种类型中，这都等于 $G$ 分裂时 $G^F$ 的尖点幂幺表示的个数。
:::

### 奇异支集 {@sec:singular-support}

在复数域上，特征层可以用[[微局部几何]]来刻画。
设 $k = \mathbb{C}$，
用左平移与不变双线性型将[[余切丛]] $\mathrm{T}^* G$ 等同于 $G \times \mathfrak{g}$，
并记 $\mathcal{N} \subset \mathfrak{g}$ 为幂零锥。

::: theorem [Mirković–Vilonen、Ginzburg] {@thm:singular-support}
设 $k = \mathbb{C}$。
则 $G$ 上 $G$-等变的单错致层 $A$ 是单特征层，
当且仅当 $A$ 的[[奇异支集]]包含于 $G \times \mathcal{N}$。
:::

这一定理在 [@MirkovicVilonen1988]
及 [@Ginzburg1989] 中独立证明。
单特征层的奇异支集包含于 $G \times \mathcal{N}$ 这一方向，
在正特征的情形也成立 [@Psaromiligkos2022]。

## 推广

- **非连通群**。
  Lusztig 在 2003–2009 年的系列论文中，
  将特征层推广到非连通约化群的连通分支上。

- **幂幺群**。
  Lusztig 猜想连通幂幺群上也有类似的特征层理论，
  这由 Boyarchenko 与 Drinfeld 在正特征的情形证明。

- **范畴化**。
  Bezrukavnikov、Finkelberg 与 Ostrik [@BezrukavnikovFinkelbergOstrik2012]
  证明了复约化群上的特征层构成的范畴可以描述为
  Harish-Chandra 双模范畴的 [[Drinfeld 中心]]；
  Ben-Zvi 与 Nadler [@BenZviNadler2009] 证明了
  Hecke 范畴的 Drinfeld 中心与[[范畴迹]]都等同于幂幺特征层构成的范畴。
  因此，定义幂幺特征层所用的对应实现了 Hecke 范畴的范畴迹。

- **环路群**。
  Lusztig 提出了[[环路群]]上的幂幺特征层理论，
  它与 $p$ 进约化群的几乎特征标有关 [@Lusztig2026]。

## 参考文献

综述与教材：

```bibliography
MarsSpringer1989:
  type: incollection
  author: [J. G. M. Mars, T. A. Springer]
  title: Character sheaves
  booktitle: 'Orbites unipotentes et représentations III. Orbites et faisceaux pervers'
  series: Astérisque
  volume: 173--174
  year: 1989
  pages: 111--198
  url: 'https://www.numdam.org/item/AST_1989__173-174__111_0/'

Letellier2005:
  type: book
  author: Emmanuel Letellier
  title: Fourier Transforms of Invariant Functions on Finite Reductive Lie Algebras
  series: Lecture Notes in Mathematics
  volume: 1859
  publisher: Springer
  year: 2005
  doi: '10.1007/b104209'

Achar2021:
  type: book
  author: Pramod N. Achar
  title: Perverse Sheaves and Applications to Representation Theory
  series: Mathematical Surveys and Monographs
  volume: 258
  publisher: American Mathematical Society
  year: 2021

Lusztig2026:
  type: preprint
  author: George Lusztig
  title: A survey of character sheaves
  year: 2026
  arxiv: '2606.13545'
```

原始文献：

```bibliography
BBD1982:
  type: book
  author: [Alexander Beilinson, Joseph Bernstein, Pierre Deligne]
  title: Faisceaux pervers
  series: Astérisque
  volume: 100
  publisher: Société Mathématique de France
  year: 1982

DeligneLusztig1976:
  type: article
  author: [Pierre Deligne, George Lusztig]
  title: Representations of reductive groups over finite fields
  journaltitle: Annals of Mathematics
  volume: 103
  year: 1976
  pages: 103--161

Springer1976:
  type: article
  author: T. A. Springer
  title: 'Trigonometric sums, Green functions of finite groups and representations of Weyl groups'
  journaltitle: Inventiones Mathematicae
  volume: 36
  year: 1976
  pages: 173--207

Lusztig1984a:
  type: book
  author: George Lusztig
  title: Characters of Reductive Groups over a Finite Field
  series: Annals of Mathematics Studies
  volume: 107
  publisher: Princeton University Press
  year: 1984

Lusztig1984b:
  type: article
  author: George Lusztig
  title: Intersection cohomology complexes on a reductive group
  journaltitle: Inventiones Mathematicae
  volume: 75
  year: 1984
  pages: 205--272

Lusztig1985:
  type: article
  author: George Lusztig
  title: Character sheaves I
  journaltitle: Advances in Mathematics
  volume: 56
  year: 1985
  pages: 193--237

Lusztig1985a:
  type: article
  author: George Lusztig
  title: Character sheaves II
  journaltitle: Advances in Mathematics
  volume: 57
  year: 1985
  pages: 226--265

Lusztig1985b:
  type: article
  author: George Lusztig
  title: Character sheaves III
  journaltitle: Advances in Mathematics
  volume: 57
  year: 1985
  pages: 266--315

Lusztig1986:
  type: article
  author: George Lusztig
  title: Character sheaves IV
  journaltitle: Advances in Mathematics
  volume: 59
  year: 1986
  pages: 1--63

Lusztig1986a:
  type: article
  author: George Lusztig
  title: Character sheaves V
  journaltitle: Advances in Mathematics
  volume: 61
  year: 1986
  pages: 103--155

Lusztig1987:
  type: incollection
  author: George Lusztig
  title: 'Fourier transforms on a semisimple Lie algebra over $\mathbb{F}_q$'
  booktitle: Algebraic Groups Utrecht 1986
  series: Lecture Notes in Mathematics
  volume: 1271
  publisher: Springer
  year: 1987
  pages: 177--188

MirkovicVilonen1988:
  type: article
  author: [Ivan Mirković, Kari Vilonen]
  title: Characteristic varieties of character sheaves
  journaltitle: Inventiones Mathematicae
  volume: 93
  year: 1988
  pages: 405--418

Ginzburg1989:
  type: incollection
  author: Victor Ginzburg
  title: Admissible modules on a symmetric space
  booktitle: 'Orbites unipotentes et représentations III. Orbites et faisceaux pervers'
  series: Astérisque
  volume: 173--174
  year: 1989
  pages: 199--255

Shoji1995:
  type: article
  author: Toshiaki Shoji
  title: Character sheaves and almost characters of reductive groups
  journaltitle: Advances in Mathematics
  volume: 111
  year: 1995
  pages: 244--313

Shoji1995b:
  type: article
  author: Toshiaki Shoji
  title: Character sheaves and almost characters of reductive groups, II
  journaltitle: Advances in Mathematics
  volume: 111
  year: 1995
  pages: 314--354

Sabbah2005:
  type: book
  author: Claude Sabbah
  title: 'Polarizable twistor $\mathcal{D}$-modules'
  series: Astérisque
  volume: 300
  publisher: Société Mathématique de France
  year: 2005

Mochizuki2007:
  type: book
  author: Takuro Mochizuki
  title: 'Asymptotic behaviour of tame harmonic bundles and an application to pure twistor $D$-modules'
  series: Memoirs of the American Mathematical Society
  publisher: American Mathematical Society
  year: 2007
  note: '分为两部分，编号 869、870'
  arxiv: 'math/0312230'

Mirkovic2004:
  type: article
  author: Ivan Mirković
  title: Character sheaves on reductive Lie algebras
  journaltitle: Moscow Mathematical Journal
  volume: 4
  number: 4
  year: 2004
  pages: 897--910

Lusztig2012:
  type: article
  author: George Lusztig
  title: On the cleanness of cuspidal character sheaves
  journaltitle: Moscow Mathematical Journal
  volume: 12
  year: 2012
  pages: 621--631

Geck2019:
  type: article
  author: Meinolf Geck
  title: On the values of unipotent characters in bad characteristic
  journaltitle: Rendiconti del Seminario Matematico della Università di Padova
  volume: 141
  year: 2019
  pages: 37--63

LusztigYun2020:
  type: article
  author: [George Lusztig, Zhiwei Yun]
  title: Endoscopy for Hecke categories, character sheaves and representations
  journaltitle: Forum of Mathematics, Pi
  volume: 8
  year: 2020
  doi: '10.1017/fmp.2020.9'
  arxiv: '1904.01176'

TaylorTiep2020:
  type: preprint
  author: [Jay Taylor, Pham Huu Tiep]
  title: Lusztig induction, unipotent supports, and character bounds
  arxiv: '1809.00173'

Psaromiligkos2022:
  type: preprint
  author: Kostas I. Psaromiligkos
  title: 'Character sheaves in characteristic $p$ have nilpotent singular support'
  arxiv: '2211.11126'

BenZviNadler2009:
  type: preprint
  author: [David Ben-Zvi, David Nadler]
  title: The character theory of a complex group
  year: 2009
  arxiv: '0904.1247'

BezrukavnikovFinkelbergOstrik2012:
  type: article
  author: [Roman Bezrukavnikov, Michael Finkelberg, Victor Ostrik]
  title: 'Character $D$-modules via Drinfeld center of Harish-Chandra bimodules'
  journaltitle: Inventiones Mathematicae
  volume: 188
  year: 2012
  pages: 589--620
```

```terms
特征层:
  en: character sheaf
  fr: faisceau caractère :m
  de: Charaktergarbe :f
  ja: 指<し>標<ひょう>層<そう>
幂幺特征层:
  en: unipotent character sheaf
  fr: faisceau caractère unipotent :m
  de: unipotente Charaktergarbe :f
  ja: 冪<べき>単<たん>指<し>標<ひょう>層<そう>
单特征层:
  en: irreducible character sheaf
  fr: faisceau caractère irréductible :m
  de: irreduzible Charaktergarbe :f
  ja: 既<き>約<やく>指<し>標<ひょう>層<そう>
特征函子:
  en: character functor
  fr: foncteur caractère :m
  de: Charakterfunktor :m
  ja: 指<し>標<ひょう>関<かん>手<しゅ>
尖点特征层:
  en: cuspidal character sheaf
  fr: faisceau caractère cuspidal :m
  de: kuspidale Charaktergarbe :f
  ja: 尖<せん>点<てん>指<し>標<ひょう>層<そう>
轨道层:
  en: orbital sheaf
相对位置:
  en: relative position
特征函数:
  en: characteristic function
抛物诱导:
  en: parabolic induction
抛物限制:
  en: parabolic restriction
非交换 Fourier 变换:
  en: nonabelian Fourier transform
```
