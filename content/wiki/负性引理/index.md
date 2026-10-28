---
title: 负性引理
categories: [双有理几何]
---

<problems>
- “第一种证明”一节需要扩充。
- “第二种证明”一节中，关于 $v(W)$ 性质的命题缺少 (1)、(2) 的证明。
- “定理及推论”一节的注中，条件“$f^{-1}(y) \subsetneq \mathrm{Supp}(D)$”似乎应为“$f^{-1}(y) \not\subset \mathrm{Supp}(D)$”。
</problems>

::: convention
在本文中，

- $\mathbb{k}$ 为任意特征的代数闭域。
- [[代数簇]]均要求为[[整概形]]。
- [[赋值]]取值为实数。

:::

**负性引理**是[[双有理几何]]中常用的结果，
它说明具有数值负性的除子（通常是例外除子）具有刚性。

## 定理及推论

::: theorem [负性引理] {@负性引理}
设$f \colon X \to Y$是[[正规]][[代数簇]]之间的[[紧合]][[双有理态射]]。
$-D$是$X$上$f$-[[数值有效]]
的 [[$\mathbb{R}$-Cartier 除子]]。我们有：

1. $D$是[[除子|有效除子]]当且仅当$f_* D$是有效除子。

2. 假设$D$是有效除子，则对于$Y$中的任一点$y$，要么$f^{-1}(y)\subset \mathrm{Supp}(D)$，
   或者$f^{-1}(y)\cap \mathrm{Supp}(D)=\emptyset$。

:::

::: remark
@负性引理 的(2)与(1)无关，我们在此处给出简单证明：由[[Zariski 连通性定理]]，
$f^{-1}(y)$连通。若$f^{-1}(y)\cap \mathrm{Supp}(D)\neq\emptyset$且$f^{-1}(y)
\subsetneq \mathrm{Supp}(D)$，我们可取一条不可约曲线$C\subset f^{-1}(y)$使得$C\cdot D> 0$，
这与$-D$是$f$-数值有效的矛盾。
:::

::: corollary [例外除子的刚性]
设$f \colon X \to Y$是正规代数簇之间的紧合双有理态射。设$D_1$和$D_2$为$X$上的两
个$f$-例外的$\mathbb{R}$-Cartier 除子，如果$D_1$和$D_2$ $f$-数值等价，则$D_1=D_2$。
:::

::: proof
注意$D_1-D_2\equiv_{f} D_2-D_1\equiv_{f}0$，且$f_*(D_1-D_2)=0$。利用负性引理，$D_1-D_2$
与$D_2-D_1$均为有效除子，故$D_1=D_2$。
:::

::: corollary
设$f \colon X \to Y$是正规代数簇之间的紧合双有理态射。设$D$和$E$为$X$上的
$\mathbb{R}$-Cartier 除子。设$E$是$f$-例外除子，$D$是有效除子，$D$与$E$ $f$-数值等价，
则$D\geq E$。
:::

::: proof
对$D-E$使用负性引理即可。
:::

::: corollary
设$f \colon X \to Y$是正规代数簇之间的紧合双有理态射。设$D$为$X$上的
$\mathbb{R}$-Cartier 除子。如果$D$ $f$-数值等价于0且$f_*D$是$\mathbb{R}$-Cartier 除子，
则$D\sim_{\mathbb{R}} f^*f_*D$。
:::

::: proof
取$f^*f_*D$中合适的线性等价代表元$D'$使得$D'-D$是例外除子，由于$D'-D$与$0$ $f$-数值等价，利用
负性引理$D'=D$。
:::

下面开始 @负性引理 (1) 的证明，在证明之前，我们先做出以下约化：

1. 我们只需证明$f_* D$是有效除子可推出$D$是有效除子，另一侧是显然的。

2. 由于命题对$Y$是局部的，我们可设$Y$是仿射簇。

3. 利用[[周引理]]，我们可设$f$是射影态射。利用(2)中的约化，我们可设$X$是[[拟射影簇]]。

## 第一种证明

我们采用[@KM98]中的证明。这个证明主要使用归纳法与 [[Hodge 指标定理]]。

## 第二种证明

我们采用 [@BdFF12, Proposition 2.12] 中的证明。
这个证明的想法是用“[[丰沛线丛|丰沛]]”逼近“[[数值有效]]”，
技术上用到了$X$上的[[赋值]]，尤其是[[除子赋值]]。

当$-D$是$f$-丰沛时，证明较易：

::: lemma {@toy-model}
设$f \colon X\to Y$是正规代数簇之间的紧合双有理态射，$-D$是$X$上$f$-丰沛
的$\mathbb{R}$-Cartier 除子。若$f_* D$有效，则$D$有效。
:::

::: proof
由于$-D$是$f$-丰沛的，取$m\gg 1$使得$-m D$整体生成：
\[
f^*f_*\mathcal{O}_X(-m D)\otimes \mathcal{O}_X\twoheadrightarrow \mathcal{O}_X(-m D)
\]
由于$X$、$Y$正规，$f$紧合双有理，我们有$f_*\mathcal{O}_X(-m D)\subset
\mathcal{O}_Y(-m f_*D)\subset \mathcal{O}_{Y}$。利用上文的满射，我们可知$\mathcal{O}_X(-m D)
\subset \mathcal{O}_{X}$，故$D\geq 0$。
:::

