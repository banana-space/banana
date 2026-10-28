---
title: 其他等价及Néron-Severi群
---

<problems>
- 定理的证明中先取的 $Y_1,\dots,Y_n$ 与之后使用的 $\alpha_1,\dots,\alpha_m$ 似乎应是同一组元素。
- 粉碎幂零等价的定义中，条件 $\prod^nX\sim_{\mathrm{rat}}0$ 似乎应是对 $Z$ 的 $n$ 次外积而言，而不是对 $X$。
</problems>

::: definition
设$X$是$d$维射影簇，定义映射
\[
\operatorname{CH}^r(X)\times\operatorname{CH}^{d-r}(X)\to\operatorname{CH}^d(X)\stackrel{\deg}{\longrightarrow}\mathbb{Z}.
\]
我们称$Z\in\operatorname{CH}^r(X)$数值平凡，
即$Z\sim_{\mathrm{num}}0$如果对任何余维数是$d-r$的代数链$Y$都有$Z\cdot Y=0$。
记$Z_{\mathrm{num}}^r(X)\subset C^r(X)$是数值平凡的子群，
定义$N^r(X):=\operatorname{CH}^r(X)/Z_{\mathrm{num}}^r(X)$，当$r=1$时称为Néron-Severi群。
:::

::: theorem
对射影簇$X$，群$N^i(X)$有限生成。事实上设$B^i(X):=N^i(X)\otimes\mathbb{Q}$，则
\[
\dim_{\mathbb{Q}}B^i(X)\leq b_{2i}:=\dim H^{2i}_{\operatorname{ét}}(X,\mathbb{Q}_{\ell})<\infty.
\]
:::

::: proof
由 @ell-adic-fg 知可以取$Y_1,...,Y_n\in\operatorname{CH}^{d-i}(X)$使得其在
$H^{2d-2i}_{\operatorname{ét}}(X,\mathbb{Q}_{\ell}(d-i))$
的像成为$\mathbb{Q}_{\ell}$-线性空间$\mathrm{cl}_X(\operatorname{CH}^{d-i}(X))$的一组基。
显然$n\leq b_{2d-2i}=b_{2i}$。
考虑线性映射
\[
\lambda:\operatorname{CH}^i(X)\to\mathbb{Z}^m,\beta\mapsto \left(\int_X\beta\cdot\alpha_1,...,\int_X\beta\cdot\alpha_m\right).
\]
我们断言$\ker\lambda=Z_{\mathrm{num}}^i(X)$。显然$Z_{\mathrm{num}}^i(X)\subset\ker\lambda$是平凡的。
反之，
设$\alpha\in\operatorname{CH}^{d-i}(X)$和$\mathrm{cl}_X(\alpha)=\sum \nu_j\mathrm{cl}_X(\alpha_j)$，
其中$\nu_j\in\mathbb{Q}_{\ell}$。
则有
\[
\begin{aligned}
  \int_X\beta\cdot\alpha&=\operatorname{tr}(\mathrm{cl}_X(\alpha)\cup\mathrm{cl}_X(\beta))\\
  &=\sum_j\nu_j\operatorname{tr}(\mathrm{cl}_X(\alpha_j)\cup\mathrm{cl}_X(\beta))\\
  &=\sum_j\nu_j\int_X\beta\cdot\alpha_j.
\end{aligned}
\]
因此若$\beta\in\ker\lambda$，则得到$\beta$必然数值等价为零，因此断言成立。
根据断言得到单射$B^i(X)\hookrightarrow \mathbb{Q}^m$。于是得到结论。
:::

::: definition
(i)记$Z^i_{\mathrm{rat}}(X)\subset C^i(X)$为有理等价于$0$的子群；

(ii)我们称$Z\in C^i(X)$代数等价，即$Z\sim_{\mathrm{alg}}0$，
如果存在光滑不可约曲线$C$和$W\in C^i(C\times X)$
和$a,b\in C$使得$W(a)=0,W(b)=Z$。记$Z^i_{\mathrm{alg}}(X)$为代数等价于$0$的子群，记
$\operatorname{CH}^i_{\mathrm{alg}}(X):=Z^i_{\mathrm{alg}}/Z^i_{\mathrm{rat}}(X)$；

(iii)我们称$Z\in C^i(X)$粉碎幂零（smash-nilpotent）等价为零，即$Z\sim_{\otimes}0$，
如果存在正整数$n$使得
$\prod^nX\sim_{\mathrm{rat}}0$。记$Z^i_{\otimes}(X)$为粉碎幂零等价于$0$的子群。
:::

::: proposition
(i)我们有$Z_{\otimes}^i(X)\subset Z_{\mathrm{hom}}^i(X)$且
\[
Z^i_{\mathrm{rat}}(X)\subset Z^i_{\mathrm{alg}}(X)\subset Z_{\mathrm{hom}}^i(X)\subset Z_{\mathrm{num}}^i(X);
\]

(ii)（Voevodsky-Voisin）张量$\mathbb{Q}$之后有
\[
Z^i_{\mathrm{rat}}(X)_{\mathbb{Q}}\subset Z^i_{\mathrm{alg}}(X)_{\mathbb{Q}}\subset Z_{\otimes}^i(X)_{\mathbb{Q}}
\subset Z_{\mathrm{hom}}^i(X)_{\mathbb{Q}}\subset Z_{\mathrm{num}}^i(X)_{\mathbb{Q}}.
\]
:::

::: proof
(i)不甚困难，参考[@Fulton98]命题19.1.1和[@PureMotives13]引理1.2.18；

(ii)比较复杂，完整证明参考[@PureMotives13]附录B。
:::
