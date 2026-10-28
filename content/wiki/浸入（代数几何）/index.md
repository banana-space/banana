---
title: 浸入（代数几何）
aliases: [既约子概形, 子概形, 局部闭子概形]
categories: [概形论]
navboxes: [态射性质]
---

<disambiguation>
关于其他含义，请参见[[浸入]]。
</disambiguation>

[[概形]]间**浸入**是[[开浸入]]和[[闭浸入]]的复合，
对应于[[微分几何]]中[[流形]]的[[嵌入 (微分几何)|嵌入]]。
（微分几何中[[浸入 (微分几何)|浸入]]则大致对应于[[非分歧态射]]。）

## 定义

::: definition
称[[概形]]态射 $i\colon Z \to X$ 为浸入，
如果它可以分解为 $Z\to Y\to X$，
其中 $Z \to Y$ 为[[闭浸入]]，$Y \to X$ 为[[开浸入]]。
此时 $Z$ 称为 $X$ 的**子概形**。
:::

::: remark
把上述定义中“开”和“闭”反过来会变得更强，但在 $i$
为[[拟紧态射|拟紧]]或 $Z$ 为[[既约概形|既约]]时两者等价，
见 @反。
这一更强的概念有时称为“H-浸入”，
其中 H 指 [[Robin Hartshorne|Hartshorne]]。
:::

与[[闭子概形]]类似，子概形并不能由它的底空间决定。
不过可以对概形的局部闭子空间赋予较为典范的概形结构，
即“既约子概形”。

::: definition [既约子概形]
对局部闭子空间 $Z \subseteq X$，
取开集 $Y \subseteq X$ 使 $Z$ 在 $Y$ 中闭，
则 $Y$ 典范地成为 $X$ 的[[开子概形]]。
称 $Z$ 在 $Y$ 中的[[既约闭子概形]]结构为
$Z$ 的**既约子概形**结构，不难发现这不依赖 $Y$
的选取。
:::

## 性质

::: proposition
浸入关于复合和基变换封闭，且关于大概形是局部性质。
:::

::: remark [子概形的交]
于是对 $X$ 的子概形 $Z$ 和 $Z'$，$Z\times_XZ'$ 也是 $X$
的子概形。常将其称为 $Z$ 和 $Z'$ 的**交**，
记为 $Z\cap Z'$。
:::

::: proposition
浸入是

- [[概形]][[范畴]]单态射。

- [[非分歧态射]]。

:::

::: proposition
像集闭的浸入是[[闭浸入]]。
:::

在 $Z$ 满足一定条件时，可以把定义中开浸入和闭浸入的顺序反过来。

::: proposition {@反}
对浸入 $i\colon Z \to X$，如 $i$ 拟紧或 $Z$ 既约，
则 $i$ 可分解为 $Z\to\overline{Z}\to X$，
其中 $Z\to\overline{Z}$ 是[[开浸入]]，
$\overline{Z}\to X$ 是闭浸入，且为 $i$ 的[[概形论像]]。
:::

::: proof
如 $i$ 拟紧，则由浸入总是单态射，单态射都拟分离，
知其[[拟紧拟分离态射|拟紧拟分离]]。于是 $i_*\mathcal{O}_Z$
是 $X$ 上[[拟凝聚层]]。记 $\mathcal{I}=\ker
(\mathcal{O}_X\to i_*\mathcal{O}_Z)$，则它是拟凝聚理想层，
取 $\overline{Z}$ 为它对应的闭子概形。
如 $Z$ 既约，取 $\overline{Z}$
为其点集闭包的[[既约闭子概形]]结构。
不论哪种情况，都有自然映射 $Z\to\overline{Z}$，
只需证它是开浸入。为此，取 $X$ 的开子概形 $Y$，
使 $Z$ 是其闭子概形。在两种情况下，都容易发现
$Z=\overline{Z}\cap Y$，于是 $Z\to\overline{Z}$
是 $Y\to X$ 的基变换，也是开浸入。
:::

## 例子

::: example
浸入最重要的例子是[[对角态射]]。对概形态射 $X\to S$，
$\Delta_{X/S}\colon X\to X\times_SX$ 总是浸入。
为证明此事，由局部性可设 $S=\operatorname{Spec}R$ 仿射。
然后取 $X$ 的仿射开覆盖 $X=\bigcup_{i\in I}U_i$，
$U_i=\operatorname{Spec}A_i$。则 $\Delta_{X/S}$
基变换到 $U_i\times_SU_i$ 上是环满射
$A_i\otimes_RA_i\to A_i$ 对应的概形态射，是[[闭浸入]]，
所以 $\Delta_{X/S}$ 是闭浸入
$X\to\bigcup_{i\in I}U_i\times_SU_i$ 和开浸入
$\bigcup_{i\in I}U_i\times_SU_i\to X\times_SX$ 的复合，
故为浸入。
:::

::: example {@仿射}
对环 $A$ 及其理想 $I$、元素 $f$，
环同态 $A \to (A/I)_f$ 诱导的概形态射可以分解为
\[
\operatorname{Spec}(A/I)_f
\to \operatorname{Spec}A_f
\to \operatorname{Spec}{A},
\]
所以是浸入。
:::

::: example
概形范畴的单态射未必是浸入：取无限域 $k$，则态射
$$
\coprod_{a\in k}\operatorname{Spec}k\to
\operatorname{Spec}k[x]=\mathbb{A}^1_k,
$$
在 $a\in k$ 对应的分量定义为 $k[x]\to k$，$x\mapsto a$，
就是单态射，但不是浸入。
:::

::: example
拟紧单态射也未必是浸入：任取域 $k$，环同态
$k[x,y]/(xy)\to k[x]_x\times k[y]$ 诱导的概形映射就是一例。
:::

```terms
浸入:
  en: immersion
  de: Immersion :f
  fr: immersion :f
  grc: ἐμβάθυσις :f
  la: immersio :f
子概形:
  en: subscheme
  de: Unterschema :n
  fr: sous-schéma :m
  grc: ὑπόσχημα :n
  la: subschema :n
```
