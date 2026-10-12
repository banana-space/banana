---
title: Coppel 定理
categories: [动力系统]
notices:
  - name: 问题
    items:
      - “推论”一节最后一个定理的证明中，$a_0$ 的选取条件“$x\in[p,b_0]$ 时 $f(x)>a_0$”似乎应为 $x\in[p_*,b_0]$，后面的归纳用到的是这一情形。
---

::: convention
在本文中，

- $f^n$均指代$\underbrace{f\circ\cdots\circ f}_{n\text{个}f}$，即$f$迭代$n$次。

:::

**Coppel 定理**是William Andrew Coppel在1955年发表的论文 [@co55] 中提出的一个
关于[[连续]][[映射]]迭代的定理。其声称对于[[闭集|闭]][[区间]]到自身的连续映射不断迭代，
二者中有且仅有一者成立：逐点[[收敛]]或存在$2$-周期点。

## 描述

::: definition
给定映射$f:X\to X$及$x_0\in X$。
若使得$f^k(x_0)=x_0$成立的最小正整数$k=m$，
则称$x_0$是$f$的一个 **$m$-周期点**。
$m=1$的特殊情形称 **[[不动点]]**。
:::

::: theorem [Coppel] {@thm:coppel}
连续映射$f:[a,b]\to[a,b]$要么存在$2$-周期点；
要么对每个初值$x_0\in[a,b]$，极限$\lim_{n\to\infty}f^n(x_0)$存在。
:::

## 定理证明

我们遵循Coppel的原始论证方法。首先需要一个引理。

::: lemma {@lem:sign}
设连续映射$f:[a,b]\to[a,b]$没有$2$-周期点，则对一切$c\in[a,b]$和正整数$n$，
$f(c)$ 和 $c$的大小关系决定了
$f^n(c)$ 和 $c$的大小关系。
:::

::: proof
使用归纳法，命题对$n=1$显然成立，下面假设$n>1$。
假设$f^n(c)<c,f(c)>c$。由$f^n(a)\ge a$介值得到存在$d\in[a,c)$使$f^n(d)=d$，
而且$f^n(x)<x$对$x\in(d,c]$，此时$f(d)=d$。
倘若$x\in(d,c)$使$f(x)=x$则导致$f^n(x)=x$而与$d$的定义矛盾，
因此$f(x)>x$对$x\in(d,c)$成立。由归纳假设$f^{n-1}(x)>x>d$对$x\in(d,c)$。
由连续性取$e\in(d,c)$足够靠近$d$使$d<e<f^{n-1}(e)<c$，则$f^n(e)=f(f^{n-1}(e))>f^{n-1}(e)>e$矛盾！
对$f^n(c)>c, f(c)<c$的情况讨论也是类似的。

假设$f^n(c)=c$且$f(c)>c$，其中$n\ge3$。
根据归纳假设$d=f^{n-1}(c)>c$。
假设$d=f^{n-2}(f(c))\ge f(c)$则$f(f(c))\ge f(c)$，因此$c=f^{n-1}(f(c))\ge f(c)$矛盾。
从而$f(d)=c<d<f(c)$，故由连续性存在最小的$e\in(c,d)$使得$f(e)=d$，这样$f(x)>d>e$对$x\in[c,e)$。
从而$f^2(e)=f(d)=c<e$但$f^2(c)>c$，说明存在$x\in(c,e)$使$f^2(x)=x$，这导致$f(x)=x<e$而矛盾！
对$f^n(c)=c, f(c)<c$的情况讨论也是类似的。
:::

::: remark
如果使用[[Sharkovskii 序]]，那么根据$2\prec n$可知$f$没有任何（非不动点的）周期点，
那么上面证明的第一段可直接推出所需结论。
不过原论文发表的时间比Sharkovskii 序更早，并且没有使用更多技巧，因此对原证明来说，
只需将$2\prec n$一并加入归纳假设，然后加入第二段的论证即可。
:::

::: proof [@thm:coppel 的证明]
假设$f$有一个不收敛的迭代列$x_n=f^n(x_0)$，我们证明$f$有$2$-周期点，用反证法。
显然$x_{n+1}\ne x_n$对一切$n$否则某项后全是$x_n$，
又结合[[单调有界收敛]]，我们得知$x_{n+1}>x_n,x_{n+1}<x_n$均对无穷多个$n$成立。

现考虑$f(x_p)>x_p$，由 @lem:sign，没有$2$-周期点则$x_n>x_p$对一切$n>p$。
因此满足$f(x_p)>x_p$的$x_p$构成的子序列单调增，收敛到$l=\liminf x_n$。
同理对$f(x_q)<x_q$者，$x_q$构成的子序列单调减，收敛到$k=\limsup x_n$。
但是注意到$\{x_p\},\{x_q\}$两个子序列构成$\{x_n\}$的一个[[分划]]，
因此我们存在无穷多个$n$使得$f(x_n)>x_n, f(x_{n+1})<x_n$，也有无穷多的$n$反过来。
对它们取极限得到$k=f(l),l=f(k)$，结合没有$2$-周期点得知$k=l$而与序列不收敛矛盾！定理得证。
:::

