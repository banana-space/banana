---
title: 基础概念
---

本质就是推广拓扑空间的定义。我们在此只罗列一些相关熟知的定义和结论。

::: definition [Grothendieck拓扑和景] {@DefSite}
设$\mathcal{C}$是范畴，
一个$\mathcal{C}$上的Grothendieck拓扑由集合$\{\{U_i\to U\}_{i\in I}\}=\operatorname{Cov}(U)$组成，
其中$U$是任意对象，满足

(i)若$V\to X$是同构，则$\{V\to X\}\in\operatorname{Cov}(X)$；

(ii)若$\{X_i\to X\}_{i\in I}\in\operatorname{Cov}(X)$且$Y\to X$是任意态射，
则纤维积$X_i\times_XY$存在且
\[
\{X_i\times_XY\to Y\}_{i\in I}\in\operatorname{Cov}(Y);
\]

(iii)若$\{X_i\to X\}_{i\in I}\in\operatorname{Cov}(X)$且对任意$i\in I$都给定
$\{V_{ij}\to X_i\}_{j\in J_i} \in \operatorname{Cov}(X_i)$，则
\[
\{V_{ij}\to X_i\to X\}_{i\in I,j\in J_i}\in\operatorname{Cov}(X).
\]

范畴$\mathcal{C}$和其上的Grothendieck拓扑称为景。
:::

::: example [小Zariski景]
假设$X$是一个概形。考虑范畴$\mathrm{Op}(X)$由开子概形构成，态射是包含关系。
则$\{U_i\to U\}_{i\in I}$为覆盖如果$U=\bigcup_iU_i$。
记这个景为$X_{\operatorname{Zar}}$。
:::

::: example [大Zariski景]
假设$X$是一个概形。
考虑范畴$\mathrm{Sch}/X$，则$\{U_i\to U\}_{i\in I}$为覆盖如果$U_i\to U$为开浸入且$U=\bigcup_iU_i$。
记这个景为$X_{\mathrm{ZAR}}$。
:::

::: example [小平展景]
假设$X$是一个概形。考虑范畴$\operatorname{Ét}/X$，不难证明里面的态射都是平展的，所以我们不假设条件。
$\{U_i\to U\}_{i\in I}$为覆盖如果
$\coprod_{i\in I}U_i\to U$是满射。记这个景为$X_{\operatorname{ét}}$。
:::

::: example [大平展景]
假设$X$是一个概形。考虑范畴$\mathrm{Sch}/X$，则$\{U_i\to U\}_{i\in I}$为覆盖如果$U_i\to U$平展且
$\coprod_{i\in I}U_i\to U$是满射。记这个景为$X_{\operatorname{Ét}}$。
:::

::: example [fppf景]
假设$X$是一个概形。
考虑范畴$\mathrm{Sch}/X$，则$\{U_i\to U\}_{i\in I}$为覆盖如果$U_i\to U$平坦和局部有限表现，且
$\coprod_{i\in I}U_i\to U$是满射。记这个景为$X_{\mathrm{fppf}}$。
:::

::: definition
景$\mathcal{C}$上的预层为函子$F:\mathcal{C}^{\mathrm{op}}\to\operatorname{Sets}$。
:::

::: definition
给定景$\mathcal{C}$和其上的预层$F$。

(i)预层$F$称之为分离的，
如果对任意的$U\in\mathcal{C}$和覆盖$\{U_i\to U\}_{i\in I}\in\operatorname{Cov}(U)$，
诱导态射$F(U)\to\prod_{i\in I}F(U_i)$
是单射；

(ii)预层$F$称为层，
如果对任意的$U\in\mathcal{C}$和覆盖$\{U_i\to U\}_{i\in I}\in\operatorname{Cov}(U)$，
我们有如下等化子：
\[
\begin{tikzcd}
  {F(U)} & {\prod_{i\in I}F(U_i)} & {\prod_{i,j\in I}F(U_i\times_UU_j)}
  \arrow[from=1-1, to=1-2]
  \arrow[shift left=1, from=1-2, to=1-3]
  \arrow[shift right=1, from=1-2, to=1-3]
\end{tikzcd}
\]
其中态射被$U_i\times_UU_j\to U_i$和$U_i\times_UU_j\to U_j$诱导。
:::

