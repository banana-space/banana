---
title: 自然数与归纳法
---

<problems>
- 递归函数可表示性的证明中，正则极小化一步的定义式 $\forall z\in y(f(x_1,...,x_{\mathfrak{n}},y)\not=\varnothing)$ 中的 $f(\dots,y)$ 似乎应为 $f(\dots,z)$；原始递归一步中 $F$ 的变元似乎应为 $x_1,...,x_{\mathfrak{n}}$，$h$ 的倒数第二个参数似乎应为 $i$ 而非 $y$。
</problems>

我们先来论证一个熟知的元定理。

::: theorem (元定理) [元自然数的标准编码]
对每个元自然数$\mathfrak{n}$，$ReS_0$可证存在一个对应的集合$\ulcorner\mathfrak{n}\urcorner$，
满足以下特质：

1. $\ulcorner 0\urcorner =\varnothing$

2. $\operatorname{isOrd}(\ulcorner\mathfrak{n}\urcorner)$

3. $\ulcorner\mathfrak{n}\urcorner=\{\ulcorner\mathfrak{k}\urcorner|0\leq\mathfrak{k}<\mathfrak{n}\}$

:::

::: proof
我们采取元数学归纳法，
只需从需论证的第三个特质读出
$\ulcorner\mathfrak{n+1}\urcorner=\ulcorner\mathfrak{n}\urcorner\cup\{\ulcorner\mathfrak{n}\urcorner\}$
即可。
:::

然而，我们希望能直接在集合论中谈论自然数，因此我们考虑以下对自然数的刻画。

::: definition [是自然数]
我们定义$\mathrm{isNat}(x)$为
$x=\varnothing\vee(\mathrm{isSuccOrd}(x)\wedge\forall y\in x(\mathrm{isSuccOrd}(y)\vee y=\varnothing))$。
这时，$x$将被称作一个自然数。这是$\Delta_0$谓词。
:::

::: remark* (论题) [自然数论题]
如果集合$n$满足$\mathrm{isNat}(n)$，
则存在一个元自然数$\mathfrak{n}$使得$n=\ulcorner\mathfrak{n}\urcorner$。
:::

由于这个论题涉及的乃是我们对于“自然数”这一概念的直观理解（你无法真的获得你对自然数的先天经验的一个完全的能形式化的刻画），
它永远只能是一个论题（而不是一个命题），你只能选择相信它或者不相信它，
为它辩护或为它的对立面辩护或者对某个你喜欢的观点辩护，但你没办法证明它，
因为它根本不是一个能被形式化的句子，没有人能定义对这种东西的“证明”是什么。
然而，我们总能不依赖这个论题而证明一些简单的关于自然数的事实，例如（形式化的）数学归纳法（模式）。

::: theorem (元定理)
$ReS_0\vdash(Fnd)_{\Pi_\mathfrak{n}}\leftrightarrow (Ind)_{\Sigma_\mathfrak{n}}$
:::

::: proof
$(Fnd)_{\Pi_\mathfrak{n}}$推$(Ind)_{\Sigma_\mathfrak{n}}$：反证。
如果
$\exists v_0...\exists v_{\mathfrak{m}-1}(\forall x(\forall y(y\in x\to\varphi(y,v_0\\,...,v_{\mathfrak{m}-1}))\to \varphi(x,v_0,...,v_{\mathfrak{m}-1}))\wedge\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{m}-1})))$，
这时记$\psi=\neg\varphi$，由于$\varphi$是$\Sigma_\mathfrak{n}$的，自然$\psi$是$\Pi_\mathfrak{n}$的。
后半句话说$\exists x(\psi(x,v_0,...,v_{\mathfrak{m}-1}))$，
于是$\Pi_\mathfrak{n}$(Fnd)将它加强为
$\exists x(\psi(x,v_0,...,v_{\mathfrak{m}-1})\wedge\forall y\in x(\neg\psi(y,v_0,...,v_{\mathfrak{m}-1})))$，
而这个后半句话带进反设的前半句又会指出$\neg\psi(x,v_0,...,v_{\mathfrak{m}-1})$，遂矛盾。

