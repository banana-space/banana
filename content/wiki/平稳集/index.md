---
title: 平稳集
categories: [集合论]
---

平稳集相对于闭无界集就像是脱殊集相对于稠密集一样。它是一种相对大，但不是很大的集合。

## 定义

::: definition
给定不可数正则基数$\kappa$，若$S\subseteq\kappa$与每一个闭无界集$C\subseteq\kappa$都相交，
则称$S$是一个平稳集，这一性质记为$\mathrm{STAT}_{\kappa}(S)$。
:::

## 性质

最初的平稳集相关的定理几乎都是从以下定理中得到的。

::: definition
对$S\subseteq\mathbf{Ord}$上的函数$f:S\to\mathbf{Ord}$，若$\forall\alpha\in S(f(\alpha)<\alpha)$，
则称$f$是累退的。
:::

::: theorem [Fodor]
对$\kappa$上的平稳集$S$上的累退函数$f$，
一定有$\gamma\in\kappa$和更小的平稳集$T\subseteq S$使得$f$在$T$上是常值$\gamma$的函数。
:::

::: proof
反证，如果对每个$\gamma\in\kappa$都有$T_\gamma=\{\alpha\in S|f(\alpha)=\gamma\}$并非平稳集，
选择公理给我们一个与$T_\gamma$不交的闭无界集$C_\gamma$。
我们做新的闭无界集$C=\Delta_{\gamma\in\kappa}C_\gamma$，然后取$\alpha\in S\cap C$。
由定义，$\forall\beta<\alpha(\alpha\in C_\beta)$，于是$f(\alpha)\not=\beta$，
这指出$f(\alpha)\geq\alpha$，与$f$累退矛盾。
:::

然而，Solovay的惊人定理告诉我们，其实每个平稳集之中都可以拆出$\kappa$个不交的平稳集，
从而平稳集事实上是非常多的，这与脱殊集有所不同。我们先来看一些典范的平稳集。

::: definition
对正则基数$\lambda<\kappa$，我们记$S_\lambda^\kappa=\{\alpha<\kappa|\mathrm{cf}\alpha=\lambda\}$。
:::

::: theorem
$S_\lambda^\kappa$总是平稳集。
:::

::: proof
任给闭无界集$C$，由无界知$\mathrm{Type}(C,\in)=\kappa$，故可以取其前$\lambda$项的上确界，
它就是所要的共尾数为$\lambda$的$C$中的序数。
:::

我们先来对这些典范的平稳集证明Solovay发现的性质，这被称作平稳集的分裂性质。

::: theorem
包含于$S_\lambda^\kappa$的平稳集一定包含$\kappa$个两两不交的平稳集。
:::

::: proof
假定平稳集$S\subseteq S_\lambda^\kappa$，由定义，
我们可以对每个$\alpha\in S$选取一个长度为$\lambda$的单增共尾列$a_\beta^\alpha(\beta\in\lambda)$。
我们来试着用Fodor定理造$\kappa$个平稳集。

我们先来证明
$\exists\beta\forall \eta<\kappa(\mathrm{STAT}(\{\alpha\in S|\eta\leq a_\beta^\alpha\}))$。
反证，
我们会得到一列$\eta_\beta\in\kappa$和无界闭集$C_\beta$满足
$\forall\alpha\in C_\beta\cap S(a_\beta^\alpha<\eta_\beta)$。
取$\eta=\lim_{\beta\in\lambda}\eta_\beta\in\kappa$（注意$\kappa$不可数正则）和
$C=\bigcap_{\beta\in\lambda}C_\beta$，
我们就得到$\forall\alpha\in C\cap S\forall\beta\in\lambda(a_\beta^\alpha<\eta)$，矛盾。

现在我们得到了满足所宣称条件的$\beta$，它给出一个累退函数$f(\alpha)=a_\beta^\alpha$。
但我们要对每个$\eta\in\kappa$考虑上文的平稳集$T_\eta=\{\alpha\in S|\eta\leq f(\alpha)\}$，
然后对限制在其上的$f$使用Fodor定理，
得到平稳集$S_\eta\subseteq T_\eta$和$\gamma_\eta\geq\eta$使得$f$在$S_\eta$上取常值$\gamma_\eta$。

显然$\gamma_\eta$不同时对应的$S_\eta$不交，故可以用$\gamma$来对应$S_\gamma$；
由于$\eta$取遍$\kappa$且后者正则，全体$\gamma$必须在$\kappa$中无界，换言之$S_\gamma$有$\kappa$多个，
于是$S$现在分裂出了$\kappa$个$S_\gamma$。
:::

::: corollary
$\mathcal{F}_{\mathrm{CLUB}}$总不是超滤。
:::

::: proof
这是因为我们总可以运用上面的定理得到一对不交的平稳集。
:::

接下来，我们对一般的平稳集证明这个性质。

::: theorem [Solovay]
$\kappa$的平稳集一定包含$\kappa$个两两不交的平稳集。
:::

::: proof
对平稳集$S$，记$S_0$为其中奇异序数的集，$S_1$为其中正则序数的集，由于两个闭无界集的交还是闭无界集，
$S=S_0\cup S_1$指出他俩至少有一个是平稳集。

如果$S_0$平稳，我们对其上的$\mathrm{cf}$使用Fodor定理，
得到一个$\lambda$和一个平稳集$T\subseteq S_0$使得$\alpha\in T\to\mathrm{cf}(\alpha)=\lambda$，
于是$T\subseteq S_\lambda^\kappa$，由上一个定理即得。

如果$S_0$并非平稳，则$S_1$必然平稳。
不妨设$S=S_1$，再由$\kappa$不可数正则不妨设$S$中的$\alpha$都是不可数正则基数。
我们宣称$T=\{\alpha\in S|\neg\mathrm{STAT}_\alpha(S\cap\alpha)\}$是$\kappa$中的平稳集。
事实上，它与每个$\kappa$的闭无界集$C$交于$\mathrm{inf}(S\cap\mathrm{Der}(C))$。

现在，我们对每个$\alpha\in T$选取一个连续单增的序数列$a_\xi^\alpha(\xi\in\alpha)$，
使得$\lim_{\xi\in\alpha}a_\xi^\alpha=\alpha$且$a_\xi^\alpha\not\in T$。
我们又来复刻上一个定理的证明中的操作。

首先断言$\exists\xi\forall\eta<\kappa(\mathrm{STAT}(\{\alpha\in T|a_\xi^\alpha\geq\eta\}))$。
反证，取出$\eta_\xi$和$C_\xi$，取对角交$C=\Delta_{\xi\in\kappa}C_\xi$，
则对任意$\alpha\in C\cap T$均有$\forall\xi\in\alpha(a_\xi^\alpha<\eta_\xi)$。
受此启发，我们取$D=\{\alpha\in C|\forall\xi\in\alpha(\eta_\xi\in\alpha)\}$，它仍然是闭无界集，
所以$D\cap T$仍然是平稳集。
任取其中两个不同序数$\gamma<\alpha$，
$\forall\xi\in\gamma(a_\xi^\alpha<\eta_\xi<\gamma)$指出$a_\gamma^\alpha=\gamma$，
但左边不属于$T$而右边属于$T$，矛盾。

现在我们拿到宣称性质的$\xi$，取累退函数$f(\alpha)=a_\xi^\alpha$。同上证明给出$S_\eta$。
:::
