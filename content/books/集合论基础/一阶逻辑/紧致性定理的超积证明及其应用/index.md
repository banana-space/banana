---
title: 紧致性定理的超积证明及其应用
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
这一节对最常用的构造模型的方法做论述，并应用它证明一些定理。

::: definition [滤与超滤]
集合$X$上的滤$\mathscr{F}$是一个$\mathscr{P}(X)$的子集，满足以下要求：

1. $\varnothing\not\in\mathscr{F}$，$X\in\mathscr{F}$

2. $A\in\mathscr{F}\wedge A\subseteq B\rightarrow B\in\mathscr{F}$

3. $A\in\mathscr{F}\wedge B\in\mathscr{F}\rightarrow A\cap B\in\mathscr{F}$

称一个滤为极大滤，若不存在真包含它的滤；称一个滤为超滤，若它满足$\forall A\subseteq X(A\in\mathscr{F}\vee X\backslash A\in\mathscr{F})$。
:::

::: theorem
超滤和极大滤等价。
:::

::: proof
由于$A\cap (X\backslash A)=\varnothing$，这两个集至多有一个在滤中。
:::

::: theorem [滤子存在定理]
任给一个$F\subseteq\mathscr{P}(X)$，存在滤子$\mathscr{F}$包含$F$当且仅当$F$具有有限交性质，即

$\forall X_1,...,X_n\in F(X_1\cap...\cap X_n\not=\varnothing)$
:::

::: proof
仅当是显然的，下面考虑当的方向。我们逐步扩充$F$，直到它成为一个滤：令$F_0=F$，$F_{2n+1}=\{\cap_{k\in m}A_k|m\in\mathbb{N},A_k\in F_{2n}\}$，$F_{2n+2}=\{B\subseteq X|\exists A\in F_{2n+1}(A\subseteq B)\}$，$n\in\mathbb{N}$。
令$\mathscr{F}=\bigcup_{n\in\mathbb{N}}F_n$，它是一个滤子。
:::

::: theorem [超滤扩张定理]
在ZFC中，任何滤都被一个超滤包含。
:::

::: proof
我们使用Zorn引理，考虑全体包含这个滤的滤们在包含关系下所成的偏序集。注意一列相互包含的滤的并仍然是滤，而极大滤就是超滤。
:::

直观上，超滤给出了$X$上一些很大的子集；与之相反的，也可以定义理想，它将给出一些很小的子集。这两个定义都可以拓展到格上，而有的格又和布尔环有关系，所以这个理想并不是和环的理想完全无关，有兴趣的读者可以参考格论著作来补齐中间的过程。然而实分析与格论完全没有关系，所以此书忍痛割去相关内容。

::: definition [超积]
给定一族$\mathcal{L}$结构$\{M_i|i\in I\}$和$I$上的一个超滤$\mathcal{U}$，我们定义这些结构的超积$M=\prod_{i\in I}^{/\mathcal{U}}M_i$为商结构$\prod_{i\in I}M_i/\sim_\mathcal{U}$，等价关系如下定义：

$s\sim_\mathcal{U} t\leftrightarrow \{i\in I|s(i)\approx t(i)\}\in\mathcal{U}$。
:::

验证它是个结构是很无聊的工作，我们直接留给比较闲的读者。注意，这个等价关系可以当成是“在$\mathcal{U}$的意义下这两个东西“几乎处处”相等”。

超积好就好在它保持了这些结构的性质。具体而言，我们有

::: theorem [Łoś超积定理]
任给公式$\phi(x_1,...,x_n)$，记超积$M=\prod_{i\in I}^{/\mathcal{U}}M_i$，给定一些$s_1,...,s_n\in\prod_{i\in I}M_i$，则

$M\vDash\phi([s_1]_\sim,....,[s_n]_\sim)\leftrightarrow\{i\in I|M_i\vDash\phi(s_1(i),...,s_n(i))\}\in\mathcal{U}$
:::

::: proof
对公式$\phi$的结构进行归纳，细节是枯燥的。
:::

超积的这一性质给与它广阔的应用空间。例如，

::: theorem [紧致性定理]
一个有限一致的句子集$\Sigma$是一致的。
:::

