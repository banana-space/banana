---
title: Zariski 连通性定理
categories: [概形论]
---

**Zariski 连通性定理**是个[[代数几何]]定理，说的是
[[$\mathcal{O}$-连通]][[紧合态射]]的纤维[[几何连通]]。

## 陈述

::: theorem
设 $f\colon X\to S$ 是 [[Noether 概形]]的[[紧合态射]]，
且 $f_*\mathcal{O}_X=\mathcal{O}_S$（即
[[$\mathcal{O}$-连通]]），则 $f$ 的[[几何纤维]]都连通。
换言之，对任一点 $s\in S$ 及其剩余域 $k$ 的[[代数闭包]]
$k^\text{a}$，都有 $X_{k^\text{a}}=
  X\times_S\operatorname{Spec}k^\text{a}$ 连通。
:::

## 证明

我们来证明更强的命题：

::: proposition {@双射}
设 $f\colon X\to S$ 是 Noether 概形的紧合态射。
则对任一域 $k$ 以及 $s=\operatorname{Spec}k$ 到 $S$
的态射 $s\to S$，图表
\[
\begin{tikzcd}
  X_s\ar[r]\ar[d,"f_s"']&X\ar[d,"f"]\\
  s\ar[r]&S
\end{tikzcd}
\]
的基变换同态 $f_*\mathcal{O}_X|_s\to
  \Gamma(X_s,\mathcal{O}_{X_s})$ 诱导[[幂等元]]之间的双射，
这里 $f_*\mathcal{O}_X|_s$ 表示 $f_*\mathcal{O}_X
  \otimes_{\mathcal{O}_S}k$。
:::

于是只要 $f_*\mathcal{O}_X=\mathcal{O}_S$，就有
$f_*\mathcal{O}_X|_s=\mathcal{O}_S|_s=k(s)$，
没有非平凡幂等元，所以 $X_s$ 连通。

::: proof
先做一些化归。由[[平坦基变换]]，可将 $S$
在 $s$ 的像局部化，设 $S$ 为局部环 $(R,\mathfrak{m},\ell)$
的谱，$s\to S$ 相当于域嵌入 $\ell\to k$。再把 $R$
作适当忠实平坦扩张，可设 $\ell=k$。此时[[形式函数定理]]给出
$$
(f_*\mathcal{O}_X)_\mathfrak{m}^\wedge=\lim_n
\Gamma(X_n,\mathcal{O}_{X_n}),
$$
其中 $X_n$ 为 $X$ 在 $R/\mathfrak{m}^{n+1}$ 的基变换。
观察两边的幂等元。左边是 $(f_*\mathcal{O}_X)/\mathfrak{m}^n$
的极限，而每个 $(f_*\mathcal{O}_X)/\mathfrak{m}^n$
的幂等元都与 $(f_*\mathcal{O}_X)/\mathfrak{m}=
  f_*\mathcal{O}_X|_s$ 的一一对应，所以左边对应于
$f_*\mathcal{O}_X|_s$ 的幂等元。至于右边，由于 $X_s\to
  X_n$ 是[[加厚]]，特别地是同胚，诱导整体截面幂等元一一对应，
所以右边对应于 $\Gamma(X_s,\mathcal{O}_{X_s})$ 幂等元。
这样，$f_*\mathcal{O}_X|_s$ 和
$\Gamma(X_s,\mathcal{O}_{X_s})$ 的幂等元便一一对应。
显然这个对应就是基变换同态所诱导的。
:::

::: remark
当然也可以在 $\mathcal{O}$-连通情形直接使用形式函数定理。
这样加强是为了下面的推广。
:::

## 推广

用[[过渡到极限]]技术，可以去掉 Noether 等有限性条件。

::: lemma
设 $I$ 是[[滤相系]]，$\{f_i\colon X_i\to S_i\}_{i\in I}$
是概形态射的图表，满足转移态射都仿射。以 $f\colon X\to S$
记其极限。则如 @双射 的结论对每个 $f_i$ 成立，
其就对 $f$ 成立。
:::

::: proof
任取域的谱 $s$ 及同态 $s\to S$，则由基变换和极限交换，
[[拟凝聚层]]沿[[拟紧拟分离态射]]前推可以过渡到极限，
知 $f_*\mathcal{O}_X|_s=\operatornamewithlimits{colim}
  _{i\in I}{f_i}_*\mathcal{O}_{X_i}|_{s_i}$，
$\Gamma(X_s,\mathcal{O}_{X_s})=\operatornamewithlimits{colim}
  _{i\in I}\Gamma((X_i)_{s_i},\mathcal{O}_{(X_i)_{s_i}})$。
于是由[[幂等元]]函子和滤余极限交换即得结论。
:::

::: theorem
@双射 的结论对[[分离态射|分离]][[泛闭态射]]成立。
从而对分离泛闭态射都有 Zariski 连通性定理。
:::

::: proof
由结论的局部性可设 $S$ [[拟紧拟分离概形|拟紧拟分离]]。现在

- 如 $f\colon X\to S$ 为[[有限表现态射|有限表现]][[紧合态射]]，
  则它能写成 $\mathbb{Z}$ 上有限型概形紧合态射沿仿射转移态射的极限，
  故定理对它成立；

- 如 $f\colon X\to S$ 为[[紧合态射]]，则 $X$
  是有限表现紧合 $S$-概形沿仿射转移态射（实际上可以沿闭浸入）
  的极限，故定理对它也成立；

- 如 $f\colon X\to S$ 为一般的分离泛闭态射，则
  $X$ 是紧合 $S$-概形沿仿射转移态射的极限，故定理成立。

:::

## 应用

在[[双有理几何]]中，Zariski 连通性定理主要以如下推论的形式应用。

::: corollary
$S$ 是[[正规概形|正规]][[整概形]]，$X$ 是整概形，
$f\colon X\to S$ 是紧合[[双有理态射]]，
则 $f$ 的纤维几何连通。
:::

::: proof
只需证 $f_*\mathcal{O}_X=\mathcal{O}_S$。作分解
$X\to S'=\mathbf{Spec}_S(f_*\mathcal{O}_X)\to S$，
则 $S'\to S$ 仿射、泛闭，所以[[整态射|整]]。记 $\eta\in S$
为[[普遍点]]，则由双有理，$(f_*\mathcal{O}_X)_\eta=
  \mathcal{O}_{S,\eta}$ 为分式域。这样由 $S$ 正规便知
$f_*\mathcal{O}_X=\mathcal{O}_S$。
:::

```terms
Zariski 连通性定理:
  en: Zariski's connectedness theorem
  de: Zusammenhangsatz von Zariski
  fr: théorème de connexité de Zariski
```
