---
title: 常值层和局部常值层
---

::: definition
给定概形$X$。

(i)对于$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$（或者
$\in\operatorname{Ab}(X_{\operatorname{ét}})$），
则$\mathscr{F}$称为常值层如果存在集合$E$（或者Abel群$G$）
使得$\mathscr{F}\cong(U\mapsto E)^{\sharp}=:\underline{E}_X$（或者
$\cong(U\mapsto G)^{\sharp}=:\underline{G}_X$）；

(ii)称$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$（或者
$\in\operatorname{Ab}(X_{\operatorname{ét}})$）是局部常值层，
如果存在覆盖$\{U_i\to X\}$使得$\mathscr{F}|_{U_i}$是常值层；

(iii)称$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$（或者
$\in\operatorname{Ab}(X_{\operatorname{ét}})$）是有限局部常值层，
如果$\mathscr{F}$是局部常值层且取值的集合（或Abel群）是有限集合。
:::

::: remark
对于(i)(ii)可以定义一般的$\Lambda$-模的常值层/局部常值层。
:::

::: lemma [有限平展映射的平展局部分解] {@EtaleLocMap}
(i)设$f:X\to S$有限无分歧，取$s\in S$，
则存在平展邻域$(U,u)\to(S,s)$和有限无交分解$X_U=\coprod_jV_j$使得所有$V_j\to U$均为闭浸入。

(ii)设$f:X\to S$有限平展，取$s\in S$，
则存在平展邻域$(U,u)\to(S,s)$和有限无交分解$X_U=\coprod_jV_j$使得所有$V_j\to U$均为同构。
:::

::: proof
首先，有关各种映射的平展局部，可参考[@StacksProject, Tag 024J]。二者究其本质
都是拟有限态射的平展局部性质（见[@StacksProject, Tag 02LM]）。
证明虽然不甚复杂，但写于此意义也不大，故这里我们略去证明，证明参考[@StacksProject, Tag 04HJ, 04HN]。
:::

::: proposition {@FetAndFLoc}
给定概形$X$，则有范畴等价
\[
\{\text{有限平展映射}U\to X\}\cong\{\text{有限局部常值层}\},(U\to X)\mapsto \mathscr{F}=h_U.
\]
:::

::: proof
根据 @EtaleLocMap (ii)，不难看出$h_U$确实是有限局部常值层。
另一方面，任取$\mathscr{F}$是有限局部常值层，
则存在平展覆盖$\{U_i\to X\}$使得$\mathscr{F}|_{U_i}$是常值层，则
可以被有限平展态射$U_i\to X$表示（设取值集合的基数是$\kappa$，若是诺特分离概形，
考虑 @uniqueMorEtale，
则令$Z_i=\coprod_{i=1}^{\kappa}U_i$，故$\mathscr{F}|_{U_i}=h_{Z_i}$）。
根据仿射态射满足有效的忠实平坦下降（fpqc），我们可以得到
存在$Z\to X$使得$h_Z\cong\mathscr{F}$。
而由于有限性和平展性都是fpqc局部的，故$Z\to X$仍然是有限平展映射。
:::

::: proposition
给定连通概形$X$和几何点$\bar{x}$。

(i)存在范畴等价
\[
\{\text{有限局部常值层}\in\operatorname{Sh}(X_{\operatorname{ét}})\}\to\{\text{有限}\pi_1^{\operatorname{ét}}(X,\bar{x})\text{-集}\};
\]

(ii)存在范畴等价
\[
\{\text{有限局部常值层}\in\operatorname{Ab}(X_{\operatorname{ét}})\}\to\{\text{有限}\pi_1^{\operatorname{ét}}(X,\bar{x})\text{-模}\}.
\]
:::

::: proof
(i)根据 @EtFunGrpThm (i)和 @FetAndFLoc，得到结论；
(ii)即为(i)赋予加法结构。
:::
