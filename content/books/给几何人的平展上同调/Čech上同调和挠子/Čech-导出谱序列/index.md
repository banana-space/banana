---
title: Čech-导出谱序列
---

类似于Zariski上同调，平展上同调也有类似的Čech-导出的比较结论。

::: lemma {@002}
考虑概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。
考虑预层$\underline{H}^i(\mathscr{F}):U\mapsto H^i_{\operatorname{ét}}(U,\mathscr{F}|_U)$。
考虑遗忘函子
$i:\operatorname{Ab}(X_{\operatorname{ét}})\to\operatorname{PreAb}(X_{\operatorname{ét}})$，
我们有$\underline{H}^r(-)=R^ri(-)$。特别的$\underline{H}^i(\mathscr{F})^{\sharp}=0$。
:::

::: proof
考虑
$\operatorname{Ab}(X_{\operatorname{ét}})\stackrel{i}{\longrightarrow }\operatorname{PreAb}(X_{\operatorname{ét}})\stackrel{\sharp}{\longrightarrow }\operatorname{Ab}(X_{\operatorname{ét}})$，
则取内射预解$\mathscr{F}\hookrightarrow \mathscr{I}^*$我们有
$\underline{H}^r(\mathscr{F})=H^r(i(\mathscr{I}^*))$。因此$\underline{H}^r(-)=R^ri(-)$。
:::

::: corollary {@003}
考虑概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。
对$r>0$，任取$s\in H^r_{\operatorname{ét}}(X,\mathscr{F})$都存在平展覆盖
$\{U_i\to X\}$使得$s$在每个$H^r_{\operatorname{ét}}(U_i,\mathscr{F}|_{U_i})$内均为$0$。
:::

::: proof
这是 @002 的直接推论。
:::

::: theorem {@Cech-Derived}
考虑概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。
考虑预层$\underline{H}^i(\mathscr{F}):U\mapsto H^i_{\operatorname{ét}}(U,\mathscr{F}|_U)$，
则有谱序列
\[
E_2^{p,q}=\check{H}^p_{\operatorname{ét}}(X,\underline{H}^q(\mathscr{F}))\Rightarrow H^{p+q}_{\operatorname{ét}}(X,\mathscr{F}).
\]
:::

::: proof
对$\operatorname{Ab}(X_{\operatorname{ét}})\stackrel{i}{\longrightarrow }\operatorname{PreAb}(X_{\operatorname{ét}})
\stackrel{\check{H}^0_{\operatorname{ét}}(X,-)}{\longrightarrow }\mathrm{AbGrps}$，
因为$\check{H}^0_{\operatorname{ét}}(X,-)\circ i=\Gamma(X,-)$，引用上述引理和Grothendieck谱序列，
我们得到结论。
:::

作为应用，我们有如下比较结果：

::: proposition {@004}
考虑概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。
对于$r=0,1$，
我们有
$\check{H}^r_{\operatorname{ét}}(X,\mathscr{F})\cong H^{r}_{\operatorname{ét}}(X,\mathscr{F})$。
:::

::: proof
考虑谱序列
$E_2^{p,q}=\check{H}^p_{\operatorname{ét}}(X,\underline{H}^q(\mathscr{F}))\Rightarrow H^{p+q}_{\operatorname{ét}}(X,\mathscr{F})$。
根据 @003，我们得知对$q>0$有$E_2^{0,q}=0$。观察谱序列第二页：
\[
\begin{tikzcd}
  0 & 0 & 0 & \bullet & \bullet \\
  0 & 0 & 0 & \bullet & \bullet \\
  0 & 0 & {E_2^{0,0}} & {E_2^{1,0}} & \bullet
  \arrow[from=2-2, to=3-4]
  \arrow[from=2-1, to=3-3]
  \arrow[from=2-3, to=3-5]
  \arrow[from=1-3, to=2-5]
  \arrow[from=1-2, to=2-4]
  \arrow[from=1-1, to=2-3]
\end{tikzcd}
\]
即可得知对于$r=0,1$，
有$\check{H}^r_{\operatorname{ét}}(X,\mathscr{F})\cong H^{r}_{\operatorname{ét}}(X,\mathscr{F})$。
:::

::: remark
如果$X$拟紧且对任何有限子集都包含在某个仿射开集内，
则对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$和任何$r$，
我们都有
$\check{H}^r_{\operatorname{ét}}(X,\mathscr{F})\cong H^{r}_{\operatorname{ét}}(X,\mathscr{F})$。
参考[@Mil80, III.2.17]。
:::
