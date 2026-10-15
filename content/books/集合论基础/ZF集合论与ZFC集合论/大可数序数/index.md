---
title: 大可数序数
---
这一节介绍一些简单的大可数序数的构造，更多的内容可参看大数维基。

## Veblen层级

我们回顾一下正规函数的定义。

::: definition
对$f:\omega_1\to\omega_1$，若它满足以下两条件，则称它是正规的：

1. $\alpha<\beta\to f(\alpha)<f(\beta)$

2. $\alpha=\lim_{\gamma<\alpha}\gamma\to f(\alpha)=\lim_{\gamma<\alpha}f(\gamma)$

今后我们默认提到的所有函数都是正规的。
:::

我们先考察单变元的正规函数的增长速度。

::: definition
若$f(\alpha)=\alpha$，则称$\alpha$是$f$的不动点。全体不动点的集合记为$\mathrm{Fix}(f)$。
:::

很容易意识到，它的第一个不动点就刻画了它的某种增长速度的上确界，因为它恰好抹去了$f$在其下方的一切想要快速增长的努力。我们来证明任何正规函数都有很多不动点。

::: theorem
$\mathrm{Fix}(f)$是闭无界集。
:::

::: proof
首先证明闭。若单增不动点列有极限$\lim_{n\in\omega}\alpha_n=\alpha$，则$f(\alpha)=\lim_{n\in\omega}f(\alpha_n)=\lim_{n\in\omega}\alpha_n=\alpha$。然后证明无界。若有$\beta$，则定义$\alpha_0=\beta,\alpha_{n+1}=f(\alpha_n)$，令$\alpha=\lim_{n\in\omega}\alpha_n$，则$f(\alpha)=\lim_{n\in\omega}f(\alpha_n)=\lim_{n\in\omega}\alpha_{n+1}=\lim_{n\in\omega}\alpha_n=\alpha$，因此$\alpha$是大于$\beta$的不动点。
:::

我们特别地记$f$的第一个不动点为$\mathrm{inacc}_1(f)$。显然，由于闭无界集的序型总是$\omega_1$，我们可以来枚举$f$的不动点，这个想法反复迭代就形成了以下定义。

::: theorem [Veblen层级]
任给正规函数$f$，我们如下递归地定义一个新的二元函数：

1. $f(0,-)=f$

2. $f(\beta,-)=\mathrm{Enum}(\bigcap_{\gamma<\beta}\mathrm{Fix}(f(\gamma,-)))$

则对任意的$\beta$，这个$f(\beta,-)$都是正规的。它将称作$f$给出的Veblen层级。
:::

::: proof
这是因为可列个闭无界集的交集总是闭无界集，从而其列举总是正规函数。
:::

我们来讨论这个二元函数到底保持了什么序。

::: theorem
$f(\alpha,\xi)<f(\beta,\zeta)$的充要条件是：

1. $\alpha<\beta$且$\xi<f(\beta,\zeta)$，或

2. $\alpha=\beta$且$\xi<\zeta$，或

3. $\alpha>\beta$且$f(\alpha,\xi)<\zeta$。

:::

::: proof
分类讨论。$\alpha=\beta$显然，余下两情形对偶。$\alpha<\beta$，则$\xi<f(\beta,\zeta)\leftrightarrow f(\alpha,\xi)<f(\alpha,f(\beta,\zeta))=f(\beta,\zeta)$。
:::

自然地，我们会想考虑$f(-,\alpha)$，但它并不总是正规的。幸运的是，我们可以选取一个较好的$\alpha$使得它确实正规。

::: definition
对正规函数$f$，我们称第一个使得$f(\alpha)>\alpha$的$\alpha$为$f$的关键点，记为$\mathrm{crit}(f)$。
:::

::: theorem
$f(-,\mathrm{crit}(f))$是一个正规函数，我们记之为$f^*$。
:::

::: proof
记$\delta=\mathrm{crit}(f)$。显然归纳可证$\forall\alpha<\delta(f(\alpha,\beta)=\beta)$且$\forall\alpha(f(\alpha,\delta)>\delta)$。

为了证明$f(-,\delta)$单调，注意$\alpha<\beta\to f(\alpha,\delta)<f(\alpha,f(\beta,\delta))=f(\beta,\delta)$。为了证明$f(-,\delta)$连续，我们考虑$\gamma=\lim_{\alpha<\gamma}\alpha$和$\beta=\lim_{\alpha<\gamma}f(\alpha,\delta)$，然后试着证明$\beta=f(\gamma,\delta)$。

