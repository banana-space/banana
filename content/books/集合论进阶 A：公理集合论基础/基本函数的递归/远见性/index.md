---
title: 远见性
notices:
  - name: 问题
    items:
      - 本页面转换自定理与证明环境互相嵌套的原文，相应部分的结构需要整理。
---
这一节，我们来设计基本递归函数对应的弱集合论，并讨论其模型。

::: definition
我们先来定义一系列特别命名的递归方程决定的函数。

1. $Y_1(x)=\{x\}\cup\{Y_1(y)|y\in x\}$

2. $Y_2(x)=x\cup\{\{Y_2(y)\}|y\in x\}$

3. $Y_3(x)=x\cup\bigcup\{\mathbf{T}(Y_3(y))|y\in x\}$

4. $x+\varnothing=x$，$x+\alpha=\bigcup_{\beta\in\alpha}((x+\beta)\cup\{x+\beta\})$

5. $+^x_L(\alpha)=x+\bigcup_{\beta\in\alpha}+^x_L(\beta)$

我们进而命名以下集合论理论。

1. $\varnothing-PROV$由$GJ_0$加满基础公理模式，再如下三条公理而成：$\forall x\exists f(\\\mathrm{isAtt}_{Y_\mathfrak{i}}(\varnothing,f)\wedge x\in\mathrm{dom}(f))$，此处$\mathfrak{i}=1,2,3$。

2. $PROV$由$\varnothing-PROV$加如下公理而成：$\forall x\forall y(\mathrm{isOrd}(y)\to\exists f(\mathrm{isAtt}_{x+}(\\\varnothing,f)\wedge y\in\mathrm{dom}(f)))$。

3. $LPROV$由$PROVI$（即$PROV$加无穷公理）加如下公理而成：$\forall x(\\\mathrm{isOrd}(x)\to\exists f(\mathrm{isAtt}_{+^x_L}(\varnothing,f)\wedge\omega\in\mathrm{dom}(f)))$。

$\varnothing-PROV$的传递模型称作$\varnothing$-远见(provident)集，$PROV$的传递模型称作远见集，$LPROV$的传递模型称作极限远见集。
:::

我们接下来逐步解析这三种远见集有何更好的刻画。首先，我们把$\varnothing$-远见延拓为$p$-远见。

::: definition
如果传递集$P$对取对集操作封闭，且对任何$p$-基本递归函数符号封闭，则称$P$是一个$p$-远见(provident)集。
:::

::: theorem [元定理]
$\varnothing$-远见集的上述两种定义等价。
:::

::: proof
如果传递集$P$对任何（第一）基本递归函数符号封闭，且对取对集操作封闭，则可以通过有序对将二元基本算子包装为一元基本函数，进而是基本递归的，因此$P\vDash GJ_0$；同理，$Y_1,Y_2,Y_3$按定义都是基本递归的函数符号，因此合起来有$P\vDash\varnothing-PROV$。

稍困难的方向是证明若$P\vDash\varnothing-PROV$则$P$对任何基本递归函数符号封闭。我们指出以下关于$Y_1,Y_2,Y_3$的事实。

**断言。** 任给元自然数$\mathfrak{n}$与集合$x$，$x\in Y_2^{(\mathfrak{n})}Y_1(x)$。

**证明。** 归纳法。$\mathfrak{n}=0$时，由$Y_1$定义显然$x\in Y_1(x)$；如果$x\in y\subseteq Y_2(y)$，则显然$x\in Y_2(y)$。

**定义。** 我们将$\exists x_1...\exists x_{\mathfrak{n}-1}(x_0\in x_1\in...\in x_{\mathfrak{n}-1}\in x_{\mathfrak{n}})$记为$x_0\in_{\mathfrak{n}}x_{\mathfrak{n}}$，特别地记$x=y$为$x\in_0 y$。

**断言。** 如果$x\in y$，则$Y_2^{(\mathfrak{n})}(x)\in_{2^\mathfrak{n}}Y_2^{(\mathfrak{n})}(y)$。

**证明。** 归纳法。$\mathfrak{n}=0$显然，又注意到$Y_2(y)\in\{Y_2(y)\}\in Y_2(x)$（这同时是$\mathfrak{n}=1$的情景），我们在归纳步有$Y_2^{(\mathfrak{n})}(Y_2(y))\in_{2^{\mathfrak{n}}}Y_2^{(\mathfrak{n})}(\{Y_2(y)\})\in_{2^{\mathfrak{n}}}Y_2^{(\mathfrak{n})}(Y_2(x))$。

