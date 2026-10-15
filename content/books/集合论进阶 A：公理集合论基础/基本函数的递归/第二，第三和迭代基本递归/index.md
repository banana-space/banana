---
title: 第二，第三和迭代基本递归
---

现在，我们来考察稍复杂一些的情形，它容纳一个（常值的）参数参与递归。

::: definition [第二基本递归]
给定二元基本函数符号$G$，
我们称满足以下性质的一元函数符号$F$为由$G$和集合$p$经第二基本递归所得的函数符号，
存在$G,p$的这种$F$将称作$p$-第二基本递归函数符号，简称$p$-基本递归函数符号：
$y=F(x)\leftrightarrow \exists f(y=G(p,f)\wedge \mathrm{isFun}(f)\wedge\mathrm{dom}(f)=x\wedge\forall a\in x\exists b(b=f(a)\wedge b=F(a)))$
:::

但我们其实有一个比它略简单的递归方案。

::: definition [远第二基本递归]
给定两个一元基本函数符号$G_0,G$，
我们称满足以下性质的一元函数符号$F$为由$G_0,G$和集合$p$经远第二基本递归所得的函数符号，
存在$G_0,G,p$的这种$F$将称作远$p$-第二基本递归函数符号，简称远$p$-基本递归函数符号：
$y=F(x)\leftrightarrow (x=\varnothing\wedge y=G_0(p))\vee(x\not=\varnothing\wedge\exists f(y=G(f)\wedge \mathrm{isFun}(f)\wedge\mathrm{dom}(f)=x\wedge\forall a\in x\exists b(b=f(a)\wedge b=F(a))))$
:::

显然，第二基本递归允许我们时时查看参数$p$，而远第二基本递归仅仅允许在第一次计算时查看参数$p$。
我们自然对应有两个和缓性概念。

::: definition
如果$G(x)$是$p$-基本递归函数符号，$H(x)$是基本函数符号，
则称其复合$F(x)=H(G(x))$是$p$-和缓的函数符号。
如果$G(x)$是远$p$-基本递归函数符号，$H(x)$是基本函数符号，
则称其复合$F(x)=H(G(x))$是远$p$-和缓的函数符号。
:::

幸运的是，这两个和缓性是等价的，我们从而不再需要刻意考察远第二基本递归与第二基本递归的区别。

::: theorem (元定理)
$p$-和缓当且仅当远$p$-和缓。
:::

::: proof
显然远$p$-和缓推出$p$-和缓，我们只要证明反过来的方向。
不妨只考虑$F$是经$G$递归而成的$p$-基本递归函数的情况，即有$F(x)=G(p,F\upharpoonright x)$。
取$K:x\mapsto(p,F(x))$，
显然可以通过$\Delta_0$分离和基本替代公理模式从$K\upharpoonright x$还原出$F\upharpoonright x$，
不妨设基本函数$G_0$实现了$G_0(K\upharpoonright x)=F\upharpoonright x$。

现在，$K(x)$在$x=\varnothing$时取值为$(p,G(p,\varnothing))$，
而在$x\not=\varnothing$时取值
$(\bigcup\mathrm{dom}(\mathrm{ran}(K\upharpoonright x)),G(\bigcup\mathrm{dom}(\mathrm{ran}(K\upharpoonright x)),G_0(K\upharpoonright x)))$。
这说明$K$远$p$-基本递归，从而$F$远$p$-和缓。
:::

因此，我们只要考虑$p$-和缓这一种概念即可。
显然，当$p\in\mathbf{HF}$时，$p$-基本递归就是普通的基本递归，
因此我们也会把基本递归称作$\varnothing$-基本递归，同样的把和缓称作$\varnothing-$和缓。
这提示一个更好的观察。

::: theorem (元定理)
任给一元基本函数$R_1,R_2$，若两集合$p,q$满足$R_1(p)=q$且$R_2(q)=p$，
则$p$-基本递归当且仅当$q$-基本递归，远$p$-基本递归当且仅当远$q$-基本递归，$p$-和缓当且仅当$q$-和缓。
:::

::: proof
这是因为基本函数的复合仍是基本函数。
:::

但不幸的是，$p$-和缓函数的复合可以不是$p$-和缓的，这是因为它的递归方程需要传入含有更多信息的参数。

::: theorem (元定理)
如果$F_1$是$p_1$-和缓的，$F_2$是$p_2$-和缓的，
则$F_1\circ F_2$是$(p_1,p_2,F_1\upharpoonright\mathrm{TCl}(p_2))$-和缓的。
:::

