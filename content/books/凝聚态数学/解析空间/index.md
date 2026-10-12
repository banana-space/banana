---
title: 解析空间
---

本节将解析环粘起来得到解析空间。在此之前先回忆[[概形]]是怎么粘出来的。
为便于推广，我们来回忆函子式的办法。以 $\mathsf{Ring}$ 记
（$\mathbb{E}_\infty$-）环的范畴。对任意 $R\in\mathsf{Ring}$，$r_1,\ldots,r_n\in\pi_0R$
生成单位理想，令 $\{R\to R_{r_i}\}_{i=1}^n$ 覆盖 $R$，即得
$\mathsf{Ring}^\mathrm{op}$ 上一个 Grothendieck 拓扑，称 **Zariski 拓扑**。
以此将 $\mathsf{Ring}^\mathrm{op}$ 视为[[景]]，则 Zariski 下降表明
$\operatorname{Spec} R:={\operatorname{Hom}}(R,-)$ 是其上的层，这就是**仿射概形**。不难发现映射
$\operatorname{Spec} R_r\to\operatorname{Spec} R$ 在 $\mathsf{Sh}(\mathsf{Ring}^\mathrm{op})$ 中为
$(-1)$-截断；此类映射称为**主开浸入**或**主局部化**，
它们的余极限称为**开浸入**或 **Zariski 局部化**。最后，
**概形**即定义为仿射概形沿开浸入取余极限所得。Zariski 下降还表明
$R\mapsto\mathsf{D}(R)$ 是 $\mathsf{Ring}^\mathrm{op}$ 上的对称幺半稳定无穷范畴层，
于是对 $X\in\mathsf{Sh}(\mathsf{Ring}^\mathrm{op})$，可定义其 **（拟凝聚）导出范畴**为
$\mathsf{D}(X)={\operatorname{Hom}}_{\mathsf{Sh}(\mathsf{Ring}^\mathrm{op})}(X,\mathsf{D})$。
如 $X$ 是概形，
依定义有 $\mathsf{D}(X)=\lim_{\operatorname{Spec} R\hookrightarrow X\,开浸入}\mathsf{D}(R)$。

解析空间的作法大体与之类似。不同之处在于由于解析环本身结构复杂，
显式的形如 $R\to R_r$ 的局部化未必合理，只能抽象地以模范畴刻画局部化。
由于我们认为解析环的本体是模范畴，模范畴一样而底环不同者应当视为一样，
所以本节在完备解析环范畴 $\mathsf{AnRing}$ 中工作，
环张量积符号常指 $\mathsf{AnRing}$ 中的推出。

::: definition
称 $\mathsf{AnRing}$ 中同态 $\mathcal{A}\to\mathcal{B}$ 为**局部化**，指忘却函子
$\mathsf{D}_{\ge0}(\mathcal{B})\to\mathsf{D}_{\ge0}(\mathcal{A})$ 满忠实。
:::

::: remark
这推出 $\mathcal{B}\otimes_\mathcal{A}\mathcal{B}=\mathcal{B}$。事实上，满忠实函子
$\mathsf{D}_{\ge0}(\mathcal{B})\to\mathsf{D}_{\ge0}(\mathcal{A})\subset\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$
给出 $\underline{\mathcal{A}}$ 上解析结构，记作 $\mathcal{B}'$，其完备化为 $\mathcal{B}$。
由解析环余极限的定义显然有 $\mathcal{B}'\otimes_\mathcal{A}\mathcal{B}'=\mathcal{B}'$，
从而作为完备解析环余极限，
$\mathcal{B}\otimes_\mathcal{A}\mathcal{B}=\mathcal{B}$。
用类似的办法可以看出局部化在基变换和余极限下封闭。

