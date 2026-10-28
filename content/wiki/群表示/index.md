---
title: 群表示
categories: [群表示论]
navboxes: [群论]
---

<disambiguation>
本条目介绍的是抽象群的表示。关于有拓扑结构的群的表示，请参见[[拓扑群表示]]。关于有光滑结构的群的表示，请参见[[Lie 群表示]]。关于有概形结构的群的表示，请参见[[代数群表示]]。
</disambiguation>

**群表示**指将抽象的[[群]]实现为[[线性变换]]，
是研究群的重要手段。准确地说，群 $G$ 在域 $k$ 上的表示，
指的是 $k$ 上[[线性空间]] $V$ 以及群同态
$G\to\operatorname{GL}(V)$。
有时也将群到其他[[自同构群]]的映射称为“表示”，
而不局限于线性空间的自同构群。

本页面讨论的是“抽象”，也就是离散的群的表示。
[[拓扑群]]和 [[Lie 群]]会要求表示在有非平凡的拓扑结构的对象
（如 $\mathbb{R}$、$\mathbb{C}$）上，
且相应的群同态是连续映射。
相应的表示论的研究方法会有一定区别。

## 定义

::: definition [群表示]
$G$ 是群，$k$ 是[[域]]。**$G$ 在 $k$ 上的表示**，
或称 **$G$ 的 $k$-表示**，指的是
$k$-线性空间 $V$，附带同态 $\rho \colon G\to\operatorname{GL}(V)$。
等价地，$G$ 在 $k$ 上的表示相当于[[群环]] $k[G]$ 的[[左模]]。
同态 $G\to\operatorname{GL}(V)$ 也可看成 $k$-线性的[[群作用]]
$G\times V\to V$。于是对 $g\in G$，$v\in V$，常与群作用类似，
将作用所得元素记作 $gv$。
:::

群表示拥有各种线性代数构造。

::: definition [子表示与商表示]
$V$ 是 $G$ 的表示。$V$ 的**子表示**指的是在 $G$ 作用下稳定的线性子空间。
换言之，子空间 $W\subseteq V$ 是子表示，意思是对任意 $g\in G$
都有 $gW=W$。对于子表示 $W\subseteq V$，显然[[商向量空间|商空间]]
$V/W$ 上有自然的 $G$ 作用，称为**商表示**。
:::

::: definition [同态与同构]
$U,V$ 是 $G$ 的表示。$U$ 到 $V$ 的 **$G$-同态**指的是保持
$G$-作用的线性映射。同构指的是可逆的同态。
:::

::: definition [群表示范畴]
群 $G$ 的所有表示与其间 $G$-同态构成一范畴，
称为**群表示**范畴，
记为 $\mathsf{Rep}_G$ 或 $\mathsf{Rep}(G)$。
:::

::: definition [张量积与同态表示]
$U,V$ 是 $G$ 的 $k$-表示。则 $U\otimes_kV$ 与 $\operatorname{Hom}_k(U,V)$
依照
$$
g(u\otimes v)=gu\otimes gv,\,(gf)(u)=g(f(g^{-1}u))
$$
自然成为 $G$-表示，称为表示的**张量积**与**同态**表示。
依定义，$U$ 到 $V$ 的 $G$-同态正是同态 $\operatorname{Hom}_k(U,V)$
的 $G$-不动元。
:::

::: definition [对偶表示]
在上面的定义中，取 $V$ 为平凡表示 $k$
（即群中所有元素在 $V$ 上作用都为恒等映射），
此时 $\operatorname{Hom}_k(U, k)$ 称为**对偶表示**，
通常记为 $U^*$ 或 $U^\vee$。
:::

::: remark
存在自然的张量、同态、对偶表示是群表示的特殊性质，
其本质上是因为[[群代数]] $k[G]$ 有 [[Hopf 代数]]结构。
Lie 代数的表示也可以进行这些操作，
但一般的[[结合代数]]的表示则不能进行这些操作。
:::

下述诱导表示和限制表示提供了从一个群的表示得到其它群的表示的方法。

::: definition [限制表示]
对群同态 $H \to G$，
群 $G$ 的表示 $V$ 在 $H$ 上的**限制表示**，
记为 $\operatorname{Res}_G^H V$，
为相同的向量空间 $V$，
赋予同态 $G \to \operatorname{GL}(V)$ 在 $H$ 上的限制。
等价地，这是通过自然的映射 $k[H] \to k[G]$ 把
$V$ 视为 $k[H]$-模。

此构造定义了函子
\[
\operatorname{Res}_G^H \colon
\mathsf{Rep}_G \to \mathsf{Rep}_H.
\]
:::

::: definition [诱导表示]
对群同态 $H \to G$，
群 $H$ 的表示 $V$ 在 $G$ 上的诱导表示有两种：
$k[G] \otimes_{k[H]} V$ 和
$\operatorname{Hom}_{k[H]}(k[G], V)$，
记为 $\operatorname{Ind}_H^G V$。
当 $H$ 在 $G$ 中的像在 $G$ 中指数有限时，
二者同构。

此二构造定义了函子
\[
\operatorname{Ind}_H^G \colon
\mathsf{Rep}_H \to \mathsf{Rep}_G,
\]
前者为上述 $\operatorname{Res}_G^H$ 之[[左伴随]]，
后者为其右伴随。
:::

## 例子

- $0$ 空间附带平凡同态是一表示，称为**零表示**。

- 一维空间 $k$ 附带平凡同态 $G\to\operatorname{GL}(k)$
  是一表示，称为**平凡表示**。

- 对群 $G$ 及域 $k$，考虑[[群环]]
  $$
  k[G]=\bigoplus_{g\in G}ke_g
  $$
  本身，即以 $G$ 为基的 $k$-线性空间，作用为
  $ge_h=e_{gh}$。不难验证这是一表示，称为**正则表示**。

- 更一般地，[[群作用]] $G\curvearrowright S$
  在以 $S$ 为基的线性空间上给出群表示。

## 性质

单与半单是表示的最基本的性质。

::: definition
**不可约表示**指的是没有非零真子表示的非零表示，
也称为**单表示**。
**半单表示**指的是单表示的直和，也称**完全可约表示**。
:::

::: remark
如将表示视为[[群环]]上的模，则不难发现以上概念分别对应[[单模]]与[[半单模]]。
:::

有限群的表示，在域特征不整除群的阶时，具有较简单的结构。
下面的 [[Maschke 定理]]表明此时所有表示都是半单的。
这种情况下的理论称为[[常表示论]]。

::: theorem [Maschke]
设 $G$ 是[[有限群]]，$k$ 是域，$\operatorname{char}k\nmid\#G$。
则 $G$ 的任一 $k$-表示都半单。如 $k$ [[代数闭域|代数闭]]，
正则表示有分解
$$
k[G]=\bigoplus_{V\,不可约}V^{\dim V}.
$$
换言之，所有的不可约表示都出现在正则表示中，
且出现次数等于维数。
:::

```terms
群表示:
  en: group representation
  de: Gruppendarstellung
  fr: représentation de groupe
  grc: ἀναπαραστάσις ὁμαδός
  la: repraesentatio catervae
```
