---
title: 仿射六函子
---

{@仿射六函子}

本节用上一节所发展的 $\mathbb{Z}$ 上有限型环的固态化理论来作仿射六函子。
也就是对 $\mathbb{Z}$ 上有限型环的同态 $f\colon R\to A$，作
$$
(f^*,f_*)\colon\mathsf{D}(R_\blacksquare)\rightleftarrows\mathsf{D}(A_\blacksquare),\,
(f_!,f^!)\colon\mathsf{D}(A_\blacksquare)\rightleftarrows\mathsf{D}(R_\blacksquare),
$$
并反哺拟凝聚层 Grothendieck 对偶。
这套东西相比经典代数几何的好处是我们真的有个 $f_!$。
这里面前一对伴随函子比较显然，上一节中已经定义。

至于后一对，我们模仿平展上同调的做法，将 $f$ 分解成“开浸入”和
“紧映射”。与那里不同的是，这里的“紧化”典范，实际上就是
$(A,R)_\blacksquare$。考虑解析环的同态 $j\colon(A,R)_\blacksquare\to A_\blacksquare$，
$\bar{f}\colon R_\blacksquare\to(A,R)_\blacksquare$。欲将 $f_!$ 定义为
$\bar{f}_*j_!$，须先定义 $j_!$。为便于之后讨论定义与映射复合的相容性，
我们一并作出环对的 $j_!$。

::: proposition {@仿射下叹号}
对 $\mathbb{Z}$ 上有限型环的同态 $R\to S\to A$，
以 $j\colon(A,R)_\blacksquare\to(A,S)_\blacksquare$ 记解析环同态，
则 $j^*$ 有左伴随，记为 $j_!$，在 $S=R[x]$ 为一元多项式环时复合函子
$j_!j^*$ 有具体形式 $-\otimes^L_{(S,R)_\blacksquare}(S_\infty/S)[-1]$，
其中 $S_\infty=R((x^{-1}))$ 如上一节。
一般地，$j_!$ 满忠实，$j^*j_!=\operatorname{id}$，
$j_!j^*=-\otimes^L_{(S,R)_\blacksquare}j_!S$；
这里滥用记号，也用 $j$ 表示同态 $(S,R)\to(S,S)$。
:::

::: proof
由 @满射化归，可不妨设 $S=R[x_1,\ldots,x_n]$ 为多项式环。
所以由归纳法只需证一元多项式情形。此时先证如上具体形式确实给出左伴随 $j_!$。
这相当于证明 $j^*=R\underline{\operatorname{Hom}}_S((S_\infty/S)[-1],-)$，
也就是说对于 $(A,R)_\blacksquare$ 模 $M$，$M$ 的 $S$-固态化等于
$R\underline{\operatorname{Hom}}_S((S_\infty/S)[-1],M)$。这件事与 $M$ 的 $A$
模结构无关，故只需对 $(S,R)_\blacksquare$ 模证。由 @一元多项式最终证明
及 @B∞性质，只需证

- $M$ 是 $S_\infty$ 模时 $R\underline{\operatorname{Hom}}_S((S_\infty/S)[-1],M)=0$。

- $M$ 为 $S$-固态时 $R\underline{\operatorname{Hom}}_S((S_\infty/S)[-1],M)=M$。

前者是因为 $(S_\infty/S)[-1]\otimes^L_{(S,R)_\blacksquare}S_\infty=0$，
而后者则是因为此时 $R\underline{\operatorname{Hom}}_S(S_\infty,M)=0$ 从而
$R\underline{\operatorname{Hom}}_S((S_\infty/S)[-1],M)=R\underline{\operatorname{Hom}}_S(S,M)=M$。

至于最后一句话，将 $j^*j_*=\operatorname{id}$ 取左伴随即得 $j^*j_!=\operatorname{id}$，
然后由伴随函子抽象废话即知 $j_!$ 满忠实。
由于对 $M,N\in\mathsf{D}((A,R)_\blacksquare)$，
$$
{\operatorname{Hom}}_A(j_!j^*M,N)={\operatorname{Hom}}_A(j^*M,j^*N)={\operatorname{Hom}}_A(M,j^*N)
={\operatorname{Hom}}_A(M,R\underline{\operatorname{Hom}}_A(A,j^*N))={\operatorname{Hom}}_A(M,R\underline{\operatorname{Hom}}_S(j_!S,N))
={\operatorname{Hom}}_A(M\otimes^L_{(S,R)_\blacksquare}j_!S,N),
$$
所以 $j_!j^*=-\otimes^L_{(S,R)_\blacksquare}j_!S$。
:::

