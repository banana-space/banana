---
title: 分层真与正确基数
---

<problems>
- $V_\alpha\prec_1\mathbf{V}$ 推出强极限的证明中，句子 $\exists f(\mathrm{isSurjOn}(f,\gamma,V_\alpha))$ 里的 $V_\alpha$ 似乎应为 $V_\beta$。
</problems>

之前形式化的$\mathrm{Sat}$显然其实是全局的$\Delta_0$真谓词（因为$\mathrm{Sat}(s,u)$也就是$u\vDash s$
也就是$s$对$u$的相对化，which是$\Delta_0$句子），而我们的讨论说明它是$\Delta_1$的；
接下来让我们考虑更高复杂度句子的真谓词。我们首先指出一个简单的事实。

::: theorem (元定理)
对任何$\mathfrak{n}$，我们都有$\Delta_0$谓词来判定一个公式是否是$\Delta_0$、
$\Sigma_\mathfrak{n}$或$\Pi_\mathfrak{n}$公式，
$\Sigma_1$谓词来判定某个集合论$T$下一个公式是否是$\Sigma_\mathfrak{n}^T$、
$\Pi_\mathfrak{n}^T$或$\Delta_\mathfrak{n}^T$公式。
:::

::: proof
前者只需要从前向后查：是不是量词、变元符号、否定符号、量词、……，
然后把剩下的东西塞进$\Delta_0$判别里面；这个判别是先从前向后读串，
或者是$\exists x\wedge\in xy$或者是$\neg...\neg$，读到不是这两者之一的位置时查看后面有没有量词。
后者则是添加了“存在公式使得$T$可证二者等价”。
:::

::: remark*
这里的$\mathfrak{n}$如果要改进为$n$，
那么$\Sigma_\mathfrak{n}$和$\Pi_\mathfrak{n}$公式的判定谓词也会变成$\Sigma_1$的东西，
原理是声称存在从句子到$\mathrm{Succ}(n)$的函数，
把每一节$\exists x$或$\neg\exists x\neg$放到一个$i\in n$上面，把后面余下的全部东西丢进$n$，
并判定后面是$\Delta_0$句子。
:::

::: definition
$\Sigma_\mathfrak{n}$真谓词$\vDash_{\Sigma_\mathfrak{n}}$指的是这样一个单变元谓词：
任何$\Sigma_\mathfrak{n}$句子真当且仅当其编码填入此谓词后被判定为真。
:::

::: remark*
因此，将$\Sigma_\mathfrak{n}$公式的判定谓词改进成$n$没有意义，
因为这里的定义在元理论层次上枚举了全体$\Sigma_\mathfrak{n}$句子。
同时鉴于满足$\Sigma_\mathfrak{n}$句子的否定当且仅当满足这整个$\Pi_\mathfrak{n}$句子，
$\vDash_{\Pi_\mathfrak{n}}$（$\Pi_\mathfrak{n}$真谓词）的复杂度应该和$\vDash_{\Sigma_\mathfrak{n}}$
反着来。
:::

我们立即有集合论版本的真不可定义定理。

::: theorem (元定理)
在强于$T_{Ar}$的集合论中，不存在全局真谓词。
换言之，
不存在单变元谓词$\psi(x)$使得对任何句子$\sigma$都有
$\sigma\leftrightarrow \psi(\ulcorner\sigma\urcorner)$。
:::

