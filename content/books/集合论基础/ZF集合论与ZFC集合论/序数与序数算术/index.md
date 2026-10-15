---
title: 序数与序数算术
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
我们将自然数的良序推广到整个集合论宇宙中。

::: definition [序数]
对$\in$成良序集的传递集称作序数。
:::

可以看出，每个$n\in\mathbb{N}$都是传递集，而且$\mathbb{N}$自己也是个传递集。在强调序数的身份时，自然数又称有限序数，$\mathbb{N}$又记为$\omega$。我们记全体序数组成的类为$\mathbf{Ord}$。

这个记号自然让我们想问是不是总有更大的序数，答案是肯定的，灵感来源正是$\mathbb{N}$中的后继函数。

::: theorem
对任何序数$\alpha$，总有$\beta=\alpha\cup\{\alpha\}$仍为序数，且显然$\alpha$就是$\beta$的真前段$\beta[\alpha]$。
:::

::: proof
显然。
:::

我们还可以用更豪迈的方式构造远远大的序数。

::: theorem [上界序数]
一集序数$\{\alpha_i|i\in I\}$的并$\bigcup_{i\in I}\alpha_i$还是个序数。我们称这序数为这集序数的上确界，记为$\sup_{i\in I}\alpha_i$。
:::

::: proof
$\forall y(y\in \bigcup_{i\in I}\alpha_i\leftrightarrow \exists i\in I(y\in\alpha_i)\rightarrow \exists i\in I(y\subseteq \alpha_i)\rightarrow y\subseteq\bigcup_{i\in I}\alpha_i)$
:::

::: remark*
特别地，我们作严格上确界$\mathrm{Ssup}_{i\in I}\alpha_i=\{\alpha\in\mathbf{Ord}|\exists i\in I(\alpha\in\alpha_i\vee \alpha=\alpha_i)\}$，它是包括所有$\alpha_i$的最小序数。
:::

::: theorem
$\mathbf{Ord}$上的$\in$仍为良序，换言之记序数$\beta<\alpha$当且仅当$\beta\in\alpha$是合理的。
:::

::: proof
只需要注意一族序数的交还是序数，且仍在这个序数族内。
:::

::: theorem [序数的结构]
$\forall \alpha\in\mathbf{Ord}(\alpha=\{\beta\in\mathbf{Ord}|\beta<\alpha\})$
:::

::: proof
这就是说序数就是比它小的全体序数组成的集。证明是轻松的，只要注意$\alpha[\beta]=\beta$即可。
:::

::: definition [序型]
由良序集比较定理不难得知，每个良序集都唯一确定地序同构于某个序数。我们称良序集$(X,\leq)$同构的序数为这良序集的序型，记为$\mathrm{Type}(X,\leq)$，在不引起矛盾的时候也记为$\mathrm{Type}(X)$。
:::

不过，很显然$\mathbb{N}$并不是按照后继的方式得来的序数。因此，我们也可以对序数做以下区分：

::: theorem [后继序数与极限序数]
称$\alpha$是个后继序数，若有一个序数$\beta$使得$\alpha=\beta\cup\{\beta\}$。

称$\alpha$是个极限序数，若$\alpha=\cup\{\beta|\beta\in\alpha\}$，这里的$\beta$取遍$\alpha$中的所有序数。

这个定理宣称，序数总是后继序数与极限序数中的一种。
:::

::: proof
注意上面对极限序数其实可以有别的写法，例如我们称$\lim_{\beta<\alpha}\beta=\bigcup\alpha$，则极限序数无非是$\alpha=\lim_{\beta<\alpha}\beta$。

我们考虑不是后继序数的序数$\alpha$。$\forall\beta\in\alpha(\beta\cup\{\beta\}\subseteq\alpha)$，而$\alpha$不是后继序数指出$\alpha<\beta\cup\{\beta\}\vee\beta\cup\{\beta\}<\alpha$，因此$\beta\cup\{\beta\}<\alpha$。

更简单的，根据序数结构我们可以轻松断言$\forall\beta\cup\{\beta\}\in\alpha(\beta\in\alpha)$，于是$\forall\beta\in\mathbf{Ord}(\beta\in\alpha\leftrightarrow\beta\cup\{\beta\}\in\alpha)$。

