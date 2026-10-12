---
title: 景
aliases: [Site, Grothendieck 拓扑, 筛, 混沌景]
categories: [层论]
navboxes: [层论]
---

**景**是[[拓扑空间]]的抽象。
其大致思想为忽略[[拓扑空间]]中的点，
而模拟[[拓扑空间]]中所有[[开集]]应有的构造，例如[[开覆盖]]。

## 动机

在[[代数几何]]中，[[代数簇]]的 [[Zariski 拓扑]]有诸多不足，
例如它太粗，导致不可约代数簇上面常值层的上同调为 $0$。
为解决此问题，需要额外加上一些“开集”，
虽然不能认为这些开集仍然由此空间中的点构成，
但诸如[[开覆盖]]等概念却仍然可以谈论。
因此我们把[[拓扑空间]]抽象为景，
抛弃拓扑空间中的点而模拟拓扑空间中的开集。

例如，在[[平展上同调]]理论中，需要将映至底空间的[[平展映射]]也视为
“开集”，而构造一种[[拓扑空间|拓扑]]的类似物，即为[[平展景]]。

## 覆盖定义

::: definition {@def-site}
**景**是二元组 $(\mathcal{C},
  \operatorname{Cov}(\mathcal{C}))$，其中
$\mathcal{C}$ 是[[范畴]]，
$\operatorname{Cov}(\mathcal{C})$ 是由形如下式的元素构成的类：
\[
\{ U_i \to U \}_{i \in I},\quad U_i,\ U \in \operatorname{Ob}{\mathcal{C}},
\]
其中 $I$ 是集合，$U_i$、$U$ 是 $\mathcal{C}$ 中对象。
满足下述条件：

- 对[[同构 (范畴论)|同构]] $V \to U$，
  $\{ V \to U \} \in \operatorname{Cov}(\mathcal{C})$。

- 如果 $\{ U_i \to U \}_{i \in I} \in \operatorname{Cov}(\mathcal{C})$，
  且对每个 $i \in I$，有 $\{ U_{ij} \to U_i \}_{j \in I_i} \in \operatorname{Cov}(\mathcal{C})$，
  那么
  $\{ U_{ij} \to U \}_{i \in I, j \in I_i} \in \operatorname{Cov}(\mathcal{C})$。

- 对 $\{ U_i \to U \}_{i \in I} \in \operatorname{Cov}(\mathcal{C})$ 以及任意映射
  $V \to U$，有[[纤维积]] $U_i\times_UV$ 存在，且
  $\{ U_i \times_U V \to V \}_{i \in I} \in \operatorname{Cov}(\mathcal{C})$。

在不引起歧义的情况下，将此二元组简记为 $\mathcal{C}$。
:::

::: remark
由以上例子，我们将 $\mathcal{C}$ 中对象称为**开集**，
$\operatorname{Cov}(\mathcal{C})$ 中元素称为**覆盖**。
:::

::: definition
景之间的[[函子]] $u\colon\mathcal{C}\to\mathcal{D}$
（即其相应范畴间的函子）
称为**连续**，如果对 $\mathcal{C}$ 中任意覆盖
$\{U_i\to U\}$，有

- $\{u(U_i)\to u(U)\}$ 是 $\mathcal{D}$ 中的覆盖。

- 对 $\mathcal{C}$ 中的映射 $T \to U$，
  $u(T) \times_{u(U)} u(U_i) \simeq u(T \times_U U_i)$。

:::

::: definition [景的态射]
景之间的[[态射]] $\mathcal{D} \to \mathcal{C}$
是景间的连续函子 $u \colon \mathcal{C} \to \mathcal{D}$。
使得景上的[[层]]之间的[[推出层|推出]]函子 $u^s$
\[
\mathsf{Sh}(\mathcal{D}) \to \mathsf{Sh}(\mathcal{C}),
\quad u^s\mathcal{F} (U) = \mathcal{F}(u(U))
\]
有[[正合函子|正合]]的[[左伴随]]，即[[拉回层|拉回]]函子是正合的。
:::

::: remark
例如，如果连续函子 $u \colon \mathcal{C} \to \mathcal{D}$
保持所有有限[[极限 (范畴论)|极限]]，则它给出了景之间的态射。
:::

::: remark
拓扑空间间的连续映射 $f \colon X \to Y$，
通过 $U \mapsto f^{-1}(U)$ 给出连续函子 $\mathsf{Open}(Y)\rightarrow \mathsf{Open}(X)$，
进而给出景间的态射 $\mathsf{Open}(X)\rightarrow \mathsf{Open}(Y)$。
这也解释了景间的态射要反过来写的原因。
:::

::: definition [余连续]
景之间的[[函子]] $u\colon\mathcal{C}\to\mathcal{D}$
称为**余连续**，指对任意 $U\in\mathcal{C}$，任意
$\mathcal{D}$ 中覆盖 $\{V_j\to u(U)\}_{j\in J}$，
存在 $\mathcal{C}$ 中覆盖 $\{U_i\to U\}_{i\in I}$，
使 $\{u(U_i)\to u(U)\}_{i\in I}$ [[加细]]
$\{V_j\to u(U)\}_{j\in J}$，意思是存在映射
$\varphi\colon I\to J$ 以及映射 $u(U_i)\to V_{\varphi(i)}$
使下图
\[
\begin{tikzcd}[column sep=tiny]
  u(U_i)\ar[dr]\ar[rr]&&V_{\varphi(i)}\ar[dl]\\
  &u(U)&
\end{tikzcd}
\]
交换。
:::

