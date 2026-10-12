---
title: Schneider–Lang 定理
aliases: [Schneider-Lang 定理]
categories: [超越数论]
---

Schneider–Lang 定理是[[超越数论]]中关于亚纯函数有理点个数的定理。
它由 [[Theodor Schneider]] 于 1949 年证明，被 [[Serge Lang]]
于 1966 年加强。该定理可以推出与[[指数函数]]、
[[模函数]]相关的若干超越性结论。

## 陈述

::: theorem {@thm:schneider-lang}
存在常数 $C>0$ 使得以下命题成立：

设 $K$ 为[[数域]]，$f_1,\ldots,f_N$ 为 $\mathbb{C}$ 上[[亚纯函数]]，
[[整函数的阶|阶]]不超过 $\rho$，满足 $\operatorname{tr.deg}K(f_1,\ldots,f_N)/K>1$，
且 $f_1',\ldots,f_N'$ 都可写成 $f_1,\ldots,f_N$ 的
$K$ 系数多项式，即环 $K[f_1,\ldots,f_N]$ 被 $\frac{d}{dz}$
保持。设 $w_1,\ldots,w_m\in\mathbb{C}$ 不是 $f_1,\ldots,f_N$
的极点，且 $\{f_i(w_j)\}_{1\le i\le N,1\le j\le m}\subseteq K$。
则 $m\le C\rho[K:\mathbb{Q}]$。
:::

::: remark
可以做到 $C=2$，但意义不大。
:::

## 证明

首先观察数个引理。最为标准的是：

