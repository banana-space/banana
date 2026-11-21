---
title: 自守表示论
categories: [自守表示论]
navboxes: [自守表示论]
---

在[[代数数论]]与[[抽象调和分析]]中，
**自守表示论**是研究[[约化群]]的[[自守形式]]及其所构成的[[群表示|表示]]的数学分支，
推广了经典的[[模形式]]、[[Hecke 特征标]]等理论。
具体来说，对数域 $F$，约化群 $G/F$ 和[[加元环]] $\mathbb{A}_F$，
自守形式是 $G(\mathbb{A}_F)$ 上满足算术对称性及适当解析条件的函数，
而[[自守表示]]描述这些函数在平移作用下形成的[[不可约表示]]。

理论的研究内容大致可分为以下几类：
- 自守表示的构造、分类和[[自守谱|谱分解]]。
- [[自守 $L$ 函数]]及其算术意义。
- [[Langlands 纲领]]，其中包括自守表示之间的[[Langlands 函子性|函子关系]]
以及它们与 [[Galois 表示]]的联系。

## 研究对象

先设 $F$ 是[[数域]]，$G$ 是 $F$ 上的连通约化群，$\mathbb{A}_F$ 是 $F$ 的[[加元环]]。
基本的算术商空间是
\[
[G] = G(F) \backslash G(\mathbb{A}_F) .
\]
$G(F)$ 的左不变性表达整体的算术条件，
而 $G(\mathbb{A}_F)$ 的各个分量来自 $F$ 在不同[[位点（数论）|位点]]的[[完备化]]。
右平移
\[
(R(h)\varphi)(g) = \varphi(gh)
\]
给出了 $G(\mathbb{A}_F)$ 在 $[G]$ 上的函数上的作用。

### 自守形式与自守表示

数域上的自守形式是 $[G]$ 上满足[[光滑函数|光滑性]]、[[缓增长]]及有限性条件的复值函数。
具体地，在有限位点要求对某个[[紧开子群]]右不变；
在无穷位点，固定[[极大紧子群]] $K_\infty$，要求函数为 $K_\infty$-有限，
并且在[[泛包络代数]]的中心作用下生成有限维空间。
记相应的自守形式空间为 $\mathcal{A}(G)$。

::: definition [自守表示]
[[自守表示]]是 $\mathcal{A}(G)$ 的不可约[[容许表示|容许]][[子商表示|子商]]。
这里的子商在 $(\mathfrak{g}_\infty,K_\infty)\times G(\mathbb{A}_{F,\mathrm{f}})$-模的范畴中取，
其中 $\mathfrak{g}_\infty$ 是 $G(F \otimes_{\mathbb{Q}} \mathbb{R})$ 的复化 Lie 代数
[@GetzHahn2024, 第 4、6 章]。
:::

这里 $(\mathfrak{g}_\infty,K_\infty)\times G(\mathbb{A}_{F,\mathrm{f}})$-模类似于
$G(\mathbb{A}_{F})$-表示，只是无穷点处从[[实约化群表示]]改成了其
[[$(\mathfrak{g},K)$-模]]。

最基本的例子包括：

::: example [乘法群]
当 $G = \mathbb{G}_{\mathrm{m}}$ 时，$[G]$ 是[[理元类群]]
$F^\times \backslash \mathbb{A}_F^\times$。
它的连续特征标称为 [[Hecke 特征标]]，给出一维自守表示；
相应的 $L$ 函数由 [[Tate 论题]]研究。
:::

::: example [模形式]
有理数域上权至少为 $2$ 的[[尖点形式|尖点]] Hecke 特征[[新形式]]，
经[[加元化]]可生成 $\mathrm{GL}_2(\mathbb{A}_{\mathbb{Q}})$ 的尖点自守表示。
它的无穷位点分量记录权，有限位点分量记录相应的 Hecke 特征值及[[水平结构|水平]]信息。
[[Maaß 形式|Maaß 尖点形式]]也有类似的表示论解释
[@Bump1997, 第 II、III 部分]。
:::

### 平方可积谱与尖点谱

