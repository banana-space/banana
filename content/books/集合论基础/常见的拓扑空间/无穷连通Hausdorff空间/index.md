---
title: 无穷连通Hausdorff空间
notices:
  - name: 问题
    items:
      - '定理“$A$是闭集$\leftrightarrow\mathrm{Der}(A)\subseteq A\leftrightarrow\partial(A)\subseteq A$”的证明中，第一段最后一步“$\exists U\ni x(U\cap A=\{x\})$”似乎应为 $U\cap A=\varnothing$（这里 $x\not\in A$）。'
      - 列举 Int、Der、∂、Cl 之间关系的定理说“十六个命题”，但只列出了十四个。
---

我们特别地讨论无穷连通$T_2$空间，不但是因为它相当常见，而且是因为在其中可以定义收敛性，
它与闭集的性质密切相关。若无特殊说明，接下来都默认空间是无穷连通且$T_2$的；
首先，我们给出收敛性中最重要的两个定义。

::: definition [聚点与收敛]
对于空间$X$的子集$A$，若点$x\in X$满足$x$的每个邻域与$A$的交集都包含至少一个与$x$不同的点，
则称$x$是$A$的聚点。$A$的全体聚点构成的集合$\mathrm{Der}(A)$称为$A$的导集。

与聚点相对应的，我们有孤立点的概念：若存在$x$的邻域与$A$的交集恰好是$\{x\}$，则称$x$是$A$的孤立点。
$A$的全体孤立点构成的集合记为$\mathrm{Sep}(A)$。

对于空间$X$中的一个点列$x_n$，若点$x\in X$满足$x$的每个邻域$U$都对应一个$N$，
满足$\forall n>N(x_n\in U)$，则称点列$x_n$收敛到$x$。
:::

我们总是至少考察$T_2$空间中的收敛性，因为有以下定理。

::: theorem
$T_2$空间中，一个点列至多收敛到一个点。
:::

::: proof
否则，这两个不同的被同一个点列收敛到的点无法被不交的开集所分离。
:::

接下来，我们回顾一下闭包相关的定义。

::: definition [闭包与内部]
显然闭集可以任意交，而开集可以任意并。
因此，在空间$X$的子集$A$上，定义其闭包$\mathrm{Cl}(A)$为全体包含$A$的闭集的交，
其内部$\mathrm{Int}(A)$为全体包含于$A$的开集的并。
:::

我们很少考虑内部，而是更多地关注闭包，这种顾外不顾内的现象以后会非常常见。

::: definition [闭包算子]
对任意集合$X$，一个函数$C:\wp (X)\rightarrow\wp (X)$称作闭包算子，若它满足以下条件：

1. （单调性）$A\subseteq B\rightarrow C(A)\subseteq C(B)$

2. （单增性）$\forall A\subseteq X(A\subseteq C(A))$

3. （幂等性）$\forall A\subseteq X(C(C(A))=C(A))$

:::

闭包算子在数学中极其常见，这里且按下不表。我们来描述一些别的根据$A\subseteq X$来作划分的方式。

::: definition [内外划分]
对于$x\in X$，我们根据$A\subseteq X$作如下分类：

1. 若存在$x$的邻域$U$包含于$A$，则称$x$为$A$的内点。

2. 若存在$x$的邻域$U$与$A$无交，则称$x$为$A$的外点。

3. 若$x$既非内点也非外点，则称$x$为$A$的边界点。

全体内点的集记为$\mathrm{Int}(A)$，全体外点的集记为$\mathrm{Ext}(A)$，
全体边界点的集记为$\partial A$。
:::

这样，我们通过$A$可以得到六个集：$\mathrm{Cl}$、$\mathrm{Int}$、$\mathrm{Ext}$、$\mathrm{Der}$、
$\mathrm{Sep}$、$\partial$。

不难发现，$\mathrm{Cl}$、$\mathrm{Int}$与$\mathrm{Der}$都是单调的，
即$A\subseteq B\rightarrow\Gamma(A)\subseteq\Gamma(B)$，这里$\Gamma$指代前三种操作中的任意一个。
我们来特殊关照一下$\mathrm{Cl}$的性质。

::: theorem
$A$是闭集$\leftrightarrow\mathrm{Der}(A)\subseteq A\leftrightarrow\partial(A)\subseteq A$。
:::

::: proof
若$A$是闭集，
则
$x\not\in A\rightarrow x\in\mathscr{C}(A)\rightarrow \exists U\ni x(U\subseteq\mathscr{C}(A))\rightarrow\exists U\ni x(U\cap A=\{x\})$，
这里开邻域$U$可以直接取成$\mathscr{C}(A)$。这个推理过程的逆否就指出$\mathrm{Der}(A)\subseteq A$。

