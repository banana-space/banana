---
title: 满射（代数几何）
aliases: [满态射（代数几何）]
categories: [概形论]
navboxes: [态射性质]
---

<disambiguation>
本条目介绍的是[[概形]]之间的满射。关于[[集合]]的满射，请参见[[满射]]。
</disambiguation>

在[[代数几何]]中，**满射**是一类[[概形态射]]，
是诱导底[[拓扑空间]]的[[满射]]的态射。

需要注意的是，概形的满射与概形范畴中的[[满态射]]并不相同；
后者并没有很直接的描述。

## 定义

::: definition
称[[概形态射]] $f \colon X \to Y$ 为**满射**，
若 $f$ 诱导的底[[拓扑空间]]的映射是[[满射]]。
:::

## 性质

::: proposition
概形之间满射的复合、基变换仍是满射。
:::

::: proof
拓扑空间满射的复合仍是满射，所以概形满射的复合是满射。

假设有基变换图表
\[
\begin{tikzcd}
  X' \ar[r, "g'"] \ar[d, "f'"'] \ar[dr, phantom, pos=.2, "\ulcorner"]
  & X \ar[d, "f"]
  \\ Y' \ar[r, "g"] & Y \rlap{ ,}
\end{tikzcd}
\]
其中 $f$ 满。取 $y' \in Y'$，记 $y = g (y')$。
取 $x \in X$ 使 $f (x) = y$。
记 $Z = \operatorname{Spec} \bigl(
    \kappa (x) \otimes_{\kappa (y)} \kappa (y')
  \bigr)$。
则由纤维积的定义，得到态射 $Z \to X'$，
使得其与 $f'$、$g'$ 的复合分别为 $Z$ 向点 $y'$、$x$ 的投影。
由于 $Z$ 非空，知 $y'$ 落在 $f'$ 的像中。
:::

```terms
满射:
  en: surjective morphism
  fr: morphisme surjectif :m
```
