---
title: '解析 $\mathbb{E}_\infty$-环'
---

解析 $\mathbb{E}_\infty$-环是解析环的无穷范畴化。

::: definition
**预解析 $\mathbb{E}_\infty$-环** $\mathcal{A}$ 指三元组
$(\underline{\mathcal{A}},\mathcal{A}[-],\alpha)$，
其中 $\underline{\mathcal{A}}$ 为凝聚态 $\mathbb{E}_\infty$-环，
$\mathcal{A}[-]\colon\mathsf{ExDisc}\to\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$
为函子，$\alpha\colon\underline{\mathcal{A}}[-]\to\mathcal{A}[-]$ 为自然变换。
$\underline{\mathcal{A}}$ 称为**底环**，$\mathcal{A}[-]$ 称为**自由
$\mathcal{A}$ 模**。在 $\alpha$ 容易看出时常将其省略。
同态有显然的定义。
:::

::: remark
本讲义中 $\mathbb{E}_\infty$-环都指的是连合 $\mathbb{E}_\infty$-环，
即负数阶同伦群都为 $0$ 者。
:::

::: notation
对凝聚态生象 $X$，将其表为极不连通空间的余极限，
然后作用 $\mathcal{A}[-]$ 再相应取余极限，就得到一个 $\underline{\mathcal{A}}$ 模，
记作 $\mathcal{A}[X]\in\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$，
也可称为**自由 $\mathcal{A}$ 模**。这良定，因为它无非是
$\mathcal{A}[-]\colon\mathsf{ExDisc}\to\mathsf{D}(\underline{\mathcal{A}})$ 沿着
$\mathsf{ExDisc}\hookrightarrow\mathsf{CondAni}$ 左 Kan 扩张。
:::

::: definition
**解析 $\mathbb{E}_\infty$-环** $\mathcal{A}$ 指满足如下条件的预解析 $\mathbb{E}_\infty$-环：对一些
$\mathcal{A}[T]$，$T\in\mathsf{ExDisc}$ 的筛余极限 $C$，
以及 $S\in\mathsf{ExDisc}$，有
$$
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\mathcal{A}[S],C)=
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\underline{\mathcal{A}}[S],C).
$$
此时也称 $\mathcal{A}$ 为 $\underline{\mathcal{A}}$ 上的**解析结构**。
:::

::: remark
上面的定义中只要要求 $\underline{\operatorname{Hom}}$ 作为凝聚态生象相等，
就能得到其作为凝聚态谱也相等：
一般地，$C[1]$ 典范地是 $C$ 的筛余极限，故只要 $C$ 是那样的筛余极限，
那么 $C[i]$，$i\ge0$ 也都是；对它们用条件即知两边作为凝聚态谱相等。
:::

::: example {@解析E∞环例子}
之前讨论的解析环显然都是解析 $\mathbb{E}_\infty$-环。除此之外，

1. {@平凡解析结构} 对凝聚态 $\mathbb{E}_\infty$-环 $A$，
   $A=(A,A[-],\operatorname{id})$ 为解析 $\mathbb{E}_\infty$-环。

2. $\mathbb{S}_\blacksquare=(\mathbb{S},\mathbb{S}[-]^\blacksquare)$ 为解析 $\mathbb{E}_\infty$-环。

:::

此处需要 @Abel-范畴抽象废话 和 @固态谱 的共同推广。

::: theorem {@解析环基本定理}
对解析 $\mathbb{E}_\infty$-环 $\mathcal{A}$，定义其**模范畴**
$$
\mathsf{D}_{\ge0}(\mathcal{A})=\{X\in\mathsf{D}_{\ge0}(\underline{\mathcal{A}})
\mid\forall S\in\mathsf{ExDisc},\,\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\mathcal{A}[S],X)=
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\underline{\mathcal{A}}[S],X)\}
$$
为 $\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$ 的满子范畴，其**导出范畴**
$$
\mathsf{D}(\mathcal{A})=\{X\in\mathsf{D}(\underline{\mathcal{A}})
\mid\forall S\in\mathsf{ExDisc},\,\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\mathcal{A}[S],X)=
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\underline{\mathcal{A}}[S],X)\}
$$
为 $\mathsf{D}(\underline{\mathcal{A}})$ 的满子范畴，则：

