---
title: 从DB到DS
---

{@sec:从DB到DS}

我们现在考虑$DB_0$的一个加强。

::: definition
定义$\Pi_1-DB+(Found)+(Inf)+(FinSub)$为$DS$。
:::

$DS$有一种奇妙的自增强现象，我们最好品鉴一番。

::: definition [$T_{Ar}$]
定义以下$\Pi_2$预函数，称作$y$是$x$的有穷子集族：
$y=\mathrm{FinSub}(x)\leftrightarrow \forall z\in y(\forall w\in z(w\in x)\wedge\operatorname*{isFin}(z))\wedge\forall z(\forall w\in z(w\in x)\wedge\operatorname*{isFin}(z)\to z\in y)$
:::

这正是有穷子集族公理会给我们带来的那个函数符号。
我们将在$DB_0$中造出$\Delta_{0;;FS}$（$FS$是$\mathrm{FinSub}$的缩写）公式们的一系列正规形式，
以剥离出这些$\mathrm{FinSub}$量词。
所谓限制（Limited），即指$\Delta_{0;;FS}$；所谓受限（Restricted），即指$\Delta_0$。

我们首先将嵌套的量词解开，因而可以直接对约束其他约束变元的自由变元做处理。

::: theorem [元定理：第一限制正规形]
若$\Delta_{0;;FS}$公式$\varphi(x_0,...,x_{\mathfrak{n}})$共有$\mathfrak{m}+1$个限制或受限量词，
则对每个元自然数$\mathfrak{j}\leq \mathfrak{m}$存在两个对应的元自然数
$\mathfrak{k}_\mathfrak{j}\leq \mathfrak{n}$和$\mathfrak{l}_\mathfrak{j}$，
$\mathfrak{m}+1$个新变元符号$y_0,...,y_{\mathfrak{m}}$和一个$\Delta_{0;;FS}$公式
$\psi_1(x_0,...,x_{\mathfrak{n}},y_0,...,y_{\mathfrak{m}})$，
使得$\psi_1$每个限制或受限量词处均有约束变元被某个$y_\mathfrak{j}$所限，且
$$
DB_0\vdash \forall\vec{x}\forall\vec{y}(\bigwedge_{0\leq \mathfrak{j}\leq \mathfrak{m}}y_\mathfrak{j}=\overbrace{\bigcup...\bigcup}^{\mathfrak{l}_{\mathfrak{j}}\,\,times}x_{\mathfrak{k}_\mathfrak{j}}\to (\varphi\leftrightarrow\psi_1))
$$
:::

::: proof
我们考虑以下四种$ReS_0$可证等价的规约方式。

1. $\forall a\in x\exists b\in a(\phi)\leftrightarrow \forall a\in x\exists b\in\bigcup x(b\in a\wedge \phi)$

2. $\forall a\in\mathrm{FinSub}(x)\exists b\in a(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(x)\exists b\in x(b\in a\wedge \phi)$

3. $\forall a\in x\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in x\exists b\in\mathrm{FinSub}(\bigcup x)(\forall s\in \bigcup(x)(s\in b\to s\in a)\wedge\phi)$

4. $\forall a\in \mathrm{FinSub}(x)\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(x)\exists b\in\mathrm{FinSub}(x)\\(\forall s\in x(s\in b\to s\in a)\wedge\phi)$

将$\varphi$的量词全部集中于前，然后用此归约逐步改写直到符合要求即得$\psi_1$。
:::

我们的目标是加强分离公理模式，因此自然希望全体自由变元受限于某个被分离的集合。

::: theorem [元定理：第二限制正规形]
若$\Delta_{0;;FS}$公式$\varphi(x_0,...,x_{\mathfrak{n}})$共有$\mathfrak{m}+1$个限制或受限量词，
则继承第一限制正规形给出的诸$\mathfrak{k}_\mathfrak{j},\mathfrak{l}_\mathfrak{j}$，
我们在诸$y_\mathfrak{j}$之外再引入$\mathfrak{n}+1$个新自由变元$w_\mathfrak{i}$，然后宣称：
对任意将元自然数集合$\{0,...,\mathfrak{n}\}$划分为三个不交部分$R,S,U$的划分方式，
均存在一个对应的$\Delta_{0;;FS}$公式$\psi_2(x_0,...,x_{\mathfrak{n}},y_0,...,y_{\mathfrak{m}})$，
使得$\psi_2$每个限制或受限量词处均有约束变元被某个$y_\mathfrak{j}$所限，且满足

$$
DB_0\vdash \forall\vec{w}\forall\vec{x}\forall\vec{y}(
\\\bigwedge_{\mathfrak{i}\,\,in\,\,R}x_\mathfrak{i}\in w_\mathfrak{i}\wedge \bigwedge_{\mathfrak{i}\,\,in\,\,S}x_\mathfrak{i}\subseteq w_\mathfrak{i}\wedge \bigwedge_{\mathfrak{i}\,\,in\,\,U}x_\mathfrak{i}=w_\mathfrak{i}
\\\wedge \bigwedge_{\mathfrak{k}_\mathfrak{j}\,\,in\,\,R}y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}+1}w_{\mathfrak{k}_\mathfrak{j}}\wedge \bigwedge_{\mathfrak{k}_\mathfrak{j}\,\,not\,\,in\,\,R}y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}w_{\mathfrak{k}_\mathfrak{j}}
\\\to (\varphi\leftrightarrow\psi_2))
$$
:::

