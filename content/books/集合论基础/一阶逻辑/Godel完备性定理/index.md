---
title: Godel完备性定理
---
很显然，这一节的主要目的是像证明零阶语言即命题逻辑的可靠性和完备性一样，试着证明一阶逻辑的可靠性与完备性。Godel于1929年首次得到了完备性的证明，并在1930年公之于世。我们将要给出的证明方法则是Henkin在1949年提出的。看到这些人物的名字，读者大约能猜到这个定理并不好证。

首先，我们还是证一下可靠性。由于语言更复杂了，公理的数目大大增多，可靠性也没有之前那么显然。先来看一个引理。

::: lemma [替换引理]
如果项$t$可以在公式$\varphi$中无冲突地替换变元$x$，则$(\mathcal{M},s)\vDash\varphi^x_t$当且仅当$(\mathcal{M},s^x_{s(t)})\vDash\varphi$。
:::

::: proof
还是对公式$\varphi$实行归纳。

1. $\varphi$形如$P(t_1,t_2,...,t_n)$。此时
$(\mathcal{M},s)\vDash P(t_1,t_2,...,t_n)^x_t$当且仅当
$(s((t_1)^x_t),s((t_2)^x_t),...,s(t_n)^x_t)\in P^\mathcal{M}$当且仅当
$(s^x_{s(t)}(t_1),s^x_{s(t)}(t_2),...,s^x_{s(t)}(t_n))\in P^\mathcal{M}$当且仅当
$(\mathcal{M},s^x_{s(t)})\vDash P(t_1,t_2,...,t_n)$。

2. $\varphi$形如$t_1\approx t_2$。与上类似。

3. $\varphi$形如$\forall y(\phi)$。此时若$x$不在$\varphi$中自由出现，则由自由变元决定性显然。下讨论自由出现的情形：注意到无冲突替换要求$y$不在$t$出现且$t$在$\phi$中也可以无冲突替换，这说明对任何$d$都有$s(t)=s^y_d(t)$。又注意到$\varphi^x_t=\forall y(\phi^x_t)$，可如下做连续等价推导：

   $(\mathcal{M},s)\vDash \varphi^x_t$当且仅当对所有的$d$，$(\mathcal{M},s^y_d)\vDash \phi^x_t$当且仅当（归纳假设）对所有的$d$，$(\mathcal{M},(s^y_d)^x_{s^y_d(t)})\vDash \phi$当且仅当对所有的$d$，$(\mathcal{M},(s^y_d)^x_{s(t)})\vDash \phi$当且仅当对所有的$d$，$(\mathcal{M},(s^x_{s(t)})^y_d)\vDash\phi$当且仅当$(\mathcal{M},s^x_{s(t)})\vDash\phi$。

4. $\varphi$形如$\neg \phi$。此时$(\mathcal{M},s)\vDash \varphi^x_t$当且仅当$(\mathcal{M},s)\not\vDash \phi^x_t$当且仅当$(\mathcal{M},s^x_{s(t)})\not\vDash\phi$当且仅当$(\mathcal{M},s^x_{s(t)})\vDash\varphi$。

5. $\varphi$形如$\phi\rightarrow\psi$。类上。

:::

下面来证明可靠性。

::: theorem [可靠性定理]
一阶逻辑是可靠的。换言之，$\Sigma\vdash\varphi$蕴含$\Sigma\vDash\varphi$。
:::

::: proof
首先，分离规则保持有效性是显然的，因此只需要证明每条公理都普遍有效(valid)。换言之，$\varnothing\vDash\varphi$。

由于公理有好几种，而且还允许任意全称概括，我们需要把这个定理归纳地拆成几个部分来证明。

(1)第一组公理，即从命题逻辑中继承的公理的有效性：只需注意到赋值在所有素公式（没有逻辑连接词的公式）上的取值可以决定它在所有公式上的取值。

(2)第二组公理：我们已知的是$(\mathcal{M},s)\vDash\forall x(\varphi)$，欲证的则是$(\mathcal{M},s)\vDash\varphi^x_t$，而根据替换引理只要证$(\mathcal{M},s^x_{s(t)})\vDash\varphi$，而这只要按定义展开条件中的全称量词，然后选取$d=s(t)$即可。

