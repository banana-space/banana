---
title: 错致层
aliases: [反常层, 偏屈层, 错致 t 结构, 错致 t-结构]
categories: [层论]
navboxes: [层论, 几何表示论]
---

在[[代数几何]]中，**错致层**（又译**反常层**、**偏屈层**）
是[[代数簇]]或[[复解析空间]]上的一类[[可构造层|可构造层复形]]，
构成可构造层[[导出范畴]]中一个 [[t 结构]]（称为**错致 t 结构**）的[[心]]。

大致来说，错致层是由不同维数的层经过不同[[移位]]后拼起来的复形，
其中 $d$ 维的部分要放在复形的第 $-d$ 个位置。
例如，[[点层]]本身就是错致层；
在[[复流形]]上，复 $d$ 维闭子流形上的局部系移位 $d$ 后是错致层。
一般的错致层由这些部分粘合而成，但未必是它们的直和。

这样移位的目的之一是与 [[Verdier 对偶]]相容。
对上述 $d$ 维闭子流形上的局部系 $L$，
Verdier 对偶将其变为 $L^\vee [2d]$，
其中 $L^\vee$ 是对偶局部系，从而
\[
\mathbb{D} (L [d]) \simeq L^\vee [d] ,
\]
即 $L [d]$ 的 Verdier 对偶仍是错致层。这对一般的错致层也成立。

在奇异空间上，一类重要的错致层是**[[相交复形]]**。
设 $X$ 是 $d$ 维奇异簇，则常值层 $\Lambda_X [d]$ 一般不是 Verdier 自对偶的，
其上同调也不满足 [[Poincaré 对偶]]；
而相交复形 $\mathrm{IC}_X$ 由常值层在奇异部分上做修改得到，是自对偶的错致层，
其上同调就是[[相交上同调]]，满足 Poincaré 对偶。
错致层范畴中的[[单对象]]都是这样的相交复形。

错致层的理论对复解析空间上的可构造层和平展 [[$\ell$ 进层]]都适用，
后者能定义在一般[[域]]上的概形上。
错致层由 Beilinson、Bernstein、Deligne 和 Gabber 引入
[@BBD1982]；
Gabber 在该书 2018 年的第二版中才署名为作者。

## 定义

错致层可以在以下两种情形定义：

- **复解析空间上的层**：
  设 $X$ 是有限维[[复解析空间]]，$\Lambda$ 是域。
  记 $\mathsf{D} (X) = \mathsf{D}^\mathrm{b}_\mathrm{c} (X, \Lambda)$
  为 $X$ 上关于复解析[[分层]]具有可构造上同调层的有界 $\Lambda$-[[模层]]复形的导出范畴，
  视为[[三角范畴]]或[[稳定 $(\infty, 1)$-范畴]]。
  这里可构造是指存在 $X$ 的局部有限分层，其每一片都是解析子空间，
  且该层限制在每一片上都是有限秩的[[局部系]]。

- **平展 $\ell$ 进层**：
  设 $k$ 是[[代数闭域]]，$X$ 是 $k$ 上的[[代数簇]]，
  $\ell$ 是与 $k$ 的[[特征（代数）|特征]]互素的[[素数]]，
  $\Lambda$ 是特征为 $\ell$ 的域或 $\mathbb{Q}_\ell$ 的[[代数扩张]]
  （如 $\mathbb{F}_\ell$、$\overline{\mathbb{F}}_\ell$、$\mathbb{Q}_\ell$、
  $\overline{\mathbb{Q}}_\ell$）。
  记 $\mathsf{D} (X) = \mathsf{D}^\mathrm{b}_\mathrm{c} (X, \Lambda)$
  为 $X$ 上具有可构造上同调层的 $\Lambda$ 系数有界平展层复形的导出范畴，
  视为[[三角范畴]]或[[稳定 $(\infty, 1)$-范畴]]。
  这里可构造是指存在 $X$ 的分层，该层限制在每一片上都是有限秩的局部系。

以下所有的[[六函子理论|六函子]]（$f^*$、$f_*$、$f_!$、$f^!$、$\otimes$、
$\mathcal{H}\mathit{om}$）均指[[导出函子]]。
在上述两种情形中，均有 [[Verdier 对偶]]函子
\[
\mathbb{D}_X = \mathcal{H}\mathit{om} (-, \omega_X) \colon
\mathsf{D} (X)^\mathrm{op} \overset{\sim}{\longrightarrow} \mathsf{D} (X) ,
\]
有时也简记为 $\mathbb{D}$，
其中 $\omega_X = a_X^! \Lambda$ 是 $X$ 的[[对偶化复形]]，
$a_X \colon X \to *$ 是投影。
我们有 $\mathbb{D}_X^2 \simeq \operatorname{id}$。

对 $A \in \mathsf{D} (X)$，记 $\mathcal{H}^i (A)$ 为其第 $i$ 个通常上同调层，
$\operatorname{supp} \mathcal{H}^i (A)$ 为其[[支集]]。
约定 $\dim \varnothing = -\infty$。

