---
title: 归纳完备化
aliases: [Ind 完备化]
categories: [范畴论]
navboxes: [范畴论]
---

**归纳完备化**是向一个[[范畴]]自由添加所有小[[滤余极限]]的构造。
范畴 $\mathcal C$ 的归纳完备化记为
$\operatorname{Ind}(\mathcal C)$。

这个构造可以理解为：
允许将原范畴中的对象放进一个滤图表，
再将整个图表视为一个新对象。

例如，每个集合都是其有限子集的有向并，
每个向量空间都是其有限维子空间的有向并。
归纳完备化将这种“由有限部分构造整体”的过程形式化，
并同时规定新对象之间的态射。

## 定义

::: definition [归纳完备化]
设 $\mathcal C$ 是[[小范畴]]。
其 **归纳完备化**是范畴
$\operatorname{Ind}(\mathcal C)$，
带有[[全忠实函子]]
\[
j\colon\mathcal C\to\operatorname{Ind}(\mathcal C),
\]
满足以下条件：

- $\operatorname{Ind}(\mathcal C)$ 具有所有小滤余极限。

- 每个对象都可以写成
  \[
  X\simeq\mathop{\mathrm{colim}}_{i\in I}j(X_i),
  \]
  其中 $I$ 是小[[滤范畴]]，$X_i$ 是 $\mathcal C$ 的对象。

- 对任意具有所有小滤余极限的范畴 $\mathcal D$，
  每个函子 $F\colon\mathcal C\to\mathcal D$
  都能延拓为保持小滤余极限的函子
  \[
  \overline F\colon\operatorname{Ind}(\mathcal C)\to\mathcal D,
  \qquad
  \overline F\circ j\simeq F.
  \]
  在指定上述同构后，
  延拓在唯一自然同构的意义下确定。

:::

最后一个条件是归纳完备化的[[万有性质]]。
延拓函子的取值由下面的规则决定：
\[
\overline F\left(
\mathop{\mathrm{colim}}_i j(X_i)
\right)
\simeq
\mathop{\mathrm{colim}}_i F(X_i).
\]

通过全忠实函子 $j$，
通常将 $\mathcal C$ 看作 $\operatorname{Ind}(\mathcal C)$
的全子范畴，并省略记号 $j$。
其中的对象称为 $\mathcal C$ 的 **Ind 对象**。

## 例子

::: example [从有限集到集合]
有范畴等价
\[
\operatorname{Ind}(\mathsf{FinSet})
\simeq
\mathsf{Set}.
\]

对于任意集合 $X$，
其有限子集按包含关系构成有向集：
两个有限子集 $A,B$ 都包含在有限子集 $A\cup B$ 中。
并且
\[
X=
\mathop{\mathrm{colim}}_{\substack{A\subseteq X\\A\text{ 有限}}}A.
\]

一个映射 $X\to Y$
也完全由它在各个有限子集上的相容限制决定。
因此，这个构造不仅恢复所有集合，
也恢复它们之间的所有映射。
:::

::: example [从有限维向量空间到向量空间]
设 $k$ 是域，
记 $\mathsf{Vect}_k^{\mathrm{fd}}$
为有限维 $k$-[[向量空间范畴]]。
则
\[
\operatorname{Ind}(\mathsf{Vect}_k^{\mathrm{fd}})
\simeq
\mathsf{Vect}_k.
\]

事实上，每个向量空间 $V$
都是其有限维子空间的滤余极限。
任意两个有限维子空间
都包含在它们的基向量共同张成的有限维子空间中。

同样，一个线性映射 $V\to W$
完全由它在各个有限维子空间上的相容限制决定。
:::

```terms
归纳完备化:
  en: Ind-completion
```
