---
title: 几何 Langlands 纲领
aliases: [几何 Langlands, 几何 Langlands 对应]
categories: [几何表示论]
navboxes: [Langlands 纲领, 几何表示论]
---

在[[几何表示论]]中，**几何 Langlands 纲领**是 [[Langlands 纲领]]的几何类比，
其内容包括各种不同版本的**几何 Langlands 对应**，
其中有的版本已被证明，而有的仍是猜想。

几何 Langlands 纲领的想法来自[[数论]]中的 Langlands 纲领，
后者将[[约化群]] $G$ 的[[自守形式]]
与其 [[Langlands 对偶群]] $G^\vee$ 的 [[Galois 表示]]对应起来。
当基域是[[有限域]]上[[代数曲线]]的[[函数域]]时，
非分歧的自守形式可以看作曲线上 $G$-[[主丛]]的集合上的函数，
而 Galois 表示可以看作曲线上的 $G^\vee$-[[局部系]]。
几何 Langlands 纲领则考虑复数域上的曲线，
并将上述函数换成[[层]]，而陈述为层[[范畴]]之间的等价。

几何 Langlands 对应的一个常见版本是 **[[de Rham 几何 Langlands 对应]]**。
它表明，对复数域上的[[代数曲线|光滑射影曲线]] $X$，有范畴等价
\[
\mathsf{DMod} (\mathrm{Bun}_G)
\simeq
\mathsf{IndCoh}_{\mathrm{Nilp}} (\mathrm{LocSys}_{G^\vee}) ,
\]
其中

- 左边称为**自守侧**，
  是 $X$ 上 $G$-主丛的[[模叠]] $\mathrm{Bun}_G$ 上的 [[D-模]]范畴；

- 右边称为**谱侧**，
  是 $X$ 上带[[平坦联络]]的 $G^\vee$-主丛的模叠 $\mathrm{LocSys}_{G^\vee}$
  上具幂零[[奇异支集]]的[[归纳凝聚层]]范畴，它是[[凝聚层]]导出范畴的一种修改，
  其中 $\mathrm{LocSys}_{G^\vee}$ 应当视为[[导出叠]]。
  
谱侧的每一点，即每个局部系 $E$，可以看作一个 “特征值”：
$E$ 处的[[点层]]对应于自守侧的一个 [[Hecke 特征层]]，
而一般的层则对应不同特征值的层的某种积分，
这像是某种[[谱分解]]，例如像 [[Fourier 变换]]将函数分解为不同频率成分的积分。

几何 Langlands 纲领有许多不同版本：

- 按照所用的层论，有
  [[de Rham 几何 Langlands 对应|de Rham]]、
  [[Betti 几何 Langlands 对应|Betti]] 与
  [[Dolbeault 几何 Langlands 对应|Dolbeault]] 三种版本，
  它们对应于[[非交换 Hodge 理论]]中的三种几何。
  前两种已经于 [@GLC1--@GLC5] 中证明。

- 将曲线换成一点附近的[[形式圆盘]]或类似结构，
  就得到[[局部几何 Langlands 对应]]。
  其中一个基本情形是[[几何 Satake 等价]]，即[[双原点形式圆盘]]的情形。

- 在 de Rham 版本中将 D-模、凝聚层都换成[[扭转 D-模]]，
  则得到[[量子几何 Langlands 对应]]。

- ...

Kapustin 与 Witten 提出，
几何 Langlands 纲领可以用四维[[超对称 Yang–Mills 理论]]中的[[电磁对偶]]解释。

## 想法

