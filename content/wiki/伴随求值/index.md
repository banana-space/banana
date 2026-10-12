---
title: 伴随求值
categories: [类型论]
notices:
  - name: 问题
    items:
      - “语法”一节关于 $F$、$U$ 的文字说明（如“暂停”“执行”是 $F$ 的规则）似乎与该节的语法定义及“类型规则”一节中两者的角色相反。
      - “操作语义”一节需要扩充。
---

**伴随求值**（又名**极性化类型论**）是一种[[类型论]]，它将类型分为两类：

- **值类型**，当我们描述它们的实例时，我们描述它们的构造本身，换言之它以[[构造规则]]为主，
  [[极性]]为正，

- **计算类型**，当我们描述它们的实例时，我们描述对于来自外部的输入，它们如何响应。
  换言之这些类型以[[消去规则]]为主，[[极性]]为负。

借助这种分层，[[计算单子]]可以被解构成一对[[伴随函子|伴随]]。

类似[[伴随逻辑]]把命题分为两类，并且给出一对互相转换的逻辑连接词，
伴随求值也给出了互相转换的连接词。但与之不同的是，伴随求值在语法上就区分计算类型和值类型，
并且一般只考虑两类类型。

伴随求值的表达式也随着类型被分类，但表达式比起类型还多了一种：**栈**。
这意味着伴随求值中有三类不同的[[判断]]。

## 语法

由于伴随求值的框架非常可扩展，全面地考虑所有可能的类型并不现实，
这里只考虑[[单位类型]]、[[积类型]]、[[无交并类型]]、[[函数类型]]这几个基本的类型构造。
值类型和计算类型的语法使用[[形式语言]]定义如下：

\[
\begin{aligned}
  A &::= \top \mid A_1 ⊗ A_2 \mid A_1 + A_2 \mid U(X) \\
  X &::= X_1 × X_2 \mid A_1 ⇀ X_2 \mid F(A)
\end{aligned}
\]

其中，$⊗$ 和 $×$ 类似积类型，$+$ 类似无交并类型，
$⇀$ 类似函数类型，剩下 $U$ 类似伴随逻辑中的 $↑$，$F$ 类似 $↓$。

$⊗$ 和 $×$ 非常类似[[线性逻辑]]中的 $⊗$ 和 $\&$，
前者是值，换言之它的实例是两个值放在一起；
后者是计算，它的实例包含两个计算，对它来说外部输入就是对这两个计算中的一个进行一次选择，
然后它的响应方式就是执行该选择。

伴随求值中最核心的类型就是 $F$ 和 $U$ 了。
对于计算 $C$，$F(C)$ 表示类型为 $C$ 的计算的**代码**，
这个代码可以像值一样被传递、被放进其它的值进行组合，也可以被恢复成计算并执行。
对于值 $A$，$U(A)$ 表示最终会给出类型为 $A$ 的结果的一段计算。

表达式的语法定义如下：

\[
\begin{aligned}
  V ::={} & x \mid ★ \mid V_1 ⊗ V_2 \mid \operatorname{inl}{V_1} \mid \operatorname{inr}{V_2} \mid \operatorname{暂停}(C) \\
  C ::={} &  \operatorname{ret}(V) \mid \operatorname{bind}(C_1; x.C_2) \mid ⟨C_1,C_2⟩ \mid C.1 \mid C.2 \mid \\
     & λx.C \mid \operatorname{ap}(C; V) \mid \operatorname{执行}(V) \mid \operatorname{rec}_\top V\set{C} \mid \\
     & \operatorname{rec}_⊗ V \set{x_1,x_2. C } \mid \operatorname{rec}_+ V \set{x.C_1 | x.C_2 }
\end{aligned}
\]

其中 $\operatorname{暂停}$ 和 $\operatorname{执行}$ 是 $F$ 的规则，
$\operatorname{ret}$ 和 $\operatorname{bind}$ 是 $U$ 的规则。

## 类型规则

针对计算和值，分别有两类判断来处理它们：

- 值的判断 $Γ ⊢ V : A$，
- 计算的判断 $Γ ⊢ C : X$。

其中，[[语境]] $Γ$ 是一组**值类型**。这至关重要，
因为语境决定了变量的类型和[[替换操作]]里面能传入什么样的数据。
既然语境里面都是值类型，那么变量的类型都是值类型。

针对值类型，有如下规则：

