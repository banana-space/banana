---
title: 离散赋值环
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “定义”一节中命题的证明不完整，只证明了由条件 7 可推出 $\mathfrak{m}$ 是主理想。
- “例子”一节需要扩充。
- 本条目引用了其他条目中定理的编号，跨页定理引用功能暂未实现。
- “性质”一节最后一个命题似乎还需要假设 $\ker f\subsetneqq\mathfrak{p}$（例如 $f\colon\mathbb{Z}\to\mathbb{F}_3$、$\mathfrak{p}=(2)$ 时，或 $f$ 是到剩余域的商映射时，结论不成立）。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**离散赋值环**（一些文献中简称 **DVR**）是一类特殊的[[局部环]]，
简单程度仅次于[[域]]。它是 [[Dedekind 整环]]的局部对应物。

## 定义

::: proposition
对[[局部环]] $(R,\mathfrak{m})$，以下条件等价：

1. {@离散赋值} $R$ 是[[赋值环]]，值群为 $\mathbb{Z}$。

2. {@诺特赋值} $R$ 是 [[Noether 环|Noether]] 的赋值环，且不是域。

3. {@PID} $R$ 是[[主理想整环]]且不是域。

4. {@DD} $R$ 是 [[Dedekind 整环]]且不是域。

5. {@一维正则} $R$ 是[[Krull 维数|一维]][[正则环]]。

6. {@极大理想主} $R$ 是 Noether 整环，$\mathfrak{m}$ 是主理想，且不是域。

7. {@一维整闭} $R$ 是[[整同态|整闭]]的一维 Noether 整环。

:::

::: proof
这里[条件 7](@一维整闭)显得最弱，先写一个从它推出去的。
以 $K$ 记 $R$ 的分式域。

任取非零元 $x\in\mathfrak{m}$。由于 $R$ 是整环，
$x$ 为非零因子，故 $\dim(R/x)=0$，$R/x$ 为 [[Artin 环]]。
取其极小非零理想中的非零元 $\bar{y}$，则由于 $\bar{y}\bar{\mathfrak{m}}\subsetneqq(\bar{y})$，
$\bar{y}\bar{\mathfrak{m}}=0$。
取其在 $R$ 中原像 $y$，则 $y\notin(x)$ 而 $y\mathfrak{m}\subseteq(x)$。
于是考虑理想 $x^{-1}y\mathfrak{m}\subseteq R$。
如果 $x^{-1}y\mathfrak{m}\subseteq\mathfrak{m}$，
那么对 $x^{-1}y\in K$ 用[[整同态]]命题 2.2
的第 4 条，知 $x^{-1}y$ 在 $R$ 上整。由 $R$ 整闭，$x^{-1}y\in R$，
$y\in(x)$，与 $y$ 的取法矛盾。所以只有 $x^{-1}y\mathfrak{m}=R$。
于是 $\mathfrak{m}=Rxy^{-1}$，即 $\mathfrak{m}=(xy^{-1})$
是主理想。
:::

::: definition
满足以上等价条件的局部环 $R$ 称为**离散赋值环**。
极大理想的生成元称为其**素元**。
:::

## 例子

## 性质

离散赋值环中理想和元素都十分简单。

::: proposition
$(R,\mathfrak{m})$ 是离散赋值环，$\pi$ 是其素元。
则 $R$ 中非零理想都形如 $(\pi^n)$，$n\in\mathbb{N}$；
非零元都形如 $u\pi^n$，$u\in R^\times$，$n\in\mathbb{N}$。
:::

::: proposition [与 Dedekind 环的关系]
一个整环是 Dedekind 环，当且仅当其每个素理想处局部环都是离散赋值环或者是域。
:::

此外还有类似[[赋值环]]中推论 3.2 的命题：

::: proposition
设 $A$ 是 Noether 环，$\mathfrak{p}$ 是其一个素理想，
$K$ 是域，$f\colon A\to K$ 是环同态。则 $K$ 有包含
$f(A)$ 的离散赋值环 $R$ 满足 $f^{-1}(\mathfrak{m}_R)=\mathfrak{p}$。
特别地，$(A,\mathfrak{p})$ 是 Noether 局部环时，这相当于说任一环同态
$f\colon A\to K$ 都穿过一个到离散赋值环的局部同态。
:::

```terms
离散赋值环:
  en: discrete valuation ring
  de: diskreter Bewertungsring
  fr: anneau de valuation discrète
```