我们反证。如果存在既非后继序数也非极限序数的序数，由于$\mathbf{Ord}$是良序集，总能选出最小的满足此条件的序数$\alpha$。不难注意到最小性指出$\alpha=\{\beta\in\mathbf{Ord}|\beta=\gamma\cup\{\gamma\}\wedge\beta\in\alpha\}\cup\{\beta\in\mathbf{Ord}|\cup\beta=\beta\wedge\beta\in\alpha\}$

因此，$\cup\alpha=\{\gamma\cup\{\gamma\}|\gamma\in\alpha\}\cup\{\beta\in\mathbf{Ord}|\cup\beta=\beta\wedge\beta\in\alpha\}=\alpha$，这指出$\alpha$是个极限序数，与假设矛盾。
:::

::: remark*
今后出于方便，我们会记$\mathrm{Succ}(x)=x\cup\{x\}$。
:::

有了序数，我们就可以给出良基集的另一个等价表述了。

::: definition
给定带序集$(X,<)$与序数$\alpha$，我们称$f:X\to\alpha$是一个$\alpha$秩函数，若它是$(X,<)$到$(\alpha,<)$的保序函数。
:::

::: theorem
$(X,<)$是带良基关系的集当且仅当存在其上的秩函数。
:::

::: proof
如果$(X,<)$是良基的，我们用良基归纳法来定义一个秩函数，它就是$f(x)=\mathrm{Ssup}\{f(y)|y<x\}$。由替换公理模式知道全体像确实是个集，这使得确实存在序数$\alpha$使得这个函数是$\alpha$秩函数。

如果有秩函数，则秩最小（由序数构成的集合在$\in$下良基知存在）的元素就是极小元。
:::

它同样有一个真类版本的定理，对一般真类的定理的叙述与证明我们留给读者。注意到(Fund)等价于$\in$的良基性，我们特别地可以用秩函数来给出(Fund)的一个等价形式。

::: definition
我们归纳地对每个序数$\alpha\in\mathbf{Ord}$定义一个$WF_\alpha$如下：

1. $WF_{\varnothing}=\varnothing$

2. $WF_{\mathrm{S}(\alpha)}=\wp(WF_\alpha)$

3. $WF_{\lim_{\beta<\alpha}\beta}=\bigcup_{\beta<\alpha}WF_\beta$

最后，我们记真类$\mathbf{WF}=\bigcup_{\alpha\in\mathbf{Ord}}WF_\alpha$。
:::

::: theorem
在ZF-(Fund)中，(Fund)等价于$\mathbf{V=WF}$
:::

::: proof
(Fund)推出$\mathbf{V=WF}$是显然的反证法。如果有不在$\mathbf{WF}$中的集合，则它的全体元素必须仍然有一个不在$\mathbf{WF}$之中，这与不存在$\in$无穷降链矛盾。

$\mathbf{V=WF}$推出(Fund)则是因为序数的良基性无需(Fund)担保，而$\mathbf{V=WF}$用序数的良基性指出了所有集合对$\in$关系的良基性。
:::

这些$WF_\alpha$在我们不需要担心(Fund)的时候也会直接写成$V_\alpha$。显然，它们给出一个秩函数$x\mapsto\alpha$，这个$\alpha$是最小的使得$x\subseteq\mathbf{V}_\alpha$的序数$\alpha$。

## 递归算术

自然数有加法和乘法，如果读者上过初中说不定还会算自然数的幂或指数，我们希望给数大小用的序数也定义这样的计算方法。$\varnothing$有时记为$0$，$\{\varnothing\}$有时记为$1$，等等类似，以使行文流畅。

::: definition [序数算术]
我们递归地定义对$\alpha$的序数加法如下：

1. $\alpha+\varnothing=\alpha$

2. $\alpha+\mathrm{Succ}(\beta)=\mathrm{Succ}(\alpha+\beta)$

3. $\alpha+\lim_{\gamma<\beta}\gamma=\lim_{\gamma<\beta}(\alpha+\gamma)$

我们递归地定义对$\alpha$的序数乘法如下：

1. $\alpha\cdot\varnothing=\varnothing$

2. $\alpha\cdot\beta\cup\{\beta\}=(\alpha\cdot\beta)+\alpha$

3. $\alpha\cdot\lim_{\gamma<\beta}\gamma=\lim_{\gamma<\beta}(\alpha\cdot\gamma)$

