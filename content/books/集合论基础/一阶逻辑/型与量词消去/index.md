---
title: 型与量词消去
notices:
  - name: 问题
    items:
      - 省略型定理的证明不完整：其中关于疏朗集的断言没有给出证明，最后一段的论证也只是概要。
      - “模型完全”的定义缺少内容。
---

这一节，我们来讨论模型中是否有满足我们所想要的性质的对象。首先，我们来看型这一概念的定义。

::: definition [有序元素组的型]
对语言$\mathcal{L}$的结构$\mathcal{M}$中的一个有限有序元素组$\bar{a}=(a_1,...,a_n)$，
我们定义其型为
$\mathrm{tp}^\mathcal{M}(\bar{a})=\{\phi(x_1,...,x_n)|\mathcal{M}\vDash\phi(a_1,...,a_n)\}$。
:::

::: remark*
换言之，我们将$\mathcal{M}$中的$(a_1,...,a_n)$满足的全部性质收集在一起。
然而，更多的时候我们想脱离具体的$\bar{a}$而只看这一集公式，因此我们需要另外的定义。
:::

::: definition [理论的完全型]
对语言$\mathcal{L}$的理论$T$，
一个公式集$\Sigma$若满足存在模型$\mathcal{M}$和其中的有限有序元素组$(a_1,...,a_n)$使得
$\Sigma=\mathrm{tp}^\mathcal{M}(\bar{a})$，则称$\Sigma$是理论$T$的完全$n$型，
全体完全$n$型的集记为$S_n(T)$。
:::

然而，有的时候我们只知道完全型中的一部分公式，
这时如何确定它们是否能扩张为一个完全型呢？我们接着考虑以下概念。

::: definition [实现与省略]
对语言$\mathcal{L}$中的一族$n$自由变元句子集$\Sigma_n$，
若结构$\mathcal{M}$中存在一个有限有序元素组$\bar{a}=(a_1,...,a_n)$使得
$\forall\phi\in\Sigma_n(\mathcal{M}\vDash\phi(\bar{a}))$，
则称$\bar{a}$在$\mathcal{M}$中实现了$\Sigma_n$，有时也称作$\mathcal{M}$实现了$\Sigma_n$。
如果不存在实现$\Sigma_n$的$\bar{a}$，则称$\mathcal{M}$省略了$\Sigma_n$。
:::

这诱导出以下想法。

::: definition [理论的部分型]
对语言$\mathcal{L}$的理论$T$，若存在模型$\mathcal{M}$实现一族$n$自由变元句子集$\Sigma_n$，
则称$\Sigma_n$是$T$的部分$n$型。
:::

我们接下来指出这些定义的命名中暗示的定理。

::: theorem
一个$\Sigma$是部分型当且仅当它是一个完全型的子集；
一个部分型$\Sigma$是完全型当且仅当它是极大部分型（换言之向其中加入任何公式后均不再构成部分型）。
:::

::: proof
第一个由定义是显然的；第二个考虑$\mathrm{tp}$的定义也是显然的。
:::

然而，部分型最厉害的地方在于，它也有一个紧致性定理。

::: theorem
一个$\Sigma$是部分型，当且仅当它的每个有限子集都是部分型。
:::

::: proof
假设$\Sigma$想成为部分$n$型，在语言$\mathcal{L}$中加入$n$个新常元$\bar{c}$，
然后考虑理论$T\cup\{\phi(\bar{c})|\phi\in\Sigma\}$，对这个理论的模型用紧致性定理即可。
:::

对于完备理论，我们还可以加强这个紧致性定理，只在某一个模型中考虑，
这显然是因为它的所有模型都是初等等价的。

::: theorem
如果有完备理论$T$的模型$\mathcal{M}$，则：

1. $\Sigma$是部分型，当且仅当它的每个有限子集都在$\mathcal{M}$中被实现。

2. $S_n(T)=\{\mathrm{tp}^\mathcal{N}(\bar{a})|\mathcal{M}\prec\mathcal{N}\wedge a_1,...,a_n\in\mathcal{N}\}$

:::

::: proof
对第一个，显然只要证明每个有限部分型被实现当且仅当在$\mathcal{M}$中被实现；这是初等等价性带来的。

对第二个，其实只要证明每个部分型都在一个$\mathcal{N}\succ\mathcal{M}$中被实现。
这是因为如果它在一个$\mathcal{M}'$中被实现，
我们用初等融贯把$\mathcal{M}$和$\mathcal{M}'$融贯为一个$\mathcal{N}$，
就可以得到它在$\mathcal{N}$中被实现的证据。
:::

