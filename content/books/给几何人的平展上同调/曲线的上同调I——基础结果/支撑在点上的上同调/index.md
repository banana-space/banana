---
title: 支撑在点上的上同调
---

<problems>
- 证明中 $H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m)=0$（$i>0$）引用的是射影曲线上 $\mathbb{G}_m$ 的上同调定理，所需的似乎是严格Hensel局部环的上同调消没。
</problems>

::: proposition
设$U$是代数闭域$k$上的光滑曲线且$n\in k^*$。取闭点$x\in U$，则
\[
H_{x,\operatorname{ét}}^q(U,\bm{\mu}_{n,U})= \left\{
\begin{array}{cc}
\mathbb{Z}/n\mathbb{Z} & q=2,\\
0  & q\neq 2.
\end{array}\right.
\]
:::

::: proof
由 @SupportPoint 得知
$H^i_{x,\operatorname{ét}}(U,\mathscr{F})\cong H^i_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathscr{F})$。
根据 @GmCurveCoh 得到当$i>0$时
\[
H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m)=0.
\]
再根据 @SupportExact 得到正合列
\[
\begin{tikzcd}[row sep=small, column sep=small]
\cdots \arrow[r]&H^i_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m) \arrow[r]\arrow[d, phantom, ""{coordinate, name=Z}] & H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m) \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}] \\
H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}}\backslash\{x\},\mathbb{G}_m) \arrow[r] &H^{i+1}_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m) \arrow[r] & \cdots.
\end{tikzcd}
\]
得到对$i\neq 1$有
\[
H^{i-1}_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}}\backslash\{x\},\mathbb{G}_m)\cong H^i_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m).
\]
由于$\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}}\backslash\{x\}=\operatorname{Spec} K$，
根据 @006 我们有当$i\geq1$时
\[
H^i_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}}\backslash\{x\},\mathbb{G}_m)=0.
\]
故
\[
H^1_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m)
=\frac{H^0_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}}\backslash\{x\},\mathbb{G}_m)}{H^0_{\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m)}\cong\mathbb{Z},
\]
且当$i\neq 1$时候有
$H^i_{x,\operatorname{ét}}(\operatorname{Spec}\mathscr{O}_{U,x}^{\mathrm{sh}},\mathbb{G}_m)=0$。
再根据Kummer正合列即可得到结论。
:::
