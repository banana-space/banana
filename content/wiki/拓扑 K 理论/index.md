---
title: 拓扑 $K$ 理论
categories: [$K$ 理论]
notices:
  - name: 问题
    items:
      - “例子”“性质”各节需要扩充。
navboxes: [代数拓扑, 同调与上同调, 向量丛与 K 理论]
---

**拓扑 $K$ 理论**是 [[$K$ 理论]]的一种，
是对[[拓扑空间]]定义的一种[[广义上同调]]理论。
给定拓扑空间 $X$，有 [[Abel 群]] $K (X)$，
它由形如 $[E]$ 的元素生成，其中 $E$ 是 $X$ 上的[[拓扑向量丛]]，
并且满足关系
\[
[E \oplus F] = [E] + [F].
\]
例如，[[单点空间]] $*$ 的 $K$ 理论是 $K (*) \simeq \mathbb{Z}$，
这里 $\mathbb{Z}$ 记录向量丛的秩。

上面描述的是拓扑 $K$ 理论作为广义上同调理论的第 $0$ 阶上同调群，
也记为 $K^0 (X)$。
更一般地，对任何整数 $n$，也有 $K$ 理论群 $K^n (X)$。
它们关于 $n$ 具有周期性，称为 [[Bott 周期律]]。
当考虑的向量丛为[[复数|复]]向量丛时，该周期为 $2$；为实向量丛时，该周期为 $8$。

由 [[Brown 可表性定理]]，任何广义上同调理论都被某个[[拓扑谱]]所[[可表函子|表出]]。
将拓扑 $K$ 理论表出的拓扑谱称为 [[$K$ 理论谱]]。

## 定义

### 对紧空间

::: definition [拓扑 $K$ 理论]
设 $X$ 为[[紧空间]]。
记 $\mathsf{Vect} (X)$ 为 $X$ 上[[复数|复]][[拓扑向量丛]]的范畴。
$X$ 的**拓扑 $K$ 理论**为 [[Abel 群]] $K (X)$，
定义为[[商群]]
\[
K (X) = \biggl(
  \bigoplus_{E \in \mathsf{Vect} (X)} [E]
\biggr) \bigg/ {\sim},
\]
其中[[直和]]是对 $\mathsf{Vect} (X)$ 中对象的同构类而取的，
$\sim$ 表示所有形如
\[
[E \oplus F] - [E] - [F]
\]
的元素生成的子群。

若考虑实向量丛而非复向量丛，可类似得到 Abel 群 $K_{\mathbb{R}} (X)$，
也称为 **[[KO 理论]]** 或**实拓扑 $K$ 理论**。
:::

::: definition [约化 $K$ 理论]
设 $(X, x_0)$ 为[[紧空间|紧]][[带点拓扑空间]]。
其**约化拓扑 $K$ 理论**，简称**约化 $K$ 理论**，定义为
\[
\widetilde{K} (X) =
\ker \bigl(
  \operatorname{rank}_{x_0} \colon K (X) \to \mathbb{Z}
\bigr),
\]
其中，映射 $\operatorname{rank}_{x_0}$
将元素 $[E]$ 映到 $E$ 在点 $x_0$ 处的秩。

类似地，也有约化实拓扑 $K$ 理论 $\widetilde{K}_{\mathbb{R}} (X)$。
:::

::: remark
若令 $1 \in K (X)$ 为秩 $1$ 的平凡丛所在的等价类，则有同构
\[
\widetilde{K} (X) \simeq K (X) / (\mathbb{Z} \cdot 1),
\]
由含入映射 $\widetilde{K} (X) \hookrightarrow K (X)$ 诱导。
这里，右边是 $K (X)$ 商掉元素 $1$ 生成的子群，而得的[[商群]]，
可以视为将向量丛 $E$ 等同于 $E \oplus T$，
其中 $T$ 是任何平凡向量丛，而得到的商群。
这一同构说明，$\widetilde{K} (X)$ 在同构意义下不依赖于基点 $x_0$ 的选取。
:::

::: definition
设 $(X, x_0)$ 为[[紧空间|紧]][[带点拓扑空间]]。
定义 $\widetilde{K}^0 (X) = \widetilde{K} (X)$，
并对自然数 $n$，定义
\[
\widetilde{K}^{-n} (X) = \widetilde{K} (\Sigma^n X),
\]
其中 $\Sigma$ 是[[纬悬]]函子。
由 [[Bott 周期律]]，当 $n \leq 0$ 时，
$\widetilde{K}^n (X)$ 关于 $n$ 具有周期性，
故可据此对任何整数 $n$ 定义 $\widetilde{K}^n (X)$。

