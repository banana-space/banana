---
title: 拟凝聚层
---

类似于Zariski拓扑下的拟凝聚层，我们对于一般的景上面
都可以类似定义：

::: definition
考虑景$X_{\operatorname{ét}}$上的$\mathscr{O}_{X,\operatorname{ét}}$-模$\mathscr{F}$
称之为拟凝聚的如果任取$U\in X_{\operatorname{ét}}$，存在$\{U_i\to U\}\in\operatorname{Cov}(U)$
使得
\[
\mathscr{F}|_{X_{\operatorname{ét}}/U_i}
\cong\mathrm{coker}\left(\bigoplus_{k\in K}\mathscr{O}_{X,\operatorname{ét}/U_i}\to\bigoplus_{l\in L}\mathscr{O}_{X,\operatorname{ét}/U_i}\right).
\]
其中$X_{\operatorname{ét}}/U_i$是局部景，其中的对象皆为$V\to U_i$，覆盖皆为$U_i$-映射。
:::

::: remark
这个在所有景上面都可以定义。
:::

作为下降理论的应用，我们有如下令人震惊的结论：

::: theorem {@QcohEtZar}
如下拟凝聚层范畴是范畴等价：
\[
\mathrm{Qcoh}(X_{\operatorname{Zar}})\to\mathrm{Qcoh}(X_{\operatorname{ét}}),\mathscr{F}\mapsto\mathscr{F}^{\operatorname{ét}}.
\]
:::

::: proof
这个是下降理论的直接应用，需要用到纤维范畴$\mathrm{QCOH}$然后可以证明其为有效的fpqc下降，但这个
的证明非常复杂（参考[@FGAexplained]定理4.23）。我们推荐感兴趣的读者阅读[@Olsson16]命题4.3.15。
:::

::: remark
作为推广我们可以考虑一些特殊的景，也满足类似结论。见[@StacksProject, Tag 03OJ]。
:::

因此我们在之后还将会看到，考虑拟凝聚层的平展上同调和Zariski上同调没有什么
区别！
