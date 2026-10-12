---
title: 经典de Rham上同调-奇异比较定理
---

::: theorem [常值层-奇异上同调比较] {@SheafCoh-SingularCoh-Compare}
设$X$是局部可缩拓扑空间，则对任何交换环$G$都有典范同构
\[
H^i_{\operatorname{sing}}(X,G)\cong H^i(X,\underline{G}).
\]
:::

::: proof
（摘自[@VoisinHdg-I, 定理 4.47]）定义层
\[
\mathscr{C}^q_{\operatorname{sing}}:=\left(U\mapsto C_{\operatorname{sing}}^q(U,G)\right)^{\sharp}
\]
及自然的映射
$\partial:\mathscr{C}^q_{\operatorname{sing}}\to\mathscr{C}^{q+1}_{\operatorname{sing}}$。

$\bullet$ **步骤1。** 证明有预解$0\to \underline{G}\to\mathscr{C}^*_{\operatorname{sing}}$。

这是因为$X$局部可缩，则$\mathscr{C}^*_{\operatorname{sing}}$在非零指标处正合。
又因为$X$局部道路连通，则若$U$可缩，对$f\in C_{\operatorname{sing}}^q(U,G)$有
道路$\alpha$连接任意两个点$x,y\in U$，故$0=\partial f(\alpha)=f(\partial\alpha)=f(x)-f(y)$，
故局部常值，则
\[
\ker(\partial:\mathscr{C}^0_{\operatorname{sing}}\to\mathscr{C}^{1}_{\operatorname{sing}})\cong\underline{G},
\]
因此成立。

$\bullet$ **步骤2。** 此预解$0\to \underline{G}\to\mathscr{C}^*_{\operatorname{sing}}$关于
$\Gamma(X,-)$零调。

