---
title: 扩展语言中的基础与基本
---

最后，我们来考虑扩展一个谓词的集合论语言$\mathcal{L}_{A}=\{\in,=,A\}$。
注意到在合适的编码方案下，有穷多个新增谓词可以编码为一个谓词，
我们其实是在考虑一大类形如$(X,\in,A_0,...,A_{\mathfrak{n}})$的结构的递归可枚举的（部分）理论。

::: definition (元定义)
对集合论理论$T$，我们称$T^A$为它在$\mathcal{L}_{A}$中的（典范）扩展理论，
这一理论由$T$和下一句子（称作$(Sep)_{A}$）构成：
$\forall x\exists y\forall z(z\in y\leftrightarrow (z\in x\wedge A(z)))$。
我们称这定义的函数符号为$A$的分离子，记为$\mathcal{O}_A$。
:::

这个新增的谓词及其函数符号自然带来问题：我们之前对特殊的$\Delta_0$类所做的工作（基础性、基本性、
可替性）能否移植过来？答案是肯定的。

::: definition
如果函数符号由基础算子与$\mathcal{O}_A$复合而成，则称它是$A$中基础的；
全体$A$中基础函数符号构成的（元）集合记为$\mathcal{B}_A$。
如果它由基本算子与$\mathcal{O}_A$复合而成，则称它是$A$中基本的；
全体$A$中基本函数符号构成的（元）集合记为$\mathcal{R}_A$。
:::

我们还是从$DB_0^A$开始讨论。

::: theorem (元定理)
$DB_0^A$可证$\Delta_{0;A;}$分离公理模式。
:::

::: proof
这是因为唯一新增需要讨论的原子公式形如$A(x)$，而它对应的分离公理模式正好被$\mathcal{O}_A$所算出。
:::

正如基本性有两种等价刻画，$A$中基本性同样有这两种等价刻画。我们仍然先从可替性开始讨论。

::: definition (元定义) [$A$中可替]
我们在集合论$T$的典范扩展理论$T^A$中考虑一个公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$：

1. 若对任何$\Delta_{0}$公式$\psi(y,u_0,...,u_{\mathfrak{m}-1})$和$v_0,...,v_{\mathfrak{n}-1}$均有
   $\forall x(\varphi(x,v_0,...,\\v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))$仍是
   $\Delta_{0,A}^{T^A}$公式，则称$\varphi$是$T$的$A$中半可替类。

2. 如果$\varphi$不但是$T$的$A$中半可替类，而且还是$T^A$可证的类函数，
   即
   $T^A\vdash\forall v_0...\forall v_{\mathfrak{n}-1}\exists y\forall x(x=y\leftrightarrow \varphi)$，
   则称$\varphi$是$T$的$A$中可替的函数。

:::

::: remark*
$A$中半可替要求的$\psi$是$\Delta_0$而非$\Delta_{0,A}$的，
这是考虑到传入$A$的参数在无特别加入的公理的情况下无法拆出来。
一个特别的推论是$A(x)$作为类不是$A$中半可替的，但$\mathcal{O}_A(x)$作为函数是$A$中可替的。
:::

我们同样先引入引理。

::: theorem (元定理)
如果$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$是$T^A$可证的函数符号，
则它在$A$中可替等价于以下两事实同时成立：

1. 谓词$\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to y\in x)$是$\Delta_{0,A}^{T^A}$的；

2. 任给$\Delta_{0,A}$公式$\phi(y,u_0,...,u_{\mathfrak{m}-1})$，
   总有公式
   $\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \forall y\in x(\phi(y,u_0,...,u_{\mathfrak{m}-1})))$
   是$\Delta_{0,A}^{T^A}$的。

:::

::: proof
如果$\varphi$是$A$中半可替的，则这两个事实无非是$A$中半可替性的特殊形式，因此只证明另一个方向，
即如果这两个事实同时成立，则$\varphi$是$A$中半可替的。
对$A$中半可替的定义中的$\psi$的形式进行元归纳，然后照抄可替性的证明。
:::

