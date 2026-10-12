---
title: 半纯性和链映射
---

假设$H^*_{\operatorname{ét}}(X,\Lambda):=\bigoplus_rH_{\operatorname{ét}}^{2r}(X,\Lambda(r))$，
考虑杯积（@-CupProductDef）不难得到
\[
H^r_{\operatorname{ét}}(X,\Lambda(\lambda))\otimes H^s_{\operatorname{ét}}(X,\Lambda(\mu))
\stackrel{-\cup-}{\longrightarrow}H^{r+s}_{\operatorname{ét}}(X,\Lambda(\lambda+\mu)).
\]
因此得到反交换的分次环$H^*_{\operatorname{ét}}(X,\Lambda)$。
我们的最终目的是要定义同态
$\mathrm{cl}_X:\operatorname{CH}^*(X)\to H^*_{\operatorname{ét}}(X,\Lambda)$。

首先考虑光滑余$r$维子簇$Z\in C^r(X)$，考虑Gysin映射
\[
i_*:\Lambda=H_{\operatorname{ét}}^0(Z,\Lambda)\to H^{2r}_{\operatorname{ét}}(X,\Lambda(r)),
\]
定义$\mathrm{cl}_X(Z):=i_*(1_Z)\in H^{2r}_{\operatorname{ét}}(X,\Lambda(r))$。
现在我们要考虑不见得光滑的情况。为此需要如下结论：

::: lemma [半纯性]
设$Z$是$X$的任意余维数$r$的闭子簇，则对任何$i<2r$都有
\[
H_{Z,\operatorname{ét}}^i(X,\Lambda)=0.
\]
:::

::: proof
若$Z$光滑，若$i<2r$则根据上同调纯性（@-CohoPurity-II）得到
\[
H_{Z,\operatorname{ét}}^i(X,\Lambda)=H_{\operatorname{ét}}^{i-2r}(Z,\Lambda(-r))=0.
\]
对一般的$Z$，我们对$Z$维数做归纳。当$\dim Z=0$，则因为光滑则成立。
考虑$Z$是余维数$r$的，取$Y:=Z_{\operatorname{sing}}$，则$\dim Y<\dim Z$。
根据 @SupportExact 的类似结论不难得到正合列
\[
\cdots\to H^i_{Y,\operatorname{ét}}(X,\Lambda)\to H^i_{Z,\operatorname{ét}}(X,\Lambda)\to H^i_{Z\backslash Y,\operatorname{ét}}(X\backslash Y,\Lambda)\to\cdots.
\]
运用归纳法和$Z\backslash Y$光滑性即可得到结论。
:::

通过这个结论和证明内的正合列，
我们得到同构
$H^{2r}_{Z,\operatorname{ét}}(X,\Lambda)\cong H^{2r}_{Z\backslash Y,\operatorname{ét}}(X\backslash Y,\Lambda)$。
因此构造$\mathrm{cl}_X(Z)$为$1_Z$在复合
\[
\begin{aligned}
  \Lambda&\cong H^0_{\operatorname{ét}}(Z\backslash Y,\Lambda)\cong H^{2r}_{Z\backslash Y,\operatorname{ét}}(X\backslash Y,\Lambda(r))\\
  &\cong H^{2r}_{Z,\operatorname{ét}}(X,\Lambda(r))\to H^{2r}_{\operatorname{ét}}(X,\Lambda(r))
\end{aligned}
\]
下的像。因此得到
\[
\mathrm{cl}_X^r:C^r(X)\to H^{2r}_{\operatorname{ét}}(X,\Lambda).
\]
其中$r=1$情况即为Kummer列诱导的情况。

::: remark
根据基本类的构造，不难得知Gysin映射即为基本类诱导的同构的复合
\[
\Lambda\stackrel{s_{Z\backslash Y/X\backslash Y}}{\longrightarrow } H^{2r}_{Z\backslash Y,\operatorname{ét}}(X\backslash Y,\Lambda(r))
\cong H^{2r}_{Z,\operatorname{ét}}(X,\Lambda(r))\to H^{2r}_{\operatorname{ét}}(X,\Lambda(r)).
\]
因此可以定义$\mathrm{cl}_X^r(Z)$为$s_{Z\backslash Y/X\backslash Y}$在上述映射的像。
:::

::: proposition
(i)设$f:Y\to X$是光滑簇之间的映射，对于代数链$Z\in C^r(X)$，若任何$Z$的素链的逆像是整概形，
则$\mathrm{cl}_Y(f^*Z)=f^{-1}\mathrm{cl}_X(Z)$；

(ii)若$i:Z\to X$是光滑簇之间的闭浸入，
考虑Gysin映射
$i_*:H^{2s}_{\operatorname{ét}}(Z,\Lambda(s))\to H^{2s+2r}_{\operatorname{ét}}(X,\Lambda(s+r))$，
则对$W\in C^s(Z)$有$i_*\mathrm{cl}_Z(W)=\mathrm{cl}_X(W)$；

(iii)对任何$W\in C^*(X),Z\in C^*(Y)$，设投影为$p,q$，则有
\[
\mathrm{cl}_{X\times Y}(W\times Z)=p^{-1}\mathrm{cl}_X(W)\cup q^{-1}\mathrm{cl}_Y(Z);
\]

(iv)对任何$W,Z\in C^*(X)$满足其中素链两两横截相交，则
\[
\mathrm{cl}_X(W\cdot Z)=\mathrm{cl}_X(W)\cup\mathrm{cl}_X(Z).
\]
:::

::: proof
不难证明，参考[@Mil80]命题9.2 – 9.5。
:::