$\mathsf{D}_{(\ge0)}(\mathcal{A})\subset\mathsf{D}_{(\ge0)}(\underline{\mathcal{A}})$
对极限、余极限皆封闭。形如 $\mathcal{A}[S]$，$S\in\mathsf{ExDisc}$
的对象是其紧投射生成元。其含入函子有左伴随 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$。
$\mathsf{D}_{(\ge0)}(\mathcal{A})$ 是（预）稳定无穷范畴，
$\mathsf{D}(\mathcal{A})=\mathsf{Sp}(\mathsf{D}_{\ge0}(\mathcal{A}))$，
从而 $\mathsf{D}_{\ge0}(\mathcal{A})\subset\mathsf{D}(\mathcal{A})$ 给出 $t$-结构，
是 $\mathsf{D}_{\ge0}(\underline{\mathcal{A}})\subset\mathsf{D}(\underline{\mathcal{A}})$
这一 $t$-结构的限制。$\mathsf{D}_{(\ge0)}(\mathcal{A})$ 有唯一的对称幺半结构
$-\otimes_\mathcal{A}-$，使 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$ 为幺半函子。
相关定义参见 [@HA, 1.1, 1.4] 以及 [@SAG, C.1]。

另外，$\mathsf{D}(\underline{\mathcal{A}})$ 中的对象在 $\mathsf{D}(\mathcal{A})$
中当且仅当其各阶同伦群如此，
且 $t$-结构的心
$\mathsf{D}^\hearts(\mathcal{A})\subset\mathsf{D}^\hearts(\underline{\mathcal{A}})=\mathsf{Mod}(\pi_0\underline{\mathcal{A}})$
对极限、余极限、扩张封闭。
:::

::: proof
依定义
$\mathsf{D}_{\ge0}(\mathcal{A})=\mathsf{D}(\mathcal{A})\cap\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$，
故只需证关于 $\mathsf{D}(\mathcal{A})$ 的断言，
以及证 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$
与 $-\otimes_\mathcal{A}-$ 为右 $t$-正合。
尽管如此，证明中还是要提及 $\mathsf{D}_{\ge0}(\mathcal{A})$。
显然 $\mathsf{D}_{(\ge0)}(\mathcal{A})$ 对极限封闭。

一般地，$\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$
中的对象典范地是一些 $\underline{\mathcal{A}}[S]$ 的筛余极限，
即 $M=\operatornamewithlimits{colim}_{c\in\mathcal{C}_M}\mathsf{\underline{\mathcal{A}}}[S_c]$，
其中忽略集合论问题的话
$\mathcal{C}_M=\{(S,m)\mid S\in\mathsf{ExDisc},\,m\colon\underline{\mathcal{A}}[S]\to M\}$。
相应地令
$M\otimes_{\underline{\mathcal{A}}}\mathcal{A}=\operatornamewithlimits{colim}_{c\in\mathcal{C}_M}\mathcal{A}[S_c]$，
则条件推出 $M\otimes_{\underline{\mathcal{A}}}\mathcal{A}\in\mathsf{D}_{\ge0}(\mathcal{A})$。
由定义，
它在 $\mathsf{D}_{\ge0}(\mathcal{A})$ 上表出函子
${\operatorname{Hom}}_{\underline{\mathcal{A}}}(M,-)$，故它也就给出含入
$\mathsf{D}_{\ge0}(\mathcal{A})\subset\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$ 的左伴随。
这样也就顺便得到，$\mathsf{D}_{\ge0}(\mathcal{A})$ 中对象都是一些 $\mathcal{A}[S]$ 的筛余极限，
且由以上余极限表达的典范性知
$\mathsf{D}_{\ge0}(\mathcal{A})\subset\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$
对余极限封闭。

由于对 $M\in\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$ 有
$\tau_{\ge1}M=\Sigma\Omega M$，而 $\Sigma$、$\Omega$
为极限、余极限操作，
所以 $\tau_{\ge1}\mathsf{D}_{\ge0}(\mathcal{A})\subset\mathsf{D}_{\ge0}(\mathcal{A})$，
从而
$\mathsf{D}^\hearts(\mathcal{A})=\mathsf{D}_{\ge0}(\mathcal{A})\cap\mathsf{D}^\hearts(\underline{\mathcal{A}})$，
且 $\mathsf{D}_{\ge0}(\mathcal{A})$ 中对象的各阶同伦群在 $\mathsf{D}^\hearts(\mathcal{A})$ 中。
由此立得 $\mathsf{D}^\hearts(\mathcal{A})$ 对极限、余极限封闭。其也对扩张封闭，
因为
$\operatorname{Ext}^1_{\mathsf{D}^\hearts(\underline{\mathcal{A}})}(M,N)=\pi_0{\operatorname{Hom}}_{\underline{\mathcal{A}}}(M,\Sigma N)$。

