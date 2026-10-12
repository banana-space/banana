---
title: Lindemann–Weierstraß 定理
aliases: [Lindemann-Weierstraß 定理]
categories: [超越数论]
notices:
  - name: 问题
    items:
      - “推论”一节第一、三个推论的证明中所取的 $n$、$u$ 似乎应为所引定理中的 $r$、$v_1$（取 $r=1$）。
---

**Lindemann–Weierstraß 定理**
给出一个[[复数]]是[[超越数]]的充分条件。

1882年，[[Lindemann]] 证明了该定理最早的形式：
若$\alpha$是非零[[代数数]]，
则$\mathrm{e}^\alpha$是[[超越数]]。
后来 [[Weierstraß]] 在1885年将定理推广为了下面我们看到的形式。

这一类的定理，包括[[Schneider–Lang 定理]]和[[Baker 定理]]，
具有的一般形式被称为[[Schanuel 猜想]]。它们共同奠定了[[超越数论]]的基础。

## 定理与证明

### 定理描述

我们给出 Lindemann–Weierstraß 定理的两种等价的陈述，注意它们的区别：

::: theorem {@定理-1.1}
如果 $v_1, v_2, ..., v_r$ 是$\mathbb{Q}$
上线性无关的代数数，
那么 $\mathrm{e}^{v_1}, \mathrm{e}^{v_2}, ..., \mathrm{e}^{v_r}$ 在代数数域上代数无关。
:::

::: theorem {@定理-1.2}
如果 $u_1, u_2, ..., u_n$ 是两两不同的代数数，
那么 $\mathrm{e}^{u_1}, \mathrm{e}^{u_2}, ..., \mathrm{e}^{u_n}$ 在代数数域上线性无关。
:::

首先我们证明这两个陈述等价：

::: proof
假设 @定理-1.1 成立，
任给不同的代数数 $u_1,\cdots, u_n$，
取它们在 $\mathbb{Q}$ 上张成的[[向量空间]]的一组基 $v_1,\cdots,v_r$，
通过除以它们在线性组合表示$u_i$时出现的系数分母，
不妨设诸$u_i$都是$v_i$们的整系数线性组合。
现在$\mathrm{e}^{u_i}$们的（非平凡）线性相关式就是$\mathrm{e}^{v_i}$们的（非平凡）代数相关式。
因此 @定理-1.2 成立。

假设 @定理-1.2 成立，
任给线性无关的代数数 $v_1,\cdots,v_r$，
显然它们的（非平凡）代数相关的表达式可以写成
它们一系列两两不同整系数线性组合（对应幂次）$u_1,\cdots,u_n$
对应的指数$\mathrm{e}^{u_1},\cdots,\mathrm{e}^{u_n}$的（非平凡）线性相关式。
因此 @定理-1.1 成立。

综上，我们证明了两个定理的等价性。
:::

因为线性相关性比代数相关性更好处理，
我们将证明 @定理-1.2。

### 准备工作

下面的引理是证明中技巧性最强的一部分，巧妙地构造了多项式逼近。
同时也本质地用到了$\mathrm{e}^x$的[[Taylor 展开]]中系数的性质。

::: lemma {@引理-1.3}
设 $u_1,\cdots,u_n$ 均为整系数多项式
$f(x) =a_tx^t+\cdots+a_1x+a_0$ 的根，且$a_0\ne0$。
再记
\[
M:=\max_{i=1,\cdots,n}\left\{|u_i|,\ \sum_{k=0}^t |a_k||u_i|^k\right\}.
\]
现[[素数]] $p$ 足够大，具体来说满足：
\[
p > \max\{|a_0|, 2|u_1|, 2|u_2|, ..., 2|u_n|\}.
\]
则存在正整数 $N_p\not\equiv0\pmod p$，及次数严格小于 $tp$ 的整系数多项式 $g_p(x)$，
使得对诸$u_i$有理逼近

```math {@eq:1}
|N_p \mathrm{e}^{u_i} - pg_p(u_i)| < \frac{2M^p}{(p-1)!}
```

成立。
:::

