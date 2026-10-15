---
title: 度量空间
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
首先，我们回顾一下度量拓扑的定义。

::: definition [度量拓扑]
集合$X$上，满足如下要求的函数$d:X\times X\rightarrow \mathbb{R}^+$称为度量：

1. $\forall x,y\in X(d(x,y)=0\leftrightarrow x=y)$

2. $\forall x,y\in X(d(x,y)=d(y,x))$

3. $\forall x,y,z\in X(d(x,y)+d(y,z)\geq d(x,z))$

此度量将在$X$上以全体$B_r(x)=\{y\in X|d(x,y)<r\}$为基生成一个拓扑，称为$(X,d)$的度量拓扑。
:::

度量空间是抽象出一般拓扑空间之前人们对于空间的直观。它的各种性质都相对良好。按照数学分析中常见的方式，我们叙述以下显而易见的命题。

::: theorem
若有度量空间之间的函数$f:X\rightarrow Y$，则$f$在点$x_0\in X$处连续当且仅当$\forall\epsilon>0\exists\delta>0\forall x\in X(d(x,x_0)<\delta\rightarrow d(f(x),f(x_0))<\epsilon)$
:::

::: remark*
这是度量空间中连续函数一开始为人所知时的定义。
:::

度量空间之间的连续映射并不能保持度量，我们可以定义更强的映射要求。

::: definition [等距嵌入]
若度量函数之间的连续函数$f:X\rightarrow Y$满足$\forall x,y\in X(d_{X}(x,y)=d_{Y}(f(x),f(y)))$，则称$f$是一个等距嵌入。
:::

在度量空间中，我们有完备性的概念可以讨论。

::: definition [Cauchy列与完备性]
度量空间$X$上的一个点列$x_n$称作Cauchy列，若$\forall\epsilon>0\exists N\forall n,m>N(d(x_m,x_n)<\epsilon)$。

如果$X$上的每个Cauchy列都收敛到某个点，则称这空间是完备的。

更一般的，若拓扑空间$X$上存在完备的度量化，则称$X$拓扑完备。
:::

我们可以像讨论域的代数闭包一样，讨论度量空间的完备化。

::: definition [完备化]
如果度量空间$X$有一个到完备度量空间$Y$的等距嵌入$f$，则称像空间$f(X)$的闭包$\mathrm{Cl}_Y(f(X))$装备$Y$的子空间拓扑形成的完备度量空间为$X$的一个完备化。
:::

::: theorem [完备化的存在唯一性]
任给度量空间$X$，均存在其完备化。同时，若给定两个均给出完备化的等距嵌入$h_1:X\rightarrow Y_1$和$h_2:X\rightarrow Y_2$，则必存在完备化之间的等距同构$h:\mathrm{Cl}_{Y_1}(h_1(X))\rightarrow \mathrm{Cl}_{Y_2}(h_2(X))$，它限制在$h_1(X)$上恰好是$h_2\circ h_1^{-1}$。
:::

::: proof
首先，我们用Cauchy列来造一个$X$的完备化。记全体Cauchy列构成的集合为$\tilde{X}$，我们考虑其上的等价关系$x\sim y\leftrightarrow\lim_{n\to+\infty}d(x_n,y_n)=0$给出的商集$Y=\tilde{X}/\sim$，我们定义其上的度量$D([x],[y])=\lim_{n\to+\infty}d(x_n,y_n)$。

我们有显然的等距嵌入$f:x\mapsto [x,x,x,\dots]$，且像集$h(X)$由$\lim_{n\to+\infty}\\h(x_n)=[x_n]$显然稠密，我们只需证明$Y$是完备度量空间即可。

最后，完备化的等价性可以通过对任意完备化$\mathrm{Cl}_{Z}g(X)$在$Z$中作同上的构造，不难得知这个$Z$里的完备化必然和上面构造的完备化等距同构。
:::

