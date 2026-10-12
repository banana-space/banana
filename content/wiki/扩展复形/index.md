---
title: 扩展复形
categories: [拓扑组合, 组合几何]
---

::: convention
在本文中，

- [[单纯复形]]都有限。
- 记号上不区分单纯复形及其几何实现。
- 对单纯复形 $X$，以 $X_i$ 记其 $i$ 维单形之集。

:::

**扩展复形**是[[扩展图]]对[[单纯复形]]的推广，
是一类具有特定大范围连通性的单纯复形。

## 定义

::: definition [拓扑扩展度]
$d$ 维单纯复形 $X$ 的**拓扑扩展度**指
$$
\varepsilon_{拓扑}(X)=
\inf_{f\colon X\to\mathbb{R}^d}\sup_{x\in\mathbb{R}^d}
\frac{\#\{F\in X_d\mid x\in f(F)\}}{\#X_d}.
$$
对 $\varepsilon\in\mathbb{R}_+$，如 $\varepsilon_{拓扑}(X)
  \ge\varepsilon$，则称 $X$ 为 **$\varepsilon$-拓扑扩展复形**。
换言之，$X$ 是 $\varepsilon$-拓扑扩展复形意思是说，
对任意连续映射 $X\to\mathbb{R}^d$，存在 $x\in\mathbb{R}^d$，
落在至少 $\varepsilon$ 比例的 $d$ 维单形的像中。
:::

看 $d=1$ 的情形可以发现它与[[扩展图]]的联系。此时不难发现
$\varepsilon_{拓扑}(X)\ge2h(X)$。

::: definition [几何扩展度]
$d$ 维单纯复形 $X$ 的**几何扩展度**指
$$
\varepsilon_{几何}(X)=
\inf_{f\colon X\to\mathbb{R}^d\,仿射}\sup_{x\in\mathbb{R}^d}
\frac{\#\{F\in X_d\mid x\in f(F)\}}{\#X_d},
$$
其中称 $f\colon X\to\mathbb{R}^d$ 仿射指其在
$X$ 的各个单形上都是单形到 $\mathbb{R}^d$ 的仿射映射。
对 $\varepsilon\in\mathbb{R}_+$，如 $\varepsilon_{几何}(X)
  \ge\varepsilon$，则称 $X$ 为 **$\varepsilon$-几何扩展复形**。
换言之，$X$ 是 $\varepsilon$-几何扩展复形意思是说，
对任意仿射映射 $X\to\mathbb{R}^d$，存在 $x\in\mathbb{R}^d$，
落在至少 $\varepsilon$ 比例的 $d$ 维单形的像中。
:::

显然 $\varepsilon_{几何}\ge\varepsilon_{拓扑}$。

## 性质

当 $d\ge2$ 时从定义甚至不能直接看出越来越大的完全单纯复形扩展度有正下界。
这由以下定理保证：

::: theorem [Gromov]
存在只与维数 $d$ 相关的正常数 $c(d)$，
使得任意大小的 $d$ 维完全单纯复形都是 $c(d)$-拓扑扩展复形。
:::

```terms
扩展复形:
  en: expander complex
```