不难验证预层$\left(U\mapsto C_{\operatorname{sing}}^q(U,G)\right)$是松弛的，而且我们断言
\[
\Gamma(U,\mathscr{C}^q_{\operatorname{sing}})\cong C_{\operatorname{sing}}^q(U,G)/C_{\operatorname{sing}}^q(U,G)_0,
\]
其中$C_{\operatorname{sing}}^q(U,G)_0\subset C_{\operatorname{sing}}^q(U,G)$由这样的$\alpha$构成：
满足存在$U$的开覆盖$\mathfrak{V}$使得
对所有的$V\in\mathfrak{V}$都有$\alpha|_{C_{\operatorname{sing}}^q(V,G)}=0$。
事实上构造同态$C_{\operatorname{sing}}^q(U,G)\to\Gamma(U,\mathscr{C}^q_{\operatorname{sing}})$
为$f\mapsto f^{\sharp}$。
事实上根据定义不难得到同态的核为$C_{\operatorname{sing}}^q(U,G)_0$。
满射也不难，取$g\in\Gamma(U,\mathscr{C}^q_{\operatorname{sing}})$，存在开覆盖$\{U_i\}$
和$g_i\in C_{\operatorname{sing}}^q(U_i,G)$使得$g|_{U_i}=g_i$。定义
\[
g':=\alpha\mapsto
\left\{
\begin{array}{cc}
g_i(\alpha) & \mathrm{Im}\alpha\subset U_i,\\
0 & \text{其他}
\end{array}\right.
\]
即可得到结果，因此成立。

$\bullet$ **步骤3。** 完成证明。

根据步骤2得到$H^q(X,\underline{G})=H^q\Gamma(X,\mathscr{C}^*_{\operatorname{sing}})$。因此只需证明
\[
\Gamma(U,\mathscr{C}^*_{\operatorname{sing}})=C_{\operatorname{sing}}^*(U,G)/C_{\operatorname{sing}}^*(U,G)_0\sim_{\mathrm{qis}}C_{\operatorname{sing}}^*(U,G)
\]
即可。这是纯代数拓扑的，对$X$的开覆盖$\mathfrak{U}=\{U_i\}$，定义复形$C_*^{\mathfrak{U}}(X,G)$为
\[
C_q^{\mathfrak{U}}(X,G)=\{\sigma:\Delta^q\to X:\mathrm{Im}\sigma\subset\text{某个}U_i\}.
\]
根据[@SpanierAT66, 第 178 页]的结论，
我们有链同伦$C_*^{\mathfrak{U}}(X,G)\sim_{\mathrm{ChainHomotopy}}C_{*,\operatorname{sing}}(X,G)$，
因此取对偶得到同伦
\[
\pi_{\mathfrak{U}}:C^*_{\operatorname{sing}}(X,G)\sim_{\mathrm{ChainHomotopy}}C^{\mathfrak{U},*}_{\operatorname{sing}}(X,G).
\]
故有正合列
$0\to\ker \pi_{\mathfrak{U}}\to C^*_{\operatorname{sing}}(X,G)\to C^{\mathfrak{U},*}_{\operatorname{sing}}(X,G)\to0$，
其中$\ker \pi_{\mathfrak{U}}$
零调。对覆盖取余极限得到结论。
:::

::: theorem [经典de Rham-奇异上同调比较] {@ClassicalDR-Singular}
对流形$M$和复流形$X$，我们有
\[
H^i_{\mathrm{dR}}(M,\mathbb{R})\cong H^i_{\operatorname{sing}}(M,\mathbb{R}),\quad H^i_{\mathrm{dR}}(X,\mathbb{C})\cong H^i_{\operatorname{sing}}(X,\mathbb{C}).
\]
:::

::: proof
只需证明$H^i_{\mathrm{dR}}(M,\mathbb{R})\cong H^i_{\operatorname{sing}}(M,\mathbb{R})$即可。
首先我们需要如下比较定理：

$\bullet$ **步骤0。
光滑奇异上同调比较。**（参考[@Lee12, 定理 18.7]）定义光滑奇异单形为$\sigma:\Delta^p\to M$
满足在每个点都有光滑扩展，定义出光滑奇异上同调群$H^p_{\mathrm{sm}}(M,\mathbb{R})$且有自然同构
\[
H^p_{\mathrm{sm}}(M,\mathbb{R})\cong H^p(M,\mathbb{R}).
\]

回到命题。定义同态（de Rham同态）为
\[
\gamma_k:H^k_{\mathrm{dR}}(M,\mathbb{R})\to H^p_{\mathrm{sm}}(M,\mathbb{R})\cong H^p(M,\mathbb{R}),
[\omega]\mapsto\left([c]\mapsto\int_c\omega\right).
\]
根据Stokes定理不难得知同态良定义。
接下来的证明都是经典的MV-讨论，为了方便我们称满足$\gamma_k$皆为同构的空间称为de Rham空间，
称一个开覆盖为de Rham覆盖，如果其每一个元素都是de Rham的且有限交也是de Rham的。

$\bullet$ **步骤1。** 欧氏空间内的凸开子集都是de Rham空间。

平凡，略去讨论。

$\bullet$ **步骤2。** 若$M$有有限的de Rham覆盖，则$M$也是de Rham空间。

标准的MV-讨论，简述如下（不会的读者请复习代数拓扑）：先对两个空间的覆盖证明。
列出两种上同调的MV序列，不难证明交换性。根据5引理即可得到证明。对于一般情况
对覆盖的空间个数归纳即可。

$\bullet$ **步骤3。** 若$M$有de Rham覆盖构成的基，则$M$也是de Rham空间。

假设$M$有de Rham空间构成的基$\mathfrak{M}$，
考虑光滑函数$f:M\to\mathbb{R}$满足对任何$c\in\mathbb{R}$使得$f^{-1}((-\infty,c])$是紧集
（存在性参考[@Lee12, 命题 2.2.8]）。定义
\[
A_m:=\{q\in M:m\leq f(q)\leq m+1\},\\A_m':=\{q\in M:m-1/2< f(q)< m+3/2\}.
\]
取$\mathfrak{M}$内元素覆盖$A_m$且在$A_m'$内，因为$A_m$紧，故可取有限覆盖。
设$B_m$是这些元素的并，根据步骤2得知$B_m$是de Rham的。
注意到$B_m\subset A_m'$且当$l=m-1,m$或$m+1$时$B_m\cap B_l\neq\emptyset$，设
\[
U=\bigcup_{m=2a+1,a\in\mathbb{Z}}B_m,V=\bigcup_{m=2a,a\in\mathbb{Z}}B_m,
\]
则由于其都为de Rham空间的无交并，因此也是de Rham的。
而$U\cap V=\coprod_{m\in\mathbb{Z}}B_m\cap B_{m+1}$，因此也是de Rham的。
再次运用MV-讨论得到结论。

$\bullet$ **步骤4。** 所有$\mathbb{R}^n$的开子集都是de Rham空间，因此所有光滑流形也是。

运用步骤3和步骤1可以得到所有$\mathbb{R}^n$的开子集都是de Rham空间，
而所有光滑流形都有$\mathbb{R}^n$的开子集组成的基，
再次根据步骤3得到结论。
:::
