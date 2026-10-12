---
title: 射影曲线的Lefschetz数
---

::: definition
设$\Lambda$是有限环且$X$是有限域$k$上的射影曲线，设$K\in D_{\mathrm{cons}}(X,\Lambda)$。

(a)设$c_K:\pi_X^{-1}K\to K$，
则$c_K|_{X_{\bar{k}}}$会诱导完美复形$R\Gamma(X_{\bar{k}},K|_{X_{\bar{k}}})$上的作用
$\pi_X^*$，
定义整体Lefschetz数为
$\operatorname{Tr}(\pi_X^*|_{R\Gamma(X_{\bar{k}},K|_{X_{\bar{k}}})})\in\Lambda^{\natural}$；

(b)对任何几何点$\bar{x}$，有完美复形$K_{\bar{x}}$。
考虑在$K_{\bar{x}}$上的作用$\pi_X$，我们定义局部Lefschetz数为
$\sum_{x\in X(k)}\operatorname{Tr}(\pi_x|_{K_{\bar{x}}})\in\Lambda^{\natural}$。
:::

::: theorem [Weil不动点定理] {@WeilFixedPts}
设$C$是代数闭域$k$上的光滑射影曲线，设$\phi:C\to C$为不是恒等映射的$k$-自同态。
设$J(C):=\underline{\operatorname{Pic}}^0_{C/k}$是
$C$的Jacobian。设$\phi$诱导$\phi^*:J(C)\to J(C)$，则
\[
\int_{C\times C}\Delta\cdot\Gamma_{\phi}=1-\operatorname{Tr}(\phi^*)+\deg\phi.
\]
:::

::: proof
首先陈述一些关于光滑曲线及其Jacobian的事实：

考虑$C\times C$的两个投影$p_1,p_2$，则
\[
\operatorname{Pic}(C\times C)=p_1^*(\operatorname{Pic}(C))\oplus p_2^*(\operatorname{Pic}(C))\oplus R,
\]
其中
$R=\{[Z]\in\operatorname{Pic}(C\times C):Z|_{C\times\{c_0\}}\sim_{\mathrm{rat}}0,Z|_{\{c_0\}\times C}\sim_{\mathrm{rat}}0\}$。
我们有如下典范同构：
\[
\begin{tikzcd}[row sep=tiny, column sep = tiny]
  R && {\mathrm{End}(J(C))} \\
  Z && {(\mathscr{O}_C(D)\mapsto (p_1|_Z)_*(p_2|_Z)^*D)}
  \arrow[maps to, from=2-1, to=2-3]
  \arrow["\cong", from=1-1, to=1-3]
\end{tikzcd}
\]
设$\sigma\in\mathrm{Aut}(C\times C)$是前后对换，则有如下对应：

| $\mathrm{End}(J(C))$ | $R$ |
| --- | --- |
| $\alpha,\beta$的复合 | $p_{13,*}(p_{12}^*\alpha\circ p_{23}^*\beta)$ |
| $\mathrm{id}_J$ | $\Delta_C-C\times\{c_0\}-\{c_0\}\times C$ |
| $\phi^*$ | $\Gamma_{\phi}-C\times\{\phi(c_0)\}-\sum_{\phi(c)=c_0}\{c\}\times C$ |
| 迹$\alpha,\beta\mapsto\operatorname{Tr}(\alpha\beta)$ | $\alpha,\beta\mapsto -\int_{C\times C}\alpha\cdot\sigma^*\beta$ |
| Rosati对合$\alpha\mapsto \alpha^{\dagger}$ | $\alpha\mapsto\sigma^*\alpha$ |
| Rosati正定$\operatorname{Tr}(\alpha\alpha^{\dagger})>0$ | Hodge指标定理$-\int_{C\times C}\alpha\cdot\sigma^*\alpha>0$ |

下面开始证明。注意到
\[
\begin{aligned}
\int_{C\times C}\Delta\cdot\Gamma_{\phi}&=\int_{C\times C}\Gamma_{\phi}\cdot(\Delta_C-C\times\{c_0\}-\{c_0\}\times C)\\
&+\int_{C\times C}\Gamma_{\phi}\cdot(C\times\{c_0\}+\{c_0\}\times C)\\
&=1+\deg\phi+\int_{C\times C}\Gamma_{\phi}\cdot(\Delta_C-C\times\{c_0\}-\{c_0\}\times C).
\end{aligned}
\]
且得知$R$和丰沛除子$C\times\{c_0\}+\{c_0\}\times C$垂直，那么根据Nakai-Moishezon定理和上述对应得到
\[
\begin{aligned}
&\int_{C\times C}\Gamma_{\phi}\cdot(\Delta_C-C\times\{c_0\}-\{c_0\}\times C)\\
&=\int_{C\times C}\left(\Gamma_{\phi}-C\times\{\phi(c_0)\}-\sum_{\phi(c)=c_0}\{c\}\times C\right)\\
&\cdot(\Delta_C-C\times\{c_0\}-\{c_0\}\times C)=-\operatorname{Tr}(\phi^*\circ\mathrm{id}_{J(C)}).
\end{aligned}
\]
因此得到结论。
:::
