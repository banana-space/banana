---
title: Jacobi 三重积恒等式
aliases: [Jacobi 三重积]
categories: [复分析, 初等代数]
---

<problems>
- “二平方和的表示方法数”“四平方和的表示方法数”两节缺少使用模形式的方法。
</problems>

**Jacobi 三重积恒等式**是 Jacobi 在1829年发现的，
关于 [[$\theta$ 函数]] 按零点展开成乘积的重要恒等式，
它也是 [[Macdonald 恒等式]]在 $A_1$ [[根系]]时的特例。

## 陈述

::: theorem [Jacobi 三重积]
对[[复数]]$z\ne0, |q|<1$，
（也可以形式地把式子两端视为环 $\mathbb{Z}((z))[[q]]$ 中元素，
本文中其它结论同理）
我们有：
\[
\prod_{n=1}^\infty(1-q^{2n})(1+zq^{2n-1})(1+z^{-1}q^{2n-1})=1+\sum_{n=1}^\infty(z^n+z^{-n})q^{n^2}=\sum_{n\in\mathbb Z}z^nq^{n^2}.
\]
:::

## 证明

::: proof
给定$|q|<1$，将左边的乘积看作$z\ne0$的[[全纯函数]]，
$F_q(z)$，我们指出
\[
F_q(z)=zq F_q(zq^2)
\]
这是因为$F_q(z)$的乘积比$F_q(zq^2)$多一项$(1+zq)$少一项
$(1+z^{-1}q^{-1})$。
于是由[[Laurent 展开]]，设
\[
F_q(z)=\sum_{n\in\mathbb Z}a_n(q)z^n.
\]
利用恒等式，由Laurent 展开的唯一性比对系数得到
$a_n(q)=a_{n-1}(q)q^{2n-1}$，
于是 $a_n(q)=a_0(q)q^{n^2}$。

于是我们只需确定$a_0(q)=1$。为此取$(z,q)=(-1,q^4),(\mathrm{i},q)$得到
\[
\begin{aligned}
  F_{q^4}(-1)&=\prod_{n=1}^\infty(1-q^{8n})(1-q^{8n-4})^2\\
  &=\prod_{n=1}^\infty(1-q^{4n})(1-q^{8n-4})
  =\prod_{n=1}^\infty(1-q^{4n})(1-q^{4n-2})(1+q^{4n-2})\\
  &=\prod_{n=1}^\infty(1-q^{2n})(1+\mathrm{i} q^{2n-1})(1-\mathrm{i} q^{2n-1})=F_q(\mathrm{i}).
\end{aligned}
\]
从而
\[
a_0(q^4)\sum_{n\in\mathbb Z}(-1)^nq^{4n^2}
=a_0(q)\left(1+\sum_{n=1}^\infty(\mathrm{i}^n+\mathrm{i}^{-n})q^{n^2}\right)
=a_0(q)\sum_{n\in\mathbb Z}(-1)^nq^{4n^2}.
\]
由此$a_0(q)=a_0(q^{4^k})=\lim_{k\to+\infty}a_0(q^{4^k})=a_0(0)=1$。
:::

## 应用

### Euler 五边形数定理

::: corollary
我们有如下的Euler 五边形数定理成立，对$|x|<1$有：
\[
\prod_{n=1}^\infty(1-x^n)=\sum_{n\in\mathbb Z}(-1)^nx^{(3n^2-n)/2}.
\]
:::

::: proof
在三重积中取$q=-z^3$得到
\[
\prod_{n=1}^\infty(1-(z^2)^n)=\sum_{n\in\mathbb Z}(-1)^nz^{3n^2-n}.
\]
因此令$x=z^2$即得。
:::

### 二平方和的表示方法数

::: theorem
设$n$为正整数，对$k=1,3$我们记
\[
d_k(n):=\sum_{d|n, d\equiv k\pmod 4}1.
\]
那么$n$能表示为两个整数的平方和的方法数为$r_2(n):=4(d_1(n)-d_3(n))$。
:::

::: proof [证明（初等计算）]
首先在三重积中取$z=-a^2q, y=q^2$得
\[
\prod_{n=1}^\infty(1-y^n)(1-a^2y^n)(1-a^{-2}y^{n-1})=\sum_{n\in\mathbb Z}(-1)^na^{2n}y^{(n^2+n)/2}.
\]
特别地，左边有$(1-a^{-2}y^0)$项，左右乘$a$，并将右边关于奇偶分开得到
\[
(a-a^{-1})\prod_{n=1}^\infty(1-y^n)(1-a^2y^n)(1-a^{-2}y^n)=\sum_{n\in\mathbb Z}a^{4n+1}y^{2n^2+n}-\sum_{n\in\mathbb Z}a^{4n-1}y^{2n^2-n}.
\]
其次将右边的两项重新用三重积实现，取$z=a^4y, q=y^2$与$z=a^4y^{-1}, q=y^2$得
\[
\begin{aligned}
  a\prod_{n=1}^\infty(1-y^{4n})(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})&=\sum_{n\in\mathbb Z}a^{4n+1}y^{2n^2+n}\\
  a^{-1}\prod_{n=1}^\infty(1-y^{4n})(1+a^4y^{4n-3})(1+a^{-4}y^{4n-1})&=\sum_{n\in\mathbb Z}a^{4n-1}y^{2n^2-n}