$(Ind)_{\Sigma_\mathfrak{n}}$推$(Fnd)_{\Pi_\mathfrak{n}}$：同反证，细节略。
:::

因此，添加多强的基础公理模式就是添加相反的多强的归纳公理模式。具体到自然数上，我们有：

::: theorem [$ReS_0$]
考虑以下两种归纳法。

1. 任给一个公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，均有

   $$
   \forall v_0...\forall v_{\mathfrak{n}-1}((\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{n}-1}))\\\to\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge \forall y\in x(\varphi(y,v_0,...,v_{\mathfrak{n}-1}))))\to\\(\varphi(\varnothing,v_0,...,v_{\mathfrak{n}-1})\wedge\forall x(\mathrm{isNat}(x)\to \varphi(x,v_0,...,v_{\mathfrak{n}-1})\\\to\varphi(\mathrm{Succ}(x),v_0,...,v_{\mathfrak{n}-1}))\to\forall x(\mathrm{isNat}(x)\to\varphi(x,v_0,...,v_{\mathfrak{n}-1}))))
   $$

2. 任给一个公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，均有

   $$
   \forall v_0...\forall v_{\mathfrak{n}-1}((\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{n}-1}))\\\to\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge \forall y\in x(\varphi(y,v_0,...,v_{\mathfrak{n}-1}))))\to\\(\varphi(\varnothing,v_0,...,v_{\mathfrak{n}-1})\wedge(\forall x(\mathrm{isNat}(x)\to\forall y\in x(\varphi(y,v_0,...,v_{\mathfrak{n}-1}))\\\to\varphi(x,v_0,...,v_{\mathfrak{n}-1})))\to\forall x(\mathrm{isNat}(x)\to\varphi(x,v_0,...,v_{\mathfrak{n}-1}))))
   $$

我们还能证明最小自然数原理：任给一个公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，均有

$$
\forall v_0...\forall v_{\mathfrak{n}-1}((\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1}))\\\to\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge \forall y\in x(\neg\varphi(y,v_0,...,v_{\mathfrak{n}-1}))))\to\\(\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1}))\to\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to\mathrm{isNat}(x))\to\\\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge\forall y\in x(\neg\varphi(y,v_0,...,v_{\mathfrak{n}-1})))))
$$
:::

::: proof
对第一种数学归纳法，反证。
这个$x$将见证$\exists x(\neg\varphi(x,v_0,...,v_{\mathfrak{n}-1}))$从而触发前提，
前提给出的这个特别的$x$既然又是自然数，则它是某个自然数的后继或是空集，均导出矛盾。其余同理。
:::

::: corollary
用归纳法的语言，对$\mathfrak{n}\geq 1$我们有：

1. $\Pi_\mathfrak{\mathfrak{n}}-ReS$可以形式化对$\Sigma_\mathfrak{n}$公式的数学归纳法，
   $\Sigma_\mathfrak{\mathfrak{n}}-ReS$可以形式化对$\Pi_\mathfrak{n}$公式的任意多重数学归纳法，
   $\Sigma_\mathfrak{n+1}-ReS$可以形式化对$\Sigma_\mathfrak{n}$公式的任意多重数学归纳法。

2. $\Pi_\mathfrak{\mathfrak{n}}-ReS$可以形式化对$\Sigma_\mathfrak{n}$公式的第二数学归纳法，
   $\Sigma_\mathfrak{\mathfrak{n}}-ReS$可以形式化对$\Pi_\mathfrak{n}$公式的任意多重第二数学归纳法，
   $\Sigma_\mathfrak{n+1}-ReS$可以形式化对$\Sigma_\mathfrak{n}$公式的任意多重第二数学归纳法。

:::

::: proof
注意到$\Pi_1-ReS$只有$\Pi_1$的基础公理模式，换言之数学归纳法只能归纳$\Sigma_1$公式，
因此二重归纳（先对$m$归纳再对$n$归纳，
换言之对$\omega\cdot m+n$进行超限归纳）看起来就是不能进行的（对$m$归纳的是一个$\Pi_2$也就是
$\Sigma_3$句子），这是一个非常讨厌的事实。下面且举关键一例论证。

