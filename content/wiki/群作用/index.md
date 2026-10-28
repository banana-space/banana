---
title: 群作用
categories: [群论]
navboxes: [代数结构]
---

<problems>
- “$G$-同态”定义的最后一句不完整。
- “在 $\infty$-范畴中”“例子”“轨道、稳定子”各节需要扩充。
</problems>

**群作用**是一种[[代数结构]]。
[[群]] $G$ 于[[集合]] $X$ 上的作用
是一种乘法运算，
它允许 $G$ 的元素与 $X$ 的元素相乘而得到 $X$ 的元素。

群不仅可以作用于集合，也可以作用于其它数学对象，
例如各种[[空间]]、各种[[代数结构]]等。
此时，群作用也就是群到该数学对象的[[自同构群]]的[[群同态|同态]]。

## 定义

### 群作用于集合

::: definition [群作用、$G$-集合]
设 $G$ 是[[群]]，$X$ 是[[集合]]。

- $G$ 于 $X$ 上的**左作用**（或**作用**）指[[映射 (集合论)|映射]]
  \[
  \begin{aligned}
    f \colon G \times X & \to X, \\
    (g, x) & \mapsto g \cdot x,
  \end{aligned}
  \]
  满足以下条件：

  - 单位元 $1 \in G$ 的作用是恒同映射，
    也就是说对任何 $x \in X$，
    \[
    1 \cdot x = x.
    \]

  - 对任何 $g, h \in G$ 和 $x \in X$，有
    \[
    (gh) \cdot x = g \cdot (h \cdot x).
    \]

  此时，我们说 $G$ **左作用**（或**作用**）于 $X$，
  并将此群作用记为
  \[
  G \curvearrowright X,
  \]
  称带有该左作用的集合 $X$ 为 **$G$-集合**。

- $G$ 于 $X$ 上的**右作用**指映射
  \[
  \begin{aligned}
    f \colon X \times G & \to X, \\
    (x, g) & \mapsto x \cdot g,
  \end{aligned}
  \]
  满足以下条件：

  - 单位元 $1 \in G$ 的作用是恒同映射，
    也就是说对任何 $x \in X$，
    \[
    x \cdot 1 = x.
    \]

  - 对任何 $g, h \in G$ 和 $x \in X$，有
    \[
    x \cdot (gh) = (x \cdot g) \cdot h.
    \]

  此时，我们说 $G$ **右作用**于 $X$，
  并将此群作用记为
  \[
  X \curvearrowleft G.
  \]

:::

::: definition [等变映射]
设 $G$ 是群，$X, Y$ 是 $G$-集合。集合间[[映射 (集合论)|映射]]
\[
f \colon X \to Y
\]
称为 $G$-**等变**的，如果对任意 $g \in G$ 和 $x \in X$，都有
\[
f (g \cdot x) = g \cdot f (x).
\]
:::

::: definition [$G$-集合范畴]
设 $G$ 是群。所有 $G$-集合及等变映射构成一个[[范畴]]，
称为 **$G$-集合范畴**，记为 $G\text{-}\mathsf{Set}$。
:::

::: remark
$G\text{-}\mathsf{Set}$ 等价于 $G$ 的[[分类空间]] $\mathrm{B}G$
上的集合[[层]]范畴，从而 $G\text{-}\mathsf{Set}$ 是[[意象]]。
:::

### 群作用于对象

::: definition [群作用]
设 $\mathcal{C}$ 是[[范畴]]，$X \in \mathcal{C}$ 为[[对象]]。
则[[群]] $G$ 于 $X$ 上的**左作用**（或**作用**）
指一个[[群同态]]
\[
f \colon G \to \operatorname{Aut}_{\mathcal{C}} (X),
\]
其中右边是 $X$ 的[[自同构群]]。

等价地说，令 $\mathrm{B}G$ 表示只有一个对象，
其到自身的态射集为 $G$，复合律由 $G$ 中的乘法给出的范畴。
$G$ 于 $X$ 上的**左作用**是一个函子
\[
\mathrm{B}G \to \mathcal{C},
\]
使得 $\mathrm{B}G$ 的对象的像是 $X$。

$G$ 于 $X$ 上的**右作用**指[[反群]] $G^\mathrm{op}$
于 $X$ 上的左作用。
:::

### 群作用于 Abel 群

作为上述定义的例子，这里给出有群作用的 Abel 群的定义。

::: definition [$G$-模]
设 $G$ 是[[群]]。**（左）$G$-模** 是一个二元组 $(M,\varphi)$ 满足：

- $M$ 是一个 [[Abel 群]]（加法），

- $\varphi\colon (g,m)\mapsto g\cdot m$（简记为 $gm$）$\colon G\times M\rightarrow M$ 是满足如下条件
  的映射，对任意 $g,g'\in G$ 以及 $m,m'\in M$ 均有：

  1. $g(m+m')=g m+gm'$。

  2. $(gg')m=g(g'm)$，并且有 $1\cdot m=m$。

:::

::: definition [$G$-同态]
$M$，$N$ 是 $G$-模，映射 $\varphi\colon M\rightarrow N$ 是群同态。若有
\[
\varphi(gm)=g\varphi(m)
\]
对任意 $g\in G$，$m\in M$ 成立，则称 $\varphi$ 为 $G$-同态。
$M$ 到 $N$ 的全部 $\mathrm{Hom}_{G}(M,N)$
:::

::: definition [$G$-模范畴]
所有 $G$-模以及它们之间的 $G$-同态构成的一范畴，
记作 $\mathsf{Mod}_{G}$。
:::

事实上，我们有范畴等价
$\mathsf{Mod}_{G} \simeq \mathsf{Mod}_{\mathbb{Z}[G]}$，
其中 $\mathbb{Z}[G]$ 为 $G$ 的 $\mathbb{Z}$-系数[[群代数]]。

又如，[[群表示]]就是群在[[向量空间]]上的作用。

### 在 $\infty$-范畴中

## 例子

## 轨道、稳定子

```terms
作用:
  en: action
  de: Aktion :f
  fr: action :f
  grc: δρᾶσις :f
  la: actio :f
$G$-集合:
  en: $G$-set
  de: $G$-Menge :f
  fr: $G$-ensemble :m
  grc: '$\Gamma$-σύνολον :n'
  la: $G$-copia :f
```
