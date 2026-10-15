---
title: 原始递归函数，集合版本
---

基本（Rudimentary）在经典递归论中恰好指的是$\mathbb{N}$上的$\Delta_0$可定义性，
但我们显然常关注的更是原始递归。
我们这一节介绍集合版本的原始递归函数，
并追随Rathjen证明它们恰是$KP$可证的$\Sigma_1$函数符号——与$\mathbb{N}$上的原始递归函数恰是$PA$
可证递归的函数符号遥相呼应。

::: definition
我们预定一些（当然是有穷个）函数符号$\mathrm{G}_\mathfrak{i}$，然后在扩展语言中这样说：
在以下步骤下有穷步内被构造出来的函数符号$F$称作在$(\mathrm{G}_\mathfrak{i})$下原始递归的函数符号，
记为$F\in\mathrm{Prim}(\mathrm{G}_\mathfrak{i})$：

1. 取初始函数$\mathrm{G}_\mathfrak{i}$。

2. 取初始函数$F(...)=\varnothing$。

3. 取初始函数$F(x_0,...,x_\mathfrak{n})=x_\mathfrak{k}$。

4. 取初始函数$F(x_0,x_1)=x_0\cup\{x_1\}$。

5. 取初始函数$F(x_0,x_1,x_2,x_3)$，当$x_2\in x_3$时其值为$x_0$，否则其值为$x_1$。

6. 复合。

7. 递归：
   $F(x_0,...,x_{\mathfrak{n}+1})=G(x_0,...,x_{\mathfrak{n}+1},\bigcup\{F(x,x_1,...,x_{\mathfrak{n}+1})|x\in x_0\})$。

如果没有任何$\mathrm{G}_\mathfrak{i}$被引用，我们就直接写$\mathrm{Prim}$。
如果一个谓词的特征函数是$\mathrm{Prim}(...)$函数，则称这个谓词是$\mathrm{Prim}(...)$谓词。
:::

接下来的一系列定理是可以预计的。

::: theorem
我们列举以下性质。

1. 基本函数均原始递归。

2. $KP$可证原始递归函数为$\Sigma_1$函数符号。

3. 原始递归函数允许对原始递归谓词用分情形定义。

4. 原始递归函数允许带原始递归谓词的受限极小化。

5. $\Delta_0$可定义的关系必为原始递归谓词。

6. 原始递归函数允许带原始递归谓词的取像集操作。

7. 原始递归函数允许用属于关系进行递归定义。

8. 原始递归函数允许用序数指标进行迭代。

:::

::: proof
我们逐条证明。

