---
title: 世界基数及其强化
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
一言以概，世界基数就是让$V_\kappa$为$ZF$模型的基数；然而，这毕竟有两种形式化，我们首先来看错误版本。

::: definition [错误的版本]
在$\mathcal{L}_\in$中新增常元符号$K$，然后考虑以下理论：

1. $ZF$；

2. $\exists \kappa(\mathrm{isCard}(\kappa)\wedge V_\kappa=K)$；

3. $ZF$中每条公理相对化到$K$上形成的公式。

:::

这是错误的理论，是因为这样形成的世界基数$\{\alpha\in K|\mathrm{isOrd}(\alpha)\}$的存在性并不证明$ZF$一致（正如1.5.2中那个对正确基数的错误刻画），这整套理论与$ZF$等一致（注意到$ZF$一致时它有穷可满足）。

::: definition [正确的版本]
鉴于$ZF$递归可枚举，有一$\omega$上的递归函数（因而它$\Delta_1^{T_{Ar}}$可定义）举出其形式化版本$\ulcorner ZF\urcorner$作为一集合。如果$\forall s\in\ulcorner ZF\urcorner$都有$V_\kappa\vDash s$，则称$\kappa$是世界(worldly)基数。这样，世界基数在$ZF$中就有$\Pi_1$定义。
:::

显然，存在一个世界基数就能证明$\mathrm{Con}(ZF)$。我们先指出最小世界基数的一个性质，当然我们要默认所宣称的对象存在。

::: theorem [$ZF$]
最小的世界基数$\omega$共尾。
:::

::: proof
在最小的世界基数$\kappa$形成的$V_\kappa$中，它当然不认为自己$\omega$共尾，然而这不过是说明这共尾列在其中不可定义。鉴于$V_\kappa$事实上是个用$\kappa$可$\Delta_1$定义的集合，$V_\kappa\vDash$也是$\Delta_1$可定义的，因此对分层正确基数的讨论就告诉我们$V_\kappa$下让$V_\alpha\prec_{n}V_\kappa(n\in\omega)$的$\alpha$总是闭无界的，因此我们将这$\omega$个闭无界集交起来后若得到不空集，这集中元素就见证$\kappa$并非最小基数，因此它们交空，进而我们可以先任取$\alpha_0\in\kappa$，然后依次取$\alpha_{n+1}$为最小的大于$\alpha_n$且让$V_{\alpha_{n+1}}\prec_{n+1}V_\kappa$的序数，所得到的$\alpha_n$就见证$\mathrm{cf}(\kappa)=\omega$。
:::

世界基数本身并无更有趣的性质（它几乎仅是“存在$ZF$传递模型”的一个实例），但将它与正确基数的想法合起来考虑会得到一个有趣的强化。

::: definition
如果$\kappa$让$V_\kappa$是某个$\gamma>\kappa$形成的$V_\gamma$的初等子模型（注意这件事在$ZF$中$\Sigma_1$），则称$\kappa$是他世界(otherworldly)基数。
:::

虽然定义中没指出这点，但名称中我们其实指出：

::: theorem [$ZFC$]
他世界基数是世界基数。
:::

::: proof
如果$V_\kappa\prec V_\gamma$，我们先证明$\kappa$是基数：否则存在$R\in V_\kappa$序型为$\kappa$，但$V_\gamma$能看到它与一个序数双射，$V_\kappa$却看不到这一点，这就矛盾了。又显然$\omega$并非他世界（$V_\omega\vDash \mathbb{V=HF}$将其指定），$V_\kappa$自然满足除替代公理模式外的每条$ZFC$公理；为了证明替代公理模式，让我们考虑一个在$V_\kappa$上定义（$V_\kappa$认为的）真类函数的公式；鉴于$V_\kappa\in V_\gamma$，这公式在$V_\gamma$中给出一个集合；于是任给$V_\kappa$中的集合，$V_\gamma$能发现它的像集仍是集合，$V_\kappa$必赞同此事。
:::