暂以 $\mathsf{D}'(\mathcal{A})$ 记 $\mathsf{D}(\underline{\mathcal{A}})$ 中各阶同伦群都属于
$\mathsf{D}^\hearts(\mathcal{A})$ 者构成的满子范畴，则由上一段，
$\mathsf{D}'(\mathcal{A})$ 对极限、余极限封闭。
先证 $\mathsf{D}'(\mathcal{A})\subseteq\mathsf{D}(\mathcal{A})$。
取 $X\in\mathsf{D}'(\mathcal{A})$，要证 $X\in\mathsf{D}(\mathcal{A})$。由
$X=\lim_n\tau_{\le n}X$ 可设 $X$ 上有界。
由于 $\underline{\mathcal{A}}[S],\mathcal{A}[S]\in\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$，
当 $X\in\mathsf{D}_{<-n}(\underline{\mathcal{A}})$ 时有
$$
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\mathcal{A}[S],X),
\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\underline{\mathcal{A}}[S],X)\in\mathsf{CondSp}_{<-n},
$$
所以由于 $\mathsf{D}(\mathcal{A})$ 定义条件可逐阶同伦群验证，可设
$X$ 下有界。现在 $X$ 有界，为有限个 $\mathsf{D}^\hearts(\mathcal{A})$
中对象的平移的扩张，所以 $X\in\mathsf{D}(\mathcal{A})$。

再证 $\mathsf{D}(\mathcal{A})\subseteq\mathsf{D}'(\mathcal{A})$ 以及剩下的命题。取一般的
$M\in\mathsf{D}(\underline{\mathcal{A}})$。与前面类似，可写
$M=\operatornamewithlimits{colim}_{c\in\mathcal{C}}\underline{\mathcal{A}}[S_c][-n_c]$。
相应地令
$M\otimes_{\underline{\mathcal{A}}}\mathcal{A}=\operatornamewithlimits{colim}_{c\in\mathcal{C}}\mathcal{A}[S_c][-n_c]$，
则由前
$M\otimes_{\underline{\mathcal{A}}}\mathcal{A}\in\mathsf{D}'(\mathcal{A})\subseteq\mathsf{D}(\mathcal{A})$，
故它给出含入 $\mathsf{D}(\mathcal{A})\subset\mathsf{D}(\underline{\mathcal{A}})$ 的左伴随，
其像在 $\mathsf{D}'(\mathcal{A})$ 中。
这样也就得到 $\mathsf{D}(\mathcal{A})\subseteq\mathsf{D}'(\mathcal{A})$。
该左伴随在 $\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$ 上显然和之前给出的相同，
从而它右 $t$-正合。
幺半结构显然必须为
$(-\otimes_{\underline{\mathcal{A}}}-)\otimes_{\underline{\mathcal{A}}}\mathcal{A}$，
也确实右 $t$-正合。
:::

::: definition
解析 $\mathbb{E}_\infty$-环同态指预解析同态 $f\colon\mathcal{A}\to\mathcal{B}$，满足
$\mathsf{D}_{\ge0}(\mathcal{B})$ 作为 $\underline{\mathcal{A}}$ 模都在
$\mathsf{D}_{\ge0}(\mathcal{A})$ 中。由以上定理，这等价于对任意
$S\in\mathsf{ExDisc}$，$\mathcal{B}[S]\in\mathsf{D}_{\ge0}(\mathcal{A})$。
此时有自然的忘却函子
$f_*\colon\mathsf{D}_{(\ge0)}(\mathcal{B})\to\mathsf{D}_{(\ge0)}(\mathcal{A})$；
它有左伴随
$-\otimes_{\underline{\mathcal{A}}}\underline{\mathcal{B}}\otimes_{\underline{\mathcal{B}}}\mathcal{B}$，
简作 $-\otimes_\mathcal{A}\mathcal{B}$，也记作 $f^*$。由 @解析E∞环例子 中的 @平凡解析结构，
有自然的解析环同态 $\underline{\mathcal{A}}\to\mathcal{A}$，
记号 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$
便是 $-\otimes_\mathcal{A}\mathcal{B}$ 的特殊情况。

以 $\widetilde{\mathsf{AnRing}}$ 记解析
$\mathbb{E}_\infty$-环的范畴。对凝聚态 $\mathbb{E}_\infty$-环 $A$，
以 $\mathsf{An}(A)$ 记 $A$ 上解析结构的范畴。
它显然是个偏序集。
:::

以下命题刻画一个子范畴何时能成为解析结构的模范畴。

::: proposition {@模范畴判别}
$A$ 为凝聚态 $\mathbb{E}_\infty$-环，$\mathcal{D}\subset\mathsf{D}_{\ge0}(A)$
为满子范畴。则它是 $A$ 上某解析结构的模范畴当且仅当它满足以下条件：

