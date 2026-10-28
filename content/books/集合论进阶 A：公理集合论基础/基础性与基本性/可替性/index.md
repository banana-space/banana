---
title: 可替性
---

<problems>
- “$\mathcal{R}_9$是$GJ_0$可替的”这一引理的证明中，$\mathcal{R}_8(x,y)$似乎应为$\mathcal{R}_9(x,y)$；其中用到的$\mathcal{A}_{14}$在本页没有定义。
</problems>

我们选出以下特殊的函数符号进行考察。

::: definition
我们称以下$\mathcal{R}_1$至$\mathcal{R}_9$为基本算子：

1. $\mathcal{O}_{\varnothing}$：空集存在。

2. $\mathcal{R}_1(x,y)$：对集$\{x,y\}$存在。

3. $\mathcal{R}_2(x,y)$：卡氏积$x\times y$存在。

4. $\mathcal{R}_3(x,y)$：差集$x\backslash y$存在。

5. $\mathcal{R}_4(x)$：并集$\bigcup x$存在。

6. $\mathcal{R}_5(x)$：定义域$\mathrm{dom}(x)$存在。

7. $\mathcal{R}_6(x)$：$\{(a,b)\in x|a\in b\}$对所有集合$x$存在。

8. $\mathcal{R}_7(x)$：$\{(c,b,a)|(a,b,c)\in x\}$对所有集合$x$存在。

9. $\mathcal{R}_8(x)$：$\{(b,a,c)|(a,b,c)\in x\}$对所有集合$x$存在。

10. $\mathcal{R}_9(x,y)$：$\{x''\{w\}|w\in y\}$对所有集合$x,y$存在。

我们再给出下列十四个辅助函数：

1. $\mathcal{A}_0(x)=\{x\}$

2. $\mathcal{A}_1(x,y)=(x,y)$

3. $\mathcal{A}_2(x,y,z)=\{x,(y,z)\}$

4. $\mathcal{A}_3(x,y,z)=(x,y,z)$

5. $\mathcal{A}_4(x,y)=x\cap y$

6. $\mathcal{A}_5(x)=x\backslash x=\varnothing$

7. $\mathcal{A}_6(x)=x\backslash(x\backslash x)=x$

8. $\mathcal{A}_7(x)=\{(a,b)|a\in b\wedge b\in x\}$

9. $\mathcal{A}_8(x)=\{(a,c,b)|(a,b,c)\in x\}$

10. $\mathcal{A}_9(x)=\{(b,a)|(a,b)\in x\}$

11. $\mathcal{A}_{10}(x)=\mathrm{ran}(x)$

12. $\mathcal{A}_{11}(x,y)=\{(a,b)|a\in x\wedge b\in y\wedge a\in b\}$

13. $\mathcal{A}_{12}(x,y)=\{z|x\in w\wedge w\in y\}$

14. $\mathcal{A}_{13}(x,y)=x''\{y\}$

:::

我们引入本小节要考虑的主要概念，
这正是我们在考虑层级$\Gamma_{\mathfrak{n};;F}$的翻译公式的复杂度时应当引入的概念。

::: definition (元定义) [可替性]
在集合论$T$中考虑一个公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$：

1. 若对任何$\Delta_0$公式$\psi(y,u_0,...,u_{\mathfrak{m}-1})$和$v_0,...,v_{\mathfrak{n}-1}$均有
   $\forall x(\varphi(x,v_0,...,\\v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))$仍是
   $\Delta_0^T$公式，则称$\varphi$是$T$的半可替（semi-substitutable）类。

2. 如果$\varphi$不但是$T$半可替类，而且还是$T$可证的真类函数，
   即
   $T\vdash\forall v_0...\forall v_{\mathfrak{n}-1}\exists y\forall x(x=y\leftrightarrow \varphi)$，
   则称$\varphi$是$T$的可替（substitutable）函数。

:::

::: remark*
显然，$F$可替意味着$\Delta_{0;;F}^T$公式的翻译仍是$\Delta_0^T$公式，
从而$\Gamma_{\mathfrak{n};;F}^T$公式的翻译仍是$\Gamma_{\mathfrak{n}}^T$公式。
:::