对$x_0$归纳以证明
$\forall x_0(\mathrm{isNat}(x_0)\to\forall x_1(\mathrm{isNat}(x_1)\to...\to\forall x_{\mathfrak{m}}(\mathrm{isNat}\\(x_{\mathfrak{m}})\to\varphi(x_0,...,x_{\mathfrak{m}},v_0,...,v_{\mathfrak{k}-1}))))$
时，若$\varphi$是$\Pi_\mathfrak{n}$公式，
则
$\forall x_1(\mathrm{isNat}(x_1)\to...\to\forall x_{\mathfrak{m}}(\mathrm{isNat}(x_{\mathfrak{m}})\to\varphi(x_0,...,x_{\mathfrak{m}},v_0,...,v_{\mathfrak{k}-1})))$
仍是$\Pi_{\mathfrak{n}}$公式。
:::

总之，在不具有充足的基础公理模式的弱集合论中，随意使用归纳法容易引发危险。
怎么才能丢掉这一大堆莫名其妙的基础公理模式，而以最简单情形代之呢？一个方案是考虑下列弱归纳法。

::: theorem [$\Pi_1-ReS$]
弱$\Sigma_1$多重数学归纳法：对$\Delta_0$句子$\psi(x,n_\mathfrak{1},...,n_\mathfrak{n})$，

$$
\Pi_1-ReS\vdash \forall n_\mathfrak{1}...\forall n_\mathfrak{n}(\mathrm{isNat}(n_\mathfrak{1})\to...\to\mathrm{isNat}(n_\mathfrak{n})\to
\\\exists x\psi(x,n_\mathfrak{1},...,n_\mathfrak{n})\leftrightarrow \forall m_\mathfrak{1}\in n_\mathfrak{1}...\forall m_\mathfrak{n}\in n_\mathfrak{n}(\exists x\psi(x,m_\mathfrak{1},...,m_\mathfrak{n})))
\\\to\forall n_\mathfrak{1}...\forall n_\mathfrak{n}(\mathrm{isNat}(n_\mathfrak{1})\to...\to\mathrm{isNat}(n_\mathfrak{n})\to\exists x\psi(x,n_\mathfrak{1},...,n_\mathfrak{n}))
$$
:::

::: proof
$\mathfrak{n}=1$早已得知，不妨设$\mathfrak{n}\geq 2$，反设结论不对，
即有一组$N_\mathfrak{i}(\mathfrak{i}=\mathfrak{1},...,\mathfrak{n})$使得
$\forall x\neg\psi(x,N_\mathfrak{1},...,N_\mathfrak{n})$且$\mathrm{isNat}(N_\mathfrak{i})$；
不妨设$N_\mathfrak{1}$是诸$N_\mathfrak{i}$中极大者，
则它实际上满足
$\forall M_\mathfrak{i}\forall x(N_\mathfrak{1}\in M_\mathfrak{i}\to\mathrm{isNat}(M_\mathfrak{i})\to\neg\psi(x,M_\mathfrak{1},...,M_\mathfrak{n}))$，
进而对其使用$\Pi_1$基础公理模式我们可以额外要求
$\forall N'_\mathfrak{1}\in N_\mathfrak{1}\exists M_\mathfrak{i}\exists x(N_\mathfrak{1}'\in M_\mathfrak{i}\wedge \mathrm{isNat}(M_\mathfrak{i})\wedge \psi(x,M_\mathfrak{1},...,M_\mathfrak{n}))$。

现在由一开始对诸$N_\mathfrak{i}$的条件，
$\exists n_\mathfrak{i}\in N_\mathfrak{i}\forall x\neg\psi(x,n_\mathfrak{1},...,n_\mathfrak{n})$。
注意到它对每个$\mathfrak{i}$有推论
$\exists n_\mathfrak{i}\forall x(n_\mathfrak{i}\in N_\mathfrak{i}\wedge \exists_{\mathfrak{j}\not=\mathfrak{i}}n_\mathfrak{j}\in N_\mathfrak{j}(\neg\psi(x,n_\mathfrak{i},...,n_\mathfrak{n})))$，
对其使用$\Pi_1$基础公理模式得到这样一些$n_\mathfrak{i}\in N_\mathfrak{i}$，满足两个条件：

