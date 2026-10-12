---
title: 单纯集
aliases: [单纯集合]
categories: [同伦代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [同伦代数]
---

**单纯集**是由[[单形]]粘起来得到的图形。
单纯集类似于[[单纯复形]]，但单纯集的单形带有顶点的排序。

单纯集是[[代数拓扑]]和[[同伦论]]中的重要工具，
可以用作 [[$\infty$-群胚]]和 [[$\infty$-范畴]]的模型。

## 定义

::: definition [范畴 $\mathbb{\Delta}$]
**[[单形范畴]]** 是如下定义的[[范畴]] $\mathbb{\Delta}$：

- 其对象为所有形如 $[n] = \{0,\dotsc,n\}$ 的集合，
  其中 $n \geq 0$。

- 态射集 $\mathbb{\Delta}([m],[n])$
  由所有从 $[m]$ 到 $[n]$ 的保序映射
  （即保持 $\leq$ 关系的映射）构成。

:::

范畴 $\mathbb{\Delta}$ 也可以看成
带有顶点排序的[[标准单形]]构成的范畴，
其态射为单形之间将顶点映到顶点的线性映射，
并要求保持顶点的排序。

在范畴 $\mathbb{\Delta}$ 中，有两类特殊的态射：

- 有**面映射**
  \[
  d^i \colon [n-1] \to [n] \quad
  (0 \leq i \leq n),
  \]
  定义为跳过 $[n]$ 的元素 $i$，
  在其余元素上是保序双射。

- 有**退化映射**
  \[
  s^i \colon [n+1] \to [n] \quad
  (0 \leq i \leq n),
  \]
  定义为将 $[n+1]$ 的元素 $i$ 和 $i+1$ 都映到 $[n]$ 的元素 $i$，
  在其余元素上是保序双射。

面映射和退化映射构成了 $\mathbb{\Delta}$ 中（不交换的）图表
\[
\begin{tikzcd}
  {[0]}\ar[r,shift left=2]\ar[r,shift right=2] &
  {[1]}\ar[l]\ar[r,shift left=4]\ar[r]\ar[r,shift right=4] &
  {[2]}\ar[l,shift left=2]\ar[l,shift right=2]\ar[r,shift left=6]\ar[r,shift left=2]\ar[r,shift right=2]\ar[r,shift right=6] &
  \cdots.\ar[l,shift left=4]\ar[l]\ar[l,shift right=4]
\end{tikzcd}
\]
不难验证，$\mathbb{\Delta}$ 中所有态射都能写成
一系列面映射和退化映射的复合。

::: definition [单纯集]
**单纯集**
是从 $\mathbb{\Delta}^\mathrm{op}$ 到 $\mathsf{Set}$ 的[[函子]]，
即从 $\mathbb{\Delta}$ 到 $\mathsf{Set}$ 的[[反变函子]]，
也即 $\mathbb{\Delta}$ 上的[[预层]]。
单纯集的范畴记为
\[
\mathsf{sSet} = \mathsf{Fun} (\mathbb{\Delta}^\mathrm{op},\mathsf{Set}).
\]
:::

设 $X$ 是单纯集。记
\[
X_n = X([n]),
\]
称此集合为 $X$ 的 **$n$ 维单形**的集合。
$\mathbb{\Delta}$ 中态射 $d^i$ 和 $s^i$ 诱导了映射
\[
\begin{aligned}
  d_i \colon X_n \to X_{n-1} & \quad (0\leq i\leq n), \\
  s_i \colon X_n \to X_{n+1} & \quad (0\leq i\leq n),
\end{aligned}
\]
分别称为 $X$ 的**面映射**和**退化映射**。

## 例子

- 设 $X$ 是[[拓扑空间]]，令
  \[
  \operatorname{Sing}(X)_n = \mathsf{Top} (\Delta^n,X),
  \]
  其中 $\Delta^n$ 表示拓扑中的[[标准单形|标准 $n$ 维单形]]。
  这就给出了单纯集 $\operatorname{Sing}(X)$，
  称为 $X$ 的 **[[奇异单纯集]]**。
  它用于定义[[奇异同调]]和[[奇异上同调]]。

- 单纯集 $\Delta[n]$
  就是标准 $n$ 维单形（作为单纯复形）对应的单纯集，
  也即由 $[n]$ 表出的预层。
  它的 $k$ 维单形对应于保序映射 $[k]\to[n]$，
  这里 $[n] = \{ 0, 1, \dotsc, n \}$
  视为其顶点的标号集。
  由 [[Yoneda 引理]]，对任何单纯集 $X$，有
  \[
  X_n \simeq \mathsf{sSet} (\Delta[n], X).
  \]

- 在 $\Delta[n]$ 中去掉其内部，
  就得到了其边界 $\partial\Delta[n]$。
  其 $k$ 维单形对应于不满的保序映射 $[k] \to [n]$。

- 单纯集 $S^n$ 定义为商单纯集 $\Delta[n]/\partial\Delta[n]$，
  这里的商可以逐个维数来定义。

## 性质

```terms
单纯集:
  en: simplicial set
  de: simpliziale Menge :f
  fr: ensemble simplicial :m
  grc: ἀπλοϊκὸν σύνολον :n
  la: copia simplicialis :f
```
