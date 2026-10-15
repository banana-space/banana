---
title: L的推广
---
我们将$\mathbf{L}$的构造推广到带一个谓词$\dot{A}$的扩展集合论语言$\mathcal{L}_{\dot{A}}$中。我们此时使用的集合论是$ZF$，但额外添加对所有含$\dot{A}$公式的分离公理模式。我们仍然有关于可定义性的讨论。

::: theorem [元定理]
若$M$传递，则对$\wp(M)$的元素$N$，以下四条件等价：

1. 有单自由变元公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，诸常元$v_0,...,v_{\mathfrak{n}-1}\in M$，满足$\forall x(x\in N\leftrightarrow x\in M\wedge M\vDash\varphi)$。

2. 有单自由变元$\Delta_{0;\dot{A};}$公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1},M)$，诸常元$v_0,...,v_{\mathfrak{n}-1}\in M$，满足$\forall x(x\in N\leftrightarrow x\in M\wedge \mathrm{Succ}(M)\vDash\varphi)$。

3. 有$\dot{A}-$基础函数符号$B$，使得$N=B(v_0,...,v_{\mathfrak{n}-1},M)$，$v_0,...,v_{\mathfrak{n}-1}\in M$。

4. 有$\dot{A}-$基本函数符号$R$，使得$N=R(v_0,...,v_{\mathfrak{n}-1},M)$，$v_0,...,v_{\mathfrak{n}-1}\in M$。

:::

::: proof
和以前的证明没啥区别。
:::

::: definition
记全体满足上等价条件的$M$子集构成的集为$\wp^{Def_{\dot{A}}}(M,\dot{A}^M)$。
:::

然而，用这个来造$L$层级会遇到一个问题：我们不知道$\wp^{Def_{\dot{A}}}$后的集合上面对$\dot{A}$的解释到底怎么办。因此，有两种补救方案，一种是宣称$\dot{A}$是集合$A$，另一种是宣称$\dot{A}$是类（从而可由一公式定义）。我们先考虑前者。

::: definition
在$ZF$所描述的集合宇宙中，我们指定一个集合$A$，然后将$\mathbf{V}$扩展为$\mathcal{L}_{\dot{A}}$结构$(\mathbf{V},A)$，使得$\dot{A}(x)$当且仅当$x\in A$。

我们在此时定义以下层级：

1. $L_0[A]=\varnothing$

2. $L_{\alpha+1}[A]=\wp^{Def_A}(L_\alpha[A],L_\alpha[A]\cap A)$

3. 对极限序数$\alpha$，$L_\alpha[A]=\bigcup_{\beta\in\alpha}L_\beta[A]$

由此产生的真类记为$\mathbf{L}[A]=\bigcup_{\alpha\in\mathbf{Ord}}L_\alpha[A]$。注意，由于$L_\alpha[A]\cap A$也被$\{x\in L_\alpha[\dot{A}]|\dot{A}(x)\}$所定义，$\mathbf{L}[A]$既可以视为在语言$\mathcal{L}_A$中无参可定义，也可以视为在语言$\mathcal{L}_\in$中带参数$A$可定义。在需要区分时，将前者记为$\mathbf{L}[\dot{A}]$。
:::

值得指出的是以下事实。

::: theorem
记$\bar{A}=A\cap\mathbf{L}[A]\in\mathbf{L}[A]$，则$\mathbf{L}[A]$满足$ZF$，且在其上将谓词$\dot{A}$解释为$\bar{A}$后它满足$\mathbf{V=L}[\dot{A}]$。更弱地，$\mathbf{L}[A]$满足$\exists A(\mathbf{V=L}[A])$。
:::

::: proof
$L_\alpha[A]\cap A=L_\alpha[A]\cap\bar{A}=L_\alpha[\bar{A}]\cap\bar{A}$。
:::

::: remark*
就是说$A$只有包含在$\mathbf{L}[A]$中的那部分信息$\bar{A}$为后者所知。
:::

不过，全局良序的定义仍然完好无损。

::: theorem
存在$\Sigma_1$公式对每个$\alpha$定义$L_\alpha[A]$上的关系$<_{\alpha}^{L[A]}$。
:::

凝聚性引理却有所不同。

::: lemma
如果$(M,R)\prec_{\Sigma_1}(L_\alpha[A],B)$，其中$\alpha$极限，$B\subseteq L_\alpha[A]$作为谓词让结构$(L_\alpha[A],B)$满足扩展语言中的分离公理模式，则$(M,R)$的坍塌必然形如$(L_\beta[A'],B')$，其中$\beta$同样极限，$B'\subseteq L_\beta[A']$作为谓词也能让$(L_\beta[A'],B')$满足扩展语言中的分离公理模式。
:::

::: proof
这同样是因为$\mathbf{V=L}[\dot{A}]$是$\mathcal{L}_{\dot{A}}$中的$\Pi_2$句子。
:::

换言之，凝聚性引理现在只能保证我们论域的结构，却无法确认$A'$与$A$、$B'$与$B$究竟有何关系，我们没办法对随便一个$A$证明$\mathbf{L}[A]\vDash GCH$。我们引入额外的条件。

::: definition
如果对任何极限序数$\alpha$和$\Sigma_1$初等嵌入$\pi:L_\beta[A']\to_{\Sigma_1} L_\alpha[A]$，都必然有$A\cap L_\beta[A']=A'\cap L_\beta[A']$，则称$A$有全局$L-$凝聚性。
:::

