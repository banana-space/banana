---
title: 准素分解
aliases: [Lasker–Noether 定理, 准素理想, Lasker–Noether 准素分解, Lasker-Noether 准素分解, Lasker-Noether 定理]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**准素分解**，又称 **Lasker–Noether 准素分解**或
**Lasker–Noether 定理**，是 20 世纪初的代数学家对[[理想唯一分解]]的推广尝试，
指的是 [[Noether 环]]的理想都能写成有限多个准素理想的交，
且有较弱的唯一性。它在现代[[交换代数]]中被废弃，完全由[[结合素理想]]的理论所取代。

## 定义与定理

::: definition [准素理想]
环 $A$ 的真理想 $P$ 称为**准素**，
指对任一 $a,b\in A$，如果 $ab\in P$
而 $b\notin P$，则存在 $n\in\mathbb{N}$，$a^n\in P$。
也就是说，环 $A/P$ 的[[零因子]]都是[[幂零元]]。
此时 $\mathfrak{p}=\sqrt{P}$ 是素理想，
也称 $P$ 为 $\mathfrak{p}$-准素。
:::

::: remark
$\sqrt{P}$ 是素理想未必说明 $P$ 是准素理想。
任取域 $k$，考虑 $A=k[x,y,z]/(xy-z^2)$，
$\mathfrak{p}=(x,z)$，则 $\mathfrak{p}$ 是素理想。
$\mathfrak{p}^2=(x^2,xz,z^2)\ni xy$，但 $x\notin\mathfrak{p}^2$，
且对任意 $n\in\mathbb{N}$，$y^n\notin\mathfrak{p}^2$。
:::

::: theorem [理想准素分解]
对 Noether 环 $A$ 及其理想 $I$，存在准素理想
$P_1,\ldots,P_n$ 使得各 $\sqrt{P_i}$ 互异，
$$
I=\bigcap_{i=1}^nP_i,
$$
且上式无冗余，即去除任一个 $P_i$ 都使等号变为严格包含。
该分解未必唯一，但如令 $\mathfrak{p}_i=\sqrt{P_i}$，
则子集 $\{\mathfrak{p}_1,\ldots,\mathfrak{p}_n\}\subseteq\operatorname{Spec}A$
唯一。此子集中极小者对应的准素理想也唯一，由
$P_i=IA_{\mathfrak{p}_i}\cap A$ 给出。
:::

::: definition [准素模]
环 $A$ 的非零模 $M$ 称为**准素**，指对任一 $a\in A$，$m\in M$，
如果 $am=0$ 而 $m\ne0$，则存在 $n\in\mathbb{N}$，$a^nM=0$。
此时 $\mathfrak{p}=\sqrt{\operatorname{Ann}_A(M)}$
是素理想，也称 $M$ 为 $\mathfrak{p}$-准素。
:::

::: theorem [模准素分解] {@模准素分解}
对 Noether 环 $A$ 及其[[有限生成模]] $M$，存在子模
$N_1,\ldots,N_n$ 以及唯一一组相异素理想
$\mathfrak{p}_1,\ldots,\mathfrak{p}_n$，使得
$$
\bigcap_{i=1}^nN_i=0,
$$
上式无冗余，且 $M/N_i$ 为 $\mathfrak{p}_i$-准素。$\mathfrak{p}_1,\ldots,\mathfrak{p}_n$
中极小者对应的子模唯一，由 $N_i=\ker(M\to M_{\mathfrak{p}_i})$ 给出。
:::

显然，$A$ 的理想 $P$ 是 $\mathfrak{p}$-准素理想当且仅当
$A/P$ 是 $\mathfrak{p}$-准素模；如 $I$ 是 Noether 环 $A$
的理想，对 $A/I$ 用模准素分解即得 $I$ 的理想准素分解。
在此将两个准素分解定理中的交集等式称为**分解式**。

## 证明

由以上分析，只需证模准素分解。以下引理将准素模与结合素理想联系起来：

::: proposition {@刻画}
Noether 环 $A$ 的有限生成模 $M$ 是准素模，
当且仅当它只有一个结合素理想。
:::

::: proof
如 $M$ 准素，我们来证 $\mathfrak{p}=\sqrt{\operatorname{Ann}_A(M)}$
是其唯一的结合素理想。设 $\operatorname{Ann}(m)$ 是其一个结合素理想，
其中 $m\in M$ 非零。则对 $a\in\operatorname{Ann}(m)$，
由准素模的定义，存在 $n\in\mathbb{N}$ 使得 $a^n\in\operatorname{Ann}(M)$，
即 $a\in\mathfrak{p}$。于是
$$
\operatorname{Ann}(M)\subseteq\operatorname{Ann}(m)\subseteq\mathfrak{p}.
$$
由于素理想开根还是它自己，将上式开根即得 $\operatorname{Ann}(m)=\mathfrak{p}$。

反过来如 $\operatorname{Ass}(M)=\{\mathfrak{p}\}$，
我们来证 $M$ 为 $\mathfrak{p}$-准素。为此需对任一非零元
$m\in M$ 证明 $\operatorname{Ann}(m)\subseteq\sqrt{\operatorname{Ann}(M)}$。
首先由结合素理想与支集的关系可知 $\sqrt{\operatorname{Ann}(M)}=\mathfrak{p}$；
然后由结合素理想与零化子的关系即知 $\operatorname{Ann}(m)\subseteq\mathfrak{p}$。
:::

