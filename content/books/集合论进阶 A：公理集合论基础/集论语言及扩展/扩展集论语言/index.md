---
title: 扩展集论语言
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
由于在接下来的实践中，我们将极度重视所用公式的复杂度，我们需要严格考察集合论语言的扩展会给理论带来什么变化。首先，我们来观察加入谓词后会发生什么；值得注意的是，零元谓词只有真假两个可能，因此加入之并无意义。

::: definition
考虑扩展一个$\mathfrak{n}+1$元谓词$A(x_0,...,x_\mathfrak{n})$的集合论语言$\mathcal{L}_A=\{=,\in,A\}$为例。我们首先定义对应的Levy层级：

- $x\in y$，$x=y$和$A(x_0,...,x_{\mathfrak{n}})$是$\Delta_{0;A;}$公式。

- 余下照抄。

对应的，我们会考虑各种$\Gamma_{\mathfrak{n};A;}$公理模式。
:::

如果不考虑公理组的扩展，语言的扩展毫无意义。

::: theorem [元定理]
任给$\mathcal{L}_{\in}$的理论$T$，$\mathcal{L}_A$中的同一套理论对$T$保守，即它不会在原来的语言$\mathcal{L}_{\in}$中额外证明任何公式。
:::

::: proof
利用完备性定理，此论证是显然的。
:::

然而，我们确实希望能在扩展公理组后仍然得知理论保守，这催生出以下定义。

::: definition
给定$\mathcal{L}_{\in}$中的公式$\varphi(x_0,...,x_{\mathfrak{n}})$和理论$T$。我们称$\mathcal{L}_A$中的理论$T\cup\{A(x_0,...,x_{\mathfrak{n}})\leftrightarrow \varphi\}$为带有谓词$A$解释的$T$扩展，记为$T^\varphi$，这个具体的$\varphi$称作$A$的解释。

在指定理论$T^\varphi$后，我们定义以下从$\mathcal{L}_{A}$公式$\phi$到$\mathcal{L}_{\in}$公式$\phi^\varphi$的满映射，后者称作$\phi$在解释$\varphi$下的翻译：

- $x\in y$和$x=y$的翻译仍是$x\in y$和$x=y$。

- $A(x_0,...,x_{\mathfrak{n}})$的翻译是$\varphi(x_0,...,x_{\mathfrak{n}})$。

- 其余递归定义忠实地保持句子的结构。

:::

::: theorem [元定理]
$\mathcal{L}_A$中理论$T^\varphi$可证公式$\phi$，当且仅当$\mathcal{L}_{\in}$中$T$可证$\phi^\varphi$。
:::

::: proof
我们先证明仅当，假定$\phi_0,...,\phi_{\mathfrak{m}-1},\phi_\mathfrak{m}=\phi$是$T^\varphi$中一个对$\phi$的证明序列，我们在其上从前向后归纳证明$T$可证每一个公式的翻译，显然唯一值得讨论的就是$T^\varphi$新增的公理，而这条公理的翻译是$\varphi\leftrightarrow\varphi$显然重言，因此证毕。

当方向则来证明以下事实：$T^\varphi\vdash\phi\leftrightarrow \phi^\varphi$，于是由$T$可证后者立知$T^\varphi$可证前者。这里对$\phi$的结构归纳，唯一值得注意的同样是$\phi$是原子公式$A(x_0,...,x_{\mathfrak{n}})$的情况，这时这一断言的要求又是$T^\varphi\vdash A(x_0,...,x_{\mathfrak{n}})\leftrightarrow\varphi$，而这恰好就是我们加入的新公理，因此证毕。
:::

::: corollary
理论$T^\varphi$仍对理论$T$保守。
:::

::: proof
这是因为$\mathcal{L}_{\in}$公式的翻译总仍是它自己。
:::

我们还要考察$\varphi$复杂度对Levy层级的影响，这体现为一个简单的事实。

::: theorem [元定理]
我们区分以下三个情况。注意$T^\varphi$对$T$保守，$\Gamma_\mathfrak{n}^T$与$\Gamma_{\mathfrak{n}}^{T^\varphi}$在语言$\mathcal{L}_\in$中说的是同一件事。