我们可以指出，许多简单的集都有全局$L-$凝聚性。

::: theorem
任何$A\subseteq\omega$都有全局$L-$凝聚性。
:::

::: proof
对任何$n\in\omega$都必须有$\pi(n)=n$，于是$A'=\pi^{-1}``A=A$。
:::

而全局$L-$凝聚性正是证明$GCH$所需的性质。

::: theorem [$ZFC$]
若$A$有全局$L-$凝聚性，则$\mathbf{L}[A]\vDash GCH$。
:::

::: proof
我们来证明：任给序数$\kappa\in \mathbf{L}[A]$，若$\mathbf{L}[A]$将其指认为基数，并将$\tau>\kappa$指认为其后继基数，则$\wp(\kappa)\cap \mathbf{L}[A]\subseteq L_\tau[A]$。

让我们取一个$x\in\wp(\kappa)\cap\mathbf{L}[A]$，不妨让$x\in L_\alpha[A]$，我们走进$\mathbf{L}[A]$里面来论证，不妨假定$A\in\mathbf{L}[A]$（否则以$\bar{A}$替之）。运用下行LS定理，让我们取包括$\kappa$和$x$的$L_\alpha[A]$的初等子模型$M$，其基数当不超过$\kappa$；坍塌之，由凝聚性引理得到某个$L_\beta[A']$，于是$\beta<\kappa^+=\tau$；又因为$A$全局$L-$凝聚，$A'\cap L_\beta[A']=A\cap L_\beta[A']$，因此$L_\beta[A']=L_\beta[A]$。鉴于坍塌过程中$\kappa$不可移动，$x\subseteq\kappa$当然也未曾移动，因此$x\in L_\beta[A]\subseteq L_\tau[A]$。
:::

::: corollary [$ZFC$]
任给$A\subseteq\omega$，$\mathbf{L}[A]\vDash GCH$。
:::

这个推论有两个强化。

::: theorem [$ZFC$]
存在$\alpha\in\mathbf{Ord}$，使得$\mathbf{L}[A]\vDash\forall\kappa\geq\aleph_\alpha(2^\kappa=\kappa^+)$。换言之，$GCH$在$\mathbf{L}[A]$充分高的地方成立。
:::

::: proof
只要让$\bar{A}\subseteq L_{\aleph_\alpha}[A]$。
:::

::: remark*
这说明全局$L-$凝聚的作用主要体现在层级底端。我们所需的条件甚至可以减弱到$\bar{A}\subseteq L_{(\aleph_{\alpha+1})^{\mathbf{L}[A]}}[A]$，具体技术细节不妨参考下个定理的证明。
:::

::: theorem
$(ZFC+\exists A\subseteq\omega_1(\mathbf{V=L}[A]))$
$GCH$成立。
:::

::: proof
由上个定理，其实只需要证明$CH$成立。对$\omega$的子集$x$，我们证明存在可数序数$\alpha$使得$x\in L_\alpha[A]$。在用到凝聚性引理时，我们只需要对$\pi:L_\beta[A']\to_{\Sigma_1} L_\alpha[A]$在$\beta<\omega_1$时证明$A\cap L_\beta[A']=A'\cap L_\beta[A']$，也就是$A'=A\cap\beta$。事实上，我们要论证$\pi$不能移动任何可数序数。

首先，$x=\omega$是$\Delta_0$的，所以$\pi(\omega)=\omega$。如果$\pi(\alpha)=\alpha$，鉴于$\mathrm{Succ}$是$\Delta_0$的，$\pi(\alpha+1)=\alpha+1$。现在考察极限序数$\gamma<\beta$。鉴于它可数，有其共尾序列$\langle \gamma_n|n\in\omega\rangle:\omega\to\gamma$，$\pi$既不能改变$\omega$，也不能改变任何$\gamma_n$（归纳假设），因此$\pi(\gamma)=\lim_{n\in\omega}\pi(\gamma_n)=\lim_{n\in\omega}\gamma_n=\gamma$。
:::

::: remark*
此定理不能继续改进到$A\subseteq\omega_2$的情形：假定$\mathbf{V}\vDash 2^{\aleph_0}=\aleph_2$，让$A$编码这个双射，那么$\mathbf{L}[A]$就不可能满足$CH$了。这个定理同样也不能改进为$ZFC$对所有$A\subseteq\omega_1$证明$\mathbf{L}[A]\vDash GCH$（事实上，$ZFC+\exists A\subseteq\omega_1(\mathbf{L}[A]\vDash\neg CH)$是一致的），其间区别在于$\omega_1$是$\mathbf{V}$看到的而不是$\mathbf{L}[A]$算出来的。
:::

现在，我们再回头看当时对$\dot{A}$究竟应当是集合还是应当是类的讨论，就相当清晰了。当它是无参可定义类时，显然我们直接有$\mathbf{L}[A]=\mathbf{L}$；因此我们要考虑的无非是它是含参可定义类的情况，而这相对于上述讨论无非是将$\cap A$换成$\varphi(...)$，其中并无本质困难。

$\mathbf{L}[A]$体现出$ZFC$中这样一种思想：任何集合都可编码为序数集。这个思想有两个佐证。

::: theorem [$ZFC$]
任给集$A$都有集$B\subseteq\mathbf{Ord}$使$\mathbf{L}[A]=\mathbf{L}[B]$。
:::

::: proof
取$\bar{A}$，然后考虑$\mathrm{TCo}(\bar{A})$到某基数$\kappa$的双射，顺便将其上的$\in$关系变为$\kappa$上的关系$R$。鉴于$R\subseteq\mathbf{Ord}^{(2)}$，我们用典范双射再次将其双射到一个序数集合$B\subseteq\mathbf{Ord}$；现在$A\in\mathbf{L}[B]$而$B\in\mathbf{L}[A]$，于是$\mathbf{L}[A]=\mathbf{L}[B]$。
:::

::: theorem
对两集合$A,B$，$\mathbf{L}[A]=\mathbf{L}[B]$的充要条件是对任何集合$C\subseteq\mathrm{Ord}$都有$C\in\mathbf{L}[A]\leftrightarrow C\in\mathbf{L}[B]$。
:::

::: proof
事实上我们可以证明：给两$ZF$传递模型$M,N$，若$M$还满足$AC$，且对任何集合$C\subseteq\mathrm{Ord}$都有$C\in M\leftrightarrow C\in N$，则$N=M$，特别地有$N$也满足$AC$。首先，鉴于$\mathbf{Ord}^{(2)}$到$\mathbf{Ord}$典范双射的存在，$M$和$N$共享一切序数上的关系。我们先证明$M\subseteq N$，然后证明$M=N$。

先证明$M\subseteq N$。对$X\in M$，故技重施将$\mathrm{TCo}(x)$上的$\in$关系编码为$\kappa=|\mathrm{TCo}(x)|$上的关系$E$，于是$E\in N$。现在鉴于$M,N$都必须正确计算$(\kappa,E)$的坍塌，我们就得到$(\mathrm{TCo}(x),\in)\in N$，特别地自然有$x\in N$。

现在超穷归纳证明$V_\alpha^M=V_\alpha^N$。显然只需证明后继步，于是对$x\in N$，我们证明$x\subseteq M$则$x\in M$。鉴于$x\subseteq M$，我们有$y\in M$使得$x\subseteq y$；我们取$M$中$y$到$|y|$的双射$f\in M\subseteq N$，则已有$f\in N$，从而$f``x\in N$；然而这是一集序数，于是又有$f``x\in M$，于是$x$作为其在$f\in M$上的原像属于$M$。
:::

一个更有趣的事实是，即便不一定有$x\in\mathbf{L}[x]$，我们仍然能说：

::: theorem [$ZFC$]
任给集$x$都有集$A$使得$x\in\mathbf{L}[A]$。
:::

::: proof
在上上个定理的证明中不要取$\bar{x}$。
:::

我们最后引入$\mathbf{L}(A)$。回想之前，当我们构造$\mathbf{L}[A]$时，已知的引理告诉我们只有那些可构造的元素被保留下来（$\bar{A}$），但显然许多时候我们并不如此希望，因此另一个方案是直接把集合塞进$\mathbf{L}$之中。

::: definition
递归地定义以下层级：

1. $L_0(A)=\mathrm{TCo}(A)$

2. $L_{\alpha+1}(A)=\wp^{Def}(L_\alpha(A))$

3. 对极限序数$\alpha$，$L_\alpha(A)=\bigcup_{\beta\in\alpha}L_\beta(A)$

由此产生的真类记为$\mathbf{L}(A)=\bigcup_{\alpha\in\mathbf{Ord}}L_\alpha(A)$。
:::

我们立即知道$\mathbf{L}(A)$是包括$A$的最小$ZF$内模型。不幸的是，我们显然有$\mathbf{L}(A)$满足$AC$当且仅当$\mathrm{TCo}(A)$上有可定义的良序，因此$\mathbf{L}(A)$更多时候被用来构造不满足$AC$的内模型，其中最重要的就是$\mathbf{L}(\mathbb{R})$，但我们这里不再展开讨论，仅指出：当集合$A\subseteq\mathbf{Ord}$时，$\mathbf{L}[A]=\mathbf{L}(A)$。
