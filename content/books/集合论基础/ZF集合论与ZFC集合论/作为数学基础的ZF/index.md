---
title: 作为数学基础的ZF
---
接下来，我们要用$\mathrm{ZF}$给出数学的基础，而这就需要我们定义常见的数学操作。

## 特别的二元关系

这一小节将引入关系与函数的概念，并指出一些基本的集合论性质，以资将来使用。

::: definition [二元关系]
我们作以下定义：

定义两个集合$a,b$构成的有序对为$(a,b)=\{\{a\},\{a,b\}\}$。

定义两个集合的积为$A\times B=\{(a,b)|a\in A,b\in B\}$。

定义二元关系为某个$A\times B$的子集$R$。特殊的，若$R\subseteq A\times A$，则称$R$是$A$上的二元关系。

对二元关系$R\subseteq A\times B$，定义其定义域为$\mathrm{dom}(R)=\{x\in A|\exists y\in B((x,y)\in R)\}$，值域为$\mathrm{ran}(R)=\{y\in B|\exists x\in A((x,y)\in R)\}$。
:::

这里的二元关系的概念还很粗糙。不过，首要的任务是证明我们定义出来的东西确实是集合。有序对显然是用三次对集公理，但是积则需要从$\wp (C)$中分离出来，其中$C\subseteq \wp (A\cup B)$，至于每一步怎么分离留予读者自证。定义域和值域显然是直接分离。

接下来，有序对当然要和对集显出不一样的特殊性质，才对得起我们的苦心定义。

::: proposition [有序对相等的外延性]
$(a,b)=(a',b')\leftrightarrow (a=a'\wedge b=b')$
:::