- $\varphi$是$\Sigma_{\mathfrak{n}}^T$公式，$\mathfrak{n}\geq 1$。

  - $\Delta_{\mathfrak{m};A;}^{T^\varphi}$公式的翻译是$\Delta_{\mathfrak{n}+\mathfrak{m}}^T$公式；

  - $\Sigma_{2\mathfrak{m};A;}^{T^\varphi}$公式和$\Sigma_{2\mathfrak{m}+1;A;}^{T^\varphi}$公式的翻译是$\Sigma_{\mathfrak{n}+2\mathfrak{m}}^T$公式；

  - $\Pi_{2\mathfrak{m}+1;A;}^{T^\varphi}$公式和$\Pi_{2\mathfrak{m}+2;A;}^{T^\varphi}$公式的翻译是$\Pi_{\mathfrak{n}+2\mathfrak{m}+1}^T$公式。

- $\varphi$是$\Pi_{\mathfrak{n}}^T$公式，$\mathfrak{n}\geq 1$。

  - $\Delta_{\mathfrak{m};A;}^{T^\varphi}$公式的翻译是$\Delta_{\mathfrak{n}+\mathfrak{m}}^T$公式；

  - $\Sigma_{2\mathfrak{m}+1;A;}^{T^\varphi}$公式和$\Sigma_{2\mathfrak{m}+2;A;}^{T^\varphi}$公式的翻译是$\Sigma_{\mathfrak{n}+2\mathfrak{m}+1}^T$公式；

  - $\Pi_{2\mathfrak{m};A;}^{T^\varphi}$公式和$\Pi_{2\mathfrak{m}+1;A;}^{T^\varphi}$公式的翻译是$\Pi_{\mathfrak{n}+2\mathfrak{m}}^T$公式。

- $\varphi$是$\Delta_\mathfrak{n}^T$公式。

  - $\Delta_{\mathfrak{m};A;}^{T^\varphi}$公式的翻译是$\Delta_{\mathfrak{n}+\mathfrak{m}}^T$公式；

  - $\Sigma_{\mathfrak{m};A;}^{T^\varphi}$公式的翻译是$\Sigma_{\mathfrak{n}+\mathfrak{m}}^T$公式；

  - $\Pi_{\mathfrak{m};A;}^{T^\varphi}$公式的翻译是$\Pi_{\mathfrak{n}+\mathfrak{m}}^T$公式。

:::

::: proof
数量词。
:::

接下来我们考察加入函数后会发生什么。这比加入谓词要困难得多！

::: definition
考虑扩展一个$\mathfrak{n}$元函数$F(x_1,...,x_\mathfrak{n})$的集合论语言$\mathcal{L}_F=\{=,\in,F\}$为例。我们首先定义对应的Levy层级：

- 我们首先定义这个层级最底端的公式类，称为$\Delta_{0;;F}$公式：

  - $x\in y$和$x=y$是$\Delta_{0;;F}$公式。

  - 如果$\phi,\psi$是$\Delta_{0;;F}$公式，则$\neg\phi,\phi\wedge\psi,\phi\vee\psi,\phi\to\psi,\phi\leftrightarrow\psi$同样是$\Delta_{0;;F}$公式。

  - 如果$\phi$是$\Delta_{0;;F}$公式，则$\forall x\in y(\phi)$和$\exists x\in y(\phi)$是$\Delta_{0;;F}$公式。

  - 记$\forall x(x\in F(x_1,...,x_{\mathfrak{n}})\to...)$为$\forall x\in F(x_1,...,x_{\mathfrak{n}})...$，$\exists x(x\in F(x_1,...,x_{\mathfrak{n}})\wedge...)$为$\exists x\in F(x_1,...,x_{\mathfrak{n}})...$。它们合称对$F$受限的量词。

    $\phi$是$\Delta_{0;;F}$公式，则$\forall x\in F(x_1,...,x_{\mathfrak{n}})(\phi)$和$\exists x\in F(x_1,...,x_{\mathfrak{n}})(\phi)$是$\Delta_{0;;F}$公式。

  - 除此之外别无$\Delta_{0;;F}$公式。

