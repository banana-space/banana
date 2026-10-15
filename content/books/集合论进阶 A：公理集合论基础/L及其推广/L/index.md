---
title: L
notices:
  - name: 问题
    items:
      - 'GCH 的证明中 $x\subseteq \omega_\gamma\subseteq M$ 似乎应为 $x\subseteq \omega_\alpha\subseteq M$。'
---

我们先来考虑Gödel的内模型$\mathbf{L}$。
它原本是C，但是因为选用的字体印刷效果太像$\mathbf{L}$了，所以所有人都叫它$\mathbf{L}$。

我们首先来看可定义的定义。

::: definition
给定公式$\varphi(x_0,...,x_\mathfrak{m},v_0,...,v_{\mathfrak{n}-1})$。
对一集合$M$中诸元素$v_0,...,\\v_{\mathfrak{n}-1}$，
如果集合$N\subseteq M^{(\mathfrak{m}+1)}$满足$(x_0,...,x_\mathfrak{m})\in N$当且仅当
$M\vDash\varphi$，则称$N$由公式$\varphi$和参数$v_0,...,v_{\mathfrak{n}-1}$从$M$中定义。

特别地，我们考虑$\wp(M)$的子集$\wp^{Def}(M)$，
集合$N\in\wp^{Def}(M)$当且仅当存在单自由变元公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，
其中诸常元$v_0,...,v_{\mathfrak{n}-1}\in M$，
满足$\forall x(x\in N\leftrightarrow x\in M\wedge M\vDash\varphi)$。
:::

后面这个定义并不元（因为我们只用到了$M\vDash\varphi$这个$\Delta_0$真谓词），
我们甚至有好几个对它的等价刻画。

::: theorem (元定理)
若$M$传递，对$\wp(M)$的元素$N$，以下四条件等价：

1. 有单自由变元公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，
   诸常元$v_0,...,v_{\mathfrak{n}-1}\in M$，
   满足$\forall x(x\in N\leftrightarrow x\in M\wedge M\vDash\varphi)$。

2. 有单自由变元$\Delta_0$公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1},M)$，
   诸常元$v_0,...,v_{\mathfrak{n}-1}\in M$，
   满足$\forall x(x\in N\leftrightarrow x\in M\wedge \mathrm{Succ}(M)\vDash\varphi)$。

3. 有基础函数符号$B$，使得$N=B(v_0,...,v_{\mathfrak{n}-1},M)$，$v_0,...,v_{\mathfrak{n}-1}\in M$。

4. 有基本函数符号$R$，使得$N=R(v_0,...,v_{\mathfrak{n}-1},M)$，$v_0,...,v_{\mathfrak{n}-1}\in M$。

:::

::: proof
显然$1\to 2$（相对化到$M$），$2\to 3$（$\Delta_0$分离子基础），$3\to 4$（基础必基本），
$4\to 2$（基本必可替），只需最后验证$2\to 1$；这是因为$M$传递从而$\mathrm{Succ}(M)$传递，
从而$\mathrm{Succ}(M)\vDash\varphi$当且仅当$\varphi$确实对，而我们可以做以下操作：

1. 如果$M$出现之处形如$\exists y\in M$，把它改成$\exists y$。

2. 如果$M$出现之处形如$y\in M$，把它丢掉；如果形如$M\in y$，
   把它改成$\exists m\in y\forall z(z\in m)$。

3. 如果$M$出现之处形如$y=M$，把它改成$\forall z(z\in y)$。

显然将含$M$的$\Delta_0$句子如此改造一番后再相对化到$M$中效果和原先等同，因此$2\to 1$。
:::

::: remark*
显然$3,4$也可以改成$N\in\mathrm{bsc}(M)$或$N\in\mathrm{rud}(M)$。
因此，$\wp^{Def}(M)=\wp(M)\cap\mathrm{bsc}(M)=\wp(M)\cap\mathrm{rud}(M)$。
这并不是个平凡的事实，因为$DB_0\not\vdash GJ_0$，
我们总有$\mathrm{bsc}(M)\subsetneq\mathrm{rud}(M)$。
不过它们的构造过程都要将$M$的$\mathrm{rank}_\in$加一个$\omega$，
这里的事实说明它们在对$\mathrm{rank}_\in$加一的时候还没发生分歧。
:::

接下来，我们用Gödel原始的定义给出$L$层级。

::: definition
递归定义以下层级：

1. $L_0=\varnothing$

2. $L_{\alpha+1}=\wp^{Def}(L_\alpha)$

