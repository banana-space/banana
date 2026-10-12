---
title: 相关大定理和猜想一瞥
---

## Mordell猜想和Grothendieck截面猜想

Mordell猜想是比较著名的算术定理之一，由Faltings在上世纪八十年代证明，
他断言了数域上一般型曲线一定有有限个有理点。

::: theorem [Mordell猜想，Faltings定理]
数域$k$上亏格不小于$2$的光滑紧合曲线$X$满足有理点个数$\#X(k)<\infty$。
:::

::: conjecture [Grothendieck截面猜想]
考虑$\mathbb{Q}$的有限生成域扩张$k$上的亏格不小于$2$的光滑射影几何整曲线$X$。
考虑 @EtalePath，固定几何点$\bar{x}$，
任取有理点$a\in X(k)$会诱导
$\operatorname{Gal}(k^{\operatorname{sep}}/k)\to\pi^{\operatorname{ét}}_1(X,\bar{a})$。
取$\gamma\in\pi^{\operatorname{ét}}_1(X;\bar{x},\bar{a})$，其诱导
\[
s_a:\operatorname{Gal}(k^{\operatorname{sep}}/k)\to\pi^{\operatorname{ét}}_1(X,\bar{a})\stackrel{\gamma^{-1}\cdot(-)\cdot\gamma}{\longrightarrow}\pi^{\operatorname{ét}}_1(X,\bar{x}).
\]
这样会给出正合列
$1\to\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})\to\pi_1^{\operatorname{ét}}(X,\bar{x})\to\operatorname{Gal}(k^{\operatorname{sep}}/k)\to1$
的一个截面。
于是得知不同$\gamma$的选取会相差
$\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})$-共轭，因此得到
\[
\mathscr{S}_{X/k}:=\{\text{该正合列的截面}\}/\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})\text{-共轭}.
\]
其对应$\operatorname{Gal}(k^{\operatorname{sep}}/k)$-等变的
$\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})$-挠子群
$H^1(\operatorname{Gal}(k^{\operatorname{sep}}/k),\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x}))$。
那么这样定义的射有限Kummer同态
\[
\kappa:X(k)\to \mathscr{S}_{X/k}=H^1(\operatorname{Gal}(k^{\operatorname{sep}}/k),\pi_1^{\operatorname{ét}}(X_{k^{\operatorname{sep}}},\bar{x})),
a\mapsto s_a
\]
是双射。
:::

这个猜想（截止到现在）还没有被证明，这是Grothendieck的远Abel几何的一部分，
而远Abel几何的目的就是考虑平展基本群足够不交换的时候
（比如亏格不小于$2$），能否用平展局部群来重构这个代数簇，这也导致了这个方向很困难也很伟大。

## $p$进Hodge理论

::: theorem [Faltings]
设$K$是p进域，对任何光滑紧合$K$-概形$X$都有在$\mathrm{Rep}_{\mathbb{C}_K}(G_K)$的典范同构
\[
\mathbb{C}_K\otimes_{\mathbb{Q}_p}H^n_{\operatorname{ét}}(X_{\overline{K}},\mathbb{Q}_p)
\cong \bigoplus_q(\mathbb{C}_K(-q)\otimes_KH^{n-q}(X,\Omega_{X/K}^{q}))
\]
其中
$\mathbb{C}_K(-q)=\mathbb{C}_K\otimes_{\mathbb{Q}_p}\mathbb{Q}_p(-q),G_K=\operatorname{Gal}(\overline{K}/K)$。
:::

这里只是参观一下这个$p$进几何里非常著名的结论，这事实上是复Hodge理论里Hodge分解的类比：
若$X$是紧Kähler流形，则有$H^n(X,\mathbb{C})\cong \bigoplus_{p+q=n}H^{p}(X,\Omega_{X}^{q})$。
复的情况就是Hodge定理和调和形式分解的直接推论，而$p$进的情况显然要复杂很多。
