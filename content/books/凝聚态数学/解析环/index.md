---
title: 解析环
---

{@解析环}

解析环是前述固态化理论的封装、推广，是 Huber 环对的正确版本。
事实上它甚至可以处理 Archimedes 的解析几何。

::: definition
**预解析环** $\mathcal{A}$ 指三元组 $(\underline{\mathcal{A}},\mathcal{A}[-],\alpha)$，
其中 $\underline{\mathcal{A}}$ 为凝聚态交换环，
$\mathcal{A}[-]\colon\mathsf{ExDisc}\to\mathsf{Mod}(\underline{\mathcal{A}})$ 为函子，
保持有限余极限，
$\alpha\colon\underline{\mathcal{A}}[-]\to\mathcal{A}[-]$ 为自然变换。
其中 $\mathsf{Mod}(\underline{\mathcal{A}})$ 指（凝聚态）$\underline{\mathcal{A}}$
模范畴，$\underline{\mathcal{A}}[-]$ 指自由 $\underline{\mathcal{A}}$ 模。
$\underline{\mathcal{A}}$ 称为**底环**，$\mathcal{A}[-]$ 称为**自由
$\mathcal{A}$ 模**。在 $\alpha$ 容易看出时常将其省略。
预解析环的同态有显然的定义。
:::

::: notation {@一般自由模}
对凝聚态集 $X$，可用极不连通空间的无交并超覆盖之，
然后作用 $\mathcal{A}[-]$，其中无穷无交并的 $\mathcal{A}[-]$ 直接定义为无穷直和，
就得到一个 $\underline{\mathcal{A}}$ 链复形，
记作 $\mathcal{A}[X]\in\mathsf{D}_{\ge0}(\underline{\mathcal{A}})$，
也可称为**自由 $\mathcal{A}$ 模**。这良定，因为它无非是
$\mathcal{A}[-]\colon\mathsf{ExDisc}\to\mathsf{D}(\underline{\mathcal{A}})$ 沿着
$\mathsf{ExDisc}\hookrightarrow\mathsf{Cond}$ 左 Kan 扩张。
:::

::: example {@预解析环例子}
1. {@平凡解析环} 对任意凝聚态环 $R$，$R=(R,R[-],\operatorname{id})$ 为预解析环。

2. $\mathbb{Z}_\blacksquare=(\mathbb{Z},\mathbb{Z}[-]^\blacksquare,-^\blacksquare)$ 为预解析环。

3. 一般地对于有限型 $\mathbb{Z}$ 代数 $R$，定义
   $R_\blacksquare[S]=\lim R[S_i]$，其中 $S=\lim S_i$，
   $S_i$ 有限，则 $R_\blacksquare=(R,R_\blacksquare[-])$ 为预解析环。

4. 对于有限型 $\mathbb{Z}$ 代数之间的映射 $R\to A$，
   $(A,R)_\blacksquare=(A,R_\blacksquare[-]\otimes_R A)$ 为预解析环。

5. 类似地，定义 $\mathbb{Z}_p[S]^\blacksquare=\lim_i\mathbb{Z}_p[S_i]
   =\lim_{n,i}\mathbb{Z}/p^n[S_i]$，则 $\mathbb{Z}_{p,\blacksquare}=(\mathbb{Z}_p,\mathbb{Z}_p[-]^\blacksquare)$
   为预解析环。

6. 类似地，$(\mathbb{Q}_p,\mathbb{Z}_p)_\blacksquare=
   (\mathbb{Q}_p,\mathbb{Z}_p[-]^\blacksquare\otimes_{\mathbb{Z}_p}\mathbb{Q}_p)$ 为预解析环。

7. {@死亡实数} 对 $0<p\le1$，定义 $\mathbb{R}_{\ell^p}[S]=
   \bigcup_{r>0}\lim_i\mathbb{R}[S_i]_{\ell^p\le r}$，
   则 $\mathbb{R}_{\ell^p}=(\mathbb{R},\mathbb{R}_{\ell^p}[-])$ 为预解析环。

8. {@正确实数} 对 $0<p\le1$，定义 $\mathbb{R}_{\ell^{<p}}[S]=
   \operatornamewithlimits{colim}_{q<p}\mathbb{R}_{\ell^q}[S]$，则
   $\mathbb{R}_{\ell^{<p}}=(\mathbb{R},\mathbb{R}_{\ell^{<p}}[-])$ 为预解析环。

:::

