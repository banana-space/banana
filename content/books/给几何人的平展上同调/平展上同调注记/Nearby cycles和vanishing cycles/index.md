---
title: Nearby cycles和vanishing cycles
notices:
  - name: 问题
    items:
      - 定义与命题的交换图中，$X_{\bar{t}}\to X$ 的箭头似乎应标为 $\bar{j}$（与正文中的 $\bar{j}^{-1}K$ 一致）。
---

::: definition
设$S$是严格Hensel局部DVR（例如$\mathbb{C}[[t]],\mathbb{Z}_p$）。取闭点$s\to S$和几何一般点$t\to S$。
设$f:X\to S$是有限型态射，则考虑
\[
\begin{tikzcd}
  {X_{\bar{t}}} & X & {X_s} \\
  {\bar{t}} & S & s
  \arrow["i"', hook', from=2-3, to=2-2]
  \arrow["i"', hook', from=1-3, to=1-2]
  \arrow["{f_s}", from=1-3, to=2-3]
  \arrow["f", from=1-2, to=2-2]
  \arrow["{\bar{j}}", from=2-1, to=2-2]
  \arrow["i", from=1-1, to=1-2]
  \arrow["{f_{\bar{t}}}", from=1-1, to=2-1]
\end{tikzcd}
\]
任取$K\in D(X)$，考虑典范映射$\mathrm{can}:i^{-1}K\to i^{-1}R\bar{j}_*\bar{j}^{-1}K$。

(i)定义nearby cycle函子$\psi_f:D(X)\to D(X_s)$为$K\mapsto i^{-1}R\bar{j}_*\bar{j}^{-1}K$；

(ii)定义vanishing cycle函子$\phi_f:D(X)\to D(X_s)$为$K\mapsto \mathrm{cone}(\mathrm{can})$。
:::

::: proposition {@NearbyVanishingPrp}
设$S$是严格Hensel局部DVR（例如$\mathbb{C}[[t]],\mathbb{Z}_p$）。取闭点$s\to S$和几何一般点$t\to S$。
设$f:X\to S$是有限型态射，则考虑
\[
\begin{tikzcd}
  {X_{\bar{t}}} & X & {X_s} \\
  {\bar{t}} & S & s
  \arrow["i"', hook', from=2-3, to=2-2]
  \arrow["i"', hook', from=1-3, to=1-2]
  \arrow["{f_s}", from=1-3, to=2-3]
  \arrow["f", from=1-2, to=2-2]
  \arrow["{\bar{j}}", from=2-1, to=2-2]
  \arrow["i", from=1-1, to=1-2]
  \arrow["{f_{\bar{t}}}", from=1-1, to=2-1]
\end{tikzcd}
\]
任取$K\in D(X)$，考虑典范映射$\mathrm{can}:i^{-1}K\to i^{-1}R\bar{j}_*\bar{j}^{-1}K$。

(i)有好三角$i^{-1}K\to\psi_f(K)\to\phi_f(K)\to i^{-1}K[1]$；

(ii)我们有
$(\psi_fK)_{\bar{x}}=R\Gamma(\operatorname{Spec}\mathscr{O}_{\bar{x}}^{\mathrm{sh}}\times_s\bar{t},K)$；

(iii)若$f$紧合且$\phi_fK=0$，则余特化函子是同构；

(iv)若$f$光滑且$K\in D^b_{\operatorname{cons}}(X_{\operatorname{ét}},A)$且$\# A$在$S$内可逆，
则$\phi_fK=0$。
:::

::: proof
(i)平凡，(ii)根据 @HigherDirectStalk-II 得到。
(iii)根据紧合基变换我们有
\[
\begin{tikzcd}
  {R\Gamma(X_s,i^{-1}K)} & {R\Gamma(X_s,\psi_fK)} \\
  & {R\Gamma(X_{\bar{t}},\bar{j}^{-1}K)}
  \arrow[shift left=1, no head, from=1-2, to=2-2]
  \arrow[shift right=1, no head, from=1-2, to=2-2]
  \arrow[from=1-1, to=1-2]
  \arrow["{\mathrm{cosp}}"', from=1-1, to=2-2]
\end{tikzcd}
\]
再根据(i)即可得到结论。关于(iv)，可以约化到$K=\underline{A}$的情况。
根据光滑基变换得到
\[
f^{-1}R\bar{j}_*\underline{A}\cong R\bar{j}_*f_{\bar{t}}^{-1}\underline{A}\cong R\bar{j}_*\underline{A}.
\]
由$i^{-1}R\bar{j}_*\underline{A}\cong\underline{A}$，我们得到
\[
\begin{tikzcd}
  & {i^{-1}f^{-1}R\bar{j}_*\underline{A}} \\
  {f_s^{-1}i^{-1}R\bar{j}_*\underline{A}} & {\psi_f(\underline{A})} & {i^{-1}R\bar{j}_*\underline{A}} \\
  {f_s^{-1}\underline{A}} && {\underline{A}}
  \arrow[no head, from=2-3, to=3-3]
  \arrow[shift left=1, no head, from=2-3, to=3-3]
  \arrow[no head, from=2-1, to=1-2]
  \arrow[shift left=1, no head, from=2-1, to=1-2]
  \arrow["\cong", from=1-2, to=2-3]
  \arrow["\cong", from=2-1, to=3-1]
  \arrow[no head, from=1-2, to=2-2]
  \arrow[shift right=1, no head, from=1-2, to=2-2]
  \arrow["\cong", from=3-1, to=2-2]
  \arrow[no head, from=3-1, to=3-3]
  \arrow[shift right=1, no head, from=3-1, to=3-3]
  \arrow["{\mathrm{cosp}}"{description}, from=3-3, to=2-2]
\end{tikzcd}
\]
故得到结论。
:::
