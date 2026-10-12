---
title: 局部系和可构建层
notices:
  - name: 问题
    items:
      - 命题 (i) 中似乎应为 $L\in\operatorname{Loc}_A(Z)$，(ii) 中似乎应为 $K|_{X_i}\in D_{\operatorname{Loc}}^b(X_i,A)$，(viii) 中似乎应为 $f_*\underline{A}\in\operatorname{Loc}_A(Y)$。
---

不同于之前，在此我们将采用如下定义：

::: definition
设$A$是有限环，而$X$是概形。

(a)定义局部系为$\operatorname{Loc}_A(X)$由满足存在平展覆盖$X'\to X$使得
$\mathscr{E}_{X'}\cong\underline{A}^{\oplus n}$的
平展$A$-模$\mathscr{E}$构成，即此为平展向量丛。定义秩$n$的子范畴为$\operatorname{Loc}^n_A(X)$；

(b)可构建层$\operatorname{cons}_A(X)$也将假设成局部闭集上是在新的$\operatorname{Loc}_A(X_i)$内；

(c)定义$D^b_{\operatorname{cons}}(X,A)$和$D^b_{\operatorname{Loc}}(X,A)$
为二者的有界平展层复形的导出范畴。
:::

::: remark
(i)不难得到$\operatorname{Loc}^n_A(X)\to\{\operatorname{GL}_n(A)\text{-torsor}\}$为
\[
\mathscr{E}\mapsto\mathrm{Frame}(\mathscr{E}):=\underline{\mathrm{Isom}}_A(\underline{A}^{\oplus n},\mathscr{E})
\]
是范畴等价；

(ii)取$\mathscr{F}\in\operatorname{cons}_A(X)$，
则$\mathscr{F}\in\operatorname{Loc}_A(X)$当且仅当对任何几何点特化$x'\leadsto x$会诱导
$\mathscr{F}_{x'}\cong\mathscr{F}_x$。
:::

我们有如下常用的结论，其中些许已经证明过了：

::: proposition
设$X$是概形且$A$是有限环。

(i) $D^b_{\operatorname{cons}}(X,A)$是$D(X_{\operatorname{ét}},A)$内最小的三角子范畴使得其包含$k_!L$
其中$k:Z\to X$局部闭且$L\in\operatorname{Loc}_A(X)$；

(ii) $D^b_{\operatorname{cons}}(X,A):=\left\{K\in D(X_{\operatorname{ét}},A) \left|
		\begin{aligned}
		&\text{存在局部闭分解}X=\coprod_iX_i\text{使得}\\
		&K|_{X_i}\in D_{\operatorname{Loc}}^b(X,A)
		\end{aligned}\right.
		\right\};$

(iii)（Folklore）$D^b_{\operatorname{cons}}(X,A)$是$D(X_{\operatorname{ét}},A)$
内所有紧对象组成的子范畴；

(iv)（Folklore）$D(X_{\operatorname{ét}},A)$是紧生成的；

(v)（Gabber）设$f:X\to Y$是诺特拟优等概形间的有限型映射，
则$f$有有限上同调维数且若$\#(A)$在$Y$内可逆，则$Rf_*$保持$D^b_{\operatorname{cons}}$；

(vi)（Deligne一般基变换）设$f:X\to Y$是诺特概形间的有限型映射使得$\#(A)$在$Y$内可逆。
固定$K\in D^b_{\operatorname{cons}}(X,A)$，
存在稠密开集$U\subset Y$使得对所有满足$g(Y')\subset U$的纤维积
\[
\begin{tikzcd}
  {X'} & X \\
  {Y'} & Y
  \arrow["g", from=2-1, to=2-2]
  \arrow["f", from=1-2, to=2-2]
  \arrow["{f'}", from=1-1, to=2-1]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
都有$g^{-1}Rf_*K\cong Rf'_*(g')^{-1}K$；

(vii)若$f:X\to Y$有限，则$Rf_*$保持可构建层；

(viii)若$f:X\to Y$有限平展且$Y$连通，则$f_*\underline{A}\in\operatorname{Loc}_A(X)$；

(ix)设$X$是诺特拟优等概形，设$K,L\in D^b_{\operatorname{cons}}(X,A)$，
则$R\mathscr{H}om(K,L)\in D^b_{\operatorname{cons}}(X,A)$。
:::

::: proof
(i)-(viii)证明忽略。注意(iii)和(iv)可以参考[@ProEtale13]而(viii)即为光滑基变换罢了。
我们来简证(ix)。首先我们可以约化到$K=j_!\underline{A}$，其中$j:U\to X$平展。
其次注意到（Verdier对偶的特例）：
任取另一个平展映射$k:V\to X$，考虑
\[
\begin{tikzcd}
  {U\times_XV} & V \\
  U & X
  \arrow["j", from=2-1, to=2-2]
  \arrow["k", from=1-2, to=2-2]
  \arrow["h", from=1-1, to=1-2]
  \arrow["i", from=1-1, to=2-1]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
根据 @ExtensionZeroBase-Ch (i) 我们有
\[
\begin{aligned}
  &R\Gamma(V,R\mathscr{H}om(j_!\underline{A},L))=R\operatorname{Hom}(k^{-1}j_!\underline{A},k^{-1}L)\\
  &\cong R\operatorname{Hom}(h_!i^{-1}\underline{A},k^{-1}L)=R\operatorname{Hom}(h_!\underline{A},k^{-1}L)\\
  &\cong R\Gamma(U\times_XV,h^{-1}k^{-1}L)\cong R\Gamma(U\times_XV,j^{-1}L)\\
  &\cong R\Gamma(V,Rj_*j^{-1}L),
\end{aligned}
\]
则$R\mathscr{H}om(j_!\underline{A},L)\cong Rj_*j^{-1}L$，根据(v)得到结论。
:::

::: example
对于椭圆曲线的$2$-分歧覆盖$f:E\to\mathbb{P}^1$根据Riemann-Hurwitz不难得到其在四个点分歧。
则$f_*\underline{A}$在非分歧点处是二阶局部系，在分歧点处是一阶局部系。
:::