一方面，$\beta\in\bigcap_{\alpha<\gamma}\mathrm{ran}(f(\alpha,-))=\mathrm{ran}(f(\gamma,-))$，而由$f(\gamma,-)$在$\delta$之下是常函数知$f(\gamma,\delta)$是$\mathrm{ran}(f(\gamma,-))\backslash\delta$的最小元，因此$f(\gamma,\delta)\leq\beta$。

另一方面，$\delta<f(\gamma,\delta)\to f(\alpha,\delta)<f(\alpha,f(\gamma,\delta))=f(\gamma,\delta)$，故$\beta=\lim_{\alpha<\gamma}f(\alpha,\delta)\leq f(\gamma,\delta)$。两方综合即证。
:::

接下来，我们来看下一个序数，它指出经由Veblen层级延拓后的函数增长速度的上确界。

::: definition
我们记$f^*$的第一个不动点为$\mathrm{inacc}_2(f)$。记$f_*=f^*(1,-)$，则$\mathrm{inacc}_2(f)=f_*(0)$。
:::

::: theorem
$f_*(\alpha)$总是极限序数。
:::

::: proof
反证。若有$f_*(\gamma)=\alpha+1$，则$f^*(\alpha+1)=\alpha+1$，即有$f(\alpha+1,\delta)=\alpha+1$，由定义又有$f(\alpha,\alpha+1)=\alpha+1$。由$f(\alpha,\delta)>\alpha$可知$f(\alpha,\delta)\geq\alpha+1=f(\alpha,\alpha+1)$，故有$\alpha+1\leq\delta$，这和$\alpha+1=f(\alpha+1,\delta)>\delta$矛盾。
:::

::: theorem
如果$\alpha,\beta<f_*(\gamma)$，则$f(\alpha,\beta)<f_*(\gamma)$。特别的，$\alpha,\beta<\mathrm{inacc}_2(f)$时总有$f(\alpha,\beta)<\mathrm{inacc}_2(f)$。
:::

::: proof
取$\epsilon=\mathrm{max}(\alpha,\beta)+1$，由$f_*(\gamma)$极限知$\epsilon<f_*(\gamma)$，于是$f(\alpha,\beta)<f(\alpha,f(\beta,\delta))<f(\alpha,f(\epsilon,\delta))=f(\epsilon,\delta)<f(f_*(\gamma),\delta)=f^*(f_*(\gamma))=f_*(\gamma)$。
:::

当然，我们还要说明$\mathrm{inacc}_2(f)$下面的序数都是可达到的。

::: theorem
若$\theta$满足$\mathrm{crit}(f)<\theta<\mathrm{inacc}_2(f)$，则存在$\alpha,\beta<\theta$使得$f(\alpha,\beta)\geq\theta$。
:::

::: proof
我们直接把$\beta$取为$\delta=\mathrm{crit}(f)$。如果$\forall\alpha<\theta$均有$f(\alpha,\delta)=f^*(\alpha)<\theta$，则$f^*(\theta)\leq\theta$，然而显然又有$f^*(\theta)\geq\theta$，故$f^*(\theta)=\theta$，换言之$\mathrm{inacc}_2(f)$不是$f^*$最小的不动点，矛盾。
:::

今后，对$f(\alpha)=\varphi(\gamma)=\omega^\gamma$的情况，产生的这个$\varphi(\alpha,\beta)$将被称为Veblen函数。$\mathrm{inacc}_1$将被记为$\epsilon_0$，$\mathrm{inacc}_2$将被记为$\Gamma_0$，称作Feferman–Schutte序数。事实上，$\varphi(1,\alpha)$记为$\epsilon_\alpha$，$\varphi(2,\alpha)$记为$\zeta_\alpha$，但它们都被$\Gamma_0$轻松杀掉了。

$\Gamma_0$还有一个重要的刻画：它允许我们在其下采用某种Veblen函数构成的正则形式。

::: theorem
任给$\alpha<\Gamma_0$，存在唯一的有穷序数列$\beta_0,\gamma_0,\beta_1,\gamma_1,...,\beta_{k-1},\gamma_{k-1}$满足以下条件：

1. $\alpha=\varphi(\beta_0,\gamma_0)+\varphi(\beta_1,\gamma_1)+...+\varphi(\beta_{k-1},\gamma_{k-1})$

