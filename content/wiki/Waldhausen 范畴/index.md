---
title: Waldhausen 范畴
aliases: [Waldhausen ∞-范畴, 带余纤维化的范畴]
categories: [$K$ 理论]
---

<problems>
- “性质”一节需要扩充。
- “例子”一节最后一例中 $\mathsf{Fin}_*$ 的定义里 $n\in\mathbb{Z}$ 似乎应为 $n\in\mathbb{N}$。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**Waldhausen 范畴**是一大类能定义[[代数 $K$ 理论]]的[[范畴]]，
是[[余纤维化]]结构的抽象。
它起初由 [[Friedhelm Waldhausen]] 于 1983 年引入，尔后由
[[Clark Barwick]] 于 2013 年推广到 [[$(\infty,1)$-范畴]]。

## 定义

Waldhausen 定义的概念在 $(\infty,1)$-范畴上有两种版本，
以下依次介绍。

::: definition [带余纤维化的范畴]
**带余纤维化的范畴**，又称
**Waldhausen 范畴**，指二元组 $(\mathcal{C},\operatorname{cof}\mathcal{C})$，
其中 $\mathcal{C}$ 是范畴，$\operatorname{cof}\mathcal{C}\subseteq\mathcal{C}$ 是[[宽子范畴]]，
其中态射称为**余纤维化**，常记作 $\rightarrowtail$，
满足：

- $\mathcal{C}$ 有[[零对象]]，记作 $0$。

- 对任意 $x\in\mathcal{C}$，$0\to x$ 是余纤维化。

- 对任意余纤维化 $z\rightarrowtail x$
  以及任意态射 $z\to w$，[[推出]] $y=x\sqcup_zw$ 存在，
  且 $w\to y$ 也是余纤维化。
  简而言之，余纤维化对推出封闭。此种推出图表称为**粘连方块**。
  当 $w=0$ 时，也记 $x\sqcup_z0$ 为 $x/z$，称序列
  $z\rightarrowtail x\to x/z$ 为**余纤维列**。

带余纤维化的范畴之间的**正合函子**指的是保持零对象、
余纤维化、粘连方块的函子。带余纤维化的小范畴沿正合函子构成范畴，
记作 $\mathsf{Wald}$。
:::

::: definition [带余纤维化、弱等价的范畴] {@defcofw}
**带余纤维化、弱等价的范畴**指三元组
$(\mathcal{C},\operatorname{cof}\mathcal{C},W)$，
其中 $(\mathcal{C},\operatorname{cof}\mathcal{C})$ 是带余纤维化的范畴，
$W\subseteq\mathcal{C}$ 是[[宽子范畴]]，其中态射称为**弱等价**，
满足如交换图
\[
\begin{tikzcd}
  w\ar[d]&z\ar[l]\ar[r,tail]\ar[d]&x\ar[d]\\
  w'&z'\ar[l]\ar[r,tail]&x'
\end{tikzcd}
\]
的纵向箭头都是弱等价，横向箭头中向右者都是余纤维化，
则自然映射 $x\sqcup_zw\to x'\sqcup_{z'}w'$
也是弱等价。简而言之，弱等价可以粘连。

带余纤维化、弱等价的范畴之间的**正合函子**指的是保持零对象、
余纤维化、粘连方块、弱等价的函子。
:::

::: remark {@3o2}
@defcofw 中没有对弱等价提以下**三选二性质**：
对 $\mathcal{C}$ 中态射 $f\colon x\to y$ 和 $g\colon y\to z$，
如 $f$、$g$、$g\circ f$ 三者中有两者属于 $W$，
则第三者也属于 $W$。故严格来说 $(\mathcal{C},W)$ 不是[[弱等价范畴]]。
:::

::: remark
Waldhausen 定义的概念是 @defcofw 中 $\mathcal{C}$
是 $1$-范畴的情形。
:::

::: remark
如 $(\mathcal{C},\operatorname{cof}\mathcal{C})$ 是带余纤维化的范畴，取 $W$
为 $\mathcal{C}$ 的[[对象群胚]]，即只以同构为弱等价，
就得到带余纤维化、弱等价的范畴。
:::

::: remark
如 $(\mathcal{C},\operatorname{cof}\mathcal{C},W)$ 是带余纤维化、弱等价的范畴，
则其局部化 $(\mathcal{C}[W^{-1}],\operatorname{cof}\mathcal{C}[W^{-1}])$ 是带余纤维化的范畴，
其中 $\operatorname{cof}\mathcal{C}[W^{-1}]$ 取为 $\operatorname{cof}\mathcal{C}$ 在
$\mathcal{C}[W^{-1}]$
中生成的宽子范畴。
:::

::: remark
这些概念显然可以对偶，其对偶概念分别称为**带纤维化的范畴**、
**带纤维化、弱等价的范畴**。
余纤维化的对偶概念称为**纤维化**，
弱等价的对偶概念仍称为**弱等价**，
粘连方块的对偶概念称为**纤维方块**。
:::

## 性质

## 例子

::: example
如 $\mathcal{C}$ 是有零对象和有限余极限的范畴，则 $(\mathcal{C},\mathcal{C})$
是带余纤维化的范畴。
:::

::: example
对[[正合范畴]] $(\mathcal{C},\operatorname{cof}\mathcal{C},\operatorname{fib}\mathcal{C})$，
$(\mathcal{C},\operatorname{cof}\mathcal{C})$
是带余纤维化的范畴，$(\mathcal{C},\operatorname{fib}\mathcal{C})$ 是带纤维化的范畴。
:::

::: example
考虑带基点有限集的范畴
$$
\mathsf{Fin}_*=(\{\left<n\right>=
\{0,1,\ldots,n\}\mid n\in\mathbb{Z}\},\{f\colon\left<n\right>\to\left<m\right>\mid
f(0)=0\}),
$$
取余纤维化为集合单射。
不难发现它作为带余纤维化的范畴为一元生成自由。换言之，
对带余纤维化的范畴 $(\mathcal{C},\operatorname{cof}\mathcal{C})$，映射
$$
\begin{gathered}
\mathsf{Fun}_{\mathsf{Wald}}
(\mathsf{Fin}_*,\mathcal{C})\to\mathcal{C}\\
F\mapsto F(\left<1\right>)
\end{gathered}
$$
是范畴等价。
:::

```terms
Waldhausen 范畴:
  en: Waldhausen category
  de: Waldhausen-Kategorie
  fr: catégorie de Waldhausen
```