::: definition [错致 t 结构、错致层] {@def:perverse}
定义 $\mathsf{D} (X)$ 的[[全子范畴]]
\[
\begin{aligned}
  {}^\mathrm{p}\mathsf{D}^{\leq 0} (X)
  &= \{ A \in \mathsf{D} (X) \mid \forall i \in \mathbb{Z},\;
    \dim \operatorname{supp} \mathcal{H}^i (A) \leq -i \} , \\
  {}^\mathrm{p}\mathsf{D}^{\geq 0} (X)
  &= \{ A \in \mathsf{D} (X) \mid \forall i \in \mathbb{Z},\;
    \dim \operatorname{supp} \mathcal{H}^i (\mathbb{D}_X A) \leq -i \} .
\end{aligned}
\]
则 $({}^\mathrm{p}\mathsf{D}^{\leq 0} (X), {}^\mathrm{p}\mathsf{D}^{\geq 0} (X))$ 构成
$\mathsf{D} (X)$ 上的 [[t 结构]]
（@thm:t-structure），称为**错致 t 结构**。
其[[心]]
\[
\mathsf{Perv} (X) = {}^\mathrm{p}\mathsf{D}^{\leq 0} (X) \cap {}^\mathrm{p}\mathsf{D}^{\geq 0} (X)
\]
是 [[Abel 范畴]]，其中的对象称为 $X$ 上的**错致层**。

关于错致 t 结构的截断函子与上同调函子分别记为
${}^\mathrm{p}\tau^{\leq n}$、
${}^\mathrm{p}\tau^{\geq n}$ 与
${}^\mathrm{p}\mathcal{H}^n \colon \mathsf{D} (X) \to \mathsf{Perv} (X)$。
:::

定义中的第一个条件称为**支集条件**，第二个称为**余支集条件**。
支集条件是说，$A$ 的第 $-i$ 个上同调层的支集至多是 $i$ 维的；
特别地，$A$ 只在第 $0$ 个及以下的位置有上同调层。
余支集条件是对 Verdier 对偶的同样要求。
由定义，Verdier 对偶交换这两个条件，
因此保持错致层。

下面的命题说明，定义中的条件也可以改写成分层中每一片上的条件。

::: proposition [用分层描述] {@prop:strata}
设 $\mathcal{F} \in \mathsf{D} (X)$，并设 $X$ 有[[分层]] $X = \bigsqcup_S S$
（在复解析情形要求局部有限），
其中每一片 $S$ 都是光滑连通的。
记 $i_S \colon S \to X$ 为含入映射，并设对每一片 $S$，
$i_S^* \mathcal{F}$ 与 $i_S^! \mathcal{F}$ 的上同调层都是局部系。

则 $\mathcal{F}$ 是错致层当且仅当对每一片 $S$，
\[
\mathcal{H}^k (i_S^* \mathcal{F}) = 0 \quad (k > -\dim S) ,
\qquad
\mathcal{H}^k (i_S^! \mathcal{F}) = 0 \quad (k < -\dim S) .
\]
:::

::: proof
先看支集条件。
对每个 $k$，$\mathcal{H}^k (\mathcal{F})$ 的支集是
满足 $\mathcal{H}^k (i_S^* \mathcal{F}) \neq 0$ 的那些片 $S$ 的并的闭包，
其维数等于这些片的维数的最大值。
因此支集条件等价于第一组条件。

再看余支集条件。设 $S$ 是 $d$ 维的片。
由于 $i_S^* \, \mathbb{D}_X \simeq \mathbb{D}_S \, i_S^!$，
且 $i_S^! \mathcal{F}$ 的上同调层是光滑的 $S$ 上的局部系，有
\[
\mathcal{H}^k (i_S^* \, \mathbb{D}_X \mathcal{F})
\simeq \mathcal{H}^{-k-2d} (i_S^! \mathcal{F})^\vee ,
\]
在平展情形还要做 Tate 扭转。
特别地，$i_S^* \, \mathbb{D}_X \mathcal{F}$ 的上同调层也是局部系。
对 $\mathbb{D}_X \mathcal{F}$ 应用上一段的论证，
余支集条件等价于：对每个 $d$ 维的片 $S$，
$\mathcal{H}^k (i_S^* \, \mathbb{D}_X \mathcal{F}) = 0$ 对 $k > -d$ 成立，
即 $\mathcal{H}^m (i_S^! \mathcal{F}) = 0$ 对 $m < -d$ 成立。
:::

在复解析情形，若 $\mathcal{F}$ 关于某个 Whitney 分层可构造，
则该分层满足命题的条件 [@MaximSchurmann2022, 定理 2.18]。
在平展情形，满足命题条件的分层也总是存在。

## 例子

下面沿用定义一节的记号。

::: example [点上的层] {@ex:point}
设 $X$ 是单点空间（在平展情形，设 $X = \operatorname{Spec} k$）。
则 $\mathsf{D} (X)$ 是有限维 $\Lambda$-向量空间的有界复形构成的导出范畴，
Verdier 对偶就是取对偶空间。
此时错致层恰好是集中在第 $0$ 个位置的复形，即有限维向量空间。

