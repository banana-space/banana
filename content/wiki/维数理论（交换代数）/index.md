---
title: 维数理论（交换代数）
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “主要定理与证明”一节中关于 $\dim M/(a_1,\ldots,a_c)M\ge\dim M-c$ 的推论似乎需要假设 $A$ 是局部环且 $a_1,\ldots,a_c$ 属于其极大理想；否则似乎不成立，例如“例子”一节第二例中 $R[X]/(1-\pi X)$ 的维数是 $0$。
- “例子”一节最后一例没有给出具体的环。
- “同调不变量”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

[[交换环]]的 [[Krull 维数]]定义简短，但要证明它表现良好绝非易事。
例如“$A$ 上一元多项式环比 $A$ 本身多一维”这一断言看似十分基本，
但只知 Krull 维数定义者对此必无从下手。维数理论就是由此类命题及其证明所组成。
换言之，交换代数中的**维数理论**是交换环维数的基本性质的研究。

## 主要定理与证明

维数理论的主定理是

::: theorem
对 [[Noether 环|Noether]][[局部环]] $(R,\mathfrak{m},k)$
及其[[有限生成模]] $M$，以下三数相等：

- $M$ 的维数，即 $\operatorname{Supp}(M)\subseteq\operatorname{Spec}R$
  的 [[Krull 维数]]，或者说环 $R/\operatorname{Ann}(M)$ 的 Krull 维数，
  记作 $\dim M$。

- $M$ 的 [[Hilbert–Samuel 多项式]] $\chi_M$ 的次数，
  记作 $d(M)$。

- $M$ 的参数系中元素的最少个数，即最小的 $d$，满足存在
  $a_1,\ldots,a_d\in\mathfrak{m}$ 使得 $M/(a_1,\ldots,a_d)M$
  [[有限长模|有限长]]。将其记作 $d'(M)$。

:::

::: proof
商去 $\operatorname{Ann}(M)$ 不改变任何事情，
故可设 $\operatorname{Ann}(M)=0$。
我们来证明 $\dim M\ge d'(M)\ge d(M)\ge\dim M$。

- $\dim M\ge d'(M)$：对 $\dim M$ 归纳。
  $\dim M=0$ 时 $\operatorname{Supp}(M)=\{\mathfrak{m}\}$，
  从而 $M$ 本身已经有限长，$d'(M)=0$。现对 $d>0$，设 $\dim M<d$ 时命题已经成立，
  来证明 $\dim M=d$ 情形。为此写出 $\operatorname{Supp}(M)$
  里的极小素理想 $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$。
  注意[[结合素理想]]的理论保证这的确只有有限个。
  用[[素理想回避]]取出 $a\in\mathfrak{m}$ 不在
  $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$ 中。
  则 $\operatorname{Supp}(M/aM)\subset\operatorname{Supp}(M)$，
  且不包含 $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$。故由
  [[Krull 维数]]的定义，$\dim M/aM\le\dim M-1$。于是由归纳假设，
  $d'(M/aM)\le\dim M-1$，故 $d'(M)\le \dim M$。

- $d'(M)\ge d(M)$：设 $d'(M)=d$，来证 $d(M)\le d$。
  依 $d'(M)$ 的定义取出 $a_1,\ldots,a_d\in\mathfrak{m}$，
  令 $I=(a_1,\ldots,a_d)$。取 $M$ 的生成元 $m_1,\ldots,m_n$。
  则由 $\operatorname{Ann}(M)=0$ 知映射
  $$
  (m_1,\ldots,m_n)\colon R\to M^n
  $$
  是单射。以此将 $R$ 视为 $M^n$ 的子模。
  由 [[Artin–Rees 引理]]，存在 $c\in\mathbb{N}$ 使得
  $I\supseteq I^{c+1}M^n\cap R$，于是
  $\ell_R(R/I)\le\ell_R(\frac{R}{I^{c+1}M^n\cap R})\le\ell_R(M^n/I^{c+1}M^n)<\infty$。
  这样就有 $\sqrt{I}=\mathfrak{m}$，于是
  $d(M)=\deg\chi_M^\mathfrak{m}=\deg\chi_M^I$。
  而 $I$ 由 $d$ 个元素生成，故由 [[Hilbert–Samuel 多项式]]
  的性质知 $d(M)\le d$。

