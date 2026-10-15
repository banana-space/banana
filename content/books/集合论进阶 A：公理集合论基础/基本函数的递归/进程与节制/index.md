---
title: 进程与节制
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
以下讨论均在$ZF$中进行。

::: definition
对序数$\xi$，我们称满足以下条件的定义域为$\xi$的函数$P$为一个$\xi$-进程(progress)：

1. 任给$\alpha\in\xi$，$P(\alpha)$是传递集。

2. 任给$\alpha\in\xi$，若$\mathrm{Succ}(\alpha)\in\xi$，则$\mathbf{T}(P(\alpha))\subseteq P(\mathrm{Succ}(\alpha))$。

3. 任给极限序数$\alpha\in\xi$，$\bigcup_{\beta\in\alpha}P(\beta)\subseteq P(\alpha)$。

我们进一步定义进程的以下性质：

1. 若任给$\alpha\in\xi$，$\mathrm{Succ}(\alpha)\in\xi$时$P(\mathrm{Succ}(\alpha))\subseteq\wp(P(\alpha))$，则称进程$P$是严格(strict)的。

2. 若任给极限序数$\alpha\in\xi$，$\bigcup_{\beta\in\alpha}P(\beta)=P(\alpha)$，则称进程$P$是连续(continuous)的。

3. 若$P(\varnothing)=\varnothing$且$P$严格又连续，则称进程$P$是坚固(solid)的。

:::

我们立刻有以下观察。

::: theorem [$ZF$]
$\xi$-进程$P$严格连续时，任给$\alpha\in\xi$均有$\mathrm{rank}_{\in}(P(\alpha))=\mathrm{rank}_{\in}(P(\varnothing))+\alpha$。特别地，对坚固的进程有$\mathrm{rank}_{\in}(P(\alpha))=\alpha$。
:::

::: proof
简单的归纳法。
:::

我们用进程这个概念来描述基本函数的秩长定理。

::: theorem [$ZF$]
任给$\mathfrak{n}$元基本函数符号$R$，存在一个元自然数$\mathfrak{c}_R$使得任何$\ulcorner\mathfrak{c}_R+1\urcorner$-进程$P$均满足$R''(P(\varnothing)^{(\mathfrak{n})})\subseteq P(\ulcorner \mathfrak{c}_R\urcorner)$。
:::

::: proof
只需要注意到每个基本算子都有这样的$\mathfrak{c}$，而函数复合时只需要把所有这些$\mathfrak{c}$加在一起。
:::

::: definition
任给$\mathfrak{n}$元基本函数符号$R$，最小的满足上定理要求的元自然数$\mathfrak{c}_R$称作$R$的基本常数。
:::

::: remark*
Mathias指出，我们确有递归的方法算出满足定理的元自然数，但我们没有递归的方法算出基本常数。
:::

这个定理顺带表明，任给坚固进程$P$和在其定义域中的极限序数$\alpha$，$P(\alpha)$必然是$GJ_0$的模型。

我们同样希望$p$-基本递归函数也能有类似的基本常数。我们先引入一个早应引入的概念。

::: definition
如果$F(x)=G(p,F\upharpoonright x)$如方程$p$-基本递归，则以下$\Delta_0$谓词$\mathrm{isAtt}_F(f,p)$描述的事实称作$f$是$F$的一次尝试(attempt)：$\mathrm{isFun}(f)\wedge\bigcup\mathrm{dom}(f)\subseteq\mathrm{dom}(f)\wedge\forall x\in\mathrm{dom}(f)(f(x)=G(p,f\upharpoonright x))$。如果$x\in\mathrm{dom}(f)$，则称尝试$f$抵达(attains)了$x$。对给定的$p$，一元谓词$\mathrm{isAtt}_F(-,p)$对应的分离子$t(-,p)$是基础的，从而是基本的，从而有基本常数，我们记之为$\mathfrak{s}_F$。
:::

::: theorem [$ZF$]
任给$p$-基本递归函数符号$F$，存在一个元自然数$\mathfrak{c}_F$使得任何集合$x$与$\ulcorner\mathfrak{c}_F+1\urcorner$-进程$P$，若$x\in P(\varnothing)$且$p\in P(\varnothing)$，且任给$y\in x$均有一次$F$的抵达$y$的尝试$f_y\in P(\varnothing)$，则必然有一次$F$的抵达$x$的尝试$f\in P(\ulcorner\mathfrak{c}_F\urcorner)$。
:::

