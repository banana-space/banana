---
title: 不可达与提升
---

正如世界基数给出$ZF$的自然模型，不可达基数给出$ZF^2$的自然模型。
我们不想重新来形式化二阶语义学，所以我们定义：

::: definition
如果$\kappa$不可数正则强极限，则称之为不可达基数。
:::

我们先来指出不可达的一个更易于理解的形式。

::: theorem
$\kappa$不可达，当且仅当$V_\kappa\vDash ZF^2$，当且仅当$V_{\kappa+1}\vDash NBG$。
:::

::: proof
如果$V_{\kappa+1}\vDash NBG+AC$，我们验证它不可达。
不可数显然，正则是因为有替代公理，强极限是幂集公理（和简单的对秩的考量）的运用。
我们验证反过来的方向，而事实上还可以说得更多：此时任取$X\subseteq V_{\kappa+1}$，
将其中元素视为二阶参数，
我们可以用$y\in\mathrm{Def}(V_\kappa,X)$当且仅当存在$a_0,...,a_{\mathfrak{n}-1}\in V_\kappa$、
$P_0,...,P_{\mathfrak{m}-1}$和一个二阶集合论句子
$\varphi(x,a_0,...,a_{\mathfrak{n}-1},P_0,...,P_{\mathfrak{m}-1})$使得
$x\in y\leftrightarrow \varphi$定义$\mathrm{Def}(V_\kappa,X)\subseteq V_{\kappa+1}$，
我们宣称这东西总是$NBG+AC$的模型，特别地取$X=V_{\kappa+1}$就得到$V_{\kappa+1}$是$NBG+AC$的模型。
:::

用带参数的一阶集合论也可能代替二阶集合论来刻画不可达性。

::: theorem
$\kappa$不可达当且仅当任给$R\subseteq V_\kappa$都有$\alpha\in\kappa$使得
$(V_\alpha,\in,R\cap V_\alpha)\prec(V_\kappa,\in,R)$，当且仅当这些$\alpha$总是闭无界多。
:::

::: proof
如果$\kappa$满足存在$\alpha$……，我们来验证它不可达；不可数无需多言。

1. 如果$\kappa$并不正则，取共尾$F:\mu\to\kappa$，取参数$R=F\cup\{\mu\}$，
   假定$\alpha\in\kappa$让$(V_\alpha,\in,R\cap V_\alpha)\prec(V_\kappa,\in,R)$，我们来导出矛盾：
   如果$\alpha\leq\mu$，则$V_\kappa$觉得$R$里有个序数，
   但$V_\alpha$觉得$R\cap V_\alpha$里只有有序对，这就不对；如果$\mu<\alpha$，
   则$V_\kappa$觉得$R$的函数部分定义域是$\mu$，
   但$V_\alpha$的$R\cap V_\alpha$看不到像在$\alpha$之上的那些点，
   所以它不认为$R$的函数部分定义域是$\mu$，还是不对。

2. 如果$\kappa$并不强极限，取满射$F$见证某$2^\mu\geq\kappa$，然后取参数$R=F\cup\{\mu\}$，
   其余矛盾同上。

如果$\kappa$不可达，我们验证这些$\alpha$在$\kappa$下闭无界。
闭是显然的，无界的证明类似反射原理：枚举$\omega$个无参集论公式，
然后用$\omega$步从某个$V_{\alpha_0}$开始递归地添加每个公式的证据，
最后对$V_{\alpha_\omega}$使用Tarski–Vaught测验。
:::

::: remark*
这可以视为某种反射原理。
:::

它有一个等一致的弱版本。

::: definition
如果$\kappa$不可数正则极限，则称之为弱不可达基数。
:::

::: theorem
如果$\kappa$弱不可达，则$\kappa$在$\mathbf{L}$中不可达。
因此，存在弱不可达基数与存在不可达基数等一致。
:::

::: proof
$\mathbf{L}\vDash AC+GCH$，所以极限就是强极限。
:::

