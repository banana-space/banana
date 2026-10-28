---
title: Witt 环
aliases: [Witt 向量环, Witt 向量]
categories: [交换代数]
navboxes: [交换代数]
---

<disambiguation>
本条目介绍的是Witt 向量组成的环。关于[[二次型]]理论中的 Witt 环，请参见[[Witt 群]]。
</disambiguation>

<problems>
- “应用”“推广”各节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Witt 环**是 [[Ernst Witt]] 提出的构造。其对[[交换环]]
$R$，具体地给可数乘积 $R^{\mathbb{Z}_+}$ 赋予一个环结构，得到交换环
$W(R)$。虽然 Witt 环的构造初看毫无直观，
但其在[[交换代数]]和[[代数数论]]中有一定应用。
$p$ 元域 $\mathbb{F}_p$ 的 Witt 环是 [[$p$ 进数|$p$ 进整数]]
$\mathbb{Z}_p$。

## 动机

如何从 $\mathbb{F}_p$ 显式构造出 $\mathbb{Z}_p$？自然的想法是对每个
$r\in\mathbb{F}_p$ 取定代表元 $[r]\in\mathbb{Z}_p$，然后每个
$a\in\mathbb{Z}_p$ 便可唯一写成
$$
[a_0]+[a_1]p+[a_2]p^2+\cdots
$$
对 $a_0,a_1,a_2,\ldots\in\mathbb{F}_p$。取什么代表元好呢？
$0,1,\ldots,p-1$ 是最朴素的取法，但看上去并不典范。
更典范的方法是用 [[Hensel 引理]]取出 $x^p-x=0$ 在 $\mathbb{Z}_p$
的 $p$ 个根作为 $[0],[1],\ldots,[p-1]$，这样
$[1],\ldots,[p-1]$ 就是 $\mathbb{Z}_p$ 中的 $p-1$ 次[[单位根]]，映射
$r\mapsto[r]$ 便是乘性的。其更显式的表达如下：任取
$r\in\mathbb{F}_p$ 的原像 $\tilde{r}\in\mathbb{Z}_p$，则
$$
[r]=\lim_{n\to\infty}\tilde{r}^{p^n}.
$$
例如 $p=5$ 时，$[2]=(2,7,57,\ldots)\in\lim_n\mathbb{Z}/5^n=\mathbb{Z}_5$，
的确是 $5-1=4$ 次单位根。接下来要确定级数表达式的加法、乘法规则。
具体来说，比如
$$
a=[a_0]+[a_1]p+[a_2]p^2+\cdots,
$$
$$
b=[b_0]+[b_1]p+[b_2]p^2+\cdots,
$$
$$
c=[c_0]+[c_1]p+[c_2]p^2+\cdots,
$$
满足 $a+b=c$，我们要将 $c_n$ 用这些 $a_n,b_n$ 表示出来。
显然 $c_0=a_0+b_0\in\mathbb{F}_p$；但 $c_1$ 就未必是
$a_1+b_1$ 了，因为 $[a_0]+[b_0]-[c_0]$ 可以有 $p$ 的一次项。
为确定它，取原像 $\widetilde{a_0},\widetilde{b_0}$，则
$\widetilde{a_0}+\widetilde{b_0}$ 是 $c_0$ 的一个原像；于是
$$
[a_0]+[b_0]-[c_0]\equiv
\widetilde{a_0}^p+\widetilde{b_0}^p-
(\widetilde{a_0}+\widetilde{b_0})^p\pmod{p^2}.
$$
注意 $\frac{x^p+y^p-(x+y)^p}{p}$ 是整系数多项式，
可以代入 $\mathbb{F}_p$ 中的数。由此可知
$$
c_1=a_1+b_1+\frac{a_0^p+b_0^p-(a_0+b_0)^p}{p}
\in\mathbb{F}_p.
$$
一直算下去，可以发现 $c_n\in\mathbb{F}_p$ 是关于
$a_0,\ldots,a_n,b_0,\ldots,b_n$ 的整系数多项式，
这样就有了此种级数加法规则的显式公式。乘法亦类似。
Witt 环就是这一构造在一般环的推广。

## 定义

Witt 环一词有如下两个含义，不完全相同而又有紧密联系。

### $p$-Witt 环

本小节中，固定[[素数]] $p$。

::: definition [Witt 向量]
环 $R$ 的 **Witt 向量**指的是 $R$ 中元素序列
$$
(a_0,a_1,\ldots),
$$
它们组成的集合记作 $W(R)$。换言之，作为集合，$W(R)=R^\mathbb{N}$。
:::

下面给 $W(R)$ 赋予与环乘积 $R^\mathbb{N}$ 不同的乘法。

::: definition [幽灵分量]
对 $a=(a_0,a_1,\ldots)\in W(R)$ 以及 $n\in\mathbb{N}$，
$a$ 的第 $n$ 个**幽灵分量**指的是
$$
\sum_{i=0}^np^ia_i^{p^{n-i}}\in R,
$$
记作 $a^{(n)}$。
:::

::: theorem {@p环结构}
存在唯一一组整系数多项式
$(S_n,P_n\in\mathbb{Z}[x_0,\ldots,x_n,
  y_0,\ldots,y_n])_{n\in\mathbb{N}}$，使得对任一环 $R$，
如对 $a,b\in W(R)$ 定义 $a+b$ 为
$$
(S_0(a_0,b_0),S_1(a_0,a_1,b_0,b_1),\ldots)\in W(R),
$$
定义 $ab$ 为
$$
(P_0(a_0,b_0),P_1(a_0,a_1,b_0,b_1),\ldots)\in W(R),
$$
就有 $W(R)$ 是环，且每个幽灵分量都是 $W(R)$ 到 $R$
的环同态。
:::

::: definition [Witt 环]
交换环 $R$ 的 **Witt 环**，或称
**$p$-Witt 环**、**$p$-典型 Witt 环**，
指的是 $W(R)$ 带上 @p环结构 所述环结构。
:::