::: proof
基本上是在照抄第一不完备性定理的证明，我们连可表示性都不需要考察，
因为$\mathrm{Sub}_c(s,s',v,t)$这个句子我们直接实打实地造出来了。

假定$\psi(x)$是全局真谓词，记$\neg\psi(x)$为公式$\varphi(x)$，我们来造其不动点，
也就是$T_{Ar}\vdash\sigma\leftrightarrow \varphi(\ulcorner\sigma\urcorner)$的句子$\sigma$，
这样因为我们又要求$\sigma\leftrightarrow \psi(\ulcorner\sigma\urcorner)$就知道
$\psi\leftrightarrow\neg\psi$而矛盾。

对任意集合$a$，
考虑句子
$\theta(s,s',a)\leftrightarrow\mathrm{Sub}_c(s,s',\ulcorner x\urcorner,\ulcorner a\urcorner)$，
定义句子$\tau(x)$为$\forall s'(\theta(x,s',x)\to\varphi(s'))$，
然后令$\sigma$为
$\forall s'(\theta(\ulcorner\tau\urcorner,s',\ulcorner\tau\urcorner)\to\varphi(s'))$。
观察立即知道
$\mathrm{Sub}_c(\ulcorner\tau\urcorner,\ulcorner\sigma\urcorner,\ulcorner x\urcorner,\ulcorner\tau\urcorner)$
也就是$\theta(\ulcorner\tau\urcorner,\ulcorner\sigma\urcorner,\ulcorner\tau\urcorner)$。

$\sigma\to\varphi(\ulcorner\sigma\urcorner)$：
取$\sigma$中的$s'=\ulcorner\sigma\urcorner$得到
$\theta(\ulcorner\tau\urcorner,\ulcorner\sigma\urcorner,\ulcorner\tau\urcorner)\to\varphi(\ulcorner\sigma\urcorner)$。

$\varphi(\ulcorner\sigma\urcorner)\to\sigma$：因为$s'$只有一个，
而已经知道唯一的$s'$就是$\ulcorner\sigma\urcorner$。
:::

::: remark*
本质上来说全局真谓词$\vDash$就是解码函数：把每个形式化句子都解码成元语言的句子，
换言之断言句子总是标准。这个定理无非是说句子的标准性不可由一个句子所确认。
:::

但这不妨碍分层真谓词的定义。

::: theorem (元定理)
$\vDash_0$是$\Delta_1^{T_{Sat}}$的，
$\vDash_{\Sigma_\mathfrak{n}}$是$\Sigma_\mathfrak{n}$的（$\mathfrak{n}\geq 1$）。
:::

::: proof
$\vDash_0 s$当且仅当存在传递集$c$，$s$中全体常元符号的解码都属于$c$，且$\mathrm{Sat}(s,c)$；
这句话$\Sigma_1$。又鉴于$\vDash_0 s$当且仅当$\neg\vDash_0\neg s$，它立即$\Pi_1$。

$\vDash_1 \exists x(s)$当且仅当$\exists x(\vDash_0 s)$（注意我们可以通过元组编码来证明每个$\Sigma_1$
公式都等价于最外面只有一层$\exists$的$\Sigma_1$公式），于是它$\Sigma_1$。
归纳地，$\vDash_{n+1}\exists x(s)$当且仅当$\exists x(\neg\vDash_{n}\neg s)$。
:::

::: remark*
这又一次说明不能有$\vDash_n$，否则定义$\vDash$为$\exists n(\vDash_n)$就是全局真谓词了。
:::

真不可定义定理的一个自然推论是初等子模型的不可定义性（否则只需要把全局真判断变成初等子模型的真判断，
后者上文已说明是可定义的了）。
然而，分层真的可定义性提示我们可以考虑$\Sigma_\mathfrak{n}$子模型的可定义性。
根据完全相同的道理，$\Sigma_\mathfrak{n}$子模型也是$\Pi_\mathfrak{n}$子模型，
因此我们将直接记这个关系为$\prec_\mathfrak{n}$。一个简单的事实是：

::: theorem [$T_{Ar}$]
任何传递集都是宇宙的$\Delta_0$子模型。
:::

::: proof
因为它传递。
:::

但接下来的一件事就比较重要，且不那么显然了。

::: theorem [Levy，$ZFC$]
任给不可数基数$\kappa$，$H_\kappa\prec_1\mathbf{V}$。
:::

::: proof
只需证明：若$\exists x(\varphi)$中常元均属于$H_\kappa$，则$\exists x\in H_\kappa(\varphi)$。
假定这个$x\in H_\gamma$，由LS定理，存在$H_\gamma$的初等子模型$X$，
$\varphi$中全体参数的传递包括都是$X$的子集，且$X$的基数不大于这些传递包括的基数。
鉴于参数们都属于$H_\kappa$，这些传递包括的基数都小于$\kappa$，因此$|X|<\kappa$。
取$X$的坍塌$M$，则传递集$M\subseteq H_\kappa$。
鉴于$H_\gamma\vDash\exists x(\varphi)$，我们也有$M\vDash\exists x(\varphi)$，
从而其扩张$H_\kappa\vDash\exists x(\varphi)$。
:::

这启示我们做如下定义。

::: definition
$\mathfrak{n}\geq 2$；如果基数$\kappa$满足$H_\kappa\prec_{\mathfrak{n}}\mathbf{V}$，
则称$\kappa$是$\Sigma_\mathfrak{n}$正确基数。
:::

::: remark*
$\kappa$是$\Sigma_\mathfrak{n}$正确基数这句话写开来是
$\forall s(\mathrm{isFml}_{\Sigma_\mathfrak{n}}(s)\to s\in H_\kappa\to \,\, \vDash_{\Sigma_\mathfrak{n}} s\to \mathrm{Sat}(s,H_\kappa))$，
它$\Pi_\mathfrak{n}$是因为$\mathfrak{n}\geq 2$。
当然它不可能是$\Sigma_\mathfrak{n}$的，
否则“存在$\Sigma_\mathfrak{n}$正确基数”这句话也是$\Sigma_\mathfrak{n}$的，这造出了基数无穷降链。
:::

当然，用$V_\kappa$还是$H_\kappa$并没有什么区别。

::: theorem [$ZFC$]
任给序数$\alpha$，$V_\alpha\prec_1\mathbf{V}$则$\alpha$是不可数强极限基数；
事实上$V_\kappa\prec_1\mathbf{V}$当且仅当$\kappa$不可数且$V_\kappa=H_\kappa$，
也当且仅当$\kappa$是$\beth$不动点。
对$\mathfrak{n}\geq 2$，
$V_\kappa\prec_{\mathfrak{n}}\mathbf{V}$当且仅当$\kappa$是$\Sigma_\mathfrak{n}$正确基数。
:::

::: proof
$V_\alpha\prec_1\mathbf{V}$则$\alpha$是不可数强极限基数是因为：
对$\beta<\alpha$可以用参数$V_\beta$考虑$\Sigma_1$句子
$\exists \gamma\in\mathbf{Ord}\exists f(\mathrm{isSurjOn}(f,\gamma,V_\alpha))$即得
$\beth_\beta=\gamma\in\alpha$。
我们证明：$V_\kappa\prec_1\mathbf{V}$推出$\kappa=\beth_\kappa$，
又推出$(V_\kappa=H_\kappa\wedge\omega\in\kappa)$，又有$V_\kappa\prec_1\mathbf{V}$。

第一次推断其实已经证出来了，第三次推断是因为不可数$\kappa$都让$H_\kappa\prec_1\mathbf{V}$。
第二次推断是因为显然$H_\kappa\subseteq V_\kappa$，
但我们从$x\in V_\kappa$知道$x\in V_\alpha(\alpha<\kappa)$，
而$|V_\alpha|=\beth_\alpha<\beth_\kappa=\kappa$。
:::

这提示我们，$\Sigma_2$是一个比较重要的分水岭。
事实上，$V_\alpha$和$H_\kappa$都可以给我们一些$\Sigma_2$句子的标准形式。

::: theorem (元定理)
任给$\varphi$，以下三件事等价：

1. 存在$\Sigma_2$句子$\psi$使得$ZFC\vdash \varphi\leftrightarrow\psi$。

2. 存在句子$\psi$使得
   $ZFC\vdash \varphi\leftrightarrow \exists \kappa\in\mathbf{Ord}(\mathrm{isCard}(\kappa)\wedge \psi^{H_\kappa})$。

3. 存在句子$\psi$使得
   $ZFC\vdash \varphi\leftrightarrow \exists \alpha\in\mathbf{Ord}(\psi^{V_\alpha})$。

:::

::: proof
由于$v=V_\alpha$是$\Pi_1$句子，
$\exists \alpha\in\mathbf{Ord}(\psi^{V_\alpha})$本来就是个$\Sigma_2$句子，
因此我们只要证明$1\to 2$和$2\to 3$。

$1\to 2$是这样的：
我们直接证明$\exists x\forall y(\phi)$当且仅当
$\exists \kappa\in\mathbf{Ord}(\mathrm{isCard}(\kappa)\\\wedge \exists x\in H_\kappa\forall y\in H_\kappa(\phi))$，
此处$\phi$是$\Delta_0$公式。
前推后是因为这个$x$总属于某$H_\kappa$而$\Pi_1$句子向内绝对，
后推前是因为固定$x$为常元后$H_\kappa\prec_{1}\mathbf{V}$。

$2\to 3$是这样的：$H_\kappa$认为$\psi$对，当且仅当$V_{\kappa+1}$认为“$H_\kappa$认为$\psi$对”。
:::

::: corollary [$ZFC$]
$\kappa$是$\Sigma_2$正确基数，当且仅当任给参数均属于$V_\kappa$的句子$\varphi$，
若存在序数$\alpha$让$V_\alpha\vDash\varphi$，则存在$\alpha\in\kappa$让$V_\alpha\vDash\varphi$。
:::

::: proof
这是因为上个元定理的$1,3$等价。
:::

我们证明最后一个相当符合直觉的事实。

::: theorem [$ZFC$]
$\Sigma_\mathfrak{n}$正确基数构成闭无界类，记为$C^{(\mathfrak{n})}$。
进一步，
任何以$\Sigma_\mathfrak{n}$公式定义的序数的闭无界类都包含所有的$\Sigma_\mathfrak{n}$正确基数。
:::

::: proof
$C^{(\mathfrak{n})}$闭显然是因为一列模型升链的并仍然是模型，重在验证其无界。
我们来对$\mathfrak{n}$归纳，$C^{(1)}$当成全体$\beth$不动点（从而闭无界，
且让$V_\kappa\prec_1\mathbf{V}$）。
我们在$\forall\alpha\exists\beta>\alpha(V_\beta\prec_{\mathfrak{n}}\mathbf{V})$下证明
$\forall\alpha\exists\beta>\alpha(V_\beta\prec_{\mathfrak{n}+1}\mathbf{V})$。

显然可以先拿一个$\beta_0>\alpha$使得$V_{\beta_0}\prec_\mathfrak{n}\mathbf{V}$。
我们枚举全体无常元$\Pi_\mathfrak{n}$公式为$\varphi_k(k\in\omega)$，
则全体无常元$\Sigma_{\mathfrak{n}+1}$公式可枚举为$\exists x_l(\varphi_k)(l,k\in\omega)$。
对每个这样的句子我们定义传入$\varphi_k$中除$x_l$外一切变元符号的函数$f_{l,k}$，
它对给它的输入收集让$\exists x_l(\varphi_k)$为真的所有$x_l$中秩最小的那个$x_l$的秩（如果没有就取
$\varnothing$）。
现在我们定义序数函数$F$，
它对传入的序数$\beta$取出$V_\beta$中元素传进全部$f_{l;k}$后所得序数集的最小严格上界之上的最小
$C^{(\mathfrak{n})}$中的基数$F(\beta)$。
我们把$F$连续$\omega$次作用在$\beta_0$上得到$\beta$，
$V_\beta$就是$\mathbf{V}$的$\Sigma_{\mathfrak{n}+1}$子模型。

后者则是因为如果$\Sigma_\mathfrak{n}$公式$\varphi(\alpha)$定义一序数的闭无界类，
则对$\Sigma_\mathfrak{n}$正确基数$\kappa$中的每个$\beta\in\kappa$我们都有
$\exists\gamma(\beta<\gamma\wedge\varphi(\gamma))$（$\mathbf{V}$认为$\varphi$无界），
这个句子$\Sigma_\mathfrak{n}$，于是$V_\kappa$也认为$\varphi$无界，$\varphi$在$\kappa$里无界，
从而由$\varphi$闭知道$\varphi(\kappa)$。
:::

既然$C^{(\mathfrak{n})}$都是闭无界的，那把这$\omega$个闭无界类交起来按道理也是闭无界类；
但这其实不对，因为$C^{(\mathfrak{n})}$并非$C^{(n)}$。不过，我们可以这么做。

::: theorem (元定理)
如果在$\mathcal{L}_\in$中再加常元符号$K$，然后做此语言中$ZFC$的扩展理论，
要求（利用公理模式）对每个$\mathfrak{n}$都有$K$是$\Sigma_\mathfrak{n}$正确基数，
则此理论与$ZFC$等一致性强度。此时称$K$是正确基数。
:::

::: proof
如果有$ZFC$模型，则这个理论有穷可满足。
:::