::: remark*
值得注意的是，度量空间与可度量化的拓扑空间有区别，完备性是度量的性质，却不是拓扑空间的性质。
:::

接下来，我们关心紧致性在度量空间中的等价表述。

::: theorem
度量空间紧致当且仅当完备且完全有界。
:::

::: proof
紧致则完全有界是显然的，注意度量空间紧致则列紧，进而Cauchy列必有收敛子列，进而Cauchy列必收敛，因此紧致也推出完备。

反过来，我们也来证明完备与完全有界推出列紧。考虑一个任意的点列$x_n$，我们来选取它的一个Cauchy子列。

在第$n$步，我们用有限个半径$\frac{1}{n}$的开球覆盖整个$X$，然后设$B_n$是其中一个包含了无穷多个$x_n$的开球，我们把全体$x_k\in B_n$的下标$k$收集起来得到集合$K_n\subseteq \mathbb{N}$。

现在，由于每个$K_n$都是无穷集，我们任取$n_1\in K_1$，然后依次取$n_{k+1}\in K_k$使得$n_{k+1}>n_k$。这样，$x_{n_k}$就是一个Cauchy列，从而必须收敛。
:::

对于普通的连续函数，我们有更强的一致连续性的要求。

::: definition [一致连续]
称度量空间之间的连续函数$f:X\to Y$一致连续，若$\forall\epsilon\exists\delta\forall x,y\in X(d_X(x,y)<\delta\to d_Y(f(x),f(y))<\epsilon)$。
:::

紧致度量空间中，一致连续性自动成立。

::: theorem
若$X$是紧致度量空间，则一切从$X$出发到度量空间$Y$的连续函数$f$都是一致连续的。
:::

::: proof
这是完全有界性的显然推论。
:::

接下来我们将要关心的是度量空间做成的积空间，以及更特殊的映到度量空间的各种函数构成的空间。

::: definition [连续函数空间与有界函数空间]
给定拓扑空间$X$与度量空间$Y$，全体连续函数构成的集合记为连续函数空间$\mathcal{C}(X,Y)$，全体有界函数（像集被一个开球覆盖住的函数）构成的集合记为有界函数空间$\mathcal{B}(X,Y)$。
:::

::: definition [一致拓扑]
给定度量空间$X$与一个指标集$J$，在$X^J$上由一致度量$\rho(x,y)=\mathrm{sup}_{j\in J}\{\frac{d(x(j),y(j))}{1+d(x(j),y(j))}\}$给出的拓扑称为一致拓扑。
:::

::: theorem
如果$X$对于$d$完备，则$X^J$对于$\rho$完备。
:::

::: proof
显然，若$X$对于$d$完备，则$X$对于$\frac{d}{1+d}$也是完备的。我们假定有$X^J$中的一个Cauchy列$f_n$，则$\forall j\in J\forall m,n(\frac{d_j}{1+d_j}(f_n(j),f_m(j))\leq\rho(f_n,f_m))$，这指出$f_n(j)$一定是$X$中的Cauchy列，不妨设它收敛于$x_j$。我们断言$f_n$收敛于$f:j\mapsto x_j$。

任给$\epsilon>0$，根据Cauchy列的定义存在$N$使得$\forall n,m>N(\rho(f_n,f_m)<\frac12\epsilon)$，自然继续有$\forall j\in J(\frac{d_j}{1+d_j}(f_n(j),f_m(j))<\frac12\epsilon)$。令$m\to+\infty$，这指出$\forall n>N\forall j\in J(\frac{d_j}{1+d_j}(f_n(j),x_j)\leq\frac12\epsilon)$，于是$n>N$时$\rho(f_n,f)\leq\frac12\epsilon<\epsilon$。
:::

::: theorem [函数空间的一致拓扑]
$\mathcal{C}(X,Y)$与$\mathcal{B}(X,Y)$是$Y^X$在一致拓扑下的闭子空间。
:::

