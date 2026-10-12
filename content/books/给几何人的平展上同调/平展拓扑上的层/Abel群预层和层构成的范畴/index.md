---
title: Abel群预层和层构成的范畴
---

固定概形$X$，可以看出$\operatorname{PreAb}(X_{\operatorname{ét}})$一定是Abel范畴，它里面的正合性、
核、余核、积、极限和余极限等皆为正常的定义方法。
我们主要考虑的是满子范畴$\operatorname{Ab}(X_{\operatorname{ét}})$，它是加性范畴，
我们将要证明它为Abel范畴（其正合性、核、余核、积、极限和余极限等和一般拓扑空间上类似，皆为
层化）。

::: proposition {@ExactEtSheaf}
给定概形$X$和范畴$\operatorname{Ab}(X_{\operatorname{ét}})$内的列
\[
0\to\mathscr{F}'\to\mathscr{F}\to\mathscr{F}''\to0,
\]
则下述命题等价：

(i)列$0\to\mathscr{F}'\to\mathscr{F}\to\mathscr{F}''\to0$在
$\operatorname{Ab}(X_{\operatorname{ét}})$内（函子性的）正合；

(ii)列$0\to\mathscr{F}'\to\mathscr{F}\to\mathscr{F}''\to0$在
$\operatorname{PreAb}(X_{\operatorname{ét}})$内正合且$\mathscr{F}\to\mathscr{F}''$满足
对任意的$U\in X_{\operatorname{ét}}$和$s\in\mathscr{F}''(U)$，
存在$\{U_i\to U\}\in\operatorname{Cov}(U)$使得$s|_{U_i}$在$\mathscr{F}(U_i)\to\mathscr{F}''(U_i)$
的像内；

(iii)对所有几何点$\bar{x}\to X$，
都有$0\to\mathscr{F}'_{\bar{x}}\to\mathscr{F}_{\bar{x}}\to\mathscr{F}''_{\bar{x}}\to0$正合。
:::

::: proof
(ii)推(i)，平凡。
(i)推(iii)由于取茎是正合函子，故也平凡。

(iii)推(ii)，先证明满射部分。任取$U\in X_{\operatorname{ét}}$和几何点$\bar{u}\to U$。
设$\bar{x}:\bar{u}\to U\to X$也为几何点。根据定义
有$\mathscr{F}_{\bar{u}}=\mathscr{F}_{\bar{x}}$，
故$\mathscr{F}_{\bar{u}}\to\mathscr{F}''_{\bar{u}}$也是满射。再由定义知道成立。对于其他部分，
注意到$s\in\mathscr{F}(U)$为零当且仅当$s_{\bar{u}}=0$即可，这也是定义。
:::

::: corollary
给定概形$X$，则范畴$\operatorname{Ab}(X_{\operatorname{ét}})$是Abel范畴。
:::
