---
title: 开集
aliases: [开子集]
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “拓扑空间中的开集”一节列出的公理似乎缺少“空集与全空间是开集”一条。
navboxes: [一般拓扑]
---

**开集**是[[拓扑空间]]中的一种基本的概念。
开集是[[实数]]上[[开区间]]的推广，指[[拓扑空间]]中满足以下性质的集合：
它的每个点都在它的内部，也就是说，从那个点的视角看，
与它离得足够近的所有点都在该开集内。
例如，[[闭区间]]因为有端点而不满足这个性质。

## 定义

### Euclid 空间中的开集

::: definition [Euclid 空间中的开集] {@def-euclid-open}
设 $n \in \mathbb{N}$。集合 $U \subset \mathbb{R}^n$ 称为**开集**，
如果它满足以下条件：

- 对任意 $x \in U$，
  存在实数 $\delta > 0$，
  使得[[开球]]
  \[
  B_{\delta} (x) = \{ x' \in \mathbb{R}^n \mid |x - x'| < \delta \}
  \]
  包含于 $U$。

这些开集定义了 $\mathbb{R}^n$ 上的一个[[拓扑空间|拓扑]]，称为 **Euclid 拓扑**。
:::

::: example [$\mathbb{R}$ 中的开集]
$\mathbb{R}$ 中的开集一定是至多[[可数]]个[[开区间]]的[[无交并]]。
:::

::: proof
我们先证明 $\mathbb{R}$ 中[[连通]]集一定是区间。
设 $I$ 是 $\mathbb{R}$ 中一个连通集但不是区间，则存在 $a<b<c, a,c\in I, b\notin I$。
于是 $a\in I\cap (-\infty, b)\ne \varnothing, c\in I\cap(b,+\infty)\ne \varnothing$，
$I=(I\cap (-\infty, b))\sqcup (I\cap(b,+\infty))$，这与 $I$ 的连通性矛盾，于是得证。

$\mathbb{R}$ 中的开集一定是它所有[[连通分支]]的无交并。
于是，设 $X$ 是 $\mathbb{R}$ 中一开集，$X=\bigsqcup_{i\in J} I_i$，其中 $I_i$ 是 $X$ 的连通分支，
它一定是区间。我们来证明 $I_i$ 都是开区间。
设 $I_i$ 不是开区间，不妨设 $a\in I_i$ 是 $I_i$ 的最小值，$I_i$ 含有最大值的情况同此可证。
由于 $X$ 是开集，存在开球 $B_\epsilon(a)=(a-\epsilon, a+\epsilon)\subset X, \epsilon>0$，
显然 $B_\epsilon(a)\cup I_i$ 也是一个区间，是 $X$ 的一个连通子集；而它真包含 $I_i$，
这和 $I_i$ 是 $X$ 的连通分支矛盾。于是 $I_i$ 均是开区间。

由于 $\mathbb{Q}$ 在 $\mathbb{R}$ 中[[稠密]]，对于所有 $i\in J$，
可以取 $\alpha_i\in I_i\cap \mathbb{Q}$，而且对于 $i,j\in J, i\ne j$，
一定有 $\alpha_i\ne \alpha_j$。
我们就构造了 $J$ 到 $\mathbb{Q}$ 的单射，于是 $|J|\le |\mathbb{Q}|$，即开区间的个数为至多可数。
:::

### 度量空间中的开集

::: definition [度量空间中的开集]
设 $X$ 是[[度量空间]]。集合 $U \subset X$ 称为**开集**，
如果它满足以下条件：

- 对任意 $x \in U$，
  存在实数 $\delta > 0$，
  使得[[开球]]
  \[
  B_{\delta} (x) = \{ x' \in X \mid d(x, x') < \delta \}
  \]
  包含于 $U$，
  其中 $d(-, -)$ 是 $X$ 上的距离函数。

这些开集定义了 $X$ 上的一个[[拓扑空间|拓扑]]，
称为由 $X$ 的度量所诱导的拓扑。
:::

@def-euclid-open 就是取度量空间为 $\mathbb{R}^n$，度量为 $d(x,y)=|x-y|$ 的情形。

### 拓扑空间中的开集

在[[拓扑空间]]中，开集是拓扑空间的定义的一部分。
开集指的是一族满足以下公理的子集：

- 有限个开集的交是开集。

- 任意多个开集的并是开集。

```terms
开集:
  en: open set
  de: offene Menge :f
  fr: ensemble ouvert :m
  grc: ἀνοικτὸν σύνολον :n
  la: copia aperta
开:
  en: open
  de: offen
  fr: ouvert
  grc: ἀνοικτός
  la: apertus
```
