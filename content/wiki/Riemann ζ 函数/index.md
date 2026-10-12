---
title: 'Riemann $\zeta$ 函数'
aliases: [Riemann zeta 函数]
categories: [解析数论, 特殊函数]
notices:
  - name: 问题
    items:
      - “函数方程”“其它形式”“应用”各节需要扩充。
      - “非零区域 $\sigma\ge1-A/\log(|t|+2)$”一节中，定理证明的最后一个不等式中，分子 $7-A\delta$ 按前一步计算似乎应为 $1-A\delta$。
---

::: convention
在本文中，

- 下标含$p$的求和与求积，其中的$p$均只对[[素数]]进行。
- $s$表示以$\sigma$为横坐标、$t$为纵坐标的复数。
- $\rho_k$表示以$\beta_k$为横坐标、$\gamma_k$为纵坐标的$\zeta(s)$零点。

:::

**Riemann $\zeta$ 函数**起源于对[[素数]]分布的研究，
其意图于使用一个函数以反映所有素数位点的信息（@prime-prod）。

有时也将 Riemann $\zeta$ 函数简称为 **$\zeta$ 函数**。

## 定义

::: definition {@def-zeta-fun}
**Riemann $\zeta$ 函数**是在区域
$\sigma > 1$ 上[[绝对收敛]]级数
\[
\zeta(s) =  \sum_{n = 1}^{\infty} \frac{1}{n^s}
\]
在 $\mathbb{C}$ 上的[[解析延拓]]，
是 $\mathbb{C}$ 上的[[亚纯函数]]。
:::

::: remark
上述解析延拓可以通过 $\xi$ 函数实现（@prop-xi）。
:::

## 基本性质

### 函数方程

<see>[[Hurwitz zeta 函数]]</see>

$\zeta$ 函数满足函数方程 @zeta-fun-eq。

::: definition
定义函数 $\xi$ 为
\[
\xi(s) = \frac{1}{2} \pi^{-\frac{s}{2}} s (s-1)
\Gamma(\frac{s}{2}) \zeta(s).
\]
其中 $\Gamma$ 表示 [[$\Gamma$ 函数]]。
:::

::: proposition {@prop-xi}
使用 $\zeta$ 函数的级数形式可将 $\xi$ 定义在区域
$\sigma > 1$ 上，
其可解析延拓至 $\mathbb{C}$ 上的[[全纯函数]]，
满足方程
\[
\xi(s) = \xi(1-s).
\]
:::

::: corollary
$\zeta$ 函数可解析延拓至 $\mathbb{C}$ 上的亚纯函数，
满足函数方程

```math {@zeta-fun-eq}
\zeta(s) = 2^s \pi^{s-1} \sin(\frac{\pi s}{2})
\Gamma(1-s) \zeta(1-s).
```

```math {@zeta-fun-eq2}
\zeta(1-s) = 2(2\pi)^{-s} \cos(\frac{\pi s}{2})
\Gamma(s) \zeta(s).
```

:::

此外，可以显式地看出如何将其解析延拓到 $\Re(z) > 0$：

定义
\[
\Psi(s):=\sum_{n=1}^\infty\int_n^{n+1}
\left(\frac1{n^s}-\frac1{x^s}\right)dx.
\]

::: proposition
$\Psi(s)$的定义式中，求和对$\sigma>0$绝对收敛，定义了该区域上的全纯函数。
特别地，在区域$\sigma>1$中，恒成立着
\[
\Psi(s)=\zeta(s)-\frac1{s-1}.
\]
:::

因证明是简明的数学分析技巧而在此省略。

### 其它形式

::: proposition [Euler 乘积] {@prime-prod}
$\zeta$ 函数可表示为无穷乘积，称为**Euler 乘积**：
\[
\zeta(s) = \prod_p \frac{1}{1 - p^{-s}}.
\]
其中 $p$ 取遍所有素数。
:::

::: proof
我们只证明左右在$s>1$是实数时取等。因二者都是全纯函数，这等式成为整个定义域$\sigma>1$上的等式。
根据[[算术基本定理]]，不超过$N$的正整数可以被写成不超过$N$的素数乘积，
假设这些素数中出现的最大幂次为$M$，得到
\[
\begin{aligned}
  \sum_{n=1}^N\frac1{n^s}&
  \le\prod_{p\le N}
  \left(1+\frac1{p^s}+\cdots+\frac1{p^{Ms}}\right)\\
  &\le\prod_{p}
  \sum_{n=1}^\infty\frac{1}{p^{ns}}=
  \prod_{p}\frac1{1-p^{-s}}.
\end{aligned}
\]
于是令$N\to+\infty$即得到一侧不等式。

