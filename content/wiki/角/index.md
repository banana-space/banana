---
title: 角
aliases: [夹角]
categories: [初等几何, 线性代数]
navboxes: [Euclid 几何]
---

**角**衡量从同一点出发的两个[[向量]]的方向差异，
这种衡量需要借助[[内积]]来完成。

## 定义

### 向量的角

::: definition [角]
设 $V$ 是 [[Euclid 空间]]，带有 Euclid 内积 $\langle -, - \rangle$。
设 $x, y \in V$ 是非零向量。
则 $x, y$ 之间的**角**定义为
\[
\angle (x, y) = \arccos \frac {\langle x, y \rangle} {\| x \| \| y \|},
\]
其取值为 $[0, \pi]$ 中的实数。
:::

### 曲线的角

在 [[Riemann 流形]]上（例如在 Euclid 空间中），若两条光滑曲线相交，
我们可以定义其相交处的夹角。

::: definition [角]
设 $X$ 是 [[Riemann 流形]]，
$\gamma_1, \gamma_2 \colon \mathbb{R} \to X$ 为[[光滑映射|光滑]][[曲线]]，
满足 $\gamma_1 (0) = \gamma_2 (0) = x \in X$，
并且 $\gamma'_1 (0) \neq 0$，$\gamma'_2 (0) \neq 0$。
为避免叙述尴尬，假设 $\gamma_1, \gamma_2$ 都只经过 $x$ 一次。

则 $\gamma_1, \gamma_2$ 在其交点 $x$ 处构成的**角**
定义为 $\gamma'_1 (0)$ 与 $\gamma'_2 (0)$ 在[[切空间]] $\mathrm{T}_x X$
中构成的角。
:::

```terms
角:
  en: angle
  de: Winkel :m
  fr: angle :m
  grc: γωνία :f
  la: angulus :m
```
