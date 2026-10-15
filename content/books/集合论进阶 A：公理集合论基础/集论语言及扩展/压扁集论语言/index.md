---
title: 压扁集论语言
notices:
  - name: 问题
    items:
      - $ZF^2$的类外延公理结论中的$x=y$似乎应为$X=Y$。
---

本小节意在指出，$\mathfrak{n}=2,3,...$阶集合论本质上无非是一些带包装的一阶集合论，
因此不妨把它们压扁到一阶。

::: definition
$\mathfrak{n}$阶集合论的语言具备以下特色：

1. 变元符号（当然仍然是自然数多个）有$\mathfrak{n}$组，两两不同；

2. 谓词符号与函数符号除了指定元数，还需要对每个传入参数指定变元符号类别；

3. 逻辑连接词不变，量词根据施加到的变元符号的类别分成$\mathfrak{n}$组，但等号不分层；

4. 引入特别的$\epsilon$关系，仅当$x$是$\mathfrak{k}$类变元符号、
   $X$是$\mathfrak{k}+1$类变元符号时可以研究是否$x\epsilon X$。

其模型相比一般意义下的模型同样变化仅仅是论域现在有$\mathfrak{n}$层，
且$\mathfrak{k}+1$层论域是$\mathfrak{k}$层论域的幂集的子集，$\epsilon$解释为其上自然的$\in$关系。
:::

我们以一个二阶集合论$ZF^2$展示如何将其压扁为一阶理论。

::: definition
二阶集合论$ZF^2$的语言仅含0层的关系$\in$和层间自然的$\epsilon$关系，我们将用大小写区分两层变元符号，
但混用$\in$和$\epsilon$。列举公理如下：

1. 集即类：$\forall x\exists X(x=X)$

2. 类外延：$\forall X\forall Y(\forall z(z\in X\leftrightarrow z\in Y)\to x=y)$

3. 对集：$\forall x\forall y\exists z(x\in z\wedge y\in z\wedge\forall w\in z(w=x\vee w=y))$

4. 并集：
   $\forall x\exists y(\forall z\in y\exists w\in x(z\in w)\wedge \forall w\in x\forall z\in w(z\in y))$

5. 幂集：
   $\forall x\exists z(\forall y\in z\forall w\in y(w\in x)\wedge\forall y(\forall w\in y(w\in x)\to y\in z))$

6. 无穷：
   $\exists x(\exists y(y\in x\wedge \neg\exists z(z\in y))\wedge \forall y(y\in x\to \exists z(z\in x\wedge \forall w(w\in z\leftrightarrow(w\in y\vee w= y)))))$

7. 分离：$\forall x\forall X\exists y\forall z(z\in y\leftrightarrow(z\in x\wedge z\in X))$

8. 替代：$\forall F(\mathrm{isFun}(F)\to \forall x\exists y(y=F``(x)))$

9. 基础：$\forall X\exists x(x\in X\wedge \forall y(y\in X\to y\not\in x))$

10. 类构造公理模式：任给0层语言中的公式$\varphi(x,v_0,...,v_{\mathfrak{n}-1})$，
    $\forall v_0...\forall v_{\mathfrak{n}-1}\\\exists X\forall x(x\in X\leftrightarrow\varphi)$

这就是突破了“真类均由一一阶公式定义”的限制后形成的理论。
:::

它被压扁后形成的理论又叫von Neumann–Bernays–Gödel集合论，因此简记为$NBG$或$BG$。

::: definition
$NBG$是一个有带定义一元谓词$\mathrm{isSet}$的一阶集合论，其中有以下公理：

1. $\mathrm{isSet}$的定义：$\forall x(\mathrm{isSet}(x)\leftrightarrow \exists y(x\in y))$

2. 外延：$\forall x\forall y(\forall z(z\in x\leftrightarrow z\in y)\to x=y)$

3. 对集：
   $\forall x\forall y(\mathrm{isSet}(x)\wedge\mathrm{isSet}(y)\to\exists z(\mathrm{isSet}(z)\wedge x\in z\wedge y\in z\wedge\forall w\in z(w=x\vee w=y)))$

4. 并集：
   $\forall x(\mathrm{isSet}(x)\to\exists y(\mathrm{isSet}(y)\forall z\in y\exists w\in x(z\in w)\wedge \forall w\in x\forall z\in w(z\in y)))$

5. 幂集：
   $\forall x(\mathrm{isSet}(x)\to\exists z(\mathrm{isSet}(z)\wedge\forall y\in z\forall w\in y(w\in x)\wedge\forall y(\forall w\in y(w\in x)\to y\in z)))$

