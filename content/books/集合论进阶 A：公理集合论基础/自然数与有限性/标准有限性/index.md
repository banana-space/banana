---
title: 标准有限性
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
本节讨论依赖于自然数概念的标准有限性，并讨论其性质。

::: definition [常见的有限性]
我们给出以下谓词。

1. （左标准有限）$\mathrm{isFin_l}(x)\leftrightarrow\exists f\exists n(\mathrm{isNat}(n)\wedge\mathrm{isBijOn}(f,x,n))$，它$\Sigma_1$。

2. （左弱标准有限）$\mathrm{isFin_{wl}}(x)\leftrightarrow\exists f\exists n(\mathrm{isNat}(n)\wedge\mathrm{isInjOn}(f,x,n))$，它$\Sigma_1$。

3. （右标准有限）$\mathrm{isFin_r}(x)\leftrightarrow\exists f\exists n(\mathrm{isNat}(n)\wedge\mathrm{isBijOn}(f,n,x))$，它$\Sigma_1$。

4. （右弱标准有限）$\mathrm{isFin_{wr}}(x)\leftrightarrow\exists f\exists n(\mathrm{isNat}(n)\wedge\mathrm{isSurjOn}(f,n,x))$，$\Sigma_1$。

:::

我们逐步增强系统中携带的基础公理模式，以游览标准有限性的各类性质如何产生。首先我们考虑一些很弱的系统，其中并无标准有限性。

::: theorem [$ReS_0$]
左标准有限推出左弱标准有限，右标准有限推出右弱标准有限。
:::

::: proof
显然。
:::

::: theorem [$T_{Ar}$]
自然数有二重卡式幂，且左右标准有限。
:::

::: proof
首先证明一个引理。

**引理。** $\forall n\forall x(\mathrm{isNat}(n)\to\exists y(y=n\times \{x\})\wedge\exists z(z=\{x\}\times n))$。

**证明。** 待证命题$\Sigma_1$，故可进行数学归纳法。注意到$\varnothing\times\{x\}=\{x\}\times\varnothing=\varnothing$，只需继续注意$\mathrm{Succ}(n)\times\{x\}=(n\times \{x\})\cup\{(n,x)\}$和$\{x\}\times\mathrm{Succ}(n)=(x\times\{n\})\cup\{(x,n)\}$。

现在来证$\forall n(\mathrm{isNat}(n)\to\exists z(z=n\times n))$。待证命题$\Sigma_1$，故可进行数学归纳法。注意到$\varnothing\times\varnothing=\varnothing$，只需继续注意$(\mathrm{Succ}(n))^{(2)}=n^{(2)}\cup(n\times\{n\})\cup(\{n\}\times n)\cup\{(n,n)\}$。

现在，由于$n^{(2)}$存在，$\mathrm{id}(n)$亦存在，它直接见证$n$左右标准有限。
:::

::: theorem [$T_{Ar}$]
若两个自然数不等，则必有一个自然数是另一个自然数的元素。
:::

::: proof
换言之，我们要证明$\forall n(\mathrm{isNat}(n)\to\forall m(\mathrm{isNat}(m)\to(n\in m\vee m\in n\vee m=n)))$，被归纳的句子$\Delta_0$，只需证明$(\mathrm{isOrd}(n)\wedge\mathrm{isOrd}(m)\to(n\in m\vee m\in n\vee m=n))\leftrightarrow\forall a\in n\forall b\in m(\mathrm{isOrd}(a)\wedge\mathrm{isOrd}(b)\to(a\in b\vee b\in a\vee a=b))$。显然只需证明$\leftarrow$，这是因为我们可以断言$\forall a\in n\exists b\in m(a=b)\vee\forall b\in m\exists a\in n(a=b)$，否则$\exists a\in n\forall b\in m(a\not=b)$说明$\exists a\in n\forall b\in m(a\in b\vee b\in a)$，如果$\exists b\in m(a\in b)$将导致$a\in m$矛盾，故$\forall b\in m(b\in a)$，于是$m\subseteq a$，类似的有$n\subseteq b$，但$m\subseteq a\subseteq n\subseteq b\subseteq m$说明全取等，所以$a\in n$而$a=n$矛盾。所以$m\subseteq n$或$n\subseteq m$，如果两个都成立就有$m=n$，如果$m\subsetneq n$我们证明$m\in n$，只需直接取$n\backslash m$的$\in$最小元就能证明它等于$m$。
:::

::: corollary [$T_{Ar}$]
两个自然数的并集是自然数。
:::

::: proof
自然数按定义是传递集，因此两个自然数的并就是较大的那个。
:::

::: corollary [$T_{Ar}$]
两个自然数的卡氏积总是存在。
:::

