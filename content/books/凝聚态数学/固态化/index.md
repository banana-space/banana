---
title: 固态化
---

至此我们发展了凝聚态交换群的基本理论。常见的拓扑交换群例如 $\mathbb{R}$、
$\mathbb{Z}_p$、$\mathbb{Q}_p$ 等都可自然看成凝聚态交换群，且确有
$$
\mathbb{Z}_p=\lim_n\mathbb{Z}/p^n,\,\mathbb{Q}_p=\mathbb{Z}_p[1/p]=\operatornamewithlimits{colim}_np^{-n}\mathbb{Z}_p.
$$
但该理论不太解析，即
$$
\mathbb{R}\otimes\mathbb{Z}_p\ne0,\,\mathbb{Z}_p\otimes\mathbb{Z}_\ell\ne0,
$$
都是大而无章的群。固态化是个非 Archimedes 的完备化，
给非 Archimedes 解析理论提供了基础。把它记作 $^\blacksquare$，则将会有
$$
\mathbb{R}^\blacksquare=0,\,(\mathbb{Z}_p\otimes\mathbb{Z}_p)^\blacksquare=\mathbb{Z}_p,\,
(\mathbb{Z}_p\otimes\mathbb{Z}_\ell)^\blacksquare=0.
$$
以下发展这一理论，过程中需要用到上一节所算出的结果。
本节应是全文最硬核之处，对细节不感兴趣的读者可仅读结论。

::: definition
对 $\mathsf{ProFin}\ni S=\lim S_i$，$S_i\in\mathsf{Fin}$，
定义**固态自由（交换）群**
$$
\mathbb{Z}[S]^\blacksquare=\lim\mathbb{Z}[S_i].
$$
:::

事实上这可以具体求出。$\mathbb{Z}[S_i]$ 无非是有限秩自由交换群，
是 $S_i$ 上整值函数群 $C(S_i,\mathbb{Z})$ 的对偶。于是

$$
\mathbb{Z}[S]^\blacksquare=\lim\mathbb{Z}[S_i]=\lim\underline{\operatorname{Hom}}(C(S_i,\mathbb{Z}),\mathbb{Z})
=\underline{\operatorname{Hom}}(\operatornamewithlimits{colim} C(S_i,\mathbb{Z}),\mathbb{Z})=\underline{\operatorname{Hom}}(C(S,\mathbb{Z}),\mathbb{Z}).
$$

而

::: proposition {@奇妙超限归纳}
对 $S\in\mathsf{ProFin}$，存在集合 $I$，
$$
C(S,\mathbb{Z})=\mathbb{Z}^{\oplus I}.
$$
:::

这个结论看上去很合理，证明实则还比较奇妙。注意如果
$S=S'\times\{0,1\}$，$\{f'_i\}_{i\in I'}$ 为 $C(S',\mathbb{Z})$
的基，记 $f_i=f'_i\circ\operatorname{pr}_1$，$e=\operatorname{pr}_2$，
则 $\{f_i\}_{i\in I}\cup\{ef_i\}_{i\in I}$ 为 $C(S,\mathbb{Z})$
的基。以下证明是这一简单想法的推广与迭代。

::: proof
显然有限集都单射入集合 $2=\{0,1\}$ 的一些乘积，故存在序数
$\alpha$，$S\hookrightarrow2^\alpha$。对 $i\in\alpha$ 记 $e_i\in C(S,\mathbb{Z})$
为整值函数 $S\hookrightarrow2^\alpha\twoheadrightarrow2=\{0,1\}\subset\mathbb{Z}$，
其中第二个箭头为往第 $i$ 个分量的投影。再对 $i_1,\ldots,i_r\in \alpha$
记 $e_{i_1\cdots i_r}=\prod_{j=1}^re_{i_j}$。

我们用 $\alpha$ 的良序将 $C(S,\mathbb{Z})$ 中形如
$e_{i_1\cdots i_r}$，$r\ge0$，$i_1>\cdots>i_r$，
的元素以 $(i_1,\ldots,i_r)$ 的字典序排良序。
具体来说，两个这样的串相比时，如一个串为空则它较小，否则比较第一个元素，
第一个元素小者较小，相同时比较后面的。
然后删去这些元素之中能表示为字典序更小者之线性组合者，
剩下的元素组成的集合记为 $I$。以下证明 $I$ 是 $C(S,\mathbb{Z})$ 的基。