::: definition {@解析环定义}
**解析环** $\mathcal{A}$ 指满足如下条件的预解析环：对各项为一些
$\mathcal{A}[T]$，$T\in\mathsf{ExDisc}$ 的直和的右有界链复形 $C$，
以及 $S\in\mathsf{ExDisc}$，有
$$
R\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\mathcal{A}[S],C)=
R\underline{\operatorname{Hom}}_{\underline{\mathcal{A}}}(\underline{\mathcal{A}}[S],C).
$$
故由 @Abel-范畴抽象废话，满足以上条件的
$\underline{\mathcal{A}}$ 模构成 $\mathsf{Mod}(\underline{\mathcal{A}})$ 的满子范畴，
对极限、余极限、扩张皆封闭，称为 **$\mathcal{A}$ 模**，记为
$\mathsf{Mod}(\mathcal{A})$；满足以上条件的（不必右有界的）链复形构成
$\mathsf{D}(\underline{\mathcal{A}})$ 的满子范畴，对极限、余极限、扩张皆封闭，
记为 $\mathsf{D}(\mathcal{A})$；$\mathsf{D}(\mathcal{A})=\mathsf{D}_{\mathsf{Mod}(\mathcal{A})}
  (\underline{\mathcal{A}})\cong\mathsf{D}(\mathsf{Mod}(\mathcal{A}))$。含入函子
$\mathsf{Mod}(\mathcal{A})\hookrightarrow\mathsf{Mod}(\underline{\mathcal{A}})$ 与
$\mathsf{D}(\mathcal{A})\hookrightarrow\mathsf{D}(\underline{\mathcal{A}})$
都有左伴随，记作 $-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$ 与
$-\otimes_{\underline{\mathcal{A}}}^L\mathcal{A}$。

解析环同态指预解析环同态
$f\colon\mathcal{A}\to\mathcal{B}$，
满足 $\mathsf{Mod}(\mathcal{B})$ 中的东西作为 $\underline{\mathcal{A}}$
模都在 $\mathsf{Mod}(\mathcal{A})$ 中；显然这等价于对任意 $S\in\mathsf{ExDisc}$，
$\mathcal{B}[S]\in\mathsf{Mod}(\mathcal{A})$。
此时有自然的忘却函子 $\mathsf{Mod}(\mathcal{B})\to\mathsf{Mod}(\mathcal{A})$，
$\mathsf{D}(\mathcal{B})\to\mathsf{D}(\mathcal{A})$，都记作 $f_*$；它有左伴随
$-\otimes_{\underline{\mathcal{A}}}^L\underline{\mathcal{B}}
  \otimes_{\underline{\mathcal{B}}}^L\mathcal{B}$，简作 $-\otimes_\mathcal{A}^L\mathcal{B}$，
也记作 $f^*\colon\mathsf{Mod}(\mathcal{A})\to\mathsf{Mod}(\mathcal{B})$，
$f^*\colon\mathsf{D}(\mathcal{A})\to\mathsf{D}(\mathcal{B})$。
由 @预解析环例子 的 @平凡解析环，有自然的解析环同态
$\underline{\mathcal{A}}\to\mathcal{A}$，记号 $-\otimes_{\underline{\mathcal{A}}}^L\mathcal{A}$
便是 $-\otimes_\mathcal{A}^L\mathcal{B}$ 的特殊情况。
:::

常把解析环想成某种完备理论，$\mathcal{A}$ 模即 $\underline{\mathcal{A}}$ 模中完备者，
$-\otimes_{\underline{\mathcal{A}}}\mathcal{A}$ 即完备化。依 @一般自由模，不难发现
$\underline{\mathcal{A}}[X]\otimes_{\underline{\mathcal{A}}}\mathcal{A}=\mathcal{A}[X]$。
类似地 $\mathcal{A}[X]\otimes_\mathcal{A}\mathcal{B}=\mathcal{B}[X]$。

::: example
@预解析环例子 中除 @死亡实数 之外都是解析环。
这之中除 @正确实数 之外都不算难证。
:::

$\mathsf{Mod}(\mathcal{A})$ 和 $\mathsf{D}(\mathcal{A})$ 都有对称幺半结构，
记作 $-\otimes_\mathcal{A}-$ 与 $-\otimes_\mathcal{A}^L-$。
依 @一般自由模，$\mathcal{A}[X]\otimes_\mathcal{A}^L\mathcal{A}[Y]=\mathcal{A}[X\times Y]$。

