---
title: Langlands 纲领
aliases: [Langlands 对应, 算术 Langlands 纲领, 算术 Langlands 对应]
categories: [Galois 表示论, 自守表示论]
navboxes: [Langlands 纲领, Galois 表示论, 自守表示论]
---

在[[代数数论]]与[[表示论]]中，**Langlands 纲领**是联系 [[Galois 表示]]与[[自守表示]]的一系列猜想与定理，
其核心的猜想称为 **Langlands 对应**。
它可以看作[[类域论]]向非 Abel 情形的推广。

大致来说，类域论说明[[数域]] $F$ 的 [[Abel 扩张]]由 $F$ 自身的算术描述：
$F$ 的[[绝对 Galois 群]] $\Gamma_F$ 的一维表示
与 $F$ 的[[理元类群]]的特征标一一对应。
Langlands 纲领希望对高维表示也有类似的描述：
$\Gamma_F$ 的 $n$ 维表示应当对应于 $\mathrm{GL}_n$ 的自守表示。
更一般地，对[[约化群]] $G$，
取值于其 [[Langlands 对偶群]] $G^\vee$ 的 Galois 表示应当对应于 $G$ 的自守表示：
\[
\{ G (\mathbb{A}_F) \text{ 的自守表示} \}
\longleftrightarrow
\{ \text{同态 } \Gamma_F \to G^\vee \} ,
\]
其中 $\mathbb{A}_F$ 是 $F$ 的[[加元环]]。
左边称为**自守侧**，右边称为**谱侧**或 **Galois 侧**，
右边的同态也称为 **$L$ 参数**。

这一对应的要点在于两侧的算术信息一致：
在几乎所有素点 $v$ 处，Galois 表示的 [[Frobenius 元]]的特征值，
应当等于自守表示的 [[Hecke 算子]]的特征值，
因此两侧的 [[$L$ 函数]]相同。
例如，[[模性定理]]说明，有理数域上的[[椭圆曲线]] $E$ 对应于某个[[模形式]] $f$，
使得 $E$ 模素数 $r$ 约化后的点数由 $f$ 的第 $r$ 个 Fourier 系数给出。

这一纲领既有[[整体域]]上的版本，也有[[局部域]]上的版本；
通过将函数换成[[层]]，还得到[[几何 Langlands 纲领]]及各种[[范畴化]]的对应。

## 想法

### 从类域论到高维表示

类域论用域的乘法群描述其 [[Abel 扩张]]。
设 $F$ 是[[数域]]，$\mathbb{A}_F$ 是其[[加元环]]，
$\Gamma_F = \operatorname{Gal} (\overline{F} / F)$ 是其[[绝对 Galois 群]]。
用表示的语言，整体类域论可以表述如下：

::: theorem [整体类域论]
[[互反映射]]给出以下两类对象的一一对应：

- $\Gamma_F$ 的连续有限阶一维复表示；

- [[理元类群]] $F^\times \backslash \mathbb{A}_F^\times$ 的连续有限阶一维复表示。

对应在[[分歧|非分歧]]素点处将 Frobenius 元的值与局部[[离散赋值环|素元]]的值相匹配。
:::

这里两边都是一维表示，而一维表示只能看到 Galois 群的[[交换化]]。
为了研究非 Abel 扩张，可以改看高维表示
\[
\rho \colon \Gamma_F \longrightarrow \mathrm{GL}_n (\mathbb{C}) ,
\]
即把乘法群 $\mathrm{GL}_1$ 换为[[一般线性群]] $\mathrm{GL}_n$，
并进一步推广到一般连通约化群 $G$。
自守侧考虑商空间
\[
G (F) \backslash G (\mathbb{A}_F)
\]
上满足光滑性、增长性等条件的函数，
以及右平移在这些函数空间中给出的[[不可约表示]]，即自守表示。
当 $G = \mathbb{G}_{\mathrm{m}}$ 时，这一构造回到上面的理元类群特征标
[@Milne2020; @Frenkel2007]。

### 算术信息的对应

对非分歧素点 $v$，Galois 表示给出矩阵 $\rho (\operatorname{Frob}_v)$ 的共轭类。
另一方面，[[自守形式]]上的非分歧 Hecke 算子彼此交换，
它们在共同特征向量上的特征值也可以组织成半单矩阵的共轭类。
Langlands 对应要求这两种局部数据一致。
因此，它所建立的联系不仅是两类对象之间的抽象配对，还应说明如何从一侧读出另一侧的算术信息。
例如，[[模性定理]]建立了[[椭圆曲线]]和[[模形式]]的算术信息的对应。

::: theorem [模性定理]
设 $E$ 是 $\mathbb{Q}$ 上[[导子（椭圆曲线）|导子]]为 $N$ 的椭圆曲线。
存在权为 $2$、水平为 $N$ 的正规化[[尖点形式|尖点]] Hecke 特征[[新形式]]
\[
f (\tau) = \sum_{m \geq 1} a_m \mathrm{e}^{2 \pi \mathrm{i} m \tau} ,
\]
使得对每个[[良约化]]素数 $r \nmid N$，有
\[
a_r = r + 1 - \# E (\mathbb{F}_r) .
\]
:::

