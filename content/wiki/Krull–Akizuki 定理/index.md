---
title: Krull–Akizuki 定理
aliases: [Krull-Akizuki 定理]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “证明”一节第二个引理的证明中，由第一个引理得到的似乎应为 $\ell_A(M/aM)\le n\ell_A(A/a)$ 而非等式，因为 $M$ 的秩可能小于 $V$ 的维数 $n$；后文 $\ell_A(M'/aM')=n\ell_A(A/a)$ 同此。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Krull–Akizuki 定理**是个[[交换代数]]定理，
说的是对[[整环]]之间的[[整扩张]] $A\to B$，
如[[分式域]]扩张[[有限扩张|有限]]，
且 $A$ 是[[Krull 维数|一维]] [[Noether 环]]，
则 $B$ 也是一维 Noether 环。

注意定理的条件不能保证 $A\to B$ 是[[有限同态]]。

## 陈述

::: theorem {@KA}
$A\to B$ 是[[整环]]的[[整扩张]]。分别以 $K,L$ 记 $A,B$
的分式域。如 $A$ 是一维 Noether 环，$L/K$ 是[[有限扩张]]，
则 $B$ 也是一维 Noether 环。
:::

## 证明

先证两个引理。

::: lemma {@欧拉数}
$A$ 是一维 Noether 整环，$K$ 是其分式域。则对非零元
$a\in A$ 以及有限生成 $A$-模 $M$ 有
$$
\ell_A(M/aM)-\ell_A(M[a])=n\ell_A(A/a),
$$
其中 $n=\operatorname{rk}(M)=\dim_K(M\otimes_AK)$，
$M[a]=\ker(a\colon M\to M)$。
:::

::: proof
先证 $n=0$ 情形。此时 $M$ 的支集只有极大理想，
故其为有限长。由正合列
$$
0\to M[a]\to M\to M\to M/aM\to0
$$
便知 $\ell_A(M/aM)-\ell_A(M[a])=0$。注意如
$$
0\to N\to M\to Q\to0
$$
是有限生成 $A$-模的短正合列，则对图表
\[
\begin{tikzcd}
  0\ar[r]&N\ar[r]\ar[d,"a"]&M\ar[r]\ar[d,"a"]&Q\ar[r]\ar[d,"a"]&0\\
  0\ar[r]&N\ar[r]&M\ar[r]&Q\ar[r]&0
\end{tikzcd}
\]
用[[蛇引理]]，知只要命题对 $N,Q$ 成立，它也就对 $M$ 成立。

现在来证明 $n>0$ 情形。取 $M$ 的一组元素 $m_1,\ldots,m_n$
使其在 $M\otimes_AK$ 的像是一组基。于是这组元素定义的映射
$A^n\to M$ 是单射，且其余核的[[秩 (模论)|秩]]为 $0$。
于是由上一段所注意，只需对 $A^n$ 证明命题，而这是显然的。
:::

::: lemma {@长度有界}
$A$ 是一维 Noether 整环，$K$ 是其分式域。设 $V$ 是
$K$ 上有限维线性空间，$n\in\mathbb{N}$ 是其维数。则对非零元 $a\in A$
以及 $A$-子模 $M\subseteq V$，有
$$
\ell_A(M/aM)\le n\ell_A(A/a).
$$
特别地，$M/aM$ 为[[有限长模]]。
:::

::: proof
如 $M$ 为有限生成，则由 @欧拉数 知
$\ell_A(M/aM)=n\ell_A(A/a)$。现证一般情况，用反证法。
如有 $M$ 使得 $\ell_A(M/aM)>n\ell_A(A/a)$，则 $M$ 有子模链
$$
aM=M_0\subsetneqq M_1\subsetneqq\cdots\subsetneqq M_\ell=M
$$
使得 $\ell>n\ell_A(A/a)$。对 $i=1,\ldots,\ell$
分别取 $m_i\in M_i\setminus M_{i-1}$。以
$M'$ 记 $m_1,\ldots,m_\ell$ 生成的子模，并对
$j=1,\ldots,\ell$ 以 $M'_j$
记 $aM'$ 与 $m_1,\ldots,m_j$ 生成的子模。则 $M'$ 有子模链
$$
aM'=M'_0\subsetneqq M'_1\subsetneqq\cdots\subsetneqq M'_\ell=M'.
$$
而 $M'$ 有限生成，$\ell_A(M'/aM')=n\ell_A(A/a)<\ell$，矛盾！
故总有 $\ell_A(M/aM)\le n\ell_A(A/a)$。
:::

