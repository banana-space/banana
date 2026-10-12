---
title: 整同态
aliases: [整扩张, 整元素, 整元]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换代数]]中，**整同态**是一类[[环同态]]，
推广了域的[[代数扩张]]概念。

## 定义

::: definition
$A\to B$ 是环同态。称元素 $b\in B$ **$A$ 上整元**，
意思是存在 $n\in\mathbb{N}$，$a_1,\ldots,a_n\in A$ 使得
$$
b^n+a_1b^{n-1}+\cdots+a_n=0,
$$
这里 $B$ 自然地视为 $A$-代数，即 $A$ 中元素乘以 $B$
中元素意为映射到 $B$ 之后相乘。称 $A\to B$ 为**整同态**，
意思是 $B$ 中每个元素都在 $A$ 上整。此时也称 $B$ 在 $A$ 上整。
下面将会看到，
$B$ 中在 $A$ 上的整元构成 $B$ 的子环，称为 $A$ 在 $B$
中**整闭包**或**正规化**。如该子环就是 $A$
本身，则称 **$A$ 在 $B$ 中整闭**。

单的整同态称为**整扩张**。
:::

::: definition
称[[整环]] $A$ **整闭**，指的是 $A$ 在其[[分式域]]中整闭。
其**整闭包**指的是它在分式域中的整闭包。
称一般的环 $A$ **正规**，指的是其在每个素理想处的[[局部化]]是整闭整环。
其**正规化**指的是它在它的[[既约化]]的[[局部化|完全分式环]]中的整闭包。
:::

## 性质

::: proposition
$A\to B\to C$ 是环同态，$c\in C$。如 $c$ 在 $A$ 上整，
则 $c$ 在 $B$ 上整。从而如 $A\to C$ 是整同态，则 $B\to C$
亦然。
:::

::: proof
显然。
:::

::: proposition
$A\subseteq B$ 是扩张。对 $b\in B$，以下几条等价：

1. $b$ 在 $A$ 上整。

2. $A[b]$ 在 $A$ 上[[有限同态|有限]]。

3. 存在 $A$-子代数 $C\subseteq B$，包含 $b$
   且在 $A$ 上[[有限同态|有限]]。

4. 存在 $A$-子模 $M\subseteq B$，
   在 $A$ 上有限生成，满足 $bM\subseteq M$，且
   $M$ 作为 $A[b]$-模零化子为 $0$。

:::

::: proof
1 推 2 是因为如 $b$ 在 $A$ 上整，如定义中写出 $b$ 满足的方程，
则 $1,b,\ldots,b^{n-1}$ 生成 $A[b]$。

2 推 3 推 4 为显然。

4 推 1 要用 [[Nakayama 引理]]。在引理中将环取为 $A$，
模取为 $M$，理想取为 $1$，模同态取为“乘以 $b$”，得存在
$a_1,\ldots,a_n\in A$ 使得 $b^n+a_1b^{n-1}+\cdots+a_n$
是 $M$ 到自身的零同态。于是由条件得
$$
b^n+a_1b^{n-1}+\cdots+a_n=0.
$$
:::

这里的条件 4 在比如 $1\in M$ 或者 $M$ 中含有 $B$
的[[非零因子]]时满足。

::: corollary {@整元素生成}
$A\to B$ 是环同态，则 $B$ 中在 $A$ 上整的元素构成子环。
从而如果 $B$ 能由在 $A$ 上整的元素生成，
则 $B$ 本身就在 $A$ 上整。
:::

::: proof
对 $b,b'\in B$ 在 $A$ 上整，要证明其和、差、积亦整。
由以上命题以及有限同态的传递性，$A[b,b']=A[b][b']$
在 $A$ 上有限。再由以上命题即知 $b$ 与 $b'$ 的和、差、积都在 $A$ 上整。
:::

::: proposition
$A$ 是整闭整环，$K$ 是其分式域。
$L$ 是 $K$ 的一个有限域扩张，$\alpha \in L$。
$f \in K[x]$ 是 $\alpha$ 的一个[[极小多项式]]。
则 $\alpha$ 在 $A$ 上整当且仅当 $f \in A[x]$。
:::

::: proof
若 $f \in A[x]$，则 $\alpha$ 显然在 $A$ 上整。
若 $\alpha$ 在 $A$ 上整，
设 $g \in A[x]$ 是 $\alpha$ 的一个零化多项式。
记 $g$ 的[[分裂域]]为 $M$。
由于 $f \mid g$，故存在 $\alpha_i \in M$，使得
\[
f(x) = \prod_i (x-\alpha_i).
\]
由于 $g(\alpha_i) = 0$，故 $\alpha_i$ 在 $A$ 上整。
利用 @整元素生成，$f$ 的系数均在 $A$ 上整。
又由于 $f \in K[x]$，且 $A$ 是整闭的，故 $f \in A[x]$。
:::

::: corollary [在基变换下保持]
$A\to B$ 是整同态，$A\to A'$ 是环同态，令 $B'=B\otimes_AA'$。
则 $A'\to B'$ 是整同态。
:::

::: proof
这是因为 $B'$ 由 $B$ 在 $A'$ 上生成，而 $B$ 中元素都在 $A'$
上整，因为在 $A$ 上整。
:::

以下性质常称为素理想“上行”。

