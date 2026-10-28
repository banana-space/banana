---
title: Dirichlet 素数定理
aliases: [Dirichlet 算数级数定理, Bombieri–Vinogradov 定理, Bombieri-Vinogradov 定理]
categories: [解析数论]
---

<problems>
- “$a=1$ 的情形”中定理的证明里，素因子都在有限集 $S$ 中的 $[1,N]$ 中正整数似乎应有 $O((\log N)^{|S|})$ 个，$\Phi_d$ 在 $[1,N]$ 中所取值的个数似乎应为 $\gg N^{1/\deg \Phi_d}$ 而不是 $O(N^{1/\deg \Phi_d})$。
- “自然密度版本”一节的解析定理中，$g(z)$ 似乎应能全纯延拓（而不只是连续延拓）到 $\operatorname{Re}z\ge0$ 的一个邻域上。
</problems>

::: convention
在本文中，

- 下标含 $p$ 的求和与求积中，$p$ 只取[[素数]]。
- 下标含 $\chi$ 的求和与求积中，$\chi$
  取遍固定模数的 [[Dirichlet 特征]]。

:::

**Dirichlet 素数定理**对[[互素]]正整数 $a$ 与 $d$
描述模 $d$ 余 $a$ 的正整数中[[素数]]的分布。
Dirichlet 一开始只证明了其中素数无限多，推广 Euclid 素数无限定理；
后人将其加强，证明了素数依[[解析密度]]乃至[[自然密度]]，
都在与 $d$ 互素的各个模 $d$ 剩余类中分布均等。

这一定理在数域中的推广是 [[Chebotarev 密度定理]]，而
[[Linnik 定理]]则估计了级数中最小素数的阶。

研究整系数[[多项式]]所取素数是[[解析数论]]研究的核心课题之一。

## 历史

自 1737 年 [[Euler]] 发现 [[Euler 乘积]]以来，
素数的研究就与 [[Riemann zeta 函数|$\zeta$ 函数]]密不可分。
1775 年 Euler 证明了定理的 $a=1$ 情形。
定理的一般情形，作为猜想，最早出现在 Legendre
对[[二次互反律]]的错误证明中。直到 1837 年，Dirichlet
才用其 [[Dirichlet L 函数|$L$ 函数]]给出了定理的完整证明。
这一结果也标志着[[解析数论]]的正式诞生。后来
Selberg 于 1949 年给了一个初等证明。

## 定理叙述

Dirichlet 素数定理的最初版本是

::: theorem {@原始}
$a$、$d$ 是互素正整数。则集合
$\{a+nd\mid n\in\mathbb N\}$ 中存在无穷多个素数。
:::

加强到[[解析密度]]的命题为

::: theorem {@解析密度}
$a$、$d$ 是互素正整数。则
$$
\lim_{s\to 1^+}\frac{\sum_{p\equiv a\pmod{d}}p^{-s}}
{\sum_pp^{-s}}=\frac{1}{\varphi(d)}.
$$
:::

加强到[[自然密度]]的命题为

::: theorem {@自然密度}
$a$、$d$ 是互素正整数。则
$$
\lim_{x\to\infty}\frac{\#\{p\,为素数\mid
p\le x,\,p\equiv a\pmod d\}}{\#\{p\,为素数\mid
p\le x\}}=\frac{1}{\varphi(d)}.
$$
:::

这里 $\varphi$ 指 [[Euler 函数]]。

## 证明

### $a$、$d$ 被限制的特殊情形

首先证明一个引理：

::: lemma {@lem:分圆}
对任意正整数 $n$，存在正数 $A$，使得任意整数 $c$ 代入分圆多项式
得的 $\Phi_n(c)$ 的任意大于 $A$ 的素因子 $p$，有 $p\equiv 1\pmod{n}$。
:::

::: proof
考虑 $f(x)=(x-1)(x^2-1)\cdots(x^{n-1}-1)$，显然 $f$、$\Phi_n$ 在 $\mathbb Q[x]$ 中互质，
因此存在 $a(x),b(x)\in\mathbb Q[x]$ 使 $af+b\Phi_n=1$。
设 $a$、$b$ 系数分母的最小公倍数为 $A$，因此 $Aa,Ab\in\mathbb Z[x]$。
现对 $p>A$ 是 $\Phi_n(c)$ 的素因子，因为 $(x^n-1)/\Phi_n(x)$ 是整系数多项式，
立刻得到 $c^n\equiv 1\pmod p$。另一方面 $(Aa)f+(Ab)\Phi_n=A$，这表明 $f(c)$ 不是 $p$ 的倍数。
因此由 [[Fermat 小定理]]，$c^{p-1}\equiv 1\bmod{p}$，
先前的讨论表明 $n$ 是 $c$ 模 $p$ 的阶，因此 $n|(p-1)$，于是引理得证。
:::

