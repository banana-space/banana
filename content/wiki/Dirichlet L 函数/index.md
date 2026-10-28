---
title: Dirichlet $L$ 函数
categories: [解析数论, 特殊函数]
---

<problems>
- “零点”“应用”各节需要扩充。
- “现代证明”一节的证明中，$\prod_p\sum_{k=1}^\infty\binom{g(p)+k-1}{k}p^{-kf(p)s}$ 的求和似乎应从 $k=0$ 开始。
</problems>

**Dirichlet $L$ 函数**是对
[[Riemann $\zeta$ 函数]]的微小修改
（@def-l-fun），
使得其可记录[[素数]]的[[同余]]信息（@prime-prod），
以研究具有给定同余条件的素数分布。

## 定义

::: definition {@def-l-fun}
**Dirichlet $L$ 函数**是在区域
$\Re(s) > 1$ 上[[绝对收敛]]级数
\[
L(s,\chi) =  \sum_{n = 1}^{\infty} \frac{\chi(n)}{n^s}
\]
在 $\mathbb{C}$ 上的[[解析延拓]]，
是 $\mathbb{C}$ 上的[[亚纯函数]]。
其中 $\chi \colon \mathbb{N} \to \mathbb{C}$ 是
[[Dirichlet 特征]]。
:::

::: remark
对非主特征，通过[[Dirichlet 判别法]]，
可以显式地看出它在 $\Re(s)>0$ 上[[全纯函数|全纯]]。
:::

## 性质

### 解析延拓与函数方程

::: proposition [解析延拓]
设 $\chi$ 是 Dirichlet 特征。那么 $L(s, \chi)$
可延拓为 $\mathbb{C}$ 上的亚纯函数。若 $\chi$
为主特征则它只在 $s=1$ 处有极点，为一重，否则它全纯。
:::

::: proposition [函数方程]
设 $\chi$ 是本原 Dirichlet 特征，导子为 $q$，
设 $a \in \{0,1\}$ 满足 $(-1)^a = \chi(-1)$。
定义完备化 $L$ 函数
\[
\Lambda(s, \chi) = \left(\frac{q}{\pi}\right)^{(s+a)/2}
\Gamma\left(\frac{s+a}{2}\right) L(s, \chi),
\]
根数
\[
w(\chi) = \frac{i^a\sqrt{q}}{\tau(\chi)},
\]
其中 $\tau(\chi)$ 为 [[Gauß 和]]。
那么 $\Lambda(s, \chi)$ 满足函数方程
\[
\Lambda(1-s, \bar\chi) = w(\chi)\Lambda(s, \chi).
\]
:::

### 其它形式

::: proposition [Euler 乘积式] {@prime-prod}
Dirichlet $L$ 函数可表示为无限乘积
\[
\prod_p \frac{1}{1 - \chi(p)p^{-s}}.
\]
其中 $p$ 取遍所有素数。
:::

::: proof
这是因为 $\chi$ 是[[积性函数]]。
:::

### 零点

通过函数的乘积形式可以看出，主特征只和
[[Riemann $\zeta$ 函数]]差了有限项乘积，
由此零点分布情况与 Riemann $\zeta$ 函数几乎相同
（只是 $s = 0$ 处会有几重零点）。

关于非主特征的关键结论是：

::: proposition {@L1-nonzero}
对模 $d$ 的非主特征 $\chi$，$L(1, \chi)\ne0$。
:::

#### 现代证明

以下命题是 [[Dirichlet 级数]]的性质。

::: proposition {@实奇点}
设 $F(s)=\sum_{n=1}^\infty a_ne^{-\lambda_ns}$
是非负 Dirichlet 级数，即数列 $\lambda_n$
单调趋于正无穷且各个 $a_n$ 为非负实数。设其收敛半平面为
$\Re(s)>\sigma$，$\sigma\in\mathbb{R}$。则 $F(s)$ 作为
$\Re(s)>\sigma$ 上全纯函数不能解析延拓至 $\sigma$。
:::

