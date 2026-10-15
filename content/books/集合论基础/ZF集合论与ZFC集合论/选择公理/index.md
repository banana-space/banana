---
title: 选择公理
---
我们将记选择公理为AC(Axiom of Choice)，良序原理为WO(Well Ordering principle)，左恩引理为ZL(Zorn's Lemma)，图基引理为TL(Tukey's Lemma)，豪斯多夫极大原则为HM(Hausdorff's Maximal principle)，库拉托夫斯基引理为KL(Kuratowski's Lemma)，基数比较原则为CC(Cardinal Comparison principle)。

::: theorem [选择公理及其等价形式]
以下命题在ZF中等价。

1. $(AC_1)\,\,\forall x(x\not =\varnothing\wedge\varnothing\not\in x\wedge\forall y\in x\forall z\in x(y\not=z\rightarrow y\cap z=\varnothing)\rightarrow \exists s\subseteq \cup x\forall v\in x\exists w(s\cap v=\{w\}))$

2. $(AC_2)\,\,\forall x=\{x_i|i\in I\}(\forall i\in I(x_i\not=\varnothing)\rightarrow \prod_{i\in I}x_i\not=\varnothing)$

3. $(AC_3)\,\,\forall f:x\twoheadrightarrow y\exists g:y\hookrightarrow x\forall u\in y(f(g(u))=u)$

4. $(WO)$每个集合都可以配上一个良序。

5. $(CC)\,\,(\neg\exists f:x\hookrightarrow y)\rightarrow(\exists g:y\hookrightarrow x)$

6. $(HM)$每个偏序集都有一条极大的全序链。

7. $(ZL)$如果一个偏序集，其中的每个全序链都有上界，则这个偏序集有一个极大元。

8. $(KL)$如果一个集族中，每个对真包含关系的全序链的并还在这集族之内，则这集族中有一个不真包含于任何集的集。

9. $(TL)$如果一个集族有有限特征，即一个集合每个有限子集都在这集族内当且仅当其本身亦在这集族内，则这个集族中的集在包含关系下有一个极大元。

:::

::: proof
我们采取边讲边证的方式，先证明(AC)们等价，然后证明(WO)与(CC)等价，然后是后面四个引理等价，最后证明这三个等价团块都等价。

Chain 1:$AC_1\rightarrow AC_2\rightarrow AC_3\rightarrow AC_1$

$1\rightarrow 2$注意$\prod_{i\in I}x_i$的定义就是$\{t:I\to\cup x_i|t(i)\in x_i\}$，无交化后取选择集即得一个所要的函数。

$2\rightarrow 3$注意满射相当于在定义域上做划分，这个划分的选择函数就是所要的函数。

$3\rightarrow 1$有一个$\cup x\twoheadrightarrow x$的满射，它对应的单射的像集就是所要的选择集。

Chain 2:$WO\rightarrow CC\rightarrow WO$

$WO\rightarrow CC$每个集合都可以配上良序，那么良序集比较原则总是给出一个方向的单射。

$CC\rightarrow WO$给定一个集合，考虑最小的存在到这个集合满射的序数，这个满射把这个序数上的良序不增大地投到这个集合上。（取原像集的最小元来比较）

Chain 3:$HM\rightarrow ZL\rightarrow KL\rightarrow TL\rightarrow HM$

$HM\rightarrow ZL$极大全序链的上界就是极大元。

$ZL\rightarrow KL$这个并显然就是这个全序链的上界。

$KL\rightarrow TL$只要证明具有有限特征的集族把每个真包含关系的全序链的并保留在集族内，方法是看出这个并的有限子集一定包含在链的某个元素里，从而在这集族内。

$TL\rightarrow HM$考虑这个偏序集全体全序链在包含关系下形成的集族，只要证明它有有限特征，这是因为全序链是有限全序子链拼起来的。

Chain 4:$AC_2\rightarrow WO\rightarrow KL(\leftrightarrow)TL\rightarrow AC_2$

$AC_2\rightarrow WO$在任意集$X$的幂集上做一个选择函数$f:(\wp X\backslash\varnothing)\to X$，则$\forall S\subseteq X(f(S)\in S)$。选$x_\varnothing=f(X),x_{\alpha\cup\{\alpha\}}=f(X\backslash \{x_\beta|\beta\leq\alpha\}),x_{\lim_{\beta<\alpha}\beta}\\=f(X\backslash \{x_\beta|\beta<\alpha\})$，注意到$\aleph(X)$之下一定存在一个序数使得选择过程终止（即出现$f(\varnothing)$选不出来），我们就得到了这个序数与$X$的双射，从而可以把序数上的良序结构搬到$X$上。

$WO\rightarrow KL$在这个集族$X$上取良序$\leq$，我们超限归纳一个$f:X\to 2$使得$f(A)=1\leftrightarrow\forall B< A(f(B)=1\to B\subseteq A)$，然后$\bigcup f^{-1}(1)\in X$就是所要的不被任何$A\in X$真包含的集合。

$TL\rightarrow AC_2$全体部分选择函数形成的集族显然有有限特征，而极大选择函数显然是全函数。
:::

今后，带有选择公理的ZF将简记为$\mathrm{ZFC}$。我们将默认一切数学都在$\mathrm{ZFC}$中进行。

选择公理最著名的“悖论”当属如下著名的分球定理。当然，没有选择公理其实可以有更离谱的悖论，因为我们可以把一个集合拆分成比这集合的势更大的一个子集族。

::: theorem [Banach-Tarski分球佯谬]
可以将球分成五块，通过正交变换后将它们重新拼成两个球。
:::

::: remark*
事实上，这个佯谬就是因为涉及了不可测集，从而挑战了人们对测度的美好愿景，才会显得非常奇怪。不可测集存在是依赖于AC的，因为存在所有实数子集都可测的ZF模型。
:::
