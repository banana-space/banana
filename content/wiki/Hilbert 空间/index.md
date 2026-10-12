---
title: Hilbert 空间
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - “例子”一节中 $L^2$ 的内积对第一个变元共轭线性，而“Riesz 表示定理”一节的定理与证明似乎使用对第一个变元线性的约定，两处约定不一致。
navboxes: [泛函分析]
---

**Hilbert 空间**是一类[[向量空间]]，
它带有[[实数|实]]或[[复数|复]]的[[内积空间|内积]]，
并且它关于该内积诱导的[[范数]]是[[完备度量空间]]。
因此，特别地，Hilbert 空间都是 [[Banach 空间]]。

Hilbert 空间在[[量子力学]]、[[泛函分析]]、
[[Fourier 分析]]等诸多领域都有应用。

## 定义

::: definition [Hilbert 空间]
**Hilbert 空间**是指实或复的[[内积空间]]
$(X, \langle {-}, {-} \rangle)$，它关于内积诱导的范数 $\| \cdot \|$ 是[[完备度量空间]]。
:::

特别地，在范数 $\| \cdot \|$ 下，Hilbert 空间是 [[Banach 空间]]。

以下定义 Hilbert 空间之间的两类映射。

::: definition [连续算子] {@def-continuous-operator}
设 $X, Y$ 是 Hilbert 空间。
它们之间的**连续算子**，或称 **[[有界算子]]**，
是指[[线性映射]] $f \colon X \to Y$，
它关于 $X, Y$ 各自的范数诱导的拓扑是[[连续映射]]。

等价而言，存在常数 $C > 0$，使得对任意 $x \in X$，有
\[
\| f (x) \|_Y \leq C \, \| x \|_X \, .
\]
:::

::: definition [等距同构]
设 $X, Y$ 是 Hilbert 空间。
它们之间的**等距同构**是指可逆[[线性映射]] $f \colon X \to Y$，
它保持内积，即对任何 $x, y \in X$，有
$\langle f (x), f (y) \rangle_Y = \langle x, y \rangle_X$。
:::

我们也给出一种子空间的概念，这与 [[Banach 空间]]中的相应概念类似。

::: definition [闭子空间]
Hilbert 空间 $X$ 的**闭子空间**是指在范数诱导的拓扑下是[[闭集]]的[[子向量空间]]。
$X$ 的内积诱导了该子空间的内积，
使之也成为 Hilbert 空间。
:::

## 例子

- 有限维[[内积空间]]必然完备，因此是 Hilbert 空间。

但我们感兴趣的 Hilbert 空间通常是无穷维的，
见以下几例。

- 设 $X$ 是[[测度空间]]。则 $p = 2$ 时，
  实或复的 [[$L^p$ 空间]] $L^2 (X)$ 分别是实或复的 Hilbert 空间，
  此时，[[内积空间|内积]]
  $\langle -, - \rangle \colon L^2 (X) \otimes L^2 (X) \to \mathbb C$
  定义为
  \[
  \langle {f}, {g} \rangle = \int_X \overline{f(x)} \, g(x) \,dx.
  \]
  这里，对实的情况，可以忽略式中的复共轭。

- 设 $U \subset \mathbb{R}^n$ 是[[开集]]。
  则 [[Sobolev 空间]] $H^k (U) = W^{k, 2} (U)$ 是 Hilbert 空间。

## 性质

### Hilbert 基

在 Hilbert 空间中，有 **[[Hilbert 基]]** 的概念。
正如在有限维[[向量空间]]中，任何向量都可以写成一组[[基]]中元素的有限线性组合，
在 Hilbert 空间中，
任何向量也都可以写成一组 Hilbert 基中元素的线性组合，
但该线性组合可以是无限的，该无限求和在 Hilbert 空间的范数下收敛到原来的向量。

::: definition [正交和正交补]
称[[内积空间]] $X$ 的元素 $x,y$ **正交**，
是指 $\langle {x}, {y} \rangle = 0$，
记为 $x \perp y$。

对子集 $Y \subset X$，
称 $x$ 与 $Y$ **正交**，记为 $x \perp Y$，是指对任何 $y \in Y$ 有 $x\perp y$。
集合 $Y^\perp = \{x \in X \mid x \perp Y\}$ 称为 $Y$
的**正交补**。
:::

可以把直角坐标系的概念推广到 Hilbert 空间。

::: definition [正交集]
设 $S$ 是内积空间 $X$ 的子集。如果 $S$ 中
任何两个元素都正交，则称 $S$ 为**正交集**。如果
$S$ 的任何元素 $e$ 都满足 $\|e\|=1$，则称 $S$ 为**标准正交集**。
如果 $S^\perp=\{0\}$，即没有非零元与 $S$ 正交，则称
$S$ 为**完备正交集**。当然，还有**完备标准正交集**。
:::

在线性空间中我们用 [[Zorn 引理]]证明过基的存在性。
这里，同样可以用它来证明完备正交集的存在性。

::: theorem [完备正交集存在]
非零内积空间 $X$ 必定存在完备正交集。
:::

