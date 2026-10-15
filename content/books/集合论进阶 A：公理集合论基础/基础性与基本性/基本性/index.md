---
title: 基本性
---

现在我们来讨论基本性。
正如基础性恰到好处地刻画了$\Delta_0$分离子的性质，基本性恰到好处地刻画了$\Delta_0$特征函数的性质。

::: definition
我们给出下列对函数符号基本性的刻画。

1. 称函数符号$f$是归纳基本的，若它可在有穷步内由以下操作得到：

   1. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}$。

   2. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=\{x_\mathfrak{i},x_\mathfrak{j}\}$。

   3. 取初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}\backslash x_\mathfrak{j}$。

   4. 取归纳基本函数$g$的受限极小化，
      即取
      $f(x_0,x_1,...,x_{\mathfrak{n}-1})=\\\bigcup_{x\in x_0}g(x,x_0,x_1,...,x_{\mathfrak{n}-1})$。

   5. 取归纳基本函数$h,g_0,...,g_{\mathfrak{m}-1}$的复合，
      即取
      $f(x_0,...,x_{\mathfrak{n}-1})=h(g_0(x_0,...,x_{\mathfrak{n}-1}),...,g_{\mathfrak{m}-1}(x_0,...,x_{\mathfrak{n}-1}))$。

2. 称函数符号$f$是算子基本的，若它可在有穷步内由以下操作得到：

   1. 取基本算子$\mathcal{R}_{\mathfrak{i}}$。

   2. 取算子基本函数的复合。

全体算子基本函数符号构成的（元）集合记为$\mathcal{R}$。
:::

一个自然的期望就是证明这两个基本性的刻画相互等价，而事实的确如此。

::: theorem [元定理] {@算子基本蕴含归纳基本}
算子基本函数都是归纳基本函数。
:::

我们先证明一个引理。

::: theorem [元定理：归纳基本函数的分段定义] {@归纳基本函数的分段定义}
如果$\psi(u_0,...,u_{\mathfrak{m}-1})$是$\Delta_0$句子，
$f(x_0,...,x_{\mathfrak{n}-1})$是归纳基本函数，
则$g(x_0,...,x_{\mathfrak{n}-1},u_0,...,u_{\mathfrak{m}-1})$同样是归纳基本函数，
这里$g$在$\psi(u_0,...,u_{\mathfrak{m}-1})$时取值为$f$，在$\neg\psi$时取值为$\varnothing$。
:::

::: proof
我们证明对每个$\psi$都存在一个特殊的归纳基本函数$\chi'_{\psi}(u_0,...,u_{\mathfrak{m}-1})$，
其在$\psi$成立时取非空集合，在$\psi$不成立时取$\varnothing$。
只要此事成立，就有$g=\bigcup_{y\in\chi_{\psi}}f$是复合后取受限极小化所得。对$\psi$的结构进行元归纳。

1. $\psi$形若$u_\mathfrak{i}\not= u_{\mathfrak{j}}$，
   令
   $\chi'_{\psi}(u_0,...,u_{\mathfrak{m}-1})=(u_\mathfrak{i}\backslash u_{\mathfrak{j}})\cup(u_\mathfrak{j}\backslash u_\mathfrak{i})$。

2. $\psi$形若$\neg\phi$，
   令$\chi'_{\psi}=\{\varnothing\}\backslash(\bigcup_{u\in\chi'_{\phi}}\{\varnothing\})$。

3. $\psi$形若$u_\mathfrak{i}\in u_{\mathfrak{j}}$，
   令
   $\chi'_{\psi}(u_0,...,u_{\mathfrak{m}-1})=\bigcup_{u\in u_{\mathfrak{j}}}\chi'_{u=u_{\mathfrak{i}}}$。

4. $\psi$形若$\phi_1\vee\phi_2$，令$\chi'_{\psi}=\chi'_{\phi_1}\cup\chi'_{\phi_2}$。

5. $\psi$形若$\exists u\in u_{\mathfrak{i}}(\phi(u,u_0,...,u_{\mathfrak{m}-1}))$，
   令$\chi'_{\psi}=\bigcup_{u\in u_{\mathfrak{i}}}\chi'_{\phi}$。

归纳完成，故证明完成。
:::

::: proof [@算子基本蕴含归纳基本 的证明]
显然只需验证每个$\mathcal{R}_\mathfrak{i}$都是归纳基本函数即可。接下来逐个验证即可。

