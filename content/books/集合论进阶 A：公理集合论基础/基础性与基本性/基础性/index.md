---
title: 基础性
---

::: theorem (元定理) [by Bernays]
$DB_0$可有穷公理化。
:::

::: proof
我们选取外延公理和九条存在性公理，然后指出这十条公理构成的集合论与$DB_0$等效。
这九条存在性公理分别宣称：

1. $\mathcal{O}_{\varnothing}$：空集存在。

2. $\mathcal{G}_1(x,y)$：对集$\{x,y\}$存在。

3. $\mathcal{G}_2(x,y)$：卡氏积$x\times y$存在。

4. $\mathcal{G}_3(x,y)$：差集$x\backslash y$存在。

5. $\mathcal{G}_4(x)$：并集$\bigcup x$存在。

6. $\mathcal{G}_5(x)$：定义域$\mathrm{dom}(x)$存在。

7. $\mathcal{G}_6(x)$：$\{(a,b)\in x|a\in b\}$对所有集合$x$存在。

8. $\mathcal{G}_7(x)$：$\{(c,b,a)|(a,b,c)\in x\}$对所有集合$x$存在。

9. $\mathcal{G}_8(x)$：$\{(b,a,c)|(a,b,c)\in x\}$对所有集合$x$存在。

这里$\mathcal{G}_1$至$\mathcal{G}_8$又称作Gödel算子或基础算子。
不难看出它们都是$DB_0$可证的函数符号，所以我们的目标是证明它们可以复现$\Delta_0$分离公理模式。
我们对公式的结构做元归纳法，并证明一个稍强的版本的$\Delta_0$分离公理模式：
若$\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$是$\Delta_0$公式，
则
$\forall v_0...\forall v_{\mathfrak{n}-1}\forall x_0...\forall x_{\mathfrak{m}}\exists y\forall z(z\in y\leftrightarrow(z\in x_0\times...\times x_{\mathfrak{m}}\wedge z=(z_0,...,z_{\mathfrak{m}})\wedge \varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})))$。
注意交集$x\cap y=x\backslash(x\backslash y)$可以算出来，
$x=y$可以写作$\forall z\in x(z\in y)\wedge\forall z\in y(z\in x)$，
$x\in x$可以写作$\exists y\in x(y=x)$，我们不妨设$\varphi$中只出现$\exists$、$\neg$、$\wedge$、
$\in$四种符号，且$\in$两边的变元符号总是不同。

