---
title: Stirling 公式
categories: [实分析, 复分析]
notices:
  - name: 问题
    items:
      - “推导”一节的注中，$K\to\infty$ 似乎应为 $m\to\infty$。
---

**Stirling 公式**描述[[阶乘]]的渐近行为，
以James Stirling的名字命名。常见的形式如下：
\[
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n\ (n\to+\infty)
\]
注意符号$\sim$表示渐近，换言之其左右两项比值的极限为$1$。

该公式的精度较高，即便对较小的$n$也能得到$n!$不错的估计。

## 陈述和证明

### $\mathbb Z_+$ 的情形

::: theorem
对$n\in\mathbb Z_+$有
\[
n!=\sqrt{2\pi n}\left(\frac ne\right)^n e^{c_n}
\]
其中$c_n$满足
\[
0<c_n<\frac1{12n}
\]
:::

::: proof
对$n\in\mathbb Z_+$定义数列
\[
d_n=\log(n!)-\left(n+\frac12\right)\log n+n
\]
利用[[Taylor 展开]]计算$d_n-d_{n+1}$
\[
\begin{aligned}
  d_n-d_{n+1}
  = & \left(\frac{2n+1}2\right)\log\left(\frac{1+\frac1{2n+1}}{1-\frac1{2n+1}}\right)-1 \\
  = & \sum_{k=1}^\infty\frac1{2k+1}\cdot\frac1{(2n+1)^{2k}} \\
\end{aligned}
\]
于是放缩得到
\[
0<d_n-d_{n+1}<\sum_{k=1}^\infty\frac13\cdot\frac1{(2n+1)^{2k}}=\frac1{12n}-\frac1{12(n+1)}
\]
故$d_n$递减而$d_n-\frac1{12n}$递增。下述极限存在
\[
C=\lim_{n\to\infty}d_n=\lim_{n\to\infty}d_n-\frac1{12n}
\]
更精确地有
\[
0<c_n=d_n-C<\frac1{12n}
\]
现只要证明
\[
C=\frac12\log(2\pi)
\]
而根据[[Wallis 公式]]，我们有
\[
\begin{aligned}
  \lim_{n\to\infty}\frac{\prod_{k=1}^{n}(2k\cdot2k)}{\prod_{k=1}^n((2k-1)\cdot(2k+1))}=\frac \pi2\\
  \lim_{n\to\infty}\frac{(2^n n!)^2}{(2n)!\sqrt{2n+1}}=\frac{e^C}2=\sqrt{\frac\pi2}\\
\end{aligned}
\]
于是我们完成了证明。
:::

### $\mathbb C$的情形

::: theorem [Stirling 公式]
设$z\in\mathbb C$满足$-\pi+\delta<\arg z<\pi-\delta$，则
\[
\log\Gamma(z)=\left(z-\frac{1}{2}\right)\log z-z+\log\sqrt{2\pi}+O(|z|^{-1}),
\]
其中 $O$ 中的常数只依赖于$\delta$。
:::

将正整数的证明过程稍作修改即可得到$\operatorname{arg} z\in(-\pi+\delta,\pi-\delta)$时$\Gamma$
函数版本的Stirling公式。详见 [[$\Gamma$ 函数]]。

## 渐近版本

<see>[[Bernoulli 多项式]]</see>

### 推导

::: theorem
给定$m\in\mathbb Z_+$，对$n\in\mathbb Z_+,n\to+\infty$有
\[
\log(n!)=\left(n+\frac12\right)\log n-n+\frac12\log(2\pi)+\sum_{1\le k\le m}\frac{B_{2k}}{2k(2k-1)n^{2k-1}}+O\left(1\over n^{2m+1}\right)
\]
:::

