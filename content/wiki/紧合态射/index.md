---
title: 紧合态射
categories: [概形论]
navboxes: [态射性质]
---

**紧合态射**是[[代数几何]]
中对拓扑中[[紧空间|紧]] [[Hausdorff 空间]] 的模拟
（将态射作为[[相对概形]]，而视为[[空间]]），
也是拓扑中[[紧合映射]]（精确地说，紧合[[分离映射]]）的类比
（将态射视为空间之间的映射）。

## 定义

::: definition
称[[概形]]态射 $X \to S$ 为**紧合态射**，
如果它[[分离态射|分离]]、[[泛闭态射|泛闭]]、[[有限型态射|有限型]]。
:::

::: remark
由于概形[[纤维积]]的拓扑并不是相应拓扑空间的纤维积，
上述定义并不等价于相应拓扑空间之间的映射是紧合的。
:::

## 性质

::: proposition [赋值判别法]
$X \to S$ 是紧合态射当且仅当其[[有限型态射|有限型]]、
[[拟分离态射|拟分离]]，且对任意赋值环 $R$ 以及任意如下图表（其中 $K$ 是 $R$ 的分式域，
$\operatorname{Spec}K\to\operatorname{Spec}R$ 为自然映射），
$$
\begin{tikzcd}
  \operatorname{Spec}K\ar[r]\ar[d]&X\ar[d,"f"]\\
  \operatorname{Spec}R\ar[r]\ar[ur,dashed]&S
\end{tikzcd}
$$
使图表交换的虚线箭头存在唯一。
:::

证明见条目[[赋值判别法]]。

::: proposition
- [[闭浸入]]是紧合态射。

- 紧合态射的复合还是紧合态射。

- 紧合态射的[[基变换]]还是紧合态射。

:::

::: corollary
对概形间态射 $f \colon Y \to Z$ 以及 $g \colon X \to Y$，
如果 $f$ 是[[分离态射]]，且 $f \circ g$ 是紧合态射，
则 $g$ 是紧合态射。
:::

下面的定理是“仿射又紧合的代数簇只能是有限个点”这一直观的推广。

::: theorem
[[仿射态射|仿射]]紧合态射为[[有限态射|有限]]。
:::

::: proof
[[泛闭态射]]条目中证明了仿射泛闭态射一定整。
现由紧合它又有限型，所以一定有限。
:::

紧合态射最重要的性质当属 [[Grothendieck 凝聚性]]，
证明参见主条目。

::: theorem [Grothendieck]
设 $f\colon X\to Y$ 是 [[Noether 概形]]的紧合态射。
则[[导出前推]] $Rf_*$ 把 $\mathsf{D}_\mathsf{Coh}^b(X)$
变为 $\mathsf{D}_\mathsf{Coh}^b(Y)$。换言之，
对 $X$ 上[[凝聚层]] $\mathcal{F}$，
$R^if_*\mathcal{F}$ 都是 $Y$ 上凝聚层，
且当 $i$ 充分大时为 $0$。
:::

以下[[形式函数定理]]亦比较有用，证明参见主条目。

::: theorem
设 $R$ 是 Noether 环，$I$ 是其理想，$X$ 是紧合 $R$-概形，
$\mathcal{F}$ 是 $X$ 上[[凝聚层]]。对 $n\in\mathbb{N}$，
记 $X_n=X\times_{\operatorname{Spec}R}
  \operatorname{Spec}R/I^{n+1}$，$\mathcal{F}_n=
  \mathcal{F}|_{X_n}$。则对 $i\in\mathbb{N}$，
$$
\lim_nH^i(X_n,\mathcal{F}_n)=H^i(X,\mathcal{F})^\wedge,
$$
其中 ${}^\wedge$ 表示 $R$-模关于 $I$ 完备化。
:::

## 例子

- [[射影态射]]是紧合态射，例如射影空间 $\mathbb{P}^n_S \to S$
  是紧合态射。

- [[有限态射]]是紧合态射。

- 仿射空间 $\mathbb{A}^n_S \to S$ （$n \geq 1$）
  不是紧合态射。

- [[开浸入]]不是紧合态射，除非它是开闭浸入。

```terms
紧合态射:
  en: proper morphism
  de: eigentlicher Morphismus
  fr: morphisme propre
  grc: ἴδιος μορφισμός
  la: morphismus proprius
```
