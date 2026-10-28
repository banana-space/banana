---
title: 伴随逻辑
categories: [逻辑学]
navboxes: [逻辑学]
---

<problems>
- “伴随相继式演算规则”一节中，乘性的“与”（$A_m \times B_m$）标为极性为负、加性的“与”（$A_m \operatorname{\&} B_m$）标为极性为正，两者似乎写反了。
- “伴随自然演绎规则”一节需要扩充。
</problems>

在[[逻辑学]]中，**伴随逻辑**是[[亚结构逻辑]]的一种，
不直接假设任何[[结构性规则]]，而是对其进行控制。

考虑某种融合了[[线性逻辑]]和[[结构逻辑]]中的命题的新逻辑，
其中拥有将两种命题互相转化的能力。对于线性命题 $A$，
令 $\mathop{↑} A$ 为满足结构性规则版本的 $A$；再引入反向的操作 $\mathop{↓} A$，
就得到了简单的伴随逻辑。
由于 $\mathop{↑} A$ 满足结构规则，我们可以将其复制（借助[[收缩规则]]）多份再转回线性逻辑。
在这基础上，可以引发一些思考：

- 站在[[Curry–Howard 对应]]的视角看待逻辑的话，线性逻辑可以看作是操作资源的程序，
  而结构逻辑可以看作是某种元程序，$\mathop{↑}$ 和 $\mathop{↓}$ 就对应了某种程序的翻译过程。

- 线性逻辑中代表命题满足结构规则的[[$!$ 模态]]可以这样定义：
  \[
  !A ::= \mathop{↓}{\mathop{↑} A}
  \]
  这可以解释 $!$ 的[[极性]]：由于 $\mathop{↑}$ 是负的、$\mathop{↓}$ 是正的，
  因此两者复合后既不是正的也不是负的。

伴随逻辑将这种情况推广到允许多种逻辑融合的情况，而 $\mathop{↑},\mathop{↓}$ 两个运算符也要带上参数，
指定它从哪个逻辑发送到哪个逻辑。

## 逻辑连接词

::: remark
本文不考虑顺序逻辑，换言之，在整个伴随逻辑的框架下，我们都假设[[交换规则]]成立。
若要支持去掉该规则，可能会引入过多的逻辑连接词，不利于展示核心想法。
:::

给定[[拟序集]] $(V, ≤)$，伴随逻辑中的[[命题]]使用[[形式文法]]定义如下，
其中 $l,m,k ∈ V$，且 $l ≥ m ≥ k$：

\[
\begin{aligned}
  A_m, B_m ::={}& A_m → B_m \mid A_m * B_m \\
   \mid{} & A_m + B_m \mid A_m \operatorname{\&} B_m \\
   \mid{} & \mathbf{1} \mid \top \mid \mathbf{0} \mid p_m \\
   \mid{} & \mathop{↑}^m_k A_k \mid \mathop{↓}^l_m A_l
\end{aligned}
\]

其中：

- $m, k, l$ 代表某种[[模态]]，例如“满足某结构性规则”，
- $p_m$ 代表模态 $m$ 下自带的命题。

定义函数 $σ(m) ⊆ \set{W, C}$，其中 $m ∈ V$ 是模态，
$σ(m)$ 代表该模态对应的逻辑支持的结构性规则，
$W$ 代表[[弱化规则]]、$C$ 代表[[收缩规则]]。

## 伴随相继式演算规则

对于[[相继式]] $Δ ⊢ A$，若某规则对 $Δ$ 中的连接词进行消除，
那么称之为**左规则**，反之则称之为**右规则**。

伴随逻辑中的规则使用[[相继式演算]]风格的规则定义如下，用 $Δ$ 代表[[语境]]。

- 结构性规则：
  \[
  \frac{{W} \in \sigma(m) \quad Δ ⊢ C_r}{Δ, A_m ⊢ C_r} \quad \frac{{C} \in \sigma(m) \quad Δ, A_m, A_m ⊢ C_r}{Δ, A_m ⊢ C_r}
  \]

- 和谐规则：
  \[
  \frac{}{A_m ⊢ A_m} \quad
  \frac{Δ ≥ m ≥ r \quad Δ ⊢ A_m \quad Δ', A_m ⊢ C_r}{Δ, Δ' ⊢ C_r}
  \]

- 伴随规则：
  \[
  \frac{Δ ⊢ A_k}{Δ ⊢ \mathop{↑}_k^m A_k}
  \quad \frac{k ≥ r \quad Δ, A_k ⊢ C_r}{Δ, \mathop{↑}_k^m A_k ⊢ C_r}
  \quad \frac{Δ ≥ l \quad Δ ⊢ A_l}{Δ ⊢ \mathop{↓}_m^l A_l}
  \quad \frac{Δ, A_l ⊢ C_r}{Δ, \mathop{↓}_m^l A_l ⊢ C_r}
  \]

- [[蕴涵]]：
  \[
  \frac{Δ, A_m ⊢ B_m}{Δ ⊢ A_m \to B_m}
  \quad \frac{Δ ≥ m \quad Δ ⊢ A_m \quad Δ', B_m ⊢ C_r}{Δ, Δ', A_m \to B_m ⊢ C_r}
  \]

- [[与]]，[[极性]]为负：
  \[
  \frac{Δ ⊢ A_m \quad Δ' ⊢ B_m}{Δ, Δ' ⊢ A_m \times B_m}
  \quad \frac{Δ, A_m, B_m ⊢ C_r}{Δ, A_m \times B_m ⊢ C_r}
  \]

- [[与]]，极性为正：
  \[
  \frac{Δ ⊢ A_m \quad Δ ⊢ B_m}{Δ ⊢ A_m \operatorname{\&} B_m}
  \quad \frac{Δ, A_m ⊢ C_r}{Δ, A_m \operatorname{\&} B_m ⊢ C_r}
  \quad \frac{Δ, B_m ⊢ C_r}{Δ, A_m \operatorname{\&} B_m ⊢ C_r}
  \]

- [[或]]：
  \[
  \frac{Δ ⊢ A_m}{Δ ⊢ A_m+B_m}
  \quad \frac{Δ ⊢ B_m}{Δ ⊢ A_m+B_m}
  \quad \frac{Δ, A_m ⊢ C_r \quad Δ, B_m ⊢ C_r}{Δ, A_m+B_m ⊢ C_r}
  \]

其余规则较为简单，一并列出：

\[
\frac{}{ ⊢ \mathbf1} \quad \frac{Δ ⊢ C_r}{Δ, \mathbf1 ⊢ C_r}
\quad \frac{}{Δ ⊢ \top} \quad \frac{}{Δ, \mathbf{0} ⊢ C_r}
\]

## 伴随自然演绎规则

参考 [@Sophia]。

另见[[相继式演算–自然演绎类比]]。

## 参考文献

```bibliography
Lambek:
  type: article
  author: [Klaas Pruiksma, William Chargin, Frank Pfenning, Jason Reed]
  year: 2018
  title: Adjoint Logic
Sophia:
  type: preprint
  title: Adjoint Natural Deduction (Extended Version)
  author: [Junyoung Jang, Sophia Roshal, Frank Pfenning, Brigitte Pientka]
  year: 2024
  arxiv: '2402.01428'
```

```terms
伴随逻辑:
  en: adjoint logic
```
