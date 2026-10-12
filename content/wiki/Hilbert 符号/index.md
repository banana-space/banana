---
title: Hilbert 符号
categories: [代数数论]
navboxes: [代数数论]
---

::: convention
在本文中，

- $K$ 是[[整体域]]，$v\in {|}K{|}$ 是 $K$ 的[[赋值]]。
- $\mu_{n}(K_{v})$ 表示 $K_{v}$ 中 $n$ 次单位根群，$n$ 是与 $\operatorname{char}k$ 互素的正整数。

:::

**Hilbert 符号** 是 $(K_{v}^{\times}/K_{v}^{\times n})\times (K_{v}^{\times}/K_{v}^{\times n})$ 到
$\mu_{n}(K_{v}^{\times})$ 的非退化、双乘性映射，
可以通过它来研究高次互反律。

## 定义

::: definition
对 $a,b\in K_{v}^{\times}$，定义
\[
(a,b)_{K_v}=\left\{
  \begin{array}{ll}
    +1,&ax^2+by^2=1~\text{有非零解};\\
    -1,&\text{其余情况}.
  \end{array}
  \right.
\]
也简记为 $(a,b)_{v}$。
:::

::: remark
可以发现 $(a,b)_{v}=1$ 当且仅当存在 $a'\in K_{v}(\sqrt{b})$，
使得 $a=\operatorname{Nm}(a')$，从而可以定义高次的 Hilbert 符号。
:::

一般地，设 $K_{v}$ 包含本原 $n$ 次单位根。

::: definition
对 $a,b\in K_{v}^{\times}$，定义
\[
(a,b)_{v}=\frac{\phi_{K_{v}}(b)(a^{\frac{1}{n}})}{a^{\frac{1}{n}}},
\]
其中
$\phi_{K_{v}}\colon (K_{v}^{\times}/K_{v}^{\times n})\rightarrow \operatorname{Gal}(K_{v}^{\mathrm{ab}}/K_{v})$
是 [[局部互反映射]]。从中可以看出 Hilbert 符号的取值为单位根。
:::

## 等价刻画

### 通过循环代数

对 $a,b\in K_{v}^{\times}$ 可以定义[[四元代数]]
\[
H(a,b)=\left<\mathrm{i},\mathrm{j}\right>/\left<\mathrm{i}^2=a,\mathrm{j}^2=b,\mathrm{i}\mathrm{j}=-\mathrm{j}\mathrm{i}\right>,
\]
它是 $K_{v}$ 上的中心单代数。

::: definition
对 $a,b\in K_{v}^{\times}$，定义
\[
(a,b)_{v}=\left\{
\begin{array}{ll}
  +1,&H(a,b)\simeq M_2(K_{v});\\
  -1,&H(a,b)~\text{是可除代数}.
\end{array}
\right.
\]
:::

::: remark
$(a,b)_{v}$ 也可以定义为 $(-1)^{-2\operatorname{inv}([H(a,b)])}$，
其中 $\operatorname{inv}$ 是 [[Brauer 群]] $\operatorname{Br}(K_{v})$ 上的不变映射。
:::

同样，也可以用中心单代数的理论定义高次 Hilbert 符号。
给定 $\zeta\in K_{v}$ 是本原 $n$ 次单位根，
考虑[[循环代数]]
\[
A(a,b)=\left<x,y\right>/\left<x^n=a,y^n=b,xy=\zeta yx\right>.
\]

::: definition
对 $a,b\in K_{v}^{\times}$，定义
\[
(a,b)_{v}=\zeta^{-n\operatorname{inv}([A(a,b)])}.
\]
:::

### 通过群上同调

若 $\zeta\in K_{v}^{\times}$ 是本原 $n$ 次单位根，
令 $G=\operatorname{Gal}(K_{v}^{\operatorname{sep}}/K_{v})$，
考虑 [[Kummer 正合列]]
\[
1\rightarrow \mu_{n}\rightarrow K_{v}^{\operatorname{sep}\times}\xrightarrow{x\mapsto x^{n}} K_{v}^{\operatorname{sep}\times}\rightarrow 1,
\]
由此有同构
\[
\delta\colon K_{v}^{\times}/K_{v}^{\times n}\rightarrow H^{1}(G,\mu_{n}).
\]
考虑[[杯积]]，我们有配对
\[
H^{1}(G,\mathbb{Z}/n\mathbb{Z})\times H^{1}(G,\mu_{n})\rightarrow H^{2}(G,\mu_{n})\simeq \frac{1}{n}\mathbb{Z}/\mathbb{Z},
\]
具体写出得到 $(\chi,b)\mapsto \operatorname{inv}(\chi\cup\delta b)$，
其中 $\chi \in \operatorname{Hom}(G,\mathbb{Z}/n\mathbb{Z})$，
$b\in K_{v}^{\times}/K_{v}^{\times n}$。将映射两边张量 $\mu_n$，得到配对
\[
(K_{v}^{\times}/K_{v}^{\times n})\times (K_{v}^{\times}/K_{v}^{\times n})\rightarrow \mu_{n}.
\]

::: remark
通过群上同调理论，容易得到非退化的配对，但也能感受到这种方式得到的 Hilbert 符号计算十分困难。
:::

## 性质

以下证明只考虑 $n=2$ 的情形。

::: proposition {@prop:basic}
- 对任意 $a,b\in K^{\times}$，有 $(a,b)_{v}=(b,a)_{v}^{-1}=(b,a)_{v}$。

- 若 $a$ 是平方数，则对任意 $b$ 有 $(a,b)_{v}=1$。

- 若 $a\neq 0,1$，有 $(a,1-a)_{v}=1$。

:::

::: proposition
对任意 $a,b,c\in K^{\times}$，有 $(a,b)_{v}(a,c)_{v}=(a,bc)_{v}$。
:::

::: proof
令 $A=H(a,b)\otimes_{K} H(a,c)$，利用等价定义，只需证明 $A\simeq H(a,bc)$。
$A$ 有一组生成元 $\mathrm{i}_1,\mathrm{j}_1,\mathrm{i}_2,\mathrm{j}_2$，满足关系
$\mathrm{i}_1^2=\mathrm{i}_2^2=a$，$\mathrm{j}_1^2=b$，$\mathrm{j}_2^2=c$，
$\mathrm{i}_k\mathrm{j}_k=-\mathrm{j}_k\mathrm{i}_k$ 以及
$\mathrm{i}_{k}\mathrm{j}_{l}=\mathrm{j}_{l}\mathrm{i}_{k}$，
其中 $k\neq l\in \{1,2\}$。考虑 $A'$ 是由 $\mathrm{i}_1$ 和 $\mathrm{j}_1$ 生成的 $A$ 子代数，
$A''$ 是由 $\mathrm{i}_1^{-1}\mathrm{i}_2$ 和 $\mathrm{j}_2$ 生成的 $A$ 子代数。则有
\[
A'\simeq H(a,bc),~A''\simeq H(1,c).
\]
由于 $A'\otimes A''$ 是单代数，则自然态射 $A'\otimes A''\rightarrow A$ 是同构，从而
\[
H(a,b)\otimes H(a,c)\simeq H(a,bc)\otimes H(1,c).
\]
由 @prop:basic 第二条知 $H(1,c)\simeq M_2(K)$，因此有 $A\simeq H(a,bc)$。
:::

::: proposition [乘积公式]
对 $a,b\in K^{\times}$，有
\[
\prod_{v\in|K|}(a,b)_v=1.
\]
:::

::: proof
利用 [[Hasse 正合列]]
\[
0\rightarrow \operatorname{Br}(K)\rightarrow \bigoplus_{v\in |K|}\operatorname{Br}(K_{v})
\xrightarrow{\Sigma \operatorname{inv}} \mathbb{Q}/\mathbb{Z}\rightarrow 0
\]
即得。
:::

## 例子

::: example
取 $K=\mathbb{Q}$，$n=2$，有

- $v=\infty$，$(a,b)_{v}=1$ 当且仅当 $a,b$ 之一大于 $0$。

- $v=2$，假设 $a=2^{\alpha}u$ 及 $b=2^{\beta}v$ 满足 $u,v$ 是奇数，有
  \[
  (a,b)_2=(-1)^{\epsilon(u)\epsilon(v)+\alpha \omega(v)+\beta \omega(u)},
  \]
  其中 $\epsilon(x)=\frac{x-1}{2}$，$\omega(x)=\frac{x^2-1}{8}$。

- $v=p\geq 3$，假设 $a=p^{\alpha}u$ 及 $b=p^{\beta}v$ 满足 $u,v$ 与 $p$ 互素，
  有
  \[
  (a,b)_{p}=(-1)^{\alpha\beta\epsilon(p)}\left( \frac{v}{p} \right)^{\alpha}\left( \frac{u}{p} \right)^{\beta},
  \]
  后两项为 [[Legendre 符号]]。

:::

```terms
Hilbert 符号:
  en: Hilbert symbol
  fr: Symbole de Hilbert
```
