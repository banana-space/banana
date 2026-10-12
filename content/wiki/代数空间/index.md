---
title: 代数空间
categories: [代数几何]
navboxes: [代数几何]
---

在[[代数几何]]中，
**代数空间**是[[概形]]的一种推广。
大致来说，概形是局部上同构于[[仿射概形]]的空间，
也就是由仿射概形在 [[Zariski 拓扑]]下粘出来的空间，
而代数空间则是仿射概形在更细的拓扑下，
例如在[[平展拓扑]]下，粘出的空间。
这种更细的拓扑赋予仿射概形更多“开集”，
因此也就有更多的粘法。

例如，若[[有限群]] $G$ [[群作用|作用]]于[[概形]] $X$，
且该作用是[[自由作用]]，
则直观来说，商空间 $X/G$ 应该在局部上看起来像是 $X$。
但实际上，$X/G$ 不一定是概形，因为概形的 Zariski 拓扑太粗，
导致这里的“局部”并不总能用 Zariski 开集来描述。
但 $X/G$ 总是代数空间，因为平展拓扑提供了足够多的开集。

## 定义

代数空间通常通过[[函子观点]]来定义。
也就是说，为了定义代数空间 $X$，我们只需对每个[[概形]] $T$
指定一个态射集 $\mathrm{Hom} (T, X)$，
而 $X$ 的所有信息都由这些态射集给出。

::: definition
设 $S$ 是[[概形]]。则 $S$ 上的**代数空间**是指[[函子]]
\[
X \colon (\mathsf{Sch}_{/S})^{\mathrm{op}}
\longrightarrow \mathsf{Set},
\]
即 $\mathsf{Sch}_{/S}$ 上的[[预层]]，
其中 $\mathsf{Sch}_{/S}$ 是[[概形]]范畴于 $S$ 上的[[俯范畴]]，
也即 $S$ 上的[[大平展景]]，并满足以下条件：

- 该预层关于 $\mathsf{Sch}_{/S}$ 的[[平展拓扑]]是[[层]]，
  即构成大平展景上的层。

- 存在 [[相对概形|$S$-概形]] $U$ 及态射 $\pi \colon U \to X$，
  称为 $X$ 的**图册**，
  它是[[平展态射]]、[[满射 (代数几何)|满射]]。

在上述第二条中，我们自然地将概形 $U$ 等同于其[[可表函子|表出]]的层
$h_U = \mathsf{Sch}_{/S} (-, U)$，
而 $\pi$ 是层的态射；
称 $\pi$ 为平展态射、满射，是说对任意 $S$-概形 $T$ 和任意态射 $T \to X$，
若考虑层范畴中的[[拉回 (范畴论)|拉回]]
\[
\begin{tikzcd}
    T' \ar[d, "\pi'"'] \ar[r] \ar[dr, phantom, "\ulcorner", pos=.2]
    & U \ar[d, "\pi"]
    \\ T \ar[r]
    & X \rlap{ ,}
\end{tikzcd}
\]
则 $T'$ 也一定是概形，
且 $\pi'$ 是概形间的平展态射、满射。
:::

在上述定义中，可以将 $\mathsf{Sch}_{/S}$
换成其中由[[仿射概形]]构成的[[全子范畴]] $\mathsf{Aff}_{/S}$，
得到的定义是等价的；
另一方面，也可以将平展拓扑换成[[平坦拓扑]]，
而得到等价的概念。

## 参考文献

关于代数空间的详细介绍：

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
代数空间:
  en: algebraic space
  fr: espace algébrique :m
  de: algebraischer Raum :m
```
