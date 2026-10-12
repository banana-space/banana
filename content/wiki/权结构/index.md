---
title: 权结构
aliases: [衡结构]
categories: [同调代数, $K$ 理论]
notices:
  - name: 问题
    items:
      - “与 t 结构的关系”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**权结构**是[[稳定范畴]]的附加结构，
模拟[[投射模|投射]][[链复形]]的[[暴力截断]]，
也是 [[Hodge 理论]]中权的抽象。

## 定义

::: definition
设 $\mathcal{C}$ 是稳定范畴。$\mathcal{C}$ 的**权结构**，
指的是二元组 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$，满足：

1. $\mathcal{C}_{\ge0}$ 和 $\mathcal{C}_{\le0}$
   都是 $\mathcal{C}$ 的[[满子范畴]]，且关于[[收缩]]封闭。

2. {@平移} 对 $n\in\mathbb{Z}$，记
   $\mathcal{C}_{\ge n}=\mathcal{C}_{\ge0}[n]$，
   $\mathcal{C}_{\le n}=\mathcal{C}_{\le0}[n]$。
   则 $\mathcal{C}_{\ge1}\subseteq\mathcal{C}_{\ge0}$，
   $\mathcal{C}_{\le0}\subseteq\mathcal{C}_{\le1}$。

3. {@0} 对 $x\in\mathcal{C}_{\le0}$，
   $y\in\mathcal{C}_{\ge1}$，有
   $\pi_0\operatorname{Hom}_\mathcal{C}(x,y)=0$。

4. {@截断} 对 $x\in\mathcal{C}$，存在[[正合三角]]
   $x'\to x\to x''$，其中 $x'\in\mathcal{C}_{\le0}$，
   $x''\in\mathcal{C}_{\ge1}$。

保持权结构的正合函子称为**权正合函子**。
带权结构的稳定小范畴关于权正合函子构成范畴，记作
$\mathsf{Cat}^\mathrm{wt}$。
:::

::: remark
和 [[t 结构]]不同的是这里[第 4 条](@截断)的纤维列不会是唯一的。
:::

::: definition [有界性]
称稳定范畴 $\mathcal{C}$ 的权结构
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 为：

- **左有界**，指 $\mathcal{C}=
  \bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\le n}$。

- **右有界**，指 $\mathcal{C}=
  \bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\ge n}$。

- **有界**，指它左有界且右有界。

:::

::: definition [心]
稳定范畴 $\mathcal{C}$ 的权结构
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
的**心**指[[满子范畴]]
$\mathcal{C}_{\ge0}\cap\mathcal{C}_{\le0}$，
记作 $\mathcal{C}^\heartsuit$，它是[[加性范畴]]。
:::

## 例子

- 设 $R$ 是[[环]]，$\mathsf{Perf}(R)$ 是其完美复形范畴，
  即导出范畴 $\mathsf{D}(R)$ 中的紧对象构成的满子范畴，
  则其对象都被[[有限生成模|有限生成]][[投射模]]构成的有界[[链复形]]表示。
  取 $\mathsf{Perf}_{\ge0}(R)$ 为那些只在下标大于等于 $0$ 处有非零投射模的链复形，
  $\mathsf{Perf}_{\le0}(R)$ 为那些只在下标小于等于 $0$ 处有非零投射模的链复形。
  这给出 $\mathsf{Perf}(R)$ 上的权结构。更一般地对 $\mathbb{E}_1$-环也有类似的构造。

- 类似地，有限谱的范畴 $\mathsf{Sp}^\mathrm{fin}$ 上也有权结构，其中
  $\mathsf{Sp}^\mathrm{fin}_{\ge0}$ 为只有维数非负的胞腔者，
  $\mathsf{Sp}^\mathrm{fin}_{\le0}$ 为只有维数非正的胞腔者。

## 性质

以下 $\mathcal{C}$ 是稳定范畴，$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
是其权结构。

::: proposition
二元组 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
中两者相互决定。具体地说，

- $\mathcal{C}_{\le0}=\{x\in\mathcal{C}\mid
  \forall y\in\mathcal{C}_{\ge1},\,
  \pi_0\operatorname{Hom}(x,y)=0\}$。

- $\mathcal{C}_{\ge0}=\{y\in\mathcal{C}\mid
  \forall x\in\mathcal{C}_{\le-1},\,
  \pi_0\operatorname{Hom}(x,y)=0\}$。

:::

