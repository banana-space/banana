---
title: 挠层
---

::: definition
设$X$是概形，设$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
如果任何$\mathscr{F}(U)$是挠群，则称其为挠层。
:::

::: proposition {@020}
若$f:X\to Y$拟紧拟分离，则若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$是挠层，
则$R^nf_*\mathscr{F}$也是挠层。
:::

::: proof
注意到
\[
R^nf_*\mathscr{F}=\left(U\mapsto H^n_{\operatorname{ét}}(U\times_YX,\mathscr{F})\right)^{\sharp}.
\]
可以取仿射$V$使得$X\times_YV$是拟紧拟分离的（因为$f$是如此）。
因此只需要证明若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$是挠层且$X$拟紧拟分离，
则$H^n_{\operatorname{ét}}(X,\mathscr{F})$是挠群。
设$\mathscr{F}=\bigcup_d\mathscr{F}[d]$其中$\mathscr{F}[d]$是$d$-挠元的部分，根据 @ColimSheaf 我们有
\[
H^n_{\operatorname{ét}}(X,\mathscr{F})=\varinjlim_d H^n_{\operatorname{ét}}(X,\mathscr{F}[d]).
\]
而$H^n_{\operatorname{ét}}(X,\mathscr{F}[d])$也是$d$-挠群，故成立。
:::

::: proposition {@Torsion-Construct}
若$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$是挠层，
则$\mathscr{F}$是可构建层的滤余极限。
:::

::: proof
设$\mathscr{F}=\bigcup_d\mathscr{F}[d]$其中$\mathscr{F}[d]$是$d$-挠元的部分，
视$\mathscr{F}[d]$为$\mathbb{Z}/d\mathbb{Z}$-模。
根据 @ConstructSheafColimit1 即可得到结论。
:::

::: remark {@021}
若$X$诺特，任取$E$在特殊化下稳定，如果挠层$\mathscr{F}$在$E$上支撑，
那么其可以写为在$E$上支撑的可构建层的滤余极限。
这是因为 @ConstructSheafPrp 知道每个$\mathscr{F}_i\to\mathscr{F}$的像$\mathscr{F}_i'$均为可构建，
则$\mathscr{F}=\varinjlim\mathscr{F}_i'$。
其支集可构建且在$E$内，则闭包也是如此。
:::
