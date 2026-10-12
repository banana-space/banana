---
title: Lévy 层级
aliases: [Levy 层级]
categories: [集合论]
notices:
  - name: 问题
    items:
      - “绝对性”一节的定义只假定 $N\subseteq M$、$\in^N\subseteq\in^M$，在此条件下随后的定理及其证明中“$\Delta_0^T$ 公式绝对”的论断似乎不成立，似乎还需要 $N$ 在 $M$ 中传递（即 $M$ 是 $N$ 的尾扩张）等条件。
navboxes: [集合论]
---

**Lévy 层级**是一阶[[集合论]]语言中运用复杂度对公式进行分类的一种方式。

## 定义

::: definition
让我们假设一阶集合论语言$\mathcal{L}_{\in}=\{\in,=\}$中逻辑符号有
$\forall,\exists,\wedge,\vee,\neg,\to$六种。
我们新增两类逻辑符号以扩展语言为$\mathcal{L}_{\in}'$，然后给出从扩展语言到此原始语言的翻译。

扩展语言新增两个有界量词符号，
分别记为$\forall^{bd}x\in y$和$\exists^{bd}x\in y$（此处$x,y$是从变元符号表$v_0,v_1,\dots$
中任取的两个变元符号）；由于符号后跟随一个（看似是）原子公式（的字符串），
我们在不致混淆时总是省略上标$bd$。我们在扩展语言中定义：

- 一个公式若仅含除$\forall$与$\exists$之外的逻辑符号，
  则称之为$\Delta_0$公式（有的定义也将其记为$\Sigma_0$公式）；

- 如果一个公式是由对$\Delta_0$公式进行（有限多次）存在量化
  （换言之，在$\Delta_0$公式之前加入有穷多个形若$\exists x$的字符）所得，就称之为$\Sigma_1$公式；

- 如果一个公式是由对$\Delta_0$公式进行任意量化所得，就称之为$\Pi_1$公式；

- 归纳地，如果一个公式是由对$\Pi_n$公式进行存在量化所得，就称之为$\Sigma_{n+1}$公式；
  如果一个公式是由对$\Sigma_n$公式进行任意量化所得，就称之为$\Pi_{n+1}$公式。

现在定义从扩展语言到原始语言的翻译。对公式结构归纳，

- 如果不涉及有界量词，我们不改变任何符号；

- 形如$\forall^{bd}x\in y(\varphi)$的公式翻译为$\forall x(x\in y\to\varphi)$；

- 形如$\exists^{bd}x\in y(\varphi)$的公式翻译为$\exists x(x\in y\wedge \varphi)$。

我们现在在原始的一阶集合论语言中定义Lévy层级。固定一个语言中的理论$T$，如果一个公式$T$可证地

- 等价于一个$\Delta_0$公式的翻译，就（不致混淆地）称之为一个$\Delta_0^T$公式，
  并以翻译前的（扩展语言中的）公式为其简写；

- 等价于一个$\Sigma_n$公式的翻译，就称之为一个$\Sigma_n^T$公式；

- 等价于一个$\Pi_n$公式的翻译，就称之为一个$\Pi_n^T$公式；

- 既等价于一个$\Sigma_n$公式的翻译，也等价于一个$\Pi_n$公式的翻译，就称之为一个$\Delta_n^T$公式。

当$T$是空理论时，我们略掉复杂度符号的上标。
:::

有时，我们会在集合论语言中扩展非逻辑符号，例如常元符号（[[空集]]）$\varnothing$，
二元关系符号（包含于）$\subseteq$，二元函数符号（卡氏积）$\times$等。
由于它们均由公式定义，
我们在这类扩展语言中讨论Lévy层级时只不过是在讨论将扩展语言翻译到原始（一阶集合论）语言之中后获得的Lévy层级。

## 绝对性

Lévy层级的应用是利用公式的复杂度在不同模型或内模型之间转移其真值。

::: definition
固定理论$T$，对于一个含自由变元$x_1,\dots,x_n$的公式$\varphi$，
我们称它基于理论$T$向上/向下绝对，若任给两个集合论模型$(N,\in^N)$与$(M,\in^M)$，
假定$N\subseteq M,\in^N\subseteq \in^M$，任给元素$a_1,\dots,a_n\in N$，总有

- （向上绝对）$(N,\in^N)\vDash\varphi[a_1,\dots,a_n]\to (M,\in^M)\vDash\varphi[a_1,\dots,a_n]$；

- （向下绝对）$(M,\in^M)\vDash\varphi[a_1,\dots,a_n]\to (N,\in^N)\vDash\varphi[a_1,\dots,a_n]$。

如果一个公式基于理论$T$既向上绝对又向下绝对，我们就称其基于理论$T$绝对。
:::

::: theorem
$\Sigma_1^T$公式基于理论$T$向上绝对，$\Pi_1^T$公式基于理论$T$向下绝对，
$\Delta_1^T$公式基于理论$T$绝对。
:::

::: proof
只需验证$\Delta_0^T$公式基于理论$T$绝对，只需展开Tarski真定义。
:::

## 扩展函数符号的语言