::: definition [截断 Witt 环]
对 $n\in\mathbb{N}$，交换环 $R$ 的 **$n$-截断 Witt 环**，
记作 $W_n(R)$，指的是集合 $R^n$，带上环结构
$$
(a_0,\ldots,a_{n-1})+(b_0,\ldots,b_{n-1})
=(S_0(a_0,b_0),S_1(a_0,a_1,b_0,b_1),\ldots,
S_{n-1}(a_0,\ldots,a_{n-1},b_0,\ldots,b_{n-1})),
$$
$$
(a_0,\ldots,a_{n-1})(b_0,\ldots,b_{n-1})
=(P_0(a_0,b_0),P_1(a_0,a_1,b_0,b_1),\ldots,
P_{n-1}(a_0,\ldots,a_{n-1},b_0,\ldots,b_{n-1})).
$$
显然，对 $m<n$，$a\mapsto a^{(m)}$ 是 $W_n(R)$ 到 $R$
的环同态。此外对 $m<n$ 有自然投影
$W_n(R)\to W_m(R)$，且 $W(R)=\lim_nW_n(R)$。
:::

### 大 Witt 环

大 Witt 环相当于对所有素数 $p$ 同时作 $p$-Witt 环。
本小节术语、记号均与前一小节相撞，但通常不引起歧义。

::: definition [Witt 向量]
环 $R$ 的 **Witt 向量**指的是 $R$ 中元素序列
$$
(a_1,a_2,\ldots),
$$
它们组成的集合记作 $W(R)$。换言之，作为集合，$W(R)=R^{\mathbb{Z}_+}$。
:::

下面给 $W(R)$ 赋予与环乘积 $R^{\mathbb{Z}_+}$ 不同的乘法。

::: definition [幽灵分量] {@大幽灵}
对 $a=(a_1,a_2,\ldots)\in W(R)$ 以及 $n\in\mathbb{Z}_+$，
$a$ 的第 $n$ 个**幽灵分量**指的是
$$
\sum_{d\mid n}da_d^{n/d}\in R,
$$
记作 $a^{(n)}$。
:::

::: theorem {@环结构}
存在唯一一组整系数多项式
$(S_n,P_n\in\mathbb{Z}[x_d,y_d]_{d\mid n})_{n\in\mathbb{Z}_+}$，
使得对任一环 $R$，
如对 $a,b\in W(R)$ 定义 $a+b$ 为
$$
(S_n(a_d,b_d)_{d\mid n})_{n\in\mathbb{Z}_+}\in W(R),
$$
定义 $ab$ 为
$$
(P_n(a_d,b_d)_{d\mid n})_{n\in\mathbb{Z}_+}\in W(R),
$$
就有 $W(R)$ 是环，且每个幽灵分量都是 $W(R)$ 到 $R$
的环同态。
:::

::: definition [Witt 环]
交换环 $R$ 的 **Witt 环**，或称**大 Witt 环**，
指的是 $W(R)$ 带上 @环结构 所述环结构。
:::

::: definition [截断 Witt 环]
如子集 $N\subseteq\mathbb{Z}_+$ 关于[[整除]]封闭，则定义交换环
$R$ 的 **$N$-截断 Witt 环**，记作 $W_N(R)$，
指的是集合 $R^N$，带上环结构
$$
(a_n)_{n\in N}+(b_n)_{n\in N}=
(S_n(a_d,b_d)_{d\mid n})_{n\in N},
$$
$$
(a_n)_{n\in N}(b_n)_{n\in N}=
(P_n(a_d,b_d)_{d\mid n})_{n\in N}.
$$
显然，对 $n\in N$，$a\mapsto a^{(n)}$ 是 $W_N(R)$
到 $R$ 的环同态。此外对 $M\subset N$ 有自然投影
$W_N(R)\to W_M(R)$，且 $W(R)=\lim_{N有限}W_N(R)$。
:::

::: remark
上一小节定义的 $p$-Witt 环就是
$W_{\{1,p,p^2,\ldots\}}(R)$，那里的截断 Witt 环
$W_n(R)$ 就是 $W_{\{1,p,\ldots,p^{n-1}\}}(R)$。
显然 $W_{\{1\}}(R)=R$。
:::

### 构造与证明 {@构造与证明}

本小节给出 @p环结构 与 @环结构 中多项式的构造，
从而证明之。

::: lemma {@乘积表达}
对任一环 $R$ 及任一 $f\in 1+tR[[t]]$，$R$
中存在唯一一列元素 $a_1,a_2,\ldots$ 使得
$$
f=\prod_{n\in\mathbb{Z}_+}(1-a_nt^n).
$$
:::

::: proof
对 $n$ 归纳，把等式两边乘以 $\prod_{i=1}^{n-1}(1-a_it^i)^{-1}$
然后模 $t^{n+1}$，知 $a_n$ 只能是
$f\prod_{i=1}^{n-1}(1-a_it^i)^{-1}$ 的 $n$ 次项系数相反数，
且这样取出的序列 $a_n$ 满足要求。
:::

以下对环 $R$ 以及 $a=(a_1,a_2,\ldots)\in W(R)$，记
$f_a(t)=\prod_{n\in\mathbb{Z}_+}(1-a_nt^n)\in
1+tR[[t]]$。

::: lemma
$$
-t\frac{\mathrm{d}}{\mathrm{d}t}\log f_a(t)
=\sum_{n\in\mathbb{Z}_+}a^{(n)}t^n,
$$
其中 $a^{(n)}$ 是 @大幽灵 中幽灵分量。
:::

::: proof
计算
$$
-t\frac{\mathrm{d}}{\mathrm{d}t}\log f_a(t)=
-\sum_{d\in\mathbb{Z}_+}t\frac{\mathrm{d}}{\mathrm{d}t}
\log(1-a_dt^d)
=\sum_{d\in\mathbb{Z}_+}\frac{da_dt^d}{1-a_dt^d}
=\sum_{d,e\in\mathbb{Z}_+}da_d^et^{de}
=\sum_{n\in\mathbb{Z}_+}\left(\sum_{d\mid n}da_d^{n/d}\right)t^n
=\sum_{n\in\mathbb{Z}_+}a^{(n)}t^n.
$$

:::

下面以 $x,y$ 分别记 $(x_1,x_2,\ldots),(y_1,y_2,\ldots)\in
W(\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots])$。

