---
title: 扩展图
categories: [图论]
navboxes: [图论]
---

::: convention
在本文中，

- [[图]]指有限的[[简单无向图]]。
- $A^\mathrm{c}$ 表示集合 $A$ 的[[补集]]。
- $\Delta(G)$ 表示图 $G$ 的顶点的最大度数。

:::

**扩展图**是一类连通性较强的[[图]]，
在[[计算复杂性]]和[[编码理论]]中有所应用。

## 定义

扩展图不是定性概念而是定量概念。
下面是几种不完全相同而又差不多的定义图的**扩展度**的方式：

::: definition [边扩展度]
图 $G$ 的**边扩展度**，或称
**Cheeger 常数**，指
$$
h(G)=\min_{\emptyset\subsetneq A\subsetneq V(G)}
\frac{|E(A,A^\mathrm{c})|}{\min\{|A|,|A^\mathrm{c}|\}},
$$
其中 $E(A,A^\mathrm{c})$ 指一个顶点在 $A$ 另一个顶点在
$A^\mathrm{c}$ 的边组成的集合。对 $\varepsilon\in\mathbb{R}_+$，
**$\varepsilon$-边扩展图**指边扩展度至少是
$\varepsilon$ 的图。
:::

边扩展度是意义最明显的定义，大致衡量了图的“瓶颈”，
即把图切成两个不小的块至少要切多少边。单说“扩展度”和
“扩展图”通常都指边扩展度和边扩展图。

::: definition [点扩展度]
图 $G$ 的**点扩展度**指
$$
h_点(G)=\min_{A\subseteq V(G),\,0<|A|\le|V(G)|/2}
\frac{|\partial_外(A)|}{|A|},
$$
其中 $\partial_外(A)$ 指在 $A$ 外但与 $A$
相邻的点组成的集合。对 $\varepsilon\in\mathbb{R}_+$，
**$\varepsilon$-点扩展图**指点扩展度至少是
$\varepsilon$ 的图。
:::

容易发现 $\frac{h(G)}{\Delta(G)}\le h_点(G)\le\Delta(G)h(G)$。
即对于度数 $O(1)$ 的图，点扩展度和边扩展度没有渐近差别。

::: definition [谱隙]
设 $n$ 阶图 $G$ 的**谱隙**指其
[[Laplace 算子 (图论)|Laplace 算子]]的次小特征值，计重数。
:::

由于 [[Cheeger 不等式 (图论)|Cheeger 不等式]]，
谱隙也可视为一种扩展度。正则图还有一种谱扩展性，
对 Laplace 的最大特征值也提出要求。

::: definition [$(n,d,\lambda)$-图]
设 $n$ 阶 [[$d$-正则图]] $G$ 的[[邻接矩阵]]的特征值为
$d=\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n$，计重数。记
$$
\lambda(G)=\max\{\lambda_2,-\lambda_n\}.
$$
对[[二部图|二部]]的 $G$，$\lambda_n=-d$，此时记
$$
\lambda_{二部}(G)=\max\{\lambda_2,-\lambda_{n-1}\}.
$$
对 $\lambda\in\mathbb{R}_+$，
**$(n,d,\lambda)$-（二部）图**指
$\lambda_{(二部)}(G)\le\lambda$ 的图。
:::

## 例子

- 显然，不[[连通图|连通]]图的边扩展度、点扩展度、谱隙都是 $0$。

```terms
扩展图:
  en: expander graph
边扩展度:
  en: edge expansion
点扩展度:
  en: vertex expansion
谱隙:
  en: spectral gap
```