- 我们现在交错地定义$\Sigma_\mathfrak{n}$和$\Pi_\mathfrak{n}$语句，方案照抄。

对应的，我们会考虑各种$\Gamma_{\mathfrak{n};;F}$公理模式。

注意到$x=F(x_1,...,x_\mathfrak{n})$可以作为$\mathfrak{n}+1$元谓词符号，我们记它们对应的Levy层级为$\Gamma_{\mathfrak{n};F;}$。
:::

同样的，如果不考虑公理组的扩展，语言的扩展毫无意义。

::: theorem [元定理]
任给$\mathcal{L}_{\in}$的理论$T$，$\mathcal{L}_F$中的同一套理论对$T$保守。
:::

::: proof
同样显然。
:::

同样的，我们来给出扩展函数的解释。

::: definition
给定$\mathcal{L}_{\in}$中的公式$\varphi(x,x_1,...,x_{\mathfrak{n}})$和理论$T$。我们称$\mathcal{L}_F$中的理论$T\cup\{x=F(x_1,...,x_{\mathfrak{n}})\leftrightarrow \varphi\}$为带有函数$F$解释的$T$扩展，记为$T^\varphi$，这个具体的$\varphi$称作$F$的解释。

在指定理论$T^\varphi$后，我们定义以下两个从$\mathcal{L}_{F}$公式到$\mathcal{L}_{\in}$公式的满映射。

第一个称作$\phi$在解释$\varphi$下的存在翻译$\phi^\varphi_\exists$：

- 原子公式$t_1=t_2$（此处$t_1,t_2$是$\mathcal{L}_F$中的非平凡项）的翻译是$\exists t((t=t_1)^\varphi_\exists\wedge (t=t_2)^\varphi_\exists)$（此处$t$是一个新的未出现在$t_1$和$t_2$中的变元符号），原子公式$x=t_0$（此处$t_0$是$\mathcal{L}_F$中的项）的翻译如下递归地定义：

  - 当$t$恰好是个变元符号时，$x=t$的翻译就是$x=t$。

  - 当$t$形若$F(t_1,...,t_\mathfrak{n})$时，此处$t_1,...,t_\mathfrak{n}$均为项，则$x=t$的翻译是$\exists x_1...\exists x_{\mathfrak{n}}(\varphi(x,x_1,...,x_{\mathfrak{n}})\wedge (x_1=t_1)^\varphi_\exists\wedge...\wedge (x_\mathfrak{n}=t_\mathfrak{n})^\varphi_\exists)$，此处$x_1,...,x_{\mathfrak{n}}$是一个新的未出现在$t$中的变元符号。

- 原子公式$t_1\in t_2$的翻译是$\exists x_1\exists x_2(x_1\in x_2\wedge (x_1=t_1)^\varphi_\exists\wedge (x_2=t_2)^\varphi_\exists)$。

- 其余递归定义忠实地保持句子的结构。

第二个称作$\phi$在解释$\varphi$下的任意翻译$\phi^\varphi_\forall$：

- 原子公式$t_1=t_2$的翻译是$\forall t((t=t_1)^\varphi_\forall\to (t=t_2)^\varphi_\forall)$，原子公式$x=t_0$的翻译如下递归地定义：

  - 当$t$恰好是个变元符号时，$x=t$的翻译就是$x=t$。

  - 当$t$形若$F(t_1,...,t_\mathfrak{n})$时，此处$t_1,...,t_\mathfrak{n}$均为项，则$x=t$的翻译是$\forall x_1...\forall x_{\mathfrak{n}}((x_1=t_1)^\varphi_\forall\wedge...\wedge (x_\mathfrak{n}=t_\mathfrak{n})^\varphi_\forall\to\varphi(x,x_1,...,x_{\mathfrak{n}}))$。

- 原子公式$t_1\in t_2$的翻译是$\forall x_1\forall x_2((x_1=t_1)^\varphi_\forall\wedge (x_2=t_2)^\varphi_\forall\to x_1\in x_2)$。