若$\mathrm{Der}(A)\subseteq A$，
则
$x\in\partial(A)\wedge x\not\in A\rightarrow\forall U\ni x(U\cap A\not=\varnothing)\rightarrow\forall U\ni x\exists y\in U\cap A(x\not=y)\rightarrow x\in\mathrm{Der}(A)\subseteq A$，
引出一个矛盾，因此$\partial{A}\subseteq A$。

最后，若$\partial{A}\subseteq A$，由于$\mathrm{Ext}(A)$显然是个与$A$不交的开集，
而它的补集$\mathrm{Int}(A)\cup\partial A$两部分又都包含于$A$，于是这个开集的补集就是$A$，
指出$A$是闭集。
:::

那么，我们自然会猜想闭包也可以这样产生。

::: theorem
$\mathrm{Cl}(A)=A\cup\mathrm{Der}(A)=A\cup\partial A$
:::

::: proof
我们证明右二者皆为闭集，再证明它们都包含于$\mathrm{Cl}(A)$。

$x\not\in A\cup\mathrm{Der}(A)\leftrightarrow x\not\in A\wedge \exists U\ni x(U\cap A\backslash\{x\}=\varnothing)\leftrightarrow\exists U\ni x(U\cap A=\varnothing)\leftrightarrow x\in\mathrm{Ext}(A)$。

$x\not\in A\cup\partial A\leftrightarrow x\not\in A\wedge(x\in\mathrm{Int}(A)\vee x\in\mathrm{Ext}(A))\leftrightarrow x\in\mathrm{Ext}(A)$，
因为$\mathrm{Int}(A)\subseteq A$。

于是，我们证明了$A\cup\mathrm{Der}(A)=A\cup\partial A$，且它们事实上是同一个包含$A$的闭集，
于是它包含$\mathrm{Cl}(A)$。现在我们证明它包含于$\mathrm{Cl}(A)$，从而都相等。

反证，若存在$x\in A\cup\mathrm{Der}(A)\backslash\mathrm{Cl}(A)$，由于$A\subseteq\mathrm{Cl}(A)$，
此时必有$x\in\mathrm{Der}(A)$，但存在闭集$C\supseteq A$不包括$x$，我们考虑其补集$U=X\backslash C$，
它是$x$的开邻域，因此$x\in\mathrm{Der}(A)$指出它与$A$交于不同于$x$的另一点，
这与$A$包含在其补集中矛盾。
:::

最后，我们枚举$\mathrm{Int}$、$\mathrm{Der}$、$\partial$和$\mathrm{Cl}$之间的关系如下。

::: theorem {@thm:四种运算的关系}
我们有以下十六个命题。

1. $\mathrm{Int}\mathrm{Int}=\mathrm{Int}$

2. $\mathrm{Der}\mathrm{Int}=\mathrm{Cl}\mathrm{Int}\subseteq\mathrm{Der}$

3. $\partial\mathrm{Int}\subseteq\partial\cap\mathrm{Der}$

4. $\mathrm{Int}\mathrm{Der}=\mathrm{Int}\mathrm{Cl}\supseteq\mathrm{Int}$

5. $\mathrm{Der}\mathrm{Der}\subseteq\mathrm{Der}$

6. $\partial\mathrm{Der}\subseteq\partial\cap\mathrm{Der}$

7. $\mathrm{Cl}\mathrm{Der}=\mathrm{Der}$

8. $\mathrm{Int}\partial=\mathrm{Int}(\mathrm{Cl}\cap\mathrm{Cl}\mathscr{C})$

9. $\mathrm{Der}\partial\subseteq\mathrm{Der}\cap\partial$

10. $\partial\partial\subseteq\partial$

11. $\mathrm{Cl}\partial=\partial$

12. $\mathrm{Der}\mathrm{Cl}=\mathrm{Der}$

13. $\partial\mathrm{Cl}\subseteq\partial$

14. $\mathrm{Cl}\mathrm{Cl}=\mathrm{Cl}$

:::

我们给出一个引理。

::: lemma {@lem:内点是聚点}
$\mathrm{Int}(A)\subseteq\mathrm{Der}(A)$。
:::

::: proof
若有不在导集中的内部点，那么一定有这点的一个邻域包含于$A$且与$A$仅仅交于恰好这一个点，
于是这个单点集是开集，而Hausdorff指出这个单点集是闭集，于是这个单点集是开闭集，与连通性矛盾。
:::

::: proof [@thm:四种运算的关系 的证明]
1：$\mathrm{Int}\subseteq\mathrm{Int}\mathrm{Int}\subseteq\mathrm{Int}$

2：$\mathrm{Cl}\mathrm{Int}\subseteq\mathrm{Der}\mathrm{Int}\subseteq\mathrm{Der}$，
然而$\mathrm{Cl}\mathrm{Int}=\mathrm{Int}\cup\mathrm{Der}\mathrm{Int}$，
其中又有$\mathrm{Int}=\mathrm{Int}\mathrm{Int}\subseteq\mathrm{Der}\mathrm{Int}$。

