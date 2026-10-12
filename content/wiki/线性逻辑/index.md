---
title: 线性逻辑
categories: [逻辑学]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**线性逻辑**是[[亚结构逻辑]]的一种，
只假设[[结构性规则]]中的[[交换规则]]。

线性逻辑中的[[蕴涵]]记作 $A ⊸ B$，读作“棒棒糖”或者“线性蕴涵”。

## 逻辑连接词

<see>[[逻辑连接词]]</see>

线性逻辑中的[[命题]]使用[[形式文法]]定义如下：

\[
\begin{aligned}
  A, B ::={}& A ⊸ B \mid A ⊗ B \mid 1 \mid A \operatorname{\&} B \mid ⊤ \mid A ⊕ B \mid 0
\end{aligned}
\]

在使用[[经典相继式演算]]的线性逻辑中，还要加入 $A \operatorname{⅋} B$ 这个连接词，
但本文使用[[直觉主义相继式]]，因此不需要它。

早期线性逻辑中，还有[[$!$ 模态]]这个连接词，
但实际上它最好在[[伴随逻辑]]中讨论。

## 规则

线性逻辑中使用[[相继式演算]]风格的规则定义如下，用 $Δ$ 代表[[语境]]。
若有多个语境，则使用下标区分。
若要使用[[自然演绎]]，请参见[[相继式演算–自然演绎类比]]。

对于[[相继式]] $Δ ⊢ A$，若某规则对 $Δ$ 中的连接词进行消除，
那么称之为**左规则**，反之则称之为**右规则**。

- [[与]]对应的连接词 $A ⊗ B$（乘性与），[[极性]]为正：

  \[
  \frac{Δ_1 ⊢ A \quad Δ_2 ⊢ B}{Δ_1, Δ_2 ⊢ A \otimes B} \quad
  \frac{Δ, A, B ⊢ C}{Δ, A \otimes B ⊢ C}
  \]

- [[与]]对应的另一连接词 $A \operatorname{\&} B$（加性与），[[极性]]为负：

  \[
  \frac{\Delta \vdash A \quad \Delta \vdash B}{\Delta \vdash A \operatorname{\&} B}
  \quad
  \frac{\Delta, A \vdash C}{\Delta, A \operatorname{\&} B \vdash C}\quad
  \frac{\Delta, B \vdash C}{\Delta, A \operatorname{\&} B \vdash C}
  \]

  该连接词又叫“外选择”，因为在使用它的左规则时需要从两条规则中选择一个。
  左规则消除的是前提条件中的命题，相对于需要证明的命题来说是“外部”。

- 线性[[蕴涵]]对应的连接词：
  \[
  \frac{\Delta, A \vdash B}{\Delta \vdash A \multimap B} \quad
  \frac{\Delta_1 \vdash A \quad \Delta_2, B \vdash C}{\Delta_1, \Delta_2, A \multimap B \vdash C}
  \]
  在自然演绎中，第二条规则如下：
  \[
  \frac{Δ₁ ⊢ A \multimap B \quad Δ₂ ⊢ A}{Δ₁, Δ₂ ⊢ B}
  \]

- [[或]]对应的连接词：
  \[
  \frac{Δ ⊢ A}{Δ ⊢ A \oplus B} \quad
  \frac{Δ ⊢ B}{Δ ⊢ A \oplus B} \quad
  \frac{Δ, A ⊢ C \quad Δ, B ⊢ C}{Δ, A \oplus B ⊢ C}
  \]

  该连接词又叫“内选择”，因为在使用它的右规则时需要从两条规则中选择一个。
  右规则消除的是作为结论的命题，相对于需要证明的命题来说是“内部”。

剩余规则较为简单，一并列出：

\[
\frac{}{ ⊢ \mathbf{1}} \quad
\frac{Δ ⊢ C}{Δ, \mathbf{1} ⊢ C}
\]

\[
\frac{}{Δ ⊢ \top} \quad
\frac{}{Δ, \mathbf{0} ⊢ C}
\]

另见：[[切规则]]

## 应用

- [[通信类型]]和直觉主义线性逻辑之间有[[Curry–Howard 对应]]关系。

- [[半公理化逻辑]]由线性逻辑修改而来。

```terms
线性逻辑:
  en: linear logic
  ja: 線<せん>形<けい>論<ろん>理<り>
$A$ 线性蕴涵 $B$:
  en: $A$ loli $B$
  ja: $A$ 線<せん>形<けい>含<がん>意<い> $B$
外选择:
  en: external choice
内选择:
  en: internal choice
```
