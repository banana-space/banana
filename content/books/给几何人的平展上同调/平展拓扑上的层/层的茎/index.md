---
title: 层的茎
notices:
  - name: 问题
    items:
      - '$E^{\bar{x}}$ 的定义中，对集合 $E$ 取的直和 $\bigoplus$ 似乎应为乘积 $\prod_{\operatorname{Hom}_X(\bar{x},U)}E$，这样才与茎函子构成伴随。'
---

::: lemma {@FilterEtaleNeib}
给定概形$X$和几何点$\bar{x}$，则

(i)给定两个平展邻域$(U_i,\bar{u}_i)_{i=1,2}$，
存在第三个平展邻域$(U,\bar{u})$和态射$(U,\bar{u})\to(U_i,\bar{u}_i)$；

(ii)假设$h_1,h_2:(U_1,\bar{u}_1)\to(U_2,\bar{u}_2)$是平展邻域的态射，
则存在第三个平展邻域$(U,\bar{u})$和
态射$h:(U,\bar{u})\to(U_1,\bar{u}_1)$使得$h_1\circ h=h_2\circ h$。
:::

::: proof
(i)只需考虑$U=U_1\times_XU_2$，而$\bar{x}\to U$被$(\bar{u}_1,\bar{u}_2)$定义；

(ii)定义$U$为纤维积
\[
\begin{tikzcd}
  U & {U_1} \\
  {U_2} & {U_2\times_XU_2}
  \arrow["\Delta", from=2-1, to=2-2]
  \arrow["{(h_1,h_2)}", from=1-2, to=2-2]
  \arrow[from=1-1, to=2-1]
  \arrow[from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
并定义$\bar{u}=(\bar{u}_1,\bar{u}_2)$。
:::

::: remark {@uniqueMorEtale}
在(ii)内，通过一些假设，我们可以使得态射$h_1=h_2$：若我们有诺特分离概形的图表
\[
\begin{tikzcd}
  & Y \\
  X & S
  \arrow["g"', shift right=1, from=1-2, to=2-1]
  \arrow["{g'}", shift left=1, from=1-2, to=2-1]
  \arrow["q", from=1-2, to=2-2]
  \arrow["p"', from=2-1, to=2-2]
\end{tikzcd}
\]
其中$Y$连通且$p,q$平展，则$g=g'$。
这是因为$\delta:X\to X\times_SX$平展且是闭浸入，则$X\times_SX=\delta(X)\sqcup Z$为连通分支的无交并。
注意到$g\times g':Y\to X\times_SX$有连通的像。
根据图知$\delta(X)\cap\mathrm{Im}(g\times g')\neq\emptyset$，故
$\mathrm{Im}(g\times g')\subset\delta(X)$，故$g=g'$。
:::

::: definition
给定概形$X$和$\mathscr{P}\in\operatorname{PreSh}(X_{\operatorname{ét}})$。
给定几何点$\bar{x}$，定义$\mathscr{P}$在$\bar{x}$的茎为
\[
\mathscr{P}_{\bar{x}}:=\varinjlim_{(U,\bar{u})}\mathscr{P}(U)
\]
其中余极限遍历所有平展邻域，根据 @FilterEtaleNeib 此为滤余极限。
:::

::: remark
给定概形$X$和几何点$\bar{x}$，
则不难看出$\mathscr{F}\mapsto\mathscr{F}_{\bar{x}}$作为函子
$\operatorname{PreSh}(X_{\operatorname{ét}})\to\operatorname{Sets}$或者
$\operatorname{Sh}(X_{\operatorname{ét}})\to\operatorname{Sets}$或者
$\operatorname{PreAb}(X_{\operatorname{ét}})\to\mathrm{AbGrps}$或者
$\operatorname{Ab}(X_{\operatorname{ét}})\to\mathrm{AbGrps}$都是正合的。
如果你不放心，请参考[@StacksProject, Tag 03PT]。
:::

::: definition
给定概形$X$和几何点$\bar{x}$，给定集合$E$，
定义$E^{\bar{x}}\in\operatorname{Sh}(X_{\operatorname{ét}})$为：
\[
E^{\bar{x}}(U):=\bigoplus_{\operatorname{Hom}_X(\bar{x},U)}E.
\]
:::

::: remark
有几个简单的性质：

(i)这个$E^{\bar{x}}$在平展拓扑下一定是层，其他景上面不一定；

(ii)我们有伴随函子$((-)_{\bar{x}},(-)^{\bar{x}})$，在预层范畴上这个伴随对任何景都对，
在层范畴上需要一定条件（而小平展景显然满足），
若对这个有兴趣，参考[@StacksProject, Tag 00Y3]；

(iii)对于几何点$\bar{y}$，除非$\bar{y}$也在$\bar{x}$对应的点上，否则$(E^{\bar{x}})_{\bar{y}}=0$。
:::

::: proposition
给定概形$X$和几何点$\bar{x}$，
对于$\mathscr{P}\in\operatorname{PreSh}(X_{\operatorname{ét}})$有
$\mathscr{P}_{\bar{x}}=\mathscr{P}^{\sharp}_{\bar{x}}$。
:::

::: proof
因为有伴随性，对于任何集合$E$，我们有
\[
\mathrm{Mor}_{\operatorname{Sets}}(\mathscr{P}_{\bar{x}},E)=\operatorname{Hom}_{\operatorname{PreSh}(X_{\operatorname{ét}})}(\mathscr{P},E^{\bar{x}})
=\operatorname{Hom}_{\operatorname{Sh}(X_{\operatorname{ét}})}(\mathscr{P}^{\sharp},E^{\bar{x}})=\mathrm{Mor}_{\operatorname{Sets}}(\mathscr{P}^{\sharp}_{\bar{x}},E),
\]
因此成立。
:::

对于结构层$\mathscr{O}_{X,\operatorname{ét}}$，它的茎有特殊的代数性质。

::: proposition
给定概形$X$和在$x\in X$上的几何点$\bar{x}$。
设$\kappa(x)\subset\kappa(x)^{\operatorname{sep}}\subset\kappa(\bar{x})$是可分代数闭包，
则有

(i)有同构$(\mathscr{O}_{X,x})^{\mathrm{sh}}\cong(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}$，
前者为$\mathscr{O}_{X,x}$的严格Hensel化；

(ii)设$\mathfrak{m}_x$是$\mathscr{O}_{X,x}$的极大理想，
则$\mathfrak{m}_x(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}$是
$(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}$的极大理想，且满足
\[
(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}/\mathfrak{m}_x(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}
\cong\kappa(x)^{\operatorname{sep}};
\]

(iii)对任何首一多项式$f\in (\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}[T]$和任意
$\bar{f}\in\kappa(x)^{\operatorname{sep}}[T]$
的根$\alpha_0\in\kappa(x)^{\operatorname{sep}}$使得$\bar{f}'(\alpha_0)\neq0$，
则存在$\alpha\in(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}$
使得$f(\alpha)=0$且$\alpha_0=\bar{\alpha}$。
:::

::: proof
这些都是复杂的交换代数，见[@StacksProject, Tag 04GE, 04GP, 04GW]。
其中(iii)被称之为Hensel引理，满足(iii)的环叫做Hensel局部环，如果这个环的剩余类域可分代数闭，
则称之为严格Hensel局部环。所以
我们这里就是一个严格Hensel环。
:::

::: remark
我们之后将记$\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}}:=(\mathscr{O}_{X,\operatorname{ét}})_{\bar{x}}$，
也不会有歧义。
:::

对于Hensel局部环，我们还有如下常用的结论：

::: proposition [Hensel引理] {@Hensel01}
设$(A,\mathfrak{m},\kappa)$是Hensel局部环，则

(i)任何有限$A$-代数$S$都是在$A$上有限的局部环的乘积，此时这些局部环依旧是Hensel局部环；

(ii)如果平展$A$-代数$B$满足$B$的极大理想$\mathfrak{n}$卧于$\mathfrak{m}$上使得
$\kappa\cong B/\mathfrak{n}$，
则存在同构$\phi:B\cong A\times B'$使得$\phi(\mathfrak{n})=\mathfrak{m}\times B'\subset A\times B'$；

(iii)我们有范畴等价：
\[
\{\text{有限平展}A\text{-代数}\}\longleftrightarrow \{\text{有限平展}\kappa\text{-代数}\},S\mapsto S/\mathfrak{m}S.
\]
:::

::: proof
纯粹的交换代数，参考[@StacksProject, Tag 04GG, 04GH, 04GK, 03QH]。
:::
