---
title: 同伦
categories: [同伦论]
notices:
  - name: 问题
    items:
      - “对高阶范畴”“对模型范畴”各节需要扩充。
navboxes: [代数拓扑]
---

**同伦**是[[映射]]之间的连续变化。
例如，对[[拓扑空间]]的[[连续映射]] $f, g \colon X \to Y$ 而言，
从 $f$ 到 $g$ 的同伦就是一[[族]]连续映射
\[
(f_t \colon X \to Y) _{t \in [0, 1]} ,
\]
其中 $t$ 可以视作[[时间]]，
这族映射随 $t$ 连续变化，并且 $f_0 = f$，$f_1 = g$。

同伦的概念也可以推广到某些[[范畴]]中，
同伦理论的一大部分可以完全在[[范畴论]]的框架下表述，
而不依赖具体的[[空间]]。
这一框架就是[[同伦代数]]，以及以之为基础发展出的[[高阶范畴论]]。

## 定义

### 对拓扑空间

::: definition [同伦] {@连续映射同伦}
设 $X, Y$ 为[[拓扑空间]]，
$f, g \colon X \to Y$ 为[[连续映射]]。
$f, g$ 之间的**同伦**是指一个连续映射
\[
H \colon X \times [0, 1] \to Y,
\]
使得 $H|_{X \times \{ 0 \}} = f$，并且 $H|_{X \times \{ 1 \}} = g$。

如果这样的 $H$ 存在，
我们也说 $f$ **同伦**于 $g$，并记 $f \simeq g$。
:::

::: definition [相对同伦]
设 $X, Y$ 为拓扑空间，设 $A \subset X$ 为[[子空间拓扑|子空间]]，
设 $f, g \colon X \to Y$ 为[[连续映射]]。
$f, g$ 之间相对于 $A$ 的**同伦**是指 $f, g$ 间的同伦
（@连续映射同伦）
\[
H \colon X \times [0, 1] \to Y,
\]
使得对任意 $t \in [0, 1]$，有
$H|_{A \times \{ t \}} = f|_A$。
换言之，$H$ 将 $A$ 固定不动。

如果这样的 $H$ 存在，
我们也说 $f$ 与 $g$ 相对于 $A$ **同伦**，并记 $f \simeq g \operatorname{rel} A$。
:::

### 对高阶范畴

### 对模型范畴

```terms
同伦:
  en: [homotopy, homotopic]
  de: [Homotopie :f, homotop]
  fr: [homotopie :f, homotope]
  grc: [ὁμοτοπία :f, ὁμότοπος]
  la: [homotopia :f, homotopus]
相对于 $A$:
  en: relative to $A$
  de: relativ zu $A$
  fr: relativement à $A$
  grc: εἰς σχέσις μετὰ $Α$
  la: relative ad $A$
```
