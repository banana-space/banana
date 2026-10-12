---
title: 简化归纳族
categories: [类型论]
navboxes: [类型论]
---

**简化归纳族**是使用[[模式匹配]]的语法来定义[[归纳族]]的手法。
它失去了定义[[相等类型]]及类似情况的能力，换来了更简单的语义（更加接近函数）。

## 定义

::: definition {@def:pattern}
$Γ ⊢ p:A$ 在满足以下条件时是一个**匹配子**：

- 不含[[消去规则]]、[[形成规则]]或[[函数类型]]的构造规则，

- 允许出现[[自由变量]]，

- 自由变量是线性的，即没有重复的变量。

:::

此处只考虑了有[[归纳类型]]、[[宇宙 (类型论)|宇宙]]、[[$\Pi$ 类型]]、[[$\Sigma$ 类型]]的类型论。
若对类型论进行扩展，则这些限制可能也需要进行对应的调整。

::: definition
**简化归纳族**由如下数据组成：

- 一个类型 $Γ ⊢ D:A → \mathcal U$，类似[[归纳族]]，其中 $A$ 是任意类型，

- 一组构造子 $Γ ⊢ p ↦ \operatorname{con_i} C_i$，其中：
  - $Γ, FV(p)$ 为将 $Γ$ 扩展后的某个新语境，
  - $Γ, FV(p) ⊢ p:A$ 是一个匹配子（@def:pattern），
  - $Γ, FV(p) ⊢ C_i$ 为满足[[严格正性]]的类型。

  定义构造子的类型如下：
  \[
  Γ ⊢ \operatorname{con_i}:\prod_{x:FV(p)} \prod_{y:C_i} D(p)
  \]

- 模式匹配作为消去子。

:::

## 例子

::: definition
如下类型是简化归纳族版本的[[有限集合类型]]：

- $\operatorname{Fin}:\mathbb N → \mathcal U$ 为类型，

- $s(n) ↦ \operatorname{f0}1$ 为构造子之一，其中 $1$ 是[[单位类型]]，

- $s(n) ↦ \operatorname{fs}(\operatorname{Fin}n)$ 为构造子之二。

:::

## 性质

::: lemma
任何能用简化归纳族表达的类型，都可以转化为另一个等价的[[归纳族]]。
:::

这意味着归纳族的语义可以应用到简化归纳族上。

## 参考资料

```bibliography
SIT:
  type: incollection
  title: A Simpler Encoding of Indexed Types
  author: Tesla Zhang
  year: 2021
  booktitle: Proceedings of the 6th ACM SIGPLAN International Workshop on Type-Driven Development
  location: Republic of Korea
  publisher: ACM
  series: TyDe '21
  doi: 10.1145/3471875.3472991
  arxiv: '2103.15408'
```

```terms
简化归纳族:
  en: simpler indexed types
匹配子:
  en: pattern
```
