---
title: 紧支上同调
---

::: definition
设$X$是域$k$上的分离有限型概形，设$\Lambda$是环，
取$K\in D_{\operatorname{tor}}^+(X_{\operatorname{ét}},\Lambda)$或
$K\in D(X_{\operatorname{ét}},\Lambda)$其中$\Lambda$是挠环，则定义
\[
R\Gamma_c(X,K):=R\Gamma(\operatorname{Spec} k,Rf_!K),\quad H^n_{c,\operatorname{ét}}(X,K):=H^n(R\Gamma_c(X,K)),
\]
其中$f:X\to\operatorname{Spec} k$是结构映射。
:::

::: proposition
设$f:X\to Y$是分离有限型映射且$Y$拟紧拟分离，
取$K\in D_{\operatorname{tor}}^+(X_{\operatorname{ét}},\Lambda)$或
$K\in D(X_{\operatorname{ét}},\Lambda)$其中$\Lambda$是挠环。取几何点$\bar{y}\to Y$，我们有
\[
(Rf_!K)_{\bar{y}}=R\Gamma_c(X_{\bar{y}},K|_{X_{\bar{y}}}).
\]
:::

::: proof
这根据定义和 @PrpDerivedLowerShriek-I (iii)即可得到。
:::

::: theorem [紧支上同调维数] {@CohoDimforLowerShriek}
设$f:X\to S$是分离有限型映射且$S$拟紧拟分离，
取$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$是挠层，则
对$i>2\sup_{s\in S}\dim X_s$都有$R^if_!\mathscr{F}=0$。
若$S$诺特，则如果$\mathscr{F}$可构建，则$R^if_!\mathscr{F}$可构建。
特别的，若$S=\operatorname{Spec} k$是可分闭域，
则$H^i_{c,\operatorname{ét}}(X,\mathscr{F})$是有限群且当$i>2\dim X$时为零。
:::

::: proof
参考 [@Freitag88, 第一章 8.8、8.10]。
:::

我们计算一个曲线的例子如下：

::: proposition {@CompactSuppCohCurves}
设$U$是代数闭域$k$上的亏格$g$光滑连通曲线，设$n$在$k$内可逆，则
\[
H_{c,\operatorname{ét}}^q(U,\bm{\mu}_n)= \left\{
\begin{array}{cc}
0 & q=0,q>2,\\
(\mathbb{Z}/n\mathbb{Z})^{2g+\# Z-1} & q=1,\\
\mathbb{Z}/n\mathbb{Z} & q=2.
\end{array}\right.
\]
其中$Z$是紧化后多出的点。
:::

::: proof
取紧化$X$，设$Z=X\backslash U$和$i:Z\to X,j:U\to X$。由 @ExactExtensionZeroPull 得到
\[
0\to j_!j^{-1}\bm{\mu}_n\to \bm{\mu}_n\to i_*i^{-1}\bm{\mu}_n\to0.
\]
得到长正合列
\[
\cdots\to H_{c,\operatorname{ét}}^r(U,\bm{\mu}_n)\to H_{\operatorname{ét}}^r(X,\bm{\mu}_n)\to H_{\operatorname{ét}}^r(Z,i^{-1}\bm{\mu}_n)\to\cdots.
\]
当$r>0$时$H_{\operatorname{ét}}^r(Z,i^{-1}\bm{\mu}_n)=0$，
因此
$H_{c,\operatorname{ét}}^2(U,\bm{\mu}_n)\cong H_{\operatorname{ét}}^2(X,\bm{\mu}_n)\cong\mathbb{Z}/n\mathbb{Z}$。
其余不难得出。
:::

::: remark
可假设$k$可分闭域，证明类似。
:::
