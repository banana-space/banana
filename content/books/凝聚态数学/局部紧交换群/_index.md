---
title: 局部紧交换群
---

本节研究局部紧交换群作为凝聚态交换群的行为。

::: theorem
$A,B$ 为局部紧交换群。则将其视为凝聚态交换群的内 ${\operatorname{Hom}}$
函子等于它们作为拓扑群的同态群赋予紧开拓扑，即
$$
\underline{\operatorname{Hom}}_{\mathsf{CondAb}}(A,B)=
{\operatorname{Hom}}_{\mathsf{Ab}(\mathsf{Top})}(A,B).
$$
:::

::: proof
对局部紧拓扑空间 $X,Y$，由于 $\underline{\operatorname{Hom}}_{\mathsf{Cond}}(X,Y)$ 定义为其在
$S\in\mathsf{CHaus}$ 上取值为 ${\operatorname{Hom}}_{\mathsf{Cond}}(S\times X,Y)$，
由紧开拓扑的性质不难发现
$\underline{\operatorname{Hom}}_{\mathsf{Cond}}(X,Y)$ 就是
${\operatorname{Hom}}_{\mathsf{Top}}(X,Y)$
赋予紧开拓扑。

由对交换群 $A$ 典范的右正合列
$$
\mathbb{Z}[A\times A]\to\mathbb{Z}[A]\to A\to0,
$$
其中第一个映射为 $[(a,b)]\mapsto[a+b]-[a]-[b]$，第二个为
$[a]\mapsto a$，即得对凝聚态交换群也有如此右正合列。所以
\[
\begin{aligned}
  \underline{\operatorname{Hom}}_{\mathsf{CondAb}}(A,B)
  &=\ker(\underline{\operatorname{Hom}}_{\mathsf{CondAb}}(\mathbb{Z}[A],B)\to\underline{\operatorname{Hom}}_{\mathsf{CondAb}}(\mathbb{Z}[A\times A],B))\\
  &=\ker(\underline{\operatorname{Hom}}_{\mathsf{Cond}}(A,B)\to\underline{\operatorname{Hom}}_{\mathsf{Cond}}(A\times A,B))\\
  &=\ker({\operatorname{Hom}}_{\mathsf{Top}}(A,B)\to{\operatorname{Hom}}_{\mathsf{Top}}(A\times A,B))={\operatorname{Hom}}_{\mathsf{Ab}(\mathsf{Top})}(A,B),
\end{aligned}
\]
其中拓扑空间和拓扑群的 ${\operatorname{Hom}}$ 都赋予紧开拓扑。
:::

还可以计算 $R\underline{\operatorname{Hom}}$。我们先算些具体情况，
然后用局部紧交换群的结构做化归。后文其实不会用到一般局部紧交换群的结果，
从而并不用到局部紧交换群结构定理。

::: theorem {@环面出发}
对集合 $I$ 以 $\mathbb{T}^I$ 记 $I$ 个 $\mathbb{T}=\mathbb{R}/\mathbb{Z}$ 的乘积。则

1. {@环面打到离散} 对离散交换群 $M$，自然映射
   $M^{\oplus I}[-1]=\underline{\operatorname{Hom}}(\mathbb{Z}[1],M)^{\oplus I}\to\underline{\operatorname{Hom}}(\mathbb{R}/\mathbb{Z},M)^{\oplus I}\to\underline{\operatorname{Hom}}(\mathbb{T}^I,M)$
   是同构。

2. {@环面打到实数} $R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{R})=0$。
   事实上对一般的紧交换群 $A$，$R\underline{\operatorname{Hom}}(A,\mathbb{R})=0$。

:::

::: proof
先证 @环面打到离散。先看 $I$ 有限情形。此时有限直和拿到
$\underline{\operatorname{Hom}}$ 外面，不妨设 $|I|=1$，
即要证 $R\underline{\operatorname{Hom}}(\mathbb{R}/\mathbb{Z},M)=M[-1]$，
也即 $R\underline{\operatorname{Hom}}(\mathbb{R},M)=0$。
为此我们对映射 $\mathbb{R}\to0$ 用附录中的典范消解。
由其典范性，这也是作为凝聚态交换群的消解，于是得链复形同态
$\bigoplus_{j=1}^{n_i}\mathbb{Z}[\mathbb{R}^{r_{ij}}]\to\bigoplus_{j=1}^{n_i}\mathbb{Z}[0^{r_{ij}}]$，
其中 $i$ 是链复形的指标。对其作用 $R\underline{\operatorname{Hom}}(-,M)$，再在紧 Hausdorff 空间 $S$
上取值，得双复形同态
$\bigoplus_{j=1}^{n_i}R\Gamma(S,M)\to\bigoplus_{j=1}^{n_i}R\Gamma(S\times\mathbb{R}^{r_{ij}},M)$，
左边的全复形是 $R\underline{\operatorname{Hom}}(0,M)=0$，
右边的是 $R\underline{\operatorname{Hom}}(\mathbb{R},M)$。
要证其在全复形上是拟同构，只需证其每一列，即固定每个 $i$ 时，是拟同构。
这归结为证明对 $S\in\mathsf{CHaus}$，$r\in\mathbb{N}$，
$$
R\Gamma(S,M)=R\Gamma(S\times\mathbb{R}^r,M).
$$
等号右边是 $\lim_NR\Gamma(S\times[-N,N]^r,M)$，故只需证
$R\Gamma(S,M)=R\Gamma(S\times[-N,N]^r,M)$。这便是 @离散模的上同调 和常层上同调同伦不变性的显然推论。