- 其余递归定义忠实地保持句子的结构。

:::

::: theorem [元定理]
如果$T\vdash\forall x_1...\forall x_{\mathfrak{n}}\exists x\forall y(x=y\leftrightarrow \varphi(y,x_1,...,x_{\mathfrak{n}}))$，则$\mathcal{L}_F$中理论$T^\varphi$可证公式$\phi$，当且仅当$\mathcal{L}_{\in}$中$T$可证$\phi^\varphi_\exists$，也当且仅当$\mathcal{L}_{\in}$中$T$可证$\phi^\varphi_\forall$。
:::

::: remark*
注意到相比于新增谓词的情况，这里需要额外要求$T$可证一件事，这件事将被称作$T$可证$\varphi$是一个函数的定义。
:::

::: proof
这个证明比上一个更困难，因为项会出现在任何地方，从而在翻译后破坏句子原有的结构。我们在这里不指出此事证明，欲闻其详者不妨参见冯琦《数理逻辑导引》定理13.18。
:::

::: corollary
若$T$可证$\varphi$是一个函数的定义，则$T^\varphi$对$T$保守。
:::

::: proof
同样的应用上一个定理，并注意到$\mathcal{L}_{\in}$公式的翻译总仍是它自己。
:::

然而，句子复杂度如何呢？我们之前的经验仅适用于考察$\Gamma^{T^\varphi}_{\mathfrak{m};F;}$这一层级的翻译，而对$\Gamma^{T^\varphi}_{\mathfrak{m};;F}$无能为力：对$F$受限的量词在翻译后并不能真的按照受限量词处理，因此$\Delta_{0;;F}$公式的翻译完全可以遍及整个Levy层级！我们将在下一节提出一个简单的想法来改变这一不幸的处境。

本节的最后，我们来考虑$T$不足以证明某公式$\varphi$确定义一个函数的情况。

第一种可能是$T\vdash \forall x_1...\forall x_\mathfrak{n}(\exists x(\varphi(x,x_1,...,x_\mathfrak{n}))\to \exists x\forall y(x=y\leftrightarrow \varphi(y,x_1,...,x_\mathfrak{n})))$。我们这时称$T$可证$\varphi$定义一个预函数，这是因为我们只需要再断言确实存在这样的$x$就能让它成为函数，而这往往可以通过合理地扩张理论$T$的证明能力来实现。

第二种可能是$T$只能证明$\forall x_1...\forall x_\mathfrak{n}\exists y(\varphi(y,x_1,...,x_\mathfrak{n}))$，我们在强调这一情形时时候往往意味着$T$可证这样的$y$不可能唯一，那么加入一个新的函数符号来满足这个公式就相当于是加入了一个Skolem函数。通过一些模型论手段，我们仍然能证明$T^\varphi$对$T$保守，但这并不是能通过如上的翻译过程解决的。这种时候，我们很难自如地将$\mathcal{L}_\in$中的公理模式扩展为$\mathcal{L}_F$中的类似的公理模式，我们指出以下定义和事实。

::: definition
我们考虑加入一元函数符号$\iota $得到的扩展集合论语言$\mathcal{L}_\iota$，直观上我们希望$\iota$能行使全局选择函数的功效；我们在新语言中考虑以下公理和公理模式：

- 全局选择公理：$\forall x(\exists y\in x\to \iota(x)\in x)$

- 扩展分离公理模式：任给$\mathfrak{n}+1$个变元的$\mathcal{L}_{\iota}$公式$\varphi$，$\forall v_0...\forall v_{\mathfrak{n}-1}\forall x\exists y\forall z(\\z\in y\leftrightarrow(z\in x\wedge \varphi(z,v_0,...,v_{\mathfrak{n}-1})))$

- 扩展替代公理模式：任给$\mathfrak{n}+2$个变元的$\mathcal{L}_{\iota}$公式$\varphi$，$\forall a\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\in a\exists y\forall z(z= y\leftrightarrow\varphi(x,z,v_0,...,v_{\mathfrak{n}-1}))\to\exists b\forall z(z\in b\leftrightarrow\exists x(x\in a\wedge\varphi(x,z,v_0,...,v_{\mathfrak{n}-1}))))$

