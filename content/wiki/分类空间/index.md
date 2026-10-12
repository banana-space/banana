---
title: 分类空间
categories: [纤维丛论]
navboxes: [向量丛与 K 理论]
---

[[拓扑群]] $G$ 的**分类空间** $\mathrm{B} G$
是一个[[拓扑空间]]，它能够分类所有 $G$-[[主丛]]。
也就是说，对任何[[空间]] $X$ 而言，
给出 $X$ 上的 $G$-[[主丛]]就相当于给出
$X$ 到 $\mathrm{B} G$ 的一个映射，称为该主丛的**分类映射**。
并且，$X$ 上 $G$-主丛的同构类[[一一对应]]于
$X$ 到 $\mathrm{B} G$ 映射的[[同伦]]类。

在分类空间 $\mathrm{B} G$ 上，有一个**万有 $G$-主丛**
$\mathrm{E} G \to \mathrm{B} G$。
任何其它空间 $X$ 上的 $G$-主丛都是该万有主丛的拉回，
这正是通过该 $X$ 上主丛对应的 $X$ 到 $\mathrm{B} G$ 的映射来拉回。
另外，也可以通过 $X$ 到 $\mathrm{B} G$ 的分类映射，
拉回 $\mathrm{B} G$ 的某个[[普通上同调|上同调]]类，
这一构造称为主丛的[[示性类]]。

对[[自然数]] $n$，由于秩 $n$ 的实或复[[向量丛]]能够分别等同于
$\mathrm{GL} (n; \mathbb{R})$-主丛或 $\mathrm{GL} (n; \mathbb{C})$-主丛，
故也将相应的分类空间 $\mathrm{BGL} (n; \mathbb{R})$ 和
$\mathrm{BGL} (n; \mathbb{C})$
称为向量丛的分类空间（@prop-纤维丛）。

$\mathrm{B} G$ 可以视为 $G$ 的[[解环]]，
也就是有[[同伦等价]] $\Omega \mathrm{B} G \simeq G$，
其中 $\Omega$ 是[[环路空间|环路]]函子。

## 定义

::: definition [分类空间]
设 $G$ 为[[拓扑群]]。
假设存在 $G$-[[主丛]]
\[
\pi \colon \mathrm{E} G \longrightarrow \mathrm{B} G,
\]
使得对任意[[仿紧空间]] $X$，映射
\[
\begin{aligned}
  [X, \mathrm{B} G] & \longrightarrow \{ \text{$X$ 上 $G$-主丛的同构类} \}, \\
  f & \longmapsto f^* (\mathrm{E} G)
\end{aligned}
\]
是[[集合同构]]，
其中 $[X, \mathrm{B} G]$ 是 $X$ 到 $\mathrm{B} G$
的映射[[同伦]]类的集合，
就称 $\mathrm{B} G$ 为 $G$-主丛的**分类空间**，
称 $\pi \colon \mathrm{E} G \to \mathrm{B} G$
为**万有 $G$-主丛**。
:::

::: remark
由[[米田引理]]，拓扑群 $G$ 的所有分类空间均同伦等价。
:::

## 例子

- 全空间[[可缩空间|可缩]]的 $G$-主丛一定是万有的（@thm-可缩）。
  因此，有以下几个例子：

  - 若 $G$ [[可缩空间|可缩]]，则 $\mathrm{B} G$ 也可缩。

  - [[万有覆叠]] $\mathbb{R} \to S^1$ 说明
    $\mathrm{B} \mathbb{Z} \simeq S^1$。

  - 因为 [[无穷维球面|$S^\infty$]] 可缩，
    所以万有覆叠 $S^\infty \to \mathbb{R} \mathrm{P}^\infty$
    说明 $\mathrm{B} \mathbb{Z}_2 \simeq \mathbb{R} \mathrm{P}^\infty$。

- [[正交群]] $\mathrm{O} (n)$
  的分类空间是无穷维 [[Graßmann 形]] $G_n (\mathbb{R}^\infty)$。
  [[酉群]] $\mathrm{U} (n)$
  的分类空间是无穷维 Graßmann 形 $G_n (\mathbb{C}^\infty)$。