我们递归地定义对$\alpha$的序数指数如下：

1. $\alpha^\varnothing=\{\varnothing\}$

2. $\alpha^{\beta\cup\{\beta\}}=\alpha^\beta\cdot\alpha$

3. $\alpha^{\lim_{\gamma<\beta}\gamma}=\lim_{\gamma<\beta}\alpha^\gamma$

:::

注意我们并未像自然数里面一样证明递归定义原理，读者可以自行解决。

序数算术在自然数上面显然和我们熟知的东西是一样的，但是对于那些无穷序数（即包含$\omega$的序数）而言，这些序数算术可能会有些奇怪。

::: proposition
以下都是序数算术的性质。为了美观，我们将$\in$换成$<$。

1. 结合律$\alpha+(\beta+\gamma)=(\alpha+\beta)+\gamma$，$\alpha\cdot(\beta\cdot\gamma)=(\alpha\cdot\beta)\cdot\gamma$

2. 加法单调$\beta<\gamma\rightarrow \alpha+\beta<\alpha+\gamma\wedge\beta+\alpha\leq\gamma+\alpha$

3. 乘法单调$\beta<\gamma\wedge\varnothing<\alpha\rightarrow \alpha\cdot\beta<\alpha\cdot\gamma\wedge\beta\cdot\alpha\leq\gamma\cdot\alpha$

4. 右减法$\alpha<\beta\rightarrow\exists!\delta(\alpha+\delta=\beta)$

5. 右带余除法$\forall\alpha(\varnothing<\alpha\rightarrow\forall\beta\exists!\gamma\exists!\rho(\beta=\alpha\cdot\gamma+\rho\wedge\rho<\alpha))$

6. 乘法分配右加法$\alpha\cdot(\beta+\gamma)=\alpha\cdot\beta+\alpha\cdot\gamma$

7. 幂单调$\beta<\gamma\wedge\{\varnothing\}<\alpha\rightarrow\alpha^\beta<\alpha^\gamma\wedge\beta^\alpha\leq\gamma^\alpha$

8. 幂改写右运算$\alpha^{\beta+\gamma}=\alpha^\beta\cdot\alpha^\gamma$，$\alpha^{\beta\cdot\gamma}=(\alpha^\beta)^\gamma$

:::

::: remark*
这里左右是非常重要的，读者不难举出左单调不严格，左分配不成立，左减法不唯一等等的各种例子。
:::

我们在序数算术中有一个最重要的定理，它许诺每个序数都可以写成一个漂亮的形式。

::: theorem [Cantor正则形式]
任何序数$\alpha$都可以以唯一的形式写成$\alpha=\omega^{\beta_1}\cdot k_1+...+\omega^{\beta_n}\cdot k_n$，其中$\alpha\geq \beta_1>\beta_2>...>\beta_n$，而$k_1,...,k_n,n$都是自然数。
:::

::: proof
归纳。注意$\omega^\alpha\geq\alpha$，我们反复对$\alpha$用最大的$\omega^\beta<\alpha$做带余除法即可。
:::

不难发现这里$\beta_1$是可以等于$\alpha$的，这其实是$\epsilon$数的来源。这些用不动点来定义的大序数最后会和一些数学公理系统的证明论强度排序扯在一起，不得不说是很奇妙的事情，读者若有兴趣可以研读第四章。

## 不可分解性

首先我们来证明一个引理，它表述了$\omega$的递归序数幂的特殊地位。

::: lemma [加性不可分解]
以下对于极限序数$\alpha$的描述等价，满足其中任意一个条件时称这个极限序数为加性不可分解序数。

1. $\forall\beta,\gamma<\alpha(\beta+\gamma<\alpha)$

2. $\forall\beta<\alpha(\beta+\alpha=\alpha)$

3. $\exists\delta(\alpha=\omega^\delta)$

4. $\forall A\subseteq\alpha(\mathrm{Type}(A,\in)=\alpha\vee\mathrm{Type}(\alpha\backslash A,\in)=\alpha)$

:::

::: proof
我们先证明前三个等价，再证明它们与最后的陈述等价。

$1\to 2$：考虑一些$\gamma_i\to\alpha$，我们有$\beta+\alpha=\lim_{i}\beta+\gamma_i\leq\lim_{i}\alpha=\alpha$，然而简单的归纳又指出$\beta+\alpha\geq\alpha$，因此$\beta+\alpha=\alpha$。