::: proof
由于$p\in P(\varnothing)\in P(\{\varnothing\})$，集合$S=\{f\in P(\varnothing)|\mathrm{isAtt}_F(f,p)\}$应当属于$P(\ulcorner\mathfrak{s}_F+1\urcorner)$，于是$f_0=\bigcup S$是一次抵达每个$y\in x$的$F$的尝试，而且$f_0\in\mathbf{T}(P(\ulcorner\mathfrak{s}_F+1\urcorner))\subseteq P(\ulcorner\mathfrak{s}_F+2\urcorner)$。我们只需要再做$R:(x,p,f)\mapsto f\cup\{(x,G(p,f\upharpoonright x))\}$，那么$R(x,p,f_0)$就是我们所想要的那么抵达$x$的$F$尝试，因此只需取$\mathfrak{c}_F=\mathfrak{s}_F+\mathfrak{c}_R+2$即可。
:::

::: definition
任给任给$p$-基本递归函数符号$F$，最小的满足上定理要求的元自然数$\mathfrak{c}_F$称作$F$的基本常数。
:::

::: remark*
基本递归函数的基本常数没有基本函数的基本常数那么好用，因为$p$太麻烦了。
:::

我们继续给出一系列类似的秩长定理。

::: theorem [$ZF$]
任给$p$-基本递归函数符号$F$和集合$x$，若$\xi>\ulcorner\mathfrak{c}_F\urcorner\cdot(\mathrm{rank}_{\in}(x)+1)$，则任何满足$\{p,x\}\subseteq P(\varnothing)$的$xi$-进程$P$均有一次抵达$x$的$F$尝试$f\in P(\ulcorner\mathfrak{c}_F\urcorner\cdot(\mathrm{rank}_{\in}(x)+1))$。
:::

::: proof
对$\mathrm{rank}_{\in}(x)$归纳，只需注意到$\ulcorner\mathfrak{c}_F\urcorner\cdot(\mathrm{rank}_{\in}(x)+1)=\ulcorner\mathfrak{c}_F\urcorner\cdot(\mathrm{rank}_{\in}(x))+\ulcorner\mathfrak{c}_F\urcorner$。
:::

::: theorem
任给$p$-基本递归函数符号$F$和坚固的$\xi$-进程$P$，若$\alpha+\ulcorner\mathfrak{c}_F\urcorner\cdot\beta<\xi$，且有$p\in P(\alpha)$和$x\in P(\beta)$，则有一次抵达$x$的$F$尝试$f\in P(\alpha+\ulcorner\mathfrak{c}_F\urcorner\cdot\beta)$。
:::

::: proof
同样对$\mathrm{rank}_{\in}(x)$归纳。
:::

但如果要考察迭代基本递归，我们不能预先对秩长函数设定形式。我们先指出一个概念。

::: definition
对序数函数$l:\mathbf{Ord}\to\mathbf{Ord}$，如果序数$\nu$满足$\forall\alpha\in\mathbf{Ord}(l(\alpha)<\nu+\alpha+\omega)$，我们就称$l$被$\nu$节制。

对一元函数符号$F$，如果存在三元基本函数符号$H$，序数$\nu,\lambda$，被$\lambda$节制的序数函数$l$和集合$p$，使得任何足够长的坚固进程$P$若有$p\in P(\nu)$和$x\in P(\alpha)$则对$\beta\geq l(\alpha)$总有$F(x)=H(p,P(\beta),x)$，那么我们就称$F$被$(p,\nu,\lambda)$节制。
:::

初看起来节制这个概念有点麻烦，但是我们其实可以把上面的秩长定理翻译到这个概念中来，节制的好处在于它保证了你可以用多余的信息（进程）来用基本函数拼出这个目标函数。

::: theorem [$ZF$]
任何$p$-基本函数符号$F$均被$(p,\lambda,\lambda)$节制，$\lambda$可以取任何序数。
:::

::: proof
显然当取$l:\alpha\mapsto \lambda+\ulcorner\mathfrak{c}_F\urcorner\cdot\alpha$，它恰被$\lambda$节制（不熟悉序数算术请想一想）。上面的秩长定理指出$P(\lambda+\ulcorner\mathfrak{c}_F\urcorner\cdot\alpha)$中存有抵达了$x$的尝试，我们只需读出这次尝试认为的$x$的值，因此当取$H:(p,P,x)\mapsto [\bigcup\{f\in P|\mathrm{isAtt}_F(p,f)\}](x)$。
:::

