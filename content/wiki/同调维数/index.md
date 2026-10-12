---
title: 同调维数
aliases: [上同调维数]
categories: [同调代数]
---

**同调维数**是 [[Abel 范畴]]的半边正合函子不正合程度的粗略度量，
指的是其[[导出函子]]的最远延伸。它亦可直接对[[导出范畴]]的函子定义。

## 定义

::: definition
设 $\mathcal{A},\mathcal{B}$ 是 Abel 范畴，
$\mathcal{A}$ 有足够[[投射对象]]。设
$F\colon\mathcal{A}\to\mathcal{B}$ 是右正合函子，
则其有左[[导出函子]] $L_nF$。
对 $M\in\mathcal{A}$，$M$ 的 **$F$-（同调）维数**定义为
$$
\sup\{n\in\mathbb{N}\mid L_nF(M)\ne0\}.
$$
$F$ 的**同调维数**定义为 $\mathcal{A}$ 中所有对象的
$F$-维数的上确界，即
$$
\sup\{n\in\mathbb{N}\mid L_nF\ne0\},
$$
其中 $0$ 表示零函子。

如 $\mathcal{A}$ 有足够[[内射对象]]，$F$
是左正合函子，也可定义一样的概念，此时也称同调维数为**上同调维数**。
:::

依定义，$F$-零调就是 $F$-维数等于 $0$。

::: definition
Abel 范畴 $\mathcal{A}$ 的**同调维数**指的是
$$
\sup\{n\in\mathbb{N}\mid\exists M,N\in\mathcal{A},\,\operatorname{Ext}^n(M,N)\ne0\}.
$$
由于有 Yoneda $\operatorname{Ext}$，这里无需假设 $\mathcal{A}$ 有足够投射或内射。
[[环]] $R$ 的**左（右）整体维数**指的是左（右）$R$-模范畴的同调维数。
详细参见主条目[[整体维数]]。
:::

依定义，对非零对象，这些维数取值在 $\mathbb{N}\cup\{\infty\}$。
通常不对 $0$ 讨论同调维数，也可将 $0$ 的同调维数约定为 $-1$ 或 $-\infty$。

## 性质

记号沿上，设 $F$ 右正合，将 $M$ 的 $F$-维数记作 $d_F(M)$。
左正合情形完全对偶。

::: proposition {@短正合列}
对短正合列
$$
0\to N\to M\to Q\to0,
$$
有 $d_F(M)\le\max\{d_F(N),d_F(Q)\}$，
$d_F(N)\le\max\{d_F(M),d_F(Q)\}$，
$d_F(Q)\le\max\{d_F(M),d_F(N)+1\}$。
如果 $d_F(M)<d_F(Q)$，则 $d_F(Q)=d_F(N)+1$。
:::

::: proof
对短正合列作用 $F$ 的导出函子，写出对应的长正合列，即得结论。
:::

::: proposition
$M$ 的 $F$-维数就是 $M$ 的 $F$-零调消解的最短长度，即
$$
d_F(M)=\inf\{n\in\mathbb{N}\mid\,存在正合列\,
0\to A_n\to\cdots\to A_0\to M\to0,\,各\,A_i\,为\,
F\text{-}零调\}.
$$
此外，对任意 $n\ge d_F(M)$ 以及正合列
$$
0\to A_n\to\cdots\to A_0\to M\to0,
$$
只要 $A_0,\ldots,A_{n-1}$ 为 $F$-零调，$A_n$ 也就为
$F$-零调。
:::

::: proof
小于等于比较显然：如有 $F$-零调消解
$$
0\to A_n\to\cdots\to A_0\to M\to0,
$$
则由于零调消解可以计算[[导出函子]]，有
$$
L_iF(M)=H_i(0\to F(A_n)\to\cdots\to F(A_0)\to0),
$$
自然在 $i>n$ 时为 $0$。欲证大于等于，只需证定理的后一句话，
因为这样一来任取部分零调消解
$$
A_{d_F(M)-1}\to\cdots\to A_0\to M\to0
$$
并令 $A_{d_F(M)}$ 为以上最左边箭头的核，即可得到长度为
$d_F(M)$ 的零调消解。对后一句话我们对 $n$ 归纳。
$n=0$ 时 $A_0\cong M$，而 $d_F(M)=0$ 的意思就是 $M$ 零调，
即 $A_0$ 零调。设 $n>0$，命题对 $n-1$ 成立，令 $K=\ker(A_0\to M)$。
对短正合列
$$
0\to K\to A_0\to M\to0
$$
用 @短正合列 最后一句话，得
$d_F(K)\le\max\{d_F(M)-1,0\}$。对正合列
$$
0\to A_n\to\cdots\to A_1\to K\to0
$$
用归纳假设即得结论。
:::

::: proposition
$F$ 的同调维数等于
$$
\inf\{n\in\mathbb{N}\mid L_{n+1}F=0\}.
$$
:::

::: proof
只需证只要 $L_nF=0$ 就有 $L_{n+1}F=0$，因为这样集合
$\{n\in\mathbb{N}\mid L_nF=0\}$ 就一定形如 $\{n\in\mathbb{N}\mid n>d\}$，
即得结论。现设 $L_nF=0$，其中 $n$ 是正整数。
对任一 $M\in\mathcal{A}$，取投射对象 $P$ 映满 $M$，作短正合列
$$
0\to K\to P\to M\to0.
$$
对其作用 $F$，写出导出函子长正合列，即知 $L_{n+1}F(M)\cong L_nF(K)$。
由于 $L_nF=0$，这推出 $L_{n+1}F(M)=0$。$M$ 是任意的，
故 $L_{n+1}F=0$。
:::

::: proposition
$F\colon\mathcal{A}\to\mathcal{B}$，$G\colon\mathcal{B}\to\mathcal{C}$
是有足够投射对象的 Abel 范畴间的右正合函子，满足 $F$
将投射对象映到 $G$-零调对象。则复合函子 $GF$ 的同调维数不大于
$F$ 和 $G$ 的同调维数之和。
:::

::: proof
这是 [[Grothendieck 谱序列]]的直接推论。
:::

## 例子

- [[线性空间]]范畴的同调维数是 $0$。一般地，
  [[半单范畴]]的同调维数是 $0$。

- $\mathsf{Ab}$ 的同调维数是 $1$。

- 模 $M$ 的[[投射维数]]、[[内射维数]]、[[平坦维数]]分别是函子
  $\operatorname{Hom}(M,-)$、$\operatorname{Hom}(-,M)$、
  $-\otimes M$ 的同调维数。

```terms
(上)同调维数:
  en: (co)homological dimension
  de: (ko)homologische Dimension
  fr: dimension (co)homologique
  grc: (συν)ὁμολογικὴ διάστασις
  la: dimensio (co)homologica
```
