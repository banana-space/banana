---
title: 点的上同调
---

和代数拓扑里不同，一个点的平展上同调也是很复杂的。

::: lemma
设$x=\operatorname{Spec} k$，固定几何点$\bar{x}=\operatorname{Spec}\Omega$。
取$\mathscr{F}\in\operatorname{Sh}(x_{\operatorname{ét}})$，则
\[
\Gamma(x,\mathscr{F})\cong(\mathscr{F}_{\bar{x}})^{\operatorname{Gal}(k^{\operatorname{sep}}/k)}.
\]
:::

::: proof
根据 @FetAndFLoc 和 @SheavesOnPoints，我们用Yoneda引理有
\[
\Gamma(x,\mathscr{F})=\operatorname{Hom}_{\operatorname{Sh}(x_{\operatorname{ét}})}(h_x,\mathscr{F})=\operatorname{Hom}_{\operatorname{Gal}(k^{\operatorname{sep}}/k)-\text{\tiny{集}}}(\{*\},\mathscr{F}_{\bar{x}})
=(\mathscr{F}_{\bar{x}})^{\operatorname{Gal}(k^{\operatorname{sep}}/k)}
\]
得到结论。
:::

::: theorem {@PointsCoh}
设$x=\operatorname{Spec} k,\bar{x}=\operatorname{Spec} k^{\operatorname{sep}}$和
$\mathscr{F}\in\operatorname{Ab}(x_{\operatorname{ét}})$，则对任意$i\geq 0$，
\[
H^i_{\operatorname{ét}}(x,\mathscr{F})\cong H^i(\operatorname{Gal}(k^{\operatorname{sep}}/k),\mathscr{F}_{\bar{x}}).
\]
:::

::: proof
根据引理，
我们得知
$\Gamma(x,\mathscr{F})=\Gamma_{\operatorname{Gal}(k^{\operatorname{sep}}/k)}(\mathscr{F}_{\bar{x}}):=(\mathscr{F}_{\bar{x}})^{\operatorname{Gal}(k^{\operatorname{sep}}/k)}$，
故我们有
\[
H^i_{\operatorname{ét}}(x,\mathscr{F})=R^i\Gamma(x,\mathscr{F})=R^i\Gamma_{\operatorname{Gal}(k^{\operatorname{sep}}/k)}(\mathscr{F}_{\bar{x}})
=H^i(\operatorname{Gal}(k^{\operatorname{sep}}/k),\mathscr{F}_{\bar{x}})
\]
即可得到结论。
:::

注意到当$x=\bar{x}$且当$i>0$时，就有$H^i_{\operatorname{ét}}(x,\mathscr{F})=0$，这和几何上是一样的。
