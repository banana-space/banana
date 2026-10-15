---
title: 第一基本递归
---

我们首先来考虑对基本函数做递归会发生什么。我们先考虑最简单的递归方程，其中没有多余的参数出现。

::: definition [第一基本递归]
给定一元基本函数符号$G$，我们称满足以下性质的一元函数符号$F$为由$G$经第一基本递归所得的函数符号，
存在$G$的这种$F$将称作第一基本递归函数符号，简称基本递归函数符号：
$y=F(x)\leftrightarrow \\\exists f(y=G(f)\wedge \mathrm{isFun}(f)\wedge\mathrm{dom}(f)=x\wedge\forall a\in x\exists b(b=f(a)\wedge b=F(a)))$
:::

严格地说，这里其实应当指明何理论可证$F$由$G$第一基本递归而成；
我们需要$GJ_0$来确保每个基本函数符号$G$都可证为函数符号，但什么公理能保证对每个$G$都存在$F$呢？

::: theorem (元定理)
$\Pi_1-GJ+(TCo)$可证第一基本递归总是可行。
:::

::: proof
我们希望$y=F(x)$有$\Sigma_1$的定义
$\exists d,h,k(x\in d\wedge \mathrm{isFun}(h)\wedge \mathrm{isFun}(k)\wedge \mathrm{dom}(h)=d\wedge \mathrm{isTrans}(d)\wedge \forall (z,w)\in h(w=G(k(z)))\wedge \forall z\in d(k(z)=h\upharpoonright z)\wedge h(x)=y)$
和$\Pi_1$的定义$\forall d,h,k(...\to h(x)=y)$且它们可证等价。
不难意识到唯一需要注意的是存在$d$给出了$x$的传递包括。
:::

因此，此小节中我们总是默认所用的理论是某个$\Pi_1-GJ+(TCo)$的扩展。我们现在简要研究基本递归性。

::: theorem (元定理)
一元基本函数符号都是基本递归的。
:::

::: proof
对一元基本函数符号$F$，取同样基本的$G(f)=F(\mathrm{dom}(f))$，
验证$F(x)=G(F\upharpoonright x)$是显然的。
:::

鉴于拥有对集公理，我们其实可以说：

::: theorem (元定理)
将基本函数符号$G(x_\mathfrak{0},...,x_\mathfrak{n})$通过$\mathfrak{n}$元元组编码为$G'(x)$，
在$x=(x_\mathfrak{0},...,x_\mathfrak{n})$时$G'(x)=G(x_\mathfrak{0},...,x_\mathfrak{n})$，
否则$G'(x)=\varnothing$。
鉴于基本函数可以$\Delta_0$分段定义，$G'$同样基本，但它一元，因此它基本递归。
:::

::: remark*
然而，$G'$毕竟不是$G$。
在拥有二元函数符号$\{-,-\}$后，我们确实可以用$G'$计算原本的$G$，
但把对集函数符号自己压缩成一元函数符号之后就算不回来了。
:::

基本递归函数的限制同样是基本递归的。

::: theorem (元定理)
如果$F$是基本递归的，那么$F\upharpoonright$也是基本递归的。
:::

::: proof
假定$F(x)=G(F\upharpoonright x)$，令$G_1(x)=(x_{(2)}^{(0)},G(x_{(2)}^{(1)}))$，
再令$G_2(x)=G_1''(x)$，熟知它们都是基本的；记$H(x)=F\upharpoonright x$，
则有$H(x)=G_2(H\upharpoonright x)$。
:::

对多重基本递归这类操作，我们仅指出最特殊的二重基本递归。

::: theorem (元定理)
给定两个二元基本函数符号$G_1,G_2$，
如果一元函数符号$F_1,F_2$满足$F_1(x)=G_1(F_1\upharpoonright x,F_2\upharpoonright x)$且
$F_2(x)=G_2(F_1\upharpoonright x,F_2\upharpoonright x)$，则函数$F(x)=(F_1(x),F_2(x))$是基本递归的。
:::

::: proof
注意此时
$F(x)=(G_1(F_1\upharpoonright x,F_2\upharpoonright x),G_2(F_1\upharpoonright x,F_2\upharpoonright x))$
且$F\upharpoonright x=\{(a,(F_1(a),F_2(a)))|a\in x\}$，我们可用适当的$\Delta_0$分离子（换言之基础，
进而基本的）$G_3,G_4$来指出$G_3(F\upharpoonright x)=F_1\upharpoonright x$和
$G_4(F\upharpoonright x)=F_2\upharpoonright x$，
进而取$G_5(x)=(G_1(G_3(x),G_4(x)),G_2(G_3(x),G_4(x)))$，有$F(x)=G_5(F\upharpoonright x)$。
:::