#### $a=1$ 的情形

::: theorem
$d$ 是正整数，则 $\{1+nd:n\in\mathbb N\}$ 中存在无穷多个素数。
:::

::: proof
若对给定的 $d$ 对应的素数有限，则由 @lem:分圆，$\Phi_d(c)$ 能取的素因子集合 $S$ 是有限的。
但在 $[1,N]$ 中，素因子在给定集合 $S$ 中的正整数，只有 $O(\log N)$ 个。
这与整系数多项式 $\Phi_d$ 能在 $[1,N]$ 中能取 $O(N^{1/\deg \Phi_d})$ 个值的事实相矛盾。
:::

#### $d$ 较小的情形

本小节所用的方法是历史上试图证明该定理的一个尝试，
而我们展示的 $d=24$ 的情形可以认为是这种方法能做到的“自然边界”，
容易看出这一方法的局限性和特殊性。
尽管目前并没有非解析数论的一般性方法，
不过需要类似技巧的问题也常出现在一些数论教材关于二次剩余的习题中。

::: theorem {@d24}
对 $d=24$ 与任何满足 $(a,d)=1$ 的 $a$，$\{a+nd:n\in\mathbb N\}$ 中存在无穷多个素数。
:::

为证明这一定理，我们先看数个引理。

::: lemma [一些特殊的二次剩余] {@lem:二次剩余}
设 $p>3$ 是素数，则
\[
\begin{aligned}
  (-1|p)&=1\iff p\equiv 1\pmod 4,\\
  (2|p)&=1\iff p\equiv 1,7\pmod 8,\\
  (-2|p)&=1\iff p\equiv 1,3\pmod 8,\\
  (3|p)&=1\iff p\equiv 1,11\pmod {12},\\
  (-3|p)&=1\iff p\equiv 1\pmod 6,\\
  (6|p)&=1\iff p\equiv 1,5,9,23\pmod {24},\\
  (-6|p)&=1\iff p\equiv 1,5,7,11\pmod {24}.
\end{aligned}
\]
其中 $(a|p)$ 是 Legendre 符号 $\left( \frac ap \right)$ 的缩写。
:::

::: proof
都是[[二次互反律]]的简单应用，具体验证略。
:::

我们定义如下一系列多项式
\[
\begin{aligned}
  f_5(x)&:=x^4+9&=&(x^2)^2+3^2&=&(x^2+3)^2-6x^2&=&(x^2-3)^2+6x^2,\\
  f_7(x)&:=x^4+2x^2+4&=&(x^2+2)^2-2x^2&=&(x^2+1)^2+3&=&(x^2-2)^2+6x^2,\\
  f_{11}(x)&:=x^4+4x^2+1&=&(x^2+1)^2+2x^2&=&(x^2+2)^2-3&=&(x^2-1)^2+6x^2,\\
  f_{13}(x)&:=x^4-x^2+1&=&(x^2-1)^2+x^2&=&(x^2-1/2)^2+3(1/2)^2&=&(x^2+1)^2-3x^2,\\
  f_{17}(x)&:=x^4+1&=&(x^2)^2+1&=&(x^2+1)^2-2x^2&=&(x^2-1)^2+2x^2,\\
  f_{19}(x)&:=x^4-2x^2+4&=&(x^2-2)^2+2x^2&=&(x^2-1)^2+3&=&(x^2+2)^2-6x^2,\\
  f_{23}(x)&:=x^4-4x^2+1&=&(x^2-1)^2-2x^2&=&(x^2-2)^2-3&=&(x^2+1)^2-6x^2.\\
\end{aligned}
\]

::: lemma {@lem:f}
设 $l$ 为 $5,7,11,13,17,19,23$ 之一。
若 $n$ 是整数，$f_l(n)$ 的任意一个素因子 $p$，必满足 $p$ 同余 $1$ 或 $l$ 模 $24$。
:::

::: proof
这是 @lem:二次剩余 的立即推论。
:::

::: remark
值得注意的是，$8$ 次数域 $\mathbb Q(\zeta_{24})$ 在 $\mathbb Q$ 上是 [[Galois 扩张]]，
[[Galois 群]]为 $(\mathbb Z/2)^3$，它恰好有 $7$ 个不同的 $4$ 次子域，
可以检查正由上面的 $7$ 个多项式生成，这提供了该问题的一个类域论视角。
:::

