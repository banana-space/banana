---
title: 无交并（类型论）
aliases: [不交并（类型论）, 无交并类型]
categories: [类型论]
navboxes: [类型论]
---

**无交并类型**（又叫**余积类型**）是集合的[[无交并]]在[[类型论]]中的类比，
它在[[简单类型论]]和[[依值类型论]]里都可以定义。
在类型论中，无交并的对偶是[[积类型]]。

## 类型规则

类型 $A$ 和 $B$ 的无交并记作 $A+B$。

\[
\cfrac{Γ\vdash A\operatorname{type} \quad Γ\vdash B\operatorname{type}}{Γ\vdash (A+B)\operatorname{type}}
\]

以下规则基本上是模仿[[余积]]的[[万有性质]]。

### 构造规则

\[
\cfrac{Γ\vdash u:A}{Γ\vdash \operatorname{inl} u:A+ B}
\quad
\cfrac{Γ\vdash u:B}{Γ\vdash \operatorname{inr} u:A+ B}
\]

可以直接将 $A+B$ 视为由如上两构造子生成的[[归纳类型]]，
也可以单独给出消去规则。

### 消去规则

简单类型的消去规则：

\[
\cfrac{Γ\vdash a:A\to C\quad Γ\vdash b:B\to C
\quad Γ\vdash u:A+ B}
{Γ\vdash \operatorname{rec}_+(a, b, u) : C}
\]

简单类型的计算规则：

\[
{\operatorname{rec}_+(a, b, \operatorname{inl} u)=a(u):C}
\\
{\operatorname{rec}_+(a, b, \operatorname{inr} u)=b(u):C}
\]

## 范畴语义

在简单类型论的[[范畴语义]]中，无交并类型对应（弱化的）[[余积]]对象。
而在依值类型论的范畴语义中，无交并类型对应（弱化的）[[俯范畴]]里的[[余积]]，注意这不是[[推出]]。

```terms
无交并类型:
  en: disjoint union type
  fr: type d'union disjointe
  la: typus summae disiunctae
余积类型:
  en: coproduct type
  fr: type coproduit
  la: typus coproductus
```