对于扩展函数符号的集合论语言，我们不但希望能写出形如$\forall x\in y$的表达式，
也会希望能写出形如$\forall x\in F(y_1,\dots,y_n)$的表达式，例如$\forall x\in y\times z$。
更进一步地，我们希望能字面地将后者视作前者而直接读出这类表达式的Lévy层次，但这往往不行。

::: example
考虑扩展一元函数符号$P$（幂集函数符号）的扩展集合论语言，
$P$由$y\in P(x)\leftrightarrow \forall w(w\in y\to w\in x)$所定义。
我们证明：假设$ZFC$一致（这个条件可以减得更弱，但此处无需挂怀），
$\forall z\in P(x)(z\in y)$不可能被一致理论$T$辨认为$\Delta_0^T$公式；
它也不可能被辨认为$\Sigma_1^T$公式。

若不然，假定一致理论$T\supseteq ZFC$认定$\forall z\in P(x)(z\in y)$是$\Sigma_1^T$公式，
直接展开定义它应当等价于$\forall z(\forall w\in z(w\in x)\to z\in y)$这个$\Pi_1$公式，
所以它应当是$\Delta_1^T$公式。
取定一个$T$的模型$M$，然后通过力迫向$x$中加入超过$|y|^M$个子集得到力迫扩张$M[G]$；
显然$M[G]$不认为$P(x)\subseteq y$，但这$\Delta_1^T$句子本应在$M[G]$和$M$之间绝对，这引起矛盾。
:::

这催生以下定义。

::: definition
指定集合论$T$和公式$\varphi(z,x_1,\dots,x_n)$。如果

- 任给$\Delta_0^T$公式$\psi(z,y_1,\dots,y_m)$（不要求集合$\{x_1,\dots,x_n\}$与$\{y_1,\dots,y_m\}$
  不交），
  公式$\forall z(\varphi\to\psi)$也是$\Delta_0^T$的，
  就称$\varphi$是$T$的半可替（semi-substitutable）公式；

- $\varphi$不但是$T$的半可替公式，而且在理论$T$中定义一函数，
  换言之
  $\forall x_1\dots\forall x_n\exists z_0\forall z(z=z_0\leftrightarrow \varphi(z,x_1,\dots,x_n))$，
  就称$\varphi$定义的函数是$T$的可替（substitutable）函数。

:::

显然$F(x_1,\dots,x_n)$是$T$的可替函数意味着向$\Delta_0^T$公式前加入
形如$\forall x\in F(x_1,\dots,x_n)$的“有界”量词所得的公式仍然是$\Delta_0^T$公式，
不难证明此时加入形如$\exists x\in F(x_1,\dots,x_n)$的“有界”量词效果也一样。

::: theorem
[[基本函数]]都是$GJ_0$的可替函数。
:::

## $\Delta_0$理论

由于有界量词在约束一个变元时需要第二个变元，
在不写出语法上可能触怒变元替代规则的奇怪记号（如$\forall x\in y\forall y\in x(\phi)$，
这个$y$到底该视为自由变量还是约束变量是很难讲的）的情况下，我们写不出任何句子，
一个理论的“$\Delta_0$理论”里面只应该装着一些含自由变元的$\Delta_0$
公式将所有自由变元进行全称量化后得到的$\Pi_1$句子（换言之，是它的所有$\Delta_0$推论的全称闭包）。
观察不难发现，
$\mathsf{ZFC}$公理中只有外延公理与基础公理可能是某个理论的$\Delta_0$理论的一部分（换言之，
是$\Pi_1$句子），我们证明一个有趣的结果，它指出基础公理是那个不平凡的公理，此结果为人熟知，
一个可参考的书面记载是陈志诚的硕士论文。
记$\mathsf{ZFC}^-$是$\mathsf{ZFC}$去掉基础公理后形成的集合论。

::: theorem [$\mathsf{ZFC}+$不可达基数无界多]
任何$\mathsf{ZFC}^-$的$\Delta_0$推论都可以仅由外延公理证明。
:::

::: remark
注意不可能怀疑外延公理不一致，这个定理显然指出$\mathsf{ZFC}^-$一致，
所以第二不完全性定理说明它肯定用$\mathsf{ZFC}$证明不了。
由演绎定理，这显然也说明$\mathsf{ZFC}$的$\Delta_0$推论都可由外延公理与基础公理推出；
又由于基础公理是独立于外延公理的（这件事和外延公理一致一样没办法怀疑，
因为Robinson算术$\mathsf{Q}$就足以证明此事了），这个推论不可能改进到只用外延公理。
:::

## $\Sigma_1$理论

由于$\Delta_0$理论实际上就是$\Pi_1$理论，我们自然想研究更简单的$\Sigma_1$理论。
不过，绝对性的讨论已经告诉我们以下事实。

::: theorem {@thm-sigma1}
$\mathsf{ZF}$的$\Sigma_1$理论与$\mathsf{ZFC}+\mathbf{V=L}$相同。
:::

作为上述 @thm-sigma1 的推论，我们有以下相当不平凡的结果。

::: theorem [Shoenfield绝对性引理]
$\mathsf{ZFC}+\mathbf{V=L}$证出一个$\Sigma^1_2$算术句子当且仅当$\mathsf{ZF}$足以证明它。
:::

```terms
Lévy层级:
  en: Lévy hierarchy
```
