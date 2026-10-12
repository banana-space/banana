---
title: Becchi–Rouet–Stora–Tyutin 量子化
aliases: [BRST 量子化, Becchi-Rouet-Stora-Tyutin 量子化]
categories: [量子场论]
notices:
  - name: 问题
    items:
      - “动机”“数学观点”“例子”各节需要扩充。“动机”一节应说明为什么不能直接把规范场量子化；“例子”一节应包括规范场、点粒子和弦。
      - “陈述”一节证明中 $\det\left( \frac{dF^A}{dx^\alpha} \right)$ 的 Graßmann 积分表示里，$\exp$ 前的因子 $b_A c^\alpha$ 似乎是多余的，且 $F_A(\phi)$ 的指标似乎应写在上方。
---

**Becchi–Rouet–Stora–Tyutin 量子化**，
简称 **BRST 量子化**，
是一种量子化有[[规范对称性]]的[[场 (物理)|场]]的方法。
大致地说，
它在原有的场的作用量中加入了规范固定项和[[Faddeev–Popov 鬼|鬼场]]。

## 动机

## 陈述

::: theorem
记场为 $\phi$，[[作用量]]为 $S(\phi)$，它的规范群为 $G$，
$G$ 的无穷小局部坐标用 $x^\alpha$ 表示。
固定规范 $F^A(\phi) = 0$（$A$ 为一组指标）。
则在引入新的 [[Bose 场]] $B_A$
和 [[Fermi 场]] $b_A$、$c^\alpha$ 后，
作用量
\[
\tilde{S} = S(\phi) - \mathrm{i} B_A F^A(\phi)
+ b_A c^\alpha \delta_\alpha F^A(\phi)
\]
满足[[真空泛函]]
\[
Z = \int d\phi dB_A db_A dc^\alpha \exp(-\tilde{S})
= \int \frac{d\phi}{G} \exp(-S).
\]
这里 $\mathrm{i} B_A F^A(\phi)$ 一项称为**规范固定项**；
而 $b_A$、$c^\alpha$ 称为
**Faddeev–Popov 鬼**或**鬼场**。
则作用量的最后一项即是鬼场的作用量。
:::

这即是说虽然在对规范场做量子化时需要把测度商掉 $G$ 而不好计算，
但在引入一些合适的新的场后，就可以避免之而做通常的[[路径积分]]计算。
有时规范固定项或鬼场的形式会略有不同，但大体思想是一致的。

下面给出在通常的物理教材中的很不严格的证明。

::: proof
回忆在 $\mathbb{R}^n$ 中，对函数 $u \colon \mathbb{R}^n \to \mathbb{R}^n$，
有积分等式
\[
\int dx\ \delta(u(x))
\det\left( \frac{du}{dx} \right) = 1,
\]
这里 $\delta$ 表示 [[$\delta$ 函数]]。
将它推广到无穷维空间，我们可以想象有
\[
\int_G dg\ \delta(F^A(\phi))
\det\left( \frac{dF^A}{dx^\alpha} \right) = 1.
\]
因此代入原积分式，并把 $G$ 消掉，可得
\[
\int \frac{d\phi}{G} \exp(-S) =
\int d\phi\ \delta(F^A(\phi))
\exp(-S)\det\left( \frac{dF^A}{dx^\alpha} \right).
\]
同样作为有限维空间的类似结论的推广，可以想象
\[
\delta(F^A(\phi))
= \int dB_A \exp(\mathrm{i} B_A F^A).
\]
与此同时，由 [[Graßmann 数]]的路径积分的性质，有等式
\[
\det\left( \frac{dF^A}{dx^\alpha} \right)
= \int db_A dc^\alpha b_A c^\alpha
\exp(-b_A c^\alpha \delta_\alpha F_A(\phi)).
\]
综合以上几式，可知结论成立。
:::

## 数学观点

## 例子

```terms
BRST 量子化:
  en: BRST quantization
  de: BRST-Quantisierung
  fr: quantisation de BRST
  la: quantizatio BRST
```