1. $\forall x\exists_{\mathfrak{j}\not=\mathfrak{i}}m_\mathfrak{j}\in N_\mathfrak{j}(\neg\psi(x,m_\mathfrak{1},...,n_\mathfrak{i},...,m_\mathfrak{n}))$

2. $\forall m_\mathfrak{i}\in n_\mathfrak{i}\exists x\forall_{\mathfrak{j}\not=\mathfrak{i}}m_\mathfrak{j}\in N_\mathfrak{j}(\psi(x,m_\mathfrak{1},...,m_\mathfrak{n}))$

**断言。**
$\forall m_\mathfrak{i}\in n_\mathfrak{i}(\exists x\psi(x,m_\mathfrak{1},...,m_\mathfrak{n}))$

**证明。** 若不然，
取一组$m_\mathfrak{i}\in n_\mathfrak{i}$使得$\forall x\neg\psi(x,m_\mathfrak{i})$。
对每个$\mathfrak{i}$使用$n_\mathfrak{i}$的第二个条件，
我们取得一组$x_\mathfrak{i}$满足
$\forall_{\mathfrak{j}\not=\mathfrak{i}}k_\mathfrak{j}\in N_\mathfrak{j}(\psi(x_\mathfrak{i},k_\mathfrak{1},...,m_\mathfrak{i},...,k_\mathfrak{n}))$。
特别地取$\mathfrak{i}=\mathfrak{1}$，
$k_\mathfrak{j}=m_\mathfrak{j}$我们就得到$\psi(x_\mathfrak{1},m_\mathfrak{1},...,m_\mathfrak{n})$，
立即矛盾。

**断言。**
$\exists m_\mathfrak{i}\in N_\mathfrak{i}\forall x(n_\mathfrak{i}\in m_\mathfrak{i}\wedge \neg\psi(x,m_\mathfrak{1},...,n_\mathfrak{i},...,m_\mathfrak{n}))$

**证明。** 若不然，
$\forall m_\mathfrak{i}\in N_\mathfrak{i}\exists x(n_\mathfrak{i}\not\in m_\mathfrak{i}\vee\psi(x,m_\mathfrak{1},...,n_\mathfrak{i},...,m_\mathfrak{n}))$，
我们宣布
$\forall m_\mathfrak{i}\in N_\mathfrak{i}\exists x(\psi(x,m_\mathfrak{1},...,n_\mathfrak{i},...,m_\mathfrak{n}))$：
否则$m_\mathfrak{i}\in N_\mathfrak{i}$使
$\forall x\neg\psi(x,m_\mathfrak{1},...,n_\mathfrak{i},...,m_\mathfrak{n})$，
则须有$n_\mathfrak{i}\not\in m_\mathfrak{i}$总对，换言之$m_\mathfrak{i}\in n_\mathfrak{i}$总对，
这和上一个断言矛盾。但这句话本来就和我们对诸$N_\mathfrak{i}$的要求矛盾，所以一开始的反设是错的。