::: proposition {@上行}
$A\to B$ 是整同态，$\mathfrak{p}\subseteq\mathfrak{q}$
是 $A$ 的素理想，$\mathfrak{P}$ 是 $B$ 的素理想，满足
$\mathfrak{P}\cap A=\mathfrak{p}$。则 $B$ 有素理想
$\mathfrak{Q}\supseteq\mathfrak{P}$，使得
$\mathfrak{Q}\cap A=\mathfrak{q}$。
素谱映射 $\operatorname{Spec}B\to\operatorname{Spec}A$
是闭映射。
:::

::: proof
把 $A$ 换成 $A/\mathfrak{p}$，$B$ 换成 $B/\mathfrak{P}$，
可设 $\mathfrak{p}$ 和 $\mathfrak{P}$ 是零理想。
对 $\mathfrak{q}$ 局部化可设 $(A,\mathfrak{q})$ 是局部环。
如果 $\mathfrak{q}B=B$，则存在元素 $q_1,\ldots,q_n\in\mathfrak{q}$
与 $b_1,\ldots,b_n\in B$ 使得 $\sum_{i=1}^nq_ib_i=1$。
令 $B'=A[b_1,\ldots,b_n]\subseteq B$，则 $B'$ 在
$A$ 上有限，且 $\mathfrak{q}B'=B'$。这与 [[Nakayama 引理]]矛盾！
故 $\mathfrak{q}B\subsetneqq B$。取极大理想
$\mathfrak{Q}\supseteq\mathfrak{q}B$，则
$\mathfrak{Q}\cap A\supseteq\mathfrak{q}$，而 $\mathfrak{q}$
极大，故 $\mathfrak{Q}\cap A=\mathfrak{q}$。

证 $\operatorname{Spec}B\to\operatorname{Spec}A$
是闭映射就是证明每个闭集 $\operatorname{Spec}(B/I)\subseteq\operatorname{Spec}B$
在 $\operatorname{Spec}A$ 的像集都闭。由于满射是整同态，
故复合映射 $A\to B\to B/I$ 也是整同态。以 $B/I$ 换 $B$，
只需证整同态在谱上的像集闭。任取 $\mathfrak{q}\in\operatorname{Spec}A$
在像集之外。则由上一段所证，包含于 $\mathfrak{q}$ 的素理想即
$\operatorname{Spec}A_\mathfrak{q}$ 都在像集之外，于是
$B\otimes_AA_\mathfrak{q}=0$。
而 $A_\mathfrak{q}=\operatornamewithlimits{colim}_{a\notin\mathfrak{q}}A_a$，
故存在 $a\notin\mathfrak{q}$ 使得 $B\otimes_AA_a=0$，
即开集 $D(a)\ni\mathfrak{q}$ 都在像集之外。像集外每个点都有开邻域在像集外，
故像集闭。
:::

::: remark
反过来，仿射的泛闭态射一定整，参见条目[[泛闭态射]]。
:::

整同态不增大 [[Krull 维数]]。

::: proposition {@域上整}
$k$ 是域，$R$ 是整的 $k$-代数，且是整环。则 $R$ 也是域。
:::

::: proof
任取非零元 $r\in R$。由整，存在 $k$ 系数首一多项式 $f$
使得 $f(r)=0$。取其中次数最低者，设为
$f(x)=x^n+a_1x^{n-1}+\cdots+a_n$。则由于 $R$ 是整环，
易知 $f$ 不可约。特别地，$a_n\ne0$。于是由
$$
1=-a_n^{-1}(r^n+a_1r^{n-1}+\cdots+a_{n-1}r)
=-a_n^{-1}(r^{n-1}+a_1r^{n-2}+\cdots+a_{n-1})r
$$
知 $r$ 可逆。所以 $R$ 是域。
:::

::: proposition
$f\colon A\to B$ 为整同态。则 $\dim B\le\dim A$。
如 $A,B$ 都是[[整环]]且 $f$ 为单射，则 $\dim B=\dim A$。
:::

::: proof
欲证 $\dim B\le\dim A$，只需对 $B$ 的素理想
$\mathfrak{P}\subsetneqq\mathfrak{Q}$，
证明其在 $A$ 的原像 $\mathfrak{p},\mathfrak{q}$ 满足
$\mathfrak{p}\subsetneqq\mathfrak{q}$。
假设不然，$\mathfrak{p}=\mathfrak{q}$。
把 $A$ 换成 $A_\mathfrak{p}/\mathfrak{p}A_\mathfrak{p}$，
$B$ 换成对应基变换，可设 $A$ 是域。再商去 $\mathfrak{P}$，
可设 $\mathfrak{P}=0$，$B$ 是整环。由 @域上整，
$B$ 也是域，这与 $\mathfrak{P}\subsetneqq\mathfrak{Q}$ 矛盾。

如 $A,B$ 都是整环且 $f$ 为单射，设 $\dim A=d$。
对 $A$ 中的最长素理想链
$$
0=\mathfrak{p}_0\subsetneqq\mathfrak{p}_1\subsetneqq\cdots\subsetneqq\mathfrak{p}_d
$$
以及 $B$ 的素理想 $0$ 用 $d$ 次 @上行，
即知 $\dim B\ge d$。结合上一段知 $\dim B=\dim A$。
:::

```terms
整同态:
  en: integral homomorphism
  de: ganzer Homomorphismus :m
  fr: homomorphisme entier :m
  la: integer homomorphismus :m
  grc: ἀκέραιος ὁμομορφισμός :m
```
