---
title: Calabi–丘流形
aliases: [Calabi-丘流形, Calabi–丘簇, Calabi–Yau 流形]
categories: [复几何, 代数几何]
navboxes: [代数几何]
---

在[[复几何]]与[[代数几何]]中，
**Calabi–丘流形**是一类[[紧空间|紧]] [[Kähler 流形]]，
其[[典范丛]]平凡。
例如，复 $1$ 维的 Calabi–丘流形是[[椭圆曲线]]；
复 $2$ 维的 Calabi–丘流形包括 $2$ 维[[复环面]]和 [[K3 曲面]]。
这一概念也可以推广到一般的[[域]]上，
即 **Calabi–丘簇**，
也就是指典范丛平凡的[[紧合簇|紧合]]、[[光滑簇]]。

由于 [[Calabi–丘定理]]，
Calabi–丘流形上存在 [[Ricci 曲率]]为零的 [[Kähler 度量]]。
在[[广义相对论]]中，[[Einstein 场方程]]描述了[[时空]]的度量与其中物质分布的联系。
如果假设[[宇宙常数]]为零，则真空中该方程等价于 Ricci 曲率为零的条件，
故而 Calabi–丘流形是真空场方程的解。
在[[弦论]]中，额外的空间维度也由 Calabi–丘流形描述：
[[超弦论]]要求时空是 $10$ 维流形 $M \times X$，
其中 $M$ 是我们所见的 $4$ 维时空，
而 $X$ 是一个复 $3$ 维的紧 Calabi–丘流形，
其尺度十分微小，故不为我们所见。
弦论学家提出了[[镜像对称]]的概念，
它将 Calabi–丘流形的几何与另一个 Calabi–丘流形的几何联系起来。
这一概念至今未被严格叙述和证明，
成为几何学家最感兴趣的问题之一。

另一方面，从某种意义上说，Calabi–丘流形、Calabi–丘簇
也是[[定向流形]]在复几何、代数几何中的类比。
$n$ 维[[光滑流形]]的定向可以由处处非零的 $n$ 次[[微分形式]]给出，
而相应地，$n$ 维 Calabi–丘流形则具有处处非零的 $n$ 次[[全纯微分形式]]。

Calabi–丘流形得名于 Calabi 猜想（即 [[Calabi–丘定理]]）的提出者
[[Eugenio Calabi]]，及其解决者[[丘成桐]]。

## 定义

### 在复几何中

::: definition [Calabi–丘流形] {@thm:定义}
**Calabi–丘流形**是指[[紧空间|紧]] [[Kähler 流形]] $X$，
其[[典范丛]]是[[平凡丛]]：$K_X \simeq \mathcal{O}_X$。
:::

::: remark
在文献中，有时使用更弱的定义，
不要求典范丛是平凡丛，而仅要求流形的第一[[陈类]]为零：$c_1 (X) = 0$。
这等价于典范丛是平凡的拓扑向量丛，但并不一定是平凡的全纯向量丛。

另一些文献中使用更强的定义，不仅要求典范丛平凡，
还要求[[层上同调]] $H^i (X, \mathcal{O}_X) = 0$，
其中 $i = 1, \dotsc, \dim_{\mathbb{C}} X - 1$。
这种更强的概念有时也称为**严格 Calabi–丘流形**。

在本文中，我们以 @thm:定义 为准。
:::

### 在代数几何中

::: definition [Calabi–丘簇]
[[域]] $k$ 上的 **Calabi–丘簇**是指 $k$ 上的
[[紧合簇|紧合]]、[[光滑簇]] $X$，
其[[典范丛]] $K_X$ 是[[平凡丛]]：$K_X \simeq \mathcal{O}_X$。
:::

## 例子

### $1$ 维

$1$ 维的 Calabi–丘流形是[[椭圆曲线]]。

### $2$ 维

[[单连通空间|单连通]]的 $2$ 维 Calabi–丘流形就是 [[K3 曲面]]，它们都是[[代数曲面]]。

非单连通的 $2$ 维 Calabi–丘流形是 $2$ 维[[复环面]]。
多数复环面并不是[[代数曲面|代数]]的，其中确实是代数的那些是 [[Abel 曲面]]。

### $3$ 维

$3$ 维 Calabi–丘流形至今未能分类，甚至不知道其拓扑类的数目是否有限。
[[丘成桐]]猜想每一维数下这个数目都有限。
但即使真的有限，这个数目也相当庞大，
目前已构造出至少三万种可能的 [[Hodge 菱形]] [@Kreuzer2000]。

一个最著名的例子是 $\mathbb{CP}^4$ 中的[[五次三维流形]]，由方程
\[
x_0^5 + x_1^5 + x_2^5 + x_3^5 + x_4^5 - 5 \psi x_0 x_1 x_2 x_3 x_4 = 0
\]
给出，其中参数 $\psi \in \mathbb{C}$ 不为 $0$ 或五次[[单位根]]。

### 一般维数

在 $\mathbb{CP}^{n+1}$ 中，由 $n+2$ 次多项式定义的[[超曲面]]是
$n$ 维 Calabi–丘流形。

更一般地，设 $X$ 是 $\mathbb{CP}^{n}$ 中次数为 $(d_1,\dotsc,d_r)$ 的光滑[[完全交]]。
如果 $d_1+\cdots+d_r=n+1$，由[[伴随公式]]可知 $X$ 的典范丛平凡，
即 $X$ 是 $n-r$ 维 Calabi–丘流形。

## 参考文献

关于 Calabi–丘流形各方面研究的综述：

```bibliography
Yau2008:
  type: article
  author: Shing-Tung Yau
  year: 2008
  title: A survey of Calabi–Yau manifolds
  journaltitle: Surveys in Differential Geometry
  volume: 13
  number: 1
  pages: '277-318'
  doi: 10.4310/sdg.2008.v13.n1.a9
  url: https://www.intlpress.com/site/pub/files/_fulltext/journals/sdg/2008/0013/0001/SDG-2008-0013-0001-a009.pdf
```

$3$ 维 Calabi–丘流形的批量构造：

```bibliography
Kreuzer2000:
  type: article
  author: ['Kreuzer, Maximilian', 'Skarke, Harald']
  year: 2000
  title: Complete classification of reflexive polyhedra in four dimensions
  journaltitle: Advances in Theoretical and Mathematical Physics
  volume: 4
  number: 6
  pages: 1209–1230
  doi: 10.4310/atmp.2000.v4.n6.a2
  arxiv: hep-th/0002240
```

```terms
Calabi–丘流形:
  en: Calabi–Yau manifold
  fr: variété de Calabi–Yau
  de: Calabi-Yau-Mannigfaltigkeit
Calabi–丘簇:
  en: Calabi–Yau variety
  fr: variété de Calabi–Yau
  de: Calabi-Yau-Varität
```