\end{aligned}
\]
因此结合上面三式，得到
\[
\begin{aligned}
  &\prod_{n=1}^\infty\frac{(1-y^n)(1-a^2y^n)(1-a^{-2}y^n)}{1-y^{4n}}\\
  =&\frac1{a-a^{-1}}\left( a\prod_{n=1}^\infty (1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})-a^{-1}\prod_{n=1}^\infty (1+a^4y^{4n-3})(1+a^{-4}y^{4n-1})\right)\\
  =&\left(\prod_{n=1}^\infty(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})\right)\cdot
  \left( 1+\frac{a^{-1}}{a+a^{-1}}\left( 1-\prod_{n=1}^\infty\frac{(1+a^4y^{4n-3})(1+a^{-4}y^{4n-1})}{(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})} \right) \right).
\end{aligned}
\]
现在计算$a\to1$时的极限情况，换元$c=a^4-1$：
\[
\begin{aligned}
  &\lim_{a\to1}\left(\prod_{n=1}^{\infty}\frac{(1-y^n)(1-a^2y^n)(1-a^{-2}y^n)}{(1-y^{4n})(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})}-1\right)\\
  =&\lim_{a\to1}\frac2{a^4-1}\left( 1-\prod_{n=1}^\infty \frac{(1+a^4y^{4n-3})(1+a^{-4}y^{4n-1})}{(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})} \right)\\
  =&\lim_{c\to0}\frac2c\left( 1-\prod_{n=1}^\infty\frac{\left( 1+\frac{y^{4n-3}}{1+y^{4n-3}}c \right)\left( 1+\frac{1}{1+y^{4n-1}}c \right)}{\left( 1+\frac{y^{4n-1}}{1+y^{4n-1}}c \right)\left( 1+\frac{1}{1+y^{4n-3}}c \right)} \right)\\
  =&2\sum_{n=1}^\infty\left( \frac{y^{4n-1}-1}{y^{4n-1}+1}-\frac{y^{4n-3}-1}{y^{4n-3}+1} \right)=4\sum_{n=1}^\infty(d_1(n)-d_3(n))(-y)^n.
\end{aligned}
\]
另一边，使用三重积$z=1$的情形，得到
\[
\begin{aligned}
  &\lim_{a\to1}\left(\prod_{n=1}^{\infty}\frac{(1-y^n)(1-a^2y^n)(1-a^{-2}y^n)}{(1-y^{4n})(1+a^4y^{4n-1})(1+a^{-4}y^{4n-3})}-1\right)\\
  =&-1+\prod_{n=1}^\infty\frac{(1-y^n)^3}{(1-y^{2n})(1+y^{2n})(1+y^{4n-1})(1+y^{4n-3})}\\
  =&-1+\prod_{n=1}^\infty\frac{(1-y^n)^2}{(1+y^n)^2}=-1+\prod_{n=1}^\infty(1-y^{2n-1})^4(1-y^{2n})^2\\
  =&-1+\left( \sum_{n\in\mathbb Z} (-y)^{n^2} \right)^2.
\end{aligned}
\]
于是结论得证。
:::