::: remark*
Grandy&Dodd称之为可替代性（substitutable），而Jensen&Devlin称之为单纯性（simple），
Mathias又称之为合适性（suitable）。
我采取可替这个翻译，
主要是考虑这个性质的用途是让我们把出现在$\Delta_0$公式中的函数符号替代掉而不增加公式的复杂度。
:::

显然可替性比$\Delta_0$的要求更强，我们现在来证明诸常见函数的可替性，首先要引入一个引理。

::: theorem (元定理)
如果$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$是$T$可证的函数符号，则它可替等价于以下两事实同时成立：

1. 谓词$\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to y\in x)$是$\Delta_0^{T}$的；

2. 任给$\Delta_0$公式$\phi(y,u_0,...,u_{\mathfrak{m}-1})$，
   总有公式
   $\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \forall y\in x(\phi(y,u_0,...,u_{\mathfrak{m}-1})))$
   是$\Delta_0^{T}$的。

:::

::: proof
如果$\varphi$半可替，
则这两个事实无非是半可替性的特殊形式（第一个是
$\psi(y,u_0,...,u_{\mathfrak{m}-1})\leftrightarrow u_0\in y$，
第二个是
$\psi(y,u_0,...,u_{\mathfrak{m}-1})\leftrightarrow \forall u\in y(\phi(u,u_0,...,u_{\mathfrak{m}-1}))$）。
因此只证明另一个方向，即如果这两个事实同时成立，则$\varphi$半可替。
对半可替定义中$\psi$的形式进行元归纳。

1. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$中$y$并不出现。此时空语境足以证明
   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow\psi(u_0,...,u_{\mathfrak{m}-1})
   $$

2. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如$y=u_\mathfrak{i}$。此时

   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow
   \\\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to (\forall z\in x(z\in u_i)))\wedge
   \\\forall z\in u_i\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to (z\in x))
   $$

   前一半由第二个事实证明$\Delta_0^T$，后一半由第一个事实证明$\Delta_0^T$。

3. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如$y\in u_\mathfrak{i}$。此时

   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow
   \\\exists z\in u_{\mathfrak{i}}\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to x=z)
   $$

   上一条已经证明了最里面的团块是$\Delta_0^T$的，它外面显然也只加了一个受限量词。

4. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如$u_\mathfrak{i}\in y$。此时

   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow
   \\\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to u_\mathfrak{i}\in x)
   $$

   这直接是第一个事实的特殊形式。

5. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如$\neg\rho(y,u_0,...,u_{\mathfrak{m}-1})$。
   此时我们由归纳假设有
   $$
   \vdash_T\Psi\leftrightarrow \forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to\rho(x,u_0,...,u_{\mathfrak{m}-1}))
   $$
   这里$\Psi(v_0,...,v_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})$是$\Delta_0$句子。
   由于$T$可证$\varphi$是真类函数，我们马上又可推出
   $$
   \vdash_T\Psi\leftrightarrow \exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge\rho(x,u_0,...,u_{\mathfrak{m}-1}))
   $$
   因此
   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow \neg\Psi
   $$
   是$\Delta_0^T$句子。

6. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如
   $\rho_1(y,u_0,...,u_{\mathfrak{m}-1})\wedge \rho_2(y,u_0,...,u_{\mathfrak{m}-1})$。
   此时我们由归纳假设有

   $$
   \vdash_T\Psi_1(v_0,...,v_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})
   \\\leftrightarrow\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to\rho_1(x,u_0,...,u_{\mathfrak{m}-1}))
   $$

   $$
   \vdash_T\Psi_2(v_0,...,v_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})
   \\\leftrightarrow\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to\rho_2(x,u_0,...,u_{\mathfrak{m}-1}))
   $$

   因此
   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow \Psi_1\wedge\Psi_2
   $$
   是$\Delta_0^T$句子。

7. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如
   $\forall u\in u_\mathfrak{i}(\rho(y,u,u_0,...,u_{\mathfrak{m}-1}))$。此时

   $$
   \vdash\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \psi(x,u_0,...,u_{\mathfrak{m}-1}))\leftrightarrow
   \\\forall u\in u_{\mathfrak{i}}\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\to \rho(x,u,u_0,...,u_{\mathfrak{m}-1}))
   $$

   由归纳假设是$\Delta_0^T$句子。

8. $\psi(y,u_0,...,u_{\mathfrak{m}-1})$形如$\forall u\in y(\rho(y,u,u_0,...,u_{\mathfrak{m}-1}))$。
   这是第二个事实。

:::

下面来证明我们想要的第一批事实。我们先指出$DB_0$可替的函数。

::: lemma [$DB_0$] {@DB0可替}
$\mathcal{R}_1$到$\mathcal{R}_8$和全体$\mathcal{A}_\mathfrak{n}$都是$DB_0$可替的。
:::

为证明这一引理，我们给出两个定理。

::: theorem (元定理) [可替函数复合]
固定集合论$T$，
若
$h(y_1,...,y_{\mathfrak{n}}),g_1(x_1,...,x_{\mathfrak{m}})\\,...,g_\mathfrak{n}(x_1,...,x_{\mathfrak{m}})$
均是$T$可替的函数符号（即公式$z=h(...)$和$z=g_\mathfrak{i}(...)$均是$T$可替类），
则$f(x_1,...,x_{\mathfrak{m}})=h(g_1,...,g_{\mathfrak{n}})$同样是$T$可替的函数符号。
:::

::: proof
我们记$z=f(x_1,...,x_{\mathfrak{m}})$为$\psi_f(z,x_1,...,x_{\mathfrak{m}})$，
$z=h(z_1,...,z_{\mathfrak{n}})$为$\psi_h(z,\\z_1,...,z_{\mathfrak{n}})$，
$z_{\mathfrak{i}}=g_{\mathfrak{i}}(x_1,...,x_{\mathfrak{m}})$为
$\psi_{g_{\mathfrak{i}}}(z_{\mathfrak{i}},x_1,...,x_{\mathfrak{m}})$。

任给$\Delta_0$公式$\psi(y,u_0,...,u_{\mathfrak{k}-1})$和$x_1,...,x_{\mathfrak{m}}$，
欲证$\forall z(\varphi_f(z,x_1,...,x_{\mathfrak{m}})\to \psi(z,u_0,...,u_{\mathfrak{k}-1}))$仍是
$\Delta_0^T$公式。我们注意以下事实：

$$
\vdash_T \forall z(\varphi_f(z,x_1,...,x_{\mathfrak{m}})\to \psi(z,u_0,...,u_{\mathfrak{k}-1}))
\\\leftrightarrow \forall z_1(\varphi_{g_1}(z_1,x_1,...,x_{\mathfrak{m}})\to\forall z_2(\varphi_{g_2}(z_2,x_1,...,x_{\mathfrak{m}})\to\dots
\\\to\forall z_{\mathfrak{n}}(\varphi_{g_{\mathfrak{n}}}(z_{\mathfrak{n}},x_1,...,x_{\mathfrak{m}})\to\forall z(\varphi_h(z,z_1,...,z_{\mathfrak{n}})\to\psi(z,u_0,...,u_{\mathfrak{k}-1})))\dots))
$$

由归纳假设由内向外依次展开为$\Delta_0^T$句子即可。
:::

::: theorem (元定理) [可替函数的受限极小化]
固定集合论$T$，若$g(x,x_0,x_1...,x_{\mathfrak{n}})$是$T$可替的函数符号，
且$f(x_0,x_1,...,x_{\mathfrak{n}})=\bigcup_{x\in x_0}g(x,x_0,x_1,...,x_{\mathfrak{n}})$同样是$T$
可证的函数符号，则$f$亦$T$可替。
:::