6. 无穷：
   $\exists x(\mathrm{isSet}(x)\wedge \exists y(y\in x\wedge \neg\exists z(z\in y))\wedge \forall y(y\in x\to \exists z(z\in x\wedge \forall w(w\in z\leftrightarrow(w\in y\vee w= y)))))$

7. 替代：
   $\forall f(\mathrm{isFun}(f)\to \forall x\exists y(y=f``(x)\wedge(\mathrm{isSet}(x)\to\mathrm{isSet}(y))))$

8. 基础：$\forall x\exists y(y\in x\wedge \forall z(z\in x\to z\not\in y))$

9. 构造：这里只有有穷多句话。

   1. 属于：
      $\exists x\forall y\forall z(\mathrm{isSet}(y)\wedge\mathrm{isSet}(z)\to (y\in z\leftrightarrow (y,z)\in x))$

   2. 等于：$\exists x\forall y(\mathrm{isSet}(y)\to y\in x)$

   3. 非：$\forall x\exists y\forall z(z\in x\leftrightarrow (\mathrm{isSet}(z)\wedge z\not\in y))$

   4. 且+分离：$\forall x\forall y\exists z\forall w(w\in z\leftrightarrow (w\in x\wedge w\in y))$

   5. 存在：
      $\forall x\exists y\forall z(z\in y\leftrightarrow \exists s\in x\exists t(\mathrm{isSet}(t)\wedge s=(t,z)))$

   6. 真类卡氏积：
      $\forall x\forall y\exists z(\forall u\in x\forall v\in y\exists w\in z(z=(u,v))\wedge \forall w\in z\exists u\in x\exists v\in y(w=(u,v)))$

   7. 自由变元易位：
      $\forall x\exists y\exists z\forall a\forall b\forall c(\mathrm{isSet}(a)\wedge\mathrm{isSet}(b)\wedge\mathrm{isSet}(c)\to(((a,b,c)\in x\leftrightarrow (c,b,a)\in y)\wedge((a,b,c)\in x\leftrightarrow(b,a,c)\in z)))$

因此，$NBG$可有穷公理化。
:::

我们首先指出$ZF^2$名称的来由。

::: theorem (元定理)
任给$ZF^2$中0层公式$\varphi$，$ZF^2\vdash\varphi$当且仅当$ZF\vdash\varphi$。
:::

::: proof
显然$ZF\vdash\varphi$会导致$ZF^2\vdash\varphi$，我们重点观察倒过来的方向。
注意到这只需证明$ZF\not\vdash\varphi$则$ZF^2\not\vdash\varphi$，
换言之$\mathrm{Con}(ZF+\neg\varphi)\to\mathrm{Con}(ZF^2+\neg\varphi)$，
我们只需要描述怎么把一个$ZF+\neg\varphi$的模型变为一个$ZF^2+\neg\varphi$的模型。
根据下行LS定理，若$ZF+\neg\varphi$有模型，（鉴于这里出现的都是句子）它有一个可数模型，
不妨令其论域为$\omega$，这个模型形若$(\omega,E)$（这个$E\subseteq\omega^{(2)}$扮演属于的解释）。
显然，我们只需要验证$(\omega,\wp(\omega);E,\mathcal{E})$是$ZF^2+\neg\varphi$的模型，
其中$\wp(\omega)$是二阶变元的论域，
$\mathcal{E}=\{(x,X)\in\omega\times\wp(\omega)|x\in X\}$是关系$\epsilon$的解释，这工作是简单的。
:::

另一方面，很容易证明$NBG$就是$ZF^2$压扁之后的理论。

::: theorem (元定理)
任给$ZF^2$中公式$\varphi$，
将其中$\forall/\exists x(...)$改成$\forall/\exists x(\mathrm{isSet}(x)\to/\wedge...)$，
$\forall/\exists X(...)$改成$\forall/\exists x$后得到对应的$NBG$中公式$\varphi^{\sharp}$，
则$ZF^2\vdash\varphi$当且仅当$NBG\vdash \varphi^\sharp$。
:::

::: proof
我们用$ZF^2$证明$(NBG)^\natural $，再用$NBG$证明$(ZF^2)^\sharp$，余下逻辑工作是简单的；
前者同等简单，我们仅关注后者，而唯一的关键无非是证明七条构造公理足以复现类构造公理模式，
显然应当对相对化到$\mathrm{isSet}$的一阶句子的结构归纳，谁处理了谁由名称一目了然。
:::

类似的，我们可以讨论$ZFC^2$与$NBG+AC$（或称为$BG+AC$）的类似关系，
但请一定将之与$ZFGC^2$或$NBGC$区分。