::: proof
取
\[
\begin{aligned}
  s&:= tp+p-1,\\
  h(x)&:=x^{p-1} f(x)^p = \sum_{j=p-1}^s b_j x^j,\\
  N_p&:= \sum_{j=p-1}^s \frac{j!}{(p-1)!}\cdot b_j.
\end{aligned}
\]
显然 $N_p$ 是整数。
注意到 $p>|a_0|$ 且 $a_0 \neq 0$，故
$N_p \equiv b_{p-1} = a_0^p \equiv a_0 \pmod p$，故 $p$ 不整除 $N_p$。

对$j = p-1,\cdots ,s$，[[Taylor 展开]]指数函数得

```math {@eq:2}
j!\cdot b_j\cdot \mathrm{e}^x = \sum_{k=0}^{j-p} b_j \frac{j!x^k}{k!}
+ \sum_{k=j-p+1}^{j-1} b_j \frac{j!x^k}{k!}
+ b_j x^j \sum_{k=0}^{\infty} \frac{x^k j!}{(k+j)!}.
```

注意到第一个求和的每一项的系数都能被 $p!$ 整除，
所以第一个求和是一个整系数多项式的 $p!$ 倍。

现将 @eq:2 对 $j = p-1, p, \cdots, s$ 进行求和，
$k=0$到$j-p$的第一个求和对每个 $j$ 都是一个整系数多项式的 $p!$ 倍，
所以得到的结果也是，将其记为 $p!\cdot g_p(x)$。
而 $\deg g_p=tp-1$ 故次数符合要求。结合 $N_p$ 的定义我们得到：

```math {@eq:3}
(p-1)!\cdot N_p \mathrm{e}^x = \sum_{j=p-1}^s j!\cdot b_j \mathrm{e}^x
= p!g_p(x) + \sum_{j=p-1}^s \sum_{k=1}^{p-1} b_j \frac{j!x^{j-(p-k)}}{(j-(p-k))!}
+ \sum_{j=p-1}^s b_j x^j \sum_{k=0}^{\infty} \frac{x^k j!}{(k+j)!}.
```

注意到 $h(x)$ 在 $u_1,\cdots,u_n$ 处均有 $p$ 重零点，
故 $h(u_i) = h'(u_i) = \cdots = h^{(p-1)}(u_i) = 0$。
此外依$b_j$的定义有：
\[
h^{(k)} (x) = \sum_{j = p-1}^s b_j \frac{j!x^{j-k}}{(j-k)!}.
\]
该式对 $k=1,...,p-1$ 求和，即为 @eq:3 的第二个求和，
于是得到当 $x=u_1,\cdots,u_n$ 时，第二个求和为0。

现在我们来估计当 $x = u_i$ 时候 @eq:3 的第三项求和的大小，
因为$p>2|u_i|$以及对$h(x)$的两种写法用绝对值不等式：

\[
\begin{aligned}
  \left|\sum_{j=p-1}^s b_j x^j \sum_{k=0}^{\infty} \frac{x^k j!}{(k+j)!}\right|
  &\leq \sum_{j=p-1}^s |b_j| |x^j|  \left(1+\sum_{k=1}^{\infty} \left|\frac{x^k}{p^k}\right|\right)  \\
  &< 2\sum_{j=p-1}^s |b_j| |x|^j
  \leq 2|x|^{p-1}\left(\sum_{k=0}^t |a_k||x|^k\right)
  \leq 2M^p
\end{aligned}
\]

最后我们利用刚才得到的所有结果，立即得到 @eq:1。
:::

另一方面我们需要将条件能提供的指数和加工成更好的形式，
于是引入一个代数引理，它则用到了$\mathrm{e}^{x+y}=\mathrm{e}^x\mathrm{e}^y$：

::: lemma {@引理-1.4}
已知互不相同的代数数$u_1,\cdots,u_n$和非零的代数数$v_1,\cdots,v_n$使得
\[
\sum_{k=1}^n v_i \mathrm{e}^{u_i} = 0
\]
成立。设 $K$ 为所有 $u_i$ 在 $\mathbb{Q}$ 上的[[分裂域]]，
记$G=\operatorname{Gal}(K/\mathbb{Q})$。

那么存在整数$w_0,\cdots,w_m$和互不相同的代数数$q_1,\cdots,q_m$满足$w_0\ne0$且有

