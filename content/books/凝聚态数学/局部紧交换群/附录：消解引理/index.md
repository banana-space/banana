---
title: 附录：消解引理
---

本附录给出正文所声称的消解引理的证明。这似应归功于 Clausen，
因为它基本上就是 [@CMM18] 的命题 4.10 与 4.11。

::: theorem {@resolution-lemma}
设函子 $Q^n\colon\mathsf{Ab}\to\mathsf{Ab}$，$A \mapsto \mathbb{Z}[A^n]$。
存在自然数 $n_i (i\ge 0)$，$r_{ij} (i \ge 0, 1 \le j \le n_i)$，
使得对 Abel 群 $A$，
存在函子性的投射消解 $P^\bullet \to A$，
连同函子性的同构 $P^{-i}\cong\bigoplus_{j=1}^{n_i}Q^{r_{ij}}(A)$。
:::

::: remark
在上面的定理陈述中，如果我们忽略集合论问题，则“函子性”的意思是：
在 Abel 范畴 $\mathsf{Fun}(\mathsf{Ab},\mathsf{Ab})$ 中，
$\operatorname{id}_{\mathsf{Ab}}$ 有一个紧投射消解，
使得它的每一项都是形如 $Q^n$ 的对象的有限直和。
:::

待范畴论的相关页面完善后，下面的定义与定理应当被替换为到相关页面的引用。
为证明的完整起见，现在先写在这里。

::: definition
设$\mathcal{A}$是 Grothendieck Abel 范畴，$X\in \mathsf{D}(\mathcal{A})$为复形。

1. 设 $m$ 是整数。我们称 $X$ 为 $m$-伪凝聚的，是指它满足以下条件：

   1. $X$ 上有界，即当 $i$ 充分大时 $H^i(X)=0$。

   2. 当 $i<m$ 时，$\operatorname{Ext}^i(X,\cdot)\colon\mathcal{A}\to\mathsf{Ab}$与滤余极限交换。

   3. $\operatorname{Ext}^m(X,\cdot)\colon\mathcal{A}\to\mathsf{Ab}$与滤并集交换。

2. 我们称 $X$ 为伪凝聚的，是指它满足以下条件：

   1. $X$ 上有界，即当 $i$ 充分大时 $H^i(X)=0$。

   2. 对一切整数 $i$，$\operatorname{Ext}^i(X,\cdot)\colon\mathcal{A}\to\mathsf{Ab}$与滤余极限交换。

   这当且仅当它对每个 $m$ 都是 $m$-伪凝聚的。

3. 设 $m$ 是整数，$S$ 是 $\mathcal{A}$ 的一族紧投射对象。
   我们称 $X$ 为 $m,S$-伪凝聚的，是指它满足以下条件：

   存在（上）有界余链复形 $P^\bullet$，及映射
   $\phi\colon P^\bullet\to X$，
   使得每个 $P^i$ 为 $S$ 中对象的有限直和，
   且 $H^i(\phi)$ 当 $i>-m$ 时为同构，
   当 $i=-m$ 时为满射。

4. 设 $S$ 是 $\mathcal{A}$ 的一族紧投射对象。
   我们称 $X$ 为 $S$-伪凝聚的，是指它满足以下条件：
   存在上有界余链复形 $P^\bullet$ 拟同构于 $X$，
   使得每个 $P^i$ 为 $S$ 中对象的有限直和。

   这当且仅当它对每个 $m$ 都是 $m,S$-伪凝聚的。

:::

::: definition
设$\mathcal{A}$是 Grothendieck Abel 范畴，
$A \in \mathcal{A}$。
若 $A$ 是 $0$-伪凝聚的，
则称 $A$ 为有限生成的。
:::

::: lemma {@finite-type-object}
设$\mathcal{A}$是 Grothendieck Abel 范畴，
$A \in \mathcal{A}$。
考虑以下条件：

1. $A$ 有限生成。

2. $A$ 是紧对象的商。

3. 若有满射 $\bigoplus_{i\in I}B_i \to A$，
   则存在有限子集 $J \subset I$ 使得 $\bigoplus_{i\in J}B_i \to A$ 是满射。

4. 设 $B = \operatornamewithlimits{colim} B_i$ 为滤余极限。
   则 $\operatornamewithlimits{colim} {\operatorname{Hom}}(A,B_i) \to {\operatorname{Hom}}(A,B)$
   是单射。