::: proof
我们不妨设它是一个理论，然后枚举它的有限子集$\{\Sigma_i|i\in I\}$，给每个$\Sigma_i$找一个模型$M_i$，然后对每个$\sigma\in\Sigma$考虑$X_\sigma=\{i\in I|\Sigma_i\vDash\sigma\}$。它们显然有有限交性质，于是有一个超滤$\mathcal{U}$包含全体$X_\sigma$，把所有$M_i$关于这个超滤作超积，所得的结构恰好就是$\Sigma$的模型。
:::

::: remark*
如果先按第一章的方式证明完备性再证紧致性，或者化用那一思想直接证明，总是要用Henkin方法加入常元再提取常元，不如此法简便。
:::

它可以用来在一般的模型论中刻画类似于HSP定理的定理。

::: theorem
$\mathcal{K}$是初等类当且仅当它关于初等等价和取超积封闭。
:::

::: proof
显然初等类关于初等等价封闭，而Los定理也指出它对取超积封闭，所以接下来只证另一个方向。

假定有一模型$\mathcal{M}\vDash T$，其中$T=\{\sigma|\mathcal{N}\in\mathcal{K}\to\mathcal{N}\vDash\sigma\}$是我们这个对初等等价和取超积封闭的类$\mathcal{K}$的理论，我们要证明$\mathcal{M}\in\mathcal{K}$。

我们令$\Sigma=\mathrm{Th}(\mathcal{M})$是这个模型的理论，然后枚举$\Sigma$的全体有限子集$\{\Sigma_i|i\in I\}$。

**断言。** 对每个$i\in I$均存在$\mathcal{M}_i\in\mathcal{K}$满足$\mathcal{M}\vDash\Sigma_i$。

**证明。** 否则，存在$\Sigma_i=\{\sigma_j\}$使得$\forall\mathcal{N}\in\mathcal{K}(\mathcal{N}\vDash\bigvee_{j}(\neg\sigma_j))$，于是$\bigvee_{j}(\neg\sigma_j)$与$\neg(\bigvee_{j}(\neg\sigma_j))=\bigwedge_{j}\sigma_j$都在$T$中，显然矛盾。

于是，仿照我们上面对紧致性定理的证明，存在一个$I$上的超滤$\mathcal{U}$使得$\prod_{i\in I}^{/\mathcal{U}}\mathcal{M}_i\vDash\Sigma$，换言之$\mathcal{M}\equiv\prod_{i\in I}^{/\mathcal{U}}\mathcal{M}_i$，于是$\mathcal{K}$的封闭性给出$\mathcal{M}\in\mathcal{K}$。
:::

它还可以用来更深刻地刻画初等等价。

::: theorem [Keisler-Shelah]
$\mathcal{M}$和$\mathcal{N}$初等等价当且仅当存在集合$I$和其上的一个超滤$\mathcal{U}$，使得$\mathcal{M}^I/\sim_\mathcal{U}$与$\mathcal{N}^I/\sim_\mathcal{U}$同构。
:::

这一定理的证明远超出此讲义能承受的范围，我们遗憾的省略它。

我们介绍这个由紧致性定理引出的最重要的定理。它指出，一阶逻辑不可能限制无穷模型的基数。

::: theorem [下行Lowenheim-Skolem定理]
我们称语言$\mathcal{L}$的全体句子构成的集合的基数为这个语言的基数，记为$|\mathcal{L}|$。

假定我们有论域为$M$的结构$\mathcal{M}$，任给$A\subseteq M$，均存在$N\subseteq M$使得$N\supseteq A$，$N\prec M$且$|N|\leq\mathrm{max}\{|A|,|\mathcal{L}|,\aleph_0\}$。
:::

::: proof
我们需要一些判定初等子结构的定理。

**定理（Tarski-Vaught测试）。** 若$M$是$N$的子结构，则$M\prec N\leftrightarrow$对每个公式$\varphi(x_1,...,x_n,y)$以及$a_1,...,a_n\in M$均有$\mathcal{N}\vDash\exists y(\varphi(a_1,...,a_n,y))\to\mathcal{M}\vDash\exists y(\varphi(a_1,...,a_n,y))$。

**注。** 换言之，子结构是初等子结构当且仅当它保留了所有存在公式的证据。