::: corollary {@加法}
设 $S_1,S_2,\ldots\in\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots]$ 满足
$$
f_x(t)f_y(t)=\prod_{n\in\mathbb{Z}_+}(1-S_nt^n)\in
1+t\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots][[t]].
$$
则对任一环 $R$ 以及 $a,b\in W(R)$，
$$
S(a,b)=(S_1(a_1,b_1,a_2,b_2,\ldots),
S_2(a_1,b_1,a_2,b_2,\ldots),\ldots)
$$
满足 $S(a,b)^{(n)}=a^{(n)}+b^{(n)}$。
:::

::: proof
由于环同态 $\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots]\to R$，
$x_n\mapsto a_n$，$y_n\mapsto b_n$
自然诱导形式幂级数环的同态，且把 $S_n$ 映射到
$S_n(a_1,b_1,a_2,b_2,\ldots)$，故在 $1+tR[[t]]$ 中有
$f_a(t)f_b(t)=f_{S(a,b)}(t)$。
两边取 $-t\frac{\mathrm{d}}{\mathrm{d}t}\log$ 即得结论。
:::

::: corollary {@负数}
设 $M_1,M_2,\ldots\in\mathbb{Z}[x_1,x_2,\ldots]$ 满足
$$
(f_x(t))^{-1}=\prod_{n\in\mathbb{Z}_+}(1-M_nt^n)\in
1+t\mathbb{Z}[x_1,x_2,\ldots][[t]].
$$
则对任一环 $R$ 以及 $a\in W(R)$，
$$
M(a)=(M_1(a_1,a_2,\ldots),M_2(a_1,a_2,\ldots),\ldots)
$$
满足 $M(a)^{(n)}=-a^{(n)}$。
:::

::: proof
与 @加法 一样。
:::

::: corollary {@乘法}
设 $P_1,P_2,\ldots\in\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots]$ 满足
$$
\prod_{d,e\in\mathbb{Z}_+}(1-x_d^{[d,e]/d}y_e^{[d,e]/e}
t^{[d,e]})^{(d,e)}=\prod_{n\in\mathbb{Z}_+}(1-P_nt^n)\in
1+t\mathbb{Z}[x_1,y_1,x_2,y_2,\ldots][[t]],
$$
其中 $(d,e)$和 $[d,e]$ 分别表示最大公约数和最小公倍数。
则对任一环 $R$ 以及 $a,b\in W(R)$，
$$
P(a,b)=(P_1(a_1,b_1,a_2,b_2,\ldots),
P_2(a_1,b_1,a_2,b_2,\ldots),\ldots)
$$
满足 $P(a,b)^{(n)}=a^{(n)}b^{(n)}$。
:::

::: proof
同样在 $1+tR[[t]]$ 中有
$$
\prod_{d,e\in\mathbb{Z}_+}(1-a_d^{[d,e]/d}b_e^{[d,e]/e}
t^{[d,e]})^{(d,e)}=f_{P(a,b)}(t).
$$
两边取 $-t\frac{\mathrm{d}}{\mathrm{d}t}\log$ 得
$$
\sum_{n\in\mathbb{Z}_+}P(a,b)^{(n)}t^n=
\sum_{d,e\in\mathbb{Z}_+}\frac{dea_d^{[d,e]/d}b_e^{[d,e]/e}
t^{[d,e]}}{1-a_d^{[d,e]/d}b_e^{[d,e]/e}t^{[d,e]}}=
\sum_{n\in\mathbb{Z}_+}\left(\sum_{d,e\mid n}
dea_d^{n/d}b_e^{n/e}\right)t^n=
\sum_{n\in\mathbb{Z}_+}a^{(n)}b^{(n)}t^n.
$$

:::

最后我们来同时证明 @p环结构 与 @环结构。

::: proposition {@主定理}
如子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，
则存在唯一一组整系数多项式
$(S_n,P_n\in\mathbb{Z}[x_d,y_d]_{d\mid n})_{n\in N}$，
满足与 @环结构 相同的要求。
:::

::: proof
首先由幽灵分量的定义，$a^{(n)}$ 是关于 $a_d$，$d\mid n$
的整系数多项式，将其记为 $g_n$，并记
$g=(g_1,g_2,\ldots)$；又不难归纳证明 $a_n$ 是关于
$a^{(d)}$，$d\mid n$ 的 $\mathbb{Z}[1/n]$ 系数多项式，
同样将其记为 $h_n$，并记 $h=(h_1,h_2,\ldots)$。
则依定义在 $\mathbb{Q}$ 系数下有
$g\circ h=h\circ g=\operatorname{id}$。具体计算知
$g(0)=h(0)=0$，$g(1,0,0,\ldots)=(1,1,1,\ldots)$，
$h(1,1,1,\ldots)=(1,0,0,\ldots)$。

现如多项式
$S_1,S_2,\ldots\in\mathbb{Q}[x_1,y_1,x_2,y_2,\ldots]$
满足 $S(x,y)^{(n)}=x^{(n)}+y^{(n)}$，
$M_1,M_2,\ldots\in\mathbb{Q}[x_1,x_2,\ldots]$
满足 $M(x)^{(n)}=-x^{(n)}$，
$P_1,P_2,\ldots\in\mathbb{Q}[x_1,y_1,x_2,y_2,\ldots]$
满足 $P(x,y)^{(n)}=x^{(n)}y^{(n)}$，
则把这三个等式两边作用 $h$ 得
$$
S(x,y)=h(g(x)+g(y)),\,M(x)=h(-g(x)),\,
P(x,y)=h(g(x)g(y)).
$$
考虑第 $n$ 个分量，便知 $S_n,M_n,P_n$ 都是关于
$x_d,y_d$，$d\mid n$ 的多项式。
此外，由这三个等式以及 $g,h$ 互逆不难发现

- $S(x,0)=S(0,x)=x$，
  $P((1,0,0,\ldots),x)=P(x,(1,0,0,\ldots))=x$；

- $S(x,y)=S(y,x)$，$P(x,y)=P(y,x)$；

- 在 $\mathbb{Q}[x_1,y_1,z_1,x_2,y_2,z_2\ldots]$
  中有 $S(S(x,y),z)=S(x,S(y,z))$，
  $P(P(x,y),z)=P(x,P(y,z))$，
  $P(S(x,y),z)=S(P(x,z),P(y,z))$；