则有 $(1)\Leftrightarrow(2)\Leftrightarrow(3)\Rightarrow(4)$。
:::

::: proof
1.我们先证 $(2)\Rightarrow(1)$。
设 $C \to A$ 是满射，$C$ 紧。
任取滤并集 $B = \bigcup B_i$。
由于 $B_i \to B$ 是单射，
${\operatorname{Hom}}(A,B_i) \to {\operatorname{Hom}}(A,B)$ 是单射。
从而 $\operatornamewithlimits{colim} {\operatorname{Hom}}(A,B_i) \to {\operatorname{Hom}}(A,B)$
是单射。
为证它是满射，任取映射 $A \to B$。
由于 $C$ 紧，$C \to A \to B$ 穿过某个 $B_i$ 分解。
由于 $B_i \to B$ 单，
知 $C \to B_i$ 可下降为 $A \to B_i$，
给出 $A \to B$ 穿过 $B_i$ 的分解。从而得证。

2.我们证 $(1)\Rightarrow(3)$。
将 $A$ 写为滤并集
$A = \operatorname{im}(\bigoplus_{i \in I} B_i \to A) = \bigcup_{J \subset I 有限}\operatorname{im}(\bigoplus_{i\in J}B_i \to A)$，
知 $\operatorname{id}_{A}$ 穿过某个 $\operatorname{im}(\bigoplus_{i\in J}B_i \to A)$，从而有 $(3)$。

3.为证 $(3)\Rightarrow(2)$，
只需将 $A$ 写为一族紧对象的直和的商。
则 $A$ 为其中有限个的直和的商。
注意紧对象的有限直和仍是紧的，从而结论得证。

4.下证 $(2)\Rightarrow(4)$。
设 $C \to A$ 是满射，$C$ 紧。
则只需注意，
$\operatornamewithlimits{colim} {\operatorname{Hom}}(A,B_i)$ 与 ${\operatorname{Hom}}(A,B)$ 均为
$\operatornamewithlimits{colim} {\operatorname{Hom}}(C,B_i) = {\operatorname{Hom}}(C,B)$ 的子集。
:::

两种伪凝聚的概念当有足够紧投射对象时是等价的。

::: lemma {@pcoh-equivalent-def}
设 $\mathcal{A}$ 是 Grothendieck Abel 范畴，
$X\in \mathsf{D}(\mathcal{A})$ 为上有界复形。
设 $S$ 是一族紧投射对象，$m$ 是整数。
考虑如下结论：

1. $X$ 是 $m,S$-伪凝聚的。

2. $X$ 是 $m$-伪凝聚的。

3. 对一切 $i\le m$，
   $\operatorname{Ext}^i(X,\cdot)\colon\mathcal{A}\to\mathsf{Ab}$与滤并集交换。

则有$(1)\Rightarrow(2)\Rightarrow(3)$。
若 $S$ 生成 $\mathcal{A}$，
或更一般地，若存在一个各项为 $S$
中对象的直和的上有界余链复形 $P^\bullet$，
及映射 $\phi\colon P^\bullet\to X$，
使得每个 $P^i$ 为 $S$ 中对象的直和，
且 $H^i(\phi)$ 当 $i>-m$ 时为同构，
当 $i=-m$ 时为满射。
则$(3)\Rightarrow(1)$。
:::

::: proof
1.先设 $(1)$ 成立。
取上有界余链复形 $P^\bullet$，及映射 $\phi\colon P^\bullet\to X$，
使得每个 $P^i$ 为 $S$ 中对象的有限直和，
且 $H^i(\phi)$ 当 $i>-m$ 时为同构，
当 $i=-m$ 时为满射。
令 $Y$ 为 $P^\bullet\to X$ 的映射锥，
则 $H^i(Y)=0$ 对 $i\ge -m$ 成立。

对 $A \in \mathcal{A}$，我们有正合列
$$
\operatorname{Ext}^{i-1}(P^\bullet,A)\to\operatorname{Ext}^i(Y,A)\to\operatorname{Ext}^i(X,A)\to\operatorname{Ext}^i(P^\bullet,A)\to\operatorname{Ext}^{i+1}(Y,A).
$$
注意到对一切 $i$
都有 $\operatorname{Ext}^i(P^\bullet,\cdot)$ 与滤余极限交换，
而 $\operatorname{Ext}^i(Y,A)=0$ 对 $i\le m$ 成立。
于是当 $i<m$ 时，$\operatorname{Ext}^i(X,\cdot)=\operatorname{Ext}^i(P^\bullet,\cdot)$
与滤余极限交换。