(3)第三组公理：拆开$\forall$的定义，在每个$d$上面分离，显然。

(4)第四组公理：拆开$\forall$的定义，由自由出现变元的决定性显然。

(5)第五组公理：显然。

(6)第六组公理：考察所有满足$x\approx y$的模型与赋值，不难归纳得出它在每个项上都可以将任意个$x$替换为$y$而不改变真假，进而原子公式，进而素公式，进而全体公式。

最后还要证明，$\varphi$普遍有效当且仅当它的某个全称概括$\forall x(\varphi)$普遍有效，而这由普遍有效的定义不难证明。
:::

接下来证明完备性定理。我们当然还是模仿在命题逻辑中使用的方法，先使用以下引理。

::: lemma
一阶逻辑完备当且仅当任意一个一致的公式集都是可满足的。
:::

其证明与命题逻辑中的证明也类似，这里略去。下面再证明三个可能用到的元定理。

::: lemma [常数概括引理]
若$\Gamma\vdash\varphi$，而常元符号$c$不在$\Gamma$中出现，则存在同样不在$\Gamma$中出现的变元符号$y$，使得$\Gamma\vdash\varphi^c_y$。更进一步，还存在一个$\Gamma\vdash\forall y\varphi^c_y$的不包含$c$的推演序列。
:::

::: proof
我们先证明前面。考虑$\Gamma\vdash\varphi$的推演序列$(\varphi_0,\varphi_1,...,\varphi_n=\varphi)$。有限个公式只出现有限个变元，所以我们随便拿一个没出现在这些公式中的变元$y$，不难发现$((\varphi_0)^c_y,(\varphi_1)^c_y,...,(\varphi_n)^c_y=\varphi^c_y)$是$\Gamma$到$\varphi^c_y$的一个推演序列。

下面验证更进一步的部分。由于推演序列是有限长度的，我们一定有一个$\Gamma_0\subseteq\Gamma$为有限集，$\Gamma_0\vdash\varphi$，进而$\Gamma_0\vdash\varphi^c_y$，进而直接从这里就能由概括公理得出$\Gamma_0\vdash\forall y(\varphi^c_y)$，而这一步也没有加入新的常数符号，所以$\Gamma\vdash\forall y\varphi^c_y$的这个推演序列没用到$c$。
:::

::: lemma [循环替换引理]
如果变元$y$不在公式$\varphi$中出现，则变元$x$可以在公式$\varphi^x_y$中无冲突地替换$y$，且$(\varphi^x_y)^y_x=\varphi$。
:::

::: proof
只要无冲突替换成立，由简单的字符串操作就不难证明最后的式子。而由于$\varphi^x_y$里根本不出现$x$，无冲突替换性由简单的归纳就能证出来。
:::

::: lemma [约束变元替换引理]
如果有公式$\varphi$，变元$x$和项$t$，则存在公式$\varphi'$，它和$\varphi$只有某些约束变元不一样，而且满足

(1)$\varphi\vdash\varphi'$，$\varphi'\vdash\varphi$；

(2)$t$可以在$\varphi'$中无冲突地替换$x$。
:::

::: proof
固定$t$和$x$，我们递归地构造$\varphi'$。对未提到的情况，我们构造的$\varphi'$都是完全不改变句子结构的，原子公式甚至不改变句子。

对于$\varphi$形如$\forall y\phi$的情况，我们由归纳假设选一个$\phi'$然后再选一个$t$和$x$和$\varphi$和$\phi'$中都没出现过的变元$z$，定义$\varphi'=\forall z(\phi')^y_z$。

现在只需要递归证明这个构造确实合理。这里只录入最重要的量词情况的(1)的证明，别的都很简单留给读者自己证明。

