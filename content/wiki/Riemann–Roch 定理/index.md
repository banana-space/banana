---
title: Riemann–Roch 定理
aliases: [Riemann-Roch 定理]
categories: [代数曲线论, 复几何]
---

<problems>
- “初等方法”“应用”各节需要扩充。
</problems>

**Riemann–Roch 定理**是[[代数曲线]]和[[紧 Riemann 面]]理论中的重要定理，
将[[线丛]]的 [[Euler 示性数]]、曲线的[[亏格]]、线丛的次数三者联系起来。

## 陈述

设 $X$ 是[[代数闭域]] $k$
上[[紧合态射|紧]][[光滑态射|光滑]][[连通概形|连通]]代数曲线或
[[紧 Riemann 面]]，[[亏格]]为 $g$。

::: theorem [线丛版本]
对 $X$ 上线丛 $\mathcal{L}$，有
$$
\chi(\mathcal{L})=\deg(\mathcal{L})+1-g.
$$
其中 $\chi(\mathcal{L})=h^0(\mathcal{L})-h^1(\mathcal{L})$
为 [[Euler 数]]，由 [[Serre 对偶]]也等于
$h^0(\mathcal{L})-h^0(\mathcal{L}^{-1}\otimes\omega_X)$，
其中 $\omega_X$ 是[[典范线丛]]；
$\deg(\mathcal{L})$ 为次数，即 $\mathcal{L}$
的有理截面或亚纯截面的零点个数（计重数；极点算作负数）。
:::

以下除子版本显得更初等。

::: theorem [除子版本]
设 $D=\sum_{P\in X}n_PP$ 是 $X$ 上[[除子]]，
其中 $n_P\in\mathbb{Z}$，只有有限个非零。则有
$$
h^0(D)-h^0(K_X-D)=\deg(D)+1-g.
$$
其中 $K_X$ 是[[典范除子]]；$\deg(D)=\sum_{P\in X}n_P$；
$h^0(D)=\dim\{f\in K(X)\mid\forall P\in X,\,
  v_P(f)\ge-n_P\}$，即极点阶数不超过 $D$
的有理函数或亚纯函数组成的线性空间的维数。
:::

以下凝聚层版本显得更一般。

::: theorem [凝聚层版本] {@凝聚层}
对 $X$ 上[[凝聚层]] $\mathcal{F}$，有
$$
\chi(\mathcal{F})=\deg(\mathcal{F})+(1-g)
\operatorname{rk}(\mathcal{F}).
$$
其中 $\chi(\mathcal{F})=h^0(\mathcal{F})-h^1(\mathcal{F})$
为 [[Euler 数]]；$\deg(\mathcal{F})$ 为次数，
即 $X$ 的 [[$K$ 群]]到 $\mathbb{Z}$ 的同态，
满足 $\deg(\mathcal{O}_X)=0$，
且对任意闭点 $P\in X$，$\deg(\mathcal{O}_P)=1$；
$\operatorname{rk}(\mathcal{F})$ 为秩，
即 $\mathcal{F}$ 在[[普遍点]]处[[茎]]的维数。
:::

## 证明

### 代数曲线情形