1. {@封闭性条件} $\mathcal{D}\subset\mathsf{D}_{\ge0}(A)$ 对极限、余极限封闭。

2. {@凝聚态条件} 对任意 $S\in\mathsf{ExDisc}$，$\mathcal{D}\subset\mathsf{D}_{\ge0}(A)$ 对
   $\underline{\operatorname{Hom}}_\mathbb{S}(\mathbb{S}[S],-)$ 封闭。

3. {@左伴随条件} 含入函子有左伴随。

如它满足这些条件，则以它为模范畴的解析结构唯一。换言之，解析
$\mathbb{E}_\infty$-环相当于凝聚态 $\mathbb{E}_\infty$-环附带一个满足上述条件的子范畴即模范畴，
其同态也恰为底环同态中对应将模范畴忘却至模范畴内者。
:::

其中[条件 3](@左伴随条件)由伴随函子定理自动成立，如果不管集合论问题。

::: proof
“仅当”显然，我们来证“当”。显然，如解析结构 $\mathcal{A}$ 以 $\mathcal{D}$ 为模范畴，
则 $\mathcal{A}[S]$ 必须用[条件 3](@左伴随条件)
定义为 $A[S]$ 在该左伴随下的像。
要证 $\mathcal{A}=(A,\mathcal{A}[-])$ 为解析 $\mathbb{E}_\infty$-环，
$\mathcal{D}=\mathsf{D}_{\ge0}(\mathcal{A})$。
由伴随性，$C\in\mathcal{D}$ 时 ${\operatorname{Hom}}_A(A[S],C)$ 与
${\operatorname{Hom}}_A(\mathcal{A}[S],C)$ 作为生象相等。把 $C$ 换成
$\underline{\operatorname{Hom}}_\mathbb{S}(\mathbb{S}[T],-)$ 并用[条件 2](@凝聚态条件)，
即得它们作为凝聚态生象相等。最后，[条件 1](@封闭性条件)说明
$\mathcal{D}$ 包含 $\mathcal{A}[S]$ 的筛余极限。所以 $\mathcal{A}$ 为解析 $\mathbb{E}_\infty$-环，
$\mathcal{D}=\mathsf{D}_{\ge0}(\mathcal{A})$。
:::

用它我们可以“修正”底环：

::: definition
称解析 $\mathbb{E}_\infty$-环 $\mathcal{A}$ **完备**，指 $\mathcal{A}[*]=\underline{\mathcal{A}}$。
以 $\mathsf{AnRing}$ 记完备解析 $\mathbb{E}_\infty$-环的范畴。
:::

::: proposition
含入函子 $\mathsf{AnRing}\subset\widetilde{\mathsf{AnRing}}$
有左伴随，称为**完备化**。完备化不改变模范畴，
把底环变为单点生成的自由模。
:::

::: proof
取 $\mathcal{A}\in\widetilde{\mathsf{AnRing}}$。由 $\mathsf{D}_{\ge0}(\mathcal{A})$
是 $\underline{\mathcal{A}}$-线性的对称幺半范畴，即得其幺元 $\mathcal{A}[*]$
是 $\mathbb{E}_\infty$-$\underline{\mathcal{A}}$-代数，且 $\mathsf{D}_{\ge0}(\mathcal{A})$
为 $\mathcal{A}[*]$-线性，即其中同态都是 $\mathcal{A}[*]$-同态。
于是有自然的忠实函子 $\mathsf{D}_{\ge0}(\mathcal{A})\to\mathsf{D}_{\ge0}(\mathcal{A}[*])$。
由于其复合忘却函子 $\mathsf{D}_{\ge0}(\mathcal{A}[*])\to\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$
为满忠实，其本身也是满忠实。对其验证 @模范畴判别 的条件。
[条件 1](@封闭性条件)和[条件 2](@凝聚态条件)是显然的。
[条件 3](@左伴随条件)是因为 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$ 也是这个左伴随：
由于其保持余极限，只需对生成元 $\mathcal{A}[*][S]$ 验证伴随性；
而
$$
\mathcal{A}[*][S]\otimes_{\underline{\mathcal{A}}}\mathcal{A}=
(\underline{\mathcal{A}}[S]\otimes_{\underline{\mathcal{A}}}\mathcal{A}[*])\otimes_{\underline{\mathcal{A}}}\mathcal{A}=
\mathcal{A}[S]\otimes_\mathcal{A}\mathcal{A}[*]=\mathcal{A}[S],
$$
故
$$
{\operatorname{Hom}}_\mathcal{A}(\mathcal{A}[*][S]\otimes_{\underline{\mathcal{A}}}\mathcal{A},-)={\operatorname{Hom}}_\mathcal{A}(\mathcal{A}[S],-)={\operatorname{Hom}}_{\mathcal{A}[*]}(\mathcal{A}[*][S],-),
$$
即得伴随性。
于是不难验证 $\mathcal{A}\mapsto\mathcal{A}^\circ=(\mathcal{A}[*],\mathcal{A}[-])$ 给出完备化函子。
:::

