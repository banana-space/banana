---
title: 定义
---

定义和其他通常的层上同调区别不大，所以我们长话短说。

::: lemma {@EtInj}
对概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
存在内射对象$\mathscr{I}\in\operatorname{Ab}(X_{\operatorname{ét}})$使得有单射
$\mathscr{F}\hookrightarrow\mathscr{I}$。
:::

::: proof
任取$x\in X$和在其上的几何点$i_x:\bar{x}\to X$，
取内射Abel群满足$\mathscr{F}_{\bar{x}}\hookrightarrow I(x)$。
则$\mathscr{I}(x):=i_{x,*}I(x)$是内射的，故取$\mathscr{I}=\prod_{x\in X}\mathscr{I}(x)$即可得到
$\mathscr{F}\hookrightarrow\prod_{x\in X}\mathscr{F}_{\bar{x}}\hookrightarrow\mathscr{I}$。
:::

::: definition
对概形$X$和$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
不难得知截面函子$\Gamma(X_{\operatorname{ét}},-)$左正合。由 @EtInj 知
有内射预解$\mathscr{F}\hookrightarrow\mathscr{I}^*$，则定义$X$上$\mathscr{F}$的平展上同调为
\[
H^i_{\operatorname{ét}}(X,\mathscr{F}):=R^i\Gamma(X_{\operatorname{ét}},\mathscr{F})=H^i\Gamma(X_{\operatorname{ét}},\mathscr{I}^*).
\]
:::

和我们之前定义的上同调理论类似，我们也有如下基本结果：

::: proposition
(i)满足$H^0_{\operatorname{ét}}(X,\mathscr{F})=\Gamma(X,\mathscr{F})$；

(ii)若$\mathscr{I}$内射，则当$i>0$时$H^i_{\operatorname{ét}}(X,\mathscr{I})=0$；

(iii)短正合列$0\to\mathscr{F}'\to\mathscr{F}\to\mathscr{F}''\to0$会诱导长正合列
\[
0\to H^0_{\operatorname{ét}}(X,\mathscr{F}')\to H^0_{\operatorname{ét}}(X,\mathscr{F})\to H^0_{\operatorname{ét}}(X,\mathscr{F}'')\to H^1_{\operatorname{ét}}(X,\mathscr{F}')\to\cdots.
\]
:::

::: remark
(a)若$g:U\to X$平展，则$g^{-1}\circ\Gamma(U,-)=\Gamma(U,-)$，
故$H^i_{\operatorname{ét}}(U,\mathscr{F}|_U)=H^i_{\operatorname{ét}}(U,\mathscr{F})$；

(b)对于$f:X\to Y$，因为有$\mathscr{F}\to f_*f^{-1}\mathscr{F}$，
则诱导$R\Gamma(Y,\mathscr{F})\to R\Gamma(X,f^{-1}\mathscr{F})$，
故可以诱导映射
$H^i_{\operatorname{ét}}(Y,\mathscr{F})\to H^i_{\operatorname{ét}}(X,f^{-1}\mathscr{F})$。
:::
