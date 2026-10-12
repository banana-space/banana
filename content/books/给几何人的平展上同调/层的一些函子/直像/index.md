---
title: 直像
---

跟Zariski下类似，我们在此留下定义还有几个例子。

::: definition
考虑概形映射$f:X\to Y$，设$\mathscr{P}\in\operatorname{PreSh}(X_{\operatorname{ét}})$，定义直像为
\[
f_*\mathscr{P}(U\to Y)=\mathscr{P}(U\times_YX\to X).
\]
:::

::: proposition
概形映射$f:X\to Y$，设$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$。

(i)必然有$f_*\mathscr{F}\in\operatorname{Sh}(Y_{\operatorname{ét}})$；

(ii)对于$g:Y\to Z$，我们有$(g\circ f)_*=g_*\circ f_*$；

(iii)若视作函子
$f_*:\operatorname{Ab}(X_{\operatorname{ét}})\to\operatorname{Ab}(Y_{\operatorname{ét}})$，
则左正合。
:::

::: proof
此乃定义，略去。
:::

::: proposition
考虑概形映射$f:X\to Y$和几何点$\bar{y}=\operatorname{Spec} k\to Y$，
设$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$。

(i)若$f$是闭浸入，则
\[
(f_*\mathscr{F})_{\bar{y}} = \left\{
\begin{matrix}
\{*\} &  \text{当} &  \bar{y} \not\in X \\
\mathscr{F}_{\bar{y}} &  \text{当} &  \bar{y} \in X
\end{matrix}
\right.
\]
其中$\{*\}$指单点集；

(ii)若$f$是开浸入，若$\bar{y}\in X$，则$(f_*\mathscr{F})_{\bar{y}}=\mathscr{F}_{\bar{y}}$；

(iii)如果$f$是有限态射，则
\[
(f_*\mathscr{F})_{\bar{y}}=\prod_{\bar{x}:\operatorname{Spec} k\to X,f(\bar{x})=\bar{y}}\mathscr{F}_{\bar{x}}.
\]
若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，则
$(f_*\mathscr{F})_{\bar{y}}=\bigoplus_{\bar{x}:\operatorname{Spec} k\to X,f(\bar{x})=\bar{y}}\mathscr{F}_{\bar{x}}$。
:::

::: proof
(ii)是平凡的；(iii)颇为麻烦，需要用到严格Hensel环的性质，我们略去，参考[@StacksProject, Tag 03QP]。

(i)当$\bar{y} \not\in X$，这是显然的。下面考虑$\bar{y} \in X$的情况。考虑两个事实：

**事实1。** 对任意两个平展态射$U,U'\to Y$，设$h:U_X\to U'_X$是$X$-态射，则存在$a:W\to U,b:W\to U'$
使得$a_X:W_X\to U_X$是同构且$h=b_X\circ(a_X)^{-1}$。

【事实1的证明】：设$M=U\times_YU'$和图像$\Gamma_h\subset M_X$。
注意到$\Gamma_h$是平展映射$\mathrm{pr}_{1,X}:M_X\to U_X$一个截面的
像，故是开的。则存在开子概形$W\subset M$使得$W\cap M_X=\Gamma_h$。
故取$a=\mathrm{pr}_{1}|_W,b=\mathrm{pr}_{2}|_W$即可。

**事实2。** 对平展态射$V\to X$，
存在一族平展态射$U_i\to Y$和态射$U_{i,X}\to V$使得$\{U_{i,X}\to V\}$是$V$的
Zariski覆盖。

【事实2的证明】：不妨设$Y,V$皆为仿射的，则化为以下简单的交换代数：假设环$R$和理想$I\subset R$，
设$R/I\to S'$平展，则
存在平展同态$R\to S$使得$S'\cong S/IS$是$R/I$-代数同构。
这是因为平展同态总可以写成$S'=(R/I)[x_1,...,x_n]/(\bar{f}_1,...,\bar{f}_n)$
其中$\overline{\Delta}=\det\left(\frac{\partial \bar{f}_i}{\partial x_j}\right)$在$S'$里可逆。
只需要提升成某些$f_1,...,f_n$
且设
\[
S=R[x_1,...,x_n,x_{n+1}]/(f_1,...,f_n,x_{n+1}\Delta-1),
\]
其中$\Delta=\det\left(\frac{\partial f_i}{\partial x_j}\right)$即可。

【回到原结论】。注意到$(f_*\mathscr{F})_{\bar{y}}=\varinjlim_{(U,\bar{u})}\mathscr{F}(U_X)$且
$\mathscr{F}_{\bar{y}}=\varinjlim_{(V,\bar{v})}\mathscr{F}(V)$，
故$\{(U,\bar{u})\}$在$\{(V,\bar{v})\}$内共尾，则得证。
:::
