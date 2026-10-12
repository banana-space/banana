---
title: 素数定理
categories: [解析数论]
notices:
  - name: 问题
    items:
      - “$\zeta(3)$是无理数”一节中推论的证明里，换元后得到的积分似乎混用了变量：分子含 $(1-z)^n$，分母与积分变量仍是 $w$。
---

::: convention
在本文中，

- 下标含 $p$ 的求和与求积中，$p$ 只取[[素数]]。

:::

**素数定理**刻画了[[自然数]]中[[素数]]的渐近分布，
其中一种形式为：
\[
\pi(n) \sim \frac{n}{\log n}.
\]
简单来说，随着自然数变大，其中的素数越来越稀疏，并且密度以对数衰减。

素数的分布也是[[解析数论]]研究的核心课题之一。

## 历史

自Euler在1737年发现了著名的[[Euler 乘积]]形式，即
\[
\zeta(s)=\sum_{n=1}^\infty\frac1{n^s}=
\prod_{p}\frac1{1-p^{-s}},
\]
人们对素数的定量研究正式宣告开始，解析数论的萌芽出现。
尽管素数定义简单，有关的代数结论形式优美，但人们发现讨论其分布绝非易事。
在Euler的发现大约60年后，Gauß和Legendre对小素数进行仔细的数值计算，
提出了广为人知的$\pi(x)\sim x/\log x$。
大约1850年，Chebyshev用初等方法证明了$\pi(x)$的可以被$x/\log x$
的两个常数倍控制，首次证明了正确的阶，
而且他也指出如果$\pi(x)\log x/x$的极限存在，那么必然为$1$，
他给出的界已经足够好，
以至能证明1845年Bertrand提出的[[Bertrand 假设]]：即区间$[n,2n]$中总存在素数。

1859年，Riemann关于 [[Riemann zeta 函数|$\zeta$ 函数]]的重要论文发表，
其中指出了Gauß和Legendre猜想的关键证明步骤。
直到1896年，其中的技术细节被Hadamard和de la Vallée Poussin独立完成，
$\pi(x)\sim x/\log x$的正确性得到证实。
二人证明的主要工具都是[[复分析]]，
皆对$\zeta$ 函数的非平凡零点分布给出了粗略估计。

到了20世纪，素数定理越来越多的新证明出现。其中值得一提的是Selberg和
Erdős在1949年给出的“初等”证明。
另外随着Tauber方法的出现和发展，定理的证明也变得更加简洁。
1980年Donald J. Newman也给出了一个近乎只用到
[[Cauchy 积分公式]]的证明，而1997年Don Zagier则将这证明压缩到三页纸。

后来，人们的主要关心素数分布的余项，定义对数积分函数
\[
\operatorname{Li}(x)=\int_2^x\frac{dt}{\log t},
\]
素数定理的熟知版本也能被写作$\pi(x)\sim\operatorname{Li}(x)$。
早在1899年de la Vallée Poussin
在另一篇文章中指出
$\pi(x)=\operatorname{Li}(x)+O(xe^{-a\sqrt{\log x}})$
对某正常数$a$ 成立。
而1901年 Helge von Koch指出在[[Riemann 猜想]]成立的前提下，
能将结果改良为
\[
\pi(x)=\operatorname{Li}(x)+O(\sqrt x\log x),
\]
实际上这结果也等价于Riemann 猜想。

## 定理叙述

素数定理最为人熟知的版本是：

::: theorem {@thm:pnt}
用$\pi(x)$表示不超过正数$x$的素数个数，则
\[
\lim_{x\to+\infty}\frac{\pi(x)\log x}{x}=1.
\]
:::

Chebyshev 的弱版本指的是

::: theorem [Chebyshev]
存在常数$0<c_1<c_2$使$x$充分大时
\[
c_1x\le \vartheta(x) \le c_2x.
\]
:::

## 证明

该证明主要参考了Don Zagier的证明。
为了完整性和可读性，
我们回忆有关Chebyshev $\vartheta$函数以及
Riemann $\zeta$函数的基本知识，
证明见相应条目。

### 准备工作

#### Chebyshev $\vartheta$ 函数的相关性质

<see>[[Chebyshev 函数]]、[[Chebyshev 不等式 (数论)]]</see>

::: definition [Chebyshev $\vartheta$函数]
对如下的函数，我们称第一类Chebyshev 函数：
\[
\vartheta(x):=\sum_{p\le x}\log p.
\]
:::

我们指出其与素数分布的重要关系：

