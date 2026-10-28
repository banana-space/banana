---
title: 端
navboxes: [范畴论]
---

<problems>
- “性质”一节第一个命题中，端的存在性似乎应要求 $\mathcal{C}$ 为小范畴、$\mathcal{D}$ 具有小极限，而不是 $\mathcal{D}$ 为小范畴。
</problems>

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。

:::

**端**是形如 $F \colon \mathcal{C}^{\operatorname{op}} \times \mathcal{C} \to \mathcal{D}$
的函子的极限，
此时它具有一些与[[积分]]类似的性质（比如 [[Fubini 律]]），
因此会使用积分符号对其进行指代。

## 定义

::: definition
令 $\mathcal{C}$ 为范畴，
考虑函子 $F \colon \mathcal{C}^{\operatorname{op}} \times \mathcal{C} \to \mathcal{D}$。
那么 $F$ 的**端**是指极限
\[
\int_{c \in \mathcal{C}}F \coloneqq
\operatorname{lim}\left(\mathsf{TwAr}(\mathcal{C})\xrightarrow{(s,t)} \mathcal{C}^{\operatorname{op}} \times \mathcal{C} \xrightarrow{F} \mathcal{D} \right),
\]
其中 $\mathsf{TwAr}(\mathcal{C})$ 为[[扭箭头范畴]]。
:::

## 显式描述

上述定义可以显式地描述。

设 $X\in\mathcal D$，并且对每个 $c\in\mathcal C$ 都给定一个态射
\[
\lambda_c\colon X\to F(c,c).
\]
称这族态射是**相容的**，如果对每个 $f\colon c\to d$ 都有
\[
F(c,f)\circ \lambda_c
=
F(f,d)\circ \lambda_d.
\]
端是所有这样的$X$中万有的那个。

因此端带有一族典范态射
\[
\pi_c\colon \int_{a\in\mathcal C}F(a,a)\to F(c,c).
\]
对于 $\mathcal C$ 中的每个态射 $f\colon c\to d$，它们满足
\[
F(c,f)\circ\pi_c
=
F(f,d)\circ\pi_d.
\]

即，端由下面的交换图定义。

\[
\begin{tikzcd}
  X && \\
  & {\int_{x\in\mathcal C}F(x, x)} & {F(c, c)} \\
  & {F(d, d)} & {F(c, d)}
  \arrow["{\exists! u}", dashed, from=1-1, to=2-2]
  \arrow["{\lambda_c}", from=1-1, to=2-3]
  \arrow["{\lambda_d}"', from=1-1, to=3-2]
  \arrow["{\pi_{c}}", from=2-2, to=2-3]
  \arrow["{\pi_d}"', from=2-2, to=3-2]
  \arrow["{F(c, f)}", from=2-3, to=3-3]
  \arrow["{F(f, d)}"', from=3-2, to=3-3]
\end{tikzcd}
\]

## 性质

::: proposition
令 $\mathcal{C}$ 和 $\mathcal{D}$ 为小范畴，
$F \colon \mathcal{C}^{\operatorname{op}} \times \mathcal{C} \to \mathcal{D}$ 为函子，
则 $F$ 的端总是存在。
此外，如果 $\mathcal{D} \to \mathcal{D}'$ 保小极限，
那么它也保持端。
:::

::: proposition [Fubini 律]
令 $\mathcal{C}$ 和 $\mathcal{C}'$ 为范畴，
$F \colon \mathcal{C}^{\operatorname{op}} \times \mathcal{C} \times \mathcal{C}'^{\operatorname{op}} \times \mathcal{C}' \to \mathcal{D}$
为函子，那么有同构
\[
\int_{c\in \mathcal{C}} \int_{c' \in \mathcal{C}'} F(c,c,c',c') \simeq \int_{(c,c') \in \mathcal{C} \times \mathcal{C}'} F(c,c,c',c').
\]
:::

端的一大用处是用来计算函子间自然变换所构成的生象。

::: proposition
令 $F,G \colon \mathcal{C} \to \mathcal{D}$ 为函子。
则从 $F$ 到 $G$ 的全体自然变换构成的生象 $\operatorname{Nat}(F,G)$ 可写为
\[
\operatorname{Nat}(F,G) \simeq \int_{x \in \mathcal{C}} \operatorname{Hom}_{\mathcal{D}}(F(x),G(x))
\]
此处右侧为函子
$\mathcal{C}^{\operatorname{op}} \times \mathcal{C} \xrightarrow{F^{\operatorname{op}} \times G} \mathcal{D}^{\operatorname{op}} \times \mathcal{D} \xrightarrow{\operatorname{Hom}_{\mathcal{D}}} \mathsf{Ani}$
的端。
:::

```terms
端:
  en: end
```