::: proof
连续函数空间的这个断言通常又称为一致极限定理。

**引理（一致极限定理）。** 一列一致收敛的连续函数收敛到一个连续函数。注意，不难验证通常定义的一致收敛恰好就是一致度量下的收敛。

**证明。** 假定$f_n\to f:X\to Y$一致地收敛，任给$Y$中开集$V$与$X$中点$x_0\in f^{-1}(V)$，我们来找一个$x_0$的邻域$U$使得$f(U)\subseteq V$。

记$y_0=f(x_0)$，然后取一个开球$B_\epsilon(y_0)\subseteq V$。由一致收敛性，存在$N$使得$\forall n\geq N\forall x\in X(d(f_n(x),f(x))<\frac13\epsilon)$；由$f_N$的连续性，存在$x_0$的邻域$U$使得$f_N(U)\subseteq B_{\frac13}(f_N(x_0))$。

现在，任给$x\in U$，总有$d(f(x),y_0)\leq d(f(x),f_N(x))+d(f_N(x),f_N(x_0))+d(f_N(x_0),y_0)<\frac13\epsilon+\frac13\epsilon+\frac13\epsilon=\epsilon$，证毕。

有界函数空间的这个断言则更简单，只要选一个离$f$距离不超过$\frac12$的$f_N$即可保证$f$像集的直径不超过$f_N$像集的直径加一。
:::

::: corollary
若$Y$完备，$\mathcal{C}(X,Y)$与$\mathcal{B}(X,Y)$在一致度量下也一样完备。
:::

::: proof
闭包就是原集并上导集，因此闭子空间保持继承的度量的完备性。
:::

::: remark*
在有界函数空间上定义$sup(f,g)=\mathrm{sup}_{x\in X}\{d(f(x),g(x))\}$为上确界度量，它恰好和一致度量生成同一个拓扑。
:::

除了一致度量拓扑之外，也有别的拓扑结构，正如除了函数列除了一致收敛之外，也有别的收敛方式。

::: definition [点开拓扑]
给定$j\in J$与开集$U\subseteq X$，定义全体$S(j,U)=\{f\in X^J|f(j)\in U\}$构成的子基生成的$X^J$上的拓扑称作点开拓扑，又称点态收敛拓扑。
:::

::: theorem
一列函数$\{f_n\in X^J|n\in\omega\}$在点开拓扑下收敛到$f\in X^J$，当且仅当$\forall j\in J(\mathrm{lim}_{n\to+\infty}f_n(j)=f(j))$。
:::

::: proof
这太显然啦，因为我们有以下洞察。
:::

::: theorem
点开拓扑就是积拓扑。
:::

::: proof
查验一下子基之间的包含关系。
:::

点态收敛不保证连续函数，因此这时$\mathcal{C}(X,Y)$并不是$Y^X$的闭子集；积拓扑不一定可度量化，所以点开拓扑也没啥好性质。我们另外找一个比它好点的拓扑吧。

::: definition [紧收敛拓扑]
给定拓扑空间$X$与度量空间$Y$，我们对每个$f\in Y^X$、正实数$\epsilon>0$与$X$的紧致子空间$C$定义$B_C(f,\epsilon)=\{g\in Y^X|\mathrm{sup}_{x\in C}d(f(x),g(x))<\epsilon\}$。全体这些集为基给出的$Y^X$上的拓扑称作紧收敛拓扑。
:::

::: theorem
一列函数$\{f_n\in Y^X|n\in\omega\}$在紧收敛拓扑下收敛到$f\in Y^X$，当且仅当对每个$X$的紧空间$C$，这列函数在$C$上一致收敛于$f$。
:::

::: proof
查一下定义。
:::

这个拓扑的名字来自于这个定理。有时，它也被叫做紧集上的一致收敛拓扑；在数学分析考虑$\mathbb{R}^\mathbb{R}$时，这个紧致收敛又被称作内闭一致收敛。