::: proof
从较大的自然数的二重卡式幂中分离出所想要的卡氏积即可。
:::

::: remark*
我们在证明乘法$\Delta_1^{T_{Ar}}$可表示时的时候其实悄悄用了这个推论。
:::

我们令$T_{Ar}^+$为$\Sigma_2-ReS$，这是因为标准有限性对归纳法要求更高。

::: theorem [$T_{Ar}^+$]
左右标准有限等价。
:::

::: proof
首先，我们演示如何用左标准有限推断右标准有限。这一过程可以对称地变成用右标准有限推出左标准有限的证明，所以我们只给单边；此后，左右标准有限将合称标准有限，记为$\mathrm{isFin}$。

**断言。** 两个左标准有限集合的卡氏积必存在。

**证明。** 我们需要归纳法，因此我们对着左标准有限集双射到的那两个自然数进行归纳，来证明$\forall n(\mathrm{isNat}(n)\to\forall m(\mathrm{isNat}(m)\to\forall f\forall g\forall x\forall y(\mathrm{isBijOn}(f,x,\\n)\wedge\mathrm{isBijOn}(g,y,m)\to\exists z\exists t\exists h(z=x\times y\wedge t=n\times m\wedge\mathrm{isBijOn}(h,z,t)\wedge\forall a\in x\forall b\in y(h(a,b)=(f(a),g(b)))))))$。被归纳的句子$\Pi_2$，因此$T_{Ar}^+$能搞定。如果$n=\varnothing$，则必有$x=f=\varnothing$，进而直接有$z=\varnothing$符合要求，因此不妨假定$n=\mathrm{Succ}(k)$且已对$k$证明。又对$m$归纳，$m=\varnothing$时同样有$y=g=z=\varnothing$，因此又可假定$m=\mathrm{Succ}(l)$且已对$l$证明。

现在，给定$f,g,x,y$，我们之前已经论证过$t=n\times m$存在，现在要造出$z=x\times y$和双射$h$。假定$f=f'\cup\{(a,k)\}$且$g=g'\cup\{(b,l)\}$，则对$n$的归纳假设指出$\exists z_1\exists t_1\exists h_1(z_1=(x\backslash\{a\})\times y\wedge t_1=k\times m\wedge\mathrm{isBijOn}(h_1,z_1,t_1))$，对$m$的归纳假设指出$\exists z_2\exists t_2\exists h_2(z_2=x\times(y\backslash\{b\})\wedge t_2=n\times l\wedge\mathrm{isBijOn}(h_2,z_2,t_2))$，不难发现$h=h_1\cup h_2\cup\{((a,b),(k,l))\}$即为所求。

这指出左标准有限集与它双射到的自然数的卡氏积及反过来的卡氏积均存在，因此双射确实可调换方向，因而左标准有限推出右标准有限。
:::

::: corollary
两个标准有限集的卡氏积必存在。
:::

自然数的子集一定标准有限。

::: theorem [$T_{Ar}^+$]
$\forall n(\mathrm{isNat}(n)\to\forall x(x\subseteq n\to\mathrm{isFin}(x)))$
:::

::: proof
这句子$\Pi_2$，故可对$n$归纳。$\varnothing$的子集只有$\varnothing$，而$\mathrm{Succ}(n)$的子集要不然是$n$的子集，要不然是$n$的子集并上$\{n\}$，前者直接归纳假设，后者给归纳假设的双射添上一个点即可。
:::

标准有限性在双射下保持不变，证明不过是归纳。

::: theorem [$T_{Ar}^+$]
$\forall x\forall y(\exists f(\mathrm{isBijOn}(f,x,y)\vee\mathrm{isBijOn}(f,y,x))\to\mathrm{isFin}\\(x)\to\mathrm{isFin}(y))$
:::

::: proof
不妨证明$\mathrm{isBijOn}(f,x,y)$的情况。我们对$x$被双射到的自然数$n$进行归纳，证明$\forall n(\mathrm{isNat}(n)\to\forall x\forall y\forall f\forall g(\mathrm{isBijOn}(f,x,y)\wedge\mathrm{isBijOn}(g,n,x)\to\exists h(\mathrm{isBijOn}(h,n,y))))$。被归纳的句子$\Pi_2$。归纳过程无非是把新增的那一个点处的值直接粘在归纳假设给出的函数上。
:::

::: corollary
左右弱标准有限均等价于标准有限。
:::

::: proof
左弱标准有限的等价性来源于像集的标准有限性，右弱标准有限的等价性需要绕个圈子利用最小自然数原理。
:::

接下来讨论标准有限集的那些并未被公理保证的操作。

::: theorem [$T_{Ar}^+$]
标准有限集的（元有穷个）并集和卡氏积均存在且标准有限。
:::