## 一般定义

在此陈述用筛定义的景。它比上面用覆盖定义的抽象些，
但能够处理一般的、没有足够极限的范畴。初学者可满足于以上覆盖定义。

::: definition [筛]
范畴 $\mathcal{C}$ 的对象 $U$
上的**筛**指 [[Yoneda 函子]] $h_U$ 的[[子函子]]。
:::

::: definition [等价定义]
等价地，$U$ 上的筛是[[俯范畴]] $\mathcal{C}_{/U}$ 的[[满子范畴]]
$\mathcal{D}$，使得对俯范畴中任意态射 $Y \to X$，
$X \in \mathcal{D}$，有 $Y \in \mathcal{D}$ 成立。
:::

::: remark
上述二定义等价：子函子 $S\subseteq h_U$ 对应于满子范畴
$$
\{f \colon V \to U\mid f \in S(V) \subseteq h_U(V)\}.
$$
:::

::: definition
**景**是二元组 $(\mathcal{C},J)$，
其中 $\mathcal{C}$ 是[[范畴]]，$J$ 对每个 $U\in\mathcal{C}$
指定一族筛，满足下述条件：

- $h_U\in J(U)$。
- 如 $S\in J(U)$，且 $T\subseteq h_U$ 满足对每个
  $V\in\mathcal{C}$ 以及 $f\colon V\to U$ 属于 $S(V)$，
  都有 $f^*T\in J(V)$，则 $T\in J(U)$。
- 如 $S\in J(U)$，$f\colon V\to U$，则
  $f^*S\in J(V)$。

其中 $f^*S$ 定义为 $(f^*S)(W)=\{g\colon W\to V\mid
  f\circ g\in S\}$。

$J$ 中元素称为**覆盖筛**。
无歧义时将 $(\mathcal{C},J)$ 简记为 $\mathcal{C}$。
:::

::: example
对上面用覆盖定义的景 $(\mathcal{C},\operatorname{Cov}
  (\mathcal{C}))$，对 $U\in\mathcal{C}$，$S\subseteq h_U$，
令 $S\in J(U)$，若存在覆盖 $\{U_i\to U\}$ 使得对每个 $i$，
$S\supseteq\operatorname{im}(h_{U_i}\to h_U)$。
这样，上面覆盖定义的景的条件便逐条推出以上条件。
:::

::: definition
景之间的[[函子]] $u\colon\mathcal{C}\to\mathcal{D}$
称为**连续**，指对 $\mathcal{C}$ 的每个覆盖筛 $S$，
$u_*S$ 都是 $\mathcal{D}$ 的覆盖筛。
:::

::: definition
景之间的[[函子]] $u\colon\mathcal{C}\to\mathcal{D}$
称为**余连续**，指对 $\mathcal{D}$ 的每个覆盖筛 $T$，
$u^*T$ 都是 $\mathcal{C}$ 的覆盖筛。
:::

::: definition [景的态射]
景之间的[[态射]] $\mathcal{D} \to \mathcal{C}$
是连续函子 $u \colon \mathcal{C} \to \mathcal{D}$，
使得[[层]]范畴间函子
$u^s\colon\mathsf{Sh}(\mathcal{D})\to
  \mathsf{Sh}(\mathcal{C})$，定义为
$(u^s\mathcal{F})(U)=\mathcal{F}(u(U))$，有[[正合]]的左伴随。
:::

可以验证当景可由覆盖定义时，这里描述的景的性质与之前的性质等价。

## 性质

::: proposition
对景 $\mathcal{C}$，以及其中一对象 $X$，范畴
$\mathcal{C}_{/X}$ 具有自然的景结构，
称为**俯景**，是拓扑中[[开子空间]]的类比。
此时自然的函子 $\mathcal{C}_{/X} \to \mathcal{C}$ 是连续、
余连续的。
:::

## 例子

如下的二元组 $(\mathcal{C}, \operatorname{Cov}(\mathcal{C}))$
构成景：

- $\mathcal{C}$ 为[[拓扑空间]] $X$
  的所有开集构成的范畴 $\mathsf{Open}(X)$，
  $\operatorname{Cov}(\mathcal{C})$ 为通常意义下的开覆盖。
  如 $X$ 为概形相应的拓扑空间，此景称为 $X$ 的 **[[Zariski 景]]**。
- $\mathcal{C}$ 为任意范畴，
  $\operatorname{Cov}(\mathcal{C})$
  中元素为所有同构 $U_i \to U$，称为**混沌景**。

此外，在[[代数几何]]中下列景是常见的：

- [[平坦景]]
- [[平展景]]
- [[射平展景]]
- [[无穷小景]]
- [[晶体景]]

```terms
景:
  en: site
  de: Situs :m
  fr: site :m
筛:
  en: sieve
  de: Sieb :n
  fr: crible :m
覆盖:
  en: covering
  de: überdeckend
  fr: couvrant
```