如果想要$\mathcal{C}(X,Y)$在紧收敛拓扑下是闭集，我们需要一点点额外条件。

::: definition [紧致生成空间]
称空间$X$是紧致生成空间，如果其中的任何集$A$是开集当且仅当对每个紧集$C\subseteq X$都有$A\cap C$是$C$中的开集。
:::

这是个很弱的条件。

::: theorem
局部紧致空间和第一可数空间均为紧致生成空间。
:::

::: proof
局部紧致可以给每个$x\in A$取紧致邻域，第一可数则证明取补后闭集对应的命题，即$B=X\backslash A$满足$B=\mathrm{Cl}(B)$，因为第一可数指出$x\in\mathrm{Cl}(B)\rightarrow\exists \{x_n\}\subseteq B(x_n\to x)$，而$\{x\}\cup\{x_n\}$显然是个紧集。
:::

现在来看结论。

::: theorem
若$X$紧生成，则$\mathcal{C}(X,Y)$在紧收敛拓扑下是$Y^X$的闭集。
:::

::: proof
事实上只需证明：一个紧生成空间$X$出发的函数$f$连续，当且仅当它在每个紧集$C\subseteq X$上的限制连续。
:::

紧收敛拓扑有一个不依托$Y$上度量的等价物，虽然只在一部分比较重要的对象上等价。

::: definition [紧开拓扑]
给定拓扑空间$X$与$Y$，对每个$X$的紧致子空间$C$和$Y$的开集$U$定义$S(C,U)=\{f\in \mathcal{C}(X,Y)|f(C)\subseteq U\}$，它们作为子基在$\mathcal{C}(X,Y)$上生成的拓扑称作紧开拓扑。
:::

::: remark*
回去再看看点开拓扑的定义。
:::

::: theorem
若$Y$是度量空间，则$\mathcal{C}(X,Y)$上的紧收敛拓扑与紧开拓扑一致。
:::

::: proof
我们证明它们相互更细，从而一致。

首先引入一个记号。设$Y$有子集$A$，我们令$U(A,\epsilon)=\bigcup_{x\in A}B_\epsilon(x)$为$A$的$\epsilon$邻域。显然，若$A\subseteq B$，$A$紧致而$B$开，则存在$\epsilon$使得$U(A,\epsilon)\subseteq B$，因为我们可以任取全体半径$\delta_i$的开球构成的覆盖与$B$交出的子覆盖，然后取其有限子覆盖后取得最小半径$\delta_{i+1}$，这样得到的递降正数列不能收敛到$0$。

一方面，来证紧收敛比紧开细。设有紧开拓扑的子基$S(C,U)$，我们来找一个紧收敛拓扑的子基$B_C(f,\epsilon)$使得$B_C(f,\epsilon)\subseteq S(C,U)$。事实上，任取$f\in S(C,U)$，它的连续性与$C$的紧致性指出$f(C)$的紧致性，进而$f(C)\subseteq U$给出一个$\epsilon$使得$B_C(f,\epsilon)\subseteq S(C,U)$。

另一方面，来证紧开比紧收敛细。设有紧收敛拓扑的子集$B_C(f,\epsilon)$，我们来找一个紧开拓扑的基包含于其中。显然，$X$的每个点$x$处均有一个邻域$V_x$，满足$f(\mathrm{Cl}(V_x))$包含在$Y$的一个直径小于$\epsilon$的开集$U_x$之中。我们取$C$在这个覆盖下的有限子覆盖$V_{x_k}$，则令$C_{x_k}=\mathrm{Cl}(V_{x_k})\cap C$，我们有$\bigcap_{k}S(C_{x_k},U_{x_k})\subseteq B_C(f,\epsilon)$。
:::

关于紧收敛拓扑有一个非常重要的定理。我们首先介绍一种一致连续性与一致收敛性结合出的新概念。