几何 Langlands 纲领源于[[函数域]]上的 [[Langlands 纲领]]。
设 $X$ 是有限域 $\mathbb{F}_q$ 上的连通光滑射影曲线，
$F = \mathbb{F}_q (X)$ 是其函数域，
$G$ 是 $\mathbb{F}_q$ 上的[[分裂约化群]]。
此时 $X$ 上 $G$-主丛的同构类构成的集合可以写成
\[
\mathrm{Bun}_G (\mathbb{F}_q) \simeq
G (F) \backslash G (\mathbb{A}_F) / G (\mathbb{O}_F) ,
\]
其中 $\mathbb{A}_F$ 是 $F$ 的[[加元环]]，$\mathbb{O}_F$ 是其中的整元构成的子环，
而非分歧的[[自守形式]]就是该集合上满足某些条件的函数。
对 $X$ 的闭点 $x$，在 $x$ 处修改 $G$-主丛给出 [[Hecke 算子]]。
由 [[Satake 同构]]，这些算子可以用 $G^\vee$ 的表示 $V$ 标记，记为 $T_{V, x}$。
Langlands 纲领预言，Hecke 算子的特征向量大致对应于
[[平展基本群]] $\pi_1 (X)$ 在 $G^\vee (\overline{\mathbb{Q}}_\ell)$ 中的表示。

通过[[层–函数对应]]，可以将上述图景[[范畴化]]：
对 $\mathrm{Bun}_G$ 上的 [[$\ell$ 进层]]，在每点处取 Frobenius 作用的迹，
就得到 $\mathrm{Bun}_G (\mathbb{F}_q)$ 上的函数，
而 Hecke 算子提升为层上的 [[Hecke 函子]] $H_{V, x}$，这里 $x \in X$。
令 $x$ 变动，这些函子拼成一个整体的 Hecke 函子
\[
H_V \colon \mathsf{Shv} (\mathrm{Bun}_G) \longrightarrow
\mathsf{Shv} (X \times \mathrm{Bun}_G) .
\]
对 $X$ 上的 $G^\vee$-局部系 $E$，
$E$ 对应的 **[[Hecke 特征层]]**是指 $\mathrm{Bun}_G$ 上的层 $\mathcal{A}_E$，
满足
\[
H_V (\mathcal{A}_E) \simeq E_V \boxtimes \mathcal{A}_E ,
\]
其中 $E_V$ 是由 $E$ 经表示 $V$ 诱导得到的局部系。
这里 $E$ 就是对应的 “特征值”，其在每点 $x \in X$ 的茎 $E_x$
指定了在 $x$ 处修改 $G$-主丛对 Hecke 特征层的影响，
也就是使得后者变成与 $(E_V)_x$ 的张量积。
取 Frobenius 的迹，Hecke 特征层就给出 Hecke 特征形式。

几何 Langlands 纲领大致就是在上述情形下，
将有限域上的曲线换成复数域上的曲线，
并将 $\ell$ 进层换成 [[D-模]]，局部系换成带有[[平坦联络]]的主丛，
而得到的结构。

我们来看一个最简单的例子，
即 $G = G^\vee = \mathbb{G}_\mathrm{m}$ 的情况。
此时 $\mathrm{Bun}_G$ 是 $X$ 上[[线丛]]的模叠
\[
\mathrm{Pic} (X) =
\coprod_{d \in \mathbb{Z}} \mathrm{Pic}^d (X) ,
\]
其中每个[[连通分支]] $\mathrm{Pic}^d (X)$ 由次数为 $d$ 的线丛构成，
在相差 $\mathbb{G}_\mathrm{m}$-[[矮丛]]的意义下就是 $X$ 的 [[Picard 簇]]，
我们在这里可以大致将两者等同。
此时，对整数 $n$，由 $\mathbb{G}_\mathrm{m}$ 的权 $n$ 的一维表示标记的 Hecke 函子
$H_n$ 就是沿映射
\[
h_n \colon X \times \mathrm{Pic} (X) \longrightarrow \mathrm{Pic} (X) , \qquad
(x, L) \longmapsto L (n x)
\]
拉回。
对 $X$ 上秩为 $1$ 的局部系 $E$，其对应的 Hecke 特征层是
$\mathrm{Pic} (X)$ 上秩为 $1$ 的局部系 $\mathcal{A}_E$，满足
\[
h_n^* (\mathcal{A}_E) \simeq E^{\otimes n} \boxtimes \mathcal{A}_E .
\]
这样的 $\mathcal{A}_E$ 由[[几何类域论]]给出。具体而言，我们有同构
\[
\pi_1 (\mathrm{Pic}^d (X)) \simeq H_1 (X; \mathbb{Z})
\simeq \pi_1 (X)^\mathrm{ab} ,
\]
右边指 $X$ [[基本群]]的[[交换化]]。
由于 $\mathbb{G}_\mathrm{m}$ 是 [[Abel 群]]，
$X$ 与 $\mathrm{Pic}^d (X)$ 上秩为 $1$ 的局部系
都对应于上述群到 $\mathbb{G}_\mathrm{m}$ 的同态。
这就是将 $E$ 对应到 $\mathcal{A}_E$ 的方法，
也就是几何 Langlands 纲领在 $\mathbb{G}_\mathrm{m}$ 情况的特例。

