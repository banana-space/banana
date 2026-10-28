---
title: 无幺环
categories: [一般环论]
navboxes: [代数结构]
---

<problems>
- “性质”一节需要扩充。
</problems>

**无幺环**是一种[[代数结构]]，
类似于[[环]]，但不一定带有幺元。

无幺环通常不算作环。这是[[白马非马]]的一个例子。

## 定义

::: definition [无幺环]
**无幺环**是一个三元组 $(A, +, \cdot)$，其中

- $(A, +)$ 构成 [[Abel 群]]。
  其单位元通常记为 $0$，称为 $A$ 的**零元**。
  元素 $a \in A$ 的逆元通常记为 $-a$，称为 $a$ 的**相反元**。

- $(A, \cdot)$ 构成[[半群]]。

- 乘法对加法满足[[分配律]]：
  对任意 $a, b, c \in A$，有
  \[
  \begin{aligned}
    (a + b) c & = a c + b c, \\
    c (a + b) & = c a + c b.
  \end{aligned}
  \]

在无歧义时，通常将此三元组记作 $A$。
:::

::: definition [无幺环同态]
两个无幺环 $A, B$ 之间的**同态**是一个映射 $f \colon A \to B$，
它与加法、乘法均相容：对任意 $a, b \in A$，有
\[
\begin{aligned}
  f (a + b) & = f (a) + f (b), \\
  f (a b) & = f (a) \, f (b).
\end{aligned}
\]
:::

::: definition [无幺环范畴]
所有无幺环和它们之间的同态构成的[[范畴]]称为**无幺环范畴**，
记作 $\mathsf{Rng}$。
:::

## 例子

- 任何[[环]]，以及其中的任何[[理想]]，都是无幺环。
  例如，对任何 $n \in \mathbb{Z}$，$n \mathbb{Z}$ 都是无幺环。

- 如果 $A$ 是无幺环，$n$ 是自然数，
  那么 $A$ 上的所有 $n \times n$ [[矩阵]]，配备[[矩阵乘法]]，
  构成一个无幺环 $\mathrm{M}_n (A)$。

## 性质

```terms
无幺环:
  en: [rng, nonunital ring]
  de: Pseudo-Ring :m
  fr: pseudo-anneau :m
  grc: ψευδοδακτύλιος :m
  la: pseudoanellus :m
```