$2\to 3$：考虑$\alpha$的Cantor正则形式分解$\alpha=\omega^\eta\cdot a+\epsilon$，我们要证明$a=1$且$\epsilon=0$。若$a\not=1$即$a>1$，令$\beta=\omega^\eta\cdot(a-1)<\alpha$，则$\beta+\alpha>\alpha$矛盾，故$a=1$；若$\epsilon\not=0$，令$\beta=\omega^\eta\cdot a<\alpha$，则$\beta+\alpha>\alpha$矛盾。

$3\to 1$：考虑Cantor正则形式分解显然。

$3\to 4$：对$\delta$归纳，$\delta=0$显然。

1. $\delta=\theta+1$，我们考虑$A$和$B=\alpha\backslash A$。由于$\alpha$可以视作$\omega^{\theta}\cdot n+k$，我们考虑$\alpha_n=\{\omega^\theta\cdot n+k|k\in\omega\}$，然后$A\cap\alpha_n$与$B\cap\alpha_n$总有一个序型是$\omega^\theta$。由于一共有$\omega$个$\alpha_n$，因此$A,B$中必有一个和$\omega$个$\alpha_n$都交为序型$\omega^\theta$，换言之它和$\alpha$的交也就是它自己的序型是$\omega^{\theta+1}=\alpha$。

2. $\delta$是极限序数，我们考虑$A$和$B=\alpha\backslash A$。做$C=\{\theta<\delta|\mathrm{Type}(A\cap \omega^\theta,\in)=\omega^\theta\}$和$D=\{\theta<\delta|\mathrm{Type}(B\cap \omega^\theta,\in)=\omega^\theta\}$，则$C\cup D=\delta$。由于$\delta$是极限序数，$C,D$中总有一个的上确界就是$\delta$，那么对应的$A,B$中的那一个的序型就是$\alpha$了。

$4\to 2$：取$A=\beta$。
:::

当然，我们也有乘性不可分解的定义，为了完整我们也列在这里。

::: lemma [乘性不可分解]
以下对于极限序数$\alpha$的描述等价，满足其中任意一个条件时称这个极限序数为乘性不可分解序数。

1. $\forall\beta,\gamma<\alpha(\beta\cdot\gamma<\alpha)$

2. $\forall 0<\beta<\alpha(\beta\cdot\alpha=\alpha)$

3. $\exists\delta(\alpha=\omega^{\omega^\delta})$

4. $\mathrm{Type}(\alpha\times\alpha,<_C)=\alpha$

这里$<_C$是$\mathbf{Ord}\times\mathbf{Ord}$上的典范良序。
:::

::: proof
我们还是先证明前三个等价，再证明它们与最后的陈述等价。

$1\to 2$：考虑一些$\gamma_i\to\alpha$，我们有$\beta\cdot\alpha=\lim_{i}\beta\cdot\gamma_i\leq\lim_{i}\alpha=\alpha$，然而简单的归纳又指出$\beta\cdot\alpha\geq\alpha$，因此$\beta\cdot\alpha=\alpha$。

$2\to 3$：考虑$\alpha$的Cantor正则形式分解$\alpha=\omega^\eta\cdot a+\epsilon$，我们先证明$a=1$且$\epsilon=0$。若$a\not=1$即$a>1$，令$\beta=\omega^\eta\cdot(a-1)<\alpha$，则$\beta\cdot\alpha>\alpha$矛盾，故$a=1$；若$\epsilon\not=0$，令$\beta=\omega^\eta\cdot a<\alpha$，则$\beta\cdot\alpha>\alpha$矛盾。最后我们证明$\eta$是加性不可分解的。

反证。如果存在$\gamma<\eta$使得$\gamma+\eta>\eta$，则$\omega^\gamma\cdot\omega^\eta>\omega^\eta=\alpha$，换言之取$\beta=\omega^\gamma$就给出$\beta\cdot\alpha>\alpha$矛盾。

$3\to 1$：假定$\beta\geq\gamma$，再假定$\beta=\omega^\eta\cdot b+\epsilon<\omega^{\eta+1}$，则$\beta\cdot\gamma\leq\omega^{2\eta+2}$，由$\omega^\delta$的加性不可分解知$\beta<\alpha\to\eta<\omega^\delta\to 2\eta+2<\omega^\delta$，于是证毕。