完整的几何 Langlands 纲领不仅考虑 Hecke 特征层，
也考虑 $\mathrm{Bun}_G$ 上的所有层或所有 [[D-模]]，
并且类似[[谱分解]]，将其分解为 Hecke 特征层的某种积分。
其具体陈述为范畴等价
\[
\mathbb{L}_G \colon
\mathsf{DMod} (\mathrm{Bun}_G)
\overset{\sim}{\longrightarrow}
\mathsf{IndCoh}_{\mathrm{Nilp}} (\mathrm{LocSys}_{G^\vee}) ,
\]
其中两边都是 $\mathbb{C}$-线性的[[稳定 $(\infty, 1)$-范畴]]。
这里，右边的 $\mathrm{LocSys}_{G^\vee}$
是 $X$ 上带[[平坦联络]]的 $G^\vee$-主丛的模叠，
其中的点通过 [[Riemann--Hilbert 对应]]等同于 $X$ 上的 $G^\vee$-局部系；
范畴 $\mathsf{IndCoh}_{\mathrm{Nilp}}$ 是带幂零[[奇异支集]]的[[归纳凝聚层]]范畴，
这是凝聚层范畴的一种修改。
谱侧（即右侧）某个局部系 $E$ 处的点层对应于自守侧（左侧）相应的 Hecke 特征层，
而右边一般的层则对应于这些 Hecke 特征层的某种积分。

这一版本的几何 Langlands 猜想由
Arinkin、Beraldo、Campbell、陈麟、Færgeman、Gaitsgory、林恺翔、Raskin 与 Rozenblyum
在 2024 年的五篇系列论文中证明 [@GLC1--@GLC5]，
对特征为 $0$ 的任意域上的曲线和任意连通约化群都成立。

## 变体

下面简要介绍几何 Langlands 纲领的各种变体。

上面介绍的版本使用 D-模和平坦联络，称为 [[de Rham 几何 Langlands 对应|de Rham 版本]]。

### 几何 Satake 等价

**[[几何 Satake 等价]]**是几何 Langlands 纲领在一点附近的最基本的情形，
也可以说是对于[[双原点形式圆盘]]的情形。
它解释了 Hecke 函子为何由 $G^\vee$ 的表示标记。

在 $X$ 的一点 $x \in X$ 附近取局部坐标 $t$，
记 $\mathcal{K} = \mathbb{C} (\!(t)\!)$，$\mathcal{O} = \mathbb{C} [\![t]\!]$。
将两个[[形式圆盘]] $\operatorname{Spec} \mathcal{O}$ 沿[[去心形式圆盘]]
$\operatorname{Spec} \mathcal{K}$ 粘合，就得到双原点形式圆盘。
在 $x$ 处修改 $G$-主丛的方式由[[双原点形式圆盘]]上的 $G$-主丛刻画，后者的模叠是商叠
\[
G (\mathcal{O}) \backslash G (\mathcal{K}) / G (\mathcal{O}) ,
\]
而点 $x$ 处的 Hecke 函子由该叠上的层给出。
这些层在[[卷积]]下构成[[幺半范畴]]，称为**球 Hecke 范畴**。
几何 Satake 等价是说，
其中的[[错致层]]构成的幺半范畴等价于 $\mathsf{Rep} (G^\vee)$，
即[[分类叠]] $\mathrm{B} G^\vee$ 上的[[向量丛]]的范畴
[@Lusztig1983; @Ginzburg1995; @MirkovicVilonen2007]。

