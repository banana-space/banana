---
title: 半单模
categories: [模论]
---

**半单模**是[[单模]]的[[直和]]（@def-ss-mod）。
也被称为**完全可约模**
（在[[表示论]]中被称为**完全可约表示**）。

## 定义

::: definition {@def-ss-mod}
环 $A$ 上的（左、右、双）模是**半单模**，
如果它同构于若干[[单模]]（可以为空或无限）的[[直和]]。
:::

::: definition [等价定义] {@eqv-def-ss-mod}
下述均可以作为半单模的等价定义：

- 环 $A$ 上的（左、右、双）模是**半单模**，
  如果它是若干单子模（可以无限）的和。

- 环 $A$ 上的（左、右、双）模 $M$ 是**半单模**，
  如果对其任意子模 $M_1$，存在另一个子模 $M_2$，使得
  $M = M_1 \oplus M_2$。

:::

::: remark
在[[范畴论]]的语言中，上述定义转述为：
半单模是[[模范畴]]中的[[半单对象]]。
:::

::: definition
给定环上的所有**半单（左、右、双）模**构成的范畴称为
（左、右、双）半单模范畴，记为 $\mathsf{ssMod}$。
它是[[模范畴]]的[[满子范畴]]，也是 [[Abel 子范畴]]。
:::

## 性质

::: proposition
上述若干定义
（@def-ss-mod 与 @eqv-def-ss-mod）
等价。
:::

::: proof
我们证明左模的情形。如果环 $A$ 上的模 $M$ 是一些单模的直和，
则它一定是这些单模的和。另一方面，如果 $M$ 是一些单模的和，
我们证明可以从这些单模中选出一些单模，使 $M$ 等于它们的直和。
设 $M=\sum_{\lambda\in\Lambda} M_\lambda$ 且不妨设 $\Lambda\ne\varnothing$。
取 $\Lambda$
的子集 $J$，使 $\sum_{\lambda \in J} M_\lambda$ 为直和，
且 $J$ 是极大的满足这种条件的子集。根据 Zorn 引理，这样的 $J$ 是存在且非空的。
我们证明每一个 $M_\lambda, \lambda\in \Lambda$ 都包含于
$\sum_{\lambda\in J} M_\lambda$。因为对于每一个 $\mu\in J$，$M_\lambda
  \cap M_\mu=M_\lambda\text{ 或 }\{0\}$，故如果 $M_\lambda$ 不包含于任何一个
$M_\mu,\mu\in J$，则 $M_\lambda+\sum_{\mu\in J}M_\mu$ 是直和，
与极大性矛盾。故 $M$ 是一些单模的直和。