::: proof
我们记$z=f(x_0,x_1...,x_{\mathfrak{n}})$为$\psi_f(z,x_0,x_1,...,x_{\mathfrak{n}})$，
$z=g(x,x_0,x_1,...,x_{\mathfrak{n}})$为$\psi_g(z,x,x_0,x_1,...,x_{\mathfrak{n}})$。

我们只需验证以下两个句子是$\Delta_0^T$的：

1. $\forall z(\varphi_f(z,x_0,x_1,...,x_{\mathfrak{n}})\to y\in z)$，
   注意到它$T$可证等价于
   $\exists x\in x_0\forall z(\varphi_g(z,x,x_0,...,x_{\mathfrak{n}})\to y\in z)$即可。

2. $\forall z(\varphi_f(z,x_0,x_1,...,x_{\mathfrak{n}})\to \forall y\in z(\psi(y,u_0,...,u_{\mathfrak{m}-1})))$，
   $\psi(y,u_0,...,u_{\mathfrak{m}-1})$是任意$\Delta_0$公式。
   它$T$可证等价于
   $\forall x\in x_0\forall z(\varphi_g(z,x,x_0,...,x_{\mathfrak{n}})\to \forall y\in z(\psi(y,u_0,...,u_{\mathfrak{m}-1})))$。

:::

::: proof [@DB0可替 的证明]
$\mathcal{R}_1$到$\mathcal{R}_8$和全体$\mathcal{A}_\mathfrak{n}$显然全都是$DB_0$可证的函数符号。
接下来的工作无非先是证明某些特别的函数符号是$DB_0$可替的，
然后用它们和以上两个元定理来综合证明这些函数都是$DB_0$可替的。

1. $\mathcal{R}_1(x,y)$：$z\in\mathcal{R}_1(x,y)$等价于$z=x\vee z=y$，
   而$\forall z\in \mathcal{R}_1(x,y)(\psi(z,...))$等价于$\psi(x,...)\wedge\psi(y,...)$。

2. $\mathcal{R}_3(x,y)$：$z\in\mathcal{R}_3(x,y)$等价于$z\in x\wedge\neg(z\in y)$，
   $\forall z\in \mathcal{R}_3(x,y)(\psi(z,...))$等价于
   $\forall z\in x(\neg(z\in y)\to\psi(z,...))$。

3. $\mathcal{A}_0(x)=\mathcal{R}_1(x,x)$。

4. $\mathcal{A}_1(x,y)=\mathcal{R}_1(\mathcal{R}_1(x,y),\mathcal{A}_0(x))$。

5. $\mathcal{A}_2(x,y,z)=\mathcal{R}_1(x,\mathcal{A}_1(y,z))$。

6. $\mathcal{A}_3(x,y,z)=\mathcal{A}_1(\mathcal{A}_1(x,y),z)$。

7. $\mathcal{A}_4(x,y)=\mathcal{R}_3(x,\mathcal{R}_3(x,y))$。

8. $\mathcal{A}_5(x)=\mathcal{R}_3(x,x)$。

9. $\mathcal{A}_6(x)=x$。

10. $\mathcal{R}_2(x,y)=\bigcup_{u\in x}\bigcup_{v\in y}\mathcal{A}_0(\mathcal{A}_1(u,v))$。

11. $\mathcal{R}_4(x)=\bigcup_{u\in x}u$。

12. $\mathcal{R}_5(x)=f(\mathcal{R}_4(\mathcal{R}_4(x)),x)$，此处$f(y,x)=\bigcup_{z\in y}h(z,x)$，
    此处$w=h(z,x)$定义为
    $(w=\varnothing\wedge\forall a\in \mathcal{R}_4(\mathcal{R}_4(x))(\neg(\mathcal{A}_1(a,z)\in x)))\vee(w=\mathcal{A}_0(z)\wedge\exists a\in \mathcal{R}_4(\mathcal{R}_4(x))(\mathcal{A}_1(a,z)\in x))$，
    来验证它可替。
    $b\in h(z,x)$等价于
    $b=z\wedge\exists a_1\in x\exists a_2\in a_1\exists a\in a_2\exists c\in x(c=\mathcal{A}_1(a,z))$，
    而$\forall b\in h(z,x)(\psi(b,...))$等价于
    $\psi(z,...)\wedge \exists a_1\in x\exists a_2\in a_1\exists a\in a_2\exists c\in x(c=\mathcal{A}_1(a,z))$。

