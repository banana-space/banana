---
title: Weil 限制
categories: [概形论]
navboxes: [概形论]
---

<disambiguation>
注意与[[标量限制]]区分。
</disambiguation>

<problems>
- “例子”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Weil 限制**是[[代数几何]]中的常用构造，
是[[概形]]范畴中[[基变换]]的[[右伴随]]，具体来说，
对[[概形态射]] $T\to S$ 和 [[相对概形|$T$-概形]] $X$，
可以构造 $S$-概形 $\operatorname{Res}_{T/S}(X)$。
例如复代数簇 $X$ Weil 限制到实数，
直观上就是把 $X$ 的复点看成实代数簇写出来，
比如 $\mathbb{A}^1_{\mathbb{C}}$ 的 Weil 限制是
$\mathbb{A}^2_\mathbb{R}$，$\mathbb{G}_{m,\mathbb{C}}$ 的 Weil
限制是 $\mathbb{A}^2_\mathbb{R}\setminus\{x^2+y^2=0\}$。

尽管记号相似，Weil 限制与[[标量限制]]完全不同，
后者是基变换的左伴随。

## 定义

::: definition
设 $f\colon T\to S$ 是[[概形态射]]，
$X\colon\mathsf{Sch}_T^\mathrm{op}\to\mathsf{Set}$ 是
[[相对概形|$T$-概形]]上的 [[Zariski 景|Zariski 层]]。
$X$ 在 $S$ 上的 **Weil 限制**，记作
$\operatorname{Res}_{T/S}(X)$ 或 $f_*X$，指的是 $S$-概形上的[[预层]]
$U\mapsto X(U\times_ST)$。它显然是 Zariski 层。
如它被[[概形]]或[[代数空间]]表示，则也把这个概形或代数空间称为
**Weil 限制**，也记作 $\operatorname{Res}_{T/S}(X)$。
如 $T=\operatorname{Spec}(B)$、$S=\operatorname{Spec}(A)$ 是[[仿射概形]]，
则 Weil 限制也记作 $\operatorname{Res}_{B/A}(X)$。
:::

::: remark
这里 $T$ 和 $S$ 当然也不必是概形，而可以是预层
$\mathsf{Ring}\to\mathsf{Set}$，其中 $\mathsf{Ring}$ 表示环范畴。
此时 Weil 限制可直接定义为基变换函子 $-\times_ST\colon
  \mathsf{Fun}(\mathsf{Ring},\mathsf{Set})\to\mathsf{Fun}(\mathsf{Ring},\mathsf{Set})$ 的右伴随。
由[[伴随函子定理]]，在适当的[[可达函子|可达]]条件下这个右伴随存在。
:::

::: remark
Weil 限制是右伴随，保持极限，故而（交换）群层的 Weil
限制自然带有（交换）群层结构。
:::

## 性质

Weil 限制作为函子性质非常简单，不平凡的是可表性。

::: theorem
设 $A\to B$ 是[[环同态]]，$B$ 是[[有限生成模|有限生成]][[投射模|投射]]
$A$-模，$X\to\operatorname{Spec}(B)$ 是[[仿射概形|仿射]] $B$-概形。则
$\operatorname{Res}_{B/A}(X)$ 是仿射 $A$-概形。
:::

::: proof
注意：

- 仿射概形作为预层的极限还是仿射概形；

- 仿射概形都是一些[[仿射直线]]的极限；

- Weil 限制保持极限；

所以只需对仿射直线 $X=\mathbb{A}^1_B$ 证明定理。
此时需要说明 $\mathsf{Ring}_A$ 上的函子 $C\mapsto C\otimes_AB$
可表。记 $B^\vee=\operatorname{Hom}_{\mathsf{Mod}_A}(B,A)$，则由条件，
$$
C\otimes_AB=\operatorname{Hom}_{\mathsf{Mod}_A}(B^\vee,C)
=\operatorname{Hom}_{\mathsf{Ring}_A}(\operatorname{Sym}_A(B^\vee),C)
$$
为可表函子。
:::

::: theorem {@概形表示}
设 $T\to S$ 是[[有限表现态射|有限表现]][[有限态射|有限]][[平坦态射|平坦]]概形态射，
$X$ 是 $T$-概形，满足对任意 $t\in T$ 以及任意有限个点
$x_1,\ldots,x_n\in X_t$，都存在仿射开子集
$U\subseteq X_t$ 包含 $x_1,\ldots,x_n$。则
$\operatorname{Res}_{T/S}(X)$ 是概形。
:::

::: remark
@概形表示 的条件在 $X$ 是[[拟射影概形|拟射影]]
$T$-概形时成立。
:::

::: theorem
设 $T\to S$ 是有限表现有限平坦代数空间态射，$X$
是 $T$ 上拟紧拟分离代数空间。则 $\operatorname{Res}_{T/S}(X)$
是 $S$ 上拟紧拟分离代数空间。
:::

## 例子

## 参考文献

```bibliography
Ji22:
  type: incollection
  author:
    - Lena Ji
    - Shizhang Li
    - Patrick McFaddin
    - Drew Moore
    - Matthew Stevenson
  title: Weil restriction for schemes and beyond
  booktitle: Stacks Project Expository Collection
  editor:
    - Pieter Belmans
    - Wei Ho
    - de Jong, Aise Johan
  series: London Mathematical Society Lecture Note Series
  publisher: Cambridge University Press
  year: 2022
  pages: 194–221
```

```terms
Weil 限制:
  en: Weil restriction
```
