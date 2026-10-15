---
title: 一阶逻辑的语义
---
我们将要学习的对于真的刻画来自于Tarski的工作，其后有更加丰富的哲学意蕴——但我们暂且放下这些讨论。

## 结构

::: definition
对于某个语言$\mathcal{L}$，我们称满足以下条件的$\mathcal{M}=\{M,\mathcal{F},\mathcal{P},-^{\mathcal{M}}\}$为这个语言的一个结构：

1. $M$是集合，$F\subseteq \{f:M^{(n)}\to M|n\in\omega\}$，$P\subseteq \bigcup_{n\in\omega}M^{(n)}$。

2. $-^{\mathcal{M}}:\mathcal{L}::\mathcal{F}\cup\mathcal{L}::\mathcal{P}\to\mathcal{M}::\mathcal{F}\cup\mathcal{M}::\mathcal{P}$是双射。

3. 对函数符号$f\in\mathcal{L}::\mathcal{F}$，$\mathrm{dom}f^{\mathcal{M}}=M^{\mathcal{L}::a_F(f)}$。

4. 对谓词符号$P\in\mathcal{L}::\mathcal{P}$，$P^\mathcal{M}\subseteq M^{\mathcal{L}::a_P(P)}$。

我们还将把形如$\mathrm{ass}:\mathcal{L}::X\to M$的函数称作这个结构上的一个原始赋值。
:::

::: remark*
我们提醒读者一个集合论上的小问题：我们定义有序对$(a,b)=\{\{a\},\\\{a,b\}\}$，然后递归地定义$X^{(2)}=X\times X=\{(a,b)|a,b\in X\}$，$X^{(n+1)}=X\times X^{(n)}$。虽然显然$X^{(n)}$和$X^n=\{f:n\to X\}$之间有典范的双射，但从定义上它们是不一样的。我们会把$X^n$里的元素记为$\langle x_0,...,x_{n-1}\rangle$，而把$X^{(n)}$里的元素记为$(x_0,...,x_{n-1})$。

同样的，你会发现二元函数是$f:X^{(2)}\to Y$而不是$f:X^2\to Y$，因此我们简写的是$f(x_1,x_2)=f((x_1,x_2))$而非$f(x_1,x_2)=f(\langle x_1,x_2\rangle)$，这也与直观相符。
:::

显然，原始赋值会帮我们把$\mathcal{L}$里的项实现为$\mathcal{M}$可定义的一些集合，进而把$\mathcal{L}$里的公式翻译为$\mathcal{M}$看到的一些集合论的事实。我们下面来详细叙述这个操作。

::: definition
给定$\mathcal{L}$的结构$\mathcal{M}$上的一个原始赋值$\mathrm{ass}$，我们递归地定义一个$\mathrm{Ass}:\mathcal{L}::\mathrm{Term}\to\mathcal{M}::M$如下：

1. $\mathrm{Ass}(x_n)=\mathrm{ass}(x_n)$。

2. $\mathrm{Ass}(f(t_0,...,t_{n-1}))=f^{\mathcal{M}}(\mathrm{Ass}(t_0),...,\mathrm{Ass}(t_{n-1}))$。

我们称这个$\mathrm{Ass}$为原始赋值$\mathrm{ass}$生成的赋值。

给定原始赋值$\mathrm{ass}$，我们对每个$x_n\in\mathcal{L}::X$和$a\in M$定义$\mathrm{let}^{x_n}_{a}(\mathrm{ass})$为一个新的原始赋值，它除了将$x_n$映到$a$之外与原先的$\mathrm{ass}$保持一致。这个新的原始赋值生成的赋值同样记为$\mathrm{let}^{x_n}_{a}(\mathrm{Ass})$。

现在，我们对所有的原始赋值$\mathrm{ass}$定义一个关系$\vDash$，对$\mathrm{L}::\mathrm{Formula}$的长度归纳：

1. $(\mathcal{M},\mathrm{ass})\vDash t_0\approx t_1$当且仅当$\mathrm{Ass}(t_0)=\mathrm{Ass}(t_1)$。

2. $(\mathcal{M},\mathrm{ass})\vDash P(t_0,...,t_{n-1})$当且仅当$(\mathrm{Ass}(t_0),...,\mathrm{Ass}(t_{n-1}))\in P^{\mathcal{M}}$。