::: -remark [警告]
一般情况下 $-\otimes_\mathcal{A}^L-$ 未必是 $-\otimes_\mathcal{A}-$ 的导出函子，
因极不连通空间的乘积不再极不连通。不过对本节讨论的环这都是导出函子。
这记号并不带来混淆，因为 $-\otimes_\mathcal{A}-$ 的导出函子没有意义。
:::

由 @巨大技术命题，$\mathbb{Z}_\blacksquare$ 是解析环。
本节主要目标是证明如下定理。

::: theorem {@一般环固态化}
对 $\mathbb{Z}$ 上有限型环之间的映射 $R\to A$，
$(A,R)_\blacksquare$ 为解析环。
不仅如此，对 $S\in\mathsf{ProFin}$，复形 $(A,R)_\blacksquare[S]$
都集中在 $0$ 处，且等于 $R^I\otimes_RA$ 对某个集合 $I$；
它们紧投射，生成 $\mathsf{Mod}((A,R)_\blacksquare)$。
:::

于是我们称一个 $R$ 模为 **$R$-固态**，指它是 $R_\blacksquare$ 模，
链复形也是。

::: exercise {@固态自由模}
对 $\mathsf{ProFin}\ni S=\lim S_i$，$S_i\in\mathsf{Fin}$，
$C(S,\mathbb{Z})=\mathbb{Z}^{\oplus I}$，证明 $\lim_i R[S_i]=R^I$。
:::

::: exercise {@满射化归}
如 $R\twoheadrightarrow S\to A$，证明 $(A,R)_\blacksquare=(A,S)_\blacksquare$。
即 $(A,R)_\blacksquare$ 只依赖于 $\operatorname{im}(R\to A)$。
特别地，如 $R\twoheadrightarrow A$，则 $(A,R)_\blacksquare=A_\blacksquare$。
事实上只要 $R\to S$ 有限就有 $(A,R)_\blacksquare=(A,S)_\blacksquare$。
:::

::: exercise {@解析环化归}
证明只要 $R_\blacksquare$ 解析，就有 $(A,R)_\blacksquare$ 解析，且
$\mathsf{Mod}((A,R)_\blacksquare)$ 与 $\mathsf{D}((A,R)_\blacksquare)$
分别是 $\mathsf{Mod}(A)$ 与 $\mathsf{D}(A)$ 中 $R$-固态
的对象组成的满子范畴。从而将 @一般环固态化
化归到 $A=R=\mathbb{Z}[x_1,\ldots,x_n]$ 情形。
:::

由 @紧投射固态交换群、@CHaus的自由模的固态化，
$A=R=\mathbb{Z}$ 时定理成立。所以只需证：

::: proposition {@一元多项式最终证明}
只要 $A_\blacksquare$ 解析，且对 $S\in\mathsf{ProFin}$，
$A_\blacksquare[S]=A^I$，是紧投射生成元，那么对
$B=A[x]$ 也成立一样的事情。
:::

::: proof
注意条件推出 $A^I\otimes_{A_\blacksquare}A^J=A^{I\times J}$
以及对离散 $A$ 模 $M$，$R\underline{\operatorname{Hom}}_A(A^I,M)=M^{\oplus I}$。

定义 $B_\infty=A((x^{-1}))=A[[t]][x]/(1-xt)$，则
$B_\infty/B=x^{-1}A[[x^{-1}]]$ 是紧投射 $A_\blacksquare$ 模，
且由于 $A[[t]][x]=A[[t]]\otimes_A B$ 是紧投射 $(B,A)_\blacksquare$ 模，
$B_\infty$ 是 $\mathsf{D}((B,A)_\blacksquare)$ 的紧对象。
$B_\infty$ 将起到 @巨大技术命题 中 $\mathbb{R}$ 所起的作用，
但此处比 @巨大技术命题 简明得多。

先证明 $B_\infty\otimes_{(B,A)_\blacksquare}^LB_\infty=B_\infty$。
依定义左边即
$$
A[[t]][x]/(1-xt)\otimes_{A[x]}^L
A[[s]][x]/(1-xs)\otimes_A^LA_\blacksquare=
(A[[t]][x]/(1-xt)\otimes_A^LA[[s]])/(1-xs)\otimes_A^LA_\blacksquare
=(A[[t]]\otimes_A^LA[[s]])[x]/(1-xt,1-xs)\otimes_A^LA_\blacksquare,
$$
而 $-\otimes_A^LA_\blacksquare$ 与余极限交换，又由
$A^I\otimes_{A_\blacksquare}A^J=A^{I\times J}$，故上式即
$$
(A[[t]]\otimes_{A_\blacksquare}A[[s]])[x]/(1-xt,1-xs)
=A[[t,s]][x]/(1-xt,1-xs)=A[[t]][x]/(1-tx),
$$
即 $B_\infty\otimes_{(B,A)_\blacksquare}^LB_\infty=B_\infty$。
$B_\infty$ 可想成 $\infty\in\mathbf{P}^1_A$ 的去心形式邻域，
是 $B_\blacksquare$ 的某种补集。