- 有分类空间的同伦等价
  \[
  \begin{aligned}
    \mathrm{BGL}(n,\mathbb{R}) &\cong \mathrm{BO}(n), \\
    \mathrm{BGL}(n,\mathbb{C}) &\cong \mathrm{BU}(n). \\
  \end{aligned}
  \]
  因此这两个分类空间同时也分别分类了实或复的 $n$ 维向量丛。

## 构造

::: theorem
任意拓扑群 $G$ 都具有分类空间 $\mathrm{B}G$，其可构造如下。

对任意两个拓扑空间 $X$、$Y$，定义其**连接** $X \star Y$ 为
$(X \times Y \times I) / \sim$，
其中 $(x, y, 0) \sim (x, y', 0), (x, y, 1) \sim (x', y, 1)$。
即 $X \star Y$ 是 $X$ 中每个点向 $Y$ 中每个点连一条线段得到的拓扑空间。

定义
\[
\begin{aligned}
  \mathrm{E}G &= G \star G \star \dots
  = \operatornamewithlimits{colim}_{n \to \infty}
    \underbrace{G \star G \star \dots \star G}_{\text{$n$ 个}}, \\
  \mathrm{B}G &= \mathrm{E}G / G.
\end{aligned}
\]
其中 $G$ 在 $\mathrm{E}G$ 上作用为在每个分量上左乘。
则 $\mathrm{E}G \to \mathrm{B}G$ 是万有 $G$-主丛，
因此 $\mathrm{B}G$ 即为 $G$ 的分类空间。
:::

::: remark
这个构造也可以这样理解：设 $\mathbf{B}G$ 为 $G$ 的解环拓扑群胚，
即 $\operatorname{Obj}\mathbf{B}G = \{ * \},
  \operatorname{Mor}_{\mathbf{B}G}(*, *) = G$，
$\mathrm{N}\mathbf{B}G$ 是它的[[脉]]。

因此 $\mathrm{N}\mathbf{B}G$ 是[[单纯对象|单纯拓扑空间]]，
$\mathrm{N}\mathbf{B}G_n = G^n$。
则上述构造就是在说 $\mathrm{B}G = |\mathrm{N}\mathbf{B}G|$，
也就是取 $\mathrm{N}\mathbf{B}G$ 的[[几何实现 (单纯对象)|几何实现]]。
:::

## 性质

::: proposition {@thm-可缩}
$G$-主丛万有当且仅当其全空间[[可缩空间|可缩]]。
:::

::: proposition
分类空间具有函子性。这从上面的构造就能看出。
:::

::: proposition {@prop-纤维丛}
设 $X$、$F$ 是拓扑空间，
$G$ 是 $F$ 的自同胚群 $\operatorname{Aut}(F)$ 的子拓扑群。
则 $X$ 上所有纤维为 $F$ 且转移映射在 $G$ 中的纤维丛的等价类构成的集合
与 $X$ 上所有 $G$-主丛的等价类构成的集合间具有自然的双射。

因此前者也被 $\mathrm{B}G$ 分类。
:::

::: example
对于 $F = \mathbb{K}^n, G = \operatorname{GL}(n, \mathbb{K})$ 的情形，
上述命题说明 $n$ 维 $\mathbb{K}$-向量丛被 $\mathrm{BGL}(n, \mathbb{K})$ 分类。

特别地，$n$ 维实向量丛被 $\mathrm{BGL}(n, \mathbb{R}) \cong \mathrm{BO}(n)$ 分类，
$n$ 维复向量丛被 $\mathrm{BGL}(n, \mathbb{C}) \cong \mathrm{BU}(n)$ 分类。
:::

```terms
分类空间:
  en: classifying space
  fr: espace classifiant :m
  de: klassifizierender Raum :m
  grc: ταξινόμων χῶρος :m
  la: spatium classificans :n
```