有这两个引理之后，便可证明更强的命题。

::: proposition
$A\to B$ 是整环的单同态。分别以 $K,L$
记 $A,B$ 的分式域。如 $A$ 是一维 Noether 环，
$L/K$ 是有限扩张，则 $B$ 是至多一维的 Noether 环。
事实上，对任意非零元 $b\in B$，都有 $\ell_A(B/b)<\infty$。
:::

::: proof
设命题最后一句话成立。则对 $B$
的每个非零理想 $I$，取其中非零元 $b$，有
$\ell_B(I/bB)\le\ell_A(I/bB)\le\ell_A(B/bB)<\infty$。
特别地，$I/bB$ 为有限生成 $B$-模，故 $I$ 也是。
于是 $B$ 为 Noether 环。而最后一句话推出对每个非零元
$b$，$B/b$ 都是 [[Artin 环]]；故由[[维数理论 (交换代数)|维数理论]]知
$B$ 至多一维。

所以只需证命题最后一句话。写 $b$ 在 $K$ 上的极小多项式，有 $c_1,\ldots,c_n\in K$ 使得
$$
b^n+c_1b^{n-1}+\cdots+c_n=0,
$$
且 $c_n\ne0$。设 $a\in A$ 是 $c_1,\ldots,c_n$ 的公分母，则有
$$
ac_n=-ab^n-ac_1b^{n-1}-\cdots-ac_{n-1}b\in bB.
$$
注意 $ac_n$ 是 $A$ 中非零元。由 @长度有界，
$\ell_A(B/ac_nB)<\infty$，而 $ac_nB\subseteq bB$，
故 $\ell_A(B/bB)<\infty$。
:::

以下推论也常被称为“Krull–Akizuki”。

::: corollary
设 $A$ 是 [[Dedekind 环]]，$K$ 是其分式域，$L/K$
是[[有限扩张]]。则 $A$ 在 $L$ 中的整闭包 $B$ 也是 Dedekind 环。
:::

::: proof
由 @KA，$B$ 是一维 Noether 环。由定义，
$B$ 为整闭。所以 $B$ 是 Dedekind 环。
:::

## 评注

需要注意的是，@KA 的条件不能保证 $A\to B$ 有限。
这可能发生在 $A$ 不整闭或 $L/K$ 不可分时。请看下例。

::: example
取特征 $p$ 域 $k$ 使得 $[k^{1/p}:k]=\infty$，例如
$\mathbb{F}_p$ 上无穷个变元的有理函数域。考虑
$$
A=\left\{\sum_{n=0}^\infty a_nx^n\in k^{1/p}[[x]]\Biggm|
[k(a_n)_{n=0}^\infty:k]<\infty\right\},
$$
则 $A$ 为[[离散赋值环]]，素元为 $x$。记其分式域为 $K$。
取 $f\in k^{1/p}[[x]]\setminus A$，则 $f^p\in A$。
记 $A'=A[f]$，$L=K(f)$，则 $L/K$ 为 $p$ 次纯不可分扩张，
$A'$ 作为 $A$-模为秩 $p$ 自由。以 $B$ 记 $A'$ 的整闭包，
亦即 $A$ 在 $L$ 中的整闭包。下证 $A\to B$ 不是有限同态。

写出 $f=\sum_{m=0}^\infty a_mx^m$。对 $n\in\mathbb{N}$，
令 $g_n=a_0+a_1x+\cdots+a_{n-1}x^{n-1}$，
则 $g_n\in A$。令 $h_n=x^{-n}(f-g_n)=\sum_{m=0}^\infty a_{m+n}x^m$，
则 $h_n\in L$；又 $h_n^p\in k[[x]]\subseteq A$，故
$h_n\in B$。于是 $f=g_n+x^nh_n\in A+x^nB$。
现如 $B$ 是有限生成 $A$-模，对 $B/A$ 用 [[Krull 交定理]]，
就有 $f\in\bigcap_{n=0}^\infty(A+x^nB)=A$，矛盾！
所以 $A\to B$ 并不有限。自然，这说明 $A'\to B$ 也不有限。
:::

```terms
Krull–Akizuki 定理:
  en: Krull–Akizuki theorem
  de: Satz von Krull–Akizuki
  fr: théorème de Krull–Akizuki
```
