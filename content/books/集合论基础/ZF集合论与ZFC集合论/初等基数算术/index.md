---
title: 初等基数算术
---

<problems>
- “Aleph数”与“Beth数”两个定义的第 3 项中，“当 $\alpha$ 是个后继基数时”似乎应为“当 $\alpha$ 是极限序数时”。
- 定理“$\prod_{\beta<\alpha}\kappa_\beta=(\mathrm{sup}_{\beta<\alpha}\kappa_\beta)^{|\alpha|}$”似乎还需要假设 $\kappa_\beta$ 单调不减（例如 $\kappa_0=\aleph_\omega>2^{\aleph_0}$、其余 $\kappa_n=2$ 时左边为 $\aleph_\omega$，右边为 $\aleph_\omega^{\aleph_0}>\aleph_\omega$）。
</problems>

有了选择公理，最重要的是有了良序原则，每个集合都可以与至少一个序数扯上双射，
从而我们可以舒舒服服的声明以下定理。

::: theorem
$|A|$现在可以看作给集合$A$配上的唯一一个等势的基数。
:::

::: remark*
今后我们将自然地在这个意义上混用基数与势。特别地，关于势比较的一切定理都可以这样移植到基数比较上来。
:::

::: definition [后继基数与极限基数]
对基数$\kappa$而言，已知$\aleph(\kappa)$是比$\kappa$大的最小基数，我们把它称作$\kappa$的后继基数。

如果一个基数不是任何基数的后继，则称之为极限基数。
:::

注意，每个$n\in\mathbb{N}$都是基数，我们称之为有限基数；$\mathbb{N}$自己则是最小的极限基数，
我们在强调它是一个东西的势的时候记它为$\aleph_0$，在强调它是个基数的时候记它为$\omega_0$。

$\aleph$这个下标令人浮想联翩，而我们也确实可以用数数用的序数来数比大小用的基数。

::: definition [Aleph数]
我们递归地定义$\aleph_\alpha$为

1. $\aleph_0$，当$\alpha=0$时；

2. $\aleph(\aleph_\beta)$，当$\alpha=\beta+1$时，注意这里用的是序数加法；

3. $\bigcup_{\beta\in\alpha}\aleph_\beta$，当$\alpha$是个后继基数时。

在强调它是个基数的时候也记$\aleph_\alpha$为$\omega_\alpha$。
:::

于是，我们可以按序数数出一大堆$\omega$。其实它也有不动点，但这又开始要数大序数了，我们马上停止。

在关于实数的简单性质中，我们不会涉及到$|\wp\mathbb{N}|$以上的基数。这是由以下定理保证的。

::: theorem [实数的势]
$|\mathbb{R}|=|\wp\mathbb{N}|$
:::

::: proof
注意每个正实数都有唯一的连分数表示，从而对应于非零自然数的有限或无限序列。
这些有限序列显然是可数的，而无限序列恰好与全体自然数到自然数的函数的集等势，
后者根据基数算术可以算出势为$\aleph_0^{\aleph_0}=2^{\aleph_0}$，恰好是自然数幂集的势，
然后实数是正实数、负实数与0的无交并，所以势为$2^{\aleph_0}+2^{\aleph_0}+1=2^{\aleph_0}$，
这里用的是基数算术。
:::

可是，$|\mathbb{R}|$到底是$\aleph$多少呢？Cantor终其一生都相信是$\aleph_1$，
这个猜想就是大名鼎鼎的连续统猜想（CH，Continuum Hypothesis）。
现代集合论已经证明，$\mathrm{CH}$是独立于$\mathrm{ZFC}$的，
但Woodin等一众柏拉图主义者相信$\mathrm{CH}$应当有一个真值，
只要向$\mathrm{ZFC}$里再加一些条件——这个条件是什么，据说是V=Ultimate L，但究竟行不行还只是个猜想。

现在，我们来证明$\mathrm{ZFC}$中能证明的一切关于基数幂运算的定理。

::: definition
我们都记得$A^B$指的是所有从$B$到$A$的函数构成的集合。
我们对两个基数$\kappa$和$\lambda$定义幂运算$\kappa^\lambda=|\kappa^\lambda|$，
即算出来的结果是全体从$\lambda$到$\kappa$的函数构成的集的基数。

额外的令$\kappa^{<\lambda}=\mathrm{sup}_{\mu<\lambda}\kappa^\mu$，这里出现的符号都是基数。
:::

首先，幂运算与加法、乘法的配合还是一如既往。

