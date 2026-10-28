---
title: 正规子群与商群
---

<problems>
- “外自同构群”的例子中第二个正合列以 $G$ 为第一项，但 $\mathrm{Int}$ 一般不是单射，这里似乎应为 $\mathrm{Int}(G)$。
</problems>

::: definition
$G$是群，$H<G$是子群。对任意$g\in G$，称如下集合为一个**左陪集**：
\[
gH=\big\{gh\bigm| h\in H\big\}.
\]
:::

由于$H$是子群，所以对任意$h\in H$，$hH=1\cdot H=H$。
我们说明$g_1H\cap g_2H\neq \emptyset$当且仅当$g_1H= g_2H$。
实际上，如果$g_1H\cap g_2H\neq \emptyset$，
那么存在$h_1, h_2\in H$，使得$g_1h_1=g_2h_2$。所以，$g_2=g_1h_1h_2^{-1}$。此时，
\[
g_2H=g_1h_1h_2^{-1}H=g_1\big(h_1h_2^{-1}H\big)=g_1H.
\]
这表明$\{gH\}_{g\in G}$是$G$的一个划分，从而定义出等价关系$\sim$。
实际上，$g_1\sim g_2$等价于$g_1^{-1}g_2\in H$。

我们定义左陪集的集合
\[
  {G/H}
=\big\{gH\bigm| g\in G\big\},
\]
并称$[G:H]=\big|
  {G/H}
\big|$为$H$在$G$中的**指标**。

类似地，定义**右陪集**为：
\[
Hg=\big\{hg\bigm| h\in H\big\}.
\]
同样可以证明$\{Hg\}_{g\in G}$是$G$的一个划分并定义了等价关系$\sim_{_r}$。
实际上，$g_1\sim_{_r} g_2$等价于$g_1g_2^{-1}\in H$。为了区别于左陪集的空间，右陪集的集合记作：
\[
  {H\backslash G}
=\big\{Hg\bigm| g\in G\big\}.
\]

我们今后基本上只处理左陪集的情形。

::: remark [左陪集的元素个数]
对任意的$gH$和$g'H$，如下映射为双射：
\[
gH \rightarrow g'H, \ \ x \mapsto g'g^{-1}x.
\]
特别地，若$H$是有限子群，则其每个左陪集的元素个数均为$|H|$。如果进一步$G$是有限群，我们就有
\[
|G|=[G:H]|H|.
\]
:::

::: proposition [Lagrange] {@prop:Lagrange}
若$G$是有限群，则其子群的元素个数整除$|G|$。特别地，对任意$g\in G$，${\rm ord}(g)\mid |G|$。
:::

::: proof
以上注记已经给出了第一部分的证明。
为了证明${\rm ord}(g)\mid|G|$，只要考虑子群$H=\{1,g,\cdots,g^{{\rm ord}(g)-1}\}$即可。
:::

::: remark
如果$G$是有限群，则对任意的$g\in G$，$g^{|G|}=1$。

特别地，考虑乘法群$\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$，
其中，$\overline{k}\cdot \overline{l}=\overline{kl}$。
那么，对任意的$k\in {\mathbb{Z}}$（$(k,p)=1$），由于$\left|\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times\right|=p-1$，在$\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$中我们有$\overline{k}^{p-1}=\overline{1}$，即对任意的与$p$互素的整数$k$，有$k^{p-1}\equiv 1 \mod p$。这是初等数论中的Fermat小定理。
:::

::: definition
$H$是群$G$的子群。
如果对任意$g\in G$，$g H g^{-1}=H$，其中，$gHg^{-1}=\big\{ghg^{-1}\bigm| h\in H\big\}$，
就称$H$是**正规子群**并记作$H \lhd G$。
:::

::: remark
为了验证$H$是正规子群，只要对任意$h\in H,g\in G$，验证$ghg^{-1}\in H$：
因为我们显然有$\bigcup_{g\in G}gHg^{-1}\supset H$。
:::

::: example
$G$是交换群，其所有子群都是正规子群。
:::

::: example
$n\geqslant 3$，$G=\mathfrak{D}_n$。
那么，$\langle r\rangle$是正规子群而$\langle s\rangle$不是正规子群。
:::

::: example
群同态的核是正规子群，即若$\varphi\colon G\rightarrow G'$是群同态，则${\rm Ker}(\varphi)\lhd G$。

对任意$g\in G$和$h\in {\rm Ker}(\varphi)$，我们验证
\[
\varphi(ghg^{-1})=\varphi(g )\varphi(h)\varphi( g^{-1})=\varphi(g )\cdot 1 \cdot\varphi( g)^{-1}=1.
\]
所以，$ghg^{-1}\in {\rm Ker}(\varphi)$。
:::