左边来自复解析函数的 [[Fourier 级数|Fourier 系数]]，右边来自有限域上的方程解的数目。
二者之所以能够相等，是因为 $E$ 的二维 $\ell$ 进 Galois 表示与 $f$ 的自守表示相对应。
这一对应同时给出 $L (E, s) = L (f, s)$，
从而把椭圆曲线的 $L$ 函数纳入模形式的解析理论。
完整模性定理由 Breuil、Conrad、Diamond 与 Taylor 在 Wiles、Taylor–Wiles 等工作的基础上证明
[@BCDT2001]。

### Satake 同构与对偶群

一般约化群的 Galois 参数取值于对偶群，
这一点可以从非分歧表示的 Hecke 算子看出。
下面的定理是 [[Satake 同构]]的推论，
它大致是说，非分歧表示由对偶群中的一个共轭类决定：

::: theorem [Satake 参数]
设 $K$ 是非 Archimedes 局部域，$G$ 是 $K$ 上的[[分裂约化群|分裂连通约化群]]，
$U \subset G (K)$ 是[[超特殊紧开子群]]。
$G (K)$ 的具有非零 $U$-不变向量的不可约复[[光滑表示]]，
由 $G^\vee (\mathbb{C})$ 中的半单共轭类参数化。
:::

这个共轭类就是表示的 Satake 参数，它记录[[球 Hecke 代数]]的特征值。
$G^\vee$ 的[[根数据|根与余根]]来自 $G$ 的余根与根：
例如 $\mathrm{GL}_n$ 的对偶仍是 $\mathrm{GL}_n$，
而 $\mathrm{Sp}_{2n}$ 的对偶是 $\mathrm{SO}_{2n+1}$。
若 $G$ 不分裂，还要记录 Galois 群对对偶群的作用，
并使用 **[[Langlands L 群|$L$ 群]]** ${}^L G = G^\vee \rtimes \Gamma_F$。
这时参数是到 ${}^L G$ 的、与向 $\Gamma_F$ 的投影相容的同态，
非分歧参数位于 $L$ 群的 Frobenius 陪集中。
Satake 同构因而给出一般 Langlands 对应在非分歧地方的原型
[@Frenkel2007, 第 5 节]。

## 整体对应

### 数域情形