另一侧，仍然是算术基本定理，由分解的唯一性，我们得到
\[
\prod_{p\le N}
\left(1+\frac1{p^s}+\cdots+\frac1{p^{Ms}} \right)
\le\sum_{n=1}^\infty\frac1{n^s}
\]
后令$N,M\to+\infty$得。
:::

由此可以推出如下结论：

::: proposition
素数的倒数和$\sum_p p^{-1}$发散。
:::

::: proof
利用[[Euler 乘积]]，我们知道对实数$s>1$有
\[
\log\sum_{n=1}^\infty\frac1{n^s}=\sum_p\log \left(\frac1{1-p^{-s}}\right)
\le 2\sum_p p^{-s}.
\]
于是结合[[调和级数]]的发散性，素数的倒数和发散。
:::

### 特殊值

<see>[[Bernoulli 数]]</see>

事实上$\zeta(s)$在$s$为正偶数时的值可以和[[Bernoulli 数]]建立联系：

::: theorem
当$k\in\mathbb{Z}^+$时，总有：
\[
\zeta(2k)=(-1)^{k+1}{(2\pi)^{2k}B_{2k}\over2(2k)!}
\]
:::

### 估计与渐近行为

现在设$\chi(s)=\zeta(s)/\zeta(1-s)$，则根据 @zeta-fun-eq2，可知：

\[
\chi(s)=(2\pi)^s(e^{\pi is/2}+e^{-\pi is/2})^{-1}/\Gamma(s)
\]

根据[[Stirling 公式]]可知当$\sigma$固定、$t\ge2$时：

```math
\begin{aligned}
    \log\Gamma(s)
    &=\left(s-\frac12\right)\log(it)-it+\frac12\log2\pi+O\left(\frac1t\right) \\
    &=\left(s-\frac12\right)\log t+{i\pi s\over2}-{\pi i\over4}-it+\frac12\log2\pi+O\left( \frac1t \right)
\end{aligned}
```

另一方面：

```math
\begin{aligned}
    \log(e^{\pi is/2}+e^{-\pi is/2})
    &=-{\pi is\over2}+\log(1+e^{\pi is}) \\
    &=-{\pi is\over2}+\log(1+e^{\pi i\sigma}e^{-\pi t}) \\
    &=-{\pi is\over2}+O(e^{-\pi t})
\end{aligned}
```

将这些东西结合起来，就有：

\[
\log\chi(s)=\left(s-\frac12\right)\log{2\pi\over t}+it+{i\pi\over4}+O\left( \frac1t \right)
\]

对两侧求指数，便可发现当$\sigma$固定、$t\ge2$时：

```math {@eqnchis}
\chi(s)=\left(t\over2\pi\right)^{1/2-s}e^{i(t+\pi/4)}\left\{ 1+O\left( \frac1t \right) \right\}
```

利用这一点，我们就能得到结论：

::: theorem [$\zeta(s)$的渐近函数方程] {@thfea}
当$\sigma$位于固定区间内、$|t|\ge2$时：
\[
|\zeta(s)|\asymp|t|^{1/2-\sigma}|\zeta(1-s)|
\]
:::

现在将 @thfea 和[[Phragmén–Lindelöf 定理]]相结合，便有：

::: corollary {@cor-zeta-bound}
对于所有固定的$A>0$，当$\sigma\ge-A,|t|\ge2$时一致成立$\zeta(s)=O(|t|^{1/2+A})$。
:::

现在将 @cor-zeta-bound 和[[Borel–Carathéodory 定理]]相结合，即可得到$\zeta'/\zeta(s)$的局部展开式：