还可以基变换解析结构。

::: proposition {@解析结构转移}
$A\to B$ 是凝聚态 $\mathbb{E}_\infty$-环的同态。则有自然的函子
$-\otimes_AB\colon\mathsf{An}(A)\to\mathsf{An}(B)$，其中
$\mathcal{A}\otimes_AB=\mathcal{B}=(B,B[-]\otimes_A\mathcal{A})$，且是子范畴
$\mathcal{D}=\{X\in\mathsf{D}_{\ge0}(B)\mid X\in\mathsf{D}_{\ge0}(\mathcal{A})\}$
依 @模范畴判别 对应的解析结构。
:::

::: proof
$\mathcal{D}$ 显然满足 @模范畴判别 的条件
[1](@封闭性条件)、[2](@凝聚态条件)。需要验证含入函子有左伴随，
且为 $-\otimes_A\mathcal{A}$。先证对 $B$ 模 $M$，
$M\otimes_A\mathcal{A}$ 有自然的 $B$ 模结构。这是因为由
$-\otimes_A\mathcal{A}$ 是幺半函子，有自然映射
$$
B\otimes_A(M\otimes_A\mathcal{A})\to(B\otimes_A\mathcal{A})\otimes_\mathcal{A}(M\otimes_A\mathcal{A})
=(B\otimes_AM)\otimes_A\mathcal{A}\to M\otimes_A\mathcal{A},
$$
给出 $B$ 模结构。显然 $M\otimes_A\mathcal{A}\in\mathcal{D}$。要验证对任意
$X\in\mathcal{D}$，${\operatorname{Hom}}_B(M\otimes_A\mathcal{A},X)={\operatorname{Hom}}_B(M,X)$。
用 $B\otimes_A-$ 与忘却函子的伴随给出的典范单纯消解，只需证
对任意 $n\in\mathbb{N}$，
${\operatorname{Hom}}_B(B^{\otimes_A(n+1)}\otimes_A(M\otimes_A\mathcal{A}),X)
  ={\operatorname{Hom}}_B(B^{\otimes_A(n+1)}\otimes_AM,X)$，
也即 ${\operatorname{Hom}}_A(B^{\otimes_An}\otimes_A(M\otimes_A\mathcal{A}),X)
  ={\operatorname{Hom}}_A(B^{\otimes_An}\otimes_AM,X)$。
这是因为，再次由 $-\otimes_A\mathcal{A}$ 是幺半函子，有
\[
\begin{aligned}
  {\operatorname{Hom}}_A(B^{\otimes_An}\otimes_A(M\otimes_A\mathcal{A}),X)
  &={\operatorname{Hom}}_A((B^{\otimes_An}\otimes_A(M\otimes_A\mathcal{A}))\otimes_A\mathcal{A},X)\\
  &={\operatorname{Hom}}_A((B^{\otimes_An}\otimes_A\mathcal{A})\otimes_\mathcal{A}(M\otimes_A\mathcal{A}),X)\\
  &={\operatorname{Hom}}_A((B^{\otimes_An}\otimes_AM)\otimes_A\mathcal{A},X)
  ={\operatorname{Hom}}_A(B^{\otimes_An}\otimes_AM,X).
\end{aligned}
\]
:::

另外，$\widetilde{\mathsf{AnRing}}$ 与 $\mathsf{AnRing}$ 都有任意余极限。

::: proposition {@解析环余极限}
$\widetilde{\mathsf{AnRing}}$ 有任意余极限，即底环取余极限，
模范畴取为那些忘却到各个底环上都落入相应模范畴者构成的满子范畴。
于是 $\mathsf{AnRing}$ 也有任意余极限，即在 $\widetilde{\mathsf{AnRing}}$
中取完之后作完备化。筛余极限可具体描述为
$\operatornamewithlimits{colim}_i\mathcal{A}_i=(\operatornamewithlimits{colim}_i\underline{\mathcal{A}_i},\operatornamewithlimits{colim}_i\mathcal{A}_i[-])$，
从而完备解析 $\mathbb{E}_\infty$-环的筛余极限仍完备。我们和环论中一样，
用 $-\otimes_--$ 表示解析 $\mathbb{E}_\infty$-环的推出。
:::

