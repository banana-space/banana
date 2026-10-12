---
title: 周群
categories: [相交论]
navboxes: [代数几何, 相交论]
---

**周群**是[[代数几何]]中的一种构造，以[[周炜良]]命名。
大致来说，它是对[[代数拓扑]]中[[奇异同调]]的模拟。
对[[域]] $k$ 上的 $n$ 维[[代数簇]] $X$，其各阶周群为 [[Abel 群]]
\[
\mathrm{CH}_i (X) = \mathrm{CH}^{n-i} (X) \quad
(i = 0, \dotsc, n),
\]
其元素为 $X$ 中 $i$ 维[[闭子簇]]的[[线性组合]]，称为[[代数圈]]，
并商去某个[[等价关系]]，即[[有理等价]]。
上述两种记号类比于代数拓扑中的[[同调]]、[[上同调]]的记号。
代数圈的相交赋予 $\mathrm{CH}^\bullet (X)$ 乘法，
使之成为[[分次环]]，称为 **[[周环]]**。

更确切地说，周群应类比于代数拓扑中的 [[Borel–Moore 同调]]。
对[[复数]]域 $\mathbb{C}$ 上的代数簇而言，
有[[圈映射]]将其第 $i$ 阶周群映到其通常拓扑下的第 $2i$ 阶 Borel–Moore 同调，
该映射有时是同构，例如对[[仿射空间 (代数几何)|仿射空间]]、[[射影空间 (代数几何)|射影空间]]皆如此。
周群也有可能更复杂，例如[[椭圆曲线]] $X$ 的第 $0$ 阶周群为
$X (k) \oplus \mathbb{Z}$，其中 $X (k)$ 为 $X$ 的[[有理点]]的群，
当 $k = \mathbb{C}$ 时该群[[不可数集|不可数]]。

周群是[[母题上同调]]的一部分，
后者记录周群作为关于有理等价的商空间的高阶[[同伦群]]的信息。

## 定义

::: definition
设 $k$ 是[[域]]，$X$ 是 $k$-[[代数簇]]，$i \geq 0$ 为[[整数]]。

- $X$ 上的 $i$ 维 **[[代数圈]]** 是指形如
  \[
  \alpha = \sum_{Z \subset X} n_Z \cdot [Z]
  \]
  的表达式，其中 $Z$ 取遍 $X$ 中[[整概形|整]] $i$ 维[[闭子概形]]，
  各系数 $n_Z \in \mathbb{Z}$，且只有有限个非零。
  所有这样的代数圈构成 [[Abel 群]] $Z_i (X)$。

- 称 $X$ 上的 $i$ 维代数圈 $\alpha, \alpha'$ **[[有理等价]]**，
  是指存在有限个整 $(i + 1)$ 维闭子概形 $(W_j \subset X)_{j \in J}$，
  及 $W_j$ 上的非零[[有理函数]] $f_j \in R (W_j)^\times$，使得
  \[
  \alpha - \alpha' = \sum_{j \in J} {} \operatorname{div} (f_j),
  \]
  其中 $\operatorname{div} (f_j)$ 是 $f_j$ 在 $W_j$ 上定义的[[主除子]]，
  视为 $X$ 上的 $i$ 维代数圈。

- $X$ 的第 $i$ 阶**周群**定义为
  \[
  \mathrm{CH}_i (X) = Z_i (X) / {\sim},
  \]
  其中 $\sim$ 指有理等价，即由有理等价于 $0$ 的代数圈构成的子群。
  若 $X$ 是 $n$ 维代数簇，则也定义
  \[
  \mathrm{CH}^{n-i} (X) = \mathrm{CH}_i (X).
  \]

:::

周群也可以对更一般的概形定义；详见 [@stacks, Tag 02RW]。

## 例子

- 若 $X$ 是 $n$ 维[[整概形|整]][[代数簇]]，则
  $\mathrm{CH}_n (X) = \mathrm{CH}^0 (X) \simeq \mathbb{Z}$，
  其生成元为 $[X]$。

- 若 $X$ 是 $n$ 维代数簇，则
  $\mathrm{CH}_{n-1} (X) = \mathrm{CH}^1 (X)$
  同构于 $X$ 的 [[除子|Weil 除子类群]] $\mathrm{Cl} (X)$。

## 参考文献

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
周群:
  en: Chow group
  fr: groupe de Chow :m
  de: Chow-Gruppe :f
  ja: チャウ群<ぐん>
  ko: 차우 군
```
