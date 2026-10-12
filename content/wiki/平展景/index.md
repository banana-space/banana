---
title: 平展景
aliases: [平展拓扑, 小平展景, 平展局部]
categories: [概形论]
---

在[[代数几何]]中，
**平展景**，
即[[概形]]范畴配备**平展拓扑**，
是 [[Zariski 拓扑]]的一种加细。
大致来说，Zariski 拓扑要求使用[[仿射概形|仿射]]开集作为[[概形]]的局部坐标，
而平展拓扑允许所有[[平展态射]]作为局部坐标。
这使得某些几何对象能够定义。
例如，很多[[主丛]]无法在 Zariski 拓扑下局部平凡化，
但在平展拓扑下可以，因此平展拓扑使得主丛的概念得以正确定义。

平展景上的[[层上同调]]称为[[平展上同调]]，
是代数几何中的重要工具。

概形范畴上的一些常用拓扑列举如下，
按由粗到细排列：

[[Zariski 景|Zariski]] $<$
[[Nisnevich 景|Nisnevich]] $<$
**平展** $<$
[[光滑景|光滑]] $<$
[[合割景|合割]] $<$
[[平坦景|fppf]] $<$
[[平坦景|fpqc]]

## 定义

记 $\mathsf{Sch}$ 为[[概形]]的范畴。

::: definition
设 $X$ 为[[概形]]。

- $X$ 上的**大平展景** $\mathsf{Sch}_{/X,\, \mathrm{\acute{e}t}}$
  定义为[[俯范畴]] $\mathsf{Sch}_{/X}$，
  其中开覆盖为 $(f_i \colon U_i \to U)_{i \in I}$，
  其中诸 $f_i$ 为[[平展态射]]，且 $\coprod_{i \in I} U_i \to U$ 为[[满射]]。

- $X$ 上的**小平展景** $X_{\mathrm{\acute{e}t}}$
  为大平展景 $\mathsf{Sch}_{/X,\, \mathrm{\acute{e}t}}$
  中由平展态射 $U \to X$ 构成的满子范畴，开覆盖的定义同上。

:::

```terms
平展景:
  en: étale site
  fr: site étale :m
平展拓扑:
  en: étale topology
  fr: topologie étale :f
```
