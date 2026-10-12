---
title: 上同调纯性和Gysin序列II——特殊情况
---

固定可分闭域$k$，设$S=\operatorname{Spec} k$，
设$\Lambda:=\underline{\mathbb{Z}/n\mathbb{Z}}$且$n$都可逆。

::: theorem [上同调纯性] {@CohoPurity-II}
考虑余$c$维光滑对$(Z,X)$，则对于局部常值$\Lambda$-模$\mathscr{F}$有
\[
R^ri^!\mathscr{F}= \left\{
\begin{array}{cc}
i^{-1}\mathscr{F}(-c),&i=2c;\\
0,&i\neq 2c.
\end{array}\right.
\]
因此谱序列得到对任何$r\geq 0$都有典范同构
$H^{r-2c}_{\operatorname{ét}}(Z,\mathscr{F}(-c))\cong H^r_{Z,\operatorname{ét}}(X,\mathscr{F})$。
:::

::: proof
根据 @CohoPurity-I 和 @024 即可。
:::

::: corollary [Gysin序列和Gysin映射] {@GysinS-II}
考虑余$c$维光滑对$(Z,X)$，则对于局部常值$\Lambda$-模$\mathscr{F}$有
当$0\leq j\leq 2c-2$时有
$H^j_{\operatorname{ét}}(X,\mathscr{F})\cong H^j_{\operatorname{ét}}(U,\mathscr{F})$，且有正合列
\[
0\to H^{2c-1}_{\operatorname{ét}}(X,\mathscr{F})\to H^{2c-1}_{\operatorname{ét}}(U,\mathscr{F}|_U)\to H^0(Z,i^{-1}\mathscr{F}(-c))\to H^{2c}_{\operatorname{ét}}(X,\mathscr{F})\to\cdots
\]
\[
\cdots\to H^{j-2c}_{\operatorname{ét}}(Z,i^{-1}\mathscr{F}(-c))\to H^j_{\operatorname{ét}}(X,\mathscr{F})\to H^{j}_{\operatorname{ét}}(U,\mathscr{F}|_U)\to\cdots.
\]
我们称
$i_*:H^{j}_{\operatorname{ét}}(Z,i^{-1}\mathscr{F}(-c))\to H^{j+2c}_{\operatorname{ét}}(X,\mathscr{F})$
为Gysin映射。
:::

::: proof
根据 @GysinS-I 和 @024 即可。
:::

::: example
固定代数闭域$k$且$n$在$k$内可逆。

(i)计算$\mathbb{A}_k^m$的上同调。
根据Kummer列诱导长正合列和$\operatorname{Pic}(\mathbb{A}^1)=0$不难得到当$r>0$时
$H^r_{\operatorname{ét}}(\mathbb{A}^1_k,\bm{\mu}_n)=0$。根据Künneth公式（@-Künneth）得到当$r>0$时
$H^r_{\operatorname{ét}}(\mathbb{A}^m_k,\Lambda)=0$。

(ii)计算$\mathbb{P}_k^m$的上同调。对$(\mathbb{P}_k^{m-1},\mathbb{P}_k^m)$用Gysin序列和归纳法不难得到
\[
H^r_{\operatorname{ét}}(\mathbb{P}_k^m,\Lambda)= \left\{
\begin{array}{cc}
\Lambda(-r/2),&r\text{为偶数且}\leq 2m,\\
0,&\text{其他情况}.
\end{array}\right.
\]
:::