反过来 $\mathcal{B}\otimes_\mathcal{A}\mathcal{B}=\mathcal{B}$
的话 $\mathcal{A}\to\mathcal{B}$ 是不是局部化呢，我还没想。离散情形当然是这样，
因为 $\mathbb{E}_\infty$-环同态 $A\to B$ 的模范畴忘却函子满忠实，
相当于说它的左伴随 $-\otimes_AB$ 复合它为 $\operatorname{id}$；由于
$B$ 在余极限下生成 $\mathsf{D}_{\ge0}(B)$，这自然就等价于
$B\otimes_AB=B$。做一些交换代数不难发现，Noether
环之间同态依以上定义是局部化，当且仅当它是归纳 Zariski 局部化。
固然不 Noether 时会有其它东西，比如非离散的一维赋值环打到它的剩余域，
但在解析环情境下要做一般理论可能也只能如此定义。
:::

光是局部化并不能保证导出范畴能粘合，还要引入一个条件。

::: definition {@稳态}
称解析环同态 $\mathcal{A}\to\mathcal{B}$ 为**稳态**，指对任意同态 $\mathcal{A}\to\mathcal{A}'$，
任意 $S\in\mathsf{ExDisc}$，
$\mathcal{A}'[S]\otimes_\mathcal{A}\mathcal{B}\in\mathsf{D}_{\ge0}(\mathcal{A}')$。这自然等价于
$-\otimes_\mathcal{A}\mathcal{B}$ 保持 $\mathsf{D}_{\ge0}(\mathcal{A}')$。具体地说，
像 @解析结构转移 的证明中一样，对 $M\in\mathsf{D}_{\ge0}(\mathcal{A}')$，
$M\otimes_\mathcal{A}\mathcal{B}$ 有自然的 $\underline{\mathcal{A}'}$ 模结构，由
$$
\underline{\mathcal{A}'}\otimes_{\underline{\mathcal{A}}}(M\otimes_\mathcal{A}\mathcal{B})
=(\underline{\mathcal{A}'}\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}})\otimes_{\underline{\mathcal{B}}}(M\otimes_{\underline{\mathcal{A}}}\mathcal{B})
\to(\underline{\mathcal{A}'}\otimes_{\underline{\mathcal{A}}}\mathcal{B})\otimes_\mathcal{B}(M\otimes_{\underline{\mathcal{A}}}\mathcal{B})=(\mathcal{A}'\otimes_{\underline{\mathcal{A}}}M)\otimes_{\underline{\mathcal{A}}}\mathcal{B}
\to M\otimes_\mathcal{A}\mathcal{B}
$$
给出；这里要求它仍属于 $\mathsf{D}_{\ge0}(\mathcal{A}')$。
如令 $\mathcal{B}'=\mathcal{B}\otimes_\mathcal{A}\mathcal{A}'$
为 $\widetilde{\mathsf{AnRing}}$ 中推出，则实际上 $M\otimes_\mathcal{A}\mathcal{B}$ 有自然的
$\underline{\mathcal{B}'}=\underline{\mathcal{B}}\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{A}'}$
模结构，这也就相当于要求它属于 $\mathsf{D}_{\ge0}(\mathcal{B}')$。
另外，
由于 $\mathcal{A}'[S]\otimes_\mathcal{A}\mathcal{B}=(\mathcal{A}'[S]\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}})\otimes_{\underline{\mathcal{B}}}\mathcal{B}
  =(\mathcal{A}'\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}})[S]\otimes_{\underline{\mathcal{B}}}\mathcal{B}$，
这也等价于 $-\otimes_{\underline{\mathcal{B}}}\mathcal{B}$ 保持
$\mathsf{D}_{\ge0}(\mathcal{A}'\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}})$。
:::

以下命题将映射稳态刻画为支持基变换。

::: proposition {@稳态基变换}
解析环同态 $f\colon\mathcal{A}\to\mathcal{B}$ 稳态当且仅当对任意推出图表
\[
\begin{tikzcd}
  \mathcal{B}'&\mathcal{A}'\ar[l,"f'"']\\
  \mathcal{B}\ar[u,"g'"]&\mathcal{A}\ar[l,"f"]\ar[u,"g"']
\end{tikzcd}
\]
以及任意 $M\in\mathsf{D}(\mathcal{A}')$，$f^*g_*M=g'_*f'^*M$。
:::

::: proof
由于两边的函子都右 $t$-正合且保持余极限，故对 $M\in\mathsf{D}(\mathcal{A}')$ 和对
$M\in\mathsf{D}_{\ge0}(\mathcal{A}')$ 提条件是一样的。“当”比较显然：
$M\otimes_\mathcal{A}\mathcal{B}$ 就是等号左边，它等于等号右边当然就是说它附带自然的
$\underline{\mathcal{B}'}$ 模结构属于 $\mathsf{D}_{\ge0}(\mathcal{B}')$。“仅当”需要证明如果
$M\otimes_\mathcal{A}\mathcal{B}\in\mathsf{D}_{\ge0}(\mathcal{B}')$ 那么它就是
$M\otimes_{\mathcal{A}'}\mathcal{B}'$，也就是对 $X\in\mathsf{D}_{\ge0}(\mathcal{B}')$ 证明
$$
{\operatorname{Hom}}_{\mathcal{B}'}(M\otimes_\mathcal{A}\mathcal{B},X)={\operatorname{Hom}}_{\mathcal{A}'}(M,X).
$$
由于等号左边是
${\operatorname{Hom}}_{\underline{\mathcal{B}'}}((M\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}})\otimes_{\underline{\mathcal{B}}}\mathcal{B},X)$，
等号右边是
${\operatorname{Hom}}_{\underline{\mathcal{B}'}}(M\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}},X)$，
只需对 $N\in\mathsf{D}(\underline{\mathcal{B}'})$ 证
$$
{\operatorname{Hom}}_{\underline{\mathcal{B}'}}(N\otimes_{\underline{\mathcal{B}}}\mathcal{B},X)={\operatorname{Hom}}_{\underline{\mathcal{B}'}}(N,X).
$$
由于
$X\in\mathsf{D}_{\ge0}(\mathcal{B}')\subseteq\mathsf{D}_{\ge0}(\mathcal{B}\otimes_{\underline{\mathcal{B}}}\underline{\mathcal{B}'})$，
这是 @解析结构转移 的推论。
:::

::: remark
显然，稳态映射在基变换下封闭。由 @解析环余极限
证明中对左伴随的描述不难看出其也在余极限下封闭。由 @稳态
里最后一句话容易发现其还有如下性质：如解析环同态
$\mathcal{A}\to\mathcal{B}\to\mathcal{C}$ 复合起来稳态，则 $\mathcal{B}\to\mathcal{C}$ 亦稳态。
:::

正确的解析环覆盖是这样：

::: definition
$\mathsf{AnRing}$ 中，**稳态覆盖**指稳态局部化的有限族
$\{\mathcal{A}\to\mathcal{A}_i\}_{i=1}^n$，使得函子
$\mathsf{D}_{\ge0}(\mathcal{A})\to\prod_{i=1}^n\mathsf{D}_{\ge0}(\mathcal{A}_i)$
反映同构，即左边一个态射是同构当且仅当其打到右边之后是同构。
由于 $\mathsf{D}_{\ge0}$ 满忠实嵌入对应的 $\mathsf{D}$ 且此函子为右 $t$-正合，
这等价于函子 $\mathsf{D}(\mathcal{A})\to\prod_{i=1}^n\mathsf{D}(\mathcal{A}_i)$
反映同构，也等价于它反映零对象。以此把 $\mathsf{AnRing}^\mathrm{op}$ 视为[[景]]。
:::

正是稳态让导出范畴能下降：

::: theorem {@粘导出范畴}
设 $\{\mathcal{A}\to\mathcal{A}_i\}_{i=1}^n$ 为稳态覆盖。
对 $I\subseteq\{1,\ldots,n\}$ 非空，
记 $\mathcal{A}_I=\bigotimes_{\mathcal{A},\,i\in I}\mathcal{A}_i$，
则 $\mathsf{D}(\mathcal{A})=\lim_I\mathsf{D}(\mathcal{A}_I)$，其中 $I$ 取遍
$\{1,\ldots,n\}$ 的非空子集。换言之，$\mathsf{D}$ 是
$\mathsf{AnRing}^\mathrm{op}$ 上的对称幺半稳定无穷范畴层。
:::

::: proof
等号右边的范畴其对象形如 $(X_I)$，满足对 $I\subseteq J$，
$X_I\otimes_{\mathcal{A}_I}\mathcal{A}_J=X_J$。左边到右边的自然函子为
$F(X)=(X\otimes_\mathcal{A}\mathcal{A}_I)$。由于稳态局部化在基变换和复合下封闭，
每个 $\mathcal{A}_I$ 都是 $\mathcal{A}$ 的稳态局部化。将每个 $\mathsf{D}(\mathcal{A}_I)$
视为 $\mathsf{D}(\mathcal{A})$ 的满忠实子范畴，有反方向函子
$G(X_I)=\lim_IX_I$。它们显然是左右伴随，要证两个复合都是恒同。
$FG=\operatorname{id}$ 是因为
$$
(\lim_IX_I)\otimes_\mathcal{A}\mathcal{A}_J=\lim_I(X_I\otimes_\mathcal{A}\mathcal{A}_J)
=\lim_I(X_I\otimes_{\mathcal{A}_I}\mathcal{A}_{I\cup J})=\lim_I X_{I\cup J}=X_J,
$$
其中第一个等号是因为稳定无穷范畴中有限极限是有限余极限，
第二个等号是 @稳态基变换。而 $GF=\operatorname{id}$ 是形式的：
$FG=\operatorname{id}$ 推出 $FGF=F$，而由覆盖的定义 $F$ 反映同构，
故这推出 $GF=\operatorname{id}$。
:::

这样便可定义仿射解析空间。

::: definition
对 $\mathcal{A}\in\mathsf{AnRing}$，定义其**解析谱**为
$\operatorname{AnSpec}\mathcal{A}={\operatorname{Hom}}_{\mathsf{AnRing}}(\mathcal{A},-)$。
由 @映射重构
与 @粘导出范畴，这是 $\mathsf{AnRing}^\mathrm{op}$ 上的层。
此种层称为**仿射解析空间**。
:::

然后便可如本节开头一样作出解析空间。

::: definition
$\mathsf{Sh}(\mathsf{AnRing}^\mathrm{op})$ 中映射称为**开浸入**，
指它是仿射解析空间的稳态局部化的余极限。开浸入都是 $(-1)$-截断的。
$\mathsf{Sh}(\mathsf{AnRing}^\mathrm{op})$ 中对象称为**解析空间**，
指它是仿射解析空间沿开浸入的余极限。对解析空间 $X$，
定义其 **（拟凝聚）导出范畴**为
$\mathsf{D}(X)={\operatorname{Hom}}_{\mathsf{Sh}(\mathsf{AnRing}^\mathrm{op})}(X,\mathsf{D})$，
它是 $\mathsf{CondSp}$-[[充实范畴|充实]]、[[幂]]、
[[余幂]]的对称幺半稳定无穷范畴。

解析空间的映射指的是它们在 $\mathsf{Sh}(\mathsf{AnRing}^\mathrm{op})$
中的映射。对解析空间映射 $f\colon X\to Y$，其拟凝聚导出范畴之间有自然的函子
$f^*\colon\mathsf{D}(Y)\to\mathsf{D}(X)$。由伴随函子定理它有右伴随，
记作 $f_*$。和概形论中一样，我们可以定义解析空间及其映射的拟紧、拟分离。
不难发现 $f$ 拟紧拟分离时 $f_*$ 保持余极限，因为仿射时如此。
:::

::: remark
这和 [@analytic] 上的说法略有不同，
但它们等价只是 $\infty$-意象上的抽象废话。
:::

::: remark
也可以以环层空间的思路做解析空间。对解析空间 $X$，
定义其**开子空间**指解析空间 $U$ 连同开浸入
$U\hookrightarrow X$。显然开子空间的任意并和有限交仍是开子空间，
且满足分配律，于是 $X$ 的所有开子空间构成一个位象，记作 $|X|$，称为其**底位象**，
或不正式地，**底空间**。位象指的是 $0$-意象。$X$ 的解析空间结构给
$|X|$ 以自然的解析环层，记作 $\mathcal{O}_X$，于是 $(|X|,\mathcal{O}_X)$
便成为解析环层位象。
它显然局部同构于
$(|\operatorname{AnSpec}\mathcal{A}|,\mathcal{O}_{\operatorname{AnSpec}\mathcal{A}})$
这样的解析环层位象。反过来，如有局部同构于仿射解析空间的解析环层位象，
则将对应局部的解析谱取余极限可以得回上面定义的解析空间。
这样便把解析空间等同于局部同构于仿射解析空间的解析环层位象。

虽然这看似比上面更“几何”，但实际意义不大，因为 $|X|$ 通常太细，
如同概形论中的投射 Zariski 拓扑。实际做几何时还是用一个更粗的位象，
这可从下一节看出。解析空间的好处是提供了统一的理论框架以及合理的导出范畴。
:::

下面来看例子。在此之前需要给出稳态的充分条件。

::: proposition {@稳态判别}
$f\colon\mathcal{A}\to\mathcal{B}$ 是解析环同态。如对任意极不连通空间 $S$ 以及任意
$\mathcal{A}$ 模 $M$，自然映射
$$
(f^*\underline{\operatorname{Hom}}_\mathcal{A}(\mathcal{A}[S],M))(*)\to(f^*M)(S)
$$
是同构，那么 $f$ 为稳态。
:::

::: proof
任取解析环同态 $g:\mathcal{A}\to\mathcal{A}'$，
令 $\mathcal{B}'=\mathcal{A}'\otimes_\mathcal{A}\mathcal{B}$。
取 $M \in \mathsf{D}(\mathcal{A}')$，
令 $N=M\otimes_\mathcal{A}\mathcal{B} \in \mathsf{D}(\underline{\mathcal{A}'})$。
下证 $N\in \mathsf{D}(\mathcal{A}')$。

我们使用函子性。
令 $F_N\colon\mathsf{cpt}(\mathsf{D}(\mathcal{A}'))^{\mathrm{op}}\to \mathsf{Sp}$，
$X \mapsto (\underline{\operatorname{Hom}}_{\mathcal{A}'}(X,M)\otimes_\mathcal{A}\mathcal{B})(*)$，
则 $F_N$ 正合。
由于 $\mathsf{D}(\mathcal{A}')$ 紧生成且有任意余极限，
知 $F_N$ 被 $\mathsf{D}(\mathcal{A}')$ 的对象 $N'$ 表示：
如忽略集合论问题，可令 $N'=\operatornamewithlimits{colim}_{(X,f\in\Omega^\infty F_N(X))}X$。
此时对 $S \in \mathsf{ExDisc}$ 我们有函子性的同构
$$
N(S) = (f^*\underline{\operatorname{Hom}}_\mathcal{A}(\mathcal{A}[S],M))(*)
= (\underline{\operatorname{Hom}}_{\mathcal{A}'}(\mathcal{A}'[S],M)\otimes_\mathcal{A}\mathcal{B})(*)
= F_N(\mathcal{A}'[S])
= {\operatorname{Hom}}_{\mathcal{A}'}(\mathcal{A}'[S],N')
= N'(S),
$$
于是 $N=N' \in \mathsf{D}(\mathcal{A}')$。
:::

::: example {@离散进制空间}
我们来把离散进制空间，即离散 Huber 对所粘成的进制空间，
做成解析空间。这件事分为以下几步：

1. 把离散 Huber 对 $(A,A^+)$ 做成解析环 $(A,A^+)_\blacksquare$。
   首先对 $\mathbb{Z}$ 上有限型环对 $(A,R)$，这就是
   @一般环固态化。由 @满射化归，$(A,R)_\blacksquare$
   只依赖于 $A$ 和 $\operatorname{im}(R\to A)$ 在 $A$ 中整闭包。然后对离散
   Huber 对 $(A,A^+)$，
   定义 $(A,A^+)_\blacksquare=\operatornamewithlimits{colim}_{(B,R)\to(A,A^+)}(B,R)_\blacksquare$，
   其中 $(B,R)$ 取遍 $\mathbb{Z}$ 上有限型环对，便得到解析环 $(A,A^+)_\blacksquare$。
   由于此余极限是滤的，@解析环余极限 保证了它完备，底环为 $A$。

2. 把离散 Huber 对局部化做成稳态局部化。由于稳态局部化的交还是稳态局部化，
   只用做一元情形，即证明 $(A,R)_\blacksquare\to(A[1/g],R[f/g])_\blacksquare$
   是稳态局部化。
   这可分成两步 $(A,R)_\blacksquare\to(A[1/g],R)_\blacksquare\to(A[1/g],R[f/g])_\blacksquare$。
   第一步是 $A\to A[1/g]$ 的基变换，
   而环局部化总是稳态局部化。第二步则是
   $(\mathbb{Z}[x],\mathbb{Z})_\blacksquare\to(\mathbb{Z}[x],\mathbb{Z}[x])_\blacksquare$ 的基变换，
   这就稍复杂些。它当然是局部化，因为底环相同。稳态就用 @稳态判别。
   由 @仿射下叹号（的证明），这里的 $f^*$ 就是
   $\underline{\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}((x^{-1}))/\mathbb{Z}[x])[-1],-)$，
   从而
   \[
   \begin{aligned}
     (f^*\underline{\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}[x],\mathbb{Z})_\blacksquare[S],M))(*)
     &={\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}((x^{-1}))/\mathbb{Z}[x])[-1],\underline{\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}[x],\mathbb{Z})_\blacksquare[S],M))\\
     &={\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}[x],\mathbb{Z})_\blacksquare[S],\underline{\operatorname{Hom}}_{\mathbb{Z}[x]}((\mathbb{Z}((x^{-1}))/\mathbb{Z}[x])[-1],M))
     =(f^*M)(S).
   \end{aligned}
   \]

3. 最后，离散进制空间是离散 Huber 对的进制谱沿局部化的余极限，
   于是取相应解析谱的余极限便得到解析空间。

一般进制空间会有一些麻烦。对一般 Huber 对 $(A,A^+)$，固然应该定义
$(A,A^+)_\blacksquare$ 为
$(A_\mathrm{disc},A^+_\mathrm{disc})_\blacksquare\otimes_{A_\mathrm{disc}}A$，
但由于 Huber 对的局部化涉及环的进制完备化，故它未必表现良好。
[@analytic, 命题 14.7] 说局部化至少对在 Noether 的定义环上有限生成的，
或者 Tate 且层的 Huber 环来说表现良好，但那里没有证明。
[@An21] 里做了些证明。
:::

做成解析空间的好处是能在非 Archimedes 解析几何中做出表现良好的导出范畴。
实际上 Archimedes 解析几何的对象也能做成解析空间，但这就需要液态化的实数了。

::: remark
我们发展无穷范畴版本的理论，一个原因就是想把复解析几何囊括其中。
复解析几何中开浸入不平坦：设 $U,V\subseteq\mathbb{C}$ 是不交开集，
则理应 $\mathcal{O}(U)\otimes_{\mathcal{O}(\mathbb{C})}\mathcal{O}(V)=0$，而全纯函数刚性又导致
$\mathcal{O}(\mathbb{C})\to\mathcal{O}(U)$，$\mathcal{O}(\mathbb{C})\to\mathcal{O}(V)$ 是单射，
故开浸入不可能平坦。
这样一来，拟凝聚导出范畴的 $t$ 结构在局部化下完全混乱，
于是就无法在 Abel 范畴上做事，必须用无穷范畴。
:::

::: example
一般地对离散环 $R$ 以及凝聚态 $R_\blacksquare$-代数 $A$，
也可以定义 $(A,R)_\blacksquare=R_\blacksquare\otimes_RA$。
由 @解析结构转移 对此解析环的描述知其完备。
这样便兑现了 @蹩脚表达。
:::

```terms
$n$-截断:
  en: $n$-truncated
稳态:
  en: steady
反映:
  en: reflect
位象:
  en: locale
进制空间:
  en: adic space
```