$S_n(T)$构成一个有趣的拓扑空间，我们将发现紧致性定理确实谈论了这个空间的紧致性。

::: definition [型的空间]
在$S_n(T)$中，
由全体公式$\phi$定义的$[\{\phi\}]=\{p\in S_n(T)|\phi\in p\}$为基自然生成$S_n(T)$上的一个拓扑。
:::

::: theorem
$S_n(T)$是紧致$T_2$完全不连通零维空间，开闭基就是这些$[\{\phi\}]$。
:::

其实，我们初始版本的紧致性定理也可以变成一个拓扑空间的紧致性。

::: definition
全体完备一致$\mathcal{L}$理论的集合$\mathcal{T}$上，
由全体句子$\sigma$定义的$[\{\sigma\}]=\{T\in\mathcal{T}|\sigma\in T\}$为基自然生成$\mathcal{T}$
上的一个拓扑。
:::

::: theorem
$\mathcal{T}$是紧致$T_2$完全不连通零维空间，开闭基就是这些$[\{\sigma\}]$。
:::

我们定义的两种$n$型有两种可能的扩展定义：一种是允许更多的变元，一种是允许临时扩张语言。
我们现在来讨论这两者。首先，我们介绍可定义的概念。

::: definition
对$\mathcal{L}$结构$\mathcal{M}$，给定$A\subseteq M$和$X\subseteq M^n$，
我们可以定义$X$的$A$可定义子集的集族为
$\mathrm{Def}_A(X)=\{Y\subseteq X|\exists \phi(\bar{x},\bar{y})\exists \bar{b}\in A^m(Y=\{\bar{a}\in X|\phi(\bar{a},\bar{b})\})\}$。
我们更细致地称公式$\phi$与参数$\bar{b}$在$X$上定义了$Y$。

对$A\subseteq M$，我们定义其可定义闭包为$\mathrm{dcl}_M(A)=\{b\in M|\{b\}\in\mathrm{Def}_A(M)\}$，
定义其代数闭包为
$\mathrm{acl}_M(A)=\{b\in M|\exists S\in\mathrm{Def}_A(M)(b\in S\wedge |S|<\omega)\}$。
:::

首先，我们论证这两种闭包确实是闭包算子。单调性与单增性都是显然的，我们只论证幂等性。

::: theorem {@thm:闭包算子的幂等性}
$\mathrm{dcl}_M(\mathrm{dcl}_M(A))=\mathrm{dcl}_M(A)$，
$\mathrm{acl}_M(\mathrm{acl}_M(A))=\mathrm{acl}_M(A)$
:::

我们自然可以直接验证，但这里有一种更优雅的方式，我们可以指出它们甚至是有限闭包算子。

::: definition
称闭包算子$C$是有限的，若$a\in C(A)$指出存在有限子集$A_f\subseteq A$满足$a\in C(A_f)$。

称闭包算子$C$满足交换性质，
若$a,b\not\in C(X)$时必有$a\in C(X\cup\{b\})\leftrightarrow b\in C(X\cup\{a\})$。

一个集合$X$连同其上一个满足交换性质的有限闭包算子称作一个拟阵。
此时这个闭包算子又常常记为$\mathrm{span}$。
:::

虽然$acl$并不总是满足$\mathrm{span}$的条件，
但有限性和一个长得很像交换性的性质合在一块可以用单调和单增推出幂等。

::: lemma
如果一个$C:\mathscr{P}(X)\to\mathscr{P}(X)$是有限、单调、单增的，
且满足$\forall S\subseteq X\forall a,b\in X(a\in C(S)\wedge b\in C(S\cup\{a\})\to b\in C(S))$，
则$C$是有限闭包算子。
:::

::: proof
只要验证幂等。显然$C(C(X))\supseteq C(X)$，我们只要证明$C(C(X))\subseteq C(X)$。
对$b\in C(C(X))$，有限性指出存在$a_1,...,a_n\in C(X)$使得$b\in C(a_1,...,a_n)$。
我们的条件指出$a\in C(X)\to C(X)=C(X\cup\{a\})$，
因此$C(a_1,...,a_n)\subseteq C(X\cup\{a_i\})=C(X)$。
:::

::: proof [@thm:闭包算子的幂等性 的证明]
现在我们来验证$acl_M$有限且满足上引理的条件。
事实上，$acl_M$有限是因为定义只用到有限个参数，上引理的条件则可通过考虑最小的包括$a$的有限可定义集，
用其中的全体元素来模糊$a$即可。

类似地可以验证$dcl_M$的性质。
:::

接下来，我们来考虑何时可以把闭包算子中的下标去掉。

