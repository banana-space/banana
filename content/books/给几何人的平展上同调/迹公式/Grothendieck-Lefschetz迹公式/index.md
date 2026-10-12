---
title: Grothendieck-Lefschetz迹公式
---

::: theorem [Grothendieck-Lefschetz迹公式]
设$\Lambda$是有限环且$X$是有限域$k$上的代数簇，设$K\in D_{\mathrm{perf}}(X,\Lambda)$，
且$\Lambda$基数
在$k$可逆，则
\[
\operatorname{Tr}(\pi_X^*|_{R\Gamma_c(X_{\bar{k}},K|_{X_{\bar{k}}})})=\sum_{x\in X(k)}\operatorname{Tr}(\pi_x|_{K_{\bar{x}}})\in\Lambda^{\natural}.
\]
:::

::: proof
最终是要化归到曲线的情况。我们只给出思路，不给证明：

(1)设$X=Y\sqcup U$其中$Y$是闭集而$U$是其补集，证明对$U,Y$对，则对$X$也对；

(2)设$f:X\to S$是映射且对$S$和$f$的纤维都对，则对$X$也对。
:::

因此只需要证明如下曲线的情况：

::: theorem
设$\Lambda$是有限环且$X$是有限域$k$上的分离有限型维数$\leq1$的概形，
设$K\in D_{\mathrm{cons}}(X,\Lambda)$，且$\Lambda$基数
在$k$可逆，则
\[
\operatorname{Tr}(\pi_X^*|_{R\Gamma_c(X_{\bar{k}},K|_{X_{\bar{k}}})})=\sum_{x\in X(k)}\operatorname{Tr}(\pi_x|_{K_{\bar{x}}})\in\Lambda^{\natural}.
\]
:::

::: proof
设$T'(X,K):=\sum_{x\in X(k)}\operatorname{Tr}(\pi_x|_{K_{\bar{x}}})\in\Lambda^{\natural}$且
$T''(X,K):=\operatorname{Tr}(\pi_X^*|_{R\Gamma_c(X_{\bar{k}},K|_{X_{\bar{k}}})})$。

$\bullet$**步骤1。** 设$j:U\hookrightarrow X$开浸入且$i:Y=X\backslash U\hookrightarrow X$是闭浸入，
则$T''(X,K)=T''(U,j^{-1}K)+T''(Y,i^{-1}K)$且$T'(X,K)=T'(U,j^{-1}K)+T'(Y,i^{-1}K)$。

这个对$T'$是平凡的。
对$T''$考虑正合列$0\to j_!j^{-1}K\to K\to i_*i^{-1}K\to0$给出$K$的一个滤过，
于是得到$K'\in DF(X,\Lambda)$。
其$\operatorname{gr}^iK'$为$j_!j^{-1}K,i_*i^{-1}K\in D_{\mathrm{cons}}(X,\Lambda)$，
根据滤过导出范畴不难得知
$R\Gamma_c(X_{\bar{k}},K)\in DF_{\mathrm{perf}}(\Lambda)$，
根据 @TraceFiltered 和$T''$定义即可得到结论。

$\bullet$**步骤2。** 证明当$\dim X=0$时候定理成立。

注意到此时
\[
R\Gamma_c(X_{\bar k},K) = R\Gamma (X_{\bar k}, K) = \Gamma (X_{\bar k}, K) = \bigoplus_{\bar x\in X_{\bar k}} K_{\bar x}.
\]
注意到$\pi_X:X_{\bar k}\to X_{\bar k}$的不动点为卧在有理点上的点，故
\[
\operatorname{Tr}(\pi_X^*|_{R\Gamma_c(X_{\bar{k}},K|_{X_{\bar{k}}})})=\sum_{x\in X(k)}\operatorname{Tr}(\pi_x|_{K_{\bar{x}}}),
\]
因此成立。

$\bullet$**步骤3。** 化归到只需要证明$T'(U,\mathscr{F})=T''(U,\mathscr{F})$，
其中$U$是$k$上光滑不可约仿射曲线且$U(k)=\emptyset$，
且$\mathscr{F}$是$U$上的有限局部常值$\Lambda$-模且茎为有限投射$\Lambda$-模，
并且$\Lambda$被可逆素数$\ell$的某幂次零化。

由步骤1、2，我们可以考虑去掉任意的有限个闭点的情况。因此我们去掉所有的有理点和所有曲线的奇点。
而$\Lambda$是根据其准素分解而来。