在此语言中重新定义以下公理组：

- $Z$，$ZF$，$ZC$和$ZFC$仍然代指以前的公理组，这意味着分离公理模式和替代公理模式中出现的公式必须是$\mathcal{L}_\in$中的公式。

- $Z^e$，$ZF^e$，$ZC^e$和$ZFC^e$指的是将分离公理模式和替代公理模式改成对应的扩展分离公理模式和扩展替代公理模式所得的理论。

- $ZGC$指的是在$ZC$中将选择公理改成全局选择公理所得的公理组，$ZFGC$同理。

- $ZGC^e$指的是在$ZGC$中将分离公理模式改成对应的扩展分离公理模式所得的公理组，$ZFGC^e$同理且也扩展替代公理模式。

:::

我们列举以下事实。

::: theorem [元定理]
$Z^e$，$ZF^e$，$ZC^e$和$ZFC^e$均对未扩展版本保守，$ZGC$不可证$ZC$，$ZFGC$不可证$ZFC$，$ZGC^e$可证$ZC$，$ZFGC^e$对$ZFC$保守。
:::

::: remark*
$ZGC^e$是否相对$ZC$保守仍属世界未解之谜。$ZGC$不可证$ZC$和$ZFGC$不可证$ZFC$的直观原因是我们没有获得扩展分离公理模式，因此不能从集合$x\times\bigcup x$上面用含$\iota$的公式分离出$x$上的选择函数；当然构造对应的模型是比较头痛的，请读者查阅最后一章以获得此证明的细节。
:::

::: proof
我们这里摘录Haim Gaifman在Global and Local Choice Functions中获得的$ZFGC^e$对$ZFC$保守的初等证明。在集合论中，初等往往意味着我们没有使用力迫法，因此读者应当在合适的时候再来看这个证明。以下常有此情况，望读者海涵。

考虑所有形如$(V_\alpha,\in,f)$的结构，其中$\alpha$是极限序数，$f$是整个$V_\alpha$上的选择函数。将全体这类结构合称一个真类$T_\mathfrak{0}$。值得注意的是，$T_\mathfrak{0}$被子结构关系（记为$\subset$，即便它并不是）束成一树，且其上同高度的节点必然是同一个$V_\alpha$上的不同结构。我们现在归纳地对自然数$\mathfrak{n}$指出新的真类$T_\mathfrak{n}$，使得它们满足以下要求：

1. $T_\mathfrak{n+1}\subseteq T_\mathfrak{n}$

2. $M_1,M_2\in T_\mathfrak{n}\to M_1\subset M_2\to M_1\prec_\mathfrak{n} M_2$

3. $\forall\alpha\exists\beta>\alpha\forall M\in T_\mathfrak{n}\exists M'\in T_\mathfrak{n+1}(\mathrm{rank}_\in(M)=\alpha\wedge \mathrm{rank}_\in(M')=\beta\wedge M\subset M')$

4. 每个$T_\mathfrak{n}$都对其内的结构升链取并操作封闭，换言之被子结构关系束成一树。

如果这一系列$T_\mathfrak{n}$确能满足条件地被构造出来，我们宣称$ZFGC^e$对$ZFC$保守。这是因为：

**证明。** 对每个$\mathfrak{n}$和$\alpha$，有性质$3$我们知道存在$\beta>\alpha$使得每个$T_\mathfrak{n}$中秩$\alpha$的结构都能被扩张为一个$T_{\mathfrak{n+1}}$中秩$\beta$的结构，而根据性质$1$这个结构也在$T_\mathfrak{n}$中，于是必然存在最小的$\alpha'$使得每个$T_\mathfrak{n}$中秩$\alpha$的结构都能被扩张为一个$T_{\mathfrak{n}}$中秩$\alpha'$的结构。于是对给定$\alpha=\alpha_0$，我们可以造出序数多个$\alpha_\sigma$使得$\alpha_{\sigma+1}$是如前所要的$\alpha_\sigma'$，而$\sigma$是极限时$\alpha_\sigma$是前面所有东西的极限。记这个序数的真子类为$\Omega_\mathfrak{n}(\alpha)$。