::: lemma {@lem:theta-pi}
我们有如下等式
\[
\begin{aligned}
  \liminf_{x\to\infty}\frac{\vartheta(x)}{x}=\liminf_{x\to\infty}\frac{\pi(x)\log(x)}{x},\\
  \limsup_{x\to\infty}\frac{\vartheta(x)}{x}=\limsup_{x\to\infty}\frac{\pi(x)\log(x)}{x}.
\end{aligned}
\]
:::

::: proof
一方面注意到
\[
\vartheta(x)\le\sum_{p\le x}\log x=\pi(x)\log x.
\]
另一方面，对任意$\varepsilon>0$，由显然的估计$\pi(x)\le x$得
\[
\vartheta(x)\ge\sum_{x^{1-\varepsilon}<p\le x}\log\left(x^{1-\varepsilon}\right)
\ge(1-\varepsilon)\log (x)\cdot (\pi(x)-x^{1-\varepsilon}).
\]
使用夹逼立刻得出我们需要的界。
:::

#### Riemann $\zeta$ 函数的相关性质

<see>[[Riemann zeta 函数]]</see>

::: theorem [Euler乘积]
对$\operatorname{Re}s>1$，我们有
\[
\zeta(s)=\sum_{n=1}^\infty\frac1{n^s}=
\prod_{p}\frac1{1-p^{-s}}.
\]
:::

::: theorem {@thz0}
$\zeta$函数可延拓为$\operatorname{Re}s>0$上的半纯函数，此区域内唯一的[[极点]]是$s=1$。
而且$\operatorname{Re}s\ge 1$时$\zeta(s)\ne0$。
:::

#### Tauber定理

此处我们证明[[Tauber 定理]]的一种形式，其被应用到素数定理的证明中时我们便知为何需要如此条件。

::: theorem [解析定理] {@thm:analytic}
设$f(t)(t\ge0)$是有界且可积的函数，设[[Laplace 变换]]得到$\operatorname{Re}z>0$上的全纯函数
\[
g(z)=\int_0^\infty f(t)e^{-zt}dt.
\]
如果$g(z)$能连续延拓到$\operatorname{Re}z\ge0$的一个邻域上，
则瑕积分$\lim_{T\to\infty}\int_0^T f(t)dt$存在且等于$g(0)$。
:::

::: proof
对$T>0$定义$g_T(z)=\int_0^Tf(t)e^{-zt}dt$，由有界得知其是[[整函数]]，
只需证明$\lim_{T\to+\infty}g_T(0)=g(0)$。

现设$R$充分大，$\delta>0$充分小，
至少使得$D:=\{z\in\mathbb C:|z|\le R,\operatorname{Re}z\ge-\delta\}$的一个邻域内$g$全纯，
考虑$C$为区域$D$的边界逆时针向的围道。
由此根据[[Cauchy 积分公式]]不难写出
\[
g(0)-g_T(0)=\frac1{2\pi i}\int_C(g(z)-g_T(z))e^{zT}\left(1+\frac{z^2}{R^2} \right)\frac{dz}z.
\]
这时我们考察围道位于$\operatorname{Re}z>0$的半圆，将其记作$C_+$。设$\sup_{t\ge0}|f(t)|=B$，
不难估计得知（注意此时$|z|=R$）：
\[
\begin{aligned}
  |g(z)-g_T(z)|&=\left| \int_T^\infty f(t)e^{-zt}dt \right|\le \frac{Be^{-T\cdot\operatorname{Re}z}}{\operatorname{Re}z},\\
  \left| e^{zT}\left( 1+\frac{z^2}{R^2} \right)\frac1z \right|&=e^{T\cdot\operatorname{Re}z}\cdot\frac{2\operatorname{Re}z}{R^2}.
\end{aligned}
\]
因此$C_+$上的积分值被$2\pi B/R$所控制。

另一方面，在剩余的围道$C_-:=C\backslash C_+$上，我们分开看$g(z),g_T(z)$。
首先$g_T$是整函数，因此$C_-$围道可以用半圆$C_-':=\{z\in\mathbb C:|z|=R,\operatorname{Re}z<0\}$替代。
用完全一样的方法，我们用$\pi B/R$限制$g_T$积分的绝对值，因为这次有
\[
|g_T(z)|=\left| \int_0^Tf(t)e^{-zt}dt \right|\le \frac{Be^{-T\cdot\operatorname{Re}z}}{-\operatorname{Re}z}.
\]
其次$g$的部分在$C_-$上的积分会随$T\to+\infty$迅速衰减到$0$，这是因为$R,\delta$选定后，
$g(z)(1+z^2/R^2)/z$是与$T$无关的，
而$e^{zT}$随着$T$的增长有界且内闭一致地趋于$0$。