13. $\mathcal{R}_6(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为
    $(z=\varnothing\wedge\neg\exists u\in y\exists a\in u\exists b\in u(y=\mathcal{A}_1(a,b)\wedge a\in b))\vee(z=\mathcal{A}_0(y)\wedge\exists u\in y\exists a\in u\exists b\in u(y=\mathcal{A}_1(a,b)\wedge a\in b))$，
    验证其可替从略。

14. $\mathcal{R}_7(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为$y$不是$x$中形如$(a,b,c)$的元素时$z=\varnothing$，
    而$y$是$x$中形如$(a,b,c)$的元素时$z=\{(c,b,a)\}$。

15. $\mathcal{R}_8(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为$y$不是$x$中形如$(a,b,c)$的元素时$z=\varnothing$，
    而$y$是$x$中形如$(a,b,c)$的元素时$z=\{(b,a,c)\}$。

16. $\mathcal{A}_7(x)=\mathcal{R}_6(\mathcal{R}_2(\mathcal{R}_4(x),x))$。

17. $\mathcal{A}_8(x)$与$\mathcal{R}_7$同理。

18. $\mathcal{A}_9(x)=\mathcal{R}_5(\mathcal{A}_8(\mathcal{R}_2(\mathcal{A}_0(\mathcal{A}_5(x)),x)))$。

19. $\mathcal{A}_{10}(x)=\mathcal{R}_5(\mathcal{A}_9(x))$。

20. $\mathcal{A}_{11}(x,y)=\mathcal{R}_6(\mathcal{R}_2(x,y))$。

21. $\mathcal{A}_{12}(x,y)=\mathcal{R}_5(\mathcal{A}_{11}(\mathcal{A}_0(x),y))$。

22. $\mathcal{A}_{13}(x,y)=\mathcal{R}_5(\mathcal{A}_9(\mathcal{A}_4(x,\mathcal{R}_2(\mathcal{R}_4(\mathcal{R}_4(x)),\mathcal{A}_0(y)))))$

:::

剩下最后这个函数仅在$GJ_0$中可证是函数，所以是$GJ_0$可替的。

::: lemma [$GJ_0$]
$\mathcal{R}_9$是$GJ_0$可替的。
:::

::: proof
先来证明它是$GJ_0$可证的函数符号。
注意到
$\mathcal{A}_{14}(x,w)\in\mathcal{R}_4(\mathcal{R}_1(\mathcal{A}_0(\\\mathcal{A}_5(x)),\mathcal{A}_{10}(x)))$，
我们取右边算出来这个东西并上$\{x,y\}$为$X$，
取$\varphi(u,x,y)$为$u\not=x\wedge u\not=y\wedge \exists w\in y(u=\mathcal{A}_{14}(x,w))$，
则$\mathcal{R}_8(x,y)=\{u\in X|\varphi(u,x,y)\}$，又因为参数$x,y\in X$，
我们由基本替代公理就得到$\mathcal{R}_8$是$GJ_0$可证的函数了。
验证$\mathcal{R}_8(x,y)$可替则只需注意
$z\in\mathcal{R}_8(x,y)\leftrightarrow \exists w\in y(z=\mathcal{A}_{14}(x,w))$且
$\forall z\in\mathcal{R}_8(x,y)(\psi(z,...))\leftrightarrow \forall z\in F(x)(z\in\mathcal{R}_8(x,y)\to\psi(z,...))$，
其中$F(x)=\mathcal{R}_4(\mathcal{R}_1(\mathcal{A}_0(\mathcal{A}_5(x)),\mathcal{A}_{10}(x)))$可替。
:::

注意$\mathcal{R}_6$可替的证明，它其实启示我们一个更强的事实。

::: theorem (元定理) [可替函数的分段定义]
如果$\psi(u_0,...,u_{\mathfrak{m}-1})$是$\Delta_0$句子，
$f(x_0,...,x_{\mathfrak{n}-1})$是$T$可替的函数，
则$g(x_0,...,x_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})$同样是$T$可替的函数，
这里$g$在$\psi(u_0,...,u_{\mathfrak{m}-1})$时取值为$f$，在$\neg\psi$时取值为$\varnothing$。
:::

::: proof
显然$z=g(...)\leftrightarrow (\psi\wedge z=f(...))\vee(\neg\psi\wedge z=\varnothing)$，
我们同样只验证那两件事实。

1. $z\in g(...)\leftrightarrow \psi\wedge z\in f(...)$，前半个自然$\Delta_0$，
   后半个由对$f$的要求也必须$\Delta_0^T$。

2. $\forall z\in g(...)(\phi(z,...))\leftrightarrow \psi\wedge\forall z\in f(...)(\phi(z,...))$，
   同理。

:::

接下来，我们引入可替性带来的一个概念。

::: definition (元定义)
假定集合论$T\supseteq DB_0$，
$F(x_0,...,x_{\mathfrak{n}-1}),G(y_0,...,y_{\mathfrak{n}-1})$均是$\Delta_0$的$T$可证类函数，
且$G$是$T$可替的。

1. 如果
   $T\vdash\forall x_0\in y_0...\forall x_{\mathfrak{n}-1}\in y_{\mathfrak{n}-1}(F(x_0,...,x_{\mathfrak{n}-1})\in G(y_0,...,y_{\mathfrak{n}-1}))$，
   则称$G$是$F$的第一类伴生函数。

2. 如果
   $T\vdash\forall x_0\in y_0...\forall x_{\mathfrak{n}-1}\in y_{\mathfrak{n}-1}(F(x_0,...,x_{\mathfrak{n}-1})\subseteq G(y_0,...,y_{\mathfrak{n}-1}))$，
   则称$G$是$F$的第二类伴生函数。

:::

::: remark*
Mathias给它们的名字是1-companion和2-companion。
:::

我们来证明著名的Grandy–Jensen引理。

::: theorem (元定理) [Grandy–Jensen]
假定集合论$T\supseteq DB_0$中$F$有第二类伴生函数$G$，
且$z\in F(x_0,...,x_{\mathfrak{n}-1})$是$\Delta_0^{DB_0}$的，我们断言：

1. $F$可以由基础算子与$G$复合而成。

2. $F''$可以由基本算子与$G$复合而成。

:::

::: proof
分两部分证明。

令
$H(y_0,...,y_{\mathfrak{n}-1})=\{u\in (...(y_0\times y_1)\times...\times y_{\mathfrak{n}-1})\times G(y_0,...,y_{\mathfrak{n}-1})|u=(a,b)\wedge a=(x_0,...,x_{\mathfrak{n}-1})\wedge b\in F(x_0,...,x_{\mathfrak{n}-1})\}$，
这里用到的$\Delta_0$分离公理模式可以用基础算子算出，
所以现在
$F(x_0,...,x_{\mathfrak{n}-1})=\mathcal{A}_{13}(H(\{x_0\},...,\{x_{\mathfrak{n}-1}\}),\\(x_0,...,x_{\mathfrak{n}-1}))$
就也是基础算子与$G$复合而成的了。

如果$(\mathcal{R}_8)$可用，对任意集合$u$，
令
$y_0=\{x_0|\exists v\in u\exists x_1...\exists x_{\mathfrak{n}-1}(v=(x_0,x_1,...,x_{\mathfrak{n}-1}))\}$，
同理收集直到$y_{\mathfrak{n}-1}$，注意它们全部都可以用$\Delta_0$分离从$u$的充分多层并集中分离出来，
所以能用基础算子算出；此时$F''(u)=\mathcal{R}_8(H(y_0,...,y_{\mathfrak{n}-1}),u)$，
因此$F''$确实是基本算子与$G$复合而成。
:::

这个引理将会有重要的作用。