最后，设 $A=\bigcup A_i$ 为滤并集。
注意 $\operatorname{Ext}^{m+1}(Y,\cdot)={\operatorname{Hom}}(H^{-m-1}(Y),\cdot)$，
于是我们有
$\operatornamewithlimits{colim}\operatorname{Ext}^{m+1}(Y,A_i) \to \operatorname{Ext}^{m+1}(Y,A)$
为单射。由此及上述正合列，
知
$\operatorname{Ext}^m(X,\cdot)=\ker(\operatorname{Ext}^m(P^\bullet,\cdot)\to\operatorname{Ext}^{m+1}(Y,\cdot))$
与滤并集交换。

综上，$(2)$ 成立。

2.显然，$(2)\Rightarrow(3)$。

3.下设 $(3)$ 成立，且它在 $-m$ 处的截断在引理条件的意义下被 $S$ 生成。
我们证明 $(1)$。
固定 $X$。由于 $X$ 上有界，当 $m\ll 0$ 时 $X$ 为
$m,S$-伪凝聚的，因为 $0\to X$ 即为所要求的逼近。
从而我们对 $m$ 归纳。由归纳假设，设 $X$ 是 $m-1,S$-伪凝聚的。

取上有界余链复形 $P'^\bullet$，及映射
$\phi\colon P'^\bullet\to X$，
使得每个 $P'^i$ 为 $S$ 中对象的有限直和，
且 $H^i(\phi)$ 当 $i>-m+1$ 时为同构，
当 $i=-m+1$ 时为满射。
替换为朴素截断，设 $P'^i=0$ 对一切 $i\le-m$ 成立。
令 $Y$ 为 $P'^\bullet\to X$ 的映射锥，
则 $H^i(Y)=0$ 对 $i>-m$ 成立。
对 $A \in \mathcal{A}$，考虑正合列
$$
\operatorname{Ext}^{m-1}(X,A)\to\operatorname{Ext}^{m-1}(P'^\bullet,A)\to\operatorname{Ext}^m(Y,A)\to\operatorname{Ext}^m(X,A)\to\operatorname{Ext}^m(P'^\bullet,A),
$$
知 $\operatorname{Ext}^m(Y,\cdot)={\operatorname{Hom}}(H^{-m}(Y),\cdot)$ 与滤并集交换。

（下一段是为了证明 $H^{-m}(Y)$ 是 $S$ 的对象的直和的商。
只关心 $S$ 生成 $\mathcal{A}$ 情形的读者可以跳过。）

