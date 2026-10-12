---
title: 约化群
aliases: [约化群概形, 线性约化群, 约化代数群]
categories: [代数群理论]
navboxes: [代数群理论]
---

在[[代数几何]]中，**约化群**是一类[[代数群]]，
它包括所有[[半单代数群]]，
例如 [[特殊线性群|$\mathrm{SL} (n)$]]、
[[特殊正交群|$\mathrm{SO} (n)$]]、
[[辛群|$\mathrm{Sp} (n)$]]，
也包含一些其它的群，
例如 [[一般线性群|$\mathrm{GL} (n)$]]、[[代数环面]]。
称这类群为约化群的原因是，大致而言，
这些群的有限维[[代数群表示|表示]]都可分解为[[不可约表示]]的直和
（@线性约化群结构）。

约化群大致刻画的是某种关于矩阵对角线的对称性。
例如，所有 $2 \times 2$ [[可逆阵|可逆]][[上三角阵]]构成的群不是约化群，
因为若考虑其标准的二维表示，
则它有一个一维[[不变子空间]]，从而不是不可约表示，
但它不能写成该子空间和另一个不变子空间的直和。

## 定义

### 约化群

::: definition
[[域]] $k$ 上的[[仿射代数群]] $G$ 称为**约化群**，
是指其满足下列条件：

- $G$ [[连通空间|连通]]、[[光滑簇|光滑]]。

- $G_{\bar{k}}$ 的[[幂幺根]]是[[平凡群]]，
  其中 $\bar{k}$ 是 $k$ 的[[代数闭包]]。

:::

这里，若 $k$ 的[[特征 (代数)|特征]]为 $0$，则 $G$ 自动是光滑的，这是 [[Cartier 定理]]。

例如，若 $G$ 为 $2 \times 2$ 可逆上三角阵的群，则其幂幺根为形如
\[
\begin{pmatrix}
  1 & * \\
  0 & 1
\end{pmatrix}
\]
的矩阵构成的子群，从而不是约化群。

约化群也可以推广到一般的底概形上：

::: definition
设 $S$ 是[[概形]]。则 $S$ 上的[[群概形]] $G \to S$ 称为**约化群概形**，
是指其满足下列条件：

- $G \to S$ 是[[仿射态射|仿射]]、[[光滑态射]]。

- 对任何[[代数闭域]] $\bar{k}$ 及态射 $s \colon \operatorname{Spec} \bar{k} \to S$，
  [[纤维]] $G_s = G \times_S \operatorname{Spec} \bar{k}$
  是域 $\bar{k}$ 上的约化群。

:::

### 线性约化群

::: definition
[[域]] $k$ 上的[[仿射代数群]] $G$ 称为**线性约化群**，
是指其满足下列条件：

- $G$ 在 $k$ 上的所有有限维[[代数群表示|表示]]都能分解成[[不可约表示]]的直和。
  换言之，这些表示构成的范畴 $\mathsf{Rep}_k (G)$ 是[[半单范畴]]。

:::

下列结论将约化群与线性约化群联系起来，
这也是约化群得名的原因。

::: theorem {@线性约化群结构}
设 $k$ 是[[域]]，$G$ 是 $k$ 上的[[仿射代数群]]。
记 $G^\circ \subset G$ 为单位元所在的[[连通分支]]。

- 若 $k$ 的[[特征 (代数)|特征]]为 $0$，
  则 $G$ 是线性约化群等价于 $G^\circ$ 是约化群。

- 若 $k$ 的特征为 $p \neq 0$，
  则 $G$ 是线性约化群等价于
  $G^\circ$ 是[[乘性群]]，
  且 $G$ 的连通分支个数不被 $p$ [[整除]]。

:::

## 参考文献

```bibliography
Milne2011:
  type: book
  author: J. S. Milne
  title: 'Algebraic groups, Lie groups, and their arithmetic subgroups'
  url: https://www.jmilne.org/math/CourseNotes/ALA.pdf
  year: 2011
Conrad2014:
  type: book
  author: B. Conrad
  title: Reductive group schemes
  url: https://math.stanford.edu/~conrad/papers/luminysga3.pdf
  year: 2014
```

```terms
约化群:
  en: reductive group
线性约化群:
  en: linearly reductive group
```