::: proof
平移可设 $\sigma=0$。去掉前有限项可设各 $\lambda_n$ 非负。
把 $F$ 在 $1$ 处 [[Taylor 展开]]，由内闭一致绝对收敛有
$$
F(1-z)=\sum_{n=1}^\infty a_ne^{-\lambda_n(1-z)}=
\sum_{n=1}^\infty a_ne^{-\lambda_n}
\sum_{k=0}^\infty\frac{(\lambda_nz)^k}{k!}
=\sum_{k=0}^\infty\left(\sum_{n=1}^\infty
a_ne^{-\lambda_n}\frac{\lambda_n^k}{k!}\right)z^k.
$$
如 $F(s)$ 能解析延拓至 $0$，则此级数的收敛半径将大于 $1$。
取 $\varepsilon>0$ 使得 $1+\varepsilon$ 小于其收敛半径，
代入 $z=1+\varepsilon$ 有
$$
F(-\varepsilon)=\sum_{k=0}^\infty
\left(\sum_{n=1}^\infty a_ne^{-\lambda_n}
\frac{\lambda_n^k}{k!}\right)(1+\varepsilon)^k.
$$
注意上式右边每一项都非负，故可任意重排，于是
$$
F(-\varepsilon)=\sum_{n=1}^\infty a_ne^{-\lambda_n}
\sum_{k=0}^\infty\frac{(\lambda_n(1+\varepsilon))^k}
{k!}=\sum_{n=1}^\infty a_ne^{\lambda_n\varepsilon};
$$
特别地，$F(s)=\sum_{n=1}^\infty a_ne^{-\lambda_ns}$
在 $s=-\varepsilon$ 收敛，和条件矛盾！故 $F(s)$
不能解析延拓至 $0$。
:::

现在证明 @L1-nonzero。

::: proof [@L1-nonzero 的证明]
用反证法。如对某个非主特征 $\chi$ 有 $L(1,\chi)=0$，
则 $F(s)=\prod_\chi L(s,\chi)$ 在 $\Re(s)>0$ 全纯，
因为主特征在 $1$ 处的一阶极点被某个非主特征的零点消去。
现对与模数 $d$ 互素的 $a$，以 $f(a)$ 记 $a$ 在群
$(\mathbb{Z}/d)^\times$ 中的阶，以 $g(a)$ 记
$\frac{\varphi(d)}{f(a)}$，对不与 $d$ 互素的 $a$ 约定
$f(a)=g(a)=0$。则
$$
F(s)=\prod_{p,\chi}\frac{1}{1-\chi(p)p^{-s}}
=\prod_{p}\frac{1}{(1-p^{-f(p)s})^{g(p)}}=
\prod_p\sum_{k=1}^\infty\binom{g(p)+k-1}{k}p^{-kf(p)s}
=\sum_{n=1}^\infty a_nn^{-s}
$$
为非负 Dirichlet 级数。于是由 @实奇点，
$F(s)$ 的收敛半平面至少为 $\Re(s)>0$。然而由
$f(p)\le\varphi(d)$ 不难发现以上和式在
$s=\frac{1}{\varphi(d)}$ 时为无穷，矛盾！
故对每个非主特征 $\chi$ 都有 $L(1,\chi)\ne0$。
:::

#### Dirichlet 的原始证明

我们首先证明如下引理，其中 $\chi$ 取遍模 $d$ 的所有 Dirichlet 特征。

::: lemma {@lem-prod}
对实数$s>1$，有
\[
\prod_\chi L(s,\chi)\in [1,+\infty)\subset\mathbb R.
\]
:::

::: proof
我们进行计算，因为内闭绝对一致收敛，我们自由地交换求和号：
\[
\begin{aligned}
  \log\prod_{\chi}L(s,\chi)&=-\sum_\chi\sum_p\log(1-\chi(p)p^{-s})\\
  &=\sum_p\sum_{k=1}^\infty\sum_\chi\frac1k\frac{\chi(p^k)}{p^{ks}}\\
  &=\sum_p\sum_{k=1}^\infty\frac{\varphi(d)\delta_1(p^k)}{k\cdot p^{ks}}\ge0
\end{aligned}
\]
最后一个等号只需注意对一切特征$\chi$有$\chi(1)=1$。
:::