- $S(x,M(x))=0$。

而由 @乘积表达 与 @加法、@负数、
@乘法，存在整系数的 $S,M,P$ 满足要求。显然，
整系数多项式的等式，只要作为有理系数多项式成立，
其本身就成立。于是有对任一环 $R$，大 Witt 环 $W(R)$
确实关于 $S,P$ 构成环，且由于 $S_n,M_n,P_n$
只依赖下标整除 $n$ 的变量，而集合 $N$ 关于整除封闭，
有截断 Witt 环 $W_N(R)$ 也确实关于 $S,P$ 构成环。
这样便得到命题的存在性。唯一性则是因为有理系数等式
$$
S(x,y)=h(g(x)+g(y)),\,P(x,y)=h(g(x)g(y));
$$
它们保证满足条件的 $S,P$ 甚至在有理系数多项式中都是唯一的。
:::

::: corollary {@平凡情形}
如环 $R$ 以及子集 $N\subseteq\mathbb{Z}_+$ 满足 $N$ 中元素在
$R$ 中都可逆，那么 $W_N(R)\cong R^N$ 为一些 $R$ 的乘积。
:::

::: proof
@主定理 证明过程中的 $g$ 和 $h$ 给出互逆环同态
$W_N(R)\to R^N$ 与 $R^N\to W_N(R)$。
:::

## 基本性质

::: proposition {@函子性}
对任一子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$R\mapsto
  W_N(R)$ 都是环范畴到自身的[[函子]]，
保持[[极限 (范畴论)|极限]]以及单射、满射。如 $N$ 有限，
它还保持[[滤余极限]]。对子集 $M\subseteq N$，
投影映射 $W_N(R)\to W_M(R)$ 是[[自然变换]]。
:::

::: proposition {@极限}
设 $\{N_i\}_{i\in I}$ 是 $\mathbb{Z}_+$ 一族子集的[[滤相系]]，
满足每个 $N_i$ 都关于整除封闭。
记 $N=\bigcup_{i\in I}N_i$。则
$$
W_N(R)=\lim_{i\in I}W_{N_i}(R).
$$
:::

::: proposition
设子集 $M,N\subseteq\mathbb{Z}_+$ 都关于整除封闭且元素两两互素。
记 $MN=\{mn\in\mathbb{Z}_+\mid m\in M,\,n\in N\}$，
则它也关于整除封闭。则对环 $R$，有自然同构
$W_M(W_N(R))=W_{MN}(R)$。
:::

### Frobenius 映射和移位映射

Frobenius 映射和移位映射是 Witt 环自带的两族映射，
前者是自同态，后者加性但不乘性。下面对 $N\subseteq\mathbb{Z}_+$，
$n\in\mathbb{Z}_+$，以 $N/n$ 记 $\{m\in\mathbb{Z}_+\mid mn\in N\}$。
如 $N$ 关于整除封闭，则 $N/n$ 亦然，且 $N/n\subseteq N$。

::: definition [移位映射]
设 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n\in\mathbb{Z}_+$，
$R$ 是环。以 $V_n$ 记映射 $W_{N/n}(R)\to W_N(R)$，
$(a_i)\mapsto(a_{i/n})$，称为**移位映射**；准确地说，
$$
V_n((a_i)_{i\in N/n})_j=\begin{cases}
  a_i,&j=ni;\\
  0,&n\nmid j.
\end{cases}
$$
在 $p$-Witt 环的语境下，**移位映射**仅指 $V_p$，
此时将其记作 $V$。
:::

::: proposition {@V性质}
设 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n,m\in\mathbb{Z}_+$，
$R$ 是环，$a,b\in W_{N/n}(R)$，$c\in W_{N/mn}(R)$。

- $V_n(a)^{(j)}=\begin{cases}
    na^{(i)},&j=ni;\\
    0,&n\nmid j;
  \end{cases}$

- $V_n(a)+V_n(b)=V_n(a+b)$；

- $V_n(a)V_n(b)=nV_n(ab)$；

- $V_m(V_n(c))=V_{mn}(c)$；

此外，$V_nW_{N/n}(R)\subseteq W_N(R)$ 是理想。
:::

::: proof
第一条由幽灵分量的定义显然。欲证后几条，只需对 $R$
为整系数多项式环情形验证多项式等式。
此时由于 Witt 环函子保持单射，可在有理系数下验证，
这样它们就是第一条的直接推论。