我们甚至能容忍递归操作中的简单分类定义。

::: theorem (元定理)
如果$G(x)$是一元基本函数符号，$\varphi(x)$是一个$\Delta_0$公式，
则满足如下要求的$F$是基本递归的函数符号：$F(x)$在$\varphi(x)$时等于$G(F\upharpoonright x)$，
在$\neg\varphi(x)$时等于$\varnothing$。
:::

::: proof
此时$F$由$G'(f)=\{z\in G(f)|\varphi(\mathrm{dom}(f))\}$基本递归而成。
:::

比较讨厌的是，基本递归函数与基本递归函数的复合可以不是基本递归的，
且基本递归函数的像函数可以不是基本递归的（这使得它的性质不如基本函数）。
我们引入一个更宽松但恰当的要求以满足这两件事。

::: definition [和缓性]
如果$G(x)$是基本递归函数符号，$H(x)$是基本函数符号，
则称其复合$F(x)=H(G(x))$是和缓（gentle）的函数符号。
:::

::: theorem (元定理)
和缓函数的复合仍是和缓的。
:::

::: proof
我们先来考虑基本递归函数的复合。

**断言。** 基本递归函数的复合是和缓的。

**证明。** 假定$F_1$由$G_1$第一基本递归而成，$F_2$由$G_2$第一基本递归而成，
我们来证明$F_1\circ F_2$和缓。

如果传递集$u$包括有序对$(x,F_2(x))$，则称集合$f=F_1\upharpoonright u$对$x$是足够的；
此时显然有$f(F_2(x))=F_1(F_2(x))$。
我们希望找一个$F$，使得$F(x)$总是一个对$x$足够的集合，
且有二元基本函数$E$使得$F(x)=E(F\upharpoonright x,F_2\upharpoonright x)$，
这样$x\mapsto(F(x),F_2(x))$就是基本递归的，
而再对$q=(F(x),F_2(x))$取基本函数$q\mapsto q_{(2)}^{(0)}(q_{(2)}^{(1)})$即得到
$x\mapsto F(x)(F_2(x))=F_1(F_2(x))$和缓。

为了达到这一目的，我们首先来指出两个重要构造。
假定$b\subseteq\wp(a)$，
我们注意到$F_1\upharpoonright b=\{(x,G_1((F_1\upharpoonright a)\upharpoonright x))|x\in b\}$。
取基本函数$\phi(x,f)=(x,G_1(f\upharpoonright x))$，
则$F_1\upharpoonright b=\phi''(b\times\{F_1\upharpoonright a\})$；
进而我们令基本函数$H_1(b,f)=\phi''(b\times\{f\})$，
则$F_1\upharpoonright b=H_1(b,F_1\upharpoonright a)$。

接下来，我们取一个传递集$u$，我们希望构造一个一元基本函数$H_1^{T}$，
使得$F_1\upharpoonright\mathbf{T}(u)=H_1^{T}(F_1\upharpoonright u)$；
不难验证令$H_1^T(f)=H_1(\mathbf{T}(\mathrm{dom}(f)),f)$即可满足此条件。
对这个递归方程使用简单的（元）归纳法立即指出
$(H_1^T)^{(\mathfrak{l})}(F_1\upharpoonright u)=F_1\upharpoonright((\mathbf{T})^{\mathfrak{l}}u)$。

现在，我们假定$\mathrm{dom}(f)=x$满足每个$y\in x$对应的$f(y)$都对$y$足够（换言之，
$f$是目标$F$在$x$上的限制），来想办法造$F(x)$。
对$y\in x$，记$u(y)=\mathrm{dom}(f(y))$传递，则$\bar{u}=\bigcup_{y\in x}u(y)$同样传递，
且$F_1\upharpoonright\bar{u}=\bigcup\mathrm{ran}(f)$。
另一方面，$f(y)$对$y$足够，因此$(y,F_2(y))\in u(y)\subseteq\bar{u}$，
进而$F_2\upharpoonright x\subseteq\bar{u}$，换言之$t=\bar{u}\cup\{F_2\upharpoonright x\}$是传递的。
因此，
$F_1\upharpoonright t=H_1(t,F_1\upharpoonright \bar{u})$是$F_1$到一个包括$F_2\upharpoonright x$
的传递集上的限制。

