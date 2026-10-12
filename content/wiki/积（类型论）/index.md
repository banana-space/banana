---
title: 积（类型论）
aliases: [积类型]
categories: [类型论]
navboxes: [类型论]
---

**积类型**是[[积集]]在[[类型论]]中的类比，
它在[[简单类型论]]和[[依值类型论]]里都可以定义，且定义是一样的。
注意积类型不是 [[$\Sigma$ 类型]]，
即使有时我们认为积类型是 $\Sigma$ 类型的特例。

在类型论中，积类型的对偶是[[不交并 (类型论)|不交并]]。

## 类型规则

类型 $A$ 和 $B$ 的积记作 $A×B$。

\[
\cfrac{Γ⊢A\operatorname{type} \quad Γ⊢B\operatorname{type}}{Γ⊢(A×B)\operatorname{type}}
\]

以下规则基本就是模仿[[范畴论]]中[[积 (范畴论)|积]]的[[泛构造]]。

### 构造规则

\[
\cfrac{Γ⊢ u:A \quad Γ⊢ v:B}
{Γ⊢\braket{u,v}:A×B}
\]

可以直接将 $A × B$ 视为由如上构造子生成的[[归纳类型]]，也可以单独给出消去规则。

### 消去规则

积类型的消去规则有两种风格：

\[
\cfrac{
 Γ⊢ u:A×B}
{Γ⊢ u.1:A \quad \text{and} \quad Γ⊢ u.2:B} \\
\]

其中：

\[
\braket{u,v}.1=u\\
\braket{u,v}.2=v
\]

另一种风格是通过[[函数类型]]定义，
也就是 $A×B$ 作为归纳类型的情况下的消去规则：

\[
\cfrac{
 {Γ⊢C\operatorname{type}}
 \quad Γ⊢ u:A×B
 \quad Γ⊢ f:A\to (B \to C)}
{Γ⊢ \textsf{uncurry}(f, u): C} \\
\]

其中：

\[
\textsf{uncurry}(f, \braket{u,v})=f(u)(v)
\]

这种思路非常接近 [[Curry 化]]和积类型的[[$λ$ 编码]]。
两者的区别在于[[极性]]不同。

## 范畴语义

- 在简单类型论的[[范畴语义]]中，积类型对应[[积 (范畴论)|积]]对象。

- 在依值类型论的范畴语义中，积类型对应[[俯范畴]]里的积，也就是[[拉回]]。

```terms
积类型:
  en: product type
  fr: type produit
  la: typus productus
```
