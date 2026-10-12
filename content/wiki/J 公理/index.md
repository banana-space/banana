---
title: J 公理
aliases: [J 规则]
categories: [类型论]
navboxes: [类型论]
---

**J 公理**是[[Per Martin-Löf]]给[[相等类型]]设计的消去规则，
因此又叫 **J 规则**。它看起来和其它的消去规则不太一样，所以被称为公理，但它实际上不是公理，
因为它有计算规则。

一般来说，消去规则和构造规则是两组看起来可以互相抵消的操作，比如[[积类型]]、[[函数类型]]、
[[无交并类型]]都符合这样的特征，
但相等类型却不然。[[Martin-Löf 类型论]]中的相等类型的构造规则如下：

\[
\cfrac{\Gamma\vdash x:X}
{\Gamma\vdash \mathrm{refl_x} : \operatorname{Id}_X(x, x)}
\]

换言之，只有当 $x,y$ 为同一个表达式时，才可能构造出 $\operatorname{Id}(x, y)$ 这个类型的实例，
因此它的反向操作应该是“若存在 $p:\operatorname{Id}(x, y)$ 则 $x,y$ 为同一个表达式”才对，
但这一描述和类型论中其它的消去规则又很不一样了：一般的消去规则的定义中是不含等式的，
等式只在计算规则中会用到。
相等类型的消除规则若如此定义便会影响类型论的全局性质，
这类类型论被称为**外延的**，见[[外延类型论]]。

J 规则相对含蓄地表达了一个类似的观点：
它认为如果存在 $p:\operatorname{Id}(x, y)$ 那么任意语境中的 $y$ 可以被替换为 $x$，
也就是说任何含有 $x$ 的类型中的这些 $x$ 都可以被替换为 $y$，巧妙地绕开了对“相等”的直接讨论。
这也间接带来了[[同伦类型论]]的研究。
这种描述方式和[[Leibniz 相等原则]]非常接近。

“相等”在英语中是以字母 I 开头的单词，因此相等类型的消去规则的名字就采用了 I 的下一个字母 J。
在 J 公理之后，还有 [[K 公理]]。

## 定义

定义 J 规则需要如下值存在：

\[
\Gamma\vdash \mathrm{refl_x} : \operatorname{Id}(x, x)
\]

这对应相等类型的[[自反性]]，注意这里没有要求它是[[相等类型]]的构造规则，只需要它存在即可。

::: definition
**J 公理**类型规则如下：
\[
\begin{aligned}
  & {\color{gray} \Gamma\vdash A : \mathcal U \quad \Gamma\vdash x, y : A} \\
  & \Gamma\vdash P : \Pi_{x, y : A} \operatorname{Id}(x, y) \to \mathcal U \\
  & \Gamma\vdash p : \Pi_{x : A} P(x, x, \mathrm{refl}_x) \\
  & \Gamma\vdash q : \operatorname{Id}(x, y) \\
  & \overline{\Gamma\vdash J(P, p, q) : P(x, y, q)}
\end{aligned}
\]

有时可以从语境中推导出 $P$ 所以也可以省略掉，直接写 $J(p, q)$。
:::

计算规则如下：

\[
J(P, p, \mathrm{refl}_x) = p(x)
\]

## 性质

::: lemma {@lem:eqrel}
命题相等是一个等价关系。换言之，考虑 $Γ ⊢ x, y, z : A$，如下引理成立：
\[
\begin{aligned}
  Γ &⊢ \operatorname{Id}(x, y) → \operatorname{Id}(y, x) \\
  Γ &⊢ \operatorname{Id}(x, y) → \operatorname{Id}(y, z) → \operatorname{Id}(x, z)
\end{aligned}
\]
:::

::: proof
前者的证明如下：
\[
λq.~J(\fbox{$λx.λy.λp.~\operatorname{Id}(y, x)$}, λx.~\mathrm{refl}_x, q)
\]
后者证明如下：
\[
λq.~J(\fbox{$λx.λy.λp.~\operatorname{Id}(y, z) → \operatorname{Id}(x, z)$},
 \fbox{$λx.λp.~p$}, q)
\]
这也意味着前者遇到参数为 $\mathrm{refl}_x$ 时返回 $\mathrm{refl}_x$，
后者遇到第一个参数为 $\mathrm{refl}_x$ 时直接返回第二个参数。
:::

::: lemma
考虑 $Γ ⊢ x, y : A$ 和 $Γ ⊢ f:A → B$，
\[
Γ ⊢ \operatorname{Id}_A(x, y) → \operatorname{Id}_B(f~x, f~y)
\]
:::

证明类似，留作练习。

::: theorem [等量代换]
考虑 $Γ ⊢ x, y : A$，
\[
\operatorname{subst}:
(P:A\to \mathcal U) \to
\operatorname{Id}_A(x, y)
\to P(x)\to P(y)
\]
:::

::: proof
\[
λP.λq.~J(\fbox{$λx.λy.λp.~P(x)\to P(y)$},
 \fbox{$λx.λp.~p$}, q)
\]
这也意味着当第二个参数为 $\mathrm{refl}_x$ 时该定理表现为[[恒同映射]]。
:::

该定理非常重要，它不仅蕴含 @lem:eqrel，且在定义各种消去规则上有丰富的应用，
例如[[圆周 (同伦类型论)|圆周]]的消去规则就需要用到这个操作。