一般地，设 $x \in X$ 是闭点，$i_x \colon \{ x \} \to X$ 是含入映射，
$V$ 是 $x$ 上的层，则[[点层]] $i_{x *} V$ 是错致层：
它只在第 $0$ 个位置有上同调层，支集是一个点；
其 Verdier 对偶 $i_{x *} V^\vee$ 也是如此。
:::

::: example [光滑空间上的局部系] {@ex:local-system}
设 $X$ 是 $d$ 维复流形，或 $k$ 上的 $d$ 维光滑代数簇，$L$ 是 $X$ 上的局部系。
则 $L [d]$ 是错致层，因为它只在第 $-d$ 个位置有上同调层 $L$，其支集是 $d$ 维的；
其 Verdier 对偶 $L^\vee [d]$ 也如此。
:::

一般地，若 $X$ 是 $d$ 维复流形或光滑代数簇，则任一错致层 $\mathcal{F}$
都在某个稠密开集 $U$ 上形如 $L [d]$，其中 $L$ 是 $U$ 上的局部系（可能为零）。
因此，错致层可以看成这样的局部系的推广，它在维数更小的子空间上添加更多信息。

::: example [闭子空间上的局部系] {@ex:closed}
设 $i \colon Z \to X$ 是闭嵌入，$Z$ 是 $d$ 维光滑的，$L$ 是 $Z$ 上的局部系。
则 $i_* L [d]$ 是 $X$ 上的错致层，
因为 $i_*$ 不改变上同调层的支集，且与 Verdier 对偶交换。
:::

下面的例子说明，不同维数的部分之间也可以有非平凡的粘合。

::: example [复平面] {@ex:plane}
设 $X = \mathbb{C}$，$j \colon \mathbb{C}^\times \to \mathbb{C}$
和 $i \colon \{ 0 \} \to \mathbb{C}$ 是含入映射。层的短正合列
\[
0 \longrightarrow j_! \Lambda \longrightarrow \Lambda_\mathbb{C}
\longrightarrow i_* \Lambda \longrightarrow 0
\]
给出 $\mathsf{D} (X)$ 中的正合三角
$i_* \Lambda \to j_! \Lambda [1] \to \Lambda_\mathbb{C} [1] \to i_* \Lambda [1]$。
它的三项都是错致层，因此得到错致层的短正合列
\[
0 \longrightarrow i_* \Lambda \longrightarrow j_! \Lambda [1]
\longrightarrow \Lambda_\mathbb{C} [1] \longrightarrow 0 .
\]
所以在错致层范畴中，$j_! \Lambda [1] \to \Lambda_\mathbb{C} [1]$
不是单射，而是满射，其核是原点处的点层 [@deCataldoMigliorini2009, 2.3 节]。
这个扩张不可裂，因为 $j_! \Lambda [1]$ 在第 $0$ 个位置的上同调层为零。
:::

更一般地，$\mathbb{C}$ 上关于划分 $\{ 0 \} \sqcup \mathbb{C}^\times$ 可构造的错致层，
可以用 $\mathbb{C}^\times$ 上的局部系与原点处的线性代数信息描述，
见 [@MaximSchurmann2022, 例 2.47] 以及[[亏闭链函子]]。

::: example [奇异空间上的常值层] {@ex:constant}
设 $X$ 是纯 $n$ 维的复代数簇或复解析空间。
若 $X$ 是[[局部完全交]]，例如（可能奇异的）超曲面，则 $\Lambda_X [n]$ 是错致层
[@MaximSchurmann2022, 例 2.19]。
若 $X$ 是曲线，则 $\Lambda_X [1]$ 总是错致层 [@deCataldoMigliorini2009, 例 2.3.4]。

一般地，$\Lambda_X [n]$ 未必是错致层。
例如，设 $X \subset \mathbb{C}^4$ 是两个复平面的并，它们只交于原点 $0$。
在原点附近，$X$ 是两个 $3$ 维球面的无交并上的锥，因此
\[
H^k_{\{ 0 \}} (X; \Lambda) \simeq \tilde{H}^{k-1} (S^3 \sqcup S^3; \Lambda) ,
\]
它在 $k = 1$ 时非零。
于是 $\mathcal{H}^{-1} (i_0^! \Lambda_X [2]) \neq 0$，
由 @prop:strata，$\Lambda_X [2]$ 不满足余支集条件。
一般地，对只有孤立奇点的复曲面 $X$，
$\Lambda_X [2]$ 是错致层当且仅当每个奇点处只有一个分支
[@deCataldoMigliorini2009, 例 2.3.4]。
:::

## 性质

### 错致 t 结构

@def:perverse 中的两个子范畴确实构成 t 结构。
证明的想法是：在分层的每一片上，局部系移位后构成的范畴有显然的 t 结构，
再把这些 t 结构逐片粘合起来。