::: proof
直接从第一限制正规形上动手是不行的，我们要改整个转写过程。
注意$R$增厚一层$\in$关系，$S$对应的$x\subseteq w$其实是$\forall a\in x(a\in w)$，而$U$只是变元替换，
我们只处理前两种。我们同样只给出四个规约方式现在发生的变化。

1. $\mathfrak{k}_\mathfrak{j}\,\,in\,\,R$，
   此时前提从$y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}x_{\mathfrak{k}_\mathfrak{j}}$变成了
   $y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}+1}w_{\mathfrak{k}_\mathfrak{j}}$，
   注意$x_{\mathfrak{k}_\mathfrak{j}}\in w_{\mathfrak{k}_\mathfrak{j}}$。

   1. $\forall a\in x\exists b\in a(\phi)\leftrightarrow \forall a\in \bigcup w(a\in x\to \exists b\in\bigcup^2 w(b\in a\wedge \phi))$

   2. $\forall a\in\mathrm{FinSub}(x)\exists b\in a(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(\bigcup w)(\forall b\in \bigcup^2 w(b\in a\to b\in x)\to \exists b\in \bigcup w(b\in a\wedge \phi))$

   3. $\forall a\in x\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in\bigcup w(a\in x\to\exists b\in\mathrm{FinSub}\\(\bigcup^2 w)(\forall s\in \bigcup^2 w(s\in b\to s\in a)\wedge\phi))$

   4. $\forall a\in \mathrm{FinSub}(x)\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(\bigcup w)(\forall b\in\bigcup^2 w(b\in a\to b\in x)\to \exists b\in\mathrm{FinSub}(\bigcup w)(\forall s\in \bigcup w(s\in b\to s\in a)\wedge\phi))$

2. $\mathfrak{k}_\mathfrak{j}\,\,not\,\,in\,\,R$，
   此时前提还是$y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}w_{\mathfrak{k}_\mathfrak{j}}$，
   注意$x_{\mathfrak{k}_\mathfrak{j}}\subseteq w_{\mathfrak{k}_\mathfrak{j}}$。

   1. $\forall a\in x\exists b\in a(\phi)\leftrightarrow \forall a\in w(a\in x\to \exists b\in\bigcup w(b\in a\wedge \phi))$

   2. $\forall a\in\mathrm{FinSub}(x)\exists b\in a(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(w)(\forall b\in \bigcup w(b\in a\to b\in x)\to \exists b\in w(b\in a\wedge \phi))$

   3. $\forall a\in x\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in w(a\in x\to\exists b\in\mathrm{FinSub}(\bigcup w)\\(\forall s\in \bigcup w(s\in b\to s\in a)\wedge\phi))$

   4. $\forall a\in \mathrm{FinSub}(x)\exists b\in\mathrm{FinSub}(a)(\phi)\leftrightarrow \forall a\in\mathrm{FinSub}(w)(\forall b\in\bigcup w(b\in a\to b\in x)\to \exists b\in\mathrm{FinSub}(w)(\forall s\in w(s\in b\to s\in a)\wedge\phi))$

将$\varphi$的量词全部集中于前，然后用此归约逐步改写直到符合要求即得$\psi_2$。
:::

接下来，我们把$\Delta_{0;;FS}$改进为$\Delta_0$。首先延续第一限制正规形的思路。

::: theorem [元定理：第一受限正规形]
若$\Delta_{0;;FS}$公式$\varphi(x_0,...,x_{\mathfrak{n}})$共有$\mathfrak{m}+1$个限制或受限量词，
则继承第一限制正规形给出的诸$\mathfrak{k}_\mathfrak{j},\mathfrak{l}_\mathfrak{j}$，
我们在诸$y_\mathfrak{j}$之外再引入$\mathfrak{m}+1$个新自由变元$z_\mathfrak{j}$，然后宣称：
有一个将元自然数集合$\{0,...,\mathfrak{n}\}$划分为两个不交部分$R_\psi,L_\psi$的划分方式，
使得存在一个对应的$\Delta_{0,}$公式$\psi_3(x_0,...,x_{\mathfrak{n}},z_0,...,z_{\mathfrak{m}})$，
使得$\psi_3$每个受限量词处均有约束变元被某个$z_\mathfrak{j}$所限，且满足

$$
DB_0\vdash \forall\vec{x}\forall\vec{y}\forall\vec{z}(
\\\bigwedge_{\mathfrak{j}\,\,\in\,\,R_{\psi}}(z_\mathfrak{j}=y_\mathfrak{j}\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}x_{\mathfrak{k}_\mathfrak{j}})\wedge \bigwedge_{\mathfrak{j}\,\,\in\,\,L_{\psi}}(z_\mathfrak{j}=\mathrm{FinSub}(y_\mathfrak{j})\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}x_{\mathfrak{k}_\mathfrak{j}})
\\\to (\varphi\leftrightarrow\psi_3))
$$
:::

