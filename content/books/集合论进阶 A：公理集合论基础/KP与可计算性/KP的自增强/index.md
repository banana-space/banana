---
title: KP的自增强
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
KP的自增强并不按我们之前引入的Levy对句子复杂度的分层来。

::: definition
我们考虑以下两类公式。

1. 如果$\varphi$是无量词公式$\psi$前面附加有穷多个受限量词和存在量词所得，则称它是一个$\Sigma$公式。

2. 如果$\varphi$是无量词公式$\psi$前面附加有穷多个受限量词和任意量词所得，则称它是一个$\Pi$公式。

3. 如果理论$T$可证$\varphi$同时等价于一个$\Sigma$公式和一个$\Pi$公式，则称$\varphi$是一个$\Delta^T$公式。

显然，它和Levy层级的区别在于：$\forall x\in y\exists z(\psi)$是$\Sigma$公式，但它作为$\forall x\exists z(x\in y\to\psi)$是$\Pi_2$公式。
:::

$KP$的自增强主要围绕$\Sigma$公式展开。

::: theorem [元定理：弱$\Sigma$反射公理模式]
任给$\Sigma$公式$\varphi$，$KP\vdash\varphi\leftrightarrow\exists c(\varphi^c)$。
:::

::: remark*
注意，完整的反射公理模式要求$c$传递。
:::

::: proof
我们对$\varphi$的复杂度归纳。显然$\Delta_0$的句子对任何传递集绝对，且$\Sigma$句子都向上绝对，因此我们只需证明$\varphi\to\exists c(\varphi^c)$；首先来对所有无量词公式证明此事。

1. 原子公式及原子公式的否定显然任取$c$都可以。

2. 若已有$\varphi_1\to\exists c_1(\varphi_1^{c_1})$和$\varphi_2\to\exists c_2(\varphi_1^{c_2})$，令$c=c_1\cup c_2$即得$(\varphi_1\wedge\varphi_2)\to\exists c(\varphi_1^c\wedge\varphi_2^c)$。

3. $\vee$完全同上造就。

**注。** 我们这里把否定全部丢到原子公式上面来避免讨论$\neg\varphi$。

接下来往上面加量词，显然只需考虑存在量词和受限任意量词两种情况；假定已有$\varphi\to\exists c(\varphi^{c})$，$x$在$\varphi$中自由出现。

1. 我们来想办法证明$\exists x(\varphi)\to\exists d\exists x\in d(\varphi^d)$。显然只要令$d=c\cup x$。

2. 我们来想办法证明$\forall x\in y(\varphi)\to\exists d\forall x\in y(\varphi^d)$。由假设有$\forall x\in y(\varphi\to\exists c(\varphi^{c}))$也就是$\forall x\in y(\varphi)\to\forall x\in y\exists c(\varphi^c)$，又鉴于$\varphi^c$显然$\Delta_0$，由$\Delta_0$局部收集公理模式就得到$\exists e\forall x\in y\exists c\in e(\varphi^c)$，令$d=\bigcup e$即可。

:::

::: theorem [元定理]
$KP$可证：任何$\Sigma$公式都等价于某个$\Sigma_1$公式。
:::

::: proof
这是因为$\exists c(\varphi^c)$是$\Sigma_1$的，而根据弱$\Sigma$反射公理模式它与$\Sigma$公式$\varphi$等价。
:::

::: theorem [元定理：$\Sigma$局部收集公理模式]
任给$\Sigma$公式$\varphi$，$KP\vdash(LColl)_\varphi$。
:::

::: proof
假定$\forall x\in a\exists y(\varphi)$，对整个句子用弱$\Sigma$反射公理模式得到$\exists c\forall x\in a\exists y\in c(\varphi^c)$，用$\Delta_0$分离公理模式得到$b=\{y\in c|\exists x\in a(\varphi^c)\}$，于是$\forall x\in a\exists y\in b(\varphi^c)$，又鉴于$\varphi^c\to\varphi$最终有$\forall x\in a\exists y\in b(\varphi)$。
:::