3. $(\mathcal{M},\mathrm{ass})\vDash \neg\varphi$当且仅当$\neg((\mathcal{M},\mathrm{ass})\vDash\varphi)$，右侧通常也简写为$(\mathcal{M},\mathrm{ass})\\\not\vDash\varphi$。

4. $(\mathcal{M},\mathrm{ass})\vDash (\varphi\to\psi)$当且仅当$(\mathcal{M},\mathrm{ass})\not\vDash\varphi$或者$(\mathcal{M},\mathrm{ass})\vDash\psi$。

5. $(\mathcal{M},\mathrm{ass})\vDash \forall x(\psi)$当且仅当对每个$a\in M$都有$(\mathcal{M},\mathrm{let}^{x}_{a}(\mathrm{ass}))\vDash\psi$。

这个$\vDash$称作满足，$(\mathcal{M},\mathrm{ass})\vDash\varphi$读作结构$\mathcal{M}$在赋值$\mathrm{ass}$下满足$\varphi$。
:::

我们继续定义另一种$\vDash$。

::: definition
如果对任何满足公式集$\Gamma$中所有公式的结构$\mathcal{M}$和其上的赋值$\mathrm{ass}$均有$(\mathcal{M},\mathrm{ass})\vDash\varphi$，则称$\Gamma$（语义）蕴含$\varphi$，记为$\Gamma\vDash\varphi$。我们同样将$\{\psi\}\vDash\varphi$简记为$\psi\vDash\varphi$。
:::

首先，我们指出满足只与自由变元的赋值有关。

::: theorem
如果两个原始赋值$\mathrm{ass}_1$与$\mathrm{ass}_2$满足$\mathrm{ass}_1|_{\mathrm{fVar}(\varphi)}=\mathrm{ass}_2|_{\mathrm{fVar}(\varphi)}$，则$(\mathcal{M},\mathrm{ass}_1)\vDash\varphi$当且仅当$(\mathcal{M},\mathrm{ass}_2)\vDash\varphi$。换言之，只需要确定$\mathrm{ass}$在有穷集$\mathrm{fVar}(\varphi)$上的取值就足以确定是否有$(\mathcal{M},\mathrm{ass})\vDash\varphi$。
:::

::: proof
对$\varphi$的长度归纳。首先，不难归纳证明如果$\mathrm{ass}_1$与$\mathrm{ass}_2$满足对在某个项$t$中出现的全体变元符号赋值相同，则$\mathrm{Ass}_1(t)=\mathrm{Ass}_2(t)$。

1. 如果$\varphi$形如$P(t_0,...,t_{n-1})$，由上知$\mathrm{Ass}_1(t_i)=\mathrm{Ass}_2(t_i)$，因此显然有$(\mathcal{M},\mathrm{ass}_1)\vDash\varphi$当且仅当$(\mathcal{M},\mathrm{ass}_2)\vDash\varphi$。

2. 如果$\varphi$形如$\neg\psi$或$(\phi\to\psi)$，证明是简单的。

3. 如果$\varphi$形如$\forall x(\psi)$，如果$x$不是$\psi$的自由变元则显然，否则对$\psi$运用归纳假设，注意到$\varphi$的自由变元恰好是$\psi$的自由变元去掉$x$，而根据这时候满足的定义我们会确定$x$的赋值，即得证。

:::

::: corollary
对含$n$个自由变元的公式$\varphi(x_{m_0},...,x_{m_{n-1}})$，$(\mathcal{M},\mathrm{ass})\vDash\varphi$可以记为$\mathcal{M}\vDash\varphi[\mathrm{ass}(x_{m_0}),...,\mathrm{ass}(x_{m_{n-1}})]$。
:::

现在，我们来建立一阶逻辑的可靠性定理。我们先给出一个引理。

::: lemma [替换引理]
如果$\mathrm{Sub}^x_t(\varphi)$，则$(\mathcal{M},\mathrm{ass})\vDash\mathrm{sub}^x_t(\varphi)$当且仅当$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}(\mathrm{ass}))\vDash\varphi$。
:::

::: proof
对公式$\varphi$实行归纳。

