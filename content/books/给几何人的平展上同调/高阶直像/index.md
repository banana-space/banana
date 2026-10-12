---
title: 高阶直像
---

## 基础性质

::: definition
对概形态射$f:X\to Y$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，因为$f_*$左正合，
故可以得到高阶直像$R^if_*\mathscr{F}$。
:::

::: proposition {@HigherDirectSheafifi}
对概形态射$f:X\to Y$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，则有
\[
R^if_*\mathscr{F}=\left(U\mapsto H^i_{\operatorname{ét}}(U\times_YX,\mathscr{F})\right)^{\sharp}.
\]
:::

::: proof
定义函子
$f_*^{\mathrm{pre}}:\operatorname{PreAb}(X_{\operatorname{ét}})\to\operatorname{PreAb}(Y_{\operatorname{ét}})$
为$\mathscr{P}\mapsto(U\mapsto\Gamma(U\times_YX,\mathscr{P}))$。
考虑交换图
\[
\begin{tikzcd}
  {\operatorname{PreAb}(X_{\operatorname{ét}})} & {\operatorname{PreAb}(Y_{\operatorname{ét}})} \\
  {\operatorname{Ab}(X_{\operatorname{ét}})} & {\operatorname{Ab}(Y_{\operatorname{ét}})}
  \arrow["i", hook, from=2-1, to=1-1]
  \arrow["{f_*^{\mathrm{pre}}}", from=1-1, to=1-2]
  \arrow["\sharp"', from=1-2, to=2-2]
  \arrow["{f_*}", from=2-1, to=2-2]
\end{tikzcd}
\]
由于$\sharp,f_*^{\mathrm{pre}}$正合，取内射预解$\mathscr{F}\hookrightarrow\mathscr{I}^*$得到
\[
R^rf_*\mathscr{F}=H^i(f_*\mathscr{I}^*)=H^r(\sharp\circ f_*^{\mathrm{pre}}\circ i \mathscr{I}^*)
=\left(f_*^{\mathrm{pre}}H^r(i\mathscr{I}^*)\right)^{\sharp}=\left(f_*^{\mathrm{pre}}\underline{H}^r(\mathscr{F})\right)^{\sharp}
\]
即可。
:::

::: corollary {@HigherDirectStalk-I}
对于几何点$\bar{y}$，我们有
\[
(R^if_*\mathscr{F})_{\bar{y}}=\varinjlim_{(U,\bar{u})}H^i_{\operatorname{ét}}(U\times_YX,\mathscr{F}).
\]
:::

::: corollary {@HigherDirectStalk-II}
如果$f$拟紧拟分离，我们有
\[
(R^if_*\mathscr{F})_{\bar{y}}=H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}\times_YX,\mathscr{F}).
\]
:::

::: proof
根据定义，上述命题还有 @ColimSheaf 即可得到结论（这个在导出范畴内也对，
参考[@StacksProject, Tag 03Q7]）。
:::

::: example
参考[@milneLEC]定理12.4，如果$X$是正规整概形，考虑一般点$f:\eta\to X$，则有
$(R^if_*\mathscr{F})_{\eta}=H^i_{\operatorname{ét}}(\operatorname{Spec}\mathrm{Frac}\mathscr{O}_{X,x}^{\mathrm{sh}}\times_YX,\mathscr{F})$。
:::

::: corollary {@FiniteHDV}
如果$f:X\to Y$是有限映射，
则对$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$有对于所有$i>0$有$R^if_*\mathscr{F}=0$。
:::

::: proof
这时我们有
\[
(R^if_*\mathscr{F})_{\bar{y}}=\varinjlim_{(U,\bar{u})}H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}\times_YX,\mathscr{F}).
\]
由于$f$有限，
那么$\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}\times_YX$在
$\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}$上有限。
故$\operatorname{Spec} A=\operatorname{Spec}\mathscr{O}_{Y,y}^{\mathrm{sh}}\times_YX$。
根据 @Hensel01(i)得到$A\cong A_1\times\cdots\times A_r$为Hensel局部有限
$\mathscr{O}_{Y,y}^{\mathrm{sh}}$-代数。
故而$A_i$也是严格Hensel局部环。
此时$\operatorname{Spec} A=\coprod_{i=1}^r\operatorname{Spec} A_i$，
运用 @StrictHenselCoh 得到对$i>0$有
$(R^if_*\mathscr{F})_{\bar{y}}=0$。
:::

## Leray谱序列

::: theorem [Leray谱序列] {@LeraySS}
对概形态射$f:X\to Y$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，则有谱序列
\[
E_2^{p,q}=H_{\operatorname{ét}}^p(Y,R^qf_*\mathscr{F})\Rightarrow H_{\operatorname{ét}}^{p+q}(X,\mathscr{F}).
\]
:::

::: proof
注意到$\Gamma(X,-)\circ f_*=\Gamma(Y,-)$，由于$f_*$保持内射，根据Grothendieck谱序列得到
\[
E_2^{p,q}=H_{\operatorname{ét}}^p(Y,R^qf_*\mathscr{F})\Rightarrow H_{\operatorname{ét}}^{p+q}(X,\mathscr{F})
\]
即可。
:::