于是，这个断言中的$m_\mathfrak{i}$可以完全取代$N_\mathfrak{i}$的每个作用。
如果$m_\mathfrak{1}$是诸$m_\mathfrak{i}$中的极大者，则由我们对$N_\mathfrak{1}$的额外要求，
有一些$M_\mathfrak{i}$使得$m_\mathfrak{1}\in M_\mathfrak{i}$（进而
$m_\mathfrak{i}\in M_\mathfrak{i}$）但$\exists x\psi(x,M_\mathfrak{1},...,M_\mathfrak{n})$，
这与$\forall x\neg\psi(x,m_\mathfrak{1},...,m_\mathfrak{n})$矛盾。
如果$m_\mathfrak{1}$不是诸$m_\mathfrak{i}$中极大者，假定$m_\mathfrak{2}$是，
则它实际上又满足
$\forall M_\mathfrak{i}\forall x(m_\mathfrak{2}\in M_\mathfrak{i}\to\mathrm{isNat}(M_\mathfrak{i})\to\neg\psi(x,M_\mathfrak{1},...,M_\mathfrak{n}))$，
进而对其使用$\Pi_1$基础公理模式我们可以额外要求
$\forall N'_\mathfrak{2}\in m_\mathfrak{2}\exists M_\mathfrak{i}\exists x(N_\mathfrak{2}'\in M_\mathfrak{i}\wedge \mathrm{isNat}(M_\mathfrak{i})\wedge \psi(x,M_\mathfrak{1},...,M_\mathfrak{n}))$。
继续同上操作，这一过程必在$\mathfrak{n}$步之内终止，进而停在一次矛盾上，反证结束。
:::

接下来，我们考虑自然数上的算术结构。
由以上讨论，我们不妨以$T_{Ar}$指代$\Pi_1-ReS$，以表彰其对算术结构的刻画的有效性。

::: theorem [$T_{Ar}$]
定义$\Delta_0$谓词
$\mathrm{+_a}(f,m,n,d,s)\leftrightarrow\mathrm{isFunOn}(f,\\d,s)\wedge\mathrm{isNat}(m)\wedge\mathrm{isNat}(n)\wedge\mathrm{isNat}(s)\wedge d=m\times n\wedge \forall a\in m((\varnothing\in n\to f(a,\varnothing)=a)\wedge\forall b\in n(\mathrm{Succ}(b)\in n\to \exists z\in s(z=f(a,\mathrm{Succ}(b))=\mathrm{Succ}(f(a,b)))))$。

我们接着宣称以下$\Sigma_1$句子和$\Pi_1$句子同时定义出一个$\Delta_1^{T_{Ar}}$的函数符号：
$s=m+n\leftrightarrow \exists u\exists v\exists f\exists d\exists t(m\in u\wedge n\in v\wedge \mathrm{+_a}(f,u,v,d,t)\wedge f(m,n)=s)\leftrightarrow\forall u\forall v\forall f\forall d\forall t(m\in u\wedge n\in v\wedge \mathrm{+_a}(f,u,v,d,t)\to f(m,n)=s)$。
:::

::: proof
我们先断言一个事实。

**断言。**
$\mathrm{+_a}(f,m,n,d,s)\to\forall b\in n((\varnothing\in m\to f(\varnothing,b)=b)\wedge\forall a\in m(\mathrm{Succ}(a)\in m\to f(\mathrm{Succ}(a),b)=\mathrm{Succ}(f(a,b))))$。

**证明。** 对$m$和$n$进行二重归纳，这句子不过$\Delta_0$，显然是可以归纳的。

接下来是主要的断言。

**断言。**
$\forall u(\mathrm{isNat}(u)\to\forall v(\mathrm{isNat}(v)\to\exists f\exists d\exists t(\mathrm{+_a}(f,u,v,d,t))))$。

**证明。** 被归纳的句子$\Sigma_1$。
$u=\varnothing$和$v=\varnothing$的情形无需多言，
因此我们直接拿到归纳假设来证明此事对$\mathrm{Succ}(u),\mathrm{Succ}(v)$同样成立。
归纳假设会告诉我们此事对$\mathrm{Succ}(u),v$和$u,\mathrm{Succ}(v)$已经成立，
我们不妨设前者由函数$f_1$和值域$t_1$计算，后者由函数$f_2$和值域$t_2$计算，我们宣称以下事实。

**断言。** $\forall a\in u\forall b\in v(f_1(a,b)=f_2(a,b))$，且$t_1=t_2$。