**证明。** 初等子结构满足此式是显然的，我们反过来在此式的条件下证明对每个公式$\phi(x_1,...,x_m)$和$b_1,...,b_m\in M$均有$\mathcal{M}\vDash\phi(b_1,...,b_m)\leftrightarrow\mathcal{N}\vDash\phi(b_1,...,b_m)$。

对公式的结构归纳，无量词和逻辑连接词显然，而对应于存在量化的情况我们的假定给出了原本不能推出的方向。

但是这还不够方便。我们来考察可定义性如下：

**定义。** 设有$\mathcal{L}$的结构$\mathcal{M}$。

1. 对于$X\subseteq M^n$，若存在公式$\varphi(x_1,...,x_n,y_1,...,y_m)$和$b_1,...,b_m\in M$使得$X=\{(a_1,...,a_n)\in M^n|\mathcal{M}\vDash\varphi(a_1,...,a_n,b_1,...,b_n)\}$，则称$\varphi$和$(b_1,...,b_m)$定义了$X$，简称为$X$是可定义集。

2. 对于可定义集$X$，若$b_1,...,b_m\in A\subseteq M$，则可额外称$X$定义在$A$上，或$X$是$A$可定义集。原本的可定义集也因此可以称作$M$可定义集。

现在，我们有另一个对初等子结构的描述。

**定理（Tarski测试）。** 若$A\subseteq M$是非空子集，则$A\prec M$当且仅当每个非空的$A$可定义集$X\subseteq M$与$A$的交集均非空。

**证明。** 先证明$A$是子结构，再证明它初等。引用Tarski-Vaught测试。

我们构造所需的$N$，然后运用Tarski测试来验证$N\prec M$。对于集合$A\subseteq M$，我们记语言$\mathcal{L}_A$为原本的语言加上全体$a\in A$作为常元所得到的新语言。

令$A_0=A$，我们归纳地定义一列$A_n$，然后令$N=\bigcup_{n\in\omega}A_n$。若$A_n$已经构造好，则至多有$|A_n|+|\mathcal{L}|+\aleph_0$个$\mathcal{L}_{A_n}$公式，故$M$的非空$A_n$可定义集也至多这么多个。我们把它们收集起来得到$P_n$，然后做选择函数$f_n:P_n\to M$，令$A_{n+1}=A_n\cup f_n(P_n)$。这个归纳的过程已经给出$|A_{n+1}|\leq\mathrm{max}\{|A_n|,|\mathcal{L},\aleph_0|\}$，因此$|A_n|\leq\mathrm{max}\{|A|,\mathcal{L},\aleph_0\}$，进而$|N|\leq\mathrm{max}\{|A|,\mathcal{L},\aleph_0\}$。

考虑$X\subseteq M$是非空的$N$可定义子集。由于定义$X$用到的参数$b_i$只有有限个，必然有一个$A_n$包含了全体这些参数，因此$X\cap N\supseteq X\cap A_{n+1}\ni f_{n}(X)$不空。
:::

这指出，我们可以随意给出更小基数的初等子结构。另一方面，我们也可以随意给出更大基数的初等扩张（即使得原模型成为其初等子结构的模型）。

::: theorem [上行Lowenheim-Skolem定理]
假定我们有语言$\mathcal{L}$的无穷模型$\mathcal{M}$，则对任意的基数$\kappa\leq|M|+|\mathcal{L}|$均存在基数为$\kappa$的$\mathcal{M}$的初等扩张$\mathcal{N}$。这里结构的基数就指的是论域的基数。
:::

