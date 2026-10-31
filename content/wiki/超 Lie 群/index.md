---
title: 超 Lie 群
aliases: [Lie 超群]
categories: [超几何, Lie 理论]
navboxes: [超几何]
---

在[[超几何]]中，**超 Lie 群**是[[超流形]]范畴中的[[群对象]]，
即带有乘法、单位元和取逆运算的光滑超流形，
这些运算是超流形态射并满足群公理。
它把 [[Lie 群]]的连续对称性扩展到奇方向；
与普通 Lie 理论的情形类似，单位元处的切超空间带有自然的括号，形成其[[超 Lie 代数]]。

例如，[[超向量空间]] $\mathbb{R}^{m|n}$ 对应的线性超流形通过加法构成超 Lie 群，
它的线性对称性由[[一般线性超群]] $\mathrm{GL}(m|n)$ 描述。
在物理中，[[超对称]]由超 Lie 群或[[超 Lie 代数]]来描述，
例如[[Poincaré 超代数]]就作用在[[Minkowski 超空间]]之上。

## 定义

### 群对象

记 $\mathrm{pt} = \mathbb{R}^{0|0}$ 为只有一个点且没有奇方向的超流形。

::: definition [超 Lie 群]
**超 Lie 群**是实光滑超流形 $G$，连同三个超流形态射
\[
\mu \colon G \times G \longrightarrow G,
\qquad e \colon \mathrm{pt} \longrightarrow G,
\qquad \iota \colon G \longrightarrow G,
\]
分别称为乘法、单位元与取逆，它们满足群公理：
\[
\begin{aligned}
  \mu \circ (\mu \times \operatorname{id})
  &= \mu \circ (\operatorname{id} \times \mu), \\
  \mu \circ (e \times \operatorname{id})
  &= \operatorname{id}
  = \mu \circ (\operatorname{id} \times e), \\
  \mu \circ (\iota, \operatorname{id})
  &= e \circ !
  = \mu \circ (\operatorname{id}, \iota) .
\end{aligned}
\]
其中 $! \colon G \to \mathrm{pt}$ 是唯一的态射，
第二行使用 $\mathrm{pt} \times G \simeq G \simeq G \times \mathrm{pt}$。
**超 Lie 群同态**是保持乘法、单位元和取逆的超流形态射。
:::

这里的公理是态射的等式，涉及结构层中的全部超函数，
不能仅在底层普通点上核对。
例如，任何奇超函数在普通点处的值均为零，
所以普通点无法区分是否存在奇方向。
群对象定义及其点函子表述见 [@CastonFioresi2007, 第 3.4 节]。

## 例子

以下例子中，$A$ 是有限生成的实 Graßmann 代数，
即有限维实向量空间的[[外代数]]，它是[[超交换代数]]。
$G$ 的 **$A$ 点**指从函数代数为 $A$ 的纯奇超流形到 $G$ 的态射；
群运算使这些点组成普通群。
在局部坐标中，偶坐标取值于 $A_{\bar{0}}$，奇坐标取值于 $A_{\bar{1}}$。

::: example [普通 Lie 群]
普通实 Lie 群 $H$ 连同其光滑函数层 $C^\infty_H$
是奇维数为零的超 Lie 群。
其超 Lie 代数的奇部为零，偶部就是通常的 $\operatorname{Lie} (H)$。
:::

::: example [加法超 Lie 群]
在仿射超流形 $\mathbb{R}^{p|q}$ 上，按坐标相加定义乘法：
\[
(x, \theta) + (y, \eta) = (x + y, \theta + \eta) .
\]
单位元为 $(0, 0)$，逆元为 $(-x, -\theta)$。
这给出交换的超 Lie 群，其超 Lie 代数为括号恒零的
[[超向量空间]] $\mathbb{R}^{p|q}$。
特别地，$\mathbb{R}^{0|1}$ 的底层只有一个点，但它不是平凡超 Lie 群。
:::

::: example [一般线性超群]
设 $m$、$n$ 为非负整数。
**一般线性超群** $\mathrm{GL}(m|n)$ 的 $A$ 点是自由超模
$A^{m|n}$ 的可逆偶 $A$-线性变换。
选定偶、奇基后，将它们写成分块矩阵
\[
\begin{pmatrix}
  a & b \\
  c & d
\end{pmatrix},
\qquad
a \in M_m (A_{\bar{0}}), \quad d \in M_n (A_{\bar{0}}),
\quad b \in M_{m \times n} (A_{\bar{1}}),
\quad c \in M_{n \times m} (A_{\bar{1}}) .
\]
对 Graßmann 代数 $A$，可逆性等价于 $a$、$d$ 都可逆，
乘法采用通常的矩阵乘法，并在系数相乘时遵守超交换规则。
这个点函子由超维数为 $(m^2 + n^2)|2mn$ 的实光滑超流形表示，
其底层普通群为
$\mathrm{GL}_m (\mathbb{R}) \times \mathrm{GL}_n (\mathbb{R})$。
其超 Lie 代数为 $\mathfrak{gl}(m|n)$
[@CastonFioresi2007, 第 3.4 节，例 3.4.3]。
:::

