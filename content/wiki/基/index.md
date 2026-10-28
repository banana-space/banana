---
title: 基
aliases: [基存在定理]
categories: [线性代数]
navboxes: [线性代数]
---

<problems>
- “模的基”一节需要扩充。
</problems>

<disambiguation>
关于其他含义，请参见[[基（多义词）]]。
</disambiguation>

在[[线性代数]]中，
[[向量空间]]的一组**基**是其中的一组[[向量]]，
例如 $\{ e_1, \dotsc, e_n \}$，
使得该向量空间的任意向量 $v$ 都能唯一地写成这些向量的[[线性组合]]：
\[
v = a_1 e_1 + \cdots + a_n e_n ,
\]
其中 $a_i$ 是[[标量]]，即底[[域]]的元素。
由于这种写法的唯一性，我们也常常用这些数 $a_1, \dotsc, a_n$ 来代表向量 $v$，记为
\[
v = \begin{pmatrix}
  a_1 \\ \vdots \\ a_n
\end{pmatrix} .
\]
由此，通过一组基，就能把向量空间的几乎所有操作化为数的运算。

每个向量空间都有基，这称为**基存在定理**。
虽然这一事实依赖于[[选择公理]]，但由于主流数学基于包含选择公理的 [[ZFC 集合论]]，
所以基存在定理在主流数学中成立。

向量空间通常有不止一组基。另外，一组基也可以由无限个向量组成。
但同一个向量空间的所有基都具有同样多的向量，
这一数目称为该向量空间的[[维数 (线性代数)|维数]]。

## 定义

### 向量空间的基

::: definition [基]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]，
$(e_i)_{i \in I}$ 是 $V$ 中的一族元素。
称这族元素为 $V$ 的一组**基**，如果满足以下条件：

- 向量组 $(e_i)_{i \in I}$ [[线性无关向量组|线性无关]]。

- 若向该向量组其中加入任一个别的向量，则新的向量组不再线性无关。

换言之，基就是[[极大元|极大]]的线性无关向量组，
这里极大性是基于包含关系而言。
:::

### 模的基

## 性质

::: lemma [Steinitz 换元性质] {@steinitz}
对线性空间$V$的任何两个基$Z,W$，若$x\in Z\setminus W$则存在
$y\in W\setminus Z$使得$(Z\setminus\{x\})\cup\{y\}$也是$V$的基。
:::

::: proof
根据基的性质，对任何$w\in W$均存在$Z$的有限子集$S_w$使得$w$能写成
$S_w$中元素的$\mathbb{k}$-线性组合且系数均非零：
$$
w=\sum_{z\in S_w} a_z z : a_z\in\mathbb{k}\setminus\{0\}.
$$
注意到必有$x\in \cup_{w\in W\setminus Z} S_w$，否则会导致
$V=\operatorname{span}(W)\subseteq \operatorname{span}(Z\setminus\{x\})$
从而$Z\setminus\{x\}$也张成$V$，与$Z$的线性无关性矛盾
（此时$x$能写成$Z\setminus\{x\}$的线性组合了）。
于是存在$y\in W\setminus Z$使得$x\in S_y$。
不难发现$(Z\setminus\{x\})\cup\{y\}$线性无关且张成$V$，故是$V$的基。
:::

::: theorem [基存在定理]
设 $V$ 是 $\mathbb{k}$-[[向量空间]]。
则 $V$ 有一组基。
并且，$V$ 的所有基具有相同的[[势]]，
称为 $V$ 的**维数**。
:::

::: proof
记$S$为$V$的全体线性无关子集组成的集合：
$$
S=\left\{ X\subseteq V\mid X\text{ 是线性无关的} \right\}.
$$
空集是$S$的元素，故$S$非空。在$S$上定义偏序$\leq$：
$\forall X,Y\in S, X\leq Y$当且仅当$X\subseteq Y$。

对$(S,\leq)$的任何升链，不难验证对链中所有项取并，就是该链的一个上界。
从而根据[[Zorn引理]]，$(S,\leq)$存在极大元。对任一极大元$Z\in S$，
若$Z$不能张成$V$则存在$x\in V\setminus \operatorname{span} (Z)$，
于是$Z\cup\{x\}$也是线性无关的，和$Z$是极大元矛盾！
从而$Z$能张成$V$，故是$V$的一组基。

下面证明任何两组基$Z,W$的势相同。
（根据 [[Cantor–Schröder–Bernstein 定理|Bernstein 定理]]）可以不妨设$|Z|\leq |W|$，那么：

- 若$Z$有限且$|Z|< |W|$，那么可以利用 @steinitz，用$W$的元素逐次替换$Z$的元素，
  知存在$Z': Z'\subsetneqq W$且$Z'$也是基。这和$W$是基矛盾。所以$Z$有限的时候有$|Z|=|W|$。

- 若$Z$无限，那么$W$自然也无限。如 @steinitz 的证明，对任何$z\in Z$均存在$W$的有限子集
  $S_z$使得$z$能写成$S_z$中元素的
  $\mathbb{k}$-线性组合且系数均非零：
  $$
  z=\sum_{w\in S_z} a_w w : a_w\in\mathbb{k}\setminus\{0\}.
  $$
  且$\cup_{z\in Z}S_z$必须等于$W$（否则若$\exists y\in W\setminus \cup_{z\in Z}S_z$，
  则不难验证$W\setminus\{y\}$也能张成$V$，和$W$是基矛盾）。从而
  $$
  |W|=|\cup_{z\in Z}S_z|\leq |Z|\aleph_0 =|Z|.
  $$
  于是（再次根据Bernstein定理）$|Z|=|W|$。

综上所述，$V$ 的所有基具有相同的[[势]]。
:::

```terms
基:
  en: basis
  fr: base :f
  de: Basis :f
  la: basis :f
  grc: βάσις :f
```