1. $\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$形若
   $z_{\mathfrak{i}}\in z_{\mathfrak{j}}(\mathfrak{i}\not=\mathfrak{j})$，
   我们对$\mathfrak{m}$进行归纳。

   1. $\mathfrak{m}=1$，此时共有两种情况。

      1. $0=\mathfrak{i}<\mathfrak{j}=1$，此时$y=\mathcal{G}_6(x_0\cup x_1)\cap (x_0\times x_1)$。

      2. $1=\mathfrak{i}>\mathfrak{j}=0$，
         此时
         $y=\{(b,a)\in x_1\times x_0|(a,b)\in\mathcal{G}_6(x_0\cup x_1)\cap (x_0\times x_1)\}=\mathrm{dom}\{(b,a,c)\in x_0\times x_1\times x_0|(a,b,c)\in(\mathcal{G}_6(x_0\cup x_1)\cap (x_0\times x_1))\times x_0\}$。

   2. $\mathfrak{m}=2$，此时共有六种情况。
      注意$\mathcal{G}_7$和$\mathcal{G}_8$是三阶对称群的两个对换生成元，
      我们可以自由调换三元元组的顺序。

      1. $0=\mathfrak{i}<\mathfrak{j}=1$，
         此时$y=(\mathcal{G}_6(x_0\cup x_1)\cap(x_0\times x_1))\times x_2$。

      2. $0=\mathfrak{i}<\mathfrak{j}=2$，
         此时$y=\{(a,c,b)|(a,b,c)\in (\mathcal{G}_6(x_0\cup x_2)\cap(x_0\times x_2))\times x_1\}$。

      3. $1=\mathfrak{i}<\mathfrak{j}=2$，
         此时$y=\{(c,a,b)|(a,b,c)\in (\mathcal{G}_6(x_1\cup x_2)\cap(x_1\times x_2))\times x_0\}$。

      4. $1=\mathfrak{i}>\mathfrak{j}=0$，
         此时$y=\{(b,a,c)|(a,b,c)\in (\mathcal{G}_6(x_1\cup x_0)\cap(x_1\times x_0))\times x_2\}$。

      5. $2=\mathfrak{i}>\mathfrak{j}=0$，
         此时$y=\{(b,c,a)|(a,b,c)\in (\mathcal{G}_6(x_2\cup x_0)\cap(x_2\times x_0))\times x_1\}$。

      6. $2=\mathfrak{i}>\mathfrak{j}=1$，
         此时$y=\{(c,b,a)|(a,b,c)\in (\mathcal{G}_6(x_2\cup x_1)\cap(x_2\times x_1))\times x_0\}$。

   3. $\mathfrak{m}\geq 3$，此时我们要求出示对$\mathfrak{m}-1$的归纳假设，区分四种情况。

      1. $\mathfrak{i},\mathfrak{j}\not=\mathfrak{m}$：取对$\mathfrak{m}-1$的归纳假设的集合，
         乘之以$x_{\mathfrak{m}}$。

      2. $\mathfrak{i},\mathfrak{j}\not=\mathfrak{m}-1$：取对$\mathfrak{m}-1$的归纳假设的集合，
         乘之以$x_{\mathfrak{m}-1}$，然后交换三元元组中的后两个元素。

      3. $\mathfrak{m}-1=\mathfrak{i}<\mathfrak{j}=\mathfrak{m}$：
         以$x_0\times...\times x_{\mathfrak{m}-2}$乘
         $\mathcal{G}_6(x_{\mathfrak{m}-1}\cup x_{\mathfrak{m}})\cap (x_{\mathfrak{m}-1}\times x_{\mathfrak{m}})$。

      4. $\mathfrak{m}=\mathfrak{i}>\mathfrak{j}=\mathfrak{m}-1$：
         以$x_0\times...\times x_{\mathfrak{m}-2}$乘
         $\mathcal{G}_6(x_{\mathfrak{m}}\cup x_{\mathfrak{m}-1})\cap (x_{\mathfrak{m}}\times x_{\mathfrak{m}-1})$，
         然后交换三元元组中的后两个元素。

2. $\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$形若
   $z_{\mathfrak{i}}\in v_{\mathfrak{j}}$，同样对$\mathfrak{m}$归纳。

   1. $\mathfrak{m}=\mathfrak{i}=0$，此时$y=x_0\cap v_j$。

   2. $\mathfrak{m}\geq 1$，此时我们要求出示对$\mathfrak{m}-1$的归纳假设，区分两种情况。

      1. $\mathfrak{i}<\mathfrak{m}$：取对$\mathfrak{m}-1$的归纳假设的集合，
         乘之以$x_{\mathfrak{m}}$。

      2. $\mathfrak{i}=\mathfrak{m}$：
         $y=x_0\times...\times x_{\mathfrak{m}-1}\times (x_{\mathfrak{m}}\cap v_j)$。

3. $\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$形若
   $v_{\mathfrak{i}}\in z_{\mathfrak{j}}$，
   把它当成
   $\exists z\in z_{\mathfrak{j}}(\forall w\in z(w\in v_\mathfrak{i})\wedge\forall w\in v_\mathfrak{i}(w\in z))$
   即可避免讨论此情况。

4. $\varphi$形若$\neg\psi$，取差集。

5. $\varphi$形若$\psi\wedge\phi$，取交集。

