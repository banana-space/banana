---
title: 良基关系
aliases: [良基]
categories: [集合论]
---

**良基关系**是在集合上的一种[[二元关系]]，一般指满足对于任何一个非空子集，在这一关系下都有极小元。

良基关系是[[良序关系]]抽除其中序的成分之后所得的二元关系。也是那些可以在其上使用归纳法的关系。

## 定义

对于集合 $ S $ 上的一个二元关系 $ \prec $。
一个[[子集]] $ A $ 是一个 $\prec$ -归纳集，如果其中的元素满足
\[
\forall (x\in S), (\forall (t\in S),t\prec x \Rightarrow t\in A) \Rightarrow x\in A.
\]

::: definition {@LJ}
如果 $ S $ 的仅有 $\prec$-归纳集是 $ S $自身，那么 $ \prec $ 关系就是良基的。
:::

这一定义就是说，如果对于 $\prec$ 关系可以用归纳法，即所有$ \prec x$ 的元素都有某一性质，
则 $x$ 也具有这一性质，
那么这一关系就是（归纳）良基的。

在排中律成立的前提下，也可以有别的一些等价定义：

::: definition {@WQJL}
在 $\prec$ 关系中**没有无穷降链**，指不存在[[序列]]
\[
\cdots \prec x_2\prec x_1 \prec x_0
\]
:::

::: definition {@JDLJ}
如果在$ (S, \prec) $中，$S$ 的任意一个子集 $A$ 中都可以找到一个极小元 $x$，
即满足：不存在$ t\in A $，使得 $ t \prec x $，我们就称 $S$ 是**经典良基**的。
:::

在经典数学中，这三个定义是完全等价的。
而在构造数学中，则可以证明 @JDLJ 蕴涵 @LJ，
@LJ 蕴涵 @WQJL，
反之则不然。

::: proposition {@LJ推JDLJ}
如果 $ (X,\prec) $ 是良基关系，且 $ A \subseteq X $ 没有最小元，那么 $A$ 是空集。
:::

::: proof
考虑集合
\[
U=\{u\in X \mid u\notin A \wedge (\forall x\in X),x\prec u\Rightarrow x \notin A\}
\]
即考虑所有不在$A$中，
并且所有$\prec$其的元素都不在$A$中的元素。
根据定义，$U\cap A=\varnothing$。

只要证明集合 $U$ 也是 $\prec$ -归纳的，
那么根据 $X$ 的良基性，$U=X$，所以 $A=X\cap A=\varnothing$。

假设 $z$ 是满足 $y\in U$ 对于每个 $y\prec z$ 的 $y$ 都成立的 $z$。
假设 $z\in A$，
那么 $z$ 就是 $A$ 的极小元，与假设矛盾，所以 $z\notin A$，于是根据 $U$ 的定义，$z\in U$。
于是 $U$ 是$\prec$ -归纳的。
:::

因为无穷降链不存在极小元，所以归纳良基的集合不存在无穷降链。
同时这也说明了归纳良基关系是经典良基的。

::: proposition
在直觉集合论中，经典良基关系蕴涵归纳良基关系。
:::

::: proof
$\prec$ 是 $X$ 上经典良基的关系，$U$ 是一个归纳集，
我们想证明每个 $x\in X$ 都在 $U$ 中，
根据归纳集性质，只要证明每个 $u\prec x$ 都在 $U$ 中。
如果 $U$ 不是全集 $X$，那么其补集 $\overline{U}$ 有极小元 $y$，
$v\prec y$ 指 $v\in \overline{\overline{U}}=U$，于是 $y\in U$，矛盾。
:::

另外，如果 $(X,\prec)$ 存在一个子集没有最小元，那么每个元素都可以找到一个比它小的元素，
从而根据[[相依选择公理]]，可以找到无穷降链。
因此没有无穷降链的条件也可以推出一个关系是良基的。

## 性质

每个良基关系都不是[[自反关系|自反的]]，即 $ x\nprec x$。
如果要对于一个自反的关系谈论是否良基的话，我们需要相应地改变良基中关于极小元的定义，
并且在归纳时仍使用非自反的版本。

一个[[良序]]可以定义为一个良基的[[全序]]，
或者一个传递、外延、良基的关系。

一个[[良拟序]]是一个良基的[[预序]]，
并且其中不存在无穷[[反链]]，即不存在一个无穷集，其中任意两个元素都不可比较。

直观地来说，有限[[偏序集]]的[[Hasse图]]如果是有分叉的[[伪树]]，
那么这个关系是良基的，而不一定是[[良序]]的。

在一个具备良基关系 $R$ 的集合 $U$ 中，
每个元素 $x$ 可以递归定义一个**代**（也翻译为**秩**）
\[
\operatorname{rank}(x, U, R)=\operatorname{sup}\{\operatorname{rank}(y,U,R)+1 \mid yRx \wedge y\in U\}
\]
而对于一个集合，可以定义在这个扎实关系下的**高**。
\[
\operatorname{height}(U,R)=\sup_{x\in U}\{\operatorname{rank}(x,U,R)\}
\]

## 例子

- $\mathbb N$ 是自然数集，在 $\mathbb N$上，
  关系 $x \prec y$ 当且仅当 $ y $ 是 $ x $ 的后继，
  即 $ y = x + 1 $，它所构成的关系是良基的，
  这也是一般性的[[数学归纳法]]成立的依据。

- $\mathbb N$ 上，一般的序关系 $ x < y $ 是良基的，
  这也是强归纳法成立的依据。

- 某个序数构成的集合（或者是序数所构成的真类）上，
  一般的序数之间的 $ < $ 关系是良基关系，
  这是超限归纳法成立的依据。

- $\mathbb Z$ 上整除关系是良基关系，
  即 $x \mid y$ 当且仅当 $y/x$ 是一个非 $\pm 1$ 的整数，
  也就可以在整数上对因子关系用归纳法。

- $S$ 是由纯粹集合构成的集合（甚至所有纯粹集合构成的真类），
  其上 $\in$ 关系是良基关系，
  这是[[正则公理]]的推论。

```terms
良基:
  en: well-founded
  de: wohlfundiert
  fr: bien fondé
  la: bene fundatus
良基关系:
  en: well-founded relation
  de: wohlfundierte Relation
  fr: relation bien fondée
  la: relatio bene fundata
```
