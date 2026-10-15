---
title: 对偶性质
---

## Kuratowski–Ulam定理与Fubini定理

这两个定理在讨论有限积空间的性质。

::: theorem [Kuratowski–Ulam]
指定两个$C_2$拓扑空间$X,Y$和集合$A\in\mathrm{BP}(X\times Y)$。

1. $\forall^* x(\{y\in Y|(x,y)\in A\}\in\mathrm{BP}(Y))$

2. $\forall^* (x,y)((x,y)\in A)\leftrightarrow \forall^* x\forall^* y((x,y)\in A)$

这里$\forall^* x(P(x))$是$\{x|\neg P(x)\}\in\mathrm{MGR}$的简写。
:::

::: theorem [Fubini]
指定两个$\sigma$有限测度空间$(X,\mu),(Y,\nu)$和集合$A\in\mathrm{MEAS}_{\mu\times\nu}(X\times Y)$。

1. $\forall^*_{\mu} x(\{y\in Y|(x,y)\in A\}\in\mathrm{MEAS}_{\nu}(Y))$

2. $\forall^*_{\mu\times\nu}(x,y)((x,y)\in A)\leftrightarrow \forall^*_\mu x\forall^*_\nu y((x,y)\in A)$

这里$\forall^*_{\mu} x(P(x))$是$\{x|\neg P(x)\}\in\mathrm{NULL}_{\mu}$的简写。
:::

## 01律

这两个定理讨论可列积空间的性质。

::: definition [尾集]
若$A\subseteq\prod_{n}X_n$满足$x\in A\wedge y=_f x\rightarrow y\in A$，则称$A$是尾集。
这里$y=_f x$指的是$x$与$y$除了有限项之外处处相等。
:::

::: theorem [第二拓扑01律]
给定一列$C_2$拓扑空间$X_n$，记$X=\prod_{n}X_n$，若尾集$A\in\mathrm{BP}(X)$，则$A$第一纲或余第一纲。
:::

::: theorem [Kolmogorov的01律]
给定一列概率测度空间$X_n$，记$X=\prod_{n}X_n$，若尾集$A\in\mathrm{MEAS}(X)$，则$A$零测或余零测。
:::

## 纲代数与Lebesgue测度代数

这两个定理讨论某两个完备$\sigma$代数的唯一决定性。

::: theorem
完备Polish空间的纲代数在同胚意义下唯一。
:::

::: theorem
带有连续概率测度的标准Borel空间的测度代数（称作Lebesgue测度代数）在同构意义下唯一。
:::

## Sierpiński–Erdős对偶定理

::: theorem [Sierpiński–Erdős]
$\mathrm{ZFC+CH}$指出存在对合双射$f:\mathbb{R}\to\mathbb{R}$，
$E\in\mathrm{BP}(\mathbb{R})\leftrightarrow f(E)\in\mathrm{MEAS}_{\mathrm{m}}(\mathbb{R})$。
:::

::: remark*
虽然这个定理有着极高的美学价值，
但$\mathrm{CH}$的争议性和事实上无需它也能证明这些互相等价的命题使得这个定理并未受到太多关注。
:::

我们马上来看一个试图随意交换可测与Baire却使得命题改变真假的反例，正如我们一贯的混沌趣味。

::: theorem [正确]
给定一族$\mathbb{R}$的Lebesgue可测集$\{E_{i,j}|i,j\in\omega\}$，若

1. $\forall i\forall j(E_{i,j}\supseteq E_{i,j+1})$

2. $\forall i(\bigcap_{j\in\omega}E_{i,j}\in\mathrm{NULL}_{\mathrm{m}})$

则存在一列$n_k:\omega\to\omega$使得
$\bigcap_{k\in\omega}\bigcup_{i\in\omega}E_{i,n_k(i)}\in\mathrm{NULL}_{\mathrm{m}}$。
:::

::: theorem [错误]
给定一族$\mathbb{R}$的具有Baire性质的集$\{E_{i,j}|i,j\in\omega\}$，若

1. $\forall i\forall j(E_{i,j}\supseteq E_{i,j+1})$

2. $\forall i(\bigcap_{j\in\omega}E_{i,j}\in\mathrm{MGR}_{\mathrm{m}})$

则存在一列$n_k:\omega\to\omega$使得
$\bigcap_{k\in\omega}\bigcup_{i\in\omega}E_{i,n_k(i)}\in\mathrm{MGR}$。
:::