::: proof
我们只不过是把那些$\mathrm{FinSub}$出现的地方全部提取到了公式$\phi_1$之外。
:::

现在，我们延续第二限制正规形的思路，把第一受限正规形改成更好用的形式。

::: theorem [元定理：第二受限正规形]
若$\Delta_{0;;FS}$公式$\varphi(x_0,...,x_{\mathfrak{n}})$共有$\mathfrak{m}+1$个限制或受限量词，
则继承第一限制正规形给出的诸$\mathfrak{k}_\mathfrak{j},\mathfrak{l}_\mathfrak{j}$，
我们在诸$y_\mathfrak{j}$之外再引入$\mathfrak{n}+1$个新自由变元$w_\mathfrak{i}$和$\mathfrak{m}+1$
个新自由变元$z_\mathfrak{j}$，然后宣称：
有一个将元自然数集合$\{0,...,\mathfrak{n}\}$划分为两个不交部分$R_\psi,L_\psi$的划分方式，
使得对任意将元自然数集合$\{0,...,\mathfrak{n}\}$划分为三个不交部分$R,S,U$的划分方式，
均存在一个对应的$\Delta_{0}$公式$\psi_4(x_0,...,x_{\mathfrak{n}},z_0,...,z_{\mathfrak{m}})$，
使得$\psi_4$每个受限量词处均有约束变元被某个$z_\mathfrak{j}$所限，且满足

