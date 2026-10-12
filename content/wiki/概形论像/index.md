---
title: 概形论像
aliases: [概形论稠]
categories: [概形论]
---

顾名思义，**概形论像**就是[[概形]]论中[[像集]]的类比，
指概形态射穿过的最小[[闭子概形]]。

## 定义

::: definition
设 $f \colon X \to Y$ 为概形态射。$f$
的**概形论像**指的是 $f$ 穿过的最小[[闭子概形]]。
由于闭子概形有任意交，此为良定义。如 $f$ 的概形论像是 $Y$，
则称 $f$ 为**概形论稠**。
:::

## 性质

::: proposition
概形论像是传递的。具体地说，设 $f\colon X\to Y$，$g \colon Y\to Z$
是概形态射，$Y'$ 是 $f$ 的概形论像，$Z'$ 是 $g$ 限制在 $Y'$ 上的概形论像，那么
$gf$ 的概形论像是 $Z'$。
:::

::: proposition {@拟紧}
如果 $f\colon X\to Y$ 是[[拟紧态射]]，那么

1. $\mathcal{I} = \ker (\mathcal{O}_Y \to f_*\mathcal{O}_X)$是拟凝聚的。
   因此，概形论像 $Z$ 是$\mathcal{I}$ 决定的闭子概形。

2. 对于开子集 $U\subseteq Y$，$f$ 限制在 $f^{-1}(U)$ 的概形论像就是 $Z\cap U$。

3. $Z$的底空间就是集合论[[像]] $f(X)$ 的[[闭包]]。$Z$ 中的点都是 $X$ 中的点的[[特殊化]]。

:::

::: proposition {@既约}
如果 $f\colon X\to Y$ 是概形态射，$Z$ 是其概形论像，
$X$ 是[[既约概形]]，那么

1. 对于开子集 $U\subseteq Y$，$f$ 限制在 $f^{-1}(U)$ 的概形论像就是 $Z\cap U$。

2. $Z$ 就是集合论像 $f(X)$ 的闭包带既约闭子概形结构。

:::

开子概形的稠密性可用[[结合点]]刻画。

::: proposition
设 $X$ 是 [[Noether 概形]]，$U$ 是其开子概形。
则 $U$ 在 $X$ 中概形论稠，当且仅当 $U$ 包含 $X$
的所有结合点。
:::

概形论稠基本就是范畴满，只是需要[[分离态射|分离]]条件。

::: theorem {@满}
$f\colon X\to S$ 为概形论稠，当且仅当对任意分离 $S$-概形
$Y$ 以及 $S$-态射 $g,h\colon S\to Y$，有 $gf=hf$ 推出
$g=h$。
:::

::: corollary
固定基概形 $S$。则分离 $S$-概形范畴的[[满态射]]正是概形论稠态射。
:::

## 例子

::: example
[[仿射概形]]间态射的概形论像就是[[环同态]]的核所决定的[[闭子概形]]。
具体地说，如环同态 $A\to B$ 核为 $I$，则对应概形态射
$\operatorname{Spec}B\to\operatorname{Spec}A$
的概形论像就是 $\operatorname{Spec}A/I$。
:::

::: example
@拟紧 与 @既约 的条件不可或缺。任取域 $k$，
考虑 $X=\coprod_{n=1}^\infty\operatorname{Spec}k[x]/x^n$
及其到 $\mathbb{A}^1_k$ 的映射，在第 $n$ 个余积分量上为自然环满射
$k[x]\to k[x]/x^n$ 所诱导。设该映射的概形论像为
$\operatorname{Spec}k[x]/I$，则依定义，对任意 $n\in\mathbb{N}$，
$I\subseteq(x^n)$，由此可见 $I=0$，其概形论像是整个
$\mathbb{A}^1_k$。然而其集合论像显然只有一个闭点 $0\in
\mathbb{A}^1_k$，即理想 $(x)$。此时模层
$\ker(\mathcal{O}_{\mathbb{A}^1_k}\to\mathcal{O}_X)$
也并不拟凝聚，因其在 $0$ 处的茎为 $0$，
而在其它各处的茎都为全部，不可能对应 $k[x]$-模。最后，
对开子集 $U=\mathbb{A}^1_k\setminus0$，有
$U\times_{\mathbb{A}^1_k}X=\varnothing$，
故此时限制在开集原像与取概形论像这两个操作也不交换。
:::

::: example
@满 的分离条件亦不可或缺。任取域 $k$，
考虑 $S=\mathbb{A}^1_k=\operatorname{Spec}k[x]$，
$X=\mathbb{A}^1_k\setminus0=\operatorname{Spec}k[x,x^{-1}]$，
$f$ 为自然[[开浸入]]。取 $Y$ 为[[双原点直线]]，即两份
$S$ 沿开子概形 $X$ 粘起来，$g,h$ 分别为 $S$ 含入到这两份中。
显然 $f$ 为概形论稠，$gf=hf$，但 $g\ne h$。
:::

```terms
概形论像:
  en: scheme-theoretic image
  de: schematheoretisches Bild
  fr: image schématique
概形论稠:
  en: scheme-theoretically dense
```