::: proof
根据[[Euler–Maclaurin 公式]]，我们有
\[
\begin{aligned}
  \log(n!)
  &=\sum_{1\le k\le n}\log k=\int_1^n\log x\mathrm dx+\frac12\log n+\int_1^n{\overline B_1(x)\over x}\mathrm dx \\
  &=\left( n+\frac12 \right)\log n-n+\underbrace{1+\int_1^\infty{\overline B_1(x)\over x}\mathrm dx}_C-\int_n^\infty{\overline B_1(x)\over x}\mathrm dx
\end{aligned}
\]
由前面的计算可知$C=\frac12\log(2\pi)$，所以：
\[
\log(n!)=\left( n+\frac12 \right)\log n-n+\frac12\log(2\pi)-\int_n^\infty{\overline B_1(x)\over x}\mathrm dx
\]
再根据幂函数的性质，易知$q\ge1$时总有：
\[
{\mathrm d^q\over\mathrm dx^q}\log x=(-1)^{q-1}(q-1)!x^{-q}
\]
所以通过不断分部积分，可知：
\[
\begin{aligned}
  \int_n^\infty{\overline B_1(x)\over x}\mathrm dx
  &=\sum_{1\le k\le m}{B_{2k}\over(2k)!}(-1)^{2k}(2k-2)!x^{1-2k}|_n^\infty+{(-1)^{2m+1-1}(2m)!\over(2m+1)!}\int_n^\infty{\overline B_{2m+1}(x)\over x^{2m+1}}\mathrm dx \\
  &=-\sum_{1\le k\le m}{B_{2k}\over2k(2k-1)n^{2k-1}}+{1\over2m+1}\int_n^\infty{\overline B_{2m+1}(x)\over x^{2m+1}}\mathrm dx
\end{aligned}
\]
对于最后一项，再做一次分部积分，可知：
\[
\begin{aligned}
  \int_n^\infty{\overline B_{2m+1}(x)\over x^{2m+1}}\mathrm dx
  &=-{B_{2m+2}\over(2m+2)n^{2m+1}}-{2m+1\over2m+2}\int_n^\infty{\overline B_{2m+2}(x)\over x^{2m+2}}\mathrm dx \\
  &=O\left( 1\over n^{2m+1} \right)+O\left( \int_n^\infty{\mathrm dx\over x^{2m+2}} \right)=O\left( 1\over n^{2m+1} \right)
\end{aligned}
\]
将这些式子合并便得结论。
:::

::: remark
值得注意的是，在上述定理中虽然我们能得出给定任意精确阶的渐近公式，
但是对于一个固定的$n$，右端在$K\to\infty$时并不收敛，
这是因为[[Bernoulli 数]]的增长速度远远快于指数，
根据 [[Riemann $\zeta$ 函数]]在正偶数的取值我们知道
\[
B_{2k}=\frac{(-1)^{k+1}\cdot2(2k)!}
{(2\pi)^{2k}}\zeta(2k),\ \zeta(2k)\to1,\
|B_{2k}|\sim4\sqrt{\pi k}\left(\frac k{\pi e}\right)^{2k}
\]
这表明右边视作关于$k$的级数只有有限项会增加精度，这样的级数一般被称作[[渐近级数]]。
:::

### 实用公式

根据渐近展开，我们保留前四项即得到

\[
\begin{aligned}
  \log(n!)\sim\left(n+\frac12\right)\log n-n+\frac12\log(2\pi)+\frac1{12n}-\frac1{360n^3}+\frac1{1260n^5}-\frac1{1680n^7}+\cdots\\
  n!\sim \sqrt{2\pi n}\left(\frac ne\right)^n\left(1+\frac1{12n}+\frac1{288n^2}-\frac{139}{51840n^3}-\frac{571}{2488320n^4}+\cdots\right)
\end{aligned}
\]

只要保证对应展开式中有足够项的系数一致就能得到较好的实用逼近，例如Gergő Nemes在2007年提出的

\[
\Gamma(z)\approx\sqrt{\frac{2\pi}z}\left(\frac1e\left(z+\frac1{12z-\frac1{10z}}\right)\right)^z
\]

而Srinivasa Ramanujan提出的估计是

\[
\Gamma(1+x)\approx\sqrt\pi\left(\frac xe\right)^x\left(8x^3+4x^2+x+\frac1{30}\right)^{\frac16}\ (x\ge0)
\]

```terms
Stirling 公式:
  en: Stirling's formula
  de: Stirlingsformel
  fr: formule de Stirling
```