1. $\mathcal{R}_1(x,y)=\{x,y\}$是初始函数。

2. $\mathcal{R}_3(x,y)=x\backslash y$是初始函数。

3. $\mathcal{A}_0(x)=\mathcal{R}_1(x,x)$是复合。

4. $\mathcal{A}_1(x,y)=\mathcal{R}_1(\mathcal{R}_1(x,y),\mathcal{A}_0(x))$是复合。

5. $\mathcal{A}_2(x,y,z)=\mathcal{R}_1(x,\mathcal{A}_1(y,z))$是复合。

6. $\mathcal{A}_3(x,y,z)=\mathcal{A}_1(\mathcal{A}_1(x,y),z)$是复合。

7. $\mathcal{A}_4(x,y)=\mathcal{R}_3(x,\mathcal{R}_3(x,y))$是复合。

8. $\mathcal{A}_5(x)=\mathcal{R}_3(x,x)$是复合。

9. $\mathcal{A}_6(x)=x$是初始函数。

10. $\mathcal{R}_2(x,y)=\bigcup_{u\in x}\bigcup_{v\in y}\mathcal{A}_0(\mathcal{A}_1(u,v))$
    是复合后取受限极小化。

11. $\mathcal{R}_4(x)=\bigcup_{u\in x}u$是初始函数取受限极小化。

12. $\mathcal{R}_5(x)=f(\mathcal{R}_4(\mathcal{R}_4(x)),x)$，此处$f(y,x)=\bigcup_{z\in y}h(z,x)$，
    此处$w=h(z,x)$定义为
    $(w=\varnothing\wedge\forall a\in \mathcal{R}_4(\mathcal{R}_4(x))(\neg(\mathcal{A}_1(a,z)\in x)))\vee(w=\mathcal{A}_0(z)\wedge\exists a\in \mathcal{R}_4(\mathcal{R}_4(x))(\mathcal{A}_1(a,z)\in x))$。