接下来，我们就能继续讨论迭代基本递归了。我们给出最一般的形式。

::: theorem [$ZF$]
如果$F$满足$F(x)=G((p,F\upharpoonright x))$，而$G$被$(p,\nu,\lambda)$节制，那么$F$就被$(p,\nu,(\lambda+\nu)\cdot\omega)$节制。
:::

::: proof
假定$H,l$见证$G$被$(p,\nu,\lambda)$节制，我们来延拓尝试这一概念：由于$H$基本，我们可以考虑以下$\Delta_0$谓词$\mathrm{isAtt}_F(p,P,f)\leftrightarrow \mathrm{isFun}(f)\wedge\bigcup\mathrm{dom}(f)\subseteq\mathrm{dom}(f)\wedge\forall x\in\mathrm{dom}(f)(f(x)=H(p,P,(p,f\upharpoonright x)))$，满足此谓词的$f$称作$F$的一次运用$P$的尝试。如果$x\in\mathrm{dom}(f)$，则同样称尝试$f$抵达了$x$；进而，如果集合$P$中有运用$P$的尝试$f\in P$抵达$x$，且任给$y\in\mathrm{TCl}(\{x\})$均有$H(p,P,(p,f\upharpoonright y))=G((p,f\upharpoonright y))$，则称集合$P$抵达$x$。

类似上一个证明，我们同样希望有$K,k$见证$F$被$(p,\nu,(\lambda+\nu)\cdot\omega)$节制，$K$的形式自然已可猜测为$K(p,P,x)=[\bigcup\{f\in P|\mathrm{isAtt}_F(p,P,f)\}](x)$，于是只要进程$P$抵达$x$就有$K(p,P,x)=F(x)$，现在的关键是找到所需的序数函数$k$。我们指出一些关于序数函数节制性的简单引理，其证明均不过是归纳法。

**断言。** 1。若$l$被$\lambda$节制，则它亦被任何$\lambda'>\lambda$节制。

2. 若$l_1,l_2$均被$\lambda$节制，则$\alpha\mapsto l_1(\alpha)\cup l_2(\alpha)$同样被$\lambda$节制。

3. 若$l_1$被$\lambda_1$节制，$l_2$被$\lambda_2$节制，则$l_1\circ l_2$被$\lambda_1+\lambda_2$节制。

4. 若$l$单增且被$\lambda$节制，则递归定义的$k(\alpha)=l(\bigcup_{\beta<\alpha}k(\beta))$同样单增且被$\lambda\cdot\omega$节制。

我们递归考虑所需的构造。假定已经知道$k$和序数$\alpha$使得任给$\beta<\alpha$若$y\in P(\beta)$则任给$\gamma\geq k(\beta)$均有集合$P(\beta)$抵达$y$，我们希望用$k\upharpoonright\alpha$算得$k(\alpha)$。

1. 首先记$k_0(\alpha)=\bigcup_{\beta<\alpha}k(\beta)=\alpha_0$。

2. 令$f_0=\bigcup\{f\in P(k_0(\alpha))|\mathrm{isAtt}_F(p,P(k_0(\alpha)),f_0)\}$，自然当取基本函数$R_1(p,P)=\bigcup\{f\in P|\mathrm{isAtt}_F(p,P,f)\}$，对应有其基本常数$\mathfrak{c}_1$，记$c_1=\ulcorner\mathfrak{c}_1+1\urcorner$，则令$k_1(\alpha)=\nu+\alpha+c_1$，有$f_0\in P(k_1(\alpha_0))$。$k_1$显然单增且为$\nu$所节制。

3. 由于归纳假设已知$y\in x$时$f_0(y)=K(p,P(\alpha_0),y)=F(y)$，$(p,F\upharpoonright x)=(p,f_0\upharpoonright x)$，自然当取基本函数$R_2(p,f,x)=(p,f\upharpoonright x)$，对应基本常数$\mathfrak{c}_2$，记$c_2=\ulcorner\mathfrak{c}_2\urcorner$，则令$k_2(\alpha)=k_1(\alpha)+c_2$，有$(p,F\upharpoonright x)\in P(k_2(\alpha_0))$。$k_2$同样单增且为$\nu$所节制。

