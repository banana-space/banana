---
title: Lang 定理
categories: [代数群理论]
navboxes: [代数群理论]
---

::: convention
在本文中，

- $p$ 是[[素数]]，$\mathbb{F}$ 是 $\mathbb{F}_p$
  的[[代数闭包]]。

:::

**Lang 定理**是[[有限域]]上[[代数群]]理论的基本结论，
由 [[Serge Lang]] 证明，可视为
[[Artin–Schreier 理论]]的一种非交换推广。它大致说的是，
[[光滑概形|光滑]][[连通概形|连通]]的代数群在有限域上没有非平凡的[[主丛]]
（@h1）。

## 定理

这里展示一个加强版，由 Steinberg 证明。

::: definition [[[几何 Frobenius 态射|几何 Frobenius 自同态]]]
设 $X$ 是 $\mathbb{F}$ 上有限型概形。则
$X$ 必然定义在某个 $\mathbb{F}_q$ 上。$X$
的一个**几何 Frobenius 自同态**指其某个下降
$X_0/\mathbb{F}_q$ 的 $q$ 次方 Frobenius
自同态，基变换回 $X/\mathbb{F}$。
:::

::: definition [[[Steinberg 自同态]]]
设 $G$ 是 $\mathbb{F}$ 上代数群，$F$ 是 $G$
的自同态。如 $F$ 的某个幂次是某个几何 Frobenius
自同态，则称 $F$ 为 **Steinberg 自同态**。
:::

::: lemma {@conj}
设 $G$ 是 $\mathbb{F}$ 上[[代数群]]，$F$ 是 $G$
的 Steinberg 自同态，$a\in G(\mathbb{F})$。以
$\iota_a$ 记 $a$ 给出的[[内自同构]] $g\mapsto aga^{-1}$，
则 $\iota_a\circ F$ 也是 Steinberg 自同态。
:::

::: proof
取足够大的 $q$ 使得 $G$ 和 $F$ 都定义在 $\mathbb{F}_q$ 上，
且 $a\in G(\mathbb{F}_q)$。则由 $G(\mathbb{F}_q)$
是有限群，且几何 Frobenius 在点上都是单射，知 $F$ 在
$G(\mathbb{F}_q)$ 上是自同构。于是可取足够大的 $m$
使得 $F^m$ 是几何 Frobenius，在 $G(\mathbb{F}_q)$
上是 $\operatorname{id}$，且
$$
aF(a)\cdots F^{m-1}(a)=1.
$$
容易发现此时 $(\iota_a\circ F)^m=F^m$ 是几何 Frobenius。
:::

::: theorem {@lang}
设 $G$ 是 $\mathbb{F}$ 上[[光滑概形|光滑]][[连通概形|连通]][[代数群]]，
$F$ 是 $G$ 的 Steinberg 自同态。
考虑其 **Lang 映射**
$\operatorname{Lang}_F\colon G\to G$，定义为
$\operatorname{Lang}_F(g)=F(g)g^{-1}$。则
$\operatorname{Lang}_F$ 是[[满射 (代数几何)|满射]]。
:::

::: proof
首先注意 $F$ 在单位元处切映射 $T_1F$ 幂零，因为几何
Frobenius 的切映射是 $0$。考虑 $\operatorname{Lang}_F$ 的分解
$$
G\to G\times G\to G
$$
$$
g\mapsto(F(g),g^{-1})\mapsto F(g)g^{-1}
$$
由于乘积映射的切映射是求和，取逆的切映射是 $-1$，容易发现
$T_1\operatorname{Lang}_F=T_1F-1$，由 $T_1F$
幂零知这是同构。注意域上光滑连通的概形不可约，故由
$T_1\operatorname{Lang}_F$ 是同构容易发现
$\operatorname{Lang}_F$ 是[[支配态射]]，像集包含稠密开集。

任取 $a\in G(\mathbb{F})$。由 @conj，
$\iota_{a^{-1}}\circ F$ 也满足 $F$ 满足的条件，
故由上一段的论证知映射 $g\mapsto a^{-1}F(g)ag^{-1}$
的像集也包含稠密开集，故而映射 $g\mapsto F(g)ag^{-1}$
亦然。于是存在 $g,h\in G(\mathbb{F})$ 使得
$$
F(g)ag^{-1}=F(h)h^{-1},
$$
这样 $a=F(g^{-1}h)(g^{-1}h)^{-1}=\operatorname{Lang}_F(g^{-1}h)$。
:::