::: theorem
$\kappa^{\lambda+\mu}=\kappa^\lambda\times\kappa^\mu$；
$\kappa^{\lambda\times\mu}=(\kappa^\lambda)^\mu$。
:::

::: proof
根据定义直接造出函数集之间的双射即可。
:::

然而，虽然加法和乘法我们在上节都已经知道是平凡的了，幂运算却远远不平凡，
因为大家很容易从$|\wp(X)|=|2^X|$看出一些问题。

::: definition [Beth数]
我们定义$\beth(\kappa)=2^\kappa$，它又被称作连续统函数；然后对$\alpha\in\mathbf{On}$做递归定义：

1. $\beth_0=\aleph_0$

2. $\beth_{\alpha+1}=\beth(\beth_{\alpha})$

3. $\beth_{\alpha}=\bigcup_{\beta\in\alpha}\beth_\beta$，当$\alpha$是个后继基数时。

:::

这看起来很搞笑，但$\mathrm{ZFC}$真的几乎无法对$\aleph$们和$\beth$们做出任何比较。

::: definition
连续统猜想$\mathrm{CH}$就是命题：$\beth_1=\aleph_1$

广义连续统猜想$\mathrm{GCH}$就是命题：$\beth_\alpha=\aleph_\alpha$对任何$\alpha\in\mathbf{On}$成立。
:::

::: remark*
$\mathrm{ZFC}$不能证明$\mathrm{CH}$也不能证否$\mathrm{CH}$，
也不能证明$\mathrm{GCH}$也不能证否$\mathrm{GCH}$。
:::

我们还是看看$\mathrm{ZFC}$能干什么吧。

::: definition [共尾]
对序数$\alpha$，我们定义它的共尾数$\mathrm{cf}(\alpha)$为最小的$\beta\in\mathrm{On}$，
使得存在一个序数族$\{A_\gamma|\gamma<\beta\}\subseteq\alpha$满足
$\bigcup_{\gamma<\beta}A_\gamma=\alpha$。这个序数族也被称作共尾序列。
:::

::: remark*
显然，共尾数一定是基数。
:::

::: definition
称$\mathrm{cf}\kappa=\kappa$的基数为正则基数，不正则的基数为奇异基数。
:::

稍后会看到，正则基数与奇异基数的性质非常不同。
正则基数的算术不受它下面的基数算术影响，但奇异基数的算术则几乎由它下面的基数算术决定。
最简单的奇异基数的例子是$\aleph_\omega$，它的共尾数显然是$\aleph_0$，共尾序列就是$\{\aleph_n\}$。
它的共尾数明显比它自己远远小。

我们来定义基数的无穷和与无穷积。

::: definition
一族基数$\{\kappa_\beta|\beta<\alpha\}$的无穷和定义为
$\sum_{\beta<\alpha}\kappa_\beta=|\coprod_{\beta<\alpha}\kappa_\beta|$，这里不交并是必要的，
因为基数本来是相互包含的。
无穷积定义为$\prod_{\beta<\alpha}\kappa_\beta \\=|\prod_{\beta<\alpha}\kappa_\beta|$。
:::

它们虽然无穷了，但还是很平凡。

::: theorem
非零基数的和
$\sum_{\beta<\alpha}\kappa_\beta=|\alpha|\times\mathrm{sup}_{\beta<\alpha}\{\kappa_\beta\}$，
这里的上确界是上确界基数而非上确界序数，下同。
:::

::: proof
我们不妨设$\alpha$是基数，
并记$\kappa=\mathrm{sup}_{\beta<\alpha}\{\kappa_\beta\}$以及
$\sigma=\sum_{\beta<\alpha}\kappa_\beta$，显然全部放大就给出$\sigma\leq\alpha\times\kappa$，
所以只要证明它倒过来的不等式就好。
首先，显然$\sigma\geq\kappa_\beta$，所以$\sigma\geq\kappa$；
又注意$\kappa_\beta\geq 1$给出$\sigma\geq\sum_{\beta<\alpha}1=\alpha$，而基数乘法是平凡的，
我们就证明完了。
:::

::: theorem
若有非零基数的无穷族$\kappa_\beta$，
则$\prod_{\beta<\alpha}\kappa_\beta=(\mathrm{sup}_{\beta<\alpha}\kappa_\beta)^{|\alpha|}$。
:::

::: proof
我们还是设$\alpha$是基数，
并记$\kappa=\mathrm{sup}_{\beta<\alpha}\{\kappa_\beta\}$以及$\pi=\prod_{\beta<\alpha}\kappa_\beta$。
$\pi\leq\kappa^\alpha$仍然是显然的，因此我们来看另一个方向的不等式。

