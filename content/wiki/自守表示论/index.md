---
title: 自守表示论
categories: [自守表示论]
navboxes: [自守表示论]
---

<problems>
- @thm:arthur-mok 依赖若干在 [@Arthur2013] 与 [@Mok2015] 出版时尚未证明的结果。
  据 Atobe、颜维德、Ichino、Kaletha、Mínguez、Shin 的工作
  （[arXiv:2410.13504](https://arxiv.org/abs/2410.13504)），
  它目前仍以扭转加权基本引理为前提。应在定理中注明这一点，并补充相应的文献。
</problems>

**自守表示论**是[[数论]]的分支，研究[[约化群]]上的[[自守形式]]，
以及这些函数在群的平移作用下构成的[[自守表示]]。
它推广了经典的[[模形式]]与 [[Hecke 特征标]]的理论。

大致来说，自守表示论是算术商空间上的调和分析。
在 [[Fourier 级数|Fourier 分析]]中，圆周 $\mathbb{R} / \mathbb{Z}$ 上的函数可以分解为
特征标 $x \mapsto \mathrm{e}^{2 \pi \mathrm{i} n x}$ 的叠加，
这些特征标就是平移作用的不可约表示。
类似地，设 $G$ 是[[数域]] $F$ 上的约化群，$\mathbb{A}_F$ 是 $F$ 的[[加元环]]，
则 $G (\mathbb{A}_F)$ 通过右平移作用于商空间 $G (F) \backslash G (\mathbb{A}_F)$ 上的函数，
而自守表示就是这一表示的不可约成分。
与圆周的情形不同，$G$ 一般不交换，因此这些成分一般不是一维的。

例如，[[模形式]]是上半平面上满足一定对称性的全纯函数，
它通过[[加元化]]可以看作
$\mathrm{GL}_2 (\mathbb{Q}) \backslash \mathrm{GL}_2 (\mathbb{A}_\mathbb{Q})$ 上的函数。
一个 Hecke 特征[[新形式]]生成 $\mathrm{GL}_2 (\mathbb{A}_\mathbb{Q})$ 的不可约自守表示 $\pi$，
它分解为无穷处的分量 $\pi_\infty$ 与各个素数 $p$ 处的局部分量 $\pi_p$ 的张量积：
$\pi_\infty$ 记录模形式的权，
而对不整除水平的素数 $p$，$\pi_p$ 由 [[Hecke 算子]] $T_p$ 的特征值决定。
这样，Hecke 特征值这类算术信息就变成了局部群 $\mathrm{GL}_2 (\mathbb{Q}_p)$ 的表示论问题。

自守表示论的核心问题来自 [[Langlands 纲领]]。
由自守表示的局部分量可以构造[[自守 $L$ 函数|$L$ 函数]]，
而 Langlands 纲领预言，这些 $L$ 函数与 [[Galois 表示]]的 $L$ 函数相同；
不同群的自守表示之间也应有相应的联系，即 [[Langlands 函子性]]。

## 研究对象

自守表示论的基本对象是算术商空间上的函数，以及群在这些函数上的平移作用。
设 $F$ 是[[数域]]，$G$ 是 $F$ 上的连通约化群，$\mathbb{A}_F$ 是 $F$ 的[[加元环]]。
记
\[
[G] = G (F) \backslash G (\mathbb{A}_F) .
\]
$[G]$ 上的函数就是 $G (\mathbb{A}_F)$ 上左 $G (F)$-不变的函数：
左不变性表达整体的算术条件，
而 $G (\mathbb{A}_F)$ 的各个分量来自 $F$ 在各个[[位点]]的[[完备化 (拓扑学)|完备化]]。
群 $G (\mathbb{A}_F)$ 通过右平移
\[
(R (h) \varphi) (g) = \varphi (g h)
\]
作用于 $[G]$ 上的函数。

### 自守形式与自守表示

$[G]$ 上的函数太多，难以直接分解。
为了用表示论研究它们，需要加上光滑性、增长性与有限性条件。
记 $\mathbb{A}_{F, \mathrm{f}}$ 为 $F$ 的有限加元环，即加元环中有限位点的部分，
并记 $\mathfrak{g}_\infty$ 为 $G (F \otimes_\mathbb{Q} \mathbb{R})$ 的复化 Lie 代数。

::: definition [自守形式]
固定 $G (F \otimes_\mathbb{Q} \mathbb{R})$ 的[[极大紧子群]] $K_\infty$。
$[G]$ 上的复值函数 $\varphi$ 称为**自守形式**，如果：

- $\varphi$ 在无穷位点处[[光滑函数|光滑]]，
  并且对某个[[紧开子群]] $K_\mathrm{f} \subset G (\mathbb{A}_{F, \mathrm{f}})$ 右不变；

- $\varphi$ 是 $K_\infty$-有限的，即右平移 $R (k) \varphi$（$k \in K_\infty$）张成有限维空间；

- $\varphi$ 在 $\mathfrak{g}_\infty$ 的[[泛包络代数]]的中心作用下生成有限维空间；

- $\varphi$ [[缓增长]]。

记自守形式空间为 $\mathcal{A} (G)$。
:::

::: definition [自守表示]
**自守表示**是指 $\mathcal{A} (G)$ 的不可约[[容许表示|容许]][[子商表示|子商]]，
这里的子商在 $(\mathfrak{g}_\infty, K_\infty) \times G (\mathbb{A}_{F, \mathrm{f}})$-模的范畴中取
[@GetzHahn2024, 第 4、6 章]。
:::

这里的 $(\mathfrak{g}_\infty, K_\infty) \times G (\mathbb{A}_{F, \mathrm{f}})$-模类似于
$G (\mathbb{A}_F)$ 的表示，
只是在无穷位点处，把[[实约化群表示论|实约化群的表示]]换成了相应的
[[$(\mathfrak{g}, K)$-模]]。
这是因为 $K_\infty$-有限的函数在 $G (F \otimes_\mathbb{Q} \mathbb{R})$ 的平移下一般不再
$K_\infty$-有限，
所以 $\mathcal{A} (G)$ 在无穷位点处只保留 $\mathfrak{g}_\infty$ 与 $K_\infty$ 的作用。

下面是两个最基本的例子。

::: example [乘法群]
设 $F$ 是数域，$G = \mathbb{G}_\mathrm{m}$。
此时 $[G]$ 是[[理元类群]] $F^\times \backslash \mathbb{A}_F^\times$，
自守表示都是一维的，恰好对应于 $F^\times \backslash \mathbb{A}_F^\times$ 的连续特征标，
即 [[Hecke 特征标]]。
它们的 $L$ 函数由 [[Tate 论题]]研究。
:::

::: example [模形式]
设 $f$ 是 $\Gamma_0 (N)$ 的权 $k \geq 2$ 的[[尖点形式|尖点]] Hecke 特征[[新形式]]。
经[[加元化]]，$f$ 给出 $\mathrm{GL}_2 (\mathbb{A}_\mathbb{Q})$ 上的尖点自守形式，
它生成尖点自守表示 $\pi_f$。
$\pi_f$ 的无穷位点分量记录权，是权 $k$ 的[[离散系列表示]]，
而对不整除 $N$ 的素数 $p$，其 $p$ 进分量是由 Hecke 特征值 $a_p$ 决定的[[非分歧表示]]。
[[Maaß 形式|Maaß 尖点形式]]也有类似的表示论解释
[@Bump1997, 第 2、3 章]。
:::

### 平方可积谱与尖点谱

自守形式空间 $\mathcal{A} (G)$ 上没有自然的内积，因此难以像 Fourier 分析那样分解。
为了使用 [[Hilbert 空间]]的方法，可以改为考虑平方可积的函数，
其上的右平移是[[酉表示]]。
不过 $[G]$ 的体积可能是无穷的：
例如 $G = \mathrm{GL}_n$ 时，中心的商 $F^\times \backslash \mathbb{A}_F^\times$ 不紧，
所以需要先固定中心的作用。
设 $Z$ 是 $G$ 的[[中心]]，
$\omega$ 是 $Z (F) \backslash Z (\mathbb{A}_F)$ 的酉[[中心特征标|特征标]]。
记 $L^2_\omega ([G])$ 为满足
\[
\varphi (z g) = \omega (z) \varphi (g) ,
\qquad
\int_{Z (\mathbb{A}_F) G (F) \backslash G (\mathbb{A}_F)}
| \varphi (g) |^2 \, dg < \infty
\]
的可测函数按几乎处处相等取商所得的 Hilbert 空间。
右平移给出 $G (\mathbb{A}_F)$ 在其上的酉表示，
它的分解称为中心特征标 $\omega$ 下的**[[自守谱]]**。
一般的自守表示也可能来自不平方可积的自守形式，例如 [[Eisenstein 级数]]。

$L^2_\omega ([G])$ 中最基本的部分由尖点形式组成。
对模形式，尖点形式是在每个尖点处的 Fourier 展开中常数项为零的模形式。
对一般的群，Fourier 展开的常数项换成沿[[抛物子群]]的幺幂根的积分：

::: definition [尖点条件]
设 $P = M N$ 是 $G$ 的真 $F$-抛物子群，
其中 $N$ 是 $P$ 的[[幺幂根]]，$M$ 是 [[Levi 子群]]。
对自守形式 $\varphi$，称
\[
\varphi_P (g) =
\int_{N (F) \backslash N (\mathbb{A}_F)} \varphi (n g) \, dn
\]
为 $\varphi$ 沿 $P$ 的**[[常数项（自守形式）|常数项]]**。
若对每个真 $F$-抛物子群 $P$，均有 $\varphi_P = 0$，
则称 $\varphi$ 为**[[尖点自守形式]]**。
:::

这一条件是说函数在各个有理抛物方向上都没有常数项。
中心特征标为 $\omega$ 的尖点自守形式在 $L^2_\omega ([G])$ 中的闭包记为
$L^2_{\mathrm{cusp}, \omega} ([G])$，
它分解为不可约酉表示的 Hilbert 直和，
其中的不可约成分称为**[[尖点自守表示]]**。
尖点谱以外的部分由 Eisenstein 级数及其留数给出，见 @thm:spectral。

## 分支与方法

自守表示论的各个分支大致围绕三个问题：
自守表示如何由局部分量组成，
哪些表示以多大的重数出现在自守谱中，
以及如何从自守表示得到 $L$ 函数与 Galois 表示。
最后三节介绍的 $\theta$ 对应、自守周期与几何方法，
则是构造和研究自守表示的几种工具。

### 局部分量与整体化

<see>[[$p$ 进约化群表示论]]、[[实约化群表示论]]</see>

如引言所述，自守表示可以分解为各个位点处的局部分量。
下面的定理说明，这对一般的约化群都成立，并且局部分量由自守表示唯一决定：

::: theorem [Flath 张量积分解]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，$\pi$ 是 $G$ 的自守表示。则
\[
\pi \simeq \pi_\infty \otimes \mathop{\bigotimes\nolimits'}\limits_{v \nmid \infty} \pi_v ,
\]
其中 $\pi_\infty$ 是无穷位点处的不可约容许 [[$(\mathfrak{g}, K)$-模]]，
$\pi_v$ 是 $G (F_v)$ 的不可约光滑容许表示。
固定 $G$ 的整模型后，几乎所有有限位点 $v$ 处的 $\pi_v$ 都是[[非分歧表示]]，
即有在 $G (\mathcal{O}_v)$ 下不变的非零向量，称为球向量；
[[限制张量积]]是相对于这些球向量取的。
局部分量 $\pi_v$ 的同构类由 $\pi$ 唯一决定 [@Flath1979]。
:::

因此，自守表示的局部分量是 [[$p$ 进约化群]]与[[实约化群]]的表示，
它们属于局部理论，见相应条目。

反过来，也可以问哪些局部表示能拼成自守表示。
若只预先指定有限个位点处的分量，则有以下[[自守表示的整体化|整体化]]结果。
它大致是说，有限个位点处任意给定的[[超尖点表示]]
都可以同时实现为某个尖点自守表示的局部分量：

::: theorem [超尖点表示的整体化]
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，$Z = Z (G)^\circ$ 是其中心的单位连通分支，
$\omega$ 是 $Z (F) \backslash Z (\mathbb{A}_F)$ 的酉特征标。
设 $S$ 是由有限位点组成的非空有限集；
对每个 $v \in S$，给定 $G (F_v)$ 的不可约超尖点表示 $\pi_v$，
其在 $Z (F_v)$ 上的作用由 $\omega_v$ 给出。
则存在尖点自守表示 $\Pi$，使得对所有 $v \in S$，均有 $\Pi_v \simeq \pi_v$，
且 $Z (\mathbb{A}_F)$ 在 $\Pi$ 上通过 $\omega$ 作用
[@PrasadSchulzePillot2008, 定理 4.1]。
:::

这一定理对其余位点处的分量不作控制。
若要预先指定所有位点处的分量，则还需要整体的相容条件：
即使几乎所有分量都非分歧，局部表示的限制张量积一般也不是自守表示。
对一般线性群，[[自守逆定理]]用一族扭曲 $L$ 函数的解析性质给出自守性的充分条件
[@Cogdell2007, 第 5 节]；
对已完成谱分类的典型群，
可以用整体 Arthur 参数和重数公式判断这样的表示是否出现在离散自守谱中
[@Arthur2013; @Mok2015]。

### 自守谱与迹公式

如前所述，$L^2_\omega ([G])$ 中除了尖点谱，还有 Eisenstein 级数贡献的部分。
[[Eisenstein 级数]]从 Levi 子群上的自守形式出发，
通过对 $P (F) \backslash G (F)$ 求和构造 $G$ 上的自守形式。
Langlands 证明了，尖点谱以外的部分都可以由 Eisenstein 级数描述，
从而把 $G$ 的谱分解归结为其 Levi 子群的离散谱：

::: theorem [Langlands 谱分解] {@thm:spectral}
设 $F$ 是数域，$G$ 是 $F$ 上的连通约化群，$\omega$ 是酉中心特征标。则有正交分解
\[
L^2_\omega ([G])
= L^2_{\mathrm{disc}, \omega} ([G])
\oplus L^2_{\mathrm{cont}, \omega} ([G]) .
\]
离散部分是不可约酉表示的 Hilbert 直和，各表示的重数有限；
尖点部分包含于离散部分。
连续部分由 Levi 子群的离散自守数据所构造的 Eisenstein 级数给出，
离散部分中与尖点谱正交的[[剩余自守谱|剩余谱]]由 Eisenstein 级数的留数构造
[@Langlands1976; @Arthur2005, 第 7 节]。
:::

对离散谱，还要确定哪些表示出现，以及出现的重数。
对一般线性群，答案最为简单：
下面的定理说明，尖点自守表示由几乎所有局部分量决定，并且在尖点谱中只出现一次。

::: theorem [重数一与强重数一]
设 $F$ 是数域，$\pi$、$\pi'$ 是 $\mathrm{GL}_n (\mathbb{A}_F)$ 的不可约尖点自守表示。
若对几乎所有位点 $v$，均有 $\pi_v \simeq \pi'_v$，则 $\pi \simeq \pi'$。
此外，每个不可约尖点自守表示在尖点谱中出现的重数为 $1$
[@Cogdell2007, 第 1.2–1.3 节]。
:::

前一句是[[强重数一定理]]，后一句通常称为[[重数一定理]]。

对一般的群，局部分量几乎处处同构的表示可能有好几个，
其中有的出现在离散谱中，有的不出现，出现时重数也可能大于 $1$。
Arthur 猜想，离散谱中的表示按整体 [[Arthur 参数]]分为若干 [[Arthur 包]]，
包中哪些表示以多大的重数出现，由 [[Arthur 重数公式]]给出。
对典型群，这已由 Arthur 与 Mok 证明：

::: theorem [Arthur–Mok 离散谱分类] {@thm:arthur-mok}
设 $F$ 是数域，$G$ 是 $F$ 上的分裂[[辛群]] $\mathrm{Sp}_{2n}$、
分裂[[特殊正交群]] $\mathrm{SO}_{2n+1}$，
或相对于二次扩张 $E / F$ 的[[拟分裂群|拟分裂]][[酉群]]。
则 $G$ 的离散自守谱按整体 Arthur 参数分解为 Arthur 包，
包中各表示的出现及重数由 Arthur 重数公式决定
[@Arthur2013; @Mok2015]。
:::

这一分类的证明用到 [[Arthur–Selberg 迹公式]]。
迹公式说明同一分布有两种展开，二者相等：
谱展开涉及自守表示及[[交织算子]]，几何展开涉及共轭类及[[轨道积分]]。
比较不同群的迹公式，是研究[[内窥]]、谱分类和自守提升的主要方法
[@Arthur2005]。

### $L$ 函数与函子性

自守表示的局部分量可以组成 [[Euler 乘积]]。
设 $\pi$ 是 $G$ 的自守表示，$r$ 是 $G$ 的 [[Langlands 对偶群|$L$ 群]]的有限维表示。
在 $\pi_v$ 非分歧的有限位点 $v$ 处，
[[Satake 同构]]给出 $L$ 群中的半单共轭类 $A_v$，称为 $\pi_v$ 的 **Satake 参数**。
由此定义局部因子
\[
L (s, \pi_v, r) = \det \bigl( 1 - r (A_v) \, q_v^{-s} \bigr)^{-1} ,
\]
其中 $q_v$ 是 $F_v$ 的剩余域的元素个数。
这些局部因子（在其余位点处适当定义）的乘积就是[[自守 $L$ 函数]] $L (s, \pi, r)$，
它推广了 Hecke 特征标与模形式的 $L$ 函数。
它的[[解析延拓]]、[[函数方程]]、零点、特殊值及增长是这一分支的主要问题，
研究方法包括 [[Rankin–Selberg 方法]]、[[Langlands–Shahidi 方法]]及其他积分表示。

对一般线性群的标准表示，Godement 与 Jacquet 证明了这些 $L$ 函数有良好的解析性质：

::: theorem [Godement–Jacquet：标准 $L$ 函数]
设 $F$ 是数域，$n \geq 2$，
$\pi$ 是 $\mathrm{GL}_n (\mathbb{A}_F)$ 的不可约酉尖点自守表示。
则包含无穷位点因子的 $L$ 函数
\[
\Lambda (s, \pi) = \prod_v L (s, \pi_v)
\]
可以延拓为[[整函数]]，并满足函数方程
\[
\Lambda (s, \pi) = \varepsilon (s, \pi) \, \Lambda (1 - s, \pi^\vee) ,
\]
其中 $\pi^\vee$ 是[[对偶表示]]，
$\varepsilon (s, \pi)$ 是相应的[[$\varepsilon$ 因子|整体 $\varepsilon$ 因子]]
[@GodementJacquet1972; @Cogdell2007, 第 4 节]。
:::

这里的条件不可省略。
例如，$\mathrm{GL}_1$ 的平凡表示给出完备化的 [[Dedekind $\zeta$ 函数]] $\Lambda_F (s)$，
它在 $s = 0$、$1$ 处有极点；
对 $n \geq 2$，$\mathrm{GL}_n (\mathbb{A}_F)$ 的平凡表示不是尖点表示，
它的 $L$ 函数是 $\prod_{i = 0}^{n - 1} \Lambda_F (s - (n - 1)/2 + i)$，同样有极点。
对一般的约化群和一般的表示 $r$，还没有这样统一的解析理论。

[[Langlands 函子性]]预言，$L$ 群之间的同态应当给出不同群的自守表示之间的对应，
称为**自守提升**，并且相应的局部参数和 $L$ 函数相容。
[[基变换（自守形式）|基变换]]、[[自守诱导]]和[[对称幂提升]]是其中重要的例子
[@Cogdell2007, 第 2、6 节]。
例如，对数域的扩张 $E / F$，基变换把 $\mathrm{GL}_n (\mathbb{A}_F)$ 的自守表示
提升为 $\mathrm{GL}_n (\mathbb{A}_E)$ 的自守表示，
在 Galois 侧对应于把 $\operatorname{Gal} (\overline{F} / F)$ 的表示限制到
$\operatorname{Gal} (\overline{F} / E)$。
下面的定理对素数次的循环扩张证明了它的存在：

::: theorem [Arthur–Clozel：循环基变换]
设 $E / F$ 是素数次的循环数域扩张，
$\pi$ 是 $\mathrm{GL}_n (\mathbb{A}_F)$ 的不可约尖点自守表示。
则存在 $\mathrm{GL}_n (\mathbb{A}_E)$ 的自守表示 $\operatorname{BC}_{E/F} (\pi)$，
它在几乎所有位点的局部参数由 $\pi$ 的局部参数限制到 $E$ 得到。
这一提升不一定保持尖点性 [@ArthurClozel1989]。
:::

### 整体 Langlands 纲领

<see>[[Langlands 纲领]]</see>

[[整体 Langlands 纲领]]希望用整体的参数描述整体域上的自守表示，
并要求整体参数与各个位点的局部 Langlands 对应相容。
对一般的约化群，还要描述每个参数对应的[[自守包]]，以及其中的表示在自守谱中的重数。

在数域上，满足适当代数性条件的自守表示应当对应于取值于 $L$ 群的 $\ell$ 进 Galois 表示，
这一猜想称为 [[Buzzard–Gee 猜想]]；
对一般的自守表示，则需要更广的整体参数
[@BuzzardGee2014]。
在函数域上，V. Lafforgue 对一般的分裂约化群
构造了从尖点自守形式到 Galois 参数的方向：

::: theorem [V. Lafforgue：整体参数分解]
设 $F$ 是有限域上光滑射影几何连通曲线的函数域，
$G$ 是 $F$ 上的分裂连通约化群，$\ell \neq \operatorname{char} F$ 是素数。
固定有限[[水平结构|水平]] $N$，以及处理中心非紧方向的适当[[局部紧群的格|格]] $\Xi$。
则相应的 $\overline{\mathbb{Q}}_\ell$ 系数尖点自守形式空间有典范的分解
\[
\mathcal{A}_\mathrm{cusp} (G, N, \Xi)
= \bigoplus_\sigma \mathcal{H}_\sigma ,
\]
其中各个 $\mathcal{H}_\sigma$ 在 Hecke 算子下稳定，
$\sigma$ 取遍连续、半单且在 $N$ 之外非分歧的整体参数
\[
\sigma \colon \operatorname{Gal} (\overline{F} / F) \longrightarrow
G^\vee (\overline{\mathbb{Q}}_\ell)
\]
的共轭类。
这些参数定义于 $\mathbb{Q}_\ell$ 的某个有限扩张，
并与非分歧位点处的 Hecke 特征值相容
[@VincentLafforgue2018, 主定理]。
:::

### 解析理论

这一分支把[[谱理论]]的思想用于自守表示，
研究 Hecke 特征值、自守形式及 $L$ 函数的大小，
以及自守表示随水平、权或谱参数变化时的分布。
其中的重要问题包括[[谱隙]]、[[Weyl 律|谱渐近]]、[[$L$ 函数的次凸性|次凸界]]与[[等分布]]。
这些问题也把自守形式与[[算术动力系统]]及[[遍历论]]联系起来
[@Sarnak2005; @MichelVenkatesh2007]。

例如，[[广义 Ramanujan 猜想]]预言尖点自守表示的局部分量都是缓增的，
这给出 Hecke 特征值的界。
对 $\Gamma_0 (N)$ 的权 $k$ 的 Hecke 特征新形式，
它就是 Ramanujan–Petersson 猜想 $| a_p | \leq 2 p^{(k - 1)/2}$（$p \nmid N$），
已由 Deligne 证明。

::: conjecture [广义 Ramanujan 猜想]
设 $F$ 是数域，$\pi$ 是 $\mathrm{GL}_n (\mathbb{A}_F)$ 的不可约酉尖点自守表示。
则对每个位点 $v$，局部分量 $\pi_v$ 都是[[缓增表示]] [@Sarnak2005, 第 1 节]。
:::

次凸性与等分布问题则进一步研究 $L$ 函数、自守周期及算术轨道的定量行为。

### $\theta$ 对应与 $\theta$ 提升

[[$\theta$ 对应]]是构造自守表示的一种具体方法，
它利用 [[Weil 表示]]把一个群的表示对应到另一个群的表示。
这里的两个群构成[[约化对偶对]]，即辛群中互为[[中心化子]]的一对约化子群，
例如[[辛群]]与[[正交群]]，或两个[[酉群]]。
Weil 表示是辛群的二重覆盖[[元辛群]]的表示，
因此在需要时，对偶对中的辛群要换成元辛群。

设 $(G, H)$ 是局部域上的约化对偶对，$\omega_\psi$ 是 Weil 表示。
对 $G$ 的不可约光滑表示 $\pi$，$\omega_\psi$ 的最大 $\pi$-[[等型商]]形如
$\pi \otimes \Theta (\pi)$，
其中 $\Theta (\pi)$ 是 $H$ 的光滑表示，称为 $\pi$ 的**大 $\theta$ 提升**；
$\Theta (\pi)$ 的最大[[半单表示|半单]]商 $\theta (\pi)$ 称为**小 $\theta$ 提升**。
下面的 Howe 对偶定理说明，小 $\theta$ 提升给出两个群的部分不可约表示之间的一一对应：

::: theorem [Howe 对偶]
设 $k$ 是特征不为 $2$ 的非 Archimedes 局部域，
$(G, H)$ 是 $k$ 上由辛群与正交群或由两个酉群组成的约化对偶对，
在需要时将辛群换成元辛群。
对 $G$ 的不可约光滑复表示 $\pi$，若 $\theta (\pi)$ 非零，则它不可约；
若 $\theta (\pi) \simeq \theta (\pi') \neq 0$，则 $\pi \simeq \pi'$
[@GanTakeda2016, 定理 1.2]。
:::

整体的 $\theta$ 提升利用 $\theta$ 核的积分，把一个群上的自守形式变成另一个群上的自守形式。
设 $(G, H)$ 是数域 $F$ 上的约化对偶对，$f$ 是 $G$ 上的尖点自守形式。
对 [[Schwartz–Bruhat 函数]] $\phi$，记 $\theta_\phi (g, h)$ 为相应的 $\theta$ 核，并令
\[
\theta_\phi (f) (h)
= \int_{G (F) \backslash G (\mathbb{A}_F)}
\theta_\phi (g, h) \, \overline{f (g)} \, dg .
\]
设 $\pi$ 是 $G$ 的尖点自守表示。
当 $f$ 取遍 $\pi$、$\phi$ 取遍 Schwartz–Bruhat 函数时，
这些函数 $\theta_\phi (f)$ 张成 $H$ 上的自守形式空间 $\Theta (\pi)$，
称为 $\pi$ 的**整体 $\theta$ 提升**。
这给出了构造自守表示的具体方法，也与函子性及 $L$ 函数特殊值相联系
[@Gan2022]。

$\Theta (\pi)$ 是否非零、是否由尖点形式组成，是这一构造的基本问题。
对 Witt 塔中的一列群，下面的定理大致是说，
沿着塔向上，整体 $\theta$ 提升最终非零，而第一个非零的提升是尖点的：

::: theorem [Rallis 塔性质]
设 $E / F$ 是数域的二次扩张，$V$ 是 $E$ 上带非退化 [[Hermite 型]]的有限维向量空间。
设 $W_r = W_0 \oplus \mathbb{H}^{\oplus r}$（$r \geq 0$）是斜 Hermite 空间的 [[Witt 塔]]，
其中 $W_0$ [[非迷向型|非迷向]]，$\mathbb{H}$ 是[[双曲斜 Hermite 平面|双曲平面]]，
并固定 $\theta$ 对应所需的加性特征标及分裂数据。
设 $\pi$ 是 $\mathrm{U} (V)$ 的尖点自守表示，
$\Theta_r (\pi)$ 是它到 $\mathrm{U} (W_r)$ 的整体 $\theta$ 提升。
则存在最小的 $r_0 \leq \dim V$，使得 $\Theta_{r_0} (\pi) \neq 0$，
并且 $\Theta_{r_0} (\pi)$ 由尖点自守形式组成；
对 $r > r_0$，$\Theta_r (\pi)$ 非零，且不全由尖点自守形式组成
[@Gan2022, 命题 3.2]。
:::

### 相对理论与自守周期

[[相对 Langlands 纲领|相对理论]]研究自守形式沿子群积分所得的[[自守周期]]，
以及局部表示上在子群下不变的线性泛函。
它希望把周期的非零性及大小与 $L$ 函数的特殊值联系起来，
典型的例子包括 [[颜–Gross–Prasad 猜想]]和 [[Ichino–Ikeda 公式]]。
[[相对迹公式]]是研究这些问题的主要工具，
而[[相对 Langlands 对偶]]为它们提供了统一的猜想框架
[@BenZviSakellaridisVenkatesh2024]。

下面的定理大致是说，在局部没有障碍时，
酉群上的整体周期非零当且仅当相应的中心 $L$ 值非零：

::: theorem [酉群周期与中心 $L$ 值]
设 $E / F$ 是数域的二次扩张，$W$ 是 $E$ 上的 $n$ 维非退化 Hermite 空间，
$V = W \oplus E e$，其中 $e$ 与 $W$ 正交，且 $\langle e, e \rangle = 1$。
令 $G = \mathrm{U} (W) \times \mathrm{U} (V)$，$H = \mathrm{U} (W)$ 对角地嵌入 $G$。
设 $\pi = \pi_n \boxtimes \pi_{n+1}$ 是 $G (\mathbb{A}_F)$ 的不可约尖点自守表示，
其局部分量处处缓增，
并设在每个位点 $v$ 处，局部周期
（即 $\pi_v$ 的矩阵系数在 $H (F_v)$ 上的规范化积分）不恒为零。
则整体周期
\[
P_H (f) = \int_{H (F) \backslash H (\mathbb{A}_F)} f (h, h) \, dh
\]
在 $\pi$ 上不恒为零，当且仅当
\[
L \Bigl( \frac{1}{2}, \operatorname{BC} (\pi_n) \times \operatorname{BC} (\pi_{n+1}) \Bigr)
\neq 0 ,
\]
其中 $\operatorname{BC}$ 表示到 $\mathrm{GL}_n (\mathbb{A}_E)$ 与
$\mathrm{GL}_{n+1} (\mathbb{A}_E)$ 的基变换。
:::

这一定理由酉群的 Ichino–Ikeda 公式 [@BCZ2022, 定理 1.1.6.1] 立即得到：
该公式把 $| P_H (f) |^2$ 写成上述中心 $L$ 值、一个非零常数与局部周期的乘积。
固定群与表示时，局部周期的条件不可省略；
若不固定，[[颜–Gross–Prasad 猜想]]断言，
中心 $L$ 值非零当且仅当在某一对相关的 Hermite 空间及相应的表示上，整体周期非零。

### 几何方法

自守表示也出现在[[局部对称空间]]与 [[Shimura 簇]]的[[上同调]]中。
这样，自守表示的问题可以用拓扑与代数几何的方法研究：
上同调上有 Hecke 算子的作用，
而 Shimura 簇定义在数域上，其[[平展上同调]]还带有 Galois 群的作用。
从 Shimura 簇的上同调中构造与自守表示对应的 [[Galois 表示]]，
是证明 Langlands 对应的一些情形的主要方法。

::: definition [尖点上同调]
设 $G$ 是 $\mathbb{Q}$ 上的连通半单群，$K_\infty \subset G (\mathbb{R})$ 是极大紧子群，
$K_\mathrm{f} \subset G (\mathbb{A}_{\mathbb{Q}, \mathrm{f}})$ 是充分小的紧开子群。
记
\[
S_K = G (\mathbb{Q}) \backslash G (\mathbb{A}_\mathbb{Q}) / (K_\infty K_\mathrm{f}) .
\]
它的每个连通分支形如 $\Gamma \backslash X$，
其中 $X = G (\mathbb{R}) / K_\infty$，$\Gamma$ 是[[算术子群]]。
设 $V$ 是 $G$ 的有限维复代数表示，
将它限制到各个连通分支的 $\Gamma$，得到 $S_K$ 上的[[局部系]] $\mathcal{V}$。
**尖点上同调**定义为
\[
H^q_\mathrm{cusp} (S_K, \mathcal{V})
\coloneqq H^q \bigl( \mathfrak{g}_\infty, K_\infty;
\mathcal{A}_\mathrm{cusp} (G)^{K_\mathrm{f}} \otimes V \bigr) ,
\]
其中 $\mathcal{A}_\mathrm{cusp} (G)$ 是尖点自守形式空间，
右侧为[[相对 Lie 代数上同调]]
[@GetzHahn2024, 第 15 章]。
:::

这相当于用以尖点自守形式为系数的微分形式组成复形，再取其上同调。
下面的定理说明，尖点上同调是上同调的一部分，并且按尖点自守表示分解：

::: theorem [Matsushima 公式与尖点上同调]
在上述设定下，尖点上同调自然地嵌入上同调
\[
H^q_\mathrm{cusp} (S_K, \mathcal{V}) \hookrightarrow H^q (S_K, \mathcal{V}) ,
\]
并有 Hecke 等变的分解
\[
H^q_\mathrm{cusp} (S_K, \mathcal{V})
\simeq \bigoplus_\pi
\Bigl( (\pi_\mathrm{f})^{K_\mathrm{f}} \otimes
H^q (\mathfrak{g}_\infty, K_\infty; \pi_\infty \otimes V) \Bigr)^{\oplus m (\pi)} ,
\]
其中 $\pi$ 取遍尖点自守表示的同构类，$m (\pi)$ 是 $\pi$ 在尖点谱中的重数。
若 $G$ 在 $\mathbb{Q}$ 上[[非迷向代数群|非迷向]]，则 $S_K$ 紧致，
上述嵌入是同构，即尖点上同调就是整个上同调
[@Matsushima1967; @GetzHahn2024, 第 15 章]。
:::

对模曲线，尖点上同调可以用模形式具体地描述，这就是 [[Eichler–Shimura 同构]]：

::: theorem [Eichler–Shimura 同构：模曲线情形]
设 $N \geq 1$，$X_0 (N)$ 是紧化的[[模曲线]]。
则有与 Hecke 作用相容的同构
\[
H^1 (X_0 (N) (\mathbb{C}), \mathbb{C})
\simeq S_2 (\Gamma_0 (N)) \oplus \overline{S_2 (\Gamma_0 (N))} ,
\]
其中 $S_2 (\Gamma_0 (N))$ 是权 $2$ 的尖点形式空间
[@Wiese2005, 定理 6.4]。
:::

Shimura 簇的上同调还带有 Galois 作用。
Shimura 簇 $\mathrm{Sh}_K$ 有定义在某个数域 $E$ 上的典范模型，
$E$ 称为它的[[反射域]]。
因此，对每个素数 $\ell$，其平展上同调
\[
H^q_\mathrm{ét} (\mathrm{Sh}_{K, \overline{E}}, \mathbb{Q}_\ell)
\]
带有[[绝对 Galois 群]] $\operatorname{Gal} (\overline{E} / E)$ 的连续作用，
并与 Hecke 作用交换
[@Milne2005; @GetzHahn2024, 第 15 章]。

## 参考文献

入门、自守形式与局部表示：

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
  note: 链接为作者的 2022 年公开稿；正文按正式版的章引用。

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

$\theta$ 对应与整体提升：

```bibliography
GanTakeda2016:
  type: article
  author: [颜维德, Shuichiro Takeda]
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
  author: 颜维德
  title: Automorphic Forms and the Theta Correspondence
  year: 2022
  url: 'https://swc-math.github.io/aws/2022/2022GanNotes.pdf'
```

相对理论与自守周期：

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
  year: 2024
  arxiv: '2409.04677'
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