::: proof
由 @模范畴判别 立得关于一般余极限的断言，
其中左伴随为超限迭代每一个分量上的左伴随，再重复可数次。至于筛余极限，
令 $\mathcal{A}=\operatornamewithlimits{colim}_i\mathcal{A}_i$，
需要证 $\mathcal{A}[S]=\operatornamewithlimits{colim}_i\mathcal{A}_i[S]$。
令 $\mathcal{A}'_i$ 为解析 $\mathbb{E}_\infty$-环，底环为 $\underline{\mathcal{A}}$，
解析结构为 $\mathcal{A}_i$ 沿着 $\underline{\mathcal{A}_i}\to\underline{\mathcal{A}}$ 基变换来。
则一般地 $\mathcal{A}=\operatornamewithlimits{colim}_i\mathcal{A}'_i$，
在 $\mathsf{An}(\underline{\mathcal{A}})$ 中。
$\mathsf{An}(\underline{\mathcal{A}})$ 是偏序集，其上筛余极限实际上是滤余极限，
从而不难看出
$\mathcal{A}[S]=\operatornamewithlimits{colim}_i\mathcal{A}'_i[S]=\operatornamewithlimits{colim}_i(\mathcal{A}_i[S]\otimes_{\underline{\mathcal{A}_i}}\underline{\mathcal{A}})$。
剩下的事情就与凝聚态数学没有关系了，是以下一般命题的推论。
:::

::: proposition
设 $(A_i,M_i)_{i\in I}$ 是筛图表，其中 $A_i$ 是 $\mathbb{E}_1$-或 $\mathbb{E}_\infty$-环，
$M_i$ 是左 $A_i$ 模。令 $A=\operatornamewithlimits{colim}_iA_i$，则在 $\mathsf{Sp}$ 中有
$\operatornamewithlimits{colim}_iM_i=\operatornamewithlimits{colim}_i(A\otimes_{A_i}M_i)$；
特别地，等号左边是左 $A$ 模。
:::

::: proof
对左模 $\infty$-算畴 $\mathsf{LM}^\otimes$ 用 [@HA, 3.2.3.1]
即得结论。$\mathsf{LM}^\otimes$ 的定义在 [@HA,
4.2.1.7]，$\mathbb{E}_\infty$-环情形在 4.5.1.6。
:::

以下命题说明模范畴就是解析 $\mathbb{E}_\infty$-环的本体。离散情形的命题就是
[@HA, 7.1.2.7] 第一句话。我相信整个 [@HA, 7.1.2.7]
都有凝聚态版本：对 $0\le k\le\infty$，任意 $\mathsf{CondAni}$-充实的
$\mathbb{E}_k$-幺半稳定无穷范畴，如有任意余极限、为 $\mathsf{CondAni}$-余幂、
$\{S\otimes\mathbb{1}\}_{S\in\mathsf{ExDisc}}$ 是投射生成元组，其中
$\mathbb{1}$ 是幺对象，则它是完备解析 $\mathbb{E}_{k+1}$-环的导出范畴，
且 $\mathsf{CondAni}$-充实、幺半的左伴随对应于环同态。换言之，
此种 $\mathsf{CondAni}$-充实 $\mathbb{E}_k$-幺半稳定无穷范畴以左伴随作为映射构成的范畴与完备解析
$\mathbb{E}_{k+1}$-环的范畴等价。

::: proposition {@映射重构}
对 $\mathcal{A},\mathcal{B}\in\mathsf{AnRing}$，
$$
{\operatorname{Hom}}_{\mathsf{AnRing}}(\mathcal{A},\mathcal{B})=\operatorname{Fun}^{L,\otimes}_{\mathsf{CondAni}}(\mathsf{D}_{(\ge0)}(\mathcal{A}),\mathsf{D}_{(\ge0)}(\mathcal{B})),
$$
其中等号右边的含义是模范畴或导出范畴之间
$\mathsf{CondAni}$-充实、幺半的左伴随函子。
:::

