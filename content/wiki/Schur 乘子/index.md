---
title: Schur 乘子
categories: [群论]
navboxes: [群论]
---

<problems>
- “基本性质”一节中第一个命题对有限表现群似乎不成立（例如 $G = \mathbb{Z}^2$ 时 $H_2(G,\mathbb{Z}) \cong \mathbb{Z}$，而 $H^2(G,\mathbb{Q}/\mathbb{Z})^\wedge$ 是 $\mathbb{Q}/\mathbb{Z}$ 的对偶），对有限群成立。
- “例子”一节需要扩充。
</problems>

**Schur 乘子**是一个[[群论]]概念。
给定[[群]] $G$，其Schur 乘子即$G$的整系数二阶[[群同调]] $H_2(G,\mathbb Z)$，
是一个[[Abel 群]]。它最早由[[Issai Schur]] 在1904 年研究[[射影表示]]的分类时候提出，故得名。

## 基本性质

::: proposition
对有限表现群$G$，我们有典范同构
\[
H_2(G,\mathbb Z)\cong H^2(G,\mathbb{Q}/\mathbb{Z})^\wedge.
\]
其中 $M^\wedge$ 表示 $\operatorname{Hom}(M,\mathbb{Q}/\mathbb{Z})$，
对交换群 $M$。
:::

此外，如果我们知道该群的[[群表现]]，那么我们可以使用如下的**Hopf 同调公式**来便捷地计算Schur 乘子：

::: proposition [Hopf 同调公式]
设$G$是[[有限群]]，若$G\cong F/R$其中$F$是有限生成的自由群，则
\[
H_2(G,\mathbb Z)\cong (R\cap[F,F])/[F,R].
\]
:::

## 例子
