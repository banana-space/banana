---
title: 滤过导出范畴
---

关于滤过导出范畴的细节参考[@StacksProject, Tag 05QI]的有关章节。

::: definition
设$\mathcal{A}$是Abel范畴。

(i)设$\operatorname{Fil}(\mathcal{A})$为$\mathcal{A}$内滤过元$(A,F)$构成的（加性）范畴，
其中$F$代表滤过
\[
A\supset\cdots\supset F^nA\supset F^{n+1}A\supset\cdots 0;
\]

(ii)定义$\operatorname{Fil}^f(\mathcal{A})$是$\operatorname{Fil}(\mathcal{A})$
的包含有限滤过的满子（加性）范畴；

(iii)我们称$I\in\operatorname{Fil}^f(\mathcal{A})$是内射的（投射的），如果对所有$p$，对象
\[
\operatorname{gr}^pI=\operatorname{gr}^p_FI=F^pI/F^{p+1}I
\]
在$\mathcal{A}$内是内射（投射）的；

(iv)有复形范畴
$\operatorname{Comp}(\operatorname{Fil}^f(\mathcal{A}))\supset \operatorname{Comp}^+(\operatorname{Fil}^f(\mathcal{A}))$
和同伦范畴$K(\operatorname{Fil}^f(\mathcal{A}))\supset K^+(\operatorname{Fil}^f(\mathcal{A}))$；

(v)在$\operatorname{Comp}(\operatorname{Fil}^f(\mathcal{A}))$内的映射$\alpha:K^*\to L^*$
称之为拟同构，如果对所有$p$都有
$\operatorname{gr}^p(\alpha)$是拟同构；

(vi)定义$DF(\mathcal{A})$和$DF^+(\mathcal{A})$是$K(\operatorname{Fil}^f(\mathcal{A}))$和
$K^+(\operatorname{Fil}^f(\mathcal{A}))$逆转所有拟同构。
:::

::: remark {@026}
若$\mathcal{A}$足够内射，
则设$\mathcal{I}$是$\operatorname{Fil}^f(\mathcal{A})$包含内射元的满子范畴，
则有$DF^+(\mathcal{A})\cong K^+(\mathcal{I})$；若$\mathcal{A}$足够投射，
则设$\mathcal{P}$是$\operatorname{Fil}^f(\mathcal{A})$包含投射元的满子范畴，
则有$DF^-(\mathcal{A})\cong K^-(\mathcal{P})$。
:::

::: definition
(i)设$T:\mathcal{A}\to\mathcal{B}$是左正合函子且$\mathcal{A}$足够内射，定义
\[
RT:DF^+(\mathcal{A})\to DF^+(\mathcal{B})
\]
使得如下图交换（@026）：
\[
\begin{tikzcd}
  {DF^+(\mathcal{A})} & {DF^+(\mathcal{B})} \\
  {K^+(\mathcal{I})} & {K^+(\operatorname{Fil}^f(\mathcal{B}))}
  \arrow[from=2-1, to=1-1]
  \arrow[from=2-2, to=1-2]
  \arrow["T", from=2-1, to=2-2]
  \arrow["RT", from=1-1, to=1-2]
\end{tikzcd}
\]
称之为滤过右导出函子；

(ii)设$T:\mathcal{A}\to\mathcal{B}$是右正合函子且$\mathcal{A}$足够投射，定义
\[
LT:DF^-(\mathcal{A})\to DF^-(\mathcal{B})
\]
使得如下图交换（@026）：
\[
\begin{tikzcd}
  {DF^-(\mathcal{A})} & {DF^-(\mathcal{B})} \\
  {K^-(\mathcal{P})} & {K^-(\operatorname{Fil}^f(\mathcal{B}))}
  \arrow[from=2-1, to=1-1]
  \arrow[from=2-2, to=1-2]
  \arrow["G", from=2-1, to=2-2]
  \arrow["LG", from=1-1, to=1-2]
\end{tikzcd}
\]
称之为滤过左导出函子。
:::

::: proposition
在上述情况下，有交换图：
\[
\begin{tikzcd}
  {DF^+(\mathcal{A})} & {DF^+(\mathcal{B})} \\
  {D^+(\mathcal{A})} & {D^+(\mathcal{B})}
  \arrow["{\operatorname{gr}^p}", from=1-1, to=2-1]
  \arrow["RT", from=1-1, to=1-2]
  \arrow["{\operatorname{gr}^p}", from=1-2, to=2-2]
  \arrow["RT", from=2-1, to=2-2]
\end{tikzcd}
\]
:::

::: proof
忽略。
:::

::: remark
对$K^*\in DF^+(\mathcal{B})$，有谱序列
\[
E_1^{p,q}=H^{p+q}(\operatorname{gr}^p K^*)\Rightarrow H^{p+q}(\mathrm{ForgetFilt}(K^*)).
\]
:::