对[[拓扑空间]] $X$ 及整数 $n$，定义
\[
K^n (X) = \widetilde{K}^n (X_+),
\]
其中 $X_+ = X \sqcup *$ 是向 $X$ 加入一个新点得到的空间，
基点是新加入的点。

类似地，也可定义实 $K$ 理论
$\widetilde{K}_{\mathbb{R}}^n (X)$ 及 $K_{\mathbb{R}}^n (X)$。
:::

### 对一般空间

对一般拓扑空间 $X$，上述 $K (X)$ 的定义不再是最自然的定义，
因为若如此定义，则 $K (X)$ 不会是[[可表函子]]，也不会是[[广义上同调]]理论。

对[[紧空间]] $X$ 而言，有[[同构]]
\[
\begin{aligned}
  K (X) & \simeq [X, \mathrm{BU} \times \mathbb{Z}], \\
  \widetilde{K} (X) & \simeq [X, \mathrm{BU} \times \mathbb{Z}]_* ,
\end{aligned}
\]
其中 $[-, -]$ 为[[连续映射]]的[[同伦]]类的集合，
$[-, -]_*$ 为保持基点的连续映射的同伦类的集合。空间
\[
\mathrm{BU} =
\operatornamewithlimits{colim}_n
\mathrm{BU} (n)
\]
是[[酉群]] $\mathrm{U} (n)$ 的[[分类空间]]的[[余极限]]。
类似地，对紧空间 $X$，还有
\[
\begin{aligned}
  K_{\mathbb{R}} (X) & \simeq [X, \mathrm{BO} \times \mathbb{Z}], \\
  \widetilde{K}_{\mathbb{R}} (X) & \simeq [X, \mathrm{BO} \times \mathbb{Z}]_* .
\end{aligned}
\]

因此，可以自然地将上述可表函子的定义推广到一般空间。

::: definition [可表 $K$ 理论]
对[[拓扑空间]] $X$，定义 $X$ 的**拓扑 $K$ 理论**、**实拓扑 $K$ 理论**为
\[
K (X) = [X, \mathrm{BU} \times \mathbb{Z}], \qquad
K_{\mathbb{R}} (X) = [X, \mathrm{BO} \times \mathbb{Z}].
\]
对[[带点拓扑空间]] $X$，定义 $X$ 的**约化拓扑 $K$ 理论**、**约化实拓扑 $K$ 理论**为
\[
\widetilde{K} (X) = [X, \mathrm{BU} \times \mathbb{Z}]_* , \qquad
\widetilde{K}_{\mathbb{R}} (X) = [X, \mathrm{BO} \times \mathbb{Z}]_* .
\]
:::

还有一种不同的定义方式，即将 $K$ 理论定义为紧子空间上 $K$ 理论的[[反向极限]]。

::: definition [反向极限 $K$ 理论]
假设[[拓扑空间]] $X$ 能写成
\[
X = \bigcup_{n=1}^{\infty} X_n ,
\]
其中 $X_1 \subset X_2 \subset \cdots \subset X$，
且每个 $X_n$ 是[[紧空间]]。
则定义 $X$ 的**反向极限 $K$ 理论**为[[反向极限]]
\[
K^{\mathrm{lim}} (X) =
\lim_n K (X_n).
\]
这一定义不依赖于子空间 $X_n$ 的选取。
:::

可表 $K$ 理论与反向极限 $K$ 理论是不同的。
即使对二者都有定义的空间，它们也相差一个[[导出极限]]，
见 [@AtiyahSegal1969, 命题 4.1]。

## 例子

## 性质

## 参考文献

以下教科书都讨论了紧空间的拓扑 $K$ 理论：

```bibliography
HatcherVBKT:
  type: book
  author: 'Hatcher, A.'
  title: Vector bundles and $K$-theory
  url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
Karoubi1978:
  type: book
  author: 'Karoubi, Max'
  title: $K$-theory. An introduction
  series: Grundlehren Math. Wiss.
  number: 226
  publisher: Springer-Verlag
  year: 1978
```

以下教科书也定义了非紧空间的 $K$ 理论：

```bibliography
May1999:
  type: book
  author: 'May, J. P.'
  title: A concise course in algebraic topology
  publisher: University of Chicago Press
  year: 1999
  url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
```

以下文献讨论可表 $K$ 理论与反向极限 $K$ 理论。

```bibliography
AtiyahSegal1969:
  type: article
  author: ['Atiyah, M. F.', 'Segal, G. B.']
  title: Equivariant $K$-theory and completion
  volume: 3
  doi: 10.4310/jdg/1214428815
  pages: 1–18
  journaltitle: J. Differ. Geom.
  year: 1969
```

```terms
拓扑 $K$ 理论:
  en: topological $K$-theory
约化 $K$ 理论:
  en: reduced $K$-theory
```
