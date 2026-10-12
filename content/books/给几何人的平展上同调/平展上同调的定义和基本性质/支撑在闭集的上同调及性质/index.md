---
title: 支撑在闭集的上同调及性质
---

首先，不难证明如下事实：对概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
取截面$s\in\Gamma(U,\mathscr{F})$，则存在开集$W\subset U$使得

(i) $W$是$U$内最大的开集使得$s|_W=0$；

(ii)对任何几何点$\bar{u}\to U$，设$\bar{s}=(U\to S)\circ\bar{u}$，则
\[
0=(U,\bar{u},s)\in\mathscr{F}_{\bar{s}}\Leftrightarrow \bar{u}\in W.
\]
读者可以自己证明，如果想当懒狗，参考[@StacksProject, Tag 04FR]。

::: definition
对概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。

(i)层$\mathscr{F}$的支集为点集$\operatorname{supp}(\mathscr{F})\ni s$使得对所有（一些）$s$上的几何点
$\bar{s}$都有$\mathscr{F}_{\bar{s}}\neq0$；

(ii)截面$s\in\Gamma(U,\mathscr{F})$，其支集$\operatorname{supp}(s)$定义为闭集$U\backslash W$。
:::

::: remark
层的支集不一定是闭的，但如果取值是环，那一定是闭的，因为这时相当于单位截面的支集。
:::

::: definition
对概形$X$，闭子概形$Z\subset X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，定义
\[
\Gamma_Z(X,\mathscr{F})=\{s\in\mathscr{F}(X):\operatorname{supp}(s)\subset Z\}.
\]
定义支撑在$Z$的平展上同调为
\[
H^i_{Z,\operatorname{ét}}(X,\mathscr{F}):=R^i\Gamma_{Z}(X,\mathscr{F}).
\]
:::

::: remark {@UpperShriekCI}
对闭子概形$i:Z\subset X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
定义$i^!\mathscr{F}:=\ker(\mathscr{F}\to i_*i^{-1}\mathscr{F})$。
则$\Gamma(Z,i^!\mathscr{F})=\ker(\mathscr{F}(X)\to\mathscr{F}(U))$。
不难证明$(i_*,i^!)$是伴随函子，故$i^!$左伴随，而且由于$i_*$正合，故$i^!$保持内射性质。
因此$\Gamma(Z,i^!(-))$左正合且诱导
$R^i\Gamma(Z,i^!(-))=R^i\Gamma_{Z}(X,-)=H^i_{Z,\operatorname{ét}}(X,-)$。
考虑层$R^ri^!\mathscr{F}$（有时写作$\underline{H}_Z^r(X,\mathscr{F})$），因为$i^!$保持内射，
我们有谱序列
\[
E_2^{p,q}:=H^p(Z,R^qi^!\mathscr{F})\Rightarrow H^{p+q}_Z(X,\mathscr{F}).
\]
:::

::: proposition {@SupportExact}
对概形$X$，闭子概形$Z\subset X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
设$U=X\backslash Z$，则有好三角：
\[
R\Gamma_Z(X,\mathscr{F})\to R\Gamma(X,\mathscr{F})\to R\Gamma(U,\mathscr{F})\to R\Gamma_Z(X,\mathscr{F})[1]
\]
进而诱导出正合列：
\[
\cdots\to H^i_{Z,\operatorname{ét}}(X,\mathscr{F})\to H^i_{\operatorname{ét}}(X,\mathscr{F})\to H^i_{\operatorname{ét}}(U,\mathscr{F})\to H^i_{Z,\operatorname{ét}}(X,\mathscr{F})\to\cdots.
\]
:::

::: proof
任取内射对象$\mathscr{I}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
我们断言$\mathscr{I}(X)\to\mathscr{I}(U)$是满的。
设$j:U\to X$，注意到对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$
都有
\[
\operatorname{Hom}(j_!\underline{\mathbb{Z}}_U,\mathscr{F})=\operatorname{Hom}(\underline{\mathbb{Z}}_U,\mathscr{F}|_U)=\Gamma(U,\mathscr{F}),
\]
因为$\mathscr{I}$是内射的，
故只需证明$j_!\underline{\mathbb{Z}}_U\to\underline{\mathbb{Z}}_X$是单射。根据层化函子是正合的，
只需证明对平展映射$V\to X$，典范映射
\[
\bigoplus_{V\to U}\underline{\mathbb{Z}}(U)\to\bigoplus_{V\to X}\underline{\mathbb{Z}}(U)
\]
是单射，而这是显然的，故断言成立。

