---
title: 分离态射
aliases: [分离概形]
categories: [概形论]
navboxes: [态射性质]
---

**分离态射**是[[代数几何]]
中对拓扑中 [[Hausdorff 空间]]的模拟
（这里，我们将态射作为[[相对概形]]，而视为[[空间]]）。

## 定义

::: definition
称概形态射 $X \to S$ 为**分离态射**，
指的是[[对角态射]]
\[
\Delta_{X/S}\colon X \to X \times_S X
\]
是[[闭浸入]]。
:::

::: definition
说概形 $X$ 是**分离概形**，指的是 $X$ 在 $\mathbb{Z}$ 上分离，
即典范态射 $X\to\operatorname{Spec}\mathbb{Z}$ 是分离态射。
:::

::: remark
由于概形[[纤维积]]的拓扑并不是相应拓扑空间的纤维积，
上述定义并不等价于相应拓扑空间之间的映射是分离的。
:::

## 性质

::: proposition [赋值判别法]
态射 $X \to Y$ 分离，当且仅当其[[拟分离态射|拟分离]]，
且对任意赋值环 $R$ 以及任意如下图表（其中 $K$ 是 $R$ 的分式域，
$\operatorname{Spec}K\to\operatorname{Spec}R$ 为自然映射），
$$
\begin{tikzcd}
  \operatorname{Spec}K\ar[r]\ar[d]&X\ar[d]\\
  \operatorname{Spec}R\ar[r]\ar[ur,dashed]&Y
\end{tikzcd}
$$
使图表交换的虚线箭头至多一个。
:::

证明见条目[[赋值判别法]]。

::: proposition
- [[单态射]]分离。特别地，
  [[开浸入]]、[[闭浸入]]、[[浸入]]都分离。

- 分离态射的复合还是分离态射。

- 分离态射的[[基变换]]还是分离态射。

:::

::: corollary
对概形态射 $f \colon X \to Y$ 以及 $g \colon Y \to S$，
如果 $gf$ 是分离态射，则 $f$ 是分离态射。
简而言之，从分离概形出发的态射都分离。
:::

## 例子

- [[仿射态射]]是分离态射，例如仿射空间 $\mathbb{A}^n_S \to S$
  是分离态射。

- [[射影态射]]是分离态射，例如射影空间 $\mathbb{P}^n_S \to S$
  是分离态射。

- [[带有两个原点的直线]]不是分离的。

```terms
分离态射:
  en: separated morphism
  de: getrennter Morphismus
  fr: morphisme séparé
  la: morphismus separatus
```