$A$中可替函数构成的（元）集合同样要对诸多操作封闭。

::: theorem (元定理) [$A$中可替函数的复合]
固定集合论$T$，
若
$h(y_1,...,y_{\mathfrak{n}}),g_1(x_1\\,...,x_{\mathfrak{m}}),...,g_\mathfrak{n}(x_1,...,x_{\mathfrak{m}})$
均是$T$的$A$中可替的函数符号，
则$f(x_1,...,x_{\mathfrak{m}})=h(g_1,...,g_{\mathfrak{n}})$同样是$T$的$A$中可替的函数符号。
:::

::: proof
照抄。
:::

::: theorem (元定理) [$A$中可替函数的受限极小化]
固定集合论$T$，若$g(x,x_0,x_1\\,...,x_{\mathfrak{n}})$是$T$的$A$中可替的函数符号，
且$f(x_0,x_1,...,x_{\mathfrak{n}})=\bigcup_{x\in x_0}g(x,x_0,x_1\\,...,x_{\mathfrak{n}})$同样是$T$的
$A$中可证的函数符号，则$f$亦是$T$的$A$中可替的函数符号。
:::

::: proof
照抄。
:::

::: theorem (元定理) [$A$中可替函数的分段定义]
如果$\psi(u_0,...,u_{\mathfrak{m}-1})$是$\Delta_{0,A}$句子，
$f(x_0,...,x_{\mathfrak{n}-1})$是$T$的$A$中可替的函数，
则$g(x_0,...,x_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})$同样是$T$的$A$中可替的函数，
这里$g$在$\psi(u_0,...,u_{\mathfrak{m}-1})$时取值为$f$，在$\neg\psi$时取值为$\varnothing$。
:::

::: proof
照抄。
:::

当然，我们还需要把Grandy–Jensen引理延拓到这个语境下来。我们同样定义伴生函数。

::: definition (元定义) [$A$中的伴生性]
取集合论$T\supseteq DB_0$，
$F(x_0,...,x_{\mathfrak{n}-1}),G(y_0,\\...,y_{\mathfrak{n}-1})$均是$\Delta_{0,A}$的$T^A$可证类函数，
且$G$是$T$的$A$中可替函数。

1. 如果
   $T^A\vdash\forall x_0\in y_0...\forall x_{\mathfrak{n}-1}\in y_{\mathfrak{n}-1}(F(x_0,...,x_{\mathfrak{n}-1})\in G(y_0,...,y_{\mathfrak{n}-1}))$，
   则称$G$是$F$的第一类$A$中的伴生函数。

2. 如果
   $T^A\vdash\forall x_0\in y_0...\forall x_{\mathfrak{n}-1}\in y_{\mathfrak{n}-1}(F(x_0,...,x_{\mathfrak{n}-1})\subseteq G(y_0,...,y_{\mathfrak{n}-1}))$，
   则称$G$是$F$的第二类$A$中的伴生函数。

:::

我们来延拓Grandy–Jensen引理。

::: theorem (元定理) [扩展Grandy–Jensen]
假定集合论$T\supseteq DB_0$中$F$有第二类$A$中的伴生函数$G$，
且$z\in F(x_0,...,x_{\mathfrak{n}-1})$是$\Delta_{0,A}^{DB_0^A}$的，我们断言：

1. $F$可以由基础算子、$\mathcal{O}_A$与$G$复合而成。

2. $F''$可以由基本算子、$\mathcal{O}_A$与$G$复合而成。

:::

::: proof
分两部分证明。