::: theorem [元定理：$\Delta^{KP}$分离公理模式]
任给$\Delta^{KP}$公式$\varphi$，$KP\vdash(Sep)_\varphi$。
:::

::: proof
假定$\varphi$和$\Sigma$句子$\varphi_\sigma$、$\Pi$句子$\varphi_\pi$均$KP$可证等价，则把$\varphi$的排中律改写一下就有$\forall x(\varphi_\sigma\vee\neg\varphi_\pi)$。现在指定一个$a$，我们来分离$b=\{x\in a|\varphi\}$。注意到$\forall x\in a(\varphi_\sigma\vee\neg\varphi_\pi)$是$\Sigma$句子，于是可以用弱$\Sigma$反射公理模式得到$\exists c\forall x\in a(\varphi_\sigma^c\vee\neg\varphi_\pi^c)$。现在$\varphi_\sigma^c$是$\Delta_0$公式，我们用$\Delta_0$分离公理模式取出$b=\{x\in a|\varphi_\sigma^c\}$。绝对性指出$\varphi_\sigma^c\to\varphi_\sigma$，因此$b$包含于所要的那个的$b$；另一方面，如果$x\in a$满足$\varphi$，则它也满足$\varphi_\pi$，绝对性说它满足$\varphi_\pi^c$，而$\varphi_\sigma^c\vee\neg\varphi_\pi^c$，因此有$\varphi_\sigma^c$，这就说明这个$b$确实是我们想要的$b$。
:::

::: theorem [元定理：$\Sigma$替代公理模式]
任给$\Sigma$公式$\varphi$，$KP\vdash(Rep)_\varphi$。
:::

::: proof
先用$\Sigma$收集，然后用$\Delta^{KP}$分离。
:::

::: remark*
只要有卡氏积公理和$\Delta_0$分离公理模式，替代公理模式中指出的是这个关系所给的像集还是这个关系所给的函数都一样。
:::

::: theorem [元定理：$\Sigma$强替代公理模式]
任给$\Sigma$公式$\varphi$，$KP\vdash(SRep)_\varphi$。
:::

::: proof
我们先用$\Sigma$收集和$\Delta^{KP}$造出$f$像集的并，然后弱$\Sigma$反射，于是对每个$x\in a$由$\Delta_0$分离有一个确定的$f(a)$为其子集，用$\Sigma$替代即可。
:::

接下来，我们讨论归纳与递归的相关问题。由于$\Sigma$公式一定被$KP$认为是$\Sigma_1$公式，而它自己有$\Pi_1$基础公理模式，我们可以对$\Sigma$公式随意使用$\in$归纳法，因此我们只要讨论递归定义。我们首先考虑最重要的递归定义的函数：传递闭包。

::: theorem [元定理]
$KP\vdash (TCl)$。
:::

::: proof
定义$Q(x,a)$为$x\subseteq a\wedge \mathrm{isTrans}(a)\wedge \forall b(x\subseteq b\wedge\mathrm{isTrans}(b)\to a\subseteq b)$，这描述了$a$作为$\mathrm{TCl}(x)$应有的性质。这句话$\Pi_1$，且显然$Q(x,a)\wedge Q(x,b)\to a=b$。

我们现在换过来定义$P(x,a)$为$x\subseteq a\wedge \mathrm{isTrans}(a)\wedge \forall z\in a\exists f\exists n(\mathrm{isFun}\\(f)\wedge \mathrm{isNat}(n)\wedge \exists i\in n\wedge\mathrm{dom}(f)=\mathrm{Succ}(n)\wedge z=f(\varnothing)\wedge x=f(n)\wedge \forall i\in n(f(i)\in f(\mathrm{Succ}(i))))$，这描述了$a=\mathrm{TCl}(x)=x\cup(\cup x)\cup(\cup\cup x)\cup...$这一性质。这句话$\Sigma_1$。