不难发现上述满射的核为$\Gamma_Z(X,\mathscr{I})$，因此立即得到好三角
\[
R\Gamma_Z(X,\mathscr{F})\to R\Gamma(X,\mathscr{F})\to R\Gamma(U,\mathscr{F})\to R\Gamma_Z(X,\mathscr{F})[1].
\]
而长正合列因此是显然的。
:::

类似于代数拓扑，我们有：

::: theorem [切除] {@Excision}
设$f:X'\to X$平展和闭子概形$Z'\subset X'$使得

(i)设$Z:=f(Z')$是闭集且$f|_{Z'}:Z'\cong Z$同构；

(ii)有$f(X'\backslash Z')\subset X\backslash Z$。

则对任意的$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$都有对任意$i$的同构
\[
H^i_{Z,\operatorname{ét}}(X,\mathscr{F})\cong H^i_{Z',\operatorname{ét}}(X',f^{-1}\mathscr{F}).
\]
:::

::: proof
设$U'=X'\backslash Z',U=X\backslash Z$，考虑
\[
\begin{tikzcd}
  {U'} & {X'} & {Z'} \\
  U & X & Z
  \arrow["\cong", from=1-3, to=2-3]
  \arrow["{j'}", from=1-1, to=1-2]
  \arrow["{i'}"', from=1-3, to=1-2]
  \arrow["j", from=2-1, to=2-2]
  \arrow["i"', from=2-3, to=2-2]
  \arrow[from=1-1, to=2-1]
  \arrow["f", from=1-2, to=2-2]
\end{tikzcd}
\]
得到
\[
\begin{tikzcd}
  0 & {\Gamma_Z(X,\mathscr{F})} & {\Gamma(X,\mathscr{F})} & {\Gamma(U,\mathscr{F})} \\
  0 & {\Gamma_{Z'}(X',f^{-1}\mathscr{F})} & {\Gamma(X',f^{-1}\mathscr{F})} & {\Gamma(U',f^{-1}\mathscr{F})}
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=1-3]
  \arrow[from=1-3, to=1-4]
  \arrow[from=2-3, to=2-4]
  \arrow[from=2-2, to=2-3]
  \arrow[from=2-1, to=2-2]
  \arrow[from=1-3, to=2-3]
  \arrow[from=1-4, to=2-4]
  \arrow[dashed, from=1-2, to=2-2]
\end{tikzcd}
\]
其中虚线为诱导出来的映射。由于$f^{-1}$正合且和内射对象交换，则只需证明诱导的
\[
g:\Gamma_Z(X,\mathscr{F})\to\Gamma_{Z'}(X',f^{-1}\mathscr{F})
\]
是同构。注意到若$s\in\ker g$，则$s$在$\Gamma(X',\mathscr{F})$和$\Gamma(U,\mathscr{F})$是$0$。
而$\{X',U\}$是
平展覆盖，则$s=0$，故是单射。
另一方面，取$s'\in\Gamma_{Z'}(X',f^{-1}\mathscr{F})\subset\Gamma(X',f^{-1}\mathscr{F})$。
注意到$s',0$在$U'$是$0$；另外$s'$限制
$X'\times_XX'\rightrightarrows X'$都是相等的，因此可以粘合成$s\in\Gamma(X,\mathscr{F})$，故满射。
:::

::: corollary {@SupportPoint}
对概形$X$和闭点$x\in X$，任取$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，则有
\[
H^i_{x,\operatorname{ét}}(X,\mathscr{F})\cong H^i_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{X,x}^{\mathrm{sh}},\mathscr{F}).
\]
:::

::: proof
用 @Excision 和 @ColimSheaf 即可。
:::