::: proof
如有同态 $f\colon\mathcal{A}\to\mathcal{B}$，自然有左伴随 $-\otimes_\mathcal{A}\mathcal{B}$。
反过来如有满足上面条件的左伴随 $F$，则由于 $\underline{\mathcal{A}},\underline{\mathcal{B}}$
分别是两个范畴的幺元，而 $F$ 是 $\mathsf{CondAni}$-充实幺半函子，
即得底环同态 $\underline{f}\colon\underline{\mathcal{A}}\to\underline{\mathcal{B}}$。
由于 $\mathsf{D}_{\ge0}(\mathcal{A})$ 是 $\mathsf{CondAni}$-[[余幂]]的，
余幂结构由 $X\otimes-=\mathcal{A}[X]\otimes_\mathcal{A}-$ 给出，而充实的左伴随保持余幂，
故 $F(\mathcal{A}[X])=\mathcal{B}[X]$。于是有交换图表
\[
\begin{tikzcd}
  \mathsf{D}_{(\ge0)}(\mathcal{A})\ar[r,"F"]&\mathsf{D}_{(\ge0)}(\mathcal{B})\\
  \mathsf{D}_{(\ge0)}(\underline{\mathcal{A}})\ar[u,"-\otimes_{\underline{\mathcal{A}}}\mathcal{A}"]\ar[r,"\underline{f}^*"']&\mathsf{D}_{(\ge0)}(\underline{\mathcal{B}})\ar[u,"-\otimes_{\underline{\mathcal{B}}}\mathcal{B}"']
\end{tikzcd}
\]
整个图表取右伴随可得 $\underline{f}_*$ 把 $\mathcal{B}$ 模打到 $\mathcal{A}$ 模，
这就得到解析环同态 $f\colon\mathcal{A}\to\mathcal{B}$，
使函子 $F$ 为 $-\otimes_\mathcal{A}\mathcal{B}$。
:::

最后证明解析环结构只依赖于 $\pi_0$。

::: proposition {@拓扑不变性}
对凝聚态 $\mathbb{E}_\infty$-环 $A$，$A$ 的解析结构一一对应于
$\pi_0A$ 的解析结构，即
$-\otimes_A\pi_0A\colon\mathsf{An}(A)\to\mathsf{An}(\pi_0A)$
是范畴等价；事实上解析结构由其模范畴的心作为
$\mathsf{Mod}(\pi_0A)$ 的子范畴所决定，且此心被该等价保持。
所以如 $A\to B$ 诱导 $\pi_0$ 的同构，则
$-\otimes_AB\colon\mathsf{An}(A)\to\mathsf{An}(B)$ 是范畴等价。
:::

::: proof
由 @解析环基本定理 最后一段，只要给定了模范畴的心，
模范畴本身就确定了，再由伴随函子的唯一性，解析结构也就确定了。
只是由于 @模范畴判别 的[条件 3](@左伴随条件)
比较难以转化成关于心的条件，我们不像陈述 @模范畴判别
一样陈述本命题。

来作 $-\otimes_A\pi_0A$ 的逆。对 $\pi_0A$ 的解析结构 $\mathcal{A}_0$，
定义 $\mathcal{D}=\{X\in\mathsf{D}_{\ge0}(A)\mid\forall i\in\mathbb{N},\,
  \pi_i(X)\in\mathsf{D}^\hearts(\mathcal{A}_0)\}$，我们先证明其满足 @模范畴判别 的条件。由于 $\mathsf{D}^\hearts(\mathcal{A}_0)$
