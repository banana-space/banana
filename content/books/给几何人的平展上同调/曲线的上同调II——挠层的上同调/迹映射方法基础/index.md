---
title: 迹映射方法基础
---

考虑$\operatorname{Ab}((-)_{\operatorname{ét}})$内的函子。
对于平展映射$f:Y\to X$，有伴随对$(f_!,f^{-1})$和$(f^{-1},f_*)$。
因此得到映射$\mathrm{id}\to f_*f^{-1}$和$f_!f^{-1}\to\mathrm{id}$。

::: definition
根据 @001(iii)，当$f$有限平展时$f_*=f_!$，因此有映射$f_*f^{-1}\to\mathrm{id}$，称之为迹映射。
:::

::: proposition
设$f:Y\to X$有限平展，则迹映射被如下性质所决定：

(a)和$X$上的平展局部化交换；

(b)若$Y=\coprod_{i=1}^dX$，
则迹映射是求和映射$f_*f^{-1}\mathscr{F}=\mathscr{F}^{\oplus d}\to\mathscr{F}$。
:::

::: proof
根据 @EtaleLocMap，用(a)考虑平展局部上自然是(b)中的情况。
:::

::: proposition [迹映射方法] {@Methode-de-la-trace}
设$f:Y\to X$处处满足$\deg f=d$，
则不难看出$\mathscr{F}\to f_*f^{-1}\mathscr{F}\to\mathscr{F}$是乘$d$映射。
如果$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$满足乘$d$映射是同构，则有单射
\[
H^n_{\operatorname{ét}}(X,\mathscr{F})\hookrightarrow H_{\operatorname{ét}}^n(Y,f^{-1}\mathscr{F}).
\]
特别地，如果$H_{\operatorname{ét}}^n(Y,f^{-1}\mathscr{F})=0$，
则$H^n_{\operatorname{ét}}(X,\mathscr{F})=0$。
:::

::: proof
注意到因为$f$有限，
则$H_{\operatorname{ét}}^n(Y,f^{-1}\mathscr{F})=H_{\operatorname{ét}}^n(X,f_*f^{-1}\mathscr{F})$。
乘$d$映射诱导
\[
H^n_{\operatorname{ét}}(X,\mathscr{F})\to H_{\operatorname{ét}}^n(Y,f^{-1}\mathscr{F})\to H^n_{\operatorname{ét}}(X,\mathscr{F})
\]
是同构，于是成立。
:::