由于$\alpha$是无穷基数，我们早就知道$\alpha\times\alpha=\alpha$，
因此我们可以将$\alpha$分为$\alpha$个不交的集$A_\beta$，且每个$A_\beta$的基数都是$\alpha$。
现在，
注意到
$\pi=\prod_{\beta<\alpha}|\prod_{i\in A_\beta}\kappa_i|\leq\prod_{\beta<\alpha}\kappa=\kappa^\alpha$，
我们就完成了证明。
:::

关于无穷和与无穷积最重要的定理是如下的König不等式，它和选择公理等价。

::: theorem
如果$\forall\beta<\alpha(\kappa_\beta<\lambda_\beta)$，
则$\sum_{\beta<\alpha}\kappa_\beta<\prod_{\beta<\alpha}\lambda_\beta$。
:::

::: proof
显然在不等式中$\kappa_\beta$全部取零就得到选择公理，我们这里用选择公理来证明它。
由于上面给出的两个定理，显然这个和是不大于这个积的。
现在我们证明不存在它们之间的双射，
换言之任给单射$F:\sum_{\beta<\alpha}\kappa_\beta\hookrightarrow\prod_{\beta<\alpha}\lambda_\beta$，
它必然不是满射。

我们考虑每个$\kappa_\beta$的像集$K_\beta\subseteq\prod_{\beta<\alpha}\lambda_\beta$，
我们的条件指出投影映射$\pi_\beta:\prod_{\beta<\alpha}\lambda_\beta\twoheadrightarrow \lambda_\beta$
给出的$\pi_\beta(K_\beta)$的基数小于$\lambda_\beta$，
从而存在$x_\beta\in\lambda_\beta$使得$x_\beta\not\in\pi_\beta(K_\beta)$。
现在选择公理给出一个$f\in\prod_{\beta<\alpha}\lambda_\beta$使得$f(\beta)=x_\beta$，
则由$x_\beta$的定义必须有
$f\not\in F(\sum_{\beta<\alpha}\kappa_\beta)=\bigcup_{\beta<\alpha}K_\beta$，换言之$F$不是满射。
:::

::: corollary
$\mathrm{cf}(\kappa^\lambda)>\lambda$
:::

::: proof
这就是说不存在满足$\forall \alpha<\lambda(\kappa_\alpha<\kappa^\lambda)$的共尾序列，
使得$\sum_{\alpha<\lambda}\kappa_\alpha=\kappa^\lambda$。
这只需要发现
$\sum_{\alpha<\lambda}\kappa_\alpha<\prod_{\alpha<\lambda}(\kappa^\lambda)=(\kappa^\lambda)^\lambda=\kappa^{\lambda\times\lambda}=\kappa^\lambda$。
:::

::: corollary
$\kappa^{\mathrm{cf}\kappa}>\kappa$
:::

::: proof
假定有共尾序列满足$\forall\alpha<\mathrm{cf}\kappa(\kappa_\alpha<\kappa)$而
$\sum_{\alpha<\mathrm{cf}\kappa}\kappa_\alpha=\kappa$，
运用不等式可知
$\kappa=\sum_{\alpha<\mathrm{cf}\kappa}\kappa_\alpha<\prod_{\alpha<\mathrm{cf}\kappa}\kappa=\kappa^{\mathrm{cf}\kappa}$。
:::

这样，我们又得到了一种构造基数的方式。

::: definition [Gimel函数]
定义$\gimel(\kappa)=\kappa^{\mathrm{cf}\kappa}$。
:::

现在，我们可以完整地叙述基数幂运算的运算规律了。

::: theorem
给定无穷基数$\lambda$，我们可以递归地对无穷基数$\kappa$计算$\kappa^\lambda$如下：

1. $\kappa\leq\lambda$时：$\kappa^\lambda=\beth(\lambda)$

2. $\kappa>\lambda$，但存在$\mu<\lambda$使得$\mu^\lambda\geq\kappa$时：$\kappa^\lambda=\mu^\lambda$

3. $\kappa>\lambda$，且对任意$\mu<\lambda$都有$\mu^\lambda<\kappa$时，
   若$\mathrm{cf}\kappa>\lambda$：$\kappa^\lambda=\kappa$

4. $\kappa>\lambda$，且对任意$\mu<\lambda$都有$\mu^\lambda<\kappa$时，
   若$\mathrm{cf}\kappa\leq\lambda$：$\kappa^\lambda=\gimel(\kappa)$

:::

::: proof
对每个情况证明。