::: theorem
如果$\mathcal{N}\prec\mathcal{M}$，且$A\subseteq N\subseteq M$，
则$\mathrm{dcl}_N(A)=\mathrm{dcl}_M(A)$，$\mathrm{acl}_N(A)=\mathrm{acl}_M(A)$。
:::

::: proof
这是因为在语言$\mathcal{L}_A$中仍然有$\mathcal{N}\prec\mathcal{M}$，
而这指出$\phi$在$\mathcal{N}$中与在$\mathcal{M}$中定义出相同的对象。
:::

::: corollary
若$\mathcal{N}\prec\mathcal{M}$，则$\mathrm{dcl}_M(N)=\mathrm{acl}_M(N)=N$。
:::

现在回到对型的处理上。

::: definition
对指标集$I$和语言$\mathcal{L}$的结构$\mathcal{M}$中的一个以$I$为指标的元素组
$A=\{a_i|i\in I\}\subseteq X$，
我们定义其型为
$\mathrm{tp}^\mathcal{M}(A)=\{\phi(x_{i_1},...,x_{i_n})|\mathcal{M}\vDash\phi(a_{i_1},...,a_{i_n}),i_j\in I,a_{i_j}\in A\}$。

我们同理定义完全$I$型与部分$I$型。
注意，我们默认了语言的变元集有一子集以$I$为指标集，因此必须放弃语言的变元集可数的假设。

对语言$\mathcal{L}$的结构$\mathcal{M}$中的一个有限有序元素组$\bar{a}=(a_1,...,a_n)$和子集
$B\subseteq M$，
我们定义其型为
$\mathrm{tp}^\mathcal{M}_B(\bar{a})=\{\phi(x_1,...,x_n)|\mathcal{M}\vDash\phi(a_1,...,a_n)\}$，
这里$\phi$是加入了全体$B$中元素为常元的语言$\mathcal{L}_B$的公式。

其余定义同理。
:::

这两个延伸定义都是相当自然的。第一种延伸定义用得较少，我们现在用第二种延伸定义来讨论集合的型。

::: definition
对$\mathcal{L}$结构$\mathcal{M}$的子集$A\subseteq M$，
我们称理论$\mathrm{Th}_A(M)$的部分型与完全型为$A$的部分型与完全型，
全体完全$n$型构成的空间记为$S_n^{\mathcal{M}}(A)$。
这里$\mathrm{Th}_A(M)$是$\mathcal{M}$作为扩张语言$\mathcal{L}_A$的结构的理论。
:::

由于$\mathrm{Th}_A(M)$自动的是完备一致理论，我们同$S_n(T)$一样有以下这些结果。

::: theorem
以下定理对$S_n^{\mathcal{M}}(A)$同样成立。

1. $S_n^{\mathcal{M}}(A)=\{\mathrm{tp}^{\mathcal{N}}_A(\bar{b})|\mathcal{M}\prec\mathcal{N},\bar{b}\in N^n\}$

2. $\mathcal{L}_A$公式集是部分型，当且仅当它的每个有限子集都在$\mathcal{M}$中被实现，
   当且仅当它是一个完全型的子集。完全型是极大部分型。

3. $S_n(A)$是一个紧致$T_2$完全不连通零维空间。

:::

::: proof
显然。
:::

最后，我们来给出著名的省略型定理，它指出非主型总是被某个模型省略。首先仍然来看基础的定义。

我们先对集合的型定义主型。固定一个可数语言$\mathcal{L}$的结构$\mathcal{M}$的子集$A\subseteq M$。

::: definition
如果完全型$p\in S_n^\mathcal{M}(A)$对应的$\{p\}\subseteq S_n^{\mathcal{M}}(A)$是开闭集，
则称$p$是主型。换言之，若存在$\phi$使得$\{p\}=[\{\phi\}]$，则$p$是主型。不是主型的型称作非主型。
:::

主的意思是必须存在。

::: theorem
每个主型都在$M$中实现。
:::

::: proof
这是因为$p$有限可满足，从而$\phi$必须被满足，这又指出$p$被实现。
:::

类似地，我们也可以定义完备理论的主型。仍然固定一个可数语言$\mathcal{L}$上的完备理论$T$。

::: definition
如果完全型$p\in S_n(T)$对应的$\{p\}\subseteq S_n(T)$是开闭集，则称$p$是主型。
:::

::: theorem
每个主型都在每个$T$的模型中实现。
:::

::: proof
对任何$T$的模型$\mathcal{M}$，显然有$S_n(T)=S_n^\mathcal{M}(\varnothing)$。
:::

