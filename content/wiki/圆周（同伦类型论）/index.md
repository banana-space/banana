---
title: 圆周（同伦类型论）
aliases: [圆（同伦类型论）, 圆周类型]
categories: [同伦类型论]
navboxes: [类型论]
---

在[[同伦类型论]]中，**圆周**是一个[[高阶归纳类型]]，对应作为[[拓扑空间]]的[[圆周]] $S^1$。

## 类型规则

圆周类型记作 $S^1$。

### 构造规则

\[
\cfrac{Γ\vdash}{Γ\vdash\mathrm{base}:S^1}
\quad
\cfrac{Γ\vdash}{Γ\vdash\operatorname{loop}:\operatorname{Id}_{S^1}(\mathrm{base}, \mathrm{base})}
\]

这条规则可以直观理解为：
圆周中含有一个点（称为基点），且从这个点到自身连一条线。
这对应了圆周通常的 [[CW 复形]]结构。

### 消去规则

简单类型的消去规则：

\[
\cfrac{Γ\vdash b:X \quad Γ\vdash p:\operatorname{Id}_X(b, b)}
{Γ\vdash\operatorname{rec}_{S^1}(b,p):S^1→ X}
\]

依值类型的消去规则需要用到等量代换的函数，在[[J 公理]]中有证明：
\[
\operatorname{subst}:
(P:A→ \mathcal U) →
\operatorname{Id}_A(a, b)
→ P(a)→ P(b)
\]

规则如下：

\[
\cfrac{
Γ\vdash X:S^1→ \mathcal U \quad
Γ\vdash b:X(\operatorname{base}) \quad
Γ\vdash p:\operatorname{Id}_{X}(b, \operatorname{subst}(X,\operatorname{loop},b))}
{Γ\vdash\operatorname{rec}_{S^1}(b,p):(x:S^1)→ X(x)}
\]

### 计算规则

简单类型的计算规则：

\[
{\operatorname{rec}_{S^1}(b, p)(\mathrm{base})=b:X}
\\
{\operatorname{ap}_{\operatorname{rec}_{S^1}(b, p)}(\mathrm{loop})=p:\operatorname{Id}_X(b, b)}
\]

第二条规则可以看作是 $\operatorname{rec}_{S^1}(b, p)(\mathrm{loop})=p$ 的严谨写法。

消去规则和计算规则可以理解为圆周的“[[万有性质]]”：
给定空间 $X$ 中的点 $b$ 和 $b$ 到自身的道路 $p$，
存在从圆周到 $X$ 的映射，满足圆周中基点和环路分别映至 $b$ 和 $p$。

依值类型的计算规则：

\[
{\operatorname{rec}_{S^1}(b, p)(\mathrm{base})=b:X(\operatorname{base})}
\\
{\operatorname{ap}_{\operatorname{rec}_{S^1}(b, p)}(\mathrm{loop})=p:
\operatorname{Id}_{X}(b, \operatorname{subst}(X,\operatorname{loop},b))}
\]

## 性质

::: proposition
圆周类型的[[环路空间]]同构于[[整数 (同伦类型论)|整数]]。
换言之，类型 $\operatorname{Id}(\mathrm{base}, \mathrm{base})$ 和整数的类型同构。
:::

::: proof
参见[[编码–解码法]]。
:::

圆周类型给出了一个 [[K 公理]]的反例：

::: lemma
如下命题蕴含假命题，也就是说该命题错误：
\[
\operatorname{Id}_{\operatorname{Id}_{S^1}(\mathrm{base}, \mathrm{base})}
(\mathrm{loop}, \mathrm{refl}_{\mathrm{base}})
\]
:::
