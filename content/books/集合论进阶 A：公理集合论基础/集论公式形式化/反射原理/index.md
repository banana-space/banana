---
title: 反射原理
---

我们用$\Sigma_\mathfrak{n}$正确基数构成闭无界类这一事实可以简单地验证：

::: theorem [元定理]
$ZFC$可证全反射公理模式。
:::

::: proof
这是因为我们可以取$\Sigma_\mathfrak{n}$公式$\varphi$所要的传递集$u$为$V_\kappa$，
$\kappa$随便取一个$\Sigma_\mathfrak{n}$正确基数。
:::

然而，选择公理其实是完全不必要的。我们可以证明：

::: theorem [元定理：Levy] {@Levy反射}
$Z$加上全反射公理模式等价于$ZF$。
:::

我们首先验证$ZF$可证全反射公理模式。事实上，我们可以证明：

::: theorem [元定理] {@层级反射}
如果$\Psi(x,\alpha)$在$\alpha\in\mathbf{Ord}$上定义出一个单增连续的传递集层级$W_\alpha=\{x|\Psi\}$，
则考虑$\exists \alpha\in\mathbf{Ord}(\Psi)$定义出的类$W=\bigcup_{\alpha\in\mathbf{Ord}}W_\alpha$，
任给句子$\varphi(x_0,...,x_\mathfrak{n})$，我们都有
$$
ZF\vdash\forall\alpha\exists\beta>\alpha(\mathrm{isLimOrd}(\beta)\wedge\forall x_0\in W_\beta...\forall x_\mathfrak{n}\in W_\beta(\varphi^W\leftrightarrow \varphi^{W_\beta}))
$$
:::

::: proof
考虑$\varphi$的构造序列$\varphi_0,...,\varphi_\mathfrak{m}=\varphi$。
我们递归地构造一系列传入$\varphi_\mathfrak{i}$中的所有自由变元的函数
$f_\mathfrak{i}(\mathfrak{i}=0,...,\mathfrak{m})$如下：如果$\varphi_\mathfrak{i}$是原子公式，
或者是之前的东西用逻辑连接词拼起来的，那么$f_\mathfrak{i}$就恒为$\ulcorner 0\urcorner$；
如果$\varphi_\mathfrak{i}$是$\exists y(\varphi_\mathfrak{j})$，
我们取$f_\mathfrak{i}$是最小的满足以下条件的序数$\gamma$：
$\exists y\in W(\varphi_\mathfrak{j})\to\exists y\in W_\gamma(\varphi_\mathfrak{j})$。
进一步，我们取$F(\gamma)$为$f_\mathfrak{i}$取遍$V_\gamma$中所有元素的值所得序数集的上确界加一，
然后从$\alpha$开始迭代地作用$\omega$次$F$得到$\beta$。
现在$W_\beta$中的元素塞进$f_\mathfrak{i}$后的值一定比$\beta$小，
不难归纳地验证$W_\beta$和$W$对所有$\varphi_\mathfrak{i}$意见一致。
:::

我们还需要全反射公理模式对自己的一个增强。

::: theorem [元定理] {@反射增强}
$Z$加上全反射公理模式可对任何有穷多个共享自由变元$v_0,...,v_{\mathfrak{n}-1}$的公式
$\varphi_0,...,\varphi_{\mathfrak{m}}$证明：
$$
\forall z\exists c(z\in c\wedge\mathrm{isSTrans}(c)\wedge \forall v_0\in c...\forall v_{\mathfrak{n}-1}\in c(\bigwedge_{\mathfrak{i}=0,...,\mathfrak{m}}\varphi_\mathfrak{i}\leftrightarrow \varphi_\mathfrak{i}^c))
$$
:::

::: proof
我们先来证明没有要求某个特定的$z\in u$的特例。
我们考察公式$\chi(t,v_0,...,v_{\mathfrak{n}-1})$，
它是$(t=\ulcorner\mathfrak{i}\urcorner\wedge\varphi_\mathfrak{i})$的析取（$\mathfrak{i}$从$0$跑到
$\mathfrak{m}$）。
对此句子使用全反射得到超传递集$c$，
它让$\forall t\in c\forall v_0\in c...\forall v_{\mathfrak{n}-1}\in c(\chi\leftrightarrow\chi^c)$。
现在鉴于$c$超传递，诸$\ulcorner \mathfrak{i}\urcorner$必均属于$c$，
从而我们只需要在此公理上把$t$真的从$\ulcorner 0\urcorner$到$\ulcorner\mathfrak{m}\urcorner$
全部取一遍。

现在把$z$塞进去。
在这一系列$\varphi_\mathfrak{i}$之外，我们再添加两个公式：
第一个是我们要证明的句子不曾全称量化$z$的那一部分，它记为$\varphi_{\mathfrak{m}+1}(z)$；
第二个是我们要证明的句子，也就是$\exists z(\varphi_{\mathfrak{m}+1})$，
它记为$\varphi_{\mathfrak{m}+2}$；
这$\mathfrak{m}+2$个公式共有$z,v_0,...,v_{\mathfrak{n}-1}$共$\mathfrak{n}+1$个自由变元。
对它们全体使用上个版本的加强，我们得到超传递集$c$，它满足：