$$
DB_0\vdash \forall\vec{w}\forall\vec{x}\forall\vec{y}\forall\vec{z}(
\\\bigwedge_{\mathfrak{i}\,\,in\,\,R}x_\mathfrak{i}\in w_\mathfrak{i}\wedge \bigwedge_{\mathfrak{i}\,\,in\,\,S}x_\mathfrak{i}\subseteq w_\mathfrak{i}\wedge \bigwedge_{\mathfrak{i}\,\,in\,\,U}x_\mathfrak{i}=w_\mathfrak{i}
\\\wedge \bigwedge_{\mathfrak{j}\in R_\psi\,\,and\,\,\mathfrak{k}_\mathfrak{j}\,\,in\,\,R}(z_\mathfrak{j}=y_\mathfrak{j}\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}+1}w_{\mathfrak{k}_\mathfrak{j}})
\\\wedge \bigwedge_{\mathfrak{j}\in L_\psi\,\,and\,\,\mathfrak{k}_\mathfrak{j}\,\,in\,\,R}(z_\mathfrak{j}=\mathrm{FinSub}(y_\mathfrak{j})\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}+1}w_{\mathfrak{k}_\mathfrak{j}})
\\\wedge \bigwedge_{\mathfrak{j}\in R_\psi\,\,and\,\,\mathfrak{k}_\mathfrak{j}\,\,not\,\,in\,\,R}(z_\mathfrak{j}=y_\mathfrak{j}\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}w_{\mathfrak{k}_\mathfrak{j}})
\\\wedge \bigwedge_{\mathfrak{j}\in L_\psi\,\,and\,\,\mathfrak{k}_\mathfrak{j}\,\,not\,\,in\,\,R}(z_\mathfrak{j}=\mathrm{FinSub}(y_\mathfrak{j})\wedge y_\mathfrak{j}=\bigcup^{\mathfrak{l}_\mathfrak{j}}w_{\mathfrak{k}_\mathfrak{j}})
\\\to (\varphi\leftrightarrow\psi_4))
$$
:::

::: proof
我们只不过是把那些$\mathrm{FinSub}$出现的地方全部提取到了公式$\phi_2$之外。
:::

第二受限正规形最终告诉我们如下事实。

::: theorem [元定理]
$DS$有$\Delta_{0;;FS}$分离公理模式。
:::

::: proof
这里当然也可以增强地证明：
对于$\Delta_{0;;FS}$公式$\varphi(x_0,...,x_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$和集合
$D,v_0,...,v_{\mathfrak{n}-1}$，
总能分离出集合
$S=\{(x_0,...,x_{\mathfrak{m}})\in D^{(\mathfrak{m}+1)}|\varphi(x_0,...,\\x_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})\}$。
将$x_0,...,x_{\mathfrak{m}}$设置为$R$，$v_0,...,v_{\mathfrak{n}-1}$设置为$U$，
取第二受限正规形$\psi_4$，则诸参数均$DS$可证存在，所以用$\psi_4$分离即得所要的$S$。
:::

::: corollary
$DS$可证每个递归函数的表示都从宇宙中分离出一个集合。
:::

::: proof
这是因为我们已经可证每个递归函数都有表示，而查考其生成过程可发现它们都是$\Delta_{0;;FS}$可定义的，
从对应的$\omega^{(\mathfrak{n})}$上分离即可。
:::

::: remark*
这意味着我们不再需要$\Sigma_2$基础公理模式来获得自然数加法了。
:::

当然，这个正规形还有别的妙用，我们这里举一个例子。

::: theorem [元定理]
每个$\Pi_{1,FS}$公式都是$DS$可证$\Pi_1$的。
:::

::: proof
取第二受限正规形，然后把$z=\mathrm{isFin}(y)$调为其$\Sigma_1$形式。
:::

我们现在来看$\Delta_{0;;FS}$分离会给我们什么。我们先证明有穷性是$\Delta_1^{DS}$的。

::: definition [Kuratowski有限]
做谓词
$\mathrm{isKFin}(x)\leftrightarrow\forall s(\forall t\in s(t\subseteq x)\wedge\varnothing\in s\wedge \forall t\in s\forall a\in x\exists r\in s(r=t\cup\{a\})\to s=\wp(x))$，
此谓词$\Pi_1$。
:::

::: theorem [$DS$]
Kuratowski有限等价于标准有限。
:::

::: proof
先证明Kuratowski有限蕴含标准有限。
直接查考知$\mathrm{FinSub}(x)=\wp(x)$，特别地$x\in\mathrm{FinSub}(x)$指出$\mathrm{isFin}(x)$，
立即证毕。

还需要证明标准有限则Kuratowski有限。
我们先证明每个自然数的子集都是有穷集，假定$x\subseteq n$，
我们需要证明
$\exists m\in \mathrm{Succ}(n)\exists f\in\mathrm{FinSub}(\omega^{(2)})\\(\mathrm{isBijOn}(f,x,m))$。
用$\Delta_{0;;FS}$分离得
$\{m\in \mathrm{Succ}(n)|\exists f\in\mathrm{FinSub}(\omega^{(2)})\mathrm{isInjOn}\\(f,x,m)\}$，
由于$n$显然属于之此集不空，故得其最小元$m$及对应$f$，只需论证$f$是双射，后略。