现在，我们先给出一个引理，以推进对$4$的等价性的证明。

**引理。** $\mathrm{Type}(\alpha\times\alpha,<_C)\leq 2\alpha^2$对任意序数成立。

**证明。** 对$\alpha\leq\omega$显然，剩下的部分直接归纳。

1. $\alpha=\beta+1$时，$\mathrm{Type}(\alpha\times\alpha,<_C)=\mathrm{Type}(\beta\times\beta,<_C)+2\beta+1\leq 2\beta^2+2\beta+1<2(\beta^2+\beta+1)\leq 2((\beta+1)\beta+\beta+1)=2(\beta+1)^2$

2. $\alpha$极限时，$\mathrm{Type}(\alpha\times\alpha,<_C)=\lim_{\beta<\alpha}\mathrm{Type}(\beta\times\beta,<_C)\leq\lim_{\beta<\alpha}2\beta^2=2\alpha^2$

因此证毕。

**推论。** $\alpha<\omega^{\omega^\delta}\to\mathrm{Type}(\alpha\times\alpha,<_C)<\omega^{\omega^\delta}$

**证明。** $\mathrm{Type}(\alpha\times\alpha,<_C)\leq 2\alpha^2<\omega^{\omega^\delta}$，后面是$3\to 1$的应用。

$3\to 4$：即证明$\mathrm{Type}(\omega^{\omega^\delta}\times\omega^{\omega^\delta},<_C)=\omega^{\omega^\delta}$，这由$\mathrm{Type}(\omega^{\omega^\delta}\times\omega^{\omega^\delta},<_C)=\lim_{\beta<\omega^{\omega^\delta}}\mathrm{Type}(\beta\times\beta,<_C)\leq\lim_{\beta<\omega^{\omega^\omega}}\omega^{\omega^\omega}=\omega^{\omega^\omega}$和反方向的显然不等式推出。

$4\to 1$：其实只要证明$\beta<\alpha\to\beta^2<\alpha$。首先$\beta+\beta<\mathrm{Type}(\beta\times\beta,<_C)<\mathrm{Type}(\alpha\times\alpha,<_C)=\alpha$给出$\beta\cdot 2<\alpha$，进而有$\beta^2<\mathrm{Type}(\beta\cdot 2\times\beta\cdot 2,<_C)<\mathrm{Type}(\alpha\times\alpha,<_C)=\alpha$证毕。
:::

我们用不到乘性不可分解，因此下文中不可分解性皆指代加性不可分解。

## 特别的和

::: definition
在无交并$\alpha\coprod\beta=(\alpha\times\{0\})\cup(\beta\times\{1\})$上，这样的良序$E$将被称为$\alpha,\beta-chain$：

1. $\forall \gamma,\delta<\alpha((\gamma,0)E(\delta,0)\leftrightarrow \gamma\leq\delta)$

2. $\forall \gamma,\delta<\beta((\gamma,1)E(\delta,1)\leftrightarrow \gamma\leq\delta)$

:::

::: remark*
换言之，$\alpha,\beta-chain$会在两个部分分别继承原有的良序结构，从而我们只需要考虑这两部分之间的结构长什么样。
:::

::: definition
定义满足以下条件的类函数$\oplus:\mathbf{Ord}\times\mathbf{Ord}\rightarrow\mathbf{Ord}$为自然和：

1. $\forall \alpha\forall\beta(\alpha\oplus\beta=\beta\oplus\alpha)$

2. $\forall\alpha\forall\beta\forall\gamma(\alpha\oplus(\beta\oplus\gamma)=(\alpha\oplus\beta)\oplus\gamma)$

3. $\forall\alpha(\alpha\oplus 0=\alpha)$

4. $\forall\alpha\forall\beta\forall\gamma(\alpha<\beta\leftrightarrow\alpha\oplus\gamma<\beta\oplus\gamma)$

称它为Hessenburg和，记为$\#$，如果它还满足$$\forall\alpha\geq\beta\forall m,n\in\mathbb{N}(\omega^\alpha\cdot m+\omega^\beta\cdot n=\omega^\alpha\cdot m\oplus\omega^\beta\cdot n)$$
:::

