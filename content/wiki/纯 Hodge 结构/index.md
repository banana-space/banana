---
title: 纯 Hodge 结构
categories: [复代数几何]
---

<problems>
- “复代数簇的奇异上同调”例子中，滤链 $F^p\Omega^\bullet_{X/\mathbb{C}}$ 似乎应是只保留 $\Omega^{\ge p}_{X/\mathbb{C}}$ 的截断，而所写的复形保留的是 $\Omega^{\le p}_{X/\mathbb{C}}$。
- “复代数簇的奇异上同调”例子的最后一句中，与 $\mathbb{Z}(-w)$ 同构的似乎应是复 $w$ 维连通簇的 $2w$ 阶上同调，而不是 $w$ 阶上同调。
</problems>

**纯 Hodge 结构**是[[复数域]]上[[光滑态射|光滑]][[紧合态射|紧合]][[代数簇]]的[[奇异上同调]]自然带有的结构的抽象。

## 定义

固定 $w\in\mathbb{Z}$。

::: definition {@def}
**权为 $w$ 的纯 Hodge 结构**指二元组
$(H_\mathbb{Z},F^\bullet H)$，其中 $H_\mathbb{Z}$ 是[[有限生成模|有限生成]]
$\mathbb{Z}$-模，$F^\bullet H$ 是 $\mathbb{C}$-[[线性空间]]
$H:=H_\mathbb{Z}\otimes_\mathbb{Z}\mathbb{C}$ 上的有限（下降）[[滤链]]，满足：

- 对任意整数 $p$，自然映射
  $F^pH\oplus\overline{F^{w-p+1}H}\to H$ 是同构。

这里上划线表示 $H=H_\mathbb{Z}\otimes_\mathbb{Z}\mathbb{C}$ 中的复共轭，
即 $h\otimes c\mapsto h\otimes\bar{c}$。此时对
$p+q=w$ 记 $H^{p,q}:=F^pH\cap\overline{F^qH}$，则不难发现
$\overline{H^{p,q}}=H^{q,p}$，且自然映射
$$
\bigoplus_{p+q=w}H^{p,q}\to H
$$
是同构。权为 $w$ 的纯 Hodge 结构构成 [[Abel 范畴]]，
记作 $\mathsf{HS}(w)$。
:::

有时也会考虑没有 $\mathbb{Z}$-模结构的纯 Hodge 结构。

::: definition [复 Hodge 结构]
**权为 $w$ 的纯复 Hodge 结构**指三元组
$(H,F^\bullet H,\bar{F}^\bullet H)$，其中 $H$
是有限维 $\mathbb{C}$-线性空间，$F^\bullet H$ 和
$\bar{F}^\bullet H$ 是 $H$ 的两个有限（下降）滤链，满足

- 对任意整数 $p$，自然映射
  $F^pH\oplus\bar{F}^{w-p+1}H\to H$ 是同构。

对 $p+q=w$ 记 $H^{p,q}:=F^pH\cap\bar{F}^qH$，
则不难发现自然映射
$$
\bigoplus_{p+q=w}H^{p,q}\to H
$$
是同构。权为 $w$ 的纯复 Hodge 结构构成 [[Abel 范畴]]，
记作 $\mathsf{HS}(\mathbb{C},w)$。

对权为 $w$ 的纯复 Hodge 结构
$(H,F^\bullet H,\bar{F}^\bullet H)$，
其**共轭**指权为 $w$ 的纯复 Hodge 结构
$(\bar{H},F^\bullet\bar{H},\overline{F^\bullet H})$，
其中：

- $\bar{H}$ 指 $H$ 的共轭，即作为集合 $\bar{H}=H$，
  但复数 $c$ 在 $\bar{H}$ 上的数乘是其共轭 $\bar{c}$
  在 $H$ 的数乘。

- $\overline{F^\bullet H}$ 指 $F^\bullet H$
  的共轭，自然视为 $\bar{H}$ 的滤链。

- $F^\bullet\bar{H}$ 指 $\bar{F}^\bullet H$
  的共轭，自然视为 $\bar{H}$ 的滤链。

:::

::: definition [$A$-Hodge 结构]
设 $A\subseteq\mathbb{C}$ 是复数域的子 [[Noether 环]]。
**权为 $w$ 的纯 $A$-Hodge 结构**指三元组
$(H_A,F^\bullet H,\bar{F}^\bullet H)$，满足：

- $H_A$ 是[[有限生成模|有限生成]] $A$-模，$F^\bullet H$
  和 $\bar{F}^\bullet H$ 是 $H:=H_A\otimes_A\mathbb{C}$
  的两个有限（下降）滤链，使得 $(H,F^\bullet H,\bar{F}^\bullet H)$
  是权为 $w$ 的纯复 Hodge 结构。