::: lemma [Siegel] {@lem:siegel}
考察整系数$a_{ij}$的线性方程组：
\[
\begin{aligned}
  \left\{\begin{array}{c}
    a_{11}x_1+\cdots+a_{1n}x_n=0,\\
    \vdots\\
    a_{r1}x_1+\cdots+a_{rn}x_n=0,
  \end{array}\right.
\end{aligned}
\]
其中$n>r$。设一致的界$|a_{ij}|\le A$，那么存在不全零的整数解$(x_1,\ldots,x_n)$符合一致的控制
\[
|x_j|\le \lceil(nA)^{r/(n-r)}\rceil.
\]
:::

::: proof
方程的解属于对应的线性映射$L:\mathbb Z^n\to\mathbb Z^r$的核。
考虑$[-B,B]^n$的像，只要$(2B)^n\ge(2nBA)^r$就有$(2B+1)^n>(2nBA+1)^r$，由[[抽屉原理]]，
此时必然有两个不同的点具有相同的像，从而它们的差符合条件，取$2B=\lceil(nA)^{r/(n-r)}\rceil$。
:::

现在设$K$是$\mathbb Q$的有限扩张，$d:=[K:\mathbb Q]$。
记[[代数整数|代数整数环]]$\mathcal O_K$，熟知它是$\mathbb Z$的$d$秩[[自由模]]。
下文中，对一个$K$中元素，它的**大小**指的是它在$K\subset\mathbb C$的全体嵌入下，绝对值的最大值；
而一族元素的大小指其中最大者的大小。

我们给出 Siegel 引理的代数数域版本：

::: lemma {@lem:siegel-数域}
延续先前记号，考虑线性方程组：
\[
\begin{aligned}
  \left\{\begin{array}{c}
    \alpha_{11}x_1+\cdots+\alpha_{1n}x_n=0,\\
    \vdots\\
    \alpha_{r1}x_1+\cdots+\alpha_{rn}x_n=0,
  \end{array}\right.
\end{aligned}
\]
此时$\alpha_{ij}\in\mathcal O_K$，$n>r$且全体$\alpha_{ij}$的大小被$A$控制，
则存在$\mathcal O_K$中的非平凡解$(x_1,\cdots,x_n)$，诸$x_i$大小被$C_1(C_2nA)^{r/(n-r)}$控制，
其中$C_1,C_2$是只与$K$有关的常数。
:::

::: proof
设$\omega_1,\cdots,\omega_d$是$\mathcal O_K$在$\mathbb Z$上一组基。
将$\mathcal O_K$中的元素写成线性组合后，
原方程成为整系数的$dn$个变量的$dr$条方程。
注意到大小符合绝对值不等式，简单的控制结合 @lem:siegel 即可得证。
:::

对于$\mathbb C[T_1,\cdots,T_n]$中的多项式$P$，
若一个$\mathbb R[T_1,\cdots,T_n]$的多项式$Q$
在每个单项$T_1^{\alpha_1}\cdots T_n^{\alpha_n}$的系数都不小于$P$对应系数的绝对值，
则称$Q$**控制**$P$。
另外对于代数数$\alpha\in K$的一个分母，我们指一个正整数$b$，使得$b\alpha\in\mathcal O_K$。

::: lemma {@lem:导数}
延续先前记号，$f_1,\cdots,f_N$在一个点$w\in\mathbb C$的[[邻域]]中[[全纯函数|全纯]]，
且$K[f_1,\cdots,f_N]$被$D=\frac{d}{dz}$保持，若诸$f_i(w)\in K$，
则存在只与$K,w,f_i$有关的常数$C_1$使：
对次数不超过$r$的$P\in K[T_1,\cdots,T_N]$，若$f=P(f_1,\cdots,f_N)$，则对一切正整数$k$，
$D^kf(w)$的大小不超过$P$系数大小的$r^kk!C_1^{k+r}$倍。
进一步，$D^kf(w)$的分母不超过$P$的系数公分母的$C_1^{k+r}$倍。
:::

::: proof
依条件设$P_i\in K[T_1,\cdots,T_N]$使$Df_i=P_i(f_1,\cdots,f_N)$，用$h$记$P_i$们次数的最大值。
于是定义$K[T_1,\cdots,T_N]$上的求导算子$\overline D$使$\overline DT_i=P_i$。
这样对一般的$P\in K[T_1,\cdots,T_N]$，我们计算得到
\[
\overline DP(T_1,\cdots,T_N)=\sum_{i=1}^N(D_iP)\cdot P_i.
\]
其中$D_i$是普通的对$T_i$求偏导，这样一来$P$被$P$的系数大小乘上$(1+T_1+\cdots+T_N)^r$控制，
而$P_i$皆被$P_i$的系数大小乘上$(1+T_1+\cdots+T_N)^h$控制，于是$\overline DP$被
$P$的系数大小乘上$C_2r(1+T_1+\cdots+T_N)^{r+h}$控制。
归纳地，$\overline D^kP$被$P$的系数大小乘上$C_3^kr^kk!(1+T_1+\cdots+T_N)^{r+kh}$控制。
同样的方法能计算分母对应的界。
:::

::: proof [@thm:schneider-lang 的证明]
由定理条件设$f,g$是$f_1,\cdots,f_N$的两个代数无关的多项式。待定$r$，设
\[
F:=\sum_{i,j=1}^rb_{ij}f^ig^j.
\]
其是涉及$r^2$个待定$\mathcal O_K$中系数的多项式，现要求$2m|r$，设$n=r^2/2m$。
于是根据 @lem:siegel-数域，
可选择$b_{ij}$不全为$0$使$D^kF(w_v)=0$对$k=0,1,\cdots,n-1;\ v=1,\cdots m$成立。
通分后这对应了$mn=r^2/2$个方程，因此可以用$O(r^nn!C_1^{n+r})\le O(n^{2n})$控制一个解。

由$f,g$的代数无关性知$F$不恒为$0$，
不妨设$D^kF(w_v)=0$对$k=0,1,\cdots,s-1;\ v=1,\cdots,m$但$\gamma=D^sF(w_1)\ne0$，其中$s\ge n$。
于是$\gamma\in K$，且分母$c$被$O(C_1^s)$控制。于是计算$c\gamma$的[[范数]]得到不等式
$1\le \operatorname N_{K/\mathbb Q}(c\gamma)\le O(s^{2s})^{d-1}|\gamma|$。
但另外一方面设$\theta$是阶不超$\rho$的整函数，
使得$\theta f,\theta g$整。
于是$\theta(z)^{2r}F$整，进而$H(z):=\theta(z)^{2r}F(z)/\prod_{v=1}^m(z-w_v)^s$整。
而$H(w_1)$仅与$D^sF(w_1)$差一个被$C_4^ss!$控制的系数。

现在根据[[最大模原理]]，取半径$R=s^{1/(2\rho)}$得到对充分大的$s$有
\[
\frac{C_6}{s^{2s(d-1)}}\le |\gamma|\le\frac{s^{s}C_5^s}{s^{ms/2\rho}}.
\]
于是令$r\to+\infty$，得$s\to+\infty$于是$ms/2\rho\le 2sd$，原命题对$C=4$得证。
:::

## 推论

::: corollary [Hermite–Lindemann]
如果 $\alpha\in\mathbb{C}$ 是非零[[代数数]]，那么
$\exp(\alpha)$ 就是[[超越数]]。特别地，[[$\mathrm{e}$]] 和 [[$\pi$]]
都是超越数。
:::

::: proof
如果 $\alpha$ 与 $\exp(\alpha)$ 都是代数数，设数域 $K$
包含它们。定理中的函数取为 $z$ 与 $\exp(z)$，
显然满足条件，故定理表明只有有限个复数 $w$ 满足
$w$ 与 $\exp(w)$ 都属于 $K$。
但对任意 $n\in\mathbb{Z}$，$n\alpha,\exp(n\alpha)\in K$，
这与定理矛盾！故 $\alpha$ 与 $\exp(\alpha)$ 不能都是代数数。

取 $\alpha=1$ 知 $e$ 是超越数。取 $\alpha=2\pi i$ 知
$2\pi i$ 是超越数，从而 $\pi$ 是超越数。
:::

::: corollary [Gelfond–Schneider]
如果 $\alpha,\beta\in\mathbb{C}$ 是代数数，$\alpha\notin\{0,1\}$，
$\beta\notin\mathbb{Q}$，那么 $\alpha^\beta$ 的每一个取值都是超越数。特别地，
如果 $\beta$ 与 $\exp(2\pi i\beta)$ 都是代数数，
那么 $\beta$ 就是有理数。
:::

::: proof
反证法，如 $\alpha^\beta$ 某个取值是代数数，设数域 $K$
包含 $\alpha$、$\beta$ 以及该值。定理中的函数取为
$\exp(z)$ 与 $\exp(\beta z)$，显然满足条件。
但对任意 $n\in\mathbb{Z}$，以上两函数在 $n\log(\alpha)$ 处的值都属于 $K$，
矛盾。

取 $\alpha=-1$ 知如果 $\beta$ 是无理代数数，那么
$\exp(2\pi i\beta)$ 就是超越数。
:::

::: corollary [Schneider–Siegel]
以 $\mathbb{H}$ 记上半平面，$j$ 记 [[j 不变量|$j$ 不变量]]，
设 $\tau\in\mathbb{H}$。如果 $\tau$ 与 $j(\tau)$ 都是代数数，
那么 $\tau$ 就是二次代数数。
:::

::: proof
由于 $j(\tau)$ 是代数数，可取适当的 $a\in\mathbb{C}^\times$，
使得格点 $\mathbb{Z} a+\mathbb{Z} a\tau$ 的 [[Weierstraß p 函数|Weierstraß $\wp$ 函数]]满足的方程
$$
\wp'^2=4\wp^3-g_2\wp-g_3
$$
中，$g_2$ 与 $g_3$ 都是代数数，即 $(\wp,\wp')$ 的像构成定义在
$\overline{\mathbb{Q}}$ 上的椭圆曲线。此椭圆曲线的挠点坐标自然也在
$\overline{\mathbb{Q}}$ 上，
即 $\wp(a/2),\wp'(a/2),\wp(a\tau/2),\wp'(a\tau/2)\in\overline{\mathbb{Q}}$。
现在在定理中将 $K$ 取为包含 $\tau,g_2,g_3,\wp(a/2),\wp'(a/2),\wp(a\tau/2),\wp'(a\tau/2)$ 的数域，
将函数取为 $\wp(z),\wp'(z),\wp(\tau z),\wp'(\tau z)$。
则由于 $\tau$ 代数以及
$$
\wp''=6\wp^2-\frac{1}{2}g_2
$$
不难发现，只要 $\wp(z)$ 与 $\wp(\tau z)$
代数无关，这样选取就满足定理条件。然而对所有 $n\in\mathbb{Z}$，
这些函数在 $\left(n+\frac{1}{2}\right)a$ 的取值都属于 $K$，与定理相违！
故定理条件不能满足，$\wp(z)$ 与 $\wp(\tau z)$ 代数相关。
现如 $\tau$ 不是二次代数数，则 $\wp(z)$ 与 $\wp(\tau z)$
的周期不可公度，就会存在一列复数 $w_n$，$\wp(z)$ 在其上取值相同而
$\wp(\tau z)$ 在其上取无穷多个不同值，二者就不能代数相关。
故 $\tau$ 是二次代数数。
:::

## 推广

[[Bombieri–Lang 定理]]将其推广到了多变量亚纯函数情形。
对于实解析或更一般的 [[o-极小]]可定义函数，
虽不能得到有理点只有有限个，但有 [[Pila–Wilkie 定理]]说明它不是很多。

```terms
Schneider–Lang 定理:
  en: Schneider–Lang theorem
  de: Satz von Schneider–Lang
  fr: théorème de Schneider–Lang
```