在$V_\kappa$中并无一句子可言说$\kappa$他世界，$V_\gamma$也不知道$\kappa$他世界，但$V_\gamma$至少知道$\kappa$世界，这一论证持续下去就指出：

::: theorem [$ZFC$]
他世界基数之下的世界基数无界。
:::

::: proof
假定$\kappa$是他世界基数，我们对$\alpha\in\kappa$归纳地证明总能在$V_\kappa$中找到一长$\alpha$的世界基数列。$\alpha=\varnothing$自不必多说；$\alpha=\beta+1$时，鉴于$V_\kappa$知道存在长$\beta$的世界基数列，将$\kappa$塞进去后$V_\gamma$就知道存在长$\beta+1$的世界基数列，因此$V_\kappa$也知道这件事；在极限步，$V_\kappa$知道对任何$\beta<\alpha$都存在长$\beta$的世界基数列，于是可以对每个$\beta$选取这样一列东西，将它们全部并在一起后就有至少$\alpha$个世界基数。
:::

我们还可以继续加强他世界基数。

::: definition
如果$\kappa$让任何$\theta>\kappa$都继续有$\gamma>\theta$使得$V_\kappa\prec V_\gamma$（这句话$\Pi_2$了），则称$\kappa$是彻底(totally)他世界基数。
:::

显然彻底他世界基数一定他世界，进而（在$ZFC$里）一定世界；而正如世界基数在他世界基数之下无界，我们也有：

::: theorem [$ZFC$]
彻底他世界基数之下的他世界基数无界。
:::

::: proof
我们首先指出，彻底他世界基数自带一定的正确性。

**定理（$ZFC$）。** 彻底他世界基数$\Sigma_2$正确。

**证明。** 这是因为$\Sigma_2$句子都不妨被考虑为$\exists \theta(V_\theta\vDash \psi)$这样的句子，而这句子对当且仅当某个$\gamma>\theta$对应的$V_\gamma$认为它对，又鉴于一定有$\gamma>\theta$让$V_\kappa\prec V_\gamma$，这句子对就当且仅当$V_\gamma$认为它对，当且仅当$V_\kappa$认为它对。

这里的常数$2$显然不可改进，因为：

**推论（$ZFC$）。** 最小的彻底他世界基数小于最小的$\Sigma_3$正确基数。

**证明。**“存在彻底他世界基数”是$\Sigma_3$句子。

另一方面，这指出：

**推论（$ZFC$）。** 他世界基数不被同类误解；这是说如果$\kappa<\lambda$均为彻底他世界基数，则$V_\lambda$认为$\kappa$是彻底他世界基数。

**证明。** 这是因为$\kappa\in V_\lambda$而$\kappa$是彻底他世界基数这句话$\Pi_2$。

本定理的证明类似给出：任给$\alpha<\kappa$，$\kappa$自己是他世界基数，而“存在$\alpha$之上的他世界基数”这件事不过$\Sigma_1$，$\kappa$的$\Sigma_2$正确性指出$V_\kappa$知道这件事，因此有$\lambda$夹在$\alpha$和$\kappa$之间，$V_\kappa$认为$\lambda$是他世界基数；再次鉴于$\kappa$的$\Sigma_2$正确性，$\lambda$确实就是个他世界基数。
:::

总结起来，我们有：

::: theorem [$ZFC$]
以下理论依次推出后一个理论一致：

1. $ZFC+$彻底他世界基数无界多；

2. $ZFC+$存在彻底他世界基数；

3. $ZFC+$他世界基数无界多；

4. $ZFC+$存在他世界基数；

5. $ZFC+$世界基数无界多；

6. $ZFC+$存在世界基数；

7. $ZFC+$存在$\ulcorner ZFC\urcorner$的传递模型；

8. $ZFC$。

:::
