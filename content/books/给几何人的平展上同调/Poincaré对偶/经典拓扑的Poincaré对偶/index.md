---
title: 经典拓扑的Poincaré对偶
---

首先介绍最简单的微分流形上经典de Rham上同调的Poincaré对偶。

::: theorem [de Rham上同调的Poincaré对偶]
设$n$维可定向流形$M$上有有限的好覆盖，考虑双线性型
\[
\int:H^q_{\mathrm{dR}}(M)\times H_{c,\mathrm{dR}}^{n-q}(M)\to\mathbb{R},(\alpha,\beta)\mapsto\int_M\alpha\wedge\beta,
\]
如果这个双线性型是非退化的，且上同调群都是维数有限，就可以得到
\[
H^q_{\mathrm{dR}}(M)\cong(H_{c,\mathrm{dR}}^{n-q}(M))^*.
\]
:::

::: remark
这个可以由经典的MV-讨论来解决，参考[@BottTu82]第五节。
事实上经过对流形的拓扑更精细的研究，对于任何$n$维可定向流形，
都有$H^q_{\mathrm{dR}}(M)\cong(H^{n-q}_{c,\mathrm{dR}}(M))^*$，
但注意到这样的话上同调群维数不一定有限，
那么也就$H^q_{c,\mathrm{dR}}(M)\ncong(H^{n-q}_{\mathrm{dR}}(M))^*$。
这样的例子事实上很好举，假设$M=\coprod_{i=1}^{\infty}M_i$，其中$M_i$均为有好覆盖的$n$维可定向流形。
那么$H^q_{\mathrm{dR}}(M)=\prod_iH^q_{\mathrm{dR}}(M_i)$且
$H^q_{c,\mathrm{dR}}(M)=\bigoplus_iH^q_{c,\mathrm{dR}}(M_i)$，那么确实就有
\[
(H^{n-q}_{c,\mathrm{dR}}(M))^*=\mathrm{Hom}_{\mathbb{R}}\left(\bigoplus_iH^{n-q}_{c,\mathrm{dR}}(M_i),\mathbb{R}\right)
=\prod_i\mathrm{Hom}_{\mathbb{R}}(H^{n-q}_{c,\mathrm{dR}}(M_i),\mathbb{R})=H^q_{\mathrm{dR}}(M),
\]
但反过来自然不一定行。
:::

对于一般代数拓扑上，我们也有如下Poincaré对偶。

::: theorem
对$R$-可定向$n$维流形$M$，紧支奇异上同调定义为
\[
H_{c,\operatorname{sing}}^q(M;R):=\varinjlim_KH^q_{\operatorname{sing}}(M,M\backslash K;R),
\]
其中$K$紧。
则基本类的帽积诱导同构
\[
H_{c,\operatorname{sing}}^p(M;R)\cong H_{n-p,\operatorname{sing}}(M;R).
\]
:::

::: proof
依旧是MV-讨论，但交换性比较复杂，参考[@Hatcher02]第3.3节。
:::

::: remark
不妨考虑$\mathbb{R}$-系数。
对于可定向拓扑$d$-流形$M$，考虑定向层作为局部系$\mathbb{O}_{\mathbb{R}}$。则其在$x\in M$上的纤维是
$H^d(M,M\backslash x;\mathbb{R})=H^{d-1}(S^{d-1};\mathbb{R})$非典范的同构于$\mathbb{R}$。
则有典范映射
$\int:H^d_{c}(M,\mathbb{O}_{\mathbb{R}})\cong\mathbb{R}$定义出完美对
\[
H^i(M;\mathbb{R})\times H^{d-i}_c(M;\mathbb{O}_{\mathbb{R}})\to\mathbb{R}.
\]
因为定向的选取相当于一个同构$\mathbb{O}_{\mathbb{R}}\cong\underline{\mathbb{R}}$，
我们又得到上面的Poincaré对偶。
:::