3：
$x\in\partial\mathrm{Int}(A)\rightarrow\forall U\ni x(U\cap\mathrm{Int}(A)\not=\varnothing\wedge U\cap(\partial A\cup\mathrm{Ext}(A))\not=\varnothing)$，
注意$\mathrm{Int}(A)\subseteq A$指出
$U\cap\mathrm{Int}(A)\not=\varnothing\rightarrow U\cap A\not=\varnothing$，
而若真的存在$U$使得$U\cap\mathscr{C}(A)=\varnothing$，
则$x\in U\subseteq A$指出$x\in\mathrm{Int}(A)=\mathrm{IntInt}(A)$，
与$\partial\mathrm{Int}(A)\cap\mathrm{IntInt}(A)=\varnothing$矛盾。
因此$\partial\mathrm{Int}\subseteq\partial$。
继续从这里出发，
可以看到
$x\not\in\mathrm{Int}(A)\rightarrow U\cap A\backslash\{x\}\supseteq U\cap\mathrm{Int}(A)\backslash\{x\}=U\cap\mathrm{Int}(A)\not=\varnothing$，
于是$x\in \mathrm{Der}(A)$，即得$\partial\mathrm{Int}\subseteq \partial\cap\mathrm{Der}$。

4：
$\mathrm{Int}\mathrm{Cl}\supseteq\mathrm{Int}\mathrm{Der}\supseteq\mathrm{Int}\mathrm{Int}=\mathrm{Int}$，
然后我们证明$\mathrm{IntCl}\backslash\mathrm{IntDer}$是空集。
否则，假定其中有一个$x$，根据定义可得$\exists U\ni x(U\subseteq \mathrm{Cl}(A))$，
同时$\forall V\ni x\exists y\in V(y\not\in\mathrm{Der}(A))$，我们取$V$为$U$，
得到$x,y\in U\subseteq\mathrm{Cl}(A)$和$y\not\in\mathrm{Der}(A)\subseteq\mathrm{Cl}(A)$。
现在继续拆开$y\not\in\mathrm{Der}(A)$的定义，
得到$\exists W\ni y(W\cap A\backslash\{y\}=\varnothing)$，而$W\cap U$与$W$具有相同性质，
因此不妨设有$W\subseteq U\subseteq \mathrm{Cl}(A)(W\cap A\backslash\{y\}=\varnothing)$，
这给出$W\backslash\{y\}\subseteq \mathrm{Der}(A)$。
连通性指出$W\backslash\{y\}$不空，假定其中有一个$z\in\mathrm{Der}(A)$，
这指出$z$的任意邻域与$A$交于一个$z$之外的点。
注意$W\backslash\{y\}$是$z$的邻域，这指出$W\cap A\backslash\{y\}\not=\varnothing$，
但我们早已知道$W\cap A\backslash\{y\}=\varnothing$，矛盾。

5：
$x\in\mathrm{DerDer}(A)\rightarrow\forall U\ni x\exists y\in U\backslash\{x\}\forall V\ni y\exists z\in(V\cap A)\backslash\{y\}$，
注意令$V=U\backslash\{x\}$得到的这个$z$恰好能使$z\in U\cap A\backslash\{x\}$，
于是$x\in\mathrm{Der}(A)$。

6：与3类似。
$x\in\partial\mathrm{Der}(A)\rightarrow\forall U\ni x\exists y,z\in U(y\in\mathrm{Der}(A)\wedge z\not\in\mathrm{Der}(A))$。
先看$y$，显然有$\forall V\ni y(V\cap A\backslash\{y\}\not=\varnothing)$，
于是取$V$为$U$得到$U\cap A\supseteq U\cap A\backslash\{y\}\not=\varnothing$。
然后看$z$，它指出$\exists W\ni z(W\cap A\backslash\{z\}=\varnothing)$，显然不妨设$W\subseteq U$，
于是
$U\cap\mathscr{C}(A)\supseteq W\backslash\{z\}\cap\mathscr{C}(A)=W\backslash\{z\}\not=\varnothing$。
综上得$x\in\partial(A)$。
最后，注意5指出$\mathrm{Der}(A)$是闭集，我们直接得到$\partial\mathrm{Der}\subseteq\mathrm{Der}$。

7：由第一个引理显然与5等价。

8：显然我们有更强的$\partial=\mathrm{Cl}\cap\mathrm{Cl}\mathscr{C}$。

