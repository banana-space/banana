---
title: Kronecker 青春之梦
aliases: [Hilbert 第十二问题]
categories: [代数数论]
---

广义的 Kronecker 青春之梦（又称 Hilbert 第十二问题）
是 [[Kronecker–Weber 定理]] 的推广。
Kronecker–Weber 定理描述的是 $\mathbb{Q}$ 的 Abel 扩域都可以由添加
$\mathbb{S}^1$ 上扭点处的取值，
也就是单位根给出。
而 Kronecker 青春之梦则是追求一般数域上的类似物：
通过添加特殊 Abel 簇（或者更一般）上特殊点（一般是扭点）的坐标给出 Abel 扩域。

狭义的 Kronecker 青春之梦（Kronecker's Jugendtraum），
指的是通过椭圆曲线的[[复乘理论]]完全刻画[[虚二次域]]的最大 Abel 扩张。

## 中心思想

Kronecker 青春之梦的中心问题是：

具体刻画数域的 Abel 扩域。

其中心思想是：

添加结构良好的代数簇上良好的点的坐标得到 Abel 扩域。

## 起源

在 1880 年 Kronecker 给 Dedekind 写的一封信中写道：

> *Es handelt sich um meinen liebsten Jugendtraum,
> nämlich um den Nachweis,
> dass die Abel’schen Gleichungen mit Quadratwurzeln
> rationaler Zahlen durch die Transformations-Gleichungen
> elliptischer Functionen mit singularen Moduln grade so erschöpft werden,
> wie die ganzzahligen Abel’schen Gleichungen durch die Kreisteilungsgleichungen.*

参考的中文翻译是：

> 它关乎我最亲爱的青春之梦，也就是能见证以下事实的证明：
> 系数是开平方根的有理数的 Abel 方程被奇异模和椭圆函数的变换方程穷尽，
> 就像系数是有理数的 Abel 方程被分圆方程穷尽那样。

其中“我最亲爱的青春之梦”（liebsten Jugendtraum）
就被后人指作 Kronecker 的这个宏图。

## 虚二次域的陈述

假设 $K$ 是一个虚二次域，对应的环面是 $\mathbb{C}/\Lambda$。
记 $j$ 为 [[j-不变量|$j$-不变量]]，$\wp$ 为 $\Lambda$ 对应的 [[Weierstraß 椭圆函数]]。
一个模糊的、源自 Kronecker 的陈述是：

$K$ 上的极大 Abel 扩张由 $\wp$ 在 $\mathbb{C}/\Lambda$ 上扭点的取值和 $j(\tau)$ 给出。

当然 Kronecker 的陈述并不是完全正确的。
精准的定理应该是：

::: theorem [主定理]
假设 $H$ 是 $K$ 的 [[Hilbert 类域]]。
设 $E$ 是 $H$ 上的一条带 $\mathcal{O}_K$-复乘的椭圆曲线。
考虑商曲线 $X=E/\mathcal{U}_K$，设 $\mathcal{P}$ 是 $E$ 中的扭点在 $X$ 中的像集。
那么有
\[
K^{\operatorname{ab}}=H\left(
\left\{
\bigcup_{p\in\mathcal{P}}x_p \right\} \right).
\]
而 Hilbert 类域 $H$ 也可以被如下方式完全确定：
任取一条 $K$ 上带 $\mathcal{O}_K$-复乘的椭圆曲线 $E'$，则有
\[
H=K\left( j(E') \right).
\]
:::

## 现代发展

从 1960 年代以来这个理论就快速发展起来了。
在此之前，有 Hecke 用 [[Hilbert 模形式]]研究[[实二次域]]的 Abel 扩张。
而在 1960 年代，
Taniyama 和 Shimura 发展了一般 [[Abel 簇]]的复乘理论，
用它刻画[[CM 域]]的 Abel 扩张。

Langlands 在 1973 年设想青春之梦的现代形式应该关心 [[Shimura 簇]]的
[[Hasse–Weil zeta 函数|Hasse–Weil $ζ$ 函数]]。
而他的 [[Langlands 纲领]]也进一步地发展了这个理论，
只不过还是无法完全回答 Hilbert 第十二问题。

```terms
Kronecker 青春之梦:
  en: Kronecker's Jugendtraum
  fr: Kronecker Jugendtraum
```
