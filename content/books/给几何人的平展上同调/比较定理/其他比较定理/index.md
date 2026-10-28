---
title: 其他比较定理
---

<problems>
- “代数de Rham上同调”的定义中，微分映射的像 $ab_0\wedge db_1\wedge\cdots\wedge db_q$ 似乎应为 $db_0\wedge db_1\wedge\cdots\wedge db_q$。
</problems>

::: definition [代数de Rham上同调]
设$f:X\to S$是概形映射，
考虑de Rham复形$\Omega_{X/S}^*$为$\Omega_{X/S}^q=\bigwedge^q\Omega_{X/S}$且微分映射为
局部定义成
\[
d:b_0db_1\wedge\cdots\wedge db_q\mapsto ab_0\wedge db_1\wedge\cdots\wedge db_q.
\]
定义$X$在$S$上的代数de Rham上同调为
\[
H^i_{\mathrm{dR}}(X/S):=H^i(R\Gamma(X,\Omega_{X/S}^*)).
\]
:::

::: theorem [经典-代数de Rham比较]
若$X$是$\mathbb{C}$上的光滑紧合簇，则
\[
H^i_{\mathrm{dR}}(X^{\operatorname{an}},\mathbb{C})\cong H^i_{\mathrm{dR}}(X/\mathbb{C}).
\]
:::

::: proof
此时$X^{\operatorname{an}}$是紧复流形，
根据Poincaré引理知有预解$0\to\underline{\mathbb{C}}\to\Omega_{X^{\operatorname{an}}}^*$。
因此
\[
H^i(X^{\operatorname{an}},\underline{\mathbb{C}})=R^i\Gamma(X^{\operatorname{an}},\Omega_{X^{\operatorname{an}}}^*).
\]
根据GAGA得到
\[
R^i\Gamma(X^{\operatorname{an}},\Omega_{X^{\operatorname{an}}}^*)=R^i\Gamma(X,\Omega_{X}^*)=H^i_{\mathrm{dR}}(X/\mathbb{C}).
\]
由于再根据 @ClassicalDR-Singular 和 @SheafCoh-SingularCoh-Compare 得到
\[
H^i_{\mathrm{dR}}(X^{\operatorname{an}},\mathbb{C})=H^i_{\operatorname{sing}}(X^{\operatorname{an}},\mathbb{C})=H^i(X^{\operatorname{an}},\underline{\mathbb{C}})
=H^i_{\mathrm{dR}}(X/\mathbb{C}),
\]
即可得到结论。
:::