::: corollary {@合并}
$A$ 是 Noether 环，$\mathfrak{p}$ 是其素理想。
$M$ 是 $A$-模，$N,N'$ 为其两个子模。如
$M/N$ 和 $M/N'$ 都是 $\mathfrak{p}$-准素，
则 $\frac{M}{N\cap N'}$ 也是。
:::

::: proof
这是因为 $\frac{M}{N\cap N'}\hookrightarrow M/N\oplus M/N'$，
于是 $\operatorname{Ass}(\frac{M}{N\cap N'})\subseteq
\operatorname{Ass}(M/N)\cup\operatorname{Ass}(M/N')=\{\mathfrak{p}\}$。
:::

::: lemma {@单射}
如 $M$ 为 $\mathfrak{p}$-准素，则 $M\to M_\mathfrak{p}$
为单射。
:::

::: proof
由局部化的定义，如非零元 $m\in M$ 在 $M_\mathfrak{p}$
的像为 $0$，则存在 $s\in A\setminus\mathfrak{p}$
使得 $sm=0$。这样由于准素，存在 $n\in\mathbb{N}$，$s^nM=0$，
但这与 $\mathfrak{p}=\sqrt{\operatorname{Ann}(M)}$
矛盾。
:::

还需要一些关于分解的一般事实。在此称 $M$ 的真子模 $N$
**不可分解**，指不存在 $N',N''$ 真包含 $N$，使得 $N=N'\cap N''$。

::: lemma {@分解}
Noether 模的每个子模都能写成不可分解子模的有限交。
特别地，$0$ 是不可分解子模的有限交。
:::

::: proof
反证法。如其不然，用 Noether 取出极大反例 $N\subseteq M$。
则首先 $N\ne M$，因为 $M$ 是空交，当然是有限交。其次
$N$ 可分解，否则就是自己一个模的交。于是 $N=N'\cap N''$，
$N',N''$ 都严格包含 $N$。但由 $N$ 是极大反例，$N'$ 和 $N''$
都是不可分解子模的有限交，于是 $N$ 也是，矛盾。
:::

::: lemma {@准素}
如 $M$ 的子模 $N$ 不可分解，则 $M/N$ 准素。
:::

::: proof
$M$ 的子模 $N$ 不可分解相当于说 $M/N$ 的子模 $0$ 不可分解。
于是可不妨设 $N=0$。反证法，如 $M$ 有两个结合素理想 $\mathfrak{p},\mathfrak{q}$，
取出 $m,n\in M$ 使得 $\operatorname{Ann}(m)=\mathfrak{p}$，
$\operatorname{Ann}(n)=\mathfrak{q}$，则
$$
\operatorname{Ass}(Am\cap An)\subseteq
\operatorname{Ass}(Am)\cap\operatorname{Ass}(An)
=\{\mathfrak{p}\}\cap\{\mathfrak{q}\}=\emptyset,
$$
故 $Am\cap An=0$，矛盾。
:::

万事俱备，现在来证明定理。首先由结合素理想的理论，对 Noether 环
$A$ 及其有限生成模 $M$，$\operatorname{Ass}_A(M)$ 有限。

::: theorem
@模准素分解 成立，且
$\{\mathfrak{p}_1,\ldots,\mathfrak{p}_n\}=\operatorname{Ass}_A(M)$。
:::

::: proof
由 @分解，可将 $0$ 写成不可分解子模的有限交，
设 $0=\bigcap_{i=1}^nN_i$，$N_i$ 不可分解。
由 @准素，各 $M/N_i$ 都是准素模，设其为 $\mathfrak{p}_i$ 准素。
由 @合并，可设各 $\mathfrak{p}_i$ 互异。
最后再去掉其中冗余者，可设分解式无冗余。现在只剩唯一性以及极小素理想对应模的刻画。

由 $\bigcap_{i=1}^nN_i=0$，有
$$
M\hookrightarrow\bigoplus_{i=1}^nM/N_i,
$$
于是
$\operatorname{Ass}(M)\subseteq\bigcup_{i=1}^n\operatorname{Ass}(M/N_i)=\{\mathfrak{p}_1,\ldots,\mathfrak{p}_n\}$。
反过来，对任一 $i$，记 $N'_i=\bigcap_{j\ne i}N_j$，
则 $N'_i\cap N_i=0$，故 $N'_i\hookrightarrow M/N_i$；由
$\operatorname{Ass}(M/N_i)=\{\mathfrak{p}_i\}$ 知
$\operatorname{Ass}(N'_i)=\{\mathfrak{p}_i\}$；
又由 $N'_i\subseteq M$ 知 $\mathfrak{p}_i\in\operatorname{Ass}(M)$。
所以 $\{\mathfrak{p}_1,\ldots,\mathfrak{p}_n\}=\operatorname{Ass}_A(M)$。
现如 $\mathfrak{p}_i$ 极小，则对所有 $j\ne i$，
$$
\operatorname{Ass}_{A_{\mathfrak{p}_i}}((M/N_j)_\mathfrak{p_i})=\{\mathfrak{p}_j\}\cap\operatorname{Spec}A_{\mathfrak{p}_i}=\emptyset,
$$
从而 $(M/N_j)_{\mathfrak{p}_i}=0$，$(N_j)_{\mathfrak{p}_i}=M_{\mathfrak{p}_i}$；
将分解式对 $\mathfrak{p}_i$ 局部化，
即知 $(N_i)_{\mathfrak{p}_i}=0$，于是 $N_i\subseteq\ker(M\to M_{\mathfrak{p}_i})$；
对 $M/N_i$ 用 @单射，知 $N_i=\ker(M\to M_{\mathfrak{p}_i})$。
:::

```terms
准素分解:
  en: primary decomposition
  de: primäre Zerlegung
  fr: décomposition primaire
准素理想:
  en: primary ideal
  de: primäres Ideal
  fr: idéal primaire
```
