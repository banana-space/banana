---
title: 空类型
aliases: [底类型（类型论）, 底类型]
categories: [类型论]
navboxes: [类型论]
---

**空类型**是[[空集]]在类型论中的类比，就是没有实例的类型。
它在[[简单类型论]]和[[依值类型论]]里都可以定义，且定义是一样的。

## 类型规则

空类型记作 $\varnothing$。

### 构造规则

正如空集没有元素，空类型没有构造规则。

### 消去规则

对应逻辑学中的[[爆炸律]]。

\[
\cfrac{\Gamma\vdash A\operatorname{type}}{\Gamma\vdash \operatorname{rec}_\varnothing:\varnothing\to A}
\]

因为空类型没有构造规则，所以不需要计算规则。

## 应用

空类型可以用于定义“某类型没有实例”这个命题：

::: definition
对于类型 $A$，它**没有实例**是指如下类型存在实例
\[
¬A := A → \varnothing
\]
:::

之所以说这是命题是因为它确实是[[命题宇宙]]意义上的命题：

::: lemma
对于类型 $A$，以下命题成立：
\[
\operatorname{isProp}(¬A)
\]
:::

## 变种

### 子类型

**底类型**是[[子类型]]意义上的空类型，它的定义和空类型一样：没有实例的类型。
但在讨论子类型的类型论中，空类型显然是子类型关系构成的[[格 (序结构)|格]]中的最小元素，
因此又称之为底类型，一般记作 $\bot$。

### $λ$ 编码

<see>[[$\lambda$ 编码]]</see>

在[[F 系统]]中可以编码空类型，直接将空类型定义为如下类型即可：

\[
\varnothing := \forall A. A
\]

很显然可以构造出该类型到任何其它类型的函数。

依值类型论中用 [[$\Pi$ 类型]]和[[宇宙 (类型论)|宇宙]]代替上述类型：

\[
\varnothing := Π_{A : \mathcal U} A
\]

```terms
空类型:
  en: empty type
  de: leerer Typ
  fr: type vide
  la: typus vacuus
  ja: 空<から>型<がた>
底类型:
  en: bottom type
```
