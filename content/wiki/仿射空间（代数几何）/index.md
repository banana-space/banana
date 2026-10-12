---
title: 仿射空间（代数几何）
aliases: [仿射空间（概形）]
categories: [代数几何]
notices:
  - name: 消歧义
    see:
      - topic: 一般的概念
        page: 仿射空间
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [代数几何]
---

在[[代数几何]]中，**仿射空间**是一类基本的[[空间]]。
具体而言，[[域]] $k$ 上的 $n$ 维仿射空间，记为 $\mathbb{A}_k^n$，
也就是 $k$ 上的 $n$ 维[[向量空间]] $k^n$ 在[[代数几何]]中的版本。
它是 $k$ 上的[[仿射概形]]，也是 $k$ 上的[[仿射代数簇]]。

准确来说，仿射空间通过[[代数–几何对偶]]的观点来定义，
也就是将空间对应到它的函数环。
在代数几何中，我们考虑的函数是[[多项式]]函数，
因此，空间 $k^n$ 上的函数环就是 $n$ 元多项式环 $k [x_1, \dotsc, x_n]$。
代数–几何对偶的观点说明，可以通过该函数环来描述原来的空间。从而，我们定义仿射空间为
\[
\mathbb{A}_k^n = \operatorname{Spec} k [x_1, \dotsc, x_n],
\]
即多项式环 $k [x_1, \dotsc, x_n]$ 的[[素谱]]。
通过[[交换代数]]中的 [[Hilbert 零点定理]]，
可以具体地验证上述观点，也就是验证在 $k$ 是[[代数闭域]]的假设下，
该素谱中的[[闭点]]可以等同于向量空间 $k^n$ 的点。
当 $k$ 不是代数闭域时，仿射空间将包含更多的点，
这使得仿射空间含有比向量空间 $k^n$ 更多的信息。

从仿射空间出发，可以构造出所有的[[代数簇]]，
因为所有[[仿射代数簇]]都是仿射空间中多项式的零点集，
而所有代数簇都可以由仿射代数簇拼接得到。

## 定义

::: definition
设 $R$ 是[[交换环]]，$n$ 是[[自然数]]。
则 $R$ 上的 $n$ 维**仿射空间** $\mathbb{A}_R^n$ 定义为[[概形]]
\[
\mathbb{A}_R^n = \operatorname{Spec} R [x_1, \dotsc, x_n],
\]
其中 $R [x_1, \dotsc, x_n]$ 为 $n$ 元[[多项式环]]。

更一般地，设 $S$ 是[[概形]]，$n$ 是自然数。
则 $S$ 上的 $n$ 维**仿射空间** $\mathbb{A}_S^n$ 定义为[[纤维积概形]]
\[
\mathbb{A}_S^n = S \underset{\operatorname{Spec} \mathbb{Z}}{\times}
\operatorname{Spec} \mathbb{Z} [x_1, \dotsc, x_n].
\]
也常将投影态射 $\mathbb{A}_S^n \to S$ 视为 [[相对概形|$S$-概形]]，
而称该 $S$-概形为仿射空间。
:::

在上述定义中，若取 $S = \operatorname{Spec} R$，
则由[[纤维积概形]]的性质，可得到
\[
\begin{aligned}
  \mathbb{A}_{\operatorname{Spec} R}^n
  & \simeq
  \operatorname{Spec} \Bigl( R \underset{\mathbb{Z}}{\otimes}
    \mathbb{Z} [x_1, \dotsc, x_n] \Bigr) \\
  & \simeq
  \operatorname{Spec} R [x_1, \dotsc, x_n] \\
  & \simeq \mathbb{A}_R^n \, ,
\end{aligned}
\]
故定义的第一条是第二条当 $S = \operatorname{Spec} R$ 时的特例。

## 例子

- 设 $k$ 是[[域]]，$n$ 是自然数。
  我们用如下方式把仿射空间 $\mathbb{A}_k^n$ 和[[向量空间]] $k^n$ 等同起来。

  对 $a_1, \dotsc, a_n \in k$，
  在仿射空间 $\mathbb{A}_k^n$ 中，可以定义一个[[闭点]]
  \[
  (a_1, \dotsc, a_n) \in \mathbb{A}_k^n,
  \]
  它对应[[极大理想]]
  \[
  (x_1 - a_1, \dotsc, x_n - a_n) \subset k [x_1, \dotsc, x_n].
  \]
  若 $k$ 是[[代数闭域]]，则 [[Hilbert 零点定理]]的推论表明，
  这些点就是 $\mathbb{A}_k^n$ 中的所有闭点。

- 更一般地，设 $R$ 是[[交换环]]，$n$ 是自然数。
  则对 $a_1, \dotsc, a_n \in R$，
  在仿射空间 $\mathbb{A}_R^n$ 中，可以定义 [[相对概形|$R$-点]]
  \[
  (a_1, \dotsc, a_n) \colon
  \operatorname{Spec} R \longrightarrow \mathbb{A}_R^n,
  \]
  它由[[环同态]]
  \[
  \begin{aligned}
    R [x_1, \dotsc, x_n] & \longrightarrow R, \\
    x_i & \longmapsto a_i
  \end{aligned}
  \]
  给出。

## 性质

```terms
仿射空间:
  en: affine space
  fr: espace affine :m
  de: affiner Raum :m
```
