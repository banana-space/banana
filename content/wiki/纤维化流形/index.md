---
title: 纤维化流形
categories: [微分几何]
---

**纤维化流形**是[[纤维丛]]的推广，
一个流形每个点上有一根纤维，
这些纤维可以不同。

纤维化流形可以视为[[相对观点]]下的流形。

## 定义

::: definition
**纤维化流形**是满[[浸没]]
$\pi \colon Y\to X$；
其中 $Y$ 称作**全空间**，
$X$ 称作**底空间**。
:::

对流形 $X$，它上面的所有纤维化流形可以构成一个范畴。

::: definition
给定光滑流形$X$，
范畴 $\mathsf{Fib}_X$ 为以 $X$
为底空间的纤维化流形的范畴，
其中的态射为交换图
\[
\begin{tikzcd}[column sep=tiny]
  Y\ar[rr,"f"]\ar[rd,"\pi"'] && Y'\ar[ld,"\pi'"]\\
  & X.
\end{tikzcd}
\]
:::

在此范畴上有一些函子性的构造，
例如第 $r$ 阶[[射流]]函子
$J^r \colon \mathsf{Fib}_X \to \mathsf{Fib}_X$。

## 例子

- 每个[[纤维丛]]都是纤维化流形。

- 特别地，[[覆叠空间|覆盖空间]]是具有离散纤维的纤维化流形。

- $\pi \colon (\mathbb{R}^2-\{0\}) \to \mathbb{R}$
  是纤维化流形，但不是纤维丛，
  因为 $0$ 处的纤维与其它纤维不同伦等价。

## 性质

在局部坐标上，纤维化流形可以写成 [[Euclid 空间]]上的投影映射。

::: proposition [局部坐标]
设 $\pi\colon Y\to X$
是满浸没，
那么通过 $Y$ 的任一点有局部截面。
并且可以在 $Y$ 的一点附近选取坐标系 $(x^\mu,y^\alpha)$，
使得 $\pi$ 在这个邻域内表示为
$(x^\mu,y^\alpha) \mapsto x^\mu$。
:::

```terms
满浸没:
  en: surjective submersion
  de: surjektive Submersion
  fr: submersion surjective
  la: submersio superjectiva
全空间:
  en: total space
  de: Totalraum
  fr: espace total
  la: spatium totum
底空间:
  en: base space
  de: Basis :f
  fr: base :f
  la: basis :f
```
