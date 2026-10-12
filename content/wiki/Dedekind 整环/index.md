---
title: Dedekind 整环
aliases: [Dedekind 环]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “Dedekind 整环的局部化”一节中 $\mathcal O_{K,S}$ 的定义式要求分母 $g$ 不属于 $S$ 中的素理想，这似乎与其后“分母的素理想分解仅出现 $S$ 中理想”的描述相反；$S$ 既被当作素理想的集合又被当作乘性子集，记号也似乎不一致。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Dedekind 整环**是一种性质良好的[[交换环]]，
主要性质是[[理想]]的唯一分解性。
它是[[代数数论]]和[[代数曲线|代数曲线论]]中[[交换代数]]方面的根基。

## 历史

Dedekind 整环的历史可以追溯到 19 世纪关于 [[Fermat 大定理]]的尝试。
当时法国数学家 Lamé 宣布了 Fermat 大定理的一个证明，
但是他的证明默认了 $\mathbb{Z}[\zeta_n]$ 是[[唯一分解整环]]。
这个陈述被 Kummer 举出了反例，
而 Kummer 为了修正这种方法引入了“理想数”以及理想数唯一分解的概念，
这就是[[理想]]和 Dedekind 整环的雏形。
而 Dedekind 随后引入理想的概念，
并且严格定义了 Dedekind 整环。

## 定义

Dedekind 整环有很多等价定义：

::: definition
**Dedekind 整环**是满足如下等价定义的[[整环]]：

- 要么是[[域]]，要么是[[整闭]]、[[Krull 维数]]为 $1$ 的[[Noether 环]]。

- 每个非零理想都可以唯一分解为[[素理想]]的乘积。

- 在每个素理想处的局部化都是[[离散赋值环]]的 Noether 环。

- 每个[[分式理想]]均可逆。

或者用[[同调代数]]的观点：

- 其上[[投射模]]的子模都是投射模。

- 其上的[[可除模]]都是[[内射模]]。

:::

## 理想类群

对于 Dedekind 整环，
我们可以定义分式理想和理想类群。
类群用来衡量 Dedekind 整环是否是[[主理想整环]]，
以及与主理想整环到底相差多少。

::: proposition
一个Dedekind 整环是唯一分解整环当且仅当它是主理想整环。
:::

::: definition
$R$ 上的**分式理想群** $\mathcal{I}_R$
是 $R$ 上的非零素理想形式上生成的[[自由 Abel 群]]。
:::

::: definition
记 $K$ 为 $R$ 的[[分式域]]，
注意 $K^{\times}$ 自然地嵌入到 $\mathcal{I}_R$。
定义 $R$ 的**理想类群**，
有时简称为**类群**，
通常记作 $\operatorname{Cl}R$，
为
\[
\operatorname{Cl}R=\mathcal{I}_R/K^{\times}.
\]
特别地，有正合列
\[
1\to \mathcal O_K^\times \to K^\times \overset {a\mapsto (a)}\longrightarrow\mathcal I_{\mathcal O_K}\to \operatorname{Cl}\mathcal O_K\to 1.
\]
在数域中，
我们通常简记
$\operatorname{Cl}_K:=\operatorname{Cl}\mathcal{O}_K$ 及 $\mathcal I_K=\mathcal I_{\mathcal O_K}$。
:::

以代数几何的角度来看，
分式理想群就是 $\operatorname{Spec}R$ 上的[[可逆层]]构成的群，
从而有同构：
\[
\operatorname{Pic}\operatorname{Spec}R\cong \operatorname{Cl}R.
\]
代数数论中一个关键的定理是：

::: theorem [类数有限性]
设 $K$ 是数域，
则 $\operatorname{Cl}K$ 是有限群。

进一步地，利用[[Minkowski 定理]]，可给出如下的**Minkowski 界**：
\[
M_K=\sqrt{|\Delta_K|}\left(\frac 4\pi\right)^{r_2}\frac{n!}{n^n}.
\]
这里$\Delta_K$是数域的[[判别式]]，$n=[K:\mathbb Q]$为扩张次数，
$r_2$是$K$非实的复嵌入的（复共轭）对子的数量。
对于任意$[I]\in\mathrm{Cl}_{K}$，存在它的一个代表元$I\subset\mathcal O_K$
使得$N(I)=[\mathcal O_K:I]\le M_K$。
进一步地，$\mathrm{Cl}_K$被全体$N(\mathfrak p)\le M_K$的
素理想$\mathfrak p\subset\mathcal O_K$生成。
:::

而对于代数曲线，类群就不是有限的，
不过性质也不差，见[[Picard 概形]]。

## 例子

许多常见的 Dedekind 整环都是从代数数论和代数曲线中来的，比如：