::: proof
这是加法和乘法可定义的直接推论。
:::

::: theorem [$T_{Ar}^+$]
标准有限集的幂集总是存在，且仍标准有限。
:::

::: proof
我们需要一个长得比较奇怪的断言。

**断言。** $\mathrm{isFin}(x)\to \exists y(\mathrm{isFin}(y)\wedge y=\{z\cup\{a\}|z\in x\})$

**证明。** 标准有限性的出现提示着我们转写命题再做归纳法。显然应该固定$a$，然后归纳命题$\forall n(\mathrm{isFin}(n)\to \forall x\forall f(\mathrm{isBijOn}(f,x,n)\to\exists y\exists g(\mathrm{isBijOn}(g,y,n)\\\wedge \forall z\in x\exists w\in y(w=z\cup\{a\}\wedge f(z)=g(w))\wedge\forall w\in y\exists z\in x(w=z\cup\{a\}\wedge f(z)=g(w)))))$。显然被归纳的句子$\Pi_2$，故归纳可行。

$n=\varnothing$显然，现在用对$n$的归纳假设证明$\mathrm{Succ}(n)$时的情况。把$n$对应的那一点抠掉，用一次归纳假设，然后按照要求把抠掉的一点重新造出来即可。

**注。** 注意$y=\{z\cup\{a\}|z\in x\}\leftrightarrow \forall z\in x\exists w\in y(w=z\cup\{a\})\wedge\forall w\in y\exists z\in x(w=z\cup\{a\})$是$\Delta_0$的，$y\subseteq\wp x\leftrightarrow \forall z\in y(z\subseteq x)$也是$\Delta_0$的。

有了这个断言，我们再来固定一个标准有限集$x$，通过归纳法造出其幂集。注意$\wp(x\cup\{a\})=\wp(x)\cup\{y\cup\{a\}|y\in\wp(x)\}$，我们做以下核心断言。

**断言。** $\forall n(\mathrm{isNat}(n)\to\forall x\forall f(\mathrm{isBijOn}(f,n,x)\to\forall m(\mathrm{isNat}(m)\to m\subseteq n\to\exists g\exists h\exists r\exists s(\mathrm{isFunOn}(g,m,r)\wedge\mathrm{isFunOn}(h,m,s)\wedge\forall a\in r\forall b\in s(\mathrm{isFin}(a)\wedge\mathrm{isFin}(b)\wedge a\subseteq\wp x\wedge b\subseteq \wp x)\wedge \forall k\in m(h(k)=\{y\cup\{f(k)\}|y\in g(k)\})\wedge (\varnothing\in m\to g(\varnothing)=\{\varnothing\})\wedge \forall k\in m(\mathrm{Succ}(k)\in n\to g(\mathrm{Succ}(k))=g(k)\cup h(k))))))$。

**证明。** 固定$n,f,x$，我们对$m$归纳。这是在归纳$\Sigma_1$句子。$m=\varnothing$无需多言，下假定$m$时的$g',h',r',s'$皆已得到，且$\mathrm{Succ}(m)\subseteq n$即$m\in n$，来构造$\mathrm{Succ}(m)$对应的$g,h,r,s$。构造方法写在句子里面，两个有限性的验证由上一个断言和标准有限集的并集同样标准有限给出，两个包含于幂集的断言是显然的。

我们把那一串$\Delta_0$条件记为$P(n,x,f,g,h,r,s)$，要证明定理只要接着对$n$归纳证明$\forall n(\mathrm{isNat}(n)\to\forall x\forall f\forall g\forall h\forall r\forall s\exists p(\mathrm{isBijOn}(f,n,x)\to P(n,x,f,\\g,h,r,s)\to (n=\varnothing \vee \exists m\in n(n=\mathrm{Succ}(m)\wedge p=\wp(x)=g(m)\cup h(m)\wedge \mathrm{isFin}(p)))))$。这个句子$\Pi_2$，故恰可归纳。$n=\varnothing$的情况显然按下不表，我们来假定$n=\mathrm{Succ}(m)$且已对$m$有了归纳假设。$m=\varnothing$时$n=\{\varnothing\}$同样按下不表，我们关注$m=\mathrm{Succ}(k)$的情况，此时不妨设$f(m)=a$，记$y=x\backslash\{a\}$，归纳假设宣称$\wp(y)=g(k)\cup h(k)=g(m)$。注意$s\subseteq x\leftrightarrow s\subseteq y \vee \exists t(s=t\cup\{a\}\wedge t\subseteq y)$，前者对应$g(m)$，后者对应$h(m)$，故$\wp(x)=g(m)\cup h(m)$，有限性显然，总之归纳完毕。
:::
