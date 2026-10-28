---
title: 轨形
aliases: [Orbifold]
categories: [Lie 理论, 叠论]
navboxes: [高阶几何]
---

<problems>
- “例子”一节需要扩充。
</problems>

**轨形**是类似[[流形]]的形状，
但可能有一些[[奇点]]。
流形局部上看起来像是 [[Euclid 空间]]，
而轨形局部上看起来像是 Euclid 空间商掉[[有限群]]的[[群作用|作用]]。

例如，[[循环群]] $\mathbb{Z}/n\mathbb{Z}$ 以旋转作用在[[平面]] $\mathbb{C}^2$ 上，
得到的商 $\mathbb{C}^2 / (\mathbb{Z}/n\mathbb{Z})$ 就是一个轨形，
它的奇点为 [[A 型奇点|$A_{n-1}$ 型]]。
再例如，[[椭圆曲线的模空间]]是上半平面商去
[[射影特殊线性群|$\mathrm{PSL}(2; \mathbb{Z})$]] 的作用，
它也是一个轨形。

轨形是一种特殊的[[微分叠]]，
其之于微分叠正如 [[Deligne–Mumford 叠]]之于 [[Artin 叠]]。

## 定义

轨形带有的信息不只是一个[[拓扑空间]]，它还记住了其中的点如何被[[群作用]]粘起来。
因此，我们用 [[Lie 群胚]]来描述轨形，其[[对象]]代表轨形的点，
其[[态射]]代表两个点通过群作用被粘起来的关系。

::: definition [轨形群胚]
设 $G = (G_1 \mathrel{\underset{t}{\overset{s}{\rightrightarrows}}} G_0)$
为 [[Lie 群胚]]。

- 称 $G$ [[紧合群胚|紧合]]，如果映射
$(s, t) \colon G_1 \to G_0 \times G_0$
是[[光滑流形]]之间的[[紧合映射]]。

- 称 $G$ [[平展群胚|平展]]，如果两映射
$s, t \colon G_1 \to G_0$ 都是[[局部微分同胚]]。

**轨形群胚**就是指紧合、平展的 Lie 群胚。
:::

::: example [作用群胚]
设 [[Lie 群]] $\Gamma$ 作用于[[光滑流形]] $X$。
定义其 **[[作用群胚]]** $G = X /\mkern-6mu/ \Gamma$ 为一 [[Lie 群胚]]，
其对象空间为 $G_0 = X$，即其对象为 $X$ 中的点；
其态射空间为 $G_1 = \Gamma \times X$，
态射 $(\gamma, x) \in G_1$ 由 $x$ 指向 $\gamma \cdot x$，
也就是说，这一态射将 $x$ 与 $\gamma \cdot x$ 粘起来。

若 $\Gamma$ 是[[有限群]]，则得到的作用群胚是轨形群胚。
更一般地，只要 $\Gamma$ 是[[离散群]]，
并且该作用是[[紧合作用]]，则作用群胚是轨形群胚。
:::

::: definition [轨形]
**轨形**是由轨形群胚表现的[[微分叠]]。
:::

## 例子

- [[椭圆曲线模空间]]。

- [[透镜空间]]。

- [[ADE 奇点]]。

## 参考文献

以下两篇是从[[叠]]的观点出发的介绍。

```bibliography
Lerman2010:
  type: article
  author: 'Lerman, Eugene'
  title: Orbifolds as stacks?
  journaltitle: Enseign. Math.
  volume: 56
  number: 3
  pages: '315-363'
  doi: 10.4171/lem/56-3-4
  year: 2010
  arxiv: '0806.4160'
Moerdijk2002:
  type: preprint
  author: 'Moerdijk, Ieke'
  title: 'Orbifolds as groupoids: an introduction'
  year: 2002
  arxiv: math/0203100
```

```terms
轨形:
  en: orbifold
  fr: orbifold :m
  de: Orbifaltigkeit :f
  grc: τροχοπλούτης :f
  la: orbiplex :n
轨形群胚:
  en: orbifold groupoid
  grc: τροχόπλουν ὁμαδοειδές
  la: catervoides orbiplex
```