- 如 $A\subseteq\mathbb{R}$，则 $\mathbb{C}$-线性空间
  $H$ 和 $\bar{H}$ 通过
  $h\otimes c\mapsto h\otimes\bar{c}$ 自然同构；
  此时要求 $\bar{F}^\bullet H=\overline{F^\bullet H}$，
  这里 $\bar{H}$ 的滤链 $\overline{F^\bullet H}$
  通过上述同构视为 $H$ 的滤链。从而 $\bar{F}^\bullet H$
  由 $F^\bullet H$ 决定，故也把 Hodge 结构写成二元组
  $(H_A,F^\bullet H)$。

权为 $w$ 的纯 $A$-Hodge 结构构成 Abel 范畴，
记作 $\mathsf{HS}(A,w)$。当 $A=\mathbb{Z}$ 时，这就是 @def
中的 $\mathsf{HS}(w)$。
:::

## 例子

::: example [Tate Hodge 结构]
对 $w\in\mathbb{Z}$，考虑 $\mathbb{C}$ 的秩 $1$ 自由 $\mathbb{Z}$-子模
$\mathbb{Z}(2\pi\mathrm{i})^w\subset\mathbb{C}$ 以及滤链
$$
F^p\mathbb{C}=\begin{cases}
  \mathbb{C},&p\le w;\\
  0,&p>w;
\end{cases}
$$
这构成权为 $2w$ 的纯 Hodge 结构，
称为**权为 $2w$ 的 Tate Hodge 结构**，记作
$\mathbb{Z}(-w)$ 或 $\mathbb{Z}(-w)^{\mathrm{Hodge}}$。这里 $\mathbb{Z}$
显然可以换成任意的子环 $A\subseteq\mathbb{C}$，所得 Hodge 结构记作
$A(-w)$ 或 $A(-w)^{\mathrm{Hodge}}$
（亦参见 @basechange）。
:::

::: example [复代数簇的奇异上同调]
设 $X$ 是 $\mathbb{C}$ 上[[光滑态射|光滑]]、[[紧合态射|紧合]]的[[代数簇]]，
$w\in\mathbb{Z}$。考虑拓扑空间 $X(\mathbb{C})$
的[[奇异上同调]] $H^w(X(\mathbb{C}),\mathbb{Z})$，
则由[[代数 de Rham 上同调|代数 de Rham 定理]]，
$$
H^w(X(\mathbb{C}),\mathbb{Z})\otimes_\mathbb{Z}\mathbb{C}=H^w(X(\mathbb{C}),\mathbb{C})
=H^w_{\mathrm{dR}}(X/\mathbb{C}).
$$
考虑代数 de Rham 复形的暴力滤链
$$
F^p\Omega_{X/\mathbb{C}}^\bullet=
[\cdots\to0\to\Omega^0_{X/\mathbb{C}}\to\cdots\to\Omega^p_{X/\mathbb{C}}
\to0\to\cdots],
$$
并取其导出整体截面的 $w$ 阶上同调，记作
$$
F^pH^w_{\mathrm{dR}}(X/\mathbb{C}):=H^w(F^p\Omega^\bullet_{X/\mathbb{C}}).
$$
则 $(H^w(X(\mathbb{C}),\mathbb{Z}),F^\bullet H^w_{\mathrm{dR}}(X/\mathbb{C}))$
构成权为 $w$ 的纯 Hodge 结构，称为 $X$ 的
**$w$ 阶上同调**。如 $X$ 连通、复 $w$ 维，
则此 Hodge 结构通过顶维微分形式取积分同构于
Tate Hodge 结构 $\mathbb{Z}(-w)$。
:::

## 性质

::: proposition {@basechange}
对 Noether 子环 $A\subseteq B\subseteq\mathbb{C}$ 及任意 $w\in\mathbb{Z}$，
基变换 $(H_A,F^\bullet H,\bar{F}^\bullet H)\mapsto
  (H_B:=H_A\otimes_AB,F^\bullet H,\bar{F}^\bullet H)$
给出右正合函子 $\mathsf{HS}(A,w)\to\mathsf{HS}(B,w)$。
:::

::: proposition
设 $w>w'$ 为整数，$(H,F^\bullet H,\bar{F}^\bullet H)$
是权为 $w$ 的纯复 Hodge 结构，
$(H',F^\bullet H',\bar{F}^\bullet H')$
是权为 $w'$ 的纯复 Hodge 结构。则三元组
$(H,F^\bullet H,\bar{F}^\bullet H)$ 到
$(H',F^\bullet H',\bar{F}^\bullet H')$ 没有非零映射。
:::

::: proof
任取映射 $f\colon(H,F^\bullet H,\bar{F}^\bullet H)\to
  (H',F^\bullet H',\bar{F}^\bullet H')$。
只需对任意的 $p+q=w$ 证明 $f$ 在 $H^{p,q}$ 上是 $0$。
而这是因为
$f(H^{p,q})\subseteq F^pH'\cap\bar{F}^qH'\subseteq
  F^pH'\cap\bar{F}^{w'-p+1}H'=0$，
由于 $w'-p+1\le w-p=q$。
:::

```terms
纯 Hodge 结构:
  en: pure Hodge structure
```
