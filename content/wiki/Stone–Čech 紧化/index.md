---
title: Stone–Čech 紧化
aliases: [Stone–Cech 紧化, Stone-Cech 紧化, Stone-Čech 紧化]
categories: [一般拓扑]
---

<problems>
- “用超滤子”一节需要扩充。
- “例子”一节中离散空间的 Stone–Čech 紧化尚未写出。
</problems>

**Stone–Čech 紧化**是个[[点集拓扑]]构造，
典范地把[[拓扑空间]]变得[[紧空间|紧]] [[Hausdorff 空间|Hausdorff]]。
它是紧 Hausdorff 空间[[范畴]]到拓扑空间范畴的含入函子之[[左伴随]]，
或不严格地说是最大的[[紧化]]。

## 定义

::: definition
设 $X$ 是[[拓扑空间]]。称满足如下[[万有性质]]的拓扑空间
$\beta X$ 以及[[连续映射]] $X\to\beta X$ 为
**Stone–Čech 紧化**：对任一[[紧空间|紧]]
[[Hausdorff 空间]] $Y$，$X$ 到 $Y$
的任一连续映射都唯一地穿过 $X\to\beta X$。
:::

每个拓扑空间都有 Stone–Čech 紧化，但这很不平凡，
依赖于[[选择公理]]。下面是几种证明方法。

### 用 Tikhonov 定理

::: lemma {@势}
设 $Y$ 是 [[Hausdorff 空间]]，$X$ 是其稠密子集。
则 $|Y|\le2^{2^{|X|}}$。
:::

::: proof
作 $Y$ 到 $X$ 幂集的幂集 $\mathcal{P}(\mathcal{P}(X))$
的映射如下：
$$
y\mapsto\{U\cap X\mid U\subseteq Y\ 是\ y\
的开邻域\}.
$$
则首先每个 $y\in Y$ 的像都是由非空集合组成的集族，
且对有限交封闭。但由 Hausdorff，对相异两点 $y,y'\in Y$，
存在它们的不交邻域 $U,U'$，这样 $(U\cap X)\cap(U'\cap X)
\subseteq U\cap U'=\varnothing$。特别地，相异两点
$y,y'\in Y$ 在该映射下的像相异，亦即该映射是单射。
所以 $|Y|\le2^{2^{|X|}}$。
:::

::: corollary {@集合}
设 $X$ 是拓扑空间。则存在集合 $S$，其元素形如 $(Z,f)$，
其中 $Z$ 是紧 Hausdorff 拓扑空间，$f\colon X\to Z$
是连续映射，满足：对任一紧 Hausdorff 拓扑空间 $Y$
以及连续映射 $g\colon X\to Y$，存在元素 $(Z,f)\in S$，
使得 $g$ 穿过 $f$。
:::

::: proof
令 $S$ 的所有元素为形如 $(Z,f)$，其中 $Z$ 取遍底集为
$\mathcal{P}(\mathcal{P}(X))$ 的子集的紧 Hausdorff 空间，
$f$ 取遍连续映射。这样由[[幂集公理]]和[[分出公理]]不难发现
$S$ 是集合。现对任一紧 Hausdorff 拓扑空间 $Y$ 以及连续映射
$g\colon X\to Y$，由 @势，
$\left|\overline{g(X)}\right|\le2^{2^{|X|}}$，
所以存在 $(Z,f)\in S$ 使得 $Z\cong\overline{g(X)}$
且在此同胚下 $f$ 对应于 $g$。这样 $g$ 自然穿过 $f$。
:::

::: theorem
每个拓扑空间 $X$ 都有 Stone–Čech 紧化 $\beta X$，且
$|\beta X|\le2^{2^{|X|}}$。
:::

::: proof
取 @集合 中的集合 $S$，并把对每个 $(Z,f)\in S$
的映射 $f\colon X\to Z$ 合起来成为映射
$$
F\colon X\to\prod_{(Z,f)\in S}Z,
$$
然后令 $\beta X=\overline{F(X)}$，映射 $X\to\beta X$
就是 $F$。下证其符合要求。依定义，$X\to\beta X$ 像集稠密，
所以万有性质中的唯一性显然。至于存在性，取紧 Hausdorff 空间
$Y$ 以及连续映射 $g\colon X\to Y$。由 @集合，
存在 $(Z,f)\in S$ 使得 $g$ 穿过 $f\colon X\to Z$。
由于 $f$ 无非是 $F$ 往 $(Z,f)$ 分量投影，自然穿过 $F$，
所以 $g$ 也就穿过 $F$，存在性得证。
:::

### 用超滤子

### 用 Gelfand 对偶

以 $B(X)$ 记 $X$ 到[[复数]] $\mathbb{C}$ 的有界连续函数的空间，
则它关于[[上确界范数]]和逐点乘法构成 [[$\mathrm{C}^*$ 代数]]。
注意对任一 $x\in X$，
$$
\mathfrak{m}_x=\{f\in B(X)\mid f(x)=0\}
$$
是 $B(X)$ 的[[极大理想]]，因为它是 $B(X)$ 到 $\mathbb{C}$
的满射 $f\mapsto f(x)$ 的核。

::: theorem
$x\mapsto\mathfrak{m}_x$ 是从 $X$ 到 $B(X)$ 的
[[Gelfand 对偶]] $\sigma(B(X))$ 的连续映射，且是
$X$ 的 Stone–Čech 紧化。
:::

## 性质

::: proposition
$X$ 是 [[$\mathrm{T}_{3.5}$ 空间]]，当且仅当 $X\to\beta X$
是单射，且 $X$ 的拓扑是从 $\beta X$ 继承的[[子空间拓扑]]。
此时 $X$ [[局部紧]]当且仅当它是 $\beta X$ 的开子空间。
:::

## 例子

::: example
紧 Hausdorff 空间的 Stone–Čech 紧化是自身。
:::

::: example
（写离散空间的 Stone–Čech 紧化。）
:::

::: example
[[第一不可数序数]] $\omega_1$ 的 Stone–Čech 紧化是
$\omega_1+1$。一般地，只要[[序数]] $A$ 的[[共尾数]]大于
$\aleph_0$，就有 $\beta A=A+1$。
:::

```terms
Stone–Čech 紧化:
  en: Stone–Čech compactification
  de: Stone-Čech-Kompaktifizierung
  fr: compactification de Stone-Čech
```
