---
title: 完美复形和迹
---

设$\Lambda$是可能不交换的环，设$\mathrm{Mod}_{\Lambda}$是左$\Lambda$-模范畴，
设$K(\Lambda)$和$D(\Lambda)$分别是其
同伦范畴和导出范畴。

::: definition
设$K_{\mathrm{perf}}(\Lambda)$是对象为有限投射$\Lambda$-模构成的有界复形，
态射为复形映射商去同伦等价的范畴。
故函子$K_{\mathrm{perf}}(\Lambda)\to D(\Lambda)$是满忠实的，设$D_{\mathrm{perf}}(\Lambda)$是其像。
我们称$D(\Lambda)$
内元素是完美的，如果它在$D_{\mathrm{perf}}(\Lambda)$里面。
:::

::: proposition [完美复形的性质]
(i)若$\Lambda$左诺特的，
则$K\in D(\Lambda)$完美当且仅当其有限$\mathrm{Tor}$-维数且同调群皆为有限$\Lambda$-模；

(ii)设$X$是域$k$上的射影曲线，取$\Lambda$有限且$K\in D_{\mathrm{cons}}(X,\Lambda)$，则
\[
R\Gamma(X_{\bar{k}},K)\in D_{\mathrm{perf}}(\Lambda).
\]
:::

::: proof
(i)见[@StacksProject, Tag 0658]。

(ii)就是验证(i)里面的条件。事实上同调群皆为有限$\Lambda$-模很简单：考虑谱序列
\[
H^i(X_{\bar{k}},\underline{H}^j(K))\Rightarrow H^{i+j}(R\Gamma(X_{\bar{k}},K)),
\]
根据上同调维数的结论得知其为有界复形，再
根据 @CurveTorsionCoh 知道前者皆为有限，故而后者也是如此。
考虑$\mathrm{Tor}$-维数，由投影公式和相同的谱序列即可证明。
:::

::: remark
我们称$K\in D(\Lambda)$有有限$\mathrm{Tor}$-维数，
如果存在$a,b\in\mathbb{Z}$使得对任何右$\Lambda$-模$N$
使得对任何$i\notin[a,b]$都有$H^i(N\otimes_{\Lambda}^{\mathbb{L}}K)=0$。
:::

::: proposition
设$K\in D_{\mathrm{perf}}(\Lambda)$且$f\in\mathrm{End}_{D(\Lambda)}(K)$，
则$\operatorname{Tr}(f)\in\Lambda^{\natural}$良定义。
:::

::: proof
任取有限投射复形$P^*$使得存在导出范畴内的同构$\alpha: P^*\to K$，
则$\alpha^{-1}\circ f\circ \alpha$对应$f^*:P^*\to P^*$在同伦意义下良定。设
\[
\operatorname{Tr}(f)=\sum_i(-1)^i\operatorname{Tr}(f^i:P^i\to P^i)\in\Lambda^{\natural}.
\]
需要验证这个定义不依赖于$f^*$的选取，且不依赖于$P^*,\alpha$的选取。这是纯粹的计算验证，
我们略去，参考[@StacksProject, Tag 03TI]。
:::

下面考虑滤过的情况。

::: definition
称$(M,F)\in\operatorname{Fil}^f(\mathrm{Mod}_{\Lambda})$为滤过有限投射的如果对所有的$p$都有
$\operatorname{gr}^p_F(M)$有限投射。
考虑同伦范畴$KF_{\mathrm{perf}}(\Lambda)$为$\operatorname{Fil}^f(\mathrm{Mod}_{\Lambda})$
内滤过投射对象构成的有界复形范畴，
我们有
\[
\begin{tikzcd}
  {KF(\Lambda)} & {KF_{\mathrm{perf}}(\Lambda)} \\
  {DF(\Lambda)} & {DF_{\mathrm{perf}}(\Lambda)}
  \arrow[hook', from=2-2, to=2-1]
  \arrow[hook', from=1-2, to=1-1]
  \arrow[from=1-1, to=2-1]
  \arrow[from=1-2, to=2-2]
\end{tikzcd}
\]
其中满忠实性和之前类似，得到$DF_{\mathrm{perf}}(\Lambda)$。
:::

::: proposition {@TraceFiltered}
设$K\in DF_{\mathrm{perf}}(\Lambda)$且$f\in\mathrm{End}_{DF}(K)$，则
\[
\operatorname{Tr}(f|_K)=\sum_{p\in\mathbb{Z}}\operatorname{Tr}(f|_{\operatorname{gr}^pK}).
\]
:::

::: proof
略去。
:::