如果 $M$ 是一些单模的直和，设直和分解为 $M=\sum_{\lambda\in \Lambda}M_\lambda$，
现在设 $M_1$ 是它的一个子模，我们同上取使 $M_1+\sum_{\mu\in J}M_\mu$ 为直和的
极大子集 $J\subset \Lambda$。则同样可以证明 $M_1\oplus M_2=M$，
其中 $M_2=\sum_{\mu\in J}M_\mu$。
反之，设 $M$ 的任意子模 $M_1$ 在 $M$ 中都有补模，我们证明 $M$ 的任何非零子模都包含
一个单模。设 $M'\subset M$ 是 $M$ 的子模，$0\ne v\in M'$，则 $Av\subset M'$
也是 $M$ 的子模。模同态 $A\to Av$ 的核，即 $v$ 的零化子，
是 $A$ 的一个真理想 $I$，它含于 $A$ 的一个极大理想 $\mathfrak{m}$ 中。
考虑 $\mathfrak{m}v$，它在同构 $A/I\cong Av$ 下对应于 $\mathfrak{m}/I$，
是 $A/I$ 的极大真子模。这时由条件 $M=\mathfrak{m}v\oplus M'$，
从而 $Av=\mathfrak{m}v\oplus(Av\cap M')$。因为 $\mathfrak{m}v$
的极大性，故 $Av\cap M'$ 是单模。
现在设 $M_0$ 是含于 $M$ 所有单模的和，我们证明它等于 $M$。否则，$M=M_0\oplus M_1$，
$M_1$ 非零，则 $M_1$ 含有一个单模，这和 $M_0$ 是 $M$ 中所有单模的和矛盾。
故 $M$ 是含于它的所有单模的和。
:::

半单模定义中的直和分解是唯一的，
且可以显式表示出来。

::: proposition
@def-ss-mod 中的分解是唯一的，即对两个分解
$M = \bigoplus_{i \in I} M_i = \bigoplus_{j \in J} N_j$，
存在双射 $\pi \colon I \to J$ 使 $M_i \simeq N_{\pi(i)}$。
:::

::: proof
由[[Schur 引理]]，
只需证明：当 $M_i\cong N_j\cong E$ 时，有 $I, J$ 等势。
事实上，
由于单模是循环模，
每个 $M_i$ 含于某个 $\bigoplus_{J_i}N_j$，
其中 $J_i\subset J$ 非空且有限。
我们有 $J=\bigcup_I J_i$。
故 $I$ 有限推出 $J$ 有限，
$I$ 无限推出 $|J|\leq |I|$。

因此 $I,J$ 无限时有 $|I|=|J|$。
当 $I,J$ 有限时，
$\operatorname{Hom}_A(M,E)$ 是
左 $\operatorname{End}_A(E)$ 模。
而 $\operatorname{Hom}_A(M,E)=
  \bigoplus_I \operatorname{Hom}_A(M_i,E)=
  \bigoplus_J \operatorname{Hom}_A(N_j,E)$。
由[[除环]] $\operatorname{End}_A(E)$ 上的模论知 $|I|=|J|$。
:::

::: proposition
设 $M$ 为半单模。
作为 $A$ 模，
我们有自然的直和分解
$$
M\cong \bigoplus\
\operatorname{Hom}_A(U_i,M)
\otimes_{\operatorname{End}_A(U_i)} U_i
$$
其中 $U_i$ 跑遍环 $A$ 上的单模。
我们称 $\operatorname{Hom}_A(U_i,M)$
为 $U_i$ 在 $M$ 中的重数空间。
:::

::: remark
上述分解中的直和项为右模与左模的张量积，
且 $a\in A$ 在其上的作用如下
$$
a\cdot (f\otimes u) = f\otimes (au)\ .
$$
注意到 $\operatorname{End}_A(U_i)$ 是除环，
$\operatorname{Hom}_A(U_i,M)$ 自由，
其维数确实是 $U_i$ 在 $M$ 中的重数。
:::

::: proof
由半单模的定义，我们有
$$
M=\bigoplus U_i^{\ \oplus I_i}\ .
$$
由 [[Schur 引理]]，
$$
\operatorname{Hom}_A(U_i,M)\cong
\operatorname{Hom}_A(U_i,U_i^{\ \oplus I_i})\cong
\bigoplus_{I_i} \operatorname{Hom}_A(U_i,U_i)\ .
$$
其中第二个同构用到了 $U_i$ 是循环模的事实。
因此
$$
\bigoplus\
\operatorname{Hom}_A(U_i,M)
\otimes_{\operatorname{End}_A(U_i)} U_i
\cong \bigoplus\ U_i^{\oplus I_i}
\cong M\ .
$$
容易知道上述同构是自然的。
:::

::: proposition
半单模的[[子模]]和[[商模]]均为半单模。
:::

::: proof
取定 $M$ 为半单模。
设 $N$ 为其子模。
对 $N$ 的任意子模 $N_1$，
存在 $M$ 的子模 $M_1$ 使得 $N_1\oplus M_1=M$。
故 $N_1\oplus (M_1\cap N)=N$。
由半单模的等价定义知 $N$ 半单。

设 $N$ 是 $M$ 的商模，
即存在满同态 $\pi\colon M\to N$。
对 $N$ 的任意子模 $N_1$，
存在 $M$ 的子模 $M_1$ 使得 $\pi^{-1}N_1\oplus M_1=M$。
则 $N_1\oplus \pi(M_1)=N$，
故 $N$ 半单。
:::

对一般的模，可以构造其相应的半单模。

::: definition
模 $M$ 的**首**为其（唯一，未必存在）最大商半单模，
记为 $\operatorname{hd}(M)$。
:::

::: definition
模 $M$ 的**座**为其（存在且唯一）最大子半单模，
记为 $\operatorname{soc}(M)$。
:::

::: proposition
上述二种半单化分别为从半单模范畴到模范畴的含入函子
$\operatorname{in}$ 的[[左伴随]]和[[右伴随]]。即
\[
\operatorname{hd} \dashv \operatorname{in} \dashv
\operatorname{soc}, \quad
\mathsf{ssMod} \rightleftarrows \mathsf{Mod}
\]
:::

::: definition
对[[有限长模]] $M$，设其[[合成列]]为
\[
0 \subsetneq M_1 \subsetneq \cdots \subsetneq M_k = M,
\]
则其**半单化**为
\[
M^{\mathrm{ss}} = \bigoplus_{i = 1} ^{k} M_i / M_{i - 1}.
\]
:::

## 例子

- [[域]]上[[矩阵环]]上的所有模均为半单模。

- [[群代数]] $K[G]$ 上的模均为半单模，
  如 $K$ 是[[特征]] $0$ 域，且 $G$ 为有限群。

```terms
半单模:
  en: semisimple module
  de: halbeinfacher Modul
  fr: module semi-simple
  grc: ἡμιάπλουν πρότυπον
  la: modulus semisimplex
```