2. $\varphi(\beta_0,\gamma_0)\geq\varphi(\beta_1,\gamma_1)\geq...\geq\varphi(\beta_{k-1},\gamma_{k-1})$

3. $\forall i\in k(\gamma_i<\varphi(\beta_i,\gamma_i))$

这将称作$\alpha$的Veblen正则形式。
:::

::: proof
如Cantor正则形式的证明一般归纳。在分离出$\alpha=\omega^\delta\cdot n+\beta$后注意到一定存在$\beta_0<\Gamma_0$和$\gamma_0<\varphi(\beta_0,\gamma_0)$使得$\omega^\delta=\varphi(\beta_0,\gamma_0)$即可。显然$\omega^\delta=\varphi(0,\delta)$，所以唯一的可能反例是$\forall\beta_0<\Gamma_0$都有$\varphi(\beta_0,\delta)=\delta$，这时会得出$\delta=\Gamma_0$产生矛盾。
:::

## 延展与超穷的Veblen层级

注意到Veblen层级其实就是把一元正则序列变成了二元的，我们自然想要它变成至少是任意$n$元的。这一节的后面，我们甚至可以让它变成超穷元的。不妨要求$\mathrm{crit}(f)=0$。

先来看有穷元的$\varphi:\omega_1^{<\omega}\to\omega_1$。由于左边的良序还是不清楚的，我们额外证明一些事实以使得归纳成立。

::: theorem
存在$\mathbf{Ord}^{<\omega}$上的典范良序$<_C$，它限制在每个无穷基数$\kappa$对应的$\kappa^{<\omega}$上时序型均为$\kappa$。
:::

::: proof
$(\alpha_0,...,\alpha_{m-1})<_C (\beta+0,...,\beta_{n-1})$当且仅当：$\alpha_0+...+\alpha_{m-1}+m<\beta_0+...+\beta_{n-1}+n$，或者存在$k$使得$\forall i\in k(\alpha_{i}=\beta_i)$且（$k=m$或$\alpha_k<\beta_k$）。验证留做习题。
:::

::: definition
给定正规函数$f:\omega_1\to\omega_1$，总可以延拓定义域得到$f:\omega_1^{<\omega}\to\omega_1$，它按照以下规则递归地定义：

1. $f(\gamma)=f(\gamma)$

2. $f(0,...,0,\gamma_0,...,\gamma_{n-1})=f(\gamma_0,...,\gamma_{n-1})$

3. $f(\gamma_0,...,\gamma_{n-1},0,...,0,-)=\mathrm{Enum}(\bigcap_{\beta<\gamma_{n-1}}\mathrm{Fix}(f(\gamma_0,...,\beta,-,0,...,0)))$，这里$\gamma_{n-1}>0$。

它将称作$f$给出的延展Veblen层级。
:::

::: theorem
延拓后的$f$良定义，且$f(\gamma_0,...\gamma_{n-1},-)$总是正则函数。
:::

::: proof
不难验证$0\leq\beta<\gamma_{n-1}$时确实有$(\gamma_0,...,\gamma_{n-1},0,...,0,-)>_C(\gamma_0,...,\beta\\,-,0,...,0)$。
:::

::: remark*
$\varphi(1,0,-)$又被称为$\Gamma$函数，其实就是$\varphi(1,0,0)=\Gamma_0$的延续。它已经被延展Veblen函数轻松杀掉了。
:::

于是，我们自然想考查这个延展Veblen层级的增长速度的上确界。

::: definition
$\mathrm{inacc}_3(f)=\mathrm{sup}\{f(1),f(1,0),f(1,0,0),...\}$。特别的，记$\mathrm{inacc}_3\\(\varphi)=\mathrm{SVO}$，即小Veblen序数（Small Veblen Ordinal）。
:::

::: theorem
任给一串$\gamma_0,...,\gamma_{n-1}<\mathrm{inacc}_3\\(f)$，均有$f(\gamma_0,...,\gamma_{n-1})<\mathrm{inacc}_3(f)$。反之，任给$\gamma<\mathrm{inacc}_3(f)$，均存在$\gamma_0,...,\gamma_{n-1}<\mathrm{inacc}_3(f)$使得$\gamma<f(\gamma_0,...,\gamma_{n-1})$。
:::

## 序数坍塌