::: proof
同样只要考虑$F_1$是$p_1$-基本递归而$F_2$是$p_2$-基本递归的较简单情况，
寻找$F(x)$对$x$足够并使得$F$与$F_2$共同由$p$-基本递归生成，
我们主要希望考察$p=(p_1,p_2,F_1\upharpoonright\mathrm{TCl}(p_2))$是哪里来的。

若$f=F\upharpoonright x$，则对$y\in x$仍有$(y,F_2(y))\in u(y)=\mathrm{dom}(f(y))$传递，
故可以取$\bar{u}=\bigcup_{y\in x}u(y)$传递，且$F_2\upharpoonright x\subseteq\bar{u}$。
假定$F_1(x)=G_1(p_1,F_1\upharpoonright x)$而$F_2(x)=G_2(p_2,F_2\upharpoonright x)$，
当务之急是寻找合适的函数$K$和传递集$t$。

注意到我们现在要用到$p_2$和$F_2\upharpoonright x$两个参数，
取$K(p_2,g)=(\mathrm{dom}(g),\\G_2(p_2,g))$是没办法用$\mathbf{T}$覆盖住的，
因此现在的$K$应当是一元函数$K(q)=(\mathrm{dom}(q_{(2)}^{(1)}),G_2(q_{(2)}^{(0)},q_{(2)}^{(1)}))$，
这样在$q=(p_2,g)$而$g=F_2\upharpoonright x$时$K$就能正确地返回$(x,F_2(x))$。
进而，我们需要$q\in t$，这样才能有$K(q)\in\mathbf{T}^{\mathfrak{l}}(t)$。

这就说明像之前那样令$t=\bar{u}\cup\{F_2\upharpoonright x\}$并不够。
记$g=F_2\upharpoonright x$，我们展开$q$会得到至少有$t\supseteq\{q,\{p_2\},\{p_2,g\},p_2,g\}$，
再加入$\bar{u}$确实会让$g$变得传递，而加入$\mathrm{TCl}(p_2)$才能让$p_2$变得传递，
因此最终我们给出的构造是$t=\{q,\{p_2\},\{p_2,g\},p_2,g\}\cup\bar{u}\cup\mathrm{TCl}(p_2)$。
此时另一个矛盾又出现了：如果考虑传递集$v=\bar{u}\cup\mathrm{TCl}(p_2)$，则$t\subseteq\wp\wp\wp(v)$，
这说明我们造辅助函数$H$和$H^T$的手法又要稍作改动。

首先，若$b\subseteq\wp(a)$，
我们仍有基本函数$H_1(p_1,b,f)=\{(x,G_1(p_1,f\upharpoonright x))|x\in b\}$满足
$F_1\upharpoonright b=H_1(p_1,b,F_1\upharpoonright a)$，但我们并没有$t\subseteq\wp(v)$。
不过，由于我们确切地知道$t$中多出来的部分是什么样的，
我们确实能造出一个基本的$H'$使得
$F_1\upharpoonright t=H'(p_1,t,p_2,g,F_1\upharpoonright\mathrm{TCl}(p_2),F_1\upharpoonright \bar{u})$，
其中$p_1,p_2,F_1\upharpoonright\mathrm{TCl}(p_2)$由$p$给出，$t,F_1\upharpoonright\bar{u}$由$f$给出，
因此确有基本函数$H$使得$F_1\upharpoonright t=H(p,f,g)$。

由于$K(q)\in\mathbf{T}^{\mathfrak{l}}(t)$，
我们需要计算$F(x)=F_1\upharpoonright\mathbf{T}^{\mathfrak{l}}(t)$。
由于$\mathbf{T}(t)\subseteq\wp(t)$，
我们有
$F_1\upharpoonright \mathbf{T}(t)=H_1(p_1,\mathbf{T}(\mathrm{dom}(F_1\upharpoonright t)),F_1\upharpoonright t)$，
不妨记之为$F_1\upharpoonright\mathbf{T}(t)=H^T(p_1,F_1\upharpoonright t)$，
则
$F_1\upharpoonright\mathbf{T}^{\mathfrak{l}}(t)=H^T(p_1,H^T(p_1,H^T(...H^T(p_1,F_1\upharpoonright t))))$，
右边是$\mathfrak{l}$重的基本函数套娃，
不妨收缩记为$_\mathfrak{l}H^T(p_1,\cdot)=(H^T(p_1,-))^{\mathfrak{l}}(\cdot)$，
于是$F(x)=_\mathfrak{l}H^T(p_1,H(p,f,g))$。由于$p_1$可从$p$中读出，我们最终得到$F(x)=E(p,f,g)$。
:::

::: remark*
传递闭包$\mathrm{TCl}$并不是基本的（因为$GJ_0$不可证$(TCo)$），
但它是基本递归的（$\mathrm{TCl}(x)=x\cup\bigcup_{y\in x}\mathrm{TCl}(y)$）。
:::