由 @固态自由模，为证 $B_\blacksquare$ 解析，只需对各项为一些
$B$ 的乘积的直和的右有界链复形 $C$，以及 $S\in\mathsf{ExDisc}$，
有
$$
R\underline{\operatorname{Hom}}_B(B_\blacksquare[S],C)=R\underline{\operatorname{Hom}}_B(B[S],C).
$$
由 @解析环化归，$(B,A)_\blacksquare$ 解析，故右边等于
$R\underline{\operatorname{Hom}}_B(A_\blacksquare[S]\otimes_AB,C)$。再用 @固态自由模，
只需证
$R\underline{\operatorname{Hom}}_B(B^I,C)=R\underline{\operatorname{Hom}}_B(A^I\otimes_AB,C)$，即
$$
R\underline{\operatorname{Hom}}_B(\operatorname{coker}(A^I\otimes_AB\to B^I),C)=0.
$$
再用 $A^I\otimes_{A_\blacksquare}A^J=A^{I\times J}$，有
$$
A^I\otimes_{A_\blacksquare}B_\infty/B=
A^I\otimes_{A_\blacksquare}x^{-1}A[[x^{-1}]]
=(x^{-1}A[[x^{-1}]])^I=(B_\infty/B)^I,
$$
从而 $\operatorname{coker}(A^I\otimes_AB\to B^I)=
  \operatorname{coker}(A^I\otimes_{A_\blacksquare}B_\infty\to B_\infty^I)$
为 $B_\infty$ 模。于是只需证

```math {@B∞打不到固态B模}
R\underline{\operatorname{Hom}}_B(B_\infty,C)=0.
```

由于 $B_\infty=\operatorname{coker}(1-xt\colon A[[t]][x]\to A[[t]][x])$，
这相当于验证映射
$$
1-xt\colon R\underline{\operatorname{Hom}}_A(A[[t]],C)\to R\underline{\operatorname{Hom}}_A(A[[t]],C)
$$
是同构。由于 $A[[t]]$ 是紧投射 $A_\blacksquare$ 模，上式关于
$C$ 与余极限交换，于是立刻化归到 $C=B^I$，于是又化归到 $C=B$。
此时由 $B$ 离散，
能够具体算出 $R\underline{\operatorname{Hom}}_A(A[[t]],B)=B[t^{-1}]$，其中
$f\in B[t^{-1}]$ 把 $g\in A[[t]]$ 打到 $fg$
的常数项，$t$ 在 $B[t^{-1}]$ 的作用是乘以 $t$ 然后舍掉正次项。
这样 $xt$ 便局部幂零，即 $B[t^{-1}]$ 的每个元素都被 $xt$
的某次方零化。于是 $1-xt$ 是同构。

至此证明了 $B_\blacksquare$ 解析，也顺便证明了 $B$
本身是 $B$-固态的。尚需对 $S\in\mathsf{ProFin}$
证 $B_\blacksquare[S]=B^I$。由 $B$ 本身 $B$-固态，得 $B^I$ 也是。而
$$
B_\blacksquare[S]=(B,A)_\blacksquare[S]\otimes_{(B,A)_\blacksquare}^LB_\blacksquare
=A^I\otimes_AB\otimes_{(B,A)_\blacksquare}^LB_\blacksquare,
$$
故只需证
$$
\operatorname{coker}(A^I\otimes_AB\to B^I)\otimes_{(B,A)_\blacksquare}^LB_\blacksquare=0.
$$
由于这个 $\operatorname{coker}$ 是 $B_\infty$ 模，由以下命题立得结论。
:::