若考虑全体 D-模而不仅是错致层，则有**导出 Satake 等价**
[@BezrukavnikovFinkelberg2008; @ArinkinGaitsgory2015, 第 12 节]：
\[
\mathsf{DMod} \bigl(
  G (\mathcal{O}) \backslash G (\mathcal{K}) / G (\mathcal{O})
\bigr)
\simeq
\mathsf{IndCoh}_{\mathrm{Nilp}} \bigl(
  \mathfrak{g}^\vee [-1] / G^\vee
\bigr) ,
\]
其中 $G^\vee$ 以伴随作用作用于 $\mathfrak{g}^\vee$，
而 $\mathfrak{g}^\vee [-1]$ 是移位得到的[[导出概形]]。
右边的导出叠的底层经典叠是 $\mathrm{B} G^\vee$，
其导出结构反映了错致层之间的高阶 $\operatorname{Ext}$ 群。

### Betti 版本

**[[Betti 几何 Langlands 对应]]**由 Ben-Zvi 与 Nadler [@BenZviNadler2018] 提出，
其陈述为
\[
\mathsf{Shv}_{\mathrm{Nilp}} (\mathrm{Bun}_G)
\overset{\sim}{\longrightarrow}
\mathsf{IndCoh}_{\mathrm{Nilp}} (\mathrm{Loc}_{G^\vee}) ,
\]
其中自守侧（左侧）将 D-模换成具有幂零[[奇异支集]]的 [[Betti 层]]，
而谱侧（右侧）相应地将 $X$ 上带平坦联络的 $G^\vee$-主丛换成
$X$ 上的 $G^\vee$-[[局部系]]，
即[[基本群]] $\pi_1 (X)$ 到 $G^\vee$ 的表示的导出模叠 $\mathrm{Loc}_{G^\vee}$。

[@GLC1] 证明了 Betti 和 de Rham 版本的几何 Langlands 对应相互蕴含，
从而 Betti 版本也已被 [@GLC1--@GLC5] 证明。

对任意代数闭域上的曲线，也可以使用 [[$\ell$ 进层]]来陈述类似的对应，
此时谱侧需要换成限制变差局部系的模叠 [@AGKRRV2020]。

### Dolbeault 版本

**[[Dolbeault 几何 Langlands 对应]]**由 Donagi 与 Pantev [@DonagiPantev2012] 提出，
它是 de Rham 版本的经典极限：
D-模退化为 $\mathrm{Bun}_G$ 的[[余切叠]] $\mathrm{Higgs}_G$ 上的凝聚层，
其中 $\mathrm{Higgs}_G$ 即 $G$-[[Higgs 丛]]的模叠。
另一方面，平坦联络也退化为 Higgs 丛。
因此，Dolbeault 几何 Langlands 对应具有对称的陈述：
\[
\text{“}\mathsf{IndCoh}\text{”} (\mathrm{Higgs}_G)
\overset{\sim}{\longrightarrow}
\text{“}\mathsf{IndCoh}\text{”} (\mathrm{Higgs}_{G^\vee}) .
\]
其具体陈述，即具体使用何种层论能使猜想成立，仍然未知。
一个较小的版本由 Pădurariu 与 Toda [@PadurariuToda2025] 提出，
这是将上面其中一边限制到[[半稳定点|半稳定]]部分的版本。

上述两个 Higgs 丛模叠通过 [[Hitchin 纤维化]]映射到同一个底空间。
Donagi 与 Pantev 证明，二者在[[普遍点]]处的纤维（的连通分支）是相互对偶的 [[Abel 簇]]，
从而沿纤维的 [[Fourier–Mukai 变换]]给出了这一等价在普遍点上的形式，
这也是一种[[镜像对称]] [@HauselThaddeus2003]。