上述定义的自守表示未必是酉的，也可只考虑[[酉表示]]，
即来自于 [[$L^p$ 空间|$L^2$ 空间]]的表示。
设 $Z$ 是 $G$ 的[[中心]]，固定 $Z(F)\backslash Z(\mathbb{A}_F)$ 的酉[[中心特征标]] $\omega$。
记 $L^2_\omega([G])$ 为满足
\[
\varphi(zg) = \omega(z)\varphi(g),
\qquad
\int_{Z(\mathbb{A}_F)G(F)\backslash G(\mathbb{A}_F)}
|\varphi(g)|^2\,dg < \infty
\]
的可测函数按几乎处处相等取商所组成的 [[Hilbert 空间]]。
右平移在这里给出酉表示，其分解称为相应中心特征标下的[[自守谱]]。
一般自守表示也包括平方可积空间之外的自守形式所给出的子商。

::: definition [尖点条件]
自守形式 $\varphi$ 称为[[尖点自守形式]]，若对每个真 $F$-[[抛物子群]] $P=MN$，均有
\[
\varphi_P(g) \coloneqq
\int_{N(F)\backslash N(\mathbb{A}_F)} \varphi(ng)\,dn = 0 ,
\]
其中 $N$ 是 $P$ 的[[幺幂根]]，$M$ 是 [[Levi 子群]]。
积分 $\varphi_P$ 称为沿 $P$ 的[[常数项（自守形式）|常数项]]。
:::

这一条件要求函数在各个有理抛物方向上没有常数项。
固定酉中心特征标后，尖点自守形式的闭包构成
$L^2_{\mathrm{cusp},\omega}([G])$，其中的不可约成分称为[[尖点自守表示]]。
尖点谱以外还要考虑 [[Eisenstein 级数]]及其留数所给出的谱。

## 研究领域与结论

### 局部表示与局部对应

<see>[[$p$ 进约化群表示论]]、[[实约化群表示论]]</see>

局部理论研究 $G(F_v)$ 的表示，以及这些局部对象与整体自守表示的关系。