::: example [一个二步幂零超 Lie 群]
在 $\mathbb{R}^{1|1}$ 的 $A$ 点上，规定
\[
(t, \theta)(u, \eta)
= (t + u + \theta \eta, \theta + \eta) .
\]
单位元为 $(0, 0)$，逆元为 $(-t, -\theta)$。
双线性项使乘法满足结合律，但交换两个因子时
$\eta \theta = -\theta \eta$，所以这个超 Lie 群不交换。
其底层普通群仍是 $(\mathbb{R}, +)$。

采用奇变量的左导数，其[[左不变向量场]]的基可以取为
\[
P = \partial_t,
\qquad Q = \partial_\theta - \theta \partial_t,
\]
并满足 $[P, Q] = 0$、$[Q, Q] = 2Q^2 = -2P$。
因此其超 Lie 代数是二步幂零的。
它展示了超平移群的基本现象：奇方向之间的括号产生中心偶平移。
时空旋量情形的构造见 [[Poincaré 超代数]]与 [[Minkowski 超空间]]
[@CastonFioresi2007, 例 3.4.2、3.5.4]。
:::

## 性质

### 底层 Lie 群与超 Lie 代数

设 $\mathcal{J} \subset \mathcal{O}_G$ 是由奇超函数生成的理想层。
商层 $\mathcal{O}_G/\mathcal{J}$ 给出底层光滑流形 $G_{\mathrm{red}}$。
群运算诱导其上的普通 Lie 群结构，称为 $G$ 的**底层 Lie 群**。
典范嵌入 $G_{\mathrm{red}} \hookrightarrow G$ 是超 Lie 群同态。

在单位元 $e$ 处，[[切超空间]]
$T_e G = (\mathfrak{m}_e/\mathfrak{m}_e^2)^*$
与 $G$ 上的左不变向量场自然对应；
这里 $\mathfrak{m}_e$ 是局部超函数环中在 $e$ 处为零的芽构成的极大理想。
对于齐次左不变向量场 $X$、$Y$，规定
\[
[X, Y] = X \circ Y - (-1)^{|X||Y|} Y \circ X .
\]
此括号仍左不变，使 $T_e G$ 成为[[超 Lie 代数]]，记为
$\operatorname{Lie} (G)$。
其中偶部自然同构于 $\operatorname{Lie} (G_{\mathrm{red}})$。
超 Lie 群同态在单位元处的微分是超 Lie 代数同态
[@CastonFioresi2007, 第 3.5 节]。

### Harish-Chandra 对

底层 Lie 群还通过共轭的微分作用于整个超 Lie 代数。
这一作用连同括号，保留了普通 Lie 群所看不见的奇方向信息。

::: definition [超 Harish-Chandra 对]
实光滑的**超 Harish-Chandra 对**由普通实 Lie 群 $H$、
有限维实超 Lie 代数 $\mathfrak{g}$ 及光滑的保分次作用
$\rho \colon H \to \operatorname{Aut} (\mathfrak{g})$ 组成，满足：

- 给定了同构 $\mathfrak{g}_{\bar{0}} \simeq \operatorname{Lie} (H)$。

- 对每个 $h \in H$，$\rho (h)$ 保持超 Lie 括号，
  且在 $\mathfrak{g}_{\bar{0}}$ 上的作用为 $H$ 的伴随作用。

- 对 $x \in \mathfrak{g}_{\bar{0}}$、$y \in \mathfrak{g}$，
  作用的微分满足 $(d \rho)_e (x) y = [x, y]$。
:::

::: theorem [超 Lie 群与超 Harish-Chandra 对]
有限维实光滑超 Lie 群范畴与实光滑超 Harish-Chandra 对范畴等价。
从超 Lie 群到对的函子为
\[
G \longmapsto
(G_{\mathrm{red}}, \operatorname{Lie} (G), \operatorname{Ad}) ,
\]
其中 $\operatorname{Ad}$ 是共轭诱导的伴随作用。
对之间的态射由 Lie 群同态 $f \colon H \to H'$ 与偶超 Lie 代数同态
$\varphi \colon \mathfrak{g} \to \mathfrak{g}'$ 组成，满足
$\varphi|_{\mathfrak{g}_{\bar{0}}} = (df)_e$ 以及
$\varphi \rho (h) = \rho' (f (h)) \varphi$。
:::

这一定理的构造与证明见 [@Gavarini2020, 预印本第 3、6 节]。
它说明：指定普通群、奇表示以及相容的超 Lie 括号，
就足以恢复超 Lie 群。
单独给定超 Lie 代数仍不包含普通群的全部整体信息，
正如普通 Lie 理论中同一个 Lie 代数可以对应不同的 Lie 群。

## 参考文献

```bibliography
CastonFioresi2007:
  type: preprint
  author: [Lauren Caston, Rita Fioresi]
  title: Mathematical Foundations of Supersymmetry
  year: 2007
  arxiv: '0710.5742'

Gavarini2020:
  type: article
  author: Fabio Gavarini
  title: A new equivalence between super Harish-Chandra pairs and Lie supergroups
  journaltitle: Pacific Journal of Mathematics
  volume: 306
  number: 2
  pages: 451--485
  year: 2020
  doi: 10.2140/pjm.2020.306.451
  arxiv: '1609.02844'
```

```terms
超 Lie 群:
  en: [Lie supergroup, super Lie group]
一般线性超群:
  en: general linear supergroup
底层 Lie 群:
  en: underlying Lie group
超 Harish-Chandra 对:
  en: super Harish-Chandra pair
```
