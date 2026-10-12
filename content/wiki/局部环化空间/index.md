---
title: 局部环化空间
categories: [层论]
navboxes: [层论]
---

在[[几何学]]中，
**局部环化空间**是一类[[环化空间]]，
指其[[茎]]为[[局部环]]的环化空间。

直观而言，正如环化空间是“带有几何结构的空间”，
局部环化空间也是如此。
并且，在局部环化空间中，可以谈论“函数在一点处的取值”，
因为[[局部环]]具有[[剩余域]]，
该域就是该点处函数的取值范围。

例如，[[光滑流形]]可以视为局部环化空间，
其每个点的剩余域都为 $\mathbb{R}$，也就是说[[光滑函数]]取值于 $\mathbb{R}$。
又例如，[[代数闭域]] $k$ 上[[代数簇]]作为局部环化空间，
其闭点的剩余域为 $k$，即[[正则函数]]取值于 $k$。

## 定义

::: definition [局部环化空间]
称[[环化空间]] $(X, \mathcal{O}_X)$ 为**局部环化空间**，若满足以下条件：

- 对任何 $x \in X$，[[茎]] $\mathcal{O}_{X, x}$ 是[[局部环]]。

:::

::: definition [局部环化空间态射]
设 $(X, \mathcal{O}_X)$ 与 $(Y, \mathcal{O}_Y)$ 为局部环化空间。
则其间的**局部环化空间态射**是指环化空间态射
$(f, f^\sharp)$，满足以下条件：

- 对任何 $x \in X$，环层态射
  $f^\sharp \colon f^{-1} \mathcal{O}_Y \to \mathcal{O}_X$
  诱导的茎的映射
  $(f^\sharp)_x \colon \mathcal{O}_{Y, f (x)} \to \mathcal{O}_{X, x}$
  是[[局部环]]间的[[局部同态]]，
  即满足
  \[
  (f^\sharp)_x (\mathfrak{m}_{Y, f (x)})
  \subseteq \mathfrak{m}_{X, x} \, ,
  \]
  其中 $\mathfrak{m}_{Y, f (x)} \subseteq \mathcal{O}_{Y, f (x)}$
  和 $\mathfrak{m}_{X, x} \subseteq \mathcal{O}_{X, x}$
  为各自的[[极大理想]]。

:::

这里，要求 $f^\sharp$ 诱导局部同态，
就能保证诱导[[剩余域]]间的同态。
也就是说，$Y$ 上的函数能够拉回到 $X$ 上，
且拉回之后函数在 $x \in X$ 的取值由拉回之前的函数在 $f (x) \in Y$ 的取值确定。

```terms
局部环化空间:
  en: locally ringed space
```
