---
title: 光滑概形
aliases: [光滑簇]
categories: [概形论]
navboxes: [概形论]
---

<problems>
- “普遍光滑性”一节的定理似乎还需要假设 $X$ 是既约的（例如 $\operatorname{Spec} k[x]/(x^2)$ 没有光滑点）。
</problems>

在[[代数几何]]中，
[[域]] $k$ 上的**光滑概形**是指
局部看起来像[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}_k^n$ 的 [[相对概形|$k$-概形]]，
也就是没有[[奇点]]的 $k$-概形。
若一个光滑概形也是[[代数簇]]，则称之为**光滑簇**。
光滑簇可以视为[[微分几何]]中[[光滑流形]]、[[复流形]]等概念在代数几何中的类比。

光滑概形的[[相对观点|相对]]版本是[[光滑态射]]。
换言之，光滑态射描述“一族光滑概形”的概念。

## 定义

::: definition
设 $k$ 是[[域]]。

- $k$ 上的**光滑概形**
  是指 [[相对概形|$k$-概形]] $X$，
  其结构态射 $X \to \operatorname{Spec} k$
  是[[光滑态射]]。

- $k$ 上的**光滑簇**
  是指 $k$-[[代数簇]] $X$，
  其结构态射 $X \to \operatorname{Spec} k$
  是[[光滑态射]]。

:::

由于光滑态射都是[[局部有限型态射]]，
光滑概形只需再满足[[拟紧空间|拟紧]]、[[分离态射|分离]]两个条件就是光滑簇。

也有概形在某点处光滑的概念：

::: definition {@光滑点}
设 $k$ 是[[域]]，$X$ 是 [[相对概形|$k$-概形]]，$x \in X$ 是其中一点。
称 $X$ 在 $x$ 处**光滑**，或者说 $x$ 是 $X$ 的**光滑点**，
是指满足以下条件：

- 存在 $x$ 的[[开邻域]] $x \in U \subset X$，
  使得 $U$ 是光滑 $k$-概形。

$X$ 的所有光滑点构成[[开子概形]] $X^{\mathrm{sm}} \subset X$，
它是光滑概形。
:::

光滑性是局部性质。也就是说，$k$-概形 $X$ 光滑等价于其在每点处光滑。

$X$ 的非光滑点常常称为 **[[奇点]]**。
需要注意，严格来说，奇点定义为使 $X$ 不[[正则概形|正则]]的点，
但光滑性和正则性在[[完全域]]上是等价的（@正则比较），
此时使用这一术语是没有歧义的。

## 性质

### 局部刻画

以下结论由[[光滑态射]]的性质蕴涵。

::: theorem [局部刻画] {@thm:局部刻画}
设 $k$ 是域，$X$ 是 $k$-概形，$x \in X$ 是其中一点。则下列等价：

- $X$ 在 $x$ 处光滑（@光滑点）。

- 存在[[仿射概形|仿射]]开集 $x \in U \simeq \operatorname{Spec} R \subset X$，
  使得有 $k$-[[交换代数 (代数结构)|代数]]的同构
  \[
  R \simeq k [x_1, \dotsc, x_n] / (f_1, \dotsc, f_m),
  \]
  即 $U$ 在[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}_k^n$ 中
  由方程 $f_1 = \cdots = f_m = 0$ 所刻画，
  且 $x$ 处 [[Jacobi 矩阵]]
  \[
  \begin{pmatrix}
    \partial f_1 / \partial x_1
    & \partial f_1 / \partial x_2
    & \cdots
    & \partial f_1 / \partial x_n
    \\ \partial f_2 / \partial x_1
    & \partial f_2 / \partial x_2
    & \cdots
    & \partial f_2 / \partial x_n
    \\ \vdots
    & \vdots
    & & \vdots
    \\ \partial f_m / \partial x_1
    & \partial f_m / \partial x_2
    & \cdots
    & \partial f_m / \partial x_n
  \end{pmatrix} (x)
  \]
  的[[秩 (线性代数)|秩]]为 $m$。

- 存在开集 $x \in U \subset X$，[[自然数]] $n$，
  以及[[平展态射]] $f \colon U \to \mathbb{A}_k^n$。

:::

### 普遍光滑性

<see>[[普遍光滑性]]</see>

::: theorem [普遍光滑性]
若 $k$ 是[[完全域]]，$X$ 是[[局部有限型态射|局部有限型]] $k$-概形，
则其光滑点集 $X^{\mathrm{sm}} \subset X$
是 $X$ 的[[稠密子空间|稠密]][[开集]]。
:::

### 与正则概形的联系

光滑概形与[[正则概形]]的概念紧密联系。
下面的结论说明，在[[完全域]]上，二者是等价的概念：

::: theorem {@正则比较}
设 $k$ 是[[域]]。

- 任何光滑 $k$-概形都是正则概形。

- 若 $k$ 是[[完全域]]，则 $k$ 上任何[[局部有限型态射|局部有限型]]的正则概形都是光滑 $k$-概形。

:::

在非完全域上，则存在不光滑但正则的局部有限型概形。
例如，对特征 $p$ 非完全域 $k$，若 $a \in k$ 不是任何元素的 $p$ 次幂，
则仿射曲线 $\{ x^p + y^p = a \} \subset \mathbb{A}_k^2$ 是正则概形，但不是光滑 $k$-概形。

```terms
光滑概形:
  en: smooth scheme
  fr: schéma lisse :m
  de: glattes Schema :n
  ja: 滑<なめ>らかなスキーム
光滑簇:
  en: smooth variety
  fr: variété lisse :f
  de: glatte Varietät :f
  ja: 滑<なめ>らかな多<た>様<よう>体<たい>
  ko: 매끄러운 다양체
```