::: theorem {@thzaxp}
若$\rho$表示满足$|\rho-2-it|\le6$的$\zeta(s)$零点，则当$-1\le\sigma\le2$时总有：
\[
{\zeta'\over\zeta}(s)={-1\over s-1}+\sum_\rho{1\over s-\rho}+O\{\log(|t|+2)\}
\]
:::

## 零点分布

事实上$\zeta(s)$的函数方程直接表明了$\zeta(s)$的零点分成下面两类：

\[
\begin{cases}
  s=-2,-4,\dots \\
  0\le\sigma\le1
\end{cases}
\]

其中第一种被称为$\zeta(s)$的**平凡零点**，而第二种被称作**非平凡零点**。

### 非平凡零点的个数

<see>[[Riemann–von Mangoldt 公式]]</see>

如果用$N(T)$来表示满足$0\le\Re\rho\le1$、$0<\Im\rho\le T$的$\zeta(s)$零点$\rho$的个数，则有：

::: theorem [Riemann–von Mangoldt] {@th-rv}
当$T\ge2$时成立：
\[
N(T)={T\over2\pi}\log{T\over2\pi}-{T\over2\pi}+O(\log T)
\]
:::

将此结论与抽屉原理结合，即可证明：

::: corollary
当$T\ge2$时总是存在$T'\in[T-1,T+1]$使得：
\[
{\zeta'\over\zeta}(\sigma+iT')=O(\log^2T)
\]
对所有$-1\le\sigma\le2$一致成立。
:::

::: proof
由 @th-rv 可知存在常数$C>0$使$T\ge2$时总有：
\[
N(T+1)-N(T-1)\le C\log T
\]
这意味着当我们把$[T-1,T+1]$分解成$\lceil2C\log T\rceil$个区间时总能找到一个长度为$\gg(\log T)^{-1}$
的区间使得此区间内不含$\zeta(s)$的零点纵坐标，因此当我们让$T'$落在此区间的中央时总有：
\[
{\zeta'\over\zeta}(\sigma+iT')\ll\sum_{|\rho-2-iT'|\le6}\log T=O(\log^2T)
\]
:::

### 非零区域$\sigma\ge1$

$\zeta(s)$ Euler 乘积的绝对收敛性表明$\sigma>1$时$\zeta$函数没有零点，
但通过一些初等的技巧可以将这个**非零区域**进行拓展：

::: lemma [de la Vallée Poussin] {@lmvp}
若$\{a_n\}_{n\ge1}$非负且 Dirichlet 级数
\[
F(s)=\sum_{n\ge1}{a_n\over n^s}
\]
的收敛横坐标为$\sigma_c$，则对于所有的$\sigma>\sigma_c$均有：
\[
3F(\sigma)+4F(\sigma+it)+F(\sigma+2it)\ge0
\]
:::

::: proof
设$\theta_n=t\log n$，则有：
\[
3F(\sigma)+4F(\sigma+it)+F(\sigma+2it)=\sum_{n\ge1}{a_n\over n^\sigma}[3+4\cos\theta_n+\cos2\theta_n]\ge0
\]
其中最后一个不等号是由于
\[
3+4\cos\theta_n+\cos2\theta_n=2(\cos^2\theta_n+2\cos\theta_n+1)=2(1+\cos\theta_n)^2
\]
:::

::: theorem
$\sigma\ge1$时$\zeta(s)\ne0$。
:::

::: proof
若不然，设$\zeta(1+it_0)=0,t_0\ne0$，由局部的全纯性，存在常数$C_1>0,\varepsilon_1>0$使
\[
|\zeta(\sigma+it_0)|< C_1|\sigma-1|,\ |\sigma-1|\le\varepsilon_1,\ \sigma\in\mathbb R.
\]
另一方面$s=1$是极点，因此存在常数$C_2>0, \varepsilon_2>0$使
\[
|\zeta(\sigma)|< C_2|\sigma-1|^{-1},\ |\sigma-1|\le\varepsilon_2,\ \sigma\in\mathbb R.
\]

下面进行计算，首先对$s=\sigma+it,\ \sigma,t\in\mathbb R$，计算实部得到
\[
\operatorname{Re}(n^{-s})=n^{-\sigma}\cos(t\log n).
\]
而Euler乘积和对数的[[Taylor 展开]]告诉我们
\[
\log\zeta(s)=\sum_{p}\log\left( \frac1{1-p^{-s}} \right)=\sum_{p}\sum_{m=1}^\infty\frac{p^{-ms}}{m}.
\]

很明显$\log\zeta(s)$是个具有非负系数的 Dirichlet 级数，所以我们可以套用 @lmvp 得到：

\[
3\log\zeta(\sigma)+4\log\zeta(\sigma+it)+\log\zeta(\sigma+2it)\ge0
\]

对两侧求指数，即得：

\[
|\zeta^3(\sigma)\zeta^4(\sigma+it)\zeta(\sigma+2it)|\ge1
\]

但是由证明开头的估计，应该有

\[
\left|\zeta^3(\sigma)\zeta^4(\sigma+it_0)\zeta(\sigma+2it_0)\right|<C_3|\sigma-1|\to0,\ \sigma\to1^+
\]

这与它始终$\ge1$矛盾。
:::

如果我们对$F(s)=-{\zeta'/\zeta}(s)$套用 @lmvp，则可以得到更强的非零区域：

### 非零区域$\sigma\ge1-A/\log(|t|+2)$

<see>[[Borel–Carathéodory 定理]]</see>

::: theorem [de la Vallée Poussin]
存在$A>0$使$\zeta(s)$在区域$\sigma\ge1-A/\log(|t|+2)$内无零点。
:::

::: proof
将$F(s)=-{\zeta'/\zeta}(s)$代入到 @lmvp 中，则可以发现当$\sigma>1$时总有：

```math {@eqnzvp}
-3{\zeta'\over\zeta}(\sigma)-4\Re{\zeta'\over\zeta}(\sigma+it)-\Re{\zeta'\over\zeta}(\sigma+2it)\ge0
```

倘若$\zeta(\beta_0+i\gamma_0)=0$则当$t=\gamma_0$时可以通过对 @thzaxp 取实部得知当
$\mathscr L=\log(|\gamma_0|+2)$时：
\[
-\Re{\zeta'\over\zeta}(\sigma+i\gamma_0)\le-{1\over\sigma-\beta_0}+O(\mathscr L)
\]
\[
-\Re{\zeta'\over\zeta}(\sigma+2i\gamma_0)\le O(\mathscr L)
\]
另一方面由于$s=1$是$\zeta(s)$的一阶极点，所以：
\[
0\le-{\zeta'\over\zeta}(\sigma)\le{1\over\sigma-1}+O(1)
\]
将这些结论代入回 @eqnzvp 中，即可发现存在$A>0$使当$\sigma>1$时总有：
\[
{3\over\sigma-1}-{4\over\sigma-\beta_0}\ge-A\mathscr L
\]
现在设$\delta>0$，则代入$\sigma=1+\delta/\mathscr L$便得：
\[
{4\over\sigma-\beta_0}\le(A+3\delta^{-1})\mathscr L
\]
再通过移项，就有：
\[
\sigma-\beta_0\ge{4\over A+3\delta^{-1}}{1\over\mathscr L}
\]
现在再对两侧同时加上$1-\sigma$就有：
\[
1-\beta_0\ge{7-A\delta\over A+3\delta^{-1}}{1\over\mathscr L}
\]

现在选择足够小的$\delta>0$使右侧大于零就完成任务了。
:::

现在将这个结论与 @thzaxp 结合，
就可以用一个[[Borel–Carathéodory 定理|Borel–Carathéodory 定理的推论]]得到：

::: theorem {@thzbz}
存在$A>0$使得当$|t|\ge2$、$\sigma\ge1-A/\log|t|$时：
\[
{\zeta'\over\zeta}(s)=O(\log|t|)
\]
:::

利用这一点，我们就可以得到适用于$\log\zeta(s)$的上下界了：

::: theorem
存在$A>0$使得当$|t|\ge2$、$\sigma\ge1-A/\log|t|$时：

```math {@eqnlzz}
|\log\zeta(s)|\le\log\log|t|+O(1)
```

特别地，对两侧取指数可得：
\[
\zeta(s)=O(\log|t|)
\]
\[
{1\over\zeta(s)}=O(\log|t|)
\]
:::

::: proof
通过对 @thzbz 积分，可知当$\sigma_0>1\ge\sigma$时：
\[
\log\zeta(s)=\log\zeta(s_0)+\int_{\sigma_0}^\sigma{\zeta'\over\zeta}(u+it)\mathrm du
\]
对两侧取绝对值，便有：

```math
\begin{aligned}
    |\log\zeta(s)|
    &\le\log\zeta(\sigma_0)+O\{(\sigma_0-\sigma)\log|t|\} \\
    &\le\log{1\over\sigma_0-1}+O(1)+O\{(\sigma_0-\sigma)\log|t|\}
\end{aligned}
```

此刻设置$\sigma_0=1+1/\log|t|$则有$\sigma_0-\sigma\le(A+1)/\log|t|$，
因此上面的式子就可以简化成 @eqnlzz。
:::

## 应用

```terms
'Riemann $\zeta$ 函数':
  en: 'Riemann $\zeta$ function'
  de: 'Riemannsche $\zeta$-Funktion'
  fr: 'fonction $\zeta$ de Riemann'
```
