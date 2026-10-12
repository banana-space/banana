---
title: 逻辑截断类型
aliases: [命题截断类型]
categories: [同伦类型论]
navboxes: [类型论]
---

**逻辑截断类型**（又叫**命题截断类型**）是一种[[高阶归纳类型]]，
它也有一种巧妙的 [[$\lambda$ 编码]]。
它通过商掉平凡的关系的方式给出类型的命题形式。

在[[$n$-类型]]的视角下，逻辑截断类型即是在 $-1$ 层截断某个类型。
它的推广是[[截断类型]]。

对于高阶归纳类型的实现策略来说，实现逻辑截断类型是一种强有力的测试手段，
因为它不仅有类型参数、而且是递归的（它的构造器用到了逻辑截断自己）。

## 类型规则

\[
\cfrac{Γ ⊢ A}{Γ ⊢ |A|}
\]

### 构造规则

需要用到 $\operatorname{isProp}$，该辅助定义要求类型要么存在唯一实例、要么没有实例，
对应了[[同伦类型论]]中[[同伦层级]]为 $-1$ 的情况。
其详细动机及定义参见[[命题宇宙]]。

\[
\operatorname{isProp} A:= \prod_{a,b:A} \operatorname{Id}_A(a, b)
\]

\[
\cfrac{Γ ⊢ a:A}{Γ ⊢ \|a\|:|A|}\quad
{\cfrac{}{Γ ⊢ \operatorname{trunc}:\operatorname{isProp}|A|}}
\]

### 消去规则

逻辑截断类型只能被映射到其它的命题，否则会出现[[命题宇宙]]中提到的一致性问题。

\[
\cfrac{Γ ⊢ f:A → B \quad Γ ⊢ p:\operatorname{isProp}B}
{Γ ⊢ \operatorname{rec}_{|A|}(f, p):A → B}
\]

计算规则：

\[
\begin{aligned}
  \operatorname{rec}_{|A|}(f, p)(\|a\|)&=f(a):B\\
  \operatorname{ap}_{\operatorname{rec}_{|A|}(f, p)}(\operatorname{trunc}(a, b))&=p(a, b):\operatorname{Id}(f(a), f(b))
\end{aligned}
\]

第二条规则更容易理解（但有类型错误）的写法如下：

\[
\operatorname{rec}_{|A|}(f, p)(\operatorname{trunc}) = p : \operatorname{isProp}B
\]

## 应用

### 选择公理

<see>[[选择公理 (类型论)]]</see>

逻辑截断类型可以用于定义[[同伦类型论]]中的[[选择公理]]。

::: definition {@def:ac}
考虑如下数据：
\[
Γ ⊢ A : \mathcal U \quad Γ ⊢ B : A → \mathrm{Set}
\]
其中 $\mathrm{Set}$ 指[[集合 (类型论)]]。在语境 $Γ$ 下，选择公理是说如下命题：
\[
Π_{a:A} |B(a)| → |Π_{a:A} B(a)|
\]
:::

## 性质

::: lemma
对于类型 $A$，类型 $||A||$（即逻辑截断的逻辑截断）和 $|A|$ 等价。
:::

::: lemma
对于类型 $A$，类型 $¬ ¬ A$ 和 $¬¬|A|$ 等价，
其中 $¬ A := A → \varnothing$（参见：[[空类型]]、[[双重否定 (类型论)]]），类比逻辑中命题的否定。
:::

::: lemma
对于类型 $A$，类型 $|A|$ 能推出 $¬¬A$。
:::

这个引理的直觉可以从下面的 [[$\lambda$ 编码]]看出。

::: lemma
对于类型 $A$，类型 $|A+¬A|$ 和 $|A|+¬|A|$ 等价（参见：[[无交并类型]]）。
:::

::: lemma
对于类型 $A$，可以借助 $A+¬A$ 和 $|A|$ 构造出 $A$ 的实例。
:::

## 编码

另一种定义逻辑截断类型的方式是使用[[$\lambda$ 编码]]：

\[
\begin{aligned}
  |A| &:= Π_{P:\mathrm{Prop}} (A → P) → P\\
  \|a\| &:= λP.λf.~\operatorname{ap}_f(a)
\end{aligned}
\]

其余规则可以从这两条轻易地得出。
借助这种方式定义，可以在没有[[高阶归纳类型]]、
只有[[命题宇宙]]的时候定义类型论中的选择公理（@def:ac）。

```terms
逻辑截断类型:
  en: propositional truncation
```