- 设 $K$ 为[[数域]]，
  则 $K$ 的[[代数整数|整数环]] $\mathcal{O}_K$ 是 Dedekind 整环：

  - $\mathbb{Z}$ 是 $\mathbb Q$ 的整数环；

  - $\mathbb{Z}[\sqrt{-5}]$，
    $\mathbb{Z}\left[\frac{-1+\sqrt{-7}}2\right]$ 分别是 $\mathbb Q(\sqrt{-5}),\mathbb Q(\sqrt{-7})$
    的整数环。

  - $\mathbb{Z}[\zeta_n]$ 是[[分圆扩张]] $\mathbb Q(\zeta_n)$ 的整数环，其中$n$是正整数。
    Kummer 发现 $\mathbb Z[\zeta_{23}]$ 不是唯一分解整环，
    其中的理想 $(2,\frac{1+\sqrt{-23}}{2})$ 不是主理想。
    实际上对于 $n=1,2,\cdots,22$，$\mathbb Z[\zeta_n]$ 都是唯一分解整环，
    也就是说 $n=23$ 是最小的反例。

- 设 $X$ 为一条光滑的仿射代数曲线，
  则 $X$ 的[[坐标环]] $\mathcal{O}_X(X)$ 是 Dedekind 整环：

  - $k[x]$；

  - $k[x,y]/(y^2-x^3-x)\quad(\mathrm{char}(k)\ne2)$。

## Dedekind 整环的局部化

::: theorem
一般地，Dedekind 整环的[[局部化]]仍为 Dedekind 整环。
:::

若取 $K$ 为一般[[数域]]。
记 $S$ 为 Dedekind 整环 $\mathcal O_K$ 上有限多个素理想生成的[[乘性子集]]，定义[[局部化]]
\[
\mathcal O_{K,S}:=S^{-1}\mathcal O_K=\left\{ \dfrac{f}{g}\mid f,g\in \mathcal O_K,g\notin \mathfrak p (\forall \mathfrak p\subseteq S) \right\}.
\]
若用自然语言描述，此处 $\mathcal O_{K,S}$ 恰包括 $K$ 中分母素理想分解仅出现 $S$ 中理想的元素。
对 Dedekind 整环 $\mathcal O_{K,S}$ 同样可以定义

::: definition [$S$-单位]
称局部化 Dedekind 整环 $\mathcal O_{K,S}$ 中的乘法可逆元为单位，
并记相应的单位群为 $\mathcal O_{K,S}^\times $。
特别地，称 $\mathcal O_{K,S}^\times$ 为 $\mathcal O_K$ 的 $S$-单位。
:::

::: definition [$S$-理想类群]
记 $\operatorname{Cl}_{K,S}$ 为 $\mathcal O_{K,S}$ 的理想类群，
或称 $\mathcal O_{K}$ 的 $S$-理想类群。
:::

特别地，有典范正合列

::: proposition [$S$-类群中典范正合列]
\[
1\to \mathcal O_K^\times \to \mathcal O_{K,S}^\times \overset \ast \to \mathbb Z^{\#S}\overset\star\to \operatorname{Cl}_K\to \operatorname{Cl}_{K,S}\to 1.
\]
其中

- $\#S$ 表示生成 $S$ 的素理想个数（有限）。

- $\ast$ 处映射为 $x\mapsto (v_{\mathfrak p}(x))_{\mathfrak p\subseteq S}$，
  即提出素理想分解中 $S$ 所含的各素理想分别占有的幂次。

- $\star$ 处映射为
  $(e_{\mathfrak p})_{\mathfrak p\subseteq S}\mapsto \prod_{\mathfrak p\subseteq S}\mathfrak p^{e_{\mathfrak p}}$，
  即按整数组 $(e_{\mathfrak p})_{\mathfrak p\subseteq S}$ 给出 $S$ 中素理想的乘积。

:::

根据 [[Dirichlet 单位定理]]，自然有同构

::: proposition [$S$-单位结构]
\[
\mathcal O_{K,S}^\times \cong \mathcal O_K^\times\times \mathbb Z^{\# S}\cong \mu_K\times \mathbb Z^{r+s-1+\#S}
\]
其中 $r$（相应地，$s$）为 $\mathrm{Hom}_{\mathbb Q}(K,\mathbb C)$ 中实嵌入的数量（相应地，
复嵌入的对数），
$\mu_K$ 为 $K$ 中的[[单位根]]群，即$K^\times$的挠部分。
:::

直观上看，Dedekind 环的局部化无非是将有限个给定的非零素理想配上逆元。

## Dedekind 整环上的模

与[[主理想整环上有限生成模的结构定理]]类似，
Dedekind 整环上的有限生成模也有很良好的性质。
具体来说，
就是：

::: theorem
设 $R$ 是 Dedekind 整环，
$M$ 是有限生成 $R$-模，秩为 $s$。
则唯一地
\[
M\cong \bigoplus_{i=1}^t R/\mathfrak{p}_i^{n_i}
\oplus R^{s-1}\oplus I.
\]
其中 $\mathfrak{p}_i$ 是 $R$ 中的非零素理想，
$I$ 是分式理想。当然 $s=0$ 时就没有后面两项直和。
这里“唯一”指的是 $I$
在 $\operatorname{Cl}R$ 中的像由 $M$ 唯一决定。
:::

::: corollary
设 $K_0$ 是 [[Grothendieck 群]]，
则对 Dedekind 整环 $R$ 有
\[
K_0(R)\cong \mathbb{Z}\oplus\operatorname{Cl}R.
\]
:::

```terms
Dedekind 整环:
  en: Dedekind domain
  de: Dedekindring
  fr: anneau de Dedekind
```