::: example
$H$是群$G$的子群，定义$H$在$G$中的**正规化子**为：
\[
{\rm N}_G(H)=\big\{g\in G\bigm| gHg^{-1}=H\big\}.
\]
容易验证${\rm N}_G(H)$是$G$的子群。按定义，我们有
\[
H\lhd {\rm N}_G(H) <G.
\]
这是$G$的使得$H$在其中为正规子群的最大子群。
:::

::: remark
$G$是群，$K<H$是$G$的子群，我们有
\[
[G:K]=[G:H][H:K].
\]
以上公式的证明是简单的集合计数。
:::

$G$是群，$H$为子群，我们希望在$
  {G/H}
$上面定义乘法。对左陪集$g_1H$和$g_2H$，自然的尝试是要求
\[
g_1H \cdot g_2H \coloneqq g_1g_2 H.
\]
我们必须验证以上是良好定义的。假设$g'_1=g_1h$，其中，$h\in H$，那么，$g_1H=g'_1H$。
所以，上述直观的定义还应该给出
\[
g_1H \cdot g_2H=g'_1H \cdot g_2H \coloneqq g'_1g_2 H=g_1hg_2 H.
\]
为了保证两个公式给出了同样的陪集，我们要保证$(g_1g_2)^{-1}g_1hg_2= g_2^{-1} hg_2\in H$。
根据以上元素选择的任意性，这等价于$H$是正规子群。

::: theorem
$H\lhd G$是正规子群。在$
  {G/H}
$存在唯一的群结构，使得自然的商映射
\[
\pi\colon G\longrightarrow
{G/H}
\]
是群同态。另外，${\rm Ker}(\pi)=H$。

实际上，左陪集的乘法定义为$g_1H \cdot g_2H = g_1g_2 H$。
:::

::: proof
定义$
  {G/H}
$上乘法为$g_1H \cdot g_2H = g_1g_2 H$，
这是良好定义的：假设$g_1'H=g_1H$，$g_2'H=g_2H$，
则存在$h_1,h_2\in H$，使得$g_1'=g_1 h_1,g_2'=g_2h_2$，从而
\[
g'_1g'_2 H=g_1 h_1g_2h_2H=g_1 g_2 \cdot \underbrace{g_2^{-1}h_1 g_2}_{\in H} \cdot h_2H=g_1 g_2H.
\]
此时，
\[
\pi(g_1\cdot g_2)=(g_1\cdot g_2)H=g_1H \cdot g_2H=\pi(g_1)\pi(g_2)
\]
所以，$\pi$是群同态。

唯一性是明显的：为了保证$\pi$是群同态，必须有$\pi(1_{_G})=1_{_{
  {G/H}
}}$，即$H$是$
  {G/H}
$中的单位元。另外，
\[
\pi(g_1\cdot g_2)=\pi(g_1)\cdot \pi(g_2) \ \ \Leftrightarrow \ \ g_1H \cdot g_2H = g_1g_2 H.
\]
这表明群的乘法结构由同态决定。
:::

::: theorem {@prop:quotient-group-universal}
$G$是群，$H\lhd G$是正规子群，$\varphi\colon G \rightarrow G'$是群同态。
若$H<{\rm Ker}(\varphi)$，则存在唯一的群同态$\overline{\varphi}\colon
  {G/H}
 \rightarrow G'$，使得$\overline{\varphi}\circ\pi=\varphi$，其中，$\pi\colon G\rightarrow
  {G/H}
$是自然的同态。
\[
\begin{tikzcd}
G \arrow[r, "\varphi"] \arrow[d, "\pi"] &  G' \\
  {G/H}
  \arrow[ur, "\overline{\varphi}",swap] &      \end{tikzcd}
\]
进一步，我们还有群同构$\overline{\varphi}\colon
  {G/{\rm Ker}(\varphi)}
 \stackrel{\simeq}{\longrightarrow} {\rm Im}(\varphi)$。
:::

::: proof
对任意的左陪集$gH$，定义
\[
\overline{\varphi}(gH)=\varphi(g).
\]
对于$g'H=gH$，由于$g^{-1}g'\in H\subset {\rm Ker}(\varphi)$以及$H<{\rm Ker}(\varphi)$，
有$\varphi(g^{-1}g')=1$，即$\varphi(g)=\varphi(g')$，这表明$\overline{\varphi}$是良好定义的。
映射$\overline{\varphi}$是群同态。另外，我们显然有$\overline{\varphi}\circ\pi=\varphi$。

