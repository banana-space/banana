---
title: Čech上同调
---

::: definition
考虑概形$X$和一族平展覆盖$\mathfrak{U}=\{U_i\to X\}_{i\in I}$，
考虑$\mathscr{P}\in\operatorname{PreAb}(X_{\operatorname{ét}})$，定义
\[
\check{C}^r(\mathfrak{U},\mathscr{P})=\prod_{(i_0,...,i_r)\in I^{r+1}}\mathscr{P}(U_{i_0}\times_X\cdots\times_XU_{i_r})
\]
和映射$d^r:\check{C}^r(\mathfrak{U},\mathscr{P})\to\check{C}^{r+1}(\mathfrak{U},\mathscr{P})$为
\[
s=(s_{i_0,...,i_r})\mapsto
\left(\sum_{j=0}^{r+1}(-1)^j(s_{i_0,...,i_{j-1},i_{j+1},...,i_{r+1}})|_{U_{i_0,...,i_{r+1}}}\right)_{i_0,...,i_{r+1}}.
\]
复形$\check{C}^*(\mathfrak{U},\mathscr{P})$称为Čech复形，其上同调
\[
\check{H}^i(\mathfrak{U},\mathscr{P}):=H^i(\check{C}^*(\mathfrak{U},\mathscr{P}))
\]
称为$\mathscr{P}$关于覆盖$\mathfrak{U}$的Čech上同调。
:::

::: remark
不难注意到Čech复形可以重新写成：
\[
\check{C}^*(\mathfrak{U},\mathscr{P})
=\operatorname{Hom}_{\operatorname{PreAb}(X_{\operatorname{ét}})}\left(\left(\bigoplus_{i_0\in I}\underline{\mathbb{Z}}_{U_{i_0}}\leftarrow
\bigoplus_{(i_0,i_1)\in I^2}\underline{\mathbb{Z}}_{U_{i_0}\times_XU_{i_1}}\leftarrow \cdots\right),\mathscr{P}\right).
\]
而且直接（大量）计算会得到$\operatorname{Hom}$里面的复形$\underline{\mathbb{Z}}_{\mathfrak{U}}^*$
是正合的
（参考[@StacksProject, Tag 03AT]）。
:::

::: example
考虑覆盖$\mathfrak{U}=\{Y\to X\}$使得$Y\to X$是Galois覆叠$G$。
对$\mathscr{P}\in\operatorname{PreAb}(X_{\operatorname{ét}})$，
假设其把无交并映成积，
应用 @TateConGrps 则有$\check{H}^i(\mathfrak{U},\mathscr{P})\cong H^i(G,\mathscr{P}(Y))$。
:::

::: proposition
给定概形$X$和平展覆盖$\mathfrak{U}=\{U_i\to X\}_{i\in I}$。

(i)对任何内射对象$\mathscr{I}\in\operatorname{PreAb}(X_{\operatorname{ét}})$，
对$i>0$我们有$\check{H}^i(\mathfrak{U},\mathscr{I})=0$；

(ii)在$\operatorname{PreAb}(X_{\operatorname{ét}})$内$\check{H}^i(\mathfrak{U},-)$是
$\check{H}^0(\mathfrak{U},-)$的导出函子；

(iii)若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
则$\check{H}^0(\mathfrak{U},\mathscr{F})=\Gamma(X,\mathscr{F})$。
:::

::: proof
(ii)运用万有$\delta$函子理论即可；(iii)就是层的条件之一；(i)注意到
\[
\check{H}^i(\mathfrak{U},\mathscr{I})=H^i(\operatorname{Hom}_{\operatorname{PreAb}(X_{\operatorname{ét}})}(\underline{\mathbb{Z}}_{\mathfrak{U}}^*,\mathscr{I}))
\]
且$\underline{\mathbb{Z}}_{\mathfrak{U}}^*$正合和$\mathscr{I}$内射即可。
:::

::: definition
考虑概形$X$和一族平展覆盖$\mathfrak{U}=\{U_i\to X\}_{i\in I}$。
这个覆叠的一个加细指覆盖$\mathfrak{V}=\{V_j\to X\}_{j\in J}$
满足对任意的$V_j\to X$都存在分解$V_j\to U_{\alpha(j)}\to X$。这样会自然诱导一个
$\alpha^*:\check{C}^*(\mathfrak{U},\mathscr{P})\to\check{C}^*(\mathfrak{V},\mathscr{P})$为
$(\alpha^rs)_{j_0,...,j_r}=s_{\alpha(j_0),...,\alpha(j_r)}|_{V_{j_0,...,j_r}}$。
因此诱导
$\rho(\mathfrak{V},\mathfrak{U}):\check{H}^i(\mathfrak{U},\mathscr{P})\to\check{H}^i(\mathfrak{V},\mathscr{P})$。
故而可以定义Čech上同调为
\[
\check{H}^i_{\operatorname{ét}}(X,\mathscr{P}):=\varinjlim_{\mathfrak{U}}\check{H}^i(\mathfrak{U},\mathscr{P}).
\]
:::

::: proposition
给定概形$X$。

(i)对任何内射对象$\mathscr{I}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
对$i>0$我们有$\check{H}^i_{\operatorname{ét}}(X,\mathscr{I})=0$；

(ii)若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
则$\check{H}^0_{\operatorname{ét}}(X,\mathscr{F})=\Gamma(X,\mathscr{F})$。
:::

::: proof
(i)注意到遗忘函子保持内射性质，于是在$\operatorname{Ab}(X_{\operatorname{ét}})$内也满足；
(ii)由于对所有覆盖都满足，因此余极限也满足。
:::