6. $\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$形若
   $\exists z\in z_{\mathfrak{i}}(\psi(z_0,...,z_{\mathfrak{m}},z,v_0,...,v_{\mathfrak{n}-1}))$。
   我们的归纳假设能得到集合
   $y'=\{(z_0,...,z_{\mathfrak{m}},z)\in x_0\times ...\times x_{\mathfrak{m}-1}\times \bigcup(x_{\mathfrak{m}-1})|\psi(z_0,...,z_{\mathfrak{m}},z)\wedge z\in z_{\mathfrak{i}}\}$，
   于是$y=(x_0\times...\times x_{\mathfrak{m}-1})\cap\mathrm{dom}(y')$。

7. $\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$形若
   $\exists z\in v_{\mathfrak{i}}(\psi(z_0,...,z_{\mathfrak{m}},z,v_0,...,v_{\mathfrak{n}-1}))$。
   完全同上，只需修改一个符号。

:::

这提示我们考察以下记号。

::: definition
我们称函数符号$f$是基础（Basic）的，若它可在有穷步内由以下操作得到：

1. 取基础算子$\mathcal{G}_\mathfrak{i}$；

2. 取基础函数符号的复合。

全体基础函数构成的（元）集合记为$\mathcal{B}$。
:::

我们在元语境下指出一个$DB_0$模型有关的显然刻画。

::: theorem (元定理)
传递集$M$是$DB_0$的模型，当且仅当它对$\mathcal{B}$中的每个函数符号封闭。这种集合称作基础闭集。
:::

当然，我们还有：

::: theorem (元定理)
如果传递集$M$是$DB_0$的模型（鉴于上个（元）定理，这是说$\bigcup_{B\in\mathcal{B}}B``(M)=M$），
则令$N=\bigcup_{B\in\mathcal{B}}B``(\mathrm{Succ}(M))$，我们有：任给$DB_0$模型$N'$，
$M\in N'$当且仅当$N\subseteq N'$。特别的，显然有$M\in N$，因此$N$是$DB_0$的模型。
:::

::: proof
显然只要证明$M\in N'$则$N\subseteq N'$，这是因为属于$N$的东西都可以从属于$M$的东西和$M$自己算出来，
而$M\in N'$保证这个计算过程可以在$N'$之内进行。
:::

因此，我们做以下定义。

::: definition
对任何集合$x$，令$\bigcup_{B\in\mathcal{B}}B``(\mathrm{Succ}(x))$为其基础闭后继包，
记为$\mathrm{bsc}(x)$。
:::

当然，我们也可以让它变得更加方便定义。

::: theorem (元定理)
记
$\mathbf{B}(x)=x\cup \bigcup_{\mathfrak{i}=1,2,3}\mathcal{G}_\mathfrak{i}``(x,x)\cup\bigcup_{\mathfrak{i}=4,...,8}\mathcal{G}_\mathfrak{i}``(x)$，
则递归地定义$\mathbf{B}_0(x)=\mathrm{Succ}(x)$和
$\mathbf{B}_{\mathfrak{k}+1}(x)=\mathbf{B}(\mathbf{B}_\mathfrak{k}(x))$，
我们有$\mathrm{bsc}(x)=\bigcup_{\mathfrak{k}\in\omega}\mathbf{B}_\mathfrak{k}(x)$。
:::

这样，整个基础闭后继包就以两种方案被视为（元语境下）$\omega$个集合的并集。

另一方面，我们考虑对$\Delta_0$分离公理模式直接的刻画。

::: definition
对$\Delta_0$公式$\varphi(z_0,...,z_{\mathfrak{m}},v_0,...,v_{\mathfrak{n}-1})$，
考虑它给出的$ReS_0$
预函数符号（称作其分离子）$\mathcal{O}_\varphi(x_0,...,x_{\mathfrak{m}-1},v_0,...,v_{\mathfrak{n}-1})$，
$y=\mathcal{O}_\varphi(...)$定义为
$z\in y\leftrightarrow z\in x_0\times...\times x_{\mathfrak{m}-1}\wedge z=(z_0,...,z_{\mathfrak{m}-1})\wedge \varphi(z_0,...,z_{\mathfrak{m}-1};v_0,...,v_{\mathfrak{n}-1})$。
:::

我们之前的论证可以转述为以下结果。

::: theorem (元定理)
任何$\Delta_0$分离子都是基础函数符号。
:::

然而，倒过来是不对的，
这是因为基础函数符号算出来的东西并不一定要是某个$x_0\times...\times x_{\mathfrak{m}-1}$的子集；
不过这也在某种意义上指出认为卡氏积可以独立于其他基本函数符号之外的想法其实是不自然的。

::: definition
定义
$\{\}``(x_0,...,x_{\mathfrak{n}})=\{\{y_0,...,y_{\mathfrak{n}}\}|y_0\in x_0\wedge...\wedge y_\mathfrak{n}\in x_\mathfrak{n}\}$。
:::