## 推论

::: example
一个不大平凡的例子是$[a,b]=[0,1],f(x)=x(3x-2)^2$。
最后有一串趋于$1$的点有限次内迭代到$0$，而$1$始终映为$1$。除此之外其余者的极限都是稳定的$1/3$。
:::

接下来我们提炼上述证明中出现的一些特征，作如下定义。

::: definition
如果一个映射的周期点只有不动点，则称$f$是**无环的**。
:::

::: definition
$f$是$\mathbb R$子集$S$到自身的函数，若任意$x\in S$都满足：
$f^n(x)$收敛，且$f(x)$ 和 $x$的大小关系决定了 $f^n(x)$ 和 $x$的大小关系。
则称$f$是**恰当收敛**的。
:::

有了这些定义，我们叙述更强的推论，这帮助我们将结论推广到无限[[区间]]上。

::: corollary
区间$I\subset\mathbb R$上的连续函数$g:I\to\mathbb R$是无环的，
紧集$\Lambda\subset I$满足$g(\Lambda)\subset\Lambda$。
则$g|_\Lambda$是恰当收敛的。
:::

::: proof
假设$\Lambda$的[[凸包]]为$[a,b]\subset I$。我们定义
\[
\begin{aligned}
  h:[a,b]\to[a,b],\ h(x)=\begin{cases}a,&g(x)\le a;\\ g(x),& g(x)\in[a,b];\\ b,& g(x)\ge b.\end{cases}
\end{aligned}
\]
由$g$无环简单讨论推出$h$是无环的，Coppel 定理推出$h$是恰当收敛的。
然后注意$h|_\Lambda=g|_\Lambda$而得证。
:::

::: corollary
区间$I\subset\mathbb R$。若连续映射$f:I\to I$迭代逐点收敛则其必然是恰当收敛的。
:::

::: proof
任意$x\in I$，对$\{f^n(x)\}$的[[闭包]]使用前述推论可得。
:::

下面的定理则是一个著名的应用，
是H. Thieme的一个收敛定理的推广，
原始的版本是$p=p_*$的情况。

::: theorem
连续$f:\mathbb R^+\to\mathbb R^+$无环，而且存在两个不动点$p_*\le p$满足：
$f|_{(0,p_*]}$有界；$x<p_*$时$f(x)>x$；$x>p$时$f(x)<x$，则$f$是恰当收敛的。
:::

::: proof
由题意，存在$a,b\in\mathbb R^+$使得
\[
\begin{aligned}
  \begin{matrix}
    b=\sup\{f(x):x\le p\},&p\le b<+\infty,\\
    a=\inf\{f(x):p_*\le x\le b\},&0<a\le p_*.
  \end{matrix}
\end{aligned}
\]
于是对任意$x\in\mathbb R^+$，$\limsup f^n(x)\le b$。
接下来我们证明对任意$x\in\mathbb R^+$，$\liminf f^n(x)\ge a$。
倘若这点已经得证，我们注意到$\{f^n(x)\}$的闭包
$\Lambda$是紧集且满足$f(\Lambda)\subset\Lambda$，
于是由先前推论即可证明定理。

现在对任意$\varepsilon>0$，取$a_0\in[a-\varepsilon,a),b_0\in[b,b+\varepsilon)$
使$x\in[p,b_0]$时$f(x)>a_0$，现在只需证明对任意$x$有$\liminf f^n(x)\ge a_0$。
现不妨假设$f^n(x)\le b_0$，若$x$的迭代值始终不小于$a_0$则已经证明，
否则可设$x<a_0$作为初值，进一步由$x<p_*$的递增性不妨设对某$r$有$f^r(x)\ge p_*$，
否则这将是一个单调增的序列而显然符合题意。
我们指出对任意非负整数$k$有$f^{r+k}(x)\ge a_0$：
使用归纳法，奠基显然。若$f^{r+k}(x)\ge p_*$则$f^{r+k}(x)\in[p_*,b_0]$，
于是$f^{r+k+1}(x)\ge a_0$。
若$f^{r+k}(x)< p_*$，有$f^{r+k+1}(x)>f^{r+k}(x)\ge a_0$，结论得证。
:::

## 参考文献

```bibliography
co55:
  type: article
  label: Co55
  author: W. A. Coppel
  year: 1955
  title: The solution of equations by iteration
  journaltitle: Proc. Cambridge Philos. Soc.
  volume: 51
  pages: 41–43
```

```terms
Coppel 定理:
  en: Coppel's theorem
  de: Satz von Coppel
  fr: théorème de Coppel
```