下设$v$为$X$上的一个赋值，对于$\mathfrak{a}\subset K_{X}$为$X$的一个分式理想，我们定义
\[
v(\mathfrak{a})=\min\{v(g)|g\in \mathfrak{a}\}
\]
由定义，$v(\mathfrak{a}\cdot\mathfrak{b})=v(\mathfrak{a})+v(\mathfrak{b})$，$v(\mathfrak{a}
+\mathfrak{b})=\min\{v(\mathfrak{a}),v(\mathfrak{b})\}$。

对于$W\in \mathrm{WDiv}_{\mathbb{R}}(X)$为$X$上的 [[$\mathbb{R}$-Weil 除子]]，我们
定义如下的分式理想
\[
\mathcal{O}_X(W):=\{g\in K_X | \mathrm{div}(g)+W\geq 0 \}
\]

::: lemma
设$v$为$X$上的[[赋值]]，
$W\in \mathrm{WDiv}_{\mathbb{R}}(X)$为$X$上的$\mathbb{R}$-Weil 除子，则：

1. $v(\mathcal{O}_X(m W))+v(\mathcal{O}_X(m' W))\geq v(\mathcal{O}_X((m+m')W))$
   对于非负整数$m,m'$。

2. 存在$C\geq 0$，使得对正整数$m$有$v(\mathcal{O}_X(m W))\geq -C m$。

3. $\lim_{m\to\infty}\frac{v(\mathcal{O}_X(m W))}{m}$存在。

:::

::: proof
1. 由于
   \[
   \mathcal{O}_X(m W)\cdot \mathcal{O}_X(m' W)\subset \mathcal{O}_X((m+m') W)
   \]
   根据赋值的性质可得。

2. 取$g_0\in \mathcal{O}_X(- W)$，则
   \[
   v(\mathcal{O}_X(m W))+m v(g_0)\geq 0
   \]
   得证。

3. 根据 (1)、(2)，由[[Fekete 引理]]可知极限存在。

:::

我们定义
\[
v(W):=-\lim_{m\to\infty}\frac{v(\mathcal{O}_X(m W))}{m}
\]
它是$\mathrm{WDiv}_{\mathbb{R}}(X)$上的函数，满足如下性质：

::: proposition
1. $v(W_1)+v(W_2)\leq v(W_1+W_2)$。

2. $v(c W)=c v(W)$，对$c\in \mathbb{R}_{\geq 0}$。

3. $v$在$\mathrm{WDiv}_{\mathbb{R}}(X)$的有限维子空间上连续。

:::

::: proof
3. 利用 (1)、(2) 可知$v$在$\mathrm{WDiv}_{\mathbb{R}}(X)$的有限维子空间上是[[凹函数]]，进而$v$连续。

:::

于是我们可以完成证明：

::: proposition {@valuation-increases}
设$f \colon X \to Y$是正规簇之间的紧合双有理态射，$D$是$X$上$f$-数值有效
的$\mathbb{R}$-Cartier 除子。则对于$X$上的任一赋值$v$，我们有$v(D)\leq v(f_* D)$。
:::

::: proof
利用周引理，我们设$f$是射影态射。由于$v$的连续性，设$D$是$\mathbb{Q}$-Cartier 除子。
取$A$为$f$-丰沛除子，
则$D_\epsilon=D+\epsilon A$对于$\mathbb{Q}\ni\epsilon>0$是$f$-丰沛$\mathbb{Q}$-Cartier 除子。

于是对于充分大且充分可除的$m$，我们有（类似于 @toy-model）
\[
\mathcal{O}_X (m D_\epsilon)\subset \mathrm{Im}(f^*\mathcal{O}_Y(m f_*D_\epsilon)
\otimes \mathcal{O}_X\to \overline{K_X})
\]
于是$-v(D_\epsilon)\geq -v(f_* D_\epsilon)$。令 $\epsilon \to 0$，利用$v$的连续性，我们
可知$v(D)\leq v(f_* D)$。
:::

::: corollary
设$f \colon X \to Y$是正规代数簇之间的紧合双有理态射。$-D$是$X$上$f$-数值有效
的$\mathbb{R}$-Cartier 除子。若$f_* D$有效，则$D$有效。
:::

::: proof
由 @valuation-increases 可知，对$X$上的所有赋值$v$，$v(-D)\leq v(-f_*D)$。
取$v$为$X$上的所有除子赋值，可知$v(-D)\leq 0$。特别地，取$v$为$X$上所有除子，我们可知$D$
有效。
:::

## 参考文献

```bibliography
KM98:
  type: book
  doi: 10.1017/cbo9780511662560
  year: 1998
  publisher: Cambridge University Press
  author: [Janos Kollár, Shigefumi Mori]
  title: Birational Geometry of Algebraic Varieties
BdFF12:
  type: article
  author: [Sebastien Boucksom, 'de Fernex, Tommaso', Charles Favre]
  year: 2012
  title: The volume of an isolated singularity
  journaltitle: Duke Mathematical Journal
  volume: 161
  number: 8
  doi: 10.1215/00127094-1593317
  url: http://sebastien.boucksom.perso.math.cnrs.fr/publis/BdFF.pdf
```

```terms
负性引理:
  en: negativity lemma
  fr: lemme de négativité
  la: lemma de negativitate
```