选取$H={\rm Ker}(\varphi)$，我们显然有满射
\[
\overline{\varphi}\colon
 {G/{\rm Ker}(\varphi)}
\twoheadrightarrow  {\rm Im}(\varphi).
\]
根据定义，$\overline\varphi(gH)=1$当且仅当$g\in {\rm Ker}(\varphi)$，所以该同态是单射，从而为同构。
:::

::: remark
这是本课程中最基本和最经常用到的定理。作为一个典型的应用，我们证明下面的推论。
:::

::: corollary
$G$是群，$g\in G$，那么$\langle g \rangle$要么与${\mathbb{Z}}$同构，要么与$
  {{\mathbb{Z}}/n{\mathbb{Z}}}
$同构，其中，$n={\rm ord}(g)$。
:::

::: proof
考虑群同态$\varphi\colon {\mathbb{Z}}\rightarrow G$，其中，$\varphi(m)=g^m$，$m\in {\mathbb{Z}}$。
那么，$\varphi({\mathbb{Z}})=\langle g\rangle$。
如果${\rm Ker}(\varphi)=\{0\}$，根据以上定理，${\mathbb{Z}}\simeq \langle g\rangle$；
否则，${\rm Ker}(\varphi)=n{\mathbb{Z}}$，其中，$n$是${\rm Ker}(\varphi)$中最小的正整数，
从而，$
  {{\mathbb{Z}}/n{\mathbb{Z}}}
\simeq \langle g \rangle$。
:::

我们把与$
  {{\mathbb{Z}}/n{\mathbb{Z}}}
$同构的群称为 **$n$-阶循环群**，
把与${\mathbb{Z}}$同构的群称为**无限循环群**。
上面的证明表明循环群（即由一个元素生成的群）只有这两种。

::: remark [短正合列的记号]
给定群同态$\varphi\colon H\rightarrow G$和$\psi\colon G\rightarrow G'$。
如果$\varphi$为单射，把它记作是
\[
1\rightarrow H\stackrel{\varphi}{\longrightarrow} G;
\]
如果$\psi$为满射，把它记作是
\[
G\stackrel{\psi}{\longrightarrow} G'\rightarrow 1;
\]
如果${\rm Im}(\varphi)={\rm Ker}(\psi)$，把它记作是
\[
H\stackrel{\varphi}{\longrightarrow} G\stackrel{\psi}{\longrightarrow} G'.
\]
我们将经常用如下群同态的短正合列：
\[
1\rightarrow H\stackrel{\varphi}{\longrightarrow} G\stackrel{\psi}{\longrightarrow} G'\rightarrow 1,
\]
它表明$\varphi$是单射，$\psi$是满射并且${\rm Im}(\varphi)={\rm Ker}(\psi)$。
比如说，给定群同态$\varphi\colon G\rightarrow G'$，我们有
\[
1\rightarrow {\rm Ker}(\varphi)\rightarrow G \stackrel{\varphi}{\longrightarrow} {\rm Im}(\varphi)\rightarrow 1.
\]
:::

::: example
$G$是群，考虑内自同构映射${\rm Int}\colon G\rightarrow \mathbf{Aut}(G)$。
$\mathbf{Aut}(G)$中形如${\rm Int}(g)$形式的同构称作是$G$的**内自同构**，
它们组成的集合为${\rm Int}(G)\coloneqq{\rm Im}({\rm Int})\lhd \mathbf{Aut}(G)$是正规子群。
实际上，对任意的$g,h\in G,\varphi \in \mathbf{Aut}(G)$，我们有
\[
\big(\varphi\circ {\rm Int}_g \circ \varphi^{-1}\big)(h)=\varphi(g\varphi^{-1}(h)g^{-1})=\varphi(g)h\varphi(g)^{-1}={\rm Int}_{\varphi(g)}(h)。
\]
我们定义群$G$的**外自同构群**为：
\[
{\rm Out}(G)=
  {{\rm Aut}(G)/{\rm Im}({\rm Int})}
.
\]
从而，我们得到下述正合列

```math {@eq:exact-seq-for-G-to-int-G}
1\rightarrow {\rm Z}(G)\longrightarrow G \stackrel{\rm Int}{\longrightarrow} {\rm Int}(G)\rightarrow 1,
```

以及

```math {@eq:exact-seq-for-Aut-G-to-Out-G}
1\rightarrow G \stackrel{\rm Int}{\longrightarrow} \mathbf{Aut}(G) \rightarrow {\rm Out}(G)\rightarrow 1.
```

:::