3. $\alpha$是极限序数时，$L_\alpha=\bigcup_{\beta\in\alpha}L_\beta$

我们记$\mathbf{L}=\bigcup_{\alpha\in\mathbf{Ord}}L_\alpha$为可构造宇宙。
:::

我们指出以下事实。

::: theorem
$\mathbf{L}\vDash ZF+\mathbf{V=L}$
:::

::: proof
显然$\mathbf{L}$是传递的，因此外延公理和基础公理成立，且$\Delta_0$句子相对化时不改变真假。
显然$\omega\in L_{\omega+1}$见证无穷公理，下验证其余诸公理的相对化。

1. 对集：$z=\{x,y\}$是$\Delta_0$公式。

2. 分离模式：给定诸参数$v_0,...,v_{\mathfrak{n}-1}$和$x\in \mathbf{L}$，
   我们来验证
   $\exists y\in\mathbf{L}\forall z\in\mathbf{L}(z\in y\leftrightarrow z\in x\wedge\varphi^\mathbf{L})$。
   对$\mathbf{L}$使用反射原理，
   我们有一个极限序数$\alpha$使得$x,v_0,...,v_{\mathfrak{n}}\in\mathbf{L}_\alpha$且
   $\varphi^{\mathbf{L}}$当且仅当$\varphi^{L_\alpha}$。
   我们从$L_\alpha$中分离出子集$y=\{z\in L_\alpha|z\in x\wedge\varphi^{L_\alpha}\}$，
   显然$y\in L_{\alpha+1}$。

3. 并集：$y\in\bigcup x$是$\Delta_0$公式，从$x$属于的$L_\alpha$中分离。

4. 幂集：我们断言$\mathbf{L}$指认的$x$的幂集$\wp^\mathbf{L}(x)$恰好是$\mathbf{L}\cap \wp(x)$。
   $y\subseteq x$是$\Delta_0$的，所以如果前者存在则必为后者，
   但后者又因必然是某个$L_\alpha$的子集已经被我们从其上用$x$所定义了。

5. 替代：我们所要的东西逐点可定义，从而它是某$L_\alpha$的可定义子集，从而它仍属于$\mathbf{L}$。

6. $\mathbf{V=L}$：这意味着我们要证明$x=L_\alpha$是$\Delta_1^{ZF}$的，
   因而$\mathbf{L}$指认的$L_\alpha$就是真的$L_\alpha$。
   （注意，$y=V_\alpha$是$\Pi_1$的，
   所以$\mathbf{L}$指认的$V_\alpha$是真正的$V_\alpha$和$\mathbf{L}$的交集，
   正如我们在幂集那里看到的一样。）

   鉴于这肯定是是因为$x=L_\alpha$等价于“存在抵达$\alpha$的尝试在$\alpha$处计算出$x$”和“任给抵达
   $\alpha$的尝试必在$\alpha$处计算出$x$”，
   只需证明“$f$是$L$层级抵达$\alpha$的尝试”这句话$\Sigma_1$，
   而这正是
   $\mathrm{isFun}(f)\wedge\mathrm{isOrd}(\mathrm{dom}(f))\wedge\alpha\in\mathrm{dom}(f)\wedge\forall\theta\in\mathrm{dom}(f)((\theta=\varnothing\to f(\theta)=\varnothing)\wedge \exists\gamma\in\theta(\theta=\mathrm{Succ}(\gamma)\wedge f(\theta)=\wp^{Def}(f(\gamma)))\wedge (\mathrm{isLimOrd}(\theta)\to f(\theta)=\bigcup_{\gamma\in\theta}f(\gamma)))$，
   这意味着只需验证$y=\wp^{Def}(x)$是$\Sigma_1$的，
   而这句话恰是
   $\exists f(\mathrm{dom}(f)=\omega\wedge \forall n\in\mathrm{dom}(f)((n=\varnothing\to f(n)=x)\wedge \exists m\in n(n=\mathrm{Succ}(m)\to f(n)=\mathbf{T}(f(m))))\wedge y=\mathrm{ran}(f)\cap\wp(x))$。

:::

::: remark*
$\mathbf{V=L}$的复杂度是$\Pi_2$的是一个重要的事实。
:::

因此，在$\mathbf{L}$中论证相当于在公理$\mathbf{V=L}$下论证。我们接着证明，

::: theorem [$ZF+\mathbf{V=L}$]
存在一个$\Sigma_1$公式定义了宇宙的良序$<^L$。
:::