1. 第一条只需逐一验证基本函数诸构造方案均为原始递归所覆盖。

   1. $F(x_0,...,x_{\mathfrak{n}-1})=x_\mathfrak{i}$显然也是原始递归的初始函数。

   2. $\{x_1,x_2\}=(\varnothing\cup\{x_1\})\cup\{x_2\}$。

   3. 我们先验证受限极小化。
      如果$G(x,x_0,...,x_{\mathfrak{n}-1})$是原始递归的，
      我们希望证明$F(x_0,...,x_{\mathfrak{n}-1})=\bigcup_{x\in x_0}g$同样原始递归；
      我们先来造$H(x,x_0',x_0,...,x_{\mathfrak{n}-1},y)$，
      它在$x\in x_0'$时值为$G(x,x_0,...,x_{\mathfrak{n}-1})$，否则值为$y$；
      这显然只需用最后一个初始函数在合适的地方复合一个$G$就能得到它原始递归。
      我们现在递归定义
      $D(x,x_0',x_0,...,x_{\mathfrak{n}-1})=H(x,x_0',x_0,...,x_{\mathfrak{n}-1},\bigcup\{D(x',x_0',x_0,...,x_{\mathfrak{n}-1})|x'\in x\})$，
      这当然也是原始递归的。
      最后只需发现
      $D(x_0,x_0,x_0,...,x_{\mathfrak{n}-1})=H(x_0,x_0,x_0,...,x_{\mathfrak{n}-1},\bigcup_{x\in x_0}D(x,x_0,x_0,...,x_{\mathfrak{n}-1}))=\bigcup_{x\in x_0}H(x,x_0,x_0,...,x_{\mathfrak{n}-1},\bigcup...)=\bigcup_{x\in x_0}G(x,x_0,...,x_{\mathfrak{n}-1})=F(x_0,...,x_{\mathfrak{n}-1})$。

   4. $x_1\backslash x_2=\bigcup_{x\in x_1}F(\varnothing,\{x\},x,x_2)$，这$F$是最后一个初始函数。

2. 第二条同样逐一验证原始递归函数诸构造方案均为$KP$所证。

   1. 初始函数中最后最奇怪的那个$y=F(x_0,x_1,x_2,x_3)$有$\Delta_0$定义
      $(x_2\in x_3\wedge y=x_0)\vee(x_2\not\in x_3\wedge y=x_1)$。

   2. 复合时添加足量的存在以保证$\Sigma_1$。

   3. 递归无非是在$\mathrm{TCl}$递归定义原理上稍作修改。

3. 这意味着如果$R$是原始递归谓词，$G,H$是原始递归函数，则$F$同样原始递归：它在$R$真时取值$G$，
   否则取值$H$；只要注意$R$原始递归意味着$R$真当且仅当特征函数$\chi_R$的值包括$\varnothing$。

4. 这意味着如果$G(x,x_0,...,x_{\mathfrak{n}-1})$是原始递归的，$R$是原始递归谓词，
   我们希望证明$F(x_0,...,x_{\mathfrak{n}-1})=\bigcup\{g|x\in x_0\wedge R\}$同样原始递归；
   这不过是在一般的受限极小化上面再做判定（用最后一个初始函数）。

5. 否定同上视作一次分情形定义，用或连接是把特征函数的两个计算结果并起来。
   如果$R$原始递归，$\exists x\in y(R)$的特征函数的值是$\bigcup_{x\in y}\chi_R$。

6. 这意味着如果函数$F(x,x_0,...,x_{\mathfrak{n}-1})$和关系$R(x,x_0,...,x_{\mathfrak{n}-1})$
   原始递归，
   则
   $F_R(``y,x_0,...,x_{\mathfrak{n}-1})=\{z|\exists x\in y(z=F(x,x_0,...,x_{\mathfrak{n}-1}))\wedge R(x,x_0,...,x_{\mathfrak{n}-1})\}$
   同样原始递归；其实这恰是$\bigcup\{\{F\}|x\in y\wedge R\}$。

7. 我们定义里给的递归方案不太对劲，
   因为传给$G$的额外参数并不是$F(\upharpoonright x_0,x_1,...,x_{\mathfrak{n}-1})$而是
   $\bigcup F(``x_0,x_1,...,x_{\mathfrak{n}-1})$，
   我们这里要证明的是如果把前者传给$G$递归而成的$F$仍原始递归。
   我们事实上还能给多一点，
   把$F(\upharpoonright \mathrm{TCl}(x_0),x_1,...,x_{\mathfrak{n}-1})$都送给$G$；
   要得到之前承诺的递归方案的话，只需要稍在$G$上动动手脚。

   我们做
   $H(x_0,...,x_{\mathfrak{n}-1})=y\cup\{(x,G(x,...,x_{\mathfrak{n}-1},y\upharpoonright x))|x\in x_0\}$，
   其中$y=\bigcup_{x\in x_0}H(x,x_1,...,x_{\mathfrak{n}-1})$；
   这个$H$所用的递归方案正是定义中的那套，所以自然是原始递归的，
   我们来证$H(x_0,...,x_{\mathfrak{n}-1})=F\upharpoonright \mathrm{TCl}(x_0)$。
   对$x_0$施行$\in$归纳法，鉴于这函数符号$\Sigma_1$，这整句话也是$\Sigma_1$的，所以确实可以归纳，
   其余细节并无难处；$F$进而由复合见证原始递归。

8. 这是在说如果$H,K,L$都原始递归，那如下定义的$F$也原始递归：

   1. $F(\varnothing,x_0,...,x_{\mathfrak{n}-1})=H(x_0,...,x_{\mathfrak{n}-1})$；

   2. $F(\mathrm{Succ}(\alpha),x_0,...,x_{\mathfrak{n}-1})=K(F(\alpha,x_0,...,x_{\mathfrak{n}-1}),\alpha,x_0,...,x_{\mathfrak{n}-1})$；

   3. 对极限序数$\alpha$，
      $F(\alpha,x_0,...,x_{\mathfrak{n}-1})=L(F\upharpoonright \alpha,\alpha,x_0,...,x_{\mathfrak{n}-1})$。

   我们定义$D(y,z)=\bigcup\{(w)_{(2)}^{(1)}|w\in y\wedge (w)_{(2)}^{(0)}=\bigcup z\}$，
   它显然原始递归，
   而我们可以将第二条重新写成
   $F(\mathrm{Succ}(\alpha),x_0,...,x_{\mathfrak{n}-1})=K(D(F(\upharpoonright \mathrm{Succ}(\alpha),x_0,...,x_{\mathfrak{n}-1}),\mathrm{Succ}(\alpha)),\bigcup\mathrm{Succ}(\alpha),x_0,...,x_{\mathfrak{n}-1})$。
   这启示我们这样分情形定义一个$X(v,\alpha,x_0,...,x_{\mathfrak{n}-1})$如下：

   1. 当$\alpha$不是序数的时候，取值为$\varnothing$；

   2. 当$\alpha=\varnothing$时，取值为$H(x_0,...,x_{\mathfrak{n}-1})$；

   3. 当$\bigcup\alpha\in\alpha$时，
      取值为$K(D(v,\alpha),\bigcup\alpha,x_0,...,x_{\mathfrak{n}-1})$；

   4. 当$\bigcup\alpha=\alpha$且$\alpha\not=\varnothing$时，
      取值为$L(v,\alpha,x_0,...,x_{\mathfrak{n}-1})$。

   我们所要的$F$无非是
   $F(\alpha,x_0,...,x_{\mathfrak{n}-1})=X(F\upharpoonright\alpha,\alpha,x_0,...,x_{\mathfrak{n}-1})$。

:::

有了这么多个性质，我们实有信心把大部分常见的东西都指认为原始递归函数了。
我们现在来粗略展示Rathjen怎么证明$KP$可证$\Sigma_1$的函数符号恰是原始递归函数。
我们首先来把$KP$增强一番：

::: definition
我们给出$\Delta_0$弱依赖选择公理模式，记为$\Delta_0-WDC$：
对公式$\varphi(x,y,v_0,...,v_{\mathfrak{n}-1})$，
令$\delta^\varphi(a,b,f,v_0,...,v_{\mathfrak{n}-1})$为
$\mathrm{isOrd}(a)\to(\mathrm{isFun}(f)\wedge \mathrm{dom}(f)=\mathrm{Succ}(a)\wedge f(\varnothing)=b\wedge \forall u\in a(\forall x\in f(u)\exists y\in f(\mathrm{Succ}(u))(\varphi(x,y,v_0,...,v_{\mathfrak{n}-1}))\wedge \forall y\in f(\mathrm{Succ}(u))\exists x\in f(u)(\varphi(x,y,v_0,...,v_{\mathfrak{n}-1}))))$；
对$\Delta_0$公式$\varphi$而言，
$(\Delta_0-WDC)_\varphi$即
$\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\exists y(\varphi)\to\forall a\forall b\exists f(\delta^\varphi))$。
:::

::: theorem [元定理]
$KP$加$\Delta_0$弱依赖选择公理模式可证$\Sigma_1$基础公理模式；我们将记前一公理体系为$KP'$。
:::

::: proof
反设有一$\Pi_1$公式$\varphi(x,...)$即$\forall u(\theta(x,u,...))$（此处$\theta$为一$\Delta_0$
公式）在对$x$归纳时失效，
这意味着$\forall x(\forall y\in x(\varphi(y,...))\to\varphi(x,...))$但存在$a$使得
$\neg\varphi(a,...)$。
为了让$\Delta_0-WDC$生效，
我们注意到条件说$\forall x(\neg\varphi(x,...)\to\exists y\in x(\neg\varphi(y,...)))$，
这句话拆开就是
$\forall x\forall u\exists y\exists v(\neg\theta(x,u,...)\to (y\in x\wedge \neg\theta(y,v)))$；
一方面，这告诉我们有$b$使得$\neg\theta(a,b,...)$；另一方面，
用典范技术将$(x,u)$编码为一个$z$这句话就是
$\forall z\exists w(\neg\theta((z)_{(2)}^{(0)},(z)_{(2)}^{(1)},...)\to\exists w((w)_{(2)}^{(0)}\in (z)_{(2)}^{(0)}\wedge \neg\theta((w)_{(2)}^{(0)},(w)_{(2)}^{(1)},...)))$，
熟知的可替性告诉我们这一坨东西仍然$\Delta_0$。

于是$\Delta_0-WDC$说，任给序数$\alpha$都有长$\mathrm{Succ}(\alpha)$的函数$f$，
$f(\varnothing)=\{(a,b)\}$，
且$f(\mathrm{Succ}(\beta))$里面装了有如上$\Delta_0$句子后继于$f(\beta)$里有序对的有序对。
鉴于$KP$知道$\mathrm{rank}_{\in}$全局，
我们不妨取这$\alpha$为$\mathrm{rank}_\in(a)$的后继序数得到这$f$，
对不超过$\alpha$的全体自然数$n$归纳可证一新的$\Delta_0$性质，它宣称$f(n)\not=\varnothing$，
且$\forall z\in f(n)(\neg\theta((z)_{(2)}^{(0)},(z)_{(2)}^{(1)},...))$，
且$\forall z\in f(n)\exists w\in f(\mathrm{Succ}(n))((w)_{(2)}^{(0)}\in (z)_{(2)}^{(0)})$，
且$\forall w\in f(\mathrm{Succ}(n))\exists z\in f(n)((w)_{(2)}^{(0)}\in (z)_{(2)}^{(0)})$。

鉴于$\mathrm{isNat}$是$\Delta_0$的，
我们可以分离出$\{n\in\mathrm{Succ}(\alpha)|\mathrm{isNat}(n)\}$，
这东西不难证明或者是个自然数或者是$\omega$，我们记之为序数$\xi$。
我们定义从$\xi$出发的函数$g$，$g(n)=\{(z)_{(2)}^{(0)}|z\in f(n)\}$，
则上述结论已经说明$\forall n\in\xi(g(n)\not=\varnothing)$；
我们归纳证明$\forall n\in\xi\forall u\in g(n)(\mathrm{rank}_\in(u)+n\leq\mathrm{rank}_\in(a))$；
注意$\mathrm{rank}_\in$是$\Sigma_1$的，这整条性质是$\Sigma$句子，从而理应可以归纳。
归纳细节并无难处，
唯一值得注意的是在归纳后继步的时候需要注意$\mathrm{rank}_\in$和$+$都是$\Delta^{KP}$的，
从而可以用$\Delta^{KP}$分离公理模式。

现在只有两种可能：如果$\alpha=\mathrm{Succ}(\mathrm{rank}_\in(a))$是自然数，
我们取一个$u\in g(\alpha)$就有$\mathrm{rank}_{\in}(u)+\alpha\leq \mathrm{rank}_\in(a)<\alpha$矛盾；
所以$\alpha$不是自然数，这说明$\xi=\omega$，从而$\bigcup_{n\in\omega}g(n)$不良基，这又矛盾。
:::

::: remark*
不难看出，$\Delta_0-WDC$的主要作用是让我们取出所需的无穷降链。
:::

我们要证明更强的结论：$KP'$可证$\Sigma_1$的函数符号也都是原始递归函数（因而实际用$KP$就能证出来）。
这需要声明一些证明论引理，其具体证明我们不在此处给出。

::: definition
我们先来构造$KP'$的矢列演算$\mathcal{CAL}$。
我们无视结构规则，只用$\neg,\wedge,\vee$三个连接词，同时使用$\forall,\exists$两个量词；
下面列举$\mathcal{CAL}$的语法：

1. 公理有如下诸条：

   1. 逻辑公理：$\Gamma,\varphi,\neg\varphi$；

   2. 等词公理模式：$\Gamma,(a=b)\wedge(\varphi(a\to\varphi(b)))$，
      额外限制$\varphi$只能是$\Delta_0$公式；

   3. 外延公理：$\Gamma,\neg(\forall x\in a(x\in b)\wedge \forall x\in b(x\in a))\vee(a=b)$；

   4. 对集公理：$\Gamma,\exists z(z=\{a,b\})$；

   5. 并集公理：$\Gamma,\exists z(z=\bigcup a)$；

   6. $\Delta_0$分离公理模式：$\Gamma,\exists z(z=\{x\in a|\varphi(x)\})$，
      这里$\varphi$是$\Delta_0$公式；

   7. 集合基础公理：
      $\Gamma,(\neg\exists x\in a(x\in a))\vee \exists y\in a\forall z\in y(\neg z\in a)$；

2. 逻辑推演规则有：

   1. $\wedge$引入：
      $\vdash\Gamma,\varphi$和$\vdash\Gamma,\psi$推出$\vdash\Gamma,\varphi\wedge\psi$；

   2. $\vee$引入（两条）：
      $\vdash\Gamma,\varphi$或$\vdash\Gamma,\psi$推出$\vdash\Gamma,\varphi\vee\psi$；

   3. 受限$\forall$引入：
      $\vdash\Gamma,\neg(a\in b)\vee\varphi(a)$推出$\vdash\Gamma,\forall x\in b(\varphi(x))$；

   4. $\forall$引入：$\vdash\Gamma,\varphi(a)$推出$\vdash\Gamma,\forall x(\varphi(x))$；

   5. 受限$\exists$引入：
      $\vdash\Gamma,(a\in b)\wedge\varphi(a)$推出$\vdash\Gamma,\exists x\in b(\varphi(x))$；

   6. $\exists$引入：$\vdash\Gamma,\varphi(a)$推出$\vdash\Gamma,\exists x(\varphi(x))$；

   7. 切割：$\vdash\Gamma,\varphi$和$\vdash\Gamma,\neg\varphi$推出$\vdash\Gamma$；

3. 非逻辑推演规则有：

   1. $\Delta_0-Coll$：
      $\vdash\Gamma,\forall x\in a\exists y(\varphi(x,y))$推出
      $\vdash\Gamma,\exists z\forall x\in a\exists y\in z(\varphi(x,y))$，
      这里$\varphi$是$\Delta_0$公式；

   2. $\Sigma_1-Ind$：
      $\vdash\Gamma,\exists y\in a\forall z\neg(\varphi(y,z)),\exists z(\varphi(a,z))$推出
      $\Gamma,\exists z(\varphi(b,z))$，这里$\varphi$是$\Delta_0$公式；

   3. $\Delta_0-WDC$：
      $\vdash\Gamma,\exists y(\varphi(a,y))$推出$\vdash\Gamma,\exists f(\delta^\varphi(b,c,f))$，
      这里$\varphi$是$\Delta_0$公式。

下面考虑$\mathcal{CAL}$中推演$\mathbf{d}$，我们照常定义其长度$|\mathbf{d}|$、末推演、
直接子推演和$\mathbf{d}\vdash\Gamma$等概念；为了合理地定义$\mathrm{rank}(\mathbf{d})$，
先定义公式的长度：

1. $\Delta_0$公式的长度统一视为$0$；以下假定不是$\Delta_0$公式，

2. 带二元逻辑连接词：加起来再加一；带$\neg$：加一；

3. 带受限量词：加二；带量词：加一。

现在，$\mathbf{d}$的秩定义为：

1. 如果末推演不是切割，定义为全体直接子推演的秩的上确界；

2. 如果末推演是切割，额外考察被切掉的公式的长度加一。

记存在长$n$秩$k$的对$\Gamma$的推演（这句话）为$\vdash^n_k\Gamma$。
:::

::: -lemma [断言：$\mathcal{CAL}$有效]
$KP'\vdash\varphi$当且仅当$\mathcal{CAL}$中$\vdash\varphi$。
:::

::: -lemma [断言：$\mathcal{CAL}$的切消]
如果$\vdash^n_{k+2}\Gamma$，则$\vdash^m_2\Gamma$，这里$m=2^n_k$，这东西归纳地定义为$2^n_0=n$，
$2^n_{k+1}=2^{2^n_k}$。
:::

但这些还不够，我们还需要以下事实。

::: definition
我们定义$\Delta_0(\Sigma_1)$公式是全体$\Sigma_1$公式前面加受限量词和逻辑连接词构成的公式；
不难意识到它是一类特别的$\Sigma$公式。

对函数$F:\mathbf{V}\times\mathbf{Ord}\to\mathbf{Ord}$，
如果$\forall t\forall\alpha\in\beta(F(t,\alpha)\in F(t,\beta))$，则称$F$严格单增。

对公式$\varphi$，
我们记$\varphi^{\alpha,\beta}_t$为将$\varphi$中全体$\forall x$改为$\forall x\in L_\alpha(t)$、
$\exists x$改为$\exists x\in L_\beta(t)$所得的公式；注意$L_\alpha(t)$是原始递归函数。
:::

::: -lemma [断言：$\mathcal{CAL}$的解释定理]
如果$\varphi(a_1,...,a_\mathfrak{k})$是$\Delta_0(\Sigma_1)$公式，
秩不大于$2$的推演$\mathbf{d}\vdash\varphi$，则存在严格单增的原始递归函数$F$，使得任给序数$\alpha$，
当$a_1,...,a_\mathfrak{k}\in L_\alpha(t)$时均有
$\varphi(a_1,...,a_\mathfrak{k})_t^{\alpha,F(t,\alpha)}$。
:::

我们用这些声明的引理来证明：

::: theorem [元定理]
若$KP'$可证$H(x_1,...,x_\mathfrak{k})$是$\Sigma_1$公式
$\exists z(\varphi(z,y,x_1,...,x_\mathfrak{k}))$定义的函数符号（$\varphi$是$\Delta_0$公式），
则$H$原始递归。
:::

::: proof
放入$\mathcal{CAL}$后用切消可知
$\vdash^m_2\exists w\exists y\in w\exists z\in w(\varphi(z,y,x_1,...,x_\mathfrak{k}))$；
解释定理给我们一个原始递归函数$F(t,\alpha)$，
我们用它做新的原始递归函数$K(x_1,...,x_\mathfrak{k})=L_{F(x,0)}(x)$，
这里$x=\{x_1,...,x_\mathfrak{k}\}$，则$\exists w\in K\exists y\in w\exists z\in w(\varphi)$，
从而$H=\bigcup\{y\in K|\exists z\in K(\varphi)\}$原始递归。
:::

对于$\mathrm{Prim}(\mathrm{G}_\mathfrak{i})$与扩展语言中的$KP(\mathrm{G}_\mathfrak{i})$，
我们有类似的定理，但这里就不再展示了。