### 局部几何 Langlands 对应

**[[局部几何 Langlands 对应]]**是几何 Langlands 对应对[[去心形式圆盘]]
$D^\times = \text{“}{\operatorname{Spec} \mathbb{C} (\!(t)\!)}\text{”}$
的版本。
它也是[[局部 Langlands 对应]]的几何类比，
其中局部域换成 $\mathcal{K} = \mathbb{C} (\!(t)\!)$，
而 Galois 表示换成 $D^\times$ 上的 $G^\vee$-局部系。

这一对应是某种更加范畴化的对应，即某种 [[$(\infty, 2)$-范畴]]的等价：
其自守侧的对象应该是带有 $G (\mathcal{K})$ 作用的范畴，
而谱侧的对象则应该是局部系的模叠
$\mathrm{LocSys}_{G^\vee} (D^\times)$ 上的[[范畴层]]。
这一对应的精确表述仍在发展之中。

在上述一般版本中，通过提取某些 [[$(\infty, 1)$-范畴]]的不变量，能得到较为具体的陈述。
例如，$G (\mathcal{O})$-不变的部分就是几何 Satake 等价；
对 [[Iwahori 子群]] $I$，Bezrukavnikov [@Bezrukavnikov2016] 证明，
$I \backslash G (\mathcal{K}) / I$ 上的层范畴等价于导出 [[Steinberg 簇]]的商叠
$\widetilde{\mathcal{N}} / G^\vee \times_{\mathfrak{g}^\vee / G^\vee} \widetilde{\mathcal{N}} / G^\vee$
上的凝聚层范畴，
其中 $\widetilde{\mathcal{N}} \to \mathfrak{g}^\vee$ 是 [[Springer 消解]]。
这与导出 Satake 等价恰好平行，
并[[范畴化]]了[[仿射 Hecke 代数]]的两种几何实现之间的同构。

### 量子几何 Langlands 对应

**[[量子几何 Langlands 对应]]**是 de Rham 几何 Langlands 对应的一种量子化。
上面的 Dolbeault 版本中提到，D-模取经典极限后得到凝聚层；
在这里则是反过来，在 de Rham 版本中将凝聚层换成 D-模，
得到更对称的表述
\[
\mathsf{DMod}_\kappa (\mathrm{Bun}_G)
\simeq
\mathsf{DMod}_{-1/\kappa} (\mathrm{Bun}_{G^\vee}) ,
\]
其中两侧都是[[扭转 D-模]]。
这里，$\kappa$ 是 $G$ 的 Lie 代数 $\mathfrak{g}$ 上的不变对称双线性型，称为[[水平]]，
并约定 $\kappa = 0$ 对应于[[临界水平]]；
对非退化的 $\kappa$，
$1/\kappa$ 是由 $\kappa$ 通过 [[Cartan 子代数]]的对偶得到的 $\mathfrak{g}^\vee$ 上的水平
[@Stoyanovsky2006; @Gaitsgory2016]。
当 $\kappa \to 0$ 时，左边趋于上文的自守侧，而右边的水平趋于无穷，
此时扭转 D-模可以理解为退化成 $\mathrm{LocSys}_{G^\vee}$ 上的拟凝聚层，
这样就回到了通常的几何 Langlands 对应。

量子几何 Langlands 对应也有一些局部版本，
包括 Feigin 与 Frenkel 发现的 [[W 代数]]的对偶
$\mathcal{W}_\kappa (\mathfrak{g}) \simeq \mathcal{W}_{1/\kappa} (\mathfrak{g}^\vee)$，
以及[[量子几何 Satake 等价]]，后者与[[量子群]]的表示相联系。

### 带分歧的对应