```math {@eq:4}
w_0 + \sum_{k=1}^m \left(w_k \sum_{\eta\in G} \mathrm{e}^{\eta(q_k)}\right)=0.
```

:::

::: proof
为方便描述，定义群 $K^+$ 是 $K$ 的加法群，
考虑[[群环]] $K[K^+]$，
首先我们证明它是一个[[整环]]。
考虑任意嵌入视$K^+$为$\mathbb C$的子集，定义其上按照先比较实部后比较虚部的[[字典序]]“$\ge$”，
其是全序且$a\ge b$推出$a+c\ge b+c$。
于是对 $\sum_{i=1}^{l}x_i y'_i,\sum_{j=1}^{m}z_j t'_j\in K[K^+]$ 均非零，
其中$y'_i,t'_j\in K^+$且$x_i,z_j$非零。
设 $y'_1>\cdots>y'_l,\ t'_1>\cdots>t'_m$，
则 $y'_1+t'_1$ 前的系数必不为$0$。

现在定义同态 $\phi:K[K^+]\to\mathbb{C}$为：
\[
\phi:\ K[K^+] \longrightarrow \mathbb{C}
\quad \phi\left(\sum_{i=1}^m x_i y'_i\right) = \sum_{i=1}^m x_i \mathrm{e}^{y_i}.
\]

则我们的条件等价于
\[
V := \sum_{k=1}^n v_i u'_i \in \ker(\phi).
\]

对于 $\eta\in G$，我们定义分别对$K,K^+$部分作用的两个环的自同构（不难验证）：
\[
\begin{aligned}
\sigma(\eta)&:\ K[K^+] \longrightarrow K[K^+]
\quad \sigma(\eta)\left(\sum_{i=1}^m x_i y'_i\right)
= \sum_{i=1}^m \eta(x_i) y'_i\\
\tau(\eta)&:\ K[K^+] \longrightarrow K[K^+]
\quad \tau(\eta)\left(\sum_{i=1}^m x_i y'_i\right)
= \sum_{i=1}^m x_i(\eta(y_i))'
\end{aligned}
\]

定义
\[
U := \prod_{\eta\in G} \sigma(\eta)\left(\sum_{i=1}^n v_i u'_i\right) \ne 0.
\]
因为 $V \in \ker(\phi)$ 故 $U \in \ker(\phi)$。
对 $\forall \eta \in G$，容易验证有$\sigma(\eta) U=U$。
进而写开 $U = \sum_{i=1}^m z_i t'_i$，
得知每个 $z_i$ 都是 Galois 群作用下不变的，所以这些 $z_i$ 都在 $\mathbb{Q}$ 中。

在此基础上定义
\[
W := \prod_{\eta\in G} \tau(\eta)\left(\sum_{i=1}^m z_i t'_i\right)\neq 0.
\]
类似地，我们知道 $W \in \ker(\phi)$，
且对 $\forall \eta \in G$，$\tau(\eta)W = W$。
写开 $W=\sum_{i=1}^l c_id'_i$，
我们注意到 $c_i$ 是一些有理数乘积的和，所以 $c_i \in \mathbb{Q}$。

因为 $\tau(\eta)W = W$，所以我们有

\[
\begin{aligned}
  W &=\frac{1}{|G|} \sum_{\eta\in G} \sum_{i=1}^l c_i (\eta(d_i))'
  = \sum_{i=1}^l  \frac{c_i}{|G|}\sum_{\eta\in G}(\eta(d_i))'.
\end{aligned}
\]

定义函数
\[
T(t') := \sum_{\eta\in G} (\eta(t))',
\]
则

```math {@eq:5}
W = \sum_{i=1}^l \frac{c_i}{|G|} T(d_i').
```

通过合并同类项不妨设$i\neq j$时 $T(d_i') \neq T(d_j')$，
这也意味着若 $i\neq j$，则 $\forall \eta \in G,
  \ \eta(d_i) \neq d_j$。
由 $W \neq 0$，我们当然也可设所有的系数均不为$0$。

现在对 $\forall s',t' \in K^+$，我们有显然的

\[
\begin{aligned}
  T(s') T(t') = \sum_{\eta\in G} (\eta(s))' \sum_{\eta'\in G} (\eta'(t))'
   = \sum_{\eta\in G} T(s'+\eta(t)').
\end{aligned}
\]

利用该等式，对 @eq:5 乘以 $T(-d_1')$（为了获得 @eq:4 中的 $w_0$），
并依定义展开，再通过乘一个整数将系数变为整数，我们就得到了符合 @eq:4 要求的形式。
:::

### 定理证明

::: proof [@定理-1.2 的证明]
反设存在不全为$0$的代数数 $v_1,\cdots,v_n$ 使得
\[
\sum_{k=1}^n v_i \mathrm{e}^{u_i} = 0
\]
成立。利用 @引理-1.4，在相同的记号下，我们得到
\[
\begin{aligned}
  w_0 + \sum_{k=1}^m \left(w_k \sum_{\eta\in G} \mathrm{e}^{\eta(q_k)}\right)=0.
\end{aligned}
\]

取 $f(x)$ 为 $q_1,\cdots,q_m$ 的最小多项式的乘积，
对 $f(x)$ 及 $\eta(q_i)(i=1,\cdots,m,\ \eta\in G)$ 应用 @引理-1.3，
我们得到引理中所说的 $g_p(x)$ 及 $N_p$。
设 $f(x)$ 的次数为 $t$，由于诸$\eta({q_i})$均为代数数，
故存在正整数 $k$，使得它们与$k$的乘积均为[[代数整数]]。我们有
\[
k^{tp}N_p\cdot w_0 + k^{tp} \sum_{i=1}^m \left(w_i \sum_{j=1}^r N_p \mathrm{e}^{\eta_j(q_i)}\right) = 0
\]

于是

\[
\begin{aligned}
  \left| k^{tp}N_p\cdot w_0 + p \sum_{i=1}^m \left(w_i\sum_{\eta\in G} k^{tp}\cdot  g_p(\eta(q_i))\right)\right|
  & = \left|(k^{tp}N_p w_0 - k^{tp}N_p w_0)
  + k^{tp} \sum_{i=1}^m \left(w_i\sum_{\eta\in G} \left(p g_p(\eta(q_i)) - N_p \mathrm{e}^{\eta(q_i)}\right)\right)\right|  \\
  & \leq k^{tp} \sum_{i=1}^m
  \left(|w_i| \sum_{\eta\in G} \frac{2M^p}{(p-1)!}\right)  =\frac{2k^{tp}m|G|LM^p}{(p-1)!}.
\end{aligned}
\]

其中 $M$ 同 @引理-1.3 中的定义，$L$ 是 $|w_i|(i=0,...,m)$ 的上界。
注意到当 $p$ 趋向无穷大时右式趋向于 $0$，故左式只能是 $0$。
注意到左式有两项，当 $p$ 大于 $k$ 和 $|w_0|$时，第一项是不能被 $p$ 整除的整数，
第二项$p$所乘者一方面在全体$\eta\in G$作用下不变，另一方面是代数整数，从而是一个整数。
这推出第二项是$p$的倍数矛盾！
至此，我们完成了定理的证明。
:::

## 推论

::: corollary
对任意非零[[代数数]] $x$，
$\mathrm{e}^x$ 是[[超越数]]，特别地，[[$\mathrm{e}$]] 是超越数。
:::

::: proof
在 @定理-1.1 中取 $n=1$ 并令 $u=x$。
:::

::: corollary
对任意非零[[代数数]] $x$，任意[[三角函数]] $f$，
$f(x)$ 是[[超越数]]。
:::

::: proof
注意到三角函数 $f(x)$ 都可以表示为 $\mathrm{e}^{\mathrm{i}x}$ 的分式。
:::

::: corollary
如 $\mathrm{e}^x$ 为不为 $1$ 的代数数，则 $x$ 为超越数。
特别地，[[$\pi$]] 是超越数。
:::

::: proof
前一个结论由反证法立得，
在 @定理-1.1 中取 $n=1$ 并令 $u=\mathrm{i}\pi$，
再注意到 $\mathrm{i}$ 是代数数，所以 $\pi$ 必然为超越数。
:::

```terms
Lindemann–Weierstraß 定理:
  en: Lindemann–Weierstraß theorem
  de: Satz von Lindemann–Weierstraß
  fr: théorème de Lindemann–Weierstraß
```