9：
$x\in\mathrm{Der}\partial(A)\rightarrow\forall U\ni x\exists y\not=x\in U\forall V\ni y(V\cap A\not=\varnothing\wedge V\cap\mathscr{C}(A)\not=\varnothing)$，
这里取$V=U$可得$x\in\partial(A)$，同时若$U\cap A\backslash\{x\}=\varnothing$则必有$U\cap A=\{x\}$，
这时取$V=U\backslash\{x\}$可见$V\cap A=\varnothing$引发矛盾，因此也有$x\in\mathrm{Der}(A)$。

10：$\partial=\mathrm{Cl}\backslash\mathrm{Int}$，因此显然它是个闭集。

11：这和10一个道理。

12：由于导集算子单调，显然只要证明$\mathrm{DerCl}\backslash\mathrm{Der}=\varnothing$。
如果其中有一个$x$，
则
$\exists U\ni x(U\cap A\backslash\{x\}=\varnothing\wedge U\cap\mathrm{Cl}(A)\backslash\{x\}\not=\varnothing)$。
注意到$\mathrm{DerCl}\subseteq\mathrm{Cl}$，
我们有$x\in\mathrm{Cl}(A)\backslash\mathrm{Der}(A)\subseteq A$，
于是$U\cap A=\{x\}$而$\exists y\in\mathrm{Cl}(A)\backslash A(y\in U\backslash\{x\})$，
这时不难发现开集$U\backslash\{x\}$满足了
$U\backslash\{x\}\cap A\backslash\{y\}=\varnothing\wedge U\backslash\{x\}\cap\mathrm{Cl}(A)\backslash\{y\}\not=\varnothing$，
这样重复前面对$x$的论证又可以给出$y\in A$，这与$y\in\mathrm{Cl}(A)\backslash A$矛盾。

13：
$\partial\mathrm{Cl}=\mathrm{ClCl}\cap\mathrm{Cl}\mathscr{C}\mathrm{Cl}\subseteq\mathrm{Cl}\cap\mathrm{Cl}\mathscr{C}=\partial$

14：显然。
:::

我们这里指出关于单点集的一点额外定理。

::: theorem
$T_1$的等价定义是每个单点集都是闭集。
:::

::: proof
如果空间$T_1$，对任意给定的点$x$，我们考虑所有不同于它的点$y$，
$T_1$指出对每个这样的$y$都存在其开邻域$U_y$不包括$x$，于是所有$U_y$的并集是个开集，
它不包括$x$而包括$x$之外的所有点，于是这个开集就是$X\backslash\{x\}$，换言之$\{x\}$是闭集。

如果每个单点集都是闭集，显然对不同的$x$与$y$，$X\backslash\{x\}$就是一个包括$y$而不包括$x$的开集。
:::

::: theorem [杨忠道]
任意拓扑空间中，所有集的导集都是闭集，当且仅当所有单点集的导集都是闭集。
:::

::: proof
显然只要证明所有单点集的导集都是闭集推出所有集的导集都是闭集这一方向。

要证明所有集的导集都是闭集，
也就是证明任给集$A$均有$\mathrm{Der}\mathrm{Der}(A)\subseteq\mathrm{Der}(A)$。

$x\in\mathrm{Der}\mathrm{Der}(A)\leftrightarrow\forall U\ni x(U\cap \mathrm{Der}(A)\backslash\{x\}\not=\varnothing)$。

在$T_2$空间中，$\mathrm{Der}\{x\}=\varnothing$；而在这里，$\mathrm{Der}\{x\}$同样是个闭集，
且有$x\not\in\mathrm{Der}\{x\}$，这是因为$U\cap\{x\}\backslash\{x\}=\varnothing$总是成立。

于是，对任意$U\ni x$，我们考虑$V=U\backslash\mathrm{Der}\{x\}\subseteq U$。
它是开集去掉闭集，因此仍是开集，而我们上述论证说明有$x\in V\subseteq U$。
我们证明$V\cap A\backslash\{x\}\not=\varnothing$即可得出$U\cap A\backslash\{x\}\not=\varnothing$，
进而有$x\in\mathrm{Der}(A)$证毕。

目前，我们的条件只有$V\cap\mathrm{Der}(A)\backslash\{x\}\not=\varnothing$。
我们假定其中包括一点$y\not=x$，
不难注意到$y\in U\wedge y\in\mathrm{Der}(A)\wedge y\not\in\mathrm{Der}\{x\}$。
最后一点指出$\exists W\ni y(W\cap\{x\}\backslash\{y\}=\varnothing)$，
换言之$W\cap\{x\}=\varnothing$。

现在，我们有开集$V\cap W\ni y$，
因此$y\in\mathrm{Der}(A)$指出$V\cap W\cap A\backslash\{y\}\not=\varnothing$，
又由于$x\not\in V\cap W\subseteq W$，我们有$V\cap W\cap A\backslash\{x\}\not=\varnothing$证毕。
:::
