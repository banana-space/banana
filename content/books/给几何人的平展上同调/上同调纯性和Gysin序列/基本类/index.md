---
title: 基本类
---

在本节假设$S=\operatorname{Spec} k$且$k$可分闭域且$n$和$\mathrm{char}(k)$互素，
概形均为$S$上的光滑概形，
层$\mathscr{F}$均为$\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$-模。依旧考虑余$c$维光滑对如下图
\[
\begin{tikzcd}
  Z & X & U \\
  & S
  \arrow["f", from=1-2, to=2-2]
  \arrow["h"', from=1-1, to=2-2]
  \arrow["g", from=1-3, to=2-2]
  \arrow["i", hook, from=1-1, to=1-2]
  \arrow["j"', hook', from=1-3, to=1-2]
\end{tikzcd}
\]
其中$i$是闭浸入且$j:U:=X\backslash Z\to X$是开浸入。根据上同调纯性和谱序列得到
\[
H^i_{\operatorname{ét}}(Z,R^{2c}i^!\mathscr{F})\cong H^{2c+i}_{Z,\operatorname{ét}}(X,\mathscr{F}).
\]
取$i=0$得到$\Gamma(Z,R^{2c}i^!\mathscr{F})\cong H^{2c}_{Z,\operatorname{ét}}(X,\mathscr{F})$。
定义$\Lambda(r):=\bm{\mu}_n\otimes\cdots\otimes\bm{\mu}_n$，则
我们事实上可以取$s_{Z/X}\in \Gamma(Z,R^{2c}i^!\Lambda(c))$使得其诱导同构
$\Lambda\to H^{2c}_{Z,\operatorname{ét}}(X,\Lambda(c))$，
我们称其为基本类。

::: theorem {@FundamentalClass}
余$c$维光滑对上存在唯一$(Z,X)\mapsto s_{Z/X}$，其中
\[
s_{Z/X}\in \Gamma(Z,R^{2c}i^!\Lambda(c)),
\]
使得

(a)基本类$s_{Z/X}$生成$\Gamma(Z,R^{2c}i^!\Lambda(c))$；

(b)若考虑光滑$S$-对之间的态射$\phi:(Z',X')\to(Z,X)$，则$\phi^*s_{Z/X}=s_{Z'/X'}$；

(c)若有
\[
\begin{tikzcd}
  Z && Y \\
  & X
  \arrow["i"', from=1-1, to=2-2]
  \arrow["v", from=1-1, to=1-3]
  \arrow["u"', from=1-3, to=2-2]
\end{tikzcd}
\]
其中$(Z,Y)$、$(Y,X)$和$(Z,X)$分别是余维数$a,b,c$的光滑$S$-对，
则$s_{Z/Y}\otimes s_{Y/X}=s_{Z/X}$且满足
如下典范同构：
\[
\begin{aligned}
\text{谱序列诱导同构 }\Rightarrow & H^{2a}_{Z,\operatorname{ét}}(Y,R^{2b}u^!\Lambda(c))\cong H^{2c}_{Z,\operatorname{ét}}(X,\Lambda(c));\\
\text{自由诱导同构 }\Rightarrow  & H^{2a}_{Z,\operatorname{ét}}(Y,R^{2b}u^!\Lambda(c))\cong
H^{2a}_{Z,\operatorname{ét}}(Y,\Lambda(a))\otimes H^{2b}_{Y,\operatorname{ét}}(X,\Lambda(b)).
\end{aligned}
\]
:::

::: proof
忽略，证明参考[@Mil80, 定理 VI.6.1]。
:::

::: corollary {@024}
考虑余$c$维光滑对$(Z,X)$，则$T_{Z/X}:=R^{2c}i^!\Lambda$典范同构于$\Lambda(-c)$。
:::

::: proof
将 @FundamentalClass (c) 的第一个同构两边张量$\Lambda(-c)$即可。
:::