1. $\varphi$形如$P(t_0,...,t_{n-1})$。此时
$(\mathcal{M},\mathrm{ass})\vDash \mathrm{Sub}^x_t(P(t_0,...,t_{n-1}))$当且仅当
$(\mathrm{Ass}(\mathrm{Sub}^x_t(t_0)),...,\mathrm{Sub}^x_t(t_{n-1}))\in P^\mathcal{M}$当且仅当
$(\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{Ass}(t_0),...,\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{Ass}(t_{n-1}))\in P^\mathcal{M}$当且仅当
$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{ass})\vDash P(t_0,...,t_{n-1})$。

2. $\varphi$形如$t_1\approx t_2$。与上类似。

3. $\varphi$形如$\forall y(\psi)$。此时若$x$不在$\varphi$中自由出现，则由自由变元决定性显然。下讨论自由出现的情形：注意到无冲突替换要求$y$不在$t$出现且$t$在$\psi$中也可以无冲突替换，这说明对任何$d\in M$都有$\mathrm{Ass}(t)=\mathrm{let}^y_{d}\mathrm{Ass}(t)$。又注意到$\mathrm{Sub}^x_t(\varphi)=\forall y(\mathrm{Sub}^x_t(\psi))$，可如下做连续等价推导：

   $(\mathcal{M},\mathrm{ass})\vDash\mathrm{sub}^x_t(\varphi)$
当且仅当对所有的$d\in M$，$(\mathcal{M},\mathrm{let}^y_d\mathrm{ass})\vDash\mathrm{Sub}^x_t(\psi)$
当且仅当对所有的$d\in M$，$(\mathcal{M},\mathrm{let}^x_{\mathrm{let}^y_d\mathrm{Ass}(t)}\mathrm{let}^y_d(\mathrm{ass}))\vDash\psi$
当且仅当对所有的$d\in M$，$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{let}^y_d(\mathrm{ass}))\vDash\psi$
当且仅当对所有的$d\in M$，$(\mathcal{M},\mathrm{let}^y_d\mathrm{let}^x_{\mathrm{let}^y_d\mathrm{Ass}(t)}(\mathrm{ass}))\vDash\psi$
当且仅当$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}(\mathrm{ass}))\vDash\psi$。

4. $\varphi$形如$\neg \psi$。此时
$(\mathcal{M},\mathrm{ass})\vDash\mathrm{Sub}^x_t(\varphi)$当且仅当
$(\mathcal{M},\mathrm{ass})\not\vDash\mathrm{Sub}^x_t(\psi)$当且仅当
$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{ass})\not\vDash\psi$当且仅当
$(\mathcal{M},\mathrm{let}^x_{\mathrm{Ass}(t)}\mathrm{ass})\vDash\varphi$。

5. $\varphi$形如$(\phi\rightarrow\psi)$。类上。

综合五情况证毕。
:::

::: theorem [可靠性定理]
$\Gamma\vdash\psi$则$\Gamma\vDash\psi$。
:::

::: proof
显然我们会对证明序列归纳，证明满足$\Gamma$中每个公式的$(\mathcal{M},\mathrm{ass})$同样满足证明序列中的每一个公式，从而满足最后一个公式。换言之，我们只需证明它总是满足逻辑公理，且满足MP规则。我们先来验证没有经过全称概括的那些逻辑公理。

1. 前三条逻辑公理：直接验算真值表即可。以第一条为例，$(\mathcal{M},\mathrm{ass})\vDash\varphi$总是不真则假，$(\mathcal{M},\mathrm{ass})\vDash\psi$亦然，只需列举四种可能情况，根据定义发现在每种情况下均有$(\mathcal{M},\mathrm{ass})\vDash(\varphi\to(\psi\to\varphi))$即可。

2. 第四条逻辑公理：

3. 第五条逻辑公理：

4. 第六条逻辑公理：

5. 第七条逻辑公理：根据$\forall a\in M(a=a)$恒成立显然。

6. 第八条逻辑公理：考察所有满足$x\approx y$的结构与赋值，不难归纳得出它在每个项上都可以将任意个$x$替换为$y$而不改变赋值，进而将任意个$x$替换为$y$不改变原子公式的真假，进而不改变全体公式的真假。

由于以上所有证明均为对$\mathrm{ass}$做任何要求，根据（元语言的）概括定理，我们就证明了以上所有公式的所有全称概括都被任何$(\mathcal{M},\mathrm{ass})$满足，换言之任何逻辑公理都被任何$(\mathcal{M},\mathrm{ass})$满足。