不可达基数的强度远超彻底他世界基数，但它不如那个大：

::: theorem
不可达基数之下的他世界基数无界多。
:::

::: proof
我们都不需要传非平凡的参数$R$就能得到$V_\kappa$之下的初等链，于是显然它们全都是他世界基数。
:::

::: theorem
最小的不可达基数小于最小的彻底他世界基数。
:::

::: proof
这是因为存在不可达基数是个$\Sigma_1$句子，从而会因$\Sigma_2$正确性被反射到彻底他世界基数之下。
:::

::: theorem
存在不可达基数可证彻底他世界基数无界多一致。
:::

::: proof
这是因为$V_\kappa$里的初等链在内部见证链上长的都是彻底他世界基数。
:::

我们当然就接着会想加强不可达基数。

::: definition
我们一步到位地讨论彻底他世界基数的类似物。

1. 如果不可达基数$\kappa$对每个$\theta>\kappa$都有其上的不可达基数$\gamma>\theta$让
   $V_\kappa\prec V_\gamma$，则称$\kappa$是提升（uplifting）基数。

2. 如果不可达基数$\kappa$对每个$\theta>\kappa$都有其上的序数$\gamma>\theta$让
   $V_\kappa\prec V_\gamma$，则称$\kappa$是伪（pseudo）提升基数。

:::

正如彻底他世界基数恰好$\Sigma_2$正确，

::: theorem
伪提升基数必然$\Sigma_3$正确，甚至$\Sigma_3$正确基数在其下无界。
:::

::: proof
首先，伪提升基数必然彻底他世界，因此已有$\Sigma_2$正确性；
我们取一个伪提升基数$\kappa$验证其$\Sigma_3$正确性，
为此不妨随意考察一个$\Sigma_3$句子$\exists x\forall y\exists z(\varphi)$，
当然$\varphi$是$\Delta_0$的。

1. 如果这句子对，我们取$x$使得$\forall y\exists z(\varphi)$，不妨设$x\in V_\gamma$，
   这个$V_\gamma$让$V_\kappa\prec V_\gamma$。
   我们若能证明$V_\gamma\vDash\forall y\exists z(\varphi)$，
   因此$V_\gamma\vDash\exists x\forall y\exists z(\varphi)$，
   由$V_\kappa\prec V_\gamma$就有$V_\kappa\vDash\exists x\forall y\exists z(\varphi)$；
   为此任取$y\in V_\gamma$，我们要从$\exists z(\varphi)$推出$V_\gamma\vDash\exists z(\varphi)$，
   一个自然的想法是希望有$V_\gamma=H_\gamma$是$\mathbf{V}$的初等子模型；若不然，
   鉴于$H_\gamma\subseteq V_\gamma$，存在一个$V_\gamma$中的集合，
   其传递闭包到序数的双射不属于$V_\gamma$，于是$V_\kappa$也这样认为，这就矛盾了。

2. 如果$V_\kappa$认为这句子对，不妨取$x$使得$V_\kappa\vDash\forall y\exists z(\varphi)$，
   但$V_\kappa$本就$\Sigma_2$正确，因此$\forall y\exists z(\varphi)$本来就对，
   所以$\exists x\forall y\exists z(\varphi)$也本来就是对的。

现在来证明其下$\Sigma_3$正确基数无界。
若不然，假定$\alpha\in\kappa$知道$\kappa$中的$\Sigma_3$正确基数均在其下，
换言之$V_\kappa$认为所有$\Sigma_3$正确基数均在其下，
于是$V_\gamma$也认为所有$\Sigma_3$正确基数均在$\alpha$内，
但$V_\gamma$理应知道$\kappa$是$\Sigma_3$正确的（事实上$V_\gamma$会觉得$\kappa$要多正确有多正确），
这就矛盾了。
:::

::: corollary
最小的伪提升基数在最小的$\Sigma_4$正确基数之下。
:::

::: proof
这是因为存在伪提升基数是个$\Sigma_4$句子。
:::