**证明。** 对前一个命题反证，
若$\exists b\in v\exists a\in u\exists s\in t_1(s=f_1(a,b)\wedge s\not=f_2(a,b))$，
我们用$\Delta_0$分离得到$v$中满足这一条件的全体$b$构成的子集，然后提取最小满足此条件的$b$。
如果$b=\varnothing$，这是矛盾的，因为我们知道$f_1(a,\varnothing)=f_2(a,\varnothing)=a$；
如果$b=\mathrm{Succ}(b')$，这依然矛盾，因为我们知道$f_1(a,b')=f_2(a,b')$，
从而也必须有$f_1(a,b)=f_2(a,b)=\mathrm{Succ}(f_1(a,b'))$。

对后一个命题只需注意到$t_1=t_2=\mathrm{Succ}(f_1(m,n))$，
其中$u=\mathrm{Succ}(m)$而$v=\mathrm{Succ}(n)$。

因此，令$f=f_1\cup f_2\cup\{((u,v),t_1)\}$，$t=\mathrm{Succ}(t_1)$，不难验证它们确实满足条件。

这个主要的断言就告诉我们$\Sigma_1$句子确实满足$\forall m\forall n\exists s$。
接下来只要证明这个$s$唯一，就能确认$\Sigma_1$句子确实定义一个函数，
且顺带证明了$\Pi_1$句子与$\Sigma_1$句子定义了同一件事，从而定义了同一个函数。

反证。如果$s$不唯一，则对应的$f$自然不同，余下的过程不过是再把主要断言中引用的断言的证明再写一次。
:::

::: theorem [$T_{Ar}$]
将集合的卡氏积记为$\times_{Cart}$，
我们定义$\Delta_1^{T_{Ar}}$谓词
$\mathrm{\times_a}(f,m,\\n,d,s)\leftrightarrow\mathrm{isFunOn}(f,d,s)\wedge\mathrm{isNat}(m)\wedge\mathrm{isNat}(n)\wedge\mathrm{isNat}(s)\wedge d=m\times_{Cart} n\wedge \forall a\in m((\varnothing\in n\to f(a,\varnothing)=\varnothing)\wedge\forall b\in n(\mathrm{Succ}(b)\in n\to \exists z\in s(z=f(a,\mathrm{Succ}(b))=f(a,b)+a)))$。

我们接着宣称以下$\Sigma_1$句子和$\Pi_1$句子同时定义出一个$\Delta_1^{T_{Ar}}$的函数符号：
$s=m\times n\leftrightarrow \exists u\exists v\exists f\exists d\exists t(m\in u\wedge n\in v\wedge \mathrm{\times_a}(f,u,v,d,t)\wedge f(m,n)=s)\leftrightarrow\forall u\forall v\forall f\forall d\forall t(m\in u\wedge n\in v\wedge \mathrm{\times_a}(f,u,v,d,t)\to f(m,n)=s)$。
:::

::: proof
我们先断言一个事实。

**断言。**
$\mathrm{\times_a}(f,m,n,d,s)\to\forall b\in n((\varnothing\in m\to f(\varnothing,b)=\varnothing)\wedge\forall a\in m(\mathrm{Succ}(a)\\\in m\to f(\mathrm{Succ}(a),b)=f(a,b)+b))$。

**证明。** 采用这句子的$\Sigma_1$形式对$m$和$n$进行二重归纳。

接下来同样是主断言。

**断言。**
$\forall u(\mathrm{isNat}(u)\to\forall v(\mathrm{isNat}(v)\to\exists f\exists d\exists t(\mathrm{\times_a}(f,u,v,d,t))))$。

**证明。** 采取被归纳句子的$\Sigma_1$形式，$u=\varnothing$和$v=\varnothing$的情形无需多言，
我们同样拿到归纳假设来证明此事对$\mathrm{Succ}(u),\mathrm{Succ}(v)$同样成立。
归纳假设会告诉我们此事对$\mathrm{Succ}(u),v$和$u,\mathrm{Succ}(v)$已经成立，
我们不妨设前者由函数$f_1$和值域$t_1$计算，后者由函数$f_2$和值域$t_2$计算，我们再次宣称以下事实。

**断言。** $\forall a\in u\forall b\in v(f_1(a,b)=f_2(a,b))$，且$t_1+v=t_2+u$。

**证明。** 对前一个命题反证，
若$\exists b\in v\exists a\in u\exists s\in t_1(s=f_1(a,b)\wedge s\not=f_2(a,b))$，
我们用$\Delta_0$分离得到$v$中满足这一条件的全体$b$构成的子集，然后提取最小满足此条件的$b$。
如果$b=\varnothing$，这是矛盾的，因为我们知道$f_1(a,\varnothing)=f_2(a,\varnothing)=\varnothing$；
如果$b=\mathrm{Succ}(b')$，这依然矛盾，因为我们知道$f_1(a,b')=f_2(a,b')$，
从而也必须有$f_1(a,b)=f_2(a,b)=f_1(a,b')+a$。

对后一个命题只需注意到$t_1+v=t_2+u=f_1(m,n)+u+v$，其中$u=\mathrm{Succ}(m)$而$v=\mathrm{Succ}(n)$。

因此，令$f=f_1\cup f_2\cup\{((u,v),f_1(m,n)+u+n)\}$，$t=t_1+v$，不难验证它们确实满足条件。

这个主要的断言就告诉我们$\Sigma_1$句子确实满足$\forall m\forall n\exists s$。
接下来只要证明这个$s$唯一，就能确认$\Sigma_1$句子确实定义一个函数，
且顺带证明了$\Pi_1$句子与$\Sigma_1$句子定义了同一件事，从而定义了同一个函数。
反证手法与加法一模一样。
:::

因此，我们事实上证明了如下事实。

::: theorem (元定理)
$T_{Ar}$有$\Sigma_1-PA$的解释，
此处$\Sigma_1-PA$指的是在$PA$中将数学归纳法限制到$\Sigma_1$算术句子的版本。
进一步，鉴于$\Sigma_1-PA$已有Gödel第二不完备性定理，不弱于$T_{Ar}$的理论均有Gödel第二不完备性定理。
:::

我们也可以证明递归函数的可表示性。

::: theorem (元定理)
$T_{Ar}$有所有递归函数的$\Delta_1^{T_{Ar}}$表示。
:::

::: proof
我们只需要依次处理初始函数、复合函数、正则极小化和原始递归四个过程。
对于初始函数，我们事实上有一个论证起来并不更加困难的断言。

**断言。** 算术语言中的项诱导出的函数都是可在$T_{Ar}$中由$\Delta_1^{T_{Ar}}$公式表示的。

**证明。** 我们归纳。这个项显然是用后继、加法和乘法三种符号拼出来的，所以分类施以讨论。
我们将项$t$定义的函数记为$f_t$，$f_t$的表示是$\varphi_t$。

1. 如果这个项只有一个函数符号，它必然形如$S(x)$或$x+y$或$x+x$或$x\times y$或$x\times x$。
   $ReS_0$就知道$y=\mathrm{Succ}(x)$是$\Delta_0$的，
   $z=x+y$和$z=x+x$和$z=x\times y$和$z=x\times x$是$\Delta_1^{T_{Ar}}$的。

2. 这个项$r$是某个项外面加一个后继符号，即形如$S(t)$。
   归纳假设指出$\varphi_t$是$\Delta_1^{T_{Ar}}$的，
   注意$\varphi_r$既可以是$\exists x(x=f_t\wedge y=\mathrm{Succ}(x))$也可以是
   $\forall x(x=f_t\to y=\mathrm{Succ}(x))$。

3. 这个项$r$是某两个项外面加一个加法符号，即形如$t+s$。
   $\exists x_t\exists x_s(x_t=f_t\wedge x_s=f_s\wedge y=x_t+x_s)\leftrightarrow \forall x_t\forall x_s(x_t=f_t\wedge x_s=f_s\to y=x_t+x_s)$。

4. 这个项$r$是某两个项外面加一个乘法符号，即形如$t\times s$。
   $\exists x_t\exists x_s(x_t=f_t\wedge x_s=f_s\wedge y=x_t\times x_s)\leftrightarrow \forall x_t\forall x_s(x_t=f_t\wedge x_s=f_s\to y=x_t\times x_s)$。

归纳完毕。

接下来处理函数复合，手法照旧。

**断言。** 若
$h_1(x_1,...,x_{\mathfrak{n}}),...,h_\mathfrak{m}(x_1,...,x_{\mathfrak{n}}),g(x_1,...,x_{\mathfrak{m}})$
都有$\Delta_1^{T_{Ar}}$表示，则

$f(x_1,...,x_{\mathfrak{n}})=g(h_1(x_1,...,x_{\mathfrak{n}}),...,h_{\mathfrak{m}}(x_1,...,x_{\mathfrak{n}}))$
也有$\Delta_1^{T_{Ar}}$表示。

**证明。**
$\exists z_1...\exists z_{\mathfrak{m}}(z_1=h_1(x_1,...,x_{\mathfrak{n}})\wedge...\wedge z_\mathfrak{m}=h_\mathfrak{m}(x_1,...,x_{\mathfrak{n}})\wedge y=g(z_1,...,z_{\mathfrak{m}}))\\\leftrightarrow \forall z_1...\forall z_{\mathfrak{m}}(z_1=h_1(x_1,...,x_{\mathfrak{n}})\wedge...\wedge z_\mathfrak{m}=h_\mathfrak{m}(x_1,...,x_{\mathfrak{n}})\to y=g(z_1,...,z_{\mathfrak{m}}))$。

接下来处理正则极小化。

**断言。** 若已知对每组$x_1,...,x_{\mathfrak{n}}$均存在$y$使得$f(x_1,...,x_\mathfrak{n},y)=0$，
且$f$有$\Delta_1^{T_{Ar}}$表示，
则$g(x_1,...,x_{\mathfrak{n}})=\mu y(f(x_1,...,x_\mathfrak{n},y)=0)$同样有$\Delta_1^{T_{Ar}}$表示。

**证明。** $y=g(x_1,...,x_{\mathfrak{n}})$由
$f(x_1,...,x_{\mathfrak{n}},y)=\varnothing\wedge\forall z\in y(f(x_1,...,x_{\mathfrak{n}},y)\not=\varnothing)$
定义。

最后处理原始递归，我们同样用哥德尔的巧妙技术来编码计算历史。

**断言。** $\alpha,\beta,J,K,L$均有$\Delta_1^{T_{Ar}}$表示。

**证明。** 回忆定义。

1. $\alpha(c,d,i)=\mu r(\exists q<c(c=q\times (1+d\times (i+1))+r))$

2. $J(a,b)=\frac12(a+b)(a+b+1)+a$

3. $K(p)=\mu a<p(\exists b<p(J(a,b)=p)\vee J(a,p)=p)$，$K(0)=0$

4. $L(p)=\mu b<p(\exists a<p(J(a,b)=p))$，$L(0)=0$，$L(1)=1$

5. $\beta(s,i)=\alpha(K(s),L(s),i)$

由以前的断言显然。

**断言。** 若$g(x_1,...,x_{\mathfrak{n}})$和$h(x_1,...,x_{\mathfrak{n}+2})$都是有$\Delta_1^{T_{Ar}}$
表示递归函数，
则它们原始递归生成的函数$f(x_1,...,x_{\mathfrak{n}+1})$也是有$\Delta_1^{T_{Ar}}$表示的递归函数。

**证明。** 令
$F(x_1,...,x_{\mathfrak{m}},y)=\mu s(\beta(s,0)=g(x_1,...,x_{\mathfrak{m}})\wedge\forall i\in y(\beta(s,\mathrm{Succ}(i))=h(x_1,...,x_{\mathfrak{m}},y,\beta(s,i))))$，
以前的断言使它$\Delta_1^{T_{Ar}}$可表示，
所以
$f(x_1,...,x_{\mathfrak{n}},\\x_{\mathfrak{n}+1})=\beta(F(x_1,...,x_{\mathfrak{n}},x_{\mathfrak{n}+1}),x_{\mathfrak{n}+1})$
同样$\Delta_1^{T_{Ar}}$可表示。

综合上述断言证毕。
:::

特别地，我们知道$\mathrm{Con}(ZFC-(Inf))$、$\mathrm{Con}(ReS)$和$\mathrm{Con}(PA)$等价。
