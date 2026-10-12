---
title: 滤子
categories: [集合论, 一般拓扑]
---

**滤子**是指某个[[集合]]的一族子集，
具有类似[[拓扑空间]]中某个点的所有[[邻域]]构成的子集族的性质。

直观地说，集合上的滤子是“粗略地筛选”具有某些性质的子集的方法。
令 $P$ 为集合 $X$ 的子集的性质。
$X$ 那些“可能满足性质 $P$”的子集构成一个滤子。

## 定义

::: definition [滤子] {@definition:filter}
令 $X$ 为集合，
$X$ 上的一个**滤子**是指满足下述性质的 $X$ 的子集族 $\mathscr{F}$：

- 若 $A$、$B$ 是 $\mathscr{F}$ 的成员，$A \cap B$ 也是。

- 若 $A$ 是 $\mathscr{F}$ 的成员，$B$ 包含 $A$，
  那么 $B$ 也是 $\mathscr{F}$ 的成员。

于是空集是 $\mathscr{F}$ 的成员当且仅当
$\mathscr{F}=\mathcal{P}(X)$。换言之，空集不是
$\mathscr{F}$ 的成员当且仅当 $\mathscr{F}$ 是
$\mathcal{P}(X)$ 的真子集。此时称 $\mathscr{F}$
为**真滤子**。
:::

::: remark
滤子的概念也可以推广到 [[Boole 代数]]，详见该条目。
这样，这里定义的滤子就是 $X$ 的[[幂集]] Boole 代数 $P(X)$
的滤子。
:::

::: definition [滤子的加细]
令 $\mathscr{F}$ 与 $\mathscr{F}'$ 为集合 $X$
上的两个滤子。如果任何 $\mathscr{F}$ 的成员都是
$\mathscr{F}'$ 的成员，那么我们称 $\mathscr{F}'$
是 $\mathscr{F}$ 的**加细**。
:::

::: definition [超滤] {@definition:ultrafilter}
集合 $X$ 上的滤子 $\mathscr{F}$ 称为 **[[超滤]]**，
如果 $\mathscr{F}$ 的任何加细，如还是真滤子，
就等于 $\mathscr{F}$。
:::

利用 [[Zorn 引理]]，可证明任何真滤子都有某超滤加细之。

## 例子 {@sec:examples-of-filters}

1. {@item:sequence-filter} 对集合间映射 $a\colon \mathbb{N} \to X$，
   可定义滤子 $\mathscr{F}_a$ 如下：
   $X$ 的子集 $A$ 是 $\mathscr{F}_a$ 的成员当且仅当存在正整数
   $N$，使得 $a(n) \in A$ 对一切 $n > N$ 成立。
   当 $X$ 是[[拓扑空间]]或[[一致空间]]时，滤子 $\mathscr{F}_a$
   的成员是“可能包含序列 $a$ 的极限”的 $X$ 的子集。

2. {@item:nbh-filter} 令 $X$ 为拓扑空间，$x \in X$。则 $x$ 的 **[[邻域滤子]]**
   $\mathscr{V}_x$ 是指
   \(\{A \subset X : \exists \text{\small 开集 } U, x \in U \subset A\}\)。

3. {@item:cauchy-filter} 令 $X$ 为一致空间，$X$ 上滤子 $\mathscr{F}$ 称为
   **[[Cauchy 滤子]]**，如果对任何 $X$ 上的周围域 $U$，
   存在 $A \in \mathscr{F}$，使得 $A \times A \subset U$。
   若 $X$ 的一致结构由[[度量空间|度量]]诱导，
   $\mathscr{F}=\mathscr{F}_a$ 来自某个函数
   $a\colon \mathbb{N} \to X$，则 $\mathscr{F}$
   是 Cauchy 滤子的必要且充分条件是 $a$ 是 [[Cauchy 序列]]。

4. {@item:direct-image-filter} 令 $f\colon X \to Y$ 为集合间映射，$\mathscr{F}$
   为 $X$ 上滤子。则
   \[
   f_{\ast}\mathscr{F} = \{ B \subset Y : f^{-1}(B) \in \mathscr{F}\}
   \]
   是 $Y$ 上滤子，称为 $\mathscr{F}$ 沿 $f$ 的**前推**。

5. 令 $X$ 为集合，$x \in X$，则
   \[
   \mathscr{U}_x =
   \{F \subset X : x \in F\}
   \]
   是 $X$ 上的超滤，称为 $x$ 处的 **[[主滤子]]**。

## 拓扑空间上的滤子

在拓扑学中可定义滤子收敛的概念，

::: definition [滤子收敛] {@definition:convergence-filters}
令 $\mathscr{F}$ 为拓扑空间 $X$ 上的滤子。

- 称 $\mathscr{F}$ **收敛**于点 $x$，或 $x$
  是 $\mathscr{F}$ 的**极限**，如果 $\mathscr{F}$
  是邻域滤子 $\mathscr{V}_x$
  （@sec:examples-of-filters，[例 2](@item:nbh-filter)）
  的加细。

- 如果存在 \(\mathscr{F}\) 的加细 \(\mathscr{F}'\) 收敛于点 $x \in X$，
  且 \(\mathscr{F}'\) 为真滤子，则称 $x$ 是滤子 $\mathscr{F}$ 的**聚点**。

容易验证，$x$ 是 $\mathscr{F}$ 的聚点当且仅当对任意 $x$ 的邻域 $U$，任意 $\mathscr{F}$
的成员 $A$，$U \cap A$ 非空。
:::

形如 $\mathscr{F}_a$
（@sec:examples-of-filters，[例 1](@item:sequence-filter)）
的滤子收敛于 $x$ 当且仅当序列 $\{a(n)\}$ 收敛于 $x$。
因此，滤子的收敛推广了拓扑空间上序列收敛的概念。

可利用滤子收敛的概念刻画连续性、[[Hausdorff 空间|分离性]]
及[[紧空间|紧性]]。

::: proposition
令 $f\colon X \to Y$ 为拓扑空间之间的映射。
则下列陈述等价。

- $f$ 连续，

- 对任意 $X$ 上滤子 $\mathscr{F}$，
  若 $\mathscr{F}$ 收敛于 $x\in X$，
  则 $f_{\ast}\mathscr{F}$
  （@sec:examples-of-filters，[例 4](@item:direct-image-filter)）
  收敛于 $f(x)$。

:::

```terms
滤子:
  en: filter
  de: Filter :m
  fr: filtre :m
超滤:
  en: ultrafilter
  de: Ultrafilter :m
  fr: ultrafiltre :m
聚点:
  en: cluster point
```