::: theorem
任何$\alpha,\beta-chain$的序型都不小于$\mathrm{min}\{\alpha+\beta,\beta+\alpha\}$，不大于任意$\oplus$给出的$\alpha\oplus\beta$。

分别存在$\alpha,\beta-chain$，使其序型为$\alpha+\beta$、$\beta+\alpha$和$\alpha\#\beta$。
:::

::: remark*
这两句话指出，递归定义的序数和是下确界，而$\#$是上确界，从而间接指出$\#$是唯一确定的。
:::

::: proof
首先，我们给出三个构造的描述。$\alpha+\beta$就是让$\beta$里的东西一定比$\alpha$里的大，$\beta+\alpha$反过来，$\#$是把$\alpha$和$\beta$按Cantor正则形式拆开为$\alpha=\omega^{\eta_0}a_0+...+\omega^{\eta_k}a_k,\beta=\omega^{\eta_0}b_0+...+\omega^{\eta_k}b_k$，其中$\eta_0>...>\eta_k$，且$\forall i(\mathrm{max}\{a_i,b_i\}\not=0)$。令$\alpha\#\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_k}(a_k+b_k)$，构造明显也是拆成块再重新拼起来。

不难验证这个$\#$确实是个合格的$\#$，也就是满足Hessenburg和的五条性质。现在来证明两个极值性。

首先是极小，也就是$\mathrm{min}\{\alpha+\beta,\beta+\alpha\}$。显然要考虑Cantor正则形式，设$\alpha=\omega^{\eta_0}a_0+\alpha',\beta=\omega^{\eta_t}b_t+\beta'$，这里是由于不妨令$a_0\not=0$，然后取$b_t$为第一个非零的$b_i$。分类讨论：

1. $t\not=0$，这时有$\alpha+\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_t}(a_t+b_t)+\beta'$，而$\beta+\alpha=\alpha$，故$\mathrm{min}\{\alpha+\beta,\beta+\alpha\}=\alpha$。

2. $t=0$，这时有$\alpha+\beta=\omega^{\eta_0}(a_0+b_0)+\beta'$和$\beta+\alpha=\omega^{\eta_0}(a_0+b_0)+\alpha'$，从而$\mathrm{min}\{\alpha+\beta,\beta+\alpha\}=\omega^{\eta_0}(a_0+b_0)+\mathrm{min}\{\alpha',\beta'\}$。

我们来论证这两个情况下刚刚给出的都是最小的良序。

1. $t\not=0$，这时显然$\alpha,\beta-chain$不能比它们俩之间的任何一个更小，所以我们做出的显然是最小的良序。

2. $t=0$，这时由$\omega^{\eta_0}$的不可分解性可知无论怎么做，$\omega^{\eta_0}a_0$这部分与$\omega^{\eta_0}b_0$这部分的不交并作为$\omega^{\eta_0}a_0,\omega^{\eta_0}b_0-chain$的序型都只能是$\omega^{\eta_0}(a_0+b_0)$，再注意到$\alpha'$与$\beta'$至少有一个作为它的延伸要存在，我们给出的就确实是最小的良序了。

然后是极大，也就是$\mathrm{Type}(\alpha\coprod\beta,E)\leq\alpha\oplus\beta$。我们记这个命题为$\varphi(\alpha,\beta)$，很明显我们需要归纳法来证明。

显然$\alpha=0$时成立，所以我们叠得一个归纳假设$\forall\tau<\alpha\forall\rho(\varphi(\tau,\rho))$；其次$\beta=0$也显然成立，所以我们又叠出一个归纳假设$\forall\rho<\beta(\varphi(\alpha,\rho))$，现在要证的事情是$\varphi(\alpha,\beta)$。

反证。如果有一个$\mathrm{Type}(\alpha\coprod\beta,E)>\alpha\oplus\beta$，则可以取出一个真前段$Z\subsetneqq\alpha\coprod\beta$使得$\mathrm{Type}(Z)=\alpha\oplus\beta$。

**断言。** $\mathrm{Type}(Z\cap\alpha)=\alpha\wedge\mathrm{Type}(Z\cap\beta)=\beta$

**证明。** 反证。如果其中有一个$=$变成了$<$，计算$\mathrm{Type}(Z)\leq\mathrm{Type}(Z\cap\alpha)\oplus\mathrm{Type}(Z\cap\beta)$，这是归纳假设；它又$<\alpha\oplus\beta$，这是自然和定义要的性质；这时矛盾就已经出现了。

