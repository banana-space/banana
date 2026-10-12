---
title: 调和函数
categories: [实分析]
---

**调和函数**是被 [[Laplace 算子]]零化的函数。
它满足平均值性质、实解析性等性质。

## 定义

::: definition
对$\mathbb{R}^n$中非空开集$\Omega$上复值二阶连续可微的函数$u$，
如 $u$ 满足
\[
\Delta u := \sum^{n}_{i=1}\frac{\partial ^2}{\partial x^2_i}u =0，
\]
则称 $u$ 为**调和函数**。
这里 $\Delta$ 即是 [[Laplace 算子]]。
:::

以下$\Omega$均默认为一个$\mathbb{R}^n$中的非空开集。
$B(a,r)$指以$a$为中心、$r$为半径的开球，$S(a,r)$指以$a$为中心、$r$为半径的球面，
$B$代表$B(0,1)$，$S$代表$S(0,1)$。
${\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}$
表示平均积分，$S_n$表示$\mathbb{R}^n$中单位球面面积。

## 例子

- 对$n=2$，$\mathbb{C}$上全纯函数及其实部与虚部看作关于$(x,y)$的函数$(z=x+iy)$调和，
  如$u(x,y)=\Re\log z=\log|z|$。

- 对$n\geq3$，$u(x)=|x|^{2-n}$调和。

- 由之后证明的调和函数的光滑性，
  调和函数的各个偏导数也调和。

## 性质

### 平均值性质

::: proposition [平均值性质]
- 若$u$在$B(a,r)$调和，在$\bar{B}(a,r)$连续，则
  $u(a)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S(a,r)}u dS$。

- 若$u$在$B(a,r)$调和，在$\bar{B}(a,r)$连续，则
  $u(a)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{B(a,r)}u dV$。

- 对$u\in C(\Omega)$，
  若对每个$x\in\Omega$都存在一列$r_i\rightarrow0$
  使
  $u(x)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S(x,r_i)}u dS$，
  则$u$在$\Omega$调和。

- 对$u\in C(\Omega)$，
  若对每个$x\in\Omega$都存在一列$r_i\rightarrow0$
  使
  $u(x)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{B(x,r_i)}u dV$，
  则$u$在$\Omega$调和。

:::

::: proof
首先证明前两个命题。
注意到右式为
$\phi(r)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S}u(a+r\zeta)dS$，
则由 [[Green 公式]]，
\[
\phi'(r)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S}\nabla u(a+r\zeta)\cdot\zeta dS=\frac{1}{S_n}\int_{S(a,r)} \frac{\partial u} {\partial \nu}dS=\frac{1}{S_n}\int_{B(a,r)}\Delta udV=0，
\]
于是$\phi(r)$为常数。
则 $\phi(r) = \lim_{r\rightarrow0}\phi(r)=u(a)$，
则第一个命题成立。
由$dV=r^{n-1}drdS$ 可知第二个命题成立。

之后证明后两个命题，
不妨$u$实值，且只需证命题对$\bar{B}(a,r)\subset\Omega$成立。
由 [Poisson 积分](@Poisson-积分)，
存在与$u$在$S(a,r)$相等的$\bar{B}(a,r)$上的调和函数$v$，断言$u=v$。
否则设$u-v$在闭集$K\subset B(a,r)$上取最大值$M>0$，
则对$K$的离$a$最远的$x$和很小的$r_i$（使$\bar{B}(x,r_i)\subset\bar{B}(a,r)$）有
\[
(u-v)(x)=M> {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S(x,r_i)}(u-v) dS.
\]
则第三个命题成立。最后一个命题的证明同理可得。
:::

### 最大模原理

::: proposition [最大模原理]
- $u$是连通$\Omega$上的调和函数，若$|u|$在$\Omega$取到最大值，则$u$为常数。

- $u$是$\Omega$上的实值调和函数，
  若对每个趋于$\partial\Omega$的一点或$\infty$的序列$\left\{a_n\right\}$
  有$\limsup_{n\rightarrow\infty}u(a_n)\leq M$，则$u\leq M$。

:::

::: proof
设$|u|$在一点取得最大值$M$，通过把$u$换成$\lambda u$（$|\lambda|=1$）可设$u$在该点等于$M$。
考察$U=\left\{x\mid \Re u(x)=M\right\}$。

由平均值性质知$U$是开集，又由$U$闭得$U=\Omega$，故$u$在整个$\Omega$取值为$M$。

对第二个命题，设一列$\left\{u(a_n)\right\}$趋于$M'=\sup_\Omega u$，需证$M'\leq M$。

若存在$\left\{a_n\right\}$的子列收敛于某点$a\in\Omega$，则$u(a)=M'$，由第一个命题，
$a$所在的连通分支上$u\equiv M'$，于是$M'\leq M$。

若这样的子列不存在，则$\left\{a_n\right\}$有子列趋于$\partial\Omega$的一点或$\infty$，
那么也得到$M'\leq M$。
:::

::: remark
把$u$换作$-u$，就得到相应的最小模原理。
:::

### 存在唯一性

::: definition {@Poisson-积分}
$f\in C(S)$ 的 Poisson 积分为
\[
P[f]= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _S f(\zeta)\frac{1-|x|^2}{|x-\zeta|^n}dS(\zeta).
\]
$P(x,\zeta)=\frac{1-|x|^2}{|x-\zeta|^n}$称为Poisson核。
:::