接下来我们定义一族多项式
\[
\begin{aligned}
  g_5(x)&:=\frac12f_5(12x+1)&=&24xh_5+5,\\
  g_7(x)&:=f_7(6x+1)&=&24xh_7+7,\\
  g_{11}(x)&:=\frac13f_{11}(6x+2)&=&24xh_{11}+11,\\
  g_{13}(x)&:=f_{13}(12x+2)&=&24xh_{13}+13,\\
  g_{17}(x)&:=f_{17}(6x+2)&=&24xh_{17}+17,\\
  g_{19}(x)&:=\frac1{12}f_{19}(12x+4)&=&24xh_{19}+19,\\
  g_{23}(x)&:=\frac12f_{23}(12x+3)&=&24xh_{23}+23.\\
\end{aligned}
\]
其中 $h_l$ 都是整系数多项式。

::: lemma {@lem:g}
设 $l$ 为 $5,7,11,13,17,19,23$ 之一。
若 $n$ 是整数，$g_l(n)$ 必存在一个素因子 $p$，满足 $p$ 同余 $l$ 模 $24$。
:::

::: proof
由 @lem:f，并注意其素因子不能都同余 $1$ 模 $24$，结论可得。
:::

::: proof [@d24 的证明]
只证明 $a=5,7,11,13,17,19,23$ 的情形。若满足条件的素数只有有限多，设它们乘积为 $P$。
现在注意到 $g_a(c_a)\not\equiv 0\pmod a$，
其中 $c_5=2,c_7=1,c_{11}=1,c_{13}=1,c_{17}=2,c_{19}=1,c_{23}=2$。
于是考虑 $g_a(c_aP^{a-1})$，根据 @lem:g 我们得知其有一个同余 $a$ 模 $24$ 的素因子；
由 [[Fermat 小定理|Fermat 定理]]知 $c_aP^{a-1}\equiv c_a\pmod a$，因此该素因子不是 $a$，
进而 $(g_a(c_aP^{a-1}),P)=1$，矛盾。
:::

::: remark
这一初等方法的思想很简单：通过合理构造将同余其他者的素因子排除掉，
而后用类似 Euclid 的乘积构造互素进而推出矛盾。
同时问题有不少：一方面它在推广上有巨大的障碍，
对于一般的情形不仅难以找到合适的多项式，
即便是一般的剩余条件也很难用一系列 $n$ 次剩余控制；
其次目前这样的证明并不很优雅，也很难改进以给出素数分布的定量估计。
:::

### 解析密度版本

#### 准备工作

回忆[[Dirichlet 特征]]的定义。由[[有限群常表示论]]，有正交关系
\[
\frac{1}{\varphi(d)}\sum_\chi\overline{\chi(a)}\chi(m)
= \begin{cases}
  1 & a \equiv m \pmod d\\
  0 & a \not\equiv m \pmod d
\end{cases}
\]

在[[素数定理]]的证明中我们考虑了
[[Riemann $\zeta$ 函数]]。
它在此时的类似物是 [[Dirichlet $L$ 函数]]。

回忆它的定义和基本性质：

::: proposition [$L$ 函数与 Euler 乘积]
实数 $s>1$ 时，
\[
L(s, \chi):=\sum_{n=1}^\infty\frac{\chi(n)}{n^s}=\prod_p\frac1{1-\chi(p)p^{-s}}.
\]
:::

于是取对数得到
\[
\log L(s, \chi)=
-\sum_p\log\left(1-\frac{\chi(p)}{p^s}\right)
=\sum_p\frac{\chi(p)}{p^s}+C(s).
\]
其中
\[
C(s)=\sum_p\left(-\log\left(1-\frac{\chi(p)}{p^s}\right)
-\frac{\chi(p)}{p^s}\right),\ |C(s)|\le C
=\sum_p\frac{1}{p^2}<+\infty
\]
于是可将 $\sum_p\frac{\chi(p)}{p^s}$ 的估计在差常数误差的意义下转化为
$\log L(s, \chi)$ 的估计。

主特征情形的 Dirichlet $L$ 函数与
[[Riemann $\zeta$ 函数]]性质几乎无差别。
关于非主特征的关键结论是

::: proposition {@prop:L1}
对模 $d$ 的非主特征 $\chi$，$L(1, \chi)\ne0$。
:::

#### 定理证明

我们直接证 @解析密度，由素数倒数和发散其显然推出 @原始。

