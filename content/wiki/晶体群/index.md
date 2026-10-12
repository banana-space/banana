---
title: 晶体群
categories: [晶格论]
navboxes: [Euclid 几何]
---

在 [[Euclid 几何]]中，
**晶体群**（也称为**空间群**）
指的是 [[Euclid 空间]] $\mathbb{R}^n$ 的[[等距同构群]]
$\mathrm{Iso}(\mathbb{R}^n)$ 的余紧离散子群。
这类群可以实现为 $\mathbb{R}^n$ 中某个晶体的等距同构群，因此称为“晶体群”。

[[Bieberbach 定理]]表明晶体群必为 $\mathbb{Z}^n$ 和[[正交群]]
$\mathrm{O}_n(\mathbb{R})$ 的有限子群的[[群扩张]]，
其中前者大致指的是平移构成的子群，后者则大致表示群里的旋转和反射。
由此，可以用研究[[群扩张]]的工具（例如[[群上同调]]）来分类晶体群。
目前已经分类不超过六维的晶体群。

## 定义

::: definition [晶体群]
**$n$ 维晶体群**指的是 [[Euclid 空间]] $\mathbb{R}^n$
的等距同构群的[[余紧]]离散子群 $G \subset \mathrm{Iso}(\mathbb{R}^n)$。
:::

$\mathrm{Iso}(\mathbb{R}^n)$ 是
$\mathbb{R}^n$ 与 $\mathrm{O}_n(\mathbb{R})$ 的扩张：它满足以下正合列
\[
1 \to \mathbb{R}^n \to \mathrm{Iso}(\mathbb{R}^n) \to \mathrm{O}_n(\mathbb{R}) \to 1.
\]
其中 $\mathbb{R}^n$ 表示由平移构成的子群。
以下的 [[Bieberbach 定理]]表明，晶体群也可以写成群扩张的形式：
它是 $\mathbb{Z}^n$ 和有限群的扩张。

::: theorem [Bieberbach]
对晶体群 $G \subset \mathrm{Iso}(\mathbb{R}^n)$，
子群 $G \cap \mathbb{R}^n$ 是 $\mathbb{R}^n$ 中的[[晶格]]
（也就是同构于 $\mathbb{Z}^n$ 的离散子群），
且 $G/(G\cap \mathbb{R}^n) \subset \mathrm{O}_n(\mathbb{R})$ 是有限群。
:::

::: definition [晶格与点群]
上述定理中，$G\cap \mathbb{R}^n$ 称为 $G$ 的**晶格**，
$G/G \cap \mathbb{R}^n$ 称为 $G$ 的 **[[点群]]**。
:::

::: definition [同构]
两个晶体群 $G, H \subset \mathrm{Iso}(\mathbb{R}^n)$ **同构**，
指的是存在 $\mathbb{R}^n$ 上的[[仿射变换]]
使得它们共轭。
如进一步要求此仿射变换保持 $\mathbb{R}^n$ 的[[定向]]，
则它们称为**保向同构**的。
:::

## 分类

晶格理论中的重要问题是给出晶体群的同构类和保向同构类，
有时也会按照晶体群对应的[[晶格]]或[[点群]]来做粗糙的分类。

由上述论断，晶体群 $G$ 满足以下正合列
\[
1 \to \mathbb{Z}^n \to G \to \bar{G} \to 1.
\]
$\bar{G}$ 是 $\mathrm{O}_n(\mathbb{R})$ 的有限子群，
它通过共轭作用于 $\mathbb{Z}^n$ 上。
因此晶体群的分类大致可分成以下几个步骤来解决。

- 分类所有 $\mathrm{O}_n(\mathbb{R})$ 的有限子群，即所有点群。

- 对 $\mathrm{O}_n(\mathbb{R})$ 的有限子群 $\bar{G}$，
  分类 $\bar{G}$ 在 $\mathbb{Z}^n$ 上作用的 $\mathrm{GL}_n(\mathbb{Z})$-共轭类。

- 对上述群 $\bar{G}$ 和群作用 $\bar{G} \circlearrowleft \mathbb{Z}^n$，
  分类群扩张
  \[
  1 \to \mathbb{Z}^n \to G \to \bar{G} \to 1.
  \]
  它大致由[[群上同调]] $H^2(\bar{G}, \mathbb{Z}^n)$ 给出
  （但不尽然，需商去由 $\bar{G}$ 和 $\mathbb{Z}^n$ 的自同构在上同调上的作用）。

## 例子

- 一维晶体群必保向同构于 $\mathbb{Z}$ 或 $\mathbb{Z} \rtimes \mathbb{Z}/2$。

- [[二维晶体群]]和[[三维晶体群]]的分类见相应条目。

```terms
晶体群:
  en: crystallographic group
空间群:
  en: space group
```