::: remark
由于[[完美域]]上[[既约概形|既约]]代数群光滑，
考虑既约化 $G_{\mathrm{red}}$ 即可把 @lang
推广到连通而未必光滑的代数群。
:::

::: remark
有时需要考虑另一种 Lang 映射 $g\mapsto g^{-1}F(g)$。
显然，本条目所述 $\operatorname{Lang}_F$
的各种性质对这个映射也成立，只是有时需要注意左右的区别，
如 @主丛 中若使用 $g\mapsto g^{-1}F(g)$
则会得到同构 $G^F\backslash G\to G$。
:::

## 推论

以下继承 @lang 的记号和条件，并以 $G^F$
记 $F$ 在 $G(\mathbb{F})$ 中的不动点构成的子群。

::: remark
当 $G$ 是[[约化群]]时，形如 $G^F$ 的群被称为
[[Lie 型有限群]]。
:::

::: corollary {@主丛}
$\operatorname{Lang}_F$ 是[[有限态射|有限]][[平展态射]]，
且是 $G^F$-主丛。
:::

::: proof
@lang 证明的第一段已经说明 $\operatorname{Lang}_F$
在 $1$ 处平展。对 $a,g\in G(\mathbb{F})$ 计算
$$
\operatorname{Lang}_F(ga)=F(g)F(a)a^{-1}g^{-1}
=F(g)\operatorname{Lang}_F(a)g^{-1}
$$
知：

- $\operatorname{Lang}_F$ 在 $g$ 处平展。

- $\operatorname{Lang}_F(ga)=
  \operatorname{Lang}_F(g)$ 当且仅当
  $\operatorname{Lang}_F(a)=1$，即 $a\in G^F$。

由此可见 $\operatorname{Lang}_F$ 诱导的态射
$G/G^F\to G$ 为平展[[万有同胚]]，所以是同构，
故 $\operatorname{Lang}_F$ 是 $G^F$-主丛，当然也就有限。
:::

::: corollary {@fix}
设 $X$ 是集合，$F$ 是其自同构，$G(\mathbb{F})$
可迁作用于 $X$ 上，且 $F$ 保持该群作用，即对任意
$g\in G(\mathbb{F})$，$x\in X$ 都有
$F(gx)=F(g)F(x)$。则 $X^F$ 非空。
:::

::: proof
任取 $x\in X$。由可迁性可写 $F(x)=ax$，其中 $a\in G$。
对 $g\in G$ 计算
$$
F(gx)=F(g)F(x)=F(g)ax=F(g)ag^{-1}gx.
$$
所以只需找到 $g$ 使得 $F(g)ag^{-1}=1$，也即
$a=\operatorname{Lang}_F(g^{-1})$。由 @lang，这样的 $g$ 存在。
:::

::: corollary
设 $G$ 是[[仿射代数群]]。则存在被 $F$
保持的[[极大环面]]与 [[Borel 子群]]
$T\subseteq B\subseteq G$。
:::

::: proof
由代数闭域上仿射代数群的理论知这样的 $(T,B)$ 的集合被
$G(\mathbb{F})$ 可迁作用，故由 @fix 立得结论。
:::

::: corollary {@h1}
设 $G_0$ 是 $\mathbb{F}_q$ 上的光滑连通代数群，
$X_0\to\operatorname{Spec}(\mathbb{F}_q)$ 是
$G_0$-主丛，则 $X_0$ 平凡。换言之，
$H^1_{\mathrm{ét}}(\operatorname{Spec}(\mathbb{F}_q),G_0)=0$。
:::

::: proof
令 $G$、$X$ 为 $G_0$、$X_0$ 基变换到 $\mathbb{F}$ 上，
令 $F$ 为 $G_0$、$X_0$ 的 $q$ 次方 Frobenius 基变换到
$\mathbb{F}$ 上。应用 @fix 知 $X^F$ 非空，
即 $X_0(\mathbb{F}_q)$ 非空，故 $X_0$ 为平凡主丛。
:::

```terms
Lang 定理:
  en: Lang's theorem
```