::: theorem [Flath 张量积分解]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群。
每个不可约自守表示都具有分解
\[
\pi \simeq \pi_\infty \otimes \mathop{\bigotimes\nolimits'}_{v\nmid\infty} \pi_v ,
\]
其中 $\pi_\infty$ 是无穷位点的不可约容许
[[$(\mathfrak{g}, K)$-模]]，
$\pi_v$ 是 $G(F_v)$ 的不可约光滑容许表示。
几乎所有有限位点的 $\pi_v$ 均为[[非分歧表示]]；
[[限制张量积]]使用这些位点的球向量定义。
局部分量的同构类由 $\pi$ 唯一决定 [@Flath1979]。
:::

因此自守表示局部上就是 [[$p$ 进约化群]]与[[实约化群]]的表示论，
更进一步的讨论见相应条目。

反过来，也可以考虑如何从局部表示构造整体自守表示。
若只预先指定有限多个位点，则有以下[[自守表示的整体化|整体化]]结果。

::: theorem [超尖点表示的整体化]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，$Z=Z(G)^\circ$，
$\omega$ 是 $Z(F)\backslash Z(\mathbb{A}_F)$ 的酉特征标。
设 $S$ 是非空有限个有限点组成的集合；
对每个 $v\in S$，给定 $G(F_v)$ 的不可约[[超尖点表示]] $\pi_v$，
其在 $Z(F_v)$ 上的作用由 $\omega_v$ 给出。
则存在尖点自守表示 $\Pi$，使得 $\Pi_v\simeq\pi_v$ 对所有 $v\in S$ 成立，
且 $Z(\mathbb{A}_F)$ 在 $\Pi$ 上通过 $\omega$ 作用
[@PrasadSchulzePillot2008, 定理 4.1]。
:::

这里其余点的分量由整体构造确定。
若预先指定所有点的分量，则还需要整体相容性；几乎处处非分歧本身并不充分。
对一般线性群，[[自守逆定理]]用一族扭曲 $L$ 函数的解析性质给出自守性的充分条件
[@Cogdell2007, 第 5 节]；
对已完成谱分类的典型群，则可用整体 Arthur 参数和重数公式判定它们是否出现在离散自守谱中
[@Arthur2013; @Mok2015]。

### 自守谱与迹公式

整体谱理论研究哪些局部表示能够组合成自守表示，以及它们出现的[[重数]]。
[[Eisenstein 级数]]从 Levi 子群上的自守数据构造 $G$ 上的函数，
使各个约化群的谱问题相互联系。

::: theorem [Langlands 谱分解]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，$\omega$ 是酉中心特征标。
有正交分解
\[
L^2_\omega([G])
= L^2_{\mathrm{disc},\omega}([G])
\oplus L^2_{\mathrm{cont},\omega}([G]) .
\]
离散部分是不可约酉表示的 Hilbert 直和，各表示的重数有限；
尖点部分包含于离散部分。
连续部分由 Levi 子群的离散自守数据所构造的 Eisenstein 级数给出，
离散部分中与尖点谱正交的[[剩余自守谱|剩余谱]]由 Eisenstein 级数的留数构造
[@Langlands1976; @Arthur2005, 第 7 节]。
:::

对离散谱，还要确定哪些表示出现，以及出现的重数。

::: theorem [重数一与强重数一]
设 $F$ 是数域，$\pi$、$\pi'$ 是 $\mathrm{GL}_n(\mathbb{A}_F)$ 的不可约尖点自守表示。
若几乎所有位点 $v$ 均有 $\pi_v\simeq\pi'_v$，则 $\pi\simeq\pi'$。
此外，每个不可约尖点自守表示在尖点谱中出现的重数为 $1$
[@Cogdell2007, 第 1.2–1.3 节]。
:::

前一句是[[强重数一定理]]，后一句通常称为[[重数一定理]]。
一般群的谱分类还涉及包及其重数。对典型群，有以下分类结果。

::: theorem [Arthur–Mok 离散谱分类]
设 $F$ 是数域，$G$ 是 $F$ 上的分裂[[辛群]] $\mathrm{Sp}_{2n}$、
奇数维的分裂[[特殊正交群]] $\mathrm{SO}_{2n+1}$，
或相对于二次数域扩张 $E/F$ 的[[拟分裂群|拟分裂]][[酉群]]。
$G$ 的离散自守谱按整体 [[Arthur 参数]]组织为 [[Arthur 包]]，
包中各表示的出现及重数由相应的[[Arthur 重数公式|重数公式]]决定
[@Arthur2013; @Mok2015]。
:::

此外，[[Arthur–Selberg 迹公式]]把同一分布的谱展开与几何展开联系起来：
谱侧涉及自守表示及[[交织算子]]，几何侧涉及共轭类及[[轨道积分]]。
也可用于比较不同群的迹公式，是研究[[内窥]]、谱分类和自守提升
[@Arthur2005]。

### $L$ 函数与函子性

从局部分量的参数可以构造 [[Euler 乘积]]。
解析理论研究所得[[自守 $L$ 函数]]的[[解析延拓]]、[[函数方程]]、零点、特殊值及增长，
并通过 [[Rankin–Selberg 方法]]、[[Langlands–Shahidi 方法]]及各种积分表示研究它们。

::: theorem [Godement–Jacquet：标准 $L$ 函数]
设 $F$ 是数域，$n\geq2$，
$\pi$ 是 $\mathrm{GL}_n(\mathbb{A}_F)$ 的不可约酉尖点自守表示。
其包含无穷点因子的 $L$ 函数
\[
\Lambda(s,\pi)=\prod_v L(s,\pi_v)
\]
可延拓为[[整函数]]，并满足函数方程
\[
\Lambda(s,\pi)=\varepsilon(s,\pi)\Lambda(1-s,\pi^\vee),
\]
其中 $\pi^\vee$ 是[[对偶表示]]，
$\varepsilon(s,\pi)$ 是相应的[[$\varepsilon$ 因子|整体 $\varepsilon$ 因子]]
[@GodementJacquet1972; @Cogdell2007, 第 4 节]。
:::

这里对 $n$ 和尖点性的限制不可省略：
例如 $\mathrm{GL}_1$ 的平凡表示给出有极点的 [[Dedekind $\zeta$ 函数]]。
一般约化群的任意自守 $L$ 函数，也尚没有如此统一的已证解析理论。

[[Langlands 函子性]]预言，$L$ 群的同态应当产生不同群之间的自守提升，
并使相应的局部参数和 $L$ 函数相容。
[[基变换（自守形式）|基变换]]、[[自守诱导]]和[[对称幂提升]]是其中的重要问题
[@Cogdell2007, 第 2、6 节]。以下定理是函子性的一例。

::: theorem [Arthur–Clozel：循环基变换]
设 $E/F$ 是素数次的循环数域扩张，
$\pi$ 是 $\mathrm{GL}_n(\mathbb{A}_F)$ 的不可约尖点自守表示。
存在 $\mathrm{GL}_n(\mathbb{A}_E)$ 的自守表示 $\operatorname{BC}_{E/F}(\pi)$，
其在几乎所有位点的局部参数由 $\pi$ 的局部参数限制到 $E$ 得到。
这个提升不一定保持尖点性 [@ArthurClozel1989]。
:::

### 整体 Langlands 纲领

[[整体 Langlands 纲领]]研究整体域上自守表示的参数化，
并要求整体参数与各个位点的局部 Langlands 对应相容。
对一般约化群，还要描述参数对应的[[自守包]]及其成员在自守谱中的重数。

在数域上，满足适当代数性条件的自守表示应当给出取值于 $L$ 群的 $\ell$ 进 Galois 参数；
这一算术版本可由 [[Buzzard–Gee 猜想]]表述。
一般的整体谱则需要更广的整体 Langlands 参数框架
[@BuzzardGee2014]。
函数域情形已有一般分裂约化群的参数化结果。

::: theorem [V. Lafforgue：整体参数分解]
设 $F$ 是有限域上光滑射影几何连通曲线的函数域，
$G$ 是 $F$ 上的分裂连通约化群，$\ell\ne\operatorname{char}F$。
固定有限[[水平结构|水平]] $N$ 及处理中心非紧方向的适当[[局部紧群的格|格]] $\Xi$ 后，
相应的 $\overline{\mathbb{Q}}_\ell$ 系数尖点自守形式空间有典范的 Hecke 稳定分解
\[
\mathcal{A}_{\mathrm{cusp}}(G,N,\Xi)
=\bigoplus_\sigma\mathcal{H}_\sigma .
\]
其非零部分由连续、半单且在 $N$ 之外非分歧的整体参数
\[
\sigma:\operatorname{Gal}(\overline{F}/F)\longrightarrow
G^\vee(\overline{\mathbb{Q}}_\ell)
\]
的共轭类标记。
参数定义于某个有限系数扩张，并与非分歧位点的 Hecke 数据相容
[@VincentLafforgue2018, 主定理]。
:::

### 解析理论

此分支把[[谱理论]]的思想用于自守表示中，
研究 Hecke 特征值、自守形式及 $L$ 函数的大小，
以及自守表示随水平、权或谱参数变化时的分布。
其中的重要问题包括[[谱隙]]、[[Weyl 律|谱渐近]]、[[$L$ 函数的次凸性|次凸界]]与[[等分布]]。
这些问题也把自守形式与[[算术动力系统]]及[[遍历论]]联系起来
[@Sarnak2005; @MichelVenkatesh2007]。

例如，[[广义 Ramanujan 猜想]]
陈述了局部分量的缓增性，也就给出了 Hecke 特征值的界。

::: conjecture [广义 Ramanujan 猜想]
设 $F$ 是数域，$\pi$ 是 $\mathrm{GL}_n(\mathbb{A}_F)$ 的不可约酉尖点自守表示。
对每个点 $v$，局部分量 $\pi_v$ 都是缓增表示 [@Sarnak2005, 第 1 节]。
:::

次凸性与等分布问题则进一步研究 $L$ 函数、自守周期及算术轨道的定量行为。

### $\theta$ 对应与 $\theta$ 提升

[[$\theta$ 对应]]利用[[Weil 表示]]联系一对群的表示。
这些群构成[[约化对偶对]]，例如[[辛群]]与[[正交群]]，或两个[[酉群]]；
在需要时对辛群使用相应的二重覆盖[[元辛群]]。

固定 Weil 表示后，一个局部表示的大 $\theta$ 提升来自其在 Weil 表示中的[[等型商]]；
大提升的最大[[半单表示|半单]]商称为小 $\theta$ 提升。

::: theorem [Howe 对偶]
设 $K$ 是特征不为 $2$ 的非 Archimedes 局部域，
$(G,H)$ 是辛–正交或酉群的约化对偶对（在需要时使用相应的二重覆盖）。
对不可约光滑复表示 $\pi$，其小 $\theta$ 提升 $\theta(\pi)$ 若非零，则不可约。
若 $\theta(\pi)\simeq\theta(\pi')\ne0$，则 $\pi\simeq\pi'$
[@GanTakeda2016, 定理 1.2]。
:::

整体理论利用 $\theta$ 核的积分，把一侧的自守形式变成另一侧的自守形式。
这给出构造自守表示的具体方法，也与函子性及 $L$ 函数特殊值相联系
[@Gan2022]。

对数域 $F$ 上的对偶对及 $G$ 的尖点自守形式 $f$，
记 $\theta_\phi$ 为 [[Schwartz–Bruhat 函数]] $\phi$ 给出的 $\theta$ 核，
\[
\theta_\phi(f)(h)
=\int_{G(F)\backslash G(\mathbb{A}_F)}
\theta_\phi(g,h)\overline{f(g)}\,dg .
\]
在自守表示中遍历 $f$ 与 $\phi$，
所张成的空间是 $H$ 上的自守表示，即整体 $\theta$ 提升。
它是否非零、是否仍为尖点，是这一构造的基本问题。
以下给出一例。

::: theorem [Rallis 塔性质：首次提升的尖点性]
设 $E/F$ 是数域的二次扩张，$V$ 是带非退化 [[Hermite 型]]的有限维 $E$-向量空间，型相对于 $E/F$ 定义。
固定斜 Hermite 空间的 [[Witt 塔]]
$W_r=W_0\oplus\mathbb{H}^{\oplus r}$，
其中 $W_0$ [[非迷向型|非迷向]]，$\mathbb{H}$ 是[[双曲斜 Hermite 平面|双曲平面]]，
并固定 $\theta$ 对应所需的加性特征标及分裂数据。
对 $U(V)$ 的不可约尖点自守表示 $\pi$，
存在向某个 $U(W_r)$ 的非零整体 $\theta$ 提升；
首次非零的提升仍为尖点自守表示 [@Gan2022, 第 3.9 节]。
:::

### 相对理论与自守周期

[[相对 Langlands 纲领|相对理论]]研究自守形式沿子群商空间积分所得的[[自守周期]]，
以及局部表示上的子群不变泛函。
它希望把周期的非零性及大小与 $L$ 函数特殊值联系起来，
典型问题包括 [[Gan–Gross–Prasad 猜想]]和 [[Ichino–Ikeda 公式]]。
[[相对迹公式]]及[[相对 Langlands 对偶]]为这些问题提供统一框架
[@BenZviSakellaridisVenkatesh2024]。以下给出一例。

::: theorem [酉群周期与中心 $L$ 值]
设 $E/F$ 是数域的二次扩张，$W$ 是 $n$ 维非退化 Hermite 空间，
$V=W\oplus\langle1\rangle$。
令 $G=U(W)\times U(V)$，$H=U(W)$ 对角嵌入 $G$。
设 $\pi=\pi_n\boxtimes\pi_{n+1}$ 是 $G(\mathbb{A}_F)$ 的处处缓增不可约尖点自守表示，
并设各个位点的局部 $H$-周期均非零。
则整体周期
\[
P_H(f)=\int_{H(F)\backslash H(\mathbb{A}_F)}f(h,h)\,dh
\]
在 $\pi$ 上非零，当且仅当
\[
L\!\left(\tfrac12,
\operatorname{BC}(\pi_n)\times\operatorname{BC}(\pi_{n+1})\right)\ne0 ,
\]
其中 $\operatorname{BC}$ 表示向 $\mathrm{GL}_n(\mathbb{A}_E)$ 与
$\mathrm{GL}_{n+1}(\mathbb{A}_E)$ 的基变换
[@BCZ2022, 定理 1.1.6.1]。
:::

这是酉群 Ichino–Ikeda 公式的非零性推论。
其精细形式还描述周期的平方与规范化局部周期的乘积之间的关系。
这里固定了群和表示，因而必须保留局部周期的条件。

### 几何方法

自守表示也出现在[[局部对称空间]]及 [[Shimura 簇]]的[[上同调]]中，
此时上同调空间也有 Hecke 作用和 [[Galois 表示]]的结构。
用这种思路，可以证明一部分 Langlands 对应。

::: definition [尖点上同调]
设 $G/\mathbb{Q}$ 是连通半单群，$K_\infty\subset G(\mathbb{R})$ 是极大紧子群，
$K_{\mathrm{f}}\subset G(\mathbb{A}_{\mathbb{Q},\mathrm{f}})$ 是充分小的紧开子群。
记
\[
S_K=G(\mathbb{Q})\backslash G(\mathbb{A}_{\mathbb{Q}})/(K_\infty K_{\mathrm{f}}) .
\]
它的每个连通分支形如 $\Gamma\backslash X$，
其中 $X=G(\mathbb{R})/K_\infty$，$\Gamma$ 是[[算术子群]]。
令 $V$ 是 $G$ 的有限维复代数表示；
将它限制到各分支的 $\Gamma$，得到 $S_K$ 上的[[局部系]] $\mathcal{V}$。
**尖点上同调**定义为
\[
H^q_{\mathrm{cusp}}(S_K,\mathcal{V})
\coloneqq H^q\!\left(\mathfrak{g}_\infty,K_\infty;
\mathcal{A}_{\mathrm{cusp}}(G)^{K_{\mathrm{f}}}\otimes V\right) ,
\]
其中 $\mathcal{A}_{\mathrm{cusp}}(G)$ 是尖点自守形式空间，
右侧为[[相对 Lie 代数上同调]]
[@GetzHahn2024, 第 15 章]。
:::

这相当于用尖点自守形式组成微分形式的复形，再取其上同调。

::: theorem [Matsushima 公式与尖点上同调]
在上述设定下，尖点上同调自然嵌入普通上同调
\[
H^q_{\mathrm{cusp}}(S_K,\mathcal{V})\hookrightarrow H^q(S_K,\mathcal{V}) ,
\]
并有 Hecke 等变分解
\[
H^q_{\mathrm{cusp}}(S_K,\mathcal{V})
\simeq\bigoplus_{\pi\ \mathrm{cusp}}
\left((\pi_{\mathrm{f}})^{K_{\mathrm{f}}}\otimes
H^q(\mathfrak{g}_\infty,K_\infty;\pi_\infty\otimes V)\right)^{\oplus m(\pi)} ,
\]
其中 $m(\pi)$ 是尖点谱重数。
若 $G$ 在 $\mathbb{Q}$ 上[[非迷向代数群|非迷向]]，则 $S_K$ 紧致，
上述嵌入是同构，即尖点上同调等于整个上同调
[@Matsushima1967; @GetzHahn2024, 第 15 章]。
:::

[[模形式]]理论中，[[Eichler–Shimura 同构]]可以看作其特例，
给出了权 $2$ 尖点模形式的上同调实现。

::: theorem [Eichler–Shimura 同构：模曲线情形]
设 $N\geq1$，$X_0(N)$ 是紧化[[模曲线]]。
有与 Hecke 作用相容的同构
\[
H^1(X_0(N)(\mathbb{C}),\mathbb{C})
\simeq S_2(\Gamma_0(N))\oplus\overline{S_2(\Gamma_0(N))} ,
\]
其中 $S_2(\Gamma_0(N))$ 是权 $2$ 的尖点模形式空间
[@Wiese2005, 定理 6.4]。
:::

Shimura 簇的上同调上也可以赋予 Galois 作用：
对 Shimura 簇 $S_K$，
存在数域 $E$ 使其能典范定义在 $E$ 上，
因此，对每个素数 $\ell$，其[[平展上同调]]
\[
H^q_{\mathrm{\acute et}}(S_{\overline E},\mathbb{Q}_\ell)
\]
自然带有[[绝对 Galois 群]] $\operatorname{Gal}(\overline E/E)$ 的连续作用，
并与 Hecke 作用交换
[@Milne2005; @GetzHahn2024, 第 15 章]。

## 参考文献

入门、自守形式与局部表示：

Getz–Hahn 的链接为作者的 2022 年公开稿；正文按正式版的章引用。

```bibliography
GetzHahn2024:
  type: book
  author: [Jayce R. Getz, Heekyoung Hahn]
  title: 'An Introduction to Automorphic Representations: With a view toward trace formulae'
  series: Graduate Texts in Mathematics
  volume: 300
  publisher: Springer
  year: 2024
  doi: '10.1007/978-3-031-41153-3'
  url: 'https://sites.duke.edu/jgetz/files/2022/04/Graduate_Text.pdf'

Bump1997:
  type: book
  author: Daniel Bump
  title: Automorphic Forms and Representations
  series: Cambridge Studies in Advanced Mathematics
  volume: 55
  publisher: Cambridge University Press
  year: 1997
  doi: '10.1017/CBO9780511609572'

Flath1979:
  type: incollection
  author: Daniel Flath
  title: Decomposition of representations into tensor products
  booktitle: Automorphic Forms, Representations and L-Functions
  series: Proceedings of Symposia in Pure Mathematics
  volume: '33.1'
  publisher: American Mathematical Society
  year: 1979
  pages: 179--183
  doi: '10.1090/pspum/033.1/546596'

PrasadSchulzePillot2008:
  type: article
  author: [Dipendra Prasad, Rainer Schulze-Pillot]
  title: Generalised form of a conjecture of Jacquet and a local consequence
  journaltitle: Journal für die reine und angewandte Mathematik
  volume: 616
  year: 2008
  pages: 219--236
  doi: '10.1515/CRELLE.2008.023'
  url: 'https://www.math.iitb.ac.in/~dprasad/crelle.pdf'
```

Eisenstein 级数、谱分解与迹公式：

```bibliography
Langlands1976:
  type: book
  author: Robert P. Langlands
  title: On the Functional Equations Satisfied by Eisenstein Series
  series: Lecture Notes in Mathematics
  volume: 544
  publisher: Springer
  year: 1976
  doi: '10.1007/BFb0079929'
  url: 'https://www.sunsite.ubc.ca/DigitalMathArchive/Langlands/pdf/Eisenstein-ps.pdf'

Arthur2005:
  type: incollection
  author: James Arthur
  title: An introduction to the trace formula
  booktitle: Harmonic Analysis, the Trace Formula, and Shimura Varieties
  series: Clay Mathematics Proceedings
  volume: 4
  publisher: American Mathematical Society
  year: 2005
  pages: 1--263
  url: 'https://www.claymath.org/library/cw/arthur/pdf/61.pdf'
```

$L$ 函数、函子性与典型群分类：

```bibliography
Cogdell2007:
  type: incollection
  author: James W. Cogdell
  title: '$L$-functions and converse theorems for $\mathrm{GL}_n$'
  booktitle: Automorphic Forms and Applications
  series: IAS/Park City Mathematics Series
  volume: 12
  publisher: American Mathematical Society
  year: 2007
  pages: 97--177
  url: 'https://people.math.osu.edu/cogdell.1/pcmi-www.pdf'

GodementJacquet1972:
  type: book
  author: [Roger Godement, Hervé Jacquet]
  title: Zeta Functions of Simple Algebras
  series: Lecture Notes in Mathematics
  volume: 260
  publisher: Springer
  year: 1972
  doi: '10.1007/BFb0070263'

ArthurClozel1989:
  type: book
  author: [James Arthur, Laurent Clozel]
  title: Simple Algebras, Base Change, and the Advanced Theory of the Trace Formula
  series: Annals of Mathematics Studies
  volume: 120
  publisher: Princeton University Press
  year: 1989
  url: 'https://www.math.toronto.edu/arthur/pdf/30.pdf'

Arthur2013:
  type: book
  author: James Arthur
  title: 'The Endoscopic Classification of Representations: Orthogonal and Symplectic Groups'
  series: American Mathematical Society Colloquium Publications
  volume: 61
  publisher: American Mathematical Society
  year: 2013
  doi: '10.1090/coll/061'

Mok2015:
  type: book
  author: Chung Pang Mok
  title: Endoscopic Classification of Representations of Quasi-Split Unitary Groups
  series: Memoirs of the American Mathematical Society
  volume: 235
  number: 1108
  publisher: American Mathematical Society
  year: 2015
  doi: '10.1090/memo/1108'
  arxiv: '1206.0882'
```

$\theta$ 对应与整体提升：

```bibliography
GanTakeda2016:
  type: article
  author: [Wee Teck Gan, Shuichiro Takeda]
  title: A proof of the Howe duality conjecture
  journaltitle: Journal of the American Mathematical Society
  volume: 29
  number: 2
  year: 2016
  pages: 473--493
  doi: '10.1090/jams/839'
  arxiv: '1407.1995'

Gan2022:
  type: preprint
  author: Wee Teck Gan
  title: Automorphic Forms and the Theta Correspondence
  year: 2022
  url: 'https://swc-math.github.io/aws/2022/2022GanNotes.pdf'
```

上同调与几何实现：

```bibliography
Matsushima1967:
  type: article
  author: Yozô Matsushima
  title: A formula for the Betti numbers of compact locally symmetric Riemannian manifolds
  journaltitle: Journal of Differential Geometry
  volume: 1
  year: 1967
  pages: 99--109
  doi: '10.4310/jdg/1214427883'

Milne2005:
  type: incollection
  author: J. S. Milne
  title: Introduction to Shimura varieties
  booktitle: Harmonic Analysis, the Trace Formula, and Shimura Varieties
  series: Clay Mathematics Proceedings
  volume: 4
  publisher: American Mathematical Society
  year: 2005
  pages: 265--378
  url: 'https://www.jmilne.org/math/xnotes/svi.pdf'

Wiese2005:
  type: preprint
  author: Gabor Wiese
  title: On modular symbols and the cohomology of Hecke triangle surfaces
  year: 2005
  url: 'https://epub.uni-regensburg.de/13912/1/MP79.pdf'
```

$p$ 进、模 $p$ 与相对情形：

```bibliography
EGH2025:
  type: incollection
  author: [Matthew Emerton, Toby Gee, Eugen Hellmann]
  title: An introduction to the categorical $p$-adic Langlands program
  booktitle: 'The Langlands Program II: Geometrization of the Langlands Correspondence'
  series: Proceedings of Symposia in Pure Mathematics
  volume: '112.2'
  publisher: American Mathematical Society
  year: 2025
  pages: 167--419
  doi: '10.1090/pspum/112.2/02066'
  arxiv: '2210.01404'

BCZ2022:
  type: article
  author: [Raphaël Beuzart-Plessis, Pierre-Henri Chaudouard, Michał Zydor]
  title: 'The global Gan–Gross–Prasad conjecture for unitary groups: the endoscopic case'
  journaltitle: Publications mathématiques de l'IHÉS
  volume: 135
  year: 2022
  pages: 183--336
  doi: '10.1007/s10240-021-00129-1'
  arxiv: '2007.05601'

BenZviSakellaridisVenkatesh2024:
  type: preprint
  author: [David Ben-Zvi, Yiannis Sakellaridis, Akshay Venkatesh]
  title: Relative Langlands duality
  year: 2024
  arxiv: '2409.04677'
```

整体 Langlands 参数化：

```bibliography
BuzzardGee2014:
  type: incollection
  author: [Kevin Buzzard, Toby Gee]
  title: The conjectural connections between automorphic representations and Galois representations
  booktitle: Automorphic Forms and Galois Representations
  series: London Mathematical Society Lecture Note Series
  volume: 414
  publisher: Cambridge University Press
  year: 2014
  pages: 135--187
  arxiv: '1009.0785'
  note: Volume 1

VincentLafforgue2018:
  type: article
  author: Vincent Lafforgue
  title: Chtoucas pour les groupes réductifs et paramétrisation de Langlands globale
  journaltitle: Journal of the American Mathematical Society
  volume: 31
  number: 3
  year: 2018
  pages: 719--891
  doi: '10.1090/jams/897'
  arxiv: '1209.5352'
```

解析估计与等分布：

```bibliography
Sarnak2005:
  type: incollection
  author: Peter Sarnak
  title: Notes on the generalized Ramanujan conjectures
  booktitle: Harmonic Analysis, the Trace Formula, and Shimura Varieties
  series: Clay Mathematics Proceedings
  volume: 4
  publisher: American Mathematical Society
  year: 2005
  pages: 659--685
  url: 'https://publications.ias.edu/sites/default/files/FieldNotesCurrent.pdf'

MichelVenkatesh2007:
  type: incollection
  author: [Philippe Michel, Akshay Venkatesh]
  title: 'Equidistribution, $L$-functions and ergodic theory: on some problems of Yu. Linnik'
  booktitle: International Congress of Mathematicians. Vol. II
  publisher: European Mathematical Society
  year: 2007
  pages: 421--457
  doi: '10.4171/022-2/19'
  note: Madrid, 2006
```

```terms
自守表示论:
  en: automorphic representation theory
自守表示:
  en: automorphic representation
自守谱:
  en: automorphic spectrum
尖点自守表示:
  en: cuspidal automorphic representation
```