::: proof
引入常元$\{c_i|i\in\kappa\}$，我们向语言$\mathcal{L}$中加入全体$M$中的元素作为常元，得到语言$\mathcal{L}_M$，再加入$\{c_i\}$们作为常元符号得到$\mathcal{L'}$。为了构造一个理论，使得这理论的模型都是$\mathcal{M}$的初等扩张，我们引入以下定义。

**定义（图）。** 对$\mathcal{L}$结构$\mathcal{M}$，我们称以下$\mathcal{L}_M$句子集为$\mathcal{M}$的基本图：

$\mathrm{Diag}(\mathcal{M})=\{\phi(a_1,...,a_n)|\phi$是$n$自由变元的$\mathcal{L}$无量词公式，且$a_i\in\mathcal{M},\mathcal{M}\vDash\phi(a_1,...,a_n)\}$

称以下$\mathcal{L}_M$句子集为$\mathcal{M}$的初等图：

$\mathrm{Diag_{el}}(\mathcal{M})=\{\phi(a_1,...,a_n)|\phi$是$n$自由变元的$\mathcal{L}$公式，且$a_i\in\mathcal{M},\mathcal{M}\vDash\phi(a_1,...,a_n)\}$

**注。** 为了将$\mathcal{M}$满足的一切公式变成句子，我们必须加入全体论域中的元素作为常元。今后我们不会经常区分一个句子究竟在哪个语言中，请读者自行甄别。

**定理。** 若$\mathcal{L}_M$结构$\mathcal{N}$满足$\mathcal{N}\vDash\mathrm{Diag}(\mathcal{M})$，则存在$\mathcal{M}$到$\mathcal{N}$的嵌入。如果$\mathcal{N}\vDash\mathrm{Diag_{el}}(\mathcal{M})$，则存在$\mathcal{M}$到$\mathcal{N}$的初等嵌入。

**证明。** 显然把$\mathcal{N}$的常元映射当成嵌入即可。

因此，为了的得到$\mathcal{M}$的基数$\kappa$的初等扩张，我们来考虑$\mathcal{L'}$句子集$\Sigma=\mathrm{Diag_{el}}(\mathcal{M})\cup\{c_i\not=c_j|i\not=j\in\kappa\}$。由于$M$是无穷集合，这个$\Sigma$是有限一致的，因此存在其模型$\mathcal{N}$，显然忘记其上的多余结构就给出作为$\mathcal{L}$结构的$\mathcal{M}$的初等扩张。
:::

这两个定理合称Lowenheim-Skolem定理。

::: corollary
若$\mathcal{L}$的一个理论$T$拥有一个无穷模型，则对任意基数$\kappa\leq|\mathcal{L}|$均存在基数$\kappa$的$T$的模型。
:::

::: proof
对原来的无穷模型做初等扩张或取初等子模型，把基数控制得恰好是$\kappa$即可。
:::

值得注意的是，无穷模型不能换成有穷模型。事实上，我们有以下定理。

::: theorem
若$\mathcal{L}$有有限结构$\mathcal{M}$，则$\mathcal{M}$的每个初等扩张和初等子模型都与$\mathcal{M}$同构。
:::

::: proof
假定$|M|=m$，我们只需要考虑命题$\exists^{=m}x$，也就是$$\exists x_1...\exists x_m((\bigwedge_{i\not=j}x_i\not=x_j)\wedge\forall x(\bigvee_i(x=x_i)))$$
:::

Lowenheim-Skolem定理还给出另一个重要定理。

::: theorem [初等融贯定理]
若两结构$M_1\equiv M_2$，则存在结构$N$和两个初等嵌入$g_i:M_i\to N(i=1,2)$。
:::

::: proof
不妨设$M_1\cap M_2=\varnothing$，我们考虑$\mathcal{L'}=\mathcal{L}_{M_1\cup M_2}$。只需证明$\mathrm{Diag_{el}}(\mathcal{M}_1)\cup\mathrm{Diag_{el}}(\mathcal{M}_2)$是有限一致的句子集，则其模型即为所需的$\mathcal{N}$。

事实上，从其中选出有限个句子，我们将同一个初等图中的句子用且合并为一个句子，就成了两个句子$\phi(a_1,...,a_n)\in\mathcal{L}_{M_1}$与$\psi(b_1,...,b_m)\in\mathcal{L}_{M_2}$。注意$\mathcal{M}_1\vDash\phi$而$\mathcal{M}_2\vDash\psi(b_1,...,b_m)$，后者正是$\mathcal{M}_2\vDash\exists b_1\exists ...\exists b_m(\psi(b_1,...,b_m))$，初等等价指出$\mathcal{M}_1$同样满足右侧式子，于是我们就得到了$b'_1,...,b'_m\in\mathcal{M}_1$。现在将$\mathcal{M}_1$解释为$\mathcal{L'}$结构即可。
:::