::: theorem [错致 t 结构] {@thm:t-structure}
二元组 $({}^\mathrm{p} \mathsf{D}^{\leq 0} (X), {}^\mathrm{p} \mathsf{D}^{\geq 0} (X))$
是 $\mathsf{D} (X)$ 上的 t 结构。
特别地，其心 $\mathsf{Perv} (X)$ 是 Abel 范畴。
:::

见 [@BBD1982, 2.1–2.2 节]。
对复代数簇，见 [@deCataldoMigliorini2009, 定理 2.3.2]；
对复解析空间，见 [@MaximSchurmann2022, 定义 2.16 及其后的讨论]。

::: proof [证明概要]
我们只说明复解析情形；平展情形需要稍加修改，见 [@BBD1982, 2.2 节]。

固定 $X$ 的 Whitney 分层 $\mathcal{S}$，
记 $\mathsf{D}_\mathcal{S} (X) \subset \mathsf{D} (X)$ 为关于 $\mathcal{S}$
可构造的复形构成的全子范畴。
对 $d$ 维的片 $S$，上同调层都是局部系的复形构成 $\mathsf{D} (S)$ 的全子范畴。
将其通常的 t 结构移位 $d$，所得 t 结构的心由形如 $L [d]$ 的复形构成。

这些 t 结构可以逐片粘合。
设 $U \subset X$ 是若干片的并构成的开集，$Z = X \setminus U$，
$j \colon U \to X$、$i \colon Z \to X$ 为含入映射。
给定 $U$ 与 $Z$ 上的 t 结构，则
\[
\begin{aligned}
  \mathsf{D}^{\leq 0} (X) & = \{ \mathcal{F} \mid
  j^* \mathcal{F} \in \mathsf{D}^{\leq 0} (U), \
  i^* \mathcal{F} \in \mathsf{D}^{\leq 0} (Z) \} , \\
  \mathsf{D}^{\geq 0} (X) & = \{ \mathcal{F} \mid
  j^* \mathcal{F} \in \mathsf{D}^{\geq 0} (U), \
  i^! \mathcal{F} \in \mathsf{D}^{\geq 0} (Z) \}
\end{aligned}
\]
构成 $X$ 上的 t 结构 [@BBD1982, 1.4 节]。
我们称之为 $U$ 与 $Z$ 上的 t 结构的**粘合**。
对 $\dim X$ 归纳，逐次粘合各片上的上述 t 结构；
由 @prop:strata，所得的恰好是错致 t 结构在 $\mathsf{D}_\mathcal{S} (X)$ 上的限制。

最后，@def:perverse 中的条件不依赖分层的选取，
且任意有限个复形都关于某个公共的 Whitney 分层可构造，
因此 t 结构的各条公理都可以在某个 $\mathsf{D}_\mathcal{S} (X)$ 中验证。
:::

我们称 ${}^\mathrm{p} \mathcal{H}^i (\mathcal{F}) \in \mathsf{Perv} (X)$
为 $\mathcal{F} \in \mathsf{D} (X)$ 的第 $i$ 个**错致上同调**。
由 t 结构的一般理论，正合三角给出错致上同调的长正合列，
而错致层的短正合列恰好是三项都是错致层的正合三角。
由于 Verdier 对偶交换支集条件与余支集条件，它给出范畴等价
\[
\mathbb{D}_X \colon \mathsf{Perv} (X)^\mathrm{op} \overset{\sim}{\longrightarrow} \mathsf{Perv} (X) ,
\]
且
${}^\mathrm{p} \mathcal{H}^i \circ \mathbb{D}_X \simeq \mathbb{D}_X \circ {}^\mathrm{p} \mathcal{H}^{-i}$
[@deCataldoMigliorini2009, 2.3 节]。

与 $\mathsf{D} (X)$ 中的一般对象不同，错致层可以像层一样局部地给出：

::: proposition [局部性] {@prop:stack}
错致层构成 $X$ 上的[[叠]]。也就是说，对 $X$ 的开覆盖 $(U_\alpha)$，

- 各 $U_\alpha$ 上的错致层态射若在交集上一致，则可以唯一地粘合成 $X$ 上的态射。

- 各 $U_\alpha$ 上的错致层若在交集上给定了同构，且这些同构在三重交集上相容，
  则可以粘合成 $X$ 上的错致层，且在相差唯一同构的意义下唯一。

:::

见 [@BBD1982, 3.2 节; @deCataldoMigliorini2009, 2.3 节]。

### 六函子的正合性

六函子一般不把错致层映为错致层，但在适当的条件下有单侧的 t 正合性。
大致来说，纤维维数不超过 $d$ 的态射至多把错致 t 结构移动 $d$ 个位置：

::: proposition [纤维维数] {@prop:fiber-dim}
设 $f \colon X \to Y$ 是代数簇的态射，其纤维的维数都不超过 $d$。则
\[
f_! , \, f^* \colon {}^\mathrm{p} \mathsf{D}^{\leq 0} \longrightarrow {}^\mathrm{p} \mathsf{D}^{\leq d} ,
\qquad
f_* , \, f^! \colon {}^\mathrm{p} \mathsf{D}^{\geq 0} \longrightarrow {}^\mathrm{p} \mathsf{D}^{\geq -d} .
\]
特别地：

