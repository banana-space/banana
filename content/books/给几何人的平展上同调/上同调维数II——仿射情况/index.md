---
title: 上同调维数II——仿射情况
notices:
  - name: 问题
    items:
      - 证明步骤 3 中谱序列 $E_2$ 页的图里各项的 $R^qf_*$、$f_*$ 似乎应为 $R^qj_*$、$j_*$（与谱序列 $E_2^{p,q}=R^pg_*R^qj_*\mathscr{F}$ 一致）。
      - 证明步骤 3 中“当$p>d-1$且$q>2=0,1$时”的条件似乎应为 $q<2$（即 $q=0,1$）。
---

::: theorem
设$X$是代数闭域$k$上的仿射簇，则$\operatorname{cd}(X)\leq\dim X$。
:::

::: proof
固定挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，对维数做归纳法。

当$\dim X=0$，则为有限映射，因此根据Leray谱序列和 @FiniteHDV 即可。
当$\dim X=1$时即为 @CurveTorsionCoh。
假设$d=\dim X>1$使得定理当$<d$时均成立，要证明对$X$成立。

$\bullet$ **步骤1。** 约化到证明$\mathbb{A}^d_k$的情况。

根据Noether正规化得到有限映射$\delta:X\to\mathbb{A}^d_k$，根据 @FiniteHDV 和Leray谱序列得到
$H^i_{\operatorname{ét}}(X,\mathscr{F})=H^i_{\operatorname{ét}}(\mathbb{A}^d_k,\delta_*\mathscr{F})$，
再根据 @020 得知$\delta_*\mathscr{F}$依旧是挠层，
故只需对$\mathbb{A}^d_k$证明。

$\bullet$ **步骤2。** 首先讨论两种情况，为后续做铺垫。

$\bullet\bullet$ 设$j:X\to Y$是开浸入且满足补集是某个有效Cartier除子$D$的支集，对$q>0$，
层$R^qj_*\mathscr{F}$在$D$上支撑，
断言当$a:=\operatorname{trdeg}(\kappa(y)/k)>d-q$时有$(R^qj_*\mathscr{F})_{\bar{y}}=0$。

取定义$D$的局部函数$f\in\mathscr{O}_{Y,y}$，根据 @HigherDirectStalk-II 有
\[
(R^qj_*\mathscr{F})_{\bar{y}}=H^q_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}\times_YX,\mathscr{F})
=H^q_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}[1/f],\mathscr{F}).
\]
根据一个代数结论（参考[@StacksProject, Tag 0F0U]）有$\mathscr{O}_{Y,y}^{\mathrm{sh}}[1/f]$
是域$k(t_1,...,t_a)^{\operatorname{sep}}(x)$上的$(d-a-1)$-维有限型代数的滤余极限，
再根据 @014 和归纳假设即可。

$\bullet\bullet$设$Z$是$k$上光滑$d-1$维，
设$E_a$为满足$\operatorname{trdeg}(\kappa(z)/k)\leq a$的集合，不难得知其在特殊化下稳定。
若$\mathscr{G}\in\operatorname{Ab}(Z_{\operatorname{ét}})$是支撑在$E_a$上的挠层，
则当$b>a$时$H^b_{\operatorname{ét}}(Z,\mathscr{G})=0$。

根据 @021 可以得到$\mathscr{G}=\varinjlim\mathscr{G}_i$在$E_a$上支撑，
根据归纳假设以及 @ColimSheaf 即可。

$\bullet$ **步骤3。** 完成证明。

考虑典范分解
\[
\begin{tikzcd}
  {\mathbb{A}^d_k} && {\mathbb{P}^1_k\times_k\mathbb{A}^{d-1}_k} \\
  & {\mathbb{A}^{d-1}_k}
  \arrow["f"', from=1-1, to=2-2]
  \arrow["j", from=1-1, to=1-3]
  \arrow["g", from=1-3, to=2-2]
\end{tikzcd}
\]
其中$j$是开浸入且满足补集是某个有效Cartier除子$D$的支集。考虑谱序列
\[
E_2^{p,q}=R^pg_*R^qj_*\mathscr{F}\Rightarrow R^{p+q}f_*\mathscr{F}.
\]
由于$R^qj_*\mathscr{F}$在$D$上支撑且$g|_D$是同构，故当$p>0,q>0$时$E_2^{p,q}=0$。
根据步骤2知当$q>d$时$R^qj_*\mathscr{F}=0$。
由于$g$是紧合且相对维数是$1$，根据 @RelCohDimPrp 得到当$p>2$时有$E_2^{p,q}=0$。
\[
\begin{tikzcd}[row sep = tiny]
  0 & 0 & 0 & 0 \\
  {g_*R^df_*\mathscr{F}} & 0 & 0 & 0 \\
  \vdots & \vdots & \vdots & \vdots \\
  {g_*R^1f_*\mathscr{F}} & 0 & 0 & 0 \\
  {g_*f_*\mathscr{F}} & {R^1g_*f_*\mathscr{F}} & {R^2g_*f_*\mathscr{F}} & 0 & \cdots
\end{tikzcd}
\]
故当$q>2$有$R^qf_*\mathscr{F}=g_*R^qj_*\mathscr{F}$。
根据步骤2第1条得知当$q>2$有
$\operatorname{supp}{R^qf_*\mathscr{F}}\subset E_{d-q}\subset\mathbb{A}_k^{d-1}$。
根据步骤2第2条得知当$p>d-q$且$q>2$时有
\[
H^p_{\operatorname{ét}}(\mathbb{A}_k^{d-1},R^qf_*\mathscr{F})=0.
\]
由 @HigherDirectStalk-II 有一般点的茎
$(R^2f_*\mathscr{F})_{\bar{\eta}}=H^2(\mathbb{A}^1_{\bar{\eta}},\mathscr{F})=0$，
再用步骤2第2条得知当$p>d-2$时有
\[
H^p_{\operatorname{ét}}(\mathbb{A}_k^{d-1},R^2f_*\mathscr{F})=0.
\]
再用归纳假设得到当$p>d-1$且$q>2=0,1$时有
\[
H^p_{\operatorname{ét}}(\mathbb{A}_k^{d-1},R^qf_*\mathscr{F})=0.
\]
综合上述结论，
考虑谱序列
$H^p_{\operatorname{ét}}(\mathbb{A}_k^{d-1},R^qf_*\mathscr{F})\Rightarrow H^{p+q}_{\operatorname{ét}}(\mathbb{A}_k^{d-1},\mathscr{F})$
即可。
:::

::: remark {@AffineCohDim}
事实上对于一般的域$K$和其上的有限型仿射概形$X$，都有
\[
\operatorname{cd}(X)\leq\dim(X)+\operatorname{cd}(K)
\]
（证明基本类似，略去）。甚至更有推广（Artin消灭定理）：
若$f:X\to Y$是域$K$上有限型仿射映射，
若挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$支撑在满足
$\operatorname{trdeg}(\kappa(x)/K)\leq a$的区域上，
则$R^qf_*\mathscr{F}$支撑在满足$\operatorname{trdeg}(\kappa(x)/K)\leq a-q$
的区域上（参考[@StacksProject, Tag 0F0X]）。
:::