::: proposition {@B∞性质}
记号同上。对于 $(B,A)_\blacksquare$ 模或链复形 $M$，
$M\otimes_{(B,A)_\blacksquare}^LB_\blacksquare=0$ 当且仅当
$M$ 是 $B_\infty$ 模。此时 $M$ 的 $B_\infty$ 模结构唯一；
事实上，$(B,A)_\blacksquare$ 模中是 $B_\infty$ 模者关于 $B_\infty$
模同态构成的范畴是 $(B,A)_\blacksquare$ 模范畴之满子范畴，含入函子具有左伴随
$B_\infty\otimes_{(B,A)_\blacksquare}^L-$。
:::

::: proof
唯一性比较容易，先证。
由于 $B_\infty\otimes_{(B,A)_\blacksquare}B_\infty=B_\infty$，
如 $M$ 是有 $B_\infty$ 模结构的 $(B,A)_\blacksquare$ 模，那么
$M=M\otimes_AA_\blacksquare$ 为一些
$B_\infty[S]\otimes_A^LA_\blacksquare=
  B_\infty\otimes_{(B,A)_\blacksquare}^L(B,A)_\blacksquare[S]$，
$S\in\mathsf{ExDisc}$ 的平移的余极限，故有
$B_\infty\otimes_{(B,A)_\blacksquare}^LM=M$。
于是对这样的模 $M,N$，
$$
R{\operatorname{Hom}}_{B_\infty}(M,N)=R{\operatorname{Hom}}_{B_\infty}
(B_\infty\otimes_{(B,A)_\blacksquare}^LM,N)=
R{\operatorname{Hom}}_{(B,A)_\blacksquare}(M,N).
$$
对 $\operatorname{id}_M$ 用上式即得唯一性。

再证“当”。如 $M$ 是 $B_\infty$ 模，则上一段已经证明
$M=M\otimes_{(B,A)_\blacksquare}^LB_\infty$，故只需证
$$
B_\infty\otimes_{(B,A)_\blacksquare}^LB_\blacksquare=0.
$$
为此只需证对任意 $C\in\mathsf{D}(B_\blacksquare)$，
$R{\operatorname{Hom}}_B(B_\infty,C)=0$。注意这里 $R{\operatorname{Hom}}_B$ 也是
$R{\operatorname{Hom}}_{(B,A)_\blacksquare}$，而定理的证明中已经说 $B_\infty$
是 $\mathsf{D}((B,A)_\blacksquare)$ 的紧对象，故这个 $R{\operatorname{Hom}}$
与余极限交换，于是可设 $C$ 右有界。这样就可以用一些
$B_\blacksquare[S]$，$S\in\mathsf{ExDisc}$ 的直和来消解 $C$，
便化归到已证式 @B∞打不到固态B模。

最后证“仅当”。实际上我们来证明对一般的 $M$，
$\operatorname{cofib}(M\to M\otimes_{(B,A)_\blacksquare}^LB_\blacksquare)$ 是
$B_\infty$ 模。由于 $M$ 是 $B_\infty$ 模当且仅当
$M=M\otimes_{(B,A)_\blacksquare}^LB_\infty$，
该条件与余极限交换，而 $M$ 为一些
$(B,A)_\blacksquare[S]=A^I\otimes_AB$，$S\in\mathsf{ExDisc}$
的平移的余极限，故只需证 $M=A^I\otimes_AB$ 的情形。
此时由于 $\operatorname{coker}(A^I\otimes_AB\to B^I)$ 是 $B_\infty$
模，上一段已经证明其 $B$-固态化为 $0$，而 $B^I$ 为 $B$-固态，
故 $B^I$ 就是 $A^I\otimes_AB$ 的 $B$-固态化，
即 $A^I\otimes_AB\otimes_{(B,A)_\blacksquare}^LB_\blacksquare=B^I$。
从而这个 $\operatorname{cofib}$ 就是 $\operatorname{coker}(A^I\otimes_AB\to B^I)$，
是 $B_\infty$ 模。
:::

这样便证明了 @一般环固态化。

::: remark {@蹩脚表达}
以后介绍解析环余极限之后便可引入一般的 $(A,R)_\blacksquare$。
上面的蹩脚表达“$(B,A)_\blacksquare$ 模中是 $B_\infty$ 模者”实际上就是
$(B_\infty,A)_\blacksquare$ 模。
:::

::: exercise
证明对 $\mathbb{Z}$ 上有限型环对的同态 $f\colon(A,R)\to(B,S)$，
有自然的解析环同态 $f\colon(A,R)_\blacksquare\to(B,S)_\blacksquare$，
并描述伴随对 $(f^*,f_*)$。
:::

```terms
解析:
  en: analytic
预解析:
  en: pre-analytic
```
