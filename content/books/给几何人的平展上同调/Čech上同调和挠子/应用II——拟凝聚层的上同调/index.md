---
title: 应用II——拟凝聚层的上同调
---

接下来介绍一个意料之中的结果。

::: lemma
设$X=\operatorname{Spec} A$仿射，取拟凝聚层$\mathscr{F}^{\operatorname{ét}}$，
则对$i>0$都有$H_{\operatorname{ét}}^i(X,\mathscr{F}^{\operatorname{ét}})=0$。
:::

::: proof
我们用对$i$的归纳法。

先考虑$i=1$。取$\xi\in H_{\operatorname{ét}}^1(X,\mathscr{F}^{\operatorname{ét}})$。
将覆盖加细可以假设$U_i$仿射。
根据 @004 得到其对应$\eta'\in\check{H}^1(\mathfrak{U},\mathscr{F}^{\operatorname{ét}})$。
设$\mathfrak{V}=\{\sqcup_iU_i\to X\}$不难看出
$\check{H}^1(\mathfrak{U},\mathscr{F}^{\operatorname{ét}})=\check{H}^1(\mathfrak{V},\mathscr{F}^{\operatorname{ét}})$。
假设$\mathfrak{V}=\{\operatorname{Spec} B\to\operatorname{Spec} A\}$，
则复形$\check{C}^*(\mathfrak{V},\mathscr{F}^{\operatorname{ét}})$
为
\[
B\otimes_AM\to B\otimes_AB\otimes_AM\to B\otimes_AB\otimes_A B\otimes_AM\to\cdots.
\]
故成立。

对于$i>1$，取$\xi\in H_{\operatorname{ét}}^i(X,\mathscr{F}^{\operatorname{ét}})$，
由 @003 存在平展覆盖$\mathfrak{U}=\{U_i\to X\}$使得$\eta|_{U_i}=0$。
将覆盖加细可以假设$U_i$仿射。
注意到$U_{i_0}\times_XU_{i_1}\times_X\cdots\times_XU_{i_p}$皆为仿射，考虑 @Cech-Derived 中的谱序列
\[
E_2^{p,q}=\check{H}^p_{\operatorname{ét}}(X,\underline{H}^q(\mathscr{F}))\Rightarrow H^{p+q}_{\operatorname{ét}}(X,\mathscr{F}).
\]
根据归纳假设知道对$0<q<p$都有$E_2^{p,q}=0$，
我们可以看出$\xi$必然来自$\xi'\in\check{H}^i(\mathfrak{U},\mathscr{F}^{\operatorname{ét}})$。
继续$i=1$情况的证明即可。
:::

::: theorem [平展-Zariski的拟凝聚上同调比较定理] {@EtZarQcohCoh}
对概形$X$和拟凝聚层$\mathscr{F}$，对任何$i\geq0$我们都有
\[
H^i(X,\mathscr{F})\cong H^i_{\operatorname{ét}}(X,\mathscr{F}^{\operatorname{ét}}).
\]
:::

::: proof
我们只考虑概形$X$分离的情况（一般情况可以由[@StacksProject, Tag 03F3, 03DW]得到）。
取Zariski开覆盖$\mathfrak{U}=\{U_i\to X\}$，根据分离性，
$U_{i_0}\times_XU_{i_1}\times_X\cdots\times_XU_{i_p}$皆为仿射。
则 @Cech-Derived 中的谱序列除了第一行全是零。故我们有
\[
H^i_{\operatorname{ét}}(X,\mathscr{F}^{\operatorname{ét}}) = \check{H}^i(\mathfrak{U},\mathscr{F}^{\operatorname{ét}})
=\check{H}^i(\mathfrak{U},\mathscr{F})= H^i(X,\mathscr{F})
\]
即可得到结论。
:::

::: theorem [拟凝聚层]
计算拟凝聚层的平展上同调只需要计算对应小Zariski景内拟凝聚层的上同调。
:::

::: proof
运用 @QcohEtZar 和 @EtZarQcohCoh 即可。
:::

因此，我们只需要计算不是拟凝聚层的平展上同调即可。比如挠层，这是我们一大目标之一。