**断言（Bowler）。** 如果$F$是$\varnothing$-基本递归的，$2^{\mathfrak{n}}>\mathfrak{c}_F$，则任给$y\in x$，存在$F$的抵达$y$的尝试$f\in Y_3Y_2^{(\mathfrak{n})}Y_1(x)$。

**证明。** 对$x$归纳，$x=\varnothing$显然。取$y\in x$，则$Y_1(y)\in Y_1(x)$，进而$Y_2^{(\mathfrak{n})}(Y_1(y))\in_{2^\mathfrak{n}}Y_2^{(\mathfrak{n})}(Y_1(x))$，取出这么一些$y_0\in...\in y_{2^\mathfrak{n}}$，定义$P(\ulcorner\mathfrak{i}\urcorner)=Y_3(y_\mathfrak{i})$。归纳假设说任给$z\in y$，$P(\varnothing)$都有抵达$z$的一次尝试，于是一定也有$y\in P(\varnothing)$，于是$P(\mathfrak{c}_F)$里就有抵达$y$的一次尝试，于是这次尝试自然也在$P(2^\mathfrak{n})=Y_3(Y_2^{(\mathfrak{n})}(Y_1(x)))$里面。

最后这个断言足以证实若$P\vDash\varnothing-PROV$则$P$对任何基本递归函数符号封闭，我们甚至可以对每个$y\in P$给出抵达之的尝试。
:::

我们有三个重要的定理将$p$-远见与进程结合起来。我们补充一个定义。

::: definition
如果一个集族$x$满足$\forall a\in x\forall b\in x\exists c\in x(a\cup b\subseteq c)$，则称$x$是($\subseteq$-)有向(directed)集族。
:::

::: theorem
1. 若$P$是一个严格的$\omega$-进程且$P(\varnothing)$是$p$-远见集，则$\bigcup_{n\in\omega}P(n)$同样是$p$-远见集。

2. 坚固进程$P$中，$P(\theta)$是$\varnothing$-远见的，当且仅当$\theta$是极限序数。

3. 若有向集族$x$由$p$-远见集构成，则$\bigcup x$同样是$p$-远见集。

:::

::: proof
1. 对集封闭性由每层都有$\mathbf{T}$参与显然；对$p$-基本递归的函数符号$F$，我们只需确认每个$x\in P(\varnothing)$都有抵达之的$F$尝试$f\in P(\varnothing)$，这是因为$x\mapsto F\upharpoonright\mathrm{TCl}(\{x\})$是$p$-和缓的，即得$x\in P(n)$蕴含$F(x)\in P(n\cdot\ulcorner\mathfrak{c}_F\urcorner)$。

2. 运用上一个定理从$\varnothing$开始向上归纳即可。

3. 有向保证仍可以取对集，而远见不过是因为诸函数符号尽皆一元。

:::

接下来，我们来讨论远见集。这里有四个等价刻画。

::: theorem [元定理]
对传递集$P$，以下刻画等价。

1. $P\vDash PROV$。

2. $P\vDash GJ_0$，且$P$满足以下三公理：

   1. $\mathrm{rank}_\in$在$P$之中的尝试可抵达任何$x\in P$。

   2. 序数加法在$P$之中的尝试可抵达任何$\alpha,\beta\in \mathbf{Ord}^P$。

   3. 对任何传递集$c$，朝向$c$的标准进程在$P$之内任意长（换言之，任何$\alpha\in\mathbf{Ord}^P$都在某个朝向$c$的标准进程的定义域之内）。

3. 任取$p,x\in P$和$p$-基本递归函数符号$F$均有$F(x)\in P$。

4. 任取$p\in P$和第三基本递归的函数符号$F(x,y)$均有$F\upharpoonright p^{(2)}\in P$。

:::

在我们同样有两个定理将远见与进程结合起来。

::: theorem
1. 坚固的进程$P$中，$P(\theta)$远见当且仅当$\theta$加性不可分解。

2. 若有一有向集族$x$由远见集构成，则$\bigcup x$同样是远见集。

:::

最后，我们来考察极限远见集；这里有三个等价刻画。

::: theorem
对远见集$P$，以下三个要求等价：

1. $P\vDash LPROV$。

2. 任给$p\in P$和$p$-基本$2$-递归函数符号$F$，$F''P\subseteq P$。

3. 任给$p\in P$和$p$-基本有穷递归函数符号$F$，$F''P\subseteq P$。

:::

我们同样有两个定理。

::: theorem
1. 坚固的进程$P$中，$P(\theta)$是极限远见集当且仅当$\theta$乘性不可分解。

2. 若有一有向集族$x$由极限远见集构成，则$\bigcup x$同样是极限远见集。

:::
