---
title: 概形态射
categories: [概形论]
navboxes: [代数几何, 概形论, 态射性质]
---

在[[代数几何]]中，
**概形态射**是[[概形]]间的[[映射]]，
大致是指那些“代数”的映射，
也就是能写成[[多项式]]或[[分式]]形式的映射。
例如，[[仿射代数簇]]也就是[[仿射空间 (代数几何)|仿射空间]]中多项式的零点集，
它们之间的态射就是指这些零点集间的映射，
其每个分量都能写成多项式或分式的形式。
[[代数簇]]之间的概形态射也称为**代数簇态射**。

在[[相对观点]]下，概形态射具有与概形同等的地位，
因而称为[[相对概形]]；对这一观点的讨论见该文。

从另一种角度看，概形态射 $f\colon X\to Y$ 也可以视为 $Y$ 的 $X$-[[点]]，
或者说“以 $X$ 中元素为参数”的一族点。
如果 $Y$ 是[[代数闭域]] $k$ 上[[代数簇]]，$X = \operatorname{Spec}(k)$，
则 $Y$ 的 $X$-点一一对应于 $Y$ 上的[[闭点]]，
这也解释了这种观点下“点”的名称。

## 定义

::: definition [概形态射]
设 $X, Y$ 为[[概形]]。则**概形态射** $f \colon X \to Y$
就是指[[局部环化空间]] $(X, \mathcal{O}_X)$ 到 $(Y, \mathcal{O}_Y)$ 的态射。

具体地说，概形态射 $f$ 是二元组 $(f, f^\sharp)$，其中

- $f \colon X \to Y$ 是[[拓扑空间]]的[[连续映射]]。

- $f^\sharp \colon \mathcal{O}_Y \to f_* \mathcal{O}_X$
  是 $Y$ 上环层间的同态，

满足以下性质：

- $f^\sharp$ 是**局部同态**：对任意 $x \in X$，它诱导的[[茎]]的态射
  $f^\sharp_x \colon \mathcal{O}_{Y, f(x)} \to \mathcal{O}_{X, x}$
  是[[局部环]]之间的[[局部同态]]，
  即前者的[[极大理想]]的像落在后者的极大理想中。

:::

::: definition [点]
[[概形]] $X$ 的 **$Y$-点**指的就是概形态射 $Y\to X$。
对[[相对概形]]也作如此定义。
:::

这里，$f^\sharp$ 应该看成是将函数拉回的操作。
例如，若 $X, Y$ 是域 $k$ 上的[[代数簇]]，
则 $\mathcal{O}_Y$ 就是 $Y \to k$ 的函数层，
而 $f^\sharp$ 指定了如何将这样的函数拉回到 $X$ 而得到 $X \to k$ 的函数。
而 $f^\sharp$ 是局部同态的条件则说明，
若函数 $Y \to k$ 在某点 $f (x)$ 取值为零，
即落在 $\mathcal{O}_{Y, f(x)}$ 的极大理想中，
则其拉回在 $x$ 也应该取值为零。

最典型的概形态射就是[[仿射概形]]之间的态射，
如下例所示。事实上，任何概形态射在局部上都能写成这种形式。

::: example
设 $R, S$ 是[[交换环]]，$X = \operatorname{Spec} S$，
$Y = \operatorname{Spec} R$ 为仿射概形。
设 $\varphi \colon R \to S$ 为[[环同态]]。
定义概形态射 $f \colon X \to Y$ 如下。

- 对每个 $x \in X$，对应 $S$ 的素理想 $\mathfrak{p}_x \subset S$，
  定义 $f (x)$ 为 $R$ 的素理想 $\varphi^{-1} (\mathfrak{p}_x)$ 对应的点。

- 为说明 $f$ 连续，只需说明形如
  $D (r) = \{ y \in Y \mid r \notin \mathfrak{p}_y \}$
  的开集的原像也具有这种形式。
  事实上，不难验证 $f^{-1} (D (r)) \simeq D (\varphi (r))$。

- 为定义 $f^\sharp \colon \mathcal{O}_Y \to f_* \mathcal{O}_X$，
  只需在形如 $D (r)$ 的开集上给出定义。
  而
  \[
  \mathcal{O}_Y (D (r)) \simeq R_r, \qquad
  (f_* \mathcal{O}_X) (D (r)) \simeq \mathcal{O}_X (D (\varphi (r)))
  \simeq S_{\varphi (r)},
  \]
  故可定义 $f^\sharp (D (r)) \colon R_r \to S_{\varphi (r)}$
  为 $\varphi \colon R \to S$ 诱导的同态。

- 还需验证这样定义的 $f^\sharp$ 与限制映射相容，且确实是局部同态。
  我们暂时忽略这些细节，并指出这些验证并不困难。

这样，对每个环同态 $R \to S$，我们得到概形态射
$\operatorname{Spec} S \to \operatorname{Spec} R$。
事实上，这两者之间的所有概形态射都具有这种形式。
也就是说，
\[
\{ \text{环同态 } R \to S \} \simeq
\{ \text{概形态射 } \operatorname{Spec} S \to \operatorname{Spec} R \}.
\]
:::

由这一例，我们也得到概形态射的等价刻画。

::: proposition
设 $f \colon X \to Y$ 是概形态射。
则对任意 $x \in X$，存在仿射开集 $x \in U \simeq \operatorname{Spec} S$
及 $f (x) \in V \simeq \operatorname{Spec} R$，
使得 $f (U) \subset V$。
此时，$f|_U$ 必由一个环同态 $R \to S$ 所诱导。
:::

```terms
概形态射:
  en: morphism of schemes
  fr: morphisme de schémas :m
  la: morphismus schematum :m
  grc: μορφισμός σχημάτων :m
```
