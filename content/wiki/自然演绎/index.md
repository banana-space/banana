---
title: 自然演绎
categories: [证明论]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**自然演绎**是一种使用[[直觉主义相继式]]的[[逻辑]]。

## 推导规则

此处假设[[结构性规则]]都成立。

- [[恒同规则]]和[[切规则]]：
  \[
  \frac{}{Γ, A ⊢ A} \quad \frac{Γ ⊢ A \quad Γ, A ⊢ C}{Γ ⊢ C}
  \]

- [[蕴涵]]，其中第二条规则叫做[[肯定前件]]：
  \[
  \frac{Γ, A ⊢ B}{Γ ⊢ A → B} \quad
  \frac{Γ ⊢ A → B \qquad Γ ⊢ A}{Γ ⊢ B}
  \]

- [[与]]的规则：
  \[
  \frac{Γ ⊢ A \quad Γ ⊢ B}{Γ ⊢ A ∧ B} \quad
  \frac{Γ ⊢ A ∧ B}{Γ ⊢ A} \quad
  \frac{Γ ⊢ A ∧ B}{Γ ⊢ B}
  \]
  其[[单位元]]的规则：
  \[
  \frac{}{Γ ⊢ \mathbf{1}}
  \]

- [[或]]：
  \[
  \frac{Γ ⊢ A}{Γ ⊢ A ∨ B} \quad
  \frac{Γ ⊢ B}{Γ ⊢ A ∨ B} \quad
  \frac{Γ ⊢ A ∨ B \quad Γ, A ⊢ C \quad Γ, B ⊢ C}{Γ ⊢ C}
  \]
  其[[单位元]]的规则：
  \[
  \frac{Γ ⊢ \mathbf{0}}{Γ ⊢ C}
  \]

## 性质

在使用相同的[[逻辑连接词]]时，自然演绎等价于[[相继式演算]]。
另外自然演绎满足[[切消除]]定理，即[[切规则]]是[[可容许规则]]。

```terms
自然演绎:
  en: natural deduction
```
