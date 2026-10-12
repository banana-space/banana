---
title: 可构建层
---

::: definition
设$X$是概形，设$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$称为可构建的，
如果任取仿射开集$U\subset X$，存在有限分解$U=\coprod_iU_i$为可构建
局部闭集使得$\mathscr{F}|_{U_i}$是有限局部常值层。
:::

::: remark
对$\operatorname{Ab}(X_{\operatorname{ét}})$也同理定义，但对一般的$\Lambda$-模层，
需定义$\mathscr{F}|_{U_i}$是有限型的局部常值层。
:::

::: proposition
设概形$X$是拟紧拟分离且$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$（或
$\operatorname{Ab}(X_{\operatorname{ét}})$和$\Lambda$-模层，这时需假设$\Lambda$诺特），
则$\mathscr{F}$可构建当且仅当存在开覆盖$X=\bigcup_iU_i$使得$\mathscr{F}|_{U_i}$可构建
当且仅当存在分解$X=\bigcup_iU_i$可构建局部闭集使得$\mathscr{F}|_{U_i}$是有限局部常值层。
:::

::: proof
纯粹的点集拓扑和层论，参考[@StacksProject, Tag 095E]。
:::

::: proposition {@ConstructSheafPrp}
(i)设$f:X\to Y$是概形映射，
令$\mathscr{F}\in\operatorname{Sh}(Y_{\operatorname{ét}})$（或
$\operatorname{Ab}(Y_{\operatorname{ét}})$和$\Lambda$-模层，其中$\Lambda$诺特）是可构建的，
则$f^{-1}\mathscr{F}$也是可构建的；

(ii)设$X$是概形，则$\operatorname{Sh}(X_{\operatorname{ét}})$内的可构建层关于有限极限和余极限封闭，
若为$\operatorname{Ab}(X_{\operatorname{ét}})$和$\Lambda$-模层（其中$\Lambda$诺特），
则为弱Serre子范畴（若$X$诺特，则可为强Serre子范畴）；

(iii)若$X$拟紧拟分离，若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$（或$\Lambda$-模层，
其中$\Lambda$诺特）可构建，则$\operatorname{supp}(\mathscr{F})$也可构建。
:::

::: proof
纯粹的点集拓扑和层论，参考[@StacksProject, Tag 095G, 03RZ, 09YS, 09BH]。
:::

::: lemma {@008}
设$j:U\to X$是拟紧拟分离概形间的平展映射，则

(i)层$h_U$可构建；

(ii)对于有限Abel群$M$（或$\Lambda$-模，其中$\Lambda$诺特），层$j_!\underline{M}_U$可构建。
:::

::: proof
运用如下结论：

$\bullet$ **事实。** 若$U\to X$是拟紧拟分离概形间的平展映射，则存在有限分解$X=\coprod_iX_i$为可构建
局部闭集使得$\pi_i:X_i\times_XU\to X_i$是有限平展映射。（参考[@StacksProject, Tag 03S0]）

(i)根据这个事实和 @FetAndFLoc 即可得到结论。

(ii)运用 @ExtensionZeroBase-Ch(i)和 @001(iii)可以得到
\[
(j_!\underline{M}_U)|_{X_i}=\pi_{i,!}\underline{M}=\pi_{i,*}\underline{M}.
\]
此时$\pi_i$有限平展，则根据直像是平展局部的且 @EtaleLocMap(ii)，
因此$\pi_{i,*}\underline{M}$必然是有限局部常值。
:::

::: proposition {@ConstructSheafColimit1}
设概形$X$拟紧拟分离。
若$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$（或$\Lambda$-模，其中$\Lambda$诺特），
则$\mathscr{F}$是可构建层的滤余极限。
:::

::: proof
我们需要如下结论（参考[@StacksProject, Tag 093C]）：

$\bullet$ **事实1。** 任何$\operatorname{Sh}(X_{\operatorname{ét}})$内的层都可以写成
\[
\text{Coequalizer}\left(\coprod_{j = 1,..., m} h_{V_j} \rightrightarrows\coprod_{i = 1,..., n} h_{U_i} \right)
\]
其中$V_j,U_i$均为$X_{\operatorname{ét}}$内的拟紧拟分离元。

$\bullet$ **事实2。** 任何（$\Lambda$诺特）$\Lambda$-模都可以写成
\[
\mathrm{coker}\left(\coprod_{j = 1,..., m} j_{V_j,!}\underline{\Lambda}_{V_j}\longrightarrow\coprod_{i = 1,..., n} j_{U_i,!}\underline{\Lambda}_{U_i}\right)
\]
其中$V_j,U_i$均为$X_{\operatorname{ét}}$内的拟紧拟分离元。

故根据 @ConstructSheafPrp 和 @008 即可得到。
:::