::: proof
因为 $X$ 非零，故其中的正交集按照包含关系
可构成偏序集。显然，其中每个全序子集都有上界（取并集即可）。
根据 [[Zorn 引理]]，这个偏序集有极大元，设为 $S$。
我们证明 $S$ 是完备正交集。若不然，则存在 $x_0\in S^\perp,x_0\neq 0$，
令 $S_1=S\cup\{x_0\}$，它是更大的正交集，矛盾。
:::

::: definition
内积空间 $X$ 中的标准正交集 $S$ 称为 **Hilbert 基**，
是指对任意 $x \in X$，都有
\[
x=\sum_{e\in S}\langle {x}, {e} \rangle \cdot e.
\]
这里，我们要求该无限求和在 $X$ 的范数下收敛。
:::

这实际上是 [[Fourier 级数]]中计算 [[Fourier 系数]]的方法的推广。
与那边一致，有 [[Bessel 不等式]]。

::: theorem [Bessel 不等式]
考虑内积空间 $X$ 中的标准正交集 $S$。
则对任意 $x\in X$ 有
\[
\sum_{e\in S}|\langle {x}, {e} \rangle|^2\leq \|x\|^2
\]
:::

::: proof
（梗概）如果 $S=\{e_1,\cdots, e_n\}$是有限集，只需注意
\[
0\leq\left\|x-\sum_{i=1}^n\langle {x}, {e_i} \rangle e_i\right\|^2
=\|x\|^2-\sum_{i=1}^n|\langle {x}, {e_i} \rangle|^2
\]
如果不然，我们令
\[
S_m=\left\{e\in S \mid |\langle {x}, {e} \rangle|>\frac 1m\right\}
\]
上面关于有限项的结果告诉我们 $S_m$ 总是有限集。于是
\[
S_0=\{e\in S \mid |\langle {x}, {e} \rangle|\neq 0\}=\bigcup_{m=1}^\infty S_m
\]
是可数集，即欲证式左边的求和实际上是可数项求和。
于是只需要对有限项结论取极限即可。
:::

::: corollary
考虑 Hilbert 空间 $X$ 中的标准正交集 $S$。
则对任意 $x\in X$，
\[
\left\|x-\sum_{e\in S}\langle {x}, {e} \rangle e\right\|^2
=\|x\|^2-\sum_{e\in S}|\langle {x}, {e} \rangle|^2.
\]
:::

在 [[Fourier 分析]]中，平方可积的函数满足 [[Parseval 等式]]。
在一般的 Hilbert 空间（不只是 $L^2$ 空间）中也是如此。

::: theorem [Parseval 等式]
考虑 Hilbert 空间 $X$ 中的标准正交集 $S$。
则以下等价：

- $S$ 是一组 Hilbert 基。

- $S$ 是完备标准正交集。

- $S$ 满足 **Parseval 等式**：对任意 $x \in X$，有
  \[
  \|x\|^2=\sum_{e\in S}|\langle {x}, {e} \rangle|^2.
  \]

:::

关于正交性还有另一个话题。如果 [[Euclid 空间]]中有一个平面，
则几何知识容易得到空间中任意的向量可以分解为与平面平行
和垂直的两部分。在一般的 Hilbert 空间中也是如此。

::: theorem [正交分解]
设 $Y$ 是 Hilbert 空间的闭线性子空间。则对任意
$x\in X$，存在 $y\in Y,z\in Y^\perp$
使得 $x=y+z$。
:::

正交分解的证明是构造性的。实际上，$y$ 就是 $Y$ 中离
$x$“最近”的元素（最佳逼近元），而 $z=x-y$。所谓最佳逼近元
是指
\[
\|x-y\|=\inf_{w\in Y}\|x-w\|
\]
在 Hilbert 空间中可以证明这样的元素对任何闭凸集都存在且唯一。

### Riesz 表示定理

利用正交分解，可以证明大名鼎鼎的 [[Riesz 表示定理]]。

::: theorem [Riesz 表示定理]
设 $f$ 是 Hilbert 空间 $X$ 上的
连续[[线性泛函]]。则存在唯一的 $y\in X$，
使得对任意 $x \in X$ 有
\[
f(x)=\langle {x}, {y} \rangle.
\]
:::

::: proof
不妨设 $f$ 非零。考虑
\[
M=\{x\in X \mid f(x)=0\}
\]
它是闭线性子空间。根据正交分解定理，可以取
$x_0\perp M,\|x_0\|=1,z\in M$ 使得
\[
x=\alpha x_0+z
\]
其中 $\alpha=f(x)/f(x_0)$，这是因为
$f(z)=f(x-\alpha x_0)=0$，得 $f(x)=\alpha f(x_0)$。
两边对 $x_0$做内积得
\[
\alpha=\langle {x}, {x_0} \rangle
\]
所以
\[
f(x)=\langle {x}, {x_0} \rangle f(x_0)=\langle {x}, {\overline{f(x_0)}x_0} \rangle
\]
取 $y=\overline{f(x_0)}x_0$即可。

现在只要证明唯一性。如果 $y_1,y_2$ 都符合要求，则
\[
(x,y_1)=(x,y_2) \Rightarrow (x,y_1-y_2)=0,\forall x\in X
\]
令 $x=y_1-y_2$ 得 $y_1=y_2$。
:::

```terms
Hilbert 空间:
  en: Hilbert space
  de: [Hilbertraum, hilbertscher Raum]
  fr: espace de Hilbert
```