::: remark
经典代数几何中 $j^*$ 并没有左伴随。比如考虑 $j\colon A\to A[a^{-1}]$
为主开集含入，则我们知道，一般地对无穷集 $I$ 并没有
$$
A^I\otimes_AA[a^{-1}]=A[a^{-1}]^I,
$$
于是 $j^*$ 并不保持极限，不可能有左伴随。但在固态化理论中有
$$
A^I\otimes_{A_\blacksquare}A[a^{-1}]_\blacksquare=A[a^{-1}]^I,
$$
所以一切都好了起来，也有了下叹号。
:::

这样就能定义 $f_!$。

::: definition
对 $\mathbb{Z}$ 上有限型环对的同态 $f\colon(A,R)\to(B,S)$，将其分解为
$\bar{f}\colon(A,R)\to(B,R)$，$j\colon(B,R)\to(B,S)$，定义
$f_!=\bar{f}_*j_!\colon\mathsf{D}((B,S)_\blacksquare)\to\mathsf{D}((A,R)_\blacksquare)$。
依定义，$\bar{f}_*$ 就是将 $\mathsf{D}((B,R)_\blacksquare)$ 中复形视为
$\mathsf{D}((A,R)_\blacksquare)$ 中。由于两个导出范畴里的余极限都是复形余极限再
$R$-固态化，所以 $\bar{f}_*$ 保持余极限。这样一来 $f_!$
保持余极限。由伴随函子定理其有右伴随，记为 $f^!$。
:::

::: proposition
对 $\mathbb{Z}$ 上有限型环对的同态  $f\colon(A,R)\to(B,S)$，$g\colon(B,S)\to(C,T)$，
$(gf)_!=f_!g_!$。从而 $(gf)^!=g^!f^!$。
:::

