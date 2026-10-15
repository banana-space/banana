---
title: 力迫法
aliases: [力迫]
categories: [集合论]
notices:
  - name: 问题
    items:
      - “柏拉图主义直观”一节中 $M$ 脱殊滤的定义似乎缺少 $G$ 中任意两个元素在 $G$ 中有公共下界的条件。
      - “柏拉图主义直观”一节中真引理的陈述似乎应为“$M[G]\vDash\sigma$ 当且仅当存在 $p\in G$ 使得 $p\Vdash\sigma$”；按前面的定义，现在的陈述对 $p=1$ 一般不成立。
      - “Boole 值模型仿造的偏序力迫”一节需要扩充。
navboxes: [集合论]
---

在[[集合论]]中，
**力迫法**是一种证明[[相容 (数理逻辑)|相容]]性和[[独立 (数理逻辑)|独立]]性结论的方法，
由 [[Paul Cohen]] 发明，
最初用于证明[[连续统假设]]独立于 [[ZFC 公理]]。
力迫法也用于证明[[选择公理]]独立于 [[ZF 公理]]。

## 目标

与其余数学证明技术不同，力迫法的实现方法与其背后的直观，或者是哲学，密切相关。
因此，我们不应直接给出一个最好的“对力迫法的直观”，而应采取以下方案：
既然它们在数学上等价，我们就先指出整个论证中真正被用于证明其余数学事实的核心。

::: definition
一个含极大元的偏序集$(P,\leq,1)$将被称作力迫偏序，其元素将被称作力迫条件。
:::

::: definition
我们需要一个关系$\Vdash$，读作力迫，它的左侧要求一个力迫条件，右侧要求一个句子，且满足以下要求。

- （可靠性）每个力迫条件都力迫每个重言式。

- （相容性）同一个力迫条件不能同时力迫一个句子和它的否定。

- （力迫这一名称的来源）如果力迫条件$p\leq q$而$q$已力迫句子$\sigma$，则$p$同样力迫之。

- $p$力迫$\neg\sigma$当且仅当每个$q\leq p$都不力迫$\sigma$。

- $p$力迫$\sigma\wedge\tau$当且仅当它同时力迫二者。

- $p$力迫$\forall x(\varphi)$当且仅当我们将每个项$t$用以替代$x$后，
  公式$\varphi(x)$形成的句子$\varphi(t)$均为$p$所力迫。

:::

::: conjecture (期望) [力迫法]
如果存在条件$p$力迫句子$\sigma$，则理论$T\cup\{\sigma\}$与$T$等相容性。
:::

## 柏拉图主义直观

对于柏拉图主义者而言，$\mathsf{ZFC}$是相容的，因此它有模型；
因为下行[[Löwenheim–Skolem 定理]]显然是真的，
$\mathsf{ZFC}$有可数模型$M$；不妨设这个可数模型是传递的。
$M$中的力迫偏序$(P,\leq,1)$旨在加入满足以下要求的$P$子集$G\not\in M$，
使得新的模型$M[G]$满足我们所希望的句子。

::: definition
$P$的子集$D$如果满足$\forall p\in P\exists q\in D(q\leq p)$，就称之为一个稠集。
如果$P$的真子集$G$不但不空，满足$\forall p\in P\forall q\in G(q\leq p\to p\in G)$，
且与每个$P$的稠集$D\in M$都交不空，就称之为一个$M$脱殊滤。
:::

::: lemma [脱殊滤存在引理，$\mathsf{ZF+DC}$]
鉴于$M$是可数的，每个$p\in P$都有$M$脱殊滤$G\ni p$。
:::

::: proof
$M$是可数的，所以$M$中的$P$的稠子集只有可数多个，
记为$\langle D_n\rangle_{1\leq n<\omega}$。
我们记$G_0=\{p\}$，$G_{n+1}$是$G_n$添加一个$D_n$中小于每个$G_n$中元素的元素所得集合。
运用依赖选择公理，这给我们一个$G_\omega=\bigcup_{n\in\omega}G_n$与每个$P$的$M$中稠集交不空，
现在只需令$G=\{p\in P\mid\exists q\in G_\omega(q\leq p)\}$。
:::

余下的目标无非是给出$M[G]$的具体构造，并在某语言中证明以下两个引理。

::: definition
令$p\Vdash\sigma$当且仅当每个$G\ni p$都有$M[G]\vDash\sigma$。
:::

::: lemma [可定义引理]
$\Vdash$关系是$M$中含参$(P,\leq,1)$可定义的。
:::

::: lemma [真引理]
$p\Vdash\sigma$当且仅当存在$G\ni p$使得$M[G]\vDash\sigma$。
:::

这就实现了我们的愿望：如果存在$p\Vdash\sigma$，则$\mathsf{ZFC}$相容推出存在此$M$，
进而存在$G\ni p$和$M[G]$，且$M[G]\vDash\mathsf{ZFC}+\{\sigma\}$，
换言之$\mathsf{ZFC}+\{\sigma\}$同样相容。

