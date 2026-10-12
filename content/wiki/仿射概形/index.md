---
title: 仿射概形
categories: [概形论]
notices:
  - name: 问题
    items:
      - “例子”“性质”各节需要扩充。
navboxes: [代数几何, 概形论]
---

在[[代数几何]]中，
**仿射概形**是一类最简单的[[概形]]，
指形如[[交换环]]的[[素谱]]的概形。
正如在[[微分几何]]中，[[流形]]由 [[Euclid 空间]]粘接出来，
在代数几何中，[[概形]]则由仿射概形粘接出来。

仿射概形的一类典型的例子是[[仿射簇]]。
对[[域]] $k$ 及[[自然数]] $n$，
[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}_k^n$ 是最简单的一类仿射簇，
它基本上是[[向量空间]] $k^n$，
但会包含更多的点和结构（尤其是在域 $k$ 非代数闭时）。
在该空间中，由[[多项式]]方程
\[
f (x_1, \dotsc, x_n) = 0
\]
刻画出的集合，记为 $V_f \subset \mathbb{A}_k^n$，
就是仿射簇。这里 $f \in k [x_1, \dotsc, x_n]$。

在基于[[概形]]的代数几何中，在[[代数–几何对偶]]的观点下，
仿射空间定义为多项式环的[[素谱]]
\[
\mathbb{A}_k^n = \operatorname{Spec} k [x_1, \dotsc, x_n].
\]
具体而言，多项式环 $k [x_1, \dotsc, x_n]$
是空间 $\mathbb{A}_k^n$ 上所有[[函数]]构成的环，
而代数–几何对偶的观点表明，可以通过该多项式环还原出原来的空间。
在此观点下，上述集合 $V_f$ 上的函数环应该是[[商环]]
\[
k [x_1, \dotsc, x_n] / (f),
\]
这里 $(f)$ 表示 $f$ 生成的[[主理想]]。这是因为，
$V_f$ 上的函数也应该是关于 $x_1, \dotsc, x_n$ 的多项式，
但因为函数 $f$ 在 $V_f$ 上为零，所以 $f$ 和 $0$ 视为 $V_f$ 上的同一个函数。
事实上，在代数几何中，我们就定义
\[
V_f = \operatorname{Spec} \bigl( k [x_1, \dotsc, x_n] / (f) \bigr).
\]

更一般地，也可以考虑多个多项式所刻画的集合。
例如，对 $\mathbb{A}_k^n$ 上的多项式函数
$f_1, \dotsc, f_m$，其公共零点集定义为
\[
V_{f_1, \dotsc, f_m} =
\operatorname{Spec} \bigl( k [x_1, \dotsc, x_n] / (f_1, \dotsc, f_m) \bigr),
\]
它也是仿射簇，从而也是仿射概形。

我们还可以脱离[[域]]，考虑一般的交换环，
此时仿射概形就定义成形如 $\operatorname{Spec} A$ 的[[概形]]，
其中 $A$ 是某个[[交换环]]。这也是现在通用的定义。
仿射概形是“多项式的零点集”之推广，
而一般的[[概形]]则由仿射概形沿着[[开集]]拼接得到。

对仿射概形而言，[[代数–几何对偶]]可以表述为[[范畴等价]]
\[
\operatorname{Spec} \colon
\mathsf{CRing}^{\mathrm{op}} \simeq \mathsf{Aff},
\]
其中 $\mathsf{CRing}$ 是[[交换环]]范畴，$\mathsf{Aff}$ 是仿射概形范畴，
$\operatorname{Spec}$ 表示[[素谱]]，其逆函子将仿射概形 $X$
映到其函数环 $\mathcal{O}_X (X)$。

## 定义

::: definition [仿射概形]
称[[局部环化空间]] $(X, \mathcal{O}_X)$ 为**仿射概形**，
若存在[[交换环]] $A$，使得
$(X, \mathcal{O}_X)$ 同构于 $A$ 的[[素谱]]
$(\operatorname{Spec} A, \mathcal{O}_{\operatorname{Spec} A})$。
:::

## 例子

## 性质

```terms
仿射概形:
  en: affine scheme
  fr: schéma affine :m
  de: affines Schema :n
  ja: アフィンスキーム
  ko: 아핀 스킴
```