::: proof [@L1-nonzero 的另一证明]
分为两类讨论，首先看$\chi$是非实特征的情形。

此时$\chi\ne\overline\chi$。若 $L(1,\chi)=0$，则
$L(1,\chi)=L(1,\overline\chi)=0$。
由于 $\chi$ 为主特征时 $1$ 为一重极点，
$\chi$ 为非主特征时 $L(s, \chi)$ 在 $\Re(s) > 0$ 处全纯，
\[
\prod_\chi L(s,\chi)\le\frac{C_3}{|s-1|}|s-1|^2\to0,\ s\to1^+
\]
这与 @lem-prod 中乘积不小于 $1$ 相矛盾。

其次是$\chi$是实特征的情形，这稍有些麻烦，首先我们对实数$N>1$定义
\[
S_N:=\sum_{1\le mn\le N}\frac{\chi(n)}{\sqrt{mn}}.
\]
我们用两种方式来估计它，一方面我们沿$mn=k$求和，此时
\[
\sum_{mn=k}\frac{\chi(n)}{\sqrt{mn}}=\frac1{\sqrt k}\sum_{n|k}\chi(n).
\]
因为实特征只取$0,\pm1$，容易证明若$k$为平方数，$\sum_{n|k}\chi(n)\ge 1$，
一般的正整数$k$，也总有$\sum_{n|k}\chi(n)\ge0$。
这是因为这个求和关于$k$的积性，
拆成素数幂后每项无非是$1+1+\cdots+1$或者$1+(-1)+1+(-1)+\cdots$的形式。
平方数保证求和的项数是奇数，两种情况下都至少取$1$。这样得到
\[
S_N\ge\sum_{1\le j\le\sqrt N}\frac 1j= \frac12\log N+O(1).
\]
另一方面，我们将$mn\le N$在第一象限的部分分成两个区域：
\[
S_1=\left\{n>\sqrt N, n\le \frac Nm\right\},\ S_2=\left\{n\le\sqrt N,m\le \frac Nn\right\}.
\]
于是
\[
S_N=\sum_{S_1}+\sum_{S_2}=\sum_{m\le\sqrt N}\frac1{\sqrt m}\left( \sum_{\sqrt N<n\le N/m}\frac{\chi(n)}{\sqrt n} \right)+\sum_{n\le\sqrt N}\frac{\chi(n)}{\sqrt n}\left( \sum_{m\le N/n}\frac1{\sqrt m} \right).
\]
我们指出阶的估计，对$1\le R\le S$
\[
\begin{aligned}
  &\sum_{m\le N}\frac1{\sqrt m}=2\sqrt N+c+O\left( \frac 1{\sqrt N} \right),\\
  &\sum_{n=R}^S\frac{\chi(n)}{\sqrt n}=O\left( \frac1{\sqrt R} \right),\\
  &\sum_{n=R}^S\frac{\chi(n)}n=O\left( \frac1R \right).
\end{aligned}
\]
第一个估计是数学分析中的简单技巧，第二和第三个则是借助$\chi(n)$的部分和有限，由[[Abel 公式]]得到的。
将它们代入$S_N$的计算，我们得到
\[
\begin{aligned}
  \sum_{S_1}&=O\left( N^{1/4}N^{-1/4} \right)=O(1),\\
  \sum_{S_2}&=\sum_{n\le\sqrt N}\frac{\chi(n)}{\sqrt n}\left( 2\sqrt{\frac Nn}+c+O\left(\sqrt{\frac nN}\right) \right)\\
  &=2\sqrt N\cdot L(1,\chi)+O(1).
\end{aligned}
\]
因此若$L(1,\chi)=0$则导致$O(1)\ge \frac12\log N+O(1)$的矛盾，从而结论得证。
:::

## 应用

<see>[[Dirichlet 素数定理]]</see>

```terms
Dirichlet $L$ 函数:
  en: Dirichlet $L$ function
  de: dirichletsche $L$-Funktion
  fr: fonction $L$ de Dirichlet
```
