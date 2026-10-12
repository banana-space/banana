---
title: 闭浸入
aliases: [闭子概形, 既约闭子概形, 闭子簇]
categories: [概形论]
navboxes: [态射性质]
---

在[[代数几何]]中，
**闭浸入**是一类[[概形态射]]，
用来定义**闭子概形**的概念，
即闭浸入是闭子概形向大概形的含入。
大致而言，概形 $X$ 的闭子概形在局部上由 $X$
上的一族[[正则函数]]的零点所定义，
正如[[仿射簇]]由[[仿射空间 (代数几何)|仿射空间]]上一族多项式的零点定义。
因此，仿射簇是仿射空间的闭子概形，而一般的闭浸入则是这一概念的推广。

与[[开子概形]]不同，闭子概形并不完全由其点集确定。
例如，在[[仿射空间 (代数几何)|仿射直线]]
$\mathbb{A}_k^1 = \operatorname{Spec} k [x]$ 上，
由方程 $x = 0$ 确定的闭子概形是原点 $\{ 0 \}$，
它作为概形是 $\operatorname{Spec} k$；
由方程 $x^2 = 0$ 确定的闭子概形也是原点 $\{ 0 \}$，
但它作为概形却是 $\operatorname{Spec} k [x] / (x^2)$，
这是一个非[[既约概形|既约]]的概形。
另一方面，如果加上[[既约概形|既约]]的条件，
则概形的**既约闭子概形**完全由其点集确定。

在[[代数–几何对偶]]下，闭浸入对应于[[交换环]]的[[满射|满]][[环同态|同态]]。

## 定义

::: definition
称[[概形态射]] $i \colon Z \to X$ 为**闭浸入**，是指它满足以下条件：

- [[拓扑空间]]的映射 $i\colon Z\to X$ 是[[闭嵌入]]，
  即从 $Z$ 到 $X$ 的某个闭[[拓扑子空间|子空间]]的[[同胚]]。

- 结构层的映射 $i^\sharp \colon \mathcal{O}_X \to i_*\mathcal{O}_Z$
  是[[层满射]]。

此时亦称 $Z$ 是 $X$ 的**闭子概形**，
称 $\ker(i^\sharp) \subset \mathcal{O}_X$ 为
$Z$ 对应的**理想层**。

另外，若 $Z, X$ 是某个[[域]] $k$ 上的[[代数簇]]，
且 $i$ 是 [[相对概形|$k$-概形]]的态射（即代数簇态射），
也称 $Z$ 为 $X$ 的**闭子簇**。
:::

## 例子

::: example {@仿射}
对[[交换环]] $A$ 及其[[理想]] $I$，考虑[[素谱]]含入映射
\[
i \colon
\operatorname{Spec} (A/I) \longrightarrow
\operatorname{Spec} A,
\]
它在拓扑空间上是闭子空间含入；对每个 $f\in A$ 定义的满射
$A_f \to (A/I)_f$ 合起来给出层满射
$\mathcal{O}_{\operatorname{Spec}A} \to
i_*\mathcal{O}_{\operatorname{Spec}A/I}$，
于是给出概形闭浸入。下面将会看到，每个闭浸入局部上都是这样。
:::

## 性质

以下命题是闭浸入最基本的刻画，说明它等价于局部上是环满射。

::: proposition
概形态射 $i\colon Z\to X$ 是闭浸入，
当且仅当 $X$ 有仿射开覆盖 $\bigcup_{i\in I}U_i$，
$U_i=\operatorname{Spec}A_i$，满足 $i^{-1}(U_i)
=\operatorname{Spec}A_i/I_i$，且 $i$
在 $i^{-1}(U_i)$ 上是 @仿射 中自然含入
$\operatorname{Spec}A_i/I_i\to
\operatorname{Spec}A_i$。此时对任一仿射开集
$U\subseteq X$，都有 $i^{-1}(U)$ 仿射，且 $i$
在其上形如 @仿射。
:::

从环 $A$ 出发的满射一一对应于 $A$ 的[[理想]]。
闭浸入也有同样的事情。

::: proposition
$X$ 是[[概形]]。则有范畴等价
$$
\{闭浸入\ i\colon Z\to X\}\cong
\{拟凝聚理想层\ \mathcal{I}\subseteq\mathcal{O}_X\},
$$
其中左边的态射是 $X$-态射，右边的态射是理想层含入。
特别地，$X$ 的闭子空间范畴是[[偏序集]]。
常将此偏序称为闭子概形的**包含**。
:::

如果只考虑闭子空间结构而忽略概形结构，则有如下命题。

::: proposition {@既约闭子概形}
$X$ 是[[概形]]，则有范畴等价
\[
\{闭子空间\ Z \subset X\}\cong
\{拟凝聚根理想层\ \mathcal{I}\subseteq\mathcal{O}_X\},
\]
此时相应[[根理想]]层对应的闭子概形称为
$Z$ 诱导的**既约闭子概形**。
:::

下面是一些概形论性质。

::: proposition
闭浸入关于复合和基变换封闭，且是：

- [[概形]][[范畴]]单态射。

- [[有限态射]]。

- [[仿射态射]]。

- [[紧合态射]]。

:::

::: proposition
一个态射是闭浸入当且仅当它是[[泛闭态射|泛闭]]单态射。
:::

此外，闭子概形有任意交。
这实际上是[[概形]]可沿[[仿射态射]]取任意[[极限 (范畴论)|极限]]的特殊情形。

::: proposition
$X$ 是概形，$(Z_i)_{i\in I}$ 是其一族闭子概形，
则存在唯一闭子概形 $Z$，包含于各个 $Z_i$，且满足对任一映射
$f\colon Y\to X$，如 $f$ 穿过每个 $Z_i$，则它就穿过 $Z$。
:::

```terms
闭浸入:
  en: closed immersion
  de: abgeschlossene Immersion
  fr: immersion fermée
  grc: κλειστὴ ἑμβάθυσις
  la: immersio clausa
闭子概形:
  en: closed subscheme
  de: abgeschlossenes Unterschema
  fr: sous-schéma fermé
  grc: κλειστὸν ὑπόσχημα
  la: subschema clausum
闭子簇:
  en: closed subvariety
```