::: proof
把 [[Dirichlet $L$ 函数]]的乘积式取对数，
知对任一模 $d$ 特征 $\chi$，在 $s\to1^+$ 时有
$$
\log L(s,\chi)=\sum_p\chi(p)p^{-s}+O(1).
$$
由 @prop:L1，对 $\chi\ne1$
有 $L(1,\chi)\ne0$，此时对 $s\to1^+$ 就有
$$
\sum_p\chi(p)p^{-s}=O(1).
$$
所以对 $s\to1^+$，由正交关系就有
$$
\sum_{p\equiv a\pmod d}p^{-s}=\frac{1}{\varphi(d)}
\sum_\chi\chi^{-1}(a)\sum_p\chi(p)p^{-s}
=\frac{1}{\varphi(d)}\sum_pp^{-s}+O(1).
$$
于是由 $\lim_{s\to1^+}\sum_pp^{-s}=+\infty$ 即得结论。
:::

### 自然密度版本

#### 准备工作

<see>[[素数定理]]</see>

类似素数定理的证明思路，我们引入[[Chebyshev 函数]]的变种
\[
\theta_\chi(x):=\sum_{p\le x}\chi(p)\log p.
\]
第一类 Chebyshev 函数和 $\chi=\chi_0$ 的特殊情形只相差有限项，因此对充分大的 $x$ 只差一个常数。

根据[[素数定理]]，我们有

::: proposition {@prop:素数定理}
如下的瑕积分收敛：
\[
\lim_{B\to+\infty}\int_1^B\frac{\theta(x)-x}{x^2}dx.
\]
:::

另一方面，证明素数定理所用关键的[[Tauber 定理]]亦将大显神威：

::: theorem [解析定理] {@thm:解析定理}
设 $f(t)$（$t\ge0$）是有界且可积的函数，设 [[Laplace 变换]]得到 $\operatorname{Re}z>0$ 上的全纯函数
\[
g(z)=\int_0^\infty f(t)e^{-zt}dt.
\]
如果 $g(z)$ 能连续延拓到 $\operatorname{Re}z\ge0$ 的一个邻域上，
则瑕积分 $\lim_{T\to\infty}\int_0^T f(t)dt$ 存在且等于 $g(0)$。
:::

为了应用上述定理，我们需了解 $L$ 函数零点的重要性质。

<see>[[Dirichlet L 函数]]</see>

::: proposition {@prop:无零点}
对非主特征 $\chi$，$\operatorname{Re}s\ge1$ 的某个邻域内 $L(s, \chi)$ 是解析函数，
且 $L(s, \chi)$ 在 $\operatorname{Re}s\ge 1$ 中无零点。
:::

#### 定理证明