令
$H(y_0,...,y_{\mathfrak{n}-1})=\{u\in (...(y_0\times y_1)\times...\times y_{\mathfrak{n}-1})\times G(y_0,...,y_{\mathfrak{n}-1})|u=(a,b)\wedge a=(x_0,...,x_{\mathfrak{n}-1})\wedge b\in F(x_0,...,x_{\mathfrak{n}-1})\}$，
这里用到的$\Delta_{0,A}$分离公理模式可以用基础算子和$\mathcal{O}_A$算出，
所以现在
$F(x_0,...,x_{\mathfrak{n}-1})=\mathcal{A}_{13}(H(\{x_0\},...,\\\{x_{\mathfrak{n}-1}\}),(x_0,...,x_{\mathfrak{n}-1}))$
就也是基础算子、$\mathcal{O}_A$与$G$复合而成的了。

如果$(\mathcal{R}_8)$可用，对任意集合$u$，
令
$y_0=\{x_0|\exists v\in u\exists x_1...\exists x_{\mathfrak{n}-1}(v=(x_0,x_1,...,x_{\mathfrak{n}-1}))\}$，
同理收集直到$y_{\mathfrak{n}-1}$，
注意它们全部都可以用$\Delta_{0,A}$分离从$u$的充分多层并集中分离出来，
所以能用基础算子和$\mathcal{O}_A$算出；此时$F''(u)=\mathcal{R}_8(H(y_0,...,y_{\mathfrak{n}-1}),u)$，
因此$F''$确实是基本算子、$\mathcal{O}_A$与$G$复合而成。
:::

最后，我们回到等价性证明上来。

::: theorem (元定理)
下列两种对函数符号$A$中基本性的刻画等价。

1. 称函数符号$f$是$A$中归纳基本的，若它可在有穷步内由以下操作得到：

   1. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}$。

   2. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=\{x_\mathfrak{i},x_\mathfrak{j}\}$。

   3. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}\backslash x_\mathfrak{j}$。

   4. 取分离子$f(x_0,...,x_{\mathfrak{n}-1})=\mathcal{O}_A(x_{\mathfrak{i}})$

   5. 取$A-$归纳基本函数$g$的受限极小化，
      即取
      $f(x_0,x_1,...,x_{\mathfrak{n}-1})=\\\bigcup_{x\in x_0}g(x,x_0,x_1,...,x_{\mathfrak{n}-1})$。

   6. 取$A-$归纳基本函数$h,g_0,...,g_{\mathfrak{m}-1}$的复合，
      即取
      $f(x_0,...,x_{\mathfrak{n}-1})=h(g_0(x_0,...,x_{\mathfrak{n}-1}),...,g_{\mathfrak{m}-1}(x_0,...,x_{\mathfrak{n}-1}))$。

2. 称函数符号$f$是$A$中（算子）基本的，若它可在有穷步内由以下操作得到：

   1. 取基本算子$\mathcal{R}_{\mathfrak{i}}$和$\mathcal{O}_A$。

   2. 取算子基本函数的复合。

:::

::: proof
算子推出归纳的过程中，$A$中归纳基本函数的分段定义元定理的证明只需多讨论一个情况，
即$\psi$形若$A(u_\mathfrak{i})$，
此时$\chi'_\psi(u_0,...,u_{\mathfrak{m}-1})=\mathcal{O}_A(\{u_\mathfrak{i}\})$。

归纳推出算子的过程中，$A$中归纳基本函数均有$A$中基础的第二类伴生函数的证明也只需多讨论一个情况，
即取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=\mathcal{O}_A(x_{\mathfrak{i}})$，
此时它以$F(y_0,...,y_{\mathfrak{n}-1})=\bigcup y_{\mathfrak{i}}$为第二类$A$中的伴生函数。
:::

最后，我们指出：如果$A$是$\Delta_0$可定义的，那么扩展$A$相当于没扩展。

::: theorem (元定理)
任给$\Delta_0$公式$\varphi(x)$，$DB_0^A+(\forall x(A(x)\leftrightarrow \varphi(x)))$可翻译为$DB_0$，
$GJ_0^A+(\forall x(A(x)\leftrightarrow \varphi(x)))$可翻译为$GJ_0$，$A$中基础就是基础，
$A$中基本就是基本，$A$中可替就是可替，$A$中伴生就是伴生。
:::

::: proof
查验定义显然。
:::