::: definition [等度连续]
考虑一族拓扑空间$X$到度量空间$Y$的一族连续函数$\mathcal{F}$。如果$\forall\epsilon>0\exists U\ni x_0\forall x\in U\forall f\in\mathcal{F}(d(f(x),f(x_0))<\epsilon)$成立，我们就称$\mathcal{F}$在点$x_0\in X$处等度连续。
:::

::: theorem [Arzela-Ascoli]
考虑$\mathcal{C}(X,Y)$上的紧收敛拓扑。并设有一个子集$\mathcal{F}\subseteq\mathcal{C}(X,Y)$。

若$\mathcal{F}$是等度连续的，且每个$a\in X$都有$\mathcal{F}_a=\{f(a)|f\in\mathcal{F}\}$都有紧致闭包，则$\mathcal{F}$包含在一个$\mathcal{C}(X,Y)$的紧致子空间中。

若$X$是局部紧致$T_2$空间(LCH,LocallyCompactHausdorff)，则上面的逆命题也成立。
:::

在数学分析中，它长成一个和善的形式。

::: theorem [Arzela-Ascoli，基础情况]
闭区间上的一族连续实函数，每个序列都有一致收敛的子列当且仅当等度连续且一致有界。
:::

现在我们来看一般情况下的定理证明，而这个基础情况仿此亦不困难。

::: proof
我们先证明前面的命题。这要分四步进行。我们预先赋$Y^X$以积拓扑，则它显然是$T_2$的；默认赋$\mathcal{C}(X,Y)$以紧收敛拓扑。我们来考察$\mathcal{F}$在$Y^X$中的闭包$\mathcal{G}$。

Step 1：我们证明$\mathcal{G}$是$Y^X$的紧致子空间。

对每个$a\in X$，我们考虑$\mathcal{F}_a$在$Y$中的闭包$C_a$。条件指出$C_a$都是紧的，因此$C=\prod_{a\in X}C_a$也是紧的。由于$T_2$空间的紧子空间是闭的，$C\supseteq\mathcal{G}$也就是闭的，而$\mathcal{G}$自己是闭的，所以它也是紧的。

Step 2：我们证明作为集合$\mathcal{G}\subseteq\mathcal{C}(X,Y)$，且$\mathcal{G}$也是等度连续的。

任给$x_0\in X$和$\epsilon>0$，我们当然可以选取$U\ni x$使得$\forall f\in\mathcal{F}\forall x\in U(d(f(x),f(x_0))<\frac{\epsilon}{3})$。我们现在证明$\forall g\in\mathcal{G}\forall x\in U(d(g(x),g(x_0))<\epsilon)$，从而$g$是连续函数，且$\mathcal{G}$等度连续。

我们考虑$V_x=\{h\in Y^X|d(h(x),g(x))<\frac{\epsilon}{3}\wedge d(h(x_0),g(x_0))<\frac{\epsilon}{3}\}$，对每个$x\in X$它都是$g$的邻域。由于$g\in\mathrm{Cl}(\mathcal{F})$，而这又是$T_2$空间，因此$V_x$必须包含一个$f\in\mathcal{F}$，而三角不等式给出我们所需的不等式。

Step 3：我们证明$\mathcal{G}$从$Y^X$上继承的拓扑与从$\mathcal{G}$上继承的拓扑一致。

由于紧收敛一定比点开细，我们只要证明反过来也细。对$g\in\mathcal{G}$与$B_C(g,\epsilon)$，我们需要一个点开拓扑的基$B\ni g$使得$B\cap\mathcal{G}\subseteq B_C(g,\epsilon)\cap\mathcal{G}$。

运用$\mathcal{G}$的等度连续性与$C$的紧致性，我们取$X$中$C$的有限开覆盖$U_i$，这里每个$U_i$都包括一个点$x_i$，且满足$\forall x\in U_i\forall g\in\mathcal{G}(d(g(x),g(x_i))<\frac{\epsilon}{3})$。

