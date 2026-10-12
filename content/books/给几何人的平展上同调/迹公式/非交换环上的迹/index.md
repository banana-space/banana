---
title: 非交换环上的迹
---

我们在此阐述如何定义非交换环上的模的自同态的迹。固定基数和$p$互素的有限环$\Lambda$，
则定义$\Lambda^{\natural}=\Lambda/(ab-ba,...)$。此时$\Lambda^{\natural}$不见得是环。

::: example
设$G$是有限群，考虑环$(\mathbb{Z}/\ell^n\mathbb{Z})[G]$，有
\[
(\mathbb{Z}/\ell^n\mathbb{Z})[G]^{\natural}=\bigoplus_{G\text{\tiny 的共轭类}}\mathbb{Z}/\ell^n\mathbb{Z}.
\]
:::

::: definition
(i)对自由模$\Lambda^{\oplus m}$，
定义$\operatorname{Tr}:\mathrm{End}_{\Lambda}(\Lambda^{\oplus m})\to\Lambda^{\natural}$
为矩阵对角线之和；

(ii)对有限投射$\Lambda$-模$P$和其自同态$\phi$，考虑$P$是自由模的直和项，也就是说有
\[
P\stackrel{a}{\longrightarrow}\Lambda^{\oplus n}\stackrel{b}{\longrightarrow}P
\]
满足$b\circ a=\mathrm{id}_P$且$\Lambda^{\oplus n}=\mathrm{Im}(a)\oplus\ker(b)$。
定义$\operatorname{Tr}(\phi)=\operatorname{Tr}(a\phi b)$。
:::