- 若 $f$ 拟有限，例如是[[浸入（代数几何）|浸入]]，
  则 $f_!$、$f^*$ 右 t 正合，$f_*$、$f^!$ 左 t 正合。

- 若 $f$ 是[[有限态射]]，例如是[[闭浸入]]，则 $f_* = f_!$ 是 t 正合的。

- 若 $f$ 是相对维数为 $d$ 的[[光滑态射]]，则 $f^* [d]$ 与 $f^! [-d]$ 都是 t 正合的。
:::

见 [@BBD1982, 4.2 节; @deCataldoMigliorini2009, 5.3 节]。

另一方面，仿射态射在另一侧也有正合性。
下面的定理推广了 Artin 关于仿射簇上同调维数的定理，因此也称为 [[Artin 消没定理]]。

::: theorem [Artin 消没定理] {@thm:artin}
设 $f \colon X \to Y$ 是代数簇的[[仿射态射]]。
则 $f_*$ 右 t 正合，$f_!$ 左 t 正合。
:::

见 [@BBD1982, 4.1 节]；对复代数簇，见 [@MaximSchurmann2022, 定理 3.69]。

结合 @prop:fiber-dim，若 $f$ 既是仿射的又是拟有限的，例如是仿射的开浸入，
则 $f_*$ 与 $f_!$ 都是 t 正合的。

取 $Y$ 为一点，定理说明仿射簇 $X$ 上的错致层 $\mathcal{F}$ 满足
\[
H^k (X; \mathcal{F}) = 0 \quad (k > 0) ,
\qquad
H^k_\mathrm{c} (X; \mathcal{F}) = 0 \quad (k < 0) .
\]
第一式对 ${}^\mathrm{p} \mathsf{D}^{\leq 0} (X)$ 中的对象都成立。
例如，设 $X$ 是 $n$ 维仿射簇，$\mathcal{G}$ 是 $X$ 上的可构造层，
则 $\mathcal{G} [n]$ 满足支集条件，因此 $H^m (X; \mathcal{G}) = 0$ 对 $m > n$ 成立。

在复解析情形，与仿射态射相应的是 Stein 态射，
但需要假设 $f_* \mathcal{F}$、$f_! \mathcal{F}$ 仍是可构造的
[@MaximSchurmann2022, 定理 3.70]。
特别地，[[Stein 空间]] $X$ 上的错致层 $\mathcal{F}$
满足对任意 $k > 0$ 都有 $H^k (X; \mathcal{F}) = 0$
[@MaximSchurmann2022, 定理 3.64]。

### 中间延拓

设 $U \subset X$ 是开集，$j \colon U \to X$ 是含入映射。
给定 $U$ 上的错致层 $\mathcal{G}$，我们希望把它延拓为 $X$ 上的错致层。
前推 $j_! \mathcal{G}$ 与 $j_* \mathcal{G}$ 一般不是错致层；
它们的错致上同调 ${}^\mathrm{p} \mathcal{H}^0$ 是错致层，
但可能在 $Z = X \setminus U$ 上带有多余的部分，
例如 @ex:plane 中的 $j_! \Lambda [1]$ 有支集为原点的子对象。
中间延拓就是去掉这些多余部分后得到的延拓。

::: definition [中间延拓] {@def:intermediate}
设 $j \colon U \to X$ 是开集的含入映射，$\mathcal{G} \in \mathsf{Perv} (U)$；
在复解析情形，假设 $X \setminus U$ 是解析子集，且 $j_! \mathcal{G}$ 可构造。
自然态射 $j_! \mathcal{G} \to j_* \mathcal{G}$ 诱导错致层的态射
\[
{}^\mathrm{p} \mathcal{H}^0 (j_! \mathcal{G})
\longrightarrow {}^\mathrm{p} \mathcal{H}^0 (j_* \mathcal{G}) ,
\]
其像称为 $\mathcal{G}$ 的**中间延拓**，记为 $j_{!*} \mathcal{G} \in \mathsf{Perv} (X)$。
:::

下面的命题说明，在 $\mathcal{G}$ 的所有延拓中，
中间延拓是唯一在 $Z$ 上没有多余部分的一个。

::: proposition [中间延拓的刻画] {@prop:intermediate}
设 $j \colon U \to X$ 与 $\mathcal{G}$ 如上，
$i \colon Z \to X$ 是 $Z = X \setminus U$ 的含入映射。
则 $j^* j_{!*} \mathcal{G} \simeq \mathcal{G}$。
并且在满足 $j^* \mathcal{F} \simeq \mathcal{G}$ 的错致层 $\mathcal{F}$ 中，
以下两个条件中的任一个都唯一地刻画了 $j_{!*} \mathcal{G}$：

1. {@item:no-sub} $\mathcal{F}$ 没有支集包含于 $Z$ 的非零子对象或商对象。