我们证明$P(x,a)\to Q(x,a)$。假定$x\subseteq b\wedge \mathrm{isTrans}(b)$，我们证明$a\subseteq b$即$\forall z\in a(z\in b)$。这是因为假定$f,n$见证$z\in a$，我们证明$\forall i\in n(f(i)\in b)$，进而$z=f(\varnothing)\in b$。如若不然，运用集合基础公理可选出最大反例$i$使得$f(i)\not\in b$但全体让$i\in j\in n$的$j$都让$f(j)\in b$；我们再次宣称此时$\forall j(i\in j\in n\to f(j)\subseteq b)$，否则运用集合基础公理可选出最小的反例$j$使得$f(j)$不是$b$子集但$f(\mathrm{Succ}(j))\subseteq b$，但$f(j)$是前者的元素而$b$传递，矛盾；有了这个断言后我们就知道$f(i)\in f(\mathrm{Succ}(i))\subseteq b$再次矛盾，于是证毕。

上个断言的显然推论是$P(x,a)\wedge P(x,b)\to a=b$。我们现在证明$\forall x\exists a(P(x,a))$，这按刚才的论证就导出$(TCl)$。鉴于$\exists a(P(x,a))$是$\Sigma$句子，我们使用$\in$归纳法。$x=\varnothing$无需多言，因此我们获得前提$\forall y\in x\exists b(P(y,b))$。又鉴于$\mathrm{TCl}(x)=x\cup \bigcup_{y\in x}\mathrm{TCl}(y)$，我们就证完了。
:::

::: corollary
$\mathrm{TCl}$是$\Delta^{KP}$函数符号。
:::

我们先把$\Sigma$公式的$\in$归纳法换成更易于处理的形式。

::: theorem [元定理：$\Sigma$公式的$\mathrm{TCl}$归纳法]
任给$\Sigma$公式$\varphi(x,...)$我们都有$\forall x((\forall y\in\mathrm{TCl}(x)(\varphi(y)))\to\varphi(x))\to\forall x(\varphi(x))$。
:::

::: proof
我们用$\in$归纳法证明$\forall x\forall y\in\mathrm{TCl}(x)(\varphi(y))$。注意$\forall y\in\mathrm{TCl}(x)(\varphi(y))$是$\exists t(t=\mathrm{TCl}(x)\wedge \forall y\in t(\varphi(y)))$，鉴于$\mathrm{TCl}$是$\Delta^{KP}$也是$\Sigma$的我们知道这句话确实是$\Sigma$的从而确可归纳。余下工作其实显然。
:::

::: remark*
$\mathrm{TCl}$归纳法之于$\in$归纳法，正如第二数学归纳法之于数学归纳法。
:::

::: theorem [元定理：$\Sigma$递归定义原理]
取$\mathfrak{n}+2$元$\Sigma$公式定义的$KP$可证函数符号$G$，按以下方案定义的$F$同样由$\Sigma$公式被$KP$可证为函数符号：$$F(v_0,...,v_{\mathfrak{n}-1},x)=G(v_0,...,v_{\mathfrak{n}-1},x,F\upharpoonright \mathrm{TCl}(x))$$
:::

::: proof
显然，$y=F(...,x)$会被定义为$\exists f\exists d(d=\mathrm{TCl}(x)\wedge \mathrm{isFun}(f)\wedge d=\mathrm{dom}(f)\wedge \forall w\in d(f(w)=G(...,w,f\upharpoonright\mathrm{TCl}(w)))\wedge z=G(...,x,f))$，这当然$\Sigma$，于是我们要证明的是$\forall v...\forall x\exists !y(y=F(...,x))$。余下的证明无非是照搬$ZF$中完整版本的证明，并在合适的地方以$\mathrm{TCl}$归纳法代替原本完整的归纳法。
:::

我们立即欢乐得知：

::: corollary
$KP\supseteq PROV$，$KPI\supseteq LPROV$。
:::