由此我们令$R\to+\infty$，被$O(1/R)$控制的项立即消失，我们证明了需要的极限。
:::

### 渐近版本的证明（Newman）

我们依次观察如下的三个命题，最终导出结论。

::: proposition {@prop:phi}
对$\operatorname{Re}s>1$有全纯函数的等式
\[
\Phi(s):= -\frac{\zeta'(s)}{\zeta(s)}-\sum_{p}\frac{\log p}{p^s(p^s-1)}=\sum_p\frac{\log p}{p^s}=s\int_1^\infty\frac{\vartheta(x)}{x^{s+1}}dx=s\int_0^\infty e^{-st}\vartheta(e^t)dt.
\]
由此推出$\Phi(s)-\frac1{s-1}$可连续延拓为$\operatorname{Re}(s)\ge1$的一个邻域上定义的连续函数。
:::

::: proof
需要证明的
第一个等号是对将Euler 乘积写成对数后逐项求导而得的。
第二个等号是将Chebyshev $\vartheta$求和写开与积分交换顺序得到的。
第三个等号是换元$x=e^t$得到的。
最后结合准备知识所述$\zeta$函数在$\operatorname{Re}(s)\ge 1$只有极点$s=1$
且没有零点的性质立刻推出所需结论。
:::

::: proposition {@prop:improper}
如下的瑕积分收敛：
\[
\lim_{B\to+\infty}\int_1^B\frac{\vartheta(x)-x}{x^2}dx.
\]
:::

::: proof
定义$f(t)=\vartheta(e^t)e^{-t}-1$，结合 @prop:phi 计算Laplace变换得到
\[
g(z)=\int_0^\infty \left(\frac{\vartheta(e^t)}{e^t}-1\right)e^{-tz}dt=\frac{\Phi(z+1)}{z+1}-\frac1z.
\]
另一方面根据 @prop:phi 和复分析的基础知识，
这样定义的$g(z)$在$\operatorname{Re}z>0$全纯且可连续延拓到$\operatorname{Re}z\ge 0$的一个邻域上。
因此根据准备知识中的Tauber定理（@thm:analytic），我们得知如下的瑕积分收敛：
\[
\lim_{T\to+\infty}\int_0^T\frac{\vartheta(e^t)-e^t}{e^t}dt.
\]
而经过换元$x=e^t$即得到所需结论。
:::

::: proposition {@prop:theta}
我们有
\[
\lim_{x\to+\infty}\frac{\vartheta(x)}x=1.
\]
:::

::: proof
一方面，若$\lambda>1$满足存在充分大的$x$使$\vartheta(x)\ge\lambda x$。因为$\vartheta$单调不减，有
\[
\int_x^{\lambda x}\frac{\vartheta(t)-t}{t^2}dt\ge\int_x^{\lambda x}\frac{\lambda x-t}{t^2}dt=\int_1^\lambda\frac{\lambda -t}{t^2}dt>0.
\]
式子最右是与$x$无关的量，与瑕积分收敛的 @prop:improper 矛盾。

另一方面，若$\lambda<1$满足存在充分大的$x$使$\vartheta(x)\le\lambda x$。同理有
\[
\int_{\lambda x}^x\frac{\vartheta(t)-t}{t^2}dt\le\int_{\lambda x}^x\frac{\lambda x-t}{t^2}dt=\int_\lambda^1\frac{\lambda-t}{t^2}dt<0.
\]
式子最右是与$x$无关的量，与瑕积分收敛的 @prop:improper 矛盾。
:::

::: proof [@thm:pnt 的证明]
由 @prop:theta 及准备知识中Chebyshev $\vartheta$ 函数与素数分布的关系（@lem:theta-pi），
$\pi(x)\sim x/\log x$形式的素数定理得证。
:::

### 带余项版本的证明

<see>[[Riemann zeta 函数]]、[[Perron 公式]]</see>

法国数学家 de la Vallée Poussin 在1896年给出素数定理的解析证明之后对自己的结果进行了优化，
得到了第一个带大O误差项版本的素数定理。而具体的手段是构造了一个比 @thz0 更强大的$\zeta(s)$非零区域：

::: theorem [de la Vallée Poussin] {@thz1}
存在常数$A>0$使得当$|t|\ge2,\sigma\ge1-A(\log|t|)^{-1},s=\sigma+it$时$\zeta(s)\ne0$并且：
\[
{\zeta'\over\zeta}(s)=O(\log|t|)
\]
:::

利用[[Perron 公式]]，我们发现当$\sigma=1+(\log x)^{-1},2\le T\le x$时总有：

```math {@eqnp}
\psi(x)=\sum_{n\le x}\Lambda(n)={-1\over2\pi i}\int_{\sigma-iT}^{\sigma+iT}{x^s\over s}{\zeta'\over\zeta}(s)\mathrm ds+O\left(x\log^2x\over T\right)
```

现在我们设$\delta=A/\log T$，则有：

\[
{-1\over2\pi i}\int_{\sigma-iT}^{\sigma+iT}{x^s\over s}{\zeta'\over\zeta}(s)\mathrm ds=x+\int_{\sigma-iT}^{1-\delta-iT}+\int_{1-\delta-iT}^{1-\delta+iT}+\int_{1-\delta+iT}^{\sigma+iT}
\]

现在我们把 @thz1 中的上界代入到右侧的路径积分，便有：

\[
\int_{1-\delta-iT}^{1-\delta+iT}\ll x(\log T)^2\exp\left(-{A\log x\over\log T}\right)
\]

\[
\int_{\sigma-iT}^{1-\delta-iT}+\int_{1-\delta+iT}^{\sigma+iT}\ll{x\log T\over T}
\]

回代至 @eqnp 中，便有：

\[
\psi(x)=x+O\left(\log^2x\over T\right)+O\left\{ x(\log T)^2\exp\left(-{A\log x\over\log T}\right) \right\}
\]

现在代入$\log T=\sqrt{\log x}$，则当$0<c<\min(1,A)$时就能得到：

\[
\psi(x)=x+O\left\{ x\exp\left( -c\sqrt{\log x} \right) \right\}
\]

利用初等方法可以发现上述渐近公式在左侧更换成$\vartheta(x)$时依然成立，
然后再做一次[[Riemann–Stieltjes 积分]]就可以得到：

::: theorem [de la Vallée Poussin] {@thvpnt}
存在常数$c>0$使得$x$充分大时：
\[
\pi(x)=\operatorname{Li}(x)+O\left\{ x\exp\left( -c\sqrt{\log x} \right) \right\}
\]
:::

::: remark
本节的推导基于 [@mv2007]，但其实 @thvpnt 也有不依赖于 Chebyshev 函数的证明。
具体可以参考 [@liu2021]。
:::

## 应用

### $\zeta(3)$是无理数

熟知关于第二类[[Chebyshev 函数]]的性质：
\[
\log\operatorname{lcm}(1,2,\cdots,n)=\psi(n).
\]

于是素数定理可以写成

::: proposition {@prop:lcm}
对任意$\varepsilon>0$，有
\[
\operatorname{lcm}(1,2,\cdots,n)=O(e^{(1+\varepsilon)n}).
\]
:::

现在我们给出含$\zeta(3)$的重要积分：

::: lemma {@lem:zeta3}
对正整数$r$，我们有
\[
\zeta(3)=\sum_{k=1}^r\frac1{k^3}-\frac12\int_0^1\int_0^1\frac{\log(xy)}{1-xy}(xy)^rdxdy.
\]
:::

::: proof
注意对非负整数$r,s$和非负实数$\sigma$，展开$(1-xy)^{-1}$得到
\[
\int_0^1\int_0^1\frac{x^{r+\sigma}y^{s+\sigma}}{1-xy}dxdy=\sum_{k=0}^\infty\frac{1}{(k+r+\sigma+1)(k+s+\sigma+1)}.
\]
对$\sigma$微分后取$r=s,\sigma=0$即得。
:::

另一方面，我们需要积分的值性质较好。

::: lemma {@lem:rational}
对非负整数$r\ne s$，如下积分的值是有理数，
而且分母是$\operatorname{lcm}(1,2,\cdots,\max\{r,s\})^2\cdot|r-s|$的因子：
\[
\int_0^1\int_0^1\frac{\log(xy)}{1-xy}x^ry^sdxdy.
\]
:::

::: proof
由对称性不妨设$r>s$，此时 @lem:zeta3 证明中的式子可以重新书写为
\[
\begin{aligned}
  \int_0^1\int_0^1\frac{x^{r+\sigma}y^{s+\sigma}}{1-xy}dxdy&=\frac1{r-s}\sum_{k=0}^\infty\left( \frac1{k+s+\sigma+1}-\frac1{k+r+\sigma+1} \right)\\
  &=\frac1{r-s}\sum_{k=s+1}^r\frac{1}{k+\sigma}.
\end{aligned}
\]
因此得到$r>s$时
\[
\int_0^1\int_0^1\frac{\log(xy)}{1-xy}x^ry^sdxdy=-\frac1{r-s}\sum_{k=s+1}^r\frac1{k^2}.
\]
引理得证。
:::

<see>[[Legendre 多项式]]</see>

::: lemma {@lem:legendre}
有如下的恒等式，我们将两边称为$[0,1]$上的Legendre 多项式：
\[
P_n(x):=\frac1{n!}\left(\frac{d}{dx}\right)^n(x^n(1-x)^n)=\sum_{k=0}^n\binom nk\binom{n+k}k(-x)^k.
\]
:::

::: proof
只需二项式展开$(1-x)^n$后直接求导。
:::

结合先前若干引理，我们逼近$\zeta(3)$：

::: corollary {@cor:integral}
对$n\ge 1$我们有
\[
\int_0^1\int_0^1\int_0^1\frac{x^n(1-x)^ny^n(1-y)^nz^n(1-z)^n}{(1-(1-xy)z)^{n+1}}dxdydz=\frac{A_n\zeta(3)+B_n}{\operatorname{lcm}(1,2,\cdots,n)^3}.
\]
其中$A_n,B_n\in\mathbb Z$。
:::

::: proof
令
\[
I:=\int_0^1\int_0^1-\frac{\log(xy)}{(1-xy)}P_n(x)P_n(y)dxdy.
\]
于是利用$P_n$的求和形式（@lem:legendre），将$P_n(x)P_n(y)$写成$x^ry^s$的求和，
分析其中$r\ne s,r=s$的部分立刻得出它形如
$\frac{A_n\zeta(3)+B_n}{\operatorname{lcm}(1,2,\cdots,n)^3}$。

现在注意对$0<t<1$，
\[
\int_0^1\frac{dw}{1-(1-t)w}=-\frac{\log(t)}{1-t}.
\]
因此代入$t=xy$可将上述积分可以重新写成
\[
I=\int_0^1\int_0^1\int_0^1\frac{P_n(x)P_n(y)}{1-(1-xy)w}dxdydw.
\]
将此式关于$x$分部积分$n$次，利用$P_n$的求导定义，得到
\[
I=\int_0^1\int_0^1\int_0^1\frac{(yw)^n\cdot x^n(1-x)^n\cdot P_n(y)}{(1-(1-xy)w)^{n+1}}dxdydw.
\]
在其中换元
\[
z=\frac{1-w}{1-(1-xy)w},
\]
得到
\[
I:=\int_0^1\int_0^1\int_0^1\frac{(1-z)^n(1-x)^n\cdot P_n(y)}{1-(1-xy)w}dxdydw.
\]
最后关于$y$分部积分$n$次说明$I$即原左式。
:::

::: proof [$\zeta(3)$ 无理性的证明]
现在简单计算可以证明
\[
F(x,y,z):=\frac{x(1-x)y(1-y)z(1-z)}{1-(1-xy)z}
\]
是$[0,1]^3$上连续非负的函数且在边界为$0$。
于是计算导数可得最大值在$(\sqrt2-1,\sqrt2-1,\sqrt2/2)$取到，为$(\sqrt 2-1)^4$。

因此存在正常数$C$使
\[
\begin{aligned}
  0<\frac{|A_n\zeta(3)+B_n|}{\operatorname{lcm}(1,2,\cdots,n)^3}
  =\left|(\sqrt 2-1)^{4n} \int_0^1\int_0^1\int_0^1\frac{dxdydz}{1-(1-xy)z} \right|
  \le C(\sqrt 2-1)^{4n}.
\end{aligned}
\]

从而结合$e^3(\sqrt 2-1)^4<1$，结论得证。
:::

::: remark
如果对$A_n$给出一个估计，则可得到$\zeta(3)$的[[无理性度量]]的估计。
:::

## 参考文献

```bibliography
mv2007:
  type: book
  label: Mon07
  author: ["Montgomery, H. L.", "Vaughan, R. C."]
  year: 2007
  title: 'Multiplicative number theory I: Classical theory'
  publisher: Cambridge University Press
liu2021:
  type: preprint
  label: Liu21
  author: Liu, Z.
  year: 2021
  title: A direct proof of the prime number theorem using Riemann’s prime-counting function
  arxiv: '2105.05317'
zagier1997:
  type: article
  label: Zag97
  author: Zagier, D.
  year: 1997
  title: Newman’s short proof of the prime number theorem
  journaltitle: The American Mathematical Monthly
  volume: 104
  number: 8
  pages: 705–708
  doi: 10.1080/00029890.1997.11990704
```

```terms
素数定理:
  en: prime number theorem
  de: Primzahlsatz
  fr: théorème des nombres premiers
```