对 $\alpha$ 归纳，即假设对序数 $\beta<\alpha$，
相应的命题已经成立。记 $S_\beta=
  \operatorname{im}(S\hookrightarrow2^\alpha\twoheadrightarrow2^\beta)$，
$I_\beta$ 为 $I$ 中下标都小于 $\beta$ 者，则由归纳假设，
$I_\beta$ 是 $S_\beta$ 的基。所以如果 $\alpha$ 为极限序数，
$S=\lim_{\beta<\alpha}S_\beta$，
$I=\bigcup_{\beta<\alpha}I_\beta$ 就是
$C(S,\mathbb{Z})=\operatornamewithlimits{colim}_{\beta<\alpha}C(S_\beta,\mathbb{Z})$ 的基。

$\alpha=\beta+1$ 为后继序数的情况比较复杂。记
$p\colon S\twoheadrightarrow S_\beta$ 为投影，然后记
$S'_0=p(e_\alpha^{-1}(0))$，$S'_1=p(e_\alpha^{-1}(1))$，
$S'=S'_0\cap S'_1$。则 $S_\beta=S'_0\cup S'_1$，
$S\cong S'_0\sqcup S'_1$，于是 $C(S,\mathbb{Z})$ 中由
$C(S_\beta,\mathbb{Z})$ 拉回的那些元素恰为在 $S$ 里面的两份 $S'$
中一样的元素，即有短正合列
$$
0\to C(S_\beta,\mathbb{Z})\to C(S,\mathbb{Z})\to C(S',\mathbb{Z})\to0,
$$
其中满射为 $S$ 上函数限制在 $S'_1$ 里那份 $S'$
减去其限制在 $S'_0$ 里那份 $S'$。
现在由归纳假设 $I_\beta$ 是 $C(S_\beta,\mathbb{Z})$ 的基。
对 $S'\hookrightarrow2^\beta$ 再用一次归纳假设，
即可发现 $I\setminus I_\beta$ 投影到 $C(S',\mathbb{Z})$
之后也是 $C(S',\mathbb{Z})$ 的一组基，这样就证完了。
:::

所以
$\mathbb{Z}[S]^\blacksquare=\underline{\operatorname{Hom}}(\mathbb{Z}^{\oplus I},\mathbb{Z})=\mathbb{Z}^I$。
反过来对任意 $I$ 都存在 $S$ 使 $\mathbb{Z}[S]^\blacksquare=\mathbb{Z}^I$：
对无穷集 $I$，取 $S$ 为 $I$ 的一点紧化即可。

将 $\mathbb{Z}[S]^\blacksquare$ 称作 $\mathbb{Z}[S]$ 的固态化。牢记固态化是一种完备化，
以下的定义便是合理的：

::: definition
称 $X\in\mathsf{CondAb}$ 固态，指对任意 $S\in\mathsf{ProFin}$，
$$
{\operatorname{Hom}}(\mathbb{Z}[S],X)={\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,X).
$$
称 $C\in\mathsf{D}(\mathsf{CondAb})$ 固态，指对任意 $S\in\mathsf{ProFin}$，
$$
R{\operatorname{Hom}}(\mathbb{Z}[S],C)=R{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,C).
$$
:::

先说明固态自由群确实是固态的。

::: proposition
对 $S,T\in\mathsf{ProFin}$，
$$
R{\operatorname{Hom}}(\mathbb{Z}[S],\mathbb{Z}[T]^\blacksquare)=R{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,\mathbb{Z}[T]^\blacksquare).
$$
:::

::: proof
设 $\mathbb{Z}[S]^\blacksquare=\mathbb{Z}^I$，$\mathbb{Z}[T]^\blacksquare=\mathbb{Z}^J$，则由于
$R{\operatorname{Hom}}$ 在第二个分量与乘积交换，只需证
$$
R{\operatorname{Hom}}(\mathbb{Z}[S],\mathbb{Z})=R{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,\mathbb{Z}).
$$
上式左边即 $R\Gamma(S,\mathbb{Z})$，由 @离散模的上同调
知它就是 $C(S,\mathbb{Z})=\mathbb{Z}^{\oplus I}$。于是要证
$$
\mathbb{Z}^{\oplus I}=R{\operatorname{Hom}}(\mathbb{Z}^I,\mathbb{Z}).
$$
为此考虑短正合列
$$
0\to\mathbb{Z}^I\to\mathbb{R}^I\to\mathbb{T}^I\to0,
$$
并由 @环面出发 和 @实数出发 计算
$$
R{\operatorname{Hom}}(\mathbb{R}^I,\mathbb{Z})=R{\operatorname{Hom}}_\mathbb{R}(\mathbb{R}^I,R{\operatorname{Hom}}(\mathbb{R},\mathbb{Z}))=0,
$$
$$
R{\operatorname{Hom}}(\mathbb{T}^I,\mathbb{Z})=\mathbb{Z}^{\oplus I}[-1],
$$
即得欲证，其中第一个等式是因为 $\mathbb{R}^I$ 是 $\mathbb{R}$ 模，用伴随性。
:::

::: -remark [警告]
这是在 $\mathsf{CondAb}$ 中取 ${\operatorname{Hom}}$，与经典竞赛题
$$
{\operatorname{Hom}}_{\mathsf{Ab}}(\mathbb{Z}^\omega,\mathbb{Z})=\mathbb{Z}^{\oplus\omega}
$$
毫无关系。
:::

事实上固态群的范畴表现得非常好：

::: theorem {@固态群}
以 $\mathsf{Solid}$ 记固态交换群在 $\mathsf{CondAb}$ 中的满子范畴，
则其对极限、余极限、扩张皆封闭。形如 $\mathbb{Z}^I$ 的群是其紧投射生成元。
其含入函子有左伴随，记作 $M\mapsto M^\blacksquare$，
是函子 $\mathbb{Z}[S]\mapsto\mathbb{Z}[S]^\blacksquare$ 的唯一保余极限的延拓。另外，
$\mathsf{D}(\mathsf{CondAb})$ 中的复形固态当且仅当其各阶同调群固态，
且 $\mathsf{D}(\mathsf{Solid})\subset\mathsf{D}_{\mathsf{Solid}}(\mathsf{CondAb})$
是范畴等价。$-^\blacksquare$ 有左导出 $-^{L\blacksquare}$，是
$\mathsf{D}(\mathsf{Solid})\subset\mathsf{D}(\mathsf{CondAb})$
的左伴随。
:::

在证它之前先集中把抽象废话处理掉。

::: proposition {@Abel-范畴抽象废话}
$\mathcal{A}$ 是被紧投射对象生成的余完备 Abel 范畴，
$\mathcal{A}_0\subset\mathcal{A}$ 是其一族紧投射生成元的满子范畴。
$F\colon\mathcal{A}_0\to\mathcal{A}$ 为加性函子，
附带自然变换 $\operatorname{id}_{\mathcal{A}_0}\to F$，
满足以下三条中某一条：

对 $a\in\mathcal{A}_0$，$C$ 为

1. {@余核条件} 形如 $Fb$ 的东西的直和之间映射的余核；

2. {@核条件} 形如 $Fb$ 的东西的直和之间映射的核；

3. {@链复形条件} 形如 $Fb$ 的东西的直和组成的右有界链复形；

自然映射 $R{\operatorname{Hom}}(Fa,C)\to R{\operatorname{Hom}}(a,C)$ 为同构。

定义
$$
\mathcal{A}_F=\{X\mid\forall a\in\mathcal{A}_0,\,{\operatorname{Hom}}(Fa,X)={\operatorname{Hom}}(a,X)\}
$$
为 $\mathcal{A}$ 的满子范畴，
$$
\mathsf{D}_F(\mathcal{A})=\{C\mid\forall a\in\mathcal{A}_0,\,R{\operatorname{Hom}}(Fa,C)=R{\operatorname{Hom}}(a,C)\}
$$
为 $\mathsf{D}(\mathcal{A})$ 的满子范畴，则：

$\mathcal{A}_F\subset\mathcal{A}$ 对极限、余极限、扩张皆封闭。形如 $Fa$，$a\in\mathcal{A}_0$
的对象是其紧投射生成元。其含入函子有左伴随 $L\colon\mathcal{A}\to\mathcal{A}_F$，
是 $F$ 的唯一保余极限的延拓。
另外，$\mathsf{D}_F(\mathcal{A})$ 中的复形恰是各阶同调群属于 $\mathcal{A}_F$ 者，
且 $\mathsf{D}(\mathcal{A}_F)\subseteq\mathsf{D}_F(\mathcal{A})$
是范畴等价。$L$ 有左导出，是
$\mathsf{D}(\mathcal{A}_F)\subset\mathsf{D}(\mathcal{A})$ 的左伴随。
:::

显然 $\mathcal{A}_0$ 将要取成 $\mathbb{Z}[S]$，$S\in\mathsf{ExDisc}$，$F$ 取成固态化。

::: proof
先证[条件 1](@余核条件) 和 [条件 2](@核条件) 等价，且
[条件 3](@链复形条件) 推出它们。这是因为这三个条件都推出对形如
$Fb$ 的东西的直和 $C$，$R{\operatorname{Hom}}(Fa,C)=R{\operatorname{Hom}}(a,C)$，
于是对这种直和之间的映射 $f\colon Y\to Z$，对正合列
$$
0\to\ker(f)\to Y\to Z\to\operatorname{coker}(f)\to0
$$
做 $R{\operatorname{Hom}}$ 知 [条件 1](@余核条件) 等价于 [条件 2](@核条件)。而如果有
[条件 3](@链复形条件)，则对这种直和之间映射 $f\colon Y\to Z$
的核 $K$，以 $\mathcal{A}_0$ 中对象的直和来消解 $K$，得复形
$$
\cdots\to B_1\to B_0\to0;
$$
对 $0\to Y\to Z\to0$ 用 [条件 3](@链复形条件) 容易推出
$$
R{\operatorname{Hom}}(B_\bullet,[0\to Y\to Z\to0])=R{\operatorname{Hom}}(FB_\bullet,[0\to Y\to Z\to0]),
$$
由此可得消解 $B_\bullet\to K$ 可延拓为 $FB_\bullet\to K$，
即 $K\cong B_\bullet$ 是 $FB_\bullet$ 的收缩。这样一来，
由 $R{\operatorname{Hom}}(Fa,FB_\bullet)=R{\operatorname{Hom}}(a,FB_\bullet)$ 即知
$R{\operatorname{Hom}}(Fa,K)=R{\operatorname{Hom}}(a,K)$，即 [条件 2](@核条件) 成立。
上面的证明中对于直和 $B=\bigoplus b_i$ 我以 $FB$ 记
$\bigoplus Fb_i$。以下也使用此记号。

然后证明命题本身。显然 $\mathcal{A}_F$ 对极限封闭，且包含形如 $Fb$
的东西的直和之间映射的核和余核。对于 $X\in\mathcal{A}_F$，
取 $\mathcal{A}_0$ 中对象的直和 $A\twoheadrightarrow X$。由条件它穿过一个映射
$FA\twoheadrightarrow X$；由 $\mathcal{A}_F$ 对极限封闭，
其核仍属于 $\mathcal{A}_F$，如法炮制可得 $\mathcal{A}_0$ 中对象的直和
$B$ 以及映射 $FB\to FA$ 使 $X$ 为其余核。所以
$\mathcal{A}_F$ 恰由形如 $Fb$ 的东西的直和之间映射的余核组成。
由此立得其对直和与余核封闭，即对余极限封闭。这样条件就给出
$\mathcal{A}_F\subset\mathsf{D}_F(\mathcal{A})$，且对扩张亦封闭，以及被紧投射对象
$Fa$，$a\in\mathcal{A}_0$ 生成。对一般的 $M\in\mathcal{A}$，用 $\mathcal{A}_0$
中对象的直和作消解
$$
B\to A\to M\to0,
$$
则再次由条件即得 $M\mapsto\operatorname{coker}(FB\to FA)$ 给出 $\mathcal{A}_F\subset\mathcal{A}$
的左伴随。

以 $\mathsf{D}'_F(\mathcal{A})$ 记 $\mathsf{D}(\mathcal{A})$ 中各阶同调群属于 $\mathcal{A}_F$
者。先证明 $\mathsf{D}'_F(\mathcal{A})\subseteq\mathsf{D}_F(\mathcal{A})$。
对 $C\in\mathsf{D}'_F(\mathcal{A})$，由于 $C=\lim\tau_{\ge-n}C$
可不妨设 $C$ 左有界。然后由于对每个 $i$，
$\operatorname{Ext}^i(Fa,C)$ 与 $\operatorname{Ext}^i(a,C)$ 都只依赖 $\tau_{\le i}C$，
检验 $\mathsf{D}_F(\mathcal{A})$ 条件时还能设 $C$ 右有界。而 $C$ 有界时可拆为
$\mathcal{A}_F$ 中对象的平移，故得结论。

由于 $\mathcal{A}$ 中有足够投射对象，由[叠计划 0794](https://stacks.math.columbia.edu/tag/0794)
知函子 $L$ 有左导出，仍记作
$L\colon\mathsf{D}(\mathcal{A})\to\mathsf{D}(\mathcal{A}_F)$。由叠计划中的证明以及
$\mathsf{D}_F(\mathcal{A})$ 的定义知对 $X\in\mathcal{A}$，$R{\operatorname{Hom}}(X,-)$
与 $R{\operatorname{Hom}}(LX,-)$ 在 $\mathsf{D}_F(\mathcal{A})$ 中一样，即 $L$
为 $\mathsf{D}_F(\mathcal{A})\subset\mathsf{D}(\mathcal{A})$ 的左伴随。于是由米田引理，
自然变换 $X\to LX$ 在 $X\in\mathsf{D}_F(\mathcal{A})$ 时为同构，这给出范畴等价
$\mathsf{D}(\mathcal{A}_F)\subseteq\mathsf{D}_F(\mathcal{A})$。由于
$\mathsf{D}(\mathcal{A}_F)\subseteq\mathsf{D}'_F(\mathcal{A})\subseteq\mathsf{D}_F(\mathcal{A})$，
这三个范畴都等价，且 $\mathsf{D}'_F(\mathcal{A})=\mathsf{D}_F(\mathcal{A})$。
:::

然后处理具体情况。由于之前算出了 $\mathbb{Z}[S]^\blacksquare$ 具体形式，
只需证：

::: proposition {@巨大技术命题}
对极不连通空间 $S$ 以及链复形
$$
C\colon\cdots\to C_1\to C_0\to0,
$$
其中 $C_i=\bigoplus_{j\in J_i}\mathbb{Z}^{I_{i,j}}$，
$$
R\underline{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,C)\cong R\underline{\operatorname{Hom}}(\mathbb{Z}[S],C).
$$
:::

这个证明非常技术，各步不可轻易调换。我在讨论班上记错，惨挂黑板。

::: proof
先证 $C$ 为一个模的情形，即证
$$
R\underline{\operatorname{Hom}}\left(\mathbb{Z}[S]^\blacksquare,\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)\cong
R\underline{\operatorname{Hom}}\left(\mathbb{Z}[S],\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right).
$$
由于 $\mathbb{Z}[S]$ 紧投射，右边的无穷直和能提出 $R\underline{\operatorname{Hom}}$ 外面。
取同构 $C(S,\mathbb{Z})=\mathbb{Z}^{\oplus K}$，
右边即为 $\bigoplus_{j\in J}(\mathbb{Z}^{\oplus K})^{I_j}$。要证左边也是如此。
回忆 $\mathbb{Z}[S]^\blacksquare=\mathbb{Z}^K$，即要证

```math {@巨大直和直积交换}
R\underline{\operatorname{Hom}}\left(\mathbb{Z}^K,\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)
=\bigoplus_{j\in J}(\mathbb{Z}^{\oplus K})^{I_j}.
```

考虑短正合列
$$
0\to\mathbb{Z}^K\to\mathbb{R}^K\to\mathbb{T}^K\to0.
$$
由于 $0\to\mathbb{Z}\to\mathbb{R}\to\mathbb{T}\to0$，而 $\mathbb{Z}$ 和 $\mathbb{T}$ 都伪凝聚，
得到 $\mathbb{R}$ 伪凝聚，从而计算
$R\underline{\operatorname{Hom}}\left(\mathbb{R},\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)$
时直和也能提出去，于是由 @实数出发 知该 $R\underline{\operatorname{Hom}}$ 是 $0$。
由 $\mathbb{R}^K$ 是 $\mathbb{R}$ 模，得
$$
R\underline{\operatorname{Hom}}\left(\mathbb{R}^K,\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)
=R\underline{\operatorname{Hom}}\left(\mathbb{R}^K,R\underline{\operatorname{Hom}}\left(\mathbb{R},\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)\right)=0;
$$
由 @紧群伪凝聚，$\mathbb{T}^K$ 伪凝聚，直和也能提出去，
于是由 @环面出发
$$
R\underline{\operatorname{Hom}}\left(\mathbb{T}^K,\bigoplus_{j\in J}\mathbb{Z}^{I_j}\right)=\bigoplus_{j\in J}(\mathbb{Z}^{\oplus K})^{I_j}[-1];
$$
合起来即得欲证。

这样自动得到 $C$ 有界的情形。欲证一般情形，由于暴力截断复形的正合列
$$
0\to C_{\le n}\to C\to C_{>n}\to0,
$$
只需证 $R\underline{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,C_{>n})$ 与
$R\underline{\operatorname{Hom}}(\mathbb{Z}[S],C_{>n})$
同调群都集中在 $\ge n$ 阶，因为这样一来自然映射
$$
R\underline{\operatorname{Hom}}(\mathbb{Z}[S]^\blacksquare,C)\to R\underline{\operatorname{Hom}}(\mathbb{Z}[S],C)
$$
的余纤维就对任意 $n$ 都集中在 $\ge n$ 阶，从而是 $0$。
对 $R\underline{\operatorname{Hom}}(\mathbb{Z}[S],C_{>n})$ 事情显然，因为 $\mathbb{Z}[S]$ 投射。
所以需要证 $R\underline{\operatorname{Hom}}(\mathbb{Z}^K,C_{>n})$ 集中在 $\ge n$，
相当于证 $R\underline{\operatorname{Hom}}(\mathbb{Z}^K,C)$ 集中在 $\ge-1$。

现在我说这可归结于证对任意 $K$，$R\underline{\operatorname{Hom}}(\mathbb{T}^K,C)$ 集中在 $\ge-2$。
如有此事，便有
$$
R\underline{\operatorname{Hom}}(\mathbb{T}^K,C)=\operatornamewithlimits{colim} R\underline{\operatorname{Hom}}(\mathbb{T}^K,C_{\le n}).
$$
由于以 $\mathbb{Z}$ 换 $\mathbb{T}^K$ 之后上式显然成立，取 $K=*$，
由 $0\to\mathbb{Z}\to\mathbb{R}\to\mathbb{T}\to0$ 得

```math {@实数打不到固态群}
R\underline{\operatorname{Hom}}(\mathbb{R},C)=\operatornamewithlimits{colim} R\underline{\operatorname{Hom}}(\mathbb{R},C_{\le n})=0
```

于是由 $\mathbb{R}^K$ 为 $\mathbb{R}$ 模知上式以 $\mathbb{R}^K$ 换 $\mathbb{R}$ 也得 $0$。
从而
$R\underline{\operatorname{Hom}}(\mathbb{Z}^K,C)=R\underline{\operatorname{Hom}}(\mathbb{T}^K,C)[1]$
集中在 $\ge-1$。

记 $C_{\mathbb{R},i}=\bigoplus_{J_i}\mathbb{R}^{I_{i,j}}$，
$C_{\mathbb{T},i}=\bigoplus_{J_i}\mathbb{T}^{I_{i,j}}$，$C_\mathbb{R}$、
$C_\mathbb{T}$ 为对应的复形，则有短正合列
$$
0\to C\to C_\mathbb{R}\to C_\mathbb{T}\to0.
$$
于是只需证 $R\underline{\operatorname{Hom}}(\mathbb{T}^K,C_\mathbb{R})$ 与
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,C_\mathbb{T})$
集中在 $\ge-1$。
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,C_\mathbb{R})=R{\lim}\,R\underline{\operatorname{Hom}}(\mathbb{T}^K,\tau_{<n}C_\mathbb{R})$，
而 $\tau_{<n}C_\mathbb{R}$ 无非是
$$
0\to\ker(C_{\mathbb{R},n}\to C_{\mathbb{R},n-1})\to C_{\mathbb{R},n}\to\cdots\to C_{\mathbb{R},0}\to0,
$$
$\mathbb{T}$ 也类似，故只需证对形如
$$
M_\mathbb{R}=\ker\left(\bigoplus_{j\in J}\mathbb{R}^{I_j}\to\bigoplus_{j\in J'}\mathbb{R}^{I'_j}\right),\,
M_\mathbb{T}=\ker\left(\bigoplus_{j\in J}\mathbb{T}^{I_j}\to\bigoplus_{j\in J'}\mathbb{T}^{I'_j}\right),
$$
其中映射来自 $\mathbb{Z}$ 模对应映射的模，
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,M_\mathbb{R})$，
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,M_\mathbb{T})$ 集中在 $\ge-1$，
因为 $C_{\mathbb{R},i}=\ker(C_{\mathbb{R},i}\to0)$，$C_{\mathbb{T},i}=\ker(C_{\mathbb{T},i}\to0)$
也是这种形式。由于 $\mathbb{T}^K$ 伪凝聚，
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,-)$ 与模的滤余极限交换，故可不妨设 $J$ 有限，
于是设
$$
M_\mathbb{R}=\ker\left(\mathbb{R}^I\to\bigoplus_{j\in J'}\mathbb{R}^{I'_j}\right),\,
M_\mathbb{T}=\ker\left(\mathbb{T}^I\to\bigoplus_{j\in J'}\mathbb{T}^{I'_j}\right).
$$
由于上面的映射来自 $\mathbb{Z}$ 模对应映射，由式 @巨大直和直积交换
知其像在右边的有限直和中，故还可设 $J'$ 有限，相当于设
$$
M_\mathbb{R}=\ker(\mathbb{R}^I\to\mathbb{R}^{I'}),\,M_\mathbb{T}=\ker(\mathbb{T}^I\to\mathbb{T}^{I'}).
$$
再次由于上面的映射来自 $\mathbb{Z}$ 模对应映射，而
$$
R\underline{\operatorname{Hom}}(\mathbb{Z}^I,\mathbb{Z}^{I'})=(\mathbb{Z}^{\oplus I})^{I'}=R\underline{\operatorname{Hom}}(\mathbb{Z}^{\oplus I'},\mathbb{Z}^{\oplus I}),
$$
即它对偶于映射 $\mathbb{Z}^{\oplus I'}\to\mathbb{Z}^{\oplus I}$，
指它是这样的映射做 $\underline{\operatorname{Hom}}(-,\mathbb{R})$ 与
$\underline{\operatorname{Hom}}(-,\mathbb{T})$ 所得。
所以 $M_\mathbb{T}$ 为拓扑群同态 $\mathbb{T}^I\to\mathbb{T}^{I'}$ 之核，为紧拓扑群，
由 @局部紧RHom 知 $R\underline{\operatorname{Hom}}(\mathbb{T}^K,M_\mathbb{T})$ 上同调集中在
$[0,1]$，
即同调集中在 $\ge-1$；而由线性代数，每个实线性映射
$\mathbb{R}^{\oplus I'}\to\mathbb{R}^{\oplus I}$ 都是分裂满射复合分裂单射，
故对偶映射 $\mathbb{R}^I\to\mathbb{R}^{I'}$ 亦然，所以 $M_\mathbb{R}$ 为 $\mathbb{R}^I$
的直和项，由 @环面出发，
$R\underline{\operatorname{Hom}}(\mathbb{T}^K,\mathbb{R}^I)=R\underline{\operatorname{Hom}}(\mathbb{T}^K,\mathbb{R})^I=0$，
故 $R\underline{\operatorname{Hom}}(\mathbb{T}^K,M_\mathbb{R})=0$。
:::

这样终于证完了 @固态群。由此不难得到

::: proposition {@紧投射固态交换群}
$\mathsf{Solid}$ 中的紧投射对象形如 $\mathbb{Z}^I$，
$\mathsf{D}(\mathsf{Solid})$ 中的紧对象是各项形如 $\mathbb{Z}^I$
的有界复形，且 $R{\operatorname{Hom}}(-,\mathbb{Z})$ 给出范畴等价
$\mathsf{cpt}(\mathsf{Solid})^\mathrm{op}=\mathsf{Ab}$，
$\mathsf{cpt}(\mathsf{D}(\mathsf{Solid}))^\mathrm{op}=\mathsf{D}^b(\mathbb{Z})$。
另外，$\mathsf{Solid}$ 与 $\mathsf{D}(\mathsf{Solid})$ 分别对
$\underline{\operatorname{Hom}}$ 与 $R\underline{\operatorname{Hom}}$ 封闭。
:::

最后来求一些固态化。

::: proposition {@CHaus的自由模的固态化}
对紧 Hausdorff 空间 $X$，
$$
\mathbb{Z}[X]^{L\blacksquare}=R\underline{\operatorname{Hom}}(R\Gamma(X,\mathbb{Z}),\mathbb{Z}).
$$
所以 $X$ 投射有限时 $\mathbb{Z}[X]^{L\blacksquare}$ 同调群集中在 $0$ 处。
另外，对一般的，未必有限的 CW 复形 $X$，
$$
\mathbb{Z}[X]^{L\blacksquare}=C_\bullet(X),
$$
右边表示 $\mathbb{Z}$ 系数的胞腔链复形，或者等价地，奇异链复形。
:::

::: proof
如 @离散模的上同调 证明中所述，可由 Stone–Čech
紧化和忘却的伴随性给出 $\mathbb{Z}[X]$ 的典范投射消解 $\mathbb{Z}[\beta_\bullet X]$，
而依定义
$$
\mathbb{Z}[\beta_\bullet X]^{L\blacksquare}=
R\underline{\operatorname{Hom}}(\Gamma(\beta_\bullet X,\mathbb{Z}),\mathbb{Z})=R\underline{\operatorname{Hom}}(R\Gamma(X,\mathbb{Z}),\mathbb{Z}).
$$
对有限 CW 复形 $X$，由上同调比较以及万有系数定理，
上式右边同构于胞腔同调 $C_\bullet(X)$。再用 @CW复形作为凝聚态集
以及所涉函子都与滤余极限交换即得结论。
:::

定义**固态张量积**为
$-\otimes^{\blacksquare}-=(-\otimes-)^\blacksquare$，
易知它是 $\underline{\operatorname{Hom}}$ 的左伴随。导出张量积类似。现在兑现本节伊始的承诺：

::: proposition {@承诺}
1. $\mathbb{R}^{L\blacksquare}=0$。

2. {@乘积的固态张量积} $\mathbb{Z}^I\otimes^{L\blacksquare}\mathbb{Z}^J=\mathbb{Z}^{I\times J}$。

3. $\mathbb{Z}_p\otimes^{L\blacksquare}\mathbb{Z}_p=\mathbb{Z}_p$。

4. $\mathbb{Z}_p\otimes^{L\blacksquare}\mathbb{Z}_\ell=0$。

:::

::: proof
1. 由[[米田引理]]以及 $-^{L\blacksquare}$ 是左伴随，
   只需证对任意 $C\in\mathsf{D}(\mathsf{Solid})$，
   $R{\operatorname{Hom}}(\mathbb{R},C)=0$。$C$ 右有界的时候是式 @实数打不到固态群，
   一般的 $C$ 是其暴力右截断的极限。

2. 设
   $\mathbb{Z}^I=\mathbb{Z}[S]^\blacksquare$，$\mathbb{Z}^J=\mathbb{Z}[T]^\blacksquare$，$S,T$
   投射有限。此时这些固态化自动导出。不断用伴随性容易发现
   $$
   \mathbb{Z}[S]^\blacksquare\otimes^{L\blacksquare}\mathbb{Z}[T]^\blacksquare=
   (\mathbb{Z}[S]\otimes^L\mathbb{Z}[T])^{L\blacksquare}=\mathbb{Z}[S\times T]^{L\blacksquare}=\mathbb{Z}^{I\times J}.
   $$

3. $\mathbb{Z}_p=\mathbb{Z}[[x]]/(x-p)$，而 $x-p$ 不是零因子，所以由
   @乘积的固态张量积，
   $$
   \mathbb{Z}_p\otimes^{L\blacksquare}\mathbb{Z}_p=\mathbb{Z}[[x]]/(x-p)\otimes^{L\blacksquare}\mathbb{Z}[[y]]/(y-p)
   =\mathbb{Z}[[x,y]]/(x-p,y-p)=\mathbb{Z}[[x,y]]/(x-p,x-y)=\mathbb{Z}_p.
   $$

4. 类似地，
   $$
   \mathbb{Z}_p\otimes^{L\blacksquare}\mathbb{Z}_\ell=\mathbb{Z}[[x,y]]/(x-p,y-\ell)=0,
   $$
   因为取 $a,b\in\mathbb{Z}$，$ap+b\ell=1$，则
   $a(p-x)+b(\ell-y)=1-ax-by$ 在形式幂级数环中可逆。

:::

```terms
固态:
  en: solid
固态化:
  en: solidify
```
