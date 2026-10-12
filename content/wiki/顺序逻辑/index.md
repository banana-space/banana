---
title: 顺序逻辑
categories: [逻辑学]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**顺序逻辑**是[[亚结构逻辑]]的一种，
不假设任何[[结构性规则]]。

因此，在[[线性逻辑]]的基础上，顺序逻辑将线性的[[蕴涵]]关系 $A ⊸ B$ 分裂为两种：
左蕴涵 $A \rightarrowtail B$ 和右蕴涵 $B \twoheadrightarrow A$。
在 $Ω ⊢ B$ 且 $A ∈ Ω$ 的情况下，
$A$ 左蕴涵还是右蕴涵 $B$ 取决于 $A$ 在 $Ω$ 的最左边还是最右边。

::: remark
在[@Lambek]原文中，左右蕴涵的符号如下：
\[
\begin{aligned}
  A &\rightarrowtail B   &对应~ A &\operatorname{\backslash} B \\
  A &\twoheadrightarrow B &对应~ B &\operatorname{/} A
\end{aligned}
\]

本文使用的是 [[Frank Pfenning]] 版本的符号，
该版本没有改变左右操作符的顺序，且更加接近某种“箭头”，和 $⊸$ 类似。
:::

## 逻辑连接词

<see>[[逻辑连接词]]</see>

顺序逻辑中的[[命题]]使用[[形式文法]]定义如下：

\[
\begin{aligned}
  A, B ::={}& A \operatorname{•} B \mid A \rightarrowtail B \mid A \twoheadrightarrow B \\
   \mid{} & A ⊕ B \mid A \operatorname{\&} B \\
   \mid{} & \mathbf{1} \mid \top \mid \mathbf{0}
\end{aligned}
\]

除此之外还有类比左右蕴涵的一种反过来的 $A \operatorname{•} B$，记作 $A \circ B$（读作“反接”），
它完全等价于 $B \operatorname{•} A$，因此基本上可以说是冗余的，不再赘述。

## 规则

对于[[相继式]] $Ω ⊢ A$，若某规则对 $Ω$ 中的连接词进行消除，
那么称之为**左规则**，反之则称之为**右规则**。

顺序逻辑中使用[[相继式演算]]风格的规则定义如下，用 $Ω$ 代表[[语境]]。
若有多个语境，则使用下标区分。
若要使用[[自然演绎]]，请参见[[相继式演算–自然演绎类比]]。

- [[与]]对应的连接词 $A \operatorname{•} B$（读作“$A$ 接 $B$”）：

  \[
  \frac{Ω_1 ⊢ A \quad Ω_2 ⊢ B}{Ω_1, Ω_2 ⊢ A \operatorname{•} B} \quad
  \frac{Ω_1, A, B, Ω_2 ⊢ C}{Ω_1, A \operatorname{•} B, Ω_2 ⊢ C}
  \]

- 左蕴涵：

  \[
  \frac{A, Ω ⊢ B}{Ω ⊢ A \rightarrowtail B} \quad
  \frac{Ω_A ⊢ A \quad Ω_L, B, Ω_R ⊢ C}{Ω_L, Ω_A, A \rightarrowtail B, Ω_R ⊢ C}
  \]

- 右蕴涵：

  \[
  \frac{Ω, A ⊢ B}{Ω ⊢ A \twoheadrightarrow B} \quad
  \frac{Ω_A ⊢ A \quad Ω_L, B, Ω_R ⊢ C}{Ω_L, A \twoheadrightarrow B, Ω_A, Ω_R ⊢ C}
  \]

后续的规则类似[[线性逻辑]]，只是额外有顺序限制而已，一并列出。

\[
\frac{Ω ⊢ A \quad Ω ⊢ B}{Ω ⊢ A \operatorname{\&} B} \quad
\frac{Ω_L, A, Ω_R ⊢ C}{Ω_L, A \operatorname{\&} B, Ω_R ⊢ C} \quad
\frac{Ω_L, B, Ω_R ⊢ C}{Ω_L, A \operatorname{\&} B, Ω_R ⊢ C}
\]

\[
\frac{Ω ⊢ A}{Ω ⊢ A \oplus B} \quad
\frac{Ω ⊢ B}{Ω ⊢ A \oplus B} \quad
\frac{Ω_L, A, Ω_R ⊢ C \quad Ω_L, B, Ω_R ⊢ C}{Ω_L, A \oplus B, Ω_R ⊢ C}
\]

\[
\frac{}{ ⊢ \mathbf{1}} \quad
\frac{Ω_L, Ω_R ⊢ C}{Ω_L, \mathbf{1}, Ω_R ⊢ C}
\]

\[
\frac{}{Ω ⊢ \top} \quad
\frac{}{Ω_L, \mathbf{0}, Ω_R ⊢ C}
\]

另见：[[切规则]]

## 应用

### 文法解析

顺序逻辑可以用于[[语境无关文法]]的解析，
它天生就对前后顺序敏感，因此语境无关文法可以轻易地翻译成某种顺序逻辑。

::: example
如下文法描述了“成对匹配的括号”构成的[[语言]]：
\[
\begin{aligned}
  S ::= \set{S} \mid \set{} \mid S S
\end{aligned}
\]
例如字符串 $\set{\set{}}\set{}$ 可以如此匹配：
\[
S → S S → \set{S}\set{} → \set{\set{}}\set{}
\]
该文法可以用如下规则描述：
\[
\frac{\set{}}{S} \quad
\frac{\set{S}}{S} \quad
\frac{S S}{S}
\]
其中，两种括号、$S$ 都看作逻辑命题，字符串可以看作一组[[公式]]或者说逻辑意义上的[[语境]]，
若某字符串能推出单个的 $S$，则可以说它属于该语言。
:::

## 参考文献

```bibliography
Lambek:
  type: article
  author: Joachim Lambek
  year: 1958
  title: The mathematics of sentence structure
  journaltitle: The American Mathematical Monthly
  volume: 65
  number: 3
  pages: 154–170
```

```terms
顺序逻辑:
  en: order logic
  ja: 非<ひ>可<か>換<かん>論<ろん>理<り>
$A$ 左蕴涵 $B$:
  en: $A$ under $B$
$A$ 右蕴涵 $B$:
  en: $B$ over $A$
$A$ 接 $B$:
  en: $A$ fuse $B$
$A$ 反接 $B$:
  en: $A$ twist $B$
```