再看 $I$ 无限情形。此时直接对 $\mathbb{T}^I$ 用附录的典范消解，则同样地
$R\underline{\operatorname{Hom}}(\mathbb{T}^I,M)(S)$ 被一些
$\bigoplus_{j=1}^{n_i}R\Gamma(S\times(\mathbb{T}^I)^{r_{ij}},M)$
消解；由 @离散模的上同调，后者是 $I$ 有限情形的滤余极限，
故 $R\underline{\operatorname{Hom}}(\mathbb{T}^I,M)(S)$ 也是 $I$ 有限情形的滤余极限，
即得无限情形结论。

再证 @环面打到实数。由典范消解以及 @实数上同调，
$R\underline{\operatorname{Hom}}(A,\mathbb{R})$ 由 Banach 空间复形
$$
0\to\bigoplus_{j=1}^{n_0}C(S\times A^{r_{0j}},\mathbb{R})\to\bigoplus_{j=1}^{n_1}C(S\times A^{r_{1j}},\mathbb{R})\to\cdots
$$
计算。现在考虑该复形的两个自映射 $2$ 与 $[2]^*$，前一个指逐项乘以 $2$，
后一个指沿着 $2\colon A\to A$ 拉回。由附录的 @倍数同伦，
它俩典范同伦，即存在 $h\colon P^\bullet\to P^{\bullet-1}$，
诱导以上复形的映射 $h^*$，使得 $2-[2]^*=dh^*+h^*d$。那么对闭链
$f$，$2f=[2]^*f+dh^*f$，即
$$
f=\frac{1}{2}[2]^*f+d\left(\frac{1}{2}h^*f\right).
$$
对上式右边第一个 $f$ 再用上式代入，这样迭代 $n$ 次，得
$$
f=\frac{1}{2^n}[2^n]^*f+d\sum_{k=1}^n\frac{1}{2^k}h^*[2^{k-1}]^*f.
$$
由于 $[2^n]^*$ 为沿着 $2^n\colon A\to A$ 拉回实值函数 $f$，
不改变上确界范数，故上式第一项在 $n\to\infty$ 时范数趋于 $0$，
从而取极限得到
$$
f=d\sum_{k=1}^\infty\frac{1}{2^k}h^*[2^{k-1}]^*f,
$$
即每个闭链都恰当，以上复形零调。
:::

::: corollary {@实数出发}
1. 对离散交换群 $M$，$R\underline{\operatorname{Hom}}(\mathbb{R},M)=0$。

2. $R\underline{\operatorname{Hom}}(\mathbb{R},\mathbb{R})=\mathbb{R}$。

:::

::: proof
利用短正合列 $0\to\mathbb{Z}\to\mathbb{R}\to\mathbb{T}\to0$ 和定理立得。
:::

::: corollary {@局部紧RHom}
对局部紧交换群 $A,B$，$R\underline{\operatorname{Hom}}(A,B)$ 集中在上同调次数 $[0,1]$。
:::

::: proof
由局部紧交换群分类定理，参见 [@Ru90]，定理 2.4.1，
局部紧交换群都是离散群、紧群、欧氏空间三者的扩张；
欧氏空间又是格与环面的扩张，从而局部紧交换群都是离散群与紧群的若干步扩张，
故只需分别对离散群与紧群证明定理。

先看 $A$ 离散情形。此时可写短正合列 $0\to\mathbb{Z}^{\oplus I}\to\mathbb{Z}^{\oplus J}\to A\to0$，
从而 $R\underline{\operatorname{Hom}}(A,B)=[B^J\to B^I]$ 集中在 $[0,1]$。

再看 $A$ 紧情形。此时由 Pontryagin 对偶不难写出短正合列
$0\to A\to\mathbb{T}^I\to\mathbb{T}^J\to0$，
从而
$R\underline{\operatorname{Hom}}(A,B)=\operatorname{cofib}(R\underline{\operatorname{Hom}}(\mathbb{T}^J,B)\to R\underline{\operatorname{Hom}}(\mathbb{T}^I,B))$。
所以只需证 $R\underline{\operatorname{Hom}}(\mathbb{T}^I,B)$ 集中在 $[0,1]$。
$B$ 离散时这是 @环面出发 的 @环面打到离散。$B$ 紧时同样用环面消解 $B$，
只需证 $R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{T}^J)$ 集中在 $0$。它是
$R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{T})^J$；再用 @环面出发 有
$$
R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{T})=\operatorname{cofib}(R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{Z})\to R\underline{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{R}))=\operatorname{cofib}(\mathbb{Z}^{\oplus I}[-1]\to0)=\mathbb{Z}^{\oplus I}
$$
集中在 $0$。
:::

下一节我们会用到

::: proposition {@紧群伪凝聚}
$A$ 是紧交换群，则它在 $\mathsf{CondAb}$ 中伪凝聚。
换言之，它有由 $\mathsf{CondAb}$ 中紧投射对象组成的消解。
这推出 $R\underline{\operatorname{Hom}}(A,-)$ 与 $\mathsf{CondAb}$ 中滤余极限交换。
:::

::: proof
由于对极不连通空间 $S$，$\mathbb{Z}[S]\in\mathsf{CondAb}$ 紧投射，
这是附录中消解引理和 @离散模的上同调
的证明中紧空间用极不连通空间单纯消解的直接推论。对任意极不连通空间
$T$，把 $A$ 的典范消解张量积 $\mathbb{Z}[T]$ 再对紧空间用极不连通空间单纯消解，
同样可以得到 $\mathbb{Z}[T]\otimes A$ 伪凝聚。于是用紧投射消解计算
$R\underline{\operatorname{Hom}}(A,-)(T)=R{\operatorname{Hom}}(\mathbb{Z}[T]\otimes A,-)$
即得它与滤余极限交换。这对任意 $T$ 成立，所以 $R\underline{\operatorname{Hom}}(A,-)$
与滤余极限交换。
:::