最后，只需要证明$(\mathcal{M},\mathrm{ass})\vDash(\varphi\to\psi)$且$(\mathcal{M},\mathrm{ass})\vDash\varphi$时，$(\mathcal{M},\mathrm{ass})\vDash\psi$。这可以直接根据满足的定义得出。
:::

## 结构之间的态射

我们现在先来定义什么叫模型。

::: definition
给定句子集$\Gamma$，我们令$\mathrm{fVar}(\Gamma)=\bigcup\{\mathrm{fVar}(\varphi)|\varphi\in\Gamma\}$为这个句子集的自由变元集。

如果$\mathrm{fVar}\Gamma=\{x_{i}|i\in I\}$，这里指标集$I\subseteq\omega$。给定结构$\mathcal{M}$和，如果一个$\bar{a}\in M^I$满足对任意$\varphi(x_{i_j})\in\Gamma$都有$\mathcal{M}\vDash\varphi[a_{i_j}]$，这里$\{i_j|x_{i_j}\in\mathrm{fVar}(\varphi)\}\subseteq I$，我们就称$(\mathcal{M},\bar{a})$是$\Gamma$的模型，记为$\mathcal{M}\vDash\Gamma[\bar{a}]$。

特别的，如果$\mathrm{fVar}(\Gamma)=\varnothing$，换言之$\Gamma$是一个理论，则简略的记$\mathcal{M}\vDash\Gamma[\{\varnothing\}]$为$\mathcal{M}\vDash\Gamma$。
:::

::: remark*
结构现在可以理解为空理论（一句话也没有的理论）的模型。
:::

我们定义一个与一致性并驾齐驱的性质。

::: definition
如果句子集$\Gamma$有模型，则称它可满足。
:::

我们马上得到以下定理。

::: theorem
如果一个句子集是可满足的，那么这个句子集一致。
:::

::: proof
否则，这个句子集的模型会满足$\bot$，这显然是不可能的。
:::

这个定理的逆命题也是正确的，但是其证明并不简单。事实上，它是下一节要证明的东西的推论。

我们先来继续探讨结构之间的态射这个话题。我们希望定义某种结构之间的函数，使得一个理论的全体模型构成一个好的范畴。

::: definition
对语言$\mathcal{L}$的理论$T$的两个模型$\mathcal{M}$与$\mathcal{N}$，我们直接记$\mathcal{M}::M$为$M$，记$\mathcal{N}::M$为$N$，若$F:M\to N$具有如下性质：

1. $\forall f\in\mathcal{L}::\mathcal{F}\forall(a_0,...,,a_{n-1})\in M^{(n)}\\(F(f^{\mathcal{M}}(a_0,...,a_{n-1}))=f^{\mathcal{N}}(F(a_0),...,F(a_{n-1})))$

2. $\forall P\in\mathcal{L}::\mathcal{P}\forall(a_0,...,a_{n-1})\in M^{(n)}\\((a_0,...,a_{n-1})\in P^{\mathcal{M}}\to (F(a_0),...,F(a_{n-1}))\in P^{\mathcal{N}})$

则称$F$是一个同态，记为$F:\mathcal{M}\to\mathcal{N}$。

如果$F$是单射、同态，且满足$\forall P\in\mathcal{L}::\mathcal{P}\forall(a_0,...,a_{n-1})\in M^{(n)}((F(a_0),\\...,F(a_{n-1}))\in P^{\mathcal{N}}\to(a_0,...,a_{n-1})\in P^{\mathcal{M}})$，则称$F$是一个嵌入。

如果$F$是满射、嵌入，则称$F$是同构。此时我们也称$\mathcal{M}$与$\mathcal{N}$同构。

如果$M\subseteq N$使得$i:M\to N,a\mapsto a$是嵌入，则称$\mathcal{M}$是$\mathcal{N}$的子结构，记为$\mathcal{M}<\mathcal{N}$。
:::

::: theorem
同态复合同态仍是同态，嵌入复合嵌入仍是嵌入，结构之间的同构是一个等价关系。
:::

证明是简单的。然而我们通常至少考虑嵌入而非同态，这是因为嵌入有另一种表述方式。