首先根据归纳假设，$\phi\vdash\phi'$，于是$\forall y\phi\vdash\forall y\phi'$，又因为$z$不出现，而$\forall y\phi'\vdash(\phi')^y_z$，概括得到$\forall y\phi'\vdash\forall z(\phi')^y_z$，于是$\forall y\phi\vdash\forall z(\phi')^y_z$。

另一方面，有归纳假设$\phi'\vdash\phi$。显然有$\forall z(\phi')^y_z\vdash((\phi')^y_z)^z_y$，由$z$不出现可用循环替换得到$\forall z(\phi')^y_z\vdash\phi'$，进而$\forall z(\phi')^y_z\vdash\phi$，最后由$y$不在左边自由出现可以概括为$\forall z(\phi')^y_z\vdash\forall y\phi$。
:::

现在我们准备充分，向完备性定理发起挑战。

::: theorem [Godel完备性定理]
一阶逻辑是完备的。
:::

::: proof
只要证明一致则可满足。假定有一个一致的公式集$\Gamma$，我们自然的想像命题逻辑一样得到极大一致集，然后构造一个结构，最后得到一个赋值，来满足这个公式集。以下默认理论有等词，因为没有等词的理论显然更简单。

Step1。扩充得到极大一致集

为了能最后能得到结构，我们必须给这个极大一致集附带一些额外的东西。具体而言，我们向原来的语言$\mathcal{L}$中加入可数多个新的常元符号$c_1,c_2,...$，从而它们不在$\mathcal{L}$的任何公式中出现。我们记$\mathcal{L}_C$为扩充后的语言。

首先，$\Gamma$在$\mathcal{L}_C$中一致。证明是用反证法，若它变得不一致了，那把推演序列里的新常元用常数概括引理改成变元，就会得到$\Gamma$在$\mathcal{L}$中不一致的证据，矛盾。

接下来添加Henkin公理。我们（由可数性）列举$\mathcal{L}_C$中全体（公式，变元）的有序对为$(\phi_1,x_1),(\phi_2,x_2),...$。我们递归地令

1. $\theta_1$为$\neg\forall x_1\phi_1\rightarrow \neg(\phi_1)^{x_1}_{c_{i_1}}$，其中$c_{i_1}$是第一个不在$\phi_1$中出现的新常元。

2. $\theta_{k+1}$为$\neg\forall x_{k+1}\phi_{k+1}\rightarrow \neg(\phi_{k+1})^{x_{k+1}}_{c_{i_{k+1}}}$，其中$c_{i_{k+1}}$是第一个
在$\phi_1,...,\phi_k,\phi_{k+1},\theta_1,...,\theta_k$中都没出现过的新常元符号。

我们记$\Theta=\{\theta_1,\theta_2,...\}$，然后来验证$\Gamma\cup\Theta$一致。

反证。如果不一致，由证明序列的有限性一定可以找到一个最小的$n$使得$\Gamma\cup\{\theta_1,...,\theta_{n+1}\}$不一致。由反证法元定理，这指出$\Gamma\cup\{\theta_1,...,\theta_{n}\}\vdash\neg\theta_{n+1}$。假定$\theta_{n+1}=\neg\forall x\phi\rightarrow\neg\phi^x_c$，则$\Gamma\cup\{\theta_1,...,\theta_{n}\}\vdash\{\neg\forall x\phi,\phi^x_c\}$，由定义$c$不在左边出现，于是常数概括得到$\Gamma\cup\{\theta_1,...,\theta_{n}\}\vdash\forall x\phi$，这与$n$极小是矛盾的。

类似Lindenbaum定理，我们通过枚举句子做$\mathcal{L}_C$中$\Gamma\cup\Theta$的极大一致扩张$\Delta$，并且从过程中得到它对语法蕴含封闭（即$\Delta\vdash\phi$指出$\phi\in\Delta$）。

Step2。构造无等词公式的解释

这个结构非常有趣，因为这个结构就是我们语言里面的东西。

记$\mathcal{L}_C$上所有项的集合为$M$，定义二元关系$E^\mathcal{M}$为$(t_1,t_2)\in E^\mathcal{M}\leftrightarrow (t_1\approx t_2)\in\Delta$，对谓词$P$定义$(t_1,t_2,...,t_n)\in P^\mathcal{M}\leftrightarrow (P(t_1,t_2,...,t_n))\in\Delta$，对函数$f$定义$f^\mathcal{M}(t_1,t_2,...,t_n)=(f(t_1,t_2,...,t_n))$，对常数$c$定义$c^\mathcal{M}=c$，得到结构$\mathcal{M}$。最后定义初始赋值$s$把变元$x$变到它自己这个项$x$上面，并令其扩展，得到结构$\mathcal{M}$上的赋值$s$。

注意，这个$E$也可以当成是我们给$\mathcal{L}_C$添加的一个新的二元谓词。

我们证明：对任意公式$\varphi$，$(\mathcal{M},s)\vDash\varphi'$当且仅当$\varphi\in\Delta$，其中$\varphi'$是在$\varphi$中把等词$\approx$换成$E$得到的公式。

(1)通过对项归纳不难得知$s(t)=t$。

接下来对公式$\varphi$实行归纳，证明$(\mathcal{M},s)\vDash\varphi'$当且仅当$\varphi\in\Delta$。我们还是只证明最复杂的量词情形，把其他简单情形交由读者自行完成。假设$\varphi=\forall x\phi$。

(2)从左向右；由定义$(\phi,x)$有一条对应的Henkin公理$\theta=\neg\forall x\phi\rightarrow\neg\phi^x_c$。注意$(\forall x\phi)'=\forall x\phi'$，我们有$(\mathcal{M},s)\vDash\forall x\phi'$蕴含$(\mathcal{M},s^x_c)\vDash\phi'$由替换引理蕴含$(\mathcal{M},s)\vDash\phi'^x_c$蕴含$(\mathcal{M},s)\vDash(\phi^x_c)'$由假设蕴含$\phi^x_c\in\Delta$蕴含$\neg\phi^x_c\not\in\Delta$由封闭性和Henkin公理蕴含$(\neg\forall x\phi)\in\Delta$蕴含$\forall x\phi\in\Delta$。

(3)从右向左：我们来证明逆否。若$(\mathcal{M},s)\not\vDash\forall x\phi'$，我们想证明$\forall x\phi'\not\in\Delta$。条件中拆掉$\forall$的定义已经给我们了一个反例项$t$，满足$(\mathcal{M},s^x_t)\not\vDash\phi'$。运用约束变元替代引理，选择一个$\psi$，它与$\phi$的差别只有约束变元，而且$t$在$\psi$中可以无冲突地替代$x$。做连续推导：$(\mathcal{M},s^x_t)\not\vDash\phi'$由语义等价推出$(\mathcal{M},s^x_t)\not\vDash\psi'$由替换引理推出$(\mathcal{M},s)\not\vDash{\psi^x_t}'$由归纳假设就得到${\psi^x_t}'\not\in\Delta$推出$\forall x\psi\not\in\Delta$推出$\forall x\phi\not\in\Delta$。

Step3。构造一般公式的解释

注意上面已经证明了无等词公式的完备性。由于等词和元语言的等于不一样，直接做会出事，我们要考虑一个商结构。首先，读者不难验证，$E$是$M$上的一个等价关系，且和每个谓词和函数都是相容的（即相等的东西判断/映射到同一个东西）。

我们重新定义结构$U$的论域为$M/E$，谓词$P$对应$([t_1],[t_2],...,[t_n])\in P^\mathcal{U}\leftrightarrow P(t_1,t_2,...,t_n)\in\Delta$，函数$f$对应$f^\mathcal{U}([t_1],[t_2],...,[t_n])=[f(t_1,t_2,...,t_n)]$，常元$c$对应$c^\mathcal{U}=[c]$。定义初始赋值$S(x)=[x]$，然后令其自然地延拓为赋值。我们只要证明：

对任意公式$\varphi$，$(\mathcal{U},S)\vDash\varphi$当且仅当$\varphi\in\Delta$。

归纳验证是惯常的归纳，注意我们可以引用$\mathcal{M}$中已经证明的结论来简化过程。
:::

::: remark*
注意，以上讨论的是可数语言，证明中未曾用到选择公理；如果讨论的语言是任意的，我们就需要选择公理来进行公式的枚举。
:::