::: proposition {@prop:Phi}
对非主特征 $\chi$ 与 $\operatorname{Re}s>1$，有全纯函数的等式
\[
\Phi_\chi(s):=-\frac{L'(s,\chi)}{L(s,\chi)}-\sum_p\frac{\chi(p)^2\log p}{p^s(p^s-\chi(p))} =\sum_{p}\frac{\log p\cdot \chi(p)}{p^s}=s\int_1^\infty\frac{\theta_\chi(x)}{x^{s+1}}dx=s\int_1^\infty e^{-st}{\theta_\chi(e^t)}dt.
\]
由此得知 $\Phi_\chi(s)$ 定义了 $\operatorname{Re}s\ge1$ 一个邻域内的全纯函数。
:::

::: proof
和素数定理中证明的版本类似，第一个等号是对乘积公式取对数导数，
第二个等号是将 $\theta_\chi$ 求和写开与积分交换顺序得到的，第三个等号则是换元 $x=e^t$。
由 @prop:无零点，非主特征的 $L$ 函数在 $\operatorname{Re}s\ge1$ 无零点，即得结论。
:::

::: proposition {@prop:瑕积分}
$\chi$ 是模 $d$ 的非主特征，则如下的瑕积分收敛：
\[
\lim_{B\to+\infty}\int_1^B\frac{\theta_\chi(x)}{x^2}dx.
\]
:::

::: proof
考虑 $f(t)=\theta_\chi(e^t)e^{-t}$ 并计算 [[Laplace 变换]]：
\[
g(z)=\int_0^\infty \frac{\theta_\chi(e^t)}{e^t}e^{-tz}dt=\frac{\Phi_\chi(z+1)}{z+1}.
\]
经 @thm:解析定理 处理，我们需要的收敛结论由 $x=e^t$ 换元得到。
:::

于是考察
\[
\theta_a(x):=\sum_{p\le x,p\equiv a\pmod d}\log p=\frac1{\varphi(d)}\sum_{p\le x}\sum_\chi{\chi(a)^{-1}}\chi(p)\log p=\frac1{\varphi(d)}\sum_\chi\chi(a)^{-1}\theta_\chi(x).
\]
由 @prop:素数定理 与 @prop:瑕积分 容易得知如下的极限收敛：

```math {@eq:theta_a}
\lim_{B\to+\infty}\int_1^B\frac{\varphi(d)\theta_a(x)-x}{x^2}dx=\lim_{B\to+\infty}\int_1^B\left(\frac{\theta_{\chi_0}(x)-x}{x^2}+\sum_{\chi\ne\chi_0}\chi(a)^{-1}\frac{\theta_\chi(x)}{x^2}\right)dx.
```

::: proposition {@prop:theta_a}
我们有
\[
\lim_{x\to\infty}\frac{\varphi(d)\theta_a(x)}{x}=1.
\]
:::

::: proof
一方面，若 $\lambda>1$ 满足存在充分大的 $x$ 使 $\varphi(d)\theta_a(x)\ge\lambda x$。
因为 $\theta_a$ 单调不减，有
\[
\int_x^{\lambda x}\frac{\varphi(d)\theta_a(t)-t}{t^2}dt\ge\int_x^{\lambda x}\frac{\lambda x-t}{t^2}dt=\int_1^\lambda\frac{\lambda -t}{t^2}dt>0.
\]
式子最右是与 $x$ 无关的量，与 @eq:theta_a 中瑕积分的收敛矛盾。

另一方面，若 $\lambda<1$ 满足存在充分大的 $x$ 使 $\varphi(d)\theta_a(x)\le\lambda x$。同理有
\[
\int_{\lambda x}^x\frac{\varphi(d)\theta_a(t)-t}{t^2}dt\le\int_{\lambda x}^x\frac{\lambda x-t}{t^2}dt=\int_\lambda^1\frac{\lambda-t}{t^2}dt<0.
\]
式子最右是与 $x$ 无关的量，与 @eq:theta_a 中瑕积分的收敛矛盾。
:::

::: proof [@自然密度 的证明]
由 @prop:theta_a，简单将对 $\theta_a$ 的估计转化为自然密度估计，
即得自然密度版本的 Dirichlet 素数定理。
:::

## 带误差项的版本

上述章节描述的 Dirichlet 素数定理形式均仅仅在 $d$ 为常数时成立。
利用较为复杂的围道积分法可以得到误差项不受 $d$ 大小影响的渐近公式：

::: theorem [Siegel–Walfisz]
对于所有的 $A>0$ 和 $(a,d)=1$ 均有：
\[
\pi(x;d,a)={\operatorname{li}x\over\varphi(d)}+O\left(x\over\log^Ax\right)
\]
其中 $\pi(x;d,a)$ 表示 $\le x$ 且 $\equiv a\pmod d$ 的素数个数，$\operatorname{li}x$ 为对数积分，
误差项中的**非实效**隐含常数仅与 $A$ 有关。
:::

利用这个结论，Vinogradov 证明了每个充分大的奇数都可以被表示成三个素数的和。

如果假定[[广义 Riemann 猜想]]成立，则可将 Siegel–Walfisz 定理的误差项改进成：

```math {@eqgrh}
\pi(x;d,a)={\operatorname{li}x\over\varphi(d)}+O(\sqrt x\log x)
```

其中误差项中的常数是**实效**的。当然很多时候涉及到 @eqgrh 都可以用以下无条件成立的均值定理来替代：

::: theorem [Bombieri–Vinogradov]
对于所有的 $A>0$ 均存在 $B=B(A)$，使得当 $x$ 充分大时：
\[
\sum_{d\le x^{\frac12}\log^{-B}x}\max_{y\le x}\max_{(a,d)=1}\left|\pi(y;d,a)-{\operatorname{li}y\over\varphi(d)}\right|\ll{x\over\log^Ax}
\]
其中 $\ll$ 中**非实效**的常数仅与 $A$ 的大小有关。
:::

这个结论在后来对 1+C 型[[Goldbach 猜想|Goldbach 问题]]的研究中起了至关重要的作用。

```terms
Dirichlet 素数定理:
  en: Dirichlet's theorem on arithmetic progressions
  de: dirichletscher Primzahlsatz
  fr: théorème de la progression arithmétique de Dirichlet
```