::: proof [证明（Jacobi 椭圆函数）]
注意到当$\operatorname{sn}$为 Jacobi 正弦椭圆函数且
\[
0<k<1,\quad k'=\sqrt{1-k^2},
\]
\[
K(k)=\int_0^1{\mathrm dt\over\sqrt{1-t^2}\sqrt{1-k^2t^2}},
\]
\[
K=K(k),\quad K'=K(k'),\quad\tau={iK'\over K},\quad q=e^{i\pi\tau}
\]
时总有：
\[
\log\operatorname{sn}\left(2Kx\over\pi\right)=\log{2q^{1/4}\over\sqrt k}+\log\sin x+2\sum_{m\ge1}{q^m\cos(2mx)\over1+q^m}.
\]
对两侧求导便有：
\[
{2K\over\pi}\operatorname{cs}\left(2Kx\over\pi\right)\operatorname{dn}\left(2Kx\over\pi\right)=\cot x-4\sum_{m\ge1}{q^m\sin(2mx)\over1+q^m}.
\]
注意到
\[
\operatorname{cs}\left(K\over2\right)=\operatorname{dn}\left(K\over2\right)=\sqrt{k'},
\]
所以代入$x=\pi/4$可得：
\[
{2Kk'\over\pi}=1-4\sum_{m\ge1}{q^m\sin(m\pi/2)\over1+q^m}.
\]
注意到
\[
K=\frac\pi2\vartheta_3^2(0,q),\quad k'={\vartheta_4^2(0,q)\over\vartheta_3^2(0,q)}
\]
以及
\[
\vartheta_4(0,q)=\sum_{n\in\mathbb Z}(-1)^nq^{n^2},
\]
所以将原式中的$q$更换成$-q$就有：

```math
\begin{aligned}
    \left(\sum_{n\in\mathbb Z}q^{n^2}\right)^2
    &=1-4\sum_{m\ge1}{(-q)^m\sin(m\pi/2)\over1+(-1)^mq^m} \\
    &=1+4\sum_{\substack{m\ge1\\m\equiv1\pmod2}}{q^m(-1)^{m-1\over2}\over1-q^m} \\
\end{aligned}
```

对比系数便知$n>1$时：
\[
r_2(n)=4\sum_{\substack{m|n\\m\equiv1\pmod2}}(-1)^{m-1\over2}=4(d_1(n)-d_3(n)).
\]
:::

### 四平方和的表示方法数

利用二平方和的恒等式，我们稍作变形可证明

::: theorem
设$n$为正整数，则其表示为四个整数平方和的方法数为
\[
r_4(n):=8\cdot\sum_{d|n,d\not\equiv0\pmod 4}d.
\]
:::

::: proof [证明（初等计算）]
先设
\[
u_r:=\frac{x^r}{1-x^r},
\]
首先我们应当变换看法，设$\theta=\pi/2$那么
\[
\begin{aligned}
  \frac14+\sum_{n=0}^\infty (u_{4n+1}-u_{4n+3})=\frac14\cot\frac\theta 2+\sum_{n=1}^\infty u_n\sin (n\theta).
\end{aligned}
\]
于是简单使用积化和差得到
\[
\begin{aligned}
  &\left(\frac14\cot\frac\theta 2+\sum_{n=1}^\infty u_n\sin (n\theta)\right)^2\\
  =&\frac1{16}\cot^2\frac{\theta}{2}+\sum_{n=1}^\infty u_n\left( \frac12+\cos\theta+\cos2\theta+\cdots+\cos(n-1)\theta+\frac12\cos n\theta \right)\\
  +&\frac12\sum_{m=1}^\infty\sum_{n=1}^\infty u_mu_n(\cos(m-n)\theta-\cos(m+n)\theta)\\
  =&\frac1{16}\cot^2\frac{\theta}{2}+\frac12\sum_{n=1}^\infty u_n(1+u_n)+\sum_{k=1}^\infty c_k\cos k\theta
\end{aligned}
\]
其中最后一个等号我们按照$\cos k\theta$的$k$不同分类收集起来，注意
\[
\begin{aligned}
  &\sum_{m=1}^\infty u_m(1+u_m)=\sum_{m=1}^\infty (x^m+2x^{2m}+3x^{3m}+\cdots)\\
  =&\sum_{m=1}^\infty\sum_{n=1}^\infty nx^{nm}=\sum_{n=1}^\infty n\cdot\frac{x^n}{1-x^n}=\sum_{n=1}^\infty nu_n.
\end{aligned}
\]
以及注意到$u_lu_{k-l}=u_k(1+u_l+u_{k-l}), u_{k+l}(1+u_l)=u_k(u_l-u_{k+l})$，于是
\[
\begin{aligned}
  c_k&=\frac12u_k+\sum_{l=1}^\infty (u_{k+l}+u_lu_{k+l})-\frac12\sum_{l=1}^{k-1}u_lu_{k-l}\\
  &=u_k\left( \frac12+u_1+\cdots+u_k-\frac12(k-1)-(u_1+\cdots+u_{k-1}) \right)=u_k\left( 1+u_k-\frac k2 \right).
\end{aligned}
\]
最后代入$\theta=\pi/2$得到
\[
\begin{aligned}
  \left(  \frac14+\sum_{n=0}^\infty (u_{4n+1}-u_{4n+3}) \right)^2
  =\frac1{16}+\frac12\sum_{n=1}^\infty nu_n+\sum_{n=1}^\infty(-1)^nc_{2n}.
\end{aligned}
\]
展开验证容易确认就是
\[
\frac1{16}+\frac12\sum_{m=1}^\infty((2m-1)u_{2m-1}+(4m-2)u_{4m-2}).
\]
从而结论得证。
:::

```terms
Jacobi 三重积:
  en: Jacobi triple product
  de: Jacobi-Tripelprodukt
  fr: triple produit de Jacobi
```