::: proof
由对称性只需证第一条。依定义左边包含于右边。现如 $x\in\mathcal{C}$
属于右边，取纤维列 $x'\to x\to x''$ 使得 $x'\in\mathcal{C}_{\le0}$，
$x''\in\mathcal{C}_{\ge1}$。则由条件，$x\to x''$
是零映射，所以 $x$ 是 $x'$ 的收缩，故也属于 $\mathcal{C}_{\le0}$。
:::

::: proposition {@扩张}
对 $n\in\mathbb{Z}$，$\mathcal{C}_{\ge n}$ 与
$\mathcal{C}_{\le n}$ 对扩张封闭。
:::

::: proof
由对称性以及平移，只需证 $\mathcal{C}_{\le0}$
对扩张封闭。设纤维列 $x\to y\to z$ 中
$x,z\in\mathcal{C}_{\le0}$。现对任意
$w\in\mathcal{C}_{\ge1}$，有映射谱的纤维列
$$
\operatorname{Hom}(x,w)\to\operatorname{Hom}(y,w)\to\operatorname{Hom}(z,w)
$$
且其第一项和第三项的 $\pi_0$ 为 $0$。于是其第二项的 $\pi_0$
也是 $0$。所以 $y\in\mathcal{C}_{\le0}$。
:::

::: proposition
对 $n\in\mathbb{Z}$，$\mathcal{C}_{\ge n}$ 对有限余极限封闭，
$\mathcal{C}_{\le n}$ 对有限极限封闭。
:::

::: proof
由 @扩张 它们对直和封闭，故只需证它们分别对余纤维和纤维封闭。
由对称性以及平移，只需证 $\mathcal{C}_{\ge0}$ 对余纤维封闭。
设纤维列 $x\to y\to z$ 中 $x,y\in\mathcal{C}_{\ge0}$。
旋转，得纤维列 $y\to z\to x[1]$，其中 $y\in\mathcal{C}_{\ge0}$，
$x[1]\in\mathcal{C}_{\ge1}\subseteq\mathcal{C}_{\ge0}$。
故由 @扩张，$z\in\mathcal{C}_{\ge0}$。
:::

## 与加性范畴的关系

对权结构取心实际上给出带有界权结构的稳定范畴的范畴到加性范畴的范畴的满忠实函子。
为给出更准确的陈述以及证明，在此先回忆加性范畴的稳定化。
以下 $\mathsf{Cat}^\mathrm{add}$ 表示加性小范畴的范畴，$\mathsf{Cat}^\mathrm{st}$
表示稳定小范畴的范畴。

::: theorem
含入函子 $\mathsf{Cat}^\mathrm{st}\to\mathsf{Cat}^\mathrm{add}$ 有左伴随，
称为加性范畴的**稳定化**，记作 $\mathsf{st}$，由下式给出：
$$
\mathsf{st}(\mathcal{A})=\mathsf{Fun}^\mathrm{add}(\mathcal{A}^\mathrm{op},\mathsf{Sp}^\mathrm{fin}).
$$
:::

::: proposition
对加性范畴 $\mathcal{A}$，记
$$
\mathsf{st}_{\ge0}(\mathcal{A})=\mathsf{Fun}^\mathrm{add}(\mathcal{A}^\mathrm{op},\mathsf{Sp}^\mathrm{fin}_{\ge0}),\,
\mathsf{st}_{\le0}(\mathcal{A})=\mathsf{Fun}^\mathrm{add}(\mathcal{A}^\mathrm{op},\mathsf{Sp}^\mathrm{fin}_{\le0}),
$$
则这给出 $\mathsf{st}(\mathcal{A})$ 上的权结构，且把函子
$\mathsf{st}\colon\mathsf{Cat}^\mathrm{add}\to\mathsf{Cat}^\mathrm{st}$ 穿过
$\mathsf{Cat}^\mathrm{wt}$。
:::

::: theorem
我们有自然的伴随函子
$$
\mathsf{st}\colon\mathsf{Cat}^\mathrm{add}\rightleftarrows\mathsf{Cat}^\mathrm{wt}:\!(-)^\heartsuit
$$
其中 $(-)^\heartsuit$ 限制在有界权结构上为满忠实，
其像为那些在稳定化中对收缩封闭的加性范畴。
:::

## 与 t 结构的关系

（定义权结构和 t 结构横截；陈述分解定理。）

## 参考文献

```bibliography
elmanto2021nilpotent:
  type: preprint
  title: 'On nilpotent extensions of $\infty$-categories and the cyclotomic trace'
  author: [Elden Elmanto, Vladimir Sosnilo]
  year: 2021
  arxiv: '2010.09155'
```

```terms
权结构:
  en: weight structure
```