然而，这个断言本身又指出$Z=\alpha\coprod\beta$，与这个前段是真前段矛盾。反证完成。
:::

值得指出的是，这个$\#$还有另外一种泛性质，不过这需要引入另一个函数。

::: definition
令$\varsigma:\mathbf{Ord}\to\mathbf{Ord}$为$\varsigma(0)=0$，$\varsigma(1+\alpha)=2^\alpha$。
:::

::: theorem
$(\varsigma,\#)$是满足以下条件的最小的一对函数：

1. $\alpha\#\beta=\beta\#\alpha$

2. $\alpha<\beta\to\alpha\#\gamma<\beta\#\gamma$

3. $\alpha<\beta\to\varsigma(\alpha)<\varsigma(\beta)$

4. $\varsigma(\alpha)\#\varsigma(\alpha)\leq\varsigma(\alpha+1)$

换言之，任给另一对满足以上条件的函数$(\sigma,\divideontimes)$，总有$\varsigma(\alpha)\leq\sigma(\alpha)$和$\alpha\#\beta\leq\alpha\divideontimes\beta$恒成立。
:::

::: proof
只要注意到Cantor正则形式可以经由$2^\omega=\omega$转写为二进正则形式：$\alpha=2^{\beta_1}+...+2^{\beta_n}$，这里$\beta_1\geq...\geq\beta_n$全部都是极限序数或$0$，这一对$(\varsigma,\#)$满足这四个条件是易于验证的。

接下来证明极小性，假定我们又有了一组$(\sigma,\divideontimes)$。首先，简单的观察指出$\varsigma$至少是最小的满足$\varsigma(\alpha)+\varsigma(\alpha)\leq\varsigma(\alpha+1)$的函数，又由第二个性质推知$\alpha+\beta\leq\alpha\divideontimes\beta$恒成立，因此$\sigma(\alpha)+\sigma(\alpha)\leq\sigma(\alpha)\divideontimes\sigma(\alpha)\leq\sigma(\alpha+1)$，这连同最开始的观察给出$\varsigma(\alpha)\leq\sigma(\alpha)$恒成立。

另一方面，我们对$\alpha\#\beta$的值进行归纳来证明$\alpha\#\beta\leq\alpha\divideontimes\beta$。反证，如果存在$\alpha,\beta$使得$\alpha\#\beta>\alpha\divideontimes\beta$且此时$\alpha\#\beta$极小，我们考虑$\alpha\#\beta$的二进正则形式$2^{\eta_1}+...+2^{\zeta_{m+n}}$，当然我们还默认$\alpha=2^{\alpha_1}+...+2^{\alpha_n}$和$\beta=2^{\beta_1}+...+2^{\beta_m}$。不妨设$\zeta_{m+n}=\beta_m$。

如果$\beta=0$，我们有$0\divideontimes\alpha=\alpha\divideontimes 0<\alpha\#0=\alpha$，这显然与$0\divideontimes$的严格保序性矛盾。接下来，我们证明会存在$\gamma<\beta$使得$\alpha\divideontimes\beta<\alpha\#\gamma$，这指出$\alpha\#\gamma<\alpha\#\beta$的同时$\alpha\#\gamma>\alpha\divideontimes\beta>\alpha\divideontimes\gamma$，与$\alpha\#\beta$的极小性矛盾。

如果$\beta_m=0$，我们令$\gamma=2^{\beta_1}+...+2^{\beta_{m-1}}$；如果$\beta_m$是极限序数，由$\alpha\divideontimes\beta$严格小可知存在一个序数夹在它和$\alpha\#\beta$之间，随便取一个这样的序数，不妨设它充分接近大的这一边，二进正则形式是$2^{\zeta_1}+...+2^{\zeta_{m+n-1}}+2^{\eta_1}+...+2^{\eta_t}$，当然这时候会有$2^{\beta_m}>2^{\eta_1}+...+2^{\eta_t}$。我们令$\gamma=2^{\beta_1}+...+2^{\beta_{m-1}}+2^{\eta_1}+...+2^{\eta_t}$即可。
:::

## 特别的积

::: definition
在积$\alpha\times\beta$上，这样的良序$E$将被称为$\alpha,\beta-block$：

1. $\forall \gamma<\alpha\forall \tau,\mu<\beta((\gamma,\tau)E(\gamma,\mu)\leftrightarrow \tau\leq\mu)$

2. $\forall \gamma<\beta\forall \tau,\mu<\alpha((\tau,\gamma)E(\mu,\gamma)\leftrightarrow \tau\leq\mu)$

:::

::: remark*
换言之，$\alpha,\beta-block$会在每个切片上继承原有的良序结构，我们需要考虑各个横纵切片之间的结构长什么样。
:::

::: definition
定义满足以下条件的类函数$\otimes:\mathbf{Ord}\times\mathbf{Ord}\rightarrow\mathbf{Ord}$为自然积：

1. $\forall\alpha\forall\beta(\alpha\otimes\beta=\beta\otimes\alpha)$

2. $\forall\alpha\forall\beta\forall\gamma(\alpha\otimes(\beta\otimes\gamma)=(\alpha\otimes\beta)\otimes\gamma)$

3. $\forall\alpha(\alpha\otimes 1=\alpha)$

4. $\forall\alpha\forall\beta\forall\gamma(\alpha<\beta\leftrightarrow\alpha\otimes\gamma<\beta\otimes\gamma)$

5. $\forall\alpha\forall\beta\forall\gamma(\alpha\otimes(\beta\#\gamma)=(\alpha\otimes\beta)\#(\alpha\otimes\gamma))$

6. $\forall\alpha\forall\beta\exists\gamma(\omega^\alpha\otimes\omega^\beta=\omega^\gamma)$

称它为Hessenburg积，记为$\ast$，若最后一个条件加强为$$\forall\alpha\forall\beta(\omega^\alpha\otimes\omega^\beta)=\omega^{\alpha\#\beta}$$
:::

::: definition
对两个序数做Cantor正则形式展开：$\alpha=\omega^{\eta_0}a_0+...+\omega^{\eta_k}a_k,\beta=\omega^{\eta_0}b_0+...+\omega^{\eta_k}b_k$，其中$\eta_0>...>\eta_k$，且$\forall i(\mathrm{max}\{a_i,b_i\}\not=0)$。

定义$\alpha$和$\beta$的极小积$\alpha\circledast \beta$为：

1. 若存在最小的$t$使得$\mathrm{min}\{a_t,b_t\}=0$且此时$\eta_t\not=0$，则$\alpha\circledast\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_{t-1}}(a_{t-1}+b_{t-1})+\omega^{\eta_t}(a_t+b_t)$

2. 若存在最小的$t$使得$\mathrm{min}\{a_t,b_t\}=0$且此时$\eta_t=0$，则$\alpha\circledast\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_{t-1}}(a_{t-1}+b_{t-1})+(a_t+b_t)^2$

3. 若不存在$t$使得$\mathrm{min}\{a_t,b_t\}=0$且此时$\eta_k\not=0$，则$\alpha\circledast\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_k}(a_k+b_k-1)$

4. 若不存在$t$使得$\mathrm{min}\{a_t,b_t\}=0$且此时$\eta_k=0$，则$\alpha\circledast\beta=\omega^{\eta_0}(a_0+b_0)+...+\omega^{\eta_{k-1}}(a_{k-1}+b_{k-1})+a_kb_k$

:::

::: theorem
任何$\alpha,\beta-block$的序型都不小于$\alpha\circledast\beta$，不大于任意$\otimes$给出的$\alpha\otimes\beta$。

分别存在$\alpha,\beta-block$，使其序型为$\alpha\circledast\beta$、$\alpha\cdot\beta$、$\beta\cdot\alpha$和$\alpha\ast\beta$。
:::

::: remark*
因此，递归积并没有极值意义下的特别之处。同样的，这个定义也指出Hessenburg积是唯一的。
:::

::: proof
分别先给构造后证明。递归积的良序构造就是字典序，良序性显然。没有需要对它证明的事，它太菜了。

现在做$\alpha=\omega^{\eta_0}a_0+...+\omega^{\eta_k}a_k,\beta=\omega^{\eta_0}b_0+...+\omega^{\eta_k}b_k$，其中$\eta_0>...>\eta_k$，且$\forall i(\mathrm{max}\{a_i,b_i\}\not=0)$。
:::