::: proof
从右向左是显然的，考虑从左到右。这时条件就是$\{\{a\},\{a,b\}\}=\{\{a'\},\{a',b'\}\}$，分类讨论$a=b$与$a\not=b$的两种情况，由对集的定义就能得出结论。
:::

接下来先考虑最重要的一类二元关系，它们就是函数。

::: definition [函数]
若二元关系$f$满足$\forall x\in A\forall y\in B\forall z\in B((x,y)\in f\wedge(x,z)\in f\rightarrow y=z)$，则称$f$是一个部分函数。常用$f(x)=y$代表$(x,y)\in f$。在定义函数时，又常常记为$f,x\mapsto y$

如果$\mathrm{dom}(f)=X$且$\mathrm{ran}(f)\subseteq Y$，则称$f$是$X$到$Y$的函数，简称函数，记为$f:X\rightarrow Y$。注意这和逻辑连接词$\to$使用的是同一个记号，但在上下文中通常都是可理解的。

我们进而定义$Y^X=\{f:X\rightarrow Y\}$是全体从$X$到$Y$的函数组成的集合，由分离公理模式保证。
:::

由于我们这里是集合论，函数的相等也是集合相等的一种，自然也会有外延性。

::: proposition [函数相等的外延性]
两个函数满足$f=g$当且仅当$\mathrm{dom}(f)=\mathrm{dom}(g)\wedge \forall x\in \mathrm{dom}(f)(f(x)=g(x))$
:::

::: proof
从左向右显然。从右向左注意$f=\{(x,f(x))|x\in \mathrm{dom}(f)\}$即可显然。
:::

::: definition [函数的操作]
函数有一些范畴化的性质，我们一一构造如下。

1. 我们有自然的$id_A\in A^A,a\mapsto a$称作恒等函数。

2. 我们还当给定$b\in B$时有自然的$\bar{b}\in B^A,a\mapsto b$称作常函数。在上下文不混淆时我们也会直接拿$b$代称$\bar{b}$。

3. 如果有$f\in B^A$和$g\in C^B$，定义$g\circ f\in C^A,a\mapsto g(f(a))$。

4. 如果有$f\in B^A$和$A'\subseteq A$，定义$f|_{A'}=\{(x,y)\in A'\times B|f(x)=y\}$，称作$f$在$A'$上的限制。

5. 如果$f\in B^A$满足$\forall a_1,a_2\in A(a_1\not=a_2\rightarrow f(a_1)\not=f(a_2))$，则称$f$是单射，记为$f:A\hookrightarrow B$。

6. 如果$f\in B^A$满足$\forall b\in B\exists a\in A(f(a)=b)$，则称$f$是满射，记为$f:A\twoheadrightarrow B$。

7. 如果$f$又是单射又是满射，则称$f$是双射，又称一一对应。

显然，$f\in B^A\rightarrow f=f\circ id_A=id_B\circ f$，在有定义时$f\circ(g\circ h)=(f\circ g)\circ h$。
:::

::: theorem [可消去性]
我们称一个函数$f\in B^A$右可消去，若$\forall C\forall g_1,g_2\in C^B(g_1\circ f=g_2\circ f\rightarrow g_1=g_2)$。

我们称一个函数$g\in C^B$左可消去，若$\forall A\forall f_1,f_2\in B^A(g\circ f_1=g\circ f_2\rightarrow f_1=f_2)$。

函数左可消去当且仅当是单射，右可消去当且仅当是满射。
:::

::: proof
我们只证左可消等价于单，另一个留给读者。

单则左可消：由函数相等的外延性，左可消去无非是要求说明$\forall a\in A(g(f_1(a))=g(f_2(a))\rightarrow f_1(a)=f_2(a))$，这恰好就由$g$单射指出。

左可消则单：我们考虑证明不单则不左可消。若不单，一定有$b_1\not =b_2$使得$g(b_1)=g(b_2)$。考虑常函数，我们有$g\circ b_1=g\circ b_2$，这说明$g$不左可消。
:::

::: definition [单侧逆]
我们称函数$f\in B^A$是函数$g\in A^B$的左逆，若$f\circ g=id_B$。存在左逆简称左可逆。

我们称函数$f\in B^A$是函数$g\in A^B$的右逆，若$g\circ f=id_A$。存在右逆简称右可逆。

我们称函数$f\in B^A$是函数$g\in A^B$的逆，若它既是左逆又是右逆。存在逆简称可逆，$g$的逆记为$g^{-1}$。
:::

::: theorem [可逆]
对$g\in A^B$，以下等价。

1. $g$可逆

2. $g$有唯一一个逆

3. $g$同时有左逆和右逆

4. $g$是双射

:::

::: proof
过于显然，留作练习。（双射给出逆其实就是有序对里的元素交换一下位置）
:::

::: remark*
显然左可逆推出左可消去等价于单，右可逆推出右可消去等价于满，我们会猜倒过来也成立。运用和上面相同的方式可以说明单则左可逆，但是满则右可逆其实是ZF不可证明的，它等价于大名鼎鼎的选择公理，我们之后将看到它。
:::

此外，部分函数的概念也并非毫无用处。

::: theorem [相容函数族]
若有一族$A\times B$上的部分函数$\{f_i\subseteq A\times B|i\in I\}$满足$\forall a\in A\forall i,j\in I(\exists y,z\in B(f_i(a)=y\wedge f_j(a)=z)\rightarrow y=z)$，则称这族函数是相容的，或称这是一个相容函数族。

若$F=\{f_i\subseteq A\times B|i\in I\}$是相容函数族，则$f=\cup F$也是一个部分函数。
:::

::: proof
由部分函数的定义显然。
:::

::: remark*
如果这相容函数族里面的函数的定义域并起来是$A$的话，这个$f$就是货真价实的函数了。这个想法将来会有许多用处。
:::

接下来我们讨论另外一些特别的单个集合上的二元关系。

::: definition [单个集合上的二元关系的性质]
我们给集合$X$上的二元关系$R\subseteq X\times X$以下这些性质依次命名：

1. 自反性：$\forall x\in X((x,x)\in R)$

2. 反自反性：$\forall x\in X((x,x)\not\in R)$

3. 对称性：$\forall x,y\in X((x,y)\in R\rightarrow (y,x)\in R)$

4. 非对称性：$\forall x,y\in X((x,y)\in R\rightarrow (y,x)\not\in R)$

5. 反对称性：$\forall x,y\in X((x,y)\in R\rightarrow (y,x)\in R\rightarrow x=y)$

6. 传递性：$\forall x,y,z\in X((x,y)\in R\rightarrow (y,z)\in R\rightarrow (x,z)\in R)$

7. 完全性：$\forall x,y\in X((x,y)\in R\vee (y,x)\in R)$

8. 三岐性：$\forall x,y\in X((x,y)\in R\vee (y,x)\in R\vee x=y)$

9. 外延性：$\forall x,y\in X(\forall z\in X((z,x)\in R\leftrightarrow (z,y)\in R)\rightarrow x=y)$

10. 良基性：$\forall S\subseteq X(S\not=\varnothing\rightarrow \exists s\in S\forall x\in S((x,s)\not\in R))$，这个$s$又称$S$的最小元。

:::

有了这些名字，我们就可以顺畅的定义以下这些特殊二元关系的名字了。

::: definition [等价关系，良基关系与各种序]
满足自反性、对称性和传递性的二元关系称作等价关系。

满足良基性的二元关系称作良基关系，满足外延性和良基性的二元关系称作外延良基关系。

满足自反性和传递性的二元关系称作拟序。

满足自反性、反对称性和传递性的二元关系称作偏序，满足反自反性、非对称性和传递性的二元关系称作严格偏序。

满足完全性的偏序称作全序，满足三岐性的严格偏序称作严格全序。

满足良基性的严格全序称作良序。

对于这些二元关系$R$，我们习惯性地记$(x,y)\in R$为$xRy$。为了强调某个集合带有这样的二元关系，我们会用有序对把他们装在一起，例如$(X,R)$。
:::

接下来，我们依次查考这些关系。首先是等价关系。

::: definition [划分，无交并]
如果一个非空集的集族$\{X_i|i\in I\}$满足$\forall i,j\in I(i\not =j\rightarrow X_i\cap X_j=\varnothing)$，就称这是一族无交的集合。此时特别的将$\bigcup_{i\in I}X_i$记为$\coprod_{i\in I}X_i$，称作无交并。

如果$X=\coprod_{i\in I}X_i$，则称$\{X_i|i\in I\}$构成集合$X$的一族划分。
:::

::: remark*
很多时候，我们写$\{X_i|i\in I\}$并不是说这时替换公理从$I$里面由某个公式替换出来的集合，而是单纯的没事找事给这个集合编个号，免得写出$\{X_i\}$这种因空白而显得有些尴尬的东西。由于我们可以把$X=\{x$们$\}$当成$X'=\{(x,\{x\})$们$\}$，即用有序对的方法给$X$每个元素带上一个标号，就是它自己定义的单点集，我们这样写也不妨事，大不了我说$I$就是$\{\{x\}$们$\}$。
:::

::: lemma [无交化]
对任何集族$\{X_i|i\in I\}$，我们有一族无交的集合$\{(X_i,\{X_i\})|i\in I\}$与它之间有双射。
:::

::: proof
这就是延续上面注记的精神。
:::

::: theorem [商]
集合$X$上的全体等价关系与全体划分之间存在一个双射。
:::

::: proof
我们定义$X$的元素$x$在等价关系$\sim$下的等价类为$[x]_\sim=\{y\in X|x\sim y\}$。定义商映射$X/$如下，它把等价关系变成划分：

$X/\sim=\{[x]_\sim|x\in X\}$。

来证明这是个划分。首先，$x\in[x]_\sim$指出每个集都非空；其次，$[x]_\sim\cap[y]_\sim\not=\varnothing\rightarrow \exists z(x\sim z\sim y)\rightarrow x\sim y\rightarrow [x]_\sim=[y]_\sim$，于是不同的两个等价类确实无交。

反过来，我们用划分$P$来定义等价关系$\sim_P$如下：

$x\sim_P y\leftrightarrow \exists p\in P(x\in p\wedge y\in p)$。

这是个等价关系只要按定义拆开看一看就好了。

不难发现我们上面定义的这俩函数互为逆，所以它们都是双射。
:::

::: remark*
商关系甚为常见，我们不但可以给集合做商，还可以给许多数学构造做商，我们遇到的时候再说。
:::

接下来是良基关系。其实大部分时候主流数学家并不会用到这个关系，他们最多用到良序，但是我们这里刻意强调它是因为集合们的属于关系由外延公理和良基公理恰好是个外延良基关系，而外延良基关系恰好就是集合的属于。

::: definition [传递集]
如果$x$满足$\forall z(\exists y(z\in y\wedge y\in x)\to z\in x)$，则称$x$是传递集，记为$\mathrm{isTrans}(x)$。
:::

::: theorem [Mostowski's Collapsing]
外延良基关系集一定和一个配上属于关系的传递集同构。
:::

这个定理的证明需要良基归纳法与良基递归定义原理，我们在第三节来处理它。不过下一小节我们将看到归纳法和递归定义在$\mathbb{N}$上的特化形式，也是数学史上人们最开始提出这些想法的形式。

最后是序关系。拟序太弱，一般没人考虑。我们先来看我们定义中的严格是啥意思。

::: theorem [严格序与序]
严格偏序一一对应于偏序，严格全序一一对应于全序。
:::

::: proof
定义$X$上的对角线为$\Delta=\{(x,x)|x\in X\}$。偏序就是严格偏序并上对角线，全序就是严格全序并上对角线。
:::

::: remark*
因此，我们以后就把$<$默认作为严格偏序/严格全序的符号，而$\leq$默认作为$<$对应的偏序/全序的符号。反过来也一样。
:::

::: definition [单调与同构]
如果函数$f\in B^A$把带有偏序$<_A$的集$A$映到带有偏序$<_B$的集$B$，我们定义：

$f$是单调函数，若$a_1\leq a_2\rightarrow f(a_1)\leq f(a_2)$。

$f$是严格单调函数，若$a_1<a_2\rightarrow f(a_1)<f(a_2)$。

$f$是序同构，若$f$是双射且单调的函数（当然此时也是严格单调的）。

如果$<_A$和$<_B$同时升格为全序或良序，定义照旧。
:::

现在我们来到了最重要的良序关系。良序关系的很多东西几乎会照搬到序数理论里，而后者是我们在需要做超过有限次操作时的计数器。

::: definition [真前段]
对带某种严格序的集合$(W,<)$，定义其中元素$w$定义的真前段为这集合的真子集$W[w]=\{x\in W|x<w\}$。如果$(W,<)$是良序集，则它经由从$W$上继承而来的良序关系仍然成良序集。
:::

::: theorem [良序集比较定理]
若有两个良序集$(W_1,<_1)$与$(W_2,<_2)$，则以下三个情况一定成立一个：

1. 存在$(W_1,<_1)$与$(W_2,<_2)$之间的序同构。

2. 存在$w_1\in W_1$和$(W_1[w_1],<_1)$与$(W_2,<_2)$之间的序同构。

3. 存在$w_2\in W_2$和$(W_1,<_1)$与$(W_2[w_2],<_2)$之间的序同构。

我们将存在$(W_1,<_1)$与$(W_2,<_2)$之间的序同构记为$(W_1,<_1)\cong (W_2,<_2)$。
:::

::: proof
我们考虑（部分）函数$F\subseteq W_1\times W_2$，$(w_1,w_2)\in F\leftrightarrow W_1[w_1]\cong W_2[w_2]$。

首先证明这是从其定义域到其值域的双射。显然由对称性只需要证明它是个函数，这也就是要说一个良序集的同构真前段一定是同一个集：

假定在$(W,<)$中有两个同构的真前段$W[w_1]\cong W[w_2]$，这个序同构函数$f\in W[w_2]^{W[w_1]}$是单调函数首先指出$f(x)\geq x$：反证，若$X=\{x\in W[w_1]|f(x)<x\}$非空，其最小元$x$一定满足$f(x)<x$，所以由最小性质有$f(f(x))\leq f(x)$，这说明$f$不单调，矛盾。这立刻指出同构$f$是恒等函数，因为$f(x)\leq x$，而同时也必须有$f^{-1}(x)\leq x$。于是这两个集合相等，因为恒等函数限制在上面变成双射。

于是我们就得到了$F$是$\mathrm{dom}{F}$与$\mathrm{ran}{F}$之间的双射。显然$F$单调，于是$\mathrm{dom}{F}\cong \mathrm{ran}{F}$。

若$F$恰好就是$W_1$到$W_2$的函数，情况(1)就成立了。下面假定$W_1-\mathrm{dom}{F}\not=\varnothing$，我们来证明$\mathrm{ran}{F}=W_2$，而且情况(2)成立。同理则可得(1)(2)(3)总有一个成立。

首先证明这时$\mathrm{dom}{F}$一定是$W_1[w_1]$，其中$w_1$是$W_1-\mathrm{dom}{F}$的最小元。这是因为若还存在$w>w_1$在$F$的定义域内，则见证$W_1[w]$与某个$W_2[-]$同构的函数$f$限制在$W_1[w_1]$上可以得到同构$W_1[w_1]\cong W_2[f(w_1)]$，这与$w_1\not\in \mathrm{dom}{F}$矛盾。

接下来证明$\mathrm{ran}{F}$一定是$W_2$。还是假定$W_2-\mathrm{ran}{F}$非空，有最小元$w_2$，我们同理可以证明$W_1[w_1]\cong W_2[w_2]=\mathrm{ran}{F}$。然而再假定$W_1[w_1]\cup\{w_1\}=W_1[w_3]$，$W_2[w_2]\cup\{w_2\}=W_2[w_4]$，我们可以发现显然的同构$W_1[w_3]\cong W_2[w_4]$，这与$w_1$和$w_2$的最小性矛盾。
:::

::: remark*
我们还可以证明$\cong$代表的序同构一旦存在就一定是唯一的，具体证明留给读者。
:::

## 自然数集的构造

接下来的两小节中，我们将从自然数开始，一路构造直到得到Dedekind实数。别的实数构造方式我们放到后面合适的地方再行讨论。

::: definition
若$\varnothing\in X$且$\forall u\in X(u\cup\{u\}\in X)$，则称$X$是一个归纳集。无穷公理说，存在一个归纳集。

所有归纳集的交是最小的归纳集，我们称之为（标准）自然数集，记作$\mathbb{N}$。其中的元素称为（标准）自然数。
:::

::: proof
我们要证明所有归纳集的交还是个归纳集，虽然这由定义是显然的。
:::

::: proposition [自然数集的性质]
我们列举如下几个显然的性质：

1. $\mathbb{N}$是传递集。换言之，$n\in\mathbb{N}\rightarrow n=\{m\in \mathbb{N}|m\in n\}$。

2. 每个$n\in N$是传递集。换言之，$m\in n\rightarrow m=\{k\in n|k\in m\}$。

3. 每个$n\in \mathbb{N}$都满足$n\not =\varnothing\rightarrow \exists m(n=m\cup\{m\})$。

4. 每个$n\in\mathbb{N}$对属于关系都成良序集。更一般的，$\mathbb{N}$对属于关系也成良序集。

:::

这些命题的证明都不难，技巧都是这样的：我们假定$X$是归纳集，然后证明满足某性质$\varphi$的全体$x\in X$组成的集合还是归纳集，这样就能推断$\mathbb{N}$里的元素都满足性质$\varphi$。具体细节留给读者自行验证。

这个自然数集又被称作自然数标准模型，但不幸的是我们有定理证明$\mathbb{N}$的理论是不可公理化的，换言之任何自然数理论都有非标准的模型。我们一般会默认自然数理论为以下的Peano算术(PA)，默认我们的模型是这个标准模型。

::: definition [PA]
$\mathcal{L}=\{0,S,+,\cdot\}$，其中$0$是常元，$S$是一元函数，$+$和$\cdot$是二元函数。所用的公理为

1. $\forall x(0\not =Sx)$

2. $\forall x\forall y(Sx=Sy\rightarrow x=y)$

3. $\forall x(x+0=x)$

4. $\forall x\forall y(x+Sy=S(x+y))$

5. $\forall x(x\cdot 0=0)$

6. $\forall x\forall y(x\cdot Sy=x\cdot y+x)$

7. $(Ind_\varphi)\forall y((\varphi(0,y)\wedge\forall x(\varphi(x,y)\rightarrow\varphi(Sx,y)))\rightarrow \forall x(\varphi(x,y)))$

其中$S$称作后继函数，$(Ind_\varphi)$称作对公式$\varphi$的归纳原理，它们也合称归纳原理模式，$y$是有限个参数的缩写。为了符合习惯，$+(x,y)$记为$x+y$，$\cdot(x,y)$记为$x\cdot y$。
:::

我们现在来把$\mathbb{N}$建设成PA的模型。为此，我们要指明$0$、后继函数、加法和乘法分别是什么。前两个其实已经写在归纳集的定义上了，关键是后面的函数如何定义且证明其存在。我们引入以下自然数上的归纳定理。

::: theorem
$\forall y((\varphi(\varnothing,y)\wedge\forall x(\varphi(x,y)\rightarrow\varphi(x\cup\{x\},y)))\rightarrow \forall x(\varphi(x,y)))$

其中$x$是自然数，$y$是有限个自然数参数，$\varphi$是集合上的一个公式。
:::

::: proof
只要注意到按定义$\{x\in\mathbb{N}|\varphi(x,y)\}$是一个归纳集，从而包含自然数集，而按定义它又必须是自然数的子集，从而必然恰好是自然数集。
:::

::: theorem [含参递归原理]
若有函数$a\in A^P$和$g\in A^{P\times A\times \mathbb{N}}$，则它们决定唯一的函数$f\in A^{P\times\mathbb{N}}$，满足

1. $\forall p\in P(f(p,\varnothing)=a(p))$

2. $\forall n\in\mathbb{N}\forall p\in P(f(p,n\cup\{n\})=g(p,f(p,n),n))$

:::

::: proof
我们先来证明$P=\{*\}$是个单点集的情况，此时函数$a$退化为一个点$a\in A$，函数$g$只需要后两个参数即可运作。

首先证明$f$的存在性。任取函数$t\in A^{m\cup\{m\}}$，其中$m\in\mathbb{N}$，若$t(\varnothing)=a$且$\forall k\in m(t(k\cup\{k\})=g(t(k),k))$，则称$t$是一个基于$a$和$g$的$m$近似。令$\mathscr{F}=\{t\in\wp (\mathbb{N}\times A)|t$是$m$近似$\}$，作$f=\cup\mathscr{F}$，我们证明这就是我们所要的那个$f$。

(i)$f$是函数：其实就是要证明$\mathscr{F}$是个相容函数族。假设$t,u\in\mathscr{F}$，进一步记$\mathrm{dom}(t)=n,\mathrm{dom}{u}=m$，再假定$n\leq m$，我们证明$\forall k\in n(t(k)=u(k))$。显然$t(0)=u(0)=a$，由归纳法，注意到$t(s)=u(s)\rightarrow t(s\cup\{s\})=g(t(s),s)=g(u(s),s)=u(s\cup\{s\})$即可。

(ii)$f\in A^\mathbb{N}$：只要证明$\forall n\in\mathbb{N}$存在$t\in\mathscr{F}$使得$\mathrm{dom}{t}=n$。反证，若有最小的$n$使得不存在，显然$n\not=\varnothing$，于是有$n=m\cup\{m\}$，用$m$存在的那个$u\in\mathscr{F},\mathrm{dom}{u}=m$不难得到一个$t$，这引发矛盾。

(iii)$f$满足题目要求：对(1)只要注意到$\forall t(t(\varnothing)=a)$，对(2)只要提取一个定义域为$n\cup\{n\}$的$t\in\mathscr{F}$即可。

接下来证明$f$的唯一性。这由函数相等的外延性很容易验证，细节交给读者。

现在，我们来证明一般情形。我们定义$G$是一个从$A^P\times \mathbb{N}$到$A^P$的函数，它把$(t,n)$映到一个$h$，使得$\forall p\in P(h(p)=g(p,t(p),n))$。这$h$显然唯一，故$G$确实函数。运用上面的结论，我们就有唯一一个$F$从$\mathbb{N}$到$A^P$，满足$F(0)=a\wedge F(n\cup\{n\}=G(F(n),n))$，最后只要令$f(p,n)=F(n)(p)$即可。
:::

::: remark*
我们用到的这个技巧叫做柯里化(Currying)。
:::

可能有的读者会心生疑惑：递归定义是我们司空见惯的定义方式，为何这里要花如此大量的篇幅来证明这个定义可行呢？事实上，这里就是PA向我们第一次展示出它弱小的地方：对于某些增长速度超级快的函数，PA是无法证明它们是全函数（即，在每个可能的地方都有定义）的！最著名的例子当属Goodstein Theorem(Kirby-Paris)，而稍冷的还有Strenthened Ramsey Theorem(Paris-Harrington)。它们的特点都是，用$\mathbb{N}$做的证明需要在$\mathrm{ZFC}$中运用超穷序数的理论，而PA对此则一无所知。

有了含参递归引理后，我们就可以根据以下递归定义来确信加法和乘法确实是$\mathbb{N}$上的两个函数。

::: definition [加与乘]
加法定义为满足以下条件的函数$+^\mathbb{N}:\mathbb{N}^{\mathbb{N}\times\mathbb{N}}$

1. $\forall n\in\mathbb{N}(+^\mathbb{N}(n,\varnothing)=n)$

2. $\forall m,n\in\mathbb{N}(+^\mathbb{N}(n,m\cup\{m\})=+^\mathbb{N}(n,m)\cup\{+^\mathbb{N}(n,m)\})$

乘法定义为满足以下条件的函数$\cdot^\mathbb{N}:\mathbb{N}^{\mathbb{N}\times\mathbb{N}}$

1. $\forall n\in\mathbb{N}(\cdot^\mathbb{N}(n,0)=0)$

2. $\forall m,n\in\mathbb{N}(\cdot^\mathbb{N}(n,m\cup \{m\})=+^\mathbb{N}(\cdot^\mathbb{N}(n,m),m))$

为了符合习惯，将$+^\mathbb{N}(n,m)$记作$n+^\mathbb{N} m$，将$\cdot^\mathbb{N}(n,m)$记作$n\cdot^\mathbb{N} m$。
:::

::: definition [自然数标准模型]
$(\mathbb{N},\varnothing,-\cup\{-\},+^\mathbb{N},\cdot^\mathbb{N})$是PA的一个模型。
:::

::: proof
验证几乎已经做完了。
:::

今后，在方便的时候，我们将地记$0^\mathbb{N}=\varnothing$，$1^\mathbb{N}=\{\varnothing\}$，$2^\mathbb{N}=\{\varnothing,\{\varnothing\}\}$，……。

::: proposition [自然数运算的性质]
1. 加法交换律：$m+^\mathbb{N}n=n+^\mathbb{N}m$

2. 加法结合律：$(m+^\mathbb{N}n)+^\mathbb{N}k=m+^\mathbb{N}(n+^\mathbb{N}k)$

3. 乘法交换律：$m\cdot^\mathbb{N}n=n\cdot^\mathbb{N}m$

4. 乘法结合律：$(m\cdot^\mathbb{N}n)\cdot^\mathbb{N}k=m\cdot^\mathbb{N}(n\cdot^\mathbb{N}k)$

5. 分配律：$m\cdot^\mathbb{N}(n+^\mathbb{N}k)=(m\cdot^\mathbb{N}n)+^\mathbb{N}(m\cdot^\mathbb{N}k)$

:::

这些性质小学生都知道，但是现在我们可以给它们以严格的证明。如果读者有兴趣自行验证，可以参考The Natural Number Game(By Kevin Buzzard and Mohammard Pedramfar)。这是一个交互式的在线游戏，旨在引导人们进入运用证明助手Lean进行数学证明的形式化验证的殿堂。

接下来，我们要进军整数和有理数了。我们会发现，它们不过是一些稍显复杂的商关系。

::: definition [整数]
整数集定义为$\mathbb{Z}=(\mathbb{N}\times\mathbb{N})/{\sim_{\mathbb{Z}}}$，其中$(a,b)\sim_\mathbb{Z}(c,d)\leftrightarrow (a+^\mathbb{N}d)=(b+^\mathbb{N}c)$。
:::

::: remark*
先验地看来，$(a,b)\sim_\mathbb{Z}(c,d)$就是$a-b=c-d$。
:::

::: theorem [整数的运算]
我们有三个函数$+^\mathbb{Z}$、$-^\mathbb{Z}$和$\cdot^\mathbb{Z}$，定义如下：

1. $[(a,b)]_{\sim_\mathbb{Z}}+^\mathbb{Z}[(c,d)]_{\sim_\mathbb{Z}}=[(a+^\mathbb{N}c,b+^\mathbb{N}d)]_{\sim_\mathbb{Z}}$

2. $[(a,b)]_{\sim_\mathbb{Z}}-^\mathbb{Z}[(c,d)]_{\sim_\mathbb{Z}}=[(a+^\mathbb{N}d,b+^\mathbb{N}c)]_{\sim_\mathbb{Z}}$

3. $[(a,b)]_{\sim_\mathbb{Z}}\cdot^\mathbb{Z}[(c,d)]_{\sim_\mathbb{Z}}=[((a\cdot^\mathbb{N}c)+^\mathbb{N}(b\cdot^\mathbb{N}d),(a\cdot^\mathbb{N}d)+^\mathbb{N}(b\cdot^\mathbb{N}c)]_{\sim_\mathbb{Z}}$

:::

::: theorem [自然数嵌入整数]
定义$i_{\mathbb{N}\hookrightarrow\mathbb{Z}}\in\mathbb{Z}^\mathbb{N},n\mapsto [(n,0^\mathbb{N})]_{\sim_\mathbb{Z}}$。这是个单射，且保持加法和乘法。
:::

因此，我们又可以记$0^\mathbb{Z}=i_{\mathbb{N}\hookrightarrow\mathbb{Z}}(0^\mathbb{N})$，$1^\mathbb{Z}=i_{\mathbb{N}\hookrightarrow\mathbb{Z}}(1^\mathbb{N})$，……。负整数是什么，以及为何整数就是正整数、零和负整数，请自行思考。

::: definition [有理数]
有理数集定义为$\mathbb{Q}=(\mathbb{Z}\times(\mathbb{Z}-\{0^\mathbb{Z}\}))/{\sim_{\mathbb{Q}}}$，其中$(a,b)\sim_{\mathbb{Q}}(c,d)\leftrightarrow a\cdot^\mathbb{Z}d=b\cdot^\mathbb{Z}c$
:::

::: remark*
先验地看来，$(a,b)\sim_{\mathbb{Q}}(c,d)$就是$a/b=c/d$。
:::

::: theorem [有理数的运算]
我们有四个函数$+^\mathbb{Q}$、$-^\mathbb{Q}$、$\cdot^\mathbb{Q}$和$/^\mathbb{Q}$，定义如下：

1. $[(a,b)]_{\sim_\mathbb{Q}}+^\mathbb{Q}[(c,d)]_{\sim_\mathbb{Q}}=[((a\cdot^\mathbb{Z}d)+^\mathbb{Z}(b\cdot^\mathbb{Z}c),b\cdot^\mathbb{Z}d)]_{\sim_\mathbb{Q}}$

2. $[(a,b)]_{\sim_\mathbb{Q}}-^\mathbb{Q}[(c,d)]_{\sim_\mathbb{Q}}=[((a\cdot^\mathbb{Z}d)-^\mathbb{Z}(b\cdot^\mathbb{Z}c),b\cdot^\mathbb{Z}d)]_{\sim_\mathbb{Q}}$

3. $[(a,b)]_{\sim_\mathbb{Q}}\cdot^\mathbb{Q}[(c,d)]_{\sim_\mathbb{Q}}=[(a\cdot^\mathbb{Z}c,b\cdot^\mathbb{Z}d)]_{\sim_\mathbb{Q}}$

4. $[(a,b)]_{\sim_\mathbb{Q}}/^\mathbb{Q}[(c,d)]_{\sim_\mathbb{Q}}=[(a\cdot^\mathbb{Z}d,b\cdot^\mathbb{Z}c)]_{\sim_\mathbb{Q}}$，这里$[(c,d)]_{\sim_\mathbb{Q}}\not=[(0^\mathbb{Z},1^\mathbb{Z})]_{\sim_\mathbb{Q}}$

:::

::: theorem [整数嵌进有理数]
定义$i_{\mathbb{Z}\hookrightarrow\mathbb{Q}}\in\mathbb{Q}^\mathbb{Z},n\mapsto [(n,1^\mathbb{Z})]_{\sim_\mathbb{Q}}$。这是个单射，且保持加法、减法和乘法。
:::

因此，我们又可以记$0^\mathbb{Q}=i_{\mathbb{Z}\hookrightarrow\mathbb{Q}}(0^\mathbb{Z})$，$1^\mathbb{Q}=i_{\mathbb{Z}\hookrightarrow\mathbb{Q}}(1^\mathbb{Z})$，……。分数是什么，以及为什么有理数就是分数，请自行思考。

对于$\mathbb{Z}$和$\mathbb{Q}$中的运算法则，仔细验证并无教益，我们歇息一下，来看看$\mathbb{Z}$和$\mathbb{Q}$怎么作为环和域的最简单的模型。

::: definition [群，交换群]
群的语言$\mathcal{L}_{Grp}=\{e,(-)^{-1},\cdot\}$，分别是常元、一元函数和二元函数，其公理集为

1. $x\cdot e=e\cdot x=x$

2. $x\cdot x^{-1}=x^{-1}\cdot x=e$

3. $(x\cdot y)\cdot z=x\cdot(y\cdot z)$

交换群只要再加上一句$x\cdot y=y\cdot x$。
:::

::: definition [环，交换环，域]
环的语言$\mathcal{L}_{Ring}=\{0,1,+,-,\cdot\}$，分别是常元、常元、二元函数、一元函数和二元函数，其公理集为

1. $0\not =1$

2. $x+0=0+x=x$

3. $x+(-x)=(-x)+x=0$

4. $(x+y)+z=x+(y+z)$

5. $x+y=y+x$

6. $x\cdot 1=1\cdot x=x$

7. $(x\cdot y)\cdot z=x\cdot(y\cdot z)$

8. $x\cdot(y+z)=(x\cdot y)+(x\cdot z)$

9. $(x+y)\cdot z=(x\cdot z)+(y\cdot z)$

交换环只要再加上一句$x\cdot y=y\cdot x$，域只要在交换环上加一句$x\not=0\rightarrow \exists! y(x\cdot y=y\cdot x=1)$。
:::

::: theorem [环和域的模型]
$\mathbb{Z}$是交换环的模型，$\mathbb{Q}$是域的模型。
:::

::: proof
对应的函数连名字都已经一模一样地起好了。
:::

域将是我们将来最常见到的数学对象，因为实数集也是个域，而且作为一个理论而言域已经得到了相当充分的发展和反思，我们有很多可以说的结果。

最后，我们来补充$\mathbb{N},\mathbb{Z},\mathbb{Q}$上的（典范）序结构。$\mathbb{Z},\mathbb{Q}$上面其实还有别的序，它们和p进数理论有关，我们这里不做涉及。

::: definition [序]
定义$\leq^\mathbb{N}$为$\forall n,m\in\mathbb{N}(n\leq^\mathbb{N} m\leftrightarrow n\subseteq m)$

定义$\leq^\mathbb{Z}$为$\forall a,b\in\mathbb{Z}(a\leq^\mathbb{Z} b\leftrightarrow b-a\in\mathrm{ran}i_{\mathbb{N}\hookrightarrow\mathbb{Z}})$

定义$\leq^\mathbb{Q}$为$\forall a,b\in\mathbb{Q}(a\leq^\mathbb{Q} b\leftrightarrow b-a\geq^\mathbb{Q} 0^\mathbb{Q})$，而$[(a,b)]_{\sim_\mathbb{Q}}\geq^\mathbb{Q} 0^\mathbb{Q}\leftrightarrow 0^\mathbb{Z}\leq^\mathbb{Z}a\cdot^\mathbb{Z} b$。
:::

序与群、序与域均可形成理论。

::: definition [有序交换群，有序域]
有序交换群（OAG aka. Ordered Abelian Group）的语言是$\mathcal{L}_{OAG}=\{0,-,+,\leq\}$分别是常元，一元函数，二元函数和二元谓词，其公理集则为

1. $x+0=0+x=x$

2. $x+(-x)=(-x)+x=0$

3. $x+y=y+x$

4. $(x+y)+z=x+(y+z)$

5. $x\leq x$

6. $x\leq y\rightarrow y\leq x\rightarrow x=y$

7. $x\leq y\rightarrow y\leq z\rightarrow x\leq z$

8. $x\leq y\vee y\leq x$

9. $x\leq y\rightarrow x+z<y+z$

有序环的语言$\mathcal{L}_{OR}=\{0,1,+,-,\cdot,\leq\}$在环的语言里加了一个二元关系，有序域是用有序环的语言，在域的公理集之外另加公理：

1. $x\leq x$

2. $x\leq y\rightarrow y\leq x\rightarrow x=y$

3. $x\leq y\rightarrow y\leq z\rightarrow x\leq z$

4. $x\leq y\vee y\leq x$

5. $x\leq y\rightarrow x+z<y+z$

6. $x\leq y\rightarrow 0\leq z\rightarrow x\cdot z\leq y\cdot z$

:::

::: theorem
$\mathbb{Z}$忘掉乘法看加法，是OAG的模型，$\mathbb{Q}$是有序域的模型。
:::

这些定义的有效性，以及它们确实满足我们已经习惯的那些性质等等的证明都没有教益，读者有兴趣可以自行验证。以后我们不会刻意指出某个加法/减法/乘法/序是哪个集合里的，因为我们相信读者有能力自行判断。

## 实数集的构造

现在，我们正式由Dedekind的著名构造法来构造实数集。

::: definition [Dedekind实数]
我们称$A\subseteq \mathbb{Q}$是一个(Dedekind)实数（Dedekind分割），若

1. $A\not=\varnothing$且$A\not=\mathbb{Q}$

2. $\forall p,q\in\mathbb{Q}(q<p\rightarrow p\in A\rightarrow q\in A)$，又称向下封闭。

3. $\forall p\in A\exists q\in A(p<q)$又称向上无极大。

所有实数构成的集合称为实数集，记为$\mathbb{R}\subseteq\wp \mathbb{Q}$。实数将默认用x,y,z等字母表示。

此外，我们还可以定义两个符号重载：$-\infty=\varnothing$，$+\infty=\mathbb{Q}$。我们称$\mathbb{\bar{R}}=\mathbb{R}\cup\{-\infty,+\infty\}$为扩展实数集。
:::

这定义方式给我们带来的最大好处是，大小关系与上界性质变得非常易于描述。

::: definition [序关系]
我们在扩展实数集上定义显然的偏序关系$x\leq y\leftrightarrow x\subseteq y$。
:::

::: theorem
扩展实数集的这个偏序是全序。
:::

::: proof
也就是要证明$x\leq y\vee y\leq x$。反证，若由两个实数使得$x\not\subseteq y\wedge y\not\subseteq x$，假定有两个有理数$p\in x\wedge q\in y$，同时$p\not\in y\wedge q\not\in x$。由于有理数上的序是全序，又显见$p\not=q$，不妨设$p<q$，则$q\in y\rightarrow p\in y$，与假定矛盾。
:::

::: definition [上界与上确界]
定义一个扩展实数集的子集$S$的上确界为$\sup S=\cup S$。

如果扩展实数$r$满足$\forall s\in S(s\leq r)$，则称$r$是$S$的上界。
:::

::: theorem [确界存在定理的实现]
上确界小于等于任何上界。由此推论，有实数上界则必有实数上确界。
:::

::: proof
注意非空的扩展实数集的子集的上确界要不然是实数要不然是$+\infty$，接下来完全是显然的。
:::

今后我们将会知道，这个定理是著名的实数完备性的表达方式之一。接下来我们来看实数上的域结构。

::: definition [实数运算]
首先我们有有理数到实数的嵌入$i_{\mathbb{Q}\hookrightarrow\mathbb{R}}\in\mathbb{R}^\mathbb{Q},p\mapsto \{q\in\mathbb{Q}|q<p\}$，因此可以不区分有理数$p$与它对应的实数$i_{\mathbb{Q}\hookrightarrow\mathbb{R}}(p)$。记$\mathrm{ran}i_{\mathbb{Q}\hookrightarrow\mathbb{R}}=\mathbf{Q}$，$\mathbb{R}-\mathbf{Q}=\mathbf{Irr}$。

实数加法可以直接定义为$x+y=\{p+q|p\in x\wedge q\in y\}$。

实数的相反数分开定义：$x\in\mathbf{Q}$时$-x$定义为对应有理数的相反有理数的嵌入，$x\in\mathbf{Irr}$时$-x=\{p\in\mathbb{Q}|\forall q\in x(p<-q)\}$。

实数的乘法相对麻烦。我们先定义正实数的乘法为$x\cdot y=\{p\cdot q|p\in x\cap \mathbb{Q}^+\wedge q\in y\cap\mathbb{Q}^+\}\cup\{p\in\mathbb{Q}|p\leq 0\}$，其中$\mathbb{Q}^+=\{p\in\mathbb{Q}|p>0\}$。然后再令$(-x)\cdot y=x\cdot (-y)=-(x \cdot y)$，$(-x)\cdot(-y)=x\cdot y$。
:::

我们先引入实数的一个重要特征。

::: theorem [Archimedes性]
对任何实数$x$和任何正有理数$p$而言，存在自然数$n$使得$\forall q\in x(q<n\cdot p)$。
:::

::: proof
反证。若$\forall n\in\mathbb{N}\exists q_n\in x(q_n\geq n\cdot p)$，注意$m,n\in\mathbb{N}-\{0\}\rightarrow m/n\geq 1/n$指出$\forall r\in\mathbb{Q}^+\exists r_n\in\mathbb{N}(p/r\geq 1/r_n)$，换言之$r\leq r_n\cdot p\leq q_{r_n}\in x$，由实数定义即得$r\in x$，但$r$是任取的，故$\mathbb{Q}\subseteq x\subseteq\mathbb{Q}$，即$x=\mathbb{Q}$，与$x$是实数矛盾。
:::

::: theorem [实数是域]
上面定义的这些运算让实数成为一个域。
:::

::: proof
(i)首先，我们证明这些对实数作为集合进行操作得出的东西仍然是个实数。

1. 加法：显然非空，Archimedes性指出非$\mathbb{Q}$，有理数有序域给出向下封闭和向上无极大。

2. 相反数：有理数自不必说，无理数非空变非$\mathbb{Q}$，Archimedes性指出非空，向下封闭显然，向上无极大利用反证法。若$-x$有最大元素$p\in\mathbb{Q}$，则$x=-p\in\mathbf{Q}$，与无理矛盾。

3. 正数乘法：显然非空，Archimedes性指出非$\mathbb{Q}$，向下封闭非正数显然正数算一算，向上无极大来源于原来的向上无极大。

4. 一般乘法：略。

(ii)接下来我们验证加法和取相反数确实形成交换群。

1. 交换性和结合性由定义和有理数加法交换且结合是显然的。

2. $x+0=0+x=\{p+q|p\in x\wedge q<0\}=\bigcup_{p\in x}\{q\in\mathbb{Q}|q<p\}$，向下封闭使它包含于$x$，向上无极大使$x$包含于它，故这就是$x$。

3. $x+(-x)=(-x)+x=0$对有理数显然；对无理数，显然$x+(-x)=(-x)+x$；如果它严格大于$0$，那么一定包含有有理数$0$，于是有$p\in x$使得$-p\in (-x)$，换言之$\forall q\in x(p>q)$，这与向上无极大矛盾。如果它严格小，那么一定有负有理数$t\in\mathbb{Q}$不在其中，即$\forall p\in x\forall q\in\mathbb{Q}(\forall r\in x(r+q<0))\rightarrow (p+q<t)$，即$\forall q\in\mathbb{Q}((\exists p\in x(p\geq t-q)))\rightarrow(\exists r\in x(r\geq -q))$，换言之$\forall q\in\mathbb{Q}(t-q\in x\rightarrow -q\in x)$，即$\forall q\in\mathbb{Q}(q+t\in x\rightarrow q\in x)$，又注意向下封闭，我们有$\forall q\in\mathbb{Q}(q+t\in x\leftrightarrow q\in x)$，当然这也就是$\forall q\in\mathbb{Q}(q\in x\leftrightarrow q+(-t)\in x)$，然而由有理数Archimedes性知道这说明$x=\mathbb{Q}$，矛盾。于是全序三岐指出$x+(-x)=(-x)+x=0$。

这些论证同时还指出了负实数的相反数是正实数，正实数的相反数是负实数。群的性质告诉我们相反数的相反数就是自己。

(iii)验证乘法交换且结合：先证明正实数，然后推广到一般实数。细节从略。

(iv)$1\not=0$显然。验证乘法以$1\in\mathbf{Q}$为幺元：

1. 对$x>0$，这时$x\cdot 1=1\cdot x=\{p\cdot q|p\in x\wedge 0<p\wedge 0<q<1\}\cup(\mathbb{Q}-\mathbb{Q}^+)$。由前面$p\cdot q<p$显见$x\cdot 1\leq x$。反证，如果严格小，则$\exists t\in x\forall p\in x\forall 0<q<1(t>0\wedge p>0\rightarrow p\cdot q<t)$，但由向上无极大我们一定有$\exists s\in x(s>t)$，这表明$0<t/s<1$而$s\cdot (t/s)=t\geq t$，立即矛盾。

2. 对$x=0$，显然。

3. 对$x<0$，$-x>0$，于是$x\cdot 1=1\cdot x=-(1\cdot (-x))=-(-x)=x$。

(v)乘法对加法的分配律：由交换性只需要证明左分配，不妨只证明正实数分配别人的情形，于是由有理数的分配律显然。

(vi)域的特殊公理，即非零实数存在乘法逆：我们通过以下构造来定义正实数的乘法逆，负实数还是老方法取一下相反数。

对$x>0$，令$x^{-1}=\{p\in\mathbb{Q}|\forall q\in x(q>0\rightarrow p\cdot q<1)\}$。

只要验证$x\cdot x^{-1}=1$。小于等于还是显然的，还是反证，严格小于和$x>0$给出一个正有理数$0<t<1$不在$x\cdot x^{-1}$里面，即$\forall 0<p\in x\forall 0<q\in\mathbb{Q}(\forall r\in x(q\cdot r<1))\rightarrow p\cdot q<t$，然后故技重施地变成逆否命题$\forall 0<q\in\mathbb{Q}(\exists p\in x(p\geq t/q))\rightarrow (\exists r\in x(r\geq 1/q))$，也就是$\forall 0<q\in\mathbb{Q}(t\cdot q\in x\rightarrow q\in x)$，最后得到$q\in x\rightarrow \forall n\in\mathbb{N} (q\cdot(1/t)^n\in x)$，于是向下封闭性立即指出$x=\mathbb{Q}$产生矛盾。
:::

注意，我们还可以把加法和相反数的定义推到$\mathbb{\bar{R}}$上面，得到$(+\infty)+(-\infty)=-\infty$，$(+\infty)+x=+\infty$，$(-\infty)+x=-\infty$，$-(+\infty)=-\infty$，$-(-\infty)=+\infty$等等等式。为了符合直觉，一般我们会重新规定$(+\infty)+(-\infty)=0$。这时$\mathbb{\bar{R}}$已经不是一个群了。同理，也可以对它们做乘法，但如果照搬定义我们会得到$(+\infty)^{-1}=-\infty$，所有一般我们会重新规定这玩意儿是$0$，以符合我们对这个运算的直觉。这样做也不会得到一个域。

最后，实数按我们定义的这些运算和关系是个有序域。

::: theorem [实数定理]
Dedekind实数是有最小上界性的有序域。
:::

::: proof
我们几乎证明完了，有序域的证明的部分散落在域的部分的证明中，读者有兴趣可以自行补全。
:::

## 实数公理

本节利用实数公理给出实数集的刻画，以弥补实数构造法不够直观的缺憾。

::: theorem [实数公理]
满足最小上界性的有序域彼此同构。
:::

::: proof
我们称这个域为$R$。显然特征$p\geq 2$的域是不可能有序结构的，所以这个域一定特征$0$，从而有自$\mathbb{Q}$典范嵌入，不妨设$\mathbb{Q}\subseteq R$。

注意到最小上界性，我们的Dedekind实数$\mathbb{R}$同样可以嵌入到$R$中，因此不妨进一步设$\mathbb{R}\subseteq R$，我们只要证明$R\backslash\mathbb{R}=\varnothing$即可。

反证，若有$r\in R\backslash\mathbb{R}$，显然$r\not\in\mathbb{Q}$，从而$\{p\in\mathbb{Q}|p<r\}$是一个Dedekind分割。注意我们选择的典范嵌入是$x\in\mathbb{R}\mapsto \mathrm{sup}x$，这指出$r\in\mathbb{R}$，矛盾。
:::

因此，在同构意义下，我们不妨把实数集就当成是满足最小上界性的有序域。

最小上界性又被称作完备公理，而实数公理中这一条完备公理有许多可选的等价形式，它们各自体现了$\mathbb{R}$的某些性质。

::: theorem [完备公理]
对有序域$R$而言，以下这些命题（组）彼此等价：

1. Archimedes性$+$扩张完备性：$\forall \bar{R}\supseteq R$，若$\bar{R}$仍然是Archimedes有序域，且其结构限制在$R$上就是$R$原有的结构，则$\bar{R}=R$。

2. Archimedes性$+$闭区间套定理：给定一列$R$上的闭区间套$\{[a_i,b_i]|i\in\mathbb{N},a_i\leq a_{i+1}\leq b_{i+1}\leq b_i\}$，若$\lim_{i\to\infty}(b_i-a_i)=0$，则$\exists!x\in R(\{x\}=\bigcap_{i\in\mathbb{N}}[a_i,b_i])$。

3. Archimedes性$+$完备性，Cauchy收敛准则：Cauchy列必收敛。

4. 单调有界收敛定理：单增有界列必收敛。

5. 最小上界性，Dedekind：有上界的集必有最小上界。

6. 局部紧致性，Heine-Borel：闭区间的开覆盖存在有限子覆盖。

7. 局部列紧性，Bolzano-Weierstrass：有界列必有收敛子列。

8. 局部极限点紧致性：有界无穷集必有聚点。

:::

::: proof
$1\to2$：我们证明逆否，即若Archimedes有序域$R$有一列闭区间套$\{[a_i,b_i]|i\in\mathbb{N},a_i\leq a_{i+1}\leq b_{i+1}\leq b_i\}$满足$\lim_{i\to\infty}(b_i-a_i)=0$且$\bigcap_{i\in\mathbb{N}}[a_i,b_i])=\varnothing$，则可以做它的Archimedes真扩域。

做法很简单：我们考虑给分式域$R(x)$搞一个序结构，使得它成为Archimedes有序域，且是$R$的扩域。我们定义$x>r\leftrightarrow\exists i(a_{i}\geq r)$和$x<r\leftrightarrow\exists i(b_{i}\leq r)$，然后对次数归纳地定义非零次多项式与零次多项式之间的比较，非零多项式之间的比较则通过减法变为与零次多项式$0$的比较。

显然这个分式域现在是一个$R$的扩域，我们只要对次数归纳地验证它是有序域，然后再同样地验证它的Archimedes性即可。不难意识到，其实我们就是将原本应当出现在闭区间套中的那个点又加回来了而已。注意这时$x$显然是超越元，这也确实是真扩域。

$2\to 3$：我们用Cauchy列给出一个闭区间套，并以此证明收敛。事实上，只要依次取$x_{n_k}$使得其后所有项距离它的距离都不超过$\frac{1}{2^{k+1}}$，即可取出长度趋于零的闭区间套列$[x_{n_k}-\frac{1}{2^k},x_{n_k}+\frac{1}{2^k}]$。假设它们交于点$x$，不难证明这个Cauchy列恰好也收敛到$x$。

$3\to 4$：只需证明单增有界列必为Cauchy列，否则显然会与Archimedes性相冲突。

$4\to 5$：否则，我们可以取出单调递减不收敛的上界列，立即矛盾。

$5\to 1$：先证明Archimedes性。反证，我们将推知$\mathbb{N}$有上界，我们假定其最小上界为$w$，则$w-\frac12$不是$\mathbb{N}$的上界，于是存在$n>w-\frac12$，进而$n+1>w+\frac12>w$，矛盾。

再证明扩张完备性。反证，如果我们有一个真扩域$\bar{R}$，则存在$x\in\bar{R}\backslash R$，不妨设$x>0$。现在考虑$\{r\in R|r<x\}$，Archimedes性给出它的一个上界，因此它在$R$中也必须有一个最小上界$\bar{x}\in R$，而又是Archimedes性保证了$x-\bar{x}=0$，否则一定存在$n$使得$-\frac1n>x-\bar{x}$或$x-\bar{x}>\frac1n$，例如后者将给出$\bar{x}<\bar{x}+\frac1n<x$，这说明$\bar{x}$不是最小上界，矛盾；因此$x\in R$，这还是引起矛盾。

接下来的三个紧致性在度量空间中都是等价的，$[a,b]\subseteq\mathbb{R}$自己当然也是度量空间，所以当然这三个也可以互推。

$4\to 7$：一个数列若无常数列则必有单增子列或单减子列，因此有界列必有常数子列或单增有界子列或单减有界子列。

$7\to 4$：单增有界列显然是有界列，其收敛子列收敛到的数显然也被原有的单增有界列收敛到。
:::

::: remark*
$4\to 7$的论证中用到的定性断言还可以以定量的方式实现：长$mn+1$的列或有长$m+1$的单增子列，或有长$n+1$的单减子列。这其实是Dilworth定理的一个推论。
:::

::: remark*
闭集套等价于可数紧致性，应当像678一样无需Archimedes性也可以参与等价，但是可能是闭区间套要求闭区间而非任意闭集，这个性质被削弱了？
:::