现在，我们定义$B=\{h\in Y^X|\forall i(d(h(x_i),g(x_i))<\frac{\epsilon}{3})\}$，则三角不等式给出$h\in B\cap\mathcal{G}\rightarrow \forall x\in C(d(h(x),g(x))<\epsilon)\rightarrow h\in B_C(g,\epsilon)$。

Step 4：因此，$\mathcal{F}$包含于$\mathcal{C}(X,Y)$的紧致子空间$\mathcal{G}$中。前面的命题证毕。

现在，我们再来考虑这个命题的逆命题。如果$\mathcal{F}$包含于$\mathcal{C}(X,Y)$的紧致子空间$\mathcal{H}$中，我们来证明$\mathcal{H}$自己也是等度连续的，而且$\mathcal{H}_a$都是紧致的。

紧致性是这样的：我们对每个$a$都考虑$a:\mathcal{C}(X,Y)\to X\times\mathcal{C}(X,Y),f\mapsto(a,f)$和$ev:X\times\mathcal{C}(X,Y)\to Y,(a,f)\mapsto f(a)$。复合映射$ev\cdot a:\mathcal{H}\to\mathcal{H}_a$满，因此$\mathcal{H}$紧致推出$\mathcal{H}_a$紧致。

**引理。** 若$X$是LCH空间，则$\mathcal{C}(X,Y)$考虑紧开拓扑时$ev$是连续函数。

**证明。** 对每个$V\ni f(x)$，我们来找一个$(x,f)$的邻域，它被$ev$映入$V$中。事实上，LCH保证我们可以取$x$的邻域$U$，其闭包紧致且被$f$映入$V$中；现在$U\times S(\mathrm{Cl}(U),V)$就是我们所要的$(x,f)$的开邻域。

等度连续性是这样的：我们设$X$的紧致子空间$A$包含$a$的一个邻域，只需要证明$\mathcal{R}=\{f|_{A}|f\in\mathcal{H}\}\subseteq\mathcal{C}(A,Y)$在$a$处等度连续即可。

我们也赋$\mathcal{C}(A,Y)$以紧收敛拓扑。显然限制$|_A:\mathcal{C}(X,Y)\to\mathcal{C}(A,Y)$是连续的，因此$\mathcal{H}$的紧致性这时也给出$\mathcal{R}$的紧致性。它是$\mathcal{C}(A,Y)$的紧致子空间，而$A$紧致说$\mathcal{C}(A,Y)$上紧收敛拓扑与一致收敛拓扑是一致的，一致收敛拓扑有一致度量，所以$\mathcal{R}$有一致度量而且紧致，所以它对一致度量完全有界。

现在任给$x_0\in A$和$\epsilon<1$，我们证明存在$x_0$的邻域$U\subseteq A$使得$\forall f\in\mathcal{R}\forall x\in U(d(f(x),f(x_0))<\epsilon)$。记$\delta=\frac{\epsilon}{3}$。

紧致性允许我们用有限个$B_\delta(f_i)$覆盖$\mathcal{R}$，对每个$f_i$我们都选$U_i\ni x_0$使得$\forall x\in U_i(d(f_i(x),f_i(x_0))<\delta)$，这样$U=\bigcap_{i}U_i\ni x_0$就满足$\forall x\in U\forall i(d(f_i(x),f_i(x_0))<\delta)$。现在，对每个$f\in\mathcal{R}$，总有某个$f_i$能让$\rho(f,f_i)<\delta$，这样$\frac{d}{1+d}(f(x),f_i(x))<\delta<1$也指出$d(f(x),f_i(x))<\delta$，特别的有$d(f(x_0),f_i(x_0))<\delta$，再结合$d(f_i(x),f_i(x_0))<\delta$由三角不等式即得$d(f(x),f(x_0))<\epsilon$。
:::