\[
\cfrac{}{Γ, x:A ⊢ x:A} \qquad
\cfrac{}{Γ ⊢ ★:\top} \qquad
\cfrac{Γ ⊢ V_1:A_1 \quad Γ ⊢ V_2:A_2}{Γ ⊢ V_1 ⊗ V_2 : A_1 ⊗ A_2}
\]
\[
\cfrac{Γ ⊢ V:A}{Γ ⊢ \operatorname{inl} V : A+A'} \qquad
\cfrac{Γ ⊢ V:A}{Γ ⊢ \operatorname{inr} V : A'+A} \qquad
\cfrac{Γ ⊢ C:X}{Γ ⊢ \operatorname{暂停}(C) : U(X)}
\]

针对计算类型，有如下规则：

\[
\cfrac{Γ ⊢ V: U(X)}{Γ ⊢ \operatorname{执行}(V) : X} \qquad
\cfrac{Γ ⊢ V: \top \quad Γ ⊢ C: X}{Γ ⊢ \operatorname{rec}_\top V \set{C} : X}
\]
\[
\cfrac{Γ ⊢ V:A}{Γ ⊢ \operatorname{ret}(V):F(A)} \qquad
\cfrac{Γ ⊢ C:F(A) \quad Γ,x: A ⊢ C': X}{Γ ⊢ \operatorname{bind}(C; x.C'): X}
\]
\[
\cfrac{Γ ⊢ C_1 : X_1 \quad Γ ⊢ C_2 : X_2}
{Γ ⊢ ⟨C_1, C_2⟩ : X_1 × X_2} \qquad
\cfrac{Γ ⊢ C: X_1 × X_2}{Γ ⊢ C.1 : X_1} \qquad
\cfrac{Γ ⊢ C: X_1 × X_2}{Γ ⊢ C.2 : X_2}
\]
\[
\cfrac{Γ,x : A ⊢ C: X}{Γ ⊢ (λx. C) : A ⇀ X} \qquad
\cfrac{Γ ⊢ C: A ⇀ X \quad Γ ⊢ V : A}{Γ ⊢ \operatorname{ap}(C; V) : X}
\]
\[
\cfrac{Γ ⊢ V: A_1 ⊗ A_2 \quad Γ, x_1 : A_1, x_2 : A_2 ⊢ C : X}
{Γ ⊢ \operatorname{rec}_⊗ V \set{x_1, x_2. C} : X}
\]
\[
\cfrac{Γ ⊢ V : A_1 + A_2 \quad Γ, x: A_1 ⊢ C_1 : X \quad
  Γ, x: A_2 ⊢ C_2 : X}
{Γ ⊢ \operatorname{rec}_+ V \set{x. C_1 | x. C_2} : X}
\]

## 语义

除了表达式的类型规则，为了描述语义，需要引入栈的概念，及其对应的判断，如下所示：

\[
Γ \mid C~X_1~K~X_2
\]

它有前提条件 $Γ ⊢ C : X_1$ 必须成立。
栈表示“接下来需要进行的计算”。
这个判断的意思是在语境 $Γ$ 中，我们拿着 $C:X_1$，
在执行完 $C$ 后还要把它的结果传递给 $K$ 完成接下来的计算，
最后给出的结果类型为 $X_2$。

根据 $C$ 的不同，对栈的操作有两种可能：

- **入栈**：将 $C$ 的一部分拆下来放进 $K$，
- **出栈**：把 $K$ 顶部的数据取出并和 $C$ 结合。

### 操作语义

### 范畴语义

在[[范畴论]]中解释伴随求值需要分别解释值类型和计算类型。
其中值类型的解释非常类似[[Curry–Howard–Lambek 对应]]中对[[简单类型 $λ$ 演算]]的解释，
接下来我们把这个范畴记作 $\mathsf{Ctx}$。

需要注意的是，[[简单类型 $λ$ 演算]]对应[[积闭范畴]]再加上[[余积]]，
但对于前文介绍的伴随求值来说这会多出来一些构造，
比如语法里没有值到值的函数，因此没有[[指数对象]]的直接对应物，
但给伴随求值加上这个类型很容易，所以这种事情可以忽略。

计算类型的解释则相对复杂一些。
我们不直接解释计算类型的实例 $C$，而是解释**栈**。
考虑栈的判断 $Γ \mid C~X_1~K~X_2$，
由于栈处理一个计算 $C$，可以把 $C$ 的类型 $X_1$ 视为栈的输入、
$X_2$ 视为其输出，那么这可以看作一个计算类型 $X_1, X_2$ 之间的态射。
注意这里还有值类型构成的语境 $Γ$，因此计算类型的范畴和值类型的范畴构成[[范畴族]]，
其中值类型的范畴是指标。具体来说，
计算类型的范畴是**局部 $\mathsf{Ctx}$-范畴族**，定义如下。

::: definition
**局部 $\mathsf{Ctx}$-范畴族**是[[$1$-函子]] $F: \mathsf{Ctx} \to \mathsf{Cat}$
（换言之这是严格的[[范畴族]]），满足如下条件：

- 对于 $f ∈ \mathsf{Ctx}(x, y)$，它诱导的函子 $F(f) : F(x) \to F(y)$ 在对象上是[[恒同映射]]。

:::

局部 $\mathsf{Ctx}$-范畴族是一种严格的[[局部常纤维范畴]]。

由于伴随求值中替换操作不改变类型，因此我们要求对应替换操作的函子在对象上恒同，
但它不一定在态射上恒同，这是因为替换操作可能会改变栈。
计算类型的范畴中，恒同态射对应空的栈，态射复合对应栈的拼接。

## 参考文献

```bibliography
Levy2001:
  type: thesis
  degree: phd
  institution: Queen Mary and Westfield College, University of London
  title: Call-By-Push-Value
  author: Paul Blain Levy
  url: https://www.cs.bham.ac.uk/%7epbl/papers/thesisqmwphd.pdf
  year: 2001
Harper2024:
  type: article
  title: Call-By-Push-Value and the Enriched Effect Calculus
  author: Robert Harper
  url: https://www.cs.cmu.edu/%7erwh/courses/atpl/pdfs/cbpv.pdf
  year: 2024
```

```terms
伴随求值:
  en: call-by-push-value
栈:
  en: stack
入栈:
  en: push
出栈:
  en: pop
```