但$p$-和缓类的概念不受影响。

::: theorem (元定理)
$\varphi$的分离子$t_\varphi$是$p$-和缓的，当且仅当其特征函数$\chi_\varphi$是$p$-和缓的。
:::

::: proof
如果$\chi_\varphi$是$p$-和缓的，
则$t_\varphi(x)=\mathrm{dom}((\chi_\varphi\upharpoonright x)\cap (x\times\{\{\varnothing\}\}))$是
$p$-和缓函数的限制与基本函数的复合，显然$p$-和缓；如果$t_\varphi$是$p$-和缓的，
则$\chi_\varphi(x)=F\circ t_\varphi(\{x\})$，
这里基本函数$F$分段定义为$\varnothing\mapsto\varnothing$，不为空集的$x\mapsto\{\varnothing\}$，
注意$(p,\varnothing)$与$p$之间显然存在一双$R_1,R_2$。
:::

::: definition
我们称满足上一定理条件的$\varphi$为$p$-和缓类。
:::

同样的，$p$-和缓的谓词中的$p$-和缓函数也不能断言为$p$-和缓函数。

::: theorem (元定理)
如果新谓词$A$的分离子$\mathcal{O}_A=H_1\circ F_1$如分解$p_1$-和缓，
则在$A$中$p_2$-和缓的函数事实上是$(p_1,p_2,F_1\upharpoonright\mathrm{TCl}(p_2))$-和缓的函数。
:::

::: proof
同上修改上一节中的证明。
:::

在此基础上，加强第二基本递归的方案有两种：一种是允许传入更多的变元，另一种是允许反复递归；
我们先来看第一种。

::: definition [第三基本递归]
给定一元基本函数符号$G$，若二元函数符号$F$满足$F(v,x)=G(F\upharpoonright(\{v\}\times x))$，
则称$F$由$G$经第三基本递归而成。由于元数不同不至混淆，我们也会简称这种递归方式为基本递归。
:::

如果我们把整个$F\upharpoonright (v\times x)$都传给$G$，
那么只需要一点点典范的编码技术就能把任意多元的递归都按进这种递归方式之中，
因此我们在第三基本递归中要求固定一个变元。
这种递归产生的二元函数在集合论中相当常见，序数的加法便是一个例子。
另一方面，它也确实是第二基本递归的自然推广。

::: theorem (元定理)
对任意集合$v$与第三基本递归的函数符号$F$，函数符号$F_v(x)=F(v,x)$是$v$-基本递归的。
:::

::: proof
查验定义即可，注意$v=\bigcup\mathrm{dom}(\mathrm{dom}(F\upharpoonright(\{v\}\times x)))$可以还原。
:::

注意二元基本函数符号按定义就不可能是基本递归的，但现在元数增加了，我们就可以宣称了。

::: theorem (元定理)
二元基本函数符号都是（第三）基本递归的。
:::

::: proof
若$F(x,y)$基本，则令$G(s)=F(\bigcup\mathrm{dom}(\mathrm{dom}(s)),\mathrm{ran}(\mathrm{dom}(s)))$，
显然$F(x,y)=G(F\upharpoonright(\{x\}\times y))$。
:::

::: remark*
由于基本递归的一元函数不妨再传入空参数$\varnothing$视为二元函数，这个定理表明这样合称是有道理的。
:::

换言之，补完了第三基本递归的定义之后，我们才能把基本算子都视为基本递归函数。
现在我们考虑另一种加强方案。

::: definition [迭代基本递归]
我们元递归地定义以下概念：

1. 称$p$-基本递归为$p$-基本$1$-递归。

2. 若$G$是$p$-基本$\mathfrak{n}$-递归的（一元）函数符号，
   则满足$F(x)=G((p,F\upharpoonright x))$的函数符号$F$称作$p$-基本$\mathfrak{n}+1$-递归的函数符号。
   （由于$G$是一元的，我们必须把$(p,F\upharpoonright x)$作为一个二元元组传给$G$）

3. 若存在$\mathfrak{n}$使得$F$是$p$-基本$\mathfrak{n}$-递归的函数符号，
   则称$F$是$p$-基本有穷迭代递归的函数符号，简称$p$-基本有穷递归。

:::

::: remark*
迭代基本有穷递归其实比第三基本递归弱一点，
因为任何集合$p$都不能使得特殊的一元序数加法$\alpha\mapsto\alpha+\omega$成为
$p$-基本有穷递归的函数符号，但序数加法本身是第三基本递归的。
:::

我们不再讨论它们衍生的和缓性概念，转而考虑以下问题：正如基本函数对应于$GJ_0$，
我们能否找到基本递归函数对应的弱集合论？