1. $2<\kappa\leq\lambda<2^\lambda\rightarrow \beth(\lambda)=2^\lambda\leq\kappa^\lambda\leq\lambda^\lambda\leq (2^\lambda)^\lambda=2^{\lambda\times\lambda}=2^\lambda=\beth(\lambda)$

2. $\mu^\lambda\leq\kappa^\lambda\leq(\mu^\lambda)^\lambda=\mu^{\lambda\times\lambda}=\mu^\lambda$

3. 如果$\kappa$是后继基数（从而是正则基数，从而一定是这个情况），
   显然有Hausdorff公式
   $\aleph_{\alpha+1}^{\aleph_\beta}=\aleph_{\alpha}^{\aleph_\beta}\times\aleph_{\alpha+1}$；
   如果$\kappa$是极限基数，
   $\mathrm{cf}\kappa>\lambda$指出每个$f:\lambda\rightarrow\kappa$都是有界的（即存在$\mu<\kappa$使得
   $f(\lambda)\subseteq\mu$），
   从而$\kappa^\lambda\leq\mathrm{sup}_{\mu<\kappa}\mu^\lambda\leq\kappa$。

4. 这个情况下$\kappa$一定是极限基数，我们假定有共尾序列$\kappa_\alpha$，
   这里$\alpha<\mathrm{cf}\kappa$。
   我们有
   $\kappa^\lambda\leq(\prod_{\alpha<\mathrm{cf}\kappa}\kappa_\alpha)^\lambda=\prod_{\alpha<\mathrm{cf}\kappa}\kappa_\alpha^\lambda\leq\prod_{\alpha<\mathrm{cf}\kappa}\mathrm{sup}_{\mu<\kappa}\mu^\lambda\leq\kappa^{\mathrm{cf}\kappa}$，
   又有
   $\kappa^{\mathrm{cf}\kappa}\leq(\kappa^\lambda)^{\mathrm{cf}\kappa}=\kappa^{\lambda\times\mathrm{cf}\kappa}=\kappa^\lambda$，
   即证毕。

:::

最后，我们指出：显然的单调性$\kappa\leq\lambda\rightarrow 2^\kappa\leq 2^\lambda$，
Cantor发现的$2^\kappa>\kappa$和König不等式推出的$\mathrm{cf}(2^\kappa)>\kappa$就是$\mathrm{ZFC}$
对正则基数上的$\beth$函数所知的一切。

::: theorem [Easton]
假定存在$\mathrm{ZFC+GCH}$的传递模型$\mathcal{M}$，
在$\mathcal{M}$上有一个从它的全体正则基数到它的全体基数的一个真类函数$F$，满足$F(\kappa)>\kappa$、
$\kappa\leq\lambda\rightarrow F(\kappa)\leq F(\lambda)$和$\mathrm{cf}F(\kappa)>\kappa$，
则存在它的脱殊扩张$\mathcal{M}[G]$与它拥有相同的基数和相同的共尾数（从而有相同的正则基数），
且是$\mathrm{ZFC}$的模型，
满足任给正则基数$\kappa$都有$\mathcal{M}[G]\vDash F(\kappa)=\beth(\kappa)$。
:::

对于奇异基数，我们则有一些对GCH的近似刻画。首先是它的一个弱化形式。

::: definition
奇异基数假设$\mathrm{SCH}$指的是：对任何奇异基数$\kappa$，若$\beth(\mathrm{cf}\kappa)<\kappa$，
则$\gimel(\kappa)=\aleph(\kappa)$。
:::

::: remark*
显然$\beth(\mathrm{cf}\kappa)\geq\kappa$时$\beth(\mathrm{cf}\kappa)=\gimel(\kappa)$，
而$\beth(\mathrm{cf}\kappa)<\kappa$时$\aleph(\kappa)$是$\gimel(\kappa)$的最小可能取值。
:::

::: remark*
$\mathrm{SCH}$与某个大基数不存在等价，因此一般大家都不相信它。
:::

Silver在$\mathrm{ZFC}$中为我们提供了看待$\mathrm{SCH}$的一个视角。

::: theorem
若$\mathrm{SCH}$对所有共尾数为$\omega$的奇异基数都成立，则$\mathrm{SCH}$成立。
:::

他还给出看待奇异基数的$\mathrm{GCH}$的一个视角。

::: theorem
若一奇异基数的共尾数大于$\omega$，且在它的下方$\mathrm{GCH}$成立，则在它这里$\mathrm{GCH}$也成立。
:::

然而，这两个定理的证明并不容易，它需要一些额外的概念，我们将在后面继续讨论。