13. $\mathcal{R}_6(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为
    $(z=\varnothing\wedge\neg\exists u\in y\exists a\in u\exists b\in u(y=\mathcal{A}_1(a,b)\wedge a\in b))\vee(z=\mathcal{A}_0(y)\wedge\exists u\in y\exists a\in u\exists b\in u(y=\mathcal{A}_1(a,b)\wedge a\in b))$。

14. $\mathcal{R}_7(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为$y$不是$x$中形如$(a,b,c)$的元素时$z=\varnothing$，
    而$y$是$x$中形如$(a,b,c)$的元素时$z=\{(c,b,a)\}$。

15. $\mathcal{R}_8(x)=\bigcup_{y\in x}f(y,x)$，
    此处$z=f(y,x)$定义为$y$不是$x$中形如$(a,b,c)$的元素时$z=\varnothing$，
    而$y$是$x$中形如$(a,b,c)$的元素时$z=\{(b,a,c)\}$。

:::

::: theorem [元定理]
归纳基本函数都是算子基本函数。
:::

::: proof
我们希望证明：若$f$是归纳基本函数，则$f''$是算子基本函数。
自然的想法是利用Grandy–Jensen引理获得作为算子基本函数的第一类伴生函数$f''$，
因此只需证明归纳基本函数均有基础的第二类伴生函数。

1. 初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}$以
   $F(y_0,...,y_{\mathfrak{n}-1})=\bigcup y_\mathfrak{i}$为第二类伴生函数。

2. 初始函数$f(x_0,...,x_{\mathfrak{n}-1})=\{x_\mathfrak{i},x_\mathfrak{j}\}$以
   $F(y_0,...,y_{\mathfrak{n}-1})=\bigcup\bigcup(y_\mathfrak{i}\times y_{\mathfrak{j}})$
   为第二类伴生函数。

3. 初始函数$f(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}\backslash x_\mathfrak{j}$同样以
   $F(y_0,...,y_{\mathfrak{n}-1})=\bigcup y_\mathfrak{i}$为第二类伴生函数。

4. $f(x_0,x_1,...,x_{\mathfrak{n}-1})=\bigcup_{x\in x_0}g(x,x_0,x_1,...,x_{\mathfrak{n}-1})$且$g$
   已有第二类伴生函数$G$，
   取$F(y_0,...,y_{\mathfrak{n}-1})=G(\bigcup y_0,y_0,...,y_{\mathfrak{n}-1})$。

5. $f(x_0,...,x_{\mathfrak{n}-1})=h(g_0(x_0,...,x_{\mathfrak{n}-1}),...,g_{\mathfrak{m}-1}(x_0,...,x_{\mathfrak{n}-1}))$
   且$h$已有第二类伴生函数$H$，$g_{\mathfrak{i}}$有第一类伴生函数$G_{\mathfrak{i}}$，
   取$F=H(G_\mathfrak{i})$。

注意，在函数复合的归纳步骤中我们使用的是第一类伴生函数，但这并无妨碍，
因为我们归纳的命题足以临时把这个第一类伴生函数拿给我们。

因此，若$f$是归纳基本函数，则$f''$是算子基本函数。
对$\mathfrak{n}$元归纳基本函数$f$，
我们令$\tilde{f}(x)$在$x=(x_\mathfrak{i})$时取$f(x_{\mathfrak{i}})$，在其他时候取$\varnothing$，
则$\tilde{f}$同样是归纳基本函数；因此$\tilde{f}''$是算子基本函数。
特别地，$f(x_{\mathfrak{i}})=\bigcup \tilde{f}''(\{(x_\mathfrak{i})\})$也是算子基本函数。
:::

今后，我们将把归纳基本函数和算子基本函数合称基本函数；我们甚至额外得到一个定理。

::: theorem [元定理]
对某个类$\varphi$，其判别函数$\chi_{\varphi}$（在$\varphi$成立时取$\{\varnothing\}$，
不成立时取$\varnothing$）是基本的，当且仅当它是$\Delta_0$的。
:::

::: proof
$\Delta_0$的类$\varphi$由[引理](@归纳基本函数的分段定义)有$\chi'$，
取$\neg\neg\varphi$的$\chi'$为$\chi$，不难验证它符合要求；如果$\chi$是基本的，则它是可替的，
特别地有公式$\chi=\{\varnothing\}$是$\Delta_0$的。
:::

::: remark*
因此，我们有时也把$\Delta_0$的类称作基本类。
然而，函数符号基本显然严格强于其图像（或者换言之，它作为一个类）基本，因此我们希望尽量避免这一称谓。
:::

我们接着指出$GJ_0$的有穷公理化。

::: theorem [元定理]
$GJ_0$由外延公理、空集存在公理和诸基本算子存在公理共同给出有穷公理化。
:::

::: proof
我们只需证明每个由$(rRep)$证明存在的集合事实上都可以用基本函数算出来。
注意到每个$(rRep)$给出的$t\in w$其实都是
$t_{\varphi(u,v_0,...,v_{\mathfrak{n}-1})}(x^{(\mathfrak{n}+1)})$的第$\mathfrak{n}+1$层值域（这个$t$
是分离子），因此$F:(v_0,...,v_{\mathfrak{n}-1})\mapsto t$是基础的，
进而由Grandy–Jensen引理有$F''$在$GJ_0$中可证是（算子）基本函数，因此有$w=F''(x^{(\mathfrak{n})})$。
:::

这同样指出一个事实。

::: theorem [元定理]
传递集$M$是$GJ_0$的模型，当且仅当它对$\mathcal{R}$中的每个函数符号封闭。这种集合称作基本闭集。
:::

这样，我们大约能得到一个对函数符号要求的层谱：基本性推出$GJ_0$可替性，后者又推出$\Delta_0$可定义性。
Grandy的反例指出，基本性严格强于$GJ_0$可替性，且亦严格强于$\Delta_0$可定义性，
其原理是基本性只能有穷地提升$\mathrm{rank}_\in$，但我们此处不再讨论。

为了与$x$的基本闭包（包含给定集合$x$的最小的基本闭集）区分，
我们称$x$的后继的基本闭包为$x$的基本闭后继包，记为$\mathrm{rud}(x)$。
在这一小节的最后，我们来考察如何构造性地生成包含给定集合$x$的后继的最小的基本闭集，有三个方案。

::: definition
定义以下三个基本函数，记$v=\mathrm{Succ}(u)$。

1. （Jensen）$\mathbf{S}_{J}(u)=v\cup \bigcup_{\mathfrak{i}=1,2,3,9}\mathcal{R}_{\mathfrak{i}}''(v^{(2)})\cup\bigcup_{\mathfrak{i}=4,5,6,7,8}\mathcal{R}_{\mathfrak{i}}''(v)$

2. （Schindler–Zeman）$\mathbf{S}_{SZ}(u)=v\cup \bigcup_{\mathfrak{i}=1,2,3,9}\mathcal{R}_{\mathfrak{i}}''(v^{(2)})\cup\bigcup_{\mathfrak{i}=4,5,6}\mathcal{R}_{\mathfrak{i}}''(v)\cup\bigcup_{\mathfrak{i}=1,13,14,...,19}\mathcal{A}_\mathfrak{i}''(v^{(2)})$，
   简记为$\mathbf{S}$

3. （Mathias）$\mathbf{T}(u)=v\cup\bigcup_{\mathfrak{i}=1,3}\mathcal{R}_{\mathfrak{i}}''(u^{(2)})\cup\bigcup_{\mathfrak{i}=4,5,6}\mathcal{R}''(u)\cup\bigcup_{\mathfrak{i}=2,9}\{\{u\cap\mathcal{R}_\mathfrak{i}(x,y)\}|x,y\in u\}\cup\bigcup_{\mathfrak{i}=7,8}\{\{u\cap\mathcal{R}_\mathfrak{i}(x)\}|x\in u\}\cup\mathcal{A}_{14}''(u^{(2)})$

这里新增的辅助基本函数如下。

1. $\mathcal{A}_{14}(x,y)=\{(b,a,c)|a\in x,(b,c)\in y\}$

2. $\mathcal{A}_{15}(x,y)=\{(b,c,a)|a\in x,(b,c)\in y\}$

3. $\mathcal{A}_{16}(x,y)=(y_{(2)}^{(0)},x,y_{(2)}^{(1)})$

4. $\mathcal{A}_{17}(x,y)=(y_{(2)}^{(0)},y_{(2)}^{(1)},x)$

5. $\mathcal{A}_{18}(x,y)=\{(y_{(2)}^{(0)},x),y_{(2)}^{(1)}\}$

6. $\mathcal{A}_{19}(x,y)=\{(y_{(2)}^{(0)},y_{(2)}^{(1)}),x\}$

:::

要用它们生成集合$x$的基本闭后继包，
我们相当于至少能证实它们每个操作进行$\omega$
次后全体计算结果能被包起来做成一个集合（也就是递归计算），
这需要这个集合论足以施展第二基本递归（见下文），且能见证$GJ_0$的一致性。
我们此时暂且不考虑这些问题，而是写出一系列元命题。

Jensen的$\mathbf{S}_{J}$在历史上最早出现。它没有什么特别的性质，就只是一个生成器而已。

::: theorem [元定理]
$x\in\mathrm{rud}(u)$，
当且仅当有一个（元）自然数$\mathfrak{n}$使得$x\in\mathbf{S}_J^{(\mathfrak{n})}(u)$，
这里上标（通过元递归定义）是迭代次数。
:::

::: proof
先证当方向，记$v=\mathrm{Succ}(u)$。
如果基本闭集$r\supseteq v$，由基本闭集的定义当有$\mathbf{S}_J(u)\subseteq r$，
进而（元）归纳可证对每个$\mathfrak{n}$均有$\mathbf{S}_J^{(\mathfrak{n})}(u)\subseteq r$。

要证明仅当方向，
（元）归纳不难证明
$\mathfrak{n}<\mathfrak{m}\to \mathbf{S}_J^{(\mathfrak{n})}(u)\subseteq\mathbf{S}_J^{(\mathfrak{m})}(u)$，
因此只需要证实每个$\mathcal{R}_\mathfrak{i}$计算某个$\mathbf{S}_J^{(\mathfrak{n})}(u)$
中元素所得结果均在某个$\mathbf{S}_J^{(\mathfrak{m})}(u)$之中，
然而这通过取$\mathfrak{m}=\mathfrak{n}+1$即可实现。
:::

Schindler–Zeman的$\mathbf{S}_{SZ}$的好处是，如果$u$是传递的，那么$\mathbf{S}_{SZ}(u)$同样传递。

::: theorem [元定理]
$x\in\mathrm{rud}(u)$，
当且仅当有一个（元）自然数$\mathfrak{n}$使得$x\in\mathbf{S}_{SZ}^{(\mathfrak{n})}(u)$。
如果$u$传递，则$\mathbf{S}_{SZ}(u)$同样传递。
:::

::: proof
验证前一件事的过程完全同上，注意$\mathcal{A}_{14,15}$取代了$\mathcal{R}_{7,8}$；我们来证实后一件事。
如果$t\in \mathbf{S}_{SZ}(u)$且$u$传递，我们希望证实$t\subseteq\mathbf{S}_{SZ}(u)$。
如果$t\in v$则$t=u\vee t\in u$，由$u$传递有$t\subseteq u\subseteq\mathbf{S}_{SZ}(u)$，验证其余情况。

1. $t\in\mathcal{R}_1''(v^{(2)})$，则有$x,y\in v$使得$t=\{x,y\}$，
   于是$t\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

2. $t\in\mathcal{R}_2''(v^{(2)})$，则有$x,y\in v$使得$t=x\times y$，
   此时$x,y\subseteq v$指出
   $t\subseteq v^{(2)}=\mathcal{A}_1''(v^{(2)})\subseteq\mathbf{S}_{SZ}(u)$。

3. $t\in\mathcal{R}_3''(v^{(2)})$，则有$x,y\in v$使得$t=x\backslash y$，
   此时$t\subseteq x\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

4. $t\in\mathcal{R}_9''(v^{(2)})$，则有$x,y\in v$使得$t=\{x''\{w\}|w\in y\}$，
   于是任给$s\in t$均有$w\in y$使得$s=x''\{w\}$，由$v$传递和$w\in y\in v$知$w\in v$，
   于是$s=\mathcal{A}_{13}(x,w)\in\mathcal{A}_{13}''(v^{(2)})\subseteq \mathbf{S}_{SZ}(u)$。

5. $t\in\mathcal{R}_4''(v)$，则有$x\in v$使得$t=\bigcup x$，
   于是任给$s\in t$均有$y\in x$使得$s\in y$，又注意$v$传递和$s\in y\in x\in v$知$s\in v$，
   因此$t\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

6. $t\in\mathcal{R}_5''(v)$，则有$x\in v$使得$t=\mathrm{dom}(x)$，$t\subseteq\bigcup\bigcup x$，
   而任给$s\in\bigcup\bigcup x$存在$a\in x,b\in a$使得$s\in b$，
   于是$s\in b\in a\in x\in v$和$v$传递指出$s\in v$，因此$t\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

7. $t\in\mathcal{R}_6''(v)$，则有$x\in v$使得$t=\{(a,b)\in x|a\in b\}\subseteq x$，
   于是$t\subseteq x\subseteq v$，因此$t\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

8. $t\in\mathcal{A}_1''(v^{(2)})$，则有$x,y\in v$使得$t=(x,y)$，
   于是$s\in t$当且仅当存在$z=x$或$z=y$使得$s=\{x,z\}$，无论如何$s\in\mathcal{R}_1''(v^{(2)})$，
   因此$t\subseteq\mathcal{R}_1''(v^{(2)})\subseteq\mathbf{S}_{SZ}(u)$。

9. $t\in\mathcal{A}_{13}''(v^{(2)})$，则有$x,y\in v$使得$t=x''\{y\}$，
   于是$s\in t$当且仅当$(s,y)\in x$，于是$s\in\{s\}\in(s,y)\in x\in v$，
   因此$t\subseteq v\subseteq\mathbf{S}_{SZ}(u)$。

10. $t\in\mathcal{A}_{14}''(v^{(2)})$，则有$x,y\in v$使得$t=\{(b,a,c)|a\in x,(b,c)\in y\}$，
    于是$s\in t$当且仅当$a\in x,d\in y,(b,c)=d,x\in v,y\in v$使得
    $s=(b,a,c)=(d_{(2)}^{(0)},a,d_{(2)}^{(1)})=\mathcal{A}_{16}(a,d)\in\mathcal{A}_{16}''(v^{(2)})$，
    因此$t\subseteq\mathcal{A}_{16}''(v^{(2)})\subseteq\mathbf{S}_{SZ}(u)$。

11. $t\in\mathcal{A}_{15}''(v^{(2)})$，则有$x,y\in v$使得$t=\{(b,c,a)|a\in x,(b,c)\in y\}$，
    于是$s\in t$当且仅当$a\in x,d\in y,(b,c)=d,x\in v,y\in v$使得
    $s=(b,c,a)=(d_{(2)}^{(0)},d_{(2)}^{(1)},a)=\mathcal{A}_{17}(a,d)\in\mathcal{A}_{17}''(v^{(2)})$，
    因此$t\subseteq\mathcal{A}_{17}''(v^{(2)})\subseteq\mathbf{S}_{SZ}(u)$。

12. $t\in\mathcal{A}_{16}''(v^{(2)})$，则有$x,y\in v$使得$t=(y_{(2)}^{(0)},x,y_{(2)}^{(1)})$，
    于是$s\in t$当且仅当$s=(y_{(2)}^{(0)},x)$或$s=\mathcal{A}_{18}(x,y)$；
    如果前者则由$y_{(2)}^{(0)}\in\bigcup y\in y\in v$得$s\in \mathcal{A}_1''(v^{(2)})$，
    如果后者则$s\in\mathcal{A}_{18}''(v^{(2)})$，因此无论如何$t\subseteq\mathbf{S}_{SZ}(u)$。

13. $t\in\mathcal{A}_{17}''(v^{(2)})$，则有$x,y\in v$使得$t=(y_{(2)}^{(0)},y_{(2)}^{(1)},x)$，
    于是$s\in t$当且仅当$s=(y_{(2)}^{(0)},y_{(2)}^{(1)})$或$s=\mathcal{A}_{19}(x,y)$；
    如果前者则由$y_{(2)}^{(0)},y_{(2)}^{(1)}\in\bigcup y\in y\in v$得
    $s\in \mathcal{A}_1''(v^{(2)})$，如果后者则$s\in\mathcal{A}_{19}''(v^{(2)})$，
    因此无论如何$t\subseteq\mathbf{S}_{SZ}(u)$。

14. $t\in\mathcal{A}_{18}''(v^{(2)})$，则有$x,y\in v$使得$t=\{(y_{(2)}^{(0)},x),y_{(2)}^{(1)}\}$，
    于是$s\in t$当且仅当$s=(y_{(2)}^{(0)},x)$或$s=y_{(2)}^{(1)}$，
    于是$s\in\mathcal{A}_1''(v^{(2)})$或$s\in v$，无论如何$t\subseteq\mathbf{S}_{SZ}(u)$。

15. $\mathcal{A}_{19}$基本就是$\mathcal{R}_1$。

:::

Mathias的$\mathbf{T}$则更加优秀，它不但把传递集映到传递集，
而且一次只把$\mathrm{rank}_{\in}$（如果能定义的话）提升为其后继。

::: theorem [元定理]
若$u$传递，
则$x\in\mathrm{rud}(u)$当且仅当有一个（元）自然数$\mathfrak{n}$使得
$x\in\mathbf{T}^{(\mathfrak{n})}(u)$，且$\mathbf{T}(u)$同样传递。
如果$\mathrm{rank}_{\in}$可定义，则对任意的$u$，
$\mathrm{rank}_{\in}(\mathbf{T}(u))=\mathrm{Succ}(\mathrm{rank}_{\in}(u))$。
:::

::: proof
验证第一件事的过程略复杂，因为计算结果并不一定在下一层立即出现；
我们直接指出$\mathcal{R}_{1,3,4,5,6}$的结果都在$\mathbf{T}(u)$中，
$\mathcal{R}_{9}$的结果在$\mathbf{T}^{(2)}(u)$中，$\mathcal{R}_2$的结果在$\mathbf{T}^{(3)}(u)$中，
$\mathcal{R}_{7,8}$的结果在$\mathbf{T}^{(5)}(u)$中，验证交由读者。
注意这些断言必须在$u$传递的前提下进行证明。

证明传递集被映到传递集的过程同上啰嗦一番，其中并无本质困难。

我们最后来考虑$\mathrm{rank}_{\in}$的问题，
这里奥秘在于可能提升$\mathrm{rank}_{\in}$的那些操作都被交了个$u$，从而并没有提升；
那一个$\mathrm{Succ}$来自于$v$自己和$\mathcal{R}_1''$。
:::

这以一种更强的方式指出了基本函数只能有限地提升$\mathrm{rank}_{\in}$。

::: theorem [元定理]
任给基本函数符号$F$，存在（元）自然数$\mathfrak{l}$使得：
任给传递集$u$和$x_0,...,x_{\mathfrak{k}-1}\in u$，
总有$F(x_0,...,x_{\mathfrak{k}-1})\in\mathbf{T}^{(\mathfrak{l})}(u)$。
:::