对极限、余极限、扩张封闭，$\mathcal{D}$ 满足[条件 1](@封闭性条件)。
由于 $\underline{\operatorname{Hom}}_{\mathbb{S}}(\mathbb{S}[S],-)$ 为 $t$-正合，
$\mathcal{D}$ 也满足条件
[2](@凝聚态条件)。只剩作出 $\mathcal{D}\subset\mathsf{D}_{\ge0}(A)$
的左伴随。由于 $A[S]$ 生成 $\mathsf{D}_{\ge0}(A)$，只需对
$A[S]$ 作，
也就是要找 $M\in\mathcal{D}$ 使得 ${\operatorname{Hom}}_A(M,-)={\operatorname{Hom}}_A(A[S],-)$
在 $\mathcal{D}$ 上成立。记 $\mathcal{D}_n=\mathcal{D}\cap\mathsf{D}_{[0,n]}(A)$，我们先归纳找
$M_n\in\mathcal{D}_n$ 使得 ${\operatorname{Hom}}_A(M_n,-)={\operatorname{Hom}}_A(A[S],-)$
在 $\mathcal{D}_n$ 上成立。由于 $\mathcal{D}_0=\mathsf{D}^\hearts(\mathcal{A}_0)$，
$M_0=\pi_0\mathcal{A}_0[S]$ 显然满足要求。设 $M_n$ 已经找出，则其自带映射
$A[S]\to M_n$。作
$$
N_n=\operatorname{cofib}(A[S]\to M_n),\,N'_n=\tau_{\le n+1}(N_n\otimes_A\mathcal{A}_0),\,
M_{n+1}=\operatorname{fib}(M_n\to N'_n),
$$
我们来证明 $M_{n+1}$ 满足要求。上面的构造自带映射
$A[S]\to M_{n+1}\to M_n$。由 $M_n$ 满足的条件，不难发现
$\tau_{\le n}N'_n=0$，即 $N'_n$ 集中在 $n+1$ 处，于是
$\tau_{\le n}M_{n+1}=M_n$。又由 $N'_n$ 的定义知其属于 $\mathcal{D}$，
于是 $M_{n+1}\in\mathcal{D}_{n+1}$。
所以，${\operatorname{Hom}}_A(M_{n+1},-)={\operatorname{Hom}}_A(A[S],-)$ 在 $\mathcal{D}_n$
上已经成立。故要验证 $M_{n+1}$ 满足要求，只剩对集中在 $n+1$
的 $X\in\mathcal{D}_{n+1}$ 验证。此时由 $N_n$ 的取法有纤维列
$$
{\operatorname{Hom}}_A(N_n,X)\to{\operatorname{Hom}}_A(M_n,X)\to{\operatorname{Hom}}_A(A[S],X);
$$
由于 $X\in\mathcal{D}$ 且集中在 $n+1$ 处，它是 $\mathcal{A}_0$ 模，于是
$$
{\operatorname{Hom}}_A(N_n,X)={\operatorname{Hom}}_A(N_n\otimes_A\mathcal{A}_0,X)={\operatorname{Hom}}_A(N'_n,X);
$$
又由 $M_{n+1}$ 的取法有纤维列
$$
{\operatorname{Hom}}_A(N'_n,X)\to{\operatorname{Hom}}_A(M_n,X)\to{\operatorname{Hom}}_A(M_{n+1},X);
$$
综上即得 ${\operatorname{Hom}}_A(M_{n+1},X)={\operatorname{Hom}}_A(A[S],X)$，从而
$M_{n+1}$ 满足要求。这样我们便有一列 $M_n\in\mathcal{D}_n$，满足
$\tau_{\le n}M_{n+1}=M_n$，且 ${\operatorname{Hom}}_A(M_n,-)={\operatorname{Hom}}_A(A[S],-)$
在 $\mathcal{D}_n$ 上成立。令 $M=\lim_nM_n$，则对每个 $n$，
在 $\mathcal{D}_n$ 上有
$$
{\operatorname{Hom}}_A(M,-)={\operatorname{Hom}}_A(\tau_{\le n}M,-)={\operatorname{Hom}}_A(M_n,-)={\operatorname{Hom}}_A(A[S],-);
$$
由于每个模都是其截断的极限，上式也就在整个 $\mathcal{D}$ 上成立，
就得到了想要的左伴随。

于是由 @模范畴判别，$\mathcal{D}$ 定义了 $A$ 上解析环结构，
记作 $\widetilde{\mathcal{A}_0}$。欲证 $\mathcal{A}_0\mapsto\widetilde{\mathcal{A}_0}$
给出 $\mathcal{A}\mapsto\mathcal{A}\otimes_A\pi_0A$ 的逆，只需注意到两个函子都不改变模范畴的心，
从而两个复合都不改变模范畴，所以都是恒同。命题得证。
:::

其可能有拓扑不变性：如果 $A\to B$ 对每个 $S\in\mathsf{ExDisc}$
诱导的环同态 $\pi_0A(S)\to\pi_0B(S)$ 都在谱上是万有同胚
（或者可能是对整个凝聚态环提个更强的条件），那么
$-\otimes_AB\colon\mathsf{An}(A)\to\mathsf{An}(B)$ 是等价。
[@analytic] 上处理了幂零嵌入情形，但一般的万有同胚我尚不清楚。

::: remark
称解析 $\mathbb{E}_\infty$-环 $\mathcal{A}$ 静止，指 $\underline{\mathcal{A}}$ 静止，
且对 $S\in\mathsf{ExDisc}$ 都有 $\mathcal{A}[S]$ 静止。不难发现静止解析
$\mathbb{E}_\infty$-环无非就是第 @解析环 节中定义的解析环。
由 @解析环余极限 容易看出静止解析
$\mathbb{E}_\infty$-环的滤余极限仍然静止，但张量积（即推出）未必。
注意 @拓扑不变性 并不表明解析结构本质是静止的，
因为静止凝聚态环上可以有不静止的解析结构。为简洁起见，
我们常常松散地使用“解析环”一词，
即其根据上下文可能指解析 $\mathbb{E}_\infty$-环或者解析环。
想明确一些时使用“解析 $\mathbb{E}_\infty$-环”和“静止解析环”。
:::

```terms
连合:
  en: connective
筛:
  en: sifted
心:
  en: heart
算畴:
  en: operad
```