::: definition
一个范畴称为Grothendieck意象（Topos）如果其等价于某个景上的层范畴。
:::

::: definition [层化]
在某个景$\mathcal{C}$上，取定$\mathscr{P}\in\operatorname{PreSh}(\mathcal{C})$，
称$\mathscr{P}^{\sharp}\in\operatorname{Sh}(\mathcal{C})$使得$\mathscr{P}\to\mathscr{P}^{\sharp}$
是$\mathscr{P}$的层化，
如果任取$\mathscr{G}\in\operatorname{Sh}(\mathcal{C})$和$\mathscr{P}\to\mathscr{G}$，都有交换图：
\[
\begin{tikzcd}
  {\mathscr{P}} & {\mathscr{P}^{\sharp}} \\
  {\mathscr{G}}
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-1, to=2-1]
  \arrow["{\exists!}", dashed, from=1-2, to=2-1]
\end{tikzcd}
\]
:::

::: theorem
在某个景$\mathcal{C}$上，取定$\mathscr{P}\in\operatorname{PreSh}(\mathcal{C})$。
对某个覆盖$\mathfrak{U}=\{U_i\to U\}\in\operatorname{Cov}(U)$，定义
\[
\check{H}^0(\mathfrak{U},\mathscr{P}):=\ker\left(\prod_i\mathscr{P}(U_i)\rightrightarrows\prod_{i,j}\mathscr{P}(U_i\times_UU_j)\right).
\]
故有典范映射$\mathscr{P}(U)\to\check{H}^0(\mathfrak{U},\mathscr{P})$。
不难证明不同覆盖可以诱导良定义的态射且和覆盖间映射选取无关
（参考[@StacksProject, Tag 03NQ]），故定义
\[
\mathscr{P}^+:U\mapsto\varinjlim_{\mathfrak{U}}\check{H}^0(\mathfrak{U},\mathscr{P}).
\]

(i)函子$\mathscr{P}^+$是分离预层；

(ii)若$\mathscr{P}$是分离预层，则$\mathscr{P}^+$是层且$\mathscr{P}\to\mathscr{P}^+$单射；

(iii)若$\mathscr{P}$是层，则$\mathscr{P}\to\mathscr{P}^+$是同构；

(iv)不论如何$\mathscr{P}^{++}$一定是层，且$\mathscr{P}^{++}\cong\mathscr{P}^{\sharp}$。
:::

::: proof
这是纯粹的层论推导，参考[@StacksProject, Tag 00WB]。
:::

::: remark
我们在景的 @DefSite 里规定$\operatorname{Cov}(U)$是集合很大程度上就是为了保证这个极限存在。
:::

::: corollary
在某个景$\mathcal{C}$上，取定$\mathscr{P}\in\operatorname{PreSh}(\mathcal{C})$。
则$\sharp:\operatorname{PreSh}(\mathcal{C})\to\operatorname{Sh}(\mathcal{C})$是个函子，且
若规定遗忘函子为$i:\operatorname{Sh}(\mathcal{C})\to\operatorname{PreSh}(\mathcal{C})$，
则有$(\sharp,i)$是伴随函子。特别的，函子$\sharp$是正合函子。
:::

::: proof
近乎平凡。
:::

::: corollary
考虑图$\mathscr{F}:\mathcal{I}\to\operatorname{Sh}(\mathcal{C})$，
则$\varprojlim_{\mathcal{I}}\mathscr{F}$存在且和预层范畴内一样，而
$\varinjlim_{\mathcal{I}}\mathscr{F}$存在且为预层范畴内的层化。
:::

::: proof
也是纯粹的层论验证，见[@StacksProject, Tag 00W2, 00WI]。
:::