于是自然数的子集都有穷，于是自然数总有幂集。
现在考虑通过函数$f$双射于自然数$n$的集合$x$，如果集合$s$中元素均为$x$子集，且$\varnothing\in s$，
且$s$中元素并一个$x$单点子集仍为$s$元素，要证明$x$的子集必属于$s$。
注意到$f$同样将$x$子集双射为自然数$n$子集，故对每个$x$子集均有自然数$m$与之双射，
于是$\mathrm{FinSub}(x)$就是$\wp(x)$且$s$是其子集，只需验证$s=\mathrm{FinSub}(x)$。
假定存在不属于$s$的$x$子集$t$，从$\mathrm{FinSub}(x)$中分离出所有不属于$s$的$t$子集，
然后取这不空集族的交集得到$t$的一个子集$r$。
如果$r$不属于$s$，则$r$的一切子集均属于$s$且$r$不空，显然由$s$定义立即矛盾，因此必有$r$属于$s$。

不妨令$t$通过函数$f$双射于自然数$m$，且$f$将$r$双射为$k\subseteq m$。
显然$k\not=m$，于是不妨设$m\backslash k$通过$g$双射于自然数$l$。
我们证明：
$\forall a\in\mathrm{Succ}(l)\exists b\subseteq t(b\in s\wedge \forall c\in b(c\in r\vee g(f(c))\in a))$。
同样用$\Delta_0$分离加集合基础来模拟这个$\mathrm{Succ}(l)$上的归纳法，
然后在$l\in\mathrm{Succ}(l)$处我们就知道了$t\in s$，产生矛盾。
:::

::: corollary
$\mathrm{isFin}$是$\Delta_1^{DS}$谓词。
:::

::: remark*
注意，如果没有有穷子集族公理，则需要幂集公理和$\Sigma_1$分离公理模式来得到有穷子集族。
:::

最后，我们证明$\mathrm{FinSub}$相关的论断全都是$\Delta_1^{DS}$的。

::: theorem [元定理]
$x\in\mathrm{FinSub}(y)$、$x\subseteq\mathrm{FinSub}(y)$和$x=\mathrm{FinSub}(y)$都$\Delta_1^{DS}$。
:::

::: proof
由于$\mathrm{isFin}$是$\Delta_1^{DS}$的，
我们给出的定义已经直接说明
$x\in\mathrm{FinSub}(y)\\\leftrightarrow x\subseteq y\wedge\mathrm{isFin}(x)$是$\Delta_1^{DS}$的，
$x=\mathrm{FinSub}(y)$是$\Pi_1$的，
$x\subseteq\mathrm{FinSub}(y)\leftrightarrow \forall z\in x(z\subseteq y\wedge\mathrm{isFin}(z))$是
$\Pi_1^{DS}$的。为了证明他俩$\Sigma_1^{DS}$，我们给出一个新的谓词。

**定义。** 记$\Delta_0$公式
$\Psi_{FS}(q,y)\leftrightarrow \varnothing\in q\wedge \forall w\in q\forall x\in y(w\cup\{x\}\in q)$。

**断言。**
$x\subseteq\mathrm{FinSub}(y)\leftrightarrow \exists c(\forall z\in x(z\subseteq y)\wedge\forall z\in x\exists f\in c\exists n\in\omega(\mathrm{isBijOn}\\(f,z,n)))$

**证明。** $c=\mathrm{FinSub}(y\times\omega)$。

**断言。** $x=\mathrm{FinSub}(y)\leftrightarrow x\subseteq\mathrm{FinSub}(y)\wedge \Psi_{FS}(x,y)$

**证明。** 这是因为$\Psi_{FS}(x,y)\to\forall z(z\in\mathrm{FinSub}(y)\to z\in x)$。
反证，假定$z\in\mathrm{FinSub}(y)$不属于$x$，
则由于$\mathrm{FinSub}(z)=\wp(z)\subseteq\mathrm{FinSub}(y)$我们可以查考所有不属于$x$的$z$
子集构成的集族，下同我们之前证明标准有穷则Kuratowski有穷的方案。

这就是我们所要的两个$\Sigma_1$等价形式。
:::