::: proof
作交换图
\[
\begin{tikzcd}
  (A,R)\ar[r,"\bar{f}"]\ar[rd,"f"']&(B,R)\ar[r,"\bar{g}'"]\ar[d,"j"]&(C,R)\ar[d,"j'"]\\
  &(B,S)\ar[r,"\bar{g}"]\ar[rd,"g"']&(C,S)\ar[d,"k"]\\
  &&(C,T)
\end{tikzcd}
\]
由于 $f_!=\bar{f}_*j_!$，$g_!=\bar{g}_*k_!$，
$(gf)_!=(\bar{g}'\bar{f})_*(kj')_!=\bar{f}_*\bar{g}'_*j'_!k_!$，
故只需证 $j_!\bar{g}_*=\bar{g}'_*j'_!$。这是因为对
$M\in\mathsf{D}((C,S)_\blacksquare)$，
$$
\bar{g}'_*j'_!M=\bar{g}'_*(M\otimes^L_{(S,R)_\blacksquare}j'_!S)
=\bar{g}_*M\otimes^L_{(S,R)_\blacksquare}j_!S=j_!\bar{g}_*M.
$$
其中第二个等号是因为这些张量积的 $B$ 模、$C$ 模结构只来源于第一个张量因子，
而下星无非是把 $C$ 模忘却为 $B$ 模。
:::

::: remark
在无穷范畴的语境下这一命题比较微妙，不能指望复合与下叹号严格交换。
正确的陈述方式是用 Descartes 纤维化。
:::

$(f_!,f^!)$ 在以下特殊情形有较好性质：

::: theorem
将 $\mathbb{Z}$ 上有限型环同态 $f\colon R\to A$ 视为环对同态 $f\colon(R,R)\to(A,A)$，
仍记 $j\colon(A,R)\to(A,A)$，$\bar{f}\colon(R,R)\to(A,R)$。
则 $f_!$ 保持伪凝聚对象，$f^!$ 保持离散对象，且有投影公式
$$
f_!(f^*M\otimes^L_{A_\blacksquare}N)=M\otimes^L_{R_\blacksquare}f_!N
$$
以及内伴随性
$$
R\underline{\operatorname{Hom}}_A(N,f^!M)=R\underline{\operatorname{Hom}}_R(f_!N,M)
$$
对 $M\in\mathsf{D}(R_\blacksquare)$，$N\in\mathsf{D}(A_\blacksquare)$，
其中等号右边的 $A$ 模结构来自 $j_!N$。特别地，
$f^!M=R{\operatorname{Hom}}_R(f_!A,M)$。

当 $f$ 具有有限 $\operatorname{Tor}$ 维数时，$f_!$ 保持紧对象，
$f^!$ 与余极限交换，保持完美复形，且
$$
f^!M=f^*M\otimes^L_Af^!R
$$
对 $M\in\mathsf{D}(R_\blacksquare)$。
:::

::: proof
对保持拟凝聚性与紧性，由于 $\mathsf{D}(A_\blacksquare)$ 中伪凝聚对象为一些 $A^I$ 构成的右有界复形，
紧对象为其中有界者的直和项，
故只需证 $f_!A^I$ 伪凝聚，且在 $f$ 具有有限 $\operatorname{Tor}$ 维数时紧。
可将 $f$ 分解为一元多项式环与满射分别证。
$A=R[x]$ 时
$$
f_!A^I=\bar{f}_*j_!A^I=\bar{f}_*j_!j^*(R^I\otimes_RA)
=R^I\otimes_RA\otimes^L_{(A,R)_\blacksquare}(A_\infty/A)[-1]
=R^I\otimes^L_{R_\blacksquare}(A_\infty/A)[-1]=R^{I\times\omega}[-1]
$$
为 $\mathsf{D}(R_\blacksquare)$ 中紧。
$f\colon R\twoheadrightarrow A$ 时 $f_!=f_*$，$f_!A^I$ 即
$A^I$ 视为 $R$ 模。由 $R$ Noether，取 $A$ 的有限自由 $R$ 模消解
$C_\bullet\to A$，得 $A^I=C_\bullet^I$ 为 $\mathsf{D}(R_\blacksquare)$
中伪凝聚。当 $f$ 具有有限 $\operatorname{Tor}$ 维数时，分解出来的满射也具有有限 $\operatorname{Tor}$
维数。此时 $C_\bullet$ 可取成有界复形，从而 $f_!A^I$ 紧。

投影公式是因为
$$
f_!(f^*M\otimes^L_{A_\blacksquare}N)=\bar{f}_*j_!j^*(\bar{f}^*M\otimes^L_{(A,R)_\blacksquare}N)=((M\otimes^L_RA)\otimes^L_{(A,R)_\blacksquare}N)\otimes^L_{(A,R)_\blacksquare}j_!A=M\otimes^L_{R_\blacksquare}(N\otimes^L_{(A,R)_\blacksquare}j_!A)=M\otimes^L_{R_\blacksquare}f_!N.
$$
作从投影公式出发的 ${\operatorname{Hom}}$，由张量积和 $R\underline{\operatorname{Hom}}$ 伴随，
立得内伴随性。
于是如 $M$ 离散，
由 $f_!A$ 伪凝聚以及 $R\underline{\operatorname{Hom}}_R(R^I,M)=M^{\oplus I}$ 离散即知
$f^!M=R\underline{\operatorname{Hom}}_R(f_!A,M)$ 离散。

下设 $f$ 具有有限 $\operatorname{Tor}$ 维数。
此时 $f^!$ 与余极限交换是因为 $\mathsf{D}(A_\blacksquare)$ 紧生成且 $f_!$ 保持紧对象。
欲证 $f^!$ 保持完美复形，只需证 $f^!R$ 为完美 $A$ 复形。
仍将 $f$ 分解为一元多项式环与满射分别证。$A=R[x]$ 时
$$
f^!R=R\underline{\operatorname{Hom}}_R(f_!A,R)=R\underline{\operatorname{Hom}}_R((A_\infty/A)[-1],R)=A[1]
$$
甚至是可逆复形，其中配对 $A\times A_\infty/A\to R$ 为留数配对，即乘起来取 $-1$ 次项系数。
$f\colon R\twoheadrightarrow A$ 时由 $\operatorname{Tor}$ 维数有限，
$f_!A=f_*A\in\mathsf{D}(R)$ 完美，得 $f^!R=R\underline{\operatorname{Hom}}_R(f_!A,R)$
为完美 $R$ 复形，然后由[叠计划 0658](https://stacks.math.columbia.edu/tag/0658)
即完美等价于伪凝聚且 $\operatorname{Tor}$ 范围有限，不难得到其作为 $A$ 复形亦完美。

对 $M\in\mathsf{D}(R_\blacksquare)$，有自然同态
$$
M=R\underline{\operatorname{Hom}}_R(R,M)\to R\underline{\operatorname{Hom}}_R(f_!f^!R,M)=f_*R\underline{\operatorname{Hom}}_A(f^!R,f^!M).
$$
由伴随这给出自然同态 $f^*M\otimes^L_Af^!R\to f^!M$。
两边都与 $M$ 的余极限交换，而 $\mathsf{D}(R_\blacksquare)$ 由形如 $R^I$
者生成，故只需验证 $M=R^I$ 情形它是同构。事实上
$$
f^*(R^I)\otimes^L_Af^!R=A^I\otimes^L_Af^!R=(f^!R)^I=f^!(R^I),
$$
其中第一个等号是因为 $R^I$ 和 $A^I$ 分别是解析环 $R_\blacksquare$ 和 $A_\blacksquare$
的自由模；第二个等号是因为 $f^!R$ 完美；第三个等号是因为 $f^!$ 是右伴随，和极限交换。
:::

由于这里的 $f^!$ 保持离散对象，它还原了经典对偶理论中的 $f^!$。