但$F(x)$应当是$F_1$到一个包括$(x,F_2(x))$的传递集上的限制，
而我们知道$x=\mathrm{dom}(F_2\upharpoonright x)$和$F_2(x)=G_2(F_2\upharpoonright x)$。
我们考虑基本函数$K:g\mapsto(\mathrm{dom}(g),G_2(g))$，
则之前对$\mathbf{T}$的分析指出存在一个$\mathfrak{l}$使得任给传递集$r$和$x\in r$，
总有$K(x)\in\mathbf{T}^{(\mathfrak{l})}(r)$。
特别地取这个传递集为之前的$t$，
则$K(F_2\upharpoonright x)=(x,F_2(x))\in\mathbf{T}^{(\mathfrak{l})}(t)$，
而我们也知道
$F_1\upharpoonright((\mathbf{T})^{\mathfrak{l}}t)=(H_1^T)^{(\mathfrak{l})}(F_1\upharpoonright t)$
可以算出来，因此构造完成了。

总览以上过程，
我们知道应当令
$E(f,g)=(H_1^T)^{(\mathfrak{l})}H_1(\{g\}\cup\bigcup\mathrm{ran}(f),\\\bigcup\mathrm{ran}(f))$
以完成证明。

接下来的证明比较简单。
如果$F_1=G_1\circ H_1$和$F_2=G_2\circ H_2$如分解和缓，
则$F_1\circ F_2=G_1\circ H_1\circ G_2\circ H_2$。
$G_2$基本，因此基本递归，因此$H_1\circ G_2$和缓，假定$H_1\circ G_2=G_2'\circ H_1'$，
则$F_1\circ F_2=G_1\circ G_2'\circ H_1'\circ H_2$。
$H_1'$和$H_2$均基本递归，因此$H_1'\circ H_2$和缓，假定$H_1'\circ H_2=G_3\circ H$，
则$F_1\circ F_2=(G_1\circ G_2'\circ G_3)\circ H$和缓。
:::

::: theorem (元定理)
和缓函数的像仍是和缓的。
:::

::: proof
注意$F''(x)=\mathrm{ran}(F\upharpoonright x)$，只需证明和缓函数的限制仍是和缓的。
假定$F=G\circ H$如分解和缓，由于已知基本递归函数的限制仍然基本递归，
自然想法是找一个基本的$G'$使得$F\upharpoonright x=G'(H\upharpoonright x)$，
而这只需要取$G'(f)=\{(x,G(f(x)))|x\in\mathrm{dom}(f)\}$。
:::

在作为谓词的性质上，和缓性甚至比基本性还恰到好处。我们已知以下事实。

::: theorem (元定理)
$\varphi$是$\Delta_0$的，当且仅当其分离子$t_\varphi$是基础的，
当且仅当其特征函数$\chi_\varphi$是基本的。
:::

但和缓性不会加强其分离子的性质。

::: theorem (元定理)
$\varphi$的分离子$t_\varphi$和缓，当且仅当其特征函数$\chi_\varphi$和缓。
:::

::: proof
如果$\chi_\varphi$和缓，
则$t_\varphi(x)=\mathrm{dom}((\chi_\varphi\upharpoonright x)\cap (x\times\{\{\varnothing\}\}))$
是和缓函数的限制与基本函数的复合，显然和缓；如果$t_\varphi$和缓，
则$\chi_\varphi(x)=F\circ t_\varphi(\{x\})$，
这里基本函数$F$分段定义为$\varnothing\mapsto\varnothing$，不为空集的$x\mapsto\{\varnothing\}$。
:::

::: definition
我们称满足上一定理条件的$\varphi$为和缓类。
:::

正如$\Delta_0$类的分类定义不改变基本性，和缓类的分类定义同样也不改变和缓性。

::: theorem (元定理)
如果$\varphi$是和缓类，$F$是和缓函数，则$F_\varphi$同样是和缓函数，
这里$F_\varphi(x)$在$\varphi(x)$时取值为$F(x)$，在$\neg\varphi(x)$时取值为$\varnothing$。
:::

我们同样可以把分类定义放到递归操作中去。

::: theorem (元定理)
如果$G(x)$是和缓函数符号，$\varphi(x)$是一个和缓类，则满足如下要求的$F$是和缓的函数符号：
$F(x)$在$\varphi(x)$时等于$G(F\upharpoonright x)$，在$\neg\varphi(x)$时等于$\varnothing$。
:::

这两个定理的证明将作为本节最后一个定理的推论给出。

最后，我们同样在扩展语言$\mathcal{L}_A$中考虑和缓性。

::: definition
给定一元$A$中基本函数符号$G$，
我们称满足以下性质的一元函数符号$F$为由$G$经$A$中第一基本递归所得的函数符号，
存在$G$的这种$F$将称作$A$中的第一基本递归函数符号，简称$A$中的基本递归函数符号：
$y=F(x)\leftrightarrow \exists f(y=G(f)\wedge \mathrm{isFun}(f)\wedge\mathrm{dom}(f)=x\wedge\forall a\in x\exists b(b=f(a)\wedge b=F(a)))$
:::

::: theorem (元定理)
$GJ_0^A+(TCo)+(Fnd)_{\Pi_1}$可证$A$中的第一基本递归可行。
:::

::: proof
略。
:::

::: definition
如果$G(x)$是$A$中的基本递归函数符号，$H(x)$是$A$中基本函数符号，
则称其复合$F(x)=H(G(x))$是$A$中和缓（gentle）的函数符号。
:::

::: theorem (元定理)
$A$中和缓函数的复合仍是$A$中和缓的，$A$中和缓函数的像仍是$A$中和缓的。
:::

::: proof
略。
:::

我们希望指出的事实是，正如$\Delta_0$的$A$不新增基本函数，和缓的$A$也不新增和缓函数。
在此之前，我们先指出此时一个重要的引理。

::: theorem (元定理)
如果$A$的分离子$\mathcal{O}_A=H\circ F$如分解和缓，则对任意$A$中基本的函数符号$G$，
存在二元基本函数符号$\hat{G}$，使得任给传递集$u\ni x$均有$G(x)=\hat{G}(x,F\upharpoonright u)$。
:::

::: proof
这个定理意味着我们可以临时传入一个$y=F\upharpoonright u$来计算$\mathcal{O}_A$。
显然我们只需要用$H\circ f$替换$H\circ F=\mathcal{O}_A$，此处$f=(G^{T^A})^{(l)}(y)$，
而$G^{T^A}(f)=H_G(\mathbf{T}(\mathrm{dom}(f))\cup\mathrm{ran}(H\circ f),f)$，
其中$\phi(x,f)=(x,G(f\upharpoonright x))$，$H_G(b,f)=\phi''(b\times\{f\})$。
:::

::: theorem (元定理)
如果$A$是和缓类，则在$A$中和缓的函数就是和缓的函数。
:::

::: proof
假定$\mathcal{O}_A=H_1\circ F_1$如分解和缓，$F_1$由$G_1$基本递归而成。
我们只需证明在$A$中基本递归的函数符号$F_2$一定是和缓的，
即可由和缓函数与和缓函数的复合仍和缓立得完整结论。假定$F_2$由$G_2$基本递归而成，$G_2$是$A$中基本的。

使用相同证明手法，
我们在传递集$u$包括有序对$(x,F_2(x))$时称集合$f=F_1\upharpoonright u$对$x$是足够的。
我们同样宣称存在基本函数$F$，使得$F(x)$总是一个对$x$足够的集合，
且有二元基本函数$E$使得$F(x)=E(F\upharpoonright x,F_2\upharpoonright x)$。

取基本函数$\phi(x,f)=(x,G_1(f\upharpoonright x))$，
$H(b,f)=\phi''(b\times\{f\})$和
$H^{T^A}(f)=H(\mathbf{T}(\mathrm{dom}(f))\cup\mathrm{ran}(H_1\circ f),f)$，
同样考虑基本函数$K:g\mapsto(\mathrm{dom}(g),G_2(g))$，
则之前对$\mathbf{T}^A$的分析也指出存在一个$\mathfrak{l}$使得任给传递集$r$和$x\in r$，
总有$K(x)\in(\mathbf{T}^A)^{(\mathfrak{l})}(r)$。
令$E(f,g)=(H^{T^A})^{(\mathfrak{l})}H(\{g\}\cup\bigcup\mathrm{ran}(f),\bigcup\mathrm{ran}(f))$
即取得所要的$H$和对应的$F$。

我们注意，任给$f=F\upharpoonright x$都有$F(x)=E(f,F_2\upharpoonright x)$对$x$足够，
且$F_2\upharpoonright x\in\mathrm{dom}(F(x))$，
因此由引理有$F_2(x)=\hat{G}_2(F_2\upharpoonright x,E(f,F_2\upharpoonright x))$，
这指出$F$与$F_2$事实上是在基本函数的意义下共同递归，因此$F_2$是和缓的。
:::
