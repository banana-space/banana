---
title: 归纳族
aliases: [索引类型, 广义代数数据类型]
categories: [类型论]
navboxes: [类型论]
---

<problems>
- 开头的例子中构造子 $\operatorname{f0}$ 只属于 $\operatorname{Fin}1$，按此定义 $\operatorname{Fin}2$ 似乎只有一个实例，与“$\operatorname{Fin}n$ 一共有 $n$ 个不同的实例”不符；通常的定义是 $\operatorname{f0}:\prod_{n:\mathbb N} \operatorname{Fin}(s~n)$。
</problems>

**归纳族**（又叫**广义代数数据类型**、**指标类型**）是[[归纳类型]]在[[依值类型论]]中的推广，
它允许构造子的返回类型仅仅是归纳类型对于它参数的一组实例的*特化*，
因此归纳族的类型中总是有参数。

例如，考虑如下类型：

- 类型定义为 $\operatorname{Fin}:\mathbb N → \mathcal U$，有一个[[自然数类型]]参数，
- 构造子 $\operatorname{f0}:\operatorname{Fin}1$，
- 构造子
  $\operatorname{fs}:\prod_{n:\mathbb N} \left( \operatorname{Fin}n → \operatorname{Fin}(s~n) \right)$。

而它的消去规则只用考虑*可能*的构造子，比如 $\operatorname{Fin}0$ 对这两个构造子都不适合，
这个类型拥有如下特征：

- $\operatorname{Fin}0$ 没有任何可用的构造子，因此这是[[空类型]]。
- $\operatorname{Fin}1$ 有一个构造子可用 $\operatorname{f0}$，
  因为若存在 $n$ 使得 $\operatorname{fs}~n:\operatorname{Fin}1$，那么 $n:\operatorname{Fin}0$，
  与前文矛盾。
  这可以看作[[单位类型]]。
- $\operatorname{Fin}2$ 两个构造子均可用，一共两个不同的实例。
- $\operatorname{Fin}3$ 一共三个不同的实例。
- 事实上，对于任意 $n:\mathbb{N}$，$\operatorname{Fin}n$ 一共有 $n$ 个不同的实例。

以上类型被称为**有限集合类型**，是典型的归纳族。
“族”这个名字是因为可以把 $\operatorname{Fin}$ 看作定义了一[[族]]类型的*函数*。

## 定义

::: definition
考虑[[依值类型论]]中的[[归纳类型]]
\[
Γ ⊢ D:A → \mathcal U
\]
和它的构造子
\[
Γ ⊢ \operatorname{con_i}:\prod_{x:A}\prod_{y_i:C_i} D(x)
\]
若将构造子的类型定义改为
\[
\cfrac{Γ,y_i:C_i ⊢ u_i:A}
{Γ ⊢\operatorname{con_i}:\prod_{y_i:C_i} D(u_i)}
\]
换言之，不再以 $x:A$ 为参数，而是去指定一个具体的值 $u_i:A$，
那么这便是一个**归纳族**，参数类型 $A$ 叫做它的**指标**。
:::

这个定义可以借助 [[$\Sigma$ 类型]]非常简单地推广到多参数的情形。

## 例子

[[Martin-Löf 类型论]]中的[[相等类型]]可以视为一种归纳族。最简单的定义如下：

- 类型定义 \(\operatorname{Id}:\left( \sum_{A:\mathcal U} A × A \right) → \mathcal U\)
- 构造子 \(\operatorname{refl}:\prod_{x:\sum_{A:\mathcal U} A} \operatorname{Id}(x.1, x.2, x.2)\)，
  但往往采用更直观的等价版本
  \(\operatorname{refl}:\prod_{A:\mathcal U} \prod_{x:A} \operatorname{Id}(A, x, x)\)

此外，[[异质相等]]也可以被定义为归纳族：

- 类型部分
  \(\operatorname{JM}:\left( \sum_{A:\mathcal U}\sum_{B:\mathcal U} A × B \right) → \mathcal U\)
- 构造子 \(\operatorname{refl}:\prod_{A:\mathcal U} \prod_{x:A} \operatorname{JM}(A, A, x, x)\)

## 相关概念

- [[简化归纳族]]。

- [[Ford 化]]解释了如何借助相等类型将一般的归纳族转化为等价的归纳类型。

```terms
归纳族:
  en: inductive family
广义代数数据类型:
  en: generalized algebraic data type
指标类型:
  en: indexed type
```
