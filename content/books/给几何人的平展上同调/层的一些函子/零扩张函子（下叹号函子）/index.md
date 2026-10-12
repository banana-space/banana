---
title: 零扩张函子（下叹号函子）
---

::: definition
考虑平展映射$j:U\to X$，
定义$j_!:\operatorname{Ab}(U_{\operatorname{ét}})\to\operatorname{Ab}(X_{\operatorname{ét}})$为
\[
j_!\mathscr{F}=\left((V\mapsto X)\mapsto\bigoplus_{V\to U}\mathscr{F}(V\to U)\right)^{\sharp}.
\]
:::

::: proposition {@001}
对平展映射$j:U\to X$，有

(i)有伴随函子$(j_!,j^{-1})$；

(ii)对$\mathscr{F}\in\operatorname{Ab}(U_{\operatorname{ét}})$和几何点
$\bar{x}:\operatorname{Spec} k\to X$我们有
\[
(j_!\mathscr{F})_{\bar{x}}=\bigoplus_{\bar{u}:\operatorname{Spec} k\to U,j(\bar{u})=\bar{x}}\mathscr{F}_{\bar{u}},
\]
特别的，函子$j_!$正合；

(iii)若$j$有限平展，则存在$j_!\to j_*$使得对任何$\operatorname{Ab}(U_{\operatorname{ét}})$都同构；

(iv)若$j$是开浸入，
则对$\mathscr{F}\in\operatorname{Ab}(U_{\operatorname{ét}})$有$j^{-1}j_*\mathscr{F}\to\mathscr{F}$和
$\mathscr{F}\to j^{-1}j_!\mathscr{F}$是同构。
事实上$j_!\mathscr{F}$是唯一一个使得限制在$U$上是$\mathscr{F}$，且在其他地方的茎是$0$的Abel群层。
:::

::: proof
(i)(iv)平凡，略去。(iii)只需要考虑平展局部，用 @EtaleLocMap(ii)即可验证。

考虑(ii)，映射为
\[
\begin{aligned}
(j_!\mathscr{F})_{\bar{x}}&=\varinjlim_{(V,\bar{v})}(j_!\mathscr{F})(V)=\varinjlim_{(V,\bar{v})}\bigoplus_{\phi:V\to U}\mathscr{F}(\phi)\\
&\to\bigoplus_{\bar{u}:\operatorname{Spec} k\to U,j(\bar{u})=\bar{x}}\mathscr{F}_{\bar{u}}.
\end{aligned}
\]
同构参考[@StacksProject, Tag 03S5]。
:::

::: proposition [基变换] {@ExtensionZeroBase-Ch}
(i)设$f:Y\to X$是概形映射且$j:V\to X$平展，考虑纤维积
\[
\begin{tikzcd}
  {Y\times_XV} & V \\
  Y & X
  \arrow["f", from=2-1, to=2-2]
  \arrow["j", from=1-2, to=2-2]
  \arrow["{j'}"', from=1-1, to=2-1]
  \arrow["{f'}", from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
则在$\operatorname{Ab}((-)_{\operatorname{ét}})$和$\Lambda$-模层都有
$j'_!\circ (f')^{-1}=f^{-1}\circ j_!$；

(ii)设$f:X\to Y$是有限映射且$j:V\to Y$开浸入，且基变换之后$g:U=X\times_YV\to V$平展，设$j':U\to X$，
则在$\operatorname{Ab}((-)_{\operatorname{ét}})$
内有$f_*\circ j'_!=j_!\circ g_*$。
:::

::: proof
(i)考虑二者的右伴随函子，然后因为直像和平展局部化交换即可得到结论；

(ii)首先考虑$Y$的不在$U$内的几何点上的茎不难得知二者皆为零。其次用 @001(iv)和 @PushPull，得到同构
\[
j^{-1}f_*j'_!\mathscr{F}=g_*(j')^{-1}j'_!\mathscr{F}=g_*\mathscr{F}.
\]
再次用 @001(iv)即可得到结论。
:::

::: proposition {@ExactExtensionZeroPull}
对于概形$X$和闭子概形$i:Z\to X$及其补$j:U\to X$，
则对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$有正合列
\[
0\to j_!j^{-1}\mathscr{F}\to\mathscr{F}\to i_*i^{-1}\mathscr{F}\to0.
\]
:::

::: proof
分情况不难根据定义得到取茎之后正合，然后用 @ExactEtSheaf 即可。
:::