我们的目标是以下定理。

::: theorem [省略型定理]
如果有一列非主型$p_i\in S_{n_i}(T)$，则存在$T$的可数模型$\mathcal{M}$省略其中每个型。
实际上，只要对每个$n$在$S_n(T)$中指定一个第一纲集$A_n$，就有$T$的可数模型省略每个$A_n$中的每个型。
:::

这个定理的证明非常奇妙，因为它很明显用到了理论空间的Baire性质，这是Baire定理所允许的。
省略型定理被认为是模型论力迫法，且有不依赖于拓扑的模型论证明，
我们选取这个证明是因为它相对而言更为简单。

::: proof
我们首先来考虑$S_{\omega\times\omega}(T)=\bigcup_{n,m\in\omega}S_{n\times m}(T)$的一个有趣的闭子集。
对完备性定理的Henkin证明稍加改造，我们可以将Henkin常元排为$c_{i,j}(i,j\in\omega)$，
使得Henkin公理变为一个函数$f(\bar{c},\phi):(\omega\times\omega)^{<\omega}\times\omega\to\omega$，
使得对每个$\mathcal{L}$公式$\phi(v_1,\dots,v_m,x)$，
任取$m$个$c_{i_k,j_k}(\forall k\in m(i_k\leq n))$，
我们都有对应的Henkin公理
$\exists x(\phi(\bar{c},x))\to\phi(\bar{c},c_{i',f(\bar{c},\phi)})(i'\leq n+1)$。
不妨记这公理为$b_{\bar{c},\phi}$，它指出一个开闭基$B_{\bar{c},\phi}=[\{b_{\bar{c},\phi}\}]$，
我们要考虑的闭子集显然是$H(T)=\bigcap_{\bar{c},\phi}B_{\bar{c},\phi}$，
称之为$T$的可数模型的Henkin枚举。
我们额外通过对$j$归纳对每个$c_{i,j}$定义一个有穷集$P(c_{i,j})\subseteq \omega\times\omega$：
如果$j=0$则$P(c_{i,j})=\{c_{i,j}\}$，
否则由引入Henkin常元的方法有唯一一个$\phi$和一族$c_{i_k,j_k}$使得每个$j_k$都严格小于$j$且$c_{i,j}$在
$b_{\bar{c},\phi}$中被引入，我们让$P(c_{i,j})$是所有$P(c_{i_k,j_k})$的并再加上每个$c_{i_k,j_k}$。
显然这可以帮助我们追溯$c_{i,j}$是如何通过层层要求被引入的。

我们来把$S_n(T)$中的疏朗集改造为$H(T)$中的疏朗集。
具体而言，我们断言：任给$S_n(T)$中疏朗集$C$，假定它由公式$\varphi_i(x_1,\dots,x_n)$对应开闭基交成，
则任取$n$个$c_{i_k,j_k}$，
$\varphi_i(c_{i_1,j_1},\dots,c_{i_n,j_n})$对应的开闭基都在$H(T)$中交出一个疏朗集。
任取一个扩展Henkin常元后语言$\mathcal{L}'=\mathcal{L}\cup\{c_{i,j}\mid i,j\in\omega\}$中的公式
$\varphi(c_{i'_1,j'_1},\dots,c_{i'_n,j'_n})$，
我们要证明$[\{\varphi(\bar{c}')\}]\cap(\bigcup_{i\in\omega}[\{\neg\varphi_i(\bar{c})\}])$不空。

余下的工作是快速的。
假定第一纲集$A_n\subseteq S_n(T)$是一列疏朗闭集$F_{n,m}(\bar{x})$的并，
用上述断言将它们统统转为$H(T)$中疏朗闭集，所有这些人只有可数多个，其并第一纲不能盖住$H(T)$，
这件事的一个例子就足够了。
:::

我们来讨论理论的一种重要性质，它允许我们用简单的无量词句子代替复杂的可能带量词的任意句子。

::: definition
我们称理论$T$具有量词消去，
若对任意公式$\psi(\bar{x})$均有无量词公式$\varphi(\bar{x})$满足
$T\vDash\forall \bar{x}(\psi(\bar{x})\leftrightarrow\varphi(\bar{x}))$。
:::

量词消去的显著好处是初等性变得更容易满足了。

::: theorem
考虑量词消去的理论$T$的两个模型$M,N$。

1. 任何嵌入$f:M\to N$都是初等嵌入。

2. $M$是$N$的子结构时，$M$也是$N$的初等子结构。

:::

::: proof
这是因为前者的无量词版本现在推出后者的任意版本。
:::

我们现在给出判断一个理论是否具有量词消去的判据。首先，我们需要将上一节的工具移植过来。

::: definition [无量词型]
对语言$\mathcal{L}$的结构$\mathcal{M}$中的一个有限有序元素组$\bar{a}=(a_1,...,a_n)$，
我们定义其无量词型为$\mathrm{qftp}^\mathcal{M}(\bar{a})=\{\phi(x_1,...,x_n)$无量词
$|\mathcal{M}\vDash\phi(a_1,...,a_n)\}$。

类似定义理论的无量词完全型与无量词部分型，以及带有定义集$A$的无量词型等等。
无量词完全$n$型构成的空间记为$S_n^{qf}$。
:::

::: theorem
给定两个$\mathcal{L}$结构$M$与$N$，指定两个$n$元组$\bar{a}\in M^n$和$\bar{b}\in N^n$，
则$\mathrm{qftp}^{\mathcal{M}}(\bar{a})=\mathrm{qftp}^{\mathcal{N}}(\bar{b})$当且仅当存在同构
$f:<\bar{a}>_\mathcal{M}\to<\bar{b}>_\mathcal{N}$，使得$f(a_i)=b_i$。
:::

::: proof
这里的$<\bar{a}>_\mathcal{M}$指的是$\bar{a}$作为$M$的子集时生成的子结构，
不难观察到它事实上就是全体$n$变元项$t$实现在$\bar{a}$上后获得的所有$t(\bar{a})\in M$构成的集。

无量词型相等时，记$p=\mathrm{qftp}^{\mathcal{M}}(\bar{a})=\mathrm{qftp}^{\mathcal{N}}(\bar{b})$，
则$f:t(\bar{a})\mapsto t(\bar{b})$就是我们想要的同构，这是因为：

1. $t^\mathcal{M}(\bar{a})=s^\mathcal{M}(\bar{a})\leftrightarrow (t=s)\in p\leftrightarrow t^\mathcal{N}(\bar{b})=s^\mathcal{N}(\bar{b})$

2. $R^\mathcal{M}(t_1^\mathcal{M}(\bar{a}),...,t_m^\mathcal{M}(\bar{a}))\leftrightarrow R(t_1,...,t_m)\in p\leftrightarrow R^\mathcal{N}(t_1^{\mathcal{N}}(\bar{b}),...,t_m^\mathcal{N}(\bar{b}))$

存在同构时，由于考虑的是无量词型，
$A=<\bar{a}>_\mathcal{M}$是子结构足以论断
$\mathrm{qftp}^\mathcal{M}(\bar{a})=\mathrm{qftp}^A(\bar{a})$，
因此只需要论证$\mathrm{qftp}^A(\bar{a})=\mathrm{qftp}^B(\bar{b})$，
而这由同构$f:A\to B$显然地保证了。
:::

现在我们给出量词消去判据。

::: theorem
对理论$T$，以下两个论断等价。

1. $T$具有量词消去。

2. 任给$T$两个模型$M,N$中的$n$元组$\bar{a},\bar{b}$均有
   $\mathrm{qftp}^M(\bar{a})=\mathrm{qftp}^N(\bar{b})\to\mathrm{tp}^M(\bar{a})=\mathrm{tp}^N(\bar{b})$

:::

::: proof
我们来考虑一个典范的$\pi_{qf}:S_n(T)\to S_n^{qf}(T)$，
它将$\mathrm{tp}(\bar{x})$送到$\mathrm{qftp}(\bar{x})$。
我们现在来证明以下链条：$T$量词消去$\to$判据$\to\pi_{qf}$是同胚$\to T$量词消去。

对于第一个$\to$，我们其实有加强版本。

**断言。** 任给量词消去理论$T$的两个模型$M,N$中的$n$元组$\bar{a},\bar{b}$，
均有
$\mathrm{qftp}^M(\bar{a})=\mathrm{qftp}^N(\bar{b})\leftrightarrow\mathrm{tp}^M(\bar{a})=\mathrm{tp}^N(\bar{b})$

**断言的证明。** 一边是简单的，另一边用量词消去的无量词公式来传递等价性。

对第二个$\to$，我们只需证明$\pi_{qf}$是双射，紧致$T_2$空间之间的连续双射自然是同胚。
满射是因为$\mathrm{qftp}$也可以解读为部分型，单射就是条件。

对第三个$\to$，把公式变成$S_n$的开闭集，无量词公式变成$S_n^{qf}$的开闭集，
同胚给出与公式等价的无量词公式。
:::

量词消去有一个弱化的版本。

::: definition [模型完全]

:::