现在考虑
\[
\begin{tikzcd}
  V & Y \\
  U & X
  \arrow["f"', from=1-1, to=2-1]
  \arrow["{\bar{f}}", from=1-2, to=2-2]
  \arrow[hook, from=2-1, to=2-2]
  \arrow[hook, from=1-1, to=1-2]
\end{tikzcd}
\]
其中$f:V\to U$有限平展Galois覆叠，且水平的映射为射影完备化。
考虑$G:=\operatorname{Gal}(V/U)$，假设$f^{-1}\mathscr{F}=\underline{M}$，
其中$M=\Gamma(V,f^{-1}\mathscr{F})$为$\Lambda[G]$-模，且在$\Lambda$上有限投射。

$\bullet$**步骤4。** 对于自然的$G$作用在$f_*f^{-1}\mathscr{F}$且迹映射
$f_*f^{-1}\mathscr{F}\to\mathscr{F}$诱导同构
\[
(f_*f^{-1}\mathscr{F})\otimes_{\Lambda[G]}\Lambda=(f_*f^{-1}\mathscr{F})_G\cong\mathscr{F}.
\]

$\bullet$**步骤5。** 对$n\gg0$，设$A=\mathbb{Z}/\ell^n\mathbb{Z}$，
有$f_*f^{-1}\mathscr{F}\cong (f_*\underline{A})\otimes_{\underline{A}}\underline{M}$
和对角$G$-作用。

$\bullet$**步骤6。** 有典范同构
$((f_*\underline{A})\otimes_{\underline{A}}\underline{M})\otimes_{\Lambda[G]}\Lambda\cong\mathscr{F}$。

$\bullet$**步骤7。** 有和$\pi_U^*$作用契合的典范同构
\[
R\Gamma_c(U_{\bar{k}},\mathscr{F})=(R\Gamma_c(U_{\bar{k}},f_*\underline{A})\otimes_A^{\mathbb{L}}M)\otimes_{\Lambda[G]}^{\mathbb{L}}\Lambda.
\]

$\bullet$**步骤8。** 只需证明
$\operatorname{Tr}_A^{Z_g}((g,\pi_U^*)|_{R\Gamma_c(U_{\bar{k}},f_*\underline{A})})\in A$
映射到$\Lambda$是$0$其中$g\in G$。

$\bullet$**步骤9。** 只需证明在$A$内我们有
$\operatorname{Tr}_A((g^{-1}\pi_V)^*|_{R\Gamma_c(V_{\bar{k}},A)})=0$。

步骤4–6是直接的，而步骤7–9需要一些古怪的代数结论，我们略去，
更多细节参考[@StacksProject, Tag 03U4, 03UF]，或者Conrad讨论班笔记
[L20](http://virtualmath1.stanford.edu/~conrad/Weil2seminar/Notes/L20.pdf)。

$\bullet$**步骤10。** 证明在$A$内我们有
$\operatorname{Tr}_A((g^{-1}\pi_V)^*|_{R\Gamma_c(V_{\bar{k}},A)})=0$。

根据加性我们有
\[
\begin{aligned}
&\operatorname{Tr}_A((g^{-1}\pi_V)^*|_{R\Gamma_c(V_{\bar{k}},A)})+\operatorname{Tr}_A((g^{-1}\pi_Y)^*|_{R\Gamma_c((Y\backslash V)_{\bar{k}},A)})\\
&=\operatorname{Tr}_A((g^{-1}\pi_Y)^*|_{R\Gamma_c(Y_{\bar{k}},A)}).
\end{aligned}
\]
后者根据Weil不动点定理（@-WeilFixedPts）知为$g^{-1}\pi_Y$在$Y_{\bar{k}}$的不动点；
而根据步骤2得知$\operatorname{Tr}_A((g^{-1}\pi_Y)^*|_{R\Gamma_c((Y\backslash V)_{\bar{k}},A)})$是
$g^{-1}\pi_Y$在$(Y\backslash V)_{\bar{k}}$
的不动点。因此我们要求的
\[
\operatorname{Tr}_A((g^{-1}\pi_V)^*|_{R\Gamma_c(V_{\bar{k}},A)})
\]
即为$g^{-1}\pi_Y$在$V_{\bar{k}}$
的不动点。这根据$U$无有理点即可得到是$0$。
:::
