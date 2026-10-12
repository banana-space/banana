---
title: 严格Hensel局部环的上同调
---

我们时常会使用严格Hensel局部环的谱的上同调消失的结论如下：

::: theorem {@StrictHenselCoh}
设$R$是严格Hensel局部环，设$X=\operatorname{Spec} R$和闭点$\bar{x}$。
则对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$都有
$\Gamma(X,\mathscr{F})=\mathscr{F}_{\bar{x}}$。
特别的，函子$\Gamma(X,-)$正合，
故对任何$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$和$i>0$
都有$H^i_{\operatorname{ét}}(X,\mathscr{F})=0$。
:::

::: proof
设平展邻域$(U,\bar{u})$，取$\bar{u}$的仿射邻域$\operatorname{Spec} A$，
故$R\to A$平展且$\kappa(\bar{x})=\kappa(\bar{u})$。
由 @Hensel01(ii)得知作为$R$-代数有$A\cong R\times A'$且和$\kappa(\bar{x})=\kappa(\bar{u})$契合。
故我们有截面$X\to\operatorname{Spec} A$。
因此平展邻域$(X,\bar{x})$是共尾的，故$\Gamma(X,\mathscr{F})=\mathscr{F}_{\bar{x}}$。
其他结论就平凡了。
:::