::: definition
我们考虑同态$F:\mathcal{M}\to \mathcal{N}$的如下性质：

1. 如果$\forall\varphi(x_{m_0},...,x_{m_{n-1}})\in\mathcal{L}::\mathrm{qfFormula}\forall (a_0,...,a_{n-1})\in M^n(\mathcal{M}\vDash\varphi[a_0,...,a_{n-1}]\leftrightarrow\mathcal{N}\vDash\varphi[F(a_0),...,F_{a_{n-1}}])$，则称$F$是嵌入。

2. 如果$\forall\varphi(x_{m_0},...,x_{m_{n-1}})\in\mathcal{L}::\mathrm{Formula}\forall (a_0,...,a_{n-1})\in M^n(\mathcal{M}\vDash\varphi[a_0,...,a_{n-1}]\leftrightarrow\mathcal{N}\vDash\varphi[F(a_0),...,F_{a_{n-1}}])$，则称$F$是初等嵌入。

如果$M\subseteq N$使得$i:M\to N,a\mapsto a$是嵌入，则称$\mathcal{M}$是$\mathcal{N}$的子结构，记为$\mathcal{M}<\mathcal{N}$。如果$M\subseteq N$使得$i:M\to N,a\mapsto a$是初等嵌入，则称$\mathcal{M}$是$\mathcal{N}$的初等子结构，记为$\mathcal{M}\prec\mathcal{N}$。
:::

::: theorem
以上两种对嵌入的定义等价。
:::

子结构是通过限制得到的结构，这一观察体现为以下定理。

进而，我们可以把嵌入和初等嵌入都分成两个部分。

::: theorem
如果存在$\mathcal{M}$到$\mathcal{N}$的嵌入，则存在$\mathcal{N}$的子结构与$\mathcal{M}$同构。如果存在$\mathcal{M}$到$\mathcal{N}$的初等嵌入，则存在$\mathcal{N}$的初等子结构与$\mathcal{M}$同构。
:::

::: remark*
由于同构的模型不应加以区分，我们将宽泛的在存在$\mathcal{M}$到$\mathcal{N}$的嵌入时就称$\mathcal{M}$是$\mathcal{N}$的子结构，在存在$\mathcal{M}$到$\mathcal{N}$的初等嵌入时就称$\mathcal{M}$是$\mathcal{N}$的初等子结构。
:::

初等子结构是最妙的子结构，因为我们如果考察结构的理论，就会发现以下事实。

::: theorem
$\mathcal{M}\prec\mathcal{N}$时，$\mathrm{Th}(\mathcal{M})=\mathrm{Th}(\mathcal{N})$。
:::

我们还有一种有趣的方式来考虑$\mathcal{M}$到别的结构的嵌入和初等嵌入。

::: definition
给定语言$\mathcal{L}$和集合$M$，我们给定一个新的语言$\mathcal{L}_M$如下：

1. $\mathcal{L}_M::\mathcal{F}=\mathcal{L}::\mathcal{F}\cup\{\dot{a}|a\in M\}$，$(\mathcal{L}_M::a_F):\dot{a}\mapsto 0$。这些$\dot{a}$称为$a$的名。

2. $\mathcal{L}_M::\mathcal{P}=\mathcal{L}::\mathcal{P}$。

注意到名都是$0$元函数，我们以后也会令语言$\mathcal{L}$中的全体零元函数构成的集合为$\mathcal{L}::\mathcal{C}$，零元函数称为常元。不难意识到，它们的性质介于变元和函数之间。
:::

自然的想法是把$\mathcal{M}::M$加入原有的语言$\mathcal{L}$中，但我们还想知道$\mathcal{M}$作为结构的性质，因此有必要在新的语言中保留它们。

::: definition
对语言$\mathcal{L}$的结构$\mathcal{M}$，我们考虑以下两个$\mathcal{L}_M$的理论：