::: proof
这个良序的构造想法很简单：因为全体基本算子显然从$\mathcal{R}_\mathfrak{i}$一层一层地垒起来，
我们只要一层一层地按照集合被谁算出来把$\mathbf{L}$里的集合排起来就好了。
例如，我们归纳地对每个$\alpha$定义$L_\alpha$上的关系$<_{\alpha}^{L}$如下：

1. $<_0^L=\{\varnothing\}$

2. $<_{\alpha+1}^L$是以下递归定义的诸$<_{\alpha+1;n}^L$的并，其中$n\in\omega$；

   1. $<_{\alpha+1;0}^L$是在$<_\alpha^L$的基础上让$L_\alpha$大于之前每个东西。

   2. $x<_{\alpha+1;n+1}^L y$当且仅当以下三者之一正确：

      1. $x<_{\alpha+1;n}^L y$；

      2. $x$可以被$n$层$\mathcal{R}_\mathfrak{i}$算出来但$y$不行；

      3. $x,y$都不能被$n$层$\mathcal{R}_\mathfrak{i}$算出来，
         但它们被$n+1$层$\mathcal{R}_\mathfrak{i}$算出来，且以下三者之一正确：

         1. $x$被算出来所用的$\mathcal{R}_\mathfrak{i}$的最小可能下标小于$y$的；

         2. 上面指标相等，但$x$用的第一个变元在$<_{\alpha+1;n}^L$下的最小可能比$y$的小；

         3. 上面两指标都相等，但$x$用的第二个变元在$<_{\alpha+1;n}^L$下的最小可能比$y$的小。

3. 对极限序数$\alpha$，令$<_{\alpha}^L$为之前诸$<_\beta^L(\beta\in\alpha)$的并。

:::

::: corollary
$ZF+\mathbf{V=L}\vdash (AC)$
:::

然而，我们还有更令人惊异的事实。

::: theorem [$ZF+\mathbf{V=L}$] {@L-GCH}
$GCH$成立。
:::

我们需要一个重要的引理，它指出$L$层级的构造具有某种典范性。

::: lemma [Gödel凝聚性引理，L版本] {@凝聚性引理}
$ZF$可证：给定极限序数$\alpha$，若传递集$M\prec_{\Sigma_1}L_\alpha$，
则其坍塌唯一确认一个极限序数$\beta\in\alpha$使得$M$与$L_\beta$同构。
:::

::: proof
$M\prec_{\Sigma_1}L_\alpha$说明$L_\alpha$满足的$\Pi_2$句子都被$M$满足，
因此$L_\alpha\vDash\forall\alpha\in\mathbf{Ord}\exists\beta\in\mathbf{Ord}(\alpha\in\beta)$说明$M$
的坍塌的$\mathrm{rank}_{\in}$是极限序数，
而$L_\alpha\vDash\mathbf{V=L}$则说明$M$坍塌同样认为$\mathbf{V=L}$，从而它确实是某个$L_\beta$。
:::

::: proof [@L-GCH 的证明]
为证明$GCH$，
我们对每个$\omega_\alpha$（注意我们在$\mathbf{V=L}$中工作）的子集$x$证明存在
$\gamma<\omega_{\alpha+1}$使得$x\in L_\gamma$，
这样$\wp(\omega_\alpha)\subseteq L_{\omega_{\alpha+1}}$和显然的$|L_{\theta}|=|\theta|$就指出
$|\wp(\omega_\alpha)|=\omega_{\alpha+1}$。

鉴于$\mathbf{V=L}$，必有$\delta$使得$x\in L_\delta$。
使用下行LS定理取$L_\delta$的初等子模型$M$满足$\omega_\alpha\subseteq M$且$x\in M$，
根据我们的要求有$|M|\leq\omega_\alpha$；
由凝聚性引理（@-凝聚性引理）就知道$M$的传递坍塌一定是一个让$|\gamma|\leq\omega_\alpha$的$L_\gamma$，
于是必然$\gamma<\omega_{\alpha+1}$；
而$x\subseteq \omega_\gamma\subseteq M$则说明$x$在$M$中的传递坍塌仍然是$x$，
综合得到$x\in L_\gamma$。
:::

::: corollary
$\mathrm{Con}(ZF)\to\mathrm{Con}(ZFC+GCH)$
:::

这是否意味着我们应当居住在$\mathbf{L}$之中？不幸的是，
下一章中我们将遇到的大基数$0^\#$将否定$\mathbf{V=L}$，因此基于宇宙应当大全的信念，
我们实在应当放弃这一公理。