2. {@item:support} $i^* \mathcal{F} \in {}^\mathrm{p} \mathsf{D}^{\leq -1} (Z)$，
   且 $i^! \mathcal{F} \in {}^\mathrm{p} \mathsf{D}^{\geq 1} (Z)$。
:::

见 [@BBD1982, 1.4 节; @deCataldoMigliorini2009, 2.7 节]。

因为[条件 2](@item:support) 在 Verdier 对偶下不变，所以中间延拓与 Verdier 对偶交换：
$\mathbb{D}_X (j_{!*} \mathcal{G}) \simeq j_{!*} (\mathbb{D}_U \mathcal{G})$
[@MaximSchurmann2022, 命题 2.48]。

中间延拓的重要例子是光滑开集上局部系的中间延拓。

::: definition [相交复形] {@def:ic}
设 $X$ 不可约，维数为 $d$，$j \colon U \to X$ 是光滑稠密开集的含入映射，
在复解析情形要求 $X \setminus U$ 是解析子集。
设 $L$ 是 $U$ 上的局部系，称错致层
\[
\mathrm{IC}_X (L) = j_{!*} (L [d])
\]
为 $L$ 的**相交复形**，它在将 $U$ 缩小时不会改变。
记 $\mathrm{IC}_X = \mathrm{IC}_X (\Lambda_U)$
为常值层对应的相交复形。
:::

在复代数簇的情形，$H^{k-d} (X; \mathrm{IC}_X)$ 就是 $X$ 的[[相交上同调]]
$\mathrm{IH}^k (X)$ [@deCataldoMigliorini2009, 1.6 节]。

::: example [曲线的相交复形] {@ex:curve}
设 $X$ 是不可约的复代数曲线，$\nu \colon \tilde{X} \to X$ 是其[[正规化]]。
由于 $\nu$ 是有限态射，$\nu_* \Lambda_{\tilde{X}} [1]$ 是错致层。
对 $X$ 的奇点 $x$，$i_x^* \nu_* \Lambda_{\tilde{X}} [1]$ 集中在第 $-1$ 个位置，
而 $i_x^! \nu_* \Lambda_{\tilde{X}} [1]$ 集中在第 $1$ 个位置，
因此它满足 @prop:intermediate 的[条件 2](@item:support)，
从而 $\mathrm{IC}_X \simeq \nu_* \Lambda_{\tilde{X}} [1]$。
特别地，$X$ 的相交上同调就是 $\tilde{X}$ 的上同调。

若 $X$ 只有一个结点 $x$，则层的短正合列
$0 \to \Lambda_X \to \nu_* \Lambda_{\tilde{X}} \to i_{x *} \Lambda \to 0$
给出错致层的短正合列
\[
0 \longrightarrow i_{x *} \Lambda \longrightarrow \Lambda_X [1]
\longrightarrow \mathrm{IC}_X \longrightarrow 0 .
\]
因此 $\Lambda_X [1]$ 虽然是错致层，却不是中间延拓：它有支集为结点的子对象。
:::

### 单错致层

下面的定理说明，在错致层范畴中，
每个对象都由有限个[[单对象]]经扩张得到，而单对象就是相交复形。

::: theorem [单错致层] {@thm:simple}
设 $X$ 是紧合复代数簇的解析化或 $k$ 上的代数簇，$\Lambda$ 是域。则

1. $\mathsf{Perv} (X)$ 中的每个对象都有有限长度。

2. $\mathsf{Perv} (X)$ 中的单对象恰好是形如 $i_{Z *} \mathrm{IC}_Z (L)$ 的对象，
   其中 $Z \subset X$ 是不可约闭子簇，$i_Z \colon Z \to X$ 是其含入映射，
   $L$ 是 $Z$ 的某个光滑稠密开集上的不可约局部系。
:::

见 [@BBD1982, 4.3 节; @MaximSchurmann2022, 定理 2.45; @deCataldoMigliorini2009, 命题 2.3.6]。

在复解析情形，若 $X$ 不紧，第一条可能不成立：
例如，记 $i_n \colon \{ n \} \to \mathbb{C}$ 为含入映射，
则 $\bigoplus_{n \in \mathbb{Z}} i_{n *} \Lambda$ 是 $\mathbb{C}$ 上长度无穷的错致层。
若 $X$ 紧，或只考虑关于某个有限分层可构造的错致层，则类似的结论成立
[@MaximSchurmann2022, 注 2.46]。

### 权与分解定理

错致层最深刻的应用之一是[[分解定理]]。
它的原始证明 [@BBD1982] 先在有限域上利用 $\ell$ 进错致层的权证明相应的结论，
再把结果转移到复代数簇上。