鉴于性质$4$，我们确实可以断言：任给$\Omega_{\mathfrak{n}}(\alpha)$中两序数$\beta\leq\gamma$，总有任何$T_\mathfrak{n}$中秩$\beta$的结构都能被扩张为一个$T_{\mathfrak{n}}$中秩$\gamma$的结构（极限步时我们有一串升链）；按定义可见$\Omega_\mathfrak{n}(\alpha)$是闭无界的。现在做类$S_\mathfrak{n}=\{\alpha|\exists f((V_\alpha,\in,f)\in T_\mathfrak{n})\}$，则显然据性质$2$我们可以加强地说：$\alpha\in S_\mathfrak{n}$时，任给$\Omega_{\mathfrak{n}}(\alpha)$中两序数$\beta\leq\gamma$，总有任何$T_\mathfrak{n}$中秩$\beta$的结构都能被扩张为一个$T_{\mathfrak{n}}$中秩$\gamma$的结构，且这个秩$\beta$的结构其实是秩$\gamma$的结构的$\mathfrak{n}$级初等子结构（保持且反射所有量词数量不超过$\mathfrak{n}$个的公式的真假）。

于是我们其实在$ZFC$里说明了：任给$\mathfrak{n}$级公式$\varphi$，若其中全体自由变元均取值于某$V_\beta$，其中$\beta\in\Omega_{\mathfrak{n}}(\alpha)$且$\alpha\in S_\mathfrak{n}$，则$\varphi$当且仅当$V_\beta\vDash\varphi$。再简略地说：这些$V_\beta$全都是全宇宙$\mathbf{V}$的$\mathfrak{n}$级初等子模型。

接下来我们断言：任给$ZFGC^e$的有穷子集$\Phi$，都存在$\mathfrak{n}_0$使得所有不小于它的$\mathfrak{n}$都满足（$ZFC$可知的）$T_\mathfrak{n}$中每个结构都是$\Phi$的模型。

如果$\Phi$里面没有任何替代公理，那$\mathfrak{n}_0=\mathfrak{0}$就行了。我们现在来查看某个特定的扩展语言中的句子$\varphi(\bar{x},v_1,v_2)$，假定其中有$\mathfrak{k}$重量词，我们证明：任给$\mathfrak{n}=\mathfrak{k}+3$对应的$T_\mathfrak{n}$中的结构$M$，如果$M\vDash \forall v_1\in x\exists v_2(\varphi)$，则$M\vDash \exists y\forall v_1\in x\exists v_2\in y(\varphi)$。

这个证明其实相当简单。假定$\mathrm{rank}_\in(M)=\alpha$，我们将$T_n$里的$M$扩展到$T_n$里的$M'$，这样$M$就是$M'$的$\mathfrak{n}$级子模型；在$M'$里面，$y=V_\alpha$确实见证$M\vDash \exists y\forall v_1\in x\exists v_2\in y(\varphi)$，这恰好是因为前提$M\vDash \forall v_1\in x\exists v_2(\varphi)$说明这些$v_2\in V_\alpha$。又由于这个句子的量词数量是$\mathfrak{k}+3=\mathfrak{n}$，$M$作为$\mathfrak{n}$级初等子模型自然同样赞同这个句子。这就完成了证明。

最后就很简单了：假定$\Phi\vdash\varphi$，此处$\varphi$是未扩展的语言中的句子。由以上断言取$\mathfrak{n}$使得$T_\mathfrak{n}$中尽皆都是$\Phi$的模型，且$\mathfrak{n}$不小于$\varphi$中量词的重数。取$T_\mathfrak{n}$中随便一个$M$，则$M\vDash\Phi$，于是$M\vDash\varphi$，于是$V_\alpha\vDash\varphi$，但$V_\alpha$是$\mathbf{V}$的$\mathfrak{n}$级初等子模型，这就说明$\varphi$（在$ZFC$里就知道）是对的。