直接证明 @凝聚层。由上同调长正合列，
$\chi(\mathcal{F})$ 是 $X$ 的 $K$ 群到 $\mathbb{Z}$ 的同态；
等号右边依定义也是 $X$ 的 $K$ 群到 $\mathbb{Z}$ 的同态；
而对 $\mathcal{O}_X$ 有
$$
\chi(\mathcal{O}_X)=1-g=\deg(\mathcal{O}_X)+
(1-g)\operatorname{rk}(\mathcal{O}_X);
$$
对 $\mathcal{O}_P$ 有
$$
\chi(\mathcal{O}_P)=1=\deg(\mathcal{O}_P)+
(1-g)\operatorname{rk}(\mathcal{O}_P);
$$
所以只需证 $\mathcal{O}_X$ 与 $\mathcal{O}_P$，
其中 $P$ 取遍 $X$ 的闭点，能生成 $K$ 群。
为此任取闭点 $P$，考虑 $X$ 上凝聚层 $\mathcal{F}$。
由短正合列
$$
0\to\mathcal{F}(nP)\to\mathcal{F}((n+1)P)
\to\mathcal{O}_P\to0,
$$
只需证对充分大的 $n$，$\mathcal{F}(nP)$ 能被生成。
由于 $\mathcal{O}_X(P)$ [[丰沛线丛|丰沛]]，对充分大的 $n$，
$\mathcal{F}(nP)$ 被整体截面生成。特别地，存在
$r=\operatorname{rk}(\mathcal{F})$ 个整体截面，
在普遍点 $\eta$ 上组成 $\mathcal{F}_\eta$ 的一组基。
这些整体截面给出映射 $\mathcal{O}_X^{\oplus r}\to
\mathcal{F}(nP)$，在普遍点上是同构。于是由 $X$ 是[[整概形]]，
该映射是单射。其余核 $\mathcal{G}$ 是个凝聚层，支集不含普遍点。
于是由 $X$ 一维，$\mathcal{G}$ 支在有限个闭点上。
这样它就[[有限长模|有限长]]，于是不难发现它在 $K$ 群中被 $X$
的闭点的结构层生成。

### Riemann 面情形

如有全套[[复流形]]理论，则可用 [[Kodaira 嵌入]]快速证明定理。
不过一般的 [[Riemann 面]]教材还是会使用较为初等的办法。

#### 用 Kodaira 嵌入

任取 $X$ 的 [[Riemann 度量]] $g$，则其与 $X$ 的复结构 $J$
合起来给出[[近 Kähler 结构]] $(X,J,\omega,g)$，
且由于 $X$ 实维数只有 $2$，有 $d\omega=0$，这是个
[[Kähler 结构]]。由于 $H^2(X;\mathbb{R})=H^2(X;\mathbb{Z})\otimes_\mathbb{Z}\mathbb{R}$，
乘以正实数可设 $\omega\in H^2(X;\mathbb{Z})$。由
[[Lefschetz $(1,1)$ 定理]]，存在线丛 $\mathcal{H}$
使其第一[[陈类]]是 $\omega$。于是 $\mathcal{H}$ 为[[正线丛]]，
[[Kodaira 嵌入]]就表明 $X$ 能嵌入[[射影空间]] $\mathbb{P}^n$。
这样 $X$ 就是复代数曲线，由代数曲线 Riemann–Roch 即得结论。

::: remark
得到正线丛 $\mathcal{H}$ 之后也可不直接化归到代数曲线情形，
而照抄那里的证明：Kodaira 嵌入说明 $\mathcal{H}$ 丰沛，
故以 $\mathcal{H}^n$ 代替 $\mathcal{H}$ 可设
$\mathcal{H}$ [[极丰沛线丛|极丰沛]]，特别地被整体截面生成。
取截面之后可写 $\mathcal{H}=\mathcal{O}(H)$，
$H$ 为[[有效除子]]。现在类似地写短正合列
$$
0\to\mathcal{L}(nH)\to\mathcal{L}((n+1)H)\to
\mathcal{O}_H\to0,
$$
化归到 $n$ 充分大，再取 $\mathcal{L}(nH)$ 的截面，
定理也就同样化归到对 $\mathcal{O}_X$ 与形如 $\mathcal{O}_D$，
$D$ 为有效除子这两种情况分别验证。
:::

#### 初等方法

## 应用

## 推广

[[Hirzebruch–Riemann–Roch 定理]]将其推广到高维的紧光滑代数簇或紧复流形。
[[Grothendieck–Riemann–Roch 定理]]将其推广到相对情形，
即代数簇之间的映射。

```terms
Riemann–Roch 定理:
  en: Riemann–Roch theorem
  de: Satz von Riemann–Roch
  fr: théorème de Riemann–Roch
```