4. 由$H,l$见证$G$被$(p,\nu,\lambda)$节制，取$k_3(\alpha)=l(k_2(\alpha))$，则任给$\beta\geq l_3(\alpha_0)$均有$F(x)=G((p,F\upharpoonright x))=H(p,P(\beta),(p,F\upharpoonright x))$。取基本函数$R_4(p,P,f,x)=H(p,P,(p,f\upharpoonright x))$，对应基本常数$\mathfrak{c}_4$，记$c_4=\ulcorner\mathfrak{c}_4\urcorner$，则令$k_4(\alpha)=k_3(\alpha)+c_4$，有$F(x)\in P(k_4(\alpha_0))$。$k_4$同样单增且为$\lambda+\nu$所节制。

5. 接下来要添加一个点，也就是取$f_1=f_0\upharpoonright\mathrm{TCl}(x)\cup\{(x,F(x))\}$，这就是我们所要的那个见证$P(k(\alpha))$抵达$x$的函数。取基本函数$R_5(f,t,a,x)=f\upharpoonright t\cup\{(x,a)\}$，对应基本常数$\mathfrak{c}_5$，记$c_5=\ulcorner\mathfrak{c}_5\urcorner$，则令$k_5(\alpha)=(k_4(\alpha)\cup\ulcorner\mathfrak{c}_{\mathrm{TCl}}\urcorner\cdot\alpha)+c_5$（注意$\mathrm{TCl}$是基本递归函数，自然有一个基本常数），有$f_1\in P(k_5(\alpha_0))$。$k_4$同样单增且为$\lambda+\nu$所节制。

因此，令$k(\alpha)$由递归方程$k(\alpha)=k_5(\bigcup_{\beta<\alpha}k(\beta))$决定，则$k$被$(\lambda+\nu)\cdot\omega$节制，且$K,k$见证$F$被$(p,\nu,(\lambda+\nu)\cdot\omega)$节制。
:::

对迭代基本递归我们就有特别的结论。

::: theorem [$ZF$]
任何$p$-基本$\mathfrak{n}+1$-递归函数符号$F$均被$(p,\lambda,\lambda\cdot(\omega^{\ulcorner\mathfrak{n}\urcorner}+\ulcorner\mathfrak{n}\urcorner))$节制，$\lambda$可以取任何序数。
:::

::: proof
对$\mathfrak{n}$施行归纳。
:::

我们用这个结论来回收上节的一个断言。

::: theorem [$ZF$]
任何集合$p$都不能使得特殊的一元序数加法$\alpha\mapsto\alpha+\omega$成为$p$-基本有穷递归的函数符号。
:::

::: proof
反证。如果有$p$，那也要有$\mathfrak{n}$，然后$\alpha\mapsto\alpha+\omega$是$p$-基本$\mathfrak{n}+1$-递归的函数符号。假定$\nu=\mathrm{Succ}(\mathrm{rank}_{\in}(p))$，$\lambda=\nu\cdot(\omega^{\ulcorner\mathfrak{n}\urcorner}+\ulcorner\mathfrak{n}\urcorner)$，$H,l$见证$F$被$(p,\nu,\lambda)$节制，我们需要一个进程来看到矛盾。我们做以下定义。

**定义。** 对传递集$c$，我们递归定义以下坚固进程，称作朝向$c$的标准进程：

1. $P^c(\varnothing)=\varnothing$

2. $P^c(\mathrm{Succ}(\alpha))=\mathbf{T}(P^c(\alpha))\cup\{c\cap P^c(\alpha)\}\cup(c\cap\wp(P^c(\alpha)))$

3. 对极限序数$\alpha$，$P^c(\alpha)=\bigcup_{\beta<\alpha}P^c(\beta)$

自然，此时若要导出矛盾，当考虑传递集$c=\mathrm{TCl}(\{p\})$的足够长的标准进程$P^c$。显然$p\in P^c(\nu)$，于是$\lambda\cdot\omega+\omega=F(\lambda\cdot\omega)\in P^c(l(\lambda\cdot\omega)+\ulcorner\mathfrak{c}_H\urcorner)$。然而$P^c$既然坚固，则必有$\mathrm{rank}_{\in}(P^c(l(\lambda\cdot\omega)+\ulcorner\mathfrak{c}_H\urcorner))=l(\lambda\cdot\omega)+\ulcorner\mathfrak{c}_H\urcorner<\lambda+\lambda\cdot\omega+\omega=\lambda\cdot\omega+\omega$，这显然引发矛盾。
:::
