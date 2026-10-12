---
title: 射影空间（代数几何）
aliases: [射影空间（概形）]
categories: [代数几何]
notices:
  - name: 消歧义
    see:
      - topic: 一般的概念
        page: 射影空间
  - name: 问题
    items:
      - “性质”一节需要扩充，例如 $\mathcal{O}(1)$ 的性质、层的上同调等。
navboxes: [代数几何]
---

在[[代数几何]]中，**射影空间**是一种基本的[[空间]]。
具体而言，[[域]] $k$ 上的 $n$ 维射影空间，记为 $\mathbb{P}_k^n$，
也就是通常的[[射影空间]] $\mathbb{P} (k^{n+1})$ 在代数几何中的版本。
它是 $k$ 上的[[射影概形]]，也是 $k$ 上的[[射影簇]]。

## 定义

::: definition [射影空间]
设 $R$ 是[[交换环]]，$n$ 是[[自然数]]。
则 $R$ 上的 $n$ 维**射影空间**定义为[[射影谱]]
\[
\mathbb{P}_R^n = \operatorname{Proj} R [x_0, \dotsc, x_n],
\]
其中 $R [x_0, \dotsc, x_n]$ 是 $R$ 上的 $n + 1$ 元[[多项式环]]，
其分次由 $\deg x_i = 1$ 给出。

更一般地，设 $S$ 是[[概形]]，$n$ 是自然数。
则 $S$ 上的 $n$ 维**射影空间**定义为
\[
\mathbb{P}_S^n = S \underset{\operatorname{Spec} \mathbb{Z}}{\times}
\operatorname{Proj} \mathbb{Z} [x_0, \dotsc, x_n].
\]
也常将投影态射 $\mathbb{P}_S^n \to S$ 视为 [[相对概形|$S$-概形]]，
而称该 $S$-概形为射影空间。
:::

## 例子

- 设 $k$ 是[[域]]，$n$ 是自然数。
  我们用如下方式把射影空间 $\mathbb{P}_k^n$
  和通常的[[射影空间]] $\mathbb{P} (k^{n+1})$ 等同起来。

  对不全为零的元素 $a_0, \dotsc, a_n \in k$，
  在射影空间 $\mathbb{P}_k^n$ 中，可以定义一个[[闭点]]
  \[
  (a_0 : \dotsc : a_n) \in \mathbb{P}_k^n,
  \]
  它对应[[齐次理想]]
  \[
  (a_i x_j - a_j x_i) \subset k [x_0, \dotsc, x_n],
  \]
  其中左边是由所有形如 $a_i x_j - a_j x_i$ 的元素生成的理想，
  其中 $i, j \in \{ 0, \dotsc, n \}$。这大致也是所有在子集
  \[
  \{ (a_0 t, \dotsc, a_n t) \mid t \in k \} \subset \mathbb{A}_k^{n+1}
  \]
  上等于 $0$ 的齐次函数构成的理想。
  若 $k$ 是[[代数闭域]]，则这些点就是 $\mathbb{P}_k^n$ 中的所有闭点。

## 性质

```terms
射影空间:
  en: projective space
  fr: espace projectif :m
  de: projektiver Raum :m
  la: spatium projectivum :n
  grc: προβολικὸς χῶρος :m
```
