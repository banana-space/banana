---
title: '$\mathbf{\mu}_{n,X}$的上同调'
---

::: lemma {@007}
若概形$X$在基概形$\operatorname{Spec} A$上，其中$A$是严格Hensel局部环且$n\in A^*$，
则$\bm{\mu}_{n,X}\cong\underline{\mathbb{Z}/n\mathbb{Z}}_X$。
:::

::: proof
因为$\bm{\mu}_{n,X}=\underline{\operatorname{Spec}}_X\mathscr{O}_X[t]/(t^n-1)$，由于严格Hensel，
多项式$t^n-1$会分裂。
故得到平凡的平展覆盖$\bm{\mu}_{n,X}\to X$，
则$\bm{\mu}_{n,X}\cong\underline{\mathbb{Z}/n\mathbb{Z}}_X$（参考[@Ful15]命题7.2.2）。
:::

下面我们可以正式计算我们想要的，读者会发现
这个结果和可定向亏格$g$闭曲面的奇异上同调基本相同！

::: theorem {@ProjSMCurve-mun}
设$X$是代数闭域$k$上的亏格$g$光滑射影曲线，且$n\in k^*$，则
\[
H_{\operatorname{ét}}^q(X,\bm{\mu}_{n,X})= \left\{
\begin{array}{cc}
\bm{\mu}_n(k) & q=0,\\
\operatorname{Pic}^0(X)[n] & q=1,\\
\mathbb{Z}/n\mathbb{Z}  & q=2,\\
0&q\geq 3.
\end{array}\right.
\]
根据 @007 我们有$
H_{\operatorname{ét}}^q\left(X,\underline{\mathbb{Z}/n\mathbb{Z}}_X\right)= \left\{
\begin{array}{cc}
\mathbb{Z}/n\mathbb{Z} & q=0,\\
(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g} & q=1,\\
\mathbb{Z}/n\mathbb{Z}  & q=2,\\
0&q\geq 3.
\end{array}\right.$
:::

::: proof
根据Kummer正合列（@-KummerSeq）和 @GmCurveCoh 引出长正合列为：
\[
\begin{tikzcd}[row sep=small, column sep=small]
0 \arrow[r]&\boldsymbol{\mu}_n(k) \arrow[r] & k^* \arrow[r, "(-)^n"]\arrow[d, phantom, ""{coordinate, name=Z}] & k^* \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}] \\
&H^{1}_{\operatorname{ét}}(X,\boldsymbol{\mu}_{n,X}) \arrow[r] & \mathrm{Pic}(X) \arrow[r, "(-)^n"]\arrow[d, phantom, ""{coordinate, name=Z}] & \mathrm{Pic}(X) \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}]\\
&H^{2}_{\operatorname{ét}}(X,\boldsymbol{\mu}_{n,X}) \arrow[r] & 0 \arrow[r] &\cdots.
\end{tikzcd}
\]
故而当$q\geq3$时$H^{q}_{\operatorname{ét}}(X,\bm{\mu}_{n,X})=0$。只需考虑$q=1,2$。
由于代数闭，映射$(-)^n:k^*\to k^*$是满射，因此对于$(-)^n:\mathrm{Pic}(X)\to\mathrm{Pic}(X)$，
$H^{1}_{\operatorname{ét}}(X,\bm{\mu}_{n,X})=\ker(-)^n$且
$H^{2}_{\operatorname{ét}}(X,\bm{\mu}_{n,X})=\mathrm{coker}(-)^n$。
考虑交换图
\[
\begin{tikzcd}
  0 & {\operatorname{Pic}^0(X)} & {\operatorname{Pic}(X)} & {\mathbb{Z}} & 0 \\
  0 & {\operatorname{Pic}^0(X)} & {\operatorname{Pic}(X)} & {\mathbb{Z}} & 0
  \arrow[from=2-1, to=2-2]
  \arrow[from=2-2, to=2-3]
  \arrow[from=2-3, to=2-4]
  \arrow[from=2-4, to=2-5]
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=1-3]
  \arrow[from=1-3, to=1-4]
  \arrow[from=1-4, to=1-5]
  \arrow["{[n]}", from=1-2, to=2-2]
  \arrow["{(-)^n}", from=1-3, to=2-3]
  \arrow["{\times n}", from=1-4, to=2-4]
\end{tikzcd}
\]
根据Abel簇的知识我们知道$[n]$是满射且
$\ker[n]=\operatorname{Pic}^0(X)[n]\cong(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g}$。
运用蛇引理即可得到结论。
:::

::: theorem
设$X$是代数闭域$k$上的仿射光滑曲线且$n\in k^*$。
取光滑紧化$X\subset X'$，设$g$为$X'$亏格，设$r=\#(X'\backslash X)$，则
\[
H_{\operatorname{ét}}^q(X,\bm{\mu}_{n,X})= \left\{
\begin{array}{cc}
\bm{\mu}_n(k) & q=0,\\
(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g+r-1} & q=1,\\
0  & q\geq 2.
\end{array}\right.
\]
:::

::: proof
设$X=X'\backslash\{x_1,...,x_r\}$，
则$\operatorname{Pic}(X)=\operatorname{Pic}(X')/R$其中$R$被$\mathscr{O}_{X'}(x_i)$生成。
由于$R$非空，则
$\operatorname{Pic}^0(X')\to\operatorname{Pic}(X)$是满射，故$\operatorname{Pic}(X)$可除，
因此不难得知$H_{\operatorname{ét}}^0(X,\bm{\mu}_{n,X})=\bm{\mu}_n(k)$
且当$q\geq2$有$H_{\operatorname{ét}}^q(X,\bm{\mu}_{n,X})=0$。
只需证明$H_{\operatorname{ét}}^1(X,\bm{\mu}_{n,X})=(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g+r-1}$。

注意到我们有
\[
\begin{aligned}
&H_{\operatorname{ét}}^1(X,\bm{\mu}_{n,X})=\{(\mathscr{L},\alpha):\mathscr{L}\in\operatorname{Pic}(X),\alpha:\mathscr{L}^{\otimes n}\cong\mathscr{O}_X\}/\cong \\
&=\frac{\{(\mathscr{L}',D,\alpha'):\mathscr{L}'\in\operatorname{Pic}^0(X),\operatorname{supp}(D)\subset\{x_1,...,x_r\},\alpha':(\mathscr{L}')^{\otimes n}\cong\mathscr{O}_{X'}(D)\}}
{\{(\mathscr{O}_{X'}(D),nD,1^{\otimes n}):\deg D=0,\operatorname{supp}(D)\subset\{x_1,...,x_r\}\}}.
\end{aligned}
\]
则有
\[
\begin{tikzcd}
  0 & {H_{\operatorname{ét}}^1(X',\boldsymbol{\mu}_{n,{X'}})} & {H_{\operatorname{ét}}^1(X,\boldsymbol{\mu}_{n,X})} & {(\mathbb{Z}/n\mathbb{Z})^{\oplus r}} & {\mathbb{Z}/n\mathbb{Z}} & 0
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=1-3]
  \arrow["f", from=1-3, to=1-4]
  \arrow["\sum", from=1-4, to=1-5]
  \arrow[from=1-5, to=1-6]
\end{tikzcd}
\]
其中$f$为$(\mathscr{L}',D=\sum a_i[x_i],\alpha')\mapsto (a_i)_{i=1}^r$。
运用 @ProjSMCurve-mun 计算秩即可。
:::