1. $\mathrm{Diag}(\mathcal{M})=\{\mathrm{Sub}^{(x_{m_0},...,x_{m_{n-1}})}_{(\dot{a_0},...,\dot{a_{n-1}})}\varphi(x_{m_0},...,x_{m_{n=1}})|\varphi\in\mathcal{L}::\mathrm{qfFormula},\mathcal{L}::\mathrm{fVar}(\varphi)=\{x_{m_0},...,x_{m_{n-1}}\},(a_0,...,a_{n-1})\in M^{(n)},\mathcal{M}\vDash\varphi[a_0,...,a_{n-1}]\}$，它称作$\mathcal{M}$的原子图，这里$\mathrm{Sub}^{(x_{m_0},...,x_{m_{n-1}})}_{(\dot{a_0},...,\dot{a_{n-1}})}$是$\mathrm{Sub}^{x_{m_0}}_{\dot{a_0}}...\mathrm{Sub}^{x_{m_{n-1}}}_{\dot{a_{n-1}}}$的缩写。

2. $\mathrm{elDiag}(\mathcal{M})=\{\mathrm{Sub}^{(x_{m_0},...,x_{m_{n-1}})}_{(\dot{a_0},...,\dot{a_{n-1}})}\varphi(x_{m_0},...,x_{m_{n=1}})|\varphi\in\mathcal{L}::\mathrm{Formula},\mathcal{L}::\mathrm{fVar}(\varphi)=\{x_{m_0},...,x_{m_{n-1}}\},(a_0,...,a_{n-1})\in M^{(n)},\mathcal{M}\vDash\varphi[a_0,...,a_{n-1}]\}$，它称作$\mathcal{M}$的初等图。

:::

对$\mathcal{L}_M$的结构$\mathcal{N}$，我们可以通过遗忘所有$\dot(a)^{\mathcal{M}}$来得到一个$\mathcal{L}$结构。我们将因而不区分作为$\mathcal{L}$或是作为$\mathcal{L}_M$结构的$\mathcal{N}$。
现在，我们再给出嵌入与初等嵌入的另一种等价定义。

::: theorem
给定$\mathcal{L}$结构$\mathcal{M}$与$\mathcal{L}_{M}$结构$\mathcal{N}$，这里$M=\mathcal{M}::M$。

1. 如果$\mathcal{N}$是$\mathrm{Diag}(\mathcal{M})$的模型，则$\mathcal{M}<\mathcal{N}$。

2. 如果$\mathcal{N}$是$\mathrm{elDiag}(\mathcal{M})$的模型，则$\mathcal{M}\prec\mathcal{N}$。

:::

## 下行Lowenheim-Skolem定理

## 结构的扩张

首先，我们来定义一种比先前的要求稍稍宽泛的结构。

::: definition
对于某个语言$\mathcal{L}$，我们称满足以下条件的$\mathcal{M}=\{M,\mathcal{F},\mathcal{P},-^{\mathcal{M}},\\\approx^{\mathcal{M}}\}$为这个语言的一个预结构：

1. $M$是集合，$F\subseteq \{f:M^{(n)}\to M|n\in\omega\}$，$P\subseteq \bigcup_{n\in\omega}M^{(n)}$，$\approx^{\mathcal{M}}$是一个$M$上的等价关系。

2. $-^{\mathcal{M}}:\mathcal{L}::\mathcal{F}\cup\mathcal{L}::\mathcal{P}\to\mathcal{M}::\mathcal{F}\cup\mathcal{M}::\mathcal{P}$是双射。

3. 对函数符号$f\in\mathcal{L}::\mathcal{F}$，$\mathrm{dom}f^{\mathcal{M}}=M^{\mathcal{L}::a_F(f)}$。

4. 对谓词符号$P\in\mathcal{L}::\mathcal{P}$，$P^\mathcal{M}\subseteq M^{\mathcal{L}::a_P(P)}$。

5. 如果$a_0\approx^{\mathcal{M}}b_0,...,a_{n-1}\approx^{\mathcal{M}}b_{n-1}$，则$f^{\mathcal{M}}(a_0,...,a_{n-1})=f^{\mathcal{M}}(b_0,...,b_{n-1})$
，$(a_0,...,a_{n-1})\in P^{\mathcal{M}}$当且仅当$(b_0,...,b_{n-1})\in P^{\mathcal{M}}$。

$\mathcal{M}/\approx^{\mathcal{M}}$称作这个预结构诱导的结构。
:::

构造模型的很多时候我们总是先得到一个预结构，然后才得到它诱导的结构。它可以视为收缩一个结构的最简单的方法。我们现在要考虑的问题是如何在语言扩张时同步地把结构也扩张出来。