最后一句话是因为子集 $N'=N\setminus n\mathbb{Z}_+$
显然关于整除封闭，而
$$
V_nW_{N/n}(R)=\ker(W_N(R)\to W_{N'}(R)).
$$
:::

Frobenius 映射的构造就稍麻烦，需像加法、乘法一样找整系数多项式。
此处沿用 @构造与证明 中的记号。

::: lemma {@F构造}
固定 $n\in\mathbb{Z}_+$。设 $F_{n,1},F_{n,2},\ldots\in
  \mathbb{Z}[x_1,x_2,\ldots]$ 满足
$$
\prod_{m=1}^nf_x(\zeta_n^mt)=\prod_{i\in\mathbb{Z}_+}
(1-F_{n,i}t^{ni})\in1+t^n\mathbb{Z}[x_1,x_2,\ldots][[t^n]],
$$
其中 $\zeta_n$ 表示 $n$ 次本原单位根。则在
$\mathbb{Z}[x_1,x_2,\ldots]$ 中
$$
F_n(x)=(F_{n,1}(x_1,x_2,\ldots),
F_{n,2}(x_1,x_2,\ldots),\ldots)
$$
满足 $F_n(x)^{(i)}=x^{(ni)}$。
:::

::: proof
欲证式是整系数多项式等式，故可在有理系数下验证。条件表明
$$
\prod_{m=1}^nf_x(\zeta_n^mt)=f_{F_n(x)}(t^n).
$$
两边取 $-t^n\frac{\mathrm{d}}{\mathrm{d}(t^n)}\log
  =-\frac{1}{n}t\frac{\mathrm{d}}{\mathrm{d}t}\log$ 得
$$
\sum_{i\in\mathbb{Z}_+}F_n(x)^{(i)}t^{ni}
=\frac{1}{n}\sum_{m=1}^n\sum_{i\in\mathbb{Z}_+}x^{(i)}
(\zeta_n^mt)^i=\sum_{i\in n\mathbb{Z}_+}x^{(i)}t^i,
$$
即 $F_n(x)^{(i)}=x^{(ni)}$。
:::

::: proposition {@F性质}
满足 @F构造 要求的多项式列存在唯一，且
$F_{n,i}$ 只关于 $x_d$，$d\mid ni$。此外，对
$x=(x_1,x_2,\ldots),y=(y_1,y_2,\ldots)\in
  W(\mathbb{Z}[x_1,y_1,x_2,y_2\ldots])$
以及任意整数 $m,n$，

- $F_n(1)=1$；

- $F_n(x+y)=F_n(x)+F_n(y)$；

- $F_n(xy)=F_n(x)F_n(y)$；

- $F_m(F_n(x))=F_{mn}(x)$；

- $V_n(F_n(x)y)=xV_n(y)$；

- $F_n(V_n(x))=nx$；

- 如 $m,n$ 互素，则 $F_m(V_n(x))=V_n(F_m(x))$；

其中加法乘法指的是 Witt 环加法乘法。
:::

::: proof
注意 @F构造 条件式的左边实为整系数且只关于 $t^n$，
所以由 @乘积表达 知 $F_{n,i}$ 存在。
沿用 @主定理 证明中的记号，由
$F_n(x)^{(i)}=x^{(ni)}$ 知在
$\mathbb{Q}[x_1,x_2,\ldots]$ 中有
$F_n(x)=h(x^{(n)},x^{(2n)},\ldots)$，即知唯一性，且
$F_{n,i}(x)=h_i(x^{(n)},x^{(2n)},\ldots)$
只依赖 $x^{(en)}$，$e\mid i$，即只依赖 $x_d$，$d\mid ni$。

这些式子都是整系数多项式等式，可在有理系数下验证。
这样它们就都是 $F_n(x)^{(i)}=x^{(ni)}$ 和 @V性质 的简单推论。
:::

::: definition [Frobenius 映射]
设 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n\in\mathbb{Z}_+$，$R$ 是环。
以 $F_n$ 记映射 $W_N(R)\to W_{N/n}(R)$，
$a\mapsto F_n(a)=(F_{n,i}(a))_{i\in N/n}$，称为
**Frobenius 映射**。由 @F性质，
各 $F_n$ 都是环同态，且满足该命题所述等式。

在 $p$-Witt 环的语境下，**Frobenius 映射**仅指
$F_p$，此时将其记作 $F$。
:::

@F性质 中 Frobenius 映射和移位映射的交换性只在下标互素时成立。
不过在 $\mathbb{F}_p$-代数情形也有 $F_p$ 和 $V_p$ 交换。

::: theorem {@Fp代数}
设 $p$ 为素数，$R$ 为 $\mathbb{F}_p$-代数。则对 $a\in W(R)$
有 $F_p(V_p(a))=V_p(F_p(a))=pa$。此时 $F_p$ 还等于 $R$
的 [[Frobenius 同态]]诱导的 $W(R)$ 自同态。
:::

::: proof
先证 $V_p(1)=p$。为此只需考虑万有情形即 $R=\mathbb{F}_p$。
此时相当于证明 $p\in W(\mathbb{Z})$ 的各分量 $p_n$ 满足
$$
p_n\equiv\begin{cases}
  1\pmod{p},&n=p;\\
  0\pmod{p},&n\ne p.
\end{cases}
$$
对 $n$ 归纳。由 $p^{(n)}=p$ 知
$$
np_n=p-\sum_{d\mid n,\,d<n}dp_d^{n/d}.
$$
如 $p\nmid n$，由归纳假设易知上式模 $p$ 余 $0$，从而
$p_n$ 亦然。如 $p\mid n$，设 $n=pm$。如 $m=1$，
$n=p$，上式给出 $p_p=1-p^{p-1}\equiv1\pmod{p}$。
如 $m>1$，考虑上式右边各项。$d\ne p$ 时 $p_d\equiv0
  \pmod{p}$，
$$
v_p(dp_d^{n/d})=v_p(d)+\frac{n}{d}v_p(p_d)\ge
v_p(d)+\frac{n}{d}>
v_p(d)+v_p\left(\frac{n}{d}\right)=v_p(n);
$$
$d=p$ 时 $p_p\equiv1\pmod{p}$，
$$
v_p(p-pp_p^{n/p})=1+v_p(1-p_p^{n/p})\ge
1+1+v_p\left(\frac{n}{p}\right)=1+v_p(n)>v_p(n);
$$
所以 $v_p(np_n)>v_p(n)$，$p_n\equiv0\pmod{p}$。

于是由 @F性质 便有 $V_p(F_p(a))=V_p(1)a=pa
  =F_p(V_p(a))$。欲证后一句话，只需验证 @F构造
中的多项式列满足 $F_{p,i}\equiv x_i^p\pmod{p}$。
由于 $p\mathbb{Z}=(1-\zeta_p)\mathbb{Z}[\zeta_p]\cap\mathbb{Z}$，只需验证
$$
\prod_{m=1}^pf_x(\zeta_p^mt)\equiv\prod_{i\in\mathbb{Z}_+}
(1-x_i^pt^{pi})\pmod{1-\zeta_p}.
$$
这是显然的，因为模 $1-\zeta_p$ 之后左边就是 $f_x(t)^p$，
也就是 $\prod_{i\in\mathbb{Z}_+}(1-x_it^i)^p$，自然同余于
$\prod_{i\in\mathbb{Z}_+}(1-x_i^pt^{pi})$。
:::

### Teichmüller 代表元

Teichmüller 代表元是投影映射 $W(R)\to R$ 的一个右逆，
乘性但不加性。

::: definition [Teichmüller 代表元]
对环 $R$，$a\in R$ 在 $W(R)$ 中的 Teichmüller 代表元，
记作 $[a]$，指的是元素
$$
(a,0,0,\ldots)\in W(R).
$$
对关于整除封闭的子集 $N\subseteq\mathbb{Z}_+$，该元素在
$W_N(R)$ 的像也称为 Teichmüller 代表元，记作 $[a]$
或 $[a]_N$。
:::

::: proposition
$a\mapsto[a]$ 是 $R$ 到 $W(R)$ 的乘法[[幺半群]]同态。
:::

::: proof
显然 $[1]=1$。为证 $[ab]=[a][b]$，只需考虑万有情形，
即 $R=\mathbb{Z}[x,y]$ 为多项式环，验证多项式等式 $[xy]=[x][y]$。
此时由于 Witt 环函子保持单射，可在有理系数下验证，
这样只需证 $[xy]^{(n)}=[x]^{(n)}[y]^{(n)}$。
直接计算容易发现两边都是 $x^ny^n$。
:::

Witt 环中的元素可用 Teichmüller 代表元和移位映射组合出来。

::: proposition
设 $N\subseteq\mathbb{Z}_+$ 是对整除封闭的有限子集。则对任一
$w\in W_N(R)$，存在唯一 $(a_n)_{n\in N}\in R^N$ 使得
$$
w=\sum_{n\in N}V_n[a_n].
$$
$N$ 无限时，把上式右边理解为在乘积拓扑下收敛，也有同样的事情。
:::

::: proof
注意对 $n\notin N$ 及 $a\in R$，$V_n[a]$ 在 $W_N(R)$
中的像是 $0$。由此不难发现 $N$ 无限的情形是有限情形的推论。
下设 $N$ 有限。

对 $|N|$ 归纳。$|N|=0$ 时不用证。$|N|>0$ 时记 $n=\max N$，
$N'=N\setminus n$，则 $N'$ 对整除封闭。对 $w\in W_N(R)$，
要说明使
$$
w=\sum_{i\in N}V_i[a_i]
$$
的元素组 $(a_i)_{i\in N}$ 存在唯一。由归纳假设，使两边在
$W_{N'}(R)$ 的投影相等的 $(a_i)_{i\in N'}$ 存在唯一。
尚需证明 $a_n$ 也存在唯一。两边减去前述
$\sum_{i\in N'}V_i[a_i]$，右边剩下 $V_n[a_n]$，
左边是个在 $W_{N'}(R)$ 投影为 $0$ 的 $W_N(R)$ 中元素。
于是 $a_n$ 显然存在唯一，必须是该元素的第 $n$ 个坐标。
:::

## 几何性质

本节是一些[[代数几何]]性质。首先给出 Witt 环的一种逐次的构造方法。

::: proposition {@拉回构造}
设子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n\in N$，
满足 $N'=N\setminus n$ 仍关于整除封闭。则对任一环
$R$ 有[[生象环]]拉回图表
\[
\begin{tikzcd}
  W_N(R)\ar[r]\ar[d]&R\ar[d]\\
  W_{N'}(R)\ar[r]&R\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
其中纵向箭头是自然投影，横向箭头是取第 $n$ 个幽灵分量，
即 $a\mapsto\sum_{d\mid n}da_d^{n/d}$。
:::

::: proof
考虑交换图
\[
\begin{tikzcd}
  R\ar[r,equal]\ar[d,"V_n"']&R\ar[d,"n"]\\
  W_N(R)\ar[r]\ar[d]&R\ar[d]\\
  W_{N'}(R)\ar[r]&R\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
其左右两列都是纤维列，所以下半方块是链复形拉回图表，
从而也是生象环拉回图表。
:::

::: proposition [局部化] {@局部化}
设子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭且有限，$R$
是环，$S\subseteq R$ 是[[乘性子集]]。记 $S$ 中元素的
Teichmüller 代表元之集为 $[S]$，则它也是乘性子集。
此时有 $W_N(S^{-1}R)=[S]^{-1}W_N(R)$。
:::

::: proof
显然有自然映射 $[S]^{-1}W_N(R)\to W_N(S^{-1}R)$，
要证它是同构。对 $|N|$ 归纳。$|N|=0$ 时这些环都是 $0$。
$|N|>0$ 时取 $n=\max N$，记 $N'=N\setminus n$，
由归纳假设 $W_{N'}(S^{-1}R)=[S]^{-1}W_{N'}(R)$。
由 @拉回构造，只需证
\[
\begin{tikzcd}
  {[S]^{-1}W_N(R)}\ar[r]\ar[d]&S^{-1}R\ar[d]\\
  {[S]^{-1}W_{N'}(R)}\ar[r]&S^{-1}R\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
是拉回图表。这是因为它是 $W(R)$-模拉回图表
\[
\begin{tikzcd}
  W_N(R)\ar[r]\ar[d]&R\ar[d]\\
  W_{N'}(R)\ar[r]&R\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
的 $[S]$-局部化，局部化是正合的。
:::

接下来研究与[[平展映射]]相关的几何性质。

::: lemma {@整满射}
设子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n\in N$，
满足 $N'=N\setminus n$ 仍关于整除封闭。则对任一环 $R$，
$W_N(R)$ 到 $R$ 的映射 $a\mapsto a^{(n)}$ 是[[整同态]]，
且如 $a\in W_N(R)$ 满足 $a^{(n)}=0$ 且 $a$ 在
$W_{N'}(R)$ 的投影也是 $0$，则 $a^2=na=0$。
:::

::: proof
注意对 $r\in R$ 有 $r^n=[r]^{(n)}$，可得整性。
如 $a\in W_N(R)$ 在 $W_{N'}(R)$ 的投影是 $0$，
则 $a=V_n(a_n)$，$a^{(n)}=na_n$。注意条件表明
$N/n=\{1\}$，所以 $V_n$ 是 $R=W_1(R)$ 到 $W_N(R)$
的加性映射。现如 $a^{(n)}=0$，则由 $V$ 的性质知
$na=nV_n(a_n)=V_n(na_n)=V_n(0)=0$，
$a^2=V_n(a_n)^2=nV_n(a_n^2)=V_n(na_n^2)=V_n(0)=0$。
:::

::: remark
固定素数 $p$，考虑 $p$-Witt 环。在 @整满射
中令 $N=\{1,p\}$，$n=p$，$R=\mathbb{F}_p[x]$，
$a=(0,x)\in W_2(R)$，知 $a^2=pa=0$。而对
$b=(b_0,b_1)\in W_2(R)$，
$pb=(0,1)(b_0,b_1)=(0,b_0^p)$；由此可见
$a\notin pW_2(R)$。从而虽然 $\mathbb{F}_p[x]$
在 $\mathbb{F}_p$ 上[[光滑同态|光滑]]，但是
$W_2(\mathbb{F}_p[x])$ 在 $W_2(\mathbb{F}_p)=\mathbb{Z}/p^2$
上甚至不[[平坦同态|平坦]]。
:::

::: lemma {@幽灵推出}
@拉回构造 中图表诱导的映射
$W_{N'}(R)\otimes_{W_N(R)}R\to R/nR$ 是同构。
:::

注意该引理并不导出。

::: proof
由 $W_{N'}(R)=W_N(R)/V_n[R]$ 以及映射
$W_N(R)\to R$ 是幽灵分量 $a\mapsto a^{(n)}$，有
$$
W_{N'}(R)\otimes_{W_N(R)}R=R/V_n[R]^{(n)}=R/nR,
$$
因为对 $r\in R$，$V_n[r]^{(n)}=nr$。
:::

::: lemma {@幽灵对角线}
设子集 $N\subseteq\mathbb{Z}_+$ 关于整除封闭，$n\in N$。
以幽灵分量映射 $a\mapsto a^{(n)}$ 将 $R$ 视为
$W_N(R)$-代数。则对角线理想
$\ker(R\otimes_{W_N(R)}R\to R)$ [[局部幂零理想|局部幂零]]。
:::

::: proof
只需证其一组生成元幂零，即对 $r\in R$ 证
$r\otimes1-1\otimes r$ 幂零。事实上可以证明
$(r\otimes1-1\otimes r)^n=0$。为此只需对任一不超过
$n$ 的自然数 $j$ 证明 $\binom{n}{j}r^j\in
  \operatorname{im}(W_N(R)\to R)$，因为这样就有
$$
(r\otimes1-1\otimes r)^n=\sum_{j=0}^n
(-1)^j\binom{n}{j}r^j\otimes r^{n-j}=1\otimes
\sum_{j=0}^n(-1)^j\binom{n}{j}r^n=0.
$$
记 $n$ 和 $j$ 的最大公约数为 $d$，则只需证
$\frac{n}{d}\mid\binom{n}{j}$，因为
$V_{n/d}[r^{j/d}]^{(n)}=\frac{n}{d}r^j$。
注意 $\binom{n}{j}$ 和
$\binom{n-1}{j-1}=\frac{j}{n}\binom{n}{j}$ 都是整数，
由 [[Bézout 引理]]易知 $\frac{d}{n}\binom{n}{j}$
也是整数，即 $\frac{n}{d}\mid\binom{n}{j}$。
:::

::: proposition {@粘合}
对环 $R$ 以 $\mathsf{Ét}(R)$ 记 $R$ 上[[平展代数]]的范畴。
则 @拉回构造 中图表诱导范畴的拉回图表
\[
\begin{tikzcd}
  \textsf{Ét}(W_N(R))\ar[r]\ar[d]&\textsf{Ét}(R)\ar[d]\\
  \textsf{Ét}(W_{N'}(R))\ar[r]&\textsf{Ét}(R\otimes^L_\mathbb{Z}\mathbb{Z}/n)
\end{tikzcd}
\]
:::

::: proof
首先 $\mathsf{Ét}(R\otimes^L_\mathbb{Z}\mathbb{Z}/n)\cong\mathsf{Ét}(R/nR)$。
由 @整满射，图表上方和左边箭头合起来得到的映射
$W_N(R)\to W_{N'}(R)\times R$ 是[[整同态]]，且在谱上是满射，
于是平展代数可沿该映射[[下降]]。由投影映射
$W_N(R)\to W_{N'}(R)$ 是满射，
$W_{N'}(R)\otimes_{W_N(R)}W_{N'}(R)=W_{N'}(R)$；
由 @幽灵对角线，$R\otimes_{W_N(R)}R\to R$
诱导平展代数范畴的同构；所以在映射
$W_N(R)\to W_{N'}(R)\times R$ 的下降数据中，
$W_{N'}(R)\otimes_{W_N(R)}W_{N'}(R)$
和 $R\otimes_{W_N(R)}R$ 两部分都为平凡。又由 @幽灵推出，$W_{N'}(R)\otimes_{W_N(R)}R=R/nR$，
即这一部分的下降数据是两个平展代数在 $R/nR$ 上等同。
合起来即得结论。
:::

::: theorem
设子集 $N'\subseteq N\subseteq\mathbb{Z}_+$ 都有限且关于整除封闭，
$R\to S$ 是[[平展同态]]，$R\to R'$ 是环同态，
记 $S'=S\otimes_RR'$。则

- $W_N(R)\to W_N(S)$ 平展。

- $W_{N'}(S)=W_N(S)\otimes_{W_N(R)}W_{N'}(R)$。

- 按幽灵分量映射把 $R$ 和 $S$ 分别视为
  $W_N(R)$ 和 $W_N(S)$ 上的代数，也有
  $S=W_N(S)\otimes_{W_N(R)}R$。

- $W_N(S')=W_N(S)\otimes_{W_N(R)}W_N(R')$。

:::

::: proof
对 $|N|$ 归纳。$|N|=0,1$ 时平凡。用归纳假设可设 $|N|-|N'|=1$，
$N=N'\sqcup\{n\}$。由归纳假设，$W_{N'}(R)\to W_{N'}(S)$
平展。对 $W_{N'}(S)$、$S$、$S/nS$ 用 @粘合，
可得平展 $W_N(R)$-代数 $B$，沿投影映射和幽灵分量基变换分别为
$W_{N'}(S)$ 与 $S$。由 @拉回构造，交换图
\[
\begin{tikzcd}
  B\ar[r]\ar[d]&S\ar[d]\\
  W_{N'}(S)\ar[r]&S\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
给出 $W_N(R)$-代数同态 $B\to W_N(S)$。将 $W_N(R)$-模短正合列
$$
0\to R\to W_N(R)\to W_{N'}(R)\to0
$$
基变换到 $B$，由 $B\otimes_{W_N(R)}R=
  B\otimes_{W_N(R)}W_{N'}(R)\otimes_{W_{N'}(R)}R=
  W_{N'}(S)\otimes_{W_{N'}(R)}R=S$ 得短正合列
$$
0\to S\to B\to W_{N'}(S)\to0
$$
于是同态 $B\to W_N(S)$ 为同构。这样就有
$W_N(R)\to W_N(S)$ 平展，且
$W_{N'}(S)=W_N(S)\otimes_{W_N(R)}W_{N'}(R)$，
沿幽灵分量映射也有 $S=W_N(S)\otimes_{W_N(R)}R$。

现将拉回图表
\[
\begin{tikzcd}
  W_N(R')\ar[r]\ar[d]&R'\ar[d]\\
  W_{N'}(R')\ar[r]&R'\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
作基变换 $W_N(S)\otimes_{W_N(R)}-$，
由上一段所证以及归纳假设知
\[
\begin{tikzcd}
  W_N(S)\otimes_{W_N(R)}W_N(R')\ar[r]\ar[d]&S'\ar[d]\\
  W_{N'}(S')\ar[r]&S'\otimes^L_\mathbb{Z}\mathbb{Z}/n
\end{tikzcd}
\]
也是拉回图表，从而
$W_N(S')=W_N(S)\otimes_{W_N(R)}W_N(R')$。
:::

## 与形变理论的关系

本节固定素数 $p$，Witt 环指的是 $p$-Witt 环。

在环 $R$ 为特征 $p$ [[完美环|完美]]时，其 Witt 环结构简单，
亦可用[[形变理论]]作出。下面的定理亦可当作 $R$ 完美时
Witt 环的定义，它不依赖于前面繁杂的具体计算。

::: theorem
设 $R$ 为特征 $p$ 完美环。则 $W(R)$ 是满足 $W(R)/p=R$
的唯一 $p$-完备、$p$-无挠环，且对任一 $p$-完备环 $A$，
使图表
\[
\begin{tikzcd}
  W(R)\ar[r,dashed]\ar[d]&A\ar[d]\\
  R\ar[r]&(A/p)_\text{red}
\end{tikzcd}
\]
交换的虚线箭头存在唯一。
:::

::: proof
先证存在唯一 $p$-完备 $p$-无挠环 $W$ 满足 $W/p=R$。
考虑[[余切复形]] $L_{R/\mathbb{F}_p}$。
由余切复形的性质，Frobenius 同态在其上诱导映射为 $0$；
而 $R$ 完美，Frobenius 是同构；于是
$L_{R/\mathbb{F}_p}=0$。注意 $\mathbb{F}_p$ 是域，
$R$ 在 $\mathbb{F}_p$ 上平坦。
现由[[形变理论]]便知对任一[[加厚]] $T\to\mathbb{F}_p$，
存在唯一平坦 $T$-代数 $R_T$ 满足
$R_T\otimes_T\mathbb{F}_p=R$。记 $R_n=R_{\mathbb{Z}/p^n}$，
不难发现 $W=\lim_nR_n$ 满足要求，且 $W/p^n=R_n$；
由完备性以及上一句话的唯一性可知 $W$ 唯一。

再证这样的 $W$ 满足定理后半句。由完备性只需证对任一正整数 $n$，
使图表
\[
\begin{tikzcd}
  R_n\ar[r,dashed]\ar[d]&A/p^n\ar[d]\\
  R\ar[r]&(A/p)_\text{red}
\end{tikzcd}
\]
交换的虚线箭头存在唯一。由余切复形的基变换，
$L_{R_n/(\mathbb{Z}/p^n)}\otimes_{\mathbb{Z}/p^n}^L\mathbb{F}_p
  =L_{R/\mathbb{F}_p}=0$，从而由 [[Nakayama 引理]]
$L_{R_n/(\mathbb{Z}/p^n)}=0$，特别地 $R_n$ 在 $\mathbb{Z}/p^n$
上[[形式平展]]。而 $A/p^n\to(A/p)_\text{red}$
是加厚，故使图表
\[
\begin{tikzcd}
  \mathbb{Z}/p^n\ar[r]\ar[d]&A/p^n\ar[d]\\
  R_n\ar[r]\ar[ur,dashed]&(A/p)_\text{red}
\end{tikzcd}
\]
交换的虚线箭头存在唯一，此即欲证。

最后证 $W(R)$ 为 $p$-完备、$p$-无挠且 $W(R)/p=R$。
由 @Fp代数，对 $n\in\mathbb{N}$，$a\in W(R)$ 有
$V^n(F^n(a))=p^na$，且 $F$ 是 $W(R)$ 的自同构。
由此可见 $V^nW(R)=p^nW(R)$，于是首先 $W(R)$ 为 $p$-完备，
其次由 $V$ 是单射亦知 $W(R)$ 为 $p$-无挠，最后
$W(R)/p=W(R)/VW(R)=R$。
:::

## 与 $\delta$-环的关系

本节固定素数 $p$，Witt 环指的是 $p$-Witt 环。

::: theorem
$W(R)$ 有对 $R$ 函子性的 [[$\delta$-环]]结构，使得
$R\mapsto W(R)$ 是 $\delta$-环范畴到环范畴的忘却函子的右伴随。
其 Frobenius 映射 $F$ 正是 $\delta$-环的自同态 $\varphi$。
:::

::: remark
于是 $W(R)$ 的自同态 $F$ 是 $W(R)/p$ 的
[[Frobenius 同态]]的提升。这也解释了它为什么叫 Frobenius。
:::

## 与 $\lambda$-环的关系

本节 Witt 环指的是大 Witt 环。

::: theorem
$W(R)$ 有对 $R$ 函子性的 [[lambda-环|$\lambda$-环]]结构，使得
$R\mapsto W(R)$ 是 $\lambda$-环范畴到环范畴的忘却函子的右伴随。
:::

## 应用

## 推广

```terms
Witt 环:
  en: Witt ring
  de: Witt-Ring
  fr: anneau de Witt
幽灵分量:
  en: ghost component
  de: Geisterkomponente
  fr: composante fantôme
```