设 $X_0$ 是有限域 $\mathbb{F}_q$ 上的代数簇，
$X$ 是它在代数闭包 $\overline{\mathbb{F}}_q$ 上的基变换，
系数 $\Lambda = \overline{\mathbb{Q}}_\ell$。
定义一节的构造对 $X_0$ 同样适用，给出 $\mathsf{D} (X_0)$ 及其上的错致 t 结构。
对 $\mathcal{F}_0 \in \mathsf{D} (X_0)$ 及 $X_0$ 的闭点 $x$，
$\mathcal{F}_0$ 的上同调层在 $x$ 处的茎上有[[几何 Frobenius 态射]]的作用。
我们只考虑满足一定条件的复形，称为**[[混复形]]**
[@deCataldoMigliorini2009, 定义 3.1.4]。
称混复形 $\mathcal{F}_0$ 的**权**不超过 $w$，
指的是对每个 $i$ 及每个闭点 $x$，
Frobenius 在 $\mathcal{H}^i (\mathcal{F}_0)_x$ 上的特征值都是[[代数数]]，
且其所有共轭的绝对值都形如 $q_x^{w'/2}$，其中 $w' \leq w + i$ 是整数，
$q_x$ 是 $x$ 的剩余域的元素个数。
若 $\mathcal{F}_0$ 的权不超过 $w$，且 $\mathbb{D}_{X_0} \mathcal{F}_0$ 的权不超过 $-w$，
则称 $\mathcal{F}_0$ 是**[[纯复形]]**，权为 $w$。
见 [@BBD1982, 5.1 节; @deCataldoMigliorini2009, 3.1.2 节]。

下面的定理包含了证明分解定理所需的三个结论：
纯性在紧合态射的推出下保持，相交复形是纯的，
而纯复形在 $\overline{\mathbb{F}}_q$ 上分解为移位的单错致层的直和。

::: theorem [纯性] {@thm:purity}
1. （Deligne）设 $f_0 \colon X_0 \to Y_0$ 是紧合态射，$\mathcal{F}_0$ 是纯复形，权为 $w$，
   则 $f_{0 *} \mathcal{F}_0$ 也是纯复形，权为 $w$。

2. （Gabber）设 $X_0$ 不可约且为 $d$ 维，
   $j \colon U_0 \to X_0$ 是光滑稠密开集的含入映射，
   $L_0$ 是 $U_0$ 上权为 $w$ 的纯局部系，
   则 $j_{!*} (L_0 [d])$ 是权为 $w + d$ 的纯错致层。
   特别地，$\mathrm{IC}_{X_0}$ 是权为 $d$ 的纯错致层。

3. 设 $\mathcal{F}_0$ 是纯复形，记 $\mathcal{F}$ 为它在 $X$ 上的拉回，则
   \[
   \mathcal{F} \simeq \bigoplus_{i \in \mathbb{Z}} {}^\mathrm{p} \mathcal{H}^i (\mathcal{F}) [-i] ,
   \]
   且每个 ${}^\mathrm{p} \mathcal{H}^i (\mathcal{F})$ 都是 @thm:simple 中单错致层的直和。
:::

见 [@deCataldoMigliorini2009, 定理 3.1.5、3.1.6、3.1.8] 及 [@BBD1982, 5.3–5.4 节]。

把这些结论用于 $f_{0 *} \mathrm{IC}_{X_0}$，
就得到 $\overline{\mathbb{F}}_q$ 上的分解定理；
再用 [@BBD1982, 第 6 章] 中从有限域过渡到复数域的方法，
就得到复代数簇上的分解定理。
它大致是说，相交复形在紧合态射下的推出是移位的单错致层的直和，没有非平凡的扩张：

::: theorem [分解定理] {@thm:decomposition}
设 $f \colon X \to Y$ 是复代数簇的紧合态射，系数 $\Lambda = \mathbb{Q}$。则
\[
f_* \mathrm{IC}_X \simeq \bigoplus_{i \in \mathbb{Z}} {}^\mathrm{p} \mathcal{H}^i (f_* \mathrm{IC}_X) [-i] ,
\]
且每个 ${}^\mathrm{p} \mathcal{H}^i (f_* \mathrm{IC}_X)$ 都是 @thm:simple 中单错致层的直和。
:::

见 [@deCataldoMigliorini2009, 定理 1.6.1]。

### Riemann–Hilbert 对应

在光滑复代数簇 $X$ 上，[[Riemann–Hilbert 对应]]说明，
[[正则完整 D-模]]的导出范畴等价于复系数可构造层的导出范畴，
而后者的错致 t 结构对应于前者的标准 t 结构 [@HTT2008, 7.2 节、8.1 节]，
从而正则完整 D-模的 Abel 范畴等价于错致层范畴。

## 推广

- **一般的错致度**。
  @prop:strata 中的条件只依赖于各片的维数。
  把其中的 $-\dim S$ 换成一般的函数 $p$，
  即要求 $\mathcal{H}^k (i_S^* \mathcal{F}) = 0$ 对 $k > p (S)$ 成立，
  且 $\mathcal{H}^k (i_S^! \mathcal{F}) = 0$ 对 $k < p (S)$ 成立，
  在适当的条件下也得到 t 结构，并有相应的中间延拓 [@BBD1982, 第 2 章]。
  这样的函数 $p$ 称为**错致度**。
  @prop:strata 的证明表明，Verdier 对偶把错致度 $p$ 的 t 结构
  变为错致度 $S \mapsto -2 \dim S - p (S)$ 的 t 结构，
  因此本文的情形 $p (S) = -\dim S$ 是唯一被 Verdier 对偶保持的错致度，
  称为**中间错致度**。

- **更一般的空间**。
  Gabber 在很一般的概形上构造了错致 t 结构 [@Gabber2004]。
  Laszlo 与 Olsson 把平展情形的错致层理论推广到 [[Artin 叠]]上 [@LaszloOlsson2009]，
  Liu 与 Zheng 又将其推广到高阶 Artin 叠和一般的错致度 [@LiuZheng2014]。
  叠上的错致层在[[几何表示论]]中很常用。

- **混 Hodge 模**。
  Saito 的[[混 Hodge 模]]可以看成带有 [[Hodge 结构]]的错致层，
  利用它可以给出分解定理的另一个证明 [@deCataldoMigliorini2009, 3.2 节]。

- **错致凝聚层**。
  [[错致凝聚层]]是[[凝聚层导出范畴]]中的类似构造：
  按照支集的维数修改通常的 t 结构，再取其心。
  我们以凝聚层的 Serre 对偶取代可构造层的 Verdier 对偶，
  并且移位大致需要取成维数的一半。

- **错致范畴**。
  Kapranov 与 Schechtman 提出了错致层的[[范畴化]]
  [@KapranovSchechtman2014]，
  大致是指给空间每点赋予一个范畴而不是向量空间，
  得到的类似错致层的对象称为**[[错致范畴]]**。
  目前错致范畴只在一些特殊情形下有定义。

## 参考文献

原始文献：

```bibliography
BBD1982:
  type: article
  author: [Alexander Beilinson, Joseph Bernstein, Pierre Deligne]
  title: Faisceaux pervers
  journaltitle: Astérisque
  volume: 100
  year: 1982
  pages: 5--171
  versions:
    - relation: edition
      edition: 2
      author: [Alexander Beilinson, Joseph Bernstein, Pierre Deligne, Ofer Gabber]
      year: 2018
      publisher: Société Mathématique de France

Gabber2004:
  type: incollection
  author: Ofer Gabber
  title: Notes on some t-structures
  booktitle: Geometric Aspects of Dwork Theory
  publisher: Walter de Gruyter
  year: 2004
  pages: 711--734

LaszloOlsson2009:
  type: article
  author: [Yves Laszlo, Martin Olsson]
  title: Perverse t-structure on Artin stacks
  journaltitle: Mathematische Zeitschrift
  volume: 261
  year: 2009
  pages: 737--748
  doi: 10.1007/s00209-008-0348-z
  arxiv: math/0606175

KapranovSchechtman2014:
  type: preprint
  author: [Mikhail Kapranov, Vadim Schechtman]
  title: Perverse Schobers
  year: 2014
  arxiv: '1411.2772'

LiuZheng2014:
  type: preprint
  author: [Yifeng Liu, Weizhe Zheng]
  title: Enhanced adic formalism and perverse t-structures for higher Artin stacks
  year: 2014
  arxiv: '1404.1128'
```

教材与综述（后两篇的编号均按 arXiv 第 2 版）：

```bibliography
HTT2008:
  type: book
  author: [Ryoshi Hotta, Kiyoshi Takeuchi, Toshiyuki Tanisaki]
  translator: Kiyoshi Takeuchi
  title: D-Modules, Perverse Sheaves, and Representation Theory
  series: Progress in Mathematics
  volume: 236
  publisher: Birkhäuser
  year: 2008
  doi: 10.1007/978-0-8176-4523-6

deCataldoMigliorini2009:
  type: article
  author: ['de Cataldo, Mark Andrea A.', Luca Migliorini]
  title: The decomposition theorem, perverse sheaves and the topology of algebraic maps
  journaltitle: Bulletin of the American Mathematical Society
  volume: 46
  number: 4
  year: 2009
  pages: 535--633
  doi: 10.1090/S0273-0979-09-01260-9
  arxiv: '0712.0349'

MaximSchurmann2022:
  type: incollection
  author: [Laurențiu Maxim, Jörg Schürmann]
  title: Constructible sheaf complexes in complex geometry and applications
  booktitle: Handbook of Geometry and Topology of Singularities III
  editor: [José Luis Cisneros-Molina, Lê Dũng Tráng, José Seade]
  publisher: Springer
  year: 2022
  pages: 679--791
  arxiv: '2105.13069'
```

```terms
错致层:
  en: perverse sheaf
  fr: faisceau pervers :m
  de: perverse Garbe :f
错致 t 结构:
  en: perverse t-structure
中间延拓:
  en: [intermediate extension, middle extension]
  fr: prolongement intermédiaire :m
相交复形:
  en: intersection complex
错致度:
  en: perversity
  fr: perversité :f
错致范畴:
  en: perverse schober
```