::: lemma
$P(\ \cdot\ ,\zeta)$在$\mathbb{R}^n-\left \{\zeta\right \}$调和，
且
${\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}}_{S}P(x,\zeta)dS(\zeta)=1.$
:::

::: proof
直接计算得$P(\ \cdot\ ,\zeta)$调和，且
\[
{\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S}P(x,\zeta)dS(\zeta)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _{S}P(|x|\zeta,\frac{x}{|x|})dS(\zeta)=P(0,\frac{x}{|x|})=1.
\]
第一个等号是由于$(x,\zeta)$与$(|x|\zeta,\frac{x}{|x|})$轴对称，
第二个等号由于$P(\ \cdot\ ,\zeta)$的平均值性质。
:::

::: proposition [存在唯一性] {@thm:存在唯一性}
对函数 $f \in C(S)$，$P[f]$ 是唯一的 $\bar{B}$ 上连续函数，
使得 $P[f]$ 在 $S$ 上限制为 $f$，且 $P[f]$ 在 $B$ 上调和。
:::

::: proof
由$P(\ \cdot\ ,\zeta)$调和得$P[f]$调和，且对$y\in S$和接近于$y$的$x\in B$，

\[
|f(x)-f(y)|=| {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _S (f(\zeta)-f(y))P(x,\zeta)dS(\zeta)|
\\
\leq\frac{1}{S_n}\left(\int_{|\zeta-y|<\delta} |f(\zeta)-f(y)|P(x,\zeta)dS(\zeta) + \int_{|\zeta-y|\geq\delta}|f(\zeta)-f(y)|P(x,\zeta)dS(\zeta)\right)
\\
\leq\frac{1}{S_n}\left(\sup_{|\zeta-y|<\delta}|f(\zeta)-f(y)|+2\max_S |f| \int_{|\zeta-y|\geq\delta}P(x,\zeta)dS(\zeta)\right).
\]
先让$\delta$充分小，再令$x$趋近于$y$使$P(x,\zeta)$一致趋于$0$，就得到上式充分小。
:::

### 正则性

调和函数必为实解析函数。

::: proposition
$\Omega$上调和函数实解析。
:::

::: proof
只需对$\bar{B}$上的调和函数$u$证明即可。
注意到
$u(x)= {\mathchoice{{-\mkern -19mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}{{-\mkern -16mu\int}}} _S u(\zeta)P(x,\zeta)dS(\zeta)$，
并验证$P(\ \cdot\ ,\zeta)$实解析。
:::

::: corollary
连通$\Omega$上调和函数$u$若在一非空开集上为0，则在整个$\Omega$为0。
:::

::: proof
事实上，命题对于实解析函数$f$成立。令$U$为$f$的零点集的内部，由条件$U$非空。
由$f$的各阶导数的连续性得$U$闭，又由$U$开得$U=\Omega$。
:::

下面的命题表明如调和函数在一点处增长不会太快，
则它可以延拓至此点。

::: proposition
- 对$n\geq3$，
  $\Omega-\left \{a\right \}\subset \mathbb{R}^n$
  上的调和函数$u$若满足
  当$x\to a$ 有 $u=o(|x-a|^{2-n})$，
  则 $u$ 可延拓为 $\Omega$ 上的调和函数。

- $n=2$，$\Omega-\left \{a\right \}\subset \mathbb{R}^2$上的调和函数$u$若满足
  当$x\to a$有$u=o(\log|x-a|)$，
  则 $u$ 可延拓为 $\Omega$ 上的调和函数。

:::

::: proof
不妨$u$实值，且只需对$\bar{B}-\left \{0\right \}$上满足条件的$u$证明即可。

当$n\geq3$，构造$\bar{B}-\left \{0\right \}$上的调和函数
\[
v_\epsilon(x)=u(x)-P[u|_S](x)+\epsilon(|x|^{2-n}-1)(\epsilon>0)，
\]
则当$|x|\rightarrow1$，$v_\epsilon(x)\rightarrow0$，
又由条件当$x\rightarrow0$，$v_\epsilon(x)\rightarrow+\infty$。

由最小模原理，$v_\epsilon\geq0$。
令$\epsilon\rightarrow0$即得
\[
u(x)-P[u|_S](x)=\lim_{\epsilon\rightarrow0}v_\epsilon(x)\geq0，
\]
再用$-u$代替$u$得到反向的不等式。
因此$u$是$\bar{B}$上的调和函数$P[u|_S]$的限制。

$n=2$时将$v_\epsilon$中的$|x|^{2-n}-1$换成$-\log|x|$即可。
:::

## 参考文献

```bibliography
sheldon-axler:
  type: book
  label: Sheldon–Axler 2001
  author: [Sheldon Axler, Paul Bourdon, Wade Ramey]
  year: 2001
  title: Harmonic Function Theory
  series: Graduate Texts in Mathematics
  number: 137
  publisher: Springer
```

```terms
调和函数:
  en: harmonic function
  de: harmonische Funktion
  fr: fonction harmonique
  grc: ἁρμονικὴ συνάρτησις
  la: functio harmonica
```