现在来构造这一列$T_\mathfrak{n}$。由归纳法，我们不妨假定不小于$\mathfrak{n}$的逐级$T_\mathfrak{0}\supseteq ...\supseteq T_\mathfrak{n}$均已按满足条件的方式构造好了，现在要$T_{\mathfrak{n+1}}$同样满足诸要求。

先构造。为了满足第一条，我们直接从$T_\mathfrak{n}$里面选出满足以下要求的$M$合成所要的$T_\mathfrak{n+1}$：对任何扩展语言里的$\mathfrak{n}$级公式$\varphi(\bar{x},v)$，$\bar{x}\in M$，如果存在$M'\in T_\mathfrak{n}$扩张$M$且$M'\vDash \exists v(\varphi)$，则早已有$M\vDash \exists v(\varphi)$。现验诸性质。第一条已经由定义满足，第二条也由定义显然；第四条由归纳假设并起来还在$T_\mathfrak{n}$里面，注意到扩张两次也是扩张由所并结构的要求即知。以下证明第三条同样正确，这是整个证明的核心部分。注意到由整个归纳假设，我们只需要构造不小于$\alpha$的$\beta$（回退一层，然后变大到本层，然后变得不小于，这就是大于了）。

我们先对每个由$T_\mathfrak{n}$中结构构成的集$X$定义一个同样由$T_\mathfrak{n}$中结构构成的$X^+$，使得其中有且仅有$X$中结构的扩张，且$X^+$中所有结构具有相同的$\mathrm{rank}_\in$。如果$X$中所有结构已经同秩，则直接取$X^+=X$；否则注意到$\Omega_\mathfrak{n}(\alpha)$在$\mathbf{Ord}$中闭无界，把$X$中每个结构的秩生成的闭无界类全部交起来（只有集合多个）仍然是个闭无界类，取其中最小者，然后对$X$中每个结构挑选秩等于之的一个扩张，收集起来即得$X^+$。

现在我们来考虑建造$T_\mathfrak{n}$结构到$T_\mathfrak{n+1}$结构的扩张，一个自然的想法是看看某个$T_\mathfrak{n}$结构$M$距离成为一个$T_\mathfrak{n+1}$结构有多远，于是我们对每个$\mathfrak{n}$级公式$\varphi(\bar{x},v)$考虑以下集合$D_\varphi(M)$，它收集了全体这样的属于$M$的$\bar{x}$：$M\vDash\neg\exists v\varphi$，但存在$M$的扩张$M'$满足$M'\vDash\exists v\varphi$。我们立即得到$D_\varphi(M)\subseteq M$，且$M$是$T_\mathfrak{n+1}$结构当且仅当$D_\varphi(M)$对任何$\varphi$都是空集。

我们先来看同在$T_\mathfrak{n}$中的扩张$M\prec_\mathfrak{n} M'$，这是$\mathfrak{n}$级初等扩张就说明$M'\vDash \neg\exists v\varphi$就必有$M\vDash \neg \exists v\varphi$，换言之$D_\varphi(M')\cap M\subseteq D_\varphi(M)$；特别的，如果$\bar{x}\in D_\varphi(M)$，我们取扩张$M'\vDash \exists v\varphi$，则$\bar{x}\not\in D_\varphi(M')$，于是$D_\varphi(M')\cap M\subsetneq D_\varphi(M)$。我们的构造方案是：先反复如上过程，在集合步内将$D_\varphi(M)$变空，然后重复$\omega$步将每个$\varphi$对应的$D_\varphi(M)$变空；为了防止这个空了别的又不空了，我们的这个$\omega$步要让每个公式都被共尾地枚举（这显然是可以做到的）；最后，我们把这一串结构构成的升链全部并起来就可以了。下面来实现这个想法。

对$M\in T_\mathfrak{n}$和$\mathfrak{n}$级公式$\varphi(\bar{x},v)$，我们定义以下$H_\varphi(M)\subseteq T_\mathfrak{n}$：如果已有$D_\varphi(M)=\varnothing$，则$H_\varphi(M)=\{M\}$；否则，取最小的$\gamma$使得$D_\varphi(M)\cap V_\gamma\not=\varnothing$，然后取最小的$\beta$使得存在$M$的秩为$\beta$的扩张$M'$以满足$D_\varphi(M')\cap V_\gamma\subsetneq D_\varphi(M)\cap V_\gamma$。我们把所有满足这要求的$M'$收集起来得到$H_\varphi(M)$，注意其中每个$M'$都有相同的秩$\beta$。进一步，对于一集结构$X\subseteq T_\mathfrak{n}$，我们令$K_\varphi(X)=(\bigcup_{M\in X}H_\varphi(M))^+$（这里加一下是为了统一所有结构的秩）。由定义我们知道$K_\varphi(X)$中有且仅有$X$中结构的扩张，且其中所有结构秩相同，且任给$M\in X$和$M'\in K_\varphi(X)$若$D_\varphi(M)\cap V_\gamma$不空则必有$D_\varphi(M')\cap V_\gamma$是前者的真子集。