- $d(M)\ge\dim M$：对 $d(M)$ 归纳。$d(M)=0$
  无非就是说 $M$ 有限长，此时自然有 $\dim M=0$。现对
  $d>0$，设 $d(M)<d$ 时命题已经成立，来证明 $d(M)=d$ 情形。首先注意如
  $$
  0\to M'\to M\to M''\to0
  $$
  是短正合列，则 $\operatorname{Supp}(M)=\operatorname{Supp}(M')\cup\operatorname{Supp}(M'')$，
  故 $\dim M=\max\{\dim M',\dim M''\}$。由 [[Hilbert–Samuel 多项式]]的性质亦知
  $d(M)=\max\{d(M'),d(M'')\}$。故命题只要对 $M',M''$ 成立，
  也就对 $M$ 成立。于是由[[结合素理想]]的理论，
  可不妨设 $M=R/\mathfrak{p}$，$\mathfrak{p}$ 为素理想。
  又由于一开始的假设 $\operatorname{Ann}(M)=0$，知 $\mathfrak{p}=0$，
  $R$ 为整环，$M=R$。
  设 $0\subsetneqq\mathfrak{p}_1$ 是 $R$ 的最长素理想链的前两项，任取非零元 $a\in\mathfrak{p}_1$，
  作正合列
  $$
  0\to aR\to R\to R/a\to0
  $$
  则 $\dim R/a=\dim R-1$。于是只需证 $d(R/a)<d(R)$，
  这样由归纳假设即得结论。
  而由 [[Hilbert–Samuel 多项式]]的性质，存在 $c\in\mathbb{N}$ 使得 $n\ge c$ 时
  $$
  \chi_{R/a}(n)\le\chi_R(n)-\chi_{aR}(n-c);
  $$
  而 $R$ 是整环，$aR\cong R$，所以上式推出
  $\deg\chi_{R/a}<\deg\chi_R$，即 $d(R/a)<d(R)$。
:::

::: corollary [与切空间维数关系]
记号同上。有 $\dim R\le\dim_k(\mathfrak{m}/\mathfrak{m}^2)$，
其中右边的 $\dim$ 是线性空间维数。所以如 Noether 环
$A$ 的每个极大理想都被不超过 $d$ 个元素生成，
则 $\dim A\le d$。特别地，不是[[域]]的[[主理想整环]]的维数是 $1$。
:::

::: proof
设 $d=\dim_k(\mathfrak{m}/\mathfrak{m}^2)$，
取 $a_1,\ldots,a_d\in\mathfrak{m}$ 使其在 $\mathfrak{m}/\mathfrak{m}^2$
的像是一组基。则由 [[Nakayama 引理]]，$(a_1,\ldots,a_d)=\mathfrak{m}$。
所以由定理知 $\dim R\le d$。后一句话是因为
$\dim A=\sup\{\dim A_\mathfrak{m}\mid\mathfrak{m}\,是\,A\,的极大理想\}$。
:::

::: corollary
对 Noether 环 $A$，其上有限生成模 $M$，
及其元素 $a_1,\ldots,a_c$，$\dim M/(a_1,\ldots,a_c)M\ge\dim M-c$。
适当选取 $a_1,\ldots,a_c$，可以取到等号。
:::

::: proof
这是因为定理中 $\dim M=d'(M)$。
:::

::: corollary
对 Noether 环 $A$，
$$
\dim A=\sup\{\deg(n\mapsto\ell_A(A/\mathfrak{m}^n))\mid\mathfrak{m}\,是\,A\,的极大理想\}.
$$
:::

::: proof
注意左边等于 $\sup_\mathfrak{m}\dim A_\mathfrak{m}$，
右边等于 $\sup_\mathfrak{m}d(A_\mathfrak{m})$，
由定理它们相等。
:::

::: corollary
对 Noether 环 $A$，$\dim A[[X]]=\dim A+1$。
于是 $\dim A[[X_1,\ldots,X_n]]=\dim A+n$。
:::

::: proof
由形式幂级数的性质，$X$ 在 $A[[X]]$ 的 [[Jacobson 根]]中，
即被每个极大理想所包含。于是由同构定理，$A[[X]]$ 的极大理想都形如
$\mathfrak{m}+XA[[X]]$，其中 $\mathfrak{m}$ 是 $A$
的极大理想。由此不难算出
$$
\ell_{A[[X]]}(A[[X]]/(\mathfrak{m}+XA[[X]])^n)
=\sum_{i=1}^n\ell_A(A/\mathfrak{m}^i),
$$
由上一个推论即得结论。
:::

::: theorem [纤维维数] {@纤维}
设 $f\colon(R,\mathfrak{m})\to(S,\mathfrak{n})$ 是 Noether
[[局部环]]的局部同态。则
$$
\dim S\le\dim R+\dim S/\mathfrak{m}S,
$$
且在 $f$ 为[[平坦同态]]时取等。
:::

::: proof
记 $d=\dim R$，$e=\dim S/\mathfrak{m}S$。取 $R$ 的参数系
$a_1,\ldots,a_d$，$S/\mathfrak{m}S$ 的参数系
$\bar b_1,\ldots,\bar b_e$ 及其在 $S$ 中的提升
$b_1,\ldots,b_e$。则由 $\sqrt{(a_1,\ldots,a_d)}=\mathfrak{m}$，
有 $\sqrt{(a_1,\ldots,a_d)S}\supseteq\mathfrak{m}S$；
又 $\sqrt{(\bar b_1,\ldots,\bar b_e)}=\overline{\mathfrak{n}}$，
从而 $\sqrt{(a_1,\ldots,a_d,b_1,\ldots,b_e)}=\mathfrak{n}$。
所以 $\dim S\le d+e$。

现设 $f$ 平坦，来证明 $\dim S\ge d+e$。取 $S/\mathfrak{m}S$
的最长素理想链，记其在 $S$ 中原像为
$$
\mathfrak{n}=\mathfrak P_0\supsetneqq\mathfrak P_1\supsetneqq\cdots\supsetneqq\mathfrak P_e.
$$
再取 $R$ 的最长素理想链
$$
\mathfrak{m}=\mathfrak p_0\supsetneqq\mathfrak p_1\supsetneqq\cdots\supsetneqq\mathfrak p_d.
$$
由 $\mathfrak P_e\cap R=\mathfrak{m}$，
用[[平坦同态]]的素理想下行，可在 $S$ 中取到素理想链
$$
\mathfrak P_e=\mathfrak q_0\supsetneqq\mathfrak q_1\supsetneqq\cdots\supsetneqq\mathfrak q_d,
$$
使得 $\mathfrak q_i\cap R=\mathfrak p_i$。于是在 $S$ 中就有素理想链
$$
\mathfrak{n}=\mathfrak P_0\supsetneqq\mathfrak P_1\supsetneqq\cdots\supsetneqq\mathfrak P_e=\mathfrak q_0\supsetneqq\mathfrak q_1\supsetneqq\cdots\supsetneqq\mathfrak q_d,
$$
故 $\dim S\ge d+e$。
:::

::: remark
同样的方法可以证明，如 $M$ 是有限生成 $R$-模，
$N$ 是有限生成 $S$-模。则
$$
\dim(M\otimes_RN)\le\dim M+\dim N/\mathfrak{m}N,
$$
且当 $N$ 在 $R$ 上[[平坦模|平坦]]时取等。
:::

::: corollary
对 Noether 环 $A$，$\dim A[X]=\dim A+1$。
于是 $\dim A[X_1,\ldots,X_n]=\dim A+n$。
:::

::: proof
设 $\dim A=d$。取 $A$ 的最长素理想链
$$
\mathfrak{p}_0\subsetneqq\cdots\subsetneqq\mathfrak{p}_d,
$$
则显然
$$
\mathfrak{p}_0A[X]\subsetneqq\cdots\subsetneqq\mathfrak{p}_dA[X]\subsetneqq\mathfrak{p}_dA[X]+XA[X]
$$
是 $A[X]$ 中长度为 $d+1$ 的素理想链，于是 $\dim A[X]\ge d+1$。
接下来要对 $A[X]$ 的任一极大理想 $\mathfrak{n}$
证明 $\dim A[X]_\mathfrak{n}\le d+1$。记
$\mathfrak{m}=\mathfrak{n}\cap A$，
$k=A_\mathfrak{m}/\mathfrak{m}A_\mathfrak{m}$。对同态
$A_\mathfrak{m}\to A[X]_\mathfrak{n}$ 用 @纤维 得
$$
\dim A[X]_\mathfrak{n}\le\dim A_\mathfrak{m}+\dim k[X]_{\overline{\mathfrak{n}}}
\le\dim A+\dim k[X]=d+1,
$$
其中 $\dim k[X]=1$ 是因为 $k[X]$ 是主理想整环。
:::

::: theorem [Krull 维数与超越次数的关系]
[[域]]上[[有限生成代数|有限生成]][[整环]]的维数等于其分式域的[[超越次数]]。
:::

::: proof
设 $A$ 是域 $k$ 上有限生成的整环，$K$ 是其分式域。则由 [[Noether 正规化]]，
存在 $d\in\mathbb{N}$ 以及[[有限同态|有限]]单射
$k[X_1,\ldots,X_d]\to A$。则 $K/k(X_1,\ldots,X_d)$
是[[有限扩张]]，由此可得 $d$ 是 $K/k$ 的超越次数。
由[[整扩张]]的性质，$d$ 也是 $A$ 的维数。
:::

## 例子

下面这些例子从另一个方向说明维数理论十分不平凡。

::: example
不局部的 Noether 环维数可以是无穷。

取域 $k$，令 $A=k[X_1,X_2,\ldots]$ 为无穷多个变元的多项式环，
$P_n=(X_{n^2},X_{n^2+1},\ldots,X_{n^2+2n})$
为其一列素理想。令 $S$ 为 $\bigcup_{n=1}^\infty P_n$
的补集，则其为[[乘性子集]]。考虑 $B=S^{-1}A$，则 $B$ 就是无穷维的
Noether 环。首先注意对每个正整数 $n$，
$$
(X_{n^2})\subsetneqq(X_{n^2},X_{n^2+1})\subsetneqq\cdots\subsetneqq(X_{n^2},X_{n^2+1},\ldots,X_{n^2+2n})
$$
是 $B$ 中长度为 $2n$ 的素理想链，故 $\dim B=\infty$。
其次对 $B$ 的任一非零素理想 $\mathfrak{p}$，
取其非零元然后用多项式环的唯一分解，不难发现存在正整数 $n$
使得 $\mathfrak{p}\subseteq P_n$。于是 $\mathfrak{p}$
对应于
$$
B_{P_n}=A_{P_n}=k(X_i)_{i\notin\{n^2,\ldots,n^2+2n\}}[X_{n^2},\ldots,X_{n^2+2n}]
$$
的素理想。由此不难发现 $\mathfrak{p}$ 为有限生成。
于是 $B$ 的每个素理想都有限生成，故由 [[Noether 环]]的性质知
$B$ 为 Noether 环。
:::

::: example
Noether 整环中可以有两条极长素理想链不等长。

取[[离散赋值环]] $R$，设其素元为 $\pi$。则 $\dim R[X]=\dim R+1=2$，
$0\subsetneqq(\pi)\subsetneqq(\pi,X)$
是一条极长素理想链。然而 $0\subsetneqq(1-\pi X)$
也是一条极长素理想链，长度只有 $1$。这里由
$R[\pi^{-1}]$ 是域知 $(1-\pi X)$ 是极大理想。
:::

::: remark
上例中的环 $R[X]$ 不是局部环。也有局部环的例子，
但就困难得多。参见条目[[悬链环]]。
:::

::: example
对不 Noether 的环 $R$，可以有 $\dim R[X]>\dim R+1$。
:::

## 同调不变量

```terms
维数理论:
  en: dimension theory
  de: Dimensiontheorie
  fr: théorie de la dimension
```
