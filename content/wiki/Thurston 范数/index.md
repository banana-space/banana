---
title: Thurston 范数
categories: [几何拓扑]
notices:
  - name: 问题
    items:
      - 本文尚不符合百科页面的格式。
---

设 $M$ 是一个紧致、可定向、不可约的连通三维流形（可能带边），则 $M$ 的 **Thurston
范数**是一个定义在 $H_2(M,\partial M;\mathbb R)$ 上的半范数，
且在合理的条件下成为一个范数。

Thurston 范数衡量了一个同调类
$\sigma\in H_2(M,\partial M;\mathbb R)$ 的拓扑复杂程度，亦可以看做
扭结的[[亏格]]这一概念的推广。Thurston 范数与三维流形的叶状结构、Gabai 的 sutured
三维流形分解以及三维流形的纤维化结构等重要拓扑结构紧密连接，是现代三维流形
研究中的中心问题。

::: definition [曲面的拓扑复杂度]
对于一个可定向紧致连通曲面 $\Sigma$，定义曲面 $\Sigma$ 的拓扑复杂度为
\[
\chi_-(\Sigma):=\max\{0,-\chi(\Sigma)\}.
\]
其中 $\chi(\Sigma)$ 为曲面的 [[Euler 示性数]]。如果 $\Sigma$ 有若干个连通分支，则
定义其拓扑复杂度为各连通分支的拓扑复杂度之和。
:::

由定义可以看出曲面有非平凡的复杂度当且仅当其 Euler 示性数小于零，而且此时曲面的拓扑复杂度
与其双曲面积成正比。

::: definition [整同调的 Thurston 范数]
设 $M$ 是一个紧致、可定向、不可约的连通三维流形。对任意 $\sigma\in H_2(M,\partial M;\mathbb Z)$，令
\[
\xi(\sigma):=\min\{\chi_-(\Sigma)\mid (\Sigma,\partial \Sigma)\ 嵌入\ (M,\partial M),\ 且\ [\Sigma,\partial \Sigma]=\sigma\}.
\]
其中 $[\Sigma,\partial \Sigma]$ 是带边紧曲面 $(\Sigma,\partial\Sigma)$ 的基本类在
$H_2(M,\partial M;\mathbb Z)$ 中的像。这定义了一个映射
\[
\xi:H_2(M,\partial M;\mathbb Z)\rightarrow \mathbb Z.
\]
这个映射是取值在整同调上的 Thurston 范数。
:::

这个定义需要诸多阐释。
首先，任何 $\sigma\in H_2(M,\partial M;\mathbb Z)$ 都可以被嵌入的紧曲面的基本类所代表。
这是一个熟知事实，简单来说，设 $\sigma$ 的 [[Poincaré 对偶]]为 $\phi\in H^1(M;\mathbb Z)$，
那么在同伦意义下，$\phi$ 决定了一个 $M$
到圆周 $S^1$ 的一个映射 $\Phi:M\rightarrow S^1$。
不妨设 $\Phi$ 是光滑映射，其任何一个正则值的原像就是所求的嵌入紧曲面。

其次，由定义 $\xi$ 的取值为非负整数。下面的定理说明了为什么这被称之为“范数”。

::: theorem [Thurston]
映射 $\xi$ 具有如下性质：

- (i) 齐次性：
  对任意整数 $n$ 和 $\sigma\in H_2(M,\partial M;\mathbb Z),$ 有 $\xi(n\sigma)=|n|\xi(\sigma)$。

- (ii) 次可加性：
  对任意 $\sigma_1,\sigma_2 \in H_2(M,\partial M;\mathbb Z),$ 有
  $\xi(\sigma_1+\sigma_2)\leqslant \xi(\sigma_1)+\xi(\sigma_2)$。
:::

最后，因为齐次性，映射 $\xi$ 可以定义到任何有理系数的同调类上，进而由于次可加性，
可以定义到实系数同调类上，得到的映射也称为 $M$ 的 Thurston 范数，它有如下性质。

::: theorem [Thurston 范数]
Thurston 范数 $\xi$ 是实线性空间 $H_2(M,\partial M;\mathbb R)$ 上的半范数。
:::