1. $\forall v_0...\forall v_{\mathfrak{n}-1}(\varphi_\mathfrak{i}\leftrightarrow \varphi_\mathfrak{i}^c)$，
   此处$\mathfrak{i}$跑遍$0$到$\mathfrak{m}$；

2. $\forall z\in c(\varphi_{\mathfrak{m}+1}\leftrightarrow \varphi_{\mathfrak{m}+1}^c)$；

3. $\varphi_{\mathfrak{m}+2}\leftrightarrow \varphi_{\mathfrak{m}+2}^c$。

对每个$z\in c$，我们已有的这个$c$确实见证$\varphi_{\mathfrak{m}+1}$，
因此确实也有$\forall z\in c(\varphi_{\mathfrak{m}+1}^c)$；但这就是$\varphi_{\mathfrak{m}+2}^c$，
所以我们其实知道$\varphi_{\mathfrak{m}+2}$。
:::

::: proof [@Levy反射 的证明]
由 @层级反射，特别取层级$W_\alpha=V_\alpha$即得$ZF$可证全反射公理模式。

下验$Z$加上全反射公理模式推出替代公理模式。

现在对公式$\varphi(x,z,v_0,...,v_{\mathfrak{n}-1})$证明$(Rep)_\varphi$。考虑以下两个句子：

1. $\chi_1(x,z,v_0,...,v_{\mathfrak{n}-1})$是$\varphi(x,z,v_0,...,v_{\mathfrak{n}-1})$；

2. $\chi_2(x,v_0,...,v_{\mathfrak{n}-1})$是$\exists z(\varphi(x,z,v_0,...,v_{\mathfrak{n}-1}))$；

对集合$a$，我们用上面的强化形式（@反射增强）得到超传递集$c\ni a$，
它让$\forall...(\chi_\mathfrak{i}\leftrightarrow \chi_{\mathfrak{i}}^c)$。
注意$\chi_2^c$是$\exists z\in c(\chi_1^c)$，
我们有$\chi_2\leftrightarrow \exists z\in c(\chi_1)$也就是
$\exists z(\varphi)\leftrightarrow\exists z\in c(\varphi)$。现在我们所要的$b$只需从$c$中分离出来。
:::

::: remark*
其实Levy证明了$ZF=S_0+(CRefl)$，这里的弱集合论$S_0$只需要外延、集合基础和满分离公理模式。
:::

一个经典的利用反射原理的错误论证是这样的：$ZF$的每个有穷子集都是一句话，
而反射原理允许$ZF$见证这句话可满足，因此$ZF$的每个有穷子集都可满足，因此$ZF$证明了$ZF$可满足，
但Gödel说$ZF$只要一致就办不到这件事，所以$ZF$不一致，数学大厦轰然倒塌！我们首先指出，
这个论证的一部分是对的。

::: theorem [元定理]
（如果$ZF$一致）$ZF$不可有穷公理化。
:::

::: proof
否则假定$ZF$可有穷公理化为一个句子$\varphi$，
反射原理说明$\varphi\vdash \varphi\leftrightarrow \exists u(u\vDash\varphi)$也就是
$\varphi\vdash\exists u(u\vDash\varphi)$也就是$\varphi\vdash\mathrm{Con}(\varphi)$，显然不可以。
:::

我们只需要把这个论证形式化，就能接着发现它哪里不对了。

::: theorem [元定理]
$ZF$不可证$\forall T\subseteq\ulcorner ZF\urcorner(\mathrm{isFin}(T)\to\exists u(u\vDash T))$。
:::

::: proof
否则紧致性定理指出$ZF\vdash\mathrm{Con}(\ulcorner ZF\urcorner)$矛盾。
:::

::: remark*
问题出在我们暂且居留的宇宙中$\mathrm{isFin}$并不意味着我们可以在元理论里面把它合取成一句话：
谁知道这里的自然数是否标准呢？
:::

::: remark*
因为$ZF$可证$\ulcorner ZF\urcorner$可数从而自带良序，使用紧致性定理无需选择。
:::

在带选择公理的无幂集集合论中，反射原理等价于依赖选择公理模式（因为没幂集，
选择公理不能正常地推出它）。在二阶集合论中，特定形式的反射原理可以为一些大基数做辩护。
在三阶集合论中，反射原理不一致。
在Ackermann集合论（它引入了常元符号$V$作为集合的宇宙，
然后声称真类的宇宙的事实均反射到集合宇宙之中）中，
它对集合宇宙所知的事实恰好是$ZF$所知的事实（因此它在哲学上被抛弃了）。我们将它们的证明留给读者。
