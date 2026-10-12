---
title: K 公理
categories: [类型论]
navboxes: [类型论]
---

**K 公理**是[[Thomas Streicher]]给[[相等类型]]设计的另一条消去规则，它不能代替 [[J 公理]]。

K 公理有些类似[[单位类型]]的消去规则。
和 J 公理类似，它也有计算规则。该规则非常强，因此蕴含了比 J 公理更多的定理，
但也对相等类型的语义解释带来了更多限制。

J 公理对形如 $\operatorname{Id}_A(x, y)$ 的类型进行消去，
其中 $x≠y$，而 K 公理则考虑形如 $\operatorname{Id}_A(x, x)$ 的类型，
它认为该类型唯一的实例就是 $\mathrm{refl}_x$。

这间接否认了[[泛等公理]]，代入 $[A\mapsto \mathbb N, x\mapsto 0]$
就可以看出一个反例：
泛等公理认为[[自然数类型]]上的任何一个[[自同构]]都可以构成一个
$\operatorname{Id}(\mathbb N, \mathbb N)$
的实例，不同的自同构给出不同的实例，而 K 公理只承认其中的平凡自同构。

“相等”在英语中是以字母 I 开头的单词，它的下一个字母 J 被 J 公理占用，因此叫 **K 公理**。

## 定义

类似 J 规定，定义 K 公理也需要如下值存在：

\[
Γ⊢ \mathrm{refl_x} : \operatorname{Id}(x, x)
\]

这对应相等类型的[[自反性]]，注意这里没有要求它是[[相等类型]]的构造规则，只需要它存在即可。

::: definition
**K 公理**类型规则如下：
\[
\begin{aligned}
  & {\color{gray} Γ⊢ A : \mathcal U \quad Γ⊢ x : A} \\
  & Γ⊢ P : \operatorname{Id}(x, x) \to \mathcal U \\
  & Γ⊢ p : P(\mathrm{refl}_x) \\
  & Γ⊢ q : \operatorname{Id}(x, x) \\
  & \overline{Γ⊢ K(P, p, q) : P(q)}
\end{aligned}
\]

有时可以从语境中推导出 $P$ 所以也可以省略掉，直接写 $K(p, q)$。
:::

计算规则如下：

\[
K(P, p, \mathrm{refl}_x) = p
\]

## 性质

::: lemma [相等证明唯一] {@lem:uip}
考虑
\[
\begin{aligned}
  Γ&⊢ p : \operatorname{Id}(x, y) \\
  Γ&⊢ q : \operatorname{Id}(x, y)
\end{aligned}
\]
如下命题成立：
\[
\operatorname{Id}_{\operatorname{Id}(x, y)}(p, q)
\]
换言之，如下命题成立：
\[
Γ ⊢ \Pi_{p : \operatorname{Id}(x, y)}\Pi_{q : \operatorname{Id}(x, y)} \operatorname{Id}_{\operatorname{Id}(x, y)}(p, q)
\]
:::

在使用 [[$\Pi$ 类型]]的等价形式中，
将两个类型相同的参数分开写是为了使得证明更可读。

::: proof
首先借助 [[J 公理]]简化问题：
\[
λp.~J(\fbox{$λx.λy.λp.~\Pi_{q : \operatorname{Id}(x, y)} \operatorname{Id}_{\operatorname{Id}(x, y)}(p, q)$},
子问题, p)
\]
可以看出子问题的类型如下：
\[
子问题: \Pi_{q : \operatorname{Id}(x, x)} \operatorname{Id}_{\operatorname{Id}(x, x)}(\mathrm{refl}_x, q)
\]
再通过 K 公理证明即可：
\[
λq.~K(\fbox{$λq.~\operatorname{Id}_{\operatorname{Id}(x, x)}(\mathrm{refl}_x, q)$}, \mathrm{refl}_{\mathrm{refl}_x}, q)
\]
:::

从这个证明中可以萃取出一个 J 公理的推论，即 @lem:uip 可以转化为上面的子问题。

## 相关概念

- [[相等类型]] 包含了相等类型的定义和 J 公理的变种。
- [[J 公理]] 是相等类型的另一条消去规则。
- K 公理虽然在[[同伦类型论]]中不成立，但对于某些类型是可以证明出来的，
  这些类型就是[[集合 (类型论)]]，也就是[[$n$-类型]]中 $n=0$ 的类型。
  这个原理类似于[[排中律]]在[[类型论]]中虽然只能是公理，
  但在“两个自然数是否相等”这件事上的排中律我们依然可以证明。

## 参考资料

```bibliography
AxiomK:
  type: thesis
  title: Investigations into intensional type theory
  author: Thomas Streicher
  year: 1993
  degree: Habilitationsschrift
  institution: Ludwig-Maximilians-Universität München
```
