---
title: Galois 群
categories: [域论]
navboxes: [域论]
---

**Galois 群**是[[域扩张]]的[[自同构]][[群]]，
它描述了域扩张的[[对称性]]。
通过 Galois 群，可以使用[[群论]]的工具研究域扩张。

## 定义

::: definition
对[[域扩张]] $L / K$，其[[自同构]]群，
即保持 $K$ 中所有元素不变的 $L$ 的[[自同构]]在复合运算下构成的群，
称为域扩张 $L / K$ 的 **Galois 群**，记为
$\operatorname{Gal}(L / K)$。
:::

::: remark
当 $L/K$ 是 [[Galois 扩张]]时，我们经常把用于其 Galois 群上的形容词移用到扩张上。
例如，当 $\operatorname{Gal}(L/K)$ 是 [[Abel 群]]、[[循环群]]、[[可解群]]时，
我们就分别称对应的扩张 $L/K$ 是 Abel 扩张、循环扩张、可解扩张。
:::

## 性质

<see>[[Galois 理论]]</see>

::: proposition
作为集合，$\operatorname{Gal}(L/K) \subseteq \operatorname{Hom}_K (L, \overline{K})$，
其中 $\overline{K}$ 是 $K$ 的代数闭包。当 $L/K$ 是[[正规扩张]]时，取到等号。
:::

::: corollary
如果 $L/K$ 是[[有限扩张]]，则有 $|\operatorname{Gal}(L/K)| \le [L:K]$。
当且仅当 $L/K$ 是 [[Galois 扩张]]时，取到等号。
:::

### 拓扑

可以在 Galois 群上引入一[[拓扑空间|拓扑]]，称为 **Krull 拓扑**，
使其成为一个[[拓扑群]]。

::: definition
Galois 群 $\operatorname{Gal}(L / K)$ 在单位元处的[[邻域基]]为
\[
\Bigl\{ \operatorname{Gal}(L/K') \Bigr\}_{K'}.
\]
其中 $K'$ 取遍 $K$ 的[[有限扩张]]。
这样得到的 $\operatorname{Gal}(L / K)$ 上的拓扑称为 **Krull 拓扑**。
:::

::: proposition
Galois 群是一个[[射有限群]]。特别地，对有限 Galois 扩张 $L/K$，
其 Galois 群取[[离散拓扑]]。
:::

### 上同调

<see>[[Galois 上同调]]</see>

[[群的上同调]]是研究[[群论]]的有力工具，
一些 Galois 群的[[群的上同调|上同调]]可以被具体计算出来，
或是具有在数论上的意义。

## 范畴视角

::: proposition [Galois 群作为代数对象的自同构群]
设 $K/k$ 是域扩张，并将 $K$ 视为
$\mathbf{Vect}_k$ 中的交换[[除代数]]对象。则
\[
\operatorname{Gal}(K/k)
=
\operatorname{Aut}_{\operatorname{CAlg}(\mathbf{Vect}_k)}(K),
\]
其中右端表示 $K$ 作为交换代数对象的自同构群。

换言之，$\sigma\colon K\to K$ 属于
$\operatorname{Gal}(K/k)$ 当且仅当它是 $\mathbf{Vect}_k$
中的同构，并且满足
\[
\sigma\circ m
=
m\circ(\sigma\otimes\sigma),
\qquad
\sigma\circ\eta=\eta.
\]
这里 $m$ 是 $K$ 的乘法，$\eta$ 是 $K$ 的单位元。
:::

::: proof
范畴 $\operatorname{CAlg}(\mathbf{Vect}_k)$ 等价于交换含幺
$k$-代数的范畴。因此，其中 $K$ 的自同构恰好是保持乘法、
单位元以及 $k$-线性结构的映射
\[
\sigma\colon K\longrightarrow K,
\]
也就是通常意义下的 $k$-域自同构。
:::

## 例子

::: example
对任意域 $K$，平凡扩张 $K/K$ 的 Galois 群为平凡群：
\[
\operatorname{Gal}(K/K)=\{\operatorname{id}_K\}.
\]
:::

::: example
扩张
\[
\mathbb{C}/\mathbb{R}
\]
的 Galois 群由恒等映射和复共轭组成：
\[
\operatorname{Gal}(\mathbb{C}/\mathbb{R})
=
\{\operatorname{id},\sigma\},
\qquad
\sigma(z)=\overline z.
\]
因此
\[
\operatorname{Gal}(\mathbb{C}/\mathbb{R})
\cong
\mathbb{Z}/2\mathbb{Z}.
\]
:::

::: example
设 $d\in\mathbb{Q}$ 不是有理数的平方。
扩张
\[
\mathbb{Q}(\sqrt d)/\mathbb{Q}
\]
的 Galois 群含有两个元素：
\[
\operatorname{Gal}
\bigl(\mathbb{Q}(\sqrt d)/\mathbb{Q}\bigr)
=
\{\operatorname{id},\sigma\},
\]
其中
\[
\sigma(\sqrt d)=-\sqrt d.
\]
因此每个二次扩张都是循环 Galois 扩张，且
\[
\operatorname{Gal}
\bigl(\mathbb{Q}(\sqrt d)/\mathbb{Q}\bigr)
\cong
\mathbb{Z}/2\mathbb{Z}.
\]
:::

::: example
考虑扩张
\[
L=\mathbb{Q}(\sqrt2,\sqrt3).
\]
$L$ 的自同构可以分别改变 $\sqrt2$ 和 $\sqrt3$ 的符号。
因此其 Galois 群有四个元素：
\[
\sqrt2\longmapsto\pm\sqrt2,
\qquad
\sqrt3\longmapsto\pm\sqrt3.
\]
这两个符号可以独立选取，所以
\[
\operatorname{Gal}(L/\mathbb{Q})
\cong
\mathbb{Z}/2\mathbb{Z}
\times
\mathbb{Z}/2\mathbb{Z}.
\]
这个群是 Klein 四元群。
因此 $L/\mathbb{Q}$ 是 Abel 扩张，但不是循环扩张。
:::

::: definition
一个域 $K$ 的 **[[绝对 Galois 群]]**，记为 $\operatorname{Gal}(K)$，
是 $\operatorname{Gal}(K^s/K)$，
其中 $K^s$ 是 $K$ 的[[可分闭包]]。
:::

## 类比

（可能可以放入 [[Galois 对应]] 或 Galois 联络的页面详述）

[[Galois 理论]]与[[覆叠空间]]理论有着良好的类比。
此时 Galois 群即对应于[[覆叠变换]]群。
特别地，[[绝对 Galois 群]]对应于[[基本群]]。

```terms
Galois 群:
  en: Galois group
  de: Galoisgruppe :f
  fr: groupe de Galois :m
```
