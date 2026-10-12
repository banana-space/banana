---
title: 群上同调一瞥
---

几何人可以通过这里速成一下群的上同调理论。

::: definition
设$G$是拓扑群。

(i)一个Abel群$M$（赋予离散拓扑）称为$G$-模，如果有连续作用$G\times M\to M$；

(ii)设$\mathrm{Mod}_G$是$G$-模构成的范畴。根据[@StacksProject, Tag 04JF]，范畴
$\mathrm{Mod}_G$有足够内射对象。考虑左正合函子
\[
\Gamma_G:\mathrm{Mod}_G\to\mathrm{AbGrps},M\mapsto M^G,
\]
定义群$G$的（连续）上同调为$H^i(G,M)=R^i\Gamma_G(M)$。若$G$是Galois群则称为Galois上同调。
:::

::: proposition
对于群$G$，考虑群环$\mathbb{Z}[G]$，
那么有自然的范畴等价$\mathrm{Mod}_G\to\mathrm{Mod}_{\mathbb{Z}[G]}$。
设$\mathbb{Z}$可以经过平凡$G$作用来作为$\mathbb{Z}[G]$模，
则$H^i(G,M)\cong\mathrm{Ext}_{\mathbb{Z}[G]}^i(\mathbb{Z},M)$。
:::

::: proof
近乎平凡，略去。
:::

::: theorem [Tate] {@TateConGrps}
设$M$是拓扑群并且赋予连续$G$-作用。考虑复形
\[
C_{\mathrm{cont}}^*(G,M):M\to\mathrm{Maps}_{\mathrm{cont}}(G,M)\to\mathrm{Maps}_{\mathrm{cont}}(G\times G,M)\to\cdots
\]
其中边界算子为当$n=0$，则$m\mapsto(g\mapsto g(m)-m)$；当$n>0$时定义为
\[
\begin{aligned}
d(f)(g_1,...,g_{n+1})&=g_1(f(g_2,...,g_{n+1}))\\
&+\sum_{j=1}^n(-1)^jf(g_1,...,g_jg_{j+1},...,g_{n+1})\\
&+(-1)^{n+1}f(g_1,...,g_n).
\end{aligned}
\]
这样定义Tate连续上同调为$H^i_{\mathrm{cont}}(G,M):=H^i(C_{\mathrm{cont}}^*(G,M))$。
则对于$M\in\mathrm{Mod}_G$，存在典范映射$H^i(G,M)\to H^i_{\mathrm{cont}}(G,M)$。
并且当$G$是离散群或者射有限群，
则为同构$H^i(G,M)\cong H^i_{\mathrm{cont}}(G,M)$。
:::

::: proof
映射$H^i(G,M)\to H^i_{\mathrm{cont}}(G,M)$通过万有$\delta$-函子不难诱导。
证明见[@milneCFT, 第二章]。
我们在这里简单说说这个边界映射的一个看法，这个其实就是分类叠
$\mathbf{B}G$上层的Čech上同调的边界映射。
:::