取上有界余链复形 $P''^\bullet$，及映射
$\phi\colon P''^\bullet\to X$，
使得每个 $P''^i$ 为 $S$ 中对象的直和，
且 $H^i(\phi)$ 当 $i>-m$ 时为同构，
当 $i=-m$ 时为满射。
则 $P'^\bullet\to X$ 可提升为余链复形的映射
$P'^\bullet\to P''^\bullet$。
令 $Y'^\bullet$为$P'^\bullet\to P''^\bullet$ 的余链复形映射锥，
它是逐项为$S$中对象直和的上有界余链复形。
则有映射 $Y'^\bullet\to Y$，
且 $H^i(Y)=0$ 对 $i>-m$ 成立，而 $H^{-m}(Y'^\bullet)\to H^{-m}(Y)$ 为满射。
于是 $H^{-m}(Y)$ 是一族 $S$ 中对象的直和的商。

由 @finite-type-object，
$H^{-m}(Y)$ 是 $S$ 的对象的有限直和的商。
取这样一个满射 $L\to H^{-m}(Y)$。
令 $L[m]\to Y$ 为这诱导的映射。

令 $P^\bullet$ 为 $L[m+1]\to Y[1]\to P'^\bullet$ 的链复形映射锥。
则映射 $P^\bullet\to X$ 即为所求逼近，知 $(1)$ 成立。
:::

::: remark
笔者不清楚上述引理中 $(2)\implies(1)$ 是否在（相比紧投射生成）更弱的假设下成立。
如有了解者欢迎补充。
:::

令 $\mathsf{Latt}\subset\mathsf{Ab}$ 为以有限自由
$\mathbb{Z}$ 模为对象的满子范畴。
则有函子 $\widetilde{Q^n}=Q^n|_{\mathsf{Latt}}$。
我们注意到，$Q^n=\mathbb{Z}[{\operatorname{Hom}}(\mathbb{Z}^n,\cdot)]$ 是可表函子自由生成的群。
于是对一切 $\mathcal{F}:\mathsf{Ab}\to\mathsf{Ab}$，
有
${\operatorname{Hom}}(Q^n,\mathcal{F})={\operatorname{Hom}}(\widetilde{Q^n},\mathcal{F}|_{\mathsf{Latt}})=\mathcal{F}(\mathbb{Z}^n)$。
我们进一步注意到，
$\{\widetilde{Q^n}\}_{n\in\mathbb{N}}$是$\mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$
的一族紧投射生成元。

::: lemma
若 $\operatorname{id}_{\mathsf{Latt}}\in \mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$伪凝聚，
则 @resolution-lemma 成立。
:::

::: proof
由伪凝聚性立得 $\operatorname{id}_{\mathsf{Latt}}$ 有各项为 $\{\widetilde{Q^n}\}_{n\in\mathbb{N}}$
的对象的有限直和的投射消解。
记为 $\widetilde{P^\bullet}\to\operatorname{id}_{\mathsf{Latt}}$，
并取定同构 $\widetilde{P^{-i}}=\bigoplus_{j=1}^{n_i}\widetilde{Q^{r_{ij}}}$。
令 $P^{-i}=\bigoplus_{j=1}^{n_i}Q^{r_{ij}}$。
则复形 $\widetilde{P^\bullet}\to\operatorname{id}_{\mathsf{Latt}}$ 唯一延拓为
$\mathsf{Fun}(\mathsf{Ab},\mathsf{Ab})$ 中的复形 $P^\bullet\to\operatorname{id}_{\mathsf{Ab}}$。
现在只需证明这个复形正合。
对于关心集合论问题的读者，容易注意到这里并不本质地用到
$\mathsf{Fun}(\mathsf{Ab},\mathsf{Ab})$，
而只是用它来陈述函子性。

现在 $P^\bullet\to\operatorname{id}_{\mathsf{Ab}}$ 在有限自由 $\mathbb{Z}$ 模处的截面正合。
由于各项作为函子均与滤余极限交换，知道它在自由 $\mathbb{Z}$ 模处的截面正合。

任取Abel群 $A$，
则由Dold–Kan有单纯自由消解 $B_\bullet\to A$。
则 $(P^\bullet(B_\bullet)\to B_\bullet)$
是 $(P^\bullet(A)\to A)$
的单纯消解。
由于前者零调，后者亦然。从而结论得证。
:::

我们有如下关于伪凝聚性的技术性的结果：

::: lemma {@pcoh-almost-resolution-criterion}
设$P^\bullet$是 Grothendieck Abel 范畴 $\mathcal{A}$ 的上有界余链复形，
$P^i$紧投射对一切$i$成立。
假设 $\mathcal{A}$ 紧投射生成。
设$n$为自然数。
假设$-n\le i<0$时，$H^i(P^\bullet)$是$n+i$-伪凝聚的。
则$H^0(P^\bullet)$是$n$-伪凝聚的。
:::

::: proof
令 $X=H^0(P^\bullet)$。
由于 $X$ 是 $P^0$ 的商，它 $0$-伪凝聚。
对 $n$ 归纳，
可假设 $X$ 是 $n-1$-伪凝聚的对象。
由 @pcoh-equivalent-def，
只需证明 $\operatorname{Ext}^n(X,\cdot):\mathcal{A} \to \mathsf{Ab}$
与滤并集交换。

令 $Y$ 为 $P\to X[0]$ 的映射余锥。
对 $A\in \mathcal{A}$，我们有长正合列
$\operatorname{Ext}^{n-1}(P^\bullet,A) \to \operatorname{Ext}^{n-1}(Y,A) \to \operatorname{Ext}^n(X,A) \to \operatorname{Ext}^n(P^\bullet,A) \to \operatorname{Ext}^n(Y,A)$
与 Grothendieck 谱序列
$\operatorname{Ext}^p(H^{-q}(Y), A) \Rightarrow \operatorname{Ext}^{p+q}(Y, A)$。
它们均为关于 $A$ 函子性的。
注意到，$\operatorname{Ext}^p(H^{-q}(Y), \cdot)$
在 $p+q\le n$ 时与滤并集交换。
于是
$\operatorname{Ext}^{n-1}(Y,\cdot)$ 与滤并集交换，
而对任何滤并集 $A=\bigcup A_i$，
$\operatornamewithlimits{colim} \operatorname{Ext}^n(Y,A_i) \to \operatorname{Ext}^n(Y,A)$ 为单射。
又对一切 $i$ 有 $\operatorname{Ext}^i(P^\bullet,\cdot)$ 与滤并集交换。
从而由长正合列知 $\operatorname{Ext}^n(X,\cdot)$ 与滤并集交换。
:::

接下来我们不加证明地引用如下代数拓扑结论。

::: -remark [回忆]
存在一列有限生成交换群 $M_k$，满足以下条件：
设 $P$ 是有限生成自由交换群，$n$ 是自然数，
$K(P,n)$ 是分类空间，
则当 $0 \le i<n$ 时，
有函子性的自然同构
$H_{n+i}(K(P,n),\mathbb{Z}) = P \otimes_{\mathbb{Z}} M_i$。
:::

::: -remark [回忆]
设 $P$ 是交换群，$n$ 是自然数。
考虑 $n$ 重杠构造的单纯几何实现 $|B^n P| \in s\mathsf{Ab}$。
则它作为单纯集典范同伦等价于 $K(P,n)$。
:::

由此我们即可得到最终结果。

::: lemma
$\operatorname{id}_{\mathsf{Latt}}\in \mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$伪凝聚。
:::

::: proof
我们对 $m$ 归纳证明 $m$-伪凝聚性。
显然，它 $-1$-伪凝聚。

假设 $m-1$-伪凝聚性已证。
我们考虑 $P \mapsto (\mathbb{Z}[|B^{m+1}P|])[-m-1]$。
这是
$\mathsf{Fun}(\mathsf{Latt}, \mathsf{Ch}(\mathsf{Ab}))=\mathsf{Ch}(\mathsf{Fun}(\mathsf{Latt}, \mathsf{Ab}))$
的对象。
则由杠构造的具体形式，
这个复形的各项为$\mathsf{Fun}(\mathsf{Latt}, \mathsf{Ab})$的紧投射对象，
且由上面引用的结论，
当 $0\le i \le m$ 时，
它的 $i$ 阶同调为 $\operatorname{id}_{\mathsf{Latt}} \otimes_{\mathbb{Z}} M_i$。
由于 $\operatorname{id}_{\mathsf{Latt}}$ $m-1$-伪凝聚，
$\operatorname{id}_{\mathsf{Latt}} \otimes_{\mathbb{Z}} M_i$ 亦然。
从而由 @pcoh-almost-resolution-criterion 知
$\operatorname{id}_{\mathsf{Latt}}$ $m$-伪凝聚。
:::

正文中还需要一个推论。

::: corollary {@倍数同伦}
对 $k\in\mathbb{Z}$，定理中的典范消解有两个自映射：
一个是复形每一项乘 $k$，另一个是由 $k\colon A\to A$ 以及消解的典范性诱导，
分别记作 $k$ 和 $[k]$。则这两个映射典范同伦，即存在关于 $A$ 典范的
$h\colon P^\bullet\to P^{\bullet-1}$，使得 $k-[k]=dh+hd$。
:::

::: proof
还是将典范消解视为 $\operatorname{id}_{\mathsf{Latt}}$ 在
$\mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$ 中的投射消解。注意
$k$ 与 $[k]$ 在函子 $\operatorname{id}_{\mathsf{Latt}}$ 上是同一个映射，
由一般范畴投射消解的性质即知它俩在 $\mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$
中同伦。由于 $\bigoplus_{j=1}^{n_i}\mathbb{Z}[A^{r_{ij}}]$ 的每个元素都只涉及
$A$ 的有限个元素，在某个映射 $L\to A$，$L\in\mathsf{Latt}$
的像集中，所以由典范性不难将 $\mathsf{Fun}(\mathsf{Latt},\mathsf{Ab})$
中同伦唯一延拓成为 $\mathsf{Fun}(\mathsf{Ab},\mathsf{Ab})$
中同伦，即对所有交换群的典范同伦。
:::

```terms
伪凝聚:
  en: pseudo-coherent
滤并集:
  en: filtered union
杠构造:
  en: bar construction
```