在上文的几何 Langlands 对应中，若允许局部系在有限个点处有奇点，
并在自守侧给主丛在这些点处加上[[水平结构]]，
就得到带分歧的版本，它也与局部几何 Langlands 对应相联系。
见 [@HeinlothNgoYun2013] 的讨论，
文中在射影直线上构造了在 $0$ 处有 Iwahori 水平结构、在 $\infty$ 处有野分歧的 Hecke 特征层。

### 相对 Langlands 对偶

**[[相对 Langlands 对偶]]**由
Ben-Zvi、Sakellaridis 与 Venkatesh [@BenZviSakellaridisVenkatesh2024] 提出。
大致而言，它将 $G$ 与 $G^\vee$ 的对偶推广到带 $G$ 作用的某类 [[Hamilton 空间]]
与带有 $G^\vee$ 作用的 Hamilton 空间之间的对偶。
从物理的观点看，它对应于四维规范场论的边界条件在[[电磁对偶]]下的对应，
因此也与[[三维镜像对称]]密切相关。


## 拓扑场论的观点

Kapustin 与 Witten [@KapustinWitten2007] 发现，
几何 Langlands 纲领可以从四维 $\mathcal{N} = 4$ [[超对称 Yang–Mills 理论]]得到。
这一理论具有[[电磁对偶]]：
[[规范群]]为 $G$ 的理论与规范群为 $G^\vee$ 的理论等价，
同时[[耦合常数]] $\tau$（在适当的规范化下）变为 $-1/\tau$。
经过适当的[[拓扑扭转]]，该理论成为一族四维[[拓扑量子场论]]。
在四维流形 $\Sigma \times X$ 上，当 $X$ 很小时，
这一理论化为二维的 [[$\sigma$ 模型]]，其目标空间是 $X$ 上 Higgs 丛的模空间。
从而，电磁对偶成为 $G$ 与 $G^\vee$ 的 Higgs 丛模空间之间的[[镜像对称]]：
[[A 模型]]的[[膜]]对应于 $\mathrm{Bun}_G$ 上的 D-模，
而 [[B 模型]]的膜对应于 $\mathrm{LocSys}_{G^\vee}$ 上的凝聚层。
在这一观点下，Hecke 函子对应于 [['t Hooft 线算子]]，
与谱侧在 $E$ 处的纤维为 $(E_V)_x$ 的向量丛做张量积是 [[Wilson 线算子]]，
而电磁对偶将二者互换。

Ben-Zvi 与 Nadler [@BenZviNadler2018] 指出，
Betti 版本应当延拓为两个四维拓扑量子场论之间的等价。
该场论对不同维数的流形给出不同[[范畴层级]]的对象，
它们对应于几何 Langlands 纲领的不同版本：

- 对[[圆周]] $S^1$，它给出一个 [[$(\infty, 2)$-范畴|$2$-范畴]]，
  即局部几何 Langlands 对应中的 $2$-范畴。

- 对[[闭曲面]] $X$，它给出一个范畴，即整体几何 Langlands 对应的两侧。

  - 对二维[[球面]] $S^2$，它给出[[线算子]]构成的范畴，
    即几何 Satake 等价中的球 Hecke 范畴。
    注意到 $S^2$ 由两个圆盘沿圆周粘合而成，
    这也是[[双原点形式圆盘]]理应具有的同伦型。
    $S^2$ 上的 $G^\vee$-局部系的导出模叠是
    $\mathfrak{g}^\vee [-1] / G^\vee$，
    这也恰好出现在导出 Satake 等价中。

- 对闭的三维流形，它给出一个向量空间。

在量子的 Betti 版本中，
Ben-Zvi--Gunningham--Jordan--Safronov
猜测 [@Jordan2023]，
闭三维流形 $M$ 对应的向量空间应当是其[[拆接模]]，
这是[[量子群表示范畴]] $\mathsf{Rep}_q (G)$ 在 $M$ 上的某种积分，即某种高阶 [[Hochschild 同调]]。
由此能够陈述关于拆接模的 Langlands 对偶猜想。

## 参考文献

综述与讲义：

```bibliography
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

Zhu2017:
  type: incollection
  author: Xinwen Zhu
  title: An introduction to affine Grassmannians and the geometric Satake equivalence
  booktitle: Geometry of Moduli Spaces and Representation Theory
  series: IAS/Park City Mathematics Series
  volume: 24
  publisher: American Mathematical Society
  year: 2017
  pages: 59--154
  doi: '10.1090/pcms/024/02'
  arxiv: '1603.05593'
```

整体几何 Langlands 对应：

```bibliography
ArinkinGaitsgory2015:
  type: article
  author: [Dima Arinkin, Dennis Gaitsgory]
  title: Singular support of coherent sheaves and the geometric Langlands conjecture
  journaltitle: Selecta Mathematica (New Series)
  volume: 21
  number: 1
  year: 2015
  pages: 1--199
  doi: '10.1007/s00029-014-0167-5'
  arxiv: '1201.6343'

GLC1:
  type: preprint
  label: GLC I
  author: [Dennis Gaitsgory, Sam Raskin]
  title: 'Proof of the geometric Langlands conjecture I: construction of the functor'
  arxiv: '2405.03599'

GLC2:
  type: preprint
  label: GLC II
  author: [Dima Arinkin, Dario Beraldo, Justin Campbell, Lin Chen, Joakim Færgeman, Dennis Gaitsgory, Kevin Lin, Sam Raskin, Nick Rozenblyum]
  title: 'Proof of the geometric Langlands conjecture II: Kac–Moody localization and the FLE'
  arxiv: '2405.03648'

GLC3:
  type: preprint
  label: GLC III
  author: [Justin Campbell, Lin Chen, Joakim Færgeman, Dennis Gaitsgory, Kevin Lin, Sam Raskin, Nick Rozenblyum]
  title: 'Proof of the geometric Langlands conjecture III: compatibility with parabolic induction'
  arxiv: '2409.07051'

GLC4:
  type: preprint
  label: GLC IV
  author: [Dima Arinkin, Dario Beraldo, Lin Chen, Joakim Færgeman, Dennis Gaitsgory, Kevin Lin, Sam Raskin, Nick Rozenblyum]
  title: 'Proof of the geometric Langlands conjecture IV: ambidexterity'
  arxiv: '2409.08670'

GLC5:
  type: preprint
  label: GLC V
  author: [Dennis Gaitsgory, Sam Raskin]
  title: 'Proof of the geometric Langlands conjecture V: the multiplicity one theorem'
  arxiv: '2409.09856'
```

几何 Satake 等价：

```bibliography
Lusztig1983:
  type: article
  author: George Lusztig
  title: 'Singularities, character formulas, and a $q$-analog of weight multiplicities'
  journaltitle: Astérisque
  volume: 101--102
  year: 1983
  pages: 208--229
  zbmath: '0561.22013'

Ginzburg1995:
  type: preprint
  author: Victor Ginzburg
  title: Perverse sheaves on a loop group and Langlands' duality
  arxiv: 'alg-geom/9511007'

MirkovicVilonen2007:
  type: article
  author: [Ivan Mirković, Kari Vilonen]
  title: Geometric Langlands duality and representations of algebraic groups over commutative rings
  journaltitle: Annals of Mathematics
  volume: 166
  number: 1
  year: 2007
  pages: 95--143
  doi: '10.4007/annals.2007.166.95'
  arxiv: 'math/0401222'

BezrukavnikovFinkelberg2008:
  type: article
  author: [Roman Bezrukavnikov, Michael Finkelberg]
  title: Equivariant Satake category and Kostant–Whittaker reduction
  journaltitle: Moscow Mathematical Journal
  volume: 8
  year: 2008
  pages: 39--72
  arxiv: '0707.3799'

```

Betti、Dolbeault 与其他层论的版本：

```bibliography
HauselThaddeus2003:
  type: article
  author: [Tamás Hausel, Michael Thaddeus]
  title: Mirror symmetry, Langlands duality, and the Hitchin system
  journaltitle: Inventiones Mathematicae
  volume: 153
  number: 1
  year: 2003
  pages: 197--229
  doi: '10.1007/s00222-003-0286-7'
  arxiv: 'math/0205236'

DonagiPantev2012:
  type: article
  author: [Ron Donagi, Tony Pantev]
  title: Langlands duality for Hitchin systems
  journaltitle: Inventiones Mathematicae
  volume: 189
  number: 3
  year: 2012
  pages: 653--735
  doi: '10.1007/s00222-012-0373-8'
  arxiv: 'math/0604617'

PadurariuToda2025:
  type: preprint
  author: [Tudor Pădurariu, Yukinobu Toda]
  title: The Dolbeault geometric Langlands conjecture via limit categories
  arxiv: '2508.19624'

BenZviNadler2018:
  type: incollection
  author: [David Ben-Zvi, David Nadler]
  title: Betti geometric Langlands
  booktitle: 'Algebraic Geometry: Salt Lake City 2015'
  series: Proceedings of Symposia in Pure Mathematics
  volume: '97.2'
  publisher: American Mathematical Society
  year: 2018
  pages: 3--41
  doi: '10.1090/pspum/097.2/01698'
  arxiv: '1606.08523'

AGKRRV2020:
  type: preprint
  author: [Dima Arinkin, Dennis Gaitsgory, David Kazhdan, Sam Raskin, Nick Rozenblyum, Yakov Varshavsky]
  title: The stack of local systems with restricted variation and geometric Langlands theory with nilpotent singular support
  arxiv: '2010.01906'
```

局部、量子与其他变体：

```bibliography
Stoyanovsky2006:
  type: preprint
  author: A. V. Stoyanovsky
  title: Quantum Langlands duality and conformal field theory
  arxiv: 'math/0610974'

HeinlothNgoYun2013:
  type: article
  author: [Jochen Heinloth, Bao Châu Ngô, Zhiwei Yun]
  title: Kloosterman sheaves for reductive groups
  journaltitle: Annals of Mathematics
  volume: 177
  number: 1
  year: 2013
  pages: 241--310
  doi: '10.4007/annals.2013.177.1.5'

Bezrukavnikov2016:
  type: article
  author: Roman Bezrukavnikov
  title: On two geometric realizations of an affine Hecke algebra
  journaltitle: Publications mathématiques de l'IHÉS
  volume: 123
  year: 2016
  pages: 1--67
  doi: '10.1007/s10240-015-0077-x'
  arxiv: '1209.0403'

Gaitsgory2016:
  type: preprint
  author: Dennis Gaitsgory
  title: Quantum Langlands correspondence
  arxiv: '1601.05279'

BenZviSakellaridisVenkatesh2024:
  type: preprint
  author: [David Ben-Zvi, Yiannis Sakellaridis, Akshay Venkatesh]
  title: Relative Langlands duality
  arxiv: '2409.04677'
```

拓扑场论：

```bibliography
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

Jordan2023:
  type: preprint
  author: David Jordan
  title: Langlands duality for skein modules of 3-manifolds
  arxiv: '2302.14734'
```

```terms
几何 Langlands 纲领:
  en: geometric Langlands program
  fr: programme de Langlands géométrique :m
  de: geometrisches Langlands-Programm :n
  ja: 幾<き>何<か>学<がく>的<てき> Langlands プログラム
  ko: 기하학적 Langlands 프로그램 (幾何學的 Langlands program)
几何 Langlands 对应:
  en: geometric Langlands correspondence
  fr: correspondance de Langlands géométrique :f
  ja: 幾<き>何<か>学<がく>的<てき> Langlands 対<たい>応<おう>
  ko: 기하학적 Langlands 대응 (幾何學的 Langlands 對應)
自守侧:
  en: automorphic side
  fr: côté automorphe :m
  ja: 保<ほ>型<けい>側<がわ>
谱侧:
  en: [spectral side, Galois side]
  fr: côté galoisien :m
  ja: Galois 側<がわ>
球 Hecke 范畴:
  en: spherical Hecke category
```