对形式主义者而言，柏拉图主义直观造出的这类相对一致性证明应当解读为一个矛盾转移模式：
如果$\mathsf{ZFC}+\{\sigma\}$不相容，则有$\mathsf{ZFC}$的有穷片段$T_0$并上$\{\sigma\}$后不相容，
而由于每个写出来的定理的证明都只用到有穷条公理，
存在一个$\mathsf{ZFC}$的有穷片段$T_1\supseteq T_0$使得诸力迫法引理与定理均对
$T_1$（在[[反射原理]]下）的模型$M$成立，因此$T_1$已经不相容了，
否则$M$将会通过上述程序构造出$T_0\cup\{\sigma\}$的模型$M[G]$。

## 可数传递模型的偏序力迫

我们现在给出$M$到$M[G]$的构造。

::: definition
我们（在$M$中）定义$M^P$如下，其中元素将称作$M$中的$P$名：

- $M^P_0=\varnothing$；

- 对每个序数$\alpha\in M$，$M^P_{\alpha+1}=\mathcal{P}(M^P_\alpha\times P)$；

- 对每个极限序数$\alpha\in M$，$M^P_\alpha=\bigcup_{\beta\in\alpha}M^P_\beta$。

$M^P$定义为$\bigcup_{\alpha\in\operatorname{Ord}^M}M^P_\alpha$，它是一个$M$的子集，且因而可数。
:::

::: definition
给定一个$M$的子集$G$，我们在$M^P$上递归地定义函数$\operatorname{val}_G$如下：
对$x\in M^P$，$\operatorname{val}_G(x)=\{\operatorname{val}_G(y)\mid \exists p\in G((y,p)\in x)\}$。
$\operatorname{val}_G``M^P$记为$M[G]$。
:::

我们现在构造力迫语言。

::: definition
$M$中$P$形成的力迫语言$\mathcal{L}_{\mathcal{F}}^{M,P}$有二元谓词符号$\in$和每个$M$中的$P$
名作为常元。
对每个$P$的子集$G$和力迫语言中的含常元$x_1,\dots,x_n$的句子$\sigma$，
我们令$M[G]\vDash\sigma(x_1,\dots,x_n)$当且仅当
$M[G]\vDash\sigma[\operatorname{val}_G(x_1),\dots,\operatorname{val}_G(x_n)]$，
后者是正常集合论语言中指定自由变元取值后对公式的满足关系。
进一步，我们令$p\Vdash\sigma$当且仅当每个$M$脱殊滤$G\ni p$都让$M[G]\vDash\sigma$。
:::

::: theorem [力迫法基本定理]
如果$G$是$M$脱殊滤或是$\{1\}$，
则$M[G]$是最小的包含（$\supseteq$）$M$也包括（$\ni$）$G$的$\mathsf{ZFC}$可数传递模型。
:::

## Boole 值模型仿造的偏序力迫

## 偏序力迫的应用

力迫一个集合论句子的过程通常是这样的：
首先考虑什么样的“目前按定义不存在的集合”的存在能导致这个句子为真，
然后考虑这个集合的“按定义也可以存在”的“小”片段，
最后用这些“小”片段形成的自然的偏序集施行力迫。

首先，作为最简单的例子，让我们来用Cohen力迫来加入一个新的实数。

::: definition
$(^{<\omega}\omega,\subseteq,\varnothing)$称作Cohen力迫。
:::

::: theorem
在$M$中施行Cohen力迫将得到新的实数$\bigcup G\not\in M$。
:::

一个自然的期望是向$M$中新增任意序数$\alpha$那样多的实数，
这样就能获得$\neg\mathsf{CH}$相容的证据。
一个自然的想法是直接使用$^\alpha(^{<\omega}\omega)$，
但它作为偏序集的性质不好（我们后面将详细说明哪里不好），
因此真正被使用的力迫偏序是以如下方案定义的。

::: definition
我们定义$\alpha$个Cohen力迫的有穷支集乘积为偏序集$(\operatorname{C}(\alpha),\leq,\varnothing)$，
其中
$\operatorname{C}(\alpha)=\{f\colon\alpha\to(^{<\omega}\omega)\mid |\{\beta\in\alpha\mid f(\beta)\not=\varnothing\}|<\omega\}$
（这个$\{\beta\in\alpha\mid f(\beta)\not=\varnothing\}$称作$f$的支集，
记为$\operatorname{supp}(f)$），
而$f\leq g$即定义为$\forall \beta\in\alpha(f(\beta)\subseteq g(\beta))$。
:::

## 参考文献

一些教材：

```bibliography
jech:
  type: book
  author: Thomas Jech
  year: 2002
  title: "Set Theory: The Third Millennium Edition"
  publisher: Springer
weaver:
  type: book
  author: Nik Weaver
  year: 2014
  title: Forcing for Mathematicians
  publisher: World Scientific
```

力迫法的原始文献：

```bibliography
cohen-1963:
  type: article
  author: Paul Cohen
  year: 1963
  title: The Independence of the Continuum Hypothesis
  journaltitle: Proceedings of the National Academy of Sciences of the United States of America
  volume: 50
  number: 6
  pages: 1143–1148
cohen-1964:
  type: article
  author: Paul Cohen
  year: 1964
  title: The Independence of the Continuum Hypothesis, II
  journaltitle: Proceedings of the National Academy of Sciences of the United States of America
  volume: 51
  number: 1
  pages: 105–110
```

```terms
力迫法:
  en: forcing
  fr: forcing :m
  de: Forcing :n
```
