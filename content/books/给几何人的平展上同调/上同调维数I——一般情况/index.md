---
title: 上同调维数I——一般情况
notices:
  - name: 问题
    items:
      - 定理证明的步骤 3 所说的谱序列图（直线 $l_1$、$l_2$ 与虚线 $L$）缺失。
---

::: definition
对于概形$X$，定义其（平展）上同调维数为
\[
\operatorname{cd}(X):=\min\{d:\text{对于所有挠Abel层}\mathscr{F}\text{都有当}q>d\text{时有}H^q_{\operatorname{ét}}(X,\mathscr{F})=0\}
\]
或者$\operatorname{cd}(X)=\infty$。
:::

::: lemma [Tate] {@014}
设$L/K$是域扩张，那么$\operatorname{cd}(L)\leq\operatorname{cd}(K)+\operatorname{trdeg}(L/K)$。
:::

::: proof
首先断言：若$X$是$K$上的一维代数概形，则$\operatorname{cd}(X)\leq\operatorname{cd}(K)+1$。
对$f:X\to\operatorname{Spec} K$和挠层$\mathscr{F}$用Leray谱序列
\[
E_2^{p,q}=H_{\operatorname{ét}}^p(\operatorname{Spec} K,R^qf_*\mathscr{F})\Rightarrow H_{\operatorname{ét}}^{p+q}(X,\mathscr{F}).
\]
注意到对于几何点$\bar{x}:\operatorname{Spec}\bar{K}\to\operatorname{Spec} K$，
由 @HigherDirectStalk-II
有$(R^qf_*\mathscr{F})_{\bar{x}}=H^q(X_{\bar{K}},\mathscr{F})$。
当$q>1$时由 @CurveTorsionCoh 知为$0$。
分析谱序列得到断言成立。

回到引理本身。若$\operatorname{trdeg}(L/K)=\infty$则显然成立。
当超越度有限时，根据归纳法不妨设$\operatorname{trdeg}(L/K)=1$。
设$L=\varinjlim_i A_i$是一些有限生成$K$代数的滤余极限，这些$A_i$的维数都不超过$1$。
再利用断言和 @ColimSheaf 即可得到结论。
:::

::: theorem {@CohoDim-I}
设$X$是代数闭域$k$上的代数簇，则$\operatorname{cd}(X)\leq 2\dim X$。
:::

::: proof
固定一个挠层$\mathscr{F}$，用归纳法。

$\bullet$**步骤1。** 对一般点含入$j:\eta\to X$，化归到形如$j_*\mathscr{F}$的情况。

注意到映射$\mathscr{F}\to j_*j^{-1}\mathscr{F}$诱导同构
$(\mathscr{F})_{\eta}\cong (j_*j^{-1}\mathscr{F})_{\eta}$。
其核和余核都是支撑在维数更小的闭子概形上的层。根据归纳假设只需要证明$j_*\mathscr{F}$的情况。

$\bullet$**步骤2。** $R^qj_*\mathscr{F}$支撑在维数$\dim X-q$的子簇上。

对于$X$的任何不可约闭子簇$Z$，设$Z$的一般点为$\xi$，然后选择一个几何点$\bar{\xi}\to\xi\to Z$。
注意到由 @HigherDirectStalk-II 得到
$(R^qj_*\mathscr{F})_{\bar{\xi}}=H^q(\mathrm{Frac}(\mathscr{O}_{\bar{\xi}}^{\mathrm{sh}}),\mathscr{F})$。
由于$\mathrm{Frac}(\mathscr{O}_{\bar{\xi}}^{\mathrm{sh}})/\mathrm{Frac}(\mathscr{O}_{\bar{\xi}})$
是代数扩张（因为其为有限扩张的极限），
注意到
\[
\operatorname{trdeg}(\mathrm{Frac}(\mathscr{O}_{\bar{\xi}})/k)=\dim X-\dim Z,
\]
根据 @014 得知成立。

$\bullet$**步骤3。** 完成证明。

考虑Leray谱序列
$E_2^{p,q}=H_{\operatorname{ét}}^p(X,R^qj_*\mathscr{F})\Rightarrow H_{\operatorname{ét}}^{p+q}(\eta,\mathscr{F})$
画出第二页谱序列图得知（$n=\dim X$）：
根据归纳，当$p>2(n-q)$且$q>0$时$E_2^{p,q}=0$；由 @014 知当$p+q>n$时$H^{p+q}(\eta,\mathscr{F})=0$。
故在图中$l_1$右方区域均收敛至$0$，在$l_2$右方的区域均为零。
于是考虑当$p>2\dim X$时有$E_2^{p-1,1}=0$，故$E_2^{p,0}=E_{\infty}^{p,0}$。
在虚线$L$上全部收敛至$0$，因此$E_2^{p,0}=0$，则证明完毕。
:::
