---
title: 平展上同调的拓扑不变性一瞥
---

::: theorem [平展上同调的拓扑不变性] {@TopInvariantEtCoh}
设$f:X_0\to X$是万有同胚（例如幂零理想层定义的闭浸入），则

(i)小平展景$X_{\operatorname{ét}}\to (X_0)_{\operatorname{ét}},V\mapsto V\times_XX_0$是同构；

(ii)平展意象$\operatorname{Sh}(X_{\operatorname{ét}})$和
$\operatorname{Sh}((X_0)_{\operatorname{ét}})$是同构；

(iii)对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$和任何$q$都有
$H^q_{\operatorname{ét}}(X,\mathscr{F})\cong H^q_{\operatorname{ét}}(X_0,\mathscr{F}|_{X_0})$。
:::

::: proof
(ii)和(iii)由(i)可以得到。而(i)比较复杂，我们只给一瞥，完整证明参考[@StacksProject, Tag 03SI]。
事实上可以（不太容易地）约化到幂零理想层定义的闭浸入且是仿射局部的情况。
也就是说对于幂零理想$I\subset A$，有
$A_{\operatorname{ét}}\cong (A/I)_{\operatorname{ét}}$。事实上对于平展$A/I$-代数，可以写为
\[
A/I[x_1,...,x_n]/(\bar{f}_1,...,\bar{f}_n)
\]
且$\det\left(\frac{\partial\bar{f}_i}{\partial x_j}\right)$可逆，取一个提升
得到$A[x_1,...,x_n]/(f_1,...,f_n)$，
现在考察$\det\left(\frac{\partial f_i}{\partial x_j}\right)$是否可逆。不难得知
由于$I$幂零，则$A/I$内可逆的元素在$A$上一定可逆。
:::