**[[整体 Langlands 纲领]]**研究整体域上的自守表示与整体 Galois 参数。
对数域 $F$ 上的连通约化群 $G$，不可约自守表示分解为各个[[完备化]]上的局部表示的[[限制张量积]]
\[
\pi \simeq \mathop{\bigotimes\nolimits'}\limits_v \pi_v .
\]
整体对应应与每个地方的局部对应相容：
把整体 Galois 表示限制到局部 Galois 群，所得到的参数应当描述 $\pi_v$。

对满足代数性条件的自守表示，可以期待对应的 Galois 表示取 $\ell$ 进系数。
下面的猜想大致是说，这样的自守表示都应给出 $\ell$ 进 Galois 表示，
并且两者在几乎所有素点处的局部信息一致：

::: conjecture [Buzzard–Gee]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，
$\pi$ 是 $G (\mathbb{A}_F)$ 的 [[$L$-代数]]自守表示。
固定素数 $\ell$ 及同构 $\iota \colon \mathbb{C} \simeq \overline{\mathbb{Q}}_\ell$。
则存在连续参数
\[
\rho_{\pi, \iota} \colon \Gamma_F \longrightarrow
{}^L G (\overline{\mathbb{Q}}_\ell) ,
\]
它与 $L$ 群向 $\Gamma_F$ 的投影相容，在几乎所有地方非分歧，
并在 $\pi_v$ 与 $\rho_{\pi, \iota}$ 均非分歧的地方 $v$ 满足
\[
[\rho_{\pi, \iota} (\operatorname{Frob}_v)_{\mathrm{ss}}]
= \iota (c_v (\pi)) ,
\]
其中 $c_v (\pi)$ 是 $\pi_v$ 的 Satake 参数。
在 $v \mid \ell$ 处，该参数应满足 [[de Rham 表示|de Rham 条件]]，
其 Hodge–Tate 余特征由 $\pi$ 的无穷位参数确定 [@BuzzardGee2014, 猜想 3.2.1]。
:::

这一猜想的部分情形已经证明。
例如，Harris、蓝凯文、Taylor 与 Thorne 为 [[CM 域]]或[[全实域]]上的
正则代数尖点 $\mathrm{GL}_n$ 自守表示构造了相应的 Galois 表示 [@HLTT2016]。
反过来，也可以证明某些 Galois 表示来自自守表示：
[[模性提升定理|模性提升]]方法已证明许多来自代数几何的 Galois 表示的自守性，
上文的[[模性定理]]就是一例。

完整的整体对应还要说明哪些参数能够出现，
以及由同一参数描述的[[自守包]]及其成员在[[自守谱]]中的重数；
对不满足代数性条件的自守表示，则需要更一般的整体 Langlands 参数框架。
对于[[典型群]]，Arthur 用一般线性群的自守表示代替 Galois 参数，
给出了[[离散自守谱]]的分类。
他所用的 [[Arthur 参数]]由适当的一般线性群[[尖点自守表示]]及 $\mathrm{SL}_2$ 的代数表示组成，
并满足由对偶群规定的正交性或辛性条件。

::: theorem [Arthur 分类]
设 $F$ 是数域，$G$ 是 $F$ 上的分裂[[辛群]] $\mathrm{Sp}_{2n}$
或分裂奇[[特殊正交群]] $\mathrm{SO}_{2n+1}$。
$G$ 的离散自守谱可以按整体 Arthur 参数分解为 [[Arthur 包]]，
包中各表示的出现及重数由 [[Arthur 重数公式]]给出。
:::

这一结果体现了一般群中参数、包与重数之间的关系 [@Arthur2013]。

### 整体函子性

**[[Langlands 函子性]]**预言，对偶群之间的同态也应当在自守侧产生对应的提升。
在参数一侧，这只需复合同态；困难在于自守侧也应存在相应的表示。

::: conjecture [整体函子性]
设 $H$、$G$ 是整体域 $F$ 上的[[拟分裂群|拟分裂]]连通约化群，
$\eta \colon {}^L H \to {}^L G$ 是与 Galois 投影相容的 $L$ 群同态。
对 $H (\mathbb{A}_F)$ 的自守表示 $\pi$，
存在 $G (\mathbb{A}_F)$ 的自守表示 $\Pi$，
使得在几乎所有两侧均非分歧的素点 $v$ 处，有
\[
c_v (\Pi) = \eta (c_v (\pi)) .
\]
:::

这一猜想包括[[基变换（自守形式）|基变换]]、[[张量积]]和[[对称幂]]提升等
[@Langlands1967; @Langlands1970]。
提升不一定保持尖点性；涉及非拟分裂[[内形式]]时，还须加入局部相关性条件。
典型群的[[内窥]]分类给出向一般线性群的提升。
另一个已证系列是 Newton–Thorne 的对称幂提升：
全实域上无[[复乘]]、正则权的 [[Hilbert 模形式|Hilbert 尖点模形式]]，
其每阶对称幂都来自相应一般线性群的尖点自守表示 [@NewtonThorne2026]。

### 有限域上曲线

设 $X$ 是 $\mathbb{F}_q$ 上的[[代数曲线|光滑射影几何连通曲线]]，
$F = \mathbb{F}_q (X)$ 是其[[函数域]]，$\ell \nmid q$。
这是整体 Langlands 纲领中可以直接使用曲线几何的情形。
对 $F$ 上的连通约化群 $G$，固定有限[[水平结构|水平]] $N$ 及适当的[[局部紧群的格|中心格]] $\Xi$，
记 $\mathcal{A}_{\mathrm{cusp}} (G, N, \Xi)$
为相应[[主丛]]的[[模叠]]的 $\mathbb{F}_q$ 点上取值于 $\overline{\mathbb{Q}}_\ell$
的[[尖点自守形式|尖点函数]]空间。
中心格用来处理中心的非紧方向；
一般 $G$ 的几何表述把与 $G$ 局部处处同构的[[纯内形式]]一并纳入。
下面的定理大致是说，尖点函数的空间可以按 Galois 参数分解，
而 Hecke 算子在每一部分上的作用由参数的 Frobenius 像决定：

::: theorem [V. Lafforgue]
存在 Hecke 稳定的典范分解
\[
\mathcal{A}_{\mathrm{cusp}} (G, N, \Xi)
= \bigoplus_\sigma \mathcal{H}_\sigma ,
\]
其中非零部分由连续、半单、几乎处处非分歧的整体参数
\[
\sigma \colon \Gamma_F \longrightarrow {}^L G (\overline{\mathbb{Q}}_\ell)
\]
的 $G^\vee$-共轭类标记。
参数定义在某个有限系数扩张上，并与 Galois 投影相容。
在水平与分歧点之外，对局部 $L$ 群的有限维[[代数群表示|代数表示]] $V$，相应球 [[Hecke 算子]]满足
\[
T_{V, v}|_{\mathcal{H}_\sigma}
= \operatorname{tr} (V (\sigma (\operatorname{Frob}_v))) \operatorname{id} .
\]
:::

这一分解由[[游历算子]]构造，建立了从自守侧到 Galois 参数的联系。
它尚未给出哪些参数会出现，以及对应包与重数的完整描述；
一般群中，几乎处处的 Satake 参数也不必唯一决定整体参数
[@VincentLafforgue2018, 定理 12.3、注 12.4]。
对一般线性群，则有更强的双射定理。

::: theorem [Drinfeld–L. Lafforgue]
以下两类对象的同构类一一对应：

- $\mathrm{GL}_n (\mathbb{A}_F)$ 的具有有限阶[[中心特征标]]的不可约尖点自守表示；

- $\Gamma_F$ 的连续不可约 $n$ 维 $\overline{\mathbb{Q}}_\ell$ 表示，
  它在有限多个点之外非分歧，且行列式为有限阶。

对应匹配非分歧点处的 Hecke 参数与 Frobenius 参数。
:::

其中使用系数域之间的同构把自守侧的复系数换成 $\overline{\mathbb{Q}}_\ell$。
Drinfeld 证明了 $n = 2$ 的情形，Laurent Lafforgue 证明了一般 $n$ 的情形，
证明把主丛的 [[Hecke 修改]]与 Frobenius 相容条件组合成[[块]]，
再研究这些对象的[[模空间]]的[[上同调]] [@Lafforgue2002]。

有限域上的曲线也解释了几何 Langlands 纲领的来源。
例如，对分裂的 $G$，非分歧自守形式是 $X$ 上 $G$-主丛的同构类集合上的函数；
在[[层–函数对应]]下，Hecke 算子来自修改主丛的 [[Hecke 函子]]。
把自守函数提升为主丛模叠上的层，
就得到 [[Hecke 特征层]]及范畴等价的预言 [@Frenkel2007, 第 3 节]。

## 局部对应及其范畴化

### $\ell$ 进情形

**[[局部 Langlands 纲领]]**研究局部域 $K$ 上的对应。
具体来说，在非 Archimedes 情形中，
自守侧考虑连通约化群 $G (K)$ 的复系数或 $\ell$ 进系数的[[光滑表示|光滑]]、[[容许表示]]，
其中 $\ell$ 不等于 $K$ 的[[剩余特征]]。
谱侧则考虑 [[Weil 群]] $W_K$ 的取值于相同系数的约化群 $G^\vee$ 的表示。
Weil 群类似于绝对 Galois 群：它包含[[惯性群]]，
但 Frobenius 元的幂只构成离散的 $\mathbb{Z}$，而不是其完备化 $\hat{\mathbb{Z}}$。
记 $\Phi_G (K)$ 为同态
\[
\varphi \colon W_K \times \mathrm{SL}_2 (\mathbb{C})
\longrightarrow {}^L G
\]
的 $G^\vee$-共轭类集合，
其中要求投影到 Galois 群的映射相容，$W_K$ 部分连续且半单，
$\mathrm{SL}_2$ 部分为代数同态。
这里 $\mathrm{SL}_2$ 的作用记录单值信息，
在一般线性群的情形也可以用 [[Weil–Deligne 表示]]中的[[幂零线性变换|幂零算子]]描述。

Archimedes 情形也类似，只是表示和 Weil 群的定义要作修改。
下面的猜想大致是说，$G (K)$ 的不可约表示按这样的参数分成有限的包：

::: conjecture [局部 Langlands 对应]
存在有限纤维映射
\[
\operatorname{rec}_G \colon
\operatorname{Irr}_{\mathrm{adm}} (G (K)) \longrightarrow \Phi_G (K) ,
\]
其中左侧是 $G (K)$ 的不可约容许复光滑表示的同构类。
当 $G$ 拟分裂时，该映射满射；
对一般 $G$，其像恰为与 $G$ 相关的参数。
纤维 $\Pi_\varphi (G)$ 称为 **[[$L$ 包]]**。
对应应延拓[[代数环面|环面]]的[[局部类域论]]，
并把[[缓增表示]]对应于 $W_K$ 部分在对偶群方向有界的参数。
:::

此时，包内对象还需要用参数[[中心化子]]的[[连通分支群]]及内形式的数据区分
[@Taibi2025, 第 5–6 节]。
下面是这一猜想的一个已证特例。

::: theorem [$\mathrm{GL}_n$ 的局部对应]
设 $K$ 是非 Archimedes 局部域。
$\mathrm{GL}_n (K)$ 的不可约容许复光滑表示的同构类，
与 $W_K$ 的 $n$ 维 Frobenius 半单 Weil–Deligne 表示的同构类一一对应。
对应在 $n = 1$ 时回到局部类域论，并与相应的 $L$ 因子、$\varepsilon$ 因子相容。
:::

这里右侧不要求不可约；
例如幂零算子 $N$ 的信息能够区分某些具有相同半单 Weil 参数的表示。
Archimedes 情形由 Langlands 建立；
非 Archimedes 情形的一般线性群对应由 Harris–Taylor、Henniart 等人的工作证明，
其中等特征情形由 Laumon–Rapoport–Stuhler 证明。
一般约化群的局部对应仍有未解决的部分 [@FarguesScholze2021, 第 I.1 节]。

局部对应的**[[范畴化]]**希望同时描述表示、表示之间的[[扩张]]以及随参数变化的族。
Fargues 与 Scholze 使用 [[Fargues–Fontaine 曲线]]上的 $G$-[[主丛]]的[[模叠]] $\mathrm{Bun}_G$，
把 $p$ 进局部域的表示论放进类似几何 Langlands 对应的框架。
其各个[[分层]]的层范畴是 $G$ 的内形式及其 [[Levi 子群]]的内形式的[[群表示范畴|表示范畴]]，
因此自守侧比单独的 $G (K)$ 表示范畴更大。

设 $K / \mathbb{Q}_p$ 是有限扩张，$G$ 是 $K$ 上的拟分裂连通约化群，$\ell \ne p$，
$\mathrm{Par}_G = [Z^1 (W_K, G^\vee) / G^\vee]$ 是相应的连续 [[L 参数模叠|$L$ 参数叠]]，
其中[[非交换余闭链|余闭链]]条件使用 $W_K$ 对 $G^\vee$ 的作用。
下面的猜想大致是说，自守侧的整个层范畴，而不仅是其中的不可约表示，
都由参数叠上的凝聚层描述：

::: conjecture [范畴局部 Langlands 对应]
固定 [[Whittaker 数据]]后，有[[范畴等价]]
\[
\mathsf{D}_{\mathrm{lis}} (\mathrm{Bun}_G, \overline{\mathbb{Q}}_\ell)^\omega
\simeq
\mathsf{D}_{\mathrm{coh}}^{\mathrm{b}, \mathrm{qc}} (\mathrm{Par}_G) .
\]
左侧是相应层范畴的[[紧对象]]，
右侧是支集包含于有限个连通分支的有界[[凝聚复形]]。
:::

Fargues–Scholze 已构造谱侧[[完美复形]]对自守侧的作用，
并由此给不可约光滑表示赋予半单局部参数 [@FarguesScholze2021]。
完整范畴等价仍需进一步证明；
Hansen 与 Mann 在 2026 年的工作中，
将 $\mathrm{GL}_n$ 的完整范畴对应归结为增强 [[Whittaker 系数函子]]与 [[Eisenstein 级数]]相容的假设
[@HansenMann2026]。

此外，广义的 $\ell$ 进情形也希望考虑更一般的系数环，而不仅仅是特征 $0$ 代数闭域，
例如 $\overline{\mathbb{F}}_\ell$、$\overline{\mathbb{Z}}_\ell$、$\overline{\mathbb{Z}} [1/p]$ 等，
这里 $\ell \ne p$。
$\mathrm{GL}_n$ 的模 $\ell$ 半单对应可参见 Vignéras 的工作 [@Vigneras2001]；
$\ell$ 进整系数及[[族中的局部 Langlands 对应|系数族版本]]可参见 Emerton–Helm 与 Helm–Moss 的工作，
它们同样针对 $\mathrm{GL}_n$ [@EmertonHelm2014; @HelmMoss2018]。
对一般约化群，Dat、Helm、
Kurinczuk 与 Moss 构造了 $\mathbb{Z} [1/p]$ 上的[[L 参数模叠|参数模空间]]，
并研究其在 $\overline{\mathbb{Z}} [1/p]$ 及 $\overline{\mathbb{Z}}_\ell$ 上的几何，
为整系数对应提供谱侧的几何基础 [@DHKM2025]。

### 模 $p$ 与 $p$ 进情形

设 $K / \mathbb{Q}_p$ 是有限扩张，$G$ 是 $K$ 上的连通约化群，
$E / \mathbb{Q}_p$ 是有限系数扩张，$\mathcal{O}$ 是其[[赋值环]]，$k$ 是其[[剩余域]]。
**[[模 p Langlands 对应|模 $p$ Langlands 对应]]**使用 $k$ 系数的光滑表示，
而 **[[$p$ 进 Langlands 对应]]**使用特征为 $0$ 的 $p$ 进系数，
涉及连续[[酉 Banach 表示]]及[[局部解析表示]]。
这里酉性指存在定义其拓扑的群不变范数。
这种情形远比 $\ell$ 进情形困难。

这些对应希望同时保留[[表示的扩张]]及 [[Galois 表示的形变|Galois 参数的形变]]。
记 $\mathcal{X}_G$ 为适当的连续 $L$ 群参数[[模叠]]；
根据代数性规范化，有时需要使用 [[Langlands C 群|$C$ 群]]。

下面的猜想只是概略的形式，它大致是说，
$G (K)$ 的表示可以实现为参数模叠上的层：

::: conjecture [范畴化的 $p$ 进对应]
$G (K)$ 的适当表示[[导出范畴]] $\mathcal{C}_G$ 应当通过[[全忠实函子]]
嵌入参数模叠上的层范畴，示意地写成
\[
\mathfrak{A}_G \colon \mathcal{C}_G
\hookrightarrow \mathsf{IndCoh} (\mathcal{X}_G) .
\]
右侧是相应的[[归纳凝聚层]]范畴。
这一构造应与系数约化、[[抛物诱导]]和[[局部–整体相容性]]等结构相容。
:::

模 $p$ 版本使用剩余域上的参数叠；
整数系数版本从光滑 $p$ 幂挠表示出发，经[[稳定整格]]的 $p$ 进极限联系 Banach 表示。
局部解析版本的谱侧则预期使用 [[Robba 环]]上带群结构的 [[$(\varphi, \Gamma)$-模]]的解析模叠，
允许不满足[[平展 $(\varphi, \Gamma)$-模|平展条件]]的对象。
Emerton、Gee 与 Hellmann 明确预期这一框架推广到一般 $G$，
但其精确的整数系数与局部解析猜想主要针对 $\mathrm{GL}_d (K)$；
一般群的范畴及相容性条件仍须进一步明确
[@EGH2025, 注 1.4.7、猜想 6.1.15、6.2.4]。

在 $\mathrm{GL}_2 (\mathbb{Q}_p)$ 的情形，Breuil 建立了下面的模 $p$ 对应，
它大致是说，不可约的二维 Galois 表示恰好对应于不出现在[[抛物诱导]]中的不可约光滑表示：

::: theorem [Breuil]
$\Gamma_{\mathbb{Q}_p}$ 的二维不可约连续 $\overline{\mathbb{F}}_p$ 表示的同构类，
与 $\mathrm{GL}_2 (\mathbb{Q}_p)$ 的具有中心特征标的不可约[[超奇异表示|超奇异]]
$\overline{\mathbb{F}}_p$ 光滑表示的同构类存在自然的一一对应 [@Breuil2003]。
:::

若允许可约 Galois 表示，则对应需要容纳自守侧的有限长度表示及其扩张；
半单 Galois 参数也可以用来组织表示范畴的[[块（表示论）|块]]。
对更高秩或一般有限扩张 $K / \mathbb{Q}_p$，
这一理论仍在发展中。
例如，Breuil、Herzig、胡永泉、Morra 与 Schraen
在 $K / \mathbb{Q}_p$ 非分歧、$p$ 足够大及一般位置等条件下，
证明来自模 $p$ 上同调的相应 $\mathrm{GL}_2 (K)$ 表示具有有限长度
[@BHHMS2025]。

Colmez 为 $\mathrm{GL}_2 (\mathbb{Q}_p)$ 构造了二维 $p$ 进对应。
它能够保留经典 Weil–Deligne 参数之外的 $p$ 进 Hodge 信息，
例如 [[de Rham 表示]]的 [[Hodge 滤链]] [@CDN2025, 第 1 节]。
选取稳定整格再模去[[极大理想]]，可以联系 $p$ 进与模 $p$ 两种理论，
但约化中的扩张信息及其对整格的依赖也正是研究的一部分。

## 推广

### 几何对应

**[[几何 Langlands 纲领]]**将上述函数域图景推广到[[代数闭域]]上的曲线，
用层范畴代替自守函数空间。
对复曲线，Galois 表示的替代物是对偶群取值的[[局部系]]。

::: theorem [de Rham 几何 Langlands 对应]
设 $X$ 是复数域上的光滑射影连通曲线，$G$ 是连通约化群。
对 $G$-主丛模叠 $\mathrm{Bun}_G$ 和平坦 $G^\vee$-主丛的[[导出叠|导出模叠]]
$\mathrm{LocSys}_{G^\vee}$，有范畴等价
\[
\mathsf{DMod} (\mathrm{Bun}_G)
\simeq
\mathsf{IndCoh}_{\mathrm{Nilp}} (\mathrm{LocSys}_{G^\vee}) .
\]
:::

左侧是 [[D-模]]范畴，右侧是具幂零[[奇异支集]]的[[归纳凝聚层]]范畴。
这一无分歧对应由 Gaitsgory、Raskin 及合作者证明，
证明由五篇文章组成 [@GLC1--@GLC5]。
它还有 [[Betti 几何 Langlands 对应|Betti]]、[[Dolbeault 几何 Langlands 对应|Dolbeault]]、
[[局部几何 Langlands 对应|局部]]与[[量子几何 Langlands 对应|量子]]等变体；
其中 Betti 版本也由上述工作推出，其余变体中仍有许多猜想，
详见[[几何 Langlands 纲领]]。

### 相对情形

通常的对应研究群 $G$ 的自守表示，
**[[相对 Langlands 纲领]]**还研究这些表示与某个子群或[[齐性空间]]的关系。
例如，设 $H \subset G$，对 $G$ 的自守形式 $\varphi$，可以考虑[[自守周期|周期]]
\[
\mathcal{P}_H (\varphi) =
\int_{H (F) \backslash H (\mathbb{A}_F)} \varphi (h) \, dh ,
\]
其中假设积分收敛，必要时须对中心取商或作[[正则化]]。
周期不为零表示 $\varphi$ 在沿 $H$ 平均后仍保留信息。
相对纲领希望用 Galois 参数及 $L$ 函数特殊值来刻画这种现象。

典型例子是 [[Gan–Gross–Prasad 猜想]]：
对相邻秩的[[酉群]]或特殊正交群，
沿小群的对角嵌入所得周期的非零性，
应与相应张量积 $L$ 函数在中心点的非零性及各处局部周期条件相联系。
其精细形式还预言，周期的平方除以适当的内积，
由中心 $L$ 值、[[伴随 $L$ 函数|伴随 $L$ 值]]和正规化局部积分给出。

::: theorem [酉群的周期与中心值]
设 $E / F$ 是数域的二次扩张，$W$ 是 $E$ 上 $n$ 维非退化 [[Hermite 空间]]，
$V = W \oplus \langle 1 \rangle$。
设 $\pi = \pi_n \boxtimes \pi_{n+1}$ 是
$\mathrm{U} (W) \times \mathrm{U} (V)$ 的处处[[缓增表示|缓增]]不可约尖点自守表示，
$\Pi_n$、$\Pi_{n+1}$ 是其向一般线性群的[[基变换（自守形式）|基变换]]。
假设每个地方 $v$ 的局部周期空间
\[
\operatorname{Hom}_{\mathrm{U} (W) (F_v)} (\pi_v, \mathbb{C})
\]
都非零，其中小酉群对角嵌入乘积群。
则 $\mathcal{P}_{\mathrm{U} (W)}$ 在 $\pi$ 上非零，当且仅当
\[
L (1/2, \Pi_n \times \Pi_{n+1}) \ne 0 .
\]
:::

局部条件不可省略：即使中心值非零，选定的局部表示也可能不容许所需的周期。
这一结论来自酉群情形的 Gan–Gross–Prasad 理论及其 [[Ichino–Ikeda 公式|Ichino–Ikeda 精细公式]]
[@BCZ2022, 定理 1.1.6.1]。

Ben-Zvi、Sakellaridis 与 Venkatesh 提出的[[相对 Langlands 对偶]]
进一步把群与对偶群的关系推广到带群作用的适当 [[Hamilton 空间]]之间的对偶。
其中相对周期、自守侧的几何构造与谱侧的 $L$ 函数结构都成为对偶的一部分，
并可以从[[规范场论]]的[[边界条件（量子场论）|边界条件]]理解。
这为许多相对猜想提供统一的组织方式，完整的一般理论仍在发展中
[@BenZviSakellaridisVenkatesh2024]。

## 拓扑场论观点

Kapustin 与 Witten 指出，
[[几何 Langlands 纲领|几何 Langlands 对应]]可以视为两个四维[[拓扑量子场论]]之间的对应
[@KapustinWitten2007]，
其中对三维、二维、一维流形分别赋予向量空间、范畴、$2$-范畴。例如：

- 复曲线是二维曲面，整体几何对应比较曲线上有关模叠的层范畴。
  这比整体算术对应提高了一个[[范畴层级]]。

- 几何局部域 $\mathbb{C} (\!(t)\!)$ 像圆周，
  [[局部几何 Langlands 对应|局部几何对应]]预期比较 [[$(\infty, 2)$-范畴|$2$-范畴]]。

[[算术拓扑]]把各个算术对象类比为不同维数流形，
因此各个算术版本也可以大致放入此图景。
注意这里的维数不是 [[Krull 维数]] [@Morishita2009]：

- [[有限域]] $\operatorname{Spec} \mathbb{F}_q$ 像[[圆周]]，
  Frobenius 扮演绕圆周一周的角色。

- [[代数整数环|数环]] $\operatorname{Spec} \mathcal{O}_F$ 像三维[[流形]]，
  [[素理想]]像其中的[[纽结]]。
  有限域曲线也像三维对象：几何曲线提供两个方向，Frobenius 再提供一个方向。
  整体算术对应因而比较向量空间及其[[谱分解]]。

- 非 Archimedes 局部域像纽结邻域的二维边界，
  其[[赋值环|整数环]]像三维的[[实心环面]]邻域。
  局部算术对应的范畴化比较表示范畴与参数叠上的层范畴。

- 相对版本则增加[[边界条件（量子场论）|边界条件]]，
  周期与 $L$ 值的关系应当反映这些条件在对偶下的对应。

这一统一的四维算术场论框架仍是研究纲领，尚未构造出一般算术输入及全部粘合律
[@BenZviSakellaridisVenkatesh2024, 第 1.3 节、附录 D]。

## 参考文献

综述与类域论：

```bibliography
Milne2020:
  type: preprint
  author: James S. Milne
  title: Class Field Theory
  year: 2020
  url: 'https://www.jmilne.org/math/CourseNotes/CFT.pdf'
  note: Version 4.03

Frenkel2007:
  type: incollection
  author: Edward Frenkel
  title: Lectures on the Langlands program and conformal field theory
  booktitle: Frontiers in Number Theory, Physics, and Geometry II
  publisher: Springer
  year: 2007
  pages: 387--533
  doi: '10.1007/978-3-540-30308-4_11'
  arxiv: 'hep-th/0512172'
```

整体互反性、模性与函子性：

```bibliography
Langlands1967:
  type: preprint
  author: Robert P. Langlands
  title: Letter to André Weil
  year: 1967
  url: 'https://publications.ias.edu/sites/default/files/letter-to-weil-1967-01_rpl_5.pdf'

Langlands1970:
  type: incollection
  author: Robert P. Langlands
  title: Problems in the theory of automorphic forms
  booktitle: Lectures in Modern Analysis and Applications III
  series: Lecture Notes in Mathematics
  volume: 170
  publisher: Springer
  year: 1970
  pages: 18--61
  url: 'https://publications.ias.edu/sites/default/files/problems-in-the-theory-of-automorphic-forms_rpl_6.pdf'

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

Arthur2013:
  type: book
  author: James Arthur
  title: 'The Endoscopic Classification of Representations: Orthogonal and Symplectic Groups'
  series: Colloquium Publications
  volume: 61
  publisher: American Mathematical Society
  year: 2013
  doi: '10.1090/coll/061'

BCDT2001:
  type: article
  author: [Christophe Breuil, Brian Conrad, Fred Diamond, Richard Taylor]
  title: 'On the modularity of elliptic curves over $\mathbb{Q}$: wild 3-adic exercises'
  journaltitle: Journal of the American Mathematical Society
  volume: 14
  number: 4
  year: 2001
  pages: 843--939
  doi: '10.1090/S0894-0347-01-00370-8'

NewtonThorne2026:
  type: article
  author: [James Newton, Jack A. Thorne]
  title: Symmetric power functoriality for Hilbert modular forms
  journaltitle: Annals of Mathematics
  volume: 203
  number: 1
  year: 2026
  pages: 283--347
  doi: '10.4007/annals.2026.203.1.4'
  arxiv: '2212.03595'

HLTT2016:
  type: article
  author: [Michael Harris, Kai-Wen Lan, Richard Taylor, Jack Thorne]
  title: On the rigid cohomology of certain Shimura varieties
  journaltitle: Research in the Mathematical Sciences
  volume: 3
  year: 2016
  doi: '10.1186/s40687-016-0078-5'
  arxiv: '1411.6717'
  note: Article 37
```

局部对应及其范畴化：

```bibliography
Taibi2025:
  type: preprint
  author: Olivier Taïbi
  title: The local Langlands conjecture
  arxiv: '2510.00632'

FarguesScholze2021:
  type: preprint
  author: [Laurent Fargues, Peter Scholze]
  title: Geometrization of the local Langlands correspondence
  arxiv: '2102.13459'

HansenMann2026:
  type: preprint
  author: [David Hansen, Lucas Mann]
  title: The categorical local Langlands conjecture
  arxiv: '2606.00983'
```

模 $\ell$ 对应（$\ell \ne p$）、整系数与系数族：

```bibliography
Vigneras2001:
  type: article
  author: Marie-France Vignéras
  title: 'Correspondance de Langlands semi-simple pour $\mathrm{GL}(n,F)$ modulo $\ell \ne p$'
  journaltitle: Inventiones Mathematicae
  volume: 144
  number: 1
  year: 2001
  pages: 177--223
  doi: '10.1007/s002220100134'

EmertonHelm2014:
  type: article
  author: [Matthew Emerton, David Helm]
  title: 'The local Langlands correspondence for $\mathrm{GL}_n$ in families'
  journaltitle: Annales scientifiques de l'École Normale Supérieure
  volume: 47
  number: 4
  year: 2014
  pages: 655--722
  doi: '10.24033/asens.2224'
  arxiv: '1104.0321'

HelmMoss2018:
  type: article
  author: [David Helm, Gilbert Moss]
  title: Converse theorems and the local Langlands correspondence in families
  journaltitle: Inventiones Mathematicae
  volume: 214
  number: 3
  year: 2018
  pages: 999--1022
  doi: '10.1007/s00222-018-0816-y'
  arxiv: '1610.03277'

DHKM2025:
  type: article
  author: [Jean-François Dat, David Helm, Robert Kurinczuk, Gilbert Moss]
  title: Moduli of Langlands parameters
  journaltitle: Journal of the European Mathematical Society
  volume: 27
  number: 5
  year: 2025
  pages: 1827--1927
  doi: '10.4171/JEMS/1599'
  arxiv: '2009.06708'
```

模 $p$ 与 $p$ 进对应的范畴化：

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
```

模 $p$ 与 $p$ 进局部对应的已证情形及进展：

```bibliography
Breuil2003:
  type: article
  author: Christophe Breuil
  title: 'Sur quelques représentations modulaires et $p$-adiques de $\mathrm{GL}_2 (\mathbb{Q}_p)$ I'
  journaltitle: Compositio Mathematica
  volume: 138
  number: 2
  year: 2003
  pages: 165--188
  doi: '10.1023/A:1026191928449'

CDN2025:
  type: preprint
  author: [Pierre Colmez, Gabriel Dospinescu, Wiesława Nizioł]
  title: On the geometrization of the $p$-adic local Langlands correspondence
  arxiv: '2408.02358'

BHHMS2025:
  type: preprint
  author: [Christophe Breuil, Florian Herzig, Yongquan Hu, Stefano Morra, Benjamin Schraen]
  title: 'Finite length for unramified $\mathrm{GL}_2$'
  arxiv: '2501.03644'
```

有限域上曲线的整体对应：

```bibliography
Lafforgue2002:
  type: article
  author: Laurent Lafforgue
  title: Chtoucas de Drinfeld et correspondance de Langlands
  journaltitle: Inventiones Mathematicae
  volume: 147
  year: 2002
  pages: 1--241
  doi: '10.1007/s002220100174'
  url: 'https://www.laurentlafforgue.org/math/fulltext.pdf'

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

几何 Langlands 对应：

```bibliography
GLC1:
  type: preprint
  label: GLC I
  author: [Dennis Gaitsgory, Sam Raskin]
  title: 'Proof of the geometric Langlands conjecture I: construction of the functor'
  arxiv: '2405.03599'

GLC5:
  type: preprint
  label: GLC V
  author: [Dennis Gaitsgory, Sam Raskin]
  title: 'Proof of the geometric Langlands conjecture V: the multiplicity one theorem'
  arxiv: '2409.09856'
```

相对情形的周期、$L$ 值与对偶：

```bibliography
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
  arxiv: '2409.04677'
```

算术拓扑与场论观点：

```bibliography
Morishita2009:
  type: preprint
  author: Masanori Morishita
  title: Analogies between Knots and Primes, 3-Manifolds and Number Rings
  arxiv: '0904.3399'

KapustinWitten2007:
  type: article
  author: [Anton Kapustin, Edward Witten]
  title: Electric-magnetic duality and the geometric Langlands program
  journaltitle: Communications in Number Theory and Physics
  volume: 1
  number: 1
  year: 2007
  pages: 1--236
  doi: '10.4310/CNTP.2007.v1.n1.a1'
  arxiv: 'hep-th/0604151'
```

```terms
Langlands 纲领:
  en: Langlands program
  fr: programme de Langlands :m
Langlands 对应:
  en: Langlands correspondence
  fr: correspondance de Langlands :f
Langlands 函子性:
  en: Langlands functoriality
模 $p$ Langlands 对应:
  en: mod $p$ Langlands correspondence
$p$ 进 Langlands 对应:
  en: $p$-adic Langlands correspondence
相对 Langlands 纲领:
  en: relative Langlands program
```