现在我们归纳地定义$K_\varphi^\delta(X)$如下：

1. $K_\varphi^0(X)=X^+$

2. $K_\varphi^{\delta+1}=K_\varphi(K_\varphi^{\delta})$

3. 如果$\delta$是极限序数，$K_\varphi^{\delta}=\{\bigcup_{\gamma\in\delta}M_\gamma|M_\gamma\in K_\varphi^{\gamma}$构成一个结构升链$\}$

由定义可知，每个$K_\varphi^\delta$都是一集等秩的$T_\mathfrak{n}$结构，且任给$M\in X$，若$D_\varphi(M)\cap V_\gamma$不空，则有$M\subset M^0\subset...\subset M^\delta\subset...$构成升链，且$M^\delta\in K^\delta_\varphi(X)$满足$D_\varphi(M)\cap V_\gamma\supsetneq D_\varphi(M^0)\cap V_\gamma\supsetneq...$，于是总有一个$\delta$迫使$D_\varphi(M^\delta)\cap V_\gamma=\varnothing$。

现在我们将$T_\mathfrak{n}$中秩$\alpha$的全体结构收为一集$X$。记$\alpha_0=\alpha$，$\beta_0$为$V_{\alpha_0}$的基数，$\gamma_0$为$\beta_0$的后继基数；简单的势的比较就说明任给$M\in K_\varphi^{\gamma_0}(X)$都有$D_\varphi(M)\cap V_{\alpha_0}=\varnothing$。不妨设$K_\varphi^{\gamma_0}(X)$中所有结构的秩都是$\alpha_1$，重复以上过程，我们就得到一列$\alpha_n,\beta_n$和$\gamma_n$。取$\gamma=\bigcup_{n\in\omega}\gamma_n$，我们就知道任何$M\in K_\varphi^{\gamma}(X)$都满足$D_\varphi(M)=\varnothing$。于是我们令这个$K_\varphi^\gamma(X)$为$K_\varphi^*(X)$。

用序数$\omega$枚举全体$\mathfrak{n}$级扩展语言中的公式为$\varphi_n$使得每个公式都被枚举了无穷多次，同样将$T_\mathfrak{n}$中秩$\alpha$的全体结构收为一集$X$，我们定义$X_0=X$，并递归地要求$X_{n+1}=K_{\varphi_n}^*(X_n)$，然后令$Y=\{\bigcup_{n\in\omega}M_n|M_n\in X_n$构成一个结构升链$\}$。由上所述性质我们就知道这确实将所有秩$\alpha$的$T_\mathfrak{n}$结构都扩张为一个秩不小于$\alpha$的$T_{\mathfrak{n+1}}$结构（落在$Y$里面）。
:::

::: remark*
不难意识到，我们其实并没有完全发挥这个构造的性质$2$的威力。Gaifman的论文中进一步指出，如果一个$ZFC$模型中的全体序数（在这个模型认为的$\in$下）构成的良序集在我们（外部世界）看来是$\omega$共尾的，则只需（同样从外部）添加一个其上的全局选择函数就能让它成为一个$ZFGC^e$模型（而无需添加任何新的集合）。
:::
